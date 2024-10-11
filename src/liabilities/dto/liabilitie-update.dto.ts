import { IsNumber, IsString, IsEnum, IsOptional } from 'class-validator';
import { Period } from './liabilitie-create.dto';

export class LiabilitieUpdateDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  total: number;

  @IsEnum(Period)
  @IsOptional()
  period: string;

  @IsNumber()
  @IsOptional()
  money: number;

  @IsNumber()
  @IsOptional()
  startTime: number;

  @IsNumber()
  @IsOptional()
  endTime: number;
}
