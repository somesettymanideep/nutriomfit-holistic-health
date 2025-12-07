import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms & <span className="text-primary">Conditions</span>
            </h1>
            <p className="text-muted-foreground">Last Updated: December 2024</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              Welcome to NUTRIOMFIT. By accessing, enrolling in or using our website, online classes, programs or services, you agree to the following Terms & Conditions. Please read them carefully before proceeding.
            </p>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. About NUTRIOMFIT</h2>
              <p className="text-muted-foreground mb-4">
                NUTRIOMFIT provides wellness services including yoga-based programs, strength-based sessions, kids yoga classes, guided juice fasting frameworks, and personalised nutritional guidance.
              </p>
              <p className="text-muted-foreground mb-4">
                All services are delivered online, via live instructor-led sessions or digital communication.
              </p>
              <p className="text-muted-foreground font-medium">
                NUTRIOMFIT does not provide medical treatment, medical diagnosis, physiotherapy, emergency care, or clinical dietetic services.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Eligibility & Participation</h2>
              <p className="text-muted-foreground mb-4">You must be:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>18 years or older to enrol in adult programs.</li>
                <li>A parent/guardian must enrol children aged 7–14 in Kids Yoga.</li>
                <li>Physically able to participate in mild to moderate exercise unless medically advised otherwise.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                NUTRIOMFIT reserves the right to deny participation if a program is not suitable due to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Pre-existing medical conditions</li>
                <li>Severe injuries</li>
                <li>Cardiovascular or neurological conditions</li>
                <li>Contraindications for fasting or yoga cleansing</li>
              </ul>
              <p className="text-muted-foreground">We may request a medical clearance where appropriate.</p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Online Services & Technology Requirements</h2>
              <p className="text-muted-foreground mb-4">You are responsible for:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Stable internet connection</li>
                <li>Safe practice environment (adequate space, non-slip surfaces)</li>
                <li>Proper equipment (yoga mat, light dumbbells, etc.)</li>
              </ul>
              <p className="text-muted-foreground">
                NUTRIOMFIT is not liable for service interruptions due to user-side technical issues.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment & Refund Policy</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>All payments must be made in advance.</li>
                <li>Access to programs is granted only after successful payment.</li>
                <li>Refunds are not provided once the program has begun.</li>
                <li>Refunds may be granted before the start date, at the discretion of NUTRIOMFIT.</li>
              </ul>
              <p className="text-muted-foreground">
                For subscriptions, cancellations must be made at least 48 hours before renewal.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Health, Risk & Safety Responsibilities</h2>
              <p className="text-muted-foreground mb-4">By participating, you acknowledge that:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Yoga, strength training and fasting may involve physical exertion and emotional shifts.</li>
                <li>You voluntarily assume all risks associated with these activities.</li>
                <li>You must stop immediately if you experience dizziness, pain, discomfort or breathlessness.</li>
                <li>You must consult a healthcare provider before beginning any program, especially if you have:</li>
              </ul>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-6 mb-4">
                <li>Diabetes</li>
                <li>Thyroid disorders</li>
                <li>PCOS/PCOD</li>
                <li>Cardiovascular disease</li>
                <li>Gastrointestinal conditions</li>
                <li>Respiratory illnesses</li>
                <li>Past surgeries</li>
                <li>Chronic medical conditions</li>
              </ul>
              <p className="text-muted-foreground font-medium">
                NUTRIOMFIT does not guarantee weight loss, disease reversal or specific outcomes.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Kids Yoga Policy</h2>
              <p className="text-muted-foreground mb-4">Parents/guardians must:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Ensure a safe practice space for the child.</li>
                <li>Supervise the child during online sessions (recommended).</li>
                <li>Confirm the child has no contraindicating medical conditions.</li>
              </ul>
              <p className="text-muted-foreground">
                Kids Yoga is non-competitive, educational and safety-focused.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. LSP + Juice Fasting Program Conditions</h2>
              <p className="text-muted-foreground mb-4">Participants must:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Fill a medical declaration form honestly.</li>
                <li>Understand this is not a medical detox or a replacement for medical treatment.</li>
                <li>Stop immediately and contact a doctor if experiencing severe fatigue, vomiting, abdominal pain, dizziness or fainting.</li>
              </ul>
              <p className="text-muted-foreground mb-4">This program is not suitable for:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Pregnant or breastfeeding women</li>
                <li>Individuals with kidney disease</li>
                <li>Diabetics on insulin or hypoglycaemics</li>
                <li>Individuals with severe GI disorders</li>
                <li>Elderly participants with frailty</li>
                <li>Anyone advised against fasting by a doctor</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. First Aid & Emergency Clause</h2>
              <p className="text-muted-foreground mb-4">Since services are provided online:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>NUTRIOMFIT cannot physically deliver first aid.</li>
                <li>Participants must keep emergency contact numbers accessible.</li>
                <li>In case of discomfort during a session, participants must stop and seek medical care immediately.</li>
              </ul>
              <p className="text-muted-foreground">
                NUTRIOMFIT provides general wellness guidance only, not emergency health services.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Liability Limitation</h2>
              <p className="text-muted-foreground mb-4">
                To the fullest extent permitted by UK law, NUTRIOMFIT shall not be liable for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Injuries resulting from improper practice environment</li>
                <li>Failure to follow instructions</li>
                <li>Pre-existing or undisclosed medical conditions</li>
                <li>Outcomes of fasting or exercise</li>
                <li>Emotional or physical stress responses</li>
              </ul>
              <p className="text-muted-foreground">Our programs offer general wellness guidance only.</p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">All content, including:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Videos</li>
                <li>Program modules</li>
                <li>Session recordings</li>
                <li>Written materials</li>
                <li>Images & branding</li>
              </ul>
              <p className="text-muted-foreground">
                …is the property of NUTRIOMFIT and may not be copied, distributed, or shared without written consent.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Prohibited Actions</h2>
              <p className="text-muted-foreground mb-4">You must not:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Record or share any live class</li>
                <li>Share login or access credentials</li>
                <li>Misuse website content</li>
                <li>Provide false medical information</li>
              </ul>
              <p className="text-muted-foreground font-medium">
                Violation may result in termination without refund.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Governing Law</h2>
              <p className="text-muted-foreground mb-2">
                These Terms are governed by the laws of England & Wales.
              </p>
              <p className="text-muted-foreground">
                Disputes will be resolved exclusively in UK courts.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;
