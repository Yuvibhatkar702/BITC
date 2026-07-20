import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Code, Database, Coffee, Terminal, BrainCircuit, BarChart,
  ShieldCheck, Cloud, GraduationCap, Clock, CheckCircle2,
  ArrowRight, Monitor, Sparkles
} from "lucide-react";

const itCourses = [
  {
    id: "full-stack",
    title: "Full Stack Development",
    duration: "6 Months",
    icon: Code,
    desc: "Master front-end and back-end development with modern frameworks. Build complete web applications from scratch.",
    highlights: ["React, Node.js, Express", "MongoDB & SQL Databases", "REST APIs & Authentication", "Deployment & DevOps Basics"],
    popular: true,
  },
  {
    id: "mern-stack",
    title: "MERN Stack Development",
    duration: "6 Months",
    icon: Database,
    desc: "Specialize in the MERN stack — MongoDB, Express, React, and Node.js — the most in-demand tech stack.",
    highlights: ["MongoDB & Mongoose", "Express.js Backend", "React.js & Redux", "Full Project Deployment"],
    popular: true,
  },
  {
    id: "java-development",
    title: "Java Development",
    duration: "6 Months",
    icon: Coffee,
    desc: "Learn enterprise-grade Java development with Spring Boot, microservices, and scalable backend systems.",
    highlights: ["Core Java & OOP", "Spring Boot & MVC", "Microservices Architecture", "Hibernate & JPA"],
  },
  {
    id: "python-programming",
    title: "Python Programming",
    duration: "3 Months",
    icon: Terminal,
    desc: "Start your programming journey with Python — from basics to advanced scripting, automation, and web development.",
    highlights: ["Python Fundamentals", "Django / Flask Framework", "Automation & Scripting", "API Development"],
  },
  {
    id: "ai-machine-learning",
    title: "AI & Machine Learning",
    duration: "6 Months",
    icon: BrainCircuit,
    desc: "Dive into artificial intelligence, neural networks, and machine learning algorithms with real-world projects.",
    highlights: ["Supervised & Unsupervised Learning", "Deep Learning & Neural Networks", "NLP & Computer Vision", "TensorFlow & PyTorch"],
    popular: true,
  },
  {
    id: "data-science",
    title: "Data Science",
    duration: "6 Months",
    icon: BarChart,
    desc: "Transform raw data into actionable insights. Learn data analysis, visualization, and predictive modeling.",
    highlights: ["Data Analysis with Pandas", "Data Visualization", "Statistical Modeling", "Power BI / Tableau"],
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    duration: "6 Months",
    icon: ShieldCheck,
    desc: "Protect organizations from cyber threats. Learn ethical hacking, network security, and compliance frameworks.",
    highlights: ["Ethical Hacking", "Network Security", "Penetration Testing", "Security Compliance"],
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    duration: "6 Months",
    icon: Cloud,
    desc: "Master cloud platforms like AWS, Azure, and GCP. Learn to design, deploy, and manage scalable cloud infrastructure.",
    highlights: ["AWS / Azure / GCP", "Cloud Architecture", "Serverless & Containers", "CI/CD Pipelines"],
  },
];

export default function ITCoursesPage() {
  return (
    <div className="flex flex-col min-h-screen text-[15px]">

      {/* Hero Banner */}
      <section className="relative w-full bg-slate-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-4">
            <Monitor className="w-4 h-4" />
            <span>INFORMATION TECHNOLOGY</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
            IT Courses & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300">Certifications</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-[700px] leading-relaxed mb-8">
            Industry-focused IT programs designed by experts. Master in-demand technologies, build real projects, and launch your tech career with confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>8 Specialized Programs</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Industry Expert Mentors</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>100% Placement Assistance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Explore Our IT Programs</h2>
            <p className="text-gray-500 max-w-[600px] mx-auto text-lg">
              Choose from our comprehensive range of IT courses, each integrated with AI and designed for real-world readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {itCourses.map((course, i) => {
              const Icon = course.icon;
              return (
                <Card key={course.id} className="group overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full relative hover:border-primary/40 hover:-translate-y-1">
                  {/* Popular Badge */}
                  {course.popular && (
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full z-10 shadow-sm">
                      Popular
                    </span>
                  )}

                  {/* Icon Section */}
                  <div className="h-40 bg-gray-50 flex items-center justify-center border-b border-gray-100 relative overflow-hidden group-hover:bg-primary/5 transition-colors duration-300">
                    <Icon className="w-16 h-16 text-gray-300 group-hover:scale-110 group-hover:text-primary transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-[16px] font-bold text-slate-800 leading-snug mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>

                    {!course.title.includes("AI") && (
                      <div className="mb-3">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#ff9900]">
                          <Sparkles className="w-3 h-3" />
                          Integrated with AI
                        </span>
                      </div>
                    )}

                    <p className="text-[13px] text-gray-500 leading-relaxed mb-4">
                      {course.desc}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-5 flex-1">
                      {course.highlights.map((item, j) => (
                        <div key={j} className="flex items-center gap-2 text-[12px] text-gray-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Meta */}
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

                    {/* CTA */}
                    <Button variant="outline" className="w-full rounded-lg text-slate-700 font-semibold border-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 cursor-pointer transition-colors duration-300 mt-auto">
                      View Program <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why IT at BITC */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Learn IT at BITC?</h2>
            <p className="text-gray-500 max-w-[600px] mx-auto text-lg">
              Our IT programs go beyond theory — every course is built around industry practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Live Projects", desc: "Work on real-world projects that mirror actual industry challenges.", icon: Code },
              { title: "Expert Mentors", desc: "Learn directly from experienced IT professionals and engineers.", icon: GraduationCap },
              { title: "Industry Certifications", desc: "Earn recognized certifications that strengthen your resume.", icon: CheckCircle2 },
              { title: "Placement Support", desc: "Get end-to-end placement assistance including interview prep.", icon: ArrowRight },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Start Your IT Career?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Join thousands of students who have launched successful tech careers through BITC.
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
