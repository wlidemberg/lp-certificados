import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import CallToAction from './components/CallToAction';
import WhatsappButtonFloating from './components/WhatsappButtonFloating';
import Footer from './components/Footer';
import DescricaoCallToAction from './components/DescricaoCallToAction';

// Importação das classe
import { Certificado, CertificadoPessoaFisica, CertificadoPessoaJuridica } from './models/Certificado';
import { type ProductCardProps } from './components/ProductCard'

// 1. Instaciação de Objeros (Herença)
const produtosInstanciados: Certificado[] = [
  new CertificadoPessoaFisica("e-CNPJ A1 (1 Ano)", 89.90, "Certificado digital para pessoa física, válido por 1 ano, 100% online."),
  new CertificadoPessoaFisica("e-CPF A3 (3 Anos", 249.90, "Certificado Digital e-CPF A3 com validade de 3 anos, perfeito para quem precisa de maior durabilidade e segurança extra."),
  new CertificadoPessoaJuridica("e-CNPJ A1 (1Ano)", 165.90, "Certificado Digital e-CNPJ A1 em arquivo com validade de 1 ano, ideal para empresas que buscam agilidade e proteção nas transações online."),
  new CertificadoPessoaJuridica("e-CNPJ A3 (3 Anos)", 349.90, "Certificado Digital e-CNPJ A3 com validade de 3 anos, excelente para empresas que necessitam de maior segurança e durabilidade.")
]

// 2. Consversão para o formato de Props (Visão do Componente)
// Esta função extrai apenas os dados que o componente visual precisa (nome, preco, descricao)
const mockProducts: ProductCardProps[] = produtosInstanciados.map(produto => ({
  nome: produto.nome,
  preco: produto.preco,
  descricao: produto.descricao,

  // Método da classe para incluir detalhes avançados no futuro.
  // detalhesAvancados: produto.getDetalesCertificado()
}));




function App() {

  return (
    <>
      <HeroSection 
        titulo="Certificados Digitais que Impulsionam Seus Negócios"
        subTitulo="Escolha o modelo A1 ou A3 e-CPF ou e-CNPJ. Rápido e 100% Online."
        ctaLabel="Ver Planos e Preços Agora"
      />

      {/* Lista de Produtos (Composição) */}
      <ProductList 
        produtos={mockProducts}
      />

      {/* 3. Seção CTA de suporte e vendas */}
      <CallToAction 
        titulo = 'Dúvidas sobre o Certificado Ideal?'
        subtitulo = 'Nossa equipe está pronta para te guiar na escolha e instalação. Chame no WhatsApp!'
        whatsappNumero = '21968045339'
        downloadLink='/assets/ebook-certficado-digital.pdf'
        useParallax={true}
      />

      <DescricaoCallToAction
        tituloEbook='Evite Erros de Validação!'
      />

      {/* 4. Seção Informativa (Polimorfismo do CTA)*/}
      <CallToAction 
        titulo = 'Cetificado Digital em 30 Minutos!'
        subtitulo = 'Não perca te,po! Agende sua emissão 100% online hoje mesmo.'
        whatsappNumero = '21968045339'
      />

      {/* 5. Botão Flutuante */}
      <WhatsappButtonFloating whatsappNumeroFloating='21968045339' />

      {/* 6. Rodapé */}
      <Footer 
        nomeEmpresa='IDCERT Certificados Digitais'
        whatsappNumero='21968045339'
        emailEmpresa='automatizei@gmail.com'
      />  
      
    </>
  );

}
export default App
