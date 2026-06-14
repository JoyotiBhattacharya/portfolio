"use client";

export default function Hero() {
  const goToContact = () => {
  const section = document.getElementById("contact");

  if (!section) return;

  const y =
    section.getBoundingClientRect().top +
    window.scrollY -
    120;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};
  return (
    <section id="home" className="bg-[#0A0A0A] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-32 sm:pt-36 md:pt-40 lg:pt-48 pb-16 sm:pb-24 md:pb-20">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

       
        <div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-5 leading-tight text-white">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Joyoti
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl mb-5 text-gray-400">
            Software Developer
          </h2>

          <p className="max-w-2xl text-base sm:text-lg text-gray-500 leading-7 sm:leading-8">
            Building scalable digital products, modern web applications,
            and high-performance eCommerce experiences with AI-powered workflows.
          </p>

          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10">

           <a
 href="/JOYOTI_BHATTACHARYA_.pdf"
   download
  className="
    bg-white
    text-black
    px-6 sm:px-8
    py-3 sm:py-4
    rounded-xl
    font-semibold
    hover:scale-105
    transition
  "
>
  Download Resume
</a>


            <button
              onClick={goToContact}
              className="
              border border-gray-700
              text-white
              px-6 sm:px-8
              py-3 sm:py-4
              rounded-xl
              hover:bg-gray-900
              transition
              "
            >
              Contact Me
            </button>

          </div>

          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 mt-12 place-items-center">
           
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">4+</h3>
              <p className="text-sm sm:text-base text-gray-500">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">50+</h3>
              <p className="text-sm sm:text-base text-gray-500">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">AI</h3>
              <p className="text-sm sm:text-base text-gray-500">
                Powered Workflow
              </p>
            </div>
            

          </div>

        </div>

        
        <div
          className="
          border border-gray-800
          rounded-2xl
          p-5 sm:p-6 md:p-8
          bg-gray-900
          overflow-x-auto
          "
        >

          <div className="text-gray-500 mb-4 text-sm sm:text-base">
            roadmap.js
          </div>

          <pre className="text-green-400 text-xs sm:text-sm leading-7 whitespace-pre-wrap">

            {`const builder = {
              mainFocus: "Shopify",
              themeDevelopment: true,
              frontend: "React",
              appDevelopment: "Node.js",
              framework: "Remix",
              aiWorkflow: true
            }`}

          </pre>

        </div>

      </div>

    </section>
  );
}