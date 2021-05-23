/* Importamos la libreria de telegram api */
const TelegramBot = require('node-telegram-bot-api');
/* Creamos una constante que almacena nuestro token de telegram */
const token = 'TU_API_KEY';
/* Crear la conexion con nuestro bot que recibe los eventos */
const bot = new TelegramBot(token,{polling:true});

/* Cada vez que se recibe un mensaje hace lo siguiente */
bot.on('message',(msg)=>{
    console.log(msg);
    bot.sendMessage(msg.chat.id,"Hola "+msg.from.first_name);
});

/* Cada vez que alguien escribe Que tal se hace lo siguiente */
bot.onText(/^\Que tal/, (msg) => {
    bot.sendMessage(msg.chat.id, "Escirbiste: "+msg.text);
});