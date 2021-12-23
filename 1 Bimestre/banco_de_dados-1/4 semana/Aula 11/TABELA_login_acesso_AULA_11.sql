CREATE TABLE login_acesso
(
	id_login_acesso int not null auto_increment,
    nome varchar(150) NOT NULL,
    data_acesso date,
    primary key (id_login_acesso)
);

INSERT INTO login_acesso()
VALUES
(DEFAULT, 'Jorge', current_timestamp()),
(DEFAULT, 'Jorge', current_timestamp()),
(DEFAULT, 'Jorge', current_timestamp()),
(DEFAULT, 'Jorge', current_timestamp()),
(DEFAULT, 'João da Silva', current_timestamp());
