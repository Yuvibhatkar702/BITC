import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">About BITC</h1>
        <div className="max-w-4xl mx-auto space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              BIZONANCE Industrial Training Centre (BITC) is a premium, national-level institute dedicated to bridging the gap between academia and industry. We provide industry-oriented training to equip students and professionals with the skills required to excel in today's competitive corporate landscape.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-dark text-white border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-gray-300">
                  To be the global leader in providing innovative, industry-aligned education that empowers individuals to build successful careers and drive technological advancement.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary text-white border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/90">
                  To deliver high-quality, practical training in cutting-edge technologies, fostering a culture of continuous learning, innovation, and professional excellence.
                </p>
              </CardContent>
            </Card>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Director's Message</h2>
            <Card className="bg-secondary/30 border-none shadow-sm">
              <CardContent className="p-8 italic text-muted-foreground text-lg">
                "At BITC, we don't just teach syllabus; we build careers. Our focus is on practical implementation, live projects, and ensuring that every student who walks through our doors leaves as an industry-ready professional."
                <div className="mt-4 font-bold text-foreground not-italic">- Director, BITC</div>
              </CardContent>
            </Card>
          </section>

        </div>
      </div>
    </div>
  );
}
