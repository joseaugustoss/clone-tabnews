function status(request, response) {
  response.status(200).json({
    'chave': 'Alos do curso.dev'
  })
}

export default status;
