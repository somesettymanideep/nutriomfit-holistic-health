import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Start Your Transformation?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Join the NutriomFit family today and begin your journey to a healthier, 
          happier you. Your transformation starts with one decision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="white" size="xl" asChild>
            <a href="#consultation">
              <Phone className="mr-2 h-5 w-5" />
              Book Free Call
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Now
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#pricing">
              Join NutriomFit
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
