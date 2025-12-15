import React, { useState, useEffect } from 'react';

// --- Menu Data Configuration ---
const menuItems = [
    {
        title: 'HOME',
        link: '/',
        submenu: [
            { title: 'Home One', link: '#' },
            { title: 'Home Two', link: '#' },
            { title: 'Home Three', link: '#' },
        ]
    },
    {
        title: 'ABOUT US',
        link: '#',
        submenu: [
            { title: 'About One', link: '#' },
            { title: 'About Two', link: '#' },
            { title: 'About Three', link: '#' }
        ]
    },
    {
        title: 'MEGA',
        link: '#',
        isMega: true,
        columns: [
            [
                { title: 'About One', link: '#' },
                { title: 'About Two', link: '#' },
                { title: 'Blog', link: '#' },
                { title: 'Blog Details', link: '#' }
            ],
            [
                { title: 'Teachers', link: '#' },
                { title: 'Teachers Without Filter', link: '#' },
                { title: 'Teachers Single', link: '#' },
                { title: 'Contact', link: '#' }
            ],
            [
                { title: 'Gallery One', link: '#' },
                { title: 'Gallery Two', link: '#' },
                { title: 'Gallery Three', link: '#' },
                { title: 'Error 404', link: '#' }
            ],
            [
                { title: 'Shop', link: '#' },
                { title: 'Shop Details', link: '#' },
                { title: 'Cart', link: '#' },
                { title: 'Checkout', link: '#' }
            ]
        ]
    },
    {
        title: 'COURSES',
        link: '#',
        submenu: [
            { title: 'Courses One', link: '#' },
            { title: 'Courses Two', link: '#' },
            { title: 'Courses Details', link: '#' },
            { title: 'Courses Details 2', link: '#' }
        ]
    },
    {
        title: 'EVENTS',
        link: '#',
        submenu: [
            { title: 'Events', link: '#' },
            { title: 'Events Details', link: '#' },
            { title: 'Contact', link: '#' }
        ]
    },
    {
        title: 'PAGES',
        link: '#',
        submenu: [
            { title: 'Teachers', link: '#' },
            { title: 'Gallery', link: '#' },
            { title: 'Shop', link: '#' },
            { title: 'Error 404', link: '#' }
        ]
    },
    {
        title: 'BLOG',
        link: '#',
        submenu: [
            { title: 'Blog', link: '#' },
            { title: 'Blog Details', link: '#' }
        ]
    },
    { title: 'CONTACT', link: '#' }
];

// --- Components ---

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Mobile: Track which submenu is expanded
    const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 180);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileSubmenu = (index) => {
        setExpandedMobileMenu(expandedMobileMenu === index ? null : index);
    };

    return (
        <div className="w-full relative z-50 font-sans">
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
          transform: translateY(0);
        }
      `}</style>

            {/* Top Toolbar */}
            <div className="bg-gray-100 py-2 border-b border-gray-200 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <i className="fa fa-bank"></i> Welcome to Edulearn
            </span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="flex space-x-4 text-gray-500">
                            <a href="#" className="hover:text-blue-600 transition"><i className="fa fa-facebook"></i></a>
                            <a href="#" className="hover:text-blue-400 transition"><i className="fa fa-twitter"></i></a>
                            <a href="#" className="hover:text-red-500 transition"><i className="fa fa-google-plus"></i></a>
                            <a href="#" className="hover:text-blue-700 transition"><i className="fa fa-linkedin"></i></a>
                        </div>
                        <a href="#" className="bg-red-600 text-white px-4 py-1 text-sm font-semibold rounded hover:bg-red-700 transition">
                            Apply Now
                        </a>
                    </div>
                </div>
            </div>

            {/* Branding Area */}
            <div className="bg-white py-6">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div className="hidden md:flex items-center gap-4">
                        <div className="text-3xl text-gray-300"><i className="flaticon-email"></i></div>
                        <div>
                            <span className="block text-gray-500 text-sm font-bold uppercase">Mail Us</span>
                            <a href="mailto:info@domain.com" className="text-gray-700 font-semibold hover:text-red-600 transition">info@domain.com</a>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="/"><img src="/images/logo.png" alt="logo" className="mx-auto h-12" /></a>
                    </div>
                    <div className="hidden md:flex items-center gap-4 justify-end">
                        <div className="text-3xl text-gray-300"><i className="flaticon-phone-call"></i></div>
                        <div className="text-right">
                            <span className="block text-gray-500 text-sm font-bold uppercase">Call Us</span>
                            <a href="tel:+1234567890" className="text-gray-700 font-semibold hover:text-red-600 transition">+1234-567-890</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className={`${isSticky ? 'h-14' : ''}`}>
                <div className={`bg-red-600 text-white shadow-md z-50 ${isSticky ? 'fixed top-0 left-0 w-full shadow-xl animate-slideDown' : 'relative'}`}>
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center h-14">

                            {/* Mobile Menu Button */}
                            <button className="md:hidden flex items-center gap-2 font-bold uppercase" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i> Menu
                            </button>

                            {/* Desktop Menu */}
                            <nav className="hidden md:block">
                                <ul className="flex flex-row space-x-8 text-sm font-bold uppercase h-full items-center">
                                    {menuItems.map((item, index) => (
                                        <li key={index} className="group relative h-full flex items-center">
                                            <a href={item.link} className="py-4 hover:text-gray-200 transition h-full flex items-center">
                                                {item.title}
                                            </a>

                                            {/* Standard Dropdown */}
                                            {item.submenu && !item.isMega && (
                                                <ul className="absolute top-full left-0 w-56 bg-[#212121] shadow-lg invisible opacity-0 transform translate-y-4 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 z-50 border-t-2 border-red-600">
                                                    {item.submenu.map((subItem, subIndex) => (
                                                        <li key={subIndex} className="border-b border-gray-700 last:border-0">
                                                            <a href={subItem.link} className="block px-4 py-3 text-gray-300 hover:text-red-500 hover:pl-6 transition-all duration-300 text-xs font-normal capitalize">
                                                                {subItem.title}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {/* Mega Dropdown */}
                                            {item.isMega && (
                                                <div className="absolute top-full left-0 w-[800px] -ml-20 bg-[#212121] shadow-lg invisible opacity-0 transform translate-y-4 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 z-50 border-t-2 border-red-600 p-6">
                                                    <div className="grid grid-cols-4 gap-6">
                                                        {item.columns.map((col, colIndex) => (
                                                            <ul key={colIndex}>
                                                                {col.map((subItem, subIndex) => (
                                                                    <li key={subIndex} className="mb-2 border-b border-gray-700 pb-2 last:border-0 last:pb-0">
                                                                        <a href={subItem.link} className="block text-gray-300 hover:text-red-500 transition-colors duration-300 text-xs font-normal capitalize">
                                                                            {subItem.title}
                                                                        </a>
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

                            {/* Search Icon */}
                            <div className="hidden md:block cursor-pointer hover:text-gray-200">
                                <i className="fa fa-search text-white text-lg"></i>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu (Slide down) */}
                    <div className={`md:hidden bg-[#212121] overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                        <ul className="flex flex-col text-sm font-bold uppercase text-white">
                            {menuItems.map((item, index) => (
                                <li key={index} className="border-b border-gray-700">
                                    <div className="flex justify-between items-center px-4 py-3">
                                        <a href={item.link} className="hover:text-red-500 transition">{item.title}</a>
                                        {(item.submenu || item.isMega) && (
                                            <button
                                                onClick={() => toggleMobileSubmenu(index)}
                                                className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded focus:outline-none"
                                            >
                                                <i className={`fa ${expandedMobileMenu === index ? 'fa-minus' : 'fa-plus'} text-xs`}></i>
                                            </button>
                                        )}
                                    </div>

                                    {/* Mobile Submenu */}
                                    <div className={`bg-[#1a1a1a] transition-all duration-300 overflow-hidden ${expandedMobileMenu === index ? 'max-h-96' : 'max-h-0'}`}>
                                        {/* Standard Submenu Mobile */}
                                        {item.submenu && !item.isMega && (
                                            <ul className="pl-6 pb-2">
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <li key={subIndex} className="py-2 border-b border-gray-800 last:border-0">
                                                        <a href={subItem.link} className="block text-gray-400 hover:text-red-500 capitalize text-xs font-normal">
                                                            {subItem.title}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Mega Submenu Mobile (Flattened) */}
                                        {item.isMega && (
                                            <ul className="pl-6 pb-2">
                                                {item.columns.flat().map((subItem, subIndex) => (
                                                    <li key={subIndex} className="py-2 border-b border-gray-800 last:border-0">
                                                        <a href={subItem.link} className="block text-gray-400 hover:text-red-500 capitalize text-xs font-normal">
                                                            {subItem.title}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
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