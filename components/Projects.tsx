"use client";
import { useState } from "react";

export default function Projects() {
  const projectsData = {
    shopify: [
      { name: "QT Plushies", link: "https://qtplushies.com/" },
      { name: "Vivoo", link: "https://www.vivoo.io/" },
      { name: "Olive Iron", link: "https://oliveiron.com/" },
      { name: "MOY Furniture", link: "https://moy-furniture.co.uk/" },
      { name: "Joy & Co", link: "https://joyandco.com/" },
      { name: "Aloe Tallow", link: "https://aloe-tallow.com/" },
      {
        name: "Brandon L Godwin Architect",
        link: "https://brandonlgodwinarchitect.com/",
      },
      { name: "Mythic Market", link: "https://mythic.market/" },
      { name: "DMS Products", link: "https://dms-products.com/" },
      { name: "Four Heights", link: "https://fourheights.com/" },
      { name: "Evereve", link: "https://evereve.in/" },
      { name: "Big Head Hats", link: "https://bigheadhats.com/" },
      { name: "Felina Forge", link: "https://felinaforge.com/" },
      {
        name: "Redstone Performance Nutrition",
        link: "https://redstoneperformancenutrition.com/",
      },
      { name: "Mianu Wines", link: "https://www.mianuwines.com/" },
      { name: "Ganesh Kart", link: "https://ganeshkart.com/" },
      { name: "Haja Sports", link: "https://hajasports.com/" },
      { name: "FlowLife", link: "https://www.flowlife.us/" },
      { name: "Wave Case", link: "https://www.wavecase.co.uk/" },
      { name: "Miss Mini", link: "https://missmini.com/" },
      { name: "Indigo Interior NY", link: "https://indigointeriorny.com/" },
      { name: "Fintoes Shoes", link: "https://fintoesshoes.com/" },
      { name: "Dr Jerome Puryear", link: "https://www.drjeromepuryear.com/" },
    ],

    apps: [
      {
        name: "Bundle Builder App",
        link: "#",
      },
      {
        name: "Subscription Management App",
        link: "#",
      },
      {
        name: "Custom Blog Like App",
        link: "https://www.sososwim.com/blogs/custom-blog-features",
      },
      {
        name: "Advanced Discount Engine",
        link: "#",
      },
      {
        name: "Cart Optimization App",
        link: "#",
      },
      {
        name: "Internal Admin Dashboard",
        link: "#",
      },
    ],

    personal: [
      "AI Product Finder",
      "Custom Dashboard",
      "Shopify Boilerplate",
      "Portfolio CMS",
      "Personal Build 5",
      "Personal Build 6",
      "Personal Build 7",
    ],
  };

  const [activeTab, setActiveTab] = useState<"shopify" | "apps" | "personal">(
    "shopify",
  );

  const [visible, setVisible] = useState(6);

  const currentProjects = projectsData[activeTab];

  const loadMore = () => {
    setVisible((prev) => prev + 6);
  };

  const handleTabChange = (tab: "shopify" | "apps" | "personal") => {
    setActiveTab(tab);
    setVisible(6); // reset
  };

  return (
    <section id="projects" className="bg-black text-white px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-0 sm:pt-36 md:pt-10 lg:pt-10 pb-10 sm:pb-24 md:pb-20">
      
      <div className="text-center mb-14">
        <p className="text-purple-400 tracking-[4px] uppercase text-sm">
          Selected Work
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4">
          Projects
        </h2>
      </div>

     
      <div className="flex justify-center gap-4 flex-wrap mb-12">
        <button
          onClick={() => handleTabChange("shopify")}
          className={`px-6 py-3 rounded-full border transition-all ${
            activeTab === "shopify" ? "border-purple-500" : "border-white/10"
          }`}
        >
          Shopify Projects
        </button>

        <button
          onClick={() => handleTabChange("apps")}
          className={`px-6 py-3 rounded-full border transition-all ${
            activeTab === "apps" ? "border-purple-500" : "border-white/10"
          }`}
        >
          Custom Apps
        </button>

        <button
          onClick={() => handleTabChange("personal")}
          className={`px-6 py-3 rounded-full border transition-all ${
            activeTab === "personal" ? "border-purple-500" : "border-white/10"
          }`}
        >
          Personal Builds
        </button>
      </div>

      
      <div className="border border-white/10 rounded-3xl p-8 md:p-12 bg-white/5 backdrop-blur-xl">
        <div className="max-w-3xl mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-5">
            Full Scale Development Experience
          </h3>

          <p className="text-gray-400 leading-8">
            Developed complete production level projects including frontend
            development, backend logic, custom integrations, scalable commerce
            solutions and custom app development.
          </p>
        </div>

        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentProjects.slice(0, visible).map((project, index) => (
            <a
              key={index}
              href={typeof project === "string" ? "#" : project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
      border border-white/10
      rounded-2xl
      p-5
      hover:border-purple-500
      transition-all
      block
    "
            >
              {typeof project === "string" ? project : project.name} →
            </a>
          ))}
        </div>

        
        {visible < currentProjects.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMore}
              className="
                px-8 py-3
                rounded-full
                border border-purple-500
                hover:bg-purple-600
                transition-all
              "
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
