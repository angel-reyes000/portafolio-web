import { icons, type IconKey } from "@/lib/icons";

interface IconProps {
  name: IconKey;
  className?: string;
  /** Si se indica, el icono se anuncia a lectores de pantalla; si no, es decorativo. */
  label?: string;
}

export function Icon({ name, className, label }: IconProps) {
  const Component = icons[name];
  return label ? (
    <Component className={className} role="img" aria-label={label} />
  ) : (
    <Component className={className} aria-hidden="true" focusable="false" />
  );
}
