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
      <div className="flex items-center gap-2 md:gap-4">
        <Avatar className="size-9 md:size-12 rounded-md md:rounded-lg">
          <AvatarFallback className="" />
          <AvatarImage src={img} />
        </Avatar>
        <div className="w-full flex items-center justify-between">
          <div>
            <h1 className="md:text-lg text-sm font-semibold line-clamp-1">
              {title}
            </h1>
            <p className="text-muted-foreground text-xs md:text-sm">
              {description}
            </p>
          </div>
          <Badge className="py-1 text-xs min-w-26  bg-gray-100 text-black flex items-center">
            <div
              className={cn(
                status == "On going"
                  ? "bg-orange-400 animate-pulse duration-100"
                  : "bg-emerald-400",
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
