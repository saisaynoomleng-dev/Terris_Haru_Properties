import { FaSearchLocation } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import { GrServices } from 'react-icons/gr';
import { HiOutlineInformationCircle } from 'react-icons/hi2';
import { LuMailPlus } from 'react-icons/lu';
import {
  MdApartment,
  MdFitnessCenter,
  MdNewspaper,
  MdOutlineHomeRepairService,
  MdPhoneCallback,
} from 'react-icons/md';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.divider().title('Property'),
      S.documentTypeListItem('unit').title('Units').icon(MdApartment),
      S.documentTypeListItem('amenity')
        .title('Amenities')
        .icon(MdFitnessCenter),
      S.documentTypeListItem('neighborhood')
        .title('Neighborhoods')
        .icon(FaSearchLocation),
      S.documentTypeListItem('service')
        .title('Services')
        .icon(MdOutlineHomeRepairService),
      S.documentTypeListItem('blog').title('Blogs').icon(MdNewspaper),
      S.documentTypeListItem('propertyTeam')
        .title('Property Teams')
        .icon(FaUserGroup),

      S.divider().title('Management'),
      S.documentTypeListItem('contact').title('Contacts').icon(MdPhoneCallback),
      S.documentTypeListItem('inquiry')
        .title('Inquiries')
        .icon(HiOutlineInformationCircle),
      S.documentTypeListItem('newsletter').title('Newsletter').icon(LuMailPlus),
      S.documentTypeListItem('maintainance')
        .title('Maintainance Requests')
        .icon(GrServices),
    ]);
