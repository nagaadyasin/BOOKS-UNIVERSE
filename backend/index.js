// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

// =======================
// CONNECT TO MONGODB
// =======================
mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ MongoDB Error:", err));

// =======================
// USER MODEL
// =======================
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model("User", UserSchema);
// =======================
// CONTACT MODEL
// =======================
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model("Contact", ContactSchema);

// =======================
// STORY MODEL
// =======================
const StorySchema = new mongoose.Schema({
    title: String,
    story: String,
    theme: String,
    image: String,
    createdAt: { type: Date, default: Date.now }
});
const Story = mongoose.model("Story", StorySchema);

// =======================
// REGISTER USER ENDPOINT
// =======================
app.post("/api/user", async (req, res) => {
    const { name, age } = req.body;
    try {
        const newUser = new User({ name, age });
        await newUser.save();
        res.json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// =======================
// STORY GENERATOR ENDPOINT
// =======================
app.post("/api/story", async (req, res) => {
    const { theme } = req.body;
    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        content: `
You are a children's storyteller.
Write a short story in English about "${theme}".
Requirements:
- Include a clear title.
- Make the story 6 short sentences, simple and fun for kids.
- Language: English only.
            `.trim()
                    },
                ],
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        const storyText = response.data.choices[0].message?.content;

        const newStory = new Story({
            title: `Story about ${theme}`,
            story: storyText,
            theme
        });
        await newStory.save();

        res.json({ story: storyText });
    } catch (error) {
        console.error("Story Error:", error.response?.data || error.message);
        res.status(500).json({ error: error.message });
    }
});
app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.json({ success: true, contact: newContact });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// =======================
// IMAGE GENERATOR ENDPOINT
// =======================
app.post("/api/image", async (req, res) => {
    const { prompt } = req.body;
    try {
        const response = await axios.post(
            "https://api.openai.com/v1/images/generations",
            {
                prompt,
                n: 1,
                size: "512x512",
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        const imageUrl = response.data.data[0].url;

        const newStoryImage = new Story({
            title: "AI Illustration",
            story: "",
            theme: prompt,
            image: imageUrl
        });
        await newStoryImage.save();

        res.json({ image: imageUrl });
    } catch (error) {
        console.error("Image Error:", error.response?.data || error.message);
        res.status(500).json({ error: error.message });
    }
});
 
app.get("/api/stories", async (req, res) => {
    try {
        const stories = await Story.find().sort({ createdAt: -1 });
        res.json(stories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () =>
    console.log(`🚀 StoryMaker backend running on http://localhost:${PORT}`)
);
