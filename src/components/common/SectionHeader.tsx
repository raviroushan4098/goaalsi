import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  action?: ReactNode;
  centered?: boolean;
}

const SectionHeader = ({
  title,
  subtitle,
  icon,
  action,
  centered = false,
}: SectionHeaderProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 ${
        centered ? "text-center" : ""
      }`}
    >
      <div className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shrink-0">
            {icon}
          </div>
        )}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};

export default SectionHeader;
