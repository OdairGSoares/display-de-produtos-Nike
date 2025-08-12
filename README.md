# Nike Air - Sistema de Visualização de Tênis

## Funcionalidades Implementadas

### 🎯 Sistema de Navegação entre Modelos
- **Navegação entre modelos**: Use as setas esquerda e direita para alternar entre os diferentes modelos de tênis
- **Seleção de cores**: Clique nos botões de cor para visualizar diferentes variações do modelo selecionado
- **Transições suaves**: Animações fluidas entre as mudanças de modelo e cor

### 🏃‍♂️ Modelos Disponíveis
1. **Air Jordan 1 Low SE** - 6 variações de cor
2. **Air Jordan 1 Mid SE** - 6 variações de cor  
3. **Nike Dunk Low By You** - 5 variações de cor

### 🎨 Como Usar
1. **Trocar de modelo**: Clique nas setas `←` e `→` para navegar entre os modelos
2. **Trocar de cor**: Clique nos botões circulares coloridos para ver diferentes variações
3. **Visualização**: O tênis será exibido automaticamente com a cor selecionada

### 🚀 Tecnologias Utilizadas
- **Next.js 15** - Framework React com SSR
- **Framer Motion** - Animações e transições
- **Tailwind CSS** - Estilização responsiva
- **React Icons** - Ícones da interface

### 📁 Estrutura do Projeto
```
src/
├── app/
│   └── page.js          # Página principal com lógica de navegação
├── components/
│   ├── colorPicker.jsx  # Componente de seleção de cores e modelos
│   └── ...              # Outros componentes
└── data/
    └── shoesData.js     # Configuração dos modelos e cores
```

### 🎭 Animações
- **Carregamento inicial**: Animação de entrada com fade-in
- **Transições de modelo**: Movimento suave entre diferentes tênis
- **Seleção de cor**: Mudança instantânea com efeito visual
- **Componentes**: Aparição sequencial dos elementos da interface

### 🔧 Desenvolvimento
```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```