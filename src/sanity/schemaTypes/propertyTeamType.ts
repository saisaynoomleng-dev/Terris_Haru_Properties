import { FaUserGroup } from 'react-icons/fa6';
import { defineField, defineType } from 'sanity';

export const propertyTeamType = defineType({
  name: 'propertyTeam',
  title: 'Property Teams',
  icon: FaUserGroup,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Bio',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      email: 'email',
      image: 'image',
      position: 'position',
    },
    prepare({ name, email, image, position }) {
      const nameFormatted = `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;
      return {
        title: name ? `${nameFormatted} | ${position}` : nameFormatted,
        subtitle: email || 'No email provided',
        media: image || FaUserGroup,
      };
    },
  },
});
