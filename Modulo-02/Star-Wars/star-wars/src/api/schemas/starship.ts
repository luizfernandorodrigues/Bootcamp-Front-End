import { GenericSchema } from './generic-schema';

export interface Starship extends GenericSchema {
  passengers: string;
  pilots: string[];
  name: string;
  hyperdrive_rating: string;
  url: string;
  cargo_capacity: string;
  edited: string;
  consumables: string;
  max_atmosphering_speed: string;
  crew: string;
  length: string;
  MGLT: string;
  starship_class: string;
  created: string;
  films: string[];
  model: string;
  cost_in_credits: string;
  manufacturer: string;
}
