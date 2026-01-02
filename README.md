# 🤖 Autonomous Agent 3D: Causal Memory Architecture

Este proyecto implementa un agente autónomo que habita un entorno 3D, capaz de procesar órdenes en lenguaje natural y tomar decisiones basadas en su **historial de acciones (Memoria de Causalidad)**.

## 🧠 Arquitectura
* **Frontend:** Interfaz 3D construida con `Three.js` y animaciones fluidas con `GSAP`.
* **Cerebro:** Orquestador en la nube usando `Pipedream String`.
* **Razonamiento:** Integración con modelos de lenguaje (OpenAI) para clasificación de intención.
* **Memoria:** Persistencia de estados mediante `Data Stores` de Pipedream para retención de contexto temporal.

## 🛠️ Flujo de Datos
1. El usuario envía una orden desde la interfaz 3D.
2. El Webhook recibe los sensores (posición y entorno).
3. El sistema consulta el **Data Store** para recuperar la última acción realizada.
4. La IA decide el siguiente movimiento basándose en el Presente + Pasado.
5. El agente ejecuta el movimiento en el entorno 3D.

## 🚀 Demo en Vivo
Puedes interactuar con el agente aquí: [TU_URL_DE_GITHUB_PAGES]

## 🛠️ Tecnologías
* **Three.js:** Renderizado del mundo 3D.
* **Pipedream String:** Orquestación de IA y Webhooks.
* **OpenAI:** Cerebro lógico del agente.
* **Data Stores:** Memoria persistente de acciones.
