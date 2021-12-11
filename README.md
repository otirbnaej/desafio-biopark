# Biopark-Challenge

Code developed as a test in the Biopark selection process.
<br><br>

<h1 align=center>Biopark</h1>
REST API for <a href="https://www.biopark.com.br/">Biopark</a>.

---

## 📁 About

A Rest API where the user can create and list students.

---

## 🛠️ Tools

- NodeJS
- Express
- Typescript
- Prisma
- PostgreSQL

---

## 📄 How to use

- Install the dependencies:

```bash
$ yarn install
```

- Create '.env' file based on '.env.example'. Insert the following variables:

<b>PORT</b> = Application port. Ex.: 3000.

<b>DATABASE_URL</b> = URL to connect with PostgreSQL. Format: 'postgresql://USER:PASSWORD@HOST:PORT/DATABASE?SCHEMA=PUBLIC'.

Ex.: 'postgresql://joao:mypassword@localhost:5432/biopark?schema=public'

<br>

- Start application

```bash
$ yarn dev
```

---

## 🛤️ Routes

Create student:

<span style="color: green"> Post </span>- 'localhost:PORT/student'

Body example:

```json
{
	"name": "joao",
	"email": "joao@gmail.com",
	"cpf": "XXX.XXX.XXX-XX",
	"birthDate": "DD-MM-YYYY"
}
```

List students:

<span style="color: blue"> Get </span>- 'localhost:PORT/students'

---

## 💎 Prisma

You can run Prisma Studio from the command line to see data from database. Just run:

```bash
$ npx prisma studio
```

---

<h3>Developed by Jean Brito 🎈</h3>
