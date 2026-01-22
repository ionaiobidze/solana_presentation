import React from 'react';
import { Slide, VisualType } from '../types';
import { 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Zap, 
  Database, 
  Server, 
  TrendingUp,
  Layers,
  MessageCircleQuestion,
  Lock,
  Wallet,
  Coins
} from 'lucide-react';

interface SlideVisualsProps {
  slide: Slide;
}

export const SlideVisuals: React.FC<SlideVisualsProps> = ({ slide }) => {
  
  // Slide 1: Title Slide with abstract tech ring
  if (slide.visualType === VisualType.TITLE) {
    return (
      <div className="relative flex flex-col items-center justify-center h-full w-full">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-solana-purple/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-solana-green/10 rounded-full blur-[80px] animate-pulse delay-75"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
             <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
                {/* Rotating Rings */}
                <div className="absolute inset-0 border-2 border-solana-purple/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-4 border border-solana-green/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                
                <img 
                    src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png" 
                    alt="Solana"
                    className="w-24 h-auto object-contain invert drop-shadow-[0_0_25px_rgba(20,241,149,0.4)]"
                />
             </div>
             
             <div className="flex flex-col items-center space-y-3">
                 <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
                 <span className="text-xs font-mono text-solana-green tracking-[0.4em] uppercase opacity-80 shadow-green-400">
                   Blockchain Architecture
                 </span>
                 <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
             </div>
        </div>
      </div>
    );
  }

  // Slide 2: Architecture (Sealevel / Parallel Processing)
  if (slide.visualType === VisualType.ARCHITECTURE) {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
         <h3 className="absolute top-8 text-sm font-mono text-gray-400 uppercase tracking-widest">Sealevel Parallel Runtime</h3>
         
         <div className="relative w-full max-w-md h-64 flex flex-col justify-between py-4">
             {/* Lane 1 */}
             <div className="relative w-full h-12 border-b border-gray-700/50 flex items-center overflow-hidden">
                 <span className="absolute left-0 text-[10px] font-mono text-solana-purple w-16">Thread A</span>
                 <div className="absolute left-20 right-0 h-full flex items-center gap-4">
                     <div className="w-16 h-6 bg-solana-purple/20 border border-solana-purple/50 rounded flex items-center justify-center text-[10px] animate-[slideRight_3s_linear_infinite]">Txn 1</div>
                     <div className="w-16 h-6 bg-solana-purple/20 border border-solana-purple/50 rounded flex items-center justify-center text-[10px] animate-[slideRight_3s_linear_infinite_0.5s]">Txn 2</div>
                     <div className="w-16 h-6 bg-solana-purple/20 border border-solana-purple/50 rounded flex items-center justify-center text-[10px] animate-[slideRight_3s_linear_infinite_1.5s]">Txn 3</div>
                 </div>
             </div>

             {/* Lane 2 */}
             <div className="relative w-full h-12 border-b border-gray-700/50 flex items-center overflow-hidden">
                 <span className="absolute left-0 text-[10px] font-mono text-solana-green w-16">Thread B</span>
                 <div className="absolute left-20 right-0 h-full flex items-center gap-4">
                     <div className="w-20 h-6 bg-solana-green/20 border border-solana-green/50 rounded flex items-center justify-center text-[10px] animate-[slideRight_4s_linear_infinite_0.2s]">Smart Contract</div>
                     <div className="w-16 h-6 bg-solana-green/20 border border-solana-green/50 rounded flex items-center justify-center text-[10px] animate-[slideRight_4s_linear_infinite_1.8s]">State</div>
                 </div>
             </div>

             {/* Lane 3 */}
             <div className="relative w-full h-12 border-b border-gray-700/50 flex items-center overflow-hidden">
                 <span className="absolute left-0 text-[10px] font-mono text-blue-400 w-16">Thread C</span>
                 <div className="absolute left-20 right-0 h-full flex items-center gap-4">
                     <div className="w-12 h-6 bg-blue-500/20 border border-blue-500/50 rounded flex items-center justify-center text-[10px] animate-[slideRight_2.5s_linear_infinite]">Sig</div>
                     <div className="w-12 h-6 bg-blue-500/20 border border-blue-500/50 rounded flex items-center justify-center text-[10px] animate-[slideRight_2.5s_linear_infinite_0.8s]">Sig</div>
                     <div className="w-12 h-6 bg-blue-500/20 border border-blue-500/50 rounded flex items-center justify-center text-[10px] animate-[slideRight_2.5s_linear_infinite_1.6s]">Sig</div>
                     <div className="w-12 h-6 bg-blue-500/20 border border-blue-500/50 rounded flex items-center justify-center text-[10px] animate-[slideRight_2.5s_linear_infinite_2.4s]">Sig</div>
                 </div>
             </div>
             
             {/* PoH Clock */}
             <div className="absolute -bottom-8 w-full flex items-center justify-center gap-2">
                 <div className="h-1 w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                 <div className="absolute bg-black border border-gray-600 px-2 py-1 rounded text-[10px] font-mono text-gray-400 flex gap-2">
                    <Cpu size={12} /> Proof of History Clock
                 </div>
             </div>
         </div>
         
         <style>{`
            @keyframes slideRight {
                0% { transform: translateX(-50px); opacity: 0; }
                20% { opacity: 1; }
                80% { opacity: 1; }
                100% { transform: translateX(350px); opacity: 0; }
            }
         `}</style>
      </div>
    );
  }

  // Slide 3: Consensus (Tower BFT / Security)
  if (slide.visualType === VisualType.CONSENSUS) {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-8">
         <div className="relative w-64 h-64">
             {/* Central Ledger */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-900 border border-gray-600 rounded-xl flex items-center justify-center z-20 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                 <Database className="text-white" size={32} />
             </div>

             {/* Validator Nodes Ring */}
             {[...Array(8)].map((_, i) => {
                 const angle = (i / 8) * 2 * Math.PI;
                 const x = Math.cos(angle) * 100; // Radius 100
                 const y = Math.sin(angle) * 100;
                 const isMalicious = i === 6; // One bad node
                 
                 return (
                     <div key={i} className="absolute top-1/2 left-1/2 w-8 h-8 -ml-4 -mt-4 z-10" style={{ transform: `translate(${x}px, ${y}px)` }}>
                         <div className={`w-full h-full rounded-full border-2 flex items-center justify-center bg-black ${isMalicious ? 'border-red-500 shadow-[0_0_10px_red]' : 'border-solana-green shadow-[0_0_10px_#14F195]'}`}>
                             {isMalicious ? <span className="text-red-500 font-bold text-xs">!</span> : <Server size={14} className="text-solana-green" />}
                         </div>
                         {/* Connection Line */}
                         <div 
                            className={`absolute top-1/2 left-1/2 w-[100px] h-[1px] origin-left -z-10 ${isMalicious ? 'bg-red-500/20' : 'bg-solana-green/40'}`} 
                            style={{ transform: `rotate(${angle + Math.PI}rad)`, width: '100px', left: '50%', top: '50%' }} 
                         />
                     </div>
                 )
             })}

             {/* Supermajority Shield Overlay */}
             <div className="absolute inset-0 border-2 border-dashed border-solana-purple/30 rounded-full animate-[spin_60s_linear_infinite]"></div>
             <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 backdrop-blur px-3 py-1 rounded-full border border-solana-green/30">
                 <ShieldCheck size={16} className="text-solana-green" />
                 <span className="text-xs font-mono text-solana-green">2/3 Supermajority Secure</span>
             </div>
         </div>
      </div>
    );
  }

  // Slide 4: Tokenomics (Pie/Donut Chart)
  if (slide.visualType === VisualType.TOKENOMICS) {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
         <div className="flex flex-col md:flex-row items-center gap-12">
             
             {/* Donut Chart */}
             <div className="relative w-48 h-48">
                 <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                     {/* Circle Background */}
                     <circle cx="50" cy="50" r="40" fill="none" stroke="#333" strokeWidth="10" />
                     
                     {/* Segment 1: Staking (Purple) - 60% */}
                     <circle cx="50" cy="50" r="40" fill="none" stroke="#9945FF" strokeWidth="10" 
                             strokeDasharray={`${60 * 2.51} 251`} strokeDashoffset="0" className="drop-shadow-lg" />
                     
                     {/* Segment 2: Development/Eco (Green) - 30% */}
                     <circle cx="50" cy="50" r="40" fill="none" stroke="#14F195" strokeWidth="10" 
                             strokeDasharray={`${30 * 2.51} 251`} strokeDashoffset={`${-60 * 2.51}`} />
                     
                     {/* Segment 3: Burn (White/Gray) - 10% */}
                     <circle cx="50" cy="50" r="40" fill="none" stroke="#FFF" strokeWidth="10" 
                             strokeDasharray={`${10 * 2.51} 251`} strokeDashoffset={`${-90 * 2.51}`} />
                 </svg>
                 
                 {/* Center Icon */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <Coins className="text-white mb-1" size={24} />
                     <span className="text-[10px] font-mono text-gray-400">SOL</span>
                 </div>
             </div>

             {/* Legend */}
             <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-3">
                     <div className="w-3 h-3 rounded-full bg-solana-purple shadow-[0_0_8px_#9945FF]"></div>
                     <div>
                         <p className="text-sm font-bold text-white">Staking Rewards</p>
                         <p className="text-[10px] text-gray-400">Inflationary Distribution</p>
                     </div>
                 </div>
                 <div className="flex items-center gap-3">
                     <div className="w-3 h-3 rounded-full bg-solana-green shadow-[0_0_8px_#14F195]"></div>
                     <div>
                         <p className="text-sm font-bold text-white">Ecosystem</p>
                         <p className="text-[10px] text-gray-400">Grants & Development</p>
                     </div>
                 </div>
                 <div className="flex items-center gap-3">
                     <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_8px_white]"></div>
                     <div>
                         <p className="text-sm font-bold text-white">Burn Mechanism</p>
                         <p className="text-[10px] text-gray-400">50% Transaction Fees</p>
                     </div>
                 </div>
                 
                 <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center justify-between gap-4 text-xs font-mono">
                        <span className="text-gray-400">Circulating:</span>
                        <span className="text-solana-green">~400M+ SOL</span>
                    </div>
                 </div>
             </div>

         </div>
      </div>
    );
  }

  // Slide 5: Trilemma (User liked this one, kept as is)
  if (slide.visualType === VisualType.TRILEMMA) {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-8">
        <div className="relative w-full max-w-[350px] aspect-square">
           {/* SVG Triangle */}
           <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
             <defs>
               <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                 <feGaussianBlur stdDeviation="2" result="blur" />
                 <feComposite in="SourceGraphic" in2="blur" operator="over" />
               </filter>
               <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9945FF" />
                  <stop offset="100%" stopColor="#14F195" />
               </linearGradient>
             </defs>

             {/* Connection Lines */}
             <path d="M50,15 L90,85 L10,85 Z" fill="none" stroke="#333" strokeWidth="0.5" className="opacity-50" />
             
             {/* Vertices Labels */}
             <text x="50" y="8" textAnchor="middle" fill="#9945FF" fontSize="3.5" fontWeight="bold" className="uppercase tracking-widest font-mono">Scalability</text>
             <text x="95" y="90" textAnchor="middle" fill="#14F195" fontSize="3.5" fontWeight="bold" className="uppercase tracking-widest font-mono">Security</text>
             <text x="5" y="90" textAnchor="middle" fill="#888" fontSize="3.5" fontWeight="bold" className="uppercase tracking-widest font-mono">Decentralization</text>

             {/* Vertices Dots */}
             <circle cx="50" cy="15" r="1.5" fill="#9945FF" filter="url(#glow)" />
             <circle cx="90" cy="85" r="1.5" fill="#14F195" filter="url(#glow)" />
             <circle cx="10" cy="85" r="1.5" fill="#444" />

             {/* Solana Position - High Scale, High Security, Low Decentralization */}
             <line x1="50" y1="15" x2="68" y2="55" stroke="url(#lineGradient)" strokeWidth="0.5" strokeDasharray="2 1" className="animate-[dash_20s_linear_infinite]" />
             
             {/* Active Node */}
             <g className="animate-pulse">
                <circle cx="68" cy="55" r="5" fill="#14F195" fillOpacity="0.1" />
                <circle cx="68" cy="55" r="2" fill="white" filter="url(#glow)" />
             </g>

             {/* Ethereum Comparison (Ghosted) */}
             <circle cx="30" cy="80" r="1.5" fill="#444" opacity="0.5" />
             <text x="30" y="85" textAnchor="middle" fill="#444" fontSize="2" opacity="0.5">ETH L1</text>

             {/* Label Box */}
             <foreignObject x="73" y="50" width="40" height="20">
               <div className="text-[3px] bg-black/80 text-white border border-solana-green/50 px-1 py-0.5 rounded shadow-lg backdrop-blur-sm">
                 SOLANA
               </div>
             </foreignObject>
           </svg>
           
           {/* Definitions */}
           <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-8 text-[10px] text-gray-500 font-mono">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-solana-purple shadow-[0_0_5px_#9945FF]"></span>High Throughput</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-solana-green shadow-[0_0_5px_#14F195]"></span>BFT Finality</span>
           </div>
        </div>
      </div>
    );
  }

  // Slide 6: Thank You / Q&A
  if (slide.visualType === VisualType.THANK_YOU) {
    return (
      <div className="flex flex-col items-center justify-center h-full relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-solana-purple/10 via-transparent to-transparent opacity-50" />
        
        <div className="relative z-10 p-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 ring-1 ring-white/20 shadow-[0_0_50px_rgba(20,241,149,0.15)] group transition-all duration-500 hover:scale-105">
            <MessageCircleQuestion size={80} className="text-solana-green drop-shadow-[0_0_15px_rgba(20,241,149,0.8)]" strokeWidth={1} />
        </div>
        
        <h3 className="relative z-10 text-4xl font-bold text-white mb-4 tracking-tight">Q & A</h3>
        <p className="relative z-10 text-gray-400 font-mono text-xs text-center max-w-xs leading-relaxed border-t border-gray-800 pt-4 mt-2">
          "The future is not just about speed,<br/> it's about synchronization."
        </p>
      </div>
    );
  }

  // Default Fallback
  return (
    <div className="flex items-center justify-center h-full w-full p-8">
      <div className="relative group">
         <div className="absolute inset-0 bg-gradient-to-br from-solana-green/20 to-solana-purple/20 blur-[60px] opacity-40 rounded-full group-hover:opacity-60 transition-opacity duration-700"></div>
         <div className="relative z-10 w-64 h-64 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl ring-1 ring-white/5">
             <Zap size={80} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" strokeWidth={1} />
         </div>
      </div>
    </div>
  );
};