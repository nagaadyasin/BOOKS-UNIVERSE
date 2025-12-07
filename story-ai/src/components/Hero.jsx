// src/components/Hero.jsx
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            A Journey Begins Here: Explore Our Magical World Of Books!
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Welcome To Books Universe, Where Every Story Opens A New Door To
            Adventure! Our Carefully Curated Selection Of Children&apos;s Books
            Inspires Young Readers To Explore Their Imaginations And Develop A
            Love For Reading.
          </p>
          <div className="mt-6 flex gap-4 ">
            <Link
              to="/library"
              className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-white font-semibold shadow-soft hover:shadow-md transition"
            >
              EXPLORE!
            </Link>
            <Link
              to="/story-maker"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-white bg-black font-semibold hover:bg-slate-50"
            >
              Make a Story
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -z-10 -inset-8 bg-gradient-to-br from-brand.accent/40 via-brand.green/20 to-transparent rounded-3xl blur-2xl" />
          <div className="grid grid-cols-1 gap-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32TFtiuXOarWPV7LGg0OLx42tscONjOo4Ag&s"
              alt="Child gardening adventure"
              className="rounded-2xl shadow-soft w-full h-full"
            />
            <img
              src="https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/2372/1372372-i-ddda7116432f"
              alt="Friendly lion illustration"
              className="rounded-2xl shadow-soft w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
