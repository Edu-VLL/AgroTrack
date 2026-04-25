### 5.1.2. Source Code Management

Con el propósito de mantener un control adecuado del código fuente y facilitar el trabajo colaborativo entre los integrantes del equipo, se utilizará la plataforma **GitHub**. Esta herramienta permitirá administrar los cambios realizados en el proyecto, revisar los commits efectuados por cada integrante y mantener un historial ordenado del desarrollo.

Asimismo, dentro de la organización se han creado repositorios independientes, cada uno destinado a un producto específico:

- Repositorio correspondiente al informe del proyecto: https://github.com/Edu-VLL/AgroTrack.git
- Repositorio correspondiente a la landing page:

Para organizar el proceso de desarrollo y asegurar una integración eficiente de los avances, se aplicará la metodología **GitFlow**, la cual estructura el trabajo mediante ramas con responsabilidades definidas.

#### Ramas principales

- **main**
    - Contiene la versión estable del proyecto.
    - Solo recibe cambios aprobados para producción.
    - Cada versión liberada seguirá el estándar **Semantic Versioning**.

- **develop**
    - Rama principal de desarrollo.
    - Integra nuevas funcionalidades y correcciones antes de pasar a producción.
    - Sirve como base para la creación de nuevas ramas de trabajo.

#### Ramas de apoyo

- **feature/***
    - Se crean desde `develop` para implementar nuevas funcionalidades o mejoras.
    - Convención de nombres:

  `feature/nombre-descriptivo`

    - Ejemplos:

  `feature/login-user`

  `feature/improve-navbar`

    - Una vez completadas, se integran nuevamente en `develop` mediante *pull request*.

- **release/***
    - Se crean cuando el proyecto está listo para preparar una nueva versión.
    - Permiten realizar ajustes finales, correcciones menores o cambios de documentación.
    - Convención de nombres:

  `release/version`

    - Ejemplo:

  `release/1.0.0`

- **hotfix/***
    - Se crean desde `main` para solucionar errores críticos detectados en producción.
    - Luego de la corrección, se integran tanto en `main` como en `develop`.

---

#### Conventional Commits

Con el fin de mantener claridad y consistencia en el historial del repositorio, los mensajes de commit seguirán la especificación **Conventional Commits**.

Estructura general:

`<tipo>(<ámbito>): <descripción breve>`

Tipos utilizados:

- `feat`: nueva funcionalidad.
- `fix`: corrección de errores.
- `docs`: cambios en documentación.
- `style`: cambios visuales o de formato.
- `refactor`: mejora interna del código sin alterar funcionalidad.
- `test`: pruebas nuevas o modificadas.
- `chore`: tareas de mantenimiento general.

Ejemplos:

`feat(landing-page): add hero section`

`fix(navbar): correct responsive menu`

`docs(readme): update project structure`

#### Integrantes del equipo en GitHub

| User Name | Nombre Completo |
|-----------|-----------------|
| Delzekl   | Martínez Gaona, Pablo Afranio |
| DuDu-tech | Quispe Perez, Eder Edu |
| elprrr    | Alfaro Mallma, Alberto Joaquin |
| Edu-VLL   | Velasquez Laquihuanaco, Eduardo David |
| Miler2003 | Rodriguez Rojas, Miler Alexander |

![participantes](assets/)

*Nota.* Elaboracion propia. Obtenido de: 