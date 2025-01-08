// // src/components/camera-section.tsx
// import { useEffect, useRef, useState } from 'react';

// export default function CameraSection() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [showMeme, setShowMeme] = useState(false); // Toggle for meme functionality

//   useEffect(() => {
//     if (!showMeme) {
//       navigator.mediaDevices
//         .getUserMedia({ video: true })
//         .then((stream) => {
//           if (videoRef.current) {
//             videoRef.current.srcObject = stream;
//           }
//         })
//         .catch((err) => console.error(err));
//     }

//     return () => {
//       if (videoRef.current?.srcObject) {
//         const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
//         tracks.forEach((track) => track.stop());
//       }
//     };
//   }, [showMeme]);

//   return (
//     <div className="relative min-h-[50vh] flex items-center justify-center bg-black">
//       {!showMeme ? (
//         <video
//           ref={videoRef}
//           autoPlay
//           playsInline
//           className="w-150 h-full object-cover"
//         />
//       ) : (
//         // Meme image placeholder - uncomment and modify as needed
//         // <img
//         //   src="/meme-image.jpg"
//         //   alt="Meme"
//         //   className="w-full h-full object-cover"
//         // />
//         null
//       )}
//       <div className="absolute left-0 right-0 p-4 ">
//         <h2 className="text-white text-4xl text-center font-bold">
//           {/* Who would want to hook up with a face like yours? 🫠🫠😂😂 */}
//           You really think anyone’s gonna hook up with that face? 😂🫠


//         </h2>
//       </div>
//     </div>
//   );
// }
// Updated CameraSection.tsx
// import { useEffect, useRef, useState } from 'react';
// import { useCamera } from '@/context/CameraContext';

// export default function CameraSection() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [showMeme, setShowMeme] = useState(false);
//   const { stream } = useCamera();

//   useEffect(() => {
//     if (!showMeme && videoRef.current && stream) {
//       videoRef.current.srcObject = stream;
//     }

//     return () => {
//       if (stream) {
//         stream.getTracks().forEach(track => track.stop());
//       }
//     };
//   }, [showMeme, stream]);

//   return (
//     <div className="relative min-h-[50vh] flex items-center justify-center bg-black">
//       {!showMeme ? (
//         <video
//           ref={videoRef}
//           autoPlay
//           playsInline
//           className="w-150 h-full object-cover"
//         />
//       ) : null}
//       <div className="absolute left-0 right-0 p-4">
//         <h2 className="text-white text-4xl text-center font-bold">
//           You really think anyone's gonna hook up with that face? 😂🫠
//         </h2>
//       </div>
//     </div>
//   );
// }
//--------------------curr Live-------------------------------------------------------------
// src/components/camera-section.tsx
// import { useEffect, useRef, useState } from 'react';

// export default function CameraSection() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [showMeme, setShowMeme] = useState(false); // Toggle for meme functionality

//   useEffect(() => {
//     if (!showMeme) {
//       navigator.mediaDevices
//         .getUserMedia({ video: true })
//         .then((stream) => {
//           if (videoRef.current) {
//             videoRef.current.srcObject = stream;
//           }
//         })
//         .catch((err) => console.error(err));
//     }

//     return () => {
//       if (videoRef.current?.srcObject) {
//         const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
//         tracks.forEach((track) => track.stop());
//       }
//     };
//   }, [showMeme]);

//   return (
//     <div className="relative min-h-[50vh] flex items-center justify-center bg-black">
//       {!showMeme ? (
//         <video
//           ref={videoRef}
//           autoPlay
//           playsInline
//           className="w-150 h-full object-cover"
//         />
//       ) : (
//         // Meme image placeholder - uncomment and modify as needed
//         // <img
//         //   src="/meme-image.jpg"
//         //   alt="Meme"
//         //   className="w-full h-full object-cover"
//         // />
//         null
//       )}
//       <div className="absolute left-0 right-0 p-4 ">
//         <h2 className="text-white text-4xl text-center font-bold">
//           {/* Who would want to hook up with a face like yours? 🫠🫠😂😂 */}
//           You really think anyone’s gonna hook up with that face? 😂🫠

//         </h2>
//       </div>
//     </div>
//   );
// }

//---------------------------------------------------------
// // CameraSection.tsx
//pre cam access...
// import { useEffect, useRef, useState } from 'react';
// import { useCamera } from '@/context/CameraContext';

// export default function CameraSection() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [showMeme, setShowMeme] = useState(false);
//   const { stream } = useCamera();

//   useEffect(() => {
//     if (videoRef.current && stream) {
//       videoRef.current.srcObject = stream;
//       videoRef.current.play().catch(console.error);
//     }
//   }, [stream]);

//   useEffect(() => {
//     return () => {
//       if (stream) {
//         stream.getTracks().forEach(track => track.stop());
//       }
//     };
//   }, [stream]);

//   return (
//     <div className="relative min-h-[50vh] flex items-center justify-center bg-black">
//       {!showMeme ? (
//         <video
//           ref={videoRef}
//           autoPlay
//           playsInline
//           className="w-150 h-full object-cover"
//         />
//       ) : null}
//       <div className="absolute left-0 right-0 p-4">
//         <h2 className="text-white text-4xl text-center font-bold">
//           You really think anyone's gonna hook up with that face? 😂🫠
//         </h2>
//       </div>
//     </div>
//   );
// }


//delay pop-up message
// import { useEffect, useRef, useState } from 'react';

  

//   export default function CameraSection() {
//       const videoRef = useRef<HTMLVideoElement>(null);
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       const [showMeme, setShowMeme] = useState(false); // Toggle for meme functionality
//       const [showMessage, setShowMessage] = useState(false);
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       const h = (setShowMeme);// handling uncalled setShowMeme

//   useEffect(() => {
//     if (!showMeme) {
//       navigator.mediaDevices
//         .getUserMedia({ video: true })
//         .then((stream) => {
//           if (videoRef.current) {
//             videoRef.current.srcObject = stream;
//           }
//         })
//         .catch((err) => console.error(err));
//     }

//     return () => {
//       if (videoRef.current?.srcObject) {
//         const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
//         tracks.forEach((track) => track.stop());
//       }
//     };
//   }, [showMeme]);

//   useEffect(() => {
//     // a timeout to show the message after 1 second
//     const timer = setTimeout(() => {
//       setShowMessage(true);
//     }, 2500);

//     // Cleanup the timer
//     return () => clearTimeout(timer);
//   }, []); // Empty dependency array means this runs once on mount

//   return (
//     <div className="relative min-h-[50vh] flex items-center justify-center bg-black">
//       {!showMeme ? (
//         <video
//           ref={videoRef}
//           autoPlay
//           playsInline
//           className="w-150 h-full object-cover"
//         />
//       ) : (
//         null
//       )}
//       <div className="absolute left-0 right-0 bottom-5 p-4">
//         {showMessage && (
//           <h2 className="text-white text-4xl text-center font-bold underline underline-offset-2">
//             You really think anyone's gonna hook up with that face? 😂🫠
//           </h2>
//         )}
//       </div>
//     </div>
//   );
// }


// src/components/camera/camera-section.tsx
//updated 09/01
// import { useEffect, useRef, useState } from 'react';
// import CameraPermissionSkeleton from './camera-permission-skelteon';

// export default function CameraSection() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   // const [showMeme, setShowMeme] = useState(false); // Toggle for meme functionality
//   const [hasPermission, setHasPermission] = useState(false);
//   const [stream, setStream] = useState<MediaStream | null>(null);

//   useEffect(() => {
//     return () => {
//       // Cleanup: stop all tracks when component unmounts
//       if (stream) {
//         stream.getTracks().forEach(track => track.stop());
//       }
//     };
//   }, [stream]);

//   const startCamera = async () => {
//     try {
//       const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
//       if (videoRef.current) {
//         videoRef.current.srcObject = mediaStream;
//       }
//       setStream(mediaStream);
//     } catch (err) {
//       console.error('Error accessing camera:', err);
//     }
//   };

//   const handlePermissionGranted = () => {
//     setHasPermission(true);
//     startCamera();
//   };

//   if (!hasPermission) {
//     return <CameraPermissionSkeleton onPermissionGranted={handlePermissionGranted} />;
//   }

//   return (
//     <div className="relative min-h-[50vh] flex items-center justify-center bg-black">
//       {!showMeme ? (
//         <video
//           ref={videoRef}
//           autoPlay
//           playsInline
//           className="w-50 h-50 object-cover"
//         />
//       ) : (
//         // Meme image placeholder - uncomment and modify as needed
//         // <img
//         //   src="/meme-image.jpg"
//         //   alt="Meme"
//         //   className="w-full h-full object-cover"
//         // />
//         null
//       )}
//       <div className="absolute left-0 right-0 p-4">
//         <h2 className="text-white text-4xl text-center font-bold">
//           You really think anyone's gonna hook up with that face? 😂🫠
//         </h2>
//       </div>
//     </div>
//   );
// }

import { useEffect, useRef, useState } from 'react';
import CameraPermissionSkeleton from './camera-permission-skelteon';

export default function CameraSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  // Remove unused state
  // const [showMeme, setShowMeme] = useState(false);

  useEffect(() => {
    return () => {
      // Cleanup: stop all tracks when component unmounts
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setStream(mediaStream);
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const handlePermissionGranted = () => {
    setHasPermission(true);
    startCamera();
  };

  if (!hasPermission) {
    return <CameraPermissionSkeleton onPermissionGranted={handlePermissionGranted} />;
  }

  return (
    <div className="relative min-h-[50vh] flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-50 h-50 object-cover"
      />
      <div className="absolute left-0 right-0 p-4">
        <h2 className="text-white text-4xl text-center font-bold">
          You really think anyone&apos;s gonna hook up with that face? 😂🫠
        </h2>
      </div>
    </div>
  );
}