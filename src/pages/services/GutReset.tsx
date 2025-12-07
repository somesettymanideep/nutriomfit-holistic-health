import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, CheckCircle2, Clock, Users, Star, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const GutReset = () => {
  const features = [
    "Laghu Shankha Prakshalana technique",
    "Medically assessed juice fasting",
    "Complete digestive system reset",
    "Pre-program health assessment",
    "Daily guided sessions",
    "Post-program dietary guidance",
  ];

  const benefits = [
    { title: "Colon Cleansing", description: "Deep cleansing of the digestive tract using traditional yogic methods" },
    { title: "Detoxification", description: "Remove accumulated toxins and reset your system" },
    { title: "Improved Digestion", description: "Restore optimal digestive function naturally" },
    { title: "Renewed Energy", description: "Experience increased vitality and mental clarity" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-50 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/services" className="inline-flex items-center text-primary hover:underline mb-6">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Back to Services
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
                4-Day Intensive
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              LSP + <span className="text-teal-500">Juice Fasting</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              A detoxifying blend of Laghu Shankha Prakshalana (colon cleansing) and medically 
              assessed juice fasting to reset the entire digestive system.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/#consultation">
                  Start Your Reset
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

      {/* Warning Note */}
      <section className="py-6 bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0" />
            <p className="text-amber-800">
              <strong>Note:</strong> This program requires a medical assessment before enrollment. 
              Not suitable for individuals with certain health conditions.
            </p>
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
                      <p className="font-semibold text-foreground">Duration</p>
                      <p className="text-muted-foreground">4-day intensive program</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Users className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Format</p>
                      <p className="text-muted-foreground">1:1 guided sessions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Star className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Requirement</p>
                      <p className="text-muted-foreground">Medical assessment required</p>
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
            Reset Your Gut, Renew Your Health
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

export default GutReset;
