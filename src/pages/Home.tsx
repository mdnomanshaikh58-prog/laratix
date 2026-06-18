import { Link } from 'react-router-dom';
import { BarChart3, CheckCircle, Users, Zap } from 'lucide-react';
import { ImageWithFallback } from '@/components/common/ImageWithFallback';
import { serviceCategoryContent, servicesData } from '@/data/services';

export default function Home() {
  const services = [
    servicesData.find((service) => service.id === 'landing-page-development'),
    servicesData.find((service) => service.id === 'business-insights'),
    servicesData.find((service) => service.id === 'academic-research'),
    servicesData.find((service) => service.id === 'web-app-dashboard'),
    servicesData.find((service) => service.id === 'financial-analysis'),
    servicesData.find((service) => service.id === 'research-support'),
  ].filter(Boolean);

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Research-Grade Accuracy',
      description: 'Academic-level precision in every analysis',
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Business Clarity',
      description: 'Dashboards and insights that support better decisions',
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Modern Web Execution',
      description: 'Clean, responsive builds for real client-facing products',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Clear Interpretation',
      description: 'Not just outputs, but meaningful guidance and delivery',
    },
  ];

  const portfolioHighlights = [
    {
      title: 'Banking Performance Analysis',
      category: 'Business',
      result:
        'Comprehensive ROA/ROE analysis for 5-year panel data of commercial banks',
    },
    {
      title: 'Launch Funnel Website',
      category: 'Web Development',
      result:
        'Conversion-focused landing page and service funnel for a client acquisition campaign',
    },
    {
      title: 'Thesis: Consumer Behavior Study',
      category: 'Academic',
      result:
        'Full SEM analysis with 400+ responses, hypothesis testing, and detailed interpretation',
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Building Digital Products, Business Insight, and{' '}
              <span className="text-[#0CB35D]">Academic Results</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Specialized in Web Development, Business Projects, and Academic
              Research Support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#0CB35D] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#0a9d4f] transition-colors shadow-lg hover:shadow-xl"
              >
                Get a Quote
              </Link>
              <Link
                to="/services"
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50 transition-colors border-2 border-gray-200"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A mixed selection of our web development, business, and academic
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              if (!service) return null;

              const IconComponent = service.icon;
              const category = serviceCategoryContent[service.category];

              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-[#0CB35D] group"
                >
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={service.thumbnail}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-8">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="text-[#0CB35D] group-hover:scale-110 transition-transform">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <span className="rounded-full bg-[#0CB35D]/10 px-3 py-1 text-xs font-semibold text-[#0CB35D]">
                        {category.label}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                    <span className="text-[#0CB35D] font-medium hover:underline inline-flex items-center">
                      View Details
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Laratix Lab
            </h2>
            <p className="text-lg text-gray-600">
              One agency for digital delivery, analytics, and research support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0CB35D]/10 rounded-full text-[#0CB35D] mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              Real work across web, business, and academic services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {portfolioHighlights.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <span className="inline-block bg-[#0CB35D]/10 text-[#0CB35D] text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.result}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0CB35D] to-[#0a9d4f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Have a project but need the right execution partner?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let us turn your ideas, data, and goals into polished results.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#0CB35D] px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
