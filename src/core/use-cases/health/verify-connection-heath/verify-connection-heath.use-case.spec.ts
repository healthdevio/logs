import { Test, TestingModule } from '@nestjs/testing';
import { VerifyConnectionHeathUseCase } from './verify-connection-heath.use-case';

describe('VerifyConnectionHeathUseCase', () => {
  let provider: VerifyConnectionHeathUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VerifyConnectionHeathUseCase],
    }).compile();

    provider = module.get<VerifyConnectionHeathUseCase>(
      VerifyConnectionHeathUseCase,
    );
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
