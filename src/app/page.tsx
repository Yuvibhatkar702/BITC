import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, BookOpen, Building2, CheckCircle2, GraduationCap, Users, Briefcase, Star, Search, ChevronLeft, ChevronRight, PlayCircle, Shield, Clock, Award, TrendingUp, Sparkles, Target, Trophy, Monitor, Compass, UserCheck, Network, Code, Medal } from "lucide-react";
import FeaturedCertifications from "@/components/FeaturedCertifications";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-[15px]">



      {/* 1. Hero Section */}
      <section className="relative w-full bg-white py-8 lg:py-0 overflow-hidden min-h-[calc(100vh-140px)] flex items-center justify-center">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />

        <div className="container max-w-[1400px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">

          {/* Left Content */}
          <div className="flex-1 w-full">
            <h1 className="text-4xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 leading-[1.1]">
              Learn from Industry Experts. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Become an Industry Expert.</span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 mb-6 max-w-[540px] leading-relaxed">
              At BITC, you learn directly from experienced professionals, collaborate on live projects, gain real industry exposure, earn recognized certifications, and build the confidence to launch a successful career.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Link href="/courses" className="h-12 px-8 rounded-full bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)] text-white font-semibold flex items-center justify-center hover:bg-[linear-gradient(to_right,#ff9900_0%,#ffcc00_100%)] transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
                Explore Programs
              </Link>
              <Link href="/contact" className="h-12 px-8 rounded-full bg-white text-slate-700 font-semibold flex items-center justify-center border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all">
                Apply Now
              </Link>
            </div>

            {/* Goals */}
            <div className="mt-12 md:mt-16">
              <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Popular Goals</p>
              <div className="flex flex-wrap gap-2.5">
                {["Get Placed", "Become Industry Ready", "Build a Portfolio", "Learn from Experts"].map((goal, i) => (
                  <Link key={i} href="#" className="px-4 py-2 rounded-full border border-gray-200 text-[13px] font-medium text-gray-600 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all bg-white shadow-sm hover:shadow-md">
                    {goal}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image/Graphic */}
          <div className="flex-1 w-full relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative w-full max-w-[600px] lg:max-w-full xl:max-w-[750px] aspect-[4/3] lg:aspect-[16/10]">
              {/* Image */}
              <div className="w-full h-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10 bg-gray-50 relative group">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Professional presenting to a team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 border border-gray-200/50 rounded-[2rem] sm:rounded-[3rem] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trusted by Colleges & Companies */}
      <section className="py-5 border-b bg-gray-50 overflow-hidden">
        <div className="container max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">Trusted by 500+ Partners</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale">
            {["TCS", "Infosys", "Wipro", "Tech Mahindra", "HCL", "Cognizant"].map((company, i) => (
              <span key={i} className="text-lg font-black text-gray-800">{company}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose BITC */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-dark mb-4">Why Choose BITC?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-[16px]">We bridge the gap between academic learning and industry requirements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                title: "Industry-Focused Curriculum",
                icon: BookOpen,
                desc: "Certifications designed with real industry requirements in mind, ensuring you learn practical skills."
              },
              {
                title: "Learn from Industry Experts",
                icon: Users,
                desc: "Get trained by professionals who bring real-world knowledge into every classroom."
              },
              {
                title: "Hands-on Live Projects",
                icon: Briefcase,
                desc: "Work on real-world case studies to build a strong portfolio and practical experience."
              },
              {
                title: "Internship Opportunities",
                icon: Target,
                desc: "Gain valuable industry exposure through structured internships in real business environments."
              },
              {
                title: "Placement Assistance",
                icon: Trophy,
                desc: "Receive end-to-end placement support including mock interviews and job referrals."
              },
              {
                title: "Industry-Recognized Certifications",
                icon: Award,
                desc: "Earn certificates that validate your skills and make you competitive in the job market."
              },
              {
                title: "Modern Learning Environment",
                icon: Monitor,
                desc: "Learn in well-equipped computer labs with access to the latest software and tools."
              },
              {
                title: "Career-Focused Mentorship",
                icon: Compass,
                desc: "Mentors guide you throughout your learning journey to choose the right career path."
              }
            ].map((feature, i) => (
              <Card key={i} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow group bg-white">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-xl shrink-0 group-hover:bg-primary group-hover:-translate-y-1 transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold mb-1.5 leading-tight text-slate-900 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AI Readiness Section */}
      <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
        {/* Soft background accents */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-400/10 via-transparent to-transparent pointer-events-none" />

        <div className="container max-w-[1200px] mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Content */}
          <div className="flex-1 w-full text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-dark mb-4">
              Will <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)]">AI</span> get you <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)]">fired?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-[500px] mx-auto lg:mx-0 leading-relaxed">
              Don't let technology outpace you. At BITC, we solve the AI gap by integrating future-proof skills and hands-on projects into every curriculum—so you become irreplaceable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/courses" className="h-12 px-8 rounded-full bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)] text-white font-semibold flex items-center justify-center hover:bg-[linear-gradient(to_right,#ff9900_0%,#ffcc00_100%)] transition-all shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5 w-full sm:w-auto">
                Future-Proof Your Career <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Image/Graphic */}
          <div className="flex-1 w-full relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative w-full max-w-[2000px] lg:max-w-[110%] xl:max-w-[1000px] aspect-video">
              <div className="w-full h-full relative group flex items-center justify-center">
                <img
                  src="/ai-hands.png"
                  alt="A human hand reaching out towards a robot hand"
                  className="w-full h-full object-contain mix-blend-multiply scale-[1.5] md:scale-[1.8] lg:scale-[2] xl:scale-[2.2]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Certifications */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-dark mb-4">Featured Certifications</h2>
              <p className="text-gray-500 text-[16px]">Master the skills that top companies are looking for.</p>
            </div>
            <Link href="/certification" className="hidden md:inline-flex text-primary font-semibold text-[15px] hover:underline">
              View All Certifications <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <FeaturedCertifications />
        </div>
      </section>

      {/* 6. Scholarship Poster */}
      <section className="py-12 md:py-16 bg-white px-4">
        <div className="container max-w-[1200px] mx-auto bg-transparent relative overflow-hidden">
          {/* Decorative geometric patterns */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-100/60 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 px-6 py-16 md:py-20 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold mb-6 shadow-sm">
                <Medal className="w-4 h-4 text-orange-500" />
                BITC Merit Scholarship 2026
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                Up to <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)]">50% Scholarship</span><br />for Deserving Students.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium max-w-xl mx-auto md:mx-0">
                We believe financial constraints should never hold back true talent. Unlock your potential and let us fund your tech career journey.
              </p>

              <Link href="/scholarships" className="inline-flex h-14 items-center justify-center rounded-full bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)] px-8 text-lg font-extrabold text-white shadow-lg hover:shadow-xl hover:scale-105 hover:shadow-orange-500/20 transition-all duration-300">
                Check Eligibility Criteria <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="hidden md:flex w-full max-w-[500px] items-center justify-center relative">
              <div className="w-full h-[450px] relative z-10 hover:-translate-y-2 transition-transform duration-500">
                <img src="/student-grad-nobg.png" alt="Student in graduation gown" className="w-full h-full object-contain scale-[1.15]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Learning Process */}
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="container max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-dark mb-4">Learning Process</h2>
            <p className="text-gray-500 text-[16px]">Your step-by-step journey from enrollment to placement.</p>
          </div>

          <div className="relative max-w-6xl mx-auto px-4">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-8 left-16 right-16 h-0.5 bg-primary/20 -z-0" />

            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-2 md:gap-0 relative z-10">
              {[
                { title: "Enroll", icon: Users },
                { title: "Learn", icon: BookOpen },
                { title: "Practice", icon: Code },
                { title: "Live Project", icon: Briefcase },
                { title: "Internship", icon: Target },
                { title: "Certification", icon: Award },
                { title: "Placement Guidance", icon: Trophy }
              ].map((step, i, arr) => (
                <div key={i} className="flex flex-col items-center relative w-full md:w-32 group cursor-pointer">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-gray-100 shadow-sm text-primary mb-4 group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:scale-110 transition-all duration-300 relative z-10">
                    <step.icon className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>

                  <span className="font-semibold text-slate-800 text-[14px] text-center mb-2 md:mb-0 group-hover:text-primary transition-colors">
                    {step.title}
                  </span>

                  {/* Vertical Arrow for Mobile */}
                  {i < arr.length - 1 && (
                    <div className="md:hidden text-gray-300 my-2">
                      <ArrowRight className="w-6 h-6 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Renowned Faculty */}
      <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-100">
        <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-dark mb-2">Master your craft with renowned faculty</h2>
            <p className="text-[15px] text-gray-500 font-medium">Instructors</p>
            <div className="h-1 w-16 bg-primary mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Pramanth Raj Sinha",
                role: "Founder & Trustee",
                company: "Ashoka University",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
                bio: "Former McKinsey Partner, Co-Founder & Trustee of Ashoka University, and PhD holder in Mechanical Engineering.",
                linkedin: "#"
              },
              {
                name: "Prasad Kantamneni",
                role: "Founding Partner",
                company: "UXReactor",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
                bio: "Prasad Kantamneni, Founding Partner at UXReactor, is a designer and educator with expertise in UX design.",
                linkedin: "#"
              },
              {
                name: "Siddharth Deshmukh",
                role: "Professor, MICA",
                company: "MICA",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
                bio: "Siddharth Deshmukh is an educator, consultant, and content creator with 25+ years of experience in digital.",
                linkedin: "#"
              },
              {
                name: "Dr. Anjali Sharma",
                role: "Lead Data Scientist",
                company: "Google",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
                bio: "Expert in Artificial Intelligence and Machine Learning, with a decade of experience leading global data teams.",
                linkedin: "#"
              }
            ].map((faculty, i) => (
              <Card key={i} className="!p-0 !gap-0 border-0 shadow-xl shadow-gray-200/50 overflow-hidden bg-white rounded-2xl flex flex-col h-full">
                {/* Image Section */}
                <div className="h-[280px] w-full bg-slate-900 relative overflow-hidden shrink-0">
                  <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover object-top opacity-100" />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent opacity-90" />

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xl">
                        <Briefcase className="w-3 h-3 text-primary" />
                        {faculty.company}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">{faculty.name}</h3>
                    <p className="text-[14px] text-gray-300 font-medium">{faculty.role}</p>
                  </div>
                </div>

                {/* Bottom Content (Bio, LinkedIn) */}
                <div className="p-6 flex flex-col flex-1 bg-white relative">
                  <div className="w-8 h-1 bg-primary rounded-full mb-5" />

                  <p className="text-[14px] text-gray-600 mb-6 leading-relaxed flex-1">
                    "{faculty.bio}" <span className="font-semibold text-primary cursor-pointer hover:text-primary/80 transition-colors ml-1 text-[13px]">Read More</span>
                  </p>

                  <Link href={faculty.linkedin} className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-gray-50 text-slate-700 font-bold text-[14px] hover:bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)] hover:text-white transition-all duration-300 mt-auto border border-gray-100 shadow-sm group/btn overflow-hidden relative">
                    <span className="relative z-10 flex items-center">Connect on LinkedIn <ArrowRight className="ml-1.5 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" /></span>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5 Learn Smarter */}
      <section className="py-20 md:py-28 bg-transparent relative overflow-hidden border-t border-gray-100">
        <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center mb-20">
            <p className="text-gray-500 text-[15px] font-bold uppercase tracking-widest mb-3">Your Path To Career Success Starts With BITC</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              What gives us an <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)]">edge?</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left Content */}
            <div className="flex-1 w-full max-w-xl">
              <div className="inline-block px-3 py-1.5 rounded bg-slate-900 text-white text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                Learn smarter
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                Learn with <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)]">expert-curated</span> content
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Build the right skills, the right way.
              </p>

              <div className="flex items-center gap-8 mb-10 border-l-4 border-orange-400 pl-6">
                <div>
                  <div className="text-2xl font-bold text-slate-900">40+</div>
                  <div className="text-sm text-slate-500 font-medium">Hours of learning content</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">76%</div>
                  <div className="text-sm text-slate-500 font-medium">Learner satisfaction rate</div>
                </div>
              </div>

              <Link href="/courses" className="inline-flex h-14 items-center justify-center rounded-lg bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)] px-10 text-lg font-bold text-white shadow-md shadow-orange-500/10 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                Start learning
              </Link>
            </div>

            {/* Right Content */}
            <div className="flex-1 w-full relative h-[500px] flex items-center justify-center">
              {/* Background Graphic */}
              <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <div className="w-[120%] h-40 bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)] opacity-10 rounded-full blur-3xl rotate-12"></div>
              </div>

              {/* Main Image */}
              <div className="relative w-full max-w-[450px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl z-10 bg-slate-100 border border-gray-100">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" alt="Team meeting with sticky notes" className="w-full h-full object-cover" />
              </div>

              {/* AI Chat Float */}
              <div className="absolute top-10 -left-4 md:-left-12 bg-white rounded-2xl shadow-xl w-[260px] border border-gray-100 overflow-hidden z-20 animate-in fade-in slide-in-from-left duration-1000">
                <div className="bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)] px-4 py-2 text-white font-bold text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> AI chat support
                </div>
                <div className="p-4 space-y-4 bg-slate-50/50">
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                      <Monitor className="w-3 h-3 text-orange-600" />
                    </div>
                    <div className="bg-white border border-gray-100 shadow-sm rounded-xl rounded-tl-sm p-2 text-[11px] text-slate-700 w-full">
                      Hi there! Got a doubt? I'm here to help!
                    </div>
                  </div>
                  <div className="flex gap-2 flex-row-reverse">
                    <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden shrink-0">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=50&h=50&q=80" alt="User" />
                    </div>
                    <div className="bg-slate-800 text-white rounded-xl rounded-tr-sm p-2 text-[11px] w-[85%]">
                      Hi, I'm struggling to understand a concept in my certification program. Can you help?
                    </div>
                  </div>
                </div>
                <div className="px-3 py-2 border-t border-gray-100 text-[10px] text-gray-400 flex justify-between items-center bg-white">
                  Type your message here... <div className="w-4 h-4 border border-gray-300 rounded-full flex items-center justify-center">?</div>
                </div>
              </div>

              {/* Peer Discussions Float */}
              <div className="absolute bottom-20 -right-4 md:-right-10 bg-white rounded-2xl shadow-xl w-[240px] border border-gray-100 overflow-hidden z-20 animate-in fade-in slide-in-from-right duration-1000 delay-200">
                <div className="bg-slate-900 px-4 py-2 text-white font-bold text-sm flex items-center gap-2">
                  <Users className="w-4 h-4" /> Peer discussions
                </div>
                <div className="p-3 space-y-3 bg-white">
                  <div className="flex gap-2">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=50&h=50&q=80" alt="User" className="w-6 h-6 rounded-full shrink-0" />
                    <div className="bg-gray-50 border border-gray-100 rounded-xl rounded-tl-sm p-2 text-[11px] text-slate-700">
                      Hey! How did you approach the assignment?
                    </div>
                  </div>
                  <div className="flex gap-2 flex-row-reverse">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=50&h=50&q=80" alt="User" className="w-6 h-6 rounded-full shrink-0" />
                    <div className="bg-orange-50 border border-orange-100 rounded-xl rounded-tr-sm p-2 text-[11px] text-slate-800">
                      I started with handling missing data!
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-transparent relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px]"></div>
          <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-500/5 blur-[120px]"></div>
        </div>

        <div className="container max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              100% <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)]">Placement Assistance</span>
            </h2>
            <p className="text-gray-500 text-[16px] max-w-2xl mx-auto">Our dedicated placement cell ensures you get the right launchpad for your career.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "10+", label: "Hiring Partners" },
              { stat: "1K+", label: "Students Placed" },
              { stat: "12 LPA", label: "Highest Package" },
              { stat: "95%", label: "Placement Rate" }
            ].map((item, index) => (
              <div key={index} className="p-8 bg-white/40 backdrop-blur-md rounded-2xl border border-gray-100 hover:border-primary/50 hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 group">
                <div className="text-4xl md:text-5xl font-black mb-3 transform group-hover:scale-110 transition-transform duration-500">
                  <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)]">
                    {item.stat}
                  </span>
                </div>
                <div className="text-[13px] font-bold text-gray-600 uppercase tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Student Success Stories */}
      <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
        <div className="container max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="mb-16 text-center">
            <p className="text-primary font-bold uppercase tracking-widest text-[14px] mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Student <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)]">Success Stories</span>
            </h2>
            <p className="text-gray-500 text-[16px] max-w-2xl mx-auto">Hear from our alumni who are now working at top tech companies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rahul Sharma", role: "Software Engineer at TCS", quote: "The MERN stack certification at BITC gave me the practical skills I needed to clear my interviews with ease.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80" },
              { name: "Priya Patel", role: "Data Analyst at Wipro", quote: "Excellent faculty and hands-on projects. The placement cell was very supportive throughout the process.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80" },
              { name: "Amit Kumar", role: "Automation Engineer at L&T", quote: "The industrial automation training was exactly what the industry demands right now.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80" }
            ].map((story, i) => (
              <Card key={i} className="!p-0 !gap-0 border-0 shadow-xl shadow-gray-200/40 bg-white rounded-2xl relative overflow-hidden h-full flex flex-col">
                <div className="absolute -top-4 right-4 text-[120px] font-serif leading-none text-gray-100 pointer-events-none select-none">
                  "
                </div>

                <CardContent className="p-6 flex flex-col flex-1 relative z-10">
                  {/* First: Image and Name */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative">
                      <img src={story.image} alt={story.name} className="w-12 h-12 rounded-full object-cover relative z-10 border-2 border-white shadow-md" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-[15px]">{story.name}</h4>
                      <p className="text-[12px] text-gray-500 font-semibold">{story.role}</p>
                    </div>
                  </div>

                  {/* Then: Description */}
                  <p className="text-slate-700 text-[14px] italic mb-6 leading-relaxed flex-1 relative z-10 font-medium">
                    "{story.quote}"
                  </p>

                  {/* Then: Stars */}
                  <div className="flex items-center text-amber-400 mt-auto pt-4 border-t border-gray-100">
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-4 w-4 fill-current mr-1" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* 9. BITC Enterprise */}
      <section className="py-20 md:py-28 bg-transparent relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="flex-1 w-full max-w-2xl">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-4">
              Strengthen Your Business Edge
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
              Empower your workforce with <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)]">
                BITC Enterprise
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
              Discover the right skills, nurture talent, and grow a future-ready workforce. Trusted by 500+ companies worldwide to scale, skill, and shape top-performing teams.
            </p>
            <Link href="/enterprise" className="inline-flex h-14 items-center justify-center rounded-lg bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)] px-10 text-lg font-semibold text-white hover:opacity-90 transition-opacity shadow-md shadow-orange-500/10">
              Learn more
            </Link>
          </div>

          {/* Right Image Content */}
          <div className="flex-1 w-full relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Image */}
              <div className="aspect-[4/3] w-full bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Workforce professionals collaborating"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-[200px] animate-in fade-in slide-in-from-left-4 duration-1000 delay-300">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">1K+</div>
                <div className="text-sm font-medium text-slate-700 leading-tight">
                  Learners from<br />3+ nations
                </div>
              </div>

              {/* Bottom Right Logo overlay */}
              <div className="absolute bottom-6 right-6">
                <div className="font-bold text-2xl text-white drop-shadow-md flex items-center">
                  BITC <span className="ml-1 text-xs font-medium px-2 py-0.5 border border-white/40 rounded bg-black/20 backdrop-blur-sm">ENTERPRISE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
