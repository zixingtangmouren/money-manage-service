import { Inject, Injectable } from '@nestjs/common';
import { JsonDbService } from 'src/json-db/json-db.service';
import { IncomeCreateDto } from './dto/income-create.dto';
import { IncomeUpdateDto } from './dto/income-update.dto';
import { v4 as uuidv4 } from 'uuid';
import { BalanceService } from 'src/balance/balance.service';

@Injectable()
export class IncomeService {
  @Inject(JsonDbService)
  private readonly jsonDbService: JsonDbService;

  @Inject(BalanceService)
  private readonly balanceService: BalanceService;

  async list() {
    const data = await this.jsonDbService.read();
    return data;
  }

  async create(incomeCreateDto: IncomeCreateDto) {
    const data = await this.jsonDbService.read();
    const id = uuidv4();
    const item = { ...incomeCreateDto, id };
    data.push(item);
    // 创建一条心的 balance 记录
    const { balance } = await this.balanceService.computedBalance(item.money);
    await this.balanceService.create({
      name: item.name,
      money: item.money,
      balance,
    });
    await this.jsonDbService.write(data);
    return item;
  }

  async delete(id: string) {
    const data = await this.jsonDbService.read();
    const newData = data.filter((item) => item.id !== id);
    await this.jsonDbService.write(newData);
    return 'ok';
  }

  async update(id: string, incomeUpdateDto: IncomeUpdateDto) {
    const data = await this.jsonDbService.read();
    const newData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          ...incomeUpdateDto,
        };
      }
      return item;
    });
    await this.jsonDbService.write(newData);
    return 'ok';
  }
}
