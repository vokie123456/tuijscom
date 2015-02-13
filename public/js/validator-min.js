/*!
 * Copyright (c) 2010 Chris O'Hara <cohara87@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(t,r){"function"==typeof define&&define.amd?define(["exports"],r):"object"==typeof exports?r(exports):r(t)}(this,function(t){function r(t){if(/^(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)$/.test(t)){var r=t.split(".").sort();return r[3]>255?!1:!0}return!1}function i(t){return/^::|^::1|^([a-fA-F0-9]{1,4}::?){1,7}([a-fA-F0-9]{1,4})$/.test(t)?!0:!1}function e(t){if(t instanceof Date)return t;var r=Date.parse(t);return isNaN(r)?null:new Date(r)}var s={"&nbsp;":"\u00a0","&iexcl;":"\u00a1","&cent;":"\u00a2","&pound;":"\u00a3","&curren;":"\u20ac","&yen;":"\u00a5","&brvbar;":"\u0160","&sect;":"\u00a7","&uml;":"\u0161","&copy;":"\u00a9","&ordf;":"\u00aa","&laquo;":"\u00ab","&not;":"\u00ac","&shy;":"\u00ad","&reg;":"\u00ae","&macr;":"\u00af","&deg;":"\u00b0","&plusmn;":"\u00b1","&sup2;":"\u00b2","&sup3;":"\u00b3","&acute;":"\u017d","&micro;":"\u00b5","&para;":"\u00b6","&middot;":"\u00b7","&cedil;":"\u017e","&sup1;":"\u00b9","&ordm;":"\u00ba","&raquo;":"\u00bb","&frac14;":"\u0152","&frac12;":"\u0153","&frac34;":"\u0178","&iquest;":"\u00bf","&Agrave;":"\u00c0","&Aacute;":"\u00c1","&Acirc;":"\u00c2","&Atilde;":"\u00c3","&Auml;":"\u00c4","&Aring;":"\u00c5","&AElig;":"\u00c6","&Ccedil;":"\u00c7","&Egrave;":"\u00c8","&Eacute;":"\u00c9","&Ecirc;":"\u00ca","&Euml;":"\u00cb","&Igrave;":"\u00cc","&Iacute;":"\u00cd","&Icirc;":"\u00ce","&Iuml;":"\u00cf","&ETH;":"\u00d0","&Ntilde;":"\u00d1","&Ograve;":"\u00d2","&Oacute;":"\u00d3","&Ocirc;":"\u00d4","&Otilde;":"\u00d5","&Ouml;":"\u00d6","&times;":"\u00d7","&Oslash;":"\u00d8","&Ugrave;":"\u00d9","&Uacute;":"\u00da","&Ucirc;":"\u00db","&Uuml;":"\u00dc","&Yacute;":"\u00dd","&THORN;":"\u00de","&szlig;":"\u00df","&agrave;":"\u00e0","&aacute;":"\u00e1","&acirc;":"\u00e2","&atilde;":"\u00e3","&auml;":"\u00e4","&aring;":"\u00e5","&aelig;":"\u00e6","&ccedil;":"\u00e7","&egrave;":"\u00e8","&eacute;":"\u00e9","&ecirc;":"\u00ea","&euml;":"\u00eb","&igrave;":"\u00ec","&iacute;":"\u00ed","&icirc;":"\u00ee","&iuml;":"\u00ef","&eth;":"\u00f0","&ntilde;":"\u00f1","&ograve;":"\u00f2","&oacute;":"\u00f3","&ocirc;":"\u00f4","&otilde;":"\u00f5","&ouml;":"\u00f6","&divide;":"\u00f7","&oslash;":"\u00f8","&ugrave;":"\u00f9","&uacute;":"\u00fa","&ucirc;":"\u00fb","&uuml;":"\u00fc","&yacute;":"\u00fd","&thorn;":"\u00fe","&yuml;":"\u00ff","&quot;":'"',"&lt;":"<","&gt;":">","&apos;":"'","&minus;":"\u2212","&circ;":"\u02c6","&tilde;":"\u02dc","&Scaron;":"\u0160","&lsaquo;":"\u2039","&OElig;":"\u0152","&lsquo;":"\u2018","&rsquo;":"\u2019","&ldquo;":"\u201c","&rdquo;":"\u201d","&bull;":"\u2022","&ndash;":"\u2013","&mdash;":"\u2014","&trade;":"\u2122","&scaron;":"\u0161","&rsaquo;":"\u203a","&oelig;":"\u0153","&Yuml;":"\u0178","&fnof;":"\u0192","&Alpha;":"\u0391","&Beta;":"\u0392","&Gamma;":"\u0393","&Delta;":"\u0394","&Epsilon;":"\u0395","&Zeta;":"\u0396","&Eta;":"\u0397","&Theta;":"\u0398","&Iota;":"\u0399","&Kappa;":"\u039a","&Lambda;":"\u039b","&Mu;":"\u039c","&Nu;":"\u039d","&Xi;":"\u039e","&Omicron;":"\u039f","&Pi;":"\u03a0","&Rho;":"\u03a1","&Sigma;":"\u03a3","&Tau;":"\u03a4","&Upsilon;":"\u03a5","&Phi;":"\u03a6","&Chi;":"\u03a7","&Psi;":"\u03a8","&Omega;":"\u03a9","&alpha;":"\u03b1","&beta;":"\u03b2","&gamma;":"\u03b3","&delta;":"\u03b4","&epsilon;":"\u03b5","&zeta;":"\u03b6","&eta;":"\u03b7","&theta;":"\u03b8","&iota;":"\u03b9","&kappa;":"\u03ba","&lambda;":"\u03bb","&mu;":"\u03bc","&nu;":"\u03bd","&xi;":"\u03be","&omicron;":"\u03bf","&pi;":"\u03c0","&rho;":"\u03c1","&sigmaf;":"\u03c2","&sigma;":"\u03c3","&tau;":"\u03c4","&upsilon;":"\u03c5","&phi;":"\u03c6","&chi;":"\u03c7","&psi;":"\u03c8","&omega;":"\u03c9","&thetasym;":"\u03d1","&upsih;":"\u03d2","&piv;":"\u03d6","&ensp;":"\u2002","&emsp;":"\u2003","&thinsp;":"\u2009","&zwnj;":"\u200c","&zwj;":"\u200d","&lrm;":"\u200e","&rlm;":"\u200f","&sbquo;":"\u201a","&bdquo;":"\u201e","&dagger;":"\u2020","&Dagger;":"\u2021","&hellip;":"\u2026","&permil;":"\u2030","&prime;":"\u2032","&Prime;":"\u2033","&oline;":"\u203e","&frasl;":"\u2044","&euro;":"\u20ac","&image;":"\u2111","&weierp;":"\u2118","&real;":"\u211c","&alefsym;":"\u2135","&larr;":"\u2190","&uarr;":"\u2191","&rarr;":"\u2192","&darr;":"\u2193","&harr;":"\u2194","&crarr;":"\u21b5","&lArr;":"\u21d0","&uArr;":"\u21d1","&rArr;":"\u21d2","&dArr;":"\u21d3","&hArr;":"\u21d4","&forall;":"\u2200","&part;":"\u2202","&exist;":"\u2203","&empty;":"\u2205","&nabla;":"\u2207","&isin;":"\u2208","&notin;":"\u2209","&ni;":"\u220b","&prod;":"\u220f","&sum;":"\u2211","&lowast;":"\u2217","&radic;":"\u221a","&prop;":"\u221d","&infin;":"\u221e","&ang;":"\u2220","&and;":"\u2227","&or;":"\u2228","&cap;":"\u2229","&cup;":"\u222a","&int;":"\u222b","&there4;":"\u2234","&sim;":"\u223c","&cong;":"\u2245","&asymp;":"\u2248","&ne;":"\u2260","&equiv;":"\u2261","&le;":"\u2264","&ge;":"\u2265","&sub;":"\u2282","&sup;":"\u2283","&nsub;":"\u2284","&sube;":"\u2286","&supe;":"\u2287","&oplus;":"\u2295","&otimes;":"\u2297","&perp;":"\u22a5","&sdot;":"\u22c5","&lceil;":"\u2308","&rceil;":"\u2309","&lfloor;":"\u230a","&rfloor;":"\u230b","&lang;":"\u2329","&rang;":"\u232a","&loz;":"\u25ca","&spades;":"\u2660","&clubs;":"\u2663","&hearts;":"\u2665","&diams;":"\u2666"},o=function(t){if(!~t.indexOf("&"))return t;for(var r in s)t=t.replace(new RegExp(r,"g"),s[r]);return t=t.replace(/&#x(0*[0-9a-f]{2,5});?/gi,function(t,r){return String.fromCharCode(parseInt(+r,16))}),t=t.replace(/&#([0-9]{2,4});?/gi,function(t,r){return String.fromCharCode(+r)}),t=t.replace(/&amp;/g,"&")},n=function(t){t=t.replace(/&/g,"&amp;"),t=t.replace(/'/g,"&#39;");for(var r in s)t=t.replace(new RegExp(s[r],"g"),r);return t};t.entities={encode:n,decode:o};var a=t.Validator=function(){};a.prototype.check=function(t,r){return this.str="undefined"==typeof t||null===t||isNaN(t)&&void 0===t.length?"":t+"",this.msg=r,this._errors=this._errors||[],this},a.prototype.validate=a.prototype.check,a.prototype.assert=a.prototype.check,a.prototype.error=function(t){throw new Error(t)},a.prototype.isAfter=function(t){t=t||new Date;var r=e(this.str),i=e(t);return r&&i&&r>=i?this:this.error(this.msg||"Invalid date")},a.prototype.isBefore=function(t){t=t||new Date;var r=e(this.str),i=e(t);return r&&i&&i>=r?this:this.error(this.msg||"Invalid date")},a.prototype.isEmail=function(){return this.str.match(/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/)?this:this.error(this.msg||"Invalid email")},a.prototype.isCreditCard=function(){if(this.str=this.str.replace(/[^0-9]+/g,""),!this.str.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/))return this.error(this.msg||"Invalid credit card");for(var t,r,i=0,e=!1,s=this.length-1;s>=0;s--)t=this.substring(s,s+1),r=parseInt(t,10),e?(r*=2,i+=r>=10?r%10+1:r):i+=r,e=e?!1:!0;return i%10!==0?this.error(this.msg||"Invalid credit card"):this},a.prototype.isUrl=function(){return!this.str.match(/^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i)||this.str.length>2083?this.error(this.msg||"Invalid URL"):this},a.prototype.isIPv4=function(){return r(this.str)?this:this.error(this.msg||"Invalid IP")},a.prototype.isIPv6=function(){return i(this.str)?this:this.error(this.msg||"Invalid IP")},a.prototype.isIP=function(){return r(this.str)||i(this.str)?this:this.error(this.msg||"Invalid IP")},a.prototype.isAlpha=function(){return this.str.match(/^[a-zA-Z]+$/)?this:this.error(this.msg||"Invalid characters")},a.prototype.isAlphanumeric=function(){return this.str.match(/^[a-zA-Z0-9]+$/)?this:this.error(this.msg||"Invalid characters")},a.prototype.isNumeric=function(){return this.str.match(/^-?[0-9]+$/)?this:this.error(this.msg||"Invalid number")},a.prototype.isHexadecimal=function(){return this.str.match(/^[0-9a-fA-F]+$/)?this:this.error(this.msg||"Invalid hexadecimal")},a.prototype.isHexColor=function(){return this.str.match(/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)?this:this.error(this.msg||"Invalid hexcolor")},a.prototype.isLowercase=function(){return this.str!==this.str.toLowerCase()?this.error(this.msg||"Invalid characters"):this},a.prototype.isUppercase=function(){return this.str!==this.str.toUpperCase()?this.error(this.msg||"Invalid characters"):this},a.prototype.isInt=function(){return this.str.match(/^(?:-?(?:0|[1-9][0-9]*))$/)?this:this.error(this.msg||"Invalid integer")},a.prototype.isDecimal=function(){return this.str.match(/^(?:-?(?:0|[1-9][0-9]*))?(?:\.[0-9]*)?$/)?this:this.error(this.msg||"Invalid decimal")},a.prototype.isDivisibleBy=function(t){return parseFloat(this.str)%parseInt(t,10)===0},a.prototype.isFloat=function(){return this.isDecimal()},a.prototype.notNull=function(){return""===this.str?this.error(this.msg||"String is empty"):this},a.prototype.isNull=function(){return""!==this.str?this.error(this.msg||"String is not empty"):this},a.prototype.notEmpty=function(){return this.str.match(/^[\s\t\r\n]*$/)?this.error(this.msg||"String is whitespace"):this},a.prototype.equals=function(t){return this.str!=t?this.error(this.msg||"Not equal"):this},a.prototype.contains=function(t){return-1!==this.str.indexOf(t)&&t?this:this.error(this.msg||"Invalid characters")},a.prototype.notContains=function(t){return this.str.indexOf(t)>=0?this.error(this.msg||"Invalid characters"):this},a.prototype.regex=a.prototype.is=function(t,r){return"RegExp"!==Object.prototype.toString.call(t).slice(8,-1)&&(t=new RegExp(t,r)),this.str.match(t)?this:this.error(this.msg||"Invalid characters")},a.prototype.notRegex=a.prototype.not=function(t,r){return"RegExp"!==Object.prototype.toString.call(t).slice(8,-1)&&(t=new RegExp(t,r)),this.str.match(t)&&this.error(this.msg||"Invalid characters"),this},a.prototype.len=function(t,r){return this.str.length<t?this.error(this.msg||"String is too small"):void 0!==typeof r&&this.str.length>r?this.error(this.msg||"String is too large"):this},a.prototype.isUUID=function(t){var r;return r=3==t||"v3"==t?/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i:4==t||"v4"==t?/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i:5==t||"v5"==t?/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,this.str.match(r)?this:this.error(this.msg||"Not a UUID")},a.prototype.isUUIDv3=function(){return this.isUUID(3)},a.prototype.isUUIDv4=function(){return this.isUUID(4)},a.prototype.isUUIDv5=function(){return this.isUUID(5)},a.prototype.isDate=function(){var t=Date.parse(this.str);return isNaN(t)?this.error(this.msg||"Not a date"):this},a.prototype.isIn=function(t){return t&&"function"==typeof t.indexOf?~t.indexOf(this.str)?this:this.error(this.msg||"Unexpected value"):this.error(this.msg||"Invalid in() argument")},a.prototype.notIn=function(t){return t&&"function"==typeof t.indexOf?-1!==t.indexOf(this.str)?this.error(this.msg||"Unexpected value"):this:this.error(this.msg||"Invalid notIn() argument")},a.prototype.min=function(t){var r=parseFloat(this.str);return!isNaN(r)&&t>r?this.error(this.msg||"Invalid number"):this},a.prototype.max=function(t){var r=parseFloat(this.str);return!isNaN(r)&&r>t?this.error(this.msg||"Invalid number"):this};var h=t.Filter=function(){},u="\\r\\n\\t\\s";return h.prototype.modify=function(t){this.str=t},h.prototype.convert=h.prototype.sanitize=function(t){return this.str=null==t?"":t+"",this},h.prototype.entityDecode=function(){return this.modify(o(this.str)),this.str},h.prototype.entityEncode=function(){return this.modify(n(this.str)),this.str},h.prototype.escape=function(){return this.modify(this.str.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")),this.str},h.prototype.ltrim=function(t){return t=t||u,this.modify(this.str.replace(new RegExp("^["+t+"]+","g"),"")),this.str},h.prototype.rtrim=function(t){return t=t||u,this.modify(this.str.replace(new RegExp("["+t+"]+$","g"),"")),this.str},h.prototype.trim=function(t){return t=t||u,this.modify(this.str.replace(new RegExp("^["+t+"]+|["+t+"]+$","g"),"")),this.str},h.prototype.ifNull=function(t){return this.str&&""!==this.str||this.modify(t),this.str},h.prototype.toFloat=function(){return this.modify(parseFloat(this.str)),this.str},h.prototype.toInt=function(t){return t=t||10,this.modify(parseInt(this.str,t)),this.str},h.prototype.toBoolean=function(){return this.str&&"0"!=this.str&&"false"!=this.str&&""!=this.str?this.modify(!0):this.modify(!1),this.str},h.prototype.toBooleanStrict=function(){return"1"==this.str||"true"==this.str?this.modify(!0):this.modify(!1),this.str},t.sanitize=t.convert=function(r){var i=new t.Filter;return i.sanitize(r)},t.check=t.validate=t.assert=function(r,i){var e=new t.Validator;return e.check(r,i)},t});