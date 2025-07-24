import React from "react";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import JourneyCard from "@/components/JourneyCard";

const JourneyPage = () => {
  return (
    <div className="font-mono flex flex-col min-h-screen p-15 mt-14 gap-4">
      {/* Back button */}
      <div>
        <Button variant="outline">
          <FaArrowLeft />
          Back
        </Button>
      </div>

      {/* Hero */}
      <div className="mt-4">
        {/* Header */}
        <h1 className="text-5xl font-bold">My Journey</h1>
        <div className="flex flex-col gap-2 mt-6">
          <div className="font-bold text-xl mb-1">Thursday, Jul 25</div>
          <JourneyCard />
          <JourneyCard />
          <JourneyCard />
          <JourneyCard />

          <div className="font-bold text-xl mb-1 mt-4">Thursday, Jul 25</div>
          <JourneyCard />
          <JourneyCard />
          <JourneyCard />
          <JourneyCard />
        </div>
      </div>
    </div>
  );
};

export default JourneyPage;
