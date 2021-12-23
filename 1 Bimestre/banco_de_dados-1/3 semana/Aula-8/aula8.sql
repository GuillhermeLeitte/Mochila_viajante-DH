select * from aluno;

insert into aluno (nome, rg, cpf)
values ('guilherme', 2001002308672, '048.098.053-52');

update aluno 
set nome = 'solange'
where id_aluno = 1;

update aluno 
set nome = 'guilherme'
where id_aluno = 2;

update aluno 
set rg = '04638965300'
where id_aluno = 1;

delete from aluno 
where id_aluno = 1;

