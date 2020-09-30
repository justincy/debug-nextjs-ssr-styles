# Debugging a Next.js SSR Style Prop Bug

This setup will render the `h1` element differently on the server and the client.

## What I expect

__Server__

* `className`: `server`
* text: `server`
* `style`: `{ backgroundColor: 'black', color: 'white' }`

__Client__

* `className`: `client`
* text: `client`
* `style`: `{ backgroundColor: 'white', color: 'black', border: '1px solid black' }`

## What persists after hydration

* `className`: `server`
* text: `client`
* `style`: `{ backgroundColor: 'black', color: 'white' }`

In other words, the text content changes but the `className` and `style` props do not change correctly after hydration.
