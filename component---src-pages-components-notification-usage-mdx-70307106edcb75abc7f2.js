"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[35600],{28399:function(t,e,n){n.d(e,{Z:function(){return w}});var a=n(67294),i=n(88650),o=n.n(i),s=n(1597),l=n(64905),c=n(81151),r=n(75900),p=n.n(r);var m=t=>{let{title:e,theme:n,tabs:i=[]}=t;return a.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var d=t=>{let{relativePagePath:e,repository:n}=t;const{site:{siteMetadata:{repository:i}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:l,branch:c}=n||i,r=`${o}/edit/${c}${l}/src/pages${e}`;return o?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:r},"Edit this page on GitHub"))):null},h=n(56328),u=n(51721);let f=function(t){function e(){return t.apply(this,arguments)||this}return(0,u.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:n}=this.props,i=n.split("/").filter(Boolean).slice(-1)[0],l=e.map((t=>{const e=o()(t,{lower:!0,strict:!0}),l=e===i,c=new RegExp(`${i}/?(#.*)?$`),r=n.replace(c,e);return a.createElement("li",{key:t,className:p()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},a.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${r}`},t))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":t},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},e}(a.Component);var g=f,b=n(17680),k=n(75387),A=n(50041);var y=t=>{let{date:e}=t;const n=new Date(e);return e?a.createElement(A.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(A.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=t=>{let{pageContext:e,children:n,location:i,Title:r}=t;const{frontmatter:p={},relativePagePath:u,titleType:f}=e,{tabs:A,title:w,theme:N,description:v,keywords:x,date:T}=p,{interiorTheme:E}=(0,k.Z)(),{site:{pathPrefix:C}}=(0,s.useStaticQuery)("2456312558"),S=C?i.pathname.replace(C,""):i.pathname,R=A?S.split("/").filter(Boolean).slice(-1)[0]||o()(A[0],{lower:!0}):"",I=N||E;return a.createElement(c.Z,{tabs:A,homepage:!1,theme:I,pageTitle:w,pageDescription:v,pageKeywords:x,titleType:f},a.createElement(m,{title:r?a.createElement(r,null):w,label:"label",tabs:A,theme:I}),A&&a.createElement(g,{title:w,slug:S,tabs:A,currentTab:R}),a.createElement(b.Z,{padded:!0},n,a.createElement(d,{relativePagePath:u}),a.createElement(y,{date:T})),a.createElement(h.Z,{pageContext:e,location:i,slug:S,tabs:A,currentTab:R}),a.createElement(l.Z,null))}},2339:function(t,e,n){n.r(e),n.d(e,{_frontmatter:function(){return l},default:function(){return y}});var a=n(45987),i=(n(67294),n(64983)),o=n(28399);const s=["components"],l={},c=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)},r=c("PageDescription"),p=c("InlineNotification"),m=c("AnchorLinks"),d=c("AnchorLink"),h=c("ComponentDemo"),u=c("ComponentVariant"),f=c("Row"),g=c("Column"),b=c("Caption"),k={_frontmatter:l},A=o.Z;function y(t){let{components:e}=t,n=(0,a.Z)(t,s);return(0,i.kt)(A,Object.assign({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(r,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Notifications are messages that communicate information to the user. The three\nvariants of notifications are toast notifications, inline notifications, and\nactionable notifications.")),(0,i.kt)(p,{mdxType:"InlineNotification"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"v11 update:")," An actionable variant has been added to the notification\ncomponent. Actionable notifications allow for interactive elements within a\nnotification, like buttons. Toast and inline notification no longer allow any\ninteractive elements. For v10 implementation guidance, go to\n",(0,i.kt)("a",{parentName:"p",href:"https://v10.carbondesignsystem.com/components/notification/usage/"},"v10 Notification"),".")),(0,i.kt)(m,{mdxType:"AnchorLinks"},(0,i.kt)(d,{mdxType:"AnchorLink"},"Overview"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Live demo"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Formatting"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Content"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Inline notifications"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Toast notifications"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Actionable notifications"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Universal behaviors"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Modifiers"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Related"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Feedback")),(0,i.kt)("h2",null,"Overview"),(0,i.kt)("h3",null,"When to use"),(0,i.kt)("p",null,"Use notifications to inform users of updates or changes to system status.\nCommunicating with users and providing immediate feedback are important for\nbuilding trust. While notifications are an effective method of communicating\nwith users, they are disruptive and should be used sparingly."),(0,i.kt)("p",null,"For more context on when to use each notification variant, including modals,\nrefer to the ",(0,i.kt)("a",{parentName:"p",href:"/patterns/notification-pattern/"},"notifications pattern"),". Carbon\nonly supports inline, toast, actionable, and modal notification variants,\nalthough some product teams also support banners and notification centers."),(0,i.kt)("h3",null,"Variants"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Variant"),(0,i.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#inline-notifications"},"Inline")),(0,i.kt)("td",{parentName:"tr",align:null},"Inline notifications show up in task flows, to notify users of the status of an action. They usually appear at the top of the primary content area.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#toast-notifications"},"Toast")),(0,i.kt)("td",{parentName:"tr",align:null},"Toasts are non-modal, time-based window elements used to display short messages; they usually appear at the top of the screen and disappear after a few seconds.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#actionable-notification"},"Actionable")),(0,i.kt)("td",{parentName:"tr",align:null},"Actionable notifications allow for interactive elements within a notification styled like an inline or toast notification.")))),(0,i.kt)("h2",null,"Live demo"),(0,i.kt)(h,{components:[{id:"toast",label:"Toast notification"},{id:"inline",label:"Inline notification"}],mdxType:"ComponentDemo"},(0,i.kt)(u,{id:"toast",knobs:{ToastNotification:["hideCloseButton","kind","lowContrast"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-notifications--toast",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-notification--toast",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtoastnotification--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-notifications--toast"},mdxType:"ComponentVariant"},'\n    <div>\n      <ToastNotification\n        caption="00:00:00 AM"\n        iconDescription="describes the close button"\n        subtitle={<span>Subtitle text goes here. <a href="#example">Example link</a></span>}\n        timeout={0}\n        title="Notification title"\n      />\n    </div>\n'),(0,i.kt)(u,{id:"inline",knobs:{InlineNotification:["hideCloseButton","lowContrast"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-notifications--inline",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-notification--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvinlinenotification--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-notifications--inline"},mdxType:"ComponentVariant"},'\n  <div>\n    <InlineNotification\n      kind="info"\n      actions={<NotificationActionButton>Action</NotificationActionButton>}\n      iconDescription="describes the close button"\n      subtitle={<span>Subtitle text goes here. <a href="#example">Example link</a></span>}\n      title="Notification title"\n    />\n  </div>\n')),(0,i.kt)("h2",null,"Formatting"),(0,i.kt)("h3",null,"Anatomy"),(0,i.kt)(f,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEEUlEQVQ4y5WUa2gcZRSG38lNVMRGISJRxI1YoyJRUldJEy0q/aFQqSBeKkhRUYnYeos1sTY11QasWPwhFCxVqIQQhQY1P2pECCHERJLs7P0yl53N7uzuzO7O7Mxudje7R2ZyIWqieODhPedj5v3mO4f54Hb2w+0cANt5jHE7++u8Dw/CZt9JLO0+iq3h6uiDb/8n8D02BLezn/E+NAjPgx8y7gcGGM/ej+DpOg5MPXEWU49/ATcOYPH6w5hHB8Sf3XUyERPPVf9GjUmUiInOiHULVz4PIsI8HsUCngTrHIBrzwfAXM8QM9czhCXHG3tdd739ytKtr++Wzk6iRoQ8EQrraq7nGhEiF6bhan/r4Cy6rmZvf9PJ3nGkw9N9Au6u4wwIsOFPXeoU+0b2L3/9ewcRtehFuskkai0RtVq6sp6rJrVKRDfwA6M98UlfW2h44v7AiUt3Bu7tQ7jzGPDNL1l896vaMj5rhJY4TXMHxKwrGMv7OFlnQzF9wSvormBMZ9eJLGd1xSQ9KNfUSIqyiWypspwpj5M2AyIf8OlIEkMX4y1/RErRqFI0lvxi1sfJhp9PGt5IwvCE44ZVW7mXSxhhSTUUg4xYtmbGc6Sl81WSteoEUdXuKQ5/LuHoO3P1MaLW2Pmpbv7cdLdGdLOcpbakSQ5lhRyWqivkyJTJkdDJIaRXHYq+6kjmVh1RtXabkK7eaJnZhiOXRVD700zg5DgWW1/dw7b13scNT0AlQkInJI01TZkEpUhY1giiUkU6X4OsVSFlCKJKqJTz8HgDQDgiIOdjMTs8zyw0HwJ7y0sQLrBMhgjJHUhvIbWuoiiA53lAEIRGnucbhVi0gZtZauRmXXZurdnrgvC/2DTk+bWFSIRv5ASpKSotN4lSrEm09Z8IorS54daNLUMbjuORTUs4N8aCyMRGky3KRJCSGuKKgVhKh5KvIJkx4fe4IIpR+6gbPpvJ1Dy3NiW8CKLaNUTUTES71rU5nllpTumrzctqYZdWousyBbrKel7Vi3813IjnhnwATlk0TMznf1qI5JPhqMx5IwlBSGiCYtSEdL4qqCZF5Fw5k8isnElqFaTz1XpsF2uG7wLobZz2FRdD8QK5AgKxQYnCkkKhqEIhSSHVpFpKXyU5W/pWMWpQTdrJ0A/gEICnmsJyJajlKySlTIopBUpkS5QpkI1qrmk6Xx3VKwS9vIPhs4Nuu3/AwXpWMD+LJ/QfAlJ6JCikvucTubGkVh6Tczajcq48Ec8Ue1WTrC+s29bw5S9z1nFBP56GPBnDbNMzj1wEroj+5revLtoeZm2Q2xpqtuHpa9+z6+CBM3cHXvjKmjJTUKoNRFS/Bauu2/x//y28zgFMdRyBf9/H8N/zPi63vwY6/x8vbYk/ARGpnFgjmqOdAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"notification anatomy image",title:"notification anatomy image",src:"/static/de37ff948b8351839b9907eb11080868/3cbba/01_notification_anatomy.png",srcSet:["/static/de37ff948b8351839b9907eb11080868/7fc1e/01_notification_anatomy.png 288w","/static/de37ff948b8351839b9907eb11080868/a5df1/01_notification_anatomy.png 576w","/static/de37ff948b8351839b9907eb11080868/3cbba/01_notification_anatomy.png 1152w","/static/de37ff948b8351839b9907eb11080868/92c65/01_notification_anatomy.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Icon:")," Informs users of the kind of notification at a glance."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Title:")," Gives users a quick overview of the notification."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Action (actionable only):")," Ghost or tertiary button that allows users to\naddress the notification or navigates them to a page with further details."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Close button (optional):")," Closes the notification."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Message:")," Provides additional detail and actionable steps for the user to\ntake."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Timestamp (optional for toast):")," Shows the time the toast notification was\nsent.")),(0,i.kt)("h2",null,"Content"),(0,i.kt)("p",null,"Notifications provide limited space for content, and therefore the content must\nbe short and concise. A user should be able to quickly scan the notification, be\napprised of the situation, and know what to do next."),(0,i.kt)("h3",null,"Main elements"),(0,i.kt)("h4",null,"Title"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The title should be short and descriptive, explaining the most important piece\nof information."),(0,i.kt)("li",{parentName:"ul"},"When possible, communicate the main message using just the title."),(0,i.kt)("li",{parentName:"ul"},"Use a period only if the title is a full sentence."),(0,i.kt)("li",{parentName:"ul"},"When using rich text, such as in a title, a screen reader will read aloud the\nentire message as one sentence. Since the message will be read as one string,\nmake sure that any text styling does not convey meaning.")),(0,i.kt)("h4",null,"Body content"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Be concise and avoid repeating or paraphrasing the title."),(0,i.kt)("li",{parentName:"ul"},"Limit content to one or two short sentences."),(0,i.kt)("li",{parentName:"ul"},"Explain how to resolve the issue by including any troubleshooting actions or\nnext steps. You can include links within the notification body that redirect\nthe user to next steps by using an actionable notification.")),(0,i.kt)("h4",null,"Action (actionable only)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Only actionable notifications can contain interactive elements such as a link\nor button."),(0,i.kt)("li",{parentName:"ul"},"Keep labels concise and clearly indicate the action the user can take."),(0,i.kt)("li",{parentName:"ul"},"Limit action labels to one or two words. For a list of recommended action\nlabels, see Carbon’s\n",(0,i.kt)("a",{parentName:"li",href:"https://www.carbondesignsystem.com/guidelines/content/action-labels"},"content guidelines"),".")),(0,i.kt)("h3",null,"Overflow"),(0,i.kt)("p",null,"If a toast or inline notification requires a message longer than two lines, use\nan actionable notification and include a short message with a “View more” link\nthat takes the user to a view of the full notification message. This can be\neither a full page with more details or a modal."),(0,i.kt)("h3",null,"Further guidance"),(0,i.kt)("p",null,"For further content guidance, see Carbon’s\n",(0,i.kt)("a",{parentName:"p",href:"/guidelines/content/overview"},"content guidelines"),"."),(0,i.kt)("h2",null,"Inline notifications"),(0,i.kt)("p",null,"Inline notifications show up in task flows, to notify users of the status of an\naction or system. They usually appear at the top of the primary content area or\nclose to the item needing attention."),(0,i.kt)("h3",null,"Inline formatting"),(0,i.kt)(f,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAACNElEQVQ4y4WUy28SURTG+//5F7hx7c69KQltZeOKsHKDcUpAHoWKjsOriEB1AZYWElNCo4CPgAkYh3kyr8+cCzNMW7Q3+e5Mbs79zfnOPXN38P/h0GTbtkPDv7Y12HGwQ1OzeYp8/jUEQfDE8zwymQx6vZ4HePe+5iQzKWSPczg6zjJlX+XwMpVE57zDYnZoap91wAslnJxU0Gw20Wg00O12MRqNnNlstsrKgXM26OLDZdtpX12gNThf6eoCHy8/YTz5vgEO+j0UCwIqlQpTsVhEv98nqzAMg1khKbIMSZKgaRo0VYWmakyqqrI4BqRN9paqmKYJURTZ5nUdYVome1q0xyfLsjZA+rJhLNmCK4IRaLFYXAeaJizbuga7BXSz8QNdLZdLFuxavgm6KS/Du4Z/w11xDDiZTDAcDulUPY3HY7Y2n8+9HtN1nR2AoiiQ1wdE7yRy42VYrVaRSCRY36XTafZMpVLguEPqQy+DXC6HSCSCaDQKjuMQi8XYezgcRr1e3wC32rZM76ew1nbj8TiCwSBKpRKm0ykkWQXPv0UgEGDt5gEpdWoR0h9RhCyJGP5cIHUqY/TL8MDJZBKhUAj1Wg3j0Vd8+/IZAp/H/v4Bc+kBqQYEdSXLEn6LCn7MTCg6OVhlSDafhELY232M+w8e4t6jN9h9GsfBXgCFYmkDpF5zi+sVWdfh2BYc3wmXy2VWNwJHn3N4FiuAi2dxyL1Aq9Xe9KFbR7/8l8o/6wzr1m3zF63XVKMLw6YJAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of inline notification with action button",title:"Example of inline notification with action button",src:"/static/28f277f4c145569ff414e686a713489f/3cbba/02_notification_format_608.png",srcSet:["/static/28f277f4c145569ff414e686a713489f/7fc1e/02_notification_format_608.png 288w","/static/28f277f4c145569ff414e686a713489f/a5df1/02_notification_format_608.png 576w","/static/28f277f4c145569ff414e686a713489f/3cbba/02_notification_format_608.png 1152w","/static/28f277f4c145569ff414e686a713489f/92c65/02_notification_format_608.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h4",null,"Sizing"),(0,i.kt)("p",null,"The width of inline notifications varies based on content and layout. They can\nexpand to the fill the container or content area they relate to. Their height is\nbased on the content length, which should not exceed two lines of text."),(0,i.kt)("h4",null,"Placement"),(0,i.kt)("p",null,"Inline notifications appear near their related items. They can expand to fill\nthe width of the container or content area they are in and should align to the\ngrid columns."),(0,i.kt)("p",null,"We recommend placing inline notifications at the bottom of forms, just above the\nsubmission and cancel buttons. When error notifications apply to individual text\ninputs, they should supplement the error state on that specific input field."),(0,i.kt)(f,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"99.65277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADAUlEQVQ4y62UTW8bVRSGI0E3jakntmfsJJXy5RnPZDx2sONvj8emIdNCVYkF27KvBMqigKjiViy6SaomGBGgoHTJn+EPIDZxssAhsAWxgKc6N85nE8qCxaP3eHznvWfuueeMTE1N8X8ykkgkuIx4PP6fOP3OiGEYCOPj4ySTyWMmJiaYnJxU+irk3SMfZajrOtlslnq9TrVapVKpYNs26XQa0zRfQp4Lc3NzuK6rYslOGYqZBI7jUC6XKRaLFAoFPM9Ti2Wj85rP5xWyRjaemZk5MTzKMOd5tHyfZqNBs9mkHQQErRZBENDpdPDlWbtNrVplYWGBYqGgVAynp6dJ6OcyNDMZ5l1Xaca2FVYmo5DYtCylactiZnb2BDOtDPXzGRZcF3+xRMnzKOdyispQT8eVXJ5qfmFInhtvFrBm54ifNkzoOs1sltuNJu/UG4S1Osu1GuElLA+R+J4f4KZNYon40FDX0Q0Dz7apSRZuFlc+0zSxLQvbvBxZI0dxpijqDHUdZ36ebC6HZdvYjqN+vxLHUZW/sMryp1R2aWmJRqOhrs/i4uK/UiqVVNXlPr5kOO841NuBMhPkkh9Rq9UuRBpAGuHMxU4lU4xGIty/+wH89DN7e3vs9Pvs7u7S7/fZ2dlhMBhw8Nvv7P96oPhlsM9g/4A//vyLv/+B5fAmkcgoqVSKEelbbUzjdqfDs/UnbG5usrGxoZBY6PU22fryCV/11hVbvXW+7q3zbOsp299+QbmYI6ppagaookhzL4ch7965QxiGx8jOt8Il/LffZ6zzPbEbzxl7a5vR1nMiwTaj/ndc7fxAovoAIxZBN1KH40smxsrKCmtra3S7XVZXVw+1+5DPu59y78E3XP8Ypj+D65/AtQ8h+hFERe+D9t6PGNHX0JMThxnKt8sBt1otfN9XekhAu9Wk4t8iVumilR8xVnlIvPpoSJdY/TEJ7y5G/Bq6kTypsqZpRKPRC9Gib2BoV0hqV5Se5XWM2FVlJvf5eDicHq4XoSfHL8dIcdRxLwBYuoQXXUUA4AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of inline notification placement",title:"Example of inline notification placement",src:"/static/f2c2155eeaf04afbaad67cc4679c4697/3cbba/03_notification_placement_inline_608.png",srcSet:["/static/f2c2155eeaf04afbaad67cc4679c4697/7fc1e/03_notification_placement_inline_608.png 288w","/static/f2c2155eeaf04afbaad67cc4679c4697/a5df1/03_notification_placement_inline_608.png 576w","/static/f2c2155eeaf04afbaad67cc4679c4697/3cbba/03_notification_placement_inline_608.png 1152w","/static/f2c2155eeaf04afbaad67cc4679c4697/92c65/03_notification_placement_inline_608.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"Example of an inline notification supporting an error message on a form"))),(0,i.kt)("h3",null,"Dismissal"),(0,i.kt)("p",null,"Inline notifications do not dismiss automatically. They persist on the page\nuntil the user dismisses them or takes action that resolves the notification."),(0,i.kt)("p",null,"A small “x” in the top right corner is used to dismiss inline notifications.\nIncluding the close button is optional and should not be included if it is\ncritical for a user to read or interact with the notification."),(0,i.kt)("h2",null,"Toast notifications"),(0,i.kt)("p",null,"Toasts are non-modal, time-based window elements used to display short messages;\nthey usually appear at the top of the screen and disappear after a few seconds."),(0,i.kt)("h3",null,"Toast formatting"),(0,i.kt)(f,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABJ0lEQVQoz42RvUrEQBDH17zcYWGwD9dEwj2AGCtbAweCSOzS5M6QwGkR8gB5ACuxUyyyEiWgxaFckY/9y0xuj+AXN/BnJjszv8zOCmxhXdcpbGkiz3MEQYD5fI4wDDeazfhbVVXFsNVqpdI0VVEUIUkSxHHMoph6syxDXdcQpmlCCAHDMNjvCMH+8GSK4OoaD49PxFNUXJYliqKAlJJ9+fKK+7tb7Ju7cN3jfkLf92FZFiaTCRzHYdn2AbzpGc4vLiHls772r1f8eH+DPR7j1PN64N97a9HUNYOUUmjbFk3TbEQTk1VSYm80wpHr9kBK6IKhGga0DNLAoaiHlvu5XOJmsQC9BQMpSVN8b9DSE+oaArFfx8NVUCyo+D8N9/cjvz7TP6EJvwDujjoJ4lTL8gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of toast notification with action button and time stamp",title:"Example of toast notification with action button and time stamp",src:"/static/58e54a7c2f33e8940762900b10458d95/3cbba/04_toast_format_608.png",srcSet:["/static/58e54a7c2f33e8940762900b10458d95/7fc1e/04_toast_format_608.png 288w","/static/58e54a7c2f33e8940762900b10458d95/a5df1/04_toast_format_608.png 576w","/static/58e54a7c2f33e8940762900b10458d95/3cbba/04_toast_format_608.png 1152w","/static/58e54a7c2f33e8940762900b10458d95/92c65/04_toast_format_608.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h4",null,"Time stamp"),(0,i.kt)("p",null,"Toast notifications can include a time stamp at the bottom the container. The\ntime stamp shows the time the notification was sent. Using time stamps is\noptional but toasts should be consistent across the product so either all toasts\nshould include time stamps or none of them should. The time stamp is optional\nand can be removed if a third line of content is needed."),(0,i.kt)("h4",null,"Sizing"),(0,i.kt)("p",null,"Toast notifications use a fixed width and their height depends on the length of\nthe notification message. As noted in the content guidelines, limit toast\nnotifications to two lines of text."),(0,i.kt)("h4",null,"Placement"),(0,i.kt)("p",null,"Toast notifications slide in and out from the top right of the screen. They\nstack with ",(0,i.kt)("inlineCode",{parentName:"p"},"$spacing-03")," in-between. New toast notifications should appear at\nthe top of the list, with older notifications being pushed down until they are\ndismissed."),(0,i.kt)(f,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("img",{src:"/ce70785b5526700899acb8c7c7ed02d7/05_toast_context_608.gif",alt:"Example of toast notification placement"}))),(0,i.kt)("h3",null,"Dismissal"),(0,i.kt)("p",null,"Toast notifications persist by default. Toasts do have the option to timeout and\ndismiss automatically after five seconds on the screen. They can also include a\nclose button so users can dismiss them sooner. Toasts cover content on the\nscreen so they should always be easily dismissed. Because toast notifications\ncan dismiss automatically, users should be able to access them elsewhere after\nthe toast disappears. This allows them to be accessible for users who need more\ntime reading the notification or who may want to refer back to the notification."),(0,i.kt)("h2",null,"Actionable notifications"),(0,i.kt)("p",null,"Actionable notifications allow for interactive elements within a notification\nstyled like an inline or toast notification. Actionable notifications, since\nthey require user interaction, take focus when triggered and can be highly\ndisruptive to screen readers and keyboard users. With actionable notifications,\nonly one action is allowed per notification. This action frequently takes users\nto a flow or page related to the message, where they can resolve the\nnotification. Consider using a notification center where a user can revisit and\nact on past notifications."),(0,i.kt)("h3",null,"Formatting"),(0,i.kt)("h4",null,"Inline"),(0,i.kt)("p",null,"Actionable inline notifications have a ghost button action that is adjacent to\nthe title and body content. On mobile screens the action button wraps under the\nbody content. This button should allow users to take further action on the\nnotification."),(0,i.kt)("h4",null,"Toast"),(0,i.kt)("p",null,"Actionable toast notifications can include a button at the end of their body\ncontent. This button should be short and navigate users to a page or modal where\nthey can take action to address the notification or find further information.\nBecause toast notifications automatically dismiss, it is important that there\nare alternative routes to navigate to the link destination."),(0,i.kt)(f,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADCklEQVQ4y42UzW4cRRDHazf27l65I3GBK/a2d2e6qrunZ2ZnZ70zs3Liw+LIsgSJ5DWeCBJkh2hXKFFyjASXKDlEAefOK/ACHHKwfOTDwvAA5hBLJqhQD7GFJYgo6aepnm79q1pV1QCvTT+4DBHfg5TvAl4JQSUBJHEPoiiCOI7BGAOe5wEigtYalFIQhmHNWgv/aur+CvT4IaT8sI6ZuY6G7hljplrrmQMRZ57nzaSUUyJ6gIgjF0RrXftPQXu6A8VvnzfkOPzRFjFfHa/x+IMxr62t8erqKhMRSynZGMNKqW9d9tbauTdk+Bgy/npeRup7JYnzIj/JsuzUkef5KRGdSilfOlHf95+56yPipTcIPoKMn87LnnqhSHG/338VxzFHUcRBEFTZIeIfiOj8PSICIrooeHh4WPHhk09r7/B9uMLf/C2IivOi+HM0GnFRFGytPRN85b5Syue+70OSJHMHBwfnOucOv2T47uQFAAO0Ved90RZaCIGLi4skhKClpSVqt9vORyGEWVhYeHdjYwOY+VzjTLB5xk+HPzd//eGXJvwPc0L7+/uto6Oj5j814PeTk9rzL7+au7uz05jOZo3pF7NG+cmN1mQyaU22Jq2tra0Kt97c3Ky4du166+PtsnnnznR+9/btxu7ubmNvb+/S8fFxvYpW9gcwDiNYHg4hyzJYWVmBoiig3+9DmqYwHA5hMBjA8vJy9S8ILIRRAjbsgbVh1fzuXGXrpOAjHZiM1Gc2DLejKCqTJCnjOC6NMWUQBGUYhqW1tiIITImIJSldEukSibaVUjellO+5SYJb2sINEz5Z1wEPhkMu8pxdZfM8d23Dg8GgwvlpmnKv12OJxCZM2YR9JmVYa+2qvu6qDiOl4aoO3val7Hq+35ZSik6nI7rdrkDECud7nid83xduHx2kBJKu9n3f7yDiW67R4bI2sK6DauglSteo0O12q4fAPQBu7XwXXUpZ4c6SMhWIBFL68HpqAMbKwIYOahFSXWldN8bUtdYXUEpdQCLWSekKRKojYv0s2F9lm1W0rATXLAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of actionable notifications",title:"Example of actionable notifications",src:"/static/af98c70faf90c21541638fdab0449a70/3cbba/07_actionable_types_608.png",srcSet:["/static/af98c70faf90c21541638fdab0449a70/7fc1e/07_actionable_types_608.png 288w","/static/af98c70faf90c21541638fdab0449a70/a5df1/07_actionable_types_608.png 576w","/static/af98c70faf90c21541638fdab0449a70/3cbba/07_actionable_types_608.png 1152w","/static/af98c70faf90c21541638fdab0449a70/92c65/07_actionable_types_608.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"Actionable toast notification (top); actionable inline notification (bottom)"))),(0,i.kt)("h3",null,"Dismissal"),(0,i.kt)("p",null,"All notifications, including actionable, persist by default until a user\ndismissed them. If using inline styling refer to\n",(0,i.kt)("a",{parentName:"p",href:"#inline-notifications"},"inline notifications")," for inline dismissal. If using\ntoast styling for an actionable notification, then the notification should\nremain on screen until the user dismisses it. With the notification remaining\nopen, the user has enough time to interact with the button without the toast\nclosing too soon. Refer to ",(0,i.kt)("a",{parentName:"p",href:"#toast-notifications"},"toast notifications")," for\nfurther information."),(0,i.kt)("h2",null,"Universal behaviors"),(0,i.kt)("h3",null,"Interactions"),(0,i.kt)("h4",null,"Mouse"),(0,i.kt)("p",null,"Notifications are system generated. A user can close a dismissible notification\nby clicking the close ",(0,i.kt)("inlineCode",{parentName:"p"},"x")),(0,i.kt)("h4",null,"Keyboard"),(0,i.kt)("p",null,"For actionable notifications, the action gets focus first. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"Tab")," to move\nbetween action and the close ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),". To close notifications, press ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter"),"\nor ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," while the close ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," has focus or use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Esc")," key."),(0,i.kt)("h4",null,"Screen readers"),(0,i.kt)("p",null,"VoiceOver: To close notifications, press ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," while the close ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),"\nhas focus or use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Esc")," key."),(0,i.kt)("p",null,"JAWS: To close notifications, press ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," while the close ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," has\nfocus or use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Esc")," key."),(0,i.kt)("p",null,"NVDA: To close notifications, press ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," while the close ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," has\nfocus or use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Esc")," key."),(0,i.kt)("h2",null,"Modifiers"),(0,i.kt)("h3",null,"High and low contrast"),(0,i.kt)("p",null,"Carbon supports high and low contrast style notifications. High-contrast\nnotifications are best for critical messaging while low-contrast notifications\nare less visually disruptive for users."),(0,i.kt)("p",null,"It’s up to the product team to decide which notification style to use in their\nproduct. Inline and toast notifications can use different styles but you should\nnever mix styles within each notification variant. When in doubt, use\nlow-contrast notifications."),(0,i.kt)(f,{mdxType:"Row"},(0,i.kt)(g,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABbElEQVQ4y7WTzU4CMRSFeRfWLFiRgbCdEPEJfAxWrIBoDIGFC/c+AC9gwoIVMcYEcOfMOJEhkBkkCvI7M6XtHNPioC7E+EOTr/e0TU/uvU0jABAEARhjv4JSCs45Qp+ImP5jhD4RMbm+h7OLcxyfnqBaraJSqaBcLqNQKHxJsVhEqVRCPp9HrVaTZiJTaThbzqEeHSKhJJA9yCKTyUBVVSSTyS3pdBqpVEpGRVEQi8UQj8cRjUaRy+WkoWiBNGScwepa0DUdhmHA0A0ZTdP8Fl3X4TjOHnsohKidMipf7Ee83RGlhj67Mwx2sOuVecCxYh68gMDH+gN0q4nUdLvncgKPE7jcBwnW7z0UwqM+LkdXaAxuUNeaqOtNNB6u0ZkZaE8NGVsTDe2pjtaLhs7sHnfrPjTax61rouc/fjb0GcGAjGCTJ1gLB73VEL2ls9HLDd25LdfW3JbnQzaGw8aw6TMmbLHnnyIWfyXM8BVIUrxjOwzZawAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"High and low contrast inline notifications",title:"High and low contrast inline notifications",src:"/static/a638c39e0659b54518fe481b8c41eddc/3cbba/06_notification_contrast_608.png",srcSet:["/static/a638c39e0659b54518fe481b8c41eddc/7fc1e/06_notification_contrast_608.png 288w","/static/a638c39e0659b54518fe481b8c41eddc/a5df1/06_notification_contrast_608.png 576w","/static/a638c39e0659b54518fe481b8c41eddc/3cbba/06_notification_contrast_608.png 1152w","/static/a638c39e0659b54518fe481b8c41eddc/92c65/06_notification_contrast_608.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"High contrast notification (top); low contrast notification (bottom)"))),(0,i.kt)("h2",null,"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.carbondesignsystem.com/components/modal/usage/"},"Modal component")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.carbondesignsystem.com/patterns/notification-pattern"},"Notifications pattern"))),(0,i.kt)("h2",null,"Feedback"),(0,i.kt)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"},"GitHub"),"."))}y.isMDXComponent=!0}}]);