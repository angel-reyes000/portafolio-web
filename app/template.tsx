/** Se vuelve a montar en cada navegación: aplica una entrada suave al contenido. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-fade-up">{children}</div>;
}
