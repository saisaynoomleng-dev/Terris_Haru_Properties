import { GrServices } from 'react-icons/gr';
import { defineField, defineType } from 'sanity';

export const maintainanceType = defineType({
  name: 'maintainance',
  title: 'Maintainance Request',
  icon: GrServices,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
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
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'roomNumber',
      title: 'Room Number',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Maintainance Type',
      type: 'string',
      options: {
        list: [
          { title: 'Plumbing', value: 'plumbing' },
          { title: 'electrical', value: 'electrical' },
          { title: 'HVAC', value: 'hvac' },
          { title: 'Appliances', value: 'appliances' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Problem Message',
      type: 'text',
      validation: (rule) =>
        rule
          .required()
          .min(20)
          .info(`Problem description must have at least 20 characters`),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      roomNumber: 'roomNumber',
      type: 'type',
    },
    prepare({ name, roomNumber, type }) {
      return {
        title: name || 'Unnamed Tanent',
        subtitle:
          roomNumber && type ? `Room: ${roomNumber} | Type: ${type}` : '',
      };
    },
  },
});
