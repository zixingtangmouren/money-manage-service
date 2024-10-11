import { DynamicModule, Module } from '@nestjs/common';
import { JsonDbService } from './json-db.service';

export interface JsonDbModuleOptions {
  path: string;
}

@Module({})
export class JsonDbModule {
  static register(options: JsonDbModuleOptions): DynamicModule {
    return {
      module: JsonDbModule,
      providers: [
        {
          provide: 'OPTIONS',
          useValue: options,
        },
        JsonDbService,
      ],
      exports: [JsonDbService],
    };
  }
}
