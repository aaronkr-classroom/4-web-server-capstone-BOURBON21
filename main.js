"use strict";

//필요한 모듈 임포트
const port = 3000,
    http =require('http'),
    httpStatus=require('http-status-codes'),
    router = require('./router'),
    contentTypes = require('./content-type'),
    utils = require('./utils');

//listion 
//get 라우트

router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/index.html", res);
});
router.get("/courses", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/coures.html", res);
});
router.get("/contact", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/contact.html", res);
});
// Get 라우트
// post 라우트
// 에셋 라우트
// css 에셋 라우트
router.get("/bootstrap.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("pubilc/bootstrap.css", res);
});
router.get("/style.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("views/style.css", res);
});

// js 에셋 라우트 
// img 에셋 라우트
router.get("/product.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("views/product.jpg", res);
});
router.get("/people.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("views/people.jpg", res);
});
router.get("/graph.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("views/graph.png", res);
});

http.createServer(router.handle).listen(port);
console.log(`Sever at:http://localhos:${port}`);