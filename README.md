# El BazarDeAlLado 🛒

El BazarDeAlLado es una plataforma web diseñada para digitalizar y potenciar las pequeñas y medianas empresas (PYMES). Su objetivo principal es ofrecer una interfaz intuitiva donde los negocios locales puedan gestionar su catálogo de productos, recibir pedidos y conectar de manera eficiente con sus clientes del vecindario.

## 🚀 Características Principales

*   **Gestión de Inventario:** Panel de control para que los dueños de negocios agreguen, editen o eliminen productos en tiempo real.
*   **Carrito de Compras:** Experiencia de usuario fluida para la selección de productos y gestión de pedidos.
*   **Diseño Responsivo:** Optimizado para dispositivos móviles, tablets y computadoras de escritorio.
*   **Buscador Inteligente:** Filtros por categorías y búsqueda por palabras clave para facilitar la navegación.
*   **Panel de Administración:** Estadísticas básicas de ventas y gestión de estados de pedidos.
*   **API REST:** Endpoints para obtener productos (GET /productos y GET /productos/:id).

## 🛠️ Tecnologías Utilizadas

Este proyecto ha sido construido utilizando las siguientes tecnologías:

*   **Frontend:** HTML5, CSS3 y JavaScript vanilla.
*   **Backend:** Node.js con Express.js.
*   **Logging:** Winston para registros de eventos.
*   **Despliegue:** Railway (plataforma en la nube).

## 📦 Instalación

Sigue estos pasos para ejecutar el proyecto localmente:

### Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/ElBazarDeAlLado.git
```

### Instalar dependencias:

```bash
cd ElBazarDeAlLado
npm install
```

### Configurar variables de entorno:

Crea un archivo `.env` en la raíz del proyecto y añade tus credenciales (ver `.env.example`).

### Ejecutar el proyecto:

```bash
npm run dev
```

## 📸 Screenshots

(Opcional: Añade aquí capturas de pantalla de tu aplicación para mostrar el diseño)

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar El BazarDeAlLado, por favor sigue estos pasos:

1.  Haz un Fork del proyecto.
2.  Crea una rama para tu mejora (`git checkout -b feature/NuevaMejora`).
3.  Haz commit de tus cambios (`git commit -m 'Añadir nueva mejora'`).
4.  Sube los cambios a tu rama (`git push origin feature/NuevaMejora`).
5.  Abre un Pull Request.

## � Despliegue en Railway

Este proyecto está configurado para desplegarse fácilmente en [Railway](https://railway.com), una plataforma en la nube.

### Pasos para desplegar:

1. **Regístrate en Railway**: Ve a [railway.com](https://railway.com) y crea una cuenta (puedes usar GitHub para login).
2. **Conecta tu repositorio**: En el dashboard de Railway, haz clic en "New Project" > "Deploy from GitHub Repo" > Selecciona `ElBazarDelAlLado`.
3. **Despliega**: Railway detectará automáticamente que es un proyecto Node.js y lo desplegará. El puerto se configura automáticamente via `process.env.PORT`.
4. **Accede a tu app**: Una vez desplegado, obtendrás una URL como `https://tu-proyecto.up.railway.app`. El sitio web estará en la raíz, y la API en `/productos`.
5. **Monitoreo**: Revisa logs en tiempo real en el dashboard de Railway.

### Notas:
- El proyecto incluye un archivo `products.json` con datos de ejemplo. Para producción, considera agregar una base de datos.
- Si necesitas variables de entorno, configúralas en Railway (ej. para API keys).

## �📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

Desarrollado con ❤️ para el comercio local por **Dave**