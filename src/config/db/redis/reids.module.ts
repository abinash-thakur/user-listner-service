import { Global, Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { RedisSubscriberService } from 'src/config/db/redis/reidsSubscriber/user-profile-copy.subscriber';
import { UserProfileCopyModule } from 'src/module/user-profile-copy/user-profile-copy.module';

@Global()
@Module({
    imports : [UserProfileCopyModule],
    providers: [RedisService, RedisSubscriberService],
    exports: [RedisService],
})
export class RedisModule { }
