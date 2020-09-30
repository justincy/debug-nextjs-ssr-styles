# Debugging a Next.js SSR Style Prop Bug

This setup will render the `h1` element differently on the server and the client.

## What I expect

__Server__

```html
<h1 class="server" style="background-color:black;color:white">server</h1>
```

__Client__

```html
<h1 class="client" style="background-color:white;color:black;border:1px solid black">client</h1>
```

## What persists after hydration

```html
<h1 class="server" style="background-color:black;color:white">client</h1>
```

In other words, the text content changes but the `className` and `style` props do not change correctly after hydration.
