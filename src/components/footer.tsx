// // components/Footer.tsx

// const Footer = () => {
//     return (
//       <footer className="bg-neutral-950 text-slate-50 py-4">
//         <div className="container mx-auto text-center">
//           <p>&copy; {new Date().getFullYear()} 100xHookUps. All rights reserved.</p>
//           <div className="mt-2">
//             <a href="/" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
//             <a href="/" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
//           </div>
//         </div>
//       </footer>
//     );
//   };
  
//   export default Footer;
// import { Twitter, Linkedin, Github, Heart, Coffee } from "lucide-react";

// const Footer = () => {
//   const socialLinks = [
//     {
//       icon: <Twitter size={20} />,
//       url: "https://x.com/yi_Decipher",
//       label: "Twitter"
//     },
//     {
//       icon: <Linkedin size={20} />,
//       url: "https://www.linkedin.com/in/maaniksharma/",
//       label: "LinkedIn"
//     },
//     {
//       icon: <Github size={20} />,
//       url: "https://github.com/Maanik-Sharma",
//       label: "GitHub"
//     }
//   ];

//   return (
//     <footer className="bg-neutral-950 text-slate-50 py-6">
//       <div className="container mx-auto text-center">
//         <div className="flex flex-col items-center gap-4">
//           <p>&copy; {new Date().getFullYear()} 100xHookUps. All rights reserved.</p>
          
//           <div className="flex items-center gap-2 text-sm">
//             <span>Made with</span>
//             <Heart size={16} className="text-red-500 fill-red-500" />
//             <span>by</span>
//             <span className="font-medium">Decipher</span>
//           </div>

//           {/* Support Section */}
//           <div className="flex flex-col items-center gap-2">
//             <p className="text-sm font-medium text-gray-400">You can support my work!</p>
//             <a
//               href="https://buymeacoffee.com/yi_decipher" // Replace with your Buy Me a Coffee link
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 px-4 py-2 bg-[#FFDD00] text-black rounded-lg hover:bg-[#FFDD00]/90 transition-colors"
//             >
//               <Coffee size={18} />
//               <span className="font-medium">Buy me a coffee</span>
//             </a>
//           </div>

//           <div className="flex items-center justify-center gap-6">
//             {socialLinks.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-white transition-colors"
//                 aria-label={link.label}
//               >
//                 {link.icon}
//               </a>
//             ))}
//           </div>

//           <div className="flex items-center gap-4 text-sm">
//             <a href="/" className="text-gray-400 hover:text-white transition-colors">
//               Privacy Policy
//             </a>
//             <a href="/" className="text-gray-400 hover:text-white transition-colors">
//               Terms of Service
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { Twitter, Linkedin, Github, Heart, Coffee } from "lucide-react";
import Link from 'next/link';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Twitter size={20} />,
      url: "https://x.com/yi_Decipher",
      label: "Twitter"
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/maaniksharma/",
      label: "LinkedIn"
    },
    {
      icon: <Github size={20} />,
      url: "https://github.com/Maanik-Sharma",
      label: "GitHub"
    }
  ];

  return (
    <footer className="bg-neutral-950 text-slate-50 py-6">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center gap-4">
          <p>&copy; {new Date().getFullYear()} 100xHookUps. All rights reserved.</p>
          
          <div className="flex items-center gap-2 text-sm">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>by</span>
            <span className="font-medium">Decipher</span>
          </div>

          {/* Support Section */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-medium text-gray-400">You can support my work!</p>
            <a
              href="https://buymeacoffee.com/yi_decipher" // Replace with your Buy Me a Coffee link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#FFDD00] text-black rounded-lg hover:bg-[#FFDD00]/90 transition-colors"
            >
              <Coffee size={18} />
              <span className="font-medium">Buy me a coffee</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
