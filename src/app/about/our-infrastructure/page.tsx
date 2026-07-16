import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Monitor,
  Cpu,
  BookOpen,
  Users,
  Wifi,
  Shield,
  Camera,
  Flame,
  Coffee,
  Microscope,
  Play,
  ArrowRight,
} from "lucide-react";

export default function OurInfrastructurePage() {
  return (
    <div className="flex flex-col min-h-screen text-[15px]">

      {/* ── HERO ── */}
      <section className="relative w-full bg-slate-900 text-white py-20 lg:py-28 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1169&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="container max-w-[1000px] mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 text-primary font-bold rounded-full px-5 py-2 text-sm uppercase tracking-widest mb-8 backdrop-blur-sm border border-white/10">
            <Monitor className="w-4 h-4" />
            Infrastructure
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            State-of-the-Art <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-300">Learning Environment</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-[700px] mx-auto leading-relaxed">
            Our campus is designed to deliver a world-class learning experience with cutting-edge technology and modern facilities.
          </p>
        </div>
      </section>

      {/* ── SMART CLASSROOMS ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Learning Spaces</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Smart Classrooms</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our smart classrooms are equipped with HD projectors, interactive displays, digital whiteboards, and high-speed internet to deliver engaging, multimedia-rich learning experiences.
              </p>
              <ul className="space-y-3">
                {["Interactive digital displays", "HD projectors & audio systems", "Climate-controlled environment", "Ergonomic seating for comfort"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1032&auto=format&fit=crop" alt="Smart Classroom" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPUTER LABS + INNOVATION LAB ── */}
      <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Computer Labs */}
            <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-md">
              <div className="aspect-[16/9] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1170&auto=format&fit=crop" alt="Computer Lab" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Computer Labs</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Fully equipped labs with high-performance systems for programming, data analysis, and development.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["High-end PCs", "High-Speed Internet", "Latest Software", "24/7 Access"].map((item, i) => (
                    <div key={i} className="bg-gray-50 px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 text-center border border-gray-100">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Innovation Lab */}
            <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-md">
              <div className="aspect-[16/9] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1170&auto=format&fit=crop" alt="Innovation Lab" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Innovation Lab</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  A dedicated space for experimentation, prototyping, and building with cutting-edge technologies.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["AI & ML", "Robotics", "IoT Devices", "Development Kits"].map((item, i) => (
                    <div key={i} className="bg-purple-50 px-4 py-3 rounded-xl text-sm font-semibold text-purple-700 text-center border border-purple-100">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIBRARY, SEMINAR, WORKSHOP, LOUNGE ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">More Facilities</h2>
            <p className="text-gray-600 max-w-[600px] mx-auto text-lg">Everything a learner needs under one roof.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Library", icon: BookOpen, desc: "Digital and physical library with 5,000+ books, journals, research papers, and online databases.", color: "bg-blue-500/10 text-blue-600" },
              { title: "Seminar Hall", icon: Users, desc: "200+ capacity auditorium for seminars, guest lectures, hackathons, and industry events.", color: "bg-green-500/10 text-green-600" },
              { title: "Workshop Area", icon: Cpu, desc: "Dedicated hands-on practice zones for hardware projects, prototyping, and technical workshops.", color: "bg-amber-500/10 text-amber-600" },
              { title: "Student Lounge", icon: Coffee, desc: "A comfortable relaxation zone with refreshments, recreational activities, and collaborative spaces.", color: "bg-red-500/10 text-red-600" },
            ].map((item, i) => (
              <Card key={i} className="border-gray-100 shadow-sm hover:shadow-lg transition-shadow group">
                <CardContent className="p-7 text-center">
                  <div className={`w-16 h-16 rounded-2xl ${item.color.split(" ")[0]} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-8 h-8 ${item.color.split(" ")[1]}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPUS FEATURES ── */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Campus Features</h2>
            <p className="text-gray-400 text-lg">A safe, connected, and comfortable learning environment.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Wi-Fi Campus", icon: Wifi, desc: "High-speed internet across the entire campus for uninterrupted learning." },
              { title: "CCTV Surveillance", icon: Camera, desc: "24/7 CCTV monitoring for complete security and peace of mind." },
              { title: "Fire Safety", icon: Flame, desc: "Advanced fire detection and suppression systems throughout the facility." },
              { title: "Security", icon: Shield, desc: "Professional security personnel and access control for a safe environment." },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center hover:bg-white/10 transition-colors">
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PLACEHOLDER ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Campus Gallery</h2>
          <p className="text-gray-600 max-w-[600px] mx-auto text-lg mb-12">Take a virtual tour of our facilities.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1170&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1169&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1186&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1170&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1074&auto=format&fit=crop",
            ].map((src, i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden group relative cursor-pointer">
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Visit Our Campus</h2>
          <p className="text-lg text-gray-600 mb-8">Schedule a campus tour and experience our infrastructure firsthand.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="h-14 px-8 rounded-full bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)] text-white font-semibold flex items-center gap-2 justify-center hover:shadow-xl transition-all text-lg">
              Schedule a Visit <ArrowRight className="w-5 h-5" />
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
