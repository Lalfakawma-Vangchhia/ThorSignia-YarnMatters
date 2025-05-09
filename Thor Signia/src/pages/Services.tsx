import { useState, useEffect, useRef, useCallback, cloneElement } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Globe, 
  Database, 
  LineChart, 
  Settings, 
  Shield, 
  Award, 
  Check, 
  ArrowRight, 
  Building, 
  Brain,
  CheckCircle2,
  Layers,
  Briefcase,
  Mic,
  Waves,
  MessageSquare,
  Hash,
  Share2,
  Target,
  Filter,
  MoreHorizontal,
  Megaphone,
  Cpu
} from 'lucide-react';
import ChatbotDemo from '@/components/ChatbotDemo';
import VoiceAgentDemo from '@/components/VoiceAgentDemo';

// Import local image for the background
import servicesBgImage from '@/assets/images/services_bg.jpg';

// Services data from ServicesSection.tsx
const servicesData = [
  {
    id: 1,
    title: "Conversational Voice Interfaces",
    icon: <MessageCircle className="h-8 w-8" />,
    description: "Advanced conversational AI agents that handle customer inquiries with human-like interactions",
    color: "bg-[#1c9f1e]",
    bgColor: "bg-[#1c9f1e]/10",
    hoverBgColor: "group-hover:bg-[#1c9f1e]/20",
    benefits: [
      "24/7 customer support without human limitations",
      "Handles complex, multi-turn conversations naturally",
      "Seamless integration with existing communication channels"
    ],
    features: [
      "Natural language understanding with contextual memory",
      "Sentiment analysis and emotional intelligence",
      "Custom voice personality matching your brand tone"
    ],
    caseStudy: {
      title: "Global Financial Institution",
      description: "Reduced call center volume by 42% while improving customer satisfaction scores by 18%. Achieved 95% accurate call resolution on first contact.",
      metrics: ["42% reduction in call volume", "18% improvement in CSAT", "95% first-call resolution"]
    }
  },
  {
    id: 2,
    title: "Autonomous Social Management",
    icon: <Globe className="h-8 w-8" />,
    description: "AI-powered content creation and scheduling for optimal social media engagement",
    color: "bg-[#10b4b7]",
    bgColor: "bg-[#10b4b7]/10",
    hoverBgColor: "group-hover:bg-[#10b4b7]/20",
    benefits: [
      "Content generation at scale across platforms",
      "Automated audience growth and engagement",
      "Data-driven performance optimization"
    ],
    features: [
      "AI content creation tailored to each platform",
      "Automated scheduling and posting optimization",
      "Sentiment tracking and community management"
    ],
    caseStudy: {
      title: "E-commerce Retailer",
      description: "Increased social engagement by 215% while reducing content creation costs by 65%. Generated 3.2x more qualified leads through personalized content.",
      metrics: ["215% increase in engagement", "65% reduction in content costs", "320% more qualified leads"]
    }
  },
  {
    id: 3,
    title: "AI-Driven Lead Funnels",
    icon: <LineChart className="h-8 w-8" />,
    description: "Intelligent lead identification, qualification, and nurturing to fill your sales pipeline",
    color: "bg-[#9ac857]",
    bgColor: "bg-[#9ac857]/10",
    hoverBgColor: "group-hover:bg-[#9ac857]/20",
    benefits: [
      "Hyper-targeted lead acquisition and qualification",
      "Personalized nurturing sequences at scale",
      "Higher conversion rates through AI optimization"
    ],
    features: [
      "Predictive lead scoring and qualification",
      "Automated multi-channel nurturing sequences",
      "Behavioral analytics and engagement tracking"
    ],
    caseStudy: {
      title: "B2B Technology Provider",
      description: "Achieved 78% increase in qualified leads and 42% higher conversion rate. Reduced cost per acquisition by 54% while scaling lead volume.",
      metrics: ["78% more qualified leads", "42% higher conversion rate", "54% lower acquisition cost"]
    }
  },
  {
    id: 4,
    title: "Smart Chat Interfaces",
    icon: <MessageCircle className="h-8 w-8" />,
    description: "Conversational AI that understands context and provides personalized customer experiences",
    color: "bg-[#1c9f1e]",
    bgColor: "bg-[#1c9f1e]/10",
    hoverBgColor: "group-hover:bg-[#1c9f1e]/20",
    benefits: [
      "24/7 instant customer support and engagement",
      "Seamless handoff between AI and human agents",
      "Personalized experiences based on user data"
    ],
    features: [
      "Contextual understanding with persistent memory",
      "Multi-platform deployment (web, mobile, messaging)",
      "Real-time personalization and recommendation"
    ],
    caseStudy: {
      title: "Healthcare Provider",
      description: "Reduced patient inquiry response time from 24 hours to immediate. Handled 82% of routine inquiries autonomously, freeing staff for complex cases.",
      metrics: ["Immediate response time", "82% autonomous resolution", "36% increase in patient satisfaction"]
    }
  },
  {
    id: 5,
    title: "Omnichannel Engagement",
    icon: <Database className="h-8 w-8" />,
    description: "Self-optimizing ad campaigns that maximize ROI through continuous AI learning",
    color: "bg-[#10b4b7]",
    bgColor: "bg-[#10b4b7]/10",
    hoverBgColor: "group-hover:bg-[#10b4b7]/20",
    benefits: [
      "Unified messaging across all customer touchpoints",
      "Self-optimizing campaigns that improve over time",
      "Superior ROI through AI-powered targeting"
    ],
    features: [
      "Cross-channel campaign automation and optimization",
      "Dynamic creative generation and testing",
      "Real-time performance analytics and adaptation"
    ],
    caseStudy: {
      title: "Retail Chain",
      description: "Increased marketing ROI by 127% while reducing campaign management time by 65%. Achieved 3.8x higher conversion rate through personalized messaging.",
      metrics: ["127% higher marketing ROI", "65% less management time", "380% higher conversion rate"]
    }
  },
  {
    id: 6,
    title: "Tailored AI Architectures",
    icon: <Settings className="h-8 w-8" />,
    description: "Tailored AI implementation designed for your specific business challenges",
    color: "bg-[#9ac857]",
    bgColor: "bg-[#9ac857]/10",
    hoverBgColor: "group-hover:bg-[#9ac857]/20",
    benefits: [
      "Custom AI solutions for unique business challenges",
      "Seamless integration with existing systems",
      "Proprietary algorithms built for your specific needs"
    ],
    features: [
      "Purpose-built AI models for your industry",
      "End-to-end solution from data to deployment",
      "Continuous improvement and optimization over time"
    ],
    caseStudy: {
      title: "Manufacturing Enterprise",
      description: "Reduced production defects by 72% with custom computer vision system. Saved $4.2M annually through AI-powered quality control and predictive maintenance.",
      metrics: ["72% fewer production defects", "$4.2M annual savings", "92% prediction accuracy"]
    }
  }
];

// Add these CSS declarations for TypeScript
declare module 'react' {
  interface CSSProperties {
    transformStyle?: 'preserve-3d' | 'flat';
  }
}

// Add proper types for the industry and implementation step objects
interface Industry {
  name: string;
  icon: string;
  description: string;
}

interface ImplementationStep {
  title: string;
  icon: string;
  description: string;
}

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("ai-voice-agents");
  // Added state for the service grid component
  const [activeService, setActiveService] = useState(servicesData[0]);
  const [activeServiceTab, setActiveServiceTab] = useState("benefits");
  
  // CSS Animation classes
  const animations = {
    fadeIn: "animate-[fadeIn_1s_ease-in-out]",
    slideUp: "animate-[slideUp_0.5s_ease-in-out]",
    popUp: "animate-[popUp_0.5s_ease-in-out]",
  };
  
  // Refs for scroll animations
  const scrollElementsRef = useRef<HTMLElement[]>([]);
  
  // Setup scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Get all elements with reveal-on-scroll class
    const scrollElements = document.querySelectorAll('.reveal-on-scroll');
    scrollElements.forEach(el => {
      observer.observe(el);
      scrollElementsRef.current.push(el as HTMLElement);
    });
    
    return () => {
      if (scrollElementsRef.current) {
        scrollElementsRef.current.forEach(el => {
          observer.unobserve(el);
        });
      }
    };
  }, []);
  
  // Service selection handler with scroll prevention
  const handleServiceSelection = useCallback((service) => {
    // Prevent default scroll behavior
    window.history.pushState(null, '', window.location.href.split('#')[0]);
    setActiveService(service);
  }, []);
  
  const services = [
    {
      id: "ai-voice-agents",
      title: "Conversational Voice Interfaces",
      icon: <MessageCircle className="h-10 w-10" />,
      shortDescription: "Human-like voice assistants for seamless customer interactions",
      fullDescription: "Our AI Voice Agents provide human-like conversations that can handle complex customer inquiries, appointment scheduling, and issue resolution. These intelligent agents understand context, remember conversation history, and can even detect customer sentiment to provide appropriate responses.",
      benefits: [
        "24/7 customer support without staffing constraints",
        "Handles multiple conversations simultaneously",
        "Consistent quality across every interaction",
        "Seamless escalation to human agents when needed",
        "Supports multiple languages and accents"
      ],
      features: [
        {
          name: "Natural Language Processing",
          description: "Advanced NLP capabilities that understand context and nuance"
        },
        {
          name: "Voice Recognition",
          description: "Industry-leading voice recognition with 98% accuracy"
        },
        {
          name: "Sentiment Analysis",
          description: "Real-time emotion detection to tailor conversation approach"
        },
        {
          name: "Multi-channel Integration",
          description: "Connects with phone systems, websites, apps, and messaging platforms"
        }
      ],
      caseStudy: {
        company: "NorthStar Bank",
        result: "Reduced call center costs by 35% while improving customer satisfaction ratings by 28%"
      },
      color: "#10b4b7",
      bgColor: "bg-[#10b4b7]/10",
      textColor: "text-[#10b4b7]",
      demo: <VoiceAgentDemo />
    },
    {
      id: "ai-chatbots",
      title: "Smart Chat Interfaces",
      icon: <MessageCircle className="h-10 w-10" />,
      shortDescription: "Intelligent text-based assistants for websites and messaging platforms",
      fullDescription: "Our AI Chatbots deliver personalized, contextual conversations across your digital channels. Using advanced machine learning algorithms, they continuously improve their responses based on interactions, providing increasingly effective customer support and lead qualification.",
      benefits: [
        "Instant responses to customer inquiries",
        "Qualification and nurturing of website leads",
        "Reduced support ticket volume",
        "Data collection for business insights",
        "Personalized product recommendations"
      ],
      features: [
        {
          name: "Omnichannel Deployment",
          description: "Single chatbot solution across website, social media, and messaging apps"
        },
        {
          name: "Knowledge Base Integration",
          description: "Pulls from your existing documentation for accurate, consistent answers"
        },
        {
          name: "Persistent Memory",
          description: "Remembers user preferences and previous interactions"
        },
        {
          name: "Proactive Engagement",
          description: "Initiates conversations based on user behavior triggers"
        }
      ],
      caseStudy: {
        company: "TechGlobe Solutions",
        result: "70% reduction in first-response time and 42% decrease in support tickets requiring human intervention"
      },
      color: "#10b4b7",
      bgColor: "bg-[#10b4b7]/15",
      textColor: "text-[#10b4b7]",
      demo: <ChatbotDemo />
    },
    {
      id: "lead-generation",
      title: "AI-Driven Lead Funnels",
      icon: <LineChart className="h-10 w-10" />,
      shortDescription: "AI-powered lead qualification and nurturing for enhanced conversions",
      fullDescription: "Our Lead Generation AI identifies, qualifies, and nurtures potential customers through personalized engagement. By analyzing behavior patterns and engagement signals, our solution focuses your sales team's efforts on the most promising opportunities.",
      benefits: [
        "Automated qualification of inbound leads",
        "Personalized nurturing sequences",
        "Predictive lead scoring",
        "Sales intelligence for improved conversion rates",
        "Integration with major CRM platforms"
      ],
      features: [
        {
          name: "Intent Detection",
          description: "Identifies purchase intent through behavioral analysis"
        },
        {
          name: "Automated Follow-up",
          description: "Multi-touch sequences personalized to prospect interests"
        },
        {
          name: "CRM Integration",
          description: "Seamless data flow with Salesforce, HubSpot, and more"
        },
        {
          name: "Performance Analytics",
          description: "Comprehensive reporting on lead quality and conversion metrics"
        }
      ],
      caseStudy: {
        company: "Vertex Manufacturing",
        result: "Increased qualified sales opportunities by 58% while reducing cost per lead by 32%"
      },
      color: "#1c9f1e",
      bgColor: "bg-[#1c9f1e]/10",
      textColor: "text-[#1c9f1e]",
    },
    {
      id: "social-media",
      title: "Autonomous Social Management",
      icon: <Globe className="h-10 w-10" />,
      shortDescription: "AI-driven content creation and campaign management",
      fullDescription: "Our Social Media Automation solution uses AI to create, schedule, and optimize content across all your social channels. From generating engaging posts to identifying optimal posting times, our platform ensures consistent brand presence with minimal manual effort.",
      benefits: [
        "Content creation tailored to each platform",
        "Optimal posting schedule based on audience analysis",
        "Automated engagement with followers",
        "Competition monitoring and insights",
        "Comprehensive performance analytics"
      ],
      features: [
        {
          name: "Content Generation",
          description: "AI creates platform-specific posts based on your brand voice"
        },
        {
          name: "Visual Asset Creation",
          description: "Generate on-brand images and graphics for social posts"
        },
        {
          name: "Engagement Automation",
          description: "Intelligent responses to comments and direct messages"
        },
        {
          name: "Trend Analysis",
          description: "Identifies trending topics relevant to your industry"
        }
      ],
      caseStudy: {
        company: "Urban Lifestyle Brand",
        result: "200% increase in engagement rates and 85% reduction in social media management time"
      },
      color: "#1c9f1e",
      bgColor: "bg-[#1c9f1e]/15",
      textColor: "text-[#1c9f1e]",
    },
    {
      id: "ad-campaign",
      title: "Omnichannel Engagement",
      icon: <Database className="h-10 w-10" />,
      shortDescription: "Self-optimizing ad campaigns that maximize ROI",
      fullDescription: "Our Ad & Campaign Automation platform leverages AI to create, test, and optimize digital advertising across channels. The system continuously learns from performance data to allocate budget where it will generate the highest return on investment.",
      benefits: [
        "Dynamic budget allocation across platforms",
        "Automated A/B testing of creative elements",
        "Audience segmentation and targeting refinement",
        "Continuous performance optimization",
        "Cross-channel attribution modeling"
      ],
      features: [
        {
          name: "Creative Generation",
          description: "AI-assisted ad copy and creative asset development"
        },
        {
          name: "Budget Optimization",
          description: "Automatic reallocation based on performance metrics"
        },
        {
          name: "Audience Discovery",
          description: "Identifies and tests new potential customer segments"
        },
        {
          name: "Competitive Analysis",
          description: "Monitors competitor advertising strategies and performance"
        }
      ],
      caseStudy: {
        company: "Horizon E-Commerce",
        result: "Reduced cost per acquisition by 47% while increasing ROAS from 3.2x to 7.8x"
      },
      color: "#9ac857",
      bgColor: "bg-[#9ac857]/10",
      textColor: "text-[#9ac857]",
    },
    {
      id: "custom-solutions",
      title: "Tailored AI Architectures",
      icon: <Settings className="h-10 w-10" />,
      shortDescription: "Tailored AI implementation for your unique business challenges",
      fullDescription: "Our Custom AI Solutions team works closely with your business to identify, develop, and implement AI capabilities that address your unique challenges. From predictive analytics to process automation, we build solutions that create sustainable competitive advantage.",
      benefits: [
        "Solutions tailored to your specific business needs",
        "Integration with existing systems and processes",
        "Proprietary AI models that become your IP",
        "Phased implementation approach",
        "Ongoing optimization and support"
      ],
      features: [
        {
          name: "Discovery Workshop",
          description: "Collaborative sessions to identify high-value AI opportunities"
        },
        {
          name: "Proof of Concept",
          description: "Rapid development of minimal viable solutions to validate approach"
        },
        {
          name: "Enterprise Integration",
          description: "Seamless connection with your existing technology stack"
        },
        {
          name: "Knowledge Transfer",
          description: "Training for your team to maximize value from AI solutions"
        }
      ],
      caseStudy: {
        company: "Global Logistics Provider",
        result: "Predictive maintenance AI reduced fleet downtime by 73% and operating costs by $4.2M annually"
      },
      color: "#9ac857",
      bgColor: "bg-[#9ac857]/15",
      textColor: "text-[#9ac857]",
    }
  ];

  // Determine which demo to show based on the active service
  const renderServiceDemo = () => {
    // Convert activeService.id to number if it's a string to ensure correct comparison
    const activeServiceId = typeof activeService.id === 'string' 
      ? parseInt(activeService.id) 
      : activeService.id;
      
    if (activeServiceId === 2) { // Autonomous Social Management
      return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
          {/* Demo header */}
          <div className="bg-gradient-to-r from-[#10b4b7] to-[#1c9f1e] text-white p-4 rounded-t-xl">
            <div className="flex items-center">
              <div className="mr-3">
                <div className="relative">
                  <Share2 className="w-6 h-6 animate-pulse" />
                  <div className="absolute -inset-1 bg-white/20 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Social Automation Demo</h3>
            </div>
          </div>
          
          {/* Demo content */}
          <div className="p-6">
            <div className="flex flex-col h-full">
              {/* Agent avatar */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#10b4b7]/20 to-[#9ac857]/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-inner flex items-center justify-center">
                    <Hash className="w-8 h-8 text-[#10b4b7]" />
                  </div>
                </div>
              </div>
              
              {/* Agent name */}
              <div className="text-center mb-6">
                <h4 className="font-semibold text-[#1c9f1e]">Thor Social Assistant</h4>
                <p className="text-sm text-gray-500">AI-Powered Social Media Manager</p>
              </div>
              
              {/* Waveform */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                <Waves className="w-full h-12 text-[#10b4b7]" />
              </div>
              
              {/* Chat exchange */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#10b4b7]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">Which platform would you like to manage today?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-[#9ac857]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">Let's start with Instagram and LinkedIn scheduling.</p>
                  </div>
                </div>
              </div>
              
              {/* Button */}
              <div className="mt-auto">
                <Button className="w-full bg-gradient-to-r from-[#10b4b7] to-[#1c9f1e] text-white">
                  <Share2 className="w-5 h-5 mr-2" />
                  <span>Launch Social Manager</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeServiceId === 3) { // AI-Driven Lead Funnels
      return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
          {/* Demo header */}
          <div className="bg-gradient-to-r from-[#10b4b7] to-[#1c9f1e] text-white p-4 rounded-t-xl">
            <div className="flex items-center">
              <div className="mr-3">
                <div className="relative">
                  <Filter className="w-6 h-6 animate-pulse" />
                  <div className="absolute -inset-1 bg-white/20 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Lead Funnel Demo</h3>
            </div>
          </div>
          
          {/* Demo content */}
          <div className="p-6">
            <div className="flex flex-col h-full">
              {/* Agent avatar */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#10b4b7]/20 to-[#9ac857]/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-inner flex items-center justify-center">
                    <Target className="w-8 h-8 text-[#9ac857]" />
                  </div>
                </div>
              </div>
              
              {/* Agent name */}
              <div className="text-center mb-6">
                <h4 className="font-semibold text-[#1c9f1e]">Thor Lead Assistant</h4>
                <p className="text-sm text-gray-500">AI-Powered Lead Qualification Engine</p>
              </div>
              
              {/* Waveform */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                <Waves className="w-full h-12 text-[#9ac857]" />
              </div>
              
              {/* Chat exchange */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#9ac857]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">What kind of leads are you looking to generate today?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-[#10b4b7]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">I need high-intent B2B contacts from the SaaS sector.</p>
                  </div>
                </div>
              </div>
              
              {/* Button */}
              <div className="mt-auto">
                <Button className="w-full bg-gradient-to-r from-[#9ac857] to-[#1c9f1e] text-white">
                  <Target className="w-5 h-5 mr-2" />
                  <span>Activate Lead Funnel</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeServiceId === 4) { // Smart Chat Interfaces
      return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
          {/* Demo header */}
          <div className="bg-gradient-to-r from-[#10b4b7] to-[#1c9f1e] text-white p-4 rounded-t-xl">
            <div className="flex items-center">
              <div className="mr-3">
                <div className="relative">
                  <MessageSquare className="w-6 h-6 animate-pulse" />
                  <div className="absolute -inset-1 bg-white/20 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Chatbot Demo</h3>
            </div>
          </div>
          
          {/* Demo content */}
          <div className="p-6">
            <div className="flex flex-col h-full">
              {/* Agent avatar */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#10b4b7]/20 to-[#9ac857]/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-inner flex items-center justify-center">
                    <div className="relative">
                      <MessageSquare className="w-8 h-8 text-[#1c9f1e]" />
                      <MoreHorizontal className="w-3 h-3 absolute bottom-0 right-0 text-[#1c9f1e]" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Agent name */}
              <div className="text-center mb-6">
                <h4 className="font-semibold text-[#1c9f1e]">ThorSignia Chat Assistant</h4>
                <p className="text-sm text-gray-500">Conversational AI Chat Interface</p>
              </div>
              
              {/* Waveform */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                <Waves className="w-full h-12 text-[#1c9f1e]" />
              </div>
              
              {/* Chat exchange */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#1c9f1e]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">What kind of chat support would you like to enable?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-[#10b4b7]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">Let's explore multilingual chatbots with product FAQs.</p>
                  </div>
                </div>
              </div>
              
              {/* Button */}
              <div className="mt-auto">
                <Button className="w-full bg-gradient-to-r from-[#1c9f1e] to-[#10b4b7] text-white">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  <span>Launch Chat Assistant</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeServiceId === 5) { // Omnichannel Engagement
      return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
          {/* Demo header */}
          <div className="bg-gradient-to-r from-[#10b4b7] to-[#1c9f1e] text-white p-4 rounded-t-xl">
            <div className="flex items-center">
              <div className="mr-3">
                <div className="relative">
                  <Megaphone className="w-6 h-6 animate-pulse" />
                  <div className="absolute -inset-1 bg-white/20 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Campaign Assistant Demo</h3>
            </div>
          </div>
          
          {/* Demo content */}
          <div className="p-6">
            <div className="flex flex-col h-full">
              {/* Agent avatar */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#10b4b7]/20 to-[#9ac857]/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-inner flex items-center justify-center">
                    <Megaphone className="w-8 h-8 text-[#10b4b7]" />
                  </div>
                </div>
              </div>
              
              {/* Agent name */}
              <div className="text-center mb-6">
                <h4 className="font-semibold text-[#1c9f1e]">Thor Campaign Assistant</h4>
                <p className="text-sm text-gray-500">AI-Driven Ad & Campaign Orchestration</p>
              </div>
              
              {/* Waveform */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                <Waves className="w-full h-12 text-[#10b4b7]" />
              </div>
              
              {/* Chat exchange */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#10b4b7]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">What type of campaign are you planning today?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-[#9ac857]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">I need to launch a retargeting campaign across email and LinkedIn.</p>
                  </div>
                </div>
              </div>
              
              {/* Button */}
              <div className="mt-auto">
                <Button className="w-full bg-gradient-to-r from-[#10b4b7] to-[#1c9f1e] text-white">
                  <Megaphone className="w-5 h-5 mr-2" />
                  <span>Start Campaign Assistant</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeServiceId === 6) { // Tailored AI Architectures
      return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
          {/* Demo header */}
          <div className="bg-gradient-to-r from-[#10b4b7] to-[#1c9f1e] text-white p-4 rounded-t-xl">
            <div className="flex items-center">
              <div className="mr-3">
                <div className="relative">
                  <Cpu className="w-6 h-6 animate-pulse" />
                  <div className="absolute -inset-1 bg-white/20 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Custom AI Demo</h3>
            </div>
          </div>
          
          {/* Demo content */}
          <div className="p-6">
            <div className="flex flex-col h-full">
              {/* Agent avatar */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#10b4b7]/20 to-[#9ac857]/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-inner flex items-center justify-center">
                    <Brain className="w-8 h-8 text-[#9ac857]" />
                  </div>
                </div>
              </div>
              
              {/* Agent name */}
              <div className="text-center mb-6">
                <h4 className="font-semibold text-[#1c9f1e]">Thor AI Architect</h4>
                <p className="text-sm text-gray-500">Modular, Business-Aligned AI Solutions</p>
              </div>
              
              {/* Waveform */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                <Waves className="w-full h-12 text-[#9ac857]" />
              </div>
              
              {/* Chat exchange */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#9ac857]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">What kind of AI solution would you like to build?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-[#10b4b7]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">We need a workflow engine for legal document automation.</p>
                  </div>
                </div>
              </div>
              
              {/* Button */}
              <div className="mt-auto">
                <Button className="w-full bg-gradient-to-r from-[#9ac857] to-[#1c9f1e] text-white">
                  <Settings className="w-5 h-5 mr-2" />
                  <span>Design Your AI Stack</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      // Default Voice Agent Demo for other services
      return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
          {/* Demo header */}
          <div className="bg-gradient-to-r from-[#10b4b7] to-[#1c9f1e] text-white p-4 rounded-t-xl">
            <div className="flex items-center">
              <div className="mr-3">
                <div className="relative">
                  <Mic className="w-6 h-6 animate-pulse" />
                  <div className="absolute -inset-1 bg-white/20 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Voice Agent Demo</h3>
            </div>
          </div>
          
          {/* Demo content */}
          <div className="p-6">
            <div className="flex flex-col h-full">
              {/* Agent avatar */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#10b4b7]/20 to-[#9ac857]/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-inner flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-[#10b4b7]" />
                  </div>
                </div>
              </div>
              
              {/* Agent name */}
              <div className="text-center mb-6">
                <h4 className="font-semibold text-[#1c9f1e]">Thor AI Assistant</h4>
                <p className="text-sm text-gray-500">Conversational Voice Interface</p>
              </div>
              
              {/* Waveform */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center h-24">
                <Waves className="w-full h-12 text-[#10b4b7]" />
              </div>
              
              {/* Chat exchange */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="bg-[#10b4b7]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">How can I help you today?</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-[#9ac857]/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">I'd like to learn about your voice agent solutions.</p>
                  </div>
                </div>
              </div>
              
              {/* Try voice agent button */}
              <div className="mt-auto">
                <Button className="w-full bg-gradient-to-r from-[#10b4b7] to-[#1c9f1e] text-white">
                  <Mic className="w-5 h-5 mr-2" />
                  <span>Try Voice Assistant</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  // Add UseEffect for animations
  useEffect(() => {
    // Function to handle revealing elements on scroll
    const handleRevealOnScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // Only reveal elements that are in the viewport
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
          element.classList.add('visible');
          element.classList.add('animate-[fadeIn_0.6s_ease-in-out_forwards]');
        }
      });
    };
    
    // Initial check for elements in view on page load
    setTimeout(handleRevealOnScroll, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleRevealOnScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleRevealOnScroll);
    };
  }, []);

  // Add this useEffect after component declaration
  useEffect(() => {
    // Initialize animations on page load
    setTimeout(() => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => el.classList.add('visible'));
    }, 100);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Reduced Height */}
      <section className="min-h-[50vh] md:min-h-[70vh] pt-20 md:pt-24 pb-8 md:pb-12 relative overflow-hidden flex items-center" 
        style={{
          backgroundImage: `url(${servicesBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#9ac857]/20 text-[#9ac857] text-sm font-medium animate-fade-in">
              Enterprise AI Solutions
            </div>
            <h1 className={`text-3xl md:text-4xl lg:text-6xl font-bold mb-4 drop-shadow-lg ${animations.slideUp}`}>
              <span className="text-[#1c9f1e]">Transform Your Business</span> with <span className="text-[#10b4b7]">Award-Winning AI</span>
            </h1>
            <p className={`text-base md:text-lg lg:text-xl text-[#9ac857] mb-6 drop-shadow-md ${animations.slideUp}`} style={{animationDelay: '0.2s'}}>
              Discover our comprehensive suite of enterprise-grade AI solutions
            </p>
            <Button 
              className={`bg-black hover:bg-white hover:text-black text-white px-8 py-3 text-lg rounded-lg shadow-md ${animations.slideUp}`}
              style={{animationDelay: '0.3s'}}
              onClick={() => {
                const servicesSection = document.getElementById('enterprise-ai-services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Tabs Section - Modified for mobile swipe */}
      <section id="enterprise-ai-services" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-primary-900 ${animations.popUp}`}>Our Enterprise AI Services</h2>
            <p className={`text-lg text-gray-700 ${animations.popUp}`} style={{animationDelay: '0.2s'}}>
              Explore our comprehensive range of AI solutions tailored for enterprise needs
            </p>
          </div>
          
          {/* Service grid from ServicesSection.tsx with mobile swipe capability */}
          <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
            <div className="overflow-x-auto overflow-y-hidden -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide touch-pan-x pb-6 md:pb-0">
              <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12 min-w-[280px] w-full md:min-w-0 snap-x snap-mandatory">
                {servicesData.map((service) => (
                  <div
                    key={service.id}
                    className={`p-3 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 snap-center flex-shrink-0 w-[90%] sm:w-[45%] md:w-auto ${
                      activeService.id === service.id 
                        ? 'bg-gradient-to-r from-[#10b4b7] to-[#9ac857] text-white shadow-md' 
                        : `${service.bgColor} hover:${service.hoverBgColor} text-gray-800`
                    }`}
                    onClick={() => handleServiceSelection(service)}
                  >
                    <div className="flex flex-col items-center text-center p-2">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                        activeService.id === service.id ? 'bg-white/20' : 'bg-white shadow-sm'
                      }`}>
                        {cloneElement(service.icon, { 
                          className: `h-6 w-6 ${activeService.id === service.id ? 'text-white' : service.color.replace('bg-', 'text-')}` 
                        })}
                      </div>
                      <h4 className="font-medium text-sm">{service.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile scroll indicators (visible only on mobile) */}
            <div className="flex justify-center space-x-1 mb-6 md:hidden">
              <div className="h-1 w-12 rounded-full bg-[#10b4b7]"></div>
              <div className="h-1 w-4 rounded-full bg-gray-200"></div>
              <div className="h-1 w-4 rounded-full bg-gray-200"></div>
            </div>
            
            {/* Mobile swipe instructions (visible only on mobile) */}
            <p className="text-center text-sm text-gray-500 mb-8 md:hidden">
              <span className="inline-flex items-center">
                <ArrowRight className="w-4 h-4 mr-1 animate-pulse" />
                Swipe to explore more services
              </span>
            </p>

            {/* Add JavaScript for handling touch events on mobile */}
            <script dangerouslySetInnerHTML={{
              __html: `
                document.addEventListener('DOMContentLoaded', function() {
                  const scrollContainer = document.querySelector('.overflow-x-auto');
                  if (!scrollContainer) return;
                  
                  // Set up intersection observer for snap points
                  const snapItems = scrollContainer.querySelectorAll('.snap-center');
                  let currentIndex = 0;
                  
                  // Handle touch events for smooth scrolling
                  let isDown = false;
                  let startX;
                  let scrollLeft;
                  
                  scrollContainer.addEventListener('touchstart', (e) => {
                    isDown = true;
                    scrollContainer.classList.add('active');
                    startX = e.touches[0].pageX - scrollContainer.offsetLeft;
                    scrollLeft = scrollContainer.scrollLeft;
                  });
                  
                  scrollContainer.addEventListener('touchend', () => {
                    isDown = false;
                    scrollContainer.classList.remove('active');
                    
                    // Snap to the closest item
                    if (snapItems.length > 0) {
                      const itemWidth = snapItems[0].offsetWidth;
                      const newIndex = Math.round(scrollContainer.scrollLeft / itemWidth);
                      scrollToItem(Math.min(newIndex, snapItems.length - 1));
                    }
                  });
                  
                  scrollContainer.addEventListener('touchcancel', () => {
                    isDown = false;
                    scrollContainer.classList.remove('active');
                  });
                  
                  scrollContainer.addEventListener('touchmove', (e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.touches[0].pageX - scrollContainer.offsetLeft;
                    const walk = (x - startX) * 2;
                    scrollContainer.scrollLeft = scrollLeft - walk;
                  });
                  
                  // Helper function to scroll to a specific item
                  function scrollToItem(index) {
                    if (index >= 0 && index < snapItems.length) {
                      currentIndex = index;
                      snapItems[index].scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest',
                        inline: 'center'
                      });
                      
                      // Update the indicators
                      const indicators = document.querySelectorAll('.flex.justify-center.space-x-1 > div');
                      if (indicators.length > 0) {
                        indicators.forEach((indicator, i) => {
                          if (i === 0) {
                            indicator.className = "h-1 w-4 rounded-full bg-gray-200";
                          } else if (i === 1) {
                            indicator.className = (currentIndex < 3) ? "h-1 w-12 rounded-full bg-[#10b4b7]" : "h-1 w-4 rounded-full bg-gray-200";
                          } else {
                            indicator.className = (currentIndex >= 3) ? "h-1 w-12 rounded-full bg-[#10b4b7]" : "h-1 w-4 rounded-full bg-gray-200";
                          }
                        });
                      }
                    }
                  }
                });
              `
            }} />
            
            {/* Border divider */}
            <div className="border-t border-dashed border-[#10b4b7]/20 my-8"></div>
            
            {/* Main content - Two column layout */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left column (60%) - Tab content */}
              <div className="w-full lg:w-3/5">
                <div className="bg-white rounded-2xl shadow-xl ring-1 ring-[#10b4b7]/10 overflow-hidden">
                  {/* Service header */}
                  <div className="bg-gradient-to-r from-[#10b4b7] to-[#9ac857] p-6 text-white">
                    <h3 className="text-2xl font-bold">{activeService.title}</h3>
                    <p className="mt-2 text-white/90">{activeService.description}</p>
                  </div>
                  
                  {/* Vertical tabs */}
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Tab buttons */}
                      <div className="md:w-1/3">
                        <div className="flex flex-col space-y-3">
                          <button
                            className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                              activeServiceTab === "benefits" 
                                ? 'bg-gradient-to-r from-[#10b4b7] to-[#9ac857] text-white font-semibold shadow-md' 
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveServiceTab("benefits");
                            }}
                          >
                            <CheckCircle2 className="w-5 h-5 mr-2" />
                            <span>Key Benefits</span>
                          </button>
                          
                          <button
                            className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                              activeServiceTab === "features" 
                                ? 'bg-gradient-to-r from-[#10b4b7] to-[#9ac857] text-white font-semibold shadow-md' 
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveServiceTab("features");
                            }}
                          >
                            <Layers className="w-5 h-5 mr-2" />
                            <span>Core Features</span>
                          </button>
                          
                          <button
                            className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                              activeServiceTab === "case-study" 
                                ? 'bg-gradient-to-r from-[#10b4b7] to-[#9ac857] text-white font-semibold shadow-md' 
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveServiceTab("case-study");
                            }}
                          >
                            <Briefcase className="w-5 h-5 mr-2" />
                            <span>Case Study</span>
                          </button>
                        </div>
                      </div>
                      
                      {/* Tab content panels */}
                      <div className="md:w-2/3">
                        <div className="bg-white rounded-xl shadow-md p-5 min-h-[300px] transition-all duration-300 ease-in-out">
                          {activeServiceTab === "benefits" && (
                            <div className="space-y-4">
                              <h4 className="text-xl font-semibold text-[#10b4b7] mb-4">Key Benefits</h4>
                              <ul className="space-y-3">
                                {activeService.benefits.map((benefit, index) => (
                                  <li key={index} className="flex items-start">
                                    <div className="bg-gradient-to-r from-[#10b4b7] to-[#9ac857] text-white p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                                      <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span className="text-gray-700">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {activeServiceTab === "features" && (
                            <div className="space-y-4">
                              <h4 className="text-xl font-semibold text-[#10b4b7] mb-4">Core Features</h4>
                              <ul className="space-y-4">
                                {activeService.features.map((feature, index) => (
                                  <li key={index} className="flex flex-col">
                                    <div className="flex items-center mb-1">
                                      <div className="bg-gradient-to-r from-[#10b4b7] to-[#9ac857] text-white p-2 rounded-full mr-3 flex-shrink-0">
                                        <div className="w-4 h-4 flex items-center justify-center">{index + 1}</div>
                                      </div>
                                      <span className="font-medium text-gray-800">{feature}</span>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {activeServiceTab === "case-study" && (
                            <div className="space-y-4">
                              <h4 className="text-xl font-semibold text-[#10b4b7] mb-4">Case Study</h4>
                              <div className="bg-gradient-to-r from-[#10b4b7]/5 to-[#9ac857]/5 rounded-lg p-5 border border-[#10b4b7]/10">
                                <h5 className="text-lg font-semibold text-[#1c9f1e] mb-2">{activeService.title}</h5>
                                <p className="text-gray-700 mb-4">{activeService.description}</p>
                                
                                <h6 className="font-medium text-[#10b4b7] mb-2">Key Results:</h6>
                                <ul className="space-y-2">
                                  {activeService.caseStudy.metrics.map((metric, index) => (
                                    <li key={index} className="flex items-center">
                                      <div className="bg-gradient-to-r from-[#10b4b7] to-[#9ac857] text-white p-1 rounded-full mr-2 flex-shrink-0">
                                        <CheckCircle2 className="w-3 h-3" />
                                      </div>
                                      <span className="text-gray-700">{metric}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-[#10b4b7] to-[#1c9f1e] hover:opacity-90 text-white rounded-lg transition-all duration-300 hover:shadow-md active:scale-95"
                    >
                      <Link to="/contact" className="flex items-center justify-center">
                        Request a demo for {activeService.title}
                        <svg 
                          className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Right column (40%) - Demo Component */}
              <div className="w-full lg:w-2/5">
                {renderServiceDemo()}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industries Section */}
      <section className="py-20 bg-[#10b4b7]/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-gray-800 ${animations.popUp}`}>Industries We Serve</h2>
            <p className={`text-lg text-gray-700 ${animations.popUp}`} style={{animationDelay: '0.2s'}}>
              Our AI solutions are tailored to meet the specific needs of these key industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Financial Services",
                icon: "💰",
                description: "AI solutions for risk assessment, fraud detection, customer service, and regulatory compliance."
              },
              {
                name: "Healthcare",
                icon: "🏥",
                description: "Streamlined patient experience, operational efficiency, and enhanced clinical decision support."
              },
              {
                name: "Retail & E-commerce",
                icon: "🛒",
                description: "Personalized shopping experiences, inventory management, and customer engagement."
              },
              {
                name: "Manufacturing",
                icon: "🏭",
                description: "Predictive maintenance, quality control, supply chain optimization, and process automation."
              },
              {
                name: "Technology",
                icon: "💻",
                description: "Customer support automation, development assistance, and product innovation."
              },
              {
                name: "Travel & Hospitality",
                icon: "✈️",
                description: "Booking assistance, personalized recommendations, and guest experience enhancement."
              }
            ].map((industry, index) => (
              <div 
                key={index} 
                className="flip-card h-64 opacity-0 reveal-on-scroll animate-[fadeIn_0.6s_ease-in-out_forwards]" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flip-card-inner w-full h-full transition-transform duration-700 transform-style-preserve-3d shadow-lg hover:shadow-xl rounded-xl">
                  <div className="flip-card-front bg-white p-6 rounded-xl flex flex-col justify-center items-center w-full h-full">
                    <div className="text-5xl mb-4">{industry.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-[#1c9f1e]">{industry.name}</h3>
                  </div>
                  <div className="flip-card-back bg-[#10b4b7] text-white p-6 rounded-xl flex flex-col justify-center items-center w-full h-full">
                    <p className="text-center">{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Implementation Process */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-gray-800 ${animations.popUp}`}>Our Implementation Process</h2>
            <p className={`text-lg text-gray-700 ${animations.popUp}`} style={{animationDelay: '0.2s'}}>
              A structured, collaborative approach that ensures successful AI adoption
            </p>
          </div>
          
          <div className="relative">
            {/* Curved path */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-4 transform -translate-y-1/2">
              <svg viewBox="0 0 1200 120" className="w-full h-32 text-[#9ac857]/20 fill-current">
                <path d="M0,60 C300,-20 900,160 1200,60" strokeWidth="12" fill="none" stroke="currentColor" />
              </svg>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
              {[
                {
                  title: "Discovery",
                  icon: "1",
                  description: "Understanding business goals and technical environment"
                },
                {
                  title: "Solution Design",
                  icon: "2",
                  description: "Tailored AI solution mapped to your specific needs"
                },
                {
                  title: "Development",
                  icon: "3",
                  description: "Building the customized solution for your business"
                },
                {
                  title: "Testing",
                  icon: "4",
                  description: "Rigorous quality assurance and performance testing"
                },
                {
                  title: "Deployment",
                  icon: "5",
                  description: "Smooth transition to production environment"
                },
                {
                  title: "Optimization",
                  icon: "6",
                  description: "Continuous improvement based on performance data"
                }
              ].map((step, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 opacity-0 reveal-on-scroll"
                  style={{
                    animationDelay: `${index * 0.15}s`
                  }}
                >
                  <div className="p-6 text-center">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${index % 2 === 0 ? 'bg-[#1c9f1e]' : 'bg-[#10b4b7]'} text-white font-bold text-xl`}>
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;

