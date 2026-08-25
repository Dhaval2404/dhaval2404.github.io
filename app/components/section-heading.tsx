type SectionHeadingProps = { title: string; dark?: boolean };

export default function SectionHeading({
  title,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-between mb-12">
      <h2
        className={`text-3xl font-bold tracking-tight ${dark ? "text-slate-900 dark:text-slate-50" : "text-slate-heading"}`}
      >
        {title}
      </h2>
      <div
        className={`ml-8 h-px flex-1 ${dark ? "bg-slate-200 dark:bg-slate-700" : "bg-border-light"}`}
      />
    </div>
  );
}
