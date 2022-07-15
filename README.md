# Markdown Notebook 📔

This is a markdown notebook app created using:

- NextJs
- Chakra-ui
- ContextApi
- react-hook-forms

This project is meant to go side by side with a _"standalone"_ backend project.

## 🚀 Deploy & workflow

This app is currently being deployed to [Vercel](https://vercel.com/) thru the **branch main**.

The branch **dev** will be used as a staging area for new features, this is the only branch that should constantly merge to main.

Branch names will begin with the type of branch (feature/fix/bug/exp) followed by a descriptive name separated with - instead of spaces. Eg,

```
  git checkout -b feature/login-page
  git merge fix/infinite-loop
```

Commits should be small and frequent. Their messages should specify a [gitmoji](https://gitmoji.dev/) and a type of change inside brackets, and a longer description of the word done outside the brackes. Eg,

```
  git commit -m "[💄 add] Profile image component"
  git commit -m "[🚀🩹 deploy-fix] .env file"
```

## 🚶‍♂️Absolute routes

Absolute routes are defined inside the jsconfig.json, default modules [atoms, molecules, organisms, imgs, utils, store]

### Usage

```js
import MyComponent from "@/molecules/MyComponent.jsx";
```

### Including extra modules

```json
// Inside config.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/atoms/*": ["components/atoms/*"],
      "@/molecules/*": ["components/molecules/*"],
      "@/organisms/*": ["components/organisms/*"],
      "@/imgs/*": ["public/assets/imgs/*"],
      "@/utils/*": ["public/assets/utils/*"],
      "@/store/*": ["store/*"],
      "@/my_new_module/*": ["module/folder/route*"]
    }
  }
}
```

</br>

## 📁Folder structure

---

```
├── components
│   ├── atoms
│   ├── molecules
│   └── organisms
├── pages
│   ├── api
│   └── page1
│   └── page2
├── public
│   ├── assets
│   │   ├── imgs
│   │   └── utils
├── context
│   └── contextprovider.js
├── styles
└── theme
    └── theme.js
```

<br>

## 🧰 Components

The components folder uses the atomic approach. Dividing components into three categories: **Atoms, Molecules and Organisms.** With atoms as the smallest and more specific components, to organisms being complex multi atoms and multi molecules components.

<br>

## 💅 Theme

Theme was generated using [coolors](https://coolors.co/?home) based on [the great wave off kanagawa](https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa) which is also the landing image.
