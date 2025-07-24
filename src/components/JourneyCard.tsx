import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

const JourneyCard = () => {
  return (
    <Card className="shadow-none rounded-md gap-2 p-4 px-6">
      <CardHeader className="px-0">
        <CardTitle className="text-lg">Test</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <Button variant="outline" size="sm" className="text-xs m-0">
          Proof of work
        </Button>
      </CardContent>
      <CardFooter className="px-0">Footer</CardFooter>
    </Card>
  );
};

export default JourneyCard;
