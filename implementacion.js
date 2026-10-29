window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.implementacion = `
<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>💻</span>
        <span>Objetivo de esta sección</span>
    </div>
    <p class="mb-0">Pon en práctica las medidas con un orden lógico. Documenta cada cambio para que la academia pueda repetirlo.</p>
</div>

<h3>6.1. Tareas iniciales propuestas</h3>
<ol class="list-decimal pl-6 space-y-2">
    <li>Entrevistar a la dirección para confirmar datos, cuentas y prioridades.</li>
    <li>Crear el inventario de equipos, cuentas y documentos.</li>
    <li>Revisar contraseñas y activar el doble factor en las cuentas críticas.</li>
    <li>Configurar actualizaciones automáticas y comprobar el antivirus.</li>
    <li>Preparar el disco externo y la carpeta de copias.</li>
    <li>Diseñar la tarjeta de incidentes y la sesión de concienciación.</li>
</ol>

<h3>6.2. Fases del proyecto</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
        <h4 class="font-bold text-slate-700 mb-3">1️⃣ Diagnóstico</h4>
        <p class="text-sm mb-0">Inventario, entrevistas y matriz de riesgos.</p>
    </div>
    <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
        <h4 class="font-bold text-slate-700 mb-3">2️⃣ Protección</h4>
        <p class="text-sm mb-0">Contraseñas, 2FA, actualizaciones y antivirus.</p>
    </div>
    <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
        <h4 class="font-bold text-slate-700 mb-3">3️⃣ Copias</h4>
        <p class="text-sm mb-0">Configuración, primera copia y prueba de restauración.</p>
    </div>
    <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
        <h4 class="font-bold text-slate-700 mb-3">4️⃣ Personas</h4>
        <p class="text-sm mb-0">Sesión contra el phishing y tarjeta de actuación.</p>
    </div>
    <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
        <h4 class="font-bold text-slate-700 mb-3">5️⃣ Pruebas</h4>
        <p class="text-sm mb-0">Comprobación de accesos, copias y visualización de materiales.</p>
    </div>
    <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
        <h4 class="font-bold text-slate-700 mb-3">6️⃣ Cierre</h4>
        <p class="text-sm mb-0">Informe final, manual de mantenimiento y presentación.</p>
    </div>
</div>

<h3>6.3. Ejemplo de copia con robocopy</h3>
<p>En Windows puedes usar una orden sencilla para copiar una carpeta a un disco externo. Adapta las rutas a tu caso:</p>
<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">robocopy "C:\\Academia\\Documentos" "E:\\Copias\\Documentos" /MIR /R:2 /W:5 /LOG:"E:\\Copias\\copia.log"</pre>
</div>
<ul class="list-disc pl-6 space-y-2">
    <li><strong>/MIR:</strong> mantiene la copia igual que la carpeta original.</li>
    <li><strong>/R:2:</strong> reintenta dos veces si hay un error.</li>
    <li><strong>/W:5:</strong> espera cinco segundos entre intentos.</li>
    <li><strong>/LOG:</strong> guarda un registro de la copia.</li>
</ul>

<h3>6.4. Entregables</h3>
<table>
    <thead>
        <tr><th>Entregable</th><th>Formato</th><th>Contenido mínimo</th></tr>
    </thead>
    <tbody>
        <tr><td>Inventario</td><td>Hoja de cálculo</td><td>Equipos, cuentas, datos y responsables.</td></tr>
        <tr><td>Matriz de riesgos</td><td>Tabla</td><td>Riesgos, probabilidad, impacto y prioridad.</td></tr>
        <tr><td>Plan de protección</td><td>Documento</td><td>Medidas, pasos y evidencias.</td></tr>
        <tr><td>Plan de copias</td><td>Documento</td><td>Frecuencia, soportes y prueba de restauración.</td></tr>
        <tr><td>Material de concienciación</td><td>Infografía</td><td>Señales de phishing y qué hacer.</td></tr>
        <tr><td>Tarjeta de incidentes</td><td>PDF o impresión</td><td>Pasos inmediatos y contactos.</td></tr>
    </tbody>
</table>

<div class="callout callout-success my-6">
    <div class="callout-title">
        <span>✅</span>
        <span>Orientaciones para el profesorado</span>
    </div>
    <p class="mb-0">Revisa cada fase con una lista de comprobación breve. Prioriza que el alumnado justifique sus decisiones y documente lo que ha probado, aunque el resultado técnico sea sencillo.</p>
</div>
`;
