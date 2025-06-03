import React from "react";

const TechCategories = () => {
  const categories = [
    [
      { label: "IT and Software Development", bold: true },
      { label: "Artificial Intelligence & Machine Learning" },
      { label: "Electric Vehicles (EVs) & Clean Technology" },
      { label: "Smart City Initiatives" },
      { label: "Healthcare Tech Innovations" },
      { label: "Robotics and Automation" },
      { label: "Blockchain and Fintech" },
    ],
    [
      { label: "Automotive Tech and R&D" },
      { label: "Education Tech" },
      { label: "3D Printing and Additive Manufacturing" },
      { label: "Augmented Reality & Virtual Reality" },
      { label: "Agriculture Tech" },
    ],
  ];

  return (
    <div className="bg-gradient-to-r from-[#6e1b50] to-[#591f2b] py-10 px-6 md:px-16 text-white font-['29LT_Bukra_Medium']">
      <div className="space-y-6 max-w-screen-xl mx-auto">
        {categories.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex flex-wrap gap-x-10 gap-y-4 border-t border-white/20 pt-4 ${
              rowIndex === 0 ? "border-none pt-0" : ""
            }`}
          >
            {row.map((item, index) => (
              <div
                key={index}
                className={`text-[clamp(14px,2vw,18px)] leading-[clamp(22px,2.5vw,28px)] ${
                  item.bold ? "font-bold" : "font-normal"
                }`}
              >
                {item.label}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCategories;
