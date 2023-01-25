import { createClient } from 'redis';

const connectRedisClient = async function(url: string){
    const redisClient = createClient({ url: url })
    await redisClient.connect()
    return redisClient
}

const connectRedisClientForRead = async function(){
    return await connectRedisClient('redis://redis.default.svc.cluster.local:6379')
}

const connectRedisClientForWrite = async function(){
    return await connectRedisClient('redis://redis-0.redis.default.svc.cluster.local:6379')
}

import { ICountDB } from './ICountDB';

export class CountDB implements ICountDB {
    async get(): Promise<number> {
        let redisClient = await connectRedisClientForRead()
        let data = await redisClient.get('count')
        await redisClient.disconnect()
        if (data) return parseInt(data)
        return 0
    }
    async increase(): Promise<number> {
        let redisClient = await connectRedisClientForWrite()
        let count: number = await redisClient.incr('count')
        await redisClient.disconnect()
        return count
    }
}