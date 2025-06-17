# 🌅 Impact Team Technical Assessment 2025-2026 🌅

Web application that displays sunrise and sunset times, along with a location that has similar times.

## Architecture

Used **Express/Node** for backend APIs, **Next/Tailwind** for mobile-responsive layouts, and **Motion** (**Framer Motion**) for various animations.

## Map

The map is created using **React Leaflet**, which provides a marker with latitude and longitude coordinates.

These values are then passed through **sunrise-sunset-js** to obtain sunrise and sunset times.

Finally, all of this data is fed to the **Gemini API** to obtain a geographically distant location with matching solar schedules.

## Archive

All of this data is stored in a **MongoDB** database, from which it is displayed in chronological order on an archive page.

## Project Structure

```
backend/
├── index.js  # all backend logic
└── .env  # secrets
frontend/
├── src/
│   ├── app/  # routing
│   │   ├── archive/
│   │   ├── map/
│   │   └── page.tsx  # homepage
│   ├── components/
│   │   ├── api-data/
│   │   ├── archive-page/
│   │   ├── archive/
│   │   ├── hero/
│   │   ├── homepage/
│   │   ├── map-client/
│   │   ├── map-page/
│   │   └── navbar/
├── public/
│   ├── assets/
│   └── leaflet/
└── .env  # secrets
```

### *Talkeetna, Alaska* ~ *June 18, 2024* ~ *10:58pm*
<img src="images/sunset.jpeg" alt="Sunset in Talkeetna, AK"/>
