import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-muted-foreground">Last Updated: December 2024</p>
            <p className="text-sm text-primary mt-2">UK GDPR Compliant</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy explains how NUTRIOMFIT collects, manages, uses and protects your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Data We Collect</h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">A. Personal Identification Information</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Date of birth</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">B. Health & Wellness Information (Voluntary)</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Medical conditions</li>
                <li>Past injuries</li>
                <li>Dietary restrictions</li>
                <li>Physical activity levels</li>
                <li>Lifestyle information</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">C. Technical Data</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Device type</li>
                <li>IP address</li>
                <li>Browser information</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mb-3">D. Payment Information</h3>
              <p className="text-muted-foreground">
                Handled securely via third-party providers (not stored by NUTRIOMFIT).
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Why We Collect Data</h2>
              <p className="text-muted-foreground mb-4">We use your data to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Provide personalised diet plans</li>
                <li>Create suitable yoga/fitness programs</li>
                <li>Ensure safety during participation</li>
                <li>Improve website and service performance</li>
                <li>Send updates, reminders and program-related communication</li>
              </ul>
              <p className="text-primary font-semibold">We will never sell your data.</p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Legal Basis for Processing</h2>
              <p className="text-muted-foreground mb-4">We process data under:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Consent</li>
                <li>Contractual necessity</li>
                <li>Legitimate interest</li>
                <li>Legal compliance</li>
              </ul>
              <p className="text-muted-foreground">You may withdraw consent at any time.</p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Sharing Your Personal Data</h2>
              <p className="text-muted-foreground mb-4">
                We do not share your data with third parties except:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Payment processors</li>
                <li>Legal authorities (only if required by law)</li>
              </ul>
              <p className="text-muted-foreground font-medium">We do not share data with advertisers.</p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Storage & Security</h2>
              <p className="text-muted-foreground mb-4">Your data is stored securely with:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Encrypted servers</li>
                <li>Access restrictions</li>
                <li>Regular security checks</li>
              </ul>
              <p className="text-muted-foreground">We retain data only as long as necessary.</p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights (UK GDPR)</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Access your data</li>
                <li>Request correction</li>
                <li>Request deletion ("right to be forgotten")</li>
                <li>Restrict processing</li>
                <li>Object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
              <p className="text-muted-foreground">
                Contact: <a href="mailto:hello@nutriomfit.com" className="text-primary hover:underline">hello@nutriomfit.com</a>
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Children's Data</h2>
              <p className="text-muted-foreground mb-4">For Kids Yoga:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Information is collected with parent/guardian consent</li>
                <li>Data is never used for marketing</li>
                <li>Data is deleted when no longer needed</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies Policy</h2>
              <p className="text-muted-foreground mb-4">Our website may use cookies to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Improve user experience</li>
                <li>Track site analytics</li>
                <li>Remember preferences</li>
              </ul>
              <p className="text-muted-foreground">You can disable cookies in your browser settings.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
