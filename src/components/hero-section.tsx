// // src/components/hero-section.tsx
// import { useState } from 'react';
// import { Button } from './ui/button';
// import { Checkbox } from './ui/checkbox';

// export default function HeroSection({ onSearch }: { onSearch: () => void }) {
//   const [preference, setPreference] = useState<string>('');
  
//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 z-0" />
//       <div className="relative z-10 text-center px-4">
//         <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
//           100xHookUps
//         </h1>
//         <p className="text-xl mb-12 max-w-2xl mx-auto">
//           Find your perfect match in the world of tech and innovation.
//         </p>
//         <p className="text-sm mb-12 max-w-2xl mx-auto">
//          Looking for?
//         </p>
//         <div className="space-y-6">
//           <div className="flex flex-wrap gap-4 justify-center">
//             {['Male', 'Female', 'Non-binary', 'Everyone'].map((option) => (
//               <label key={option} className="flex items-center space-x-2">
//                 <Checkbox
//                   checked={preference === option}
//                   onCheckedChange={() => setPreference(option)}
//                 />
//                 <span>{option}</span>
//               </label>
//             ))}
//           </div>
//           <Button
//             onClick={onSearch}
//             className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg"
//             disabled={!preference}
//           >
//             Search Partners
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Checkbox } from '@/components/ui/checkbox';
// import { motion } from "framer-motion";
// import React from "react";

// const pathVariants = {
//   initial: { strokeDashoffset: 800, strokeDasharray: "50 800" },
//   animate: {
//     strokeDashoffset: 0,
//     strokeDasharray: "20 800",
//     opacity: [0, 1, 1, 0],
//   },
// };

// const AnimatedBackground = () => {
//   const paths = [
//     "M720 450C720 450 742.459 440.315 755.249 425.626C768.039 410.937 778.88 418.741 789.478 401.499C800.076 384.258 817.06 389.269 826.741 380.436C836.423 371.603 851.957 364.826 863.182 356.242C874.408 347.657 877.993 342.678 898.867 333.214C919.741 323.75 923.618 319.88 934.875 310.177C946.133 300.474 960.784 300.837 970.584 287.701C980.384 274.564 993.538 273.334 1004.85 263.087C1016.15 252.84 1026.42 250.801 1038.22 242.1C1050.02 233.399 1065.19 230.418 1074.63 215.721C1084.07 201.024 1085.49 209.128 1112.65 194.884C1139.8 180.64 1132.49 178.205 1146.43 170.636C1160.37 163.066 1168.97 158.613 1181.46 147.982C1193.95 137.35 1191.16 131.382 1217.55 125.645C1243.93 119.907 1234.19 118.899 1254.53 100.846C1274.86 82.7922 1275.12 92.8914 1290.37 76.09C1305.62 59.2886 1313.91 62.1868 1323.19 56.7536C1332.48 51.3204 1347.93 42.8082 1361.95 32.1468C1375.96 21.4855 1374.06 25.168 1397.08 10.1863C1420.09 -4.79534 1421.41 -3.16992 1431.52 -15.0078",
//     "M720 450C720 450 741.044 435.759 753.062 410.636C765.079 385.514 770.541 386.148 782.73 370.489C794.918 354.83 799.378 353.188 811.338 332.597C823.298 312.005 825.578 306.419 843.707 295.493C861.837 284.568 856.194 273.248 877.376 256.48C898.558 239.713 887.536 227.843 909.648 214.958C931.759 202.073 925.133 188.092 941.063 177.621C956.994 167.151 952.171 154.663 971.197 135.041C990.222 115.418 990.785 109.375 999.488 96.1291C1008.19 82.8827 1011.4 82.2181 1032.65 61.8861C1053.9 41.5541 1045.74 48.0281 1064.01 19.5798C1082.29 -8.86844 1077.21 -3.89415 1093.7 -19.66C1110.18 -35.4258 1105.91 -46.1146 1127.68 -60.2834C1149.46 -74.4523 1144.37 -72.1024 1154.18 -97.6802C1163.99 -123.258 1165.6 -111.332 1186.21 -135.809C1206.81 -160.285 1203.29 -160.861 1220.31 -177.633C1237.33 -194.406 1236.97 -204.408 1250.42 -214.196",
//     "M720 450C720 450 712.336 437.768 690.248 407.156C668.161 376.544 672.543 394.253 665.951 365.784C659.358 337.316 647.903 347.461 636.929 323.197C625.956 298.933 626.831 303.639 609.939 281.01C593.048 258.381 598.7 255.282 582.342 242.504C565.985 229.726 566.053 217.66 559.169 197.116C552.284 176.572 549.348 171.846 529.347 156.529C509.345 141.211 522.053 134.054 505.192 115.653C488.33 97.2527 482.671 82.5627 473.599 70.7833C464.527 59.0039 464.784 50.2169 447 32.0721C429.215 13.9272 436.29 0.858563 423.534 -12.6868C410.777 -26.2322 407.424 -44.0808 394.364 -56.4916C381.303 -68.9024 373.709 -72.6804 365.591 -96.1992C357.473 -119.718 358.364 -111.509 338.222 -136.495C318.08 -161.481 322.797 -149.499 315.32 -181.761C307.843 -214.023 294.563 -202.561 285.795 -223.25C277.026 -243.94 275.199 -244.055 258.602 -263.871",
//   ];

//   const colors = [
//     "#46A5CA", "#8C2F2F", "#4FAE4D", "#D6590C", "#811010", "#247AFB",
//     "#A534A0", "#A8A438", "#D6590C", "#46A29C", "#670F6D", "#D7C200",
//     "#59BBEB", "#504F1C", "#55BC54", "#4D3568", "#9F39A5", "#363636",
//     "#860909", "#6A286F", "#604483"
//   ];

//   return (
//     <motion.svg
//       viewBox="0 0 1440 900"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       className="absolute inset-0 w-full h-full"
//     >
//       {paths.map((path, idx) => (
//         <motion.path
//           key={`path-first-${idx}`}
//           d={path}
//           stroke={colors[idx]}
//           strokeWidth="2.3"
//           strokeLinecap="round"
//           variants={pathVariants}
//           initial="initial"
//           animate="animate"
//           transition={{
//             duration: 10,
//             ease: "linear",
//             repeat: Infinity,
//             repeatType: "loop",
//             delay: Math.floor(Math.random() * 10),
//             repeatDelay: Math.floor(Math.random() * 10 + 2),
//           }}
//         />
//       ))}

//       {/* duplicate paths for more animation density */}
//       {paths.map((path, idx) => (
//         <motion.path
//           key={`path-second-${idx}`}
//           d={path}
//           stroke={colors[idx]}
//           strokeWidth="2.3"
//           strokeLinecap="round"
//           variants={pathVariants}
//           initial="initial"
//           animate="animate"
//           transition={{
//             duration: 10,
//             ease: "linear",
//             repeat: Infinity,
//             repeatType: "loop",
//             delay: Math.floor(Math.random() * 10),
//             repeatDelay: Math.floor(Math.random() * 10 + 2),
//           }}
//         />
//       ))}
//     </motion.svg>
//   );
// };

// export default function HeroSection({ onSearch }: { onSearch: () => void }) {
//   const [preference, setPreference] = useState<string>('');
  
//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black">
//       <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 z-0" />
//       <AnimatedBackground />
//       <div className="relative z-10 text-center px-4">
//         <motion.h1 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600"
//         >
//           100xHookUps
//         </motion.h1>
//         <motion.p 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-xl mb-12 max-w-2xl mx-auto text-neutral-700 dark:text-neutral-300"
//         >
//           Find your perfect match in the world of tech and innovation.
//         </motion.p>
//         <motion.p 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="text-sm mb-12 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400"
//         >
//           Looking for?
//         </motion.p>
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="space-y-6"
//         >
//           <div className="flex flex-wrap gap-4 justify-center">
//             {['Male', 'Female', 'Non-binary', 'Everyone'].map((option) => (
//               <label key={option} className="flex items-center space-x-2 cursor-pointer">
//                 <Checkbox
//                   checked={preference === option}
//                   onCheckedChange={() => setPreference(option)}
//                 />
//                 <span className="text-neutral-800 dark:text-neutral-200">{option}</span>
//               </label>
//             ))}
//           </div>
//           <Button
//             onClick={onSearch}
//             className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity"
//             disabled={!preference}
//           >
//             Search Partners
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import { BackgroundLines } from "@/components/ui/background-lines";
// import { useState } from 'react';
// import { Button } from './ui/button';
// import { Checkbox } from './ui/checkbox';

// export default function HeroSection({ onSearch }: { onSearch: () => void }) {
//   const [preference, setPreference] = useState('');
//   return (
//     <BackgroundLines>
     
//   <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-neutral-90">
//   <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/20 to-neutral-900/20 z-0" />
//   <div className="relative z-10 text-center px-4">
//     <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-200">
//       100xHookUps
//     </h1>
//     <p className="text-xl mb-12 max-w-2xl mx-auto text-neutral-50">
//       Find your perfect match in the world of tech and innovation.
//     </p>
//     <p className="text-sm mb-12 max-w-2xl mx-auto text-neutral-50">
//       Looking for?
//     </p>
//     <div className="space-y-6">
//       <div className="flex flex-wrap gap-4 justify-center">
//         {['Male', 'Female', 'Non-binary', 'Everyone'].map((option) => (
//           <label key={option} className="flex items-center space-x-2 text-neutral-50">
//             <Checkbox 
//               checked={preference === option}
//               onCheckedChange={() => setPreference(option)}
//               className="border-neutral-50 data-[state=checked]:bg-red-500"
//             />
//             <span>{option}</span>
//           </label>
//         ))}
//       </div>
//       <Button
//         onClick={onSearch}
//         className="bg-gradient-to-r from-neutral-200 to-neutral-50 text-neutral-950 px-8 py-4 rounded-full text-lg hover:from-neutral-300 hover:to-neutral-100"
//         disabled={!preference}
//       >
//         Search Partners
//       </Button>
//     </div>
//   </div>
// </section>
     
//     </BackgroundLines>
//   );
// }



//with image
// components/hero-section.tsx
// import React, { useState } from "react";
// import { BackgroundLines } from "@/components/ui/background-lines";
// import { Button } from './ui/button';
// import { Checkbox } from './ui/checkbox';

// export default function HeroSection({ onSearch }: { onSearch: () => void }) {
//   const [preference, setPreference] = useState('');

//   const options = ['Male', 'Female', 'Non-binary', 'Everyone'];

//   return (
//     <div className="relative">
//       {/* Background Image */}
//       <img 
//         src="/assests/hero-section-bg.jpg" 
//         alt="Background" 
//         className="absolute inset-0 w-full h-full object-cover object-center"
//       />
      
//       <BackgroundLines>
//         <section className="min-h-screen flex items-center justify-center relative">
//           {/* Gradient Overlay - adjusted opacity to allow lines to show through */}
//           <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/60 to-neutral-900/60" />
          
//           <div className="relative z-10 text-center px-4">
//             <h1 className="text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-200">
//               100xHookUps
//             </h1>
            
//             <p className="text-xl mb-12 max-w-2xl mx-auto text-neutral-50">
//               Find your perfect match in the world of tech and innovation.
//             </p>
            
//             <p className="text-sm mb-4 max-w-2xl mx-auto text-neutral-50">
//               Looking for?
//             </p>
            
//             <div className="space-y-6">
//               <div className="flex flex-wrap gap-4 justify-center">
//                 {options.map((option) => (
//                   <label key={option} className="flex items-center space-x-2 text-neutral-50">
//                     <Checkbox 
//                       checked={preference === option}
//                       onCheckedChange={() => setPreference(option)}
//                       className="border-neutral-50 data-[state=checked]:bg-red-500"
//                     />
//                     <span>{option}</span>
//                   </label>
//                 ))}
//               </div>

//               <Button
//                 onClick={onSearch}
//                 className="bg-gradient-to-r from-neutral-200 to-neutral-50 text-neutral-950 px-8 py-4 rounded-full text-lg hover:from-neutral-300 hover:to-neutral-100"
//                 disabled={!preference}
//               >
//                 Search Partners
//               </Button>
//             </div>
//           </div>
//         </section>
//       </BackgroundLines>
//     </div>
//   );
// }

// // components/hero-section.tsx
//live code
// import React, { useState } from "react";
// import { BackgroundLines } from "@/components/ui/background-lines";
// import { Button } from './ui/button';
// import { Checkbox } from './ui/checkbox';

// export default function HeroSection({ onSearch }: { onSearch: () => void }) {
//   const [preference, setPreference] = useState('');

//   const options = ['Male', 'Female', 'Non-binary', 'Everyone'];

//   return (
//     <div className="relative">
//       {/* Background Image */}
//       <img 
//         src="/assests/hero-section-bg.webp" 
//         alt="Background" 
//         className="absolute inset-0 w-full h-full object-cover object-center"
//       />

//       <BackgroundLines>
   
      
//         <section className="min-h-screen flex items-center justify-center relative">
//           {/* Gradient Overlay - adjusted opacity to allow lines to show through */}
//           <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/60 to-neutral-900/60" />

//           <div className="relative z-10 text-center px-4">
//             <h1 className="text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-200">
//               100xHookUps
//             </h1>

//             <p className="text-xl mb-12 max-w-2xl mx-auto text-neutral-50">
//               Find your perfect match in the world of tech and innovation.
//             </p>

//             <p className="text-sm mb-4 max-w-2xl mx-auto text-neutral-50">
//               Looking for?
//             </p>

//             <div className="space-y-6">
//               <div className="flex flex-wrap gap-4 justify-center">
//                 {options.map((option) => (
//                   <label key={option} className="flex items-center space-x-2 text-neutral-50">
//                     <Checkbox 
//                       checked={preference === option}
//                       onCheckedChange={() => setPreference(option)}
//                       className="border-neutral-50 data-[state=checked]:bg-red-500"
//                     />
//                     <span>{option}</span>
//                   </label>
//                 ))}
//               </div>

//               <Button
//                 onClick={onSearch}
//                 className="bg-gradient-to-r from-neutral-200 to-neutral-50 text-neutral-950 px-8 py-4 rounded-full text-lg hover:from-neutral-300 hover:to-neutral-100"
//                 disabled={!preference}
//               >
//                 Search Partners
//               </Button>
//             </div>
//           </div>
//         </section>
//         </BackgroundLines>
//     </div>
//   );
// }
//-----------------------------------------
// HeroSection.tsx
//pre cam access...
// import React, { useState } from "react";
// import { BackgroundLines } from "@/components/ui/background-lines";
// import { Button } from './ui/button';
// import { Checkbox } from './ui/checkbox';
// import { useCamera } from '@/context/CameraContext';
// import { Loader2 } from "lucide-react";

// export default function HeroSection({ onSearch }: { onSearch: () => void }) {
//   const [preference, setPreference] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const { setStream } = useCamera();
//   const options = ['Male', 'Female', 'Non-binary', 'Everyone'];

//   const handleSearch = async () => {
//     setIsLoading(true);
//     try {
//       const cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
//       setStream(cameraStream);
//       // Simulate searching delay
//       await new Promise(resolve => setTimeout(resolve, 2000));
//       onSearch();
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="relative">
//       <img 
//         src="/assests/hero-section-bg.jpg" 
//         alt="Background" 
//         className="absolute inset-0 w-full h-full object-cover object-center"
//       />
      
//       <BackgroundLines>
//         <section className="min-h-screen flex items-center justify-center relative">
//           <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/60 to-neutral-900/60" />
          
//           <div className="relative z-10 text-center px-4">
//             <h1 className="text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-200">
//               100xHookUps
//             </h1>
            
//             <p className="text-xl mb-12 max-w-2xl mx-auto text-neutral-50">
//               Find your perfect match in the world of tech and innovation.
//             </p>
            
//             <p className="text-sm mb-4 max-w-2xl mx-auto text-neutral-50">
//               Looking for?
//             </p>
            
//             <div className="space-y-6">
//               <div className="flex flex-wrap gap-4 justify-center">
//                 {options.map((option) => (
//                   <label key={option} className="flex items-center space-x-2 text-neutral-50">
//                     <Checkbox 
//                       checked={preference === option}
//                       onCheckedChange={() => setPreference(option)}
//                       className="border-neutral-50 data-[state=checked]:bg-red-500"
//                     />
//                     <span>{option}</span>
//                   </label>
//                 ))}
//               </div>

//               <Button
//                 onClick={handleSearch}
//                 className="bg-gradient-to-r from-neutral-200 to-neutral-50 text-neutral-950 px-8 py-4 rounded-full text-lg hover:from-neutral-300 hover:to-neutral-100"
//                 disabled={!preference || isLoading}
//               >
//                 {isLoading ? (
//                   <>
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     Finding best matches...
//                   </>
//                 ) : (
//                   'Search Partners'
//                 )}
//               </Button>
//             </div>
//           </div>
//         </section>
//       </BackgroundLines>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { BackgroundLines } from "@/components/ui/background-lines";
// import { Button } from './ui/button';
// import { Checkbox } from './ui/checkbox';

// export default function HeroSection({ onSearch }: { onSearch: () => void }) {
//   const [preference, setPreference] = useState('');
//   const options = ['Male', 'Female', 'Non-binary', 'Everyone'];

//   return (
//     <div className="relative w-full min-h-screen">
//       {/* [1] Background Image height adjustment */}
//       <img 
//         src="/assests/hero-section-bg.webp" 
//         alt="Background" 
//         className="absolute inset-0 w-full min-h-screen md:h-full object-cover object-center"
//       />
// {/* //min-h-[50vh] */}
//       <BackgroundLines>
//         {/* [2] Section height adjustment */}
//         <section className="min-h-screen md:min-h-screen flex items-center justify-center relative">
//         {/* <section className="min-h-screen md:min-h-screen flex items-center justify-center relative text-8xl md:text-2xl lg:text-xl"> */}

//           <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/70 to-neutral-900/70" />

//           <div className="relative z-10 text-center w-full max-w-6xl mx-auto pt-20 md:pt-0">
//             <h1 className="text-6xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-200">
//               100xHookUps
//             </h1>

//             <p className="text-xl md:text-xl mb-6 md:mb-12 max-w-2xl mx-auto text-neutral-50 px-4">
//               Find your perfect match in the world of tech and innovation.
//             </p>

//             <p className="text-lg mb-4 max-w-2xl mx-auto text-neutral-50">
//               Looking for?
//             </p>

//             <div className="space-y-8 md:space-y- flex flex-col items-center">
//               <div className="grid grid-cols-1 md:flex md:flex-row gap-4 md:gap-4 justify-center px-4 md:px-0 w-full max-w-xs md:max-w-none">
//                 {options.map((option) => (
//                   <label 
//                     key={option} 
//                     className="flex items-center justify-center space-x-2 text-neutral-50 bg-neutral-900/50 p-2 rounded-lg backdrop-blur-sm"
//                   >
//                     <Checkbox 
//                       checked={preference === option}
//                       onCheckedChange={() => setPreference(option)}
//                       className="border-neutral-50 data-[state=checked]:bg-red-500"
//                     />
//                     <span className="text-sm md:text-base">{option}</span>
//                   </label>
//                 ))}
//               </div>

//               {/* [3] Button margin bottom adjustment */}
//               <Button
//                 onClick={onSearch}
//                 className="bg-gradient-to-r from-neutral-200 to-neutral-50 text-neutral-950 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg hover:from-neutral-300 hover:to-neutral-100 w-[200px] mx-auto mb-8 md:mb-0"
//                 disabled={!preference}
//               >
//                 Search Partners
//               </Button>
//             </div>
//           </div>
//         </section>
//       </BackgroundLines>
//     </div>
//   );
// }

import React, { useState } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';

export default function HeroSection({ onSearch }: { onSearch: () => void }) {
  const [preference, setPreference] = useState('');
  const options = ['Male', 'Female', 'Non-binary', 'Everyone'];

  return (
    <div className="relative w-full min-h-screen">
      <img 
        src="/assests/hero-section-bg.webp" 
        alt="Background" 
        className="absolute inset-0 w-full min-h-screen md:h-full object-cover object-center"
      />

      <BackgroundLines>
        <section className="min-h-screen md:min-h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/70 to-neutral-900/70" />

          <div className="relative z-10 text-center w-full max-w-6xl mx-auto pt-20 md:pt-0">
            <h1 className="text-6xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-200">
              100xHookUps
            </h1>

            <p className="text-xl md:text-xl mb-6 md:mb-12 max-w-2xl mx-auto text-neutral-50 px-4">
              Find your perfect match in the world of tech and innovation.
            </p>

            <p className="text-lg mb-6 max-w-2xl mx-auto text-neutral-50">
              Looking for?
            </p>

            <div className="flex flex-col items-center gap-8">
              <div className="grid grid-cols-1 md:flex md:flex-row gap-4 justify-center px-4 md:px-0 w-full max-w-xs md:max-w-none">
                {options.map((option) => (
                <label 
                  key={option} 
                  className="flex items-center justify-start text-neutral-50 bg-neutral-900/50 p-3 rounded-lg backdrop-blur-sm w-full md:w-auto min-w-[140px]"
                >
                  <div className="flex items-center gap-0 w-full pl-2">
                    <div className="w-6 flex-shrink-0">
                      <Checkbox 
                        checked={preference === option}
                        onCheckedChange={() => setPreference(option)}
                        className="border-neutral-50 data-[state=checked]:bg-red-500"
                      />
                    </div>
                    <span className="text-lg md:text-base flex-1">{option}</span>
                  </div>
                </label>
              ))}
              </div>

              <Button
                onClick={onSearch}
                className="bg-gradient-to-r from-neutral-200 to-neutral-50 text-neutral-950 px-8 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg hover:from-neutral-300 hover:to-neutral-100 w-[200px] mx-auto mb-8 md:mb-0"
                disabled={!preference}
              >
                Search Partners
              </Button>
            </div>
          </div>
        </section>
      </BackgroundLines>
    </div>
  );
}