import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// --- Menu Data Configuration ---
const menuItems = [
    {
        title: "HOME",
        link: "/",
        submenu: [
            { title: "Home One", link: "#" },
            { title: "Home Two", link: "#" },
            { title: "Home Three", link: "#" },
        ],
    },
    {
        title: "ABOUT US",
        link: "/about",
        submenu: [
            { title: "About One", link: "#" },
            { title: "About Two", link: "#" },
            { title: "About Three", link: "#" },
        ],
    },
    {
        title: "MEGA",
        link: "#",
        isMega: true,
        columns: [
            [
                { title: "About One", link: "#" },
                { title: "About Two", link: "#" },
                { title: "Blog", link: "#" },
                { title: "Blog Details", link: "#" },
            ],
            [
                { title: "Teachers", link: "#" },
                { title: "Teachers Without Filter", link: "#" },
                { title: "Teachers Single", link: "#" },
                { title: "Contact", link: "#" },
            ],
            [
                { title: "Gallery One", link: "#" },
                { title: "Gallery Two", link: "#" },
                { title: "Gallery Three", link: "#" },
                { title: "Error 404", link: "#" },
            ],
            [
                { title: "Shop", link: "#" },
                { title: "Shop Details", link: "#" },
                { title: "Cart", link: "#" },
                { title: "Checkout", link: "#" },
            ],
        ],
    },
    {
        title: "COURSES",
        link: "/courses",
        submenu: [
            { title: "Courses One", link: "#" },
            { title: "Courses Two", link: "#" },
            { title: "Courses Details", link: "#" },
            { title: "Courses Details 2", link: "#" },
        ],
    },
    {
        title: "EVENTS",
        link: "/events",
        submenu: [
            { title: "Events", link: "#" },
            { title: "Events Details", link: "#" },
            { title: "Contact", link: "#" },
        ],
    },
    {
        title: "BLOG",
        link: "/blog",
        submenu: [
            { title: "Blog", link: "#" },
            { title: "Blog Details", link: "#" },
        ],
    },
    { title: "CONTACT", link: "/contact" },
];

// --- Nav Styles ---
const navBase =
    "py-4 h-full flex items-center transition-colors duration-200";

const navActive =
    "text-[oklch(67%_0.17_54)] font-semibold";

const navInactive =
    "text-white hover:text-[oklch(67%_0.17_54)]";

// --- Component ---
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);

    useEffect(() => {
        const onScroll = () => setIsSticky(window.scrollY > 180);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toggleMobileSubmenu = (index) => {
        setExpandedMobileMenu(expandedMobileMenu === index ? null : index);
    };

    return (
        <div className="w-full relative z-50 font-roboto">
            {/* Animation Styles */}
            <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideDown {
          animation: slideDown 0.4s ease-out forwards;
        }
        /* Custom Hover Transition for Dropdowns */ 
        .group:hover .group-hover\\:visible { 
            visibility: visible; 
            opacity: 1; 
            transform: 
            translateY(0); }
      `}</style>
            {/* Top Toolbar */}
            <div className="bg-black py-2 border-b border-gray-200 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex itb-ems-center gap-2">
                            <i className="fa fa-bank"></i> Welcome to Edulearn
                        </span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="flex space-x-4 text-gray-400">
                            <a href="#" className="hover:text-blue-600 transition">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="#" className="hover:text-blue-400 transition">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="#" className="hover:text-red-500 transition">
                                <i className="fa-brands fa-google-plus"></i>
                            </a>
                            <a href="#" className="hover:text-blue-700 transition">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                        <a href="#" className="bg-red-600 text-white px-4 py-1 text-sm font-semibold
                        rounded hover:bg-red-700 transition">
                            Apply Now
                        </a>
                    </div>
                </div>
            </div>
            {/* Branding */}
            <div className="bg-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <img src="/images/logo.png" alt="logo" className="mx-auto h-12" />
                </div>
            </div>

            {/* Navigation */}
            <div className={`${isSticky ? "h-14" : ""}`}>
                <div
                    className={`bg-black ${
                        isSticky
                            ? "fixed top-0 left-0 w-full animate-slideDown"
                            : "relative"
                    }`}
                >
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center h-14">

                            {/* Mobile Toggle */}
                            <button
                                className="md:hidden text-white uppercase font-bold"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                Menu
                            </button>

                            {/* Desktop Menu */}
                            <nav className="hidden md:block">
                                <ul className="flex space-x-8 text-sm uppercase font-semibold h-full items-center">
                                    {menuItems.map((item, index) => (
                                        <li key={index} className="group relative h-full flex items-center">

                                            {/* Main Link */}
                                            {item.link !== "#" ? (
                                                <NavLink
                                                    to={item.link}
                                                    end={item.link === "/"}
                                                    className={({ isActive }) =>
                                                        `${navBase} ${
                                                            isActive ? navActive : navInactive
                                                        }`
                                                    }
                                                >
                                                    {item.title}
                                                </NavLink>
                                            ) : (
                                                <span className={`${navBase} ${navInactive}`}>
                          {item.title}
                        </span>
                                            )}

                                            {/* Dropdown */}
                                            {item.submenu && !item.isMega && (
                                                <ul className="absolute top-full left-0 w-56 bg-[#212121] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 border-t-2 border-[oklch(67%_0.17_54)]">
                                                    {item.submenu.map((sub, i) => (
                                                        <li key={i} className="border-b border-gray-700 last:border-0">

                                                            {sub.link !== "#" ? (
                                                                <NavLink
                                                                    to={sub.link}
                                                                    className={({ isActive }) =>
                                                                        `block px-4 py-3 text-xs capitalize transition-all duration-300 ${
                                                                            isActive
                                                                                ? "text-[oklch(67%_0.17_54)] pl-6"
                                                                                : "text-gray-300 hover:text-[oklch(67%_0.17_54)] hover:pl-6"
                                                                        }`
                                                                    }
                                                                >
                                                                    {sub.title}
                                                                </NavLink>
                                                            ) : (
                                                                <span
                                                                    className="block px-4 py-3 text-xs capitalize text-gray-300 hover:text-[oklch(67%_0.17_54)] hover:pl-6 transition-all duration-300 cursor-pointer"
                                                                >
            {sub.title}
          </span>
                                                            )}

                                                        </li>
                                                    ))}
                                                </ul>
                                            )}


                                            {/* Mega Menu */}
                                            {item.isMega && (
                                                <div className="absolute top-full left-0 w-[800px] -ml-20 bg-[#212121]
                  invisible opacity-0 translate-y-4
                  group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-300 ease-out
                  border-t-2 border-[oklch(67%_0.17_54)] p-6">

                                                    <div className="grid grid-cols-4 gap-6">
                                                        {item.columns.map((col, c) => (
                                                            <ul key={c} className="space-y-2">
                                                                {col.map((sub, s) => (
                                                                    <li
                                                                        key={s}
                                                                        className="relative group/item border-b border-gray-700 pb-2 overflow-hidden"
                                                                    >
                                                                        {sub.link !== "#" ? (
                                                                            <NavLink
                                                                                to={sub.link}
                                                                                className={({ isActive }) =>
                                                                                    `relative inline-flex items-center text-xs capitalize
                     transition-all duration-300 ease-out
                     ${
                                                                                        isActive
                                                                                            ? "text-[oklch(67%_0.17_54)] translate-x-2"
                                                                                            : "text-gray-300 group-hover/item:text-[oklch(67%_0.17_54)] group-hover/item:translate-x-2"
                                                                                    }`
                                                                                }
                                                                            >
                                                                                {sub.title}

                                                                                {/* underline animation */}
                                                                                <span
                                                                                    className="absolute left-0 -bottom-[2px] h-[1px] w-0
                               bg-[oklch(67%_0.17_54)]
                               transition-all duration-300
                               group-hover/item:w-full"
                                                                                />
                                                                            </NavLink>
                                                                        ) : (
                                                                            <span
                                                                                className="relative inline-flex items-center text-xs capitalize
                             text-gray-300 cursor-pointer
                             transition-all duration-300 ease-out
                             group-hover/item:text-[oklch(67%_0.17_54)]
                             group-hover/item:translate-x-2"
                                                                            >
                  {sub.title}

                </span>
                                                                        )}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden bg-[#212121] ${isMenuOpen ? "block" : "hidden"}`}>
                        <ul>
                            {menuItems.map((item, i) => (
                                <li key={i} className="border-b border-gray-700 px-4 py-3">
                                    <NavLink
                                        to={item.link}
                                        end={item.link === "/"}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-[oklch(67%_0.17_54)]"
                                                : "text-white hover:text-[oklch(67%_0.17_54)]"
                                        }
                                    >
                                        {item.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
