var log=(...e)=>{};function get_user(e,t,n){return t==e.SmartHome.user.user&&n==e.SmartHome.user.password?e.SmartHome.user:null}function get_userOnly(e,t){return t==e.SmartHome.user.user?e.SmartHome.user:null}function get_device(e,t){if("MMM-GoogleAssistant"==e){let n=t;return n.id=e,n}return null}function check_token(e,t){let n=get_token(t),r=e.lib.path.resolve(__dirname+"/../tokens/");if(!n)return console.error("[GATEWAY] [SMARTHOME] [TOOLS] No token found in headers"),null;if(e.lib.fs.existsSync(r+"/"+n)){return e.lib.fs.readFileSync(r+"/"+n,"utf8")}return console.error("[GATEWAY] [SMARTHOME] [TOOLS] Token not found in database",n),null}function get_token(e){if(!e)return null;const t=e.authorization;let n=t.split(" ",2);return t&&2==n.length&&"bearer"==n[0].toLowerCase()?n[1]:null}function delete_token(e,t){e.config.debug&&(log=(...e)=>{console.log("[GATEWAY] [SMARTHOME]",...e)});let n=e.lib.path.resolve(__dirname+"/../tokens/");e.lib.fs.existsSync(n+"/"+t)?(e.lib.fs.unlinkSync(n+"/"+t),log("[TOKEN] Deleted:",t)):log("[TOKEN] Delete Failed",t)}function random_string(e=8){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n="";const r=t.length;for(let o=0;o<e;o++)n+=t.charAt(Math.floor(Math.random()*r));return n}function serialize(e){return"?"+Object.keys(e).reduce((function(t,n){return t.push(n+"="+encodeURIComponent(e[n])),t}),[]).join("&")}function SHLanguage(e){let t="en";switch(e){case"da":case"nl":case"en":case"fr":case"de":case"hi":case"id":case"it":case"ja":case"ko":case"es":case"sv":t=e;break;case"pt":case"pt-br":t="pt-BR";break;case"zh-tw":t="zh-TW";break;case"nb":case"nn":t="no";break;default:t="en"}return t}exports.get_user=get_user,exports.get_userOnly=get_userOnly,exports.get_device=get_device,exports.check_token=check_token,exports.delete_token=delete_token,exports.get_token=get_token,exports.random_string=random_string,exports.serialize=serialize,exports.SHLanguage=SHLanguage;