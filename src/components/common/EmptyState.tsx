import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  icon?: ReactNode;
  emoji?: string;
  title: string;
  description: string;
  actionText?: string;
  actionLink?: string;
  onAction?: () => void;
}

const EmptyState = ({
  icon,
  emoji,
  title,
  description,
  actionText,
  actionLink,
  onAction,
}: EmptyStateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 px-4 text-center"
    >
      {emoji && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="text-6xl mb-6"
        >
          {emoji}
        </motion.span>
      )}
      {icon && (
        <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center text-muted-foreground mb-6">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-md mb-6">{description}</p>
      {actionText && (actionLink || onAction) && (
        actionLink ? (
          <Button asChild className="bg-goaalsi-blue hover:bg-goaalsi-blue-dark">
            <Link to={actionLink}>{actionText}</Link>
          </Button>
        ) : (
          <Button onClick={onAction} className="bg-goaalsi-blue hover:bg-goaalsi-blue-dark">
            {actionText}
          </Button>
        )
      )}
    </motion.div>
  );
};

export default EmptyState;
