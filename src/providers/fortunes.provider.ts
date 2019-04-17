import { Provider } from '@loopback/core';
import { random } from 'fortunes';
import { FortuneService } from '../services';

export class FortunesService implements FortuneService {
  async fortune(): Promise<string> {
    return new Promise(resolve => random(resolve));
  }
}

export class FortunesServiceProvider implements Provider<FortuneService> {
  constructor(public fortunes: FortunesService = new FortunesService()) {}

  value(): FortuneService {
    return this.fortunes;
  }
}
