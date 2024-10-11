import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ExpenditureService } from './expenditure.service';
import { ExpenditureCreateDto } from './dto/expenditure-create.dto';

@Controller('expenditure')
export class ExpenditureController {
  constructor(private readonly expenditureService: ExpenditureService) {}

  @Get('list')
  list() {
    return this.expenditureService.list();
  }

  @Post('create')
  create(@Body() createDto: ExpenditureCreateDto) {
    return this.expenditureService.create(createDto);
  }

  @Delete('delete/:id')
  delete(@Param() id: string) {
    return this.expenditureService.delete(id);
  }
}
