interface OutlineHeadingProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Giant stroked/outline display heading — ported from buckssauce.com's
 * `[-webkit-text-stroke:2px_var(--color-foreground)]` + transparent fill technique
 * used on its "WEAPON" / "REVIEWS" section headers (text-stroke, not filled text).
 */
export default function OutlineHeading({ children, className = "" }: OutlineHeadingProps) {
  return (
    <h2
      className={`font-display text-180 uppercase leading-[0.85] tracking-[-0.02em] text-transparent [-webkit-text-stroke:2px_var(--color-foreground)] pb-[0.12em] ${className}`}
    >
      {children}
    </h2>
  );
}
