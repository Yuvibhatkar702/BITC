import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Heart,
  TrendingUp,
  BookOpen,
  Shield,
  Coffee,
  Users,
  ArrowRight,
  CheckCircle2,
  Upload,
  Quote,
  MapPin,
  Clock,
} from "lucide-react";

const openings = [
  { title: "Faculty – Full Stack Development", type: "Full-Time", location: "On-Site", experience: "3+ Years" },
  { title: "Technical Trainer – Data Science", type: "Full-Time", location: "On-Site", experience: "2+ Years" },
  { title: "Software Developer", type: "Full-Time", location: "Hybrid", experience: "1+ Years" },
  { title: "HR Executive", type: "Full-Time", location: "On-Site", experience: "2+ Years" },
  { title: "Digital Marketing Specialist", type: "Full-Time", location: "Hybrid", experience: "1+ Years" },
  { title: "Placement Officer", type: "Full-Time", location: "On-Site", experience: "3+ Years" },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen text-[15px]">

      {/* ── HERO ── */}
      <section className="relative w-full bg-slate-900 text-white py-20 lg:py-28 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1170&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="container max-w-[1000px] mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 text-primary font-bold rounded-full px-5 py-2 text-sm uppercase tracking-widest mb-8 backdrop-blur-sm border border-white/10">
            <Briefcase className="w-4 h-4" />
            Careers
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-300">BITC Family</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-[700px] mx-auto leading-relaxed">
            Be part of a mission-driven team that is transforming education and empowering the next generation of industry professionals.
          </p>
        </div>
      </section>

      {/* ── WHY WORK WITH US ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Why Work With Us</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At BITC, we don't just build careers for our students—we build careers for our team too. We offer a collaborative, innovative environment where every team member contributes to meaningful educational impact.
              </p>
              <div className="space-y-4">
                {[
                  "Work on projects that directly impact students' careers",
                  "Collaborate with industry experts and professionals",
                  "Continuous learning and professional development",
                  "Be part of a fast-growing, mission-driven organization",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop" alt="Our Culture" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── EMPLOYEE BENEFITS ── */}
      <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Employee Benefits</h2>
            <p className="text-gray-600 max-w-[600px] mx-auto text-lg">We invest in our people.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Competitive Salary", icon: TrendingUp, desc: "Industry-standard compensation with performance bonuses.", color: "bg-green-500/10 text-green-600" },
              { title: "Learning & Development", icon: BookOpen, desc: "Access to courses, certifications, and conferences.", color: "bg-blue-500/10 text-blue-600" },
              { title: "Career Growth", icon: TrendingUp, desc: "Clear career paths with mentorship and promotion opportunities.", color: "bg-purple-500/10 text-purple-600" },
              { title: "Health & Wellness", icon: Heart, desc: "Comprehensive health insurance and wellness programs.", color: "bg-red-500/10 text-red-600" },
              { title: "Flexible Environment", icon: Coffee, desc: "Work-life balance with flexible hours and hybrid options.", color: "bg-amber-500/10 text-amber-600" },
              { title: "Team Culture", icon: Users, desc: "A supportive, inclusive, and collaborative work culture.", color: "bg-primary/10 text-primary" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition-shadow group">
                <div className={`w-14 h-14 rounded-2xl ${item.color.split(" ")[0]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-7 h-7 ${item.color.split(" ")[1]}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRENT OPENINGS ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Current Openings</h2>
            <p className="text-gray-600 max-w-[600px] mx-auto text-lg">Explore roles that match your expertise.</p>
          </div>

          <div className="space-y-4 max-w-[900px] mx-auto">
            {openings.map((job, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:shadow-md hover:border-primary/20 transition-all">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                      <Briefcase className="w-3.5 h-3.5" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                      <MapPin className="w-3.5 h-3.5" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                      <Clock className="w-3.5 h-3.5" /> {job.experience}
                    </span>
                  </div>
                </div>
                <Link href="/contact" className="px-6 py-2.5 rounded-full bg-primary/10 text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-colors whitespace-nowrap">
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECRUITMENT PROCESS ── */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container max-w-[1000px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recruitment Process</h2>
            <p className="text-gray-400 text-lg">A simple, transparent hiring journey.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
            {[
              { step: "Apply", desc: "Submit your resume" },
              { step: "Screening", desc: "Profile review" },
              { step: "Interview", desc: "Technical & HR round" },
              { step: "Offer", desc: "Receive your offer" },
              { step: "Join", desc: "Welcome aboard!" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                    <span className="text-primary font-extrabold text-lg">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h4 className="font-bold text-white mb-1">{item.step}</h4>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden md:block w-12 h-0.5 bg-white/20 mx-2" />
                )}
                {i < 4 && (
                  <div className="md:hidden h-8 w-0.5 bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Employee Testimonials</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Ananya Mehta", role: "Faculty – Data Science", quote: "Working at BITC has been the most rewarding experience. I get to shape careers and learn alongside brilliant students every day." },
              { name: "Rohan Singh", role: "Software Developer", quote: "The culture here is incredible. Innovation is encouraged, and every team member's contribution is valued." },
              { name: "Kavitha Rao", role: "Placement Officer", quote: "Seeing our students land their dream jobs is the best part of my role. BITC truly cares about outcomes." },
            ].map((t, i) => (
              <Card key={i} className="border-gray-100 shadow-sm">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-gray-600 leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLY CTA ── */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-[800px] mx-auto px-4 text-center">
          <Upload className="w-14 h-14 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Ready to Join Us?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Send us your resume and let's explore how you can contribute to BITC's mission.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="h-14 px-8 rounded-full bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)] text-white font-semibold flex items-center gap-2 justify-center hover:shadow-xl transition-all text-lg">
              Apply Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="h-14 px-8 rounded-full bg-white text-slate-900 font-semibold flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-all text-lg">
              Contact HR
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
