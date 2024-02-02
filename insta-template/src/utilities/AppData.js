import { faker } from '@faker-js/faker';

const AppData = {
    username: faker.internet.userName(),
    birthdate:faker.date.birthdate(),
    message: faker.lorem.text()
}

export default AppData;