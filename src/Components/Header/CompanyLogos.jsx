import React from "react";

const CompanyLogos = () => {
  const logoSrc = [
    "https://upload.wikimedia.org/wikipedia/commons/c/c8/Dribbble_Text_Logo_Script.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/2560px-HubSpot_Logo.svg.png",
    "https://cdn.freelogovectors.net/wp-content/uploads/2023/09/notionlogo-freelogovectors.net_.png",
    "https://1000logos.net/wp-content/uploads/2021/06/Zoom-Logo.png",
  ];

  return (
    <div className="grid place-items-center grid-cols-2 sm:grid-cols-4 gap-x-6 mt-7 sm:mt-4 md:mt-0 gap-y-4 sm:gap-y-0">
      {logoSrc.map((logo) => (
        <img
          key={logo}
          className={`w-[55%] sm:w-[55%] md:w-[50%] xl:w-[35%] grayscale`}
          src={logo}
          alt="logo"
        />
      ))}
    </div>
  );
};

export default CompanyLogos;
