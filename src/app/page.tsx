"use client";
import { Hint } from "@/components/Hint";
import { Button } from "@/components/ui/button";
import { Globe, HelpCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="font-mono flex flex-col min-h-screen p-8 gap-16 sm:p-20">
      <div className="flex items-center gap-2 mt-6">
        <div className="relative w-[110px] h-[110px] overflow-hidden mr-6 flex-shrink-0">
          <Image
            src="/pfp.jpg"
            alt="PFP"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline gap-1">
            <h1 className="text-5xl font-bold tracking-tight">Byte.</h1>
            <div className="flex text-muted-foreground items-center gap-1">
              <Globe className="size-4" />
              <p>India</p>
            </div>
          </div>
          <p className="font-semibold">A fullstack and blockchain developer</p>
          <p className="leading-tight text-sm text-gray-500">
            This is a test porfolio description do not worry this will be
            changed later UI Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Libero fugiat voluptatem, nisi voluptas deserunt delectus a
            magnam. Assumenda placeat facilis sed esse, nulla voluptatibus
            perferendis blanditiis ad voluptate, dolore odio.
          </p>
          <div className="flex gap-2">
            <Hint label="Twitter">
              <Button
                className="text-muted-foreground shadow-none rounded-sm"
                variant="outline"
                size="icon"
                onClick={() =>
                  window.open("https://x.com/bytehash69", "_blank")
                }
              >
                <FaXTwitter />
              </Button>
            </Hint>
            <Hint label="Github">
              <Button
                className="text-muted-foreground shadow-none rounded-sm"
                variant="outline"
                size="icon"
                onClick={() =>
                  window.open("https://github.com/bytehash69", "_blank")
                }
              >
                <FaGithub />
              </Button>
            </Hint>
            <Hint label="Gmail">
              <Button
                className="text-muted-foreground shadow-none rounded-sm"
                variant="outline"
                size="icon"
                onClick={() =>
                  window.open("mailto:bytehash69@gmail.com", "_blank")
                }
              >
                <MdEmail />
              </Button>
            </Hint>
          </div>
          <div className="flex gap-2">
            <Button
              className="text-muted-foreground shadow-none rounded-sm"
              variant="outline"
            >
              Proof of work
            </Button>
            <Button
              className="text-muted-foreground shadow-none rounded-sm"
              variant="outline"
            >
              Blogs
            </Button>
            <Button
              className="text-muted-foreground shadow-none rounded-sm"
              variant="outline"
            >
              Experience
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
