import { ExternalArrow } from "@/components/ui/external-arrow";
import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag-list";
import { SECTION_TITLES } from "@/data/resume-data";
import { displayUrl } from "@/lib/resume";
import type { Project, ProjectType } from "@/lib/types";
import { cn } from "@/lib/utils";

const TYPE_LABELS: Record<ProjectType, string> = {
  laboral: "Laboral",
  personal: "Personal",
};

interface ProjectLinkProps {
  title: string;
  link?: string;
}

function ProjectLink({ title, link }: ProjectLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="after:absolute after:inset-0 hover:underline"
      aria-label={`${title} project (opens in new tab)`}
    >
      {title}
      <ExternalArrow />
    </a>
  );
}

interface ProjectItemProps {
  project: Project;
}

function ProjectItem({ project }: ProjectItemProps) {
  const { title, type, description, techStack, link } = project;

  return (
    <article
      className={cn(
        "relative flex flex-col gap-y-2 rounded-lg border border-border p-4 transition-colors print:break-inside-avoid print:gap-y-1 print:border-0 print:p-0",
        link && "hover:border-foreground/20 hover:bg-muted/40"
      )}
    >
      <div className="flex items-baseline justify-between gap-x-3">
        <h3 className="text-[15px] font-semibold leading-snug print:text-[11.5px] print:leading-tight">
          <ProjectLink title={title} link={link} />
        </h3>
        <span className="shrink-0 text-[11px] uppercase tracking-[0.12em] text-muted-foreground print:text-[9px]">
          {TYPE_LABELS[type]}
        </span>
      </div>
      {link && (
        <a
          className="text-[11px] leading-tight text-muted-foreground underline decoration-muted-foreground/60 print:break-words print:text-[10px]"
          href={link}
        >
          {displayUrl(link)}
        </a>
      )}
      <p className="text-pretty text-[13px] leading-relaxed text-body print:text-[10px] print:leading-tight">
        {description}
      </p>
      <TagList tags={techStack} label="Technologies used" />
    </article>
  );
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <Section
      title={SECTION_TITLES.projects}
      titleId="side-projects"
      className="scroll-mb-16"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 print:grid-cols-2 print:gap-x-6 print:gap-y-1">
        {projects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
