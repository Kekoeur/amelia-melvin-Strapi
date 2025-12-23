module.exports = {
  async beforeUpdate(event) {
    const { data, where } = event.params;
    
    if (data.publishedAt && !data.publishedAt.$null) {
      event.params.where = { documentId: where.documentId };
    }
  },
};
