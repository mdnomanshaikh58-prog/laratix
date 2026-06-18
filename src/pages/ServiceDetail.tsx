import { ImageWithFallback } from '@/components/common/ImageWithFallback';
import { servicesData } from '@/data/services';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Check, Star, ArrowLeft } from 'lucide-react';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = servicesData.find((s) => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = service.icon;

  return (
    <div>
      {/* Back Button */}
      <section className="bg-white py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0CB35D] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>
      </section>

      {/* Service Title */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-[#0CB35D]">
              <IconComponent className="w-12 h-12" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              {service.title}
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">
            {service.fullDescription}
          </p>
        </div>
      </section>

      {/* Thumbnail */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src={service.thumbnail}
              alt={service.title}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Service Information */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* What's Included */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Check className="w-6 h-6 text-[#0CB35D]" />
                What's Included
              </h2>
              <ul className="space-y-3">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#0CB35D] mt-1 flex-shrink-0">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Advanced Options */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Advanced Add-ons
              </h2>
              <ul className="space-y-3">
                {service.advanced.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#0CB35D] mt-1 flex-shrink-0">+</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tools & Target Client */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <h3 className="font-semibold text-gray-900 mb-2">
                  Perfect for:
                </h3>
                <p className="text-gray-700">{service.targetClient}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose Your <span className="text-[#0CB35D]">Package</span>
            </h2>
            <p className="text-lg text-gray-600">
              Select the tier that best fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Package */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Essential features to get started
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {service.pricing.basic.price}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  Delivery: {service.pricing.basic.deliveryTime}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {service.pricing.basic.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/payment"
                state={{
                  serviceId: service.id,
                  serviceName: service.title,
                  tier: 'basic',
                  price: service.pricing.basic.price,
                  deliveryTime: service.pricing.basic.deliveryTime,
                  features: service.pricing.basic.features,
                }}
                className="block w-full text-center py-3 rounded-full font-medium transition-colors bg-gray-100 text-gray-900 hover:bg-gray-200"
              >
                Get Started
              </Link>
            </div>

            {/* Standard Package */}
            <div className="relative bg-white border-2 border-[#0CB35D] rounded-2xl p-8 shadow-2xl scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-[#0CB35D] text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </span>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Standard
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Perfect for most projects
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {service.pricing.standard.price}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  Delivery: {service.pricing.standard.deliveryTime}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {service.pricing.standard.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0CB35D] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/payment"
                state={{
                  serviceId: service.id,
                  serviceName: service.title,
                  tier: 'standard',
                  price: service.pricing.standard.price,
                  deliveryTime: service.pricing.standard.deliveryTime,
                  features: service.pricing.standard.features,
                }}
                className="block w-full text-center py-3 rounded-full font-medium transition-colors bg-[#0CB35D] text-white hover:bg-[#0a9d4f]"
              >
                Get Started
              </Link>
            </div>

            {/* Premium Package */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Premium
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Complete advanced solution
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {service.pricing.premium.price}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  Delivery: {service.pricing.premium.deliveryTime}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {service.pricing.premium.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/payment"
                state={{
                  serviceId: service.id,
                  serviceName: service.title,
                  tier: 'premium',
                  price: service.pricing.premium.price,
                  deliveryTime: service.pricing.premium.deliveryTime,
                  features: service.pricing.premium.features,
                }}
                className="block w-full text-center py-3 rounded-full font-medium transition-colors bg-gray-100 text-gray-900 hover:bg-gray-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0CB35D] to-[#0a9d4f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to discuss your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-[#0CB35D] px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
