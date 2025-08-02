import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { ArrowLeft, FileText, AlertTriangle, Scale, Zap, Shield, Globe } from "lucide-react";

const Terms = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-secondary relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary" />
        
        <div className="container mx-auto max-w-4xl">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-oswald tracking-wider uppercase"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </button>
          
          <div className="flex items-center space-x-4 mb-6">
            <FileText className="h-12 w-12 text-primary" />
            <h1 className="font-bebas text-5xl md:text-7xl text-foreground tracking-wider uppercase">
              TERMS
              <span className="text-primary neon-glow block">OF SERVICE</span>
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground font-oswald tracking-wider uppercase mb-8">
            YOUR AGREEMENT • OUR RULES • MUTUAL RESPECT
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-1">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-2 h-6 bg-primary/30 border border-primary/50" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none text-foreground">
            
            {/* Introduction */}
            <div className="mb-12 p-8 bg-gradient-secondary border-l-4 border-primary">
              <h2 className="font-bebas text-3xl text-primary mb-4 tracking-wider uppercase flex items-center">
                <Scale className="h-8 w-8 mr-3" />
                Agreement Overview
              </h2>
              <div className="space-y-4 font-oswald text-muted-foreground">
                <p>
                  <strong>Effective Date:</strong> August 2, 2025<br />
                  <strong>Last Updated:</strong> August 2, 2025
                </p>
                <p>
                  Welcome to StartupIdea.AI ("we," "our," or "us"). These Terms of Service ("Terms") govern your 
                  access to and use of our AI-powered startup idea generation platform and related services.
                </p>
                <p className="text-primary font-bold">
                  By using our platform, you agree to these Terms. If you disagree, please do not use our service.
                </p>
              </div>
            </div>

            {/* Acceptance and Eligibility */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase flex items-center">
                <Shield className="h-8 w-8 mr-3" />
                Acceptance & Eligibility
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-4 text-primary">Who Can Use Our Service</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald">
                    <li>• <strong>Age Requirement:</strong> You must be at least 18 years old or have parental consent</li>
                    <li>• <strong>Legal Capacity:</strong> You must have the legal authority to enter into this agreement</li>
                    <li>• <strong>Geographic Restrictions:</strong> Service available worldwide except where prohibited by law</li>
                    <li>• <strong>Business Use:</strong> Commercial use is permitted under these Terms</li>
                  </ul>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-4 text-primary">Account Registration</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald">
                    <li>• Provide accurate and complete information</li>
                    <li>• Maintain the security of your account credentials</li>
                    <li>• Notify us immediately of any unauthorized access</li>
                    <li>• You are responsible for all activities under your account</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Platform Services */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase flex items-center">
                <Zap className="h-8 w-8 mr-3" />
                Platform Services & Features
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">AI-Generated Ideas</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald text-sm">
                    <li>• Daily startup concept generation</li>
                    <li>• Category-based idea browsing</li>
                    <li>• Detailed business frameworks</li>
                    <li>• Market analysis and insights</li>
                  </ul>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">User Features</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald text-sm">
                    <li>• Idea bookmarking and favorites</li>
                    <li>• Category filtering and search</li>
                    <li>• Personal dashboard (future feature)</li>
                    <li>• Export and sharing capabilities</li>
                  </ul>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">Analytics & Insights</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald text-sm">
                    <li>• Market size estimates</li>
                    <li>• Revenue model suggestions</li>
                    <li>• Time-to-market projections</li>
                    <li>• Risk assessment frameworks</li>
                  </ul>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">Platform Access</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald text-sm">
                    <li>• Web-based platform access</li>
                    <li>• Mobile-responsive design</li>
                    <li>• Real-time content updates</li>
                    <li>• Cross-device synchronization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase">User Responsibilities & Conduct</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-4 text-primary">Acceptable Use</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald">
                    <li>• Use the platform for legitimate business and educational purposes</li>
                    <li>• Respect intellectual property rights of others</li>
                    <li>• Comply with all applicable laws and regulations</li>
                    <li>• Maintain professional conduct when interacting with our platform</li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-4 text-red-600 flex items-center">
                    <AlertTriangle className="h-6 w-6 mr-2" />
                    Prohibited Activities
                  </h3>
                  <ul className="space-y-2 text-red-700 font-oswald">
                    <li>• Attempting to hack, reverse engineer, or disrupt the platform</li>
                    <li>• Using automated bots or scrapers without permission</li>
                    <li>• Sharing false, misleading, or harmful content</li>
                    <li>• Violating any laws or third-party rights</li>
                    <li>• Impersonating others or creating fake accounts</li>
                    <li>• Transmitting viruses, malware, or malicious code</li>
                    <li>• Attempting to gain unauthorized access to other accounts</li>
                    <li>• Using the service for illegal activities or fraud</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Content and Intellectual Property */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase">Content & Intellectual Property</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-4 text-primary">AI-Generated Content</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald">
                    <li>• <strong>Ownership:</strong> You own the rights to implement and develop ideas you find</li>
                    <li>• <strong>No Exclusivity:</strong> Ideas may be similar to those generated for other users</li>
                    <li>• <strong>Due Diligence:</strong> You are responsible for researching existing patents and trademarks</li>
                    <li>• <strong>No Guarantees:</strong> We don't guarantee uniqueness or commercial viability</li>
                  </ul>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-4 text-primary">Platform Content</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald">
                    <li>• <strong>Our IP:</strong> Platform design, algorithms, and branding remain our property</li>
                    <li>• <strong>User License:</strong> We grant you a limited license to use our platform</li>
                    <li>• <strong>Feedback Rights:</strong> We may use your feedback to improve our services</li>
                    <li>• <strong>Content Accuracy:</strong> We strive for accuracy but make no warranties</li>
                  </ul>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-4 text-primary">User-Generated Content</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald">
                    <li>• You retain ownership of content you create or upload</li>
                    <li>• You grant us a license to use your content for platform operation</li>
                    <li>• You represent that you have rights to all content you provide</li>
                    <li>• We may remove content that violates these Terms</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Disclaimers and Limitations */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase flex items-center">
                <AlertTriangle className="h-8 w-8 mr-3" />
                Disclaimers & Limitations
              </h2>
              
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-xl mb-4 text-amber-800">Important Disclaimers</h3>
                <div className="space-y-3 text-amber-700 font-oswald">
                  <p><strong>No Investment Advice:</strong> Our content is for informational purposes only and does not constitute investment, legal, or business advice.</p>
                  <p><strong>No Success Guarantees:</strong> We make no warranties about the commercial success or viability of any startup ideas.</p>
                  <p><strong>Market Research Required:</strong> Users must conduct their own market research and due diligence.</p>
                  <p><strong>AI Limitations:</strong> AI-generated content may contain errors, biases, or inaccuracies.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">Service Availability</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald text-sm">
                    <li>• Platform provided "as is" and "as available"</li>
                    <li>• No guarantee of uninterrupted service</li>
                    <li>• Maintenance and updates may cause downtime</li>
                    <li>• Features may change or be discontinued</li>
                  </ul>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">Limitation of Liability</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald text-sm">
                    <li>• Liability limited to maximum extent by law</li>
                    <li>• No liability for indirect or consequential damages</li>
                    <li>• Total liability capped at service fees paid</li>
                    <li>• User assumes business risks and decisions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Privacy and Data */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase">Privacy & Data Protection</h2>
              <div className="bg-gradient-secondary p-6 rounded-lg">
                <p className="text-muted-foreground font-oswald mb-4">
                  Your privacy is important to us. Our collection, use, and protection of your personal information 
                  is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <ul className="space-y-2 text-muted-foreground font-oswald">
                  <li>• We collect minimal data necessary for service operation</li>
                  <li>• Your data is protected with industry-standard security measures</li>
                  <li>• You have rights to access, correct, and delete your data</li>
                  <li>• We comply with GDPR, CCPA, and other applicable privacy laws</li>
                </ul>
              </div>
            </div>

            {/* Payment and Billing */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase">Payment & Billing (Future)</h2>
              <div className="bg-gradient-secondary p-6 rounded-lg">
                <p className="text-muted-foreground font-oswald mb-4">
                  Currently, our platform is free to use. Future premium features may require payment:
                </p>
                <ul className="space-y-2 text-muted-foreground font-oswald">
                  <li>• <strong>Free Tier:</strong> Basic idea generation and browsing will remain free</li>
                  <li>• <strong>Premium Features:</strong> Advanced analytics, personalization, and business tools</li>
                  <li>• <strong>Billing Terms:</strong> Monthly or annual subscriptions with clear pricing</li>
                  <li>• <strong>Refund Policy:</strong> Pro-rated refunds for annual subscriptions within 30 days</li>
                  <li>• <strong>Currency:</strong> All prices in USD unless otherwise specified</li>
                </ul>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase">Account Termination</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">Your Rights</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald text-sm">
                    <li>• Cancel your account at any time</li>
                    <li>• Download your data before cancellation</li>
                    <li>• No penalty for termination</li>
                    <li>• Immediate cessation of data processing</li>
                  </ul>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">Our Rights</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald text-sm">
                    <li>• Suspend accounts for Terms violations</li>
                    <li>• Terminate for illegal or harmful activities</li>
                    <li>• Provide notice when reasonably possible</li>
                    <li>• Preserve data for legal requirements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase">Changes to These Terms</h2>
              <div className="bg-gradient-secondary p-6 rounded-lg">
                <div className="space-y-4 text-muted-foreground font-oswald">
                  <p>
                    <strong>Updates:</strong> We may update these Terms to reflect changes in our services, 
                    legal requirements, or business practices.
                  </p>
                  <p>
                    <strong>Notice:</strong> Significant changes will be communicated via email and platform notifications 
                    at least 30 days before taking effect.
                  </p>
                  <p>
                    <strong>Acceptance:</strong> Continued use of our platform after changes constitute acceptance 
                    of the updated Terms.
                  </p>
                  <p>
                    <strong>Rejection:</strong> If you disagree with changes, you may terminate your account before 
                    the effective date.
                  </p>
                </div>
              </div>
            </div>

            {/* Governing Law and Disputes */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase flex items-center">
                <Globe className="h-8 w-8 mr-3" />
                Governing Law & Dispute Resolution
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-4 text-primary">Applicable Law</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald">
                    <li>• These Terms are governed by the laws of [Your Jurisdiction]</li>
                    <li>• Disputes subject to the jurisdiction of [Your Courts]</li>
                    <li>• International users may have additional rights under local law</li>
                    <li>• EU users benefit from additional GDPR protections</li>
                  </ul>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-4 text-primary">Dispute Resolution Process</h3>
                  <ol className="space-y-2 text-muted-foreground font-oswald">
                    <li>1. <strong>Direct Communication:</strong> Contact us first at legal@startupidea.ai</li>
                    <li>2. <strong>Informal Resolution:</strong> 30-day good faith negotiation period</li>
                    <li>3. <strong>Mediation:</strong> Binding mediation if informal resolution fails</li>
                    <li>4. <strong>Arbitration:</strong> Individual arbitration for remaining disputes</li>
                    <li>5. <strong>Class Action Waiver:</strong> No class actions or collective proceedings</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12 p-8 bg-gradient-secondary border border-primary/20 rounded-lg">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase">Contact Information</h2>
              <div className="space-y-4 text-muted-foreground font-oswald">
                <p>
                  <strong>Legal Questions:</strong> legal@startupidea.ai<br />
                  <strong>General Support:</strong> support@startupidea.ai<br />
                  <strong>Privacy Matters:</strong> privacy@startupidea.ai<br />
                  <strong>Business Inquiries:</strong> business@startupidea.ai
                </p>
                <p>
                  <strong>Mailing Address:</strong><br />
                  StartupIdea.AI Legal Department<br />
                  [Your Company Address]<br />
                  [City, State, ZIP Code]<br />
                  [Country]
                </p>
                <p>
                  <strong>Response Time:</strong> We aim to respond to legal inquiries within 5 business days.
                </p>
              </div>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase">Additional Provisions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">Severability</h3>
                  <p className="text-muted-foreground font-oswald text-sm">
                    If any provision of these Terms is invalid or unenforceable, the remaining provisions 
                    will continue in full force and effect.
                  </p>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">Entire Agreement</h3>
                  <p className="text-muted-foreground font-oswald text-sm">
                    These Terms, together with our Privacy Policy, constitute the entire agreement between 
                    you and StartupIdea.AI.
                  </p>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">No Waiver</h3>
                  <p className="text-muted-foreground font-oswald text-sm">
                    Our failure to enforce any provision doesn't constitute a waiver of our right to enforce 
                    it in the future.
                  </p>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">Assignment</h3>
                  <p className="text-muted-foreground font-oswald text-sm">
                    We may assign these Terms in connection with a merger, acquisition, or sale of assets. 
                    You may not assign your rights without our consent.
                  </p>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t border-primary/20">
              <p className="text-sm text-muted-foreground font-oswald tracking-wider">
                LAST UPDATED: AUGUST 2, 2025 • VERSION 1.0 • EFFECTIVE IMMEDIATELY
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
