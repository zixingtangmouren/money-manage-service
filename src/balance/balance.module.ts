import { forwardRef, Module } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { BalanceController } from './balance.controller';
import { IncomeModule } from 'src/income/income.module';
import { ExpenditureModule } from 'src/expenditure/expenditure.module';
import { LiabilitiesModule } from 'src/liabilities/liabilities.module';
import { JsonDbModule } from 'src/json-db/json-db.module';

@Module({
  controllers: [BalanceController],
  providers: [BalanceService],
  imports: [
    ExpenditureModule,
    LiabilitiesModule,
    JsonDbModule.register({
      path: 'balances.json',
    }),
    forwardRef(() => IncomeModule),
  ],
  exports: [BalanceService],
})
export class BalanceModule {}
