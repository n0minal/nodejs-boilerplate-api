import User, { UserInterface } from "../models/user";

class UserService {

  async createUser(data: UserInterface) {

    const [ user, created ] = await User.findOrCreate({
      where: {
        username: data.username,
      },
      defaults: data
    });

    return { user, created };
  }

}

export default new UserService();