import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Salad, Baby, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Women Wellness Program",
      slug: "women-wellness",
      description: "A complete blend of therapeutic yoga, pranayama, and progressive strength training designed exclusively for women. Heal, strengthen & balance your entire system.",
      color: "bg-pink-500",
    },
    {
      icon: Salad,
      title: "90-Day Diet Program",
      slug: "diet-program",
      description: "A science-backed personalized nutrition plan using the Cognitive Plating Method. No extreme restrictions—just mindful eating for long-term health.",
      color: "bg-primary",
    },
    {
      icon: Baby,
      title: "Kids Yoga (Ages 7–14)",
      slug: "kids-yoga",
      description: "Anatomy-based interactive yoga for children to build flexibility, awareness, discipline & emotional balance—learning the why behind every posture.",
      color: "bg-amber-500",
    },
    {
      icon: Droplets,
      title: "LSP + Juice Fasting",
      slug: "gut-reset",
      description: "A detoxifying blend of Laghu Shankha Prakshalana (colon cleansing) and medically assessed juice fasting to reset the entire digestive system.",
      color: "bg-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-light via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 animate-fade-up">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Our <span className="text-primary">Signature Programs</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Comprehensive wellness services crafted for clarity, safety and transformation
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-3xl p-8 border border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                  <Link to={`/services/${service.slug}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Enroll Today, Feel the Change
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Start your transformation journey with NUTRIOMFIT's signature programs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="white" size="lg" asChild>
              <Link to="/#consultation">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/#pricing">
                View Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
