import database from "infra/database.js"

async function status(request, response) {
  const result = await database.query('SELECT 1 + 1 as rows;')
  console.log(result.rows)
  response.status(200).json({
    'chave': 'Olá nós  no curso.dev'
  })
}

export default status;
