webpackJsonp([6],{GQxN:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("tB5l");var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"containerBox"},[a("div",{staticClass:"pageTopic"},[a("span",{staticClass:"topicName"},[t._v("处方列表")]),t._v(" "),a("router-link",{attrs:{to:"/prescription/save"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"}},[t._v("添加处方")])],1)],1),t._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.psData}},[a("el-table-column",{attrs:{prop:"psName",label:"处方名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"psAnode",label:"阳极区"}}),t._v(" "),a("el-table-column",{attrs:{prop:"psCathode",label:"阴极区"}}),t._v(" "),a("el-table-column",{attrs:{prop:"psCurrent",label:"电流(μA)"}}),t._v(" "),a("el-table-column",{attrs:{prop:"psDuration",label:"时长(min)"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("el-link",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return t.gotoEdit(e.row.psId)}}},[t._v("编辑")]),t._v("   \n              "),a("el-link",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return t.deletePs(e.row.psId)}}},[t._v("删除")])],1)]}}])})],1)],1),t._v(" "),a("div",{staticClass:"paging"},[a("el-pagination",{attrs:{"current-page":t.paginationData.page,"hide-on-single-page":t.paginationData.size/t.paginationData.pageSize<=1,"page-size":t.paginationData.pageSize,layout:"total, prev, pager, next",total:t.paginationData.size},on:{"current-change":t.changePage}})],1)])])},staticRenderFns:[]};var n=a("VU/8")({data:function(){return{psData:[],paginationData:{page:1,pageSize:10,size:0}}},created:function(){this.initPsList(1)},methods:{initPsList:function(t){this.psData=this.$db.psList()},changePage:function(t){this.initLeaderList(t)},gotoEdit:function(t){this.$router.push("/prescription/"+t+"/save")},deletePs:function(t){var e=this;this.$confirm("是否删除该处方?","提示",{}).then(function(){e.$db.deletePs(t),e.psData=e.$db.psList()})}}},i,!1,function(t){a("LAeG")},null,null);e.default=n.exports},LAeG:function(t,e){}});
//# sourceMappingURL=6.36853616b03d5a08da89.js.map