window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.viabilidad = `
<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📈</span>
        <span>Objetivo de esta sección</span>
    </div>
    <p class="mb-0">Comprueba que las medidas propuestas son posibles con los recursos reales de la academia.</p>
</div>

<h3>3.1. Viabilidad técnica</h3>
<table>
    <thead>
        <tr><th>Recurso</th><th>Situación</th><th>¿Es suficiente?</th></tr>
    </thead>
    <tbody>
        <tr><td>Portátiles y sobremesa</td><td>Windows 10/11 actualizado</td><td>Sí, con configuración básica.</td></tr>
        <tr><td>Correo y nube</td><td>Cuenta compartida</td><td>Sí, pero debe separarse por personas.</td></tr>
        <tr><td>Conexión a internet</td><td>Fibra doméstica</td><td>Sí, para copias y 2FA.</td></tr>
        <tr><td>Almacenamiento externo</td><td>Disco USB de 1 TB</td><td>Sí, para una copia local.</td></tr>
    </tbody>
</table>

<h3>3.2. Viabilidad económica</h3>
<table>
    <thead>
        <tr><th>Concepto</th><th>Coste</th><th>Alternativa gratuita</th></tr>
    </thead>
    <tbody>
        <tr><td>Gestor de contraseñas</td><td>0 €</td><td>Bitwarden o KeePassXC.</td></tr>
        <tr><td>Doble factor</td><td>0 €</td><td>Aplicación autenticadora del móvil.</td></tr>
        <tr><td>Copias de seguridad</td><td>0 €</td><td>Disco USB y carpeta en la nube.</td></tr>
        <tr><td>Antivirus y firewall</td><td>0 €</td><td>Herramientas integradas en Windows.</td></tr>
        <tr><td>Concienciación</td><td>0 €</td><td>Material de INCIBE y sesión interna.</td></tr>
    </tbody>
</table>

<h3>3.3. Viabilidad legal</h3>
<ul class="list-disc pl-6 space-y-2">
    <li>Los datos del estudiantado son personales y deben protegerse.</li>
    <li>No se deben enviar listados de matrícula por correo sin cifrar.</li>
    <li>Hay que limitar el acceso a quien realmente lo necesita.</li>
    <li>Las copias deben guardarse en lugares autorizados y seguros.</li>
</ul>

<h3>3.4. DAFO</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-emerald-50 rounded-xl border border-emerald-100">
        <h4 class="font-bold text-emerald-800 mb-3">💪 Fortalezas</h4>
        <ul class="space-y-2 text-sm">
            <li>Equipo pequeño y cercano.</li>
            <li>Herramientas gratuitas suficientes.</li>
            <li>Problema acotado y realista.</li>
        </ul>
    </div>
    <div class="p-6 bg-amber-50 rounded-xl border border-amber-100">
        <h4 class="font-bold text-amber-800 mb-3">⚠️ Debilidades</h4>
        <ul class="space-y-2 text-sm">
            <li>Poca cultura de seguridad.</li>
            <li>Cuenta de correo compartida.</li>
            <li>Sin presupuesto específico.</li>
        </ul>
    </div>
    <div class="p-6 bg-blue-50 rounded-xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-3">🚀 Oportunidades</h4>
        <ul class="space-y-2 text-sm">
            <li>Mejorar la confianza de las familias.</li>
            <li>Reducir el riesgo de fraude.</li>
            <li>Dejar un protocolo reutilizable.</li>
        </ul>
    </div>
    <div class="p-6 bg-rose-50 rounded-xl border border-rose-100">
        <h4 class="font-bold text-rose-800 mb-3">🧱 Amenazas</h4>
        <ul class="space-y-2 text-sm">
            <li>Phishing cada vez más creíble.</li>
            <li>Pérdida de datos por robo o avería.</li>
            <li>Dependencia de una sola persona.</li>
        </ul>
    </div>
</div>

<div class="callout callout-success my-6">
    <div class="callout-title">
        <span>✅</span>
        <span>Orientaciones para el profesorado</span>
    </div>
    <p class="mb-0">Pide al alumnado que justifique cada coste y que distinga entre medidas imprescindibles y mejoras futuras. La viabilidad debe ser creíble, no un ejercicio teórico.</p>
</div>
`;
