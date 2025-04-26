import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { MongoClient } from 'mongodb'
import { getSunrise, getSunset } from 'sunrise-sunset-js';

dotenv.config()

if (!process.env.API_KEY) {
  console.error("ERROR: API_KEY is not defined");
  process.exit(1);
}

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4000

// const mongourl = process.env.MONGO_URL
// const mongoclient = new MongoClient(mongourl, {})

// mongoclient.connect().then(() => {
//     console.log("Connected to MongoDB")
// })

const genAI = new GoogleGenerativeAI(process.env.API_KEY)
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `You are an expert meteorologist.
        You are provided with a sunrise time, a sunset time, a latitude, a longitude, and a date.
        These times are in the local timezone of the specified coordinates.
        Your task is to identify a location that, on the same date, has sunrise and sunset times closely matching the provided times, while ideally being as geographically distant from the original coordinates as possible.
        Your response must follow this EXACT format: "City Name, Country".
        Include no additional text, explanation, or formatting.
        If no valid location can be found, respond with "N/A", but strive to always find an answer.`
})

app.get('/', (req, res) => {
    res.send("Backend running!");
})

app.post('/api/data', async (req, res) => {
    try {
        const { lat, lng } = req.body;
        console.log("Received Data: ", req.body);
        const sunrise = getSunrise(lat, lng).toLocaleTimeString();
        const sunset = getSunset(lat, lng).toLocaleTimeString();
        res.json({ sunrise, sunset })
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong!" });
    }
})

app.post('/gemini', async (req, res) => {
    try {
        const { lat, lng } = req.body;
        console.log("Received Data: ", req.body);
        const sunrise = getSunrise(lat, lng);
        const sunset = getSunset(lat, lng);
        const input = ({
            sunrise: sunrise,
            sunset: sunset,
            latitude: lat,
            longitude: lng,
        })
        let response;
        try {
            const prompt = `Sunrise: ${sunrise}, Sunset: ${sunset}, Latitude: ${lat}, Longitude: ${lng}`;
            const result = await model.generateContent(prompt);
            response = await result.response.text();
        } catch (e) {
            console.error(e);
            response = "Oops, something went wrong!";
        }
        res.json({
            message: response,
        })
    } catch (err) {
        console.error(err);
        res.status(err.status || 500).json({ error: err.message });
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.get('/logs', async (req, res) => {
    try {
        const logs = await mongoclient.db('personal-website').collection('logs').find({}).toArray()
        res.status(200).json(logs)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error' })
    }
})

app.post('/add', async (req, res) => {
    try {
        const log = req.body
        if (!log.input || !log.response || Object.keys(log).length !== 2) {
            res.status(400).json({ message: 'Bad Request' })
            return
        }
        await mongoclient.db('personal-website').collection('logs').insertOne(log)
        res.status(201).json({ message: 'Success' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error' })
    }
})

app.post('/delete', async (req, res) => {
    try {
        const log = req.body
        if (!log.input || !log.response || Object.keys(log).length !== 2) {
            res.status(400).json({ message: 'Bad Request' })
            return
        }
        await mongoclient.db('personal-website').collection('logs').deleteOne(log)
        res.status(201).json({ message: 'Success' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error' })
    }
})

