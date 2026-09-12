# Personal Web Development Toolkit

These libraries are a small set of personal tools I built while developing my own web applications. Building them gave me a practical way to study the mechanisms behind common frameworks: DOM rendering and reactivity, client-side routing, application data flow, HTTP pipelines, isolated script execution, and LLM evaluation.

They are intentionally shaped around my own workflow: small APIs, explicit behavior, few dependencies, and direct control over the parts of the system I needed. Several of them have been used together in my own applications, but they are not intended as replacements for mature production frameworks or as general recommendations for commercial projects. In team and production work, I choose established tools according to the product, ecosystem, and team requirements.

## Packages

- [`@tripod311/ripple`](https://www.npmjs.com/package/@tripod311/ripple) — A provider-agnostic evaluation and regression-testing toolkit for LLM-powered applications.
- [`@tripod311/lagoon`](https://www.npmjs.com/package/@tripod311/lagoon) — An experimental runtime for executing scripts in isolated browser and Node.js environments through explicitly exposed capabilities.
- [`@tripod311/splash`](https://www.npmjs.com/package/@tripod311/splash) — A small direct-DOM UI toolkit with selective reactivity and component lifecycle management.
- [`@tripod311/currents`](https://www.npmjs.com/package/@tripod311/currents) — A pipeline-based HTTP toolkit with adapters for Node.js and Cloudflare environments.

Together, these packages document how I explore framework internals: by building small working implementations, using them in real projects, and learning where custom abstractions help—and where established production tools are the better choice.