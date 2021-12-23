USE filmes_db;

SELECT
	*
FROM filmes;

-- ALIAS (apelido)
SELECT
	f.titulo AS "Nome do filme",
    f.data_lancamento AS "Data de lançamento",
    f.avaliacao AS "Rating"
FROM filmes AS f;

-- ORDER BY
SELECT
	*
FROM filmes
ORDER BY
	titulo,
    data_lancamento;

-- WHERE
SELECT
	*
FROM filmes
WHERE
	id = 15;

-- BETWEEN
SELECT
	*
FROM filmes
WHERE
	data_lancamento BETWEEN '2003-01-01' AND '2004-01-01';
    
SELECT
	*
FROM filmes
WHERE
	avaliacao BETWEEN 8.3 AND 5.7;

-- LIKE
SELECT
	*
FROM filmes
WHERE
	avaliacao LIKE '%8%';

SELECT
	*
FROM filmes
WHERE
	titulo = 'Toy story';

-- LIMIT
SELECT
	*
FROM filmes
LIMIT 5;

-- OFFSET
SELECT
	*
FROM filmes
LIMIT 5
OFFSET 9;

-- GROUP BY
SELECT
	*
FROM login_acesso;

SELECT
	nome
FROM login_acesso
GROUP BY
	nome;

-- HAVING
SELECT
	nome,
    data_acesso,
    COUNT(*) AS "Quantas vezes aparece"
FROM login_acesso
GROUP BY
	nome,
    data_acesso
HAVING
	COUNT(*) > 1;

-- FUNÇOES DE AGREGAÇÃO
SELECT
	MAX(avaliacao)
FROM filmes;

SELECT
	MIN(avaliacao),
    MIN(premios)
FROM filmes;

SELECT
	SUM(premios)
FROM filmes;

SELECT
	COUNT(*)
FROM filmes;

SELECT
	AVG(avaliacao)
FROM filmes;

SELECT
	*
FROM filmes;
