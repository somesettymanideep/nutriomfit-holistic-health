import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      result: "Lost 9kg in 8 weeks",
      text: "The diet plan was so easy to follow! I never felt hungry and the weekly check-ins kept me motivated. Best decision I ever made for my health.",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      result: "Back pain gone",
      text: "Yoga sessions helped reduce my chronic back pain within just 3 weeks. The instructor understood my limitations and customized everything.",
      rating: 5,
    },
    {
      name: "Anita Desai",
      result: "Core strength improved",
      text: "My core strength and posture improved dramatically. I feel more confident and energetic than ever. The workouts are challenging but fun!",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      result: "Complete transformation",
      text: "Combined nutrition and yoga program gave me a complete transformation. Lost weight, gained flexibility, and my stress levels are much lower.",
      rating: 5,
    },
    {
      name: "Meera Patel",
      result: "Gained muscle definition",
      text: "As a beginner, I was nervous but the team made me feel comfortable. Now I have visible muscle definition and improved stamina.",
      rating: 5,
    },
    {
      name: "Arjun Nair",
      result: "Better sleep & energy",
      text: "The holistic approach worked wonders. Better sleep, more energy throughout the day, and I've never felt healthier in my life!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ⭐ Client Stories from <span className="text-primary">60+ Transformations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real people who trusted NutriomFit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover-lift"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
