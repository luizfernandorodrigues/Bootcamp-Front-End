import { GenericSchema } from './generic-schema';

export interface People extends GenericSchema {
  starships: string[];
  edited: string;
  name: string;
  created: string;
  url: string;
  gender: string;
  vehicles: string[];
  skin_color: string;
  hair_color: string;
  height: string;
  eye_color: string;
  mass: string;
  films: unknown[];
  species: unknown[];
  homeworld: string;
  birth_year: string;
}
