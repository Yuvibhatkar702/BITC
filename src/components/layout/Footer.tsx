import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050B14] text-slate-300 py-8 mt-auto relative overflow-hidden border-t border-slate-800/50">
      {/* Decorative gradient blur in background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]"></div>
        <div className="absolute -bottom-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-orange-500/10 blur-[120px]"></div>
      </div>

      <div className="container max-w-[1200px] mx-auto px-4 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12">
        
        {/* Brand Section */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="mb-4">
            <Image
              src="/logos.png"
              alt="BITC Logo"
              width={300}
              height={100}
              className="h-[80px] md:h-[90px] w-auto object-contain -ml-2"
            />
          </div>
          <p className="text-[15px] text-slate-400 leading-relaxed mb-4 max-w-sm font-medium">
            Empowering Future Professionals with Industry-Ready Skills. We bridge the gap between academic learning and industry requirements with cutting-edge tech education.
          </p>
          <div className="flex items-center gap-5 mt-auto">
            {[
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, href: "#" },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>, href: "#" },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>, href: "#" },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>, href: "#" }
            ].map((social, idx) => (
              <Link key={idx} href={social.href} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary/10 hover:text-primary hover:border-primary/30 hover:shadow-[0_0_20px_rgba(255,153,0,0.2)] hover:-translate-y-1 transition-all duration-300">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links & Programs */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-8 lg:ml-8">
          <div>
            <h4 className="font-bold text-white mb-4 text-[14px] uppercase tracking-widest opacity-90">Company</h4>
            <ul className="space-y-5 text-[15px] text-slate-400 font-medium">
              {['About Us', 'Courses', 'Admissions', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors relative group inline-block">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-[14px] uppercase tracking-widest opacity-90">Programs</h4>
            <ul className="space-y-5 text-[15px] text-slate-400 font-medium">
              {['Information Tech', 'Management', 'Designing'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors relative group inline-block">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-4 flex flex-col">
          <h4 className="font-bold text-white mb-4 text-[14px] uppercase tracking-widest opacity-90">Contact Us</h4>
          
          <ul className="space-y-4 text-[14px] text-slate-400 font-medium">
            <li>
              <a href="mailto:info@bitc.edu.in" className="hover:text-white transition-colors inline-block relative group">
                info@bitc.edu.in
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            </li>
            <li>
              <a href="tel:+919876543210" className="hover:text-white transition-colors inline-block relative group">
                +91 98765 43210
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="container max-w-[1200px] mx-auto px-4 lg:px-8 mt-6 relative z-10">
        <div className="pt-5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} BIZONANCE Industrial Training Centre. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
