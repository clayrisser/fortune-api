import { BindingKey } from '@loopback/context';

export interface FortuneService {
  fortune(): Promise<string>;
}

export const FORTUNE_SERVICE = BindingKey.create<FortuneService>(
  'services.fortuneService'
);
