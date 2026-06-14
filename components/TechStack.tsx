export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"],
    },
    {
      title: "Shopify",
      skills: ["Liquid", "Theme Dev", "Custom Sections", "Storefront API", "Metaobjects"],
    },
    {
      title: "Backend",
      skills: ["Node", "Laravel", "PHP", "Remix", "REST API", "GraphQL"],
    },
    {
      title: "Tools & AI",
      skills: ["GitHub", "OpenAI API", "Shopify CLI", "Figma",],
    },
  ];

  return (
   <section id="skills" className="relative bg-black text-white px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-12 sm:pt-36 md:pt-10 lg:pt-10 pb-10 sm:pb-24 md:pb-10">
       <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/10 blur-[140px] rounded-full"></div>
     
      <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
        <p className="text-purple-400 uppercase tracking-[4px] text-sm">
          Expertise
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4">
          Skills & Stack
        </h2>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">

        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="
              group
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              rounded-3xl
              p-7
              transition-all duration-300
              hover:border-purple-500
              hover:-translate-y-2
            "
          >
            <h3 className="text-xl font-semibold mb-6 text-purple-400">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, i) => (
                <span
                  key={i}
                  className="
                    px-4 py-2
                    rounded-full
                    bg-[#121212]
                    border border-white/10
                    text-sm
                    text-gray-300
                    group-hover:border-purple-400/30
                    transition-all
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}