import Link from 'next/link';

export const metadata = {
  title: 'Insurance Services - SecureLife Insurance',
  description: 'Explore our comprehensive insurance services including life, health, auto, and home insurance with competitive rates and excellent coverage.',
};

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Insurance Services</h1>
          <p className="text-xl text-blue-100">
            Comprehensive coverage options tailored to your needs
          </p>
        </div>
      </section>

      {/* Life Insurance Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-blue-600 mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Life Insurance</h2>
              <p className="text-gray-600 mb-4">
                Protect your family's financial future with our comprehensive life insurance policies. 
                We offer term life, whole life, and universal life insurance options to suit your needs 
                and budget.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Term Life Insurance - Affordable coverage for specific periods</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Whole Life Insurance - Lifetime protection with cash value</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Universal Life Insurance - Flexible premiums and benefits</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get a Quote
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Coverage Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  Death benefit for beneficiaries
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  Cash value accumulation
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  Tax advantages
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  Living benefits options
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  Flexible payment options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Health Insurance Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Covered</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  Hospitalization expenses
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  Doctor consultations
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  Prescription medications
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  Preventive care services
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  Emergency services
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="text-blue-600 mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Health Insurance</h2>
              <p className="text-gray-600 mb-4">
                Comprehensive medical coverage for individuals, families, and groups. Our health insurance 
                plans provide access to quality healthcare and protect you from unexpected medical expenses.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Individual & Family Plans</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Group Health Insurance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Medicare Supplement Plans</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Auto Insurance Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-blue-600 mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Auto Insurance</h2>
              <p className="text-gray-600 mb-4">
                Comprehensive vehicle protection for cars, trucks, motorcycles, and more. Get the coverage 
                you need at rates you can afford with our flexible auto insurance policies.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Liability Coverage - Protects you from legal claims</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Collision Coverage - Repairs after accidents</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Comprehensive Coverage - Protection from theft and damage</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get a Quote
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  Roadside assistance
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  Rental car reimbursement
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  Accident forgiveness
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  Multi-car discounts
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  Safe driver rewards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Home Insurance Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Protection Includes</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  Dwelling coverage
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  Personal property
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  Liability protection
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  Additional living expenses
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-blue-600 mr-2">•</span>
                  Natural disaster coverage
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="text-blue-600 mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Home Insurance</h2>
              <p className="text-gray-600 mb-4">
                Protect your home and possessions with our comprehensive homeowners insurance. Coverage 
                includes your dwelling, personal belongings, and liability protection against accidents.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Homeowners Insurance - Complete home protection</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Renters Insurance - Protect your belongings</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Condo Insurance - Tailored for condo owners</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Choosing the Right Coverage?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our insurance experts are here to help you find the perfect policy for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Us Today
            </Link>
            <a 
              href="tel:5551234567" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
