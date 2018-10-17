'use strict';

/**
 * ItemList.js controller
 *
 * @description: A set of functions called "actions" for managing `ItemList`.
 */

module.exports = {

  /**
   * Retrieve itemList records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.itemList.search(ctx.query);
    } else {
      return strapi.services.itemList.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a itemList record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.itemList.fetch(ctx.params);
  },

  /**
   * Count itemList records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.itemList.count(ctx.query);
  },

  /**
   * Create a/an itemList record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.itemList.add(ctx.request.body);
  },

  /**
   * Update a/an itemList record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.itemList.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an itemList record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.itemList.remove(ctx.params);
  }
};
