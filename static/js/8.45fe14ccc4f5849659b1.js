webpackJsonp([8],{"2S0S":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("woOf"),n=e.n(i),s=(e("tB5l"),{data:function(){return{paginationData:{page:1,pageSize:10,size:0},treatmentRecordListData:[],treatmentStatData:{actualDays:0,shouldDays:0,missingDys:""},dialogVisible:!1}},created:function(){var t=this.$route.params.caseId;this.initRecordList(t)},methods:{initRecordList:function(t){var a=this;this.treatmentRecordListData=this.$db.treatmentRecordList(t).map(function(t){var e=a.$db.treatment(t.tmId),i=n()({},t),s=Date.parse("1970-1-1 "+e.beginInterval),r=Date.parse("1970-1-1 "+e.endInterval),o=Date.parse("1970-1-1 "+t.treatTime);return s<=o&&o<=r&&(i.treatTimeOk=!0),i.shouldBeginInterval=e.beginInterval,i.shouldEndInterval=e.endInterval,t.duration==e.duration&&(i.durationOK=!0),i.shouldDuration=e.duration,i})},statistics:function(){this.dialogVisible=!0},changePage:function(t){this.initRecordList(t)}}}),r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"containerBox"},[e("div",{staticClass:"pageTopic"},[e("span",{staticClass:"topicName"},[t._v("治疗记录")]),t._v(" "),e("span",[e("el-button",{attrs:{type:"primary"},on:{click:t.statistics}},[t._v("统计")]),t._v(" "),e("el-button",{on:{click:t.back}},[t._v("返回")])],1)]),t._v(" "),e("div",{staticClass:"list"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.treatmentRecordListData}},[e("el-table-column",{attrs:{prop:"treatDate",label:"治疗日期"}}),t._v(" "),e("el-table-column",{attrs:{prop:"treatTime",label:"治疗时间"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{class:a.row.treatTimeOk?"success":"danger"},[t._v(t._s(a.row.treatTime))]),t._v(" ("+t._s(a.row.shouldBeginInterval+"-"+a.row.shouldEndInterval)+")\n            ")]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"duration",label:"治疗时长(min)"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{class:a.row.durationOK?"success":"danger"},[t._v(t._s(a.row.duration))]),t._v(" ("+t._s(a.row.shouldDuration)+")\n")]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"anode",label:"阳极区"}}),t._v(" "),e("el-table-column",{attrs:{prop:"cathode",label:"阴极区"}}),t._v(" "),e("el-table-column",{attrs:{prop:"current",label:"电流(μA)"}})],1)],1),t._v(" "),e("el-dialog",{attrs:{title:"统计信息",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(a){t.dialogVisible=a}}},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("理论应治疗天数2天，实际治疗天数"),e("span",{staticClass:"danger"},[t._v("1")]),t._v("天"),e("br"),t._v("缺失日期："),e("span",{staticClass:"danger"},[t._v("2023-8-17")])]),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:function(a){t.dialogVisible=!1}}},[t._v("关 闭")])],1)]),t._v(" "),e("div",{staticClass:"paging"},[e("el-pagination",{attrs:{"current-page":t.paginationData.page,"hide-on-single-page":t.paginationData.size/t.paginationData.pageSize<=1,"page-size":t.paginationData.pageSize,layout:"total, prev, pager, next",total:t.paginationData.size},on:{"current-change":t.changePage}})],1)],1)])},staticRenderFns:[]};var o=e("VU/8")(s,r,!1,function(t){e("3Qpo")},"data-v-ba48ca60",null);a.default=o.exports},"3Qpo":function(t,a){}});
//# sourceMappingURL=8.45fe14ccc4f5849659b1.js.map