// // src/components/ui/card.tsx
// import * as React from "react"
// import { cn } from "@/lib/utils"

// const Card = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn(
//       "rounded-lg border bg-card text-card-foreground shadow-sm",
//       className
//     )}
//     {...props}
//   />
// ))
// Card.displayName = "Card"

// const CardHeader = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("flex flex-col space-y-1.5 p-6", className)}
//     {...props}
//   />
// ))
// CardHeader.displayName = "CardHeader"

// const CardTitle = React.forwardRef<
//   HTMLParagraphElement,
//   React.HTMLAttributes<HTMLHeadingElement>
// >(({ className, ...props }, ref) => (
//   <h3
//     ref={ref}
//     className={cn(
//       "text-2xl font-semibold leading-none tracking-tight",
//       className
//     )}
//     {...props}
//   />
// ))
// CardTitle.displayName = "CardTitle"

// const CardContent = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
// ))
// CardContent.displayName = "CardContent"

// export { Card, CardHeader, CardTitle, CardContent }

//version2
// "use client";
// import { cn } from "@/lib/utils";
// import React, { createContext, useContext, useRef, useState } from "react";
// import Image from "next/image";

// // Context for mouse enter state
// const MouseEnterContext = createContext<{
//   isMouseEntered: boolean;
//   setIsMouseEntered: React.Dispatch<React.SetStateAction<boolean>>;
// } | undefined>(undefined);

// // Custom hook for mouse enter state
// const useMouseEnter = () => {
//   const context = useContext(MouseEnterContext);
//   if (!context) {
//     throw new Error("useMouseEnter must be used within a MouseEnterProvider");
//   }
//   return context;
// };

// // 3D Card Container Component
// const ThreeDCardContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isMouseEntered, setIsMouseEntered] = useState(false);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!containerRef.current) return;
//     const { left, top, width, height } = containerRef.current.getBoundingClientRect();
//     const x = (e.clientX - left - width / 2) / 25;
//     const y = (e.clientY - top - height / 2) / 25;
//     containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
//   };

//   const handleMouseEnter = () => {
//     setIsMouseEntered(true);
//   };

//   const handleMouseLeave = () => {
//     if (!containerRef.current) return;
//     setIsMouseEntered(false);
//     containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   };

//   return (
//     <MouseEnterContext.Provider value={{ isMouseEntered, setIsMouseEntered }}>
//       <div className={cn("relative", className)} style={{ perspective: "1000px" }}>
//         <div
//           ref={containerRef}
//           onMouseEnter={handleMouseEnter}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           className="transition-all duration-200 ease-linear"
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           {children}
//         </div>
//       </div>
//     </MouseEnterContext.Provider>
//   );
// };

// // 3D Card Item Component
// const ThreeDCardItem = ({
//   children,
//   className,
//   translateZ = 0,
// }: {
//   children: React.ReactNode;
//   className?: string;
//   translateZ?: number;
// }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const { isMouseEntered } = useMouseEnter();

//   React.useEffect(() => {
//     if (!ref.current) return;
//     if (isMouseEntered) {
//       ref.current.style.transform = `translateZ(${translateZ}px)`;
//     } else {
//       ref.current.style.transform = "translateZ(0px)";
//     }
//   }, [isMouseEntered, translateZ]);

//   return (
//     <div
//       ref={ref}
//       className={cn("w-full transition duration-200 ease-linear", className)}
//     >
//       {children}
//     </div>
//   );
// };


//version3
"use client";
import { cn } from "@/lib/utils";
import React, { createContext, useContext, useRef, useState } from "react";

// Context for mouse enter state
const MouseEnterContext = createContext<{
  isMouseEntered: boolean;
  setIsMouseEntered: React.Dispatch<React.SetStateAction<boolean>>;
} | undefined>(undefined);

// Custom hook for mouse enter state
const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (!context) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

// 3D Container Component
const ThreeDContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={{ isMouseEntered, setIsMouseEntered }}>
      <div className="py-4" style={{ perspective: "1000px" }}>
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn("transition-all duration-200 ease-linear", className)}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

// 3D Item Component
const ThreeDItem = ({
  children,
  className,
  translateZ = 0,
}: {
  children: React.ReactNode;
  className?: string;
  translateZ?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isMouseEntered } = useMouseEnter();

  React.useEffect(() => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateZ(${translateZ}px)`;
    } else {
      ref.current.style.transform = "translateZ(0px)";
    }
  }, [isMouseEntered, translateZ]);

  return (
    <div
      ref={ref}
      className={cn("transition duration-200 ease-linear", className)}
    >
      {children}
    </div>
  );
};