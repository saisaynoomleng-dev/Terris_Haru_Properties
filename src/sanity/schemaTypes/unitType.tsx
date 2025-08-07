import { MdApartment } from 'react-icons/md';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { UnitPriceInput } from './components/unitPriceInput';

export const unitType = defineType({
  name: 'unit',
  title: 'Units',
  icon: MdApartment,
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
      name: 'plan',
      title: 'Room Plan',
      type: 'string',
      options: {
        list: [
          { title: 'Plan A', value: 'planA' },
          { title: 'Plan B', value: 'planB' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Room Type',
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
      name: 'bedroom',
      title: 'Number of Bedroom',
      type: 'number',
      initialValue: 1,
      validation: (rule) =>
        rule
          .required()
          .min(1)
          .max(2)
          .info(
            `We only have one bedroom and two bedrooms apartments at the moment`,
          ),
    }),
    defineField({
      name: 'bathroom',
      title: 'Number of Bathroom',
      type: 'number',
      initialValue: 1,
      validation: (rule) =>
        rule
          .required()
          .min(1)
          .max(2)
          .info(
            `We only have one bathroom and two bathrooms apartments at the moment`,
          ),
    }),
    defineField({
      name: 'sqft',
      title: 'Square Feet',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      components: {
        input: UnitPriceInput,
      },
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'isRented',
      title: 'Availablity',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'mainImages',
      title: 'Images',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'mainImage',
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
    }),
  ],
  preview: {
    select: {
      name: 'name',
      type: 'type',
      plan: 'plan',
      price: 'price',
      image: 'mainImages.0.asset',
    },
    prepare({ name, type, plan, price, image }) {
      const nameFormatted = name ? name : 'Untitled Unit';
      return {
        title: name ? `${nameFormatted} | ${plan}` : '',
        subtitle:
          type && price
            ? `${type.toUpperCase()} | ${price.toLocaleString()}`
            : '',
        media: image || MdApartment,
      };
    },
  },
});
