import { IsNumber, IsString } from 'class-validator';

export class BalanceCreateDto {
  @IsString()
  name: string;
  @IsNumber()
  money: number;
  @IsNumber()
  balance: number;
}
