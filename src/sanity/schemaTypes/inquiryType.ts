import { HiOutlineInformationCircle } from 'react-icons/hi';
import { defineField, defineType } from 'sanity';

export const inquiryType = defineType({
  name: 'inquiry',
  title: 'Inquiries',
  icon: HiOutlineInformationCircle,
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
      name: 'perferredRoom',
      title: 'Preferred Room',
      description: `It's better to suggest prferred room for customers`,
      type: 'string',
      options: {
        list: [
          { title: 'Studio', value: 'studio' },
          { title: '1 Bedroom', value: 'oneBedroom' },
          { title: '2 Bedrooms', value: 'twoBedroom' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Move in Date',
      type: 'date',
      validation: (rule) =>
        rule.custom((value) => {
          const today = new Date().toISOString().slice(0, 10);

          if (!value) return true;

          if (value <= today) {
            return 'Move in Date must be in the future';
          }
          return true;
        }),
      initialValue: new Date().toISOString(),
    }),
    defineField({
      name: 'employmentInfo',
      title: 'Employment Info',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      email: 'email',
      phone: 'phone',
    },
    prepare({ name, email, phone }) {
      return {
        title: name ? name : 'Unamed Customer',
        subtitle: phone && email ? `${phone} | ${email}` : '',
      };
    },
  },
});
