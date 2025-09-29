import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Hero from "./components/homepage/Hero";
import PopularServices from "./components/homepage/PopularServices";
import Features from "./components/homepage/Features";
import HowItWorks from "./components/homepage/HowItWorks";
import CTA from "./components/homepage/CTA";

export default function HomePage() {
  return (
    <div className="min-h-screen position-relative overflow-hidden bg-slate-50">
      {/* Modern Geometric Background - should be fixed and behind all content */}
      <div
        className="position-fixed w-full h-full overflow-hidden pointer-events-none"
        style={{ zIndex: 0, top: 0, left: 0 }}
      >
        {/* Primary geometric grid */}
        <div className="absolute inset-0 opacity-30">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Diagonal grid lines */}
            <defs>
              <pattern
                id="diagonalGrid"
                patternUnits="userSpaceOnUse"
                width="60"
                height="60"
              >
                <path
                  d="M0,60 L60,0"
                  stroke="#64748b"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
                <path
                  d="M0,0 L60,60"
                  stroke="#64748b"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalGrid)" />
          </svg>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,30 90,70 50,90 10,70 10,30"
              fill="#0f172a"
              stroke="#334155"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="absolute bottom-32 left-16 w-24 h-24 opacity-15">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect
              x="20"
              y="20"
              width="60"
              height="60"
              fill="none"
              stroke="#475569"
              strokeWidth="1.5"
            />
            <rect
              x="30"
              y="30"
              width="40"
              height="40"
              fill="none"
              stroke="#475569"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Subtle accent lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent opacity-40"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent opacity-30"></div>

        {/* Horizontal accent lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-30"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-25"></div>

        {/* Corner geometric elements */}
        <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M0,0 L100,0 L100,100 Z" fill="#1e293b" />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="0" cy="100" r="50" fill="#334155" />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Nav />

        <Hero />

        <PopularServices />

        <Features />

        <HowItWorks />

        <CTA />

        <Footer />
      </div>
    </div>
  );
}
