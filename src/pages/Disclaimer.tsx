import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertTriangle, X } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Medical & General <span className="text-primary">Disclaimer</span>
            </h1>
            <p className="text-muted-foreground">Last Updated: December 2024</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground leading-relaxed text-lg">
                  NUTRIOMFIT's services are for <strong>general wellness, education and lifestyle improvement only</strong>.
                </p>
              </div>
            </div>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">What We DO NOT Provide</h2>
              
              <div className="grid gap-4">
                <div className="flex items-center gap-3 p-4 bg-destructive/10 rounded-xl">
                  <X className="h-6 w-6 text-destructive" />
                  <span className="text-foreground">Diagnose medical conditions</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-destructive/10 rounded-xl">
                  <X className="h-6 w-6 text-destructive" />
                  <span className="text-foreground">Prescribe medication</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-destructive/10 rounded-xl">
                  <X className="h-6 w-6 text-destructive" />
                  <span className="text-foreground">Offer medical, physiotherapy or clinical dietetic advice</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-destructive/10 rounded-xl">
                  <X className="h-6 w-6 text-destructive" />
                  <span className="text-foreground">Replace healthcare professionals</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-destructive/10 rounded-xl">
                  <X className="h-6 w-6 text-destructive" />
                  <span className="text-foreground">Provide emergency treatment</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-destructive/10 rounded-xl">
                  <X className="h-6 w-6 text-destructive" />
                  <span className="text-foreground">Claim to cure or treat any disease</span>
                </div>
              </div>
            </section>

            <section className="bg-primary/5 rounded-2xl p-8 border border-primary/20 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Important Notice</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                You must consult your <strong className="text-foreground">GP/health professional</strong> before joining any program. 
                Our services complement but do not replace professional medical care.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Services Include</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>General wellness guidance and education</li>
                <li>Yoga-based programs for flexibility and mindfulness</li>
                <li>Strength training guidance for fitness improvement</li>
                <li>Nutritional education and lifestyle recommendations</li>
                <li>Kids yoga for physical and emotional development</li>
                <li>Guided frameworks for healthy living</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Assumption of Risk</h2>
              <p className="text-muted-foreground leading-relaxed">
                By participating in any NUTRIOMFIT program, you acknowledge that physical activities such as yoga, 
                strength training, and dietary changes carry inherent risks. You voluntarily assume all risks 
                associated with these activities and agree to follow all safety guidelines provided.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Individual Results</h2>
              <p className="text-muted-foreground leading-relaxed">
                Results may vary from person to person. NUTRIOMFIT does not guarantee any specific outcomes, 
                including but not limited to weight loss, muscle gain, flexibility improvement, or health benefits. 
                Your results will depend on various factors including your commitment, consistency, and individual 
                body response.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;
