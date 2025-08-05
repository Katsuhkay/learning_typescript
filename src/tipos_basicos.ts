// Tipo Booleano
let estaChovendo: boolean = false;

estaChovendo = true;


// Tipo number (não diferencia inteiro e fracionados!)
let idade: number = 27

let altura: number = 1.74

// Tipo string
const nascionalidade: string = 'brasileiro'

// Criando array
// Arrya em Typescript não pode ter mais de um tipo, somente é permitido o mesmo tipo.
const colegas: string[] = ['Lucas', 'Fernanda', 'Álex']
const tecnologias: Array<string> = ['HTML', 'CSS', 'JavaScript']

// Existe também o array que permite SOMENTE leitura!
const notas: ReadonlyArray<number> = [7, 8, 9]

// Tuplas são parecidas com arrays mas permitem mais de um tipo
const lista: [nome: string, idade: number, estaEstudando: boolean] = ['Lucas', 27, true]

// uso de pipe " | " para permitir mais de um tipo
let idadeDaAna: number | string = 25
idadeDaAna = '25 anos'

// Tipo any aceita qualquer tipo, usar com cuidado!!!
let dadosDaApi: any;
dadosDaApi = 10
dadosDaApi = '10'
dadosDaApi = true
dadosDaApi = []

let curso = 'front-end'