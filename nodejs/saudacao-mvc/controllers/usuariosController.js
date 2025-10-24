const usuariosModel = require('../models/usuariosModel'); // Confirme se o nome do arquivo está certo!

module.exports = {

    index: (req, res) => {
        // Corrigido o caminho do diretório raiz
        res.sendFile('usuarios.html', { root: './views' });
    },

    formulario: (req, res) => {
        // Corrigido '.views' -> './views'
        res.sendFile('formLogin.html', { root: './views' });
    },

    login: (req, res) => {
        const { login, senha } = req.body;

        // Verifique se clientesModel exporta corretamente gerarMensagemLogin
        const mensagemLogin = usuariosModel.gerarMensagemLogin(login, senha);

        // Corrigido: usar template string com crases
        res.send(`<h1>${mensagemLogin}</h1>`);
    }
};
