 export default function About() {
   return (
     <section className="mx-auto max-w-6xl px-4 py-12">
       {/* Cinwaan */}
       <h1 className="font-display text-4xl font-bold text-amber-800">
         👧🧒 About Children & Stories
       </h1>

       {/* Sharaxaad */}
       <p className="mt-4 text-black text-lg">
         Books Universe is a joyful space for children where stories spark
         imagination, empathy, and kindness. We celebrate adventure, culture,
         and friendship—helping young readers grow into thoughtful explorers.
       </p>

       {/* Grid layout */}
       <div className="mt-8 grid md:grid-cols-2 gap-12">
         {/* Mission */}
         <div className="bg-amber-50 rounded-xl p-6 shadow-md">
           <h2 className="font-display text-2xl font-semibold text-amber-700">
             Our Mission
           </h2>
           <p className="mt-3 text-black">
             To inspire children through storytelling that reflects diverse
             voices and universal values. Every book is chosen to nurture
             curiosity and joy.
           </p>
           {/* Sawir carruur akhrinaya */}
           <iframe
           className="w-full h-64 mt-4 rounded-xl"
             src="https://www.youtube.com/embed/QZQylW5rteA?si=G-eGptsL--uB65cj"
             title="YouTube video player"
             frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             referrerpolicy="strict-origin-when-cross-origin"
             allowfullscreen
           ></iframe>
         </div>

         {/* Team */}
         <div className="bg-green-50 rounded-xl p-6 shadow-md">
           <h2 className="font-display text-2xl font-semibold text-green-700">
             Our Team
           </h2>
           <p className="mt-3 text-black">
             We’re educators, parents, and dreamers who believe in the power of
             books to shape hearts and minds. Together, we build a safe and
             joyful reading universe for kids.
           </p>
           {/* Video cartoon link */}
           <a
             href="https://www.youtube.com/watch?v=Ta1q7QvZ3nY"
             target="_blank"
             rel="noopener noreferrer"
             className="mt-4 inline-block bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition"
           >
             🎬 Watch Cartoon Video
           </a>
           <iframe
          className="w-full h-64 mt-4 rounded-xl"
             src="https://www.youtube.com/embed/qHl8E24Eznw?si=AlWyFM20wyEcoWKU"
             title="YouTube video player"
             frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             referrerpolicy="strict-origin-when-cross-origin"
             allowfullscreen
           ></iframe>
         </div>
       </div>
     </section>
   );
 }
