# Guía de Contribución para Elefante Growth Marketing

¡Gracias por tu interés en contribuir al proyecto de Elefante Growth Marketing! Para mantener un historial de commits limpio, legible y consistente, seguimos el estándar de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Mensajes de Commit
Cada mensaje de commit debe seguir el siguiente formato:

```
<tipo>: <descripción>

[cuerpo opcional]
[pie de página opcional]
```

### Tipo (`<tipo>`)
El tipo es un sustantivo que describe la naturaleza del cambio. Es **obligatorio** y debe ser uno de los siguientes:

| Tipo | Descripción |
| :--- | :--- |
| **feat** | Una nueva funcionalidad o característica. (Ej: `feat: añadir página de contacto`) |
| **fix** | Una corrección de un error o bug. (Ej: `fix: corregir alineación del logo`) |
| **docs** | Cambios solo en la documentación. (Ej: `docs: actualizar guía de Resend`) |
| **style** | Cambios que no afectan el significado del código (espacios en blanco, formato, puntos y comas faltantes, etc.). (Ej: `style: reducir margen en breadcrumb`) |
| **refactor** | Un cambio de código que no añade una característica ni corrige un error. (Ej: `refactor: optimizar componente Hero`) |
| **perf** | Un cambio de código que mejora el rendimiento. (Ej: `perf: optimizar carga de imágenes`) |
| **test** | Añadir pruebas faltantes o corregir pruebas existentes. (Ej: `test: añadir pruebas para formulario`) |
| **build** | Cambios que afectan el sistema de compilación o dependencias externas (ej: pnpm, webpack, typescript). (Ej: `build: actualizar dependencia de Next.js`) |
| **ci** | Cambios en nuestros archivos y scripts de configuración de CI (integración continua). (Ej: `ci: configurar despliegue automático en Vercel`) |
| **chore** | Otros cambios que no modifican el código fuente ni las pruebas. (Ej: `chore: actualizar .gitignore`) |

### Descripción (`<descripción>`)
La descripción es un resumen conciso del cambio. Es **obligatoria** y debe:
*   Ser corta (máximo 50-72 caracteres).
*   Comenzar con una letra minúscula.
*   Usar el modo imperativo (ej: "añadir", "corregir", "actualizar").

### Cuerpo (`[cuerpo opcional]`)
El cuerpo proporciona detalles contextuales adicionales sobre el cambio. Es **opcional** y debe:
*   Comenzar una línea después de la descripción.
*   Usar el modo imperativo.
*   Incluir la motivación del cambio y contrastar con el comportamiento anterior.

### Pie de página (`[pie de página opcional]`)
El pie de página es **opcional** y se utiliza para:
*   Referenciar issues de GitHub (ej: `Closes #123`).
*   Indicar cambios importantes que rompen la compatibilidad (`BREAKING CHANGE:`).

## Ejemplos de Commits

```
feat: añadir nueva sección de testimonios en la página de inicio

Esta característica introduce una nueva sección para mostrar testimonios de clientes,
mejorando la prueba social del sitio.
```

```
fix: corregir error de envío en formulario de contacto

Se solucionó un problema donde el formulario de contacto no enviaba correos
debido a una configuración incorrecta de la API de Resend.
Closes #45
```

```
style: ajustar espaciado del breadcrumb en páginas internas

Se redujo el padding superior y el margen del componente breadcrumb
para mejorar la visibilidad del formulario en el primer fold.
```

Al seguir estas directrices, aseguramos que el historial de tu proyecto sea claro, útil y fácil de navegar para todos los colaboradores.
