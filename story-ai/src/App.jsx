 // src/App.jsx
 import { Routes, Route } from "react-router-dom";
 import Header from "../../story-ai/src/components/Header.jsx";
 import Footer from "../../story-ai/src/components/Footer.jsx";
 import Home from "../../story-ai/src/pages/Home.jsx";
 import Library from "../../story-ai/src/pages/Library.jsx";
 import Blog from "../../story-ai/src/pages/Blog.jsx";
 import About from "../../story-ai/src/pages/About.jsx";
 import Contact from "../../story-ai/src/pages/Contact.jsx";
 import StoryMaker from "../../story-ai/src/components/StoryMaker.jsx";
 
 
 export default function App() {
   return (
     <div className="min-h-screen bg-[#f5f0e6] text-slate-800 flex flex-col">
       <Header />
       <main className="flex-1">
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/library" element={<Library />} />
           <Route path="/blog" element={<Blog />} />
           <Route path="/about-us" element={<About />} />
           <Route path="/story-maker" element={<StoryMaker />} />
           <Route path="/contact-us" element={<Contact />} />
         </Routes>
       </main>
       <Footer />
     </div>
   );
 }
 