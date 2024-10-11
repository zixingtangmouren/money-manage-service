import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Period } from 'src/liabilities/dto/liabilitie-create.dto';

export class IncomeUpdateDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsEnum(Period)
  @IsOptional()
  period: Period;

  @IsNumber()
  @IsOptional()
  money: number;
}
