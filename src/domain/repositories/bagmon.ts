import { BagmonModel } from '../model/bagmon';

export interface IBagmonRepository {
  insert(bagmon: BagmonModel): Promise<void>;
  findAll(): Promise<BagmonModel[]>;
  findById(id: number): Promise<BagmonModel>;
  updateContent(id: number): Promise<void>;
  deleteById(id: number): Promise<void>;
}
