import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ReelsSection() {
    const scrollRef = useRef(null);
    const reels = [
        'https://www.instagram.com/reel/DY6kacWsztK/',
        'https://www.instagram.com/reel/DYgeul5M8DC/',
        'https://www.instagram.com/reel/DYJNmV1oRNC/',
        'https://www.instagram.com/reel/DWqQ4Doo0Pj/',
    ];

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;

        document.body.appendChild(script);

        script.onload = () => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        };
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const amount = 420;

            scrollRef.current.scrollBy({
                left: direction === "left" ? -amount : amount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="relative py-28 bg-black overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-pink-500/10 blur-[180px]" />

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-14">

                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="uppercase tracking-[0.35em] text-zinc-500 mb-3 text-sm">
                            Social Content
                        </p>

                        <h2 className="text-5xl md:text-6xl font-bold text-white">
                            Reels
                        </h2>
                    </motion.div>

                    {/* Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={() => scroll("left")}
                            className="
                w-14 h-14
                rounded-full
                border border-white/10
                bg-white/5
                hover:bg-white/10
                transition
                flex items-center justify-center
                text-white
              "
                        >
                            <ChevronLeft />
                        </button>

                        <button
                            onClick={() => scroll("right")}
                            className="
                w-14 h-14
                rounded-full
                border border-white/10
                bg-white/5
                hover:bg-white/10
                transition
                flex items-center justify-center
                text-white
              "
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>

                {/* Scroll Container */}
                <div
                    ref={scrollRef}
                    className="
                    scrolling 
                    overflow-x-auto
            flex gap-8
            overflow-x-auto
            scroll-smooth
            scrollbar-hide
            pb-4
          "
                >
                    {reels.map((reel, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.12,
                            }}
                            whileHover={{
                                y: -10,
                            }}
                            className="
                relative
                min-w-[340px]
                max-w-[340px]
          
                overflow-hidden
                bg-zinc-900
                border border-white/10
                shadow-[0_0_50px_rgba(255,255,255,0.03)]
                backdrop-blur-xl
                group
              "
                        >

                            {/* Glow */}
                            <div
                                className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-tr
                  from-pink-500/10
                  via-purple-500/10
                  to-cyan-500/10
                  pointer-events-none
                "
                            />

                            {/* Instagram Reel */}
                            <div className="relative z-10 p-2">
                                <blockquote
                                    className="instagram-media"
                                    data-instgrm-permalink={reel}
                                    data-instgrm-version="14"
                                    style={{
                                        width: "100%",
                                        minWidth: "100%",
                                        margin: 0,
                                        borderRadius: "24px",
                                        overflow: "hidden",
                                        background: "black",
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

