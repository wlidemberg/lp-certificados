import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, AlertCircle } from 'lucide-react';
import { useUI } from '../context/UIContext';

const ModalContato:React.FC = () => {
    const { isModalOpen, closeModal } = useUI();

    // estado para campos do formulário
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [certificado, setCertificado] = useState('e-CPF A1');

    // Esttado para mensagem de erro/sucesso
    const [erro, setErro] = useState('');
    const [sucesso, setSucesso] = useState(false);

    // 2. Máscara de Telefone (Formata enquanto digita)
    const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número

        // Aplica a máscara (XX) XXXXX-XXXX
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2"); // Coloca parênteses nos dois primeiros dígitos
        value = value.replace(/(\d)(\d{4})$/, "$1-$2");    // Coloca o hífen antes dos últimos 4 dígitos

        setTelefone(value);
    };

    // 3. Função de Validação Avançada
    const validarFormulario = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telefoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

        if (nome.trim().length < 3) return "Por favor, insira o nome completo.";
        if (!emailRegex.test(email)) return "E-mail inválido. Verifique o formato.";
        if (!telefoneRegex.test(telefone)) return "Telefone inválido. Use (XX) XXXXX-XXXX.";
        
        return null;
    };

    // Função de validação e envio
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mensagemErro = validarFormulario();
        if(mensagemErro){
            setErro(mensagemErro);
            return
        }
        setErro('');

        // 4. Geração do Link Dinâmico do WhatsApp
        const numeroWhatsApp = "5521968045339"; // Seu número
        const mensagemTexto = `Olá! Me chamo *${nome}*.\n\n` +
                            `Gostaria de um orçamento para: *${certificado}*\n` +
                            `📧 E-mail: ${email}\n` +
                            `📞 Telefone: ${telefone}`;
        
        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemTexto)}`;

        // Abre o WhatsApp em uma nova aba
        window.open(linkWhatsApp, '_blank');

        // Fecha modal apos 2 segundos se sucesso
        setTimeout(() => {
            setSucesso(false);
            setNome('');
            setEmail('');
            closeModal();
        }, 2500);
    }
    return(
        <AnimatePresence>
            {isModalOpen && (
                <>
                    {/* Overlay (fundo escuro) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className='fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm'
                    />

                    {/* Container do modal */}
                    <div className='fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none'>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className='bg-white w-full max-w-lg rounded-2sl shadow-2xl overflow-hidden pointer-events-auto'
                        >
                            {/* Header Modal */}
                            <div className='bg-purple-900 p-6 text-white flex justify-between items-center'>
                                <div>
                                    <h2 className='text-2xl font-bold'>Solicitar Orçamento</h2>
                                    <p className='text-blue-200 text-sm'>Preencha os dados e entraremos em contato</p>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className='p-2 hover:bg-white/10 rounded-full transition-colors'
                                ><X size={24}/></button>
                            </div>

                            {/* formulário */}
                            <div className='p-8'>
                                {sucesso ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className='text=center py-10'
                                    >
                                        <div className='ba-green-100 text-green-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                                            <Send size={30} />
                                        </div>
                                        <h3 className='text-xl font-bold text-green-800'>Solicitação enviada.</h3>
                                        <p className='text-gray-600'>Estaremos entrando em contato em breve.</p>
                                    </motion.div>
                                ) : (

                                    <form className='p-8 space-y-4' onSubmit={handleSubmit}>

                                        {/* mensagem de erro */}
                                        {erro && (
                                            <div className='bg-red-50 text-red-700 p-3 rounded-lg flex items-center gap-2 text-sm border border-red-200'>
                                                <AlertCircle size={18} /> {erro}
                                            </div>
                                        )}

                                        <div>
                                            <label className='block text-sm font-medium text-gray-700 mb-1'>nome Completo</label>
                                            <input 
                                                type="text"
                                                value={nome}
                                                onChange={(e) => setNome(e.target.value)}
                                                placeholder='Seu nome'
                                                className='w-full p-3 border outline-none trasition-all ${erro && nome.length < 3 ? "border-red-500" : " border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"}' 
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Telefone (WhatsApp)</label>
                                            <input type="text" value={telefone} onChange={handleTelefoneChange} maxLength={15} className="w-full p-3 border rounded-lg" placeholder="(21) 99999-9999" />
                                        </div>

                                        <div>
                                            <label className='block text-sm font-medium text-gray-700 mb-1'>E-mail Corporativo</label>
                                            <input 
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder='exemplo@empresa.com.br'
                                                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none trasition-all'
                                            />
                                        </div>
                                        <div>
                                            <label className='block text-sm font-medium text-gray-700 mb-1'>Qual Certificado você precisa?</label>
                                            <select 
                                                value={certificado}
                                                onChange={(e) => setCertificado(e.target.value)}
                                                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all'>
                                                <option>e-CPF A1</option>
                                                <option>e-CPF A3</option>
                                                <option>e-CNPJ A1</option>
                                                <option>e-CNPJ A3</option>                                    </select>
                                        </div>

                                        <button
                                            type='submit'
                                            className='w-full bg-purple-900 hover:bg-fuchsia-600 text-white font-bold p-4 rounded-lg flex items-center justify-center gap-2 trasition-all transform hover:scale-[1.02]'
                                        ><Send size={20}/> Enviar Solicitação</button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
export default ModalContato;