const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, lista = false, hasta) => {
        
    try {

        let salida = '';
        let consola = '';

        for(let i = 1; i <= hasta ; i++){
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${colors.america('X')} ${i} = ${base * i}\n`;
        }

        if(lista){
            console.log(colors.green('===================='));
            console.log(colors.blue.underline(` Tabla del ${base}`));
            console.log(colors.green('===================='));
            console.log(consola);
        }
            
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }
        
}

module.exports = {
    crearArchivo
}