-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE loveguy;

USE loveguy;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	livroFavorito varchar(50),
    fkIndicado int
);

CREATE TABLE moradas (
	idMoradas INT AUTO_INCREMENT,
    fkUsuario INT AUTO_INCREMENT,
	local varchar(150),
	material varchar(150),
	carroGaragem varchar(150),
    primary key (idMoradas, fkUsuario)
);

alter table moradas add column local varchar(150);
alter table moradas add column material varchar(150);
alter table moradas add column carroGaragem varchar(150);

desc moradas;
desc usuario;
select*from usuario;