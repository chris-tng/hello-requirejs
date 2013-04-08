/**
 * Author: tuna
 * Date: 4/1/13
 * Time: 5:26 PM
 */
/*!
 * jQuery JavaScript Library v1.7.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Nov 21 21:11:03 2011 -0500
 */
/* second portion of corejs */
(function (bc, M) {
    var aw = bc.document,
        bv = bc.navigator,
        bm = bc.location;
    var b = (function () {
        var bG = function (b1, b2) {
                return new bG.fn.init(b1, b2, bE)
            }, bV = bc.jQuery,
            bI = bc.$,
            bE, bZ = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            bN = /\S/,
            bJ = /^\s+/,
            bF = /\s+$/,
            bB = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
            bO = /^[\],:{}\s]*$/,
            bX = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            bQ = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            bK = /(?:^|:|,)(?:\s*\[)+/g,
            bz = /(webkit)[ \/]([\w.]+)/,
            bS = /(opera)(?:.*version)?[ \/]([\w.]+)/,
            bR = /(msie) ([\w.]+)/,
            bT = /(mozilla)(?:.*? rv:([\w.]+))?/,
            bC = /-([a-z]|[0-9])/ig,
            b0 = /^-ms-/,
            bU = function (b1, b2) {
                return (b2 + "").toUpperCase()
            }, bY = bv.userAgent,
            bW, bD, e, bM = Object.prototype.toString,
            bH = Object.prototype.hasOwnProperty,
            bA = Array.prototype.push,
            bL = Array.prototype.slice,
            bP = String.prototype.trim,
            bw = Array.prototype.indexOf,
            by = {};
        bG.fn = bG.prototype = {
            constructor: bG,
            init: function (b1, b5, b4) {
                var b3, b6, b2, b7;
                if (!b1) {
                    return this
                }
                if (b1.nodeType) {
                    this.context = this[0] = b1;
                    this.length = 1;
                    return this
                }
                if (b1 === "body" && !b5 && aw.body) {
                    this.context = aw;
                    this[0] = aw.body;
                    this.selector = b1;
                    this.length = 1;
                    return this
                }
                if (typeof b1 === "string") {
                    if (b1.charAt(0) === "<" && b1.charAt(b1.length - 1) === ">" && b1.length >= 3) {
                        b3 = [null, b1, null]
                    } else {
                        b3 = bZ.exec(b1)
                    } if (b3 && (b3[1] || !b5)) {
                        if (b3[1]) {
                            b5 = b5 instanceof bG ? b5[0] : b5;
                            b7 = (b5 ? b5.ownerDocument || b5 : aw);
                            b2 = bB.exec(b1);
                            if (b2) {
                                if (bG.isPlainObject(b5)) {
                                    b1 = [aw.createElement(b2[1])];
                                    bG.fn.attr.call(b1, b5, true)
                                } else {
                                    b1 = [b7.createElement(b2[1])]
                                }
                            } else {
                                b2 = bG.buildFragment([b3[1]], [b7]);
                                b1 = (b2.cacheable ? bG.clone(b2.fragment) : b2.fragment).childNodes
                            }
                            return bG.merge(this, b1)
                        } else {
                            b6 = aw.getElementById(b3[2]);
                            if (b6 && b6.parentNode) {
                                if (b6.id !== b3[2]) {
                                    return b4.find(b1)
                                }
                                this.length = 1;
                                this[0] = b6
                            }
                            this.context = aw;
                            this.selector = b1;
                            return this
                        }
                    } else {
                        if (!b5 || b5.jquery) {
                            return (b5 || b4).find(b1)
                        } else {
                            return this.constructor(b5).find(b1)
                        }
                    }
                } else {
                    if (bG.isFunction(b1)) {
                        return b4.ready(b1)
                    }
                } if (b1.selector !== M) {
                    this.selector = b1.selector;
                    this.context = b1.context
                }
                return bG.makeArray(b1, this)
            },
            selector: "",
            jquery: "1.7.1",
            length: 0,
            size: function () {
                return this.length
            },
            toArray: function () {
                return bL.call(this, 0)
            },
            get: function (b1) {
                return b1 == null ? this.toArray() : (b1 < 0 ? this[this.length + b1] : this[b1])
            },
            pushStack: function (b2, b4, b1) {
                var b3 = this.constructor();
                if (bG.isArray(b2)) {
                    bA.apply(b3, b2)
                } else {
                    bG.merge(b3, b2)
                }
                b3.prevObject = this;
                b3.context = this.context;
                if (b4 === "find") {
                    b3.selector = this.selector + (this.selector ? " " : "") + b1
                } else {
                    if (b4) {
                        b3.selector = this.selector + "." + b4 + "(" + b1 + ")"
                    }
                }
                return b3
            },
            each: function (b2, b1) {
                return bG.each(this, b2, b1)
            },
            ready: function (b1) {
                bG.bindReady();
                bD.add(b1);
                return this
            },
            eq: function (b1) {
                b1 = +b1;
                return b1 === -1 ? this.slice(b1) : this.slice(b1, b1 + 1)
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            slice: function () {
                return this.pushStack(bL.apply(this, arguments), "slice", bL.call(arguments).join(","))
            },
            map: function (b1) {
                return this.pushStack(bG.map(this, function (b3, b2) {
                    return b1.call(b3, b2, b3)
                }))
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: bA,
            sort: [].sort,
            splice: [].splice
        };
        bG.fn.init.prototype = bG.fn;
        bG.extend = bG.fn.extend = function () {
            var ca, b3, b1, b2, b7, b8, b6 = arguments[0] || {}, b5 = 1,
                b4 = arguments.length,
                b9 = false;
            if (typeof b6 === "boolean") {
                b9 = b6;
                b6 = arguments[1] || {};
                b5 = 2
            }
            if (typeof b6 !== "object" && !bG.isFunction(b6)) {
                b6 = {}
            }
            if (b4 === b5) {
                b6 = this;
                --b5
            }
            for (; b5 < b4; b5++) {
                if ((ca = arguments[b5]) != null) {
                    for (b3 in ca) {
                        b1 = b6[b3];
                        b2 = ca[b3];
                        if (b6 === b2) {
                            continue
                        }
                        if (b9 && b2 && (bG.isPlainObject(b2) || (b7 = bG.isArray(b2)))) {
                            if (b7) {
                                b7 = false;
                                b8 = b1 && bG.isArray(b1) ? b1 : []
                            } else {
                                b8 = b1 && bG.isPlainObject(b1) ? b1 : {}
                            }
                            b6[b3] = bG.extend(b9, b8, b2)
                        } else {
                            if (b2 !== M) {
                                b6[b3] = b2
                            }
                        }
                    }
                }
            }
            return b6
        };
        bG.extend({
            noConflict: function (b1) {
                if (bc.$ === bG) {
                    bc.$ = bI
                }
                if (b1 && bc.jQuery === bG) {
                    bc.jQuery = bV
                }
                return bG
            },
            isReady: false,
            readyWait: 1,
            holdReady: function (b1) {
                if (b1) {
                    bG.readyWait++
                } else {
                    bG.ready(true)
                }
            },
            ready: function (b1) {
                if ((b1 === true && !--bG.readyWait) || (b1 !== true && !bG.isReady)) {
                    if (!aw.body) {
                        return setTimeout(bG.ready, 1)
                    }
                    bG.isReady = true;
                    if (b1 !== true && --bG.readyWait > 0) {
                        return
                    }
                    bD.fireWith(aw, [bG]);
                    if (bG.fn.trigger) {
                        bG(aw).trigger("ready").off("ready")
                    }
                }
            },
            bindReady: function () {
                if (bD) {
                    return
                }
                bD = bG.Callbacks("once memory");
                if (aw.readyState === "complete") {
                    return setTimeout(bG.ready, 1)
                }
                if (aw.addEventListener) {
                    aw.addEventListener("DOMContentLoaded", e, false);
                    bc.addEventListener("load", bG.ready, false)
                } else {
                    if (aw.attachEvent) {
                        aw.attachEvent("onreadystatechange", e);
                        bc.attachEvent("onload", bG.ready);
                        var b1 = false;
                        try {
                            b1 = bc.frameElement == null
                        } catch (b2) {}
                        if (aw.documentElement.doScroll && b1) {
                            bx()
                        }
                    }
                }
            },
            isFunction: function (b1) {
                return bG.type(b1) === "function"
            },
            isArray: Array.isArray || function (b1) {
                return bG.type(b1) === "array"
            },
            isWindow: function (b1) {
                return b1 && typeof b1 === "object" && "setInterval" in b1
            },
            isNumeric: function (b1) {
                return !isNaN(parseFloat(b1)) && isFinite(b1)
            },
            type: function (b1) {
                return b1 == null ? String(b1) : by[bM.call(b1)] || "object"
            },
            isPlainObject: function (b3) {
                if (!b3 || bG.type(b3) !== "object" || b3.nodeType || bG.isWindow(b3)) {
                    return false
                }
                try {
                    if (b3.constructor && !bH.call(b3, "constructor") && !bH.call(b3.constructor.prototype, "isPrototypeOf")) {
                        return false
                    }
                } catch (b2) {
                    return false
                }
                var b1;
                for (b1 in b3) {}
                return b1 === M || bH.call(b3, b1)
            },
            isEmptyObject: function (b2) {
                for (var b1 in b2) {
                    return false
                }
                return true
            },
            error: function (b1) {
                throw new Error(b1)
            },
            parseJSON: function (b1) {
                if (typeof b1 !== "string" || !b1) {
                    return null
                }
                b1 = bG.trim(b1);
                if (bc.JSON && bc.JSON.parse) {
                    return bc.JSON.parse(b1)
                }
                if (bO.test(b1.replace(bX, "@").replace(bQ, "]").replace(bK, ""))) {
                    return (new Function("return " + b1))()
                }
                bG.error("Invalid JSON: " + b1)
            },
            parseXML: function (b3) {
                var b1, b2;
                try {
                    if (bc.DOMParser) {
                        b2 = new DOMParser();
                        b1 = b2.parseFromString(b3, "text/xml")
                    } else {
                        b1 = new ActiveXObject("Microsoft.XMLDOM");
                        b1.async = "false";
                        b1.loadXML(b3)
                    }
                } catch (b4) {
                    b1 = M
                }
                if (!b1 || !b1.documentElement || b1.getElementsByTagName("parsererror").length) {
                    bG.error("Invalid XML: " + b3)
                }
                return b1
            },
            noop: function () {},
            globalEval: function (b1) {
                if (b1 && bN.test(b1)) {
                    (bc.execScript || function (b2) {
                        bc["eval"].call(bc, b2)
                    })(b1)
                }
            },
            camelCase: function (b1) {
                return b1.replace(b0, "ms-").replace(bC, bU)
            },
            nodeName: function (b2, b1) {
                return b2.nodeName && b2.nodeName.toUpperCase() === b1.toUpperCase()
            },
            each: function (b4, b7, b3) {
                var b2, b5 = 0,
                    b6 = b4.length,
                    b1 = b6 === M || bG.isFunction(b4);
                if (b3) {
                    if (b1) {
                        for (b2 in b4) {
                            if (b7.apply(b4[b2], b3) === false) {
                                break
                            }
                        }
                    } else {
                        for (; b5 < b6;) {
                            if (b7.apply(b4[b5++], b3) === false) {
                                break
                            }
                        }
                    }
                } else {
                    if (b1) {
                        for (b2 in b4) {
                            if (b7.call(b4[b2], b2, b4[b2]) === false) {
                                break
                            }
                        }
                    } else {
                        for (; b5 < b6;) {
                            if (b7.call(b4[b5], b5, b4[b5++]) === false) {
                                break
                            }
                        }
                    }
                }
                return b4
            },
            trim: bP ? function (b1) {
                return b1 == null ? "" : bP.call(b1)
            } : function (b1) {
                return b1 == null ? "" : b1.toString().replace(bJ, "").replace(bF, "")
            },
            makeArray: function (b4, b2) {
                var b1 = b2 || [];
                if (b4 != null) {
                    var b3 = bG.type(b4);
                    if (b4.length == null || b3 === "string" || b3 === "function" || b3 === "regexp" || bG.isWindow(b4)) {
                        bA.call(b1, b4)
                    } else {
                        bG.merge(b1, b4)
                    }
                }
                return b1
            },
            inArray: function (b3, b4, b2) {
                var b1;
                if (b4) {
                    if (bw) {
                        return bw.call(b4, b3, b2)
                    }
                    b1 = b4.length;
                    b2 = b2 ? b2 < 0 ? Math.max(0, b1 + b2) : b2 : 0;
                    for (; b2 < b1; b2++) {
                        if (b2 in b4 && b4[b2] === b3) {
                            return b2
                        }
                    }
                }
                return -1
            },
            merge: function (b5, b3) {
                var b4 = b5.length,
                    b2 = 0;
                if (typeof b3.length === "number") {
                    for (var b1 = b3.length; b2 < b1; b2++) {
                        b5[b4++] = b3[b2]
                    }
                } else {
                    while (b3[b2] !== M) {
                        b5[b4++] = b3[b2++]
                    }
                }
                b5.length = b4;
                return b5
            },
            grep: function (b2, b7, b1) {
                var b3 = [],
                    b6;
                b1 = !! b1;
                for (var b4 = 0, b5 = b2.length; b4 < b5; b4++) {
                    b6 = !! b7(b2[b4], b4);
                    if (b1 !== b6) {
                        b3.push(b2[b4])
                    }
                }
                return b3
            },
            map: function (b1, b8, b9) {
                var b6, b7, b5 = [],
                    b3 = 0,
                    b2 = b1.length,
                    b4 = b1 instanceof bG || b2 !== M && typeof b2 === "number" && ((b2 > 0 && b1[0] && b1[b2 - 1]) || b2 === 0 || bG.isArray(b1));
                if (b4) {
                    for (; b3 < b2; b3++) {
                        b6 = b8(b1[b3], b3, b9);
                        if (b6 != null) {
                            b5[b5.length] = b6
                        }
                    }
                } else {
                    for (b7 in b1) {
                        b6 = b8(b1[b7], b7, b9);
                        if (b6 != null) {
                            b5[b5.length] = b6
                        }
                    }
                }
                return b5.concat.apply([], b5)
            },
            guid: 1,
            proxy: function (b5, b4) {
                if (typeof b4 === "string") {
                    var b3 = b5[b4];
                    b4 = b5;
                    b5 = b3
                }
                if (!bG.isFunction(b5)) {
                    return M
                }
                var b1 = bL.call(arguments, 2),
                    b2 = function () {
                        return b5.apply(b4, b1.concat(bL.call(arguments)))
                    };
                b2.guid = b5.guid = b5.guid || b2.guid || bG.guid++;
                return b2
            },
            access: function (b1, b9, b7, b3, b6, b8) {
                var b2 = b1.length;
                if (typeof b9 === "object") {
                    for (var b4 in b9) {
                        bG.access(b1, b4, b9[b4], b3, b6, b7)
                    }
                    return b1
                }
                if (b7 !== M) {
                    b3 = !b8 && b3 && bG.isFunction(b7);
                    for (var b5 = 0; b5 < b2; b5++) {
                        b6(b1[b5], b9, b3 ? b7.call(b1[b5], b5, b6(b1[b5], b9)) : b7, b8)
                    }
                    return b1
                }
                return b2 ? b6(b1[0], b9) : M
            },
            now: function () {
                return (new Date()).getTime()
            },
            uaMatch: function (b2) {
                b2 = b2.toLowerCase();
                var b1 = bz.exec(b2) || bS.exec(b2) || bR.exec(b2) || b2.indexOf("compatible") < 0 && bT.exec(b2) || [];
                return {
                    browser: b1[1] || "",
                    version: b1[2] || "0"
                }
            },
            sub: function () {
                function b1(b4, b5) {
                    return new b1.fn.init(b4, b5)
                }
                bG.extend(true, b1, this);
                b1.superclass = this;
                b1.fn = b1.prototype = this();
                b1.fn.constructor = b1;
                b1.sub = this.sub;
                b1.fn.init = function b3(b4, b5) {
                    if (b5 && b5 instanceof bG && !(b5 instanceof b1)) {
                        b5 = b1(b5)
                    }
                    return bG.fn.init.call(this, b4, b5, b2)
                };
                b1.fn.init.prototype = b1.fn;
                var b2 = b1(aw);
                return b1
            },
            browser: {}
        });
        bG.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (b2, b1) {
            by["[object " + b1 + "]"] = b1.toLowerCase()
        });
        bW = bG.uaMatch(bY);
        if (bW.browser) {
            bG.browser[bW.browser] = true;
            bG.browser.version = bW.version
        }
        if (bG.browser.webkit) {
            bG.browser.safari = true
        }
        if (bN.test("\xA0")) {
            bJ = /^[\s\xA0]+/;
            bF = /[\s\xA0]+$/
        }
        bE = bG(aw);
        if (aw.addEventListener) {
            e = function () {
                aw.removeEventListener("DOMContentLoaded", e, false);
                bG.ready()
            }
        } else {
            if (aw.attachEvent) {
                e = function () {
                    if (aw.readyState === "complete") {
                        aw.detachEvent("onreadystatechange", e);
                        bG.ready()
                    }
                }
            }
        }
        function bx() {
            if (bG.isReady) {
                return
            }
            try {
                aw.documentElement.doScroll("left")
            } catch (b1) {
                setTimeout(bx, 1);
                return
            }
            bG.ready()
        }
        return bG
    })();
    var a3 = {};

    function Y(e) {
        var bw = a3[e] = {}, bx, by;
        e = e.split(/\s+/);
        for (bx = 0, by = e.length; bx < by; bx++) {
            bw[e[bx]] = true
        }
        return bw
    }
    b.Callbacks = function (bx) {
        bx = bx ? (a3[bx] || Y(bx)) : {};
        var bC = [],
            bD = [],
            by, bz, bw, bA, bB, bF = function (bG) {
                var bH, bK, bJ, bI, bL;
                for (bH = 0, bK = bG.length; bH < bK; bH++) {
                    bJ = bG[bH];
                    bI = b.type(bJ);
                    if (bI === "array") {
                        bF(bJ)
                    } else {
                        if (bI === "function") {
                            if (!bx.unique || !bE.has(bJ)) {
                                bC.push(bJ)
                            }
                        }
                    }
                }
            }, e = function (bH, bG) {
                bG = bG || [];
                by = !bx.memory || [bH, bG];
                bz = true;
                bB = bw || 0;
                bw = 0;
                bA = bC.length;
                for (; bC && bB < bA; bB++) {
                    if (bC[bB].apply(bH, bG) === false && bx.stopOnFalse) {
                        by = true;
                        break
                    }
                }
                bz = false;
                if (bC) {
                    if (!bx.once) {
                        if (bD && bD.length) {
                            by = bD.shift();
                            bE.fireWith(by[0], by[1])
                        }
                    } else {
                        if (by === true) {
                            bE.disable()
                        } else {
                            bC = []
                        }
                    }
                }
            }, bE = {
                add: function () {
                    if (bC) {
                        var bG = bC.length;
                        bF(arguments);
                        if (bz) {
                            bA = bC.length
                        } else {
                            if (by && by !== true) {
                                bw = bG;
                                e(by[0], by[1])
                            }
                        }
                    }
                    return this
                },
                remove: function () {
                    if (bC) {
                        var bG = arguments,
                            bI = 0,
                            bJ = bG.length;
                        for (; bI < bJ; bI++) {
                            for (var bH = 0; bH < bC.length; bH++) {
                                if (bG[bI] === bC[bH]) {
                                    if (bz) {
                                        if (bH <= bA) {
                                            bA--;
                                            if (bH <= bB) {
                                                bB--
                                            }
                                        }
                                    }
                                    bC.splice(bH--, 1);
                                    if (bx.unique) {
                                        break
                                    }
                                }
                            }
                        }
                    }
                    return this
                },
                has: function (bH) {
                    if (bC) {
                        var bG = 0,
                            bI = bC.length;
                        for (; bG < bI; bG++) {
                            if (bH === bC[bG]) {
                                return true
                            }
                        }
                    }
                    return false
                },
                empty: function () {
                    bC = [];
                    return this
                },
                disable: function () {
                    bC = bD = by = M;
                    return this
                },
                disabled: function () {
                    return !bC
                },
                lock: function () {
                    bD = M;
                    if (!by || by === true) {
                        bE.disable()
                    }
                    return this
                },
                locked: function () {
                    return !bD
                },
                fireWith: function (bH, bG) {
                    if (bD) {
                        if (bz) {
                            if (!bx.once) {
                                bD.push([bH, bG])
                            }
                        } else {
                            if (!(bx.once && by)) {
                                e(bH, bG)
                            }
                        }
                    }
                    return this
                },
                fire: function () {
                    bE.fireWith(this, arguments);
                    return this
                },
                fired: function () {
                    return !!by
                }
            };
        return bE
    };
    var aK = [].slice;
    b.extend({
        Deferred: function (bz) {
            var by = b.Callbacks("once memory"),
                bx = b.Callbacks("once memory"),
                bw = b.Callbacks("memory"),
                e = "pending",
                bB = {
                    resolve: by,
                    reject: bx,
                    notify: bw
                }, bD = {
                    done: by.add,
                    fail: bx.add,
                    progress: bw.add,
                    state: function () {
                        return e
                    },
                    isResolved: by.fired,
                    isRejected: bx.fired,
                    then: function (bF, bE, bG) {
                        bC.done(bF).fail(bE).progress(bG);
                        return this
                    },
                    always: function () {
                        bC.done.apply(bC, arguments).fail.apply(bC, arguments);
                        return this
                    },
                    pipe: function (bG, bF, bE) {
                        return b.Deferred(function (bH) {
                            b.each({
                                done: [bG, "resolve"],
                                fail: [bF, "reject"],
                                progress: [bE, "notify"]
                            }, function (bJ, bM) {
                                var bI = bM[0],
                                    bL = bM[1],
                                    bK;
                                if (b.isFunction(bI)) {
                                    bC[bJ](function () {
                                        bK = bI.apply(this, arguments);
                                        if (bK && b.isFunction(bK.promise)) {
                                            bK.promise().then(bH.resolve, bH.reject, bH.notify)
                                        } else {
                                            bH[bL + "With"](this === bC ? bH : this, [bK])
                                        }
                                    })
                                } else {
                                    bC[bJ](bH[bL])
                                }
                            })
                        }).promise()
                    },
                    promise: function (bF) {
                        if (bF == null) {
                            bF = bD
                        } else {
                            for (var bE in bD) {
                                bF[bE] = bD[bE]
                            }
                        }
                        return bF
                    }
                }, bC = bD.promise({}),
                bA;
            for (bA in bB) {
                bC[bA] = bB[bA].fire;
                bC[bA + "With"] = bB[bA].fireWith
            }
            bC.done(function () {
                e = "resolved"
            }, bx.disable, bw.lock).fail(function () {
                    e = "rejected"
                }, by.disable, bw.lock);
            if (bz) {
                bz.call(bC, bC)
            }
            return bC
        },
        when: function (bB) {
            var by = aK.call(arguments, 0),
                bw = 0,
                e = by.length,
                bC = new Array(e),
                bx = e,
                bz = e,
                bD = e <= 1 && bB && b.isFunction(bB.promise) ? bB : b.Deferred(),
                bF = bD.promise();

            function bE(bG) {
                return function (bH) {
                    by[bG] = arguments.length > 1 ? aK.call(arguments, 0) : bH;
                    if (!(--bx)) {
                        bD.resolveWith(bD, by)
                    }
                }
            }
            function bA(bG) {
                return function (bH) {
                    bC[bG] = arguments.length > 1 ? aK.call(arguments, 0) : bH;
                    bD.notifyWith(bF, bC)
                }
            }
            if (e > 1) {
                for (; bw < e; bw++) {
                    if (by[bw] && by[bw].promise && b.isFunction(by[bw].promise)) {
                        by[bw].promise().then(bE(bw), bD.reject, bA(bw))
                    } else {
                        --bx
                    }
                }
                if (!bx) {
                    bD.resolveWith(bD, by)
                }
            } else {
                if (bD !== bB) {
                    bD.resolveWith(bD, e ? [bB] : [])
                }
            }
            return bF
        }
    });
    b.support = (function () {
        var bK, bJ, bG, bH, by, bF, bB, bE, bA, bL, bC, bz, bx, bw = aw.createElement("div"),
            bI = aw.documentElement;
        bw.setAttribute("className", "t");
        bw.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        bJ = bw.getElementsByTagName("*");
        bG = bw.getElementsByTagName("a")[0];
        if (!bJ || !bJ.length || !bG) {
            return {}
        }
        bH = aw.createElement("select");
        by = bH.appendChild(aw.createElement("option"));
        bF = bw.getElementsByTagName("input")[0];
        bK = {
            leadingWhitespace: (bw.firstChild.nodeType === 3),
            tbody: !bw.getElementsByTagName("tbody").length,
            htmlSerialize: !! bw.getElementsByTagName("link").length,
            style: /top/.test(bG.getAttribute("style")),
            hrefNormalized: (bG.getAttribute("href") === "/a"),
            opacity: /^0.55/.test(bG.style.opacity),
            cssFloat: !! bG.style.cssFloat,
            checkOn: (bF.value === "on"),
            optSelected: by.selected,
            getSetAttribute: bw.className !== "t",
            enctype: !! aw.createElement("form").enctype,
            html5Clone: aw.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
            submitBubbles: true,
            changeBubbles: true,
            focusinBubbles: false,
            deleteExpando: true,
            noCloneEvent: true,
            inlineBlockNeedsLayout: false,
            shrinkWrapBlocks: false,
            reliableMarginRight: true
        };
        bF.checked = true;
        bK.noCloneChecked = bF.cloneNode(true).checked;
        bH.disabled = true;
        bK.optDisabled = !by.disabled;
        try {
            delete bw.test
        } catch (bD) {
            bK.deleteExpando = false
        }
        if (!bw.addEventListener && bw.attachEvent && bw.fireEvent) {
            bw.attachEvent("onclick", function () {
                bK.noCloneEvent = false
            });
            bw.cloneNode(true).fireEvent("onclick")
        }
        bF = aw.createElement("input");
        bF.value = "t";
        bF.setAttribute("type", "radio");
        bK.radioValue = bF.value === "t";
        bF.setAttribute("checked", "checked");
        bw.appendChild(bF);
        bE = aw.createDocumentFragment();
        bE.appendChild(bw.lastChild);
        bK.checkClone = bE.cloneNode(true).cloneNode(true).lastChild.checked;
        bK.appendChecked = bF.checked;
        bE.removeChild(bF);
        bE.appendChild(bw);
        bw.innerHTML = "";
        if (bc.getComputedStyle) {
            bB = aw.createElement("div");
            bB.style.width = "0";
            bB.style.marginRight = "0";
            bw.style.width = "2px";
            bw.appendChild(bB);
            bK.reliableMarginRight = (parseInt((bc.getComputedStyle(bB, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0
        }
        if (bw.attachEvent) {
            for (bz in {
                submit: 1,
                change: 1,
                focusin: 1
            }) {
                bC = "on" + bz;
                bx = (bC in bw);
                if (!bx) {
                    bw.setAttribute(bC, "return;");
                    bx = (typeof bw[bC] === "function")
                }
                bK[bz + "Bubbles"] = bx
            }
        }
        bE.removeChild(bw);
        bE = bH = by = bB = bw = bF = null;
        b(function () {
            var bN, bV, bW, bU, bO, bP, bM, bT, bS, e, bQ, bR = aw.getElementsByTagName("body")[0];
            if (!bR) {
                return
            }
            bM = 1;
            bT = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;";
            bS = "visibility:hidden;border:0;";
            e = "style='" + bT + "border:5px solid #000;padding:0;'";
            bQ = "<div " + e + "><div></div></div><table " + e + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            bN = aw.createElement("div");
            bN.style.cssText = bS + "width:0;height:0;position:static;top:0;margin-top:" + bM + "px";
            bR.insertBefore(bN, bR.firstChild);
            bw = aw.createElement("div");
            bN.appendChild(bw);
            bw.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
            bA = bw.getElementsByTagName("td");
            bx = (bA[0].offsetHeight === 0);
            bA[0].style.display = "";
            bA[1].style.display = "none";
            bK.reliableHiddenOffsets = bx && (bA[0].offsetHeight === 0);
            bw.innerHTML = "";
            bw.style.width = bw.style.paddingLeft = "1px";
            b.boxModel = bK.boxModel = bw.offsetWidth === 2;
            if (typeof bw.style.zoom !== "undefined") {
                bw.style.display = "inline";
                bw.style.zoom = 1;
                bK.inlineBlockNeedsLayout = (bw.offsetWidth === 2);
                bw.style.display = "";
                bw.innerHTML = "<div style='width:4px;'></div>";
                bK.shrinkWrapBlocks = (bw.offsetWidth !== 2)
            }
            bw.style.cssText = bT + bS;
            bw.innerHTML = bQ;
            bV = bw.firstChild;
            bW = bV.firstChild;
            bO = bV.nextSibling.firstChild.firstChild;
            bP = {
                doesNotAddBorder: (bW.offsetTop !== 5),
                doesAddBorderForTableAndCells: (bO.offsetTop === 5)
            };
            bW.style.position = "fixed";
            bW.style.top = "20px";
            bP.fixedPosition = (bW.offsetTop === 20 || bW.offsetTop === 15);
            bW.style.position = bW.style.top = "";
            bV.style.overflow = "hidden";
            bV.style.position = "relative";
            bP.subtractsBorderForOverflowNotVisible = (bW.offsetTop === -5);
            bP.doesNotIncludeMarginInBodyOffset = (bR.offsetTop !== bM);
            bR.removeChild(bN);
            bw = bN = null;
            b.extend(bK, bP)
        });
        return bK
    })();
    var aT = /^(?:\{.*\}|\[.*\])$/,
        aB = /([A-Z])/g;
    b.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (b.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: true
        },
        hasData: function (e) {
            e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando];
            return !!e && !T(e)
        },
        data: function (by, bw, bA, bz) {
            if (!b.acceptData(by)) {
                return
            }
            var bH, bB, bE, bF = b.expando,
                bD = typeof bw === "string",
                bG = by.nodeType,
                e = bG ? b.cache : by,
                bx = bG ? by[bF] : by[bF] && bF,
                bC = bw === "events";
            if ((!bx || !e[bx] || (!bC && !bz && !e[bx].data)) && bD && bA === M) {
                return
            }
            if (!bx) {
                if (bG) {
                    by[bF] = bx = ++b.uuid
                } else {
                    bx = bF
                }
            }
            if (!e[bx]) {
                e[bx] = {};
                if (!bG) {
                    e[bx].toJSON = b.noop
                }
            }
            if (typeof bw === "object" || typeof bw === "function") {
                if (bz) {
                    e[bx] = b.extend(e[bx], bw)
                } else {
                    e[bx].data = b.extend(e[bx].data, bw)
                }
            }
            bH = bB = e[bx];
            if (!bz) {
                if (!bB.data) {
                    bB.data = {}
                }
                bB = bB.data
            }
            if (bA !== M) {
                bB[b.camelCase(bw)] = bA
            }
            if (bC && !bB[bw]) {
                return bH.events
            }
            if (bD) {
                bE = bB[bw];
                if (bE == null) {
                    bE = bB[b.camelCase(bw)]
                }
            } else {
                bE = bB
            }
            return bE
        },
        removeData: function (by, bw, bz) {
            if (!b.acceptData(by)) {
                return
            }
            var bC, bB, bA, bD = b.expando,
                bE = by.nodeType,
                e = bE ? b.cache : by,
                bx = bE ? by[bD] : bD;
            if (!e[bx]) {
                return
            }
            if (bw) {
                bC = bz ? e[bx] : e[bx].data;
                if (bC) {
                    if (!b.isArray(bw)) {
                        if (bw in bC) {
                            bw = [bw]
                        } else {
                            bw = b.camelCase(bw);
                            if (bw in bC) {
                                bw = [bw]
                            } else {
                                bw = bw.split(" ")
                            }
                        }
                    }
                    for (bB = 0, bA = bw.length; bB < bA; bB++) {
                        delete bC[bw[bB]]
                    }
                    if (!(bz ? T : b.isEmptyObject)(bC)) {
                        return
                    }
                }
            }
            if (!bz) {
                delete e[bx].data;
                if (!T(e[bx])) {
                    return
                }
            }
            if (b.support.deleteExpando || !e.setInterval) {
                delete e[bx]
            } else {
                e[bx] = null
            } if (bE) {
                if (b.support.deleteExpando) {
                    delete by[bD]
                } else {
                    if (by.removeAttribute) {
                        by.removeAttribute(bD)
                    } else {
                        by[bD] = null
                    }
                }
            }
        },
        _data: function (bw, e, bx) {
            return b.data(bw, e, bx, true)
        },
        acceptData: function (bw) {
            if (bw.nodeName) {
                var e = b.noData[bw.nodeName.toLowerCase()];
                if (e) {
                    return !(e === true || bw.getAttribute("classid") !== e)
                }
            }
            return true
        }
    });
    b.fn.extend({
        data: function (bz, bB) {
            var bC, e, bx, bA = null;
            if (typeof bz === "undefined") {
                if (this.length) {
                    bA = b.data(this[0]);
                    if (this[0].nodeType === 1 && !b._data(this[0], "parsedAttrs")) {
                        e = this[0].attributes;
                        for (var by = 0, bw = e.length; by < bw; by++) {
                            bx = e[by].name;
                            if (bx.indexOf("data-") === 0) {
                                bx = b.camelCase(bx.substring(5));
                                a6(this[0], bx, bA[bx])
                            }
                        }
                        b._data(this[0], "parsedAttrs", true)
                    }
                }
                return bA
            } else {
                if (typeof bz === "object") {
                    return this.each(function () {
                        b.data(this, bz)
                    })
                }
            }
            bC = bz.split(".");
            bC[1] = bC[1] ? "." + bC[1] : "";
            if (bB === M) {
                bA = this.triggerHandler("getData" + bC[1] + "!", [bC[0]]);
                if (bA === M && this.length) {
                    bA = b.data(this[0], bz);
                    bA = a6(this[0], bz, bA)
                }
                return bA === M && bC[1] ? this.data(bC[0]) : bA
            } else {
                return this.each(function () {
                    var bD = b(this),
                        bE = [bC[0], bB];
                    bD.triggerHandler("setData" + bC[1] + "!", bE);
                    b.data(this, bz, bB);
                    bD.triggerHandler("changeData" + bC[1] + "!", bE)
                })
            }
        },
        removeData: function (e) {
            return this.each(function () {
                b.removeData(this, e)
            })
        }
    });

    function a6(by, bx, bz) {
        if (bz === M && by.nodeType === 1) {
            var bw = "data-" + bx.replace(aB, "-$1").toLowerCase();
            bz = by.getAttribute(bw);
            if (typeof bz === "string") {
                try {
                    bz = bz === "true" ? true : bz === "false" ? false : bz === "null" ? null : b.isNumeric(bz) ? parseFloat(bz) : aT.test(bz) ? b.parseJSON(bz) : bz
                } catch (bA) {}
                b.data(by, bx, bz)
            } else {
                bz = M
            }
        }
        return bz
    }
    function T(bw) {
        for (var e in bw) {
            if (e === "data" && b.isEmptyObject(bw[e])) {
                continue
            }
            if (e !== "toJSON") {
                return false
            }
        }
        return true
    }
    function bj(bz, by, bB) {
        var bx = by + "defer",
            bw = by + "queue",
            e = by + "mark",
            bA = b._data(bz, bx);
        if (bA && (bB === "queue" || !b._data(bz, bw)) && (bB === "mark" || !b._data(bz, e))) {
            setTimeout(function () {
                if (!b._data(bz, bw) && !b._data(bz, e)) {
                    b.removeData(bz, bx, true);
                    bA.fire()
                }
            }, 0)
        }
    }
    b.extend({
        _mark: function (bw, e) {
            if (bw) {
                e = (e || "fx") + "mark";
                b._data(bw, e, (b._data(bw, e) || 0) + 1)
            }
        },
        _unmark: function (bz, by, bw) {
            if (bz !== true) {
                bw = by;
                by = bz;
                bz = false
            }
            if (by) {
                bw = bw || "fx";
                var e = bw + "mark",
                    bx = bz ? 0 : ((b._data(by, e) || 1) - 1);
                if (bx) {
                    b._data(by, e, bx)
                } else {
                    b.removeData(by, e, true);
                    bj(by, bw, "mark")
                }
            }
        },
        queue: function (bw, e, by) {
            var bx;
            if (bw) {
                e = (e || "fx") + "queue";
                bx = b._data(bw, e);
                if (by) {
                    if (!bx || b.isArray(by)) {
                        bx = b._data(bw, e, b.makeArray(by))
                    } else {
                        bx.push(by)
                    }
                }
                return bx || []
            }
        },
        dequeue: function (bz, by) {
            by = by || "fx";
            var bw = b.queue(bz, by),
                bx = bw.shift(),
                e = {};
            if (bx === "inprogress") {
                bx = bw.shift()
            }
            if (bx) {
                if (by === "fx") {
                    bw.unshift("inprogress")
                }
                b._data(bz, by + ".run", e);
                bx.call(bz, function () {
                    b.dequeue(bz, by)
                }, e)
            }
            if (!bw.length) {
                b.removeData(bz, by + "queue " + by + ".run", true);
                bj(bz, by, "queue")
            }
        }
    });
    b.fn.extend({
        queue: function (e, bw) {
            if (typeof e !== "string") {
                bw = e;
                e = "fx"
            }
            if (bw === M) {
                return b.queue(this[0], e)
            }
            return this.each(function () {
                var bx = b.queue(this, e, bw);
                if (e === "fx" && bx[0] !== "inprogress") {
                    b.dequeue(this, e)
                }
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                b.dequeue(this, e)
            })
        },
        delay: function (bw, e) {
            bw = b.fx ? b.fx.speeds[bw] || bw : bw;
            e = e || "fx";
            return this.queue(e, function (by, bx) {
                var bz = setTimeout(by, bw);
                bx.stop = function () {
                    clearTimeout(bz)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (bE, bx) {
            if (typeof bE !== "string") {
                bx = bE;
                bE = M
            }
            bE = bE || "fx";
            var e = b.Deferred(),
                bw = this,
                bz = bw.length,
                bC = 1,
                bA = bE + "defer",
                bB = bE + "queue",
                bD = bE + "mark",
                by;

            function bF() {
                if (!(--bC)) {
                    e.resolveWith(bw, [bw])
                }
            }
            while (bz--) {
                if ((by = b.data(bw[bz], bA, M, true) || (b.data(bw[bz], bB, M, true) || b.data(bw[bz], bD, M, true)) && b.data(bw[bz], bA, b.Callbacks("once memory"), true))) {
                    bC++;
                    by.add(bF)
                }
            }
            bF();
            return e.promise()
        }
    });
    var aQ = /[\n\t\r]/g,
        ag = /\s+/,
        aV = /\r/g,
        g = /^(?:button|input)$/i,
        E = /^(?:button|input|object|select|textarea)$/i,
        m = /^a(?:rea)?$/i,
        ap = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        G = b.support.getSetAttribute,
        bf, aZ, aG;
    b.fn.extend({
        attr: function (e, bw) {
            return b.access(this, e, bw, true, b.attr)
        },
        removeAttr: function (e) {
            return this.each(function () {
                b.removeAttr(this, e)
            })
        },
        prop: function (e, bw) {
            return b.access(this, e, bw, true, b.prop)
        },
        removeProp: function (e) {
            e = b.propFix[e] || e;
            return this.each(function () {
                try {
                    this[e] = M;
                    delete this[e]
                } catch (bw) {}
            })
        },
        addClass: function (bz) {
            var bB, bx, bw, by, bA, bC, e;
            if (b.isFunction(bz)) {
                return this.each(function (bD) {
                    b(this).addClass(bz.call(this, bD, this.className))
                })
            }
            if (bz && typeof bz === "string") {
                bB = bz.split(ag);
                for (bx = 0, bw = this.length; bx < bw; bx++) {
                    by = this[bx];
                    if (by.nodeType === 1) {
                        if (!by.className && bB.length === 1) {
                            by.className = bz
                        } else {
                            bA = " " + by.className + " ";
                            for (bC = 0, e = bB.length; bC < e; bC++) {
                                if (!~bA.indexOf(" " + bB[bC] + " ")) {
                                    bA += bB[bC] + " "
                                }
                            }
                            by.className = b.trim(bA)
                        }
                    }
                }
            }
            return this
        },
        removeClass: function (bA) {
            var bB, bx, bw, bz, by, bC, e;
            if (b.isFunction(bA)) {
                return this.each(function (bD) {
                    b(this).removeClass(bA.call(this, bD, this.className))
                })
            }
            if ((bA && typeof bA === "string") || bA === M) {
                bB = (bA || "").split(ag);
                for (bx = 0, bw = this.length; bx < bw; bx++) {
                    bz = this[bx];
                    if (bz.nodeType === 1 && bz.className) {
                        if (bA) {
                            by = (" " + bz.className + " ").replace(aQ, " ");
                            for (bC = 0, e = bB.length; bC < e; bC++) {
                                by = by.replace(" " + bB[bC] + " ", " ")
                            }
                            bz.className = b.trim(by)
                        } else {
                            bz.className = ""
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function (by, bw) {
            var bx = typeof by,
                e = typeof bw === "boolean";
            if (b.isFunction(by)) {
                return this.each(function (bz) {
                    b(this).toggleClass(by.call(this, bz, this.className, bw), bw)
                })
            }
            return this.each(function () {
                if (bx === "string") {
                    var bB, bA = 0,
                        bz = b(this),
                        bC = bw,
                        bD = by.split(ag);
                    while ((bB = bD[bA++])) {
                        bC = e ? bC : !bz.hasClass(bB);
                        bz[bC ? "addClass" : "removeClass"](bB)
                    }
                } else {
                    if (bx === "undefined" || bx === "boolean") {
                        if (this.className) {
                            b._data(this, "__className__", this.className)
                        }
                        this.className = this.className || by === false ? "" : b._data(this, "__className__") || ""
                    }
                }
            })
        },
        hasClass: function (e) {
            var by = " " + e + " ",
                bx = 0,
                bw = this.length;
            for (; bx < bw; bx++) {
                if (this[bx].nodeType === 1 && (" " + this[bx].className + " ").replace(aQ, " ").indexOf(by) > -1) {
                    return true
                }
            }
            return false
        },
        val: function (by) {
            var e, bw, bz, bx = this[0];
            if (!arguments.length) {
                if (bx) {
                    e = b.valHooks[bx.nodeName.toLowerCase()] || b.valHooks[bx.type];
                    if (e && "get" in e && (bw = e.get(bx, "value")) !== M) {
                        return bw
                    }
                    bw = bx.value;
                    return typeof bw === "string" ? bw.replace(aV, "") : bw == null ? "" : bw
                }
                return
            }
            bz = b.isFunction(by);
            return this.each(function (bB) {
                var bA = b(this),
                    bC;
                if (this.nodeType !== 1) {
                    return
                }
                if (bz) {
                    bC = by.call(this, bB, bA.val())
                } else {
                    bC = by
                } if (bC == null) {
                    bC = ""
                } else {
                    if (typeof bC === "number") {
                        bC += ""
                    } else {
                        if (b.isArray(bC)) {
                            bC = b.map(bC, function (bD) {
                                return bD == null ? "" : bD + ""
                            })
                        }
                    }
                }
                e = b.valHooks[this.nodeName.toLowerCase()] || b.valHooks[this.type];
                if (!e || !("set" in e) || e.set(this, bC, "value") === M) {
                    this.value = bC
                }
            })
        }
    });
    b.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var bw = e.attributes.value;
                    return !bw || bw.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    var bB, bw, bA, by, bz = e.selectedIndex,
                        bC = [],
                        bD = e.options,
                        bx = e.type === "select-one";
                    if (bz < 0) {
                        return null
                    }
                    bw = bx ? bz : 0;
                    bA = bx ? bz + 1 : bD.length;
                    for (; bw < bA; bw++) {
                        by = bD[bw];
                        if (by.selected && (b.support.optDisabled ? !by.disabled : by.getAttribute("disabled") === null) && (!by.parentNode.disabled || !b.nodeName(by.parentNode, "optgroup"))) {
                            bB = b(by).val();
                            if (bx) {
                                return bB
                            }
                            bC.push(bB)
                        }
                    }
                    if (bx && !bC.length && bD.length) {
                        return b(bD[bz]).val()
                    }
                    return bC
                },
                set: function (bw, bx) {
                    var e = b.makeArray(bx);
                    b(bw).find("option").each(function () {
                        this.selected = b.inArray(b(this).val(), e) >= 0
                    });
                    if (!e.length) {
                        bw.selectedIndex = -1
                    }
                    return e
                }
            }
        },
        attrFn: {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true
        },
        attr: function (bB, by, bC, bA) {
            var bx, e, bz, bw = bB.nodeType;
            if (!bB || bw === 3 || bw === 8 || bw === 2) {
                return
            }
            if (bA && by in b.attrFn) {
                return b(bB)[by](bC)
            }
            if (typeof bB.getAttribute === "undefined") {
                return b.prop(bB, by, bC)
            }
            bz = bw !== 1 || !b.isXMLDoc(bB);
            if (bz) {
                by = by.toLowerCase();
                e = b.attrHooks[by] || (ap.test(by) ? aZ : bf)
            }
            if (bC !== M) {
                if (bC === null) {
                    b.removeAttr(bB, by);
                    return
                } else {
                    if (e && "set" in e && bz && (bx = e.set(bB, bC, by)) !== M) {
                        return bx
                    } else {
                        bB.setAttribute(by, "" + bC);
                        return bC
                    }
                }
            } else {
                if (e && "get" in e && bz && (bx = e.get(bB, by)) !== null) {
                    return bx
                } else {
                    bx = bB.getAttribute(by);
                    return bx === null ? M : bx
                }
            }
        },
        removeAttr: function (by, bA) {
            var bz, bB, bw, e, bx = 0;
            if (bA && by.nodeType === 1) {
                bB = bA.toLowerCase().split(ag);
                e = bB.length;
                for (; bx < e; bx++) {
                    bw = bB[bx];
                    if (bw) {
                        bz = b.propFix[bw] || bw;
                        b.attr(by, bw, "");
                        by.removeAttribute(G ? bw : bz);
                        if (ap.test(bw) && bz in by) {
                            by[bz] = false
                        }
                    }
                }
            }
        },
        attrHooks: {
            type: {
                set: function (e, bw) {
                    if (g.test(e.nodeName) && e.parentNode) {
                        b.error("type property can't be changed")
                    } else {
                        if (!b.support.radioValue && bw === "radio" && b.nodeName(e, "input")) {
                            var bx = e.value;
                            e.setAttribute("type", bw);
                            if (bx) {
                                e.value = bx
                            }
                            return bw
                        }
                    }
                }
            },
            value: {
                get: function (bw, e) {
                    if (bf && b.nodeName(bw, "button")) {
                        return bf.get(bw, e)
                    }
                    return e in bw ? bw.value : null
                },
                set: function (bw, bx, e) {
                    if (bf && b.nodeName(bw, "button")) {
                        return bf.set(bw, bx, e)
                    }
                    bw.value = bx
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (bA, by, bB) {
            var bx, e, bz, bw = bA.nodeType;
            if (!bA || bw === 3 || bw === 8 || bw === 2) {
                return
            }
            bz = bw !== 1 || !b.isXMLDoc(bA);
            if (bz) {
                by = b.propFix[by] || by;
                e = b.propHooks[by]
            }
            if (bB !== M) {
                if (e && "set" in e && (bx = e.set(bA, bB, by)) !== M) {
                    return bx
                } else {
                    return (bA[by] = bB)
                }
            } else {
                if (e && "get" in e && (bx = e.get(bA, by)) !== null) {
                    return bx
                } else {
                    return bA[by]
                }
            }
        },
        propHooks: {
            tabIndex: {
                get: function (bw) {
                    var e = bw.getAttributeNode("tabindex");
                    return e && e.specified ? parseInt(e.value, 10) : E.test(bw.nodeName) || m.test(bw.nodeName) && bw.href ? 0 : M
                }
            }
        }
    });
    b.attrHooks.tabindex = b.propHooks.tabIndex;
    aZ = {
        get: function (bw, e) {
            var by, bx = b.prop(bw, e);
            return bx === true || typeof bx !== "boolean" && (by = bw.getAttributeNode(e)) && by.nodeValue !== false ? e.toLowerCase() : M
        },
        set: function (bw, by, e) {
            var bx;
            if (by === false) {
                b.removeAttr(bw, e)
            } else {
                bx = b.propFix[e] || e;
                if (bx in bw) {
                    bw[bx] = true
                }
                bw.setAttribute(e, e.toLowerCase())
            }
            return e
        }
    };
    if (!G) {
        aG = {
            name: true,
            id: true
        };
        bf = b.valHooks.button = {
            get: function (bx, bw) {
                var e;
                e = bx.getAttributeNode(bw);
                return e && (aG[bw] ? e.nodeValue !== "" : e.specified) ? e.nodeValue : M
            },
            set: function (bx, by, bw) {
                var e = bx.getAttributeNode(bw);
                if (!e) {
                    e = aw.createAttribute(bw);
                    bx.setAttributeNode(e)
                }
                return (e.nodeValue = by + "")
            }
        };
        b.attrHooks.tabindex.set = bf.set;
        b.each(["width", "height"], function (bw, e) {
            b.attrHooks[e] = b.extend(b.attrHooks[e], {
                set: function (bx, by) {
                    if (by === "") {
                        bx.setAttribute(e, "auto");
                        return by
                    }
                }
            })
        });
        b.attrHooks.contenteditable = {
            get: bf.get,
            set: function (bw, bx, e) {
                if (bx === "") {
                    bx = "false"
                }
                bf.set(bw, bx, e)
            }
        }
    }
    if (!b.support.hrefNormalized) {
        b.each(["href", "src", "width", "height"], function (bw, e) {
            b.attrHooks[e] = b.extend(b.attrHooks[e], {
                get: function (by) {
                    var bx = by.getAttribute(e, 2);
                    return bx === null ? M : bx
                }
            })
        })
    }
    if (!b.support.style) {
        b.attrHooks.style = {
            get: function (e) {
                return e.style.cssText.toLowerCase() || M
            },
            set: function (e, bw) {
                return (e.style.cssText = "" + bw)
            }
        }
    }
    if (!b.support.optSelected) {
        b.propHooks.selected = b.extend(b.propHooks.selected, {
            get: function (bw) {
                var e = bw.parentNode;
                if (e) {
                    e.selectedIndex;
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                }
                return null
            }
        })
    }
    if (!b.support.enctype) {
        b.propFix.enctype = "encoding"
    }
    if (!b.support.checkOn) {
        b.each(["radio", "checkbox"], function () {
            b.valHooks[this] = {
                get: function (e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        })
    }
    b.each(["radio", "checkbox"], function () {
        b.valHooks[this] = b.extend(b.valHooks[this], {
            set: function (e, bw) {
                if (b.isArray(bw)) {
                    return (e.checked = b.inArray(b(e).val(), bw) >= 0)
                }
            }
        })
    });
    var be = /^(?:textarea|input|select)$/i,
        o = /^([^\.]*)?(?:\.(.+))?$/,
        K = /\bhover(\.\S+)?\b/,
        aP = /^key/,
        bg = /^(?:mouse|contextmenu)|click/,
        U = /^(?:focusinfocus|focusoutblur)$/,
        V = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        Z = function (e) {
            var bw = V.exec(e);
            if (bw) {
                bw[1] = (bw[1] || "").toLowerCase();
                bw[3] = bw[3] && new RegExp("(?:^|\\s)" + bw[3] + "(?:\\s|$)")
            }
            return bw
        }, k = function (bx, e) {
            var bw = bx.attributes || {};
            return ((!e[1] || bx.nodeName.toLowerCase() === e[1]) && (!e[2] || (bw.id || {}).value === e[2]) && (!e[3] || e[3].test((bw["class"] || {}).value)))
        }, bu = function (e) {
            return b.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1")
        };
    b.event = {
        add: function (by, bD, bK, bB, bz) {
            var bE, bC, bL, bJ, bI, bG, e, bH, bw, bA, bx, bF;
            if (by.nodeType === 3 || by.nodeType === 8 || !bD || !bK || !(bE = b._data(by))) {
                return
            }
            if (bK.handler) {
                bw = bK;
                bK = bw.handler
            }
            if (!bK.guid) {
                bK.guid = b.guid++
            }
            bL = bE.events;
            if (!bL) {
                bE.events = bL = {}
            }
            bC = bE.handle;
            if (!bC) {
                bE.handle = bC = function (bM) {
                    return typeof b !== "undefined" && (!bM || b.event.triggered !== bM.type) ? b.event.dispatch.apply(bC.elem, arguments) : M
                };
                bC.elem = by
            }
            bD = b.trim(bu(bD)).split(" ");
            for (bJ = 0; bJ < bD.length; bJ++) {
                bI = o.exec(bD[bJ]) || [];
                bG = bI[1];
                e = (bI[2] || "").split(".").sort();
                bF = b.event.special[bG] || {};
                bG = (bz ? bF.delegateType : bF.bindType) || bG;
                bF = b.event.special[bG] || {};
                bH = b.extend({
                    type: bG,
                    origType: bI[1],
                    data: bB,
                    handler: bK,
                    guid: bK.guid,
                    selector: bz,
                    quick: Z(bz),
                    namespace: e.join(".")
                }, bw);
                bx = bL[bG];
                if (!bx) {
                    bx = bL[bG] = [];
                    bx.delegateCount = 0;
                    if (!bF.setup || bF.setup.call(by, bB, e, bC) === false) {
                        if (by.addEventListener) {
                            by.addEventListener(bG, bC, false)
                        } else {
                            if (by.attachEvent) {
                                by.attachEvent("on" + bG, bC)
                            }
                        }
                    }
                }
                if (bF.add) {
                    bF.add.call(by, bH);
                    if (!bH.handler.guid) {
                        bH.handler.guid = bK.guid
                    }
                }
                if (bz) {
                    bx.splice(bx.delegateCount++, 0, bH)
                } else {
                    bx.push(bH)
                }
                b.event.global[bG] = true
            }
            by = null
        },
        global: {},
        remove: function (bK, bF, bw, bI, bC) {
            var bJ = b.hasData(bK) && b._data(bK),
                bG, by, bA, bM, bD, bB, bH, bx, bz, bL, bE, e;
            if (!bJ || !(bx = bJ.events)) {
                return
            }
            bF = b.trim(bu(bF || "")).split(" ");
            for (bG = 0; bG < bF.length; bG++) {
                by = o.exec(bF[bG]) || [];
                bA = bM = by[1];
                bD = by[2];
                if (!bA) {
                    for (bA in bx) {
                        b.event.remove(bK, bA + bF[bG], bw, bI, true)
                    }
                    continue
                }
                bz = b.event.special[bA] || {};
                bA = (bI ? bz.delegateType : bz.bindType) || bA;
                bE = bx[bA] || [];
                bB = bE.length;
                bD = bD ? new RegExp("(^|\\.)" + bD.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                for (bH = 0; bH < bE.length; bH++) {
                    e = bE[bH];
                    if ((bC || bM === e.origType) && (!bw || bw.guid === e.guid) && (!bD || bD.test(e.namespace)) && (!bI || bI === e.selector || bI === "**" && e.selector)) {
                        bE.splice(bH--, 1);
                        if (e.selector) {
                            bE.delegateCount--
                        }
                        if (bz.remove) {
                            bz.remove.call(bK, e)
                        }
                    }
                }
                if (bE.length === 0 && bB !== bE.length) {
                    if (!bz.teardown || bz.teardown.call(bK, bD) === false) {
                        b.removeEvent(bK, bA, bJ.handle)
                    }
                    delete bx[bA]
                }
            }
            if (b.isEmptyObject(bx)) {
                bL = bJ.handle;
                if (bL) {
                    bL.elem = null
                }
                b.removeData(bK, ["events", "handle"], true)
            }
        },
        customEvent: {
            getData: true,
            setData: true,
            changeData: true
        },
        trigger: function (bw, bE, bB, bK) {
            if (bB && (bB.nodeType === 3 || bB.nodeType === 8)) {
                return
            }
            var bH = bw.type || bw,
                by = [],
                e, bx, bD, bI, bA, bz, bG, bF, bC, bJ;
            if (U.test(bH + b.event.triggered)) {
                return
            }
            if (bH.indexOf("!") >= 0) {
                bH = bH.slice(0, -1);
                bx = true
            }
            if (bH.indexOf(".") >= 0) {
                by = bH.split(".");
                bH = by.shift();
                by.sort()
            }
            if ((!bB || b.event.customEvent[bH]) && !b.event.global[bH]) {
                return
            }
            bw = typeof bw === "object" ? bw[b.expando] ? bw : new b.Event(bH, bw) : new b.Event(bH);
            bw.type = bH;
            bw.isTrigger = true;
            bw.exclusive = bx;
            bw.namespace = by.join(".");
            bw.namespace_re = bw.namespace ? new RegExp("(^|\\.)" + by.join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
            bz = bH.indexOf(":") < 0 ? "on" + bH : "";
            if (!bB) {
                e = b.cache;
                for (bD in e) {
                    if (e[bD].events && e[bD].events[bH]) {
                        b.event.trigger(bw, bE, e[bD].handle.elem, true)
                    }
                }
                return
            }
            bw.result = M;
            if (!bw.target) {
                bw.target = bB
            }
            bE = bE != null ? b.makeArray(bE) : [];
            bE.unshift(bw);
            bG = b.event.special[bH] || {};
            if (bG.trigger && bG.trigger.apply(bB, bE) === false) {
                return
            }
            bC = [
                [bB, bG.bindType || bH]
            ];
            if (!bK && !bG.noBubble && !b.isWindow(bB)) {
                bJ = bG.delegateType || bH;
                bI = U.test(bJ + bH) ? bB : bB.parentNode;
                bA = null;
                for (; bI; bI = bI.parentNode) {
                    bC.push([bI, bJ]);
                    bA = bI
                }
                if (bA && bA === bB.ownerDocument) {
                    bC.push([bA.defaultView || bA.parentWindow || bc, bJ])
                }
            }
            for (bD = 0; bD < bC.length && !bw.isPropagationStopped(); bD++) {
                bI = bC[bD][0];
                bw.type = bC[bD][1];
                bF = (b._data(bI, "events") || {})[bw.type] && b._data(bI, "handle");
                if (bF) {
                    bF.apply(bI, bE)
                }
                bF = bz && bI[bz];
                if (bF && b.acceptData(bI) && bF.apply(bI, bE) === false) {
                    bw.preventDefault()
                }
            }
            bw.type = bH;
            if (!bK && !bw.isDefaultPrevented()) {
                if ((!bG._default || bG._default.apply(bB.ownerDocument, bE) === false) && !(bH === "click" && b.nodeName(bB, "a")) && b.acceptData(bB)) {
                    if (bz && bB[bH] && ((bH !== "focus" && bH !== "blur") || bw.target.offsetWidth !== 0) && !b.isWindow(bB)) {
                        bA = bB[bz];
                        if (bA) {
                            bB[bz] = null
                        }
                        b.event.triggered = bH;
                        bB[bH]();
                        b.event.triggered = M;
                        if (bA) {
                            bB[bz] = bA
                        }
                    }
                }
            }
            return bw.result
        },
        dispatch: function (e) {
            e = b.event.fix(e || bc.event);
            var bA = ((b._data(this, "events") || {})[e.type] || []),
                bB = bA.delegateCount,
                bH = [].slice.call(arguments, 0),
                bz = !e.exclusive && !e.namespace,
                bI = [],
                bD, bC, bL, by, bG, bF, bw, bE, bJ, bx, bK;
            bH[0] = e;
            e.delegateTarget = this;
            if (bB && !e.target.disabled && !(e.button && e.type === "click")) {
                by = b(this);
                by.context = this.ownerDocument || this;
                for (bL = e.target; bL != this; bL = bL.parentNode || this) {
                    bF = {};
                    bE = [];
                    by[0] = bL;
                    for (bD = 0; bD < bB; bD++) {
                        bJ = bA[bD];
                        bx = bJ.selector;
                        if (bF[bx] === M) {
                            bF[bx] = (bJ.quick ? k(bL, bJ.quick) : by.is(bx))
                        }
                        if (bF[bx]) {
                            bE.push(bJ)
                        }
                    }
                    if (bE.length) {
                        bI.push({
                            elem: bL,
                            matches: bE
                        })
                    }
                }
            }
            if (bA.length > bB) {
                bI.push({
                    elem: this,
                    matches: bA.slice(bB)
                })
            }
            for (bD = 0; bD < bI.length && !e.isPropagationStopped(); bD++) {
                bw = bI[bD];
                e.currentTarget = bw.elem;
                for (bC = 0; bC < bw.matches.length && !e.isImmediatePropagationStopped(); bC++) {
                    bJ = bw.matches[bC];
                    if (bz || (!e.namespace && !bJ.namespace) || e.namespace_re && e.namespace_re.test(bJ.namespace)) {
                        e.data = bJ.data;
                        e.handleObj = bJ;
                        bG = ((b.event.special[bJ.origType] || {}).handle || bJ.handler).apply(bw.elem, bH);
                        if (bG !== M) {
                            e.result = bG;
                            if (bG === false) {
                                e.preventDefault();
                                e.stopPropagation()
                            }
                        }
                    }
                }
            }
            return e.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (bw, e) {
                if (bw.which == null) {
                    bw.which = e.charCode != null ? e.charCode : e.keyCode
                }
                return bw
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (by, bx) {
                var bz, bA, e, bw = bx.button,
                    bB = bx.fromElement;
                if (by.pageX == null && bx.clientX != null) {
                    bz = by.target.ownerDocument || aw;
                    bA = bz.documentElement;
                    e = bz.body;
                    by.pageX = bx.clientX + (bA && bA.scrollLeft || e && e.scrollLeft || 0) - (bA && bA.clientLeft || e && e.clientLeft || 0);
                    by.pageY = bx.clientY + (bA && bA.scrollTop || e && e.scrollTop || 0) - (bA && bA.clientTop || e && e.clientTop || 0)
                }
                if (!by.relatedTarget && bB) {
                    by.relatedTarget = bB === by.target ? bx.toElement : bB
                }
                if (!by.which && bw !== M) {
                    by.which = (bw & 1 ? 1 : (bw & 2 ? 3 : (bw & 4 ? 2 : 0)))
                }
                return by
            }
        },
        fix: function (bx) {
            if (bx[b.expando]) {
                return bx
            }
            var bw, bA, e = bx,
                by = b.event.fixHooks[bx.type] || {}, bz = by.props ? this.props.concat(by.props) : this.props;
            bx = b.Event(e);
            for (bw = bz.length; bw;) {
                bA = bz[--bw];
                bx[bA] = e[bA]
            }
            if (!bx.target) {
                bx.target = e.srcElement || aw
            }
            if (bx.target.nodeType === 3) {
                bx.target = bx.target.parentNode
            }
            if (bx.metaKey === M) {
                bx.metaKey = bx.ctrlKey
            }
            return by.filter ? by.filter(bx, e) : bx
        },
        special: {
            ready: {
                setup: b.bindReady
            },
            load: {
                noBubble: true
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (bx, bw, e) {
                    if (b.isWindow(this)) {
                        this.onbeforeunload = e
                    }
                },
                teardown: function (bw, e) {
                    if (this.onbeforeunload === e) {
                        this.onbeforeunload = null
                    }
                }
            }
        },
        simulate: function (bx, bz, by, bw) {
            var bA = b.extend(new b.Event(), by, {
                type: bx,
                isSimulated: true,
                originalEvent: {}
            });
            if (bw) {
                b.event.trigger(bA, null, bz)
            } else {
                b.event.dispatch.call(bz, bA)
            } if (bA.isDefaultPrevented()) {
                by.preventDefault()
            }
        }
    };
    b.event.handle = b.event.dispatch;
    b.removeEvent = aw.removeEventListener ? function (bw, e, bx) {
        if (bw.removeEventListener) {
            bw.removeEventListener(e, bx, false)
        }
    } : function (bw, e, bx) {
        if (bw.detachEvent) {
            bw.detachEvent("on" + e, bx)
        }
    };
    b.Event = function (bw, e) {
        if (!(this instanceof b.Event)) {
            return new b.Event(bw, e)
        }
        if (bw && bw.type) {
            this.originalEvent = bw;
            this.type = bw.type;
            this.isDefaultPrevented = (bw.defaultPrevented || bw.returnValue === false || bw.getPreventDefault && bw.getPreventDefault()) ? j : bl
        } else {
            this.type = bw
        } if (e) {
            b.extend(this, e)
        }
        this.timeStamp = bw && bw.timeStamp || b.now();
        this[b.expando] = true
    };

    function bl() {
        return false
    }
    function j() {
        return true
    }
    b.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = j;
            var bw = this.originalEvent;
            if (!bw) {
                return
            }
            if (bw.preventDefault) {
                bw.preventDefault()
            } else {
                bw.returnValue = false
            }
        },
        stopPropagation: function () {
            this.isPropagationStopped = j;
            var bw = this.originalEvent;
            if (!bw) {
                return
            }
            if (bw.stopPropagation) {
                bw.stopPropagation()
            }
            bw.cancelBubble = true
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = j;
            this.stopPropagation()
        },
        isDefaultPrevented: bl,
        isPropagationStopped: bl,
        isImmediatePropagationStopped: bl
    };
    b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (bw, e) {
        b.event.special[bw] = {
            delegateType: e,
            bindType: e,
            handle: function (bA) {
                var bC = this,
                    bB = bA.relatedTarget,
                    bz = bA.handleObj,
                    bx = bz.selector,
                    by;
                if (!bB || (bB !== bC && !b.contains(bC, bB))) {
                    bA.type = bz.origType;
                    by = bz.handler.apply(this, arguments);
                    bA.type = e
                }
                return by
            }
        }
    });
    if (!b.support.submitBubbles) {
        b.event.special.submit = {
            setup: function () {
                if (b.nodeName(this, "form")) {
                    return false
                }
                b.event.add(this, "click._submit keypress._submit", function (by) {
                    var bx = by.target,
                        bw = b.nodeName(bx, "input") || b.nodeName(bx, "button") ? bx.form : M;
                    if (bw && !bw._submit_attached) {
                        b.event.add(bw, "submit._submit", function (e) {
                            if (this.parentNode && !e.isTrigger) {
                                b.event.simulate("submit", this.parentNode, e, true)
                            }
                        });
                        bw._submit_attached = true
                    }
                })
            },
            teardown: function () {
                if (b.nodeName(this, "form")) {
                    return false
                }
                b.event.remove(this, "._submit")
            }
        }
    }
    if (!b.support.changeBubbles) {
        b.event.special.change = {
            setup: function () {
                if (be.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        b.event.add(this, "propertychange._change", function (e) {
                            if (e.originalEvent.propertyName === "checked") {
                                this._just_changed = true
                            }
                        });
                        b.event.add(this, "click._change", function (e) {
                            if (this._just_changed && !e.isTrigger) {
                                this._just_changed = false;
                                b.event.simulate("change", this, e, true)
                            }
                        })
                    }
                    return false
                }
                b.event.add(this, "beforeactivate._change", function (bx) {
                    var bw = bx.target;
                    if (be.test(bw.nodeName) && !bw._change_attached) {
                        b.event.add(bw, "change._change", function (e) {
                            if (this.parentNode && !e.isSimulated && !e.isTrigger) {
                                b.event.simulate("change", this.parentNode, e, true)
                            }
                        });
                        bw._change_attached = true
                    }
                })
            },
            handle: function (bw) {
                var e = bw.target;
                if (this !== e || bw.isSimulated || bw.isTrigger || (e.type !== "radio" && e.type !== "checkbox")) {
                    return bw.handleObj.handler.apply(this, arguments)
                }
            },
            teardown: function () {
                b.event.remove(this, "._change");
                return be.test(this.nodeName)
            }
        }
    }
    if (!b.support.focusinBubbles) {
        b.each({
            focus: "focusin",
            blur: "focusout"
        }, function (by, e) {
            var bw = 0,
                bx = function (bz) {
                    b.event.simulate(e, bz.target, b.event.fix(bz), true)
                };
            b.event.special[e] = {
                setup: function () {
                    if (bw++ === 0) {
                        aw.addEventListener(by, bx, true)
                    }
                },
                teardown: function () {
                    if (--bw === 0) {
                        aw.removeEventListener(by, bx, true)
                    }
                }
            }
        })
    }
    b.fn.extend({
        on: function (bx, e, bA, bz, bw) {
            var bB, by;
            if (typeof bx === "object") {
                if (typeof e !== "string") {
                    bA = e;
                    e = M
                }
                for (by in bx) {
                    this.on(by, e, bA, bx[by], bw)
                }
                return this
            }
            if (bA == null && bz == null) {
                bz = e;
                bA = e = M
            } else {
                if (bz == null) {
                    if (typeof e === "string") {
                        bz = bA;
                        bA = M
                    } else {
                        bz = bA;
                        bA = e;
                        e = M
                    }
                }
            } if (bz === false) {
                bz = bl
            } else {
                if (!bz) {
                    return this
                }
            } if (bw === 1) {
                bB = bz;
                bz = function (bC) {
                    b().off(bC);
                    return bB.apply(this, arguments)
                };
                bz.guid = bB.guid || (bB.guid = b.guid++)
            }
            return this.each(function () {
                b.event.add(this, bx, bz, bA, e)
            })
        },
        one: function (bw, e, by, bx) {
            return this.on.call(this, bw, e, by, bx, 1)
        },
        off: function (bx, e, bz) {
            if (bx && bx.preventDefault && bx.handleObj) {
                var bw = bx.handleObj;
                b(bx.delegateTarget).off(bw.namespace ? bw.type + "." + bw.namespace : bw.type, bw.selector, bw.handler);
                return this
            }
            if (typeof bx === "object") {
                for (var by in bx) {
                    this.off(by, e, bx[by])
                }
                return this
            }
            if (e === false || typeof e === "function") {
                bz = e;
                e = M
            }
            if (bz === false) {
                bz = bl
            }
            return this.each(function () {
                b.event.remove(this, bx, bz, e)
            })
        },
        bind: function (e, bx, bw) {
            return this.on(e, null, bx, bw)
        },
        unbind: function (e, bw) {
            return this.off(e, null, bw)
        },
        live: function (e, bx, bw) {
            b(this.context).on(e, this.selector, bx, bw);
            return this
        },
        die: function (e, bw) {
            b(this.context).off(e, this.selector || "**", bw);
            return this
        },
        delegate: function (e, bw, by, bx) {
            return this.on(bw, e, by, bx)
        },
        undelegate: function (e, bw, bx) {
            return arguments.length == 1 ? this.off(e, "**") : this.off(bw, e, bx)
        },
        trigger: function (e, bw) {
            return this.each(function () {
                b.event.trigger(e, bw, this)
            })
        },
        triggerHandler: function (e, bw) {
            if (this[0]) {
                return b.event.trigger(e, bw, this[0], true)
            }
        },
        toggle: function (by) {
            var bw = arguments,
                e = by.guid || b.guid++,
                bx = 0,
                bz = function (bA) {
                    var bB = (b._data(this, "lastToggle" + by.guid) || 0) % bx;
                    b._data(this, "lastToggle" + by.guid, bB + 1);
                    bA.preventDefault();
                    return bw[bB].apply(this, arguments) || false
                };
            bz.guid = e;
            while (bx < bw.length) {
                bw[bx++].guid = e
            }
            return this.click(bz)
        },
        hover: function (e, bw) {
            return this.mouseenter(e).mouseleave(bw || e)
        }
    });
    b.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function (bw, e) {
        b.fn[e] = function (by, bx) {
            if (bx == null) {
                bx = by;
                by = null
            }
            return arguments.length > 0 ? this.on(e, null, by, bx) : this.trigger(e)
        };
        if (b.attrFn) {
            b.attrFn[e] = true
        }
        if (aP.test(e)) {
            b.event.fixHooks[e] = b.event.keyHooks
        }
        if (bg.test(e)) {
            b.event.fixHooks[e] = b.event.mouseHooks
        }
    });
    /*!
     * Sizzle CSS Selector Engine
     *  Copyright 2011, The Dojo Foundation
     *  Released under the MIT, BSD, and GPL Licenses.
     *  More information: http://sizzlejs.com/
     */ (function () {
        var bI = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            bD = "sizcache" + (Math.random() + "").replace(".", ""),
            bJ = 0,
            bM = Object.prototype.toString,
            bC = false,
            bB = true,
            bL = /\\/g,
            bP = /\r\n/g,
            bR = /\W/;
        [0, 0].sort(function () {
            bB = false;
            return 0
        });
        var bz = function (bW, e, bZ, b0) {
            bZ = bZ || [];
            e = e || aw;
            var b2 = e;
            if (e.nodeType !== 1 && e.nodeType !== 9) {
                return []
            }
            if (!bW || typeof bW !== "string") {
                return bZ
            }
            var bT, b4, b7, bS, b3, b6, b5, bY, bV = true,
                bU = bz.isXML(e),
                bX = [],
                b1 = bW;
            do {
                bI.exec("");
                bT = bI.exec(b1);
                if (bT) {
                    b1 = bT[3];
                    bX.push(bT[1]);
                    if (bT[2]) {
                        bS = bT[3];
                        break
                    }
                }
            } while (bT);
            if (bX.length > 1 && bE.exec(bW)) {
                if (bX.length === 2 && bF.relative[bX[0]]) {
                    b4 = bN(bX[0] + bX[1], e, b0)
                } else {
                    b4 = bF.relative[bX[0]] ? [e] : bz(bX.shift(), e);
                    while (bX.length) {
                        bW = bX.shift();
                        if (bF.relative[bW]) {
                            bW += bX.shift()
                        }
                        b4 = bN(bW, b4, b0)
                    }
                }
            } else {
                if (!b0 && bX.length > 1 && e.nodeType === 9 && !bU && bF.match.ID.test(bX[0]) && !bF.match.ID.test(bX[bX.length - 1])) {
                    b3 = bz.find(bX.shift(), e, bU);
                    e = b3.expr ? bz.filter(b3.expr, b3.set)[0] : b3.set[0]
                }
                if (e) {
                    b3 = b0 ? {
                        expr: bX.pop(),
                        set: bG(b0)
                    } : bz.find(bX.pop(), bX.length === 1 && (bX[0] === "~" || bX[0] === "+") && e.parentNode ? e.parentNode : e, bU);
                    b4 = b3.expr ? bz.filter(b3.expr, b3.set) : b3.set;
                    if (bX.length > 0) {
                        b7 = bG(b4)
                    } else {
                        bV = false
                    }
                    while (bX.length) {
                        b6 = bX.pop();
                        b5 = b6;
                        if (!bF.relative[b6]) {
                            b6 = ""
                        } else {
                            b5 = bX.pop()
                        } if (b5 == null) {
                            b5 = e
                        }
                        bF.relative[b6](b7, b5, bU)
                    }
                } else {
                    b7 = bX = []
                }
            } if (!b7) {
                b7 = b4
            }
            if (!b7) {
                bz.error(b6 || bW)
            }
            if (bM.call(b7) === "[object Array]") {
                if (!bV) {
                    bZ.push.apply(bZ, b7)
                } else {
                    if (e && e.nodeType === 1) {
                        for (bY = 0; b7[bY] != null; bY++) {
                            if (b7[bY] && (b7[bY] === true || b7[bY].nodeType === 1 && bz.contains(e, b7[bY]))) {
                                bZ.push(b4[bY])
                            }
                        }
                    } else {
                        for (bY = 0; b7[bY] != null; bY++) {
                            if (b7[bY] && b7[bY].nodeType === 1) {
                                bZ.push(b4[bY])
                            }
                        }
                    }
                }
            } else {
                bG(b7, bZ)
            } if (bS) {
                bz(bS, b2, bZ, b0);
                bz.uniqueSort(bZ)
            }
            return bZ
        };
        bz.uniqueSort = function (bS) {
            if (bK) {
                bC = bB;
                bS.sort(bK);
                if (bC) {
                    for (var e = 1; e < bS.length; e++) {
                        if (bS[e] === bS[e - 1]) {
                            bS.splice(e--, 1)
                        }
                    }
                }
            }
            return bS
        };
        bz.matches = function (e, bS) {
            return bz(e, null, null, bS)
        };
        bz.matchesSelector = function (e, bS) {
            return bz(bS, null, null, [e]).length > 0
        };
        bz.find = function (bY, e, bZ) {
            var bX, bT, bV, bU, bW, bS;
            if (!bY) {
                return []
            }
            for (bT = 0, bV = bF.order.length; bT < bV; bT++) {
                bW = bF.order[bT];
                if ((bU = bF.leftMatch[bW].exec(bY))) {
                    bS = bU[1];
                    bU.splice(1, 1);
                    if (bS.substr(bS.length - 1) !== "\\") {
                        bU[1] = (bU[1] || "").replace(bL, "");
                        bX = bF.find[bW](bU, e, bZ);
                        if (bX != null) {
                            bY = bY.replace(bF.match[bW], "");
                            break
                        }
                    }
                }
            }
            if (!bX) {
                bX = typeof e.getElementsByTagName !== "undefined" ? e.getElementsByTagName("*") : []
            }
            return {
                set: bX,
                expr: bY
            }
        };
        bz.filter = function (b2, b1, b5, bV) {
            var bX, e, b0, b7, b4, bS, bU, bW, b3, bT = b2,
                b6 = [],
                bZ = b1,
                bY = b1 && b1[0] && bz.isXML(b1[0]);
            while (b2 && b1.length) {
                for (b0 in bF.filter) {
                    if ((bX = bF.leftMatch[b0].exec(b2)) != null && bX[2]) {
                        bS = bF.filter[b0];
                        bU = bX[1];
                        e = false;
                        bX.splice(1, 1);
                        if (bU.substr(bU.length - 1) === "\\") {
                            continue
                        }
                        if (bZ === b6) {
                            b6 = []
                        }
                        if (bF.preFilter[b0]) {
                            bX = bF.preFilter[b0](bX, bZ, b5, b6, bV, bY);
                            if (!bX) {
                                e = b7 = true
                            } else {
                                if (bX === true) {
                                    continue
                                }
                            }
                        }
                        if (bX) {
                            for (bW = 0;
                                 (b4 = bZ[bW]) != null; bW++) {
                                if (b4) {
                                    b7 = bS(b4, bX, bW, bZ);
                                    b3 = bV ^ b7;
                                    if (b5 && b7 != null) {
                                        if (b3) {
                                            e = true
                                        } else {
                                            bZ[bW] = false
                                        }
                                    } else {
                                        if (b3) {
                                            b6.push(b4);
                                            e = true
                                        }
                                    }
                                }
                            }
                        }
                        if (b7 !== M) {
                            if (!b5) {
                                bZ = b6
                            }
                            b2 = b2.replace(bF.match[b0], "");
                            if (!e) {
                                return []
                            }
                            break
                        }
                    }
                }
                if (b2 === bT) {
                    if (e == null) {
                        bz.error(b2)
                    } else {
                        break
                    }
                }
                bT = b2
            }
            return bZ
        };
        bz.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        var bx = bz.getText = function (bV) {
            var bT, bU, e = bV.nodeType,
                bS = "";
            if (e) {
                if (e === 1 || e === 9) {
                    if (typeof bV.textContent === "string") {
                        return bV.textContent
                    } else {
                        if (typeof bV.innerText === "string") {
                            return bV.innerText.replace(bP, "")
                        } else {
                            for (bV = bV.firstChild; bV; bV = bV.nextSibling) {
                                bS += bx(bV)
                            }
                        }
                    }
                } else {
                    if (e === 3 || e === 4) {
                        return bV.nodeValue
                    }
                }
            } else {
                for (bT = 0;
                     (bU = bV[bT]); bT++) {
                    if (bU.nodeType !== 8) {
                        bS += bx(bU)
                    }
                }
            }
            return bS
        };
        var bF = bz.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (e) {
                    return e.getAttribute("href")
                },
                type: function (e) {
                    return e.getAttribute("type")
                }
            },
            relative: {
                "+": function (bX, bS) {
                    var bU = typeof bS === "string",
                        bW = bU && !bR.test(bS),
                        bY = bU && !bW;
                    if (bW) {
                        bS = bS.toLowerCase()
                    }
                    for (var bT = 0, e = bX.length, bV; bT < e; bT++) {
                        if ((bV = bX[bT])) {
                            while ((bV = bV.previousSibling) && bV.nodeType !== 1) {}
                            bX[bT] = bY || bV && bV.nodeName.toLowerCase() === bS ? bV || false : bV === bS
                        }
                    }
                    if (bY) {
                        bz.filter(bS, bX, true)
                    }
                },
                ">": function (bX, bS) {
                    var bW, bV = typeof bS === "string",
                        bT = 0,
                        e = bX.length;
                    if (bV && !bR.test(bS)) {
                        bS = bS.toLowerCase();
                        for (; bT < e; bT++) {
                            bW = bX[bT];
                            if (bW) {
                                var bU = bW.parentNode;
                                bX[bT] = bU.nodeName.toLowerCase() === bS ? bU : false
                            }
                        }
                    } else {
                        for (; bT < e; bT++) {
                            bW = bX[bT];
                            if (bW) {
                                bX[bT] = bV ? bW.parentNode : bW.parentNode === bS
                            }
                        }
                        if (bV) {
                            bz.filter(bS, bX, true)
                        }
                    }
                },
                "": function (bU, bS, bW) {
                    var bV, bT = bJ++,
                        e = bO;
                    if (typeof bS === "string" && !bR.test(bS)) {
                        bS = bS.toLowerCase();
                        bV = bS;
                        e = bw
                    }
                    e("parentNode", bS, bT, bU, bV, bW)
                },
                "~": function (bU, bS, bW) {
                    var bV, bT = bJ++,
                        e = bO;
                    if (typeof bS === "string" && !bR.test(bS)) {
                        bS = bS.toLowerCase();
                        bV = bS;
                        e = bw
                    }
                    e("previousSibling", bS, bT, bU, bV, bW)
                }
            },
            find: {
                ID: function (bS, bT, bU) {
                    if (typeof bT.getElementById !== "undefined" && !bU) {
                        var e = bT.getElementById(bS[1]);
                        return e && e.parentNode ? [e] : []
                    }
                },
                NAME: function (bT, bW) {
                    if (typeof bW.getElementsByName !== "undefined") {
                        var bS = [],
                            bV = bW.getElementsByName(bT[1]);
                        for (var bU = 0, e = bV.length; bU < e; bU++) {
                            if (bV[bU].getAttribute("name") === bT[1]) {
                                bS.push(bV[bU])
                            }
                        }
                        return bS.length === 0 ? null : bS
                    }
                },
                TAG: function (e, bS) {
                    if (typeof bS.getElementsByTagName !== "undefined") {
                        return bS.getElementsByTagName(e[1])
                    }
                }
            },
            preFilter: {
                CLASS: function (bU, bS, bT, e, bX, bY) {
                    bU = " " + bU[1].replace(bL, "") + " ";
                    if (bY) {
                        return bU
                    }
                    for (var bV = 0, bW;
                         (bW = bS[bV]) != null; bV++) {
                        if (bW) {
                            if (bX ^ (bW.className && (" " + bW.className + " ").replace(/[\t\n\r]/g, " ").indexOf(bU) >= 0)) {
                                if (!bT) {
                                    e.push(bW)
                                }
                            } else {
                                if (bT) {
                                    bS[bV] = false
                                }
                            }
                        }
                    }
                    return false
                },
                ID: function (e) {
                    return e[1].replace(bL, "")
                },
                TAG: function (bS, e) {
                    return bS[1].replace(bL, "").toLowerCase()
                },
                CHILD: function (e) {
                    if (e[1] === "nth") {
                        if (!e[2]) {
                            bz.error(e[0])
                        }
                        e[2] = e[2].replace(/^\+|\s*/g, "");
                        var bS = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                        e[2] = (bS[1] + (bS[2] || 1)) - 0;
                        e[3] = bS[3] - 0
                    } else {
                        if (e[2]) {
                            bz.error(e[0])
                        }
                    }
                    e[0] = bJ++;
                    return e
                },
                ATTR: function (bV, bS, bT, e, bW, bX) {
                    var bU = bV[1] = bV[1].replace(bL, "");
                    if (!bX && bF.attrMap[bU]) {
                        bV[1] = bF.attrMap[bU]
                    }
                    bV[4] = (bV[4] || bV[5] || "").replace(bL, "");
                    if (bV[2] === "~=") {
                        bV[4] = " " + bV[4] + " "
                    }
                    return bV
                },
                PSEUDO: function (bV, bS, bT, e, bW) {
                    if (bV[1] === "not") {
                        if ((bI.exec(bV[3]) || "").length > 1 || /^\w/.test(bV[3])) {
                            bV[3] = bz(bV[3], null, null, bS)
                        } else {
                            var bU = bz.filter(bV[3], bS, bT, true ^ bW);
                            if (!bT) {
                                e.push.apply(e, bU)
                            }
                            return false
                        }
                    } else {
                        if (bF.match.POS.test(bV[0]) || bF.match.CHILD.test(bV[0])) {
                            return true
                        }
                    }
                    return bV
                },
                POS: function (e) {
                    e.unshift(true);
                    return e
                }
            },
            filters: {
                enabled: function (e) {
                    return e.disabled === false && e.type !== "hidden"
                },
                disabled: function (e) {
                    return e.disabled === true
                },
                checked: function (e) {
                    return e.checked === true
                },
                selected: function (e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                    return e.selected === true
                },
                parent: function (e) {
                    return !!e.firstChild
                },
                empty: function (e) {
                    return !e.firstChild
                },
                has: function (bT, bS, e) {
                    return !!bz(e[3], bT).length
                },
                header: function (e) {
                    return (/h\d/i).test(e.nodeName)
                },
                text: function (bT) {
                    var e = bT.getAttribute("type"),
                        bS = bT.type;
                    return bT.nodeName.toLowerCase() === "input" && "text" === bS && (e === bS || e === null)
                },
                radio: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "radio" === e.type
                },
                checkbox: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
                },
                file: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "file" === e.type
                },
                password: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "password" === e.type
                },
                submit: function (bS) {
                    var e = bS.nodeName.toLowerCase();
                    return (e === "input" || e === "button") && "submit" === bS.type
                },
                image: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "image" === e.type
                },
                reset: function (bS) {
                    var e = bS.nodeName.toLowerCase();
                    return (e === "input" || e === "button") && "reset" === bS.type
                },
                button: function (bS) {
                    var e = bS.nodeName.toLowerCase();
                    return e === "input" && "button" === bS.type || e === "button"
                },
                input: function (e) {
                    return (/input|select|textarea|button/i).test(e.nodeName)
                },
                focus: function (e) {
                    return e === e.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (bS, e) {
                    return e === 0
                },
                last: function (bT, bS, e, bU) {
                    return bS === bU.length - 1
                },
                even: function (bS, e) {
                    return e % 2 === 0
                },
                odd: function (bS, e) {
                    return e % 2 === 1
                },
                lt: function (bT, bS, e) {
                    return bS < e[3] - 0
                },
                gt: function (bT, bS, e) {
                    return bS > e[3] - 0
                },
                nth: function (bT, bS, e) {
                    return e[3] - 0 === bS
                },
                eq: function (bT, bS, e) {
                    return e[3] - 0 === bS
                }
            },
            filter: {
                PSEUDO: function (bT, bY, bX, bZ) {
                    var e = bY[1],
                        bS = bF.filters[e];
                    if (bS) {
                        return bS(bT, bX, bY, bZ)
                    } else {
                        if (e === "contains") {
                            return (bT.textContent || bT.innerText || bx([bT]) || "").indexOf(bY[3]) >= 0
                        } else {
                            if (e === "not") {
                                var bU = bY[3];
                                for (var bW = 0, bV = bU.length; bW < bV; bW++) {
                                    if (bU[bW] === bT) {
                                        return false
                                    }
                                }
                                return true
                            } else {
                                bz.error(e)
                            }
                        }
                    }
                },
                CHILD: function (bT, bV) {
                    var bU, b1, bX, b0, e, bW, bZ, bY = bV[1],
                        bS = bT;
                    switch (bY) {
                        case "only":
                        case "first":
                            while ((bS = bS.previousSibling)) {
                                if (bS.nodeType === 1) {
                                    return false
                                }
                            }
                            if (bY === "first") {
                                return true
                            }
                            bS = bT;
                        case "last":
                            while ((bS = bS.nextSibling)) {
                                if (bS.nodeType === 1) {
                                    return false
                                }
                            }
                            return true;
                        case "nth":
                            bU = bV[2];
                            b1 = bV[3];
                            if (bU === 1 && b1 === 0) {
                                return true
                            }
                            bX = bV[0];
                            b0 = bT.parentNode;
                            if (b0 && (b0[bD] !== bX || !bT.nodeIndex)) {
                                bW = 0;
                                for (bS = b0.firstChild; bS; bS = bS.nextSibling) {
                                    if (bS.nodeType === 1) {
                                        bS.nodeIndex = ++bW
                                    }
                                }
                                b0[bD] = bX
                            }
                            bZ = bT.nodeIndex - b1;
                            if (bU === 0) {
                                return bZ === 0
                            } else {
                                return (bZ % bU === 0 && bZ / bU >= 0)
                            }
                    }
                },
                ID: function (bS, e) {
                    return bS.nodeType === 1 && bS.getAttribute("id") === e
                },
                TAG: function (bS, e) {
                    return (e === "*" && bS.nodeType === 1) || !! bS.nodeName && bS.nodeName.toLowerCase() === e
                },
                CLASS: function (bS, e) {
                    return (" " + (bS.className || bS.getAttribute("class")) + " ").indexOf(e) > -1
                },
                ATTR: function (bW, bU) {
                    var bT = bU[1],
                        e = bz.attr ? bz.attr(bW, bT) : bF.attrHandle[bT] ? bF.attrHandle[bT](bW) : bW[bT] != null ? bW[bT] : bW.getAttribute(bT),
                        bX = e + "",
                        bV = bU[2],
                        bS = bU[4];
                    return e == null ? bV === "!=" : !bV && bz.attr ? e != null : bV === "=" ? bX === bS : bV === "*=" ? bX.indexOf(bS) >= 0 : bV === "~=" ? (" " + bX + " ").indexOf(bS) >= 0 : !bS ? bX && e !== false : bV === "!=" ? bX !== bS : bV === "^=" ? bX.indexOf(bS) === 0 : bV === "$=" ? bX.substr(bX.length - bS.length) === bS : bV === "|=" ? bX === bS || bX.substr(0, bS.length + 1) === bS + "-" : false
                },
                POS: function (bV, bS, bT, bW) {
                    var e = bS[2],
                        bU = bF.setFilters[e];
                    if (bU) {
                        return bU(bV, bT, bS, bW)
                    }
                }
            }
        };
        var bE = bF.match.POS,
            by = function (bS, e) {
                return "\\" + (e - 0 + 1)
            };
        for (var bA in bF.match) {
            bF.match[bA] = new RegExp(bF.match[bA].source + (/(?![^\[]*\])(?![^\(]*\))/.source));
            bF.leftMatch[bA] = new RegExp(/(^(?:.|\r|\n)*?)/.source + bF.match[bA].source.replace(/\\(\d+)/g, by))
        }
        var bG = function (bS, e) {
            bS = Array.prototype.slice.call(bS, 0);
            if (e) {
                e.push.apply(e, bS);
                return e
            }
            return bS
        };
        try {
            Array.prototype.slice.call(aw.documentElement.childNodes, 0)[0].nodeType
        } catch (bQ) {
            bG = function (bV, bU) {
                var bT = 0,
                    bS = bU || [];
                if (bM.call(bV) === "[object Array]") {
                    Array.prototype.push.apply(bS, bV)
                } else {
                    if (typeof bV.length === "number") {
                        for (var e = bV.length; bT < e; bT++) {
                            bS.push(bV[bT])
                        }
                    } else {
                        for (; bV[bT]; bT++) {
                            bS.push(bV[bT])
                        }
                    }
                }
                return bS
            }
        }
        var bK, bH;
        if (aw.documentElement.compareDocumentPosition) {
            bK = function (bS, e) {
                if (bS === e) {
                    bC = true;
                    return 0
                }
                if (!bS.compareDocumentPosition || !e.compareDocumentPosition) {
                    return bS.compareDocumentPosition ? -1 : 1
                }
                return bS.compareDocumentPosition(e) & 4 ? -1 : 1
            }
        } else {
            bK = function (bZ, bY) {
                if (bZ === bY) {
                    bC = true;
                    return 0
                } else {
                    if (bZ.sourceIndex && bY.sourceIndex) {
                        return bZ.sourceIndex - bY.sourceIndex
                    }
                }
                var bW, bS, bT = [],
                    e = [],
                    bV = bZ.parentNode,
                    bX = bY.parentNode,
                    b0 = bV;
                if (bV === bX) {
                    return bH(bZ, bY)
                } else {
                    if (!bV) {
                        return -1
                    } else {
                        if (!bX) {
                            return 1
                        }
                    }
                }
                while (b0) {
                    bT.unshift(b0);
                    b0 = b0.parentNode
                }
                b0 = bX;
                while (b0) {
                    e.unshift(b0);
                    b0 = b0.parentNode
                }
                bW = bT.length;
                bS = e.length;
                for (var bU = 0; bU < bW && bU < bS; bU++) {
                    if (bT[bU] !== e[bU]) {
                        return bH(bT[bU], e[bU])
                    }
                }
                return bU === bW ? bH(bZ, e[bU], -1) : bH(bT[bU], bY, 1)
            };
            bH = function (bS, e, bT) {
                if (bS === e) {
                    return bT
                }
                var bU = bS.nextSibling;
                while (bU) {
                    if (bU === e) {
                        return -1
                    }
                    bU = bU.nextSibling
                }
                return 1
            }
        }(function () {
            var bS = aw.createElement("div"),
                bT = "script" + (new Date()).getTime(),
                e = aw.documentElement;
            bS.innerHTML = "<a name='" + bT + "'/>";
            e.insertBefore(bS, e.firstChild);
            if (aw.getElementById(bT)) {
                bF.find.ID = function (bV, bW, bX) {
                    if (typeof bW.getElementById !== "undefined" && !bX) {
                        var bU = bW.getElementById(bV[1]);
                        return bU ? bU.id === bV[1] || typeof bU.getAttributeNode !== "undefined" && bU.getAttributeNode("id").nodeValue === bV[1] ? [bU] : M : []
                    }
                };
                bF.filter.ID = function (bW, bU) {
                    var bV = typeof bW.getAttributeNode !== "undefined" && bW.getAttributeNode("id");
                    return bW.nodeType === 1 && bV && bV.nodeValue === bU
                }
            }
            e.removeChild(bS);
            e = bS = null
        })();
        (function () {
            var e = aw.createElement("div");
            e.appendChild(aw.createComment(""));
            if (e.getElementsByTagName("*").length > 0) {
                bF.find.TAG = function (bS, bW) {
                    var bV = bW.getElementsByTagName(bS[1]);
                    if (bS[1] === "*") {
                        var bU = [];
                        for (var bT = 0; bV[bT]; bT++) {
                            if (bV[bT].nodeType === 1) {
                                bU.push(bV[bT])
                            }
                        }
                        bV = bU
                    }
                    return bV
                }
            }
            e.innerHTML = "<a href='#'></a>";
            if (e.firstChild && typeof e.firstChild.getAttribute !== "undefined" && e.firstChild.getAttribute("href") !== "#") {
                bF.attrHandle.href = function (bS) {
                    return bS.getAttribute("href", 2)
                }
            }
            e = null
        })(); if (aw.querySelectorAll) {
            (function () {
                var e = bz,
                    bU = aw.createElement("div"),
                    bT = "__sizzle__";
                bU.innerHTML = "<p class='TEST'></p>";
                if (bU.querySelectorAll && bU.querySelectorAll(".TEST").length === 0) {
                    return
                }
                bz = function (b5, bW, b0, b4) {
                    bW = bW || aw;
                    if (!b4 && !bz.isXML(bW)) {
                        var b3 = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b5);
                        if (b3 && (bW.nodeType === 1 || bW.nodeType === 9)) {
                            if (b3[1]) {
                                return bG(bW.getElementsByTagName(b5), b0)
                            } else {
                                if (b3[2] && bF.find.CLASS && bW.getElementsByClassName) {
                                    return bG(bW.getElementsByClassName(b3[2]), b0)
                                }
                            }
                        }
                        if (bW.nodeType === 9) {
                            if (b5 === "body" && bW.body) {
                                return bG([bW.body], b0)
                            } else {
                                if (b3 && b3[3]) {
                                    var bZ = bW.getElementById(b3[3]);
                                    if (bZ && bZ.parentNode) {
                                        if (bZ.id === b3[3]) {
                                            return bG([bZ], b0)
                                        }
                                    } else {
                                        return bG([], b0)
                                    }
                                }
                            }
                            try {
                                return bG(bW.querySelectorAll(b5), b0)
                            } catch (b1) {}
                        } else {
                            if (bW.nodeType === 1 && bW.nodeName.toLowerCase() !== "object") {
                                var bX = bW,
                                    bY = bW.getAttribute("id"),
                                    bV = bY || bT,
                                    b7 = bW.parentNode,
                                    b6 = /^\s*[+~]/.test(b5);
                                if (!bY) {
                                    bW.setAttribute("id", bV)
                                } else {
                                    bV = bV.replace(/'/g, "\\$&")
                                } if (b6 && b7) {
                                    bW = bW.parentNode
                                }
                                try {
                                    if (!b6 || b7) {
                                        return bG(bW.querySelectorAll("[id='" + bV + "'] " + b5), b0)
                                    }
                                } catch (b2) {} finally {
                                    if (!bY) {
                                        bX.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                    return e(b5, bW, b0, b4)
                };
                for (var bS in e) {
                    bz[bS] = e[bS]
                }
                bU = null
            })()
        }(function () {
            var e = aw.documentElement,
                bT = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (bT) {
                var bV = !bT.call(aw.createElement("div"), "div"),
                    bS = false;
                try {
                    bT.call(aw.documentElement, "[test!='']:sizzle")
                } catch (bU) {
                    bS = true
                }
                bz.matchesSelector = function (bX, bZ) {
                    bZ = bZ.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!bz.isXML(bX)) {
                        try {
                            if (bS || !bF.match.PSEUDO.test(bZ) && !/!=/.test(bZ)) {
                                var bW = bT.call(bX, bZ);
                                if (bW || !bV || bX.document && bX.document.nodeType !== 11) {
                                    return bW
                                }
                            }
                        } catch (bY) {}
                    }
                    return bz(bZ, null, null, [bX]).length > 0
                }
            }
        })();
        (function () {
            var e = aw.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!e.getElementsByClassName || e.getElementsByClassName("e").length === 0) {
                return
            }
            e.lastChild.className = "e";
            if (e.getElementsByClassName("e").length === 1) {
                return
            }
            bF.order.splice(1, 0, "CLASS");
            bF.find.CLASS = function (bS, bT, bU) {
                if (typeof bT.getElementsByClassName !== "undefined" && !bU) {
                    return bT.getElementsByClassName(bS[1])
                }
            };
            e = null
        })();

        function bw(bS, bX, bW, b0, bY, bZ) {
            for (var bU = 0, bT = b0.length; bU < bT; bU++) {
                var e = b0[bU];
                if (e) {
                    var bV = false;
                    e = e[bS];
                    while (e) {
                        if (e[bD] === bW) {
                            bV = b0[e.sizset];
                            break
                        }
                        if (e.nodeType === 1 && !bZ) {
                            e[bD] = bW;
                            e.sizset = bU
                        }
                        if (e.nodeName.toLowerCase() === bX) {
                            bV = e;
                            break
                        }
                        e = e[bS]
                    }
                    b0[bU] = bV
                }
            }
        }
        function bO(bS, bX, bW, b0, bY, bZ) {
            for (var bU = 0, bT = b0.length; bU < bT; bU++) {
                var e = b0[bU];
                if (e) {
                    var bV = false;
                    e = e[bS];
                    while (e) {
                        if (e[bD] === bW) {
                            bV = b0[e.sizset];
                            break
                        }
                        if (e.nodeType === 1) {
                            if (!bZ) {
                                e[bD] = bW;
                                e.sizset = bU
                            }
                            if (typeof bX !== "string") {
                                if (e === bX) {
                                    bV = true;
                                    break
                                }
                            } else {
                                if (bz.filter(bX, [e]).length > 0) {
                                    bV = e;
                                    break
                                }
                            }
                        }
                        e = e[bS]
                    }
                    b0[bU] = bV
                }
            }
        }
        if (aw.documentElement.contains) {
            bz.contains = function (bS, e) {
                return bS !== e && (bS.contains ? bS.contains(e) : true)
            }
        } else {
            if (aw.documentElement.compareDocumentPosition) {
                bz.contains = function (bS, e) {
                    return !!(bS.compareDocumentPosition(e) & 16)
                }
            } else {
                bz.contains = function () {
                    return false
                }
            }
        }
        bz.isXML = function (e) {
            var bS = (e ? e.ownerDocument || e : 0).documentElement;
            return bS ? bS.nodeName !== "HTML" : false
        };
        var bN = function (bT, e, bX) {
            var bW, bY = [],
                bV = "",
                bZ = e.nodeType ? [e] : e;
            while ((bW = bF.match.PSEUDO.exec(bT))) {
                bV += bW[0];
                bT = bT.replace(bF.match.PSEUDO, "")
            }
            bT = bF.relative[bT] ? bT + "*" : bT;
            for (var bU = 0, bS = bZ.length; bU < bS; bU++) {
                bz(bT, bZ[bU], bY, bX)
            }
            return bz.filter(bV, bY)
        };
        bz.attr = b.attr;
        bz.selectors.attrMap = {};
        b.find = bz;
        b.expr = bz.selectors;
        b.expr[":"] = b.expr.filters;
        b.unique = bz.uniqueSort;
        b.text = bz.getText;
        b.isXMLDoc = bz.isXML;
        b.contains = bz.contains
    })();
    var ac = /Until$/,
        ar = /^(?:parents|prevUntil|prevAll)/,
        ba = /,/,
        bq = /^.[^:#\[\.,]*$/,
        Q = Array.prototype.slice,
        I = b.expr.match.POS,
        az = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
    b.fn.extend({
        find: function (e) {
            var bx = this,
                bz, bw;
            if (typeof e !== "string") {
                return b(e).filter(function () {
                    for (bz = 0, bw = bx.length; bz < bw; bz++) {
                        if (b.contains(bx[bz], this)) {
                            return true
                        }
                    }
                })
            }
            var by = this.pushStack("", "find", e),
                bB, bC, bA;
            for (bz = 0, bw = this.length; bz < bw; bz++) {
                bB = by.length;
                b.find(e, this[bz], by);
                if (bz > 0) {
                    for (bC = bB; bC < by.length; bC++) {
                        for (bA = 0; bA < bB; bA++) {
                            if (by[bA] === by[bC]) {
                                by.splice(bC--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return by
        },
        has: function (bw) {
            var e = b(bw);
            return this.filter(function () {
                for (var by = 0, bx = e.length; by < bx; by++) {
                    if (b.contains(this, e[by])) {
                        return true
                    }
                }
            })
        },
        not: function (e) {
            return this.pushStack(aH(this, e, false), "not", e)
        },
        filter: function (e) {
            return this.pushStack(aH(this, e, true), "filter", e)
        },
        is: function (e) {
            return !!e && (typeof e === "string" ? I.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (bz, by) {
            var bw = [],
                bx, e, bA = this[0];
            if (b.isArray(bz)) {
                var bC = 1;
                while (bA && bA.ownerDocument && bA !== by) {
                    for (bx = 0; bx < bz.length; bx++) {
                        if (b(bA).is(bz[bx])) {
                            bw.push({
                                selector: bz[bx],
                                elem: bA,
                                level: bC
                            })
                        }
                    }
                    bA = bA.parentNode;
                    bC++
                }
                return bw
            }
            var bB = I.test(bz) || typeof bz !== "string" ? b(bz, by || this.context) : 0;
            for (bx = 0, e = this.length; bx < e; bx++) {
                bA = this[bx];
                while (bA) {
                    if (bB ? bB.index(bA) > -1 : b.find.matchesSelector(bA, bz)) {
                        bw.push(bA);
                        break
                    } else {
                        bA = bA.parentNode;
                        if (!bA || !bA.ownerDocument || bA === by || bA.nodeType === 11) {
                            break
                        }
                    }
                }
            }
            bw = bw.length > 1 ? b.unique(bw) : bw;
            return this.pushStack(bw, "closest", bz)
        },
        index: function (e) {
            if (!e) {
                return (this[0] && this[0].parentNode) ? this.prevAll().length : -1
            }
            if (typeof e === "string") {
                return b.inArray(this[0], b(e))
            }
            return b.inArray(e.jquery ? e[0] : e, this)
        },
        add: function (e, bw) {
            var by = typeof e === "string" ? b(e, bw) : b.makeArray(e && e.nodeType ? [e] : e),
                bx = b.merge(this.get(), by);
            return this.pushStack(D(by[0]) || D(bx[0]) ? bx : b.unique(bx))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    });

    function D(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }
    b.each({
        parent: function (bw) {
            var e = bw.parentNode;
            return e && e.nodeType !== 11 ? e : null
        },
        parents: function (e) {
            return b.dir(e, "parentNode")
        },
        parentsUntil: function (bw, e, bx) {
            return b.dir(bw, "parentNode", bx)
        },
        next: function (e) {
            return b.nth(e, 2, "nextSibling")
        },
        prev: function (e) {
            return b.nth(e, 2, "previousSibling")
        },
        nextAll: function (e) {
            return b.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return b.dir(e, "previousSibling")
        },
        nextUntil: function (bw, e, bx) {
            return b.dir(bw, "nextSibling", bx)
        },
        prevUntil: function (bw, e, bx) {
            return b.dir(bw, "previousSibling", bx)
        },
        siblings: function (e) {
            return b.sibling(e.parentNode.firstChild, e)
        },
        children: function (e) {
            return b.sibling(e.firstChild)
        },
        contents: function (e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.makeArray(e.childNodes)
        }
    }, function (e, bw) {
        b.fn[e] = function (bz, bx) {
            var by = b.map(this, bw, bz);
            if (!ac.test(e)) {
                bx = bz
            }
            if (bx && typeof bx === "string") {
                by = b.filter(bx, by)
            }
            by = this.length > 1 && !az[e] ? b.unique(by) : by;
            if ((this.length > 1 || ba.test(bx)) && ar.test(e)) {
                by = by.reverse()
            }
            return this.pushStack(by, e, Q.call(arguments).join(","))
        }
    });
    b.extend({
        filter: function (bx, e, bw) {
            if (bw) {
                bx = ":not(" + bx + ")"
            }
            return e.length === 1 ? b.find.matchesSelector(e[0], bx) ? [e[0]] : [] : b.find.matches(bx, e)
        },
        dir: function (bx, bw, bz) {
            var e = [],
                by = bx[bw];
            while (by && by.nodeType !== 9 && (bz === M || by.nodeType !== 1 || !b(by).is(bz))) {
                if (by.nodeType === 1) {
                    e.push(by)
                }
                by = by[bw]
            }
            return e
        },
        nth: function (bz, e, bx, by) {
            e = e || 1;
            var bw = 0;
            for (; bz; bz = bz[bx]) {
                if (bz.nodeType === 1 && ++bw === e) {
                    break
                }
            }
            return bz
        },
        sibling: function (bx, bw) {
            var e = [];
            for (; bx; bx = bx.nextSibling) {
                if (bx.nodeType === 1 && bx !== bw) {
                    e.push(bx)
                }
            }
            return e
        }
    });

    function aH(by, bx, e) {
        bx = bx || 0;
        if (b.isFunction(bx)) {
            return b.grep(by, function (bA, bz) {
                var bB = !! bx.call(bA, bz, bA);
                return bB === e
            })
        } else {
            if (bx.nodeType) {
                return b.grep(by, function (bA, bz) {
                    return (bA === bx) === e
                })
            } else {
                if (typeof bx === "string") {
                    var bw = b.grep(by, function (bz) {
                        return bz.nodeType === 1
                    });
                    if (bq.test(bx)) {
                        return b.filter(bx, bw, !e)
                    } else {
                        bx = b.filter(bx, bw)
                    }
                }
            }
        }
        return b.grep(by, function (bA, bz) {
            return (b.inArray(bA, bx) >= 0) === e
        })
    }
    function a(e) {
        var bx = aS.split("|"),
            bw = e.createDocumentFragment();
        if (bw.createElement) {
            while (bx.length) {
                bw.createElement(bx.pop())
            }
        }
        return bw
    }
    var aS = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ah = / jQuery\d+="(?:\d+|null)"/g,
        at = /^\s+/,
        S = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        d = /<([\w:]+)/,
        x = /<tbody/i,
        X = /<|&#?\w+;/,
        af = /<(?:script|style)/i,
        P = /<(?:script|object|embed|option|style)/i,
        ai = new RegExp("<(?:" + aS + ")", "i"),
        p = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bn = /\/(java|ecma)script/i,
        aO = /^\s*<!(?:\[CDATA\[|\-\-)/,
        ay = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, ad = a(aw);
    ay.optgroup = ay.option;
    ay.tbody = ay.tfoot = ay.colgroup = ay.caption = ay.thead;
    ay.th = ay.td;
    if (!b.support.htmlSerialize) {
        ay._default = [1, "div<div>", "</div>"]
    }
    b.fn.extend({
        text: function (e) {
            if (b.isFunction(e)) {
                return this.each(function (bx) {
                    var bw = b(this);
                    bw.text(e.call(this, bx, bw.text()))
                })
            }
            if (typeof e !== "object" && e !== M) {
                return this.empty().append((this[0] && this[0].ownerDocument || aw).createTextNode(e))
            }
            return b.text(this)
        },
        wrapAll: function (e) {
            if (b.isFunction(e)) {
                return this.each(function (bx) {
                    b(this).wrapAll(e.call(this, bx))
                })
            }
            if (this[0]) {
                var bw = b(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    bw.insertBefore(this[0])
                }
                bw.map(function () {
                    var bx = this;
                    while (bx.firstChild && bx.firstChild.nodeType === 1) {
                        bx = bx.firstChild
                    }
                    return bx
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            if (b.isFunction(e)) {
                return this.each(function (bw) {
                    b(this).wrapInner(e.call(this, bw))
                })
            }
            return this.each(function () {
                var bw = b(this),
                    bx = bw.contents();
                if (bx.length) {
                    bx.wrapAll(e)
                } else {
                    bw.append(e)
                }
            })
        },
        wrap: function (e) {
            var bw = b.isFunction(e);
            return this.each(function (bx) {
                b(this).wrapAll(bw ? e.call(this, bx) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                if (!b.nodeName(this, "body")) {
                    b(this).replaceWith(this.childNodes)
                }
            }).end()
        },
        append: function () {
            return this.domManip(arguments, true, function (e) {
                if (this.nodeType === 1) {
                    this.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, true, function (e) {
                if (this.nodeType === 1) {
                    this.insertBefore(e, this.firstChild)
                }
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function (bw) {
                    this.parentNode.insertBefore(bw, this)
                })
            } else {
                if (arguments.length) {
                    var e = b.clean(arguments);
                    e.push.apply(e, this.toArray());
                    return this.pushStack(e, "before", arguments)
                }
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function (bw) {
                    this.parentNode.insertBefore(bw, this.nextSibling)
                })
            } else {
                if (arguments.length) {
                    var e = this.pushStack(this, "after", arguments);
                    e.push.apply(e, b.clean(arguments));
                    return e
                }
            }
        },
        remove: function (e, by) {
            for (var bw = 0, bx;
                 (bx = this[bw]) != null; bw++) {
                if (!e || b.filter(e, [bx]).length) {
                    if (!by && bx.nodeType === 1) {
                        b.cleanData(bx.getElementsByTagName("*"));
                        b.cleanData([bx])
                    }
                    if (bx.parentNode) {
                        bx.parentNode.removeChild(bx)
                    }
                }
            }
            return this
        },
        empty: function () {
            for (var e = 0, bw;
                 (bw = this[e]) != null; e++) {
                if (bw.nodeType === 1) {
                    b.cleanData(bw.getElementsByTagName("*"))
                }
                while (bw.firstChild) {
                    bw.removeChild(bw.firstChild)
                }
            }
            return this
        },
        clone: function (bw, e) {
            bw = bw == null ? false : bw;
            e = e == null ? bw : e;
            return this.map(function () {
                return b.clone(this, bw, e)
            })
        },
        html: function (by) {
            if (by === M) {
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(ah, "") : null
            } else {
                if (typeof by === "string" && !af.test(by) && (b.support.leadingWhitespace || !at.test(by)) && !ay[(d.exec(by) || ["", ""])[1].toLowerCase()]) {
                    by = by.replace(S, "<$1></$2>");
                    try {
                        for (var bx = 0, bw = this.length; bx < bw; bx++) {
                            if (this[bx].nodeType === 1) {
                                b.cleanData(this[bx].getElementsByTagName("*"));
                                this[bx].innerHTML = by
                            }
                        }
                    } catch (bz) {
                        this.empty().append(by)
                    }
                } else {
                    if (b.isFunction(by)) {
                        this.each(function (bA) {
                            var e = b(this);
                            e.html(by.call(this, bA, e.html()))
                        })
                    } else {
                        this.empty().append(by)
                    }
                }
            }
            return this
        },
        replaceWith: function (e) {
            if (this[0] && this[0].parentNode) {
                if (b.isFunction(e)) {
                    return this.each(function (by) {
                        var bx = b(this),
                            bw = bx.html();
                        bx.replaceWith(e.call(this, by, bw))
                    })
                }
                if (typeof e !== "string") {
                    e = b(e).detach()
                }
                return this.each(function () {
                    var bx = this.nextSibling,
                        bw = this.parentNode;
                    b(this).remove();
                    if (bx) {
                        b(bx).before(e)
                    } else {
                        b(bw).append(e)
                    }
                })
            } else {
                return this.length ? this.pushStack(b(b.isFunction(e) ? e() : e), "replaceWith", e) : this
            }
        },
        detach: function (e) {
            return this.remove(e, true)
        },
        domManip: function (bC, bG, bF) {
            var by, bz, bB, bE, bD = bC[0],
                bw = [];
            if (!b.support.checkClone && arguments.length === 3 && typeof bD === "string" && p.test(bD)) {
                return this.each(function () {
                    b(this).domManip(bC, bG, bF, true)
                })
            }
            if (b.isFunction(bD)) {
                return this.each(function (bI) {
                    var bH = b(this);
                    bC[0] = bD.call(this, bI, bG ? bH.html() : M);
                    bH.domManip(bC, bG, bF)
                })
            }
            if (this[0]) {
                bE = bD && bD.parentNode;
                if (b.support.parentNode && bE && bE.nodeType === 11 && bE.childNodes.length === this.length) {
                    by = {
                        fragment: bE
                    }
                } else {
                    by = b.buildFragment(bC, this, bw)
                }
                bB = by.fragment;
                if (bB.childNodes.length === 1) {
                    bz = bB = bB.firstChild
                } else {
                    bz = bB.firstChild
                } if (bz) {
                    bG = bG && b.nodeName(bz, "tr");
                    for (var bx = 0, e = this.length, bA = e - 1; bx < e; bx++) {
                        bF.call(bG ? bb(this[bx], bz) : this[bx], by.cacheable || (e > 1 && bx < bA) ? b.clone(bB, true, true) : bB)
                    }
                }
                if (bw.length) {
                    b.each(bw, bp)
                }
            }
            return this
        }
    });

    function bb(e, bw) {
        return b.nodeName(e, "table") ? (e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody"))) : e
    }
    function u(bC, bw) {
        if (bw.nodeType !== 1 || !b.hasData(bC)) {
            return
        }
        var bz, by, e, bB = b._data(bC),
            bA = b._data(bw, bB),
            bx = bB.events;
        if (bx) {
            delete bA.handle;
            bA.events = {};
            for (bz in bx) {
                for (by = 0, e = bx[bz].length; by < e; by++) {
                    b.event.add(bw, bz + (bx[bz][by].namespace ? "." : "") + bx[bz][by].namespace, bx[bz][by], bx[bz][by].data)
                }
            }
        }
        if (bA.data) {
            bA.data = b.extend({}, bA.data)
        }
    }
    function aj(bw, e) {
        var bx;
        if (e.nodeType !== 1) {
            return
        }
        if (e.clearAttributes) {
            e.clearAttributes()
        }
        if (e.mergeAttributes) {
            e.mergeAttributes(bw)
        }
        bx = e.nodeName.toLowerCase();
        if (bx === "object") {
            e.outerHTML = bw.outerHTML
        } else {
            if (bx === "input" && (bw.type === "checkbox" || bw.type === "radio")) {
                if (bw.checked) {
                    e.defaultChecked = e.checked = bw.checked
                }
                if (e.value !== bw.value) {
                    e.value = bw.value
                }
            } else {
                if (bx === "option") {
                    e.selected = bw.defaultSelected
                } else {
                    if (bx === "input" || bx === "textarea") {
                        e.defaultValue = bw.defaultValue
                    }
                }
            }
        }
        e.removeAttribute(b.expando)
    }
    b.buildFragment = function (bA, by, bw) {
        var bz, e, bx, bB, bC = bA[0];
        if (by && by[0]) {
            bB = by[0].ownerDocument || by[0]
        }
        if (!bB.createDocumentFragment) {
            bB = aw
        }
        if (bA.length === 1 && typeof bC === "string" && bC.length < 512 && bB === aw && bC.charAt(0) === "<" && !P.test(bC) && (b.support.checkClone || !p.test(bC)) && (b.support.html5Clone || !ai.test(bC))) {
            e = true;
            bx = b.fragments[bC];
            if (bx && bx !== 1) {
                bz = bx
            }
        }
        if (!bz) {
            bz = bB.createDocumentFragment();
            b.clean(bA, bB, bz, bw)
        }
        if (e) {
            b.fragments[bC] = bx ? bz : 1
        }
        return {
            fragment: bz,
            cacheable: e
        }
    };
    b.fragments = {};
    b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, bw) {
        b.fn[e] = function (bx) {
            var bA = [],
                bD = b(bx),
                bC = this.length === 1 && this[0].parentNode;
            if (bC && bC.nodeType === 11 && bC.childNodes.length === 1 && bD.length === 1) {
                bD[bw](this[0]);
                return this
            } else {
                for (var bB = 0, by = bD.length; bB < by; bB++) {
                    var bz = (bB > 0 ? this.clone(true) : this).get();
                    b(bD[bB])[bw](bz);
                    bA = bA.concat(bz)
                }
                return this.pushStack(bA, e, bD.selector)
            }
        }
    });

    function bh(e) {
        if (typeof e.getElementsByTagName !== "undefined") {
            return e.getElementsByTagName("*")
        } else {
            if (typeof e.querySelectorAll !== "undefined") {
                return e.querySelectorAll("*")
            } else {
                return []
            }
        }
    }
    function aA(e) {
        if (e.type === "checkbox" || e.type === "radio") {
            e.defaultChecked = e.checked
        }
    }
    function F(e) {
        var bw = (e.nodeName || "").toLowerCase();
        if (bw === "input") {
            aA(e)
        } else {
            if (bw !== "script" && typeof e.getElementsByTagName !== "undefined") {
                b.grep(e.getElementsByTagName("input"), aA)
            }
        }
    }
    function am(e) {
        var bw = aw.createElement("div");
        ad.appendChild(bw);
        bw.innerHTML = e.outerHTML;
        return bw.firstChild
    }
    b.extend({
        clone: function (bz, bB, bx) {
            var e, bw, by, bA = b.support.html5Clone || !ai.test("<" + bz.nodeName) ? bz.cloneNode(true) : am(bz);
            if ((!b.support.noCloneEvent || !b.support.noCloneChecked) && (bz.nodeType === 1 || bz.nodeType === 11) && !b.isXMLDoc(bz)) {
                aj(bz, bA);
                e = bh(bz);
                bw = bh(bA);
                for (by = 0; e[by]; ++by) {
                    if (bw[by]) {
                        aj(e[by], bw[by])
                    }
                }
            }
            if (bB) {
                u(bz, bA);
                if (bx) {
                    e = bh(bz);
                    bw = bh(bA);
                    for (by = 0; e[by]; ++by) {
                        u(e[by], bw[by])
                    }
                }
            }
            e = bw = null;
            return bA
        },
        clean: function (bx, bz, bI, bB) {
            var bG;
            bz = bz || aw;
            if (typeof bz.createElement === "undefined") {
                bz = bz.ownerDocument || bz[0] && bz[0].ownerDocument || aw
            }
            var bJ = [],
                bC;
            for (var bF = 0, bA;
                 (bA = bx[bF]) != null; bF++) {
                if (typeof bA === "number") {
                    bA += ""
                }
                if (!bA) {
                    continue
                }
                if (typeof bA === "string") {
                    if (!X.test(bA)) {
                        bA = bz.createTextNode(bA)
                    } else {
                        bA = bA.replace(S, "<$1></$2>");
                        var bL = (d.exec(bA) || ["", ""])[1].toLowerCase(),
                            by = ay[bL] || ay._default,
                            bE = by[0],
                            bw = bz.createElement("div");
                        if (bz === aw) {
                            ad.appendChild(bw)
                        } else {
                            a(bz).appendChild(bw)
                        }
                        bw.innerHTML = by[1] + bA + by[2];
                        while (bE--) {
                            bw = bw.lastChild
                        }
                        if (!b.support.tbody) {
                            var e = x.test(bA),
                                bD = bL === "table" && !e ? bw.firstChild && bw.firstChild.childNodes : by[1] === "<table>" && !e ? bw.childNodes : [];
                            for (bC = bD.length - 1; bC >= 0; --bC) {
                                if (b.nodeName(bD[bC], "tbody") && !bD[bC].childNodes.length) {
                                    bD[bC].parentNode.removeChild(bD[bC])
                                }
                            }
                        }
                        if (!b.support.leadingWhitespace && at.test(bA)) {
                            bw.insertBefore(bz.createTextNode(at.exec(bA)[0]), bw.firstChild)
                        }
                        bA = bw.childNodes
                    }
                }
                var bH;
                if (!b.support.appendChecked) {
                    if (bA[0] && typeof (bH = bA.length) === "number") {
                        for (bC = 0; bC < bH; bC++) {
                            F(bA[bC])
                        }
                    } else {
                        F(bA)
                    }
                }
                if (bA.nodeType) {
                    bJ.push(bA)
                } else {
                    bJ = b.merge(bJ, bA)
                }
            }
            if (bI) {
                bG = function (bM) {
                    return !bM.type || bn.test(bM.type)
                };
                for (bF = 0; bJ[bF]; bF++) {
                    if (bB && b.nodeName(bJ[bF], "script") && (!bJ[bF].type || bJ[bF].type.toLowerCase() === "text/javascript")) {
                        bB.push(bJ[bF].parentNode ? bJ[bF].parentNode.removeChild(bJ[bF]) : bJ[bF])
                    } else {
                        if (bJ[bF].nodeType === 1) {
                            var bK = b.grep(bJ[bF].getElementsByTagName("script"), bG);
                            bJ.splice.apply(bJ, [bF + 1, 0].concat(bK))
                        }
                        bI.appendChild(bJ[bF])
                    }
                }
            }
            return bJ
        },
        cleanData: function (bw) {
            var bz, bx, e = b.cache,
                bC = b.event.special,
                bB = b.support.deleteExpando;
            for (var bA = 0, by;
                 (by = bw[bA]) != null; bA++) {
                if (by.nodeName && b.noData[by.nodeName.toLowerCase()]) {
                    continue
                }
                bx = by[b.expando];
                if (bx) {
                    bz = e[bx];
                    if (bz && bz.events) {
                        for (var bD in bz.events) {
                            if (bC[bD]) {
                                b.event.remove(by, bD)
                            } else {
                                b.removeEvent(by, bD, bz.handle)
                            }
                        }
                        if (bz.handle) {
                            bz.handle.elem = null
                        }
                    }
                    if (bB) {
                        delete by[b.expando]
                    } else {
                        if (by.removeAttribute) {
                            by.removeAttribute(b.expando)
                        }
                    }
                    delete e[bx]
                }
            }
        }
    });

    function bp(e, bw) {
        if (bw.src) {
            b.ajax({
                url: bw.src,
                async: false,
                dataType: "script"
            })
        } else {
            b.globalEval((bw.text || bw.textContent || bw.innerHTML || "").replace(aO, "/*$0*/"))
        } if (bw.parentNode) {
            bw.parentNode.removeChild(bw)
        }
    }
    var al = /alpha\([^)]*\)/i,
        av = /opacity=([^)]*)/,
        A = /([A-Z]|^ms)/g,
        bd = /^-?\d+(?:px)?$/i,
        bo = /^-?\d/,
        J = /^([\-+])=([\-+.\de]+)/,
        a8 = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, ao = ["Left", "Right"],
        a2 = ["Top", "Bottom"],
        aa, aJ, aY;
    b.fn.css = function (e, bw) {
        if (arguments.length === 2 && bw === M) {
            return this
        }
        return b.access(this, e, bw, true, function (by, bx, bz) {
            return bz !== M ? b.style(by, bx, bz) : b.css(by, bx)
        })
    };
    b.extend({
        cssHooks: {
            opacity: {
                get: function (bx, bw) {
                    if (bw) {
                        var e = aa(bx, "opacity", "opacity");
                        return e === "" ? "1" : e
                    } else {
                        return bx.style.opacity
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (by, bx, bE, bz) {
            if (!by || by.nodeType === 3 || by.nodeType === 8 || !by.style) {
                return
            }
            var bC, bD, bA = b.camelCase(bx),
                bw = by.style,
                bF = b.cssHooks[bA];
            bx = b.cssProps[bA] || bA;
            if (bE !== M) {
                bD = typeof bE;
                if (bD === "string" && (bC = J.exec(bE))) {
                    bE = (+(bC[1] + 1) * +bC[2]) + parseFloat(b.css(by, bx));
                    bD = "number"
                }
                if (bE == null || bD === "number" && isNaN(bE)) {
                    return
                }
                if (bD === "number" && !b.cssNumber[bA]) {
                    bE += "px"
                }
                if (!bF || !("set" in bF) || (bE = bF.set(by, bE)) !== M) {
                    try {
                        bw[bx] = bE
                    } catch (bB) {}
                }
            } else {
                if (bF && "get" in bF && (bC = bF.get(by, false, bz)) !== M) {
                    return bC
                }
                return bw[bx]
            }
        },
        css: function (bz, by, bw) {
            var bx, e;
            by = b.camelCase(by);
            e = b.cssHooks[by];
            by = b.cssProps[by] || by;
            if (by === "cssFloat") {
                by = "float"
            }
            if (e && "get" in e && (bx = e.get(bz, true, bw)) !== M) {
                return bx
            } else {
                if (aa) {
                    return aa(bz, by)
                }
            }
        },
        swap: function (by, bx, bz) {
            var e = {};
            for (var bw in bx) {
                e[bw] = by.style[bw];
                by.style[bw] = bx[bw]
            }
            bz.call(by);
            for (bw in bx) {
                by.style[bw] = e[bw]
            }
        }
    });
    b.curCSS = b.css;
    b.each(["height", "width"], function (bw, e) {
        b.cssHooks[e] = {
            get: function (bz, by, bx) {
                var bA;
                if (by) {
                    if (bz.offsetWidth !== 0) {
                        return q(bz, e, bx)
                    } else {
                        b.swap(bz, a8, function () {
                            bA = q(bz, e, bx)
                        })
                    }
                    return bA
                }
            },
            set: function (bx, by) {
                if (bd.test(by)) {
                    by = parseFloat(by);
                    if (by >= 0) {
                        return by + "px"
                    }
                } else {
                    return by
                }
            }
        }
    });
    if (!b.support.opacity) {
        b.cssHooks.opacity = {
            get: function (bw, e) {
                return av.test((e && bw.currentStyle ? bw.currentStyle.filter : bw.style.filter) || "") ? (parseFloat(RegExp.$1) / 100) + "" : e ? "1" : ""
            },
            set: function (bz, bA) {
                var by = bz.style,
                    bw = bz.currentStyle,
                    e = b.isNumeric(bA) ? "alpha(opacity=" + bA * 100 + ")" : "",
                    bx = bw && bw.filter || by.filter || "";
                by.zoom = 1;
                if (bA >= 1 && b.trim(bx.replace(al, "")) === "") {
                    by.removeAttribute("filter");
                    if (bw && !bw.filter) {
                        return
                    }
                }
                by.filter = al.test(bx) ? bx.replace(al, e) : bx + " " + e
            }
        }
    }
    b(function () {
        if (!b.support.reliableMarginRight) {
            b.cssHooks.marginRight = {
                get: function (bx, bw) {
                    var e;
                    b.swap(bx, {
                        display: "inline-block"
                    }, function () {
                        if (bw) {
                            e = aa(bx, "margin-right", "marginRight")
                        } else {
                            e = bx.style.marginRight
                        }
                    });
                    return e
                }
            }
        }
    });
    if (aw.defaultView && aw.defaultView.getComputedStyle) {
        aJ = function (bz, bx) {
            var bw, by, e;
            bx = bx.replace(A, "-$1").toLowerCase();
            if ((by = bz.ownerDocument.defaultView) && (e = by.getComputedStyle(bz, null))) {
                bw = e.getPropertyValue(bx);
                if (bw === "" && !b.contains(bz.ownerDocument.documentElement, bz)) {
                    bw = b.style(bz, bx)
                }
            }
            return bw
        }
    }
    if (aw.documentElement.currentStyle) {
        aY = function (bA, bx) {
            var bB, e, bz, bw = bA.currentStyle && bA.currentStyle[bx],
                by = bA.style;
            if (bw === null && by && (bz = by[bx])) {
                bw = bz
            }
            if (!bd.test(bw) && bo.test(bw)) {
                bB = by.left;
                e = bA.runtimeStyle && bA.runtimeStyle.left;
                if (e) {
                    bA.runtimeStyle.left = bA.currentStyle.left
                }
                by.left = bx === "fontSize" ? "1em" : (bw || 0);
                bw = by.pixelLeft + "px";
                by.left = bB;
                if (e) {
                    bA.runtimeStyle.left = e
                }
            }
            return bw === "" ? "auto" : bw
        }
    }
    aa = aJ || aY;

    function q(bz, bx, bw) {
        var bB = bx === "width" ? bz.offsetWidth : bz.offsetHeight,
            bA = bx === "width" ? ao : a2,
            by = 0,
            e = bA.length;
        if (bB > 0) {
            if (bw !== "border") {
                for (; by < e; by++) {
                    if (!bw) {
                        bB -= parseFloat(b.css(bz, "padding" + bA[by])) || 0
                    }
                    if (bw === "margin") {
                        bB += parseFloat(b.css(bz, bw + bA[by])) || 0
                    } else {
                        bB -= parseFloat(b.css(bz, "border" + bA[by] + "Width")) || 0
                    }
                }
            }
            return bB + "px"
        }
        bB = aa(bz, bx, bx);
        if (bB < 0 || bB == null) {
            bB = bz.style[bx] || 0
        }
        bB = parseFloat(bB) || 0;
        if (bw) {
            for (; by < e; by++) {
                bB += parseFloat(b.css(bz, "padding" + bA[by])) || 0;
                if (bw !== "padding") {
                    bB += parseFloat(b.css(bz, "border" + bA[by] + "Width")) || 0
                }
                if (bw === "margin") {
                    bB += parseFloat(b.css(bz, bw + bA[by])) || 0
                }
            }
        }
        return bB + "px"
    }
    if (b.expr && b.expr.filters) {
        b.expr.filters.hidden = function (bx) {
            var bw = bx.offsetWidth,
                e = bx.offsetHeight;
            return (bw === 0 && e === 0) || (!b.support.reliableHiddenOffsets && ((bx.style && bx.style.display) || b.css(bx, "display")) === "none")
        };
        b.expr.filters.visible = function (e) {
            return !b.expr.filters.hidden(e)
        }
    }
    var l = /%20/g,
        aq = /\[\]$/,
        bt = /\r?\n/g,
        br = /#.*$/,
        aE = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        a0 = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        aN = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        aR = /^(?:GET|HEAD)$/,
        c = /^\/\//,
        N = /\?/,
        a7 = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        r = /^(?:select|textarea)/i,
        h = /\s+/,
        bs = /([?&])_=[^&]*/,
        L = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        B = b.fn.load,
        ab = {}, s = {}, aF, t, aW = ["*/"] + ["*"];
    try {
        aF = bm.href
    } catch (ax) {
        aF = aw.createElement("a");
        aF.href = "";
        aF = aF.href
    }
    t = L.exec(aF.toLowerCase()) || [];

    function f(e) {
        return function (bz, bB) {
            if (typeof bz !== "string") {
                bB = bz;
                bz = "*"
            }
            if (b.isFunction(bB)) {
                var by = bz.toLowerCase().split(h),
                    bx = 0,
                    bA = by.length,
                    bw, bC, bD;
                for (; bx < bA; bx++) {
                    bw = by[bx];
                    bD = /^\+/.test(bw);
                    if (bD) {
                        bw = bw.substr(1) || "*"
                    }
                    bC = e[bw] = e[bw] || [];
                    bC[bD ? "unshift" : "push"](bB)
                }
            }
        }
    }
    function aX(bw, bF, bA, bE, bC, by) {
        bC = bC || bF.dataTypes[0];
        by = by || {};
        by[bC] = true;
        var bB = bw[bC],
            bx = 0,
            e = bB ? bB.length : 0,
            bz = (bw === ab),
            bD;
        for (; bx < e && (bz || !bD); bx++) {
            bD = bB[bx](bF, bA, bE);
            if (typeof bD === "string") {
                if (!bz || by[bD]) {
                    bD = M
                } else {
                    bF.dataTypes.unshift(bD);
                    bD = aX(bw, bF, bA, bE, bD, by)
                }
            }
        }
        if ((bz || !bD) && !by["*"]) {
            bD = aX(bw, bF, bA, bE, "*", by)
        }
        return bD
    }
    function an(bx, by) {
        var bw, e, bz = b.ajaxSettings.flatOptions || {};
        for (bw in by) {
            if (by[bw] !== M) {
                (bz[bw] ? bx : (e || (e = {})))[bw] = by[bw]
            }
        }
        if (e) {
            b.extend(true, bx, e)
        }
    }
    b.fn.extend({
        load: function (bx, bA, bB) {
            if (typeof bx !== "string" && B) {
                return B.apply(this, arguments)
            } else {
                if (!this.length) {
                    return this
                }
            }
            var bz = bx.indexOf(" ");
            if (bz >= 0) {
                var e = bx.slice(bz, bx.length);
                bx = bx.slice(0, bz)
            }
            var by = "GET";
            if (bA) {
                if (b.isFunction(bA)) {
                    bB = bA;
                    bA = M
                } else {
                    if (typeof bA === "object") {
                        bA = b.param(bA, b.ajaxSettings.traditional);
                        by = "POST"
                    }
                }
            }
            var bw = this;
            b.ajax({
                url: bx,
                type: by,
                dataType: "html",
                data: bA,
                complete: function (bD, bC, bE) {
                    bE = bD.responseText;
                    if (bD.isResolved()) {
                        bD.done(function (bF) {
                            bE = bF
                        });
                        bw.html(e ? b("<div>").append(bE.replace(a7, "")).find(e) : bE)
                    }
                    if (bB) {
                        bw.each(bB, [bE, bC, bD])
                    }
                }
            });
            return this
        },
        serialize: function () {
            return b.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? b.makeArray(this.elements) : this
            }).filter(function () {
                    return this.name && !this.disabled && (this.checked || r.test(this.nodeName) || a0.test(this.type))
                }).map(function (e, bw) {
                    var bx = b(this).val();
                    return bx == null ? null : b.isArray(bx) ? b.map(bx, function (bz, by) {
                        return {
                            name: bw.name,
                            value: bz.replace(bt, "\r\n")
                        }
                    }) : {
                        name: bw.name,
                        value: bx.replace(bt, "\r\n")
                    }
                }).get()
        }
    });
    b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, bw) {
        b.fn[bw] = function (bx) {
            return this.on(bw, bx)
        }
    });
    b.each(["get", "post"], function (e, bw) {
        b[bw] = function (bx, bz, bA, by) {
            if (b.isFunction(bz)) {
                by = by || bA;
                bA = bz;
                bz = M
            }
            return b.ajax({
                type: bw,
                url: bx,
                data: bz,
                success: bA,
                dataType: by
            })
        }
    });
    b.extend({
        getScript: function (e, bw) {
            return b.get(e, M, bw, "script")
        },
        getJSON: function (e, bw, bx) {
            return b.get(e, bw, bx, "json")
        },
        ajaxSetup: function (bw, e) {
            if (e) {
                an(bw, b.ajaxSettings)
            } else {
                e = bw;
                bw = b.ajaxSettings
            }
            an(bw, e);
            return bw
        },
        ajaxSettings: {
            url: aF,
            isLocal: aN.test(t[1]),
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": aW
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": bc.String,
                "text html": true,
                "text json": b.parseJSON,
                "text xml": b.parseXML
            },
            flatOptions: {
                context: true,
                url: true
            }
        },
        ajaxPrefilter: f(ab),
        ajaxTransport: f(s),
        ajax: function (bA, by) {
            if (typeof bA === "object") {
                by = bA;
                bA = M
            }
            by = by || {};
            var bE = b.ajaxSetup({}, by),
                bT = bE.context || bE,
                bH = bT !== bE && (bT.nodeType || bT instanceof b) ? b(bT) : b.event,
                bS = b.Deferred(),
                bO = b.Callbacks("once memory"),
                bC = bE.statusCode || {}, bD, bI = {}, bP = {}, bR, bz, bM, bF, bJ, bB = 0,
                bx, bL, bK = {
                    readyState: 0,
                    setRequestHeader: function (bU, bV) {
                        if (!bB) {
                            var e = bU.toLowerCase();
                            bU = bP[e] = bP[e] || bU;
                            bI[bU] = bV
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return bB === 2 ? bR : null
                    },
                    getResponseHeader: function (bU) {
                        var e;
                        if (bB === 2) {
                            if (!bz) {
                                bz = {};
                                while ((e = aE.exec(bR))) {
                                    bz[e[1].toLowerCase()] = e[2]
                                }
                            }
                            e = bz[bU.toLowerCase()]
                        }
                        return e === M ? null : e
                    },
                    overrideMimeType: function (e) {
                        if (!bB) {
                            bE.mimeType = e
                        }
                        return this
                    },
                    abort: function (e) {
                        e = e || "abort";
                        if (bM) {
                            bM.abort(e)
                        }
                        bG(0, e);
                        return this
                    }
                };

            function bG(b0, bV, b1, bX) {
                if (bB === 2) {
                    return
                }
                bB = 2;
                if (bF) {
                    clearTimeout(bF)
                }
                bM = M;
                bR = bX || "";
                bK.readyState = b0 > 0 ? 4 : 0;
                var bU, b5, b4, bY = bV,
                    bZ = b1 ? bk(bE, bK, b1) : M,
                    bW, b3;
                if (b0 >= 200 && b0 < 300 || b0 === 304) {
                    if (bE.ifModified) {
                        if ((bW = bK.getResponseHeader("Last-Modified"))) {
                            b.lastModified[bD] = bW
                        }
                        if ((b3 = bK.getResponseHeader("Etag"))) {
                            b.etag[bD] = b3
                        }
                    }
                    if (b0 === 304) {
                        bY = "notmodified";
                        bU = true
                    } else {
                        try {
                            b5 = H(bE, bZ);
                            bY = "success";
                            bU = true
                        } catch (b2) {
                            bY = "parsererror";
                            b4 = b2
                        }
                    }
                } else {
                    b4 = bY;
                    if (!bY || b0) {
                        bY = "error";
                        if (b0 < 0) {
                            b0 = 0
                        }
                    }
                }
                bK.status = b0;
                bK.statusText = "" + (bV || bY);
                if (bU) {
                    bS.resolveWith(bT, [b5, bY, bK])
                } else {
                    bS.rejectWith(bT, [bK, bY, b4])
                }
                bK.statusCode(bC);
                bC = M;
                if (bx) {
                    bH.trigger("ajax" + (bU ? "Success" : "Error"), [bK, bE, bU ? b5 : b4])
                }
                bO.fireWith(bT, [bK, bY]);
                if (bx) {
                    bH.trigger("ajaxComplete", [bK, bE]);
                    if (!(--b.active)) {
                        b.event.trigger("ajaxStop")
                    }
                }
            }
            bS.promise(bK);
            bK.success = bK.done;
            bK.error = bK.fail;
            bK.complete = bO.add;
            bK.statusCode = function (bU) {
                if (bU) {
                    var e;
                    if (bB < 2) {
                        for (e in bU) {
                            bC[e] = [bC[e], bU[e]]
                        }
                    } else {
                        e = bU[bK.status];
                        bK.then(e, e)
                    }
                }
                return this
            };
            bE.url = ((bA || bE.url) + "").replace(br, "").replace(c, t[1] + "//");
            bE.dataTypes = b.trim(bE.dataType || "*").toLowerCase().split(h);
            if (bE.crossDomain == null) {
                bJ = L.exec(bE.url.toLowerCase());
                bE.crossDomain = !! (bJ && (bJ[1] != t[1] || bJ[2] != t[2] || (bJ[3] || (bJ[1] === "http:" ? 80 : 443)) != (t[3] || (t[1] === "http:" ? 80 : 443))))
            }
            if (bE.data && bE.processData && typeof bE.data !== "string") {
                bE.data = b.param(bE.data, bE.traditional)
            }
            aX(ab, bE, by, bK);
            if (bB === 2) {
                return false
            }
            bx = bE.global;
            bE.type = bE.type.toUpperCase();
            bE.hasContent = !aR.test(bE.type);
            if (bx && b.active++ === 0) {
                b.event.trigger("ajaxStart")
            }
            if (!bE.hasContent) {
                if (bE.data) {
                    bE.url += (N.test(bE.url) ? "&" : "?") + bE.data;
                    delete bE.data
                }
                bD = bE.url;
                if (bE.cache === false) {
                    var bw = b.now(),
                        bQ = bE.url.replace(bs, "$1_=" + bw);
                    bE.url = bQ + ((bQ === bE.url) ? (N.test(bE.url) ? "&" : "?") + "_=" + bw : "")
                }
            }
            if (bE.data && bE.hasContent && bE.contentType !== false || by.contentType) {
                bK.setRequestHeader("Content-Type", bE.contentType)
            }
            if (bE.ifModified) {
                bD = bD || bE.url;
                if (b.lastModified[bD]) {
                    bK.setRequestHeader("If-Modified-Since", b.lastModified[bD])
                }
                if (b.etag[bD]) {
                    bK.setRequestHeader("If-None-Match", b.etag[bD])
                }
            }
            bK.setRequestHeader("Accept", bE.dataTypes[0] && bE.accepts[bE.dataTypes[0]] ? bE.accepts[bE.dataTypes[0]] + (bE.dataTypes[0] !== "*" ? ", " + aW + "; q=0.01" : "") : bE.accepts["*"]);
            for (bL in bE.headers) {
                bK.setRequestHeader(bL, bE.headers[bL])
            }
            if (bE.beforeSend && (bE.beforeSend.call(bT, bK, bE) === false || bB === 2)) {
                bK.abort();
                return false
            }
            for (bL in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                bK[bL](bE[bL])
            }
            bM = aX(s, bE, by, bK);
            if (!bM) {
                bG(-1, "No Transport")
            } else {
                bK.readyState = 1;
                if (bx) {
                    bH.trigger("ajaxSend", [bK, bE])
                }
                if (bE.async && bE.timeout > 0) {
                    bF = setTimeout(function () {
                        bK.abort("timeout")
                    }, bE.timeout)
                }
                try {
                    bB = 1;
                    bM.send(bI, bG)
                } catch (bN) {
                    if (bB < 2) {
                        bG(-1, bN)
                    } else {
                        throw bN
                    }
                }
            }
            return bK
        },
        param: function (e, bx) {
            var bw = [],
                bz = function (bA, bB) {
                    bB = b.isFunction(bB) ? bB() : bB;
                    bw[bw.length] = encodeURIComponent(bA) + "=" + encodeURIComponent(bB)
                };
            if (bx === M) {
                bx = b.ajaxSettings.traditional
            }
            if (b.isArray(e) || (e.jquery && !b.isPlainObject(e))) {
                b.each(e, function () {
                    bz(this.name, this.value)
                })
            } else {
                for (var by in e) {
                    w(by, e[by], bx, bz)
                }
            }
            return bw.join("&").replace(l, "+")
        }
    });

    function w(bx, bz, bw, by) {
        if (b.isArray(bz)) {
            b.each(bz, function (bB, bA) {
                if (bw || aq.test(bx)) {
                    by(bx, bA)
                } else {
                    w(bx + "[" + (typeof bA === "object" || b.isArray(bA) ? bB : "") + "]", bA, bw, by)
                }
            })
        } else {
            if (!bw && bz != null && typeof bz === "object") {
                for (var e in bz) {
                    w(bx + "[" + e + "]", bz[e], bw, by)
                }
            } else {
                by(bx, bz)
            }
        }
    }
    b.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });

    function bk(bE, bD, bA) {
        var bw = bE.contents,
            bC = bE.dataTypes,
            bx = bE.responseFields,
            bz, bB, by, e;
        for (bB in bx) {
            if (bB in bA) {
                bD[bx[bB]] = bA[bB]
            }
        }
        while (bC[0] === "*") {
            bC.shift();
            if (bz === M) {
                bz = bE.mimeType || bD.getResponseHeader("content-type")
            }
        }
        if (bz) {
            for (bB in bw) {
                if (bw[bB] && bw[bB].test(bz)) {
                    bC.unshift(bB);
                    break
                }
            }
        }
        if (bC[0] in bA) {
            by = bC[0]
        } else {
            for (bB in bA) {
                if (!bC[0] || bE.converters[bB + " " + bC[0]]) {
                    by = bB;
                    break
                }
                if (!e) {
                    e = bB
                }
            }
            by = by || e
        } if (by) {
            if (by !== bC[0]) {
                bC.unshift(by)
            }
            return bA[by]
        }
    }
    function H(bI, bA) {
        if (bI.dataFilter) {
            bA = bI.dataFilter(bA, bI.dataType)
        }
        var bE = bI.dataTypes,
            bH = {}, bB, bF, bx = bE.length,
            bC, bD = bE[0],
            by, bz, bG, bw, e;
        for (bB = 1; bB < bx; bB++) {
            if (bB === 1) {
                for (bF in bI.converters) {
                    if (typeof bF === "string") {
                        bH[bF.toLowerCase()] = bI.converters[bF]
                    }
                }
            }
            by = bD;
            bD = bE[bB];
            if (bD === "*") {
                bD = by
            } else {
                if (by !== "*" && by !== bD) {
                    bz = by + " " + bD;
                    bG = bH[bz] || bH["* " + bD];
                    if (!bG) {
                        e = M;
                        for (bw in bH) {
                            bC = bw.split(" ");
                            if (bC[0] === by || bC[0] === "*") {
                                e = bH[bC[1] + " " + bD];
                                if (e) {
                                    bw = bH[bw];
                                    if (bw === true) {
                                        bG = e
                                    } else {
                                        if (e === true) {
                                            bG = bw
                                        }
                                    }
                                    break
                                }
                            }
                        }
                    }
                    if (!(bG || e)) {
                        b.error("No conversion from " + bz.replace(" ", " to "))
                    }
                    if (bG !== true) {
                        bA = bG ? bG(bA) : e(bw(bA))
                    }
                }
            }
        }
        return bA
    }
    var aD = b.now(),
        v = /(\=)\?(&|$)|\?\?/i;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return b.expando + "_" + (aD++)
        }
    });
    b.ajaxPrefilter("json jsonp", function (bE, bB, bD) {
        var by = bE.contentType === "application/x-www-form-urlencoded" && (typeof bE.data === "string");
        if (bE.dataTypes[0] === "jsonp" || bE.jsonp !== false && (v.test(bE.url) || by && v.test(bE.data))) {
            var bC, bx = bE.jsonpCallback = b.isFunction(bE.jsonpCallback) ? bE.jsonpCallback() : bE.jsonpCallback,
                bA = bc[bx],
                e = bE.url,
                bz = bE.data,
                bw = "$1" + bx + "$2";
            if (bE.jsonp !== false) {
                e = e.replace(v, bw);
                if (bE.url === e) {
                    if (by) {
                        bz = bz.replace(v, bw)
                    }
                    if (bE.data === bz) {
                        e += (/\?/.test(e) ? "&" : "?") + bE.jsonp + "=" + bx
                    }
                }
            }
            bE.url = e;
            bE.data = bz;
            bc[bx] = function (bF) {
                bC = [bF]
            };
            bD.always(function () {
                bc[bx] = bA;
                if (bC && b.isFunction(bA)) {
                    bc[bx](bC[0])
                }
            });
            bE.converters["script json"] = function () {
                if (!bC) {
                    b.error(bx + " was not called")
                }
                return bC[0]
            };
            bE.dataTypes[0] = "json";
            return "script"
        }
    });
    b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (e) {
                b.globalEval(e);
                return e
            }
        }
    });
    b.ajaxPrefilter("script", function (e) {
        if (e.cache === M) {
            e.cache = false
        }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false
        }
    });
    b.ajaxTransport("script", function (bx) {
        if (bx.crossDomain) {
            var e, bw = aw.head || aw.getElementsByTagName("head")[0] || aw.documentElement;
            return {
                send: function (by, bz) {
                    e = aw.createElement("script");
                    e.async = "async";
                    if (bx.scriptCharset) {
                        e.charset = bx.scriptCharset
                    }
                    e.src = bx.url;
                    e.onload = e.onreadystatechange = function (bB, bA) {
                        if (bA || !e.readyState || /loaded|complete/.test(e.readyState)) {
                            e.onload = e.onreadystatechange = null;
                            if (bw && e.parentNode) {
                                bw.removeChild(e)
                            }
                            e = M;
                            if (!bA) {
                                bz(200, "success")
                            }
                        }
                    };
                    bw.insertBefore(e, bw.firstChild)
                },
                abort: function () {
                    if (e) {
                        e.onload(0, 1)
                    }
                }
            }
        }
    });
    var C = bc.ActiveXObject ? function () {
            for (var e in O) {
                O[e](0, 1)
            }
        } : false,
        z = 0,
        O;

    function aM() {
        try {
            return new bc.XMLHttpRequest()
        } catch (bw) {}
    }
    function ak() {
        try {
            return new bc.ActiveXObject("Microsoft.XMLHTTP")
        } catch (bw) {}
    }
    b.ajaxSettings.xhr = bc.ActiveXObject ? function () {
        return !this.isLocal && aM() || ak()
    } : aM;
    (function (e) {
        b.extend(b.support, {
            ajax: !! e,
            cors: !! e && ("withCredentials" in e)
        })
    })(b.ajaxSettings.xhr());
    if (b.support.ajax) {
        b.ajaxTransport(function (e) {
            if (!e.crossDomain || b.support.cors) {
                var bw;
                return {
                    send: function (bC, bx) {
                        var bB = e.xhr(),
                            bA, bz;
                        if (e.username) {
                            bB.open(e.type, e.url, e.async, e.username, e.password)
                        } else {
                            bB.open(e.type, e.url, e.async)
                        } if (e.xhrFields) {
                            for (bz in e.xhrFields) {
                                bB[bz] = e.xhrFields[bz]
                            }
                        }
                        if (e.mimeType && bB.overrideMimeType) {
                            bB.overrideMimeType(e.mimeType)
                        }
                        if (!e.crossDomain && !bC["X-Requested-With"]) {
                            bC["X-Requested-With"] = "XMLHttpRequest"
                        }
                        try {
                            for (bz in bC) {
                                bB.setRequestHeader(bz, bC[bz])
                            }
                        } catch (by) {}
                        bB.send((e.hasContent && e.data) || null);
                        bw = function (bL, bF) {
                            var bG, bE, bD, bJ, bI;
                            try {
                                if (bw && (bF || bB.readyState === 4)) {
                                    bw = M;
                                    if (bA) {
                                        bB.onreadystatechange = b.noop;
                                        if (C) {
                                            delete O[bA]
                                        }
                                    }
                                    if (bF) {
                                        if (bB.readyState !== 4) {
                                            bB.abort()
                                        }
                                    } else {
                                        bG = bB.status;
                                        bD = bB.getAllResponseHeaders();
                                        bJ = {};
                                        bI = bB.responseXML;
                                        if (bI && bI.documentElement) {
                                            bJ.xml = bI
                                        }
                                        bJ.text = bB.responseText;
                                        try {
                                            bE = bB.statusText
                                        } catch (bK) {
                                            bE = ""
                                        }
                                        if (!bG && e.isLocal && !e.crossDomain) {
                                            bG = bJ.text ? 200 : 404
                                        } else {
                                            if (bG === 1223) {
                                                bG = 204
                                            }
                                        }
                                    }
                                }
                            } catch (bH) {
                                if (!bF) {
                                    bx(-1, bH)
                                }
                            }
                            if (bJ) {
                                bx(bG, bE, bJ, bD)
                            }
                        };
                        if (!e.async || bB.readyState === 4) {
                            bw()
                        } else {
                            bA = ++z;
                            if (C) {
                                if (!O) {
                                    O = {};
                                    b(bc).unload(C)
                                }
                                O[bA] = bw
                            }
                            bB.onreadystatechange = bw
                        }
                    },
                    abort: function () {
                        if (bw) {
                            bw(0, 1)
                        }
                    }
                }
            }
        })
    }
    var R = {}, a9, n, aC = /^(?:toggle|show|hide)$/,
        aU = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        a4, aI = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        a5;
    b.fn.extend({
        show: function (by, bB, bA) {
            var bx, bz;
            if (by || by === 0) {
                return this.animate(a1("show", 3), by, bB, bA)
            } else {
                for (var bw = 0, e = this.length; bw < e; bw++) {
                    bx = this[bw];
                    if (bx.style) {
                        bz = bx.style.display;
                        if (!b._data(bx, "olddisplay") && bz === "none") {
                            bz = bx.style.display = ""
                        }
                        if (bz === "" && b.css(bx, "display") === "none") {
                            b._data(bx, "olddisplay", y(bx.nodeName))
                        }
                    }
                }
                for (bw = 0; bw < e; bw++) {
                    bx = this[bw];
                    if (bx.style) {
                        bz = bx.style.display;
                        if (bz === "" || bz === "none") {
                            bx.style.display = b._data(bx, "olddisplay") || ""
                        }
                    }
                }
                return this
            }
        },
        hide: function (by, bB, bA) {
            if (by || by === 0) {
                return this.animate(a1("hide", 3), by, bB, bA)
            } else {
                var bx, bz, bw = 0,
                    e = this.length;
                for (; bw < e; bw++) {
                    bx = this[bw];
                    if (bx.style) {
                        bz = b.css(bx, "display");
                        if (bz !== "none" && !b._data(bx, "olddisplay")) {
                            b._data(bx, "olddisplay", bz)
                        }
                    }
                }
                for (bw = 0; bw < e; bw++) {
                    if (this[bw].style) {
                        this[bw].style.display = "none"
                    }
                }
                return this
            }
        },
        _toggle: b.fn.toggle,
        toggle: function (bx, bw, by) {
            var e = typeof bx === "boolean";
            if (b.isFunction(bx) && b.isFunction(bw)) {
                this._toggle.apply(this, arguments)
            } else {
                if (bx == null || e) {
                    this.each(function () {
                        var bz = e ? bx : b(this).is(":hidden");
                        b(this)[bz ? "show" : "hide"]()
                    })
                } else {
                    this.animate(a1("toggle", 3), bx, bw, by)
                }
            }
            return this
        },
        fadeTo: function (e, by, bx, bw) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: by
            }, e, bx, bw)
        },
        animate: function (bA, bx, bz, by) {
            var e = b.speed(bx, bz, by);
            if (b.isEmptyObject(bA)) {
                return this.each(e.complete, [false])
            }
            bA = b.extend({}, bA);

            function bw() {
                if (e.queue === false) {
                    b._mark(this)
                }
                var bF = b.extend({}, e),
                    bL = this.nodeType === 1,
                    bJ = bL && b(this).is(":hidden"),
                    bC, bG, bE, bK, bI, bD, bH, bM, bB;
                bF.animatedProperties = {};
                for (bE in bA) {
                    bC = b.camelCase(bE);
                    if (bE !== bC) {
                        bA[bC] = bA[bE];
                        delete bA[bE]
                    }
                    bG = bA[bC];
                    if (b.isArray(bG)) {
                        bF.animatedProperties[bC] = bG[1];
                        bG = bA[bC] = bG[0]
                    } else {
                        bF.animatedProperties[bC] = bF.specialEasing && bF.specialEasing[bC] || bF.easing || "swing"
                    } if (bG === "hide" && bJ || bG === "show" && !bJ) {
                        return bF.complete.call(this)
                    }
                    if (bL && (bC === "height" || bC === "width")) {
                        bF.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (b.css(this, "display") === "inline" && b.css(this, "float") === "none") {
                            if (!b.support.inlineBlockNeedsLayout || y(this.nodeName) === "inline") {
                                this.style.display = "inline-block"
                            } else {
                                this.style.zoom = 1
                            }
                        }
                    }
                }
                if (bF.overflow != null) {
                    this.style.overflow = "hidden"
                }
                for (bE in bA) {
                    bK = new b.fx(this, bF, bE);
                    bG = bA[bE];
                    if (aC.test(bG)) {
                        bB = b._data(this, "toggle" + bE) || (bG === "toggle" ? bJ ? "show" : "hide" : 0);
                        if (bB) {
                            b._data(this, "toggle" + bE, bB === "show" ? "hide" : "show");
                            bK[bB]()
                        } else {
                            bK[bG]()
                        }
                    } else {
                        bI = aU.exec(bG);
                        bD = bK.cur();
                        if (bI) {
                            bH = parseFloat(bI[2]);
                            bM = bI[3] || (b.cssNumber[bE] ? "" : "px");
                            if (bM !== "px") {
                                b.style(this, bE, (bH || 1) + bM);
                                bD = ((bH || 1) / bK.cur()) * bD;
                                b.style(this, bE, bD + bM)
                            }
                            if (bI[1]) {
                                bH = ((bI[1] === "-=" ? -1 : 1) * bH) + bD
                            }
                            bK.custom(bD, bH, bM)
                        } else {
                            bK.custom(bD, bG, "")
                        }
                    }
                }
                return true
            }
            return e.queue === false ? this.each(bw) : this.queue(e.queue, bw)
        },
        stop: function (bx, bw, e) {
            if (typeof bx !== "string") {
                e = bw;
                bw = bx;
                bx = M
            }
            if (bw && bx !== false) {
                this.queue(bx || "fx", [])
            }
            return this.each(function () {
                var by, bz = false,
                    bB = b.timers,
                    bA = b._data(this);
                if (!e) {
                    b._unmark(true, this)
                }
                function bC(bF, bG, bE) {
                    var bD = bG[bE];
                    b.removeData(bF, bE, true);
                    bD.stop(e)
                }
                if (bx == null) {
                    for (by in bA) {
                        if (bA[by] && bA[by].stop && by.indexOf(".run") === by.length - 4) {
                            bC(this, bA, by)
                        }
                    }
                } else {
                    if (bA[by = bx + ".run"] && bA[by].stop) {
                        bC(this, bA, by)
                    }
                }
                for (by = bB.length; by--;) {
                    if (bB[by].elem === this && (bx == null || bB[by].queue === bx)) {
                        if (e) {
                            bB[by](true)
                        } else {
                            bB[by].saveState()
                        }
                        bz = true;
                        bB.splice(by, 1)
                    }
                }
                if (!(e && bz)) {
                    b.dequeue(this, bx)
                }
            })
        }
    });

    function bi() {
        setTimeout(au, 0);
        return (a5 = b.now())
    }
    function au() {
        a5 = M
    }
    function a1(bw, e) {
        var bx = {};
        b.each(aI.concat.apply([], aI.slice(0, e)), function () {
            bx[this] = bw
        });
        return bx
    }
    b.each({
        slideDown: a1("show", 1),
        slideUp: a1("hide", 1),
        slideToggle: a1("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, bw) {
        b.fn[e] = function (bx, bz, by) {
            return this.animate(bw, bx, bz, by)
        }
    });
    b.extend({
        speed: function (bx, by, bw) {
            var e = bx && typeof bx === "object" ? b.extend({}, bx) : {
                complete: bw || !bw && by || b.isFunction(bx) && bx,
                duration: bx,
                easing: bw && by || by && !b.isFunction(by) && by
            };
            e.duration = b.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in b.fx.speeds ? b.fx.speeds[e.duration] : b.fx.speeds._default;
            if (e.queue == null || e.queue === true) {
                e.queue = "fx"
            }
            e.old = e.complete;
            e.complete = function (bz) {
                if (b.isFunction(e.old)) {
                    e.old.call(this)
                }
                if (e.queue) {
                    b.dequeue(this, e.queue)
                } else {
                    if (bz !== false) {
                        b._unmark(this)
                    }
                }
            };
            return e
        },
        easing: {
            linear: function (bx, by, e, bw) {
                return e + bw * bx
            },
            swing: function (bx, by, e, bw) {
                return ((-Math.cos(bx * Math.PI) / 2) + 0.5) * bw + e
            }
        },
        timers: [],
        fx: function (bw, e, bx) {
            this.options = e;
            this.elem = bw;
            this.prop = bx;
            e.orig = e.orig || {}
        }
    });
    b.fx.prototype = {
        update: function () {
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }(b.fx.step[this.prop] || b.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var e, bw = b.css(this.elem, this.prop);
            return isNaN(e = parseFloat(bw)) ? !bw || bw === "auto" ? 0 : bw : e
        },
        custom: function (bA, bz, by) {
            var e = this,
                bx = b.fx;
            this.startTime = a5 || bi();
            this.end = bz;
            this.now = this.start = bA;
            this.pos = this.state = 0;
            this.unit = by || this.unit || (b.cssNumber[this.prop] ? "" : "px");

            function bw(bB) {
                return e.step(bB)
            }
            bw.queue = this.options.queue;
            bw.elem = this.elem;
            bw.saveState = function () {
                if (e.options.hide && b._data(e.elem, "fxshow" + e.prop) === M) {
                    b._data(e.elem, "fxshow" + e.prop, e.start)
                }
            };
            if (bw() && b.timers.push(bw) && !a4) {
                a4 = setInterval(bx.tick, bx.interval)
            }
        },
        show: function () {
            var e = b._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || b.style(this.elem, this.prop);
            this.options.show = true;
            if (e !== M) {
                this.custom(this.cur(), e)
            } else {
                this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur())
            }
            b(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = b._data(this.elem, "fxshow" + this.prop) || b.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function (bz) {
            var bB, bC, bw, by = a5 || bi(),
                e = true,
                bA = this.elem,
                bx = this.options;
            if (bz || by >= bx.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                bx.animatedProperties[this.prop] = true;
                for (bB in bx.animatedProperties) {
                    if (bx.animatedProperties[bB] !== true) {
                        e = false
                    }
                }
                if (e) {
                    if (bx.overflow != null && !b.support.shrinkWrapBlocks) {
                        b.each(["", "X", "Y"], function (bD, bE) {
                            bA.style["overflow" + bE] = bx.overflow[bD]
                        })
                    }
                    if (bx.hide) {
                        b(bA).hide()
                    }
                    if (bx.hide || bx.show) {
                        for (bB in bx.animatedProperties) {
                            b.style(bA, bB, bx.orig[bB]);
                            b.removeData(bA, "fxshow" + bB, true);
                            b.removeData(bA, "toggle" + bB, true)
                        }
                    }
                    bw = bx.complete;
                    if (bw) {
                        bx.complete = false;
                        bw.call(bA)
                    }
                }
                return false
            } else {
                if (bx.duration == Infinity) {
                    this.now = by
                } else {
                    bC = by - this.startTime;
                    this.state = bC / bx.duration;
                    this.pos = b.easing[bx.animatedProperties[this.prop]](this.state, bC, 0, 1, bx.duration);
                    this.now = this.start + ((this.end - this.start) * this.pos)
                }
                this.update()
            }
            return true
        }
    };
    b.extend(b.fx, {
        tick: function () {
            var bx, bw = b.timers,
                e = 0;
            for (; e < bw.length; e++) {
                bx = bw[e];
                if (!bx() && bw[e] === bx) {
                    bw.splice(e--, 1)
                }
            }
            if (!bw.length) {
                b.fx.stop()
            }
        },
        interval: 13,
        stop: function () {
            clearInterval(a4);
            a4 = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (e) {
                b.style(e.elem, "opacity", e.now)
            },
            _default: function (e) {
                if (e.elem.style && e.elem.style[e.prop] != null) {
                    e.elem.style[e.prop] = e.now + e.unit
                } else {
                    e.elem[e.prop] = e.now
                }
            }
        }
    });
    b.each(["width", "height"], function (e, bw) {
        b.fx.step[bw] = function (bx) {
            b.style(bx.elem, bw, Math.max(0, bx.now) + bx.unit)
        }
    });
    if (b.expr && b.expr.filters) {
        b.expr.filters.animated = function (e) {
            return b.grep(b.timers, function (bw) {
                return e === bw.elem
            }).length
        }
    }
    function y(by) {
        if (!R[by]) {
            var e = aw.body,
                bw = b("<" + by + ">").appendTo(e),
                bx = bw.css("display");
            bw.remove();
            if (bx === "none" || bx === "") {
                if (!a9) {
                    a9 = aw.createElement("iframe");
                    a9.frameBorder = a9.width = a9.height = 0
                }
                e.appendChild(a9);
                if (!n || !a9.createElement) {
                    n = (a9.contentWindow || a9.contentDocument).document;
                    n.write((aw.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>");
                    n.close()
                }
                bw = n.createElement(by);
                n.body.appendChild(bw);
                bx = b.css(bw, "display");
                e.removeChild(a9)
            }
            R[by] = bx
        }
        return R[by]
    }
    var W = /^t(?:able|d|h)$/i,
        ae = /^(?:body|html)$/i;
    if ("getBoundingClientRect" in aw.documentElement) {
        b.fn.offset = function (bJ) {
            var bz = this[0],
                bC;
            if (bJ) {
                return this.each(function (e) {
                    b.offset.setOffset(this, bJ, e)
                })
            }
            if (!bz || !bz.ownerDocument) {
                return null
            }
            if (bz === bz.ownerDocument.body) {
                return b.offset.bodyOffset(bz)
            }
            try {
                bC = bz.getBoundingClientRect()
            } catch (bG) {}
            var bI = bz.ownerDocument,
                bx = bI.documentElement;
            if (!bC || !b.contains(bx, bz)) {
                return bC ? {
                    top: bC.top,
                    left: bC.left
                } : {
                    top: 0,
                    left: 0
                }
            }
            var bD = bI.body,
                bE = aL(bI),
                bB = bx.clientTop || bD.clientTop || 0,
                bF = bx.clientLeft || bD.clientLeft || 0,
                bw = bE.pageYOffset || b.support.boxModel && bx.scrollTop || bD.scrollTop,
                bA = bE.pageXOffset || b.support.boxModel && bx.scrollLeft || bD.scrollLeft,
                bH = bC.top + bw - bB,
                by = bC.left + bA - bF;
            return {
                top: bH,
                left: by
            }
        }
    } else {
        b.fn.offset = function (bG) {
            var bA = this[0];
            if (bG) {
                return this.each(function (bH) {
                    b.offset.setOffset(this, bG, bH)
                })
            }
            if (!bA || !bA.ownerDocument) {
                return null
            }
            if (bA === bA.ownerDocument.body) {
                return b.offset.bodyOffset(bA)
            }
            var bD, bx = bA.offsetParent,
                bw = bA,
                bF = bA.ownerDocument,
                by = bF.documentElement,
                bB = bF.body,
                bC = bF.defaultView,
                e = bC ? bC.getComputedStyle(bA, null) : bA.currentStyle,
                bE = bA.offsetTop,
                bz = bA.offsetLeft;
            while ((bA = bA.parentNode) && bA !== bB && bA !== by) {
                if (b.support.fixedPosition && e.position === "fixed") {
                    break
                }
                bD = bC ? bC.getComputedStyle(bA, null) : bA.currentStyle;
                bE -= bA.scrollTop;
                bz -= bA.scrollLeft;
                if (bA === bx) {
                    bE += bA.offsetTop;
                    bz += bA.offsetLeft;
                    if (b.support.doesNotAddBorder && !(b.support.doesAddBorderForTableAndCells && W.test(bA.nodeName))) {
                        bE += parseFloat(bD.borderTopWidth) || 0;
                        bz += parseFloat(bD.borderLeftWidth) || 0
                    }
                    bw = bx;
                    bx = bA.offsetParent
                }
                if (b.support.subtractsBorderForOverflowNotVisible && bD.overflow !== "visible") {
                    bE += parseFloat(bD.borderTopWidth) || 0;
                    bz += parseFloat(bD.borderLeftWidth) || 0
                }
                e = bD
            }
            if (e.position === "relative" || e.position === "static") {
                bE += bB.offsetTop;
                bz += bB.offsetLeft
            }
            if (b.support.fixedPosition && e.position === "fixed") {
                bE += Math.max(by.scrollTop, bB.scrollTop);
                bz += Math.max(by.scrollLeft, bB.scrollLeft)
            }
            return {
                top: bE,
                left: bz
            }
        }
    }
    b.offset = {
        bodyOffset: function (e) {
            var bx = e.offsetTop,
                bw = e.offsetLeft;
            if (b.support.doesNotIncludeMarginInBodyOffset) {
                bx += parseFloat(b.css(e, "marginTop")) || 0;
                bw += parseFloat(b.css(e, "marginLeft")) || 0
            }
            return {
                top: bx,
                left: bw
            }
        },
        setOffset: function (by, bH, bB) {
            var bC = b.css(by, "position");
            if (bC === "static") {
                by.style.position = "relative"
            }
            var bA = b(by),
                bw = bA.offset(),
                e = b.css(by, "top"),
                bF = b.css(by, "left"),
                bG = (bC === "absolute" || bC === "fixed") && b.inArray("auto", [e, bF]) > -1,
                bE = {}, bD = {}, bx, bz;
            if (bG) {
                bD = bA.position();
                bx = bD.top;
                bz = bD.left
            } else {
                bx = parseFloat(e) || 0;
                bz = parseFloat(bF) || 0
            } if (b.isFunction(bH)) {
                bH = bH.call(by, bB, bw)
            }
            if (bH.top != null) {
                bE.top = (bH.top - bw.top) + bx
            }
            if (bH.left != null) {
                bE.left = (bH.left - bw.left) + bz
            }
            if ("using" in bH) {
                bH.using.call(by, bE)
            } else {
                bA.css(bE)
            }
        }
    };
    b.fn.extend({
        position: function () {
            if (!this[0]) {
                return null
            }
            var bx = this[0],
                bw = this.offsetParent(),
                by = this.offset(),
                e = ae.test(bw[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : bw.offset();
            by.top -= parseFloat(b.css(bx, "marginTop")) || 0;
            by.left -= parseFloat(b.css(bx, "marginLeft")) || 0;
            e.top += parseFloat(b.css(bw[0], "borderTopWidth")) || 0;
            e.left += parseFloat(b.css(bw[0], "borderLeftWidth")) || 0;
            return {
                top: by.top - e.top,
                left: by.left - e.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || aw.body;
                while (e && (!ae.test(e.nodeName) && b.css(e, "position") === "static")) {
                    e = e.offsetParent
                }
                return e
            })
        }
    });
    b.each(["Left", "Top"], function (bw, e) {
        var bx = "scroll" + e;
        b.fn[bx] = function (bA) {
            var by, bz;
            if (bA === M) {
                by = this[0];
                if (!by) {
                    return null
                }
                bz = aL(by);
                return bz ? ("pageXOffset" in bz) ? bz[bw ? "pageYOffset" : "pageXOffset"] : b.support.boxModel && bz.document.documentElement[bx] || bz.document.body[bx] : by[bx]
            }
            return this.each(function () {
                bz = aL(this);
                if (bz) {
                    bz.scrollTo(!bw ? bA : b(bz).scrollLeft(), bw ? bA : b(bz).scrollTop())
                } else {
                    this[bx] = bA
                }
            })
        }
    });

    function aL(e) {
        return b.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
    }
    b.each(["Height", "Width"], function (bw, e) {
        var bx = e.toLowerCase();
        b.fn["inner" + e] = function () {
            var by = this[0];
            return by ? by.style ? parseFloat(b.css(by, bx, "padding")) : this[bx]() : null
        };
        b.fn["outer" + e] = function (bz) {
            var by = this[0];
            return by ? by.style ? parseFloat(b.css(by, bx, bz ? "margin" : "border")) : this[bx]() : null
        };
        b.fn[bx] = function (bA) {
            var bB = this[0];
            if (!bB) {
                return bA == null ? null : this
            }
            if (b.isFunction(bA)) {
                return this.each(function (bF) {
                    var bE = b(this);
                    bE[bx](bA.call(this, bF, bE[bx]()))
                })
            }
            if (b.isWindow(bB)) {
                var bC = bB.document.documentElement["client" + e],
                    by = bB.document.body;
                return bB.document.compatMode === "CSS1Compat" && bC || by && by["client" + e] || bC
            } else {
                if (bB.nodeType === 9) {
                    return Math.max(bB.documentElement["client" + e], bB.body["scroll" + e], bB.documentElement["scroll" + e], bB.body["offset" + e], bB.documentElement["offset" + e])
                } else {
                    if (bA === M) {
                        var bD = b.css(bB, bx),
                            bz = parseFloat(bD);
                        return b.isNumeric(bz) ? bz : bD
                    } else {
                        return this.css(bx, typeof bA === "string" ? bA : bA + "px")
                    }
                }
            }
        }
    });
    bc.jQuery = bc.$ = b;
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define("jquery", [], function () {
            return b
        })
    }
})(window);