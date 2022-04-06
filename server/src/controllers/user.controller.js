'use strict'

export const getUsers = async (req, res) => {
    res.send("Hola Users!");
}

export const getUser = async (req, res) => {
    res.send("Hola User")
}

export const deleteUser = async (req, res) => {
    res.send("Hola delete User")
}

export const createUser = async (req, res) => {
    res.send("Hola create User")
}

export const updateUser = async (req, res) => {
    res.send("Hola update User")
}