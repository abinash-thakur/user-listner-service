import { Inject, Injectable } from '@nestjs/common';
import { UserProfileCopyEntity } from 'src/infra/database/postgres/entities/userProfileCopy.entity';
import { USER_PROFILE_COPY_REPOSITORY } from 'src/utils/constant/core';
import { Repository } from 'typeorm';
import { ICreateUserProfileCopy } from './user-profile-copy.interface';

@Injectable()
export class UserProfileCopyService {
    constructor(
        @Inject(USER_PROFILE_COPY_REPOSITORY)
        private readonly userProfileRepo: Repository<UserProfileCopyEntity>,
    ) { }

    createUserProfileCopy = async (userData: ICreateUserProfileCopy) => {
        const { user, email, age, class: userClass, insertedAt } = userData
        const userDataObj = this.userProfileRepo.create({
            user,
            email,
            age,
            class: userClass,
            insertedAt
        });
        await this.userProfileRepo.save(userDataObj)
    }
}
