var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var livroFavorito = req.body.livroServer;
    var fkIndicado = req.body.indicadoServer;

    //             nomeServer: nomeVar,
    //             emailServer: emailVar,
    //             senhaServer: senhaVar,
    //             livroServer: livroVar,
    //             indicacaoServer: indicacaoVar,
    //             localServer: localVar,
    //             materialServer: materialVar,
    //             carroVar: carroVar

    // Faça as validações dos valores
    if        (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
            res.status(400).send("Sua senha está undefined!");
    } else if (livroFavorito == undefined) {
        res.status(400).send("Seu livroFavorito está undefined!");
    } else if (fkIndicado == undefined) {
        res.status(400).send("Seu fkIndicado está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, livroFavorito, fkIndicado)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar1(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var local = req.body.localServer;
    var material = req.body.materialServer;
    var carroGaragem = req.body.carroServer

    //             nomeServer: nomeVar,
    //             emailServer: emailVar,
    //             senhaServer: senhaVar,
    //             livroServer: livroVar,
    //             indicacaoServer: indicacaoVar,
    //             localServer: localVar,
    //             materialServer: materialVar,
    //             carroVar: carroVar

    // Faça as validações dos valores
    if (local == undefined) {
        res.status(400).send("Seu local está undefined!");
    } else if (material == undefined) {
        res.status(400).send("Seu material está undefined!");
    } else if (carroGaragem == undefined) {
        res.status(400).send("Seu carroGaragem está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar1(local, material, carroGaragem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    entrar,
    cadastrar,
    cadastrar1,
    listar,
    testar
}