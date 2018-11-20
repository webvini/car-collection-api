const mock = [
  {"id": 1, "name": "A1"},
  {"id": 2, "name": "A2"}
]

const getAll = () => {
  return new Promise(response => {
    response(mock)
  })
}

module.exports = {
  getAll
}