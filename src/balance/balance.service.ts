import { Inject, Injectable } from '@nestjs/common';
import { Expenditure } from 'src/expenditure/entites/expenditue.entity';
import { ExpenditureService } from 'src/expenditure/expenditure.service';
import { JsonDbService } from 'src/json-db/json-db.service';
import { Period } from 'src/liabilities/dto/liabilitie-create.dto';
import { LiabilitiesService } from 'src/liabilities/liabilities.service';
import { BalanceCreateDto } from './dto/balance-create.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BalanceService {
  @Inject(ExpenditureService)
  private readonly expenditureService: ExpenditureService;

  @Inject(LiabilitiesService)
  private readonly liabilitiesService: LiabilitiesService;

  @Inject(JsonDbService)
  private readonly jsonDbService: JsonDbService;

  async getBalances() {
    return this.jsonDbService.read();
  }

  async computedBalance(money: number) {
    const expenditures: Expenditure[] = await this.expenditureService.list();
    const liabilities = await this.liabilitiesService.getLiabilities();

    // 减去当月支出
    const currentMonthExpenditure = expenditures
      .filter((exp) => exp.period === Period.Monthly)
      .reduce((acc, cur) => acc + cur.money, 0);

    const currentMonthExpenditureForYear = expenditures
      .filter(
        (exp) =>
          exp.period === Period.Yearly &&
          Number(exp.paymentTime) >= new Date().getMonth() + 1,
      )
      .reduce((acc, cur) => acc + cur.money, 0);

    // 减去当月负债
    const currentMonthLiabilities = liabilities
      .filter(
        (liability) =>
          liability.startTime <= new Date().getTime() &&
          liability.endTime >= new Date().getTime(),
      )
      .reduce((acc, cur) => acc + cur.money, 0);

    const balance =
      Number(money) -
      currentMonthExpenditure -
      currentMonthExpenditureForYear -
      currentMonthLiabilities;

    return {
      balance,
    };
  }

  async create(createDto: BalanceCreateDto) {
    const balances = await this.getBalances();
    const newBalances = [
      ...balances,
      {
        ...createDto,
        id: uuidv4(),
      },
    ];
    await this.jsonDbService.write(newBalances);
    return newBalances;
  }
}
