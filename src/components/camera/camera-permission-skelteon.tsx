// // src/components/camera/camera-permission-skeleton.tsx
// import { useEffect, useState } from 'react';
// import { Camera } from 'lucide-react';

// export default function CameraPermissionSkeleton() {
//   const [permissionStatus, setPermissionStatus] = useState<'prompt' | 'granted' | 'denied'>('prompt');
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     checkCameraPermission();
//   }, []);

//   const checkCameraPermission = async () => {
//     try {
//       const result = await navigator.mediaDevices.getUserMedia({ video: true });
//       // Stop the stream immediately since we just wanted to check permission
//       result.getTracks().forEach(track => track.stop());
//       setPermissionStatus('granted');
//       setIsLoading(false);
//     } catch (err) {
//       setPermissionStatus('denied');
//       setIsLoading(false);
//     }
//   };

//   const requestPermission = async () => {
//     setIsLoading(true);
//     await checkCameraPermission();
//   };

//   if (permissionStatus === 'granted') {
//     return null; // Component will unmount and show camera section
//   }

//   return (
//     <div className="min-h-[50vh] flex flex-col items-center justify-center bg-gray-900 p-8">
//       <div className="max-w-md w-full space-y-8 text-center">
//         <Camera className="mx-auto h-16 w-16 text-blue-500 animate-pulse" />
        
//         {isLoading ? (
//           <div className="space-y-4">
//             <div className="h-8 bg-gray-700 rounded animate-pulse" />
//             <div className="h-4 bg-gray-700 rounded w-3/4 mx-auto animate-pulse" />
//           </div>
//         ) : (
//           <>
//             <h2 className="mt-6 text-3xl font-bold text-white">
//               Camera Access Required
//             </h2>
//             <p className="mt-2 text-gray-300">
//               We need your camera permission to show you something special! 🎉
//             </p>
//             {permissionStatus === 'denied' && (
//               <div className="mt-4 text-red-400">
//                 Camera access was denied. Please enable it in your browser settings and try again.
//               </div>
//             )}
//             <button
//               onClick={requestPermission}
//               className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
//             >
//               {permissionStatus === 'denied' ? 'Try Again' : 'Allow Camera Access'}
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

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
///above workin

// src/components/camera/camera-permission-page.tsx
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
//       // Reset permission state first
//       await navigator.mediaDevices.getUserMedia({ video: true })
//         .then(stream => {
//           // Stop the stream immediately as we just needed permission
//           stream.getTracks().forEach(track => track.stop());
//           setPermissionState('granted');
//           onPermissionGranted();
//         })
//         .catch(error => {
//           console.log('Permission denied or error:', error);
//           setPermissionState('denied');
//         });
//     } catch (err) {
//       console.log('Permission request error:', err);
//       setPermissionState('denied');
//     }
//   };

//   useEffect(() => {
//     requestPermission();
//   }, []);

//   // Loading state with skeletons
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

//   // Permission request/retry state
//   return (
//     <div className="min-h-[50vh] bg-background flex items-center justify-center p-8">
//       <div className="w-full max-w-md space-y-8 text-center">
//         <Camera className="w-16 h-16 mx-auto text-primary" />
//         <div className="space-y-4">
//           <h2 className="text-2xl font-bold tracking-tight">
//             Camera Permission Required
//           </h2>
//           <p className="text-muted-foreground">
//             We need camera access to show you something cool. 
//             {permissionState === 'denied' && " Please try again to continue!"}
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

// src/components/camera/camera-permission-page.tsx
// import { useCallback, useEffect, useState } from 'react';
// // import { Skeleton } from "@/components/ui/skeleton";
// import { Camera } from "lucide-react";

// interface CameraPermissionPageProps {
//   onPermissionGranted: () => void;
// }

// export default function CameraPermissionPage({ onPermissionGranted }: CameraPermissionPageProps) {
//   const [permissionState, setPermissionState] = useState<'checking' | 'denied' | 'granted'>('checking');

//   const requestPermission = useCallback(async () => {
//     setPermissionState('checking');
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: {
//           width: { ideal: 580 },
//           height: { ideal: 480 }
//         }
//       });

//       stream.getTracks().forEach((track) => track.stop());
//       setPermissionState('granted');
//       onPermissionGranted();
//     } catch {
//       setPermissionState('denied');
//     }
//   }, [onPermissionGranted]);

//   useEffect(() => {
//     requestPermission();
//   }, [requestPermission]);

//   return (
//     <div className="min-h-[50vh] bg-background flex items-center justify-center p-8">
//       <div className="w-full max-w-md space-y-8 text-center">
//         <Camera className="w-16 h-16 mx-auto text-primary" />
//         <div className="space-y-4">
//           <h2 className="text-2xl font-bold tracking-tight">
//             Oops! Camera Permission Required
//           </h2>
//           <p className="text-muted-foreground">
//             We need camera access to show you something cool.
//             {permissionState === 'denied' && (
//               <span className="block mt-2 text-sm">
//                 If the permission prompt doesn&apos;t appear, please reset camera permissions in your browser settings and try again.
//                 <span className="block mt-4 text-sm font-semibold">
//                   Browser settings → Search(Camera) → Click the highlighted section → Navigate site → Click &quot;Reset permissions&quot;
//                 </span>
//               </span>
//             )}
//           </p>
//         </div>
//         {permissionState === 'denied' && (
//           <button
//             onClick={() => {
//               setPermissionState('checking');
//               setTimeout(requestPermission, 100);
//             }}
//             className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
//           >
//             Try Again
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }


// src/components/camera/camera-permission-page.tsx
import { useEffect, useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { Camera} from "lucide-react";

interface CameraPermissionPageProps {
  onPermissionGranted: () => void;
}

export default function CameraPermissionPage({ onPermissionGranted }: CameraPermissionPageProps) {
  const [permissionState, setPermissionState] = useState<'checking' | 'denied' | 'granted'>('checking');
  // Remove unused error states or use them

  const requestPermission = async () => {
    setPermissionState('checking');

    try {
      // Request camera access
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 580 }, //1280
          height: { ideal: 480 }  //720
        }
      });

      // If we get here, permission was granted
      stream.getTracks().forEach(track => track.stop());
      setPermissionState('granted');
      onPermissionGranted();
    } 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch (error) {
      // Only set denied state, no console logs
      setPermissionState('denied');
      
      // Reset permissions to ensure the prompt shows again
      if (navigator.permissions && navigator.permissions.query) {
        try {
          const result = await navigator.permissions.query({ name: 'camera' as PermissionName });
          if (result.state === 'denied') {
            // Let the user know they need to reset permissions in browser settings
            setPermissionState('denied');
          }
        } 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        catch (permError) {
          // Handle silently - fall back to default denied state
          setPermissionState('denied');
        }
      }
    }
  };

  useEffect(() => {
    requestPermission();
  }, [[requestPermission]]);

  if (permissionState === 'checking') {
    return (
      <div className="min-h-[50vh] flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center space-y-6 ">
            <Skeleton className="h-[350px] w-[650px] rounded-xl" />
            <div className="space-y-3">
              <span className="text-2xl font-bold tracking-tight text-muted-foreground">
                <h2>Camera Permission Required</h2>
                We need camera access to show you something cool.
              </span>
              <Skeleton className="h-4 w-[650px]" />
              <Skeleton className="h-4 w-[400px]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[50vh] bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-8 text-center">
        <Camera className="w-16 h-16 mx-auto text-primary" />
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Oops! Camera Permission Required
          </h2>
          <p className="text-muted-foreground">
            We need camera access to show you something cool.
            {permissionState === 'denied' && (
              <span className="block mt-2 text-sm">
                {" "}If the permission prompt doesn&apost appear, please reset camera permissions in your browser settings and try again.
                <span className="block mt-4 text-sm font-semibold">
                  {" "}Browser settings → Search(Camera) → Click the highlighted section → Navigate site, click → Click &quot<span className="text-sm font-bold">Rest permissions&quot</span>
                </span>
              </span>
              
            )}
          </p>
        </div>
        {permissionState === 'denied' && (
          <button
            onClick={() => {
              // Reset state and request again
              setPermissionState('checking');
              setTimeout(requestPermission, 100);
            }}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}

// Settings -> Search(Camera) -> Click the highlighted section -> Navigate site & click - Click "Rest permissions"