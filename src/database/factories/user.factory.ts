import factory from "factory-girl";
import faker from "faker";
import User, { UserInterface } from "../../app/models/user";

factory.define<UserInterface>('User', User, {
  name: faker.name.findName().substr(0, 23),
  username: faker.internet.userName().substr(0, 23),
  password: faker.internet.password(16),
  email: faker.internet.email()
});

export default factory;