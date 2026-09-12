import type TechnologyType from "../../Type/Type";

interface StackProps {
  stack: TechnologyType[];
  handleRemove: (id: string) => void;
  handleRemoveAll: () => void;
}

export default function Stack({
  stack,
  handleRemove,
  handleRemoveAll,
}: StackProps) {
  return (
    <>
      <aside className="lg:col-span-1">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm w-60">
          <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>
          <p className="mt-1 text-xs text-slate-400">
            {stack.length}
            {stack.length === 1 ? "Technology" : "Technologies"} selected
          </p>
          <div className="mt-4 flex min-h-24 items-center justify-center rounded-xl border border-dashed border-slate-200">
            <p className="text-xs text-slate-400">Your stack is empty.</p>
          </div>
          <div>
            {stack.length > 0 && (
              <button
                onClick={handleRemoveAll}
                className="btn btn-outline btn-error flex mx-auto px-8 my-10"
              >
                Remove All
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
