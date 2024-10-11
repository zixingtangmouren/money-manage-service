import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LiabilitiesService } from './liabilities.service';
import { LiabilitieCreateDto } from './dto/liabilitie-create.dto';
import { LiabilitieUpdateDto } from './dto/liabilitie-update.dto';

@Controller('liabilities')
export class LiabilitiesController {
  constructor(private readonly liabilitiesService: LiabilitiesService) {}

  @Get('list')
  list() {
    return this.liabilitiesService.getLiabilities();
  }

  @Post('create')
  create(@Body() liabilitieCreateDto: LiabilitieCreateDto) {
    return this.liabilitiesService.createLiability(liabilitieCreateDto);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.liabilitiesService.deleteLiabilitie(id);
  }

  @Put('update/:id')
  update(
    @Param('id') id: string,
    @Body() LiabilitieUpdateDto: LiabilitieUpdateDto,
  ) {
    return this.liabilitiesService.updateLiabilitie(id, LiabilitieUpdateDto);
  }
}
