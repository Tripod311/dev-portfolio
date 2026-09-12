## About HearthChat

[Link to repository](https://github.com/Tripod311/hearth_chat)

HearthChat is a self-hosted communication platform for small private communities. It provides text messaging, voice and video calls, and allows independently hosted nodes to communicate without relying on a single central service.

The project started as a practical way to stay in contact with family without depending on public social platforms or exposing personal accounts. The first working version was built quickly to address that need and later grew into an experimental platform for exploring real-time communication and federated application architecture.

## Screenshots

<div data-carousel>
    <img src="/hearthchat/hearthchat_title.png" alt="Title page">
    <img src="/hearthchat/hearthchat_chat.png" alt="Chat UI">
    <img src="/hearthchat/hearthchat_admin.png" alt="Admin page">
</div>

## What it does

Each HearthChat node manages its own users, topics and access rules. A node can operate independently or communicate with other nodes, allowing separate private communities to interact while retaining control over their own data and configuration.

The application includes:

* real-time text messaging;
* voice and video calls using WebRTC;
* private topics and user access management;
* administration tools for managing a node;
* communication between independently hosted nodes.

## Architecture

The backend is written in TypeScript and runs on Node.js. Real-time media is handled through WebRTC and mediasoup, while the client provides the messaging, calling and administration interfaces.

One of the main architectural constraints was keeping all browser-facing HTTP traffic on the user's home node. Communication with federated communities is handled between nodes, so users can interact with remote communities without being redirected to another address or loading their interface from a remote node.

HearthChat also served as a practical integration environment for several small libraries I developed. These libraries cover UI components and reactivity, client-side routing, data flow and HTTP processing. Using them in a complete application helped expose problems that would have been difficult to find through isolated examples alone.

## Project status

HearthChat is an experimental personal project rather than a production-ready communication service. Some parts of the codebase reflect the rapid development of the initial version and remain candidates for further simplification and refactoring.

A preconfigured demo node is available for local evaluation and includes the compiled client, server and sample users.
