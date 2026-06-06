import { useState } from "react";
import {
    motion,
    AnimatePresence,
} from "motion/react";

import { FiGrid, FiX } from "react-icons/fi";

import {
    MENU_CATEGORIES,
    MENU_ITEMS,
} from "./data";

export default function Menu() {
    const [selectedCategory, setSelectedCategory] =
        useState("mains");

    const [selectedItem, setSelectedItem] =
        useState(null);

    const filteredItems = MENU_ITEMS.filter(
        (item) => item.category === selectedCategory
    );

    return (
        <section
            id="menu"
            className="relative py-24 md:py-36 overflow-hidden bg-gradient-to-b from-[#1A1715] via-[#211D1A] to-[#161311]"
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-[#3F4A3F]/20 blur-[140px] rounded-full" />

            <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-[#6B4E3D]/20 blur-[140px] rounded-full" />

            {/* Texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#B08B68_1px,transparent_1px)] [background-size:28px_28px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-5">
                        <span className="text-[#B08B68]">
                            <FiGrid />
                        </span>

                        <span className="uppercase tracking-[0.35em] text-[#B08B68] text-[11px] font-medium">
                            Signature Selection
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-serif text-[#F5EFE6] leading-tight">
                        Curated
                        <span className="italic text-[#B08B68]">
                            {" "}Menu
                        </span>
                    </h2>

                    <p className="text-[#E9DCCB]/70 text-sm md:text-base max-w-2xl mx-auto mt-6 leading-relaxed">
                        Carefully crafted dishes inspired by warm
                        hospitality and refined dining atmosphere.
                    </p>
                </motion.div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {MENU_CATEGORIES.map((category) => {
                        const active =
                            selectedCategory === category.id;

                        return (
                            <button
                                key={category.id}
                                onClick={() =>
                                    setSelectedCategory(category.id)
                                }
                                className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-300 border cursor-pointer ${active
                                        ? "bg-[#B08B68] text-[#111111] border-[#B08B68]"
                                        : "bg-white/[0.03] text-[#E9DCCB] border-white/10 hover:border-[#B08B68]/40 hover:text-white"
                                    }`}
                            >
                                {category.name}
                            </button>
                        );
                    })}
                </div>

                {/* Cards */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode="wait">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -20,
                                }}
                                transition={{
                                    duration: 0.4,
                                }}
                                whileHover={{
                                    y: -4,
                                }}
                                onClick={() => setSelectedItem(item)}
                                className="group rounded-[26px] overflow-hidden bg-white/[0.03] border border-white/5 hover:border-[#B08B68]/30 transition-all duration-500 backdrop-blur-sm cursor-pointer"
                            >
                                {/* Image */}
                                <div className="relative h-[220px] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        referrerPolicy="no-referrer"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <div>
                                            <h3 className="text-xl font-serif text-[#F5EFE6] group-hover:text-[#B08B68] transition-colors duration-300">
                                                {item.name}
                                            </h3>

                                            {item.isSignature && (
                                                <span className="inline-block mt-2 text-[9px] uppercase tracking-[0.2em] bg-[#B08B68]/15 text-[#B08B68] px-3 py-1 rounded-full border border-[#B08B68]/20">
                                                    Signature
                                                </span>
                                            )}
                                        </div>

                                        <span className="text-[#B08B68] text-base font-medium whitespace-nowrap">
                                            {item.price}
                                        </span>
                                    </div>

                                    <p className="text-[#E9DCCB]/70 leading-relaxed text-sm line-clamp-2">
                                        {item.description}
                                    </p>

                                    <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                                        <span className="text-[#B08B68]/70 text-[10px] uppercase tracking-[0.2em]">
                                            Chef Selection
                                        </span>

                                        <span className="text-sm text-[#F5EFE6] group-hover:text-[#B08B68] transition-colors">
                                            View Details
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
                    >
                        {/* Overlay */}
                        <div
                            className="absolute inset-0"
                            onClick={() =>
                                setSelectedItem(null)
                            }
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.95,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.95,
                                y: 30,
                            }}
                            transition={{
                                duration: 0.35,
                            }}
                            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[36px] bg-[#1F1B18] border border-white/10"
                        >
                            {/* Close */}
                            <button
                                onClick={() =>
                                    setSelectedItem(null)
                                }
                                className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#F5EFE6] hover:text-[#B08B68] transition-colors"
                            >
                                <FiX />
                            </button>

                            <div className="flex flex-col lg:flex-row">

                                {/* Image */}
                                <div className="lg:w-1/2 h-[320px] lg:h-auto relative">
                                    <img
                                        src={selectedItem.image}
                                        alt={selectedItem.name}
                                        className="w-full h-full object-cover"
                                        referrerPolicy="no-referrer"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="lg:w-1/2 p-8 md:p-10 flex flex-col justify-center">

                                    <span className="uppercase tracking-[0.3em] text-[#B08B68] text-[11px] mb-4">
                                        Signature Dish
                                    </span>

                                    <h3 className="text-4xl font-serif text-[#F5EFE6] mb-4">
                                        {selectedItem.name}
                                    </h3>

                                    <p className="text-[#E9DCCB]/75 leading-relaxed mb-8">
                                        {selectedItem.description}
                                    </p>

                                    {/* Price */}
                                    <div className="mb-8">
                                        <span className="text-[#B08B68] text-3xl font-medium">
                                            {selectedItem.price}
                                        </span>
                                    </div>

                                    {/* Ingredients */}
                                    <div className="mb-8">
                                        <h4 className="text-[#F5EFE6] uppercase tracking-[0.2em] text-sm mb-4">
                                            Ingredients
                                        </h4>

                                        <div className="flex flex-wrap gap-3">
                                            {selectedItem.ingredients?.map(
                                                (ingredient, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-[#E9DCCB]/80 text-sm"
                                                    >
                                                        {ingredient}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <button className="w-fit px-8 py-4 rounded-full bg-[#3F4A3F] hover:bg-[#4B5B4B] text-[#F5EFE6] uppercase tracking-[0.2em] text-sm transition-all duration-300">
                                        Reserve Table
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}