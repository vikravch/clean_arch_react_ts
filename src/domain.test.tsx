import GetWeather from './domain/use_case/GetWeather'
import type WeatherRepository from './domain/repository/weather_repository'
import Weather from './domain/model/weather'
import type CacheRepository from './domain/repository/cache_repository'

test('lets write a test', () => {
  expect(true).toBe(true)
})

describe('group of tests', () => {
  it('should do something', () => {
    expect(true).toBe(true)
  })

  it('should do something else', () => {
    expect(true).toBe(true)
  })
})

describe('get weather use case', () => {
  it('should return simply weather', async () => {
    const repository = jest.genMockFromModule<WeatherRepository>('./domain/repository/weather_repository')
    const cacheRepository = jest.genMockFromModule<CacheRepository>('./domain/repository/cache_repository')
    const weather = new Weather(
      'Haifa',
      20,
      30,
      40
    )

    repository.getWeather = jest.fn().mockReturnValue(Promise.resolve(weather))

    const getWeather = GetWeather(repository, cacheRepository)
    const result = await getWeather('Haifa')
    expect(result).toEqual(weather)
    expect(repository.getWeather).toBeCalledTimes(1)
  })

  it('should return empty weather with empty city', async () => {
    const repository = jest.genMockFromModule<WeatherRepository>('./domain/repository/weather_repository')
    const cacheRepository = jest.genMockFromModule<CacheRepository>('./domain/repository/cache_repository')

    const weather = new Weather(
      'Haifa',
      20,
      30,
      40
    )

    repository.getWeather = jest.fn().mockReturnValue(Promise.resolve({}))
    cacheRepository.getLastWeather = jest.fn().mockReturnValue(JSON.stringify(weather))

    const getWeather = GetWeather(repository, cacheRepository)
    const result = await getWeather('')
    expect(result).toEqual(weather)
    expect(repository.getWeather).toBeCalledTimes(1)
    expect(cacheRepository.getLastWeather).toBeCalledTimes(1)
  })
})

function sortNumbers (numbers: number[]): number[] {
  return numbers.sort((a, b) => a - b)
}
