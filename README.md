# Vanilla extract ssr vite integration

This is a simple example of how to integrate [vanilla-extract](https://vanilla-extract.style/) with [vite](https://vitejs.dev/) and [ssr](https://vitejs.dev/guide/ssr.html).

I've scaffolded this project using vite create cli by chosing the "others" option and then selecting "ssr-react" with typescript.

## App explanation

It's a simple app with a theme switcher that changes the theme of the app. The theme is stored in a context and the theme switcher is a button that changes the theme in the context. The theme is then used in the `App` component to change the background color of the app.
I'm storing the theme in a local storage key to perform user persistence on refresh.

I've also used the [vanilla-extract](https://vanilla-extract.style/) website code as a reference for the theme example.

## Using the project

### Install dependencies

```bash
npm|yarn|pnpm install
```

### Run the project

```bash
npm|yarn|pnpm run dev
```

### Build the project

```bash
npm|yarn|pnpm run build
```

#### Build the server side only

```bash
npm|yarn|pnpm run build:server
```

#### Build the client side only

```bash
npm|yarn|pnpm run build:client
```

### Run the project in production mode

```bash
npm|yarn|pnpm run preview
```

## Project structure

```bash
├── server.js # server
├── src
    ├── entry-server.tsx # server entry point
    ├── entry-client.tsx # client entry point
    ├── reset.css.ts # VE file to define reset styles
    ├── themes.css.ts # VE file to define themes
    ├── themeUtils.ts # theme utils
    ├── sprinkle.css.ts # VE file to define sprinkles
    ├── App.tsx # app entry point
    ├── App.css.ts # Root component styles
    ├── ColorModeToggle # Color mode toggle component
```

## Credit to

- [vanilla-extract](https://vanilla-extract.style/)
- [vite](https://vitejs.dev/)
