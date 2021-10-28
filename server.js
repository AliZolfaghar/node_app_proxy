// Create the proxy
var proxy = require('redbird')({
    port: 80 , 
    xfwd : true ,  // pass client ip address (retrivable via request-ip module)
    cluster : 4 ,  // cluster proxy on 4 cpu core 
    ssl: {
		port: 443,
		key: "ssl//azr.local.key",
		cert: "ssl/azr.local.cer",
	}
});

proxy.notFound((req,res)=>{
    res.write(`
    <a href="https://app1.azr.local">app1.azr.local</a><br>
    <a href="https://app2.azr.local">app2.azr.local</a><br>
    `);
    res.end();
}); 

// register apps in proxy 
proxy.register("app1.azr.local"    , "http://127.0.0.1:81");
proxy.register("app2.azr.local"    , "http://127.0.0.1:82" , {ssl:true});
// proxy.register("investors.ipo.org", "http://127.0.0.1:82");
