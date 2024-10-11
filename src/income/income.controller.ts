import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IncomeService } from './income.service';
import { IncomeCreateDto } from './dto/income-create.dto';
import { IncomeUpdateDto } from './dto/income-update.dto';

@Controller('income')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Get('list')
  list() {
    return this.incomeService.list();
  }

  @Post('create')
  create(@Body() incomeCreateDto: IncomeCreateDto) {
    return this.incomeService.create(incomeCreateDto);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.incomeService.delete(id);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() incomeUpdateDto: IncomeUpdateDto) {
    return this.incomeService.update(id, incomeUpdateDto);
  }
}
