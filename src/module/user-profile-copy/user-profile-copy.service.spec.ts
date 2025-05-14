import { Test, TestingModule } from '@nestjs/testing';
import { UserProfileCopyService } from './user-profile-copy.service';

describe('UserProfileCopyService', () => {
  let service: UserProfileCopyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserProfileCopyService],
    }).compile();

    service = module.get<UserProfileCopyService>(UserProfileCopyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
