export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* heading */}
        <div className="text-center mb-14">
          <p className="text-purple-400 uppercase tracking-[4px] text-sm">
            About Me
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4">
           What I Specialize In
          </h2>
        </div>

        {/* top layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* left */}
          <div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-6">
             Specializing in {" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
               Shopify development,
              </span>{" "}
             custom apps and premium eCommerce solutions.
            </h3>

            <p className="text-gray-400 leading-8 text-sm sm:text-base">
              I’m a Shopify Developer with strong experience in advanced
              theme customization, premium custom development, custom Shopify
              app development using Remix, API integrations, metafields,
              third-party app integrations and scalable eCommerce solutions.
              Currently working on advanced Shopify ecosystem development and
              AI-powered digital workflows.
            </p>

            <button
              className="
              mt-8
              border border-purple-500
              px-8
              py-3
              rounded-full
              hover:bg-purple-600
              transition-all
              "
            >
              View Projects
            </button>
          </div>

          {/* right image */}
          <div className="flex justify-center lg:justify-end">

            <div
              className="
               w-full  sm:w-[320px] md:w-[380px]
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-6
              "
            >
              <img
                src="/profile.png"
                alt="Joyoti"
                className="w-full object-cover rounded-2xl"
              />
            </div>

          </div>

        </div>

        {/* bottom cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">

          <div className="border border-white/10 rounded-2xl p-5 bg-white/5">
           <p className="text-purple-400 text-sm mb-2">Phone</p>
            <a
              href="tel:+919088722640"
              className="text-gray-300 text-sm break-all hover:text-purple-300 transition"
            >
              +91 9088722640
            </a>
          </div>

          <div className="border border-white/10 rounded-2xl p-5 bg-white/5">
            <p className="text-purple-400 text-sm mb-2">Email</p>
            <a
              href="mailto:bhattacharyajoyoti3@gmail.com"
              className="text-gray-300 text-sm break-all hover:text-purple-300 transition"
            >
              bhattacharyajoyoti3@gmail.com
            </a>
          </div>

          <div className="border border-white/10 rounded-2xl p-5 bg-white/5">
            <p className="text-purple-400 text-sm mb-2">LinkedIn</p>
            <a
              href="http://www.linkedin.com/in/joyoti-bhattacharya-246175206"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-xs break-all hover:text-purple-300 transition"
            >
              linkedin.com/in/joyoti
            </a>
          </div>

          <div className="border border-white/10 rounded-2xl p-5 bg-white/5">
            <p className="text-purple-400 text-sm mb-2">Location</p>
            <p className="text-gray-300 text-sm">
              Kolkata, India
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}