import { Controller, Get, Query } from '@nestjs/common';
import { BalanceService } from './balance.service';

@Controller('computing')
export class BalanceController {
  constructor(private readonly BalanceModule: BalanceService) {}

  @Get('balances')
  getBalances() {
    return this.BalanceModule.getBalances();
  }

  @Get('balance')
  getBalance(@Query('money') money: number) {
    return this.BalanceModule.computedBalance(money);
  }
}
