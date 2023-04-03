export default class Weather {
  constructor (
    public readonly cityName: string,
    public readonly temperature: number,
    public readonly windSpeed: number,
    public readonly visibility: number
  ) {}

  static fromJson (json: string): Weather {
    const obj = JSON.parse(json)
    return new Weather(obj.cityName, obj.temperature, obj.windSpeed, obj.visibility)
  }

  toObject (): object {
    return {
      cityName: this.cityName,
      temperature: this.temperature,
      windSpeed: this.windSpeed,
      visibility: this.visibility
    }
  }
}
