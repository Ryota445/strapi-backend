'use strict';

module.exports = {
  async me(ctx) {
    const user = ctx.state.user;
    if (!user) {
      return ctx.unauthorized();
    }
    try {
      const data = await strapi.entityService.findOne('plugin::users-permissions.user', user.id, {
        populate: ['responsible', 'role_in_web']
      });
      
      if (!data) {
        return ctx.notFound('User not found');
      }

      return ctx.send(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      return ctx.badRequest('Error fetching user data');
    }
  },

  async changeRole(ctx) {
    const { id } = ctx.params;
    const { roleId } = ctx.request.body;
  
    if (!id || !roleId) {
      return ctx.badRequest('User ID and Role ID are required');
    }
  
    try {
      const updatedUser = await strapi.entityService.update('plugin::users-permissions.user', id, {
        data: {
          role_in_web: roleId
        }
      });
  
      return ctx.send(updatedUser);
    } catch (error) {
      console.error('Error changing user role:', error);
      return ctx.badRequest('Error changing user role');
    }
  },
};