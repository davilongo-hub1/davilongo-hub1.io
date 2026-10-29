window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.diseno = `
<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>🎨</span>
        <span>Objetivo de esta sección</span>
    </div>
    <p class="mb-0">Organiza las medidas de seguridad en un plan comprensible. Debes mostrar qué proteges, cómo lo proteges y cómo comprobarás que funciona.</p>
</div>

<h3>5.1. Inventario de activos</h3>
<table>
    <thead>
        <tr><th>Tipo</th><th>Activo</th><th>Riesgo principal</th></tr>
    </thead>
    <tbody>
        <tr><td>Equipo</td><td>Portátil de dirección</td><td>Robo o pérdida.</td></tr>
        <tr><td>Equipo</td><td>Dos portátiles de aula</td><td>Malware por descargas.</td></tr>
        <tr><td>Cuenta</td><td>Correo compartido</td><td>Acceso no autorizado.</td></tr>
        <tr><td>Dato</td><td>Matrículas y contactos</td><td>Fuga de información personal.</td></tr>
        <tr><td>Servicio</td><td>Carpeta en la nube</td><td>Pérdida o borrado accidental.</td></tr>
    </tbody>
</table>

<h3>5.2. Matriz de riesgos sencilla</h3>
<p>Valora cada riesgo con una escala de 1 a 3 (bajo, medio, alto) y calcula la prioridad:</p>
<table>
    <thead>
        <tr><th>Riesgo</th><th>Probabilidad</th><th>Impacto</th><th>Prioridad</th></tr>
    </thead>
    <tbody>
        <tr><td>Phishing al correo</td><td>3</td><td>3</td><td>Alta</td></tr>
        <tr><td>Pérdida de documentos</td><td>2</td><td>3</td><td>Alta</td></tr>
        <tr><td>Robo de portátil</td><td>1</td><td>3</td><td>Media</td></tr>
        <tr><td>Contraseña débil</td><td>3</td><td>2</td><td>Alta</td></tr>
    </tbody>
</table>

<h3>5.3. Controles propuestos</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-3">🔐 Acceso</h4>
        <ul class="space-y-2 text-sm">
            <li>Gestor de contraseñas para el equipo.</li>
            <li>Doble factor en correo y nube.</li>
            <li>Una cuenta por persona.</li>
        </ul>
    </div>
    <div class="p-6 bg-amber-50 rounded-xl border border-amber-100">
        <h4 class="font-bold text-amber-800 mb-3">💾 Datos</h4>
        <ul class="space-y-2 text-sm">
            <li>Copia local en disco externo.</li>
            <li>Copia en la nube autorizada.</li>
            <li>Prueba de restauración trimestral.</li>
        </ul>
    </div>
    <div class="p-6 bg-emerald-50 rounded-xl border border-emerald-100">
        <h4 class="font-bold text-emerald-800 mb-3">🛡️ Equipos</h4>
        <ul class="space-y-2 text-sm">
            <li>Actualizaciones automáticas.</li>
            <li>Antivirus y firewall activos.</li>
            <li>Bloqueo de pantalla.</li>
        </ul>
    </div>
    <div class="p-6 bg-rose-50 rounded-xl border border-rose-100">
        <h4 class="font-bold text-rose-800 mb-3">📣 Personas</h4>
        <ul class="space-y-2 text-sm">
            <li>Sesión breve sobre phishing.</li>
            <li>Tarjeta de actuación impresa.</li>
            <li>Canal claro para avisar de incidentes.</li>
        </ul>
    </div>
</div>

<h3>5.4. Esquema de copias 3-2-1</h3>
<ul class="list-disc pl-6 space-y-2">
    <li><strong>3 copias:</strong> original, disco externo y nube.</li>
    <li><strong>2 soportes distintos:</strong> disco y servicio en la nube.</li>
    <li><strong>1 copia fuera del local:</strong> la nube o un disco guardado en otro lugar.</li>
</ul>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Error frecuente</span>
    </div>
    <p class="mb-0">No basta con copiar archivos: hay que comprobar que se pueden recuperar. Una copia no probada es solo una esperanza.</p>
</div>
`;
