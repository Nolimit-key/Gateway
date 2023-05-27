class ActionsOnEXT{constructor(){console.log("[GATEWAY] ActionsOnEXT Ready")}Actions(e,o,t,r){if(!e.GW.GA_Ready)return console.log("[GATEWAY] MMM-GoogleAssistant is not ready");if(!e.GW.GW_Ready)return console.log("[GATEWAY] Gateway is not ready");switch(o){case"EXT_HELLO":e.OthersRules.helloEXT(e,t);break;case"EXT_PAGES-Gateway":"EXT-Pages"==r.name&&Object.assign(e.GW["EXT-Pages"],t);break;case"EXT_GATEWAY":this.gatewayEXT(e,t);break;case"EXT_SCREEN-OFF":if(!e.GW["EXT-Screen"].hello)return console.log("[GATEWAY] Warn Screen don't say to me HELLO!");e.GW["EXT-Screen"].power=!1,e.GW["EXT-Pages"].hello&&e.sendNotification("EXT_PAGES-PAUSE");break;case"EXT_SCREEN-ON":if(!e.GW["EXT-Screen"].hello)return console.log("[GATEWAY] Warn Screen don't say to me HELLO!");e.GW["EXT-Screen"].power=!0,e.GW["EXT-Pages"].hello&&e.sendNotification("EXT_PAGES-RESUME");break;case"EXT_STOP":e.GW["EXT-Alert"].hello&&e.OthersRules.hasPluginConnected(e.GW,"connected",!0)&&e.sendNotification("EXT_ALERT",{type:"information",message:e.translate("EXTStop")});break;case"EXT_MUSIC-CONNECTED":if(!e.GW["EXT-MusicPlayer"].hello)return console.log("[GATEWAY] Warn MusicPlayer don't say to me HELLO!");e.OthersRules.connectEXT(e,"EXT-MusicPlayer");break;case"EXT_MUSIC-DISCONNECTED":if(!e.GW["EXT-MusicPlayer"].hello)return console.log("[GATEWAY] Warn MusicPlayer don't say to me HELLO!");e.OthersRules.disconnectEXT(e,"EXT-MusicPlayer");break;case"EXT_RADIO-CONNECTED":if(!e.GW["EXT-RadioPlayer"].hello)return console.log("[GATEWAY] Warn RadioPlayer don't say to me HELLO!");e.OthersRules.connectEXT(e,"EXT-RadioPlayer");break;case"EXT_RADIO-DISCONNECTED":if(!e.GW["EXT-RadioPlayer"].hello)return console.log("[GATEWAY] Warn RadioPlayer don't say to me HELLO!");e.OthersRules.disconnectEXT(e,"EXT-RadioPlayer");break;case"EXT_SPOTIFY-CONNECTED":if(!e.GW["EXT-Spotify"].hello)return console.error("[GATEWAY] Warn Spotify don't say to me HELLO!");e.GW["EXT-Spotify"].remote=!0,e.GW["EXT-SpotifyCanvasLyrics"].hello&&e.GW["EXT-SpotifyCanvasLyrics"].forced&&e.OthersRules.connectEXT(e,"EXT-SpotifyCanvasLyrics");break;case"EXT_SPOTIFY-DISCONNECTED":if(!e.GW["EXT-Spotify"].hello)return console.error("[GATEWAY] Warn Spotify don't say to me HELLO!");e.GW["EXT-Spotify"].remote=!1,e.GW["EXT-SpotifyCanvasLyrics"].hello&&e.GW["EXT-SpotifyCanvasLyrics"].forced&&e.OthersRules.disconnectEXT(e,"EXT-SpotifyCanvasLyrics");break;case"EXT_SPOTIFY-PLAYING":if(!e.GW["EXT-Spotify"].hello)return console.error("[GATEWAY] Warn Spotify don't say to me HELLO!");e.GW["EXT-Spotify"].play=t;break;case"EXT_SPOTIFY-PLAYER_CONNECTED":if(!e.GW["EXT-Spotify"].hello)return console.error("[GATEWAY] Warn Spotify don't say to me HELLO!");e.OthersRules.connectEXT(e,"EXT-Spotify");break;case"EXT_SPOTIFY-PLAYER_DISCONNECTED":if(!e.GW["EXT-Spotify"].hello)return console.error("[GATEWAY] Warn Spotify don't say to me HELLO!");e.OthersRules.disconnectEXT(e,"EXT-Spotify");break;case"EXT_YOUTUBE-CONNECTED":if(!e.GW["EXT-YouTube"].hello)return console.error("[GATEWAY] Warn YouTube don't say to me HELLO!");e.OthersRules.connectEXT(e,"EXT-YouTube");break;case"EXT_YOUTUBE-DISCONNECTED":if(!e.GW["EXT-YouTube"].hello)return console.error("[GATEWAY] Warn YouTube don't say to me HELLO!");e.OthersRules.disconnectEXT(e,"EXT-YouTube");break;case"EXT_YOUTUBECAST-CONNECTED":if(!e.GW["EXT-YouTubeCast"].hello)return console.error("[GATEWAY] Warn YouTubeCast don't say to me HELLO!");e.OthersRules.connectEXT(e,"EXT-YouTubeCast");break;case"EXT_YOUTUBECAST-DISCONNECTED":if(!e.GW["EXT-YouTubeCast"].hello)return console.error("[GATEWAY] Warn YouTubeCast don't say to me HELLO!");e.OthersRules.disconnectEXT(e,"EXT-YouTubeCast");break;case"EXT_BROWSER-CONNECTED":if(!e.GW["EXT-Browser"].hello)return console.error("[GATEWAY] Warn Browser don't say to me HELLO!");e.OthersRules.connectEXT(e,"EXT-Browser");break;case"EXT_BROWSER-DISCONNECTED":if(!e.GW["EXT-Browser"].hello)return console.error("[GATEWAY] Warn Browser don't say to me HELLO!");e.OthersRules.disconnectEXT(e,"EXT-Browser");break;case"EXT_FREEBOXTV-CONNECTED":if(!e.GW["EXT-FreeboxTV"].hello)return console.error("[GATEWAY] Warn FreeboxTV don't say to me HELLO!");e.OthersRules.connectEXT(e,"EXT-FreeboxTV");break;case"EXT_FREEBOXTV-DISCONNECTED":if(!e.GW["EXT-FreeboxTV"].hello)return console.error("[GATEWAY] Warn FreeboxTV don't say to me HELLO!");e.OthersRules.disconnectEXT(e,"EXT-FreeboxTV");break;case"EXT_PHOTOS-CONNECTED":if(!e.GW["EXT-Photos"].hello)return console.error("[GATEWAY] Warn Photos don't say to me HELLO!");e.OthersRules.connectEXT(e,"EXT-Photos");break;case"EXT_PHOTOS-DISCONNECTED":if(!e.GW["EXT-Photos"].hello)return console.error("[GATEWAY] Warn Photos don't say to me HELLO!");e.OthersRules.disconnectEXT(e,"EXT-Photos");break;case"EXT_INTERNET-DOWN":if(!e.GW["EXT-Internet"].hello)return console.error("[GATEWAY] Warn Internet don't say to me HELLO!");e.GW["EXT-Detector"].hello&&e.sendNotification("EXT_DETECTOR-STOP"),e.GW["EXT-Spotify"].hello&&e.sendNotification("EXT_SPOTIFY-MAIN_STOP"),e.GW["EXT-GooglePhotos"].hello&&e.sendNotification("EXT_GOOGLEPHOTOS-STOP");break;case"EXT_INTERNET-UP":if(!e.GW["EXT-Internet"].hello)return console.error("[GATEWAY] Warn Internet don't say to me HELLO!");e.GW["EXT-Detector"].hello&&e.sendNotification("EXT_DETECTOR-START"),e.GW["EXT-Spotify"].hello&&e.sendNotification("EXT_SPOTIFY-MAIN_START"),e.GW["EXT-GooglePhotos"].hello&&e.sendNotification("EXT_GOOGLEPHOTOS-START");break;case"EXT_UN-MODULE_UPDATE":if(!e.GW||!e.GW["EXT-UpdateNotification"].hello)return console.error("[GATEWAY] Warn UN don't say to me HELLO!");e.GW["EXT-UpdateNotification"].module=t;break;case"EXT_UN-NPM_UPDATE":if(!e.GW||!e.GW["EXT-UpdateNotification"].hello)return console.error("[GATEWAY] Warn UN don't say to me HELLO!");e.GW["EXT-UpdateNotification"].npm=t;break;case"EXT_VOLUME_GET":if(!e.GW["EXT-Volume"].hello)return console.error("[GATEWAY] Warn Volume don't say to me HELLO!");e.GW["EXT-Volume"].speaker=t.Speaker,e.GW["EXT-Volume"].isMuted=t.SpeakerIsMuted,e.GW["EXT-Volume"].recorder=t.Recorder;break;case"EXT_SPOTIFY-SCL_FORCED":if(!e.GW["EXT-SpotifyCanvasLyrics"].hello)return console.error("[GATEWAY] Warn Spotify don't say to me HELLO!");e.GW["EXT-SpotifyCanvasLyrics"].forced=t,e.GW["EXT-SpotifyCanvasLyrics"].forced&&e.GW["EXT-Spotify"].remote&&e.GW["EXT-Spotify"].play&&e.OthersRules.connectEXT(e,"EXT-SpotifyCanvasLyrics"),!e.GW["EXT-SpotifyCanvasLyrics"].forced&&e.GW["EXT-SpotifyCanvasLyrics"].connected&&e.OthersRules.disconnectEXT(e,"EXT-SpotifyCanvasLyrics");break;case"EXT_MOTION-STARTED":if(!e.GW["EXT-Motion"].hello)return console.error("[GATEWAY] Warn Motion don't say to me HELLO!");e.GW["EXT-Motion"].started=!0;break;case"EXT_MOTION-STOPPED":if(!e.GW["EXT-Motion"].hello)return console.error("[GATEWAY] Warn Motion don't say to me HELLO!");e.GW["EXT-Motion"].started=!1;break;case"EXT_PIR-STARTED":if(!e.GW["EXT-Pir"].hello)return console.error("[GATEWAY] Warn Pir don't say to me HELLO!");e.GW["EXT-Pir"].started=!0;break;case"EXT_PIR-STOPPED":if(!e.GW["EXT-Pir"].hello)return console.error("[GATEWAY] Warn Pir don't say to me HELLO!");e.GW["EXT-Pir"].started=!1;break;case"EXT_SELFIES-START":if(!e.GW["EXT-Selfies"].hello)return console.error("[GATEWAY] Warn Selfies don't say to me HELLO!");e.OthersRules.connectEXT(e,"EXT-Selfies"),e.GW["EXT-Motion"].hello&&e.GW["EXT-Motion"].started&&e.sendNotification("EXT_MOTION-DESTROY");break;case"EXT_SELFIES-END":if(!e.GW["EXT-Selfies"].hello)return console.error("[GATEWAY] Warn Selfies don't say to me HELLO!");e.OthersRules.disconnectEXT(e,"EXT-Selfies"),e.GW["EXT-Motion"].hello&&!e.GW["EXT-Motion"].started&&e.sendNotification("EXT_MOTION-INIT");break;case"EXT_PAGES-NUMBER_IS":if(!e.GW["EXT-Pages"].hello)return console.error("[GATEWAY] Warn Pages don't say to me HELLO!");e.GW["EXT-Pages"].actual=t.Actual,e.GW["EXT-Pages"].total=t.Total;break;case"EXT_GATEWAY-REBOOT":if(!e.GW["EXT-SmartHome"].hello)return;"EXT-SmartHome"==r.name&&e.sendSocketNotification("Restart");break;case"EXT_SCREEN-GH_FORCE_WAKEUP":e.GW["EXT-Screen"].hello&&e.OthersRules.hasPluginConnected(e.GW,"connected",!0)&&setTimeout((()=>{e.sendNotification("EXT_SCREEN-LOCK")}),500);default:logGW("Sorry, i don't understand what is",o,t||"")}e.sendSocketNotification("EXTStatus",e.GW)}gatewayEXT(e,o){if(!o)return;logGW("Response Scan");let t={photos:{urls:o.photos&&o.photos.length?o.photos:[],length:o.photos&&o.photos.length?o.photos.length:0},links:{urls:o.urls&&o.urls.length?o.urls:[],length:o.urls&&o.urls.length?o.urls.length:0},youtube:o.youtube};var r=configMerge({},r,t);r.photos.length>0&&e.GW["EXT-Photos"].hello?(e.GW["EXT-Photos"].connected=!0,e.sendNotification("EXT_PHOTOS-OPEN",r.photos.urls),logGW("Forced connected: EXT-Photos")):r.links.length>0?this.urlsScan(e,r):r.youtube&&e.GW["EXT-YouTube"].hello&&(e.sendNotification("EXT_YOUTUBE-SEARCH",r.youtube),logGW("Sended to YT",r.youtube)),logGW("Response Structure:",r)}urlsScan(e,o){var t=o.links.urls[0],r=new RegExp("youtube.com/([a-z]+)\\?([a-z]+)=([0-9a-zA-Z-_]+)","ig").exec(t);if(r){let o;if("watch"==r[1]&&(o="id"),"playlist"==r[1]&&(o="playlist"),!o)return console.log("[GA:EXT:YouTube] Unknow Type !",r);if(e.GW["EXT-YouTube"].hello){if("playlist"==o)return void e.sendNotification("EXT_ALERT",{message:"EXT_YOUTUBE don't support playlist",timer:5e3,type:"warning"});e.sendNotification("EXT_YOUTUBE-PLAY",r[3])}}else{var E=new RegExp("open.spotify.com/([a-z]+)/([0-9a-zA-Z-_]+)","ig").exec(t);if(E){let o=E[1],t=E[2];e.GW["EXT-Spotify"].hello&&("track"==o?e.sendNotification("EXT_SPOTIFY-PLAY",{uris:["spotify:track:"+t]}):e.sendNotification("EXT_SPOTIFY-PLAY",{context_uri:"spotify:"+o+":"+t}))}else e.GW["EXT-Browser"].hello&&(e.GW["EXT-Browser"].connected=!0,e.sendNotification("EXT_BROWSER-OPEN",t),logGW("Forced connected: EXT-Browser"))}}}