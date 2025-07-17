import React from "react";
import { Badge } from "./ui/badge";

export const Skills = () => {
  const skills = [
    "Solana",
    "Anchor",
    "Rust",
    "Web3.js",
    "React",
    "Next.js",
    "Tailwind",
    "Node.js",
    "React",
    "Next.js",
    "Tailwind",
    "Node.js",
  ];
  return (
    <div>
      {skills.map((skill, i) => (
        <Badge key={i} className="font-semibold m-0.5">
          {skill}
        </Badge>
      ))}
    </div>
  );
};
