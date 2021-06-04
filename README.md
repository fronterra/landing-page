# Pollution Project

[![Netlify Status](https://api.netlify.com/api/v1/badges/bea1f1ba-620d-4df8-9504-eaaadf0d0487/deploy-status)](https://app.netlify.com/sites/hardcore-galileo-d928d3/deploys)

A Next.js site containing informational pages about the project, including technical documentation and a blog.


## Getting Started

First, clone this repository and install dependencies:
```bash
npm install
```

Then you can run the development server:

```bash
npm run dev
```

## Repo Structure

```bash
├── README.md
├── next.config.js
├── package-lock.json
├── package.json
│
├── pages/
├── components/
├── styles/
├── hooks/
├── services/
├── public/
```


### `pages`
```
├── pages
│   ├── _app.js
│   ├── _document.js
│   ├── api
│   │   └── route
│   │       ├── [urlParam].js
│   │       └── index.js
│   ├── page
│   │   └── index.js
│   ├── digest
│   │   └── index.js
│   └── index.js
```


### `components`
```
├── components
│   └── Component
│       ├── index.js
│       └── styledComponents.js
```


### `styles`
```
├── styles
│   └── theme.js
```

### `hooks`
```
├── hooks
│   └── useHook.js
```


### `services`
```
├── services
│   └── module
│       └── index.js
```


### `public`
```
├── public
│   ├── favicon.ico
│   ├── fonts
│   └── images
```


### `next.config.js`

### Dependencies
- Next
- React
- GhostCMS

## Deployment
### Environmental Variables
### Netlify