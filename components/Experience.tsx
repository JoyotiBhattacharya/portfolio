export default function Experience() {
  const experienceData = [
    {
      year: "2021",
      title: "Adamas University",
      desc: "Completed B.Tech in Computer Science Engineering.",
    },
    {
      year: "2021 - 2023",
      title: "Ewards",
      desc: "Worked as Frontend Developer using Bootstrap, Laravel, jQuery and WordPress.",
    },
    {
      year: "2023 - 2025",
      title: "Bitpastel",
      desc: "Started Shopify development with theme customization and custom store development.",
    },
    {
  year: "2025 - Present",
  title: "Webskitters",
  desc: "Currently working on Shopify development, custom Shopify app development using Remix, advanced theme customization, API integrations and scalable eCommerce solutions.",
}
  ];

  return (
   <section id="experience" className="bg-black text-white xs:pt-10 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-0 sm:pt-36 md:pt-40 lg:pt-20 pb-10 sm:pb-24 md:pb-10">

      
      <div className="text-center mb-16">
        <p className="text-purple-400 uppercase tracking-[4px] text-sm">
          My Journey
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4">
          Experience
        </h2>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {experienceData.map((item, index) => (
          <div
            key={index}
            className="
              bg-[#0c0c0c]
              border border-white/10
              rounded-3xl
              p-6 md:p-8
              backdrop-blur-xl
              hover:border-purple-500
              transition-all
              duration-300
            "
          >
            <span className="text-purple-400 text-sm">
              {item.year}
            </span>

            <h3 className="text-2xl font-semibold mt-3 mb-4">
              {item.title}
            </h3>

            <p className="text-gray-400 leading-8 text-sm sm:text-base">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}