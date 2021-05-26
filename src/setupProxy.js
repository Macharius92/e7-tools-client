const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/auth/**',
        createProxyMiddleware({
            target: 'http://localhost:1337',
            changeOrigin: true,
        })
    );
};

/*import { createProxyMiddleware } from 'http-proxy-middleware';

const proxySetup = (app) => 
    app.use(
        '/auth/**',
        createProxyMiddleware({
            target: 'http://localhost:1337',
            changeOrigin: true,
        })
    );

export default proxySetup;*/

/*import {createProxyMiddleware as proxy} from 'http-proxy-middleware';

module.exports = function (app) {
    app.use(proxy("/auth/**", { target: "http://localhost:1337" }));
    //app.use(proxy("/api/**", { target: "http://localhost:1337" }));
};*/