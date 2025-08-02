import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { ArrowLeft } from "lucide-react";

const Imprint = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Imprint & Legal Information - StartupIdea.AI"
        description="Legal information, company details, and regulatory compliance for StartupIdea.AI - Your trusted AI-powered startup idea generation platform."
        keywords="imprint, legal information, company details, StartupIdea.AI, regulatory compliance, business registration"
        url="https://startupidea.ai/imprint"
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
          
          <h1 className="font-bebas text-5xl md:text-7xl mb-6 text-foreground tracking-wider uppercase">
            IMPRINT
            <span className="text-primary neon-glow block">LEGAL INFORMATION</span>
          </h1>
          
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
            
            {/* Company Information */}
            <div className="mb-12 p-8 bg-gradient-secondary border-l-4 border-primary">
              <h2 className="font-bebas text-3xl text-primary mb-4 tracking-wider uppercase">Company Information</h2>
              <div className="space-y-4 font-oswald">
                <div>
                  <h3 className="font-bold text-lg mb-2">StartupIdea.AI</h3>
                  <p className="text-muted-foreground">
                    AI-Powered Startup Idea Generation Platform
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Address:</h4>
                  <p className="text-muted-foreground">
                    [Your Company Address]<br />
                    [City, State, ZIP Code]<br />
                    [Country]
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Contact Information:</h4>
                  <p className="text-muted-foreground">
                    Email: legal@startupidea.ai<br />
                    Phone: [Your Phone Number]<br />
                    Website: startupidea.ai
                  </p>
                </div>
              </div>
            </div>

            {/* Legal Representatives */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase">Legal Representatives</h2>
              <div className="bg-gradient-secondary p-6 rounded-lg">
                <p className="font-oswald text-muted-foreground">
                  <strong>Managing Director / CEO:</strong> [Your Name]<br />
                  <strong>Registration Number:</strong> [Company Registration Number]<br />
                  <strong>VAT ID:</strong> [VAT Identification Number]<br />
                  <strong>Commercial Register:</strong> [Court and Registration Details]
                </p>
              </div>
            </div>

            {/* Regulatory Information */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase">Regulatory Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-xl mb-3">Professional Supervisory Authority</h3>
                  <p className="text-muted-foreground font-oswald">
                    This platform operates under the regulatory framework for digital services and AI applications 
                    as defined by relevant data protection and digital services legislation.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-xl mb-3">Licensing</h3>
                  <p className="text-muted-foreground font-oswald">
                    StartupIdea.AI is licensed to operate as a digital platform providing AI-generated content 
                    and business intelligence services. All content generated is for informational purposes only.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase">Disclaimer</h2>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
                <div className="space-y-4 text-muted-foreground font-oswald">
                  <p>
                    <strong>Content Accuracy:</strong> The startup ideas and business concepts provided on this platform 
                    are generated by artificial intelligence and are intended for inspirational and educational purposes only. 
                    We make no warranties regarding the accuracy, completeness, or viability of any generated content.
                  </p>
                  
                  <p>
                    <strong>Investment Risk:</strong> Any business venture involves inherent risks. Users should conduct 
                    their own due diligence and seek professional advice before making any business or investment decisions 
                    based on content from this platform.
                  </p>
                  
                  <p>
                    <strong>Intellectual Property:</strong> While our AI generates unique combinations of ideas, users are 
                    responsible for ensuring their business concepts do not infringe on existing intellectual property rights.
                  </p>
                  
                  <p>
                    <strong>No Guarantee of Success:</strong> StartupIdea.AI does not guarantee the commercial success, 
                    profitability, or feasibility of any startup ideas generated through our platform.
                  </p>
                </div>
              </div>
            </div>

            {/* External Links */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase">External Links</h2>
              <p className="text-muted-foreground font-oswald">
                Our platform may contain links to external websites. We are not responsible for the content, 
                privacy practices, or security of these external sites. Users access external links at their own risk.
              </p>
            </div>

            {/* Copyright Information */}
            <div className="mb-12">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase">Copyright Information</h2>
              <p className="text-muted-foreground font-oswald">
                © 2025 StartupIdea.AI. All rights reserved. The design, layout, and original content of this website 
                are protected by copyright law. Unauthorized reproduction or distribution is prohibited.
              </p>
            </div>

            {/* Contact for Legal Matters */}
            <div className="mb-12 p-8 bg-gradient-secondary border border-primary/20 rounded-lg">
              <h2 className="font-bebas text-3xl text-primary mb-6 tracking-wider uppercase">Legal Contact</h2>
              <p className="text-muted-foreground font-oswald">
                For legal inquiries, copyright issues, or other legal matters, please contact:<br />
                <strong>Email:</strong> legal@startupidea.ai<br />
                <strong>Subject Line:</strong> "Legal Inquiry - [Your Topic]"<br />
                <strong>Response Time:</strong> We aim to respond to legal inquiries within 3-5 business days.
              </p>
            </div>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t border-primary/20">
              <p className="text-sm text-muted-foreground font-oswald tracking-wider">
                LAST UPDATED: AUGUST 2, 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Imprint;
