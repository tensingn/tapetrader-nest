import { Test, TestingModule } from '@nestjs/testing';
import { MerchTypeController } from './merch-type.controller';
import { MerchTypeService } from './merch-type.service';

describe('MerchTypeController', () => {
  let controller: MerchTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MerchTypeController],
      providers: [MerchTypeService],
    }).compile();

    controller = module.get<MerchTypeController>(MerchTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
