interface DateRangeProps {
  start: string;
  end: string | null;
  label: string;
}

export function DateRange({ start, end, label }: DateRangeProps) {
  return (
    <div
      className="shrink-0 font-mono text-[13px] tabular-nums tracking-tight text-muted-foreground print:leading-tight"
      title={`${label}: ${start} to ${end ?? "Present"}`}
    >
      {start} - {end ?? "Present"}
    </div>
  );
}
