import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Check, 
  Send,
  Sparkles,
  CircleCheck,
  ChevronDown,
  ChevronUp,
  Brain,
  Terminal,
  Bot,
  Cpu,
  Network,
  FileCode,
  Calendar,
  FileText,
  Building,
  Users,
  Headphones,
  ShieldCheck,
  Rocket,
  Lock
} from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out. Our team will contact you shortly.",
        variant: "success", // Using the new success variant we added
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    }, 1500);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How does Thor Signia's AI technology benefit enterprise businesses?",
      answer: "Our AI technology delivers measurable ROI through increased operational efficiency (average 40% improvement), enhanced decision-making with predictive analytics, and personalized customer experiences. Our enterprise clients typically see cost reductions of 25-30% in areas where our AI solutions are implemented."
    },
    {
      question: "What industries can benefit from your AI solutions?",
      answer: "Our AI solutions are especially effective for financial services, healthcare, manufacturing, retail, and technology sectors. Each implementation is customized with industry-specific models and integration protocols, ensuring optimal performance for your unique business requirements."
    },
    {
      question: "How long does implementation typically take?",
      answer: "Most implementations are completed within 2-6 weeks, depending on complexity and scope. Our phased deployment approach includes discovery (1 week), model training and customization (1-2 weeks), integration (1-2 weeks), and thorough testing/optimization (1 week), ensuring minimal business disruption."
    },
    {
      question: "What ongoing support do you offer after implementation?",
      answer: "We provide comprehensive enterprise support including 24/7 technical assistance, dedicated solution specialists, regular performance reviews, and continuous model improvements. Our support packages include training for your team, monthly optimization reports, and priority access to new AI capabilities."
    },
    {
      question: "How do you handle data security and compliance?",
      answer: "Security is foundational to our AI architecture. We implement end-to-end encryption, role-based access controls, and data residency options. All systems are compliant with GDPR, HIPAA, and industry-specific regulations. We maintain SOC 2 Type II certification and regular security audits."
    },
    {
      question: "Can your AI solutions integrate with our existing systems?",
      answer: "Absolutely. Our solutions feature enterprise-grade API endpoints, pre-built connectors for major platforms (Salesforce, SAP, Oracle, Microsoft), custom webhook support, and SSO integration capabilities. Our architecture is designed for seamless integration with minimal disruption to your existing workflows."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      
      {/* Contact Header Section */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[url('/data-grid.png')] bg-repeat opacity-5"></div>
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#009898]/10 rounded-bl-full opacity-70 z-0 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#88bf42]/10 rounded-tr-full opacity-60 z-0 blur-xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#009898]/10 text-[#009898] text-sm font-medium animate-fade-in border border-[#009898]/30">
              <span className="flex items-center">
                <Terminal className="h-4 w-4 mr-2 text-[#009898]" />
                Enterprise Communication Interface
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 animate-slide-up">
              Contact <span className="text-[#009898] relative inline-block">Thor Signia
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#88bf42]"></span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              Connect with our AI specialists to explore customized enterprise solutions
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="flex items-center bg-white shadow-md rounded-lg px-5 py-3 border border-gray-200">
                <div className="w-2 h-2 bg-[#88bf42] rounded-full mr-2 animate-pulse"></div>
                <span className="text-gray-700 text-sm">AI Support Engineers Online</span>
              </div>
              <div className="flex items-center bg-white shadow-md rounded-lg px-5 py-3 border border-gray-200">
                <div className="mr-2">
                  <Clock className="h-4 w-4 text-[#009898]" />
                </div>
                <span className="text-gray-700 text-sm">Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20 relative bg-white">
        {/* Subtle background patterns */}
        <div className="absolute right-0 top-20 w-64 h-64 bg-[#88bf42]/5 rounded-full blur-xl opacity-60 z-0"></div>
        <div className="absolute left-0 bottom-20 w-64 h-64 bg-[#009898]/5 rounded-full blur-xl opacity-50 z-0"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Ready to Deploy <br /><span className="text-[#88bf42]">Advanced AI</span> for Your Enterprise?
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Complete the form and one of our AI solution architects will analyze your requirements and recommend the optimal configuration for your specific business challenges.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-6">
                    <div className="w-14 h-14 bg-[#88bf42]/10 rounded-xl shadow-sm flex items-center justify-center border border-[#88bf42]/20">
                      <Building className="text-[#88bf42] w-7 h-7" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Headquarters</h3>
                    <p className="text-gray-600">123 Innovation Drive, San Francisco, CA 94105</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-6">
                    <div className="w-14 h-14 bg-[#009898]/10 rounded-xl shadow-sm flex items-center justify-center border border-[#009898]/20">
                      <Headphones className="text-[#009898] w-7 h-7" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Support</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-6">
                    <div className="w-14 h-14 bg-[#88bf42]/10 rounded-xl shadow-sm flex items-center justify-center border border-[#88bf42]/20">
                      <Mail className="text-[#88bf42] w-7 h-7" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Inquiries</h3>
                    <p className="text-gray-600">enterprise@thorsignia.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-6">
                    <div className="w-14 h-14 bg-[#009898]/10 rounded-xl shadow-sm flex items-center justify-center border border-[#009898]/20">
                      <Users className="text-[#009898] w-7 h-7" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnership Opportunities</h3>
                    <p className="text-gray-600">partners@thorsignia.com</p>
                  </div>
                </div>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-12 pt-12 border-t border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="bg-[#009898]/10 p-2 rounded-full mr-3 border border-[#009898]/20">
                    <ShieldCheck className="w-5 h-5 text-[#009898]" />
                  </div>
                  <p className="text-gray-700 font-medium">SOC 2 Type II certified infrastructure</p>
                </div>
                <div className="flex items-center mb-6">
                  <div className="bg-[#88bf42]/10 p-2 rounded-full mr-3 border border-[#88bf42]/20">
                    <CircleCheck className="w-5 h-5 text-[#88bf42]" />
                  </div>
                  <p className="text-gray-700 font-medium">99.9% enterprise SLA guarantee</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#009898]/10 p-2 rounded-full mr-3 border border-[#009898]/20">
                    <Rocket className="w-5 h-5 text-[#009898]" />
                  </div>
                  <p className="text-gray-700 font-medium">Advanced AI models trained for your industry</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="h-1.5 bg-[#009898]"></div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Bot className="w-6 h-6 mr-2 text-[#009898]" />
                    <span>Enterprise Contact Form</span>
                  </h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            required
                            className="w-full bg-gray-50 border-gray-200 focus:border-[#009898] focus:ring-[#009898] text-gray-800 placeholder:text-gray-400"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john.smith@example.com"
                            required
                            className="w-full bg-gray-50 border-gray-200 focus:border-[#009898] focus:ring-[#009898] text-gray-800 placeholder:text-gray-400"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 123-4567"
                            className="w-full bg-gray-50 border-gray-200 focus:border-[#009898] focus:ring-[#009898] text-gray-800 placeholder:text-gray-400"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                            Company Name *
                          </label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Acme Inc."
                            required
                            className="w-full bg-gray-50 border-gray-200 focus:border-[#009898] focus:ring-[#009898] text-gray-800 placeholder:text-gray-400"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Business Requirements *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe your business challenges and how our AI solutions could help..."
                          required
                          className="w-full min-h-[150px] bg-gray-50 border-gray-200 focus:border-[#009898] focus:ring-[#009898] text-gray-800 placeholder:text-gray-400"
                        />
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="privacy"
                            type="checkbox"
                            required
                            className="w-4 h-4 bg-gray-50 text-[#009898] border-gray-300 rounded focus:ring-[#009898]"
                          />
                        </div>
                        <div className="ml-3">
                          <label htmlFor="privacy" className="text-sm text-gray-600">
                            I agree to Thor Signia's Privacy Policy and consent to being contacted about my inquiry.
                          </label>
                        </div>
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-black hover:bg-white hover:text-black text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                        onClick={() => !isSubmitting && window.scrollTo({ top: 0, behavior: 'smooth' })}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                            <span>Processing...</span>
                          </>
                        ) : (
                          <span className="flex items-center">
                            <Send className="h-5 w-5 mr-2" />
                            Submit Inquiry
                          </span>
                        )}
                      </Button>

                      <div className="grid grid-cols-3 gap-3 mt-4">
                        <div className="bg-gray-50 rounded-lg p-3 text-center">
                          <div className="text-[#009898] text-xs font-medium mb-1">Response Time</div>
                          <div className="text-gray-700 text-sm">Within 24 hours</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 text-center">
                          <div className="text-[#009898] text-xs font-medium mb-1">Demo Available</div>
                          <div className="text-gray-700 text-sm">Yes, on request</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 text-center">
                          <div className="text-[#009898] text-xs font-medium mb-1">NDA Option</div>
                          <div className="text-gray-700 text-sm">Available</div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comprehensive FAQ Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/data-grid.png')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 right-0 w-full h-px bg-[#009898]/20"></div>
        <div className="absolute left-0 top-1/2 w-24 h-24 bg-[#88bf42]/10 rounded-full blur-xl"></div>
        <div className="absolute right-0 bottom-0 w-32 h-32 bg-[#009898]/10 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-[#88bf42]/20 text-[#88bf42] border border-[#88bf42]/30">
                <Cpu className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Enterprise AI Knowledge Base</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Discover how our AI solutions address your business challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`bg-white border ${openFaq === index ? 'border-[#009898]/40' : 'border-gray-100'} rounded-xl overflow-hidden shadow-md transition-all duration-300 h-full`}
                >
                  <button
                    className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex items-center pr-4">
                      {index % 2 === 0 ? 
                        <Brain className="w-5 h-5 mr-3 text-[#009898]" /> : 
                        <Cpu className="w-5 h-5 mr-3 text-[#88bf42]" />
                      }
                      <span className="font-semibold text-gray-900 text-base">{faq.question}</span>
                    </div>
                    <div className="ml-2 flex-shrink-0">
                      {openFaq === index ? 
                        <ChevronUp className="w-5 h-5 text-[#88bf42]" /> : 
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      }
                    </div>
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'pb-6 max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="text-gray-600 border-t border-gray-100 pt-4 prose prose-sm max-w-none">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">Have a question that's not covered here?</p>
              <Button 
                className="bg-black hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                asChild
              >
                <Link to="/contact">
                  <span className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Our AI Team
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className="bg-white py-16 border-t border-gray-100 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-[#009898]"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-gray-900">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-lg bg-[#88bf42]/10 border border-[#88bf42]/20">
              <span className="flex items-center text-[#88bf42] text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                Enterprise AI Partnership
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg opacity-90 mb-8 text-gray-600">Join industry leaders leveraging Thor Signia's enterprise AI platform to gain competitive advantages</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-black hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg text-lg shadow-lg transition-all duration-300"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                asChild
              >
                <Link to="/contact">
                  <span className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule AI Consultation
                  </span>
                </Link>
              </Button>
            </div>
            
            <div className="mt-10 flex items-center justify-center space-x-8">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 overflow-hidden mr-2 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#009898]" />
                </div>
                <span className="text-sm text-gray-600">SOC 2 Certified</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 overflow-hidden mr-2 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-[#88bf42]" />
                </div>
                <span className="text-sm text-gray-600">GDPR Compliant</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 overflow-hidden mr-2 flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-[#009898]" />
                </div>
                <span className="text-sm text-gray-600">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Animation styles */}
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes slide-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
