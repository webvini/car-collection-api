const mock = [
  {"id": 1, "name": "1.4 TFSI ATTRACTION 16V 122CV GASOLINA 2P AUTOMÁTICO"},
  {"id": 2, "name": "1.4 TFSI SPORT 16V 185CV GASOLINA 2P AUTOMÁTICO"},
  {"id": 3, "name": "1.4 TFSI SPORTBACK AMBITION 16V 185CV GASOLINA 4P AUTOMÁTICO"},
  {"id": 4, "name": "1.4 TFSI SPORTBACK ATTRACTION 16V 122CV GASOLINA 4P S-TRONIC"},
  {"id": 5, "name": "1.4 TFSI SPORTBACK SPORT EDITION 16V GASOLINA 4P S-TRONIC"},
  {"id": 6, "name": "1.8 TFSI SPORTBACK AMBITION GASOLINA 4P S-TRONIC"}
]

const getAll = () => {
  return new Promise(response => {
    response(mock)
  })
}

module.exports = {
  getAll
}