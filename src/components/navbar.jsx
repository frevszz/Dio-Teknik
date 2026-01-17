import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto">
        <div
          className="flex items-center
          justify-between
          px-4 sm:px-8
          py-5 sm:py-4"
        >
          {/* LOGO */}
          <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img
              src="./assets/logo/logo.webp"
              alt="Logo"
              loading="lazy"
              className="h-10 sm:h-12 w-auto cursor-pointer"
            />
          </a>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex gap-10">
            <a
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-semibold text-sm md:text-base py-2 hover:text-[#6D4AF7CC] cursor-pointer"
            >
              BERANDA
            </a>

            <a
              onClick={() => handleNavClick("About")}
              className="font-semibold text-sm py-2 md:text-base cursor-pointer hover:text-[#6D4AF7CC]"
            >
              TENTANG
            </a>

            <a
              onClick={() => handleNavClick("Service")}
              className="font-semibold text-sm py-2 md:text-base cursor-pointer hover:text-[#6D4AF7CC]"
            >
              LAYANAN
            </a>

            <a
              onClick={() => handleNavClick("Message")}
              className="font-semibold text-sm md:text-base bg-[#2467E3] py-2 px-4 rounded-full text-white cursor-pointer hover:bg-[#1a4db8]"
            >
              HUBUNGI KAMI
            </a>
          </nav>

          {/* MENU ICON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center"
          >
            <i
              className={`ri-${
                mobileMenuOpen ? "close" : "menu"
              }-line text-2xl`}
            ></i>
          </button>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`md:hidden fixed top-20 right-0 h-[calc(100vh-5rem)] w-[75%] max-w-xs 
  bg-[#2467E3] text-white z-50 flex flex-col
  transition-transform duration-300 ease-out
  ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav className="flex flex-col px-6 py-8 gap-6 mt-3">
          <a
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl text-center font-medium tracking-wide hover:text-black transition-colors cursor-pointer"
          >
            BERANDA
          </a>

          <a
            onClick={() => handleNavClick("About")}
            className="text-xl text-center font-medium tracking-wide hover:text-black transition-colors cursor-pointer"
          >
            TENTANG
          </a>

          <a
            onClick={() => handleNavClick("Service")}
            className="text-xl text-center font-medium tracking-wide hover:text-black transition-colors cursor-pointer"
          >
            LAYANAN
          </a>

          <a
            onClick={() => handleNavClick("Message")}
            className="text-xl bg-white text-[#2467E3] text-center py-3 px-5 rounded-xl font-medium
      hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            HUBUNGI KAMI
          </a>
        </nav>

        <div className="mt-auto w-full px-9 text-left text-sm pb-8">
          <h1>Socials</h1>
          <div className="flex text-[16px] text-white gap-4 mt-2">
            <a
              href="https://www.facebook.com/share/1CGFwGhmAm/"
              className="hover:text-black"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/dioteknik_cilacap?igsh=MTM4czhsNnY1aTBjbQ=="
              className="hover:text-black"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@dioteknikcilacap?_r=1&_t=ZS-937a3JakRAD"
              className="hover:text-black"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
