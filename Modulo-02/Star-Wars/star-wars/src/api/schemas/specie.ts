import { GenericSchema } from './generic-schema';

export interface Specie extends GenericSchema {
  edited: string;
  name: string;
  classification: string;
  people: string[];
  eye_colors: string;
  created: string;
  designation: string;
  skin_colors: string;
  language: string;
  url: string;
  hair_colors: string;
  homeworld: string;
  films: string[];
  average_lifespan: string;
  average_height: string;
}
