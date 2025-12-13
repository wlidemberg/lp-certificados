# 🚀 Landing Page de Certificados Digitais

Projeto de Landing Page construído com foco em Arquitetura de Software e aplicação dos princípios de Programação Orientada a Objetos (POO) utilizando TypeScript e React. O projeto utiliza animações de rolagem e efeitos visuais avançados para maximizar a conversão.

## 🎯 Conceitos de POO Aplicados

A arquitetura do projeto segue uma modelagem POO clara, separando a lógica de dados da visualização:

| Conceito | Aplicação | Local |
| :--- | :--- | :--- |
| **Encapsulamento** | Uso de Interfaces (`ProductCardProps`, `FooterProps`) para definir contratos de dados, garantindo consistência e tipagem. | `src/components/` |
| **Composição** | Componentes como `ProductList` e `DescricaoCallToAction` são combinados no `App.tsx`, organizando a estrutura da página. | `src/components/` |
| **Abstração** | Utilização de Classes Base (`Certificado`) para definir a estrutura principal dos produtos. | `src/models/Certificado.ts` |
| **Herança** | Classes filhas (`CertificadoPessoaFisica`, `CertificadoPessoaJuridica`) herdam a estrutura da Classe `Certificado`. | `src/models/Certificado.ts` |
| **Polimorfismo** | O método `getDetalhes()` é sobrescrito na classe `CertificadoPessoaJuridica` para um comportamento específico. | `src/models/Certificado.ts` |

## ⚙️ Tecnologias e Recursos Visuais Utilizados

* **Framework:** React (v18+)
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS (Responsivo)
* **Animação:** **Framer Motion** (Utilizado para `fade-in` suave no scroll: `whileInView`)
* **Efeito Visual:** Imagens de fundo com efeito **Parallax** (`bg-fixed`) nas seções de CTA.
* **Ícones:** Heroicons

## 💻 Como Baixar e Instalar

### Pré-requisitos

Certifique-se de ter o Node.js (v16+) e o npm instalados.

1.  **Clone o Repositório:**
    ```bash
    git clone SUA_URL_DO_GITHUB
    cd lp-certificados
    ```

2.  **Instale as Dependências (Incluindo Framer Motion):**
    ```bash
    npm install
    ```

### Rodando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
O projeto estará disponível em http://localhost:5173/.

🎨 Personalização
1. Conteúdo e Dados
Dados dos Certificados: Modifique as instâncias de classe em src/App.tsx.

Imagens de Fundo (BG): As imagens são configuradas no tailwind.config.js e devem estar na pasta public/assets/.

2. Estilo e Animações
Animações de Rolagem: As configurações de fade-in (variants, initial, whileInView) podem ser ajustadas nos componentes (HeroSection.tsx, CallToAction.tsx).

Parallax: A classe bg-fixed é aplicada condicionalmente no CallToAction.tsx.