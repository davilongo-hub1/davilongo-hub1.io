window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.requisitos = `
<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📋</span>
        <span>Objetivo de esta sección</span>
    </div>
    <p class="mb-0">Define qué debe conseguir el plan de seguridad y qué límites tiene. Un alcance claro evita prometer más de lo posible.</p>
</div>

<h3>4.1. Personas usuarias</h3>
<table>
    <thead>
        <tr><th>Perfil</th><th>Necesidad</th><th>Responsabilidad</th></tr>
    </thead>
    <tbody>
        <tr><td>Dirección de la academia</td><td>Proteger los datos y la reputación.</td><td>Aprobar el plan y facilitar recursos.</td></tr>
        <tr><td>Profesorado</td><td>Acceder a sus materiales sin riesgos.</td><td>Usar contraseñas y 2FA correctamente.</td></tr>
        <tr><td>Administración</td><td>Gestionar matrículas y pagos.</td><td>No compartir datos innecesarios.</td></tr>
        <tr><td>Estudiantado y familias</td><td>Confiar en que sus datos están protegidos.</td><td>Informar de correos sospechosos.</td></tr>
    </tbody>
</table>

<h3>4.2. Requisitos funcionales</h3>
<ul class="list-disc pl-6 space-y-2">
    <li>Inventariar equipos, cuentas y datos personales.</li>
    <li>Separar las cuentas de correo por persona.</li>
    <li>Activar doble factor en correo y nube.</li>
    <li>Programar copias de seguridad automáticas.</li>
    <li>Elaborar una tarjeta de actuación ante incidentes.</li>
    <li>Diseñar una acción formativa breve sobre phishing.</li>
</ul>

<h3>4.3. Requisitos no funcionales</h3>
<ul class="list-disc pl-6 space-y-2">
    <li><strong>Sencillez:</strong> el equipo debe poder aplicar el plan sin ayuda técnica diaria.</li>
    <li><strong>Bajo coste:</strong> priorizar herramientas gratuitas o ya disponibles.</li>
    <li><strong>Legalidad:</strong> cumplir el RGPD y la LOPDGDD.</li>
    <li><strong>Continuidad:</strong> las copias deben poder restaurarse.</li>
    <li><strong>Accesibilidad:</strong> las instrucciones deben ser claras para todo el equipo.</li>
</ul>

<h3>4.4. Fuera del alcance</h3>
<div class="callout callout-warning">
    <div class="callout-title">
        <span>🚫</span>
        <span>Lo que no incluye</span>
    </div>
    <ul class="list-disc pl-6 space-y-2 mb-0">
        <li>Auditoría completa de seguridad o test de intrusión.</li>
        <li>Montaje de un servidor propio o cortafuegos hardware.</li>
        <li>Implantación de ISO 27001.</li>
        <li>Desarrollo de una aplicación de gestión de incidentes.</li>
    </ul>
</div>

<h3>4.5. Tarea: prioriza</h3>
<p>Clasifica los requisitos en <strong>imprescindible</strong>, <strong>deseable</strong> y <strong>fuera del alcance</strong>. Explica qué harías primero si solo pudieras aplicar dos medidas.</p>

<div class="callout callout-success my-6">
    <div class="callout-title">
        <span>💡</span>
        <span>Sugerencia para el alumnado</span>
    </div>
    <p class="mb-0">Pregunta a una persona de la academia qué le resultaría más fácil de usar. La seguridad que no se usa no protege nada.</p>
</div>
`;
