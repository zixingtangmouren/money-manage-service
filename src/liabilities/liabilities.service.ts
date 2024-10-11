import { Inject, Injectable } from '@nestjs/common';
import { LiabilitieCreateDto } from './dto/liabilitie-create.dto';
import { JsonDbService } from 'src/json-db/json-db.service';
import { v4 as uuidv4 } from 'uuid';
import { LiabilitieUpdateDto } from './dto/liabilitie-update.dto';

@Injectable()
export class LiabilitiesService {
  @Inject(JsonDbService)
  private jsonDbService: JsonDbService;

  async createLiability(liabilitieCreateDto: LiabilitieCreateDto) {
    const data = await this.jsonDbService.read();
    const id = uuidv4();
    data.push({ ...liabilitieCreateDto, id });
    await this.jsonDbService.write(data);
    return 'done';
  }

  async getLiabilities() {
    return await this.jsonDbService.read();
  }

  async deleteLiabilitie(id: string) {
    const data = await this.jsonDbService.read();
    const index = data.findIndex((liabilitie) => liabilitie.id === id);
    data.splice(index, 1);
    await this.jsonDbService.write(data);
    return 'done';
  }

  async updateLiabilitie(id: string, liabilitieUpdateDto: LiabilitieUpdateDto) {
    const data = await this.jsonDbService.read();
    const index = data.findIndex((liabilitie) => liabilitie.id === id);
    data[index] = { ...data[index], ...liabilitieUpdateDto };
    await this.jsonDbService.write(data);
    return 'done';
  }
}
