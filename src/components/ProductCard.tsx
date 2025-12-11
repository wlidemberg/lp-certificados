
// 1. Interface (Contrato)
export interface ProductCardProps {
    nome: string;
    preco: number;
    descricao: string;
}

// 2. Componente Funcional (Composição/Estrutura)
const ProductCard: React.FC<ProductCardProps> = ({nome, preco, descricao})  => {
    return(
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 bordeer-gray-100 ">
            {/* nome do produto */}
            <h3 className="text-2xl font-bpld text-blue-700 mb-2">{nome}</h3>

            {/* Descrição */}
            <p className="text-gray-600 text-sm mb-4 min-h-[80px] ">{descricao}</p>

            <div className="flex items-baseline justify-between mb-4">
                {/* Preço formatado */}
                <span className="text-3xl font-extrabold text-orage-600">
                    R$ {preco.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-sm text-gray-500">/ ano</span>
            </div>

            {/* Botão de Ação */}
            <button className="w-full bg-green-500 text-white py-2 rodend-lg font-semibold hover:bg-green-600 transtion duration-300">Comprar Agora</button>
        </div>
    );
}
export default ProductCard;