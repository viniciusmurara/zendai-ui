/**
 * Componente de exemplo mostrando como usar o tema
 */
export default function ThemeExample() {
  return (
    <div className="p-8 space-y-6 font-sansation">
      <h1 className="text-3xl font-bold text-primary mb-6 font-sansation">
        Exemplo de Tema - ZendAI for Daily Tasks
      </h1>
      
      {/* Teste da fonte Sansation */}
      <div className="bg-secondary/20 p-4 rounded-lg border border-secondary">
        <p className="text-primary font-sansation">
          <strong>Teste da Fonte Sansation:</strong> Esta é a fonte Sansation aplicada em toda a aplicação. 
          Se você está vendo esta fonte com características diferentes das fontes padrão do sistema, 
          então a fonte Sansation está funcionando corretamente!
        </p>
      </div>
      
      {/* Usando classes CSS utilitárias */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-primary text-white p-4 rounded-lg">
          <h3 className="font-semibold">Cor Primária</h3>
          <p className="text-sm opacity-90">#397358</p>
        </div>
        
        <div className="bg-secondary text-primary p-4 rounded-lg">
          <h3 className="font-semibold">Cor Secundária</h3>
          <p className="text-sm opacity-90">#C3E3AB</p>
        </div>
        
        <div className="bg-white text-primary p-4 rounded-lg border border-primary">
          <h3 className="font-semibold">Cor Branca</h3>
          <p className="text-sm opacity-90">#DCE4D0</p>
        </div>
      </div>
      
      {/* Botões de exemplo */}
      <div className="flex gap-4 flex-wrap">
        <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
          Botão Primário
        </button>
        
        <button className="bg-secondary text-primary px-6 py-2 rounded-lg hover:bg-secondary-dark transition-colors">
          Botão Secundário
        </button>
        
        <button className="bg-white text-primary border border-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors">
          Botão Outline
        </button>
      </div>
    </div>
  );
}