import React, {useEffect, useState} from "react";

import {fetchInstituteDetails} from "../../../services/instituteDetails.js";
import {useParams} from "react-router-dom";


export const Topbar = () => {

    const {id} = useParams();
    const [institute, setInstitute] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;
        fetchInstituteDetails()
            .then((data) => {
                if (mounted) {
                    setInstitute(data[0]);
                }
            })
            .catch((e) => {
                if (mounted) {
                    setError(e?.message || "Failed to load");
                }
            })
            .finally(() => {
                if (mounted) {
                    setLoading(false);
                }
            });
        return () => {
            mounted = false;
        };
    }, []);

    return (
        <>

            <div className="bg-black py-2 border-b border-gray-200 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex itb-ems-center gap-2">
                            <i className="fa fa-bank"></i>
                            {loading ?
                                <div className="h-5 w-72 bg-gray-300 rounded animate-pulse"/>
                                :<span>Welcome to {institute?.name}</span>}
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
        </>
    )
}
