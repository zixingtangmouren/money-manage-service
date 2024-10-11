import { Inject, Injectable } from '@nestjs/common';
import { JsonDbService } from 'src/json-db/json-db.service';
import { ExpenditureCreateDto } from './dto/expenditure-create.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ExpenditureService {
  @Inject(JsonDbService)
  private readonly jsonDbService: JsonDbService;

  async list() {
    return this.jsonDbService.read();
  }

  async create(createDto: ExpenditureCreateDto) {
    const data = await this.jsonDbService.read();
    const id = uuidv4();
    const item = {
      ...createDto,
      id,
    };
    data.push(item);
    await this.jsonDbService.write(data);
    return data;
  }

  async delete(id: string) {
    const data = await this.jsonDbService.read();
    const newData = data.filter((item) => item.id !== id);
    await this.jsonDbService.write(newData);
    return 'ok';
  }
}
