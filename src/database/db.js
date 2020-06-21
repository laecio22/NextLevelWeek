//importar adependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto para fazer operaçõesde banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//utilizar o objeto de banco de dados para nossas operções
module.exports = db
db.serialize(() => {
    //criar uma tabela com comandos sql
   /* db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)*/
    //inserir dados na tabela*/
    
  /*const query = `
    INSERT INTO places(
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES(?,?,?,?,?,?,?);
 `

    const values = [
        "https://images.unsplash.com/photo-1558583055-d7ac00b1adca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Metalicana",
        "Avenida Maranhão, Dirceu",
        "Numero 12780",
        "Marabhão",
        "Timon",
        "Papeloes"
    ]

    function afterInsertData(err){
        if(err) {
            return console.log(err)
        }

        console.log("cadastrado com sucesso")
        console.log(this)
      
    }

    
    db.run(query, values, afterInsertData)*/
    
     //consultar dados da tabela
   /*db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        console.log("Aqui estão seus cadastros")
        console.log(rows)
     })*/
    
          

    //deletar um dado na tabela

  /*db.run(`DELETE FROM places `,  function(err){
        if(err) {
            return console.log(err)
        }
        
        console.log("item deletado com sucesso")

    })*/

})
