import { Module } from '@nestjs/common';
import { LiabilitiesService } from './liabilities.service';
import { LiabilitiesController } from './liabilities.controller';
import { JsonDbModule } from 'src/json-db/json-db.module';

@Module({
  controllers: [LiabilitiesController],
  providers: [LiabilitiesService],
  imports: [JsonDbModule.register({ path: 'liabilities.json' })],
  exports: [LiabilitiesService],
})
export class LiabilitiesModule {}
