---
layout: default
title: contact
listed: yes
---
<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.14/angular.js"></script>
<script type="text/javascript">
/*
 * coolforms v0.2.1
 * Copyright (c) 2013 Frederic Delbos | https://raw.github.com/fdelbos/coolforms/master/LICENSE.txt
 */
(function(){var __hasProp={}.hasOwnProperty,__extends=function(child,parent){function ctor(){this.constructor=child}for(var key in parent)__hasProp.call(parent,key)&&(child[key]=parent[key]);return ctor.prototype=parent.prototype,child.prototype=new ctor,child.__super__=parent.prototype,child};angular.module("CoolFormValidators",[]),angular.module("CoolFormServices",["CoolFormValidators"]),angular.module("CoolFormDirectives",["CoolFormServices","ngSanitize"]),angular.module("CoolForm",["CoolFormDirectives","CoolFormServices"]),angular.module("CoolFormDirectives").directive("coolformBoolean",function($templateCache){var l;return l=function(scope){return scope.value=scope.field.value,scope.field.onChange.push(function(v){return v!==scope.value?scope.value=v:void 0}),scope.$watch("value",function(v){return scope.field.set(v)}),null===scope.value?scope.value=!1:void 0},{restrict:"E",scope:{field:"="},template:$templateCache.get("coolForm.boolean"),link:l}}),angular.module("CoolFormDirectives").directive("coolformContainer",function($templateCache){var l;return l=function(scope){return scope.$watch("form",function(v){return v.pages?v.pages.length>1?scope.wizard=!0:scope.page=scope.form.pages[0]:void 0})},{restrict:"E",scope:{form:"="},template:$templateCache.get("coolForm.container"),link:l}}),angular.module("CoolForm").directive("coolform",function($templateCache,networkService,coreService){var l;return l=function(scope){var display_error,load,setCB;return scope.loadingError=!1,display_error=function(){return scope.loadingError=!0,scope.$apply()},setCB=function(f){return null!=scope.before&&(f.userCB.before=scope.before),null!=scope.success&&(f.userCB.success=scope.success),null!=scope.error&&(f.userCB.error=scope.error),null!=scope.failure&&(f.userCB.failure=scope.failure),null!=scope.send?scope.send=function(success,error){return f.submit(success,error)}:void 0},load=function(){return networkService().getJSON(scope.url,display_error).then(function(definition){return scope.form=coreService(definition),setCB(scope.form),scope.loadingError=!1})},scope.reload=load,null!=scope.url?load():null!=scope.definition?(scope.form=coreService(scope.definition),setCB(scope.form)):void 0},{restrict:"E",scope:{url:"@?",definition:"=?",before:"=?",success:"=?",error:"=?",failure:"=?",send:"=?"},template:$templateCache.get("coolForm.controller"),link:l,replace:!0}}),angular.module("CoolFormDirectives").directive("coolformDynamic",function($compile){var l;return l=function(scope,elem){var el,mkTemplate;return mkTemplate=function(name){return"<"+name+' field="field"></'+name+">"},el=$compile(mkTemplate(scope.field.directive()))(scope),elem.append(el)},{restrict:"E",scope:{field:"="},link:l}}),angular.module("CoolForm").directive("coolformErrorLoading",function($templateCache){var l;return l=function(scope){return scope.load=function(){return scope.reload()}},{restrict:"E",scope:{reload:"="},template:$templateCache.get("coolForm.error_loading"),replace:!0,link:l}}),angular.module("CoolFormDirectives").directive("coolformField",function($templateCache){var l;return l=function(scope){return scope.lbl=scope.field.label,scope.$watch("field.valid",function(v){switch(v){case!0:return scope.help=scope.field.help;case!1:return scope.help=scope.field.error&&""!==scope.field.error?scope.field.error:scope.field.help}})},{restrict:"E",scope:{field:"="},template:$templateCache.get("coolForm.field"),link:l}}),angular.module("CoolFormDirectives").directive("coolformLine",function($templateCache){var l;return l=function(){},{restrict:"E",scope:{line:"="},template:$templateCache.get("coolForm.line"),link:l}}),angular.module("CoolFormDirectives").directive("coolformPage",function($templateCache){return{restrict:"E",scope:{page:"="},template:$templateCache.get("coolForm.page")}}),angular.module("CoolFormDirectives").directive("coolformSelect",function($templateCache,networkService){var l;return l=function(scope){var display_error;if(scope.value=scope.field.value,scope.field.onChange.push(function(v){return v!==scope.value?scope.value=v:void 0}),scope.$watch("value",function(v){return scope.field.set(v)}),scope.loadingError=!1,display_error=function(){return scope.loadingError=!0,scope.$apply()},null==scope.field.options.type&&(scope.field.options.type="static"),"static"===scope.field.options.type){if(scope.options=scope.field.options.options,!scope.value)return scope.value=scope.options[0].id}else if("dynamic"===scope.field.options.type)return networkService().getJSON(scope.field.options.url,display_error).then(function(v){return scope.options=v,scope.value||(scope.value=scope.options[0].id),scope.loadingError=!1})},{restrict:"E",scope:{field:"="},template:$templateCache.get("coolForm.select"),link:l}}),angular.module("CoolFormDirectives").directive("coolformSubmit",function($templateCache){var l;return l=function(scope){var submitError;return scope.submitError=!1,submitError=function(){return scope.submitError=!0,scope.$apply()},scope.reset=function(){return scope.submitError=!1,scope.form.reset()},scope.submit=function(){return scope.submitError=!1,scope.form.submit(null,submitError)}},{restrict:"E",scope:{form:"="},template:$templateCache.get("coolForm.submit"),link:l}}),angular.module("CoolFormDirectives").directive("coolformText",function($templateCache){var l;return l=function(scope){return scope.value=scope.field.value,scope.field.onChange.push(function(v){return v!==scope.value?scope.value=v:void 0}),scope.$watch("value",function(v){return scope.field.set(v)}),scope.type="text",null!=scope.field.options.type?scope.type=scope.field.options.type:void 0},{restrict:"E",scope:{field:"="},template:$templateCache.get("coolForm.text"),link:l}}),angular.module("CoolFormDirectives").directive("coolformTextarea",function($templateCache){var l;return l=function(scope){return scope.value=scope.field.value,scope.field.onChange.push(function(v){return v!==scope.value?scope.value=v:void 0}),scope.$watch("value",function(v){return scope.field.set(v)})},{restrict:"E",scope:{field:"="},template:$templateCache.get("coolForm.textarea"),link:l}}),angular.module("CoolFormDirectives").directive("coolformWizard",function($templateCache){var l;return l=function(scope){var validatePage;return scope.current=0,validatePage=function(p){return scope.service.validateFields(pageFields[p])},scope.moveTo=function(i){return i<scope.current&&(scope.current=i),scope.form.pages[scope.current].validate()===!0?scope.current=i:void 0},scope.moveToNext=function(){return scope.moveTo(scope.current+1)},scope.isCurrent=function(index){return scope.current===index?!0:!1},scope.isLast=function(){var i,_i,_ref,_ref1;if(scope.current+1>=scope.form.pages.length)return!0;for(i=_i=_ref=scope.current+1,_ref1=scope.form.pages.length-1;_ref1>=_ref?_ref1>=_i:_i>=_ref1;i=_ref1>=_ref?++_i:--_i)if(scope.form.pages[i].display===!0)return!1;return!0},scope.nextTitle=function(){return scope.current+1<scope.form.pages.length?scope.form.pages[scope.current+1].title:void 0}},{restrict:"E",scope:{form:"="},template:$templateCache.get("coolForm.wizard"),link:l}}),angular.module("CoolFormValidators").factory("emailValidator",function(){var validator;return validator=function(name,fields){var p;return null==fields[name].value||"string"!=typeof fields[name].value?!1:(p=/^([\w.-]+)@([\w.-]+)\.([a-zA-Z.]{2,6})$/i,fields[name].value.match(p)?!0:!1)},{validator:validator,init:null}}),angular.module("CoolFormValidators").factory("exactSizeValidator",function(){var validator;return validator=function(name,fields,options){return null==fields[name].value||"string"!=typeof fields[name].value?!1:fields[name].value.length===options.size?!0:!1},{validator:validator,init:null}}),angular.module("CoolFormValidators").factory("maxSizeValidator",function(){var validator;return validator=function(name,fields,options){return null==fields[name].value||"string"!=typeof fields[name].value?!1:fields[name].value.length<=options.size?!0:!1},{validator:validator,init:null}}),angular.module("CoolFormValidators").factory("minSizeValidator",function(){var validator;return validator=function(name,fields,options){return null==fields[name].value||"string"!=typeof fields[name].value?!1:fields[name].value.length>=options.size?!0:!1},{validator:validator,init:null}}),angular.module("CoolFormValidators").factory("notBlankValidator",function(){var validator;return validator=function(name,fields){var v;return v=fields[name].value,void 0===v||null===v?!1:"boolean"==typeof v&&v===!0||v===!1?!0:"number"==typeof v?!0:"string"==typeof v?v.replace(/^\s+|\s+$/g,"").length>0?!0:!1:!1},{validator:validator,init:null}}),angular.module("CoolFormValidators").factory("notNullValidator",function(){var validator;return validator=function(name,fields){var v;return v=fields[name].value,void 0===v||null===v?!1:!0},{validator:validator,init:null}}),angular.module("CoolFormValidators").factory("sameAsValidator",function(){var init,validator;return validator=function(name,fields,options){return fields[name].value===fields[options.field].value?!0:!1},init=function(name,fields,options){return null!=fields[options.field]&&fields[options.field].onChange,services.watchField(rule.options.field,null,null,function(){return services.validateField(name)})},{validator:validator,init:init}}),angular.module("CoolFormValidators").factory("validators",function(emailValidator,exactSizeValidator,maxSizeValidator,minSizeValidator,notBlankValidator,notNullValidator,sameAsValidator){var add,get,validators;return validators={email:emailValidator,exact_size:exactSizeValidator,max_size:maxSizeValidator,min_size:minSizeValidator,not_blank:notBlankValidator,not_null:notNullValidator,same_as:sameAsValidator},get=function(name){return null!=validators[name]?validators[name]:null},add=function(dep){return validators[dep.name]=angular.injector([dep.module]).get(dep.factory)},{get:get,add:add}}),angular.module("CoolFormServices").factory("coreService",function(validators,directivesService,networkService){return function(definition){var Displayable,Element,Field,Form,Line,Page,Validator,directives,form,_fields;return directives=directivesService(),_fields={},Element=function(){function Element(subElemName){this.subElemName=subElemName}return Element.prototype.isValid=function(){var e,_i,_len,_ref;for(_ref=this[this.subElemName],_i=0,_len=_ref.length;_len>_i;_i++)if(e=_ref[_i],e.isValid()===!1)return!1;return!0},Element.prototype.reset=function(){var e,_i,_len,_ref,_results;for(_ref=this[this.subElemName],_results=[],_i=0,_len=_ref.length;_len>_i;_i++)e=_ref[_i],_results.push(e.reset());return _results},Element.prototype.validate=function(){var e,valid,_i,_len,_ref;for(valid=!0,_ref=this[this.subElemName],_i=0,_len=_ref.length;_len>_i;_i++)e=_ref[_i],e.display===!0&&e.validate()===!1&&(valid=!1);return valid},Element}(),Displayable=function(_super){function Displayable(def,subElemName){Displayable.__super__.constructor.call(this,subElemName),this.display=!0,null!=def.show_on&&this._doDisplay(def.show_on,!0),null!=def.hide_on&&this._doDisplay(def.hide_on,!1)}return __extends(Displayable,_super),Displayable.prototype._doDisplay=function(def,showOrHide){var field,values,_results,_this=this;_results=[];for(field in def)values=def[field],_results.push(_fields[field].onChange.push(function(v){var i,_i,_len;for(_i=0,_len=values.length;_len>_i;_i++)if(i=values[_i],v===i)return _this.display=showOrHide,void 0;return _this.display=!showOrHide}));return _results},Displayable}(Element),Form=function(_super){function Form(def){var d,p,_i,_len,_ref;if(Form.__super__.constructor.call(this,"pages"),this.name=def.name,this.action=def.action,this.method=null==def.method?"POST":def.method,this.submitLabel=def.submit,this.resetLabel=def.reset,this.headers=def.headers,this.hiddens=def.hiddens,this.userCB={beforeSend:null,success:null,error:null},this.pages=function(){var _i,_len,_ref,_results;for(_ref=def.pages,_results=[],_i=0,_len=_ref.length;_len>_i;_i++)p=_ref[_i],_results.push(new Page(p));return _results}(),null!=def.dependencies)for(_ref=def.dependencies,_i=0,_len=_ref.length;_len>_i;_i++)switch(d=_ref[_i],d.type){case"validator":validators.add(d);break;case"directive":directives.add(d.name,d.tag)}}return __extends(Form,_super),Form.prototype.submit=function(success,error){var errorCB,k,params,successCB,v,_error,_ref,_success;if(this.validate()){if(successCB=null!=this.userCB.success?this.userCB.success:function(){},errorCB=null!=this.userCB.error?this.userCB.error:function(){},_success=function(data){var k,o,v,_ref,_results;if(o=$.parseJSON(data),o.ok===!0)return null!=success&&success(!0),successCB(!0);null!=success&&success(!1,o.errors),successCB(!1,o.errors),_ref=o.errors,_results=[];for(k in _ref)v=_ref[k],_field[k].valid=!1,_results.push(_field[k].error=v);return _results},_error=function(){return null!=error&&error(),errorCB()},params={method:this.method,action:this.action,data:{},success:_success,error:_error},null!=this.headers&&(params.headers=this.headers),null!=this.hiddens){_ref=this.hiddens;for(k in _ref)v=_ref[k],params.data[k]=v}for(k in _fields)v=_fields[k],v.display===!0&&(params.data[k]=v.value);return null==this.userCB.before?networkService().sendForm(params):this.userCB.before(params.data)===!0?networkService().sendForm(params):void 0}},Form}(Element),Page=function(_super){function Page(def){var l;Page.__super__.constructor.call(this,def,"lines"),this.title=def.title,this.description=def.description,this.lines=function(){var _i,_len,_ref,_results;for(_ref=def.lines,_results=[],_i=0,_len=_ref.length;_len>_i;_i++)l=_ref[_i],_results.push(new Line(l));return _results}()}return __extends(Page,_super),Page}(Displayable),Line=function(_super){function Line(def){var f;Line.__super__.constructor.call(this,def,"fields"),this.fields=function(){var _i,_len,_ref,_results;for(_ref=def.fields,_results=[],_i=0,_len=_ref.length;_len>_i;_i++)f=_ref[_i],_results.push(new Field(f));return _results}()}return __extends(Line,_super),Line}(Displayable),Field=function(_super){function Field(def){var v;Field.__super__.constructor.call(this,def),this.name=def.name,this.type=def.type,this.label=def.label,this.size=null!=def.size?def.size:1,this.help=def.help,this["default"]=def["default"],this.options=null!=def.options?def.options:{},this.value=this["default"],this.validators=null!=def.validators?function(){var _i,_len,_ref,_results;for(_ref=def.validators,_results=[],_i=0,_len=_ref.length;_len>_i;_i++)v=_ref[_i],_results.push(new Validator(v,this.name));return _results}.call(this):[],this.mandatory=this._isMandatory(def),this.error=null,this.valid=!0,this.onChange=[],this.onValidate=[],_fields[this.name]=this}return __extends(Field,_super),Field.prototype._isMandatory=function(def){switch(def.mandatory){case void 0:return 0===this.validators.length?!1:!0;case!1:return!1;case!0:if(0===this.validators.length)return this.validators.push(new Validator({name:"not_blank"},this.name))}},Field.prototype.isValid=function(){return this.valid},Field.prototype._doValidate=function(res,msg){var h,_i,_len,_ref;for(_ref=this.onValidate,_i=0,_len=_ref.length;_len>_i;_i++)(h=_ref[_i])(res);return this.valid=res,this.error=msg,res},Field.prototype.set=function(value){var h,_i,_len,_ref;if(value!==this.value){for(this.value=value,_ref=this.onChange,_i=0,_len=_ref.length;_len>_i;_i++)(h=_ref[_i])(this.value);return this._doValidate(!0)}},Field.prototype.reset=function(){return this.set(this["default"]?this["default"]:null),this._doValidate(!0)},Field.prototype.validate=function(){var v,_i,_len,_ref;if(this.mandatory===!1&&validators.get("not_blank").validator(this.name,_fields)===!1)return this._doValidate(!0);for(_ref=this.validators,_i=0,_len=_ref.length;_len>_i;_i++)if(v=_ref[_i],v.validate()===!1)return this._doValidate(!1,v.message);return this._doValidate(!0)},Field.prototype.directive=function(){return directives.get(this.type)},Field}(Displayable),Validator=function(){function Validator(def,fieldName){var v;this.name=def.name,this.message=def.message,this.options=def.options,this.fieldName=fieldName,v=validators.get(this.name),v===!0&&null!=v.init&&v.init(this.fieldName,this.options,_fields)}return Validator.prototype.validate=function(){var v;return v=validators.get(this.name),null===v?!0:v.validator(this.fieldName,_fields,this.options)},Validator}(),null!=definition.form?(form=new Form(definition.form),form.reset(),form):null}}),angular.module("CoolFormServices").factory("directivesService",function(){return function(){var add,directives,get;return directives={"boolean":"coolform-boolean",select:"coolform-select",text:"coolform-text",textarea:"coolform-textarea"},add=function(type,name){return directives[type]=name},get=function(type){return directives[type]},{get:get,add:add}}}),angular.module("CoolFormServices").factory("networkService",function($q){return function(){var getJSON,net,sendForm;return getJSON=function(url,error){var deferred;return deferred=$q.defer(),$.getJSON(url,function(data){return deferred.resolve(data)}).fail(error),deferred.promise},sendForm=function(params){var cfg;return cfg={type:params.method,url:params.action,contentType:"application/x-www-form-urlencoded; charset=UTF-8",data:params.data,success:params.success,error:params.error,headers:params.headers},$.ajax(cfg)},net={getJSON:getJSON,sendForm:sendForm}}}),angular.module("CoolFormServices").factory("validationService",function(validators){return function(events){var errors,fields,initValidation,removeError,setError,validateAll,validateField,validateFields,validateForRule;return errors={},fields={},removeError=function(fieldName){return delete errors[fieldName],events.handle(fieldName,"ok"),!0},setError=function(fieldName,msg){return msg=null===msg?!0:msg,errors[fieldName]=msg,events.handle(fieldName,"error",msg),!1},initValidation=function(field,services){return fields[field.name]=field,null!=field.validation?field.validation.map(function(rule){var vl;return vl=validators.get(rule.validator),null!=vl&&null!=vl.init?vl.init(field.name,rule,services):void 0}):void 0},validateForRule=function(fieldName,rule,values){var msg,vl;return msg=null,vl=validators.get(rule.validator),vl&&null!=vl.validator?vl.validator(fieldName,values,rule)===!1?(null!=rule.options&&null!=rule.options.message&&(msg=rule.options.message),setError(fieldName,msg)):!0:!0},validateField=function(fieldName,values){var field,rule,_i,_len,_ref;if(field=fields[fieldName],null!=field.validation)for(_ref=field.validation,_i=0,_len=_ref.length;_len>_i;_i++)if(rule=_ref[_i],!validateForRule(fieldName,rule,values))return!1;return removeError(fieldName)},validateFields=function(fieldList,values){var f,result,_i,_len;for(result=!0,_i=0,_len=fieldList.length;_len>_i;_i++)f=fieldList[_i],validateField(f,values)||(result=!1);return result},validateAll=function(values){return validateFields(Object.keys(fields),values)},{removeError:removeError,initValidation:initValidation,validateField:validateField,validateFields:validateFields,validateAll:validateAll,add:function(validatorName,factory){return validators.add(validatorName,factory)}}}}),angular.module("CoolFormDirectives").run(function($templateCache){return $templateCache.put("coolForm.boolean",'<input type="checkbox" ng-model="value">'),$templateCache.put("coolForm.container",'<form><div class="container-fluid"><coolform-wizard ng-if="wizard" form="form"></coolform-wizard><div ng-if="page"><coolform-page page="page" service="service"></coolform-page><coolform-submit form="form"></coolform-submit></div></div></form>'),$templateCache.put("coolForm.controller",'<div><div ng-if="!form" ng-hide="loadingError" ng-include=" \'coolForm.loading\' "></div><coolform-error-loading ng-if="loadingError" reload="reload"></coolform-error-loading><div ng-if="form"><coolform-container form="form"></coolform-container></div></div>'),$templateCache.put("coolForm.error_loading",'<div class="alert alert-warning"><strong>Cannot load the Form!</strong> &nbsp;<p>Please check your internet connection and try to: &nbsp;<button type="button" ng-click="load()" class="btn btn-primary">Reload the Form</button></p></div>'),$templateCache.put("coolForm.error_submit",'<div class="alert alert-danger"><strong>Error : Cannot submit the Form!</strong><p>Please check your internet connection and try again.</p></div>'),$templateCache.put("coolForm.field",'<div class="form-group" ng-show="field.display" ng-class="{\'has-error\': !field.valid}"><label class="control-label" for="{{ field.name }}">{{ field.label }}<span ng-if="field.mandatory">&nbsp;*</span></label><div><coolform-dynamic field="field"></coolform-dynamic></div><p class="help-block" ng-bind-html="help"></p></div>'),$templateCache.put("coolForm.line",'<div class="row" ng-show="line.display"><div ng-repeat="field in line.fields"><div class="col-md-{{ field.size * 3 }}"><coolform-field field="field"></coolform-field></div></div></div>'),$templateCache.put("coolForm.loading",'<div class="alert alert-info"><strong>Loading form</strong><p>Please wait while loading the form</p></div>'),$templateCache.put("coolForm.page",'<div ng-if="page.title || page.description" class="row"><div class="col-md-12"><h4 ng-if="page.title" class="text-primary">{{ page.title }}</h4><div ng-if="page.description"><div ng-bind-html="page.description"></div></div></div></div><coolform-line ng-repeat="line in page.lines" line="line"></coolform-line>'),$templateCache.put("coolForm.select",'<div ng-if="!options" ng-hide="loadingError" class="alert alert-info"><strong>Loading</strong>&nbsp;<p>Please wait while loading data</p></div><div ng-if="loadingError" class="alert alert-warning"><strong>Cannot load the field data!</strong> &nbsp;<p>Please check your internet connection and try again</p></div><select class="form-control" ng-options="x.id as x.label for x in options" ng-model="value"></select>'),$templateCache.put("coolForm.submit",'<div class="row" ng-if="submitError"><div class="col-md-12"><div><div ng-include=" \'coolForm.error_submit\' "></div></div></div></div><div class="row"><div class="col-md-12"><div class="well well-sm"><button ng-click="submit()" type="button" class="btn btn-primary">{{ form.submitLabel }}</button> <button ng-if="form.resetLabel" ng-click="reset()" type="button" class="btn btn-default">{{ form.resetLabel }}</button></div></div></div>'),$templateCache.put("coolForm.text",'<input type="{{ type }}" class="form-control" placeholder="{{ field.options.placeholder }}" ng-model="value">'),$templateCache.put("coolForm.textarea",'<textarea class="form-control" ng-model="value" placeholder="{{ field.options.placeholder }}" rows="{{ field.options.rows }}"></textarea>'),$templateCache.put("coolForm.wizard",'<div class="row"><div class="col-md-12"><ul class="nav nav-tabs"><li ng-repeat="page in form.pages" ng-show="page.display" ng-class="{active: isCurrent($index)}"><a ng-click="moveTo($index)" ng-class="{\'text-danger\': !form.pages[$index].isValid()}" href="">{{ page.title }}</a></li><li></li></ul></div></div><div ng-repeat="page in form.pages"><coolform-page ng-show="isCurrent($index)" page="page"></coolform-page></div><div ng-hide="isLast()" class="row"><div class="col-md-12"><div class="well well-sm"><button ng-click="moveToNext()" type="button" class="btn btn-primary" ng-class="{\'btn-danger\': !form.pages[current].isValid()}"><span class="glyphicon glyphicon-arrow-right"></span>&nbsp;{{ nextTitle() }}</button></div></div></div><coolform-submit ng-show="isLast()" form="form"></coolform-submit>')})}).call(this);
</script>

 <style type="text/css">
 * { box-sizing: border-box; position:relative;}

body {
  background: #2D82CB;
  font-family: "lato", sans-serif;
  color: rgba(255,255,255,0.7);
}

#form-wrapper {
  margin-top: 80px;
  height:450px;
  transition: all 1s ease;
  overflow: hidden;
}
#form-wrapper.answering {
  height: 150px;
  overflow: hidden;
}

.question {
  min-width: 600px;
  width:30%;
  margin: 0 auto;
  height: 30px;
  overflow: hidden;
}
.question, .question * {transition: all 0.3s ease;}
.question .q-back {opacity:1;}
.question label {font-size: 20px; padding-left:20px;}
.question input, .question .q-next {display: none;}
.question .q-text {height:30px;line-height:30px;}
.question .q-answer {display:inline; color: rgba(0,0,0,.8);}

.question.open {height: 90px; margin-bottom: 150px;}
.question.open label {font-size: 30px;}
.question.open .q-back {opacity: 0;}
.question.open input {display: block;}
.question.open .q-next {display: block;}
.question.open .q-text {height:40px;line-height:40px;}
.question.open .q-answer {display:none;}

.q-next {
  display: block;
  position: absolute;
  bottom: 5px;
  right:0px;
  padding: 0 10px;
  height: 45px;
  line-height:45px;
  text-align:center;
  font-size: 30px;
  cursor: pointer;
} .q-next:hover {background: rgba(255,255,255,.1);}

.q-back {
  position:absolute;
  top:0px;
  left:0px;
  color:rgba(0,0,0,.8);
  width: 100%;
  cursor: pointer;
  font-size:20px;
  line-height: 30px;
  padding-left: 4px;
} .q-back:hover {background: rgba(255,255,255,.1);}

.q-text {
  max-height: 40px;
  overflow:hidden;
  display:block;
}

label {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 40px;
}

input {
  border: 0px;
  outline: 0;
  box-shadow: 0;
  background: rgba(0,0,0,.15);
  border-bottom: 5px solid rgba(0,0,0,.05);
  color: black;
  width:100%;
  height:50px;
  line-height:50px;
  padding: 0 10px;
  font-size: 30px;
}


.q-title {
  text-align: center;
  line-height: 150px;
  font-size: 40px;
  font-weight: bold;
}

.q-after {
  width: 400px;
  margin: 0 auto;
  overflow: hidden;
  padding: 20px 0;
}
.q-confirm-text {
  font-size: 20px;
  padding: 20px 0;
}
.q-confirm-button {
  transition: all 0.3s ease;
  display: block;
  padding: 0 10px;
  padding-left: 50px;
  height: 40px;
  line-height:40px;
  width: 50%;
  font-size: 20px;
  cursor: pointer;
  background: rgba(255,255,255,.3);
  text-transform: uppercase;
  color: white;
} .q-confirm-button:hover {background: rgba(255,255,255,.1);}
.q-confirm-button:before {
  content: '>';
  display: block;
  position:absolute;
  top: 0px;
  left: 0px;
  width: 40px;
  height: 100%;
  background: rgba(255,255,255,.1);
  text-align:center;
  line-height: 40px;
  font-size: 25px;
  color: white;
}

hr {
  box-shadow: 0px;
  outline: 0px; border:0px;
  height: 1px;
  background: rgba(255,255,255,.2);
}


 </style>
<div class="centerwrapper centerwrapper--medium" style="margin-top:100px">
 <div ng-app="coolform" class="wrapper">
  
  <div cool-form>
    <div class="q-title">Join the sales team!</div>
    <div ng-repeat="q in questions" class="question">
      <label>
        <span class="q-text">
          {{q.question}}
          <span class="q-answer">
            {{q.answer}}
          </span>
        </span>
        <input type="text" id="q{{$index}}" ng-model="q.answer">
        <span class="q-back" ng-click="open($index)"><</span>
      </label>
      <span class="q-next" ng-click="open($index+1)">></span>  
    </div>
    <div class="q-after">
      <hr>
      <div class="q-confirm-text">Is the above information correct?</div>
      <div class="q-confirm-button">Absolutely</div>
    </div>
  </div>
  <center ng-show="activequestion > -1 && activequestion < questions.length">{{activequestion+1}} / {{questions.length}}</center>
  
</div>
</div>

