# REACTJS

- https://roadmap.sh/react

## Abreviatura Comando

- rafc (React Arrow Function Component)

## Como funciona React ejecutando la primera vista

- $npm start

- Se ejecuta index.js
- Se ejecuta HeroesApp.js
- Se ejecuta routers/AppRouter.js
- Se ejecuta routers/DashboardRoutes.js

## Para utilizar rutas

- npm install react-router-dom

## Tener en cuenta en el día a día

- Usando Dashboard: Usualmente tendremos 2 estilos (1 para el login, y algo diferente para las interiores).
- En su mayoría deberemos reutilizar los componentes.
- Si estas en la vista de Login e ingresas tus credenciales de autenticación, pasas a una vista principal. En el caso regreses mediante las flechas del navegador, deberias tener una **validación** de no dejar que regreses a la vista de Login nuevamente.
- Deberiamos también considerar una **validación**: Si estamos autenticados, no deberia mostrarme la vista de Login.