import { IsNumber, IsString, IsEnum } from 'class-validator';

export enum Period {
  Monthly = 'monthly',
  Yearly = 'yearly',
}

export class LiabilitieCreateDto {
  @IsString()
  name: string;

  @IsNumber()
  total: number;

  @IsEnum(Period)
  period: string;

  @IsNumber()
  money: number;

  @IsNumber()
  startTime: number;

  @IsNumber()
  endTime: number;
}
