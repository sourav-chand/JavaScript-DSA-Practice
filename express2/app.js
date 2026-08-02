import express from "express";
import mongoose from "mongoose";
import itemRoutes from "./routes/items.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/items", itemRoutes);

app.get("/", (req, res) => {
    res.json({ message: "CRUD API is running", endpoints: { items: "/api/items" } });
});

async function start() {
    const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/express_crud";

    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB");
    } catch {
        console.log("Local MongoDB not found, starting in-memory MongoDB...");
        const { MongoMemoryServer } = await import("mongodb-memory-server");
        const mongod = await MongoMemoryServer.create();
        await mongoose.connect(mongod.getUri());
        console.log("Connected to in-memory MongoDB");
    }

    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

start();
