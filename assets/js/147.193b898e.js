(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{2361:function(t,e,a){t.exports=a.p+"assets/img/1661596655330-55288965-9281-4c56-924c-b3f07951093f.7161b405.png"},2362:function(t,e,a){t.exports=a.p+"assets/img/1661596715954-2bc1af96-68be-445a-9509-f1bd225109b5.acfb5c14.png"},2363:function(t,e,a){t.exports=a.p+"assets/img/1661596833979-0efa39c3-d2c7-4464-b2ef-db1f1f62759e.a994060c.png"},2364:function(t,e,a){t.exports=a.p+"assets/img/1661597383081-351322c2-a214-4ffd-8878-a718d51b5e64.319568ea.png"},3299:function(t,e,a){"use strict";a.r(e);var s=a(64),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"webgrind-fileviewer-phtml-任意文件读取漏洞-cve-2018-12909"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webgrind-fileviewer-phtml-任意文件读取漏洞-cve-2018-12909"}},[t._v("#")]),t._v(" Webgrind fileviewer.phtml 任意文件读取漏洞 CVE-2018-12909")]),t._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),e("p",[t._v("Webgrind是一套PHP执行时间分析工具。其中Webgrind 1.5版本中存在安全漏洞，该漏洞源于程序依靠用户输入来显示文件。攻击者可以通过漏洞读取服务器敏感文件")]),t._v(" "),e("h2",{attrs:{id:"漏洞影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),e("a-checkbox",{attrs:{checked:""}},[t._v("Webgrind <= 1.5")]),e("br"),t._v(" "),e("h2",{attrs:{id:"网络测绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),e("a-checkbox",{attrs:{checked:""}},[t._v('app="Webgrind"')]),e("br"),t._v(" "),e("h2",{attrs:{id:"漏洞复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),e("p",[t._v("主页面")]),t._v(" "),e("p",[e("img",{attrs:{src:a(2361),alt:"img"}})]),t._v(" "),e("p",[t._v("方法调用在 index.php 中")]),t._v(" "),e("p",[e("img",{attrs:{src:a(2362),alt:"img"}})]),t._v(" "),e("p",[t._v("当参数为 fileviewer 时，将参数传递包含在文件 templates/fileviewer.phtml 中")]),t._v(" "),e("p",[e("img",{attrs:{src:a(2363),alt:"img"}})]),t._v(" "),e("p",[t._v("参数 file 传入 "),e("code",[t._v("fileviewer.phtml")]),t._v(" 通过函数 "),e("code",[t._v("highlight_file")]),t._v(" 显示在页面中， 验证POC")]),t._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("php"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("op"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("fileviewer"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("file"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("passwd\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(2364),alt:"img"}})])],1)}),[],!1,null,null,null);e.default=r.exports}}]);