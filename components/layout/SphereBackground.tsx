"use client";

import { useEffect, useRef } from "react";

/*
 * Fondo animado de esferas rojas: recreación en código de `fondo.webp`.
 *
 * El aspecto (colores y degradados) vive en `app/globals.css` (`.sphere-field`, `.sphere`).
 * Aquí solo se controla el movimiento: cada esfera nace al fondo casi invisible, crece
 * mientras se acerca y sale por el borde de la pantalla. Al salir renace al fondo en otra
 * posición, así que la animación nunca termina.
 *
 * Al cargar se dibuja la misma composición de la imagen original y desde ahí todo avanza.
 * Mientras llega el JavaScript (y con `prefers-reduced-motion`) se ve la imagen estática
 * de `body::before`, que tiene exactamente esa composición.
 */

// Esferas de la imagen original medidas sobre su lienzo de 1920×1080:
// [centroX, centroY, ancho, alto]
type ImageSphere = readonly [cx: number, cy: number, width: number, height: number];

const CANVAS = { width: 1920, height: 1080 } as const;

const IMAGE_SPHERES: readonly ImageSphere[] = [
  [168, 106, 91, 74],
  [516, 86, 218, 174],
  [882, 131, 39, 25],
  [1206, 71, 129, 111],
  [1582, 25, 175, 150],
  [1706, 183, 310, 279],
  [292, 206, 48, 34],
  [821, 316, 113, 91],
  [430, 388, 324, 235],
  [1241, 364, 244, 188],
  [752, 490, 52, 48],
  [1045, 528, 27, 30],
  [1536, 482, 25, 32],
  [168, 693, 336, 283],
  [750, 644, 140, 114],
  [1277, 626, 75, 64],
  [1611, 694, 125, 100],
  [1897, 586, 330, 283],
  [530, 804, 80, 64],
  [1401, 868, 77, 64],
  [1818, 891, 202, 171],
  [960, 944, 319, 275],
  [380, 952, 90, 75],
  [315, 1052, 247, 211],
  [1556, 1114, 294, 251],
];

const CONFIG = {
  population: 30, // esferas a la vez en una pantalla de 1920×1080
  minPopulation: 18, // nunca menos, aunque la pantalla sea pequeña
  minVisible: 5, // si alguna vez hubiera menos visibles, nacen más
  life: [10, 14], // segundos desde que nace al fondo hasta que sale
  growth: 18, // cuántas veces crece desde que nace hasta que sale
  fadeIn: 0.3, // fracción de la vida en la que pasa de invisible a opaca
  finalHeight: [150, 540], // alto en px (a 1920×1080) que alcanza justo al salir
  sizeBias: 0.5, // < 1 favorece esferas grandes, como en la imagen
  aspect: [1.12, 1.3], // ancho / alto: las esferas originales son ovaladas
  spawnArea: 0.92, // zona de nacimiento (fracción de la pantalla)
  spread: 0.35, // radianes de variación en la dirección de salida
  exitDelay: 1.6, // > 1: crecen cerca de donde nacen y aceleran al salir
  spawnRate: 1.4, // nacen hasta 1.4 veces más rápido de lo que salen
  desktopFrom: 768, // mismo corte que `fondo.webp` / `fondo-movil.webp`
} as const;

interface Sphere {
  el: HTMLDivElement;
  seed: boolean; // viene de la composición inicial
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  startHeight: number;
  endHeight: number;
  endWidth: number;
  life: number;
  bornAt: number;
  progress: number;
  x: number;
  y: number;
  height: number;
  width: number;
  opacity: number;
}

const random = (min: number, max: number) => min + Math.random() * (max - min);
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smoothstep = (x: number) => {
  const t = clamp(x, 0, 1);
  return t * t * (3 - 2 * t);
};

/** Crea el campo de esferas dentro de `container` y devuelve la función que lo detiene. */
function createSphereField(container: HTMLDivElement): () => void {
  const logGrowth = Math.log(CONFIG.growth);
  const active: Sphere[] = [];
  const pool: HTMLDivElement[] = [];
  let width = 0;
  let height = 0;
  let unit = 1;
  let population: number = CONFIG.population;
  let spawnInterval = 0.3;
  let clock = 0;
  let lastSpawn = -Infinity;
  let lastFrame = 0;
  let frameId = 0;

  function measure() {
    width = container.clientWidth || window.innerWidth;
    height = container.clientHeight || window.innerHeight;
    const area = (width * height) / (CANVAS.width * CANVAS.height);
    unit = clamp(Math.sqrt(area), 0.35, 1.6);
    population = Math.max(CONFIG.minPopulation, Math.round(CONFIG.population * clamp(area, 0.5, 1.4)));
    // Segundos entre nacimientos para mantener la población estable.
    const averageLife = (CONFIG.life[0] + CONFIG.life[1]) / 2;
    spawnInterval = averageLife / population / CONFIG.spawnRate;
  }

  function newSphere(seed: boolean): Sphere {
    const el = pool.pop() ?? document.createElement("div");
    el.className = "sphere";
    return {
      el,
      seed,
      x0: 0,
      y0: 0,
      x1: 0,
      y1: 0,
      startHeight: 0,
      endHeight: 0,
      endWidth: 0,
      life: 0,
      bornAt: 0,
      progress: 0,
      x: 0,
      y: 0,
      height: 0,
      width: 0,
      opacity: 0,
    };
  }

  // Prepara la trayectoria de una esfera que ahora mide `currentHeight` en (px, py) y que
  // saldrá de la pantalla cuando mida `endHeight`. Avanza en línea recta ligada a su tamaño,
  // como se ve en perspectiva un objeto que viene hacia la cámara.
  function launch(s: Sphere, px: number, py: number, currentHeight: number, endHeight: number, aspect: number) {
    const life = random(CONFIG.life[0], CONFIG.life[1]);
    const progress = 1 + Math.log(currentHeight / endHeight) / logGrowth;

    // Se aleja del centro de la pantalla, como si la cámara avanzara.
    const cx = width / 2;
    const cy = height / 2;
    let angle = Math.hypot(px - cx, py - cy) < 2 ? random(0, Math.PI * 2) : Math.atan2(py - cy, px - cx);
    angle += random(-CONFIG.spread, CONFIG.spread);
    const ux = Math.cos(angle);
    const uy = Math.sin(angle);

    // Punto donde la esfera, ya en su tamaño final, queda justo fuera de la pantalla.
    const mx = (endHeight * aspect) / 2 + 2;
    const my = endHeight / 2 + 2;
    const tx = ux > 1e-6 ? (width + mx - px) / ux : ux < -1e-6 ? (-mx - px) / ux : Infinity;
    const ty = uy > 1e-6 ? (height + my - py) / uy : uy < -1e-6 ? (-my - py) / uy : Infinity;
    const t = Math.max(0, Math.min(tx, ty));

    s.x0 = px;
    s.y0 = py;
    s.x1 = px + ux * t;
    s.y1 = py + uy * t;
    s.startHeight = currentHeight;
    s.endHeight = endHeight;
    s.endWidth = endHeight * aspect;
    s.life = life;
    s.bornAt = clock - progress * life;
    s.el.style.width = `${s.endWidth.toFixed(1)}px`;
    s.el.style.height = `${endHeight.toFixed(1)}px`;
  }

  // Una esfera nueva siempre nace al fondo: diminuta y transparente.
  function spawn() {
    const s = newSphere(false);
    const t = Math.pow(Math.random(), CONFIG.sizeBias);
    const endHeight = lerp(CONFIG.finalHeight[0], CONFIG.finalHeight[1], t) * unit;
    const aspect = random(CONFIG.aspect[0], CONFIG.aspect[1]);
    const px = width / 2 + (Math.random() - 0.5) * width * CONFIG.spawnArea;
    const py = height / 2 + (Math.random() - 0.5) * height * CONFIG.spawnArea;
    launch(s, px, py, endHeight / CONFIG.growth, endHeight, aspect);
    container.prepend(s.el); // la más lejana se dibuja detrás de todas
    active.push(s);
    lastSpawn = clock;
    paint(s);
  }

  // Composición inicial: la de la imagen original.
  // En escritorio se coloca igual que `fondo.webp` con `background-size: cover` (centrada
  // arriba), así el relevo desde la imagen estática no se nota. En móvil se comprime la
  // composición completa a la pantalla.
  function seed() {
    const desktop = width >= CONFIG.desktopFrom;
    const scale = desktop ? Math.max(width / CANVAS.width, height / CANVAS.height) : unit;
    const offsetX = desktop ? (width - CANVAS.width * scale) / 2 : 0;
    const sx = desktop ? scale : width / CANVAS.width;
    const sy = desktop ? scale : height / CANVAS.height;

    const ordered = [...IMAGE_SPHERES].sort((a, b) => a[3] - b[3]); // pequeñas (lejanas) detrás
    for (const [cx, cy, w, h] of ordered) {
      const px = offsetX + cx * sx;
      const py = cy * sy;
      const currentHeight = h * scale;
      const currentWidth = w * scale;
      const outside =
        px + currentWidth / 2 < 0 || px - currentWidth / 2 > width || py + currentHeight / 2 < 0 || py - currentHeight / 2 > height;
      if (outside) continue;

      const s = newSphere(true);
      const aspect = clamp(w / h, 1, 1.4);
      // Las grandes ya están cerca: les queda poco por crecer antes de salir.
      // Las pequeñas aún están lejos: tardan más y relevan a las grandes.
      // El azar escalona sus salidas para que no se vayan todas a la vez.
      const grow = lerp(9, 2.2, clamp(h / 300, 0, 1)) * random(0.8, 1.25);
      const endHeight = Math.max(currentHeight * 1.5, Math.min(currentHeight * grow, 700 * scale));
      launch(s, px, py, currentHeight, endHeight, aspect);
      container.appendChild(s.el);
      active.push(s);
      paint(s);
    }
  }

  function paint(s: Sphere) {
    const p = (clock - s.bornAt) / s.life;
    const h = s.endHeight * Math.pow(CONFIG.growth, p - 1);
    const scale = h / s.endHeight;
    const travel = Math.pow(clamp((h - s.startHeight) / (s.endHeight - s.startHeight), 0, 1), CONFIG.exitDelay);
    const x = s.x0 + (s.x1 - s.x0) * travel;
    const y = s.y0 + (s.y1 - s.y0) * travel;
    const opacity = s.seed ? 1 : smoothstep(p / CONFIG.fadeIn);
    s.progress = p;
    s.x = x;
    s.y = y;
    s.height = h;
    s.width = s.endWidth * scale;
    s.opacity = opacity;
    s.el.style.transform =
      `translate3d(${(x - s.endWidth / 2).toFixed(2)}px, ${(y - s.endHeight / 2).toFixed(2)}px, 0) ` +
      `scale(${scale.toFixed(5)})`;
    s.el.style.opacity = opacity.toFixed(3);
  }

  function isOffscreen(s: Sphere) {
    return s.x + s.width / 2 < 0 || s.x - s.width / 2 > width || s.y + s.height / 2 < 0 || s.y - s.height / 2 > height;
  }

  function remove(index: number) {
    const [s] = active.splice(index, 1);
    s.el.remove();
    s.el.style.opacity = "0";
    pool.push(s.el);
  }

  function frame(now: number) {
    const dt = lastFrame ? Math.min((now - lastFrame) / 1000, 0.05) : 0;
    lastFrame = now;
    clock += dt;

    let visible = 0;
    let born = 0; // las de la composición inicial no cuentan: van de salida
    for (let i = active.length - 1; i >= 0; i--) {
      const s = active[i];
      paint(s);
      if (s.progress >= 1 || isOffscreen(s)) {
        remove(i);
        continue;
      }
      if (!s.seed) born++;
      if (s.opacity >= 0.5 && s.height >= 6) visible++;
    }

    // Desde el primer cuadro nacen esferas al fondo a ritmo constante: cuando las de la
    // composición inicial salen, ya vienen otras acercándose detrás.
    const target = visible < CONFIG.minVisible ? population + 6 : population;
    if (born < target && clock - lastSpawn >= spawnInterval) spawn();

    frameId = requestAnimationFrame(frame);
  }

  function onResize() {
    const previousWidth = width;
    const previousHeight = height;
    measure();
    const sx = width / previousWidth;
    const sy = height / previousHeight;
    for (const s of active) {
      s.x0 *= sx;
      s.x1 *= sx;
      s.y0 *= sy;
      s.y1 *= sy;
    }
  }

  measure();
  seed();
  window.addEventListener("resize", onResize);
  frameId = requestAnimationFrame(frame);
  // Un cuadro después, para que la transición de entrada (opacidad) se aplique.
  const showId = requestAnimationFrame(() => {
    container.dataset.active = "";
  });

  return function stop() {
    cancelAnimationFrame(frameId);
    cancelAnimationFrame(showId);
    window.removeEventListener("resize", onResize);
    delete container.dataset.active;
    container.replaceChildren();
  };
}

/** Capa fija detrás de todo el contenido con las esferas en movimiento. */
export function SphereBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    // Con "reducir movimiento" no se anima: queda la imagen estática de `body::before`.
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let stop: (() => void) | null = reducedMotion.matches ? null : createSphereField(container);
    const onChange = () => {
      stop?.();
      stop = reducedMotion.matches ? null : createSphereField(container);
    };
    reducedMotion.addEventListener("change", onChange);
    return () => {
      reducedMotion.removeEventListener("change", onChange);
      stop?.();
    };
  }, []);

  return <div ref={ref} className="sphere-field" aria-hidden="true" />;
}
