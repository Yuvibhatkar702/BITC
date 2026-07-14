"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, ArrowRight, Code, Database, Coffee, Terminal, 
  BrainCircuit, BarChart, ShieldCheck, Cloud, TrendingUp, 
  PieChart, Landmark, Users, BadgeDollarSign, LayoutTemplate, 
  PenTool, Video, Film, Clapperboard, GraduationCap, Clock, Download
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const coursesData = {
  "Information Technology": [
    { title: "Full Stack Development", duration: "6 Months", icon: Code },
    { title: "MERN Stack", duration: "6 Months", icon: Database },
    { title: "Java Development", duration: "6 Months", icon: Coffee },
    { title: "Python Programming", duration: "3 Months", icon: Terminal },
    { title: "AI & Machine Learning", duration: "6 Months", icon: BrainCircuit },
    { title: "Data Science", duration: "6 Months", icon: BarChart },
    { title: "Cyber Security", duration: "6 Months", icon: ShieldCheck },
    { title: "Cloud Computing", duration: "6 Months", icon: Cloud },
  ],
  "Management": [
    { title: "Digital Marketing", duration: "3 Months", icon: TrendingUp },
    { title: "Business Analytics", duration: "6 Months", icon: PieChart },
    { title: "Finance", duration: "6 Months", icon: Landmark },
    { title: "HR", duration: "3 Months", icon: Users },
    { title: "Sales", duration: "3 Months", icon: BadgeDollarSign },
  ],
  "Design": [
    { title: "UI/UX Design", duration: "6 Months", icon: LayoutTemplate },
    { title: "Graphic Design", duration: "3 Months", icon: PenTool },
    { title: "Motion Graphics", duration: "3 Months", icon: Video },
    { title: "Video Editing", duration: "3 Months", icon: Film },
    { title: "Animation", duration: "6 Months", icon: Clapperboard },
  ]
};

export default function FeaturedCertifications() {
  return (
    <Tabs defaultValue="Information Technology" className="w-full">
      <div className="flex justify-center mb-8 overflow-x-auto pb-2">
        <TabsList className="bg-transparent p-0 gap-3">
          {Object.keys(coursesData).map((category) => (
            <TabsTrigger key={category} value={category} className="rounded-full px-6 py-2.5 bg-gray-100 text-gray-600 hover:bg-gray-200 data-[state=active]:bg-[linear-gradient(to_right,#ffcc00_0%,#ff9900_100%)] data-[state=active]:text-white data-[state=active]:shadow-md transition-all">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {Object.entries(coursesData).map(([category, courses]) => {
        return (
          <TabsContent key={category} value={category} className="mt-0 outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.map((course, i) => {
                const Icon = course.icon || CheckCircle2;
                return (
                <Card key={i} className="group overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all bg-white flex flex-col h-full relative">
                  {/* Badge for the first item as an example */}
                  {i === 0 && <span className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-bold px-2.5 py-1 rounded z-10 shadow-sm">Popular</span>}
                  
                  {/* Top Image Section */}
                  <div className="h-40 bg-gray-50 flex items-center justify-center border-b border-gray-100 relative overflow-hidden group-hover:bg-primary/5 transition-colors">
                    <Icon className="w-16 h-16 text-gray-300 group-hover:scale-110 group-hover:text-primary transition-all duration-500" />
                  </div>

                  {/* Content Section */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-[16px] font-bold text-slate-800 leading-snug mb-3 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    
                    {!course.title.includes("AI") && (
                      <div className="mb-4">
                        <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#ff9900]">
                          Integrated with AI
                        </span>
                      </div>
                    )}

                    {/* Features List */}
                    <div className="space-y-2.5 mb-6">
                      <div className="flex items-center gap-2.5 text-[13px] text-gray-600">
                        <GraduationCap className="w-4 h-4 text-gray-400" />
                        <span>Become a certified</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-[13px] text-gray-600">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex items-center mt-auto pt-4">
                      <Button variant="outline" className="w-full rounded-md text-slate-700 font-semibold border-gray-300 hover:bg-gray-50">
                        View Program
                      </Button>
                    </div>
                  </div>
                </Card>
                );
              })}
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
