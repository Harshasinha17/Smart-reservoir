//server creation
//1.  hhtp module
const http=require('http');
const server=http.createServer((req,res)=>{
    console.log('request made from browser');
});
//port no. ,host,callback func
server.listen(3000,'localhost',()=>{
    console.log('server is listening on port 3000');

});
