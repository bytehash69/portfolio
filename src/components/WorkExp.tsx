import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface WorkExpTypes {
  status: "On going" | "Completed";
  title: String;
  description: String;
  img: string;
}

export const WorkExp = ({ title, description, img, status }: WorkExpTypes) => {
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <Avatar className="size-12 rounded-lg">
          <AvatarFallback className="" />
          <AvatarImage src={img} />
        </Avatar>
        <div className="w-full flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <Badge className="py-1 text-xs min-w-26 bg-gray-100 text-black flex items-center">
            <div
              className={cn(
                status == "On going" ? "bg-orange-400" : "bg-emerald-400",
                "p-1 rounded-full mr-1"
              )}
            />
            <p>{status}</p>
          </Badge>
        </div>
      </div>
    </div>
  );
};
