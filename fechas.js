const fechaHoy = new Date();

const fechaNacimiento = new Date("1986-05-28");

const esMasTarde = fechaHoy > fechaNacimiento;

const diaNacimiento = fechaNacimiento.getDate();

const mesNacimiento = fechaNacimiento.getMonth();

const anioNacimiento = fechaNacimiento.getFullYear();

console.log("Fecha de hoy:", fechaHoy);
console.log("Fecha de nacimiento:", fechaNacimiento);
console.log("¿Hoy es más tarde que la fecha de nacimiento?", esMasTarde);
console.log("Día de nacimiento:", diaNacimiento);
console.log("Mes de nacimiento (recuerda que Enero es mes 0):", mesNacimiento);
console.log("Año de nacimiento (con 4 dígitos):", anioNacimiento);
