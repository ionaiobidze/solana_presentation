import { Slide, VisualType } from './types';

export const SLIDES: Slide[] = [
  {
    id: 1,
    title: "Solana: Architecture & Ecosystem Analysis",
    subtitle: "A Deep Dive into Scalability, Security, and Tokenomics",
    content: [
      "Student Name: Iona Iobidze",
      "Course: Blockchain Fundamentals",
      "Date: October 2023"
    ],
    visualType: VisualType.TITLE,
    speakerNotes: "Title page introduction."
  },
  {
    id: 2,
    title: "System Structure",
    subtitle: "High-Performance Architecture",
    content: [
      "Proof of History (PoH): A cryptographic clock for time-ordering before consensus.",
      "Gulf Stream: Mempool-less transaction forwarding protocol.",
      "Sealevel: Parallel smart contract runtime (thousands of contracts at once).",
      "Cryptography: Uses Ed25519 for secure digital signatures and high-speed verification."
    ],
    visualType: VisualType.ARCHITECTURE,
    speakerNotes: "Solana achieves 65k TPS using PoH to encode time into the ledger. Gulf Stream pushes transactions to validators before the previous block is confirmed."
  },
  {
    id: 3,
    title: "Consensus & Security",
    subtitle: "Tower BFT and Defense Mechanisms",
    content: [
      "Consensus: Tower BFT (PBFT optimized for PoH). Requires 2/3rds supermajority.",
      "Attack Vector: DDoS/Spam. Solution: QUIC Protocol & Local Fee Markets.",
      "Attack Vector: Sybil/51%. Solution: High hardware costs ($3k-$5k) & massive stake requirements.",
      "Resilience: 'Firedancer' (C++) client introduces client diversity to prevent single-software failures."
    ],
    visualType: VisualType.CONSENSUS,
    speakerNotes: "Tower BFT leverages the PoH clock to reduce messaging overhead. QUIC prevents IP spam, and Local Fee Markets isolate congestion to specific apps."
  },
  {
    id: 4,
    title: "User Management & Tokenomics",
    subtitle: "Wallets, Usage, and Market Access",
    content: [
      "Wallet Management: Non-custodial (Phantom, Solflare). Keys generated locally via Ed25519.",
      "Token Utility: Gas Fees, Staking (Security), Rent (Storage), Governance.",
      "Economics: Inflation starts at 8%, drops to 1.5%. 50% of fees are BURNED.",
      "Exchanges: CEX (Binance, Coinbase) & DEX (Raydium, Jupiter) with shared order-book liquidity."
    ],
    visualType: VisualType.TOKENOMICS,
    speakerNotes: "Users manage private keys. The token model is disinflationary: inflation drops over time while burning fees reduces supply."
  },
  {
    id: 5,
    title: "Trilemma & System Roadmap",
    subtitle: "Balancing Trade-offs and Future Growth",
    content: [
      "Trilemma Position: Prioritizes SCALABILITY & SECURITY. Compromises Decentralization.",
      "Firedancer Upgrade: Aiming for 1 Million TPS and network reliability.",
      "DePIN & Mobile: Hosting Helium/Hivemapper; Launching 'Solana Seeker' Phone.",
      "AI Integration: Micro-payments execution layer for AI Agents."
    ],
    visualType: VisualType.TRILEMMA,
    speakerNotes: "Solana sacrifices ease of running a node for raw speed. Future focuses on DePIN (physical infra) and AI/Mobile integration."
  },
  {
    id: 6,
    title: "Thank You",
    subtitle: "Questions & References",
    content: [
      "Buterin, V. (2021). Why Sharding is Great.",
      "Messari. (2024). State of Solana Q4 2024.",
      "Jump Crypto. (2022). Firedancer: Improving Solana's Performance.",
      "Solana Foundation. (2024). Validator Health Report.",
      "VanEck. (2023). Solana's Opportunity in DePIN and AI."
    ],
    visualType: VisualType.THANK_YOU,
    speakerNotes: "Thank you for listening. Open for questions."
  }
];

export const FULL_CONTEXT_MATERIAL = SLIDES.map(s => 
  `Slide ${s.id}: ${s.title}\nSubtitle: ${s.subtitle || ''}\nContent:\n- ${s.content.join('\n- ')}\nSpeaker Notes: ${s.speakerNotes}`
).join('\n\n');