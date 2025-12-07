// src/components/Card.jsx
export default function Card({ title, description, tag }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5 hover:shadow-soft transition">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center rounded-md bg-brand.accent/30 text-slate-900 px-2 py-1 text-xs font-semibold">
          {tag}
        </span>
      </div>
      <h3 className="mt-3 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-slate-700">{description}</p>
      <button className="mt-4 inline-flex items-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50">
        Read more
      </button>
    </div>
  );
}
