// // src/components/stability-cards.tsx
// export default function StabilityCards() {
//     const cards = [
//       {
//         title: "Being financially stable",
//         image: "/assests/financially-stable.png",
//         link: "https://www.youtube.com/@financewithsharan"
//       },
//       {
//         title: "Being mentally stable",
//         image: "assests/psych2gp.jpg",
//         link: "https://www.youtube.com/@Psych2go"
//       },
//       {
//         title: "Being academically stable",
//         image: "assests/academically-stable.jpg",
//         link: "https://www.youtube.com/@GateSmashers"
//       },  
//       {
//         title: "Being physically stable",
//         image: "assests/physically-stable.png",
//         link: "https://www.youtube.com/@FitTuber"
//       },
//       {
//         title: "Being spiritually stable",
//         image: "assests/spiritually-stable.jpeg",
//         link: "https://www.youtube.com/@BhajanMarg"
//       },
//       {
//         title: "Being emotionally stable",
//         image: "/assests/shwerabh-gangwar.png",
//         link: "https://www.youtube.com/@GangstaPerspectives"
//       }
//     ];
  
//     return (
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//         {cards.map((card) => (
//           <div
//             key={card.title}
//             className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
//           >
//             <div className="h-48 bg-gray-200">
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
//               <a
//                 href={card.link}
//                 className="text-purple-600 hover:text-purple-800 font-medium"
//               >
//                 Resources →
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }

//newtab
export default function StabilityCards() {
  const cards = [
    {
      title: "Being financially stable",
      image: "/assests/financially-stable.webp",
      link: "https://www.youtube.com/@financewithsharan"
    },
    {
      title: "Being mentally stable",
      image: "assests/mentally-stable.webp",
      link: "https://www.youtube.com/@Psych2go"
    },
    {
      title: "Being academically stable",
      image: "assests/academically-stable.webp",
      link: "https://100xdevs.com/"
    },  
    {
      title: "Being physically stable",
      image: "assests/physically-stable.webp",
      link: "https://www.youtube.com/@FitTuber"
    },
    {
      title: "Being spiritually stable",
      image: "assests/spiritually-stable.webp",
      link: "https://www.youtube.com/@BhajanMarg"
    },
    {
      title: "Being emotionally stable",
      image: "/assests/shwerabh-gangwar.webp",
      link: "https://www.youtube.com/@GangstaPerspectives"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
        >
          <div className="h-48 bg-gray-200">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              Resources →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}