import { DateRange } from "@/components/ui/date-range";
import { ExternalArrow } from "@/components/ui/external-arrow";
import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag-list";
import { SECTION_TITLES } from "@/data/resume-data";
import type { WorkEntry } from "@/lib/types";

interface CompanyLinkProps {
  company: WorkEntry["company"];
  link: WorkEntry["link"];
}

function CompanyLink({ company, link }: CompanyLinkProps) {
  return (
    <a
      className="hover:underline"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} company website`}
    >
      {company}
      <ExternalArrow />
    </a>
  );
}

interface WorkExperienceItemProps {
  work: WorkEntry;
}

function WorkExperienceItem({ work }: WorkExperienceItemProps) {
  const { company, link, badges, title, start, end, description, highlights } =
    work;

  return (
    <>
      <div className="space-y-1.5 print:space-y-1">
        <div className="flex items-baseline justify-between gap-x-2">
          <h3 className="text-[15px] font-semibold leading-snug print:leading-tight">
            <CompanyLink company={company} link={link} />
          </h3>
          <DateRange start={start} end={end} label="Employment period" />
        </div>
        <h4 className="text-sm leading-relaxed text-body print:text-[11.5px] print:leading-tight">
          {title}
        </h4>
      </div>
      <div className="mt-2 text-pretty text-sm leading-relaxed text-body print:mt-1 print:text-[10.5px] print:leading-tight">
        {description}
        {highlights && highlights.length > 0 && (
          <ul className="mt-1 list-outside list-disc space-y-0.5 pl-4 marker:text-muted-foreground print:space-y-1">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>
      <TagList
        tags={badges}
        label="Technologies used"
        className="mt-2.5 print:mt-1.5"
      />
    </>
  );
}

interface WorkExperienceProps {
  work: WorkEntry[];
}

export function WorkExperience({ work }: WorkExperienceProps) {
  return (
    <Section title={SECTION_TITLES.work} titleId="work-experience">
      <div className="space-y-10 print:space-y-1.5">
        {work.map((item) => (
          <article
            key={`${item.company}-${item.start}`}
            className="print:break-inside-avoid"
          >
            <WorkExperienceItem work={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
