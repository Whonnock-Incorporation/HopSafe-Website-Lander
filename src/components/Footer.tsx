
import React from "react";
const Footer = () => {
  return <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="section-container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="pulse-chip mx-auto mb-6">
            <span>Get In Touch</span>
          </div>
          
          <h2 className="section-title mb-6">
            Ready to Make School <br />
            Transportation Safer?
          </h2>
          
          <p className="section-subtitle mx-auto mb-8">
            Contact us today to learn how HopSafe can transform your school's transportation system.
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="flex items-center justify-center space-x-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-primary">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span className="text-gray-600">E-Mail:</span>
              <a 
                href="mailto:projectwhonnock@gmail.com" 
                className="text-primary hover:text-primary/80 font-medium transition-colors duration-300"
              >
                projectwhonnock@gmail.com
              </a>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <p className="text-center text-gray-600 text-sm">
              © 2024 HopSafe. All rights reserved. Making school transportation safer and more transparent.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Footer;
