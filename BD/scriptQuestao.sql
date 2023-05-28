Create database Marketplace;
use marketplace;
drop database Marketplace;

create table endereco(
idendereco int primary key auto_increment,
rua varchar(45),
Cep char (8),
Numero char(10),
Bairro varchar (45),
Estado varchar(45)
);

desc endereco;
drop table usuario;

create table produtos(
idprodutos int primary key auto_increment,
nome varchar(45),
preco char(45),
quantidade int
);

create table usuario(
idusuario int,
fkendereco int,
nome varchar (45), 
idade int,
sexo varchar(1),
constraint usuario primary key (fkendereco,idusuario),
constraint fk_endereco foreign key (fkendereco) references endereco(idendereco)
);

create table compra(
idcompra int auto_increment,
fkprodutos int,
fkusuario int,
dtCompra datetime default current_timestamp,
constraint fk_produtos foreign key (fkprodutos) references produtos(idprodutos),
constraint compra primary key(idcompra,fkprodutos)
);

Select
Rua,
Cep,
Numero,
Bairro,
Estado, 

Usuario.nome as Comprador, 

Idade, 

sexo, 

dtCompra as "Data da compra", 

Produtos.nome as "Produto comprado", 

preco, 

quantidade 

from Endereco Join Usuario on fkEndereco = idEndereco 

join Compra on fkUsuario = idUsuario 

join Produtos on fkProdutos = idProdutos;