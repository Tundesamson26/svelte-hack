# Introduction
Artificial intelligence art is any artwork, particularly images and musical compositions, created through the use of artificial intelligence (AI) programs, such as [text-to-image models](https://en.wikipedia.org/wiki/Text-to-image_model) and musical generators. It is sometimes confused with digital art. While both AI art and digital art involve the use of technology, AI art is characterised by its use of generative algorithms and deep learning techniques that can autonomously produce art without direct input from human artists.

The guide will implement svelte to generate images with the OpenAI model

## Prerequisites

The knowledge of the following is required:

- Basic understanding of HTML, CSS, and JavaScript
- Node and its package manager, npm (run the command `node -v && npm -v` to verify you have them installed or install them from [here](https://nodejs.org/en/))
- Understanding Svelte is very essential
## Getting started with Svelte

[Svelte](https://svelte.dev/) is a radical new approach to building user interfaces. Svelte is a compiler and syntax. The entire Svelte project compiles into a single JavaScript file; it is not an external library included in a bundle like React, which allows Svelte projects to be tiny and fast.

To set up your Svelte project, go to your terminal or command line and run:


    npm create svelte@latest text-to-image

Once you've created a project, navigate to the `text-to-image`  directory and install dependencies with the following:


    npm install

Finally, start a development server with the following:


    npm run dev

**Installing TailwindCSS**
[TailwindCSS](https://tailwindcss.com/) is a utility-first CSS framework packed with classes to help us style our web page. To use it in the application, follow this guide in the [TailwindCSS docs](https://tailwindcss.com/docs/guides/sveltekit).

## Creating the AI-generated image UI

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
