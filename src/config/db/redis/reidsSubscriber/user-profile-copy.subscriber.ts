import { Injectable, Logger, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { RedisService } from 'src/config/db/redis/redis.service';
import { REDIS_CHANNEL } from '../../../../utils/enums/redisChannel.enum';
import { UserProfileCopyService } from 'src/module/user-profile-copy/user-profile-copy.service';

@Injectable()
export class RedisSubscriberService implements OnModuleInit, OnModuleDestroy {
    private readonly logger = new Logger(RedisSubscriberService.name);

    constructor(
        private readonly redisService: RedisService,
        private readonly userProfileService: UserProfileCopyService
    ) { }

    async onModuleInit() {
        const subscriber = this.redisService.subscriber;

        await subscriber.subscribe(REDIS_CHANNEL.USER_PROFILE);
        this.logger.log(`Subscribed to ${REDIS_CHANNEL.USER_PROFILE}`);

        subscriber.on('message', (channel: string, message: string) => {
            this.logger.log(`Received message on '${channel}': ${message}`);

            try {
                const data = JSON.parse(message);
                this.handleMessage(data);
            } catch (error) {
                this.logger.error(`Error parsing message: ${error instanceof Error ? error.message : String(error)}`);
            }
        });

    }

    async handleMessage(data: any) {
        // Handle the data as needed
        await this.userProfileService.createUserProfileCopy(data);
        this.logger.debug(`Handling message: ${JSON.stringify(data)}`);
    }

    async onModuleDestroy() {
        await this.redisService.subscriber.unsubscribe(REDIS_CHANNEL.USER_PROFILE);
        this.logger.log(`Unsubscribed from ${REDIS_CHANNEL.USER_PROFILE}`);
    }
}
