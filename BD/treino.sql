create database treino;
use treino;

create table TBA (
idA int primary key auto_increment,
campo1A int,
fkA int,
foreign key (fkA) references TBA (idA)
);

create table TBB (
idB int primary key auto_increment,
campo1B int,
fkA int,
foreign key (fkA) references TBA (idA)
);

create table TBC (
idC int auto_increment,
campo1C int,
fkB int,
foreign key (fkB) references TBB (idB),
primary key (idC, fkB)
);

create table TBE (
idE int primary key auto_increment,
campo1E int
);

create table TBD (
fkB int,
fkE int,
idD int,
foreign key (fkB) references TBB (idB),
foreign key (fkE) references TBE (idE),
primary key (fkB, fKE, idD)
);

select*from
TBA as TBAoriginal join TBA as TBAfake on TBAfake.fkA = TBAoriginal.fkA
join TBB on TBB.fkA = TBA.idA
