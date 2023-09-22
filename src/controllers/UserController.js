// importando o framework
const { request } = require("express");
const { update } = require("../models/User");
const User = require("../models/User");

module.exports = {

    async index(request, response) {
        const users = await User.findAll({raw: true});

        return response.json(users)
    },

    async store(request, response) {
        const { name, email } = request.body;

        const user = await User.create({name, email});
        return response.json(user);
    },

        async update(request, response) {
            const { id } = request.params
            const {name, email} = request.body
            
            const user = await User.update(
                { name, email}, { where:{id:id} }
            );

            return response.json(user)
        },

        async delete(require, response) {
            // Enviando o id nos parametros da requisição
            const {id} = request.params;
            
            // função destroy() do sequilize é usada para deletar um registro do banco de dados
            const user = await User.destroy({where: {id: id} });

            return response.json(user)
        }

}