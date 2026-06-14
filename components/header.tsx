"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact Me", id: "contact" },
  ];

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);

  if (!section) return;

  const yOffset = -120;

  const y =
    section.getBoundingClientRect().top +
    window.scrollY +
    yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div
        className="
        flex
        justify-between
        items-center
        px-4 sm:px-6 md:px-8 lg:px-12
        py-4 md:py-5
        rounded-2xl
        border border-white/10
        bg-black/40
        backdrop-blur-xl
        shadow-[0_0_20px_rgba(255,255,255,0.03)]
        "
      >
        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-2xl sm:text-3xl font-bold tracking-wide cursor-pointer"
        >
          <span className="text-white">J</span>

          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            B
          </span>

          <span className="text-gray-500">.</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 xl:gap-12 text-gray-400 text-sm xl:text-base font-medium">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="
              relative
              hover:text-white
              transition-all
              duration-300

              after:content-['']
              after:absolute
              after:left-0
              after:-bottom-2
              after:w-0
              after:h-[1px]
              after:bg-white
              after:transition-all
              after:duration-300

              hover:after:w-full
              "
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Resume Button Desktop */}
          <a
            href="/JOYOTI_BHATTACHARYA_.pdf"
            target="_blank"
            className="
            hidden lg:block
            px-5 lg:px-6
            py-2.5 lg:py-3
            rounded-2xl
            bg-white
            text-black
            text-sm
            font-semibold
            hover:scale-105
            transition
            duration-300
            "
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
            lg:hidden
            relative
            w-7
            h-7
            flex
            items-center
            justify-center
          "
          >
            {/* top */}
            <span
              className={`
              absolute
              w-6
              h-[2px]
              bg-white
              transition-all
              duration-300
              ${menuOpen ? "rotate-45" : "-translate-y-2"}
            `}
            ></span>

            {/* middle */}
            <span
              className={`
              absolute
              w-6
              h-[2px]
              bg-white
              transition-all
              duration-300
              ${menuOpen ? "opacity-0" : "opacity-100"}
            `}
            ></span>

            {/* bottom */}
            <span
              className={`
              absolute
              w-6
              h-[2px]
              bg-white
              transition-all
              duration-300
              ${menuOpen ? "-rotate-45" : "translate-y-2"}
            `}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
          lg:hidden
          mt-3
          bg-black/90
          backdrop-blur-xl
          border border-white/10
          rounded-2xl
          p-6
          "
        >
          <nav className="flex flex-col gap-5 text-gray-300">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.id);
                  setMenuOpen(false);
                }}
                className="text-left hover:text-white transition"
              >
                {item.name}
              </button>
            ))}

            {/* Mobile Resume */}
            <a
              href="/resume.pdf"
              download
              className="
              mt-2
              text-center
              px-5
              py-3
              rounded-xl
              bg-white
              text-black
              font-semibold
              "
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}