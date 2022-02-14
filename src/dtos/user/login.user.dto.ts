import * as Validator from 'class-validator';

export class LoginUserDto {
  @Validator.IsNotEmpty()
  @Validator.IsEmail({
    allow_ip_domain: false, // ne može na primer: 'mtair@127.0.0.1
    allow_utf8_local_part: true,
    require_tld: true, // mora mejl da ima na kraju: '.com'
  })
  email: string;

  @Validator.IsNotEmpty()
  @Validator.IsString()
  @Validator.Length(6, 128)
  password: string;
}
