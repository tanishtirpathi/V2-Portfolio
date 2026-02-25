import React from "react";

const DevelopersCorner: React.FC = () => {
  return (
    <div className="relative group w-[200px] h-[150px] bg-transparent rounded-xl overflow-hidden">

      {/* Red Expanding Triangle */}
      <div
        className="
          absolute top-0 right-0 
          w-[70px] h-[70px] 
          bg-black/70
          dark:bg-gray-400/80 
          transition-all duration-500 ease-in-out
          group-hover:w-[90px] 
          group-hover:h-[90px]
          rotate-180
          rounded-r-lg
        "
        style={{
          clipPath: "polygon(100% 0, 0 0, 100% 100%)",
        }}
      >

        {/* Dotted Border (Right Edge) */}
        <div className="absolute top-0 right-0 h-full border-t-2 border-dotted border-white/70"></div>

        {/* Hover Text */}


      </div>
      <span className="
          absolute top-25 right-4
          text-black dark:text-white text-xs font-medium
          opacity-0 translate-y-2
          transition-all duration-300 font-serif italic
          group-hover:opacity-100 group-hover:translate-y-0
        ">
        Developer's Corner
      </span>
    </div>
  );
};

export default DevelopersCorner;