export default function BookLoader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#ff2a13]">
            <div className="relative w-[120px] h-[60px] [perspective:1000px]">

                {/* Left static page */}
                <div className="
          absolute left-0 top-0
          w-[60px] h-full
          border-[4px] border-white
          bg-[#ff2a13]
        " />

                {/* Next page (underneath, delayed) */}
                <div className="
          absolute right-[-1px] top-0
          w-[60px] h-full
          border-[4px] border-white
          bg-[#f01f0f]
          origin-left
          animate-pageFlip
          [animation-delay:1.1s]
          opacity-90
        " />

                {/* Current flipping page (top) */}
                <div className="
          absolute right-[-1px] top-0
          w-[60px] h-full
          border-[4px] border-white
          bg-[#e61f0f]
          origin-left
          animate-pageFlip
          shadow-[0_14px_30px_rgba(0,0,0,0.3)]
        " />

            </div>
        </div>
    );
}
