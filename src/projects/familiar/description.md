## About Familiar

[Link to repository](https://github.com/Tripod311/Familiar)

Familiar is a modular runtime for building applications around large language models. It provides the shared infrastructure required by an AI application—conversation history, persistent context, tool calling and inference—while keeping application-specific behavior in separate modules.

The project is intended as an alternative to building every AI application as a single assistant tied to one model provider. A Familiar application can use local or remote inference, expose its own tools and decide how information should be stored and supplied to the model.

## Screenshots

<div data-carousel>
    <img src="/familiar/Familiar-assistant.png" alt="Local assistant">
    <img src="/familiar/job-tracker-1.png" alt="Job tracker conversation 1">
    <img src="/familiar/job-tracker-2.png" alt="Job tracker conversation 2">
    <img src="/familiar/job-tracker-3.png" alt="Job tracker conversation 3">
</div>

## Why it exists

Many LLM applications repeat the same supporting code around prompts, history, tools, persistence and model APIs. Familiar moves those concerns into a reusable runtime so that an application module can focus on its own domain and interaction model.

The project also explores how AI features can remain replaceable. The inference backend is treated as a dependency rather than the center of the application, making it possible to switch between local models and remote services without redesigning the rest of the system.

## Architecture

Familiar separates several responsibilities:

* the runtime manages application sessions and module lifecycles;
* context providers supply persistent and request-specific information;
* tools expose controlled operations that models can invoke;
* inference adapters connect the runtime to local or remote models;
* application modules define domain-specific behavior and interfaces.

Modules can be launched as subprocesses and communicate with the runtime through a defined API. This keeps module dependencies isolated and allows applications to be developed and distributed independently from the core runtime.

## Example applications

Familiar has been tested through several small applications rather than only isolated library examples:

* a local assistant with conversation history, persistent memory, date and time tools, and local inference;
* a job-search tracker that works with structured records;
* a retrieval-based assistant that answers questions using a dedicated collection of puppy-care material.

These applications exercise different combinations of structured data, retrieval, tools and conversational context while sharing the same runtime.

[Link to demos](https://tripod311.github.io/Familiar/demos/)

## Project status

Familiar is an experimental project focused on architecture and practical exploration of local and remote AI applications. Its APIs and module boundaries may continue to change as new applications expose missing abstractions or unnecessary complexity.
