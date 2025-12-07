// src/pages/Home.jsx
import Hero from "../components/Hero.jsx";
import Card from "../components/Card.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-1 bg-background">
        <h2 className="font-display text-2xl font-semibold text-bl">
          Featured for young readers
        </h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Garden Quests"
            description="Sprout curiosity with playful outdoor adventures."
            tag="Ages 4–6"className="rounded-2xl shadow-soft w-full h-full object-cover "
          />
          <Card
            title="Lion’s Gentle Roar"
            description="Courage and kindness in the savannah."
            tag="Ages 6–8"
          />
          <Card
            title="Moonlit Maps"
            description="Nighttime journeys through starry skies."
            tag="Ages 8–10"
          />
        </div>
      </section>
    </>
  );
}
