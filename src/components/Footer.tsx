import { PhoneIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon } from '@heroicons/react/24/solid';

// Contrato do componente Footer (o que ele espera receber)
interface FooterProps {
    nomeEmpresa:string
    whatsappNumero:string;
    emailEmpresa:string;
}

const Footer: React.FC<FooterProps> = ({nomeEmpresa, whatsappNumero, emailEmpresa}) => {
    // Função para gerar o link do whatsapp
    const whatsappLink = `https://wa.me/${whatsappNumero}`;
    return(
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                {/* 1. Grid principal (Três colunas) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10 mb-6">
                    {/* Coluna 1: Logo/Introdução (Ocupa 1/4) */}
                    <div className="md:col-span-1">
                        <h4 className="text-xl font-bold mb-4 text-purple-700">{nomeEmpresa}</h4>
                        <p className="text-gray-400 text-sm">Sua parceira de confiança em Certificados Digitais. Agilidade, segurança e suporte especializado.</p>
                    </div>

                    {/* Coluna 2: Links Rápidos */}
                    <div className="md:col-span-1">
                        <h4 className="text-xs font-bold mb-4 text-purple-700">Links Rápidos</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-purple-500 transition duration-300">Tipos de Certificados</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-purple-500 transition duration-300">Como Comprar</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-purple-500 transition duration-300">Validação Online</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-purple-500 transition duration-300">Fale Conosco</a></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Contato */}
                    <div className="md:col-span-1">
                        <h2 className="text-lg font-semibold mb-4 text-gray-300">Fale Conosco</h2>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center">
                                <PhoneIcon className="w-5 h-5 mr-2 text-green-400" />
                                <a href={whatsappLink} target='_blank' rel='noopener noreferrer' className='hover:text-green-600'>(21) 96804 - 5339</a>
                            </li>
                            <li className='flex items-center'><EnvelopeIcon className="w-4 h-4 mr-2 text-orange-500" />{emailEmpresa}</li>
                            <li>Seg. a Sex. das 9h às 18h</li>
                        </ul>
                    </div>

                    {/* Coluna 4: Certificações (Ocupa 1/4) */}
                    <div className="md:col-span-1">
                         <h4 className="text-lg font-semibold mb-4 text-gray-300">Certificações</h4>
                         <p className="text-sm text-gray-400">Somos credenciados e homologados pelo ITI e ICP-Brasil, garantindo total validade jurídica e segurança.</p>
                    </div>
                </div>
                {/* 2. Linha de Copyright (Rodapé Final) */}
                <div className="text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} {nomeEmpresa}. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}
export default Footer