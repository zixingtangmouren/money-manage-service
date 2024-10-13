import { IsString } from 'class-validator';
import { IsStoredPassword } from 'src/common/validators/password.validator';
import { IsUsername } from 'src/common/validators/username.validator';

export class CreateUserDto {
  @IsString()
  acount_name: string;
  @IsString()
  @IsUsername()
  username: string;
  @IsString()
  @IsStoredPassword()
  password: string;
}
