
import { CategoryType, DiagramTool } from './types';

export const TOOLS: DiagramTool[] = [
  // 1. Lean & Methods
  { 
    id: 'vsm', 
    name: 'VSM / iVSM', 
    category: CategoryType.LEAN_METHODS, 
    description: 'Mapeo de la Cadena de Valor. Identifica desperdicios (muda) en procesos físicos y digitales, midiendo la latencia de datos desde la generación hasta la toma de decisiones.', 
    icon: 'Layers' 
  },
  { 
    id: 'flowchart', 
    name: 'Diagrama de Flujo / DFD', 
    category: CategoryType.LEAN_METHODS, 
    description: 'Visualiza la secuencia lógica de pasos y el linaje de datos. Crucial para estandarizar procesos y eliminar pasos redundantes que no agregan valor.', 
    icon: 'GitBranch' 
  },
  { 
    id: 'bpmn', 
    name: 'BPMN', 
    category: CategoryType.DATA_FLOW, 
    description: 'Estándar para modelar orquestación de APIs y tareas humanas. Facilita la automatización Lean eliminando silos de información entre departamentos.', 
    icon: 'Workflow' 
  },
  { 
    id: 'app-arch', 
    name: 'Arquitectura de Apps', 
    category: CategoryType.DATA_FLOW, 
    description: 'Mapa de interoperabilidad sistémica (ERP/MES). Previene la degradación de datos y asegura que la información fluya sin fricciones en la pirámide de automatización.', 
    icon: 'Cpu' 
  },
  
  // 2. Metadata & Structure
  { 
    id: 'erd', 
    name: 'Diagrama ERD', 
    category: CategoryType.METADATA_STRUCT, 
    description: 'Define la estructura de metadatos industriales. Organiza entidades como Procesos y Métricas para asegurar integridad referencial y trazabilidad total.', 
    icon: 'Database' 
  },
  { 
    id: 'uml-class', 
    name: 'Diagrama de Clases', 
    category: CategoryType.METADATA_STRUCT, 
    description: 'Modelado de objetos digitales y sus métodos. Define cómo los activos (sensores/máquinas) interactúan con el sistema de control.', 
    icon: 'Box' 
  },
  { 
    id: 'int-map', 
    name: 'Mapeo de Integración', 
    category: CategoryType.METADATA_STRUCT, 
    description: 'Especificación técnica de transporte de datos (MQTT/REST). Elimina la variabilidad en la comunicación entre dispositivos de planta y nube.', 
    icon: 'Shuffle' 
  },

  // 3. Data Quality
  { 
    id: 'data-profiling', 
    name: 'Perfilado de Datos', 
    category: CategoryType.DATA_QUALITY, 
    description: 'Analiza la salud de los datos (Integridad, Precisión, Consistencia). Detecta "datos sucios" que actúan como desperdicio digital en la analítica avanzada.', 
    icon: 'BarChart3' 
  },
  { 
    id: 'traceability', 
    name: 'Matriz de Trazabilidad', 
    category: CategoryType.DATA_QUALITY, 
    description: 'Vincula cada punto de dato con un requisito de negocio o KPI. Asegura que el esfuerzo de captura de datos esté justificado por el valor que aporta.', 
    icon: 'Link' 
  },
  { 
    id: 'observability', 
    name: 'Observabilidad', 
    category: CategoryType.DATA_QUALITY, 
    description: 'Monitoreo preventivo de la infraestructura de datos. Detecta latencias y fallos en APIs antes de que afecten la continuidad operativa.', 
    icon: 'Activity' 
  },

  // 4. Interaction & Logic
  { 
    id: 'sequence', 
    name: 'Diagrama de Secuencia', 
    category: CategoryType.INTERACTION_LOGIC, 
    description: 'Muestra la interacción cronológica entre usuario y sistema. Optimiza la experiencia de usuario (UX) en interfaces de planta reduciendo tiempos de carga.', 
    icon: 'History' 
  },
  { 
    id: 'state-diag', 
    name: 'Diagrama de Estados', 
    category: CategoryType.INTERACTION_LOGIC, 
    description: 'Ciclo de vida de entidades como Órdenes de Producción. Define transiciones claras para evitar estados indeterminados y errores lógicos.', 
    icon: 'RefreshCw' 
  },

  // Classic Tools
  { 
    id: 'sipoc', 
    name: 'SIPOC', 
    category: CategoryType.LEAN_METHODS, 
    description: 'Visualización macro del alcance del proceso. Define límites claros de entrada y salida antes de profundizar en el mapeo detallado.', 
    icon: 'Map' 
  },
  { 
    id: 'ishikawa', 
    name: 'Ishikawa', 
    category: CategoryType.QUALITY_CONTROL, 
    description: 'Análisis de causa raíz. Clasifica las fuentes de variabilidad en 6M para encontrar la solución definitiva a problemas de calidad.', 
    icon: 'ChevronRight' 
  },
  { 
    id: 'pareto', 
    name: 'Pareto (80/20)', 
    category: CategoryType.QUALITY_CONTROL, 
    description: 'Identifica el 20% de las causas que generan el 80% de los problemas. Prioriza los esfuerzos de mejora para maximizar el ROI.', 
    icon: 'BarChart' 
  },
  { 
    id: 'kanban', 
    name: 'Kanban Digital', 
    category: CategoryType.VISUAL_MANAGEMENT, 
    description: 'Gestión visual de flujos de trabajo. Controla el WIP (Work in Progress) y visualiza cuellos de botella en tiempo real.', 
    icon: 'Trello' 
  },
  { 
    id: 'network-topo', 
    name: 'Topología de Red', 
    category: CategoryType.VISUAL_MANAGEMENT, 
    description: 'Mapeo de la infraestructura física de IT/OT. Asegura la robustez de la red industrial para soportar flujos de datos críticos.', 
    icon: 'Network' 
  },
];
