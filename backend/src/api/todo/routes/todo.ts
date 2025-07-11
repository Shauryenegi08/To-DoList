/**
 * todo router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::todo.todo');

'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/todos',
      handler: 'todo.find',
      config: { policies: [] },
    },
    {
      method: 'GET',
      path: '/todos/:id',
      handler: 'todo.findOne',
      config: { policies: [] },
    },
    {
      method: 'POST',
      path: '/todos',
      handler: 'todo.create',
      config: { policies: [] },
    },
    {
      method: 'PUT',
      path: '/todos/:id',
      handler: 'todo.update',
      config: { policies: [] },
    },
    {
      method: 'DELETE',
      path: '/todos/:id',
      handler: 'todo.delete',
      config: { policies: [] },
    },
  ],
};
