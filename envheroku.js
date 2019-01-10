/*
Caracteristica: envheroku
A fin de poder descargar el fuente del repositorio y ejecutarlo sin pasos extras
Siendo un desarrollador
Yo quiero quiero escribir las variables del entorno de heroku en el archivo .env

Escenario: escribo el archivo .env
Dado que tengo variables del entorno en heroku
Cuando ejecuto node envheroku.js
Entonces obtengo un archivo .env con las variables del entorno de heroku llave=valor
*/

var fs = require('fs');
// ejecutar heroku config para obtener las variables de entorno de heroku en formato string
const { exec } = require('child_process');
exec('heroku config', (err, stdout) => {
    if (err) {
        return;
    }
    // hacer split del string para obtener un array con llaves y valores
    var splitA = stdout.split(/\n/g);
    splitA.pop()
    splitA.shift()
        // ciclar ese array
    if (fs.existsSync('.env')) {
        fs.unlinkSync('.env')
    }
    for (var i = 0; i < splitA.length; i++) {
        var record = splitA[i]
        var recordArray = record.split(": ", 2)
        var llave = recordArray[0]
        var valor = recordArray[1]
        valor = valor.trim()
            // setear las variables de entorno usando las llaves y valores que saque del heroku
        var documento = llave + '=' + valor + "\n"
        fs.appendFileSync('.env', documento)
    }
});