import { MdFitnessCenter } from 'react-icons/md';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const amenityType = defineType({
  name: 'amenity',
  title: 'Amenities',
  icon: MdFitnessCenter,
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
      name: 'floor',
      title: 'Floor',
      type: 'string',
      options: {
        list: [
          { title: 'First Floor', value: 'firstFloor' },
          { title: 'Second Floor', value: 'secondFloor' },
          { title: 'Rooftop', value: 'rooftop' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'mainImages',
      title: 'Images',
      type: 'array',
      of: [
        defineArrayMember({
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
      floor: 'floor',
      image: 'mainImages.0.asset',
    },
    prepare({ name, floor, image }) {
      return {
        title: name || 'Untitle Amenity',
        subtitle: floor || 'Unknown Floor',
        media: image || MdFitnessCenter,
      };
    },
  },
});
