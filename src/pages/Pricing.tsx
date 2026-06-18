import { Link } from 'react-router-dom';
import { ImageWithFallback } from '@/components/common/ImageWithFallback';
import { servicesData } from '@/data/services';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, <span className="text-[#0CB35D]">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of professional services with clear,
            straightforward pricing
          </p>
        </div>
      </section>

      {/* Services Grid with Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={index}
                  to={`/services/${service.id}`}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-[#0CB35D] group"
                >
                  {/* Thumbnail Image */}
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={service.thumbnail}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="text-[#0CB35D] mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {service.shortDescription}
                    </p>

                    {/* Pricing */}
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Starting from</span>
                        <span className="text-2xl font-bold text-[#0CB35D]">
                          {service.pricing.basic.price}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mb-3">
                        Up to {service.pricing.premium.price}
                      </div>

                      {/* Key Features */}
                      <div className="space-y-1 mb-4">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Check className="w-3 h-3 text-[#0CB35D]" />
                          <span>{service.pricing.basic.deliveryTime} delivery</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Check className="w-3 h-3 text-[#0CB35D]" />
                          <span>Multiple pricing tiers</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Check className="w-3 h-3 text-[#0CB35D]" />
                          <span>Revision rounds included</span>
                        </div>
                      </div>

                      <span className="text-[#0CB35D] font-medium text-sm hover:underline inline-flex items-center">
                        View Full Pricing →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Payment Terms
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#0CB35D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    50% Upfront, 50% on Delivery
                  </h3>
                  <p className="text-sm text-gray-600">
                    Pay 50% to start the project. Remaining 50% only after you
                    review and approve the deliverables.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#0CB35D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Secure Payment Methods
                  </h3>
                  <p className="text-sm text-gray-600">
                    Bank transfer, PayPal, or other agreed methods. Invoice
                    provided for all transactions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#0CB35D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Satisfaction Guaranteed
                  </h3>
                  <p className="text-sm text-gray-600">
                    We do not complete payment until you are satisfied with the
                    results. Your success is our success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0CB35D] to-[#0a9d4f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Click on any service to see detailed pricing tiers and place your
            order
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#0CB35D] px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            Request a Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
