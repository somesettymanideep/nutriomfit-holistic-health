import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Are diet plans customized to my preferences?",
      answer: "Yes! Every diet plan is completely personalized based on your food preferences, allergies, lifestyle, and fitness goals. We consider your cultural background and taste preferences to create meals you'll actually enjoy.",
    },
    {
      question: "How many sessions per week are included?",
      answer: "The number of sessions depends on your plan. Basic includes 2 sessions/week, Pro includes 4 sessions/week, and Premium offers daily sessions with unlimited access to our workout library.",
    },
    {
      question: "Do you offer beginner-friendly programs?",
      answer: "Absolutely! All our programs are designed to accommodate beginners. Our trainers will modify exercises based on your current fitness level and gradually increase intensity as you progress.",
    },
    {
      question: "Do monthly plans include follow-ups?",
      answer: "Yes, all plans include regular follow-ups. Basic plans have weekly email check-ins, Pro plans include weekly video calls, and Premium plans offer daily support through WhatsApp and scheduled calls.",
    },
    {
      question: "Can I switch between programs?",
      answer: "Yes, you can switch between programs or upgrade your plan at any time. We'll prorate your existing subscription and help you transition smoothly to your new program.",
    },
    {
      question: "What equipment do I need for workouts?",
      answer: "Most of our workouts are designed for minimal equipment. Bodyweight exercises require no equipment, while some strength training may use resistance bands or light dumbbells, which we can help you source.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-green-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
