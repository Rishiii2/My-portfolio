import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishikant — Engineering Physics @ DTU · Robotics · 5G · Deep Learning",
  description:
    "Portfolio of Rishikant — B.Tech Engineering Physics at DTU. Building autonomous systems with ROS2, 5G IRS/RIS research targeting IEEE WCNC/ICC 2027, and multi-agent AI. ISRO BAH 2026 participant.",
  keywords: [
    "Rishikant", "DTU", "Engineering Physics", "ROS2", "Robotics", "5G", "IRS RIS",
    "Deep Learning", "PyTorch", "Autonomous Systems", "ISRO", "Delhi Technological University",
  ],
  authors: [{ name: "Rishikant", url: "https://github.com/Rishiii2" }],
  openGraph: {
    title: "Rishikant — Robotics · 5G Research · Deep Learning",
    description: "B.Tech @ DTU building autonomous systems, IRS/RIS 5G research, and multi-agent AI.",
    type: "website",
    url: "https://rishiii2.github.io/My-portfolio",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@it_is_rishii",
    title: "Rishikant — Robotics · 5G Research · Deep Learning",
    description: "B.Tech @ DTU building autonomous systems, IRS/RIS 5G research, and multi-agent AI.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-space text-white antialiased">
        {children}
      </body>
    </html>
  );
}
