import Image from "next/image";
import React from "react";
import { Hint } from "./Hint";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const Profile = () => {
  return (
    <div className="md:flex items-center gap-6">
      <div className="relative w-[70px] h-[80px] md:w-[110px] md:h-[120px] overflow-hidden mb-4 md:mb-0 flex-shrink-0">
        <Image
          src="/pfp.jpg"
          alt="PFP"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-2 md:gap-4">
        <div className="flex items-baseline gap-1">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Byte.
          </h1>
          <div className="flex text-muted-foreground items-center gap-1">
            <Globe className="size-3" />
            <p className="text-sm">India</p>
          </div>
        </div>
        <p className="font-semibold">A fullstack and blockchain developer</p>
        <p className="leading-tight text-sm text-gray-500">
          This is a test porfolio description do not worry this will be changed
          later UI Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Libero fugiat voluptatem, nisi voluptas deserunt delectus a magnam.
          Assumenda placeat facilis sed esse, nulla voluptatibus perferendis
          blanditiis ad voluptate, dolore odio.
        </p>
        <div className="flex gap-2 mt-3 md:mt-0">
          <Hint label="Twitter">
            <Button
              className="text-muted-foreground shadow-none rounded-sm"
              variant="outline"
              size="icon"
              onClick={() => window.open("https://x.com/bytehash69", "_blank")}
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
        <div className="hidden md:flex gap-2">
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
  );
};
