# FinanzApp

Maqueta responsiva de un dashboard de finanzas personales, realizada con HTML, CSS y Bootstrap 5 instalado mediante npm. Los datos son ilustrativos.

- [Ver la pagina publicada](https://gioacu22.github.io/Investigaci-n-aplicada-1-FinanzasApp/)
- [Consultar el codigo fuente](https://github.com/GioAcu22/Investigaci-n-aplicada-1-FinanzasApp)

## Trabajar en el proyecto

Instalar Node.js y ejecutar en la raiz del proyecto:

```bash
npm ci
```

Abrir `FinanzApp.html` en el navegador o con Live Server en Visual Studio Code. El HTML carga Bootstrap desde `node_modules` y los estilos propios desde `css/estilos.css`.

## Publicacion

Al subir cambios a `main`, GitHub Actions instala las dependencias, ejecuta `npm run build` y publica `dist/` en GitHub Pages. El script copia los estilos, las imagenes y los archivos necesarios de Bootstrap, y genera `index.html` con rutas aptas para alojamiento estatico.

Para generar esos archivos localmente:

```bash
npm run build
```

Editar los archivos fuente; `dist/` se genera automaticamente. Tanto `dist/` como `node_modules/` se excluyen del repositorio mediante `.gitignore`.

## Estructura

- `FinanzApp.html`: estructura y componentes del dashboard.
- `css/estilos.css`: estilos propios y personalizacion de Bootstrap.
- `img/`: imagen del grafico.
- `package.json` y `package-lock.json`: dependencias y versiones.
- `scripts/build-pages.mjs`: preparacion del sitio publicado.
- `.github/workflows/pages.yml`: publicacion automatica en GitHub Pages.

El diseno incluye navbar, menu lateral offcanvas, indicadores financieros, grafico, metas de ahorro, presupuestos, transacciones y pie de pagina. Se adapta a movil, tablet y escritorio.
