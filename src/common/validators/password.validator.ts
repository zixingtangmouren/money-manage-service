import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsStoredPassword(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isStoredPassword',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: string) {
          return /^[a-zA-Z0-9]{6,12}$/.test(value); // 密码必须由6到12个大小写字母和数字组成
        },
        defaultMessage: () => '密码必须由6到12个大小写字母和数字组成',
      },
    });
  };
}
