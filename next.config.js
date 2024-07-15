/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  cacheHandler:
    process.env.NODE_ENV === "production"
      ? require.resolve("./cache-handler.mjs")
      : undefined,
  cacheMaxMemorySize: 0,
};

