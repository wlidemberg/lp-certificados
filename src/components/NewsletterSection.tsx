import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/solid';


const NewsletterSection: React.FC = () => {
    // Configuração de animação
    const fadeUpVariants = {
        hidden: { opacity:0, y:50},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.7},
        }
    }

    return (
        <section className='py-16 bg-purple-900 border-b-2 border-purple-200'>
            <motion.div
                className='container mx-auto px-4 max-w-3xl text-center text-white'
                variants={fadeUpVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once:true, amount: 0.3 }}
            >
                <h2 className='text-lg text-gray-100 mb-8'>
                    Não perca atualizações sobre legislação, segurança digital e promoções exclusivas para você!
                </h2>

                {/* Formulário Newsletter */}
                <form action="" method='POST' className='flex flex-col md:flex-row gap-4 max-w-xl mx-auto'>
                    <input 
                        type="text" 
                        className='flex-grow p-4 border border-purple-200 rounded-lg focus:ring-purple-400 focus:border-purple-500 text-gray-300 shadow-md' 
                        placeholder='Seu melhor email aqui!'
                        required
                    />

                    <button
                        type='submit'
                        className='inline-flex items-center justify-center bg-purple-600 hover:bg-fuchsia-500 text-white font-semibold py-4 px-8 rounded-lg shadow-xl transition duration-300'
                    >
                        <EnvelopeIcon className="w-5 h-5 mr-2" /> Quero me Inscrever!
                    </button>
                </form>
                <p>Prometemos não enviar Span. Sua privacidade é importante.</p>
            </motion.div>
        </section>
    );
} 
export default NewsletterSection;