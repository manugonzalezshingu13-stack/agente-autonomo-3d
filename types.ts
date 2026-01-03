
export enum CategoryType {
  LEAN_METHODS = 'Análisis y Mejora (Lean)',
  QUALITY_CONTROL = 'Control de Calidad',
  VISUAL_MANAGEMENT = 'Gestión Visual y JIT',
  WORK_STUDY = 'Estudio del Trabajo',
  PROJECT_MGMT = 'Gestión de Proyectos',
  STRATEGY = 'Diseño y Estrategia',
  DATA_FLOW = 'Flujo de Datos Digital',
  METADATA_STRUCT = 'Estructura y Metadatos',
  DATA_QUALITY = 'Calidad del Dato',
  INTERACTION_LOGIC = 'Interacción y Lógica'
}

export interface DiagramTool {
  id: string;
  name: string;
  category: CategoryType;
  description: string;
  icon: string;
}
