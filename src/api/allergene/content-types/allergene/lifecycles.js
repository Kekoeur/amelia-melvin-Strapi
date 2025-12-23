module.exports = {
  async beforeUpdate(event) {
    const { data, where } = event.params;
    
    // Si on essaie de publier
    if (data.publishedAt && !data.publishedAt.$null) {
      // S'assurer qu'on fait un UPDATE et pas un INSERT
      event.params.where = { documentId: where.documentId };
    }
  },
};
