import { Button } from "@/components/ui/button";
import { Heart, Salad, Baby, Droplets, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Women Wellness Program",
      slug: "women-wellness",
      description: "A complete blend of therapeutic yoga, pranayama, and progressive strength training designed exclusively for women.",
      color: "bg-pink-500",
    },
    {
      icon: Salad,
      title: "90-Day Diet Program",
      slug: "diet-program",
      description: "A science-backed personalized nutrition plan using the Cognitive Plating Method. No extreme restrictions.",
      color: "bg-primary",
    },
    {
      icon: Baby,
      title: "Kids Yoga (Ages 7–14)",
      slug: "kids-yoga",
      description: "Anatomy-based interactive yoga for children to build flexibility, awareness, discipline & emotional balance.",
      color: "bg-amber-500",
    },
    {
      icon: Droplets,
      title: "LSP + Juice Fasting",
      slug: "gut-reset",
      description: "A detoxifying 4-day gut reset program to cleanse the entire digestive system.",
      color: "bg-teal-500",
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive wellness services tailored to your goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
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

        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
