import { Module } from '@nestjs/common';
import { ExpenditureService } from './expenditure.service';
import { ExpenditureController } from './expenditure.controller';
import { JsonDbModule } from 'src/json-db/json-db.module';

@Module({
  controllers: [ExpenditureController],
  providers: [ExpenditureService],
  imports: [
    JsonDbModule.register({
      path: 'expenditure.json',
    }),
  ],
  exports: [ExpenditureService],
})
export class ExpenditureModule {}
