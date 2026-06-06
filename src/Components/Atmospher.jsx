import { motion } from "motion/react";
import { FiCamera } from "react-icons/fi";
import bazar1 from '../assets/bazar-1.jpg'
import bazar2 from '../assets/bazar-2.png'
import bazar3 from '../assets/bazar-3.png'
import bazar4 from '../assets/bazar-4.png'
import bazar5 from '../assets/bazar-5.png'
import bazar6 from '../assets/bazar-6.png'
import bazar7 from '../assets/bazar-7.png'
import bazar8 from '../assets/bazar-8.png'
import bazar9 from '../assets/bazar-9.png'

const images = [
    bazar1,
    bazar2,
    bazar3,
    bazar4,
    bazar5,
    bazar6,
    bazar7,
    bazar8,
    bazar9,
];

export default function Gallery() {
    return (
        <section
            id="reels"
            className="relative py-24 md:py-36 bg-matte-black overflow-hidden"
        >
            {/* Glow */}
            <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-walnut-brown/20 blur-[140px] rounded-full" />
            <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-olive-green/10 blur-[140px] rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 text-gold-accent mb-4">
                        <FiCamera />
                        <span className="text-[10px] uppercase tracking-[0.4em]">
                            Atmosphere Archive
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-playfair text-soft-cream">
                        Visual Story of{" "}
                        <span className="italic text-gold-accent">Bazar</span>
                    </h2>
                </div>

                {/* PINTEREST MASONRY GRID */}
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">

                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="relative break-inside-avoid overflow-hidden rounded-2xl group border border-gold-accent/10"
                        >
                            {/* Image */}
                            <img
                                src={img}
                                alt="gallery"
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-matte-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition" />

                            {/* Label */}
                            <div className="absolute bottom-3 left-3 text-[9px] tracking-[0.25em] text-gold-accent uppercase opacity-80">
                                Bazar Moments
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}

