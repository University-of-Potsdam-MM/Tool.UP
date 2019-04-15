import { Application } from './application';

export interface Feature {
    id: string;
    title: string;
    applications: Array<any>;
}
