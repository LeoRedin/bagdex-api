import {
  IAttribute,
  IReference,
  IThreatOfExtinction,
  TPokemonType,
  TRegion,
  TTypes,
} from 'src/domain/config/bagmon.interface';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BagmonEntity {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column('varchar', { length: 255 })
  number: string;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('varchar', { length: 255 })
  description: string;

  @Column('varchar', { length: 255 })
  image: string;

  @Column('varchar', { length: 255 })
  pokemonType: TPokemonType;

  @Column('varchar', { length: 255 })
  region: TRegion;

  @Column()
  types: TTypes[];

  @Column()
  attributes: IAttribute[];

  @Column('varchar', { length: 255 })
  ability: string;

  @Column()
  weight: number[];

  @Column()
  height: number[];

  @Column()
  weakness: TTypes[];

  @Column()
  strengths: TTypes[];

  @Column()
  imune: TTypes[];

  @Column()
  evolutions: string[];

  @Column('varchar', { length: 255 })
  reference: IReference;

  @Column('varchar', { length: 255 })
  referenceText: string;

  @Column('varchar', { length: 255 })
  threatOfExtinction: IThreatOfExtinction;
}
