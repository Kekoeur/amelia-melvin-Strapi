import type { Schema, Struct } from '@strapi/strapi';

export interface CouleurCouleur extends Struct.ComponentSchema {
  collectionName: 'components_couleur_couleurs';
  info: {
    displayName: 'Couleur';
    icon: 'paint';
  };
  attributes: {
    CouleurBasic: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface CouleurCouleurPourcent extends Struct.ComponentSchema {
  collectionName: 'components_couleur_couleur_pourcents';
  info: {
    displayName: 'CouleurPourcent';
    icon: 'paint';
  };
  attributes: {
    Couleur: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    Pourcent: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<100>;
  };
}

export interface CouleurLinearGradient extends Struct.ComponentSchema {
  collectionName: 'components_couleur_linear_gradients';
  info: {
    displayName: 'LinearGradient';
    icon: 'paint';
  };
  attributes: {
    DegreAngle: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 360;
          min: 0;
        },
        number
      >;
    GradientCouleur: Schema.Attribute.Component<
      'couleur.couleur-pourcent',
      true
    >;
    Type: Schema.Attribute.Enumeration<['color-stop', 'color-hint']>;
  };
}

export interface InfosContact extends Struct.ComponentSchema {
  collectionName: 'components_infos_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    Contact: Schema.Attribute.Component<'type.list-contact', true>;
    Desc: Schema.Attribute.RichText;
    Titre: Schema.Attribute.String;
  };
}

export interface InfosLieu extends Struct.ComponentSchema {
  collectionName: 'components_infos_lieus';
  info: {
    displayName: 'Lieu';
  };
  attributes: {
    Latitude: Schema.Attribute.String;
    Longitude: Schema.Attribute.String;
    Plan: Schema.Attribute.Component<'media-image.media', false>;
    Titre: Schema.Attribute.String;
  };
}

export interface InfosTrajet extends Struct.ComponentSchema {
  collectionName: 'components_infos_trajets';
  info: {
    displayName: 'Trajet';
  };
  attributes: {
    Logo: Schema.Attribute.Component<'media-image.media', false>;
    Titre: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MediaImageMedia extends Struct.ComponentSchema {
  collectionName: 'components_media_image_media';
  info: {
    displayName: 'Media';
    icon: 'landscape';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ImgAlt: Schema.Attribute.String;
    ImgTitle: Schema.Attribute.String;
  };
}

export interface PresentationDateHistoire extends Struct.ComponentSchema {
  collectionName: 'components_presentation_date_histoires';
  info: {
    displayName: 'DateHistoire';
  };
  attributes: {
    Date: Schema.Attribute.DateTime;
    Desc: Schema.Attribute.RichText;
    Image: Schema.Attribute.Component<'media-image.media', false>;
    Lieu: Schema.Attribute.String;
    Titre: Schema.Attribute.String;
  };
}

export interface PresentationPresentation extends Struct.ComponentSchema {
  collectionName: 'components_presentation_presentations';
  info: {
    displayName: 'Presentation';
  };
  attributes: {
    ListeSurnom: Schema.Attribute.Component<'type.liste-string', true>;
    ListLien: Schema.Attribute.Component<'type.liste-string', true>;
    Personne: Schema.Attribute.String;
    Presentation: Schema.Attribute.Blocks;
    Profession: Schema.Attribute.String;
    ProfilPicture: Schema.Attribute.Component<'media-image.media', true>;
    Type: Schema.Attribute.Enumeration<
      [
        'mari\u00E91',
        'mari\u00E9e2',
        'T\u00E9moinM1',
        'TemoinM2',
        'T\u00E9moinA1',
        'TemoinA2',
        'Gar\u00E7onHonneurM',
        'DemoiselleHonneurM',
        'Gar\u00E7onHonneurA',
        'DemoiselleHonneurA',
        'MaitreTemps',
      ]
    >;
  };
}

export interface SectionFormInvite extends Struct.ComponentSchema {
  collectionName: 'components_section_form_invites';
  info: {
    displayName: 'FormInvite';
  };
  attributes: {
    DisplayInput: Schema.Attribute.Component<'type.input-invite', true>;
    Titre: Schema.Attribute.String;
  };
}

export interface SectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_section_headings';
  info: {
    displayName: 'Heading';
    icon: 'code';
  };
  attributes: {
    Image: Schema.Attribute.Component<'media-image.media', false>;
    Logo: Schema.Attribute.Component<'media-image.media', false>;
    Titre: Schema.Attribute.String;
  };
}

export interface SectionHistoire extends Struct.ComponentSchema {
  collectionName: 'components_section_histoires';
  info: {
    displayName: 'Histoire';
  };
  attributes: {
    Event: Schema.Attribute.Component<'presentation.date-histoire', true>;
    Titre: Schema.Attribute.String;
  };
}

export interface SectionImageDivider extends Struct.ComponentSchema {
  collectionName: 'components_section_image_dividers';
  info: {
    displayName: 'ImageDivider';
  };
  attributes: {
    Image: Schema.Attribute.Component<'media-image.media', false>;
    Titre: Schema.Attribute.String;
  };
}

export interface SectionPresentation extends Struct.ComponentSchema {
  collectionName: 'components_section_presentations';
  info: {
    displayName: 'Presentation';
  };
  attributes: {
    Honneur: Schema.Attribute.Component<'presentation.presentation', true>;
    MaitreTemps: Schema.Attribute.Component<'presentation.presentation', false>;
    Maries: Schema.Attribute.Component<'presentation.presentation', true>;
    Temoins: Schema.Attribute.Component<'presentation.presentation', true>;
    TitreHonneur: Schema.Attribute.String;
    TitreMaitreTemps: Schema.Attribute.String;
    TitreMaries: Schema.Attribute.String;
    TitreTemoin: Schema.Attribute.String;
  };
}

export interface SectionSectionDate extends Struct.ComponentSchema {
  collectionName: 'components_section_section_dates';
  info: {
    displayName: 'SectionDate';
  };
  attributes: {
    Date: Schema.Attribute.Date;
    event: Schema.Attribute.Component<'presentation.date-histoire', true>;
  };
}

export interface SectionTitreText extends Struct.ComponentSchema {
  collectionName: 'components_section_titre_texts';
  info: {
    displayName: 'TitreText';
  };
  attributes: {
    Desc: Schema.Attribute.RichText;
    Titre: Schema.Attribute.String;
  };
}

export interface TypeChoixPoliceHtml extends Struct.ComponentSchema {
  collectionName: 'components_type_choix_police_htmls';
  info: {
    displayName: 'ChoixPoliceHTML';
  };
  attributes: {
    Elements: Schema.Attribute.Component<'type.item-html', true>;
    Police: Schema.Attribute.Component<'type.police', false>;
  };
}

export interface TypeContact extends Struct.ComponentSchema {
  collectionName: 'components_type_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    Nom: Schema.Attribute.String;
    NumTel: Schema.Attribute.String;
  };
}

export interface TypeInputInvite extends Struct.ComponentSchema {
  collectionName: 'components_type_input_invites';
  info: {
    displayName: 'InputInvite';
  };
  attributes: {
    InputType: Schema.Attribute.Enumeration<
      ['Nom', 'Matin', 'Midi', 'Soir', 'Retour', 'Allergies', 'Message']
    >;
    Question: Schema.Attribute.String;
  };
}

export interface TypeItemHtml extends Struct.ComponentSchema {
  collectionName: 'components_type_item_htmls';
  info: {
    displayName: 'ItemHTML';
  };
  attributes: {
    Nom: Schema.Attribute.Enumeration<
      [
        'titre-principal (h1)',
        'sous-titre (h2)',
        'titre-section (h3)',
        'paragraphe (p)',
        'lien-navigation (.nav-link)',
        'titre-courbe (.heading-title-text)',
        'bouton (.button)',
        'dropdown (.dropdown-item)',
        'texte-formulaire (.form-label)',
        'badge-profil (.profile-name)',
      ]
    >;
  };
}

export interface TypeListContact extends Struct.ComponentSchema {
  collectionName: 'components_type_list_contacts';
  info: {
    displayName: 'ListContact';
  };
  attributes: {
    Contact: Schema.Attribute.Component<'type.contact', true>;
    Desc: Schema.Attribute.RichText;
    Titre: Schema.Attribute.String;
  };
}

export interface TypeListeString extends Struct.ComponentSchema {
  collectionName: 'components_type_liste_strings';
  info: {
    displayName: 'ListeString';
  };
  attributes: {
    Elt: Schema.Attribute.String;
  };
}

export interface TypePolice extends Struct.ComponentSchema {
  collectionName: 'components_type_police';
  info: {
    displayName: 'Police';
  };
  attributes: {
    Font: Schema.Attribute.Enumeration<
      [
        'Geist',
        'Geist_Mono',
        'josephSophia',
        'lovely_melody',
        'autography',
        'billing_lottre',
        'birds_of_paradise',
        'brittany_signature',
        'chetta_vissto',
        'cronde',
        'foremost',
        'halimun',
        'motterdam',
        'sinera',
        'velista',
        'zestful_christmas',
      ]
    >;
  };
}

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
      'couleur.couleur': CouleurCouleur;
      'couleur.couleur-pourcent': CouleurCouleurPourcent;
      'couleur.linear-gradient': CouleurLinearGradient;
      'infos.contact': InfosContact;
      'infos.lieu': InfosLieu;
      'infos.trajet': InfosTrajet;
      'media-image.media': MediaImageMedia;
      'presentation.date-histoire': PresentationDateHistoire;
      'presentation.presentation': PresentationPresentation;
      'section.form-invite': SectionFormInvite;
      'section.heading': SectionHeading;
      'section.histoire': SectionHistoire;
      'section.image-divider': SectionImageDivider;
      'section.presentation': SectionPresentation;
      'section.section-date': SectionSectionDate;
      'section.titre-text': SectionTitreText;
      'type.choix-police-html': TypeChoixPoliceHtml;
      'type.contact': TypeContact;
      'type.input-invite': TypeInputInvite;
      'type.item-html': TypeItemHtml;
      'type.list-contact': TypeListContact;
      'type.liste-string': TypeListeString;
      'type.police': TypePolice;
      'user.qui': UserQui;
    }
  }
}
