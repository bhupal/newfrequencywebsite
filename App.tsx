import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useMemo } from 'react';

import { GoogleGenAI } from "@google/genai";
import { 
  Gamepad2, 
  Signal, 
  Wifi, 
  Smartphone, 
  ChevronRight, 
  CheckCircle2, 
  Zap,
  Menu,
  X,
  HelpCircle,
  Facebook,
  Instagram,
  AlertTriangle,
  Coins,
  TrendingUp,
  Globe,
  Rocket,
  Users,
  Gem,
  RefreshCcw,
  Radio,
  Gift,
  ShieldCheck,
  Home,
  FileText,
  Eye,
  Network,
  ArrowDown,
  ArrowRight,
  Play,
  Activity,
  Award,
  SmartphoneNfc,
  CreditCard,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Info,
  Sparkles,
  ExternalLink,
  ShieldAlert,
  Send,
  X as TwitterX
} from 'lucide-react';
import { 
  NAV_ITEMS, 
  CRYPTO_NAV_ITEMS,
  NETWORK_PROVIDERS, 
  FAQS,
  TOKENOMICS_DATA,
  ROADMAP_DATA,
  TOKEN_STATS,
  FEATURES
} from './constants';

// ---  COMPONENT ---

const FREEC_MINT_ADDRESS =
  "BPzyqjrsVAufxzNJjAmiKbvQ8dfNZ8ADMmr59KZgftJM";

const FreequencyLogo = ({ size = 'md', animated = false, variant = 'wireless' }: { size?: 'sm' | 'md' | 'lg' | 'xl', animated?: boolean, variant?: 'wireless' | 'crypto' }) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-48 h-48',
    xl: 'w-80 h-80'
  };

  const glowColor = variant === 'crypto' ? 'rgba(139, 92, 246, 0.4)' : 'rgba(34, 197, 94, 0.4)';

  return (
    <div className={`relative ${sizeClasses[size]} ${animated ? 'animate-float' : ''} flex items-center justify-center`}>
      {/* Background Glow */}
      {animated && (
        <div 
          className="absolute inset-0 rounded-full blur-3xl animate-glow-pulse" 
          style={{ backgroundColor: glowColor }}
        ></div>
      )}
      
      {/* The Token Body - High-fidelity representation of the provided image */}
      <div className="relative w-full h-full rounded-full border-[6px] border-[#d4af37] bg-gradient-to-b from-[#0a2e5c] via-[#05162e] to-[#020814] p-4 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.6),inset_0_0_30px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {/* Subtle Coin Edge Texture (Simulated with dashed border) */}
        <div className="absolute inset-[-6px] rounded-full border-[4px] border-[#b8860b] border-dashed opacity-30 pointer-events-none"></div>

        {/* Decorative Inner Ring with Glowing Lights */}
        <div className="absolute inset-[8%] rounded-full border border-cyan-400/20">
          {[...Array(16)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.9)]"
              style={{ 
                top: `${50 + 47 * Math.sin(i * Math.PI / 8)}%`, 
                left: `${50 + 47 * Math.cos(i * Math.PI / 8)}%`,
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
        </div>
        
        {/* Center Golden Circle and Slanted Signal Bars */}
        <div className="relative w-[48%] h-[48%] flex items-center justify-center mb-[4%]">
            <div className="absolute inset-0 border-[3.5px] border-gradient-to-b from-[#f9d423] to-[#b8860b] rounded-full shadow-[0_0_10px_rgba(184,134,11,0.3)]"></div>
            <div className="flex items-end gap-[10%] h-[55%] z-10">
                {/* Slanted Signal Bars matching the logo image */}
                <div 
                  className="w-[18%] h-[45%] bg-gradient-to-br from-[#f9d423] via-[#d4af37] to-[#8b6d05] shadow-md"
                  style={{ clipPath: 'polygon(0% 15%, 100% 0%, 100% 100%, 0% 100%)' }}
                ></div>
                <div 
                  className="w-[18%] h-[75%] bg-gradient-to-br from-[#f9d423] via-[#d4af37] to-[#8b6d05] shadow-md"
                  style={{ clipPath: 'polygon(0% 15%, 100% 0%, 100% 100%, 0% 100%)' }}
                ></div>
                <div 
                  className="w-[18%] h-[100%] bg-gradient-to-br from-[#f9d423] via-[#d4af37] to-[#8b6d05] shadow-md"
                  style={{ clipPath: 'polygon(0% 15%, 100% 0%, 100% 100%, 0% 100%)' }}
                ></div>
            </div>
        </div>

        {/* Brand Text - All Caps as per image */}
        <div className="text-center z-10 mt-1">
          <p className="text-[13%] font-black text-[#f9d423] uppercase tracking-[0.05em] leading-none mb-1 drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">FREEQUENCY</p>
          <p className="text-[12%] font-bold text-[#d4af37] uppercase tracking-[0.25em] leading-none drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">TOKEN</p>
        </div>

        {/* Metallic Sheen Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent rotate-45 pointer-events-none"></div>
      </div>
    </div>
  );
};

const PrivacyPage = () => (
  <div className="py-32 px-6 max-w-4xl mx-auto text-slate-300">
    <h1 className="text-4xl font-black text-white mb-6">Privacy Policy</h1>

    <p className="mb-6 text-sm text-slate-400">
      Last Updated: April 2026
    </p>

    <p className="mb-6">
      Freequency Mobile LLC values your privacy. This policy explains how we collect and use your data.
    </p>

    <h2 className="text-2xl font-bold text-white mt-8 mb-3">Information We Collect</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>Name, email, contact details</li>
      <li>Device and usage data</li>
      <li>Wallet and transaction data</li>
    </ul>

    <h2 className="text-2xl font-bold text-white mt-8 mb-3">Usage</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>Improve services</li>
      <li>Process rewards</li>
      <li>Provide support</li>
    </ul>

    <h2 className="text-2xl font-bold text-white mt-8 mb-3">Contact</h2>
    <p>Email: support@freequency.net</p>
  </div>
);

const SupportPage = () => (
  <div className="py-32 px-6 max-w-4xl mx-auto text-slate-300">
    <h1 className="text-4xl font-black text-white mb-6">Support Center</h1>

    <p className="mb-8">
      Need help? Contact us anytime.
    </p>

    <h2 className="text-2xl font-bold text-white mb-3">Contact</h2>
    <p className="mb-6">
      support@freequency.net <br />
      Response time: 24–48 hours
    </p>

    <h2 className="text-2xl font-bold text-white mb-3">Common Issues</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>Login problems</li>
      <li>Rewards not showing</li>
      <li>Wallet issues</li>
    </ul>

    <h2 className="text-2xl font-bold text-white mt-8 mb-3">FAQ</h2>

    <p><b>How to start?</b><br/>Download app and begin usage.</p>
    <p className="mt-4"><b>Rewards delayed?</b><br/>Wait up to 48 hours.</p>
  </div>
);



// --- PRICE WIDGET COMPONENT ---

const FREECPriceWidget = () => {
  const [price, setPrice] = useState(0.42069);
  const [change24h, setChange24h] = useState(8.42);
  const [marketBrief, setMarketBrief] = useState<string>("");
  const [loadingBrief, setLoadingBrief] = useState(true);

  // Use Gemini to generate a "Live Market Analysis" brief
  useEffect(() => {
    const fetchMarketBrief = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: "Provide a very short (20 words max), professional, bullish sounding market brief for 'FREEC Token', a connectivity-utility asset that pays for mobile data. Mention its utility growing.",
          config: { temperature: 0.7 }
        });
        setMarketBrief(response.text || "Strong utility demand driving ecosystem value as A2D conversions hit new milestones.");
      } catch (err) {
        setMarketBrief("Ecosystem growth accelerating with increased A2D engine utilization across Tier 1 networks.");
      } finally {
        setLoadingBrief(false);
      }
    };
    fetchMarketBrief();
  }, []);

  // Simulate price ticks
  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(prev => {
        const drift = (Math.random() - 0.48) * 0.0005; // Slightly bullish drift
        return +(prev + drift).toFixed(5);
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const totalMarketCap = useMemo(() => {
    const supply = parseFloat(TOKEN_STATS.totalSupply.replace(/,/g, ''));
    return (supply * price).toLocaleString(undefined, { maximumFractionDigits: 0 });
  }, [price]);

  return (
    <div className="w-full max-w-5xl mx-auto mb-16 px-6">
      <div className="relative group overflow-hidden bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 via-cyan-500/5 to-transparent pointer-events-none"></div>
        
        {/* Price Stats */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
          <div className="space-y-1">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Live Price</p>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-white">${price}</span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${change24h >= 0 ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                {change24h >= 0 ? '+' : ''}{change24h}%
              </span>
            </div>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Market Cap</p>
            <div className="text-2xl font-bold text-white">${totalMarketCap}</div>
          </div>

          <div className="space-y-1 hidden md:block">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">24h Volume</p>
            <div className="text-2xl font-bold text-white">$1,842,900</div>
          </div>
        </div>

        {/* AI Market Intel */}
        <div className="md:w-1/3 w-full border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-cyan-400 mb-2">
            <Sparkles size={16} />
            <span className="text-[10px] font-black uppercase tracking-tighter">AI Market Pulse</span>
          </div>
          <div className="relative h-12 flex items-center">
            {loadingBrief ? (
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-slate-700 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}></div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-300 italic font-medium leading-snug">
                "{marketBrief}"
              </p>
            )}
          </div>
        </div>

        {/* Action Button */}
        <button className="shrink-0 px-6 py-3 bg-white text-slate-900 font-black rounded-xl hover:bg-cyan-400 transition-all flex items-center gap-2 group-hover:scale-105">
         <a href="https://dexscreener.com/solana/co4ku216hdsjs4gtilak1ziv9w7m14gdyvybdc4biysb" target="_blank"> Trade FREEC </a><ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
};

// --- RAYDIUM BUY SECTION ---

const RaydiumBuySection = () => {
  return (
    <section id="buy" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="mb-10 inline-flex items-center gap-3 px-6 py-3 bg-slate-900 border border-slate-700 rounded-2xl">
         
          <span className="text-slate-300 font-bold">
            Swap FREEC instantly on Raydium
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
          Ready to join the
 <span className="text-cyan-400"> Connectivity Revolution?
</span> 
        </h2>

        <a
          href={`https://raydium.io/swap/?inputCurrency=sol&outputCurrency=${FREEC_MINT_ADDRESS}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 border border-white/10 rounded-2xl text-2xl font-black text-white hover:bg-violet-600 transition-all"
        >
          Buy on Raydium <ExternalLink size={24} />
        </a>

        <div className="mt-12 bg-slate-900/50 border border-white/5 p-6 rounded-2xl text-left">
          <div className="flex justify-between mb-2">
            <span className="text-xs text-slate-500 uppercase tracking-widest">
              Mint Address
            </span>
            <button
              onClick={() => navigator.clipboard.writeText(FREEC_MINT_ADDRESS)}
              className="text-xs text-cyan-400 font-bold"
            >
              Copy
            </button>
          </div>

          <div className="font-mono text-sm text-slate-300 break-all bg-black/40 p-3 rounded-lg">
            {FREEC_MINT_ADDRESS}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-slate-900/40 p-8 rounded-3xl border border-white/5">
            <ShieldAlert className="text-amber-500 mb-4" size={32} />
            <h4 className="text-white font-bold mb-2">
              Risk Disclosure
            </h4>
            <p className="text-slate-400 text-sm">
              FREEC is a utility token. Cryptocurrency involves risk.
              This is not financial advice.
            </p>
          </div>

          <div className="bg-slate-900/40 p-8 rounded-3xl border border-white/5">
            <Info className="text-cyan-400 mb-4" size={32} />
            <h4 className="text-white font-bold mb-2">
              How to Buy
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              1. Install Phantom / Solflare<br />
              2. Add SOL<br />
              3. Swap on Raydium<br />
              4. Confirm FREEC token
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};



// --- SHARED COMPONENTS ---

const Calculator = () => {
  const [minutes, setMinutes] = useState(20);
  
  const calculateTier = (m: number) => {
    if (m < 15) return { 
      name: 'Starter Tier', 
      coverage: '5GB Data Limit', 
      status: 'Restricted',
      fee: '$10.00 / mo',
      color: 'text-amber-400',
      bgColor: 'bg-amber-500',
      borderColor: 'border-amber-500',
      description: 'Milestone Missed',
      subtext: 'Data capped at 5GB. $10 fee applies.'
    };
    if (m < 45) return { 
      name: 'Pro Gamer', 
      coverage: 'Unlimited Data', 
      status: 'Active',
      fee: 'WAIVED ($0)',
      color: 'text-green-400',
      bgColor: 'bg-green-500',
      borderColor: 'border-green-500',
      description: 'Milestones Met',
      subtext: 'Next month free. Full speed data.'
    };
    return { 
      name: 'Ultra Streamer', 
      coverage: 'Unlimited Max + 4K', 
      status: 'Active',
      fee: 'WAIVED ($0)',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500',
      borderColor: 'border-emerald-500',
      description: 'Bonus Rewards',
      subtext: 'Maximum rewards unlocked.'
    };
  };

  const tier = calculateTier(minutes);
  const isRestricted = minutes < 15;

  return (
    <div id="calculator" className="max-w-4xl mx-auto bg-slate-800/50 rounded-3xl p-8 border border-slate-700 backdrop-blur-sm shadow-xl shadow-green-900/10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">Earnings Calculator</h2>
        <p className="text-slate-400">Estimate your service level based on daily phone engagement</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <div className="flex justify-between text-sm mb-2 font-medium">
              <span className="text-slate-300">Daily Engagement Time</span>
              <span className={tier.color}>{minutes} Minutes</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="120" 
              step="1"
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value))}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-slate-700 accent-green-500"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>0m</span>
              <span>15m (Free Goal)</span>
              <span>120m+</span>
            </div>
          </div>

          <div className={`p-4 rounded-xl border ${isRestricted ? 'bg-amber-950/20 border-amber-900/50' : 'bg-green-950/20 border-green-900/50'}`}>
            <div className="flex items-start gap-3">
              {isRestricted ? <AlertTriangle className="text-amber-500 shrink-0" /> : <CheckCircle2 className="text-green-500 shrink-0" />}
              <div>
                <h4 className={`font-bold ${tier.color} mb-1`}>{tier.name}</h4>
                <p className="text-slate-300 text-sm">{tier.subtext}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className={`absolute inset-0 ${tier.bgColor} blur-[60px] opacity-10 rounded-full`}></div>
          <div className={`relative bg-slate-900 rounded-2xl p-6 border ${tier.borderColor} border-t-4 shadow-2xl`}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-slate-400 text-sm uppercase tracking-wider font-semibold">Projected Plan</p>
                <h3 className="text-2xl font-bold text-white mt-1">{tier.coverage}</h3>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-bold ${tier.bgColor} text-slate-900`}>
                {tier.status}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-slate-800">
                <span className="text-slate-400">Monthly Cost</span>
                <span className={`text-xl font-bold ${isRestricted ? 'text-white' : 'text-green-400'}`}>{tier.fee}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-800">
                <span className="text-slate-400">Data Speed</span>
                <span className="text-white font-medium">{isRestricted ? 'Restricted (5GB Cap)' : '5G Ultra Capacity'}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-slate-400">Activation</span>
                <span className="text-white font-medium">$10.00 <span className="text-xs text-slate-500">(One-time)</span></span>
              </div>
            </div>

            <button className={`w-full mt-6 py-4 rounded-xl font-bold text-white transition-all ${isRestricted ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg hover:shadow-green-500/25'}`}>
              {isRestricted ? 'Upgrade to Pro' : 'Start Earning Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative bg-slate-800 rounded-3xl p-1 border border-white/10 overflow-hidden aspect-video shadow-2xl w-full">
      
      {!play ? (
        <>
          {/* Thumbnail */}
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Video thumbnail"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-center justify-center">
            <button
              onClick={() => setPlay(true)}
              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-slate-900 shadow-2xl hover:scale-110 transition-transform"
              aria-label="Play video"
            >
              <Play size={36} className="ml-1" />
            </button>
          </div>
        </>
      ) : (
        <iframe
          className="w-full h-full rounded-2xl"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Freequency Explainer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  );
};




// --- WIRELESS APP COMPONENTS ---

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  const payload = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  try {
    const res = await fetch("/contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Failed to send message.");
    }
  } catch {
    alert("Network error. Please try again.");
  }
};

const ContactSection = () => (
  <section id="contact" className="py-24 bg-slate-900/80">
    <div className="container mx-auto px-6 max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-white mb-4">Contact Us</h2>
        <p className="text-slate-400">
          Have questions? Reach out and we’ll get back to you shortly.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-slate-900 p-8 rounded-3xl border border-white/5"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-green-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-green-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-green-500"
        />

        <button
          type="submit"
          className="w-full py-4 rounded-xl font-black text-slate-900 bg-green-500 hover:bg-green-400 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);


const WirelessLanding = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-green-500/10 blur-[150px] rounded-full -z-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          
          {/* Main Animated Logo in Hero */}
          <div className="mb-12">
             
       <img
  src="https://freequency.net/frequencylogo.png"
  alt="Freequency"
   width="500px"/>

  
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-bold text-sm mb-8 animate-bounce-slow">
            <SmartphoneNfc size={16} />
            <span>Redefining Mobile Access</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tighter">
            The World’s First <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
              Mobile Platform
            </span> <br />
            That Pays You.
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Turn everyday phone activity into real value. With Freequency, your smartphone becomes an earning engine — not a monthly expense.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="px-10 py-5 bg-green-500 text-slate-900 rounded-2xl font-black text-xl hover:bg-green-400 transition-all hover:scale-105 shadow-xl shadow-green-500/20 flex items-center justify-center gap-2">
              Start Earning Now <ChevronRight size={24} />
            </button>
            <button className="px-10 py-5 bg-slate-800 text-white rounded-2xl font-bold text-xl border border-slate-700 hover:border-green-500/50 transition-all flex items-center justify-center gap-2">
              How it Works <ArrowDown size={24} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto py-12 border-t border-white/5 w-full">
            {[
              { val: "$0", label: "Monthly Bill" },
              { val: "5G", label: "Ultra Capacity" },
              { val: "100%", label: "User Owned" },
              { val: "24/7", label: "Rewards Active" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black text-white mb-1">{stat.val}</div>
                <div className="text-slate-500 text-sm uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Is Freequency? */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group flex justify-center">
               <div className="absolute -inset-4 bg-gradient-to-tr from-green-600 to-teal-400 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
               <div className="relative bg-slate-800 rounded-3xl p-1 border border-white/10 overflow-hidden aspect-video shadow-2xl w-full">
               
<YouTubeEmbed videoId="lXNVbNzpEIA" />


               </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">What Is Freequency?</h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
	      <a href="https://freequency.net/Freequency_How_It_Works_Infographic_Final_Corrected.pdf
"><b>How Freequency Works </b></a>
                Freequency is a reward-powered mobile platform that lets users earn digital value by doing things they already do on their phone — like playing games, watching content, completing offers, and engaging daily.
		
              </p>
              <div className="space-y-4">
                {[
                  "Pay for wireless service",
                  "Reduce or eliminate monthly phone bills",
                  "Unlock device upgrades and perks",
                  "Participate in a utility-driven ecosystem"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-200 font-medium">
                    <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg font-bold text-green-400 italic">
                Your phone already takes your time. Freequency gives it back — in value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Why Freequency Exists</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-16">
            For decades, mobile users have paid endlessly for connectivity while tech companies captured the upside. Freequency flips that model. Instead of users paying more… <span className="text-white font-bold">Users earn more.</span>
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Globe, label: "Accessible" },
              { icon: Award, label: "Rewarding" },
              { icon: Users, label: "User-Owned" },
              { icon: ShieldCheck, label: "Economically Fair" }
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-white/5 hover:border-green-500/20 transition-colors">
                <item.icon className="text-green-500 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-bold text-white">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">How Freequency Works</h2>
            <p className="text-slate-400">Simple steps to turn your usage into connectivity.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: 1, title: "Use Your Phone", icon: Smartphone, desc: "Engage with games, offers, videos, surveys, and daily activities directly inside the app." },
              { step: 2, title: "Earn Rewards", icon: Gem, desc: "Earn FREEC tokens and platform rewards for participation, consistency, and engagement." },
              { step: 3, title: "Spend or Save", icon: CreditCard, desc: "Use earnings to pay bills, activate eSIMs, upgrade devices, or hold for long-term utility." }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-black text-white/5 absolute -top-8 -left-4 group-hover:text-green-500/10 transition-colors">0{item.step}</div>
                <div className="bg-slate-800 p-8 rounded-3xl border border-white/5 h-full relative z-10 hover:-translate-y-2 transition-transform">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 mb-6 border border-green-500/20">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="inline-block p-4 bg-slate-900 rounded-2xl border border-green-500/10 text-xl font-black">
              No gimmicks. Real usage <ArrowRight className="inline mx-2 text-green-500" /> real value.
            </div>
          </div>
        </div>
      </section>

      {/* Networks Section */}
      <section id="networks" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Choose Your Backbone</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We piggyback on the nation's premium 5G networks. Select the towers that work best in your area.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {NETWORK_PROVIDERS.map((net) => (
              <div key={net.id} className={`group relative bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-opacity-100 transition-all hover:-translate-y-2 ${net.ringColor.replace('border-', 'hover:border-')}`}>
                <div className={`absolute top-0 right-0 w-24 h-24 ${net.color} blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                
                <div className="mb-6 relative">
                  <div className={`w-16 h-16 rounded-2xl ${net.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Signal className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{net.name}</h3>
                  <p className="text-slate-400 text-sm h-10">{net.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 size={16} className="text-green-500" /> 5G Ultra Wideband
                  </li>
                  <li className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle2 size={16} className="text-green-500" /> 99% Nationwide Coverage
                  </li>
                </ul>

                <button className="w-full py-3 rounded-xl bg-slate-900 text-white font-semibold border border-slate-700 group-hover:bg-slate-700 transition-colors">
                  Select {net.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-24 bg-slate-900/80">
        <div className="container mx-auto px-6">
          <Calculator />
        </div>
      </section>

<ContactSection />




      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">Everything you need to know about the platform.</p>
          </div>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-slate-900 rounded-2xl border border-white/5 p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <HelpCircle className="text-green-500 shrink-0" size={24} />
                  {faq.question}
                </h3>
                <p className="text-slate-400 leading-relaxed pl-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};



const HowToBuyFREEC = () => {
  return (
    <section className="py-24 bg-slate-900/40 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <h2 className="text-4xl font-black text-white mb-6 text-center">
          How to Buy Freequency (FREEC)
        </h2>
        <p className="text-slate-400 text-center mb-12">
          You don’t need crypto experience. Just follow these steps.
        </p>

        <div className="space-y-10 text-slate-300">

          {/* Step 1 */}
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">
              Step 1: Buy Bitcoin on Cash App
            </h3>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Open Cash App</li>
              <li>Tap Bitcoin</li>
              <li>Verify your identity (one-time)</li>
              <li>Buy Bitcoin (any amount)</li>
            </ol>
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">
              Step 2: Set Up Phantom Wallet
            </h3>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Download Phantom Wallet</li>
              <li>Create a wallet</li>
              <li>Save recovery phrase securely</li>
              <li>Make sure Solana is selected</li>
            </ol>
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">
              Step 3: Send Bitcoin to Phantom
            </h3>
            <ol className="list-decimal ml-6 space-y-2">
              <li>In Phantom → Tap Bitcoin → Receive</li>
              <li>Copy your Bitcoin address</li>
              <li>Go to Cash App → Send Bitcoin</li>
              <li>Paste address and send</li>
            </ol>
            <p className="text-sm text-slate-500 mt-2">
              ⏱ Wait ~20 minutes for confirmation
            </p>
          </div>

          {/* Step 4 */}
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">
              Step 4: Convert Bitcoin to Solana
            </h3>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Tap Bitcoin balance in Phantom</li>
              <li>Select Sell / Swap</li>
              <li>Convert Bitcoin → SOL</li>
            </ol>
          </div>

          {/* Step 5 */}
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">
              Step 5: Swap SOL for FREEC
            </h3>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Tap SOL → Swap</li>
              <li>Paste token address:</li>
            </ol>

            <div className="bg-black/50 p-3 rounded-lg font-mono break-all my-3 text-sm">
              BPzyqjrsVAufxzNJjAmiKbvQ8dfNZ8ADMmr59KZgftJMn
            </div>

            <ol className="list-decimal ml-6 space-y-2">
              <li>Choose Max</li>
              <li>Leave some SOL for gas fees</li>
              <li>Confirm swap</li>
            </ol>

            <p className="text-green-400 font-bold mt-4">
              ✅ You now own FREEC
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-12 border-t border-white/5 pt-8">
            <h3 className="text-xl font-bold text-white mb-4">
              FAQ (Beginner Safe)
            </h3>

            <p><b>Do I need a crypto exchange?</b><br/>
            No. Cash App + Phantom are enough.</p>

            <p className="mt-4"><b>How long does it take?</b><br/>
            About 30–40 minutes total.</p>

            <p className="mt-4"><b>Why leave SOL?</b><br/>
            SOL pays transaction fees.</p>

            <p className="mt-4"><b>FREEC not showing?</b><br/>
            Phantom → Tokens → Menu → Unhide FREEC.</p>
          </div>

        </div>
      </div>
    </section>
  );
};


// --- CRYPTO LANDING COMPONENTS ---



const CryptoLanding = ({ onGoHome }: { onGoHome: () => void }) => {
  return (
    <div className="animate-in fade-in duration-500 bg-[#020617] font-sans min-h-screen pb-20">
      {/* Home Navigation (Floating) */}
      <div className="fixed top-24 left-6 z-40 hidden lg:block">
        <button 
          onClick={onGoHome}
          className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur border border-slate-700 rounded-full text-slate-300 hover:text-white hover:border-violet-500 transition-all group"
        >
          <Home size={18} className="group-hover:scale-110 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-wider">Main Site</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(56,189,248,0.1),_transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          
          <div className="mb-12">
            <FreequencyLogo size="xl" animated variant="crypto" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-bold text-sm mb-12">
            <Coins size={16} />
            <span><a href="https://freequency.net/1225-Freequency-Token-Whitepaper-1.pdf">Official Whitepaper v1.0</a></span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase">
            FREEC<span className="text-cyan-400"> TOKEN</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            A blockchain-enabled connectivity protocol designed to address the global digital divide. Converting verified digital attention into real-world wireless connectivity.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-8 py-4 bg-violet-600 text-white rounded-xl font-bold text-lg hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/20 flex items-center justify-center gap-2">
              <a href="https://dexscreener.com/solana/co4ku216hdsjs4gtilak1ziv9w7m14gdyvybdc4biysb" target="_blank"> Buy FREEC </a> <ChevronRight size={20} />
            </button>
            <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg border border-slate-700 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2">
              <a href="https://freequency.net/1225-Freequency-Token-Whitepaper-1.pdf">Read Whitepaper</a> <FileText size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Live Market Widget */}
      <FREECPriceWidget />
      <RaydiumBuySection />
      <HowToBuyFREEC />
    <ContactSection />


      {/* A2D Engine Flow */}
      <section id="ecosystem" className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Attention-to-Data (A2D)</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">The core middleware layer that links digital engagement to telecom billing infrastructure.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -z-10"></div>
            {[
              { icon: Gamepad2, title: "User Activity", desc: "Games, Surveys, Ads" },
              { icon: Eye, title: "A2D Engine", desc: "Measures & Validates" },
              { icon: Network, title: "Carrier Settlement", desc: "Billing Integration" },
              { icon: Wifi, title: "Data Credits", desc: "Earned Connectivity" }
            ].map((step, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center hover:border-violet-500 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-violet-600/10 flex items-center justify-center mx-auto mb-6 text-violet-400 border border-violet-500/20">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section - UPDATED TO 2028 NARRATIVE */}
      <section id="roadmap" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-black uppercase tracking-widest mb-4">
              Execution Complete Through 2028
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">FREEQUENCY ROADMAP</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Freequency is not a concept or early-stage idea. The platform’s core technology, marketplace, token utility, and ecosystem infrastructure have already been built, tested, and deployed.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Completed Phases */}
            <div className="space-y-8">
              {ROADMAP_DATA.filter(p => p.status === 'completed').map((phase, i) => (
                <div key={i} className="bg-slate-900/40 border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-green-500/20 transition-all">
                  <div className="absolute top-4 right-4 text-green-500/20 group-hover:text-green-500/40 transition-colors">
                    <CheckCircle2 size={40} />
                  </div>
                  <div className="text-xs font-black text-green-400 uppercase tracking-widest mb-2">{phase.phase}</div>
                  <h3 className="text-2xl font-bold text-white mb-6">{phase.title}</h3>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-400 text-sm">
                        <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Upcoming/Future Phase */}
            <div className="space-y-8">
              {ROADMAP_DATA.filter(p => p.status !== 'completed').map((phase, i) => (
                <div key={i} className="h-full bg-violet-600/5 border border-violet-500/20 p-8 rounded-3xl relative overflow-hidden flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent pointer-events-none"></div>
                  <div className="text-xs font-black text-violet-400 uppercase tracking-widest mb-2">{phase.phase}</div>
                  <h3 className="text-3xl font-black text-white mb-8">{phase.title}</h3>
                  <p className="text-slate-400 mb-8 italic">With the ecosystem already built, Freequency’s next phase is acceleration, dominance, and integration — not development.</p>
                  <ul className="space-y-6 flex-1">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold shrink-0">{j + 1}</div>
                        <div>
                          <p className="text-white font-bold text-lg leading-tight">{item.split(': ')[0]}</p>
                          <p className="text-slate-400 text-sm mt-1">{item.split(': ')[1] || ''}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Positioning Statement */}
          <div className="max-w-4xl mx-auto text-center py-16 px-8 bg-gradient-to-b from-slate-900 to-transparent border border-white/5 rounded-[40px]">
            <p className="text-3xl md:text-4xl font-black text-white italic leading-tight mb-4">
              “Freequency is not building toward the future — <br />
              the future is already live. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Our roadmap reflects execution, not promises.”</span>
            </p>
            <div className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">Positioning Statement</div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-24 bg-slate-900/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Supply Constraints</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                FREEC has a permanently fixed supply minted once at genesis. No future minting is possible. Inflation is structurally eliminated to align users, carriers, and holders.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Total Supply</p>
                  <p className="text-2xl font-black text-white">{TOKEN_STATS.totalSupply}</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Initial Circulating</p>
                  <p className="text-2xl font-black text-cyan-400">{TOKEN_STATS.circulating}</p>
                </div>
              </div>
              <ul className="space-y-4">
                {TOKENOMICS_DATA.map((item, i) => (
                  <li key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-900/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                      <span className="text-slate-300 font-medium">{item.label}</span>
                    </div>
                    <span className="text-white font-bold">{item.percentage}%</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex justify-center">
              <div className="w-80 h-80">
                <FreequencyLogo size="xl" animated variant="crypto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- MAIN APP ---

// --- LAYOUT WITH NAV + FOOTER (shared) ---

const Layout = ({ children, isCrypto }: { children: React.ReactNode; isCrypto: boolean }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = isCrypto ? CRYPTO_NAV_ITEMS : NAV_ITEMS;

  return (
    <div className={`min-h-screen ${isCrypto ? 'bg-[#020617]' : 'bg-slate-900'} text-slate-50 transition-colors duration-500`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-2 font-black text-2xl tracking-tighter cursor-pointer"
              onClick={() => navigate('/')}
            >
              <img src="https://freequency.net/frequencylogo.png" alt="Freequency" width="150px" />
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}

              <div className="h-6 w-px bg-slate-700 mx-2"></div>

              <div className="flex bg-slate-800 p-1 rounded-full border border-slate-700">
                <button
                  onClick={() => navigate('/')}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${!isCrypto ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  Wireless
                </button>
                <button
                  onClick={() => navigate('/crypto')}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${isCrypto ? 'bg-violet-600 text-white shadow-sm shadow-violet-500/20' : 'text-slate-400 hover:text-white'}`}
                >
                  Crypto
                </button>
              </div>
            </div>

            <button className="md:hidden p-2 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-6">
            <div className="flex flex-col gap-4 mb-6">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-lg font-medium text-slate-300" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex bg-slate-800 p-1 rounded-full border border-slate-700 w-fit mx-auto">
              <button onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }} className={`px-4 py-1.5 rounded-full text-sm font-medium ${!isCrypto ? 'bg-slate-700 text-white' : 'text-slate-400'}`}>
                Wireless
              </button>
              <button onClick={() => { navigate('/crypto'); setIsMobileMenuOpen(false); }} className={`px-4 py-1.5 rounded-full text-sm font-medium ${isCrypto ? 'bg-violet-600 text-white' : 'text-slate-400'}`}>
                Crypto
              </button>
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>

      {/* Footer (same as yours, only crypto buttons use navigate) */}
      {/* Footer */}
<footer className="bg-slate-950 py-20 border-t border-slate-900">
  <div className="container mx-auto px-6">

    {/* SINGLE GRID ONLY */}
    <div className="grid md:grid-cols-4 gap-12">

      {/* Brand */}
      <div>
        <img
          src="https://freequency.net/frequencylogo.png"
          alt="Freequency"
          width="150px"
        />
        <p className="text-slate-400 my-6">
          Redefining wireless access as an earnable, programmable utility.
        </p>

        <div className="flex gap-4">
          <a href="https://t.me/+a3weCXzv3DcyNTVh" target="_blank" rel="noopener noreferrer">
            <Send className="w-5 h-5 text-slate-500 hover:text-[#229ED9]" />
          </a>
          <a href="https://www.instagram.com/freequencycoin" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 text-slate-500 hover:text-pink-500" />
          </a>
          <a href="https://x.com/freequencycoin" target="_blank" rel="noopener noreferrer">
            <TwitterX className="w-5 h-5 text-slate-500 hover:text-white" />
          </a>
        </div>
      </div>

      {/* Resources */}
      <div>
        <h4 className="font-bold text-white mb-6 uppercase text-xs">
          Resources
        </h4>
        <ul className="space-y-4 text-slate-400 text-sm">
          <li>
            <a href="#contact" className="hover:text-white">
              Contact Us
            </a>
          </li>

	   <li>
    <a href="/privacy" className="hover:text-white">
      Privacy Policy
    </a>
  </li>
  <li>
    <a href="/support" className="hover:text-white">
      Support
    </a>
  </li>
        </ul>

      </div>

      {/* FREEC Crypto */}
      <div>
        <h4 className="font-bold text-white mb-6 uppercase text-xs">
          FREEC Crypto
        </h4>
        <ul className="space-y-4 text-slate-400 text-sm">
          <li>
            <button
              onClick={() => navigate('/crypto')}
              className="hover:text-violet-400"
            >
              Whitepaper
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate('/crypto')}
              className="hover:text-violet-400"
            >
              Tokenomics
            </button>
          </li>
        </ul>
      </div>

      {/* Download App */}
      <div>
        <h4 className="font-bold text-white mb-6 uppercase text-xs">
          Download App
        </h4>

        <div className="flex flex-col gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.crbt.freequency_mobile&hl=en_US"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12 hover:scale-105 transition-transform"
            />
          </a>

          <a href="#">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12 opacity-70 hover:opacity-100 hover:scale-105 transition-all"
            />
          </a>
        </div>
      </div>

    </div>

    <div className="mt-20 pt-8 border-t border-slate-900 text-slate-600 text-xs text-center">
      © 2026 Freequency Mobile LLC
    </div>

  </div>
</footer>
    </div>
  );
};

// --- PAGES ---

const WirelessPage = () => (
  <Layout isCrypto={false}>
    <WirelessLanding />
  </Layout>
);

const CryptoPage = () => (
  <Layout isCrypto={true}>
    <CryptoLanding onGoHome={() => { window.location.href = '/'; }} />
  </Layout>
);

// --- ROUTER APP ---

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<WirelessPage />} />
      <Route path="/crypto" element={<CryptoPage />} />

      {/* NEW PAGES */}
      <Route
        path="/privacy"
        element={
          <Layout isCrypto={false}>
            <PrivacyPage />
          </Layout>
        }
      />

      <Route
        path="/support"
        element={
          <Layout isCrypto={false}>
            <SupportPage />
          </Layout>
        }
      />
    </Routes>
  </BrowserRouter>
);