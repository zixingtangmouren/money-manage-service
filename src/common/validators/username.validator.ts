import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsUsername(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isUsername',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: string) {
          return /^[a-zA-Z0-9]{12}$/.test(value); // 密码必须由12个大小写字母和数字组成;
        },
        defaultMessage: () => '用户必须12位大小写字母和数字',
      },
    });
  };
}
