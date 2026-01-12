"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Zap, Trophy, BookOpen, Sun, Moon } from "lucide-react";

export default function Home() {
  const [theme, setTheme] = useState<"teen" | "adult">("teen");

  useEffect(() => {
    // Set initial theme based on preference or default to teen (dark)
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    if (theme === "teen") {
      setTheme("adult");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("teen");
      document.documentElement.classList.add("dark");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 }
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center relative transition-colors duration-500">

      {/* Background Ambience (Teen Mode Only mainly) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--accent-glow)] blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[var(--accent-secondary)] blur-[100px] opacity-20" />
      </div>

      {/* Navbar / Header */}
      <nav className="w-full max-w-6xl px-6 py-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-[0_0_15px_var(--accent-glow)]">
            <Image src="/braingo-logo.png" alt="Braingo Logo" fill className="object-cover" />
          </div>
          <span className="text-2xl font-black tracking-tight text-[var(--text-primary)]">
            Braingo
          </span>
        </div>

        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] shadow-lg hover:scale-105 transition-transform cursor-pointer"
        >
          {theme === "teen" ? (
            <>
              <Moon size={18} className="text-[var(--accent-primary)]" />
              <span className="text-sm font-bold text-[var(--text-primary)]">Teen</span>
            </>
          ) : (
            <>
              <Sun size={18} className="text-[var(--accent-primary)]" />
              <span className="text-sm font-bold text-[var(--text-primary)]">Adult</span>
            </>
          )}
        </button>
      </nav>

      {/* Hero Section */}
      <motion.div
        className="flex-1 flex flex-col items-center justify-center text-center px-4 mt-10 z-10 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6 relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-[32px] overflow-hidden shadow-[0_0_40px_var(--accent-glow)] border-4 border-[var(--bg-card)] relative z-10">
            <Image src="/braingo-logo.png" alt="App Icon" fill className="object-cover" />
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black mb-6 leading-tight text-[var(--text-primary)]">
          Tanulj angolul <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]">
            szórakozva
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mb-10 leading-relaxed">
          Urald a ranglistát, gyűjts pontokat és versenyezz másokkal! A Braingo a legszórakoztatóbb módja a nyelvtanulásnak.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col items-center gap-6">
          <motion.a
            href="https://expo.dev/artifacts/eas/9uQQkg3TiwjnyjX5ubs9aL.apk"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-black font-extrabold text-lg shadow-[0_0_20px_var(--accent-glow)] cursor-pointer"
          >
            <Download size={24} />
            LETÖLTÉS ANDROIDRA
          </motion.a>

          {/* QR Code Section for Expo Go (iOS & Android) */}
          <div className="flex flex-col items-center gap-4 mt-6 bg-[var(--bg-card)]/50 p-6 rounded-2xl border border-[var(--border-color)] backdrop-blur-sm max-w-sm">
            <div className="flex items-center gap-2 text-[var(--accent-primary)]">
              <span className="text-2xl">📱</span>
              <p className="font-bold text-center text-[var(--text-primary)]">
                iPhone felhasználóknak
              </p>
            </div>
            <div className="bg-white p-3 rounded-xl shadow-lg">
              <Image src="/expo-qr.png" alt="Expo Go QR Code" width={180} height={180} className="rounded-lg" />
            </div>
            <div className="text-center">
              <p className="text-sm text-[var(--text-secondary)] mb-2">
                1. Töltsd le az <strong className="text-[var(--text-primary)]">Expo Go</strong> appot
              </p>
              <div className="flex gap-2 justify-center mb-3">
                <a href="https://apps.apple.com/app/expo-go/id982107779" target="_blank" className="text-xs px-3 py-1 bg-[var(--bg-secondary)] rounded-full border border-[var(--border-color)] hover:scale-105 transition-transform">
                  🍎 App Store
                </a>
                <a href="https://play.google.com/store/apps/details?id=host.exp.exponent" target="_blank" className="text-xs px-3 py-1 bg-[var(--bg-secondary)] rounded-full border border-[var(--border-color)] hover:scale-105 transition-transform">
                  🤖 Play Store
                </a>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                2. Olvasd be ezt a QR kódot az appon belül
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-6 text-sm text-[var(--text-secondary)] font-medium">
          v1.0 • Ingyenes • Reklámmentes
        </motion.div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-6 py-20 z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <FeatureCard
          icon={<Trophy size={32} className="text-[var(--accent-primary)]" />}
          title="Ranglisták"
          desc="Versenyezz a barátaiddal. Légy te a hét bajnoka!"
        />
        <FeatureCard
          icon={<Zap size={32} className="text-[var(--accent-secondary)]" />}
          title="Villámgyors Játék"
          desc="Valós idejű párbajok. Aki gyorsabb, az nyer!"
        />
        <FeatureCard
          icon={<BookOpen size={32} className="text-[var(--gradient-to)]" />}
          title="1000+ Szó"
          desc="A1-től B2 szintig. Fejleszd a szókincsedet hatékonyan."
        />
      </motion.div>

      <footer className="w-full py-8 text-center text-[var(--text-secondary)] text-sm z-10 border-t border-[var(--border-color)]">
        &copy; 2026 Braingo. Minden jog fenntartva.
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-[0_4px_20px_var(--shadow-color)] hover:transform hover:-translate-y-1 transition-all duration-300">
      <div className="mb-4 bg-[var(--bg-primary)] p-3 rounded-full w-fit">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">{title}</h3>
      <p className="text-[var(--text-secondary)] leading-relaxed">{desc}</p>
    </div>
  );
}
