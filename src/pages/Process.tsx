import {
  MessageCircle,
  ClipboardList,
  FileText,
  Database,
  BarChart3,
  Send,
  RefreshCw,
  CheckCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Process() {
  const steps = [
    {
      number: 1,
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Client Inquiry',
      description:
        'Reach out via our contact form, email, or WhatsApp. Tell us about your project, data, and requirements.',
      details: [
        'Describe your project goals',
        'Share basic data information',
        'Mention any deadlines',
      ],
    },
    {
      number: 2,
      icon: <ClipboardList className="w-8 h-8" />,
      title: 'Requirement Discussion',
      description:
        'We will have a detailed discussion to understand your exact needs, methodology preferences, and deliverable expectations.',
      details: [
        'Free consultation call/chat',
        'Clarify analysis objectives',
        'Discuss methodology options',
        'Define deliverable format',
      ],
    },
    {
      number: 3,
      icon: <FileText className="w-8 h-8" />,
      title: 'Offer & Pricing',
      description:
        'Based on your requirements, we will provide a detailed proposal with scope of work, timeline, and transparent pricing.',
      details: [
        'Detailed service breakdown',
        'Clear timeline estimate',
        'Fixed pricing (no hidden costs)',
        'Payment terms explained',
      ],
    },
    {
      number: 4,
      icon: <Database className="w-8 h-8" />,
      title: 'Data Collection',
      description:
        'Once you approve the proposal, share your dataset securely. We will verify data quality and structure.',
      details: [
        'Secure data transfer',
        'Confidentiality guaranteed',
        'Data quality check',
        'Preliminary assessment',
      ],
    },
    {
      number: 5,
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analysis',
      description:
        'Our expert team conducts comprehensive analysis using appropriate statistical methods and professional tools.',
      details: [
        'Data cleaning & preparation',
        'Statistical analysis execution',
        'Quality control checks',
        'Result interpretation',
      ],
    },
    {
      number: 6,
      icon: <Send className="w-8 h-8" />,
      title: 'Report Delivery',
      description:
        'Receive a professionally formatted report with detailed results, interpretations, tables, and visualizations.',
      details: [
        'Comprehensive written report',
        'All statistical outputs',
        'Tables and visualizations',
        'Clear interpretation',
      ],
    },
    {
      number: 7,
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'Revision',
      description:
        'We offer revision rounds to ensure everything meets your expectations and requirements.',
      details: [
        'Review deliverables',
        'Request clarifications',
        'Suggest modifications',
        'Unlimited reasonable revisions',
      ],
    },
    {
      number: 8,
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Final Delivery',
      description:
        'Complete project handover with all files, documentation, and ongoing support if needed.',
      details: [
        'All final files delivered',
        'Documentation included',
        'Post-delivery support',
        'Feedback collection',
      ],
    },
  ];

  const timeline = {
    basic: '2-3 days',
    standard: '5-7 days',
    premium: '10-14 days',
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How We <span className="text-[#0CB35D]">Work</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined 8-step process ensures quality, transparency, and
            timely delivery for every project
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-12 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6 md:gap-8">
                  {/* Number Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#0CB35D] to-[#0a9d4f] rounded-full flex flex-col items-center justify-center text-white shadow-lg">
                      <div className="mb-1">{step.icon}</div>
                      <span className="text-sm font-semibold">
                        Step {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span className="text-[#0CB35D] mt-1">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Typical Project Timelines
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">
                Basic Projects
              </h3>
              <p className="text-3xl font-bold text-[#0CB35D] mb-2">
                {timeline.basic}
              </p>
              <p className="text-sm text-gray-600">
                Descriptive stats, correlation, simple analysis
              </p>
            </div>
            <div className="bg-white border-2 border-[#0CB35D] rounded-xl p-6 text-center shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Standard Projects
              </h3>
              <p className="text-3xl font-bold text-[#0CB35D] mb-2">
                {timeline.standard}
              </p>
              <p className="text-sm text-gray-600">
                Regression, hypothesis testing, reports
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">
                Premium Projects
              </h3>
              <p className="text-3xl font-bold text-[#0CB35D] mb-2">
                {timeline.premium}
              </p>
              <p className="text-sm text-gray-600">
                SEM, CFA, complex econometrics
              </p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            *Timelines may vary based on data complexity and project scope. Rush
            delivery available on request.
          </p>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Quality Commitment
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#0CB35D]" />
                Accuracy Guaranteed
              </h3>
              <p className="text-sm text-gray-600">
                Every analysis is double-checked for statistical accuracy and
                methodological soundness before delivery.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#0CB35D]" />
                Complete Confidentiality
              </h3>
              <p className="text-sm text-gray-600">
                Your data and project details are completely confidential. We sign
                NDAs if required.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#0CB35D]" />
                Unlimited Revisions
              </h3>
              <p className="text-sm text-gray-600">
                We revise until you are satisfied. Your success is our priority, not
                just delivering and moving on.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#0CB35D]" />
                Clear Communication
              </h3>
              <p className="text-sm text-gray-600">
                Regular updates throughout the project. We are always available to
                answer questions.
              </p>
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
            Let us begin with Step 1: Tell us about your project
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
