import { Award, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const skills = [
    'Data Analysis & Statistics',
    'Financial Analytics',
    'Econometrics',
    'Research Methodology',
    'Structural Equation Modeling (SEM)',
    'Confirmatory Factor Analysis (CFA)',
    'Panel Data Analysis',
    'Time Series Analysis',
    'Hypothesis Testing',
    'Regression Analysis',
    'Business Intelligence',
    'Dashboard Development',
  ];

  const tools = [
    { name: 'SPSS', category: 'Statistical Analysis' },
    { name: 'STATA', category: 'Econometrics' },
    { name: 'AMOS', category: 'Structural Modeling' },
    { name: 'SmartPLS', category: 'PLS-SEM' },
    { name: 'Excel', category: 'Data Management' },
    { name: 'Python', category: 'Programming' },
    { name: 'Power BI', category: 'Visualization' },
    { name: 'Tableau', category: 'Visualization' },
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Academic Excellence',
      description:
        'We maintain research-grade standards in every project. Your data deserves precision, not approximation.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Client-Focused Delivery',
      description:
        'Clear communication, timely delivery, and unlimited revisions until you\'re satisfied. Your success is our success.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Insight-Driven Results',
      description:
        'We don\'t just deliver outputs—we provide interpretation, context, and actionable insights you can use.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-[#0CB35D]">Laratix Lab</span>
            </h1>
            <p className="text-xl text-gray-600">
              A specialized analytics agency transforming data into research-grade
              insights and business-ready decisions
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Laratix Lab was founded on a simple observation: there's a massive gap
              between having data and understanding what it means. Whether you're a
              student struggling with your thesis analysis, a researcher navigating
              complex statistical methods, or a business owner drowning in
              spreadsheets—quality analytical support is hard to find.
            </p>
            <p className="text-gray-600 mb-4">
              We started with a clear mission: to make professional-grade data
              analysis accessible to everyone who needs it. Our founder, with a
              background in finance and quantitative research, experienced firsthand
              the challenges students and professionals face when dealing with
              complex data analysis requirements.
            </p>
            <p className="text-gray-600">
              Today, we serve university students, researchers, finance
              professionals, and small businesses—delivering everything from simple
              descriptive statistics to advanced econometric modeling. We're not
              just analysts; we're your partners in making sense of data.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            "To deliver accurate, insightful, and decision-driven analytics for both
            academic and business success. We transform raw data into clear
            narratives that drive action."
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0CB35D]/10 rounded-full text-[#0CB35D] mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Skills & Expertise
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-center text-sm font-medium text-gray-700 hover:border-[#0CB35D] hover:text-[#0CB35D] transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Tools & Technologies
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-600">{tool.category}</p>
                  </div>
                  <div className="w-12 h-12 bg-[#0CB35D]/10 rounded-lg flex items-center justify-center">
                    <span className="text-[#0CB35D] font-bold text-sm">
                      {tool.name.charAt(0)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Meet the Founder
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong className="text-gray-900">Background:</strong> Finance
                graduate with extensive experience in quantitative research and data
                analysis. Specialized in econometrics, financial modeling, and
                advanced statistical methods.
              </p>
              <p>
                <strong className="text-gray-900">Journey:</strong> Started as a
                freelance data analyst helping fellow students with their thesis
                projects. What began as occasional help evolved into a full-fledged
                analytics service after realizing the massive demand for quality
                analytical support.
              </p>
              <p>
                <strong className="text-gray-900">Expertise:</strong> Over 100+
                projects completed across research analytics, financial analysis, and
                business intelligence. Expert in SPSS, STATA, AMOS, and SmartPLS with
                a proven track record of delivering publication-ready results.
              </p>
              <p>
                <strong className="text-gray-900">Philosophy:</strong> "Data doesn't
                speak for itself—it needs skilled interpretation. My job is to be the
                translator between your data and your decisions."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0CB35D] to-[#0a9d4f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to work with us?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help with your analytics needs
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#0CB35D] px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
