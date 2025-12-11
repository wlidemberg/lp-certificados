# 🚀 Landing Page de Certificados Digitais

Projeto de Landing Page construído com foco em Arquitetura de Software e aplicação dos princípios de Programação Orientada a Objetos (POO) utilizando TypeScript e React.

## 🎯 Conceitos de POO Aplicados

A arquitetura do projeto segue uma modelagem POO clara, separando a lógica de dados da visualização:

| Conceito | Aplicação | Local |
| :--- | :--- | :--- |
| **Encapsulamento** | Uso de Interfaces (`ProductCardProps`, `FooterProps`) para definir contratos de dados, garantindo consistência e tipagem. | `src/components/` |
| **Composição** | O componente `ProductList` é composto por múltiplos componentes `ProductCard`, organizando a visualização. | `src/components/ProductList.tsx` |
| **Abstração** | Utilização de Classes Base (`Certificado`) para definir a estrutura principal dos produtos. | `src/models/Certificado.ts` |
| **Herança** | Classes filhas (`CertificadoPessoaFisica`, `CertificadoPessoaJuridica`) herdam a estrutura da Classe `Certificado`. | `src/models/Certificado.ts` |
| **Polimorfismo** | O método `getDetalhes()` é sobrescrito na classe `CertificadoPessoaJuridica` para um comportamento específico. | `src/models/Certificado.ts` |

## ⚙️ Tecnologias Utilizadas

* **Framework:** React (v18+)
* **Linguagem:** TypeScript
* **Build Tool:** Vite
* **Estilização:** Tailwind CSS (Altamente configurável e responsivo)
* **Ícones:** Heroicons

## 💻 Como Baixar e Instalar

### Pré-requisitos

Certifique-se de ter o Node.js (v16+) e o npm instalados.

1.  **Clone o Repositório:**
    ```bash
    git clone SUA_URL_DO_GITHUB
    cd lp-certificados
    ```

2.  **Instale as Dependências:**
    ```bash
    npm install
    ```

### Rodando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
O projeto estará disponível em http://localhost:5173/.

🎨 Personalização
1. Dados e Conteúdo
Os dados de produtos e textos de CTAs são gerenciados no arquivo principal:

Dados dos Certificados: Modifique as instâncias de classe em src/App.tsx (ex: new CertificadoPessoaFisica(...)).

Textos Fixos: Altere os props passados para HeroSection e CallToAction em src/App.tsx.

2. Estilo e Layout
Componentes: Edite as classes Tailwind em src/components/*.tsx.

Modelo POO: Para adicionar um novo tipo de certificado ou propriedade, edite src/models/Certificado.ts.

☁️ Deploy (Hospedagem)
O projeto está pronto para deploy como uma Aplicação de Página Única (SPA). Recomendamos provedores que se integram facilmente ao GitHub:

Passo 1: Gerar a Versão de Produção
No seu terminal, execute o comando de build (isso cria a pasta dist/ com todos os arquivos otimizados):

Bash

npm run build