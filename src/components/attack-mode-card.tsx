// // src/components/attack-mode-card.tsx
// export default function AttackModeCard() {
//     return (
//       <div className="bg-gradient-to-br from-red-500 to-purple-600 rounded-xl p-8 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-6">
//             Or Buy Attack Mode Instead
//           </h2>
//           <img
//             src="/assests/Attack_mode.png"
            
//             alt="Attack Mode"
//             className="w-full h-100 object-cover rounded-lg mb-6"
//           />
//           <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
//             Get Attack Mode
//           </button>
//         </div>
//       </div>
//     );
//   }

// src/components/attack-mode-card.tsx
"use client";
import React, { useRef } from "react";
import Link from 'next/link';

export default function AttackModeCard() {
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    imageRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) translateZ(50px)`;
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    imageRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
  };

  return (
    <div className="bg-gradient-to-br from-red-900 to-black rounded-xl p-8 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Or Buy Attack Mode Instead
        </h2>
        <div
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="transition-transform duration-200 ease-out"
        >
          <img
            src="/assests/Attack_mode.png"
            alt="Attack Mode"
            className="w-full h-100 object-cover rounded-lg mb-6 shadow-lg hover:shadow-xl"
          />
        </div>
        {/* <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
          Get Attack Mode
          
        </button> */}
        <Link 
      href="https://gangstaphilosophy.com/attack-mode" 
      target="_blank"
      className="inline-block" // Ensures proper link wrapping
    >
      <button
        type="button"
        className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
        aria-label="Navigate to new page"
      >
        Get Attack Mode
      </button>
    </Link>
      </div>
    </div>
  );
}