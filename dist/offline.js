(()=>{var Pu=Object.defineProperty;var qt=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var ho=(i,e)=>{for(var t in e)Pu(i,t,{get:e[t],enumerable:!0})};var Fe,Cc,je,Pc,bn,fo,Lc,ki,Ic,uo,po,Dc,Ir,Dr,kc,Nc,kr,Jn,Nr,mo,go,Fr,Ni,ps,Or,gt,yo,Fc,zr,xo,Nn=qt(()=>{Fe=.03333333333333333,Cc=2,je=6e3,Pc=.7,bn=7,fo=88,Lc=4,ki=8,Ic=1500,uo=2600,po=1e4,Dc={1:{rate:.15,dmg:1,big:!1,shots:[[0,0]]},2:{rate:.16,dmg:2,big:!0,shots:[[0,0]]},3:{rate:.16,dmg:2,big:!0,shots:[[0,-4],[0,4]]},4:{rate:.15,dmg:2,big:!0,shots:[[-.17,0],[0,0],[.17,0]]},5:{rate:.15,dmg:2,big:!0,shots:[[-.2,0],[0,0],[.2,0]],shell:{cd:.7,blast:22,dmg:4}},6:{rate:.15,dmg:2,big:!0,shots:[[-.26,0],[-.1,0],[.1,0],[.26,0]],laser:{cd:.32,dmg:3}}},Ir=6,Dr=290,kc=200,Nc=3,kr=.8,Jn=5,Nr=170,mo=0,go=1,Fr=2,Ni=.52,ps=4,Or=[{name:"HU\u1EA4N LUY\u1EC6N",cd:99,bspd:.8,hp:1,wave:0,aim:.5,soldierSpd:.6,bossHp:1,drop:0},{name:"\u0110\u1ED2NG C\u1ECE",cd:1.4,bspd:.85,hp:.8,wave:.85,aim:.2,soldierSpd:.9,bossHp:80,drop:1.3},{name:"SA M\u1EA0C",cd:1.2,bspd:.95,hp:1,wave:1,aim:.13,soldierSpd:1,bossHp:140,drop:1.2},{name:"C\u0102N C\u1EE8 TUY\u1EBET",cd:1.05,bspd:1,hp:1.05,wave:1.1,aim:.1,soldierSpd:1.1,bossHp:150,drop:1.1}],gt={rapid:0,shield:1,life:2,bomb:3,wup:4},yo=12,Fc=8,zr=5,xo={soldier:50,turret:200,tank:300,prison:100,pow:100,bossTurret:500,boss:5e3,boss2:8e3}});function Ur(i,e,t,n){let s=Math.max(n.x,Math.min(i,n.x+n.w)),r=Math.max(n.y,Math.min(e,n.y+n.h)),a=i-s,o=e-r;return a*a+o*o<t*t}function Oc(i,e,t){return i>=t.x&&i<=t.x+t.w&&e>=t.y&&e<=t.y+t.h}function Fn(i,e,t,n){for(let s=0;s<n.length;s++){let r=n[s];if(!(e+t<r.y||e-t>r.y+r.h)&&Ur(i,e,t,r))return!0}return!1}function tr(i,e){i=+i||0,e=+e||0;let t=Math.hypot(i,e);return t>1&&(i/=t,e/=t),t<.08&&(i=0,e=0),[Math.round(i*100)/100,Math.round(e*100)/100]}function Fi(i,e,t,n,s){let r=e*fo*Fe,a=t*fo*Fe,o=bn,l=o,c=360-o,h=n+o+2,u=n+240-o-2,f=Math.max(l,Math.min(c,i.x+r));Fn(f,i.y,o,s)||(i.x=f);let d=Math.max(h,Math.min(u,i.y+a));return Fn(i.x,d,o,s)||(i.y=d),(e||t)&&(i.a=Math.atan2(t,e)),!!(e||t)}function pi(i,e,t,n){let s=i-t,r=e-n;return s*s+r*r}function ms(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Pe(i,e){let t=i*374761393+e*668265263|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}var mi=qt(()=>{Nn()});function _o(i){let e={theme:i,rivers:[],blockers:[],spawns:[],helipads:[],deco:[],roads:[]};return{L:e,band(n,s,r,a="water"){e.rivers.push({y:n,h:s,bridges:r,kind:a});let o=0;for(let l of[...r].sort((c,h)=>c.x-h.x))l.x>o&&e.blockers.push({x:o,y:n,w:l.x-o,h:s,kind:a==="water"?"water":a}),o=l.x+l.w;o<gs&&e.blockers.push({x:o,y:n,w:gs-o,h:s,kind:a==="water"?"water":a})},wall:(n,s,r,a)=>e.blockers.push({x:n,y:s,w:r,h:a,kind:"sandbag"}),rock:(n,s,r,a)=>e.blockers.push({x:n,y:s,w:r,h:a,kind:"rock"}),S:(n,s,r,a={})=>e.spawns.push({type:n,x:s,y:r,...a}),wave:(n,s,r="top")=>e.spawns.push({type:"wave",x:0,y:n,n:s,side:r}),heli:(n,s)=>e.helipads.push({x:n,y:s})}}function vo(i,e,t){for(let n=0;n<Math.round(260*360/gs);n++){let s=6+e()*348,r=440+e()*(je-460);i.blockers.some(o=>Ur(s,r,16,o))||i.rivers.some(o=>r>o.y-26&&r<o.y+o.h+22)||i.roads.some(o=>s>o.x-8&&s<o.x+o.w+8&&r>o.y0&&r<o.y1)||i.spawns.some(o=>o.type!=="wave"&&Math.abs(o.x-s)<28&&Math.abs(o.y-r)<30)||i.helipads.some(o=>Math.abs(o.x-s)<32&&Math.abs(o.y-r)<32)||i.deco.push({kind:e()<.65?t[0]:t[1],x:s,y:r})}}function bo(i){let e=360/gs,t=n=>Math.round(n*e);for(let n of i.blockers)if(n.kind==="sandbag"||n.kind==="rock")n.x=t(n.x+n.w/2)-n.w/2;else{let s=t(n.x+n.w);n.x=t(n.x),n.w=Math.max(1,s-n.x)}for(let n of i.rivers)for(let s of n.bridges)s.x=t(s.x),s.w=t(s.w);for(let n of i.roads)n.x=t(n.x),n.w=t(n.w);for(let n of i.helipads)n.x=t(n.x);for(let n of i.spawns)n.x=t(n.x),n.patrol&&(n.patrol=n.patrol.map(t)),n.turrets&&(n.turrets=n.turrets.map(t))}function Lu(){let i=ms(7),{L:e,heli:t}=_o(0);return e.tutorial=!0,e.minCam=je-240,t(214,je-52),bo(e),vo(e,i,["tree","bush"]),e.deco=e.deco.filter(n=>n.y>je-1400&&(n.y<je-250||n.x<22||n.x>338)),e}function Iu(){let i=ms(1986),{L:e,band:t,wall:n,rock:s,S:r,wave:a,heli:o}=_o(0);return e.roads.push({x:104,w:32,y0:4600,y1:je}),n(30,5650,40,8),n(170,5620,40,8),a(5560,3),r("turret",190,5400),a(5330,3,"left"),r("prison",55,5210,{pows:4,flash:1}),n(20,5160,30,8),a(5080,4,"right"),o(185,4960),r("tank",70,4800,{patrol:[40,150]}),a(4720,3),t(4560,56,[{x:98,w:44}]),r("turret",45,4480),r("turret",195,4480),n(70,4430,20,8),n(150,4430,20,8),e.roads.push({x:20,w:28,y0:3080,y1:4560}),a(4320,5),r("prison",185,4160,{pows:5,flash:1}),s(120,4100,26,22),r("tank",60,4020,{patrol:[30,120]}),a(3940,4,"left"),r("turret",120,3850),o(55,3660),n(150,3600,50,8),r("tank",185,3470,{patrol:[130,210]}),a(3380,4,"right"),r("prison",120,3250,{pows:4,flash:1}),t(3020,64,[{x:24,w:40},{x:176,w:40}]),r("turret",120,2930),s(100,2870,40,18),e.roads.push({x:180,w:30,y0:1600,y1:3020}),a(2780,6),o(185,2560),r("tank",60,2440,{patrol:[30,130]}),r("prison",60,2250,{pows:6,flash:1}),r("turret",60,2060),r("turret",180,2060),n(95,2010,50,8),a(1900,6,"left"),r("prison",180,1720,{pows:4,flash:1}),o(55,1520),r("tank",120,1320,{patrol:[40,200]}),a(1180,5,"right"),r("turret",40,1100),r("turret",200,1100),a(1e3,6),o(200,860),n(30,760,40,8),n(170,760,40,8),r("boss",120,70,{turrets:[40,90,150,200]}),bo(e),vo(e,i,["tree","bush"]),e}function zc(i){let e=ms(4242+(i-1)*97),{L:t,band:n,wall:s,rock:r,S:a,wave:o,heli:l}=_o(i-1),c=[],h=(b,E,R)=>!c.some(_=>Math.hypot(_[0]-b,_[1]-E)<R+_[2])&&!t.blockers.some(_=>Ur(b,E,R,_))&&!t.rivers.some(_=>E>_.y-R-24&&E<_.y+_.h+R+20),u=(b,E,R)=>{c.push([b,E,R])},f=(b,E,R,_)=>{for(let S=0;S<30;S++){let C=28+e()*(gs-56),F=E+e()*(b-E);if(h(C,F,R))return u(C,F,R),_(C,F),!0}return!1},d=i===2?["ridge","ridge","water"]:["wall","water","wall"],y=i===2?1.4:1.8,m=i===2?1.1:1.4,p=je-300,v=0,M=0,g=je,x=0;for(u(120,je-60,50);p>1e3;){let b=300+e()*110,E=p-b;if(v%3===2){let R=d[x++%d.length],_=R==="water"?56:R==="ridge"?38:22,S=Math.round(E+b*.45),C;if(e()<.5)C=[{x:40+Math.round(e()*116),w:44}];else{let F=18+Math.round(e()*30),U=150+Math.round(e()*40);C=[{x:F,w:40},{x:U,w:40}]}n(S,_,C,R);for(let F of C){let U=F.x+F.w/2;for(let N of[-48,48]){let L=Math.max(24,Math.min(gs-24,U+N));e()<(i===2?.6:.9)&&h(L,S-46,12)&&(u(L,S-46,12),a("turret",L,S-46))}}o(S-110,3+i)}else{let R=Math.floor(y+e()),_=Math.floor(m+e());for(let S=0;S<R;S++)f(p-30,E+30,14,(C,F)=>a("turret",C,F));for(let S=0;S<_;S++)f(p-30,E+30,16,(C,F)=>a("tank",C,F,{patrol:[Math.max(26,C-60),Math.min(214,C+60)]}));(M<5&&v%3!==1||M<5&&e()<.4)&&f(p-40,E+60,24,(S,C)=>a("prison",S,C,{pows:4+Math.floor(e()*3),flash:1}))&&M++;for(let S=0;S<1+Math.floor(e()*2);S++)f(p-20,E+20,18,(C,F)=>e()<.5?r(C-13,F-9,26,18):s(C-20,F-4,40,8));if(o(p-b*.25,2+i,["top","left","right"][Math.floor(e()*3)]),o(p-b*.75,2+i),g-p>700){let S=e()<.5?50:190;h(S,p-50,30)&&(u(S,p-50,30),l(S,p-50),g=p)}}p=E,v++}return l(i===2?40:200,860),u(i===2?40:200,860,30),o(1e3,2+i*2),i===2?a("boss2",120,80):a("boss",120,70,{turrets:[28,66,104,136,174,212]}),bo(t),vo(t,e,i===2?["cactus","drybush"]:["pine","snowbush"]),t}function Uc(i){xe=Br[Math.max(0,Math.min(ps-1,i))]}var gs,Br,xe,ys=qt(()=>{Nn();mi();gs=240;Br=[Lu(),Iu(),zc(2),zc(3)],xe=Br[0]});function nr(i,e,t){let n=Vc[i];return n?{x:e-n[0],y:t-n[1],w:n[0]*2,h:n[1]*2,kind:"ent"}:null}function _s(i,e,t,n,s){let r=Vc[t];if(!r)return Math.hypot(i-n,e-s)-Du[t];let a=Math.max(Math.abs(i-n)-r[0],0),o=Math.max(Math.abs(e-s)-r[1],0);return Math.hypot(a,o)}var q,Bc,Se,Vc,Du,xs,Oi,zi=qt(()=>{q={soldier:0,turret:1,tank:2,prison:3,boss:4,bossTurret:5,boss2:6},Bc=["soldier","turret","tank","prison","boss","bossTurret","boss2"],Se={mg:0,grenade:1,missile:2,ebullet:3,eshell:4,homing:5,laser:6,big:7},Vc={[q.turret]:[9,9],[q.tank]:[10,11],[q.prison]:[16,12],[q.boss]:[92,42],[q.bossTurret]:[9,9],[q.boss2]:[58,26]},Du={[q.soldier]:5,[q.turret]:10,[q.tank]:12,[q.prison]:16,[q.boss]:60,[q.bossTurret]:10,[q.boss2]:48},xs=new Set([q.turret,q.tank,q.prison,q.boss,q.bossTurret,q.boss2]),Oi=i=>i===q.boss||i===q.boss2});function ku(i,e,t,n,s){for(let r of i.rivers){let a=r.y,o=r.y+r.h,l=t>o-2&&s<o,c=t<a+2&&s>a;if(!l&&!c)continue;let h=null,u=1/0;for(let y of r.bridges){let m=y.x+y.w/2,p=Math.abs(m-e)+Math.abs(m-n)*.5;p<u&&(u=p,h=y)}let f=h.x+h.w/2,d=Math.abs(e-f)<h.w/2-9;return l?d?[f,a-14]:[f,o+16]:d?[f,o+14]:[f,a-16]}return[n,s]}function Hc(i,e){let t=e.bot,n=i.camY,s=i.players.find(g=>g!==e&&g.alive),r=e.x,a=e.y,o=1,l=null,c=null;if(e.carry>0){let g=1/0;for(let x of i.L.helipads){if(x.y<n-30||x.y>n+240+10)continue;let b=Math.abs(x.y-e.y)+Math.abs(x.x-e.x);b<g&&(g=b,c=x)}c&&(e.carry>=3||g<220)?(r=c.x,a=c.y):c=null}if(!c&&e.carry<ki){let g=null,x=1/0;for(let b of i.pows.values()){if(b.y<n||b.y>n+240)continue;let E=Math.hypot(b.x-e.x,b.y-e.y)-(b.flash?40:0);E<x&&(x=E,g=b)}g&&(r=g.x,a=g.y,c=g)}if(i.tut&&s&&(c=s,r=Math.max(16,Math.min(344,s.x+(e.x<s.x?-50:50))),a=s.y+20),!c){let g=null,x=150;for(let b of i.items.values()){if(b.y<n+10||b.y>n+240-6)continue;let E=Math.hypot(b.x-e.x,b.y-e.y);E<x&&(x=E,g=b)}g&&(r=g.x,a=g.y,c=g)}if(!c){let g=null,x=1/0;t.ignore=t.ignore||new Map;for(let b of i.enemies.values()){if(b.y<n-10||b.y>n+240||i.shielded(b)||(t.ignore.get(b.id)||0)>i.time)continue;let E=Math.hypot(b.x-e.x,b.y-e.y)+(xs.has(b.type)?0:50);E<x&&(x=E,g=b)}if(g&&(t.aimId!==g.id?(t.aimId=g.id,t.aimT=i.time,t.aimHp=g.hp):g.hp<t.aimHp?(t.aimHp=g.hp,t.aimT=i.time):i.time-t.aimT>5&&(t.ignore.set(g.id,i.time+8),t.aimId=null,g=null)),g){l=g;let b=e.slot===0?-1:1,E=g.type===q.boss||g.type===q.boss2?150:g.type===q.soldier?0:100;r=Math.max(16,Math.min(344,g.x+(g.type===q.soldier?0:b*12))),a=g.y+E;for(let R of i.L.rivers){let _=R.y+R.h+14;g.y<R.y&&e.y>R.y+R.h-2&&a>R.y-20&&_-g.y<180&&(a=Math.max(a,_),r=Math.max(16,Math.min(344,g.x)))}s&&!s.isBot&&(a=Math.max(a,Math.min(s.y-10,g.y+E+40)))}else if(s&&!s.isBot){let b=e.x<s.x?-1:1;r=Math.max(16,Math.min(344,s.x+b*45)),(r<20||r>340)&&(r=s.x-b*45),a=s.y+10,o=Math.hypot(r-e.x,a-e.y)>25?1:.4}else r=360/2+(e.slot===0?-25:25),a=e.y-80}a=Math.max(n+12,Math.min(n+240-12,a));let[h,u]=ku(i.L,e.x,e.y,r,a),f=h!==r||u!==a;r=h,a=u;let d=r-e.x,y=a-e.y,m=Math.hypot(d,y);if(m<5?(d=0,y=0):(d=d/m*o,y=y/m*o),l&&!f&&m<28&&Math.hypot(l.x-e.x,l.y-e.y)<190){let g=l.x-e.x,x=l.y-e.y,b=Math.hypot(g,x)||1;d=g/b*.2,y=x/b*.2}let p=0,v=0;for(let g of i.bullets.values()){if(!g.enemy)continue;let x=e.x-g.x,b=e.y-g.y,E=Math.hypot(x,b);if(E>70)continue;let R=Math.hypot(g.vx,g.vy)||1,_=g.vx/R,S=g.vy/R;if(x*_+b*S<-4)continue;let F=x*-S+b*_;if(Math.abs(F)>16)continue;let U=(F>=0?1:-1)*(1.6-Math.abs(F)/16)*(1-E/90);p+=-S*U,v+=_*U}for(let g of i.enemies.values()){if(!xs.has(g.type)||g.type===q.prison||g.type===q.boss||g.type===q.boss2)continue;let x=e.x-g.x,b=e.y-g.y,E=Math.hypot(x,b);E<40&&E>0&&(p+=x/E*.7,v+=b/E*.7)}if(d+=p*1.6,y+=v*1.6,t.t+=Fe,t.t>.6){if((t.lx===void 0?99:Math.hypot(e.x-t.lx,e.y-t.ly))<4&&Math.abs(d)+Math.abs(y)>.3){t.jitter=.8;let x=i.R()<.5?-1:1;t.jx=-y*x+(i.R()-.5),t.jy=d*x+.6}t.lx=e.x,t.ly=e.y,t.t=0}t.jitter>0&&(t.jitter-=Fe,d=t.jx,y=t.jy);let M=Math.hypot(d,y);if(M>1&&(d/=M,y/=M,M=1),M>.2){let g=i.L.blockers.concat(i.dynBlockers()),x=(R,_)=>{for(let S of[5,11]){let C=e.x+R*S,F=e.y+_*S;if(C<bn||C>360-bn||Fn(C,F,bn,g))return!1}return!0},b=d/M,E=y/M;if(!x(b,E)){let R=Math.atan2(E,b),_=(t.side||1)>0?[1,-1]:[-1,1];e:for(let S of[.5,1,1.5,2.1,2.7])for(let C of _){let F=R+C*S;if(x(Math.cos(F),Math.sin(F))){d=Math.cos(F)*M,y=Math.sin(F)*M,t.side=C,t.jitter=0;break e}}}}return[d,y]}var Wc=qt(()=>{Nn();mi();zi()});var Nu,Fu,Mo,Vr,Gc=qt(()=>{Nn();ys();mi();zi();Wc();Nu=1,Fu=i=>i===!1||i===0?mo:i===1?go:Fr,Mo=i=>typeof process<"u"&&process.env?process.env[i]:void 0,Vr=class{constructor(e,{send:t=()=>{},onEnd:n=()=>{},seed:s=Date.now(),tutorial:r=!1,snapEvery:a=Cc}={}){this.snapEvery=a,this.id=Nu++,this.send=t,this.onEnd=n,this.R=ms(s),this.tick=0,this.time=0,this.nid=1,this.events=[],this.ended=!1,this.players=e.map((h,u)=>({slot:u,name:h.name||`P${u+1}`,isBot:!!h.isBot,aimMode:h.isBot?Fr:Fu(h.aim),x:0,y:0,a:-Math.PI/2,alive:!0,lives:Lc,invulnUntil:0,respawnAt:0,weapon:1,carry:0,score:0,rescued:0,kills:0,rate:0,shieldUntil:0,rescueProg:0,mgCd:0,sCd:0,lCd:0,inputQ:[],last:[0,0],ack:0,bot:h.isBot?{t:0,jitter:0}:null}));let o=Mo("RJ_STAGE");this.loadStage(o!==void 0&&o!==""?Math.max(0,Math.min(ps-1,+o)):r?0:1);let l=+Mo("RJ_LIVES");l>0&&this.players.forEach(h=>{h.isBot||(h.lives=l)});let c=+Mo("RJ_START_Y");if(c>240&&c<je)for(this.camY=c-240+60,this.players.forEach(h=>{h.y=c,h.weapon=Math.max(h.weapon,3)});this.nextSpawn<this.spawns.length&&this.spawns[this.nextSpawn].y>c;)this.nextSpawn++}loadStage(e){this.stage=e,this.L=Br[e],this.D=Or[e],this.solid=this.L.blockers.filter(t=>t.kind==="sandbag"||t.kind==="rock"),this.spawns=[...this.L.spawns].sort((t,n)=>n.y-t.y),this.nextSpawn=0,this.camY=je-240,this.enemies=new Map,this.bullets=new Map,this.pows=new Map,this.items=new Map,this.bossDeadAt=0,this.loseAt=0,this.phase="play",this.clearT=0,this.players.forEach((t,n)=>{e>1&&(t.lives=Math.min(zr,Math.max(1,t.lives+1))),t.x=360/2+(n===0?-25:25),t.y=je-50,t.a=-Math.PI/2,t.alive=!0,t.respawnAt=0,t.carry=0,t.invulnUntil=this.time+uo/1e3,t.inputQ=[],t.mgCd=.3}),this.tut=this.L.tutorial?{step:0,sub:0,moved:0,t:0,ids:[],base:0,mark:null}:null,this.tut&&this.players.forEach(t=>{t.isBot&&(t.alive=!1,t.respawnAt=0)}),this.events.push(["g",e])}requestLife(e){let t=this.players[e],n=this.players[1-e];if(!(!t||!n||t.alive||t.lives>0||this.lifeReq||this.ended||this.tut)){if(n.lives<2){this.events.push(["A",e,n.slot,2]);return}this.lifeReq={from:e,to:n.slot,t:this.time},this.events.push(["L",e])}}answerLife(e,t){let n=this.lifeReq;if(!n||n.to!==e)return;this.lifeReq=null;let s=this.players[n.from],r=this.players[n.to];t&&r.lives>=2&&!s.alive&&s.lives<=0?(r.lives--,s.lives=1,s.respawnAt=this.time+.4,this.loseAt=0,this.events.push(["A",n.from,n.to,1])):this.events.push(["A",n.from,n.to,0])}updateLifeRequest(){let e=this.lifeReq;if(!e)return;if(this.players[e.to].isBot&&this.time-e.t>1.2)return this.answerLife(e.to,!0);if(this.time-e.t>10)return this.answerLife(e.to,!1)}skipTutorial(){!this.tut||this.phase==="clear"||(this.phase="clear",this.clearT=1.2,this.events.push(["c",0,0]))}updateTutorial(){let e=this.tut,t=this.players.filter(a=>!a.isBot&&a.alive);if(!t.length)return;e.t+=Fe;let n=this.camY,s=()=>{e.step++,e.sub=0,e.t=0,e.ids=[],this.events.push(["T",e.step])},r=()=>{e.sub++,this.events.push(["T",e.step])};switch(e.step){case 0:{let a=[[360*.2,n+100],[360*.8,n+100],[360*.5,n+160]],[o,l]=a[e.sub];e.mark=[o,l],t.some(c=>Math.hypot(c.x-o,c.y-l)<16)&&(e.sub<a.length-1?r():s());break}case 1:{let a=[[360*.5,n+88],[360*.08,n+165],[360*.92,n+150]];if(!e.ids.length||!this.enemies.has(e.ids[0])){if(e.ids.length)if(e.sub<a.length-1)r();else{s();break}let[l,c]=a[e.sub],h=this.addEnemy(q.turret,l,c);h.hp=h.maxHp=4,e.ids=[h.id]}let o=this.enemies.get(e.ids[0]);e.mark=o?[o.x,o.y]:null;break}case 2:{if(e.sub===0){if(!e.ids.length){let o=this.addEnemy(q.prison,360*.35,n+95,{pows:3,flash:0});e.ids=[o.id]}let a=this.enemies.get(e.ids[0]);e.mark=a?[a.x,a.y]:null,a||r()}else if(e.sub===1){let a=[...this.pows.values()][0];e.mark=a?[a.x,a.y]:null,this.pows.size||(e.base=0,r())}else{let a=this.L.helipads[0];e.mark=[a.x,a.y],t.every(o=>o.carry===0)&&s()}break}case 3:e.mark=null,e.t>2.5&&this.skipTutorial();break}}pushInput(e,t,n,s,r){let a=this.players[e];!a||a.isBot||(a.inputQ.length>20&&a.inputQ.splice(0,a.inputQ.length-10),a.inputQ.push({seq:t,d:tr(n,s),f:!!r}))}setBot(e){let t=this.players[e];t&&(t.isBot=!0,t.aimMode=Fr,t.bot={t:0,jitter:0},t.inputQ=[],t.name=t.name.replace(/ \(bot\)$/,"")+" (bot)",this.events.push(["b",e]))}dynBlockers(e){let t=[];for(let n of this.enemies.values()){if(n===e)continue;let s=nr(n.type,n.x,n.y);s&&t.push(s)}return t}inView(e,t,n=0){return t>this.camY-n&&t<this.camY+240+n&&e>-n&&e<360+n}alivePlayers(){return this.players.filter(e=>e.alive)}nearestPlayer(e,t){let n=null,s=1/0;for(let r of this.players)if(r.alive){let a=pi(e,t,r.x,r.y);a<s&&(s=a,n=r)}return n}shielded(e){return Oi(e.type)&&e.turrets&&e.turrets.some(t=>this.enemies.has(t))}ebullet(e,t,n,s,r,a=Se.ebullet,o=0,l=!0){let c=l?(this.R()-.5)*2*this.D.aim:0,h=Math.atan2(s-t,n-e)+o+c,u=r*this.D.bspd,f=this.nid++;this.bullets.set(f,{id:f,kind:a,x:e,y:t,vx:Math.cos(h)*u,vy:Math.sin(h)*u,life:4.5,enemy:!0})}step(){if(this.ended)return;if(this.tick++,this.time+=Fe,this.phase==="clear"){this.clearT-=Fe,this.clearT<=0&&this.loadStage(this.stage+1),this.tick%this.snapEvery===0&&this.broadcast();return}this.updateCamera(),this.activateSpawns();let e=this.L.blockers.concat(this.dynBlockers());for(let t of this.players)this.updatePlayer(t,e);for(let t of[...this.enemies.values()])this.updateEnemy(t);this.updateBullets(),this.updatePows(),this.updateItems(),this.tut&&this.updateTutorial(),this.updateLifeRequest(),this.cleanup(),this.checkEnd(),this.tick%this.snapEvery===0&&this.broadcast()}updateCamera(){let e=this.alivePlayers();if(!e.length)return;let t=Math.min(...e.map(o=>o.y)),n=Math.max(...e.map(o=>o.y)),s=Math.max(0,Math.min(1,(t-300)/300)),r=t-240*(Pc*s+(1-s)),a=n+bn+6-240;this.camY=Math.max(this.L.minCam||0,Math.min(this.camY,Math.max(r,a)))}activateSpawns(){for(;this.nextSpawn<this.spawns.length;){let e=this.spawns[this.nextSpawn];if(!(e.type==="wave"?this.camY<=e.y:e.y>=this.camY-40))break;if(this.nextSpawn++,e.type==="wave"){let n=Math.max(1,Math.round(e.n*this.D.wave));for(let s=0;s<n;s++){let r,a;e.side==="left"?(r=-6,a=this.camY+30+this.R()*170):e.side==="right"?(r=366,a=this.camY+30+this.R()*170):(r=20+this.R()*320,a=this.camY-8-this.R()*30),this.addEnemy(q.soldier,r,a)}}else if(e.type==="boss"){let n=this.addEnemy(q.boss,e.x,e.y);n.turrets=e.turrets.map(s=>{let r=this.addEnemy(q.bossTurret,s,e.y+56);return r.parent=n.id,r.id})}else if(e.type==="boss2"){let n=this.addEnemy(q.boss2,e.x,e.y);n.dir=1,n.turrets=[-34,34].map(s=>{let r=this.addEnemy(q.bossTurret,e.x+s,e.y-4);return r.parent=n.id,r.ox=s,r.oy=-4,r.id})}else this.addEnemy(q[e.type],e.x,e.y,e)}}addEnemy(e,t,n,s={}){let r=this.nid++,a={[q.soldier]:1,[q.turret]:6,[q.tank]:10,[q.prison]:4,[q.bossTurret]:12}[e],o=Oi(e)?this.D.bossHp:e===q.soldier||e===q.prison?a:Math.ceil(a*this.D.hp),l={id:r,type:e,x:t,y:n,hp:o,maxHp:o,a:Math.PI/2,cd:(1+this.R()*1.5)*this.D.cd,t:0,born:this.time,vx:0,vy:0,pows:s.pows||0,flash:s.flash||0,patrol:s.patrol||null,dir:this.R()<.5?-1:1,spawnCd:4};return this.enemies.set(r,l),l}updatePlayer(e,t){if(!e.alive){e.lives>0&&e.respawnAt&&this.time>=e.respawnAt&&this.respawn(e),e.inputQ.length=0;return}let n=e.x,s=e.y;if(e.isBot)e.last=tr(...Hc(this,e)),Fi(e,e.last[0],e.last[1],this.camY,t),e.firing=!this.tut&&[...this.enemies.values()].some(r=>this.inView(r.x,r.y,-4)&&!this.shielded(r));else{let r=e.inputQ.length>4?2:1,a=!1;for(;r-- >0&&e.inputQ.length;){let o=e.inputQ.shift();e.last=o.d,e.ack=o.seq,e.firing=o.f,a=!0,Fi(e,o.d[0],o.d[1],this.camY,t)}a||Fi(e,e.last[0],e.last[1],this.camY,t),this.tut&&(this.tut.moved+=Math.hypot(e.x-n,e.y-s))}e.y=Math.min(e.y,this.camY+240-bn-2);for(let r of this.enemies.values())r.type===q.soldier&&pi(e.x,e.y,r.x,r.y)<121&&this.killEnemy(r,e,!0);if(this.fire(e),e.carry>0)for(let r=0;r<this.L.helipads.length;r++){let a=this.L.helipads[r];if(pi(e.x,e.y,a.x,a.y)<576){let o=e.carry;for(e.score+=o*xo.pow,e.rescued+=o,e.carry=0,e.rescueProg+=o;e.rescueProg>=Jn;)e.rescueProg-=Jn,e.weapon<Ir?(e.weapon++,this.events.push(["u",e.slot,e.weapon])):e.score+=500;this.events.push(["d",r,o,e.slot])}}}aimTarget(e,t=Math.PI){let n=null,s=1/0;for(let r of this.enemies.values()){if(this.shielded(r)||!this.inView(r.x,r.y,-4))continue;let a=_s(e.x,e.y,r.type,r.x,r.y);if(a>Nr)continue;let o=Math.abs(Math.atan2(Math.sin(Math.atan2(r.y-e.y,r.x-e.x)-e.a),Math.cos(Math.atan2(r.y-e.y,r.x-e.x)-e.a)));if(o>t)continue;let l=a*(1+o*.35)*(r.type===q.prison?1.6:1);l<s&&(s=l,n=r)}return n}fire(e){e.mgCd-=Fe,e.sCd-=Fe,e.lCd-=Fe;let t=e.aimMode!==mo&&!(this.tut&&this.tut.step===0)?this.aimTarget(e,e.aimMode===go?Ni:Math.PI):null;if(!e.firing&&!t)return;let n=Dc[e.weapon],s=t?Math.atan2(t.y-e.y,t.x-e.x):e.a;e.aim=s;let r=Math.cos(s),a=Math.sin(s),o=-a,l=r;if(e.mgCd<=0){e.mgCd=n.rate*kr**e.rate;for(let[c,h]of n.shots){let u=s+c,f=this.nid++;this.bullets.set(f,{id:f,kind:n.big?Se.big:Se.mg,dmg:n.dmg,owner:e.slot,x:e.x+r*13+o*h,y:e.y+a*13+l*h,vx:Math.cos(u)*Dr,vy:Math.sin(u)*Dr,life:kc/Dr})}}if(n.shell&&e.sCd<=0){e.sCd=n.shell.cd*kr**e.rate;let c=this.nid++;this.bullets.set(c,{id:c,kind:Se.missile,x:e.x+r*8,y:e.y+a*8,vx:r*220,vy:a*220,life:.95,blast:n.shell.blast,dmg:n.shell.dmg,owner:e.slot})}if(n.laser&&e.lCd<=0){e.lCd=n.laser.cd*kr**e.rate;let c=this.nid++;this.bullets.set(c,{id:c,kind:Se.laser,x:e.x+r*10,y:e.y+a*10,vx:r*420,vy:a*420,life:.6,dmg:n.laser.dmg,owner:e.slot,hitSet:new Set})}}pickTarget(e,t,n){let s=null,r=1/0;for(let a of this.enemies.values()){if(this.shielded(a)||!this.inView(a.x,a.y,4))continue;let o=_s(e.x,e.y,a.type,a.x,a.y);if(o>t)continue;let l=xs.has(a.type),c=o;n?l&&(c+=1e3):l||(c+=60),c<r&&(r=c,s=a)}return s}respawn(e){let t=this.players.find(l=>l!==e&&l.alive),n=this.L.blockers.concat(this.dynBlockers()),s=t?t.x:360/2,r=t?Math.min(t.y+30,this.camY+240-20):this.camY+240-40,a=[[0,0],[-30,0],[30,0],[0,-30],[-50,-20],[50,-20],[-80,0],[80,0],[0,-60],[-90,-50],[90,-50]],o=[360/2,this.camY+240-40];for(let[l,c]of a){let h=Math.max(12,Math.min(348,s+l)),u=Math.max(this.camY+20,Math.min(this.camY+240-12,r+c));if(!Fn(h,u,bn+2,n)){o=[h,u];break}}e.x=o[0],e.y=o[1],e.a=-Math.PI/2,e.alive=!0,e.invulnUntil=this.time+uo/1e3,e.respawnAt=0,e.mgCd=.3,this.events.push(["r",e.slot])}killPlayer(e){if(!(!e.alive||this.time<e.invulnUntil)){if(this.time<e.shieldUntil){this.events.push(["h",Math.round(e.x),Math.round(e.y)]);return}e.alive=!1,e.lives--,e.carry=0,e.weapon=1,e.rate=0,e.shieldUntil=0,e.respawnAt=e.lives>0?this.time+Ic/1e3:0,this.events.push(["x",Math.round(e.x),Math.round(e.y),2],["k",e.slot])}}updateEnemy(e){e.t+=Fe;let t=this.nearestPlayer(e.x,e.y),n=this.inView(e.x,e.y,-2),s=this.D;switch(e.type){case q.soldier:{if(e.cd-=Fe,e.stopT>0){e.stopT-=Fe;break}if(t&&(!e.dirT||e.dirT<=0)){let l=Math.atan2(t.y-e.y,t.x-e.x)+(this.R()-.5)*1.4,c=28*s.soldierSpd;e.vx=Math.cos(l)*c,e.vy=Math.sin(l)*c,e.dirT=.8+this.R(),e.a=l}e.dirT-=Fe;let r=this.L.blockers,a=e.x+e.vx*Fe,o=e.y+e.vy*Fe;Fn(a,e.y,4,r)?e.dirT=0:e.x=a,Fn(e.x,o,4,r)?e.dirT=0:e.y=o,t&&n&&e.cd<=0&&this.time-e.born>1&&(this.ebullet(e.x,e.y,t.x,t.y,95),e.cd=(1.8+this.R()*1.8)*s.cd,e.stopT=.4);break}case q.turret:case q.bossTurret:{if(e.parent&&e.ox!==void 0){let o=this.enemies.get(e.parent);o&&(e.x=o.x+e.ox,e.y=o.y+e.oy)}if(!t)break;let a=(Math.atan2(t.y-e.y,t.x-e.x)-e.a+Math.PI*3)%(Math.PI*2)-Math.PI;if(e.a+=Math.max(-2.2*Fe,Math.min(2.2*Fe,a)),e.cd-=Fe,n&&e.cd<=0&&Math.abs(a)<.3){let o=e.x+Math.cos(e.a)*10,l=e.y+Math.sin(e.a)*10;this.ebullet(o,l,o+Math.cos(e.a),l+Math.sin(e.a),100,Se.ebullet,0,!1),e.cd=(e.type===q.bossTurret?1.5+this.R()*.6:1.9+this.R()*.8)*s.cd,this.stage===3&&this.R()<.2&&(e.cd=.3)}break}case q.tank:{if(e.patrol&&n){let r=e.x+e.dir*18*Fe,a=nr(q.tank,r,e.y),o=this.players.some(l=>l.alive&&Math.abs(l.x-r)<18&&Math.abs(l.y-e.y)<19);r<e.patrol[0]||r>e.patrol[1]||o||this.L.blockers.some(l=>a.x<l.x+l.w&&a.x+a.w>l.x&&a.y<l.y+l.h&&a.y+a.h>l.y)?e.dir*=-1:e.x=r}if(!t)break;e.a=Math.atan2(t.y-e.y,t.x-e.x),e.cd-=Fe,n&&e.cd<=0&&(this.ebullet(e.x+Math.cos(e.a)*12,e.y+Math.sin(e.a)*12,t.x,t.y,80,Se.eshell),this.stage===3&&this.ebullet(e.x,e.y,t.x,t.y,80,Se.eshell,.25),e.cd=(2.2+this.R())*s.cd);break}case q.boss:{if(!n&&this.camY>40)break;let r=this.shielded(e);if(e.cd-=Fe,e.spawnCd-=Fe,t&&e.cd<=0){let a=(r?3:7)+(this.stage===3?2:0);for(let o=0;o<a;o++)this.ebullet(e.x,e.y+40,t.x,t.y,85,Se.eshell,(o-(a-1)/2)*.22,!1);e.cd=(r?3.2:2.2)*s.cd}e.spawnCd<=0&&(this.addEnemy(q.soldier,e.x-20+this.R()*40,e.y+50),e.spawnCd=(r?5:3.5)*s.cd);break}case q.boss2:{if(!n&&this.camY>40)break;e.x+=e.dir*22*Fe;let r=360/2-75,a=360/2+75;(e.x<r||e.x>a)&&(e.dir*=-1,e.x=Math.max(r,Math.min(a,e.x)));let o=this.shielded(e);if(e.cd-=Fe,e.spawnCd-=Fe,t&&e.cd<=0)if(o){for(let l=-1;l<=1;l++)this.ebullet(e.x,e.y+28,t.x,t.y,85,Se.eshell,l*.35,!1);e.cd=3.2*s.cd}else{for(let l=-1;l<=1;l++)this.ebullet(e.x,e.y+28,t.x,t.y,85,Se.eshell,l*.3,!1);e.burst=2,e.cd=2.6*s.cd}e.burst>0&&t&&this.tick%6===0&&(e.burst--,this.ebullet(e.x,e.y+20,t.x,t.y,100)),e.spawnCd<=0&&(this.addEnemy(q.soldier,e.x,e.y+36),e.spawnCd=4.5*s.cd);break}}}damage(e,t,n){if(this.shielded(e)){this.events.push(["h",Math.round(e.x),Math.round(e.y+20)]);return}e.hp-=t,e.hit=this.tick,e.hp<=0&&this.killEnemy(e,n)}killEnemy(e,t,n=!1){if(!this.enemies.has(e.id))return;this.enemies.delete(e.id),t&&(t.score+=xo[Bc[e.type]]||0,e.type!==q.prison&&t.kills++);let s=e.type===q.soldier?0:Oi(e.type)?3:1;if(this.events.push(["x",Math.round(e.x),Math.round(e.y),s]),n&&this.events.push(["s",Math.round(e.x),Math.round(e.y)]),e.type===q.prison)for(let r=0;r<e.pows;r++){let a=this.nid++,o=r/e.pows*Math.PI*2;this.pows.set(a,{id:a,x:e.x+Math.cos(o)*6,y:e.y+16+Math.sin(o)*4,flash:r<e.flash,wander:o,t:0})}else Oi(e.type)||this.maybeDrop(e);if(Oi(e.type)){this.bossDeadAt=this.time;for(let r of this.enemies.values())this.events.push(["x",Math.round(r.x),Math.round(r.y),1]);this.enemies.clear();for(let r of this.bullets.values())r.enemy&&this.bullets.delete(r.id)}}maybeDrop(e){let t=({[q.soldier]:.04,[q.turret]:.3,[q.tank]:.4,[q.bossTurret]:.5}[e.type]||0)*this.D.drop;if(this.R()>=t)return;let n=this.players.some(l=>l.lives<zr),s=[[gt.rapid,26],[gt.shield,18],[gt.bomb,16],[gt.wup,22],[gt.life,n?10:0]],r=this.R()*s.reduce((l,c)=>l+c[1],0),a=gt.rapid;for(let[l,c]of s)if((r-=c)<0){a=l;break}let o=this.nid++;this.items.set(o,{id:o,type:a,x:Math.max(10,Math.min(350,e.x)),y:e.y,t:0})}updateItems(){for(let e of[...this.items.values()]){if(e.t+=Fe,e.t>yo){this.items.delete(e.id);continue}for(let t of this.players)if(!(!t.alive||pi(t.x,t.y,e.x,e.y)>169)){this.items.delete(e.id),this.applyItem(t,e.type);break}}}applyItem(e,t){switch(t){case gt.rapid:e.rate<Nc?e.rate++:e.score+=500;break;case gt.shield:e.shieldUntil=this.time+Fc;break;case gt.life:e.lives=Math.min(zr,e.lives+1);break;case gt.wup:e.weapon<Ir?(e.weapon++,this.events.push(["u",e.slot,e.weapon])):e.score+=500;break;case gt.bomb:{for(let n of this.bullets.values())n.enemy&&this.inView(n.x,n.y,10)&&this.bullets.delete(n.id);for(let n of[...this.enemies.values()])this.inView(n.x,n.y,6)&&n.type!==q.prison&&this.damage(n,6,e);this.events.push(["B",e.slot]);break}}this.events.push(["i",e.slot,t])}explode(e,t,n,s,r=3){this.events.push(["x",Math.round(e),Math.round(t),n>24?1:0]);for(let a of[...this.enemies.values()])_s(e,t,a.type,a.x,a.y)<=n&&this.damage(a,r,s)}homingTarget(e){let t=null,n=4e4;for(let s of this.enemies.values()){if(this.shielded(s)||!this.inView(s.x,s.y,4))continue;let r=pi(e.x,e.y,s.x,s.y)*(xs.has(s.type)?.6:1);r<n&&(n=r,t=s)}return t}updateBullets(){for(let e of[...this.bullets.values()]){if(e.life-=Fe,e.kind===Se.grenade){e.t+=Fe;let s=Math.min(1,e.t/e.dur);e.x=e.sx+(e.tx-e.sx)*s,e.y=e.sy+(e.ty-e.sy)*s,e.z=Math.sin(s*Math.PI)*18,s>=1&&(this.bullets.delete(e.id),this.explode(e.x,e.y,e.blast,this.players[e.owner]));continue}if(e.kind===Se.homing){let s=this.homingTarget(e);if(s){let r=Math.atan2(e.vy,e.vx),o=(Math.atan2(s.y-e.y,s.x-e.x)-r+Math.PI*3)%(Math.PI*2)-Math.PI,l=r+Math.max(-6*Fe,Math.min(6*Fe,o)),c=Math.hypot(e.vx,e.vy);e.vx=Math.cos(l)*c,e.vy=Math.sin(l)*c}}e.x+=e.vx*Fe,e.y+=e.vy*Fe;let t=e.life<=0||!this.inView(e.x,e.y,20),n=e.kind===Se.missile||e.kind===Se.homing;if(e.kind===Se.laser){if(!t)for(let s of[...this.enemies.values()])e.hitSet.has(s.id)||_s(e.x,e.y,s.type,s.x,s.y)>4||(e.hitSet.add(s.id),this.events.push(["h",Math.round(e.x),Math.round(e.y)]),this.damage(s,e.dmg||3,this.players[e.owner]));t&&this.bullets.delete(e.id);continue}if(!t&&this.solid.some(s=>Oc(e.x,e.y,s))&&(t=!0,n?this.explode(e.x,e.y,e.blast,this.players[e.owner],e.dmg):this.events.push(["h",Math.round(e.x),Math.round(e.y)])),!t&&e.enemy){for(let s of this.players)if(s.alive&&pi(e.x,e.y,s.x,s.y)<(bn+(e.kind===Se.eshell?3:1))**2){t=!0,this.killPlayer(s);break}}else if(!t){for(let s of this.enemies.values())if(!this.shielded(s)&&_s(e.x,e.y,s.type,s.x,s.y)<=1){t=!0;let r=this.players[e.owner];n?this.explode(e.x,e.y,e.blast,r,e.dmg):(s.type!==q.soldier&&this.events.push(["h",Math.round(e.x),Math.round(e.y)]),this.damage(s,e.dmg||1,r));break}}t&&this.bullets.delete(e.id)}}updatePows(){for(let e of[...this.pows.values()]){e.t+=Fe;let t=null,n=19600;for(let l of this.players){if(!l.alive||l.carry>=ki)continue;let c=pi(e.x,e.y,l.x,l.y);c<n&&(n=c,t=l)}let s,r;if(t&&e.t>.6){let l=Math.sqrt(n)||1;if(s=(t.x-e.x)/l*34,r=(t.y-e.y)/l*34,l<11){t.carry++,this.pows.delete(e.id),this.events.push(["p",t.slot]),e.flash&&t.weapon<Ir?(t.weapon++,this.events.push(["u",t.slot,t.weapon])):e.flash&&(t.score+=500);continue}}else e.wander+=(this.R()-.5)*.6,s=Math.cos(e.wander)*10,r=Math.sin(e.wander)*10;let a=e.x+s*Fe,o=e.y+r*Fe;Fn(a,e.y,3,this.L.blockers)||(e.x=Math.max(4,Math.min(356,a))),Fn(e.x,o,3,this.L.blockers)||(e.y=o)}}cleanup(){let e=this.camY+240+70;for(let t of this.enemies.values())t.y>e&&!Oi(t.type)&&!this.tut&&this.enemies.delete(t.id);for(let t of this.pows.values())t.y>e&&this.pows.delete(t.id);for(let t of this.items.values())t.y>e&&this.items.delete(t.id)}checkEnd(){if(this.bossDeadAt&&this.time-this.bossDeadAt>3){if(this.stage<ps-1){let e=2e3*(this.stage+1);this.players.forEach(t=>{(t.lives>0||t.alive)&&(t.score+=e)}),this.phase="clear",this.clearT=4,this.bossDeadAt=0,this.events.push(["c",this.stage,e]);return}return this.finish(!0)}if(this.players.every(e=>!e.alive&&e.lives<=0)&&!this.lifeReq&&(this.loseAt||(this.loseAt=this.time),this.time-this.loseAt>2))return this.finish(!1)}progress(){return Math.round((1-this.camY/(je-240))*100)}finish(e){if(this.ended)return;this.broadcast(),this.ended=!0;let t={t:"end",win:e,time:Math.round(this.time),stage:this.stage,stages:ps-1,progress:e?100:this.progress(),players:this.players.map(n=>({name:n.name,bot:n.isBot,score:n.score,rescued:n.rescued,kills:n.kills}))};this.players.forEach((n,s)=>this.send(s,t)),this.onEnd(this,t)}startMsg(e){return{t:"start",you:e,room:this.id,stage:this.stage,players:this.players.map(t=>({name:t.name,bot:t.isBot}))}}snapshot(){let e=n=>Math.round(n*10)/10,t=n=>Math.round(n*100)/100;return{t:"s",k:this.tick,cam:e(this.camY),sg:this.stage,ph:this.phase==="clear"?1:0,lr:this.lifeReq?[this.lifeReq.from,this.lifeReq.to,Math.max(0,Math.ceil(10-(this.time-this.lifeReq.t)))]:null,tu:this.tut?[this.tut.step,this.tut.sub,...this.tut.mark?this.tut.mark.map(n=>Math.round(n)):[-1,-1]]:null,ack:this.players.map(n=>n.ack),p:this.players.map(n=>[e(n.x),e(n.y),t(n.a),n.alive?1:0,this.time<n.invulnUntil?1:0,n.lives,n.weapon,n.carry,n.score,n.isBot?1:0,n.rate,Math.max(0,Math.ceil(n.shieldUntil-this.time)),n.rescueProg]),e:[...this.enemies.values()].map(n=>[n.id,n.type,e(n.x),e(n.y),t(n.a),t(n.hp/n.maxHp),n.hit&&this.tick-n.hit<4?1:0,this.shielded(n)?1:0]),b:[...this.bullets.values()].map(n=>[n.id,n.kind,e(n.x),e(n.y),e(n.z||0),n.vx!==void 0?t(Math.atan2(n.vy,n.vx)):0]),w:[...this.pows.values()].map(n=>[n.id,e(n.x),e(n.y),n.flash?1:0]),i:[...this.items.values()].map(n=>[n.id,n.type,e(n.x),e(n.y),n.t>yo-3?1:0]),ev:this.events}}broadcast(){let e=this.snapshot();this.events=[];let t=JSON.stringify(e);this.players.forEach((n,s)=>{n.isBot||this.send(s,t)})}}});var qc={};ho(qc,{makeLocal:()=>wo});function wo(){let i={readyState:0,onopen:null,onmessage:null,onclose:null,onerror:null},e=null,t=null,n=r=>i.onmessage&&i.onmessage({data:typeof r=="string"?r:JSON.stringify(r)}),s=()=>{clearInterval(t),t=null};return i.send=r=>{let a=JSON.parse(r);if(a.t==="join"){e=new Vr([{name:a.name,aim:a.aim},{name:"BOT",isBot:!0}],{seed:Date.now(),tutorial:!!a.tut,snapEvery:1,send:(h,u)=>{h===0&&n(u)},onEnd:s}),n(e.startMsg(0));let o=1e3/30,l=0,c=performance.now();t=setInterval(()=>{let h=performance.now();if(l+=Math.min(250,h-c),c=h,window.RJ_PAUSED){l=0;return}for(;l>=o&&e&&!e.ended;)l-=o,e.step()},5)}else a.t==="i"&&e?e.pushInput(0,a.s|0,a.x,a.y,a.f):a.t==="skip"&&e?e.skipTutorial():a.t==="life"&&e?e.requestLife(0):a.t==="lifeAns"&&e&&e.answerLife(0,!!a.yes)},i.close=()=>{s(),e=null,i.readyState=3},setTimeout(()=>{i.readyState=1,i.onopen&&i.onopen()},0),i}var So=qt(()=>{Gc();Nn()});function st(i,e){let t=document.createElement("canvas");t.width=i,t.height=e;let n=t.getContext("2d");return n.imageSmoothingEnabled=!1,[t,n]}function vs(i,e){let t=i.length,n=i[0].length,[s,r]=st(n,t);for(let a=0;a<t;a++)for(let o=0;o<n;o++){let l=i[a][o];l==="."||!e[l]||(r.fillStyle=e[l],r.fillRect(o,a,1,1))}return s}function ot(i,e=pt){let[t,n]=st(i.width,i.height);n.drawImage(i,0,0),n.globalCompositeOperation="source-in",n.fillStyle=e,n.fillRect(0,0,i.width,i.height);let[s,r]=st(i.width+2,i.height+2);for(let[a,o]of[[0,1],[2,1],[1,0],[1,2]])r.drawImage(t,a,o);return r.drawImage(i,1,1),s}function Xc(i,e=16){let t=Math.ceil(Math.hypot(i.width,i.height))+1,n=[];for(let s=0;s<e;s++){let[r,a]=st(t,t);a.translate(t/2,t/2),a.rotate(s*Math.PI*2/e),a.drawImage(i,-Math.floor(i.width/2),-Math.floor(i.height/2));let o=a.getImageData(0,0,t,t),l=o.data;for(let c=3;c<l.length;c+=4)l[c]=l[c]>110?255:0;a.putImageData(o,0,0),n.push(ot(r))}return n}function jc(i){let e=i?26:16,t=i?30:14,[n,s]=st(e,t);i&&(s.fillStyle="#7c4a24",s.fillRect(11,19,5,10),s.fillStyle="#a8683a",s.fillRect(11,19,2,10),s.fillStyle="#4c2c14",s.fillRect(15,19,1,10));let r=(c,h,u,f)=>{s.fillStyle=f,s.beginPath(),s.arc(c,h,u,0,7),s.fill()},a=i?12:8,o=i?11:7,l=e/2;return r(l,a+1,o,"#22702c"),r(l-3,a-1,o-2,"#38963a"),r(l+3,a,o-3,"#38963a"),r(l-3,a-3,o-5,"#62c04c"),r(l-5,a-5,i?3:2,"#a4e478"),i&&(s.fillStyle="#22702c",s.fillRect(l+2,a+4,3,2),s.fillRect(l-7,a+5,2,2)),ot(On(n))}function On(i){let e=i.getContext("2d"),t=e.getImageData(0,0,i.width,i.height),n=t.data;for(let s=3;s<n.length;s+=4)n[s]=n[s]>100?255:0;return e.putImageData(t,0,0),i}function Ou(){let[i,e]=st(24,22);e.fillStyle="#5c4a2c",e.beginPath(),e.ellipse(12,12,11,9,0,0,7),e.fill();for(let t=0;t<10;t++){let n=t/10*Math.PI*2,s=12+Math.cos(n)*9,r=12+Math.sin(n)*7;e.fillStyle="#b8945c",e.fillRect(Math.round(s)-3,Math.round(r)-2,6,5),e.fillStyle="#e8cc8c",e.fillRect(Math.round(s)-3,Math.round(r)-2,5,2),e.fillStyle="#86683c",e.fillRect(Math.round(s)-3,Math.round(r)+2,6,1)}return e.fillStyle="#3c3c44",e.beginPath(),e.arc(12,11,5,0,7),e.fill(),e.fillStyle="#6c6c78",e.beginPath(),e.arc(11,10,3,0,7),e.fill(),ot(On(i))}function zu(){let[i,e]=st(24,24);for(let t of[0,18]){e.fillStyle="#34343c",e.fillRect(t,1,6,22),e.fillStyle="#5c5c68";for(let n=2;n<23;n+=3)e.fillRect(t+1,n,4,1)}return e.fillStyle="#8c3c2c",e.fillRect(5,2,14,20),e.fillStyle="#c85c3c",e.fillRect(5,2,14,4),e.fillRect(5,2,3,20),e.fillStyle="#5c2418",e.fillRect(5,19,14,3),e.fillRect(17,2,2,20),e.fillStyle="#f8c84c",e.fillRect(11,16,2,2),ot(i)}function Uu(){let[i,e]=st(12,12);return e.fillStyle="#6c2c20",e.beginPath(),e.arc(6,6,5.5,0,7),e.fill(),e.fillStyle="#b4503a",e.beginPath(),e.arc(5,5,3.5,0,7),e.fill(),e.fillStyle="#e88c6c",e.fillRect(3,3,2,2),ot(On(i))}function Bu(){let[i,e]=st(34,30);e.fillStyle="#a8382c",e.fillRect(0,0,34,14);for(let t=0;t<34;t+=4)e.fillStyle="#d85c44",e.fillRect(t,0,2,13);e.fillStyle="#f88c6c",e.fillRect(0,0,34,2),e.fillStyle="#6c1c14",e.fillRect(0,12,34,2),e.fillStyle="#8c5c30",e.fillRect(2,14,30,16);for(let t=15;t<30;t+=4)e.fillStyle="#b07c44",e.fillRect(2,t,30,2);e.fillStyle="#5c3818",e.fillRect(2,14,30,1),e.fillStyle="#1c140c",e.fillRect(11,17,12,13),e.fillStyle="#a8a8b0";for(let t=12;t<23;t+=3)e.fillRect(t,17,1,13);return e.fillStyle="#d8d8e0",e.fillRect(11,17,12,1),e.fillRect(11,23,12,1),e.fillStyle="#f8e0a0",e.fillRect(3,17,7,5),e.fillStyle="#c83828",e.fillRect(4,19,5,1),ot(i)}function Vu(){let[t,n]=st(186,96),s=64;n.fillStyle="#9c9488",n.fillRect(0,6,186,s-6);for(let r=6;r<s;r+=8)for(let a=r/8%2?0:6;a<186;a+=12)n.fillStyle="#b8b0a4",n.fillRect(a,r,11,1),n.fillStyle="#7c746a",n.fillRect(a+11,r,1,8);for(let r=0;r<186;r+=12)n.fillStyle="#c4bcb0",n.fillRect(r,0,8,4),n.fillStyle="#847c70",n.fillRect(r,4,8,3);n.fillStyle="#6c6458",n.fillRect(0,s,186,96-s);for(let r=s;r<96;r+=6)for(let a=(r-s)/6%2?0:8;a<186;a+=16)n.fillStyle="#847c70",n.fillRect(a,r,15,1),n.fillStyle="#4c463c",n.fillRect(a+15,r,1,6);n.fillStyle="#d4ccc0",n.fillRect(0,s,186,1),n.fillStyle="#2c241c",n.fillRect(186/2-18,s+4,36,96-s-4),n.fillStyle="#7c4a24";for(let r=186/2-16;r<186/2+18;r+=6)n.fillRect(r,s+6,4,96-s-6);n.fillStyle="#a8a8b0",n.fillRect(186/2-18,s+12,36,2),n.fillRect(186/2-18,s+22,36,2);for(let r of[0,164])n.fillStyle="#b0a89c",n.fillRect(r,0,22,s),n.fillStyle="#d4ccc0",n.fillRect(r,0,22,2),n.fillRect(r,0,2,s),n.fillStyle="#5c564c",n.fillRect(r,s,22,96-s),n.fillStyle="#c83828",n.fillRect(r+9,18,4,14);return n.fillStyle="#3c3830",n.beginPath(),n.arc(186/2,34,19,0,7),n.fill(),n.fillStyle="#5c564c",n.beginPath(),n.arc(186/2,33,16,0,7),n.fill(),ot(On(t))}function Hu(){let[i,e]=st(22,34);return e.fillStyle="#3c7c34",e.fillRect(9,16,4,16),e.fillStyle="#5ca44c",e.fillRect(9,16,2,16),e.fillStyle="#3c7c34",e.fillRect(5,29,12,3),e.fillStyle="#3c3c44",e.fillRect(1,4,2,16),e.fillRect(19,4,2,16),e.fillRect(3,7,2,1),e.fillRect(3,16,2,1),e.fillRect(17,7,2,1),e.fillRect(17,16,2,1),e.fillStyle="#2c6c2c",e.beginPath(),e.ellipse(11,11,7,10,0,0,7),e.fill(),e.fillStyle="#4c9c44",e.beginPath(),e.ellipse(10,11,5,8,0,0,7),e.fill(),e.fillStyle="#78c8f0",e.beginPath(),e.ellipse(11,5,5,4,0,0,7),e.fill(),e.fillStyle="#e8fcff",e.fillRect(8,3,2,2),e.fillStyle="#f8f8f0",e.fillRect(9,13,4,4),e.fillStyle="#c83828",e.fillRect(10,13,2,4),e.fillRect(9,14,4,2),ot(On(i))}function Wu(i,e){let[t,n]=st(i,e+4);return n.fillStyle="#5c5864",n.beginPath(),n.ellipse(i/2,e/2+3,i/2,e/2,0,0,7),n.fill(),n.fillStyle="#8c8898",n.beginPath(),n.ellipse(i/2-1,e/2,i/2-1,e/2-1,0,0,7),n.fill(),n.fillStyle="#b8b4c4",n.beginPath(),n.ellipse(i/2-i/6,e/2-e/5,i/5,e/6,0,0,7),n.fill(),ot(On(t))}function Gu(){let[i,e]=st(16,24),t="#3c9c4c",n="#78d070",s="#246c34";return e.fillStyle=t,e.fillRect(6,2,5,21),e.fillRect(1,8,3,8),e.fillRect(12,5,3,9),e.fillRect(3,13,3,3),e.fillRect(10,11,3,3),e.fillStyle=n,e.fillRect(7,3,1,19),e.fillRect(2,9,1,6),e.fillRect(13,6,1,7),e.fillStyle=s,e.fillRect(10,3,1,20),e.fillStyle="#f8f0c0",e.fillRect(8,6,1,1),e.fillRect(8,12,1,1),e.fillRect(9,17,1,1),e.fillStyle="#f87890",e.fillRect(7,1,3,2),ot(i)}function qu(){let[i,e]=st(14,10);e.fillStyle="#8c6430",e.beginPath(),e.ellipse(7,6,6,4,0,0,7),e.fill(),e.strokeStyle="#c8964c",e.lineWidth=1;for(let t=0;t<5;t++)e.beginPath(),e.moveTo(7,7),e.lineTo(2+t*2.5,2+t%2*2),e.stroke();return ot(On(i))}function Xu(){let[i,e]=st(20,30);e.fillStyle="#6c4424",e.fillRect(8,23,4,7);let t=(n,s,r)=>{e.fillStyle="#1c5c44",e.beginPath(),e.moveTo(10,n),e.lineTo(10+s,n+r),e.lineTo(10-s,n+r),e.fill(),e.fillStyle="#2c7c5c",e.beginPath(),e.moveTo(10,n+1),e.lineTo(10+s-3,n+r-1),e.lineTo(10-s+1,n+r-1),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.moveTo(10,n),e.lineTo(10+s*.5,n+r*.5),e.lineTo(10-s*.5,n+r*.5),e.fill(),e.fillStyle="#d8e8f8",e.fillRect(10-s+2,n+r-2,s*2-4,2)};return t(13,9,11),t(7,7,9),t(1,5,8),ot(On(i))}function Yu(){let[i,e]=st(16,10);return e.fillStyle="#a8bcd8",e.beginPath(),e.ellipse(8,6,7,4,0,0,7),e.fill(),e.fillStyle="#f8fcff",e.beginPath(),e.ellipse(7,4,6,3,0,0,7),e.fill(),e.fillStyle="#2c7c5c",e.fillRect(3,6,2,2),e.fillRect(11,6,2,1),ot(On(i))}function Ju(i){let[e,t]=st(i.width,i.height);t.drawImage(i,0,0),t.fillStyle="#ffffff";for(let n=1;n<i.width-1;n+=12)t.fillRect(n,1,8,2);t.fillRect(1,1,22,3),t.fillRect(i.width-23,1,22,3),t.fillStyle="rgba(220,236,255,0.55)";for(let n=0;n<40;n++)t.fillRect(n*37%i.width,10+n*23%50,3,1);return e}function $u(){let[t,n]=st(122,62);for(let s of[0,104]){n.fillStyle="#2c2c34",n.fillRect(s,2,18,58),n.fillStyle="#5c5c68";for(let r=4;r<58;r+=4)n.fillRect(s+2,r,14,2);n.fillStyle="#7c7c88",n.fillRect(s+2,2,14,1)}n.fillStyle="#8c6430",n.fillRect(16,0,90,54),n.fillStyle="#c0904c",n.fillRect(16,0,90,6),n.fillRect(16,0,4,54),n.fillStyle="#5c3c18",n.fillRect(16,48,90,6),n.fillStyle="#a07840",n.fillRect(26,12,70,26),n.fillStyle="#5c3c18";for(let s=28;s<94;s+=8)n.fillRect(s,14,2,2),n.fillRect(s,34,2,2);n.fillStyle="#4c3014",n.fillRect(16,54,90,8);for(let s of[122/2-14,122/2-3,122/2+8])n.fillStyle="#1c140c",n.fillRect(s,55,6,6),n.fillStyle="#5c5c68",n.fillRect(s+1,56,4,2);for(let s=20;s<102;s+=8)n.fillStyle="#f8c830",n.fillRect(s,7,4,3),n.fillStyle="#1c140c",n.fillRect(s+4,7,4,3);return ot(t)}function Zu(){let[i,e]=st(18,18);return e.fillStyle="#4c4c58",e.beginPath(),e.arc(9,9,8,0,7),e.fill(),e.fillStyle="#7c7c8c",e.beginPath(),e.arc(8,8,5.5,0,7),e.fill(),e.fillStyle="#b0b0c0",e.fillRect(5,5,3,2),ot(On(i))}function ir(i,e,t){let[n,s]=st(12,12);s.fillStyle=i,s.fillRect(0,1,12,10),s.fillRect(1,0,10,12),s.fillStyle=e,s.fillRect(1,1,10,2),s.fillStyle="rgba(0,0,0,0.25)",s.fillRect(1,9,10,2);let r=Ku[t];s.fillStyle="#ffffff";for(let a=0;a<5;a++)for(let o=0;o<3;o++)r[a][o]==="1"&&s.fillRect(3+o*2,1+a*2,2,2);return ot(n)}function Qc(){let e={jeep:[To("#a8e870","#58b840","#2c7c24"),To("#a0d0ff","#4890f0","#2050a8")].map(t=>Xc(vs(Yc,t))),jeepWhite:Xc(vs(Yc,Object.fromEntries(Object.keys(To("","","")).map(t=>[t,"#ffffff"])))),soldier:Jc.map(t=>ot(vs(t,$c))),soldierHit:Jc.map(t=>ot(vs(t,Object.fromEntries(Object.keys($c).map(n=>[n,"#ffffff"]))),"#ffffff")),pow:Zc.map(t=>ot(vs(t,Kc))),powFlash:Zc.map(t=>ot(vs(t,{...Kc,w:"#ffe14a",b:"#ff9a2a"}))),tree:jc(!0),bush:jc(!1),bunker:Ou(),tankBody:zu(),tankTop:Uu(),prison:Bu(),fortress:Vu(),heli:Hu(),rock:Wu,cactus:Gu(),drybush:qu(),pine:Xu(),snowbush:Yu(),warMachine:$u(),bossGun:Zu(),items:[ir("#e8702c","#f8a860","R"),ir("#2c8ce8","#78c0ff","P"),ir("#d83048","#f87890","H"),ir("#7c44c8","#b088f0","B"),ir("#d8a81c","#f8e060","W")]};return e.fortressSnow=Ju(e.fortress),e}var pt,Yc,To,Jc,$c,Zc,Kc,Ku,eh=qt(()=>{pt="#1c140c";Yc=["......dbbbbbbbbd......","....kkdhhhhhhhhdkk....","...kkkbhhhhhhhhbkkk...","...kkkbhhhhhhhhbkkk...","...kkkbbbbbbbbbbkkk...","....kkdbbbMMbbbdkk....","......dbbbMMbbbd......","......dwwwMMwwwd......","......dwggMMwwwd......","......dwwwMMwwwd......","......rrrrMMrrrr......","......bsssmmsssb......","......bsssmmsssb......","......bssssssssb......","......bbbbbbbbbb......","......bddddddddb......","...kkkbbbbbbbbbbkkk...","...kkkbddddddddbkkk...","...kkkbbbbbbbbbbkkk...","....kkbbbbbbbbbbkk....","......dddddddddd......",".......m......m......."],To=(i,e,t)=>({h:i,b:e,d:t,k:"#2c2c34",w:"#78c8f0",g:"#e8fcff",r:"#5c5c64",s:"#a85a2c",m:"#3c3c44",M:"#7c7c88"}),Jc=[["...hhh...","..hHHHh..",".hhhhhhh.",".ssesess.","..sssss..",".uuUuuuu.","suuUuuuus","s.uuuuu.s","..bbbbb..","..uu.uu..","..kk.kk.."],["...hhh...","..hHHHh..",".hhhhhhh.",".ssesess.","..sssss..",".uuUuuuu.","suuUuuuus","s.uuuuu.s","..bbbbb..",".uu...uu.",".kk...kk."]],$c={h:"#c83828",H:"#f87858",s:"#f8c088",e:"#201810",u:"#6c64a8",U:"#9c94d8",b:"#3c2c50",k:"#302020"},Zc=[["..bbbbb..",".bbbbbbb.",".sssssss.",".ssesess.","..sssss..","s.wwwww.s","swwwwwwws","..wwwww..","..ppppp..","..pp.pp..","..kk.kk.."],["s.bbbbb.s","s.bbbbb.s","s.sssss.s","s.sesess.","s.sssss.s","swwwwwwws",".wwwwwww.","..wwwww..","..ppppp..",".pp...pp.",".kk...kk."]],Kc={b:"#6c3c1c",s:"#f8c088",e:"#201810",w:"#f8f8f0",p:"#4c70c8",k:"#302020"};Ku={R:["110","101","110","101","101"],P:["111","101","111","100","100"],B:["110","101","110","101","110"],W:["101","101","101","111","101"],H:["000","101","111","111","010"]}});var Gr={};ho(Gr,{clearParticles:()=>Fo,drawBullet:()=>dd,drawEnemy:()=>ld,drawHelis:()=>od,drawHpBar:()=>md,drawItem:()=>hd,drawJeep:()=>ud,drawParticles:()=>No,drawPow:()=>cd,drawTerrain:()=>ad,initRender:()=>Po,itemIcon:()=>fd,resetTerrain:()=>Co,spawnExplosion:()=>Lo,spawnSpark:()=>Io,spawnSplat:()=>ko,spawnText:()=>Do});function Co(){Ui.clear(),Wr=-1}function Qu(i,e){return xe.roads.some(t=>i>=t.x&&i<t.x+t.w&&e>=t.y0&&e<t.y1)}function Ms(i,e){let t=i*tt+8,n=e*tt+8;return n>=420&&(ju(i,e)||Qu(t,n))}function ed(i,e,t,n,s){let r=Pe(n,s);i.fillStyle=Pe(n>>2,s>>2)>.6?$e.grass2:$e.grass,i.fillRect(e,t,tt,tt);let a=1+(r*3|0);for(let o=0;o<a;o++){let l=Pe(n*7+o,s)*12|0,c=Pe(n,s*5+o)*12|0;i.fillStyle=$e.grassDk,i.fillRect(e+l,t+c+2,1,2),i.fillRect(e+l+2,t+c+2,1,2),i.fillRect(e+l+1,t+c+3,1,1),i.fillStyle=$e.grassLt,i.fillRect(e+l+1,t+c+1,1,2)}if(r>.9){let o=4+(r*97|0)%8,l=4+(r*53|0)%8,c=$e.flowers[(r*1e3|0)%3];i.fillStyle=c,i.fillRect(e+o-1,t+l,3,1),i.fillRect(e+o,t+l-1,1,3),xe.theme===0&&(i.fillStyle="#f8a020",i.fillRect(e+o,t+l,1,1))}}function td(i,e,t,n,s){i.fillStyle=$e.dirt,i.fillRect(e,t,tt,tt);for(let a=0;a<3;a++){let l=Pe(n*3+a,s*7)*14|0,c=Pe(n,s*3+a)*14|0;i.fillStyle=$e.dirtDk,i.fillRect(e+l,t+c+1,2,1),i.fillStyle=$e.dirtLt,i.fillRect(e+l,t+c,2,1)}let r=(a,o)=>{for(let l=0;l<a;l+=2)o(l,Pe(n*13+l,s*11)>.5?2:1)};Ms(n,s-1)||r(tt,(a,o)=>{i.fillStyle=$e.grass,i.fillRect(e+a,t,2,o),i.fillStyle=$e.edge,i.fillRect(e+a,t+o,2,1)}),Ms(n,s+1)||r(tt,(a,o)=>{i.fillStyle=$e.dirtDk,i.fillRect(e+a,t+tt-o-1,2,1),i.fillStyle=$e.grass,i.fillRect(e+a,t+tt-o,2,o)}),Ms(n-1,s)||r(tt,(a,o)=>{i.fillStyle=$e.grass,i.fillRect(e,t+a,o,2),i.fillStyle=$e.edge,i.fillRect(e+o,t+a,1,2)}),Ms(n+1,s)||r(tt,(a,o)=>{i.fillStyle=$e.edge,i.fillRect(e+tt-o-1,t+a,1,2),i.fillStyle=$e.grass,i.fillRect(e+tt-o,t+a,o,2)})}function nd(i,e,t,n,s){i.fillStyle=$e.stone,i.fillRect(e,t,tt,tt),i.fillStyle=$e.stoneLt,i.fillRect(e,t,tt-1,1),i.fillRect(e,t,1,tt-1),i.fillStyle=$e.stoneDk,i.fillRect(e,t+tt-1,tt,1),i.fillRect(e+tt-1,t,1,tt),Pe(n,s)>.8&&(i.fillStyle=$e.stoneDk,i.fillRect(e+5,t+6,3,1),i.fillRect(e+7,t+7,1,2))}function id(i,e,t){let[n,s]=st(e.w,e.h+4);for(let r=0;r<2;r++){let a=r*5,o=r?3:0;for(let l=-o;l<e.w;l+=7)s.fillStyle="#b8945c",s.fillRect(l,a+1,7,6),s.fillStyle="#e8cc8c",s.fillRect(l,a+1,6,2),s.fillStyle="#86683c",s.fillRect(l,a+6,7,1),s.fillRect(l+6,a+1,1,6)}i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(e.x+2,t+e.h+2,e.w,3),i.drawImage(ot(n),e.x-1,t-3)}function sd(i,e,t){let n=[],s=0;for(let a of[...e.bridges].sort((o,l)=>o.x-l.x))a.x>s&&n.push([s,a.x]),s=a.x+a.w;s<360&&n.push([s,360]);let r=e.kind==="ridge"?12:9;for(let[a,o]of n){let l=o-a,[c,h]=st(l,e.h+4);if(e.kind==="ridge"){h.fillStyle="#b87440",h.fillRect(0,0,l,e.h-r);for(let u=0;u<l;u+=6)for(let f=2;f<e.h-r-2;f+=7){let d=Pe(a+u,e.y+f);h.fillStyle=d>.5?"#d89a5c":"#9c5c30",h.fillRect(u+(d*3|0),f,4,2)}h.fillStyle="#e8b478",h.fillRect(0,0,l,2),h.fillStyle="#8c4c24",h.fillRect(0,e.h-r,l,r);for(let u=1;u<l;u+=4)h.fillStyle="#6c3418",h.fillRect(u+(Pe(u,e.y)*2|0),e.h-r+1,1,r-2);h.fillStyle="rgba(0,0,0,0.3)",h.fillRect(0,e.h,l,4)}else{h.fillStyle="#a8b0bc",h.fillRect(0,0,l,e.h-r),h.fillStyle="#d0d8e4",h.fillRect(0,0,l,2),h.fillStyle="#ffffff",h.fillRect(0,0,l,1),h.fillStyle="#6c7480",h.fillRect(0,e.h-r,l,r);for(let u=0;u<l;u+=16)h.fillStyle="#4c5460",h.fillRect(u,e.h-r,1,r),h.fillStyle="#8c94a0",h.fillRect(u+1,e.h-r,14,1);for(let u of[a>0?0:-1,o<360?l-6:-1])if(!(u<0))for(let f=0;f<e.h;f+=4)h.fillStyle=f/4%2?"#1c140c":"#f8c830",h.fillRect(u,f,6,4);h.fillStyle="rgba(0,0,0,0.3)",h.fillRect(0,e.h,l,4)}i.drawImage(ot(c),a-1,t-1)}}function rd(i){let[e,t]=st(360,fn),n=i*fn;for(let s=0;s<fn;s+=tt)for(let r=0;r<360;r+=tt){let a=r/tt,o=(n+s)/tt;n+s<420?nd(t,r,s,a,o):Ms(a,o)?td(t,r,s,a,o):ed(t,r,s,a,o)}for(let s of xe.roads){let r=Math.max(s.y0,n),a=Math.min(s.y1,n+fn);for(let o=r;o<a;o+=4)for(let[l,c]of[[s.x+6,0],[s.x+s.w-10,2]])Ms(Math.floor(l/tt),Math.floor(o/tt))&&(t.fillStyle=$e.dirtDk,t.fillRect(l,o-n+c,2,2))}for(let s of xe.rivers){if(s.y+s.h<n-12||s.y>n+fn+12)continue;let r=s.y-n;if(s.kind==="ridge"||s.kind==="wall"){sd(t,s,r);continue}t.fillStyle=$e.cliff,t.fillRect(0,r-7,360,7);for(let a=0;a<360;a+=5)t.fillStyle=$e.cliffDk,t.fillRect(a+(Pe(a,s.y)*3|0),r-6,1,6);t.fillStyle=$e.edge,t.fillRect(0,r-8,360,1),t.fillStyle=pt,t.fillRect(0,r-1,360,1),t.fillStyle=$e.water,t.fillRect(0,r,360,s.h),t.fillStyle=$e.waterDk,t.fillRect(0,r,360,4);for(let a=0;a<60;a++){let o=Pe(a,s.y)*360|0,l=r+6+(Pe(s.y,a)*(s.h-12)|0);t.fillStyle=$e.waterLt,t.fillRect(o,l,3,1),t.fillRect(o+3,l-1,3,1)}t.fillStyle=$e.foam;for(let a=0;a<360;a+=4)t.fillRect(a,r+s.h-2-a/4%2,3,1);t.fillStyle=$e.sand,t.fillRect(0,r+s.h,360,4),t.fillStyle=$e.dirtDk,t.fillRect(0,r+s.h+4,360,1);for(let a of s.bridges){let[o,l]=st(a.w+6,s.h+18);l.fillStyle="#6c4020",l.fillRect(3,0,a.w,s.h+18);for(let c=1;c<s.h+18;c+=4)l.fillStyle="#b87c44",l.fillRect(3,c,a.w,3),l.fillStyle="#d89c5c",l.fillRect(3,c,a.w,1);l.fillStyle="#4c2c14",l.fillRect(0,0,3,s.h+18),l.fillRect(a.w+3,0,3,s.h+18),l.fillStyle="#8c5c30";for(let c=0;c<s.h+18;c+=10)l.fillRect(0,c,3,3),l.fillRect(a.w+3,c,3,3);t.fillStyle="rgba(0,0,40,0.35)",t.fillRect(a.x+2,r+2,a.w+6,s.h),t.drawImage(ot(o),a.x-4,r-10)}}for(let s of xe.helipads){if(s.y<n-30||s.y>n+fn+30)continue;let r=s.y-n,[a,o]=st(44,46);o.fillStyle="#7c786c",o.fillRect(0,2,44,44),o.fillStyle="#a8a49c",o.fillRect(0,0,44,42),o.fillStyle="#c8c4bc",o.fillRect(0,0,44,2),o.strokeStyle="#f8d030",o.lineWidth=2,o.beginPath(),o.arc(22,21,17,0,7),o.stroke(),o.fillStyle="#f8f8f0",o.fillRect(14,12,3,18),o.fillRect(27,12,3,18),o.fillRect(17,19,10,3),t.drawImage(ot(a),s.x-23,r-22)}for(let s of xe.blockers){if(s.kind==="water"||s.y+s.h<n-8||s.y>n+fn+8)continue;let r=s.y-n;s.kind==="sandbag"?id(t,s,r):(t.fillStyle="rgba(0,0,0,0.25)",t.beginPath(),t.ellipse(s.x+s.w/2+3,r+s.h+1,s.w/2,4,0,0,7),t.fill(),t.drawImage(mt.rock(s.w,s.h),s.x-1,r-3))}for(let s of xe.deco){if(s.y<n-40||s.y>n+fn+40)continue;let r=mt[s.kind]||mt.tree,a=Math.round(s.x),o=Math.round(s.y-n);t.fillStyle="rgba(0,30,0,0.3)",t.beginPath(),t.ellipse(a+3,o,r.width/2-2,4,0,0,7),t.fill(),t.drawImage(r,a-(r.width>>1),o-r.height+2)}return e}function Po(){mt=Qc()}function ad(i,e){Wr!==xe.theme&&(Ui.clear(),Wr=xe.theme,$e=Ao[Wr]||Ao[0]);let t=Math.floor(e/fn),n=Math.floor((e+240)/fn);for(let s=t;s<=n;s++){if(s<0||s*fn>je)continue;let r=Ui.get(s);r||(r=rd(s),Ui.set(s,r),Ui.size>12&&Ui.delete(Ui.keys().next().value)),i.drawImage(r,0,Math.round(s*fn-e))}}function Ro(i){let e=th.get(i);if(!e){let[t,n]=st(i.width,i.height);n.drawImage(i,0,0),n.globalCompositeOperation="source-in",n.fillStyle="#fff",n.fillRect(0,0,i.width,i.height),e=t,th.set(i,e)}return e}function Eo(i,e,t,n,s,r,a){let o=e+Math.cos(n)*s,l=t+Math.sin(n)*s;i.lineCap="butt",i.strokeStyle=pt,i.lineWidth=r+2,i.beginPath(),i.moveTo(e,t),i.lineTo(o+Math.cos(n),l+Math.sin(n)),i.stroke(),i.strokeStyle=a,i.lineWidth=r,i.beginPath(),i.moveTo(e,t),i.lineTo(o,l),i.stroke()}function od(i,e,t,n){xe.helipads.forEach((s,r)=>{let a=s.y-e;if(a<-60||a>290)return;let o=n[r]||0,l=o>0?Math.sin((1-o/2.4)*Math.PI)*26:0,c=s.x,h=a-2-l;$n(i,c+2+l*.3,a+6,10-l*.1,5),bs(i,mt.heli,c,h+4);let u=o>0,f=t*(u?.035:.006);i.fillStyle=u?"rgba(40,40,48,0.25)":"rgba(40,40,48,0.12)",i.beginPath(),i.arc(c,h-2,19,0,7),i.fill(),i.lineCap="round";for(let d=0;d<2;d++){let y=f+d*Math.PI/2,m=Math.cos(y),p=Math.sin(y);i.strokeStyle=pt,i.lineWidth=3,i.beginPath(),i.moveTo(c-m*19,h-2-p*19),i.lineTo(c+m*19,h-2+p*19),i.stroke(),i.strokeStyle="#5c5c68",i.lineWidth=1,i.beginPath(),i.moveTo(c-m*18,h-2-p*18),i.lineTo(c+m*18,h-2+p*18),i.stroke()}i.fillStyle=pt,i.fillRect(Math.round(c)-2,Math.round(h)-4,4,4),i.fillStyle="#a8a8b0",i.fillRect(Math.round(c)-1,Math.round(h)-3,2,2)})}function ld(i,e,t,n){let[s,r,a,o,l,c,h,u]=e,f=Math.round(a),d=Math.round(o-t);if(!(d<-110||d>300))switch(r){case q.soldier:{let y=(n/150+s|0)%2;$n(i,f,d+5,4,2);let m=(h?mt.soldierHit:mt.soldier)[y];i.save(),i.translate(f,d),Math.cos(l)<0&&i.scale(-1,1),i.drawImage(m,-Math.floor(m.width/2),-8),i.restore();break}case q.bossTurret:if(xe.theme===1){bs(i,mt.bossGun,f,d,h),Eo(i,f,d,l,13,4,"#3c3c48"),i.fillStyle=h?"#fff":"#f84838",i.fillRect(f-1,d-1,3,3);break}case q.turret:{$n(i,f+2,d+7,11,4),bs(i,mt.bunker,f,d,h),Eo(i,f,d-1,l,12,3,r===q.bossTurret?"#a84030":"#6c6c78"),i.fillStyle=pt,i.fillRect(f-3,d-4,6,6),i.fillStyle=h?"#fff":r===q.bossTurret?"#d85c44":"#9c9cac",i.fillRect(f-2,d-3,4,4);break}case q.tank:{$n(i,f+2,d+11,13,4),bs(i,mt.tankBody,f,d,h),Eo(i,f,d,l,15,3,"#5c2418"),bs(i,mt.tankTop,f,d,h);break}case q.prison:{$n(i,f+2,d+14,18,4),bs(i,mt.prison,f,d+1,h),(n/280+s|0)%2&&(i.fillStyle="#f8c088",i.fillRect(f-3,d+6,2,2),i.fillRect(f+2,d+5,2,2));break}case q.boss2:{let y=mt.warMachine;i.fillStyle="rgba(0,0,0,0.3)",i.fillRect(f-58,d+28,120,5),i.drawImage(h?Ro(y):y,f-(y.width>>1),d-30);let m=(n/90|0)%2;i.fillStyle="#7c7c88";for(let v of[f-60,f+43])for(let M=-26+m*2;M<28;M+=4)i.fillRect(v+3,d+M,12,1);let p=(Math.sin(n/140)+1)/2;i.fillStyle=pt,i.beginPath(),i.arc(f,d-6,9,0,7),i.fill(),i.fillStyle=`rgb(${190+p*60|0},${30+p*50|0},40)`,i.beginPath(),i.arc(f,d-6,7,0,7),i.fill(),u&&(i.strokeStyle=`rgba(140,210,255,${.45+p*.45})`,i.lineWidth=2,i.beginPath(),i.arc(f,d-6,12+p*2,0,7),i.stroke());break}case q.boss:{let y=xe.theme===2?mt.fortressSnow:mt.fortress;i.fillStyle="rgba(0,0,0,0.3)",i.fillRect(f-y.width/2+4,d+50,y.width-4,6),i.drawImage(h?Ro(y):y,f-(y.width>>1),d-46);let m=(Math.sin(n/140)+1)/2,p=d-12;i.fillStyle=pt,i.beginPath(),i.arc(f,p,12,0,7),i.fill(),i.fillStyle=`rgb(${190+m*60|0},${30+m*50|0},40)`,i.beginPath(),i.arc(f,p,10,0,7),i.fill(),i.fillStyle="#f8c0a8",i.fillRect(f-5,p-6,4,3),u&&(i.strokeStyle=`rgba(140,210,255,${.45+m*.45})`,i.lineWidth=2,i.beginPath(),i.arc(f,p,16+m*2,0,7),i.stroke());break}}}function cd(i,e,t,n){let[s,r,a,o]=e,l=(n/140+s|0)%2,c=o&&(n/120|0)%2?mt.powFlash[l]:mt.pow[l],h=a-t;$n(i,r,h+5,4,2),i.drawImage(c,Math.round(r)-(c.width>>1),Math.round(h)-8)}function hd(i,e,t,n){let[s,r,a,o,l]=e;if(l&&(n/100|0)%2)return;let c=Math.round(Math.sin(n/200+s)*1.5),h=o-t;$n(i,a,h+6,5,2);let u=mt.items[r]||mt.items[0];i.drawImage(u,Math.round(a-u.width/2),Math.round(h-u.height/2-2+c)),(n/60+s*7|0)%14===0&&(i.fillStyle="#fff",i.fillRect(Math.round(a)+3,Math.round(h)-7+c,2,2))}function fd(i){return mt.items[i]||mt.items[0]}function ud(i,e,t,n,s,r,a){let o=n-r;$n(i,t+3,o+5,12,8);let l=16,c=s+Math.PI/2,h=(Math.round(c/(Math.PI*2/l))%l+l)%l,f=(a.invuln&&(performance.now()/90|0)%2?mt.jeepWhite:mt.jeep[e])[h];if(i.drawImage(f,Math.round(t-f.width/2),Math.round(o-f.height/2)),a.shield){let d=performance.now()/120,y=16+Math.sin(d)*1.2;i.strokeStyle=a.shield<=2&&(d|0)%2?"rgba(160,220,255,0.3)":"rgba(160,220,255,0.85)",i.lineWidth=1.5,i.beginPath(),i.arc(Math.round(t),Math.round(o),y,0,7),i.stroke(),i.fillStyle="rgba(160,220,255,0.15)",i.fill()}if(a.carry>0){let d=Math.round(t)-6,y=Math.round(o)-24;i.fillStyle=pt,i.fillRect(d-1,y-1,14,9),i.fillStyle="#f8f8f0",i.fillRect(d,y,12,7),i.fillStyle=pt,i.fillRect(d+5,y+7,2,2),i.font="bold 7px monospace",i.textAlign="center",i.fillText(a.carry,Math.round(t),y+6)}a.self&&(i.fillStyle=pt,i.fillRect(Math.round(t)-3,Math.round(o)+15,7,4),i.fillStyle=e===0?"#a8e870":"#a0d0ff",i.fillRect(Math.round(t)-2,Math.round(o)+16,5,2))}function dd(i,e,t){let[,n,s,r,a,o=0]=e,l=Math.round(s),c=Math.round(r-t);switch(n){case Se.mg:i.fillStyle=pt,i.fillRect(l-2,c-2,4,4),i.fillStyle="#fff070",i.fillRect(l-1,c-1,2,2);break;case Se.big:i.fillStyle=pt,i.beginPath(),i.arc(l,c,3.5,0,7),i.fill(),i.fillStyle="#f8a020",i.beginPath(),i.arc(l,c,2.5,0,7),i.fill(),i.fillStyle="#fff8c0",i.fillRect(l-1,c-1,2,2);break;case Se.grenade:{let h=Math.round(a);$n(i,l,c+1,2,1),i.fillStyle=pt,i.fillRect(l-3,c-h-3,6,6),i.fillStyle="#4c6c2c",i.fillRect(l-2,c-h-2,4,4),i.fillStyle="#8cc05c",i.fillRect(l-2,c-h-2,2,2);break}case Se.missile:{let h=Math.cos(o),u=Math.sin(o);i.fillStyle="rgba(255,190,90,0.7)",i.fillRect(Math.round(l-h*6)-1,Math.round(c-u*6)-1,3,3),i.strokeStyle=pt,i.lineWidth=4,i.beginPath(),i.moveTo(l-h*4,c-u*4),i.lineTo(l+h*3,c+u*3),i.stroke(),i.strokeStyle="#f8f8f0",i.lineWidth=2,i.beginPath(),i.moveTo(l-h*3,c-u*3),i.lineTo(l+h*2,c+u*2),i.stroke(),i.fillStyle="#f84838",i.fillRect(Math.round(l+h*2),Math.round(c+u*2),1,1);break}case Se.homing:{let h=Math.cos(o),u=Math.sin(o);i.fillStyle="rgba(255,200,120,0.6)",i.fillRect(Math.round(l-h*6)-1,Math.round(c-u*6)-1,2,2),i.fillStyle="rgba(200,200,200,0.4)",i.fillRect(Math.round(l-h*10)-1,Math.round(c-u*10)-1,2,2),i.strokeStyle=pt,i.lineWidth=4,i.beginPath(),i.moveTo(l-h*4,c-u*4),i.lineTo(l+h*3,c+u*3),i.stroke(),i.strokeStyle="#78e0a8",i.lineWidth=2,i.beginPath(),i.moveTo(l-h*3,c-u*3),i.lineTo(l+h*2,c+u*2),i.stroke(),i.fillStyle="#f84838",i.fillRect(Math.round(l+h*2),Math.round(c+u*2),1,1);break}case Se.laser:{let h=Math.cos(o),u=Math.sin(o);i.lineCap="round",i.strokeStyle="rgba(80,220,255,0.45)",i.lineWidth=5,i.beginPath(),i.moveTo(l-h*18,c-u*18),i.lineTo(l,c),i.stroke(),i.strokeStyle="#d8fcff",i.lineWidth=2,i.beginPath(),i.moveTo(l-h*16,c-u*16),i.lineTo(l,c),i.stroke();break}case Se.ebullet:i.fillStyle=pt,i.beginPath(),i.arc(l,c,3,0,7),i.fill(),i.fillStyle="#f84838",i.beginPath(),i.arc(l,c,2,0,7),i.fill(),i.fillStyle="#fff",i.fillRect(l-1,c-1,1,1);break;case Se.eshell:i.fillStyle=pt,i.beginPath(),i.arc(l,c,4.5,0,7),i.fill(),i.fillStyle="#f8a020",i.beginPath(),i.arc(l,c,3.5,0,7),i.fill(),i.fillStyle="#f84838",i.beginPath(),i.arc(l+1,c+1,2,0,7),i.fill(),i.fillStyle="#fff",i.fillRect(l-2,c-2,2,1);break}}function Lo(i,e,t){let n=[4,8,12,30][t],s=[30,50,70,110][t],r=[4,6,8,10][t];for(let a=0;a<n;a++){let o=Math.random()*7,l=s*(.3+Math.random()*.7);Mn.push({x:i,y:e,vx:Math.cos(o)*l,vy:Math.sin(o)*l-10,life:.35+Math.random()*(.25+t*.15),t:0,kind:"puff",s:r*(.6+Math.random()*.6)})}if(Mn.push({x:i,y:e,vx:0,vy:0,life:.18,t:0,kind:"flash",s:[10,16,22,50][t]}),t>=1)for(let a=0;a<4+t*3;a++){let o=Math.random()*7,l=60+Math.random()*60;Mn.push({x:i,y:e,vx:Math.cos(o)*l,vy:Math.sin(o)*l-40,g:160,life:.6,t:0,kind:"debris",s:2})}}function Io(i,e){for(let t=0;t<3;t++){let n=Math.random()*7;Mn.push({x:i,y:e,vx:Math.cos(n)*50,vy:Math.sin(n)*50,life:.15,t:0,kind:"spark",s:1})}}function Do(i,e,t,n="#fff"){Mn.push({x:i,y:e,vx:0,vy:-22,life:1.1,t:0,kind:"text",text:t,color:n})}function ko(i,e){Mn.push({x:i,y:e,vx:0,vy:0,life:.5,t:0,kind:"stars",s:1}),Mn.push({x:i,y:e,vx:0,vy:0,life:6,t:0,kind:"splat",s:1})}function No(i,e,t){for(let n=Mn.length-1;n>=0;n--){let s=Mn[n];if(s.t+=t,s.t>=s.life){Mn.splice(n,1);continue}s.g&&(s.vy+=s.g*t),s.x+=s.vx*t,s.y+=s.vy*t,s.g||(s.vx*=.9,s.vy*=.9);let r=s.t/s.life,a=Math.round(s.x),o=Math.round(s.y-e);if(s.kind==="puff"){let l=Math.max(1,s.s*(r<.2?.6+r*2:1-(r-.2)*.6)),c=r<.25?"#fff8c0":r<.5?"#f8b030":r<.75?"#e86030":"#8c8480";i.fillStyle=pt,i.beginPath(),i.arc(a,o,l+1,0,7),i.fill(),i.fillStyle=c,i.beginPath(),i.arc(a,o,l,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.45)",i.fillRect(a-(l>>1),o-(l>>1),Math.max(1,l>>1),Math.max(1,l>>2))}else if(s.kind==="flash")i.fillStyle=`rgba(255,250,220,${1-r})`,i.beginPath(),i.arc(a,o,s.s*(.5+r),0,7),i.fill();else if(s.kind==="debris")i.fillStyle=pt,i.fillRect(a-1,o-1,3,3),i.fillStyle="#8c5c30",i.fillRect(a,o,1,1);else if(s.kind==="spark")i.fillStyle="#fff6a0",i.fillRect(a,o,2,2);else if(s.kind==="splat")i.fillStyle=`rgba(90,60,30,${.5*(1-r)})`,i.beginPath(),i.ellipse(a,o+2,5,2,0,0,7),i.fill();else if(s.kind==="stars")for(let l=0;l<3;l++){let c=l*2.1+r*6,h=a+Math.cos(c)*6,u=o-6-r*6+Math.sin(c)*2;i.fillStyle="#f8e048",i.fillRect(Math.round(h)-1,Math.round(u),3,1),i.fillRect(Math.round(h),Math.round(u)-1,1,3)}else if(s.kind==="text"){i.globalAlpha=1-r*r,i.font="bold 9px monospace",i.textAlign="center",i.fillStyle=pt;for(let[l,c]of[[-1,0],[1,0],[0,-1],[0,1],[1,1]])i.fillText(s.text,a+l,o+c);i.fillStyle=s.color,i.fillText(s.text,a,o),i.globalAlpha=1}}}function Fo(){Mn.length=0}function md(i,e,t){let n=pd[e[1]];if(!n)return;let[s,r]=n,a=Math.max(0,Math.min(1,e[5])),o=Math.round(e[2]-s/2),l=Math.round(e[3]-t-r);l<-4||l>240||(i.fillStyle=pt,i.fillRect(o-1,l-1,s+2,4),i.fillStyle="#4c1c14",i.fillRect(o,l,s,2),i.fillStyle=a>.55?"#58d848":a>.28?"#f8d030":"#f84838",i.fillRect(o,l,Math.max(1,Math.round(s*a)),2))}var fn,tt,Ui,mt,Ao,$e,Wr,ju,th,bs,$n,Mn,pd,Oo=qt(()=>{Nn();ys();mi();zi();eh();fn=256,tt=16,Ui=new Map,mt=null,Ao=[{grass:"#58b848",grass2:"#5cbe4c",grassDk:"#3c9438",grassLt:"#88d860",dirt:"#d8a860",dirtDk:"#b07c44",dirtLt:"#ecc684",edge:"#2c7c2c",water:"#3070d8",waterDk:"#2050b0",waterLt:"#88c8f8",foam:"#e8f8ff",cliff:"#a06830",cliffDk:"#704018",sand:"#e8d098",stone:"#aca494",stoneLt:"#c8c0b0",stoneDk:"#847c6c",flowers:["#f8f8f0","#f8e048","#f87890"]},{grass:"#e8c078",grass2:"#e4b86c",grassDk:"#c4944c",grassLt:"#f8dca0",dirt:"#c8905c",dirtDk:"#a06c3c",dirtLt:"#dcac78",edge:"#a87840",water:"#3488c0",waterDk:"#24689c",waterLt:"#98d8f0",foam:"#f0fcff",cliff:"#b06c38",cliffDk:"#7c4420",sand:"#f0d8a0",stone:"#c8a878",stoneLt:"#e0c494",stoneDk:"#a0845c",flowers:["#a89070","#8c7458","#f8f0d8"]},{grass:"#e8f0f8",grass2:"#dfe9f5",grassDk:"#a8bcd8",grassLt:"#ffffff",dirt:"#c8d4e2",dirtDk:"#a4b2c6",dirtLt:"#dce6f0",edge:"#b4c2d6",water:"#2858a8",waterDk:"#1c4084",waterLt:"#c8e8ff",foam:"#ffffff",cliff:"#8898b0",cliffDk:"#5c6c88",sand:"#d8e4f0",stone:"#8c94a0",stoneLt:"#a8b0bc",stoneDk:"#6c7480",flowers:["#c8e0ff","#ffffff","#a8c8f0"]}],$e=Ao[0],Wr=-1;ju=(i,e)=>Pe((i>>1)+311,(e>>1)+17)+Pe(i+5,e+9)*.25>1.1;th=new Map;bs=(i,e,t,n,s)=>i.drawImage(s?Ro(e):e,Math.round(t-e.width/2),Math.round(n-e.height/2)),$n=(i,e,t,n,s)=>{i.fillStyle="rgba(0,20,0,0.32)",i.beginPath(),i.ellipse(Math.round(e),Math.round(t),n,s,0,0,7),i.fill()};Mn=[];pd={[q.soldier]:[10,13],[q.turret]:[16,15],[q.bossTurret]:[16,15],[q.tank]:[20,17],[q.prison]:[24,18]}});var Wo={};ho(Wo,{clearParticles:()=>Fo,drawBullet:()=>Rd,drawEnemy:()=>Md,drawHelis:()=>bd,drawHpBar:()=>Pd,drawItem:()=>Sd,drawJeep:()=>Ad,drawParticles:()=>No,drawPow:()=>wd,drawTerrain:()=>vd,initRender:()=>rh,itemIcon:()=>Td,resetTerrain:()=>Ho,setScale:()=>Vo,setStyle:()=>Bo,spawnExplosion:()=>Lo,spawnSpark:()=>Io,spawnSplat:()=>ko,spawnText:()=>Do});function Bo(i){i!==Tn&&(Tn=i,Zn.clear(),Xr=-1)}function rh(){}function Vo(i){i!==un&&(un=i,Zn.clear())}function Ho(){Zn.clear(),Xr=-1}function wn(i,e,t,n,s,r){r=Math.min(r,n/2,s/2),i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function gd(i,e){let t=nh.get(e);if(!t){t=document.createElement("canvas"),t.width=t.height=16;let s=t.getContext("2d");s.strokeStyle=e,s.lineWidth=2.2,s.lineCap="round";for(let r=-16;r<32;r+=5)s.beginPath(),s.moveTo(r,16),s.lineTo(r+16,0),s.stroke();nh.set(e,t)}let n=i.createPattern(t,"repeat");try{n.setTransform(new DOMMatrix([1/un,0,0,1/un,0,0]))}catch{}return n}function bt(i,e,t=!0){let n=typeof e!="string"||e.startsWith("rgb");Tn==="doodle"&&!n&&e!=="#fff"&&e!=="#ffffff"?(i.save(),i.globalAlpha=.3,i.fillStyle=e,i.fill(),i.restore(),i.fillStyle=gd(i,e),i.fill()):(i.fillStyle=e,i.fill()),t&&!(typeof e=="string"&&e.startsWith("rgba"))&&yd(i)}function yd(i){i.save(),i.strokeStyle=Sn[Tn],i.lineJoin="round",i.lineCap="round",Tn==="doodle"?(i.lineWidth=.8,i.stroke(),i.translate(.45,-.35),i.globalAlpha=.55,i.stroke()):(i.lineWidth=1.1,i.stroke()),i.restore()}function ah(i,e){if(!i.startsWith("#")||!e.startsWith("#")||i.length<7||e.length<7)return i.startsWith("#")?i:e;let t=ih(i),n=ih(e);return"#"+t.map((s,r)=>Math.round(s*.55+n[r]*.45).toString(16).padStart(2,"0")).join("")}function Bi(i,e,t,n,s){return ah(n,s)}function ws(i,e,t,n,s,r){return ah(s.startsWith("rgb(")?"#ff6a50":s,r)}function oh(i,e,t,n){if(n==="tree")Ut(i,e+3,t,11,4.5),be(i,e-2.5,t-10,5,10,2,"#8a5a32"),Te(i,e,t-17,11,"#3f9a3e"),Te(i,e-4,t-19,8,"#55b24c"),Te(i,e+4,t-15,7,"#3a8c38"),Te(i,e-5,t-22,3.5,"rgba(255,255,255,0.25)");else if(n==="bush")Ut(i,e+2,t,8,3),Te(i,e-3,t-5,5,"#4ea446"),Te(i,e+3,t-5,5,"#459a3e"),Te(i,e,t-7,5.5,"#5cb852");else if(n==="cactus")Ut(i,e+2,t,6,2.5),be(i,e-3,t-22,6,22,3,"#3ea25a"),be(i,e-9,t-16,4,9,2,"#3ea25a"),be(i,e-9,t-9,7,3.5,1.7,"#3ea25a"),be(i,e+5,t-19,4,9,2,"#3ea25a"),be(i,e+2,t-12,7,3.5,1.7,"#3ea25a"),be(i,e-1.5,t-21,1.5,19,.7,"rgba(255,255,255,0.3)"),Te(i,e,t-23,2,"#ff7fa0");else if(n==="drybush"){Ut(i,e+2,t,7,2.5),i.strokeStyle="#a77a44",i.lineWidth=1.2,i.lineCap="round";for(let s=0;s<7;s++){let r=-Math.PI+s*Math.PI/6;i.beginPath(),i.moveTo(e,t-1),i.lineTo(e+Math.cos(r)*7,t-2+Math.sin(r)*6),i.stroke()}}else if(n==="pine"){Ut(i,e+3,t,9,3.5),be(i,e-2,t-7,4,7,1.5,"#7a4e2c");for(let[s,r,a]of[[-12,10,10],[-19,8,9],[-25,6,8]])i.beginPath(),i.moveTo(e,t+s-a),i.lineTo(e+r,t+s+2),i.lineTo(e-r,t+s+2),i.closePath(),i.fillStyle="#2f7a5c",i.fill(),i.beginPath(),i.moveTo(e,t+s-a),i.lineTo(e+r*.5,t+s-a*.45),i.lineTo(e-r*.5,t+s-a*.45),i.closePath(),i.fillStyle="#ffffff",i.fill()}else n==="snowbush"&&(Ut(i,e+2,t,8,3),Te(i,e,t-4,6,"#c7d6e8"),Te(i,e-1,t-6,5,"#ffffff"))}function xd(i){let e=Yr.doodle[xe.theme]||Yr.doodle[0],t=document.createElement("canvas");t.width=360*un,t.height=rt*un;let n=t.getContext("2d");n.scale(un,un);let s=i*rt;n.translate(0,-s),n.fillStyle="#fbf8ee",n.fillRect(0,s,360,rt);for(let r=Math.floor((s-80)/60);r<=Math.floor((s+rt+80)/60);r++)for(let a=0;a<Math.ceil(360/60);a++){let o=Pe(a+50,r);o<.35||(n.beginPath(),n.ellipse(a*60+Pe(a,r+9)*50,r*60+Pe(a+3,r)*50,16+o*20,9+o*10,o*3,0,Math.PI*2),n.save(),n.globalAlpha=.18,n.fillStyle=e.tint,n.fill(),n.restore())}n.strokeStyle="rgba(80,140,220,0.32)",n.lineWidth=.6;for(let r=Math.ceil(s/14)*14;r<s+rt;r+=14)n.beginPath(),n.moveTo(0,r),n.lineTo(360,r),n.stroke();n.strokeStyle="rgba(230,80,80,0.45)",n.beginPath(),n.moveTo(16,s),n.lineTo(16,s+rt),n.stroke();for(let r=0;r<26;r++){let a=Pe(r,i)*360,o=s+Pe(i,r)*rt;n.strokeStyle=e.tuft,n.lineWidth=.9,n.beginPath(),n.moveTo(a-2,o-2),n.lineTo(a,o+1),n.lineTo(a+2,o-2),n.stroke(),xe.theme===0&&r%4===0&&(n.fillStyle=e.flowers[r%3],n.beginPath(),n.arc(a+6,o+2,1.4,0,7),n.fill())}if(s<440){n.beginPath(),n.rect(0,0,360,420),bt(n,e.floor,!1),n.strokeStyle=Sn.doodle,n.lineWidth=.6;for(let r=0;r<=420;r+=24)n.beginPath(),n.moveTo(0,r),n.lineTo(360,r+.8),n.stroke()}for(let r of xe.roads)if(!(r.y1<s-10||r.y0>s+rt+10)){n.beginPath(),n.rect(r.x,r.y0,r.w,r.y1-r.y0),bt(n,e.road,!1),n.strokeStyle=Sn.doodle,n.lineWidth=.9;for(let a of[r.x,r.x+r.w]){n.beginPath(),n.moveTo(a,Math.max(r.y0,s-4));for(let o=Math.max(r.y0,s-4);o<Math.min(r.y1,s+rt+4);o+=12)n.lineTo(a+(Pe(a,o)-.5)*1.6,o);n.stroke()}}for(let r of xe.rivers){if(r.y+r.h<s-20||r.y>s+rt+20)continue;let a=[],o=0;for(let l of[...r.bridges].sort((c,h)=>c.x-h.x))l.x>o&&a.push([o,l.x]),o=l.x+l.w;if(o<360&&a.push([o,360]),r.kind==="water"){n.beginPath(),n.rect(0,r.y,360,r.h),bt(n,e.water),n.strokeStyle="#2a5ea8",n.lineWidth=.9;for(let l=8;l<360;l+=26){let c=r.y+10+l/26%3*12;n.beginPath(),n.moveTo(l,c),n.lineTo(l+5,c-4),n.lineTo(l+10,c),n.stroke()}for(let l of r.bridges){n.beginPath(),n.rect(l.x,r.y-8,l.w,r.h+16),bt(n,"#a86a30"),n.strokeStyle=Sn.doodle,n.lineWidth=.7;for(let c=r.y-4;c<r.y+r.h+8;c+=6)n.beginPath(),n.moveTo(l.x,c),n.lineTo(l.x+l.w,c+.6),n.stroke()}}else for(let[l,c]of a){n.beginPath(),n.rect(l,r.y,c-l,r.h),bt(n,r.kind==="ridge"?"#c8783a":"#8a96a8"),n.strokeStyle=Sn.doodle,n.lineWidth=.7;for(let h=l+6;h<c-2;h+=r.kind==="ridge"?11:16)n.beginPath(),n.moveTo(h,r.y+r.h-1),n.lineTo(h+(r.kind==="ridge"?4:0),r.y+r.h*.45),n.stroke()}}for(let r of xe.helipads)r.y<s-40||r.y>s+rt+40||(n.beginPath(),n.arc(r.x,r.y,20,0,7),bt(n,"#bdbdbd"),n.fillStyle=Sn.doodle,n.font="bold 18px cursive",n.textAlign="center",n.textBaseline="middle",n.fillText("H",r.x,r.y+1));for(let r of xe.blockers)if(!(r.kind==="water"||r.kind==="ridge"||r.kind==="wall"||r.y+r.h<s-10||r.y>s+rt+10))if(r.kind==="sandbag"){n.beginPath(),n.rect(r.x,r.y,r.w,r.h),bt(n,"#e0c080"),n.strokeStyle=Sn.doodle,n.lineWidth=.6;for(let a=r.x+6;a<r.x+r.w;a+=7)n.beginPath(),n.moveTo(a,r.y),n.lineTo(a,r.y+r.h),n.stroke()}else n.beginPath(),n.ellipse(r.x+r.w/2,r.y+r.h/2,r.w/2,r.h/2+1,0,0,7),bt(n,"#9e9e9e");for(let r of xe.deco)r.y<s-40||r.y>s+rt+40||oh(n,r.x,r.y,r.kind);return t}function _d(i){if(Tn==="doodle")return xd(i);let e=Yr.pastel[xe.theme]||Yr.pastel[0],t=document.createElement("canvas");t.width=360*un,t.height=rt*un;let n=t.getContext("2d");n.scale(un,un);let s=i*rt;n.translate(0,-s),n.fillStyle=e.ground,n.fillRect(0,s,360,rt);for(let r=Math.floor((s-64)/48);r<=Math.floor((s+rt+64)/48);r++)for(let a=0;a<6;a++){let o=Pe(a+50,r),l=a*48+Pe(a,r+9)*40,c=r*48+Pe(a+3,r)*40;n.beginPath(),n.ellipse(l,c,18+o*22,10+o*12,o*3,0,Math.PI*2),n.fillStyle=o>.5?e.blobLt:e.blobDk,n.globalAlpha=.55,n.fill(),n.globalAlpha=1;for(let h=0;h<3;h++){let u=a*48+Pe(a*7+h,r)*46,f=r*48+Pe(a,r*5+h)*46;n.strokeStyle=e.tuft,n.lineWidth=1,n.lineCap="round",n.beginPath(),n.moveTo(u-2,f-2),n.lineTo(u,f+1),n.lineTo(u+2,f-2),n.stroke(),xe.theme===0&&Pe(u|0,f|0)>.8&&Te(n,u+5,f+3,1.6,e.flowers[h%3])}}if(s<440){n.fillStyle=e.floor,n.fillRect(0,0,360,420),n.strokeStyle=e.floorLine,n.lineWidth=.8;for(let r=0;r<=420;r+=20)n.beginPath(),n.moveTo(0,r),n.lineTo(360,r),n.stroke();for(let r=0;r<420;r+=20)for(let a=r/20%2?0:20;a<360;a+=40)n.beginPath(),n.moveTo(a,r),n.lineTo(a,r+20),n.stroke();n.fillStyle="rgba(0,0,0,0.12)",n.fillRect(0,416,360,6)}for(let r of xe.roads)if(!(r.y1<s-10||r.y0>s+rt+10)){be(n,r.x-2,r.y0,r.w+4,r.y1-r.y0,8,e.roadEdge),be(n,r.x,r.y0,r.w,r.y1-r.y0,7,e.road),n.strokeStyle=e.roadDk,n.lineWidth=2,n.setLineDash([6,6]);for(let a of[7,r.w-7])n.beginPath(),n.moveTo(r.x+a,r.y0),n.lineTo(r.x+a,r.y1),n.stroke();n.setLineDash([])}for(let r of xe.rivers){if(r.y+r.h<s-20||r.y>s+rt+20)continue;let a=[],o=0;for(let l of[...r.bridges].sort((c,h)=>c.x-h.x))l.x>o&&a.push([o,l.x]),o=l.x+l.w;if(o<360&&a.push([o,360]),r.kind==="water"){n.fillStyle=e.bank,n.fillRect(0,r.y-6,360,r.h+12),n.fillStyle=Bi(n,r.y,r.y+r.h,e.water,e.waterLt),n.fillRect(0,r.y,360,r.h),n.strokeStyle="rgba(255,255,255,0.45)",n.lineWidth=1.2,n.lineCap="round";for(let l=0;l<26;l++){let c=Pe(l,r.y)*360,h=r.y+6+Pe(r.y,l)*(r.h-12);n.beginPath(),n.arc(c,h+3,4,Math.PI*1.15,Math.PI*1.85),n.stroke()}n.fillStyle="rgba(255,255,255,0.7)",n.fillRect(0,r.y+r.h-2,360,1.5);for(let l of r.bridges){n.fillStyle="rgba(0,0,40,0.25)",n.fillRect(l.x+3,r.y,l.w,r.h+4),be(n,l.x-2,r.y-9,l.w+4,r.h+18,3,"#8a5a32");for(let c=r.y-8;c<r.y+r.h+8;c+=5)be(n,l.x,c,l.w,4,1,"#c08850");be(n,l.x-4,r.y-10,3,r.h+20,1.5,"#5e3a1e"),be(n,l.x+l.w+1,r.y-10,3,r.h+20,1.5,"#5e3a1e")}}else for(let[l,c]of a){let h=r.kind==="ridge",u=h?12:9;if(n.fillStyle="rgba(0,0,0,0.18)",wn(n,l+2,r.y+4,c-l,r.h,5),n.fill(),be(n,l,r.y,c-l,r.h,h?7:3,h?"#a8643a":"#6f7886"),be(n,l,r.y,c-l,r.h-u,h?7:3,h?"#cf8a52":"#b7c0cc"),h)for(let f=l+4;f<c-4;f+=9)Te(n,f+Pe(f,r.y)*4,r.y+6+Pe(r.y,f)*(r.h-u-10),2.5,"rgba(255,230,190,0.35)");else{n.fillStyle="#ffffff",n.fillRect(l+2,r.y+1,c-l-4,2);for(let f of[l>0?l:-99,c<360?c-6:-99])if(!(f<0))for(let d=0;d<r.h;d+=6)n.fillStyle=d/6%2?"#2a2a2a":"#ffcc33",n.fillRect(f,r.y+d,6,Math.min(6,r.h-d))}}}for(let r of xe.helipads)r.y<s-40||r.y>s+rt+40||(Ut(n,r.x+2,r.y+3,24,22,.15),Te(n,r.x,r.y,22,"#9b9a94"),Te(n,r.x,r.y,20,"#b4b3ac"),n.strokeStyle="#ffcc33",n.lineWidth=2,n.beginPath(),n.arc(r.x,r.y,16,0,Math.PI*2),n.stroke(),n.fillStyle="#ffffff",n.font="bold 18px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("H",r.x,r.y+1));for(let r of xe.blockers)if(!(r.kind==="water"||r.kind==="ridge"||r.kind==="wall"||r.y+r.h<s-10||r.y>s+rt+10))if(r.kind==="sandbag"){n.fillStyle="rgba(0,0,0,0.15)",n.fillRect(r.x+2,r.y+r.h,r.w,3);for(let a=0;a<r.w;a+=8)be(n,r.x+a,r.y-1,8,r.h+2,3.5,"#b9955c"),be(n,r.x+a+1,r.y-1,6,3.5,1.7,"#e3c58a")}else Ut(n,r.x+r.w/2+3,r.y+r.h+1,r.w/2,4,.2),n.beginPath(),n.ellipse(r.x+r.w/2,r.y+r.h/2+1,r.w/2,r.h/2+1,0,0,Math.PI*2),n.fillStyle=ws(n,r.x+r.w/2,r.y+r.h/2,r.w/2,"#c5c2cc","#7c7987"),n.fill();for(let r of xe.deco)r.y<s-40||r.y>s+rt+40||oh(n,r.x,r.y,r.kind);return t}function vd(i,e){Xr!==xe.theme&&(Zn.clear(),Xr=xe.theme);let t=Math.floor(e/rt),n=Math.floor((e+240)/rt);for(let s=t;s<=n;s++){if(s<0||s*rt>je)continue;let r=Zn.get(s);r||(r=_d(s),Zn.set(s,r),Zn.size>10&&Zn.delete(Zn.keys().next().value)),i.drawImage(r,0,s*rt-e,360,rt)}}function zo(i,e,t,n,s,r,a){i.save(),i.translate(e,t),i.rotate(n),be(i,0,-r/2-.8,s+.8,r+1.6,r/2,"rgba(0,0,0,0.45)"),be(i,0,-r/2,s,r,r/2,a),i.restore()}function bd(i,e,t,n){xe.helipads.forEach((s,r)=>{let a=s.y-e;if(a<-60||a>290)return;let o=n[r]||0,l=o>0?Math.sin((1-o/2.4)*Math.PI)*26:0,c=s.x,h=a-2-l;Ut(i,c+2+l*.3,a+6,10,5),be(i,c-1.5,h+4,3,17,1.5,"#3f7e3a"),be(i,c-6,h+18,12,3,1.5,"#3f7e3a"),be(i,c-10,h-4,2,15,1,"#555a66"),be(i,c+8,h-4,2,15,1,"#555a66"),i.beginPath(),i.ellipse(c,h+2,7,10,0,0,Math.PI*2),bt(i,ws(i,c,h+2,10,"#7cc66a","#2f7a34")),i.beginPath(),i.ellipse(c,h-4,5,4,0,0,Math.PI*2),bt(i,"#a6e4ff"),Te(i,c-1.5,h-5.5,1.3,"#ffffff");let u=o>0,f=t*(u?.035:.006);Te(i,c,h-2,19,u?"rgba(40,40,48,0.18)":"rgba(40,40,48,0.08)"),i.strokeStyle="rgba(50,50,60,0.85)",i.lineWidth=2,i.lineCap="round";for(let d=0;d<2;d++){let y=f+d*Math.PI/2,m=Math.cos(y)*18,p=Math.sin(y)*18;i.beginPath(),i.moveTo(c-m,h-2-p),i.lineTo(c+m,h-2+p),i.stroke()}Te(i,c,h-2,2,"#555a66")})}function Md(i,e,t,n){let[s,r,a,o,l,c,h,u]=e,f=a,d=o-t;if(!(d<-110||d>300))switch(r){case q.soldier:{let y=Math.sin(n/90+s)*.6;if(Ut(i,f,d+5,4.5,2),Tn==="doodle"){lh(i,f,d+y,l,h?"#ffffff":"#e53935",!0,n,s);break}i.save(),i.translate(f,d+y),i.rotate(l),be(i,2,-1,7,2,1,"#8a7a70"),i.restore(),Te(i,f,d+1.5+y,4.4,h?"#fff":"#a99ad0"),Te(i,f-3,d-5.2+y,1.6,h?"#fff":"#c79a72"),Te(i,f+3,d-5.2+y,1.6,h?"#fff":"#c79a72"),Te(i,f,d-2.5+y,3.8,h?"#fff":"#d9ae86"),i.beginPath(),i.arc(f,d-3.2+y,4,Math.PI*1.05,Math.PI*1.95),bt(i,h?"#fff":"#ec7a6a"),i.fillStyle=Sn.pastel,i.fillRect(f-1.8,d-2.2+y,.9,.9),i.fillRect(f+.9,d-2.2+y,.9,.9);break}case q.bossTurret:if(xe.theme===1){Te(i,f,d,9,"#4d4f5c"),Te(i,f,d,7,ws(i,f,d,7,"#9a9cac","#5a5c6a")),zo(i,f,d,l,14,4,"#3b3d48"),Te(i,f,d,2.5,"#ff5340"),qr(i,f,d,9,h);break}case q.turret:{Ut(i,f+2,d+7,12,4),Te(i,f,d,11,"#8e7448");for(let y=0;y<10;y++){let m=y/10*Math.PI*2;i.save(),i.translate(f+Math.cos(m)*8.5,d+Math.sin(m)*8.5),i.rotate(m+Math.PI/2),be(i,-3.5,-2.2,7,4.4,2,"#d4b47a"),i.restore()}Te(i,f,d,5.5,"#4a4a52"),zo(i,f,d,l,12,3.4,r===q.bossTurret?"#b5483a":"#6a6c78"),Te(i,f,d,3.2,r===q.bossTurret?"#e05a46":"#9ea0ae"),qr(i,f,d,11,h);break}case q.tank:{Ut(i,f+2,d+11,13,4);for(let y of[-11,6]){be(i,f+y,d-11,5,22,2,"#2e2f36"),i.fillStyle="#5a5c66";for(let m=-9+(n/80|0)%3;m<10;m+=3)i.fillRect(f+y+.8,d+m,3.4,1)}wn(i,f-7,d-10,14,20,3),bt(i,Bi(i,d-10,d+10,"#d0704a","#8c3c28")),zo(i,f,d,l,15,3.4,"#6e2c1c"),Te(i,f,d,5.5,ws(i,f,d,5.5,"#e48a64","#94402a")),qr(i,f,d,12,h);break}case q.prison:{Ut(i,f+2,d+14,18,4),be(i,f-15,d-4,30,17,2,"#9a6a3a"),i.fillStyle="rgba(0,0,0,0.12)";for(let y=0;y<4;y++)i.fillRect(f-15,d-1+y*4,30,1);wn(i,f-18,d-15,36,13,3),bt(i,Bi(i,d-15,d-2,"#f07050","#b23a2a")),be(i,f-6,d+1,12,12,1.5,"#2a2420"),i.fillStyle="#c8c8d2";for(let y=-4.5;y<=4.5;y+=3)i.fillRect(f+y,d+1,1,12);(n/280+s|0)%2&&(Te(i,f-2,d+6,1.4,"#f2c49a"),Te(i,f+2.5,d+5,1.4,"#f2c49a")),be(i,f-14,d+1,7,5,1,"#fff2c0"),qr(i,f,d,17,h);break}case q.boss:{let y=xe.theme===2;i.fillStyle="rgba(0,0,0,0.22)",wn(i,f-90,d-40,186,96,10),i.fill(),wn(i,f-92,d-46,184,70,10),bt(i,Bi(i,d-46,d+24,y?"#d5dbe4":"#c2bbae",y?"#a3abb8":"#968e80")),wn(i,f-92,d+14,184,36,8),bt(i,y?"#737c8a":"#6c6458");for(let p=-88;p<88;p+=14)be(i,f+p,d-51,9,7,2,y?"#ffffff":"#d8d1c4");for(let p of[-80,80])Te(i,f+p,d-22,15,y?"#c3cad6":"#b0a898"),Te(i,f+p,d-24,12,y?"#e9eef5":"#cfc7b8"),be(i,f+p-2,d-32,4,12,2,"#d23c30");be(i,f-18,d+20,36,30,6,"#3a2c20"),i.fillStyle="#8a5a32";for(let p=-15;p<16;p+=6)i.fillRect(f+p,d+23,3.5,27);let m=(Math.sin(n/140)+1)/2;Te(i,f,d-12,16,"#3a3632"),Te(i,f,d-12,11,ws(i,f,d-12,11,`rgb(255,${150+m*80|0},120)`,"#c02a1e")),u&&(i.strokeStyle=`rgba(120,200,255,${.45+m*.45})`,i.lineWidth=2.5,i.beginPath(),i.arc(f,d-12,18+m*2,0,Math.PI*2),i.stroke()),h&&(i.globalAlpha=.35,be(i,f-92,d-46,184,96,10,"#fff"),i.globalAlpha=1);break}case q.boss2:{i.fillStyle="rgba(0,0,0,0.22)",wn(i,f-58,d-26,122,62,8),i.fill();for(let m of[-61,43]){be(i,f+m,d-30,18,60,5,"#2e2f36"),i.fillStyle="#5a5c66";for(let p=-27+(n/70|0)%4;p<28;p+=4)i.fillRect(f+m+2,d+p,14,1.5)}wn(i,f-44,d-30,88,54,8),bt(i,Bi(i,d-30,d+24,"#d2a462","#8a6030")),be(i,f-44,d+18,88,12,5,"#5a3c1c");for(let m of[-14,-3,8])be(i,f+m,d+21,6,6,1.5,"#1e1a16");for(let m=-40;m<40;m+=8)i.fillStyle=m/8%2?"#2a2a2a":"#ffcc33",i.fillRect(f+m,d-24,8,3);let y=(Math.sin(n/140)+1)/2;Te(i,f,d-6,9,"#3a3632"),Te(i,f,d-6,6.5,ws(i,f,d-6,6.5,`rgb(255,${150+y*80|0},120)`,"#c02a1e")),u&&(i.strokeStyle=`rgba(120,200,255,${.45+y*.45})`,i.lineWidth=2,i.beginPath(),i.arc(f,d-6,12+y*2,0,Math.PI*2),i.stroke()),h&&(i.globalAlpha=.35,be(i,f-60,d-30,120,60,8,"#fff"),i.globalAlpha=1);break}}}function lh(i,e,t,n,s,r,a,o){let l=(a/140+o|0)%2;i.save(),i.strokeStyle=Sn.doodle,i.lineWidth=.9,i.lineCap="round",i.beginPath(),i.moveTo(e,t-2),i.lineTo(e,t+3),i.moveTo(e,t+3),i.lineTo(e-2.5,t+7),i.moveTo(e,t+3),i.lineTo(e+2.5,t+7),r?(i.moveTo(e-3,t),i.lineTo(e+3,t)):(i.moveTo(e,t),i.lineTo(e-4,l?t-5:t-2),i.moveTo(e,t),i.lineTo(e+4,l?t-2:t-5)),i.stroke(),r&&(i.lineWidth=1.6,i.beginPath(),i.moveTo(e+2,t),i.lineTo(e+2+Math.cos(n)*6,t+Math.sin(n)*6),i.stroke()),i.restore(),Te(i,e,t-4.5,2.6,s)}function wd(i,e,t,n){let[s,r,a,o]=e,l=a-t,c=(n/140+s|0)%2,h=o&&(n/120|0)%2;if(Ut(i,r,l+5,4,2),Tn==="doodle"){lh(i,r,l,0,h?"#fdd835":"#ffffff",!1,n,s);return}i.save(),i.strokeStyle=Sn.pastel,i.lineWidth=1.1,i.lineCap="round",i.beginPath(),i.moveTo(r-3,l),i.lineTo(r-5.5,c?l-5:l-2),i.moveTo(r+3,l),i.lineTo(r+5.5,c?l-2:l-5),i.stroke(),i.restore(),Te(i,r,l+1,3.8,h?"#ffe28a":"#ffffff"),be(i,r-2.6,l-11,2,6,1,"#fff4f4"),be(i,r+.6,l-11,2,6,1,"#fff4f4"),Te(i,r,l-3.5,3.4,"#fff8f4"),i.fillStyle=Sn.pastel,i.fillRect(r-1.6,l-3.8,.9,.9),i.fillRect(r+.8,l-3.8,.9,.9),i.fillStyle="#ffb3b8",i.fillRect(r-2.6,l-2.6,1,.8),i.fillRect(r+1.7,l-2.6,1,.8)}function ch(i,e,t,n,s=1){let[r,a,o]=sh[n]||sh[0];wn(i,e-6*s,t-6*s,12*s,12*s,3.5*s),bt(i,Bi(i,t-6*s,t+6*s,r,a)),i.strokeStyle="rgba(255,255,255,0.8)",i.lineWidth=1*s,i.stroke(),i.fillStyle="#ffffff",i.font=`bold ${8*s}px ${Tn==="doodle"?"cursive":"sans-serif"}`,i.textAlign="center",i.textBaseline="middle",i.fillText(o,e,t+.5*s)}function Sd(i,e,t,n){let[s,r,a,o,l]=e;if(l&&(n/100|0)%2)return;let c=Math.sin(n/200+s)*1.5,h=o-t;Ut(i,a,h+7,5,2),ch(i,a,h-2+c,r)}function Td(i){if(!Uo[i]){let e=document.createElement("canvas");e.width=56,e.height=56,ch(e.getContext("2d"),28,28,i,4),Uo[i]=e}return Uo[i]}function Ad(i,e,t,n,s,r,a){let o=n-r;Ut(i,t+3,o+5,12,8);let l=a.invuln&&(performance.now()/90|0)%2,[c,h,u]=Ed[e];i.save(),i.translate(t,o),i.rotate(s+Math.PI/2),i.scale(1.4,1.4),l&&(i.globalAlpha=.45);for(let[f,d]of[[-8,-7],[4,-7],[-8,3],[4,3]])be(i,f,d,4,5.5,1.5,"#26272e");if(wn(i,-6,-9,12,18,3.5),bt(i,Bi(i,-9,9,c,u)),be(i,-4.5,-8,9,4,1.8,"rgba(255,255,255,0.3)"),be(i,-5,-3.5,10,3,1.2,"#a6e4ff"),be(i,-4,1,3,3.5,1,"#9a5a30"),be(i,1,1,3,3.5,1,"#9a5a30"),Tn==="pastel"&&(Te(i,-2.8,.2,1,"#f2d8c0"),Te(i,-.6,.2,1,"#f2d8c0"),Te(i,-1.7,2.2,2.2,"#fff4ea")),be(i,-1.2,-14,2.4,10,1.2,"#3a3c46"),Te(i,0,-3,2,"#5a5c68"),i.restore(),i.globalAlpha=1,a.shield){let f=performance.now()/120;i.beginPath(),i.arc(t,o,17+Math.sin(f)*1.2,0,Math.PI*2),i.fillStyle="rgba(140,210,255,0.16)",i.fill(),i.strokeStyle=a.shield<=2&&(f|0)%2?"rgba(140,210,255,0.3)":"rgba(140,210,255,0.9)",i.lineWidth=1.5,i.stroke()}a.carry>0&&(be(i,t-7,o-27,14,9,3,"#ffffff"),i.fillStyle="#2a2a2a",i.font="bold 7px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(a.carry,t,o-22.3)),a.self&&be(i,t-3,o+16,6,2.4,1.2,e===0?"#8fe070":"#8cc0ff")}function Rd(i,e,t){let[,n,s,r,a,o=0]=e,l=r-t,c=(h,u,f)=>{Te(i,s,l,h*1.9,u.replace("1)","0.25)")),Te(i,s,l,h,f)};switch(n){case Se.mg:c(1.6,"rgba(255,240,120,1)","#fff6b0");break;case Se.big:c(2.6,"rgba(255,170,60,1)","#ffd27a");break;case Se.missile:case Se.homing:{i.save(),i.translate(s,l),i.rotate(o),Te(i,-6,0,2.5,"rgba(255,190,90,0.45)"),be(i,-4,-1.6,8,3.2,1.6,"#f4f4f4"),be(i,2,-1.6,2.5,3.2,1.5,"#ff4a38"),i.restore();break}case Se.laser:{let h=Math.cos(o),u=Math.sin(o);i.lineCap="round",i.strokeStyle="rgba(80,220,255,0.35)",i.lineWidth=6,i.beginPath(),i.moveTo(s-h*18,l-u*18),i.lineTo(s,l),i.stroke(),i.strokeStyle="#e4fcff",i.lineWidth=2,i.beginPath(),i.moveTo(s-h*16,l-u*16),i.lineTo(s,l),i.stroke();break}case Se.grenade:Te(i,s,l-a,2.5,"#4c6c2c");break;case Se.ebullet:c(2.4,"rgba(255,70,50,1)","#ff5a44"),Te(i,s-.6,l-.6,.9,"#fff");break;case Se.eshell:c(3.6,"rgba(255,120,30,1)","#ff8a2a"),Te(i,s+.6,l+.6,2,"#e8402a"),Te(i,s-1,l-1,1,"#fff");break}}function Pd(i,e,t){let n=Cd[e[1]];if(!n)return;let[s,r]=n,a=Math.max(0,Math.min(1,e[5])),o=e[2]-s/2,l=e[3]-t-r;l<-4||l>240||(be(i,o-.8,l-.8,s+1.6,3.6,1.8,"rgba(0,0,0,0.55)"),be(i,o,l,Math.max(2,s*a),2,1,a>.55?"#5be04a":a>.28?"#ffd23c":"#ff4a38"))}var rt,Zn,un,Xr,Tn,Yr,Sn,nh,be,Te,Ut,ih,qr,sh,Uo,Ed,Cd,hh=qt(()=>{Nn();ys();mi();zi();Oo();rt=256,Zn=new Map,un=2,Xr=-1,Tn="pastel";Yr={pastel:[{ground:"#c9dfa6",ground2:"#c2d99c",blobLt:"#d6e8b8",blobDk:"#b8d294",tuft:"#9cb878",road:"#f0d7a8",roadEdge:"#b98d68",roadDk:"#e2c494",water:"#a6d8e8",waterLt:"#c8eaf2",bank:"#f4e2bc",floor:"#e8d8bc",floorLine:"#cdb898",flowers:["#ffffff","#ffe2a0","#ffc2c8"]},{ground:"#f4d39c",ground2:"#f0cc92",blobLt:"#f9e0b2",blobDk:"#e9c286",tuft:"#d6aa70",road:"#e9bc84",roadEdge:"#b98d68",roadDk:"#ddb07a",water:"#a6d8e8",waterLt:"#c8eaf2",bank:"#f9e6c2",floor:"#ecd3aa",floorLine:"#d2b48a",flowers:["#f2c49a","#e8b080","#fff0d8"]},{ground:"#f2f1f4",ground2:"#ecebf1",blobLt:"#ffffff",blobDk:"#e2e0ea",tuft:"#c8c4d6",road:"#dfdbe6",roadEdge:"#a99cae",roadDk:"#d4cfdc",water:"#a6cfe8",waterLt:"#cfe6f4",bank:"#ece8f0",floor:"#d6d2dc",floorLine:"#bdb6c6",flowers:["#ffd6e0","#ffffff","#d6e6ff"]}],doodle:[{tint:"#7cc35a",road:"#d9a35a",water:"#4a90e2",floor:"#bdbdbd",tuft:"#5a9e40",flowers:["#e53935","#fdd835","#ec407a"]},{tint:"#e8b04a",road:"#c8823a",water:"#4a90e2",floor:"#d6b07a",tuft:"#c08a3a",flowers:["#8d6e63","#a1887f","#ff7043"]},{tint:"#90b8e0",road:"#9aa8ba",water:"#3a78c8",floor:"#9aa4b2",tuft:"#7a9cc8",flowers:["#64b5f6","#90caf9","#b39ddb"]}]},Sn={pastel:"#7a5640",doodle:"#2b2b33"};nh=new Map;be=(i,e,t,n,s,r,a)=>{wn(i,e,t,n,s,r),bt(i,a)},Te=(i,e,t,n,s)=>{i.beginPath(),i.arc(e,t,n,0,Math.PI*2),bt(i,s)},Ut=(i,e,t,n,s,r=.22)=>{i.beginPath(),i.ellipse(e,t,n,s,0,0,Math.PI*2),i.fillStyle=Tn==="doodle"?`rgba(60,60,80,${r*.6})`:`rgba(150,100,70,${r*.9})`,i.fill()},ih=i=>[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)];qr=(i,e,t,n,s)=>{s&&(i.globalAlpha=.6,Te(i,e,t,n,"#ffffff"),i.globalAlpha=1)};sh=[["#ff8a3c","#d4561c","R"],["#4aa8ff","#1f6cd4","P"],["#ff5a78","#cc2848","\u2665"],["#9a6aff","#6436cc","B"],["#ffd23c","#d49a10","W"]];Uo={};Ed=[["#8fe070","#4fb83e","#2f8a2a"],["#8cc0ff","#4a8ef0","#2a5cb8"]];Cd={[q.soldier]:[10,13],[q.turret]:[18,16],[q.bossTurret]:[18,16],[q.tank]:[20,18],[q.prison]:[26,20]}});function Sr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function en(i,e,t){return Math.max(e,Math.min(t,i))}function Sp(i,e){return(i%e+e)%e}function Qo(i,e,t){return(1-t)*i+t*e}function Yh(i){return(i&i-1)===0&&i!==0}function Pl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jr(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Of(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ma(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function nl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Zr(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}function il(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_a.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function al(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Wi.fromArray(i,r);let o=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),h=n.dot(Wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function Np(i,e,t,n,s,r,a,o){let l;if(e.side===sn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===wi,o),l===null)return null;la.copy(o),la.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(la);return c<t.near||c>t.far?null:{distance:c,point:la.clone(),object:i}}function ca(i,e,t,n,s,r,a,o,l){i.getVertexPosition(a,lr),i.getVertexPosition(o,cr),i.getVertexPosition(l,hr);let c=Np(i,e,t,n,lr,cr,hr,xl);if(c){s&&(ra.fromBufferAttribute(s,a),aa.fromBufferAttribute(s,o),oa.fromBufferAttribute(s,l),c.uv=pr.getUV(xl,lr,cr,hr,ra,aa,oa,new qe)),r&&(ra.fromBufferAttribute(r,a),aa.fromBufferAttribute(r,o),oa.fromBufferAttribute(r,l),c.uv2=pr.getUV(xl,lr,cr,hr,ra,aa,oa,new qe));let h={a,b:o,c:l,normal:new D,materialIndex:0};pr.getNormal(lr,cr,hr,h.normal),c.face=h}return c}function Xs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Gt(i){let e={};for(let t=0;t<i.length;t++){let n=Xs(i[t]);for(let s in n)e[s]=n[s]}return e}function Fp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uf(i){return i.getRenderTarget()===null&&i.outputEncoding===lt?zn:xr}function Bf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hp(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,f=c.usage,d=i.createBuffer();i.bindBuffer(h,d),i.bufferData(h,u,f),c.onUploadCallback();let y;if(u instanceof Float32Array)y=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(u instanceof Int16Array)y=5122;else if(u instanceof Uint32Array)y=5125;else if(u instanceof Int32Array)y=5124;else if(u instanceof Int8Array)y=5120;else if(u instanceof Uint8Array)y=5121;else if(u instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){let f=h.array,d=h.updateRange;i.bindBuffer(u,c),d.count===-1?i.bufferSubData(u,0,f):(t?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u===void 0?n.set(c,s(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}function bg(i,e,t,n,s,r,a){let o=new Je(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function y(p,v){let M=!1,g=v.isScene===!0?v.background:null;g&&g.isTexture&&(g=(v.backgroundBlurriness>0?t:e).get(g));let x=i.xr,b=x.getSession&&x.getSession();b&&b.environmentBlendMode==="additive"&&(g=null),g===null?m(o,l):g&&g.isColor&&(m(g,1),M=!0),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Wa)?(h===void 0&&(h=new Dt(new es(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Xs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=g.encoding!==lt,(u!==g||f!==g.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=g,f=g.version,d=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Dt(new br(2,2),new ai({name:"BackgroundMaterial",uniforms:Xs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=g.encoding!==lt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||f!==g.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=g,f=g.version,d=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,v){p.getRGB(fa,Uf(i)),n.buffers.color.setClear(fa.r,fa.g,fa.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(p,v=1){o.set(p),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(o,l)},render:y}}function Mg(i,e,t,n){let s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null),c=l,h=!1;function u(L,G,$,te,Y){let ne=!1;if(a){let Z=m(te,$,G);c!==Z&&(c=Z,d(c.object)),ne=v(L,te,$,Y),ne&&M(L,te,$,Y)}else{let Z=G.wireframe===!0;(c.geometry!==te.id||c.program!==$.id||c.wireframe!==Z)&&(c.geometry=te.id,c.program=$.id,c.wireframe=Z,ne=!0)}Y!==null&&t.update(Y,34963),(ne||h)&&(h=!1,_(L,G,$,te),Y!==null&&i.bindBuffer(34963,t.get(Y).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function y(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function m(L,G,$){let te=$.wireframe===!0,Y=o[L.id];Y===void 0&&(Y={},o[L.id]=Y);let ne=Y[G.id];ne===void 0&&(ne={},Y[G.id]=ne);let Z=ne[te];return Z===void 0&&(Z=p(f()),ne[te]=Z),Z}function p(L){let G=[],$=[],te=[];for(let Y=0;Y<s;Y++)G[Y]=0,$[Y]=0,te[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:$,attributeDivisors:te,object:L,attributes:{},index:null}}function v(L,G,$,te){let Y=c.attributes,ne=G.attributes,Z=0,Me=$.getAttributes();for(let O in Me)if(Me[O].location>=0){let ae=Y[O],oe=ne[O];if(oe===void 0&&(O==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),O==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),ae===void 0||ae.attribute!==oe||oe&&ae.data!==oe.data)return!0;Z++}return c.attributesNum!==Z||c.index!==te}function M(L,G,$,te){let Y={},ne=G.attributes,Z=0,Me=$.getAttributes();for(let O in Me)if(Me[O].location>=0){let ae=ne[O];ae===void 0&&(O==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),O==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor));let oe={};oe.attribute=ae,ae&&ae.data&&(oe.data=ae.data),Y[O]=oe,Z++}c.attributes=Y,c.attributesNum=Z,c.index=te}function g(){let L=c.newAttributes;for(let G=0,$=L.length;G<$;G++)L[G]=0}function x(L){b(L,0)}function b(L,G){let $=c.newAttributes,te=c.enabledAttributes,Y=c.attributeDivisors;$[L]=1,te[L]===0&&(i.enableVertexAttribArray(L),te[L]=1),Y[L]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,G),Y[L]=G)}function E(){let L=c.newAttributes,G=c.enabledAttributes;for(let $=0,te=G.length;$<te;$++)G[$]!==L[$]&&(i.disableVertexAttribArray($),G[$]=0)}function R(L,G,$,te,Y,ne){n.isWebGL2===!0&&($===5124||$===5125)?i.vertexAttribIPointer(L,G,$,Y,ne):i.vertexAttribPointer(L,G,$,te,Y,ne)}function _(L,G,$,te){if(n.isWebGL2===!1&&(L.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();let Y=te.attributes,ne=$.getAttributes(),Z=G.defaultAttributeValues;for(let Me in ne){let O=ne[Me];if(O.location>=0){let K=Y[Me];if(K===void 0&&(Me==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),Me==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),K!==void 0){let ae=K.normalized,oe=K.itemSize,z=t.get(K);if(z===void 0)continue;let De=z.buffer,ge=z.type,ye=z.bytesPerElement;if(K.isInterleavedBufferAttribute){let fe=K.data,at=fe.stride,Ne=K.offset;if(fe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<O.locationSize;Ce++)b(O.location+Ce,fe.meshPerAttribute);L.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ce=0;Ce<O.locationSize;Ce++)x(O.location+Ce);i.bindBuffer(34962,De);for(let Ce=0;Ce<O.locationSize;Ce++)R(O.location+Ce,oe/O.locationSize,ge,ae,at*ye,(Ne+oe/O.locationSize*Ce)*ye)}else{if(K.isInstancedBufferAttribute){for(let fe=0;fe<O.locationSize;fe++)b(O.location+fe,K.meshPerAttribute);L.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let fe=0;fe<O.locationSize;fe++)x(O.location+fe);i.bindBuffer(34962,De);for(let fe=0;fe<O.locationSize;fe++)R(O.location+fe,oe/O.locationSize,ge,ae,oe*ye,oe/O.locationSize*fe*ye)}}else if(Z!==void 0){let ae=Z[Me];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(O.location,ae);break;case 3:i.vertexAttrib3fv(O.location,ae);break;case 4:i.vertexAttrib4fv(O.location,ae);break;default:i.vertexAttrib1fv(O.location,ae)}}}}E()}function S(){U();for(let L in o){let G=o[L];for(let $ in G){let te=G[$];for(let Y in te)y(te[Y].object),delete te[Y];delete G[$]}delete o[L]}}function C(L){if(o[L.id]===void 0)return;let G=o[L.id];for(let $ in G){let te=G[$];for(let Y in te)y(te[Y].object),delete te[Y];delete G[$]}delete o[L.id]}function F(L){for(let G in o){let $=o[G];if($[L.id]===void 0)continue;let te=$[L.id];for(let Y in te)y(te[Y].object),delete te[Y];delete $[L.id]}}function U(){N(),h=!0,c!==l&&(c=l,d(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:U,resetDefaultState:N,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:F,initAttributes:g,enableAttribute:x,disableUnusedAttributes:E}}function wg(i,e,t,n){let s=n.isWebGL2,r;function a(c){r=c}function o(c,h){i.drawArrays(r,c,h),t.update(h,r,1)}function l(c,h,u){if(u===0)return;let f,d;if(s)f=i,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,h,u),t.update(h,r,u)}this.setMode=a,this.render=o,this.renderInstances=l}function Sg(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext,o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(34930),f=i.getParameter(35660),d=i.getParameter(3379),y=i.getParameter(34076),m=i.getParameter(34921),p=i.getParameter(36347),v=i.getParameter(36348),M=i.getParameter(36349),g=f>0,x=a||e.has("OES_texture_float"),b=g&&x,E=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:g,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:E}}function Tg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ni,o=new nn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let y=u.clippingPlanes,m=u.clipIntersection,p=u.clipShadows,v=i.get(u);if(!s||y===null||y.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,g=M*4,x=v.clippingState||null;l.value=x,x=h(y,f,g,d);for(let b=0;b!==g;++b)x[b]=t[b];v.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,y){let m=u!==null?u.length:0,p=null;if(m!==0){if(p=l.value,y!==!0||p===null){let v=d+m*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<v)&&(p=new Float32Array(v));for(let g=0,x=d;g!==m;++g,x+=4)a.copy(u[g]).applyMatrix4(M,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function Eg(i){let e=new WeakMap;function t(a,o){return o===Tl?a.mapping=Ws:o===El&&(a.mapping=Gs),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let o=a.mapping;if(o===Tl||o===El)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new kl(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function Ag(i){let e=[],t=[],n=[],s=i,r=i-Us+1+rf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Us?l=rf[a-i+Us-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,y=6,m=3,p=2,v=1,M=new Float32Array(m*y*d),g=new Float32Array(p*y*d),x=new Float32Array(v*y*d);for(let E=0;E<d;E++){let R=E%3*2/3-1,_=E>2?0:-1,S=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];M.set(S,m*y*E),g.set(f,p*y*E);let C=[E,E,E,E,E,E];x.set(C,v*y*E)}let b=new gn;b.setAttribute("position",new rn(M,m)),b.setAttribute("uv",new rn(g,p)),b.setAttribute("faceIndex",new rn(x,v)),e.push(b),s>Us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lf(i,e,t){let n=new si(i,e,t);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ua(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Rg(i,e,t){let n=new Float32Array(qi),s=new D(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function cf(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function hf(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function rc(){return`

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
	`}function Cg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Tl||l===El,h=l===Ws||l===Gs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Ra(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Ra(i));let f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Pg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lg(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let y in f.attributes)e.remove(f.attributes[y]);f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let y in f)e.update(f[y],34962);let d=u.morphAttributes;for(let y in d){let m=d[y];for(let p=0,v=m.length;p<v;p++)e.update(m[p],34962)}}function c(u){let f=[],d=u.index,y=u.attributes.position,m=0;if(d!==null){let M=d.array;m=d.version;for(let g=0,x=M.length;g<x;g+=3){let b=M[g+0],E=M[g+1],R=M[g+2];f.push(b,E,E,R,R,b)}}else{let M=y.array;m=y.version;for(let g=0,x=M.length/3-1;g<x;g+=3){let b=g+0,E=g+1,R=g+2;f.push(b,E,E,R,R,b)}}let p=new(Of(f)?Ta:Sa)(f,1);p.version=m;let v=r.get(u);v&&e.remove(v),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Ig(i,e,t,n){let s=n.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,d){i.drawElements(r,d,o,f*l),t.update(d,r,1)}function u(f,d,y){if(y===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,d,o,f*l,y),t.update(d,r,y)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function Dg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function kg(i,e){return i[0]-e[0]}function Ng(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Fg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new It,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u,f){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let y=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=y!==void 0?y.length:0,p=r.get(h);if(p===void 0||p.count!==m){let G=function(){N.dispose(),r.delete(h),h.removeEventListener("dispose",G)};p!==void 0&&p.texture.dispose();let g=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],_=h.morphAttributes.color||[],S=0;g===!0&&(S=1),x===!0&&(S=2),b===!0&&(S=3);let C=h.attributes.position.count*S,F=1;C>e.maxTextureSize&&(F=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);let U=new Float32Array(C*F*4*m),N=new ba(U,C,F,m);N.type=Yi,N.needsUpdate=!0;let L=S*4;for(let $=0;$<m;$++){let te=E[$],Y=R[$],ne=_[$],Z=C*F*4*$;for(let Me=0;Me<te.count;Me++){let O=Me*L;g===!0&&(a.fromBufferAttribute(te,Me),U[Z+O+0]=a.x,U[Z+O+1]=a.y,U[Z+O+2]=a.z,U[Z+O+3]=0),x===!0&&(a.fromBufferAttribute(Y,Me),U[Z+O+4]=a.x,U[Z+O+5]=a.y,U[Z+O+6]=a.z,U[Z+O+7]=0),b===!0&&(a.fromBufferAttribute(ne,Me),U[Z+O+8]=a.x,U[Z+O+9]=a.y,U[Z+O+10]=a.z,U[Z+O+11]=ne.itemSize===4?a.w:1)}}p={count:m,texture:N,size:new qe(C,F)},r.set(h,p),h.addEventListener("dispose",G)}let v=0;for(let g=0;g<d.length;g++)v+=d[g];let M=h.morphTargetsRelative?1:1-v;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{let y=d===void 0?0:d.length,m=n[h.id];if(m===void 0||m.length!==y){m=[];for(let x=0;x<y;x++)m[x]=[x,0];n[h.id]=m}for(let x=0;x<y;x++){let b=m[x];b[0]=x,b[1]=d[x]}m.sort(Ng);for(let x=0;x<8;x++)x<y&&m[x][1]?(o[x][0]=m[x][0],o[x][1]=m[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(kg);let p=h.morphAttributes.position,v=h.morphAttributes.normal,M=0;for(let x=0;x<8;x++){let b=o[x],E=b[0],R=b[1];E!==Number.MAX_SAFE_INTEGER&&R?(p&&h.getAttribute("morphTarget"+x)!==p[E]&&h.setAttribute("morphTarget"+x,p[E]),v&&h.getAttribute("morphNormal"+x)!==v[E]&&h.setAttribute("morphNormal"+x,v[E]),s[x]=R,M+=R):(p&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),v&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let g=h.morphTargetsRelative?1:1-M;f.getUniforms().setValue(i,"morphTargetBaseInfluence",g),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Og(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);return s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}function $s(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ff[s];if(r===void 0&&(r=new Float32Array(s),ff[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ga(i,e){let t=uf[e];t===void 0&&(t=new Int32Array(e),uf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function Bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function Vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function Hg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;mf.set(n),i.uniformMatrix2fv(this.addr,!1,mf),At(t,n)}}function Wg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;pf.set(n),i.uniformMatrix3fv(this.addr,!1,pf),At(t,n)}}function Gg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;df.set(n),i.uniformMatrix4fv(this.addr,!1,df),At(t,n)}}function qg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function Yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function Jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function $g(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function Kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function Qg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||Vf,s)}function ey(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wf,s)}function ty(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Gf,s)}function ny(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hf,s)}function iy(i){switch(i){case 5126:return zg;case 35664:return Ug;case 35665:return Bg;case 35666:return Vg;case 35674:return Hg;case 35675:return Wg;case 35676:return Gg;case 5124:case 35670:return qg;case 35667:case 35671:return Xg;case 35668:case 35672:return Yg;case 35669:case 35673:return Jg;case 5125:return $g;case 36294:return Zg;case 36295:return Kg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ty;case 36289:case 36303:case 36311:case 36292:return ny}}function sy(i,e){i.uniform1fv(this.addr,e)}function ry(i,e){let t=$s(e,this.size,2);i.uniform2fv(this.addr,t)}function ay(i,e){let t=$s(e,this.size,3);i.uniform3fv(this.addr,t)}function oy(i,e){let t=$s(e,this.size,4);i.uniform4fv(this.addr,t)}function ly(i,e){let t=$s(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cy(i,e){let t=$s(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hy(i,e){let t=$s(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fy(i,e){i.uniform1iv(this.addr,e)}function uy(i,e){i.uniform2iv(this.addr,e)}function dy(i,e){i.uniform3iv(this.addr,e)}function py(i,e){i.uniform4iv(this.addr,e)}function my(i,e){i.uniform1uiv(this.addr,e)}function gy(i,e){i.uniform2uiv(this.addr,e)}function yy(i,e){i.uniform3uiv(this.addr,e)}function xy(i,e){i.uniform4uiv(this.addr,e)}function _y(i,e,t){let n=this.cache,s=e.length,r=Ga(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Vf,r[a])}function vy(i,e,t){let n=this.cache,s=e.length,r=Ga(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Wf,r[a])}function by(i,e,t){let n=this.cache,s=e.length,r=Ga(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Gf,r[a])}function My(i,e,t){let n=this.cache,s=e.length,r=Ga(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Hf,r[a])}function wy(i){switch(i){case 5126:return sy;case 35664:return ry;case 35665:return ay;case 35666:return oy;case 35674:return ly;case 35675:return cy;case 35676:return hy;case 5124:case 35670:return fy;case 35667:case 35671:return uy;case 35668:case 35672:return dy;case 35669:case 35673:return py;case 5125:return my;case 36294:return gy;case 36295:return yy;case 36296:return xy;case 35678:case 36198:case 36298:case 36306:case 35682:return _y;case 35679:case 36299:case 36307:return vy;case 35680:case 36300:case 36308:case 36293:return by;case 36289:case 36303:case 36311:case 36292:return My}}function gf(i,e){i.seq.push(e),i.map[e.id]=e}function Sy(i,e,t){let n=i.name,s=n.length;for(Ml.lastIndex=0;;){let r=Ml.exec(n),a=Ml.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){gf(t,c===void 0?new Nl(o,i,e):new Fl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Ol(o),gf(t,u)),t=u}}}function yf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function Ey(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Ay(i){switch(i){case Ki:return["Linear","( value )"];case lt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function xf(i,e,t){let n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ey(i.getShaderSource(e),a)}else return s}function Ry(i,e){let t=Ay(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Cy(i,e){let t;switch(e){case ep:t="Linear";break;case tp:t="Reinhard";break;case np:t="OptimizedCineon";break;case ip:t="ACESFilmic";break;case sp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Py(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(dr).join(`
`)}function Ly(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Iy(i,e){let t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function dr(i){return i!==""}function _f(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function zl(i){return i.replace(Dy,ky)}function ky(i,e){let t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return zl(t)}function bf(i){return i.replace(Ny,Fy)}function Fy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mf(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Oy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ic?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ur&&(e="SHADOWMAP_TYPE_VSM"),e}function zy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ws:case Gs:e="ENVMAP_TYPE_CUBE";break;case Wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Uy(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Gs&&(e="ENVMAP_MODE_REFRACTION"),e}function By(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Df:e="ENVMAP_BLENDING_MULTIPLY";break;case jd:e="ENVMAP_BLENDING_MIX";break;case Qd:e="ENVMAP_BLENDING_ADD";break}return e}function Vy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Hy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Oy(t),c=zy(t),h=Uy(t),u=By(t),f=Vy(t),d=t.isWebGL2?"":Py(t),y=Ly(r),m=s.createProgram(),p,v,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[y].filter(dr).join(`
`),p.length>0&&(p+=`
`),v=[d,y].filter(dr).join(`
`),v.length>0&&(v+=`
`)):(p=[Mf(t),"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),v=[d,Mf(t),"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Oe.tonemapping_pars_fragment:"",t.toneMapping!==ii?Cy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,Ry("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=zl(a),a=_f(a,t),a=vf(a,t),o=zl(o),o=_f(o,t),o=vf(o,t),a=bf(a),o=bf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let g=M+p+a,x=M+v+o,b=yf(s,35633,g),E=yf(s,35632,x);if(s.attachShader(m,b),s.attachShader(m,E),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),i.debug.checkShaderErrors){let S=s.getProgramInfoLog(m).trim(),C=s.getShaderInfoLog(b).trim(),F=s.getShaderInfoLog(E).trim(),U=!0,N=!0;if(s.getProgramParameter(m,35714)===!1){U=!1;let L=xf(s,b,"vertex"),G=xf(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+S+`
`+L+`
`+G)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(C===""||F==="")&&(N=!1);N&&(this.diagnostics={runnable:U,programLog:S,vertexShader:{log:C,prefix:p},fragmentShader:{log:F,prefix:v}})}s.deleteShader(b),s.deleteShader(E);let R;this.getUniforms=function(){return R===void 0&&(R=new Hs(s,m)),R};let _;return this.getAttributes=function(){return _===void 0&&(_=Iy(s,m)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Ty++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=E,this}function Gy(i,e,t,n,s,r,a){let o=new wa,l=new Ul,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_,S,C,F,U){let N=F.fog,L=U.geometry,G=_.isMeshStandardMaterial?F.environment:null,$=(_.isMeshStandardMaterial?t:e).get(_.envMap||G),te=$&&$.mapping===Wa?$.image.height:null,Y=y[_.type];_.precision!==null&&(d=s.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let ne=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Z=ne!==void 0?ne.length:0,Me=0;L.morphAttributes.position!==void 0&&(Me=1),L.morphAttributes.normal!==void 0&&(Me=2),L.morphAttributes.color!==void 0&&(Me=3);let O,K,ae,oe;if(Y){let at=Un[Y];O=at.vertexShader,K=at.fragmentShader}else O=_.vertexShader,K=_.fragmentShader,l.update(_),ae=l.getVertexShaderID(_),oe=l.getFragmentShaderID(_);let z=i.getRenderTarget(),De=_.alphaTest>0,ge=_.clearcoat>0,ye=_.iridescence>0;return{isWebGL2:h,shaderID:Y,shaderName:_.type,vertexShader:O,fragmentShader:K,defines:_.defines,customVertexShaderID:ae,customFragmentShaderID:oe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,instancing:U.isInstancedMesh===!0,instancingColor:U.isInstancedMesh===!0&&U.instanceColor!==null,supportsVertexTextures:f,outputEncoding:z===null?i.outputEncoding:z.isXRRenderTarget===!0?z.texture.encoding:Ki,map:!!_.map,matcap:!!_.matcap,envMap:!!$,envMapMode:$&&$.mapping,envMapCubeUVHeight:te,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Mp,tangentSpaceNormalMap:_.normalMapType===Ff,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===lt,clearcoat:ge,clearcoatMap:ge&&!!_.clearcoatMap,clearcoatRoughnessMap:ge&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:ge&&!!_.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!_.iridescenceMap,iridescenceThicknessMap:ye&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===Bs,alphaMap:!!_.alphaMap,alphaTest:De,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!L.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!N,useFog:_.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:u,skinning:U.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:_.toneMapped?i.toneMapping:ii,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===bi,flipSided:_.side===sn,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)S.push(C),S.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(v(S,_),M(S,_),S.push(i.outputEncoding)),S.push(_.customProgramCacheKey),S.join()}function v(_,S){_.push(S.precision),_.push(S.outputEncoding),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.combine),_.push(S.vertexUvs),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function M(_,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.map&&o.enable(4),S.matcap&&o.enable(5),S.envMap&&o.enable(6),S.lightMap&&o.enable(7),S.aoMap&&o.enable(8),S.emissiveMap&&o.enable(9),S.bumpMap&&o.enable(10),S.normalMap&&o.enable(11),S.objectSpaceNormalMap&&o.enable(12),S.tangentSpaceNormalMap&&o.enable(13),S.clearcoat&&o.enable(14),S.clearcoatMap&&o.enable(15),S.clearcoatRoughnessMap&&o.enable(16),S.clearcoatNormalMap&&o.enable(17),S.iridescence&&o.enable(18),S.iridescenceMap&&o.enable(19),S.iridescenceThicknessMap&&o.enable(20),S.displacementMap&&o.enable(21),S.specularMap&&o.enable(22),S.roughnessMap&&o.enable(23),S.metalnessMap&&o.enable(24),S.gradientMap&&o.enable(25),S.alphaMap&&o.enable(26),S.alphaTest&&o.enable(27),S.vertexColors&&o.enable(28),S.vertexAlphas&&o.enable(29),S.vertexUvs&&o.enable(30),S.vertexTangents&&o.enable(31),S.uvsVertexOnly&&o.enable(32),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.physicallyCorrectLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.specularIntensityMap&&o.enable(15),S.specularColorMap&&o.enable(16),S.transmission&&o.enable(17),S.transmissionMap&&o.enable(18),S.thicknessMap&&o.enable(19),S.sheen&&o.enable(20),S.sheenColorMap&&o.enable(21),S.sheenRoughnessMap&&o.enable(22),S.decodeVideoTexture&&o.enable(23),S.opaque&&o.enable(24),_.push(o.mask)}function g(_){let S=y[_.type],C;if(S){let F=Un[S];C=Op.clone(F.uniforms)}else C=_.uniforms;return C}function x(_,S){let C;for(let F=0,U=c.length;F<U;F++){let N=c[F];if(N.cacheKey===S){C=N,++C.usedTimes;break}}return C===void 0&&(C=new Hy(i,S,_,r),c.push(C)),C}function b(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),_.destroy()}}function E(_){l.remove(_)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:g,acquireProgram:x,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:R}}function qy(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Xy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,d,y,m,p){let v=i[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:d,groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},i[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=d,v.groupOrder=y,v.renderOrder=u.renderOrder,v.z=m,v.group=p),e++,v}function o(u,f,d,y,m,p){let v=a(u,f,d,y,m,p);d.transmission>0?n.push(v):d.transparent===!0?s.push(v):t.push(v)}function l(u,f,d,y,m,p){let v=a(u,f,d,y,m,p);d.transmission>0?n.unshift(v):d.transparent===!0?s.unshift(v):t.unshift(v)}function c(u,f){t.length>1&&t.sort(u||Xy),n.length>1&&n.sort(f||wf),s.length>1&&s.sort(f||wf)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Yy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Sf,i.set(n,[a])):s>=r.length?(a=new Sf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Je};break;case"SpotLight":t={position:new D,direction:new D,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function $y(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function Ky(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function jy(i,e){let t=new Jy,n=$y(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)s.probe.push(new D);let r=new D,a=new xt,o=new xt;function l(h,u){let f=0,d=0,y=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let m=0,p=0,v=0,M=0,g=0,x=0,b=0,E=0,R=0,_=0;h.sort(Ky);let S=u!==!0?Math.PI:1;for(let F=0,U=h.length;F<U;F++){let N=h[F],L=N.color,G=N.intensity,$=N.distance,te=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=L.r*G*S,d+=L.g*G*S,y+=L.b*G*S;else if(N.isLightProbe)for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(N.sh.coefficients[Y],G);else if(N.isDirectionalLight){let Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*S),N.castShadow){let ne=N.shadow,Z=n.get(N);Z.shadowBias=ne.bias,Z.shadowNormalBias=ne.normalBias,Z.shadowRadius=ne.radius,Z.shadowMapSize=ne.mapSize,s.directionalShadow[m]=Z,s.directionalShadowMap[m]=te,s.directionalShadowMatrix[m]=N.shadow.matrix,x++}s.directional[m]=Y,m++}else if(N.isSpotLight){let Y=t.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(L).multiplyScalar(G*S),Y.distance=$,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,s.spot[v]=Y;let ne=N.shadow;if(N.map&&(s.spotLightMap[R]=N.map,R++,ne.updateMatrices(N),N.castShadow&&_++),s.spotLightMatrix[v]=ne.matrix,N.castShadow){let Z=n.get(N);Z.shadowBias=ne.bias,Z.shadowNormalBias=ne.normalBias,Z.shadowRadius=ne.radius,Z.shadowMapSize=ne.mapSize,s.spotShadow[v]=Z,s.spotShadowMap[v]=te,E++}v++}else if(N.isRectAreaLight){let Y=t.get(N);Y.color.copy(L).multiplyScalar(G),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),s.rectArea[M]=Y,M++}else if(N.isPointLight){let Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*S),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){let ne=N.shadow,Z=n.get(N);Z.shadowBias=ne.bias,Z.shadowNormalBias=ne.normalBias,Z.shadowRadius=ne.radius,Z.shadowMapSize=ne.mapSize,Z.shadowCameraNear=ne.camera.near,Z.shadowCameraFar=ne.camera.far,s.pointShadow[p]=Z,s.pointShadowMap[p]=te,s.pointShadowMatrix[p]=N.shadow.matrix,b++}s.point[p]=Y,p++}else if(N.isHemisphereLight){let Y=t.get(N);Y.skyColor.copy(N.color).multiplyScalar(G*S),Y.groundColor.copy(N.groundColor).multiplyScalar(G*S),s.hemi[g]=Y,g++}}M>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=se.LTC_FLOAT_1,s.rectAreaLTC2=se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=se.LTC_HALF_1,s.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=y;let C=s.hash;(C.directionalLength!==m||C.pointLength!==p||C.spotLength!==v||C.rectAreaLength!==M||C.hemiLength!==g||C.numDirectionalShadows!==x||C.numPointShadows!==b||C.numSpotShadows!==E||C.numSpotMaps!==R)&&(s.directional.length=m,s.spot.length=v,s.rectArea.length=M,s.point.length=p,s.hemi.length=g,s.directionalShadow.length=x,s.directionalShadowMap.length=x,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=x,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=E+R-_,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=_,C.directionalLength=m,C.pointLength=p,C.spotLength=v,C.rectAreaLength=M,C.hemiLength=g,C.numDirectionalShadows=x,C.numPointShadows=b,C.numSpotShadows=E,C.numSpotMaps=R,s.version=Zy++)}function c(h,u){let f=0,d=0,y=0,m=0,p=0,v=u.matrixWorldInverse;for(let M=0,g=h.length;M<g;M++){let x=h[M];if(x.isDirectionalLight){let b=s.directional[f];b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(v),f++}else if(x.isSpotLight){let b=s.spot[y];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(v),y++}else if(x.isRectAreaLight){let b=s.rectArea[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(v),o.identity(),a.copy(x.matrixWorld),a.premultiply(v),o.extractRotation(a),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){let b=s.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(v),d++}else if(x.isHemisphereLight){let b=s.hemi[p];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:s}}function Tf(i,e){let t=new jy(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Qy(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Tf(i,e),t.set(r,[l])):a>=o.length?(l=new Tf(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}function nx(i,e,t){let n=new vr,s=new qe,r=new qe,a=new It,o=new Vl({depthPacking:bp}),l=new Hl,c={},h=t.maxTextureSize,u={[wi]:sn,[sn]:wi,[bi]:bi},f=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:ex,fragmentShader:tx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let y=new gn;y.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new Dt(y,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pf,this.render=function(x,b,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;let R=i.getRenderTarget(),_=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Mi),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);for(let F=0,U=x.length;F<U;F++){let N=x[F],L=N.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);let G=L.getFrameExtents();if(s.multiply(G),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,L.mapSize.y=r.y)),L.map===null){let te=this.type!==ur?{minFilter:Tt,magFilter:Tt}:{};L.map=new si(s.x,s.y,te),L.map.texture.name=N.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();let $=L.getViewportCount();for(let te=0;te<$;te++){let Y=L.getViewport(te);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),C.viewport(a),L.updateMatrices(N,te),n=L.getFrustum(),g(b,E,L.camera,N,this.type)}L.isPointLightShadow!==!0&&this.type===ur&&v(L,E),L.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(R,_,S)};function v(x,b){let E=e.update(m);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new si(s.x,s.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(b,null,E,f,m,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(b,null,E,d,m,null)}function M(x,b,E,R,_,S){let C=null,F=E.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(F!==void 0)C=F;else if(C=E.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let U=C.uuid,N=b.uuid,L=c[U];L===void 0&&(L={},c[U]=L);let G=L[N];G===void 0&&(G=C.clone(),L[N]=G),C=G}return C.visible=b.visible,C.wireframe=b.wireframe,S===ur?C.side=b.shadowSide!==null?b.shadowSide:b.side:C.side=b.shadowSide!==null?b.shadowSide:u[b.side],C.alphaMap=b.alphaMap,C.alphaTest=b.alphaTest,C.map=b.map,C.clipShadows=b.clipShadows,C.clippingPlanes=b.clippingPlanes,C.clipIntersection=b.clipIntersection,C.displacementMap=b.displacementMap,C.displacementScale=b.displacementScale,C.displacementBias=b.displacementBias,C.wireframeLinewidth=b.wireframeLinewidth,C.linewidth=b.linewidth,E.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(C.referencePosition.setFromMatrixPosition(E.matrixWorld),C.nearDistance=R,C.farDistance=_),C}function g(x,b,E,R,_){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&_===ur)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,x.matrixWorld);let F=e.update(x),U=x.material;if(Array.isArray(U)){let N=F.groups;for(let L=0,G=N.length;L<G;L++){let $=N[L],te=U[$.materialIndex];if(te&&te.visible){let Y=M(x,te,R,E.near,E.far,_);i.renderBufferDirect(E,null,F,Y,x,$)}}}else if(U.visible){let N=M(x,U,R,E.near,E.far,_);i.renderBufferDirect(E,null,F,N,x,null)}}let C=x.children;for(let F=0,U=C.length;F<U;F++)g(C[F],b,E,R,_)}}function ix(i,e,t){let n=t.isWebGL2;function s(){let P=!1,B=new It,j=null,he=new It(0,0,0,0);return{setMask:function(pe){j!==pe&&!P&&(i.colorMask(pe,pe,pe,pe),j=pe)},setLocked:function(pe){P=pe},setClear:function(pe,Ze,Ct,zt,Pi){Pi===!0&&(pe*=zt,Ze*=zt,Ct*=zt),B.set(pe,Ze,Ct,zt),he.equals(B)===!1&&(i.clearColor(pe,Ze,Ct,zt),he.copy(B))},reset:function(){P=!1,j=null,he.set(-1,0,0,0)}}}function r(){let P=!1,B=null,j=null,he=null;return{setTest:function(pe){pe?De(2929):ge(2929)},setMask:function(pe){B!==pe&&!P&&(i.depthMask(pe),B=pe)},setFunc:function(pe){if(j!==pe){switch(pe){case qd:i.depthFunc(512);break;case Xd:i.depthFunc(519);break;case Yd:i.depthFunc(513);break;case Sl:i.depthFunc(515);break;case Jd:i.depthFunc(514);break;case $d:i.depthFunc(518);break;case Zd:i.depthFunc(516);break;case Kd:i.depthFunc(517);break;default:i.depthFunc(515)}j=pe}},setLocked:function(pe){P=pe},setClear:function(pe){he!==pe&&(i.clearDepth(pe),he=pe)},reset:function(){P=!1,B=null,j=null,he=null}}}function a(){let P=!1,B=null,j=null,he=null,pe=null,Ze=null,Ct=null,zt=null,Pi=null;return{setTest:function(ft){P||(ft?De(2960):ge(2960))},setMask:function(ft){B!==ft&&!P&&(i.stencilMask(ft),B=ft)},setFunc:function(ft,Xn,hn){(j!==ft||he!==Xn||pe!==hn)&&(i.stencilFunc(ft,Xn,hn),j=ft,he=Xn,pe=hn)},setOp:function(ft,Xn,hn){(Ze!==ft||Ct!==Xn||zt!==hn)&&(i.stencilOp(ft,Xn,hn),Ze=ft,Ct=Xn,zt=hn)},setLocked:function(ft){P=ft},setClear:function(ft){Pi!==ft&&(i.clearStencil(ft),Pi=ft)},reset:function(){P=!1,B=null,j=null,he=null,pe=null,Ze=null,Ct=null,zt=null,Pi=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,f={},d={},y=new WeakMap,m=[],p=null,v=!1,M=null,g=null,x=null,b=null,E=null,R=null,_=null,S=!1,C=null,F=null,U=null,N=null,L=null,G=i.getParameter(35661),$=!1,te=0,Y=i.getParameter(7938);Y.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=te>=1):Y.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=te>=2);let ne=null,Z={},Me=i.getParameter(3088),O=i.getParameter(2978),K=new It().fromArray(Me),ae=new It().fromArray(O);function oe(P,B,j){let he=new Uint8Array(4),pe=i.createTexture();i.bindTexture(P,pe),i.texParameteri(P,10241,9728),i.texParameteri(P,10240,9728);for(let Ze=0;Ze<j;Ze++)i.texImage2D(B+Ze,0,6408,1,1,0,6408,5121,he);return pe}let z={};z[3553]=oe(3553,3553,1),z[34067]=oe(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(2929),l.setFunc(Sl),Ot(!1),cn(fh),De(2884),Vt(Mi);function De(P){f[P]!==!0&&(i.enable(P),f[P]=!0)}function ge(P){f[P]!==!1&&(i.disable(P),f[P]=!1)}function ye(P,B){return d[P]!==B?(i.bindFramebuffer(P,B),d[P]=B,n&&(P===36009&&(d[36160]=B),P===36160&&(d[36009]=B)),!0):!1}function fe(P,B){let j=m,he=!1;if(P)if(j=y.get(B),j===void 0&&(j=[],y.set(B,j)),P.isWebGLMultipleRenderTargets){let pe=P.texture;if(j.length!==pe.length||j[0]!==36064){for(let Ze=0,Ct=pe.length;Ze<Ct;Ze++)j[Ze]=36064+Ze;j.length=pe.length,he=!0}}else j[0]!==36064&&(j[0]=36064,he=!0);else j[0]!==1029&&(j[0]=1029,he=!0);he&&(t.isWebGL2?i.drawBuffers(j):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))}function at(P){return p!==P?(i.useProgram(P),p=P,!0):!1}let Ne={[zs]:32774,[kd]:32778,[Nd]:32779};if(n)Ne[mh]=32775,Ne[gh]=32776;else{let P=e.get("EXT_blend_minmax");P!==null&&(Ne[mh]=P.MIN_EXT,Ne[gh]=P.MAX_EXT)}let Ce={[Fd]:0,[Od]:1,[zd]:768,[Lf]:770,[Gd]:776,[Hd]:774,[Bd]:772,[Ud]:769,[If]:771,[Wd]:775,[Vd]:773};function Vt(P,B,j,he,pe,Ze,Ct,zt){if(P===Mi){v===!0&&(ge(3042),v=!1);return}if(v===!1&&(De(3042),v=!0),P!==Dd){if(P!==M||zt!==S){if((g!==zs||E!==zs)&&(i.blendEquation(32774),g=zs,E=zs),zt)switch(P){case Bs:i.blendFuncSeparate(1,771,1,771);break;case uh:i.blendFunc(1,1);break;case dh:i.blendFuncSeparate(0,769,0,1);break;case ph:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Bs:i.blendFuncSeparate(770,771,1,771);break;case uh:i.blendFunc(770,1);break;case dh:i.blendFuncSeparate(0,769,0,1);break;case ph:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,b=null,R=null,_=null,M=P,S=zt}return}pe=pe||B,Ze=Ze||j,Ct=Ct||he,(B!==g||pe!==E)&&(i.blendEquationSeparate(Ne[B],Ne[pe]),g=B,E=pe),(j!==x||he!==b||Ze!==R||Ct!==_)&&(i.blendFuncSeparate(Ce[j],Ce[he],Ce[Ze],Ce[Ct]),x=j,b=he,R=Ze,_=Ct),M=P,S=!1}function ln(P,B){P.side===bi?ge(2884):De(2884);let j=P.side===sn;B&&(j=!j),Ot(j),P.blending===Bs&&P.transparent===!1?Vt(Mi):Vt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);let he=P.stencilWrite;c.setTest(he),he&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ke(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?De(32926):ge(32926)}function Ot(P){C!==P&&(P?i.frontFace(2304):i.frontFace(2305),C=P)}function cn(P){P!==Ld?(De(2884),P!==F&&(P===fh?i.cullFace(1029):P===Id?i.cullFace(1028):i.cullFace(1032))):ge(2884),F=P}function wt(P){P!==U&&($&&i.lineWidth(P),U=P)}function Ke(P,B,j){P?(De(32823),(N!==B||L!==j)&&(i.polygonOffset(B,j),N=B,L=j)):ge(32823)}function qn(P){P?De(3089):ge(3089)}function vn(P){P===void 0&&(P=33984+G-1),ne!==P&&(i.activeTexture(P),ne=P)}function A(P,B,j){j===void 0&&(ne===null?j=33984+G-1:j=ne);let he=Z[j];he===void 0&&(he={type:void 0,texture:void 0},Z[j]=he),(he.type!==P||he.texture!==B)&&(ne!==j&&(i.activeTexture(j),ne=j),i.bindTexture(P,B||z[P]),he.type=P,he.texture=B)}function w(){let P=Z[ne];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function H(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(P){K.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),K.copy(P))}function _e(P){ae.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),ae.copy(P))}function Xe(P,B){let j=u.get(B);j===void 0&&(j=new WeakMap,u.set(B,j));let he=j.get(P);he===void 0&&(he=i.getUniformBlockIndex(B,P.name),j.set(P,he))}function ht(P,B){let he=u.get(B).get(P);h.get(B)!==he&&(i.uniformBlockBinding(B,he,P.__bindingPointIndex),h.set(B,he))}function Rt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ne=null,Z={},d={},y=new WeakMap,m=[],p=null,v=!1,M=null,g=null,x=null,b=null,E=null,R=null,_=null,S=!1,C=null,F=null,U=null,N=null,L=null,K.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:De,disable:ge,bindFramebuffer:ye,drawBuffers:fe,useProgram:at,setBlending:Vt,setMaterial:ln,setFlipSided:Ot,setCullFace:cn,setLineWidth:wt,setPolygonOffset:Ke,setScissorTest:qn,activeTexture:vn,bindTexture:A,unbindTexture:w,compressedTexImage2D:H,compressedTexImage3D:Q,texImage2D:Re,texImage3D:de,updateUBOMapping:Xe,uniformBlockBinding:ht,texStorage2D:X,texStorage3D:Ee,texSubImage2D:ie,texSubImage3D:le,compressedTexSubImage2D:Le,compressedTexSubImage3D:ce,scissor:Ae,viewport:_e,reset:Rt}}function sx(i,e,t,n,s,r,a){let o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,h=s.maxTextureSize,u=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap,m,p=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,w){return v?new OffscreenCanvas(A,w):xa("canvas")}function g(A,w,H,Q){let ie=1;if((A.width>Q||A.height>Q)&&(ie=Q/Math.max(A.width,A.height)),ie<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let le=w?Pl:Math.floor,Le=le(ie*A.width),ce=le(ie*A.height);m===void 0&&(m=M(Le,ce));let X=H?M(Le,ce):m;return X.width=Le,X.height=ce,X.getContext("2d").drawImage(A,0,0,Le,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Le+"x"+ce+")."),X}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function x(A){return Yh(A.width)&&Yh(A.height)}function b(A){return o?!1:A.wrapS!==Cn||A.wrapT!==Cn||A.minFilter!==Tt&&A.minFilter!==pn}function E(A,w){return A.generateMipmaps&&w&&A.minFilter!==Tt&&A.minFilter!==pn}function R(A){i.generateMipmap(A)}function _(A,w,H,Q,ie=!1){if(o===!1)return w;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le=w;return w===6403&&(H===5126&&(le=33326),H===5131&&(le=33325),H===5121&&(le=33321)),w===33319&&(H===5126&&(le=33328),H===5131&&(le=33327),H===5121&&(le=33323)),w===6408&&(H===5126&&(le=34836),H===5131&&(le=34842),H===5121&&(le=Q===lt&&ie===!1?35907:32856),H===32819&&(le=32854),H===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function S(A,w,H){return E(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==Tt&&A.minFilter!==pn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function C(A){return A===Tt||A===yh||A===Go?9728:9729}function F(A){let w=A.target;w.removeEventListener("dispose",F),N(w),w.isVideoTexture&&y.delete(w)}function U(A){let w=A.target;w.removeEventListener("dispose",U),G(w)}function N(A){let w=n.get(A);if(w.__webglInit===void 0)return;let H=A.source,Q=p.get(H);if(Q){let ie=Q[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&L(A),Object.keys(Q).length===0&&p.delete(H)}n.remove(A)}function L(A){let w=n.get(A);i.deleteTexture(w.__webglTexture);let H=A.source,Q=p.get(H);delete Q[w.__cacheKey],a.memory.textures--}function G(A){let w=A.texture,H=n.get(A),Q=n.get(w);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)i.deleteFramebuffer(H.__webglFramebuffer[ie]),H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[ie]);else{if(i.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ie=0;ie<H.__webglColorRenderbuffer.length;ie++)H.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[ie]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ie=0,le=w.length;ie<le;ie++){let Le=n.get(w[ie]);Le.__webglTexture&&(i.deleteTexture(Le.__webglTexture),a.memory.textures--),n.remove(w[ie])}n.remove(w),n.remove(A)}let $=0;function te(){$=0}function Y(){let A=$;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),$+=1,A}function ne(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.encoding),w.join()}function Z(A,w){let H=n.get(A);if(A.isVideoTexture&&qn(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){let Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(H,A,w);return}}t.bindTexture(3553,H.__webglTexture,33984+w)}function Me(A,w){let H=n.get(A);if(A.version>0&&H.__version!==A.version){ge(H,A,w);return}t.bindTexture(35866,H.__webglTexture,33984+w)}function O(A,w){let H=n.get(A);if(A.version>0&&H.__version!==A.version){ge(H,A,w);return}t.bindTexture(32879,H.__webglTexture,33984+w)}function K(A,w){let H=n.get(A);if(A.version>0&&H.__version!==A.version){ye(H,A,w);return}t.bindTexture(34067,H.__webglTexture,33984+w)}let ae={[Al]:10497,[Cn]:33071,[Rl]:33648},oe={[Tt]:9728,[yh]:9984,[Go]:9986,[pn]:9729,[rp]:9985,[gr]:9987};function z(A,w,H){if(H?(i.texParameteri(A,10242,ae[w.wrapS]),i.texParameteri(A,10243,ae[w.wrapT]),(A===32879||A===35866)&&i.texParameteri(A,32882,ae[w.wrapR]),i.texParameteri(A,10240,oe[w.magFilter]),i.texParameteri(A,10241,oe[w.minFilter])):(i.texParameteri(A,10242,33071),i.texParameteri(A,10243,33071),(A===32879||A===35866)&&i.texParameteri(A,32882,33071),(w.wrapS!==Cn||w.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,10240,C(w.magFilter)),i.texParameteri(A,10241,C(w.minFilter)),w.minFilter!==Tt&&w.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let Q=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Tt||w.minFilter!==Go&&w.minFilter!==gr||w.type===Yi&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===yr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(A,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function De(A,w){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",F));let Q=w.source,ie=p.get(Q);ie===void 0&&(ie={},p.set(Q,ie));let le=ne(w);if(le!==A.__cacheKey){ie[le]===void 0&&(ie[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ie[le].usedTimes++;let Le=ie[A.__cacheKey];Le!==void 0&&(ie[A.__cacheKey].usedTimes--,Le.usedTimes===0&&L(w)),A.__cacheKey=le,A.__webglTexture=ie[le].texture}return H}function ge(A,w,H){let Q=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=35866),w.isData3DTexture&&(Q=32879);let ie=De(A,w),le=w.source;t.bindTexture(Q,A.__webglTexture,33984+H);let Le=n.get(le);if(le.version!==Le.__version||ie===!0){t.activeTexture(33984+H),i.pixelStorei(37440,w.flipY),i.pixelStorei(37441,w.premultiplyAlpha),i.pixelStorei(3317,w.unpackAlignment),i.pixelStorei(37443,0);let ce=b(w)&&x(w.image)===!1,X=g(w.image,ce,!1,h);X=vn(w,X);let Ee=x(X)||o,Re=r.convert(w.format,w.encoding),de=r.convert(w.type),Ae=_(w.internalFormat,Re,de,w.encoding,w.isVideoTexture);z(Q,w,Ee);let _e,Xe=w.mipmaps,ht=o&&w.isVideoTexture!==!0,Rt=Le.__version===void 0||ie===!0,P=S(w,X,Ee);if(w.isDepthTexture)Ae=6402,o?w.type===Yi?Ae=36012:w.type===Xi?Ae=33190:w.type===Vs?Ae=35056:Ae=33189:w.type===Yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ji&&Ae===6402&&w.type!==Nf&&w.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Xi,de=r.convert(w.type)),w.format===qs&&Ae===6402&&(Ae=34041,w.type!==Vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Vs,de=r.convert(w.type))),Rt&&(ht?t.texStorage2D(3553,1,Ae,X.width,X.height):t.texImage2D(3553,0,Ae,X.width,X.height,0,Re,de,null));else if(w.isDataTexture)if(Xe.length>0&&Ee){ht&&Rt&&t.texStorage2D(3553,P,Ae,Xe[0].width,Xe[0].height);for(let B=0,j=Xe.length;B<j;B++)_e=Xe[B],ht?t.texSubImage2D(3553,B,0,0,_e.width,_e.height,Re,de,_e.data):t.texImage2D(3553,B,Ae,_e.width,_e.height,0,Re,de,_e.data);w.generateMipmaps=!1}else ht?(Rt&&t.texStorage2D(3553,P,Ae,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,Re,de,X.data)):t.texImage2D(3553,0,Ae,X.width,X.height,0,Re,de,X.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ht&&Rt&&t.texStorage3D(35866,P,Ae,Xe[0].width,Xe[0].height,X.depth);for(let B=0,j=Xe.length;B<j;B++)_e=Xe[B],w.format!==Pn?Re!==null?ht?t.compressedTexSubImage3D(35866,B,0,0,0,_e.width,_e.height,X.depth,Re,_e.data,0,0):t.compressedTexImage3D(35866,B,Ae,_e.width,_e.height,X.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?t.texSubImage3D(35866,B,0,0,0,_e.width,_e.height,X.depth,Re,de,_e.data):t.texImage3D(35866,B,Ae,_e.width,_e.height,X.depth,0,Re,de,_e.data)}else{ht&&Rt&&t.texStorage2D(3553,P,Ae,Xe[0].width,Xe[0].height);for(let B=0,j=Xe.length;B<j;B++)_e=Xe[B],w.format!==Pn?Re!==null?ht?t.compressedTexSubImage2D(3553,B,0,0,_e.width,_e.height,Re,_e.data):t.compressedTexImage2D(3553,B,Ae,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?t.texSubImage2D(3553,B,0,0,_e.width,_e.height,Re,de,_e.data):t.texImage2D(3553,B,Ae,_e.width,_e.height,0,Re,de,_e.data)}else if(w.isDataArrayTexture)ht?(Rt&&t.texStorage3D(35866,P,Ae,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,Re,de,X.data)):t.texImage3D(35866,0,Ae,X.width,X.height,X.depth,0,Re,de,X.data);else if(w.isData3DTexture)ht?(Rt&&t.texStorage3D(32879,P,Ae,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,Re,de,X.data)):t.texImage3D(32879,0,Ae,X.width,X.height,X.depth,0,Re,de,X.data);else if(w.isFramebufferTexture){if(Rt)if(ht)t.texStorage2D(3553,P,Ae,X.width,X.height);else{let B=X.width,j=X.height;for(let he=0;he<P;he++)t.texImage2D(3553,he,Ae,B,j,0,Re,de,null),B>>=1,j>>=1}}else if(Xe.length>0&&Ee){ht&&Rt&&t.texStorage2D(3553,P,Ae,Xe[0].width,Xe[0].height);for(let B=0,j=Xe.length;B<j;B++)_e=Xe[B],ht?t.texSubImage2D(3553,B,0,0,Re,de,_e):t.texImage2D(3553,B,Ae,Re,de,_e);w.generateMipmaps=!1}else ht?(Rt&&t.texStorage2D(3553,P,Ae,X.width,X.height),t.texSubImage2D(3553,0,0,0,Re,de,X)):t.texImage2D(3553,0,Ae,Re,de,X);E(w,Ee)&&R(Q),Le.__version=le.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ye(A,w,H){if(w.image.length!==6)return;let Q=De(A,w),ie=w.source;t.bindTexture(34067,A.__webglTexture,33984+H);let le=n.get(ie);if(ie.version!==le.__version||Q===!0){t.activeTexture(33984+H),i.pixelStorei(37440,w.flipY),i.pixelStorei(37441,w.premultiplyAlpha),i.pixelStorei(3317,w.unpackAlignment),i.pixelStorei(37443,0);let Le=w.isCompressedTexture||w.image[0].isCompressedTexture,ce=w.image[0]&&w.image[0].isDataTexture,X=[];for(let B=0;B<6;B++)!Le&&!ce?X[B]=g(w.image[B],!1,!0,c):X[B]=ce?w.image[B].image:w.image[B],X[B]=vn(w,X[B]);let Ee=X[0],Re=x(Ee)||o,de=r.convert(w.format,w.encoding),Ae=r.convert(w.type),_e=_(w.internalFormat,de,Ae,w.encoding),Xe=o&&w.isVideoTexture!==!0,ht=le.__version===void 0||Q===!0,Rt=S(w,Ee,Re);z(34067,w,Re);let P;if(Le){Xe&&ht&&t.texStorage2D(34067,Rt,_e,Ee.width,Ee.height);for(let B=0;B<6;B++){P=X[B].mipmaps;for(let j=0;j<P.length;j++){let he=P[j];w.format!==Pn?de!==null?Xe?t.compressedTexSubImage2D(34069+B,j,0,0,he.width,he.height,de,he.data):t.compressedTexImage2D(34069+B,j,_e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(34069+B,j,0,0,he.width,he.height,de,Ae,he.data):t.texImage2D(34069+B,j,_e,he.width,he.height,0,de,Ae,he.data)}}}else{P=w.mipmaps,Xe&&ht&&(P.length>0&&Rt++,t.texStorage2D(34067,Rt,_e,X[0].width,X[0].height));for(let B=0;B<6;B++)if(ce){Xe?t.texSubImage2D(34069+B,0,0,0,X[B].width,X[B].height,de,Ae,X[B].data):t.texImage2D(34069+B,0,_e,X[B].width,X[B].height,0,de,Ae,X[B].data);for(let j=0;j<P.length;j++){let pe=P[j].image[B].image;Xe?t.texSubImage2D(34069+B,j+1,0,0,pe.width,pe.height,de,Ae,pe.data):t.texImage2D(34069+B,j+1,_e,pe.width,pe.height,0,de,Ae,pe.data)}}else{Xe?t.texSubImage2D(34069+B,0,0,0,de,Ae,X[B]):t.texImage2D(34069+B,0,_e,de,Ae,X[B]);for(let j=0;j<P.length;j++){let he=P[j];Xe?t.texSubImage2D(34069+B,j+1,0,0,de,Ae,he.image[B]):t.texImage2D(34069+B,j+1,_e,de,Ae,he.image[B])}}}E(w,Re)&&R(34067),le.__version=ie.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function fe(A,w,H,Q,ie){let le=r.convert(H.format,H.encoding),Le=r.convert(H.type),ce=_(H.internalFormat,le,Le,H.encoding);n.get(w).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,ce,w.width,w.height,w.depth,0,le,Le,null):t.texImage2D(ie,0,ce,w.width,w.height,0,le,Le,null)),t.bindFramebuffer(36160,A),Ke(w)?f.framebufferTexture2DMultisampleEXT(36160,Q,ie,n.get(H).__webglTexture,0,wt(w)):(ie===3553||ie>=34069&&ie<=34074)&&i.framebufferTexture2D(36160,Q,ie,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function at(A,w,H){if(i.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let Q=33189;if(H||Ke(w)){let ie=w.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Yi?Q=36012:ie.type===Xi&&(Q=33190));let le=wt(w);Ke(w)?f.renderbufferStorageMultisampleEXT(36161,le,Q,w.width,w.height):i.renderbufferStorageMultisample(36161,le,Q,w.width,w.height)}else i.renderbufferStorage(36161,Q,w.width,w.height);i.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){let Q=wt(w);H&&Ke(w)===!1?i.renderbufferStorageMultisample(36161,Q,35056,w.width,w.height):Ke(w)?f.renderbufferStorageMultisampleEXT(36161,Q,35056,w.width,w.height):i.renderbufferStorage(36161,34041,w.width,w.height),i.framebufferRenderbuffer(36160,33306,36161,A)}else{let Q=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ie=0;ie<Q.length;ie++){let le=Q[ie],Le=r.convert(le.format,le.encoding),ce=r.convert(le.type),X=_(le.internalFormat,Le,ce,le.encoding),Ee=wt(w);H&&Ke(w)===!1?i.renderbufferStorageMultisample(36161,Ee,X,w.width,w.height):Ke(w)?f.renderbufferStorageMultisampleEXT(36161,Ee,X,w.width,w.height):i.renderbufferStorage(36161,X,w.width,w.height)}}i.bindRenderbuffer(36161,null)}function Ne(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z(w.depthTexture,0);let Q=n.get(w.depthTexture).__webglTexture,ie=wt(w);if(w.depthTexture.format===Ji)Ke(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ie):i.framebufferTexture2D(36160,36096,3553,Q,0);else if(w.depthTexture.format===qs)Ke(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ie):i.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function Ce(A){let w=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ne(w.__webglFramebuffer,A)}else if(H){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]=i.createRenderbuffer(),at(w.__webglDepthbuffer[Q],A,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),at(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function Vt(A,w,H){let Q=n.get(A);w!==void 0&&fe(Q.__webglFramebuffer,A,A.texture,36064,3553),H!==void 0&&Ce(A)}function ln(A){let w=A.texture,H=n.get(A),Q=n.get(w);A.addEventListener("dispose",U),A.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=w.version,a.memory.textures++);let ie=A.isWebGLCubeRenderTarget===!0,le=A.isWebGLMultipleRenderTargets===!0,Le=x(A)||o;if(ie){H.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)H.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(H.__webglFramebuffer=i.createFramebuffer(),le)if(s.drawBuffers){let ce=A.texture;for(let X=0,Ee=ce.length;X<Ee;X++){let Re=n.get(ce[X]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Ke(A)===!1){let ce=le?w:[w];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let X=0;X<ce.length;X++){let Ee=ce[X];H.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(36161,H.__webglColorRenderbuffer[X]);let Re=r.convert(Ee.format,Ee.encoding),de=r.convert(Ee.type),Ae=_(Ee.internalFormat,Re,de,Ee.encoding,A.isXRRenderTarget===!0),_e=wt(A);i.renderbufferStorageMultisample(36161,_e,Ae,A.width,A.height),i.framebufferRenderbuffer(36160,36064+X,36161,H.__webglColorRenderbuffer[X])}i.bindRenderbuffer(36161,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),at(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,Q.__webglTexture),z(34067,w,Le);for(let ce=0;ce<6;ce++)fe(H.__webglFramebuffer[ce],A,w,36064,34069+ce);E(w,Le)&&R(34067),t.unbindTexture()}else if(le){let ce=A.texture;for(let X=0,Ee=ce.length;X<Ee;X++){let Re=ce[X],de=n.get(Re);t.bindTexture(3553,de.__webglTexture),z(3553,Re,Le),fe(H.__webglFramebuffer,A,Re,36064+X,3553),E(Re,Le)&&R(3553)}t.unbindTexture()}else{let ce=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ce=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,Q.__webglTexture),z(ce,w,Le),fe(H.__webglFramebuffer,A,w,36064,ce),E(w,Le)&&R(ce),t.unbindTexture()}A.depthBuffer&&Ce(A)}function Ot(A){let w=x(A)||o,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Q=0,ie=H.length;Q<ie;Q++){let le=H[Q];if(E(le,w)){let Le=A.isWebGLCubeRenderTarget?34067:3553,ce=n.get(le).__webglTexture;t.bindTexture(Le,ce),R(Le),t.unbindTexture()}}}function cn(A){if(o&&A.samples>0&&Ke(A)===!1){let w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,Q=A.height,ie=16384,le=[],Le=A.stencilBuffer?33306:36096,ce=n.get(A),X=A.isWebGLMultipleRenderTargets===!0;if(X)for(let Ee=0;Ee<w.length;Ee++)t.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Ee,36161,null),t.bindFramebuffer(36160,ce.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Ee,3553,null,0);t.bindFramebuffer(36008,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ce.__webglFramebuffer);for(let Ee=0;Ee<w.length;Ee++){le.push(36064+Ee),A.depthBuffer&&le.push(Le);let Re=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Re===!1&&(A.depthBuffer&&(ie|=256),A.stencilBuffer&&(ie|=1024)),X&&i.framebufferRenderbuffer(36008,36064,36161,ce.__webglColorRenderbuffer[Ee]),Re===!0&&(i.invalidateFramebuffer(36008,[Le]),i.invalidateFramebuffer(36009,[Le])),X){let de=n.get(w[Ee]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,de,0)}i.blitFramebuffer(0,0,H,Q,0,0,H,Q,ie,9728),d&&i.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let Ee=0;Ee<w.length;Ee++){t.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Ee,36161,ce.__webglColorRenderbuffer[Ee]);let Re=n.get(w[Ee]).__webglTexture;t.bindFramebuffer(36160,ce.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Ee,3553,Re,0)}t.bindFramebuffer(36009,ce.__webglMultisampledFramebuffer)}}function wt(A){return Math.min(u,A.samples)}function Ke(A){let w=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function qn(A){let w=a.render.frame;y.get(A)!==w&&(y.set(A,w),A.update())}function vn(A,w){let H=A.encoding,Q=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Cl||H!==Ki&&(H===lt?o===!1?e.has("EXT_sRGB")===!0&&Q===Pn?(A.format=Cl,A.minFilter=pn,A.generateMipmaps=!1):w=_a.sRGBToLinear(w):(Q!==Pn||ie!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),w}this.allocateTextureUnit=Y,this.resetTextureUnits=te,this.setTexture2D=Z,this.setTexture2DArray=Me,this.setTexture3D=O,this.setTextureCube=K,this.rebindTextures=Vt,this.setupRenderTarget=ln,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Ke}function rx(i,e,t){let n=t.isWebGL2;function s(r,a=null){let o;if(r===Zi)return 5121;if(r===cp)return 32819;if(r===hp)return 32820;if(r===ap)return 5120;if(r===op)return 5122;if(r===Nf)return 5123;if(r===lp)return 5124;if(r===Xi)return 5125;if(r===Yi)return 5126;if(r===yr)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===fp)return 6406;if(r===Pn)return 6408;if(r===up)return 6409;if(r===dp)return 6410;if(r===Ji)return 6402;if(r===qs)return 34041;if(r===Cl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===sc)return 6403;if(r===pp)return 36244;if(r===mp)return 33319;if(r===gp)return 33320;if(r===yp)return 36249;if(r===qo||r===Xo||r===Yo||r===Jo)if(a===lt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===qo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===qo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Jo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xh||r===_h||r===vh||r===bh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===xh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_h)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Mh||r===wh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Mh)return a===lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===wh)return a===lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Sh||r===Th||r===Eh||r===Ah||r===Rh||r===Ch||r===Ph||r===Lh||r===Ih||r===Dh||r===kh||r===Nh||r===Fh||r===Oh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Sh)return a===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Th)return a===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Eh)return a===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ah)return a===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rh)return a===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ch)return a===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ph)return a===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Lh)return a===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ih)return a===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Dh)return a===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kh)return a===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Nh)return a===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fh)return a===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Oh)return a===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$o)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===$o)return a===lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===_p||r===zh||r===Uh||r===Bh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===$o)return o.COMPRESSED_RED_RGTC1_EXT;if(r===zh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Uh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vs?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}function ox(i,e){function t(m,p){p.color.getRGB(m.fogColor.value,Uf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,M,g){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,g)):p.isMeshMatcapMaterial?(s(m,p),d(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?o(m,p,v,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix));let g;p.aoMap?g=p.aoMap:p.lightMap&&(g=p.lightMap),g!==void 0&&(g.isWebGLRenderTarget&&(g=g.texture),g.matrixAutoUpdate===!0&&g.updateMatrix(),m.uv2Transform.value.copy(g.matrix))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),m.uvTransform.value.copy(g.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===sn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function lx(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(35375):0;function l(M,g){let x=g.program;n.uniformBlockBinding(M,x)}function c(M,g){let x=s[M.id];x===void 0&&(y(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",p));let b=g.program;n.updateUBOMapping(M,b);let E=e.render.frame;r[M.id]!==E&&(f(M),r[M.id]=E)}function h(M){let g=u();M.__bindingPointIndex=g;let x=i.createBuffer(),b=M.__size,E=M.usage;return i.bindBuffer(35345,x),i.bufferData(35345,b,E),i.bindBuffer(35345,null),i.bindBufferBase(35345,g,x),x}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let g=s[M.id],x=M.uniforms,b=M.__cache;i.bindBuffer(35345,g);for(let E=0,R=x.length;E<R;E++){let _=x[E];if(d(_,E,b)===!0){let S=_.__offset,C=Array.isArray(_.value)?_.value:[_.value],F=0;for(let U=0;U<C.length;U++){let N=C[U],L=m(N);typeof N=="number"?(_.__data[0]=N,i.bufferSubData(35345,S+F,_.__data)):N.isMatrix3?(_.__data[0]=N.elements[0],_.__data[1]=N.elements[1],_.__data[2]=N.elements[2],_.__data[3]=N.elements[0],_.__data[4]=N.elements[3],_.__data[5]=N.elements[4],_.__data[6]=N.elements[5],_.__data[7]=N.elements[0],_.__data[8]=N.elements[6],_.__data[9]=N.elements[7],_.__data[10]=N.elements[8],_.__data[11]=N.elements[0]):(N.toArray(_.__data,F),F+=L.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,S,_.__data)}}i.bindBuffer(35345,null)}function d(M,g,x){let b=M.value;if(x[g]===void 0){if(typeof b=="number")x[g]=b;else{let E=Array.isArray(b)?b:[b],R=[];for(let _=0;_<E.length;_++)R.push(E[_].clone());x[g]=R}return!0}else if(typeof b=="number"){if(x[g]!==b)return x[g]=b,!0}else{let E=Array.isArray(x[g])?x[g]:[x[g]],R=Array.isArray(b)?b:[b];for(let _=0;_<E.length;_++){let S=E[_];if(S.equals(R[_])===!1)return S.copy(R[_]),!0}}return!1}function y(M){let g=M.uniforms,x=0,b=16,E=0;for(let R=0,_=g.length;R<_;R++){let S=g[R],C={boundary:0,storage:0},F=Array.isArray(S.value)?S.value:[S.value];for(let U=0,N=F.length;U<N;U++){let L=F[U],G=m(L);C.boundary+=G.boundary,C.storage+=G.storage}if(S.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=x,R>0){E=x%b;let U=b-E;E!==0&&U-C.boundary<0&&(x+=b-E,S.__offset=x)}x+=C.storage}return E=x%b,E>0&&(x+=b-E),M.__size=x,M.__cache={},this}function m(M){let g={boundary:0,storage:0};return typeof M=="number"?(g.boundary=4,g.storage=4):M.isVector2?(g.boundary=8,g.storage=8):M.isVector3||M.isColor?(g.boundary=16,g.storage=12):M.isVector4?(g.boundary=16,g.storage=16):M.isMatrix3?(g.boundary=48,g.storage=48):M.isMatrix4?(g.boundary=64,g.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),g}function p(M){let g=M.target;g.removeEventListener("dispose",p);let x=a.indexOf(g.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function v(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:v}}function cx(){let i=xa("canvas");return i.style.display="block",i}function ac(i={}){this.isWebGLRenderer=!0;let e=i.canvas!==void 0?i.canvas:cx(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1,h;t!==null?h=t.getContextAttributes().alpha:h=i.alpha!==void 0?i.alpha:!1;let u=null,f=null,d=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ki,this.physicallyCorrectLights=!1,this.toneMapping=ii,this.toneMappingExposure=1;let m=this,p=!1,v=0,M=0,g=null,x=-1,b=null,E=new It,R=new It,_=null,S=e.width,C=e.height,F=1,U=null,N=null,L=new It(0,0,S,C),G=new It(0,0,S,C),$=!1,te=new vr,Y=!1,ne=!1,Z=null,Me=new xt,O=new qe,K=new D,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return g===null?F:1}let z=t;function De(T,k){for(let V=0;V<T.length;V++){let I=T[V],W=e.getContext(I,k);if(W!==null)return W}return null}try{let T={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r149"),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",Xe,!1),z===null){let k=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&k.shift(),z=De(k,T),z===null)throw De(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ge,ye,fe,at,Ne,Ce,Vt,ln,Ot,cn,wt,Ke,qn,vn,A,w,H,Q,ie,le,Le,ce,X,Ee;function Re(){ge=new Pg(z),ye=new Sg(z,ge,i),ge.init(ye),ce=new rx(z,ge,ye),fe=new ix(z,ge,ye),at=new Dg,Ne=new qy,Ce=new sx(z,ge,fe,Ne,ye,ce,at),Vt=new Eg(m),ln=new Cg(m),Ot=new Hp(z,ye),X=new Mg(z,ge,Ot,ye),cn=new Lg(z,Ot,at,X),wt=new Og(z,cn,Ot,at),ie=new Fg(z,ye,Ce),w=new Tg(Ne),Ke=new Gy(m,Vt,ln,ge,ye,X,w),qn=new ox(m,Ne),vn=new Yy,A=new Qy(ge,ye),Q=new bg(m,Vt,ln,fe,wt,h,a),H=new nx(m,wt,ye),Ee=new lx(z,at,ye,fe),le=new wg(z,ge,at,ye),Le=new Ig(z,ge,at,ye),at.programs=Ke.programs,m.capabilities=ye,m.extensions=ge,m.properties=Ne,m.renderLists=vn,m.shadowMap=H,m.state=fe,m.info=at}Re();let de=new ql(m,z);this.xr=de,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let T=ge.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ge.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(T){T!==void 0&&(F=T,this.setSize(S,C,!1))},this.getSize=function(T){return T.set(S,C)},this.setSize=function(T,k,V){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=T,C=k,e.width=Math.floor(T*F),e.height=Math.floor(k*F),V!==!1&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(S*F,C*F).floor()},this.setDrawingBufferSize=function(T,k,V){S=T,C=k,F=V,e.width=Math.floor(T*V),e.height=Math.floor(k*V),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(L)},this.setViewport=function(T,k,V,I){T.isVector4?L.set(T.x,T.y,T.z,T.w):L.set(T,k,V,I),fe.viewport(E.copy(L).multiplyScalar(F).floor())},this.getScissor=function(T){return T.copy(G)},this.setScissor=function(T,k,V,I){T.isVector4?G.set(T.x,T.y,T.z,T.w):G.set(T,k,V,I),fe.scissor(R.copy(G).multiplyScalar(F).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(T){fe.setScissorTest($=T)},this.setOpaqueSort=function(T){U=T},this.setTransparentSort=function(T){N=T},this.getClearColor=function(T){return T.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(T=!0,k=!0,V=!0){let I=0;T&&(I|=16384),k&&(I|=256),V&&(I|=1024),z.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",Xe,!1),vn.dispose(),A.dispose(),Ne.dispose(),Vt.dispose(),ln.dispose(),wt.dispose(),X.dispose(),Ee.dispose(),Ke.dispose(),de.dispose(),de.removeEventListener("sessionstart",he),de.removeEventListener("sessionend",pe),Z&&(Z.dispose(),Z=null),Ze.stop()};function Ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;let T=at.autoReset,k=H.enabled,V=H.autoUpdate,I=H.needsUpdate,W=H.type;Re(),at.autoReset=T,H.enabled=k,H.autoUpdate=V,H.needsUpdate=I,H.type=W}function Xe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ht(T){let k=T.target;k.removeEventListener("dispose",ht),Rt(k)}function Rt(T){P(T),Ne.remove(T)}function P(T){let k=Ne.get(T).programs;k!==void 0&&(k.forEach(function(V){Ke.releaseProgram(V)}),T.isShaderMaterial&&Ke.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,V,I,W,we){k===null&&(k=ae);let Ie=W.isMesh&&W.matrixWorld.determinant()<0,Ue=Eu(T,k,V,I,W);fe.setMaterial(I,Ie);let Be=V.index,Ye=1;I.wireframe===!0&&(Be=cn.getWireframeAttribute(V),Ye=2);let He=V.drawRange,We=V.attributes.position,_t=He.start*Ye,$t=(He.start+He.count)*Ye;we!==null&&(_t=Math.max(_t,we.start*Ye),$t=Math.min($t,(we.start+we.count)*Ye)),Be!==null?(_t=Math.max(_t,0),$t=Math.min($t,Be.count)):We!=null&&(_t=Math.max(_t,0),$t=Math.min($t,We.count));let Yn=$t-_t;if(Yn<0||Yn===1/0)return;X.setup(W,I,Ue,V,Be);let Li,vt=le;if(Be!==null&&(Li=Ot.get(Be),vt=Le,vt.setIndex(Li)),W.isMesh)I.wireframe===!0?(fe.setLineWidth(I.wireframeLinewidth*oe()),vt.setMode(1)):vt.setMode(4);else if(W.isLine){let Ge=I.linewidth;Ge===void 0&&(Ge=1),fe.setLineWidth(Ge*oe()),W.isLineSegments?vt.setMode(1):W.isLineLoop?vt.setMode(2):vt.setMode(3)}else W.isPoints?vt.setMode(0):W.isSprite&&vt.setMode(4);if(W.isInstancedMesh)vt.renderInstances(_t,Yn,W.count);else if(V.isInstancedBufferGeometry){let Ge=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ao=Math.min(V.instanceCount,Ge);vt.renderInstances(_t,Yn,ao)}else vt.render(_t,Yn)},this.compile=function(T,k){function V(I,W,we){I.transparent===!0&&I.side===bi&&I.forceSinglePass===!1?(I.side=sn,I.needsUpdate=!0,hn(I,W,we),I.side=wi,I.needsUpdate=!0,hn(I,W,we),I.side=bi):hn(I,W,we)}f=A.get(T),f.init(),y.push(f),T.traverseVisible(function(I){I.isLight&&I.layers.test(k.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights(m.physicallyCorrectLights),T.traverse(function(I){let W=I.material;if(W)if(Array.isArray(W))for(let we=0;we<W.length;we++){let Ie=W[we];V(Ie,T,I)}else V(W,T,I)}),y.pop(),f=null};let B=null;function j(T){B&&B(T)}function he(){Ze.stop()}function pe(){Ze.start()}let Ze=new Bf;Ze.setAnimationLoop(j),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(T){B=T,de.setAnimationLoop(T),T===null?Ze.stop():Ze.start()},de.addEventListener("sessionstart",he),de.addEventListener("sessionend",pe),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(k),k=de.getCamera()),T.isScene===!0&&T.onBeforeRender(m,T,k,g),f=A.get(T,y.length),f.init(),y.push(f),Me.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),te.setFromProjectionMatrix(Me),ne=this.localClippingEnabled,Y=w.init(this.clippingPlanes,ne),u=vn.get(T,d.length),u.init(),d.push(u),Ct(T,k,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(U,N),Y===!0&&w.beginShadows();let V=f.state.shadowsArray;if(H.render(V,T,k),Y===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(u,T),f.setupLights(m.physicallyCorrectLights),k.isArrayCamera){let I=k.cameras;for(let W=0,we=I.length;W<we;W++){let Ie=I[W];zt(u,T,Ie,Ie.viewport)}}else zt(u,T,k);g!==null&&(Ce.updateMultisampleRenderTarget(g),Ce.updateRenderTargetMipmap(g)),T.isScene===!0&&T.onAfterRender(m,T,k),X.resetDefaultState(),x=-1,b=null,y.pop(),y.length>0?f=y[y.length-1]:f=null,d.pop(),d.length>0?u=d[d.length-1]:u=null};function Ct(T,k,V,I){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||te.intersectsSprite(T)){I&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Me);let Ie=wt.update(T),Ue=T.material;Ue.visible&&u.push(T,Ie,Ue,V,K.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==at.render.frame&&(T.skeleton.update(),T.skeleton.frame=at.render.frame),!T.frustumCulled||te.intersectsObject(T))){I&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Me);let Ie=wt.update(T),Ue=T.material;if(Array.isArray(Ue)){let Be=Ie.groups;for(let Ye=0,He=Be.length;Ye<He;Ye++){let We=Be[Ye],_t=Ue[We.materialIndex];_t&&_t.visible&&u.push(T,Ie,_t,V,K.z,We)}}else Ue.visible&&u.push(T,Ie,Ue,V,K.z,null)}}let we=T.children;for(let Ie=0,Ue=we.length;Ie<Ue;Ie++)Ct(we[Ie],k,V,I)}function zt(T,k,V,I){let W=T.opaque,we=T.transmissive,Ie=T.transparent;f.setupLightsView(V),Y===!0&&w.setGlobalState(m.clippingPlanes,V),we.length>0&&Pi(W,k,V),I&&fe.viewport(E.copy(I)),W.length>0&&ft(W,k,V),we.length>0&&ft(we,k,V),Ie.length>0&&ft(Ie,k,V),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Pi(T,k,V){let I=ye.isWebGL2;Z===null&&(Z=new si(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?yr:Zi,minFilter:gr,samples:I&&r===!0?4:0})),m.getDrawingBufferSize(O),I?Z.setSize(O.x,O.y):Z.setSize(Pl(O.x),Pl(O.y));let W=m.getRenderTarget();m.setRenderTarget(Z),m.clear();let we=m.toneMapping;m.toneMapping=ii,ft(T,k,V),m.toneMapping=we,Ce.updateMultisampleRenderTarget(Z),Ce.updateRenderTargetMipmap(Z),m.setRenderTarget(W)}function ft(T,k,V){let I=k.isScene===!0?k.overrideMaterial:null;for(let W=0,we=T.length;W<we;W++){let Ie=T[W],Ue=Ie.object,Be=Ie.geometry,Ye=I===null?Ie.material:I,He=Ie.group;Ue.layers.test(V.layers)&&Xn(Ue,k,V,Be,Ye,He)}}function Xn(T,k,V,I,W,we){T.onBeforeRender(m,k,V,I,W,we),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(m,k,V,I,T,we),W.transparent===!0&&W.side===bi&&W.forceSinglePass===!1?(W.side=sn,W.needsUpdate=!0,m.renderBufferDirect(V,k,I,W,T,we),W.side=wi,W.needsUpdate=!0,m.renderBufferDirect(V,k,I,W,T,we),W.side=bi):m.renderBufferDirect(V,k,I,W,T,we),T.onAfterRender(m,k,V,I,W,we)}function hn(T,k,V){k.isScene!==!0&&(k=ae);let I=Ne.get(T),W=f.state.lights,we=f.state.shadowsArray,Ie=W.state.version,Ue=Ke.getParameters(T,W.state,we,k,V),Be=Ke.getProgramCacheKey(Ue),Ye=I.programs;I.environment=T.isMeshStandardMaterial?k.environment:null,I.fog=k.fog,I.envMap=(T.isMeshStandardMaterial?ln:Vt).get(T.envMap||I.environment),Ye===void 0&&(T.addEventListener("dispose",ht),Ye=new Map,I.programs=Ye);let He=Ye.get(Be);if(He!==void 0){if(I.currentProgram===He&&I.lightsStateVersion===Ie)return Ec(T,Ue),He}else Ue.uniforms=Ke.getUniforms(T),T.onBuild(V,Ue,m),T.onBeforeCompile(Ue,m),He=Ke.acquireProgram(Ue,Be),Ye.set(Be,He),I.uniforms=Ue.uniforms;let We=I.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(We.clippingPlanes=w.uniform),Ec(T,Ue),I.needsLights=Ru(T),I.lightsStateVersion=Ie,I.needsLights&&(We.ambientLightColor.value=W.state.ambient,We.lightProbe.value=W.state.probe,We.directionalLights.value=W.state.directional,We.directionalLightShadows.value=W.state.directionalShadow,We.spotLights.value=W.state.spot,We.spotLightShadows.value=W.state.spotShadow,We.rectAreaLights.value=W.state.rectArea,We.ltc_1.value=W.state.rectAreaLTC1,We.ltc_2.value=W.state.rectAreaLTC2,We.pointLights.value=W.state.point,We.pointLightShadows.value=W.state.pointShadow,We.hemisphereLights.value=W.state.hemi,We.directionalShadowMap.value=W.state.directionalShadowMap,We.directionalShadowMatrix.value=W.state.directionalShadowMatrix,We.spotShadowMap.value=W.state.spotShadowMap,We.spotLightMatrix.value=W.state.spotLightMatrix,We.spotLightMap.value=W.state.spotLightMap,We.pointShadowMap.value=W.state.pointShadowMap,We.pointShadowMatrix.value=W.state.pointShadowMatrix);let _t=He.getUniforms(),$t=Hs.seqWithValue(_t.seq,We);return I.currentProgram=He,I.uniformsList=$t,He}function Ec(T,k){let V=Ne.get(T);V.outputEncoding=k.outputEncoding,V.instancing=k.instancing,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphColors=k.morphColors,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}function Eu(T,k,V,I,W){k.isScene!==!0&&(k=ae),Ce.resetTextureUnits();let we=k.fog,Ie=I.isMeshStandardMaterial?k.environment:null,Ue=g===null?m.outputEncoding:g.isXRRenderTarget===!0?g.texture.encoding:Ki,Be=(I.isMeshStandardMaterial?ln:Vt).get(I.envMap||Ie),Ye=I.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,He=!!I.normalMap&&!!V.attributes.tangent,We=!!V.morphAttributes.position,_t=!!V.morphAttributes.normal,$t=!!V.morphAttributes.color,Yn=I.toneMapped?m.toneMapping:ii,Li=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,vt=Li!==void 0?Li.length:0,Ge=Ne.get(I),ao=f.state.lights;if(Y===!0&&(ne===!0||T!==b)){let Zt=T===b&&I.id===x;w.setState(I,T,Zt)}let Pt=!1;I.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==ao.state.version||Ge.outputEncoding!==Ue||W.isInstancedMesh&&Ge.instancing===!1||!W.isInstancedMesh&&Ge.instancing===!0||W.isSkinnedMesh&&Ge.skinning===!1||!W.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Be||I.fog===!0&&Ge.fog!==we||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==w.numPlanes||Ge.numIntersection!==w.numIntersection)||Ge.vertexAlphas!==Ye||Ge.vertexTangents!==He||Ge.morphTargets!==We||Ge.morphNormals!==_t||Ge.morphColors!==$t||Ge.toneMapping!==Yn||ye.isWebGL2===!0&&Ge.morphTargetsCount!==vt)&&(Pt=!0):(Pt=!0,Ge.__version=I.version);let Ii=Ge.currentProgram;Pt===!0&&(Ii=hn(I,k,W));let Ac=!1,er=!1,oo=!1,Ht=Ii.getUniforms(),Di=Ge.uniforms;if(fe.useProgram(Ii.program)&&(Ac=!0,er=!0,oo=!0),I.id!==x&&(x=I.id,er=!0),Ac||b!==T){if(Ht.setValue(z,"projectionMatrix",T.projectionMatrix),ye.logarithmicDepthBuffer&&Ht.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),b!==T&&(b=T,er=!0,oo=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){let Zt=Ht.map.cameraPosition;Zt!==void 0&&Zt.setValue(z,K.setFromMatrixPosition(T.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Ht.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||W.isSkinnedMesh)&&Ht.setValue(z,"viewMatrix",T.matrixWorldInverse)}if(W.isSkinnedMesh){Ht.setOptional(z,W,"bindMatrix"),Ht.setOptional(z,W,"bindMatrixInverse");let Zt=W.skeleton;Zt&&(ye.floatVertexTextures?(Zt.boneTexture===null&&Zt.computeBoneTexture(),Ht.setValue(z,"boneTexture",Zt.boneTexture,Ce),Ht.setValue(z,"boneTextureSize",Zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let lo=V.morphAttributes;if((lo.position!==void 0||lo.normal!==void 0||lo.color!==void 0&&ye.isWebGL2===!0)&&ie.update(W,V,I,Ii),(er||Ge.receiveShadow!==W.receiveShadow)&&(Ge.receiveShadow=W.receiveShadow,Ht.setValue(z,"receiveShadow",W.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Di.envMap.value=Be,Di.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),er&&(Ht.setValue(z,"toneMappingExposure",m.toneMappingExposure),Ge.needsLights&&Au(Di,oo),we&&I.fog===!0&&qn.refreshFogUniforms(Di,we),qn.refreshMaterialUniforms(Di,I,F,C,Z),Hs.upload(z,Ge.uniformsList,Di,Ce)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Hs.upload(z,Ge.uniformsList,Di,Ce),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Ht.setValue(z,"center",W.center),Ht.setValue(z,"modelViewMatrix",W.modelViewMatrix),Ht.setValue(z,"normalMatrix",W.normalMatrix),Ht.setValue(z,"modelMatrix",W.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){let Zt=I.uniformsGroups;for(let co=0,Cu=Zt.length;co<Cu;co++)if(ye.isWebGL2){let Rc=Zt[co];Ee.update(Rc,Ii),Ee.bind(Rc,Ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ii}function Au(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Ru(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return g},this.setRenderTargetTextures=function(T,k,V){Ne.get(T.texture).__webglTexture=k,Ne.get(T.depthTexture).__webglTexture=V;let I=Ne.get(T);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=V===void 0,I.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,k){let V=Ne.get(T);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,V=0){g=T,v=k,M=V;let I=!0,W=null,we=!1,Ie=!1;if(T){let Be=Ne.get(T);Be.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),I=!1):Be.__webglFramebuffer===void 0?Ce.setupRenderTarget(T):Be.__hasExternalTextures&&Ce.rebindTextures(T,Ne.get(T.texture).__webglTexture,Ne.get(T.depthTexture).__webglTexture);let Ye=T.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ie=!0);let He=Ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(W=He[k],we=!0):ye.isWebGL2&&T.samples>0&&Ce.useMultisampledRTT(T)===!1?W=Ne.get(T).__webglMultisampledFramebuffer:W=He,E.copy(T.viewport),R.copy(T.scissor),_=T.scissorTest}else E.copy(L).multiplyScalar(F).floor(),R.copy(G).multiplyScalar(F).floor(),_=$;if(fe.bindFramebuffer(36160,W)&&ye.drawBuffers&&I&&fe.drawBuffers(T,W),fe.viewport(E),fe.scissor(R),fe.setScissorTest(_),we){let Be=Ne.get(T.texture);z.framebufferTexture2D(36160,36064,34069+k,Be.__webglTexture,V)}else if(Ie){let Be=Ne.get(T.texture),Ye=k||0;z.framebufferTextureLayer(36160,36064,Be.__webglTexture,V||0,Ye)}x=-1},this.readRenderTargetPixels=function(T,k,V,I,W,we,Ie){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue){fe.bindFramebuffer(36160,Ue);try{let Be=T.texture,Ye=Be.format,He=Be.type;if(Ye!==Pn&&ce.convert(Ye)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let We=He===yr&&(ge.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ge.has("EXT_color_buffer_float"));if(He!==Zi&&ce.convert(He)!==z.getParameter(35738)&&!(He===Yi&&(ye.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-I&&V>=0&&V<=T.height-W&&z.readPixels(k,V,I,W,ce.convert(Ye),ce.convert(He),we)}finally{let Be=g!==null?Ne.get(g).__webglFramebuffer:null;fe.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(T,k,V=0){let I=Math.pow(2,-V),W=Math.floor(k.image.width*I),we=Math.floor(k.image.height*I);Ce.setTexture2D(k,0),z.copyTexSubImage2D(3553,V,0,0,T.x,T.y,W,we),fe.unbindTexture()},this.copyTextureToTexture=function(T,k,V,I=0){let W=k.image.width,we=k.image.height,Ie=ce.convert(V.format),Ue=ce.convert(V.type);Ce.setTexture2D(V,0),z.pixelStorei(37440,V.flipY),z.pixelStorei(37441,V.premultiplyAlpha),z.pixelStorei(3317,V.unpackAlignment),k.isDataTexture?z.texSubImage2D(3553,I,T.x,T.y,W,we,Ie,Ue,k.image.data):k.isCompressedTexture?z.compressedTexSubImage2D(3553,I,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,Ie,k.mipmaps[0].data):z.texSubImage2D(3553,I,T.x,T.y,Ie,Ue,k.image),I===0&&V.generateMipmaps&&z.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(T,k,V,I,W=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let we=T.max.x-T.min.x+1,Ie=T.max.y-T.min.y+1,Ue=T.max.z-T.min.z+1,Be=ce.convert(I.format),Ye=ce.convert(I.type),He;if(I.isData3DTexture)Ce.setTexture3D(I,0),He=32879;else if(I.isDataArrayTexture)Ce.setTexture2DArray(I,0),He=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,I.flipY),z.pixelStorei(37441,I.premultiplyAlpha),z.pixelStorei(3317,I.unpackAlignment);let We=z.getParameter(3314),_t=z.getParameter(32878),$t=z.getParameter(3316),Yn=z.getParameter(3315),Li=z.getParameter(32877),vt=V.isCompressedTexture?V.mipmaps[0]:V.image;z.pixelStorei(3314,vt.width),z.pixelStorei(32878,vt.height),z.pixelStorei(3316,T.min.x),z.pixelStorei(3315,T.min.y),z.pixelStorei(32877,T.min.z),V.isDataTexture||V.isData3DTexture?z.texSubImage3D(He,W,k.x,k.y,k.z,we,Ie,Ue,Be,Ye,vt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(He,W,k.x,k.y,k.z,we,Ie,Ue,Be,vt.data)):z.texSubImage3D(He,W,k.x,k.y,k.z,we,Ie,Ue,Be,Ye,vt),z.pixelStorei(3314,We),z.pixelStorei(32878,_t),z.pixelStorei(3316,$t),z.pixelStorei(3315,Yn),z.pixelStorei(32877,Li),W===0&&I.generateMipmaps&&z.generateMipmap(He),fe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ce.setTextureCube(T,0):T.isData3DTexture?Ce.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ce.setTexture2DArray(T,0):Ce.setTexture2D(T,0),fe.unbindTexture()},this.resetState=function(){v=0,M=0,g=null,fe.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function vi(i,e,t){return qf(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function pa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function qf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ld,fh,Id,Pf,ic,ur,wi,sn,bi,Mi,Bs,uh,dh,ph,Dd,zs,kd,Nd,mh,gh,Fd,Od,zd,Ud,Lf,If,Bd,Vd,Hd,Wd,Gd,qd,Xd,Yd,Sl,Jd,$d,Zd,Kd,Df,jd,Qd,ii,ep,tp,np,ip,sp,kf,Ws,Gs,Tl,El,Wa,Al,Cn,Rl,Tt,yh,Go,pn,rp,gr,Zi,ap,op,Nf,lp,Xi,Yi,yr,cp,hp,Vs,fp,Pn,up,dp,Ji,qs,sc,pp,mp,gp,yp,qo,Xo,Yo,Jo,xh,_h,vh,bh,xp,Mh,wh,Sh,Th,Eh,Ah,Rh,Ch,Ph,Lh,Ih,Dh,kh,Nh,Fh,Oh,$o,_p,zh,Uh,Bh,ga,ya,Zo,Vh,Hh,Wh,Ki,lt,vp,bp,Ff,Mp,zn,xr,Ko,wp,Gh,qh,Cl,Si,Bt,jo,Xh,qe,nn,el,tl,Wt,zf,St,En,$r,Je,Ss,_a,va,Tp,mn,It,si,ba,Ll,Ti,D,sl,Jh,ji,Kn,Vi,rl,Ts,Es,As,gi,yi,Hi,sr,Kr,jr,Wi,Ep,rr,ol,_r,jn,ll,Qr,xi,cl,ea,hl,Il,xt,Rs,An,Ap,Rp,_i,ta,jt,$h,Zh,Ma,wa,Cp,Kh,Cs,Qn,na,ar,Pp,Lp,jh,Qh,ef,Ip,tf,Nt,Rn,ei,fl,ti,Ps,Ls,nf,ul,dl,pl,pr,Dp,Qi,ri,Mt,ia,rn,Sa,Ta,dt,kp,dn,ml,Is,Qt,or,Lt,gn,sf,Ds,gl,lr,cr,hr,yl,sa,ra,aa,oa,xl,la,Dt,es,Op,zp,Up,ai,Ea,tn,ks,Ns,Dl,Aa,kl,_l,Bp,Vp,ni,Fs,ha,vr,br,Wp,Gp,qp,Xp,Yp,Jp,$p,Zp,Kp,jp,Qp,em,tm,nm,im,sm,rm,am,om,lm,cm,hm,fm,um,dm,pm,mm,gm,ym,xm,_m,vm,bm,Mm,wm,Sm,Tm,Em,Am,Rm,Cm,Pm,Lm,Im,Dm,km,Nm,Fm,Om,zm,Um,Bm,Vm,Hm,Wm,Gm,qm,Xm,Ym,Jm,$m,Zm,Km,jm,Qm,e0,t0,n0,i0,s0,r0,a0,o0,l0,c0,h0,f0,u0,d0,p0,m0,g0,y0,x0,_0,v0,b0,M0,w0,S0,T0,E0,A0,R0,C0,P0,L0,I0,D0,k0,N0,F0,O0,z0,U0,B0,V0,H0,W0,G0,q0,X0,Y0,J0,$0,Z0,K0,j0,Q0,eg,tg,ng,ig,sg,rg,ag,og,lg,cg,hg,fg,ug,dg,pg,mg,gg,yg,xg,_g,vg,Oe,se,Un,fa,Ys,Us,rf,qi,vl,af,bl,Gi,Os,of,Ra,Vf,Hf,Wf,Gf,ff,uf,df,pf,mf,Nl,Fl,Ol,Ml,Hs,Ty,Dy,Ny,Wy,Ul,Bl,Zy,Vl,Hl,ex,tx,Wl,yt,ax,mr,Gl,ql,Xl,Ca,Pa,La,Ef,Af,da,hx,fr,Ia,Da,Mr,ka,Na,Fa,Oa,za,Ua,Bn,Js,Yl,Jl,$l,Ln,ts,Zl,Kl,jl,wr,ns,Ql,Ba,Va,wl,Rf,Cf,ec,tc,Ha,oc,fx,lc,ux,dx,px,mx,gx,yx,xx,nc,ut,O1,Xf=qt(()=>{Ld=0,fh=1,Id=2,Pf=1,ic=2,ur=3,wi=0,sn=1,bi=2,Mi=0,Bs=1,uh=2,dh=3,ph=4,Dd=5,zs=100,kd=101,Nd=102,mh=103,gh=104,Fd=200,Od=201,zd=202,Ud=203,Lf=204,If=205,Bd=206,Vd=207,Hd=208,Wd=209,Gd=210,qd=0,Xd=1,Yd=2,Sl=3,Jd=4,$d=5,Zd=6,Kd=7,Df=0,jd=1,Qd=2,ii=0,ep=1,tp=2,np=3,ip=4,sp=5,kf=300,Ws=301,Gs=302,Tl=303,El=304,Wa=306,Al=1e3,Cn=1001,Rl=1002,Tt=1003,yh=1004,Go=1005,pn=1006,rp=1007,gr=1008,Zi=1009,ap=1010,op=1011,Nf=1012,lp=1013,Xi=1014,Yi=1015,yr=1016,cp=1017,hp=1018,Vs=1020,fp=1021,Pn=1023,up=1024,dp=1025,Ji=1026,qs=1027,sc=1028,pp=1029,mp=1030,gp=1031,yp=1033,qo=33776,Xo=33777,Yo=33778,Jo=33779,xh=35840,_h=35841,vh=35842,bh=35843,xp=36196,Mh=37492,wh=37496,Sh=37808,Th=37809,Eh=37810,Ah=37811,Rh=37812,Ch=37813,Ph=37814,Lh=37815,Ih=37816,Dh=37817,kh=37818,Nh=37819,Fh=37820,Oh=37821,$o=36492,_p=36283,zh=36284,Uh=36285,Bh=36286,ga=2300,ya=2301,Zo=2302,Vh=2400,Hh=2401,Wh=2402,Ki=3e3,lt=3001,vp=3200,bp=3201,Ff=0,Mp=1,zn="srgb",xr="srgb-linear",Ko=7680,wp=519,Gh=35044,qh="300 es",Cl=1035,Si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jo=Math.PI/180,Xh=180/Math.PI;qe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nn=class i{constructor(){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],y=n[8],m=s[0],p=s[3],v=s[6],M=s[1],g=s[4],x=s[7],b=s[2],E=s[5],R=s[8];return r[0]=a*m+o*M+l*b,r[3]=a*p+o*g+l*E,r[6]=a*v+o*x+l*R,r[1]=c*m+h*M+u*b,r[4]=c*p+h*g+u*E,r[7]=c*v+h*x+u*R,r[2]=f*m+d*M+y*b,r[5]=f*p+d*g+y*E,r[8]=f*v+d*x+y*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,y=t*u+n*f+s*d;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/y;return e[0]=u*m,e[1]=(s*c-h*n)*m,e[2]=(o*n-s*a)*m,e[3]=f*m,e[4]=(h*t-s*l)*m,e[5]=(s*r-o*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*r)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(el.makeScale(e,t)),this}rotate(e){return this.premultiply(el.makeRotation(-e)),this}translate(e,t){return this.premultiply(el.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},el=new nn;tl={[zn]:{[xr]:$i},[xr]:{[zn]:ma}},Wt={legacyMode:!0,get workingColorSpace(){return xr},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(tl[e]&&tl[e][t]!==void 0){let n=tl[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},St={r:0,g:0,b:0},En={h:0,s:0,l:0},$r={h:0,s:0,l:0};Je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Wt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Wt.workingColorSpace){if(e=Sp(e,1),t=en(t,0,1),n=en(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=nl(a,r,e+1/3),this.g=nl(a,r,e),this.b=nl(a,r,e-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(e,t=zn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Wt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Wt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,h,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Wt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Wt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=zn){let n=zf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return Wt.fromWorkingColorSpace(Zr(this,St),e),en(St.r*255,0,255)<<16^en(St.g*255,0,255)<<8^en(St.b*255,0,255)<<0}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Zr(this,St),t);let n=St.r,s=St.g,r=St.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Zr(this,St),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=zn){return Wt.fromWorkingColorSpace(Zr(this,St),e),e!==zn?`color(${e} ${St.r} ${St.g} ${St.b})`:`rgb(${St.r*255|0},${St.g*255|0},${St.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(En),En.h+=e,En.s+=t,En.l+=n,this.setHSL(En.h,En.s,En.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(En),e.getHSL($r);let n=Qo(En.h,$r.h,t),s=Qo(En.s,$r.s,t),r=Qo(En.l,$r.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};Je.NAMES=zf;_a=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ss===void 0&&(Ss=xa("canvas")),Ss.width=e.width,Ss.height=e.height;let n=Ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$i(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($i(t[n]/255)*255):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},va=class{constructor(e=null){this.isSource=!0,this.uuid=Sr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(il(s[a].image)):r.push(il(s[a]))}else r=il(s);n.url=r}return t||(e.images[this.uuid]=n),n}};Tp=0,mn=class i extends Si{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Cn,s=Cn,r=pn,a=gr,o=Pn,l=Zi,c=i.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Sr(),this.name="",this.source=new va(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Al:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Al:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=kf;mn.DEFAULT_ANISOTROPY=1;It=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],y=l[9],m=l[2],p=l[6],v=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(y-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(y+p)<.1&&Math.abs(c+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(c+1)/2,x=(d+1)/2,b=(v+1)/2,E=(h+f)/4,R=(u+m)/4,_=(y+p)/4;return g>x&&g>b?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=E/n,r=R/n):x>b?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=_/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=R/r,s=_/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-y)*(p-y)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-y)/M,this.y=(u-m)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},si=class extends Si{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);let s={width:e,height:t,depth:1};this.texture=new mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new va(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ba=class extends mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ll=class extends mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ti=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],y=r[a+2],m=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=y,e[t+3]=m;return}if(u!==m||l!==f||c!==d||h!==y){let p=1-o,v=l*f+c*d+h*y+u*m,M=v>=0?1:-1,g=1-v*v;if(g>Number.EPSILON){let b=Math.sqrt(g),E=Math.atan2(b,v*M);p=Math.sin(p*E)/b,o=Math.sin(o*E)/b}let x=o*M;if(l=l*p+f*x,c=c*p+d*x,h=h*p+y*x,u=u*p+m*x,p===1-o){let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],y=r[a+3];return e[t]=o*y+h*u+l*d-c*f,e[t+1]=l*y+h*f+c*u-o*d,e[t+2]=c*y+h*d+o*f-l*u,e[t+3]=h*y-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*y,this._y=c*d*u-f*h*y,this._z=c*h*y+f*d*u,this._w=c*h*u-f*d*y;break;case"YXZ":this._x=f*h*u+c*d*y,this._y=c*d*u-f*h*y,this._z=c*h*y-f*d*u,this._w=c*h*u+f*d*y;break;case"ZXY":this._x=f*h*u-c*d*y,this._y=c*d*u+f*h*y,this._z=c*h*y+f*d*u,this._w=c*h*u-f*d*y;break;case"ZYX":this._x=f*h*u-c*d*y,this._y=c*d*u+f*h*y,this._z=c*h*y-f*d*u,this._w=c*h*u+f*d*y;break;case"YZX":this._x=f*h*u+c*d*y,this._y=c*d*u+f*h*y,this._z=c*h*y-f*d*u,this._w=c*h*u-f*d*y;break;case"XZY":this._x=f*h*u-c*d*y,this._y=c*d*u-f*h*y,this._z=c*h*y+f*d*u,this._w=c*h*u+f*d*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*s-o*n,h=l*n+o*t-r*s,u=l*s+r*n-a*t,f=-r*t-a*n-o*s;return this.x=c*l+f*-r+h*-o-u*-a,this.y=h*l+f*-a+u*-r-c*-o,this.z=u*l+f*-o+c*-a-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sl=new D,Jh=new Ti,ji=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){let h=e[l],u=e[l+1],f=e[l+2];h<t&&(t=h),u<n&&(n=u),f<s&&(s=f),h>r&&(r=h),u>a&&(a=u),f>o&&(o=f)}return this.min.set(t,n,s),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){let h=e.getX(l),u=e.getY(l),f=e.getZ(l);h<t&&(t=h),u<n&&(n=u),f<s&&(s=f),h>r&&(r=h),u>a&&(a=u),f>o&&(o=f)}return this.min.set(t,n,s),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){let r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)Vi.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Vi)}else n.boundingBox===null&&n.computeBoundingBox(),rl.copy(n.boundingBox),rl.applyMatrix4(e.matrixWorld),this.union(rl);let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vi),Vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Kr.subVectors(this.max,sr),Ts.subVectors(e.a,sr),Es.subVectors(e.b,sr),As.subVectors(e.c,sr),gi.subVectors(Es,Ts),yi.subVectors(As,Es),Hi.subVectors(Ts,As);let t=[0,-gi.z,gi.y,0,-yi.z,yi.y,0,-Hi.z,Hi.y,gi.z,0,-gi.x,yi.z,0,-yi.x,Hi.z,0,-Hi.x,-gi.y,gi.x,0,-yi.y,yi.x,0,-Hi.y,Hi.x,0];return!al(t,Ts,Es,As,Kr)||(t=[1,0,0,0,1,0,0,0,1],!al(t,Ts,Es,As,Kr))?!1:(jr.crossVectors(gi,yi),t=[jr.x,jr.y,jr.z],al(t,Ts,Es,As,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Vi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Vi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Kn=[new D,new D,new D,new D,new D,new D,new D,new D],Vi=new D,rl=new ji,Ts=new D,Es=new D,As=new D,gi=new D,yi=new D,Hi=new D,sr=new D,Kr=new D,jr=new D,Wi=new D;Ep=new ji,rr=new D,ol=new D,_r=class{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ep.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);let t=rr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(rr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(ol)),this.expandByPoint(rr.copy(e.center).sub(ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},jn=new D,ll=new D,Qr=new D,xi=new D,cl=new D,ea=new D,hl=new D,Il=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.direction).multiplyScalar(t).add(this.origin),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ll.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(ll);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Qr),o=xi.dot(this.direction),l=-xi.dot(Qr),c=xi.lengthSq(),h=Math.abs(1-a*a),u,f,d,y;if(h>0)if(u=a*l-o,f=a*o-l,y=r*h,u>=0)if(f>=-y)if(f<=y){let m=1/h;u*=m,f*=m,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-y?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=y?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),s&&s.copy(Qr).multiplyScalar(f).add(ll),d}intersectSphere(e,t){jn.subVectors(e.center,this.origin);let n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,s,r){cl.subVectors(t,e),ea.subVectors(n,e),hl.crossVectors(cl,ea);let a=this.direction.dot(hl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,e);let l=o*this.direction.dot(ea.crossVectors(xi,ea));if(l<0)return null;let c=o*this.direction.dot(cl.cross(xi));if(c<0||l+c>a)return null;let h=-o*xi.dot(hl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xt=class i{constructor(){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,a,o,l,c,h,u,f,d,y,m,p){let v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=s,v[1]=r,v[5]=a,v[9]=o,v[13]=l,v[2]=c,v[6]=h,v[10]=u,v[14]=f,v[3]=d,v[7]=y,v[11]=m,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),a=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,y=o*h,m=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+y*c,t[5]=f-m*c,t[9]=-o*l,t[2]=m-f*c,t[6]=y+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,y=c*h,m=c*u;t[0]=f+m*o,t[4]=y*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-y,t[6]=m+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,y=c*h,m=c*u;t[0]=f-m*o,t[4]=-a*u,t[8]=y+d*o,t[1]=d+y*o,t[5]=a*h,t[9]=m-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,y=o*h,m=o*u;t[0]=l*h,t[4]=y*c-d,t[8]=f*c+m,t[1]=l*u,t[5]=m*c+f,t[9]=d*c-y,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,y=o*l,m=o*c;t[0]=l*h,t[4]=m-f*u,t[8]=y*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+y,t[10]=f-m*u}else if(e.order==="XZY"){let f=a*l,d=a*c,y=o*l,m=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+m,t[5]=a*h,t[9]=d*u-y,t[2]=y*u-d,t[6]=o*h,t[10]=m*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ap,e,Rp)}lookAt(e,t,n){let s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),_i.crossVectors(n,jt),_i.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),_i.crossVectors(n,jt)),_i.normalize(),ta.crossVectors(jt,_i),s[0]=_i.x,s[4]=ta.x,s[8]=jt.x,s[1]=_i.y,s[5]=ta.y,s[9]=jt.y,s[2]=_i.z,s[6]=ta.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],y=n[2],m=n[6],p=n[10],v=n[14],M=n[3],g=n[7],x=n[11],b=n[15],E=s[0],R=s[4],_=s[8],S=s[12],C=s[1],F=s[5],U=s[9],N=s[13],L=s[2],G=s[6],$=s[10],te=s[14],Y=s[3],ne=s[7],Z=s[11],Me=s[15];return r[0]=a*E+o*C+l*L+c*Y,r[4]=a*R+o*F+l*G+c*ne,r[8]=a*_+o*U+l*$+c*Z,r[12]=a*S+o*N+l*te+c*Me,r[1]=h*E+u*C+f*L+d*Y,r[5]=h*R+u*F+f*G+d*ne,r[9]=h*_+u*U+f*$+d*Z,r[13]=h*S+u*N+f*te+d*Me,r[2]=y*E+m*C+p*L+v*Y,r[6]=y*R+m*F+p*G+v*ne,r[10]=y*_+m*U+p*$+v*Z,r[14]=y*S+m*N+p*te+v*Me,r[3]=M*E+g*C+x*L+b*Y,r[7]=M*R+g*F+x*G+b*ne,r[11]=M*_+g*U+x*$+b*Z,r[15]=M*S+g*N+x*te+b*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],y=e[3],m=e[7],p=e[11],v=e[15];return y*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+m*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+p*(+t*c*u-t*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+v*(-s*o*h-t*l*u+t*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],y=e[12],m=e[13],p=e[14],v=e[15],M=u*p*c-m*f*c+m*l*d-o*p*d-u*l*v+o*f*v,g=y*f*c-h*p*c-y*l*d+a*p*d+h*l*v-a*f*v,x=h*m*c-y*u*c+y*o*d-a*m*d-h*o*v+a*u*v,b=y*u*l-h*m*l-y*o*f+a*m*f+h*o*p-a*u*p,E=t*M+n*g+s*x+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=M*R,e[1]=(m*f*r-u*p*r-m*s*d+n*p*d+u*s*v-n*f*v)*R,e[2]=(o*p*r-m*l*r+m*s*c-n*p*c-o*s*v+n*l*v)*R,e[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*R,e[4]=g*R,e[5]=(h*p*r-y*f*r+y*s*d-t*p*d-h*s*v+t*f*v)*R,e[6]=(y*l*r-a*p*r-y*s*c+t*p*c+a*s*v-t*l*v)*R,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*d+t*l*d)*R,e[8]=x*R,e[9]=(y*u*r-h*m*r-y*n*d+t*m*d+h*n*v-t*u*v)*R,e[10]=(a*m*r-y*o*r+y*n*c-t*m*c-a*n*v+t*o*v)*R,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*d-t*o*d)*R,e[12]=b*R,e[13]=(h*m*s-y*u*s+y*n*f-t*m*f-h*n*p+t*u*p)*R,e[14]=(y*o*s-a*m*s-y*n*l+t*m*l+a*n*p-t*o*p)*R,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*f+t*o*f)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,y=r*u,m=a*h,p=a*u,v=o*u,M=l*c,g=l*h,x=l*u,b=n.x,E=n.y,R=n.z;return s[0]=(1-(m+v))*b,s[1]=(d+x)*b,s[2]=(y-g)*b,s[3]=0,s[4]=(d-x)*E,s[5]=(1-(f+v))*E,s[6]=(p+M)*E,s[7]=0,s[8]=(y+g)*R,s[9]=(p-M)*R,s[10]=(1-(f+m))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Rs.set(s[0],s[1],s[2]).length(),a=Rs.set(s[4],s[5],s[6]).length(),o=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);let c=1/r,h=1/a,u=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,t.setFromRotationMatrix(An),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a){let o=this.elements,l=2*r/(t-e),c=2*r/(n-s),h=(t+e)/(t-e),u=(n+s)/(n-s),f=-(a+r)/(a-r),d=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,s,r,a){let o=this.elements,l=1/(t-e),c=1/(n-s),h=1/(a-r),u=(t+e)*l,f=(n+s)*c,d=(a+r)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Rs=new D,An=new xt,Ap=new D(0,0,0),Rp=new D(1,1,1),_i=new D,ta=new D,jt=new D,$h=new xt,Zh=new Ti,Ma=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $h.makeRotationFromQuaternion(e),this.setFromRotationMatrix($h,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ma.DEFAULT_ORDER="XYZ";wa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cp=0,Kh=new D,Cs=new Ti,Qn=new xt,na=new D,ar=new D,Pp=new D,Lp=new Ti,jh=new D(1,0,0),Qh=new D(0,1,0),ef=new D(0,0,1),Ip={type:"added"},tf={type:"removed"},Nt=class i extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Ma,n=new Ti,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new nn}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(jh,e)}rotateY(e){return this.rotateOnAxis(Qh,e)}rotateZ(e){return this.rotateOnAxis(ef,e)}translateOnAxis(e,t){return Kh.copy(e).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jh,e)}translateY(e){return this.translateOnAxis(Qh,e)}translateZ(e){return this.translateOnAxis(ef,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?na.copy(e):na.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(ar,na,this.up):Qn.lookAt(na,ar,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(Qn),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ip)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(tf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){let a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,Pp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,Lp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Nt.DEFAULT_UP=new D(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Rn=new D,ei=new D,fl=new D,ti=new D,Ps=new D,Ls=new D,nf=new D,ul=new D,dl=new D,pl=new D,pr=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Rn.subVectors(s,t),ei.subVectors(n,t),fl.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot(ei),l=Rn.dot(fl),c=ei.dot(ei),h=ei.dot(fl),u=a*c-o*o;if(u===0)return r.set(-2,-1,-1);let f=1/u,d=(c*l-o*h)*f,y=(a*h-o*l)*f;return r.set(1-d-y,y,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ti),ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ti),l.set(0,0),l.addScaledVector(r,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),ei.subVectors(e,t),Rn.cross(ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Rn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return i.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ps.subVectors(s,n),Ls.subVectors(r,n),ul.subVectors(e,n);let l=Ps.dot(ul),c=Ls.dot(ul);if(l<=0&&c<=0)return t.copy(n);dl.subVectors(e,s);let h=Ps.dot(dl),u=Ls.dot(dl);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ps,a);pl.subVectors(e,r);let d=Ps.dot(pl),y=Ls.dot(pl);if(y>=0&&d<=y)return t.copy(r);let m=d*c-l*y;if(m<=0&&c>=0&&y<=0)return o=c/(c-y),t.copy(n).addScaledVector(Ls,o);let p=h*y-d*u;if(p<=0&&u-h>=0&&d-y>=0)return nf.subVectors(r,s),o=(u-h)/(u-h+(d-y)),t.copy(s).addScaledVector(nf,o);let v=1/(p+m+f);return a=m*v,o=f*v,t.copy(n).addScaledVector(Ps,a).addScaledVector(Ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dp=0,Qi=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=Bs,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Lf,this.blendDst=If,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Sl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ko,this.stencilZFail=Ko,this.stencilZPass=Ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ri=class extends Qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Mt=new D,ia=new qe,rn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ia.fromBufferAttribute(this,t),ia.applyMatrix3(e),this.setXY(t,ia.x,ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}},Sa=class extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ta=class extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},dt=class extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}},kp=0,dn=new xt,ml=new Nt,Is=new D,Qt=new ji,or=new ji,Lt=new D,gn=class i extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Of(e)?Ta:Sa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new nn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return ml.lookAt(e),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _r);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];or.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(Qt.min,or.min),Qt.expandByPoint(Lt),Lt.addVectors(Qt.max,or.max),Qt.expandByPoint(Lt)):(Qt.expandByPoint(or.min),Qt.expandByPoint(or.max))}Qt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Lt.fromBufferAttribute(o,c),l&&(Is.fromBufferAttribute(e,c),Lt.add(Is)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let C=0;C<o;C++)c[C]=new D,h[C]=new D;let u=new D,f=new D,d=new D,y=new qe,m=new qe,p=new qe,v=new D,M=new D;function g(C,F,U){u.fromArray(s,C*3),f.fromArray(s,F*3),d.fromArray(s,U*3),y.fromArray(a,C*2),m.fromArray(a,F*2),p.fromArray(a,U*2),f.sub(u),d.sub(u),m.sub(y),p.sub(y);let N=1/(m.x*p.y-p.x*m.y);isFinite(N)&&(v.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(N),M.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(N),c[C].add(v),c[F].add(v),c[U].add(v),h[C].add(M),h[F].add(M),h[U].add(M))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let C=0,F=x.length;C<F;++C){let U=x[C],N=U.start,L=U.count;for(let G=N,$=N+L;G<$;G+=3)g(n[G+0],n[G+1],n[G+2])}let b=new D,E=new D,R=new D,_=new D;function S(C){R.fromArray(r,C*3),_.copy(R);let F=c[C];b.copy(F),b.sub(R.multiplyScalar(R.dot(F))).normalize(),E.crossVectors(_,F);let N=E.dot(h[C])<0?-1:1;l[C*4]=b.x,l[C*4+1]=b.y,l[C*4+2]=b.z,l[C*4+3]=N}for(let C=0,F=x.length;C<F;++C){let U=x[C],N=U.start,L=U.count;for(let G=N,$=N+L;G<$;G+=3)S(n[G+0]),S(n[G+1]),S(n[G+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){let y=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,y=0;for(let m=0,p=l.length;m<p;m++){o.isInterleavedBufferAttribute?d=l[m]*o.data.stride+o.offset:d=l[m]*h;for(let v=0;v<h;v++)f[y++]=c[d++]}return new rn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},sf=new xt,Ds=new Il,gl=new _r,lr=new D,cr=new D,hr=new D,yl=new D,sa=new D,ra=new qe,aa=new qe,oa=new qe,xl=new D,la=new D,Dt=class extends Nt{constructor(e=new gn,t=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){sa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(yl.fromBufferAttribute(u,e),a?sa.addScaledVector(yl,h):sa.addScaledVector(yl.sub(t),h))}t.add(sa)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),gl.copy(n.boundingSphere),gl.applyMatrix4(r),e.ray.intersectsSphere(gl)===!1)||(sf.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(sf),n.boundingBox!==null&&Ds.intersectsBox(n.boundingBox)===!1))return;let a,o=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,u=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(s))for(let d=0,y=u.length;d<y;d++){let m=u[d],p=s[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let g=v,x=M;g<x;g+=3){let b=o.getX(g),E=o.getX(g+1),R=o.getX(g+2);a=ca(this,p,e,Ds,c,h,b,E,R),a&&(a.faceIndex=Math.floor(g/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{let d=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=d,p=y;m<p;m+=3){let v=o.getX(m),M=o.getX(m+1),g=o.getX(m+2);a=ca(this,s,e,Ds,c,h,v,M,g),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let d=0,y=u.length;d<y;d++){let m=u[d],p=s[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let g=v,x=M;g<x;g+=3){let b=g,E=g+1,R=g+2;a=ca(this,p,e,Ds,c,h,b,E,R),a&&(a.faceIndex=Math.floor(g/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{let d=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=d,p=y;m<p;m+=3){let v=m,M=m+1,g=m+2;a=ca(this,s,e,Ds,c,h,v,M,g),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}};es=class i extends gn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,s,a,2),y("x","z","y",1,-1,e,n,-t,s,a,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2));function y(m,p,v,M,g,x,b,E,R,_,S){let C=x/R,F=b/_,U=x/2,N=b/2,L=E/2,G=R+1,$=_+1,te=0,Y=0,ne=new D;for(let Z=0;Z<$;Z++){let Me=Z*F-N;for(let O=0;O<G;O++){let K=O*C-U;ne[m]=K*M,ne[p]=Me*g,ne[v]=L,c.push(ne.x,ne.y,ne.z),ne[m]=0,ne[p]=0,ne[v]=E>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(O/R),u.push(1-Z/_),te+=1}}for(let Z=0;Z<_;Z++)for(let Me=0;Me<R;Me++){let O=f+Me+G*Z,K=f+Me+G*(Z+1),ae=f+(Me+1)+G*(Z+1),oe=f+(Me+1)+G*Z;l.push(O,K,oe),l.push(K,ae,oe),Y+=6}o.addGroup(d,Y,S),d+=Y,f+=te}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Op={clone:Xs,merge:Gt},zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ai=class extends Qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zp,this.fragmentShader=Up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=Fp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ea=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},tn=class extends Ea{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xh*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ks=-90,Ns=1,Dl=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;let s=new tn(ks,Ns,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);let r=new tn(ks,Ns,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);let a=new tn(ks,Ns,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);let o=new tn(ks,Ns,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);let l=new tn(ks,Ns,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);let c=new tn(ks,Ns,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[s,r,a,o,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,f=e.xr.enabled;e.toneMapping=ii,e.xr.enabled=!1;let d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Aa=class extends mn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ws,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},kl=class extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Aa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new es(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Mi});r.uniforms.tEquirect.value=t;let a=new Dt(s,r),o=t.minFilter;return t.minFilter===gr&&(t.minFilter=pn),new Dl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},_l=new D,Bp=new D,Vp=new nn,ni=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=_l.subVectors(n,t).cross(Bp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(_l),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vp.getNormalMatrix(e),s=this.coplanarPoint(_l).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fs=new _r,ha=new D,vr=class{constructor(e=new ni,t=new ni,n=new ni,s=new ni,r=new ni,a=new ni){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,s=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],f=n[8],d=n[9],y=n[10],m=n[11],p=n[12],v=n[13],M=n[14],g=n[15];return t[0].setComponents(o-s,u-l,m-f,g-p).normalize(),t[1].setComponents(o+s,u+l,m+f,g+p).normalize(),t[2].setComponents(o+r,u+c,m+d,g+v).normalize(),t[3].setComponents(o-r,u-c,m-d,g-v).normalize(),t[4].setComponents(o-a,u-h,m-y,g-M).normalize(),t[5].setComponents(o+a,u+h,m+y,g+M).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSprite(e){return Fs.center.set(0,0,0),Fs.radius=.7071067811865476,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ha.x=s.normal.x>0?e.max.x:e.min.x,ha.y=s.normal.y>0?e.max.y:e.min.y,ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};br=class i extends gn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],y=[],m=[],p=[];for(let v=0;v<h;v++){let M=v*f-a;for(let g=0;g<c;g++){let x=g*u-r;y.push(x,-M,0),m.push(0,0,1),p.push(g/o),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let M=0;M<o;M++){let g=M+c*v,x=M+c*(v+1),b=M+1+c*(v+1),E=M+1+c*v;d.push(g,x,E),d.push(x,b,E)}this.setIndex(d),this.setAttribute("position",new dt(y,3)),this.setAttribute("normal",new dt(m,3)),this.setAttribute("uv",new dt(p,2))}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$p="vec3 transformed = vec3( position );",Zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,jp=`#ifdef USE_IRIDESCENCE
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
#endif`,Qp=`#ifdef USE_BUMPMAP
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
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lm=`#define PI 3.141592653589793
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
}`,cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hm=`vec3 transformedNormal = objectNormal;
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
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",gm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ym=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_m=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Em=`#ifdef USE_GRADIENTMAP
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
}`,Am=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lm=`uniform bool receiveShadow;
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
#endif`,Im=`#if defined( USE_ENVMAP )
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
#endif`,Dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Om=`PhysicalMaterial material;
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
#endif`,zm=`struct PhysicalMaterial {
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
}`,Um=`
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
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Hm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qm=`#ifdef USE_MORPHNORMALS
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
#endif`,e0=`#ifdef USE_MORPHTARGETS
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
#endif`,t0=`#ifdef USE_MORPHTARGETS
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
#endif`,n0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,i0=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o0=`#ifdef USE_NORMALMAP
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
#endif`,l0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,c0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,h0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,f0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w0=`float getShadowMask() {
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
}`,S0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T0=`#ifdef USE_SKINNING
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
#endif`,E0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A0=`#ifdef USE_SKINNING
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
#endif`,R0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#ifdef USE_TRANSMISSION
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
#endif`,k0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,N0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,F0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,O0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,z0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,U0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,B0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,V0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H0=`uniform sampler2D t2D;
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Y0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,$0=`#define DISTANCE
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
}`,Z0=`#define DISTANCE
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Q0=`uniform float scale;
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
}`,eg=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#define LAMBERT
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define MATCAP
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
}`,ag=`#define MATCAP
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
}`,og=`#define NORMAL
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
}`,lg=`#define NORMAL
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
}`,cg=`#define PHONG
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
}`,hg=`#define PHONG
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
}`,fg=`#define STANDARD
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
}`,ug=`#define STANDARD
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
}`,dg=`#define TOON
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
}`,pg=`#define TOON
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
}`,mg=`uniform float size;
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
}`,gg=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,xg=`uniform vec3 color;
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
}`,_g=`uniform float rotation;
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
}`,vg=`uniform vec3 diffuse;
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
}`,Oe={alphamap_fragment:Wp,alphamap_pars_fragment:Gp,alphatest_fragment:qp,alphatest_pars_fragment:Xp,aomap_fragment:Yp,aomap_pars_fragment:Jp,begin_vertex:$p,beginnormal_vertex:Zp,bsdfs:Kp,iridescence_fragment:jp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:em,clipping_planes_pars_fragment:tm,clipping_planes_pars_vertex:nm,clipping_planes_vertex:im,color_fragment:sm,color_pars_fragment:rm,color_pars_vertex:am,color_vertex:om,common:lm,cube_uv_reflection_fragment:cm,defaultnormal_vertex:hm,displacementmap_pars_vertex:fm,displacementmap_vertex:um,emissivemap_fragment:dm,emissivemap_pars_fragment:pm,encodings_fragment:mm,encodings_pars_fragment:gm,envmap_fragment:ym,envmap_common_pars_fragment:xm,envmap_pars_fragment:_m,envmap_pars_vertex:vm,envmap_physical_pars_fragment:Im,envmap_vertex:bm,fog_vertex:Mm,fog_pars_vertex:wm,fog_fragment:Sm,fog_pars_fragment:Tm,gradientmap_pars_fragment:Em,lightmap_fragment:Am,lightmap_pars_fragment:Rm,lights_lambert_fragment:Cm,lights_lambert_pars_fragment:Pm,lights_pars_begin:Lm,lights_toon_fragment:Dm,lights_toon_pars_fragment:km,lights_phong_fragment:Nm,lights_phong_pars_fragment:Fm,lights_physical_fragment:Om,lights_physical_pars_fragment:zm,lights_fragment_begin:Um,lights_fragment_maps:Bm,lights_fragment_end:Vm,logdepthbuf_fragment:Hm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:Gm,logdepthbuf_vertex:qm,map_fragment:Xm,map_pars_fragment:Ym,map_particle_fragment:Jm,map_particle_pars_fragment:$m,metalnessmap_fragment:Zm,metalnessmap_pars_fragment:Km,morphcolor_vertex:jm,morphnormal_vertex:Qm,morphtarget_pars_vertex:e0,morphtarget_vertex:t0,normal_fragment_begin:n0,normal_fragment_maps:i0,normal_pars_fragment:s0,normal_pars_vertex:r0,normal_vertex:a0,normalmap_pars_fragment:o0,clearcoat_normal_fragment_begin:l0,clearcoat_normal_fragment_maps:c0,clearcoat_pars_fragment:h0,iridescence_pars_fragment:f0,output_fragment:u0,packing:d0,premultiplied_alpha_fragment:p0,project_vertex:m0,dithering_fragment:g0,dithering_pars_fragment:y0,roughnessmap_fragment:x0,roughnessmap_pars_fragment:_0,shadowmap_pars_fragment:v0,shadowmap_pars_vertex:b0,shadowmap_vertex:M0,shadowmask_pars_fragment:w0,skinbase_vertex:S0,skinning_pars_vertex:T0,skinning_vertex:E0,skinnormal_vertex:A0,specularmap_fragment:R0,specularmap_pars_fragment:C0,tonemapping_fragment:P0,tonemapping_pars_fragment:L0,transmission_fragment:I0,transmission_pars_fragment:D0,uv_pars_fragment:k0,uv_pars_vertex:N0,uv_vertex:F0,uv2_pars_fragment:O0,uv2_pars_vertex:z0,uv2_vertex:U0,worldpos_vertex:B0,background_vert:V0,background_frag:H0,backgroundCube_vert:W0,backgroundCube_frag:G0,cube_vert:q0,cube_frag:X0,depth_vert:Y0,depth_frag:J0,distanceRGBA_vert:$0,distanceRGBA_frag:Z0,equirect_vert:K0,equirect_frag:j0,linedashed_vert:Q0,linedashed_frag:eg,meshbasic_vert:tg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:sg,meshmatcap_vert:rg,meshmatcap_frag:ag,meshnormal_vert:og,meshnormal_frag:lg,meshphong_vert:cg,meshphong_frag:hg,meshphysical_vert:fg,meshphysical_frag:ug,meshtoon_vert:dg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:yg,shadow_frag:xg,sprite_vert:_g,sprite_frag:vg},se={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new nn},uv2Transform:{value:new nn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new nn}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new nn}}},Un={basic:{uniforms:Gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Je(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Gt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Gt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Je(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Gt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Gt([se.points,se.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Gt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Gt([se.common,se.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Gt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Gt([se.sprite,se.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new nn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Gt([se.common,se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Gt([se.lights,se.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Un.physical={uniforms:Gt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new qe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};fa={r:0,b:0,g:0};Ys=class extends Ea{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Us=4,rf=[.125,.215,.35,.446,.526,.582],qi=20,vl=new Ys,af=new Je,bl=null,Gi=(1+Math.sqrt(5))/2,Os=1/Gi,of=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Gi,Os),new D(0,Gi,-Os),new D(Os,0,Gi),new D(-Os,0,Gi),new D(Gi,Os,0),new D(-Gi,Os,0)],Ra=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){bl=this._renderer.getRenderTarget(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bl),e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bl=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:yr,format:Pn,encoding:Ki,depthBuffer:!1},s=lf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ag(r)),this._blurMaterial=Rg(r,e,t)}return s}_compileMaterial(e){let t=new Dt(this._lodPlanes[0],e);this._renderer.compile(t,vl)}_sceneToCubeUV(e,t,n,s){let o=new tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(af),h.toneMapping=ii,h.autoClear=!1;let d=new ri({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),y=new Dt(new es,d),m=!1,p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(af),m=!0);for(let v=0;v<6;v++){let M=v%3;M===0?(o.up.set(0,l[v],0),o.lookAt(c[v],0,0)):M===1?(o.up.set(0,0,l[v]),o.lookAt(0,c[v],0)):(o.up.set(0,l[v],0),o.lookAt(0,0,c[v]));let g=this._cubeSize;ua(s,M*g,v>2?g:0,g,g),h.setRenderTarget(s),m&&h.render(y,o),h.render(e,o)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ws||e.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ua(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,vl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=of[(s-1)%of.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Dt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*qi-1),m=r/y,p=isFinite(r)?1+Math.floor(h*m):qi;p>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qi}`);let v=[],M=0;for(let R=0;R<qi;++R){let _=R/m,S=Math.exp(-_*_/2);v.push(S),R===0?M+=S:R<p&&(M+=2*S)}for(let R=0;R<v.length;R++)v[R]=v[R]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=v,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:g}=this;f.dTheta.value=y,f.mipInt.value=g-n;let x=this._sizeLods[s],b=3*x*(s>g-Us?s-g+Us:0),E=4*(this._cubeSize-x);ua(t,b,E,3*x,2*x),l.setRenderTarget(t),l.render(u,vl)}};Vf=new mn,Hf=new ba,Wf=new Ll,Gf=new Aa,ff=[],uf=[],df=new Float32Array(16),pf=new Float32Array(9),mf=new Float32Array(4);Nl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=iy(t.type)}},Fl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=wy(t.type)}},Ol=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ml=/(\w+)(\])?(\[|\.)?/g;Hs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Sy(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};Ty=0;Dy=/^[ \t]*#include +<([\w\d./]+)>/gm;Ny=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Wy=0,Ul=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bl(e),t.set(e,n)),n}},Bl=class{constructor(e){this.id=Wy++,this.code=e,this.usedTimes=0}};Zy=0;Vl=class extends Qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hl=class extends Qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tx=`uniform sampler2D shadow_pass;
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
}`;Wl=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},yt=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ax={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let m of e.hand.values()){let p=t.getJointPose(m,n),v=this._getHandJoint(c,m);p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,y=.005;c.inputState.pinching&&f>d+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ax)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Gl=class extends mn{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Ji,h!==Ji&&h!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ji&&(n=Xi),n===void 0&&h===qs&&(n=Vs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Tt,this.minFilter=l!==void 0?l:Tt,this.flipY=!1,this.generateMipmaps=!1}},ql=class extends Si{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,y=null,m=t.getContextAttributes(),p=null,v=null,M=[],g=[],x=new Set,b=new Map,E=new tn;E.layers.enable(1),E.viewport=new It;let R=new tn;R.layers.enable(2),R.viewport=new It;let _=[E,R],S=new Wl;S.layers.enable(1),S.layers.enable(2);let C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let K=M[O];return K===void 0&&(K=new mr,M[O]=K),K.getTargetRaySpace()},this.getControllerGrip=function(O){let K=M[O];return K===void 0&&(K=new mr,M[O]=K),K.getGripSpace()},this.getHand=function(O){let K=M[O];return K===void 0&&(K=new mr,M[O]=K),K.getHandSpace()};function U(O){let K=g.indexOf(O.inputSource);if(K===-1)return;let ae=M[K];ae!==void 0&&ae.dispatchEvent({type:O.type,data:O.inputSource})}function N(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",L);for(let O=0;O<M.length;O++){let K=g[O];K!==null&&(g[O]=null,M[O].disconnect(K))}C=null,F=null,e.setRenderTarget(p),d=null,f=null,u=null,s=null,v=null,Me.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",N),s.addEventListener("inputsourceschange",L),m.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:s.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:d}),v=new si(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:Zi,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let K=null,ae=null,oe=null;m.depth&&(oe=m.stencil?35056:33190,K=m.stencil?qs:Ji,ae=m.stencil?Vs:Xi);let z={colorFormat:32856,depthFormat:oe,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(z),s.updateRenderState({layers:[f]}),v=new si(f.textureWidth,f.textureHeight,{format:Pn,type:Zi,depthTexture:new Gl(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});let De=e.properties.get(v);De.__ignoreDepthValues=f.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function L(O){for(let K=0;K<O.removed.length;K++){let ae=O.removed[K],oe=g.indexOf(ae);oe>=0&&(g[oe]=null,M[oe].disconnect(ae))}for(let K=0;K<O.added.length;K++){let ae=O.added[K],oe=g.indexOf(ae);if(oe===-1){for(let De=0;De<M.length;De++)if(De>=g.length){g.push(ae),oe=De;break}else if(g[De]===null){g[De]=ae,oe=De;break}if(oe===-1)break}let z=M[oe];z&&z.connect(ae)}}let G=new D,$=new D;function te(O,K,ae){G.setFromMatrixPosition(K.matrixWorld),$.setFromMatrixPosition(ae.matrixWorld);let oe=G.distanceTo($),z=K.projectionMatrix.elements,De=ae.projectionMatrix.elements,ge=z[14]/(z[10]-1),ye=z[14]/(z[10]+1),fe=(z[9]+1)/z[5],at=(z[9]-1)/z[5],Ne=(z[8]-1)/z[0],Ce=(De[8]+1)/De[0],Vt=ge*Ne,ln=ge*Ce,Ot=oe/(-Ne+Ce),cn=Ot*-Ne;K.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(cn),O.translateZ(Ot),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();let wt=ge+Ot,Ke=ye+Ot,qn=Vt-cn,vn=ln+(oe-cn),A=fe*ye/Ke*wt,w=at*ye/Ke*wt;O.projectionMatrix.makePerspective(qn,vn,A,w,wt,Ke)}function Y(O,K){K===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(K.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;S.near=R.near=E.near=O.near,S.far=R.far=E.far=O.far,(C!==S.near||F!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,F=S.far);let K=O.parent,ae=S.cameras;Y(S,K);for(let z=0;z<ae.length;z++)Y(ae[z],K);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),O.matrix.copy(S.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);let oe=O.children;for(let z=0,De=oe.length;z<De;z++)oe[z].updateMatrixWorld(!0);ae.length===2?te(S,E,R):S.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(O){l=O,f!==null&&(f.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)},this.getPlanes=function(){return x};let ne=null;function Z(O,K){if(h=K.getViewerPose(c||a),y=K,h!==null){let ae=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let oe=!1;ae.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let z=0;z<ae.length;z++){let De=ae[z],ge=null;if(d!==null)ge=d.getViewport(De);else{let fe=u.getViewSubImage(f,De);ge=fe.viewport,z===0&&(e.setRenderTargetTextures(v,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(v))}let ye=_[z];ye===void 0&&(ye=new tn,ye.layers.enable(z),ye.viewport=new It,_[z]=ye),ye.matrix.fromArray(De.transform.matrix),ye.projectionMatrix.fromArray(De.projectionMatrix),ye.viewport.set(ge.x,ge.y,ge.width,ge.height),z===0&&S.matrix.copy(ye.matrix),oe===!0&&S.cameras.push(ye)}}for(let ae=0;ae<M.length;ae++){let oe=g[ae],z=M[ae];oe!==null&&z!==void 0&&z.update(oe,K,c||a)}if(ne&&ne(O,K),K.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let ae=null;for(let oe of x)K.detectedPlanes.has(oe)||(ae===null&&(ae=[]),ae.push(oe));if(ae!==null)for(let oe of ae)x.delete(oe),b.delete(oe),n.dispatchEvent({type:"planeremoved",data:oe});for(let oe of K.detectedPlanes)if(!x.has(oe))x.add(oe),b.set(oe,K.lastChangedTime),n.dispatchEvent({type:"planeadded",data:oe});else{let z=b.get(oe);oe.lastChangedTime>z&&(b.set(oe,oe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:oe}))}}y=null}let Me=new Bf;Me.setAnimationLoop(Z),this.setAnimationLoop=function(O){ne=O},this.dispose=function(){}}};Xl=class extends ac{};Xl.prototype.isWebGL1Renderer=!0;Ca=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}},Pa=class extends mn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Tt,h=Tt,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},La=class extends rn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ef=new xt,Af=new xt,da=[],hx=new xt,fr=new Dt,Ia=class extends Dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new La(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let s=0;s<n;s++)this.setMatrixAt(s,hx)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0)for(let r=0;r<s;r++){this.getMatrixAt(r,Ef),Af.multiplyMatrices(n,Ef),fr.matrixWorld=Af,fr.raycast(e,da);for(let a=0,o=da.length;a<o;a++){let l=da[a];l.instanceId=r,l.object=this,t.push(l)}da.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new La(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Da=class i extends gn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new D,h=new qe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(l,2))}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mr=class i extends gn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],y=0,m=[],p=n/2,v=0;M(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(d,2));function M(){let x=new D,b=new D,E=0,R=(t-e)/n;for(let _=0;_<=r;_++){let S=[],C=_/r,F=C*(t-e)+e;for(let U=0;U<=s;U++){let N=U/s,L=N*l+o,G=Math.sin(L),$=Math.cos(L);b.x=F*G,b.y=-C*n+p,b.z=F*$,u.push(b.x,b.y,b.z),x.set(G,R,$).normalize(),f.push(x.x,x.y,x.z),d.push(N,1-C),S.push(y++)}m.push(S)}for(let _=0;_<s;_++)for(let S=0;S<r;S++){let C=m[S][_],F=m[S+1][_],U=m[S+1][_+1],N=m[S][_+1];h.push(C,F,N),h.push(F,U,N),E+=6}c.addGroup(v,E,0),v+=E}function g(x){let b=y,E=new qe,R=new D,_=0,S=x===!0?e:t,C=x===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,p*C,0),f.push(0,C,0),d.push(.5,.5),y++;let F=y;for(let U=0;U<=s;U++){let L=U/s*l+o,G=Math.cos(L),$=Math.sin(L);R.x=S*$,R.y=p*C,R.z=S*G,u.push(R.x,R.y,R.z),f.push(0,C,0),E.x=G*.5+.5,E.y=$*.5*C+.5,d.push(E.x,E.y),y++}for(let U=0;U<s;U++){let N=b+U,L=F+U;x===!0?h.push(L,L+1,N):h.push(L+1,L,N),_+=3}c.addGroup(v,_,x===!0?1:2),v+=_}}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ka=class i extends Mr{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Na=class i extends gn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let g=new D,x=new D,b=new D;for(let E=0;E<t.length;E+=3)d(t[E+0],g),d(t[E+1],x),d(t[E+2],b),l(g,x,b,M)}function l(M,g,x,b){let E=b+1,R=[];for(let _=0;_<=E;_++){R[_]=[];let S=M.clone().lerp(x,_/E),C=g.clone().lerp(x,_/E),F=E-_;for(let U=0;U<=F;U++)U===0&&_===E?R[_][U]=S:R[_][U]=S.clone().lerp(C,U/F)}for(let _=0;_<E;_++)for(let S=0;S<2*(E-_)-1;S++){let C=Math.floor(S/2);S%2===0?(f(R[_][C+1]),f(R[_+1][C]),f(R[_][C])):(f(R[_][C+1]),f(R[_+1][C+1]),f(R[_+1][C]))}}function c(M){let g=new D;for(let x=0;x<r.length;x+=3)g.x=r[x+0],g.y=r[x+1],g.z=r[x+2],g.normalize().multiplyScalar(M),r[x+0]=g.x,r[x+1]=g.y,r[x+2]=g.z}function h(){let M=new D;for(let g=0;g<r.length;g+=3){M.x=r[g+0],M.y=r[g+1],M.z=r[g+2];let x=p(M)/2/Math.PI+.5,b=v(M)/Math.PI+.5;a.push(x,1-b)}y(),u()}function u(){for(let M=0;M<a.length;M+=6){let g=a[M+0],x=a[M+2],b=a[M+4],E=Math.max(g,x,b),R=Math.min(g,x,b);E>.9&&R<.1&&(g<.2&&(a[M+0]+=1),x<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,g){let x=M*3;g.x=e[x+0],g.y=e[x+1],g.z=e[x+2]}function y(){let M=new D,g=new D,x=new D,b=new D,E=new qe,R=new qe,_=new qe;for(let S=0,C=0;S<r.length;S+=9,C+=6){M.set(r[S+0],r[S+1],r[S+2]),g.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),E.set(a[C+0],a[C+1]),R.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),b.copy(M).add(g).add(x).divideScalar(3);let F=p(b);m(E,C+0,M,F),m(R,C+2,g,F),m(_,C+4,x,F)}}function m(M,g,x,b){b<0&&M.x===1&&(a[g]=M.x-1),x.x===0&&x.z===0&&(a[g]=b/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function v(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Fa=class i extends Na{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Oa=class i extends Na{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},za=class i extends gn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,f=new D,d=[],y=[],m=[],p=[];for(let v=0;v<=n;v++){let M=[],g=v/n,x=0;v==0&&a==0?x=.5/t:v==n&&l==Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let E=b/t;u.x=-e*Math.cos(s+E*r)*Math.sin(a+g*o),u.y=e*Math.cos(a+g*o),u.z=e*Math.sin(s+E*r)*Math.sin(a+g*o),y.push(u.x,u.y,u.z),f.copy(u).normalize(),m.push(f.x,f.y,f.z),p.push(E+x,1-g),M.push(c++)}h.push(M)}for(let v=0;v<n;v++)for(let M=0;M<t;M++){let g=h[v][M+1],x=h[v][M],b=h[v+1][M],E=h[v+1][M+1];(v!==0||a>0)&&d.push(g,x,E),(v!==n-1||l<Math.PI)&&d.push(x,b,E)}this.setIndex(d),this.setAttribute("position",new dt(y,3)),this.setAttribute("normal",new dt(m,3)),this.setAttribute("uv",new dt(p,2))}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ua=class i extends gn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let y=0;y<=s;y++){let m=y/s*r,p=d/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(m),u.y=(e+t*Math.cos(p))*Math.sin(m),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(m),h.y=e*Math.sin(m),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(y/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let y=1;y<=s;y++){let m=(s+1)*d+y-1,p=(s+1)*(d-1)+y-1,v=(s+1)*(d-1)+y,M=(s+1)*d+y;a.push(m,p,M),a.push(p,v,M)}this.setIndex(a),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Bn=class extends Qi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Je(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ff,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};Js=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yl=class extends Js{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vh,endingEnd:Vh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hh:r=e,o=2*t-n;break;case Wh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hh:a=e,l=2*n-t;break;case Wh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,y=(n-t)/(s-t),m=y*y,p=m*y,v=-f*p+2*f*m-f*y,M=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*y+1,g=(-1-d)*p+(1.5+d)*m+.5*y,x=d*p-d*m;for(let b=0;b!==o;++b)r[b]=v*a[h+b]+M*a[c+b]+g*a[l+b]+x*a[u+b];return r}},Jl=class extends Js{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},$l=class extends Js{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pa(t,this.TimeBufferType),this.values=pa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pa(e.times,Array),values:pa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ga:t=this.InterpolantFactoryMethodDiscrete;break;case ya:t=this.InterpolantFactoryMethodLinear;break;case Zo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return ya;case this.InterpolantFactoryMethodSmooth:return Zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=vi(n,r,a),this.values=vi(this.values,r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&qf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=vi(this.times),t=vi(this.values),n=this.getValueSize(),s=this.getInterpolation()===Zo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let y=0;y!==n;++y){let m=t[u+y];if(m!==t[f+y]||m!==t[d+y]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=vi(e,0,a),this.values=vi(t,0,a*n)):(this.times=e,this.values=t),this}clone(){let e=vi(this.times,0),t=vi(this.values,0),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=ya;ts=class extends Ln{};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=ga;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;Zl=class extends Ln{};Zl.prototype.ValueTypeName="color";Kl=class extends Ln{};Kl.prototype.ValueTypeName="number";jl=class extends Js{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ti.slerpFlat(r,0,a,c-o,a,c,l);return r}},wr=class extends Ln{InterpolantFactoryMethodLinear(e){return new jl(this.times,this.values,this.getValueSize(),e)}};wr.prototype.ValueTypeName="quaternion";wr.prototype.DefaultInterpolation=ya;wr.prototype.InterpolantFactoryMethodSmooth=void 0;ns=class extends Ln{};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=ga;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;Ql=class extends Ln{};Ql.prototype.ValueTypeName="vector";Ba=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Va=class extends Ba{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},wl=new xt,Rf=new D,Cf=new D,ec=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Rf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rf),Cf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cf),t.updateMatrixWorld(),wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},tc=class extends ec{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ha=class extends Ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new tc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},oc="\\[\\]\\.:\\/",fx=new RegExp("["+oc+"]","g"),lc="[^"+oc+"]",ux="[^"+oc.replace("\\.","")+"]",dx=/((?:WC+[\/:])*)/.source.replace("WC",lc),px=/(WCOD+)?/.source.replace("WCOD",ux),mx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),gx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),yx=new RegExp("^"+dx+px+mx+gx+"$"),xx=["material","materials","bones","map"],nc=class{constructor(e,t,n){let s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fx,"")}static parseTrackName(e){let t=yx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);xx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=nc;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];O1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"149"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="149")});function rs(){return Zs||(Zs=new Pa(new Uint8Array([90,160,225]),3,1,sc),Zs.minFilter=Zs.magFilter=Tt,Zs.needsUpdate=!0),Zs}function me(i,e={}){let t=i+JSON.stringify(e),n=Ka.get(t);return n||(n=new Bn({color:i,gradientMap:rs(),...e}),Ka.set(t,n)),n}function ee(i,...e){let t=i+e.join(","),n=$f.get(t);return n||(n=i==="box"?new es(...e):i==="cyl"?new Mr(...e):i==="sph"?new za(...e):i==="ico"?new Oa(...e):i==="cone"?new ka(...e):i==="tor"?new Ua(...e):i==="plane"?new br(...e):i==="circ"?new Da(...e):new Fa(...e),$f.set(t,n)),n}function ue(i,e,t=0,n=0,s=0,r=!0){let a=new Dt(i,e);return a.position.set(t,n,s),a.castShadow=r,a.receiveShadow=!0,a}function Qf(){if(oi)return!0;try{hc=document.createElement("canvas"),oi=new ac({canvas:hc,antialias:!0,powerPreference:"high-performance"})}catch{return oi=null,!1}return oi.shadowMap.enabled=!0,oi.shadowMap.type=ic,li=new Ca,li.background=new Je("#1a1d14"),Ja=new Ys(-360/2,360/2,240*cc/2,-240*cc/2,1,4e3),Yf=new Va("#fff4e0","#6a5a48",.42),li.add(Yf),In=new Ha("#ffe8c8",.72),In.castShadow=!0,In.shadow.mapSize.set(1024,1024),Object.assign(In.shadow.camera,{left:-260,right:260,top:260,bottom:-260,near:10,far:1400}),In.shadow.bias=-.0015,In.shadow.normalBias=.6,li.add(In,In.target),fc($a),!0}function fc(i){$a=Math.min(i,2.5),oi&&oi.setSize(Math.round(360*$a),Math.round(240*$a),!1)}function yn(i,e,t,n,s){if(!n.length)return;let r=new Ia(e,t,n.length),a=new Nt;n.forEach((o,l)=>{a.position.set(o.x,o.y||0,o.z),a.rotation.set(o.rx||0,o.ry||0,o.rz||0),a.scale.set(o.sx||1,o.sy||o.sx||1,o.sz||o.sx||1),a.updateMatrix(),r.setMatrixAt(l,a.matrix),s&&r.setColorAt(l,new Je(s[l]))}),r.castShadow=!0,r.receiveShadow=!0,i.add(r)}function Mx(){qa&&(li.remove(qa),qa.traverse(g=>{g.isInstancedMesh&&g.dispose()}));let i=qa=new yt,e=Zf[xe.theme]||Zf[0],t=ue(ee("plane",760,je+600),me(e.ground),360/2,0,je/2,!1);t.rotation.x=-Math.PI/2,i.add(t);let n=ue(ee("plane",360,430),me(e.ground2),360/2,.15,215,!1);n.rotation.x=-Math.PI/2,i.add(n);let s=[],r=[],a=[];for(let g=0;g<900;g++){let x=Pe(g,1)*360,b=430+Pe(1,g)*(je-400),E=Pe(g,g);s.push({x,y:.1,z:b,rx:-Math.PI/2,sx:10+E*22,sy:6+E*12,sz:1,rz:E*6}),r.push(E>.5?e.ground2:e.bank),g%2&&a.push({x:Pe(g,7)*360,y:1,z:430+Pe(7,g)*(je-400),sx:1.4+E,sy:1+E*.6,ry:E*3})}yn(i,ee("circ",1,12),new Bn({gradientMap:rs(),transparent:!0,opacity:.5,depthWrite:!1}),s,r),yn(i,ee("ico",2.2,0),me(e.grass2,{flatShading:!0}),a);for(let g of xe.roads){let x=ue(ee("box",g.w,.6,g.y1-g.y0),me(e.road),g.x+g.w/2,.3,(g.y0+g.y1)/2,!1);i.add(x)}let o=[];for(let g of xe.rivers){let x=[],b=0;for(let E of[...g.bridges].sort((R,_)=>R.x-_.x))E.x>b&&x.push([b,E.x]),b=E.x+E.w;if(b<360&&x.push([b,360]),g.kind==="water"){i.add(ue(ee("box",760,.8,g.h+12),me(e.bank),360/2,.35,g.y+g.h/2,!1));let E=ue(ee("box",760,.6,g.h),me(e.water),360/2,.9,g.y+g.h/2,!1);i.add(E);for(let R of g.bridges){i.add(ue(ee("box",R.w,3,g.h+18),me("#9a6a3e"),R.x+R.w/2,1.8,g.y+g.h/2));for(let _ of[R.x-1,R.x+R.w+1])i.add(ue(ee("box",2,5,g.h+18),me("#6e4626"),_,3.5,g.y+g.h/2))}for(let R=0;R<18;R++)o.push({x:Pe(R,g.y)*360,y:1,z:g.y+(R%2?-4:g.h+4),sx:2+Pe(g.y,R)*3,ry:R})}else for(let[E,R]of x)if(g.kind==="ridge"){i.add(ue(ee("box",R-E,12,g.h),me(e.rock),(E+R)/2,6,g.y+g.h/2));for(let _=E+6;_<R-4;_+=9)o.push({x:_,y:10+Pe(_,g.y)*4,z:g.y+g.h*(.3+Pe(g.y,_)*.4),sx:6+Pe(_,3)*4,sy:5+Pe(3,_)*5,ry:_})}else{i.add(ue(ee("box",R-E,14,g.h),me("#a8b0bc"),(E+R)/2,7,g.y+g.h/2)),i.add(ue(ee("box",R-E,1.5,g.h+2),me("#dce2ea"),(E+R)/2,14.5,g.y+g.h/2));for(let _ of[E>0?E+3:-99,R<360?R-3:-99])_>0&&i.add(ue(ee("box",6,16,g.h+2),me("#ffcc33"),_,8,g.y+g.h/2))}}for(let g of xe.helipads){i.add(ue(ee("cyl",22,23,1.6,24),me("#a8a49a"),g.x,.8,g.y,!1));let x=ue(ee("tor",17,1.1,6,32),me("#ffcc33"),g.x,1.7,g.y,!1);x.rotation.x=Math.PI/2,i.add(x);for(let[b,E,R]of[[-6,3,16],[6,3,16],[0,9,3]])i.add(ue(ee("box",E,.6,R),me("#ffffff"),g.x+b,1.9,g.y,!1))}let l=[];for(let g of xe.blockers)if(g.kind==="sandbag")for(let x=g.x+4;x<g.x+g.w;x+=7)for(let b=0;b<2;b++)l.push({x:x+b*3,y:2.5+b*4,z:g.y+g.h/2,sx:3.6,sy:2.2,sz:3.2});else g.kind==="rock"&&o.push({x:g.x+g.w/2,y:4,z:g.y+g.h/2,sx:g.w/2,sy:9,sz:g.h/2+2,ry:g.x});yn(i,ee("sph",1,8,6),me("#d8bc84"),l),yn(i,ee("dod",1,0),me(e.rock,{flatShading:!0}),o);let c=[],h=[],u=[],f=[],d=[],y=[],m=[],p=[];for(let g of xe.deco){let x=Pe(g.x|0,g.y|0);if(g.kind==="tree")c.push({x:g.x,y:5,z:g.y,sx:1,sy:1}),h.push({x:g.x,y:15+x*3,z:g.y,sx:9+x*3,sy:8+x*3,ry:x*6}),u.push(x>.5?e.grass:e.grass2),h.push({x:g.x+4,y:20+x*2,z:g.y-2,sx:6,sy:5.5,ry:x}),u.push(e.grass);else if(g.kind==="bush"||g.kind==="snowbush"||g.kind==="drybush")f.push({x:g.x,y:3,z:g.y,sx:5+x*3,sy:4+x*2,ry:x*6});else if(g.kind==="cactus")d.push({x:g.x,y:9,z:g.y,sx:2.6,sy:9,sz:2.6}),y.push({x:g.x-4,y:11,z:g.y,sx:1.6,sy:4,sz:1.6}),y.push({x:g.x+4,y:13,z:g.y,sx:1.6,sy:4,sz:1.6});else if(g.kind==="pine"){c.push({x:g.x,y:4,z:g.y,sx:.8,sy:.8});for(let b=0;b<3;b++)m.push({x:g.x,y:9+b*6,z:g.y,sx:9-b*2.4,sy:8,sz:9-b*2.4}),p.push({x:g.x,y:12+b*6,z:g.y,sx:4.5-b*1.2,sy:3,sz:4.5-b*1.2})}}yn(i,ee("cyl",1.6,2.2,10,6),me("#8a5a32"),c),yn(i,ee("ico",1,1),new Bn({gradientMap:rs(),flatShading:!0}),h,u),yn(i,ee("ico",1,0),me(xe.theme===2?"#f4f8fc":xe.theme===1?"#a88a5a":e.grass2,{flatShading:!0}),f),yn(i,ee("cyl",1,1,2,7),me("#4aa85a"),d.concat(y)),yn(i,ee("cone",1,1,7),me(e.grass2,{flatShading:!0}),m),yn(i,ee("cone",1,1,7),me("#ffffff",{flatShading:!0}),p);let v=[],M=[];for(let g=440;g<je;g+=14)for(let x of[2,358])xe.rivers.some(b=>g>b.y-8&&g<b.y+b.h+8)||(v.push({x,y:4,z:g,sx:1,sy:1,sz:1}),M.push({x,y:6,z:g+7,sx:1,sy:1,sz:1}));yn(i,ee("box",2.2,8,2.2),me(e.fence),v),yn(i,ee("box",1.2,1.4,14),me(e.fence),M),li.add(i)}function Za(i,e,t,n){let s=new yt,r=xn(i);s.add(ue(ee("box",1.8,4,2),me(e),-1.2,2,0),ue(ee("box",1.8,4,2),me(e),1.2,2,0)),s.add(ue(ee("box",5,5,3.2),r,0,6.5,0));for(let a of[-1,1]){let o=ue(ee("box",1.4,4.5,1.4),r,a*3.2,n?9.5:6.3,0);n&&(o.rotation.z=a*.5),s.add(o)}if(s.add(ue(ee("sph",2.4,10,8),me("#f0c49a"),0,10.8,0)),t){let a=ue(ee("sph",2.7,10,6,0,Math.PI*2,0,Math.PI/2),me(t),0,11.2,0);s.add(a)}return{g:s,mats:[r]}}function wx(i){let e=new yt,t=i===0?"#5cbf4a":"#4a8ef0",n=xn(t);e.add(ue(ee("box",12,5,18),n,0,5.5,0)),e.add(ue(ee("box",11,2.2,6),xn(i===0?"#86dc6c":"#80b8ff"),0,8.6,5.5));let s=ue(ee("box",11,4,.8),me("#a8e4ff",{emissive:"#3a7aa0",emissiveIntensity:.3}),0,9.8,2.2);e.add(s),e.add(ue(ee("box",4,2.5,3.5),me("#9a5a30"),-2.5,9,-2),ue(ee("box",4,2.5,3.5),me("#9a5a30"),2.5,9,-2)),e.add(ue(ee("box",12.5,1,1),me("#3a3c46"),0,13,-4.8));for(let l of[-1,1])e.add(ue(ee("box",1,5,1),me("#3a3c46"),l*5.8,10.5,-4.8));let r=ue(ee("cyl",.9,.9,10,6),me("#2e3038"),0,11.2,5);r.rotation.x=Math.PI/2,e.add(r),e.add(ue(ee("cyl",1.6,1.6,2.5,8),me("#4a4c58"),0,10.6,.5));for(let[l,c]of[[-6.6,6],[6.6,6],[-6.6,-6],[6.6,-6]]){let h=ue(ee("cyl",3.1,3.1,2.6,10),me("#24252c"),l,3.1,c);h.rotation.z=Math.PI/2,e.add(h)}let a=Za("#c8a060","#5a4a30","#3f6a2a");a.g.scale.setScalar(.55),a.g.position.set(-2.5,6.5,-2),e.add(a.g);let o=new Dt(ee("sph",17,16,12),new ri({color:"#8cd2ff",transparent:!0,opacity:.22,depthWrite:!1}));return o.position.y=7,o.visible=!1,e.add(o),{g:e,mats:[n],shield:o}}function Kf(i){let e=new yt,t=xn(i?"#8a6a5a":"#c8a868"),n=ue(ee("tor",8.5,3,8,14),t,0,3,0);n.rotation.x=Math.PI/2,e.add(n),e.add(ue(ee("sph",5.5,12,8,0,Math.PI*2,0,Math.PI/2),xn("#6a6c78"),0,3,0));let s=new yt;s.position.y=5.5;let r=ue(ee("cyl",1.4,1.6,13,8),me(i?"#a83a2a":"#3a3c46"),0,0,7);return r.rotation.x=Math.PI/2,s.add(r),e.add(s),{g:e,mats:[t],pivot:s}}function Sx(){let i=new yt,e=xn("#b85a3a");for(let s of[-1,1])i.add(ue(ee("box",4.5,5,22),me("#2a2b32"),s*8.2,2.6,0));i.add(ue(ee("box",12,5,20),e,0,5,0));let t=new yt;t.position.y=9,t.add(ue(ee("cyl",5.5,6,3.6,10),xn("#d0704a"),0,0,0));let n=ue(ee("cyl",1.3,1.5,14,8),me("#5a2418"),0,.4,8);return n.rotation.x=Math.PI/2,t.add(n),i.add(t),{g:i,mats:[e],pivot:t}}function Tx(){let i=new yt,e=xn("#a8743e");i.add(ue(ee("box",30,12,22),e,0,6,0));let t=ue(ee("cone",22,10,4),xn("#d8483a"),0,17,0);t.rotation.y=Math.PI/4,t.scale.set(1,1,.78),i.add(t),i.add(ue(ee("box",11,9,.6),me("#2a2420"),0,4.5,11.2));for(let n=-4;n<=4;n+=2)i.add(ue(ee("cyl",.35,.35,9,4),me("#c8c8d2"),n,4.5,11.6));return i.add(ue(ee("box",7,4,.6),me("#fff2c0"),-10,8,11.3)),{g:i,mats:[e]}}function Ex(i){let e=new yt,t=xn(i?"#c8d0dc":"#c8bfae");e.add(ue(ee("box",184,24,84),t,0,12,0));for(let r=-86;r<=86;r+=14)e.add(ue(ee("box",9,6,6),me(i?"#ffffff":"#ddd4c4"),r,27,-39));for(let r of[-80,80])e.add(ue(ee("cyl",15,16,36,10),me(i?"#dde4ec":"#d8cfbe"),r,18,-20)),e.add(ue(ee("cone",17,12,10),me("#c83a2e"),r,42,-20));e.add(ue(ee("box",36,18,2),me("#3a2c20"),0,9,42));for(let r=-15;r<=15;r+=6)e.add(ue(ee("box",3.5,17,1),me("#8a5a32"),r,9,43));let n=ue(ee("sph",10,16,12),new Bn({color:"#ff5a40",emissive:"#ff2010",emissiveIntensity:.6,gradientMap:rs()}),0,30,-12);e.add(n);let s=new Dt(ee("sph",17,16,12),new ri({color:"#8cd2ff",transparent:!0,opacity:.3,depthWrite:!1}));return s.position.set(0,30,-12),e.add(s),{g:e,mats:[t],core:n,shield:s}}function Ax(){let i=new yt,e=xn("#c8944c");for(let s of[-1,1])i.add(ue(ee("box",18,12,60),me("#2a2b32"),s*52,6,0));i.add(ue(ee("box",88,16,54),e,0,10,0));for(let s=-40;s<40;s+=16)i.add(ue(ee("box",8,1,3),me("#ffcc33"),s+4,18.6,-22));for(let s of[-12,0,12])i.add(ue(ee("box",6,6,2),me("#1e1a16"),s,8,27.5));let t=ue(ee("sph",7,14,10),new Bn({color:"#ff5a40",emissive:"#ff2010",emissiveIntensity:.6,gradientMap:rs()}),0,20,-4);i.add(t);let n=new Dt(ee("sph",12,16,12),new ri({color:"#8cd2ff",transparent:!0,opacity:.3,depthWrite:!1}));return n.position.set(0,20,-4),i.add(n),{g:i,mats:[e],core:t,shield:n}}function Rx(){let i=new yt,e=xn("#4e8a40"),t=ue(ee("sph",7,14,10),e,0,10,0);t.scale.set(1,.85,1.35),i.add(t);let n=ue(ee("sph",4.6,12,8),me("#a8e4ff",{emissive:"#3a7aa0",emissiveIntensity:.3}),0,11.5,-6);i.add(n),i.add(ue(ee("box",2.6,2.6,16),e,0,11,15),ue(ee("box",1,7,4),e,0,13,22));for(let r of[-1,1])i.add(ue(ee("box",1.2,1.2,18),me("#4a4c58"),r*6,2,0));let s=new yt;return s.position.y=18,s.add(ue(ee("box",40,.6,2.2),me("#3a3c46"),0,0,0,!1),ue(ee("box",2.2,.6,40),me("#3a3c46"),0,0,0,!1)),i.add(s),{g:i,mats:[e],rotor:s}}function Cx(i){let e=new yt;return e.add(ue(ee("box",9,9,9),new Bn({color:Xa[i]||Xa[0],emissive:Xa[i]||Xa[0],emissiveIntensity:.35,gradientMap:rs()}),0,0,0)),e.add(ue(ee("box",9.6,2,9.6),me("#ffffff"),0,0,0,!1)),{g:e,mats:[]}}function Px(i){let e=new yt,t=(n,s,r=0)=>{let a=new Dt(n,bx(s));return a.rotation.x=r,e.add(a),a};switch(i){case Se.mg:t(ee("sph",1.6,6,4),"#fff27a");break;case Se.big:t(ee("sph",2.6,8,6),"#ffb040");break;case Se.ebullet:t(ee("sph",2.4,8,6),"#ff4a38");break;case Se.eshell:t(ee("sph",3.4,8,6),"#ff8a2a");break;case Se.missile:case Se.homing:t(ee("cyl",1.4,1.4,8,6),"#f4f4f4",Math.PI/2);break;case Se.laser:t(ee("box",2,2,18),"#9cf4ff");break;default:t(ee("sph",2.5,6,4),"#4c6c2c")}return e.traverse(n=>{n.castShadow=!1}),{g:e,mats:[]}}function ss(i,e,t,n,s){let r=new Set;for(let a of e){let o=t(a),l=i.get(o);l||(l=n(a),li.add(l.g),i.set(o,l)),s(l,a),r.add(o)}for(let[a,o]of i)r.has(a)||(li.remove(o.g),o.mats&&o.mats.forEach(l=>l.dispose()),i.delete(a))}function uc(i){if(!oi)return null;let e=xe.theme+":"+xe.helipads.length+":"+xe.spawns.length+":"+xe.deco.length;if(e!==Jf){Jf=e;for(let o of Object.values(is))ss(o,[],()=>0);Mx()}let t=i.cam,n=i.now,s=360/2,r=t+240/2;Ja.position.set(s,cc*1500,r+vx*1500),Ja.lookAt(s,0,r),In.position.set(s-180,420,r+260),In.target.position.set(s,0,r),In.target.updateMatrixWorld();let a=i.S||{e:[],b:[],w:[],i:[],players:[]};return ss(is.e,a.e,o=>o[0]+":"+o[1],o=>{switch(o[1]){case q.soldier:{let l=Za("#7a70b8","#3c2c50","#d83a2e",!1);return l.g.scale.setScalar(1.4),l}case q.turret:return Kf(!1);case q.bossTurret:return Kf(!0);case q.tank:return Sx();case q.prison:return Tx();case q.boss:{let l=Ex(xe.theme===2);return l.g.scale.y=.5,l}case q.boss2:{let l=Ax();return l.g.scale.y=.75,l}}return Za("#888","#444",null)},(o,l)=>{let[,c,h,u,f,,d,y]=l;o.g.position.set(h,0,u),c===q.soldier?(o.g.rotation.y=Ya(f),o.g.position.y=Math.abs(Math.sin(n/90+l[0]))*.8):o.pivot&&(o.pivot.rotation.y=Ya(f)),o.shield&&(o.shield.visible=!!y),o.core&&(o.core.material.emissiveIntensity=.4+.4*Math.sin(n/140)),Lx(o,d)}),ss(is.w,a.w,o=>o[0],()=>{let o=Za("#ffffff","#4c70c8","#6a3c1c",!0);return o.g.scale.setScalar(1.35),o},(o,l)=>{if(o.g.position.set(l[1],Math.abs(Math.sin(n/120+l[0]))*1.5,l[2]),l[3])for(let c of o.mats)c.emissive.setHex((n/120|0)%2?8939008:0)}),ss(is.i,a.i,o=>o[0]+":"+o[1],o=>Cx(o[1]),(o,l)=>{o.g.position.set(l[2],7+Math.sin(n/200+l[0])*1.5,l[3]),o.g.rotation.y=n/600,o.g.visible=!(l[4]&&(n/100|0)%2)}),ss(is.b,a.b,o=>o[0],o=>Px(o[1]),(o,l)=>{o.g.position.set(l[2],6+(l[4]||0),l[3]),o.g.rotation.y=Ya(l[5]||0)}),ss(is.p,a.players.filter(o=>o[3]),o=>o.slot,o=>wx(o.slot),(o,l)=>{o.g.position.set(l.x,0,l.y),o.g.rotation.y=Ya(l.a),o.g.visible=!(l[4]&&(n/90|0)%2),o.shield.visible=!!l[11]}),ss(is.h,xe.helipads.map((o,l)=>({h:o,i:l})),o=>o.i,()=>Rx(),(o,{h:l,i:c})=>{let h=(i.padAnim||{})[c]||0,u=h>0?Math.sin((1-h/2.4)*Math.PI)*40:0;o.g.position.set(l.x,1.6+u,l.y),o.rotor.rotation.y=n*(h>0?.03:.006)}),oi.render(li,Ja),hc}function eu(i,e,t,n){for(let s of e.players){if(!s[3])continue;let r=s.x,a=s.y-t;s[7]>0&&(i.fillStyle="#ffffff",i.beginPath(),i.roundRect?i.roundRect(r-7,a-30,14,9,3):i.rect(r-7,a-30,14,9),i.fill(),i.fillStyle="#2a2a2a",i.font="bold 7px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(s[7],r,a-25.3)),s.slot===n&&(i.fillStyle=s.slot===0?"#8fe070":"#8cc0ff",i.beginPath(),i.moveTo(r,a-34),i.lineTo(r-4,a-40),i.lineTo(r+4,a-40),i.closePath(),i.fill())}}var jf,cc,vx,oi,li,Ja,In,Yf,qa,Jf,$a,hc,Zs,Ka,$f,xn,bx,Zf,Xa,is,Ya,Lx,tu=qt(()=>{Xf();Nn();ys();mi();zi();jf=46*Math.PI/180,cc=Math.sin(jf),vx=Math.cos(jf),oi=null,qa=null,Jf="",$a=2,hc=null,Zs=null,Ka=new Map,$f=new Map;xn=(i,e={})=>new Bn({color:i,gradientMap:rs(),...e}),bx=(i,e={})=>{let t="b"+i+JSON.stringify(e),n=Ka.get(t);return n||(n=new ri({color:i,...e}),Ka.set(t,n)),n};Zf=[{ground:"#a8b86a",ground2:"#c8a878",grass:"#4fae44",grass2:"#33903a",road:"#c8a070",rock:"#d2bcae",rockDk:"#b8a092",water:"#3a8ed0",bank:"#dcc496",fence:"#a8804e"},{ground:"#dcb47e",ground2:"#c89a64",grass:"#6a9a40",grass2:"#4f7f34",road:"#c8945a",rock:"#e2c2a8",rockDk:"#c09068",water:"#3a92c4",bank:"#ead2a2",fence:"#9a6e40"},{ground:"#e2e8f0",ground2:"#cdd6e2",grass:"#3f8a6a",grass2:"#2c6c54",road:"#b8c2d0",rock:"#b0bccc",rockDk:"#94a2b6",water:"#2f68b0",bank:"#d6e0ea",fence:"#7a6a5a"}];Xa=["#ff8a3c","#4aa8ff","#ff5a78","#9a6aff","#ffd23c"];is={e:new Map,b:new Map,w:new Map,i:new Map,p:new Map,h:new Map};Ya=i=>Math.PI/2-i,Lx=(i,e)=>{for(let t of i.mats)t.emissive.setHex(e?7829367:0)}});function eo(){if(Ve){Ve.state==="suspended"&&Ve.resume();return}try{Ve=new(window.AudioContext||window.webkitAudioContext),ci=Ve.createGain(),ci.gain.value=Tr?0:.35,ci.connect(Ve.destination),Dn=Ve.createGain(),Dn.gain.value=.55,Dn.connect(ci),Ai=Ve.currentTime+.1,Qa=Ve.createBuffer(1,Ve.sampleRate*.6,Ve.sampleRate);let i=Qa.getChannelData(0);for(let e=0;e<i.length;e++)i[e]=Math.random()*2-1}catch{Ve=null}}function mc(i){Tr=i,ci&&(ci.gain.value=i?0:.35)}function Er(){return Tr}function an(i,e,t,n,s=.3,r=0){let a=Ve.currentTime+r,o=Ve.createOscillator(),l=Ve.createGain();o.type=i,o.frequency.setValueAtTime(e,a),o.frequency.exponentialRampToValueAtTime(Math.max(20,t),a+n),l.gain.setValueAtTime(s,a),l.gain.exponentialRampToValueAtTime(.001,a+n),o.connect(l),l.connect(ci),o.start(a),o.stop(a+n+.02)}function dc(i,e=.4,t=1200){let n=Ve.currentTime,s=Ve.createBufferSource();s.buffer=Qa;let r=Ve.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(t,n),r.frequency.exponentialRampToValueAtTime(80,n+i);let a=Ve.createGain();a.gain.setValueAtTime(e,n),a.gain.exponentialRampToValueAtTime(.001,n+i),s.connect(r),r.connect(a),a.connect(ci),s.start(n),s.stop(n+i)}function Ft(i){if(!(!Ve||Tr))switch(i){case"mg":an("square",900,300,.035,.035);break;case"laser":an("sawtooth",1800,600,.08,.05);break;case"launch":an("sawtooth",300,900,.12,.08);break;case"pop":dc(.15,.25,2200);break;case"boom":dc(.5,.6,900),an("sine",120,40,.4,.4);break;case"squish":an("square",200,60,.08,.15);break;case"pickup":an("square",660,990,.07,.15),an("square",990,1320,.07,.15,.07);break;case"deliver":[523,659,784,1046].forEach((e,t)=>an("square",e,e,.1,.14,t*.09));break;case"upgrade":[392,523,659,784,1046].forEach((e,t)=>an("triangle",e,e*1.01,.09,.22,t*.06));break;case"die":an("sawtooth",600,50,.6,.25),dc(.5,.5,1500);break;case"start":[392,392,523].forEach((e,t)=>an("square",e,e,.12,.15,t*.14));break;case"win":[523,659,784,659,784,1046].forEach((e,t)=>an("square",e,e,.14,.15,t*.13));break;case"lose":[392,330,262,196].forEach((e,t)=>an("triangle",e,e,.22,.2,t*.2));break}}function ru(i,e,t,n,s){let r=Ve.createOscillator(),a=Ve.createGain();r.type=i,r.frequency.setValueAtTime(e,t),a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(s,t+.008),a.gain.setValueAtTime(s,t+n*.6),a.gain.exponentialRampToValueAtTime(1e-4,t+n),r.connect(a),a.connect(Dn),r.start(t),r.stop(t+n+.02)}function kx(i,e){if(i==="k"){let a=Ve.createOscillator(),o=Ve.createGain();a.type="sine",a.frequency.setValueAtTime(150,e),a.frequency.exponentialRampToValueAtTime(45,e+.12),o.gain.setValueAtTime(.5,e),o.gain.exponentialRampToValueAtTime(.001,e+.14),a.connect(o),o.connect(Dn),a.start(e),a.stop(e+.15);return}let t=Ve.createBufferSource();t.buffer=Qa;let n=Ve.createBiquadFilter();n.type="highpass",n.frequency.value=i==="s"?1200:6e3;let s=Ve.createGain(),r=i==="s"?.12:.03;s.gain.setValueAtTime(i==="s"?.28:.08,e),s.gain.exponentialRampToValueAtTime(.001,e+r),t.connect(n),n.connect(s),s.connect(Dn),t.start(e,Math.random()*.3),t.stop(e+r+.01)}function Nx(){if(!Ve||!Dn)return;if(!Ei||Tr){Ai=Ve.currentTime+.05;return}Ai<Ve.currentTime-.3&&(Ai=Ve.currentTime+.03);let i=60/Ei.bpm/2;for(;Ai<Ve.currentTime+.15;){let e=pc%32,t=Ai;Ei.lead[e]&&ru("square",su(Ei.lead[e]),t,i*.9,.055),Ei.bass[e]&&ru("triangle",su(Ei.bass[e]),t,i*.85,.16);let n=Ei.drums[e%8];n!=="."&&kx(n,t),pc++,Ai+=i}}function au(i){i!==nu&&(nu=i,Ei=Dx[i]||null,pc=0,Ve&&!Dn&&(Dn=Ve.createGain(),Dn.gain.value=.55,Dn.connect(ci)),Ve&&(Ai=Ve.currentTime+.08),iu||(iu=setInterval(Nx,25)))}var Ve,ci,Tr,Qa,ja,Dx,Dn,Ei,nu,pc,Ai,iu,su,ou=qt(()=>{Ve=null,ci=null,Tr=!1,Qa=null;ja=i=>i.flatMap(e=>[e,e+12,e,e+12,e,e+12,e+7,e+12]),Dx={stage0:{bpm:132,drums:"khshkhsh",bass:ja([45,40,41,43]),lead:[69,0,72,76,74,0,72,71,69,0,64,69,72,0,71,0,65,0,69,72,76,0,74,72,71,0,67,71,76,0,0,0]},stage1:{bpm:140,drums:"kh.hsh.h",bass:ja([38,38,34,33]),lead:[62,0,65,0,64,0,65,0,69,70,69,65,64,0,0,0,62,0,65,67,69,0,70,73,74,73,70,69,65,64,62,0]},stage2:{bpm:152,drums:"khshkksh",bass:ja([40,36,38,35]),lead:[64,67,71,67,76,0,74,71,72,71,69,67,66,0,62,0,64,67,71,74,76,79,78,76,74,72,71,69,71,0,0,0]},boss:{bpm:168,drums:"kkshkksh",bass:ja([36,36,32,31]),lead:[60,63,67,63,60,63,68,63,60,63,67,63,59,62,67,62,60,63,67,72,70,67,68,67,65,63,62,63,59,0,59,0]}},Dn=null,Ei=null,nu="",pc=0,Ai=0,iu=null,su=i=>440*Math.pow(2,(i-69)/12)});var r1={};function so(){hi=Lr()?Math.max(1,Math.min(Ci==="3d"?2.5:4,Math.round(re.s*re.dpr))):1,(Wn.width!==360*hi||Wn.height!==240*hi)&&(Wn.width=360*hi,Wn.height=240*hi),Vo(hi),fc(hi)}function uu(i){i==="3d"&&!Qf()&&(cs("M\xE1y kh\xF4ng h\u1ED7 tr\u1EE3 WebGL \u2014 d\xF9ng theme SNES"),i="snes"),Ci=i,ct=Lr()?Wo:Gr,Lr()&&Bo(i==="3d"?"pastel":i),Jt.set("rj_skin",i),Co(),Ho(),so();for(let e of document.querySelectorAll("[data-skin]"))e.setAttribute("aria-pressed",e.dataset.skin===i?"true":"false")}function zx(){let i=nt.getImageData(0,0,Wn.width,Wn.height),e=new Uint32Array(i.data.buffer);for(let t=0;t<e.length;t++){let n=e[t];e[t]=du[(n&240)<<4|n>>8&240|n>>20&15]}nt.putImageData(i,0,0)}function Mc(){re.dpr=Math.min(window.devicePixelRatio||1,3),re.W=window.innerWidth,re.H=window.innerHeight,Gn.width=Math.round(re.W*re.dpr),Gn.height=Math.round(re.H*re.dpr),re.s=Math.min(re.W/360,re.H/240),re.gw=360*re.s,re.gh=240*re.s,re.ox=(re.W-re.gw)/2,re.oy=(re.H-re.gh)/2;let i=re.H>re.W*1.05;document.body.classList.toggle("portrait",i),window.RJ_PAUSED=i&&kt==="play"}function pu(i,e,t){if(e>=re.W/2){fs.id=i,fs.x=e,fs.y=t,no=!0;return}Qe.active||(Qe.active=!0,Qe.id=i,Qe.ox=e,Qe.oy=t,Qe.x=e,Qe.y=t)}function mu(i,e,t){if(!Qe.active||Qe.id!==i)return;Qe.x=e,Qe.y=t;let n=e-Qe.ox,s=t-Qe.oy,r=Math.hypot(n,s);r>ui&&(Qe.ox=e-n/r*ui,Qe.oy=t-s/r*ui)}function wc(i){Qe.id===i&&(Qe.active=!1,Qe.id=null),fs.id===i&&(fs.id=null)}function Ux(){let i=0,e=0;if((Xt.has("arrowleft")||Xt.has("a"))&&(i-=1),(Xt.has("arrowright")||Xt.has("d"))&&(i+=1),(Xt.has("arrowup")||Xt.has("w"))&&(e-=1),(Xt.has("arrowdown")||Xt.has("s"))&&(e+=1),i||e){let t=Math.hypot(i,e);return[i/t,e/t]}if(Qe.active){let t=(Qe.x-Qe.ox)/ui,n=(Qe.y-Qe.oy)/ui,s=Math.hypot(t,n);if(s<.15)return[0,0];let r=Math.min(1,(s-.15)/.55)/s;return[t*r,n*r]}return[0,0]}function cs(i,e=2200){let t=ke("toast");t.textContent=i,t.classList.add("on"),clearTimeout(cu),cu=setTimeout(()=>t.classList.remove("on"),e)}function js(i){for(let e of["menu","wait","end"])ke(e).classList.toggle("on",e===i)}function yu(i){us=i,Jt.set("rj_aim_mode",String(i));for(let e of document.querySelectorAll("[data-aim]"))e.setAttribute("aria-pressed",+e.dataset.aim===i?"true":"false");ke("aimHint")&&(ke("aimHint").textContent=Bx[i])}function _u(i){Uc(i),ct.resetTerrain(),Sc=i}function Gx(){let i=new URLSearchParams(location.search).get("server");return i||(location.protocol==="https:"?"wss://":"ws://")+location.host+"/ws"}function ds(i){Yt&&Yt.readyState===1&&Yt.send(JSON.stringify(i))}function ro(){if(Yt){Yt.onclose=null;try{Yt.close()}catch{}Yt=null}}async function Tc(i={}){let e=(ke("name").value||"").trim()||"Player";Jt.set("rj_name",e),ke("err").textContent="",ro(),kt="connecting";let t=!i.noTut&&(ke("tut")?ke("tut").checked:!1);io=t&&!window.RJ_LOCAL,io?Yt=(await Promise.resolve().then(()=>(So(),qc))).makeLocal():(js("wait"),vu(Math.ceil(po/1e3)),Yt=window.RJ_LOCAL?window.RJ_LOCAL():new WebSocket(Gx())),Yt.onopen=()=>ds({t:"join",name:e,tut:t,aim:us}),Yt.onmessage=n=>qx(JSON.parse(n.data)),Yt.onerror=()=>{},Yt.onclose=()=>{Yt=null,(kt==="play"||kt==="connecting"||kt==="wait")&&(kt="menu",js("menu"),ke("err").textContent="M\u1EA5t k\u1EBFt n\u1ED1i t\u1EDBi server. Th\u1EED l\u1EA1i nh\xE9.")}}function vu(i){ke("count").textContent=i,ke("countbar").style.width=i/(po/1e3)*100+"%"}function qx(i){switch(i.t){case"wait":kt="wait",vu(i.left);break;case"s":Xx(i);break;case"start":{et=i.you,di=i.players,kn=[],ze=null,Ri=null,to=0,Hn=[],it=null,on={x:0,y:0},Pr=[],hs={},Ar=new Set,ct.clearParticles(),kt="play",js(null);let e=di[1-et];Vn=null,_u(i.stage||0),i.stage&&cs(e.bot?"\u0110\u1ED3ng \u0111\u1ED9i: BOT":`\u0110\u1ED3ng \u0111\u1ED9i: ${e.name}`),Ft("start");break}case"end":Jx(i);break}}function bu(i){let e=xe.blockers.slice();for(let t of i.e){let n=nr(t[1],t[2],t[3]);n&&e.push(n)}return e}function Xx(i){let e=performance.now();i.st=i.k/30*1e3;let t=e-i.st;Ri===null||t<Ri?Ri=t:Ri+=(t-Ri)*.02,kn.push(i),kn.length>40&&kn.shift(),ze=i,i.sg!==Sc&&(_u(i.sg),it=null,Hn=[]);for(let l of i.ev)Pr.push({st:i.st,e:l});let n=i.p[et];if(!n[3]){it={x:n[0],y:n[1],a:n[2]},Hn=[],xc=!1;return}if(!it||!xc){it={x:n[0],y:n[1],a:n[2]},Hn=[],on={x:0,y:0},xc=!0;return}Hn=Hn.filter(l=>l.seq>i.ack[et]);let s={x:n[0],y:n[1],a:it.a},r=bu(i);for(let l of Hn)Fi(s,l.dx,l.dy,i.cam,r);let a=it.x-s.x,o=it.y-s.y;Math.hypot(a,o)>28?on={x:0,y:0}:(on.x+=a,on.y+=o),it=s;for(let l of i.b)Ar.has(l[0])||(Ar.add(l[0]),(l[1]===Se.mg||l[1]===Se.big||l[1]===Se.missile||l[1]===Se.laser)&&Math.hypot(l[2]-n[0],l[3]-n[1])<24&&e-hu>140&&(Ft(l[1]===Se.missile?"launch":l[1]===Se.laser?"laser":"mg"),hu=e));Ar.size>3e3&&(Ar=new Set(i.b.map(l=>l[0])))}function Yx(){let[i,e]=tr(...Ux());to++,ds({t:"i",s:to,x:i,y:e,f:gu()||no?1:0}),no=!1,it&&ze&&ze.p[et][3]&&!ze.ph&&(Hn.push({seq:to,dx:i,dy:e}),Hn.length>90&&Hn.shift(),Fi(it,i,e,ze.cam,bu(ze)))}function Jx(i){kt="end",ro();let e=ke("endTitle");e.innerHTML=i.win?"MISSION<br>COMPLETE":"GAME<br>OVER",e.className="title "+(i.win?"win":"lose");let t=`${Math.floor(i.time/60)}:${String(i.time%60).padStart(2,"0")}`;ke("endSub").textContent=i.win?`Ho\xE0n th\xE0nh ${i.stages} m\xE0n \xB7 ${t}`:`M\xE0n ${i.stage}/${i.stages} \xB7 Ti\u1EBFn \u0111\u1ED9 ${i.progress}% \xB7 ${t}`,ke("endRows").innerHTML=i.players.map((n,s)=>`<tr><td style="color:var(--p${s+1})">${$x(n.name)}${n.bot&&!/bot/i.test(n.name)?" (bot)":""}${s===et?" \u2605":""}</td><td>${n.rescued}</td><td>${n.kills}</td><td>${n.score}</td></tr>`).join(""),Ft(i.win?"win":"lose"),setTimeout(()=>js("end"),600)}function Zx(i){let e=i[0];if(e==="x")ct.spawnExplosion(i[1],i[2],i[3]),Ft(i[3]>=1?"boom":"pop"),i[3]>=1&&(fi=Math.max(fi,i[3]*3));else if(e==="h")ct.spawnSpark(i[1],i[2]);else if(e==="s")ct.spawnSplat(i[1],i[2]),Ft("squish");else if(e==="d"){hs[i[1]]=2.4;let t=xe.helipads[i[1]];ct.spawnText(t.x,t.y-26,`+${i[2]*100}`,i[3]===0?"#e6f07a":"#8fc4ff"),Ft("deliver"),i[3]===et&&cs(`\u0110\xE3 c\u1EE9u ${i[2]} t\xF9 binh!`)}else if(e==="p")i[1]===et&&Ft("pickup");else if(e==="u"){let t=ze&&ze.p[i[1]];t&&ct.spawnText(t[0],t[1]-16,`WEAPON ${i[2]}`,"#ffe14a"),i[1]===et&&Ft("upgrade")}else if(e==="k"){if(i[1]===et){Ft("die"),fi=6;try{navigator.vibrate&&navigator.vibrate(120)}catch{}}}else if(e==="g"){if(Vn=i[1]===0?{text:"T\u1EACP L\xC1I",sub:"M\xE0n h\u01B0\u1EDBng d\u1EABn",t:performance.now()}:{text:`STAGE ${i[1]}`,sub:Or[i[1]].name+(i[1]>1?" \xB7 +1 m\u1EA1ng":""),t:performance.now()},i[1]===1&&Sc===1&&ke("tut")&&ke("tut").checked&&(Jt.set("rj_tut_done","1"),ke("tut").checked=!1),i[1]===1&&io){io=!1,Jt.set("rj_tut_done","1"),ke("tut")&&(ke("tut").checked=!1),setTimeout(()=>Tc({noTut:!0}),0);return}Ft("start")}else if(e==="c")Vn={text:"CLEAR!",sub:`Th\u01B0\u1EDFng +${i[2]} \u0111i\u1EC3m`,t:performance.now(),dur:3.8},Ft("win");else if(e==="i"){let t=ze&&ze.p[i[1]];t&&ct.spawnText(t[0],t[1]-18,Wx[i[2]]||"","#f8e060"),i[1]===et&&Ft(i[2]===gt.bomb?"boom":"upgrade")}else if(e==="L")i[1]!==et&&Ft("pickup");else if(e==="A"){let t=i[1]===et,n=di[t?i[2]:i[1]]?.name||"\u0110\u1ED3ng \u0111\u1ED9i";i[3]===1?(cs(t?`${n} \u0111\xE3 cho b\u1EA1n 1 m\u1EA1ng!`:`B\u1EA1n \u0111\xE3 cho ${n} 1 m\u1EA1ng`),Ft("upgrade")):i[3]===2?t&&cs("\u0110\u1ED3ng \u0111\u1ED9i kh\xF4ng c\xF2n m\u1EA1ng d\u01B0 \u0111\u1EC3 cho"):cs(t?`${n} kh\xF4ng cho m\u1EA1ng`:"\u0110\xE3 t\u1EEB ch\u1ED1i")}else e==="T"?Ft("pickup"):e==="B"?(ls=.35,fi=8):e==="b"&&(di[i[1]]&&(di[i[1]].bot=!0),i[1]!==et&&cs("\u0110\u1ED3ng \u0111\u1ED9i r\u1EDDi tr\u1EADn \u2014 BOT l\xE1i thay",3e3))}function Mu(i,e,t){let n=(e-i+Math.PI*3)%(Math.PI*2)-Math.PI;return i+n*t}function _c(i,e,t,n,s,r){if(!i)return e;let a=new Map(i.map(o=>[o[0],o]));return e.map(o=>{let l=a.get(o[0]);if(!l)return o;let c=o.slice();return c[n]=l[n]+(o[n]-l[n])*t,c[s]=l[s]+(o[s]-l[s])*t,r!==void 0&&(c[r]=Mu(l[r],o[r],t)),c})}function Kx(i){let e=i-Ri-Fx,t=kn[0],n=kn[kn.length-1];for(let a=kn.length-1;a>0;a--)if(kn[a-1].st<=e){t=kn[a-1],n=kn[a];break}let s=n.st===t.st?1:Math.max(0,Math.min(1,(e-t.st)/(n.st-t.st))),r=n.p.map((a,o)=>{let l=t.p[o],c=a.slice();return l[3]&&a[3]&&(c[0]=l[0]+(a[0]-l[0])*s,c[1]=l[1]+(a[1]-l[1])*s,c[2]=Mu(l[2],a[2],s)),c});return{rt:e,cam:t.cam+(n.cam-t.cam)*s,players:r,e:_c(t.e,n.e,s,2,3,4),b:_c(t.b,n.b,s,2,3),w:_c(t.w,n.w,s,1,2),i:n.i||[]}}function jx(i,e){if(nt.setTransform(hi,0,0,hi,0,0),nt.imageSmoothingEnabled=Lr(),nt.fillStyle="#14160f",nt.fillRect(0,0,360,240),kt!=="play"||!ze||Ri===null){if(as-=e*14,as<600&&(as=je-240),Ci==="3d"){let s=uc({cam:as,now:i});s&&nt.drawImage(s,0,0,360,240)}else ct.drawTerrain(nt,as),ct.drawHelis(nt,as,i,{});return ct.drawParticles(nt,as,e),null}let t=Kx(i);for(;Pr.length&&Pr[0].st<=t.rt;)Zx(Pr.shift().e);for(let s in hs)hs[s]=Math.max(0,hs[s]-e);let n=t.cam;if(Ci==="3d"){let s=t.players.map((a,o)=>{let l=a.slice();return l.slot=o,l.x=a[0],l.y=a[1],l.a=a[2],o===et&&it&&(l.x=it.x+on.x,l.y=it.y+on.y,l.a=it.a),l});on.x*=.82,on.y*=.82;let r=uc({cam:n,now:i,padAnim:hs,S:{e:t.e,b:t.b,w:t.w,i:t.i,players:s}});r&&nt.drawImage(r,0,0,360,240);for(let a of t.e)ct.drawHpBar(nt,a,n);return eu(nt,{players:s},n,et),ct.drawParticles(nt,n,e),ls>0&&(nt.fillStyle=`rgba(255,255,255,${Math.min(1,ls*2.5)})`,nt.fillRect(0,0,360,240),ls-=e),t}ct.drawTerrain(nt,n);for(let s of t.e)(s[1]===q.prison||s[1]===q.boss)&&ct.drawEnemy(nt,s,n,i);ct.drawHelis(nt,n,i,hs);for(let s of t.w)ct.drawPow(nt,s,n,i);for(let s of t.i)ct.drawItem(nt,s,n,i);for(let s of t.e)s[1]!==q.prison&&s[1]!==q.boss&&ct.drawEnemy(nt,s,n,i);for(let s of t.e)ct.drawHpBar(nt,s,n);t.players.forEach((s,r)=>{if(!s[3])return;let a=s[0],o=s[1],l=s[2];r===et&&it&&(a=it.x+on.x,o=it.y+on.y,l=it.a),ct.drawJeep(nt,r,a,o,l,n,{invuln:s[4],carry:s[7],self:r===et,shield:s[11]})}),on.x*=.82,on.y*=.82;for(let s of t.b)ct.drawBullet(nt,s,n);return ct.drawParticles(nt,n,e),ls>0&&(nt.fillStyle=`rgba(255,255,255,${Math.min(1,ls*2.5)})`,nt.fillRect(0,0,360,240),ls-=e),t}function Qx(i,e){let t=re.dpr,n=_n,s=re.ox*t,r=re.oy*t,a=re.gw*t,o=re.gh*t,l=Math.max(1,re.s*t);n.save(),n.fillStyle="rgba(10,12,8,0.62)",n.fillRect(s,r,a,22*l);let c=ze.p;c.forEach((m,p)=>{let v=p===0,M=v?s+5*l:s+a-5*l;n.textAlign=v?"left":"right",n.font=`${Math.round(5*l)}px ${os}`,n.fillStyle=p===0?"#c9d65a":"#6fb0ff";let g=(di[p]?.name||`P${p+1}`).slice(0,10)+(di[p]?.bot&&!/bot/i.test(di[p].name)?"\xB7BOT":"")+(p===et?" \u2605":"");n.fillText(g,M,r+8*l),n.fillStyle="#f2efd8",n.fillText(String(m[8]).padStart(6,"0"),M,r+16*l);let x=v?M+44*l:M-44*l;for(let b=0;b<3;b++)n.fillStyle=b<m[5]?p===0?"#c9d65a":"#6fb0ff":"rgba(255,255,255,0.15)",n.fillRect(x+(v?b:-b-1)*5*l,r+11*l,4*l,5*l);n.fillStyle="#ffd84a",n.textAlign=v?"left":"right",n.font=`${Math.round(4*l)}px ${os}`,n.fillText("W"+m[6],v?x+17*l:x-17*l,r+16*l),!m[3]&&m[5]<=0&&(n.fillStyle="#ff5a4a",n.fillText("OUT",v?x+30*l:x-30*l,r+16*l))});let h=1-i.cam/(je-240);n.fillStyle="rgba(255,255,255,0.15)",n.fillRect(s+a/2-18*l,r+9*l,36*l,3*l),n.fillStyle="#ffd84a",n.fillRect(s+a/2-18*l,r+9*l,36*l*h,3*l),n.font=`${Math.round(4*l)}px ${os}`,n.textAlign="center",n.fillStyle="#a7a58c",n.fillText(ze.sg===0?"T\u1EACP L\xC1I":`S${ze.sg} `+(i.cam<30?"BOSS":`${Math.round(h*100)}%`),s+a/2,r+19*l);let u=i.e.find(m=>m[1]===q.boss||m[1]===q.boss2);if(u){let m=a-40*l,p=s+20*l,v=r+24*l;n.fillStyle="#1c140c",n.fillRect(p-l,v-l,m+2*l,6*l),n.fillStyle="#3c3830",n.fillRect(p,v,m,4*l),n.fillStyle=u[7]?"#78c0ff":"#f84838",n.fillRect(p,v,m*u[5],4*l),n.fillStyle="rgba(255,255,255,0.35)",n.fillRect(p,v,m*u[5],l),n.font=`800 ${Math.round(5*l)}px 'Be Vietnam Pro', sans-serif`,n.textAlign="center",n.fillStyle="#f2efd8",n.fillText(u[7]?"PH\xC1 TH\xC1P PH\xC1O \u0110\u1EC2 T\u1EAET KHI\xCAN":"BOSS",s+a/2,v+10*l)}let f=c[et],d=s+4*l;for(let[m,p]of[[10,gt.rapid],[11,gt.shield]]){if(!f[m])continue;let v=ct.itemIcon(p);n.drawImage(v,d,r+(u?38:24)*l,11*l,11*l),n.font=`${Math.round(4*l)}px ${os}`,n.textAlign="left",n.fillStyle="#000";let M=m===10?`x${f[m]}`:f[m];n.fillText(M,d+11*l+l*.5,r+(u?46:32)*l+l*.5),n.fillStyle="#f2efd8",n.fillText(M,d+11*l,r+(u?46:32)*l),d+=24*l}n.textAlign="center";{let m=c[et][12]||0,p=s+a-4*l,v=r+(u?38:24)*l;n.textAlign="right",n.font=`800 ${Math.round(5*l)}px 'Be Vietnam Pro', sans-serif`,n.fillStyle="#1c140c",n.fillText(`C\u1EE9u ${m}/${Jn} \u2192 \u0111\u1EA1n+`,p+l*.6,v+5*l+l*.6),n.fillStyle="#f8e060",n.fillText(`C\u1EE9u ${m}/${Jn} \u2192 \u0111\u1EA1n+`,p,v+5*l);for(let M=0;M<Jn;M++)n.fillStyle="#1c140c",n.fillRect(p-(Jn-M)*5*l,v+7*l,4*l,3*l),n.fillStyle=M<m?"#f8e060":"rgba(255,255,255,0.25)",n.fillRect(p-(Jn-M)*5*l+l*.5,v+7.5*l,3*l,2*l);n.textAlign="center"}let y=c[et];if(y[7]>0&&(n.fillStyle="rgba(10,12,8,0.62)",n.fillRect(s+a/2-30*l,r+o-14*l,60*l,11*l),n.fillStyle=y[7]>=ki?"#ff9a2a":"#f2efd8",n.font=`${Math.round(4.5*l)}px ${os}`,n.fillText(`POW ${y[7]}/${ki}`,s+a/2,r+o-6.5*l)),y[3]||(n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(s,r+o/2-14*l,a,24*l),n.fillStyle=y[5]>0?"#f2efd8":"#ff5a4a",n.font=y[5]>0?`${Math.round(6*l)}px ${os}`:`800 ${Math.round(8*l)}px 'Be Vietnam Pro', sans-serif`,n.fillText(y[5]>0?"RESPAWN\u2026":"H\u1EBET M\u1EA0NG",s+a/2,r+o/2+2*l)),Vn){let m=(e-Vn.t)/1e3,p=Vn.dur||2.2;m>p?Vn=null:(n.globalAlpha=Math.min(1,(p-m)*2),n.font=`${Math.round(14*l)}px ${os}`,n.fillStyle="#7a3a10",n.fillText(Vn.text,s+a/2+2*l,r+o*.42+2*l),n.fillStyle="#ffd84a",n.fillText(Vn.text,s+a/2,r+o*.42),n.font=`700 ${Math.round(6*l)}px 'Be Vietnam Pro', sans-serif`,n.fillStyle="#f2efd8",n.fillText(Vn.sub,s+a/2,r+o*.42+14*l),n.globalAlpha=1)}n.restore()}function e1(i){let e=re.dpr,t=_n,n=Math.max(60,Math.min(90,re.ox*.5+30));t.save();let s=n,r=re.H-n-6,a=s,o=r,l=.3;Qe.active&&(s=Qe.ox,r=Qe.oy,a=Qe.x,o=Qe.y,l=.85);let c=a-s,h=o-r,u=Math.hypot(c,h);u>ui&&(a=s+c/u*ui,o=r+h/u*ui),t.globalAlpha=l,t.strokeStyle="#f2efd8",t.lineWidth=2*e,t.beginPath(),t.arc(s*e,r*e,ui*e,0,7),t.stroke(),t.fillStyle="rgba(255,216,74,0.85)",t.beginPath(),t.arc(a*e,o*e,18*e,0,7),t.fill();let f=re.W-n,d=re.H-n-6,y=gu();t.globalAlpha=y?.95:.45,t.fillStyle=y?"rgba(255,90,60,0.9)":"rgba(255,90,60,0.35)",t.beginPath(),t.arc(f*e,d*e,38*e,0,7),t.fill(),t.strokeStyle="#ffe0d0",t.lineWidth=2.5*e,t.stroke(),t.fillStyle="#ffffff",t.font=`800 ${15*e}px 'Be Vietnam Pro', sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText("B\u1EAEN",f*e,d*e),t.restore()}function t1(i,e){return i===0?["B\xC0I 1/3 \xB7 L\xC1I XE","K\xE9o ng\xF3n tay \u1EDF N\u1EECA TR\xC1I m\xE0n h\xECnh \u0111\u1EC3 l\xE1i",`Ch\u1EA1y t\u1EDBi v\xF2ng s\xE1ng (${e+1}/3)`]:i===1?Vx()?us===1?["B\xC0I 2/3 \xB7 B\u1EAEN","H\u1ED6 TR\u1EE2 NG\u1EAEM: xe t\u1EF1 b\u1EAFn m\u1EE5c ti\xEAu TR\u01AF\u1EDAC \u0110\u1EA6U XE",`Quay \u0111\u1EA7u xe v\u1EC1 ph\xEDa m\u1EE5c ti\xEAu v\xE0 l\u1EA1i g\u1EA7n (${e+1}/3)`]:["B\xC0I 2/3 \xB7 B\u1EAEN","T\u1EF0 NG\u1EAEM: xe t\u1EF1 b\u1EAFn m\u1EE5c ti\xEAu g\u1EA7n nh\u1EA5t",`L\xE1i l\u1EA1i g\u1EA7n m\u1EE5c ti\xEAu. Gi\u1EEF N\u1EECA PH\u1EA2I \u0111\u1EC3 b\u1EAFn th\u1EB3ng \u0111\u1EA7u xe (${e+1}/3)`]:["B\xC0I 2/3 \xB7 B\u1EAEN","\u0110\u1EA1n bay TH\u1EB2NG THEO H\u01AF\u1EDANG \u0110\u1EA6U XE",`Quay \u0111\u1EA7u xe v\u1EC1 m\u1EE5c ti\xEAu, r\u1ED3i gi\u1EEF N\u1EECA PH\u1EA2I \u0111\u1EC3 b\u1EAFn (${e+1}/3)`]:i===2?["B\xC0I 3/3 \xB7 C\u1EE8U T\xD9 BINH",["B\u1EAFn s\u1EADp tr\u1EA1i giam","L\xE1i xe ch\u1EA1m v\xE0o t\xF9 binh \u0111\u1EC3 \u0111\xF3n","Ch\u1EDF t\xF9 binh v\u1EC1 b\xE3i tr\u1EF1c th\u0103ng (ch\u1EEF H)"][e]||"","C\u1EE9u \u0111\u1EE7 5 ng\u01B0\u1EDDi = +1 c\u1EA5p \u0111\u1EA1n"]:["HO\xC0N TH\xC0NH!","B\u1EA1n \u0111\xE3 s\u1EB5n s\xE0ng","V\xE0o tr\u1EADn th\u1EADt\u2026"]}function n1(){if(us!==1||!it||!ze||ze.ph)return;let i=ze.p[et];if(!i||!i[3])return;let e=re.dpr,t=_n,n=re.s,s=ze.cam,r=(re.ox+it.x*n)*e,a=(re.oy+(it.y-s)*n)*e,o=Nr*n*e,l=it.a;t.save(),t.beginPath(),t.rect(re.ox*e,re.oy*e,re.gw*e,re.gh*e),t.clip();let c=t.createRadialGradient(r,a,10*n*e,r,a,o);c.addColorStop(0,"rgba(255,240,150,0.16)"),c.addColorStop(1,"rgba(255,240,150,0)"),t.fillStyle=c,t.beginPath(),t.moveTo(r,a),t.arc(r,a,o,l-Ni,l+Ni),t.closePath(),t.fill(),t.strokeStyle="rgba(255,240,150,0.28)",t.lineWidth=1.5*e,t.setLineDash([5*e,6*e]);for(let h of[-1,1])t.beginPath(),t.moveTo(r,a),t.lineTo(r+Math.cos(l+h*Ni)*o,a+Math.sin(l+h*Ni)*o),t.stroke();t.restore()}function i1(i){if(!ze||!ze.tu||ze.ph)return;let[e,t,n,s]=ze.tu,r=re.dpr,a=_n,o=re.s,l=ze.cam,c=(v,M)=>[(re.ox+v*o)*r,(re.oy+(M-l)*o)*r],h=(Math.sin(i/220)+1)/2;if(a.save(),e===0&&(a.fillStyle=`rgba(255,216,74,${.08+.08*h})`,a.fillRect(0,0,re.W/2*r,re.H*r)),e===1&&(a.fillStyle=`rgba(255,90,60,${.08+.08*h})`,a.fillRect(re.W/2*r,0,re.W/2*r,re.H*r)),n>=0){let[v,M]=c(n,s),g=(16+h*4)*o*r;a.strokeStyle=e===1?"#ff6a4a":"#ffd84a",a.lineWidth=3*r,a.beginPath(),a.arc(v,M,g,0,7),a.stroke();let x=M-g-(8+h*8)*r;a.fillStyle=a.strokeStyle,a.beginPath(),a.moveTo(v,x+10*r),a.lineTo(v-9*r,x-4*r),a.lineTo(v+9*r,x-4*r),a.closePath(),a.fill()}if(e===1&&it&&us===0){let v=it.a,[M,g]=c(it.x+Math.cos(v)*14,it.y+Math.sin(v)*14),x=120*o*r;a.setLineDash([7*r,6*r]),a.strokeStyle="rgba(255,240,150,0.9)",a.lineWidth=2.5*r,a.beginPath(),a.moveTo(M,g),a.lineTo(M+Math.cos(v)*x,g+Math.sin(v)*x),a.stroke(),a.setLineDash([]),a.fillStyle="rgba(255,240,150,0.95)",a.font=`800 ${11*r}px 'Be Vietnam Pro', sans-serif`,a.textAlign="center",a.fillText("H\u01AF\u1EDANG B\u1EAEN",M+Math.cos(v)*(x+22*r),g+Math.sin(v)*(x+22*r))}let[u,f,d]=t1(e,t),y=Math.min(re.gw-16,500),m=re.W/2,p=re.oy+22*o+6;a.fillStyle="rgba(16,18,12,0.86)",a.beginPath(),a.roundRect?a.roundRect((m-y/2)*r,p*r,y*r,58*r,8*r):a.rect((m-y/2)*r,p*r,y*r,58*r),a.fill(),a.textAlign="center",a.textBaseline="middle",a.fillStyle="#a7a58c",a.font=`800 ${10*r}px 'Be Vietnam Pro', sans-serif`,a.fillText(u,m*r,(p+11)*r),a.fillStyle="#ffd84a",a.font=`800 ${15*r}px 'Be Vietnam Pro', sans-serif`,a.fillText(f,m*r,(p+28)*r,(y-16)*r),a.fillStyle="#f2efd8",a.font=`500 ${11.5*r}px 'Be Vietnam Pro', sans-serif`,a.fillText(d,m*r,(p+46)*r,(y-16)*r),a.restore()}function s1(){let i=ke("askLife"),e=ke("lifePrompt");if(kt!=="play"||!ze||ze.ph||ze.tu){i.hidden=!0,e.hidden=!0;return}let t=ze.p[et],n=ze.p[1-et],s=ze.lr,r=t&&!t[3]&&t[5]<=0;i.hidden=!r,r&&(s&&s[0]===et?(i.disabled=!0,i.textContent=`\u0110ang ch\u1EDD \u0111\u1ED3ng \u0111\u1ED9i \u0111\u1ED3ng \xFD\u2026 ${s[2]}s`):!n||n[5]<2?(i.disabled=!0,i.textContent="\u0110\u1ED3ng \u0111\u1ED9i kh\xF4ng c\xF2n m\u1EA1ng d\u01B0"):(i.disabled=!1,i.textContent="XIN 1 M\u1EA0NG T\u1EEA \u0110\u1ED2NG \u0110\u1ED8I"));let a=s&&s[1]===et;a&&e.hidden&&Ft("pickup"),e.hidden=!a,a&&(ke("lifeTxt").textContent=`${di[s[0]]?.name||"\u0110\u1ED3ng \u0111\u1ED9i"} h\u1EBFt m\u1EA1ng, xin 1 m\u1EA1ng c\u1EE7a b\u1EA1n`,ke("lifeSub").textContent=`B\u1EA1n c\xF2n ${n?ze.p[et][5]:0} m\u1EA1ng \xB7 t\u1EF1 t\u1EEB ch\u1ED1i sau ${s[2]}s`)}function wu(i){let e=Math.min(.1,(i-fu)/1e3);if(fu=i,kt==="play"){Ks+=e*1e3;let a=0;for(;Ks>=gc&&a++<5;)Ks-=gc,Yx();Ks>gc*5&&(Ks=0)}else Ks=0;let t="";kt==="play"&&ze&&!ze.ph&&(t=ze.e.some(a=>a[1]===q.boss||a[1]===q.boss2)?"boss":"stage"+Math.max(0,(ze.sg||0)-1)),au(t),window.RJ_PAUSED=document.body.classList.contains("portrait")&&kt==="play";let n=jx(i,e);Ci==="nes"&&zx(),ke("skip").hidden=!(kt==="play"&&ze&&ze.tu&&!ze.ph),s1(),_n.setTransform(1,0,0,1,0,0),_n.fillStyle="#0d0e0a",_n.fillRect(0,0,Gn.width,Gn.height),_n.imageSmoothingEnabled=Lr();let s=0,r=0;fi>0&&(s=(Math.random()-.5)*fi,r=(Math.random()-.5)*fi,fi=Math.max(0,fi-e*20)),_n.drawImage(Wn,Math.round((re.ox+s*re.s)*re.dpr),Math.round((re.oy+r*re.s)*re.dpr),Math.round(re.gw*re.dpr),Math.round(re.gh*re.dpr)),_n.strokeStyle="#2a2e20",_n.lineWidth=2*re.dpr,_n.strokeRect(re.ox*re.dpr,re.oy*re.dpr,re.gw*re.dpr,re.gh*re.dpr),n&&(n1(),Qx(n,i),e1(i),i1(i)),requestAnimationFrame(wu)}var ke,Gn,_n,Wn,nt,Fx,gc,Jt,Ox,Ci,ct,hi,Lr,lu,du,re,Qe,fs,no,Xt,ui,gu,cu,Bx,us,Vx,vc,xu,Rr,Cr,bc,Hx,yc,Yt,kt,et,di,kn,ze,Ri,to,Hn,it,on,xc,Pr,hs,fi,hu,Ar,Vn,Sc,ls,Wx,io,$x,as,os,fu,Ks,Su=qt(()=>{Nn();ys();mi();zi();Oo();hh();tu();ou();ke=i=>document.getElementById(i),Gn=ke("game"),_n=Gn.getContext("2d"),Wn=document.createElement("canvas");Wn.width=360;Wn.height=240;nt=Wn.getContext("2d");Po();Fx=window.RJ_LOCAL?40:110,gc=1e3/30,Jt={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,e){try{localStorage.setItem(i,e)}catch{}}},Ox=["snes","nes","3d","doodle"],Ci=Ox.includes(Jt.get("rj_skin"))?Jt.get("rj_skin"):"snes",ct=Gr,hi=1,Lr=()=>Ci==="3d"||Ci==="doodle";lu=["#000000","#fcfcfc","#bcbcbc","#7c7c7c","#a40000","#d82800","#f83800","#fca044","#f8b800","#ac7c00","#503000","#00a800","#005800","#00b800","#b8f818","#58d854","#0058f8","#3cbcfc","#0078f8","#6888fc","#f878f8","#fce0a8","#a4e4fc","#e45c10","#881400","#f0d0b0","#d8f878"].map(i=>[1,3,5].map(e=>parseInt(i.slice(e,e+2),16))),du=new Uint32Array(4096);for(let i=0;i<4096;i++){let e=(i>>8&15)*17,t=(i>>4&15)*17,n=(i&15)*17,s=0,r=1/0;lu.forEach((o,l)=>{let c=(o[0]-e)**2*.3+(o[1]-t)**2*.59+(o[2]-n)**2*.11;c<r&&(r=c,s=l)});let a=lu[s];du[i]=255<<24|a[2]<<16|a[1]<<8|a[0]}re={dpr:1,W:0,H:0,s:1,ox:0,oy:0,gw:0,gh:0,top:0};window.addEventListener("resize",()=>{Mc(),so()});Mc();so();for(let i of document.querySelectorAll("[data-skin]"))i.onclick=()=>uu(i.dataset.skin);uu(Ci);try{screen.orientation&&screen.orientation.addEventListener&&screen.orientation.addEventListener("change",()=>setTimeout(()=>{Mc(),so()},50))}catch{}Qe={id:null,ox:0,oy:0,x:0,y:0,active:!1},fs={id:null,x:0,y:0},no=!1,Xt=new Set,ui=46;Gn.addEventListener("touchstart",i=>{i.preventDefault(),eo();for(let e of i.changedTouches)pu(e.identifier,e.clientX,e.clientY)},{passive:!1});Gn.addEventListener("touchmove",i=>{i.preventDefault();for(let e of i.changedTouches)mu(e.identifier,e.clientX,e.clientY)},{passive:!1});Gn.addEventListener("touchend",i=>{for(let e of i.changedTouches)wc(e.identifier)});Gn.addEventListener("touchcancel",i=>{for(let e of i.changedTouches)wc(e.identifier)});Gn.addEventListener("mousedown",i=>{eo(),pu("m",i.clientX,i.clientY)});window.addEventListener("mousemove",i=>mu("m",i.clientX,i.clientY));window.addEventListener("mouseup",()=>wc("m"));window.addEventListener("keydown",i=>{Xt.add(i.key.toLowerCase()),(i.key===" "||i.key.toLowerCase()==="j"||i.key.toLowerCase()==="k")&&(no=!0,i.preventDefault())});window.addEventListener("keyup",i=>Xt.delete(i.key.toLowerCase()));window.addEventListener("blur",()=>{Xt.clear(),Qe.active=!1,fs.id=null});gu=()=>fs.id!==null||Xt.has(" ")||Xt.has("j")||Xt.has("k");cu=0;ke("name").value=Jt.get("rj_name")||"";ke("play").onclick=()=>{eo(),Tc()};ke("name").addEventListener("keydown",i=>{i.key==="Enter"&&ke("play").click()});ke("cancel").onclick=()=>{ds({t:"cancel"}),ro(),kt="menu",js("menu")};ke("again").onclick=()=>Tc();ke("toMenu").onclick=()=>{ro(),kt="menu",js("menu")};ke("skip").onclick=i=>{i.stopPropagation(),ds({t:"skip"})};ke("askLife").onclick=i=>{i.stopPropagation(),ds({t:"life"})};ke("lifeYes").onclick=i=>{i.stopPropagation(),ds({t:"lifeAns",yes:1}),ke("lifePrompt").hidden=!0};ke("lifeNo").onclick=i=>{i.stopPropagation(),ds({t:"lifeAns",yes:0}),ke("lifePrompt").hidden=!0};ke("tut")&&(ke("tut").checked=Jt.get("rj_tut_done")!=="1");Bx=["\u0110\u1EA1n bay th\u1EB3ng theo \u0111\u1EA7u xe, gi\u1EEF n\u1EEDa ph\u1EA3i \u0111\u1EC3 b\u1EAFn","T\u1EF1 b\u1EAFn m\u1EE5c ti\xEAu trong g\xF3c ~60\xB0 tr\u01B0\u1EDBc \u0111\u1EA7u xe","T\u1EF1 b\u1EAFn m\u1EE5c ti\xEAu g\u1EA7n nh\u1EA5t m\u1ECDi h\u01B0\u1EDBng (d\u1EC5 nh\u1EA5t)"],us=[0,1,2].includes(+Jt.get("rj_aim_mode"))&&Jt.get("rj_aim_mode")!==null?+Jt.get("rj_aim_mode"):1;for(let i of document.querySelectorAll("[data-aim]"))i.onclick=()=>yu(+i.dataset.aim);yu(us);Vx=()=>us!==0,vc=ke("mute");mc(Jt.get("rj_mute")==="1");xu=()=>{vc.textContent=Er()?"\xD7":"\u266A",vc.style.opacity=Er()?.5:1};xu();Rr=ke("fs"),Cr=document.documentElement,bc=()=>document.fullscreenElement||document.webkitFullscreenElement,Hx=!!(Cr.requestFullscreen||Cr.webkitRequestFullscreen)&&(document.fullscreenEnabled||document.webkitFullscreenEnabled),yc=()=>{Rr.textContent=bc()?"\u2921":"\u26F6",Rr.setAttribute("aria-label",bc()?"Tho\xE1t to\xE0n m\xE0n h\xECnh":"To\xE0n m\xE0n h\xECnh")};Rr&&(Rr.hidden=!Hx,yc(),Rr.onclick=async i=>{i.stopPropagation();try{if(bc())await(document.exitFullscreen||document.webkitExitFullscreen).call(document);else{await(Cr.requestFullscreen||Cr.webkitRequestFullscreen).call(Cr,{navigationUI:"hide"});try{await screen.orientation.lock("landscape")}catch{}}}catch{}},document.addEventListener("fullscreenchange",yc),document.addEventListener("webkitfullscreenchange",yc));vc.onclick=i=>{i.stopPropagation(),mc(!Er()),Jt.set("rj_mute",Er()?"1":"0"),xu()};Yt=null,kt="menu",et=0,di=[],kn=[],ze=null,Ri=null,to=0,Hn=[],it=null,on={x:0,y:0},xc=!0,Pr=[],hs={},fi=0,hu=0,Ar=new Set,Vn=null,Sc=-1,ls=0,Wx={[gt.rapid]:"B\u1EAEN NHANH",[gt.shield]:"KHI\xCAN",[gt.life]:"+1 M\u1EA0NG",[gt.bomb]:"BOM!",[gt.wup]:"V\u0168 KH\xCD +"};io=!1;$x=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);as=je-240;os="'Press Start 2P', monospace";fu=performance.now(),Ks=0;requestAnimationFrame(wu);window.__rj={get state(){return kt},get latest(){return ze},get you(){return et},get pred(){return it}}});So();var Qs=new URLSearchParams(location.search);(Qs.get("start")||Qs.get("stage")||Qs.get("lives"))&&typeof process>"u"&&(window.process={env:{RJ_START_Y:Qs.get("start")||"",RJ_STAGE:Qs.get("stage")||"",RJ_LIVES:Qs.get("lives")||""}});window.RJ_LOCAL=wo;var Tu=document.querySelector("#menu .sub");Tu&&(Tu.textContent="B\u1EA3n offline \xB7 ch\u01A1i c\xF9ng BOT");Promise.resolve().then(()=>Su());})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
