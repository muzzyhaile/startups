import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { ArrowLeft, Shield, Eye, Lock, Users, Database, Globe } from "lucide-react";

const Privacy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Privacy Policy - StartupIdea.AI | Data Protection & User Rights"
        description="Comprehensive privacy policy for StartupIdea.AI. Learn how we protect your data, your rights under GDPR/CCPA, and our commitment to privacy and security."
        keywords="privacy policy, data protection, GDPR, CCPA, user rights, data security, StartupIdea.AI, privacy compliance"
        url="https://startupidea.ai/privacy"
      />
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
            <Shield className="h-12 w-12 text-primary" />
            <h1 className="font-bebas text-5xl md:text-7xl text-foreground tracking-wider uppercase">
              PRIVACY
              <span className="text-primary neon-glow block">POLICY</span>
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground font-oswald tracking-wider uppercase mb-8">
            YOUR DATA • YOUR RIGHTS • OUR COMMITMENT
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
                <Eye className="h-8 w-8 mr-3" />
                Privacy at a Glance
              </h2>
              <div className="space-y-4 font-oswald text-muted-foreground">
                <p>
                  <strong>Effective Date:</strong> August 2, 2025
                </p>
                <p>
                  StartupIdea.AI is committed to protecting your privacy and personal data. This Privacy Policy 
                  explains how we collect, use, store, and protect your information when you use our AI-powered 
                  startup idea generation platform.
                </p>
                <p className="text-primary font-bold">
                  We believe in transparency, user control, and minimal data collection.
                </p>
              </div>
            </div>

            {/* Data We Collect */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase flex items-center">
                <Database className="h-8 w-8 mr-3" />
                Information We Collect
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-4 text-primary">1. Information You Provide</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald">
                    <li>• <strong>Account Information:</strong> Email address, username, profile information (if you create an account)</li>
                    <li>• <strong>Communication Data:</strong> Messages, feedback, and support requests you send to us</li>
                    <li>• <strong>User Preferences:</strong> Settings, favorites, and customization choices</li>
                    <li>• <strong>Content Interactions:</strong> Ideas you save, bookmark, or share</li>
                  </ul>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-4 text-primary">2. Information Collected Automatically</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald">
                    <li>• <strong>Usage Analytics:</strong> Page views, time spent, navigation patterns (via Google Analytics)</li>
                    <li>• <strong>Device Information:</strong> Browser type, operating system, screen resolution</li>
                    <li>• <strong>IP Address:</strong> For security and analytics purposes (anonymized after 30 days)</li>
                    <li>• <strong>Cookies & Local Storage:</strong> For functionality and user experience</li>
                  </ul>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-4 text-primary">3. Information We Do NOT Collect</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald">
                    <li>• Financial information or payment details</li>
                    <li>• Social media credentials or external account data</li>
                    <li>• Personal documents or sensitive business information</li>
                    <li>• Biometric data or facial recognition</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Data */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase flex items-center">
                <Lock className="h-8 w-8 mr-3" />
                How We Use Your Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">Platform Functionality</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald text-sm">
                    <li>• Generate personalized startup ideas</li>
                    <li>• Remember your preferences and settings</li>
                    <li>• Provide customer support</li>
                    <li>• Improve AI recommendation algorithms</li>
                  </ul>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">Analytics & Improvement</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald text-sm">
                    <li>• Analyze usage patterns and trends</li>
                    <li>• Identify and fix technical issues</li>
                    <li>• Optimize platform performance</li>
                    <li>• Develop new features and improvements</li>
                  </ul>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">Communication</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald text-sm">
                    <li>• Send important platform updates</li>
                    <li>• Respond to your inquiries</li>
                    <li>• Notify about new features (opt-in only)</li>
                    <li>• Provide security alerts</li>
                  </ul>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">Legal & Security</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald text-sm">
                    <li>• Comply with legal obligations</li>
                    <li>• Prevent fraud and abuse</li>
                    <li>• Protect platform security</li>
                    <li>• Enforce our Terms of Service</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase flex items-center">
                <Users className="h-8 w-8 mr-3" />
                Data Sharing & Third Parties
              </h2>
              
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg mb-6">
                <p className="text-amber-800 font-oswald font-bold">
                  We do NOT sell, rent, or trade your personal information to third parties for marketing purposes.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-xl mb-3">When We May Share Data:</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald">
                    <li>• <strong>Service Providers:</strong> Trusted partners who help operate our platform (hosting, analytics, support)</li>
                    <li>• <strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                    <li>• <strong>Security:</strong> To protect rights, property, or safety of users and the platform</li>
                    <li>• <strong>Business Transfer:</strong> In case of merger, acquisition, or sale of assets (with user notification)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3">Third-Party Services We Use:</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald">
                    <li>• <strong>Google Analytics:</strong> Website usage analytics (anonymized data)</li>
                    <li>• <strong>Supabase:</strong> Database and authentication services</li>
                    <li>• <strong>Hosting Provider:</strong> Platform infrastructure and content delivery</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase flex items-center">
                <Shield className="h-8 w-8 mr-3" />
                Your Privacy Rights
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">Access & Control</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald text-sm">
                    <li>• Request a copy of your data</li>
                    <li>• Update or correct your information</li>
                    <li>• Delete your account and data</li>
                    <li>• Opt-out of marketing communications</li>
                  </ul>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">GDPR Rights (EU Users)</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald text-sm">
                    <li>• Right to be forgotten</li>
                    <li>• Data portability</li>
                    <li>• Restrict processing</li>
                    <li>• Object to processing</li>
                  </ul>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">CCPA Rights (CA Users)</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald text-sm">
                    <li>• Know what data we collect</li>
                    <li>• Delete personal information</li>
                    <li>• Opt-out of data sales</li>
                    <li>• Non-discrimination rights</li>
                  </ul>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">How to Exercise Rights</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald text-sm">
                    <li>• Email: privacy@startupidea.ai</li>
                    <li>• Response time: 30 days</li>
                    <li>• Identity verification required</li>
                    <li>• No charge for most requests</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase flex items-center">
                <Lock className="h-8 w-8 mr-3" />
                Data Security & Retention
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-4 text-primary">Security Measures</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald">
                    <li>• <strong>Encryption:</strong> Data encrypted in transit and at rest</li>
                    <li>• <strong>Access Controls:</strong> Limited employee access on need-to-know basis</li>
                    <li>• <strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
                    <li>• <strong>Monitoring:</strong> 24/7 security monitoring and incident response</li>
                    <li>• <strong>Compliance:</strong> SOC 2, GDPR, and industry standard practices</li>
                  </ul>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-4 text-primary">Data Retention</h3>
                  <ul className="space-y-2 text-muted-foreground font-oswald">
                    <li>• <strong>Active Accounts:</strong> Data retained while account is active</li>
                    <li>• <strong>Inactive Accounts:</strong> Deleted after 2 years of inactivity</li>
                    <li>• <strong>Analytics Data:</strong> Anonymized and retained for 26 months</li>
                    <li>• <strong>Support Requests:</strong> Retained for 3 years for quality assurance</li>
                    <li>• <strong>Legal Requirements:</strong> May retain longer if required by law</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase flex items-center">
                <Globe className="h-8 w-8 mr-3" />
                International Data Transfers
              </h2>
              <div className="bg-gradient-secondary p-6 rounded-lg">
                <p className="text-muted-foreground font-oswald mb-4">
                  StartupIdea.AI operates globally, and your data may be transferred to and processed in countries 
                  other than your own. We ensure adequate protection through:
                </p>
                <ul className="space-y-2 text-muted-foreground font-oswald">
                  <li>• Standard Contractual Clauses (SCCs) for EU data transfers</li>
                  <li>• Adequacy decisions where applicable</li>
                  <li>• Binding Corporate Rules for internal transfers</li>
                  <li>• Regular assessment of data protection standards</li>
                </ul>
              </div>
            </div>

            {/* Cookies & Tracking */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase">Cookies & Tracking Technologies</h2>
              <div className="space-y-6">
                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">Essential Cookies</h3>
                  <p className="text-muted-foreground font-oswald text-sm">
                    Required for platform functionality, security, and user authentication. Cannot be disabled.
                  </p>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">Analytics Cookies</h3>
                  <p className="text-muted-foreground font-oswald text-sm">
                    Help us understand how users interact with our platform. You can opt-out through your browser settings.
                  </p>
                </div>

                <div className="bg-gradient-secondary p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-primary">Preference Cookies</h3>
                  <p className="text-muted-foreground font-oswald text-sm">
                    Remember your settings and preferences for a better user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact & Updates */}
            <div className="mb-12 p-8 bg-gradient-secondary border border-primary/20 rounded-lg">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase">Contact & Policy Updates</h2>
              <div className="space-y-4 text-muted-foreground font-oswald">
                <p>
                  <strong>Privacy Officer:</strong> privacy@startupidea.ai<br />
                  <strong>Data Protection Officer:</strong> dpo@startupidea.ai<br />
                  <strong>General Inquiries:</strong> support@startupidea.ai
                </p>
                <p>
                  We may update this Privacy Policy periodically. Significant changes will be notified via email 
                  and prominent platform notices. Continued use constitutes acceptance of updated terms.
                </p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t border-primary/20">
              <p className="text-sm text-muted-foreground font-oswald tracking-wider">
                LAST UPDATED: AUGUST 2, 2025 • VERSION 1.0
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
