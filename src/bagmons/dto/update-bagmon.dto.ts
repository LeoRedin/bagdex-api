import { PartialType } from '@nestjs/swagger';
import { CreateBagmonDto } from './create-bagmon.dto';

export class UpdateBagmonDto extends PartialType(CreateBagmonDto) {}
