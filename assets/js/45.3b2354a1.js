(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{566:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("sql server 中，如果想知道有哪些语句是执行效率不高的，应该如何查看呢？下面就将为您介绍 sql server 中如何查看执行效率不高的语句，供您参考。\n在测量功能时，先以下命令清除 sql server 的缓存")]),s._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("dbcc")]),s._v(" freeProcCache\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在点击某个按钮,执行完后,再执行下面语句,就可以知道系统运行什么 Sql 和多少次了,其主要慢语句是那些了;")]),s._v(" "),a("div",{staticClass:"language-SQL line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" creation_time  N"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'语句编译时间'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("last_execution_time  N"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'上次执行时间'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total_physical_reads N"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'物理读取总次数'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total_logical_reads"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("execution_count N"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'每次逻辑读次数'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total_logical_reads  N"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'逻辑读取总次数'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total_logical_writes N"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'逻辑写入总次数'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("execution_count  N"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'执行次数'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total_worker_time"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" N"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'所用的CPU总时间ms'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total_elapsed_time"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("  N"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'总花费时间ms'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total_elapsed_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" execution_count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("  N"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'平均时间ms'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("SUBSTRING"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("st"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("qs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("statement_start_offset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v(" statement_end_offset\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" DATALENGTH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("st"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" qs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("statement_end_offset "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" qs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("statement_start_offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" N"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'执行语句'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dm_exec_query_stats "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" qs\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CROSS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("APPLY")]),s._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dm_exec_sql_text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("qs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sql_handle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" st\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" SUBSTRING"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("st"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("qs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("statement_start_offset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v(" statement_end_offset\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" DATALENGTH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("st"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" qs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("statement_end_offset "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" qs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("statement_start_offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%fetch%'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v("  total_elapsed_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" execution_count "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);