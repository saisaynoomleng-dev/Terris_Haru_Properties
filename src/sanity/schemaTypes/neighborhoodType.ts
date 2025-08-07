import { FaSearchLocation } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const neighborhoodType = defineType({
  name: 'neighborhood',
  title: 'Neighborhoods',
  icon: FaSearchLocation,
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
      name: 'walkingDistance',
      title: 'Walking Distance',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'drivingDistance',
      title: 'Driving Distance',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Fitness', value: 'fitness' },
          { title: 'Shopping', value: 'shopping' },
          { title: 'Dining', value: 'dining' },
          { title: 'Park', value: 'park' },
          { title: 'Grocery', value: 'grocery' },
          { title: 'Cafe', value: 'cafe' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image',
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
      walkingDistance: 'walkingDistance',
      drivingDistance: 'drivingDistance',
      image: 'mainImage',
    },
    prepare({ name, walkingDistance, drivingDistance, image }) {
      return {
        title: name || 'Untitle Nearby',
        subtitle:
          walkingDistance && drivingDistance
            ? `Walk: ${walkingDistance} | Drive: ${drivingDistance}`
            : '',
        media: image || FaSearchLocation,
      };
    },
  },
});
