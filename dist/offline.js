(()=>{var du=Object.defineProperty;var xn=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var pc=(i,e)=>{for(var t in e)du(i,t,{get:e[t],enumerable:!0})};var Ne,mc,je,gc,_n,io,yc,ki,xc,so,ro,_c,Rr,Cr,vc,bc,Pr,Yn,us,Lr,gt,ao,Mc,Ir,oo,kn=xn(()=>{Ne=.03333333333333333,mc=2,je=6e3,gc=.7,_n=7,io=88,yc=3,ki=8,xc=1500,so=2200,ro=1e4,_c={1:{rate:.15,dmg:1,big:!1,shots:[[0,0]]},2:{rate:.16,dmg:2,big:!0,shots:[[0,0]]},3:{rate:.16,dmg:2,big:!0,shots:[[0,-4],[0,4]]},4:{rate:.15,dmg:2,big:!0,shots:[[-.17,0],[0,0],[.17,0]]},5:{rate:.15,dmg:2,big:!0,shots:[[-.2,0],[0,0],[.2,0]],shell:{cd:.7,blast:22,dmg:4}},6:{rate:.15,dmg:2,big:!0,shots:[[-.26,0],[-.1,0],[.1,0],[.26,0]],laser:{cd:.32,dmg:3}}},Rr=6,Cr=290,vc=200,bc=3,Pr=.8,Yn=5,us=4,Lr=[{name:"HU\u1EA4N LUY\u1EC6N",cd:99,bspd:.8,hp:1,wave:0,aim:.5,soldierSpd:.6,bossHp:1,drop:0},{name:"\u0110\u1ED2NG C\u1ECE",cd:1.1,bspd:.95,hp:.9,wave:1,aim:.12,soldierSpd:1,bossHp:100,drop:1.1},{name:"SA M\u1EA0C",cd:.95,bspd:1.08,hp:1.1,wave:1.15,aim:.07,soldierSpd:1.1,bossHp:170,drop:1},{name:"C\u0102N C\u1EE8 TUY\u1EBET",cd:.85,bspd:1.15,hp:1.2,wave:1.25,aim:.05,soldierSpd:1.2,bossHp:180,drop:.9}],gt={rapid:0,shield:1,life:2,bomb:3,wup:4},ao=12,Mc=8,Ir=5,oo={soldier:50,turret:200,tank:300,prison:100,pow:100,bossTurret:500,boss:5e3,boss2:8e3}});function Dr(i,e,t,n){let s=Math.max(n.x,Math.min(i,n.x+n.w)),r=Math.max(n.y,Math.min(e,n.y+n.h)),a=i-s,o=e-r;return a*a+o*o<t*t}function wc(i,e,t){return i>=t.x&&i<=t.x+t.w&&e>=t.y&&e<=t.y+t.h}function Nn(i,e,t,n){for(let s=0;s<n.length;s++){let r=n[s];if(!(e+t<r.y||e-t>r.y+r.h)&&Dr(i,e,t,r))return!0}return!1}function js(i,e){i=+i||0,e=+e||0;let t=Math.hypot(i,e);return t>1&&(i/=t,e/=t),t<.08&&(i=0,e=0),[Math.round(i*100)/100,Math.round(e*100)/100]}function Ni(i,e,t,n,s){let r=e*io*Ne,a=t*io*Ne,o=_n,l=o,c=360-o,h=n+o+2,u=n+240-o-2,f=Math.max(l,Math.min(c,i.x+r));Nn(f,i.y,o,s)||(i.x=f);let d=Math.max(h,Math.min(u,i.y+a));return Nn(i.x,d,o,s)||(i.y=d),(e||t)&&(i.a=Math.atan2(t,e)),!!(e||t)}function pi(i,e,t,n){let s=i-t,r=e-n;return s*s+r*r}function ds(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Pe(i,e){let t=i*374761393+e*668265263|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}var mi=xn(()=>{kn()});function lo(i){let e={theme:i,rivers:[],blockers:[],spawns:[],helipads:[],deco:[],roads:[]};return{L:e,band(n,s,r,a="water"){e.rivers.push({y:n,h:s,bridges:r,kind:a});let o=0;for(let l of[...r].sort((c,h)=>c.x-h.x))l.x>o&&e.blockers.push({x:o,y:n,w:l.x-o,h:s,kind:a==="water"?"water":a}),o=l.x+l.w;o<ps&&e.blockers.push({x:o,y:n,w:ps-o,h:s,kind:a==="water"?"water":a})},wall:(n,s,r,a)=>e.blockers.push({x:n,y:s,w:r,h:a,kind:"sandbag"}),rock:(n,s,r,a)=>e.blockers.push({x:n,y:s,w:r,h:a,kind:"rock"}),S:(n,s,r,a={})=>e.spawns.push({type:n,x:s,y:r,...a}),wave:(n,s,r="top")=>e.spawns.push({type:"wave",x:0,y:n,n:s,side:r}),heli:(n,s)=>e.helipads.push({x:n,y:s})}}function co(i,e,t){for(let n=0;n<Math.round(260*360/ps);n++){let s=6+e()*348,r=440+e()*(je-460);i.blockers.some(o=>Dr(s,r,16,o))||i.rivers.some(o=>r>o.y-26&&r<o.y+o.h+22)||i.roads.some(o=>s>o.x-8&&s<o.x+o.w+8&&r>o.y0&&r<o.y1)||i.spawns.some(o=>o.type!=="wave"&&Math.abs(o.x-s)<28&&Math.abs(o.y-r)<30)||i.helipads.some(o=>Math.abs(o.x-s)<32&&Math.abs(o.y-r)<32)||i.deco.push({kind:e()<.65?t[0]:t[1],x:s,y:r})}}function ho(i){let e=360/ps,t=n=>Math.round(n*e);for(let n of i.blockers)if(n.kind==="sandbag"||n.kind==="rock")n.x=t(n.x+n.w/2)-n.w/2;else{let s=t(n.x+n.w);n.x=t(n.x),n.w=Math.max(1,s-n.x)}for(let n of i.rivers)for(let s of n.bridges)s.x=t(s.x),s.w=t(s.w);for(let n of i.roads)n.x=t(n.x),n.w=t(n.w);for(let n of i.helipads)n.x=t(n.x);for(let n of i.spawns)n.x=t(n.x),n.patrol&&(n.patrol=n.patrol.map(t)),n.turrets&&(n.turrets=n.turrets.map(t))}function pu(){let i=ds(7),{L:e,heli:t}=lo(0);return e.tutorial=!0,e.minCam=je-240,t(214,je-52),ho(e),co(e,i,["tree","bush"]),e.deco=e.deco.filter(n=>n.y>je-1400&&(n.y<je-250||n.x<22||n.x>338)),e}function mu(){let i=ds(1986),{L:e,band:t,wall:n,rock:s,S:r,wave:a,heli:o}=lo(0);return e.roads.push({x:104,w:32,y0:4600,y1:je}),n(30,5650,40,8),n(170,5620,40,8),a(5560,3),r("turret",190,5400),a(5330,3,"left"),r("prison",55,5210,{pows:4,flash:1}),n(20,5160,30,8),a(5080,4,"right"),o(185,4960),r("tank",70,4800,{patrol:[40,150]}),a(4720,3),t(4560,56,[{x:98,w:44}]),r("turret",45,4480),r("turret",195,4480),n(70,4430,20,8),n(150,4430,20,8),e.roads.push({x:20,w:28,y0:3080,y1:4560}),a(4320,5),r("prison",185,4160,{pows:5,flash:1}),s(120,4100,26,22),r("tank",60,4020,{patrol:[30,120]}),a(3940,4,"left"),r("turret",120,3850),o(55,3660),n(150,3600,50,8),r("tank",185,3470,{patrol:[130,210]}),a(3380,4,"right"),r("prison",120,3250,{pows:4,flash:1}),t(3020,64,[{x:24,w:40},{x:176,w:40}]),r("turret",120,2930),s(100,2870,40,18),e.roads.push({x:180,w:30,y0:1600,y1:3020}),a(2780,6),o(185,2560),r("tank",60,2440,{patrol:[30,130]}),r("prison",60,2250,{pows:6,flash:1}),r("turret",60,2060),r("turret",180,2060),n(95,2010,50,8),a(1900,6,"left"),r("prison",180,1720,{pows:4,flash:1}),o(55,1520),r("tank",120,1320,{patrol:[40,200]}),a(1180,5,"right"),r("turret",40,1100),r("turret",200,1100),a(1e3,6),o(200,860),n(30,760,40,8),n(170,760,40,8),r("boss",120,70,{turrets:[40,90,150,200]}),ho(e),co(e,i,["tree","bush"]),e}function Sc(i){let e=ds(4242+(i-1)*97),{L:t,band:n,wall:s,rock:r,S:a,wave:o,heli:l}=lo(i-1),c=[],h=(b,E,R)=>!c.some(_=>Math.hypot(_[0]-b,_[1]-E)<R+_[2])&&!t.blockers.some(_=>Dr(b,E,R,_))&&!t.rivers.some(_=>E>_.y-R-24&&E<_.y+_.h+R+20),u=(b,E,R)=>{c.push([b,E,R])},f=(b,E,R,_)=>{for(let S=0;S<30;S++){let C=28+e()*(ps-56),F=E+e()*(b-E);if(h(C,F,R))return u(C,F,R),_(C,F),!0}return!1},d=i===2?["ridge","ridge","water"]:["wall","water","wall"],y=i===2?1.4:1.8,m=i===2?1.1:1.4,p=je-300,v=0,M=0,g=je,x=0;for(u(120,je-60,50);p>1e3;){let b=300+e()*110,E=p-b;if(v%3===2){let R=d[x++%d.length],_=R==="water"?56:R==="ridge"?38:22,S=Math.round(E+b*.45),C;if(e()<.5)C=[{x:40+Math.round(e()*116),w:44}];else{let F=18+Math.round(e()*30),U=150+Math.round(e()*40);C=[{x:F,w:40},{x:U,w:40}]}n(S,_,C,R);for(let F of C){let U=F.x+F.w/2;for(let N of[-48,48]){let L=Math.max(24,Math.min(ps-24,U+N));e()<(i===2?.6:.9)&&h(L,S-46,12)&&(u(L,S-46,12),a("turret",L,S-46))}}o(S-110,3+i)}else{let R=Math.floor(y+e()),_=Math.floor(m+e());for(let S=0;S<R;S++)f(p-30,E+30,14,(C,F)=>a("turret",C,F));for(let S=0;S<_;S++)f(p-30,E+30,16,(C,F)=>a("tank",C,F,{patrol:[Math.max(26,C-60),Math.min(214,C+60)]}));(M<5&&v%3!==1||M<5&&e()<.4)&&f(p-40,E+60,24,(S,C)=>a("prison",S,C,{pows:4+Math.floor(e()*3),flash:1}))&&M++;for(let S=0;S<1+Math.floor(e()*2);S++)f(p-20,E+20,18,(C,F)=>e()<.5?r(C-13,F-9,26,18):s(C-20,F-4,40,8));if(o(p-b*.25,2+i,["top","left","right"][Math.floor(e()*3)]),o(p-b*.75,2+i),g-p>700){let S=e()<.5?50:190;h(S,p-50,30)&&(u(S,p-50,30),l(S,p-50),g=p)}}p=E,v++}return l(i===2?40:200,860),u(i===2?40:200,860,30),o(1e3,2+i*2),i===2?a("boss2",120,80):a("boss",120,70,{turrets:[28,66,104,136,174,212]}),ho(t),co(t,e,i===2?["cactus","drybush"]:["pine","snowbush"]),t}function Tc(i){xe=kr[Math.max(0,Math.min(us-1,i))]}var ps,kr,xe,ms=xn(()=>{kn();mi();ps=240;kr=[pu(),mu(),Sc(2),Sc(3)],xe=kr[0]});function Qs(i,e,t){let n=Ac[i];return n?{x:e-n[0],y:t-n[1],w:n[0]*2,h:n[1]*2,kind:"ent"}:null}function er(i,e,t,n,s){let r=Ac[t];if(!r)return Math.hypot(i-n,e-s)-gu[t];let a=Math.max(Math.abs(i-n)-r[0],0),o=Math.max(Math.abs(e-s)-r[1],0);return Math.hypot(a,o)}var q,Ec,Se,Ac,gu,gs,Fi,Oi=xn(()=>{q={soldier:0,turret:1,tank:2,prison:3,boss:4,bossTurret:5,boss2:6},Ec=["soldier","turret","tank","prison","boss","bossTurret","boss2"],Se={mg:0,grenade:1,missile:2,ebullet:3,eshell:4,homing:5,laser:6,big:7},Ac={[q.turret]:[9,9],[q.tank]:[10,11],[q.prison]:[16,12],[q.boss]:[92,42],[q.bossTurret]:[9,9],[q.boss2]:[58,26]},gu={[q.soldier]:5,[q.turret]:10,[q.tank]:12,[q.prison]:16,[q.boss]:60,[q.bossTurret]:10,[q.boss2]:48},gs=new Set([q.turret,q.tank,q.prison,q.boss,q.bossTurret,q.boss2]),Fi=i=>i===q.boss||i===q.boss2});function it(i,e){let t=document.createElement("canvas");t.width=i,t.height=e;let n=t.getContext("2d");return n.imageSmoothingEnabled=!1,[t,n]}function ys(i,e){let t=i.length,n=i[0].length,[s,r]=it(n,t);for(let a=0;a<t;a++)for(let o=0;o<n;o++){let l=i[a][o];l==="."||!e[l]||(r.fillStyle=e[l],r.fillRect(o,a,1,1))}return s}function at(i,e=pt){let[t,n]=it(i.width,i.height);n.drawImage(i,0,0),n.globalCompositeOperation="source-in",n.fillStyle=e,n.fillRect(0,0,i.width,i.height);let[s,r]=it(i.width+2,i.height+2);for(let[a,o]of[[0,1],[2,1],[1,0],[1,2]])r.drawImage(t,a,o);return r.drawImage(i,1,1),s}function Cc(i,e=16){let t=Math.ceil(Math.hypot(i.width,i.height))+1,n=[];for(let s=0;s<e;s++){let[r,a]=it(t,t);a.translate(t/2,t/2),a.rotate(s*Math.PI*2/e),a.drawImage(i,-Math.floor(i.width/2),-Math.floor(i.height/2));let o=a.getImageData(0,0,t,t),l=o.data;for(let c=3;c<l.length;c+=4)l[c]=l[c]>110?255:0;a.putImageData(o,0,0),n.push(at(r))}return n}function Nc(i){let e=i?26:16,t=i?30:14,[n,s]=it(e,t);i&&(s.fillStyle="#7c4a24",s.fillRect(11,19,5,10),s.fillStyle="#a8683a",s.fillRect(11,19,2,10),s.fillStyle="#4c2c14",s.fillRect(15,19,1,10));let r=(c,h,u,f)=>{s.fillStyle=f,s.beginPath(),s.arc(c,h,u,0,7),s.fill()},a=i?12:8,o=i?11:7,l=e/2;return r(l,a+1,o,"#22702c"),r(l-3,a-1,o-2,"#38963a"),r(l+3,a,o-3,"#38963a"),r(l-3,a-3,o-5,"#62c04c"),r(l-5,a-5,i?3:2,"#a4e478"),i&&(s.fillStyle="#22702c",s.fillRect(l+2,a+4,3,2),s.fillRect(l-7,a+5,2,2)),at(Fn(n))}function Fn(i){let e=i.getContext("2d"),t=e.getImageData(0,0,i.width,i.height),n=t.data;for(let s=3;s<n.length;s+=4)n[s]=n[s]>100?255:0;return e.putImageData(t,0,0),i}function _u(){let[i,e]=it(24,22);e.fillStyle="#5c4a2c",e.beginPath(),e.ellipse(12,12,11,9,0,0,7),e.fill();for(let t=0;t<10;t++){let n=t/10*Math.PI*2,s=12+Math.cos(n)*9,r=12+Math.sin(n)*7;e.fillStyle="#b8945c",e.fillRect(Math.round(s)-3,Math.round(r)-2,6,5),e.fillStyle="#e8cc8c",e.fillRect(Math.round(s)-3,Math.round(r)-2,5,2),e.fillStyle="#86683c",e.fillRect(Math.round(s)-3,Math.round(r)+2,6,1)}return e.fillStyle="#3c3c44",e.beginPath(),e.arc(12,11,5,0,7),e.fill(),e.fillStyle="#6c6c78",e.beginPath(),e.arc(11,10,3,0,7),e.fill(),at(Fn(i))}function vu(){let[i,e]=it(24,24);for(let t of[0,18]){e.fillStyle="#34343c",e.fillRect(t,1,6,22),e.fillStyle="#5c5c68";for(let n=2;n<23;n+=3)e.fillRect(t+1,n,4,1)}return e.fillStyle="#8c3c2c",e.fillRect(5,2,14,20),e.fillStyle="#c85c3c",e.fillRect(5,2,14,4),e.fillRect(5,2,3,20),e.fillStyle="#5c2418",e.fillRect(5,19,14,3),e.fillRect(17,2,2,20),e.fillStyle="#f8c84c",e.fillRect(11,16,2,2),at(i)}function bu(){let[i,e]=it(12,12);return e.fillStyle="#6c2c20",e.beginPath(),e.arc(6,6,5.5,0,7),e.fill(),e.fillStyle="#b4503a",e.beginPath(),e.arc(5,5,3.5,0,7),e.fill(),e.fillStyle="#e88c6c",e.fillRect(3,3,2,2),at(Fn(i))}function Mu(){let[i,e]=it(34,30);e.fillStyle="#a8382c",e.fillRect(0,0,34,14);for(let t=0;t<34;t+=4)e.fillStyle="#d85c44",e.fillRect(t,0,2,13);e.fillStyle="#f88c6c",e.fillRect(0,0,34,2),e.fillStyle="#6c1c14",e.fillRect(0,12,34,2),e.fillStyle="#8c5c30",e.fillRect(2,14,30,16);for(let t=15;t<30;t+=4)e.fillStyle="#b07c44",e.fillRect(2,t,30,2);e.fillStyle="#5c3818",e.fillRect(2,14,30,1),e.fillStyle="#1c140c",e.fillRect(11,17,12,13),e.fillStyle="#a8a8b0";for(let t=12;t<23;t+=3)e.fillRect(t,17,1,13);return e.fillStyle="#d8d8e0",e.fillRect(11,17,12,1),e.fillRect(11,23,12,1),e.fillStyle="#f8e0a0",e.fillRect(3,17,7,5),e.fillStyle="#c83828",e.fillRect(4,19,5,1),at(i)}function wu(){let[t,n]=it(186,96),s=64;n.fillStyle="#9c9488",n.fillRect(0,6,186,s-6);for(let r=6;r<s;r+=8)for(let a=r/8%2?0:6;a<186;a+=12)n.fillStyle="#b8b0a4",n.fillRect(a,r,11,1),n.fillStyle="#7c746a",n.fillRect(a+11,r,1,8);for(let r=0;r<186;r+=12)n.fillStyle="#c4bcb0",n.fillRect(r,0,8,4),n.fillStyle="#847c70",n.fillRect(r,4,8,3);n.fillStyle="#6c6458",n.fillRect(0,s,186,96-s);for(let r=s;r<96;r+=6)for(let a=(r-s)/6%2?0:8;a<186;a+=16)n.fillStyle="#847c70",n.fillRect(a,r,15,1),n.fillStyle="#4c463c",n.fillRect(a+15,r,1,6);n.fillStyle="#d4ccc0",n.fillRect(0,s,186,1),n.fillStyle="#2c241c",n.fillRect(186/2-18,s+4,36,96-s-4),n.fillStyle="#7c4a24";for(let r=186/2-16;r<186/2+18;r+=6)n.fillRect(r,s+6,4,96-s-6);n.fillStyle="#a8a8b0",n.fillRect(186/2-18,s+12,36,2),n.fillRect(186/2-18,s+22,36,2);for(let r of[0,164])n.fillStyle="#b0a89c",n.fillRect(r,0,22,s),n.fillStyle="#d4ccc0",n.fillRect(r,0,22,2),n.fillRect(r,0,2,s),n.fillStyle="#5c564c",n.fillRect(r,s,22,96-s),n.fillStyle="#c83828",n.fillRect(r+9,18,4,14);return n.fillStyle="#3c3830",n.beginPath(),n.arc(186/2,34,19,0,7),n.fill(),n.fillStyle="#5c564c",n.beginPath(),n.arc(186/2,33,16,0,7),n.fill(),at(Fn(t))}function Su(){let[i,e]=it(22,34);return e.fillStyle="#3c7c34",e.fillRect(9,16,4,16),e.fillStyle="#5ca44c",e.fillRect(9,16,2,16),e.fillStyle="#3c7c34",e.fillRect(5,29,12,3),e.fillStyle="#3c3c44",e.fillRect(1,4,2,16),e.fillRect(19,4,2,16),e.fillRect(3,7,2,1),e.fillRect(3,16,2,1),e.fillRect(17,7,2,1),e.fillRect(17,16,2,1),e.fillStyle="#2c6c2c",e.beginPath(),e.ellipse(11,11,7,10,0,0,7),e.fill(),e.fillStyle="#4c9c44",e.beginPath(),e.ellipse(10,11,5,8,0,0,7),e.fill(),e.fillStyle="#78c8f0",e.beginPath(),e.ellipse(11,5,5,4,0,0,7),e.fill(),e.fillStyle="#e8fcff",e.fillRect(8,3,2,2),e.fillStyle="#f8f8f0",e.fillRect(9,13,4,4),e.fillStyle="#c83828",e.fillRect(10,13,2,4),e.fillRect(9,14,4,2),at(Fn(i))}function Tu(i,e){let[t,n]=it(i,e+4);return n.fillStyle="#5c5864",n.beginPath(),n.ellipse(i/2,e/2+3,i/2,e/2,0,0,7),n.fill(),n.fillStyle="#8c8898",n.beginPath(),n.ellipse(i/2-1,e/2,i/2-1,e/2-1,0,0,7),n.fill(),n.fillStyle="#b8b4c4",n.beginPath(),n.ellipse(i/2-i/6,e/2-e/5,i/5,e/6,0,0,7),n.fill(),at(Fn(t))}function Eu(){let[i,e]=it(16,24),t="#3c9c4c",n="#78d070",s="#246c34";return e.fillStyle=t,e.fillRect(6,2,5,21),e.fillRect(1,8,3,8),e.fillRect(12,5,3,9),e.fillRect(3,13,3,3),e.fillRect(10,11,3,3),e.fillStyle=n,e.fillRect(7,3,1,19),e.fillRect(2,9,1,6),e.fillRect(13,6,1,7),e.fillStyle=s,e.fillRect(10,3,1,20),e.fillStyle="#f8f0c0",e.fillRect(8,6,1,1),e.fillRect(8,12,1,1),e.fillRect(9,17,1,1),e.fillStyle="#f87890",e.fillRect(7,1,3,2),at(i)}function Au(){let[i,e]=it(14,10);e.fillStyle="#8c6430",e.beginPath(),e.ellipse(7,6,6,4,0,0,7),e.fill(),e.strokeStyle="#c8964c",e.lineWidth=1;for(let t=0;t<5;t++)e.beginPath(),e.moveTo(7,7),e.lineTo(2+t*2.5,2+t%2*2),e.stroke();return at(Fn(i))}function Ru(){let[i,e]=it(20,30);e.fillStyle="#6c4424",e.fillRect(8,23,4,7);let t=(n,s,r)=>{e.fillStyle="#1c5c44",e.beginPath(),e.moveTo(10,n),e.lineTo(10+s,n+r),e.lineTo(10-s,n+r),e.fill(),e.fillStyle="#2c7c5c",e.beginPath(),e.moveTo(10,n+1),e.lineTo(10+s-3,n+r-1),e.lineTo(10-s+1,n+r-1),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.moveTo(10,n),e.lineTo(10+s*.5,n+r*.5),e.lineTo(10-s*.5,n+r*.5),e.fill(),e.fillStyle="#d8e8f8",e.fillRect(10-s+2,n+r-2,s*2-4,2)};return t(13,9,11),t(7,7,9),t(1,5,8),at(Fn(i))}function Cu(){let[i,e]=it(16,10);return e.fillStyle="#a8bcd8",e.beginPath(),e.ellipse(8,6,7,4,0,0,7),e.fill(),e.fillStyle="#f8fcff",e.beginPath(),e.ellipse(7,4,6,3,0,0,7),e.fill(),e.fillStyle="#2c7c5c",e.fillRect(3,6,2,2),e.fillRect(11,6,2,1),at(Fn(i))}function Pu(i){let[e,t]=it(i.width,i.height);t.drawImage(i,0,0),t.fillStyle="#ffffff";for(let n=1;n<i.width-1;n+=12)t.fillRect(n,1,8,2);t.fillRect(1,1,22,3),t.fillRect(i.width-23,1,22,3),t.fillStyle="rgba(220,236,255,0.55)";for(let n=0;n<40;n++)t.fillRect(n*37%i.width,10+n*23%50,3,1);return e}function Lu(){let[t,n]=it(122,62);for(let s of[0,104]){n.fillStyle="#2c2c34",n.fillRect(s,2,18,58),n.fillStyle="#5c5c68";for(let r=4;r<58;r+=4)n.fillRect(s+2,r,14,2);n.fillStyle="#7c7c88",n.fillRect(s+2,2,14,1)}n.fillStyle="#8c6430",n.fillRect(16,0,90,54),n.fillStyle="#c0904c",n.fillRect(16,0,90,6),n.fillRect(16,0,4,54),n.fillStyle="#5c3c18",n.fillRect(16,48,90,6),n.fillStyle="#a07840",n.fillRect(26,12,70,26),n.fillStyle="#5c3c18";for(let s=28;s<94;s+=8)n.fillRect(s,14,2,2),n.fillRect(s,34,2,2);n.fillStyle="#4c3014",n.fillRect(16,54,90,8);for(let s of[122/2-14,122/2-3,122/2+8])n.fillStyle="#1c140c",n.fillRect(s,55,6,6),n.fillStyle="#5c5c68",n.fillRect(s+1,56,4,2);for(let s=20;s<102;s+=8)n.fillStyle="#f8c830",n.fillRect(s,7,4,3),n.fillStyle="#1c140c",n.fillRect(s+4,7,4,3);return at(t)}function Iu(){let[i,e]=it(18,18);return e.fillStyle="#4c4c58",e.beginPath(),e.arc(9,9,8,0,7),e.fill(),e.fillStyle="#7c7c8c",e.beginPath(),e.arc(8,8,5.5,0,7),e.fill(),e.fillStyle="#b0b0c0",e.fillRect(5,5,3,2),at(Fn(i))}function tr(i,e,t){let[n,s]=it(12,12);s.fillStyle=i,s.fillRect(0,1,12,10),s.fillRect(1,0,10,12),s.fillStyle=e,s.fillRect(1,1,10,2),s.fillStyle="rgba(0,0,0,0.25)",s.fillRect(1,9,10,2);let r=Du[t];s.fillStyle="#ffffff";for(let a=0;a<5;a++)for(let o=0;o<3;o++)r[a][o]==="1"&&s.fillRect(3+o*2,1+a*2,2,2);return at(n)}function Fc(){let e={jeep:[uo("#a8e870","#58b840","#2c7c24"),uo("#a0d0ff","#4890f0","#2050a8")].map(t=>Cc(ys(Pc,t))),jeepWhite:Cc(ys(Pc,Object.fromEntries(Object.keys(uo("","","")).map(t=>[t,"#ffffff"])))),soldier:Lc.map(t=>at(ys(t,Ic))),soldierHit:Lc.map(t=>at(ys(t,Object.fromEntries(Object.keys(Ic).map(n=>[n,"#ffffff"]))),"#ffffff")),pow:Dc.map(t=>at(ys(t,kc))),powFlash:Dc.map(t=>at(ys(t,{...kc,w:"#ffe14a",b:"#ff9a2a"}))),tree:Nc(!0),bush:Nc(!1),bunker:_u(),tankBody:vu(),tankTop:bu(),prison:Mu(),fortress:wu(),heli:Su(),rock:Tu,cactus:Eu(),drybush:Au(),pine:Ru(),snowbush:Cu(),warMachine:Lu(),bossGun:Iu(),items:[tr("#e8702c","#f8a860","R"),tr("#2c8ce8","#78c0ff","P"),tr("#d83048","#f87890","H"),tr("#7c44c8","#b088f0","B"),tr("#d8a81c","#f8e060","W")]};return e.fortressSnow=Pu(e.fortress),e}var pt,Pc,uo,Lc,Ic,Dc,kc,Du,Oc=xn(()=>{pt="#1c140c";Pc=["......dbbbbbbbbd......","....kkdhhhhhhhhdkk....","...kkkbhhhhhhhhbkkk...","...kkkbhhhhhhhhbkkk...","...kkkbbbbbbbbbbkkk...","....kkdbbbMMbbbdkk....","......dbbbMMbbbd......","......dwwwMMwwwd......","......dwggMMwwwd......","......dwwwMMwwwd......","......rrrrMMrrrr......","......bsssmmsssb......","......bsssmmsssb......","......bssssssssb......","......bbbbbbbbbb......","......bddddddddb......","...kkkbbbbbbbbbbkkk...","...kkkbddddddddbkkk...","...kkkbbbbbbbbbbkkk...","....kkbbbbbbbbbbkk....","......dddddddddd......",".......m......m......."],uo=(i,e,t)=>({h:i,b:e,d:t,k:"#2c2c34",w:"#78c8f0",g:"#e8fcff",r:"#5c5c64",s:"#a85a2c",m:"#3c3c44",M:"#7c7c88"}),Lc=[["...hhh...","..hHHHh..",".hhhhhhh.",".ssesess.","..sssss..",".uuUuuuu.","suuUuuuus","s.uuuuu.s","..bbbbb..","..uu.uu..","..kk.kk.."],["...hhh...","..hHHHh..",".hhhhhhh.",".ssesess.","..sssss..",".uuUuuuu.","suuUuuuus","s.uuuuu.s","..bbbbb..",".uu...uu.",".kk...kk."]],Ic={h:"#c83828",H:"#f87858",s:"#f8c088",e:"#201810",u:"#6c64a8",U:"#9c94d8",b:"#3c2c50",k:"#302020"},Dc=[["..bbbbb..",".bbbbbbb.",".sssssss.",".ssesess.","..sssss..","s.wwwww.s","swwwwwwws","..wwwww..","..ppppp..","..pp.pp..","..kk.kk.."],["s.bbbbb.s","s.bbbbb.s","s.sssss.s","s.sesess.","s.sssss.s","swwwwwwws",".wwwwwww.","..wwwww..","..ppppp..",".pp...pp.",".kk...kk."]],kc={b:"#6c3c1c",s:"#f8c088",e:"#201810",w:"#f8f8f0",p:"#4c70c8",k:"#302020"};Du={R:["110","101","110","101","101"],P:["111","101","111","100","100"],B:["110","101","110","101","110"],W:["101","101","101","111","101"],H:["000","101","111","111","010"]}});var Or={};pc(Or,{clearParticles:()=>So,drawBullet:()=>$u,drawEnemy:()=>Gu,drawHelis:()=>Wu,drawHpBar:()=>Ku,drawItem:()=>Xu,drawJeep:()=>Ju,drawParticles:()=>wo,drawPow:()=>qu,drawTerrain:()=>Hu,initRender:()=>xo,itemIcon:()=>Yu,resetTerrain:()=>yo,spawnExplosion:()=>_o,spawnSpark:()=>vo,spawnSplat:()=>Mo,spawnText:()=>bo});function yo(){zi.clear(),Fr=-1}function Nu(i,e){return xe.roads.some(t=>i>=t.x&&i<t.x+t.w&&e>=t.y0&&e<t.y1)}function _s(i,e){let t=i*et+8,n=e*et+8;return n>=420&&(ku(i,e)||Nu(t,n))}function Fu(i,e,t,n,s){let r=Pe(n,s);i.fillStyle=Pe(n>>2,s>>2)>.6?$e.grass2:$e.grass,i.fillRect(e,t,et,et);let a=1+(r*3|0);for(let o=0;o<a;o++){let l=Pe(n*7+o,s)*12|0,c=Pe(n,s*5+o)*12|0;i.fillStyle=$e.grassDk,i.fillRect(e+l,t+c+2,1,2),i.fillRect(e+l+2,t+c+2,1,2),i.fillRect(e+l+1,t+c+3,1,1),i.fillStyle=$e.grassLt,i.fillRect(e+l+1,t+c+1,1,2)}if(r>.9){let o=4+(r*97|0)%8,l=4+(r*53|0)%8,c=$e.flowers[(r*1e3|0)%3];i.fillStyle=c,i.fillRect(e+o-1,t+l,3,1),i.fillRect(e+o,t+l-1,1,3),xe.theme===0&&(i.fillStyle="#f8a020",i.fillRect(e+o,t+l,1,1))}}function Ou(i,e,t,n,s){i.fillStyle=$e.dirt,i.fillRect(e,t,et,et);for(let a=0;a<3;a++){let l=Pe(n*3+a,s*7)*14|0,c=Pe(n,s*3+a)*14|0;i.fillStyle=$e.dirtDk,i.fillRect(e+l,t+c+1,2,1),i.fillStyle=$e.dirtLt,i.fillRect(e+l,t+c,2,1)}let r=(a,o)=>{for(let l=0;l<a;l+=2)o(l,Pe(n*13+l,s*11)>.5?2:1)};_s(n,s-1)||r(et,(a,o)=>{i.fillStyle=$e.grass,i.fillRect(e+a,t,2,o),i.fillStyle=$e.edge,i.fillRect(e+a,t+o,2,1)}),_s(n,s+1)||r(et,(a,o)=>{i.fillStyle=$e.dirtDk,i.fillRect(e+a,t+et-o-1,2,1),i.fillStyle=$e.grass,i.fillRect(e+a,t+et-o,2,o)}),_s(n-1,s)||r(et,(a,o)=>{i.fillStyle=$e.grass,i.fillRect(e,t+a,o,2),i.fillStyle=$e.edge,i.fillRect(e+o,t+a,1,2)}),_s(n+1,s)||r(et,(a,o)=>{i.fillStyle=$e.edge,i.fillRect(e+et-o-1,t+a,1,2),i.fillStyle=$e.grass,i.fillRect(e+et-o,t+a,o,2)})}function zu(i,e,t,n,s){i.fillStyle=$e.stone,i.fillRect(e,t,et,et),i.fillStyle=$e.stoneLt,i.fillRect(e,t,et-1,1),i.fillRect(e,t,1,et-1),i.fillStyle=$e.stoneDk,i.fillRect(e,t+et-1,et,1),i.fillRect(e+et-1,t,1,et),Pe(n,s)>.8&&(i.fillStyle=$e.stoneDk,i.fillRect(e+5,t+6,3,1),i.fillRect(e+7,t+7,1,2))}function Uu(i,e,t){let[n,s]=it(e.w,e.h+4);for(let r=0;r<2;r++){let a=r*5,o=r?3:0;for(let l=-o;l<e.w;l+=7)s.fillStyle="#b8945c",s.fillRect(l,a+1,7,6),s.fillStyle="#e8cc8c",s.fillRect(l,a+1,6,2),s.fillStyle="#86683c",s.fillRect(l,a+6,7,1),s.fillRect(l+6,a+1,1,6)}i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(e.x+2,t+e.h+2,e.w,3),i.drawImage(at(n),e.x-1,t-3)}function Bu(i,e,t){let n=[],s=0;for(let a of[...e.bridges].sort((o,l)=>o.x-l.x))a.x>s&&n.push([s,a.x]),s=a.x+a.w;s<360&&n.push([s,360]);let r=e.kind==="ridge"?12:9;for(let[a,o]of n){let l=o-a,[c,h]=it(l,e.h+4);if(e.kind==="ridge"){h.fillStyle="#b87440",h.fillRect(0,0,l,e.h-r);for(let u=0;u<l;u+=6)for(let f=2;f<e.h-r-2;f+=7){let d=Pe(a+u,e.y+f);h.fillStyle=d>.5?"#d89a5c":"#9c5c30",h.fillRect(u+(d*3|0),f,4,2)}h.fillStyle="#e8b478",h.fillRect(0,0,l,2),h.fillStyle="#8c4c24",h.fillRect(0,e.h-r,l,r);for(let u=1;u<l;u+=4)h.fillStyle="#6c3418",h.fillRect(u+(Pe(u,e.y)*2|0),e.h-r+1,1,r-2);h.fillStyle="rgba(0,0,0,0.3)",h.fillRect(0,e.h,l,4)}else{h.fillStyle="#a8b0bc",h.fillRect(0,0,l,e.h-r),h.fillStyle="#d0d8e4",h.fillRect(0,0,l,2),h.fillStyle="#ffffff",h.fillRect(0,0,l,1),h.fillStyle="#6c7480",h.fillRect(0,e.h-r,l,r);for(let u=0;u<l;u+=16)h.fillStyle="#4c5460",h.fillRect(u,e.h-r,1,r),h.fillStyle="#8c94a0",h.fillRect(u+1,e.h-r,14,1);for(let u of[a>0?0:-1,o<360?l-6:-1])if(!(u<0))for(let f=0;f<e.h;f+=4)h.fillStyle=f/4%2?"#1c140c":"#f8c830",h.fillRect(u,f,6,4);h.fillStyle="rgba(0,0,0,0.3)",h.fillRect(0,e.h,l,4)}i.drawImage(at(c),a-1,t-1)}}function Vu(i){let[e,t]=it(360,cn),n=i*cn;for(let s=0;s<cn;s+=et)for(let r=0;r<360;r+=et){let a=r/et,o=(n+s)/et;n+s<420?zu(t,r,s,a,o):_s(a,o)?Ou(t,r,s,a,o):Fu(t,r,s,a,o)}for(let s of xe.roads){let r=Math.max(s.y0,n),a=Math.min(s.y1,n+cn);for(let o=r;o<a;o+=4)for(let[l,c]of[[s.x+6,0],[s.x+s.w-10,2]])_s(Math.floor(l/et),Math.floor(o/et))&&(t.fillStyle=$e.dirtDk,t.fillRect(l,o-n+c,2,2))}for(let s of xe.rivers){if(s.y+s.h<n-12||s.y>n+cn+12)continue;let r=s.y-n;if(s.kind==="ridge"||s.kind==="wall"){Bu(t,s,r);continue}t.fillStyle=$e.cliff,t.fillRect(0,r-7,360,7);for(let a=0;a<360;a+=5)t.fillStyle=$e.cliffDk,t.fillRect(a+(Pe(a,s.y)*3|0),r-6,1,6);t.fillStyle=$e.edge,t.fillRect(0,r-8,360,1),t.fillStyle=pt,t.fillRect(0,r-1,360,1),t.fillStyle=$e.water,t.fillRect(0,r,360,s.h),t.fillStyle=$e.waterDk,t.fillRect(0,r,360,4);for(let a=0;a<60;a++){let o=Pe(a,s.y)*360|0,l=r+6+(Pe(s.y,a)*(s.h-12)|0);t.fillStyle=$e.waterLt,t.fillRect(o,l,3,1),t.fillRect(o+3,l-1,3,1)}t.fillStyle=$e.foam;for(let a=0;a<360;a+=4)t.fillRect(a,r+s.h-2-a/4%2,3,1);t.fillStyle=$e.sand,t.fillRect(0,r+s.h,360,4),t.fillStyle=$e.dirtDk,t.fillRect(0,r+s.h+4,360,1);for(let a of s.bridges){let[o,l]=it(a.w+6,s.h+18);l.fillStyle="#6c4020",l.fillRect(3,0,a.w,s.h+18);for(let c=1;c<s.h+18;c+=4)l.fillStyle="#b87c44",l.fillRect(3,c,a.w,3),l.fillStyle="#d89c5c",l.fillRect(3,c,a.w,1);l.fillStyle="#4c2c14",l.fillRect(0,0,3,s.h+18),l.fillRect(a.w+3,0,3,s.h+18),l.fillStyle="#8c5c30";for(let c=0;c<s.h+18;c+=10)l.fillRect(0,c,3,3),l.fillRect(a.w+3,c,3,3);t.fillStyle="rgba(0,0,40,0.35)",t.fillRect(a.x+2,r+2,a.w+6,s.h),t.drawImage(at(o),a.x-4,r-10)}}for(let s of xe.helipads){if(s.y<n-30||s.y>n+cn+30)continue;let r=s.y-n,[a,o]=it(44,46);o.fillStyle="#7c786c",o.fillRect(0,2,44,44),o.fillStyle="#a8a49c",o.fillRect(0,0,44,42),o.fillStyle="#c8c4bc",o.fillRect(0,0,44,2),o.strokeStyle="#f8d030",o.lineWidth=2,o.beginPath(),o.arc(22,21,17,0,7),o.stroke(),o.fillStyle="#f8f8f0",o.fillRect(14,12,3,18),o.fillRect(27,12,3,18),o.fillRect(17,19,10,3),t.drawImage(at(a),s.x-23,r-22)}for(let s of xe.blockers){if(s.kind==="water"||s.y+s.h<n-8||s.y>n+cn+8)continue;let r=s.y-n;s.kind==="sandbag"?Uu(t,s,r):(t.fillStyle="rgba(0,0,0,0.25)",t.beginPath(),t.ellipse(s.x+s.w/2+3,r+s.h+1,s.w/2,4,0,0,7),t.fill(),t.drawImage(mt.rock(s.w,s.h),s.x-1,r-3))}for(let s of xe.deco){if(s.y<n-40||s.y>n+cn+40)continue;let r=mt[s.kind]||mt.tree,a=Math.round(s.x),o=Math.round(s.y-n);t.fillStyle="rgba(0,30,0,0.3)",t.beginPath(),t.ellipse(a+3,o,r.width/2-2,4,0,0,7),t.fill(),t.drawImage(r,a-(r.width>>1),o-r.height+2)}return e}function xo(){mt=Fc()}function Hu(i,e){Fr!==xe.theme&&(zi.clear(),Fr=xe.theme,$e=mo[Fr]||mo[0]);let t=Math.floor(e/cn),n=Math.floor((e+240)/cn);for(let s=t;s<=n;s++){if(s<0||s*cn>je)continue;let r=zi.get(s);r||(r=Vu(s),zi.set(s,r),zi.size>12&&zi.delete(zi.keys().next().value)),i.drawImage(r,0,Math.round(s*cn-e))}}function go(i){let e=zc.get(i);if(!e){let[t,n]=it(i.width,i.height);n.drawImage(i,0,0),n.globalCompositeOperation="source-in",n.fillStyle="#fff",n.fillRect(0,0,i.width,i.height),e=t,zc.set(i,e)}return e}function po(i,e,t,n,s,r,a){let o=e+Math.cos(n)*s,l=t+Math.sin(n)*s;i.lineCap="butt",i.strokeStyle=pt,i.lineWidth=r+2,i.beginPath(),i.moveTo(e,t),i.lineTo(o+Math.cos(n),l+Math.sin(n)),i.stroke(),i.strokeStyle=a,i.lineWidth=r,i.beginPath(),i.moveTo(e,t),i.lineTo(o,l),i.stroke()}function Wu(i,e,t,n){xe.helipads.forEach((s,r)=>{let a=s.y-e;if(a<-60||a>290)return;let o=n[r]||0,l=o>0?Math.sin((1-o/2.4)*Math.PI)*26:0,c=s.x,h=a-2-l;Jn(i,c+2+l*.3,a+6,10-l*.1,5),xs(i,mt.heli,c,h+4);let u=o>0,f=t*(u?.035:.006);i.fillStyle=u?"rgba(40,40,48,0.25)":"rgba(40,40,48,0.12)",i.beginPath(),i.arc(c,h-2,19,0,7),i.fill(),i.lineCap="round";for(let d=0;d<2;d++){let y=f+d*Math.PI/2,m=Math.cos(y),p=Math.sin(y);i.strokeStyle=pt,i.lineWidth=3,i.beginPath(),i.moveTo(c-m*19,h-2-p*19),i.lineTo(c+m*19,h-2+p*19),i.stroke(),i.strokeStyle="#5c5c68",i.lineWidth=1,i.beginPath(),i.moveTo(c-m*18,h-2-p*18),i.lineTo(c+m*18,h-2+p*18),i.stroke()}i.fillStyle=pt,i.fillRect(Math.round(c)-2,Math.round(h)-4,4,4),i.fillStyle="#a8a8b0",i.fillRect(Math.round(c)-1,Math.round(h)-3,2,2)})}function Gu(i,e,t,n){let[s,r,a,o,l,c,h,u]=e,f=Math.round(a),d=Math.round(o-t);if(!(d<-110||d>300))switch(r){case q.soldier:{let y=(n/150+s|0)%2;Jn(i,f,d+5,4,2);let m=(h?mt.soldierHit:mt.soldier)[y];i.save(),i.translate(f,d),Math.cos(l)<0&&i.scale(-1,1),i.drawImage(m,-Math.floor(m.width/2),-8),i.restore();break}case q.bossTurret:if(xe.theme===1){xs(i,mt.bossGun,f,d,h),po(i,f,d,l,13,4,"#3c3c48"),i.fillStyle=h?"#fff":"#f84838",i.fillRect(f-1,d-1,3,3);break}case q.turret:{Jn(i,f+2,d+7,11,4),xs(i,mt.bunker,f,d,h),po(i,f,d-1,l,12,3,r===q.bossTurret?"#a84030":"#6c6c78"),i.fillStyle=pt,i.fillRect(f-3,d-4,6,6),i.fillStyle=h?"#fff":r===q.bossTurret?"#d85c44":"#9c9cac",i.fillRect(f-2,d-3,4,4);break}case q.tank:{Jn(i,f+2,d+11,13,4),xs(i,mt.tankBody,f,d,h),po(i,f,d,l,15,3,"#5c2418"),xs(i,mt.tankTop,f,d,h);break}case q.prison:{Jn(i,f+2,d+14,18,4),xs(i,mt.prison,f,d+1,h),(n/280+s|0)%2&&(i.fillStyle="#f8c088",i.fillRect(f-3,d+6,2,2),i.fillRect(f+2,d+5,2,2));break}case q.boss2:{let y=mt.warMachine;i.fillStyle="rgba(0,0,0,0.3)",i.fillRect(f-58,d+28,120,5),i.drawImage(h?go(y):y,f-(y.width>>1),d-30);let m=(n/90|0)%2;i.fillStyle="#7c7c88";for(let v of[f-60,f+43])for(let M=-26+m*2;M<28;M+=4)i.fillRect(v+3,d+M,12,1);let p=(Math.sin(n/140)+1)/2;i.fillStyle=pt,i.beginPath(),i.arc(f,d-6,9,0,7),i.fill(),i.fillStyle=`rgb(${190+p*60|0},${30+p*50|0},40)`,i.beginPath(),i.arc(f,d-6,7,0,7),i.fill(),u&&(i.strokeStyle=`rgba(140,210,255,${.45+p*.45})`,i.lineWidth=2,i.beginPath(),i.arc(f,d-6,12+p*2,0,7),i.stroke());break}case q.boss:{let y=xe.theme===2?mt.fortressSnow:mt.fortress;i.fillStyle="rgba(0,0,0,0.3)",i.fillRect(f-y.width/2+4,d+50,y.width-4,6),i.drawImage(h?go(y):y,f-(y.width>>1),d-46);let m=(Math.sin(n/140)+1)/2,p=d-12;i.fillStyle=pt,i.beginPath(),i.arc(f,p,12,0,7),i.fill(),i.fillStyle=`rgb(${190+m*60|0},${30+m*50|0},40)`,i.beginPath(),i.arc(f,p,10,0,7),i.fill(),i.fillStyle="#f8c0a8",i.fillRect(f-5,p-6,4,3),u&&(i.strokeStyle=`rgba(140,210,255,${.45+m*.45})`,i.lineWidth=2,i.beginPath(),i.arc(f,p,16+m*2,0,7),i.stroke());break}}}function qu(i,e,t,n){let[s,r,a,o]=e,l=(n/140+s|0)%2,c=o&&(n/120|0)%2?mt.powFlash[l]:mt.pow[l],h=a-t;Jn(i,r,h+5,4,2),i.drawImage(c,Math.round(r)-(c.width>>1),Math.round(h)-8)}function Xu(i,e,t,n){let[s,r,a,o,l]=e;if(l&&(n/100|0)%2)return;let c=Math.round(Math.sin(n/200+s)*1.5),h=o-t;Jn(i,a,h+6,5,2);let u=mt.items[r]||mt.items[0];i.drawImage(u,Math.round(a-u.width/2),Math.round(h-u.height/2-2+c)),(n/60+s*7|0)%14===0&&(i.fillStyle="#fff",i.fillRect(Math.round(a)+3,Math.round(h)-7+c,2,2))}function Yu(i){return mt.items[i]||mt.items[0]}function Ju(i,e,t,n,s,r,a){let o=n-r;Jn(i,t+3,o+5,12,8);let l=16,c=s+Math.PI/2,h=(Math.round(c/(Math.PI*2/l))%l+l)%l,f=(a.invuln&&(performance.now()/90|0)%2?mt.jeepWhite:mt.jeep[e])[h];if(i.drawImage(f,Math.round(t-f.width/2),Math.round(o-f.height/2)),a.shield){let d=performance.now()/120,y=16+Math.sin(d)*1.2;i.strokeStyle=a.shield<=2&&(d|0)%2?"rgba(160,220,255,0.3)":"rgba(160,220,255,0.85)",i.lineWidth=1.5,i.beginPath(),i.arc(Math.round(t),Math.round(o),y,0,7),i.stroke(),i.fillStyle="rgba(160,220,255,0.15)",i.fill()}if(a.carry>0){let d=Math.round(t)-6,y=Math.round(o)-24;i.fillStyle=pt,i.fillRect(d-1,y-1,14,9),i.fillStyle="#f8f8f0",i.fillRect(d,y,12,7),i.fillStyle=pt,i.fillRect(d+5,y+7,2,2),i.font="bold 7px monospace",i.textAlign="center",i.fillText(a.carry,Math.round(t),y+6)}a.self&&(i.fillStyle=pt,i.fillRect(Math.round(t)-3,Math.round(o)+15,7,4),i.fillStyle=e===0?"#a8e870":"#a0d0ff",i.fillRect(Math.round(t)-2,Math.round(o)+16,5,2))}function $u(i,e,t){let[,n,s,r,a,o=0]=e,l=Math.round(s),c=Math.round(r-t);switch(n){case Se.mg:i.fillStyle=pt,i.fillRect(l-2,c-2,4,4),i.fillStyle="#fff070",i.fillRect(l-1,c-1,2,2);break;case Se.big:i.fillStyle=pt,i.beginPath(),i.arc(l,c,3.5,0,7),i.fill(),i.fillStyle="#f8a020",i.beginPath(),i.arc(l,c,2.5,0,7),i.fill(),i.fillStyle="#fff8c0",i.fillRect(l-1,c-1,2,2);break;case Se.grenade:{let h=Math.round(a);Jn(i,l,c+1,2,1),i.fillStyle=pt,i.fillRect(l-3,c-h-3,6,6),i.fillStyle="#4c6c2c",i.fillRect(l-2,c-h-2,4,4),i.fillStyle="#8cc05c",i.fillRect(l-2,c-h-2,2,2);break}case Se.missile:{let h=Math.cos(o),u=Math.sin(o);i.fillStyle="rgba(255,190,90,0.7)",i.fillRect(Math.round(l-h*6)-1,Math.round(c-u*6)-1,3,3),i.strokeStyle=pt,i.lineWidth=4,i.beginPath(),i.moveTo(l-h*4,c-u*4),i.lineTo(l+h*3,c+u*3),i.stroke(),i.strokeStyle="#f8f8f0",i.lineWidth=2,i.beginPath(),i.moveTo(l-h*3,c-u*3),i.lineTo(l+h*2,c+u*2),i.stroke(),i.fillStyle="#f84838",i.fillRect(Math.round(l+h*2),Math.round(c+u*2),1,1);break}case Se.homing:{let h=Math.cos(o),u=Math.sin(o);i.fillStyle="rgba(255,200,120,0.6)",i.fillRect(Math.round(l-h*6)-1,Math.round(c-u*6)-1,2,2),i.fillStyle="rgba(200,200,200,0.4)",i.fillRect(Math.round(l-h*10)-1,Math.round(c-u*10)-1,2,2),i.strokeStyle=pt,i.lineWidth=4,i.beginPath(),i.moveTo(l-h*4,c-u*4),i.lineTo(l+h*3,c+u*3),i.stroke(),i.strokeStyle="#78e0a8",i.lineWidth=2,i.beginPath(),i.moveTo(l-h*3,c-u*3),i.lineTo(l+h*2,c+u*2),i.stroke(),i.fillStyle="#f84838",i.fillRect(Math.round(l+h*2),Math.round(c+u*2),1,1);break}case Se.laser:{let h=Math.cos(o),u=Math.sin(o);i.lineCap="round",i.strokeStyle="rgba(80,220,255,0.45)",i.lineWidth=5,i.beginPath(),i.moveTo(l-h*18,c-u*18),i.lineTo(l,c),i.stroke(),i.strokeStyle="#d8fcff",i.lineWidth=2,i.beginPath(),i.moveTo(l-h*16,c-u*16),i.lineTo(l,c),i.stroke();break}case Se.ebullet:i.fillStyle=pt,i.beginPath(),i.arc(l,c,3,0,7),i.fill(),i.fillStyle="#f84838",i.beginPath(),i.arc(l,c,2,0,7),i.fill(),i.fillStyle="#fff",i.fillRect(l-1,c-1,1,1);break;case Se.eshell:i.fillStyle=pt,i.beginPath(),i.arc(l,c,4.5,0,7),i.fill(),i.fillStyle="#f8a020",i.beginPath(),i.arc(l,c,3.5,0,7),i.fill(),i.fillStyle="#f84838",i.beginPath(),i.arc(l+1,c+1,2,0,7),i.fill(),i.fillStyle="#fff",i.fillRect(l-2,c-2,2,1);break}}function _o(i,e,t){let n=[4,8,12,30][t],s=[30,50,70,110][t],r=[4,6,8,10][t];for(let a=0;a<n;a++){let o=Math.random()*7,l=s*(.3+Math.random()*.7);vn.push({x:i,y:e,vx:Math.cos(o)*l,vy:Math.sin(o)*l-10,life:.35+Math.random()*(.25+t*.15),t:0,kind:"puff",s:r*(.6+Math.random()*.6)})}if(vn.push({x:i,y:e,vx:0,vy:0,life:.18,t:0,kind:"flash",s:[10,16,22,50][t]}),t>=1)for(let a=0;a<4+t*3;a++){let o=Math.random()*7,l=60+Math.random()*60;vn.push({x:i,y:e,vx:Math.cos(o)*l,vy:Math.sin(o)*l-40,g:160,life:.6,t:0,kind:"debris",s:2})}}function vo(i,e){for(let t=0;t<3;t++){let n=Math.random()*7;vn.push({x:i,y:e,vx:Math.cos(n)*50,vy:Math.sin(n)*50,life:.15,t:0,kind:"spark",s:1})}}function bo(i,e,t,n="#fff"){vn.push({x:i,y:e,vx:0,vy:-22,life:1.1,t:0,kind:"text",text:t,color:n})}function Mo(i,e){vn.push({x:i,y:e,vx:0,vy:0,life:.5,t:0,kind:"stars",s:1}),vn.push({x:i,y:e,vx:0,vy:0,life:6,t:0,kind:"splat",s:1})}function wo(i,e,t){for(let n=vn.length-1;n>=0;n--){let s=vn[n];if(s.t+=t,s.t>=s.life){vn.splice(n,1);continue}s.g&&(s.vy+=s.g*t),s.x+=s.vx*t,s.y+=s.vy*t,s.g||(s.vx*=.9,s.vy*=.9);let r=s.t/s.life,a=Math.round(s.x),o=Math.round(s.y-e);if(s.kind==="puff"){let l=Math.max(1,s.s*(r<.2?.6+r*2:1-(r-.2)*.6)),c=r<.25?"#fff8c0":r<.5?"#f8b030":r<.75?"#e86030":"#8c8480";i.fillStyle=pt,i.beginPath(),i.arc(a,o,l+1,0,7),i.fill(),i.fillStyle=c,i.beginPath(),i.arc(a,o,l,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.45)",i.fillRect(a-(l>>1),o-(l>>1),Math.max(1,l>>1),Math.max(1,l>>2))}else if(s.kind==="flash")i.fillStyle=`rgba(255,250,220,${1-r})`,i.beginPath(),i.arc(a,o,s.s*(.5+r),0,7),i.fill();else if(s.kind==="debris")i.fillStyle=pt,i.fillRect(a-1,o-1,3,3),i.fillStyle="#8c5c30",i.fillRect(a,o,1,1);else if(s.kind==="spark")i.fillStyle="#fff6a0",i.fillRect(a,o,2,2);else if(s.kind==="splat")i.fillStyle=`rgba(90,60,30,${.5*(1-r)})`,i.beginPath(),i.ellipse(a,o+2,5,2,0,0,7),i.fill();else if(s.kind==="stars")for(let l=0;l<3;l++){let c=l*2.1+r*6,h=a+Math.cos(c)*6,u=o-6-r*6+Math.sin(c)*2;i.fillStyle="#f8e048",i.fillRect(Math.round(h)-1,Math.round(u),3,1),i.fillRect(Math.round(h),Math.round(u)-1,1,3)}else if(s.kind==="text"){i.globalAlpha=1-r*r,i.font="bold 9px monospace",i.textAlign="center",i.fillStyle=pt;for(let[l,c]of[[-1,0],[1,0],[0,-1],[0,1],[1,1]])i.fillText(s.text,a+l,o+c);i.fillStyle=s.color,i.fillText(s.text,a,o),i.globalAlpha=1}}}function So(){vn.length=0}function Ku(i,e,t){let n=Zu[e[1]];if(!n)return;let[s,r]=n,a=Math.max(0,Math.min(1,e[5])),o=Math.round(e[2]-s/2),l=Math.round(e[3]-t-r);l<-4||l>240||(i.fillStyle=pt,i.fillRect(o-1,l-1,s+2,4),i.fillStyle="#4c1c14",i.fillRect(o,l,s,2),i.fillStyle=a>.55?"#58d848":a>.28?"#f8d030":"#f84838",i.fillRect(o,l,Math.max(1,Math.round(s*a)),2))}var cn,et,zi,mt,mo,$e,Fr,ku,zc,xs,Jn,vn,Zu,To=xn(()=>{kn();ms();mi();Oi();Oc();cn=256,et=16,zi=new Map,mt=null,mo=[{grass:"#58b848",grass2:"#5cbe4c",grassDk:"#3c9438",grassLt:"#88d860",dirt:"#d8a860",dirtDk:"#b07c44",dirtLt:"#ecc684",edge:"#2c7c2c",water:"#3070d8",waterDk:"#2050b0",waterLt:"#88c8f8",foam:"#e8f8ff",cliff:"#a06830",cliffDk:"#704018",sand:"#e8d098",stone:"#aca494",stoneLt:"#c8c0b0",stoneDk:"#847c6c",flowers:["#f8f8f0","#f8e048","#f87890"]},{grass:"#e8c078",grass2:"#e4b86c",grassDk:"#c4944c",grassLt:"#f8dca0",dirt:"#c8905c",dirtDk:"#a06c3c",dirtLt:"#dcac78",edge:"#a87840",water:"#3488c0",waterDk:"#24689c",waterLt:"#98d8f0",foam:"#f0fcff",cliff:"#b06c38",cliffDk:"#7c4420",sand:"#f0d8a0",stone:"#c8a878",stoneLt:"#e0c494",stoneDk:"#a0845c",flowers:["#a89070","#8c7458","#f8f0d8"]},{grass:"#e8f0f8",grass2:"#dfe9f5",grassDk:"#a8bcd8",grassLt:"#ffffff",dirt:"#c8d4e2",dirtDk:"#a4b2c6",dirtLt:"#dce6f0",edge:"#b4c2d6",water:"#2858a8",waterDk:"#1c4084",waterLt:"#c8e8ff",foam:"#ffffff",cliff:"#8898b0",cliffDk:"#5c6c88",sand:"#d8e4f0",stone:"#8c94a0",stoneLt:"#a8b0bc",stoneDk:"#6c7480",flowers:["#c8e0ff","#ffffff","#a8c8f0"]}],$e=mo[0],Fr=-1;ku=(i,e)=>Pe((i>>1)+311,(e>>1)+17)+Pe(i+5,e+9)*.25>1.1;zc=new Map;xs=(i,e,t,n,s)=>i.drawImage(s?go(e):e,Math.round(t-e.width/2),Math.round(n-e.height/2)),Jn=(i,e,t,n,s)=>{i.fillStyle="rgba(0,20,0,0.32)",i.beginPath(),i.ellipse(Math.round(e),Math.round(t),n,s,0,0,7),i.fill()};vn=[];Zu={[q.soldier]:[10,13],[q.turret]:[16,15],[q.bossTurret]:[16,15],[q.tank]:[20,17],[q.prison]:[24,18]}});var Lo={};pc(Lo,{clearParticles:()=>So,drawBullet:()=>hd,drawEnemy:()=>sd,drawHelis:()=>id,drawHpBar:()=>ud,drawItem:()=>ad,drawJeep:()=>cd,drawParticles:()=>wo,drawPow:()=>rd,drawTerrain:()=>nd,initRender:()=>Hc,itemIcon:()=>od,resetTerrain:()=>Po,setScale:()=>Co,setStyle:()=>Ro,spawnExplosion:()=>_o,spawnSpark:()=>vo,spawnSplat:()=>Mo,spawnText:()=>bo});function Ro(i){i!==wn&&(wn=i,$n.clear(),Ur=-1)}function Hc(){}function Co(i){i!==hn&&(hn=i,$n.clear())}function Po(){$n.clear(),Ur=-1}function bn(i,e,t,n,s,r){r=Math.min(r,n/2,s/2),i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function ju(i,e){let t=Uc.get(e);if(!t){t=document.createElement("canvas"),t.width=t.height=16;let s=t.getContext("2d");s.strokeStyle=e,s.lineWidth=2.2,s.lineCap="round";for(let r=-16;r<32;r+=5)s.beginPath(),s.moveTo(r,16),s.lineTo(r+16,0),s.stroke();Uc.set(e,t)}let n=i.createPattern(t,"repeat");try{n.setTransform(new DOMMatrix([1/hn,0,0,1/hn,0,0]))}catch{}return n}function bt(i,e,t=!0){let n=typeof e!="string"||e.startsWith("rgb");wn==="doodle"&&!n&&e!=="#fff"&&e!=="#ffffff"?(i.save(),i.globalAlpha=.3,i.fillStyle=e,i.fill(),i.restore(),i.fillStyle=ju(i,e),i.fill()):(i.fillStyle=e,i.fill()),t&&!(typeof e=="string"&&e.startsWith("rgba"))&&Qu(i)}function Qu(i){i.save(),i.strokeStyle=Mn[wn],i.lineJoin="round",i.lineCap="round",wn==="doodle"?(i.lineWidth=.8,i.stroke(),i.translate(.45,-.35),i.globalAlpha=.55,i.stroke()):(i.lineWidth=1.1,i.stroke()),i.restore()}function Wc(i,e){if(!i.startsWith("#")||!e.startsWith("#")||i.length<7||e.length<7)return i.startsWith("#")?i:e;let t=Bc(i),n=Bc(e);return"#"+t.map((s,r)=>Math.round(s*.55+n[r]*.45).toString(16).padStart(2,"0")).join("")}function Ui(i,e,t,n,s){return Wc(n,s)}function vs(i,e,t,n,s,r){return Wc(s.startsWith("rgb(")?"#ff6a50":s,r)}function Gc(i,e,t,n){if(n==="tree")Ut(i,e+3,t,11,4.5),be(i,e-2.5,t-10,5,10,2,"#8a5a32"),Te(i,e,t-17,11,"#3f9a3e"),Te(i,e-4,t-19,8,"#55b24c"),Te(i,e+4,t-15,7,"#3a8c38"),Te(i,e-5,t-22,3.5,"rgba(255,255,255,0.25)");else if(n==="bush")Ut(i,e+2,t,8,3),Te(i,e-3,t-5,5,"#4ea446"),Te(i,e+3,t-5,5,"#459a3e"),Te(i,e,t-7,5.5,"#5cb852");else if(n==="cactus")Ut(i,e+2,t,6,2.5),be(i,e-3,t-22,6,22,3,"#3ea25a"),be(i,e-9,t-16,4,9,2,"#3ea25a"),be(i,e-9,t-9,7,3.5,1.7,"#3ea25a"),be(i,e+5,t-19,4,9,2,"#3ea25a"),be(i,e+2,t-12,7,3.5,1.7,"#3ea25a"),be(i,e-1.5,t-21,1.5,19,.7,"rgba(255,255,255,0.3)"),Te(i,e,t-23,2,"#ff7fa0");else if(n==="drybush"){Ut(i,e+2,t,7,2.5),i.strokeStyle="#a77a44",i.lineWidth=1.2,i.lineCap="round";for(let s=0;s<7;s++){let r=-Math.PI+s*Math.PI/6;i.beginPath(),i.moveTo(e,t-1),i.lineTo(e+Math.cos(r)*7,t-2+Math.sin(r)*6),i.stroke()}}else if(n==="pine"){Ut(i,e+3,t,9,3.5),be(i,e-2,t-7,4,7,1.5,"#7a4e2c");for(let[s,r,a]of[[-12,10,10],[-19,8,9],[-25,6,8]])i.beginPath(),i.moveTo(e,t+s-a),i.lineTo(e+r,t+s+2),i.lineTo(e-r,t+s+2),i.closePath(),i.fillStyle="#2f7a5c",i.fill(),i.beginPath(),i.moveTo(e,t+s-a),i.lineTo(e+r*.5,t+s-a*.45),i.lineTo(e-r*.5,t+s-a*.45),i.closePath(),i.fillStyle="#ffffff",i.fill()}else n==="snowbush"&&(Ut(i,e+2,t,8,3),Te(i,e,t-4,6,"#c7d6e8"),Te(i,e-1,t-6,5,"#ffffff"))}function ed(i){let e=Br.doodle[xe.theme]||Br.doodle[0],t=document.createElement("canvas");t.width=360*hn,t.height=st*hn;let n=t.getContext("2d");n.scale(hn,hn);let s=i*st;n.translate(0,-s),n.fillStyle="#fbf8ee",n.fillRect(0,s,360,st);for(let r=Math.floor((s-80)/60);r<=Math.floor((s+st+80)/60);r++)for(let a=0;a<Math.ceil(360/60);a++){let o=Pe(a+50,r);o<.35||(n.beginPath(),n.ellipse(a*60+Pe(a,r+9)*50,r*60+Pe(a+3,r)*50,16+o*20,9+o*10,o*3,0,Math.PI*2),n.save(),n.globalAlpha=.18,n.fillStyle=e.tint,n.fill(),n.restore())}n.strokeStyle="rgba(80,140,220,0.32)",n.lineWidth=.6;for(let r=Math.ceil(s/14)*14;r<s+st;r+=14)n.beginPath(),n.moveTo(0,r),n.lineTo(360,r),n.stroke();n.strokeStyle="rgba(230,80,80,0.45)",n.beginPath(),n.moveTo(16,s),n.lineTo(16,s+st),n.stroke();for(let r=0;r<26;r++){let a=Pe(r,i)*360,o=s+Pe(i,r)*st;n.strokeStyle=e.tuft,n.lineWidth=.9,n.beginPath(),n.moveTo(a-2,o-2),n.lineTo(a,o+1),n.lineTo(a+2,o-2),n.stroke(),xe.theme===0&&r%4===0&&(n.fillStyle=e.flowers[r%3],n.beginPath(),n.arc(a+6,o+2,1.4,0,7),n.fill())}if(s<440){n.beginPath(),n.rect(0,0,360,420),bt(n,e.floor,!1),n.strokeStyle=Mn.doodle,n.lineWidth=.6;for(let r=0;r<=420;r+=24)n.beginPath(),n.moveTo(0,r),n.lineTo(360,r+.8),n.stroke()}for(let r of xe.roads)if(!(r.y1<s-10||r.y0>s+st+10)){n.beginPath(),n.rect(r.x,r.y0,r.w,r.y1-r.y0),bt(n,e.road,!1),n.strokeStyle=Mn.doodle,n.lineWidth=.9;for(let a of[r.x,r.x+r.w]){n.beginPath(),n.moveTo(a,Math.max(r.y0,s-4));for(let o=Math.max(r.y0,s-4);o<Math.min(r.y1,s+st+4);o+=12)n.lineTo(a+(Pe(a,o)-.5)*1.6,o);n.stroke()}}for(let r of xe.rivers){if(r.y+r.h<s-20||r.y>s+st+20)continue;let a=[],o=0;for(let l of[...r.bridges].sort((c,h)=>c.x-h.x))l.x>o&&a.push([o,l.x]),o=l.x+l.w;if(o<360&&a.push([o,360]),r.kind==="water"){n.beginPath(),n.rect(0,r.y,360,r.h),bt(n,e.water),n.strokeStyle="#2a5ea8",n.lineWidth=.9;for(let l=8;l<360;l+=26){let c=r.y+10+l/26%3*12;n.beginPath(),n.moveTo(l,c),n.lineTo(l+5,c-4),n.lineTo(l+10,c),n.stroke()}for(let l of r.bridges){n.beginPath(),n.rect(l.x,r.y-8,l.w,r.h+16),bt(n,"#a86a30"),n.strokeStyle=Mn.doodle,n.lineWidth=.7;for(let c=r.y-4;c<r.y+r.h+8;c+=6)n.beginPath(),n.moveTo(l.x,c),n.lineTo(l.x+l.w,c+.6),n.stroke()}}else for(let[l,c]of a){n.beginPath(),n.rect(l,r.y,c-l,r.h),bt(n,r.kind==="ridge"?"#c8783a":"#8a96a8"),n.strokeStyle=Mn.doodle,n.lineWidth=.7;for(let h=l+6;h<c-2;h+=r.kind==="ridge"?11:16)n.beginPath(),n.moveTo(h,r.y+r.h-1),n.lineTo(h+(r.kind==="ridge"?4:0),r.y+r.h*.45),n.stroke()}}for(let r of xe.helipads)r.y<s-40||r.y>s+st+40||(n.beginPath(),n.arc(r.x,r.y,20,0,7),bt(n,"#bdbdbd"),n.fillStyle=Mn.doodle,n.font="bold 18px cursive",n.textAlign="center",n.textBaseline="middle",n.fillText("H",r.x,r.y+1));for(let r of xe.blockers)if(!(r.kind==="water"||r.kind==="ridge"||r.kind==="wall"||r.y+r.h<s-10||r.y>s+st+10))if(r.kind==="sandbag"){n.beginPath(),n.rect(r.x,r.y,r.w,r.h),bt(n,"#e0c080"),n.strokeStyle=Mn.doodle,n.lineWidth=.6;for(let a=r.x+6;a<r.x+r.w;a+=7)n.beginPath(),n.moveTo(a,r.y),n.lineTo(a,r.y+r.h),n.stroke()}else n.beginPath(),n.ellipse(r.x+r.w/2,r.y+r.h/2,r.w/2,r.h/2+1,0,0,7),bt(n,"#9e9e9e");for(let r of xe.deco)r.y<s-40||r.y>s+st+40||Gc(n,r.x,r.y,r.kind);return t}function td(i){if(wn==="doodle")return ed(i);let e=Br.pastel[xe.theme]||Br.pastel[0],t=document.createElement("canvas");t.width=360*hn,t.height=st*hn;let n=t.getContext("2d");n.scale(hn,hn);let s=i*st;n.translate(0,-s),n.fillStyle=e.ground,n.fillRect(0,s,360,st);for(let r=Math.floor((s-64)/48);r<=Math.floor((s+st+64)/48);r++)for(let a=0;a<6;a++){let o=Pe(a+50,r),l=a*48+Pe(a,r+9)*40,c=r*48+Pe(a+3,r)*40;n.beginPath(),n.ellipse(l,c,18+o*22,10+o*12,o*3,0,Math.PI*2),n.fillStyle=o>.5?e.blobLt:e.blobDk,n.globalAlpha=.55,n.fill(),n.globalAlpha=1;for(let h=0;h<3;h++){let u=a*48+Pe(a*7+h,r)*46,f=r*48+Pe(a,r*5+h)*46;n.strokeStyle=e.tuft,n.lineWidth=1,n.lineCap="round",n.beginPath(),n.moveTo(u-2,f-2),n.lineTo(u,f+1),n.lineTo(u+2,f-2),n.stroke(),xe.theme===0&&Pe(u|0,f|0)>.8&&Te(n,u+5,f+3,1.6,e.flowers[h%3])}}if(s<440){n.fillStyle=e.floor,n.fillRect(0,0,360,420),n.strokeStyle=e.floorLine,n.lineWidth=.8;for(let r=0;r<=420;r+=20)n.beginPath(),n.moveTo(0,r),n.lineTo(360,r),n.stroke();for(let r=0;r<420;r+=20)for(let a=r/20%2?0:20;a<360;a+=40)n.beginPath(),n.moveTo(a,r),n.lineTo(a,r+20),n.stroke();n.fillStyle="rgba(0,0,0,0.12)",n.fillRect(0,416,360,6)}for(let r of xe.roads)if(!(r.y1<s-10||r.y0>s+st+10)){be(n,r.x-2,r.y0,r.w+4,r.y1-r.y0,8,e.roadEdge),be(n,r.x,r.y0,r.w,r.y1-r.y0,7,e.road),n.strokeStyle=e.roadDk,n.lineWidth=2,n.setLineDash([6,6]);for(let a of[7,r.w-7])n.beginPath(),n.moveTo(r.x+a,r.y0),n.lineTo(r.x+a,r.y1),n.stroke();n.setLineDash([])}for(let r of xe.rivers){if(r.y+r.h<s-20||r.y>s+st+20)continue;let a=[],o=0;for(let l of[...r.bridges].sort((c,h)=>c.x-h.x))l.x>o&&a.push([o,l.x]),o=l.x+l.w;if(o<360&&a.push([o,360]),r.kind==="water"){n.fillStyle=e.bank,n.fillRect(0,r.y-6,360,r.h+12),n.fillStyle=Ui(n,r.y,r.y+r.h,e.water,e.waterLt),n.fillRect(0,r.y,360,r.h),n.strokeStyle="rgba(255,255,255,0.45)",n.lineWidth=1.2,n.lineCap="round";for(let l=0;l<26;l++){let c=Pe(l,r.y)*360,h=r.y+6+Pe(r.y,l)*(r.h-12);n.beginPath(),n.arc(c,h+3,4,Math.PI*1.15,Math.PI*1.85),n.stroke()}n.fillStyle="rgba(255,255,255,0.7)",n.fillRect(0,r.y+r.h-2,360,1.5);for(let l of r.bridges){n.fillStyle="rgba(0,0,40,0.25)",n.fillRect(l.x+3,r.y,l.w,r.h+4),be(n,l.x-2,r.y-9,l.w+4,r.h+18,3,"#8a5a32");for(let c=r.y-8;c<r.y+r.h+8;c+=5)be(n,l.x,c,l.w,4,1,"#c08850");be(n,l.x-4,r.y-10,3,r.h+20,1.5,"#5e3a1e"),be(n,l.x+l.w+1,r.y-10,3,r.h+20,1.5,"#5e3a1e")}}else for(let[l,c]of a){let h=r.kind==="ridge",u=h?12:9;if(n.fillStyle="rgba(0,0,0,0.18)",bn(n,l+2,r.y+4,c-l,r.h,5),n.fill(),be(n,l,r.y,c-l,r.h,h?7:3,h?"#a8643a":"#6f7886"),be(n,l,r.y,c-l,r.h-u,h?7:3,h?"#cf8a52":"#b7c0cc"),h)for(let f=l+4;f<c-4;f+=9)Te(n,f+Pe(f,r.y)*4,r.y+6+Pe(r.y,f)*(r.h-u-10),2.5,"rgba(255,230,190,0.35)");else{n.fillStyle="#ffffff",n.fillRect(l+2,r.y+1,c-l-4,2);for(let f of[l>0?l:-99,c<360?c-6:-99])if(!(f<0))for(let d=0;d<r.h;d+=6)n.fillStyle=d/6%2?"#2a2a2a":"#ffcc33",n.fillRect(f,r.y+d,6,Math.min(6,r.h-d))}}}for(let r of xe.helipads)r.y<s-40||r.y>s+st+40||(Ut(n,r.x+2,r.y+3,24,22,.15),Te(n,r.x,r.y,22,"#9b9a94"),Te(n,r.x,r.y,20,"#b4b3ac"),n.strokeStyle="#ffcc33",n.lineWidth=2,n.beginPath(),n.arc(r.x,r.y,16,0,Math.PI*2),n.stroke(),n.fillStyle="#ffffff",n.font="bold 18px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("H",r.x,r.y+1));for(let r of xe.blockers)if(!(r.kind==="water"||r.kind==="ridge"||r.kind==="wall"||r.y+r.h<s-10||r.y>s+st+10))if(r.kind==="sandbag"){n.fillStyle="rgba(0,0,0,0.15)",n.fillRect(r.x+2,r.y+r.h,r.w,3);for(let a=0;a<r.w;a+=8)be(n,r.x+a,r.y-1,8,r.h+2,3.5,"#b9955c"),be(n,r.x+a+1,r.y-1,6,3.5,1.7,"#e3c58a")}else Ut(n,r.x+r.w/2+3,r.y+r.h+1,r.w/2,4,.2),n.beginPath(),n.ellipse(r.x+r.w/2,r.y+r.h/2+1,r.w/2,r.h/2+1,0,0,Math.PI*2),n.fillStyle=vs(n,r.x+r.w/2,r.y+r.h/2,r.w/2,"#c5c2cc","#7c7987"),n.fill();for(let r of xe.deco)r.y<s-40||r.y>s+st+40||Gc(n,r.x,r.y,r.kind);return t}function nd(i,e){Ur!==xe.theme&&($n.clear(),Ur=xe.theme);let t=Math.floor(e/st),n=Math.floor((e+240)/st);for(let s=t;s<=n;s++){if(s<0||s*st>je)continue;let r=$n.get(s);r||(r=td(s),$n.set(s,r),$n.size>10&&$n.delete($n.keys().next().value)),i.drawImage(r,0,s*st-e,360,st)}}function Eo(i,e,t,n,s,r,a){i.save(),i.translate(e,t),i.rotate(n),be(i,0,-r/2-.8,s+.8,r+1.6,r/2,"rgba(0,0,0,0.45)"),be(i,0,-r/2,s,r,r/2,a),i.restore()}function id(i,e,t,n){xe.helipads.forEach((s,r)=>{let a=s.y-e;if(a<-60||a>290)return;let o=n[r]||0,l=o>0?Math.sin((1-o/2.4)*Math.PI)*26:0,c=s.x,h=a-2-l;Ut(i,c+2+l*.3,a+6,10,5),be(i,c-1.5,h+4,3,17,1.5,"#3f7e3a"),be(i,c-6,h+18,12,3,1.5,"#3f7e3a"),be(i,c-10,h-4,2,15,1,"#555a66"),be(i,c+8,h-4,2,15,1,"#555a66"),i.beginPath(),i.ellipse(c,h+2,7,10,0,0,Math.PI*2),bt(i,vs(i,c,h+2,10,"#7cc66a","#2f7a34")),i.beginPath(),i.ellipse(c,h-4,5,4,0,0,Math.PI*2),bt(i,"#a6e4ff"),Te(i,c-1.5,h-5.5,1.3,"#ffffff");let u=o>0,f=t*(u?.035:.006);Te(i,c,h-2,19,u?"rgba(40,40,48,0.18)":"rgba(40,40,48,0.08)"),i.strokeStyle="rgba(50,50,60,0.85)",i.lineWidth=2,i.lineCap="round";for(let d=0;d<2;d++){let y=f+d*Math.PI/2,m=Math.cos(y)*18,p=Math.sin(y)*18;i.beginPath(),i.moveTo(c-m,h-2-p),i.lineTo(c+m,h-2+p),i.stroke()}Te(i,c,h-2,2,"#555a66")})}function sd(i,e,t,n){let[s,r,a,o,l,c,h,u]=e,f=a,d=o-t;if(!(d<-110||d>300))switch(r){case q.soldier:{let y=Math.sin(n/90+s)*.6;if(Ut(i,f,d+5,4.5,2),wn==="doodle"){qc(i,f,d+y,l,h?"#ffffff":"#e53935",!0,n,s);break}i.save(),i.translate(f,d+y),i.rotate(l),be(i,2,-1,7,2,1,"#8a7a70"),i.restore(),Te(i,f,d+1.5+y,4.4,h?"#fff":"#a99ad0"),Te(i,f-3,d-5.2+y,1.6,h?"#fff":"#c79a72"),Te(i,f+3,d-5.2+y,1.6,h?"#fff":"#c79a72"),Te(i,f,d-2.5+y,3.8,h?"#fff":"#d9ae86"),i.beginPath(),i.arc(f,d-3.2+y,4,Math.PI*1.05,Math.PI*1.95),bt(i,h?"#fff":"#ec7a6a"),i.fillStyle=Mn.pastel,i.fillRect(f-1.8,d-2.2+y,.9,.9),i.fillRect(f+.9,d-2.2+y,.9,.9);break}case q.bossTurret:if(xe.theme===1){Te(i,f,d,9,"#4d4f5c"),Te(i,f,d,7,vs(i,f,d,7,"#9a9cac","#5a5c6a")),Eo(i,f,d,l,14,4,"#3b3d48"),Te(i,f,d,2.5,"#ff5340"),zr(i,f,d,9,h);break}case q.turret:{Ut(i,f+2,d+7,12,4),Te(i,f,d,11,"#8e7448");for(let y=0;y<10;y++){let m=y/10*Math.PI*2;i.save(),i.translate(f+Math.cos(m)*8.5,d+Math.sin(m)*8.5),i.rotate(m+Math.PI/2),be(i,-3.5,-2.2,7,4.4,2,"#d4b47a"),i.restore()}Te(i,f,d,5.5,"#4a4a52"),Eo(i,f,d,l,12,3.4,r===q.bossTurret?"#b5483a":"#6a6c78"),Te(i,f,d,3.2,r===q.bossTurret?"#e05a46":"#9ea0ae"),zr(i,f,d,11,h);break}case q.tank:{Ut(i,f+2,d+11,13,4);for(let y of[-11,6]){be(i,f+y,d-11,5,22,2,"#2e2f36"),i.fillStyle="#5a5c66";for(let m=-9+(n/80|0)%3;m<10;m+=3)i.fillRect(f+y+.8,d+m,3.4,1)}bn(i,f-7,d-10,14,20,3),bt(i,Ui(i,d-10,d+10,"#d0704a","#8c3c28")),Eo(i,f,d,l,15,3.4,"#6e2c1c"),Te(i,f,d,5.5,vs(i,f,d,5.5,"#e48a64","#94402a")),zr(i,f,d,12,h);break}case q.prison:{Ut(i,f+2,d+14,18,4),be(i,f-15,d-4,30,17,2,"#9a6a3a"),i.fillStyle="rgba(0,0,0,0.12)";for(let y=0;y<4;y++)i.fillRect(f-15,d-1+y*4,30,1);bn(i,f-18,d-15,36,13,3),bt(i,Ui(i,d-15,d-2,"#f07050","#b23a2a")),be(i,f-6,d+1,12,12,1.5,"#2a2420"),i.fillStyle="#c8c8d2";for(let y=-4.5;y<=4.5;y+=3)i.fillRect(f+y,d+1,1,12);(n/280+s|0)%2&&(Te(i,f-2,d+6,1.4,"#f2c49a"),Te(i,f+2.5,d+5,1.4,"#f2c49a")),be(i,f-14,d+1,7,5,1,"#fff2c0"),zr(i,f,d,17,h);break}case q.boss:{let y=xe.theme===2;i.fillStyle="rgba(0,0,0,0.22)",bn(i,f-90,d-40,186,96,10),i.fill(),bn(i,f-92,d-46,184,70,10),bt(i,Ui(i,d-46,d+24,y?"#d5dbe4":"#c2bbae",y?"#a3abb8":"#968e80")),bn(i,f-92,d+14,184,36,8),bt(i,y?"#737c8a":"#6c6458");for(let p=-88;p<88;p+=14)be(i,f+p,d-51,9,7,2,y?"#ffffff":"#d8d1c4");for(let p of[-80,80])Te(i,f+p,d-22,15,y?"#c3cad6":"#b0a898"),Te(i,f+p,d-24,12,y?"#e9eef5":"#cfc7b8"),be(i,f+p-2,d-32,4,12,2,"#d23c30");be(i,f-18,d+20,36,30,6,"#3a2c20"),i.fillStyle="#8a5a32";for(let p=-15;p<16;p+=6)i.fillRect(f+p,d+23,3.5,27);let m=(Math.sin(n/140)+1)/2;Te(i,f,d-12,16,"#3a3632"),Te(i,f,d-12,11,vs(i,f,d-12,11,`rgb(255,${150+m*80|0},120)`,"#c02a1e")),u&&(i.strokeStyle=`rgba(120,200,255,${.45+m*.45})`,i.lineWidth=2.5,i.beginPath(),i.arc(f,d-12,18+m*2,0,Math.PI*2),i.stroke()),h&&(i.globalAlpha=.35,be(i,f-92,d-46,184,96,10,"#fff"),i.globalAlpha=1);break}case q.boss2:{i.fillStyle="rgba(0,0,0,0.22)",bn(i,f-58,d-26,122,62,8),i.fill();for(let m of[-61,43]){be(i,f+m,d-30,18,60,5,"#2e2f36"),i.fillStyle="#5a5c66";for(let p=-27+(n/70|0)%4;p<28;p+=4)i.fillRect(f+m+2,d+p,14,1.5)}bn(i,f-44,d-30,88,54,8),bt(i,Ui(i,d-30,d+24,"#d2a462","#8a6030")),be(i,f-44,d+18,88,12,5,"#5a3c1c");for(let m of[-14,-3,8])be(i,f+m,d+21,6,6,1.5,"#1e1a16");for(let m=-40;m<40;m+=8)i.fillStyle=m/8%2?"#2a2a2a":"#ffcc33",i.fillRect(f+m,d-24,8,3);let y=(Math.sin(n/140)+1)/2;Te(i,f,d-6,9,"#3a3632"),Te(i,f,d-6,6.5,vs(i,f,d-6,6.5,`rgb(255,${150+y*80|0},120)`,"#c02a1e")),u&&(i.strokeStyle=`rgba(120,200,255,${.45+y*.45})`,i.lineWidth=2,i.beginPath(),i.arc(f,d-6,12+y*2,0,Math.PI*2),i.stroke()),h&&(i.globalAlpha=.35,be(i,f-60,d-30,120,60,8,"#fff"),i.globalAlpha=1);break}}}function qc(i,e,t,n,s,r,a,o){let l=(a/140+o|0)%2;i.save(),i.strokeStyle=Mn.doodle,i.lineWidth=.9,i.lineCap="round",i.beginPath(),i.moveTo(e,t-2),i.lineTo(e,t+3),i.moveTo(e,t+3),i.lineTo(e-2.5,t+7),i.moveTo(e,t+3),i.lineTo(e+2.5,t+7),r?(i.moveTo(e-3,t),i.lineTo(e+3,t)):(i.moveTo(e,t),i.lineTo(e-4,l?t-5:t-2),i.moveTo(e,t),i.lineTo(e+4,l?t-2:t-5)),i.stroke(),r&&(i.lineWidth=1.6,i.beginPath(),i.moveTo(e+2,t),i.lineTo(e+2+Math.cos(n)*6,t+Math.sin(n)*6),i.stroke()),i.restore(),Te(i,e,t-4.5,2.6,s)}function rd(i,e,t,n){let[s,r,a,o]=e,l=a-t,c=(n/140+s|0)%2,h=o&&(n/120|0)%2;if(Ut(i,r,l+5,4,2),wn==="doodle"){qc(i,r,l,0,h?"#fdd835":"#ffffff",!1,n,s);return}i.save(),i.strokeStyle=Mn.pastel,i.lineWidth=1.1,i.lineCap="round",i.beginPath(),i.moveTo(r-3,l),i.lineTo(r-5.5,c?l-5:l-2),i.moveTo(r+3,l),i.lineTo(r+5.5,c?l-2:l-5),i.stroke(),i.restore(),Te(i,r,l+1,3.8,h?"#ffe28a":"#ffffff"),be(i,r-2.6,l-11,2,6,1,"#fff4f4"),be(i,r+.6,l-11,2,6,1,"#fff4f4"),Te(i,r,l-3.5,3.4,"#fff8f4"),i.fillStyle=Mn.pastel,i.fillRect(r-1.6,l-3.8,.9,.9),i.fillRect(r+.8,l-3.8,.9,.9),i.fillStyle="#ffb3b8",i.fillRect(r-2.6,l-2.6,1,.8),i.fillRect(r+1.7,l-2.6,1,.8)}function Xc(i,e,t,n,s=1){let[r,a,o]=Vc[n]||Vc[0];bn(i,e-6*s,t-6*s,12*s,12*s,3.5*s),bt(i,Ui(i,t-6*s,t+6*s,r,a)),i.strokeStyle="rgba(255,255,255,0.8)",i.lineWidth=1*s,i.stroke(),i.fillStyle="#ffffff",i.font=`bold ${8*s}px ${wn==="doodle"?"cursive":"sans-serif"}`,i.textAlign="center",i.textBaseline="middle",i.fillText(o,e,t+.5*s)}function ad(i,e,t,n){let[s,r,a,o,l]=e;if(l&&(n/100|0)%2)return;let c=Math.sin(n/200+s)*1.5,h=o-t;Ut(i,a,h+7,5,2),Xc(i,a,h-2+c,r)}function od(i){if(!Ao[i]){let e=document.createElement("canvas");e.width=56,e.height=56,Xc(e.getContext("2d"),28,28,i,4),Ao[i]=e}return Ao[i]}function cd(i,e,t,n,s,r,a){let o=n-r;Ut(i,t+3,o+5,12,8);let l=a.invuln&&(performance.now()/90|0)%2,[c,h,u]=ld[e];i.save(),i.translate(t,o),i.rotate(s+Math.PI/2),i.scale(1.4,1.4),l&&(i.globalAlpha=.45);for(let[f,d]of[[-8,-7],[4,-7],[-8,3],[4,3]])be(i,f,d,4,5.5,1.5,"#26272e");if(bn(i,-6,-9,12,18,3.5),bt(i,Ui(i,-9,9,c,u)),be(i,-4.5,-8,9,4,1.8,"rgba(255,255,255,0.3)"),be(i,-5,-3.5,10,3,1.2,"#a6e4ff"),be(i,-4,1,3,3.5,1,"#9a5a30"),be(i,1,1,3,3.5,1,"#9a5a30"),wn==="pastel"&&(Te(i,-2.8,.2,1,"#f2d8c0"),Te(i,-.6,.2,1,"#f2d8c0"),Te(i,-1.7,2.2,2.2,"#fff4ea")),be(i,-1.2,-14,2.4,10,1.2,"#3a3c46"),Te(i,0,-3,2,"#5a5c68"),i.restore(),i.globalAlpha=1,a.shield){let f=performance.now()/120;i.beginPath(),i.arc(t,o,17+Math.sin(f)*1.2,0,Math.PI*2),i.fillStyle="rgba(140,210,255,0.16)",i.fill(),i.strokeStyle=a.shield<=2&&(f|0)%2?"rgba(140,210,255,0.3)":"rgba(140,210,255,0.9)",i.lineWidth=1.5,i.stroke()}a.carry>0&&(be(i,t-7,o-27,14,9,3,"#ffffff"),i.fillStyle="#2a2a2a",i.font="bold 7px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(a.carry,t,o-22.3)),a.self&&be(i,t-3,o+16,6,2.4,1.2,e===0?"#8fe070":"#8cc0ff")}function hd(i,e,t){let[,n,s,r,a,o=0]=e,l=r-t,c=(h,u,f)=>{Te(i,s,l,h*1.9,u.replace("1)","0.25)")),Te(i,s,l,h,f)};switch(n){case Se.mg:c(1.6,"rgba(255,240,120,1)","#fff6b0");break;case Se.big:c(2.6,"rgba(255,170,60,1)","#ffd27a");break;case Se.missile:case Se.homing:{i.save(),i.translate(s,l),i.rotate(o),Te(i,-6,0,2.5,"rgba(255,190,90,0.45)"),be(i,-4,-1.6,8,3.2,1.6,"#f4f4f4"),be(i,2,-1.6,2.5,3.2,1.5,"#ff4a38"),i.restore();break}case Se.laser:{let h=Math.cos(o),u=Math.sin(o);i.lineCap="round",i.strokeStyle="rgba(80,220,255,0.35)",i.lineWidth=6,i.beginPath(),i.moveTo(s-h*18,l-u*18),i.lineTo(s,l),i.stroke(),i.strokeStyle="#e4fcff",i.lineWidth=2,i.beginPath(),i.moveTo(s-h*16,l-u*16),i.lineTo(s,l),i.stroke();break}case Se.grenade:Te(i,s,l-a,2.5,"#4c6c2c");break;case Se.ebullet:c(2.4,"rgba(255,70,50,1)","#ff5a44"),Te(i,s-.6,l-.6,.9,"#fff");break;case Se.eshell:c(3.6,"rgba(255,120,30,1)","#ff8a2a"),Te(i,s+.6,l+.6,2,"#e8402a"),Te(i,s-1,l-1,1,"#fff");break}}function ud(i,e,t){let n=fd[e[1]];if(!n)return;let[s,r]=n,a=Math.max(0,Math.min(1,e[5])),o=e[2]-s/2,l=e[3]-t-r;l<-4||l>240||(be(i,o-.8,l-.8,s+1.6,3.6,1.8,"rgba(0,0,0,0.55)"),be(i,o,l,Math.max(2,s*a),2,1,a>.55?"#5be04a":a>.28?"#ffd23c":"#ff4a38"))}var st,$n,hn,Ur,wn,Br,Mn,Uc,be,Te,Ut,Bc,zr,Vc,Ao,ld,fd,Yc=xn(()=>{kn();ms();mi();Oi();To();st=256,$n=new Map,hn=2,Ur=-1,wn="pastel";Br={pastel:[{ground:"#c9dfa6",ground2:"#c2d99c",blobLt:"#d6e8b8",blobDk:"#b8d294",tuft:"#9cb878",road:"#f0d7a8",roadEdge:"#b98d68",roadDk:"#e2c494",water:"#a6d8e8",waterLt:"#c8eaf2",bank:"#f4e2bc",floor:"#e8d8bc",floorLine:"#cdb898",flowers:["#ffffff","#ffe2a0","#ffc2c8"]},{ground:"#f4d39c",ground2:"#f0cc92",blobLt:"#f9e0b2",blobDk:"#e9c286",tuft:"#d6aa70",road:"#e9bc84",roadEdge:"#b98d68",roadDk:"#ddb07a",water:"#a6d8e8",waterLt:"#c8eaf2",bank:"#f9e6c2",floor:"#ecd3aa",floorLine:"#d2b48a",flowers:["#f2c49a","#e8b080","#fff0d8"]},{ground:"#f2f1f4",ground2:"#ecebf1",blobLt:"#ffffff",blobDk:"#e2e0ea",tuft:"#c8c4d6",road:"#dfdbe6",roadEdge:"#a99cae",roadDk:"#d4cfdc",water:"#a6cfe8",waterLt:"#cfe6f4",bank:"#ece8f0",floor:"#d6d2dc",floorLine:"#bdb6c6",flowers:["#ffd6e0","#ffffff","#d6e6ff"]}],doodle:[{tint:"#7cc35a",road:"#d9a35a",water:"#4a90e2",floor:"#bdbdbd",tuft:"#5a9e40",flowers:["#e53935","#fdd835","#ec407a"]},{tint:"#e8b04a",road:"#c8823a",water:"#4a90e2",floor:"#d6b07a",tuft:"#c08a3a",flowers:["#8d6e63","#a1887f","#ff7043"]},{tint:"#90b8e0",road:"#9aa8ba",water:"#3a78c8",floor:"#9aa4b2",tuft:"#7a9cc8",flowers:["#64b5f6","#90caf9","#b39ddb"]}]},Mn={pastel:"#7a5640",doodle:"#2b2b33"};Uc=new Map;be=(i,e,t,n,s,r,a)=>{bn(i,e,t,n,s,r),bt(i,a)},Te=(i,e,t,n,s)=>{i.beginPath(),i.arc(e,t,n,0,Math.PI*2),bt(i,s)},Ut=(i,e,t,n,s,r=.22)=>{i.beginPath(),i.ellipse(e,t,n,s,0,0,Math.PI*2),i.fillStyle=wn==="doodle"?`rgba(60,60,80,${r*.6})`:`rgba(150,100,70,${r*.9})`,i.fill()},Bc=i=>[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)];zr=(i,e,t,n,s)=>{s&&(i.globalAlpha=.6,Te(i,e,t,n,"#ffffff"),i.globalAlpha=1)};Vc=[["#ff8a3c","#d4561c","R"],["#4aa8ff","#1f6cd4","P"],["#ff5a78","#cc2848","\u2665"],["#9a6aff","#6436cc","B"],["#ffd23c","#d49a10","W"]];Ao={};ld=[["#8fe070","#4fb83e","#2f8a2a"],["#8cc0ff","#4a8ef0","#2a5cb8"]];fd={[q.soldier]:[10,13],[q.turret]:[18,16],[q.bossTurret]:[18,16],[q.tank]:[20,18],[q.prison]:[26,20]}});function Mr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Kt(i,e,t){return Math.max(e,Math.min(t,i))}function ap(i,e){return(i%e+e)%e}function Vo(i,e,t){return(1-t)*i+t*e}function Ph(i){return(i&i-1)===0&&i!==0}function xl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vr(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function vf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function la(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Go(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Wr(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}function qo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ua.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Jo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hi.fromArray(i,r);let o=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=e.dot(Hi),c=t.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function yp(i,e,t,n,s,r,a,o){let l;if(e.side===en?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===wi,o),l===null)return null;ta.copy(o),ta.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ta);return c<t.near||c>t.far?null:{distance:c,point:ta.clone(),object:i}}function na(i,e,t,n,s,r,a,o,l){i.getVertexPosition(a,ar),i.getVertexPosition(o,or),i.getVertexPosition(l,lr);let c=yp(i,e,t,n,ar,or,lr,al);if(c){s&&(jr.fromBufferAttribute(s,a),Qr.fromBufferAttribute(s,o),ea.fromBufferAttribute(s,l),c.uv=ur.getUV(al,ar,or,lr,jr,Qr,ea,new qe)),r&&(jr.fromBufferAttribute(r,a),Qr.fromBufferAttribute(r,o),ea.fromBufferAttribute(r,l),c.uv2=ur.getUV(al,ar,or,lr,jr,Qr,ea,new qe));let h={a,b:o,c:l,normal:new D,materialIndex:0};ur.getNormal(ar,or,lr,h.normal),c.face=h}return c}function Ws(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Gt(i){let e={};for(let t=0;t<i.length;t++){let n=Ws(i[t]);for(let s in n)e[s]=n[s]}return e}function xp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mf(i){return i.getRenderTarget()===null&&i.outputEncoding===ot?On:gr}function wf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Sp(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,f=c.usage,d=i.createBuffer();i.bindBuffer(h,d),i.bufferData(h,u,f),c.onUploadCallback();let y;if(u instanceof Float32Array)y=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(u instanceof Int16Array)y=5122;else if(u instanceof Uint32Array)y=5125;else if(u instanceof Int32Array)y=5124;else if(u instanceof Int8Array)y=5120;else if(u instanceof Uint8Array)y=5121;else if(u instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){let f=h.array,d=h.updateRange;i.bindBuffer(u,c),d.count===-1?i.bufferSubData(u,0,f):(t?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u===void 0?n.set(c,s(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}function ig(i,e,t,n,s,r,a){let o=new Je(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function y(p,v){let M=!1,g=v.isScene===!0?v.background:null;g&&g.isTexture&&(g=(v.backgroundBlurriness>0?t:e).get(g));let x=i.xr,b=x.getSession&&x.getSession();b&&b.environmentBlendMode==="additive"&&(g=null),g===null?m(o,l):g&&g.isColor&&(m(g,1),M=!0),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Fa)?(h===void 0&&(h=new Dt(new Qi(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Ws(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=g.encoding!==ot,(u!==g||f!==g.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=g,f=g.version,d=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Dt(new _r(2,2),new ri({name:"BackgroundMaterial",uniforms:Ws(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=g.encoding!==ot,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||f!==g.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=g,f=g.version,d=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,v){p.getRGB(sa,Mf(i)),n.buffers.color.setClear(sa.r,sa.g,sa.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(p,v=1){o.set(p),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(o,l)},render:y}}function sg(i,e,t,n){let s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null),c=l,h=!1;function u(L,G,$,te,Y){let ne=!1;if(a){let Z=m(te,$,G);c!==Z&&(c=Z,d(c.object)),ne=v(L,te,$,Y),ne&&M(L,te,$,Y)}else{let Z=G.wireframe===!0;(c.geometry!==te.id||c.program!==$.id||c.wireframe!==Z)&&(c.geometry=te.id,c.program=$.id,c.wireframe=Z,ne=!0)}Y!==null&&t.update(Y,34963),(ne||h)&&(h=!1,_(L,G,$,te),Y!==null&&i.bindBuffer(34963,t.get(Y).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function y(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function m(L,G,$){let te=$.wireframe===!0,Y=o[L.id];Y===void 0&&(Y={},o[L.id]=Y);let ne=Y[G.id];ne===void 0&&(ne={},Y[G.id]=ne);let Z=ne[te];return Z===void 0&&(Z=p(f()),ne[te]=Z),Z}function p(L){let G=[],$=[],te=[];for(let Y=0;Y<s;Y++)G[Y]=0,$[Y]=0,te[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:$,attributeDivisors:te,object:L,attributes:{},index:null}}function v(L,G,$,te){let Y=c.attributes,ne=G.attributes,Z=0,Me=$.getAttributes();for(let O in Me)if(Me[O].location>=0){let re=Y[O],ae=ne[O];if(ae===void 0&&(O==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),O==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor)),re===void 0||re.attribute!==ae||ae&&re.data!==ae.data)return!0;Z++}return c.attributesNum!==Z||c.index!==te}function M(L,G,$,te){let Y={},ne=G.attributes,Z=0,Me=$.getAttributes();for(let O in Me)if(Me[O].location>=0){let re=ne[O];re===void 0&&(O==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),O==="instanceColor"&&L.instanceColor&&(re=L.instanceColor));let ae={};ae.attribute=re,re&&re.data&&(ae.data=re.data),Y[O]=ae,Z++}c.attributes=Y,c.attributesNum=Z,c.index=te}function g(){let L=c.newAttributes;for(let G=0,$=L.length;G<$;G++)L[G]=0}function x(L){b(L,0)}function b(L,G){let $=c.newAttributes,te=c.enabledAttributes,Y=c.attributeDivisors;$[L]=1,te[L]===0&&(i.enableVertexAttribArray(L),te[L]=1),Y[L]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,G),Y[L]=G)}function E(){let L=c.newAttributes,G=c.enabledAttributes;for(let $=0,te=G.length;$<te;$++)G[$]!==L[$]&&(i.disableVertexAttribArray($),G[$]=0)}function R(L,G,$,te,Y,ne){n.isWebGL2===!0&&($===5124||$===5125)?i.vertexAttribIPointer(L,G,$,Y,ne):i.vertexAttribPointer(L,G,$,te,Y,ne)}function _(L,G,$,te){if(n.isWebGL2===!1&&(L.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();let Y=te.attributes,ne=$.getAttributes(),Z=G.defaultAttributeValues;for(let Me in ne){let O=ne[Me];if(O.location>=0){let K=Y[Me];if(K===void 0&&(Me==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),Me==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),K!==void 0){let re=K.normalized,ae=K.itemSize,z=t.get(K);if(z===void 0)continue;let De=z.buffer,ge=z.type,ye=z.bytesPerElement;if(K.isInterleavedBufferAttribute){let fe=K.data,rt=fe.stride,ke=K.offset;if(fe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<O.locationSize;Ce++)b(O.location+Ce,fe.meshPerAttribute);L.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ce=0;Ce<O.locationSize;Ce++)x(O.location+Ce);i.bindBuffer(34962,De);for(let Ce=0;Ce<O.locationSize;Ce++)R(O.location+Ce,ae/O.locationSize,ge,re,rt*ye,(ke+ae/O.locationSize*Ce)*ye)}else{if(K.isInstancedBufferAttribute){for(let fe=0;fe<O.locationSize;fe++)b(O.location+fe,K.meshPerAttribute);L.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let fe=0;fe<O.locationSize;fe++)x(O.location+fe);i.bindBuffer(34962,De);for(let fe=0;fe<O.locationSize;fe++)R(O.location+fe,ae/O.locationSize,ge,re,ae*ye,ae/O.locationSize*fe*ye)}}else if(Z!==void 0){let re=Z[Me];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(O.location,re);break;case 3:i.vertexAttrib3fv(O.location,re);break;case 4:i.vertexAttrib4fv(O.location,re);break;default:i.vertexAttrib1fv(O.location,re)}}}}E()}function S(){U();for(let L in o){let G=o[L];for(let $ in G){let te=G[$];for(let Y in te)y(te[Y].object),delete te[Y];delete G[$]}delete o[L]}}function C(L){if(o[L.id]===void 0)return;let G=o[L.id];for(let $ in G){let te=G[$];for(let Y in te)y(te[Y].object),delete te[Y];delete G[$]}delete o[L.id]}function F(L){for(let G in o){let $=o[G];if($[L.id]===void 0)continue;let te=$[L.id];for(let Y in te)y(te[Y].object),delete te[Y];delete $[L.id]}}function U(){N(),h=!0,c!==l&&(c=l,d(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:U,resetDefaultState:N,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:F,initAttributes:g,enableAttribute:x,disableUnusedAttributes:E}}function rg(i,e,t,n){let s=n.isWebGL2,r;function a(c){r=c}function o(c,h){i.drawArrays(r,c,h),t.update(h,r,1)}function l(c,h,u){if(u===0)return;let f,d;if(s)f=i,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,h,u),t.update(h,r,u)}this.setMode=a,this.render=o,this.renderInstances=l}function ag(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext,o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(34930),f=i.getParameter(35660),d=i.getParameter(3379),y=i.getParameter(34076),m=i.getParameter(34921),p=i.getParameter(36347),v=i.getParameter(36348),M=i.getParameter(36349),g=f>0,x=a||e.has("OES_texture_float"),b=g&&x,E=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:g,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:E}}function og(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ti,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let y=u.clippingPlanes,m=u.clipIntersection,p=u.clipShadows,v=i.get(u);if(!s||y===null||y.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,g=M*4,x=v.clippingState||null;l.value=x,x=h(y,f,g,d);for(let b=0;b!==g;++b)x[b]=t[b];v.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,y){let m=u!==null?u.length:0,p=null;if(m!==0){if(p=l.value,y!==!0||p===null){let v=d+m*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<v)&&(p=new Float32Array(v));for(let g=0,x=d;g!==m;++g,x+=4)a.copy(u[g]).applyMatrix4(M,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function lg(i){let e=new WeakMap;function t(a,o){return o===dl?a.mapping=Bs:o===pl&&(a.mapping=Vs),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let o=a.mapping;if(o===dl||o===pl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ml(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function cg(i){let e=[],t=[],n=[],s=i,r=i-Fs+1+Vh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Fs?l=Vh[a-i+Fs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,y=6,m=3,p=2,v=1,M=new Float32Array(m*y*d),g=new Float32Array(p*y*d),x=new Float32Array(v*y*d);for(let E=0;E<d;E++){let R=E%3*2/3-1,_=E>2?0:-1,S=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];M.set(S,m*y*E),g.set(f,p*y*E);let C=[E,E,E,E,E,E];x.set(C,v*y*E)}let b=new pn;b.setAttribute("position",new tn(M,m)),b.setAttribute("uv",new tn(g,p)),b.setAttribute("faceIndex",new tn(x,v)),e.push(b),s>Fs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gh(i,e,t){let n=new ii(i,e,t);return n.texture.mapping=Fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ra(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function hg(i,e,t){let n=new Float32Array(Gi),s=new D(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function qh(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Xh(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Yl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===dl||l===pl,h=l===Bs||l===Vs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new ba(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new ba(i));let f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ug(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function dg(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let y in f.attributes)e.remove(f.attributes[y]);f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let y in f)e.update(f[y],34962);let d=u.morphAttributes;for(let y in d){let m=d[y];for(let p=0,v=m.length;p<v;p++)e.update(m[p],34962)}}function c(u){let f=[],d=u.index,y=u.attributes.position,m=0;if(d!==null){let M=d.array;m=d.version;for(let g=0,x=M.length;g<x;g+=3){let b=M[g+0],E=M[g+1],R=M[g+2];f.push(b,E,E,R,R,b)}}else{let M=y.array;m=y.version;for(let g=0,x=M.length/3-1;g<x;g+=3){let b=g+0,E=g+1,R=g+2;f.push(b,E,E,R,R,b)}}let p=new(vf(f)?xa:ya)(f,1);p.version=m;let v=r.get(u);v&&e.remove(v),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function pg(i,e,t,n){let s=n.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,d){i.drawElements(r,d,o,f*l),t.update(d,r,1)}function u(f,d,y){if(y===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,d,o,f*l,y),t.update(d,r,y)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function mg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function gg(i,e){return i[0]-e[0]}function yg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function xg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new It,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u,f){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let y=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=y!==void 0?y.length:0,p=r.get(h);if(p===void 0||p.count!==m){let G=function(){N.dispose(),r.delete(h),h.removeEventListener("dispose",G)};p!==void 0&&p.texture.dispose();let g=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],_=h.morphAttributes.color||[],S=0;g===!0&&(S=1),x===!0&&(S=2),b===!0&&(S=3);let C=h.attributes.position.count*S,F=1;C>e.maxTextureSize&&(F=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);let U=new Float32Array(C*F*4*m),N=new pa(U,C,F,m);N.type=Xi,N.needsUpdate=!0;let L=S*4;for(let $=0;$<m;$++){let te=E[$],Y=R[$],ne=_[$],Z=C*F*4*$;for(let Me=0;Me<te.count;Me++){let O=Me*L;g===!0&&(a.fromBufferAttribute(te,Me),U[Z+O+0]=a.x,U[Z+O+1]=a.y,U[Z+O+2]=a.z,U[Z+O+3]=0),x===!0&&(a.fromBufferAttribute(Y,Me),U[Z+O+4]=a.x,U[Z+O+5]=a.y,U[Z+O+6]=a.z,U[Z+O+7]=0),b===!0&&(a.fromBufferAttribute(ne,Me),U[Z+O+8]=a.x,U[Z+O+9]=a.y,U[Z+O+10]=a.z,U[Z+O+11]=ne.itemSize===4?a.w:1)}}p={count:m,texture:N,size:new qe(C,F)},r.set(h,p),h.addEventListener("dispose",G)}let v=0;for(let g=0;g<d.length;g++)v+=d[g];let M=h.morphTargetsRelative?1:1-v;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{let y=d===void 0?0:d.length,m=n[h.id];if(m===void 0||m.length!==y){m=[];for(let x=0;x<y;x++)m[x]=[x,0];n[h.id]=m}for(let x=0;x<y;x++){let b=m[x];b[0]=x,b[1]=d[x]}m.sort(yg);for(let x=0;x<8;x++)x<y&&m[x][1]?(o[x][0]=m[x][0],o[x][1]=m[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(gg);let p=h.morphAttributes.position,v=h.morphAttributes.normal,M=0;for(let x=0;x<8;x++){let b=o[x],E=b[0],R=b[1];E!==Number.MAX_SAFE_INTEGER&&R?(p&&h.getAttribute("morphTarget"+x)!==p[E]&&h.setAttribute("morphTarget"+x,p[E]),v&&h.getAttribute("morphNormal"+x)!==v[E]&&h.setAttribute("morphNormal"+x,v[E]),s[x]=R,M+=R):(p&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),v&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let g=h.morphTargetsRelative?1:1-M;f.getUniforms().setValue(i,"morphTargetBaseInfluence",g),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function _g(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);return s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}function Xs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Yh[s];if(r===void 0&&(r=new Float32Array(s),Yh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Oa(i,e){let t=Jh[e];t===void 0&&(t=new Int32Array(e),Jh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function Mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function Sg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Kh.set(n),i.uniformMatrix2fv(this.addr,!1,Kh),At(t,n)}}function Tg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Zh.set(n),i.uniformMatrix3fv(this.addr,!1,Zh),At(t,n)}}function Eg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;$h.set(n),i.uniformMatrix4fv(this.addr,!1,$h),At(t,n)}}function Ag(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function Cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function Pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function Lg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function Dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function Ng(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||Sf,s)}function Fg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ef,s)}function Og(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Af,s)}function zg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Tf,s)}function Ug(i){switch(i){case 5126:return vg;case 35664:return bg;case 35665:return Mg;case 35666:return wg;case 35674:return Sg;case 35675:return Tg;case 35676:return Eg;case 5124:case 35670:return Ag;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Ig;case 36295:return Dg;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return zg}}function Bg(i,e){i.uniform1fv(this.addr,e)}function Vg(i,e){let t=Xs(e,this.size,2);i.uniform2fv(this.addr,t)}function Hg(i,e){let t=Xs(e,this.size,3);i.uniform3fv(this.addr,t)}function Wg(i,e){let t=Xs(e,this.size,4);i.uniform4fv(this.addr,t)}function Gg(i,e){let t=Xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qg(i,e){let t=Xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xg(i,e){let t=Xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yg(i,e){i.uniform1iv(this.addr,e)}function Jg(i,e){i.uniform2iv(this.addr,e)}function $g(i,e){i.uniform3iv(this.addr,e)}function Zg(i,e){i.uniform4iv(this.addr,e)}function Kg(i,e){i.uniform1uiv(this.addr,e)}function jg(i,e){i.uniform2uiv(this.addr,e)}function Qg(i,e){i.uniform3uiv(this.addr,e)}function ey(i,e){i.uniform4uiv(this.addr,e)}function ty(i,e,t){let n=this.cache,s=e.length,r=Oa(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Sf,r[a])}function ny(i,e,t){let n=this.cache,s=e.length,r=Oa(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ef,r[a])}function iy(i,e,t){let n=this.cache,s=e.length,r=Oa(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Af,r[a])}function sy(i,e,t){let n=this.cache,s=e.length,r=Oa(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Tf,r[a])}function ry(i){switch(i){case 5126:return Bg;case 35664:return Vg;case 35665:return Hg;case 35666:return Wg;case 35674:return Gg;case 35675:return qg;case 35676:return Xg;case 5124:case 35670:return Yg;case 35667:case 35671:return Jg;case 35668:case 35672:return $g;case 35669:case 35673:return Zg;case 5125:return Kg;case 36294:return jg;case 36295:return Qg;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return sy}}function jh(i,e){i.seq.push(e),i.map[e.id]=e}function ay(i,e,t){let n=i.name,s=n.length;for(hl.lastIndex=0;;){let r=hl.exec(n),a=hl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){jh(t,c===void 0?new wl(o,i,e):new Sl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Tl(o),jh(t,u)),t=u}}}function Qh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function ly(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function cy(i){switch(i){case Zi:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function ef(i,e,t){let n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ly(i.getShaderSource(e),a)}else return s}function hy(i,e){let t=cy(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function fy(i,e){let t;switch(e){case Fd:t="Linear";break;case Od:t="Reinhard";break;case zd:t="OptimizedCineon";break;case Ud:t="ACESFilmic";break;case Bd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function uy(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fr).join(`
`)}function dy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function py(i,e){let t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function fr(i){return i!==""}function tf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function El(i){return i.replace(my,gy)}function gy(i,e){let t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return El(t)}function sf(i){return i.replace(yy,xy)}function xy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rf(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _y(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===df?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ql?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hr&&(e="SHADOWMAP_TYPE_VSM"),e}function vy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function by(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Vs&&(e="ENVMAP_MODE_REFRACTION"),e}function My(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gf:e="ENVMAP_BLENDING_MULTIPLY";break;case kd:e="ENVMAP_BLENDING_MIX";break;case Nd:e="ENVMAP_BLENDING_ADD";break}return e}function wy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Sy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=_y(t),c=vy(t),h=by(t),u=My(t),f=wy(t),d=t.isWebGL2?"":uy(t),y=dy(r),m=s.createProgram(),p,v,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[y].filter(fr).join(`
`),p.length>0&&(p+=`
`),v=[d,y].filter(fr).join(`
`),v.length>0&&(v+=`
`)):(p=[rf(t),"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),v=[d,rf(t),"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Fe.tonemapping_pars_fragment:"",t.toneMapping!==ni?fy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,hy("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),a=El(a),a=tf(a,t),a=nf(a,t),o=El(o),o=tf(o,t),o=nf(o,t),a=sf(a),o=sf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===Rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let g=M+p+a,x=M+v+o,b=Qh(s,35633,g),E=Qh(s,35632,x);if(s.attachShader(m,b),s.attachShader(m,E),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),i.debug.checkShaderErrors){let S=s.getProgramInfoLog(m).trim(),C=s.getShaderInfoLog(b).trim(),F=s.getShaderInfoLog(E).trim(),U=!0,N=!0;if(s.getProgramParameter(m,35714)===!1){U=!1;let L=ef(s,b,"vertex"),G=ef(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+S+`
`+L+`
`+G)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(C===""||F==="")&&(N=!1);N&&(this.diagnostics={runnable:U,programLog:S,vertexShader:{log:C,prefix:p},fragmentShader:{log:F,prefix:v}})}s.deleteShader(b),s.deleteShader(E);let R;this.getUniforms=function(){return R===void 0&&(R=new Us(s,m)),R};let _;return this.getAttributes=function(){return _===void 0&&(_=py(s,m)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=oy++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=E,this}function Ey(i,e,t,n,s,r,a){let o=new ga,l=new Al,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_,S,C,F,U){let N=F.fog,L=U.geometry,G=_.isMeshStandardMaterial?F.environment:null,$=(_.isMeshStandardMaterial?t:e).get(_.envMap||G),te=$&&$.mapping===Fa?$.image.height:null,Y=y[_.type];_.precision!==null&&(d=s.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let ne=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Z=ne!==void 0?ne.length:0,Me=0;L.morphAttributes.position!==void 0&&(Me=1),L.morphAttributes.normal!==void 0&&(Me=2),L.morphAttributes.color!==void 0&&(Me=3);let O,K,re,ae;if(Y){let rt=zn[Y];O=rt.vertexShader,K=rt.fragmentShader}else O=_.vertexShader,K=_.fragmentShader,l.update(_),re=l.getVertexShaderID(_),ae=l.getFragmentShaderID(_);let z=i.getRenderTarget(),De=_.alphaTest>0,ge=_.clearcoat>0,ye=_.iridescence>0;return{isWebGL2:h,shaderID:Y,shaderName:_.type,vertexShader:O,fragmentShader:K,defines:_.defines,customVertexShaderID:re,customFragmentShaderID:ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,instancing:U.isInstancedMesh===!0,instancingColor:U.isInstancedMesh===!0&&U.instanceColor!==null,supportsVertexTextures:f,outputEncoding:z===null?i.outputEncoding:z.isXRRenderTarget===!0?z.texture.encoding:Zi,map:!!_.map,matcap:!!_.matcap,envMap:!!$,envMapMode:$&&$.mapping,envMapCubeUVHeight:te,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===sp,tangentSpaceNormalMap:_.normalMapType===_f,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===ot,clearcoat:ge,clearcoatMap:ge&&!!_.clearcoatMap,clearcoatRoughnessMap:ge&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:ge&&!!_.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!_.iridescenceMap,iridescenceThicknessMap:ye&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===Os,alphaMap:!!_.alphaMap,alphaTest:De,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!L.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!N,useFog:_.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:u,skinning:U.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:_.toneMapped?i.toneMapping:ni,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===bi,flipSided:_.side===en,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)S.push(C),S.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(v(S,_),M(S,_),S.push(i.outputEncoding)),S.push(_.customProgramCacheKey),S.join()}function v(_,S){_.push(S.precision),_.push(S.outputEncoding),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.combine),_.push(S.vertexUvs),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function M(_,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.map&&o.enable(4),S.matcap&&o.enable(5),S.envMap&&o.enable(6),S.lightMap&&o.enable(7),S.aoMap&&o.enable(8),S.emissiveMap&&o.enable(9),S.bumpMap&&o.enable(10),S.normalMap&&o.enable(11),S.objectSpaceNormalMap&&o.enable(12),S.tangentSpaceNormalMap&&o.enable(13),S.clearcoat&&o.enable(14),S.clearcoatMap&&o.enable(15),S.clearcoatRoughnessMap&&o.enable(16),S.clearcoatNormalMap&&o.enable(17),S.iridescence&&o.enable(18),S.iridescenceMap&&o.enable(19),S.iridescenceThicknessMap&&o.enable(20),S.displacementMap&&o.enable(21),S.specularMap&&o.enable(22),S.roughnessMap&&o.enable(23),S.metalnessMap&&o.enable(24),S.gradientMap&&o.enable(25),S.alphaMap&&o.enable(26),S.alphaTest&&o.enable(27),S.vertexColors&&o.enable(28),S.vertexAlphas&&o.enable(29),S.vertexUvs&&o.enable(30),S.vertexTangents&&o.enable(31),S.uvsVertexOnly&&o.enable(32),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.physicallyCorrectLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.specularIntensityMap&&o.enable(15),S.specularColorMap&&o.enable(16),S.transmission&&o.enable(17),S.transmissionMap&&o.enable(18),S.thicknessMap&&o.enable(19),S.sheen&&o.enable(20),S.sheenColorMap&&o.enable(21),S.sheenRoughnessMap&&o.enable(22),S.decodeVideoTexture&&o.enable(23),S.opaque&&o.enable(24),_.push(o.mask)}function g(_){let S=y[_.type],C;if(S){let F=zn[S];C=_p.clone(F.uniforms)}else C=_.uniforms;return C}function x(_,S){let C;for(let F=0,U=c.length;F<U;F++){let N=c[F];if(N.cacheKey===S){C=N,++C.usedTimes;break}}return C===void 0&&(C=new Sy(i,S,_,r),c.push(C)),C}function b(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),_.destroy()}}function E(_){l.remove(_)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:g,acquireProgram:x,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:R}}function Ay(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Ry(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function af(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function of(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,d,y,m,p){let v=i[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:d,groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},i[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=d,v.groupOrder=y,v.renderOrder=u.renderOrder,v.z=m,v.group=p),e++,v}function o(u,f,d,y,m,p){let v=a(u,f,d,y,m,p);d.transmission>0?n.push(v):d.transparent===!0?s.push(v):t.push(v)}function l(u,f,d,y,m,p){let v=a(u,f,d,y,m,p);d.transmission>0?n.unshift(v):d.transparent===!0?s.unshift(v):t.unshift(v)}function c(u,f){t.length>1&&t.sort(u||Ry),n.length>1&&n.sort(f||af),s.length>1&&s.sort(f||af)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Cy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new of,i.set(n,[a])):s>=r.length?(a=new of,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Py(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Je};break;case"SpotLight":t={position:new D,direction:new D,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Ly(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function Dy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ky(i,e){let t=new Py,n=Ly(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)s.probe.push(new D);let r=new D,a=new xt,o=new xt;function l(h,u){let f=0,d=0,y=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let m=0,p=0,v=0,M=0,g=0,x=0,b=0,E=0,R=0,_=0;h.sort(Dy);let S=u!==!0?Math.PI:1;for(let F=0,U=h.length;F<U;F++){let N=h[F],L=N.color,G=N.intensity,$=N.distance,te=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=L.r*G*S,d+=L.g*G*S,y+=L.b*G*S;else if(N.isLightProbe)for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(N.sh.coefficients[Y],G);else if(N.isDirectionalLight){let Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*S),N.castShadow){let ne=N.shadow,Z=n.get(N);Z.shadowBias=ne.bias,Z.shadowNormalBias=ne.normalBias,Z.shadowRadius=ne.radius,Z.shadowMapSize=ne.mapSize,s.directionalShadow[m]=Z,s.directionalShadowMap[m]=te,s.directionalShadowMatrix[m]=N.shadow.matrix,x++}s.directional[m]=Y,m++}else if(N.isSpotLight){let Y=t.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(L).multiplyScalar(G*S),Y.distance=$,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,s.spot[v]=Y;let ne=N.shadow;if(N.map&&(s.spotLightMap[R]=N.map,R++,ne.updateMatrices(N),N.castShadow&&_++),s.spotLightMatrix[v]=ne.matrix,N.castShadow){let Z=n.get(N);Z.shadowBias=ne.bias,Z.shadowNormalBias=ne.normalBias,Z.shadowRadius=ne.radius,Z.shadowMapSize=ne.mapSize,s.spotShadow[v]=Z,s.spotShadowMap[v]=te,E++}v++}else if(N.isRectAreaLight){let Y=t.get(N);Y.color.copy(L).multiplyScalar(G),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),s.rectArea[M]=Y,M++}else if(N.isPointLight){let Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*S),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){let ne=N.shadow,Z=n.get(N);Z.shadowBias=ne.bias,Z.shadowNormalBias=ne.normalBias,Z.shadowRadius=ne.radius,Z.shadowMapSize=ne.mapSize,Z.shadowCameraNear=ne.camera.near,Z.shadowCameraFar=ne.camera.far,s.pointShadow[p]=Z,s.pointShadowMap[p]=te,s.pointShadowMatrix[p]=N.shadow.matrix,b++}s.point[p]=Y,p++}else if(N.isHemisphereLight){let Y=t.get(N);Y.skyColor.copy(N.color).multiplyScalar(G*S),Y.groundColor.copy(N.groundColor).multiplyScalar(G*S),s.hemi[g]=Y,g++}}M>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=se.LTC_FLOAT_1,s.rectAreaLTC2=se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=se.LTC_HALF_1,s.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=y;let C=s.hash;(C.directionalLength!==m||C.pointLength!==p||C.spotLength!==v||C.rectAreaLength!==M||C.hemiLength!==g||C.numDirectionalShadows!==x||C.numPointShadows!==b||C.numSpotShadows!==E||C.numSpotMaps!==R)&&(s.directional.length=m,s.spot.length=v,s.rectArea.length=M,s.point.length=p,s.hemi.length=g,s.directionalShadow.length=x,s.directionalShadowMap.length=x,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=x,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=E+R-_,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=_,C.directionalLength=m,C.pointLength=p,C.spotLength=v,C.rectAreaLength=M,C.hemiLength=g,C.numDirectionalShadows=x,C.numPointShadows=b,C.numSpotShadows=E,C.numSpotMaps=R,s.version=Iy++)}function c(h,u){let f=0,d=0,y=0,m=0,p=0,v=u.matrixWorldInverse;for(let M=0,g=h.length;M<g;M++){let x=h[M];if(x.isDirectionalLight){let b=s.directional[f];b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(v),f++}else if(x.isSpotLight){let b=s.spot[y];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(v),y++}else if(x.isRectAreaLight){let b=s.rectArea[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(v),o.identity(),a.copy(x.matrixWorld),a.premultiply(v),o.extractRotation(a),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){let b=s.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(v),d++}else if(x.isHemisphereLight){let b=s.hemi[p];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:s}}function lf(i,e){let t=new ky(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ny(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new lf(i,e),t.set(r,[l])):a>=o.length?(l=new lf(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}function zy(i,e,t){let n=new xr,s=new qe,r=new qe,a=new It,o=new Cl({depthPacking:ip}),l=new Pl,c={},h=t.maxTextureSize,u={[wi]:en,[en]:wi,[bi]:bi},f=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Fy,fragmentShader:Oy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let y=new pn;y.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new Dt(y,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=df,this.render=function(x,b,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;let R=i.getRenderTarget(),_=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Mi),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);for(let F=0,U=x.length;F<U;F++){let N=x[F],L=N.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);let G=L.getFrameExtents();if(s.multiply(G),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,L.mapSize.y=r.y)),L.map===null){let te=this.type!==hr?{minFilter:Tt,magFilter:Tt}:{};L.map=new ii(s.x,s.y,te),L.map.texture.name=N.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();let $=L.getViewportCount();for(let te=0;te<$;te++){let Y=L.getViewport(te);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),C.viewport(a),L.updateMatrices(N,te),n=L.getFrustum(),g(b,E,L.camera,N,this.type)}L.isPointLightShadow!==!0&&this.type===hr&&v(L,E),L.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(R,_,S)};function v(x,b){let E=e.update(m);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new ii(s.x,s.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(b,null,E,f,m,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(b,null,E,d,m,null)}function M(x,b,E,R,_,S){let C=null,F=E.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(F!==void 0)C=F;else if(C=E.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let U=C.uuid,N=b.uuid,L=c[U];L===void 0&&(L={},c[U]=L);let G=L[N];G===void 0&&(G=C.clone(),L[N]=G),C=G}return C.visible=b.visible,C.wireframe=b.wireframe,S===hr?C.side=b.shadowSide!==null?b.shadowSide:b.side:C.side=b.shadowSide!==null?b.shadowSide:u[b.side],C.alphaMap=b.alphaMap,C.alphaTest=b.alphaTest,C.map=b.map,C.clipShadows=b.clipShadows,C.clippingPlanes=b.clippingPlanes,C.clipIntersection=b.clipIntersection,C.displacementMap=b.displacementMap,C.displacementScale=b.displacementScale,C.displacementBias=b.displacementBias,C.wireframeLinewidth=b.wireframeLinewidth,C.linewidth=b.linewidth,E.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(C.referencePosition.setFromMatrixPosition(E.matrixWorld),C.nearDistance=R,C.farDistance=_),C}function g(x,b,E,R,_){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&_===hr)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,x.matrixWorld);let F=e.update(x),U=x.material;if(Array.isArray(U)){let N=F.groups;for(let L=0,G=N.length;L<G;L++){let $=N[L],te=U[$.materialIndex];if(te&&te.visible){let Y=M(x,te,R,E.near,E.far,_);i.renderBufferDirect(E,null,F,Y,x,$)}}}else if(U.visible){let N=M(x,U,R,E.near,E.far,_);i.renderBufferDirect(E,null,F,N,x,null)}}let C=x.children;for(let F=0,U=C.length;F<U;F++)g(C[F],b,E,R,_)}}function Uy(i,e,t){let n=t.isWebGL2;function s(){let P=!1,B=new It,j=null,he=new It(0,0,0,0);return{setMask:function(pe){j!==pe&&!P&&(i.colorMask(pe,pe,pe,pe),j=pe)},setLocked:function(pe){P=pe},setClear:function(pe,Ze,Ct,zt,Pi){Pi===!0&&(pe*=zt,Ze*=zt,Ct*=zt),B.set(pe,Ze,Ct,zt),he.equals(B)===!1&&(i.clearColor(pe,Ze,Ct,zt),he.copy(B))},reset:function(){P=!1,j=null,he.set(-1,0,0,0)}}}function r(){let P=!1,B=null,j=null,he=null;return{setTest:function(pe){pe?De(2929):ge(2929)},setMask:function(pe){B!==pe&&!P&&(i.depthMask(pe),B=pe)},setFunc:function(pe){if(j!==pe){switch(pe){case Ad:i.depthFunc(512);break;case Rd:i.depthFunc(519);break;case Cd:i.depthFunc(513);break;case ul:i.depthFunc(515);break;case Pd:i.depthFunc(514);break;case Ld:i.depthFunc(518);break;case Id:i.depthFunc(516);break;case Dd:i.depthFunc(517);break;default:i.depthFunc(515)}j=pe}},setLocked:function(pe){P=pe},setClear:function(pe){he!==pe&&(i.clearDepth(pe),he=pe)},reset:function(){P=!1,B=null,j=null,he=null}}}function a(){let P=!1,B=null,j=null,he=null,pe=null,Ze=null,Ct=null,zt=null,Pi=null;return{setTest:function(ht){P||(ht?De(2960):ge(2960))},setMask:function(ht){B!==ht&&!P&&(i.stencilMask(ht),B=ht)},setFunc:function(ht,qn,ln){(j!==ht||he!==qn||pe!==ln)&&(i.stencilFunc(ht,qn,ln),j=ht,he=qn,pe=ln)},setOp:function(ht,qn,ln){(Ze!==ht||Ct!==qn||zt!==ln)&&(i.stencilOp(ht,qn,ln),Ze=ht,Ct=qn,zt=ln)},setLocked:function(ht){P=ht},setClear:function(ht){Pi!==ht&&(i.clearStencil(ht),Pi=ht)},reset:function(){P=!1,B=null,j=null,he=null,pe=null,Ze=null,Ct=null,zt=null,Pi=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,f={},d={},y=new WeakMap,m=[],p=null,v=!1,M=null,g=null,x=null,b=null,E=null,R=null,_=null,S=!1,C=null,F=null,U=null,N=null,L=null,G=i.getParameter(35661),$=!1,te=0,Y=i.getParameter(7938);Y.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=te>=1):Y.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=te>=2);let ne=null,Z={},Me=i.getParameter(3088),O=i.getParameter(2978),K=new It().fromArray(Me),re=new It().fromArray(O);function ae(P,B,j){let he=new Uint8Array(4),pe=i.createTexture();i.bindTexture(P,pe),i.texParameteri(P,10241,9728),i.texParameteri(P,10240,9728);for(let Ze=0;Ze<j;Ze++)i.texImage2D(B+Ze,0,6408,1,1,0,6408,5121,he);return pe}let z={};z[3553]=ae(3553,3553,1),z[34067]=ae(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(2929),l.setFunc(ul),Ot(!1),on(Jc),De(2884),Vt(Mi);function De(P){f[P]!==!0&&(i.enable(P),f[P]=!0)}function ge(P){f[P]!==!1&&(i.disable(P),f[P]=!1)}function ye(P,B){return d[P]!==B?(i.bindFramebuffer(P,B),d[P]=B,n&&(P===36009&&(d[36160]=B),P===36160&&(d[36009]=B)),!0):!1}function fe(P,B){let j=m,he=!1;if(P)if(j=y.get(B),j===void 0&&(j=[],y.set(B,j)),P.isWebGLMultipleRenderTargets){let pe=P.texture;if(j.length!==pe.length||j[0]!==36064){for(let Ze=0,Ct=pe.length;Ze<Ct;Ze++)j[Ze]=36064+Ze;j.length=pe.length,he=!0}}else j[0]!==36064&&(j[0]=36064,he=!0);else j[0]!==1029&&(j[0]=1029,he=!0);he&&(t.isWebGL2?i.drawBuffers(j):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))}function rt(P){return p!==P?(i.useProgram(P),p=P,!0):!1}let ke={[Ns]:32774,[gd]:32778,[yd]:32779};if(n)ke[jc]=32775,ke[Qc]=32776;else{let P=e.get("EXT_blend_minmax");P!==null&&(ke[jc]=P.MIN_EXT,ke[Qc]=P.MAX_EXT)}let Ce={[xd]:0,[_d]:1,[vd]:768,[pf]:770,[Ed]:776,[Sd]:774,[Md]:772,[bd]:769,[mf]:771,[Td]:775,[wd]:773};function Vt(P,B,j,he,pe,Ze,Ct,zt){if(P===Mi){v===!0&&(ge(3042),v=!1);return}if(v===!1&&(De(3042),v=!0),P!==md){if(P!==M||zt!==S){if((g!==Ns||E!==Ns)&&(i.blendEquation(32774),g=Ns,E=Ns),zt)switch(P){case Os:i.blendFuncSeparate(1,771,1,771);break;case $c:i.blendFunc(1,1);break;case Zc:i.blendFuncSeparate(0,769,0,1);break;case Kc:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Os:i.blendFuncSeparate(770,771,1,771);break;case $c:i.blendFunc(770,1);break;case Zc:i.blendFuncSeparate(0,769,0,1);break;case Kc:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,b=null,R=null,_=null,M=P,S=zt}return}pe=pe||B,Ze=Ze||j,Ct=Ct||he,(B!==g||pe!==E)&&(i.blendEquationSeparate(ke[B],ke[pe]),g=B,E=pe),(j!==x||he!==b||Ze!==R||Ct!==_)&&(i.blendFuncSeparate(Ce[j],Ce[he],Ce[Ze],Ce[Ct]),x=j,b=he,R=Ze,_=Ct),M=P,S=!1}function an(P,B){P.side===bi?ge(2884):De(2884);let j=P.side===en;B&&(j=!j),Ot(j),P.blending===Os&&P.transparent===!1?Vt(Mi):Vt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);let he=P.stencilWrite;c.setTest(he),he&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ke(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?De(32926):ge(32926)}function Ot(P){C!==P&&(P?i.frontFace(2304):i.frontFace(2305),C=P)}function on(P){P!==dd?(De(2884),P!==F&&(P===Jc?i.cullFace(1029):P===pd?i.cullFace(1028):i.cullFace(1032))):ge(2884),F=P}function wt(P){P!==U&&($&&i.lineWidth(P),U=P)}function Ke(P,B,j){P?(De(32823),(N!==B||L!==j)&&(i.polygonOffset(B,j),N=B,L=j)):ge(32823)}function Gn(P){P?De(3089):ge(3089)}function yn(P){P===void 0&&(P=33984+G-1),ne!==P&&(i.activeTexture(P),ne=P)}function A(P,B,j){j===void 0&&(ne===null?j=33984+G-1:j=ne);let he=Z[j];he===void 0&&(he={type:void 0,texture:void 0},Z[j]=he),(he.type!==P||he.texture!==B)&&(ne!==j&&(i.activeTexture(j),ne=j),i.bindTexture(P,B||z[P]),he.type=P,he.texture=B)}function w(){let P=Z[ne];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function H(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(P){K.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),K.copy(P))}function _e(P){re.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),re.copy(P))}function Xe(P,B){let j=u.get(B);j===void 0&&(j=new WeakMap,u.set(B,j));let he=j.get(P);he===void 0&&(he=i.getUniformBlockIndex(B,P.name),j.set(P,he))}function ct(P,B){let he=u.get(B).get(P);h.get(B)!==he&&(i.uniformBlockBinding(B,he,P.__bindingPointIndex),h.set(B,he))}function Rt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ne=null,Z={},d={},y=new WeakMap,m=[],p=null,v=!1,M=null,g=null,x=null,b=null,E=null,R=null,_=null,S=!1,C=null,F=null,U=null,N=null,L=null,K.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:De,disable:ge,bindFramebuffer:ye,drawBuffers:fe,useProgram:rt,setBlending:Vt,setMaterial:an,setFlipSided:Ot,setCullFace:on,setLineWidth:wt,setPolygonOffset:Ke,setScissorTest:Gn,activeTexture:yn,bindTexture:A,unbindTexture:w,compressedTexImage2D:H,compressedTexImage3D:Q,texImage2D:Re,texImage3D:de,updateUBOMapping:Xe,uniformBlockBinding:ct,texStorage2D:X,texStorage3D:Ee,texSubImage2D:ie,texSubImage3D:oe,compressedTexSubImage2D:Le,compressedTexSubImage3D:le,scissor:Ae,viewport:_e,reset:Rt}}function By(i,e,t,n,s,r,a){let o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,h=s.maxTextureSize,u=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap,m,p=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,w){return v?new OffscreenCanvas(A,w):fa("canvas")}function g(A,w,H,Q){let ie=1;if((A.width>Q||A.height>Q)&&(ie=Q/Math.max(A.width,A.height)),ie<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let oe=w?xl:Math.floor,Le=oe(ie*A.width),le=oe(ie*A.height);m===void 0&&(m=M(Le,le));let X=H?M(Le,le):m;return X.width=Le,X.height=le,X.getContext("2d").drawImage(A,0,0,Le,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Le+"x"+le+")."),X}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function x(A){return Ph(A.width)&&Ph(A.height)}function b(A){return o?!1:A.wrapS!==An||A.wrapT!==An||A.minFilter!==Tt&&A.minFilter!==un}function E(A,w){return A.generateMipmaps&&w&&A.minFilter!==Tt&&A.minFilter!==un}function R(A){i.generateMipmap(A)}function _(A,w,H,Q,ie=!1){if(o===!1)return w;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe=w;return w===6403&&(H===5126&&(oe=33326),H===5131&&(oe=33325),H===5121&&(oe=33321)),w===33319&&(H===5126&&(oe=33328),H===5131&&(oe=33327),H===5121&&(oe=33323)),w===6408&&(H===5126&&(oe=34836),H===5131&&(oe=34842),H===5121&&(oe=Q===ot&&ie===!1?35907:32856),H===32819&&(oe=32854),H===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function S(A,w,H){return E(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==Tt&&A.minFilter!==un?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function C(A){return A===Tt||A===eh||A===Io?9728:9729}function F(A){let w=A.target;w.removeEventListener("dispose",F),N(w),w.isVideoTexture&&y.delete(w)}function U(A){let w=A.target;w.removeEventListener("dispose",U),G(w)}function N(A){let w=n.get(A);if(w.__webglInit===void 0)return;let H=A.source,Q=p.get(H);if(Q){let ie=Q[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&L(A),Object.keys(Q).length===0&&p.delete(H)}n.remove(A)}function L(A){let w=n.get(A);i.deleteTexture(w.__webglTexture);let H=A.source,Q=p.get(H);delete Q[w.__cacheKey],a.memory.textures--}function G(A){let w=A.texture,H=n.get(A),Q=n.get(w);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)i.deleteFramebuffer(H.__webglFramebuffer[ie]),H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[ie]);else{if(i.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ie=0;ie<H.__webglColorRenderbuffer.length;ie++)H.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[ie]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ie=0,oe=w.length;ie<oe;ie++){let Le=n.get(w[ie]);Le.__webglTexture&&(i.deleteTexture(Le.__webglTexture),a.memory.textures--),n.remove(w[ie])}n.remove(w),n.remove(A)}let $=0;function te(){$=0}function Y(){let A=$;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),$+=1,A}function ne(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.encoding),w.join()}function Z(A,w){let H=n.get(A);if(A.isVideoTexture&&Gn(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){let Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(H,A,w);return}}t.bindTexture(3553,H.__webglTexture,33984+w)}function Me(A,w){let H=n.get(A);if(A.version>0&&H.__version!==A.version){ge(H,A,w);return}t.bindTexture(35866,H.__webglTexture,33984+w)}function O(A,w){let H=n.get(A);if(A.version>0&&H.__version!==A.version){ge(H,A,w);return}t.bindTexture(32879,H.__webglTexture,33984+w)}function K(A,w){let H=n.get(A);if(A.version>0&&H.__version!==A.version){ye(H,A,w);return}t.bindTexture(34067,H.__webglTexture,33984+w)}let re={[ml]:10497,[An]:33071,[gl]:33648},ae={[Tt]:9728,[eh]:9984,[Io]:9986,[un]:9729,[Vd]:9985,[pr]:9987};function z(A,w,H){if(H?(i.texParameteri(A,10242,re[w.wrapS]),i.texParameteri(A,10243,re[w.wrapT]),(A===32879||A===35866)&&i.texParameteri(A,32882,re[w.wrapR]),i.texParameteri(A,10240,ae[w.magFilter]),i.texParameteri(A,10241,ae[w.minFilter])):(i.texParameteri(A,10242,33071),i.texParameteri(A,10243,33071),(A===32879||A===35866)&&i.texParameteri(A,32882,33071),(w.wrapS!==An||w.wrapT!==An)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,10240,C(w.magFilter)),i.texParameteri(A,10241,C(w.minFilter)),w.minFilter!==Tt&&w.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let Q=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Tt||w.minFilter!==Io&&w.minFilter!==pr||w.type===Xi&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===mr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(A,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function De(A,w){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",F));let Q=w.source,ie=p.get(Q);ie===void 0&&(ie={},p.set(Q,ie));let oe=ne(w);if(oe!==A.__cacheKey){ie[oe]===void 0&&(ie[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ie[oe].usedTimes++;let Le=ie[A.__cacheKey];Le!==void 0&&(ie[A.__cacheKey].usedTimes--,Le.usedTimes===0&&L(w)),A.__cacheKey=oe,A.__webglTexture=ie[oe].texture}return H}function ge(A,w,H){let Q=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=35866),w.isData3DTexture&&(Q=32879);let ie=De(A,w),oe=w.source;t.bindTexture(Q,A.__webglTexture,33984+H);let Le=n.get(oe);if(oe.version!==Le.__version||ie===!0){t.activeTexture(33984+H),i.pixelStorei(37440,w.flipY),i.pixelStorei(37441,w.premultiplyAlpha),i.pixelStorei(3317,w.unpackAlignment),i.pixelStorei(37443,0);let le=b(w)&&x(w.image)===!1,X=g(w.image,le,!1,h);X=yn(w,X);let Ee=x(X)||o,Re=r.convert(w.format,w.encoding),de=r.convert(w.type),Ae=_(w.internalFormat,Re,de,w.encoding,w.isVideoTexture);z(Q,w,Ee);let _e,Xe=w.mipmaps,ct=o&&w.isVideoTexture!==!0,Rt=Le.__version===void 0||ie===!0,P=S(w,X,Ee);if(w.isDepthTexture)Ae=6402,o?w.type===Xi?Ae=36012:w.type===qi?Ae=33190:w.type===zs?Ae=35056:Ae=33189:w.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Yi&&Ae===6402&&w.type!==xf&&w.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=qi,de=r.convert(w.type)),w.format===Hs&&Ae===6402&&(Ae=34041,w.type!==zs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=zs,de=r.convert(w.type))),Rt&&(ct?t.texStorage2D(3553,1,Ae,X.width,X.height):t.texImage2D(3553,0,Ae,X.width,X.height,0,Re,de,null));else if(w.isDataTexture)if(Xe.length>0&&Ee){ct&&Rt&&t.texStorage2D(3553,P,Ae,Xe[0].width,Xe[0].height);for(let B=0,j=Xe.length;B<j;B++)_e=Xe[B],ct?t.texSubImage2D(3553,B,0,0,_e.width,_e.height,Re,de,_e.data):t.texImage2D(3553,B,Ae,_e.width,_e.height,0,Re,de,_e.data);w.generateMipmaps=!1}else ct?(Rt&&t.texStorage2D(3553,P,Ae,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,Re,de,X.data)):t.texImage2D(3553,0,Ae,X.width,X.height,0,Re,de,X.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ct&&Rt&&t.texStorage3D(35866,P,Ae,Xe[0].width,Xe[0].height,X.depth);for(let B=0,j=Xe.length;B<j;B++)_e=Xe[B],w.format!==Rn?Re!==null?ct?t.compressedTexSubImage3D(35866,B,0,0,0,_e.width,_e.height,X.depth,Re,_e.data,0,0):t.compressedTexImage3D(35866,B,Ae,_e.width,_e.height,X.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?t.texSubImage3D(35866,B,0,0,0,_e.width,_e.height,X.depth,Re,de,_e.data):t.texImage3D(35866,B,Ae,_e.width,_e.height,X.depth,0,Re,de,_e.data)}else{ct&&Rt&&t.texStorage2D(3553,P,Ae,Xe[0].width,Xe[0].height);for(let B=0,j=Xe.length;B<j;B++)_e=Xe[B],w.format!==Rn?Re!==null?ct?t.compressedTexSubImage2D(3553,B,0,0,_e.width,_e.height,Re,_e.data):t.compressedTexImage2D(3553,B,Ae,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?t.texSubImage2D(3553,B,0,0,_e.width,_e.height,Re,de,_e.data):t.texImage2D(3553,B,Ae,_e.width,_e.height,0,Re,de,_e.data)}else if(w.isDataArrayTexture)ct?(Rt&&t.texStorage3D(35866,P,Ae,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,Re,de,X.data)):t.texImage3D(35866,0,Ae,X.width,X.height,X.depth,0,Re,de,X.data);else if(w.isData3DTexture)ct?(Rt&&t.texStorage3D(32879,P,Ae,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,Re,de,X.data)):t.texImage3D(32879,0,Ae,X.width,X.height,X.depth,0,Re,de,X.data);else if(w.isFramebufferTexture){if(Rt)if(ct)t.texStorage2D(3553,P,Ae,X.width,X.height);else{let B=X.width,j=X.height;for(let he=0;he<P;he++)t.texImage2D(3553,he,Ae,B,j,0,Re,de,null),B>>=1,j>>=1}}else if(Xe.length>0&&Ee){ct&&Rt&&t.texStorage2D(3553,P,Ae,Xe[0].width,Xe[0].height);for(let B=0,j=Xe.length;B<j;B++)_e=Xe[B],ct?t.texSubImage2D(3553,B,0,0,Re,de,_e):t.texImage2D(3553,B,Ae,Re,de,_e);w.generateMipmaps=!1}else ct?(Rt&&t.texStorage2D(3553,P,Ae,X.width,X.height),t.texSubImage2D(3553,0,0,0,Re,de,X)):t.texImage2D(3553,0,Ae,Re,de,X);E(w,Ee)&&R(Q),Le.__version=oe.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ye(A,w,H){if(w.image.length!==6)return;let Q=De(A,w),ie=w.source;t.bindTexture(34067,A.__webglTexture,33984+H);let oe=n.get(ie);if(ie.version!==oe.__version||Q===!0){t.activeTexture(33984+H),i.pixelStorei(37440,w.flipY),i.pixelStorei(37441,w.premultiplyAlpha),i.pixelStorei(3317,w.unpackAlignment),i.pixelStorei(37443,0);let Le=w.isCompressedTexture||w.image[0].isCompressedTexture,le=w.image[0]&&w.image[0].isDataTexture,X=[];for(let B=0;B<6;B++)!Le&&!le?X[B]=g(w.image[B],!1,!0,c):X[B]=le?w.image[B].image:w.image[B],X[B]=yn(w,X[B]);let Ee=X[0],Re=x(Ee)||o,de=r.convert(w.format,w.encoding),Ae=r.convert(w.type),_e=_(w.internalFormat,de,Ae,w.encoding),Xe=o&&w.isVideoTexture!==!0,ct=oe.__version===void 0||Q===!0,Rt=S(w,Ee,Re);z(34067,w,Re);let P;if(Le){Xe&&ct&&t.texStorage2D(34067,Rt,_e,Ee.width,Ee.height);for(let B=0;B<6;B++){P=X[B].mipmaps;for(let j=0;j<P.length;j++){let he=P[j];w.format!==Rn?de!==null?Xe?t.compressedTexSubImage2D(34069+B,j,0,0,he.width,he.height,de,he.data):t.compressedTexImage2D(34069+B,j,_e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(34069+B,j,0,0,he.width,he.height,de,Ae,he.data):t.texImage2D(34069+B,j,_e,he.width,he.height,0,de,Ae,he.data)}}}else{P=w.mipmaps,Xe&&ct&&(P.length>0&&Rt++,t.texStorage2D(34067,Rt,_e,X[0].width,X[0].height));for(let B=0;B<6;B++)if(le){Xe?t.texSubImage2D(34069+B,0,0,0,X[B].width,X[B].height,de,Ae,X[B].data):t.texImage2D(34069+B,0,_e,X[B].width,X[B].height,0,de,Ae,X[B].data);for(let j=0;j<P.length;j++){let pe=P[j].image[B].image;Xe?t.texSubImage2D(34069+B,j+1,0,0,pe.width,pe.height,de,Ae,pe.data):t.texImage2D(34069+B,j+1,_e,pe.width,pe.height,0,de,Ae,pe.data)}}else{Xe?t.texSubImage2D(34069+B,0,0,0,de,Ae,X[B]):t.texImage2D(34069+B,0,_e,de,Ae,X[B]);for(let j=0;j<P.length;j++){let he=P[j];Xe?t.texSubImage2D(34069+B,j+1,0,0,de,Ae,he.image[B]):t.texImage2D(34069+B,j+1,_e,de,Ae,he.image[B])}}}E(w,Re)&&R(34067),oe.__version=ie.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function fe(A,w,H,Q,ie){let oe=r.convert(H.format,H.encoding),Le=r.convert(H.type),le=_(H.internalFormat,oe,Le,H.encoding);n.get(w).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,le,w.width,w.height,w.depth,0,oe,Le,null):t.texImage2D(ie,0,le,w.width,w.height,0,oe,Le,null)),t.bindFramebuffer(36160,A),Ke(w)?f.framebufferTexture2DMultisampleEXT(36160,Q,ie,n.get(H).__webglTexture,0,wt(w)):(ie===3553||ie>=34069&&ie<=34074)&&i.framebufferTexture2D(36160,Q,ie,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function rt(A,w,H){if(i.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let Q=33189;if(H||Ke(w)){let ie=w.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Xi?Q=36012:ie.type===qi&&(Q=33190));let oe=wt(w);Ke(w)?f.renderbufferStorageMultisampleEXT(36161,oe,Q,w.width,w.height):i.renderbufferStorageMultisample(36161,oe,Q,w.width,w.height)}else i.renderbufferStorage(36161,Q,w.width,w.height);i.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){let Q=wt(w);H&&Ke(w)===!1?i.renderbufferStorageMultisample(36161,Q,35056,w.width,w.height):Ke(w)?f.renderbufferStorageMultisampleEXT(36161,Q,35056,w.width,w.height):i.renderbufferStorage(36161,34041,w.width,w.height),i.framebufferRenderbuffer(36160,33306,36161,A)}else{let Q=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ie=0;ie<Q.length;ie++){let oe=Q[ie],Le=r.convert(oe.format,oe.encoding),le=r.convert(oe.type),X=_(oe.internalFormat,Le,le,oe.encoding),Ee=wt(w);H&&Ke(w)===!1?i.renderbufferStorageMultisample(36161,Ee,X,w.width,w.height):Ke(w)?f.renderbufferStorageMultisampleEXT(36161,Ee,X,w.width,w.height):i.renderbufferStorage(36161,X,w.width,w.height)}}i.bindRenderbuffer(36161,null)}function ke(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z(w.depthTexture,0);let Q=n.get(w.depthTexture).__webglTexture,ie=wt(w);if(w.depthTexture.format===Yi)Ke(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ie):i.framebufferTexture2D(36160,36096,3553,Q,0);else if(w.depthTexture.format===Hs)Ke(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ie):i.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function Ce(A){let w=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ke(w.__webglFramebuffer,A)}else if(H){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]=i.createRenderbuffer(),rt(w.__webglDepthbuffer[Q],A,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),rt(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function Vt(A,w,H){let Q=n.get(A);w!==void 0&&fe(Q.__webglFramebuffer,A,A.texture,36064,3553),H!==void 0&&Ce(A)}function an(A){let w=A.texture,H=n.get(A),Q=n.get(w);A.addEventListener("dispose",U),A.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=w.version,a.memory.textures++);let ie=A.isWebGLCubeRenderTarget===!0,oe=A.isWebGLMultipleRenderTargets===!0,Le=x(A)||o;if(ie){H.__webglFramebuffer=[];for(let le=0;le<6;le++)H.__webglFramebuffer[le]=i.createFramebuffer()}else{if(H.__webglFramebuffer=i.createFramebuffer(),oe)if(s.drawBuffers){let le=A.texture;for(let X=0,Ee=le.length;X<Ee;X++){let Re=n.get(le[X]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Ke(A)===!1){let le=oe?w:[w];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let X=0;X<le.length;X++){let Ee=le[X];H.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(36161,H.__webglColorRenderbuffer[X]);let Re=r.convert(Ee.format,Ee.encoding),de=r.convert(Ee.type),Ae=_(Ee.internalFormat,Re,de,Ee.encoding,A.isXRRenderTarget===!0),_e=wt(A);i.renderbufferStorageMultisample(36161,_e,Ae,A.width,A.height),i.framebufferRenderbuffer(36160,36064+X,36161,H.__webglColorRenderbuffer[X])}i.bindRenderbuffer(36161,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,Q.__webglTexture),z(34067,w,Le);for(let le=0;le<6;le++)fe(H.__webglFramebuffer[le],A,w,36064,34069+le);E(w,Le)&&R(34067),t.unbindTexture()}else if(oe){let le=A.texture;for(let X=0,Ee=le.length;X<Ee;X++){let Re=le[X],de=n.get(Re);t.bindTexture(3553,de.__webglTexture),z(3553,Re,Le),fe(H.__webglFramebuffer,A,Re,36064+X,3553),E(Re,Le)&&R(3553)}t.unbindTexture()}else{let le=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?le=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,Q.__webglTexture),z(le,w,Le),fe(H.__webglFramebuffer,A,w,36064,le),E(w,Le)&&R(le),t.unbindTexture()}A.depthBuffer&&Ce(A)}function Ot(A){let w=x(A)||o,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Q=0,ie=H.length;Q<ie;Q++){let oe=H[Q];if(E(oe,w)){let Le=A.isWebGLCubeRenderTarget?34067:3553,le=n.get(oe).__webglTexture;t.bindTexture(Le,le),R(Le),t.unbindTexture()}}}function on(A){if(o&&A.samples>0&&Ke(A)===!1){let w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,Q=A.height,ie=16384,oe=[],Le=A.stencilBuffer?33306:36096,le=n.get(A),X=A.isWebGLMultipleRenderTargets===!0;if(X)for(let Ee=0;Ee<w.length;Ee++)t.bindFramebuffer(36160,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Ee,36161,null),t.bindFramebuffer(36160,le.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Ee,3553,null,0);t.bindFramebuffer(36008,le.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,le.__webglFramebuffer);for(let Ee=0;Ee<w.length;Ee++){oe.push(36064+Ee),A.depthBuffer&&oe.push(Le);let Re=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Re===!1&&(A.depthBuffer&&(ie|=256),A.stencilBuffer&&(ie|=1024)),X&&i.framebufferRenderbuffer(36008,36064,36161,le.__webglColorRenderbuffer[Ee]),Re===!0&&(i.invalidateFramebuffer(36008,[Le]),i.invalidateFramebuffer(36009,[Le])),X){let de=n.get(w[Ee]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,de,0)}i.blitFramebuffer(0,0,H,Q,0,0,H,Q,ie,9728),d&&i.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let Ee=0;Ee<w.length;Ee++){t.bindFramebuffer(36160,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Ee,36161,le.__webglColorRenderbuffer[Ee]);let Re=n.get(w[Ee]).__webglTexture;t.bindFramebuffer(36160,le.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Ee,3553,Re,0)}t.bindFramebuffer(36009,le.__webglMultisampledFramebuffer)}}function wt(A){return Math.min(u,A.samples)}function Ke(A){let w=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Gn(A){let w=a.render.frame;y.get(A)!==w&&(y.set(A,w),A.update())}function yn(A,w){let H=A.encoding,Q=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===yl||H!==Zi&&(H===ot?o===!1?e.has("EXT_sRGB")===!0&&Q===Rn?(A.format=yl,A.minFilter=un,A.generateMipmaps=!1):w=ua.sRGBToLinear(w):(Q!==Rn||ie!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),w}this.allocateTextureUnit=Y,this.resetTextureUnits=te,this.setTexture2D=Z,this.setTexture2DArray=Me,this.setTexture3D=O,this.setTextureCube=K,this.rebindTextures=Vt,this.setupRenderTarget=an,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Ke}function Vy(i,e,t){let n=t.isWebGL2;function s(r,a=null){let o;if(r===$i)return 5121;if(r===qd)return 32819;if(r===Xd)return 32820;if(r===Hd)return 5120;if(r===Wd)return 5122;if(r===xf)return 5123;if(r===Gd)return 5124;if(r===qi)return 5125;if(r===Xi)return 5126;if(r===mr)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Yd)return 6406;if(r===Rn)return 6408;if(r===Jd)return 6409;if(r===$d)return 6410;if(r===Yi)return 6402;if(r===Hs)return 34041;if(r===yl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Xl)return 6403;if(r===Zd)return 36244;if(r===Kd)return 33319;if(r===jd)return 33320;if(r===Qd)return 36249;if(r===Do||r===ko||r===No||r===Fo)if(a===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Do)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===No)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Do)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ko)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===No)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===th||r===nh||r===ih||r===sh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===th)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ih)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===sh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ep)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===rh||r===ah)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===rh)return a===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ah)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===oh||r===lh||r===ch||r===hh||r===fh||r===uh||r===dh||r===ph||r===mh||r===gh||r===yh||r===xh||r===_h||r===vh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===oh)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===lh)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ch)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hh)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===fh)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uh)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===dh)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ph)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===mh)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===gh)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yh)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xh)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_h)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vh)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Oo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Oo)return a===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===tp||r===bh||r===Mh||r===wh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Oo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===bh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zs?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}function Wy(i,e){function t(m,p){p.color.getRGB(m.fogColor.value,Mf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,M,g){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,g)):p.isMeshMatcapMaterial?(s(m,p),d(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?o(m,p,v,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix));let g;p.aoMap?g=p.aoMap:p.lightMap&&(g=p.lightMap),g!==void 0&&(g.isWebGLRenderTarget&&(g=g.texture),g.matrixAutoUpdate===!0&&g.updateMatrix(),m.uv2Transform.value.copy(g.matrix))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),m.uvTransform.value.copy(g.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===en&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Gy(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(35375):0;function l(M,g){let x=g.program;n.uniformBlockBinding(M,x)}function c(M,g){let x=s[M.id];x===void 0&&(y(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",p));let b=g.program;n.updateUBOMapping(M,b);let E=e.render.frame;r[M.id]!==E&&(f(M),r[M.id]=E)}function h(M){let g=u();M.__bindingPointIndex=g;let x=i.createBuffer(),b=M.__size,E=M.usage;return i.bindBuffer(35345,x),i.bufferData(35345,b,E),i.bindBuffer(35345,null),i.bindBufferBase(35345,g,x),x}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let g=s[M.id],x=M.uniforms,b=M.__cache;i.bindBuffer(35345,g);for(let E=0,R=x.length;E<R;E++){let _=x[E];if(d(_,E,b)===!0){let S=_.__offset,C=Array.isArray(_.value)?_.value:[_.value],F=0;for(let U=0;U<C.length;U++){let N=C[U],L=m(N);typeof N=="number"?(_.__data[0]=N,i.bufferSubData(35345,S+F,_.__data)):N.isMatrix3?(_.__data[0]=N.elements[0],_.__data[1]=N.elements[1],_.__data[2]=N.elements[2],_.__data[3]=N.elements[0],_.__data[4]=N.elements[3],_.__data[5]=N.elements[4],_.__data[6]=N.elements[5],_.__data[7]=N.elements[0],_.__data[8]=N.elements[6],_.__data[9]=N.elements[7],_.__data[10]=N.elements[8],_.__data[11]=N.elements[0]):(N.toArray(_.__data,F),F+=L.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,S,_.__data)}}i.bindBuffer(35345,null)}function d(M,g,x){let b=M.value;if(x[g]===void 0){if(typeof b=="number")x[g]=b;else{let E=Array.isArray(b)?b:[b],R=[];for(let _=0;_<E.length;_++)R.push(E[_].clone());x[g]=R}return!0}else if(typeof b=="number"){if(x[g]!==b)return x[g]=b,!0}else{let E=Array.isArray(x[g])?x[g]:[x[g]],R=Array.isArray(b)?b:[b];for(let _=0;_<E.length;_++){let S=E[_];if(S.equals(R[_])===!1)return S.copy(R[_]),!0}}return!1}function y(M){let g=M.uniforms,x=0,b=16,E=0;for(let R=0,_=g.length;R<_;R++){let S=g[R],C={boundary:0,storage:0},F=Array.isArray(S.value)?S.value:[S.value];for(let U=0,N=F.length;U<N;U++){let L=F[U],G=m(L);C.boundary+=G.boundary,C.storage+=G.storage}if(S.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=x,R>0){E=x%b;let U=b-E;E!==0&&U-C.boundary<0&&(x+=b-E,S.__offset=x)}x+=C.storage}return E=x%b,E>0&&(x+=b-E),M.__size=x,M.__cache={},this}function m(M){let g={boundary:0,storage:0};return typeof M=="number"?(g.boundary=4,g.storage=4):M.isVector2?(g.boundary=8,g.storage=8):M.isVector3||M.isColor?(g.boundary=16,g.storage=12):M.isVector4?(g.boundary=16,g.storage=16):M.isMatrix3?(g.boundary=48,g.storage=48):M.isMatrix4?(g.boundary=64,g.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),g}function p(M){let g=M.target;g.removeEventListener("dispose",p);let x=a.indexOf(g.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function v(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:v}}function qy(){let i=fa("canvas");return i.style.display="block",i}function Jl(i={}){this.isWebGLRenderer=!0;let e=i.canvas!==void 0?i.canvas:qy(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1,h;t!==null?h=t.getContextAttributes().alpha:h=i.alpha!==void 0?i.alpha:!1;let u=null,f=null,d=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Zi,this.physicallyCorrectLights=!1,this.toneMapping=ni,this.toneMappingExposure=1;let m=this,p=!1,v=0,M=0,g=null,x=-1,b=null,E=new It,R=new It,_=null,S=e.width,C=e.height,F=1,U=null,N=null,L=new It(0,0,S,C),G=new It(0,0,S,C),$=!1,te=new xr,Y=!1,ne=!1,Z=null,Me=new xt,O=new qe,K=new D,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return g===null?F:1}let z=t;function De(T,k){for(let V=0;V<T.length;V++){let I=T[V],W=e.getContext(I,k);if(W!==null)return W}return null}try{let T={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r149"),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",Xe,!1),z===null){let k=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&k.shift(),z=De(k,T),z===null)throw De(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ge,ye,fe,rt,ke,Ce,Vt,an,Ot,on,wt,Ke,Gn,yn,A,w,H,Q,ie,oe,Le,le,X,Ee;function Re(){ge=new ug(z),ye=new ag(z,ge,i),ge.init(ye),le=new Vy(z,ge,ye),fe=new Uy(z,ge,ye),rt=new mg,ke=new Ay,Ce=new By(z,ge,fe,ke,ye,le,rt),Vt=new lg(m),an=new fg(m),Ot=new Sp(z,ye),X=new sg(z,ge,Ot,ye),on=new dg(z,Ot,rt,X),wt=new _g(z,on,Ot,rt),ie=new xg(z,ye,Ce),w=new og(ke),Ke=new Ey(m,Vt,an,ge,ye,X,w),Gn=new Wy(m,ke),yn=new Cy,A=new Ny(ge,ye),Q=new ig(m,Vt,an,fe,wt,h,a),H=new zy(m,wt,ye),Ee=new Gy(z,rt,ye,fe),oe=new rg(z,ge,rt,ye),Le=new pg(z,ge,rt,ye),rt.programs=Ke.programs,m.capabilities=ye,m.extensions=ge,m.properties=ke,m.renderLists=yn,m.shadowMap=H,m.state=fe,m.info=rt}Re();let de=new Dl(m,z);this.xr=de,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let T=ge.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ge.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(T){T!==void 0&&(F=T,this.setSize(S,C,!1))},this.getSize=function(T){return T.set(S,C)},this.setSize=function(T,k,V){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=T,C=k,e.width=Math.floor(T*F),e.height=Math.floor(k*F),V!==!1&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(S*F,C*F).floor()},this.setDrawingBufferSize=function(T,k,V){S=T,C=k,F=V,e.width=Math.floor(T*V),e.height=Math.floor(k*V),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(L)},this.setViewport=function(T,k,V,I){T.isVector4?L.set(T.x,T.y,T.z,T.w):L.set(T,k,V,I),fe.viewport(E.copy(L).multiplyScalar(F).floor())},this.getScissor=function(T){return T.copy(G)},this.setScissor=function(T,k,V,I){T.isVector4?G.set(T.x,T.y,T.z,T.w):G.set(T,k,V,I),fe.scissor(R.copy(G).multiplyScalar(F).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(T){fe.setScissorTest($=T)},this.setOpaqueSort=function(T){U=T},this.setTransparentSort=function(T){N=T},this.getClearColor=function(T){return T.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(T=!0,k=!0,V=!0){let I=0;T&&(I|=16384),k&&(I|=256),V&&(I|=1024),z.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",Xe,!1),yn.dispose(),A.dispose(),ke.dispose(),Vt.dispose(),an.dispose(),wt.dispose(),X.dispose(),Ee.dispose(),Ke.dispose(),de.dispose(),de.removeEventListener("sessionstart",he),de.removeEventListener("sessionend",pe),Z&&(Z.dispose(),Z=null),Ze.stop()};function Ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;let T=rt.autoReset,k=H.enabled,V=H.autoUpdate,I=H.needsUpdate,W=H.type;Re(),rt.autoReset=T,H.enabled=k,H.autoUpdate=V,H.needsUpdate=I,H.type=W}function Xe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ct(T){let k=T.target;k.removeEventListener("dispose",ct),Rt(k)}function Rt(T){P(T),ke.remove(T)}function P(T){let k=ke.get(T).programs;k!==void 0&&(k.forEach(function(V){Ke.releaseProgram(V)}),T.isShaderMaterial&&Ke.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,V,I,W,we){k===null&&(k=re);let Ie=W.isMesh&&W.matrixWorld.determinant()<0,Oe=cu(T,k,V,I,W);fe.setMaterial(I,Ie);let ze=V.index,Ye=1;I.wireframe===!0&&(ze=on.getWireframeAttribute(V),Ye=2);let He=V.drawRange,We=V.attributes.position,_t=He.start*Ye,Xt=(He.start+He.count)*Ye;we!==null&&(_t=Math.max(_t,we.start*Ye),Xt=Math.min(Xt,(we.start+we.count)*Ye)),ze!==null?(_t=Math.max(_t,0),Xt=Math.min(Xt,ze.count)):We!=null&&(_t=Math.max(_t,0),Xt=Math.min(Xt,We.count));let Xn=Xt-_t;if(Xn<0||Xn===1/0)return;X.setup(W,I,Oe,V,ze);let Li,vt=oe;if(ze!==null&&(Li=Ot.get(ze),vt=Le,vt.setIndex(Li)),W.isMesh)I.wireframe===!0?(fe.setLineWidth(I.wireframeLinewidth*ae()),vt.setMode(1)):vt.setMode(4);else if(W.isLine){let Ge=I.linewidth;Ge===void 0&&(Ge=1),fe.setLineWidth(Ge*ae()),W.isLineSegments?vt.setMode(1):W.isLineLoop?vt.setMode(2):vt.setMode(3)}else W.isPoints?vt.setMode(0):W.isSprite&&vt.setMode(4);if(W.isInstancedMesh)vt.renderInstances(_t,Xn,W.count);else if(V.isInstancedBufferGeometry){let Ge=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Qa=Math.min(V.instanceCount,Ge);vt.renderInstances(_t,Xn,Qa)}else vt.render(_t,Xn)},this.compile=function(T,k){function V(I,W,we){I.transparent===!0&&I.side===bi&&I.forceSinglePass===!1?(I.side=en,I.needsUpdate=!0,ln(I,W,we),I.side=wi,I.needsUpdate=!0,ln(I,W,we),I.side=bi):ln(I,W,we)}f=A.get(T),f.init(),y.push(f),T.traverseVisible(function(I){I.isLight&&I.layers.test(k.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights(m.physicallyCorrectLights),T.traverse(function(I){let W=I.material;if(W)if(Array.isArray(W))for(let we=0;we<W.length;we++){let Ie=W[we];V(Ie,T,I)}else V(W,T,I)}),y.pop(),f=null};let B=null;function j(T){B&&B(T)}function he(){Ze.stop()}function pe(){Ze.start()}let Ze=new wf;Ze.setAnimationLoop(j),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(T){B=T,de.setAnimationLoop(T),T===null?Ze.stop():Ze.start()},de.addEventListener("sessionstart",he),de.addEventListener("sessionend",pe),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(k),k=de.getCamera()),T.isScene===!0&&T.onBeforeRender(m,T,k,g),f=A.get(T,y.length),f.init(),y.push(f),Me.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),te.setFromProjectionMatrix(Me),ne=this.localClippingEnabled,Y=w.init(this.clippingPlanes,ne),u=yn.get(T,d.length),u.init(),d.push(u),Ct(T,k,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(U,N),Y===!0&&w.beginShadows();let V=f.state.shadowsArray;if(H.render(V,T,k),Y===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(u,T),f.setupLights(m.physicallyCorrectLights),k.isArrayCamera){let I=k.cameras;for(let W=0,we=I.length;W<we;W++){let Ie=I[W];zt(u,T,Ie,Ie.viewport)}}else zt(u,T,k);g!==null&&(Ce.updateMultisampleRenderTarget(g),Ce.updateRenderTargetMipmap(g)),T.isScene===!0&&T.onAfterRender(m,T,k),X.resetDefaultState(),x=-1,b=null,y.pop(),y.length>0?f=y[y.length-1]:f=null,d.pop(),d.length>0?u=d[d.length-1]:u=null};function Ct(T,k,V,I){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||te.intersectsSprite(T)){I&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Me);let Ie=wt.update(T),Oe=T.material;Oe.visible&&u.push(T,Ie,Oe,V,K.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==rt.render.frame&&(T.skeleton.update(),T.skeleton.frame=rt.render.frame),!T.frustumCulled||te.intersectsObject(T))){I&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Me);let Ie=wt.update(T),Oe=T.material;if(Array.isArray(Oe)){let ze=Ie.groups;for(let Ye=0,He=ze.length;Ye<He;Ye++){let We=ze[Ye],_t=Oe[We.materialIndex];_t&&_t.visible&&u.push(T,Ie,_t,V,K.z,We)}}else Oe.visible&&u.push(T,Ie,Oe,V,K.z,null)}}let we=T.children;for(let Ie=0,Oe=we.length;Ie<Oe;Ie++)Ct(we[Ie],k,V,I)}function zt(T,k,V,I){let W=T.opaque,we=T.transmissive,Ie=T.transparent;f.setupLightsView(V),Y===!0&&w.setGlobalState(m.clippingPlanes,V),we.length>0&&Pi(W,k,V),I&&fe.viewport(E.copy(I)),W.length>0&&ht(W,k,V),we.length>0&&ht(we,k,V),Ie.length>0&&ht(Ie,k,V),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Pi(T,k,V){let I=ye.isWebGL2;Z===null&&(Z=new ii(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?mr:$i,minFilter:pr,samples:I&&r===!0?4:0})),m.getDrawingBufferSize(O),I?Z.setSize(O.x,O.y):Z.setSize(xl(O.x),xl(O.y));let W=m.getRenderTarget();m.setRenderTarget(Z),m.clear();let we=m.toneMapping;m.toneMapping=ni,ht(T,k,V),m.toneMapping=we,Ce.updateMultisampleRenderTarget(Z),Ce.updateRenderTargetMipmap(Z),m.setRenderTarget(W)}function ht(T,k,V){let I=k.isScene===!0?k.overrideMaterial:null;for(let W=0,we=T.length;W<we;W++){let Ie=T[W],Oe=Ie.object,ze=Ie.geometry,Ye=I===null?Ie.material:I,He=Ie.group;Oe.layers.test(V.layers)&&qn(Oe,k,V,ze,Ye,He)}}function qn(T,k,V,I,W,we){T.onBeforeRender(m,k,V,I,W,we),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(m,k,V,I,T,we),W.transparent===!0&&W.side===bi&&W.forceSinglePass===!1?(W.side=en,W.needsUpdate=!0,m.renderBufferDirect(V,k,I,W,T,we),W.side=wi,W.needsUpdate=!0,m.renderBufferDirect(V,k,I,W,T,we),W.side=bi):m.renderBufferDirect(V,k,I,W,T,we),T.onAfterRender(m,k,V,I,W,we)}function ln(T,k,V){k.isScene!==!0&&(k=re);let I=ke.get(T),W=f.state.lights,we=f.state.shadowsArray,Ie=W.state.version,Oe=Ke.getParameters(T,W.state,we,k,V),ze=Ke.getProgramCacheKey(Oe),Ye=I.programs;I.environment=T.isMeshStandardMaterial?k.environment:null,I.fog=k.fog,I.envMap=(T.isMeshStandardMaterial?an:Vt).get(T.envMap||I.environment),Ye===void 0&&(T.addEventListener("dispose",ct),Ye=new Map,I.programs=Ye);let He=Ye.get(ze);if(He!==void 0){if(I.currentProgram===He&&I.lightsStateVersion===Ie)return fc(T,Oe),He}else Oe.uniforms=Ke.getUniforms(T),T.onBuild(V,Oe,m),T.onBeforeCompile(Oe,m),He=Ke.acquireProgram(Oe,ze),Ye.set(ze,He),I.uniforms=Oe.uniforms;let We=I.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(We.clippingPlanes=w.uniform),fc(T,Oe),I.needsLights=fu(T),I.lightsStateVersion=Ie,I.needsLights&&(We.ambientLightColor.value=W.state.ambient,We.lightProbe.value=W.state.probe,We.directionalLights.value=W.state.directional,We.directionalLightShadows.value=W.state.directionalShadow,We.spotLights.value=W.state.spot,We.spotLightShadows.value=W.state.spotShadow,We.rectAreaLights.value=W.state.rectArea,We.ltc_1.value=W.state.rectAreaLTC1,We.ltc_2.value=W.state.rectAreaLTC2,We.pointLights.value=W.state.point,We.pointLightShadows.value=W.state.pointShadow,We.hemisphereLights.value=W.state.hemi,We.directionalShadowMap.value=W.state.directionalShadowMap,We.directionalShadowMatrix.value=W.state.directionalShadowMatrix,We.spotShadowMap.value=W.state.spotShadowMap,We.spotLightMatrix.value=W.state.spotLightMatrix,We.spotLightMap.value=W.state.spotLightMap,We.pointShadowMap.value=W.state.pointShadowMap,We.pointShadowMatrix.value=W.state.pointShadowMatrix);let _t=He.getUniforms(),Xt=Us.seqWithValue(_t.seq,We);return I.currentProgram=He,I.uniformsList=Xt,He}function fc(T,k){let V=ke.get(T);V.outputEncoding=k.outputEncoding,V.instancing=k.instancing,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphColors=k.morphColors,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}function cu(T,k,V,I,W){k.isScene!==!0&&(k=re),Ce.resetTextureUnits();let we=k.fog,Ie=I.isMeshStandardMaterial?k.environment:null,Oe=g===null?m.outputEncoding:g.isXRRenderTarget===!0?g.texture.encoding:Zi,ze=(I.isMeshStandardMaterial?an:Vt).get(I.envMap||Ie),Ye=I.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,He=!!I.normalMap&&!!V.attributes.tangent,We=!!V.morphAttributes.position,_t=!!V.morphAttributes.normal,Xt=!!V.morphAttributes.color,Xn=I.toneMapped?m.toneMapping:ni,Li=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,vt=Li!==void 0?Li.length:0,Ge=ke.get(I),Qa=f.state.lights;if(Y===!0&&(ne===!0||T!==b)){let Yt=T===b&&I.id===x;w.setState(I,T,Yt)}let Pt=!1;I.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Qa.state.version||Ge.outputEncoding!==Oe||W.isInstancedMesh&&Ge.instancing===!1||!W.isInstancedMesh&&Ge.instancing===!0||W.isSkinnedMesh&&Ge.skinning===!1||!W.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==ze||I.fog===!0&&Ge.fog!==we||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==w.numPlanes||Ge.numIntersection!==w.numIntersection)||Ge.vertexAlphas!==Ye||Ge.vertexTangents!==He||Ge.morphTargets!==We||Ge.morphNormals!==_t||Ge.morphColors!==Xt||Ge.toneMapping!==Xn||ye.isWebGL2===!0&&Ge.morphTargetsCount!==vt)&&(Pt=!0):(Pt=!0,Ge.__version=I.version);let Ii=Ge.currentProgram;Pt===!0&&(Ii=ln(I,k,W));let uc=!1,Ks=!1,eo=!1,Ht=Ii.getUniforms(),Di=Ge.uniforms;if(fe.useProgram(Ii.program)&&(uc=!0,Ks=!0,eo=!0),I.id!==x&&(x=I.id,Ks=!0),uc||b!==T){if(Ht.setValue(z,"projectionMatrix",T.projectionMatrix),ye.logarithmicDepthBuffer&&Ht.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),b!==T&&(b=T,Ks=!0,eo=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){let Yt=Ht.map.cameraPosition;Yt!==void 0&&Yt.setValue(z,K.setFromMatrixPosition(T.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Ht.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||W.isSkinnedMesh)&&Ht.setValue(z,"viewMatrix",T.matrixWorldInverse)}if(W.isSkinnedMesh){Ht.setOptional(z,W,"bindMatrix"),Ht.setOptional(z,W,"bindMatrixInverse");let Yt=W.skeleton;Yt&&(ye.floatVertexTextures?(Yt.boneTexture===null&&Yt.computeBoneTexture(),Ht.setValue(z,"boneTexture",Yt.boneTexture,Ce),Ht.setValue(z,"boneTextureSize",Yt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let to=V.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0&&ye.isWebGL2===!0)&&ie.update(W,V,I,Ii),(Ks||Ge.receiveShadow!==W.receiveShadow)&&(Ge.receiveShadow=W.receiveShadow,Ht.setValue(z,"receiveShadow",W.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Di.envMap.value=ze,Di.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Ks&&(Ht.setValue(z,"toneMappingExposure",m.toneMappingExposure),Ge.needsLights&&hu(Di,eo),we&&I.fog===!0&&Gn.refreshFogUniforms(Di,we),Gn.refreshMaterialUniforms(Di,I,F,C,Z),Us.upload(z,Ge.uniformsList,Di,Ce)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Us.upload(z,Ge.uniformsList,Di,Ce),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Ht.setValue(z,"center",W.center),Ht.setValue(z,"modelViewMatrix",W.modelViewMatrix),Ht.setValue(z,"normalMatrix",W.normalMatrix),Ht.setValue(z,"modelMatrix",W.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){let Yt=I.uniformsGroups;for(let no=0,uu=Yt.length;no<uu;no++)if(ye.isWebGL2){let dc=Yt[no];Ee.update(dc,Ii),Ee.bind(dc,Ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ii}function hu(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function fu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return g},this.setRenderTargetTextures=function(T,k,V){ke.get(T.texture).__webglTexture=k,ke.get(T.depthTexture).__webglTexture=V;let I=ke.get(T);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=V===void 0,I.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,k){let V=ke.get(T);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,V=0){g=T,v=k,M=V;let I=!0,W=null,we=!1,Ie=!1;if(T){let ze=ke.get(T);ze.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),I=!1):ze.__webglFramebuffer===void 0?Ce.setupRenderTarget(T):ze.__hasExternalTextures&&Ce.rebindTextures(T,ke.get(T.texture).__webglTexture,ke.get(T.depthTexture).__webglTexture);let Ye=T.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ie=!0);let He=ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(W=He[k],we=!0):ye.isWebGL2&&T.samples>0&&Ce.useMultisampledRTT(T)===!1?W=ke.get(T).__webglMultisampledFramebuffer:W=He,E.copy(T.viewport),R.copy(T.scissor),_=T.scissorTest}else E.copy(L).multiplyScalar(F).floor(),R.copy(G).multiplyScalar(F).floor(),_=$;if(fe.bindFramebuffer(36160,W)&&ye.drawBuffers&&I&&fe.drawBuffers(T,W),fe.viewport(E),fe.scissor(R),fe.setScissorTest(_),we){let ze=ke.get(T.texture);z.framebufferTexture2D(36160,36064,34069+k,ze.__webglTexture,V)}else if(Ie){let ze=ke.get(T.texture),Ye=k||0;z.framebufferTextureLayer(36160,36064,ze.__webglTexture,V||0,Ye)}x=-1},this.readRenderTargetPixels=function(T,k,V,I,W,we,Ie){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){fe.bindFramebuffer(36160,Oe);try{let ze=T.texture,Ye=ze.format,He=ze.type;if(Ye!==Rn&&le.convert(Ye)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let We=He===mr&&(ge.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ge.has("EXT_color_buffer_float"));if(He!==$i&&le.convert(He)!==z.getParameter(35738)&&!(He===Xi&&(ye.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-I&&V>=0&&V<=T.height-W&&z.readPixels(k,V,I,W,le.convert(Ye),le.convert(He),we)}finally{let ze=g!==null?ke.get(g).__webglFramebuffer:null;fe.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(T,k,V=0){let I=Math.pow(2,-V),W=Math.floor(k.image.width*I),we=Math.floor(k.image.height*I);Ce.setTexture2D(k,0),z.copyTexSubImage2D(3553,V,0,0,T.x,T.y,W,we),fe.unbindTexture()},this.copyTextureToTexture=function(T,k,V,I=0){let W=k.image.width,we=k.image.height,Ie=le.convert(V.format),Oe=le.convert(V.type);Ce.setTexture2D(V,0),z.pixelStorei(37440,V.flipY),z.pixelStorei(37441,V.premultiplyAlpha),z.pixelStorei(3317,V.unpackAlignment),k.isDataTexture?z.texSubImage2D(3553,I,T.x,T.y,W,we,Ie,Oe,k.image.data):k.isCompressedTexture?z.compressedTexSubImage2D(3553,I,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,Ie,k.mipmaps[0].data):z.texSubImage2D(3553,I,T.x,T.y,Ie,Oe,k.image),I===0&&V.generateMipmaps&&z.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(T,k,V,I,W=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let we=T.max.x-T.min.x+1,Ie=T.max.y-T.min.y+1,Oe=T.max.z-T.min.z+1,ze=le.convert(I.format),Ye=le.convert(I.type),He;if(I.isData3DTexture)Ce.setTexture3D(I,0),He=32879;else if(I.isDataArrayTexture)Ce.setTexture2DArray(I,0),He=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,I.flipY),z.pixelStorei(37441,I.premultiplyAlpha),z.pixelStorei(3317,I.unpackAlignment);let We=z.getParameter(3314),_t=z.getParameter(32878),Xt=z.getParameter(3316),Xn=z.getParameter(3315),Li=z.getParameter(32877),vt=V.isCompressedTexture?V.mipmaps[0]:V.image;z.pixelStorei(3314,vt.width),z.pixelStorei(32878,vt.height),z.pixelStorei(3316,T.min.x),z.pixelStorei(3315,T.min.y),z.pixelStorei(32877,T.min.z),V.isDataTexture||V.isData3DTexture?z.texSubImage3D(He,W,k.x,k.y,k.z,we,Ie,Oe,ze,Ye,vt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(He,W,k.x,k.y,k.z,we,Ie,Oe,ze,vt.data)):z.texSubImage3D(He,W,k.x,k.y,k.z,we,Ie,Oe,ze,Ye,vt),z.pixelStorei(3314,We),z.pixelStorei(32878,_t),z.pixelStorei(3316,Xt),z.pixelStorei(3315,Xn),z.pixelStorei(32877,Li),W===0&&I.generateMipmaps&&z.generateMipmap(He),fe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ce.setTextureCube(T,0):T.isData3DTexture?Ce.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ce.setTexture2DArray(T,0):Ce.setTexture2D(T,0),fe.unbindTexture()},this.resetState=function(){v=0,M=0,g=null,fe.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function vi(i,e,t){return Rf(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function oa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Rf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var dd,Jc,pd,df,ql,hr,wi,en,bi,Mi,Os,$c,Zc,Kc,md,Ns,gd,yd,jc,Qc,xd,_d,vd,bd,pf,mf,Md,wd,Sd,Td,Ed,Ad,Rd,Cd,ul,Pd,Ld,Id,Dd,gf,kd,Nd,ni,Fd,Od,zd,Ud,Bd,yf,Bs,Vs,dl,pl,Fa,ml,An,gl,Tt,eh,Io,un,Vd,pr,$i,Hd,Wd,xf,Gd,qi,Xi,mr,qd,Xd,zs,Yd,Rn,Jd,$d,Yi,Hs,Xl,Zd,Kd,jd,Qd,Do,ko,No,Fo,th,nh,ih,sh,ep,rh,ah,oh,lh,ch,hh,fh,uh,dh,ph,mh,gh,yh,xh,_h,vh,Oo,tp,bh,Mh,wh,ca,ha,zo,Sh,Th,Eh,Zi,ot,np,ip,_f,sp,On,gr,Uo,rp,Ah,Rh,yl,Si,Bt,Bo,Ch,qe,Qt,Ho,Wo,Wt,bf,St,Sn,Hr,Je,bs,ua,da,op,dn,It,ii,pa,_l,Ti,D,Xo,Lh,Ki,Zn,Bi,Yo,Ms,ws,Ss,gi,yi,Vi,nr,Gr,qr,Hi,lp,ir,$o,yr,Kn,Zo,Xr,xi,Ko,Yr,jo,vl,xt,Ts,Tn,cp,hp,_i,Jr,$t,Ih,Dh,ma,ga,fp,kh,Es,jn,$r,sr,up,dp,Nh,Fh,Oh,pp,zh,Nt,En,Qn,Qo,ei,As,Rs,Uh,el,tl,nl,ur,mp,ji,si,Mt,Zr,tn,ya,xa,ut,gp,fn,il,Cs,Zt,rr,Lt,pn,Bh,Ps,sl,ar,or,lr,rl,Kr,jr,Qr,ea,al,ta,Dt,Qi,_p,vp,bp,ri,_a,jt,Ls,Is,bl,va,Ml,ol,Mp,wp,ti,Ds,ia,xr,_r,Tp,Ep,Ap,Rp,Cp,Pp,Lp,Ip,Dp,kp,Np,Fp,Op,zp,Up,Bp,Vp,Hp,Wp,Gp,qp,Xp,Yp,Jp,$p,Zp,Kp,jp,Qp,em,tm,nm,im,sm,rm,am,om,lm,cm,hm,fm,um,dm,pm,mm,gm,ym,xm,_m,vm,bm,Mm,wm,Sm,Tm,Em,Am,Rm,Cm,Pm,Lm,Im,Dm,km,Nm,Fm,Om,zm,Um,Bm,Vm,Hm,Wm,Gm,qm,Xm,Ym,Jm,$m,Zm,Km,jm,Qm,e0,t0,n0,i0,s0,r0,a0,o0,l0,c0,h0,f0,u0,d0,p0,m0,g0,y0,x0,_0,v0,b0,M0,w0,S0,T0,E0,A0,R0,C0,P0,L0,I0,D0,k0,N0,F0,O0,z0,U0,B0,V0,H0,W0,G0,q0,X0,Y0,J0,$0,Z0,K0,j0,Q0,eg,tg,ng,Fe,se,zn,sa,Gs,Fs,Vh,Gi,ll,Hh,cl,Wi,ks,Wh,ba,Sf,Tf,Ef,Af,Yh,Jh,$h,Zh,Kh,wl,Sl,Tl,hl,Us,oy,my,yy,Ty,Al,Rl,Iy,Cl,Pl,Fy,Oy,Ll,yt,Hy,dr,Il,Dl,kl,Ma,wa,Sa,cf,hf,aa,Xy,cr,Ta,Ea,vr,Aa,Ra,Ca,Pa,La,Ia,Un,qs,Nl,Fl,Ol,Cn,es,zl,Ul,Bl,br,ts,Vl,Da,ka,fl,ff,uf,Hl,Wl,Na,$l,Yy,Zl,Jy,$y,Zy,Ky,jy,Qy,ex,Gl,ft,d1,Cf=xn(()=>{dd=0,Jc=1,pd=2,df=1,ql=2,hr=3,wi=0,en=1,bi=2,Mi=0,Os=1,$c=2,Zc=3,Kc=4,md=5,Ns=100,gd=101,yd=102,jc=103,Qc=104,xd=200,_d=201,vd=202,bd=203,pf=204,mf=205,Md=206,wd=207,Sd=208,Td=209,Ed=210,Ad=0,Rd=1,Cd=2,ul=3,Pd=4,Ld=5,Id=6,Dd=7,gf=0,kd=1,Nd=2,ni=0,Fd=1,Od=2,zd=3,Ud=4,Bd=5,yf=300,Bs=301,Vs=302,dl=303,pl=304,Fa=306,ml=1e3,An=1001,gl=1002,Tt=1003,eh=1004,Io=1005,un=1006,Vd=1007,pr=1008,$i=1009,Hd=1010,Wd=1011,xf=1012,Gd=1013,qi=1014,Xi=1015,mr=1016,qd=1017,Xd=1018,zs=1020,Yd=1021,Rn=1023,Jd=1024,$d=1025,Yi=1026,Hs=1027,Xl=1028,Zd=1029,Kd=1030,jd=1031,Qd=1033,Do=33776,ko=33777,No=33778,Fo=33779,th=35840,nh=35841,ih=35842,sh=35843,ep=36196,rh=37492,ah=37496,oh=37808,lh=37809,ch=37810,hh=37811,fh=37812,uh=37813,dh=37814,ph=37815,mh=37816,gh=37817,yh=37818,xh=37819,_h=37820,vh=37821,Oo=36492,tp=36283,bh=36284,Mh=36285,wh=36286,ca=2300,ha=2301,zo=2302,Sh=2400,Th=2401,Eh=2402,Zi=3e3,ot=3001,np=3200,ip=3201,_f=0,sp=1,On="srgb",gr="srgb-linear",Uo=7680,rp=519,Ah=35044,Rh="300 es",yl=1035,Si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bo=Math.PI/180,Ch=180/Math.PI;qe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class i{constructor(){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],y=n[8],m=s[0],p=s[3],v=s[6],M=s[1],g=s[4],x=s[7],b=s[2],E=s[5],R=s[8];return r[0]=a*m+o*M+l*b,r[3]=a*p+o*g+l*E,r[6]=a*v+o*x+l*R,r[1]=c*m+h*M+u*b,r[4]=c*p+h*g+u*E,r[7]=c*v+h*x+u*R,r[2]=f*m+d*M+y*b,r[5]=f*p+d*g+y*E,r[8]=f*v+d*x+y*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,y=t*u+n*f+s*d;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/y;return e[0]=u*m,e[1]=(s*c-h*n)*m,e[2]=(o*n-s*a)*m,e[3]=f*m,e[4]=(h*t-s*l)*m,e[5]=(s*r-o*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*r)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ho.makeScale(e,t)),this}rotate(e){return this.premultiply(Ho.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ho.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ho=new Qt;Wo={[On]:{[gr]:Ji},[gr]:{[On]:la}},Wt={legacyMode:!0,get workingColorSpace(){return gr},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Wo[e]&&Wo[e][t]!==void 0){let n=Wo[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},St={r:0,g:0,b:0},Sn={h:0,s:0,l:0},Hr={h:0,s:0,l:0};Je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Wt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Wt.workingColorSpace){if(e=ap(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Go(a,r,e+1/3),this.g=Go(a,r,e),this.b=Go(a,r,e-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(e,t=On){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Wt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Wt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,h,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Wt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Wt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=On){let n=bf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return Wt.fromWorkingColorSpace(Wr(this,St),e),Kt(St.r*255,0,255)<<16^Kt(St.g*255,0,255)<<8^Kt(St.b*255,0,255)<<0}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Wr(this,St),t);let n=St.r,s=St.g,r=St.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Wr(this,St),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=On){return Wt.fromWorkingColorSpace(Wr(this,St),e),e!==On?`color(${e} ${St.r} ${St.g} ${St.b})`:`rgb(${St.r*255|0},${St.g*255|0},${St.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Sn),Sn.h+=e,Sn.s+=t,Sn.l+=n,this.setHSL(Sn.h,Sn.s,Sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(Hr);let n=Vo(Sn.h,Hr.h,t),s=Vo(Sn.s,Hr.s,t),r=Vo(Sn.l,Hr.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};Je.NAMES=bf;ua=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=fa("canvas")),bs.width=e.width,bs.height=e.height;let n=bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ji(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},da=class{constructor(e=null){this.isSource=!0,this.uuid=Mr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qo(s[a].image)):r.push(qo(s[a]))}else r=qo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};op=0,dn=class i extends Si{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=An,s=An,r=un,a=pr,o=Rn,l=$i,c=i.DEFAULT_ANISOTROPY,h=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Mr(),this.name="",this.source=new da(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ml:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ml:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=yf;dn.DEFAULT_ANISOTROPY=1;It=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],y=l[9],m=l[2],p=l[6],v=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(y-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(y+p)<.1&&Math.abs(c+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(c+1)/2,x=(d+1)/2,b=(v+1)/2,E=(h+f)/4,R=(u+m)/4,_=(y+p)/4;return g>x&&g>b?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=E/n,r=R/n):x>b?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=_/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=R/r,s=_/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-y)*(p-y)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-y)/M,this.y=(u-m)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ii=class extends Si{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);let s={width:e,height:t,depth:1};this.texture=new dn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:un,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new da(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pa=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_l=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ti=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],y=r[a+2],m=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=y,e[t+3]=m;return}if(u!==m||l!==f||c!==d||h!==y){let p=1-o,v=l*f+c*d+h*y+u*m,M=v>=0?1:-1,g=1-v*v;if(g>Number.EPSILON){let b=Math.sqrt(g),E=Math.atan2(b,v*M);p=Math.sin(p*E)/b,o=Math.sin(o*E)/b}let x=o*M;if(l=l*p+f*x,c=c*p+d*x,h=h*p+y*x,u=u*p+m*x,p===1-o){let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],y=r[a+3];return e[t]=o*y+h*u+l*d-c*f,e[t+1]=l*y+h*f+c*u-o*d,e[t+2]=c*y+h*d+o*f-l*u,e[t+3]=h*y-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*y,this._y=c*d*u-f*h*y,this._z=c*h*y+f*d*u,this._w=c*h*u-f*d*y;break;case"YXZ":this._x=f*h*u+c*d*y,this._y=c*d*u-f*h*y,this._z=c*h*y-f*d*u,this._w=c*h*u+f*d*y;break;case"ZXY":this._x=f*h*u-c*d*y,this._y=c*d*u+f*h*y,this._z=c*h*y+f*d*u,this._w=c*h*u-f*d*y;break;case"ZYX":this._x=f*h*u-c*d*y,this._y=c*d*u+f*h*y,this._z=c*h*y-f*d*u,this._w=c*h*u+f*d*y;break;case"YZX":this._x=f*h*u+c*d*y,this._y=c*d*u+f*h*y,this._z=c*h*y-f*d*u,this._w=c*h*u-f*d*y;break;case"XZY":this._x=f*h*u-c*d*y,this._y=c*d*u-f*h*y,this._z=c*h*y+f*d*u,this._w=c*h*u+f*d*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*s-o*n,h=l*n+o*t-r*s,u=l*s+r*n-a*t,f=-r*t-a*n-o*s;return this.x=c*l+f*-r+h*-o-u*-a,this.y=h*l+f*-a+u*-r-c*-o,this.z=u*l+f*-o+c*-a-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xo.copy(this).projectOnVector(e),this.sub(Xo)}reflect(e){return this.sub(Xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xo=new D,Lh=new Ti,Ki=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){let h=e[l],u=e[l+1],f=e[l+2];h<t&&(t=h),u<n&&(n=u),f<s&&(s=f),h>r&&(r=h),u>a&&(a=u),f>o&&(o=f)}return this.min.set(t,n,s),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){let h=e.getX(l),u=e.getY(l),f=e.getZ(l);h<t&&(t=h),u<n&&(n=u),f<s&&(s=f),h>r&&(r=h),u>a&&(a=u),f>o&&(o=f)}return this.min.set(t,n,s),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){let r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)Bi.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Bi)}else n.boundingBox===null&&n.computeBoundingBox(),Yo.copy(n.boundingBox),Yo.applyMatrix4(e.matrixWorld),this.union(Yo);let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),Gr.subVectors(this.max,nr),Ms.subVectors(e.a,nr),ws.subVectors(e.b,nr),Ss.subVectors(e.c,nr),gi.subVectors(ws,Ms),yi.subVectors(Ss,ws),Vi.subVectors(Ms,Ss);let t=[0,-gi.z,gi.y,0,-yi.z,yi.y,0,-Vi.z,Vi.y,gi.z,0,-gi.x,yi.z,0,-yi.x,Vi.z,0,-Vi.x,-gi.y,gi.x,0,-yi.y,yi.x,0,-Vi.y,Vi.x,0];return!Jo(t,Ms,ws,Ss,Gr)||(t=[1,0,0,0,1,0,0,0,1],!Jo(t,Ms,ws,Ss,Gr))?!1:(qr.crossVectors(gi,yi),t=[qr.x,qr.y,qr.z],Jo(t,Ms,ws,Ss,Gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Bi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Zn=[new D,new D,new D,new D,new D,new D,new D,new D],Bi=new D,Yo=new Ki,Ms=new D,ws=new D,Ss=new D,gi=new D,yi=new D,Vi=new D,nr=new D,Gr=new D,qr=new D,Hi=new D;lp=new Ki,ir=new D,$o=new D,yr=class{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):lp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);let t=ir.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ir,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add($o)),this.expandByPoint(ir.copy(e.center).sub($o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Kn=new D,Zo=new D,Xr=new D,xi=new D,Ko=new D,Yr=new D,jo=new D,vl=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.direction).multiplyScalar(t).add(this.origin),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zo.copy(e).add(t).multiplyScalar(.5),Xr.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(Zo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Xr),o=xi.dot(this.direction),l=-xi.dot(Xr),c=xi.lengthSq(),h=Math.abs(1-a*a),u,f,d,y;if(h>0)if(u=a*l-o,f=a*o-l,y=r*h,u>=0)if(f>=-y)if(f<=y){let m=1/h;u*=m,f*=m,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-y?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=y?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),s&&s.copy(Xr).multiplyScalar(f).add(Zo),d}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,s,r){Ko.subVectors(t,e),Yr.subVectors(n,e),jo.crossVectors(Ko,Yr);let a=this.direction.dot(jo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,e);let l=o*this.direction.dot(Yr.crossVectors(xi,Yr));if(l<0)return null;let c=o*this.direction.dot(Ko.cross(xi));if(c<0||l+c>a)return null;let h=-o*xi.dot(jo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xt=class i{constructor(){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,a,o,l,c,h,u,f,d,y,m,p){let v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=s,v[1]=r,v[5]=a,v[9]=o,v[13]=l,v[2]=c,v[6]=h,v[10]=u,v[14]=f,v[3]=d,v[7]=y,v[11]=m,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ts.setFromMatrixColumn(e,0).length(),r=1/Ts.setFromMatrixColumn(e,1).length(),a=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,y=o*h,m=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+y*c,t[5]=f-m*c,t[9]=-o*l,t[2]=m-f*c,t[6]=y+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,y=c*h,m=c*u;t[0]=f+m*o,t[4]=y*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-y,t[6]=m+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,y=c*h,m=c*u;t[0]=f-m*o,t[4]=-a*u,t[8]=y+d*o,t[1]=d+y*o,t[5]=a*h,t[9]=m-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,y=o*h,m=o*u;t[0]=l*h,t[4]=y*c-d,t[8]=f*c+m,t[1]=l*u,t[5]=m*c+f,t[9]=d*c-y,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,y=o*l,m=o*c;t[0]=l*h,t[4]=m-f*u,t[8]=y*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+y,t[10]=f-m*u}else if(e.order==="XZY"){let f=a*l,d=a*c,y=o*l,m=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+m,t[5]=a*h,t[9]=d*u-y,t[2]=y*u-d,t[6]=o*h,t[10]=m*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cp,e,hp)}lookAt(e,t,n){let s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),_i.crossVectors(n,$t),_i.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),_i.crossVectors(n,$t)),_i.normalize(),Jr.crossVectors($t,_i),s[0]=_i.x,s[4]=Jr.x,s[8]=$t.x,s[1]=_i.y,s[5]=Jr.y,s[9]=$t.y,s[2]=_i.z,s[6]=Jr.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],y=n[2],m=n[6],p=n[10],v=n[14],M=n[3],g=n[7],x=n[11],b=n[15],E=s[0],R=s[4],_=s[8],S=s[12],C=s[1],F=s[5],U=s[9],N=s[13],L=s[2],G=s[6],$=s[10],te=s[14],Y=s[3],ne=s[7],Z=s[11],Me=s[15];return r[0]=a*E+o*C+l*L+c*Y,r[4]=a*R+o*F+l*G+c*ne,r[8]=a*_+o*U+l*$+c*Z,r[12]=a*S+o*N+l*te+c*Me,r[1]=h*E+u*C+f*L+d*Y,r[5]=h*R+u*F+f*G+d*ne,r[9]=h*_+u*U+f*$+d*Z,r[13]=h*S+u*N+f*te+d*Me,r[2]=y*E+m*C+p*L+v*Y,r[6]=y*R+m*F+p*G+v*ne,r[10]=y*_+m*U+p*$+v*Z,r[14]=y*S+m*N+p*te+v*Me,r[3]=M*E+g*C+x*L+b*Y,r[7]=M*R+g*F+x*G+b*ne,r[11]=M*_+g*U+x*$+b*Z,r[15]=M*S+g*N+x*te+b*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],y=e[3],m=e[7],p=e[11],v=e[15];return y*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+m*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+p*(+t*c*u-t*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+v*(-s*o*h-t*l*u+t*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],y=e[12],m=e[13],p=e[14],v=e[15],M=u*p*c-m*f*c+m*l*d-o*p*d-u*l*v+o*f*v,g=y*f*c-h*p*c-y*l*d+a*p*d+h*l*v-a*f*v,x=h*m*c-y*u*c+y*o*d-a*m*d-h*o*v+a*u*v,b=y*u*l-h*m*l-y*o*f+a*m*f+h*o*p-a*u*p,E=t*M+n*g+s*x+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=M*R,e[1]=(m*f*r-u*p*r-m*s*d+n*p*d+u*s*v-n*f*v)*R,e[2]=(o*p*r-m*l*r+m*s*c-n*p*c-o*s*v+n*l*v)*R,e[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*R,e[4]=g*R,e[5]=(h*p*r-y*f*r+y*s*d-t*p*d-h*s*v+t*f*v)*R,e[6]=(y*l*r-a*p*r-y*s*c+t*p*c+a*s*v-t*l*v)*R,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*d+t*l*d)*R,e[8]=x*R,e[9]=(y*u*r-h*m*r-y*n*d+t*m*d+h*n*v-t*u*v)*R,e[10]=(a*m*r-y*o*r+y*n*c-t*m*c-a*n*v+t*o*v)*R,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*d-t*o*d)*R,e[12]=b*R,e[13]=(h*m*s-y*u*s+y*n*f-t*m*f-h*n*p+t*u*p)*R,e[14]=(y*o*s-a*m*s-y*n*l+t*m*l+a*n*p-t*o*p)*R,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*f+t*o*f)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,y=r*u,m=a*h,p=a*u,v=o*u,M=l*c,g=l*h,x=l*u,b=n.x,E=n.y,R=n.z;return s[0]=(1-(m+v))*b,s[1]=(d+x)*b,s[2]=(y-g)*b,s[3]=0,s[4]=(d-x)*E,s[5]=(1-(f+v))*E,s[6]=(p+M)*E,s[7]=0,s[8]=(y+g)*R,s[9]=(p-M)*R,s[10]=(1-(f+m))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ts.set(s[0],s[1],s[2]).length(),a=Ts.set(s[4],s[5],s[6]).length(),o=Ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Tn.copy(this);let c=1/r,h=1/a,u=1/o;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,t.setFromRotationMatrix(Tn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a){let o=this.elements,l=2*r/(t-e),c=2*r/(n-s),h=(t+e)/(t-e),u=(n+s)/(n-s),f=-(a+r)/(a-r),d=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,s,r,a){let o=this.elements,l=1/(t-e),c=1/(n-s),h=1/(a-r),u=(t+e)*l,f=(n+s)*c,d=(a+r)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ts=new D,Tn=new xt,cp=new D(0,0,0),hp=new D(1,1,1),_i=new D,Jr=new D,$t=new D,Ih=new xt,Dh=new Ti,ma=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ih,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ma.DEFAULT_ORDER="XYZ";ga=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fp=0,kh=new D,Es=new Ti,jn=new xt,$r=new D,sr=new D,up=new D,dp=new Ti,Nh=new D(1,0,0),Fh=new D(0,1,0),Oh=new D(0,0,1),pp={type:"added"},zh={type:"removed"},Nt=class i extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new ma,n=new Ti,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new Qt}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Nh,e)}rotateY(e){return this.rotateOnAxis(Fh,e)}rotateZ(e){return this.rotateOnAxis(Oh,e)}translateOnAxis(e,t){return kh.copy(e).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nh,e)}translateY(e){return this.translateOnAxis(Fh,e)}translateZ(e){return this.translateOnAxis(Oh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$r.copy(e):$r.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(sr,$r,this.up):jn.lookAt($r,sr,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(jn),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zh)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(zh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){let a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Nt.DEFAULT_UP=new D(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;En=new D,Qn=new D,Qo=new D,ei=new D,As=new D,Rs=new D,Uh=new D,el=new D,tl=new D,nl=new D,ur=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),En.subVectors(e,t),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){En.subVectors(s,t),Qn.subVectors(n,t),Qo.subVectors(e,t);let a=En.dot(En),o=En.dot(Qn),l=En.dot(Qo),c=Qn.dot(Qn),h=Qn.dot(Qo),u=a*c-o*o;if(u===0)return r.set(-2,-1,-1);let f=1/u,d=(c*l-o*h)*f,y=(a*h-o*l)*f;return r.set(1-d-y,y,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ei),ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ei),l.set(0,0),l.addScaledVector(r,ei.x),l.addScaledVector(a,ei.y),l.addScaledVector(o,ei.z),l}static isFrontFacing(e,t,n,s){return En.subVectors(n,t),Qn.subVectors(e,t),En.cross(Qn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),En.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return i.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;As.subVectors(s,n),Rs.subVectors(r,n),el.subVectors(e,n);let l=As.dot(el),c=Rs.dot(el);if(l<=0&&c<=0)return t.copy(n);tl.subVectors(e,s);let h=As.dot(tl),u=Rs.dot(tl);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(As,a);nl.subVectors(e,r);let d=As.dot(nl),y=Rs.dot(nl);if(y>=0&&d<=y)return t.copy(r);let m=d*c-l*y;if(m<=0&&c>=0&&y<=0)return o=c/(c-y),t.copy(n).addScaledVector(Rs,o);let p=h*y-d*u;if(p<=0&&u-h>=0&&d-y>=0)return Uh.subVectors(r,s),o=(u-h)/(u-h+(d-y)),t.copy(s).addScaledVector(Uh,o);let v=1/(p+m+f);return a=m*v,o=f*v,t.copy(n).addScaledVector(As,a).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mp=0,ji=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=Os,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=pf,this.blendDst=mf,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},si=class extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Mt=new D,Zr=new qe,tn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ah,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zr.fromBufferAttribute(this,t),Zr.applyMatrix3(e),this.setXY(t,Zr.x,Zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ah&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}},ya=class extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},xa=class extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ut=class extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}},gp=0,fn=new xt,il=new Nt,Cs=new D,Zt=new Ki,rr=new Ki,Lt=new D,pn=class i extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vf(e)?xa:ya)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(Zt.min,rr.min),Zt.expandByPoint(Lt),Lt.addVectors(Zt.max,rr.max),Zt.expandByPoint(Lt)):(Zt.expandByPoint(rr.min),Zt.expandByPoint(rr.max))}Zt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Lt.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(e,c),Lt.add(Cs)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let C=0;C<o;C++)c[C]=new D,h[C]=new D;let u=new D,f=new D,d=new D,y=new qe,m=new qe,p=new qe,v=new D,M=new D;function g(C,F,U){u.fromArray(s,C*3),f.fromArray(s,F*3),d.fromArray(s,U*3),y.fromArray(a,C*2),m.fromArray(a,F*2),p.fromArray(a,U*2),f.sub(u),d.sub(u),m.sub(y),p.sub(y);let N=1/(m.x*p.y-p.x*m.y);isFinite(N)&&(v.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(N),M.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(N),c[C].add(v),c[F].add(v),c[U].add(v),h[C].add(M),h[F].add(M),h[U].add(M))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let C=0,F=x.length;C<F;++C){let U=x[C],N=U.start,L=U.count;for(let G=N,$=N+L;G<$;G+=3)g(n[G+0],n[G+1],n[G+2])}let b=new D,E=new D,R=new D,_=new D;function S(C){R.fromArray(r,C*3),_.copy(R);let F=c[C];b.copy(F),b.sub(R.multiplyScalar(R.dot(F))).normalize(),E.crossVectors(_,F);let N=E.dot(h[C])<0?-1:1;l[C*4]=b.x,l[C*4+1]=b.y,l[C*4+2]=b.z,l[C*4+3]=N}for(let C=0,F=x.length;C<F;++C){let U=x[C],N=U.start,L=U.count;for(let G=N,$=N+L;G<$;G+=3)S(n[G+0]),S(n[G+1]),S(n[G+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){let y=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,y=0;for(let m=0,p=l.length;m<p;m++){o.isInterleavedBufferAttribute?d=l[m]*o.data.stride+o.offset:d=l[m]*h;for(let v=0;v<h;v++)f[y++]=c[d++]}return new tn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},Bh=new xt,Ps=new vl,sl=new yr,ar=new D,or=new D,lr=new D,rl=new D,Kr=new D,jr=new qe,Qr=new qe,ea=new qe,al=new D,ta=new D,Dt=class extends Nt{constructor(e=new pn,t=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(rl.fromBufferAttribute(u,e),a?Kr.addScaledVector(rl,h):Kr.addScaledVector(rl.sub(t),h))}t.add(Kr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),sl.copy(n.boundingSphere),sl.applyMatrix4(r),e.ray.intersectsSphere(sl)===!1)||(Bh.copy(r).invert(),Ps.copy(e.ray).applyMatrix4(Bh),n.boundingBox!==null&&Ps.intersectsBox(n.boundingBox)===!1))return;let a,o=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,u=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(s))for(let d=0,y=u.length;d<y;d++){let m=u[d],p=s[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let g=v,x=M;g<x;g+=3){let b=o.getX(g),E=o.getX(g+1),R=o.getX(g+2);a=na(this,p,e,Ps,c,h,b,E,R),a&&(a.faceIndex=Math.floor(g/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{let d=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=d,p=y;m<p;m+=3){let v=o.getX(m),M=o.getX(m+1),g=o.getX(m+2);a=na(this,s,e,Ps,c,h,v,M,g),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let d=0,y=u.length;d<y;d++){let m=u[d],p=s[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let g=v,x=M;g<x;g+=3){let b=g,E=g+1,R=g+2;a=na(this,p,e,Ps,c,h,b,E,R),a&&(a.faceIndex=Math.floor(g/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{let d=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=d,p=y;m<p;m+=3){let v=m,M=m+1,g=m+2;a=na(this,s,e,Ps,c,h,v,M,g),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}};Qi=class i extends pn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,s,a,2),y("x","z","y",1,-1,e,n,-t,s,a,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function y(m,p,v,M,g,x,b,E,R,_,S){let C=x/R,F=b/_,U=x/2,N=b/2,L=E/2,G=R+1,$=_+1,te=0,Y=0,ne=new D;for(let Z=0;Z<$;Z++){let Me=Z*F-N;for(let O=0;O<G;O++){let K=O*C-U;ne[m]=K*M,ne[p]=Me*g,ne[v]=L,c.push(ne.x,ne.y,ne.z),ne[m]=0,ne[p]=0,ne[v]=E>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(O/R),u.push(1-Z/_),te+=1}}for(let Z=0;Z<_;Z++)for(let Me=0;Me<R;Me++){let O=f+Me+G*Z,K=f+Me+G*(Z+1),re=f+(Me+1)+G*(Z+1),ae=f+(Me+1)+G*Z;l.push(O,K,ae),l.push(K,re,ae),Y+=6}o.addGroup(d,Y,S),d+=Y,f+=te}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};_p={clone:Ws,merge:Gt},vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vp,this.fragmentShader=bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=xp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},_a=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},jt=class extends _a{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ch*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ch*2*Math.atan(Math.tan(Bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Bo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ls=-90,Is=1,bl=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;let s=new jt(Ls,Is,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);let r=new jt(Ls,Is,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);let a=new jt(Ls,Is,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);let o=new jt(Ls,Is,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);let l=new jt(Ls,Is,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);let c=new jt(Ls,Is,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[s,r,a,o,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,f=e.xr.enabled;e.toneMapping=ni,e.xr.enabled=!1;let d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},va=class extends dn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ml=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new va(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Qi(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Mi});r.uniforms.tEquirect.value=t;let a=new Dt(s,r),o=t.minFilter;return t.minFilter===pr&&(t.minFilter=un),new bl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},ol=new D,Mp=new D,wp=new Qt,ti=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ol.subVectors(n,t).cross(Mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(ol),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wp.getNormalMatrix(e),s=this.coplanarPoint(ol).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ds=new yr,ia=new D,xr=class{constructor(e=new ti,t=new ti,n=new ti,s=new ti,r=new ti,a=new ti){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,s=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],f=n[8],d=n[9],y=n[10],m=n[11],p=n[12],v=n[13],M=n[14],g=n[15];return t[0].setComponents(o-s,u-l,m-f,g-p).normalize(),t[1].setComponents(o+s,u+l,m+f,g+p).normalize(),t[2].setComponents(o+r,u+c,m+d,g+v).normalize(),t[3].setComponents(o-r,u-c,m-d,g-v).normalize(),t[4].setComponents(o-a,u-h,m-y,g-M).normalize(),t[5].setComponents(o+a,u+h,m+y,g+M).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSprite(e){return Ds.center.set(0,0,0),Ds.radius=.7071067811865476,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ia.x=s.normal.x>0?e.max.x:e.min.x,ia.y=s.normal.y>0?e.max.y:e.min.y,ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};_r=class i extends pn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],y=[],m=[],p=[];for(let v=0;v<h;v++){let M=v*f-a;for(let g=0;g<c;g++){let x=g*u-r;y.push(x,-M,0),m.push(0,0,1),p.push(g/o),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let M=0;M<o;M++){let g=M+c*v,x=M+c*(v+1),b=M+1+c*(v+1),E=M+1+c*v;d.push(g,x,E),d.push(x,b,E)}this.setIndex(d),this.setAttribute("position",new ut(y,3)),this.setAttribute("normal",new ut(m,3)),this.setAttribute("uv",new ut(p,2))}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp="vec3 transformed = vec3( position );",Ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,kp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Np=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",jp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pm=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_m=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,vm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Sm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Fm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Um=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$m=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,r0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,l0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,h0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,p0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,m0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,g0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,y0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,x0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,_0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,v0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,b0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,M0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,w0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,C0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,P0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,L0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,I0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,N0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O0=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,H0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,G0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,q0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,J0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,tg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fe={alphamap_fragment:Tp,alphamap_pars_fragment:Ep,alphatest_fragment:Ap,alphatest_pars_fragment:Rp,aomap_fragment:Cp,aomap_pars_fragment:Pp,begin_vertex:Lp,beginnormal_vertex:Ip,bsdfs:Dp,iridescence_fragment:kp,bumpmap_pars_fragment:Np,clipping_planes_fragment:Fp,clipping_planes_pars_fragment:Op,clipping_planes_pars_vertex:zp,clipping_planes_vertex:Up,color_fragment:Bp,color_pars_fragment:Vp,color_pars_vertex:Hp,color_vertex:Wp,common:Gp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:Xp,displacementmap_pars_vertex:Yp,displacementmap_vertex:Jp,emissivemap_fragment:$p,emissivemap_pars_fragment:Zp,encodings_fragment:Kp,encodings_pars_fragment:jp,envmap_fragment:Qp,envmap_common_pars_fragment:em,envmap_pars_fragment:tm,envmap_pars_vertex:nm,envmap_physical_pars_fragment:pm,envmap_vertex:im,fog_vertex:sm,fog_pars_vertex:rm,fog_fragment:am,fog_pars_fragment:om,gradientmap_pars_fragment:lm,lightmap_fragment:cm,lightmap_pars_fragment:hm,lights_lambert_fragment:fm,lights_lambert_pars_fragment:um,lights_pars_begin:dm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:ym,lights_phong_pars_fragment:xm,lights_physical_fragment:_m,lights_physical_pars_fragment:vm,lights_fragment_begin:bm,lights_fragment_maps:Mm,lights_fragment_end:wm,logdepthbuf_fragment:Sm,logdepthbuf_pars_fragment:Tm,logdepthbuf_pars_vertex:Em,logdepthbuf_vertex:Am,map_fragment:Rm,map_pars_fragment:Cm,map_particle_fragment:Pm,map_particle_pars_fragment:Lm,metalnessmap_fragment:Im,metalnessmap_pars_fragment:Dm,morphcolor_vertex:km,morphnormal_vertex:Nm,morphtarget_pars_vertex:Fm,morphtarget_vertex:Om,normal_fragment_begin:zm,normal_fragment_maps:Um,normal_pars_fragment:Bm,normal_pars_vertex:Vm,normal_vertex:Hm,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:Gm,clearcoat_normal_fragment_maps:qm,clearcoat_pars_fragment:Xm,iridescence_pars_fragment:Ym,output_fragment:Jm,packing:$m,premultiplied_alpha_fragment:Zm,project_vertex:Km,dithering_fragment:jm,dithering_pars_fragment:Qm,roughnessmap_fragment:e0,roughnessmap_pars_fragment:t0,shadowmap_pars_fragment:n0,shadowmap_pars_vertex:i0,shadowmap_vertex:s0,shadowmask_pars_fragment:r0,skinbase_vertex:a0,skinning_pars_vertex:o0,skinning_vertex:l0,skinnormal_vertex:c0,specularmap_fragment:h0,specularmap_pars_fragment:f0,tonemapping_fragment:u0,tonemapping_pars_fragment:d0,transmission_fragment:p0,transmission_pars_fragment:m0,uv_pars_fragment:g0,uv_pars_vertex:y0,uv_vertex:x0,uv2_pars_fragment:_0,uv2_pars_vertex:v0,uv2_vertex:b0,worldpos_vertex:M0,background_vert:w0,background_frag:S0,backgroundCube_vert:T0,backgroundCube_frag:E0,cube_vert:A0,cube_frag:R0,depth_vert:C0,depth_frag:P0,distanceRGBA_vert:L0,distanceRGBA_frag:I0,equirect_vert:D0,equirect_frag:k0,linedashed_vert:N0,linedashed_frag:F0,meshbasic_vert:O0,meshbasic_frag:z0,meshlambert_vert:U0,meshlambert_frag:B0,meshmatcap_vert:V0,meshmatcap_frag:H0,meshnormal_vert:W0,meshnormal_frag:G0,meshphong_vert:q0,meshphong_frag:X0,meshphysical_vert:Y0,meshphysical_frag:J0,meshtoon_vert:$0,meshtoon_frag:Z0,points_vert:K0,points_frag:j0,shadow_vert:Q0,shadow_frag:eg,sprite_vert:tg,sprite_frag:ng},se={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Qt},uv2Transform:{value:new Qt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qt}}},zn={basic:{uniforms:Gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Je(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Gt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Gt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Je(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Gt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Gt([se.points,se.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Gt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Gt([se.common,se.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Gt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Gt([se.sprite,se.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Gt([se.common,se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Gt([se.lights,se.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};zn.physical={uniforms:Gt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new qe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};sa={r:0,b:0,g:0};Gs=class extends _a{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fs=4,Vh=[.125,.215,.35,.446,.526,.582],Gi=20,ll=new Gs,Hh=new Je,cl=null,Wi=(1+Math.sqrt(5))/2,ks=1/Wi,Wh=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Wi,ks),new D(0,Wi,-ks),new D(ks,0,Wi),new D(-ks,0,Wi),new D(Wi,ks,0),new D(-Wi,ks,0)],ba=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){cl=this._renderer.getRenderTarget(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cl),e.scissorTest=!1,ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cl=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:mr,format:Rn,encoding:Zi,depthBuffer:!1},s=Gh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cg(r)),this._blurMaterial=hg(r,e,t)}return s}_compileMaterial(e){let t=new Dt(this._lodPlanes[0],e);this._renderer.compile(t,ll)}_sceneToCubeUV(e,t,n,s){let o=new jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Hh),h.toneMapping=ni,h.autoClear=!1;let d=new si({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),y=new Dt(new Qi,d),m=!1,p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(Hh),m=!0);for(let v=0;v<6;v++){let M=v%3;M===0?(o.up.set(0,l[v],0),o.lookAt(c[v],0,0)):M===1?(o.up.set(0,0,l[v]),o.lookAt(0,c[v],0)):(o.up.set(0,l[v],0),o.lookAt(0,0,c[v]));let g=this._cubeSize;ra(s,M*g,v>2?g:0,g,g),h.setRenderTarget(s),m&&h.render(y,o),h.render(e,o)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Bs||e.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ra(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ll)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Wh[(s-1)%Wh.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Dt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Gi-1),m=r/y,p=isFinite(r)?1+Math.floor(h*m):Gi;p>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gi}`);let v=[],M=0;for(let R=0;R<Gi;++R){let _=R/m,S=Math.exp(-_*_/2);v.push(S),R===0?M+=S:R<p&&(M+=2*S)}for(let R=0;R<v.length;R++)v[R]=v[R]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=v,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:g}=this;f.dTheta.value=y,f.mipInt.value=g-n;let x=this._sizeLods[s],b=3*x*(s>g-Fs?s-g+Fs:0),E=4*(this._cubeSize-x);ra(t,b,E,3*x,2*x),l.setRenderTarget(t),l.render(u,ll)}};Sf=new dn,Tf=new pa,Ef=new _l,Af=new va,Yh=[],Jh=[],$h=new Float32Array(16),Zh=new Float32Array(9),Kh=new Float32Array(4);wl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Ug(t.type)}},Sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=ry(t.type)}},Tl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},hl=/(\w+)(\])?(\[|\.)?/g;Us=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ay(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};oy=0;my=/^[ \t]*#include +<([\w\d./]+)>/gm;yy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Ty=0,Al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rl(e),t.set(e,n)),n}},Rl=class{constructor(e){this.id=Ty++,this.code=e,this.usedTimes=0}};Iy=0;Cl=class extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pl=class extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Oy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;Ll=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},yt=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hy={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let m of e.hand.values()){let p=t.getJointPose(m,n),v=this._getHandJoint(c,m);p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,y=.005;c.inputState.pinching&&f>d+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hy)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Il=class extends dn{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Yi,h!==Yi&&h!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yi&&(n=qi),n===void 0&&h===Hs&&(n=zs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Tt,this.minFilter=l!==void 0?l:Tt,this.flipY=!1,this.generateMipmaps=!1}},Dl=class extends Si{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,y=null,m=t.getContextAttributes(),p=null,v=null,M=[],g=[],x=new Set,b=new Map,E=new jt;E.layers.enable(1),E.viewport=new It;let R=new jt;R.layers.enable(2),R.viewport=new It;let _=[E,R],S=new Ll;S.layers.enable(1),S.layers.enable(2);let C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let K=M[O];return K===void 0&&(K=new dr,M[O]=K),K.getTargetRaySpace()},this.getControllerGrip=function(O){let K=M[O];return K===void 0&&(K=new dr,M[O]=K),K.getGripSpace()},this.getHand=function(O){let K=M[O];return K===void 0&&(K=new dr,M[O]=K),K.getHandSpace()};function U(O){let K=g.indexOf(O.inputSource);if(K===-1)return;let re=M[K];re!==void 0&&re.dispatchEvent({type:O.type,data:O.inputSource})}function N(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",L);for(let O=0;O<M.length;O++){let K=g[O];K!==null&&(g[O]=null,M[O].disconnect(K))}C=null,F=null,e.setRenderTarget(p),d=null,f=null,u=null,s=null,v=null,Me.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",N),s.addEventListener("inputsourceschange",L),m.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:s.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:d}),v=new ii(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:$i,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let K=null,re=null,ae=null;m.depth&&(ae=m.stencil?35056:33190,K=m.stencil?Hs:Yi,re=m.stencil?zs:qi);let z={colorFormat:32856,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(z),s.updateRenderState({layers:[f]}),v=new ii(f.textureWidth,f.textureHeight,{format:Rn,type:$i,depthTexture:new Il(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});let De=e.properties.get(v);De.__ignoreDepthValues=f.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function L(O){for(let K=0;K<O.removed.length;K++){let re=O.removed[K],ae=g.indexOf(re);ae>=0&&(g[ae]=null,M[ae].disconnect(re))}for(let K=0;K<O.added.length;K++){let re=O.added[K],ae=g.indexOf(re);if(ae===-1){for(let De=0;De<M.length;De++)if(De>=g.length){g.push(re),ae=De;break}else if(g[De]===null){g[De]=re,ae=De;break}if(ae===-1)break}let z=M[ae];z&&z.connect(re)}}let G=new D,$=new D;function te(O,K,re){G.setFromMatrixPosition(K.matrixWorld),$.setFromMatrixPosition(re.matrixWorld);let ae=G.distanceTo($),z=K.projectionMatrix.elements,De=re.projectionMatrix.elements,ge=z[14]/(z[10]-1),ye=z[14]/(z[10]+1),fe=(z[9]+1)/z[5],rt=(z[9]-1)/z[5],ke=(z[8]-1)/z[0],Ce=(De[8]+1)/De[0],Vt=ge*ke,an=ge*Ce,Ot=ae/(-ke+Ce),on=Ot*-ke;K.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(on),O.translateZ(Ot),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();let wt=ge+Ot,Ke=ye+Ot,Gn=Vt-on,yn=an+(ae-on),A=fe*ye/Ke*wt,w=rt*ye/Ke*wt;O.projectionMatrix.makePerspective(Gn,yn,A,w,wt,Ke)}function Y(O,K){K===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(K.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;S.near=R.near=E.near=O.near,S.far=R.far=E.far=O.far,(C!==S.near||F!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,F=S.far);let K=O.parent,re=S.cameras;Y(S,K);for(let z=0;z<re.length;z++)Y(re[z],K);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),O.matrix.copy(S.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);let ae=O.children;for(let z=0,De=ae.length;z<De;z++)ae[z].updateMatrixWorld(!0);re.length===2?te(S,E,R):S.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(O){l=O,f!==null&&(f.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)},this.getPlanes=function(){return x};let ne=null;function Z(O,K){if(h=K.getViewerPose(c||a),y=K,h!==null){let re=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ae=!1;re.length!==S.cameras.length&&(S.cameras.length=0,ae=!0);for(let z=0;z<re.length;z++){let De=re[z],ge=null;if(d!==null)ge=d.getViewport(De);else{let fe=u.getViewSubImage(f,De);ge=fe.viewport,z===0&&(e.setRenderTargetTextures(v,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(v))}let ye=_[z];ye===void 0&&(ye=new jt,ye.layers.enable(z),ye.viewport=new It,_[z]=ye),ye.matrix.fromArray(De.transform.matrix),ye.projectionMatrix.fromArray(De.projectionMatrix),ye.viewport.set(ge.x,ge.y,ge.width,ge.height),z===0&&S.matrix.copy(ye.matrix),ae===!0&&S.cameras.push(ye)}}for(let re=0;re<M.length;re++){let ae=g[re],z=M[re];ae!==null&&z!==void 0&&z.update(ae,K,c||a)}if(ne&&ne(O,K),K.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let re=null;for(let ae of x)K.detectedPlanes.has(ae)||(re===null&&(re=[]),re.push(ae));if(re!==null)for(let ae of re)x.delete(ae),b.delete(ae),n.dispatchEvent({type:"planeremoved",data:ae});for(let ae of K.detectedPlanes)if(!x.has(ae))x.add(ae),b.set(ae,K.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ae});else{let z=b.get(ae);ae.lastChangedTime>z&&(b.set(ae,ae.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ae}))}}y=null}let Me=new wf;Me.setAnimationLoop(Z),this.setAnimationLoop=function(O){ne=O},this.dispose=function(){}}};kl=class extends Jl{};kl.prototype.isWebGL1Renderer=!0;Ma=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}},wa=class extends dn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Tt,h=Tt,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Sa=class extends tn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},cf=new xt,hf=new xt,aa=[],Xy=new xt,cr=new Dt,Ta=class extends Dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sa(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let s=0;s<n;s++)this.setMatrixAt(s,Xy)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0)for(let r=0;r<s;r++){this.getMatrixAt(r,cf),hf.multiplyMatrices(n,cf),cr.matrixWorld=hf,cr.raycast(e,aa);for(let a=0,o=aa.length;a<o;a++){let l=aa[a];l.instanceId=r,l.object=this,t.push(l)}aa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Ea=class i extends pn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new D,h=new qe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(o,3)),this.setAttribute("uv",new ut(l,2))}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vr=class i extends pn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],y=0,m=[],p=n/2,v=0;M(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(d,2));function M(){let x=new D,b=new D,E=0,R=(t-e)/n;for(let _=0;_<=r;_++){let S=[],C=_/r,F=C*(t-e)+e;for(let U=0;U<=s;U++){let N=U/s,L=N*l+o,G=Math.sin(L),$=Math.cos(L);b.x=F*G,b.y=-C*n+p,b.z=F*$,u.push(b.x,b.y,b.z),x.set(G,R,$).normalize(),f.push(x.x,x.y,x.z),d.push(N,1-C),S.push(y++)}m.push(S)}for(let _=0;_<s;_++)for(let S=0;S<r;S++){let C=m[S][_],F=m[S+1][_],U=m[S+1][_+1],N=m[S][_+1];h.push(C,F,N),h.push(F,U,N),E+=6}c.addGroup(v,E,0),v+=E}function g(x){let b=y,E=new qe,R=new D,_=0,S=x===!0?e:t,C=x===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,p*C,0),f.push(0,C,0),d.push(.5,.5),y++;let F=y;for(let U=0;U<=s;U++){let L=U/s*l+o,G=Math.cos(L),$=Math.sin(L);R.x=S*$,R.y=p*C,R.z=S*G,u.push(R.x,R.y,R.z),f.push(0,C,0),E.x=G*.5+.5,E.y=$*.5*C+.5,d.push(E.x,E.y),y++}for(let U=0;U<s;U++){let N=b+U,L=F+U;x===!0?h.push(L,L+1,N):h.push(L+1,L,N),_+=3}c.addGroup(v,_,x===!0?1:2),v+=_}}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Aa=class i extends vr{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ra=class i extends pn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let g=new D,x=new D,b=new D;for(let E=0;E<t.length;E+=3)d(t[E+0],g),d(t[E+1],x),d(t[E+2],b),l(g,x,b,M)}function l(M,g,x,b){let E=b+1,R=[];for(let _=0;_<=E;_++){R[_]=[];let S=M.clone().lerp(x,_/E),C=g.clone().lerp(x,_/E),F=E-_;for(let U=0;U<=F;U++)U===0&&_===E?R[_][U]=S:R[_][U]=S.clone().lerp(C,U/F)}for(let _=0;_<E;_++)for(let S=0;S<2*(E-_)-1;S++){let C=Math.floor(S/2);S%2===0?(f(R[_][C+1]),f(R[_+1][C]),f(R[_][C])):(f(R[_][C+1]),f(R[_+1][C+1]),f(R[_+1][C]))}}function c(M){let g=new D;for(let x=0;x<r.length;x+=3)g.x=r[x+0],g.y=r[x+1],g.z=r[x+2],g.normalize().multiplyScalar(M),r[x+0]=g.x,r[x+1]=g.y,r[x+2]=g.z}function h(){let M=new D;for(let g=0;g<r.length;g+=3){M.x=r[g+0],M.y=r[g+1],M.z=r[g+2];let x=p(M)/2/Math.PI+.5,b=v(M)/Math.PI+.5;a.push(x,1-b)}y(),u()}function u(){for(let M=0;M<a.length;M+=6){let g=a[M+0],x=a[M+2],b=a[M+4],E=Math.max(g,x,b),R=Math.min(g,x,b);E>.9&&R<.1&&(g<.2&&(a[M+0]+=1),x<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,g){let x=M*3;g.x=e[x+0],g.y=e[x+1],g.z=e[x+2]}function y(){let M=new D,g=new D,x=new D,b=new D,E=new qe,R=new qe,_=new qe;for(let S=0,C=0;S<r.length;S+=9,C+=6){M.set(r[S+0],r[S+1],r[S+2]),g.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),E.set(a[C+0],a[C+1]),R.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),b.copy(M).add(g).add(x).divideScalar(3);let F=p(b);m(E,C+0,M,F),m(R,C+2,g,F),m(_,C+4,x,F)}}function m(M,g,x,b){b<0&&M.x===1&&(a[g]=M.x-1),x.x===0&&x.z===0&&(a[g]=b/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function v(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Ca=class i extends Ra{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Pa=class i extends Ra{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},La=class i extends pn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,f=new D,d=[],y=[],m=[],p=[];for(let v=0;v<=n;v++){let M=[],g=v/n,x=0;v==0&&a==0?x=.5/t:v==n&&l==Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let E=b/t;u.x=-e*Math.cos(s+E*r)*Math.sin(a+g*o),u.y=e*Math.cos(a+g*o),u.z=e*Math.sin(s+E*r)*Math.sin(a+g*o),y.push(u.x,u.y,u.z),f.copy(u).normalize(),m.push(f.x,f.y,f.z),p.push(E+x,1-g),M.push(c++)}h.push(M)}for(let v=0;v<n;v++)for(let M=0;M<t;M++){let g=h[v][M+1],x=h[v][M],b=h[v+1][M],E=h[v+1][M+1];(v!==0||a>0)&&d.push(g,x,E),(v!==n-1||l<Math.PI)&&d.push(x,b,E)}this.setIndex(d),this.setAttribute("position",new ut(y,3)),this.setAttribute("normal",new ut(m,3)),this.setAttribute("uv",new ut(p,2))}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ia=class i extends pn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let y=0;y<=s;y++){let m=y/s*r,p=d/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(m),u.y=(e+t*Math.cos(p))*Math.sin(m),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(m),h.y=e*Math.sin(m),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(y/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let y=1;y<=s;y++){let m=(s+1)*d+y-1,p=(s+1)*(d-1)+y-1,v=(s+1)*(d-1)+y,M=(s+1)*d+y;a.push(m,p,M),a.push(p,v,M)}this.setIndex(a),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(c,2))}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Un=class extends ji{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Je(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_f,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};qs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nl=class extends qs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sh,endingEnd:Sh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Th:r=e,o=2*t-n;break;case Eh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Th:a=e,l=2*n-t;break;case Eh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,y=(n-t)/(s-t),m=y*y,p=m*y,v=-f*p+2*f*m-f*y,M=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*y+1,g=(-1-d)*p+(1.5+d)*m+.5*y,x=d*p-d*m;for(let b=0;b!==o;++b)r[b]=v*a[h+b]+M*a[c+b]+g*a[l+b]+x*a[u+b];return r}},Fl=class extends qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Ol=class extends qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Cn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oa(t,this.TimeBufferType),this.values=oa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:oa(e.times,Array),values:oa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ca:t=this.InterpolantFactoryMethodDiscrete;break;case ha:t=this.InterpolantFactoryMethodLinear;break;case zo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ca;case this.InterpolantFactoryMethodLinear:return ha;case this.InterpolantFactoryMethodSmooth:return zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=vi(n,r,a),this.values=vi(this.values,r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Rf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=vi(this.times),t=vi(this.values),n=this.getValueSize(),s=this.getInterpolation()===zo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let y=0;y!==n;++y){let m=t[u+y];if(m!==t[f+y]||m!==t[d+y]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=vi(e,0,a),this.values=vi(t,0,a*n)):(this.times=e,this.values=t),this}clone(){let e=vi(this.times,0),t=vi(this.values,0),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=ha;es=class extends Cn{};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=ca;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;zl=class extends Cn{};zl.prototype.ValueTypeName="color";Ul=class extends Cn{};Ul.prototype.ValueTypeName="number";Bl=class extends qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ti.slerpFlat(r,0,a,c-o,a,c,l);return r}},br=class extends Cn{InterpolantFactoryMethodLinear(e){return new Bl(this.times,this.values,this.getValueSize(),e)}};br.prototype.ValueTypeName="quaternion";br.prototype.DefaultInterpolation=ha;br.prototype.InterpolantFactoryMethodSmooth=void 0;ts=class extends Cn{};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=ca;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;Vl=class extends Cn{};Vl.prototype.ValueTypeName="vector";Da=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ka=class extends Da{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},fl=new xt,ff=new D,uf=new D,Hl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ff.setFromMatrixPosition(e.matrixWorld),t.position.copy(ff),uf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uf),t.updateMatrixWorld(),fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wl=class extends Hl{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Na=class extends Da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Wl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},$l="\\[\\]\\.:\\/",Yy=new RegExp("["+$l+"]","g"),Zl="[^"+$l+"]",Jy="[^"+$l.replace("\\.","")+"]",$y=/((?:WC+[\/:])*)/.source.replace("WC",Zl),Zy=/(WCOD+)?/.source.replace("WCOD",Jy),Ky=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zl),jy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zl),Qy=new RegExp("^"+$y+Zy+Ky+jy+"$"),ex=["material","materials","bones","map"],Gl=class{constructor(e,t,n){let s=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yy,"")}static parseTrackName(e){let t=Qy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ex.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=Gl;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];d1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"149"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="149")});function ss(){return Ys||(Ys=new wa(new Uint8Array([90,160,225]),3,1,Xl),Ys.minFilter=Ys.magFilter=Tt,Ys.needsUpdate=!0),Ys}function me(i,e={}){let t=i+JSON.stringify(e),n=Ga.get(t);return n||(n=new Un({color:i,gradientMap:ss(),...e}),Ga.set(t,n)),n}function ee(i,...e){let t=i+e.join(","),n=If.get(t);return n||(n=i==="box"?new Qi(...e):i==="cyl"?new vr(...e):i==="sph"?new La(...e):i==="ico"?new Pa(...e):i==="cone"?new Aa(...e):i==="tor"?new Ia(...e):i==="plane"?new _r(...e):i==="circ"?new Ea(...e):new Ca(...e),If.set(t,n)),n}function ue(i,e,t=0,n=0,s=0,r=!0){let a=new Dt(i,e);return a.position.set(t,n,s),a.castShadow=r,a.receiveShadow=!0,a}function Ff(){if(ai)return!0;try{jl=document.createElement("canvas"),ai=new Jl({canvas:jl,antialias:!0,powerPreference:"high-performance"})}catch{return ai=null,!1}return ai.shadowMap.enabled=!0,ai.shadowMap.type=ql,oi=new Ma,oi.background=new Je("#1a1d14"),Va=new Gs(-360/2,360/2,240*Kl/2,-240*Kl/2,1,4e3),Pf=new ka("#fff4e0","#6a5a48",.42),oi.add(Pf),Pn=new Na("#ffe8c8",.72),Pn.castShadow=!0,Pn.shadow.mapSize.set(1024,1024),Object.assign(Pn.shadow.camera,{left:-260,right:260,top:260,bottom:-260,near:10,far:1400}),Pn.shadow.bias=-.0015,Pn.shadow.normalBias=.6,oi.add(Pn,Pn.target),Ql(Ha),!0}function Ql(i){Ha=Math.min(i,2.5),ai&&ai.setSize(Math.round(360*Ha),Math.round(240*Ha),!1)}function mn(i,e,t,n,s){if(!n.length)return;let r=new Ta(e,t,n.length),a=new Nt;n.forEach((o,l)=>{a.position.set(o.x,o.y||0,o.z),a.rotation.set(o.rx||0,o.ry||0,o.rz||0),a.scale.set(o.sx||1,o.sy||o.sx||1,o.sz||o.sx||1),a.updateMatrix(),r.setMatrixAt(l,a.matrix),s&&r.setColorAt(l,new Je(s[l]))}),r.castShadow=!0,r.receiveShadow=!0,i.add(r)}function sx(){za&&(oi.remove(za),za.traverse(g=>{g.isInstancedMesh&&g.dispose()}));let i=za=new yt,e=Df[xe.theme]||Df[0],t=ue(ee("plane",760,je+600),me(e.ground),360/2,0,je/2,!1);t.rotation.x=-Math.PI/2,i.add(t);let n=ue(ee("plane",360,430),me(e.ground2),360/2,.15,215,!1);n.rotation.x=-Math.PI/2,i.add(n);let s=[],r=[],a=[];for(let g=0;g<900;g++){let x=Pe(g,1)*360,b=430+Pe(1,g)*(je-400),E=Pe(g,g);s.push({x,y:.1,z:b,rx:-Math.PI/2,sx:10+E*22,sy:6+E*12,sz:1,rz:E*6}),r.push(E>.5?e.ground2:e.bank),g%2&&a.push({x:Pe(g,7)*360,y:1,z:430+Pe(7,g)*(je-400),sx:1.4+E,sy:1+E*.6,ry:E*3})}mn(i,ee("circ",1,12),new Un({gradientMap:ss(),transparent:!0,opacity:.5,depthWrite:!1}),s,r),mn(i,ee("ico",2.2,0),me(e.grass2,{flatShading:!0}),a);for(let g of xe.roads){let x=ue(ee("box",g.w,.6,g.y1-g.y0),me(e.road),g.x+g.w/2,.3,(g.y0+g.y1)/2,!1);i.add(x)}let o=[];for(let g of xe.rivers){let x=[],b=0;for(let E of[...g.bridges].sort((R,_)=>R.x-_.x))E.x>b&&x.push([b,E.x]),b=E.x+E.w;if(b<360&&x.push([b,360]),g.kind==="water"){i.add(ue(ee("box",760,.8,g.h+12),me(e.bank),360/2,.35,g.y+g.h/2,!1));let E=ue(ee("box",760,.6,g.h),me(e.water),360/2,.9,g.y+g.h/2,!1);i.add(E);for(let R of g.bridges){i.add(ue(ee("box",R.w,3,g.h+18),me("#9a6a3e"),R.x+R.w/2,1.8,g.y+g.h/2));for(let _ of[R.x-1,R.x+R.w+1])i.add(ue(ee("box",2,5,g.h+18),me("#6e4626"),_,3.5,g.y+g.h/2))}for(let R=0;R<18;R++)o.push({x:Pe(R,g.y)*360,y:1,z:g.y+(R%2?-4:g.h+4),sx:2+Pe(g.y,R)*3,ry:R})}else for(let[E,R]of x)if(g.kind==="ridge"){i.add(ue(ee("box",R-E,12,g.h),me(e.rock),(E+R)/2,6,g.y+g.h/2));for(let _=E+6;_<R-4;_+=9)o.push({x:_,y:10+Pe(_,g.y)*4,z:g.y+g.h*(.3+Pe(g.y,_)*.4),sx:6+Pe(_,3)*4,sy:5+Pe(3,_)*5,ry:_})}else{i.add(ue(ee("box",R-E,14,g.h),me("#a8b0bc"),(E+R)/2,7,g.y+g.h/2)),i.add(ue(ee("box",R-E,1.5,g.h+2),me("#dce2ea"),(E+R)/2,14.5,g.y+g.h/2));for(let _ of[E>0?E+3:-99,R<360?R-3:-99])_>0&&i.add(ue(ee("box",6,16,g.h+2),me("#ffcc33"),_,8,g.y+g.h/2))}}for(let g of xe.helipads){i.add(ue(ee("cyl",22,23,1.6,24),me("#a8a49a"),g.x,.8,g.y,!1));let x=ue(ee("tor",17,1.1,6,32),me("#ffcc33"),g.x,1.7,g.y,!1);x.rotation.x=Math.PI/2,i.add(x);for(let[b,E,R]of[[-6,3,16],[6,3,16],[0,9,3]])i.add(ue(ee("box",E,.6,R),me("#ffffff"),g.x+b,1.9,g.y,!1))}let l=[];for(let g of xe.blockers)if(g.kind==="sandbag")for(let x=g.x+4;x<g.x+g.w;x+=7)for(let b=0;b<2;b++)l.push({x:x+b*3,y:2.5+b*4,z:g.y+g.h/2,sx:3.6,sy:2.2,sz:3.2});else g.kind==="rock"&&o.push({x:g.x+g.w/2,y:4,z:g.y+g.h/2,sx:g.w/2,sy:9,sz:g.h/2+2,ry:g.x});mn(i,ee("sph",1,8,6),me("#d8bc84"),l),mn(i,ee("dod",1,0),me(e.rock,{flatShading:!0}),o);let c=[],h=[],u=[],f=[],d=[],y=[],m=[],p=[];for(let g of xe.deco){let x=Pe(g.x|0,g.y|0);if(g.kind==="tree")c.push({x:g.x,y:5,z:g.y,sx:1,sy:1}),h.push({x:g.x,y:15+x*3,z:g.y,sx:9+x*3,sy:8+x*3,ry:x*6}),u.push(x>.5?e.grass:e.grass2),h.push({x:g.x+4,y:20+x*2,z:g.y-2,sx:6,sy:5.5,ry:x}),u.push(e.grass);else if(g.kind==="bush"||g.kind==="snowbush"||g.kind==="drybush")f.push({x:g.x,y:3,z:g.y,sx:5+x*3,sy:4+x*2,ry:x*6});else if(g.kind==="cactus")d.push({x:g.x,y:9,z:g.y,sx:2.6,sy:9,sz:2.6}),y.push({x:g.x-4,y:11,z:g.y,sx:1.6,sy:4,sz:1.6}),y.push({x:g.x+4,y:13,z:g.y,sx:1.6,sy:4,sz:1.6});else if(g.kind==="pine"){c.push({x:g.x,y:4,z:g.y,sx:.8,sy:.8});for(let b=0;b<3;b++)m.push({x:g.x,y:9+b*6,z:g.y,sx:9-b*2.4,sy:8,sz:9-b*2.4}),p.push({x:g.x,y:12+b*6,z:g.y,sx:4.5-b*1.2,sy:3,sz:4.5-b*1.2})}}mn(i,ee("cyl",1.6,2.2,10,6),me("#8a5a32"),c),mn(i,ee("ico",1,1),new Un({gradientMap:ss(),flatShading:!0}),h,u),mn(i,ee("ico",1,0),me(xe.theme===2?"#f4f8fc":xe.theme===1?"#a88a5a":e.grass2,{flatShading:!0}),f),mn(i,ee("cyl",1,1,2,7),me("#4aa85a"),d.concat(y)),mn(i,ee("cone",1,1,7),me(e.grass2,{flatShading:!0}),m),mn(i,ee("cone",1,1,7),me("#ffffff",{flatShading:!0}),p);let v=[],M=[];for(let g=440;g<je;g+=14)for(let x of[2,358])xe.rivers.some(b=>g>b.y-8&&g<b.y+b.h+8)||(v.push({x,y:4,z:g,sx:1,sy:1,sz:1}),M.push({x,y:6,z:g+7,sx:1,sy:1,sz:1}));mn(i,ee("box",2.2,8,2.2),me(e.fence),v),mn(i,ee("box",1.2,1.4,14),me(e.fence),M),oi.add(i)}function Wa(i,e,t,n){let s=new yt,r=gn(i);s.add(ue(ee("box",1.8,4,2),me(e),-1.2,2,0),ue(ee("box",1.8,4,2),me(e),1.2,2,0)),s.add(ue(ee("box",5,5,3.2),r,0,6.5,0));for(let a of[-1,1]){let o=ue(ee("box",1.4,4.5,1.4),r,a*3.2,n?9.5:6.3,0);n&&(o.rotation.z=a*.5),s.add(o)}if(s.add(ue(ee("sph",2.4,10,8),me("#f0c49a"),0,10.8,0)),t){let a=ue(ee("sph",2.7,10,6,0,Math.PI*2,0,Math.PI/2),me(t),0,11.2,0);s.add(a)}return{g:s,mats:[r]}}function rx(i){let e=new yt,t=i===0?"#5cbf4a":"#4a8ef0",n=gn(t);e.add(ue(ee("box",12,5,18),n,0,5.5,0)),e.add(ue(ee("box",11,2.2,6),gn(i===0?"#86dc6c":"#80b8ff"),0,8.6,5.5));let s=ue(ee("box",11,4,.8),me("#a8e4ff",{emissive:"#3a7aa0",emissiveIntensity:.3}),0,9.8,2.2);e.add(s),e.add(ue(ee("box",4,2.5,3.5),me("#9a5a30"),-2.5,9,-2),ue(ee("box",4,2.5,3.5),me("#9a5a30"),2.5,9,-2)),e.add(ue(ee("box",12.5,1,1),me("#3a3c46"),0,13,-4.8));for(let l of[-1,1])e.add(ue(ee("box",1,5,1),me("#3a3c46"),l*5.8,10.5,-4.8));let r=ue(ee("cyl",.9,.9,10,6),me("#2e3038"),0,11.2,5);r.rotation.x=Math.PI/2,e.add(r),e.add(ue(ee("cyl",1.6,1.6,2.5,8),me("#4a4c58"),0,10.6,.5));for(let[l,c]of[[-6.6,6],[6.6,6],[-6.6,-6],[6.6,-6]]){let h=ue(ee("cyl",3.1,3.1,2.6,10),me("#24252c"),l,3.1,c);h.rotation.z=Math.PI/2,e.add(h)}let a=Wa("#c8a060","#5a4a30","#3f6a2a");a.g.scale.setScalar(.55),a.g.position.set(-2.5,6.5,-2),e.add(a.g);let o=new Dt(ee("sph",17,16,12),new si({color:"#8cd2ff",transparent:!0,opacity:.22,depthWrite:!1}));return o.position.y=7,o.visible=!1,e.add(o),{g:e,mats:[n],shield:o}}function kf(i){let e=new yt,t=gn(i?"#8a6a5a":"#c8a868"),n=ue(ee("tor",8.5,3,8,14),t,0,3,0);n.rotation.x=Math.PI/2,e.add(n),e.add(ue(ee("sph",5.5,12,8,0,Math.PI*2,0,Math.PI/2),gn("#6a6c78"),0,3,0));let s=new yt;s.position.y=5.5;let r=ue(ee("cyl",1.4,1.6,13,8),me(i?"#a83a2a":"#3a3c46"),0,0,7);return r.rotation.x=Math.PI/2,s.add(r),e.add(s),{g:e,mats:[t],pivot:s}}function ax(){let i=new yt,e=gn("#b85a3a");for(let s of[-1,1])i.add(ue(ee("box",4.5,5,22),me("#2a2b32"),s*8.2,2.6,0));i.add(ue(ee("box",12,5,20),e,0,5,0));let t=new yt;t.position.y=9,t.add(ue(ee("cyl",5.5,6,3.6,10),gn("#d0704a"),0,0,0));let n=ue(ee("cyl",1.3,1.5,14,8),me("#5a2418"),0,.4,8);return n.rotation.x=Math.PI/2,t.add(n),i.add(t),{g:i,mats:[e],pivot:t}}function ox(){let i=new yt,e=gn("#a8743e");i.add(ue(ee("box",30,12,22),e,0,6,0));let t=ue(ee("cone",22,10,4),gn("#d8483a"),0,17,0);t.rotation.y=Math.PI/4,t.scale.set(1,1,.78),i.add(t),i.add(ue(ee("box",11,9,.6),me("#2a2420"),0,4.5,11.2));for(let n=-4;n<=4;n+=2)i.add(ue(ee("cyl",.35,.35,9,4),me("#c8c8d2"),n,4.5,11.6));return i.add(ue(ee("box",7,4,.6),me("#fff2c0"),-10,8,11.3)),{g:i,mats:[e]}}function lx(i){let e=new yt,t=gn(i?"#c8d0dc":"#c8bfae");e.add(ue(ee("box",184,24,84),t,0,12,0));for(let r=-86;r<=86;r+=14)e.add(ue(ee("box",9,6,6),me(i?"#ffffff":"#ddd4c4"),r,27,-39));for(let r of[-80,80])e.add(ue(ee("cyl",15,16,36,10),me(i?"#dde4ec":"#d8cfbe"),r,18,-20)),e.add(ue(ee("cone",17,12,10),me("#c83a2e"),r,42,-20));e.add(ue(ee("box",36,18,2),me("#3a2c20"),0,9,42));for(let r=-15;r<=15;r+=6)e.add(ue(ee("box",3.5,17,1),me("#8a5a32"),r,9,43));let n=ue(ee("sph",10,16,12),new Un({color:"#ff5a40",emissive:"#ff2010",emissiveIntensity:.6,gradientMap:ss()}),0,30,-12);e.add(n);let s=new Dt(ee("sph",17,16,12),new si({color:"#8cd2ff",transparent:!0,opacity:.3,depthWrite:!1}));return s.position.set(0,30,-12),e.add(s),{g:e,mats:[t],core:n,shield:s}}function cx(){let i=new yt,e=gn("#c8944c");for(let s of[-1,1])i.add(ue(ee("box",18,12,60),me("#2a2b32"),s*52,6,0));i.add(ue(ee("box",88,16,54),e,0,10,0));for(let s=-40;s<40;s+=16)i.add(ue(ee("box",8,1,3),me("#ffcc33"),s+4,18.6,-22));for(let s of[-12,0,12])i.add(ue(ee("box",6,6,2),me("#1e1a16"),s,8,27.5));let t=ue(ee("sph",7,14,10),new Un({color:"#ff5a40",emissive:"#ff2010",emissiveIntensity:.6,gradientMap:ss()}),0,20,-4);i.add(t);let n=new Dt(ee("sph",12,16,12),new si({color:"#8cd2ff",transparent:!0,opacity:.3,depthWrite:!1}));return n.position.set(0,20,-4),i.add(n),{g:i,mats:[e],core:t,shield:n}}function hx(){let i=new yt,e=gn("#4e8a40"),t=ue(ee("sph",7,14,10),e,0,10,0);t.scale.set(1,.85,1.35),i.add(t);let n=ue(ee("sph",4.6,12,8),me("#a8e4ff",{emissive:"#3a7aa0",emissiveIntensity:.3}),0,11.5,-6);i.add(n),i.add(ue(ee("box",2.6,2.6,16),e,0,11,15),ue(ee("box",1,7,4),e,0,13,22));for(let r of[-1,1])i.add(ue(ee("box",1.2,1.2,18),me("#4a4c58"),r*6,2,0));let s=new yt;return s.position.y=18,s.add(ue(ee("box",40,.6,2.2),me("#3a3c46"),0,0,0,!1),ue(ee("box",2.2,.6,40),me("#3a3c46"),0,0,0,!1)),i.add(s),{g:i,mats:[e],rotor:s}}function fx(i){let e=new yt;return e.add(ue(ee("box",9,9,9),new Un({color:Ua[i]||Ua[0],emissive:Ua[i]||Ua[0],emissiveIntensity:.35,gradientMap:ss()}),0,0,0)),e.add(ue(ee("box",9.6,2,9.6),me("#ffffff"),0,0,0,!1)),{g:e,mats:[]}}function ux(i){let e=new yt,t=(n,s,r=0)=>{let a=new Dt(n,ix(s));return a.rotation.x=r,e.add(a),a};switch(i){case Se.mg:t(ee("sph",1.6,6,4),"#fff27a");break;case Se.big:t(ee("sph",2.6,8,6),"#ffb040");break;case Se.ebullet:t(ee("sph",2.4,8,6),"#ff4a38");break;case Se.eshell:t(ee("sph",3.4,8,6),"#ff8a2a");break;case Se.missile:case Se.homing:t(ee("cyl",1.4,1.4,8,6),"#f4f4f4",Math.PI/2);break;case Se.laser:t(ee("box",2,2,18),"#9cf4ff");break;default:t(ee("sph",2.5,6,4),"#4c6c2c")}return e.traverse(n=>{n.castShadow=!1}),{g:e,mats:[]}}function is(i,e,t,n,s){let r=new Set;for(let a of e){let o=t(a),l=i.get(o);l||(l=n(a),oi.add(l.g),i.set(o,l)),s(l,a),r.add(o)}for(let[a,o]of i)r.has(a)||(oi.remove(o.g),o.mats&&o.mats.forEach(l=>l.dispose()),i.delete(a))}function ec(i){if(!ai)return null;let e=xe.theme+":"+xe.helipads.length+":"+xe.spawns.length+":"+xe.deco.length;if(e!==Lf){Lf=e;for(let o of Object.values(ns))is(o,[],()=>0);sx()}let t=i.cam,n=i.now,s=360/2,r=t+240/2;Va.position.set(s,Kl*1500,r+nx*1500),Va.lookAt(s,0,r),Pn.position.set(s-180,420,r+260),Pn.target.position.set(s,0,r),Pn.target.updateMatrixWorld();let a=i.S||{e:[],b:[],w:[],i:[],players:[]};return is(ns.e,a.e,o=>o[0]+":"+o[1],o=>{switch(o[1]){case q.soldier:{let l=Wa("#7a70b8","#3c2c50","#d83a2e",!1);return l.g.scale.setScalar(1.4),l}case q.turret:return kf(!1);case q.bossTurret:return kf(!0);case q.tank:return ax();case q.prison:return ox();case q.boss:{let l=lx(xe.theme===2);return l.g.scale.y=.5,l}case q.boss2:{let l=cx();return l.g.scale.y=.75,l}}return Wa("#888","#444",null)},(o,l)=>{let[,c,h,u,f,,d,y]=l;o.g.position.set(h,0,u),c===q.soldier?(o.g.rotation.y=Ba(f),o.g.position.y=Math.abs(Math.sin(n/90+l[0]))*.8):o.pivot&&(o.pivot.rotation.y=Ba(f)),o.shield&&(o.shield.visible=!!y),o.core&&(o.core.material.emissiveIntensity=.4+.4*Math.sin(n/140)),dx(o,d)}),is(ns.w,a.w,o=>o[0],()=>{let o=Wa("#ffffff","#4c70c8","#6a3c1c",!0);return o.g.scale.setScalar(1.35),o},(o,l)=>{if(o.g.position.set(l[1],Math.abs(Math.sin(n/120+l[0]))*1.5,l[2]),l[3])for(let c of o.mats)c.emissive.setHex((n/120|0)%2?8939008:0)}),is(ns.i,a.i,o=>o[0]+":"+o[1],o=>fx(o[1]),(o,l)=>{o.g.position.set(l[2],7+Math.sin(n/200+l[0])*1.5,l[3]),o.g.rotation.y=n/600,o.g.visible=!(l[4]&&(n/100|0)%2)}),is(ns.b,a.b,o=>o[0],o=>ux(o[1]),(o,l)=>{o.g.position.set(l[2],6+(l[4]||0),l[3]),o.g.rotation.y=Ba(l[5]||0)}),is(ns.p,a.players.filter(o=>o[3]),o=>o.slot,o=>rx(o.slot),(o,l)=>{o.g.position.set(l.x,0,l.y),o.g.rotation.y=Ba(l.a),o.g.visible=!(l[4]&&(n/90|0)%2),o.shield.visible=!!l[11]}),is(ns.h,xe.helipads.map((o,l)=>({h:o,i:l})),o=>o.i,()=>hx(),(o,{h:l,i:c})=>{let h=(i.padAnim||{})[c]||0,u=h>0?Math.sin((1-h/2.4)*Math.PI)*40:0;o.g.position.set(l.x,1.6+u,l.y),o.rotor.rotation.y=n*(h>0?.03:.006)}),ai.render(oi,Va),jl}function Of(i,e,t,n){for(let s of e.players){if(!s[3])continue;let r=s.x,a=s.y-t;s[7]>0&&(i.fillStyle="#ffffff",i.beginPath(),i.roundRect?i.roundRect(r-7,a-30,14,9,3):i.rect(r-7,a-30,14,9),i.fill(),i.fillStyle="#2a2a2a",i.font="bold 7px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(s[7],r,a-25.3)),s.slot===n&&(i.fillStyle=s.slot===0?"#8fe070":"#8cc0ff",i.beginPath(),i.moveTo(r,a-34),i.lineTo(r-4,a-40),i.lineTo(r+4,a-40),i.closePath(),i.fill())}}var Nf,Kl,nx,ai,oi,Va,Pn,Pf,za,Lf,Ha,jl,Ys,Ga,If,gn,ix,Df,Ua,ns,Ba,dx,zf=xn(()=>{Cf();kn();ms();mi();Oi();Nf=46*Math.PI/180,Kl=Math.sin(Nf),nx=Math.cos(Nf),ai=null,za=null,Lf="",Ha=2,jl=null,Ys=null,Ga=new Map,If=new Map;gn=(i,e={})=>new Un({color:i,gradientMap:ss(),...e}),ix=(i,e={})=>{let t="b"+i+JSON.stringify(e),n=Ga.get(t);return n||(n=new si({color:i,...e}),Ga.set(t,n)),n};Df=[{ground:"#a8b86a",ground2:"#c8a878",grass:"#4fae44",grass2:"#33903a",road:"#c8a070",rock:"#d2bcae",rockDk:"#b8a092",water:"#3a8ed0",bank:"#dcc496",fence:"#a8804e"},{ground:"#dcb47e",ground2:"#c89a64",grass:"#6a9a40",grass2:"#4f7f34",road:"#c8945a",rock:"#e2c2a8",rockDk:"#c09068",water:"#3a92c4",bank:"#ead2a2",fence:"#9a6e40"},{ground:"#e2e8f0",ground2:"#cdd6e2",grass:"#3f8a6a",grass2:"#2c6c54",road:"#b8c2d0",rock:"#b0bccc",rockDk:"#94a2b6",water:"#2f68b0",bank:"#d6e0ea",fence:"#7a6a5a"}];Ua=["#ff8a3c","#4aa8ff","#ff5a78","#9a6aff","#ffd23c"];ns={e:new Map,b:new Map,w:new Map,i:new Map,p:new Map,h:new Map};Ba=i=>Math.PI/2-i,dx=(i,e)=>{for(let t of i.mats)t.emissive.setHex(e?7829367:0)}});function Ya(){if(Be){Be.state==="suspended"&&Be.resume();return}try{Be=new(window.AudioContext||window.webkitAudioContext),li=Be.createGain(),li.gain.value=wr?0:.35,li.connect(Be.destination),Ln=Be.createGain(),Ln.gain.value=.55,Ln.connect(li),Ai=Be.currentTime+.1,Xa=Be.createBuffer(1,Be.sampleRate*.6,Be.sampleRate);let i=Xa.getChannelData(0);for(let e=0;e<i.length;e++)i[e]=Math.random()*2-1}catch{Be=null}}function ic(i){wr=i,li&&(li.gain.value=i?0:.35)}function Sr(){return wr}function nn(i,e,t,n,s=.3,r=0){let a=Be.currentTime+r,o=Be.createOscillator(),l=Be.createGain();o.type=i,o.frequency.setValueAtTime(e,a),o.frequency.exponentialRampToValueAtTime(Math.max(20,t),a+n),l.gain.setValueAtTime(s,a),l.gain.exponentialRampToValueAtTime(.001,a+n),o.connect(l),l.connect(li),o.start(a),o.stop(a+n+.02)}function tc(i,e=.4,t=1200){let n=Be.currentTime,s=Be.createBufferSource();s.buffer=Xa;let r=Be.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(t,n),r.frequency.exponentialRampToValueAtTime(80,n+i);let a=Be.createGain();a.gain.setValueAtTime(e,n),a.gain.exponentialRampToValueAtTime(.001,n+i),s.connect(r),r.connect(a),a.connect(li),s.start(n),s.stop(n+i)}function Ft(i){if(!(!Be||wr))switch(i){case"mg":nn("square",900,300,.035,.035);break;case"laser":nn("sawtooth",1800,600,.08,.05);break;case"launch":nn("sawtooth",300,900,.12,.08);break;case"pop":tc(.15,.25,2200);break;case"boom":tc(.5,.6,900),nn("sine",120,40,.4,.4);break;case"squish":nn("square",200,60,.08,.15);break;case"pickup":nn("square",660,990,.07,.15),nn("square",990,1320,.07,.15,.07);break;case"deliver":[523,659,784,1046].forEach((e,t)=>nn("square",e,e,.1,.14,t*.09));break;case"upgrade":[392,523,659,784,1046].forEach((e,t)=>nn("triangle",e,e*1.01,.09,.22,t*.06));break;case"die":nn("sawtooth",600,50,.6,.25),tc(.5,.5,1500);break;case"start":[392,392,523].forEach((e,t)=>nn("square",e,e,.12,.15,t*.14));break;case"win":[523,659,784,659,784,1046].forEach((e,t)=>nn("square",e,e,.14,.15,t*.13));break;case"lose":[392,330,262,196].forEach((e,t)=>nn("triangle",e,e,.22,.2,t*.2));break}}function Hf(i,e,t,n,s){let r=Be.createOscillator(),a=Be.createGain();r.type=i,r.frequency.setValueAtTime(e,t),a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(s,t+.008),a.gain.setValueAtTime(s,t+n*.6),a.gain.exponentialRampToValueAtTime(1e-4,t+n),r.connect(a),a.connect(Ln),r.start(t),r.stop(t+n+.02)}function gx(i,e){if(i==="k"){let a=Be.createOscillator(),o=Be.createGain();a.type="sine",a.frequency.setValueAtTime(150,e),a.frequency.exponentialRampToValueAtTime(45,e+.12),o.gain.setValueAtTime(.5,e),o.gain.exponentialRampToValueAtTime(.001,e+.14),a.connect(o),o.connect(Ln),a.start(e),a.stop(e+.15);return}let t=Be.createBufferSource();t.buffer=Xa;let n=Be.createBiquadFilter();n.type="highpass",n.frequency.value=i==="s"?1200:6e3;let s=Be.createGain(),r=i==="s"?.12:.03;s.gain.setValueAtTime(i==="s"?.28:.08,e),s.gain.exponentialRampToValueAtTime(.001,e+r),t.connect(n),n.connect(s),s.connect(Ln),t.start(e,Math.random()*.3),t.stop(e+r+.01)}function yx(){if(!Be||!Ln)return;if(!Ei||wr){Ai=Be.currentTime+.05;return}Ai<Be.currentTime-.3&&(Ai=Be.currentTime+.03);let i=60/Ei.bpm/2;for(;Ai<Be.currentTime+.15;){let e=nc%32,t=Ai;Ei.lead[e]&&Hf("square",Vf(Ei.lead[e]),t,i*.9,.055),Ei.bass[e]&&Hf("triangle",Vf(Ei.bass[e]),t,i*.85,.16);let n=Ei.drums[e%8];n!=="."&&gx(n,t),nc++,Ai+=i}}function Wf(i){i!==Uf&&(Uf=i,Ei=mx[i]||null,nc=0,Be&&!Ln&&(Ln=Be.createGain(),Ln.gain.value=.55,Ln.connect(li)),Be&&(Ai=Be.currentTime+.08),Bf||(Bf=setInterval(yx,25)))}var Be,li,wr,Xa,qa,mx,Ln,Ei,Uf,nc,Ai,Bf,Vf,Gf=xn(()=>{Be=null,li=null,wr=!1,Xa=null;qa=i=>i.flatMap(e=>[e,e+12,e,e+12,e,e+12,e+7,e+12]),mx={stage0:{bpm:132,drums:"khshkhsh",bass:qa([45,40,41,43]),lead:[69,0,72,76,74,0,72,71,69,0,64,69,72,0,71,0,65,0,69,72,76,0,74,72,71,0,67,71,76,0,0,0]},stage1:{bpm:140,drums:"kh.hsh.h",bass:qa([38,38,34,33]),lead:[62,0,65,0,64,0,65,0,69,70,69,65,64,0,0,0,62,0,65,67,69,0,70,73,74,73,70,69,65,64,62,0]},stage2:{bpm:152,drums:"khshkksh",bass:qa([40,36,38,35]),lead:[64,67,71,67,76,0,74,71,72,71,69,67,66,0,62,0,64,67,71,74,76,79,78,76,74,72,71,69,71,0,0,0]},boss:{bpm:168,drums:"kkshkksh",bass:qa([36,36,32,31]),lead:[60,63,67,63,60,63,68,63,60,63,67,63,59,62,67,62,60,63,67,72,70,67,68,67,65,63,62,63,59,0,59,0]}},Ln=null,Ei=null,Uf="",nc=0,Ai=0,Bf=null,Vf=i=>440*Math.pow(2,(i-69)/12)});var Ox={};function Ka(){ci=Ar()?Math.max(1,Math.min(Ci==="3d"?2.5:4,Math.round(ce.s*ce.dpr))):1,(Hn.width!==360*ci||Hn.height!==240*ci)&&(Hn.width=360*ci,Hn.height=240*ci),Co(ci),Ql(ci)}function $f(i){i==="3d"&&!Ff()&&(ls("M\xE1y kh\xF4ng h\u1ED7 tr\u1EE3 WebGL \u2014 d\xF9ng theme SNES"),i="snes"),Ci=i,lt=Ar()?Lo:Or,Ar()&&Ro(i==="3d"?"pastel":i),di.set("rj_skin",i),yo(),Po(),Ka();for(let e of document.querySelectorAll("[data-skin]"))e.setAttribute("aria-pressed",e.dataset.skin===i?"true":"false")}function vx(){let i=tt.getImageData(0,0,Hn.width,Hn.height),e=new Uint32Array(i.data.buffer);for(let t=0;t<e.length;t++){let n=e[t];e[t]=Zf[(n&240)<<4|n>>8&240|n>>20&15]}tt.putImageData(i,0,0)}function lc(){ce.dpr=Math.min(window.devicePixelRatio||1,3),ce.W=window.innerWidth,ce.H=window.innerHeight,Wn.width=Math.round(ce.W*ce.dpr),Wn.height=Math.round(ce.H*ce.dpr),ce.s=Math.min(ce.W/360,ce.H/240),ce.gw=360*ce.s,ce.gh=240*ce.s,ce.ox=(ce.W-ce.gw)/2,ce.oy=(ce.H-ce.gh)/2;let i=ce.H>ce.W*1.05;document.body.classList.toggle("portrait",i),window.RJ_PAUSED=i&&kt==="play"}function Kf(i,e,t){if(e>=ce.W/2){hs.id=i,hs.x=e,hs.y=t,$a=!0;return}Qe.active||(Qe.active=!0,Qe.id=i,Qe.ox=e,Qe.oy=t,Qe.x=e,Qe.y=t)}function jf(i,e,t){if(!Qe.active||Qe.id!==i)return;Qe.x=e,Qe.y=t;let n=e-Qe.ox,s=t-Qe.oy,r=Math.hypot(n,s);r>fi&&(Qe.ox=e-n/r*fi,Qe.oy=t-s/r*fi)}function cc(i){Qe.id===i&&(Qe.active=!1,Qe.id=null),hs.id===i&&(hs.id=null)}function bx(){let i=0,e=0;if((qt.has("arrowleft")||qt.has("a"))&&(i-=1),(qt.has("arrowright")||qt.has("d"))&&(i+=1),(qt.has("arrowup")||qt.has("w"))&&(e-=1),(qt.has("arrowdown")||qt.has("s"))&&(e+=1),i||e){let t=Math.hypot(i,e);return[i/t,e/t]}if(Qe.active){let t=(Qe.x-Qe.ox)/fi,n=(Qe.y-Qe.oy)/fi,s=Math.hypot(t,n);if(s<.15)return[0,0];let r=Math.min(1,(s-.15)/.55)/s;return[t*r,n*r]}return[0,0]}function ls(i,e=2200){let t=Ue("toast");t.textContent=i,t.classList.add("on"),clearTimeout(Xf),Xf=setTimeout(()=>t.classList.remove("on"),e)}function $s(i){for(let e of["menu","wait","end"])Ue(e).classList.toggle("on",e===i)}function tu(i){Tc(i),lt.resetTerrain(),hc=i}function wx(){let i=new URLSearchParams(location.search).get("server");return i||(location.protocol==="https:"?"wss://":"ws://")+location.host+"/ws"}function fs(i){rn&&rn.readyState===1&&rn.send(JSON.stringify(i))}function ja(){if(rn){rn.onclose=null;try{rn.close()}catch{}rn=null}}function nu(){let i=(Ue("name").value||"").trim()||"Player";di.set("rj_name",i),Ue("err").textContent="",ja(),kt="connecting",$s("wait"),iu(Math.ceil(ro/1e3)),rn=window.RJ_LOCAL?window.RJ_LOCAL():new WebSocket(wx());let e=Ue("tut")?Ue("tut").checked:!1;rn.onopen=()=>fs({t:"join",name:i,tut:e}),rn.onmessage=t=>Sx(JSON.parse(t.data)),rn.onerror=()=>{},rn.onclose=()=>{rn=null,(kt==="play"||kt==="connecting"||kt==="wait")&&(kt="menu",$s("menu"),Ue("err").textContent="M\u1EA5t k\u1EBFt n\u1ED1i t\u1EDBi server. Th\u1EED l\u1EA1i nh\xE9.")}}function iu(i){Ue("count").textContent=i,Ue("countbar").style.width=i/(ro/1e3)*100+"%"}function Sx(i){switch(i.t){case"wait":kt="wait",iu(i.left);break;case"s":Tx(i);break;case"start":{nt=i.you,ui=i.players,Dn=[],Ve=null,Ri=null,Ja=0,Vn=[],dt=null,sn={x:0,y:0},Er=[],cs={},Tr=new Set,lt.clearParticles(),kt="play",$s(null);let e=ui[1-nt];Bn=null,tu(i.stage||0),i.stage&&ls(e.bot?"\u0110\u1ED3ng \u0111\u1ED9i: BOT":`\u0110\u1ED3ng \u0111\u1ED9i: ${e.name}`),Ft("start");break}case"end":Ax(i);break}}function su(i){let e=xe.blockers.slice();for(let t of i.e){let n=Qs(t[1],t[2],t[3]);n&&e.push(n)}return e}function Tx(i){let e=performance.now();i.st=i.k/30*1e3;let t=e-i.st;Ri===null||t<Ri?Ri=t:Ri+=(t-Ri)*.02,Dn.push(i),Dn.length>40&&Dn.shift(),Ve=i,i.sg!==hc&&(tu(i.sg),dt=null,Vn=[]);for(let l of i.ev)Er.push({st:i.st,e:l});let n=i.p[nt];if(!n[3]){dt={x:n[0],y:n[1],a:n[2]},Vn=[],rc=!1;return}if(!dt||!rc){dt={x:n[0],y:n[1],a:n[2]},Vn=[],sn={x:0,y:0},rc=!0;return}Vn=Vn.filter(l=>l.seq>i.ack[nt]);let s={x:n[0],y:n[1],a:dt.a},r=su(i);for(let l of Vn)Ni(s,l.dx,l.dy,i.cam,r);let a=dt.x-s.x,o=dt.y-s.y;Math.hypot(a,o)>28?sn={x:0,y:0}:(sn.x+=a,sn.y+=o),dt=s;for(let l of i.b)Tr.has(l[0])||(Tr.add(l[0]),(l[1]===Se.mg||l[1]===Se.big||l[1]===Se.missile||l[1]===Se.laser)&&Math.hypot(l[2]-n[0],l[3]-n[1])<24&&e-Yf>140&&(Ft(l[1]===Se.missile?"launch":l[1]===Se.laser?"laser":"mg"),Yf=e));Tr.size>3e3&&(Tr=new Set(i.b.map(l=>l[0])))}function Ex(){let[i,e]=js(...bx());Ja++,fs({t:"i",s:Ja,x:i,y:e,f:Qf()||$a?1:0}),$a=!1,dt&&Ve&&Ve.p[nt][3]&&!Ve.ph&&(Vn.push({seq:Ja,dx:i,dy:e}),Vn.length>90&&Vn.shift(),Ni(dt,i,e,Ve.cam,su(Ve)))}function Ax(i){kt="end",ja();let e=Ue("endTitle");e.innerHTML=i.win?"MISSION<br>COMPLETE":"GAME<br>OVER",e.className="title "+(i.win?"win":"lose");let t=`${Math.floor(i.time/60)}:${String(i.time%60).padStart(2,"0")}`;Ue("endSub").textContent=i.win?`Ho\xE0n th\xE0nh ${i.stages} m\xE0n \xB7 ${t}`:`M\xE0n ${i.stage}/${i.stages} \xB7 Ti\u1EBFn \u0111\u1ED9 ${i.progress}% \xB7 ${t}`,Ue("endRows").innerHTML=i.players.map((n,s)=>`<tr><td style="color:var(--p${s+1})">${Rx(n.name)}${n.bot&&!/bot/i.test(n.name)?" (bot)":""}${s===nt?" \u2605":""}</td><td>${n.rescued}</td><td>${n.kills}</td><td>${n.score}</td></tr>`).join(""),Ft(i.win?"win":"lose"),setTimeout(()=>$s("end"),600)}function Cx(i){let e=i[0];if(e==="x")lt.spawnExplosion(i[1],i[2],i[3]),Ft(i[3]>=1?"boom":"pop"),i[3]>=1&&(hi=Math.max(hi,i[3]*3));else if(e==="h")lt.spawnSpark(i[1],i[2]);else if(e==="s")lt.spawnSplat(i[1],i[2]),Ft("squish");else if(e==="d"){cs[i[1]]=2.4;let t=xe.helipads[i[1]];lt.spawnText(t.x,t.y-26,`+${i[2]*100}`,i[3]===0?"#e6f07a":"#8fc4ff"),Ft("deliver"),i[3]===nt&&ls(`\u0110\xE3 c\u1EE9u ${i[2]} t\xF9 binh!`)}else if(e==="p")i[1]===nt&&Ft("pickup");else if(e==="u"){let t=Ve&&Ve.p[i[1]];t&&lt.spawnText(t[0],t[1]-16,`WEAPON ${i[2]}`,"#ffe14a"),i[1]===nt&&Ft("upgrade")}else if(e==="k"){if(i[1]===nt){Ft("die"),hi=6;try{navigator.vibrate&&navigator.vibrate(120)}catch{}}}else if(e==="g")Bn=i[1]===0?{text:"T\u1EACP L\xC1I",sub:"M\xE0n h\u01B0\u1EDBng d\u1EABn",t:performance.now()}:{text:`STAGE ${i[1]}`,sub:Lr[i[1]].name+(i[1]>1?" \xB7 +1 m\u1EA1ng":""),t:performance.now()},i[1]===1&&hc===1&&Ue("tut")&&Ue("tut").checked&&(di.set("rj_tut_done","1"),Ue("tut").checked=!1),Ft("start");else if(e==="c")Bn={text:"CLEAR!",sub:`Th\u01B0\u1EDFng +${i[2]} \u0111i\u1EC3m`,t:performance.now(),dur:3.8},Ft("win");else if(e==="i"){let t=Ve&&Ve.p[i[1]];t&&lt.spawnText(t[0],t[1]-18,Mx[i[2]]||"","#f8e060"),i[1]===nt&&Ft(i[2]===gt.bomb?"boom":"upgrade")}else if(e==="L")i[1]!==nt&&Ft("pickup");else if(e==="A"){let t=i[1]===nt,n=ui[t?i[2]:i[1]]?.name||"\u0110\u1ED3ng \u0111\u1ED9i";i[3]===1?(ls(t?`${n} \u0111\xE3 cho b\u1EA1n 1 m\u1EA1ng!`:`B\u1EA1n \u0111\xE3 cho ${n} 1 m\u1EA1ng`),Ft("upgrade")):i[3]===2?t&&ls("\u0110\u1ED3ng \u0111\u1ED9i kh\xF4ng c\xF2n m\u1EA1ng d\u01B0 \u0111\u1EC3 cho"):ls(t?`${n} kh\xF4ng cho m\u1EA1ng`:"\u0110\xE3 t\u1EEB ch\u1ED1i")}else e==="T"?Ft("pickup"):e==="B"?(os=.35,hi=8):e==="b"&&(ui[i[1]]&&(ui[i[1]].bot=!0),i[1]!==nt&&ls("\u0110\u1ED3ng \u0111\u1ED9i r\u1EDDi tr\u1EADn \u2014 BOT l\xE1i thay",3e3))}function ru(i,e,t){let n=(e-i+Math.PI*3)%(Math.PI*2)-Math.PI;return i+n*t}function ac(i,e,t,n,s,r){if(!i)return e;let a=new Map(i.map(o=>[o[0],o]));return e.map(o=>{let l=a.get(o[0]);if(!l)return o;let c=o.slice();return c[n]=l[n]+(o[n]-l[n])*t,c[s]=l[s]+(o[s]-l[s])*t,r!==void 0&&(c[r]=ru(l[r],o[r],t)),c})}function Px(i){let e=i-Ri-xx,t=Dn[0],n=Dn[Dn.length-1];for(let a=Dn.length-1;a>0;a--)if(Dn[a-1].st<=e){t=Dn[a-1],n=Dn[a];break}let s=n.st===t.st?1:Math.max(0,Math.min(1,(e-t.st)/(n.st-t.st))),r=n.p.map((a,o)=>{let l=t.p[o],c=a.slice();return l[3]&&a[3]&&(c[0]=l[0]+(a[0]-l[0])*s,c[1]=l[1]+(a[1]-l[1])*s,c[2]=ru(l[2],a[2],s)),c});return{rt:e,cam:t.cam+(n.cam-t.cam)*s,players:r,e:ac(t.e,n.e,s,2,3,4),b:ac(t.b,n.b,s,2,3),w:ac(t.w,n.w,s,1,2),i:n.i||[]}}function Lx(i,e){if(tt.setTransform(ci,0,0,ci,0,0),tt.imageSmoothingEnabled=Ar(),tt.fillStyle="#14160f",tt.fillRect(0,0,360,240),kt!=="play"||!Ve||Ri===null){if(rs-=e*14,rs<600&&(rs=je-240),Ci==="3d"){let s=ec({cam:rs,now:i});s&&tt.drawImage(s,0,0,360,240)}else lt.drawTerrain(tt,rs),lt.drawHelis(tt,rs,i,{});return lt.drawParticles(tt,rs,e),null}let t=Px(i);for(;Er.length&&Er[0].st<=t.rt;)Cx(Er.shift().e);for(let s in cs)cs[s]=Math.max(0,cs[s]-e);let n=t.cam;if(Ci==="3d"){let s=t.players.map((a,o)=>{let l=a.slice();return l.slot=o,l.x=a[0],l.y=a[1],l.a=a[2],o===nt&&dt&&(l.x=dt.x+sn.x,l.y=dt.y+sn.y,l.a=dt.a),l});sn.x*=.82,sn.y*=.82;let r=ec({cam:n,now:i,padAnim:cs,S:{e:t.e,b:t.b,w:t.w,i:t.i,players:s}});r&&tt.drawImage(r,0,0,360,240);for(let a of t.e)lt.drawHpBar(tt,a,n);return Of(tt,{players:s},n,nt),lt.drawParticles(tt,n,e),os>0&&(tt.fillStyle=`rgba(255,255,255,${Math.min(1,os*2.5)})`,tt.fillRect(0,0,360,240),os-=e),t}lt.drawTerrain(tt,n);for(let s of t.e)(s[1]===q.prison||s[1]===q.boss)&&lt.drawEnemy(tt,s,n,i);lt.drawHelis(tt,n,i,cs);for(let s of t.w)lt.drawPow(tt,s,n,i);for(let s of t.i)lt.drawItem(tt,s,n,i);for(let s of t.e)s[1]!==q.prison&&s[1]!==q.boss&&lt.drawEnemy(tt,s,n,i);for(let s of t.e)lt.drawHpBar(tt,s,n);t.players.forEach((s,r)=>{if(!s[3])return;let a=s[0],o=s[1],l=s[2];r===nt&&dt&&(a=dt.x+sn.x,o=dt.y+sn.y,l=dt.a),lt.drawJeep(tt,r,a,o,l,n,{invuln:s[4],carry:s[7],self:r===nt,shield:s[11]})}),sn.x*=.82,sn.y*=.82;for(let s of t.b)lt.drawBullet(tt,s,n);return lt.drawParticles(tt,n,e),os>0&&(tt.fillStyle=`rgba(255,255,255,${Math.min(1,os*2.5)})`,tt.fillRect(0,0,360,240),os-=e),t}function Ix(i,e){let t=ce.dpr,n=In,s=ce.ox*t,r=ce.oy*t,a=ce.gw*t,o=ce.gh*t,l=Math.max(1,ce.s*t);n.save(),n.fillStyle="rgba(10,12,8,0.62)",n.fillRect(s,r,a,22*l);let c=Ve.p;c.forEach((m,p)=>{let v=p===0,M=v?s+5*l:s+a-5*l;n.textAlign=v?"left":"right",n.font=`${Math.round(5*l)}px ${as}`,n.fillStyle=p===0?"#c9d65a":"#6fb0ff";let g=(ui[p]?.name||`P${p+1}`).slice(0,10)+(ui[p]?.bot&&!/bot/i.test(ui[p].name)?"\xB7BOT":"")+(p===nt?" \u2605":"");n.fillText(g,M,r+8*l),n.fillStyle="#f2efd8",n.fillText(String(m[8]).padStart(6,"0"),M,r+16*l);let x=v?M+44*l:M-44*l;for(let b=0;b<3;b++)n.fillStyle=b<m[5]?p===0?"#c9d65a":"#6fb0ff":"rgba(255,255,255,0.15)",n.fillRect(x+(v?b:-b-1)*5*l,r+11*l,4*l,5*l);n.fillStyle="#ffd84a",n.textAlign=v?"left":"right",n.font=`${Math.round(4*l)}px ${as}`,n.fillText("W"+m[6],v?x+17*l:x-17*l,r+16*l),!m[3]&&m[5]<=0&&(n.fillStyle="#ff5a4a",n.fillText("OUT",v?x+30*l:x-30*l,r+16*l))});let h=1-i.cam/(je-240);n.fillStyle="rgba(255,255,255,0.15)",n.fillRect(s+a/2-18*l,r+9*l,36*l,3*l),n.fillStyle="#ffd84a",n.fillRect(s+a/2-18*l,r+9*l,36*l*h,3*l),n.font=`${Math.round(4*l)}px ${as}`,n.textAlign="center",n.fillStyle="#a7a58c",n.fillText(Ve.sg===0?"T\u1EACP L\xC1I":`S${Ve.sg} `+(i.cam<30?"BOSS":`${Math.round(h*100)}%`),s+a/2,r+19*l);let u=i.e.find(m=>m[1]===q.boss||m[1]===q.boss2);if(u){let m=a-40*l,p=s+20*l,v=r+24*l;n.fillStyle="#1c140c",n.fillRect(p-l,v-l,m+2*l,6*l),n.fillStyle="#3c3830",n.fillRect(p,v,m,4*l),n.fillStyle=u[7]?"#78c0ff":"#f84838",n.fillRect(p,v,m*u[5],4*l),n.fillStyle="rgba(255,255,255,0.35)",n.fillRect(p,v,m*u[5],l),n.font=`800 ${Math.round(5*l)}px 'Be Vietnam Pro', sans-serif`,n.textAlign="center",n.fillStyle="#f2efd8",n.fillText(u[7]?"PH\xC1 TH\xC1P PH\xC1O \u0110\u1EC2 T\u1EAET KHI\xCAN":"BOSS",s+a/2,v+10*l)}let f=c[nt],d=s+4*l;for(let[m,p]of[[10,gt.rapid],[11,gt.shield]]){if(!f[m])continue;let v=lt.itemIcon(p);n.drawImage(v,d,r+(u?38:24)*l,11*l,11*l),n.font=`${Math.round(4*l)}px ${as}`,n.textAlign="left",n.fillStyle="#000";let M=m===10?`x${f[m]}`:f[m];n.fillText(M,d+11*l+l*.5,r+(u?46:32)*l+l*.5),n.fillStyle="#f2efd8",n.fillText(M,d+11*l,r+(u?46:32)*l),d+=24*l}n.textAlign="center";{let m=c[nt][12]||0,p=s+a-4*l,v=r+(u?38:24)*l;n.textAlign="right",n.font=`800 ${Math.round(5*l)}px 'Be Vietnam Pro', sans-serif`,n.fillStyle="#1c140c",n.fillText(`C\u1EE9u ${m}/${Yn} \u2192 \u0111\u1EA1n+`,p+l*.6,v+5*l+l*.6),n.fillStyle="#f8e060",n.fillText(`C\u1EE9u ${m}/${Yn} \u2192 \u0111\u1EA1n+`,p,v+5*l);for(let M=0;M<Yn;M++)n.fillStyle="#1c140c",n.fillRect(p-(Yn-M)*5*l,v+7*l,4*l,3*l),n.fillStyle=M<m?"#f8e060":"rgba(255,255,255,0.25)",n.fillRect(p-(Yn-M)*5*l+l*.5,v+7.5*l,3*l,2*l);n.textAlign="center"}let y=c[nt];if(y[7]>0&&(n.fillStyle="rgba(10,12,8,0.62)",n.fillRect(s+a/2-30*l,r+o-14*l,60*l,11*l),n.fillStyle=y[7]>=ki?"#ff9a2a":"#f2efd8",n.font=`${Math.round(4.5*l)}px ${as}`,n.fillText(`POW ${y[7]}/${ki}`,s+a/2,r+o-6.5*l)),y[3]||(n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(s,r+o/2-14*l,a,24*l),n.fillStyle=y[5]>0?"#f2efd8":"#ff5a4a",n.font=y[5]>0?`${Math.round(6*l)}px ${as}`:`800 ${Math.round(8*l)}px 'Be Vietnam Pro', sans-serif`,n.fillText(y[5]>0?"RESPAWN\u2026":"H\u1EBET M\u1EA0NG",s+a/2,r+o/2+2*l)),Bn){let m=(e-Bn.t)/1e3,p=Bn.dur||2.2;m>p?Bn=null:(n.globalAlpha=Math.min(1,(p-m)*2),n.font=`${Math.round(14*l)}px ${as}`,n.fillStyle="#7a3a10",n.fillText(Bn.text,s+a/2+2*l,r+o*.42+2*l),n.fillStyle="#ffd84a",n.fillText(Bn.text,s+a/2,r+o*.42),n.font=`700 ${Math.round(6*l)}px 'Be Vietnam Pro', sans-serif`,n.fillStyle="#f2efd8",n.fillText(Bn.sub,s+a/2,r+o*.42+14*l),n.globalAlpha=1)}n.restore()}function Dx(i){let e=ce.dpr,t=In,n=Math.max(60,Math.min(90,ce.ox*.5+30));t.save();let s=n,r=ce.H-n-6,a=s,o=r,l=.3;Qe.active&&(s=Qe.ox,r=Qe.oy,a=Qe.x,o=Qe.y,l=.85);let c=a-s,h=o-r,u=Math.hypot(c,h);u>fi&&(a=s+c/u*fi,o=r+h/u*fi),t.globalAlpha=l,t.strokeStyle="#f2efd8",t.lineWidth=2*e,t.beginPath(),t.arc(s*e,r*e,fi*e,0,7),t.stroke(),t.fillStyle="rgba(255,216,74,0.85)",t.beginPath(),t.arc(a*e,o*e,18*e,0,7),t.fill();let f=ce.W-n,d=ce.H-n-6,y=Qf();t.globalAlpha=y?.95:.45,t.fillStyle=y?"rgba(255,90,60,0.9)":"rgba(255,90,60,0.35)",t.beginPath(),t.arc(f*e,d*e,38*e,0,7),t.fill(),t.strokeStyle="#ffe0d0",t.lineWidth=2.5*e,t.stroke(),t.fillStyle="#ffffff",t.font=`800 ${15*e}px 'Be Vietnam Pro', sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText("B\u1EAEN",f*e,d*e),t.restore()}function kx(i,e){return i===0?["B\xC0I 1/3 \xB7 L\xC1I XE","K\xE9o ng\xF3n tay \u1EDF N\u1EECA TR\xC1I m\xE0n h\xECnh \u0111\u1EC3 l\xE1i",`Ch\u1EA1y t\u1EDBi v\xF2ng s\xE1ng (${e+1}/3)`]:i===1?["B\xC0I 2/3 \xB7 B\u1EAEN","\u0110\u1EA1n bay TH\u1EB2NG THEO H\u01AF\u1EDANG \u0110\u1EA6U XE",`Quay \u0111\u1EA7u xe v\u1EC1 m\u1EE5c ti\xEAu, r\u1ED3i gi\u1EEF N\u1EECA PH\u1EA2I \u0111\u1EC3 b\u1EAFn (${e+1}/3)`]:i===2?["B\xC0I 3/3 \xB7 C\u1EE8U T\xD9 BINH",["B\u1EAFn s\u1EADp tr\u1EA1i giam","L\xE1i xe ch\u1EA1m v\xE0o t\xF9 binh \u0111\u1EC3 \u0111\xF3n","Ch\u1EDF t\xF9 binh v\u1EC1 b\xE3i tr\u1EF1c th\u0103ng (ch\u1EEF H)"][e]||"","C\u1EE9u \u0111\u1EE7 5 ng\u01B0\u1EDDi = +1 c\u1EA5p \u0111\u1EA1n"]:["HO\xC0N TH\xC0NH!","B\u1EA1n \u0111\xE3 s\u1EB5n s\xE0ng","V\xE0o tr\u1EADn th\u1EADt\u2026"]}function Nx(i){if(!Ve||!Ve.tu||Ve.ph)return;let[e,t,n,s]=Ve.tu,r=ce.dpr,a=In,o=ce.s,l=Ve.cam,c=(v,M)=>[(ce.ox+v*o)*r,(ce.oy+(M-l)*o)*r],h=(Math.sin(i/220)+1)/2;if(a.save(),e===0&&(a.fillStyle=`rgba(255,216,74,${.08+.08*h})`,a.fillRect(0,0,ce.W/2*r,ce.H*r)),e===1&&(a.fillStyle=`rgba(255,90,60,${.08+.08*h})`,a.fillRect(ce.W/2*r,0,ce.W/2*r,ce.H*r)),n>=0){let[v,M]=c(n,s),g=(16+h*4)*o*r;a.strokeStyle=e===1?"#ff6a4a":"#ffd84a",a.lineWidth=3*r,a.beginPath(),a.arc(v,M,g,0,7),a.stroke();let x=M-g-(8+h*8)*r;a.fillStyle=a.strokeStyle,a.beginPath(),a.moveTo(v,x+10*r),a.lineTo(v-9*r,x-4*r),a.lineTo(v+9*r,x-4*r),a.closePath(),a.fill()}if(e===1&&dt){let v=dt.a,[M,g]=c(dt.x+Math.cos(v)*14,dt.y+Math.sin(v)*14),x=120*o*r;a.setLineDash([7*r,6*r]),a.strokeStyle="rgba(255,240,150,0.9)",a.lineWidth=2.5*r,a.beginPath(),a.moveTo(M,g),a.lineTo(M+Math.cos(v)*x,g+Math.sin(v)*x),a.stroke(),a.setLineDash([]),a.fillStyle="rgba(255,240,150,0.95)",a.font=`800 ${11*r}px 'Be Vietnam Pro', sans-serif`,a.textAlign="center",a.fillText("H\u01AF\u1EDANG B\u1EAEN",M+Math.cos(v)*(x+22*r),g+Math.sin(v)*(x+22*r))}let[u,f,d]=kx(e,t),y=Math.min(ce.gw-16,500),m=ce.W/2,p=ce.oy+22*o+6;a.fillStyle="rgba(16,18,12,0.86)",a.beginPath(),a.roundRect?a.roundRect((m-y/2)*r,p*r,y*r,58*r,8*r):a.rect((m-y/2)*r,p*r,y*r,58*r),a.fill(),a.textAlign="center",a.textBaseline="middle",a.fillStyle="#a7a58c",a.font=`800 ${10*r}px 'Be Vietnam Pro', sans-serif`,a.fillText(u,m*r,(p+11)*r),a.fillStyle="#ffd84a",a.font=`800 ${15*r}px 'Be Vietnam Pro', sans-serif`,a.fillText(f,m*r,(p+28)*r,(y-16)*r),a.fillStyle="#f2efd8",a.font=`500 ${11.5*r}px 'Be Vietnam Pro', sans-serif`,a.fillText(d,m*r,(p+46)*r,(y-16)*r),a.restore()}function Fx(){let i=Ue("askLife"),e=Ue("lifePrompt");if(kt!=="play"||!Ve||Ve.ph||Ve.tu){i.hidden=!0,e.hidden=!0;return}let t=Ve.p[nt],n=Ve.p[1-nt],s=Ve.lr,r=t&&!t[3]&&t[5]<=0;i.hidden=!r,r&&(s&&s[0]===nt?(i.disabled=!0,i.textContent=`\u0110ang ch\u1EDD \u0111\u1ED3ng \u0111\u1ED9i \u0111\u1ED3ng \xFD\u2026 ${s[2]}s`):!n||n[5]<2?(i.disabled=!0,i.textContent="\u0110\u1ED3ng \u0111\u1ED9i kh\xF4ng c\xF2n m\u1EA1ng d\u01B0"):(i.disabled=!1,i.textContent="XIN 1 M\u1EA0NG T\u1EEA \u0110\u1ED2NG \u0110\u1ED8I"));let a=s&&s[1]===nt;a&&e.hidden&&Ft("pickup"),e.hidden=!a,a&&(Ue("lifeTxt").textContent=`${ui[s[0]]?.name||"\u0110\u1ED3ng \u0111\u1ED9i"} h\u1EBFt m\u1EA1ng, xin 1 m\u1EA1ng c\u1EE7a b\u1EA1n`,Ue("lifeSub").textContent=`B\u1EA1n c\xF2n ${n?Ve.p[nt][5]:0} m\u1EA1ng \xB7 t\u1EF1 t\u1EEB ch\u1ED1i sau ${s[2]}s`)}function au(i){let e=Math.min(.1,(i-Jf)/1e3);if(Jf=i,kt==="play"){Js+=e*1e3;let a=0;for(;Js>=sc&&a++<5;)Js-=sc,Ex();Js>sc*5&&(Js=0)}else Js=0;let t="";kt==="play"&&Ve&&!Ve.ph&&(t=Ve.e.some(a=>a[1]===q.boss||a[1]===q.boss2)?"boss":"stage"+Math.max(0,(Ve.sg||0)-1)),Wf(t),window.RJ_PAUSED=document.body.classList.contains("portrait")&&kt==="play";let n=Lx(i,e);Ci==="nes"&&vx(),Ue("skip").hidden=!(kt==="play"&&Ve&&Ve.tu&&!Ve.ph),Fx(),In.setTransform(1,0,0,1,0,0),In.fillStyle="#0d0e0a",In.fillRect(0,0,Wn.width,Wn.height),In.imageSmoothingEnabled=Ar();let s=0,r=0;hi>0&&(s=(Math.random()-.5)*hi,r=(Math.random()-.5)*hi,hi=Math.max(0,hi-e*20)),In.drawImage(Hn,Math.round((ce.ox+s*ce.s)*ce.dpr),Math.round((ce.oy+r*ce.s)*ce.dpr),Math.round(ce.gw*ce.dpr),Math.round(ce.gh*ce.dpr)),In.strokeStyle="#2a2e20",In.lineWidth=2*ce.dpr,In.strokeRect(ce.ox*ce.dpr,ce.oy*ce.dpr,ce.gw*ce.dpr,ce.gh*ce.dpr),n&&(Ix(n,i),Dx(i),Nx(i)),requestAnimationFrame(au)}var Ue,Wn,In,Hn,tt,xx,sc,di,_x,Ci,lt,ci,Ar,qf,Zf,ce,Qe,hs,$a,qt,fi,Qf,Xf,oc,eu,rn,kt,nt,ui,Dn,Ve,Ri,Ja,Vn,dt,sn,rc,Er,cs,hi,Yf,Tr,Bn,hc,os,Mx,Rx,rs,as,Jf,Js,ou=xn(()=>{kn();ms();mi();Oi();To();Yc();zf();Gf();Ue=i=>document.getElementById(i),Wn=Ue("game"),In=Wn.getContext("2d"),Hn=document.createElement("canvas");Hn.width=360;Hn.height=240;tt=Hn.getContext("2d");xo();xx=window.RJ_LOCAL?40:110,sc=1e3/30,di={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,e){try{localStorage.setItem(i,e)}catch{}}},_x=["snes","nes","3d","doodle"],Ci=_x.includes(di.get("rj_skin"))?di.get("rj_skin"):"snes",lt=Or,ci=1,Ar=()=>Ci==="3d"||Ci==="doodle";qf=["#000000","#fcfcfc","#bcbcbc","#7c7c7c","#a40000","#d82800","#f83800","#fca044","#f8b800","#ac7c00","#503000","#00a800","#005800","#00b800","#b8f818","#58d854","#0058f8","#3cbcfc","#0078f8","#6888fc","#f878f8","#fce0a8","#a4e4fc","#e45c10","#881400","#f0d0b0","#d8f878"].map(i=>[1,3,5].map(e=>parseInt(i.slice(e,e+2),16))),Zf=new Uint32Array(4096);for(let i=0;i<4096;i++){let e=(i>>8&15)*17,t=(i>>4&15)*17,n=(i&15)*17,s=0,r=1/0;qf.forEach((o,l)=>{let c=(o[0]-e)**2*.3+(o[1]-t)**2*.59+(o[2]-n)**2*.11;c<r&&(r=c,s=l)});let a=qf[s];Zf[i]=255<<24|a[2]<<16|a[1]<<8|a[0]}ce={dpr:1,W:0,H:0,s:1,ox:0,oy:0,gw:0,gh:0,top:0};window.addEventListener("resize",()=>{lc(),Ka()});lc();Ka();for(let i of document.querySelectorAll("[data-skin]"))i.onclick=()=>$f(i.dataset.skin);$f(Ci);try{screen.orientation&&screen.orientation.addEventListener&&screen.orientation.addEventListener("change",()=>setTimeout(()=>{lc(),Ka()},50))}catch{}Qe={id:null,ox:0,oy:0,x:0,y:0,active:!1},hs={id:null,x:0,y:0},$a=!1,qt=new Set,fi=46;Wn.addEventListener("touchstart",i=>{i.preventDefault(),Ya();for(let e of i.changedTouches)Kf(e.identifier,e.clientX,e.clientY)},{passive:!1});Wn.addEventListener("touchmove",i=>{i.preventDefault();for(let e of i.changedTouches)jf(e.identifier,e.clientX,e.clientY)},{passive:!1});Wn.addEventListener("touchend",i=>{for(let e of i.changedTouches)cc(e.identifier)});Wn.addEventListener("touchcancel",i=>{for(let e of i.changedTouches)cc(e.identifier)});Wn.addEventListener("mousedown",i=>{Ya(),Kf("m",i.clientX,i.clientY)});window.addEventListener("mousemove",i=>jf("m",i.clientX,i.clientY));window.addEventListener("mouseup",()=>cc("m"));window.addEventListener("keydown",i=>{qt.add(i.key.toLowerCase()),(i.key===" "||i.key.toLowerCase()==="j"||i.key.toLowerCase()==="k")&&($a=!0,i.preventDefault())});window.addEventListener("keyup",i=>qt.delete(i.key.toLowerCase()));window.addEventListener("blur",()=>{qt.clear(),Qe.active=!1,hs.id=null});Qf=()=>hs.id!==null||qt.has(" ")||qt.has("j")||qt.has("k");Xf=0;Ue("name").value=di.get("rj_name")||"";Ue("play").onclick=()=>{Ya(),nu()};Ue("name").addEventListener("keydown",i=>{i.key==="Enter"&&Ue("play").click()});Ue("cancel").onclick=()=>{fs({t:"cancel"}),ja(),kt="menu",$s("menu")};Ue("again").onclick=()=>nu();Ue("toMenu").onclick=()=>{ja(),kt="menu",$s("menu")};Ue("skip").onclick=i=>{i.stopPropagation(),fs({t:"skip"})};Ue("askLife").onclick=i=>{i.stopPropagation(),fs({t:"life"})};Ue("lifeYes").onclick=i=>{i.stopPropagation(),fs({t:"lifeAns",yes:1}),Ue("lifePrompt").hidden=!0};Ue("lifeNo").onclick=i=>{i.stopPropagation(),fs({t:"lifeAns",yes:0}),Ue("lifePrompt").hidden=!0};Ue("tut")&&(Ue("tut").checked=di.get("rj_tut_done")!=="1");oc=Ue("mute");ic(di.get("rj_mute")==="1");eu=()=>{oc.textContent=Sr()?"\xD7":"\u266A",oc.style.opacity=Sr()?.5:1};eu();oc.onclick=i=>{i.stopPropagation(),ic(!Sr()),di.set("rj_mute",Sr()?"1":"0"),eu()};rn=null,kt="menu",nt=0,ui=[],Dn=[],Ve=null,Ri=null,Ja=0,Vn=[],dt=null,sn={x:0,y:0},rc=!0,Er=[],cs={},hi=0,Yf=0,Tr=new Set,Bn=null,hc=-1,os=0,Mx={[gt.rapid]:"B\u1EAEN NHANH",[gt.shield]:"KHI\xCAN",[gt.life]:"+1 M\u1EA0NG",[gt.bomb]:"BOM!",[gt.wup]:"V\u0168 KH\xCD +"};Rx=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);rs=je-240;as="'Press Start 2P', monospace";Jf=performance.now(),Js=0;requestAnimationFrame(au);window.__rj={get state(){return kt},get latest(){return Ve},get you(){return nt},get pred(){return dt}}});kn();ms();mi();Oi();kn();mi();Oi();function yu(i,e,t,n,s){for(let r of i.rivers){let a=r.y,o=r.y+r.h,l=t>o-2&&s<o,c=t<a+2&&s>a;if(!l&&!c)continue;let h=null,u=1/0;for(let y of r.bridges){let m=y.x+y.w/2,p=Math.abs(m-e)+Math.abs(m-n)*.5;p<u&&(u=p,h=y)}let f=h.x+h.w/2,d=Math.abs(e-f)<h.w/2-9;return l?d?[f,a-14]:[f,o+16]:d?[f,o+14]:[f,a-16]}return[n,s]}function Rc(i,e){let t=e.bot,n=i.camY,s=i.players.find(g=>g!==e&&g.alive),r=e.x,a=e.y,o=1,l=null,c=null;if(e.carry>0){let g=1/0;for(let x of i.L.helipads){if(x.y<n-30||x.y>n+240+10)continue;let b=Math.abs(x.y-e.y)+Math.abs(x.x-e.x);b<g&&(g=b,c=x)}c&&(e.carry>=3||g<220)?(r=c.x,a=c.y):c=null}if(!c&&e.carry<ki){let g=null,x=1/0;for(let b of i.pows.values()){if(b.y<n||b.y>n+240)continue;let E=Math.hypot(b.x-e.x,b.y-e.y)-(b.flash?40:0);E<x&&(x=E,g=b)}g&&(r=g.x,a=g.y,c=g)}if(i.tut&&s&&(c=s,r=Math.max(16,Math.min(344,s.x+(e.x<s.x?-50:50))),a=s.y+20),!c){let g=null,x=150;for(let b of i.items.values()){if(b.y<n+10||b.y>n+240-6)continue;let E=Math.hypot(b.x-e.x,b.y-e.y);E<x&&(x=E,g=b)}g&&(r=g.x,a=g.y,c=g)}if(!c){let g=null,x=1/0;t.ignore=t.ignore||new Map;for(let b of i.enemies.values()){if(b.y<n-10||b.y>n+240||i.shielded(b)||(t.ignore.get(b.id)||0)>i.time)continue;let E=Math.hypot(b.x-e.x,b.y-e.y)+(gs.has(b.type)?0:50);E<x&&(x=E,g=b)}if(g&&(t.aimId!==g.id?(t.aimId=g.id,t.aimT=i.time,t.aimHp=g.hp):g.hp<t.aimHp?(t.aimHp=g.hp,t.aimT=i.time):i.time-t.aimT>5&&(t.ignore.set(g.id,i.time+8),t.aimId=null,g=null)),g){l=g;let b=e.slot===0?-1:1,E=g.type===q.boss||g.type===q.boss2?150:g.type===q.soldier?0:100;r=Math.max(16,Math.min(344,g.x+(g.type===q.soldier?0:b*12))),a=g.y+E;for(let R of i.L.rivers){let _=R.y+R.h+14;g.y<R.y&&e.y>R.y+R.h-2&&a>R.y-20&&_-g.y<180&&(a=Math.max(a,_),r=Math.max(16,Math.min(344,g.x)))}s&&!s.isBot&&(a=Math.max(a,Math.min(s.y-10,g.y+E+40)))}else if(s&&!s.isBot){let b=e.x<s.x?-1:1;r=Math.max(16,Math.min(344,s.x+b*45)),(r<20||r>340)&&(r=s.x-b*45),a=s.y+10,o=Math.hypot(r-e.x,a-e.y)>25?1:.4}else r=360/2+(e.slot===0?-25:25),a=e.y-80}a=Math.max(n+12,Math.min(n+240-12,a));let[h,u]=yu(i.L,e.x,e.y,r,a),f=h!==r||u!==a;r=h,a=u;let d=r-e.x,y=a-e.y,m=Math.hypot(d,y);if(m<5?(d=0,y=0):(d=d/m*o,y=y/m*o),l&&!f&&m<28&&Math.hypot(l.x-e.x,l.y-e.y)<190){let g=l.x-e.x,x=l.y-e.y,b=Math.hypot(g,x)||1;d=g/b*.2,y=x/b*.2}let p=0,v=0;for(let g of i.bullets.values()){if(!g.enemy)continue;let x=e.x-g.x,b=e.y-g.y,E=Math.hypot(x,b);if(E>70)continue;let R=Math.hypot(g.vx,g.vy)||1,_=g.vx/R,S=g.vy/R;if(x*_+b*S<-4)continue;let F=x*-S+b*_;if(Math.abs(F)>16)continue;let U=(F>=0?1:-1)*(1.6-Math.abs(F)/16)*(1-E/90);p+=-S*U,v+=_*U}for(let g of i.enemies.values()){if(!gs.has(g.type)||g.type===q.prison||g.type===q.boss||g.type===q.boss2)continue;let x=e.x-g.x,b=e.y-g.y,E=Math.hypot(x,b);E<40&&E>0&&(p+=x/E*.7,v+=b/E*.7)}if(d+=p*1.6,y+=v*1.6,t.t+=Ne,t.t>.6){if((t.lx===void 0?99:Math.hypot(e.x-t.lx,e.y-t.ly))<4&&Math.abs(d)+Math.abs(y)>.3){t.jitter=.8;let x=i.R()<.5?-1:1;t.jx=-y*x+(i.R()-.5),t.jy=d*x+.6}t.lx=e.x,t.ly=e.y,t.t=0}t.jitter>0&&(t.jitter-=Ne,d=t.jx,y=t.jy);let M=Math.hypot(d,y);if(M>1&&(d/=M,y/=M,M=1),M>.2){let g=i.L.blockers.concat(i.dynBlockers()),x=(R,_)=>{for(let S of[5,11]){let C=e.x+R*S,F=e.y+_*S;if(C<_n||C>360-_n||Nn(C,F,_n,g))return!1}return!0},b=d/M,E=y/M;if(!x(b,E)){let R=Math.atan2(E,b),_=(t.side||1)>0?[1,-1]:[-1,1];e:for(let S of[.5,1,1.5,2.1,2.7])for(let C of _){let F=R+C*S;if(x(Math.cos(F),Math.sin(F))){d=Math.cos(F)*M,y=Math.sin(F)*M,t.side=C,t.jitter=0;break e}}}}return[d,y]}var xu=1,fo=i=>typeof process<"u"&&process.env?process.env[i]:void 0,Nr=class{constructor(e,{send:t=()=>{},onEnd:n=()=>{},seed:s=Date.now(),tutorial:r=!1,snapEvery:a=mc}={}){this.snapEvery=a,this.id=xu++,this.send=t,this.onEnd=n,this.R=ds(s),this.tick=0,this.time=0,this.nid=1,this.events=[],this.ended=!1,this.players=e.map((h,u)=>({slot:u,name:h.name||`P${u+1}`,isBot:!!h.isBot,x:0,y:0,a:-Math.PI/2,alive:!0,lives:yc,invulnUntil:0,respawnAt:0,weapon:1,carry:0,score:0,rescued:0,kills:0,rate:0,shieldUntil:0,rescueProg:0,mgCd:0,sCd:0,lCd:0,inputQ:[],last:[0,0],ack:0,bot:h.isBot?{t:0,jitter:0}:null}));let o=fo("RJ_STAGE");this.loadStage(o!==void 0&&o!==""?Math.max(0,Math.min(us-1,+o)):r?0:1);let l=+fo("RJ_LIVES");l>0&&this.players.forEach(h=>{h.isBot||(h.lives=l)});let c=+fo("RJ_START_Y");if(c>240&&c<je)for(this.camY=c-240+60,this.players.forEach(h=>{h.y=c,h.weapon=Math.max(h.weapon,3)});this.nextSpawn<this.spawns.length&&this.spawns[this.nextSpawn].y>c;)this.nextSpawn++}loadStage(e){this.stage=e,this.L=kr[e],this.D=Lr[e],this.solid=this.L.blockers.filter(t=>t.kind==="sandbag"||t.kind==="rock"),this.spawns=[...this.L.spawns].sort((t,n)=>n.y-t.y),this.nextSpawn=0,this.camY=je-240,this.enemies=new Map,this.bullets=new Map,this.pows=new Map,this.items=new Map,this.bossDeadAt=0,this.loseAt=0,this.phase="play",this.clearT=0,this.players.forEach((t,n)=>{e>1&&(t.lives=Math.min(Ir,Math.max(1,t.lives+1))),t.x=360/2+(n===0?-25:25),t.y=je-50,t.a=-Math.PI/2,t.alive=!0,t.respawnAt=0,t.carry=0,t.invulnUntil=this.time+so/1e3,t.inputQ=[],t.mgCd=.3}),this.tut=this.L.tutorial?{step:0,sub:0,moved:0,t:0,ids:[],base:0,mark:null}:null,this.tut&&this.players.forEach(t=>{t.isBot&&(t.alive=!1,t.respawnAt=0)}),this.events.push(["g",e])}requestLife(e){let t=this.players[e],n=this.players[1-e];if(!(!t||!n||t.alive||t.lives>0||this.lifeReq||this.ended||this.tut)){if(n.lives<2){this.events.push(["A",e,n.slot,2]);return}this.lifeReq={from:e,to:n.slot,t:this.time},this.events.push(["L",e])}}answerLife(e,t){let n=this.lifeReq;if(!n||n.to!==e)return;this.lifeReq=null;let s=this.players[n.from],r=this.players[n.to];t&&r.lives>=2&&!s.alive&&s.lives<=0?(r.lives--,s.lives=1,s.respawnAt=this.time+.4,this.loseAt=0,this.events.push(["A",n.from,n.to,1])):this.events.push(["A",n.from,n.to,0])}updateLifeRequest(){let e=this.lifeReq;if(!e)return;if(this.players[e.to].isBot&&this.time-e.t>1.2)return this.answerLife(e.to,!0);if(this.time-e.t>10)return this.answerLife(e.to,!1)}skipTutorial(){!this.tut||this.phase==="clear"||(this.phase="clear",this.clearT=1.2,this.events.push(["c",0,0]))}updateTutorial(){let e=this.tut,t=this.players.filter(a=>!a.isBot&&a.alive);if(!t.length)return;e.t+=Ne;let n=this.camY,s=()=>{e.step++,e.sub=0,e.t=0,e.ids=[],this.events.push(["T",e.step])},r=()=>{e.sub++,this.events.push(["T",e.step])};switch(e.step){case 0:{let a=[[360*.2,n+100],[360*.8,n+100],[360*.5,n+160]],[o,l]=a[e.sub];e.mark=[o,l],t.some(c=>Math.hypot(c.x-o,c.y-l)<16)&&(e.sub<a.length-1?r():s());break}case 1:{let a=[[360*.5,n+88],[360*.08,n+165],[360*.92,n+150]];if(!e.ids.length||!this.enemies.has(e.ids[0])){if(e.ids.length)if(e.sub<a.length-1)r();else{s();break}let[l,c]=a[e.sub],h=this.addEnemy(q.turret,l,c);h.hp=h.maxHp=4,e.ids=[h.id]}let o=this.enemies.get(e.ids[0]);e.mark=o?[o.x,o.y]:null;break}case 2:{if(e.sub===0){if(!e.ids.length){let o=this.addEnemy(q.prison,360*.35,n+95,{pows:3,flash:0});e.ids=[o.id]}let a=this.enemies.get(e.ids[0]);e.mark=a?[a.x,a.y]:null,a||r()}else if(e.sub===1){let a=[...this.pows.values()][0];e.mark=a?[a.x,a.y]:null,this.pows.size||(e.base=0,r())}else{let a=this.L.helipads[0];e.mark=[a.x,a.y],t.every(o=>o.carry===0)&&s()}break}case 3:e.mark=null,e.t>2.5&&this.skipTutorial();break}}pushInput(e,t,n,s,r){let a=this.players[e];!a||a.isBot||(a.inputQ.length>20&&a.inputQ.splice(0,a.inputQ.length-10),a.inputQ.push({seq:t,d:js(n,s),f:!!r}))}setBot(e){let t=this.players[e];t&&(t.isBot=!0,t.bot={t:0,jitter:0},t.inputQ=[],t.name=t.name.replace(/ \(bot\)$/,"")+" (bot)",this.events.push(["b",e]))}dynBlockers(e){let t=[];for(let n of this.enemies.values()){if(n===e)continue;let s=Qs(n.type,n.x,n.y);s&&t.push(s)}return t}inView(e,t,n=0){return t>this.camY-n&&t<this.camY+240+n&&e>-n&&e<360+n}alivePlayers(){return this.players.filter(e=>e.alive)}nearestPlayer(e,t){let n=null,s=1/0;for(let r of this.players)if(r.alive){let a=pi(e,t,r.x,r.y);a<s&&(s=a,n=r)}return n}shielded(e){return Fi(e.type)&&e.turrets&&e.turrets.some(t=>this.enemies.has(t))}ebullet(e,t,n,s,r,a=Se.ebullet,o=0,l=!0){let c=l?(this.R()-.5)*2*this.D.aim:0,h=Math.atan2(s-t,n-e)+o+c,u=r*this.D.bspd,f=this.nid++;this.bullets.set(f,{id:f,kind:a,x:e,y:t,vx:Math.cos(h)*u,vy:Math.sin(h)*u,life:4.5,enemy:!0})}step(){if(this.ended)return;if(this.tick++,this.time+=Ne,this.phase==="clear"){this.clearT-=Ne,this.clearT<=0&&this.loadStage(this.stage+1),this.tick%this.snapEvery===0&&this.broadcast();return}this.updateCamera(),this.activateSpawns();let e=this.L.blockers.concat(this.dynBlockers());for(let t of this.players)this.updatePlayer(t,e);for(let t of[...this.enemies.values()])this.updateEnemy(t);this.updateBullets(),this.updatePows(),this.updateItems(),this.tut&&this.updateTutorial(),this.updateLifeRequest(),this.cleanup(),this.checkEnd(),this.tick%this.snapEvery===0&&this.broadcast()}updateCamera(){let e=this.alivePlayers();if(!e.length)return;let t=Math.min(...e.map(o=>o.y)),n=Math.max(...e.map(o=>o.y)),s=Math.max(0,Math.min(1,(t-300)/300)),r=t-240*(gc*s+(1-s)),a=n+_n+6-240;this.camY=Math.max(this.L.minCam||0,Math.min(this.camY,Math.max(r,a)))}activateSpawns(){for(;this.nextSpawn<this.spawns.length;){let e=this.spawns[this.nextSpawn];if(!(e.type==="wave"?this.camY<=e.y:e.y>=this.camY-40))break;if(this.nextSpawn++,e.type==="wave"){let n=Math.max(1,Math.round(e.n*this.D.wave));for(let s=0;s<n;s++){let r,a;e.side==="left"?(r=-6,a=this.camY+30+this.R()*170):e.side==="right"?(r=366,a=this.camY+30+this.R()*170):(r=20+this.R()*320,a=this.camY-8-this.R()*30),this.addEnemy(q.soldier,r,a)}}else if(e.type==="boss"){let n=this.addEnemy(q.boss,e.x,e.y);n.turrets=e.turrets.map(s=>{let r=this.addEnemy(q.bossTurret,s,e.y+56);return r.parent=n.id,r.id})}else if(e.type==="boss2"){let n=this.addEnemy(q.boss2,e.x,e.y);n.dir=1,n.turrets=[-34,34].map(s=>{let r=this.addEnemy(q.bossTurret,e.x+s,e.y-4);return r.parent=n.id,r.ox=s,r.oy=-4,r.id})}else this.addEnemy(q[e.type],e.x,e.y,e)}}addEnemy(e,t,n,s={}){let r=this.nid++,a={[q.soldier]:1,[q.turret]:6,[q.tank]:10,[q.prison]:4,[q.bossTurret]:12}[e],o=Fi(e)?this.D.bossHp:e===q.soldier||e===q.prison?a:Math.ceil(a*this.D.hp),l={id:r,type:e,x:t,y:n,hp:o,maxHp:o,a:Math.PI/2,cd:(1+this.R()*1.5)*this.D.cd,t:0,born:this.time,vx:0,vy:0,pows:s.pows||0,flash:s.flash||0,patrol:s.patrol||null,dir:this.R()<.5?-1:1,spawnCd:4};return this.enemies.set(r,l),l}updatePlayer(e,t){if(!e.alive){e.lives>0&&e.respawnAt&&this.time>=e.respawnAt&&this.respawn(e),e.inputQ.length=0;return}let n=e.x,s=e.y;if(e.isBot)e.last=js(...Rc(this,e)),Ni(e,e.last[0],e.last[1],this.camY,t),e.firing=!this.tut&&[...this.enemies.values()].some(r=>this.inView(r.x,r.y,-4)&&!this.shielded(r));else{let r=e.inputQ.length>4?2:1,a=!1;for(;r-- >0&&e.inputQ.length;){let o=e.inputQ.shift();e.last=o.d,e.ack=o.seq,e.firing=o.f,a=!0,Ni(e,o.d[0],o.d[1],this.camY,t)}a||Ni(e,e.last[0],e.last[1],this.camY,t),this.tut&&(this.tut.moved+=Math.hypot(e.x-n,e.y-s))}e.y=Math.min(e.y,this.camY+240-_n-2);for(let r of this.enemies.values())r.type===q.soldier&&pi(e.x,e.y,r.x,r.y)<121&&this.killEnemy(r,e,!0);if(this.fire(e),e.carry>0)for(let r=0;r<this.L.helipads.length;r++){let a=this.L.helipads[r];if(pi(e.x,e.y,a.x,a.y)<576){let o=e.carry;for(e.score+=o*oo.pow,e.rescued+=o,e.carry=0,e.rescueProg+=o;e.rescueProg>=Yn;)e.rescueProg-=Yn,e.weapon<Rr?(e.weapon++,this.events.push(["u",e.slot,e.weapon])):e.score+=500;this.events.push(["d",r,o,e.slot])}}}fire(e){if(e.mgCd-=Ne,e.sCd-=Ne,e.lCd-=Ne,!e.firing)return;let t=_c[e.weapon],n=Math.cos(e.a),s=Math.sin(e.a),r=-s,a=n;if(e.mgCd<=0){e.mgCd=t.rate*Pr**e.rate;for(let[o,l]of t.shots){let c=e.a+o,h=this.nid++;this.bullets.set(h,{id:h,kind:t.big?Se.big:Se.mg,dmg:t.dmg,owner:e.slot,x:e.x+n*13+r*l,y:e.y+s*13+a*l,vx:Math.cos(c)*Cr,vy:Math.sin(c)*Cr,life:vc/Cr})}}if(t.shell&&e.sCd<=0){e.sCd=t.shell.cd*Pr**e.rate;let o=this.nid++;this.bullets.set(o,{id:o,kind:Se.missile,x:e.x+n*8,y:e.y+s*8,vx:n*220,vy:s*220,life:.95,blast:t.shell.blast,dmg:t.shell.dmg,owner:e.slot})}if(t.laser&&e.lCd<=0){e.lCd=t.laser.cd*Pr**e.rate;let o=this.nid++;this.bullets.set(o,{id:o,kind:Se.laser,x:e.x+n*10,y:e.y+s*10,vx:n*420,vy:s*420,life:.6,dmg:t.laser.dmg,owner:e.slot,hitSet:new Set})}}pickTarget(e,t,n){let s=null,r=1/0;for(let a of this.enemies.values()){if(this.shielded(a)||!this.inView(a.x,a.y,4))continue;let o=er(e.x,e.y,a.type,a.x,a.y);if(o>t)continue;let l=gs.has(a.type),c=o;n?l&&(c+=1e3):l||(c+=60),c<r&&(r=c,s=a)}return s}respawn(e){let t=this.players.find(l=>l!==e&&l.alive),n=this.L.blockers.concat(this.dynBlockers()),s=t?t.x:360/2,r=t?Math.min(t.y+30,this.camY+240-20):this.camY+240-40,a=[[0,0],[-30,0],[30,0],[0,-30],[-50,-20],[50,-20],[-80,0],[80,0],[0,-60],[-90,-50],[90,-50]],o=[360/2,this.camY+240-40];for(let[l,c]of a){let h=Math.max(12,Math.min(348,s+l)),u=Math.max(this.camY+20,Math.min(this.camY+240-12,r+c));if(!Nn(h,u,_n+2,n)){o=[h,u];break}}e.x=o[0],e.y=o[1],e.a=-Math.PI/2,e.alive=!0,e.invulnUntil=this.time+so/1e3,e.respawnAt=0,e.mgCd=.3,this.events.push(["r",e.slot])}killPlayer(e){if(!(!e.alive||this.time<e.invulnUntil)){if(this.time<e.shieldUntil){this.events.push(["h",Math.round(e.x),Math.round(e.y)]);return}e.alive=!1,e.lives--,e.carry=0,e.weapon=1,e.rate=0,e.shieldUntil=0,e.respawnAt=e.lives>0?this.time+xc/1e3:0,this.events.push(["x",Math.round(e.x),Math.round(e.y),2],["k",e.slot])}}updateEnemy(e){e.t+=Ne;let t=this.nearestPlayer(e.x,e.y),n=this.inView(e.x,e.y,-2),s=this.D;switch(e.type){case q.soldier:{if(e.cd-=Ne,e.stopT>0){e.stopT-=Ne;break}if(t&&(!e.dirT||e.dirT<=0)){let l=Math.atan2(t.y-e.y,t.x-e.x)+(this.R()-.5)*1.4,c=28*s.soldierSpd;e.vx=Math.cos(l)*c,e.vy=Math.sin(l)*c,e.dirT=.8+this.R(),e.a=l}e.dirT-=Ne;let r=this.L.blockers,a=e.x+e.vx*Ne,o=e.y+e.vy*Ne;Nn(a,e.y,4,r)?e.dirT=0:e.x=a,Nn(e.x,o,4,r)?e.dirT=0:e.y=o,t&&n&&e.cd<=0&&this.time-e.born>1&&(this.ebullet(e.x,e.y,t.x,t.y,95),e.cd=(1.8+this.R()*1.8)*s.cd,e.stopT=.4);break}case q.turret:case q.bossTurret:{if(e.parent&&e.ox!==void 0){let o=this.enemies.get(e.parent);o&&(e.x=o.x+e.ox,e.y=o.y+e.oy)}if(!t)break;let a=(Math.atan2(t.y-e.y,t.x-e.x)-e.a+Math.PI*3)%(Math.PI*2)-Math.PI;if(e.a+=Math.max(-2.2*Ne,Math.min(2.2*Ne,a)),e.cd-=Ne,n&&e.cd<=0&&Math.abs(a)<.3){let o=e.x+Math.cos(e.a)*10,l=e.y+Math.sin(e.a)*10;this.ebullet(o,l,o+Math.cos(e.a),l+Math.sin(e.a),100,Se.ebullet,0,!1),e.cd=(e.type===q.bossTurret?1.5+this.R()*.6:1.9+this.R()*.8)*s.cd,this.stage===3&&this.R()<.2&&(e.cd=.3)}break}case q.tank:{if(e.patrol&&n){let r=e.x+e.dir*18*Ne,a=Qs(q.tank,r,e.y),o=this.players.some(l=>l.alive&&Math.abs(l.x-r)<18&&Math.abs(l.y-e.y)<19);r<e.patrol[0]||r>e.patrol[1]||o||this.L.blockers.some(l=>a.x<l.x+l.w&&a.x+a.w>l.x&&a.y<l.y+l.h&&a.y+a.h>l.y)?e.dir*=-1:e.x=r}if(!t)break;e.a=Math.atan2(t.y-e.y,t.x-e.x),e.cd-=Ne,n&&e.cd<=0&&(this.ebullet(e.x+Math.cos(e.a)*12,e.y+Math.sin(e.a)*12,t.x,t.y,80,Se.eshell),this.stage===3&&this.ebullet(e.x,e.y,t.x,t.y,80,Se.eshell,.25),e.cd=(2.2+this.R())*s.cd);break}case q.boss:{if(!n&&this.camY>40)break;let r=this.shielded(e);if(e.cd-=Ne,e.spawnCd-=Ne,t&&e.cd<=0){let a=(r?3:7)+(this.stage===3?2:0);for(let o=0;o<a;o++)this.ebullet(e.x,e.y+40,t.x,t.y,85,Se.eshell,(o-(a-1)/2)*.22,!1);e.cd=(r?3.2:2.2)*s.cd}e.spawnCd<=0&&(this.addEnemy(q.soldier,e.x-20+this.R()*40,e.y+50),e.spawnCd=(r?5:3.5)*s.cd);break}case q.boss2:{if(!n&&this.camY>40)break;e.x+=e.dir*22*Ne;let r=360/2-75,a=360/2+75;(e.x<r||e.x>a)&&(e.dir*=-1,e.x=Math.max(r,Math.min(a,e.x)));let o=this.shielded(e);if(e.cd-=Ne,e.spawnCd-=Ne,t&&e.cd<=0)if(o){for(let l=-1;l<=1;l++)this.ebullet(e.x,e.y+28,t.x,t.y,85,Se.eshell,l*.35,!1);e.cd=3.2*s.cd}else{for(let l=-1;l<=1;l++)this.ebullet(e.x,e.y+28,t.x,t.y,85,Se.eshell,l*.3,!1);e.burst=2,e.cd=2.6*s.cd}e.burst>0&&t&&this.tick%6===0&&(e.burst--,this.ebullet(e.x,e.y+20,t.x,t.y,100)),e.spawnCd<=0&&(this.addEnemy(q.soldier,e.x,e.y+36),e.spawnCd=4.5*s.cd);break}}}damage(e,t,n){if(this.shielded(e)){this.events.push(["h",Math.round(e.x),Math.round(e.y+20)]);return}e.hp-=t,e.hit=this.tick,e.hp<=0&&this.killEnemy(e,n)}killEnemy(e,t,n=!1){if(!this.enemies.has(e.id))return;this.enemies.delete(e.id),t&&(t.score+=oo[Ec[e.type]]||0,e.type!==q.prison&&t.kills++);let s=e.type===q.soldier?0:Fi(e.type)?3:1;if(this.events.push(["x",Math.round(e.x),Math.round(e.y),s]),n&&this.events.push(["s",Math.round(e.x),Math.round(e.y)]),e.type===q.prison)for(let r=0;r<e.pows;r++){let a=this.nid++,o=r/e.pows*Math.PI*2;this.pows.set(a,{id:a,x:e.x+Math.cos(o)*6,y:e.y+16+Math.sin(o)*4,flash:r<e.flash,wander:o,t:0})}else Fi(e.type)||this.maybeDrop(e);if(Fi(e.type)){this.bossDeadAt=this.time;for(let r of this.enemies.values())this.events.push(["x",Math.round(r.x),Math.round(r.y),1]);this.enemies.clear();for(let r of this.bullets.values())r.enemy&&this.bullets.delete(r.id)}}maybeDrop(e){let t=({[q.soldier]:.04,[q.turret]:.3,[q.tank]:.4,[q.bossTurret]:.5}[e.type]||0)*this.D.drop;if(this.R()>=t)return;let n=this.players.some(l=>l.lives<Ir),s=[[gt.rapid,26],[gt.shield,18],[gt.bomb,16],[gt.wup,22],[gt.life,n?10:0]],r=this.R()*s.reduce((l,c)=>l+c[1],0),a=gt.rapid;for(let[l,c]of s)if((r-=c)<0){a=l;break}let o=this.nid++;this.items.set(o,{id:o,type:a,x:Math.max(10,Math.min(350,e.x)),y:e.y,t:0})}updateItems(){for(let e of[...this.items.values()]){if(e.t+=Ne,e.t>ao){this.items.delete(e.id);continue}for(let t of this.players)if(!(!t.alive||pi(t.x,t.y,e.x,e.y)>169)){this.items.delete(e.id),this.applyItem(t,e.type);break}}}applyItem(e,t){switch(t){case gt.rapid:e.rate<bc?e.rate++:e.score+=500;break;case gt.shield:e.shieldUntil=this.time+Mc;break;case gt.life:e.lives=Math.min(Ir,e.lives+1);break;case gt.wup:e.weapon<Rr?(e.weapon++,this.events.push(["u",e.slot,e.weapon])):e.score+=500;break;case gt.bomb:{for(let n of this.bullets.values())n.enemy&&this.inView(n.x,n.y,10)&&this.bullets.delete(n.id);for(let n of[...this.enemies.values()])this.inView(n.x,n.y,6)&&n.type!==q.prison&&this.damage(n,6,e);this.events.push(["B",e.slot]);break}}this.events.push(["i",e.slot,t])}explode(e,t,n,s,r=3){this.events.push(["x",Math.round(e),Math.round(t),n>24?1:0]);for(let a of[...this.enemies.values()])er(e,t,a.type,a.x,a.y)<=n&&this.damage(a,r,s)}homingTarget(e){let t=null,n=4e4;for(let s of this.enemies.values()){if(this.shielded(s)||!this.inView(s.x,s.y,4))continue;let r=pi(e.x,e.y,s.x,s.y)*(gs.has(s.type)?.6:1);r<n&&(n=r,t=s)}return t}updateBullets(){for(let e of[...this.bullets.values()]){if(e.life-=Ne,e.kind===Se.grenade){e.t+=Ne;let s=Math.min(1,e.t/e.dur);e.x=e.sx+(e.tx-e.sx)*s,e.y=e.sy+(e.ty-e.sy)*s,e.z=Math.sin(s*Math.PI)*18,s>=1&&(this.bullets.delete(e.id),this.explode(e.x,e.y,e.blast,this.players[e.owner]));continue}if(e.kind===Se.homing){let s=this.homingTarget(e);if(s){let r=Math.atan2(e.vy,e.vx),o=(Math.atan2(s.y-e.y,s.x-e.x)-r+Math.PI*3)%(Math.PI*2)-Math.PI,l=r+Math.max(-6*Ne,Math.min(6*Ne,o)),c=Math.hypot(e.vx,e.vy);e.vx=Math.cos(l)*c,e.vy=Math.sin(l)*c}}e.x+=e.vx*Ne,e.y+=e.vy*Ne;let t=e.life<=0||!this.inView(e.x,e.y,20),n=e.kind===Se.missile||e.kind===Se.homing;if(e.kind===Se.laser){if(!t)for(let s of[...this.enemies.values()])e.hitSet.has(s.id)||er(e.x,e.y,s.type,s.x,s.y)>4||(e.hitSet.add(s.id),this.events.push(["h",Math.round(e.x),Math.round(e.y)]),this.damage(s,e.dmg||3,this.players[e.owner]));t&&this.bullets.delete(e.id);continue}if(!t&&this.solid.some(s=>wc(e.x,e.y,s))&&(t=!0,n?this.explode(e.x,e.y,e.blast,this.players[e.owner],e.dmg):this.events.push(["h",Math.round(e.x),Math.round(e.y)])),!t&&e.enemy){for(let s of this.players)if(s.alive&&pi(e.x,e.y,s.x,s.y)<(_n+(e.kind===Se.eshell?3:1))**2){t=!0,this.killPlayer(s);break}}else if(!t){for(let s of this.enemies.values())if(!this.shielded(s)&&er(e.x,e.y,s.type,s.x,s.y)<=1){t=!0;let r=this.players[e.owner];n?this.explode(e.x,e.y,e.blast,r,e.dmg):(s.type!==q.soldier&&this.events.push(["h",Math.round(e.x),Math.round(e.y)]),this.damage(s,e.dmg||1,r));break}}t&&this.bullets.delete(e.id)}}updatePows(){for(let e of[...this.pows.values()]){e.t+=Ne;let t=null,n=19600;for(let l of this.players){if(!l.alive||l.carry>=ki)continue;let c=pi(e.x,e.y,l.x,l.y);c<n&&(n=c,t=l)}let s,r;if(t&&e.t>.6){let l=Math.sqrt(n)||1;if(s=(t.x-e.x)/l*34,r=(t.y-e.y)/l*34,l<11){t.carry++,this.pows.delete(e.id),this.events.push(["p",t.slot]),e.flash&&t.weapon<Rr?(t.weapon++,this.events.push(["u",t.slot,t.weapon])):e.flash&&(t.score+=500);continue}}else e.wander+=(this.R()-.5)*.6,s=Math.cos(e.wander)*10,r=Math.sin(e.wander)*10;let a=e.x+s*Ne,o=e.y+r*Ne;Nn(a,e.y,3,this.L.blockers)||(e.x=Math.max(4,Math.min(356,a))),Nn(e.x,o,3,this.L.blockers)||(e.y=o)}}cleanup(){let e=this.camY+240+70;for(let t of this.enemies.values())t.y>e&&!Fi(t.type)&&!this.tut&&this.enemies.delete(t.id);for(let t of this.pows.values())t.y>e&&this.pows.delete(t.id);for(let t of this.items.values())t.y>e&&this.items.delete(t.id)}checkEnd(){if(this.bossDeadAt&&this.time-this.bossDeadAt>3){if(this.stage<us-1){let e=2e3*(this.stage+1);this.players.forEach(t=>{(t.lives>0||t.alive)&&(t.score+=e)}),this.phase="clear",this.clearT=4,this.bossDeadAt=0,this.events.push(["c",this.stage,e]);return}return this.finish(!0)}if(this.players.every(e=>!e.alive&&e.lives<=0)&&!this.lifeReq&&(this.loseAt||(this.loseAt=this.time),this.time-this.loseAt>2))return this.finish(!1)}progress(){return Math.round((1-this.camY/(je-240))*100)}finish(e){if(this.ended)return;this.broadcast(),this.ended=!0;let t={t:"end",win:e,time:Math.round(this.time),stage:this.stage,stages:us-1,progress:e?100:this.progress(),players:this.players.map(n=>({name:n.name,bot:n.isBot,score:n.score,rescued:n.rescued,kills:n.kills}))};this.players.forEach((n,s)=>this.send(s,t)),this.onEnd(this,t)}startMsg(e){return{t:"start",you:e,room:this.id,stage:this.stage,players:this.players.map(t=>({name:t.name,bot:t.isBot}))}}snapshot(){let e=n=>Math.round(n*10)/10,t=n=>Math.round(n*100)/100;return{t:"s",k:this.tick,cam:e(this.camY),sg:this.stage,ph:this.phase==="clear"?1:0,lr:this.lifeReq?[this.lifeReq.from,this.lifeReq.to,Math.max(0,Math.ceil(10-(this.time-this.lifeReq.t)))]:null,tu:this.tut?[this.tut.step,this.tut.sub,...this.tut.mark?this.tut.mark.map(n=>Math.round(n)):[-1,-1]]:null,ack:this.players.map(n=>n.ack),p:this.players.map(n=>[e(n.x),e(n.y),t(n.a),n.alive?1:0,this.time<n.invulnUntil?1:0,n.lives,n.weapon,n.carry,n.score,n.isBot?1:0,n.rate,Math.max(0,Math.ceil(n.shieldUntil-this.time)),n.rescueProg]),e:[...this.enemies.values()].map(n=>[n.id,n.type,e(n.x),e(n.y),t(n.a),t(n.hp/n.maxHp),n.hit&&this.tick-n.hit<4?1:0,this.shielded(n)?1:0]),b:[...this.bullets.values()].map(n=>[n.id,n.kind,e(n.x),e(n.y),e(n.z||0),n.vx!==void 0?t(Math.atan2(n.vy,n.vx)):0]),w:[...this.pows.values()].map(n=>[n.id,e(n.x),e(n.y),n.flash?1:0]),i:[...this.items.values()].map(n=>[n.id,n.type,e(n.x),e(n.y),n.t>ao-3?1:0]),ev:this.events}}broadcast(){let e=this.snapshot();this.events=[];let t=JSON.stringify(e);this.players.forEach((n,s)=>{n.isBot||this.send(s,t)})}};kn();var Zs=new URLSearchParams(location.search);(Zs.get("start")||Zs.get("stage")||Zs.get("lives"))&&typeof process>"u"&&(window.process={env:{RJ_START_Y:Zs.get("start")||"",RJ_STAGE:Zs.get("stage")||"",RJ_LIVES:Zs.get("lives")||""}});window.RJ_LOCAL=()=>{let i={readyState:0,onopen:null,onmessage:null,onclose:null,onerror:null},e=null,t=null,n=r=>i.onmessage&&i.onmessage({data:typeof r=="string"?r:JSON.stringify(r)}),s=()=>{clearInterval(t),t=null};return i.send=r=>{let a=JSON.parse(r);if(a.t==="join"){e=new Nr([{name:a.name},{name:"BOT",isBot:!0}],{seed:Date.now(),tutorial:!!a.tut,snapEvery:1,send:(h,u)=>{h===0&&n(u)},onEnd:s}),n(e.startMsg(0));let o=1e3/30,l=0,c=performance.now();t=setInterval(()=>{let h=performance.now();if(l+=Math.min(250,h-c),c=h,window.RJ_PAUSED){l=0;return}for(;l>=o&&e&&!e.ended;)l-=o,e.step()},5)}else a.t==="i"&&e?e.pushInput(0,a.s|0,a.x,a.y,a.f):a.t==="skip"&&e?e.skipTutorial():a.t==="life"&&e?e.requestLife(0):a.t==="lifeAns"&&e&&e.answerLife(0,!!a.yes)},i.close=()=>{s(),e=null,i.readyState=3},setTimeout(()=>{i.readyState=1,i.onopen&&i.onopen()},0),i};var lu=document.querySelector("#menu .sub");lu&&(lu.textContent="B\u1EA3n offline \xB7 ch\u01A1i c\xF9ng BOT");Promise.resolve().then(()=>ou());})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
