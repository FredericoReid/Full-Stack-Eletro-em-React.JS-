create database fseletro;

use fseletro;

create table produtos(
	id int auto_increment,
	categoria varchar(100),
	descricao varchar(500),
	preco float,
	preco_venda float,
	imagem varchar(100),
	primary key(id)
);

insert into produtos (categoria, imagem, descricao, preco, preco_venda)
values ("geladeira", "./imagens/Geladeira Brastemp.jpeg", "Geladeira Brastemp", 899.00, 899.00);

insert into produtos (categoria, imagem, descricao, preco, preco_venda)
values ("geladeira", "./imagens/Geladeira tres portas.jpeg", "Geladeira tres portas", 1500.00, 1500.00);

insert into produtos (categoria, imagem, descricao, preco, preco_venda)
values ("geladeira", "./imagens/Geladeira Dodge.jpeg", "Geladeira Dodge", 999.00, 999.00);

insert into produtos (categoria, imagem, descricao, preco, preco_venda)
values ("fogao", "./imagens/Fogão 4 bocas.jpeg", "Fogão 4 bocas", 679.80, 679.80);

insert into produtos (categoria, imagem, descricao, preco, preco_venda)
values ("fogao", "./imagens/Fogao ATLAS.jpeg", "Fogao ATLAS", 599.90, 599.90);

insert into produtos (categoria, imagem, descricao, preco, preco_venda)
values ("microondas", "./imagens/Geladeira Dodge Plat.jpeg", "Geladeira Dodge Plat", 299.99, 299.99);

insert into produtos (categoria, imagem, descricao, preco, preco_venda)
values ("microondas", "./imagens/Microondas Eletrolux.jpeg", "Microondas Eletrolux", 490.00, 490.00);

insert into produtos (categoria, imagem, descricao, preco, preco_venda)
values ("microondas", "./imagens/Microondas Philco.jpeg", "Microondas Philco", 1500.00, 1500.00);

insert into produtos (categoria, imagem, descricao, preco, preco_venda)
values ("maquina de lavar", "./imagens/Maquina de Lavar.jpeg", "Maquina de lavar", 899.90, 899.90);

insert into produtos (categoria, imagem, descricao, preco, preco_venda)
values ("maquina de lavar", "./imagens/Maquina de lavar Philco.jpeg", "Maquina de lavar Philco", 699.99, 699.99);

insert into produtos (categoria, imagem, descricao, preco, preco_venda)
values ("lava loucas", "./imagens/Lavadora de Pratos.jpeg", "Lavadora de Pratos", 599.90, 599.90);

insert into produtos (categoria, imagem, descricao, preco, preco_venda)
values ("lava loucas", "./imagens/Lavadora de Pratos Elec..jpeg", "Lavadora de Pratos Elec.", 599.90, 599.90);



create table quantidade(
	id int auto_increment,
	foreign key (id) references produtos(id),
	quantidade int
);

insert into quantidade (quantidade)
values (5000);

insert into quantidade (quantidade)
values (1080);

insert into quantidade (quantidade)
values (3459);

insert into quantidade (quantidade)
values (3000);

insert into quantidade (quantidade)
values (500);

insert into quantidade (quantidade)
values (5308);

insert into quantidade (quantidade)
values (8040);

insert into quantidade (quantidade)
values (2020);

insert into quantidade (quantidade)
values (2000);

insert into quantidade (quantidade)
values (1030);

insert into quantidade (quantidade)
values (732);

insert into quantidade (quantidade)
values (944);




create table pedidos(
	id int auto_increment,
	nome_cliente varchar(100),
	endereco varchar(500),
	email varchar(200),
	telefone varchar(80),
	nome_produto varchar(300),
	valor_unitario float,
    	quantidade INT,
    	valor_total float,
	primary key(id)
);

insert into pedidos (nome_cliente, endereco, telefone, nome_produto, valor_unitario, quantidade, valor_total)
values ("Marcos Rocha", "Ruas das Palmeiras, 718 - Vila Santa Clementina", "99999-9999", "Geladeira Três Portas", 1500.00, 2, 3000.00);

insert into pedidos (nome_cliente, endereco, telefone, nome_produto, valor_unitario, quantidade, valor_total)
values ("Fernanda Silva", "Rua Rua Deolinda de Almeida Corrêa , 13 - Distrito Industrial Nova Avaré", "99999-9999", "Fogão ATLAS", 599.90, 1, 599.90);

insert into pedidos (nome_cliente, endereco, telefone, nome_produto, valor_unitario, quantidade, valor_total)
values ("Paulo Santos", "Rua Adutora, 590 - Chácara São Domingos Shop", "99999-9999", "Geladeira Dodge", 1500.00, 2, 3000.00);

insert into pedidos (nome_cliente, endereco, telefone, nome_produto, valor_unitario, quantidade, valor_total)
values ("Sara Carolina", "Rua Silvio de Campos Gurgel, 395 - Residencial Ouro Verde", "99999-9999", "Geladeira Brastemp", 899.90, 1, 899.90);

insert into pedidos (nome_cliente, endereco, telefone, nome_produto, valor_unitario, quantidade, valor_total)
values ("Simone Martins", "Alameda dos Beija-Flor, 349 - Recanto Campo Belo", "99999-9999", "Lavadora de Pratos Elec.", 599.90, 3, 1799.70);

insert into pedidos (nome_cliente, endereco, telefone, nome_produto, valor_unitario, quantidade, valor_total)
values ("Raul Vitor", "Rua Anhanguera, 952 - Jardim do Prado", "99999-9999", "Máquina de Lavar", 899.90, 5, 4499.50);

insert into pedidos (nome_cliente, endereco, telefone, nome_produto, valor_unitario, quantidade, valor_total)
values ("Mirella Clara", "Rua Augusto Avelino de Morais, 752 - Parque das Cerejeiras", "99999-9999", "Microondas Philco", 490.00, 2, 980.00);

insert into pedidos (nome_cliente, endereco, telefone, nome_produto, valor_unitario, quantidade, valor_total)
values ("Bryan Filipe", "Rua Luiz Borges, 604 - Jardim Veneto II", "99999-9999", "Geladeira Dodge", 999.90, 1, 999.90);


CREATE VIEW todosProdutos AS SELECT * FROM produtos;

