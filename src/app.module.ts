import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsModule } from './assets/assets.module';
import { LiabilitiesModule } from './liabilities/liabilities.module';
import { IncomeModule } from './income/income.module';
import { ExpenditureModule } from './expenditure/expenditure.module';
import { BalanceModule } from './balance/balance.module';

@Module({
  imports: [
    AssetsModule,
    LiabilitiesModule,
    IncomeModule,
    ExpenditureModule,
    BalanceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
