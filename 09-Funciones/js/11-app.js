// parametros en un arrow

const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('javaScript');

// si es sólo un parametro no ocupamos los paréntesis

const aprendiendo1 = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo1('javaScript');

//multiples parámetros
const aprendiendo2 = (tec1, tec2) => console.log(`Aprendiendo ${tec1} y ${tec2}`);
aprendiendo2('javaScript', 'CSS');