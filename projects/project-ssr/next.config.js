/** @type {import('next').NextConfig} */
const path = require("path");

/**
 * Add support to transpile modules inside node_modules
 * https://github.com/vercel/next.js/issues/706
 * 
 * 
 * using external dir (depends on next.js versions)
 * 
 * 1. hook webpack config, add external dir to your rules
 * webpack: (config) => {
 *   const oneOf = config.module.rules.find(({ oneOf }) => !!oneOf).oneOf;
 *   oneOf?.forEach((rule) => {
 *       if (
 *           rule.test?.toString() ===
 *           /\.(tsx|ts|js|cjs|mjs|jsx)$/.toString()
 *       ) {
 *           const p = path.resolve(__dirname, "../../packages");
 *           rule.include ? rule.include.push(p) : (rule.include = [p]);
 *       }
 *   });
 *   return config;
 * }
 *
 * 
 * 2. use experimental config (from next.js 10.1.2)
 * https://github.com/vercel/next.js/pull/22867
 * 
 * experimental: {
 *     externalDir: true,
 * }
 */

module.exports = {
    reactStrictMode: true,
    experimental: {
        externalDir: true,
    },
};
