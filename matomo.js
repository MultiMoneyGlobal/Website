/*!!
 * Matomo - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link https://piwik.org
 * @source https://github.com/matomo-org/matomo/blob/master/js/piwik.js
 * @license https://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
;
if (typeof _paq !== "object") {
    _paq = []
}
if (typeof window.Matomo !== "object") {
    window.Matomo = window.Piwik = (function() {
        var q, b = {},
            y = {},
            G = document,
            g = navigator,
            X = screen,
            S = window,
            h = S.performance || S.mozPerformance || S.msPerformance || S.webkitPerformance,
            s = S.encodeURIComponent,
            R = S.decodeURIComponent,
            k = unescape,
            I = [],
            E, t, ah = [],
            x = 0,
            ab = 0,
            T = 0,
            l = false;

        function o(ao) {
            try {
                return R(ao)
            } catch (ap) {
                return unescape(ao)
            }
        }

        function J(ap) {
            var ao = typeof ap;
            return ao !== "undefined"
        }

        function A(ao) {
            return typeof ao === "function"
        }

        function V(ao) {
            return typeof ao === "object"
        }

        function w(ao) {
            return typeof ao === "string" || ao instanceof String
        }

        function ag(ao) {
            return typeof ao === "number" || ao instanceof Number
        }

        function Y(ao) {
            return J(ao) && (ag(ao) || (w(ao) && ao.length))
        }

        function B(ap) {
            if (!ap) {
                return true
            }
            var ao;
            var aq = true;
            for (ao in ap) {
                if (Object.prototype.hasOwnProperty.call(ap, ao)) {
                    aq = false
                }
            }
            return aq
        }

        function ak(ao) {
            var ap = typeof console;
            if (ap !== "undefined" && console && console.error) {
                console.error(ao)
            }
        }

        function af() {
            var au, at, aw, ap, ao;
            for (au = 0; au < arguments.length; au += 1) {
                ao = null;
                if (arguments[au] && arguments[au].slice) {
                    ao = arguments[au].slice()
                }
                ap = arguments[au];
                aw = ap.shift();
                var av, aq;
                var ar = w(aw) && aw.indexOf("::") > 0;
                if (ar) {
                    av = aw.split("::");
                    aq = av[0];
                    aw = av[1];
                    if ("object" === typeof t[aq] && "function" === typeof t[aq][aw]) {
                        t[aq][aw].apply(t[aq], ap)
                    } else {
                        if (ao) {
                            ah.push(ao)
                        }
                    }
                } else {
                    for (at = 0; at < I.length; at++) {
                        if (w(aw)) {
                            aq = I[at];
                            var ax = aw.indexOf(".") > 0;
                            if (ax) {
                                av = aw.split(".");
                                if (aq && "object" === typeof aq[av[0]]) {
                                    aq = aq[av[0]];
                                    aw = av[1]
                                } else {
                                    if (ao) {
                                        ah.push(ao);
                                        break
                                    }
                                }
                            }
                            if (aq[aw]) {
                                aq[aw].apply(aq, ap)
                            } else {
                                var ay = "The method '" + aw + '\' was not found in "_paq" variable.  Please have a look at the Matomo tracker documentation: https://developer.matomo.org/api-reference/tracking-javascript';
                                ak(ay);
                                if (!ax) {
                                    throw new TypeError(ay)
                                }
                            }
                            if (aw === "addTracker") {
                                break
                            }
                            if (aw === "setTrackerUrl" || aw === "setSiteId") {
                                break
                            }
                        } else {
                            aw.apply(I[at], ap)
                        }
                    }
                }
            }
        }

        function an(ar, aq, ap, ao) {
            if (ar.addEventListener) {
                ar.addEventListener(aq, ap, ao);
                return true
            }
            if (ar.attachEvent) {
                return ar.attachEvent("on" + aq, ap)
            }
            ar["on" + aq] = ap
        }

        function m(ao) {
            if (G.readyState === "complete") {
                ao()
            } else {
                if (S.addEventListener) {
                    S.addEventListener("load", ao, false)
                } else {
                    if (S.attachEvent) {
                        S.attachEvent("onload", ao)
                    }
                }
            }
        }

        function p(ar) {
            var ao = false;
            if (G.attachEvent) {
                ao = G.readyState === "complete"
            } else {
                ao = G.readyState !== "loading"
            }
            if (ao) {
                ar();
                return
            }
            var aq;
            if (G.addEventListener) {
                an(G, "DOMContentLoaded", function ap() {
                    G.removeEventListener("DOMContentLoaded", ap, false);
                    if (!ao) {
                        ao = true;
                        ar()
                    }
                })
            } else {
                if (G.attachEvent) {
                    G.attachEvent("onreadystatechange", function ap() {
                        if (G.readyState === "complete") {
                            G.detachEvent("onreadystatechange", ap);
                            if (!ao) {
                                ao = true;
                                ar()
                            }
                        }
                    });
                    if (G.documentElement.doScroll && S === S.top) {
                        (function ap() {
                            if (!ao) {
                                try {
                                    G.documentElement.doScroll("left")
                                } catch (at) {
                                    setTimeout(ap, 0);
                                    return
                                }
                                ao = true;
                                ar()
                            }
                        }())
                    }
                }
            }
            an(S, "load", function() {
                if (!ao) {
                    ao = true;
                    ar()
                }
            }, false)
        }

        function ac(ap, av, aw) {
            if (!ap) {
                return ""
            }
            var ao = "",
                ar, aq, at, au;
            for (ar in b) {
                if (Object.prototype.hasOwnProperty.call(b, ar)) {
                    au = b[ar] && "function" === typeof b[ar][ap];
                    if (au) {
                        aq = b[ar][ap];
                        at = aq(av || {}, aw);
                        if (at) {
                            ao += at
                        }
                    }
                }
            }
            return ao
        }

        function ai() {
            var ao;
            l = true;
            ac("unload");
            ao = new Date();
            var ap = ao.getTimeAlias();
            if ((q - ap) > 3000) {
                q = ap + 3000
            }
            if (q) {
                do {
                    ao = new Date()
                } while (ao.getTimeAlias() < q)
            }
        }

        function n(aq, ap) {
            var ao = G.createElement("script");
            ao.type = "text/javascript";
            ao.src = aq;
            if (ao.readyState) {
                ao.onreadystatechange = function() {
                    var ar = this.readyState;
                    if (ar === "loaded" || ar === "complete") {
                        ao.onreadystatechange = null;
                        ap()
                    }
                }
            } else {
                ao.onload = ap
            }
            G.getElementsByTagName("head")[0].appendChild(ao)
        }

        function K() {
            var ao = "";
            try {
                ao = S.top.document.referrer
            } catch (aq) {
                if (S.parent) {
                    try {
                        ao = S.parent.document.referrer
                    } catch (ap) {
                        ao = ""
                    }
                }
            }
            if (ao === "") {
                ao = G.referrer
            }
            return ao
        }

        function r(ao) {
            var aq = new RegExp("^([a-z]+):"),
                ap = aq.exec(ao);
            return ap ? ap[1] : null
        }

        function d(ao) {
            var aq = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
                ap = aq.exec(ao);
            return ap ? ap[1] : ao
        }

        function aj(ap, ao) {
            ap = String(ap);
            return ap.lastIndexOf(ao, 0) === 0
        }

        function Q(ap, ao) {
            ap = String(ap);
            return ap.indexOf(ao, ap.length - ao.length) !== -1
        }

        function z(ap, ao) {
            ap = String(ap);
            return ap.indexOf(ao) !== -1
        }

        function f(ap, ao) {
            ap = String(ap);
            return ap.substr(0, ap.length - ao)
        }

        function F(ar, aq, au) {
            ar = String(ar);
            if (!au) {
                au = ""
            }
            var ao = ar.indexOf("#");
            var av = ar.length;
            if (ao === -1) {
                ao = av
            }
            var at = ar.substr(0, ao);
            var ap = ar.substr(ao, av - ao);
            if (at.indexOf("?") === -1) {
                at += "?"
            } else {
                if (!Q(at, "?")) {
                    at += "&"
                }
            }
            return at + s(aq) + "=" + s(au) + ap
        }

        function j(ap, aq) {
            ap = String(ap);
            if (ap.indexOf("?" + aq + "=") === -1 && ap.indexOf("&" + aq + "=") === -1) {
                return ap
            }
            var ar = ap.indexOf("?");
            if (ar === -1) {
                return ap
            }
            var ao = ap.substr(ar + 1);
            var aw = ap.substr(0, ar);
            if (ao) {
                var ax = "";
                var az = ao.indexOf("#");
                if (az !== -1) {
                    ax = ao.substr(az + 1);
                    ao = ao.substr(0, az)
                }
                var at;
                var av = ao.split("&");
                var au = av.length - 1;
                for (au; au >= 0; au--) {
                    at = av[au].split("=")[0];
                    if (at === aq) {
                        av.splice(au, 1)
                    }
                }
                var ay = av.join("&");
                if (ay) {
                    aw = aw + "?" + ay
                }
                if (ax) {
                    aw += "#" + ax
                }
            }
            return aw
        }

        function e(aq, ap) {
            var ao = "[\\?&#]" + ap + "=([^&#]*)";
            var at = new RegExp(ao);
            var ar = at.exec(aq);
            return ar ? o(ar[1]) : ""
        }

        function a(ao) {
            if (ao && String(ao) === ao) {
                return ao.replace(/^\s+|\s+$/g, "")
            }
            return ao
        }

        function D(ao) {
            return unescape(s(ao))
        }

        function am(aE) {
            var aq = function(aK, aJ) {
                    return (aK << aJ) | (aK >>> (32 - aJ))
                },
                aF = function(aM) {
                    var aK = "",
                        aL, aJ;
                    for (aL = 7; aL >= 0; aL--) {
                        aJ = (aM >>> (aL * 4)) & 15;
                        aK += aJ.toString(16)
                    }
                    return aK
                },
                au, aH, aG, ap = [],
                ay = 1732584193,
                aw = 4023233417,
                av = 2562383102,
                at = 271733878,
                ar = 3285377520,
                aD, aC, aB, aA, az, aI, ao, ax = [];
            aE = D(aE);
            ao = aE.length;
            for (aH = 0; aH < ao - 3; aH += 4) {
                aG = aE.charCodeAt(aH) << 24 | aE.charCodeAt(aH + 1) << 16 | aE.charCodeAt(aH + 2) << 8 | aE.charCodeAt(aH + 3);
                ax.push(aG)
            }
            switch (ao & 3) {
                case 0:
                    aH = 2147483648;
                    break;
                case 1:
                    aH = aE.charCodeAt(ao - 1) << 24 | 8388608;
                    break;
                case 2:
                    aH = aE.charCodeAt(ao - 2) << 24 | aE.charCodeAt(ao - 1) << 16 | 32768;
                    break;
                case 3:
                    aH = aE.charCodeAt(ao - 3) << 24 | aE.charCodeAt(ao - 2) << 16 | aE.charCodeAt(ao - 1) << 8 | 128;
                    break
            }
            ax.push(aH);
            while ((ax.length & 15) !== 14) {
                ax.push(0)
            }
            ax.push(ao >>> 29);
            ax.push((ao << 3) & 4294967295);
            for (au = 0; au < ax.length; au += 16) {
                for (aH = 0; aH < 16; aH++) {
                    ap[aH] = ax[au + aH]
                }
                for (aH = 16; aH <= 79; aH++) {
                    ap[aH] = aq(ap[aH - 3] ^ ap[aH - 8] ^ ap[aH - 14] ^ ap[aH - 16], 1)
                }
                aD = ay;
                aC = aw;
                aB = av;
                aA = at;
                az = ar;
                for (aH = 0; aH <= 19; aH++) {
                    aI = (aq(aD, 5) + ((aC & aB) | (~aC & aA)) + az + ap[aH] + 1518500249) & 4294967295;
                    az = aA;
                    aA = aB;
                    aB = aq(aC, 30);
                    aC = aD;
                    aD = aI
                }
                for (aH = 20; aH <= 39; aH++) {
                    aI = (aq(aD, 5) + (aC ^ aB ^ aA) + az + ap[aH] + 1859775393) & 4294967295;
                    az = aA;
                    aA = aB;
                    aB = aq(aC, 30);
                    aC = aD;
                    aD = aI
                }
                for (aH = 40; aH <= 59; aH++) {
                    aI = (aq(aD, 5) + ((aC & aB) | (aC & aA) | (aB & aA)) + az + ap[aH] + 2400959708) & 4294967295;
                    az = aA;
                    aA = aB;
                    aB = aq(aC, 30);
                    aC = aD;
                    aD = aI
                }
                for (aH = 60; aH <= 79; aH++) {
                    aI = (aq(aD, 5) + (aC ^ aB ^ aA) + az + ap[aH] + 3395469782) & 4294967295;
                    az = aA;
                    aA = aB;
                    aB = aq(aC, 30);
                    aC = aD;
                    aD = aI
                }
                ay = (ay + aD) & 4294967295;
                aw = (aw + aC) & 4294967295;
                av = (av + aB) & 4294967295;
                at = (at + aA) & 4294967295;
                ar = (ar + az) & 4294967295
            }
            aI = aF(ay) + aF(aw) + aF(av) + aF(at) + aF(ar);
            return aI.toLowerCase()
        }

        function aa(aq, ao, ap) {
            if (!aq) {
                aq = ""
            }
            if (!ao) {
                ao = ""
            }
            if (aq === "translate.googleusercontent.com") {
                if (ap === "") {
                    ap = ao
                }
                ao = e(ao, "u");
                aq = d(ao)
            } else {
                if (aq === "cc.bingj.com" || aq === "webcache.googleusercontent.com" || aq.slice(0, 5) === "74.6.") {
                    ao = G.links[0].href;
                    aq = d(ao)
                }
            }
            return [aq, ao, ap]
        }

        function L(ap) {
            var ao = ap.length;
            if (ap.charAt(--ao) === ".") {
                ap = ap.slice(0, ao)
            }
            if (ap.slice(0, 2) === "*.") {
                ap = ap.slice(1)
            }
            if (ap.indexOf("/") !== -1) {
                ap = ap.substr(0, ap.indexOf("/"))
            }
            return ap
        }

        function al(ap) {
            ap = ap && ap.text ? ap.text : ap;
            if (!w(ap)) {
                var ao = G.getElementsByTagName("title");
                if (ao && J(ao[0])) {
                    ap = ao[0].text
                }
            }
            return ap
        }

        function O(ao) {
            if (!ao) {
                return []
            }
            if (!J(ao.children) && J(ao.childNodes)) {
                return ao.children
            }
            if (J(ao.children)) {
                return ao.children
            }
            return []
        }

        function U(ap, ao) {
            if (!ap || !ao) {
                return false
            }
            if (ap.contains) {
                return ap.contains(ao)
            }
            if (ap === ao) {
                return true
            }
            if (ap.compareDocumentPosition) {
                return !!(ap.compareDocumentPosition(ao) & 16)
            }
            return false
        }

        function M(aq, ar) {
            if (aq && aq.indexOf) {
                return aq.indexOf(ar)
            }
            if (!J(aq) || aq === null) {
                return -1
            }
            if (!aq.length) {
                return -1
            }
            var ao = aq.length;
            if (ao === 0) {
                return -1
            }
            var ap = 0;
            while (ap < ao) {
                if (aq[ap] === ar) {
                    return ap
                }
                ap++
            }
            return -1
        }

        function i(aq) {
            if (!aq) {
                return false
            }

            function ao(at, au) {
                if (S.getComputedStyle) {
                    return G.defaultView.getComputedStyle(at, null)[au]
                }
                if (at.currentStyle) {
                    return at.currentStyle[au]
                }
            }

            function ar(at) {
                at = at.parentNode;
                while (at) {
                    if (at === G) {
                        return true
                    }
                    at = at.parentNode
                }
                return false
            }

            function ap(av, aB, at, ay, aw, az, ax) {
                var au = av.parentNode,
                    aA = 1;
                if (!ar(av)) {
                    return false
                }
                if (9 === au.nodeType) {
                    return true
                }
                if ("0" === ao(av, "opacity") || "none" === ao(av, "display") || "hidden" === ao(av, "visibility")) {
                    return false
                }
                if (!J(aB) || !J(at) || !J(ay) || !J(aw) || !J(az) || !J(ax)) {
                    aB = av.offsetTop;
                    aw = av.offsetLeft;
                    ay = aB + av.offsetHeight;
                    at = aw + av.offsetWidth;
                    az = av.offsetWidth;
                    ax = av.offsetHeight
                }
                if (aq === av && (0 === ax || 0 === az) && "hidden" === ao(av, "overflow")) {
                    return false
                }
                if (au) {
                    if (("hidden" === ao(au, "overflow") || "scroll" === ao(au, "overflow"))) {
                        if (aw + aA > au.offsetWidth + au.scrollLeft || aw + az - aA < au.scrollLeft || aB + aA > au.offsetHeight + au.scrollTop || aB + ax - aA < au.scrollTop) {
                            return false
                        }
                    }
                    if (av.offsetParent === au) {
                        aw += au.offsetLeft;
                        aB += au.offsetTop
                    }
                    return ap(au, aB, at, ay, aw, az, ax)
                }
                return true
            }
            return ap(aq)
        }
        var ae = {
            htmlCollectionToArray: function(aq) {
                var ao = [],
                    ap;
                if (!aq || !aq.length) {
                    return ao
                }
                for (ap = 0; ap < aq.length; ap++) {
                    ao.push(aq[ap])
                }
                return ao
            },
            find: function(ao) {
                if (!document.querySelectorAll || !ao) {
                    return []
                }
                var ap = document.querySelectorAll(ao);
                return this.htmlCollectionToArray(ap)
            },
            findMultiple: function(aq) {
                if (!aq || !aq.length) {
                    return []
                }
                var ap, ar;
                var ao = [];
                for (ap = 0; ap < aq.length; ap++) {
                    ar = this.find(aq[ap]);
                    ao = ao.concat(ar)
                }
                ao = this.makeNodesUnique(ao);
                return ao
            },
            findNodesByTagName: function(ap, ao) {
                if (!ap || !ao || !ap.getElementsByTagName) {
                    return []
                }
                var aq = ap.getElementsByTagName(ao);
                return this.htmlCollectionToArray(aq)
            },
            makeNodesUnique: function(ao) {
                var au = [].concat(ao);
                ao.sort(function(aw, av) {
                    if (aw === av) {
                        return 0
                    }
                    var ay = M(au, aw);
                    var ax = M(au, av);
                    if (ay === ax) {
                        return 0
                    }
                    return ay > ax ? -1 : 1
                });
                if (ao.length <= 1) {
                    return ao
                }
                var ap = 0;
                var ar = 0;
                var at = [];
                var aq;
                aq = ao[ap++];
                while (aq) {
                    if (aq === ao[ap]) {
                        ar = at.push(ap)
                    }
                    aq = ao[ap++] || null
                }
                while (ar--) {
                    ao.splice(at[ar], 1)
                }
                return ao
            },
            getAttributeValueFromNode: function(at, aq) {
                if (!this.hasNodeAttribute(at, aq)) {
                    return
                }
                if (at && at.getAttribute) {
                    return at.getAttribute(aq)
                }
                if (!at || !at.attributes) {
                    return
                }
                var ar = (typeof at.attributes[aq]);
                if ("undefined" === ar) {
                    return
                }
                if (at.attributes[aq].value) {
                    return at.attributes[aq].value
                }
                if (at.attributes[aq].nodeValue) {
                    return at.attributes[aq].nodeValue
                }
                var ap;
                var ao = at.attributes;
                if (!ao) {
                    return
                }
                for (ap = 0; ap < ao.length; ap++) {
                    if (ao[ap].nodeName === aq) {
                        return ao[ap].nodeValue
                    }
                }
                return null
            },
            hasNodeAttributeWithValue: function(ap, ao) {
                var aq = this.getAttributeValueFromNode(ap, ao);
                return !!aq
            },
            hasNodeAttribute: function(aq, ao) {
                if (aq && aq.hasAttribute) {
                    return aq.hasAttribute(ao)
                }
                if (aq && aq.attributes) {
                    var ap = (typeof aq.attributes[ao]);
                    return "undefined" !== ap
                }
                return false
            },
            hasNodeCssClass: function(aq, ao) {
                if (aq && ao && aq.className) {
                    var ap = typeof aq.className === "string" ? aq.className.split(" ") : [];
                    if (-1 !== M(ap, ao)) {
                        return true
                    }
                }
                return false
            },
            findNodesHavingAttribute: function(at, aq, ao) {
                if (!ao) {
                    ao = []
                }
                if (!at || !aq) {
                    return ao
                }
                var ar = O(at);
                if (!ar || !ar.length) {
                    return ao
                }
                var ap, au;
                for (ap = 0; ap < ar.length; ap++) {
                    au = ar[ap];
                    if (this.hasNodeAttribute(au, aq)) {
                        ao.push(au)
                    }
                    ao = this.findNodesHavingAttribute(au, aq, ao)
                }
                return ao
            },
            findFirstNodeHavingAttribute: function(aq, ap) {
                if (!aq || !ap) {
                    return
                }
                if (this.hasNodeAttribute(aq, ap)) {
                    return aq
                }
                var ao = this.findNodesHavingAttribute(aq, ap);
                if (ao && ao.length) {
                    return ao[0]
                }
            },
            findFirstNodeHavingAttributeWithValue: function(ar, aq) {
                if (!ar || !aq) {
                    return
                }
                if (this.hasNodeAttributeWithValue(ar, aq)) {
                    return ar
                }
                var ao = this.findNodesHavingAttribute(ar, aq);
                if (!ao || !ao.length) {
                    return
                }
                var ap;
                for (ap = 0; ap < ao.length; ap++) {
                    if (this.getAttributeValueFromNode(ao[ap], aq)) {
                        return ao[ap]
                    }
                }
            },
            findNodesHavingCssClass: function(at, ar, ao) {
                if (!ao) {
                    ao = []
                }
                if (!at || !ar) {
                    return ao
                }
                if (at.getElementsByClassName) {
                    var au = at.getElementsByClassName(ar);
                    return this.htmlCollectionToArray(au)
                }
                var aq = O(at);
                if (!aq || !aq.length) {
                    return []
                }
                var ap, av;
                for (ap = 0; ap < aq.length; ap++) {
                    av = aq[ap];
                    if (this.hasNodeCssClass(av, ar)) {
                        ao.push(av)
                    }
                    ao = this.findNodesHavingCssClass(av, ar, ao)
                }
                return ao
            },
            findFirstNodeHavingClass: function(aq, ap) {
                if (!aq || !ap) {
                    return
                }
                if (this.hasNodeCssClass(aq, ap)) {
                    return aq
                }
                var ao = this.findNodesHavingCssClass(aq, ap);
                if (ao && ao.length) {
                    return ao[0]
                }
            },
            isLinkElement: function(ap) {
                if (!ap) {
                    return false
                }
                var ao = String(ap.nodeName).toLowerCase();
                var ar = ["a", "area"];
                var aq = M(ar, ao);
                return aq !== -1
            },
            setAnyAttribute: function(ap, ao, aq) {
                if (!ap || !ao) {
                    return
                }
                if (ap.setAttribute) {
                    ap.setAttribute(ao, aq)
                } else {
                    ap[ao] = aq
                }
            }
        };
        var v = {
            CONTENT_ATTR: "data-track-content",
            CONTENT_CLASS: "matomoTrackContent",
            LEGACY_CONTENT_CLASS: "piwikTrackContent",
            CONTENT_NAME_ATTR: "data-content-name",
            CONTENT_PIECE_ATTR: "data-content-piece",
            CONTENT_PIECE_CLASS: "matomoContentPiece",
            LEGACY_CONTENT_PIECE_CLASS: "piwikContentPiece",
            CONTENT_TARGET_ATTR: "data-content-target",
            CONTENT_TARGET_CLASS: "matomoContentTarget",
            LEGACY_CONTENT_TARGET_CLASS: "piwikContentTarget",
            CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
            CONTENT_IGNOREINTERACTION_CLASS: "matomoContentIgnoreInteraction",
            LEGACY_CONTENT_IGNOREINTERACTION_CLASS: "piwikContentIgnoreInteraction",
            location: undefined,
            findContentNodes: function() {
                var ap = "." + this.CONTENT_CLASS;
                var aq = "." + this.LEGACY_CONTENT_CLASS;
                var ao = "[" + this.CONTENT_ATTR + "]";
                var ar = ae.findMultiple([ap, aq, ao]);
                return ar
            },
            findContentNodesWithinNode: function(ar) {
                if (!ar) {
                    return []
                }
                var ap = ae.findNodesHavingCssClass(ar, this.CONTENT_CLASS);
                ap = ae.findNodesHavingCssClass(ar, this.LEGACY_CONTENT_CLASS, ap);
                var ao = ae.findNodesHavingAttribute(ar, this.CONTENT_ATTR);
                if (ao && ao.length) {
                    var aq;
                    for (aq = 0; aq < ao.length; aq++) {
                        ap.push(ao[aq])
                    }
                }
                if (ae.hasNodeAttribute(ar, this.CONTENT_ATTR)) {
                    ap.push(ar)
                } else {
                    if (ae.hasNodeCssClass(ar, this.CONTENT_CLASS)) {
                        ap.push(ar)
                    } else {
                        if (ae.hasNodeCssClass(ar, this.LEGACY_CONTENT_CLASS)) {
                            ap.push(ar)
                        }
                    }
                }
                ap = ae.makeNodesUnique(ap);
                return ap
            },
            findParentContentNode: function(ap) {
                if (!ap) {
                    return
                }
                var aq = ap;
                var ao = 0;
                while (aq && aq !== G && aq.parentNode) {
                    if (ae.hasNodeAttribute(aq, this.CONTENT_ATTR)) {
                        return aq
                    }
                    if (ae.hasNodeCssClass(aq, this.CONTENT_CLASS)) {
                        return aq
                    }
                    if (ae.hasNodeCssClass(aq, this.LEGACY_CONTENT_CLASS)) {
                        return aq
                    }
                    aq = aq.parentNode;
                    if (ao > 1000) {
                        break
                    }
                    ao++
                }
            },
            findPieceNode: function(ap) {
                var ao;
                ao = ae.findFirstNodeHavingAttribute(ap, this.CONTENT_PIECE_ATTR);
                if (!ao) {
                    ao = ae.findFirstNodeHavingClass(ap, this.CONTENT_PIECE_CLASS)
                }
                if (!ao) {
                    ao = ae.findFirstNodeHavingClass(ap, this.LEGACY_CONTENT_PIECE_CLASS)
                }
                if (ao) {
                    return ao
                }
                return ap
            },
            findTargetNodeNoDefault: function(ao) {
                if (!ao) {
                    return
                }
                var ap = ae.findFirstNodeHavingAttributeWithValue(ao, this.CONTENT_TARGET_ATTR);
                if (ap) {
                    return ap
                }
                ap = ae.findFirstNodeHavingAttribute(ao, this.CONTENT_TARGET_ATTR);
                if (ap) {
                    return ap
                }
                ap = ae.findFirstNodeHavingClass(ao, this.CONTENT_TARGET_CLASS);
                if (ap) {
                    return ap
                }
                ap = ae.findFirstNodeHavingClass(ao, this.LEGACY_CONTENT_TARGET_CLASS);
                if (ap) {
                    return ap
                }
            },
            findTargetNode: function(ao) {
                var ap = this.findTargetNodeNoDefault(ao);
                if (ap) {
                    return ap
                }
                return ao
            },
            findContentName: function(ap) {
                if (!ap) {
                    return
                }
                var at = ae.findFirstNodeHavingAttributeWithValue(ap, this.CONTENT_NAME_ATTR);
                if (at) {
                    return ae.getAttributeValueFromNode(at, this.CONTENT_NAME_ATTR)
                }
                var ao = this.findContentPiece(ap);
                if (ao) {
                    return this.removeDomainIfIsInLink(ao)
                }
                if (ae.hasNodeAttributeWithValue(ap, "title")) {
                    return ae.getAttributeValueFromNode(ap, "title")
                }
                var aq = this.findPieceNode(ap);
                if (ae.hasNodeAttributeWithValue(aq, "title")) {
                    return ae.getAttributeValueFromNode(aq, "title")
                }
                var ar = this.findTargetNode(ap);
                if (ae.hasNodeAttributeWithValue(ar, "title")) {
                    return ae.getAttributeValueFromNode(ar, "title")
                }
            },
            findContentPiece: function(ap) {
                if (!ap) {
                    return
                }
                var ar = ae.findFirstNodeHavingAttributeWithValue(ap, this.CONTENT_PIECE_ATTR);
                if (ar) {
                    return ae.getAttributeValueFromNode(ar, this.CONTENT_PIECE_ATTR)
                }
                var ao = this.findPieceNode(ap);
                var aq = this.findMediaUrlInNode(ao);
                if (aq) {
                    return this.toAbsoluteUrl(aq)
                }
            },
            findContentTarget: function(aq) {
                if (!aq) {
                    return
                }
                var ar = this.findTargetNode(aq);
                if (ae.hasNodeAttributeWithValue(ar, this.CONTENT_TARGET_ATTR)) {
                    return ae.getAttributeValueFromNode(ar, this.CONTENT_TARGET_ATTR)
                }
                var ap;
                if (ae.hasNodeAttributeWithValue(ar, "href")) {
                    ap = ae.getAttributeValueFromNode(ar, "href");
                    return this.toAbsoluteUrl(ap)
                }
                var ao = this.findPieceNode(aq);
                if (ae.hasNodeAttributeWithValue(ao, "href")) {
                    ap = ae.getAttributeValueFromNode(ao, "href");
                    return this.toAbsoluteUrl(ap)
                }
            },
            isSameDomain: function(ao) {
                if (!ao || !ao.indexOf) {
                    return false
                }
                if (0 === ao.indexOf(this.getLocation().origin)) {
                    return true
                }
                var ap = ao.indexOf(this.getLocation().host);
                if (8 >= ap && 0 <= ap) {
                    return true
                }
                return false
            },
            removeDomainIfIsInLink: function(aq) {
                var ap = "^https?://[^/]+";
                var ao = "^.*//[^/]+";
                if (aq && aq.search && -1 !== aq.search(new RegExp(ap)) && this.isSameDomain(aq)) {
                    aq = aq.replace(new RegExp(ao), "");
                    if (!aq) {
                        aq = "/"
                    }
                }
                return aq
            },
            findMediaUrlInNode: function(at) {
                if (!at) {
                    return
                }
                var aq = ["img", "embed", "video", "audio"];
                var ao = at.nodeName.toLowerCase();
                if (-1 !== M(aq, ao) && ae.findFirstNodeHavingAttributeWithValue(at, "src")) {
                    var ar = ae.findFirstNodeHavingAttributeWithValue(at, "src");
                    return ae.getAttributeValueFromNode(ar, "src")
                }
                if (ao === "object" && ae.hasNodeAttributeWithValue(at, "data")) {
                    return ae.getAttributeValueFromNode(at, "data")
                }
                if (ao === "object") {
                    var au = ae.findNodesByTagName(at, "param");
                    if (au && au.length) {
                        var ap;
                        for (ap = 0; ap < au.length; ap++) {
                            if ("movie" === ae.getAttributeValueFromNode(au[ap], "name") && ae.hasNodeAttributeWithValue(au[ap], "value")) {
                                return ae.getAttributeValueFromNode(au[ap], "value")
                            }
                        }
                    }
                    var av = ae.findNodesByTagName(at, "embed");
                    if (av && av.length) {
                        return this.findMediaUrlInNode(av[0])
                    }
                }
            },
            trim: function(ao) {
                return a(ao)
            },
            isOrWasNodeInViewport: function(au) {
                if (!au || !au.getBoundingClientRect || au.nodeType !== 1) {
                    return true
                }
                var at = au.getBoundingClientRect();
                var ar = G.documentElement || {};
                var aq = at.top < 0;
                if (aq && au.offsetTop) {
                    aq = (au.offsetTop + at.height) > 0
                }
                var ap = ar.clientWidth;
                if (S.innerWidth && ap > S.innerWidth) {
                    ap = S.innerWidth
                }
                var ao = ar.clientHeight;
                if (S.innerHeight && ao > S.innerHeight) {
                    ao = S.innerHeight
                }
                return ((at.bottom > 0 || aq) && at.right > 0 && at.left < ap && ((at.top < ao) || aq))
            },
            isNodeVisible: function(ap) {
                var ao = i(ap);
                var aq = this.isOrWasNodeInViewport(ap);
                return ao && aq
            },
            buildInteractionRequestParams: function(ao, ap, aq, ar) {
                var at = "";
                if (ao) {
                    at += "c_i=" + s(ao)
                }
                if (ap) {
                    if (at) {
                        at += "&"
                    }
                    at += "c_n=" + s(ap)
                }
                if (aq) {
                    if (at) {
                        at += "&"
                    }
                    at += "c_p=" + s(aq)
                }
                if (ar) {
                    if (at) {
                        at += "&"
                    }
                    at += "c_t=" + s(ar)
                }
                if (at) {
                    at += "&ca=1"
                }
                return at
            },
            buildImpressionRequestParams: function(ao, ap, aq) {
                var ar = "c_n=" + s(ao) + "&c_p=" + s(ap);
                if (aq) {
                    ar += "&c_t=" + s(aq)
                }
                if (ar) {
                    ar += "&ca=1"
                }
                return ar
            },
            buildContentBlock: function(aq) {
                if (!aq) {
                    return
                }
                var ao = this.findContentName(aq);
                var ap = this.findContentPiece(aq);
                var ar = this.findContentTarget(aq);
                ao = this.trim(ao);
                ap = this.trim(ap);
                ar = this.trim(ar);
                return {
                    name: ao || "Unknown",
                    piece: ap || "Unknown",
                    target: ar || ""
                }
            },
            collectContent: function(ar) {
                if (!ar || !ar.length) {
                    return []
                }
                var aq = [];
                var ao, ap;
                for (ao = 0; ao < ar.length; ao++) {
                    ap = this.buildContentBlock(ar[ao]);
                    if (J(ap)) {
                        aq.push(ap)
                    }
                }
                return aq
            },
            setLocation: function(ao) {
                this.location = ao
            },
            getLocation: function() {
                var ao = this.location || S.location;
                if (!ao.origin) {
                    ao.origin = ao.protocol + "//" + ao.hostname + (ao.port ? ":" + ao.port : "")
                }
                return ao
            },
            toAbsoluteUrl: function(ap) {
                if ((!ap || String(ap) !== ap) && ap !== "") {
                    return ap
                }
                if ("" === ap) {
                    return this.getLocation().href
                }
                if (ap.search(/^\/\//) !== -1) {
                    return this.getLocation().protocol + ap
                }
                if (ap.search(/:\/\//) !== -1) {
                    return ap
                }
                if (0 === ap.indexOf("#")) {
                    return this.getLocation().origin + this.getLocation().pathname + ap
                }
                if (0 === ap.indexOf("?")) {
                    return this.getLocation().origin + this.getLocation().pathname + ap
                }
                if (0 === ap.search("^[a-zA-Z]{2,11}:")) {
                    return ap
                }
                if (ap.search(/^\//) !== -1) {
                    return this.getLocation().origin + ap
                }
                var ao = "(.*/)";
                var aq = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(ao))[0];
                return aq + ap
            },
            isUrlToCurrentDomain: function(ap) {
                var aq = this.toAbsoluteUrl(ap);
                if (!aq) {
                    return false
                }
                var ao = this.getLocation().origin;
                if (ao === aq) {
                    return true
                }
                if (0 === String(aq).indexOf(ao)) {
                    if (":" === String(aq).substr(ao.length, 1)) {
                        return false
                    }
                    return true
                }
                return false
            },
            setHrefAttribute: function(ap, ao) {
                if (!ap || !ao) {
                    return
                }
                ae.setAnyAttribute(ap, "href", ao)
            },
            shouldIgnoreInteraction: function(ao) {
                if (ae.hasNodeAttribute(ao, this.CONTENT_IGNOREINTERACTION_ATTR)) {
                    return true
                }
                if (ae.hasNodeCssClass(ao, this.CONTENT_IGNOREINTERACTION_CLASS)) {
                    return true
                }
                if (ae.hasNodeCssClass(ao, this.LEGACY_CONTENT_IGNOREINTERACTION_CLASS)) {
                    return true
                }
                return false
            }
        };

        function W(ap, at) {
            if (at) {
                return at
            }
            ap = v.toAbsoluteUrl(ap);
            if (z(ap, "?")) {
                var ar = ap.indexOf("?");
                ap = ap.slice(0, ar)
            }
            if (Q(ap, "matomo.php")) {
                ap = f(ap, "matomo.php".length)
            } else {
                if (Q(ap, "piwik.php")) {
                    ap = f(ap, "piwik.php".length)
                } else {
                    if (Q(ap, ".php")) {
                        var ao = ap.lastIndexOf("/");
                        var aq = 1;
                        ap = ap.slice(0, ao + aq)
                    }
                }
            }
            if (Q(ap, "/js/")) {
                ap = f(ap, "js/".length)
            }
            return ap
        }

        function N(av) {
            var ax = "Matomo_Overlay";
            var ap = new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=.*)?$");
            var aq = ap.exec(G.referrer);
            if (aq) {
                var at = aq[1];
                if (at !== String(av)) {
                    return false
                }
                var au = aq[2],
                    ao = aq[3],
                    ar = aq[4];
                if (!ar) {
                    ar = ""
                } else {
                    if (ar.indexOf("&segment=") === 0) {
                        ar = ar.substr("&segment=".length)
                    }
                }
                S.name = ax + "###" + au + "###" + ao + "###" + ar
            }
            var aw = S.name.split("###");
            return aw.length === 4 && aw[0] === ax
        }

        function Z(ap, av, aq) {
            var au = S.name.split("###"),
                at = au[1],
                ao = au[2],
                ar = au[3],
                aw = W(ap, av);
            n(aw + "plugins/Overlay/client/client.js?v=1", function() {
                Matomo_Overlay_Client.initialize(aw, aq, at, ao, ar)
            })
        }

        function u() {
            var aq;
            try {
                aq = S.frameElement
            } catch (ap) {
                return true
            }
            if (J(aq)) {
                return (aq && String(aq.nodeName).toLowerCase() === "iframe") ? true : false
            }
            try {
                return S.self !== S.top
            } catch (ao) {
                return true
            }
        }

        function P(ce, ca) {
            var bK = this,
                be = "mtm_consent",
                cD = "mtm_cookie_consent",
                cM = "mtm_consent_removed",
                b5 = aa(G.domain, S.location.href, K()),
                cU = L(b5[0]),
                bO = o(b5[1]),
                bp = o(b5[2]),
                cS = false,
                ci = "GET",
                c9 = ci,
                aI = "application/x-www-form-urlencoded; charset=UTF-8",
                cw = aI,
                aE = ce || "",
                bJ = "",
                cZ = "",
                b7 = ca || "",
                bA = "",
                bP = "",
                a5, bk = "",
                c6 = ["7z", "aac", "apk", "arc", "arj", "asf", "asx", "avi", "azw3", "bin", "csv", "deb", "dmg", "doc", "docx", "epub", "exe", "flv", "gif", "gz", "gzip", "hqx", "ibooks", "jar", "jpg", "jpeg", "js", "mobi", "mp2", "mp3", "mp4", "mpg", "mpeg", "mov", "movie", "msi", "msp", "odb", "odf", "odg", "ods", "odt", "ogg", "ogv", "pdf", "phps", "png", "ppt", "pptx", "qt", "qtm", "ra", "ram", "rar", "rpm", "rtf", "sea", "sit", "tar", "tbz", "tbz2", "bz", "bz2", "tgz", "torrent", "txt", "wav", "wma", "wmv", "wpd", "xls", "xlsx", "xml", "z", "zip"],
                ay = [cU],
                bB = [],
                bM = [],
                a9 = [],
                bL = 500,
                cW = true,
                cJ, a6, bS, bQ, ao, cp = ["pk_campaign", "mtm_campaign", "piwik_campaign", "matomo_campaign", "utm_campaign", "utm_source", "utm_medium"],
                bI = ["pk_kwd", "mtm_kwd", "piwik_kwd", "matomo_kwd", "utm_term"],
                bl = "_pk_",
                av = "pk_vid",
                a0 = 180,
                cX, br, bT = false,
                aJ = "Lax",
                bn = false,
                cQ, bf, bx, cK = 33955200000,
                cn = 1800000,
                c5 = 15768000000,
                a3 = true,
                bG = false,
                bi = false,
                bR = false,
                aR = false,
                cc, bX = {},
                cm = {},
                bo = {},
                bv = 200,
                cs = {},
                c0 = {},
                c7 = {},
                cb = [],
                cf = false,
                cB = false,
                ap = false,
                c8 = false,
                cN = false,
                aO = false,
                bd = u(),
                cx = null,
                cY = null,
                aS, bC, b8 = am,
                bq, aM, cq = 0,
                bw = ["id", "ses", "cvar", "ref"],
                cA = false,
                bD = null,
                cL = [],
                ax = T++,
                aw = false;
            try {
                bk = G.title
            } catch (cy) {
                bk = ""
            }

            function dd(dq, dn, dm, dp, dl, dk, dj) {
                if (bn && dq !== cM) {
                    return
                }
                var di;
                if (dm) {
                    di = new Date();
                    di.setTime(di.getTime() + dm)
                }
                if (!dj) {
                    dj = "Lax"
                }
                G.cookie = dq + "=" + s(dn) + (dm ? ";expires=" + di.toGMTString() : "") + ";path=" + (dp || "/") + (dl ? ";domain=" + dl : "") + (dk ? ";secure" : "") + ";SameSite=" + dj
            }

            function aD(dk) {
                if (bn) {
                    return 0
                }
                var di = new RegExp("(^|;)[ ]*" + dk + "=([^;]*)"),
                    dj = di.exec(G.cookie);
                return dj ? R(dj[2]) : 0
            }
            bD = !aD(cM);

            function b3(di) {
                var dj;
                di = j(di, av);
                if (bQ) {
                    dj = new RegExp("#.*");
                    return di.replace(dj, "")
                }
                return di
            }

            function bW(dk, di) {
                var dl = r(di),
                    dj;
                if (dl) {
                    return di
                }
                if (di.slice(0, 1) === "/") {
                    return r(dk) + "://" + d(dk) + di
                }
                dk = b3(dk);
                dj = dk.indexOf("?");
                if (dj >= 0) {
                    dk = dk.slice(0, dj)
                }
                dj = dk.lastIndexOf("/");
                if (dj !== dk.length - 1) {
                    dk = dk.slice(0, dj + 1)
                }
                return dk + di
            }

            function cH(dk, di) {
                var dj;
                dk = String(dk).toLowerCase();
                di = String(di).toLowerCase();
                if (dk === di) {
                    return true
                }
                if (di.slice(0, 1) === ".") {
                    if (dk === di.slice(1)) {
                        return true
                    }
                    dj = dk.length - di.length;
                    if ((dj > 0) && (dk.slice(dj) === di)) {
                        return true
                    }
                }
                return false
            }

            function cl(di) {
                var dj = document.createElement("a");
                if (di.indexOf("//") !== 0 && di.indexOf("http") !== 0) {
                    if (di.indexOf("*") === 0) {
                        di = di.substr(1)
                    }
                    if (di.indexOf(".") === 0) {
                        di = di.substr(1)
                    }
                    di = "http://" + di
                }
                dj.href = v.toAbsoluteUrl(di);
                if (dj.pathname) {
                    return dj.pathname
                }
                return ""
            }

            function a4(dj, di) {
                if (!aj(di, "/")) {
                    di = "/" + di
                }
                if (!aj(dj, "/")) {
                    dj = "/" + dj
                }
                var dk = (di === "/" || di === "/*");
                if (dk) {
                    return true
                }
                if (dj === di) {
                    return true
                }
                di = String(di).toLowerCase();
                dj = String(dj).toLowerCase();
                if (Q(di, "*")) {
                    di = di.slice(0, -1);
                    dk = (!di || di === "/");
                    if (dk) {
                        return true
                    }
                    if (dj === di) {
                        return true
                    }
                    return dj.indexOf(di) === 0
                }
                if (!Q(dj, "/")) {
                    dj += "/"
                }
                if (!Q(di, "/")) {
                    di += "/"
                }
                return dj.indexOf(di) === 0
            }

            function ar(dm, dp) {
                var dj, di, dk, dl, dn;
                for (dj = 0; dj < ay.length; dj++) {
                    dl = L(ay[dj]);
                    dn = cl(ay[dj]);
                    if (cH(dm, dl) && a4(dp, dn)) {
                        return true
                    }
                }
                return false
            }

            function aW(dl) {
                var dj, di, dk;
                for (dj = 0; dj < ay.length; dj++) {
                    di = L(ay[dj].toLowerCase());
                    if (dl === di) {
                        return true
                    }
                    if (di.slice(0, 1) === ".") {
                        if (dl === di.slice(1)) {
                            return true
                        }
                        dk = dl.length - di.length;
                        if ((dk > 0) && (dl.slice(dk) === di)) {
                            return true
                        }
                    }
                }
                return false
            }

            function co(di, dk) {
                di = di.replace("send_image=0", "send_image=1");
                var dj = new Image(1, 1);
                dj.onload = function() {
                    E = 0;
                    if (typeof dk === "function") {
                        dk({
                            request: di,
                            trackerUrl: aE,
                            success: true
                        })
                    }
                };
                dj.onerror = function() {
                    if (typeof dk === "function") {
                        dk({
                            request: di,
                            trackerUrl: aE,
                            success: false
                        })
                    }
                };
                dj.src = aE + (aE.indexOf("?") < 0 ? "?" : "&") + di
            }

            function cE(di) {
                if (c9 === "POST") {
                    return true
                }
                return di && (di.length > 2000 || di.indexOf('{"requests"') === 0)
            }

            function aL() {
                return "object" === typeof g && "function" === typeof g.sendBeacon && "function" === typeof Blob
            }

            function a7(dm, dq, dp) {
                var dk = aL();
                if (!dk) {
                    return false
                }
                var dl = {
                    type: "application/x-www-form-urlencoded; charset=UTF-8"
                };
                var dr = false;
                var dj = aE;
                try {
                    var di = new Blob([dm], dl);
                    if (dp && !cE(dm)) {
                        di = new Blob([], dl);
                        dj = dj + (dj.indexOf("?") < 0 ? "?" : "&") + dm
                    }
                    dr = g.sendBeacon(dj, di)
                } catch (dn) {
                    return false
                }
                if (dr && typeof dq === "function") {
                    dq({
                        request: dm,
                        trackerUrl: aE,
                        success: true,
                        isSendBeacon: true
                    })
                }
                return dr
            }

            function c4(dj, dk, di) {
                if (!J(di) || null === di) {
                    di = true
                }
                if (l && a7(dj, dk, di)) {
                    return
                }
                setTimeout(function() {
                    if (l && a7(dj, dk, di)) {
                        return
                    }
                    var dn;
                    try {
                        var dm = S.XMLHttpRequest ? new S.XMLHttpRequest() : S.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
                        dm.open("POST", aE, true);
                        dm.onreadystatechange = function() {
                            if (this.readyState === 4 && !(this.status >= 200 && this.status < 300)) {
                                var dp = l && a7(dj, dk, di);
                                if (!dp && di) {
                                    co(dj, dk)
                                } else {
                                    if (typeof dk === "function") {
                                        dk({
                                            request: dj,
                                            trackerUrl: aE,
                                            success: false,
                                            xhr: this
                                        })
                                    }
                                }
                            } else {
                                if (this.readyState === 4 && (typeof dk === "function")) {
                                    dk({
                                        request: dj,
                                        trackerUrl: aE,
                                        success: true,
                                        xhr: this
                                    })
                                }
                            }
                        };
                        dm.setRequestHeader("Content-Type", cw);
                        dm.withCredentials = true;
                        dm.send(dj)
                    } catch (dl) {
                        dn = l && a7(dj, dk, di);
                        if (!dn && di) {
                            co(dj, dk)
                        } else {
                            if (typeof dk === "function") {
                                dk({
                                    request: dj,
                                    trackerUrl: aE,
                                    success: false
                                })
                            }
                        }
                    }
                }, 50)
            }

            function cg(dj) {
                var di = new Date();
                var dk = di.getTime() + dj;
                if (!q || dk > q) {
                    q = dk
                }
            }

            function bb() {
                bd = true;
                cx = new Date().getTime()
            }

            function dc() {
                var di = new Date().getTime();
                return !cx || (di - cx) > a6
            }

            function az() {
                if (dc()) {
                    bS()
                }
            }

            function df() {
                if (aO || !a6) {
                    return
                }
                aO = true;
                an(S, "focus", bb);
                an(S, "blur", az);
                ab++;
                t.addPlugin("HeartBeat" + ab, {
                    unload: function() {
                        if (aO && dc()) {
                            bS()
                        }
                    }
                })
            }

            function cC(dm) {
                var dj = new Date();
                var di = dj.getTime();
                cY = di;
                if (cB && di < cB) {
                    var dk = cB - di;
                    setTimeout(dm, dk);
                    cg(dk + 50);
                    cB += 50;
                    return
                }
                if (cB === false) {
                    var dl = 800;
                    cB = di + dl
                }
                dm()
            }

            function aP() {
                if (aD(cM)) {
                    bD = false
                } else {
                    if (aD(be)) {
                        bD = true
                    }
                }
            }

            function bH(dj, di, dk) {
                aP();
                if (!bD) {
                    cL.push(dj);
                    return
                }
                aw = true;
                if (!cQ && dj) {
                    if (cA && bD) {
                        dj += "&consent=1"
                    }
                    cC(function() {
                        if (cW && a7(dj, dk, true)) {
                            cg(100);
                            return
                        }
                        if (cE(dj)) {
                            c4(dj, dk)
                        } else {
                            co(dj, dk)
                        }
                        cg(di)
                    })
                }
                if (!aO) {
                    df()
                }
            }

            function ck(di) {
                if (cQ) {
                    return false
                }
                return (di && di.length)
            }

            function c3(di, dm) {
                if (!dm || dm >= di.length) {
                    return [di]
                }
                var dj = 0;
                var dk = di.length;
                var dl = [];
                for (dj; dj < dk; dj += dm) {
                    dl.push(di.slice(dj, dj + dm))
                }
                return dl
            }

            function de(dj, di) {
                if (!ck(dj)) {
                    return
                }
                if (!bD) {
                    cL.push(dj);
                    return
                }
                aw = true;
                cC(function() {
                    var dm = c3(dj, 50);
                    var dk = 0,
                        dl;
                    for (dk; dk < dm.length; dk++) {
                        dl = '{"requests":["?' + dm[dk].join('","?') + '"],"send_image":0}';
                        if (cW && a7(dl, null, false)) {
                            cg(100)
                        } else {
                            c4(dl, null, false)
                        }
                    }
                    cg(di)
                })
            }

            function aU(di) {
                return bl + di + "." + b7 + "." + bq
            }

            function bZ(dk, dj, di) {
                dd(dk, "", -86400, dj, di)
            }

            function b6() {
                if (bn) {
                    return "0"
                }
                if (!J(S.showModalDialog) && J(g.cookieEnabled)) {
                    return g.cookieEnabled ? "1" : "0"
                }
                var di = bl + "testcookie";
                dd(di, "1", undefined, br, cX, bT, aJ);
                var dj = aD(di) === "1" ? "1" : "0";
                bZ(di);
                return dj
            }

            function bj() {
                bq = b8((cX || cU) + (br || "/")).slice(0, 4)
            }

            function cI() {
                if (J(c7.res)) {
                    return c7
                }
                var dj, dl, dm = {
                    pdf: "application/pdf",
                    qt: "video/quicktime",
                    realp: "audio/x-pn-realaudio-plugin",
                    wma: "application/x-mplayer2",
                    fla: "application/x-shockwave-flash",
                    java: "application/x-java-vm",
                    ag: "application/x-silverlight"
                };
                if (!((new RegExp("MSIE")).test(g.userAgent))) {
                    if (g.mimeTypes && g.mimeTypes.length) {
                        for (dj in dm) {
                            if (Object.prototype.hasOwnProperty.call(dm, dj)) {
                                dl = g.mimeTypes[dm[dj]];
                                c7[dj] = (dl && dl.enabledPlugin) ? "1" : "0"
                            }
                        }
                    }
                    if (!((new RegExp("Edge[ /](\\d+[\\.\\d]+)")).test(g.userAgent)) && typeof navigator.javaEnabled !== "unknown" && J(g.javaEnabled) && g.javaEnabled()) {
                        c7.java = "1"
                    }
                    if (!J(S.showModalDialog) && J(g.cookieEnabled)) {
                        c7.cookie = g.cookieEnabled ? "1" : "0"
                    } else {
                        c7.cookie = b6()
                    }
                }
                var dk = parseInt(X.width, 10);
                var di = parseInt(X.height, 10);
                c7.res = parseInt(dk, 10) + "x" + parseInt(di, 10);
                return c7
            }

            function bY() {
                var dj = aU("cvar"),
                    di = aD(dj);
                if (di && di.length) {
                    di = S.JSON.parse(di);
                    if (V(di)) {
                        return di
                    }
                }
                return {}
            }

            function cF() {
                if (aR === false) {
                    aR = bY()
                }
            }

            function cR() {
                var di = cI();
                return b8((g.userAgent || "") + (g.platform || "") + S.JSON.stringify(di) + (new Date()).getTime() + Math.random()).slice(0, 16)
            }

            function aB() {
                var di = cI();
                return b8((g.userAgent || "") + (g.platform || "") + S.JSON.stringify(di)).slice(0, 6)
            }

            function bg() {
                return Math.floor((new Date()).getTime() / 1000)
            }

            function aK() {
                var dj = bg();
                var dk = aB();
                var di = String(dj) + dk;
                return di
            }

            function c2(dk) {
                dk = String(dk);
                var dn = aB();
                var dl = dn.length;
                var dm = dk.substr(-1 * dl, dl);
                var dj = parseInt(dk.substr(0, dk.length - dl), 10);
                if (dj && dm && dm === dn) {
                    var di = bg();
                    if (a0 <= 0) {
                        return true
                    }
                    if (di >= dj && di <= (dj + a0)) {
                        return true
                    }
                }
                return false
            }

            function dg(di) {
                if (!cN) {
                    return ""
                }
                var dm = e(di, av);
                if (!dm) {
                    return ""
                }
                dm = String(dm);
                var dk = new RegExp("^[a-zA-Z0-9]+$");
                if (dm.length === 32 && dk.test(dm)) {
                    var dj = dm.substr(16, 32);
                    if (c2(dj)) {
                        var dl = dm.substr(0, 16);
                        return dl
                    }
                }
                return ""
            }

            function cO() {
                if (!bP) {
                    bP = dg(bO)
                }
                var dk = new Date(),
                    di = Math.round(dk.getTime() / 1000),
                    dj = aU("id"),
                    dn = aD(dj),
                    dm, dl;
                if (dn) {
                    dm = dn.split(".");
                    dm.unshift("0");
                    if (bP.length) {
                        dm[1] = bP
                    }
                    return dm
                }
                if (bP.length) {
                    dl = bP
                } else {
                    if ("0" === b6()) {
                        dl = ""
                    } else {
                        dl = cR()
                    }
                }
                dm = ["1", dl, di];
                return dm
            }

            function aZ() {
                var dl = cO(),
                    dj = dl[0],
                    dk = dl[1],
                    di = dl[2];
                return {
                    newVisitor: dj,
                    uuid: dk,
                    createTs: di
                }
            }

            function aH() {
                var dl = new Date(),
                    dj = dl.getTime(),
                    dm = aZ().createTs;
                var di = parseInt(dm, 10);
                var dk = (di * 1000) + cK - dj;
                return dk
            }

            function aN(di) {
                if (!b7) {
                    return
                }
                var dk = new Date(),
                    dj = Math.round(dk.getTime() / 1000);
                if (!J(di)) {
                    di = aZ()
                }
                var dl = di.uuid + "." + di.createTs + ".";
                dd(aU("id"), dl, aH(), br, cX, bT, aJ)
            }

            function bN() {
                var di = aD(aU("ref"));
                if (di.length) {
                    try {
                        di = S.JSON.parse(di);
                        if (V(di)) {
                            return di
                        }
                    } catch (dj) {}
                }
                return ["", "", 0, ""]
            }

            function by(dj) {
                var di = "testvalue";
                dd("test", di, 10000, null, dj, bT, aJ);
                if (aD("test") === di) {
                    bZ("test", null, dj);
                    return true
                }
                return false
            }

            function aF() {
                var dj = bn;
                bn = false;
                var di, dk;
                for (di = 0; di < bw.length; di++) {
                    dk = aU(bw[di]);
                    if (dk !== cM && dk !== be && 0 !== aD(dk)) {
                        bZ(dk, br, cX)
                    }
                }
                bn = dj
            }

            function b4(di) {
                b7 = di
            }

            function dh(dm) {
                if (!dm || !V(dm)) {
                    return
                }
                var dl = [];
                var dk;
                for (dk in dm) {
                    if (Object.prototype.hasOwnProperty.call(dm, dk)) {
                        dl.push(dk)
                    }
                }
                var dn = {};
                dl.sort();
                var di = dl.length;
                var dj;
                for (dj = 0; dj < di; dj++) {
                    dn[dl[dj]] = dm[dl[dj]]
                }
                return dn
            }

            function cd() {
                dd(aU("ses"), "1", cn, br, cX, bT, aJ)
            }

            function bh() {
                var dl = "";
                var dj = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                var dk = dj.length;
                var di;
                for (di = 0; di < 6; di++) {
                    dl += dj.charAt(Math.floor(Math.random() * dk))
                }
                return dl
            }

            function aA(dj) {
                if (!h) {
                    return dj
                }
                var dk = (typeof h.getEntriesByType === "function") && h.getEntriesByType("navigation") ? h.getEntriesByType("navigation")[0] : h.timing;
                if (!dk) {
                    return dj
                }
                var di = "";
                if (dk.connectEnd && dk.fetchStart) {
                    if (dk.connectEnd < dk.fetchStart) {
                        return
                    }
                    di += "&pf_net=" + (dk.connectEnd - dk.fetchStart)
                }
                if (dk.responseStart && dk.requestStart) {
                    if (dk.responseStart < dk.requestStart) {
                        return
                    }
                    di += "&pf_srv=" + (dk.responseStart - dk.requestStart)
                }
                if (dk.responseStart && dk.responseEnd) {
                    if (dk.responseEnd < dk.responseStart) {
                        return
                    }
                    di += "&pf_tfr=" + (dk.responseEnd - dk.responseStart)
                }
                if (dk.domInteractive && dk.domLoading) {
                    if (dk.domInteractive < dk.domLoading) {
                        return
                    }
                    di += "&pf_dm1=" + (dk.domInteractive - dk.domLoading)
                }
                if (dk.domComplete && dk.domInteractive) {
                    if (dk.domComplete < dk.domInteractive) {
                        return
                    }
                    di += "&pf_dm2=" + (dk.domComplete - dk.domInteractive)
                }
                if (dk.loadEventEnd && dk.loadEventStart) {
                    if (dk.loadEventEnd < dk.loadEventStart) {
                        return
                    }
                    di += "&pf_onl=" + (dk.loadEventEnd - dk.loadEventStart)
                }
                return dj + di
            }

            function cr(dk, dF, dG) {
                var dE, dj = new Date(),
                    ds = Math.round(dj.getTime() / 1000),
                    dp, dC, dl = 1024,
                    dL, dt, dB = aR,
                    dm = aU("ses"),
                    dz = aU("ref"),
                    dw = aU("cvar"),
                    dx = aD(dm),
                    dD = bN(),
                    dH = a5 || bO,
                    dq, di;
                if (bn) {
                    aF()
                }
                if (cQ) {
                    return ""
                }
                var dy = aZ();
                var dv = G.characterSet || G.charset;
                if (!dv || dv.toLowerCase() === "utf-8") {
                    dv = null
                }
                dq = dD[0];
                di = dD[1];
                dp = dD[2];
                dC = dD[3];
                if (!dx) {
                    if (!bx || !dq.length) {
                        for (dE in cp) {
                            if (Object.prototype.hasOwnProperty.call(cp, dE)) {
                                dq = e(dH, cp[dE]);
                                if (dq.length) {
                                    break
                                }
                            }
                        }
                        for (dE in bI) {
                            if (Object.prototype.hasOwnProperty.call(bI, dE)) {
                                di = e(dH, bI[dE]);
                                if (di.length) {
                                    break
                                }
                            }
                        }
                    }
                    dL = d(bp);
                    dt = dC.length ? d(dC) : "";
                    if (dL.length && !aW(dL) && (!bx || !dt.length || aW(dt))) {
                        dC = bp
                    }
                    if (dC.length || dq.length) {
                        dp = ds;
                        dD = [dq, di, dp, b3(dC.slice(0, dl))];
                        dd(dz, S.JSON.stringify(dD), c5, br, cX, bT, aJ)
                    }
                }
                dk += "&idsite=" + b7 + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + dj.getHours() + "&m=" + dj.getMinutes() + "&s=" + dj.getSeconds() + "&url=" + s(b3(dH)) + (bp.length ? "&urlref=" + s(b3(bp)) : "") + (Y(bA) ? "&uid=" + s(bA) : "") + "&_id=" + dy.uuid + "&_idn=" + dy.newVisitor + (dq.length ? "&_rcn=" + s(dq) : "") + (di.length ? "&_rck=" + s(di) : "") + "&_refts=" + dp + (String(dC).length ? "&_ref=" + s(b3(dC.slice(0, dl))) : "") + (dv ? "&cs=" + s(dv) : "") + "&send_image=0";
                var dK = cI();
                for (dE in dK) {
                    if (Object.prototype.hasOwnProperty.call(dK, dE)) {
                        dk += "&" + dE + "=" + dK[dE]
                    }
                }
                var dJ = [];
                if (dF) {
                    for (dE in dF) {
                        if (Object.prototype.hasOwnProperty.call(dF, dE) && /^dimension\d+$/.test(dE)) {
                            var dn = dE.replace("dimension", "");
                            dJ.push(parseInt(dn, 10));
                            dJ.push(String(dn));
                            dk += "&" + dE + "=" + s(dF[dE]);
                            delete dF[dE]
                        }
                    }
                }
                if (dF && B(dF)) {
                    dF = null
                }
                for (dE in cs) {
                    if (Object.prototype.hasOwnProperty.call(cs, dE)) {
                        dk += "&" + dE + "=" + s(cs[dE])
                    }
                }
                for (dE in bo) {
                    if (Object.prototype.hasOwnProperty.call(bo, dE)) {
                        var du = (-1 === M(dJ, dE));
                        if (du) {
                            dk += "&dimension" + dE + "=" + s(bo[dE])
                        }
                    }
                }
                if (dF) {
                    dk += "&data=" + s(S.JSON.stringify(dF))
                } else {
                    if (ao) {
                        dk += "&data=" + s(S.JSON.stringify(ao))
                    }
                }

                function dr(dM, dN) {
                    var dO = S.JSON.stringify(dM);
                    if (dO.length > 2) {
                        return "&" + dN + "=" + s(dO)
                    }
                    return ""
                }
                var dI = dh(bX);
                var dA = dh(cm);
                dk += dr(dI, "cvar");
                dk += dr(dA, "e_cvar");
                if (aR) {
                    dk += dr(aR, "_cvar");
                    for (dE in dB) {
                        if (Object.prototype.hasOwnProperty.call(dB, dE)) {
                            if (aR[dE][0] === "" || aR[dE][1] === "") {
                                delete aR[dE]
                            }
                        }
                    }
                    if (bR) {
                        dd(dw, S.JSON.stringify(aR), cn, br, cX, bT, aJ)
                    }
                }
                if (a3 && bG && !bi) {
                    dk = aA(dk);
                    bi = true
                }
                if (aM) {
                    dk += "&pv_id=" + aM
                }
                aN(dy);
                cd();
                dk += ac(dG, {
                    tracker: bK,
                    request: dk
                });
                if (cZ.length) {
                    dk += "&" + cZ
                }
                if (A(cc)) {
                    dk = cc(dk)
                }
                return dk
            }
            bS = function a8() {
                var di = new Date();
                di = di.getTime();
                if (!cY) {
                    return false
                }
                if (cY + a6 <= di) {
                    bK.ping();
                    return true
                }
                return false
            };

            function bs(dl, dk, dq, dm, di, dt) {
                var dp = "idgoal=0",
                    dj = new Date(),
                    dr = [],
                    ds, dn = String(dl).length;
                if (dn) {
                    dp += "&ec_id=" + s(dl)
                }
                dp += "&revenue=" + dk;
                if (String(dq).length) {
                    dp += "&ec_st=" + dq
                }
                if (String(dm).length) {
                    dp += "&ec_tx=" + dm
                }
                if (String(di).length) {
                    dp += "&ec_sh=" + di
                }
                if (String(dt).length) {
                    dp += "&ec_dt=" + dt
                }
                if (c0) {
                    for (ds in c0) {
                        if (Object.prototype.hasOwnProperty.call(c0, ds)) {
                            if (!J(c0[ds][1])) {
                                c0[ds][1] = ""
                            }
                            if (!J(c0[ds][2])) {
                                c0[ds][2] = ""
                            }
                            if (!J(c0[ds][3]) || String(c0[ds][3]).length === 0) {
                                c0[ds][3] = 0
                            }
                            if (!J(c0[ds][4]) || String(c0[ds][4]).length === 0) {
                                c0[ds][4] = 1
                            }
                            dr.push(c0[ds])
                        }
                    }
                    dp += "&ec_items=" + s(S.JSON.stringify(dr))
                }
                dp = cr(dp, ao, "ecommerce");
                bH(dp, bL);
                if (dn) {
                    c0 = {}
                }
            }

            function b0(di, dm, dl, dk, dj, dn) {
                if (String(di).length && J(dm)) {
                    bs(di, dm, dl, dk, dj, dn)
                }
            }

            function bu(di) {
                if (J(di)) {
                    bs("", di, "", "", "", "")
                }
            }

            function b1(dj, dl, dk) {
                aM = bh();
                var di = cr("action_name=" + s(al(dj || bk)), dl, "log");
                if (!bi) {
                    di = aA(di)
                }
                bH(di, bL, dk)
            }

            function a1(dk, dj) {
                var dl, di = "(^| )(piwik[_-]" + dj + "|matomo[_-]" + dj;
                if (dk) {
                    for (dl = 0; dl < dk.length; dl++) {
                        di += "|" + dk[dl]
                    }
                }
                di += ")( |$)";
                return new RegExp(di)
            }

            function aV(di) {
                return (aE && di && 0 === String(di).indexOf(aE))
            }

            function cu(dm, di, dn, dj) {
                if (aV(di)) {
                    return 0
                }
                var dl = a1(bM, "download"),
                    dk = a1(a9, "link"),
                    dp = new RegExp("\\.(" + c6.join("|") + ")([?&#]|$)", "i");
                if (dk.test(dm)) {
                    return "link"
                }
                if (dj || dl.test(dm) || dp.test(di)) {
                    return "download"
                }
                if (dn) {
                    return 0
                }
                return "link"
            }

            function au(dj) {
                var di;
                di = dj.parentNode;
                while (di !== null && J(di)) {
                    if (ae.isLinkElement(dj)) {
                        break
                    }
                    dj = di;
                    di = dj.parentNode
                }
                return dj
            }

            function db(dn) {
                dn = au(dn);
                if (!ae.hasNodeAttribute(dn, "href")) {
                    return
                }
                if (!J(dn.href)) {
                    return
                }
                var dm = ae.getAttributeValueFromNode(dn, "href");
                var dj = dn.pathname || cl(dn.href);
                var dp = dn.hostname || d(dn.href);
                var dq = dp.toLowerCase();
                var dk = dn.href.replace(dp, dq);
                var dl = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):", "i");
                if (!dl.test(dk)) {
                    var di = cu(dn.className, dk, ar(dq, dj), ae.hasNodeAttribute(dn, "download"));
                    if (di) {
                        return {
                            type: di,
                            href: dk
                        }
                    }
                }
            }

            function aQ(di, dj, dk, dl) {
                var dm = v.buildInteractionRequestParams(di, dj, dk, dl);
                if (!dm) {
                    return
                }
                return cr(dm, null, "contentInteraction")
            }

            function bc(di, dj) {
                if (!di || !dj) {
                    return false
                }
                var dk = v.findTargetNode(di);
                if (v.shouldIgnoreInteraction(dk)) {
                    return false
                }
                dk = v.findTargetNodeNoDefault(di);
                if (dk && !U(dk, dj)) {
                    return false
                }
                return true
            }

            function ct(dk, dj, dm) {
                if (!dk) {
                    return
                }
                var di = v.findParentContentNode(dk);
                if (!di) {
                    return
                }
                if (!bc(di, dk)) {
                    return
                }
                var dl = v.buildContentBlock(di);
                if (!dl) {
                    return
                }
                if (!dl.target && dm) {
                    dl.target = dm
                }
                return v.buildInteractionRequestParams(dj, dl.name, dl.piece, dl.target)
            }

            function aX(dj) {
                if (!cb || !cb.length) {
                    return false
                }
                var di, dk;
                for (di = 0; di < cb.length; di++) {
                    dk = cb[di];
                    if (dk && dk.name === dj.name && dk.piece === dj.piece && dk.target === dj.target) {
                        return true
                    }
                }
                return false
            }

            function aY(di) {
                return function(dm) {
                    if (!di) {
                        return
                    }
                    var dk = v.findParentContentNode(di);
                    var dj;
                    if (dm) {
                        dj = dm.target || dm.srcElement
                    }
                    if (!dj) {
                        dj = di
                    }
                    if (!bc(dk, dj)) {
                        return
                    }
                    if (!dk) {
                        return false
                    }
                    var dn = v.findTargetNode(dk);
                    if (!dn || v.shouldIgnoreInteraction(dn)) {
                        return false
                    }
                    var dl = db(dn);
                    if (c8 && dl && dl.type) {
                        return dl.type
                    }
                    return bK.trackContentInteractionNode(dj, "click")
                }
            }

            function b2(dk) {
                if (!dk || !dk.length) {
                    return
                }
                var di, dj;
                for (di = 0; di < dk.length; di++) {
                    dj = v.findTargetNode(dk[di]);
                    if (dj && !dj.contentInteractionTrackingSetupDone) {
                        dj.contentInteractionTrackingSetupDone = true;
                        an(dj, "click", aY(dj))
                    }
                }
            }

            function bz(dk, dl) {
                if (!dk || !dk.length) {
                    return []
                }
                var di, dj;
                for (di = 0; di < dk.length; di++) {
                    if (aX(dk[di])) {
                        dk.splice(di, 1);
                        di--
                    } else {
                        cb.push(dk[di])
                    }
                }
                if (!dk || !dk.length) {
                    return []
                }
                b2(dl);
                var dm = [];
                for (di = 0; di < dk.length; di++) {
                    dj = cr(v.buildImpressionRequestParams(dk[di].name, dk[di].piece, dk[di].target), undefined, "contentImpressions");
                    if (dj) {
                        dm.push(dj)
                    }
                }
                return dm
            }

            function cz(dj) {
                var di = v.collectContent(dj);
                return bz(di, dj)
            }

            function ba(dj) {
                if (!dj || !dj.length) {
                    return []
                }
                var di;
                for (di = 0; di < dj.length; di++) {
                    if (!v.isNodeVisible(dj[di])) {
                        dj.splice(di, 1);
                        di--
                    }
                }
                if (!dj || !dj.length) {
                    return []
                }
                return cz(dj)
            }

            function aG(dk, di, dj) {
                var dl = v.buildImpressionRequestParams(dk, di, dj);
                return cr(dl, null, "contentImpression")
            }

            function da(dl, dj) {
                if (!dl) {
                    return
                }
                var di = v.findParentContentNode(dl);
                var dk = v.buildContentBlock(di);
                if (!dk) {
                    return
                }
                if (!dj) {
                    dj = "Unknown"
                }
                return aQ(dj, dk.name, dk.piece, dk.target)
            }

            function cP(dj, dl, di, dk) {
                return "e_c=" + s(dj) + "&e_a=" + s(dl) + (J(di) ? "&e_n=" + s(di) : "") + (J(dk) ? "&e_v=" + s(dk) : "") + "&ca=1"
            }

            function at(dk, dm, di, dl, dp, dn) {
                if (!Y(dk) || !Y(dm)) {
                    ak("Error while logging event: Parameters `category` and `action` must not be empty or filled with whitespaces");
                    return false
                }
                var dj = cr(cP(dk, dm, di, dl), dp, "event");
                bH(dj, bL, dn)
            }

            function b9(di, dl, dj, dm) {
                var dk = cr("search=" + s(di) + (dl ? "&search_cat=" + s(dl) : "") + (J(dj) ? "&search_count=" + dj : ""), dm, "sitesearch");
                bH(dk, bL)
            }

            function cT(di, dm, dl, dk) {
                var dj = cr("idgoal=" + di + (dm ? "&revenue=" + dm : ""), dl, "goal");
                bH(dj, bL, dk)
            }

            function c1(dl, di, dq, dp, dk) {
                var dn = di + "=" + s(b3(dl));
                var dj = ct(dk, "click", dl);
                if (dj) {
                    dn += "&" + dj
                }
                var dm = cr(dn, dq, "link");
                bH(dm, bL, dp)
            }

            function bV(dj, di) {
                if (dj !== "") {
                    return dj + di.charAt(0).toUpperCase() + di.slice(1)
                }
                return di
            }

            function ch(dn) {
                var dm, di, dl = ["", "webkit", "ms", "moz"],
                    dk;
                if (!bf) {
                    for (di = 0; di < dl.length; di++) {
                        dk = dl[di];
                        if (Object.prototype.hasOwnProperty.call(G, bV(dk, "hidden"))) {
                            if (G[bV(dk, "visibilityState")] === "prerender") {
                                dm = true
                            }
                            break
                        }
                    }
                }
                if (dm) {
                    an(G, dk + "visibilitychange", function dj() {
                        G.removeEventListener(dk + "visibilitychange", dj, false);
                        dn()
                    });
                    return
                }
                dn()
            }

            function bt() {
                var dj = bK.getVisitorId();
                var di = aK();
                return dj + di
            }

            function cj(di) {
                if (!di) {
                    return
                }
                if (!ae.hasNodeAttribute(di, "href")) {
                    return
                }
                var dj = ae.getAttributeValueFromNode(di, "href");
                if (!dj || aV(dj)) {
                    return
                }
                if (!bK.getVisitorId()) {
                    return
                }
                dj = j(dj, av);
                var dk = bt();
                dj = F(dj, av, dk);
                ae.setAnyAttribute(di, "href", dj)
            }

            function bm(dl) {
                var dm = ae.getAttributeValueFromNode(dl, "href");
                if (!dm) {
                    return false
                }
                dm = String(dm);
                var dj = dm.indexOf("//") === 0 || dm.indexOf("http://") === 0 || dm.indexOf("https://") === 0;
                if (!dj) {
                    return false
                }
                var di = dl.pathname || cl(dl.href);
                var dk = (dl.hostname || d(dl.href)).toLowerCase();
                if (ar(dk, di)) {
                    if (!cH(cU, L(dk))) {
                        return true
                    }
                    return false
                }
                return false
            }

            function cG(di) {
                var dj = db(di);
                if (dj && dj.type) {
                    dj.href = o(dj.href);
                    c1(dj.href, dj.type, undefined, null, di);
                    return
                }
                if (cN) {
                    di = au(di);
                    if (bm(di)) {
                        cj(di)
                    }
                }
            }

            function cv() {
                return G.all && !G.addEventListener
            }

            function cV(di) {
                var dk = di.which;
                var dj = (typeof di.button);
                if (!dk && dj !== "undefined") {
                    if (cv()) {
                        if (di.button & 1) {
                            dk = 1
                        } else {
                            if (di.button & 2) {
                                dk = 3
                            } else {
                                if (di.button & 4) {
                                    dk = 2
                                }
                            }
                        }
                    } else {
                        if (di.button === 0 || di.button === "0") {
                            dk = 1
                        } else {
                            if (di.button & 1) {
                                dk = 2
                            } else {
                                if (di.button & 2) {
                                    dk = 3
                                }
                            }
                        }
                    }
                }
                return dk
            }

            function bU(di) {
                switch (cV(di)) {
                    case 1:
                        return "left";
                    case 2:
                        return "middle";
                    case 3:
                        return "right"
                }
            }

            function a2(di) {
                return di.target || di.srcElement
            }

            function aC(di) {
                return function(dl) {
                    dl = dl || S.event;
                    var dk = bU(dl);
                    var dm = a2(dl);
                    if (dl.type === "click") {
                        var dj = false;
                        if (di && dk === "middle") {
                            dj = true
                        }
                        if (dm && !dj) {
                            cG(dm)
                        }
                    } else {
                        if (dl.type === "mousedown") {
                            if (dk === "middle" && dm) {
                                aS = dk;
                                bC = dm
                            } else {
                                aS = bC = null
                            }
                        } else {
                            if (dl.type === "mouseup") {
                                if (dk === aS && dm === bC) {
                                    cG(dm)
                                }
                                aS = bC = null
                            } else {
                                if (dl.type === "contextmenu") {
                                    cG(dm)
                                }
                            }
                        }
                    }
                }
            }

            function aq(dk, dj) {
                var di = typeof dj;
                if (di === "undefined") {
                    dj = true
                }
                an(dk, "click", aC(dj), false);
                if (dj) {
                    an(dk, "mouseup", aC(dj), false);
                    an(dk, "mousedown", aC(dj), false);
                    an(dk, "contextmenu", aC(dj), false)
                }
            }

            function bF(dk, dm) {
                ap = true;
                var dl, dj = a1(bB, "ignore"),
                    dn = G.links,
                    di = null,
                    dp = null;
                if (dn) {
                    for (dl = 0; dl < dn.length; dl++) {
                        di = dn[dl];
                        if (!dj.test(di.className)) {
                            dp = typeof di.matomoTrackers;
                            if ("undefined" === dp) {
                                di.matomoTrackers = []
                            }
                            if (-1 === M(di.matomoTrackers, dm)) {
                                di.matomoTrackers.push(dm);
                                aq(di, dk)
                            }
                        }
                    }
                }
            }

            function aT(dj, dm, dn) {
                if (cf) {
                    return true
                }
                cf = true;
                var dp = false;
                var dl, dk;

                function di() {
                    dp = true
                }
                m(function() {
                    function dq(ds) {
                        setTimeout(function() {
                            if (!cf) {
                                return
                            }
                            dp = false;
                            dn.trackVisibleContentImpressions();
                            dq(ds)
                        }, ds)
                    }

                    function dr(ds) {
                        setTimeout(function() {
                            if (!cf) {
                                return
                            }
                            if (dp) {
                                dp = false;
                                dn.trackVisibleContentImpressions()
                            }
                            dr(ds)
                        }, ds)
                    }
                    if (dj) {
                        dl = ["scroll", "resize"];
                        for (dk = 0; dk < dl.length; dk++) {
                            if (G.addEventListener) {
                                G.addEventListener(dl[dk], di, false)
                            } else {
                                S.attachEvent("on" + dl[dk], di)
                            }
                        }
                        dr(100)
                    }
                    if (dm && dm > 0) {
                        dm = parseInt(dm, 10);
                        dq(dm)
                    }
                })
            }
            var bE = {
                enabled: true,
                requests: [],
                timeout: null,
                interval: 2500,
                sendRequests: function() {
                    var di = this.requests;
                    this.requests = [];
                    if (di.length === 1) {
                        bH(di[0], bL)
                    } else {
                        de(di, bL)
                    }
                },
                canQueue: function() {
                    return !l && this.enabled
                },
                pushMultiple: function(dj) {
                    if (!this.canQueue()) {
                        de(dj, bL);
                        return
                    }
                    var di;
                    for (di = 0; di < dj.length; di++) {
                        this.push(dj[di])
                    }
                },
                push: function(di) {
                    if (!di) {
                        return
                    }
                    if (!this.canQueue()) {
                        bH(di, bL);
                        return
                    }
                    bE.requests.push(di);
                    if (this.timeout) {
                        clearTimeout(this.timeout);
                        this.timeout = null
                    }
                    this.timeout = setTimeout(function() {
                        bE.timeout = null;
                        bE.sendRequests()
                    }, bE.interval);
                    var dj = "RequestQueue" + ax;
                    if (!Object.prototype.hasOwnProperty.call(b, dj)) {
                        b[dj] = {
                            unload: function() {
                                if (bE.timeout) {
                                    clearTimeout(bE.timeout)
                                }
                                bE.sendRequests()
                            }
                        }
                    }
                }
            };
            bj();
            aN();
            this.hasConsent = function() {
                return bD
            };
            this.getVisitorId = function() {
                return aZ().uuid
            };
            this.getVisitorInfo = function() {
                return cO()
            };
            this.getAttributionInfo = function() {
                return bN()
            };
            this.getAttributionCampaignName = function() {
                return bN()[0]
            };
            this.getAttributionCampaignKeyword = function() {
                return bN()[1]
            };
            this.getAttributionReferrerTimestamp = function() {
                return bN()[2]
            };
            this.getAttributionReferrerUrl = function() {
                return bN()[3]
            };
            this.setTrackerUrl = function(di) {
                aE = di
            };
            this.getTrackerUrl = function() {
                return aE
            };
            this.getMatomoUrl = function() {
                return W(this.getTrackerUrl(), bJ)
            };
            this.getPiwikUrl = function() {
                return this.getMatomoUrl()
            };
            this.addTracker = function(dk, dj) {
                if (!J(dk) || null === dk) {
                    dk = this.getTrackerUrl()
                }
                var di = new P(dk, dj);
                I.push(di);
                t.trigger("TrackerAdded", [this]);
                return di
            };
            this.getSiteId = function() {
                return b7
            };
            this.setSiteId = function(di) {
                b4(di)
            };
            this.resetUserId = function() {
                bA = ""
            };
            this.setUserId = function(di) {
                if (Y(di)) {
                    bA = di
                }
            };
            this.setVisitorId = function(dj) {
                var di = /[0-9A-Fa-f]{16}/g;
                if (w(dj) && di.test(dj)) {
                    bP = dj
                } else {
                    ak("Invalid visitorId set" + dj)
                }
            };
            this.getUserId = function() {
                return bA
            };
            this.setCustomData = function(di, dj) {
                if (V(di)) {
                    ao = di
                } else {
                    if (!ao) {
                        ao = {}
                    }
                    ao[di] = dj
                }
            };
            this.getCustomData = function() {
                return ao
            };
            this.setCustomRequestProcessing = function(di) {
                cc = di
            };
            this.appendToTrackingUrl = function(di) {
                cZ = di
            };
            this.getRequest = function(di) {
                return cr(di)
            };
            this.addPlugin = function(di, dj) {
                b[di] = dj
            };
            this.setCustomDimension = function(di, dj) {
                di = parseInt(di, 10);
                if (di > 0) {
                    if (!J(dj)) {
                        dj = ""
                    }
                    if (!w(dj)) {
                        dj = String(dj)
                    }
                    bo[di] = dj
                }
            };
            this.getCustomDimension = function(di) {
                di = parseInt(di, 10);
                if (di > 0 && Object.prototype.hasOwnProperty.call(bo, di)) {
                    return bo[di]
                }
            };
            this.deleteCustomDimension = function(di) {
                di = parseInt(di, 10);
                if (di > 0) {
                    delete bo[di]
                }
            };
            this.setCustomVariable = function(dj, di, dm, dk) {
                var dl;
                if (!J(dk)) {
                    dk = "visit"
                }
                if (!J(di)) {
                    return
                }
                if (!J(dm)) {
                    dm = ""
                }
                if (dj > 0) {
                    di = !w(di) ? String(di) : di;
                    dm = !w(dm) ? String(dm) : dm;
                    dl = [di.slice(0, bv), dm.slice(0, bv)];
                    if (dk === "visit" || dk === 2) {
                        cF();
                        aR[dj] = dl
                    } else {
                        if (dk === "page" || dk === 3) {
                            bX[dj] = dl
                        } else {
                            if (dk === "event") {
                                cm[dj] = dl
                            }
                        }
                    }
                }
            };
            this.getCustomVariable = function(dj, dk) {
                var di;
                if (!J(dk)) {
                    dk = "visit"
                }
                if (dk === "page" || dk === 3) {
                    di = bX[dj]
                } else {
                    if (dk === "event") {
                        di = cm[dj]
                    } else {
                        if (dk === "visit" || dk === 2) {
                            cF();
                            di = aR[dj]
                        }
                    }
                }
                if (!J(di) || (di && di[0] === "")) {
                    return false
                }
                return di
            };
            this.deleteCustomVariable = function(di, dj) {
                if (this.getCustomVariable(di, dj)) {
                    this.setCustomVariable(di, "", "", dj)
                }
            };
            this.deleteCustomVariables = function(di) {
                if (di === "page" || di === 3) {
                    bX = {}
                } else {
                    if (di === "event") {
                        cm = {}
                    } else {
                        if (di === "visit" || di === 2) {
                            aR = {}
                        }
                    }
                }
            };
            this.storeCustomVariablesInCookie = function() {
                bR = true
            };
            this.setLinkTrackingTimer = function(di) {
                bL = di
            };
            this.getLinkTrackingTimer = function() {
                return bL
            };
            this.setDownloadExtensions = function(di) {
                if (w(di)) {
                    di = di.split("|")
                }
                c6 = di
            };
            this.addDownloadExtensions = function(dj) {
                var di;
                if (w(dj)) {
                    dj = dj.split("|")
                }
                for (di = 0; di < dj.length; di++) {
                    c6.push(dj[di])
                }
            };
            this.removeDownloadExtensions = function(dk) {
                var dj, di = [];
                if (w(dk)) {
                    dk = dk.split("|")
                }
                for (dj = 0; dj < c6.length; dj++) {
                    if (M(dk, c6[dj]) === -1) {
                        di.push(c6[dj])
                    }
                }
                c6 = di
            };
            this.setDomains = function(di) {
                ay = w(di) ? [di] : di;
                var dm = false,
                    dk = 0,
                    dj;
                for (dk; dk < ay.length; dk++) {
                    dj = String(ay[dk]);
                    if (cH(cU, L(dj))) {
                        dm = true;
                        break
                    }
                    var dl = cl(dj);
                    if (dl && dl !== "/" && dl !== "/*") {
                        dm = true;
                        break
                    }
                }
                if (!dm) {
                    ay.push(cU)
                }
            };
            this.enableCrossDomainLinking = function() {
                cN = true
            };
            this.disableCrossDomainLinking = function() {
                cN = false
            };
            this.isCrossDomainLinkingEnabled = function() {
                return cN
            };
            this.setCrossDomainLinkingTimeout = function(di) {
                a0 = di
            };
            this.getCrossDomainLinkingUrlParameter = function() {
                return s(av) + "=" + s(bt())
            };
            this.setIgnoreClasses = function(di) {
                bB = w(di) ? [di] : di
            };
            this.setRequestMethod = function(di) {
                if (di) {
                    c9 = String(di).toUpperCase()
                } else {
                    c9 = ci
                }
                if (c9 === "GET") {
                    this.disableAlwaysUseSendBeacon()
                }
            };
            this.setRequestContentType = function(di) {
                cw = di || aI
            };
            this.setGenerationTimeMs = function(di) {
                ak("setGenerationTimeMs is no longer supported since Matomo 4. The call will be ignored. There is currently no replacement yet.")
            };
            this.setReferrerUrl = function(di) {
                bp = di
            };
            this.setCustomUrl = function(di) {
                a5 = bW(bO, di)
            };
            this.getCurrentUrl = function() {
                return a5 || bO
            };
            this.setDocumentTitle = function(di) {
                bk = di
            };
            this.setAPIUrl = function(di) {
                bJ = di
            };
            this.setDownloadClasses = function(di) {
                bM = w(di) ? [di] : di
            };
            this.setLinkClasses = function(di) {
                a9 = w(di) ? [di] : di
            };
            this.setCampaignNameKey = function(di) {
                cp = w(di) ? [di] : di
            };
            this.setCampaignKeywordKey = function(di) {
                bI = w(di) ? [di] : di
            };
            this.discardHashTag = function(di) {
                bQ = di
            };
            this.setCookieNamePrefix = function(di) {
                bl = di;
                if (aR) {
                    aR = bY()
                }
            };
            this.setCookieDomain = function(di) {
                var dj = L(di);
                if (by(dj)) {
                    cX = dj;
                    bj()
                }
            };
            this.getCookieDomain = function() {
                return cX
            };
            this.hasCookies = function() {
                return "1" === b6()
            };
            this.setSessionCookie = function(dk, dj, di) {
                if (!dk) {
                    throw new Error("Missing cookie name")
                }
                if (!J(di)) {
                    di = cn
                }
                bw.push(dk);
                dd(aU(dk), dj, di, br, cX, bT, aJ)
            };
            this.getCookie = function(dj) {
                var di = aD(aU(dj));
                if (di === 0) {
                    return null
                }
                return di
            };
            this.setCookiePath = function(di) {
                br = di;
                bj()
            };
            this.getCookiePath = function(di) {
                return br
            };
            this.setVisitorCookieTimeout = function(di) {
                cK = di * 1000
            };
            this.setSessionCookieTimeout = function(di) {
                cn = di * 1000
            };
            this.getSessionCookieTimeout = function() {
                return cn
            };
            this.setReferralCookieTimeout = function(di) {
                c5 = di * 1000
            };
            this.setConversionAttributionFirstReferrer = function(di) {
                bx = di
            };
            this.setSecureCookie = function(di) {
                if (di && location.protocol !== "https:") {
                    ak("Error in setSecureCookie: You cannot use `Secure` on http.");
                    return
                }
                bT = di
            };
            this.setCookieSameSite = function(di) {
                di = String(di);
                di = di.charAt(0).toUpperCase() + di.toLowerCase().slice(1);
                if (di !== "None" && di !== "Lax" && di !== "Strict") {
                    ak("Ignored value for sameSite. Please use either Lax, None, or Strict.");
                    return
                }
                if (di === "None") {
                    if (location.protocol === "https:") {
                        this.setSecureCookie(true)
                    } else {
                        ak("sameSite=None cannot be used on http, reverted to sameSite=Lax.");
                        di = "Lax"
                    }
                }
                aJ = di
            };
            this.disableCookies = function() {
                bn = true;
                if (b7) {
                    aF()
                }
            };
            this.areCookiesEnabled = function() {
                return !bn
            };
            this.setCookieConsentGiven = function() {
                if (bn && !cQ) {
                    bn = false;
                    if (b7 && aw) {
                        aN();
                        var di = cr("ping=1", null, "ping");
                        bH(di, bL)
                    }
                }
            };
            this.requireCookieConsent = function() {
                if (this.getRememberedCookieConsent()) {
                    return false
                }
                this.disableCookies();
                return true
            };
            this.getRememberedCookieConsent = function() {
                return aD(cD)
            };
            this.forgetCookieConsentGiven = function() {
                bZ(cD, br, cX);
                this.disableCookies()
            };
            this.rememberCookieConsentGiven = function(dj) {
                if (dj) {
                    dj = dj * 60 * 60 * 1000
                } else {
                    dj = 30 * 365 * 24 * 60 * 60 * 1000
                }
                this.setCookieConsentGiven();
                var di = new Date().getTime();
                dd(cD, di, dj, br, cX, bT, aJ)
            };
            this.deleteCookies = function() {
                aF()
            };
            this.setDoNotTrack = function(dj) {
                var di = g.doNotTrack || g.msDoNotTrack;
                cQ = dj && (di === "yes" || di === "1");
                if (cQ) {
                    this.disableCookies()
                }
            };
            this.alwaysUseSendBeacon = function() {
                cW = true
            };
            this.disableAlwaysUseSendBeacon = function() {
                cW = false
            };
            this.addListener = function(dj, di) {
                aq(dj, di)
            };
            this.enableLinkTracking = function(dj) {
                c8 = true;
                var di = this;
                ch(function() {
                    p(function() {
                        bF(dj, di)
                    });
                    m(function() {
                        bF(dj, di)
                    })
                })
            };
            this.enableJSErrorTracking = function() {
                if (cS) {
                    return
                }
                cS = true;
                var di = S.onerror;
                S.onerror = function(dn, dl, dk, dm, dj) {
                    ch(function() {
                        var dp = "JavaScript Errors";
                        var dq = dl + ":" + dk;
                        if (dm) {
                            dq += ":" + dm
                        }
                        at(dp, dq, dn)
                    });
                    if (di) {
                        return di(dn, dl, dk, dm, dj)
                    }
                    return false
                }
            };
            this.disablePerformanceTracking = function() {
                a3 = false
            };
            this.enableHeartBeatTimer = function(di) {
                di = Math.max(di || 15, 5);
                a6 = di * 1000;
                if (cY !== null) {
                    df()
                }
            };
            this.disableHeartBeatTimer = function() {
                if (a6 || aO) {
                    if (S.removeEventListener) {
                        S.removeEventListener("focus", bb);
                        S.removeEventListener("blur", az)
                    } else {
                        if (S.detachEvent) {
                            S.detachEvent("onfocus", bb);
                            S.detachEvent("onblur", az)
                        }
                    }
                }
                a6 = null;
                aO = false
            };
            this.killFrame = function() {
                if (S.location !== S.top.location) {
                    S.top.location = S.location
                }
            };
            this.redirectFile = function(di) {
                if (S.location.protocol === "file:") {
                    S.location = di
                }
            };
            this.setCountPreRendered = function(di) {
                bf = di
            };
            this.trackGoal = function(di, dl, dk, dj) {
                ch(function() {
                    cT(di, dl, dk, dj)
                })
            };
            this.trackLink = function(dj, di, dl, dk) {
                ch(function() {
                    c1(dj, di, dl, dk)
                })
            };
            this.getNumTrackedPageViews = function() {
                return cq
            };
            this.trackPageView = function(di, dk, dj) {
                cb = [];
                cL = [];
                if (N(b7)) {
                    ch(function() {
                        Z(aE, bJ, b7)
                    })
                } else {
                    ch(function() {
                        cq++;
                        b1(di, dk, dj)
                    })
                }
            };
            this.trackAllContentImpressions = function() {
                if (N(b7)) {
                    return
                }
                ch(function() {
                    p(function() {
                        var di = v.findContentNodes();
                        var dj = cz(di);
                        bE.pushMultiple(dj)
                    })
                })
            };
            this.trackVisibleContentImpressions = function(di, dj) {
                if (N(b7)) {
                    return
                }
                if (!J(di)) {
                    di = true
                }
                if (!J(dj)) {
                    dj = 750
                }
                aT(di, dj, this);
                ch(function() {
                    m(function() {
                        var dk = v.findContentNodes();
                        var dl = ba(dk);
                        bE.pushMultiple(dl)
                    })
                })
            };
            this.trackContentImpression = function(dk, di, dj) {
                if (N(b7)) {
                    return
                }
                dk = a(dk);
                di = a(di);
                dj = a(dj);
                if (!dk) {
                    return
                }
                di = di || "Unknown";
                ch(function() {
                    var dl = aG(dk, di, dj);
                    bE.push(dl)
                })
            };
            this.trackContentImpressionsWithinNode = function(di) {
                if (N(b7) || !di) {
                    return
                }
                ch(function() {
                    if (cf) {
                        m(function() {
                            var dj = v.findContentNodesWithinNode(di);
                            var dk = ba(dj);
                            bE.pushMultiple(dk)
                        })
                    } else {
                        p(function() {
                            var dj = v.findContentNodesWithinNode(di);
                            var dk = cz(dj);
                            bE.pushMultiple(dk)
                        })
                    }
                })
            };
            this.trackContentInteraction = function(dk, dl, di, dj) {
                if (N(b7)) {
                    return
                }
                dk = a(dk);
                dl = a(dl);
                di = a(di);
                dj = a(dj);
                if (!dk || !dl) {
                    return
                }
                di = di || "Unknown";
                ch(function() {
                    var dm = aQ(dk, dl, di, dj);
                    if (dm) {
                        bE.push(dm)
                    }
                })
            };
            this.trackContentInteractionNode = function(dk, dj) {
                if (N(b7) || !dk) {
                    return
                }
                var di = null;
                ch(function() {
                    di = da(dk, dj);
                    if (di) {
                        bE.push(di)
                    }
                });
                return di
            };
            this.logAllContentBlocksOnPage = function() {
                var dk = v.findContentNodes();
                var di = v.collectContent(dk);
                var dj = typeof console;
                if (dj !== "undefined" && console && console.log) {
                    console.log(di)
                }
            };
            this.trackEvent = function(dj, dl, di, dk, dn, dm) {
                ch(function() {
                    at(dj, dl, di, dk, dn, dm)
                })
            };
            this.trackSiteSearch = function(di, dk, dj, dl) {
                cb = [];
                ch(function() {
                    b9(di, dk, dj, dl)
                })
            };
            this.setEcommerceView = function(dm, di, dk, dj) {
                cs = {};
                if (Y(dk)) {
                    dk = String(dk)
                }
                if (!J(dk) || dk === null || dk === false || !dk.length) {
                    dk = ""
                } else {
                    if (dk instanceof Array) {
                        dk = S.JSON.stringify(dk)
                    }
                }
                var dl = "_pkc";
                cs[dl] = dk;
                if (J(dj) && dj !== null && dj !== false && String(dj).length) {
                    dl = "_pkp";
                    cs[dl] = dj
                }
                if (!Y(dm) && !Y(di)) {
                    return
                }
                if (Y(dm)) {
                    dl = "_pks";
                    cs[dl] = dm
                }
                if (!Y(di)) {
                    di = ""
                }
                dl = "_pkn";
                cs[dl] = di
            };
            this.getEcommerceItems = function() {
                return JSON.parse(JSON.stringify(c0))
            };
            this.addEcommerceItem = function(dm, di, dk, dj, dl) {
                if (Y(dm)) {
                    c0[dm] = [String(dm), di, dk, dj, dl]
                }
            };
            this.removeEcommerceItem = function(di) {
                if (Y(di)) {
                    di = String(di);
                    delete c0[di]
                }
            };
            this.clearEcommerceCart = function() {
                c0 = {}
            };
            this.trackEcommerceOrder = function(di, dm, dl, dk, dj, dn) {
                b0(di, dm, dl, dk, dj, dn)
            };
            this.trackEcommerceCartUpdate = function(di) {
                bu(di)
            };
            this.trackRequest = function(dj, dl, dk, di) {
                ch(function() {
                    var dm = cr(dj, dl, di);
                    bH(dm, bL, dk)
                })
            };
            this.ping = function() {
                this.trackRequest("ping=1", null, null, "ping")
            };
            this.disableQueueRequest = function() {
                bE.enabled = false
            };
            this.setRequestQueueInterval = function(di) {
                if (di < 1000) {
                    throw new Error("Request queue interval needs to be at least 1000ms")
                }
                bE.interval = di
            };
            this.queueRequest = function(di) {
                ch(function() {
                    var dj = cr(di);
                    bE.push(dj)
                })
            };
            this.isConsentRequired = function() {
                return cA
            };
            this.getRememberedConsent = function() {
                var di = aD(be);
                if (aD(cM)) {
                    if (di) {
                        bZ(be, br, cX)
                    }
                    return null
                }
                if (!di || di === 0) {
                    return null
                }
                return di
            };
            this.hasRememberedConsent = function() {
                return !!this.getRememberedConsent()
            };
            this.requireConsent = function() {
                cA = true;
                bD = this.hasRememberedConsent();
                if (!bD) {
                    bn = true
                }
                x++;
                b["CoreConsent" + x] = {
                    unload: function() {
                        if (!bD) {
                            aF()
                        }
                    }
                }
            };
            this.setConsentGiven = function(dj) {
                bD = true;
                bZ(cM, br, cX);
                var dk, di;
                for (dk = 0; dk < cL.length; dk++) {
                    di = typeof cL[dk];
                    if (di === "string") {
                        bH(cL[dk], bL)
                    } else {
                        if (di === "object") {
                            de(cL[dk], bL)
                        }
                    }
                }
                cL = [];
                if (!J(dj) || dj) {
                    this.setCookieConsentGiven()
                }
            };
            this.rememberConsentGiven = function(dk) {
                if (dk) {
                    dk = dk * 60 * 60 * 1000
                } else {
                    dk = 30 * 365 * 24 * 60 * 60 * 1000
                }
                var di = true;
                this.setConsentGiven(di);
                var dj = new Date().getTime();
                dd(be, dj, dk, br, cX, bT, aJ)
            };
            this.forgetConsentGiven = function() {
                var di = 30 * 365 * 24 * 60 * 60 * 1000;
                bZ(be, br, cX);
                dd(cM, new Date().getTime(), di, br, cX, bT, aJ);
                this.forgetCookieConsentGiven();
                this.requireConsent()
            };
            this.isUserOptedOut = function() {
                return !bD
            };
            this.optUserOut = this.forgetConsentGiven;
            this.forgetUserOptOut = function() {
                this.setConsentGiven(false)
            };
            m(function() {
                setTimeout(function() {
                    bG = true
                }, 0)
            });
            t.trigger("TrackerSetup", [this])
        }

        function H() {
            return {
                push: af
            }
        }

        function c(au, at) {
            var av = {};
            var aq, ar;
            for (aq = 0; aq < at.length; aq++) {
                var ao = at[aq];
                av[ao] = 1;
                for (ar = 0; ar < au.length; ar++) {
                    if (au[ar] && au[ar][0]) {
                        var ap = au[ar][0];
                        if (ao === ap) {
                            af(au[ar]);
                            delete au[ar];
                            if (av[ap] > 1 && ap !== "addTracker" && ap !== "enableLinkTracking") {
                                ak("The method " + ap + ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Matomo trackers documentation: https://developer.matomo.org/guides/tracking-javascript-guide#multiple-piwik-trackers')
                            }
                            av[ap]++
                        }
                    }
                }
            }
            return au
        }
        var C = ["addTracker", "forgetCookieConsentGiven", "requireCookieConsent", "disableCookies", "setTrackerUrl", "setAPIUrl", "enableCrossDomainLinking", "setCrossDomainLinkingTimeout", "setSessionCookieTimeout", "setVisitorCookieTimeout", "setCookieNamePrefix", "setCookieSameSite", "setSecureCookie", "setCookiePath", "setCookieDomain", "setDomains", "setUserId", "setVisitorId", "setSiteId", "alwaysUseSendBeacon", "enableLinkTracking", "setCookieConsentGiven", "requireConsent", "setConsentGiven", "disablePerformanceTracking"];

        function ad(aq, ap) {
            var ao = new P(aq, ap);
            I.push(ao);
            _paq = c(_paq, C);
            for (E = 0; E < _paq.length; E++) {
                if (_paq[E]) {
                    af(_paq[E])
                }
            }
            _paq = new H();
            t.trigger("TrackerAdded", [ao]);
            return ao
        }
        an(S, "beforeunload", ai, false);
        an(S, "online", function() {
            if (J(g.serviceWorker) && J(g.serviceWorker.ready)) {
                g.serviceWorker.ready.then(function(ao) {
                    if (ao && ao.sync) {
                        return ao.sync.register("matomoSync")
                    }
                })
            }
        }, false);
        an(S, "message", function(au) {
            if (!au || !au.origin) {
                return
            }
            var aw, ar, ap;
            var ax = d(au.origin);
            var at = t.getAsyncTrackers();
            for (ar = 0; ar < at.length; ar++) {
                ap = d(at[ar].getMatomoUrl());
                if (ap === ax) {
                    aw = at[ar];
                    break
                }
            }
            if (!aw) {
                return
            }
            var aq = null;
            try {
                aq = JSON.parse(au.data)
            } catch (av) {
                return
            }
            if (!aq) {
                return
            }

            function ao(aA) {
                var aC = G.getElementsByTagName("iframe");
                for (ar = 0; ar < aC.length; ar++) {
                    var aB = aC[ar];
                    var ay = d(aB.src);
                    if (aB.contentWindow && J(aB.contentWindow.postMessage) && ay === ax) {
                        var az = JSON.stringify(aA);
                        aB.contentWindow.postMessage(az, "*")
                    }
                }
            }
            if (J(aq.maq_initial_value)) {
                ao({
                    maq_opted_in: aq.maq_initial_value && aw.hasConsent(),
                    maq_url: aw.getMatomoUrl(),
                    maq_optout_by_default: aw.isConsentRequired()
                })
            } else {
                if (J(aq.maq_opted_in)) {
                    at = t.getAsyncTrackers();
                    for (ar = 0; ar < at.length; ar++) {
                        aw = at[ar];
                        if (aq.maq_opted_in) {
                            aw.rememberConsentGiven()
                        } else {
                            aw.forgetConsentGiven()
                        }
                    }
                    ao({
                        maq_confirm_opted_in: aw.hasConsent(),
                        maq_url: aw.getMatomoUrl(),
                        maq_optout_by_default: aw.isConsentRequired()
                    })
                }
            }
        }, false);
        Date.prototype.getTimeAlias = Date.prototype.getTime;
        t = {
            initialized: false,
            JSON: S.JSON,
            DOM: {
                addEventListener: function(ar, aq, ap, ao) {
                    var at = typeof ao;
                    if (at === "undefined") {
                        ao = false
                    }
                    an(ar, aq, ap, ao)
                },
                onLoad: m,
                onReady: p,
                isNodeVisible: i,
                isOrWasNodeVisible: v.isNodeVisible
            },
            on: function(ap, ao) {
                if (!y[ap]) {
                    y[ap] = []
                }
                y[ap].push(ao)
            },
            off: function(aq, ap) {
                if (!y[aq]) {
                    return
                }
                var ao = 0;
                for (ao; ao < y[aq].length; ao++) {
                    if (y[aq][ao] === ap) {
                        y[aq].splice(ao, 1)
                    }
                }
            },
            trigger: function(aq, ar, ap) {
                if (!y[aq]) {
                    return
                }
                var ao = 0;
                for (ao; ao < y[aq].length; ao++) {
                    y[aq][ao].apply(ap || S, ar)
                }
            },
            addPlugin: function(ao, ap) {
                b[ao] = ap
            },
            getTracker: function(ap, ao) {
                if (!J(ao)) {
                    ao = this.getAsyncTracker().getSiteId()
                }
                if (!J(ap)) {
                    ap = this.getAsyncTracker().getTrackerUrl()
                }
                return new P(ap, ao)
            },
            getAsyncTrackers: function() {
                return I
            },
            addTracker: function(aq, ap) {
                var ao;
                if (!I.length) {
                    ao = ad(aq, ap)
                } else {
                    ao = I[0].addTracker(aq, ap)
                }
                return ao
            },
            getAsyncTracker: function(at, ar) {
                var aq;
                if (I && I.length && I[0]) {
                    aq = I[0]
                } else {
                    return ad(at, ar)
                }
                if (!ar && !at) {
                    return aq
                }
                if ((!J(ar) || null === ar) && aq) {
                    ar = aq.getSiteId()
                }
                if ((!J(at) || null === at) && aq) {
                    at = aq.getTrackerUrl()
                }
                var ap, ao = 0;
                for (ao; ao < I.length; ao++) {
                    ap = I[ao];
                    if (ap && String(ap.getSiteId()) === String(ar) && ap.getTrackerUrl() === at) {
                        return ap
                    }
                }
            },
            retryMissedPluginCalls: function() {
                var ap = ah;
                ah = [];
                var ao = 0;
                for (ao; ao < ap.length; ao++) {
                    af(ap[ao])
                }
            }
        };
        if (typeof define === "function" && define.amd) {
            define("piwik", [], function() {
                return t
            });
            define("matomo", [], function() {
                return t
            })
        }
        return t
    }())
}
/*!!! pluginTrackerHook */

/* GENERATED: tracker.min.js */
/*!!
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * All information contained herein is, and remains the property of InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */
(function() {
    var u = new Date().getTime();
    var z = null;
    var O = false;
    var B = 10;
    var I = false;
    var a = true;
    var w = null;
    var E = 1000 * 60 * 60 * 3;
    var q = document;
    var C = window;
    var h = 0;
    var l = 0;
    var A = false;
    var r = function() {
        return ""
    };
    var G = [];

    function n() {
        if (typeof Piwik === "object" && typeof Piwik.JSON === "object") {
            return Piwik.JSON
        } else {
            if (C.JSON && C.JSON.parse && C.JSON.stringify) {
                return C.JSON
            } else {
                if (typeof C.JSON2 === "object" && C.JSON2.parse && C.JSON2.stringify) {
                    return C.JSON2
                } else {
                    return {
                        parse: function() {
                            return {}
                        },
                        stringify: function() {
                            return ""
                        }
                    }
                }
            }
        }
    }
    var d = true;

    function e() {
        if (O && "undefined" !== typeof console && console && console.debug) {
            console.debug.apply(console, arguments)
        }
    }

    function s(Q) {
        return typeof Q === "object" && typeof Q.length === "number"
    }

    function H() {
        return q.getElementById("engage_video") && q.getElementById("videoDisplay1_wrapper")
    }

    function b() {
        return "function" === typeof jwplayer
    }

    function k() {
        return "function" === typeof flowplayer
    }

    function o(S, R) {
        if (!R.getMediaTitle() && "function" === typeof r) {
            var Q = r(S);
            if (Q) {
                R.setMediaTitle(Q)
            }
        }
    }
    var f = {
        AUDIO: "Audio",
        VIDEO: "Video"
    };
    var F = {
        getLocation: function() {
            var Q = this.location || C.location;
            if (!Q.origin) {
                Q.origin = Q.protocol + "//" + Q.hostname + (Q.port ? ":" + Q.port : "")
            }
            return Q
        },
        setLocation: function(Q) {
            this.location = Q
        },
        makeUrlAbsolute: function(R) {
            if ((!R || String(R) !== R) && R !== "") {
                return R
            }
            if (R.indexOf("//") === 0) {
                return this.getLocation().protocol + R
            }
            if (R.indexOf("://") !== -1) {
                return R
            }
            if (R.indexOf("/") === 0) {
                return this.getLocation().origin + R
            }
            if (R.indexOf("#") === 0 || R.indexOf("?") === 0) {
                return this.getLocation().origin + this.getLocation().pathname + R
            }
            if ("" === R) {
                return this.getLocation().href
            }
            var Q = "(.*/)";
            var S = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(Q))[0];
            return S + R
        }
    };
    var N = {
        getCurrentTime: function() {
            return new Date().getTime()
        },
        roundTimeToSeconds: function(Q) {
            return Math.round(Q / 1000)
        },
        isNumber: function(Q) {
            return !isNaN(Q)
        },
        isArray: function(Q) {
            return typeof Q === "object" && Q !== null && typeof Q.length === "number"
        },
        indexOfArray: function(S, R) {
            if (!S) {
                return -1
            }
            if (S.indexOf) {
                return S.indexOf(R)
            }
            if (!this.isArray(S)) {
                return -1
            }
            for (var Q = 0; Q < S.length; Q++) {
                if (S[Q] === R) {
                    return Q
                }
            }
            return -1
        },
        getTimeScriptLoaded: function(Q) {
            return u
        },
        generateUniqueId: function() {
            var T = "";
            var R = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var S = R.length;
            for (var Q = 0; Q < 6; Q++) {
                T += R.charAt(Math.floor(Math.random() * S))
            }
            return T
        },
        trim: function(Q) {
            if (Q && String(Q) === Q) {
                return Q.replace(/^\s+|\s+$/g, "")
            }
            return Q
        },
        getQueryParameter: function(Q, U) {
            var T = new RegExp("[?&]" + U + "(=([^&#]*)|&|#|$)");
            var S = T.exec(Q);
            if (!S) {
                return null
            }
            if (!S[2]) {
                return ""
            }
            var R = S[2].replace(/\+/g, " ");
            return decodeURIComponent(R)
        },
        isDocumentOffScreen: function() {
            return q && "undefined" !== q.hidden && q.hidden
        },
        roundUp: function(R, Q) {
            if (R !== null && R !== false && this.isNumber(R)) {
                return Math.ceil(R / Q) * Q
            }
        }
    };
    var m = {
        getAttribute: function(R, Q) {
            if (R && R.getAttribute && Q) {
                return R.getAttribute(Q)
            }
            return null
        },
        setAttribute: function(S, Q, R) {
            if (S && S.setAttribute) {
                S.setAttribute(Q, R)
            }
        },
        isMediaIgnored: function(Q) {
            var R = m.getAttribute(Q, "data-piwik-ignore");
            if (!!R || R === "") {
                return true
            }
            R = m.getAttribute(Q, "data-matomo-ignore");
            if (!!R || R === "") {
                return true
            }
            return false
        },
        getMediaResource: function(Q, R) {
            var S = m.getAttribute(Q, "data-matomo-resource");
            if (S) {
                return S
            }
            S = m.getAttribute(Q, "data-piwik-resource");
            if (S) {
                return S
            }
            S = m.getAttribute(Q, "src");
            if (S) {
                return S
            }
            return R
        },
        getMediaTitle: function(Q) {
            var R = m.getAttribute(Q, "data-matomo-title");
            if (!R) {
                R = m.getAttribute(Q, "data-piwik-title")
            }
            if (!R) {
                R = m.getAttribute(Q, "title")
            }
            if (!R) {
                R = m.getAttribute(Q, "alt")
            }
            return R
        },
        hasCssClass: function(S, T) {
            if (S && S.className) {
                var R = ("" + S.className).split(" ");
                for (var Q = 0; Q < R.length; Q++) {
                    if (R[Q] === T) {
                        return true
                    }
                }
            }
            return false
        },
        getFirstParentWithClass: function(S, T, Q) {
            if (Q <= 0 || !S || !S.parentNode) {
                return null
            }
            var R = S.parentNode;
            if (this.hasCssClass(R, T)) {
                return R
            } else {
                return this.getFirstParentWithClass(R, T, --Q)
            }
        },
        isFullscreen: function(Q) {
            if (Q && q.fullScreenElement === Q || q.mozFullScreenElement === Q || q.webkitFullscreenElement === Q || q.msFullscreenElement === Q) {
                return true
            }
            return false
        }
    };

    function P() {
        if (null === w) {
            if ("object" === typeof Piwik && Piwik.getAsyncTrackers) {
                return Piwik.getAsyncTrackers()
            }
        }
        if (s(w)) {
            return w
        }
        return []
    }

    function j(R, Q, S) {
        this.playerName = R;
        this.type = Q;
        this.resource = S;
        this.disabled = false;
        this.reset()
    }
    j.piwikTrackers = [];
    j.prototype.disable = function() {
        this.disabled = true
    };
    j.prototype.reset = function() {
        this.id = N.generateUniqueId();
        this.mediaTitle = null;
        this.timeToInitialPlay = null;
        this.width = null;
        this.height = null;
        this.fullscreen = false;
        this.timeout = null;
        this.watchedTime = 0;
        this.lastTimeCheck = null;
        this.isPlaying = false;
        this.isPaused = false;
        this.mediaProgressInSeconds = 0;
        this.mediaLengthInSeconds = 0;
        this.disabled = false;
        this.numPlaysSameMedia = 0;
        this.numPlaysSameMediaOffScreen = 0;
        this.viewedSegments = [];
        this.trackedSegments = []
    };
    j.prototype.setResource = function(Q) {
        this.resource = Q
    };
    j.prototype.getResource = function() {
        return this.resource
    };
    j.prototype.makeRequestUrlFromParams = function(S) {
        var R = "";
        for (var Q in S) {
            if (Object.prototype.hasOwnProperty.call(S, Q)) {
                R += Q + "=" + encodeURIComponent(S[Q]) + "&"
            }
        }
        return R
    };
    j.prototype.trackEvent = function(W) {
        if (this.disabled) {
            return
        }
        if (!z) {
            z = N.getCurrentTime()
        } else {
            if ((N.getCurrentTime() - z) > E) {
                this.disable();
                return
            }
        }
        var Q = P();
        var R = "Media" + this.type;
        var T = this.mediaTitle || this.resource;
        var U = this.makeRequestUrlFromParams({
            e_c: R,
            e_a: W,
            e_n: T,
            e_v: parseInt(Math.round(this.mediaProgressInSeconds), 10),
            ca: "1"
        });
        if (Q && Q.length) {
            var S = 0,
                V;
            for (S; S < Q.length; S++) {
                V = Q[S];
                if (V && V.MediaAnalytics && V.MediaAnalytics.isTrackEventsEnabled()) {
                    if ("function" === typeof V.queueRequest && "function" === typeof V.disableQueueRequest) {
                        V.queueRequest(U)
                    } else {
                        V.trackRequest(U)
                    }
                }
            }
        } else {
            if (typeof C._paq === "undefined") {
                C._paq = []
            }
            C._paq.push(["trackRequest", U]);
            e("piwikWasNotYetInitialized. This means players were scanning too early for media or there are no async trackers")
        }
        e("trackEvent", R, T, W)
    };
    j.prototype.trackProgress = function(U, W, V, R, S, Y, ah, Z, ae, aa, X, Q, ac) {
        if (this.disabled) {
            return
        }
        if (!z) {
            z = N.getCurrentTime()
        } else {
            if ((N.getCurrentTime() - z) > E) {
                this.disable();
                return
            }
        }
        if (this.isPlaying && !Y) {
            Y = 1
        }
        var ag = {
            ma_id: U,
            ma_ti: W !== null ? W : "",
            ma_pn: V,
            ma_mt: R,
            ma_re: S,
            ma_st: parseInt(Math.floor(Y), 10),
            ma_ps: parseInt(ah, 10),
            ma_le: Z,
            ma_ttp: ae !== null ? ae : "",
            ma_w: aa ? aa : "",
            ma_h: X ? X : "",
            ma_fs: Q ? "1" : "0",
            ma_se: ac.join(","),
            ca: "1"
        };
        var ab = this.makeRequestUrlFromParams(ag);
        var af = P();
        if (af && af.length) {
            var ad = 0,
                T;
            for (ad; ad < af.length; ad++) {
                T = af[ad];
                if (T && T.MediaAnalytics && T.MediaAnalytics.isTrackProgressEnabled()) {
                    if ("function" === typeof T.queueRequest && "function" === typeof T.disableQueueRequest) {
                        T.queueRequest(ab)
                    } else {
                        T.trackRequest(ab)
                    }
                }
            }
        } else {
            if (typeof C._paq === "undefined") {
                C._paq = []
            }
            C._paq.push(["trackRequest", ab]);
            e("piwikWasNotYetInitialized. This means players were scanning too early for media or there are no async trackers")
        }
        if (O) {
            e("trackProgress", n().stringify(ag))
        }
    };
    j.prototype.setFullscreen = function(Q) {
        if (!this.fullscreen) {
            this.fullscreen = !!Q
        }
    };
    j.prototype.setWidth = function(Q) {
        if (N.isNumber(Q)) {
            this.width = parseInt(Q, 10)
        }
    };
    j.prototype.setHeight = function(Q) {
        if (N.isNumber(Q)) {
            this.height = parseInt(Q, 10)
        }
    };
    j.prototype.setMediaTitle = function(Q) {
        this.mediaTitle = Q
    };
    j.prototype.getMediaTitle = function() {
        return this.mediaTitle
    };
    j.prototype.setMediaProgressInSeconds = function(Q) {
        this.mediaProgressInSeconds = Q;
        if (this.isPlaying) {
            this.viewedSegments.push(Q)
        }
    };
    j.prototype.getMediaProgressInSeconds = function() {
        return this.mediaProgressInSeconds
    };
    j.prototype.setMediaTotalLengthInSeconds = function(Q) {
        this.mediaLengthInSeconds = Q
    };
    j.prototype.getMediaTotalLengthInSeconds = function() {
        return this.mediaLengthInSeconds
    };
    j.prototype.play = function() {
        if (this.isPlaying) {
            return
        }
        this.isPlaying = true;
        this.setMediaProgressInSeconds(this.getMediaProgressInSeconds());
        this.startWatchedTime();
        if (d && this.timeToInitialPlay === null) {
            this.timeToInitialPlay = N.roundTimeToSeconds(N.getCurrentTime() - N.getTimeScriptLoaded())
        }
        d = false;
        if (this.isPaused) {
            this.isPaused = false;
            this.trackEvent("resume")
        } else {
            this.trackEvent("play");
            var Q = N.isDocumentOffScreen();
            this.numPlaysSameMedia++;
            h++;
            if (Q) {
                this.numPlaysSameMediaOffScreen++;
                l++
            }
            if (this.numPlaysSameMedia > 25 || h > 50) {
                this.disable()
            } else {
                if (this.numPlaysSameMediaOffScreen > 10 || l > 15) {
                    this.disable()
                }
            }
        }
        this.trackUpdate()
    };
    j.prototype.startWatchedTime = function() {
        this.lastTimeCheck = N.getCurrentTime()
    };
    j.prototype.stopWatchedTime = function() {
        if (this.lastTimeCheck) {
            this.watchedTime += N.getCurrentTime() - this.lastTimeCheck;
            this.lastTimeCheck = null
        }
    };
    j.prototype.seekStart = function() {
        if (this.isPlaying) {
            this.stopWatchedTime()
        }
    };
    j.prototype.seekFinish = function() {
        if (this.isPlaying) {
            this.startWatchedTime()
        }
    };
    j.prototype.pause = function() {
        if (this.isPlaying) {
            this.isPaused = true;
            this.isPlaying = false;
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null
            }
            this.stopWatchedTime();
            this.trackUpdate();
            this.trackEvent("pause")
        }
    };
    j.prototype.finish = function() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null
        }
        this.stopWatchedTime();
        this.trackUpdate();
        this.trackEvent("finish");
        this.id = N.generateUniqueId();
        this.timeToInitialPlay = null;
        this.lastTimeCheck = null;
        this.isPlaying = false;
        this.isPaused = false;
        this.watchedTime = 0;
        this.mediaProgressInSeconds = 0
    };
    j.prototype.trackUpdate = function() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null
        }
        var Q = N.getCurrentTime();
        if (this.lastTimeCheck) {
            this.watchedTime += (Q - this.lastTimeCheck);
            this.lastTimeCheck = Q
        }
        var W = this.mediaLengthInSeconds;
        if (!W || !N.isNumber(W)) {
            W = ""
        } else {
            W = parseInt(this.mediaLengthInSeconds, 10)
        }
        var T = N.roundTimeToSeconds(this.watchedTime);
        var U = this.mediaProgressInSeconds;
        if (U > W && W) {
            U = W
        }
        var R = [];
        var S, V;
        for (S = 0; S < this.viewedSegments.length; S++) {
            V = this.viewedSegments[S];
            if (V >= 0 && V <= W) {
                if (V <= 300) {
                    V = N.roundUp(V, 15)
                } else {
                    V = N.roundUp(V, 30)
                }
                if (V >= 0 && V < 1) {
                    V = 15
                }
                if (-1 === N.indexOfArray(R, V) && -1 === N.indexOfArray(this.trackedSegments, V)) {
                    R.push(V);
                    this.trackedSegments.push(V)
                }
            }
        }
        this.viewedSegments = [];
        this.trackProgress(this.id, this.mediaTitle, this.playerName, this.type, this.resource, T, U, W, this.timeToInitialPlay, this.width, this.height, this.fullscreen, R)
    };
    j.prototype.update = function() {
        if (this.timeout) {
            return
        }
        var S = N.roundTimeToSeconds(this.watchedTime);
        var R = B;
        if (!I && (S >= 1800 || h > 10)) {
            R = 300
        } else {
            if (!I && (S >= 600 || h > 4)) {
                R = 240
            } else {
                if (!I && (S >= 300 || h > 2)) {
                    R = 120
                } else {
                    if (!I && S >= 60) {
                        R = 60
                    }
                }
            }
        }
        R = R * 1000;
        var Q = this;
        this.timeout = setTimeout(function() {
            Q.trackUpdate();
            Q.timeout = null
        }, R)
    };
    var c = {
        players: {},
        registerPlayer: function(Q, R) {
            if (!R || !R.scanForMedia || "function" !== typeof R.scanForMedia) {
                throw new Error("A registered player does not implement the scanForMedia function")
            }
            Q = Q.toLowerCase();
            this.players[Q] = R
        },
        removePlayer: function(Q) {
            Q = Q.toLowerCase();
            delete this.players[Q]
        },
        getPlayer: function(Q) {
            Q = Q.toLowerCase();
            if (Q in this.players) {
                return this.players[Q]
            }
            return null
        },
        getPlayers: function() {
            return this.players
        },
        scanForMedia: function(R) {
            if (!a) {
                return
            }
            if ("undefined" === typeof R || !R) {
                R = document
            }
            var Q;
            for (Q in this.players) {
                if (Object.prototype.hasOwnProperty.call(this.players, Q)) {
                    this.players[Q].scanForMedia(R)
                }
            }
        }
    };
    var M = function(ac, S) {
        if (!ac) {
            return
        }
        if (!C.addEventListener) {
            return
        }
        if (ac.hasPlayerInstance) {
            return
        }
        ac.hasPlayerInstance = true;
        var ah = f.VIDEO === S;
        var V = F.makeUrlAbsolute(ac.currentSrc);
        var Q = m.getMediaResource(ac, V);
        var W = "html5" + S.toLowerCase();
        if (typeof paella === "object" && typeof paella.opencast === "object") {
            W = "paella-opencast"
        } else {
            if (m.getFirstParentWithClass(ac, "video-js", 1)) {
                W = "video.js"
            } else {
                if (m.hasCssClass(ac, "jw-video")) {
                    W = "jwplayer"
                } else {
                    if (m.getFirstParentWithClass(ac, "flowplayer", 3)) {
                        W = "flowplayer"
                    }
                }
            }
        }
        var U = new j(W, S, Q);
        G.push(U);

        function R() {
            if (ac.duration) {
                U.setMediaTotalLengthInSeconds(ac.duration)
            }
        }

        function X() {
            if (ah) {
                if ("undefined" !== typeof ac.videoWidth && ac.videoWidth) {
                    U.setWidth(ac.videoWidth)
                } else {
                    if ("undefined" !== typeof ac.clientWidth && ac.clientWidth) {
                        U.setWidth(ac.clientWidth)
                    }
                }
                if ("undefined" !== typeof ac.videoHeight && ac.videoHeight) {
                    U.setHeight(ac.videoHeight)
                } else {
                    if ("undefined" !== typeof ac.clientHeight && ac.clientHeight) {
                        U.setHeight(ac.clientHeight)
                    }
                }
                U.setFullscreen(m.isFullscreen(ac))
            }
        }

        function Y() {
            U.setMediaProgressInSeconds(ac.currentTime)
        }

        function ai() {
            var am = m.getMediaTitle(ac);
            if (am) {
                U.setMediaTitle(am)
            } else {
                ae(ac, U)
            }
        }
        al(ac, U);
        X();
        ai();
        R();
        Y();
        var T = false;
        var aa = false;
        var ab = null;
        if (ac.currentSrc) {
            ab = ac.currentSrc
        }

        function ae(ao, at) {
            if (b() && !at.getMediaTitle()) {
                var aq = m.getFirstParentWithClass(ao, "jwplayer", 3);
                if (!aq) {
                    aq = m.getFirstParentWithClass(ao, "jwplayer-video", 3);
                    if (aq && "undefined" !== typeof aq.children && aq.children && aq.children.length && aq.children[0]) {
                        aq = aq.children[0]
                    }
                }
                if (aq) {
                    try {
                        var au = jwplayer(aq);
                        if (au && au.getPlaylistItem) {
                            var av = au.getPlaylistItem();
                            if (av && av.matomoTitle) {
                                at.setMediaTitle(av.matomoTitle)
                            } else {
                                if (av && av.piwikTitle) {
                                    at.setMediaTitle(av.piwikTitle)
                                } else {
                                    if (av && av.title) {
                                        at.setMediaTitle(av.title)
                                    }
                                }
                            }
                        }
                    } catch (ap) {
                        e(ap)
                    }
                }
            }
            if (k() && !at.getMediaTitle()) {
                var am = m.getFirstParentWithClass(ao, "flowplayer", 4);
                if (am) {
                    var au = flowplayer(am);
                    if (au && au.video && au.video.matomoTitle) {
                        at.setMediaTitle(au.video.matomoTitle)
                    } else {
                        if (au && au.video && au.video.piwikTitle) {
                            at.setMediaTitle(au.video.piwikTitle)
                        } else {
                            if (au && au.video && au.video.title) {
                                at.setMediaTitle(au.video.title)
                            }
                        }
                    }
                }
            }
            if (!at.getMediaTitle()) {
                var an = q.getElementById("engage_basic_description_title");
                if (an && an.innerText) {
                    var ar = N.trim(an.innerText);
                    if (ar) {
                        at.setMediaTitle(ar)
                    }
                } else {
                    if (typeof paella === "object" && typeof paella.opencast === "object" && typeof paella.opencast._episode === "object" && paella.opencast._episode.dcTitle) {
                        var ar = N.trim(paella.opencast._episode.dcTitle);
                        if (ar) {
                            at.setMediaTitle(ar)
                        }
                    }
                }
            }
            o(ao, at)
        }

        function al(aq, ap) {
            if (b()) {
                var at = m.getFirstParentWithClass(aq, "jwplayer", 3);
                if (!at) {
                    at = m.getFirstParentWithClass(aq, "jwplayer-video", 3);
                    if (at && "undefined" !== typeof at.children && at.children && at.children.length && at.children[0]) {
                        at = at.children[0]
                    }
                }
                if (at) {
                    try {
                        var an = jwplayer(at);
                        if (an && an.getPlaylistItem) {
                            var ao = an.getPlaylistItem();
                            if (ao && "undefined" !== typeof ao.matomoResource && ao.matomoResource) {
                                ap.setResource(ao.matomoResource)
                            } else {
                                if (ao && "undefined" !== typeof ao.piwikResource && ao.piwikResource) {
                                    ap.setResource(ao.piwikResource)
                                }
                            }
                        }
                    } catch (ar) {
                        e(ar)
                    }
                }
            }
            if (k()) {
                var am = m.getFirstParentWithClass(aq, "flowplayer", 4);
                if (am) {
                    var an = flowplayer(am);
                    if (an && an.video && "undefined" !== typeof an.video.matomoResource && an.video.matomoResource) {
                        ap.setResource(an.video.matomoResource)
                    } else {
                        if (an && an.video && "undefined" !== typeof an.video.piwikResource && an.video.piwikResource) {
                            ap.setResource(an.video.piwikResource)
                        }
                    }
                }
            }
        }

        function ad() {
            if (!ab && ac.currentSrc) {
                ab = ac.currentSrc
            } else {
                if (ab && ac.currentSrc && ab != ac.currentSrc) {
                    ab = ac.currentSrc;
                    var an = F.makeUrlAbsolute(ab);
                    var am = U.getMediaTitle();
                    T = false;
                    U.reset();
                    U.setResource(an);
                    U.setMediaTitle("");
                    var ao = m.getMediaTitle(ac);
                    if (ao && ao !== am) {
                        U.setMediaTitle(ao)
                    } else {
                        ae(ac, U)
                    }
                    al(ac, U);
                    R()
                }
            }
        }

        function ak() {
            if (!aa && (U.getResource() || U.getMediaTitle())) {
                aa = true;
                ai(ac, U);
                al(ac, U);
                U.trackUpdate()
            }
        }

        function af() {
            ad();
            X();
            R();
            Y();
            ak()
        }
        var ag = null;
        if (ac.loop) {
            ag = 0
        }
        var Z = 0;
        var aj = false;
        if (ac.loop && ac.autoplay && ac.muted) {
            aj = true
        }
        ac.addEventListener("playing", function() {
            ad();
            if ("undefined" !== typeof ac.paused && ac.paused) {
                return
            }
            if ("undefined" !== typeof ac.ended && ac.ended) {
                return
            }
            if (!T) {
                Y();
                T = true;
                U.play()
            }
        }, true);
        ac.addEventListener("durationchange", R, true);
        ac.addEventListener("loadedmetadata", af, true);
        ac.addEventListener("loadeddata", af, true);
        ac.addEventListener("pause", function() {
            if (ac.currentTime && ac.duration && ac.currentTime === ac.duration) {
                return
            }
            if (ac.seeking) {
                return
            }
            Y();
            T = false;
            U.pause()
        }, true);
        ac.addEventListener("seeking", function() {
            if (ac.seeking) {
                Y();
                var am = parseInt(U.getMediaProgressInSeconds(), 10);
                if ((ag === null || ag !== am) && Z < 25) {
                    ag = am;
                    U.trackEvent("seek");
                    Z++
                }
            }
        }, true);
        ac.addEventListener("ended", function() {
            T = false;
            U.finish()
        }, true);
        ac.addEventListener("timeupdate", function() {
            Y();
            R();
            if (ah && !U.width) {
                X()
            }
            if ("undefined" !== typeof ac.paused && ac.paused) {
                return
            }
            if ("undefined" !== typeof ac.ended && ac.ended) {
                return
            }
            if (aj) {
                var am = N.roundTimeToSeconds(U.watchedTime);
                var an = U.getMediaTotalLengthInSeconds();
                if (am >= 30 && an >= 1 && an < 30 && (am / an) >= 3) {
                    U.disable()
                }
            }
            aa = true;
            if (!T) {
                T = true;
                U.play()
            } else {
                U.update()
            }
        }, true);
        ac.addEventListener("seeking", function() {
            U.seekStart()
        }, true);
        ac.addEventListener("seeked", function() {
            Y();
            R();
            U.seekFinish()
        }, true);
        if (ah) {
            ac.addEventListener("resize", af, true);
            C.addEventListener("resize", function() {
                X()
            }, false)
        }
        U.timeout = setTimeout(function() {
            af();
            U.timeout = null
        }, 1500)
    };
    M.scanForMedia = function(T) {
        if (!C.addEventListener) {
            return
        }
        var U = H();
        var X = T.getElementsByTagName("video");
        var R;
        for (var S = 0; S < X.length; S++) {
            if (!m.isMediaIgnored(X[S])) {
                R = m.getAttribute(X[S], "id");
                if (U) {
                    var V = T.getElementById("videoDisplay1_wrapper");
                    if (V && ("function" === typeof V.contains) && !V.contains(X[S])) {
                        continue
                    }
                }
                if (R !== "video_0" && T.getElementById("videoPlayerWrapper_0") && T.getElementById("video_0")) {
                    continue
                }
                new M(X[S], f.VIDEO)
            }
        }
        X = null;
        var Q = T.getElementsByTagName("audio");
        for (var S = 0; S < Q.length; S++) {
            if (!m.isMediaIgnored(Q[S])) {
                new M(Q[S], f.AUDIO)
            }
        }
        Q = null;
        if ("undefined" !== typeof soundManager && soundManager && "undefined" !== typeof soundManager.sounds) {
            for (var S in soundManager.sounds) {
                if (Object.prototype.hasOwnProperty.call(soundManager.sounds, S)) {
                    var W = soundManager.sounds[S];
                    if (W && W.isHTML5 && W._a) {
                        if (!m.isMediaIgnored(W._a)) {
                            new M(W._a, f.AUDIO)
                        }
                    }
                }
            }
        }
    };
    var J = function(S, Z) {
        if (!S || !C.addEventListener) {
            return
        }
        if (S.hasPlayerInstance || !b()) {
            return
        }
        var aa = m.getFirstParentWithClass(S, "jwplayer", 3);
        if (!aa) {
            return
        }
        var ad = jwplayer(aa);
        if (!ad || !ad.getItem || "undefined" === (typeof ad.getItem())) {
            return
        }
        S.hasPlayerInstance = true;

        function af(ag) {
            var ah = ag.getPlaylistItem();
            if (ah && ah.matomoResource) {
                return ah.matomoResource
            }
            if (ah && ah.piwikResource) {
                return ah.piwikResource
            }
            if (ah && ah.file) {
                return ah.file
            }
            return ""
        }

        function R(ah) {
            var ai = ah.getPlaylistItem();
            if (ai && ai.matomoTitle) {
                return ai.matomoTitle
            }
            if (ai && ai.piwikTitle) {
                return ai.piwikTitle
            }
            if (ai && ai.title) {
                return ai.title
            }
            if ("function" === typeof r) {
                var ag = r(S);
                if (ag) {
                    return ag
                }
            }
            return null
        }

        function Y(ag, ah, aj) {
            var ai = af(ag);
            if (aj && ai && aj != ai) {
                aj = ai;
                ah.reset();
                ah.setResource(F.makeUrlAbsolute(aj));
                ah.setMediaTitle(R(ag));
                ah.setWidth(ag.getWidth());
                ah.setHeight(ag.getHeight());
                ah.setFullscreen(ag.getFullscreen());
                return true
            }
            return false
        }
        var ac = af(ad);
        var Q = F.makeUrlAbsolute(ac);
        var T = m.getMediaResource(S, Q);
        var ab = new j("jwplayer", Z, T);
        ab.setMediaTitle(R(ad));
        ab.setWidth(ad.getWidth());
        ab.setHeight(ad.getHeight());
        ab.setFullscreen(ad.getFullscreen());
        G.push(ab);
        var U = ad.getDuration();
        if (U) {
            ab.setMediaTotalLengthInSeconds(U)
        }
        var V = false,
            X = ac;
        var ae = null,
            W = 0;
        ad.on("play", function() {
            Y(ad, ab, X);
            V = true;
            ab.play()
        }, true);
        ad.on("playlistItem", function() {
            Y(ad, ab, X);
            if (ad.getState() !== "playing") {
                V = false
            }
        }, true);
        ad.on("pause", function() {
            if (ad.getPosition() && ad.getDuration() && ad.getPosition() === ad.getDuration()) {
                return
            }
            ab.pause()
        }, true);
        ad.on("complete", function() {
            ab.finish()
        }, true);
        ad.on("time", function() {
            var ag = ad.getPosition();
            if (ag) {
                ab.setMediaProgressInSeconds(ag)
            }
            var ah = ad.getDuration();
            if (ah) {
                ab.setMediaTotalLengthInSeconds(ah)
            }
            if (V) {
                ab.update()
            } else {
                V = true;
                ab.play()
            }
        }, true);
        ad.on("seek", function() {
            ab.seekStart()
        }, true);
        ad.on("seeked", function() {
            var ag = ad.getPosition();
            if (ag) {
                ab.setMediaProgressInSeconds(ag)
            }
            var ai = ad.getDuration();
            if (ai) {
                ab.setMediaTotalLengthInSeconds(ai)
            }
            ab.seekFinish();
            var ah = parseInt(ab.getMediaProgressInSeconds(), 10);
            if ((ae === null || ae !== ah) && W < 25) {
                ae = ah;
                ab.trackEvent("seek");
                W++
            }
        }, true);
        ad.on("resize", function() {
            ab.setWidth(ad.getWidth());
            ab.setHeight(ad.getHeight());
            ab.setFullscreen(ad.getFullscreen())
        }, true);
        ad.on("fullscreen", function() {
            ab.setWidth(ad.getWidth());
            ab.setHeight(ad.getHeight());
            ab.setFullscreen(ad.getFullscreen())
        }, false);
        ab.trackUpdate()
    };
    J.scanForMedia = function(R) {
        if (!C.addEventListener || !b()) {
            return
        }
        var S = R.getElementsByTagName("object");
        for (var Q = 0; Q < S.length; Q++) {
            if (!m.isMediaIgnored(S[Q]) && m.hasCssClass(S[Q], "jw-swf")) {
                new J(S[Q], f.VIDEO)
            }
        }
        S = null
    };
    var p = function(T, W) {
        if (!T) {
            return
        }
        if (!C.addEventListener) {
            return
        }
        if (T.playerInstance) {
            return
        }
        T.playerInstance = true;
        var Q = m.getAttribute(T, "src");
        var S = m.getMediaResource(T, null);
        var Z = new j("vimeo", W, S);
        Z.setWidth(T.clientWidth);
        Z.setHeight(T.clientHeight);
        Z.setFullscreen(m.isFullscreen(T));
        G.push(Z);
        C.addEventListener("resize", function() {
            Z.setWidth(T.clientWidth);
            Z.setHeight(T.clientHeight);
            Z.setFullscreen(m.isFullscreen(T))
        }, false);
        var Y = m.getMediaTitle(T);
        var U = !m.getAttribute(T, "data-piwik-title") && !m.getAttribute(T, "data-matomo-title");
        if (Y) {
            Z.setMediaTitle(Y)
        }
        T.matomoNumSeekEvents = 0;
        T.matomoSeekLastTime = null;
        var R = function(ac) {
            if (!(/^(https?:)?\/\/(player.)?vimeo.com(?=$|\/)/).test(ac.origin)) {
                return false
            }
            if (!ac || !ac.data) {
                return
            }
            if (T.contentWindow && ac.source && T.contentWindow !== ac.source) {
                return
            }
            var ad = ac.data;
            if ("string" === typeof ad) {
                ad = n().parse(ac.data)
            }
            if (("event" in ad && ad.event === "ready") || ("method" in ad && ad.method === "ping")) {
                if (V === "*") {
                    V = ac.origin
                }
                if (!T.isVimeoReady) {
                    T.isVimeoReady = true;
                    X("addEventListener", "play");
                    X("addEventListener", "pause");
                    X("addEventListener", "finish");
                    X("addEventListener", "seek");
                    X("addEventListener", "seeked");
                    X("addEventListener", "playProgress");
                    X("getVideoTitle")
                }
                return
            }
            if ("method" in ad) {
                e("vimeoMethod", ad.method);
                switch (ad.method) {
                    case "getVideoTitle":
                        if (ad.value && U) {
                            Z.setMediaTitle(ad.value)
                        } else {
                            if (U) {
                                o(T, Z)
                            }
                        }
                        U = true;
                        Z.trackUpdate();
                        break;
                    case "getPaused":
                        if (ad.value) {
                            Z.pause()
                        }
                }
                return
            }
            if ("event" in ad) {
                var aa = ad.event;
                e("vimeoEvent", aa);
                if (ad && ad.data) {
                    ad = ad.data
                }
                if (Z && ad && ad.seconds) {
                    if (Z.getMediaProgressInSeconds() === ad.seconds && (aa === "playProgress" || aa === "timeupdate")) {
                        return
                    }
                    Z.setMediaProgressInSeconds(ad.seconds)
                }
                if (Z && ad && ad.duration) {
                    Z.setMediaTotalLengthInSeconds(ad.duration)
                }
                switch (aa) {
                    case "play":
                        Z.play();
                        break;
                    case "timeupdate":
                    case "playProgress":
                        if (Z._isSeeking) {
                            Z._isSeeking = false;
                            Z.seekFinish()
                        }
                        Z.update();
                        break;
                    case "seek":
                        Z.seekStart();
                        Z._isSeeking = true;
                        break;
                    case "seeked":
                        var ab = parseInt(Z.getMediaProgressInSeconds(), 10);
                        if ((T.matomoSeekLastTime === null || T.matomoSeekLastTime !== ab) && T.matomoNumSeekEvents < 25) {
                            T.matomoSeekLastTime = ab;
                            Z.trackEvent("seek");
                            T.matomoNumSeekEvents++
                        }
                        break;
                    case "pause":
                        if (ad && ad.seconds && ad && ad.duration && ad.seconds === ad.duration) {
                            e("ignoring pause event because video is finished");
                            break
                        }
                        setTimeout(function() {
                            X("getPaused")
                        }, 700);
                        break;
                    case "finish":
                        Z.finish();
                        break
                }
            }
        };
        C.addEventListener("message", R, true);
        var V = "*";
        Z._isSeeking = false;

        function X(ad, ab) {
            var aa = {
                method: ad
            };
            if (ab !== undefined) {
                aa.value = ab
            }
            if (T && T.contentWindow) {
                if (navigator && navigator.userAgent) {
                    var ac = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
                    if (ac >= 8 && ac < 10) {
                        aa = n().stringify(aa)
                    }
                }
                T.contentWindow.postMessage(aa, V)
            }
        }
        X("ping")
    };
    p.scanForMedia = function(S) {
        if (!C.addEventListener) {
            return
        }
        var R = S.getElementsByTagName("iframe");
        for (var Q = 0; Q < R.length; Q++) {
            if (m.isMediaIgnored(R[Q])) {
                continue
            }
            var T = m.getAttribute(R[Q], "src");
            if (T && (T.indexOf("player.vimeo.com") > 0 || (T.indexOf("vimeo.com") > 0 && T.indexOf("embed") > 0))) {
                new p(R[Q], f.VIDEO)
            }
        }
        R = null
    };
    var t = function(V, Y) {
        if (!V) {
            return
        }
        if (!C.addEventListener) {
            return
        }
        if (V.playerInstance) {
            return
        }
        if (typeof Plyr === "function" && m.getFirstParentWithClass(V, "plyr", 2)) {
            return
        }
        var R = m.getMediaResource(V, null);
        var ab = new j("youtube", Y, R);
        ab.setWidth(V.clientWidth);
        ab.setHeight(V.clientHeight);
        ab.setFullscreen(m.isFullscreen(V));
        G.push(ab);
        C.addEventListener("resize", function() {
            ab.setWidth(V.clientWidth);
            ab.setHeight(V.clientHeight);
            ab.setFullscreen(m.isFullscreen(V))
        }, false);
        var aa = m.getMediaTitle(V);
        if (aa) {
            ab.setMediaTitle(aa)
        }
        var S = false;
        var U = null;
        var X = !m.getAttribute(V, "data-piwik-title") && !m.getAttribute(V, "data-matomo-title");
        var Q = false;
        var W = false;
        var Z = null;

        function T(ac) {
            if (!ac || !ac.target) {
                return
            }
            var ag = ac.target;
            var af;
            if (ac && "undefined" !== typeof ac.data && null !== ac.data) {
                af = ac.data
            } else {
                if (!ag.getPlayerState) {
                    e("youtubeMissingPlayerState");
                    return
                }
                af = ag.getPlayerState()
            }
            e("youtubeStateChange", af);
            switch (af) {
                case YT.PlayerState.ENDED:
                    if (ag.getCurrentTime) {
                        ab.setMediaProgressInSeconds(ag.getCurrentTime())
                    }
                    if (ag.getDuration) {
                        ab.setMediaTotalLengthInSeconds(ag.getDuration())
                    }
                    ab.finish();
                    if (U) {
                        clearInterval(U);
                        U = null
                    }
                    break;
                case YT.PlayerState.PLAYING:
                    var ad = null;
                    if (ag.getVideoData) {
                        ad = ag.getVideoData()
                    }
                    if (!Z && ad && ad.video_id) {
                        Z = ad.video_id
                    } else {
                        if (Z && ad && ad.video_id && Z != ad.video_id) {
                            Z = ad.video_id;
                            ab.reset();
                            if (ag.getVideoUrl) {
                                ab.setResource(ag.getVideoUrl())
                            }
                            X = true;
                            Q = false;
                            S = false;
                            e("currentVideoId has changed to " + Z)
                        }
                    }
                    if (ag.getCurrentTime) {
                        ab.setMediaProgressInSeconds(ag.getCurrentTime())
                    }
                    if (ag.getDuration) {
                        ab.setMediaTotalLengthInSeconds(ag.getDuration())
                    }
                    if (X) {
                        if (ad && ad.title) {
                            ab.setMediaTitle(ad.title)
                        }
                        X = false
                    }
                    if (!Q || W) {
                        Q = true;
                        W = false;
                        S = false;
                        ab.play()
                    } else {
                        if (S) {
                            S = false;
                            ab.seekFinish()
                        }
                    }
                    ab.update();
                    if (!U) {
                        var ae = [];
                        U = setInterval(function() {
                            if (ab.isPlaying) {
                                if (ag && ag.getCurrentTime) {
                                    var ah = ag.getCurrentTime();
                                    ab.setMediaProgressInSeconds(ah);
                                    ae.push(ah);
                                    if (ae.length > 60) {
                                        ae.shift();
                                        var ai = 0;
                                        var aj = true;
                                        for (ai = 0; ai < ae.length; ai++) {
                                            if (ae[ai] !== ae[0]) {
                                                aj = false
                                            }
                                        }
                                        if (aj) {
                                            W = true;
                                            ab.pause();
                                            ae = [];
                                            return
                                        }
                                    }
                                }
                                ab.update()
                            }
                        }, 1 * 1000)
                    }
                    break;
                case -1:
                case YT.PlayerState.PAUSED:
                    setTimeout(function() {
                        if (ag && ag.getPlayerState && ag.getPlayerState() == YT.PlayerState.PAUSED) {
                            if (ag && ag.getCurrentTime) {
                                ab.setMediaProgressInSeconds(ag.getCurrentTime())
                            }
                            ab.pause();
                            W = true;
                            if (U) {
                                clearInterval(U);
                                U = null
                            }
                        } else {
                            e("target not found in YT paused state")
                        }
                    }, 1000);
                    break;
                case YT.PlayerState.BUFFERING:
                    ab.seekStart();
                    S = true;
                    if (U) {
                        clearInterval(U);
                        U = null
                    }
                    break
            }
        }
        V.playerInstance = new YT.Player(V, {
            events: {
                onReady: function(ac) {
                    if (!ac || !ac.target) {
                        return
                    }
                    if (X && ac.target && ac.target.getVideoData) {
                        var ad = ac.target.getVideoData();
                        if (ad && ad.title) {
                            ab.setMediaTitle(ad.title)
                        } else {
                            o(V, ab)
                        }
                    }
                    ab.trackUpdate();
                    if (ac.target.getPlayerState && ac.target.getPlayerState() == YT.PlayerState.PLAYING) {
                        T(ac)
                    }
                },
                onError: function(ac) {
                    if (!ac || !ac.data) {
                        return
                    }
                    if (ab.isPlaying) {
                        W = true;
                        ab.pause()
                    }
                    e("YT onError event happened")
                },
                onStateChange: T
            }
        })
    };
    t.scanForMedia = function(Z) {
        if (!C.addEventListener) {
            return
        }
        var S = [];
        var Y = Z.getElementsByTagName("iframe");
        for (var W = 0; W < Y.length; W++) {
            if (m.isMediaIgnored(Y[W])) {
                continue
            }
            var Q = m.getAttribute(Y[W], "src");
            if (Q && (Q.indexOf("youtube.com") > 0 || Q.indexOf("youtube-nocookie.com") > 0)) {
                m.setAttribute(Y[W], "enablejsapi", "true");
                S.push(Y[W])
            }
        }
        Y = null;

        function R(ae, ad) {
            if (!(ae in window)) {
                return
            }
            var af = window[ae];
            if ("function" !== typeof af) {
                return
            }
            try {
                if (af.toString && af.toString().indexOf("function replaceMe") === 0) {
                    return
                }
            } catch (ac) {}

            function ab() {
                try {
                    af.apply(window, [].slice.call(arguments, 0));
                    ad()
                } catch (ag) {
                    ad();
                    throw ag
                }
            }
            window[ae] = ab
        }

        function X() {
            return "object" === typeof YT && YT && YT.Player
        }

        function V() {
            if (!X()) {
                return
            }
            var ab = Z.getElementsByTagName("iframe");
            for (var ac = 0; ac < ab.length; ac++) {
                if (m.isMediaIgnored(ab[ac])) {
                    continue
                }
                var ad = m.getAttribute(ab[ac], "src");
                if (ad && (ad.indexOf("youtube.com") > 0 || ad.indexOf("youtube-nocookie.com") > 0)) {
                    if (ab[ac].setAttribute) {
                        ab[ac].setAttribute("enablejsapi", "true")
                    }
                    new t(ab[ac], f.VIDEO)
                }
            }
        }
        if (S && S.length) {
            if (X()) {
                V()
            } else {
                if (C.onYouTubeIframeAPIReady) {
                    R("onYouTubeIframeAPIReady", V)
                } else {
                    if (C.onYouTubePlayerAPIReady) {
                        R("onYouTubePlayerAPIReady", V)
                    } else {
                        C.onYouTubeIframeAPIReady = V;
                        var aa = q.createElement("script");
                        aa.src = "https://www.youtube.com/iframe_api";
                        var U = q.getElementsByTagName("script");
                        if (U && U.length) {
                            var T = U[0];
                            T.parentNode.insertBefore(aa, T)
                        } else {
                            if (q.body) {
                                q.body.appendChild(aa)
                            }
                        }
                    }
                }
            }
        }
        S = null
    };
    var D = function(T, ad) {
        if (!T) {
            return
        }
        if (T.playerInstance) {
            return
        }
        var ag = new SC.Widget(T);
        T.playerInstance = ag;
        var Q = m.getAttribute(T, "data-matomo-resource");
        if (!Q) {
            Q = m.getAttribute(T, "data-piwik-resource")
        }
        var af = new j("soundcloud", ad, Q);
        G.push(af);
        var ae = m.getMediaTitle(T);
        if (ae) {
            af.setMediaTitle(ae)
        }
        var R = false;
        var S = null;
        var Y = !m.getAttribute(T, "data-piwik-title") && !m.getAttribute(T, "data-matomo-title");

        function V() {
            return af.getMediaTitle() && af.getResource()
        }
        var ac = null;

        function ab(ah) {
            ag.getCurrentSound(function(ai) {
                if (ai === null) {
                    ag.getCurrentSoundIndex(function(aj) {
                        if (aj >= 0) {
                            ag.getSounds(function(ak) {
                                if (aj in ak && ak[aj]) {
                                    ah(ak[aj])
                                }
                            })
                        }
                    })
                } else {
                    ah(ai)
                }
            })
        }

        function aa(ah) {
            if (!ah) {
                return
            }
            ac = ah.id;
            if (Y && !af.getMediaTitle() && ah.title) {
                af.setMediaTitle(ah.title)
            }
            if (ah.uri && !af.getResource()) {
                af.setResource(ah.uri)
            }
            if (ah.duration) {
                af.setMediaTotalLengthInSeconds(parseInt(Math.floor(ah.duration / 1000)))
            }
            af.trackUpdate()
        }

        function X(ah) {
            if (ah && ah.soundId && ac !== ah.soundId) {
                ac = ah.soundId;
                af.reset();
                af.setResource("");
                af.setMediaTitle("");
                Y = true;
                R = false;
                ab(aa);
                e("currentId has changed to " + ac);
                return true
            }
            return false
        }

        function U() {
            ag.getDuration(function(ah) {
                af.setMediaTotalLengthInSeconds(parseInt(Math.floor(ah / 1000)))
            })
        }

        function Z(ah) {
            if ("object" === typeof ah && "undefined" !== typeof ah.currentPosition) {
                af.setMediaProgressInSeconds(parseInt(Math.floor(ah.currentPosition / 1000)))
            }
        }
        var W = false;
        ag.bind(SC.Widget.Events.READY, function(ah) {
            ab(aa);
            ag.bind(SC.Widget.Events.PLAY, function(ai) {
                if (!V()) {
                    return
                }
                if (X(ai)) {
                    return
                }
                U();
                Z(ai);
                af.play()
            });
            ag.bind(SC.Widget.Events.PLAY_PROGRESS, function(ai) {
                if (!V()) {
                    return
                }
                if (X(ai)) {
                    return
                }
                U();
                Z(ai);
                if (W) {
                    return
                }
                if (af.isPaused) {
                    af.play();
                    return
                }
                if (!af.isPlaying) {
                    return
                }
                if (R) {
                    R = false;
                    af.seekFinish()
                }
                af.update()
            });
            ag.bind(SC.Widget.Events.PAUSE, function(ai) {
                if (!V()) {
                    return
                }
                if (X(ai)) {
                    return
                }
                U();
                Z(ai);
                if (af.getMediaProgressInSeconds() && af.getMediaTotalLengthInSeconds() === af.getMediaProgressInSeconds()) {
                    e("ignoring pause event because video is finished");
                    return
                }
                af.pause();
                W = true;
                setTimeout(function() {
                    W = false
                }, 1000)
            });
            ag.bind(SC.Widget.Events.FINISH, function(ai) {
                if (!V()) {
                    return
                }
                if (X(ai)) {
                    return
                }
                U();
                Z(ai);
                af.finish()
            });
            ag.bind(SC.Widget.Events.SEEK, function(ai) {
                if (!V()) {
                    return
                }
                if (X(ai)) {
                    return
                }
                U();
                Z(ai);
                af.seekStart();
                R = true
            })
        })
    };
    D.scanForMedia = function(V) {
        function T() {
            var aa = [];
            var Y = V.getElementsByTagName("iframe");
            for (var Z = 0; Z < Y.length; Z++) {
                if (m.isMediaIgnored(Y[Z])) {
                    continue
                }
                var ab = m.getAttribute(Y[Z], "src");
                if (ab && ab.indexOf("w.soundcloud.com") > 0) {
                    aa.push(Y[Z])
                }
            }
            return aa
        }

        function U() {
            return "object" === typeof SC && SC && SC.Widget
        }

        function X() {
            if (!U()) {
                return
            }
            var Z = T();
            for (var Y = 0; Y < Z.length; Y++) {
                var aa = m.getAttribute(Z[Y], "src");
                if (aa && aa.indexOf("w.soundcloud.com") > 0) {
                    new D(Z[Y], f.AUDIO)
                }
            }
        }
        var S = T();
        if (S && S.length) {
            if (U()) {
                X()
            } else {
                var R = q.createElement("script");
                R.src = "https://w.soundcloud.com/player/api.js";
                R.onload = X;
                var Q = q.getElementsByTagName("script");
                if (Q && Q.length) {
                    var W = Q[0];
                    W.parentNode.insertBefore(R, W)
                } else {
                    if (q.body) {
                        q.body.appendChild(R)
                    }
                }
            }
        }
        S = null
    };
    c.registerPlayer("html5", M);
    c.registerPlayer("vimeo", p);
    c.registerPlayer("youtube", t);
    c.registerPlayer("jwplayer", J);
    c.registerPlayer("soundcloud", D);

    function y(Q) {
        if ("undefined" !== typeof Q.MediaAnalytics) {
            return
        }
        Q.MediaAnalytics = {
            enableEvents: true,
            enableProgress: true,
            disableTrackEvents: function() {
                this.enableEvents = false
            },
            enableTrackEvents: function() {
                this.enableEvents = true
            },
            isTrackEventsEnabled: function() {
                return a && this.enableEvents
            },
            disableTrackProgress: function() {
                this.enableProgress = false
            },
            enableTrackProgress: function() {
                this.enableProgress = true
            },
            isTrackProgressEnabled: function() {
                return a && this.enableProgress
            }
        };
        Piwik.trigger("MediaAnalytics.TrackerInitialized", [Q])
    }

    function v() {
        if (typeof window === "object" && "function" === typeof C.piwikMediaAnalyticsAsyncInit) {
            C.piwikMediaAnalyticsAsyncInit()
        }
        if (typeof window === "object" && "function" === typeof C.matomoMediaAnalyticsAsyncInit) {
            C.matomoMediaAnalyticsAsyncInit()
        }
        A = true
    }
    var x = false;
    var i = false;

    function g() {
        if (!x && b()) {
            x = true;
            var R = jwplayer();
            if ("object" === typeof R && "function" === typeof R.on) {
                R.on("ready", function(S) {
                    c.scanForMedia(document)
                })
            }
        }
        if (!i && k()) {
            i = true;
            flowplayer(function(T, S) {
                if (T) {
                    T.on("ready", function() {
                        c.scanForMedia(document)
                    });
                    T.on("load", function() {
                        c.scanForMedia(document)
                    })
                }
            });
            var Q = flowplayer();
            if ("object" === typeof Q && "function" === typeof Q.on) {
                Q.on("ready", function() {
                    c.scanForMedia(document)
                });
                Q.on("load", function() {
                    c.scanForMedia(document)
                })
            }
        }
    }

    function K() {
        Piwik.DOM.onReady(function() {
            var Q = P();
            if (!Q || !s(Q) || !Q.length) {
                return
            }
            c.scanForMedia(document);
            g()
        });
        Piwik.DOM.onLoad(function() {
            var Q = P();
            if (!Q || !s(Q) || !Q.length) {
                return
            }
            c.scanForMedia(document);
            g()
        })
    }

    function L() {
        if ("object" === typeof C && "object" === typeof C.Piwik && "object" === typeof C.Piwik.MediaAnalytics) {
            return
        }
        if ("object" === typeof C && !C.Piwik) {
            return
        }
        Piwik.MediaAnalytics = {
            utils: N,
            url: F,
            element: m,
            players: c,
            MediaTracker: j,
            mediaType: f,
            scanForMedia: function(S) {
                c.scanForMedia(S || document)
            },
            setPingInterval: function(S) {
                if (10 > S) {
                    throw new Error("Ping interval needs to be at least ten seconds")
                }
                I = true;
                B = parseInt(S, 10)
            },
            removePlayer: function(S) {
                c.removePlayer(S)
            },
            addPlayer: function(T, S) {
                c.registerPlayer(T, S)
            },
            disableMediaAnalytics: function() {
                a = false
            },
            enableMediaAnalytics: function() {
                a = true
            },
            setMatomoTrackers: function(S) {
                this.setPiwikTrackers(S)
            },
            setPiwikTrackers: function(S) {
                if (S === null) {
                    w = null;
                    return
                }
                if (!s(S)) {
                    S = [S]
                }
                w = S;
                if (A) {
                    K()
                }
            },
            setMediaTitleFallback: function(S) {
                if ("function" !== typeof S) {
                    throw new Error("The mediaTitleFallback needs to be callback function")
                }
                r = S
            },
            getMatomoTrackers: function() {
                return P()
            },
            getPiwikTrackers: function() {
                return P()
            },
            isMediaAnalyticsEnabled: function() {
                return a
            },
            setMaxTrackingTime: function(S) {
                E = parseInt(S, 10) * 1000
            },
            enableDebugMode: function() {
                O = true
            }
        };
        Piwik.addPlugin("MediaAnalytics", {
            unload: function() {
                var T;
                e("tracker intances mediaTrackerInstances");
                for (var S = 0; S < G.length; S++) {
                    T = G[S];
                    if (T && T.timeout) {
                        e("before unload");
                        T.trackUpdate()
                    }
                }
            }
        });
        if (C.Piwik.initialized) {
            var Q = Piwik.getAsyncTrackers();
            var R = 0;
            for (R; R < Q.length; R++) {
                y(Q[R])
            }
            Piwik.on("TrackerSetup", y);
            Piwik.retryMissedPluginCalls();
            v();
            K();
            Piwik.on("TrackerAdded", K)
        } else {
            Piwik.on("TrackerSetup", y);
            Piwik.on("MatomoInitialized", function() {
                v();
                K();
                Piwik.on("TrackerAdded", K)
            })
        }
    }
    if ("object" === typeof C.Piwik) {
        L()
    } else {
        if ("object" !== typeof C.matomoPluginAsyncInit) {
            C.matomoPluginAsyncInit = []
        }
        C.matomoPluginAsyncInit.push(L)
    }
})();

/* END GENERATED: tracker.min.js */


/* GENERATED: tracker.min.js */
/*!!
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * All information contained herein is, and remains the property of InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */
(function() {
    var l = false;
    var q = true;
    var p = null;
    var k = false;
    var j = "FIELD_CHECKABLE";
    var x = "FIELD_SELECTABLE";
    var h = "FIELD_TEXT";
    var n = ["password", "text", "url", "tel", "email", "search", "", null];
    var a = ["color", "date", "datetime", "datetime-local", "month", "number", "range", "time", "week"];
    var b = ["radio", "checkbox"];
    var o = ["button", "submit", "hidden", "reset"];
    var t = 30000;
    var y = [];

    function e() {
        if (l && "undefined" !== typeof console && console && console.debug) {
            console.debug.apply(console, arguments)
        }
    }
    var c = {
        getAttribute: function(A, z) {
            if (A && A.getAttribute && z) {
                return A.getAttribute(z)
            }
            return null
        },
        hasClass: function(A, z) {
            if (!A || !A.className) {
                return false
            }
            return (" " + A.className + " ").indexOf(" " + z + " ") > -1
        },
        hasNodeAttribute: function(A, z) {
            if (A && A.hasAttribute) {
                return A.hasAttribute(z)
            }
            if (A && A.attributes) {
                var B = (typeof A.attributes[z]);
                return B !== "undefined"
            }
            return false
        },
        isIgnored: function(z) {
            if (this.hasNodeAttribute(z, "data-matomo-ignore")) {
                return true
            }
            if (this.hasNodeAttribute(z, "data-piwik-ignore")) {
                return true
            }
            return false
        },
        getTagName: function(z) {
            if (z && z.tagName) {
                return ("" + z.tagName).toLowerCase()
            }
            return null
        },
        findAllFormElements: function(z) {
            if (z && z.querySelectorAll) {
                return z.querySelectorAll("form, [data-piwik-form], [data-matomo-form]")
            }
            return []
        },
        findAllFieldElements: function(z) {
            if (z && z.querySelectorAll) {
                return z.querySelectorAll("input,select,textarea,button,textarea")
            }
            return []
        },
        findFormTrackerInstance: function(A, z) {
            if ("undefined" === typeof z) {
                z = 100
            }
            if (z <= 0 || !A) {
                return null
            }
            if (A.formTrackerInstance) {
                return A.formTrackerInstance
            }
            if (A.parentNode) {
                return this.findFormTrackerInstance(A.parentNode, --z)
            }
        }
    };
    var u = {
        isArray: function(z) {
            return typeof z === "object" && z !== null && typeof z.length === "number"
        },
        indexOfArray: function(B, A) {
            if (!B) {
                return -1
            }
            if (B.indexOf) {
                return B.indexOf(A)
            }
            if (!this.isArray(B)) {
                return -1
            }
            for (var z = 0; z < B.length; z++) {
                if (B[z] === A) {
                    return z
                }
            }
            return -1
        },
        getCurrentTime: function() {
            return new Date().getTime()
        },
        isNumber: function(z) {
            return !isNaN(z)
        },
        generateUniqueId: function() {
            var C = "";
            var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var B = A.length;
            for (var z = 0; z < 6; z++) {
                C += A.charAt(Math.floor(Math.random() * B))
            }
            return C
        },
        paramsToQueryString: function(B) {
            if (!B) {
                B = {}
            }
            var A = "";
            for (var z in B) {
                if (Object.prototype.hasOwnProperty.call(B, z)) {
                    if (B[z] === null) {
                        continue
                    }
                    A += z + "=" + encodeURIComponent(B[z]) + "&"
                }
            }
            return A
        }
    };
    var g = {
        getPiwikTrackers: function() {
            if (null === p) {
                if ("object" === typeof Piwik && Piwik.getAsyncTrackers) {
                    return Piwik.getAsyncTrackers()
                }
            }
            if (u.isArray(p)) {
                return p
            }
            return []
        },
        trackParams: function(E, D) {
            if (!q) {
                return
            }
            var B = u.paramsToQueryString(E);
            if (B) {
                if (B.substr(-1) !== "&") {
                    B += "&"
                }
                B += "ca=1"
            }
            if (!B || B === "") {
                return
            }
            var z = this.getPiwikTrackers();
            if (z && z.length) {
                var A = 0,
                    C;
                for (A; A < z.length; A++) {
                    C = z[A];
                    if (D && 500 === C.getLinkTrackingTimer() && C.setLinkTrackingTimer) {
                        C.setLinkTrackingTimer(650)
                    }
                    if (C && (!C.FormAnalytics || C.FormAnalytics.isEnabled())) {
                        C.queueRequest(B)
                    }
                }
            }
            if (l) {
                e("trackProgress: " + Piwik.JSON.stringify(E))
            }
        }
    };

    function f() {
        if (typeof window === "object" && "function" === typeof window.piwikFormAnalyticsAsyncInit) {
            window.piwikFormAnalyticsAsyncInit()
        }
        if (typeof window === "object" && "function" === typeof window.matomoFormAnalyticsAsyncInit) {
            window.matomoFormAnalyticsAsyncInit()
        }
        k = true
    }

    function s(z) {
        this.reset();
        this.fields = [];
        this.firstFieldEngagementDate = null;
        this.lastFieldEngagementDate = null;
        this.hesitationTimeTracked = false;
        this.formStartTracked = false;
        this.node = z;
        this.formId = c.getAttribute(z, "id");
        this.formName = c.getAttribute(z, "data-matomo-name");
        if (!this.formName) {
            this.formName = c.getAttribute(z, "data-piwik-name")
        }
        if (!this.formName) {
            this.formName = c.getAttribute(z, "name")
        }
        this.entryFieldName = "";
        this.exitFieldName = "";
        this.lastFocusedFieldName = "";
        this.fieldsWithUpdates = [];
        this.fieldNodes = [];
        this.initialFormViewLoggedWithTrackers = [];
        this.trackingTimeout = null;
        this.timeLastTrackingRequest = 0;
        this.timeOffWindowBeforeEngagement = 0;
        this.timeOffWindowSinceEngagement = 0;
        Piwik.DOM.addEventListener(window, "focus", (function(A) {
            return function() {
                if (!A.timeWindowBlur) {
                    return
                }
                var B = u.getCurrentTime() - A.timeWindowBlur;
                A.timeWindowBlur = null;
                if (B < 0) {
                    B = 0
                }
                if (A.timeLastTrackingRequest) {
                    A.timeLastTrackingRequest = A.timeLastTrackingRequest + B
                }
                if (A.firstFieldEngagementDate) {
                    A.timeOffWindowSinceEngagement += B;
                    e("time off engaged " + A.timeOffWindowSinceEngagement)
                } else {
                    A.timeOffWindowBeforeEngagement += B;
                    e("time off not engaged " + A.timeOffWindowBeforeEngagement)
                }
            }
        })(this));
        Piwik.DOM.addEventListener(window, "blur", (function(A) {
            return function() {
                A.timeWindowBlur = u.getCurrentTime();
                e("window blur")
            }
        })(this));
        Piwik.DOM.addEventListener(z, "submit", (function(A) {
            return function() {
                e("form submit");
                A.trackFormSubmit()
            }
        })(this))
    }
    s.prototype.reset = function() {
        this.detectionDate = u.getCurrentTime();
        this.formViewId = u.generateUniqueId();
        this.fieldsWithUpdates = [];
        this.firstFieldEngagementDate = null;
        this.lastFieldEngagementDate = null;
        this.timeOffWindowSinceEngagement = 0;
        this.timeOffWindowBeforeEngagement = 0;
        this.formStartTracked = false;
        if (this.fields && this.fields.length) {
            for (var z = 0; z < this.fields.length; z++) {
                this.fields[z].resetOnFormSubmit()
            }
        }
    };
    s.prototype.trackFormSubmit = function() {
        this.setEngagedWithForm();
        var z = this.lastFieldEngagementDate - this.firstFieldEngagementDate - this.timeOffWindowSinceEngagement;
        if (z < 0) {
            z = 0
        }
        var A = {
            fa_su: 1,
            fa_tts: z
        };
        this.sendUpdate(this.fields, A, true);
        this.reset()
    };
    s.prototype.trackFormConversion = function() {
        if (!this.timeLastTrackingRequest) {
            this.sendUpdate([], {
                fa_co: 1
            });
            return
        }
        var z = (u.getCurrentTime() - this.timeLastTrackingRequest) / 1000;
        if (z < 2) {
            var A = this;
            setTimeout(function() {
                A.sendUpdate([], {
                    fa_co: 1
                })
            }, 800)
        } else {
            this.sendUpdate([], {
                fa_co: 1
            })
        }
    };
    s.prototype.shouldBeTracked = function() {
        return !!this.fields && !!this.fields.length
    };
    s.prototype.trackInitialFormView = function() {
        if (!this.initialFormViewLoggedWithTrackers || !this.initialFormViewLoggedWithTrackers.length) {
            this.initialFormViewLoggedWithTrackers = g.getPiwikTrackers();
            this.sendUpdate([], {
                fa_fv: "1"
            })
        }
    };
    s.prototype.setEngagedWithForm = function(z) {
        this.lastFieldEngagementDate = u.getCurrentTime();
        if (!this.firstFieldEngagementDate) {
            this.firstFieldEngagementDate = this.lastFieldEngagementDate
        }
    };
    s.prototype.trackFieldUpdate = function(z) {
        if (u.indexOfArray(this.fieldsWithUpdates, z) === -1) {
            this.fieldsWithUpdates.push(z)
        }
        this.scheduleSendUpdate()
    };
    s.prototype.scheduleSendUpdate = function() {
        if (this.trackingTimeout) {
            clearTimeout(this.trackingTimeout);
            this.trackingTimeout = null
        }
        var z = this;
        this.trackingTimeout = setTimeout(function() {
            var A = z.fieldsWithUpdates;
            z.fieldsWithUpdates = [];
            z.sendUpdate(A)
        }, t)
    };
    s.prototype.sendUpdate = function(C, F, E) {
        if (!this.shouldBeTracked()) {
            return
        }
        if (this.trackingTimeout) {
            clearTimeout(this.trackingTimeout);
            this.trackingTimeout = null
        }
        if (!C) {
            C = []
        }
        var z = [];
        for (var B = 0; B < C.length; B++) {
            z.push(C[B].getTrackingParams())
        }
        var D = {
            fa_vid: this.formViewId,
            fa_id: this.formId,
            fa_name: this.formName
        };
        if (this.entryFieldName) {
            D.fa_ef = this.entryFieldName
        }
        if (this.exitFieldName) {
            D.fa_lf = this.exitFieldName
        }
        if (z.length) {
            D.fa_fields = Piwik.JSON.stringify(z)
        }
        if (this.firstFieldEngagementDate) {
            if (!this.formStartTracked) {
                D.fa_st = "1";
                this.formStartTracked = true
            }
            if (!this.hesitationTimeTracked) {
                D.fa_ht = this.firstFieldEngagementDate - this.detectionDate - this.timeOffWindowBeforeEngagement;
                this.hesitationTimeTracked = true
            }
            if (this.lastFieldEngagementDate && this.timeLastTrackingRequest) {
                D.fa_ts = this.lastFieldEngagementDate - this.timeLastTrackingRequest;
                if (D.fa_ts < 0) {
                    D.fa_ts = 0
                }
            } else {
                if (this.lastFieldEngagementDate && !this.timeLastTrackingRequest) {
                    D.fa_ts = this.lastFieldEngagementDate - this.firstFieldEngagementDate - this.timeOffWindowSinceEngagement;
                    if (D.fa_ts < 0) {
                        D.fa_ts = 0
                    }
                }
            }
            this.timeLastTrackingRequest = u.getCurrentTime()
        }
        if (F) {
            for (var A in F) {
                if (Object.prototype.hasOwnProperty.call(F, A)) {
                    D[A] = F[A]
                }
            }
        }
        if ("undefined" === typeof E) {
            E = false
        }
        g.trackParams(D, E)
    };
    s.prototype.scanForFields = function() {
        var C, B = 0,
            F, E, A;
        E = c.findAllFieldElements(this.node);
        for (C = 0; C < E.length; C++) {
            if (!E[C]) {
                continue
            }
            if (this.fields && this.fields.length && this.fields.length > 2500) {
                continue
            }
            A = E[C];
            if (c.isIgnored(A) || u.indexOfArray(this.fieldNodes, A) > -1) {
                continue
            }
            var z = c.getTagName(A);
            var D = c.getAttribute(A, "type");
            if (u.indexOfArray(o, D) !== -1) {
                continue
            } else {
                if ("button" === z) {
                    continue
                }
            }
            if (z === "input" && !D) {
                D = "text"
            }
            var G = c.getAttribute(A, "data-matomo-name");
            if (!G) {
                G = c.getAttribute(A, "data-piwik-name");
                if (!G) {
                    G = c.getAttribute(A, "name");
                    if (!G) {
                        G = c.getAttribute(A, "id");
                        if (!G) {
                            continue
                        }
                    }
                }
            }
            this.fieldNodes.push(A);
            var H = false;
            for (B = 0; B < this.fields.length; B++) {
                if (this.fields[B] && this.fields[B].fieldName === G) {
                    H = true;
                    this.fields[B].addNode(A);
                    break
                }
            }
            if (!H) {
                F = new v(this, E[C], z, D, G);
                this.addFormField(F)
            }
        }
    };
    s.prototype.addFormField = function(z) {
        this.fields.push(z)
    };

    function v(D, C, B, A, E) {
        this.discoveredDate = u.getCurrentTime();
        this.tracker = D;
        this.timespent = 0;
        this.hesitationtime = 0;
        this.nodes = [];
        this.tagName = B;
        this.fieldName = E;
        this.fieldType = A;
        this.startFocus = null;
        this.timeLastChange = null;
        this.numChanges = 0;
        this.numFocus = 0;
        this.numDeletes = 0;
        this.numCursor = 0;
        this.canCountChange = true;
        this.isFocusedCausedAuto = c.hasNodeAttribute(C, "autofocus");
        if (this.tagName === "select") {
            this.category = x
        } else {
            if (this.tagName === "textarea") {
                this.category = h
            } else {
                if (u.indexOfArray(b, this.fieldType) !== -1) {
                    this.category = j
                } else {
                    if (u.indexOfArray(a, this.fieldType) !== -1) {
                        this.category = x
                    } else {
                        this.category = h
                    }
                }
            }
        }
        this.addNode(C);
        var z = (C === document.activeElement);
        if (z) {
            this.onFocus()
        }
    }
    v.prototype.addNode = function(A) {
        this.nodes.push(A);

        function z(D, B, F) {
            if (D && "object" === typeof tinymce && "function" === typeof tinymce.get && c.getTagName(D) === "textarea" && c.getAttribute(D, "id")) {
                var E = c.getAttribute(D, "id");
                var C = tinymce.get(E);
                if (C) {
                    C.on(B, F);
                    return
                }
            } else {
                if (D && "function" === typeof jQuery && c.getTagName(D) === "select" && c.hasClass(D, "select2-hidden-accessible") && D.nextSibling) {
                    if (B === "focus") {
                        B = "select2:open"
                    } else {
                        if (B === "blur") {
                            B = "select2:close"
                        }
                    }
                    jQuery(D).on(B, F);
                    return
                }
            }
            Piwik.DOM.addEventListener(D, B, F)
        }
        z(A, "focus", (function(B) {
            return function(C) {
                if (B.isAutoFocus()) {
                    e("field autofocus " + B.fieldName)
                } else {
                    e("field focus " + B.fieldName)
                }
                B.onFocus()
            }
        })(this));
        z(A, "blur", (function(B) {
            return function() {
                e("field blur " + B.fieldName);
                B.onBlur()
            }
        })(this));
        if (this.category === h) {
            z(A, "keyup", (function(B) {
                return function(E) {
                    var D = E.which || E.keyCode;
                    var C = [9, 16, 17, 18, 20, 27, 91];
                    if ((D && u.indexOfArray(C, D) !== -1) || E.isCtrlKey) {
                        return
                    }
                    if (D >= 37 && D <= 40) {
                        if (!B.isBlank()) {
                            B.numCursor++;
                            B.tracker.trackFieldUpdate(B)
                        }
                        return
                    }
                    if (D == 8 || D == 46) {
                        if (!B.isBlank()) {
                            B.numDeletes++;
                            B.tracker.trackFieldUpdate(B)
                        }
                        return
                    }
                    e("field text keyup " + B.fieldName);
                    B.onChange()
                }
            })(this));
            z(A, "paste", (function(B) {
                return function() {
                    e("field text paste " + B.fieldName);
                    B.onChange()
                }
            })(this))
        } else {
            z(A, "change", (function(B) {
                return function() {
                    e("field change " + B.fieldName);
                    B.onChange()
                }
            })(this))
        }
    };
    v.prototype.resetOnFormSubmit = function() {
        this.hesitationtime = 0;
        this.timespent = 0;
        this.numFocus = 0;
        this.numDeletes = 0;
        this.numCursor = 0;
        this.numChanges = 0;
        this.startFocus = null;
        this.timeLastChange = null;
        this.canCountChange = true;
        this.hasChangedValueSinceFocus = false;
        this.isFocusedCausedAuto = false
    };
    v.prototype.isAutoFocus = function() {
        if (!this.isFocusedCausedAuto) {
            return false
        }
        if (this.tracker.entryFieldName && this.tracker.entryFieldName !== this.fieldName) {
            this.isFocusedCausedAuto = false
        }
        if (this.tracker.exitFieldName && this.tracker.exitFieldName !== this.fieldName) {
            this.isFocusedCausedAuto = false
        }
        return this.isFocusedCausedAuto
    };
    v.prototype.getTrackingParams = function() {
        return {
            fa_fts: this.getTimeSpent(),
            fa_fht: this.getHesitationTime(),
            fa_fb: this.isBlank(),
            fa_fn: this.fieldName,
            fa_fch: this.numChanges,
            fa_ff: this.numFocus,
            fa_fd: this.numDeletes,
            fa_fcu: this.numCursor,
            fa_ft: this.fieldType || this.tagName,
            fa_fs: this.getFieldSize()
        }
    };
    v.prototype.isBlank = function() {
        if (this.category === j) {
            for (var z = 0; z < this.nodes.length; z++) {
                if (this.nodes[z] && this.nodes[z].checked) {
                    return false
                }
            }
            return true
        }
        if (!this.nodes[0]) {
            return false
        }
        var A = this.nodes[0];
        if ("undefined" === typeof A.value) {
            return true
        }
        var B = A.value;
        if (null === B || false === B || "" === B) {
            return true
        }
        return String(B).length === 0
    };
    v.prototype.getFieldSize = function() {
        if (this.category === h) {
            if (this.nodes[0] && this.nodes[0].value) {
                return String(this.nodes[0].value).length
            } else {
                return 0
            }
        } else {
            return -1
        }
    };
    v.prototype.getTimeSpent = function() {
        if (this.numChanges && !this.timeSpent) {
            this.timeSpent = 1
        }
        if (!this.startFocus || this.isAutoFocus()) {
            return this.timespent
        }
        if (this.timeLastChange) {
            var z = this.timeLastChange - this.startFocus;
            if (z < 0) {
                z = 0
            }
            return this.timespent + z
        }
        return this.timespent + u.getCurrentTime() - this.startFocus
    };
    v.prototype.getHesitationTime = function() {
        if (this.numChanges || !this.startFocus || this.isAutoFocus()) {
            return this.hesitationtime
        }
        var z = u.getCurrentTime();
        return this.hesitationtime + (z - this.startFocus)
    };
    v.prototype.onFocus = function() {
        this.startFocus = u.getCurrentTime();
        var z = this.fieldName !== this.tracker.lastFocusedFieldName;
        if (z && this.tracker.lastFocusedFieldName) {
            this.isFocusedCausedAuto = false
        }
        this.timeLastChange = null;
        this.hasChangedValueSinceFocus = false;
        this.tracker.lastFocusedFieldName = this.fieldName;
        if (z) {
            this.canCountChange = true
        }
        if (z && !this.isAutoFocus()) {
            this.numFocus++;
            this.tracker.setEngagedWithForm();
            this.tracker.trackFieldUpdate(this);
            this.tracker.exitFieldName = this.fieldName;
            this.tracker.scheduleSendUpdate()
        }
    };
    v.prototype.onBlur = function() {
        if (!this.startFocus) {
            return
        }
        if (this.hasChangedValueSinceFocus) {
            if (this.timeLastChange && this.startFocus) {
                this.timespent += (this.timeLastChange - this.startFocus)
            }
            this.timeLastChange = null;
            this.startFocus = null;
            return
        }
        if (!this.isAutoFocus()) {
            var z = u.getCurrentTime();
            this.timespent += z - this.startFocus;
            if (!this.numChanges) {
                this.hesitationtime += z - this.startFocus
            }
            this.tracker.setEngagedWithForm();
            this.tracker.trackFieldUpdate(this)
        }
        this.startFocus = null
    };
    v.prototype.onChange = function() {
        this.timeLastChange = u.getCurrentTime();
        if (this.isAutoFocus()) {
            this.startFocus = this.timeLastChange
        } else {
            if (!this.startFocus) {
                return
            }
        }
        this.isFocusedCausedAuto = false;
        this.hasChangedValueSinceFocus = true;
        if (!this.numChanges) {
            this.hesitationtime += this.timeLastChange - this.startFocus
        }
        if (this.canCountChange) {
            this.numChanges++;
            this.canCountChange = false
        }
        if (!this.tracker.entryFieldName) {
            this.tracker.entryFieldName = this.fieldName
        }
        this.tracker.setEngagedWithForm();
        this.tracker.trackFieldUpdate(this)
    };

    function w(B, z) {
        if (!q) {
            return
        }
        if (!document.querySelectorAll) {
            return
        }
        var A;
        if (B && B.formTrackerInstance) {
            A = B.formTrackerInstance;
            A.scanForFields()
        } else {
            if (!c.isIgnored(B)) {
                A = new s(B);
                A.scanForFields();
                y.push(A);
                B.formTrackerInstance = A
            }
        }
        if (z && A && A.shouldBeTracked()) {
            A.trackInitialFormView()
        }
        return A
    }

    function d(B) {
        if ("undefined" === typeof B) {
            B = document
        }
        var z = c.findAllFormElements(B);
        for (var A = 0; A < z.length; A++) {
            w(z[A], true)
        }
    }

    function i() {
        Piwik.DOM.onReady(function() {
            var z = g.getPiwikTrackers();
            if (!z || !u.isArray(z) || !z.length) {
                return
            }
            d(document)
        });
        Piwik.DOM.onLoad(function() {
            var z = g.getPiwikTrackers();
            if (!z || !u.isArray(z) || !z.length) {
                return
            }
            d(document)
        })
    }

    function m(z) {
        if ("undefined" !== typeof z.FormAnalytics) {
            return
        }
        z.FormAnalytics = {
            enabled: true,
            enable: function() {
                this.enabled = true
            },
            disable: function() {
                this.enabled = false
            },
            isEnabled: function() {
                return q && this.enabled
            }
        }
    }

    function r() {
        if ("object" === typeof window && "object" === typeof window.Piwik && "object" === typeof window.Piwik.FormAnalytics) {
            return
        }
        if ("object" === typeof window && !window.Piwik) {
            return
        }
        Piwik.FormAnalytics = {
            element: c,
            utils: u,
            tracking: g,
            FormField: v,
            FormTracker: s,
            disableFormAnalytics: function() {
                q = false
            },
            enableFormAnalytics: function() {
                q = true
            },
            isFormAnalyticsEnabled: function() {
                return q
            },
            setMatomoTrackers: function(z) {
                this.setPiwikTrackers(z)
            },
            setPiwikTrackers: function(z) {
                if (z === null) {
                    p = null;
                    return
                }
                if (!u.isArray(z)) {
                    z = [z]
                }
                p = z;
                if (k) {
                    i()
                }
            },
            setTrackingTimer: function(z) {
                if (z < 5) {
                    throw new Error("Delay needs to be at least five")
                }
                t = parseInt(z, 10)
            },
            enableDebugMode: function() {
                l = true
            },
            scanForForms: d,
            trackFormSubmit: function(A) {
                var z = c.findFormTrackerInstance(A);
                if (z) {
                    z.trackFormSubmit()
                }
            },
            trackFormConversion: function(z, B) {
                if ("string" === typeof z || "string" === typeof B) {
                    g.trackParams({
                        fa_vid: u.generateUniqueId(),
                        fa_id: B,
                        fa_name: z,
                        fa_co: 1
                    });
                    return
                }
                var A = c.findFormTrackerInstance(z);
                if (A) {
                    A.trackFormConversion()
                }
            },
            trackForm: function(z) {
                return w(z, true)
            }
        };
        Piwik.addPlugin("FormAnalytics", {
            log: function(E) {
                if (!q || !E || !E.tracker) {
                    return ""
                }
                var B = E.tracker;
                if (B.FormAnalytics && !B.FormAnalytics.isEnabled()) {
                    return ""
                }
                var z = c.findAllFormElements(document);
                var D = "";
                for (var A = 0; A < z.length; A++) {
                    var C = w(z[A], false);
                    if (C && C.shouldBeTracked() && u.indexOfArray(C.initialFormViewLoggedWithTrackers, B) === -1) {
                        C.initialFormViewLoggedWithTrackers.push(B);
                        if (C.formViewId !== null) {
                            D += "&fa_fp[" + A + "][fa_vid]=" + encodeURIComponent(C.formViewId)
                        }
                        if (C.formId !== null) {
                            D += "&fa_fp[" + A + "][fa_id]=" + encodeURIComponent(C.formId)
                        }
                        if (C.formName !== null) {
                            D += "&fa_fp[" + A + "][fa_name]=" + encodeURIComponent(C.formName)
                        }
                        D += "&fa_fp[" + A + "][fa_fv]=1"
                    }
                }
                if (D) {
                    e("sending request with pageview" + D);
                    return "&fa_pv=1" + D
                }
                return ""
            },
            unload: function() {
                var A;
                for (var z = 0; z < y.length; z++) {
                    A = y[z];
                    if (A && A.trackingTimeout) {
                        e("before unload");
                        clearTimeout(A.trackingTimeout);
                        A.sendUpdate(A.fieldsWithUpdates, {}, true)
                    }
                }
            }
        });
        if (window.Piwik.initialized) {
            Piwik.on("TrackerSetup", m);
            Piwik.retryMissedPluginCalls();
            f();
            i();
            Piwik.on("TrackerAdded", function() {
                setTimeout(i, 700)
            })
        } else {
            Piwik.on("TrackerSetup", m);
            Piwik.on("MatomoInitialized", function() {
                f();
                i();
                Piwik.on("TrackerAdded", function() {
                    setTimeout(i, 700)
                })
            })
        }
    }
    if ("object" === typeof window.Piwik) {
        r()
    } else {
        if ("object" !== typeof window.matomoPluginAsyncInit) {
            window.matomoPluginAsyncInit = []
        }
        window.matomoPluginAsyncInit.push(r)
    }
})();

/* END GENERATED: tracker.min.js */


/* GENERATED: tracker.min.js */
/*!!
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * All information contained herein is, and remains the property of InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */
(function() {
    var a = "original";
    var n = false;
    var i = true;
    var h = "PiwikAbTesting";

    function m() {
        if (n && "undefined" !== typeof console && console && console.debug) {
            console.debug.apply(console, arguments)
        }
    }

    function b(o) {
        m(o);
        if (typeof k !== "undefined" && k && k.THROW_ERRORS) {
            throw new Error(o)
        }
    }
    var j = {
        isItpBrowser: function() {
            return navigator.vendor && navigator.vendor.indexOf("Apple") > -1 && navigator.userAgent && navigator.userAgent.indexOf("CriOS") === -1 && navigator.userAgent.indexOf("FxiOS") === -1
        },
        getRandomNumber: function(p, o) {
            return parseInt(Math.round(Math.random() * (o - p) + p, 10))
        },
        hasLocalStorage: function() {
            if (typeof localStorage === "undefined") {
                return false
            }
            var p = new Date();
            var o;
            try {
                localStorage.setItem(p, p);
                o = localStorage.getItem(p) == p;
                localStorage.removeItem(p);
                return o && localStorage && typeof JSON === "object" && typeof JSON.parse === "function"
            } catch (q) {
                return false
            }
        },
        decodeSafe: function(p) {
            try {
                return window.decodeURIComponent(p)
            } catch (o) {
                return window.unescape(p)
            }
        },
        getQueryParameter: function(o, s) {
            o = ("" + o).toLowerCase();
            s = ("" + s).toLowerCase();
            var r = new RegExp("[?&]" + s + "(=([^&#]*)|&|#|$)", "i");
            var q = r.exec(o);
            if (!q) {
                return null
            }
            if (!q[2]) {
                return ""
            }
            var p = q[2].replace(/\+/g, " ");
            return this.decodeSafe(p)
        },
        removeQueryAndHashFromUrl: function(p) {
            var o = p.indexOf("#");
            if (o !== -1) {
                p = p.substr(0, o)
            }
            var q = p.indexOf("?");
            if (q !== -1) {
                p = p.substr(0, q)
            }
            return p
        },
        removeProtocol: function(p) {
            var o = ("" + p).indexOf("://");
            if (o !== -1 && o < 9) {
                return p.substr(o)
            }
            return p
        },
        removeWwwSubdomain: function(o) {
            return ("" + o).replace("://www.", "://")
        },
        getVariationTest: function(o) {
            if (o && o.search) {
                var p = j.getQueryParameter(o.search, "pk_ab_test");
                if (p) {
                    m("requested variation test " + p);
                    return String(p).split(",")
                }
            }
            return []
        }
    };
    var d = {
        local: function() {
            var p = localStorage.getItem(h) || "{}";
            if (p && p !== "{}") {
                localStorage.setItem(h, p)
            }
            var o = JSON.parse(p) || {};
            this.set = function(s, q, r) {
                q = s + ":" + q;
                o[q] = r;
                localStorage.setItem(h, JSON.stringify(o))
            };
            this.get = function(r, q) {
                q = r + ":" + q;
                if (o && q in o) {
                    return o[q]
                }
            };
            this.clearAll = function() {
                o = {};
                localStorage.setItem(h, JSON.stringify({}))
            }
        },
        cookies: function() {
            this.set = function(s, q, r) {
                q = h + ":" + s + ":" + q;
                var t = 365;
                var p = new Date();
                p.setTime(p.getTime() + (t * 24 * 60 * 60 * 1000));
                var o = "; expires=" + p.toGMTString();
                document.cookie = q + "=" + encodeURIComponent(r) + "; expires=" + o + "; path=/;SameSite=Lax"
            };
            this.get = function(q, p) {
                p = h + ":" + q + ":" + p;
                var r = p + "=";
                var t = document.cookie.split(";");
                for (var o = 0; o < t.length; o++) {
                    var s = t[o];
                    s = ("" + s).replace(/^\s+/, "");
                    if (s.indexOf(r) == 0) {
                        return decodeURIComponent(s.substring(r.length, s.length))
                    }
                }
            };
            this.clearAll = function() {}
        }
    };
    var e = {
        location: window.location,
        matchesTarget: function(o) {
            if (!o || !o.type || !o.attribute) {
                return true
            }
            var p = e._getValueForAttribute(o);
            return e._matchesAttribute(o, p)
        },
        matchesTargets: function(s, q) {
            if (q && q.length) {
                var o;
                for (var p = 0; p < q.length; p++) {
                    o = q[p];
                    if (this.matchesTarget(o)) {
                        return false
                    }
                }
            }
            if (s && s.length) {
                var r;
                for (var p = 0; p < s.length; p++) {
                    r = s[p];
                    if (this.matchesTarget(r)) {
                        return true
                    }
                }
                return false
            }
            return true
        },
        matchesDate: function(q, p, r) {
            var s = q.getTime() + (q.getTimezoneOffset() * 60000);
            try {
                var u = new Date(p)
            } catch (t) {
                if (p) {
                    b("Invalid startDateTime given")
                }
            }
            try {
                var o = new Date(r)
            } catch (t) {
                if (r) {
                    b("Invalid startDateTime given")
                }
            }
            if (p && isNaN && isNaN(u.getTime())) {
                b("Invalid startDateTime given")
            }
            if (r && isNaN && isNaN(o.getTime())) {
                b("Invalid endDateTime given")
            }
            if (p && s < (u.getTime() + (u.getTimezoneOffset() * 60000))) {
                return false
            }
            if (r && s > (o.getTime() + (o.getTimezoneOffset() * 60000))) {
                return false
            }
            return true
        },
        _getValueForAttribute: function(p) {
            var o = ("" + p.attribute).toLowerCase();
            switch (o) {
                case k.TARGET_ATTRIBUTE_URL:
                    return j.decodeSafe(this.location.href);
                case k.TARGET_ATTRIBUTE_PATH:
                    return j.decodeSafe(this.location.pathname);
                case k.TARGET_ATTRIBUTE_URLPARAM:
                    return j.getQueryParameter(this.location.search, p.value)
            }
        },
        _matchesAttribute: function(q, o) {
            var p = ("" + q.attribute).toLowerCase();
            switch (p) {
                case k.TARGET_ATTRIBUTE_URL:
                case k.TARGET_ATTRIBUTE_PATH:
                    return this._matchesTargetValue(o, q.type, q.inverted, q.value);
                case k.TARGET_ATTRIBUTE_URLPARAM:
                    return this._matchesTargetValue(o, q.type, q.inverted, q.value2);
                default:
                    b("Invalid target attribute")
            }
            return false
        },
        _matchesTargetValue: function(q, p, s, o) {
            var r = false;
            var s = !!s && s !== "0";
            if ("string" === typeof q) {
                q = q.toLowerCase()
            }
            if ("string" === typeof o && p !== "regexp") {
                o = o.toLowerCase()
            }
            switch (p) {
                case k.TARGET_TYPE_ANY:
                    r = true;
                    break;
                case k.TARGET_TYPE_EXISTS:
                    if (typeof q !== "undefined" && q !== null) {
                        r = true
                    }
                    break;
                case k.TARGET_TYPE_EQUALS_SIMPLE:
                    if (q && q === String(o)) {
                        r = true
                    }
                    q = j.removeQueryAndHashFromUrl(q);
                    q = j.removeProtocol(q);
                    o = j.removeProtocol(o);
                    q = j.removeWwwSubdomain(q);
                    o = j.removeWwwSubdomain(o);
                    if (q && (q === String(o) || q + "/" === String(o) || q === "/" + o || q === o + "/" || q === "/" + o + "/")) {
                        r = true
                    }
                    break;
                case k.TARGET_TYPE_EQUALS_EXACTLY:
                    if (q && q === String(o)) {
                        r = true
                    }
                    if (q && q.indexOf("://") > 0 && q.charAt(q.length - 1) === "/" && 3 === (q.split("/").length - 1) && q === (o + "/")) {
                        r = true
                    }
                    if (o && o.indexOf("://") > 0 && o.charAt(o.length - 1) === "/" && 3 === (o.split("/").length - 1) && o === (q + "/")) {
                        r = true
                    }
                    break;
                case k.TARGET_TYPE_CONTAINS:
                    if (q && q.indexOf(String(o)) !== -1) {
                        r = true
                    }
                    break;
                case k.TARGET_TYPE_STARTS_WITH:
                    if (q && q.indexOf(String(o)) === 0) {
                        r = true
                    }
                    break;
                case k.TARGET_TYPE_REGEXP:
                    if (new RegExp(o).test(q)) {
                        r = true
                    }
                    break;
                default:
                    b("Invalid target type given")
            }
            if (s) {
                return !r
            }
            return r
        }
    };
    var k = function(p) {
        this.options = p ? p : {};
        m("creating experiment with options", p);
        if (!this.options.name) {
            b('Missing experiment name in options. Use eg: new PiwikAbTesting.Experiment({name: "MyName"})')
        }
        if (!this.options.variations) {
            b('Missing "variations" option. Use eg: new PiwikAbTesting.Experiment({variations: [{...}, {...}]})')
        }
        if (typeof this.options.variations !== "object" || !this.options.variations.length) {
            b('"variations" has to be an array')
        }
        var q;
        for (q = 0; q < this.options.variations.length; q++) {
            if (typeof this.options.variations[q] !== "object") {
                b("Each variation has to be an object")
            }
            if (!this.options.variations[q].name) {
                b("Missing variation name")
            }
            if (typeof this.options.variations[q].activate !== "function") {
                b('A variation does not implement the "activate" method' + JSON.stringify(p))
            }
        }
        if (this.options.trigger && typeof this.options.trigger !== "function") {
            b('The "trigger" option is not a function')
        }
        if (this.options.matomoTracker && !this.options.piwikTracker) {
            this.options.piwikTracker = this.options.matomoTracker
        }
        if (this.options.piwikTracker) {
            if (typeof this.options.piwikTracker !== "object") {
                b("The Matomo tracker must be an instance of Piwik")
            }
            if (!this.options.piwikTracker.trackEvent) {
                b("The Matomo instance does not implement the trackEvent method. Maybe a wrong Matomo instance is based as option?")
            }
            if (!this.options.piwikTracker.trackGoal) {
                b("The Matomo instance does not implement the trackGoal method. Maybe a wrong Matomo instance is based as option?")
            }
        }
        if (this.options.percentage && this.options.percentage < 0 || this.options.percentage > 100) {
            b("percentage has to be between 0 and 100")
        }
        this.name = null;
        this.variations = null;
        this.includedTargets = null;
        this.excludedTargets = null;
        this.startDateTime = null;
        this.endDateTime = null;
        this.percentage = 100;
        this.piwikTracker = null;
        this.trigger = function() {
            return true
        };
        this._cacheForcedVariationName = null;
        if (j.hasLocalStorage()) {
            m("using local storage");
            this.storage = new d.local()
        } else {
            m("using cookies storage");
            this.storage = new d.cookies()
        }
        var o;
        for (o in this.options) {
            if (Object.prototype.hasOwnProperty.call(this.options, o)) {
                this[o] = this.options[o]
            }
        }
        this._track = function(u, t) {
            if (this.piwikTracker) {
                this.piwikTracker[u].apply(this.piwikTracker, t)
            } else {
                if (typeof window._paq === "undefined") {
                    window._paq = []
                }
                t.unshift(u);
                window._paq.push(t)
            }
            m("sent tracking request", u, t)
        };
        this.trackUsedVariation = function(t) {
            this._track("trackEvent", ["abtesting", this.name, t])
        };
        this.trackGoal = function(t) {
            if (t) {
                this._track("trackGoal", [t])
            }
        };
        this._getVariationByName = function(u) {
            u = ("" + u).toLowerCase();
            for (var t = 0; t < this.variations.length; t++) {
                if (("" + this.variations[t].name).toLowerCase() === u) {
                    return this.variations[t]
                }
            }
        };
        this._makeEvent = function(u) {
            var t = this;
            var v = function(w) {
                w()
            };
            if ("undefined" !== typeof Piwik && "undefined" !== typeof Piwik.DOM && Piwik.DOM.onReady) {
                v = Piwik.DOM.onReady
            }
            return {
                type: "activate",
                experiment: this,
                onReady: v,
                redirect: function(x) {
                    var w = "pk_abe=" + encodeURIComponent(t.name) + "&pk_abv=" + encodeURIComponent(u.name);
                    if (x && (x.indexOf("?") !== -1)) {
                        x += "&" + w
                    } else {
                        x += "?" + w
                    }
                    var z = Piwik.getAsyncTrackers();
                    for (var y = 0; y < z.length; y++) {
                        z[y].trackPageView = function() {};
                        z[y].trackEvent = function() {};
                        z[y].trackGoal = function() {}
                    }
                    if (window.location.href === x) {
                        return
                    }
                    window.location.replace(x)
                }
            }
        };
        this.forceVariation = function(w) {
            this._cacheForcedVariationName = w;
            m(this.name, "forcing variation", w);
            var u = this._getVariationByName(w);
            var t = this.storage.set("variation", this.name, w);
            if (u && u.activate) {
                var v = this._makeEvent(u);
                u.activate.apply(u, [v])
            }
            this.trackUsedVariation(w);
            return t
        };
        this.getActivatedVariationName = function() {
            var t;
            if (this._cacheForcedVariationName) {
                t = this._cacheForcedVariationName
            } else {
                t = this.storage.get("variation", this.name)
            }
            if (this._getVariationByName(t)) {
                return t
            }
        };
        this._doVariationsIncludeOriginal = function() {
            for (var u = 0; u < this.variations.length; u++) {
                var t = this.variations[u];
                if (t && t.name && t.name === a) {
                    return true
                }
            }
            return false
        };
        this._getVariationDefaultPercentage = function() {
            var u = 100;
            var x = this.variations.length;
            for (var w = 0; w < this.variations.length; w++) {
                var v = this.variations[w];
                if (v && (v.percentage || v.percentage === 0 || v.percentage === "0")) {
                    u = u - parseInt(v.percentage, 10);
                    x--
                }
            }
            var t = Math.round(u / x);
            if (t > 100) {
                t = 100
            }
            if (t < 0) {
                t = 0
            }
            return t
        };
        this.getRandomVariationName = function() {
            var z = this._getVariationDefaultPercentage();
            var w = [];
            for (var x = 0; x < this.variations.length; x++) {
                var t = z;
                if (this.variations[x].percentage || this.variations[x].percentage === 0 || this.variations[x].percentage === "0") {
                    t = this.variations[x].percentage
                }
                for (var v = 0; v < t; v++) {
                    w.push(x)
                }
            }
            var u = j.getRandomNumber(0, w.length - 1);
            var y = w[u];
            return this.variations[y].name
        };
        this._isInTestGroup = function() {
            var t = this.storage.get("isInTestGroup", this.name);
            if (typeof t !== "undefined" && t !== null) {
                return t === "1" ? true : false
            }
            t = j.getRandomNumber(1, 100) <= this.percentage;
            this.storage.set("isInTestGroup", this.name, t ? "1" : "0");
            return t
        };
        this.selectRandomVariation = function() {
            m(this.name, "select random variation");
            var t = this.getRandomVariationName();
            this.forceVariation(t);
            return t
        };
        this.shouldTrigger = function() {
            if (!i) {
                m(this.name, "wont run because feature is disabled");
                return false
            }
            if (!e.matchesDate(new Date(), this.startDateTime, this.endDateTime)) {
                m(this.name, "wont run, scheduled date does not match");
                return false
            }
            if (!e.matchesTargets(this.includedTargets, this.excludedTargets)) {
                m(this.name, "wont run, targets do not match");
                return false
            }
            if (!this.trigger()) {
                m(this.name, "wont run, disabled by trigger method");
                return false
            }
            if (!this._isInTestGroup()) {
                m(this.name, "wont run, not in test group");
                return false
            }
            return true
        };
        if (!this._doVariationsIncludeOriginal()) {
            this.variations.push({
                name: a,
                activate: function() {}
            })
        }
        var r = j.getVariationTest(window.location || null);
        if (r && r.length) {
            for (var q = 0; q < r.length; q++) {
                if (this._getVariationByName(r[q])) {
                    m("going to test variation and disable tracking " + r[q]);
                    this.trackUsedVariation = function() {};
                    this.forceVariation(r[q]);
                    return
                }
            }
        }
        if (!this.shouldTrigger()) {
            m(this.name, "experiment should not trigger");
            return
        }
        m(this.name, "should trigger");
        var s = this.getActivatedVariationName();
        if (s) {
            this.forceVariation(s)
        } else {
            m(this.name, "no existing variation found");
            this.selectRandomVariation()
        }
    };
    k.NAME_ORIGINAL_VARIATION = a;
    k.TARGET_ATTRIBUTE_URL = "url";
    k.TARGET_ATTRIBUTE_PATH = "path";
    k.TARGET_ATTRIBUTE_URLPARAM = "urlparam";
    k.TARGET_TYPE_ANY = "any";
    k.TARGET_TYPE_EXISTS = "exists";
    k.TARGET_TYPE_EQUALS_SIMPLE = "equals_simple";
    k.TARGET_TYPE_EQUALS_EXACTLY = "equals_exactly";
    k.TARGET_TYPE_CONTAINS = "contains";
    k.TARGET_TYPE_STARTS_WITH = "starts_with";
    k.TARGET_TYPE_REGEXP = "regexp";
    k.THROW_ERRORS = true;

    function f() {
        if (typeof window === "object" && "function" === typeof window.piwikAbTestingAsyncInit) {
            window.piwikAbTestingAsyncInit()
        }
        if (typeof window === "object" && "function" === typeof window.matomoAbTestingAsyncInit) {
            window.matomoAbTestingAsyncInit()
        }
    }
    var c = false;

    function g() {
        function o() {
            if (c) {
                return
            }
            if ("object" !== typeof Piwik) {
                return
            }
            var r = Piwik.getAsyncTrackers();
            if (!r || !r.length) {
                return
            }
            if (window.location && j.getQueryParameter(window.location.search, "pk_abe")) {
                c = true;
                var q = j.getQueryParameter(window.location.search, "pk_abe");
                var p = j.getQueryParameter(window.location.search, "pk_abv");
                Piwik.AbTesting.enter({
                    experiment: q,
                    variation: p
                });
                m("entered experiment from url parameters")
            }
        }
        Piwik.DOM.onReady(o);
        Piwik.DOM.onLoad(o)
    }

    function l() {
        if ("object" === typeof window && "object" === typeof window.Piwik && "object" === typeof window.Piwik.AbTesting) {
            m("wont initialize, AbTesting already loaded");
            return
        }
        if ("object" === typeof window && "object" !== typeof window.Piwik) {
            m("wont initialize, Matomo is not yet loaded");
            return
        }
        Piwik.AbTesting = {
            utils: j,
            target: e,
            storage: d,
            Experiment: k,
            disableWhenItp: function() {
                if (j.isItpBrowser()) {
                    this.disable();
                    m("disabled because itp browser")
                }
            },
            isEnabled: function() {
                return i
            },
            disable: function() {
                i = false
            },
            enable: function() {
                i = true
            },
            enter: function(o) {
                if (o && o.experiment) {
                    window._paq = window._paq || [];
                    window._paq.push(["trackEvent", "abtesting", o.experiment, o.variation || a]);
                    m("entering user into an experiment", o)
                } else {
                    m("not entering user into an experiment, missing parameter experiment")
                }
            },
            create: function(o) {
                return new k(o)
            },
            enableDebugMode: function() {
                n = true
            }
        };
        if (window.Piwik.initialized) {
            Piwik.retryMissedPluginCalls();
            f();
            g()
        } else {
            Piwik.on("MatomoInitialized", function() {
                f();
                g()
            })
        }
        if (j.isItpBrowser() && j.hasLocalStorage()) {
            new d.local()
        }
    }
    if (typeof piwikExposeAbTestingTarget !== "undefined" && piwikExposeAbTestingTarget) {
        window.piwikAbTestingTarget = e
    }
    if ("object" === typeof window.Piwik) {
        m("matomo was already loaded, initializing abTesting now");
        l()
    } else {
        if ("object" !== typeof window.matomoPluginAsyncInit) {
            window.matomoPluginAsyncInit = []
        }
        window.matomoPluginAsyncInit.push(l);
        m("matomo not loaded yet, waiting for it to be loaded")
    }
})();

/* END GENERATED: tracker.min.js */

(function() {
    function b() {
        if ("object" !== typeof _paq) {
            return false
        }
        var c = typeof _paq.length;
        if ("undefined" === c) {
            return false
        }
        return !!_paq.length
    }
    if (window && "object" === typeof window.matomoPluginAsyncInit && window.matomoPluginAsyncInit.length) {
        var a = 0;
        for (a; a < window.matomoPluginAsyncInit.length; a++) {
            if (typeof window.matomoPluginAsyncInit[a] === "function") {
                window.matomoPluginAsyncInit[a]()
            }
        }
    }
    if (window && window.piwikAsyncInit) {
        window.piwikAsyncInit()
    }
    if (window && window.matomoAsyncInit) {
        window.matomoAsyncInit()
    }
    if (!window.Matomo.getAsyncTrackers().length) {
        if (b()) {
            window.Matomo.addTracker()
        } else {
            _paq = {
                push: function(c) {
                    var d = typeof console;
                    if (d !== "undefined" && console && console.error) {
                        console.error("_paq.push() was used but Matomo tracker was not initialized before the matomo.js file was loaded. Make sure to configure the tracker via _paq.push before loading matomo.js. Alternatively, you can create a tracker via Matomo.addTracker() manually and then use _paq.push but it may not fully work as tracker methods may not be executed in the correct order.", c)
                    }
                }
            }
        }
    }
    window.Matomo.trigger("MatomoInitialized", []);
    window.Matomo.initialized = true
}());
(function() {
    var a = (typeof window.AnalyticsTracker);
    if (a === "undefined") {
        window.AnalyticsTracker = window.Matomo
    }
}());
if (typeof window.piwik_log !== "function") {
    window.piwik_log = function(c, e, g, f) {
        function b(h) {
            try {
                if (window["piwik_" + h]) {
                    return window["piwik_" + h]
                }
            } catch (i) {}
            return
        }
        var d, a = window.Matomo.getTracker(g, e);
        a.setDocumentTitle(c);
        a.setCustomData(f);
        d = b("tracker_pause");
        if (d) {
            a.setLinkTrackingTimer(d)
        }
        d = b("download_extensions");
        if (d) {
            a.setDownloadExtensions(d)
        }
        d = b("hosts_alias");
        if (d) {
            a.setDomains(d)
        }
        d = b("ignore_classes");
        if (d) {
            a.setIgnoreClasses(d)
        }
        a.trackPageView();
        if (b("install_tracker")) {
            piwik_track = function(i, j, k, h) {
                a.setSiteId(j);
                a.setTrackerUrl(k);
                a.trackLink(i, h)
            };
            a.enableLinkTracking()
        }
    }
}
/*!! @license-end */
;