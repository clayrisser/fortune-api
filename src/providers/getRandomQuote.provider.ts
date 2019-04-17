import { Provider } from '@loopback/core';
import { FortuneService } from '../services';
const getRandomQuote = require('get-random-quote');

export class GetRandomQuoteService implements FortuneService {
  async fortune(): Promise<string> {
    return (await getRandomQuote()).text;
  }
}

export class GetRandomQuoteServiceProvider
  implements Provider<GetRandomQuoteService> {
  constructor(
    public getRandomQuote: GetRandomQuoteService = new GetRandomQuoteService()
  ) {}

  value(): FortuneService {
    return this.getRandomQuote;
  }
}
