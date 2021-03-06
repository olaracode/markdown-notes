# Markdown Notebook π

This is a markdown notebook app created using:

- NextJs
- Chakra-ui
- ContextApi
- react-hook-forms

This project is meant to go side by side with a _"standalone"_ backend project.

## π Deploy & workflow

This app is currently being deployed to [Vercel](https://vercel.com/) thru the **branch main**.

The branch **dev** will be used as a staging area for new features, this is the only branch that should constantly merge to main.

Branch names will begin with the type of branch (feature/fix/bug/exp) followed by a descriptive name separated with - instead of spaces. Eg,

```
  git checkout -b feature/login-page
  git merge fix/infinite-loop
```

Commits should be small and frequent. Their messages should specify a [gitmoji](https://gitmoji.dev/) and a type of change inside brackets, and a longer description of the word done outside the brackes. Eg,

```
  git commit -m "[π add] Profile image component"
  git commit -m "[ππ©Ή deploy-fix] .env file"
```

## πΆββοΈAbsolute routes

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

## πFolder structure

---

```
βββ components
β   βββ atoms
β   βββ molecules
β   βββ organisms
βββ pages
β   βββ api
β   βββ page1
β   βββ page2
βββ public
β   βββ assets
β   β   βββ imgs
β   β   βββ utils
βββ context
β   βββ contextprovider.js
βββ styles
βββ theme
    βββ theme.js
```

<br>

## π§° Components

The components folder uses the atomic approach. Dividing components into three categories: **Atoms, Molecules and Organisms.** With atoms as the smallest and more specific components, to organisms being complex multi atoms and multi molecules components.

<br>

## π Theme

Theme was generated using [coolors](https://coolors.co/?home) based on [the great wave off kanagawa](https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa) which is also the landing image.
