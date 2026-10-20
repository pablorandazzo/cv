import { DateRange } from "@/components/ui/date-range";
import { Section } from "@/components/ui/section";
import { SECTION_TITLES } from "@/data/resume-data";
import type { EducationEntry } from "@/lib/types";

interface EducationItemProps {
  education: EducationEntry;
}

function EducationItem({ education }: EducationItemProps) {
  const { school, start, end, degree } = education;

  return (
    <>
      <div className="flex items-baseline justify-between gap-x-2">
        <h3 className="text-[15px] font-semibold leading-snug print:leading-tight">
          {school}
        </h3>
        <DateRange start={start} end={end} label="Period" />
      </div>
      <div className="mt-2 text-sm leading-relaxed text-body print:mt-1.5 print:text-[11.5px] print:leading-tight">
        {degree}
      </div>
    </>
  );
}

interface EducationListProps {
  education: readonly EducationEntry[];
}

export function Education({ education }: EducationListProps) {
  return (
    <Section title={SECTION_TITLES.education} titleId="education-section">
      <div className="space-y-5 print:space-y-1.5">
        {education.map((item) => (
          <article key={item.school} className="print:break-inside-avoid">
            <EducationItem education={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
