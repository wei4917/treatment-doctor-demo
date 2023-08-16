webpackJsonp([3],{LNv3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("tB5l");var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"containerBox"},[a("div",{staticClass:"pageTopic"},[a("span",{staticClass:"topicName"},[t._v("全部病例")]),t._v(" "),a("router-link",{attrs:{to:"/case/save"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"}},[t._v("添加病例")])],1)],1),t._v(" "),a("div",{staticClass:"list"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.caseListData}},[a("el-table-column",{attrs:{prop:"name",label:"姓名","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"phoneNo",label:"手机号","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"age",label:"年龄"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(" "+t._s(t._f("transSex")(e.row.sex))+" ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"height",label:"身高(cm)"}}),t._v(" "),a("el-table-column",{attrs:{prop:"weight",label:"体重(kg)"}}),t._v(" "),a("el-table-column",{attrs:{prop:"startDate",label:"就诊日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"treatmentNum",label:"治疗次数"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("el-link",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return t.gotoTreatment(e.row.caseId)}}},[t._v("设置治疗方案")]),a("br"),t._v(" "),a("el-link",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return t.gotoTreatmentRecord(e.row.caseId)}}},[t._v("治疗记录")]),a("br"),t._v(" "),a("el-link",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return t.gotoEdit(e.row.caseId)}}},[t._v("编辑个人信息")]),a("br"),t._v(" "),a("el-link",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return t.leaveHsp(e.row.goodsId)}}},[t._v("出院")])],1)]}}])})],1)],1),t._v(" "),a("div",{staticClass:"paging"},[a("el-pagination",{attrs:{"current-page":t.paginationData.page,"hide-on-single-page":t.paginationData.size/t.paginationData.pageSize<=1,"page-size":t.paginationData.pageSize,layout:"total, prev, pager, next",total:t.paginationData.size},on:{"current-change":t.changePage}})],1)])])},staticRenderFns:[]};var n=a("VU/8")({data:function(){return{paginationData:{page:1,pageSize:10,size:0},caseListData:[]}},created:function(){this.initCaseList(1)},methods:{initCaseList:function(t){this.caseListData=this.$db.caseList()},changePage:function(t){this.initCaseList(t)},gotoEdit:function(t){this.$router.push("/case/"+t+"/save")},gotoTreatment:function(t){this.$router.push("case/"+t+"/treatment/save")},gotoTreatmentRecord:function(t){this.$router.push("/case/"+t+"/treatment-record")},leaveHsp:function(t){var e=this;this.$confirm("是否设置该用户出院?","提示",{}).then(function(){e.$db.deleteCase(t),e.caseListData=e.$db.caseList()})}},filters:{transSex:function(t){return["","男","女"][t]}}},i,!1,function(t){a("N4Ab")},null,null);e.default=n.exports},N4Ab:function(t,e){}});
//# sourceMappingURL=3.dfe2f9688456f345beb1.js.map