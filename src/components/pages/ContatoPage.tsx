import React from 'react';

const ContatoPage:React.FC = () => {
    return (
        <section className='pt-24 min-h-screen bg-gray-50'>
            <div className='container mx-auto px-4 py-12'>
                <h1 className='text-4xl font-semibold text-purple-900 mb-6'>Fale Conosco</h1>
                <p className='text-lg text-gray-700 mb-8'>
                    Preencha o formulário abaixo ou utilize nossos canais de atendimento direto.
                </p>

                {/* Formulário de COntato */}
                <div className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl'>
                    <p className='text-xl font-semibold text-gray-800'>
                        [ Placeholder para formulário de contato ]
                    </p>
                    <p className='mt-4 text-gray-600'>
                        Whatsapp: (21) 968045339 | E-mail: contato@certificados.com.br
                    </p>
                </div>
            </div>
        </section>
    );
}
export default ContatoPage;