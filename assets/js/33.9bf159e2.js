(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{534:function(e,a,t){"use strict";t.r(a);var n=t(6),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"language-MSSQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("--2. 获取当前DeptCode的所有下级数据 \n\nWITH Depart(CompanyCode, DeptCode, DeptName, DeptName_EN, PDeptCode, LVL, Indept,VirtualDeptYN,HeadQuarterCode,LevelNum) \n AS\n ( \n  SELECT CompanyCode, DeptCode, DeptName, DeptName_EN, PDeptCode, LVL, Indept,VirtualDeptYN,HeadQuarterCode, 0 as LevelNum  \n  FROM ArisamDB.dbo.tb_Department   \n  WHERE DeptCode = 'C60AA000' \n  UNION ALL  \n  SELECT a.CompanyCode, a.DeptCode, a.DeptName, a.DeptName_EN, a.PDeptCode, a.LVL, a.Indept,a.VirtualDeptYN,a.HeadQuarterCode, LevelNum+1 as LevelNum \n  FROM ArisamDB.dbo.tb_Department a INNER JOIN Depart b on a.PDeptCode = b.DeptCode \n )  \n \nSELECT * FROM Depart ORDER BY  Depart.LevelNum ASC \n \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br")])])])}),[],!1,null,null,null);a.default=s.exports}}]);