const { sanitizeEntity } = require('strapi-utils')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findOne(ctx) {
    const { id } = ctx.params

    const entity = await strapi.services.website.findOne({ domain: id })
    return entity ? sanitizeEntity({ ...entity, id }, { model: strapi.models.website }) : null
  },
}