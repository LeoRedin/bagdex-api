export type TPokemonType = 'inicial' | 'comum' | 'm´ítico' | 'lendário';

export type TRegion = 'Centro-Oeste' | 'Nordeste' | 'Norte' | 'Sudeste' | 'Sul';

export type TTypes =
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

export interface IAttribute {
  name: 'HP' | 'Ataque' | 'Defesa' | 'Ataque E' | 'Defesa E' | 'Velocidade';
  value: number;
}

export interface IWeightAndHeight {
  min: number;
  max: number;
  unit: string;
}

export interface IReference {
  name: string;
  scientificName: string;
  internationalName: string;
  description: string;
}

export interface IThreatOfExtinction {
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
