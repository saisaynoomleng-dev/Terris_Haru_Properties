import { LuMailPlus } from 'react-icons/lu';
import { defineField, defineType } from 'sanity';

export const newsletterType = defineType({
  name: 'newsletter',
  title: 'Newsletters',
  icon: LuMailPlus,
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
});
