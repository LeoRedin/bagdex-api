type TPokemonType = 'inicial' | 'comum' | 'm´ítico' | 'lendário';

type TRegion = 'Centro-Oeste' | 'Nordeste' | 'Norte' | 'Sudeste' | 'Sul';

type TTypes =
  | 'Água'
  | 'Fogo'
  | 'Psíquico'
  | 'Aço'
  | 'Gelo'
  | 'Sintético'
  | 'Cósmico'
  | 'Inseto'
  | 'Som'
  | 'Dragão'
  | 'Lutador'
  | 'Sombrio'
  | 'Elétrico'
  | 'Normal'
  | 'Terra'
  | 'Fada'
  | 'Pedra'
  | 'Venenoso'
  | 'Fantasma'
  | 'Planta'
  | 'Voador';

interface IAttribute {
  name: 'HP' | 'Ataque' | 'Defesa' | 'Ataque E' | 'Defesa E' | 'Velocidade';
  value: Number;
}

interface IWeightAndHeight {
  min: Number;
  max: Number;
  unit: String;
}

interface IReference {
  name: String;
  scientificName: String;
  internationalName: String;
  description: String;
}

interface IThreatOfExtinction {
  abbreviation:
    | 'NE'
    | 'NA'
    | 'DD'
    | 'LC'
    | 'NT'
    | 'VU'
    | 'EN'
    | 'CR'
    | 'RE'
    | 'EW'
    | 'EX';
  name:
    | 'Não Avaliada'
    | 'Não Aplicável'
    | 'Dados Insuficientes'
    | 'Pouco Preocupante'
    | 'Quase Ameaçada'
    | 'Vulnerável'
    | 'Em Perigo'
    | 'Criticamente em Perigo'
    | 'Regionalmente Extinta'
    | 'Extinta na Natureza';
}

export class Bagmon {
  number: Number;
  name: String;
  description: String;
  image: String;
  pokemonType: TPokemonType;
  region: TRegion;
  types: Array<TTypes>;
  attributes: Array<IAttribute>;
  ability: String;
  weight: IWeightAndHeight;
  height: IWeightAndHeight;
  weakness: Array<TTypes>;
  strengths: Array<TTypes>;
  imune: Array<TTypes>;
  evolutions: Array<Bagmon>;
  reference: IReference;
  threatOfExtinction: IThreatOfExtinction;
}
