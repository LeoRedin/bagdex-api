import {
  IAttribute,
  IReference,
  IThreatOfExtinction,
  IWeightAndHeight,
  TPokemonType,
  TRegion,
  TTypes,
} from '../config/bagmon.interface';

export class Bagmon {
  number: Number;
  name: String;
  description: String;
  image?: String;
  pokemonType: TPokemonType;
  region: TRegion;
  types: Array<TTypes>;
  attributes: Array<IAttribute>;
  ability: String;
  weight: IWeightAndHeight;
  height: IWeightAndHeight;
  weakness?: Array<TTypes>;
  strengths?: Array<TTypes>;
  imune?: Array<TTypes>;
  evolutions?: Array<Bagmon>;
  reference: IReference;
  threatOfExtinction: IThreatOfExtinction;
}
