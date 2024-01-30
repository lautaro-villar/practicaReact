const consola = [

{

id: 1,
contenido: `
for (let i = 0; i < 10; i++) {
  const esPar = i % 2 === 0;
  if (esPar) {
    continue;
  }

  console.log(i); // Solo mostramos este console.log si es impar

  if (i === 7) {
    break; // Salimos del bucle al llegar al 7
  }
}
`,

estiloConsola: "consola1"

},

{
id: 2,
contenido: `
for (let i = 0; i < 10; i++) {
  const esPar = i % 2 === 0;
  if (esPar) {
    continue;
  }

  console.log(i); 

  if (i === 7) {
    break; 
  }
}
`,

estiloConsola: "consola2"

},

{

id: 3,
contenido: `
for (let i = 0; i < 10; i++) {
  const esPar = i % 2 === 0;
  if (esPar) {
    continue;
  }

  console.log(i); // Solo mostramos este console.log si es impar

  if (i === 7) {
    break; // Salimos del bucle al llegar al 7
  }
}
`,

estiloConsola: "consola3"

}

]

export default consola