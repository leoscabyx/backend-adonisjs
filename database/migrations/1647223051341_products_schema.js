'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('title', 100)
      table.string('description', 255)
      table.string('code', 10)
      table.float('price')
      table.string('thumbnail', 2500)
      table.integer('stock')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
