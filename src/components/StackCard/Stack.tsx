import type TechnologyType from "../../Type/Type";
import { RiCloseLargeFill } from "react-icons/ri";

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
      <aside className="lg:col-span-1 px-4 lg:px-0 ">
        <div className="w-full max-w-md mx-auto rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:w-60 l">
          <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>
          <p className="mt-1 text-xs font-bold text-slate-400">
            {stack.length}
            {stack.length === 1 ? "Technology" : "Technologies"} selected
          </p>

          {stack.length === 0 ? (
            <div className="mt-4 flex min-h-24 items-center justify-center rounded-xl border border-dashed border-slate-200">
              <p className="text-xs text-slate-400">Your stack is empty.</p>
            </div>
          ) : (
            <div className="mt-4 space-y-3">
              {stack.map((technology) => (
                <div
                  key={technology.id}
                  className="flex items-center gap-2 rounded-xl border border-slate-400 p-3"
                >
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-8 "
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-slate-900">
                      {technology.name}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {technology.category}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemove(technology.id)}
                    className="cursor-pointer text-slate-400 hover:text-red-500"
                  >
                    <RiCloseLargeFill />
                  </button>
                </div>
              ))}
            </div>
          )}

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
