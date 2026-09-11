import { use } from "react";
import type TechnologyType from "../../Type/Type";
import TechnologeCard from "./TechnologeCard";

export interface TechnologiesProps {
  handleTechnology: Promise<TechnologyType[]>;
}

export default function Technologies({ handleTechnology }: TechnologiesProps) {
  const technologys = use(handleTechnology);
  //   console.log(users);

  return (
    <>
      <div className="container mx-auto space-y-2 mb-5">
        <h1 className="text-3xl font-bold">
          Explore the <span className="brand-gradient-text">Technologies</span>
        </h1>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>
      <div className="flex justify-between container mx-auto gap-2">
        <div className="grid grid-cols-3 gap-3 ">
          {technologys.map((technology, index) => (
            <TechnologeCard key={index} technology={technology}></TechnologeCard>
          ))}
        </div>
         <aside className="lg:col-span-1">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm w-60">
            <h2 className="text-lg font-bold text-slate-900">
              Your Stack
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              No technologies selected yet.
            </p>
            <div className="mt-4 flex min-h-24 items-center justify-center rounded-xl border border-dashed border-slate-200">
              <p className="text-xs text-slate-400">
                Your stack is empty.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
