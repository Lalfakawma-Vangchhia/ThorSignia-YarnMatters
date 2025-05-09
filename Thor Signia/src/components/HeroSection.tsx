import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, ChevronRight, CircleCheck, DollarSign, BarChart, Zap, Shield, Network, Cpu, Code, Server } from 'lucide-react';
import './hero-section.css';

const HeroSection = () => {
  return (
    <section id="hero-section-content" className="relative pt-20 pb-12 md:pt-40 md:pb-32 overflow-hidden bg-white text-gray-800 scroll-mt-28 sticky-top">
      {/* Modern decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#009898]/10 to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#88bf42]/10 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-[#009898]/10 text-[#009898] font-medium text-sm border border-[#009898]/20">
              <Zap className="h-4 w-4 mr-2 text-[#009898]" />
              <span>Enterprise AI Solutions</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
              <span>Transform Your Business With </span> 
              <div className="mt-2 relative inline-block md:inline">
                <span className="text-[#009898] inline-block">
                  Advanced AI
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#88bf42]"></div>
              </div>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Our cutting-edge AI technologies help enterprises achieve unprecedented growth, efficiency and competitive advantages through intelligent automation and data-driven insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="border-2 border-[#88bf42] bg-white text-[#88bf42] hover:bg-[#88bf42]/10 px-6 sm:px-8 py-6 sm:py-7 rounded-xl text-base sm:text-lg font-medium group transition-all duration-300 w-full sm:w-auto" asChild>
                <Link to="/ai-engineers" className="flex items-center justify-center">
                  Explore AI Engineers
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            {/* Mobile view: Show AI visualization above stats */}
            <div className="lg:hidden mt-12 mb-10">
              {/* Modern AI Visualization - More responsive for mobile */}
              <div className="relative min-h-[350px] sm:min-h-[400px] w-full max-w-[500px] mx-auto">
                {/* Mobile-optimized Floating Elements - Increased sizes */}
                <div className="absolute inset-0 scale-[0.9] sm:scale-95 md:scale-100">
                  {/* Digital Brain Network */}
                  <div className="absolute w-full h-full flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 500 500">
                      {/* Background Circles */}
                      <circle cx="250" cy="250" r="120" fill="rgba(0, 152, 152, 0.05)" />
                      <circle cx="250" cy="250" r="180" fill="rgba(136, 191, 66, 0.05)" />
                      <circle cx="250" cy="250" r="200" stroke="#009898" strokeWidth="1" strokeDasharray="5,5" fill="none" />
                      
                      {/* Digital Brain Network Lines */}
                      <line x1="250" y1="250" x2="150" y2="150" stroke="#009898" strokeWidth="2" strokeDasharray="2,2" />
                      <line x1="250" y1="250" x2="350" y2="150" stroke="#88bf42" strokeWidth="2" strokeDasharray="2,2" />
                      <line x1="250" y1="250" x2="350" y2="350" stroke="#009898" strokeWidth="2" strokeDasharray="2,2" />
                      <line x1="250" y1="250" x2="150" y2="350" stroke="#88bf42" strokeWidth="2" strokeDasharray="2,2" />
                      <line x1="250" y1="250" x2="120" y2="250" stroke="#009898" strokeWidth="2" strokeDasharray="2,2" />
                      <line x1="250" y1="250" x2="380" y2="250" stroke="#88bf42" strokeWidth="2" strokeDasharray="2,2" />
                      <line x1="250" y1="250" x2="250" y2="120" stroke="#88bf42" strokeWidth="2" strokeDasharray="2,2" />
                      <line x1="250" y1="250" x2="250" y2="380" stroke="#009898" strokeWidth="2" strokeDasharray="2,2" />
                    </svg>
                  </div>
                  
                  {/* Central AI Element - Increased size */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-28 h-28 sm:w-30 sm:h-30 md:w-32 md:h-32 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-[#009898]/20">
                      <Brain className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#009898]" />
                    </div>
                  </div>
                  
                  {/* Floating Technology Icons - Repositioned as requested */}
                  <div className="absolute top-[20%] left-[15%] w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-gray-100 animate-float-slow">
                    <Cpu className="w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10 text-[#009898]" />
                  </div>
                  
                  <div className="absolute top-[15%] right-[15%] w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 animate-float-medium">
                    <Network className="w-8 h-8 sm:w-8 sm:h-8 md:w-8 md:h-8 text-[#88bf42]" />
                  </div>
                  
                  <div className="absolute bottom-[20%] right-[20%] w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-gray-100 animate-float-slow">
                    <Code className="w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10 text-[#009898]" />
                  </div>
                  
                  <div className="absolute bottom-[15%] left-[20%] w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 animate-float-medium">
                    <Server className="w-8 h-8 sm:w-8 sm:h-8 md:w-8 md:h-8 text-[#88bf42]" />
                  </div>
                </div>
                
                {/* Mobile-visible labels - NEW */}
                <div className="absolute top-[10%] right-[10%] bg-white px-2 py-1 rounded-full shadow-md border border-[#009898]/20 flex items-center text-xs font-medium text-[#009898] animate-float-slow sm:hidden">
                  <Cpu className="w-3 h-3 mr-1" /> AI
                </div>
                
                <div className="absolute bottom-[10%] right-[15%] bg-white px-2 py-1 rounded-full shadow-md border border-[#88bf42]/20 flex items-center text-xs font-medium text-[#88bf42] animate-float-medium sm:hidden">
                  <Code className="w-3 h-3 mr-1" /> NLP
                </div>
                
                <div className="absolute bottom-[20%] left-[10%] bg-white px-2 py-1 rounded-full shadow-md border border-[#009898]/20 flex items-center text-xs font-medium text-[#009898] animate-float-slow sm:hidden">
                  <Brain className="w-3 h-3 mr-1" /> ML
                </div>
                
                {/* Stats Labels - Simplified for small screens but visible */}
                <div className="absolute bottom-[5%] right-[5%] bg-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg shadow-md border border-gray-100 text-xs">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#009898] rounded-full mr-2"></div>
                    <span className="font-medium text-[#009898]">99.9% Uptime</span>
                  </div>
                </div>
                
                <div className="absolute top-[5%] left-[5%] bg-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg shadow-md border border-gray-100 text-xs">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#88bf42] rounded-full mr-2"></div>
                    <span className="font-medium text-[#88bf42]">25ms Response</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats section after AI viz on mobile */}
            <div className="mt-6 lg:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full mx-auto">
              <div className="flex items-center p-3 sm:p-4 bg-white shadow-lg rounded-2xl border border-gray-100 hover:border-[#88bf42]/30 transition-all duration-300 group">
                <div className="mr-3 sm:mr-4 bg-[#88bf42] p-2 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-lg shadow-[#88bf42]/20">
                  <CircleCheck className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg sm:text-xl text-gray-800">500+</p>
                  <p className="text-xs sm:text-sm text-gray-500">Projects Delivered</p>
                </div>
              </div>
              <div className="flex items-center p-3 sm:p-4 bg-white shadow-lg rounded-2xl border border-gray-100 hover:border-[#009898]/30 transition-all duration-300 group">
                <div className="mr-3 sm:mr-4 bg-[#009898] p-2 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-lg shadow-[#009898]/20">
                  <BarChart className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg sm:text-xl text-gray-800">98%</p>
                  <p className="text-xs sm:text-sm text-gray-500">Client Satisfaction</p>
                </div>
              </div>
              <div className="flex items-center p-3 sm:p-4 bg-white shadow-lg rounded-2xl border border-gray-100 hover:border-[#88bf42]/30 transition-all duration-300 group">
                <div className="mr-3 sm:mr-4 bg-[#88bf42] p-2 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-lg shadow-[#88bf42]/20">
                  <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg sm:text-xl text-gray-800">65%</p>
                  <p className="text-xs sm:text-sm text-gray-500">ROI Increase</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop view: AI visualization */}
          <div className="hidden lg:block lg:w-1/2 relative w-full max-w-md lg:max-w-full mx-auto">
            {/* Modern AI Visualization - More responsive for mobile */}
            <div className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[500px] w-full max-w-[600px] mx-auto">
              {/* Feature Labels - Only on larger screens */}
              <div className="absolute top-[8%] right-[30%] bg-white px-3 py-1.5 sm:px-3 sm:py-1.5 rounded-full shadow-md border border-[#009898]/20 flex items-center text-sm sm:text-sm font-medium text-[#009898] animate-float-slow">
                <Cpu className="w-4 h-4 sm:w-4 sm:h-4 mr-2 sm:mr-2" /> Machine Learning
              </div>
              
              <div className="absolute top-[30%] right-[5%] bg-white px-3 py-1.5 sm:px-3 sm:py-1.5 rounded-full shadow-md border border-[#88bf42]/20 flex items-center text-sm sm:text-sm font-medium text-[#88bf42] animate-float-medium">
                <Network className="w-4 h-4 sm:w-4 sm:h-4 mr-2 sm:mr-2" /> Deep Neural Networks
              </div>
              
              <div className="absolute bottom-[28%] right-[10%] bg-white px-3 py-1.5 sm:px-3 sm:py-1.5 rounded-full shadow-md border border-[#009898]/20 flex items-center text-sm sm:text-sm font-medium text-[#009898] animate-float-slow">
                <Brain className="w-4 h-4 sm:w-4 sm:h-4 mr-2 sm:mr-2" /> Computer Vision
              </div>
              
              <div className="absolute bottom-[10%] left-[35%] bg-white px-3 py-1.5 sm:px-3 sm:py-1.5 rounded-full shadow-md border border-[#88bf42]/20 flex items-center text-sm sm:text-sm font-medium text-[#88bf42] animate-float-medium">
                <Code className="w-4 h-4 sm:w-4 sm:h-4 mr-2 sm:mr-2" /> Natural Language
              </div>
              
              <div className="absolute top-[35%] left-[5%] bg-white px-3 py-1.5 sm:px-3 sm:py-1.5 rounded-full shadow-md border border-[#009898]/20 flex items-center text-sm sm:text-sm font-medium text-[#009898] animate-float-slow">
                <BarChart className="w-4 h-4 sm:w-4 sm:h-4 mr-2 sm:mr-2" /> Predictive Analytics
              </div>
              
              {/* Desktop view floating technology icons */}
              <div className="absolute inset-0 scale-[0.9] sm:scale-95 md:scale-100">
                {/* Digital Brain Network */}
                <div className="absolute w-full h-full flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 500 500">
                    {/* Background Circles */}
                    <circle cx="250" cy="250" r="120" fill="rgba(0, 152, 152, 0.05)" />
                    <circle cx="250" cy="250" r="180" fill="rgba(136, 191, 66, 0.05)" />
                    <circle cx="250" cy="250" r="200" stroke="#009898" strokeWidth="1" strokeDasharray="5,5" fill="none" />
                    
                    {/* Digital Brain Network Lines */}
                    <line x1="250" y1="250" x2="150" y2="150" stroke="#009898" strokeWidth="2" strokeDasharray="2,2" />
                    <line x1="250" y1="250" x2="350" y2="150" stroke="#88bf42" strokeWidth="2" strokeDasharray="2,2" />
                    <line x1="250" y1="250" x2="350" y2="350" stroke="#009898" strokeWidth="2" strokeDasharray="2,2" />
                    <line x1="250" y1="250" x2="150" y2="350" stroke="#88bf42" strokeWidth="2" strokeDasharray="2,2" />
                    <line x1="250" y1="250" x2="120" y2="250" stroke="#009898" strokeWidth="2" strokeDasharray="2,2" />
                    <line x1="250" y1="250" x2="380" y2="250" stroke="#88bf42" strokeWidth="2" strokeDasharray="2,2" />
                    <line x1="250" y1="250" x2="250" y2="120" stroke="#88bf42" strokeWidth="2" strokeDasharray="2,2" />
                    <line x1="250" y1="250" x2="250" y2="380" stroke="#009898" strokeWidth="2" strokeDasharray="2,2" />
                  </svg>
                </div>
                
                {/* Central AI Element - Increased size */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-28 h-28 sm:w-30 sm:h-30 md:w-32 md:h-32 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-[#009898]/20">
                    <Brain className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#009898]" />
                  </div>
                </div>
                
                {/* Floating Technology Icons - Repositioned per request */}
                {/* 1. Above "Machine Learning" text */}
                <div className="absolute top-[8%] right-[30%] w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-gray-100 animate-float-slow">
                  <Cpu className="w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10 text-[#009898]" />
                </div>
                
                {/* 2. Above "Computer Vision" text */}
                <div className="absolute bottom-[28%] right-[10%] w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-gray-100 animate-float-slow">
                  <Code className="w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10 text-[#009898]" />
                </div>
                
                {/* 3. Above "Natural Language" text */}
                <div className="absolute bottom-[15%] left-[20%] w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 animate-float-medium">
                  <Server className="w-8 h-8 sm:w-8 sm:h-8 md:w-8 md:h-8 text-[#88bf42]" />
                </div>
                
                {/* 4. Additional icon for balance */}
                <div className="absolute top-[15%] left-[15%] w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 animate-float-medium">
                  <Network className="w-8 h-8 sm:w-8 sm:h-8 md:w-8 md:h-8 text-[#88bf42]" />
                </div>
              </div>
              
              {/* Stats Labels */}
              <div className="absolute bottom-[5%] right-[5%] bg-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg shadow-md border border-gray-100 text-xs">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#009898] rounded-full mr-2"></div>
                  <span className="font-medium text-[#009898]">99.9% Uptime</span>
                </div>
              </div>
              
              <div className="absolute top-[5%] left-[5%] bg-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg shadow-md border border-gray-100 text-xs">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#88bf42] rounded-full mr-2"></div>
                  <span className="font-medium text-[#88bf42]">25ms Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
