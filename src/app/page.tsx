import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, BookOpen, Building2, CheckCircle2, GraduationCap, Users, Briefcase, Star, Search, ChevronLeft, ChevronRight, PlayCircle, Shield, Clock, Award, TrendingUp, Sparkles, Target, Trophy, Monitor, Compass, UserCheck, Network } from "lucide-react";
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
      <section className="py-12 md:py-20 bg-gray-50/50">
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
      <section className="py-12 md:py-20 bg-gray-50">
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

      {/* 5. Internship Programs */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-[1400px] mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-dark mb-2">Internship Programs</h2>
            <p className="text-gray-500 text-[15px] max-w-2xl">Gain practical experience with our structured internship opportunities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <Card className="bg-primary/5 border-primary/10">
                <CardContent className="p-6">
                  <Briefcase className="h-7 w-7 text-primary mb-4" />
                  <h3 className="text-[18px] font-bold mb-2">Summer Internships</h3>
                  <p className="text-[14px] text-gray-600 mb-4">Intensive 4-8 week programs during summer breaks for practical exposure.</p>
                  <Link href="/internships/summer" className="text-primary text-[14px] font-semibold hover:underline">Learn More →</Link>
                </CardContent>
             </Card>
             <Card className="bg-primary/5 border-primary/10">
                <CardContent className="p-6">
                  <Briefcase className="h-7 w-7 text-primary mb-4" />
                  <h3 className="text-[18px] font-bold mb-2">Industrial Internships</h3>
                  <p className="text-[14px] text-gray-600 mb-4">6-month immersive training for final year students at partner companies.</p>
                  <Link href="/internships/industrial" className="text-primary text-[14px] font-semibold hover:underline">Learn More →</Link>
                </CardContent>
             </Card>
             <Card className="bg-primary/5 border-primary/10">
                <CardContent className="p-6">
                  <Briefcase className="h-7 w-7 text-primary mb-4" />
                  <h3 className="text-[18px] font-bold mb-2">Winter Internships</h3>
                  <p className="text-[14px] text-gray-600 mb-4">Short-term projects and skill development during winter vacations.</p>
                  <Link href="/internships/winter" className="text-primary text-[14px] font-semibold hover:underline">Learn More →</Link>
                </CardContent>
             </Card>
          </div>
        </div>
      </section>

      {/* 6. Corporate Training */}
      <section className="py-12 md:py-16 bg-slate-dark text-white">
        <div className="container max-w-[1400px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Corporate Training & Upskilling</h2>
            <p className="text-gray-300 mb-6 text-[15px] max-w-lg">
              Tailor-made training programs designed to enhance the skills of your workforce. We partner with organizations to deliver cutting-edge technical and management training.
            </p>
            <ul className="space-y-3 mb-8 text-[14px]">
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-3 text-primary" /> Customized Curriculum Design</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-3 text-primary" /> On-premise and Online Options</li>
              <li className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-3 text-primary" /> Expert Industry Instructors</li>
            </ul>
            <Link href="/corporate" className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-[14px] font-semibold text-white hover:bg-primary/90">
              Explore Corporate Programs
            </Link>
          </div>
          <div className="bg-white/5 rounded-2xl h-64 border border-white/10 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
             <Building2 className="h-20 w-20 text-white/30" />
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
                 <div className="text-3xl md:text-4xl font-black text-primary mb-1">500+</div>
                 <div className="text-[13px] font-semibold text-gray-600 uppercase tracking-wide">Hiring Partners</div>
               </div>
               <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                 <div className="text-3xl md:text-4xl font-black text-primary mb-1">10k+</div>
                 <div className="text-[13px] font-semibold text-gray-600 uppercase tracking-wide">Students Placed</div>
               </div>
               <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                 <div className="text-3xl md:text-4xl font-black text-primary mb-1">12 LPA</div>
                 <div className="text-[13px] font-semibold text-gray-600 uppercase tracking-wide">Highest Package</div>
               </div>
               <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                 <div className="text-3xl md:text-4xl font-black text-primary mb-1">95%</div>
                 <div className="text-[13px] font-semibold text-gray-600 uppercase tracking-wide">Placement Rate</div>
               </div>
            </div>
         </div>
      </section>

      {/* 8. Student Success Stories */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container max-w-[1400px] mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-slate-dark mb-2">Student Success Stories</h2>
            <p className="text-gray-500 text-[15px]">Hear from our alumni who are now working at top tech companies.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Rahul Sharma", role: "Software Engineer at TCS", quote: "The MERN stack course at BITC gave me the practical skills I needed to clear my interviews with ease." },
              { name: "Priya Patel", role: "Data Analyst at Wipro", quote: "Excellent faculty and hands-on projects. The placement cell was very supportive throughout the process." },
              { name: "Amit Kumar", role: "Automation Engineer at L&T", quote: "The industrial automation training was exactly what the industry demands right now." }
            ].map((story, i) => (
              <Card key={i} className="border-gray-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex text-amber-400 mb-3">
                    {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-gray-600 text-[14px] italic mb-5 leading-relaxed">"{story.quote}"</p>
                  <div>
                    <h4 className="font-bold text-slate-dark text-[15px]">{story.name}</h4>
                    <p className="text-[13px] text-primary font-semibold">{story.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Industry Partners */}
      <section className="py-12 bg-white border-y border-gray-100">
         <div className="container max-w-[1400px] mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-dark mb-8">Our Top Hiring Partners</h2>
            <div className="flex flex-wrap justify-center gap-10 md:gap-16 opacity-60 grayscale">
              <span className="text-2xl font-black">TECHMAHINDRA</span>
              <span className="text-2xl font-black">TCS</span>
              <span className="text-2xl font-black">WIPRO</span>
              <span className="text-2xl font-black">INFOSYS</span>
              <span className="text-2xl font-black">CAPGEMINI</span>
            </div>
         </div>
      </section>

      {/* 10. FAQs */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container max-w-[800px] mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-dark mb-2">Frequently Asked Questions</h2>
          </div>
          <Accordion className="w-full bg-white rounded-xl shadow-sm border p-2">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-4 font-semibold text-[15px]">Do you provide placement assistance?</AccordionTrigger>
              <AccordionContent className="px-4 text-gray-600 text-[14px]">
                Yes, BITC offers 100% placement assistance through our dedicated placement cell that partners with top IT and Engineering firms.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-4 font-semibold text-[15px]">Are the courses available online or offline?</AccordionTrigger>
              <AccordionContent className="px-4 text-gray-600 text-[14px]">
                We offer both hybrid learning models and fully offline campus training depending on the specific program you choose.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-4 font-semibold text-[15px]">Do I get a certificate after completion?</AccordionTrigger>
              <AccordionContent className="px-4 text-gray-600 text-[14px]">
                Yes, every successful completion grants a verifiable BITC Industry Certificate highly valued by our corporate partners.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 11. Contact CTA */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="container max-w-[1400px] mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Ready to Accelerate Your Career?</h2>
          <p className="text-[16px] text-white/90 mb-8 max-w-2xl mx-auto font-light">
            Take the first step towards a successful career. Apply now and get guidance from our academic counselors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/admissions" className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-8 text-[14px] font-bold text-primary hover:bg-gray-100 shadow-sm transition-colors">
              Apply For Admission
            </Link>
            <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-lg border border-white px-8 text-[14px] font-bold text-white hover:bg-white hover:text-primary transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
