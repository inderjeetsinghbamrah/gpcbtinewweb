import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

/*
  Soft, education-safe, royalty-free images
  (Unsplash CDN – optimized & stable)
*/
const slides = [
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1920&auto=format&fit=crop",
];

export default function HeroBackgroundSlider() {
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            speed: 6,
        },
        [
            Autoplay({
                delay: 5500,
                stopOnInteraction: false,
            }),
        ]
    );

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <div ref={emblaRef} className="h-full">
                <div className="flex h-full">
                    {slides.map((img, index) => (
                        <div
                            key={index}
                            className="relative min-w-full h-full bg-cover
                             bg-[60%_center] sm:bg-[50%_center] md:bg-[60%_center]
                             scale-[1.05]"
                            style={{ backgroundImage: `url(${img})` }}
                        >
                            {/* BRAND WASH OVERLAY */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "oklch(67% 0.17 54 / 0.45)",
                                }}
                            />

                            {/* GLASS BLUR */}
                            <div className="absolute inset-0 backdrop-blur-sm bg-white/5" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
