import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Quote,
  BookOpen,
  Lightbulb,
  Users,
  Building2,
  GraduationCap,
  Sprout,
  Rocket,
  Target,
  TrendingUp,
  Globe,
} from "lucide-react";

export default function DirectorsMessagePage() {
  return (
    <div className="flex flex-col min-h-screen text-[15px]">

      {/* ── HERO ── */}
      <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-25 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />
        <div className="container max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Message from the Director</p>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
                A Vision for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Transformative Education</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every decision at BITC is driven by a single belief — that education should empower students to build meaningful careers, not just earn degrees.
              </p>
            </div>

            {/* Director Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-72 h-80 md:w-80 md:h-96 rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 bg-gray-100 relative">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=987&auto=format&fit=crop"
                    alt="Director"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl font-bold">Director</h3>
                    <p className="text-sm text-gray-300">BIZONANCE Industrial Training Centre</p>
                  </div>
                </div>
                {/* Decorative */}
                <div className="absolute -z-10 -bottom-4 -right-4 w-72 h-80 md:w-80 md:h-96 rounded-[2rem] border-2 border-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIRECTOR BIO ── */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Name", value: "To Be Announced" },
              { label: "Designation", value: "Director, BITC" },
              { label: "Qualification", value: "Industry Professional" },
              { label: "Experience", value: "15+ Years" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-lg font-bold text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WELCOME MESSAGE ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-[900px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 text-center">Why BITC Was Created</h2>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
            <p>
              I have spent over a decade working with industries and watching fresh graduates struggle—not because they lacked intelligence, but because they lacked exposure to the real world. The gap between what colleges teach and what companies expect has been growing every year.
            </p>
            <p>
              <strong>BITC was created to close that gap.</strong> We believe the future of education lies in practical, industry-integrated learning. Our students don't just attend classes—they work on live projects, interact with mentors from the industry, participate in workshops, and gain the confidence to perform from day one.
            </p>
            <p>
              The responsibility of building a career doesn't belong to the student alone. It is shared by educators, mentors, institutions, and industries. At BITC, we accept that responsibility and we take it seriously.
            </p>
            <p>
              The career opportunities in technology, data, AI, and digital business are immense. But students need the right guidance, the right skills, and the right platform. That is what BITC provides.
            </p>
          </div>
        </div>
      </section>

      {/* ── DIRECTOR'S BELIEFS ── */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent pointer-events-none" />
        <div className="container max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">What I Believe In</p>
            <h2 className="text-3xl md:text-4xl font-bold">Director&apos;s Beliefs</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Practical Learning", icon: BookOpen, desc: "Theory without practice is incomplete. Every program must include real-world application." },
              { title: "Innovation", icon: Lightbulb, desc: "Education must evolve with technology. We embrace AI, automation, and modern tools." },
              { title: "Leadership", icon: Rocket, desc: "We don't just build employees—we build leaders who can drive change." },
              { title: "Industry Exposure", icon: Building2, desc: "Students must interact with the industry before entering it. Workshops, visits, and mentorship matter." },
              { title: "Student Success", icon: GraduationCap, desc: "Every decision at BITC is guided by one question: Does this help our students succeed?" },
              { title: "Lifelong Learning", icon: Sprout, desc: "The world changes fast. Professionals must continuously learn, adapt, and grow." },
            ].map((item, i) => (
              <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                <CardContent className="p-7">
                  <item.icon className="w-10 h-10 text-primary mb-5" />
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIRECTOR'S VISION ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Director&apos;s Vision</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Where BITC Is Heading</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary/5 border border-primary/10 rounded-[2rem] p-8 md:p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">In 5 Years</h3>
              <p className="text-gray-600 leading-relaxed">
                Become one of India's most recognized industry-integrated Training Centers with 50,000+ students trained, 500+ industry partnerships, and presence across multiple cities.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-[2rem] p-8 md:p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">In 10 Years</h3>
              <p className="text-gray-600 leading-relaxed">
                Build a global learning ecosystem with international certifications, AI-powered learning platforms, startup incubation, and research partnerships with leading universities.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-100 rounded-[2rem] p-8 md:p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Future Expansion</h3>
              <p className="text-gray-600 leading-relaxed">
                Launch innovation labs, digital campuses, entrepreneurship programs, and international partnerships to empower learners beyond borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE & SIGNATURE ── */}
      <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent pointer-events-none" />
        <div className="container max-w-[800px] mx-auto px-4 text-center relative z-10">
          <Quote className="w-14 h-14 text-primary/40 mx-auto mb-8" />
          <p className="text-2xl md:text-4xl font-bold leading-snug mb-12">
            "Education should prepare students for <span className="text-primary">life</span>, not just examinations."
          </p>

          {/* Signature */}
          <div className="border-t border-white/10 pt-10 inline-block">
            <p className="text-lg font-bold text-white">Director</p>
            <p className="text-sm text-gray-400">BIZONANCE Industrial Training Centre</p>
            <p className="text-primary font-bold italic mt-2 text-lg">— BITC</p>
          </div>
        </div>
      </section>
    </div>
  );
}
