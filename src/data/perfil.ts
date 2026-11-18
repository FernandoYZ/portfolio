// Site content. Keep it truthful: every entry must be backed by real experience.

export const persona = {
  nombre: 'Fernando Yovera Zavala',
  rol: 'Quality Engineer · QA Automation',
  frase: 'Empecé construyendo software y hoy me dedico a probarlo, sin dejar de construirlo.',
  ubicacion: 'Lima, Perú',
  formacion: 'Ingeniería de Sistemas',
  descripcion:
    'Quality Engineer enfocado en QA Automation: pruebas de APIs, E2E, contratos y seguridad, con experiencia construyendo y desplegando software.',
};

export const contacto = [
  { etiqueta: 'Correo', valor: 'fernandozavala266@gmail.com', href: 'mailto:fernandozavala266@gmail.com' },
  { etiqueta: 'LinkedIn', valor: 'fernando-yovera-zavala', href: 'https://www.linkedin.com/in/fernando-yovera-zavala-066904283/' },
  { etiqueta: 'GitHub', valor: 'FernandoYZ', href: 'https://github.com/FernandoYZ' },
];

export const recorrido = [
  {
    periodo: '2023 — 2024',
    etapa: 'Desarrollo backend',
    detalle:
      'Construí APIs en Laravel y Node.js, procedimientos almacenados en MySQL y despliegues continuos con GitHub Actions. Ahí aprendí cómo fallan los sistemas: memoria, bloqueos y datos inconsistentes.',
  },
  {
    periodo: '2024',
    etapa: 'Primeros pasos en QA',
    detalle:
      'Colecciones automatizadas en Postman, ejecución de pruebas en CI, ambientes aislados con Docker y escenarios en Gherkin.',
  },
  {
    periodo: '2025',
    etapa: 'Calidad en el sector salud',
    detalle:
      'Ciclos de smoke, regresión y pruebas funcionales para un sistema hospitalario, y análisis de consultas SQL sobre tablas de más de 900 000 registros.',
  },
  {
    periodo: '2026 — hoy',
    etapa: 'QA Automation en el sector bancario',
    detalle:
      'Regresión automatizada de microservicios con Karate DSL, validación de contratos OpenAPI, pruebas DAST con OWASP ZAP y Continuous Testing. En paralelo, desarrollo y mantengo una aplicación en producción con Rust y SQLite.',
  },
];

export const filosofia = [
  {
    titulo: 'La calidad empieza en el diseño',
    detalle: 'Un defecto encontrado en un contrato o en un criterio de aceptación cuesta menos que uno encontrado en producción.',
  },
  {
    titulo: 'Probar comportamiento, no pasos',
    detalle: 'Una prueba vale por la regla que protege. Si falla, tiene que decir qué se rompió y por qué.',
  },
  {
    titulo: 'Automatizar con criterio',
    detalle: 'Mantenible, reproducible y en cualquier ambiente. Una suite en la que nadie confía es peor que no tener suite.',
  },
];

export const enfoque = [
  {
    area: 'Quality Engineering',
    nota: 'Foco principal',
    puntos: [
      'Escenarios positivos, negativos y casos límite a partir de las reglas de negocio.',
      'Automatización de APIs REST y aplicaciones web, incluyendo validaciones responsive.',
      'Validación de contratos, esquemas JSON, datos y permisos por rol.',
      'Regresión, integración, E2E, concurrencia y carga.',
      'Evidencias, trazabilidad y análisis de defectos hasta su causa.',
    ],
  },
  {
    area: 'Software Engineering',
    nota: 'Complemento',
    puntos: [
      'Desarrollo backend y aplicaciones server-first.',
      'Diseño y validación de bases de datos SQL.',
      'Linux, despliegues y CI/CD con GitHub Actions.',
    ],
  },
];

export const stack = [
  {
    nivel: 'Calidad',
    grupos: [
      { nombre: 'Automatización', items: ['Playwright', 'Karate DSL', 'Cucumber', 'Gherkin'] },
      { nombre: 'APIs y contratos', items: ['Postman', 'Bruno', 'OpenAPI', 'JSON Schema'] },
      { nombre: 'Seguridad', items: ['OWASP ZAP'] },
      { nombre: 'Gestión', items: ['Jira', 'Xray'] },
    ],
  },
  {
    nivel: 'Ingeniería',
    grupos: [
      { nombre: 'Lenguajes', items: ['TypeScript', 'Java', 'Go', 'Rust', 'SQL'] },
      { nombre: 'Bases de datos', items: ['SQLite', 'PostgreSQL', 'SQL Server', 'MySQL'] },
      { nombre: 'Entrega', items: ['GitHub Actions', 'Docker', 'Linux', 'Bash'] },
    ],
  },
];
