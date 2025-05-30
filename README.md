# 🌅 TwinLight 🌅

Web application that displays sunrise and sunset times, along with a location that has similar times.

## Map

The map is created using *React Leaflet*, which provides a marker with latitude and longitude coordinates.

These values are then passed through *sunrise-sunset-js* to obtain sunrise and sunset times.

Finally, all of this data is fed to the *Gemini API* to obtain a geographically distant location with matching solar schedules.

## Archive

All of this data is stored in a *MongoDB* database, from which it is displayed in chronological order on an archive page.

## Architecture

Used *Express/Node* for backend APIs, *Next/Tailwind* for mobile-responsive layouts, and *Motion* (*Framer Motion*) for various animations.

### *Talkeetna, Alaska* ~ *June 18, 2024* ~ *10:58pm*
<img src="images/sunset.jpeg" alt="Sunset in Talkeetna, AK"/>
