import { SECTION_TITLES } from "@/data/resume-data";
import { Section } from "../../components/ui/section";

interface AboutProps {
  summary: string;
  className?: string;
}

export function Summary({ summary, className }: AboutProps) {
  return (
    <Section
      title={SECTION_TITLES.summary}
      titleId="about-section"
      className={className}
    >
      <div className="text-pretty text-[15px] leading-relaxed text-body print:text-[11.5px] print:leading-snug">
        {summary}
      </div>
    </Section>
  );
}
