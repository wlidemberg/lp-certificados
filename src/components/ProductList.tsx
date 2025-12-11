import ProductCard, { type ProductCardProps } from './ProductCard'; // ⚠️ Precisamos importar ProductCardProps!

// Definimos o contrato do componente ProductList
interface ProductListProps {
    // Compenente espera um array de objetoss que segem a interface de ProductCardProps
    produtos: ProductCardProps[];
}

const ProductList: React.FC<ProductListProps> = ({produtos}) => {
    return(
        <section className='py-12 bg-gray-50'>
            <div className='container mx-auto px-4'>
                {/* Titulo da Seção */}
                <h2 className='text-3xl font-bold text-gray-800 text-center mb-10'>Nossos Certificados</h2>

                {/* Grade de Cards (Composição) */}
                <div className='grid grid-cols-1 md:grid-cpls-2 lg:grid-cols-4 gap-8'>
                    {produtos.map((produto) => (
                        <ProductCard
                            key={produto.nome}
                            nome={produto.nome}
                            preco={produto.preco}
                            descricao={produto.descricao}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default ProductList;