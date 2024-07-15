import { CacheHandler } from '@neshca/cache-handler';

CacheHandler.onCreation(async () => {
  const cacheStore = new Map();

  const handler = {
    async get(key) {
      return await cacheStore.get(key);
    },
    async set(key, value) {
      cacheStore.set(key, value);
    },
    async revalidateTag(tag) {
      for (const [key, { tags }] of cacheStore) {
        if (tags.includes(tag)) {
          cacheStore.delete(key);
        }
      }
    },

    async delete(key) {
      cacheStore.delete(key);
    },
  };

  return {
    handlers: [handler],
  };
});

export default CacheHandler;
