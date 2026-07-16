import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  ExternalLink,
  Quote,
  ArrowRight,
  Code,
  Brain,
  Cloud,
  Shield,
  Palette,
  Briefcase,
  BarChart3,
  Database,
} from "lucide-react";

const mentors = [
  { name: "Rahul Sharma", role: "Senior Software Engineer", company: "Google", exp: "12+ Years", skills: ["React", "Node.js", "System Design"], area: "Full Stack Development", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop" },
  { name: "Priya Patel", role: "Data Science Lead", company: "Microsoft", exp: "10+ Years", skills: ["Python", "TensorFlow", "SQL"], area: "Data Science & AI", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop" },
  { name: "Amit Verma", role: "Cloud Architect", company: "Amazon Web Services", exp: "14+ Years", skills: ["AWS", "Azure", "Kubernetes"], area: "Cloud Computing", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop" },
  { name: "Sneha Gupta", role: "Cybersecurity Consultant", company: "Deloitte", exp: "9+ Years", skills: ["Penetration Testing", "SIEM", "Compliance"], area: "Cyber Security", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop" },
  { name: "Vikram Reddy", role: "UX Design Director", company: "Adobe", exp: "11+ Years", skills: ["Figma", "User Research", "Prototyping"], area: "UI/UX Design", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop" },
  { name: "Neha Joshi", role: "Business Strategy Head", company: "McKinsey", exp: "13+ Years", skills: ["Strategy", "Analytics", "Leadership"], area: "Business & Management", img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=987&auto=format&fit=crop" },
];

export default function OurMentorsPage() {
  return (
    <div className="flex flex-col min-h-screen text-[15px]">

      {/* ── HERO ── */}
      <section className="relative w-full bg-slate-900 text-white py-20 lg:py-28 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent pointer-events-none" />
        <div className="container max-w-[1000px] mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 text-primary font-bold rounded-full px-5 py-2 text-sm uppercase tracking-widest mb-8 backdrop-blur-sm border border-white/10">
            <Users className="w-4 h-4" />
            Our Mentors
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Learn from <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-300">Industry Experts</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-[700px] mx-auto leading-relaxed">
            At BITC, you learn directly from professionals who have built products, led teams, and solved real problems at the world's leading companies.
          </p>
        </div>
      </section>

      {/* ── WHY MENTORS MATTER ── */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="container max-w-[900px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Why Mentors Matter</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-[700px] mx-auto">
            The difference between knowing a concept and applying it in the real world is mentorship. Our mentors don't just teach—they share their experiences, failures, and lessons from years of working in the industry. That's the kind of education that transforms careers.
          </p>
        </div>
      </section>

      {/* ── MENTOR CARDS ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Meet Our Experts</h2>
            <p className="text-gray-600 max-w-[600px] mx-auto text-lg">Industry professionals who guide BITC students.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, i) => (
              <Card key={i} className="border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={mentor.img} alt={mentor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold">{mentor.name}</h3>
                    <p className="text-sm text-gray-300">{mentor.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{mentor.company}</span>
                    <span className="text-sm font-semibold text-gray-500">{mentor.exp}</span>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {mentor.skills.map((skill, j) => (
                        <span key={j} className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-slate-800">{mentor.area}</span>
                    <ExternalLink className="w-5 h-5 text-blue-600 cursor-pointer hover:scale-110 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS OF EXPERTISE ── */}
      <section className="py-16 md:py-24 bg-white border-y border-gray-100">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Areas of Expertise</h2>
            <p className="text-gray-600 max-w-[600px] mx-auto text-lg">Our mentors cover the most in-demand technology and business domains.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "AI & Machine Learning", icon: Brain, color: "bg-purple-500/10 text-purple-600" },
              { title: "Full Stack Development", icon: Code, color: "bg-blue-500/10 text-blue-600" },
              { title: "Data Science", icon: BarChart3, color: "bg-green-500/10 text-green-600" },
              { title: "Cloud Computing", icon: Cloud, color: "bg-sky-500/10 text-sky-600" },
              { title: "Cyber Security", icon: Shield, color: "bg-red-500/10 text-red-600" },
              { title: "UI/UX Design", icon: Palette, color: "bg-pink-500/10 text-pink-600" },
              { title: "Business & Strategy", icon: Briefcase, color: "bg-amber-500/10 text-amber-600" },
              { title: "Database & Backend", icon: Database, color: "bg-indigo-500/10 text-indigo-600" },
            ].map((area, i) => (
              <div key={i} className={`${area.color.split(" ")[0]} border rounded-2xl p-6 text-center hover:shadow-md transition-shadow`}>
                <area.icon className={`w-10 h-10 ${area.color.split(" ")[1]} mx-auto mb-3`} />
                <span className="font-bold text-slate-800 text-sm">{area.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENTOR PHILOSOPHY ── */}
      <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent pointer-events-none" />
        <div className="container max-w-[800px] mx-auto px-4 text-center relative z-10">
          <Quote className="w-14 h-14 text-primary/40 mx-auto mb-8" />
          <p className="text-2xl md:text-3xl font-bold leading-snug mb-8">
            "The best way to learn is from someone who has <span className="text-primary">already walked the path</span> you want to take."
          </p>
          <p className="text-gray-400 text-lg">— Mentor Philosophy at BITC</p>
        </div>
      </section>

      {/* ── BECOME A MENTOR CTA ── */}
      <section className="py-20 bg-white">
        <div className="container max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Become a Mentor</h2>
          <p className="text-xl text-gray-600 mb-10">
            Are you an industry professional who wants to give back? Join BITC as a mentor and shape the careers of the next generation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="h-14 px-8 rounded-full bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)] text-white font-semibold flex items-center gap-2 justify-center hover:shadow-xl transition-all text-lg">
              Apply as Mentor <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="h-14 px-8 rounded-full bg-white text-slate-900 font-semibold flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-all text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
