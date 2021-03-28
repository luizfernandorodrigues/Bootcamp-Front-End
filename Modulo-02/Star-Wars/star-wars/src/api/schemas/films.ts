import { GenericSchema } from './generic-schema';

export interface Film extends GenericSchema {
  starships: string[];
  edited: string;
  planets: string[];
  producer: string;
  title: string;
  url: string;
  release_date: string;
  vehicles: string[];
  episode_id: number;
  director: string;
  created: string;
  opening_crawl: string;
  characters: string[];
  species: string[];
}
