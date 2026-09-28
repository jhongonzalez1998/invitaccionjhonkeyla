# Invitación Jhon & Keyla — Vercel

1. Descomprime el ZIP. Crea un repositorio privado en GitHub.
2. Sube el CONTENIDO de esta carpeta, no el ZIP ni una carpeta contenedora adicional. En la raíz deben aparecer api/, lib/, public/, package.json y vercel.json.
3. En Vercel: Add New → Project → importa ese repositorio. Framework Preset: Other. Root Directory: ./ (raíz). La salida public está definida en vercel.json. No configures un comando de inicio ni de compilación.
4. Antes de Deploy, agrega estas Environment Variables para Production y Preview:
   - RSVP_URL: la dirección /exec de tu Google Apps Script (copiada también en .env.example).
   - RSVP_KEY: el texto entre comillas de CONNECTION_KEY en tu Google Apps Script, sin las comillas. No es el ID de la hoja. No subas esta clave a GitHub ni uses un nombre NEXT_PUBLIC_ o VITE_.
5. Pulsa Deploy. Las variables se aplican al nuevo despliegue; si las agregas después, vuelve a desplegar.
6. Abre la dirección de Vercel. Toca el sello o Abrir invitación: comprueba música, mapa y formulario. Envía una respuesta de prueba y revisa tu hoja de Google Sheets antes de compartir la invitación.

## Enlaces personalizados
General: https://TU-DOMINIO.vercel.app/
Familia y cupo: https://TU-DOMINIO.vercel.app/familia-gonzalez-alvarado/admision/4
Reemplaza el nombre con palabras separadas por guiones y el 4 por el cupo. La invitación general admite una persona. El cupo está en el enlace y es modificable; no se trata de invitaciones firmadas.

## Contenido
public/: página, imágenes originales y música. api/rsvp.js y lib/rsvp.mjs: confirmación en Google Sheets. vercel.json: configuración de alojamiento y enlaces. No se incluye ninguna clave privada.

La conexión de Apps Script debe seguir activa y tener la misma CONNECTION_KEY. No necesitas cambiar su código ni crear otra hoja.

## Alcance de la revisión
El código del adaptador y los archivos se comprobaron localmente. La publicación en tu cuenta de Vercel y la prueba final en ese dominio siguen pendientes.

Documentación: https://vercel.com/docs/functions/runtimes/node-js
