import React, { useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const Hint = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <HoverCard
      open={open}
      onOpenChange={setOpen}
      openDelay={200}
      closeDelay={100}
    >
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent
        side="top"
        className="p-1 max-w-15 text-center m-0 text-xs text-muted-foreground active"
      >
        {label}
      </HoverCardContent>
    </HoverCard>
  );
};
