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
    novoTestamento char(1),
    velhoTestamento char(1),
    fkIndicado int
);

CREATE TABLE moradas (
    fkUsuario int primary key auto_increment,
    local varchar(150),
    material varchar(150),
    carroGaragem varchar(150)
);
select sum(novoTestamento) as 'Novo Testamento', sum(velhoTestamento) as 'Velho Testamento'
                    from usuario;
desc moradas;
desc usuario;
truncate table usuario;
truncate table moradas;
select*from usuario;
select*from moradas;
drop table usuario, moradas;
