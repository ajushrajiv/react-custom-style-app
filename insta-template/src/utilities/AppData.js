import { faker } from '@faker-js/faker';

const AppData = {
    username: faker.internet.userName(),
    avatar:faker.image.avatar(),
    birthdate:faker.date.birthdate(),
    message: faker.lorem.text()
}

export default AppData;