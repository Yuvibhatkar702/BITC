import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  LayoutTemplate, PenTool, Video, Film, Clapperboard,
  GraduationCap, Clock, CheckCircle2, ArrowRight, Sparkles,
  Palette, Eye, Layers, Figma
} from "lucide-react";

const designCourses = [
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    duration: "6 Months",
    icon: LayoutTemplate,
    desc: "Design intuitive and beautiful user interfaces. Master user research, wireframing, prototyping, and design systems.",
    highlights: ["User Research & Personas", "Wireframing & Prototyping", "Figma & Adobe XD", "Design Systems & Handoff"],
    popular: true,
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    duration: "3 Months",
    icon: PenTool,
    desc: "Create stunning visual content for brands. Learn typography, color theory, branding, and layout design.",
    highlights: ["Adobe Photoshop & Illustrator", "Typography & Color Theory", "Brand Identity Design", "Print & Digital Media"],
    popular: true,
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    duration: "3 Months",
    icon: Video,
    desc: "Bring designs to life with motion. Learn animation principles, After Effects, and dynamic visual storytelling.",
    highlights: ["Adobe After Effects", "Animation Principles", "Kinetic Typography", "Visual Storytelling"],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    duration: "3 Months",
    icon: Film,
    desc: "Master professional video editing for film, social media, and corporate content using industry-standard tools.",
    highlights: ["Adobe Premiere Pro", "DaVinci Resolve", "Color Grading & Audio", "Social Media Video Content"],
  },
  {
    id: "animation",
    title: "Animation",
    duration: "6 Months",
    icon: Clapperboard,
    desc: "Create captivating 2D and 3D animations. Learn character design, storyboarding, and animation production pipelines.",
    highlights: ["2D & 3D Animation", "Character Design", "Storyboarding", "Animation Pipeline & Rigging"],
  },
];

export default function DesignCoursesPage() {
  return (
    <div className="flex flex-col min-h-screen text-[15px]">

      {/* Hero Banner */}
      <section className="relative w-full bg-slate-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
        <div className="container max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold mb-4">
            <Palette className="w-4 h-4" />
            <span>DESIGN</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
            Design Courses & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Certifications</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-[700px] leading-relaxed mb-8">
            Unleash your creativity with industry-focused design programs. Learn from professionals, build a stunning portfolio, and launch your design career.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>5 Specialized Programs</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Portfolio-Focused Training</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>100% Placement Assistance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Explore Design Programs</h2>
            <p className="text-gray-500 max-w-[600px] mx-auto text-lg">
              From UI/UX to animation — master creative skills that top agencies and studios demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designCourses.map((course) => {
              const Icon = course.icon;
              return (
                <Card key={course.id} className="group overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full relative hover:border-purple-400/40 hover:-translate-y-1">
                  {course.popular && (
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full z-10 shadow-sm">
                      Popular
                    </span>
                  )}

                  <div className="h-40 bg-gray-50 flex items-center justify-center border-b border-gray-100 relative overflow-hidden group-hover:bg-purple-50 transition-colors duration-300">
                    <Icon className="w-16 h-16 text-gray-300 group-hover:scale-110 group-hover:text-purple-500 transition-all duration-500" />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-[16px] font-bold text-slate-800 leading-snug mb-2 group-hover:text-purple-600 transition-colors">
                      {course.title}
                    </h3>

                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-purple-500">
                        <Sparkles className="w-3 h-3" />
                        Integrated with AI
                      </span>
                    </div>

                    <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                      {course.desc}
                    </p>

                    <div className="space-y-2 mb-5 flex-1">
                      {course.highlights.map((item, j) => (
                        <div key={j} className="flex items-center gap-2 text-[12px] text-gray-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-[12px] text-gray-400 mb-4 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>Certification</span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full rounded-lg text-slate-700 font-semibold border-gray-300 hover:bg-purple-500 hover:text-white hover:border-purple-500 cursor-pointer transition-colors duration-300 mt-auto">
                      View Program <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Design at BITC */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Learn Design at BITC?</h2>
            <p className="text-gray-500 max-w-[600px] mx-auto text-lg">
              Our design programs focus on building a professional portfolio alongside practical skill development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Portfolio Building", desc: "Graduate with a professional portfolio showcasing real client projects.", icon: Layers },
              { title: "Expert Mentors", desc: "Learn from senior designers working at top agencies and studios.", icon: GraduationCap },
              { title: "Industry Tools", desc: "Master industry-standard tools like Figma, Adobe CC, and more.", icon: Eye },
              { title: "Placement Support", desc: "Get end-to-end placement assistance at top design firms.", icon: ArrowRight },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-purple-400/30 hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-purple-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="container max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Create?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Join BITC and transform your creative passion into a professional design career.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="h-14 px-8 rounded-full bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)] text-white font-semibold flex items-center justify-center hover:bg-[linear-gradient(to_right,#ff9900_0%,#ffcc00_100%)] transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 text-lg">
              Enroll Now
            </Link>
            <Link href="/contact" className="h-14 px-8 rounded-full bg-white/10 text-white font-semibold flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all text-lg">
              Download Brochure
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
