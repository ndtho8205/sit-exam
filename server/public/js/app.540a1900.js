(function(t){function e(e){for(var a,o,s=e[0],u=e[1],l=e[2],d=0,p=[];d<s.length;d++)o=s[d],r[o]&&p.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1c1e":function(t,e,n){var a=n("bc3a"),r=a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_SERVER_URL||"http://localhost:3000/api/",timeout:1e3,headers:{"Content-Type":"application/json"}}),i=function(t,e){r.post("/info",{studentInfo:t}).then(function(t){return e(t,null)}).catch(function(t){e(null,t)})},o=function(t,e,n){r.get("/exam/".concat(t,"-").concat(e)).then(function(t){return n(t,null)}).catch(function(t){n(null,t)})},s=function(t,e,n,a){r.post("/exam/".concat(t,"-").concat(e),{studentId:n.studentId,answers:n.answers}).then(function(t){return a(t,null)}).catch(function(t){a(null,t)})},u=function(t,e){r.get("/study/".concat(t)).then(function(t){return e(t,null)}).catch(function(t){e(null,t)})};t.exports={fetch:r,postStudentInfo:i,getExam:o,postAnswer:s,getStudyList:u}},"22fb":function(t,e,n){t.exports=n.p+"img/bg_default.5ca1cfca.png"},"3e59":function(t,e,n){"use strict";var a=n("6849"),r=n.n(a);r.a},4385:function(t,e,n){t.exports=n.p+"img/bg_thankyou.8bda3288.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("bb71");n("da64");a["a"].use(r["a"],{iconfont:"md"});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",{staticClass:"white background prevent-copy",style:{backgroundImage:"url("+t.background[t.mode]+")"}},[t.isError?n("v-alert",{staticClass:"absolute",attrs:{prominent:"",border:"left",transition:"scale-transition",type:"error"},model:{value:t.isError,callback:function(e){t.isError=e},expression:"isError"}},[n("div",[t._v("Oops! "+t._s(t.errorMsg))])]):t._e(),n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":""}},[n("v-slide-x-transition",{attrs:{mode:"out-in"}},[n(t.step,{tag:"component",on:{agree:t.agree,submitStudentInfo:t.submitStudentInfo,endExam:t.endExam}})],1)],1)],1)],1)],1)},o=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),u=n("2f62"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{xs12:"",md10:"",lg6:"","offset-xs0":"","offset-md0":"","offset-lg1":""}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"display-1 text--primary"},[t._v("Agreement")])]),t._l(t.messages,function(e,a){return n("v-card-text",{key:a},[t._v(t._s(e))])}),n("v-card-actions",[n("v-btn",{on:{click:function(e){return t.$emit("agree",!1)}}},[t._v("Not Agree")]),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.$emit("agree",!0)}}},[t._v("Agree")])],1)],2)],1)},c=[],d={name:"Agreement",components:{},data:function(){return{messages:["Your name and nationality will be published for the purpose of this research. Other personal data will not be made public.\n\nDo you agree?","동의서\n당신의 이름과 국적은 연구의 목적을 위해 사용될 것입니다. 다른 개인 정보는 공개되지 않을 것입니다.\n\n이에 동의하십니까?","同意書\nあなたのお名前と国籍は研究の目的のため使用されます。他の個人情報は公開されません\n\nこれに同意されますか？"]}}},p=d,f=n("2877"),m=n("6544"),h=n.n(m),v=n("8336"),g=n("b0af"),b=n("99d9"),y=n("12b2"),x=n("0e8f"),w=Object(f["a"])(p,l,c,!1,null,null,null),S=w.exports;h()(w,{VBtn:v["a"],VCard:g["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:y["a"],VFlex:x["a"]});var _=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{xs12:"",md10:"",lg6:"","offset-xs0":"","offset-md0":"","offset-lg1":""}},[n("v-card",[n("v-progress-linear",{staticClass:"ma-0",attrs:{active:t.loading,indeterminate:t.loading,absolute:"",rounded:"",height:"3",top:"",color:"deep-purple accent-4"}}),n("v-card-title",[n("span",{staticClass:"display-1 text--primary"},[t._v("Information")])]),n("v-card-text",[n("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{rules:t.nameRules,label:"Name (in English)",required:""},model:{value:t.info.name,callback:function(e){t.$set(t.info,"name",e)},expression:"info.name"}}),n("v-radio-group",{attrs:{mandatory:"",rules:[function(t){return!!t||"Gender is required"}]},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",[t._v("Gender")])]},proxy:!0}]),model:{value:t.info.gender,callback:function(e){t.$set(t.info,"gender",e)},expression:"info.gender"}},[n("v-radio",{key:"male",attrs:{label:"Male",value:"male"}}),n("v-radio",{key:"female",attrs:{label:"Female",value:"female"}}),n("v-radio",{key:"other",attrs:{label:"Other",value:"other"}})],1),n("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.info.email,callback:function(e){t.$set(t.info,"email",e)},expression:"info.email"}}),n("v-autocomplete",{attrs:{items:t.countryList,rules:[function(t){return!!t||"Country is required"}],label:"Country",required:""},model:{value:t.info.country,callback:function(e){t.$set(t.info,"country",e)},expression:"info.country"}}),n("v-divider"),n("v-radio-group",{attrs:{mandatory:"",rules:[function(t){return!!t||"Language is required"}]},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",[t._v("Choose your language")])]},proxy:!0}]),model:{value:t.lang,callback:function(e){t.lang=e},expression:"lang"}},[n("v-radio",{key:"en",attrs:{label:"English",value:"en"}}),n("v-radio",{key:"kr",attrs:{label:"Korean",value:"kr"}}),n("v-radio",{key:"jp",attrs:{label:"Japanese",value:"jp"}})],1)],1)],1),n("v-card-actions",[n("v-btn",{attrs:{color:"primary"},on:{click:t.handleSubmit}},[t._v("Continue")])],1)],1)],1)},k=[],C=n("b86f"),E=n.n(C),O=n("1c1e"),V=n.n(O);function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var j={name:"StudentInfo",components:{},data:function(){return{loading:!1,valid:!1,nameRules:[function(t){return!!t||"Name is required"},function(t){return/^[a-zA-Z ,.'-]+$/.test(t)||"Name must be valid"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],countryList:E.a,lang:"en",info:{name:"",gender:"",country:"",email:""}}},methods:{handleSubmit:function(){var t=this;if(this.$store.commit("clearError"),this.$refs.form.validate()){var e=P({},this.info);this.handleLoading(!0),V.a.postStudentInfo(e,function(e,n){if(e&&!n)if(e.data&&e.data.studentId){var a=e.data.studentId;t.$store.commit("updateStudent",{id:a,lang:t.lang}),t.$emit("submitStudentInfo")}else t.$store.commit("setError","Cannot get required information from server. Please try again or contact your administrator.");else t.$store.commit("setError","".concat(n.message,". Please try again or contact your administrator."))})}},handleLoading:function(t){var e=this;this.loading=t,this.loading&&setTimeout(function(){e.loading=!1},2e3)}}},T=j,A=n("c6a6"),M=n("ce7e"),$=n("4bd4"),L=n("8e36"),q=n("67b6"),B=n("43a6"),R=n("2677"),D=Object(f["a"])(T,_,k,!1,null,null,null),N=D.exports;h()(D,{VAutocomplete:A["a"],VBtn:v["a"],VCard:g["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:y["a"],VDivider:M["a"],VFlex:x["a"],VForm:$["a"],VProgressLinear:L["a"],VRadio:q["a"],VRadioGroup:B["a"],VTextField:R["a"]});var G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{xs12:"",md10:"",lg6:"","offset-xs0":"","offset-md0":"","offset-lg1":""}},[n("v-stepper",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[n("v-stepper-header",[n("v-stepper-step",{attrs:{complete:t.step>1,step:"1",color:"primary darken-2"}},[t._v("Test 1")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:t.step>2,step:"2",color:"primary darken-2"}},[t._v("Test 2")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:t.step>3,step:"3",color:"primary darken-2"}},[t._v("Study")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:t.step>4,step:"4",color:"primary darken-2"}},[t._v("Test 3")])],1),n("v-progress-linear",{staticClass:"ma-0",attrs:{active:t.loading,indeterminate:t.loading,absolute:"",rounded:"",height:"3",top:"",color:"deep-purple accent-4"}}),n("v-stepper-items",[n("v-stepper-content",{attrs:{step:"1"}},[n("ExamQuestion",{attrs:{examId:1},on:{endExamQuestion:function(e){t.step=2},onLoading:t.handleLoading}})],1),n("v-stepper-content",{attrs:{step:"2"}},[n("ExamQuestion",{attrs:{examId:2},on:{endExamQuestion:function(e){t.step=3},onLoading:t.handleLoading}})],1),n("v-stepper-content",{attrs:{step:"3"}},[n("ExamStudy",{on:{endExamStudy:function(e){t.step=4}}})],1),n("v-stepper-content",{attrs:{step:"4"}},[n("ExamQuestion",{attrs:{examId:3},on:{endExamQuestion:t.endExam,onLoading:t.handleLoading}})],1)],1)],1)],1)},F=[],z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-start":"","justify-space-between":"",column:""}},[n("v-flex",{attrs:{"align-self-end":""}},[t.step!=this.questions.length+2?n("VueCountdown",{ref:"countdown",attrs:{time:33e4,"auto-start":!1,width:"100%",transform:t.transform},on:{end:t.end},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"title"},[t._v("\n          Time Remaining:\n          "),n("span",{staticClass:"font-weight-black pink--text text--darken-3 headline"},[t._v("\n            "+t._s(e.minutes)+" : "+t._s(e.seconds)+"\n          ")])])]}}],null,!1,1205962048)}):t._e()],1),n("v-card",{attrs:{flat:"",tile:""}},[n("v-card-title",{staticClass:"title font-weight-regular justify-space-between"},[n("span",[t._v(t._s(t.currentTitle))])]),n("v-window",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[n("v-window-item",{attrs:{value:0}},t._l(t.descriptions,function(e,a){return n("v-card-text",{key:a},[t._v(t._s(e))])}),1),t._l(t.questions,function(e,a){return n("v-window-item",{key:a,attrs:{value:a+1}},[n("v-card-text",[t._v(t._s(e.question))]),n("v-card-text",[n("v-radio-group",{staticClass:"ma-0",model:{value:t.answers[a+1],callback:function(e){t.$set(t.answers,a+1,e)},expression:"answers[questionId + 1]"}},t._l(e.options,function(t,e){return n("v-radio",{key:e,attrs:{label:t,value:String.fromCharCode(e+65)}})}),1)],1)],1)}),n("v-window-item",{attrs:{value:t.questions.length+1}},[n("v-card-text",[t._v("Are you sure you want to submit this answer?")])],1),n("v-window-item",{attrs:{value:t.questions.length+2}},[n("v-card-text",[n("span",{staticClass:"display-4 font-weight-black green--text text--lighten-1"},[t._v(t._s(t.score))]),n("span",{staticClass:"display-1 font-weight-medium green--text text--lighten-3"},[t._v("/100")])])],1)],2),n("v-card-actions",[0!=t.step&&t.step!=this.questions.length+2?n("v-btn",{attrs:{disabled:1==t.step||t.timeup},on:{click:t.handlePrev}},[t._v(t._s(t.step==t.questions.length+1?"Cancel":"Back"))]):t._e(),n("v-btn",{attrs:{color:"primary",disabled:t.nextButtonDisabled},on:{click:t.handleNext}},[t._v(t._s(t.nextButtonLabel))])],1)],1)],1)},U=[],K=n("768b"),Q=(n("ffc1"),n("c5f6"),n("407d")),H=n.n(Q);function J(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function Y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?J(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var W={name:"ExamQuestion",components:{VueCountdown:H.a},props:{examId:{type:Number,required:!0}},data:function(){return{step:0,timeup:!1,score:0,descriptions:[],questions:[],answers:{}}},created:function(){var t=this;this.$emit("onLoading",!0),V.a.getExam(this.examId,this.$store.state.studentInfo.lang,function(e,n){e&&!n?e.data&&e.data.descriptions&&e.data.questions?(t.descriptions=e.data.descriptions,t.questions=e.data.questions):t.$store.commit("setError","Cannot get required information from server. Please try again or contact your administrator."):t.$store.commit("setError","".concat(n.message,". Please try again or contact your administrator."))})},computed:{currentTitle:function(){switch(this.step){case 0:return"Explanation";case this.questions.length+1:return"Submit";case this.questions.length+2:return"Score";default:return"Question ".concat(this.step,"/").concat(this.questions.length)}},nextButtonLabel:function(){switch(this.step){case 0:return"Start";case this.questions.length+1:return"Submit";case this.questions.length+2:return"Continue";default:return"Next"}},nextButtonDisabled:function(){return 0===this.questions.length||this.step>0&&this.step<=this.questions.length&&!this.hasAnswer(this.step)}},methods:{start:function(){this.step=1,this.$refs.countdown.start()},end:function(){this.timeup=!0,this.step=this.questions.length+1,this.submitAnswer()},handlePrev:function(){this.step>1&&(this.step-=1)},handleNext:function(){switch(this.step){case 0:return this.start();case this.questions.length+1:return this.submitAnswer();case this.questions.length+2:return this.continue();default:return this.hasAnswer(this.step)&&this.step<=this.questions.length&&(this.step+=1),0}},submitAnswer:function(){var t=this;this.$emit("onLoading",!0),this.$store.commit("clearError");var e={studentId:this.$store.state.studentInfo.id,answers:Y({},this.answers)},n=function(e,n){e&&!n?e.data?(t.$refs.countdown.abort(),t.score=e.data.score,t.step+=1):t.$store.commit("setError","Cannot get required information from server. Please try again or contact your administrator."):t.$store.commit("setError","".concat(n.message,". Please try again or contact your administrator."))};V.a.postAnswer(this.examId,this.$store.state.studentInfo.lang,e,n)},continue:function(){this.$emit("endExamQuestion")},transform:function(t){return Object.entries(t).forEach(function(e){var n=Object(K["a"])(e,2),a=n[0],r=n[1],i=r<10?"0".concat(r):r;t[a]="".concat(i)}),t},hasAnswer:function(t){return hasOwnProperty.call(this.answers,t)}}},Z=W,X=n("a722"),tt=n("f665"),et=n("1e6c"),nt=Object(f["a"])(Z,z,U,!1,null,null,null),at=nt.exports;h()(nt,{VBtn:v["a"],VCard:g["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:y["a"],VFlex:x["a"],VLayout:X["a"],VRadio:q["a"],VRadioGroup:B["a"],VWindow:tt["a"],VWindowItem:et["a"]});var rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-start":"","justify-space-between":"",column:""}},[n("v-flex",{attrs:{"align-self-end":""}},[2!=t.step?n("VueCountdown",{ref:"countdown",attrs:{time:33e4,"auto-start":!1,width:"100%",transform:t.transform},on:{end:t.end},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"title"},[t._v("\n          Time Remaining:\n          "),n("span",{staticClass:"font-weight-black pink--text text--darken-3 headline"},[t._v("\n            "+t._s(e.minutes)+" : "+t._s(e.seconds)+"\n          ")])])]}}],null,!1,1205962048)}):t._e()],1),n("v-card",{attrs:{flat:"",tile:""}},[n("v-card-title",{staticClass:"title font-weight-regular justify-space-between"},[n("span",[t._v(t._s(t.currentTitle))])]),n("v-window",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[n("v-window-item",{attrs:{value:0}},t._l(t.descriptions,function(e,a){return n("v-card-text",{key:a},[t._v(t._s(e))])}),1),n("v-window-item",{attrs:{value:1}},[n("div",{staticStyle:{"max-height":"600px","overflow-y":"scroll"}},t._l(t.items,function(e,a){return n("v-card-text",{key:a},[n("span",{staticClass:"headline font-weight-bold"},[t._v(t._s(a+1)+". ")]),n("span",[t._v(t._s(e))])])}),1)]),n("v-window-item",{attrs:{step:2}},[n("v-card-text",[t._v("Let's move to the last test!")])],1)],1),n("v-card-actions",[n("v-btn",{attrs:{color:"primary"},on:{click:t.handleNext}},[t._v(t._s(t.nextButtonLabel))])],1)],1)],1)},it=[],ot={name:"ExamStudy",components:{VueCountdown:H.a},data:function(){return{step:0,timeup:!1,descriptions:[],items:[]}},created:function(){var t=this;V.a.getStudyList(this.$store.state.studentInfo.lang,function(e,n){e&&!n?e.data&&e.data.descriptions&&e.data.items?(t.descriptions=e.data.descriptions,t.items=e.data.items):t.$store.commit("setError","Cannot get required information from server. Please try again or contact your administrator."):t.$store.commit("setError","".concat(n.message,". Please try again or contact your administrator."))})},computed:{currentTitle:function(){switch(this.step){case 0:return"Explanation";case 2:return"Finish";default:return"Study time"}},nextButtonLabel:function(){switch(this.step){case 0:return"Start";case 2:return"Continue";default:return"Done"}}},methods:{start:function(){this.step=1,this.$refs.countdown.start()},end:function(){this.timeup=!0,this.step+=1},handleNext:function(){switch(this.step){case 0:return this.start();case 2:return this.continue();default:return this.step+=1,this.$refs.countdown.abort(),0}},continue:function(){this.$emit("endExamStudy")},transform:function(t){return Object.entries(t).forEach(function(e){var n=Object(K["a"])(e,2),a=n[0],r=n[1],i=r<10?"0".concat(r):r;t[a]="".concat(i)}),t}}},st=ot,ut=Object(f["a"])(st,rt,it,!1,null,null,null),lt=ut.exports;h()(ut,{VBtn:v["a"],VCard:g["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:y["a"],VFlex:x["a"],VLayout:X["a"],VWindow:tt["a"],VWindowItem:et["a"]});var ct={name:"Exam",components:{ExamQuestion:at,ExamStudy:lt},data:function(){return{loading:!0,step:0,exams:{}}},methods:{hasExamAnswer:function(t){return hasOwnProperty.call(this.exams,t)},endExam:function(){this.$emit("endExam")},handleLoading:function(t){var e=this;this.loading=t,this.loading&&setTimeout(function(){e.loading=!1},2e3)}}},dt=ct,pt=n("7e85"),ft=n("e516"),mt=n("9c54"),ht=n("56a4"),vt=Object(f["a"])(dt,G,F,!1,null,null,null),gt=vt.exports;h()(vt,{VDivider:M["a"],VFlex:x["a"],VProgressLinear:L["a"],VStepper:pt["a"],VStepperContent:ft["a"],VStepperHeader:mt["a"],VStepperItems:mt["b"],VStepperStep:ht["a"]});var bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{xs12:"",md10:"",lg4:"","offset-xs0":"","offset-md0":"","offset-lg1":""}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"display-1 text--primary"},[t._v("Thank you!")])]),t._l(t.messages,function(e,a){return n("v-card-text",{key:a},[t._v(t._s(e))])})],2)],1)},yt=[],xt={name:"ThankYou",components:{},created:function(){this.$store.commit("changeBackground","thankyou")},data:function(){return{messages:["Thank you for your time & cooperation.","시간을 내주고 협조해 주셔서 감사합니다.","ご協力ありがとうございました"]}}},wt=xt,St=Object(f["a"])(wt,bt,yt,!1,null,null,null),_t=St.exports;function kt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function Ct(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?kt(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):kt(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}h()(St,{VCard:g["a"],VCardText:b["b"],VCardTitle:y["a"],VFlex:x["a"]});var Et={name:"App",components:{Agreement:S,StudentInfo:N,Exam:gt,ThankYou:_t},data:function(){return{step:"Agreement",background:{default:n("22fb"),thankyou:n("4385")}}},computed:Ct({},Object(u["b"])({isError:function(t){return t.log.isError},errorMsg:function(t){return t.log.errorMsg},mode:function(t){return t.mode}})),methods:{agree:function(t){this.step=t?"StudentInfo":"ThankYou"},submitStudentInfo:function(){this.step="Exam"},endExam:function(){this.step="ThankYou"}}},Ot=Et,Vt=(n("3e59"),n("0798")),It=n("7496"),Pt=n("a523"),jt=n("549c"),Tt=n("0789"),At=Object(f["a"])(Ot,i,o,!1,null,"63521854",null),Mt=At.exports;h()(At,{VAlert:Vt["a"],VApp:It["a"],VContainer:Pt["a"],VContent:jt["a"],VLayout:X["a"],VSlideXTransition:Tt["c"]}),a["a"].use(u["a"]);var $t=new u["a"].Store({state:{mode:"default",studentInfo:{id:"",lang:"en"},log:{isError:!1,errorMsg:""}},mutations:{updateStudent:function(t,e){t.studentInfo.id=e.id,t.studentInfo.lang=e.lang},setError:function(t,e){t.log.isError=!0,t.log.errorMsg=e},clearError:function(t){t.log.isError=!1,t.log.errorMsg=""},changeBackground:function(t,e){t.mode=e}},actions:{}});a["a"].config.productionTip=!1,new a["a"]({store:$t,render:function(t){return t(Mt)}}).$mount("#app")},6849:function(t,e,n){},b86f:function(t,e){var n=["Afghanistan","Åland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia, Plurinational State of","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, the Democratic Republic of the","Cook Islands","Costa Rica","Côte d'Ivoire","Croatia","Cuba","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran, Islamic Republic of","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Democratic People's Republic of","Korea, Republic of","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia, the former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territory, Occupied","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Réunion","Romania","Russian Federation","Rwanda","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela, Bolivarian Republic of","Viet Nam","Virgin Islands, British","Virgin Islands, U.S.","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"];t.exports=n}});
//# sourceMappingURL=app.540a1900.js.map