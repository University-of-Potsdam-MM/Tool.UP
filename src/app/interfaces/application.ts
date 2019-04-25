import { Feature } from 'src/app/interfaces/feature';

export interface Application 
{
    id: string;
    title: string;
    description: string;
    features: Array<any>;
    categories: Array<any>;
}