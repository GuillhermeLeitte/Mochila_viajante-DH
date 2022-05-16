# Aula 01 - Boas vindas
<small>21 de fevereiro 2022 - segunda-feira</small>

<br>

## Controle de versão local e remoto

<br> 

### Objetivo 
Acesso a uma lista dos principais comandos utilizados no Git localmente e remotamente, além de abordar como configuraremos o computador.

<br> 

### Lista de comandos git

#### **A. Configurações**

#### `git config –-global user.name “Digite seu nome ou como deseja ser identificado”`
Para definir como deseja ser identificado em suas alterações (commits).

#### `git config –-global user.email “usuario@provedor.com”`
Para definir qual o e-mail padrão utilizado em sua identificação de alterações (commits). 

#### `git config –-global core.editor code`
Para definir qual será o editor padrão. Nesse exemplo utilizamos o VSCode.

#### `git config –-list`
Para retornar todos os valores de configuração do git.

#### **B. Fluxo básico de controle de versão (local)**

#### `git init`
Para iniciar o controle de versão de todos os arquivos que existem na pasta do projeto. **Observação:** É necessário iniciar o versionamento apenas uma vez.

#### `git status`
Para saber em qual estágio estão os arquivos que existem na pasta.

#### `git add NOME_DO_ARQUIVO.extensão NOME_DO_ARQUIVO.extensão`
Para selecionar os arquivos que fazem sentido para o comentário das alterações realizadas (commits).

#### `git commit –m “Descrição da alteração realizada”`
Para salvar e incluir uma descrição sobre as alterações realizadas.

#### `git log`
Para listar todos as alterações salvar no versionamento local.

#### **C. Fluxo básico de controle de versão (remota)**

#### `git pull`
Para listar todos as alterações salvar no versionamento local.

#### `git push`
Para enviar para o repositório remoto as alterações realizadas localmente.


### Links úteis

- [Tutorial para gerar chave SSH](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Documentação do Markdown](https://www.markdownguide.org/)
- [Site do Git](https://git-scm.com/)
- [Extensão LiveShare](https://visualstudio.microsoft.com/pt-br/services/live-share/)
