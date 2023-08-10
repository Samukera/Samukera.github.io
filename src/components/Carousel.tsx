// import React, { useState } from "react";

// export default function Carousel({ children }) {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % children.length);
//   };

//   const handlePrevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + children.length) % children.length);
//   };

//   return (
//     <div className="relative overflow-hidden">
//       <div
//         className="flex transition-transform duration-500"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {children}
//       </div>
//       <button
//         className="absolute top-1/2 left-0 transform -translate-y-1/2"
//         onClick={handlePrevSlide}
//       >
//         Prev
//       </button>
//       <button
//         className="absolute top-1/2 right-0 transform -translate-y-1/2"
//         onClick={handleNextSlide}
//       >
//         Next
//       </button>
//     </div>
//   );
// }
