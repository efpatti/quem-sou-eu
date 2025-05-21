// slides/Slide2.tsx
import SubItem from "@/components/SubItem";

const slide2 = [
 <SubItem key="title" delay={0.1}>
  <h2 className="text-4xl font-bold text-gradient mb-12 text-center">
   Minha Jornada na Tecnologia
  </h2>
 </SubItem>,

 <SubItem key="beginning" delay={0.2}>
  <div className="flex items-center gap-8">
   <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
    <span className="text-2xl">👶</span>
   </div>
   <div className="flex-1 border-l-2 border-accent pl-6 py-2">
    <h3 className="text-xl font-semibold mb-1">Curiosidade Inicial</h3>
    <p className="text-gray-400">
     Fascínio pela evolução tecnológica desde criança
    </p>
   </div>
  </div>
 </SubItem>,

 <SubItem key="choice" delay={0.3}>
  <div className="flex items-center gap-8 mt-6">
   <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
    <span className="text-2xl">💡</span>
   </div>
   <div className="flex-1 border-l-2 border-secondary pl-6 py-2">
    <h3 className="text-xl font-semibold mb-1">Escolha do Técnico</h3>
    <p className="text-gray-400">Desenvolvimento de Sistemas no SESI</p>
   </div>
  </div>
 </SubItem>,

 <SubItem key="dedication" delay={0.4}>
  <div className="flex items-center gap-8 mt-6">
   <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center">
    <span className="text-2xl">📚</span>
   </div>
   <div className="flex-1 border-l-2 border-purple-500 pl-6 py-2">
    <h3 className="text-xl font-semibold mb-1">Dedicação Extracurricular</h3>
    <p className="text-gray-400">Estudo intensivo além da grade curricular</p>
   </div>
  </div>
 </SubItem>,

 <SubItem key="achievements" delay={0.5}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
   <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
    <div className="text-accent text-3xl mb-3">👨‍🏫</div>
    <h3 className="text-xl font-bold mb-2">Assistente Técnico</h3>
    <ul className="text-gray-300 space-y-1 text-sm">
     <li>• Beta tester de exercícios</li>
     <li>• Suporte para 30+ alunos</li>
     <li>• Substituição docente</li>
    </ul>
   </div>

   <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
    <div className="text-secondary text-3xl mb-3">🏆</div>
    <h3 className="text-xl font-bold mb-2">Honra ao Mérito</h3>
    <p className="text-gray-300 text-sm">
     Melhor aluno do curso de Desenvolvimento de Sistemas
    </p>
    <div className="mt-4 h-32 bg-gray-700/30 rounded-lg flex items-center justify-center">
     [Sua foto no palco]
    </div>
   </div>
  </div>
 </SubItem>,

 <SubItem key="next" delay={0.6}>
  <div className="flex justify-center mt-12">
   <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-800/70 rounded-full">
    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-secondary flex items-center justify-center">
     <span className="text-sm">→</span>
    </div>
    <span className="font-medium">Ciência da Computação na USCS</span>
   </div>
  </div>
 </SubItem>,
];

export default slide2;
