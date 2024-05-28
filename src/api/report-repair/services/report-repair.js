'use strict';

/**
 * report-repair service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::report-repair.report-repair');
