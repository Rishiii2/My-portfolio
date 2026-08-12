import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishikant — Autonomous Systems · RIS · Deep RL",
  description:
    "Rishikant — Engineering Physics at Delhi Technological University. Autonomous drone swarms, reconfigurable intelligent surfaces for 5G, and reinforcement learning. Four research papers in progress.",
  keywords: [
    "Rishikant",
    "DTU",
    "Delhi Technological University",
    "Engineering Physics",
    "ROS 2",
    "Drone swarm",
    "Autonomous systems",
    "IRS RIS",
    "BD-RIS",
    "5G",
    "Reinforcement learning",
    "PPO",
    "PyTorch",
    "NeurIPS",
    "ISRO",
  ],
  authors: [{ name: "Rishikant", url: "https://github.com/Rishiii2" }],
  openGraph: {
    title: "Rishikant — Autonomous Systems · RIS · Deep RL",
    description:
      "Engineering Physics @ DTU. Drone swarms, RIS/5G research, reinforcement learning. Four papers in progress.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@it_is_rishii",
    title: "Rishikant — Autonomous Systems · RIS · Deep RL",
    description:
      "Engineering Physics @ DTU. Drone swarms, RIS/5G research, reinforcement learning. Four papers in progress.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05070A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
