import { ExpenditureType } from '../dto/expenditure-create.dto';

export class Expenditure {
  id: string;
  name: string;
  money: number;
  period: string;
  type: ExpenditureType;
  paymentTime: string;
  startTime: number;
  endTime: number;
}
