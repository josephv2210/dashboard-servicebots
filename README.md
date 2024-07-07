# React + TypeScript + Vite Template

Este repositorio proporciona un setup mínimo para trabajar con React en Vite, aprovechando HMR y algunas reglas de ESLint configuradas.

## Plugins Oficiales

Actualmente, este template soporta dos plugins oficiales:

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**: Utiliza [Babel](https://babeljs.io/) para Fast Refresh.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**: Utiliza [SWC](https://swc.rs/) para Fast Refresh.

## Configuración de ESLint

Para una aplicación de producción, recomendamos ampliar la configuración de ESLint para incluir reglas específicas de tipos:

1. Configura `parserOptions` en tu archivo de configuración principal:

   ```js
   parserOptions: {
     ecmaVersion: 'latest',
     sourceType: 'module',
     project: ['./tsconfig.json', './tsconfig.node.json'],
     tsconfigRootDir: __dirname,
   },

2. Reemplaza `plugin:@typescript-eslint/recommended` con `plugin:@typescript-eslint/recommended-type-checked` o `plugin:@typescript-eslint/strict-type-checked`.
Opcionalmente, puedes añadir `plugin:@typescript-eslint/stylistic-type-checked`.
Instala `eslint-plugin-react` y agrega `plugin:react/recommended` y `plugin:react/jsx-runtime` a la lista de `extends`.

## Guía de Uso

Para empezar a trabajar con este template:

1. Clona este repositorio.
2. Instala las dependencias utilizando `npm install` o `yarn install`.
3. Ejecuta el servidor de desarrollo con `npm run dev` o `yarn dev`.
4. Empieza a desarrollar tu aplicación React utilizando las características proporcionadas por Vite y TypeScript.

## Contribución

¡Estamos abiertos a contribuciones! Si encuentras algún problema o tienes alguna mejora que proponer, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, por favor consulta el archivo LICENSE en este repositorio.
