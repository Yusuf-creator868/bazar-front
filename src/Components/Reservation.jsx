import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FiCalendar,
  FiClock,
  FiUsers,
  FiMail,
  FiPhone,
  FiCompass,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";

export default function Reservation() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guestCount: 2,
    specialRequests: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "guestCount" ? parseInt(value) || 2 : value,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setBookingConfirmed(true);
      setShowPopup(false);

      const randNum = Math.floor(1000 + Math.random() * 9000);
      setGeneratedCode(`BAZAR-${randNum}`);
    }, 1200);
  };

  return (
    <section
      id="reservation"
      className="relative py-24 md:py-36 bg-matte-black overflow-hidden"
    >
      {/* Background glow (kept style) */}
      <div className="absolute top-[30%] left-[-10%] w-[40vw] h-[40vw] bg-walnut-brown/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[35vw] h-[35vw] bg-olive-green/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-2 text-gold-accent mb-4">
            <FiCompass />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-sans font-semibold">
              Reservation
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-playfair text-soft-cream leading-tight">
            Secure Your{" "}
            <span className="italic text-gold-accent font-serif">
              Gastronomic Presence
            </span>
          </h2>
        </div>

        {/* FORM CARD (kept luxury glass style) */}
        <div className="bg-[#6B4E3D]/10 backdrop-blur-md border border-[#6B4E3D]/30 rounded-3xl p-6 md:p-10 space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <input
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="p-4 bg-[#151515] border border-gold-accent/15 rounded-xl text-soft-cream text-xs focus:border-gold-accent outline-none"
            />

            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="p-4 bg-[#151515] border border-gold-accent/15 rounded-xl text-soft-cream text-xs"
            />

            <input
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="p-4 bg-[#151515] border border-gold-accent/15 rounded-xl text-soft-cream text-xs"
            />

            <select
              name="guestCount"
              value={formData.guestCount}
              onChange={handleInputChange}
              className="p-4 bg-[#151515] border border-gold-accent/15 rounded-xl text-soft-cream text-xs"
            >
              <option value={1}>1 Guest</option>
              <option value={2}>2 Guests</option>
              <option value={3}>3 Guests</option>
              <option value={4}>4 Guests</option>
              <option value={6}>6 Guests</option>
              <option value={8}>8 Guests</option>
            </select>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="p-4 bg-[#151515] border border-gold-accent/15 rounded-xl text-soft-cream text-xs"
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="p-4 bg-[#151515] border border-gold-accent/15 rounded-xl text-soft-cream text-xs"
            />
          </div>

          <textarea
            name="specialRequests"
            placeholder="Special requests..."
            value={formData.specialRequests}
            onChange={handleInputChange}
            className="w-full p-4 bg-[#151515] border border-gold-accent/15 rounded-xl text-soft-cream text-xs resize-none"
            rows={3}
          />

          {/* OPEN POPUP BUTTON */}
          <button
            type="button"
            onClick={() => setShowPopup(true)}
            className="w-full py-4 bg-olive-green text-luxury-beige text-xs uppercase tracking-[0.25em] rounded-full hover:bg-gold-accent hover:text-black transition-all"
          >
            Request Reservation
          </button>
        </div>
      </div>

      {/* POPUP CONFIRMATION */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0"
              onClick={() => setShowPopup(false)}
            />

            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-matte-black border border-gold-accent/20 rounded-3xl p-6"
            >
              <h3 className="text-xl font-serif text-soft-cream mb-4">
                Confirm Reservation
              </h3>

              <div className="space-y-2 text-sm text-luxury-beige/70">
                <p><b>Name:</b> {formData.fullName}</p>
                <p><b>Phone:</b> {formData.phone}</p>
                <p><b>Date:</b> {formData.date}</p>
                <p><b>Time:</b> {formData.time}</p>
                <p><b>Guests:</b> {formData.guestCount}</p>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowPopup(false)}
                  className="flex-1 py-3 rounded-xl border border-gold-accent/20 text-soft-cream"
                >
                  Edit
                </button>

                <button
                  onClick={handleSubmit}
                  className="flex-1 py-3 rounded-xl bg-gold-accent text-black font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Confirm"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SUCCESS */}
      <AnimatePresence>
        {bookingConfirmed && (
          <motion.div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6">
            <div className="text-center">
              <FiCheckCircle className="text-5xl text-gold-accent mx-auto mb-4" />

              <h3 className="text-3xl font-serif text-soft-cream">
                Reservation Confirmed
              </h3>

              <p className="text-luxury-beige/70 mt-2">
                {generatedCode}
              </p>

              <button
                onClick={() => {
                  setBookingConfirmed(false);
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    date: "",
                    time: "",
                    guestCount: 2,
                    specialRequests: "",
                  });
                }}
                className="mt-6 px-6 py-3 bg-olive-green rounded-full text-xs uppercase tracking-widest"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}