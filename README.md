
# VUTTR (Very Useful Tools to Remember)

O aplicativo é um repositório simples para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Layonzera/VUTTR.git
```

Entre no diretório do projeto

```bash
  cd VUTTR
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
  yarn dev
```

## Documentação da API

#### Retorna todas as ferramentas

```http
  GET /tools
```

#### Retorna uma unica ferramenta

```http
  GET /tools/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string - uuid` | **Obrigatório**. O ID do item que você quer |

#### Cria uma ferramenta

```http
  POST /tools
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. O titulo com o nome da ferramenta
| `link`      | `string` |**Obrigatório**. O link onde encontra a ferramenta 
| `description`      | `string` |**Obrigatório**. Uma breve descrição sobre a ferramenta 
| `tags`      | `string` |**Obrigatório**. Tags da ferramenta |

#### Edita uma ferramenta

```http
  PUT /tools/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string - uuid` | **Obrigatório**. O ID da ferramenta
| `title`      | `string` |O titulo com o nome da ferramenta
| `link`      | `string` |O link onde encontra a ferramenta 
| `description`      | `string` |Uma breve descrição sobre a ferramenta 
| `tags`      | `string` |Tags da ferramenta |


#### Deleta uma ferramenta

```http
  DELETE /tools/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string - uuid` | **Obrigatório**. O ID da ferramenta
