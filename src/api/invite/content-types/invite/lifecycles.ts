export default {
  async beforeCreate(event) {
    const { data } = event.params;
    
    // Si on essaie de créer avec un documentId qui existe déjà
    if (data.documentId) {
      const existing = await strapi.db.query('api::invite.invite').findOne({
        where: { documentId: data.documentId }
      });
      
      // Si l'entrée existe, on fait un UPDATE au lieu d'un CREATE
      if (existing) {
        event.params = {
          ...event.params,
          where: { id: existing.id },
          data: {
            ...data,
            publishedAt: data.publishedAt || new Date(),
          }
        };
        
        // Transformer le beforeCreate en beforeUpdate
        return strapi.db.query('api::invite.invite').update(event.params);
      }
    }
  },

  async beforeUpdate(event) {
    const { data, where } = event.params;
    
    // Si on publie, s'assurer que publishedAt est défini
    if (data.publishedAt && !where.publishedAt) {
      event.params.data = {
        ...data,
        publishedAt: data.publishedAt === null ? null : (data.publishedAt || new Date()),
      };
    }
  },
};
