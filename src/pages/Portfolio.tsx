import { BarChart3, BookOpen, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const projects = [
    {
      title: 'Banking Sector Performance Analysis (2018-2023)',
      category: 'Financial Analysis',
      icon: <BarChart3 className="w-6 h-6" />,
      tools: ['STATA', 'Excel'],
      problem:
        'Analyze the impact of digital banking adoption on the financial performance of commercial banks in Pakistan.',
      data: '5-year panel data from 20 commercial banks including financial statements and digital transaction metrics.',
      methodology:
        'Panel data regression analysis (Fixed Effects Model), descriptive statistics, correlation analysis, and ROA/ROE trend analysis.',
      results:
        'Digital banking adoption showed a statistically significant positive impact on ROA (p<0.05). Banks with higher digital transaction ratios demonstrated 12% better ROE on average.',
      insights:
        'Digital transformation is crucial for banking profitability. Early adopters gained competitive advantage in cost efficiency and customer reach.',
    },
    {
      title: 'Consumer Purchase Intention - Social Media Impact Study',
      category: 'Research Analytics',
      icon: <BookOpen className="w-6 h-6" />,
      tools: ['SPSS', 'AMOS', 'SmartPLS'],
      problem:
        'Investigate how social media marketing influences consumer purchase intention through brand awareness and trust.',
      data: 'Primary data collected through structured questionnaire (n=425 respondents), 5-point Likert scale.',
      methodology:
        'Structural Equation Modeling (SEM), Confirmatory Factor Analysis (CFA), mediation analysis, reliability and validity testing.',
      results:
        'All hypotheses supported. Social media marketing significantly impacts purchase intention (β=0.68, p<0.001). Brand trust mediates the relationship (indirect effect=0.34).',
      insights:
        'Social media marketing effectiveness depends heavily on building brand trust. Direct advertising alone is insufficient—engagement and authenticity matter more.',
    },
    {
      title: 'MBA Thesis: Employee Satisfaction & Organizational Performance',
      category: 'Research Analytics',
      icon: <BookOpen className="w-6 h-6" />,
      tools: ['SPSS', 'Excel'],
      problem:
        'Examine the relationship between employee satisfaction dimensions and organizational performance in IT companies.',
      data: 'Survey data from 250 employees across 5 IT firms, organizational performance metrics from company records.',
      methodology:
        'Multiple regression analysis, ANOVA, correlation matrix, descriptive statistics, reliability analysis (Cronbach\'s Alpha).',
      results:
        'Work-life balance (β=0.42) and career development (β=0.38) emerged as strongest predictors of performance. Model R²=0.61.',
      insights:
        'Investment in work-life balance policies and career development programs directly translates to better organizational outcomes in the IT sector.',
    },
    {
      title: 'E-commerce Sales Dashboard & Growth Analysis',
      category: 'Business Insights',
      icon: <Briefcase className="w-6 h-6" />,
      tools: ['Excel', 'Python', 'Power BI'],
      problem:
        'Small e-commerce business struggling to understand sales patterns and customer behavior from 2 years of transaction data.',
      data: '24 months of transaction data (18,000+ orders), customer demographics, product categories, and marketing spend.',
      methodology:
        'Data cleaning, exploratory data analysis, trend analysis, customer segmentation, KPI dashboard creation.',
      results:
        'Identified top 20% customers generating 65% revenue. Seasonal patterns revealed Q4 as peak period. Mobile traffic conversion rate 40% lower than desktop.',
      insights:
        'Recommended focus on customer retention programs for high-value segment, mobile UX improvements, and Q4-targeted marketing campaigns for maximum ROI.',
    },
    {
      title: 'Financial Ratio Analysis - Manufacturing Sector',
      category: 'Financial Analysis',
      icon: <BarChart3 className="w-6 h-6" />,
      tools: ['Excel', 'STATA'],
      problem:
        'Compare financial health and efficiency of top 10 manufacturing companies over 3 years.',
      data: 'Annual financial statements (2020-2022) including balance sheets, income statements, and cash flow statements.',
      methodology:
        'Comprehensive ratio analysis (liquidity, profitability, efficiency, leverage), trend analysis, industry benchmarking.',
      results:
        'Identified 3 companies with declining liquidity ratios despite revenue growth. Operating margin compression observed across 7 out of 10 companies.',
      insights:
        'Manufacturing sector facing margin pressure due to rising input costs. Companies with stronger working capital management showed better resilience.',
    },
    {
      title: 'Credit Risk Assessment Model for SME Lending',
      category: 'Financial Analysis',
      icon: <BarChart3 className="w-6 h-6" />,
      tools: ['STATA', 'Python'],
      problem:
        'Develop a predictive model to assess credit risk for small and medium enterprise loan applications.',
      data: 'Historical loan data (500+ SME loans) with repayment history, financial metrics, and business characteristics.',
      methodology:
        'Logistic regression, classification analysis, ROC curve analysis, model validation using train-test split.',
      results:
        'Model achieved 78% accuracy in predicting default risk. Key predictors: debt-to-equity ratio, cash flow stability, and business age.',
      insights:
        'Cash flow analysis more predictive than balance sheet metrics for SME lending. Model provides data-driven risk scoring for faster loan decisions.',
    },
    {
      title: 'Impact of Training Programs on Employee Productivity',
      category: 'Research Analytics',
      icon: <BookOpen className="w-6 h-6" />,
      tools: ['SPSS'],
      problem:
        'Measure the effectiveness of corporate training programs on employee productivity in a telecom company.',
      data: 'Pre-post training assessment data (n=180), productivity metrics (KPIs), training hours, and employee demographics.',
      methodology:
        'Paired t-test, ANOVA, correlation analysis, control vs treatment group comparison.',
      results:
        'Statistically significant improvement in productivity scores post-training (t=4.52, p<0.001). Effect size: Cohen\'s d=0.68 (medium-large).',
      insights:
        'Training investment justified by measurable productivity gains. Technical training showed stronger impact than soft skills training in this context.',
    },
    {
      title: 'Customer Churn Prediction & Retention Strategy',
      category: 'Business Insights',
      icon: <Briefcase className="w-6 h-6" />,
      tools: ['Python', 'Excel'],
      problem:
        'High customer churn rate (35% annually) in subscription-based fitness app. Need to identify at-risk customers.',
      data: '12 months of user activity data (10,000+ users), subscription history, engagement metrics, demographics.',
      methodology:
        'Churn analysis, customer segmentation, behavioral pattern analysis, survival analysis.',
      results:
        'Identified 5 key churn indicators: login frequency drop, feature usage decline, support ticket history, payment delays, and session duration.',
      insights:
        'Early warning system implemented. Proactive retention campaigns targeting at-risk users reduced churn by 18% in next quarter.',
    },
  ];

  const categories = [
    'All',
    'Financial Analysis',
    'Research Analytics',
    'Business Insights',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#0CB35D]">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real projects. Real results. Real impact for our clients across
            research, finance, and business analytics.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-[#0CB35D]">{project.icon}</div>
                      <span className="inline-block bg-[#0CB35D]/10 text-[#0CB35D] text-xs font-medium px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  {/* Problem */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      🧩 Problem Statement
                    </h3>
                    <p className="text-gray-600 text-sm">{project.problem}</p>
                  </div>

                  {/* Data */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      📊 Data Description
                    </h3>
                    <p className="text-gray-600 text-sm">{project.data}</p>
                  </div>

                  {/* Methodology */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      ⚙️ Methodology
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {project.methodology}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      📈 Results
                    </h3>
                    <p className="text-gray-600 text-sm">{project.results}</p>
                  </div>

                  {/* Insights */}
                  <div className="bg-[#0CB35D]/5 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      💡 Key Insights
                    </h3>
                    <p className="text-gray-600 text-sm">{project.insights}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0CB35D] to-[#0a9d4f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to create your success story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's turn your data into impactful results like these
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
