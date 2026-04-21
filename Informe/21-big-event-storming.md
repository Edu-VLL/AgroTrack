## 2.4. Big Picture Event Storming

El equipo realizó una sesión colaborativa en Miro para entender el dominio del negocio de alto nivel, identificando procesos clave y eventos significativos de AgroTrack. La organización visual sigue una línea de tiempo narrativa de izquierda a derecha.


![Big event storming image](assets/big_event_storming_Image.png)

Descripción del proceso modelado:
* **Exploración de Eventos (Naranja):** Representan hechos que ya sucedieron en el sistema, como el registro del usuario (User Registered), la creación de una parcela (Plot Created) o el envío de una recomendación de riego (Recommendation Sent).
* **Comandos (Azul):** Acciones que disparan los eventos, tales como Register User, Create Plot e Irrigation.
* **Actores (Amarillo):** Identificación de los perfiles que ejecutan las acciones: Farmer (Agricultor) y SME Owner (Empresario Agrícola).
* **Sistemas Externos (Rosado):** Se integraron servicios externos críticos como Weather API (para la obtención de pronósticos) y Email/SMS Gateway (para el despacho de alertas preventivas).
* **Puntos de Fricción (Rojo):** Se identificaron áreas de mejora como el "Registro manual lento" y la "Falta de conexión en campo", las cuales guían el diseño de la solución hacia la futura implementación de IoT.

