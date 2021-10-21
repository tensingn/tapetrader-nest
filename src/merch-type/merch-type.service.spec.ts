import { Test, TestingModule } from '@nestjs/testing';
import { MerchTypeService } from './merch-type.service';

describe('MerchTypeService', () => {
  let service: MerchTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MerchTypeService],
    }).compile();

    service = module.get<MerchTypeService>(MerchTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
