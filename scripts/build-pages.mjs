import { copyFile, cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Publica solo los archivos de la pagina y los recursos necesarios de Bootstrap.
// El HTML fuente sigue usando node_modules para trabajar localmente.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'dist');
const bootstrap = resolve(root, 'node_modules/bootstrap');

await mkdir(resolve(output, 'vendor/bootstrap'), { recursive: true });
for (const folder of ['css', 'img']) {
  await cp(resolve(root, folder), resolve(output, folder), { recursive: true });
}
for (const filename of ['bootstrap.min.css', 'bootstrap.min.css.map']) {
  await copyFile(resolve(bootstrap, 'dist/css', filename), resolve(output, 'vendor/bootstrap', filename));
}
for (const filename of ['bootstrap.bundle.min.js', 'bootstrap.bundle.min.js.map']) {
  await copyFile(resolve(bootstrap, 'dist/js', filename), resolve(output, 'vendor/bootstrap', filename));
}
await copyFile(resolve(bootstrap, 'LICENSE'), resolve(output, 'vendor/bootstrap/LICENSE'));

const html = (await readFile(resolve(root, 'FinanzApp.html'), 'utf8'))
  .replaceAll('node_modules/bootstrap/dist/css/', 'vendor/bootstrap/')
  .replaceAll('node_modules/bootstrap/dist/js/', 'vendor/bootstrap/');
await writeFile(resolve(output, 'index.html'), html, 'utf8');
await writeFile(resolve(output, 'FinanzApp.html'), html, 'utf8');
await writeFile(resolve(output, '.nojekyll'), '');
console.log('Sitio listo para GitHub Pages en dist/.');
