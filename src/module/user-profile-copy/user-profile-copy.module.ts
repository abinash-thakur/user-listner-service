import { Module } from '@nestjs/common';
import { UserProfileCopyService } from './user-profile-copy.service';
import { DatabaseModule } from 'src/config/db/postgres/database.module';
import { userProfileCopyProvider } from 'src/infra/database/postgres/provider/userProfileCopy.provider';

@Module({
    imports:[DatabaseModule],
    providers: [UserProfileCopyService, userProfileCopyProvider],
    exports: [UserProfileCopyService]
})
export class UserProfileCopyModule { }
