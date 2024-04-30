# API de Libros prometidos
Te doy la bienvenida a este repo, aquí encontrarás nada más y nada menos que una API rest de Libros, con esta aplicación podrás CREAR, EDITAR, ELIMINAR Y ACTUALIZAR los libros que prometas leer y hacer una gestión de usuarios.

Para poder hacer uso de ella, debes seguir los siguientes pasos:
Abre el proyecto en tu editor de código y desde la terminal👇
## 1️⃣instala las dependencias
```sh
cd server
npm i
```
## 2️⃣Pon tus datos para conectar con tus Bases de datos locales
Antes de todo esto, crea dos bases de datos con mysql una que se llame books_app y otra books_app_test.
utiliza el archivo que te he dejado de ejemplo para variables de entorno, borrale la parte de example y rellenalo con tus datos. 
```sh
DB_PASSWORD = 
DB_DEV_NAME = books_app
DB_TEST_NAME = books_app_test
DB_USER = 
```
## 3️⃣Levanta el servidor 🚀
```sh
npm run dev
```

## 4️⃣ los test🧪
En este repo encontrarás testeo con typescript con gestión de usarios.
>Abre una nueva terminal y pon el siguiente comando
```sh
npm run test
```
