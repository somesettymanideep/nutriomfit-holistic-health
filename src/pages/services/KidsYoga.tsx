import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Baby, CheckCircle2, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const KidsYoga = () => {
  const features = [
    "Age-appropriate yoga sequences",
    "Anatomy-based learning approach",
    "Interactive and fun sessions",
    "Breathing exercises for focus",
    "Posture correction techniques",
    "Emotional balance practices",
  ];

  const benefits = [
    { title: "Physical Flexibility", description: "Develop strength and flexibility through playful movement" },
    { title: "Body Awareness", description: "Learn to understand and connect with their bodies" },
    { title: "Discipline & Focus", description: "Build concentration skills through mindful practices" },
    { title: "Emotional Balance", description: "Develop tools for managing emotions effectively" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-amber-50 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/services" className="inline-flex items-center text-primary hover:underline mb-6">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Back to Services
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center">
                <Baby className="h-8 w-8 text-white" />
              </div>
              <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                Ages 7–14
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Kids <span className="text-amber-500">Yoga Program</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Anatomy-based interactive yoga for children to build flexibility, awareness, discipline 
              & emotional balance—learning the why behind every posture.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/#consultation">
                  Enroll Your Child
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/#pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  What's <span className="text-primary">Included</span>
                </h2>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-card rounded-3xl p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Program Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Sessions</p>
                      <p className="text-muted-foreground">45 min, 3x per week</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Users className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Age Group</p>
                      <p className="text-muted-foreground">7 to 14 years</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Star className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Format</p>
                      <p className="text-muted-foreground">Interactive group classes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-green-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
              Key <span className="text-primary">Benefits</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Give Your Child the Gift of Wellness
          </h2>
          <Button variant="white" size="lg" asChild>
            <Link to="/#consultation">
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KidsYoga;
