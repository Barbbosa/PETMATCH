# PetMatch

O **PetMatch** é uma plataforma web desenvolvida para conectar pessoas que desejam encontrar um novo lar para animais com utilizadores interessados em adotá-los.

O sistema facilita a divulgação de animais disponíveis para adoção e permite o registo de manifestações de interesse, promovendo o primeiro contacto entre as partes envolvidas.

> Este projeto foi desenvolvido para fins académicos e demonstra os principais fluxos de um sistema de adoção de animais.

---

#  Objetivo

O PetMatch tem como objetivo simplificar a divulgação de animais disponíveis para adoção, permitindo que utilizadores:

- Cadastrem-se na plataforma;
- Registem animais para adoção;
- Consultem animais disponíveis;
- Visualizem informações detalhadas;
- Manifestem interesse na adoção;
- Atualizem o estado do processo de adoção.

---

#  Funcionalidades

### Gestão de Utilizadores

- Cadastro de utilizadores;
- Login e autenticação;
- Armazenamento seguro de senhas com hash.

### Gestão de Animais

- Cadastro de animais para adoção;
- Upload de fotografias;
- Edição de informações;
- Atualização de estado.

### Consulta de Animais

- Listagem pública de animais;
- Filtro por espécie e porte;
- Visualização de detalhes.

### Interesse em Adoção

- Registo de interesse;
- Associação entre utilizador e animal;
- Acompanhamento do estado da adoção.

---

#  Arquitetura

O projeto utiliza uma arquitetura de **Monólito Modular**, onde toda a aplicação é executada num único sistema Flask, mas organizada em módulos independentes.

### Módulos principais

- Autenticação
- Gestão de Utilizadores
- Gestão de Animais
- Gestão de Interesses
- Persistência de Dados

---

# 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| Python | Linguagem principal |
| Flask | Framework web |
| SQLite | Base de dados local |
| SQLAlchemy | ORM |
| Jinja2 | Templates HTML |
| Bootstrap | Interface responsiva |
| Werkzeug | Segurança de senhas |
| GitHub | Controlo de versão |

---

#  Estrutura do Projeto

```bash
petmatch/
│
├── README.md
├── requirements.txt
├── main.py
│
├── app/
│   ├── __init__.py
│   ├── database.py
│   ├── models.py
│   ├── routes_auth.py
│   ├── routes_animals.py
│   └── routes_interest.py
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
```

---

#  Modelo de Dados

## Utilizador

| Campo | Tipo |
|---------|---------|
| id | Integer |
| name | String |
| email | String |
| password | String |

---

## Animal

| Campo | Tipo |
|---------|---------|
| id | Integer |
| name | String |
| species | String |
| breed | String |
| age | String |
| size | String |
| description | Text |
| photo | String |
| status | String |
| owner_id | Integer |

---

## Interest

| Campo | Tipo |
|---------|---------|
| id | Integer |
| user_id | Integer |
| animal_id | Integer |
| message | Text |

---

#  Fluxo do Sistema

```text
Utilizador
    ↓
Login / Cadastro
    ↓
Cadastro de Animal
    ↓
Base de Dados SQLite
    ↓
Listagem de Animais
    ↓
Visualização de Detalhes
    ↓
Manifestação de Interesse
    ↓
