(function(d,g,f,e,c,p,q,l,h,m,k,n){function r(){for(var a=0;link=g.links[a++];)if(/dtpCallback\.l/.test(link.href)){var b=decodeURIComponent(link.href).match(/dtpCallback\.l="([^"]+)/)[1];link.href=b;t(link,c);if(d[e].l===b){var w=link.href;setTimeout(function(){d.location=w},0)}}else/\/?click($|(\/[0-9]+)?$)/.test(link.pathname)&&t(link,c);b=g.querySelectorAll(".dtpcnt");a=0;for(var x=b.length;a<x;a++)b[a].className=b[a].className.replace(/(^|\s+)dtpcnt($|\s+)/g,"")}function t(a,b){if(b.links){var c=
y(a);if(!(c>b.links.length-1)){var d=b.links[c];b=z(a,d.redirectUrl);a.href=b;d.beaconUrl&&a.addEventListener("click",function(a){u(d.beaconUrl)})}}}function z(a,b){return b+a.search.replace("?","&")+a.hash}function y(a){a=parseInt(a.pathname.replace(/\/(int)?click\/?/,""),10);return isNaN(a)?0:a-1}function u(a){if((l=/[?&]cpid(=([^&#]*)|&|#|$)/.exec(d.location.href))&&l[2]){p=l[2];m="vl-cl-"+p;var b=m,c=g.cookie.match(new RegExp("(^| )"+b+"=([^;]+)"));q=c?c.pop():f.getItem(b+"-expires")&&+f.getItem(b+
"-expires")>(new Date).getTime()?f.getItem(b):null;q&&(a+=(-1===a.indexOf("?")?"?":"&")+"uw=no");v(m,"1",n)}"sendBeacon"in navigator?navigator.sendBeacon(a):(b=new XMLHttpRequest,b.open("POST",a,!1),b.send())}function v(a,b,c,d){var e=new Date;e.setTime(e.getTime()+(d||864E5));g.cookie=a+"="+b+"; "+c+"samesite=Strict; expires="+e.toGMTString()+"; path=/";f.setItem(a,b);f.setItem(a+"-expires",e.getTime())}n="https:"===d.location.protocol?"secure; ":"";r();d[e]&&(k=d[e].q,d[e]=function(a){a(c)},d[e].params=
c,v("vl-cep",c.clickParams,n));d[e].getOfferLink=function(a){a=a?a-1:0;if(a>c.links.length-1)console.error("Invalid offer number");else return c.links[a].redirectUrl};d[e].getTokens=function(){var a={},b;for(b in c)a[b]=c[b];delete a.links;return a};d[e].registerClick=function(a){a=a?a-1:0;a>c.links.length-1?console.error("Invalid click number"):c.links[a].beaconUrl?u(c.links[a].beaconUrl):console.error("Direct method must be enabled to manually register click")};d[e].generateLinks=function(){r()};
if(k){h=0;for(var A=k.length;h<A;h++)k[h][0](c)}})(window,document,localStorage,"dtpCallback",{"cpid":"eb5312a9-d2e0-44ac-8058-baadc7adbd37","adset_name":"%7B%7Badset.name%7D%7D","ad_name":"%7B%7Bad.name%7D%7D","pid":"488202094113565","source":"%7B%7Bsite_source_name%7D%7D","lpid":"abacb370-87b2-4615-a3de-8b2a2d964777","campaign_name":"%7B%7Bcampaign.name%7D%7D","ad_id":"%7B%7Bad.id%7D%7D","clickParams":"cep=VhShh97IDgDK8lFzt9lPYSKbYl85xMQcPTmCkxpNr4QZ1CntqIolxbKw8_QGOG0J4mfMG0az0xSeAK7Lec2BgxrTnBqcBQ3kVMzwwBGeQk-8JL5efG-rh2QSLDMlJeUJgxs1urI9pMdZ0i_DQUJ5l1PSfxj_Ta319SWyuVgzRPfwfaehxIix3sDB3NZ213ONKccgku5aBkVcyZg-kiVU5el3FFlTdwS0a1YgyqMfCWz8DrVYooAUSYuJcINeq27Z_RtCrG4pdyWxvEyuDe7U8Afw3pMiaHPzStUMYxTylwP8Klb7mejTpHTENVuYSmRzK3RCgf7VUJ1ukEEQJIRtpMrUKzK6VWeHjBu0D7qgo8cjir1qKb93P1WEGq53R2z1SLgMaXthG3iuVVxkMd3DZ8XLPPvkQRMA7CwwGfb-I8t54W40lcBJJrNdgl5ceN_EjqG-nT7-0mhx16jSaCqA0fw5r_9pAegf2tuPsNNtoufCvm1J5yV-0G04IlMdlLnnMUf9iMZDCmq11sPuSglL3_smlYDDrZy7KipuwBiU8ypqzWYWhJEZEa-s1CCeIdTqRmwExnc3MSYlz9xPgTN2TXXatsQhKvcMGWvOyPdQUcKOouXfjXXd8nLkcQdn1iUxZSm9-RZX8PyTD8DHupt72TshYJueQRLf-lZ5C6O-6D9LUB9XPbHnSwrLP7M_JKuF","adset_id":"%7B%7Badset.id%7D%7D","links":[{"beaconUrl":"https://stransensilions.com/click/1?cep=VhShh97IDgDK8lFzt9lPYSKbYl85xMQcPTmCkxpNr4QZ1CntqIolxbKw8_QGOG0J4mfMG0az0xSeAK7Lec2BgxrTnBqcBQ3kVMzwwBGeQk-8JL5efG-rh2QSLDMlJeUJgxs1urI9pMdZ0i_DQUJ5l1PSfxj_Ta319SWyuVgzRPfwfaehxIix3sDB3NZ213ONKccgku5aBkVcyZg-kiVU5el3FFlTdwS0a1YgyqMfCWz8DrVYooAUSYuJcINeq27Z_RtCrG4pdyWxvEyuDe7U8Afw3pMiaHPzStUMYxTylwP8Klb7mejTpHTENVuYSmRzK3RCgf7VUJ1ukEEQJIRtpMrUKzK6VWeHjBu0D7qgo8cjir1qKb93P1WEGq53R2z1SLgMaXthG3iuVVxkMd3DZ8XLPPvkQRMA7CwwGfb-I8t54W40lcBJJrNdgl5ceN_EjqG-nT7-0mhx16jSaCqA0fw5r_9pAegf2tuPsNNtoufCvm1J5yV-0G04IlMdlLnnMUf9iMZDCmq11sPuSglL3_smlYDDrZy7KipuwBiU8ypqzWYWhJEZEa-s1CCeIdTqRmwExnc3MSYlz9xPgTN2TXXatsQhKvcMGWvOyPdQUcKOouXfjXXd8nLkcQdn1iUxZSm9-RZX8PyTD8DHupt72TshYJueQRLf-lZ5C6O-6D9LUB9XPbHnSwrLP7M_JKuF","redirectUrl":"https://free88pp-olymp.bp-offer2.com/?country=my&lang=zh&campaign=AFFspT5Ud&aff=BP77N7E04VW&clickid=wkmk8br9sqso6c443ine9cla&sub2=www.repairworksonline.com/thankyou.php&sub3=488202094113565&sub4=Lead&campaignid=PH-APOXY09845&device=DESKTOP&offer=single-page&angle=UncleTest88FS&language=ZH&noscript=true"}],"placement":"%7B%7Bplacement%7D%7D","campaign_id":"%7B%7Bcampaign.id%7D%7D"});
