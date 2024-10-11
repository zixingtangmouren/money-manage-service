import { Inject, Injectable } from '@nestjs/common';
import { JsonDbModuleOptions } from './json-db.module';
import { access, readFile, writeFile } from 'fs/promises';

@Injectable()
export class JsonDbService {
  @Inject('OPTIONS')
  private options: JsonDbModuleOptions;

  async read() {
    const filePath = this.options.path;

    try {
      await access(filePath);
    } catch {
      return [];
    }

    const str = await readFile(filePath, {
      encoding: 'utf-8',
    });

    if (!str) {
      return [];
    }

    return JSON.parse(str);
  }

  async write(obj: Record<string, any>) {
    await writeFile(this.options.path, JSON.stringify(obj || []), {
      encoding: 'utf-8',
    });
  }
}
