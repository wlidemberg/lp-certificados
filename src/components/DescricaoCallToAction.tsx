import React from "react";
import { motion } from 'framer-motion';


// Definimos o contrato do componente DescricaoCallToAction (o que ele espera receber)
interface DescricaoCallToActionProps {
    tituloEbook:string;
}

const DescricaoCallToAction: React.FC<DescricaoCallToActionProps> = ({tituloEbook}) => {

    // Animação fedeUp
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.7, delay: 0.1},
        }
    }

    return (
        <section className="py-16 bg-gray-100">
            <motion.div
                className="container mx-auto px-4 max-w-4xl text-center"
                variants={fadeUpVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{once:true, amount: 0.3}}
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Por que somos a Escolha certa para o seu Certificado Digital?
                </h2>

                <p className="text-gray-600 leading-relaxed">
                    Nossa expertise vai além da simples venda. Oferecemos **suporte completo** na escolha do modelo ideal (e-CPF, e-CNPJ, etc.) e acompanhamos você durante o processo de validação, garantindo que tudo seja feito de forma rápida e sem brucracia. 
                </p>

                <p className="text-gray-700 mb-8 font-semibold leading-relaxed">
                    Com a complexidade das normas do ICP- Brasil, ter um parceiro experiente é fundamental. Economize tempo e evite dores de cabeça: nossa equipe está pronta para **te guiar na escolha e instalação**. Chame no whatsApp!
                </p>

                <p className="text-xl text-purple-600 font-extrabold mt-6">
                    Ainda com dúvidas: Baixe agora o nosso eBook: <span className="underline">{tituloEbook} e domine o assunto!</span>
                </p>
            </motion.div>
        </section>
    );
}
export default DescricaoCallToAction;