# PetMatch — Documentação da Versão Inicial

## 1. Visão Geral do Projeto

O **PetMatch** é um projeto académico desenvolvido com o propósito de aproximar pessoas interessadas em adotar animais e indivíduos ou instituições que possuem animais disponíveis para adoção.

A proposta da plataforma é facilitar a divulgação dos animais e o contacto inicial entre as partes envolvidas, oferecendo um ambiente simples e intuitivo para o processo.

Importa destacar que o sistema não substitui procedimentos formais de adoção responsável, avaliações de candidatos à adoção ou qualquer documentação legal relacionada à guarda do animal.

A descrição recomendada para apresentações é:

> O PetMatch é uma plataforma que conecta pessoas que desejam encontrar um novo lar para animais com utilizadores interessados em adotá-los, facilitando a divulgação e o primeiro contacto entre ambas as partes.

---

## 2. Objetivo da Versão Inicial

Desenvolver uma primeira versão funcional da plataforma que permita demonstrar os principais fluxos do sistema durante a apresentação do projeto.

Nesta etapa, o sistema deverá ser capaz de:

1. Permitir o registo de utilizadores.
2. Permitir o cadastro de animais para adoção.
3. Exibir uma lista de animais disponíveis.
4. Apresentar informações detalhadas de cada animal.
5. Possibilitar o registo de interesse na adoção.
6. Atualizar o estado do animal quando a adoção for concluída.

---

## 3. Escopo da Primeira Entrega

### Funcionalidades incluídas

- Registo de utilizadores (nome, e-mail e senha).
- Cadastro de animais para adoção.
- Upload de fotografia do animal.
- Listagem pública de animais disponíveis.
- Filtros básicos por espécie e porte.
- Página de detalhes do animal.
- Registo de manifestações de interesse.
- Atualização do estado do processo de adoção.
- Organização do código por módulos e responsabilidades.

### Funcionalidades previstas para versões futuras

- Sistema de mensagens em tempo real.
- Validação de identidade dos utilizadores.
- Aplicação móvel nativa.
- Sistema de geolocalização.
- Recomendações inteligentes de adoção.
- Gestão avançada de ONGs e abrigos.
- Infraestrutura em nuvem com escalabilidade.

Esses recursos poderão ser apresentados como evoluções futuras da plataforma.

---

## 4. Tecnologias Utilizadas

Para a implementação da versão inicial, foram selecionadas tecnologias que oferecem simplicidade, rapidez de desenvolvimento e fácil manutenção.

| Tecnologia | Finalidade |
|------------|------------|
| Python | Linguagem principal do projeto |
| Flask | Framework web para backend |
| SQLite | Base de dados local |
| Jinja2 | Renderização de páginas HTML |
| HTML/CSS | Estrutura e apresentação das páginas |
| Bootstrap | Estilização e responsividade |
| Werkzeug | Segurança e encriptação de senhas |
| GitHub | Controlo de versão |
| Markdown | Documentação do projeto |

### Motivo da escolha do Flask

O Flask foi escolhido por ser um framework leve, simples de configurar e adequado para projetos académicos. Com ele, a equipa pode concentrar-se na implementação das funcionalidades principais sem a complexidade de arquiteturas mais robustas.

Em futuras evoluções, o PetMatch poderá adotar tecnologias como React, Django ou Node.js, caso seja necessário aumentar a escalabilidade e a quantidade de funcionalidades.

---

## 5. Arquitetura Definida

O sistema será desenvolvido utilizando uma arquitetura de **monólito modular**.

Neste modelo, toda a aplicação permanece num único projeto, mas o código é organizado em módulos independentes de acordo com suas responsabilidades.

### Justificativa da escolha

A arquitetura foi selecionada pelos seguintes motivos:

- Facilidade de implementação.
- Melhor divisão de tarefas entre os membros da equipa.
- Organização mais clara do código.
- Menor complexidade de configuração.
- Facilidade para demonstrações académicas.
- Possibilidade de evolução futura.

Descrição recomendada para os slides:

> O PetMatch utiliza uma arquitetura monolítica modular, permitindo que todos os componentes da aplicação estejam num único sistema, mas organizados em módulos independentes como autenticação, gestão de animais, interesses de adoção e persistência de dados.

---

## 6. Estrutura de Pastas

```bash
petmatch/
│
├── README.md
├── requirements.txt
├── main.py
│
├── app/
│   ├── __init__.py
│   ├── models.py
│   ├── routes_auth.py
│   ├── routes_animals.py
│   ├── routes_interest.py
│   └── database.py
│
├── templates/
│   ├── base.html
│   ├── login.html
│   ├── register.html
│   ├── animal_list.html
│   ├── animal_detail.html
│   └── animal_form.html
│
├── static/
│   ├── css/
│   └── uploads/
│       └── animais/
│
└── data/
    └── petmatch.db
``
