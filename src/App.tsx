/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Search, 
  Share2, 
  Target, 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Instagram, 
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 lg:hidden ${isScrolled ? "py-4 glass border-b border-border-subtle" : "py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-light text-white tracking-tighter"
        >
          Maryam <span className="text-brand-purple font-bold">Khan</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 bg-brand-purple text-white text-sm font-semibold rounded-full hover:bg-white hover:text-brand-purple transition-all"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-b border-white/10 py-6 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-brand-purple text-center text-white font-bold rounded-xl"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-3 py-1 bg-white/[0.03] rounded-md mb-6 border border-border-subtle"
          >
            <span className="text-[10px] uppercase tracking-[2px] font-bold text-brand-purple">Available for freelance projects on Fiverr & Upwork</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-display font-light text-white mb-6 leading-[1.1] tracking-tighter">
            Maryam <span className="text-gradient font-bold">Khan</span>
          </h1>
          <p className="text-sm uppercase tracking-[3px] font-bold text-brand-purple mb-8">
            Digital Marketing Specialist | SEO & E-commerce Growth Expert
          </p>
          
          <p className="text-lg md:text-xl text-text-muted mb-8 max-w-lg leading-relaxed font-light">
            I help businesses increase traffic, generate leads, and boost sales through data-driven SEO strategies and high-converting ad campaigns.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 bg-brand-purple hover:bg-white hover:text-brand-purple text-white font-bold rounded-full transition-all flex items-center group">
              Hire Me
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#projects" className="px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-full transition-all border border-white/20">
              View Portfolio
            </a>
          </div>
        </motion.div>

        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden md:block"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-[#121212] to-[#1A1A1A] shadow-2xl relative group flex items-center justify-center">
            {/* Abstract Marketing Graphic as Background */}
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
              alt="Digital Marketing Strategy" 
              className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-50 transition-all duration-700 ease-in-out"
              referrerPolicy="no-referrer"
            />
            
            {/* Large Typography Branding */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-24 h-24 rounded-full border-2 border-brand-purple/30 flex items-center justify-center mb-6"
              >
                <span className="text-4xl font-display font-bold text-brand-purple">MK</span>
              </motion.div>
              <h3 className="text-xl font-display font-light text-white tracking-widest uppercase mb-2">Portfolio</h3>
              <p className="text-[10px] text-brand-purple font-bold tracking-[4px] uppercase italic">Expert Strategy</p>
            </div>
            
            {/* Elegant Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90" />
            
            {/* Expert Badge */}
            <div className="absolute top-8 left-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="px-4 py-2 glass border border-white/10 rounded-full flex items-center space-x-2"
              >
                <CheckCircle2 size={12} className="text-brand-purple" />
                <span className="text-[9px] font-bold text-white uppercase tracking-widest">Verified Specialist</span>
              </motion.div>
            </div>
            
            {/* Overlay detail */}
            <div className="absolute bottom-10 left-10 p-6 glass rounded-2xl border border-white/20 max-w-[200px]">
              <p className="text-xs font-bold text-brand-purple uppercase mb-1">Result Oriented</p>
              <p className="text-sm text-white font-medium">Delivering 3x average ROI across diverse sectors.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceDetail = ({ items }) => (
  <ul className="mt-4 space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-center text-[11px] text-text-muted">
        <ChevronRight size={12} className="text-brand-purple mr-2 shrink-0" />
        {item}
      </li>
    ))}
  </ul>
);

const ServiceCard = ({ icon: Icon, title, description, items, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 rounded-2xl bg-[#111] border border-border-subtle group hover:border-brand-purple/40 transition-all duration-500"
  >
    <div className="w-10 h-10 rounded-lg bg-[#1F1F1F] flex items-center justify-center mb-6 group-hover:bg-brand-purple group-hover:text-white transition-all duration-500 text-brand-purple">
      <Icon size={20} />
    </div>
    <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">{title}</h3>
    <p className="text-xs text-text-muted group-hover:text-slate-300 transition-colors leading-[1.5] mb-4">
      {description}
    </p>
    <ServiceDetail items={items} />
  </motion.div>
);

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-16">
    <motion.p 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-xs uppercase tracking-[2px] font-bold text-slate-600 mb-4"
    >
      {subtitle}
    </motion.p>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-display font-light text-white leading-tight tracking-tight"
    >
      {children}
    </motion.h2>
  </div>
);

const ExperienceItem = ({ year, title, company }) => (
  <div className="flex gap-8 group pb-8 border-b border-white/5 last:border-0 pt-8 first:pt-0">
    <span className="text-sm font-bold text-slate-500 group-hover:text-brand-purple transition-colors shrink-0 pt-1">{year}</span>
    <div>
      <h4 className="text-xl font-bold text-white mb-1 group-hover:text-brand-purple transition-colors">{title}</h4>
      <p className="text-slate-400">{company}</p>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="font-sans min-h-screen flex flex-col md:flex-row">
      {/* Sidebar for Desktop */}
      <aside className="hidden lg:flex w-[320px] h-screen sticky top-0 bg-brand-dark sidebar-border flex-col justify-between p-12 shrink-0 overflow-y-auto">
        <div className="profile-section">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[2px] font-bold text-brand-purple mb-4"
          >
            Available for freelance projects on Fiverr & Upwork
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-display font-light text-white leading-tight mb-2"
          >
            Maryam <br /> Khan
          </motion.h1>
          <p className="text-sm text-text-muted mb-12">Digital Marketing Specialist</p>

          <nav>
            <ul className="space-y-6">
              {[
                { name: "Introduction", href: "#home" },
                { name: "Services", href: "#services" },
                { name: "Case Studies", href: "#projects" },
                { name: "Experience", href: "#about" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-[12px] uppercase tracking-[1px] text-slate-500 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="contact-block-mini">
           <div className="bg-[#141414] p-6 border border-border-subtle rounded-2xl">
              <div className="text-[10px] text-text-muted uppercase tracking-[1px] mb-2 font-bold">Direct Email</div>
              <a href="mailto:dr.mk25004@gmail.com" className="text-sm text-white font-medium mb-4 block overflow-hidden text-ellipsis whitespace-nowrap hover:text-brand-purple transition-colors">dr.mk25004@gmail.com</a>
              <a href="#contact" className="w-full block py-3 bg-brand-purple text-center text-white text-xs font-bold rounded-lg hover:bg-white hover:text-brand-purple transition-all">
                Let's Talk Strategy
              </a>
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 overflow-x-hidden">
        <Navbar />
        
        <main>
          <HeroSection />

        {/* About Section */}
        <section id="about" className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square glass rounded-[3rem] p-10 flex flex-col justify-center">
                <h3 className="text-7xl font-display font-bold text-brand-purple mb-4">GO!</h3>
                <p className="text-2xl text-white font-medium mb-8 text-gradient">Result-Driven Strategy</p>
                <div className="space-y-4">
                  {["Performance Focus", "E-commerce Optimization", "Search Dominance"].map((item) => (
                    <div key={item} className="flex items-center text-slate-400">
                      <CheckCircle2 className="text-brand-purple mr-3" size={20} />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-purple rounded-full flex items-center justify-center text-white text-3xl font-light border-8 border-brand-dark">
                MK
              </div>
            </motion.div>

            <div>
              <SectionHeading subtitle="Professional Profile">About Me</SectionHeading>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light italic border-l-2 border-brand-purple pl-6">
                "Strategy, performance, and measurable results are the pillars of every successful campaign."
              </p>
              <p className="text-slate-400 mb-6 leading-relaxed">
                I am a results-driven Digital Marketing Specialist with expertise in SEO, e-commerce optimization, and paid advertising. 
              </p>
              <p className="text-slate-400 mb-10 leading-relaxed">
                I focus on helping businesses grow their online presence, improve search rankings, and convert visitors into paying customers. Every brand has a unique story; I ensure it's told to the right audience at the right time.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                  <h4 className="text-2xl font-bold text-white mb-1">SEO</h4>
                  <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold">Growth Strategy</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                  <h4 className="text-2xl font-bold text-white mb-1">E-com</h4>
                  <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold">Performance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionHeading subtitle="Expert Solutions">Core Services</SectionHeading>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard 
                 icon={Search} 
                 title="SEO Growth Strategy" 
                 description="Improve rankings and visibility with data-backed search solutions."
                 items={["Keyword Research", "On-page Optimization", "Technical SEO Basics", "Content Optimization"]}
                 delay={0.1}
              />
              <ServiceCard 
                 icon={Share2} 
                 title="E-com Optimization" 
                 description="High-converting product listings for diverse marketplaces."
                 items={["Shopify / Amazon / Daraz Listings", "SEO-based descriptions", "High-converting titles & tags"]}
                 delay={0.2}
              />
              <ServiceCard 
                 icon={Target} 
                 title="Performance Ads" 
                 description="Scaling revenue through precision audience targeting."
                 items={["Facebook Ads Campaigns", "Google Ads Management", "Audience Optimization"]}
                 delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-center text-xs uppercase tracking-[4px] font-bold text-slate-500 mb-12">Industry Expertise</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "SEO Strategy", "Content Writing", "Keyword Research",
                "Facebook Ads", "Google Ads", "Product Listing",
                "E-commerce Optimization", "Copywriting"
              ].map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 bg-[#141414] border border-border-subtle rounded-xl text-xs font-bold text-white hover:border-brand-purple/50 transition-all cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <SectionHeading subtitle="Success Stories">Selected Work</SectionHeading>
              <a href="#" className="mb-6 flex items-center text-slate-300 hover:text-brand-purple transition-colors font-bold group">
                View All Case Studies <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Tech Blog SEO Growth Strategy",
                  category: "SEO Strategy",
                  image: "https://picsum.photos/seed/seo/1000/700",
                  description: "Optimized blog content using targeted keywords to improve search rankings and organic traffic."
                },
                {
                  title: "Product Listing Optimization",
                  category: "E-commerce Growth",
                  image: "https://picsum.photos/seed/ecom/1000/700",
                  description: "Created SEO-friendly product descriptions and optimized listings to increase conversions for e-commerce brands."
                },
                {
                  title: "Lead Generation via Facebook Ads",
                  category: "Performance Marketing",
                  image: "https://picsum.photos/seed/ads/1000/700",
                  description: "Designed and executed ad campaigns focused on audience targeting and high-conversion optimization."
                }
              ].map((project, i) => (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[16/8] rounded-2xl overflow-hidden mb-8 relative border border-border-subtle bg-[#161616]">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-brand-purple opacity-50" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-all duration-700 opacity-20 group-hover:opacity-60 grayscale group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center flex-col p-8 bg-gradient-to-t from-[#0A0A0A] to-transparent">
                       <p className="text-brand-purple text-[10px] font-bold tracking-widest uppercase mb-2 group-hover:scale-110 transition-transform">{project.category}</p>
                       <h3 className="text-xl font-display font-medium text-white text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="bg-[#111] rounded-3xl p-10 md:p-20 border border-border-subtle overflow-hidden relative">
              <div className="grid md:grid-cols-2 gap-20">
                <div>
                  <SectionHeading subtitle="Ready to grow?">Let’s Grow Your Business Together 🚀</SectionHeading>
                  <p className="text-text-muted mb-10 leading-relaxed text-lg font-light">
                    I am ready to help you scale your online presence with proven digital marketing strategies. Reach out for a custom consultation.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-[#141414] p-5 border border-border-subtle rounded-xl flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                        <Mail size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] text-text-muted uppercase tracking-[1px] font-bold">Direct Email</div>
                        <a href="mailto:dr.mk25004@gmail.com" className="text-sm text-white font-medium hover:text-brand-purple transition-colors italic">dr.mk25004@gmail.com</a>
                      </div>
                    </div>
                    <div className="bg-[#141414] p-5 border border-border-subtle rounded-xl flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                        <Linkedin size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] text-text-muted uppercase tracking-[1px] font-bold">Network</div>
                        <a href="https://www.linkedin.com/in/maryamkhan-digitalmarketing" target="_blank" rel="noopener noreferrer" className="text-sm text-white font-medium italic underline underline-offset-4 decoration-brand-purple/40 hover:text-brand-purple transition-colors">
                          linkedin.com/in/maryamkhan-digitalmarketing
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Your Name</label>
                      <input 
                        type="text" 
                        placeholder="Expert Partner" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-purple transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="hello@growth.com" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-purple transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Project Message</label>
                      <textarea 
                        rows={4} 
                        placeholder="Tell me about your business goals..." 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-purple transition-colors resize-none"
                      />
                    </div>
                    <button className="w-full py-5 bg-brand-purple text-white font-bold rounded-xl hover:bg-white hover:text-brand-purple transition-all shadow-lg shadow-brand-purple/20">
                      Contact Me
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <div className="text-3xl font-display font-light text-white tracking-tighter mb-4">
              Maryam <span className="text-brand-purple font-bold">Khan</span>
            </div>
            <p className="text-text-muted max-w-sm">
              Helping high-growth startups scale their organic and paid acquisition channels through data-driven SEO strategies.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/maryamkhan-digitalmarketing" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 hover:text-brand-purple hover:border-brand-purple transition-all border border-white/10">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 hover:text-brand-purple hover:border-brand-purple transition-all border border-white/10">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 hover:text-brand-purple hover:border-brand-purple transition-all border border-white/10">
              <Share2 size={20} />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-slate-400 font-medium mb-1">&copy; 2026 Maryam Khan</p>
            <p className="text-xs text-slate-600 uppercase tracking-widest">Built with precision and purpose.</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
  );
}

