(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{560:function(s,t,n){"use strict";n.r(t);var a=n(6),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"language-SQL line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查看MSSQL死锁")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 当出现死锁或者堵塞现象，就会在执行结果中罗列出来")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- blocking_session_id 表示阻塞session id的id")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- session id表示被阻塞的id")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" CTE_SID "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BSID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sql_handle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" blocking_session_id "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          session_id "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          sql_handle\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" sys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dm_exec_requests\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" blocking_session_id "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNION")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" A"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("blocking_session_id "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    A"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("session_id "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    A"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sql_handle\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" sys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dm_exec_requests A\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" CTE_SID B "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" A"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SESSION_ID "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" B"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BSID "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" C"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BSID "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       C"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SID "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("login_name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("host_name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cpu_time "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("memory_usage "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("last_request_start_time "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("last_request_end_time "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("logical_reads "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       S"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("row_count "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" CTE_SID C\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" sys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dm_exec_sessions S "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" C"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sid "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("session_id "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CROSS")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("APPLY")]),s._v(" sys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dm_exec_sql_text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("C"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sql_handle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Q\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" sid  \n \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);