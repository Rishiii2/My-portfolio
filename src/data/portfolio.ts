/* ─────────────────────────────────────────────────────────────────────────
   Single source of truth for every piece of content on the site.
   Edit here — components read from this file and never hardcode copy.
   ───────────────────────────────────────────────────────────────────────── */

export const personal = {
  name: "Rishikant",
  first: "RISHI",
  last: "KANT",
  degree: "Engineering Physics",
  school: "Delhi Technological University",
  years: "2025 – 2029",
  location: "Delhi, India",
  email: "rishi.space2@gmail.com",
  tagline:
    "Engineering Physics @ DTU. Autonomous drone swarms, reconfigurable intelligent surfaces for 5G, and reinforcement learning.",
  links: {
    github: "https://github.com/Rishiii2",
    linkedin: "https://www.linkedin.com/in/rishikant-4b5334369/",
    hashnode: "https://rishiii2.hashnode.dev",
    leetcode: "https://leetcode.com/u/itisrishii/",
    twitter: "https://x.com/it_is_rishii",
    chess: "https://www.chess.com/member/rishiiii001",
  },
};

/** Typewriter lines in the hero. `hot` renders in the accent colour. */
export const heroLines: { hot?: string; text: string }[] = [
  { text: "engineering physics @ delhi technological university" },
  { hot: "autonomous drone swarms", text: " · ros 2 · deepsort · hungarian assignment" },
  { hot: "reconfigurable intelligent surfaces", text: " for 5g · bd-ris · isac" },
  { hot: "deep + reinforcement learning", text: " · ppo · behavioural cloning" },
];

export const stats: { value: number; label: string }[] = [
  { value: 4, label: "Papers" },
  { value: 8, label: "Roles" },
  { value: 23, label: "Repos" },
  { value: 11, label: "Hackathons" },
  { value: 36, label: "Articles" },
];

/* ── RESEARCH ──────────────────────────────────────────────────────────── */

export type TeleRow = { label: string; value: string; width: number; tone: "hot" | "amber" | "grey" };

export type Paper = {
  title: string;
  status: string;
  statusTone: "prep" | "venue" | "live";
  sub: string;
  body: string[];
  chips: string[];
  hotChips?: string[];
  repo?: { label: string; href: string };
  telemetry?: { rows: TeleRow[]; caption: string; captionHot: string };
};

export const papers: Paper[] = [
  {
    title: "Intent Modelling in Large Language Models",
    status: "In preparation",
    statusTone: "prep",
    sub: "Inferring latent human intent from observed decisions",
    body: [
      "Gives a language model an explicit representation of the goal structure behind observed behaviour — reading a person's underlying intent from the decisions they actually take, rather than from the instruction they happen to state.",
      "Extends a line of three NeurIPS 2024 results on decision-grounded intent inference.",
    ],
    hotChips: ["NeurIPS lineage"],
    chips: ["LLM alignment", "Intent inference", "Decision modelling"],
  },
  {
    title: "Hybrid Autonomous Racing — Deep Learning + RL for F1 Path Planning",
    status: "In preparation",
    statusTone: "prep",
    sub: "Autonomous driving stack for Formula 1 and Formula Student Driverless",
    body: [
      "Two-stage neural policy: behavioural cloning on real F1 expert telemetry (FastF1 — Verstappen, Miami GP qualifying), then PPO reinforcement-learning fine-tuning for tyre slip-angle optimisation.",
      "Colour-blind track reconstruction via Delaunay triangulation and Voronoi dual width-gating recovers the centreline without cone-colour dependence; the minimum-curvature racing line is solved as a quadratic program in OSQP, and an upgraded Stanley controller with yaw damping and PT2 lag compensation closes the loop at 100 Hz.",
    ],
    telemetry: {
      rows: [
        { label: "HYBRID RL", value: "46.85 s", width: 100, tone: "hot" },
        { label: "F1 EXPERT REF", value: "47.30 s", width: 99, tone: "amber" },
        { label: "GEOMETRIC", value: "49.85 s", width: 94, tone: "grey" },
        { label: "DEEP LEARNING", value: "52.40 s", width: 89, tone: "grey" },
      ],
      caption: "72.9 km/h average · 1.85 g lateral · ",
      captionHot: "0% collision rate",
    },
    hotChips: ["PPO"],
    chips: ["Behavioural cloning", "Delaunay triangulation", "OSQP / QP", "Stanley control", "ROS 2 · Gazebo"],
    repo: { label: "github.com/Rishiii2/F1-PATH-PLANNING", href: "https://github.com/Rishiii2/F1-PATH-PLANNING" },
  },
  {
    title: "Reconfigurable Intelligent Surfaces for Next-Generation 5G",
    status: "Targeting IEEE WCNC / ICC 2027",
    statusTone: "venue",
    sub: "Co-authored with Prof. Kaustubh Ranjan Singh · DTU 5G Use Case Lab, Dept. of Telecommunications",
    body: [
      "A 14-page technical compendium covering beyond-diagonal RIS, multi-hop IRS, the IRS–ISAC digital twin, and RIS-SWIPT — built on cascaded channel modelling, SINR optimisation, Cramér–Rao bound analysis, and alternating optimisation solved via semidefinite relaxation and ADMM.",
    ],
    hotChips: ["BD-RIS"],
    chips: ["IRS–ISAC", "RIS-SWIPT", "Cramér–Rao bound", "SDR / ADMM", "Beamforming"],
  },
  {
    title: "Machine Learning for Human-Body Physics",
    status: "Ongoing",
    statusTone: "live",
    sub: "Physics-informed modelling of human-body dynamics in MATLAB",
    body: [
      "Integrating learned models with first-principles physical modelling of the human body. Research active.",
    ],
    chips: ["MATLAB", "Physics-informed ML", "Biomechanics"],
  },
];

/* ── EXPERIENCE ────────────────────────────────────────────────────────── */

export type Job = {
  role: string;
  flag?: string;
  when: string;
  org: string;
  bullets: string[];
  skills?: string;
};

export const jobs: Job[] = [
  {
    role: "Research Intern — 5G Lab, Dept. of Telecommunications, Govt. of India",
    when: "JUN 2026 — PRESENT",
    org: "On-site, Delhi · DTU 5G Use Case Lab",
    bullets: [
      "5G architecture, spectrum technologies, and reconfigurable intelligent surfaces under Prof. Kaustubh Ranjan Singh, alongside industry and government engineers.",
      "Co-authored a 14-page research compendium on BD-RIS, multi-hop IRS, IRS–ISAC digital twin, and RIS-SWIPT — targeting IEEE WCNC/ICC 2027.",
      "Certificate of Merit for 3rd position in the quiz competition of the two-week programme “5G and Beyond: Foundations of Next-Generation Wireless Communications”.",
    ],
    skills: "IRS/RIS · BD-RIS · ISAC · O-RAN xApp · SWIPT · NTN · OFDM · MUSIC algorithm · Beamforming",
  },
  {
    role: "Algorithm Design & Autonomous UAV Intern — DTU, ECE",
    flag: "DEFENCE",
    when: "MAY — JUL 2026",
    org: "On-site, Delhi · Advisor: Prof. Rajiv Kapoor",
    bullets: [
      "Engineered Project AeroGuard AI, a tactical drone-swarm surveillance system developed for the Indian Military — 6 distinct sub-systems.",
      "Implemented the Dynamic Window Approach for real-time UAV collision avoidance in simulated combat airspace; built the core tactical aerial combat simulator in MATLAB.",
      "Persistent multi-target tracking across the swarm's shared vision network using DeepSORT and Kalman filters; swarm logic and tactical resource allocation optimised with the Munkres (Hungarian) assignment algorithm.",
      "Delivered YOLOv8 military-vehicle detection datasets, neural drone-vision segmentation models, and a real-time UAV telemetry command dashboard.",
    ],
    skills: "MATLAB · DWA · DeepSORT · Kalman filtering · Hungarian algorithm · YOLOv8 · Sensor integration",
  },
  {
    role: "Machine Learning Engineering Intern — FlyRank AI",
    when: "JUL — AUG 2026",
    org: "Remote · 6-week selective cohort, interns across 130 countries",
    bullets: [
      "Built and optimised ML pipelines for production features at an AI-first startup automating brand visibility across classical and AI-native search engines.",
    ],
    skills: "PyTorch · Scikit-learn · Python · ML pipelines",
  },
  {
    role: "Special Projects Intern — VAJRON Global Tech",
    when: "MAY 2026 — PRESENT",
    org: "Hybrid, Noida",
    bullets: [
      "Leading a cross-functional role across AI/ML, computer vision, and autonomous mechatronics on live projects spanning autonomous systems, intelligent monitoring, and embedded electronics.",
    ],
    skills: "YOLOv8 · ROS 2 · OpenCV · Drones · Mechatronics · Embedded systems",
  },
  {
    role: "Autonomous Driving Intern — Team Defianz Racing, DTU SDC",
    when: "JUL 2026 — PRESENT",
    org: "Hybrid, Delhi",
    bullets: ["Perception, path planning, and control for DTU's Formula Student Driverless platform."],
  },
  {
    role: "Open-Source Contributor — GSSoC 2026, Open Source Track",
    when: "MAY 2026 — PRESENT",
    org: "Remote · GirlScript Summer of Code, JEC Jabalpur",
    bullets: [
      "Fixed 2 production bugs in Cognee (topoteretes/cognee), a widely adopted graph-based RAG framework.",
      "Assigned issue #3390 — time- and usage-based memory decay semantics — after publishing an analysis of why unbounded agent memory drives context bloat and hallucination.",
    ],
    skills: "Python · Git · Cognee · Graph RAG · Open-source collaboration",
  },
  {
    role: "Accelerator Programme Intern, Tech Track — SAE DTU (ForgeTrack)",
    flag: "GRADUATED",
    when: "JUN — AUG 2026",
    org: "Remote",
    bullets: [
      "Completed the full 6-week accelerator; shipped 3 projects to GitHub with sustained commit history.",
    ],
  },
  {
    role: "Leadership — Co-Head, NeuralAI DTU · Founding Board Member, Spectrum DTU",
    when: "JUL 2026 — PRESENT",
    org: "DTU · AI/ML society · 5G/6G research society",
    bullets: [
      "Co-leading DTU's artificial intelligence and machine learning society; founding board of its 5G/6G research and development society on the IRS/RIS track.",
      "Google Developer Program — completed the Agent Development Kit masterclass on agents with persistent memory and tool use. Junior Manager, Marketing — AIESEC in India.",
    ],
  },
];

/* ── PROJECTS ──────────────────────────────────────────────────────────── */

export type ProjectTag = "robotics" | "ml" | "agents" | "systems";

export type Project = {
  name: string;
  badge?: string;
  tags: ProjectTag[];
  body: string;
  stack: string[];
  href?: string;
};

export const projectFilters: { id: ProjectTag | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "robotics", label: "Robotics & Autonomy" },
  { id: "ml", label: "Applied ML" },
  { id: "agents", label: "Multi-Agent" },
  { id: "systems", label: "Systems & Web" },
];

export const projects: Project[] = [
  {
    name: "AeroGuard AI",
    badge: "DEFENCE",
    tags: ["robotics", "ml"],
    body: "Tactical drone-swarm surveillance system built at DTU for the Indian Military. Real-time collision avoidance, persistent multi-target tracking across a shared swarm vision network, and Munkres assignment for tactical resource allocation across 6 integrated sub-systems.",
    stack: ["MATLAB", "DWA", "DeepSORT", "Kalman", "Hungarian", "YOLOv8"],
  },
  {
    name: "LUNA-SITE",
    badge: "ISRO BAH 2026",
    tags: ["robotics", "ml"],
    body: "Autonomous south-polar ice detection and landing-site selection for Chandrayaan-4. Stokes-vector physics features, physics-regularised CNN with Grad-CAM and MC dropout, DFSAR CPR/DOP ice gate, NSGA-II Pareto optimiser, and a Bekker-terramechanics RRT* traverse planner.",
    stack: ["PyTorch", "NSGA-II", "RRT*", "Grad-CAM", "Streamlit"],
  },
  {
    name: "F1 Path Planning",
    badge: "SUPERHUMAN LAP",
    tags: ["robotics", "ml"],
    body: "Hybrid autonomous racing stack. Behavioural cloning on real F1 telemetry plus PPO fine-tuning, Delaunay-triangulation track reconstruction, and a minimum-curvature racing line solved in OSQP — 46.85 s against a 47.30 s expert reference at a 0% collision rate.",
    stack: ["PPO", "OSQP", "Delaunay", "ROS 2", "Gazebo"],
    href: "https://github.com/Rishiii2/F1-PATH-PLANNING",
  },
  {
    name: "Tactical Aerial Combat Simulator",
    tags: ["robotics"],
    body: "Multi-agent drone-swarm simulation with Kalman filtering, DeepSORT, Hungarian assignment, ORCA collision avoidance, visual servoing, and dual-drone YOLO hazard mapping. Ported to an 18-file ROS 2 package for Humble with ArduPilot SITL.",
    stack: ["MATLAB", "ROS 2", "ArduPilot SITL", "ORCA"],
    href: "https://github.com/Rishiii2/Tactical_Aerial_Combat_Simulator",
  },
  {
    name: "mercury — Autonomous Rover",
    badge: "ICMTC UGVC-2026",
    tags: ["robotics", "ml"],
    body: "Full autonomy stack for UGV-DTU: YOLOv8 lane and pothole detection, behavioural cloning via EfficientNet-B0, an AI costmap bridge into Nav2, and a closed-loop Gazebo Harmonic world.",
    stack: ["YOLOv8", "EfficientNet-B0", "Nav2", "Gazebo Harmonic"],
    href: "https://github.com/Rishiii2/mercury",
  },
  {
    name: "Biomass Prediction — Multimodal + LTN",
    tags: ["ml"],
    body: "Multi-modal deep learning over imagery and agronomic tabular metadata, with Logical Tensor Networks enforcing 5 biological fuzzy axioms at a satisfaction level of 0.950. Conducted under an AIMS-DTU internship.",
    stack: ["PyTorch", "Logical Tensor Networks", "EfficientNet-B0"],
  },
  {
    name: "Lore",
    badge: "COGNEE × WEMAKEDEVS",
    tags: ["agents", "systems"],
    body: "Institutional memory for engineering teams, automatically. A knowledge engine on Cognee graph memory that surfaces the reasoning behind past engineering decisions, with animated multi-hop traversal over a rendered decision graph.",
    stack: ["Cognee", "Graph RAG", "Cytoscape.js", "Python"],
  },
  {
    name: "Multi-Modal Insurance Claim Verifier",
    badge: "24 HOURS",
    tags: ["agents", "ml"],
    body: "Four-agent orchestration system — vision, NLP, risk, aggregator — verifying claims end to end, with forensic EXIF manipulation detection, Laplacian-variance blur gating, and progressive-zoom VLM triggers before model inference.",
    stack: ["PyTorch", "Multi-agent", "Vision", "NLP"],
  },
  {
    name: "LifeRPG",
    badge: "AGENTS OF SIGNOZ",
    tags: ["agents", "systems"],
    body: "An observable AI game master. Agent-driven habit system instrumented end to end with OpenTelemetry and SigNoz, so every model decision is traceable and fully debuggable rather than a black box.",
    stack: ["OpenTelemetry", "SigNoz", "LLM agents", "Python"],
  },
  {
    name: "Operation MINT",
    badge: "OPERATION CIPHER",
    tags: ["agents", "ml"],
    body: "Money Heist-themed five-agent drug-discovery pipeline: a PyTorch MLP toxicity classifier over RDKit Morgan fingerprints on the Stanford ClinTox dataset, plus protein–protein interaction network analysis.",
    stack: ["PyTorch", "RDKit", "BioGRID", "STRING"],
  },
  {
    name: "FIFA Nexus",
    badge: "PROMPTWARS",
    tags: ["agents"],
    body: "Multi-agent generative-AI platform moving large-scale stadium operations from reactive to proactive operational intelligence. Built for Google for Developers × Hack2Skill.",
    stack: ["Multi-agent GenAI", "Python"],
  },
  {
    name: "KarigarConnect",
    badge: "TOP 10 / 1,000+",
    tags: ["agents", "systems"],
    body: "AI-powered creator–brand matchmaking platform connecting rural artisans to the creator economy: creator discovery, campaign forecasting, outreach automation, and revenue optimisation.",
    stack: ["AI matchmaking", "Forecasting", "Full-stack"],
  },
  {
    name: "Real-Time UAV Telemetry & Command",
    tags: ["robotics", "systems"],
    body: "Live UAV telemetry and command interface streaming vehicle state and control over WebSocket and MAVLink.",
    stack: ["JavaScript", "WebSocket", "MAVLink"],
    href: "https://github.com/Rishiii2/Real-time_UAV_Telemetry_Command",
  },
  {
    name: "Autonomous ROS 2 Waypoint Navigator",
    tags: ["robotics"],
    body: "Autonomous robot in ROS 2 and Gazebo performing waypoint navigation with full Nav2 stack integration. Paired with a separate ROS 2 Jazzy drone-swarm simulation package for Ubuntu 24.",
    stack: ["ROS 2 Jazzy", "Nav2", "Gazebo", "ArduPilot"],
    href: "https://github.com/Rishiii2/Autonomous_ROS2_Waypoint_Navigator",
  },
  {
    name: "Enterprise Campus Operating System",
    tags: ["systems"],
    body: "Full-stack platform consolidating university events, clubs, and services into a single marketplace and calendar.",
    stack: ["JavaScript", "Node.js", "Full-stack"],
    href: "https://github.com/Rishiii2/Enterprise_Campus_Operating_System",
  },
  {
    name: "Space to Earth Matrix",
    badge: "FOSSEE · IIT BOMBAY",
    tags: ["ml", "systems"],
    body: "AI-driven siting for renewable-energy infrastructure across India, built for the IIT Bombay FOSSEE Mapathon.",
    stack: ["Geospatial AI", "Python"],
  },
];

/* ── HACKATHONS ────────────────────────────────────────────────────────── */

export type Hackathon = { name: string; win?: string; detail: string; when: string };

export const hackathons: Hackathon[] = [
  {
    name: "Bharatiya Antariksh Hackathon 2026 — ISRO",
    detail: "National level · Team LUNA-SITE · PS 8: autonomous lunar ice detection for Chandrayaan-4",
    when: "JUN 2026",
  },
  {
    name: "Hackfluence 2026",
    win: "— Top 10 of 1,000+ teams, 4,000+ participants",
    detail: "Team House Targaryen · KarigarConnect, AI creator–brand matchmaking for rural artisan commerce",
    when: "JUN 2026",
  },
  {
    name: "Emerging Technologies Hackathon 2026 — TCOE India",
    detail: "National level, competed solo · Dept. of Telecommunications, Ministry of Communications",
    when: "JUL 2026",
  },
  {
    name: "Agents of SigNoz — SigNoz × WeMakeDevs",
    detail: "LifeRPG, an observable AI game master instrumented with OpenTelemetry · $20K prize pool",
    when: "JUL 2026",
  },
  {
    name: "PromptWars — Google for Developers × Hack2Skill",
    detail: "FIFA Nexus, multi-agent generative AI for stadium operations",
    when: "JUL 2026",
  },
  {
    name: "The Hangover Part II — WeMakeDevs × Cognee",
    detail: "Team Tarot Club · Built Lore and fixed 2 bugs in the Cognee open-source repository during the event",
    when: "JUN 2026",
  },
  {
    name: "Operation Cipher 2026: The Innovation Heist — TechZen × Unstop",
    detail: "National level · Operation MINT, a five-agent AI drug-discovery pipeline",
    when: "JUN 2026",
  },
  {
    name: "HackerRank Orchestrate — 24-hour hackathon",
    detail: "Multi-modal insurance-claim verification agent, architected and deployed within 24 hours",
    when: "JUN 2026",
  },
  {
    name: "IIT Bombay FOSSEE Mapathon",
    detail: "Space to Earth Matrix — AI-driven renewable-energy siting across India",
    when: "2026",
  },
  {
    name: "HackerRank Code Autopsy",
    detail: "Competitive debugging · Systematic root-cause analysis under time pressure",
    when: "JUN 2026",
  },
  {
    name: "INDIA RUNS — Data & AI Challenge + Ideathon",
    detail: "Team Type-2 · Dual-track participation",
    when: "JUN 2026",
  },
];

/* ── STACK ─────────────────────────────────────────────────────────────── */

export type SkillGroup = { category: string; hot?: string; items: string[] };

export const skills: SkillGroup[] = [
  { category: "Languages", hot: "Python", items: ["C++", "MATLAB", "JavaScript", "TypeScript", "Bash", "LaTeX"] },
  {
    category: "AI / Machine Learning",
    hot: "PyTorch",
    items: ["TensorFlow", "Scikit-learn", "PPO", "Behavioural cloning", "YOLOv8", "EfficientNet-B0", "OpenCV", "RDKit", "Hugging Face", "Logical Tensor Networks", "Graph RAG"],
  },
  {
    category: "Robotics & Autonomy",
    hot: "ROS 2 (Humble / Jazzy)",
    items: ["Gazebo Harmonic", "ArduPilot SITL", "Nav2", "URDF / Xacro", "RViz", "ORCA", "DWA", "DeepSORT", "Kalman filtering", "MAVLink"],
  },
  {
    category: "Wireless & 5G",
    hot: "IRS / RIS",
    items: ["BD-RIS", "STAR-RIS", "ISAC", "O-RAN xApp", "SWIPT", "NTN", "OFDM", "MUSIC algorithm", "Beamforming", "Cascaded channel modelling"],
  },
  {
    category: "Numerical & Optimisation",
    items: ["Quadratic programming (OSQP)", "NSGA-II", "RRT*", "Semidefinite relaxation", "ADMM", "Delaunay triangulation", "SciPy"],
  },
  {
    category: "MLOps, Cloud & Hardware",
    items: ["Microsoft Azure", "Docker", "Git", "Weights & Biases", "SigNoz / OpenTelemetry", "Streamlit", "Linux", "NVIDIA Jetson Nano", "ESP32", "Raspberry Pi", "KiCad"],
  },
];

export type Certification = { name: string; issuer: string };

export const certifications: Certification[] = [
  { name: "Machine Learning Specialization", issuer: "Stanford Online & DeepLearning.AI · Andrew Ng" },
  { name: "Deep Learning Specialization", issuer: "DeepLearning.AI · 5 courses" },
  { name: "AI Fluency: Framework & Foundations", issuer: "Anthropic Academy · all 20 modules" },
  { name: "Azure Administrator", issuer: "Microsoft Certified" },
  { name: "Agentic AI Business Solutions", issuer: "Microsoft Certified" },
  { name: "Getting Started with AI on Jetson Nano", issuer: "NVIDIA Deep Learning Institute" },
  { name: "Google AI Essentials Specialization", issuer: "Google · 5 courses" },
  { name: "Google Prompting Essentials", issuer: "Google" },
  { name: "Intermediate Machine Learning", issuer: "Kaggle" },
  { name: "Certificate of Merit — 5G and Beyond", issuer: "DoT 5G Use Case Lab, DTU · 3rd, quiz" },
  { name: "Electronic Circuit Design, Fabrication & Testing", issuer: "DTU, ECE Department · rated Excellent" },
  { name: "Certificate of Excellence — Student Ambassador", issuer: "1stop.ai × Kshitij, IIT Kharagpur" },
  { name: "Orchestrate: AI Agent Architecture", issuer: "HackerRank" },
];

export const totalCertifications = 29;

/* ── WRITING ───────────────────────────────────────────────────────────── */

export type Post = { title: string; meta: string };

export const posts: Post[] = [
  { title: "Building LifeRPG: The Observable AI Game Master with SigNoz and OpenTelemetry", meta: "JUL 25 · 9 MIN" },
  { title: "Space to Earth Matrix: Revolutionizing Renewable Energy Placement with AI", meta: "JUL 14 · 5 MIN" },
  { title: "From Pixels to Topology: The Evolution of Autonomous Drone Vision", meta: "JUL 08 · 4 MIN" },
  { title: "The NGT-SSM Architecture: Shattering the Pixel Paradigm", meta: "JUL 08 · 5 MIN" },
  { title: "Beyond Pixels: Simulating Physical Reality at the Edge", meta: "JUL 08 · 5 MIN" },
  { title: "AeroGuard AI: Transcending Convolutional Architectures in Drone Surveillance", meta: "JUL 08 · 6 MIN" },
  { title: "Building FIFA Nexus: An Autonomous Multi-Agent AI System for Stadium Operations", meta: "JUL 06 · 4 MIN" },
  { title: "Intelligent Reflecting Surfaces: Scaling Massive MIMO with True Physics Simulation", meta: "JUL 06 · 5 MIN" },
  { title: "Revolutionizing 5G Networks with RIS and Deep Reinforcement Learning", meta: "JUL 03 · 8 MIN" },
];

export const totalPosts = 36;

/* ── EDUCATION & INTERESTS ─────────────────────────────────────────────── */

export type Education = { what: string; when: string; note?: string };

export const education: Education[] = [
  {
    what: "B.Tech, Engineering Physics — Delhi Technological University",
    when: "2025 – 2029",
    note: "Delhi, India · Formerly Delhi College of Engineering",
  },
  { what: "Class XII, Mathematics & Biology — LBS Kota", when: "2024" },
  { what: "Class X — Podar International School", when: "2022", note: "Benstalk Olympiad State-Level Topper" },
];

export const interests: string[] = [
  "Guitar and flute, self-taught",
  "Competitive chess",
  "Coffee painting and sketching",
  "Philosophy and science fiction",
];
