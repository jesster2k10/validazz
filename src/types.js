// @flow

type ValidationRule = {
  runWithValue: (value: string | number) => boolean,
  message?: string,
}

type ValidatorResult = {
  success: boolean,
  failed?: ValidationRule,
}

export type { ValidationRule }
export type { ValidatorResult }
