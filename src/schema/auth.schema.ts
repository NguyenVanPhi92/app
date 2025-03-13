import z from 'zod'

export const LoginBody = z
  .object({
    email: z
      .string()
      .nonempty('email is required') // ✅ Check không để trống
      .min(1, { message: 'email is required' })
      .email({ message: 'invalid email' }),
    password: z
      .string()
      .nonempty('Password is required') // ✅ Check không để trống
      .min(6, 'Minimum password length is 6 characters')
      .max(60, 'Maximum password length is 60 characters')
  })
  .strict()
export type LoginBodyType = z.TypeOf<typeof LoginBody>
