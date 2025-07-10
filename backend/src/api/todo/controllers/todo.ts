/**
 * todo controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::todo.todo');

'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::todo.todo', ({ strapi }) => ({

  // ✅ GET /api/todos
  async find(ctx) {
    const todos = await strapi.entityService.findMany('api::todo.todo', {
      sort: { createdAt: 'DESC' },
    });
    return todos;
  },

  // ✅ GET /api/todos/:id
  async findOne(ctx) {
    const { id } = ctx.params;
    const todo = await strapi.entityService.findOne('api::todo.todo', id);
    return todo;
  },

  // ✅ POST /api/todos
  async create(ctx) {
    const { title, completed = false } = ctx.request.body.data;

    const newTodo = await strapi.entityService.create('api::todo.todo', {
      data: { title, completed },
    });

    return newTodo;
  },

  // ✅ PUT /api/todos/:id
  async update(ctx) {
    const { id } = ctx.params;
    const { title, completed } = ctx.request.body.data;

    const updatedTodo = await strapi.entityService.update('api::todo.todo', id, {
      data: { title, completed },
    });

    return updatedTodo;
  },

  // ✅ DELETE /api/todos/:id
  async delete(ctx) {
    const { id } = ctx.params;

    const deletedTodo = await strapi.entityService.delete('api::todo.todo', id);

    return deletedTodo;
  },
}));
