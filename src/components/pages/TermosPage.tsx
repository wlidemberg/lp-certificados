import React from 'react';

const TermosPage:React.FC = () => {
    return(
        <section className='pt-24 min-h-screen bg-white'>
            <div className='container mx-auto px-4 py-12'>
                <h1 className='text-4xl font-bold text-purple-900 mb-6'>Termos de Uso e Política de Privacidade</h1>
                
                <h2 className='text-2xl font-semibold text-gray-800 mt-8 mb-3'>1. Aceitação dos Termos</h2>
                <p className='text-gray-600 mb-4'>
                    Ao acessar e usar este website, você aceita e concorda em estar vinculado pelos termos e disposições deste acordo.
                </p>

                <h2 className='text-2xl font-semibold text-gray-800 mt-8 mb-3'>2. Privacidade e Dados Pessoais</h2>
                <p className='text-gray-600 mb-4'>
                    Nós coletamos informações mínimas necessárias para a emissão e contato, sempre seguindo a LGPD (Lei Geral de Proteção de Dados). Seus dados nunca serão compartilhados com terceiros sem seu consentimento.
                </p>

                {/* Mais conteúdo aqui... */}
                
            </div>
        </section>
    );
}
export default TermosPage;