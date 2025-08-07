import { type SchemaTypeDefinition } from 'sanity';
import { contactType } from './contactType';
import { inquiryType } from './inquiryType';
import { newsletterType } from './newsletterType';
import { blockContentType } from './blockContentType';
import { unitType } from './unitType';
import { amenityType } from './amenityType';
import { neighborhoodType } from './neighborhoodType';
import { propertyTeamType } from './propertyTeamType';
import { serviceType } from './serviceType';
import { blogType } from './blogType';
import { categoryType } from './categoryType';
import { maintainanceType } from './maintainanceType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    contactType,
    inquiryType,
    newsletterType,
    blockContentType,
    unitType,
    amenityType,
    neighborhoodType,
    propertyTeamType,
    serviceType,
    blogType,
    categoryType,
    maintainanceType,
  ],
};
