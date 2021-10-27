# Challenge Movies

Este proyecto se inició con [Create React App](https://github.com/facebook/create-react-app).

### Instrucciones para correr el proyecto

1. `.env`: crear un archivo llamado: `.env` en la carpeta "challenge-movies-react", que tenga la siguiente forma:
```
REACT_APP_API_KEY=apikey
```
Reemplazar `apikey` por la brindada en la API pública https://developers.themoviedb.org/3


Desde la carpeta "challenge-movies-react" se pueden ejecutar los siguientes comandos:

2. `npm install`: Instala todas las dependencias necesarias para correr el proyecto correctamente. [Es necesario correrlo sólo la primera vez]

3. `npm start`: Comienza a correr la aplicación de forma local por lo que se puede ver desde el navegador accediendo a http://localhost:3000

No es necesario volver a correr el proyecto cada vez que se realice un cambio sino que se verá automáticamente reflejando en el navegador.


## Enunciado 

Desarrollo de SAP en REACT con implementacion de Redux para consumo de API publica. Implementacion de hook useContext para el manejo de usuario. 

Requisitos del challenge: 
" Presentar al cliente una aplicación web simple que permita a los usuarios descubrir nuevas películas y buscarlas, ademas, filtrar por Rating. Dado que no tienen un servicio de backend, la primera versión de la aplicación se creará utilizando la API pública https://developers.themoviedb.org/3 "

Adicional a los requerimientos, se implementa useContext para el manejo de interfaz de usuario y estado de favoritos con permanencia en localStorage.

## Deploy

https://challenge-movies-react.vercel.app/

