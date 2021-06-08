import { ArgumentInvalidException } from '@core/exceptions/argument-invalid.exception'

export class DateVO {
  value: string
  constructor() {
    const dateNow = Date.now()
    this.validate(dateNow)
    this.value = new Date(dateNow).toISOString()
  }

  public static now(): DateVO {
    return new DateVO()
  }

  validate(value: number): boolean {
    if (typeof value !== 'number') {
      throw new ArgumentInvalidException('Date value is not a number')
    }
    return true
  }
}
