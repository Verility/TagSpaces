"use strict";(self.webpackChunktagspaces=self.webpackChunktagspaces||[]).push([[9742],{49742:(e,t,n)=>{n.r(t),n.d(t,{amplify_s3_image_picker:()=>p});var r=n(92508),i=n(69719),o=n(23139),a=n(9277),c=n(38063),l=(n(17993),n(32095)),s=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},h=new i.k("S3ImagePicker"),p=function(){function e(e){var t=this;(0,r.r)(this,e),this.contentType="binary/octet-stream",this.level=a.A.Public,this.headerTitle=c.T.IMAGE_PICKER_TITLE,this.headerHint=c.T.IMAGE_PICKER_HINT,this.placeholderHint=c.T.IMAGE_PICKER_PLACEHOLDER_HINT,this.buttonText=c.T.IMAGE_PICKER_BUTTON_TEXT,this.handlePick=function(e){return s(t,void 0,void 0,(function(){var t,n,r,i,o,a,c,s,p,f;return u(this,(function(u){switch(u.label){case 0:n=(t=this).path,r=void 0===n?"":n,i=t.level,o=t.track,a=t.identityId,c=t.fileToKey,s=r+(0,l.c)(e,c),u.label=1;case 1:return u.trys.push([1,4,,5]),[4,(0,l.p)(s,e,i,o,e.type,h)];case 2:return u.sent(),p=this,[4,(0,l.g)(s,i,o,a,h)];case 3:return p.src=u.sent(),[3,5];case 4:throw f=u.sent(),h.error(f),new Error(f);case 5:return[2]}}))}))}}return e.prototype.render=function(){return(0,r.h)(r.H,null,(0,r.h)("slot",{name:"photo-picker"},(0,r.h)("amplify-photo-picker",{previewSrc:this.src,handleClick:this.handlePick,headerTitle:o.o.get(this.headerTitle),headerHint:o.o.get(this.headerHint),placeholderHint:o.o.get(this.placeholderHint),buttonText:o.o.get(this.buttonText)})))},e}()}}]);
//# sourceMappingURL=9742.bundle.js.map