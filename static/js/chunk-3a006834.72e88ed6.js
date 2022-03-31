(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a006834"],{"0f48":function(t,e,a){},"288b":function(t,e,a){"use strict";a("0f48")},"742b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{staticStyle:{margin:"20px 0"}},[a("CategorySelect",{attrs:{show:0==!t.scene},on:{getCategoryId:t.getCategoryId}})],1),a("el-card",[a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.scene,expression:"scene == 0"}]},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",disabled:!t.categoryId.category3Id},on:{click:t.addSpu}},[t._v("添加SPU")]),a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:t.records}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80",align:"center"}}),a("el-table-column",{attrs:{prop:"spuName",label:"spu名称",width:"width"}}),a("el-table-column",{attrs:{prop:"description",label:"spu描述",width:"width"}}),a("el-table-column",{attrs:{prop:"prop",label:"操作",width:"width"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("HintButton",{attrs:{type:"success",title:"添加sku",icon:"el-icon-plus",size:"mini"},on:{click:function(e){return t.addSku(n)}}}),a("HintButton",{attrs:{type:"warning",title:"修改spu",icon:"el-icon-edit",size:"mini"},on:{click:function(e){return t.updateSpu(n)}}}),a("HintButton",{attrs:{type:"info",title:"查看当前spu全部列表",icon:"el-icon-info",size:"mini"},on:{click:function(e){return t.handlerWatch(n)}}}),a("el-popconfirm",{attrs:{title:"这一箱确定删除吗？"},on:{onConfirm:function(e){return t.deleteSpu(n)}}},[a("HintButton",{attrs:{slot:"reference",title:"删除spu",type:"danger",icon:"el-icon-delete",size:"mini"},slot:"reference"})],1)]}}])})],1),a("el-pagination",{staticStyle:{"text-align":"center"},attrs:{disabled:0==this.total,"current-page":t.page,"page-sizes":[3,5,10],"page-size":t.limit,layout:" prev, pager, next,jumper,->, sizes,total",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.getSpuList}})],1),a("SpuForm",{directives:[{name:"show",rawName:"v-show",value:1==t.scene,expression:"scene == 1"}],ref:"spu",on:{"change-scene":t.changeScene}}),a("SkuForm",{directives:[{name:"show",rawName:"v-show",value:2==t.scene,expression:"scene == 2"}],ref:"sku",on:{"change-scenes":t.changeScenes}})],1),a("el-dialog",{attrs:{title:t.spu.spuName+"的列表",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[a("el-table",{attrs:{data:t.skuList}},[a("el-table-column",{attrs:{prop:"skuName",label:"名称",width:"width"}}),a("el-table-column",{attrs:{prop:"price",label:"价格",width:"width"}}),a("el-table-column",{attrs:{prop:"weight",width:"width",label:"重量"}}),a("el-table-column",{attrs:{width:"width",label:"默认图片"},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.row;return[a("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.skuDefaultImg}})]}}])})],1)],1)],1)},r=[],s=a("1da1"),i=(a("96cf"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"SPU名称"}},[a("el-input",{attrs:{placeholder:"SPU名称"},model:{value:t.spu.spuName,callback:function(e){t.$set(t.spu,"spuName",e)},expression:"spu.spuName"}})],1),a("el-form-item",{attrs:{label:"品牌"}},[a("el-select",{attrs:{placeholder:"请选择品牌"},model:{value:t.spu.tmId,callback:function(e){t.$set(t.spu,"tmId",e)},expression:"spu.tmId"}},t._l(t.tradeMarkList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.tmName,value:t.id}})})),1)],1),a("el-form-item",{attrs:{label:"SPU描述"}},[a("el-input",{attrs:{type:"textarea",rows:"4",placeholder:"描述"},model:{value:t.spu.description,callback:function(e){t.$set(t.spu,"description",e)},expression:"spu.description"}})],1),a("el-form-item",{attrs:{label:"SPU图片"}},[a("el-upload",{attrs:{action:"/dev-api/admin/product/fileUpload","list-type":"picture-card","on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove,"file-list":t.spuImageList,"on-success":t.handlerSuccess}},[a("i",{staticClass:"el-icon-plus"})]),a("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1),a("el-form-item",{attrs:{label:"销售属性"}},[a("el-select",{attrs:{placeholder:"还有"+t.unSelectSaleAttr.length+"处未选择"},model:{value:t.attrIdAndName,callback:function(e){t.attrIdAndName=e},expression:"attrIdAndName"}},t._l(t.unSelectSaleAttr,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id+":"+t.name}})})),1),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",disabled:!t.attrIdAndName},on:{click:t.addSaleAttr}},[t._v("添加销售属性")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.spu.spuSaleAttrList}},[a("el-table-column",{attrs:{label:"序号",type:"index",width:"80"}}),a("el-table-column",{attrs:{prop:"saleAttrName",label:"属性名",width:"width"}}),a("el-table-column",{attrs:{prop:"prop",label:"属性值名称列表",width:"width"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._l(n.spuSaleAttrValueList,(function(e,r){return a("el-tag",{key:e.id,attrs:{closable:""},on:{close:function(t){return n.spuSaleAttrValueList.splice(r,1)}}},[t._v(" "+t._s(e.saleAttrValueName)+" ")])})),n.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(e){return t.handleInputConfirm(n)}},model:{value:n.inputValue,callback:function(e){t.$set(n,"inputValue",e)},expression:"row.inputValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(e){return t.showInput(n)}}},[t._v("添加")])]}}])}),a("el-table-column",{attrs:{prop:"prop",label:"操作",width:"width"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.$index;return[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(e){return t.spu.spuSaleAttrList.splice(n,1)}}})]}}])})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.addOrUpdateSpu}},[t._v("保存")]),a("el-button",{on:{click:t.cancel}},[t._v("取消")])],1)],1)}),l=[];function u(t){if(Array.isArray(t))return t}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0");function o(t,e){var a=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var n,r,s=[],i=!0,l=!1;try{for(a=a.call(t);!(i=(n=a.next()).done);i=!0)if(s.push(n.value),e&&s.length===e)break}catch(u){l=!0,r=u}finally{try{i||null==a["return"]||a["return"]()}finally{if(l)throw r}}return s}}a("fb6a"),a("b0c0"),a("a630"),a("ac1f"),a("00b4");function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function d(t,e){if(t){if("string"===typeof t)return c(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(t,e):void 0}}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(t,e){return u(t)||o(t,e)||d(t,e)||p()}a("159b"),a("1276"),a("498a"),a("d81d"),a("4de4");var f={name:"SpuForm",data:function(){return{attrIdAndName:"",dialogImageUrl:"",dialogVisible:!1,spu:{category3Id:0,description:"",tmId:"",spuImageList:[{id:0,imgName:"",imgUrl:"",spuId:0}],spuName:"",spuSaleAttrList:[]},tradeMarkList:[],spuImageList:[],saleAttrList:[]}},methods:{handlerSuccess:function(t,e,a){this.spuImageList=a},handleRemove:function(t,e){this.spuImageList=e},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},initSpuData:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r,s,i,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$API.Spu.reqSpu(t.id);case 2:return n=a.sent,200==n.code&&(e.spu=n.data),a.next=6,e.$API.Spu.reqTradeMarkList();case 6:return r=a.sent,200==r.code&&(e.tradeMarkList=r.data),a.next=10,e.$API.Spu.reqSpuImageList(t.id);case 10:return s=a.sent,200==s.code&&(i=s.data,i.forEach((function(t){t.name=t.imgName,t.url=t.imgUrl})),e.spuImageList=i),a.next=14,e.$API.Spu.reqBaseSaleAttrList();case 14:l=a.sent,200==l.code&&(e.saleAttrList=l.data);case 16:case"end":return a.stop()}}),a)})))()},addSaleAttr:function(){var t=this.attrIdAndName.split(":"),e=m(t,2),a=e[0],n=e[1],r={baseSaleAttrId:a,saleAttrName:n,spuSaleAttrValueList:[]};this.spu.spuSaleAttrList.push(r),this.attrIdAndName=""},showInput:function(t){var e=this;this.$set(t,"inputVisible",!0),this.$set(t,"inputValue",""),this.$nextTick((function(){return e.$refs.saveTagInput.focus()}))},handleInputConfirm:function(t){var e=t.baseSaleAttrId,a=t.inputValue;if(""!=a.trim()){var n=t.spuSaleAttrValueList.every((function(t){return t.saleAttrValueName!=a}));if(n){var r={baseSaleAttrId:e,saleAttrValueName:a};t.spuSaleAttrValueList.push(r),t.inputVisible=!1}else this.$message("输入不能重复")}else this.$message("输入不能为空")},addOrUpdateSpu:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.spu.spuImageList=t.spuImageList.map((function(t){return{imgName:t.name,imgUrl:t.response&&t.response.data||t.url}})),e.next=3,t.$API.Spu.reqAddOrUpdateSpu(t.spu);case 3:if(e.t0=e.sent,e.t0){e.next=6;break}e.t0={code:200};case 6:a=e.t0,console.log(a),200==a.code?(t.$message({type:"success",message:"保存成功"}),t.$emit("change-scene",0)):t.$message("系统数据不可修改"),Object.assign(t._data,t.$options.data());case 10:case"end":return e.stop()}}),e)})))()},addSpuData:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.spu.category3Id=t,a.next=3,e.$API.Spu.reqTradeMarkList();case 3:return n=a.sent,200==n.code&&(e.tradeMarkList=n.data),a.next=7,e.$API.Spu.reqBaseSaleAttrList();case 7:r=a.sent,200==r.code&&(e.saleAttrList=r.data);case 9:case"end":return a.stop()}}),a)})))()},cancel:function(){this.$emit("change-scene",0),Object.assign(this._data,this.$options.data())}},computed:{unSelectSaleAttr:function(){var t=this;return this.saleAttrList.filter((function(e){return t.spu.spuSaleAttrList.every((function(t){return e.name!=t.saleAttrName}))}))}}},h=f,g=(a("288b"),a("2877")),b=Object(g["a"])(h,i,l,!1,null,null,null),I=b.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"SPU名称"}},[t._v(t._s(t.spu.spuName))]),a("el-form-item",{attrs:{label:"SKU名称"}},[a("el-input",{attrs:{placeholder:"SKU名称"},model:{value:t.skuInfo.skuName,callback:function(e){t.$set(t.skuInfo,"skuName",e)},expression:"skuInfo.skuName"}})],1),a("el-form-item",{attrs:{label:"价格(元)"}},[a("el-input",{attrs:{placeholder:"价格(元)",type:"number"},model:{value:t.skuInfo.price,callback:function(e){t.$set(t.skuInfo,"price",e)},expression:"skuInfo.price"}})],1),a("el-form-item",{attrs:{label:"重量(千克)"}},[a("el-input",{attrs:{placeholder:"重量(千克)"},model:{value:t.skuInfo.weight,callback:function(e){t.$set(t.skuInfo,"weight",e)},expression:"skuInfo.weight"}})],1),a("el-form-item",{attrs:{label:"价格描述"}},[a("el-input",{attrs:{type:"textarea",placeholder:"价格描述",rows:"5"},model:{value:t.skuInfo.skuDesc,callback:function(e){t.$set(t.skuInfo,"skuDesc",e)},expression:"skuInfo.skuDesc"}})],1),a("el-form-item",{attrs:{label:"平台属性"}},[a("el-form",{attrs:{inline:!0,"label-width":"80px"}},t._l(t.attrInfoList,(function(e){return a("el-form-item",{key:e.id,attrs:{label:e.attrName}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.attrIdAndAttrValue,callback:function(a){t.$set(e,"attrIdAndAttrValue",a)},expression:"attr.attrIdAndAttrValue"}},t._l(e.attrValueList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.valueName,value:e.id+":"+t.id}})})),1)],1)})),1)],1),a("el-form-item",{attrs:{label:"销售属性"}},[a("el-form",{attrs:{inline:!0,"label-width":"80px"}},t._l(t.spuSaleAttrList,(function(e){return a("el-form-item",{key:e.id,attrs:{label:e.saleAttrName}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.attrIdAndValue,callback:function(a){t.$set(e,"attrIdAndValue",a)},expression:"saleAttr.attrIdAndValue"}},t._l(e.spuSaleAttrValueList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.saleAttrValueName,value:e.id+":"+t.id}})})),1)],1)})),1)],1),a("el-form-item",{attrs:{label:"图片列表"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.spuImageList},on:{"selection-change":t.handleSelectionChange}},[t._v("> "),a("el-table-column",{attrs:{type:"selection",width:"80"}}),a("el-table-column",{attrs:{prop:"prop",label:"图片",width:"width"},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.row;return[a("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.imgUrl}})]}}])}),a("el-table-column",{attrs:{prop:"imgName",label:"名称",width:"width"}}),a("el-table-column",{attrs:{prop:"prop",label:"label",width:"width"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[0==n.isDefault?a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.changeDefault(n)}}},[t._v("设置默认")]):a("el-button",{on:{click:function(e){return t.cancelDefault(n)}}},[t._v("默认")])]}}])})],1)],1),a("el-form-item",{scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary"},on:{click:t.saveSku}},[t._v("保存")]),a("el-button",{on:{click:t.cancel}},[t._v("取消")])]}}])})],1)],1)},k=[],v={name:"SkuForm",data:function(){return{spuImageList:[],spuSaleAttrList:[],attrInfoList:[],spu:{},skuInfo:{category3Id:0,price:0,spuId:0,tmId:0,skuAttrValueList:[],skuDefaultImg:"",skuDesc:"",skuImageList:[],skuName:"",skuSaleAttrValueList:[],weight:""},imgList:[]}},methods:{getSkuList:function(t,e){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a.skuInfo.category3Id=t.category3Id,a.skuInfo.spuId=e.id,a.skuInfo.tmId=e.tmId,a.spu=e,n.next=6,a.$API.Sku.reqSpuImageList(e.id);case 6:return r=n.sent,200==r.code&&(r.data.forEach((function(t){t.isDefault=0})),a.spuImageList=r.data),n.next=10,a.$API.Sku.reqSpuSaleAttrList(e.id);case 10:return s=n.sent,200==s.code&&(a.spuSaleAttrList=s.data),n.next=14,a.$API.Sku.reqAttrInfoList(t);case 14:i=n.sent,200==i.code&&(a.attrInfoList=i.data);case 16:case"end":return n.stop()}}),n)})))()},handleSelectionChange:function(t){this.imgList=t},changeDefault:function(t){this.spuImageList.forEach((function(t){return t.isDefault=0})),t.isDefault=1,this.skuInfo.skuDefaultImg=t.imgUrl},cancelDefault:function(t){t.isDefault=0,this.skuInfo.skuDefaultImg=""},cancel:function(){this.$emit("change-scenes",0),Object.assign(this._data,this.$options.data())},saveSku:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.attrInfoList,n=t.skuInfo,r=t.spuSaleAttrList,s=t.imgList,a.forEach((function(t){if(t.attrIdAndAttrValue){var e=t.attrIdAndAttrValue.split(":"),a=m(e,2),r=a[0],s=a[1],i={attrId:r,valueId:s};n.skuAttrValueList.push(i)}})),r.forEach((function(t){if(t.attrIdAndValue){var e=t.attrIdAndValue.split(":"),a=m(e,2),r=a[0],s=a[1],i={saleAttrId:r,saleAttrValueId:s};n.skuSaleAttrValueList.push(i)}})),n.skuImageList=s.map((function(t){return{imgName:t.imgName,imgUrl:t.imgUrl,isDefault:t.isDefault,spuImgId:t.id}})),e.next=6,t.$API.Sku.reqAddSku(n);case 6:i=e.sent,console.log(i),200==i.code?(t.$message({type:"success",message:"添加成功"}),t.$emit("change-scenes",0),Object.assign(t._data,t.$options.data())):t.$message("添加失败");case 9:case"end":return e.stop()}}),e)})))()}}},w=v,A=Object(g["a"])(w,S,k,!1,null,null,null),y=A.exports,L={name:"Spu",components:{SpuForm:I,SkuForm:y},data:function(){return{categoryId:{},page:1,limit:3,records:[],total:0,scene:0,spu:{},skuList:[],dialogTableVisible:!1}},methods:{handleSizeChange:function(t){this.limit=t,this.getSpuList()},getCategoryId:function(t){this.categoryId=t,this.getSpuList()},getSpuList:function(){var t=arguments,e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:1,e.page=n,a.next=4,e.$API.Spu.reqSpuList(e.page,e.limit,e.categoryId.category3Id);case 4:r=a.sent,200==r.code&&(e.records=r.data.records,e.total=r.data.total);case 6:case"end":return a.stop()}}),a)})))()},addSpu:function(){this.scene=1,this.$refs.spu.addSpuData(this.categoryId.category3Id)},updateSpu:function(t){this.scene=1,this.$refs.spu.initSpuData(t)},changeScene:function(t){this.scene=t,this.getSpuList(this.page)},deleteSpu:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$API.Spu.reqDeleteSpu(t.id);case 2:n=a.sent,200==n.code&&(e.$message("删除成功"),e.getSpuList(e.records.length>1?e.page:e.page-1));case 4:case"end":return a.stop()}}),a)})))()},addSku:function(t){this.scene=2,this.$refs.sku.getSkuList(this.categoryId,t)},changeScenes:function(t){this.scene=t},handlerWatch:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.spu=t,e.dialogTableVisible=!0,a.next=4,e.$API.Sku.reqSkuList(t.id);case 4:n=a.sent,200==n.code&&(e.skuList=n.data);case 6:case"end":return a.stop()}}),a)})))()}}},x=L,$=Object(g["a"])(x,n,r,!1,null,null,null);e["default"]=$.exports}}]);