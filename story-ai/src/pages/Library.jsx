 export default function Library() {
   return (
     <section className="mx-auto max-w-6xl px-6 py-12">
       <h1 className="text-5xl font-bold text-amber-800 mb-6">
         📚 5 Ways to Encourage Reading at Home for Children
       </h1>

       <p className="text-xl text-slate-700 mb-10">
         Building a love for books in children starts at home. Here are five
         simple and fun strategies parents can use to make reading part of
         everyday life.
       </p>

       <div className="grid md:grid-cols-2 gap-8">
         {/* Qodob 1 */}
         <article className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
           <img
             src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjBEF-KmCQMqCAICM9A639NV78xsnlArUTTg&s"
             alt="Cozy reading corner"
             className="w-full h-48 object-cover rounded-xl mb-4"
           />
           <h2 className="text-2xl font-semibold text-amber-700 mb-3">
             1. Create a Cozy Reading Corner
           </h2>
           <p className="text-slate-600">
             Design a special space with pillows, blankets, and shelves of books
             where your child feels excited to read.
           </p>
         </article>

         {/* Qodob 2 */}
         <article className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
           <img
             src="data:image/jpeg;base64,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"
             alt="Parent reading with child"
             className="w-full h-48 object-cover rounded-xl mb-4"
           />
           <h2 className="text-2xl font-semibold text-amber-700 mb-3">
             2. Read Together Daily
           </h2>
           <p className="text-slate-600">
             Set aside 15 minutes each day to read aloud with your child. Shared
             reading builds connection and joy.
           </p>
         </article>

         {/* Qodob 3 */}
         <article className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
           <img
             src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxUPKyA9axW2r-xcwwBg6G3IsitMm_PwUQDA&s"
             alt="Child choosing books"
             className="w-full h-48 object-cover rounded-xl mb-4"
           />
           <h2 className="text-2xl font-semibold text-amber-700 mb-3">
             3. Let Kids Choose Their Books
           </h2>
           <p className="text-slate-600">
             Encourage independence by letting children pick stories that spark
             their curiosity and imagination.
           </p>
         </article>

         {/* Qodob 4 */}
         <article className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
           <img
             src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJHVRtelloHLdhmKg0B3jgi1ExAX5VJFkSnQ&s"
             alt="Connecting stories to real life"
             className="w-full h-48 object-cover rounded-xl mb-4"
           />
           <h2 className="text-2xl font-semibold text-amber-700 mb-3">
             4. Connect Stories to Real Life
           </h2>
           <p className="text-slate-600">
             After reading, talk about how the story relates to your child’s
             experiences, family, or community.
           </p>
         </article>

         {/* Qodob 5 */}
         <article className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition md:col-span-2">
           <img
             src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymbTsqd8aCF8KeAY9yDSosrByo-7ZpXZ1Ag&s"
             alt="Celebrating reading achievements"
             className="w-full h-64 object-cover rounded-xl mb-4"
           />
           <h2 className="text-2xl font-semibold text-amber-700 mb-3">
             5. Celebrate Reading Achievements
           </h2>
           <p className="text-slate-600">
             Praise your child when they finish a book or learn a new word.
             Celebrate with stickers, charts, or small rewards.
           </p>
         </article>
       </div>
     </section>
   );
 }
