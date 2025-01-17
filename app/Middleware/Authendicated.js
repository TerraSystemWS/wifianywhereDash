'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Env = use('Env')

class Authendicated {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, auth, response}, next) {
    try {
      await auth.check()
      
      return response.redirect('/')
    } catch (error) {
      // call next to advance the request
      await next()  
    }    
  }
}

module.exports = Authendicated
