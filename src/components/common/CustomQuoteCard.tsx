import { Link } from 'react-router-dom';
import { MoveRight, Plus } from 'lucide-react';

export function CustomQuoteCard() {
  return (
    <Link
      to="/contact"
      className="group flex min-h-[460px] flex-col justify-between overflow-hidden rounded-2xl border-2 border-dashed border-[#0CB35D]/50 bg-[#0CB35D]/5 p-8 transition-all hover:border-[#0CB35D] hover:bg-[#0CB35D]/10 hover:shadow-xl"
    >
      <div>
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white text-[#0CB35D] shadow-sm transition-transform group-hover:scale-105">
          <Plus className="h-14 w-14" strokeWidth={2.5} />
        </div>

        <span className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0CB35D]">
          Personalized Pricing
        </span>

        <h3 className="mb-4 text-2xl font-bold text-gray-900">
          Request a Custom Quote
        </h3>

        <p className="text-gray-600">
          Project pricing varies by scope, workload, timeline, and technical
          requirements. Share your details and receive a tailored quote with the
          best-fit price for your work.
        </p>
      </div>

      <div className="mt-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#0CB35D] px-5 py-3 text-sm font-medium text-white transition-colors group-hover:bg-[#0a9d4f]">
          Get Your Personalized Price
          <MoveRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
