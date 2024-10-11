import { IsEnum, IsNumber, IsString } from 'class-validator';
import { Period } from 'src/liabilities/dto/liabilitie-create.dto';

export class IncomeCreateDto {
  @IsString()
  name: string;

  @IsEnum(Period)
  period: Period;

  @IsNumber()
  money: number;
}
