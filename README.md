# SPED – Task Tracker API

API REST para gerenciamento de tarefas, desenvolvida como parte de um desafio técnico, com foco em **arquitetura limpa**, **boas práticas** e **separação de responsabilidades**.

---

## 🚀 Stack Tecnológica

- **Linguagem:** C#
- **Framework:** .NET 8
- **Modelo:** ASP.NET Core Web API
- **ORM:** Entity Framework Core
- **Banco de Dados:** InMemory (ambiente de demonstração)
- **IDE:** Visual Studio 2022

---

## 📐 Padrões e Convenções

- **Nomenclatura de arquivos:** PascalCase  
- **Padrão de commits:**
  - `feat:` novas funcionalidades
  - `fix:` correção de bugs
  - `chore:` organização e configuração
- **DTOs:** não utilizados (fora do escopo do desafio)

---

## 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura em camadas, priorizando **manutenibilidade**, **testabilidade** e **clareza**.

```text
Controllers/   → Endpoints da API
Models/        → Entidades e enums de domínio
Services/      → Regras de negócio
Repositories/  → Acesso a dados
Data/          → DbContext (Entity Framework Core)
```

### Responsabilidades das Camadas

- **Controllers**  
  Camada de entrada da aplicação. Responsável por receber requisições HTTP e orquestrar o fluxo entre as camadas.

- **Models**  
  Representação do domínio da aplicação, incluindo entidades e enums.

- **Services**  
  Centralizam as regras de negócio e garantem a consistência do domínio.

- **Repositories**  
  Abstração do acesso a dados, isolando a persistência da regra de negócio.

- **Data**  
  Configuração do Entity Framework Core e mapeamento das entidades.


## 🗄️ Configuração do Banco de Dados

O projeto utiliza **Entity Framework Core** com banco **InMemory**, configurado via injeção de dependência:

```csharp
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseInMemoryDatabase("SpedTaskDb"));
```
Os dados são mantidos apenas em memória e reiniciados a cada execução da aplicação


## 🔁 Serialização de Enums

Para melhorar a legibilidade das respostas da API, os enums são serializados como **string** em vez de valores numéricos:

```csharp
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.Converters.Add(
        new JsonStringEnumConverter()
    );
});
```
Referência oficial:
https://learn.microsoft.com/pt-br/dotnet/api/system.text.json.serialization.jsonstringenumconverter


## ⚙️ Regras de Negócio

- Na criação de uma tarefa:
  - `DataCriacao` é definida automaticamente
  - `Status` inicia como **Pendente**

- Na atualização:
  - Título, descrição e status podem ser alterados
  - `DataCriacao` é preservada

- Validação de existência da tarefa antes de operações de **update** e **delete**

---

## 🔌 Endpoints da API

### Base URL
```text
http://localhost:5147/api/Task
```


### Operações Disponíveis

| Método  | Rota             | Descrição              |
|--------|------------------|------------------------|
| GET    | `/api/Task`      | Lista todas as tarefas |
| POST   | `/api/Task`      | Cria uma nova tarefa   |
| GET    | `/api/Task/{id}` | Busca tarefa por ID    |
| PUT    | `/api/Task/{id}` | Atualiza uma tarefa    |
| DELETE | `/api/Task/{id}` | Remove uma tarefa      |

### Rota para testes (Postman)
https://.postman.co/workspace/My-Workspace~728b5d63-f992-4a19-8393-584e32d9fd7c/folder/29214738-148accd4-6fc5-4f41-9c4b-0ca6a75412cb?action=share&creator=29214738&ctx=documentation

---

Post:

<img width="829" height="545" alt="image" src="https://github.com/user-attachments/assets/d3f38011-8162-40d1-be3a-f53dd720c272" />

---

Get:

<img width="828" height="409" alt="image" src="https://github.com/user-attachments/assets/2f26e1f8-00e3-4ab7-a045-e7954df0635e" />

---

GetById:

<img width="824" height="325" alt="image" src="https://github.com/user-attachments/assets/3e1f2633-5516-471d-9bdb-8eb2bcfdd427" />

---

Put:

<img width="817" height="371" alt="image" src="https://github.com/user-attachments/assets/57bab21f-cd86-4ef2-85c3-6de258f6fdb0" />
<img width="820" height="348" alt="image" src="https://github.com/user-attachments/assets/c69f926d-2bb0-4c9d-afc1-16c360a0477e" />

---

Delete:

<img width="523" height="203" alt="image" src="https://github.com/user-attachments/assets/2adbefec-4aaf-4f4e-af53-f09e39111fe3" />

---


## ℹ️ Observação sobre o Histórico de Commits

Durante a criação do projeto, ao realizar ajustes na organização e visualização das pastas do repositório, o histórico de commits foi consolidado.

Apesar disso, a **atividade total de commits ainda pode ser visualizada na aba *Activity* do GitHub**, mantendo a rastreabilidade das interações realizadas ao longo do desenvolvimento.

https://github.com/malignoMP3/Sped-Task-Tracker/activity

---

