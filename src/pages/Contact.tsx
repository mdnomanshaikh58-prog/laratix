import { useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    description: '',
    deadline: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectType: '',
        description: '',
        deadline: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const whatsappNumber = '+1234567890'; // Replace with actual WhatsApp number
  const email = 'hello@laratixlab.com'; // Replace with actual email

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-[#0CB35D]">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to launch a website, solve a business challenge, or complete
            an academic project? Describe your needs and get a custom solution.
          </p>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-gray-600 mb-8">
                We are here to help with your web, business, and academic
                project needs. Reach out through your preferred method and we
                will respond within 24 hours.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white border-2 border-[#0CB35D] rounded-xl p-6 hover:bg-[#0CB35D]/5 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#0CB35D] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      WhatsApp (Fastest)
                    </h3>
                    <p className="text-sm text-gray-600">
                      Quick response for urgent inquiries
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-6 hover:border-[#0CB35D] hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 group-hover:bg-[#0CB35D] group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-sm text-gray-600">{email}</p>
                  </div>
                </a>
              </div>

              {/* Why Contact Us */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  What happens next?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-[#0CB35D] font-bold">1.</span>
                    <p className="text-sm text-gray-600">
                      We will review your project requirements
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#0CB35D] font-bold">2.</span>
                    <p className="text-sm text-gray-600">
                      Schedule a free consultation call/chat
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#0CB35D] font-bold">3.</span>
                    <p className="text-sm text-gray-600">
                      Provide a detailed proposal with pricing
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#0CB35D] font-bold">4.</span>
                    <p className="text-sm text-gray-600">
                      Start working on your project once approved
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us Your Project Details
                </h3>

                {submitted ? (
                  <div className="bg-[#0CB35D]/10 border border-[#0CB35D] rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-[#0CB35D] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      <Send className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-sm text-gray-600">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0CB35D] focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0CB35D] focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0CB35D] focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select a service...</option>
                        <option value="landing-page">
                          Web Development - Landing Page
                        </option>
                        <option value="business-website">
                          Web Development - Business Website
                        </option>
                        <option value="ecommerce-store">
                          Web Development - E-commerce Store
                        </option>
                        <option value="dashboard-ui">
                          Web Development - Web App Dashboard
                        </option>
                        <option value="academic">
                          Academic Research Analytics
                        </option>
                        <option value="financial">Financial Data Analysis</option>
                        <option value="business">Business Data Insights</option>
                        <option value="research-support">
                          Full Research Support
                        </option>
                        <option value="data-cleaning">Data Cleaning</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>

                    {/* Deadline */}
                    <div>
                      <label
                        htmlFor="deadline"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Deadline (Optional)
                      </label>
                      <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0CB35D] focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Project Description *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        required
                        value={formData.description}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0CB35D] focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your project: data type, analysis needed, expected deliverables, etc."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-[#0CB35D] text-white py-4 rounded-full font-medium text-lg hover:bg-[#0a9d4f] transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Before You Reach Out
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                What should I include in my message?
              </h3>
              <p className="text-sm text-gray-600">
                Brief project description, type of analysis needed, sample size,
                deadline, and any specific requirements.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                How quickly will I get a response?
              </h3>
              <p className="text-sm text-gray-600">
                We respond to all inquiries within 24 hours, usually much faster.
                WhatsApp is fastest.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Is the consultation really free?
              </h3>
              <p className="text-sm text-gray-600">
                Yes! Initial consultation to understand your needs and suggest
                solutions is completely free.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can you handle urgent projects?
              </h3>
              <p className="text-sm text-gray-600">
                Yes, rush delivery is available. Mention your deadline and we will
                confirm if we can accommodate it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
