import { CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    "60+ Clients Trained",
    "Personalized Coaching",
    "Evidence-based Nutrition & Fitness",
    "Mind–Body Wellness Approach",
  ];

  return (
    <section id="about" className="section-padding bg-green-light">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            About Us
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Partner in{" "}
            <span className="text-primary">Holistic Wellness</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            At NutriomFit, we believe true transformation comes from balancing nutrition, 
            movement, and mindfulness. Our evidence-based approach combines personalized 
            diet plans, yoga practices, and core strength training to help you achieve 
            sustainable results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-background rounded-xl p-4 shadow-sm hover-lift"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
