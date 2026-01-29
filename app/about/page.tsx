export const metadata = {
  title: 'About Us - SecureLife Insurance',
  description: 'Learn about SecureLife Insurance, our mission, values, and commitment to protecting what matters most to you.',
};

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About SecureLife Insurance</h1>
          <p className="text-xl text-blue-100">
            Your trusted partner in protection since 1995
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1995, SecureLife Insurance began with a simple mission: to provide comprehensive, 
                affordable insurance solutions that protect families and businesses across the nation.
              </p>
              <p className="text-gray-600 mb-4">
                Over the past 25+ years, we've grown from a small local agency to a trusted national provider, 
                serving over 50,000 satisfied clients. Our success is built on our unwavering commitment to 
                exceptional service, transparent policies, and putting our customers first.
              </p>
              <p className="text-gray-600">
                Today, we continue to innovate and adapt to meet the evolving needs of our clients, while 
                maintaining the personal touch and dedication that has defined us from the beginning.
              </p>
            </div>
            <div className="bg-blue-100 rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">50,000+</h3>
                  <p className="text-gray-700">Satisfied Customers</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">25+ Years</h3>
                  <p className="text-gray-700">Industry Experience</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">98%</h3>
                  <p className="text-gray-700">Customer Satisfaction</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">24/7</h3>
                  <p className="text-gray-700">Available Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600">
              Guiding principles that drive everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency in all our dealings, ensuring our clients 
                always have clear understanding of their coverage.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-gray-600">
                Your needs are our priority. We're committed to providing personalized service and 
                support that exceeds expectations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously evolve our services and technology to provide modern, efficient 
                solutions that meet today's insurance needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SecureLife?</h2>
            <p className="text-lg text-gray-600">
              Experience the SecureLife difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Comprehensive Coverage</h3>
                <p className="mt-2 text-gray-600">
                  We offer a full range of insurance products to protect every aspect of your life, 
                  from health and life to auto and home.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Competitive Pricing</h3>
                <p className="mt-2 text-gray-600">
                  Get the best value for your money with our affordable rates and flexible payment 
                  options without compromising on coverage quality.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Expert Guidance</h3>
                <p className="mt-2 text-gray-600">
                  Our experienced insurance professionals are here to help you understand your options 
                  and choose the right coverage for your needs.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Fast Claims Processing</h3>
                <p className="mt-2 text-gray-600">
                  When you need us most, we're there. Our streamlined claims process ensures quick 
                  and efficient resolution when you file a claim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
