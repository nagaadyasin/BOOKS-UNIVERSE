import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function StoryMaker() {
  const [form, setForm] = useState({
    childName: "",
    age: "",
    themes: [],
    customTheme: "",
    tone: "whimsical",
    length: "short",
    language: "English",
    readingLevel: "simple",
    moral: "",
  });
  const [loading, setLoading] = useState(false);
  const [story, setStory] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState("");

  const presetThemes = [
    "Adventure",
    "Animals",
    "Friendship",
    "Space",
    "Nature",
    "Magic",
  ];

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleTheme(theme) {
    setForm((prev) => {
      const exists = prev.themes.includes(theme);
      const themes = exists
        ? prev.themes.filter((t) => t !== theme)
        : [...prev.themes, theme];
      return { ...prev, themes };
    });
  }

  const promptPreview = [
    `Create a ${form.length} ${form.tone} children's story in ${form.language}.`,
    `Audience age: ${form.age || "unknown"}; reading level: ${
      form.readingLevel
    }.`,
    `Main character: ${form.childName || "a curious child"}.`,
    `Themes: ${
      [...form.themes, form.customTheme].filter(Boolean).join(", ") ||
      "imagination"
    }.`,
    `Include a gentle moral: ${form.moral || "kindness matters"}.`,
    `Use clear sentences, vivid imagery, and culturally respectful names.`,
  ].join("\n");

  async function handleGenerate(e) {
    e.preventDefault();
    setError("");
    setStory("");
    setLoading(true);
    try {
      // ✅ Generate story
      const res = await fetch("http://localhost:4000/api/story", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ theme: promptPreview }),
      });
      if (!res.ok) throw new Error("Failed to generate story");
      const data = await res.json();
      setStory(data.story || "");

      // ✅ Generate image
      const imgRes = await fetch("http://localhost:4000/api/image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: `Illustration of: ${promptPreview}` }),
      });
      if (!imgRes.ok) throw new Error("Failed to generate image");
      const imgData = await imgRes.json();
      setImage(imgData.image || "");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#e8d9c4] text-slate-800">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#c7ad90] shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white tracking-wide">
            Story Maker
          </h1>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        <Card className="bg-[#f7f1e8] shadow-lg">
          <CardHeader>
            <CardTitle>Craft a personalized children&apos;s story</CardTitle>
            <CardDescription>
              Choose themes, tone, and length — then generate with one click.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form
              onSubmit={handleGenerate}
              className="grid lg:grid-cols-3 gap-6"
            >
              <div className="lg:col-span-2 space-y-6">
                {/* Child name + Age */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Child&apos;s Name</Label>
                    <Input
                      className="mt-2 bg-white"
                      value={form.childName}
                      onChange={(e) => updateField("childName", e.target.value)}
                      placeholder="Ahmed"
                    />
                  </div>
                  <div>
                    <Label>Age</Label>
                    <Input
                      className="mt-2 bg-white"
                      value={form.age}
                      onChange={(e) => updateField("age", e.target.value)}
                      placeholder="7"
                    />
                  </div>
                </div>

                {/* Themes */}
                <div>
                  <Label>Themes</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {presetThemes.map((t) => (
                      <Button
                        type="button"
                        key={t}
                        variant={
                          form.themes.includes(t) ? "default" : "outline"
                        }
                        className="rounded-full"
                        onClick={() => toggleTheme(t)}
                      >
                        {t}
                      </Button>
                    ))}
                  </div>
                  <Input
                    className="mt-3 bg-white"
                    value={form.customTheme}
                    onChange={(e) => updateField("customTheme", e.target.value)}
                    placeholder="Add your own theme (e.g., Somali folklore)"
                  />
                </div>

                {/* Tone / Length / Language */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label>Tone</Label>
                    <Select
                      value={form.tone}
                      onValueChange={(v) => updateField("tone", v)}
                    >
                      <SelectTrigger className="mt-2 ">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="whimsical">Whimsical</SelectItem>
                        <SelectItem value="adventurous">Adventurous</SelectItem>
                        <SelectItem value="gentle">Gentle</SelectItem>
                        <SelectItem value="funny">Funny</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Length</Label>
                    <Select
                      value={form.length}
                      onValueChange={(v) => updateField("length", v)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short">
                          Short (~300 words)
                        </SelectItem>
                        <SelectItem value="medium">
                          Medium (~600 words)
                        </SelectItem>
                        <SelectItem value="long">Long (~1000 words)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Language</Label>
                    <Select
                      value={form.language}
                      onValueChange={(v) => updateField("language", v)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Somali">Somali</SelectItem>
                        <SelectItem value="Arabic">Arabic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Reading level + Moral */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Reading level</Label>
                    <Select
                      value={form.readingLevel}
                      onValueChange={(v) => updateField("readingLevel", v)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="simple">Simple</SelectItem>
                        <SelectItem value="intermediate">
                          Intermediate
                        </SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Moral</Label>
                    <Input
                      className="mt-2 bg-white"
                      value={form.moral}
                      onChange={(e) => updateField("moral", e.target.value)}
                      placeholder="Kindness, courage, sharing"
                    />
                  </div>
                </div>
              </div>

              {/* Prompt preview + Generate */}
              <div className="lg:col-span-1">
                <Label>Prompt preview</Label>
                <textarea
                  className="mt-2 w-full border rounded-lg px-3 py-2 h-[230px] bg-white shadow-sm"
                  value={promptPreview}
                  readOnly
                />

                <Button
                  type="submit"
                  className="mt-4 w-full shadow-md "
                  disabled={loading}
                >
                  {loading ? "Generating…" : "Generate story"}
                </Button>

                {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
              </div>
            </form>
            {story && (
              <div className="mt-10 rounded-xl border bg-white p-6 shadow-sm">
                <h2 className="font-display text-xl font-semibold">
                  Your story
                </h2>
                <div className="mt-3 whitespace-pre-wrap leading-relaxed text-slate-800">
                  {story}
                </div>
                {image && (
                  <img
                    src={image}
                    alt="Story illustration"
                    className="mt-6 rounded-xl shadow-md w-100px"
                  />
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
