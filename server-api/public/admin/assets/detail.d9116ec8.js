import{a4 as N,aD as O,al as M,aN as P,aO as U,ap as g,aL as A,ao as W,aP as he,aq as L,a6 as Y,aQ as ae,aR as ce,ah as q,aS as ne,aT as le,aU as pe,aV as ue,aW as Z,aX as de,ar as C,as as x,an as B,aM as ge,aE as k,am as D,aY as fe,av as G,aZ as Q,a_ as J,aI as K,a5 as me,ax as F,a$ as ve,b0 as we,b1 as Ce,b2 as xe,b3 as ye,b4 as be,b5 as _e,b6 as V,b7 as Oe,aC as j}from"./index.4963a130.js";/* empty css              */const ee={};ee.getData=e=>new Promise((t,s)=>{let i={};Me(e).then(r=>{i.arrayBuffer=r;try{i.orientation=Ye(r)}catch{i.orientation=-1}t(i)}).catch(r=>{s(r)})});function Me(e){let t=null;return new Promise((s,i)=>{if(e.src)if(/^data\:/i.test(e.src))t=He(e.src),s(t);else if(/^blob\:/i.test(e.src)){var r=new FileReader;r.onload=function(h){t=h.target.result,s(t)},Xe(e.src,function(h){r.readAsArrayBuffer(h)})}else{var o=new XMLHttpRequest;o.onload=function(){if(this.status==200||this.status===0)t=o.response,s(t);else throw"Could not load image";o=null},o.open("GET",e.src,!0),o.responseType="arraybuffer",o.send(null)}else i("img error")})}function Xe(e,t){var s=new XMLHttpRequest;s.open("GET",e,!0),s.responseType="blob",s.onload=function(i){(this.status==200||this.status===0)&&t(this.response)},s.send()}function He(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/mi)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gmi,"");for(var s=atob(e),i=s.length%2==0?s.length:s.length+1,r=new ArrayBuffer(i),o=new Uint16Array(r),h=0;h<i;h++)o[h]=s.charCodeAt(h);return r}function We(e,t,s){var i="",r;for(r=t,s+=t;r<s;r++)i+=String.fromCharCode(e.getUint8(r));return i}function Ye(e){var t=new DataView(e),s=t.byteLength,i,r,o,h,c,n,l,a,p,d;if(t.getUint8(0)===255&&t.getUint8(1)===216)for(p=2;p<s;){if(t.getUint8(p)===255&&t.getUint8(p+1)===225){l=p;break}p++}if(l&&(r=l+4,o=l+10,We(t,r,4)==="Exif"&&(n=t.getUint16(o),c=n===18761,(c||n===19789)&&t.getUint16(o+2,c)===42&&(h=t.getUint32(o+4,c),h>=8&&(a=o+h)))),a){for(s=t.getUint16(a,c),d=0;d<s;d++)if(p=a+d*12+2,t.getUint16(p,c)===274){p+=8,i=t.getUint16(p,c);break}}return i}const Se=(e,t)=>{const s=e.__vccOpts||e;for(const[i,r]of t)s[i]=r;return s},Ie=N({data:function(){return{w:0,h:0,scale:1,x:0,y:0,loading:!0,trueWidth:0,trueHeight:0,move:!0,moveX:0,moveY:0,crop:!1,cropping:!1,cropW:0,cropH:0,cropOldW:0,cropOldH:0,canChangeX:!1,canChangeY:!1,changeCropTypeX:1,changeCropTypeY:1,cropX:0,cropY:0,cropChangeX:0,cropChangeY:0,cropOffsertX:0,cropOffsertY:0,support:"",touches:[],touchNow:!1,rotate:0,isIos:!1,orientation:0,imgs:"",coe:.2,scaling:!1,scalingSet:"",coeStatus:"",isCanShow:!0}},props:{img:{type:[String,Blob,null,File],default:""},outputSize:{type:Number,default:1},outputType:{type:String,default:"jpeg"},info:{type:Boolean,default:!0},canScale:{type:Boolean,default:!0},autoCrop:{type:Boolean,default:!1},autoCropWidth:{type:[Number,String],default:0},autoCropHeight:{type:[Number,String],default:0},fixed:{type:Boolean,default:!1},fixedNumber:{type:Array,default:()=>[1,1]},fixedBox:{type:Boolean,default:!1},full:{type:Boolean,default:!1},canMove:{type:Boolean,default:!0},canMoveBox:{type:Boolean,default:!0},original:{type:Boolean,default:!1},centerBox:{type:Boolean,default:!1},high:{type:Boolean,default:!0},infoTrue:{type:Boolean,default:!1},maxImgSize:{type:[Number,String],default:2e3},enlarge:{type:[Number,String],default:1},preW:{type:[Number,String],default:0},mode:{type:String,default:"contain"},limitMinSize:{type:[Number,Array,String],default:()=>10,validator:function(e){return Array.isArray(e)?Number(e[0])>=0&&Number(e[1])>=0:Number(e)>=0}},fillColor:{type:String,default:""}},computed:{cropInfo(){let e={};if(e.top=this.cropOffsertY>21?"-21px":"0px",e.width=this.cropW>0?this.cropW:0,e.height=this.cropH>0?this.cropH:0,this.infoTrue){let t=1;this.high&&!this.full&&(t=window.devicePixelRatio),this.enlarge!==1&!this.full&&(t=Math.abs(Number(this.enlarge))),e.width=e.width*t,e.height=e.height*t,this.full&&(e.width=e.width/this.scale,e.height=e.height/this.scale)}return e.width=e.width.toFixed(0),e.height=e.height.toFixed(0),e},isIE(){return!!window.ActiveXObject||"ActiveXObject"in window},passive(){return this.isIE?null:{passive:!1}}},watch:{img(){this.checkedImg()},imgs(e){e!==""&&this.reload()},cropW(){this.showPreview()},cropH(){this.showPreview()},cropOffsertX(){this.showPreview()},cropOffsertY(){this.showPreview()},scale(e,t){this.showPreview()},x(){this.showPreview()},y(){this.showPreview()},autoCrop(e){e&&this.goAutoCrop()},autoCropWidth(){this.autoCrop&&this.goAutoCrop()},autoCropHeight(){this.autoCrop&&this.goAutoCrop()},mode(){this.checkedImg()},rotate(){this.showPreview(),this.autoCrop?this.goAutoCrop(this.cropW,this.cropH):(this.cropW>0||this.cropH>0)&&this.goAutoCrop(this.cropW,this.cropH)}},methods:{getVersion(e){var t=navigator.userAgent.split(" "),s="";let i=0;const r=new RegExp(e,"i");for(var o=0;o<t.length;o++)r.test(t[o])&&(s=t[o]);return s?i=s.split("/")[1].split("."):i=["0","0","0"],i},checkOrientationImage(e,t,s,i){if(this.getVersion("chrome")[0]>=81)t=-1;else if(this.getVersion("safari")[0]>=605){const h=this.getVersion("version");h[0]>13&&h[1]>1&&(t=-1)}else{const h=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);if(h){let c=h[1];c=c.split("_"),(c[0]>13||c[0]>=13&&c[1]>=4)&&(t=-1)}}let r=document.createElement("canvas"),o=r.getContext("2d");switch(o.save(),t){case 2:r.width=s,r.height=i,o.translate(s,0),o.scale(-1,1);break;case 3:r.width=s,r.height=i,o.translate(s/2,i/2),o.rotate(180*Math.PI/180),o.translate(-s/2,-i/2);break;case 4:r.width=s,r.height=i,o.translate(0,i),o.scale(1,-1);break;case 5:r.height=s,r.width=i,o.rotate(.5*Math.PI),o.scale(1,-1);break;case 6:r.width=i,r.height=s,o.translate(i/2,s/2),o.rotate(90*Math.PI/180),o.translate(-s/2,-i/2);break;case 7:r.height=s,r.width=i,o.rotate(.5*Math.PI),o.translate(s,-i),o.scale(-1,1);break;case 8:r.height=s,r.width=i,o.translate(i/2,s/2),o.rotate(-90*Math.PI/180),o.translate(-s/2,-i/2);break;default:r.width=s,r.height=i}o.drawImage(e,0,0,s,i),o.restore(),r.toBlob(h=>{let c=URL.createObjectURL(h);URL.revokeObjectURL(this.imgs),this.imgs=c},"image/"+this.outputType,1)},checkedImg(){if(this.img===null||this.img===""){this.imgs="",this.clearCrop();return}this.loading=!0,this.scale=1,this.rotate=0,this.clearCrop();let e=new Image;if(e.onload=()=>{if(this.img==="")return this.$emit("img-load",new Error("\u56FE\u7247\u4E0D\u80FD\u4E3A\u7A7A")),!1;let s=e.width,i=e.height;ee.getData(e).then(r=>{this.orientation=r.orientation||1;let o=Number(this.maxImgSize);if(!this.orientation&&s<o&i<o){this.imgs=this.img;return}s>o&&(i=i/s*o,s=o),i>o&&(s=s/i*o,i=o),this.checkOrientationImage(e,this.orientation,s,i)}).catch(r=>{this.$emit("img-load","error"),this.$emit("img-load-error",r)})},e.onerror=s=>{this.$emit("img-load","error"),this.$emit("img-load-error",s)},this.img.substr(0,4)!=="data"&&(e.crossOrigin=""),this.isIE){var t=new XMLHttpRequest;t.onload=function(){var s=URL.createObjectURL(this.response);e.src=s},t.open("GET",this.img,!0),t.responseType="blob",t.send()}else e.src=this.img},startMove(e){if(e.preventDefault(),this.move&&!this.crop){if(!this.canMove)return!1;this.moveX=("clientX"in e?e.clientX:e.touches[0].clientX)-this.x,this.moveY=("clientY"in e?e.clientY:e.touches[0].clientY)-this.y,e.touches?(window.addEventListener("touchmove",this.moveImg),window.addEventListener("touchend",this.leaveImg),e.touches.length==2&&(this.touches=e.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale))):(window.addEventListener("mousemove",this.moveImg),window.addEventListener("mouseup",this.leaveImg)),this.$emit("img-moving",{moving:!0,axis:this.getImgAxis()})}else this.cropping=!0,window.addEventListener("mousemove",this.createCrop),window.addEventListener("mouseup",this.endCrop),window.addEventListener("touchmove",this.createCrop),window.addEventListener("touchend",this.endCrop),this.cropOffsertX=e.offsetX?e.offsetX:e.touches[0].pageX-this.$refs.cropper.offsetLeft,this.cropOffsertY=e.offsetY?e.offsetY:e.touches[0].pageY-this.$refs.cropper.offsetTop,this.cropX="clientX"in e?e.clientX:e.touches[0].clientX,this.cropY="clientY"in e?e.clientY:e.touches[0].clientY,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.cropW=0,this.cropH=0},touchScale(e){e.preventDefault();let t=this.scale;var s={x:this.touches[0].clientX,y:this.touches[0].clientY},i={x:e.touches[0].clientX,y:e.touches[0].clientY},r={x:this.touches[1].clientX,y:this.touches[1].clientY},o={x:e.touches[1].clientX,y:e.touches[1].clientY},h=Math.sqrt(Math.pow(s.x-r.x,2)+Math.pow(s.y-r.y,2)),c=Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)),n=c-h,l=1;l=l/this.trueWidth>l/this.trueHeight?l/this.trueHeight:l/this.trueWidth,l=l>.1?.1:l;var a=l*n;if(!this.touchNow){if(this.touchNow=!0,n>0?t+=Math.abs(a):n<0&&t>Math.abs(a)&&(t-=Math.abs(a)),this.touches=e.touches,setTimeout(()=>{this.touchNow=!1},8),!this.checkoutImgAxis(this.x,this.y,t))return!1;this.scale=t}},cancelTouchScale(e){window.removeEventListener("touchmove",this.touchScale)},moveImg(e){if(e.preventDefault(),e.touches&&e.touches.length===2)return this.touches=e.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale),window.removeEventListener("touchmove",this.moveImg),!1;let t="clientX"in e?e.clientX:e.touches[0].clientX,s="clientY"in e?e.clientY:e.touches[0].clientY,i,r;i=t-this.moveX,r=s-this.moveY,this.$nextTick(()=>{if(this.centerBox){let o=this.getImgAxis(i,r,this.scale),h=this.getCropAxis(),c=this.trueHeight*this.scale,n=this.trueWidth*this.scale,l,a,p,d;switch(this.rotate){case 1:case-1:case 3:case-3:l=this.cropOffsertX-this.trueWidth*(1-this.scale)/2+(c-n)/2,a=this.cropOffsertY-this.trueHeight*(1-this.scale)/2+(n-c)/2,p=l-c+this.cropW,d=a-n+this.cropH;break;default:l=this.cropOffsertX-this.trueWidth*(1-this.scale)/2,a=this.cropOffsertY-this.trueHeight*(1-this.scale)/2,p=l-n+this.cropW,d=a-c+this.cropH;break}o.x1>=h.x1&&(i=l),o.y1>=h.y1&&(r=a),o.x2<=h.x2&&(i=p),o.y2<=h.y2&&(r=d)}this.x=i,this.y=r,this.$emit("img-moving",{moving:!0,axis:this.getImgAxis()})})},leaveImg(e){window.removeEventListener("mousemove",this.moveImg),window.removeEventListener("touchmove",this.moveImg),window.removeEventListener("mouseup",this.leaveImg),window.removeEventListener("touchend",this.leaveImg),this.$emit("img-moving",{moving:!1,axis:this.getImgAxis()})},scaleImg(){this.canScale&&window.addEventListener(this.support,this.changeSize,this.passive)},cancelScale(){this.canScale&&window.removeEventListener(this.support,this.changeSize)},changeSize(e){e.preventDefault();let t=this.scale;var s=e.deltaY||e.wheelDelta,i=navigator.userAgent.indexOf("Firefox");s=i>0?s*30:s,this.isIE&&(s=-s);var r=this.coe;r=r/this.trueWidth>r/this.trueHeight?r/this.trueHeight:r/this.trueWidth;var o=r*s;o<0?t+=Math.abs(o):t>Math.abs(o)&&(t-=Math.abs(o));let h=o<0?"add":"reduce";if(h!==this.coeStatus&&(this.coeStatus=h,this.coe=.2),this.scaling||(this.scalingSet=setTimeout(()=>{this.scaling=!1,this.coe=this.coe+=.01},50)),this.scaling=!0,!this.checkoutImgAxis(this.x,this.y,t))return!1;this.scale=t},changeScale(e){let t=this.scale;e=e||1;var s=20;if(s=s/this.trueWidth>s/this.trueHeight?s/this.trueHeight:s/this.trueWidth,e=e*s,e>0?t+=Math.abs(e):t>Math.abs(e)&&(t-=Math.abs(e)),!this.checkoutImgAxis(this.x,this.y,t))return!1;this.scale=t},createCrop(e){e.preventDefault();var t="clientX"in e?e.clientX:e.touches?e.touches[0].clientX:0,s="clientY"in e?e.clientY:e.touches?e.touches[0].clientY:0;this.$nextTick(()=>{var i=t-this.cropX,r=s-this.cropY;if(i>0?(this.cropW=i+this.cropChangeX>this.w?this.w-this.cropChangeX:i,this.cropOffsertX=this.cropChangeX):(this.cropW=this.w-this.cropChangeX+Math.abs(i)>this.w?this.cropChangeX:Math.abs(i),this.cropOffsertX=this.cropChangeX+i>0?this.cropChangeX+i:0),!this.fixed)r>0?(this.cropH=r+this.cropChangeY>this.h?this.h-this.cropChangeY:r,this.cropOffsertY=this.cropChangeY):(this.cropH=this.h-this.cropChangeY+Math.abs(r)>this.h?this.cropChangeY:Math.abs(r),this.cropOffsertY=this.cropChangeY+r>0?this.cropChangeY+r:0);else{var o=this.cropW/this.fixedNumber[0]*this.fixedNumber[1];o+this.cropOffsertY>this.h?(this.cropH=this.h-this.cropOffsertY,this.cropW=this.cropH/this.fixedNumber[1]*this.fixedNumber[0],i>0?this.cropOffsertX=this.cropChangeX:this.cropOffsertX=this.cropChangeX-this.cropW):this.cropH=o,this.cropOffsertY=this.cropOffsertY}})},changeCropSize(e,t,s,i,r){e.preventDefault(),window.addEventListener("mousemove",this.changeCropNow),window.addEventListener("mouseup",this.changeCropEnd),window.addEventListener("touchmove",this.changeCropNow),window.addEventListener("touchend",this.changeCropEnd),this.canChangeX=t,this.canChangeY=s,this.changeCropTypeX=i,this.changeCropTypeY=r,this.cropX="clientX"in e?e.clientX:e.touches[0].clientX,this.cropY="clientY"in e?e.clientY:e.touches[0].clientY,this.cropOldW=this.cropW,this.cropOldH=this.cropH,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.fixed&&this.canChangeX&&this.canChangeY&&(this.canChangeY=0),this.$emit("change-crop-size",{width:this.cropW,height:this.cropH})},changeCropNow(e){e.preventDefault();var t="clientX"in e?e.clientX:e.touches?e.touches[0].clientX:0,s="clientY"in e?e.clientY:e.touches?e.touches[0].clientY:0;let i=this.w,r=this.h,o=0,h=0;if(this.centerBox){let l=this.getImgAxis(),a=l.x2,p=l.y2;o=l.x1>0?l.x1:0,h=l.y1>0?l.y1:0,i>a&&(i=a),r>p&&(r=p)}const[c,n]=this.checkCropLimitSize();this.$nextTick(()=>{var l=t-this.cropX,a=s-this.cropY;if(this.canChangeX&&(this.changeCropTypeX===1?this.cropOldW-l<c?(this.cropW=c,this.cropOffsertX=this.cropOldW+this.cropChangeX-o-c):this.cropOldW-l>0?(this.cropW=i-this.cropChangeX-l<=i-o?this.cropOldW-l:this.cropOldW+this.cropChangeX-o,this.cropOffsertX=i-this.cropChangeX-l<=i-o?this.cropChangeX+l:o):(this.cropW=Math.abs(l)+this.cropChangeX<=i?Math.abs(l)-this.cropOldW:i-this.cropOldW-this.cropChangeX,this.cropOffsertX=this.cropChangeX+this.cropOldW):this.changeCropTypeX===2&&(this.cropOldW+l<c?this.cropW=c:this.cropOldW+l>0?(this.cropW=this.cropOldW+l+this.cropOffsertX<=i?this.cropOldW+l:i-this.cropOffsertX,this.cropOffsertX=this.cropChangeX):(this.cropW=i-this.cropChangeX+Math.abs(l+this.cropOldW)<=i-o?Math.abs(l+this.cropOldW):this.cropChangeX-o,this.cropOffsertX=i-this.cropChangeX+Math.abs(l+this.cropOldW)<=i-o?this.cropChangeX-Math.abs(l+this.cropOldW):o))),this.canChangeY&&(this.changeCropTypeY===1?this.cropOldH-a<n?(this.cropH=n,this.cropOffsertY=this.cropOldH+this.cropChangeY-h-n):this.cropOldH-a>0?(this.cropH=r-this.cropChangeY-a<=r-h?this.cropOldH-a:this.cropOldH+this.cropChangeY-h,this.cropOffsertY=r-this.cropChangeY-a<=r-h?this.cropChangeY+a:h):(this.cropH=Math.abs(a)+this.cropChangeY<=r?Math.abs(a)-this.cropOldH:r-this.cropOldH-this.cropChangeY,this.cropOffsertY=this.cropChangeY+this.cropOldH):this.changeCropTypeY===2&&(this.cropOldH+a<n?this.cropH=n:this.cropOldH+a>0?(this.cropH=this.cropOldH+a+this.cropOffsertY<=r?this.cropOldH+a:r-this.cropOffsertY,this.cropOffsertY=this.cropChangeY):(this.cropH=r-this.cropChangeY+Math.abs(a+this.cropOldH)<=r-h?Math.abs(a+this.cropOldH):this.cropChangeY-h,this.cropOffsertY=r-this.cropChangeY+Math.abs(a+this.cropOldH)<=r-h?this.cropChangeY-Math.abs(a+this.cropOldH):h))),this.canChangeX&&this.fixed){var p=this.cropW/this.fixedNumber[0]*this.fixedNumber[1];p<n?(this.cropH=n,this.cropW=this.fixedNumber[0]*n/this.fixedNumber[1],this.changeCropTypeX===1&&(this.cropOffsertX=this.cropChangeX+(this.cropOldW-this.cropW))):p+this.cropOffsertY>r?(this.cropH=r-this.cropOffsertY,this.cropW=this.cropH/this.fixedNumber[1]*this.fixedNumber[0],this.changeCropTypeX===1&&(this.cropOffsertX=this.cropChangeX+(this.cropOldW-this.cropW))):this.cropH=p}if(this.canChangeY&&this.fixed){var d=this.cropH/this.fixedNumber[1]*this.fixedNumber[0];d<c?(this.cropW=c,this.cropH=this.fixedNumber[1]*c/this.fixedNumber[0],this.cropOffsertY=this.cropOldH+this.cropChangeY-this.cropH):d+this.cropOffsertX>i?(this.cropW=i-this.cropOffsertX,this.cropH=this.cropW/this.fixedNumber[0]*this.fixedNumber[1]):this.cropW=d}})},checkCropLimitSize(){let{cropW:e,cropH:t,limitMinSize:s}=this,i=new Array;return Array.isArray(s)?i=s:i=[s,s],e=parseFloat(i[0]),t=parseFloat(i[1]),[e,t]},changeCropEnd(e){window.removeEventListener("mousemove",this.changeCropNow),window.removeEventListener("mouseup",this.changeCropEnd),window.removeEventListener("touchmove",this.changeCropNow),window.removeEventListener("touchend",this.changeCropEnd)},calculateSize(e,t,s,i,r,o){const h=e/t;let c=r,n=o;return c<s&&(c=s,n=Math.ceil(c/h)),n<i&&(n=i,c=Math.ceil(n*h),c<s&&(c=s,n=Math.ceil(c/h))),c<r&&(c=r,n=Math.ceil(c/h)),n<o&&(n=o,c=Math.ceil(n*h)),{width:c,height:n}},endCrop(){this.cropW===0&&this.cropH===0&&(this.cropping=!1);let[e,t]=this.checkCropLimitSize();const{width:s,height:i}=this.fixed?this.calculateSize(this.fixedNumber[0],this.fixedNumber[1],e,t,this.cropW,this.cropH):{width:e,height:t};s>this.cropW&&(this.cropW=s,this.cropOffsertX+s>this.w&&(this.cropOffsertX=this.w-s)),i>this.cropH&&(this.cropH=i,this.cropOffsertY+i>this.h&&(this.cropOffsertY=this.h-i)),window.removeEventListener("mousemove",this.createCrop),window.removeEventListener("mouseup",this.endCrop),window.removeEventListener("touchmove",this.createCrop),window.removeEventListener("touchend",this.endCrop)},startCrop(){this.crop=!0},stopCrop(){this.crop=!1},clearCrop(){this.cropping=!1,this.cropW=0,this.cropH=0},cropMove(e){if(e.preventDefault(),!this.canMoveBox)return this.crop=!1,this.startMove(e),!1;if(e.touches&&e.touches.length===2)return this.crop=!1,this.startMove(e),this.leaveCrop(),!1;window.addEventListener("mousemove",this.moveCrop),window.addEventListener("mouseup",this.leaveCrop),window.addEventListener("touchmove",this.moveCrop),window.addEventListener("touchend",this.leaveCrop);let t="clientX"in e?e.clientX:e.touches[0].clientX,s="clientY"in e?e.clientY:e.touches[0].clientY,i,r;i=t-this.cropOffsertX,r=s-this.cropOffsertY,this.cropX=i,this.cropY=r,this.$emit("crop-moving",{moving:!0,axis:this.getCropAxis()})},moveCrop(e,t){let s=0,i=0;e&&(e.preventDefault(),s="clientX"in e?e.clientX:e.touches[0].clientX,i="clientY"in e?e.clientY:e.touches[0].clientY),this.$nextTick(()=>{let r,o,h=s-this.cropX,c=i-this.cropY;if(t&&(h=this.cropOffsertX,c=this.cropOffsertY),h<=0?r=0:h+this.cropW>this.w?r=this.w-this.cropW:r=h,c<=0?o=0:c+this.cropH>this.h?o=this.h-this.cropH:o=c,this.centerBox){let n=this.getImgAxis();r<=n.x1&&(r=n.x1),r+this.cropW>n.x2&&(r=n.x2-this.cropW),o<=n.y1&&(o=n.y1),o+this.cropH>n.y2&&(o=n.y2-this.cropH)}this.cropOffsertX=r,this.cropOffsertY=o,this.$emit("crop-moving",{moving:!0,axis:this.getCropAxis()})})},getImgAxis(e,t,s){e=e||this.x,t=t||this.y,s=s||this.scale;let i={x1:0,x2:0,y1:0,y2:0},r=this.trueWidth*s,o=this.trueHeight*s;switch(this.rotate){case 0:i.x1=e+this.trueWidth*(1-s)/2,i.x2=i.x1+this.trueWidth*s,i.y1=t+this.trueHeight*(1-s)/2,i.y2=i.y1+this.trueHeight*s;break;case 1:case-1:case 3:case-3:i.x1=e+this.trueWidth*(1-s)/2+(r-o)/2,i.x2=i.x1+this.trueHeight*s,i.y1=t+this.trueHeight*(1-s)/2+(o-r)/2,i.y2=i.y1+this.trueWidth*s;break;default:i.x1=e+this.trueWidth*(1-s)/2,i.x2=i.x1+this.trueWidth*s,i.y1=t+this.trueHeight*(1-s)/2,i.y2=i.y1+this.trueHeight*s;break}return i},getCropAxis(){let e={x1:0,x2:0,y1:0,y2:0};return e.x1=this.cropOffsertX,e.x2=e.x1+this.cropW,e.y1=this.cropOffsertY,e.y2=e.y1+this.cropH,e},leaveCrop(e){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.$emit("crop-moving",{moving:!1,axis:this.getCropAxis()})},getCropChecked(e){let t=document.createElement("canvas"),s=new Image,i=this.rotate,r=this.trueWidth,o=this.trueHeight,h=this.cropOffsertX,c=this.cropOffsertY;s.onload=()=>{if(this.cropW!==0){let a=t.getContext("2d"),p=1;this.high&!this.full&&(p=window.devicePixelRatio),this.enlarge!==1&!this.full&&(p=Math.abs(Number(this.enlarge)));let d=this.cropW*p,y=this.cropH*p,m=r*this.scale*p,f=o*this.scale*p,w=(this.x-h+this.trueWidth*(1-this.scale)/2)*p,v=(this.y-c+this.trueHeight*(1-this.scale)/2)*p;switch(l(d,y),a.save(),this.fillColor&&(a.fillStyle=this.fillColor,a.fillRect(0,0,t.width,t.height)),i){case 0:this.full?(l(d/this.scale,y/this.scale),a.drawImage(s,w/this.scale,v/this.scale,m/this.scale,f/this.scale)):a.drawImage(s,w,v,m,f);break;case 1:case-3:this.full?(l(d/this.scale,y/this.scale),w=w/this.scale+(m/this.scale-f/this.scale)/2,v=v/this.scale+(f/this.scale-m/this.scale)/2,a.rotate(i*90*Math.PI/180),a.drawImage(s,v,-w-f/this.scale,m/this.scale,f/this.scale)):(w=w+(m-f)/2,v=v+(f-m)/2,a.rotate(i*90*Math.PI/180),a.drawImage(s,v,-w-f,m,f));break;case 2:case-2:this.full?(l(d/this.scale,y/this.scale),a.rotate(i*90*Math.PI/180),w=w/this.scale,v=v/this.scale,a.drawImage(s,-w-m/this.scale,-v-f/this.scale,m/this.scale,f/this.scale)):(a.rotate(i*90*Math.PI/180),a.drawImage(s,-w-m,-v-f,m,f));break;case 3:case-1:this.full?(l(d/this.scale,y/this.scale),w=w/this.scale+(m/this.scale-f/this.scale)/2,v=v/this.scale+(f/this.scale-m/this.scale)/2,a.rotate(i*90*Math.PI/180),a.drawImage(s,-v-m/this.scale,w,m/this.scale,f/this.scale)):(w=w+(m-f)/2,v=v+(f-m)/2,a.rotate(i*90*Math.PI/180),a.drawImage(s,-v-m,w,m,f));break;default:this.full?(l(d/this.scale,y/this.scale),a.drawImage(s,w/this.scale,v/this.scale,m/this.scale,f/this.scale)):a.drawImage(s,w,v,m,f)}a.restore()}else{let a=r*this.scale,p=o*this.scale,d=t.getContext("2d");switch(d.save(),this.fillColor&&(d.fillStyle=this.fillColor,d.fillRect(0,0,t.width,t.height)),i){case 0:l(a,p),d.drawImage(s,0,0,a,p);break;case 1:case-3:l(p,a),d.rotate(i*90*Math.PI/180),d.drawImage(s,0,-p,a,p);break;case 2:case-2:l(a,p),d.rotate(i*90*Math.PI/180),d.drawImage(s,-a,-p,a,p);break;case 3:case-1:l(p,a),d.rotate(i*90*Math.PI/180),d.drawImage(s,-a,0,a,p);break;default:l(a,p),d.drawImage(s,0,0,a,p)}d.restore()}e(t)};var n=this.img.substr(0,4);n!=="data"&&(s.crossOrigin="Anonymous"),s.src=this.imgs;function l(a,p){t.width=Math.round(a),t.height=Math.round(p)}},getCropData(e){this.getCropChecked(t=>{e(t.toDataURL("image/"+this.outputType,this.outputSize))})},getCropBlob(e){this.getCropChecked(t=>{t.toBlob(s=>e(s),"image/"+this.outputType,this.outputSize)})},showPreview(){if(this.isCanShow)this.isCanShow=!1,setTimeout(()=>{this.isCanShow=!0},16);else return!1;let e=this.cropW,t=this.cropH,s=this.scale;var i={};i.div={width:`${e}px`,height:`${t}px`};let r=(this.x-this.cropOffsertX)/s,o=(this.y-this.cropOffsertY)/s,h=0;i.w=e,i.h=t,i.url=this.imgs,i.img={width:`${this.trueWidth}px`,height:`${this.trueHeight}px`,transform:`scale(${s})translate3d(${r}px, ${o}px, ${h}px)rotateZ(${this.rotate*90}deg)`},i.html=`
      <div class="show-preview" style="width: ${i.w}px; height: ${i.h}px,; overflow: hidden">
        <div style="width: ${e}px; height: ${t}px">
          <img src=${i.url} style="width: ${this.trueWidth}px; height: ${this.trueHeight}px; transform:
          scale(${s})translate3d(${r}px, ${o}px, ${h}px)rotateZ(${this.rotate*90}deg)">
        </div>
      </div>`,this.$emit("real-time",i)},reload(){let e=new Image;e.onload=()=>{this.w=parseFloat(window.getComputedStyle(this.$refs.cropper).width),this.h=parseFloat(window.getComputedStyle(this.$refs.cropper).height),this.trueWidth=e.width,this.trueHeight=e.height,this.original?this.scale=1:this.scale=this.checkedMode(),this.$nextTick(()=>{this.x=-(this.trueWidth-this.trueWidth*this.scale)/2+(this.w-this.trueWidth*this.scale)/2,this.y=-(this.trueHeight-this.trueHeight*this.scale)/2+(this.h-this.trueHeight*this.scale)/2,this.loading=!1,this.autoCrop&&this.goAutoCrop(),this.$emit("img-load","success"),setTimeout(()=>{this.showPreview()},20)})},e.onerror=()=>{this.$emit("img-load","error")},e.src=this.imgs},checkedMode(){let e=1,t=this.trueWidth,s=this.trueHeight;const i=this.mode.split(" ");switch(i[0]){case"contain":this.trueWidth>this.w&&(e=this.w/this.trueWidth),this.trueHeight*e>this.h&&(e=this.h/this.trueHeight);break;case"cover":t=this.w,e=t/this.trueWidth,s=s*e,s<this.h&&(s=this.h,e=s/this.trueHeight);break;default:try{let r=i[0];if(r.search("px")!==-1){r=r.replace("px",""),t=parseFloat(r);const o=t/this.trueWidth;let h=1,c=i[1];c.search("px")!==-1&&(c=c.replace("px",""),s=parseFloat(c),h=s/this.trueHeight),e=Math.min(o,h)}if(r.search("%")!==-1&&(r=r.replace("%",""),t=parseFloat(r)/100*this.w,e=t/this.trueWidth),i.length===2&&r==="auto"){let o=i[1];o.search("px")!==-1&&(o=o.replace("px",""),s=parseFloat(o),e=s/this.trueHeight),o.search("%")!==-1&&(o=o.replace("%",""),s=parseFloat(o)/100*this.h,e=s/this.trueHeight)}}catch{e=1}}return e},goAutoCrop(e,t){if(this.imgs===""||this.imgs===null)return;this.clearCrop(),this.cropping=!0;let s=this.w,i=this.h;if(this.centerBox){const h=Math.abs(this.rotate)%2>0;let c=(h?this.trueHeight:this.trueWidth)*this.scale,n=(h?this.trueWidth:this.trueHeight)*this.scale;s=c<s?c:s,i=n<i?n:i}var r=e||parseFloat(this.autoCropWidth),o=t||parseFloat(this.autoCropHeight);(r===0||o===0)&&(r=s*.8,o=i*.8),r=r>s?s:r,o=o>i?i:o,this.fixed&&(o=r/this.fixedNumber[0]*this.fixedNumber[1]),o>this.h&&(o=this.h,r=o/this.fixedNumber[1]*this.fixedNumber[0]),this.changeCrop(r,o)},changeCrop(e,t){if(this.centerBox){let s=this.getImgAxis();e>s.x2-s.x1&&(e=s.x2-s.x1,t=e/this.fixedNumber[0]*this.fixedNumber[1]),t>s.y2-s.y1&&(t=s.y2-s.y1,e=t/this.fixedNumber[1]*this.fixedNumber[0])}this.cropW=e,this.cropH=t,this.checkCropLimitSize(),this.$nextTick(()=>{this.cropOffsertX=(this.w-this.cropW)/2,this.cropOffsertY=(this.h-this.cropH)/2,this.centerBox&&this.moveCrop(null,!0)})},refresh(){this.img,this.imgs="",this.scale=1,this.crop=!1,this.rotate=0,this.w=0,this.h=0,this.trueWidth=0,this.trueHeight=0,this.clearCrop(),this.$nextTick(()=>{this.checkedImg()})},rotateLeft(){this.rotate=this.rotate<=-3?0:this.rotate-1},rotateRight(){this.rotate=this.rotate>=3?0:this.rotate+1},rotateClear(){this.rotate=0},checkoutImgAxis(e,t,s){e=e||this.x,t=t||this.y,s=s||this.scale;let i=!0;if(this.centerBox){let r=this.getImgAxis(e,t,s),o=this.getCropAxis();r.x1>=o.x1&&(i=!1),r.x2<=o.x2&&(i=!1),r.y1>=o.y1&&(i=!1),r.y2<=o.y2&&(i=!1)}return i}},mounted(){this.support="onwheel"in document.createElement("div")?"wheel":document.onmousewheel!==void 0?"mousewheel":"DOMMouseScroll";let e=this;var t=navigator.userAgent;this.isIOS=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(s,i,r){for(var o=atob(this.toDataURL(i,r).split(",")[1]),h=o.length,c=new Uint8Array(h),n=0;n<h;n++)c[n]=o.charCodeAt(n);s(new Blob([c],{type:e.type||"image/png"}))}}),this.showPreview(),this.checkedImg()},unmounted(){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.cancelScale()}}),Ee={key:0,class:"cropper-box"},ke=["src"],Be={class:"cropper-view-box"},Le=["src"],Te={key:1};function $e(e,t,s,i,r,o){return O(),M("div",{class:"vue-cropper",ref:"cropper",onMouseover:t[28]||(t[28]=(...h)=>e.scaleImg&&e.scaleImg(...h)),onMouseout:t[29]||(t[29]=(...h)=>e.cancelScale&&e.cancelScale(...h))},[e.imgs?(O(),M("div",Ee,[P(g("div",{class:"cropper-box-canvas",style:A({width:e.trueWidth+"px",height:e.trueHeight+"px",transform:"scale("+e.scale+","+e.scale+") translate3d("+e.x/e.scale+"px,"+e.y/e.scale+"px,0)rotateZ("+e.rotate*90+"deg)"})},[g("img",{src:e.imgs,alt:"cropper-img",ref:"cropperImg"},null,8,ke)],4),[[U,!e.loading]])])):W("",!0),g("div",{class:he(["cropper-drag-box",{"cropper-move":e.move&&!e.crop,"cropper-crop":e.crop,"cropper-modal":e.cropping}]),onMousedown:t[0]||(t[0]=(...h)=>e.startMove&&e.startMove(...h)),onTouchstart:t[1]||(t[1]=(...h)=>e.startMove&&e.startMove(...h))},null,34),P(g("div",{class:"cropper-crop-box",style:A({width:e.cropW+"px",height:e.cropH+"px",transform:"translate3d("+e.cropOffsertX+"px,"+e.cropOffsertY+"px,0)"})},[g("span",Be,[g("img",{style:A({width:e.trueWidth+"px",height:e.trueHeight+"px",transform:"scale("+e.scale+","+e.scale+") translate3d("+(e.x-e.cropOffsertX)/e.scale+"px,"+(e.y-e.cropOffsertY)/e.scale+"px,0)rotateZ("+e.rotate*90+"deg)"}),src:e.imgs,alt:"cropper-img"},null,12,Le)]),g("span",{class:"cropper-face cropper-move",onMousedown:t[2]||(t[2]=(...h)=>e.cropMove&&e.cropMove(...h)),onTouchstart:t[3]||(t[3]=(...h)=>e.cropMove&&e.cropMove(...h))},null,32),e.info?(O(),M("span",{key:0,class:"crop-info",style:A({top:e.cropInfo.top})},L(e.cropInfo.width)+" \xD7 "+L(e.cropInfo.height),5)):W("",!0),e.fixedBox?W("",!0):(O(),M("span",Te,[g("span",{class:"crop-line line-w",onMousedown:t[4]||(t[4]=h=>e.changeCropSize(h,!1,!0,0,1)),onTouchstart:t[5]||(t[5]=h=>e.changeCropSize(h,!1,!0,0,1))},null,32),g("span",{class:"crop-line line-a",onMousedown:t[6]||(t[6]=h=>e.changeCropSize(h,!0,!1,1,0)),onTouchstart:t[7]||(t[7]=h=>e.changeCropSize(h,!0,!1,1,0))},null,32),g("span",{class:"crop-line line-s",onMousedown:t[8]||(t[8]=h=>e.changeCropSize(h,!1,!0,0,2)),onTouchstart:t[9]||(t[9]=h=>e.changeCropSize(h,!1,!0,0,2))},null,32),g("span",{class:"crop-line line-d",onMousedown:t[10]||(t[10]=h=>e.changeCropSize(h,!0,!1,2,0)),onTouchstart:t[11]||(t[11]=h=>e.changeCropSize(h,!0,!1,2,0))},null,32),g("span",{class:"crop-point point1",onMousedown:t[12]||(t[12]=h=>e.changeCropSize(h,!0,!0,1,1)),onTouchstart:t[13]||(t[13]=h=>e.changeCropSize(h,!0,!0,1,1))},null,32),g("span",{class:"crop-point point2",onMousedown:t[14]||(t[14]=h=>e.changeCropSize(h,!1,!0,0,1)),onTouchstart:t[15]||(t[15]=h=>e.changeCropSize(h,!1,!0,0,1))},null,32),g("span",{class:"crop-point point3",onMousedown:t[16]||(t[16]=h=>e.changeCropSize(h,!0,!0,2,1)),onTouchstart:t[17]||(t[17]=h=>e.changeCropSize(h,!0,!0,2,1))},null,32),g("span",{class:"crop-point point4",onMousedown:t[18]||(t[18]=h=>e.changeCropSize(h,!0,!1,1,0)),onTouchstart:t[19]||(t[19]=h=>e.changeCropSize(h,!0,!1,1,0))},null,32),g("span",{class:"crop-point point5",onMousedown:t[20]||(t[20]=h=>e.changeCropSize(h,!0,!1,2,0)),onTouchstart:t[21]||(t[21]=h=>e.changeCropSize(h,!0,!1,2,0))},null,32),g("span",{class:"crop-point point6",onMousedown:t[22]||(t[22]=h=>e.changeCropSize(h,!0,!0,1,2)),onTouchstart:t[23]||(t[23]=h=>e.changeCropSize(h,!0,!0,1,2))},null,32),g("span",{class:"crop-point point7",onMousedown:t[24]||(t[24]=h=>e.changeCropSize(h,!1,!0,0,2)),onTouchstart:t[25]||(t[25]=h=>e.changeCropSize(h,!1,!0,0,2))},null,32),g("span",{class:"crop-point point8",onMousedown:t[26]||(t[26]=h=>e.changeCropSize(h,!0,!0,2,2)),onTouchstart:t[27]||(t[27]=h=>e.changeCropSize(h,!0,!0,2,2))},null,32)]))],4),[[U,e.cropping]])],544)}const te=Se(Ie,[["render",$e],["__scopeId","data-v-69939069"]]),Ae=e=>(Q("data-v-41a2a00c"),e=e(),J(),e),Ne={key:0,class:"cropper-body"},ze={class:"upload-box"},Fe=Ae(()=>g("div",{class:"fz12 pt100 text-grey"},"\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u6B64\u5904\u4E0A\u4F20 \u6216\u8005\uFF0C\u60A8\u53EF\u4EE5\u5355\u51FB\u4E0B\u65B9\u94FE\u63A5\u9009\u62E9\u4E00\u4E2A\u672C\u5730\u6587\u4EF6",-1)),Re={class:"mt10 text-default"},Pe={class:"mt10 fz12 text-grey"},Ue={key:1,class:"cropper-mian"},De={class:"cropper-box"},Ve={class:"cropper-cover-box"},je=["innerHTML"],qe={class:"flex between"},Ze=N({name:"img-cropper",components:{VueCropper:te}}),Ge=N({...Ze,props:{title:{default:"\u56FE\u7247\u622A\u526A"},img:{default:"http://dev-admin.dev-frank.cn/uploads/storage/media/657d60140b17f.png"},accept:{default:".jpg,.jpeg,.png"},outputSize:{default:1},outputType:{default:"jpeg"},info:{type:Boolean,default:!0},canScale:{type:Boolean,default:!1},autoCrop:{type:Boolean,default:!0},autoCropWidth:{default:150},autoCropHeight:{default:150},fixedBox:{type:Boolean,default:!1},fixed:{type:Boolean,default:!0},fixedNumber:{default:[1,1]},canMove:{type:Boolean,default:!0},canMoveBox:{type:Boolean,default:!0},original:{type:Boolean,default:!1},centerBox:{type:Boolean,default:!0},infoTrue:{type:Boolean,default:!1},full:{type:Boolean,default:!0},enlarge:{default:"1"},mode:{default:"contain"},autoClose:{type:Boolean,default:!0}},emits:["change"],setup(e,{expose:t,emit:s}){const i=e,r=s,{proxy:o,proxy:{$utils:h}}=G(),c=Y(),n=Y(null),l=Y(""),a=u=>{n.value=u[0],l.value=n.value.url},p=Y(null);Y(null);const d=u=>{console.log(u),p.value=u},y=u=>{var b;console.log(o==null?void 0:o.$refs.cropperRef),(b=o==null?void 0:o.$refs.cropperRef)==null||b.changeScale(u||1)},m=()=>{var u;(u=o==null?void 0:o.$refs.cropperRef)==null||u.rotateLeft()},f=()=>{var u;(u=o==null?void 0:o.$refs.cropperRef)==null||u.rotateRight()},w=(u,b)=>{const X=u.split(","),T=X[0].match(/:(.*?);/)[1],H=atob(X[1]);let I=H.length;const $=new Uint8Array(I);for(;I--;)$[I]=H.charCodeAt(I);return new File([$],b,{type:T})},v=()=>{var u;(u=o==null?void 0:o.$refs.cropperRef)==null||u.getCropData(async b=>{const X=w(b,"images."+i.outputType);console.log(X),r("change",X),i.autoClose&&S()})},_=Y(!1),z=()=>{var u;_.value=!0,(u=o==null?void 0:o.$refs.cropperRef)==null||u.reset()},S=()=>(n.value=null,_.value=!1,!0);return t({open:z,close:S}),(u,b)=>{const X=ae,T=ce,H=q,I=ne,$=le,ie=pe,oe=ue,R=Z,re=de;return O(),M("div",null,[C(re,{title:u.title,width:"808px",top:B(fe)().ModalTop,class:"modal",visible:_.value,"onUpdate:visible":b[2]||(b[2]=E=>_.value=E),"align-center":!1,"title-align":"start",onBeforeCancel:S},{footer:x(()=>[g("div",qe,[C(R,null,{default:x(()=>[_.value&&n.value?(O(),M(ge,{key:0},[C(T,{onChange:a,"show-file-list":!1,"auto-upload":!1,accept:u.accept},{"upload-button":x(()=>[C(H,null,{default:x(()=>[k("\u91CD\u65B0\u4E0A\u4F20")]),_:1})]),_:1},8,["accept"]),C(H,{onClick:b[0]||(b[0]=E=>y(1))},{default:x(()=>[C(I)]),_:1}),C(H,{onClick:b[1]||(b[1]=E=>y(-1))},{default:x(()=>[C($)]),_:1}),C(H,{onClick:m},{default:x(()=>[C(ie)]),_:1}),C(H,{onClick:f},{default:x(()=>[C(oe)]),_:1})],64)):W("",!0)]),_:1}),C(R,null,{default:x(()=>[_.value&&n.value?(O(),D(H,{key:0,type:"primary",onClick:v},{default:x(()=>[k("\u751F\u6210")]),_:1})):W("",!0),C(H,{onClick:S},{default:x(()=>[k("\u5173\u95ED")]),_:1})]),_:1})])]),default:x(()=>{var E;return[_.value?(O(),M("div",Ne,[n.value?W("",!0):(O(),D(T,{key:0,onChange:a,"auto-upload":!1,draggable:"","show-file-list":!1,accept:u.accept},{"upload-button":x(()=>[g("div",ze,[Fe,g("div",Re,[C(X),k("\u70B9\u51FB\u9009\u62E9 ")]),g("div",Pe,"\u652F\u6301\u6587\u4EF6\u540E\u7F00\uFF1A"+L(u.accept),1)])]),_:1},8,["accept"])),n.value?(O(),M("div",Ue,[g("div",De,[C(B(te),{ref_key:"cropperRef",ref:c,img:l.value,outputSize:u.outputSize,outputType:u.outputType,info:u.info,canScale:u.canScale,autoCrop:u.autoCrop,autoCropWidth:u.autoCropWidth,autoCropHeight:u.autoCropHeight,fixedBox:u.fixedBox,fixed:u.fixed,fixedNumber:u.fixedNumber,canMove:u.canMove,canMoveBox:u.canMoveBox,original:u.original,centerBox:u.centerBox,infoTrue:u.infoTrue,full:u.full,enlarge:u.enlarge,mode:u.mode,style:{width:"100%",height:"100%"},onRealTime:d},null,8,["img","outputSize","outputType","info","canScale","autoCrop","autoCropWidth","autoCropHeight","fixedBox","fixed","fixedNumber","canMove","canMoveBox","original","centerBox","infoTrue","full","enlarge","mode"])]),g("div",Ve,[(E=p.value)!=null&&E.html?(O(),M("div",{key:0,class:"cropper-cover",innerHTML:p.value.html},null,8,je)):W("",!0)])])):W("",!0)])):W("",!0)]}),_:1},8,["title","top","visible"])])}}});const Qe=K(Ge,[["__scopeId","data-v-41a2a00c"]]),se=e=>(Q("data-v-0ba367bd"),e=e(),J(),e),Je={class:"detail-main"},Ke={class:"avatar-main"},et=["src"],tt={key:0,class:"avatar-progress"},st={class:"detail-right"},it={class:"detail-item"},ot=se(()=>g("div",{class:"title"},"\u8D26\u53F7\uFF1A",-1)),rt={class:"desc"},ht={class:"detail-item"},at=se(()=>g("div",{class:"title"},"\u59D3\u540D\uFF1A",-1)),ct={class:"desc"},nt=N({__name:"detail",setup(e){const{adminInfo:t}=me(F()),{proxy:s,proxy:{$utils:i}}=G(),r=Y(),o=()=>{var y;(y=s==null?void 0:s.$refs.cropperRef)==null||y.open()},h=Y(!1),c=Y({percent:0}),n=y=>{var v;(v=s==null?void 0:s.$refs.cropperRef)==null||v.close(),h.value=!0;let m=new FormData;m.append("file",y);const{progress:f,request:w}=_e(m);c.value=f,w.then(_=>{c.value={parent:100},F().initInfo(),setTimeout(()=>{i.successMsg(_.message),h.value=!1},500)}).catch(_=>{i.successMsg(_.message),c.value={parent:0},h.value=!1})},l=Y(),a=()=>{var y;(y=s==null?void 0:s.$refs.adminPassModalRef)==null||y.open()},p=()=>{V.loading({id:"outlogin",content:"\u6B63\u5728\u9000\u51FA..."}),Oe().then(async y=>{F().resetToken(),i.setStorage("token",null),setTimeout(()=>{V.success({id:"outlogin",content:"\u9000\u51FA\u6210\u529F!",duration:1e3,onClose:()=>{d()}})},500)})},d=()=>{j.replace({path:"/login",query:{redirect:j.currentRoute.value.fullPath}})};return(y,m)=>{const f=q,w=ve,v=Z,_=we,z=Ce,S=xe,u=Qe,b=ye;return O(),M("div",null,[C(b,{title:"\u4E2A\u4EBA\u4E2D\u5FC3"},{extra:x(()=>[C(v,null,{default:x(()=>[C(w,{content:"\u786E\u5B9A\u8981\u9000\u51FA\u767B\u5F55\u5417?",onOk:p},{default:x(()=>[C(f,{size:"mini",type:"text",status:"danger"},{default:x(()=>[k("\u9000\u51FA")]),_:1})]),_:1}),C(be,{ref_key:"adminPassModalRef",ref:l},null,512),C(f,{size:"mini",type:"text",onClick:a},{default:x(()=>[k("\u4FEE\u6539\u5BC6\u7801")]),_:1})]),_:1})]),default:x(()=>[g("div",Je,[g("div",Ke,[C(z,{onClick:o,shape:"square",size:80},{"trigger-icon":x(()=>[C(_)]),default:x(()=>{var X;return[g("img",{src:(X=B(t))==null?void 0:X.avatar},null,8,et)]}),_:1}),h.value?(O(),M("div",tt,[C(S,{size:"mini",percent:c.value.percent/100},null,8,["percent"])])):W("",!0),C(u,{ref_key:"cropperRef",ref:r,onChange:n,autoClose:!1,outputType:"png"},null,512)]),g("div",st,[g("div",it,[ot,g("div",rt,L(B(t).account),1)]),g("div",ht,[at,g("div",ct,L(B(t).real_name),1)])])])]),_:1})])}}});const ut=K(nt,[["__scopeId","data-v-0ba367bd"]]);export{ut as default};
