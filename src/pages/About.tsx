import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Heart, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const philosophy = [
    { icon: Leaf, text: "Sustainable changes over quick fixes" },
    { icon: Heart, text: "Traditional yogic science blended with modern wellness" },
    { icon: Sparkles, text: "Personalized health programs for real, long-term results" },
    { icon: Users, text: "Empowerment through knowledge & mindful practices" },
  ];

  const ctas = [
    { text: "Start Your Wellness Journey", href: "/services/women-wellness" },
    { text: "Join the Program That Fits You Best", href: "/#programs" },
    { text: "Book Your Free Consultation", href: "/#consultation" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-light via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 animate-fade-up">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              About <span className="text-primary">NUTRIOMFIT</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              At NUTRIOMFIT, we believe that healing begins when fitness, nutrition and inner awareness work together. 
              Our programs don't follow shortcuts or extreme restrictions — we follow science-backed methods and timeless 
              yogic wisdom to help you build a healthier relationship with your body.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Philosophy</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {philosophy.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-green-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Expertise</span>
              </h2>
            </div>
            
            <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl border border-border">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With years of experience training medical professionals and individuals from diverse backgrounds, 
                we bring a therapeutic, individualized and evidence-aware approach to wellness.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From yoga therapy and strength training to metabolic nutrition and gut reset protocols — every 
                NUTRIOMFIT service is crafted for <span className="text-primary font-semibold">clarity</span>, 
                <span className="text-primary font-semibold"> safety</span> and 
                <span className="text-primary font-semibold"> transformation</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
              Transform Your Health with NUTRIOMFIT
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {ctas.map((cta, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "white" : "heroOutline"}
                  size="lg"
                  asChild
                >
                  <Link to={cta.href}>
                    {cta.text}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
