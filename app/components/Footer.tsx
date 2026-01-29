import Link from 'next/link';

// Reusable Footer Section Component
interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => (
  <div>
    <h4 className="font-semibold mb-4">{title}</h4>
    <ul className="space-y-2 text-gray-400 text-sm">
      {children}
    </ul>
  </div>
);

// Specific Section Components
const CompanyInfo: React.FC = () => (
  <div>
    <h3 className="text-xl font-bold text-blue-400 mb-4">SecureLife Insurance</h3>
    <p className="text-gray-400 text-sm">
      Protecting what matters most to you. Your trusted partner in insurance solutions since 1995.
    </p>
  </div>
);

const QuickLinks: React.FC = () => (
  <FooterSection title="Quick Links">
    <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
    <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
    <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
    <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
  </FooterSection>
);

const ServicesList: React.FC = () => (
  <FooterSection title="Our Services">
    <li>Life Insurance</li>
    <li>Health Insurance</li>
    <li>Auto Insurance</li>
    <li>Home Insurance</li>
  </FooterSection>
);

const ContactInfo: React.FC = () => (
  <FooterSection title="Contact Us">
    <li>123 Insurance Street</li>
    <li>New York, NY 10001</li>
    <li>Phone: (555) 123-4567</li>
    <li>Email: info@securelife.com</li>
  </FooterSection>
);

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <CompanyInfo />
          <QuickLinks />
          <ServicesList />
          <ContactInfo />
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SecureLife Insurance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}