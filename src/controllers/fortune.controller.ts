import { get } from '@loopback/rest';
import { inject } from '@loopback/context';
import { FORTUNE_SERVICE, FortuneService } from '../services';

export class FortuneController {
  constructor(
    @inject(FORTUNE_SERVICE) protected fortuneService: FortuneService
  ) {}

  @get('/fortune')
  async fortune(): Promise<string> {
    return (await this.fortuneService.fortune()) + '\n';
  }
}
