'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Database = use('Database')

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const productos = await Database.table('products').select('*')
    response.json({msj: 'Todos los productos', productos})
  }

  /**
   * Render a form to be used for creating a new product.
   * GET products/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const productId = await Database.table('products').insert({
      title: 'Producto Adonis xD', 
      description: 'Lorem Adonis xD',
      code: 'AA11XX',
      price: 1000,
      thumbnail: 'URL Adonis xD',
      stock: 10
    })
    response.json({msj: 'Nuevo Producto', producto: productId})
  }

  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const product = await Database.from('products').where('id', params.id)
    response.json({msj: '1 solo producto', producto: product})
  }

  /**
   * Render a form to update an existing product.
   * GET products/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const result = await Database.table('products').where('id', params.id)
      .update({
        title: 'Producto Actualizado Adonis xD', 
        description: 'Lorem Actualizado Adonis xD',
        code: 'AA11XX',
        price: 5000,
        thumbnail: 'URL Actualizado Adonis xD',
        stock: 50
      })
    
    const product = await Database.from('products').where('id', params.id)

    response.json({msj: 'Actualizar producto', producto: product})
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const product = await Database.from('products').where('id', params.id)

    const result = await Database.table('products').where('id', params.id).delete()

    response.json({msj: 'Eliminar producto', producto: product})
  }
}

module.exports = ProductController
