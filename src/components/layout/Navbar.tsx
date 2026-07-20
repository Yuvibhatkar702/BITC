"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Search, ChevronDown, Monitor, Cpu, LineChart, PenTool,
  Sun, Snowflake, Factory, GraduationCap, Target, Handshake, 
  Trophy, BarChart, Briefcase, TrendingUp, Award, FileText, 
  Calendar, Image as ImageIcon, Download, HelpCircle, Building2, 
  Compass, MessageSquare, CheckCircle, Network, BookOpen, ArrowRight,
  Users
} from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="container max-w-[1400px] mx-auto flex h-[75px] items-center px-4 lg:px-6 w-full">

        {/* Left Section: Logo & Search */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos.png"
              alt="BITC Logo"
              width={300}
              height={100}
              className="h-[75px] w-auto object-contain"
              priority
            />
          </Link>


        </div>

        {/* Middle Section: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 ml-6 xl:ml-8 text-[14px] font-semibold text-[#191E27] h-full">

          {/* About */}
          <div className="relative group h-full flex items-center cursor-pointer">
            <span className="flex items-center hover:text-primary transition-colors">
              About <ChevronDown className="ml-1 h-3.5 w-3.5 text-gray-500 group-hover:rotate-180 transition-transform duration-300" />
            </span>
            <div className="absolute top-[75px] left-1/2 -translate-x-1/2 hidden group-hover:block w-[280px] bg-white border border-gray-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-2xl p-3 z-50 transition-all opacity-0 group-hover:opacity-100 animate-in fade-in slide-in-from-top-4 duration-300">
              {[
                { href: "/about", icon: Building2, title: "About BITC", desc: "Who we are" },
                { href: "/about/our-story", icon: BookOpen, title: "Our Story", desc: "Our journey so far" },
                { href: "/about/vision-mission", icon: Compass, title: "Vision & Mission", desc: "Our core purpose" },
                { href: "/about/directors-message", icon: MessageSquare, title: "Director's Message", desc: "Words from leadership" },

                { href: "/about/our-infrastructure", icon: Network, title: "Our Infrastructure", desc: "Our facilities" },
                { href: "/about/industry-partnerships", icon: Handshake, title: "Industry Partnerships", desc: "Our collaborations" },
                { href: "/about/our-mentors", icon: Users, title: "Our Mentors", desc: "Learn from the best" },
                { href: "/about/awards-recognition", icon: Trophy, title: "Awards & Recognition", desc: "Our achievements" },
                { href: "/about/careers", icon: Briefcase, title: "Careers", desc: "Join our team" },
              ].map((item, i) => (
                <Link key={i} href={item.href} className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-colors group/link">
                  <div className="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-slate-900 group-hover/link:text-primary transition-colors leading-tight">{item.title}</div>
                    <div className="text-[11px] text-gray-500 font-normal mt-0.5 leading-tight">{item.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Certification */}
          <div className="relative group h-full flex items-center cursor-pointer">
            <span className="flex items-center hover:text-primary transition-colors">
              Certification <ChevronDown className="ml-1 h-3.5 w-3.5 text-gray-500 group-hover:rotate-180 transition-transform duration-300" />
            </span>
            <div className="absolute top-[75px] left-1/2 -translate-x-1/2 hidden group-hover:block w-[280px] bg-white border border-gray-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-2xl p-3 z-50 transition-all opacity-0 group-hover:opacity-100 animate-in fade-in slide-in-from-top-4 duration-300">
              {[
                { href: "/courses/it", icon: Monitor, title: "IT Courses", desc: "Software, Data & Cloud" },
                { href: "/courses/management", icon: LineChart, title: "Management", desc: "Business & Strategy" },
                { href: "/courses/design", icon: PenTool, title: "Design Courses", desc: "UI/UX & Graphics" },
              ].map((item, i) => (
                <Link key={i} href={item.href} className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-colors group/link">
                  <div className="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-slate-900 group-hover/link:text-primary transition-colors leading-tight">{item.title}</div>
                    <div className="text-[11px] text-gray-500 font-normal mt-0.5 leading-tight">{item.desc}</div>
                  </div>
                </Link>
              ))}

            </div>
          </div>


          {/* Placements */}
          <div className="relative group h-full flex items-center cursor-pointer">
            <span className="flex items-center hover:text-primary transition-colors">
              Placements <ChevronDown className="ml-1 h-3.5 w-3.5 text-gray-500 group-hover:rotate-180 transition-transform duration-300" />
            </span>
            <div className="absolute top-[75px] left-1/2 -translate-x-1/2 hidden group-hover:block w-[280px] bg-white border border-gray-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-2xl p-3 z-50 transition-all opacity-0 group-hover:opacity-100 animate-in fade-in slide-in-from-top-4 duration-300">
              {[
                { href: "/placements/cell", icon: Target, title: "Placement Cell", desc: "Career guidance & support" },
                { href: "/placements/partners", icon: Handshake, title: "Hiring Partners", desc: "Top companies we work with" },
                { href: "/placements/success-stories", icon: Trophy, title: "Success Stories", desc: "Hear from our alumni" },
                { href: "/placements/statistics", icon: BarChart, title: "Placement Statistics", desc: "Our track record" },
              ].map((item, i) => (
                <Link key={i} href={item.href} className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-colors group/link">
                  <div className="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-slate-900 group-hover/link:text-primary transition-colors leading-tight">{item.title}</div>
                    <div className="text-[11px] text-gray-500 font-normal mt-0.5 leading-tight">{item.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Corporate */}
          <div className="relative group h-full flex items-center cursor-pointer">
            <span className="flex items-center hover:text-primary transition-colors">
              Corporate <ChevronDown className="ml-1 h-3.5 w-3.5 text-gray-500 group-hover:rotate-180 transition-transform duration-300" />
            </span>
            <div className="absolute top-[75px] left-1/2 -translate-x-1/2 hidden group-hover:block w-[280px] bg-white border border-gray-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-2xl p-3 z-50 transition-all opacity-0 group-hover:opacity-100 animate-in fade-in slide-in-from-top-4 duration-300">
              {[
                { href: "/corporate/training", icon: Briefcase, title: "Corporate Training", desc: "Customized team training" },
                { href: "/corporate/upskilling", icon: TrendingUp, title: "Employee Upskilling", desc: "Boost workforce skills" },
                { href: "/corporate/leadership", icon: Award, title: "Leadership Programs", desc: "Executive development" },
              ].map((item, i) => (
                <Link key={i} href={item.href} className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-colors group/link">
                  <div className="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-slate-900 group-hover/link:text-primary transition-colors leading-tight">{item.title}</div>
                    <div className="text-[11px] text-gray-500 font-normal mt-0.5 leading-tight">{item.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Partnership */}
          <div className="relative group h-full flex items-center cursor-pointer">
            <span className="flex items-center hover:text-primary transition-colors">
              Partnership <ChevronDown className="ml-1 h-3.5 w-3.5 text-gray-500 group-hover:rotate-180 transition-transform duration-300" />
            </span>
            <div className="absolute top-[75px] left-1/2 -translate-x-1/2 hidden group-hover:block w-[280px] bg-white border border-gray-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-2xl p-3 z-50 transition-all opacity-0 group-hover:opacity-100 animate-in fade-in slide-in-from-top-4 duration-300">
              {[
                { href: "/partnership/mou", icon: FileText, title: "MoU", desc: "Academic collaborations" },
                { href: "/partnership/workshops", icon: Users, title: "Workshops", desc: "Skill-building sessions" },
                { href: "/partnership/fdp", icon: GraduationCap, title: "Faculty Development", desc: "Training for educators" },
                { href: "/partnership/industrial-visits", icon: Building2, title: "Industrial Visits", desc: "Real-world exposure" },
              ].map((item, i) => (
                <Link key={i} href={item.href} className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-colors group/link">
                  <div className="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-slate-900 group-hover/link:text-primary transition-colors leading-tight">{item.title}</div>
                    <div className="text-[11px] text-gray-500 font-normal mt-0.5 leading-tight">{item.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="relative group h-full flex items-center cursor-pointer">
            <span className="flex items-center hover:text-primary transition-colors">
              Resources <ChevronDown className="ml-1 h-3.5 w-3.5 text-gray-500 group-hover:rotate-180 transition-transform duration-300" />
            </span>
            <div className="absolute top-[75px] left-1/2 -translate-x-1/2 hidden group-hover:block w-[280px] bg-white border border-gray-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-2xl p-3 z-50 transition-all opacity-0 group-hover:opacity-100 animate-in fade-in slide-in-from-top-4 duration-300">
              {[
                { href: "/resources/blog", icon: BookOpen, title: "Blog", desc: "Latest news & articles" },
                { href: "/resources/events", icon: Calendar, title: "Events", desc: "Upcoming webinars & meets" },
                { href: "/resources/gallery", icon: ImageIcon, title: "Gallery", desc: "Photos from our campus" },
                { href: "/resources/downloads", icon: Download, title: "Downloads", desc: "Brochures & materials" },
                { href: "/resources/faqs", icon: HelpCircle, title: "FAQs", desc: "Questions & answers" },
              ].map((item, i) => (
                <Link key={i} href={item.href} className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-colors group/link">
                  <div className="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-slate-900 group-hover/link:text-primary transition-colors leading-tight">{item.title}</div>
                    <div className="text-[11px] text-gray-500 font-normal mt-0.5 leading-tight">{item.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>



          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>

        </nav>

        {/* Right Section: Sign Up */}
        <div className="flex items-center ml-auto">
          <Link href="/login" className="inline-flex h-[38px] items-center justify-center rounded-md bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)] hover:bg-[linear-gradient(to_right,#ff9900_0%,#ffcc00_100%)] px-6 text-[14px] font-semibold text-white transition-colors">
            Sign Up
          </Link>
        </div>

      </div>
    </header>
  );
}
