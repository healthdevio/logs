import { Test, TestingModule } from '@nestjs/testing';
import { PrismaHealthRepository } from './prisma.health.repository';

describe('PrismaHealthRepository', () => {
  let provider: PrismaHealthRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaHealthRepository],
    }).compile();

    provider = module.get<PrismaHealthRepository>(PrismaHealthRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
