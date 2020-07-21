CREATE DATABASE MRbarba;
use MRbarba;

create table login_user (
    id_login int primary KEY auto_increment,
    email VARCHAR(200),
    senha varchar(100),
    repetir_senha VARCHAR(100),
    token CHAR(64)
)ENGINE = innodb;

create table adm (
    id_user INT PRIMARY KEY AUTO_INCREMENT,
    user_admin VARCHAR (15) NOT NULL,
    password_admin VARCHAR (10) NOT NULL
);

create table barbeiro (
    id_barbeiro INT PRIMARY KEY AUTO_INCREMENT,
    nome_barbeiro VARCHAR(100)
) ENGINE = innodb;

create table servico (
    id_servico INT PRIMARY KEY AUTO_INCREMENT,
    tipo_servico VARCHAR(100)

) ENGINE = innodb;

create table dispositivo (
    id_dispositivo int primary key AUTO_INCREMENT,
    fkusuario int, 
    token VARCHAR(50),
    sistema VARCHAR(20),
    data_criacao DATETIME
    
) ENGINE = innodb;

create table horario (
    id_horario int PRIMARY key auto_increment,
    dia varchar(10),
    hora varchar(5)
) ENGINE = innodb;


create table agendamento (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(120) NOT NULL,
    email varchar(120) NOT NULL,
    telefone VARCHAR(11) NOT NULL,
    id_horario INT,
    id_servico INT,
    id_barbeiro INT

) ENGINE = innodb;

ALTER TABLE `dispositivo`
ADD CONSTRAINT `dispositivo_usuario` 
FOREIGN KEY ( `fkusuario` ) 
REFERENCES `login_user` ( `id_login` );

ALTER TABLE `agendamento`
ADD CONSTRAINT `fk_id_barbeiro` 
FOREIGN KEY ( `id_barbeiro` ) 
REFERENCES `barbeiro` ( `id_barbeiro` );

ALTER TABLE `agendamento`
ADD CONSTRAINT `fk_id_servico` 
FOREIGN KEY ( `id_servico` ) 
REFERENCES `servico` ( `id_servico` );

