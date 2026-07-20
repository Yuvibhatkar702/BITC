import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const courses = [
  { id: "full-stack", title: "Full Stack Development (MERN)", cat: "Information Technology", duration: "6 Months", fees: "Contact Us" },
  { id: "data-science", title: "Data Science & Machine Learning", cat: "Information Technology", duration: "6 Months", fees: "Contact Us" },
  { id: "cloud-computing", title: "Cloud Computing (AWS/Azure)", cat: "Information Technology", duration: "3 Months", fees: "Contact Us" },
  { id: "digital-marketing", title: "Advanced Digital Marketing", cat: "Management", duration: "3 Months", fees: "Contact Us" },
  { id: "ui-ux", title: "UI/UX & Product Design", cat: "Designing", duration: "3 Months", fees: "Contact Us" },
];

export default function CoursesPage() {
  return (
    <div className="py-20 bg-secondary/20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Programs</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-vetted curriculum designed to make you day-one ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="group overflow-hidden border border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-lg bg-card flex flex-col h-full">
              <div className="h-48 bg-slate-dark w-full relative p-6 flex flex-col justify-end">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <span className="relative z-20 text-white font-medium bg-primary/90 px-3 py-1 rounded-md text-xs w-fit mb-2">
                  {course.cat}
                </span>
                <h3 className="relative z-20 text-xl font-bold text-white group-hover:text-primary-foreground transition-colors">
                  {course.title}
                </h3>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                    <span>Duration: <strong className="text-foreground">{course.duration}</strong></span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                    <span>100% Placement Assistance</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                    <span>Live Industry Projects</span>
                  </div>
                </div>
                <Link href={`/courses/${course.id}`} className="mt-auto inline-flex h-8 w-full items-center justify-center rounded-lg bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)] px-4 text-sm font-medium text-white hover:bg-[linear-gradient(to_right,#ff9900_0%,#ffcc00_100%)]">
                  View Syllabus & Details
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
