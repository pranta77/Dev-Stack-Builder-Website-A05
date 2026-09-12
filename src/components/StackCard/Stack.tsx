export default function Stack() {
  return (
    <>
      <aside className="lg:col-span-1">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm w-60">
          <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>
          <p className="mt-1 text-xs text-slate-400">
            No technologies selected yet.
          </p>
          <div className="mt-4 flex min-h-24 items-center justify-center rounded-xl border border-dashed border-slate-200">
            <p className="text-xs text-slate-400">Your stack is empty.</p>
          </div>
        </div>
      </aside>
    </>
  );
}
