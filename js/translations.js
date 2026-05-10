const translations = {
  en: {
    // ── Navigation ───────────────────────────────────────────────────────
    nav_about:        "About",
    nav_services:     "Services",
    nav_work:         "Work",
    nav_certs:        "Certifications",
    nav_articles:     "Articles",
    nav_cta:          "Get In Touch",
    lang_label:       "Select language",

    // ── Page meta ────────────────────────────────────────────────────────
    page_title:   "Abel Fresnillo — Director of Architecture & Cloud Strategy Advisor",
    meta_desc:    "Abel Fresnillo helps organizations design cloud and AI architectures that deliver measurable business outcomes. Director of Architecture at CapTech Ventures. CISSP, TOGAF 10, 7× AWS certified.",

    articles_page_title: "Insights & Articles — Abel Fresnillo",
    articles_meta_desc:  "Practical perspectives on cloud architecture, agentic AI, enterprise security, and modern software delivery — by Abel Fresnillo.",

    // ── Hero ─────────────────────────────────────────────────────────────
    hero_eyebrow:      "Director of Architecture · Cloud & AI Strategy",
    hero_tagline:      "I help organizations navigate their most complex technology challenges — from cloud modernization to agentic AI — and turn them into measurable business outcomes.",
    hero_cta_primary:  "Let's Talk",
    hero_cta_secondary:"View My Work",

    // ── Proof strip ──────────────────────────────────────────────────────
    proof_label: "Experience across",

    // ── About ────────────────────────────────────────────────────────────
    about_tag:     "About",
    about_heading: "Bridging strategy and engineering since 2005",
    about_lead:    "I've spent 15+ years at the intersection of technology strategy and delivery — from writing my first web services at Softtek in Monterrey, Mexico, to leading cloud and AI architecture engagements for Fortune 500 banks and insurance companies.",
    about_p1:      "What sets my work apart is that I bridge the gap between executive vision and engineering reality. I've held roles on both sides: as a hands-on senior engineer who led Lowe's first cloud-native application on Microsoft Azure, and as a Senior Solutions Architect at AWS advising enterprises on their most complex cloud challenges.",
    about_p2:      "Today I work directly with clients to design technology solutions that address complex business challenges — from agentic AI platforms that automate customer operations, to security architectures that eliminate critical vulnerabilities. I bring both the technical depth to get the details right and the strategic perspective to ensure the work drives real business value.",
    stat_years:     "Years of experience",
    stat_certs:     "Professional certifications",
    stat_community: "Engineers in community of practice",

    // ── Services ─────────────────────────────────────────────────────────
    services_tag: "Services",
    services_heading: "How I can help",
    services_sub: "I work with technology leaders to solve complex architecture challenges — from initial strategy through hands-on delivery.",

    s1_title: "Cloud Architecture & Strategy",
    s1_desc:  "Design and optimize AWS architectures aligned to the Well-Architected Framework — covering reliability, security, cost efficiency, and performance at scale.",

    s2_title: "Agentic AI Solutions",
    s2_desc:  "Design and implement agentic AI workflows using AWS Bedrock, Claude, and modern LLM tooling — from customer-facing automation to internal knowledge management systems.",

    s3_title: "Enterprise Security Architecture",
    s3_desc:  "Security-by-design guidance backed by CISSP certification — covering threat modeling, identity & access management, compliance posture, and vulnerability remediation.",

    s4_title: "Digital Modernization",
    s4_desc:  "Assess and modernize legacy systems using cloud-native patterns — reducing deployment friction, improving reliability, and eliminating the technical debt that slows delivery.",

    s5_title: "Technical Leadership Advisory",
    s5_desc:  "Coaching and advisory for technology organizations — from architecture governance and certification programs, to building engineering communities of practice that accelerate modern delivery.",

    // ── Featured Work ────────────────────────────────────────────────────
    work_tag:     "Featured Work",
    work_heading: "Impact across industries",
    work_sub:     "A selection of engagements that delivered measurable business outcomes.",

    work_label_challenge: "Challenge",
    work_label_solution:  "Solution",

    work1_sector:        "Insurance",
    work1_title:         "Agentic AI Platform for Policy Inquiries",
    work1_challenge:     "High inbound call volume for routine policy inquiries was overloading live agents, increasing operational costs and degrading customer experience.",
    work1_solution:      "Designed an end-to-end agentic AI platform integrating Amazon Connect, Lex, Bedrock (Claude Haiku), and AgentCore to automate customer call flows with natural language understanding.",
    work1_outcome_label: "Targeted call deflection from live agents",

    work2_sector:        "Banking",
    work2_title:         "Permissions API Modernization",
    work2_challenge:     "A legacy permissions system serving 100+ internal application teams harbored a privilege escalation vulnerability and accumulated significant technical debt.",
    work2_solution:      "Designed and implemented a modernized permissions API layer with proper access controls and clean integration contracts, enabling safe incremental team migrations.",
    work2_outcome_label: "Application teams protected — privilege escalation vulnerability eliminated",

    work3_sector:        "Financial Services",
    work3_title:         "DDoS Crisis Response",
    work3_challenge:     "An active DDoS attack caused a 4-hour outage affecting the institution's main website and online banking services, threatening customer trust and regulatory standing.",
    work3_solution:      "Led rapid DDoS mitigation response coordinating across network, security, and application teams to implement AWS Shield and WAF protection measures and restore service.",
    work3_outcome_value: "Same day",
    work3_outcome_label: "Full service restored — 4-hour outage resolved within business hours",

    work4_sector:        "Retail",
    work4_title:         "Cloud-Native Platform Modernization",
    work4_challenge:     "Two-month release cycles and a high change failure rate were preventing the engineering team from responding to business needs at pace.",
    work4_solution:      "Led delivery of the company’s first cloud-native application on Microsoft Azure — a product recommendations platform enabling “Customers also bought” on Lowes.com, establishing modern DevOps practices across 12 engineers.",
    work4_outcome_label: "Faster deployments — from 2-month to 1-week cycles, 50% reduction in lead time for changes",

    // ── Certifications ───────────────────────────────────────────────────
    cert_tag:     "Certifications",
    cert_heading: "Credentials that back the work",
    cert_sub:     "10 active certifications across enterprise security, cloud architecture, and business strategy.",
    cert_verify:  "Verify credential",

    cert_cissp_note:  "The global gold standard in information security — demonstrating expertise across security architecture, identity & access management, risk management, and 5 additional CISSP domains.",
    cert_togaf_note:  "Enterprise architecture framework certification enabling structured, standards-based architecture governance and decision-making across large organizations.",
    cert_group_aws:   "AWS Certifications",
    cert_group_fin:   "Business & Finance",
    cert_finance_note:"Graduate-level specialization covering financial analysis, capital budgeting, and business strategy — enabling more effective communication with finance stakeholders and C-suite decision-makers.",

    // ── Articles section ─────────────────────────────────────────────────
    articles_tag:       "Insights",
    articles_heading:   "Perspectives on technology that matters",
    articles_sub:       "Practical writing on cloud architecture, agentic AI, enterprise security, and modern software delivery — from the field.",
    coming_soon_title:  "Articles launching soon",
    coming_soon_body:   "I’m writing practical, field-tested perspectives on the topics I work with every day. Here’s what’s coming:",
    topic1:             "Agentic AI in Financial Services",
    topic2:             "AWS Well-Architected for Regulated Industries",
    topic3:             "Security Architecture Patterns for the Enterprise",
    topic4:             "Cloud Migration Lessons from the Field",
    topic5:             "Building Engineering Communities of Practice",
    articles_btn:       "Go to Articles",

    // ── Articles page specific ───────────────────────────────────────────
    articles_back:        "Back to main site",
    articles_hero_heading:"Perspectives on technology that matters",
    articles_hero_sub:    "Practical writing on cloud architecture, agentic AI, enterprise security, and modern software delivery — from the field.",
    articles_notify_text: "Want to be notified when articles go live?",
    articles_notify_btn:  "Send me a note",
    articles_footer_back: "Back to main site",

    // ── Footer / Contact ─────────────────────────────────────────────────
    footer_heading:      "Ready to talk about your next project?",
    footer_sub:          "Whether you’re planning a cloud transformation, exploring AI capabilities, or navigating a critical architecture decision — I’m happy to have a conversation.",
    footer_email_btn:    "Send an Email",
    footer_linkedin_btn: "Connect on LinkedIn",
    footer_copyright:    "© 2026 Abel Fresnillo. All rights reserved.",
    footer_back_top:     "Back to top",
  },

  es: {
    // ── Navegación ───────────────────────────────────────────────────────
    nav_about:        "Sobre mí",
    nav_services:     "Servicios",
    nav_work:         "Proyectos",
    nav_certs:        "Certificaciones",
    nav_articles:     "Artículos",
    nav_cta:          "Conversémoslo",
    lang_label:       "Seleccionar idioma",

    // ── Meta de página ───────────────────────────────────────────────────
    page_title:   "Abel Fresnillo — Director de Arquitectura y Asesor de Estrategia en la Nube",
    meta_desc:    "Abel Fresnillo ayuda a las organizaciones a diseñar arquitecturas de nube e IA que generan resultados de negocio medibles. Director de Arquitectura en CapTech Ventures. CISSP, TOGAF 10, certificado 7× en AWS.",

    articles_page_title: "Perspectivas y Artículos — Abel Fresnillo",
    articles_meta_desc:  "Reflexiones prácticas sobre arquitectura de nube, IA agéntica, seguridad empresarial y entrega de software moderna — por Abel Fresnillo.",

    // ── Hero ─────────────────────────────────────────────────────────────
    hero_eyebrow:       "Director de Arquitectura · Estrategia de IA y Nube",
    hero_tagline:       "Ayudo a las organizaciones a navegar sus desafíos tecnológicos más complejos — desde la modernización en la nube hasta la IA agéntica — y los convierto en resultados de negocio medibles.",
    hero_cta_primary:   "Hablemos",
    hero_cta_secondary: "Ver mis proyectos",

    // ── Franja de experiencia ────────────────────────────────────────────
    proof_label: "Experiencia en",

    // ── Sobre mí ──────────────────────────────────────────────────────────
    about_tag:     "Sobre mí",
    about_heading: "Conectando estrategia e ingeniería desde 2005",
    about_lead:    "He pasado más de 15 años en la intersección de la estrategia tecnológica y la entrega — desde mis primeros servicios web en Softtek en Monterrey, México, hasta liderar compromisos de arquitectura de nube e IA para bancos y compañías de seguros de Fortune 500.",
    about_p1:      "Lo que distingue mi trabajo es que puedo conectar la visión ejecutiva con la realidad de la ingeniería. He ocupado roles en ambos lados: como ingeniero senior que lideró la primera aplicación nativa de la nube de Lowe’s en Microsoft Azure, y como Arquitecto de Soluciones Senior en AWS asesorando a empresas en sus desafíos de nube más complejos.",
    about_p2:      "Hoy trabajo directamente con clientes para diseñar soluciones tecnológicas que abordan desafíos empresariales complejos — desde plataformas de IA agéntica que automatizan las operaciones con clientes, hasta arquitecturas de seguridad que eliminan vulnerabilidades críticas. Aporto tanto la profundidad técnica para hacer bien los detalles como la perspectiva estratégica para asegurar que el trabajo genere valor real para el negocio.",
    stat_years:     "Años de experiencia",
    stat_certs:     "Certificaciones profesionales",
    stat_community: "Ingenieros en comunidad de práctica",

    // ── Servicios ────────────────────────────────────────────────────────
    services_tag:     "Servicios",
    services_heading: "Cómo puedo ayudarte",
    services_sub:     "Trabajo con líderes tecnológicos para resolver desafíos complejos de arquitectura — desde la estrategia inicial hasta la entrega hands-on.",

    s1_title: "Arquitectura y Estrategia de Nube",
    s1_desc:  "Diseño y optimización de arquitecturas AWS alineadas al Well-Architected Framework — cubriendo confiabilidad, seguridad, eficiencia de costos y rendimiento a escala.",

    s2_title: "Soluciones de IA Agéntica",
    s2_desc:  "Diseño e implementación de flujos de trabajo de IA agéntica usando AWS Bedrock, Claude y herramientas LLM modernas — desde automatización orientada al cliente hasta sistemas de gestión del conocimiento interno.",

    s3_title: "Arquitectura de Seguridad Empresarial",
    s3_desc:  "Orientación de seguridad por diseño respaldada por la certificación CISSP — cubriendo modelado de amenazas, gestión de identidades y accesos, postura de cumplimiento y remediación de vulnerabilidades.",

    s4_title: "Modernización Digital",
    s4_desc:  "Evaluación y modernización de sistemas legados usando patrones nativos de la nube — reduciendo la fricción en los despliegues, mejorando la confiabilidad y eliminando la deuda técnica que frena la entrega.",

    s5_title: "Asesoría en Liderazgo Técnico",
    s5_desc:  "Coaching y asesoría para organizaciones tecnológicas — desde gobernanza de arquitectura y programas de certificación, hasta la creación de comunidades de práctica de ingeniería que aceleran la entrega moderna.",

    // ── Proyectos Destacados ─────────────────────────────────────────────
    work_tag:     "Proyectos Destacados",
    work_heading: "Impacto en distintas industrias",
    work_sub:     "Una selección de proyectos que generaron resultados de negocio medibles.",

    work_label_challenge: "Desafío",
    work_label_solution:  "Solución",

    work1_sector:        "Seguros",
    work1_title:         "Plataforma de IA Agéntica para Consultas de Pólizas",
    work1_challenge:     "El alto volumen de llamadas entrantes para consultas rutinarias sobre pólizas sobrecargaba a los agentes en vivo, incrementando los costos operativos y degradando la experiencia del cliente.",
    work1_solution:      "Diseñé una plataforma de IA agéntica de extremo a extremo integrando Amazon Connect, Lex, Bedrock (Claude Haiku) y AgentCore para automatizar los flujos de atención al cliente con comprensión del lenguaje natural.",
    work1_outcome_label: "Reducción objetivo en llamadas derivadas a agentes en vivo",

    work2_sector:        "Banca",
    work2_title:         "Modernización de la API de Permisos",
    work2_challenge:     "Un sistema de permisos legado que servía a más de 100 equipos de aplicaciones internas albergaba una vulnerabilidad de escalada de privilegios y acumuló deuda técnica significativa.",
    work2_solution:      "Diseñé e implementé una capa de API de permisos modernizada con controles de acceso adecuados y contratos de integración limpios, permitiendo migraciones incrementales seguras de los equipos.",
    work2_outcome_label: "Equipos de aplicaciones protegidos — vulnerabilidad de escalada de privilegios eliminada",

    work3_sector:        "Servicios Financieros",
    work3_title:         "Respuesta a Crisis de DDoS",
    work3_challenge:     "Un ataque DDoS activo causó una interrupción de 4 horas que afectó el sitio web principal y los servicios de banca en línea de la institución, amenazando la confianza del cliente y su posición regulatoria.",
    work3_solution:      "Lideré la respuesta de mitigación de DDoS coordinando entre los equipos de red, seguridad y aplicaciones para implementar medidas de protección con AWS Shield y WAF y restablecer el servicio.",
    work3_outcome_value: "El mismo día",
    work3_outcome_label: "Servicio completamente restablecido — interrupción de 4 horas resuelta dentro del horario laboral",

    work4_sector:        "Comercio Minorista",
    work4_title:         "Modernización de Plataforma Nativa de la Nube",
    work4_challenge:     "Los ciclos de lanzamiento de dos meses y una alta tasa de fallos en los cambios impedían al equipo de ingeniería responder a las necesidades del negocio al ritmo requerido.",
    work4_solution:      "Lideré la entrega de la primera aplicación nativa de la nube de la empresa en Microsoft Azure — una plataforma de recomendaciones de productos que habilitó “Los clientes también compraron” en Lowes.com, estableciendo prácticas modernas de DevOps en 12 ingenieros.",
    work4_outcome_label: "Despliegues más rápidos — de ciclos de 2 meses a 1 semana, 50% de reducción en el tiempo de entrega de cambios",

    // ── Certificaciones ──────────────────────────────────────────────────
    cert_tag:     "Certificaciones",
    cert_heading: "Credenciales que respaldan el trabajo",
    cert_sub:     "10 certificaciones activas en seguridad empresarial, arquitectura de nube y estrategia de negocio.",
    cert_verify:  "Verificar credencial",

    cert_cissp_note:  "El estándar de oro mundial en seguridad de la información — que demuestra experiencia en arquitectura de seguridad, gestión de identidades y accesos, gestión de riesgos y 5 dominios adicionales del CISSP.",
    cert_togaf_note:  "Certificación del marco de arquitectura empresarial que permite una gobernanza y toma de decisiones estructuradas y basadas en estándares en grandes organizaciones.",
    cert_group_aws:   "Certificaciones AWS",
    cert_group_fin:   "Negocios y Finanzas",
    cert_finance_note:"Especialización de nivel de posgrado que cubre análisis financiero, presupuesto de capital y estrategia empresarial — permitiendo una comunicación más efectiva con los equipos de finanzas y los tomadores de decisiones del C-suite.",

    // ── Sección Artículos ───────────────────────────────────────────────────
    articles_tag:      "Perspectivas",
    articles_heading:  "Perspectivas sobre tecnología que importa",
    articles_sub:      "Reflexiones prácticas sobre arquitectura de nube, IA agéntica, seguridad empresarial y entrega de software moderna — desde el campo.",
    coming_soon_title: "Artículos próximamente",
    coming_soon_body:  "Estoy escribiendo perspectivas prácticas, probadas en el campo, sobre los temas con los que trabajo todos los días. Esto es lo que viene:",
    topic1:            "IA Agéntica en Servicios Financieros",
    topic2:            "AWS Well-Architected para Industrias Reguladas",
    topic3:            "Patrones de Arquitectura de Seguridad para la Empresa",
    topic4:            "Lecciones de Migración a la Nube desde el Campo",
    topic5:            "Construyendo Comunidades de Práctica de Ingeniería",
    articles_btn:      "Ver artículos",

    // ── Página de Artículos ─────────────────────────────────────────────────
    articles_back:        "Volver al sitio principal",
    articles_hero_heading:"Perspectivas sobre tecnología que importa",
    articles_hero_sub:    "Reflexiones prácticas sobre arquitectura de nube, IA agéntica, seguridad empresarial y entrega de software moderna — desde el campo.",
    articles_notify_text: "¿Quieres recibir una notificación cuando los artículos estén disponibles?",
    articles_notify_btn:  "Envíame un mensaje",
    articles_footer_back: "Volver al sitio principal",

    // ── Pie de página / Contacto ───────────────────────────────────────────
    footer_heading:      "¿Listo para hablar sobre tu próximo proyecto?",
    footer_sub:          "Ya sea que estés planeando una transformación en la nube, explorando capacidades de IA o navegando una decisión crítica de arquitectura — estaré feliz de conversar.",
    footer_email_btn:    "Enviar un Correo",
    footer_linkedin_btn: "Conectar en LinkedIn",
    footer_copyright:    "© 2026 Abel Fresnillo. Todos los derechos reservados.",
    footer_back_top:     "Volver arriba",
  },
};
