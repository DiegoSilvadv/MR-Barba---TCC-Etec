CREATE DATABASE MRbarba;
use MRbarba;

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

create table agendamento (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(120) NOT NULL,
    horario DATETIME NOT NULL,
    telefone VARCHAR(11) NOT NULL,
    id_servico INT,
    id_barbeiro INT

) ENGINE = innodb;

ALTER TABLE `agendamento`
ADD CONSTRAINT `fk_id_barbeiro` 
FOREIGN KEY ( `id_barbeiro` ) 
REFERENCES `barbeiro` ( `id_barbeiro` );

ALTER TABLE `agendamento`
ADD CONSTRAINT `fk_id_servico` 
FOREIGN KEY ( `id_servico` ) 
REFERENCES `servico` ( `id_servico` );

