import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bagmon {
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
  pokemonType: string;

  @Column('varchar', { length: 255 })
  region: string;

  @Column()
  types: string[];

  @Column()
  attributes: string[];

  @Column('varchar', { length: 255 })
  ability: string;

  @Column()
  weight: number[];

  @Column()
  height: number[];

  @Column()
  weakness: string[];

  @Column()
  strengths: string[];

  @Column()
  imune: string[];

  @Column()
  evolutions: string[];

  @Column('varchar', { length: 255 })
  reference: string;

  @Column('varchar', { length: 255 })
  referenceText: string;

  @Column('varchar', { length: 255 })
  threatOfExtinction: string;
}
