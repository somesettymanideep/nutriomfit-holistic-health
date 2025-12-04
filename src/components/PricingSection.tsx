import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic",
      monthlyPrice: "₹1,999",
      yearlyPrice: "₹19,990",
      description: "Perfect for getting started",
      features: [
        "Weekly diet plans",
        "Email support",
        "Progress tracking",
        "Recipe guides",
      ],
      featured: false,
    },
    {
      name: "Pro",
      monthlyPrice: "₹3,999",
      yearlyPrice: "₹38,390",
      description: "Most popular choice",
      features: [
        "Nutrition + Yoga + Workouts",
        "Weekly 1:1 calls",
        "Priority support",
        "Custom meal plans",
        "Video workout library",
      ],
      featured: true,
    },
    {
      name: "Premium",
      monthlyPrice: "₹6,999",
      yearlyPrice: "₹58,790",
      description: "Complete transformation",
      features: [
        "Everything in Pro",
        "Daily 1:1 coaching",
        "Personalized tracking app",
        "Unlimited support",
        "Exclusive community access",
        "Monthly body composition analysis",
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-green-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-primary">Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Flexible pricing to fit your budget and goals
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isYearly ? "bg-primary" : "bg-muted"
              }`}
            >
              <span
                className={`absolute top-1 w-5 h-5 rounded-full bg-background transition-transform duration-300 ${
                  isYearly ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-6 md:p-8 border-2 transition-all duration-300 ${
                plan.featured
                  ? "border-primary shadow-2xl shadow-primary/20 scale-105"
                  : "border-border hover:border-primary/50 hover:shadow-lg"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-muted-foreground">/{isYearly ? "year" : "month"}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? "hero" : "outline"}
                className="w-full"
                size="lg"
                asChild
              >
                <a href="#consultation">
                  Choose Plan
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

export default PricingSection;
