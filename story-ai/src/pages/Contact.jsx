import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const formData = useRef();
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await emailjs.sendForm(
        "service_ngjjyco",
        "template_6a5v1p8",
        formData.current,
        {
          publicKey: "bsXJg0IsKNlQlzJCP",
        }
      );
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error sending email:", err);
      setStatus("❌ Error sending message.");
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 gap-2.5 text-black">
      <h1 className="font-display text-5xl font-bold text-black">Contact Us</h1>
      <p className="mt-3 text-black text-3xl">
        We’d love to hear from you! Reach out for questions, partnerships, or
        submissions.
      </p>

      <form
        ref={formData}
        onSubmit={handleSubmit}
        className="mt-8 grid md:grid-cols-2 gap-6"
      >
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border border-black rounded-lg px-4 py-2"
        />
        <input
          type="email"
          placeholder="Email address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border border-black rounded-lg px-4 py-2"
        />
        <textarea
          rows="5"
          placeholder="Your message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="md:col-span-2 border border-black rounded-lg px-4 py-2"
        />
        <button
          type="submit"
          className="md:col-span-2 bg-brand.green text-black font-semibold px-5 py-2 rounded-lg"
        >
          Send Message
        </button>
      </form>

      {status && <p className="mt-4 text-black">{status}</p>}
    </section>
  );
}
