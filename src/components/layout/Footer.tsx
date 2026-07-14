import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 py-16 mt-auto relative overflow-hidden border-t border-slate-800">
      {/* Decorative gradient blur in background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[50%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]"></div>
        <div className="absolute -bottom-[50%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px]"></div>
      </div>

      <div className="container max-w-[1400px] mx-auto px-4 lg:px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Brand Section */}
        <div className="lg:col-span-4">
          <div className="mb-6">
            <Image
              src="/logos.png"
              alt="BITC Logo"
              width={240}
              height={80}
              className="h-[60px] w-auto object-contain -ml-2"
            />
          </div>
          <p className="text-[15px] text-gray-400 leading-relaxed mb-8 max-w-sm">
            Empowering Future Professionals with Industry-Ready Skills. We bridge the gap between academic learning and industry requirements.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 border border-slate-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 border border-slate-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 border border-slate-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 border border-slate-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2 lg:ml-8">
          <h4 className="font-bold text-white mb-6 text-[16px] uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Quick Links
          </h4>
          <ul className="space-y-4 text-[15px] text-gray-400 font-medium">
            <li><Link href="/about" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> About Us</Link></li>
            <li><Link href="/courses" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Courses</Link></li>
            <li><Link href="/admissions" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Admissions</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Contact</Link></li>
          </ul>
        </div>

        {/* Programs */}
        <div className="lg:col-span-3">
          <h4 className="font-bold text-white mb-6 text-[16px] uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Programs
          </h4>
          <ul className="space-y-4 text-[15px] text-gray-400 font-medium">
            <li><Link href="/courses/it" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Information Technology</Link></li>
            <li><Link href="/courses/engineering" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Engineering</Link></li>
            <li><Link href="/courses/management" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Management</Link></li>
            <li><Link href="/courses/design" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Designing</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-3">
          <h4 className="font-bold text-white mb-6 text-[16px] uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Contact Us
          </h4>
          <ul className="space-y-5 text-[15px] text-gray-400 font-medium">
            <li className="flex items-start gap-3 group">
              <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <a href="mailto:info@bitc.edu.in" className="hover:text-white transition-colors">info@bitc.edu.in</a>
            </li>
            <li className="flex items-start gap-3 group">
              <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
            </li>
            <li className="flex items-start gap-3 group">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-white transition-colors">123 Education Lane, Tech District, City - 400001</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="container max-w-[1400px] mx-auto px-4 lg:px-6 mt-16 relative z-10">
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} BIZONANCE Industrial Training Centre. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
