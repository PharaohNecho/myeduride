import React from 'react';
import { 
  Shield, 
  PlayCircle, 
  Lock, 
  GraduationCap, 
  Bus, 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  Fingerprint,
  CheckSquare,
  Activity,
  Send
} from 'lucide-react';

// --- Shared Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  className?: string;
  [key: string]: any;
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md px-6 py-3 btn-transition gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#002046] text-white hover:bg-opacity-90 focus:ring-[#002046]",
    secondary: "bg-[#196d24] text-white hover:bg-opacity-90 focus:ring-[#196d24]",
    outline: "border border-[#191c1e] text-[#191c1e] hover:bg-gray-100 focus:ring-[#002046]",
    text: "text-[#191c1e] hover:text-[#002046] focus:ring-[#002046] px-3 py-2",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-lg shadow-ambient p-8 ${className}`}>
    {children}
  </div>
);

// --- Sections ---

const Navbar = () => (
  <nav className="w-full h-20 border-b border-gray-200 bg-[#f7f9fb] sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="/input_file_1.png" alt="MyEduRide Logo" className="h-12 w-auto object-contain" referrerPolicy="no-referrer" />
      </div>
      
      {/* Core vision words, not links */}
      <div className="hidden lg:flex items-center gap-6">
        <div className="flex items-center gap-4 text-xs uppercase tracking-widest font-bold text-[#002046]">
          <span className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100"><Lock className="w-3 h-3 mr-1.5 text-[#196d24]" /> Ownership</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
          <span className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100"><GraduationCap className="w-3 h-3 mr-1.5 text-[#196d24]" /> Edu</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
          <span className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100"><Bus className="w-3 h-3 mr-1.5 text-[#196d24]" /> Ride</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="text" className="hidden sm:inline-flex text-sm">Login</Button>
        <Button variant="primary" className="text-sm px-5 py-2.5">Sign Up</Button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-28 grid md:grid-cols-2 gap-12 items-center">
    <div className="space-y-6 md:space-y-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#196d24] bg-opacity-10 text-[#196d24] text-xs font-bold uppercase tracking-wider">
        Secure Student Transit
      </div>
      
      <h1 className="text-[#002046] text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1]">
        Personal Guardianship for Every <span className="text-[#196d24]">School Journey</span>
      </h1>
      
      <p className="text-lg md:text-xl text-[#44474e] max-w-xl leading-relaxed">
        Empowering parents with ownership and real-time control over their child's safety. Experience the peace of mind that comes from total oversight.
      </p>
      
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Button variant="primary" className="px-8 shadow-lg shadow-blue-900/20">Get Started</Button>
        <Button variant="outline" className="px-8">
          <PlayCircle className="w-5 h-5" />
          See How It Works
        </Button>
      </div>
    </div>
    
    <div className="relative group">
      <div className="absolute -inset-4 bg-[#002046] opacity-5 rounded-[2rem] transform rotate-3 transition-transform group-hover:rotate-1"></div>
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
        <img 
          src="/input_file_0.png" 
          alt="Safe school transport journey" 
          className="w-full h-auto object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const Philosophy = () => (
  <section className="bg-[#f2f4f6] py-20 px-6">
    <div className="max-w-7xl mx-auto text-center space-y-16">
      <div className="space-y-4 max-w-2xl mx-auto">
        <h2 className="text-[#002046]">The MyEduRide Philosophy</h2>
        <p className="text-[#44474e] text-lg">Built on three core pillars that redefine the standard of student transportation security.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        <Card className="hover:-translate-y-1 btn-transition">
          <div className="w-12 h-12 rounded-full bg-[#002046] bg-opacity-10 flex items-center justify-center mb-6">
            <Lock className="w-6 h-6 text-[#002046]" />
          </div>
          <h3 className="text-[#191c1e] mb-4">Ownership</h3>
          <p className="text-[#44474e]">We put the power back in parents' hands. Every aspect of the route, driver credentials, and timing is transparent and manageable by you.</p>
        </Card>

        <Card className="hover:-translate-y-1 btn-transition">
          <div className="w-12 h-12 rounded-full bg-[#196d24] bg-opacity-10 flex items-center justify-center mb-6">
            <GraduationCap className="w-6 h-6 text-[#196d24]" />
          </div>
          <h3 className="text-[#191c1e] mb-4">The Child's World</h3>
          <p className="text-[#44474e]">Education is more than just the classroom. We ensure the transition between home and school is a safe extension of their learning environment.</p>
        </Card>

        <Card className="hover:-translate-y-1 btn-transition">
          <div className="w-12 h-12 rounded-full bg-[#002046] bg-opacity-10 flex items-center justify-center mb-6">
            <Bus className="w-6 h-6 text-[#002046]" />
          </div>
          <h3 className="text-[#191c1e] mb-4">The Journey</h3>
          <p className="text-[#44474e]">The path matters. Every kilometer is tracked, verified, and optimized to ensure the safest possible route is taken every single day.</p>
        </Card>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="max-w-7xl mx-auto py-24 px-6 space-y-16">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
      <div className="space-y-4 max-w-2xl">
        <h2 className="text-[#002046]">Guardian-Grade Safety Features</h2>
        <p className="text-[#44474e] text-lg">Precision engineering for your peace of mind. Our system provides multiple layers of verification and alert systems.</p>
      </div>
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#196d24] bg-opacity-10 text-[#196d24] font-semibold text-sm border border-[#196d24] border-opacity-20">
          <span className="w-2 h-2 rounded-full bg-[#196d24] animate-pulse"></span>
          LIVE SYSTEMS ACTIVE
        </div>
      </div>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="hover:-translate-y-1 btn-transition border border-gray-200">
        <div className="mb-4">
          <MapPin className="w-6 h-6 text-[#002046]" />
        </div>
        <h3 className="text-lg mb-2 text-[#191c1e]">GPS Tracking</h3>
        <p className="text-[#44474e] text-sm">Real-time bus location updates every 5 seconds with precise mapping accuracy.</p>
      </Card>

      <Card className="hover:-translate-y-1 btn-transition border border-gray-200">
        <div className="mb-4">
          <MessageSquare className="w-6 h-6 text-[#002046]" />
        </div>
        <h3 className="text-lg mb-2 text-[#191c1e]">SMS Alerts</h3>
        <p className="text-[#44474e] text-sm">Instant notifications for departures, arrivals, and any unexpected route deviations.</p>
      </Card>

      <Card className="hover:-translate-y-1 btn-transition border border-gray-200">
        <div className="mb-4">
          <ShieldCheck className="w-6 h-6 text-[#002046]" />
        </div>
        <h3 className="text-lg mb-2 text-[#191c1e]">Driver Verification</h3>
        <p className="text-[#44474e] text-sm">Vetted professionals with digital ID cards and live identity confirmation protocols.</p>
      </Card>

      <Card className="hover:-translate-y-1 btn-transition border border-gray-200">
        <div className="mb-4">
          <Fingerprint className="w-6 h-6 text-[#002046]" />
        </div>
        <h3 className="text-lg mb-2 text-[#191c1e]">Biometric Check-ins</h3>
        <p className="text-[#44474e] text-sm">Secure biometric school gate entry ensuring children are safely handed over.</p>
      </Card>
    </div>
  </section>
);

const Proof = () => (
  <section className="bg-[#002046] text-white py-24 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500 opacity-20 blur-[100px] rounded-full"></div>
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
          alt="Dashboard UI" 
          className="w-full h-auto rounded-2xl relative z-10 border border-white border-opacity-10 shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="space-y-10">
        <h2 className="text-4xl">"Our technology is the proof."</h2>
        <p className="text-lg opacity-80 leading-relaxed">
          At the heart of MyEduRide lies our Central Policy Engine. This isn't just software—it's an automated enforcer of safety standards, ensuring that every trip complies with regional laws and parental preferences.
        </p>

        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="mt-1 w-10 h-10 rounded-lg bg-white bg-opacity-10 flex items-center justify-center shrink-0">
              <CheckSquare className="w-5 h-5 text-[#a2f79c]" />
            </div>
            <div>
              <h3 className="text-lg mb-1">Compliance by Default</h3>
              <p className="opacity-70 text-sm leading-relaxed">Every route is automatically checked against the latest transport safety regulations.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mt-1 w-10 h-10 rounded-lg bg-white bg-opacity-10 flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5 text-[#a2f79c]" />
            </div>
            <div>
              <h3 className="text-lg mb-1">Self-Optimizing Routes</h3>
              <p className="opacity-70 text-sm leading-relaxed">Our engine predicts and avoids high-risk areas or traffic bottlenecks in real-time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24 px-6 bg-[#f2f4f6] relative">
    <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-12 md:p-16 shadow-ambient relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-64 h-64 bg-[#196d24] bg-opacity-5 rounded-full blur-[40px]"></div>
      
      <div className="relative z-10 space-y-8">
        <h2 className="text-[#002046]">Ready to take control of the journey?</h2>
        <p className="text-[#44474e] max-w-xl mx-auto text-lg leading-relaxed">
          Join thousands of proactive parents who trust MyEduRide to protect what matters most. Secure your child's transit today.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
          <Button variant="primary">Create Guardian Account</Button>
          <Button variant="outline">Contact Support</Button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-gray-200 bg-white pt-16 pb-8 px-6 text-[#191c1e]">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <img src="/input_file_1.png" alt="MyEduRide Logo" className="h-8 w-auto object-contain" referrerPolicy="no-referrer" />
        </div>
        <p className="text-sm text-[#44474e] max-w-xs leading-relaxed">
          The Digital Guardian for Student Transport.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-[#002046]">Platform</h4>
        <ul className="space-y-3 text-sm text-[#44474e]">
          <li><a href="#" className="hover:text-[#002046] transition-colors">Features</a></li>
          <li><a href="#" className="hover:text-[#002046] transition-colors">Trust & Safety</a></li>
          <li><a href="#" className="hover:text-[#002046] transition-colors">Parent Guide</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-[#002046]">Company</h4>
        <ul className="space-y-3 text-sm text-[#44474e]">
          <li><a href="#" className="hover:text-[#002046] transition-colors">Support</a></li>
          <li><a href="#" className="hover:text-[#002046] transition-colors">Privacy</a></li>
          <li><a href="#" className="hover:text-[#002046] transition-colors">Terms of Service</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-[#002046]">Newsletter</h4>
        <p className="text-sm text-[#44474e] mb-4">Stay updated on safety standards.</p>
        <form className="flex gap-2">
          <input 
            type="email" 
            placeholder="Email" 
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#002046] focus:border-transparent"
          />
          <button type="submit" className="bg-[#002046] text-white p-2 text-sm rounded-md hover:bg-opacity-90 transition-opacity flex items-center justify-center w-12">
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>

    <div className="max-w-7xl mx-auto text-center text-sm text-[#74777f] border-t border-gray-200 pt-8">
      © {new Date().getFullYear()} MyEduRide. The Digital Guardian for Student Transport.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f9fb] font-sans">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Features />
        <Proof />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

