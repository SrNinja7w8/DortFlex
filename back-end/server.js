const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

async function DBB() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "ohomensefaz01",
      database: "usuarios",
    });
    return connection;
  } catch (err) {
    console.log("Erro ao conectar ao banco de dados: ", err);
  }
}

DBB()
  .then((connection) => {
    console.log("Banco de dados conectado com sucesso!");
  })
  .catch((err) => {
    console.log("Erro ao conectar ao banco de dados: ", err);
  });

app.post("/usuario", async (req, res) => {
  const connection = await DBB()
  const nink = req.body.nink
  const senha = req.body.senha
  await connection.execute("SELECT * FROM usuario WHERE nink = ?", [nink])
    .then(result => {
      const [rows] = result
      if(rows.length > 0) {
        console.log("Existe um usuário com esse nink")
      }
      else {
        console.log("Não existe um usuário com esse nink")
      }
  })

  await connection.execute("SELECT * FROM usuario WHERE nink = ? AND senha = ?", [nink, senha])
  .then(result => {
    const [rows] = result
    if(rows.length > 0) {
      res.status(200).send("logado")
      console.log("LOGADO COM SUCESSO")
    }
    else {
      res.status(401).send("inválidos")
      console.log("usuario ou senha invalidos")
    }
  })
  
})
app.get("/usuario", (req, res) => {
  res.send("oi")
})

app.listen(3000, () => {
  console.log(
    "servidor rodando na porta 3000: ",
    "http://localhost:3000/usuario"
  );
});
