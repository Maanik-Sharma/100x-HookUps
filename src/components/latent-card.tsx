// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// export default function LatentCard() {
//   const imageRef = useRef<HTMLDivElement>(null);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!imageRef.current) return;
//     const { left, top, width, height } = imageRef.current.getBoundingClientRect();
//     const x = (e.clientX - left - width / 2) / 25;
//     const y = (e.clientY - top - height / 2) / 25;
//     imageRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) translateZ(50px)`;
//   };

//   const handleMouseLeave = () => {
//     if (!imageRef.current) return;
//     imageRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
//   };

//   const handleButtonClick = () => {
//     setShowPopup(true);
//     // Hide popup after 2 seconds
//     setTimeout(() => {
//       setShowPopup(false);
//     }, 2000);
//   };

//   return (
//     <div className="relative bg-gradient-to-br from-red-900 to-black rounded-xl p-8 text-white mt-20">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-6">
//           Ohh wait... Itna gyaan dekhte dekhte thak gaye honge.?
//         </h2>
//         <p className="text-3xl font-semibold mb-6">ye lo fir</p>
//         <div
//           ref={imageRef}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           className="transition-transform duration-200 ease-out"
//         >
//           <img
//             src="/assests/latent-photo.jpg"
//             alt="Attack Mode"
//             className="w-full h-100 object-cover rounded-lg mb-6 shadow-lg hover:shadow-xl"
//           />
//         </div>
//         <button 
//           onClick={handleButtonClick}
//           className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
//         >
//           Get Attack Mode
//         </button>

//         {/* Popup */}
//         {showPopup && (
//           <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//             <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all scale-100 animate-fadeIn">
           
//               <img
//                 src="/assests/kaam-karo.jpeg" 
//                 alt="Popup"
//                 className="w-64 h-64 object-cover rounded-lg mb-4"
//               />
//                <p className="text-red-600 text-xl font-bold">yeh phele click karega pta tha</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

//removed popup
"use client";
import React, { useRef, useState } from "react";

export default function LatentCard() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [showAttackMode, setShowAttackMode] = useState(false);

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
    <>
      {!showAttackMode ? (
        // Main Card
        <div className="relative bg-gradient-to-br from-red-900 to-black rounded-xl p-8 text-white mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
            Feeling down? Let some comedy lift you up!
            </h2>
            <div
              ref={imageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="transition-transform duration-200 ease-out"
            >
              <img
                src="/assests/latent-photo.webp"
                alt="Attack Mode"
                className="w-full h-100 object-cover rounded-lg mb-6 shadow-lg hover:shadow-xl"
              />
            </div>
            <button 
              onClick={() => setShowAttackMode(true)}
              className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-colors"
            >
              Watch Latest EP
            </button>
          </div>
        </div>
      ) : (
        // Attack Mode Card
        <div className="relative bg-gradient-to-br from-black to-red-900 rounded-xl p-8 text-white mt-20">
          <button 
            onClick={() => setShowAttackMode(false)}
            className="absolute top-4 left-4 bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-colors"
          >
            ← Back
          </button>
          
          <div className="max-w-4xl mx-auto text-center pt-8">
            <h2 className="text-4xl font-bold mb-8">Kitne ghante kaam kiya?</h2>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg mb-8">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/_m8JPUyvt-o?autoplay=1"
                title="Attack Mode Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-xl font-semibold mb-6">Kaam Karo!</p>
          </div>
        </div>
      )}
    </>
  );
}