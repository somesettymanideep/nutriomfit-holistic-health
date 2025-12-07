import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    
    // Auto-play
    const autoplay = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 5000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi, onSelect]);

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

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-4 md:-translate-x-6 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground border-primary/20"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-4 md:translate-x-6 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground border-primary/20"
            onClick={scrollNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Carousel */}
          <div className="overflow-hidden mx-8" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                >
                  <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
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
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? "bg-primary w-8" 
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
