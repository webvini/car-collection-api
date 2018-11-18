const mock = [
  {"id": 1, "name": "AUDI", "slug": "audi"},
  {"id": 2, "name": "BMW", "slug": "bmw"},
  {"id": 3, "name": "FIAT", "slug": "fiat"}
]

const getAll = () => {
  return new Promise(response => {
    response(mock)
  })
}

module.exports = {
  getAll
}