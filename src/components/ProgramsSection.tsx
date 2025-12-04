import { Button } from "@/components/ui/button";
import { Clock, CheckCircle, Target, ArrowRight } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Weight Loss Transformation",
      duration: "8-12 weeks",
      included: ["Custom meal plans", "Weekly check-ins", "Cardio routines"],
      results: "Lose 5-15 kg sustainably",
      featured: false,
    },
    {
      title: "Yoga for Flexibility & Stress Relief",
      duration: "6-8 weeks",
      included: ["Daily yoga sessions", "Breathing techniques", "Meditation guide"],
      results: "Improved flexibility & mental clarity",
      featured: true,
    },
    {
      title: "Core Strength & Posture",
      duration: "6-8 weeks",
      included: ["Core exercises", "Posture correction", "Strength building"],
      results: "Stronger core & better posture",
      featured: false,
    },
    {
      title: "Nutrition + Yoga Combo",
      duration: "10-12 weeks",
      included: ["Full nutrition plan", "Yoga sessions", "1:1 coaching"],
      results: "Complete mind-body transformation",
      featured: true,
    },
  ];

  return (
    <section id="programs" className="section-padding bg-green-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Structured Programs for <span className="text-primary">Real Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a program that fits your lifestyle and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-6 md:p-8 border-2 transition-all duration-300 hover-lift ${
                program.featured
                  ? "border-primary shadow-xl shadow-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {program.featured && (
                <span className="absolute -top-3 right-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Popular
                </span>
              )}
              
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {program.title}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{program.duration}</span>
              </div>

              <div className="space-y-2 mb-4">
                {program.included.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 mb-6 p-3 bg-secondary rounded-lg">
                <Target className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-secondary-foreground">
                  {program.results}
                </span>
              </div>

              <Button
                variant={program.featured ? "default" : "outline"}
                className="w-full"
                asChild
              >
                <a href="#consultation">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
