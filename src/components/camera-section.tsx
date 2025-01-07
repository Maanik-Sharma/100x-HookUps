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
import { useEffect, useRef, useState } from 'react';

  

  export default function CameraSection() {
      const videoRef = useRef<HTMLVideoElement>(null);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [showMeme, setShowMeme] = useState(false); // Toggle for meme functionality
      const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (!showMeme) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error(err));
    }

    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [showMeme]);

  useEffect(() => {
    // a timeout to show the message after 1 second
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 2500);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="relative min-h-[50vh] flex items-center justify-center bg-black">
      {!showMeme ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-150 h-full object-cover"
        />
      ) : (
        null
      )}
      <div className="absolute left-0 right-0 bottom-5 p-4">
        {showMessage && (
          <h2 className="text-white text-4xl text-center font-bold underline underline-offset-2">
            You really think anyone's gonna hook up with that face? 😂🫠
          </h2>
        )}
      </div>
    </div>
  );
}