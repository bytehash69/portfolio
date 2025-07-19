"use client";
import { Github } from "@/components/Github";
import { Hint } from "@/components/Hint";
import { Pow } from "@/components/Pow";
import { Profile } from "@/components/Profile";
import { Skills } from "@/components/Skills";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { WorkExp } from "@/components/WorkExp";
import { Globe, HelpCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="font-mono flex flex-col min-h-screen p-8 gap-6 md:gap-16 sm:p-20 ">
      <Profile />
      <div className=" flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold mb-2">Work Experience -</h1>
          <WorkExp
            title="Solana Development"
            description="Ackee Blockchain S7"
            img="ackee.jpg"
            status="On going"
          />
          <WorkExp
            title="Fullstack web development"
            description="100xdevs Cohort 3"
            img="100x.png"
            status="Completed"
          />
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold ml-1">Skills -</h1>
          <Skills />
        </div>
        <Separator />
        <div className="items-center justify-center">
          <h1 className="items-center font-bold text-2xl">Proof of Work -</h1>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <Pow
              img="/vaultora1.png"
              title="Vaultora"
              description="A simple web based wallet manager for your solana wallets"
              repoLink="https://github.com/bytehash69/vaultora"
              sourceLink="https://vaultora.adiflicks.site/"
            />
            <Pow
              img="/vaultora1.png"
              title="Testing"
              description="A simple web based wallet manager for your solana wallets"
              repoLink="https://github.com/bytehash69/vaultora"
              sourceLink="https://vaultora.adiflicks.site/"
            />
          </div>
        </div>
        <Separator />
        <div>
          <h1 className="text-2xl font-bold mb-4 ml-1">Github activity -</h1>
          <Github />
        </div>
      </div>
    </div>
  );
}
