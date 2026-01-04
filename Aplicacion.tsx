
import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { TOOLS } from './constants';
import { CategoryType, DiagramTool } from './types';
import { IndustrialAI } from './services/geminiService';
import { 
  ParetoVisualizer, 
  IshikawaVisualizer, 
  KanbanVisualizer, 
  ProcessFlowVisualizer,
  SipocVisualizer,
  SequenceVisualizer,
  ClassVisualizer,
  DataProfilingVisualizer,
  ObservabilityVisualizer,
  ErdVisualizer,
  StateVisualizer,
  SkeletonLoader,
  NeuralFlowVisualizer,
  NetworkTopologyVisualizer
} from './components/Visualizers';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(CategoryType.LEAN_METHODS);
  const [selectedTool, setSelectedTool] = useState<DiagramTool>(TOOLS[0]);
  const [prompt, setPrompt] = useState('Optimización de Flujo en Línea de Pintura Automotriz');
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState('Iniciando motor cognitivo...');
  const [progress, setProgress] = useState(0);
  const [aiData, setAiData] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const industrialAi = new IndustrialAI();

  const exampleContexts = [
    "Célula de Manufactura de Componentes Médicos",
    "Línea de Ensamblaje de Baterías de Litio",
    "Proceso de Inyección de Plásticos Automotriz",
    "Logística de Almacén Automatizado (AS/RS)"
  ];

  useEffect(() => {
    if (loading) {
      const msgs = [
        'Modelando entidades bajo ISA-95...',
        'Auditando integridad de datos industriales...',
        'Orquestando linaje de metadatos...',
        'Generando topología de flujo Lean...',
        'Validando arquitectura 4.0...'
      ];
      let i = 0;
      const interval = setInterval(() => {
        setLoadingMsg(msgs[i % msgs.length]);
        setProgress(prev => Math.min(prev + 18, 98));
        i++;
      }, 1500);
      return () => clearInterval(interval);
    } else {
      setProgress(0);
    }
  }, [loading]);

  const handleGenerate = async (overriddenPrompt?: string) => {
    const finalPrompt = overriddenPrompt || prompt;
    if (overriddenPrompt) setPrompt(overriddenPrompt);
    
    setLoading(true);
    setProgress(5);
    setLoadingMsg('Analizando contexto operativo...');
    try {
      const data = await industrialAi.generateToolData(selectedTool.id, finalPrompt);
      setAiData(data);
      setProgress(100);
    } catch (error) {
      console.error(error);
      alert("Error al generar arquitectura de datos. Reintente por favor.");
    } finally {
      setTimeout(() => setLoading(false), 800);
    }
  };

  const getIcon = (name: string) => {
    const LucideIcon = (Icons as any)[name] || Icons.HelpCircle;
    return <LucideIcon className="w-5 h-5" />;
  };

  const renderVisualizer = () => {
    if (!aiData) return <NeuralFlowVisualizer />;
    switch (selectedTool.id) {
      case 'pareto': return <ParetoVisualizer data={aiData.items || []} />;
      case 'ishikawa': return <IshikawaVisualizer data={aiData} />;
      case 'kanban': return <KanbanVisualizer data={aiData} />;
      case 'sipoc': return <SipocVisualizer data={aiData} />;
      case 'sequence': return <SequenceVisualizer data={aiData} />;
      case 'uml-class': return <ClassVisualizer data={aiData} />;
      case 'data-profiling': return <DataProfilingVisualizer data={aiData} />;
      case 'observability': return <ObservabilityVisualizer data={aiData} />;
      case 'erd': return <ErdVisualizer data={aiData} />;
      case 'state-diag': return <StateVisualizer data={aiData} />;
      case 'network-topo': return <NetworkTopologyVisualizer data={aiData} />;
      case 'flowchart':
      case 'vsm':
      case 'bpmn':
      case 'app-arch':
      case 'int-map':
      case 'traceability':
        return <ProcessFlowVisualizer data={aiData} />;
      default:
        return (
          <div className="bg-slate-900 p-8 rounded-3xl overflow-auto max-h-[600px] border border-slate-800">
            <pre className="text-emerald-400 text-[11px] font-mono leading-relaxed">{JSON.stringify(aiData, null, 2)}</pre>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-inter antialiased">
      <aside className={`bg-slate-950 text-slate-300 w-80 flex-shrink-0 flex flex-col transition-all duration-300 shadow-2xl ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full absolute z-50 h-full md:relative md:translate-x-0'}`}>
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-blue-600 p-2.5 rounded-2xl shadow-xl"><Icons.Zap className="text-white w-6 h-6" /></div>
            <h1 className="text-2xl font-black text-white tracking-tighter">Manu Lean</h1>
          </div>
          <p className="text-[9px] text-slate-500 uppercase font-black tracking-[0.3em]">Industrial OS Hub</p>
        </div>
        <nav className="flex-1 overflow-y-auto p-5 space-y-8 scrollbar-hide">
          {Object.values(CategoryType).map(cat => (
            <div key={cat} className="space-y-2">
              <h3 className="text-[10px] font-black text-slate-600 uppercase px-3 py-1 mb-2 border-b border-white/5 tracking-[0.2em]">{cat}</h3>
              <div className="grid grid-cols-1 gap-1.5">
                {TOOLS.filter(t => t.category === cat).map(tool => (
                  <div key={tool.id} className="relative group">
                    <button onClick={() => { setSelectedTool(tool); setSelectedCategory(cat); setAiData(null); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[11px] font-bold transition-all duration-300 ${selectedTool.id === tool.id ? 'bg-blue-600 text-white shadow-2xl scale-[1.02]' : 'hover:bg-white/5 text-slate-400 hover:text-slate-200'}`}>
                      <div className={`${selectedTool.id === tool.id ? 'text-white' : 'text-slate-500 group-hover:text-blue-400'}`}>{getIcon(tool.icon)}</div>
                      <span className="truncate">{tool.name}</span>
                    </button>
                    <div className="absolute left-full ml-5 top-1/2 -translate-y-1/2 w-64 p-5 bg-slate-900 text-white text-[11px] rounded-[2rem] shadow-2xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all pointer-events-none z-[100] border border-white/10 hidden lg:block backdrop-blur-xl">
                      <div className="font-black uppercase tracking-widest text-blue-400 mb-2">{tool.name}</div>
                      <p className="leading-relaxed text-slate-300 font-medium italic">"{tool.description}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-20 bg-white/80 backdrop-blur-xl border-b border-slate-100 flex items-center justify-between px-10 sticky top-0 z-40">
          <div className="flex items-center gap-6">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-3 hover:bg-slate-100 rounded-2xl md:hidden transition-colors"><Icons.Menu className="w-5 h-5 text-slate-600" /></button>
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-3 tracking-tighter">
              <span className="bg-blue-50 p-2.5 rounded-2xl text-blue-600">{getIcon(selectedTool.icon)}</span>{selectedTool.name}
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[10px] font-black text-emerald-600 bg-emerald-50 px-5 py-2.5 rounded-full border border-emerald-100 shadow-sm uppercase tracking-widest">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" /> OS Real-time Analytics
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 space-y-10 scroll-smooth">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-12 space-y-8">
                <section className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-slate-800 flex items-center gap-3 text-sm uppercase tracking-widest">
                      <Icons.Workflow className="w-5 h-5 text-blue-500" />Contexto de Manufactura Industrial
                    </h4>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Metadata Context Engine</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-5">
                    <input 
                      type="text" 
                      value={prompt} 
                      onChange={(e) => setPrompt(e.target.value)} 
                      className="flex-1 p-5 border-2 border-slate-50 rounded-3xl focus:ring-8 focus:ring-blue-500/5 focus:border-blue-500 focus:outline-none bg-slate-50 font-bold text-slate-700 transition-all text-sm shadow-inner" 
                      placeholder="Escriba aquí su proceso (ej. Ensamblado de Motores)..."
                    />
                    <button onClick={() => handleGenerate()} disabled={loading} className="px-10 bg-slate-900 hover:bg-black text-white rounded-3xl font-black flex items-center justify-center gap-3 transition-all shadow-2xl active:scale-95 group relative overflow-hidden">
                      {loading ? <Icons.Loader className="animate-spin w-5 h-5" /> : <Icons.Play className="w-5 h-5 text-blue-400 fill-blue-400" />}
                      <span className="text-xs uppercase tracking-widest relative z-10">Analizar Arquitectura</span>
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest self-center mr-2">Sugerencias:</span>
                    {exampleContexts.map((ctx, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => handleGenerate(ctx)}
                        className="px-4 py-2 bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-700 rounded-full text-[10px] font-bold transition-colors border border-slate-200"
                      >
                        {ctx}
                      </button>
                    ))}
                  </div>
                </section>

                <section className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden min-h-[600px] flex flex-col relative">
                  <div className="p-6 bg-slate-50/80 backdrop-blur-sm border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]"><Icons.Eye size={16} /> Industrial Design Workbench</div>
                    {loading && (
                      <div className="flex items-center gap-4">
                         <div className="text-[10px] font-black text-blue-600">{progress}%</div>
                         <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-blue-600 transition-all duration-700" style={{ width: `${progress}%` }} /></div>
                      </div>
                    )}
                  </div>
                  <div className="p-10 flex-1 flex flex-col justify-center">
                    {loading ? <SkeletonLoader /> : renderVisualizer()}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        
        <footer className="h-16 border-t bg-white flex items-center justify-between px-10 text-[10px] text-slate-400 uppercase font-black tracking-[0.3em]">
           <div className="flex items-center gap-6"><span>MANU LEAN HUB v3.2.0</span><div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.6)]" /><span>Industrial Intelligence</span></div>
           <div className="flex items-center gap-3"><Icons.Shield size={14} className="text-slate-200" /><span>COMPLIANCE ISA-95 & ISO 9001</span></div>
        </footer>
      </main>
    </div>
  );
};

export default App;
