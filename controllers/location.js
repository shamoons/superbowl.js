exports.encode = function(req, res) {
    var urlHash = req.param("hash");
     console.log("Get: "+urlHash);    
     var base62encode = function c(a,b){b=b||"";return~~a?c(a/62,String.fromCharCode(((a%=62)>9?a>35?29:87:48)+a)+b):b};
    var uHash = base62encode(urlHash);
    console.log("encode: "+uHash);

    res.render ('location', {
        locals: { hash: uHash, title: "SuperBowl.js" }
    });
};

exports.decode = function(dreq, dres) {
    var urlHash = dreq.param("hash");
     console.log("Get: "+urlHash);    
     var base62decode = function(a,b,c,d){for(b=c=(a===(/\W|_|^$/.test(a+="")||a))-1;d=a.charCodeAt(c++);)b=b*62+d-[,48,29,87][d>>5];return b};
    var uHash = base62decode(urlHash);
    console.log("decode: "+uHash);

    dres.render ('location', {
        locals: { hash: uHash, title: "SuperBowl.js" }
    });

}
