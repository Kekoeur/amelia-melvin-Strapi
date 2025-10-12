export default {
  register({ strapi }) {
    // Log la config DB au démarrage
    console.log('🔍 DATABASE CONFIG:', {
      client: strapi.config.get('database.connection.client'),
      host: strapi.config.get('database.connection.connection.host'),
      database: strapi.config.get('database.connection.connection.database'),
    });
  },

  bootstrap({ strapi }) {
    // Log quand un allergène est créé
    strapi.db.lifecycles.subscribe({
      models: ['api::allergene.allergene'],
      async beforeCreate(event) {
        console.log('🆕 CREATING ALLERGENE:', event.params.data);
      },
      async afterCreate(event) {
        console.log('✅ ALLERGENE CREATED:', event.result);
      },
    });

    // Log quand un invite est créé
    strapi.db.lifecycles.subscribe({
      models: ['api::invite.invite'],
      async beforeCreate(event) {
        console.log('🆕 CREATING INVITE:', event.params.data);
      },
      async afterCreate(event) {
        console.log('✅ INVITE CREATED:', event.result);
      },
    });
  },
};
