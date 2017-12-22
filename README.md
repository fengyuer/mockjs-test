# express-generator

#### 全局安装express-generator

    npm install express-generator -g

#### 创建mockjs-test应用
    express mockjs-test

    destination is not empty, continue? [y/N] y

    create : mockjs-test
    create : mockjs-test/package.json
    create : mockjs-test/app.js
    create : mockjs-test/public
    create : mockjs-test/routes
    create : mockjs-test/routes/index.js
    create : mockjs-test/routes/users.js
    create : mockjs-test/views
    create : mockjs-test/views/index.jade
    create : mockjs-test/views/layout.jade
    create : mockjs-test/views/error.jade
    create : mockjs-test/bin
    create : mockjs-test/bin/www
    create : mockjs-test/public/javascripts
    create : mockjs-test/public/images
    create : mockjs-test/public/stylesheets
    create : mockjs-test/public/stylesheets/style.css

    install dependencies:
        > cd mockjs-test && npm install

    run the app:
        > SET DEBUG=mockjs-test:* & npm start



#### 安装依赖包
    cd mockjs-test
    npm install

#### 运行
    npm start
    在浏览器中打开 http://localhost:3000/