import {
  IAttribute,
  IReference,
  IThreatOfExtinction,
  TPokemonType,
  TRegion,
  TTypes,
} from '../config/bagmon.interface';

export class Bagmon {
  id: number;
  number: string;
  name: string;
  description: string;
  image?: string;
  pokemonType: TPokemonType;
  region: TRegion;
  types: Array<TTypes>;
  attributes: Array<IAttribute>;
  ability: string;
  weight: number[];
  height: number[];
  weakness?: Array<TTypes>;
  strengths?: Array<TTypes>;
  imune?: Array<TTypes>;
  evolutions?: Array<Bagmon>;
  reference: IReference;
  threatOfExtinction: IThreatOfExtinction;
}
