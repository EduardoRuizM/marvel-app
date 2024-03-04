![Marvel APP](logo.png)

La arquitectura y estructura del programa es para mostrar los detalles de un personaje de Marvel y sus cómics usando React en una aplicación de una sola página (SPA) que consume datos de una API externa.

Aquí hay una explicación detallada de la arquitectura y estructura:

- Componentes React: La aplicación está compuesta por varios componentes de React que se encargan de renderizar diferentes partes de la interfaz de usuario.
  En este caso, hay tres componentes principales: App, CharacterDetail, y otros como CharacterList, Favorites, Top (para la parte superior).

- Router: Se utiliza para la navegación entre diferentes vistas dentro de la aplicación.
  Esto permite definir rutas para cada vista y cargar los componentes correspondientes cuando se accede a esas rutas.

- Context API: Para manejar el estado de la aplicación de manera global. En este caso, hay un contexto CharacterContext que proporciona el estado de los personajes y los cómics,
  así como las funciones para añadir y eliminar personajes favoritos. Esto permite compartir datos entre los componentes de la aplicación de manera eficiente.

- Llamadas a la API: Usando Fetch para realizar llamadas a la API de Marvel y obtener los detalles de los personajes y los cómics.
  Se hacen estas llamadas dentro de los efectos de lado del cliente (usando useEffect) en los componentes de React.

- Gestión del Estado: El estado de la aplicación, como los detalles del personaje y los cómics, se maneja principalmente a través de los hooks useState y useEffect.
  Se utiliza el hook useState para definir el estado inicial de los personajes y los cómics, y useEffect para realizar efectos secundarios como las llamadas a la API.

- Renderizado Condicional: Se utiliza el operador condicional ternario ({condición ? valor_si_verdadero : valor_si_falso}) para renderizar diferentes partes de la interfaz de usuario dependiendo del estado de la aplicación.

La arquitectura de esta aplicación sigue los principios de diseño de una aplicación de React normal, con componentes, router, gestión de estado y llamadas a la API.
La estructura del programa está organizada de manera que sea fácil de entender y mantener, con componentes reutilizables y separación clara de responsabilidades.

- Creado con React 18.2.0 y Node 21.6.2

- ESLint para un mejor código

- Usando ContextAPI para funciones

- Mostrando un máximo de 50 personajes y 20 cómics por personaje ordenados por fecha de publicación

- Con craco se sirven los assets sin minimizar si se lanza en modo desarrollo con ´npm start´ o producción con ´npm build´ (concatenados y minimizados)

# Para lanzar el proyecto

  Abrir en un nuevo terminal:

  ```
  npm install
  ```

  Para instalar dependencias, luego ejecutar servidor con

  ```
  npm run start 
  ```
