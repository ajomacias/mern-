'use strict'

export const getProductos = async (req, res) => {
    res.send("Hola productos!");
}

export const getProducto = async (req, res) => {
    res.send("Hola producto")
}

export const deleteProducto = async (req, res) => {
    res.send("Hola delete producto")
}

export const createProducto = async (req, res) => {
    res.send("Hola create producto")
}

export const updateProducto = async (req, res) => {
    res.send("Hola update producto")
}