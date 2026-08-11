import { FadeIn } from "@/lib/motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  lead: string;
  maxWidth?: string;
  marginBottom?: string;
}

export function SectionHeader({
  label,
  title,
  lead,
  maxWidth = "520px",
  marginBottom = "3rem",
}: SectionHeaderProps) {
  return (
    <FadeIn style={{ textAlign: "center", marginBottom }}>
      <div className="label">{label}</div>
      <h2 className="sec-title" style={{ marginBottom: "1rem" }}>{title}</h2>
      <p className="sec-lead" style={{ margin: "0 auto", textAlign: "center", maxWidth }}>
        {lead}
      </p>
    </FadeIn>
  );
}
