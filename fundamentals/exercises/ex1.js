
// First one 
console.log('Thanos says: "I' + "'m inevitable!"+'"');
console.log('Tony replies: "And I am... Iron Man!"');
console.log('And the theater goes: "OWWWWWWWWWW!"');

// Second one
const n = 2
const nn = Number(`${n}` + `${n}`)
const nnn = Number(`${n}` + `${n}` + `${n}`)
const soma = n + nn + nnn

console.log(`${n} + ${nn} + ${nnn} = ${soma}`)

// Third one 
const area = 4098
const litros = Math.ceil(area / 6)

const nLatas = Math.ceil(litros / 18)
const nGaloes = Math.ceil(litros / 4)

const precoLatas = nLatas * 80 
const precoGaloes = nGaloes * 25

console.log(`
Serão necessários:
>> ${litros} litros para ${area} m2.
>> ${nLatas} latas = R$ ${precoLatas}
>> ${nGaloes} galões = R$ ${precoGaloes}
`);
