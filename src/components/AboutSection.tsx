import { Leaf, Heart, Sparkles, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const philosophy = [
    { icon: Leaf, text: "Sustainable changes over quick fixes" },
    { icon: Heart, text: "Traditional yogic science blended with modern wellness" },
    { icon: Sparkles, text: "Personalized health programs for real, long-term results" },
    { icon: Users, text: "Empowerment through knowledge & mindful practices" },
  ];

  return (
    <section id="about" className="section-padding bg-green-light">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              About Us
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">NUTRIOMFIT</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At NUTRIOMFIT, we believe that healing begins when fitness, nutrition and inner awareness 
              work together. Our programs don't follow shortcuts or extreme restrictions — we follow 
              science-backed methods and timeless yogic wisdom to help you build a healthier relationship 
              with your body.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Our Philosophy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {philosophy.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-background rounded-xl p-5 shadow-sm hover-lift"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
