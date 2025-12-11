import { PhoneIcon } from '@heroicons/react/24/solid';

// Definimos o contrato do componente CallToAction (o que ele espera receber)
interface CallToActionProps {
    titulo:string;
    subtitulo:string;
    whatsappNumero:string;
}

const CallToAction: React.FC<CallToActionProps> = ({titulo, subtitulo, whatsappNumero}) => {
    // Função para gerar o link do whatsapp
    const whatsappLink = `https://wa.me/${whatsappNumero}`;

    return (
        <section className="py-16 bg-blue-900 text-white text-center">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl md-text-4xl font-bold mb-4">{titulo}</h3>
                <p className="text-lg mb-8">{subtitulo}</p>

                {/* Botão CTA para whatsApp */}
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-500 hover:bg-grenn-600 text-white font-bold py-3 px-8 rouded-full shadow-xl transtion duration-300 transform hover:scale-105">
                    <PhoneIcon className="w-6 h-6 mr-2" />
                    Fale com um Especialista Agora!
                </a>
            </div>
        </section>
    );
}
export default CallToAction;