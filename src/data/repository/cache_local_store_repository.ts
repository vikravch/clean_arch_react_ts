import CacheRepository from "../../domain/repository/cache_repository";

export default class CacheLocalStoreRepository implements CacheRepository {

    async getLastWeather(): Promise<string | null> {
        return Promise.resolve(localStorage.getItem('weather'));
    }

    async saveLastWeather(value: string): Promise<void> {
        localStorage.setItem('weather', value);
    }
}