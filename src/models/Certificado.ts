// 1. Classe Base
export class Certificado {
    // Propriedades Comuns
    public nome: string;
    public preco: number;
    public descricao: string;
    public tipoCliente: 'Pessoa Física' | 'Pessoa Jurídica'; // Propriedade de Diferença

    // Construtor para inicializar a classe
    constructor(nome: string, preco:number, descricao:string, tipoCliente: 'Pessoa Física' | 'Pessoa Jurídica'){
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.tipoCliente = tipoCliente;
    }

    // Metodo Comum (Comportamento/Abstração)
    public getDetalhesCertificado():string{
        return `${this.nome} | Tipo: ${this.tipoCliente}`;
    }
}

// 2. Classe Filha: Herança para e-CPF
export class CertificadoPessoaFisica extends Certificado {
    // Propriedade específica de Pessoa Física
    public precisaBiometria: boolean = true;

    // O super() chama o construtor da classe  Certificado (Pai)
    constructor(nome:string, preco:number, descricao:string) {
        super(nome, preco, descricao, 'Pessoa Física');
    }
}

// 3. Classe Filha: Herança para e-CNPJ
export class CertificadoPessoaJuridica extends Certificado {
    // Propriedade específica Pessoa Juridica
    public exigeCNPJAtivo: boolean = true;

    //Suoper() chama o construtor da classe Certificado (Pai)
    constructor(nome:string, preco:number, descricao:string){
        super(nome, preco, descricao, 'Pessoa Jurídica')
    }

    // Sobreescrita de Método (Polimorfismo)
    public getDetalhesCertificado(): string {
        // Adiciona uma informação extra específica
        return `${super.getDetalhesCertificado()} - Exige CNPJ Ativo`;
    }
}