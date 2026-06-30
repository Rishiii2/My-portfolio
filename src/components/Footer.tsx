export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-2">
        <span>© {new Date().getFullYear()} Rishikant. Built with Next.js & Tailwind.</span>
        <span>Designed and engineered from Delhi, India 🇮🇳</span>
      </div>
    </footer>
  );
}
