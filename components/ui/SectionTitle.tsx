interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  return (
    <div className={`mb-8 text-${align}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-yellow)]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 mt-2 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
