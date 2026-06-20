import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, MoveRight, Search } from 'lucide-react';
import { ImageWithFallback } from '@/components/common/ImageWithFallback';
import {
  serviceCategoryContent,
  servicesByCategory,
  servicesData,
} from '@/data/services';

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const hoveringRef = useRef<Record<string, boolean>>({});

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const searchResults = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }

    return servicesData.filter((service) => {
      const haystack = [
        service.title,
        service.shortDescription,
        service.fullDescription,
        service.targetClient,
        serviceCategoryContent[service.category].label,
        ...service.tools,
        ...service.includes,
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [normalizedQuery]);

  useEffect(() => {
    const cleanupCallbacks: Array<() => void> = [];

    servicesByCategory.forEach((group) => {
      const element = rowRefs.current[group.category];

      if (!element) {
        return;
      }

      let frameId = 0;
      let direction = 1;
      let active = false;

      const step = () => {
        if (!active || hoveringRef.current[group.category]) {
          frameId = window.requestAnimationFrame(step);
          return;
        }

        const maxScroll = element.scrollWidth - element.clientWidth;

        if (maxScroll <= 0) {
          frameId = window.requestAnimationFrame(step);
          return;
        }

        if (element.scrollLeft >= maxScroll - 1) {
          direction = -1;
        } else if (element.scrollLeft <= 1) {
          direction = 1;
        }

        element.scrollLeft += direction * 0.6;
        frameId = window.requestAnimationFrame(step);
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          active = entry.isIntersecting;
        },
        { threshold: 0.6 },
      );

      observer.observe(element);
      frameId = window.requestAnimationFrame(step);

      cleanupCallbacks.push(() => {
        active = false;
        observer.disconnect();
        window.cancelAnimationFrame(frameId);
      });
    });

    return () => {
      cleanupCallbacks.forEach((callback) => callback());
    };
  }, []);

  return (
    <div>
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#0CB35D]">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three focused service lines for web development, business projects,
            and academic work.
          </p>
        </div>
      </section>

      <section id="service-search" className="bg-white pb-6 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search services by keyword, category, tool, or project type..."
              className="w-full rounded-full border border-gray-200 bg-white py-4 pl-13 pr-5 text-sm text-gray-700 shadow-sm outline-none transition-all focus:border-[#0CB35D] focus:ring-4 focus:ring-[#0CB35D]/10"
            />
          </div>
        </div>
      </section>

      {normalizedQuery && (
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Search Results
                </h2>
                <p className="mt-2 text-gray-600">
                  {searchResults.length > 0
                    ? `Showing ${searchResults.length} result${
                        searchResults.length === 1 ? '' : 's'
                      } for "${searchQuery}".`
                    : `No services found for "${searchQuery}". Try a broader keyword.`}
                </p>
              </div>
            </div>

            {searchResults.length > 0 && (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {searchResults.map((service) => {
                  const IconComponent = service.icon;
                  const category = serviceCategoryContent[service.category];

                  return (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:border-[#0CB35D] hover:shadow-xl"
                    >
                      <div className="h-48 overflow-hidden">
                        <ImageWithFallback
                          src={service.thumbnail}
                          alt={service.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-8">
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <div className="text-[#0CB35D] transition-transform group-hover:scale-110">
                            <IconComponent className="h-8 w-8" />
                          </div>
                          <span className="rounded-full bg-[#0CB35D]/10 px-3 py-1 text-xs font-semibold text-[#0CB35D]">
                            {category.label}
                          </span>
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-gray-900">
                          {service.title}
                        </h3>
                        <p className="mb-4 text-gray-600">
                          {service.shortDescription}
                        </p>
                        <span className="inline-flex items-center font-medium text-[#0CB35D] hover:underline">
                          View Details
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {servicesByCategory.map((group) => (
            <section key={group.category} className="space-y-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="inline-flex items-center rounded-full bg-[#0CB35D]/10 px-4 py-1 text-sm font-medium text-[#0CB35D]">
                    {group.label}
                  </span>
                  <h2 className="mt-4 text-3xl font-bold text-gray-900">
                    {group.label} Projects
                  </h2>
                  <p className="mt-2 max-w-3xl text-gray-600">
                    {group.description}
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  This row auto-scrolls while it is centered on screen. Hover to
                  pause and explore manually.
                </p>
              </div>

              <div
                ref={(element) => {
                  rowRefs.current[group.category] = element;
                }}
                onMouseEnter={() => {
                  hoveringRef.current[group.category] = true;
                }}
                onMouseLeave={() => {
                  hoveringRef.current[group.category] = false;
                }}
                className="-mx-4 overflow-x-auto px-4 pb-4 scroll-smooth"
              >
                <div className="flex min-w-max gap-6">
                  {group.services.map((service) => {
                    const IconComponent = service.icon;

                    return (
                      <div
                        key={service.id}
                        className="w-[360px] flex-shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:border-[#0CB35D] hover:shadow-xl"
                      >
                        <div className="h-44 overflow-hidden">
                          <ImageWithFallback
                            src={service.thumbnail}
                            alt={service.title}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>

                        <div className="p-5">
                          <div className="mb-4 flex items-center gap-3">
                            <div className="rounded-full bg-[#0CB35D]/10 p-3 text-[#0CB35D]">
                              <IconComponent className="h-6 w-6" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                                {group.label}
                              </p>
                              <h3 className="text-lg font-semibold text-gray-900">
                                {service.title}
                              </h3>
                            </div>
                          </div>

                          <p className="mb-4 text-sm text-gray-600">
                            {service.fullDescription}
                          </p>

                          <div className="mb-4 grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-4">
                            <div>
                              <p className="text-xs font-semibold text-gray-500">
                                Perfect for
                              </p>
                              <p className="mt-1 text-sm text-gray-700">
                                {service.targetClient}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-gray-500">
                                Starting from
                              </p>
                              <p className="mt-1 text-lg font-bold leading-tight text-[#0CB35D]">
                                {service.pricing.basic.price}
                              </p>
                            </div>
                          </div>

                          <div className="mb-4">
                            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900">
                              <CheckCircle className="h-4 w-4 text-[#0CB35D]" />
                              What's Included
                            </h4>
                            <ul className="space-y-1.5">
                              {service.includes.slice(0, 2).map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-sm text-gray-600"
                                >
                                  <span className="mt-1 text-[#0CB35D]">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-5 flex flex-wrap gap-2">
                            {service.tools.slice(0, 4).map((tool) => (
                              <span
                                key={tool}
                                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-3">
                            <Link
                              to={`/services/${service.id}`}
                              className="inline-flex items-center gap-2 rounded-full bg-[#0CB35D] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0a9d4f]"
                            >
                              View Full Details
                              <MoveRight className="h-4 w-4" />
                            </Link>
                            <Link
                              to="/contact"
                              className="inline-flex items-center rounded-full bg-gray-100 px-5 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200"
                            >
                              Request Quote
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0CB35D] to-[#0a9d4f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book a free consultation and we will help you choose the right
            solution.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-white px-8 py-4 text-lg font-medium text-[#0CB35D] shadow-lg transition-colors hover:bg-gray-50"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
