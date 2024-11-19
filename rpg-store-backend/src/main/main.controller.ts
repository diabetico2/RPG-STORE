// src/main/main.controller.ts
import { Controller, Get } from '@nestjs/common';
import { MainService } from './main.service';

@Controller('main')
export class MainController {
  constructor(private readonly mainService: MainService) {}

  @Get()
  getWelcomeMessage() {
    return this.mainService.getWelcomeMessage();
  }
}
