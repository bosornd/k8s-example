export interface ICountDB {
    get() : Promise<number>;
    increase() : Promise<number>;
}