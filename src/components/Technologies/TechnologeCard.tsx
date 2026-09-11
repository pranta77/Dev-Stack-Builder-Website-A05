import type TechnologyType from "../../Type/Type";

export interface TechnologeCardProps {
  technology: TechnologyType;
}

export default function TechnologeCard({ technology }: TechnologeCardProps) {
  return (
    <>
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm container mx-auto">
        <div className="flex items-start justify-between">
          <img src={technology.icon} alt={technology.name} className="h-12 " />
          <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-600">
            {technology.badge}
          </span>
        </div>
        <h2 className="mt-6 text-2xl font-bold text-slate-900">
          {technology.name}
        </h2>
        <p className="mt-2 text-sm text-slate-500">{technology.description}</p>
        <div className="divider"></div>
        <div className="flex items-center justify-between text-sm">
          <span className="rounded-md bg-slate-100 px-2.5 py-1 text-slate-600">
            {technology.category}
          </span>
          <span className="text-slate-500">{technology.difficulty}</span>
          <span className="flex items-center gap-1 text-slate-700">
            <span className="text-yellow-400 text-2xl">*</span>
            {technology.rating}
          </span>
        </div>
        <button className="mt-5 w-full rounded-lg bg-[#0A0F1D] py-3 text-sm font-medium text-white cursor-pointer">
          Add to Stack
        </button>
      </div>
      
    </>
  );
}
