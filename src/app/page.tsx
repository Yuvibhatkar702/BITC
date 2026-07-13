import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, BookOpen, Building2, CheckCircle2, GraduationCap, Users, Briefcase, Star, Search, ChevronLeft, ChevronRight, PlayCircle, Shield, Clock, Award, TrendingUp, Sparkles, Target, Trophy, Monitor, Compass, UserCheck, Network, Code } from "lucide-react";
import FeaturedCertifications from "@/components/FeaturedCertifications";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-[15px]">
      


      {/* 1. Hero Section */}
      <section className="relative w-full bg-white pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />

        <div className="container max-w-[1400px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
          
          {/* Left Content */}
          <div className="flex-1 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.1]">
              Master tomorrow's <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">skills today.</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-[500px] leading-relaxed">
              Excel with BITC's top upskilling platform. Join thousands of learners globally, earn recognized certificates, and get 100% placement assistance.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link href="/courses" className="h-12 px-8 rounded-full bg-primary text-white font-semibold flex items-center justify-center hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
                Explore Programs
              </Link>
              <Link href="/contact" className="h-12 px-8 rounded-full bg-white text-slate-700 font-semibold flex items-center justify-center border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all">
                Book a Demo
              </Link>
            </div>

            {/* Goals */}
            <div>
              <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">Popular Goals</p>
              <div className="flex flex-wrap gap-2.5">
                {["IT Courses", "Data Science", "Management", "Summer Internship", "Learn Offline"].map((goal, i) => (
                  <Link key={i} href="#" className="px-4 py-2 rounded-full border border-gray-200 text-[13px] font-medium text-gray-600 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all bg-white shadow-sm hover:shadow-md">
                    {goal}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image/Graphic */}
          <div className="flex-1 w-full max-w-[600px] lg:max-w-none relative flex justify-center lg:justify-end transform scale-90 sm:scale-85 md:scale-95 lg:scale-90 xl:scale-95 origin-center lg:origin-right mt-12 lg:mt-0">
            <div className="relative w-full max-w-[540px] aspect-square">
              
              {/* Image Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] rounded-full overflow-hidden border-[6px] border-white shadow-2xl shadow-primary/10 -z-10 bg-gray-50">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Students learning and collaborating" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>

              {/* Main Large Card */}
              <div className="absolute inset-4 sm:inset-10 bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.06)] border border-gray-100 p-8 sm:p-12 flex flex-col justify-between overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8">
                    <Award className="w-7 h-7" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Globally<br/>Recognised</h2>
                  <p className="text-gray-500 leading-relaxed text-sm sm:text-base max-w-[85%]">Earn certificates that top tier companies value. Boost your career with an industry-approved curriculum.</p>
                </div>

                <div className="relative z-10 flex items-center gap-5 pt-8 border-t border-gray-100">
                  <div className="flex -space-x-4">
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-xl shadow-sm">👨‍💻</div>
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-green-100 flex items-center justify-center text-xl shadow-sm">👩‍💼</div>
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-xl shadow-sm">👨‍🎓</div>
                  </div>
                  <div>
                    <div className="text-base font-bold text-slate-900">10,000+</div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-0.5">Successful Learners</div>
                  </div>
                </div>
              </div>

              {/* Floating Small Card 1 (Bottom Right) */}
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-8 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-5 animate-in slide-in-from-bottom-8 duration-700 fade-in zoom-in hover:-translate-y-1 transition-transform z-20">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="pr-3">
                  <div className="text-[13px] font-semibold text-gray-500 mb-0.5">Placement Rate</div>
                  <div className="text-2xl font-black text-slate-900">100%</div>
                </div>
              </div>

              {/* Floating Small Card 2 (Top Left) */}
              <div className="absolute -top-4 sm:-top-6 left-4 sm:left-0 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 hover:-translate-y-1 transition-transform z-20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="pr-2 sm:pr-3">
                  <div className="text-[12px] sm:text-[13px] font-semibold text-gray-500 mb-0.5">Active Courses</div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">50+</div>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-dark mb-4">Why Choose BITC?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-[16px]">We bridge the gap between academic learning and industry requirements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { 
                title: "Industry-Focused Curriculum", 
                icon: BookOpen, 
                desc: "Courses designed with real industry requirements in mind, ensuring you learn practical skills." 
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

      {/* 4. Featured Certifications */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-dark mb-4">Featured Certifications</h2>
              <p className="text-gray-500 text-[16px]">Master the skills that top companies are looking for.</p>
            </div>
            <Link href="/certification" className="hidden md:inline-flex text-primary font-semibold text-[15px] hover:underline">
              View All Certifications <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <FeaturedCertifications />
        </div>
      </section>

      {/* 5. Learning Process */}
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="container max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-dark mb-4">Learning Process</h2>
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
                { title: "Placement", icon: Trophy }
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
              <Card key={i} className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden bg-white group rounded-xl">
                <div className="h-48 w-full bg-gray-100 relative overflow-hidden">
                   <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{faculty.name}</h3>
                  <p className="text-[14px] text-gray-500 mb-6">{faculty.role}</p>
                  
                  <div className="mb-4">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">WORKING AT</span>
                    <div className="flex items-center gap-2 mt-1.5">
                       <Briefcase className="w-4 h-4 text-primary" />
                       <p className="text-[14px] font-bold text-slate-700">{faculty.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-[14px] text-gray-600 mb-6 leading-relaxed">
                    {faculty.bio} <span className="font-semibold text-slate-900 cursor-pointer hover:text-primary transition-colors">...Read More</span>
                  </p>
                  
                  <Link href={faculty.linkedin} className="inline-flex items-center text-primary font-semibold text-[14px] hover:underline">
                     LinkedIn Profile <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Placement Assistance */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
         <div className="container max-w-[1400px] mx-auto px-4">
            <div className="text-center mb-10">
               <h2 className="text-3xl font-bold text-slate-dark mb-2">100% Placement Assistance</h2>
               <p className="text-gray-500 text-[15px] max-w-2xl mx-auto">Our dedicated placement cell ensures you get the right launchpad for your career.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
               <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                 <div className="text-2xl md:text-3xl font-black text-primary mb-1">10+</div>
                 <div className="text-[13px] font-semibold text-gray-600 uppercase tracking-wide">Hiring Partners</div>
               </div>
               <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                 <div className="text-2xl md:text-3xl font-black text-primary mb-1">1K+</div>
                 <div className="text-[13px] font-semibold text-gray-600 uppercase tracking-wide">Students Placed</div>
               </div>
               <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                 <div className="text-2xl md:text-3xl font-black text-primary mb-1">12 LPA</div>
                 <div className="text-[13px] font-semibold text-gray-600 uppercase tracking-wide">Highest Package</div>
               </div>
               <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                 <div className="text-2xl md:text-3xl font-black text-primary mb-1">95%</div>
                 <div className="text-[13px] font-semibold text-gray-600 uppercase tracking-wide">Placement Rate</div>
               </div>
            </div>
         </div>
      </section>

      {/* 8. Student Success Stories */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-[1400px] mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-slate-dark mb-2">Student Success Stories</h2>
            <p className="text-gray-500 text-[15px]">Hear from our alumni who are now working at top tech companies.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Rahul Sharma", role: "Software Engineer at TCS", quote: "The MERN stack course at BITC gave me the practical skills I needed to clear my interviews with ease.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80" },
              { name: "Priya Patel", role: "Data Analyst at Wipro", quote: "Excellent faculty and hands-on projects. The placement cell was very supportive throughout the process.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80" },
              { name: "Amit Kumar", role: "Automation Engineer at L&T", quote: "The industrial automation training was exactly what the industry demands right now.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80" }
            ].map((story, i) => (
              <Card key={i} className="border-gray-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex text-amber-400 mb-3">
                    {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-gray-600 text-[14px] italic mb-5 leading-relaxed">"{story.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img src={story.image} alt={story.name} className="w-10 h-10 rounded-full object-cover border border-gray-200" />
                    <div>
                      <h4 className="font-bold text-slate-dark text-[15px]">{story.name}</h4>
                      <p className="text-[13px] text-primary font-semibold">{story.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
