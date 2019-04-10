import { Application } from 'src/app/interfaces/application';

export interface Category{
  id: string;
  title: string;
  description: string;
  applications: Array<any>;
  subCategories: Array<any>;
  superCategory: Category;
}