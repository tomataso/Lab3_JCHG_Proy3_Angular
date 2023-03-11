var faker = require('faker');

var database = { componentes: []};

for (var i = 1; i<= 10; i++) {
  database.componentes.push({
    id: i,
    nombre: faker.commerce.productName(),
    descripcion: faker.lorem.sentences(),
	fabricacion: faker.date.past(),
	parte:faker.datatype.number(),
	comentarios: faker.lorem.sentences() 
  });
}

console.log(JSON.stringify(database));
