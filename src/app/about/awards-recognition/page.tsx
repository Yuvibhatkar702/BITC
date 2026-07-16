import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Trophy,
  Award,
  Star,
  Users,
  Building2,
  TrendingUp,
  Newspaper,
  GraduationCap,
  Target,
  ArrowRight,
} from "lucide-react";

export default function AwardsRecognitionPage() {
  return (
    <div className="flex flex-col min-h-screen text-[15px]">

      {/* ── HERO ── */}
      <section className="relative w-full bg-white py-20 lg:py-28 overflow-hidden flex items-center justify-center border-b border-gray-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-25 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />
        <div className="container max-w-[1000px] mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold rounded-full px-5 py-2 text-sm uppercase tracking-widest mb-8">
            <Trophy className="w-4 h-4" />
            Awards &amp; Recognition
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.1]">
            Celebrating <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-[700px] mx-auto leading-relaxed">
            Our achievements reflect the dedication of our students, mentors, and industry partners in building a world-class learning ecosystem.
          </p>
        </div>
      </section>

      {/* ── AWARDS GRID ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Awards</h2>
            <p className="text-gray-600 max-w-[600px] mx-auto text-lg">Recognized for excellence in education and industry collaboration.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Best Industry Training Centre", org: "National Education Awards", year: "2024", icon: Trophy },
              { title: "Excellence in Practical Learning", org: "EduTech India Summit", year: "2024", icon: Award },
              { title: "Top Emerging Training Partner", org: "Industry Connect Forum", year: "2023", icon: Star },
              { title: "Innovation in Education", org: "Digital India Awards", year: "2023", icon: TrendingUp },
              { title: "Best Placement Record", org: "Campus Connect Awards", year: "2024", icon: Users },
              { title: "Industry Partnership Excellence", org: "Corporate Training Awards", year: "2024", icon: Building2 },
            ].map((award, i) => (
              <Card key={i} className="border-gray-100 hover:shadow-xl transition-shadow group overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                    <award.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{award.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{award.org}</p>
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1 rounded-full">{award.year}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDENT & PLACEMENT ACHIEVEMENTS ── */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Student Achievements */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Student Achievements</h2>
              </div>
              <div className="space-y-4">
                {[
                  "Multiple students placed at Fortune 500 companies",
                  "National-level hackathon winners",
                  "Student-led startups launched during the program",
                  "Published research papers and technical blogs",
                  "Industry certifications with 95%+ pass rate",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Placement Achievements */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Placement Achievements</h2>
              </div>
              <div className="space-y-4">
                {[
                  "95% placement support rate for eligible students",
                  "Average package growth of 40% year-over-year",
                  "Hiring partners from IT, consulting, and fintech",
                  "Pre-placement offers for top-performing students",
                  "Dedicated career guidance and interview prep",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <Star className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS & MEDIA ── */}
      <section className="py-16 md:py-24 bg-white border-y border-gray-100">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-[2rem] p-8 md:p-10 border border-blue-100">
              <Award className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Certifications</h3>
              <p className="text-gray-600 mb-6">Our programs are designed to help students earn industry-recognized certifications.</p>
              <ul className="space-y-3">
                {["Microsoft Certified", "AWS Cloud Practitioner", "Google Data Analytics", "CompTIA Security+", "Meta Front-End Developer"].map((cert, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                    <span className="font-medium">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 rounded-[2rem] p-8 md:p-10 border border-amber-100">
              <Newspaper className="w-12 h-12 text-amber-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Media Coverage</h3>
              <p className="text-gray-600 mb-6">BITC has been featured in leading education and technology media outlets.</p>
              <ul className="space-y-3">
                {["Education Times", "TechCrunch India", "Business Standard", "The Hindu Education", "YourStory"].map((media, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                    <span className="font-medium">{media}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUCCESS MILESTONES ── */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Success Milestones</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {[
              { number: "10,000+", label: "Students Trained" },
              { number: "300+", label: "Industry Partners" },
              { number: "95%", label: "Placement Support" },
              { number: "500+", label: "Live Projects" },
              { number: "100+", label: "Workshops" },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-extrabold text-primary mb-1">{stat.number}</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUTURE GOALS & CTA ── */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent pointer-events-none" />
        <div className="container max-w-[800px] mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Future Goals</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-[600px] mx-auto">
            We are just getting started. Our goal is to continue raising the bar for industry-integrated education in India and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/courses" className="h-14 px-8 rounded-full bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)] text-white font-semibold flex items-center gap-2 justify-center hover:shadow-xl transition-all text-lg">
              Explore Programs <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="h-14 px-8 rounded-full bg-white text-slate-900 font-semibold flex items-center justify-center hover:bg-gray-100 transition-all text-lg shadow-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
