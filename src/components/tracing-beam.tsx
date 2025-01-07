"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
// import { CalSans } from '@next/font/google';
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 rounded-lg">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative pb-6 rounded-lg">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4 font-bold text-neutral-50")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert text-neutral-50">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "'Your Journey to Genuine Connections Begins Here.'",
    description: (
      <>
        <p>
        At 100xHookUps, we believe love isn’t just an algorithm—it’s a 
        shared experience. Our platform is designed to help you find authentic 
        connections by focusing on meaningful matches, not endless swipes. Let’s 
        turn your next date into the start of something real.


        </p>
      </>
    ),
    badge: "1. Our Promise",
    image:
      "/assests/landing-photo1.webp",
  },
  {
    title: "Love, Backed by Science 'Where Data Meets Desire.'",
    description: (
      <>
        <p>
        Our dedicated team of relationship researchers and data experts analyzes what makes chemistry click. 100xHookUps combines human insight with advanced technology 
        to create matches that truly matter. Say goodbye to guesswork and hello to compatibility.
        </p>
      </>
    ),
    badge: "2. Love, Backed by Science",
    image:
      "/assests/landing-photo2.webp",
  },
  {
    title: "Dating Done Right, According to Our Users.",
    description: (
      <>
        <p>
        Our community speaks for itself: 100xHookUps has helped thousands find their perfect match. Hear how we’ve elevated 
        dating experiences, reduced the stress, and raised the bar for love. You deserve nothing less.
        </p>
      </>
    ),
    badge: "3. Real Stories, Real Success",
    image:
      "/assests/landing-photo3.webp",
  },    
];
