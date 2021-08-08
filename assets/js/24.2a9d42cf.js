(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{548:function(v,_,t){"use strict";t.r(_);var l=t(6),a=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"一-业务建模"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-业务建模"}},[v._v("#")]),v._v(" 一.业务建模")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("1.业务用例图：用于显示当前业务中哪些用户角色会使用到的业务功能点，主要用来描述角色以及角色与用例之间的连接关系。说明的是谁要使用系统，以及他们使用该系统可以做些什么。")])]),v._v(" "),t("li",[t("p",[v._v("2.业务活动图：用于显示当前某个业务功能点的生命周期。")])]),v._v(" "),t("li",[t("p",[v._v("3.业务泳道图：泳道将活动图中的活动划分为若干组，并把每一组指定给负责这组活动的业务组织，即对象。泳道添加对应的角色名称，")]),v._v(" "),t("p",[v._v("在活动图中，泳道区分了负责活动的对象，它明确地表示了哪些活动是由哪些对象进行的。在包含泳道的活动图中，每个活动只能明确地属于一个泳道。")])])]),v._v(" "),t("h2",{attrs:{id:"二-用例建模"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-用例建模"}},[v._v("#")]),v._v(" 二.用例建模")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("1.用例图：用于显示当前业务中哪些用户角色会使用到的业务功能的操作点，比业务用例图更加详尽。")])]),v._v(" "),t("li",[t("p",[v._v("2.用例规约：用于描述基本事件流中若还有子流程，对子流程进行单独命名，并写出子流程的详细流程。基本流中随时可以触发的操作，需要在备选流程中单独表示，主要包括用例名称，用例简述，用例图，前置条件，后置条件，基本流程，备用流程，补充说明。")])])]),v._v(" "),t("h2",{attrs:{id:"三-用例分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-用例分析"}},[v._v("#")]),v._v(" 三.用例分析")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("1.时序图：从某个角色出发，将这个对象需要处理的业务一次在时间和空间展现出来。并将所有业务用例图中的角色进行拆解。侧重于用消息时间的排列关系。")])]),v._v(" "),t("li",[t("p",[v._v("2.协作图：从某个角色出发，将这个角色需要交互的各种角色显示出来，将各个角色需要的用例进行操作拆解。侧重于角色之间的协作排列关系。")])]),v._v(" "),t("li",[t("p",[v._v("3.参与类类图：从用例图出发，将这个用例中可能会涉及的用例实现，绘制与之相关的类图。用于表示可能会用到的类或接口。")])]),v._v(" "),t("li",[t("p",[v._v("4.业务模块图：根据用例和用例规约，构建业务模块，表示业务模块分类。")])])]),v._v(" "),t("h2",{attrs:{id:"四-系统业务各维度拆解设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四-系统业务各维度拆解设计"}},[v._v("#")]),v._v(" 四.系统业务各维度拆解设计")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("1.业务流程图：从某个角色下的某个业务功能点出发，将这个角色需要处理的业务进行细分，直到这个业务功能点进行闭环操作。")])]),v._v(" "),t("li",[t("p",[v._v("2.业务工作流图：从流程方面出发，将某个业务功能需要涉及的各个角色，各个操作环节进行细分，直到这个业务功能点进行闭环操作。")])]),v._v(" "),t("li",[t("p",[v._v("3.数据流程图：从数据流向的角度，将某个用例下的功能点进行数据流向的细分和拆解，直到业务数据的生命周期失效或者关闭。")])]),v._v(" "),t("li",[t("p",[v._v("4.系统功能图：从系统使用的角度，系统功能菜单进行细分，划分不同角色下的权限显示问题。")])]),v._v(" "),t("li",[t("p",[v._v("5.人员权限清单：从用例图结合业务流图，整理现有各个角色下的不同功能，以及当前功能的说明。")])]),v._v(" "),t("li",[t("p",[v._v("6.系统 ER 图：根据现有用户用例整理现有系统ER图，并将现有系统ER 图根据用例和业务模块进行拆分，对照现有系统字段，提取重构的ER模型，并整理数据流图")])]),v._v(" "),t("li",[t("p",[v._v("7.包图和接口：从系统功能图出发，罗列现有功能的包图，用于表示实现当前功能需要的类，接口，组件，节点，协作，用例和图，其他包。是对需求的高阶概述，并用于组织业务 Code 源代码。")])])]),v._v(" "),t("h2",{attrs:{id:"五-架构设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五-架构设计"}},[v._v("#")]),v._v(" 五.架构设计")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("1.业务架构设计文档，包括各个业务域，核心业务域与非核心业务域，主流程，辅助流程，业务规则分离等方面。")])]),v._v(" "),t("li",[t("p",[v._v("2.应用架构设计文档，包括当前应用的使用分布式应用还是垂直应用架构或者单一应用，表述当前系统应用模块拆解原则，具体拆解，系统服务拆分，服务依赖等。")])]),v._v(" "),t("li",[t("p",[v._v("3.数据架构设计文档，包括支持当前业务架构与应用架构需要支撑的数据架构设计，数据库集群设计，数据库分库分表，数据总线等。")])]),v._v(" "),t("li",[t("p",[v._v("4.技术架构设计文档，包括系统概要设计文档，数据库结构设计文档，系统技术架构文档（技术选型，开发环境，数据驱动设计与ORM建立，通用业务功能以及常用工具类设计，权限设计，外部以及内部接口设计，系统配置管理，定时，缓存，支付，文档附件，通信协议等）")])]),v._v(" "),t("li",[t("p",[v._v("5.系统服务运维实施架构文档，包括系统部署图（用于说明系统部署方案与硬件基础设施，云配置），系统负载测试方案，各项测试标准，系统自动化运维部署与实施方案，系统稳定性监控与实施方案。")])]),v._v(" "),t("li",[t("p",[v._v("6.系统流量架构设计文档，包括大流量并发方案（分流，降级，限流），秒杀活动方案(Redis)")])]),v._v(" "),t("li",[t("p",[v._v("7.系统数据分析设计文档，包括冷热数据分离方案，数据分析工具，数据分析方式与工具，系统数据分析环境与实方案。")])]),v._v(" "),t("li",[t("p",[v._v("8.系统安全架构设计文档，从安全角度说明系统安全处理的整个过程的使用方案，工具，包括网站XSS攻击预防，CSRF攻击预防,SQL 注入攻击预防，文件上传漏洞攻击预防，DDos攻击预防，恶意接口调用攻击预防，内外接口调用频度方案等。")])]),v._v(" "),t("li",[t("p",[v._v("9.系统技术栈说明文档，包括文档工具，原型工具，操作系统，SSH 工具，FTP 工具，开发环境工具与开发语言，服务中间件的选型，与相关技术栈。")])])])])}),[],!1,null,null,null);_.default=a.exports}}]);