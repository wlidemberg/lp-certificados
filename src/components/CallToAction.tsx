import { PhoneIcon, ArrowDownTrayIcon, } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

// Definimos o contrato do componente CallToAction (o que ele espera receber)
interface CallToActionProps {
    titulo:string;
    subtitulo:string;
    whatsappNumero:string;
    downloadLink?:string;
    useParallax?:boolean;
    imagemSrc?:string;
    reverteLayout?:boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({titulo, subtitulo, whatsappNumero, downloadLink, useParallax=false, imagemSrc, reverteLayout}) => {
    // Função para gerar o link do whatsapp
    const whatsappLink = `https://wa.me/${whatsappNumero}`;

    // Logica de classe para o efeito parallax
    const parallaxClasses = useParallax
        ? "bg-bg-parallax bg-fixed bg-cover bg-center relative"
        : "bg-purple-900";

        // Configuração de Animação de Rolgem
        const fadeUpVariants = {
            hidden: { opacity: 0, y: 50 },
            visible: {
                opacity: 1, 
                y: 0, 
                transition: {duration: 0.6},
            },
        }

        const flexOrder = reverteLayout ? 'md:flex-row-reverse':'md:flex-row'

        const textAlignment= reverteLayout ? 'md:text-left' : 'text-center';

    return (
        <section className={`py-16 bg-purple-900 text-white text-center ${parallaxClasses}`}>
            {/* Overlay para garantir que o text seja legível sobre a imagem */}
            {useParallax && <div className='absolute inset-0 bg-purple-500 opacity-70'></div>}

            {/* motion.div */}
            <motion.div 
                className={`container mx-auto px-4 relative z-10 ${textAlignment}`} 
                variants={fadeUpVariants} 
                initial='hidden' 
                whileInView='visible' 
                viewport={{once:true, amount:0.2}}>

                    
                    <div className={`flex flex-col gap-8 items-center ${flexOrder} ${imagemSrc ? 'md:flex':'md:text-center'}`}>
                        {/* Coluna 1 (imagem se houver) */}
                        {imagemSrc && (
                            <div className="w-full md:w-1/2 flex justify-center">
                                <img src={imagemSrc} alt={titulo} className='w-full max-w-sm object-cover rouded-lg shadow-2xl opacity-90' />
                            </div>
                        )}
                        {/* Coluna 2 */}
                        <div
                            className={`w-full ${imagemSrc ? 'md:w-1/2':'md:w-full'} flex flex-col justify-center`}
                        >

                            <h3 className="text-3xl md-text-4xl font-bold mb-4">{titulo}</h3>
                            <p className="text-lg mb-8">{subtitulo}</p>

                            <div className={`flex flex-col sm:flex-row justify-center items-center gap-4`}>
                                {/* Novo botão de download (só aparece se houver downloadLink) */}
                                {downloadLink && (
                                    <a href={downloadLink}
                                    target='_blank'
                                    rel='noopener noferrer'
                                    download
                                    className='w-full sm:w-auto inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 duration-300 transform hover:scale-105' 
                                    >
                                        <ArrowDownTrayIcon className='w-6 h-6 mr-2' /> Baixar E-book Certificados Digitais
                                    </a>
                                )}

                                {/* Botão CTA para whatsApp */}
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center bg-green-500 hover:bg-green-600 text-white border-green-600 border-2 font-bold py-3 px-8 rouded-full shadow-xl transtion duration-300 transform hover:scale-105">
                                    <PhoneIcon className="w-6 h-6 mr-2" />
                                    Fale com um Especialista Agora!
                                </a>
                            </div>    
                        </div>
                    </div>

                
            </motion.div>
        </section>
    );
}
export default CallToAction;