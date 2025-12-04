import { UserCheck, BadgeCheck, Clock, RefreshCw, TrendingUp, Users } from "lucide-react";

const WhyChooseSection = () => {
  const benefits = [
    {
      icon: UserCheck,
      title: "Personalized Coaching",
      description: "Every plan is tailored to your unique body type, goals, and lifestyle",
    },
    {
      icon: BadgeCheck,
      title: "Evidence-based Guidance",
      description: "Our methods are backed by science and proven results",
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Sessions scheduled around your convenience, online or offline",
    },
    {
      icon: RefreshCw,
      title: "Consistent Follow-ups",
      description: "Regular check-ins to keep you accountable and motivated",
    },
    {
      icon: TrendingUp,
      title: "Visible Results",
      description: "Track your progress with measurable milestones",
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "Join a family of like-minded fitness enthusiasts",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">NutriomFit?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to your success every step of the way
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
