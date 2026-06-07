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
        useState("mezza");

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
                <div className="flex flex-wrap justify-center gap-4 mb-20">

                    {MENU_CATEGORIES.map((category) => {
                        const active = selectedCategory === category.id;

                        return (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`
          relative px-2 pb-2 uppercase text-[12px]
          tracking-[0.28em] transition-all duration-300
          cursor-pointer
          ${active
                                        ? "text-[#F5EFE6]"
                                        : "text-[#E9DCCB]/45 hover:text-[#E9DCCB]"
                                    }
        `}
                            >
                                {category.name}

                                <span
                                    className={`
            absolute left-0 -bottom-[1px] h-[1px]
            bg-[#B08B68] transition-all duration-500
            ${active ? "w-full" : "w-0"}
          `}
                                />
                            </button>
                        );
                    })}

                </div>

                {/* Cards */}
                <motion.div
                    layout
                    className="grid grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6"
                >
                    <AnimatePresence mode="wait">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.45 }}
                                whileHover={{ y: -6 }}
                                onClick={() => setSelectedItem(item)}
                                className="
    group cursor-pointer
    rounded-[30px]
    overflow-hidden
    bg-[#1E1A17]
    border border-white/[0.04]
    hover:border-[#B08B68]/20
    transition-all duration-500
  "
                            >
                                {/* IMAGE */}
                                <div className="relative overflow-hidden h-[320px]">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="
        w-full h-full object-cover
        group-hover:scale-[1.03]
        transition-transform duration-700
      "
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A17] via-black/10 to-transparent" />
                                </div>

                                {/* CONTENT */}
                                <div className="px-5 py-5">

                                    {/* NAME */}
                                    <div className="flex items-start justify-between gap-3 mb-3">

                                        <h3
                                            className="
          text-[20px]
          leading-tight
          font-serif
          text-[#F5EFE6]
          max-w-[70%]
        "
                                        >
                                            {item.name.length > 22
                                                ? item.name.slice(0, 22) + "..."
                                                : item.name}
                                        </h3>

                                        {/* PRICE */}
                                        <span
                                            className="
          text-[#B08B68]
          text-sm
          tracking-wide
          whitespace-nowrap
          mt-1
        "
                                        >
                                            {item.price}
                                        </span>

                                    </div>

                                    {/* SMALL DESCRIPTION */}
                                    <p
                                        className="
        text-[#E9DCCB]/55
        text-[13px]
        leading-relaxed
        line-clamp-2
      "
                                    >
                                        {item.description.length > 70
                                            ? item.description.slice(0, 70) + "..."
                                            : item.description}
                                    </p>

                                    {/* VIEW */}
                                    <div className="mt-5 pt-4 border-t border-white/[0.05]">

                                        <span
                                            className="
          text-[#B08B68]
          uppercase
          tracking-[0.25em]
          text-[10px]
        "
                                        >
                                            View
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
                        className="
        fixed inset-0 z-50
        bg-black/70 backdrop-blur-md
        flex items-center justify-center
        p-3 sm:p-5
      "
                    >
                        {/* OVERLAY */}
                        <div
                            className="absolute inset-0"
                            onClick={() => setSelectedItem(null)}
                        />

                        {/* MODAL */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.96,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.96,
                                y: 20,
                            }}
                            transition={{ duration: 0.3 }}
                            className="
          relative z-10
          w-full max-w-3xl
          max-h-[90vh]
          overflow-y-auto
          rounded-[28px]
          bg-[#1D1916]
          border border-white/[0.06]
        "
                        >

                            {/* CLOSE */}
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="
            absolute top-4 right-4 z-20
            w-10 h-10 rounded-full
            bg-black/40 backdrop-blur-md
            border border-white/10
            flex items-center justify-center
            text-[#F5EFE6]
            hover:text-[#B08B68]
            transition-colors
          "
                            >
                                <FiX />
                            </button>

                            {/* CONTENT */}
                            <div className="flex flex-col lg:flex-row">

                                {/* IMAGE */}
                                <div className="lg:w-[45%] relative">

                                    <img
                                        src={selectedItem.image}
                                        alt={selectedItem.name}
                                        className="
                w-full
                h-[240px] sm:h-[300px] lg:h-full
                object-cover
              "
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                                </div>

                                {/* INFO */}
                                <div
                                    className="
              lg:w-[55%]
              p-5 sm:p-7 md:p-8
              flex flex-col justify-center
            "
                                >

                                    {/* SMALL LABEL */}
                                    <span
                                        className="
                uppercase tracking-[0.25em]
                text-[#B08B68]
                text-[10px]
                mb-3
              "
                                    >
                                        Menu Selection
                                    </span>

                                    {/* TITLE */}
                                    <h3
                                        className="
                text-2xl sm:text-3xl md:text-4xl
                leading-tight
                font-serif
                text-[#F5EFE6]
                mb-4
              "
                                    >
                                        {selectedItem.name}
                                    </h3>

                                    {/* DESCRIPTION */}
                                    <p
                                        className="
                text-[#E9DCCB]/70
                leading-relaxed
                text-sm sm:text-[15px]
                mb-6
              "
                                    >
                                        {selectedItem.description}
                                    </p>

                                    {/* PRICE */}
                                    <div className="mb-7">
                                        <span
                                            className="
                  text-[#B08B68]
                  text-2xl sm:text-3xl
                  font-light
                "
                                        >
                                            {selectedItem.price}
                                        </span>
                                    </div>

                                    {/* INGREDIENTS */}
                                    {selectedItem.ingredients && (
                                        <div className="mb-8">

                                            <h4
                                                className="
                    text-[#F5EFE6]
                    uppercase
                    tracking-[0.18em]
                    text-[11px]
                    mb-4
                  "
                                            >
                                                Ingredients
                                            </h4>

                                            <div className="flex flex-wrap gap-2">

                                                {selectedItem.ingredients.map(
                                                    (ingredient, index) => (
                                                        <span
                                                            key={index}
                                                            className="
                          px-3 py-1.5
                          rounded-full
                          bg-white/[0.03]
                          border border-white/[0.05]
                          text-[#E9DCCB]/70
                          text-xs
                        "
                                                        >
                                                            {ingredient}
                                                        </span>
                                                    )
                                                )}

                                            </div>
                                        </div>
                                    )}

                                    {/* BUTTON */}
                                    <button
                                        className="
                w-full sm:w-fit
                px-7 py-3
                rounded-full
                bg-[#3F4A3F]
                hover:bg-[#4B5B4B]
                text-[#F5EFE6]
                uppercase
                tracking-[0.2em]
                text-[11px]
                transition-all duration-300
              "
                                    >
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