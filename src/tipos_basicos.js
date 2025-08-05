"use strict";
// Tipo Booleano
let estaChovendo = false;
estaChovendo = true;
// Tipo number (não diferencia inteiro e fracionados!)
let idade = 27;
let altura = 1.74;
// Tipo string
const nascionalidade = 'brasileiro';
// Criando array
// Arrya em Typescript não pode ter mais de um tipo, somente é permitido o mesmo tipo.
const colegas = ['Lucas', 'Fernanda', 'Álex'];
const tecnologias = ['HTML', 'CSS', 'JavaScript'];
// Existe também o array que permite SOMENTE leitura!
const notas = [7, 8, 9];
// Tuplas são parecidas com arrays mas permitem mais de um tipo
const lista = ['Lucas', 27, true];
// uso de pipe " | " para permitir mais de um tipo
let idadeDaAna = 25;
idadeDaAna = '25 anos';
// Tipo any aceita qualquer tipo, usar com cuidado!!!
let dadosDaApi;
dadosDaApi = 10;
dadosDaApi = '10';
dadosDaApi = true;
dadosDaApi = [];
let curso = 'front-end';
