<!-- <p align="center">
  
</p> -->

<h1 align="center">Dart</h1>

Dart is use for quickly setup new web project for POC task.

WEB Server echnical Stack:
- Git
- Typescript
- SCSS
- HTML
- Webpack
- browser-sync (live reload)

# How to use

### Create new project:
```bash
dart web <project_name>
```

### Run project in watch mode:
```bash
cd project_name
npm run dev
```

#### Typescript usage

Dart create project with typescript as code base. Just edit typescript config `tsconfig.json` as you want:

```
{
    "compilerOptions": {
      "outDir": "./dist/",
      "noImplicitAny": true,
      "module": "es6",
      "target": "es6",
      "allowJs": true,
      "moduleResolution": "node"
    }
}
```
