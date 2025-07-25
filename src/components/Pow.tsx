import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface PowTypes {
  title: string;
  description: string;
  img: string;
  sourceLink: string;
  repoLink: string;
}

export const Pow = ({
  title,
  description,
  img,
  repoLink,
  sourceLink,
}: PowTypes) => {
  return (
    <Card className="p-0 gap-0">
      <CardHeader className="p-3">
        <div className="flex items-center justify-center">
          <Image
            src={img}
            width={300}
            height={200}
            alt="powImg"
            className="rounded-lg"
          />
        </div>
        <div className="p-1">
          <CardTitle className="mt-2">{title}</CardTitle>
          <CardDescription className="text-sm mt-1">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-0 m-0 flex items-end gap-2">
        {sourceLink && (
          <Button
            size="sm"
            className="text-xs gap-2"
            onClick={() => window.open(sourceLink, "_blank")}
          >
            <Globe /> Source
          </Button>
        )}
        <Button
          size="sm"
          className="text-xs gap-2"
          onClick={() => window.open(repoLink, "_blank")}
        >
          <FaGithub /> Github
        </Button>
      </CardContent>
    </Card>
  );
};
