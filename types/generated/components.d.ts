import type { Schema, Struct } from '@strapi/strapi';

export interface UserQui extends Struct.ComponentSchema {
  collectionName: 'components_user_quis';
  info: {
    displayName: 'Qui';
  };
  attributes: {
    Nom: Schema.Attribute.String;
    Prenom: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'user.qui': UserQui;
    }
  }
}
