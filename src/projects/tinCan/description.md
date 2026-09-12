## About Tin Can Radio

[Link to repository](https://github.com/Tripod311/tin_can_radio)

Tin Can Radio is a small self-hosted application for broadcasting audio to multiple browser-based listeners. A broadcaster can switch between microphone input and local media files, while listeners only need to open the station page.

The project is intended for small private or public broadcasts where using a larger communication platform would be unnecessary. It also keeps the broadcaster separate from a personal social account and leaves control of the server and station page with its owner.

## Screenshots

<div data-carousel>
    
</div>

## What it does

Tin Can Radio provides a simple listener page and a password-protected studio. From the studio, one broadcaster can capture a microphone, add songs or jingles from their device, and switch between those sources during a live session.

The application currently supports:

* one active broadcaster;
* multiple concurrent listeners, depending on server and network capacity;
* microphone capture in the browser;
* playback of local audio files and jingles;
* editable station name, description and logo;
* installation as a Progressive Web App.

Selected media remains on the broadcaster's device and is not uploaded to the radio server.

## Architecture

The backend is written in Go and uses Pion WebRTC. It accepts an incoming Opus audio track from the broadcaster and forwards its RTP packets to a shared outgoing track connected to the station's listeners. Peer connections, ICE negotiation and connection cleanup are managed by the server.

The frontend is written in React and contains separate listening and broadcasting interfaces. Signaling uses a small HTTP API with non-trickle ICE, keeping the initial implementation and deployment straightforward.

The application is distributed as a server binary together with a compiled web client. A deployment can customize its TLS configuration, ICE servers, broadcast password and station metadata.

## Project status

Tin Can Radio is an experimental project built around a deliberately small first version. Broadcasting is available only while a host is connected, and the server does not currently persist uploaded media or provide automatic shuffled playback.

Possible future additions include server-side media storage, unattended playback, broadcast recording and a plugin system.
