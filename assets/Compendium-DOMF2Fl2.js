import{a as e,i as t,n,r,t as i}from"./index-DbHaJGDk.js";var a=r(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),o=e(t(),1);function s(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var c=s();function l(e){c=e}var u={exec:()=>null};function d(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function f(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(m.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var p=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),m={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:d(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:d(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:d(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:d(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:d(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:d(e=>RegExp(`^ {0,${e}}>`))},ee=/^(?:[ \t]*(?:\n|$))+/,te=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ne=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,h=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,re=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,g=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,_=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,v=f(_).replace(/bull/g,g).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),ie=f(_).replace(/bull/g,g).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),y=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,ae=/^[^\n]+/,b=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,oe=f(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,b).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),se=f(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,g).getRegex(),x=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,S=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ce=f(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,S).replace(`tag`,x).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),C=e=>f(y).replace(`hr`,h).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace(`list`,e).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,x).getRegex(),le=C(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),ue=C(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),w={blockquote:f(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,ue).getRegex(),code:te,def:oe,fences:ne,heading:re,hr:h,html:ce,lheading:v,list:se,newline:ee,paragraph:le,table:u,text:ae},de=f(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,h).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,x).getRegex(),fe={...w,lheading:ie,table:de,paragraph:f(y).replace(`hr`,h).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,de).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,x).getRegex()},pe={...w,html:f(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,S).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:u,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:f(y).replace(`hr`,h).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,v).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},me=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,he=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,T=/^( {2,}|\\)\n(?!\s*$)/,ge=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,E=/[\p{P}\p{S}]/u,D=/[\s\p{P}\p{S}]/u,O=/[^\s\p{P}\p{S}]/u,_e=f(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,D).getRegex(),k=/(?!~)[\p{P}\p{S}]/u,ve=/(?!~)[\s\p{P}\p{S}]/u,ye=/(?:[^\s\p{P}\p{S}]|~)/u,be=f(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,p?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),A=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,xe=f(A,`u`).replace(/punct/g,E).getRegex(),Se=f(A,`u`).replace(/punct/g,k).getRegex(),j=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,Ce=f(j,`gu`).replace(/notPunctSpace/g,O).replace(/punctSpace/g,D).replace(/punct/g,E).getRegex(),we=f(j,`gu`).replace(/notPunctSpace/g,ye).replace(/punctSpace/g,ve).replace(/punct/g,k).getRegex(),Te=f(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,O).replace(/punctSpace/g,D).replace(/punct/g,E).getRegex(),Ee=f(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,E).getRegex(),De=f(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,O).replace(/punctSpace/g,D).replace(/punct/g,E).getRegex(),Oe=f(/\\(punct)/,`gu`).replace(/punct/g,E).getRegex(),ke=f(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ae=f(S).replace(`(?:-->|$)`,`-->`).getRegex(),je=f(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Ae).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),M=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Me=f(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,M).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),N=f(/^!?\[(label)\]\[(ref)\]/).replace(`label`,M).replace(`ref`,b).getRegex(),P=f(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,b).getRegex(),Ne=f(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,N).replace(`nolink`,P).getRegex(),F=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,I={_backpedal:u,anyPunctuation:Oe,autolink:ke,blockSkip:be,br:T,code:he,del:u,delLDelim:u,delRDelim:u,emStrongLDelim:xe,emStrongRDelimAst:Ce,emStrongRDelimUnd:Te,escape:me,link:Me,nolink:P,punctuation:_e,reflink:N,reflinkSearch:Ne,tag:je,text:ge,url:u},Pe={...I,link:f(/^!?\[(label)\]\((.*?)\)/).replace(`label`,M).getRegex(),reflink:f(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,M).getRegex()},L={...I,emStrongRDelimAst:we,emStrongLDelim:Se,delLDelim:Ee,delRDelim:De,url:f(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,F).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:f(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,F).getRegex()},Fe={...L,br:f(T).replace(`{2,}`,`*`).getRegex(),text:f(L.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},R={normal:w,gfm:fe,pedantic:pe},z={normal:I,gfm:L,breaks:Fe,pedantic:Pe},Ie={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},B=e=>Ie[e];function V(e,t){if(t){if(m.escapeTest.test(e))return e.replace(m.escapeReplace,B)}else if(m.escapeTestNoEncode.test(e))return e.replace(m.escapeReplaceNoEncode,B);return e}function H(e){try{e=encodeURI(e).replace(m.percentDecode,`%`)}catch{return null}return e}function Le(e,t){let n=e.replace(m.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(m.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(m.slashPipe,`|`);return n}function U(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function Re(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&m.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function ze(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Be(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function Ve(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function He(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var W=class{options;rules;lexer;constructor(e){this.options=e||c}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:Re(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=He(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=U(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:U(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:U(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=U(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=Be(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]);let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1;if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=Re(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:U(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Le(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:U(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(Le(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:U(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=U(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=ze(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),Ve(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return Ve(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},G=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||c,this.options.tokenizer=this.options.tokenizer||new W,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:m,block:R.normal,inline:z.normal};this.options.pedantic?(t.block=R.pedantic,t.inline=z.pedantic):this.options.gfm&&(t.block=R.gfm,this.options.breaks?t.inline=z.breaks:t.inline=z.gfm),this.tokenizer.rules=t}static get rules(){return{block:R,inline:z}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(m.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(m.tabCharGlobal,`    `).replace(m.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e;if(this.tokens.links){let e=Object.keys(this.tokens.links);e.length>0&&(n=n.replace(this.tokenizer.rules.inline.reflinkSearch,t=>e.includes(t.slice(t.lastIndexOf(`[`)+1,-1))?`[`+`a`.repeat(t.length-2)+`]`:t))}n=n.replace(this.tokenizer.rules.inline.anyPunctuation,`++`),n=n.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},K=class{options;parser;constructor(e){this.options=e||c}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(m.notSpaceStart)?.[0],i=e.replace(m.endingNewline,``)+`
`;return r?`<pre><code class="language-`+V(r)+`">`+(n?i:V(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:V(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${V(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=H(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+V(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=H(e);if(i===null)return V(n);e=i;let a=`<img src="${e}" alt="${V(n)}"`;return t&&(a+=` title="${V(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:V(e.text)}},q=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},J=class e{options;renderer;textRenderer;constructor(e){this.options=e||c,this.options.renderer=this.options.renderer||new K,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new q}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},Y=class{options;block;constructor(e){this.options=e||c}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?G.lex:G.lexInline}provideParser(e=this.block){return e?J.parse:J.parseInline}},X=new class{defaults=s();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=J;Renderer=K;TextRenderer=q;Lexer=G;Tokenizer=W;Hooks=Y;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new K(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new W(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Y;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];Y.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&Y.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return G.lex(e,t??this.defaults)}parser(e,t){return J.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?G.lex:G.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?J.parse:J.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?G.lex:G.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?J.parse:J.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+V(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function Z(e,t){return X.parse(e,t)}Z.options=Z.setOptions=function(e){return X.setOptions(e),Z.defaults=X.defaults,l(Z.defaults),Z},Z.getDefaults=s,Z.defaults=c,Z.use=function(...e){return X.use(...e),Z.defaults=X.defaults,l(Z.defaults),Z},Z.walkTokens=function(e,t){return X.walkTokens(e,t)},Z.parseInline=X.parseInline,Z.Parser=J,Z.parser=J.parse,Z.Renderer=K,Z.TextRenderer=q,Z.Lexer=G,Z.lexer=G.lex,Z.Tokenizer=W,Z.Hooks=Y,Z.parse=Z,Z.options,Z.setOptions,Z.use,Z.walkTokens,Z.parseInline,J.parse,G.lex;var Ue=`# Core Rules (crunch)

Source: \`design/source/jason-rpg-system.pdf\` — Jason's system doc, shared 2026-07-19. This is the actual mechanical core of the game and supersedes the speculative "turn variety" brainstorm previously in \`ruleset.md\`; that problem already has a real answer here (see Resource System below).

**Status as of 2026-07-19 (second pass):** Benjamin asked for the system completed — lots of unique, interactive class/subclass features, not just filled-in tables. Everything below marked **[PROPOSED]** is new design, not in Jason's original PDF — written to match the system's existing patterns (resource-spend tradeoffs, discipline-gated access, hit-triggered effects) but unreviewed by Jason. Treat it as a strong draft for the next design session with him, not locked-in canon. Everything else is transcribed as-is from the PDF.

## Stats
Fixed starting array: **12, 11, 10, 10, 9** assigned across five stats.

| Stat | Governs | Used for |
|---|---|---|
| Might | Physical strength | Melee damage, bow draw, block amount |
| Reflex | Speed, reaction time, evasiveness | Dodge, block |
| Vitality | Health, stamina, fatigue resistance | Health, resist elements |
| Sense | Awareness, battlefield reading, ranged accuracy, initiative | Bow accuracy, noticing things |
| Wit | Mental sharpness, magical aptitude, mental resistance | Casting, knowledge |

Modifier table:

| Score range | Modifier |
|---|---|
| 8-9 | -1 |
| 10-11 | +0 |
| 12-13 | +1 |
| 14-15 | +2 |
| 16-17 | +3 |

## Leveling
No XP system — leveling is GM's discretion. Every level grants a meaningful trait; there are no "stat-only" levels.

| Level | Grants |
|---|---|
| 0 | Race, Background, 2 minor feats, stats, resource type |
| 1 | Class discipline, stat increase |
| 2 | Resource + class ability that uses it, major feat |
| 3 | Subclass, minor feat |
| 4 | Class feature, stat increase |
| 5 | Resource feat, major feat |

- **Stat increase** — one stat gets +1
- **Minor stat increase** — one stat that is *not* your highest gets +1

## Weapons
- **Bows**: Might for damage (capped by the bow's draw weight), Sense for accuracy. Example: +6 Might with a Draw Weight 2 bow → only +2 bonus damage (capped by draw weight); +0 Might with a Draw Weight 3 bow → no bonus. Drawing takes an action, firing takes an action. Drawing within an enemy's reach provokes a reaction against yourself.
- **Range modifier by distance** — read as *grid squares* (5ft each), not raw feet: the source's "8-9/10-11/…/16-17" bands only make sense as squares (40-85ft), matching a bow's real range; as literal feet they'd put a longbow's max useful range inside melee reach. **[PROPOSED reading, needs Jason to confirm]**:

| Range (squares) | Modifier |
|---|---|
| 8-9 | -1 |
| 10-11 | +0 |
| 12-13 | +1 |
| 14-15 | +2 |
| 16-17 | +3 |

Under 8 squares presumably has its own (unwritten) close-range modifiers — **[PROPOSED]**: -2 at 1-3 squares (too close for a clean shot), -1 at 4-7, using the table above for 8+.

- **Melee weapons** — damage dice **[PROPOSED, matching the bow progression of d8/d10/d12]**:

| Traits | Damage type | Die |
|---|---|---|
| One-handed | Cutting | 1d6 |
| One-handed | Crushing | 1d8 |
| Two-handed | Cutting | 1d10 |
| Two-handed | Crushing | 1d12 |

Crushing hits harder per die than cutting of the same hand-count to justify picking a blunt weapon over an edged one when Slashing Master/Bludgeoning Master aren't the build's focus — cutting weapons make it up in access to Finesse and (later) Slashing Master's bleed.

- **One-handed weapon modifiers** — only Finesse was in the source; **[PROPOSED additions]** to give real build variety beyond "pick the biggest die":

| Modifier | Effect |
|---|---|
| Finesse | Weapon uses Reflex instead of Might for accuracy and damage |
| Balanced | -1 die step (e.g. 1d8→1d6) but +1 to Dodge while wielding it — a defensive one-hander |
| Reach | +1 square of melee range, but -1 accuracy against adjacent (not-at-range) targets |

- **Thrown weapons [PROPOSED — heading existed with no content]**: any one-handed weapon with the Thrown trait can be thrown as an attack using the ranged-distance modifier table above (capped at 8 squares — thrown weapons don't reach bow distances). Damage die drops one step from its melee value (Balanced/Reach weapons can't be thrown). A thrown weapon lands in the target's space/adjacent and can be retrieved after combat, not mid-fight.

- **Ranged weapons**:

| Weapon | Damage | Range | Notes |
|---|---|---|---|
| Shortbow | 1d8 piercing | Full table above, no penalty below 8 squares | Can move 10ft before/after loading; can move while drawn |
| Longbow | 1d10 piercing | Full table above, **[PROPOSED]** -1 at 1-7 squares (too unwieldy at close range, matches "cannot move while drawn") | Cannot move while drawn |
| Crossbow | 1d12 piercing | Full table above, no penalty below 8 squares (no draw-and-aim tension since it's pre-loadable) | Takes 2 turns to load; can be stored pre-loaded |

## Armor

| Armor | Proficient | Non-proficient |
|---|---|---|
| Light | +1 AC | +1 AC, -1 dodge, minor disadvantage sneak, minor disadvantage athletics |
| Medium | +2 AC, minor disadvantage sneak | +1 AC, -1 dodge, minor disadvantage sneak, major disadvantage athletics |
| Heavy | +3 AC, minor disadvantage sneak, minor disadvantage athletics | +2 AC, -1 dodge, -5ft movement, major disadvantage sneak, major disadvantage athletics |

## Initiative & surprise
- Roll **3d6 + Reflex + Sense** + other modifiers. Highest goes first.
- **Surprise rounds**: non-surprised parties roll initiative and act first; then everyone (including previously-surprised parties) rolls initiative and the round proceeds normally from the top.

## Character creation (Level 0)

### Races

| Race | Bonus | Penalty | HP | Trait |
|---|---|---|---|---|
| Stoneskin | +1 Vitality | -1 Wit | 12 | **Tough** — Minor Advantage when stabilizing |
| Lightfoot | +1 Reflex | -1 Might | 10 | **Lightfooted** — ignore the first 5ft of difficult-terrain movement loss each round |
| Ironblood | +1 Might | -1 Reflex | 11 | **Max Effort** — once per rest, roll a Might check with Major Advantage |
| Keen-eye | +1 Sense | -1 Vitality | 9 | **Aware** — can't be surprised unless unconscious/sleeping |
| Quickmind | +1 Wit | -1 Sense | 10 | **Second Thought** — once per rest, reroll a failed Wit check |

**Decision (2026-07-19)**: standardized on **Vitality** as the stat name — the source used "Vigor" and "Vitality" interchangeably for the same stat (races table + death mechanics used "Vigor," the core stat table used "Vitality"). All references below use Vitality. Flag to Jason in case "Vigor" was meant to be a distinct thing.

### Backgrounds

| Background | Trade proficiency (pick 1) | Choose 2 profs | Gear |
|---|---|---|---|
| Outlander | Hunter (Tracking) / Hermit (Survival) | Tracking, Hunting, Climbing, Navigate | Bedroll, flint & steel, rope, sling, 3gp |
| Soldier | Infantry (Intimidation) / Scout (Perception) | 1 Weapon, Shields, Athletics | Military uniform, 1 basic weapon, 5gp |
| Artisan | Tinkerer (Mechanisms) / Tradesman (Craft) | Persuasion, Performance, Deception | Basic tool pouch, leather gloves, 10gp |
| Scholar | Academic (History) / Healer (Treat Wound) | Investigation, History, Arcana, 1 language | Notebook, ink & quill, lantern, 10gp |
| Streetrat | Thief (Pickpocket) / Urchin (Sleight of Hand) | Sleight of Hand, Deception, Lockpicking, Acrobatics | Lockpick set, fake ID, dagger, old cloak, 3gp |

### Feats
Two tiers — deliberately **not class-locked** (unlike 5e), so class-defining power comes from Class/Subclass, not feats:
- **Minor Feats**: small flavorful perks. Granted at Level 0.
- **Major Feats**: character-defining, often combat-relevant new mechanics.

**Minor feats:**

| Feat | Effect |
|---|---|
| Actor | Mimic accents/voices of people you're familiar with |
| Alert | +1 initiative; acts as lowest initiative (goes first) during surprise rounds |
| Athlete | Faster standing from prone; faster climbing/swimming |
| Close-Quarter Marksman | No reaction penalty drawing a bow in melee reach; bow-as-melee-weapon beats an unarmed strike |
| Lightly/Moderately/Heavily Armored | Gain proficiency with that armor tier |
| Dual Wielding | Gain proficiency with dual wielding |
| Slasher / Bludgeoner / Piercer | Gain proficiency with that martial weapon category |
| **Grappler** [PROPOSED] | Grapple as a single Action instead of two. A grappled target has Minor Disadvantage on all rolls until they break free |
| **Shielder** [PROPOSED] | Gain proficiency with shields; while wielding one, a successful Block also protects one adjacent ally from the same hit |
| **Duelist (minor feat)** [PROPOSED] — *naming collision with the Fighter Duelist Discipline in the source; kept as a separate, lighter effect, flag to Jason to rename one of them* | +1 accuracy when fighting a single enemy with no other combatants adjacent to either of you |
| **[unlabeled bullet after Piercer]** [PROPOSED, filling the blank] — **Quickdraw** | Draw or sheathe a weapon as a free action once per turn, and act at no initiative penalty on the round you're ambushed |

**Major feats:**

| Feat | Effect |
|---|---|
| Dual Wield Master | Can use the Block action while dual wielding, as if holding a shield |
| **Light/Medium/Heavy Armor Master** [PROPOSED] | While proficient, ignore that tier's sneak/athletics disadvantages entirely (Heavy Armor Master also removes the -5ft movement penalty) |
| **Slashing Master** [PROPOSED] | +1 damage with slashing weapons; on a Critical Success, target also Bleeds (1 ongoing damage/turn until treated) |
| **Bludgeoning Master** [PROPOSED] | +1 damage with crushing weapons; on a Critical Success, target is Staggered (loses their next Reaction) |
| **Piercing Master** [PROPOSED] | +1 damage with piercing weapons; on a Critical Success, target's AC is reduced by 1 until healed (Puncture) |
| Shielding Master | On successful Block, push the enemy back 5ft; +1 to Block rolls against projectiles |
| **Light Bow Master** [PROPOSED] | Ignore the shortbow's movement restrictions entirely; +1 accuracy at 8+ squares |
| **Heavy Bow Master** [PROPOSED] | Draw and fire a longbow as a single Action; ignore the -1 close-range penalty |
| **Great Weapon Master** [PROPOSED] | On a Critical Success with a two-handed weapon, make a free basic attack at -2 against another adjacent target |
| **Dueling Master** [PROPOSED] | Upgrades the Duelist Discipline: isolated-target damage bonus becomes +2 (from +1), and its passive AC bonus applies to any enemy who attacked you last turn, not only ones you hit |

Note: feats marked [PROPOSED] fill gaps the PDF left as headers only — same tier-of-power intent (minor = flavor, major = build-defining) but the specific numbers are a first draft for playtesting, not final balance.

## Classes

Three base classes, each built around a distinct **Resource** (see Resource System below) and a distinct tactical identity:

| Class | Their thing | Resource focus |
|---|---|---|
| Fighter | Zone of control (melee space) | Rage |
| Rogue | Sneak attack / exposing weakness | Focus |
| Mage | Spell casting | Flow (primarily) |

- **Fighter** = controls space through modifiers
- **Mage** = shapes spells through modifiers
- **Rogue** = creates openings through modifiers
- Modifier access is gated by discipline choice — e.g. "all Fighters have access to a certain pool of modifiers but only Rage Fighters can get others."

### Fighter — Disciplines (chosen at Level 1)
- **Two-handed fighting**: +1 to block action, reroll 1s on damage (while wielding 2H)
- **Duelist**: +1 passive AC vs. enemies hit last turn, +1 damage to isolated enemies (1H weapon, no shield)
- **Shield**: +1 passive AC; if Block still takes 1 damage, reduce it by 2 (while wielding a shield)
- **Archer**: load-on-equip, +1 accuracy when no enemies adjacent

### Fighter modifiers (attack/block, spend a Resource)

| Modifier | Type | Resource | Effect |
|---|---|---|---|
| Cleave | Attack | Rage | On hit, half damage to an adjacent target |
| All Out | Attack | Rage | +damage; miss gives -1 next Dodge |
| Driving Blow | Attack | Rage | On hit, push 10ft or knock prone |
| Repositioning Strike | Attack | Flow | Move 5ft after attacking |
| Flowing Strike | Attack | Flow | On hit, +1 next Dodge/Block before your next turn |
| Opening | Attack | Flow | Ignores half armor AC; +1 more if target Blocks |
| Disrupt Focus | Attack | Focus | On hit, -1 to enemy's next attack/block/dodge |
| Step In | Attack | Focus (Fighter/Rogue) | Forces enemy to reposition, -1 AC until their next turn |
| Attempt Disarm | Attack | Focus | On hit, -2 enemy accuracy; on crit, disarms |
| Brace | Block | Neutral | +1 block, can't move until end of next turn |
| Hold The Line | Block | Neutral | Can't be pushed/moved until next turn |
| Punishing Guard | Block | Rage | On success, +1 next attack vs. blocked opponent |
| Bash | Block | Rage | On success, push target 5ft |
| Deflect | Block | Flow | On successful block, move 5ft |
| Turn the Blow | Block | Flow | On success, +1 AC until end of next turn |
| On Guard | Block | Focus | No Focus lost on successful blocks until next turn |

Fighter's Dodge modifiers were blank in the source. **[PROPOSED]**:

| Modifier | Type | Resource | Effect |
|---|---|---|---|
| Sidestep | Dodge | Flow | On successful Dodge, you may swap positions with an adjacent ally (repositioning the line, not just yourself) |
| Weather the Storm | Dodge | Rage | On successful Dodge, gain Rage as if you'd been hit — Fighters shouldn't be purely punished for dodging instead of blocking |
| Anchor Stance | Dodge | Neutral | +1 Dodge, but you can't benefit from Repositioning Strike or Deflect this turn (a deliberate stand-and-hold option) |

### Rogue — Disciplines
- **Ambusher**: +1 initiative, +2 to first damage each combat
- **Predator**: +1 Exposed bonus vs. isolated targets; successful Dodge of an isolated target makes them Exposed to your next attack
- **Evasionist**: +1 first Dodge/round; once/turn after successful Dodge, move 5ft; once/turn after successful Dodge, +2 AC until start of next turn

Rogue's identity per the "Primary class systems" section: uses Resource to modify attacks/dodges/blocks around **exposing** the enemy and exploiting weakness; surprised enemies are automatically Exposed, giving Rogues the highest burst (surprise + exposed damage stacking).

### Rogue modifiers [PROPOSED — blank in source]
Where Fighter modifiers are about controlling space and Mage modifiers (below) are about shaping magic, Rogue modifiers are about **manufacturing and cashing in Exposed** — every Rogue turn is a question of "do I set up an opening now, or cash in one I already have?"

| Modifier | Type | Resource | Effect |
|---|---|---|---|
| Weak Point | Attack | Focus | Against an Exposed target, this attack auto-upgrades to a Critical Success |
| Feint | Attack | Focus | On hit, target becomes Exposed to the next ally (not you) who attacks it this round |
| Low Blow | Attack | Focus | On hit, target has Minor Disadvantage on Might-based rolls until your next turn |
| Twist the Knife | Attack | Rage | Against an Exposed target, gain double Rage from the damage you deal |
| Shiv | Attack | Flow | On hit, you don't lose Flow even if you're hit before your next turn (protects your pool once) |
| Vanish Strike | Attack | Flow | After hitting an isolated target (no adjacent allies), you become hidden until you next act |
| Coup de Grace | Attack | Rage | Against an unconscious or stunned target, deal maximum weapon damage; costs your full current Rage |
| Opportunist | Attack | Neutral | Once/round, make this attack as a Reaction the instant an ally's action makes an enemy Exposed |
| Slip Away | Block | Flow | On successful Block, move 5ft immediately, no opportunity attacks |
| Counter Lean | Block | Focus | On successful Block, the attacker becomes Exposed to your next attack |
| Cheap Shot | Block | Rage | On successful Block, make a free basic attack at -2 against the same enemy |
| Untouchable | Dodge | Flow | On successful Dodge, +1 to your next attack roll before your next turn |
| Ghost Step | Dodge | Focus | On successful Dodge against a ranged/thrown attack, move to the nearest cover for free |
| Predator's Reflex | Dodge | Rage | Dodging an attack from an isolated or Exposed enemy grants bonus Rage |
| Riposte | Dodge | Neutral | On a Legendary-tier Dodge (beats TN by 6+), make an immediate free basic attack |

Design note: this leans harder into Rage/Flow than the class's stated "Focus" resource-focus label implies — that's intentional. A Rogue who only ever plays Focus-safe (setup, then cash in) is exactly the "same turn every time" failure mode; giving them real Rage and Flow options makes "am I in a brawl, a chase, or a stakeout" change what a Rogue's turn looks like, same as it does for Fighter.

### Mage — Disciplines
- **Ritual Caster**: spending an extra action to cast decreases cost (stacking) and increases effectiveness
- **Non-combat caster**: non-damage spells are cheaper
- **Complex caster**: a spell's 3rd modifier is very cheap

Mage identity: uses Resource to forge/modify spells for varied outcomes (see Magic section).

### Mage modifiers [PROPOSED — blank in source]
The Magic section's elemental modifiers already cover *what a spell does*; this table covers *how a Mage fights when the spell itself isn't enough* — non-elemental combat techniques a Mage can layer on top of any cast, plus how they Block/Dodge without a Fighter's armor or a Rogue's reflexes.

| Modifier | Type | Resource | Effect |
|---|---|---|---|
| Twin Cast | Attack | Flow | Cast the same spell at a second target in range, at half potency |
| Sustained Channel | Attack | Focus | Spend an extra Action; the spell repeats its effect at reduced strength at the start of your next turn |
| Volatile Casting | Attack | Rage | +damage; on a miss, take backlash damage equal to half the spell's base damage |
| Arcane Feint | Attack | Focus | This spell can target through magical sense (obstacles you know a target is behind), not just line of sight |
| Ward | Block | Focus | Erect a temporary barrier that reduces incoming damage by a flat amount until your next turn |
| Absorb | Block | Flow | Successfully blocking an attack matching your elemental Form refunds a small amount of Flow |
| Mana Barrier | Block | Neutral | Your Block action can be used at range against ranged/spell attacks, if you have line of sight |
| Blink Step | Dodge | Flow | On successful Dodge, teleport 5ft instead of moving normally (ignores terrain, provokes nothing) |
| Counter-glyph | Dodge | Focus | On successful Dodge, leave a rune in the space you vacated; the next enemy to enter it triggers a weak version of your last cast spell |
| Elemental Skin | Dodge | Rage | Gain resistance to your Form's damage type until your next turn |

Design note: Mage was the class most at risk of "cast the same best spell every turn" — Twin Cast/Sustained Channel/Volatile Casting give a Rage-vs-Flow-vs-Focus choice on *how* to cast, on top of which elemental modifier is chosen, so a Mage's decision space is at least as wide as Fighter's.

## Subclasses
Formed by combining two class picks (chosen at Level 3, per the leveling table). Only Skirmisher had an identity in the source ("Action efficiency and hardest to hit") — the rest are named but undesigned in the PDF. **[PROPOSED below]**: each gets a one-line identity plus 2 concrete features, matching Benjamin's ask that subclasses feel unique and interactive, not just a stat-stick label.

| Class 1 | Class 2 | Subclass | Their thing |
|---|---|---|---|
| Fighter | Fighter | Warmaster | Battlefield command — punishes anyone who leaves your zone |
| Rogue | Rogue | Assassin | Stacking exposure — burst scales with setup |
| Mage | Mage | Arcanist | Modifier stacking — casts other Mages can't |
| Fighter | Rogue | Skirmisher | Action efficiency and hardest to hit |
| Fighter | Mage | Spellblade | Melee and magic resolve in the same swing |
| Rogue | Mage | Trickster | Misdirection — the enemy never targets the real you |

**Warmaster** (Fighter + Fighter)
- Zone of Control extends to all adjacent tiles *and* the tiles adjacent to them (a 2-tile radius instead of 1)
- Once per combat, when an enemy in your zone succeeds on an attack or save against an ally, force them to reroll it

**Assassin** (Rogue + Rogue)
- Exposed becomes stackable instead of binary — each source of Exposed on a target adds cumulative bonus damage instead of just the one flat bonus
- The first attack you make each combat against a target that hasn't acted yet is an automatic Critical Success

**Arcanist** (Mage + Mage)
- Can apply a 4th modifier to a spell (Complex Caster normally caps effective stacking at 3)
- Once per rest, cast a spell without spending any Resource

**Skirmisher** (Fighter + Rogue) — as in source, plus concrete mechanics **[PROPOSED]**:
- One of your 2 Actions each turn can be an attack *or* a Dodge/Block reaction without it costing an Action from your next turn (partial break from the normal reaction-cost rule)
- +1 AC on any turn you've moved at least 5ft

**Spellblade** (Fighter + Mage)
- A melee weapon attack can trigger one elemental spell modifier at half its normal Resource cost, applied to the same hit (spellstrike)
- Can channel Touch-range spells through a weapon strike instead of a separate Attack action

**Trickster** (Rogue + Mage)
- Can cast a spell as part of a Dodge reaction (normally reactions are limited to Dodge/Block/Parry/reaction-spells — this lets a Dodge *be* the spell)
- Once per combat, create a decoy illusion that redirects one attack meant for you to an adjacent empty space instead

## Resource System
This is the mechanical answer to "every turn is the same" — three resources with different generation/spend/loss triggers mean the same nominal action (e.g. "attack") plays differently depending on what resource state you're in and which modifier you pick.

| Resource | Used for | Gained by | Lost by | Starting value |
|---|---|---|---|---|
| **Rage** | Power, overwhelming effects, AoE | Dealing/taking damage | Leaving combat, being stunned/unable to act | None (builds from 0) |
| **Flow** | Chaining actions, repositioning, sustained effects | Moving, attacking, dodging | Being hit by an enemy | 50% |
| **Focus** | Precision, timing, disruption | Preparation, deliberate action | Being targeted (small loss), being hit (large loss) | Full (0 if surprised) |

Practical read: Rage rewards staying in the fight and trading blows (snowballs in a brawl); Flow rewards mobility and momentum but resets when you get tagged; Focus rewards patience/setup but bleeds away under pressure and is gone entirely if you're ambushed. A Fighter, Rogue, and Mage leaning on different resources by default is what keeps their turns feeling structurally different from each other, on top of each individual turn's modifier choice.

## Magic

### Elemental forms (pick one — determines which spells you can learn)

| Form | Flavor |
|---|---|
| Fire | Aggression, destruction, area control |
| Water | Adaptability, control, healing |
| Earth | Defense, fortification, resilience |
| Air | Speed, evasion, disruption |
| Lightning | Precision, burst damage, energy |

### Spell bases

| Base | Effect |
|---|---|
| Target | Straight-line magic shot at a declared target |
| Zone | Effect in a specified 15ft cube |

### Universal modifiers (any element)

| Modifier | Resource | Effect |
|---|---|---|
| Cascade | Flow | Also hits one additional adjacent target/space at reduced strength |
| Slipstream | Flow | Move 10ft after casting, no opportunity attacks |
| Refund | Flow | Regain a small amount of resource if the spell hits ≥2 targets or interacts with terrain |
| Pinpoint | Focus | Ignore partial cover/resistance/targeting penalties |
| Delay | Focus | Resolves at start of your next turn instead, for more potency/duration |
| Selective | Focus | Choose which creatures/spaces in the area are affected |
| Overdrive | Rage | More potency, but a drawback (recoil/self-damage/loss of control) after |
| Bloodcast | Rage | Pay HP instead of resource |
| Blood Cost | Rage | Pay HP to ignore normal spell limits (range/cooldown/stacking) |

### Element-specific modifiers

| Modifier | Element | Effect |
|---|---|---|
| Burn | Fire | Ongoing damage, worsens if target stays put/acts aggressively |
| Scorch | Fire | Reduces armor/cover/defense instead of full damage |
| Spread | Fire | Damaged enemies ignite nearby ground |
| Chill | Water | Reduces movement speed / delays next action |
| Splash | Water | Spills to adjacent spaces/secondary targets at reduced strength |
| Bubble | Water | Blocks one instance of damage; can't dodge while active |
| Push | Air | Forced movement in a chosen direction |
| Lift | Air | Removes stable footing, harder to reposition |
| Lighten | Air | Allies gain movement speed + better dodge |
| Anchor | Earth | Prevents forced movement / zeroes mobility |
| Sink Hole | Earth | Ground collapses under target, hinders movement/positioning |
| Crumble | Earth | Weakens structures/armor/terrain |
| Shock | Lightning | Interrupts actions / imposes disadvantage on next action |
| Conduct | Lightning | Jumps to nearby/connected targets at reduced strength |
| Disrupt | Lightning | Drains resources / breaks concentration / disables reactions |

- Players only learn spells from their chosen Form.
- Some spells can be cast as Reactions.
- Magic spends the caster's Resource, not a separate spell-slot economy.

## Actions & reactions
- **2 Actions per turn** — spend on movement, attacks, abilities, or hold for a Reaction.
- **Reactions** are declared after an enemy's to-hit roll but before damage: Dodge (boosts AC-equivalent Guard), Block (reduces damage), Parry/Counter (class/weapon-specific), or a reaction spell.
- Reactions consume Actions from your *next* turn — reacting has a real opportunity cost, not a free extra action.

## Core resolution
- Roll **3d6 + Stat + Proficiency** vs. Target Number (TN).
- **Critical Success**: two or more 6s. **Legendary Success**: three 6s.
- **Auto-failure**: two 1s. **Critical failure**: three 1s.
- **Minor Advantage**: roll 4d6, drop lowest. **Major Advantage**: 5d6, drop two lowest.
- **Minor Disadvantage**: 4d6, drop highest. **Major Disadvantage**: 5d6, drop two highest.

## Grid & movement
- 5ft battle grid.
- 30ft standard movement speed.

## Downed & death
- At 0 HP: unconscious, lose 2 HP/turn until stabilized or dead.
- Death at negative (Vigor/Vitality stat + modifier).
- **Stabilization**: anyone, 2 Actions, 3d6 + Proficiency vs. TN 12 (relevant proficiency = Minor Advantage). Success stabilizes at 0 HP, still unconscious.
- **Regaining consciousness**: 3d6 + Vitality vs. TN 14. Success wakes at 0 HP; failure stays under.
- **Flinch**: taking >½ max HP in one hit forces a Vitality save (DC 12) or lose 1 action next turn.

**Flanking [PROPOSED — header only in source]**: a target is Flanked when 2+ enemies occupy tiles on opposite (or near-opposite) sides of it. Flanked targets grant Minor Advantage to melee attacks against them, and lose access to the Duelist Discipline's isolated-target bonuses (a Flanked target is, definitionally, not isolated) — ties directly into mechanics already in the doc instead of being a bolt-on rule.

**Sneak Attack rounds [PROPOSED — header only in source]**: an attack against a target that is Surprised or Exposed, made by an attacker none of the target's allies can currently see, deals bonus damage equal to the attacker's current primary Resource value (Rage/Flow/Focus, whichever they're spending), capped at their level. This is the mechanical payoff for banking Resource before an ambush instead of spending it immediately — ties Sneak Attack directly into the Resource System rather than being a flat separate bonus.

### Death vs. injury — proposed resolution
The early Keep note ("heroes don't die, other consequences instead") and this PDF (real death at negative Vitality) genuinely conflict. **[PROPOSED merge]**: keep the PDF's death mechanic as the real stakes (it also makes Stabilization/Flinch/regaining-consciousness meaningful — none of that matters if death is impossible), but add a **Grade 1-5 injury** on any character stabilized at 0 HP, using the original Keep note's idea of a DM-graded severity chart:
- Grade 1-2: cosmetic/minor (a scar, a limp until next long rest) — no mechanical penalty
- Grade 3-4: a lasting Minor Disadvantage on one stat-based roll type until treated by a Healer proficiency or downtime
- Grade 5: a lasting Major Disadvantage, or a permanent -1 to one stat if left untreated through a full arc

This keeps death real (so tension and the stabilize/wake rolls matter) while still honoring the "consequences accumulate, not every fight is a coin-flip to the grave" spirit Benjamin's original note wanted — characters usually walk away marked rather than dead, but going down repeatedly without recovery genuinely can kill them. Needs Jason's buy-in since it touches his core death mechanic.

## Experimental / unfinished
- A 6-segmented skill tree gated by working up the Fighter/Rogue/Mage trees to unlock intermediate trees; skill points only progress down trees tied to your class/subclass. Explicitly marked "Experimental" in source — not committed design.
- Loose skill-tree idea list (ungrouped, no mechanical write-up): reduced heavy-armor disadvantage, reduced knockback in heavy armor, improved dual-wield block, improved dual-wield off-hand damage/accuracy, deflect projectiles, improved crit on finesse weapons, two-handed sweeping strike, silent casting, focusless casting, "Fast Hands" (free weapon-swap/item-pickup/non-combat action once per turn), moving bow draw, learn 2 offensive maneuvers, learn 2 defensive maneuvers, reduced Flinch.

## What's genuinely done vs. what's still open
**From Jason's PDF, solid as-is:** stat system, core 3d6 resolution + advantage/disadvantage, initiative, armor, the Resource System (Rage/Flow/Focus) as the turn-variety engine, races, backgrounds, Fighter's Attack/Block modifier list, the elemental magic modifier system.

**Filled in this pass (2026-07-19), marked [PROPOSED] throughout — needs Jason's review, not yet playtested:**
- Rogue's full modifier table (exposing/opportunism-themed) and Mage's full modifier table (non-elemental combat casting)
- All 6 subclass identities with 2 concrete features each
- Melee weapon damage dice, thrown weapons, ranged weapon range bands, Fighter's missing Dodge modifiers
- Every stubbed Minor and Major Feat given real mechanical text
- Sneak Attack rounds and Flanking rules (tied into the existing Exposed/Duelist mechanics rather than bolted on)
- Death-vs-injury conflict given a proposed merge (real death stays, but a Grade 1-5 injury system softens the landing on a stabilize)
- "Vigor"/"Vitality" naming standardized to Vitality

**Still genuinely open — needs actual play, not more writing:**
- None of this has been rolled at a table yet. Numbers (damage dice, TNs, feat bonuses) are first-draft and will need balance passes after a session or two
- The Experimental 6-segmented skill tree is still just a sketch — a real decision on whether it ships at all
- Whether Assassin's stacking-Exposed and Arcanist's 4-modifier cap-break are too strong relative to Warmaster/Spellblade/Trickster needs playtesting, not more theorycrafting
`;function We(e){let t=e.split(`
`),n=[],r=null;for(let e of t){let t=/^##\s+(.*)/.exec(e);t?(r&&n.push(r),r={title:t[1].trim(),body:``}):r&&(r.body+=e+`
`)}return r&&n.push(r),n}var Q=We(Ue);function Ge(e){let t=e.trim().toLowerCase();return t?Q.filter(e=>e.title.toLowerCase().includes(t)||e.body.toLowerCase().includes(t)):Q}var $=i();function Ke(){let[e,t]=(0,o.useState)(``),r=(0,o.useMemo)(()=>Ge(e),[e]);return(0,$.jsxs)(`div`,{className:`mx-auto max-w-4xl`,children:[(0,$.jsxs)(`h1`,{className:`mb-1 flex items-center gap-2 font-display text-3xl text-parchment-100`,children:[(0,$.jsx)(n,{size:26,className:`text-brass-400`}),` Rules Compendium`]}),(0,$.jsxs)(`p`,{className:`mb-6 text-sm text-parchment-500`,children:[`The full text of core-rules.md, searchable. `,Q.length,` sections.`]}),(0,$.jsxs)(`div`,{className:`mb-6 flex items-center gap-2 rounded-md border border-ink-700 bg-ink-900/60 px-3 py-2`,children:[(0,$.jsx)(a,{size:16,className:`text-parchment-600`}),(0,$.jsx)(`input`,{value:e,onChange:e=>t(e.target.value),placeholder:`Search rules — e.g. “flanking”, “rage”, “bow”, “subclass”…`,className:`w-full bg-transparent text-parchment-100 placeholder:text-parchment-700 focus:outline-none`}),e&&(0,$.jsx)(`button`,{onClick:()=>t(``),className:`text-xs text-parchment-500 hover:text-brass-400`,children:`Clear`})]}),r.length===0&&(0,$.jsxs)(`p`,{className:`text-sm text-parchment-500`,children:[`No sections match “`,e,`.”`]}),(0,$.jsx)(`div`,{className:`space-y-8`,children:r.map(e=>(0,$.jsxs)(`section`,{id:e.title.toLowerCase().replace(/\s+/g,`-`),className:`rounded-lg border border-ink-700/60 bg-ink-900/40 p-5`,children:[(0,$.jsx)(`h2`,{className:`mb-3 font-display text-xl text-brass-300`,children:e.title}),(0,$.jsx)(`div`,{className:`compendium-body text-sm text-parchment-300`,dangerouslySetInnerHTML:{__html:Z.parse(e.body)}})]},e.title))})]})}export{Ke as default};