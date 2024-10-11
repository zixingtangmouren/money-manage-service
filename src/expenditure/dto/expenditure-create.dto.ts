import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Period } from 'src/liabilities/dto/liabilitie-create.dto';

export enum ExpenditureType {
  // 长期
  LongTerm = 'long-term',
  // 短期
  ShortTerm = 'short-term',
}

export class ExpenditureCreateDto {
  @IsString()
  name: string;
  @IsNumber()
  money: number;
  @IsEnum(Period)
  period: string;
  @IsEnum(ExpenditureType)
  type: ExpenditureType;
  @IsString()
  paymentTime: string;

  @IsOptional()
  startTime: number;
  @IsOptional()
  endTime: number;
}
