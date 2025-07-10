/**
 * todo service
 */

import { factories } from '@strapi/strapi';


export default factories.createCoreService('api::todo.todo');

'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::todo.todo');
