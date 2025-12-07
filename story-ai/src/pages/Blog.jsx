 import { Link } from "react-router-dom";

 export default function Blog() {
   return (
     <section className="mx-auto max-w-6xl px-4 py-12 gap-2.5 text-black">
       <h1 className="font-display text-7xl font-bold text-slate-900">Blog</h1>
       <p className="mt-3 text-black text-5xl">
         Explore tips for parents and educators, curated reading lists, and
         author spotlights.
       </p>

       <div className="mt-8 grid md:grid-cols-2 gap-6 bg-black text-white p-6 rounded-2xl">
         <Link
           to="/library"
           className="block border border-slate-200 rounded-xl p-5 hover:shadow-soft transition"
         >
           <h2 className="underline decoration-brand.green font-display text-xl font-semibold text-white">
             5 Ways to Encourage Reading at Home
           </h2>
           <p className="mt-2 text-white">
             Simple strategies to build a love for books in your child’s daily
             routine.
           </p>
           <span className="mt-4 inline-block text-brand.green font-semibold hover:underline">
             Read more
           </span>
         </Link>

         <Link
           to="/library"
           className="block border border-slate-200 rounded-xl p-5 hover:shadow-soft transition"
         >
           <h2 className="underline decoration-brand.green font-display text-xl font-semibold text-white">
             Author Spotlight: Amina Warsame
           </h2>
           <p className="mt-2 text-white">
             Discover the magical worlds created by one of Somalia’s beloved
             children’s authors.
           </p>
           <span className="mt-4 inline-block text-brand.green bg-black font-semibold hover:underline">
             Read more
           </span>
         </Link>
       </div>
     </section>
   );
 }
