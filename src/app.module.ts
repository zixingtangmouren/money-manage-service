import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsModule } from './assets/assets.module';
import { LiabilitiesModule } from './liabilities/liabilities.module';
import { IncomeModule } from './income/income.module';
import { ExpenditureModule } from './expenditure/expenditure.module';
import { BalanceModule } from './balance/balance.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    AssetsModule,
    LiabilitiesModule,
    IncomeModule,
    ExpenditureModule,
    BalanceModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'tzc241241',
      database: 'money-manage',
      synchronize: true,
      logging: true,
      entities: [User],
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
