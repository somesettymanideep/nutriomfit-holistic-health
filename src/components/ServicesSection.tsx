import { Button } from "@/components/ui/button";
import { Salad, Flower2, Dumbbell, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Salad,
      title: "Nutrition Coaching",
      emoji: "🥗",
      features: [
        "Custom diet plans",
        "Weekly follow-ups",
        "Weight loss & muscle gain plans",
      ],
      color: "bg-emerald-500",
    },
    {
      icon: Flower2,
      title: "Yoga Sessions",
      emoji: "🧘‍♀️",
      features: [
        "Guided online/offline yoga",
        "Stress relief, flexibility & balance",
        "Beginner-friendly",
      ],
      color: "bg-primary",
    },
    {
      icon: Dumbbell,
      title: "Core Strength Training",
      emoji: "🏋️‍♀️",
      features: [
        "Bodyweight + strength workouts",
        "Posture correction",
        "Core power routines",
      ],
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {service.emoji} {service.title}
              </h3>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                <a href="#consultation">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <a href="#programs">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
