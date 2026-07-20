import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  TrendingUp, PieChart, Landmark, Users, BadgeDollarSign,
  GraduationCap, Clock, CheckCircle2, ArrowRight, Sparkles,
  LineChart, Target, Briefcase, BarChart
} from "lucide-react";

const managementCourses = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    duration: "3 Months",
    icon: TrendingUp,
    desc: "Master SEO, social media marketing, Google Ads, content strategy, and analytics to drive business growth online.",
    highlights: ["SEO & SEM Strategies", "Social Media Marketing", "Google Ads & Analytics", "Content & Email Marketing"],
    popular: true,
  },
  {
    id: "business-analytics",
    title: "Business Analytics",
    duration: "6 Months",
    icon: PieChart,
    desc: "Turn data into business decisions. Learn data analysis, visualization, and strategic insights for modern enterprises.",
    highlights: ["Data Analysis & Reporting", "Excel & SQL for Business", "Power BI / Tableau", "Predictive Analytics"],
    popular: true,
  },
  {
    id: "finance",
    title: "Finance",
    duration: "6 Months",
    icon: Landmark,
    desc: "Build expertise in financial planning, accounting, investment analysis, and corporate finance management.",
    highlights: ["Financial Planning & Analysis", "Accounting Fundamentals", "Investment & Portfolio Mgmt", "Corporate Finance"],
  },
  {
    id: "hr-management",
    title: "Human Resources (HR)",
    duration: "3 Months",
    icon: Users,
    desc: "Learn modern HR practices — from talent acquisition and employee engagement to payroll and compliance.",
    highlights: ["Talent Acquisition", "Employee Engagement", "Payroll & Compliance", "HR Analytics"],
  },
  {
    id: "sales-management",
    title: "Sales Management",
    duration: "3 Months",
    icon: BadgeDollarSign,
    desc: "Develop winning sales strategies, negotiation skills, CRM management, and customer relationship expertise.",
    highlights: ["Sales Strategy & Planning", "CRM & Lead Management", "Negotiation Skills", "Customer Relationship Mgmt"],
  },
];

export default function ManagementCoursesPage() {
  return (
    <div className="flex flex-col min-h-screen text-[15px]">

      {/* Hero Banner */}
      <section className="relative w-full bg-slate-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
        <div className="container max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold mb-4">
            <Briefcase className="w-4 h-4" />
            <span>MANAGEMENT</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
            Management Courses & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Certifications</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-[700px] leading-relaxed mb-8">
            Industry-driven management programs to build business acumen, leadership skills, and strategic thinking for today's competitive market.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>5 Specialized Programs</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>Industry Expert Mentors</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>100% Placement Assistance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Explore Management Programs</h2>
            <p className="text-gray-500 max-w-[600px] mx-auto text-lg">
              Build leadership skills and business expertise with our industry-integrated management courses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementCourses.map((course) => {
              const Icon = course.icon;
              return (
                <Card key={course.id} className="group overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full relative hover:border-blue-400/40 hover:-translate-y-1">
                  {course.popular && (
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full z-10 shadow-sm">
                      Popular
                    </span>
                  )}

                  <div className="h-40 bg-gray-50 flex items-center justify-center border-b border-gray-100 relative overflow-hidden group-hover:bg-blue-50 transition-colors duration-300">
                    <Icon className="w-16 h-16 text-gray-300 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-500" />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-[16px] font-bold text-slate-800 leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>

                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-500">
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
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
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

                    <Button variant="outline" className="w-full rounded-lg text-slate-700 font-semibold border-gray-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 cursor-pointer transition-colors duration-300 mt-auto">
                      View Program <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Management at BITC */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Learn Management at BITC?</h2>
            <p className="text-gray-500 max-w-[600px] mx-auto text-lg">
              Our management programs combine real business case studies with expert-led mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Real Case Studies", desc: "Analyze and solve actual business problems from leading companies.", icon: Target },
              { title: "Expert Mentors", desc: "Learn directly from industry leaders and senior management professionals.", icon: GraduationCap },
              { title: "Industry Certifications", desc: "Earn recognized certifications that accelerate your management career.", icon: CheckCircle2 },
              { title: "Placement Support", desc: "Get end-to-end placement assistance including interview preparation.", icon: ArrowRight },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-400/30 hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-blue-500" />
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Lead?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Join BITC and build the business skills that top companies are looking for.
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
