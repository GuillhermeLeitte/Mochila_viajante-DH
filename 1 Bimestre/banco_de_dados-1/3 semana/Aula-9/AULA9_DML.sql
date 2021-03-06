use spotify;

SELECT
	*
FROM USUARIO;

-- INSTRUÇÃO DE INSERÇÃO DE REGISTROS NA TABELA USUÁRIO
INSERT INTO USUARIO()
VALUES
(DEFAULT, 'JDSHD', '1990-05-25', 'M', 'ricardobrito@gmail.com', '123456'),
(DEFAULT, 'FKHEGIHJKHG', '1990-01-03', 'M', 'gustavobrina@gmail.com', '7894'),
(DEFAULT, 'UYGDSHVBHFD', '1990-03-01', 'F', 'emanuelajardim@gmail.com', '454987');

SELECT
	*
FROM CANCOES;

-- INSTRUÇÃO DE INSERÇÃO NA TABELA CANCOES
INSERT INTO CANCOES()
VALUES
(DEFAULT, 'ESQUEMA PREFERIDO', 11.15, 25000, 25000, NULL);

SELECT
	*
FROM ALBUM;

-- INSTRUÇÃO DE INSERÇÃO NA TABELA ALBUM COM SUBSELECT PARA BUSCAR O ID DO ARTISTA
INSERT INTO ALBUM()
VALUES
(
	DEFAULT,
    'JFDHJFD QUALQUER',
    (SELECT IDARTISTA FROM ARTISTA WHERE SOBRENOME = 'BATISTA')
);

-- INSTRUÇÃO DE INSERÇÃO NA TABELA ALBUM SEM SUBSELECT PARA BUSCAR O ID DO ARTISTA
INSERT INTO ALBUM()
VALUES
(
	DEFAULT,
    'ALBUM QUALQUER',
    1
);

SELECT
	*
FROM ARTISTA;

-- INSTRUÇÃO DE INSERÇÃO NA TABELA ARTISTA
INSERT INTO ARTISTA()
VALUES
(DEFAULT, 'AMADO', 'BATISTA'),
(DEFAULT, 'BAROES DA', 'PISADINHA'),
(DEFAULT, 'IVETE', 'SANGALO'); 