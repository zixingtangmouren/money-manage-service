import { Module, forwardRef } from '@nestjs/common';
import { IncomeService } from './income.service';
import { IncomeController } from './income.controller';
import { JsonDbModule } from 'src/json-db/json-db.module';
import { BalanceModule } from 'src/balance/balance.module';

@Module({
  controllers: [IncomeController],
  providers: [IncomeService],
  imports: [
    JsonDbModule.register({
      path: 'incomes.json',
    }),
    forwardRef(() => BalanceModule),
  ],
  exports: [IncomeService],
})
export class IncomeModule {}
