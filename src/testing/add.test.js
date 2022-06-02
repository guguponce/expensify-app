const add = (a,b)=>a+b

test("suma a y b",()=>{
  const resultado = add(1,2)
  expect(resultado).toBe(3)
})

const saludar = (name) => `Hola, ${name}`

test("saludar",()=>{
  const saludo=saludar("jorge")
  expect(saludo).toBe("Hola, jorge")
})
