import React, { useEffect, useState } from "react";
import { fetchInstituteDetails } from "../../../services/instituteDetails.js";

export const Topbar = () => {
    const [institute, setInstitute] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        fetchInstituteDetails()
            .then(

                (res) =>  setInstitute(res))
            .finally(() => mounted && setLoading(false));

        return () => (mounted = false);
    }, []);

    return (
        <>
            {/* OPTIONAL SECOND BAR (WELCOME + SOCIAL + CTA) */}
            <div className="bg-black py-2 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm text-gray-400">

          <span>
            {loading ? (
                <div className="h-4 w-48 bg-gray-600 rounded animate-pulse" />
            ) : (
                <>Welcome to {institute?.name}</>
            )}
          </span>

                    <div className="flex items-center gap-4">
                        {!loading && (
                            <>
                                <a href={institute?.facebookLink} className="hover:text-blue-600">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a href={institute?.twitterLink} className="hover:text-blue-400">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href={institute?.youtubeLink} className="hover:text-red-500">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                            </>
                        )}

                        <a
                            href="#"
                            className="bg-red-600 text-white px-4 py-1 rounded text-xs font-semibold hover:bg-red-700 transition"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            </div>
            {/* TOP CONTACT BAR */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between min-h-[6rem] md:min-h-[8rem]">

                        {/* LEFT */}
                        {/* MOBILE CONTACT ACTIONS */}


                        <div className="flex items-center gap-4 md:gap-3">
                            <img
                                src={`/api/${institute?.logo}`}
                                alt="logo"
                                className="h-20 w-20 md:h-28 md:w-28 object-contain"
                            />

                            <div>
                                <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold text-gray-800">
                                    {institute?.name}
                                </h1>
                                <p className="text-xs md:text-sm text-gray-600">
                                    <span className="md:hidden">
                                        {institute?.city}, {institute?.state?.name}
                                    </span>

                                    <span className="hidden md:inline">
                                        {institute?.addressLine1}
                                        {institute?.addressLine2 && `, ${institute?.addressLine2}`}
                                        <br />
                                        {institute?.city}, {institute?.district?.name} {institute?.state?.name} {institute?.pincode}
                                    </span>
                                </p>

                            </div>
                        </div>

                        {/* RIGHT */}

                        <div className="flex flex-col md:hidden gap-2 mt-2">
                            <a
                                href={`tel:${institute?.contact}`}
                                className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-700"
                            >
                                <i className="fa fa-phone text-red-600"></i>
                                Call
                            </a>

                            <a
                                href={`mailto:${institute?.emailID}`}
                                className="flex items-center gap-2 px-3 py-1.5  text-xs text-gray-700"
                            >
                                <i className="fa fa-envelope text-red-600"></i>
                                Email
                            </a>
                        </div>
                        <div className="hidden md:flex flex-col items-end text-gray-600 space-y-1 text-md">
                            <div className="flex items-center gap-2">
                                <i className="fa fa-envelope text-red-600"></i>
                                <span><a href={institute?.emailID} target="_blank">{institute?.emailID}</a> </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="fa fa-phone text-red-600"></i>
                                <span>{institute?.contact}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <i className="fa fa-star text-yellow-500"></i>
                                <span>Estd. 1992</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>





        </>
    );
};
