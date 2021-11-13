/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
    reactStrictMode: true,
    webpack: (config) => {
        const oneOf = config.module.rules.find(({ oneOf }) => !!oneOf).oneOf;
        oneOf?.forEach((rule) => {
            if (
                rule.test?.toString() ===
                /\.(tsx|ts|js|cjs|mjs|jsx)$/.toString()
            ) {
                const p = path.resolve(__dirname, "../../packages");
                rule.include ? rule.include.push(p) : (rule.include = [p]);
            }
        });
        return config;
    },
};
