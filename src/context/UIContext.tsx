import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

// 1. Definição da Interface do Contexto
// Define o que estará disponível para os componentes (O estado e função para altera-lo)
interface UIContextType {
    isModalOpen:boolean;
    openModal: () => void;
    closeModal: () => void;
}

// 2. Criação do Contexto
// Inicializa o contexto com valores padrão (null, pois o Provider irá fornecer os valores reais)
const UIContext = createContext<UIContextType | undefined>(undefined);

// 3. Criação do Provider
// este componente encapsulará a logica de estado e fornecerá os valores para a aplicação
interface UIProviderProps {
    children:ReactNode;
}

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // Funções para a manipulação do estado
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Objeto de valor a ser passado para o contexto
    const contextValue: UIContextType = {
        isModalOpen,
        openModal,
        closeModal,
    };

    return (
        <UIContext.Provider value={contextValue}>
            {children}
        </UIContext.Provider>
    );
}

// 4. Criação de um hook customizado para consumo
// Isso torna o uso do context mais limpo e segura nos componentes.
export const useUI = (): UIContextType => {
    const context = useContext(UIContext);
    if(context === undefined){
        throw new Error("useUI must be used wihin a UIProvider");
    }
    return context;
}