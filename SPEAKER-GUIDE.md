# Speaker Guide — Kit de Supervivencia para Hackathons
## Cristian Moreno · @khriztianmoreno · 50 minutos · Guía de escenario

> **Documento de uso el día del evento. Imprímelo o ponlo en pantalla secundaria.
> Cada bloque tiene: número de slide, tiempo, guion sugerido y prompt listo para copiar.**

---

## El arco narrativo (memorízalo antes de subir)

```
GANCHO    → Los agentes de IA son genios ciegos.
CONFLICTO → El "Corte y Confección" de código: copiamos logs, pegamos al chat.
REVELACIÓN → No necesitamos modelos más grandes — necesitamos Runtime Context Injection.
HÉROE     → Antigravity IDE + Chrome DevTools MCP: el IDE y el browser con el mismo sistema nervioso.
TRANSFORMACIÓN → Dejás de escribir sintaxis. Te convertís en Orquestador de Ingeniería.
```

---

## Checklist PRE-ESCENARIO (llega 30 min antes)

| # | Verificación | Comando / acción |
|---|---|---|
| ☐ | Dependencias instaladas | `pnpm install` en `/hackathon-survival-kit` |
| ☐ | Servidor corriendo | `pnpm dev` → `http://localhost:3000` |
| ☐ | Slides disponibles | `http://localhost:3000/slides` — verificar los 19 slides |
| ☐ | Pill invisible confirmada | El Hero muestra una cápsula blanca vacía ✅ |
| ☐ | Login da 404 | `/login` → submit → mensaje "Check the Network tab" ✅ |
| ☐ | Antigravity IDE activo | Gemini 3 Pro disponible en el panel |
| ☐ | Chrome DevTools MCP activo | Ping: *"reporta el title de localhost:3000"* → "DemoDay" |
| ☐ | Supabase MCP conectado | `supabase/schema.sql` vacío listo |
| ☐ | 2+ capturas de referencia | Stripe pricing / Linear / Dribbble — en Desktop listas |
| ☐ | Rama de respaldo | `git checkout -b talk-checkpoint` |
| ☐ | Pantalla a 1280px+ | Zoom 100% — grid muestra 4 columnas |
| ☐ | Modo no-molestar ON | Silenciar notificaciones, Slack, email |
| ☐ | MCP pre-calentado | Si la red es inestable, levantá los servidores MCP locales antes de subir al escenario (`npx` puede tardar 20 s en frío) |
| ☐ | Chrome con flag `--isolated` | Evita que extensiones o cookies rompan el DOM del agente a mitad de demo |

---

## Mapa de tiempo y slides

```
00:00 ──┤ INTRO + ABOUT ME          slides 1-2   (5 min)
05:00 ──┤ EL PROBLEMA                slides 3-4   (5 min)
10:00 ──┤ LA INFRAESTRUCTURA         slides 5-8   (8 min)
18:00 ──┤ TRES REFLEJOS (preview)    slide 9      (2 min)
── DEMOS ────────────────────────────────────────────────
20:00 ──┤ PILLAR 1 · Screenshot→JSX  slides 10-11 (10 min)
30:00 ──┤ PILLAR 2 · Bugs en 20 min  slides 12-16 (20 min)
  30:00 ──┤ 2a CSS bug            (4 min)
  34:00 ──┤ 2b Network bug        (5 min)
  39:00 ──┤ 2c Re-renders infinitos (5 min)
  44:00 ──┤ 2d Images sin optimizar (6 min)
50:00 ──┤ PILLAR 3 · Paralelismo     slides 17-18 (6 min)
── CIERRE ───────────────────────────────────────────────
56:00 ──┤ TRANSFORMACIÓN + CIERRE   slides 19-20 (2 min)
58:00 ──┤ Q&A                        slide 21     (0+ min)
```

---

## SLIDE 1 — Cover `[min 0–1]`

**Título:** *"Desarrollo web potenciado por IA: Optimiza tu workflow — El nacimiento del desarrollo Agent-First"*

**Apertura en frío (saludo + gancho):**
> "Buenos días a todos. Gracias por estar acá esta mañana / tarde — sé que la agenda está cargada, así que voy a entrar directo al punto."

**Puente al título:**
> "El título de hoy lo eligí a propósito: 'Desarrollo web potenciado por IA — el nacimiento del desarrollo Agent-First'. Y quiero arrancar con una verdad un poco incómoda…"

**Guion de apertura (verdad incómoda):**
> "Estamos usando IA del siglo XXI con flujos de trabajo de copiar y pegar del siglo XX. Tenemos agentes que escriben código impecable... pero que no pueden ver si ese código funciona en el navegador. En los próximos cincuenta minutos vamos a cambiar eso — juntos."

**Acción:** Pausa de 3 segundos. Deja que el título respire antes de avanzar.

---

## SLIDE 2 — About Me `[min 1–5]`

**Conector desde el slide anterior:**
> "Pero antes de mostrarles ese cambio, justo es que sepan desde dónde les estoy hablando — porque lo que voy a contar no sale de un paper, sale de trabajarlo todos los días."

**Puente al contenido (apertura natural):**
> "Así que muy rápido, treinta segundos sobre mí, y entramos en materia."

**Guion completo (léelo casi textual):**

> "Para los que no me conocen, soy Cristian Moreno. Llevo desarrollando software desde 2011 y actualmente soy Tech Lead en Honest y Google Developer Expert en Tecnologías Web.
>
> A lo largo de mi carrera he estado obsesionado con dos cosas: la optimización profunda de rendimiento usando Chrome DevTools, y la adopción de metodologías rigurosas como Spec-Driven y Test-First Development.
>
> En los últimos meses estuve construyendo y orquestando agentes de IA con el Model Context Protocol y el Agent Development Kit de Google — lo que me llevó a proyectos como MCP Codex para automatizar mejores prácticas en nuestros entornos de desarrollo.
>
> Recientemente, en mi rol de liderazgo, noté un cambio: el reto ya no es solo escribir código, sino tener technical ownership y orquestar sistemas complejos. Por eso esta charla me emociona — porque la evolución natural de un desarrollador senior hoy es convertirse en un Orquestador de Unidades Agénticas. De eso exactamente trata la demo que les voy a mostrar."

**Tip:** Señala los badges (GDE Web / MCP / Agent Orchestration) mientras los mencionás.

---

## SLIDE 3 — Los agentes de IA son ciegos `[min 5–8]`

**Concepto:** *El estado de Privación Sensorial*

**Conector desde el slide anterior:**
> "Y desde ese lugar — liderando equipos que orquestan agentes en producción — empecé a ver un patrón que se repite en todos lados. Un patrón que probablemente ustedes también están viviendo esta misma semana."

**Puente al contenido (encuadre del problema):**
> "Le puse un nombre concreto, porque diagnosticar un problema empieza por nombrarlo. Yo lo llamo el estado de **Privación Sensorial** — y se ve así."

**Guion:**
> "Los agentes actuales operan como un programador con los ojos vendados intentando armar un rompecabezas. Coeficiente intelectual altísimo para escribir código. Cero capacidad para ver si la interfaz se rompió."

**Señala las 3 tarjetas rojas:**
- "No ven si el layout colapsó"
- "No detectan el CORS que bloqueó el fetch"
- "No saben que la consola está llena de errores"

> "¿Cuántas horas perdieron esta semana copiando un error de la consola y pegándolo en el chat? Eso es el Corte y Confección de código. Hoy lo terminamos."

---

## SLIDE 4 — ¿Qué es un Agente de IA? `[min 8–10]`

**Concepto:** LLM solo vs Agente completo

**Conector desde el slide anterior:**
> "Ahora bien, antes de proponerles la solución a esa ceguera, necesito asegurarme de que todos partimos del mismo vocabulario. Porque esta industria viene tirando dos palabras como si fueran sinónimos — y no lo son."

**Puente al contenido (planteo de la pregunta):**
> "Esas dos palabras son **LLM** y **Agente**. Y la diferencia entre las dos no es semántica — es operativa. Vean la comparación."

**Guion:**
> "Un LLM solo es un cerebro sin cuerpo — texto entra, texto sale. Sin acceso al entorno real.
>
> Un Agente es ese mismo cerebro, pero con ojos, manos y memoria. Percibe el DOM, la consola, la red. Razona. Ejecuta. Itera solo hasta completar la tarea.
>
> La diferencia no es el modelo — es el contexto disponible en runtime."

---

## SLIDE 5 — ¿Qué es MCP? `[min 10–12]`

**Concepto:** Model Context Protocol como USB-C para agentes

**Conector desde el slide anterior:**
> "Y acá viene la pregunta natural: si el agente necesita ojos y manos, ¿cómo se conecta a ellas? ¿Cómo le damos acceso al navegador, a la base de datos, al sistema de archivos? La respuesta es el segundo concepto que necesitamos."

**Puente al contenido (introducción del término):**
> "Se llama **MCP** — Model Context Protocol. Lo lanzó Anthropic en 2024, y en los últimos doce meses se convirtió en el estándar de facto. Veamos por qué."

**Guion:**
> "El pegamento que hace posible todo esto es MCP — Model Context Protocol, lanzado por Anthropic en 2024.
>
> Sin MCP, cada integración es custom. VSCode plugin distinto de Cursor plugin distinto de Windsurf plugin. Un infierno de mantenimiento.
>
> Con MCP: protocolo estándar y abierto. Cualquier modelo se conecta a cualquier herramienta. Chrome DevTools, Supabase, GitHub, Slack, Filesystem — todos hablan el mismo idioma.
>
> Piénsenlo como USB-C para los agentes."

---

## SLIDE 6 — Closed-Loop Execution `[min 12–14]`

**Concepto:** Runtime Context Injection — el cambio de paradigma

**Conector desde el slide anterior:**
> "Con esas dos piezas en su lugar — agente y MCP — ya estamos listos para hablar del verdadero cambio de paradigma. Porque hasta acá teníamos definiciones; ahora viene la revelación que cambia cómo trabajamos."

**Puente al contenido (introducción del concepto):**
> "Le pusieron un nombre: **Closed-Loop Execution**, o en español, **ejecución de bucle cerrado**. Suena académico, pero la diferencia es muy concreta. Compárenla."

**Guion:**
> "No necesitamos modelos más grandes. Necesitamos inyección de contexto en tiempo de ejecución.
>
> Antes: Prompt → Código → *(pray it works)*.
> Ahora: Prompt ↔ Runtime ↔ Fix ↔ Validación.
>
> El agente escribe código *y lo verifica en el navegador real* antes de darte la respuesta. El bucle se cierra."

**Pausa dramática.** Deja que el contraste de las dos líneas haga el trabajo.

---

## SLIDE 7 — ¿Por qué Antigravity IDE y no Cursor? `[min 14–17]`

**Concepto:** Honestidad sobre el ecosistema + razones reales para elegir Antigravity hoy

**Conector desde el slide anterior:**
> "Ahora, en este punto del relato, alguien en la sala ya está pensando: *'Cristian, esto suena lindo, pero yo ya uso Cursor / Copilot / Windsurf y me funciona bien'*. Y es la pregunta que toca responder de frente."

**Puente al contenido (apertura honesta):**
> "Voy a ser muy honesto con ustedes — más honesto que el slide. Porque sería deshonesto pararme acá a venderles que Antigravity es mágico y los demás no sirven."

**Guion (honestidad sobre el panorama):**
> "La realidad de 2026 es que la mayoría de los editores modernos están convergiendo en lo mismo: Cursor, Copilot Workspace, Windsurf, Zed, Antigravity — todos están sumando agentes, todos están adoptando MCP, todos están abriendo acceso al runtime. Las diferencias entre ellos hoy son **tácticas, no estratégicas**: detalles de UX, modelos de precios, qué tan pulido está el Inbox.
>
> Entonces, ¿por qué hago esta demo en Antigravity y no en otro? Dos razones, sin vueltas:
>
> **Uno: este es un evento que Google promueve.** Tiene sentido mostrar las herramientas de la casa — sería raro venir a un Google DevFest a abrir Cursor en pantalla.
>
> **Dos — y esta es la que más le va a importar a ustedes: Antigravity te da acceso gratis a modelos top de Google**, Gemini 3 Pro incluido. Ese mismo nivel de modelo en otras plataformas lo pagás. Para un hackathon de 48 horas con presupuesto cero, esa diferencia cambia toda la ecuación económica.
>
> Dicho eso, sí hay algunas cosas en las que Antigravity está empujando el límite ahora mismo — y esas valen la pena mencionarlas."

**Diferenciales actuales (señalá la tabla):**
> "El chat asíncrono y el Inbox de aprobaciones. La idea de que el browser y el IDE compartan el mismo sistema nervioso desde el día uno, en vez de ser un plugin pegado encima. Esos son los puntos donde la arquitectura realmente se nota — pero les aviso: el resto del ecosistema viene corriendo detrás, y en seis meses probablemente estén todos al mismo nivel."

**Cierre del slide (libera la tensión):**
> "Por eso quiero que se lleven algo más importante que 'usá Antigravity': el modelo mental. Si mañana lunes vuelven a la oficina con Cursor o con Windsurf, todo lo que vamos a ver hoy aplica igual."

**Señala la tabla** destacando la fila de "Navegador": *"Externo"* vs *"Nativo"*.

---

## SLIDE 8 — Antes vs Ahora `[min 17–18]`

**Concepto:** La tabla comparativa técnica — capacidades del ecosistema MCP

**Conector desde el slide anterior:**
> "Y para aterrizar ese modelo mental, dejemos de hablar de IDEs por un minuto y miremos lo que realmente cambia: las cuatro capacidades técnicas que el ecosistema MCP pone sobre la mesa, viva en el editor que viva."

**Puente al contenido (encuadre rápido):**
> "Cuatro dimensiones, treinta segundos cada una. Después pasamos a lo que importa: la demo."

**Guion rápido (30 segundos por fila):**
> "Visibilidad: código estático vs heurística del DOM en vivo.
> Depuración: copy-paste manual vs `get_console_message` directo.
> Optimización: estimaciones teóricas vs `performance_start_trace` real.
> Red: inspector manual vs `list_network_requests` con mocking."
>
> **Y la clave que mencioné:** Persistencia Inversa — modificás algo en el inspector de Chrome, el agente lo extrae vía MCP y actualiza el código fuente solo. Eso lo vamos a ver en vivo."

---

## SLIDE 9 — Tres herramientas. Tres reflejos. `[min 18–20]`

**Conector desde el slide anterior:**
> "Bien. Hasta acá tenemos el marco conceptual completo: agentes, MCP, closed-loop y una arquitectura que comparte el sistema nervioso. Pero la teoría sin práctica no le sirve a nadie."

**Puente al contenido (preview de los 3 pilares):**
> "Toda esa teoría empieza a tener valor cuando se convierte en hábito. En mi flujo diario, se reduce a tres reflejos — y los próximos cuarenta minutos los vamos a recorrer uno por uno, en vivo."

**Guion de transición:**
> "Tres hábitos que, una vez que los incorporás, no podés creer cómo trabajabas antes.
>
> Uno: prototipado visual ultrarrápido. Dos: resolución instantánea de bloqueos. Tres: multiplicar las manos del equipo.
>
> Vamos a la demo."

**Acción:** Transición directa. No des más detalles — el suspense funciona.

---

## SLIDE 10 — Pilar 01 · Prototipado Visual Ultrarrápido `[min 20–21]`

**Conector desde el slide anterior:**
> "Empecemos por el primer reflejo — el que más impacto visible tiene en las primeras horas de un hackathon, cuando lo que necesitás es algo que se vea profesional ya."

**Puente al contenido (planteo del caso):**
> "La idea es simple, pero el cambio es enorme. Le puse un mantra que repito en cada equipo nuevo:"

**Guion:**
> "No arrancés de cero. Pegá un screenshot, recibí el JSX.
>
> Tenemos una sección en la landing que está completamente vacía — `components/pitch-section.tsx`. Es un hueco intencional. La vamos a llenar ahora con una referencia visual."

**Señala el file target en pantalla.**

---

## SLIDE 11 — Demo · Pilar 01 `[min 21–30]`

**Conector desde el slide anterior:**
> "Pero ya saben que esto no se entiende contándolo — se entiende viéndolo. Así que vamos al editor y al browser. Bajamos los slides un momento."

**Puente al contenido (encuadre de la demo):**
> "El flujo son cuatro pasos. Los hago yo en vivo, ustedes me siguen visualmente. Si en algún momento se pierden, me paran sin problema."

### Flujo en vivo

**[min 21]** Cambiá a la app en el browser. Mostrá la sección `#pitch` vacía al público.

**[min 22]** Abrí la referencia visual (Stripe pricing / Linear — que tenés en Desktop preparada). Mostrála al público 5 segundos.

**[min 22]** Pegá la imagen en Antigravity IDE y lanzá el prompt:

---

### PROMPT PILLAR 1 — copia esto

```
Toma la imagen que acabo de pegar.
Recréala dentro de components/pitch-section.tsx usando Tailwind.
Usa los colores signal-orange, signal-violet y signal-cyan
definidos en tailwind.config.ts.
Conservá el id="pitch" en el <section>.
No toques ningún otro componente.
```

---

**Mientras el agente trabaja:**
- Mantené el editor visible — la audiencia ve el diff en tiempo real.
- Comentá: *"Noten que le di contexto de qué colores usar. El agente lee el tailwind.config para no inventar valores."*
- Comentá: *"Esto es lo que mencioné antes — el agente tiene contexto del proyecto real, no solo de la imagen."*

**[min ~29]** Hot-reload. La sección vacía ahora tiene UI real.

**Línea de impacto:**
> "Eso fue el Artifact como Blueprint: el agente entiende la arquitectura antes de tirar código. Minutos, no horas."

**[Bonus — si sobran 2 min]** Abrí Playgrounds:
> "Quiero probar algo loco — un grid 3D con react-three-fiber. Abro un Playground: sandbox aislado, no toca el repo. El reloj del hackathon sigue corriendo."

### PROMPT BONUS · Worktree 3D — copia esto

```
Crea un worktree. NO hagas checkout, NO cambies de rama,
NO hagas commits a otras ramas. Solo modificá archivos en el cwd actual.
Si necesitás cambiar de contexto, pará y preguntá.
Convierte el componente actual en un grid 3D con react-three-fiber.
```

---

## SLIDE 12 — Pilar 02 · Depuración de Runtime Real `[min 30–32]`

**Conector desde el slide anterior:**
> "Primer pilar resuelto: tenemos UI nueva en minutos. Pero ya saben cómo es esto — crear interfaz rápido no sirve de nada si después pasamos ocho horas debuggeando por qué algo se rompió."

**Puente al contenido (anticipación de los 4 bugs):**
> "Por eso el segundo pilar es el que más amo: depuración con runtime real. Y para mostrarlo, traje cuatro bugs reales sembrados a propósito en esta app. Cada uno representa una categoría distinta que no se pueden atrapar igual."

**Guion:**
> "Cuatro bugs reales, todos resueltos con el mismo flujo — el agente lee el runtime, no adivina.
>
> Los primeros dos son bugs estáticos clásicos: texto invisible y un typo en una URL. Pero los últimos dos son bugs de comportamiento que la revisión de código no puede atrapar: un bucle de re-renders y un cuello de botella de performance. Ahí es donde el MCP de DevTools cambia el juego."

**Señalá los cuatro bugs en pantalla:**
- Bug 2a: `components/hero.tsx` — pill invisible
- Bug 2b: `app/login/page.tsx` — login 404
- Bug 2c: `components/projects-filter-grid.tsx` — re-renders infinitos al filtrar
- Bug 2d: `components/project-card.tsx` — imágenes sin optimizar, LCP pésimo

---

## SLIDE 13 — Bug 2a · La píldora invisible `[min 32–36]`

**Conector desde el slide anterior:**
> "Arranquemos por el más engañoso de los cuatro — porque parece trivial, pero es el que más veces lo vi escaparse de los PR reviews."

**Puente al contenido (planteo visual):**
> "Es un bug clásico de CSS, del tipo que descubrís cuando un usuario te escribe 'hey, esa pestaña está vacía'. Lo bautizo: **la píldora invisible**."

### El bug
`hero.tsx` línea 10 — `text-white` sobre `bg-white`. Texto invisible.

### Flujo

**[min 32]** Cambiá al browser. Señalá la pill en el Hero:
> "¿Ven esa cápsula? Se ve vacía. Vamos a diagnosticarla."

**[min 32–33]** Abrí DevTools → Elements → inspeccioná la pill.
Mostrá en pantalla: `color: rgb(255,255,255)` + `background-color: rgb(255,255,255)`.

**[min 33–34]** En el inspector, cambiá `color` a `#080812` → el texto aparece en vivo.
> "Esto es la Persistencia Inversa. Modifiqué el DOM en vivo. Ahora el agente va a extraer ese estado y actualizar el código fuente."

**[min 34–36]** Lanzá el prompt:

---

### PROMPT PILLAR 2a — copia esto

```
En components/hero.tsx la "live status pill" tiene fondo blanco
(bg-white) y texto blanco (text-white). Verifiqué en DevTools:
color: rgb(255,255,255) sobre background-color: rgb(255,255,255).
Cambiá el texto a text-ink-950 para que sea legible.
Solo modificá esa línea.
```

---

**Resultado esperado:** Reemplaza `text-white` → `text-ink-950`. Browser muestra pill legible.

**Línea de impacto:**
> "El agente no adivinó. Tuvo el diagnóstico de DevTools. Por eso no tardó 20 minutos — tardó 20 segundos."

---

## SLIDE 14 — Bug 2b · 404 en el form de login `[min 36–41]`

**Conector desde el slide anterior:**
> "Ese fue un bug de lo que se ve. El próximo ya no está en el render — está en lo que se envía. Cambiamos de capa: pasamos del CSS al Network."

**Puente al contenido (planteo del síntoma):**
> "Tenemos un formulario de login que aparentemente funciona — uno completa los campos, hace click… y nada. El servidor responde 404. Vamos a desarmarlo."

### El bug
`app/login/page.tsx` línea 25 — `fetch('/api/lgoin')`. Typo. La ruta real: `/api/login`.

### Flujo

**[min 36]** Navegá a `http://localhost:3000/login`.

**[min 36–37]** Completá el form con cualquier dato → click *Sign in*.
El UI muestra: `"Server responded 404. Check the Network tab."` ✅

**[min 37–38]** Abrí DevTools → **Network** → filtrá por Fetch/XHR.
Mostrá al público: `POST /api/lgoin` → **404**. Hacé zoom para que se lea `lgoin` desde el fondo.

**[min 38]** Señalá en el editor: `app/api/login/route.ts` sí existe. Existe la ruta — el typo está en quién la llama.

**[min 38–41]** Lanzá el prompt con Chrome DevTools MCP activo:

---

### PROMPT PILLAR 2b — copia esto

```
El form de /login está dando 404 al enviar.
Revisé la pestaña Network en Chrome: la request va a POST /api/lgoin.
El árbol de rutas tiene app/api/login/route.ts — hay un typo.
Abrí app/login/page.tsx, encontrá el fetch con la URL errónea
y corregila a /api/login.
```

---

**Resultado esperado:** Agente edita línea 25. `/api/lgoin` → `/api/login`. Nuevo submit → 200 OK.

**Línea de impacto:**
> "Bugs de texto. Fáciles de ver una vez que sabés dónde mirar. Ahora vamos a lo que ninguna revisión de código puede atrapar."

---

## SLIDE 15 — Bug 2c · Re-renders infinitos en la grilla `[min 41–46]`

**Conector desde el slide anterior:**
> "Esos dos bugs anteriores — el de CSS y el del typo — los podríamos haber encontrado leyendo el código con paciencia. El próximo, no. Y acá es donde el MCP cambia el juego de verdad."

**Puente al contenido (anticipación del comportamiento):**
> "Este es un bug de comportamiento — solo existe en runtime, solo se activa con interacción del usuario, y la review más cuidadosa del PR jamás lo va a atrapar. Vean:"

### El bug
`components/projects-filter-grid.tsx` — `useEffect` depende de `filteredProjects`, que se computa inline sin `useMemo`. Al hacer click en cualquier filtro de categoría (no "all"), `filteredProjects` es un nuevo array en cada render → `setDisplayProjects` se llama en un bucle → React lanza `"Maximum update depth exceeded"`.

**El bug no se activa en carga inicial** — solo explota cuando el usuario toca los filtros.

### Flujo

**[min 41]** Navegá a `http://localhost:3000`. Mostrá la grilla de proyectos con los filtros por categoría.
> "Agregamos filtros — 'all', 'ai', 'web', etc. Parece que funciona."

**[min 42]** Abrí DevTools → pestaña **Console**. Confirmá que está limpia.

**[min 42]** Hacé click en el botón **"ai"**.

**[min 42]** La consola explota: decenas de `Warning: Maximum update depth exceeded`. La grilla se congela o desaparece.
> "Ahí está. El filtro rompió todo. Y fijense — esto no es un typo que ves en el editor. Esto es un bug de runtime puro."

**[min 43]** Señalá el árbol de componentes React en DevTools → Components tab.
> "El agente va a leer la consola con el MCP, analizar el árbol de componentes y encontrar por qué el useEffect está corriendo en un bucle."

**[min 43–46]** Lanzá el prompt:

---

### PROMPT PILLAR 2c — copia esto

```
Conéctate a localhost:3000 usando el MCP de Chrome DevTools.
Abrí la consola — vas a ver "Maximum update depth exceeded" repetido.
Analizá el componente ProjectsFilterGrid en components/projects-filter-grid.tsx.
El bug ocurre al hacer click en cualquier filtro de categoría.
Encontrá por qué el useEffect genera un bucle de re-renders,
corregilo sin cambiar la lógica de filtrado ni el UI.
```

---

**Qué hace el agente:**
1. Lee la consola vía MCP → identifica el error de React.
2. Abre `projects-filter-grid.tsx` → detecta que `filteredProjects` se computa inline y siempre crea un nuevo array.
3. Envuelve `filteredProjects` en `useMemo` con dependencias `[initialProjects, activeCategory]`.
4. Elimina el `useEffect` circular — `displayProjects` pasa a ser `filteredProjects` directo.

**Resultado esperado:** Los filtros funcionan sin bucle. La consola queda limpia.

**Línea de impacto:**
> "El agente leyó el runtime, no el código. Eso es lo que ninguna revisión de PR puede hacer por vos."

---

## SLIDE 16 — Bug 2d · Imágenes sin optimizar, LCP en el piso `[min 46–52]`

**Conector desde el slide anterior:**
> "Tres bugs resueltos: CSS, network y comportamiento. Falta el cuarto, que pertenece a otra categoría completamente — uno que la app 'funciona' pero pierde usuarios sin que nadie se entere."

**Puente al contenido (encuadre de performance):**
> "Es un bug de **performance**. No genera errores en la consola, no rompe ningún test, ningún linter lo marca. Pero hace que la página se sienta lenta y que el Core Web Vital esté en rojo. Veámoslo en Network."

### El bug
`components/project-card.tsx` — las 8 cover images se cargan con `<img>` crudo: sin `loading="lazy"`, sin `width`/`height`, sin `sizes`. Cada imagen pesa ~200–400 KB (800×450 px desde picsum.photos). La carga inicial descarga **~2 MB de imágenes** bloqueando el hilo principal y generando un LCP pésimo.

### Flujo

**[min 46]** Hacé hard-reload de `localhost:3000` con DevTools abierto en la pestaña **Network**.

**[min 46–47]** Mostrá al público el panel de Network:
> "¿Ven esas 8 requests de imagen al inicio? Todas se cargan al mismo tiempo, sin lazy loading, al tamaño completo. Eso mata el LCP."

**[min 47]** Switcheá a la pestaña **Performance** → hacé un profile rápido de la carga → mostrá el LCP marker.

**[min 47]** Abrí DevTools → pestaña **Lighthouse** → run sobre Desktop.
Mostrá el score bajo de Performance y el LCP en rojo.

> "El agente va a leer estas métricas reales del browser y decidir cómo optimizar. No un blog post de best practices — los números de *esta* app."

**[min 48–52]** Lanzá el prompt:

---

### PROMPT PILLAR 2d — copia esto

```
Revisá la pestaña Network y Performance en localhost:3000 usando el MCP.
Las tarjetas de proyectos cargan 8 imágenes en crudo (800×450 px, ~200 KB c/u)
sin lazy loading ni optimización — el LCP está en el piso.
Optimizá components/project-card.tsx reemplazando el <img> crudo
por el componente next/image con width, height y sizes adecuados.
También actualizá next.config.js para permitir el dominio picsum.photos
en images.remotePatterns.
```

---

**Qué hace el agente:**
1. Lee la pestaña Network vía MCP → confirma las 8 requests de imagen sin lazy loading.
2. Abre `project-card.tsx` → reemplaza `<img>` por `<Image>` de `next/image`.
3. Agrega `width={800}`, `height={450}`, `sizes="..."` y lazy loading automático.
4. Abre `next.config.js` → agrega `picsum.photos` a `images.remotePatterns`.

**Resultado esperado:** Reload → Network muestra imágenes lazy. LCP mejora visiblemente. Lighthouse sube.

**Línea de impacto:**
> "Cuatro bugs. Cuatro herramientas distintas de DevTools. Un solo agente leyendo el runtime en vivo. Eso es la diferencia entre copiar y pegar un stack trace y tener un sistema nervioso compartido."

---

## SLIDE 17 — Pilar 03 · Orquestación Avanzada `[min 50–52]`

**Conector desde el slide anterior:**
> "Cuatro bugs, cuatro categorías distintas, todos resueltos con el mismo principio: el agente lee el runtime en vivo. Pero hasta acá venimos trabajando con **un** agente. ¿Qué pasa si multiplicamos?"

**Puente al contenido (setup del momento WOW):**
> "El tercer pilar es el que más me gusta mostrar — y a la vez el más difícil de creer hasta que lo ven. Va más allá de paralelizar tareas: hablamos de agentes que diagnostican errores de integración leyendo el runtime, sin que yo les diga qué buscar."

**Guion — el setup del momento WOW:**
> "Acá viene mi parte favorita.
>
> Pero antes de lanzar los agentes, fijense en algo."

**[min 50]** Abrí DevTools → pestaña **Network**. Hacé un reload de `localhost:3000`.
Señalá la request a `/api/projects` → **500**.

> "¿Ven eso? La migración a Supabase está hecha — las tablas existen — pero el endpoint está roto. La grilla se muestra porque tenemos un fallback al mock, pero el endpoint real está dando 500.
>
> Ahora les voy a mostrar algo que va más allá de paralelizar tareas. El Agente 3a va a migrar la base de datos, levantar el endpoint, detectar que está roto usando la Network tab de Chrome, identificar el desajuste de tipos entre Supabase y el frontend, y corregirlo — sin que yo le diga nada de esto. Solo le digo el objetivo."

**Señalá el Inbox asíncrono:**
> "El Inbox es lo que hace posible esto. Si el agente se bloquea con un permiso de Supabase, levanta un ticket y yo lo apruebo cuando quiero. No hay chat lineal bloqueante."

---

## SLIDE 18 — Demo · Pilar 03 — Sincronización en Caliente `[min 52–58]`

**Conector desde el slide anterior:**
> "Vamos a la demo. Dos agentes, dos dominios completamente distintos, cero supervisión continua de mi parte. Yo solo defino objetivos."

**Puente al contenido (encuadre del experimento en vivo):**
> "Mientras ellos trabajan en paralelo, yo les voy narrando qué está pasando en cada panel — y al final compartimos los dos diffs al mismo tiempo. Mantengan un ojo en el Inbox: ahí es donde ven el cambio cultural."

### Pre-demo setup — verificá antes de subir al escenario

El 500 en `/api/projects` ya está en el código (`app/api/projects/route.ts`).
El fallback en `ProjectsGrid` asegura que la grilla muestre datos del mock mientras el endpoint esté roto.
Verificá en el browser antes de la demo que:
- `localhost:3000` → grilla visible (mock data)
- `localhost:3000/api/projects` → responde `{"error": "...", "hint": "..."}` con status 500

---

### 3a — Developer Agent (Supabase + fix autónomo) `[min 52–54]`

**[min 52]** Abrí el **Agent Manager**. Creá un nuevo sub-agente.

**[min 53]** Lanzá el prompt:

---

### PROMPT PILLAR 3a — sub-agente Supabase (copia esto)

```
Lee lib/mocks/projects.ts y lib/types.ts para entender el shape.
Usando el MCP de Supabase, creá una tabla projects (snake_case: 
tech_stack, cover_image, is_trending, más el enum category y votes).
Completá supabase/schema.sql con el SQL de la migración.
Siembra la tabla con los 8 registros del mock.
Actualizá app/api/projects/route.ts para que el GET lea de Supabase.

Una vez hecho, abrí el MCP de Chrome DevTools e inspeccioná
la pestaña Network en localhost:3000.
Si /api/projects devuelve un error, leé la respuesta, identificá
el desajuste entre los nombres de columnas que devuelve Supabase
(snake_case) y los que espera el frontend (camelCase Project type),
y corregí el mapeo en la API.
No termines hasta que /api/projects devuelva 200 con datos válidos.
```

---

**[min 54]** Comentá al público:
> "Ese agente tiene un objetivo: /api/projects debe devolver 200 con datos válidos. No le dije cómo arreglarlo. No le dije que hay un 500. Que lo encuentre solo. Lanzo el segundo."

---

### 3b — Marketing Agent (copywriting) `[min 54–55]`

**[min 54]** Aún en el Agent Manager, creá otro sub-agente.

**[min 55]** Lanzá el prompt:

---

### PROMPT PILLAR 3b — sub-agente copywriting (copia esto)

```
En components/about-section.tsx hay tres párrafos marcados como
[PLACEHOLDER PARAGRAPH]. Reescribilos como copy de marketing
pulido para una landing de showcase de hackathons.
Tono: cercano, levemente irreverente, pero serio sobre el oficio.
60–80 palabras por párrafo.
No toques los headings ni la estructura JSX.
```

---

**[min 55]** Ambos agentes corriendo. Mostrá el panel con los dos streams activos.

**[min 55–57]** Mostrá el Agent Manager con los dos trabajando en paralelo mientras comentás:
> "El Agente 3a está leyendo la pestaña Network en este momento. Ve el 500. Va a abrir el route.ts, va a comparar los nombres de columna con el tipo Project, y va a corregir el mapeo.
>
> El Agente 3b está generando el copy.
>
> Yo no estoy haciendo nada. Estoy orquestando."

**[min 57]** Agent 3a termina — mostrá su actividad:
- Leyó `/api/projects` → 500
- Leyó el error: `"undefined.slice"` + hint de snake_case
- Abrió `route.ts` → corrigió el mapeo (`tech_stack → techStack`, `is_trending → trending`, `cover_image → coverImage`)
- `/api/projects` → ahora 200

**[min 57–58]** Mostrá los dos diffs al mismo tiempo:
- Developer Agent: `supabase/schema.sql` lleno + `route.ts` con mapeo correcto → 200
- Marketing Agent: 3 párrafos placeholder → copy real

**Línea del momento WOW:**
> "Eso es la autonomía real. El agente no siguió un script — leyó el runtime, diagnosticó el error, trazó el desajuste de tipos entre la base de datos y el frontend, y lo resolvió. Eso es lo que convierte un agente en un colega."

---

## SLIDE 19 — La Transformación: Cómo cambia tu día a día `[min 58 si hay tiempo]`

**Conector desde el slide anterior:**
> "Tres pilares. Tres demos. Pero todo esto no vale nada si mañana lunes vuelven a la oficina y trabajan igual. Entonces déjenme bajarlo a su día a día concreto."

**Puente al contenido (resumen accionable):**
> "Esta tabla es la que más imprimo y pego al lado de mi monitor. Cinco situaciones cotidianas — antes y después. La última fila es la que importa de verdad."

**Guion (puede ir rápido si el tiempo apremia):**

| Situación | Antes | Con Antigravity IDE + MCP |
|---|---|---|
| Cuando hay un error | Copiás el mensaje, pegás al chat | El agente lee la consola directo |
| Flujo de trabajo | Un agente, vos bloqueado esperando | N agentes en paralelo, aprobás en el Inbox |
| Diseño de UI | Describís con palabras | Adjuntás referencia visual, el agente replica |
| Debugging | Inspeccionás DOM y red manual | El agente audita y te trae el root cause |
| **Tu rol** | **Escritor de sintaxis** | **Orquestador de Intenciones Agénticas** |

> "La última fila es la más importante. No es una mejora incremental — es un cambio de rol."

---

## SLIDE 20 — Cierre `[min 58]`

**Conector desde el slide anterior:**
> "Y ese cambio de rol — de escritor de sintaxis a orquestador — es exactamente lo que quiero que se lleven hoy. Si solo se acuerdan de una cosa de esta charla, que sea esto."

**Puente al contenido (síntesis):**
> "Toda la charla se resume en tres ideas. Las dejé acá para que las puedan fotografiar. Pero déjenme decirlas en voz alta una vez más."

**Los tres conceptos de cierre (marcados en el slide):**

1. **Validación Determinista en Runtime** — El agente escribe código *y lo prueba en el entorno real*. Se acabó programar a ciegas.
2. **Multiplicación del Output** — Un ingeniero dirige Producto, QA, Backend y Marketing de forma asíncrona y paralela.
3. **Gestión de Intenciones** — El futuro no es escribir sintaxis. Es dirigir sistemas que entienden qué querés construir.

**Frase de cierre (cítala literalmente):**
> "Este ecosistema marca el fin de la era del Corte y Confección de código y el inicio de la era de la Gestión de Intenciones Agénticas. El futuro no es escribir sintaxis — es dirigir sistemas."

---

## SLIDE 21 — Q&A `[tiempo restante]`

**Conector desde el slide anterior (cierre + apertura del Q&A):**
> "Hasta acá llega lo que yo traía preparado. El resto del tiempo es de ustedes — y sinceramente, las mejores ideas siempre salen de esta parte."

**Puente al contenido (invitación abierta):**
> "Pueden preguntarme lo que quieran: técnico, organizacional, sobre adopción en equipos, costos, riesgos. Lo único que les pido es: si tienen una crítica o una experiencia distinta, también la quiero escuchar. Vamos."

**Preguntas frecuentes + respuestas sugeridas:**

| Pregunta probable | Respuesta |
|---|---|
| "¿Qué pasa si el agente se equivoca?" | "Git está. El branch de respaldo también. El costo del error bajó enormemente." |
| "¿Funciona con Vercel/Railway?" | "Sí. El sub-agente 3a ya conectó Supabase. Un `git push` y es producción." |
| "¿Cuánto cuesta Antigravity IDE?" | "Tiene free tier. Para un hackathon de 48h el free es más que suficiente." |
| "¿El Chrome MCP funciona en producción?" | "Usás el URL de tu app deployada. Mismo flujo exacto." |
| "¿Funciona con otros modelos además de Gemini?" | "MCP es agnóstico al modelo. Claude, GPT-4o, Gemini — todos compatibles." |
| "¿Qué es MCP Codex?" | "Un proyecto mío que automatiza las mejores prácticas de MCP en nuevos proyectos. Está en mi GitHub." |

---

## Cheatsheet de prompts — ultra-rápido

> Para imprimir en hoja separada o sticky

### Pillar 1 · Screenshot → JSX
```
Toma la imagen pegada. Recréala en components/pitch-section.tsx
con Tailwind. Usa colores signal-* del tailwind.config.ts.
Conservá id="pitch".
```

### Bonus · Worktree 3D
```
Crea un worktree. NO hagas checkout, NO cambies de rama,
NO hagas commits a otras ramas. Solo modificá archivos en el cwd actual.
Si necesitás cambiar de contexto, pará y preguntá.
Convierte el componente actual en un grid 3D con react-three-fiber.
```

### Pillar 2a · CSS Bug (pill invisible)
```
En components/hero.tsx la pill tiene text-white sobre bg-white.
DevTools muestra color: rgb(255,255,255). Cambialo a text-ink-950.
```

### Pillar 2b · Network Bug (404 en login)
```
El form de /login hace POST a /api/lgoin → 404.
La ruta real es /api/login. Corregí el typo en app/login/page.tsx.
```

### Pillar 2c · Re-renders infinitos (filtro de grilla)
```
Conéctate a localhost:3000 usando el MCP de Chrome DevTools.
Abrí la consola — vas a ver "Maximum update depth exceeded" repetido.
Analizá ProjectsFilterGrid en components/projects-filter-grid.tsx.
Encontrá por qué el useEffect genera un bucle de re-renders al filtrar
y corregilo sin cambiar la lógica de filtrado ni el UI.
```

### Pillar 2d · Images sin optimizar (LCP)
```
Revisá la pestaña Network y Performance en localhost:3000 usando el MCP.
Las tarjetas cargan 8 imágenes crudas (~200 KB c/u) sin lazy loading.
Optimizá project-card.tsx con next/image y width, height, sizes correctos.
Actualizá next.config.js para permitir picsum.photos en remotePatterns.
```

### Pillar 3a · Developer Agent — Supabase + fix autónomo
```
Lee mocks/projects.ts + types.ts. Con el MCP de Supabase creá tabla
projects (snake_case), llenás schema.sql, siembra 8 registros,
actualizá route.ts. Luego abrí DevTools MCP → Network en localhost:3000.
Si /api/projects da 500, identificá el desajuste snake_case↔camelCase
y corregí el mapeo. No termines hasta que devuelva 200 con datos válidos.
```

### Pillar 3b · Marketing Agent — copywriting
```
En components/about-section.tsx reescribí los 3 párrafos [PLACEHOLDER]
como copy de marketing. Tono cercano, 60-80 palabras c/u. No toques headings.
```

---

## Rollback rápido entre demos

Si algo sale mal en escena:

```bash
git stash
git checkout talk-checkpoint
pnpm dev
```

O más rápido — pedile al agente principal:

```
Revertí components/hero.tsx al último commit sin tocar nada más.
```

---

## Hallazgos del Chrome DevTools MCP (verificado pre-evento)

> Inspeccionado el **18 mayo 2026** con Chrome DevTools MCP en `localhost:3003`.
> Confirmá estos estados el día del evento antes de subir al escenario.

| Hallazgo | Archivo | Línea | Estado |
|---|---|---|---|
| `text-white` sobre `bg-white` en la pill | `components/hero.tsx` | 10 | ✅ Bug presente |
| Fetch a `/api/lgoin` (typo) | `app/login/page.tsx` | 25 | ✅ Bug presente |
| Sección `#pitch` vacía | `components/pitch-section.tsx` | — | ✅ Stub listo |
| 3 párrafos `[PLACEHOLDER PARAGRAPH]` | `components/about-section.tsx` | 34,40,45 | ✅ Listo |
| Grid con 8 proyectos hardcodeados | `lib/mocks/projects.ts` | — | ✅ Mock listo para migrar |
| `supabase/schema.sql` vacío | `supabase/schema.sql` | — | ✅ Stub listo |
| `/api/projects` devuelve 500 | `app/api/projects/route.ts` | — | ✅ Bug snake_case presente |
| Grilla se muestra vía fallback al mock | `components/projects-grid.tsx` | 24–27 | ✅ Fallback activo |
| Pill confirmada sin color accesible por a11y tree | snapshot uid=2_17 | — | ✅ Fix también mejora a11y |

---

## Tips de presentación

- **Leé los prompts en voz alta.** La audiencia necesita escuchar cómo te comunicás con el agente — es parte del aprendizaje.
- **No minimices errores en vivo.** Si el agente falla algo, corregilo en vivo. Es la demostración más honesta del flujo real.
- **Zoom al Network tab.** Cuando llegues al Pillar 2b, el Network tab debe estar a > 120% de zoom — el typo `lgoin` tiene que leerse desde el fondo de la sala.
- **MCP pre-calentado.** Si la red del evento es inestable, tenés los servidores MCP levantados localmente. `npx` puede tardar 20 s en frío y matar el ritmo.
- **Mouse visible.** Cursor grande + resaltado de clics (Accessibility settings o Keystroke Pro en Mac).
- **Slides en `/slides`.** La app tiene las slides en `localhost:3000/slides`. Podés usarlas como transiciones entre bloques — navegás con `←` `→` o `Space`.

---

## Orden exacto de slides (21 en total)

| # | Slide | Bloque |
|---|---|---|
| 1 | Cover | Intro |
| 2 | About Me | Intro |
| 3 | Los agentes son ciegos | El problema |
| 4 | ¿Qué es un Agente? | Conceptos |
| 5 | ¿Qué es MCP? | Conceptos |
| 6 | Closed-Loop Execution | La solución |
| 7 | ¿Por qué Antigravity IDE? | Diferenciación |
| 8 | Antes vs Ahora | Tabla técnica |
| 9 | Tres reflejos | Preview |
| 10 | Pilar 01 Intro | Demo 1 |
| 11 | Demo Pilar 01 | Demo 1 |
| 12 | Pilar 02 Intro | Demo 2 |
| 13 | Demo 2a — CSS Bug | Demo 2 |
| 14 | Demo 2b — Network Bug | Demo 2 |
| 15 | Demo 2c — Re-renders infinitos | Demo 2 |
| 16 | Demo 2d — Images / LCP | Demo 2 |
| 17 | Pilar 03 Intro | Demo 3 |
| 18 | Demo Pilar 03 | Demo 3 |
| 19 | La Transformación | Cierre |
| 20 | Closing | Cierre |
| 21 | Q&A | Final |

---

*Guía actualizada con storytelling framework y slides de `app/slides/page.tsx` · Chrome DevTools MCP · 18 mayo 2026*
