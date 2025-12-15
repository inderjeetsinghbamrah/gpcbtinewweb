import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400">
            {/* Top Footer Widgets */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* About Widget */}
                    <div>
                        <img src="/images/logo-footer.png" alt="Footer Logo" className="mb-6 max-h-12" />
                        <p className="text-sm leading-relaxed mb-4">
                            We create Premium Html Themes for more than three years. Our team goal is to reunite the elegance of unique.
                        </p>
                    </div>

                    {/* Recent Posts */}
                    <div>
                        <h5 className="text-white text-lg font-bold mb-6 border-l-4 border-red-600 pl-3">RECENT POSTS</h5>
                        <div className="flex gap-4 mb-4">
                            <div className="bg-white text-black p-2 text-center rounded w-16 h-16 flex-shrink-0 flex flex-col justify-center">
                                <span className="font-bold text-lg leading-none">28</span>
                                <span className="text-xs uppercase">June</span>
                            </div>
                            <div>
                                <h6 className="text-white hover:text-red-600 cursor-pointer font-semibold transition">
                                    While the lovely valley team work
                                </h6>
                                <span className="text-xs italic">Keyword Analysis</span>
                            </div>
                        </div>
                    </div>

                    {/* Sitemap */}
                    <div>
                        <h5 className="text-white text-lg font-bold mb-6 border-l-4 border-red-600 pl-3">OUR SITEMAP</h5>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            <li><a href="#" className="hover:text-red-600 transition">Home</a></li>
                            <li><a href="#" className="hover:text-red-600 transition">About</a></li>
                            <li><a href="#" className="hover:text-red-600 transition">Courses</a></li>
                            <li><a href="#" className="hover:text-red-600 transition">Events</a></li>
                            <li><a href="#" className="hover:text-red-600 transition">Blog</a></li>
                            <li><a href="#" className="hover:text-red-600 transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h5 className="text-white text-lg font-bold mb-6 border-l-4 border-red-600 pl-3">NEWSLETTER</h5>
                        <p className="text-sm mb-4">Sign Up to Our Newsletter to Get Latest Updates & Services</p>
                        <form className="flex">
                            <input type="email" placeholder="Enter Your Email" className="w-full px-4 py-2 rounded-l text-black focus:outline-none" />
                            <button className="bg-red-600 text-white px-4 py-2 rounded-r hover:bg-red-700 transition">
                                <i className="fa fa-arrow-right"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-black py-4">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm">© 2024 <a href="#" className="text-white hover:text-red-600">RSTheme</a>. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;