import { Injectable } from '@nestjs/common';
import { randomUUID, type UUID } from 'crypto';
import { CreateProfileDto } from './dto/createProfile.dto';
import { UpdateProfileDto } from './dto/updateProfile.dto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'John Doe',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: randomUUID(),
      name: 'Jane Doe',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: randomUUID(),
      name: 'Bob Smith',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: UUID) {
    return this.profiles.find((profile) => profile.id === id);
  }

  create({ name, description }: CreateProfileDto) {
    const profile = {
      id: randomUUID(),
      name: name,
      description: description,
    };
    this.profiles.push(profile);
    return profile;
  }

  update(id: UUID, { name, description }: UpdateProfileDto) {
    const profile = this.profiles.find((profile) => profile.id === id);
    if (profile) {
      profile.name = name;
      profile.description = description;
    }
    return profile;
  }

  delete(id: UUID) {
    const index = this.profiles.findIndex((profile) => profile.id === id);
    if (index !== -1) {
      this.profiles.splice(index, 1);
      return true;
    }
    return false;
  }
}
