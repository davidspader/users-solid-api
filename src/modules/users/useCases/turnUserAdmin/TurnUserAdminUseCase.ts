import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("This user does not exist!");
    }

    if (user.admin) {
      throw new Error("this user is already an admin!");
    }

    const updateUser = this.usersRepository.turnAdmin(user);

    updateUser.updated_at = new Date();

    return updateUser;
  }
}

export { TurnUserAdminUseCase };
