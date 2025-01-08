// // src/components/camera/camera-permission-page.tsx
// import { useEffect, useState } from 'react';
// import { Skeleton } from "@/components/ui/skeleton";
// import { Camera } from "lucide-react";

// interface CameraPermissionPageProps {
//   onPermissionGranted: () => void;
// }

// export default function CameraPermissionPage({ onPermissionGranted }: CameraPermissionPageProps) {
//   const [permissionState, setPermissionState] = useState<'checking' | 'denied' | 'granted'>('checking');

//   const requestPermission = async () => {
//     setPermissionState('checking');
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       // Stop the stream as we just need permission
//       stream.getTracks().forEach(track => track.stop());
//       setPermissionState('granted');
//       onPermissionGranted();
//     } catch (err) {
//       setPermissionState('denied');
//     }
//   };

//   useEffect(() => {
//     requestPermission();
//   }, []);

//   if (permissionState === 'checking') {
//     return (
//       <div className="min-h-[50vh] bg-background flex items-center justify-center p-8">
//         <div className="w-full max-w-md space-y-8">
//           <div className="flex flex-col items-center space-y-6">
//             <Skeleton className="h-[125px] w-[250px] rounded-xl" />
//             <div className="space-y-3">
//               <Skeleton className="h-4 w-[250px]" />
//               <Skeleton className="h-4 w-[200px]" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-[50vh] bg-background flex items-center justify-center p-8">
//       <div className="w-full max-w-md space-y-8 text-center">
//         <Camera className="w-16 h-16 mx-auto text-primary" />
//         <div className="space-y-4">
//           <h2 className="text-2xl font-bold tracking-tight">Camera Permission Required</h2>
//           <p className="text-muted-foreground">
//             {permissionState === 'denied' 
//               ? "Oops! We need camera access to show you something cool. 🎥" 
//               : "We need your camera permission to continue. Trust us, it'll be worth it! 🎉"}
//           </p>
//         </div>
//         {permissionState === 'denied' && (
//           <button
//             onClick={requestPermission}
//             className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
//           >
//             Try Again
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }