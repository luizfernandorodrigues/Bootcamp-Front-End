import { GenericSchema } from './generic-schema';

export interface Vehicle extends GenericSchema {
  vehicle_class: string;
  passengers: string;
  pilots: string[];
  name: string;
  created: string;
  url: string;
  cargo_capacity: string;
  edited: string;
  consumables: string;
  max_atmosphering_speed: string;
  crew: string;
  length: string;
  films: string[];
  model: string;
  cost_in_credits: string;
  manufacturer: string;
}
