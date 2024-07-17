const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src/"),
            "@components": path.resolve(__dirname, "src/components"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@icons": path.resolve(__dirname, "src/assets/icons"),
            "@ui": path.resolve(__dirname, "src/ui"),
        },
    },
};
