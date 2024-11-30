import React from 'react';
import { Brain, Twitter, Github, MessageCircle } from 'lucide-react';
import FooterSection from './FooterSection';
import FooterLink from './FooterLink';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold text-white">StarkBasket</span>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              AI-powered token baskets for the future of crypto investing.
            </p>
          </div>

          {/* Product Section */}
          <FooterSection title="Product">
            <li><FooterLink href="#">Features</FooterLink></li>
            <li><FooterLink href="#">Create Basket</FooterLink></li>
            <li><FooterLink href="#">Market Analysis</FooterLink></li>
            <li><FooterLink href="#">Documentation</FooterLink></li>
          </FooterSection>

          {/* Resources Section */}
          <FooterSection title="Resources">
            <li><FooterLink href="#">Blog</FooterLink></li>
            <li><FooterLink href="#">Tutorials</FooterLink></li>
            <li><FooterLink href="#">FAQs</FooterLink></li>
            <li><FooterLink href="#">Support</FooterLink></li>
          </FooterSection>

          {/* Community Section */}
          <FooterSection title="Community">
            <li>
              <FooterLink href="#">
                <div className="flex items-center">
                  <Twitter className="h-5 w-5 mr-2" />
                  Twitter
                </div>
              </FooterLink>
            </li>
            <li>
              <FooterLink href="#">
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Discord
                </div>
              </FooterLink>
            </li>
            <li>
              <FooterLink href="#">
                <div className="flex items-center">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </div>
              </FooterLink>
            </li>
          </FooterSection>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} StarkBasket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}