export class Lareira {
    idLareira: number;
    nome: string;
    endereco: string;
    bairro: string;
    cep: string;
    cidade: string;
    estado: string;
    telefone: string;
}

export class Casal {
    lareira = new Lareira();
    idCasal: number;
    maridoNome: string;
    maridoDataNascimento: Date;
    maridoProfissao: string;
    maridoTelCelular: string;
    maridoEmail: string;
    maridoProblemaSaude: string;
    esposaNome: string;
    esposaSobrenome: string;
    esposaDataNascimento: Date;
    esposaProfissao: string;
    esposaTelCelular: string;
    esposaEmail: string;
    esposaProblemaSaude: string;
}
