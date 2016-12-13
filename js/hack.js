

var hacks = [];

//Auto Login to TokyoTechPortal
hacks.push({
  isMatch:function(url){
    var url1 = "https://portal.nap.gsic.titech.ac.jp/GetAccess/Login?Template=userpass_key&AUTHMETHOD=UserPassword";
    return -1 < url.indexOf(url1)
  },
  hack:function(){
    $("form[name=login] input[name=usr_name]").val(pass.Auth.username);
    $("form[name=login] input[name=usr_password]").val(pass.Auth.pass);
    $("form[name=login] input[type=submit]").click();
  }
});


//Auto Login to TokyoTechPortal2
hacks.push({
  isMatch:function(url){
    var url2 = "https://portal.nap.gsic.titech.ac.jp/GetAccess/Login?Template=idg_key";
    return -1 < url.indexOf(url2)
  },
  hack:function(){
    var keys = [];
    var code = [];
    var pre_selector = "form[name=login] table table ";
    keys.push($(pre_selector + "tr:nth-child(5) th").text());
    keys.push($(pre_selector + "tr:nth-child(6) th").text());
    keys.push($(pre_selector + "tr:nth-child(7) th").text());
    for(let i = 0;i<keys.length;i++){
      var key = keys[i];
      var col = "ABCDEFGHIJ".indexOf(key[1]);
      var row = Number(key[3]) - 1;
      var index = col + row * 10;
      code.push(pass.CardMatrix[index]);
    }

    //debug
    //for(let i = 0;i<pass.length;i++){
    //  console.log(keys[i]);
    //  console.log(pass[i]);
    //}

    $("form[name=login] input[name=message3]").val(code[0]);
    $("form[name=login] input[name=message4]").val(code[1]);
    $("form[name=login] input[name=message5]").val(code[2]);
    $("form[name=login] input[type=submit]").click();
  }
});

//AutoLogin To Wireless LAN named "TokyoTech"
//This is ExactMatch!!!
hacks.push({
  isMatch:function(url){
    var url3 = "https://wlanauth.noc.titech.ac.jp/fs/customwebauth/techauth.html";
    return url === url3;
  },
  hack:function(){
    $("form input[name=username]").val(pass.Auth.username);
    $("form input[name=password]").val(pass.Auth.pass);
    $("form input[type=submit]").click();
  }
});


//do hack
let href = document.location.href.toString();
for(let i = 0;i<hacks.length;i++){
  var ahack = hacks[i];
  if(ahack.isMatch(href)){
    ahack.hack();
    break;
  }
}
