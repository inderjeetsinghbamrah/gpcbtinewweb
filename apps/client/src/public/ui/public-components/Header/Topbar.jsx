import React, { memo } from "react";
import DataLoader from "@/components/ui/DataLoader.jsx";

export const Topbar = memo(({ instituteQuery }) => {
    const { data: institute, isLoading, isError } = instituteQuery;

    if (isError) return null;

    return (
        <>
            {/* SECONDARY BAR */}
            <div className="bg-black py-2 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm text-gray-400">

          <span>
            {isLoading ? (
                <DataLoader/>
            ) : (
                <>Welcome to {institute?.name}</>
            )}
          </span>

                    <div className="flex items-center gap-4">
                        {!isLoading && (
                            <>
                                <SocialLink href={institute?.facebookLink} icon="facebook" />
                                <SocialLink href={institute?.twitterLink} icon="twitter" />
                                <SocialLink href={institute?.youtubeLink} icon="youtube" />
                            </>
                        )}

                        <a className="bg-red-600 text-white px-4 py-1 rounded text-xs font-semibold hover:bg-red-700 transition">
                            Apply Now
                        </a>
                    </div>
                </div>
            </div>

            {/* MAIN BAR */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between min-h-[6rem] md:min-h-[8rem]">

                        {/* LEFT */}
                        <div className="flex items-center gap-4">
                            <img
                                src={
                                    institute?.logo
                                        ? `/api/${institute.logo}`
                                        : "/logo-placeholder.png"
                                }
                                alt={`${institute?.name || "Institute"} logo`}
                                loading="lazy"
                                className="h-20 w-20 md:h-28 md:w-28 object-contain"
                            />

                            <div>
                                <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold text-gray-800">
                                    {isLoading ? <DataLoader/> : institute?.name}
                                </h1>

                                {!isLoading && (
                                    <p className="text-xs md:text-sm text-gray-600">
                    <span className="md:hidden">
                      {institute?.city}, {institute?.state?.name}
                    </span>

                                        <span className="hidden md:inline">
                      {institute?.addressLine1}
                                            {institute?.addressLine2 && `, ${institute.addressLine2}`}
                                            <br />
                                            {institute?.city}, {institute?.district?.name},{" "}
                                            {institute?.state?.name} {institute?.pincode}
                    </span>
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* RIGHT */}
                        {!isLoading && (
                            <>
                                <div className="flex flex-col md:hidden gap-2">
                                    <ActionLink
                                        href={`tel:${institute?.contact}`}
                                        icon="phone"
                                        label="Call"
                                    />
                                    <ActionLink
                                        href={`mailto:${institute?.emailID}`}
                                        icon="envelope"
                                        label="Email"
                                    />
                                </div>

                                <div className="hidden md:flex flex-col items-end text-gray-600 space-y-1">
                                    <InfoRow icon="envelope">
                                        <a href={`mailto:${institute?.emailID}`}>
                                            {institute?.emailID}
                                        </a>
                                    </InfoRow>
                                    <InfoRow icon="phone">{institute?.contact}</InfoRow>
                                    <InfoRow icon="star" className="text-xs text-gray-500">
                                        Estd. {institute?.yearOfEstb || "—"}
                                    </InfoRow>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
});

/* ----------------- Helpers ----------------- */

const SocialLink = ({ href, icon }) =>
    href ? (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={icon}
            className="hover:opacity-80"
        >
            <i className={`fa-brands fa-${icon}`} />
        </a>
    ) : null;

const ActionLink = ({ href, icon, label }) => (
    <a href={href} className="flex items-center gap-2 px-3 py-1.5 text-xs">
        <i className={`fa fa-${icon} text-red-600`} />
        {label}
    </a>
);

const InfoRow = ({ icon, children, className = "" }) => (
    <div className={`flex items-center gap-2 ${className}`}>
        <i className={`fa fa-${icon} text-red-600`} />
        <span>{children}</span>
    </div>
);
