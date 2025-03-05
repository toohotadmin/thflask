/* Built on 2025-01-28 14:50:23 */
function createRequestObject() {
    var e;
    try {
        e = new XMLHttpRequest
    } catch (t) {
        e = new ActiveXObject("Microsoft.XMLHTTP")
    }
    return e
}

function formatDuration(e) {
    return e > 3600 ? Math.floor(e / 3600) + "H " + Math.floor(e % 3600 / 60) + "min" : e > 300 ? Math.floor(e / 60) + "min" : e > 60 ? Math.floor(e / 60) + "min " + Math.floor(e % 60) + "sec" : Math.floor(e) + "sec"
}
"undefined" != typeof window && function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Hls = t() : e.Hls = t()
    }(this, function() {
        return function(e) {
            function t(r) {
                if (i[r]) return i[r].exports;
                var s = i[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(s.exports, s, s.exports, t), s.l = !0, s.exports
            }
            var i = {};
            return t.m = e, t.c = i, t.d = function(e, i, r) {
                t.o(e, i) || Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: r
                })
            }, t.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, t.t = function(e, i) {
                if (1 & i && (e = t(e)), 8 & i) return e;
                if (4 & i && "object" == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if (t.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & i && "string" != typeof e)
                    for (var s in e) t.d(r, s, function(t) {
                        return e[t]
                    }.bind(null, s));
                return r
            }, t.n = function(e) {
                var i = e && e.__esModule ? function() {
                    return e["default"]
                } : function() {
                    return e
                };
                return t.d(i, "a", i), i
            }, t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = "/dist/", t(t.s = "./src/hls.js")
        }({
            "./node_modules/eventemitter3/index.js": function(e, t, i) {
                "use strict";

                function r() {}

                function s(e, t, i) {
                    this.fn = e, this.context = t, this.once = i || !1
                }

                function o(e, t, i, r, o) {
                    if ("function" != typeof i) throw new TypeError("The listener must be a function");
                    var n = new s(i, r || e, o),
                        a = d ? d + t : t;
                    return e._events[a] ? e._events[a].fn ? e._events[a] = [e._events[a], n] : e._events[a].push(n) : (e._events[a] = n, e._eventsCount++), e
                }

                function n(e, t) {
                    0 == --e._eventsCount ? e._events = new r : delete e._events[t]
                }

                function a() {
                    this._events = new r, this._eventsCount = 0
                }
                var l = Object.prototype.hasOwnProperty,
                    d = "~";
                Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (d = !1)), a.prototype.eventNames = function() {
                    var e, t, i = [];
                    if (0 === this._eventsCount) return i;
                    for (t in e = this._events) l.call(e, t) && i.push(d ? t.slice(1) : t);
                    return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i
                }, a.prototype.listeners = function(e) {
                    var t = d ? d + e : e,
                        i = this._events[t];
                    if (!i) return [];
                    if (i.fn) return [i.fn];
                    for (var r = 0, s = i.length, o = new Array(s); r < s; r++) o[r] = i[r].fn;
                    return o
                }, a.prototype.listenerCount = function(e) {
                    var t = d ? d + e : e,
                        i = this._events[t];
                    return i ? i.fn ? 1 : i.length : 0
                }, a.prototype.emit = function(e, t, i, r, s, o) {
                    var n = d ? d + e : e;
                    if (!this._events[n]) return !1;
                    var a, l, u = this._events[n],
                        h = arguments.length;
                    if (u.fn) {
                        switch (u.once && this.removeListener(e, u.fn, undefined, !0), h) {
                            case 1:
                                return u.fn.call(u.context), !0;
                            case 2:
                                return u.fn.call(u.context, t), !0;
                            case 3:
                                return u.fn.call(u.context, t, i), !0;
                            case 4:
                                return u.fn.call(u.context, t, i, r), !0;
                            case 5:
                                return u.fn.call(u.context, t, i, r, s), !0;
                            case 6:
                                return u.fn.call(u.context, t, i, r, s, o), !0
                        }
                        for (l = 1, a = new Array(h - 1); l < h; l++) a[l - 1] = arguments[l];
                        u.fn.apply(u.context, a)
                    } else {
                        var c, f = u.length;
                        for (l = 0; l < f; l++) switch (u[l].once && this.removeListener(e, u[l].fn, undefined, !0), h) {
                            case 1:
                                u[l].fn.call(u[l].context);
                                break;
                            case 2:
                                u[l].fn.call(u[l].context, t);
                                break;
                            case 3:
                                u[l].fn.call(u[l].context, t, i);
                                break;
                            case 4:
                                u[l].fn.call(u[l].context, t, i, r);
                                break;
                            default:
                                if (!a)
                                    for (c = 1, a = new Array(h - 1); c < h; c++) a[c - 1] = arguments[c];
                                u[l].fn.apply(u[l].context, a)
                        }
                    }
                    return !0
                }, a.prototype.on = function(e, t, i) {
                    return o(this, e, t, i, !1)
                }, a.prototype.once = function(e, t, i) {
                    return o(this, e, t, i, !0)
                }, a.prototype.removeListener = function(e, t, i, r) {
                    var s = d ? d + e : e;
                    if (!this._events[s]) return this;
                    if (!t) return n(this, s), this;
                    var o = this._events[s];
                    if (o.fn) o.fn !== t || r && !o.once || i && o.context !== i || n(this, s);
                    else {
                        for (var a = 0, l = [], u = o.length; a < u; a++)(o[a].fn !== t || r && !o[a].once || i && o[a].context !== i) && l.push(o[a]);
                        l.length ? this._events[s] = 1 === l.length ? l[0] : l : n(this, s)
                    }
                    return this
                }, a.prototype.removeAllListeners = function(e) {
                    var t;
                    return e ? (t = d ? d + e : e, this._events[t] && n(this, t)) : (this._events = new r, this._eventsCount = 0), this
                }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = d, a.EventEmitter = a, e.exports = a
            },
            "./node_modules/node-libs-browser/node_modules/events/events.js": function(e, t) {
                function i() {
                    this._events = this._events || {}, this._maxListeners = this._maxListeners || undefined
                }

                function r(e) {
                    return "function" == typeof e
                }

                function s(e) {
                    return "number" == typeof e
                }

                function o(e) {
                    return "object" == typeof e && null !== e
                }

                function n(e) {
                    return void 0 === e
                }
                e.exports = i, i.EventEmitter = i, i.prototype._events = undefined, i.prototype._maxListeners = undefined, i.defaultMaxListeners = 10, i.prototype.setMaxListeners = function(e) {
                    if (!s(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
                    return this._maxListeners = e, this
                }, i.prototype.emit = function(e) {
                    var t, i, s, a, l, d;
                    if (this._events || (this._events = {}), "error" === e && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
                        if ((t = arguments[1]) instanceof Error) throw t;
                        var u = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                        throw u.context = t, u
                    }
                    if (i = this._events[e], n(i)) return !1;
                    if (r(i)) switch (arguments.length) {
                        case 1:
                            i.call(this);
                            break;
                        case 2:
                            i.call(this, arguments[1]);
                            break;
                        case 3:
                            i.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            a = Array.prototype.slice.call(arguments, 1), i.apply(this, a)
                    } else if (o(i))
                        for (a = Array.prototype.slice.call(arguments, 1), d = i.slice(), s = d.length, l = 0; l < s; l++) d[l].apply(this, a);
                    return !0
                }, i.prototype.addListener = function(e, t) {
                    var s;
                    if (!r(t)) throw TypeError("listener must be a function");
                    return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, r(t.listener) ? t.listener : t), this._events[e] ? o(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, o(this._events[e]) && !this._events[e].warned && (s = n(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners) && s > 0 && this._events[e].length > s && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
                }, i.prototype.on = i.prototype.addListener, i.prototype.once = function(e, t) {
                    function i() {
                        this.removeListener(e, i), s || (s = !0, t.apply(this, arguments))
                    }
                    if (!r(t)) throw TypeError("listener must be a function");
                    var s = !1;
                    return i.listener = t, this.on(e, i), this
                }, i.prototype.removeListener = function(e, t) {
                    var i, s, n, a;
                    if (!r(t)) throw TypeError("listener must be a function");
                    if (!this._events || !this._events[e]) return this;
                    if (i = this._events[e], n = i.length, s = -1, i === t || r(i.listener) && i.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                    else if (o(i)) {
                        for (a = n; a-- > 0;)
                            if (i[a] === t || i[a].listener && i[a].listener === t) {
                                s = a;
                                break
                            } if (s < 0) return this;
                        1 === i.length ? (i.length = 0, delete this._events[e]) : i.splice(s, 1), this._events.removeListener && this.emit("removeListener", e, t)
                    }
                    return this
                }, i.prototype.removeAllListeners = function(e) {
                    var t, i;
                    if (!this._events) return this;
                    if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                    if (0 === arguments.length) {
                        for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                        return this.removeAllListeners("removeListener"), this._events = {}, this
                    }
                    if (i = this._events[e], r(i)) this.removeListener(e, i);
                    else if (i)
                        for (; i.length;) this.removeListener(e, i[i.length - 1]);
                    return delete this._events[e], this
                }, i.prototype.listeners = function(e) {
                    return this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
                }, i.prototype.listenerCount = function(e) {
                    if (this._events) {
                        var t = this._events[e];
                        if (r(t)) return 1;
                        if (t) return t.length
                    }
                    return 0
                }, i.listenerCount = function(e, t) {
                    return e.listenerCount(t)
                }
            },
            "./node_modules/url-toolkit/src/url-toolkit.js": function(e, t, i) {
                ! function(t) {
                    var i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
                        r = /^([^\/;?#]*)(.*)$/,
                        s = /(?:\/|^)\.(?=\/)/g,
                        o = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
                        n = {
                            buildAbsoluteURL: function(e, t, i) {
                                if (i = i || {}, e = e.trim(), !(t = t.trim())) {
                                    if (!i.alwaysNormalize) return e;
                                    var s = this.parseURL(e);
                                    if (!a) throw new Error("Error trying to parse base URL.");
                                    return s.path = n.normalizePath(s.path), n.buildURLFromParts(s)
                                }
                                var o = this.parseURL(t);
                                if (!o) throw new Error("Error trying to parse relative URL.");
                                if (o.scheme) return i.alwaysNormalize ? (o.path = n.normalizePath(o.path), n.buildURLFromParts(o)) : t;
                                var a = this.parseURL(e);
                                if (!a) throw new Error("Error trying to parse base URL.");
                                if (!a.netLoc && a.path && "/" !== a.path[0]) {
                                    var l = r.exec(a.path);
                                    a.netLoc = l[1], a.path = l[2]
                                }
                                a.netLoc && !a.path && (a.path = "/");
                                var d = {
                                    scheme: a.scheme,
                                    netLoc: o.netLoc,
                                    path: null,
                                    params: o.params,
                                    query: o.query,
                                    fragment: o.fragment
                                };
                                if (!o.netLoc && (d.netLoc = a.netLoc, "/" !== o.path[0]))
                                    if (o.path) {
                                        var u = a.path,
                                            h = u.substring(0, u.lastIndexOf("/") + 1) + o.path;
                                        d.path = n.normalizePath(h)
                                    } else d.path = a.path, o.params || (d.params = a.params, o.query || (d.query = a.query));
                                return null === d.path && (d.path = i.alwaysNormalize ? n.normalizePath(o.path) : o.path), n.buildURLFromParts(d)
                            },
                            parseURL: function(e) {
                                var t = i.exec(e);
                                return t ? {
                                    scheme: t[1] || "",
                                    netLoc: t[2] || "",
                                    path: t[3] || "",
                                    params: t[4] || "",
                                    query: t[5] || "",
                                    fragment: t[6] || ""
                                } : null
                            },
                            normalizePath: function(e) {
                                for (e = e.split("").reverse().join("").replace(s, ""); e.length !== (e = e.replace(o, "")).length;);
                                return e.split("").reverse().join("")
                            },
                            buildURLFromParts: function(e) {
                                return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
                            }
                        };
                    e.exports = n
                }()
            },
            "./node_modules/webworkify-webpack/index.js": function(e, t, i) {
                function r(e) {
                    function t(r) {
                        if (i[r]) return i[r].exports;
                        var s = i[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return e[r].call(s.exports, s, s.exports, t), s.l = !0, s.exports
                    }
                    var i = {};
                    t.m = e, t.c = i, t.i = function(e) {
                        return e
                    }, t.d = function(e, i, r) {
                        t.o(e, i) || Object.defineProperty(e, i, {
                            configurable: !1,
                            enumerable: !0,
                            get: r
                        })
                    }, t.r = function(e) {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, t.n = function(e) {
                        var i = e && e.__esModule ? function() {
                            return e["default"]
                        } : function() {
                            return e
                        };
                        return t.d(i, "a", i), i
                    }, t.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, t.p = "/", t.oe = function(e) {
                        throw console.error(e), e
                    };
                    var r = t(t.s = ENTRY_MODULE);
                    return r["default"] || r
                }

                function s(e) {
                    return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
                }

                function o(e) {
                    return !isNaN(1 * e)
                }

                function n(e, t, r) {
                    var n = {};
                    n[r] = [];
                    var a = t.toString(),
                        l = a.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);
                    if (!l) return n;
                    for (var h, c = l[1], f = new RegExp("(\\\\n|\\W)" + s(c) + u, "g"); h = f.exec(a);) "dll-reference" !== h[3] && n[r].push(h[3]);
                    for (f = new RegExp("\\(" + s(c) + '\\("(dll-reference\\s(' + d + '))"\\)\\)' + u, "g"); h = f.exec(a);) e[h[2]] || (n[r].push(h[1]), e[h[2]] = i(h[1]).m), n[h[2]] = n[h[2]] || [], n[h[2]].push(h[4]);
                    for (var p = Object.keys(n), v = 0; v < p.length; v++)
                        for (var g = 0; g < n[p[v]].length; g++) o(n[p[v]][g]) && (n[p[v]][g] = 1 * n[p[v]][g]);
                    return n
                }

                function a(e) {
                    return Object.keys(e).reduce(function(t, i) {
                        return t || e[i].length > 0
                    }, !1)
                }

                function l(e, t) {
                    for (var i = {
                            main: [t]
                        }, r = {
                            main: []
                        }, s = {
                            main: {}
                        }; a(i);)
                        for (var o = Object.keys(i), l = 0; l < o.length; l++) {
                            var d = o[l],
                                u = i[d],
                                h = u.pop();
                            if (s[d] = s[d] || {}, !s[d][h] && e[d][h]) {
                                s[d][h] = !0, r[d] = r[d] || [], r[d].push(h);
                                for (var c = n(e, e[d][h], d), f = Object.keys(c), p = 0; p < f.length; p++) i[f[p]] = i[f[p]] || [], i[f[p]] = i[f[p]].concat(c[f[p]])
                            }
                        }
                    return r
                }
                var d = "[\\.|\\-|\\+|\\w|/|@]+",
                    u = "\\((/\\*.*?\\*/)?s?.*?(" + d + ").*?\\)";
                e.exports = function(e, t) {
                    t = t || {};
                    var s = {
                            main: i.m
                        },
                        o = t.all ? {
                            main: Object.keys(s.main)
                        } : l(s, e),
                        n = "";
                    Object.keys(o).filter(function(e) {
                        return "main" !== e
                    }).forEach(function(e) {
                        for (var t = 0; o[e][t];) t++;
                        o[e].push(t), s[e][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", n = n + "var " + e + " = (" + r.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + o[e].map(function(t) {
                            return JSON.stringify(t) + ": " + s[e][t].toString()
                        }).join(",") + "});\n"
                    }), n = n + "new ((" + r.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + o.main.map(function(e) {
                        return JSON.stringify(e) + ": " + s.main[e].toString()
                    }).join(",") + "}))(self);";
                    var a = new window.Blob([n], {
                        type: "text/javascript"
                    });
                    if (t.bare) return a;
                    var d = window.URL || window.webkitURL || window.mozURL || window.msURL,
                        u = d.createObjectURL(a),
                        h = new window.Worker(u);
                    return h.objectURL = u, h
                }
            },
            "./src/config.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/controller/abr-controller.js"),
                    s = i("./src/controller/buffer-controller.js"),
                    o = i("./src/controller/cap-level-controller.js"),
                    n = i("./src/controller/fps-controller.js"),
                    a = i("./src/utils/xhr-loader.js"),
                    l = i("./src/controller/audio-track-controller.js"),
                    d = i("./src/controller/audio-stream-controller.js"),
                    u = i("./src/utils/cues.js"),
                    h = i("./src/controller/timeline-controller.js"),
                    c = i("./src/controller/subtitle-track-controller.js"),
                    f = i("./src/controller/subtitle-stream-controller.js"),
                    p = i("./src/controller/eme-controller.js"),
                    v = i("./src/utils/mediakeys-helper.js");
                t.hlsDefaultConfig = {
                    autoStartLoad: !0,
                    startPosition: -1,
                    defaultAudioCodec: undefined,
                    debug: !1,
                    capLevelOnFPSDrop: !1,
                    capLevelToPlayerSize: !1,
                    initialLiveManifestSize: 1,
                    maxBufferLength: 30,
                    maxBufferSize: 6e7,
                    maxBufferHole: .5,
                    lowBufferWatchdogPeriod: .5,
                    highBufferWatchdogPeriod: 3,
                    nudgeOffset: .1,
                    nudgeMaxRetry: 3,
                    maxFragLookUpTolerance: .25,
                    liveSyncDurationCount: 3,
                    liveMaxLatencyDurationCount: Infinity,
                    liveSyncDuration: undefined,
                    liveMaxLatencyDuration: undefined,
                    liveDurationInfinity: !1,
                    maxMaxBufferLength: 600,
                    enableWorker: !0,
                    enableSoftwareAES: !0,
                    manifestLoadingTimeOut: 1e4,
                    manifestLoadingMaxRetry: 1,
                    manifestLoadingRetryDelay: 1e3,
                    manifestLoadingMaxRetryTimeout: 64e3,
                    startLevel: undefined,
                    levelLoadingTimeOut: 1e4,
                    levelLoadingMaxRetry: 4,
                    levelLoadingRetryDelay: 1e3,
                    levelLoadingMaxRetryTimeout: 64e3,
                    fragLoadingTimeOut: 2e4,
                    fragLoadingMaxRetry: 6,
                    fragLoadingRetryDelay: 1e3,
                    fragLoadingMaxRetryTimeout: 64e3,
                    startFragPrefetch: !1,
                    fpsDroppedMonitoringPeriod: 5e3,
                    fpsDroppedMonitoringThreshold: .2,
                    appendErrorMaxRetry: 3,
                    loader: a["default"],
                    fLoader: undefined,
                    pLoader: undefined,
                    xhrSetup: undefined,
                    licenseXhrSetup: undefined,
                    abrController: r["default"],
                    bufferController: s["default"],
                    capLevelController: o["default"],
                    fpsController: n["default"],
                    stretchShortVideoTrack: !1,
                    maxAudioFramesDrift: 1,
                    forceKeyFrameOnDiscontinuity: !0,
                    abrEwmaFastLive: 3,
                    abrEwmaSlowLive: 9,
                    abrEwmaFastVoD: 3,
                    abrEwmaSlowVoD: 9,
                    abrEwmaDefaultEstimate: 5e5,
                    abrBandWidthFactor: .95,
                    abrBandWidthUpFactor: .7,
                    abrMaxWithRealBitrate: !1,
                    maxStarvationDelay: 4,
                    maxLoadingDelay: 4,
                    minAutoBitrate: 0,
                    emeEnabled: !1,
                    widevineLicenseUrl: undefined,
                    requestMediaKeySystemAccessFunc: v.requestMediaKeySystemAccess
                }, t.hlsDefaultConfig.subtitleStreamController = f["default"], t.hlsDefaultConfig.subtitleTrackController = c["default"], t.hlsDefaultConfig.timelineController = h["default"], t.hlsDefaultConfig.cueHandler = u, t.hlsDefaultConfig.enableCEA708Captions = !0, t.hlsDefaultConfig.enableWebVTT = !0, t.hlsDefaultConfig.captionsTextTrack1Label = "English", t.hlsDefaultConfig.captionsTextTrack1LanguageCode = "en", t.hlsDefaultConfig.captionsTextTrack2Label = "Spanish", t.hlsDefaultConfig.captionsTextTrack2LanguageCode = "es", t.hlsDefaultConfig.audioStreamController = d["default"], t.hlsDefaultConfig.audioTrackController = l["default"], t.hlsDefaultConfig.emeController = p["default"]
            },
            "./src/controller/abr-controller.js": function(e, t, i) {
                "use strict";
                (function(e) {
                    var r = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                        };
                        return function(t, i) {
                            function r() {
                                this.constructor = t
                            }
                            e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var s = i("./src/events.js"),
                        o = i("./src/event-handler.js"),
                        n = i("./src/utils/buffer-helper.js"),
                        a = i("./src/errors.js"),
                        l = i("./src/utils/logger.js"),
                        d = i("./src/utils/ewma-bandwidth-estimator.js"),
                        u = window.performance,
                        h = function(t) {
                            function i(e) {
                                var i = t.call(this, e, s["default"].FRAG_LOADING, s["default"].FRAG_LOADED, s["default"].FRAG_BUFFERED, s["default"].ERROR) || this;
                                return i.lastLoadedFragLevel = 0, i._nextAutoLevel = -1, i.hls = e, i.timer = null, i._bwEstimator = null, i.onCheck = i._abandonRulesCheck.bind(i), i
                            }
                            return r(i, t), i.prototype.destroy = function() {
                                this.clearTimer(), o["default"].prototype.destroy.call(this)
                            }, i.prototype.onFragLoading = function(e) {
                                var t = e.frag;
                                if ("main" === t.type && (this.timer || (this.fragCurrent = t, this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator)) {
                                    var i = this.hls,
                                        r = i.config,
                                        s = t.level,
                                        o = i.levels[s].details.live,
                                        n = void 0,
                                        a = void 0;
                                    o ? (n = r.abrEwmaFastLive, a = r.abrEwmaSlowLive) : (n = r.abrEwmaFastVoD, a = r.abrEwmaSlowVoD), this._bwEstimator = new d["default"](i, a, n, r.abrEwmaDefaultEstimate)
                                }
                            }, i.prototype._abandonRulesCheck = function() {
                                var e = this.hls,
                                    t = e.media,
                                    i = this.fragCurrent;
                                if (i) {
                                    var r = i.loader,
                                        o = e.minAutoLevel;
                                    if (!r || r.stats && r.stats.aborted) return l.logger.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), void(this._nextAutoLevel = -1);
                                    var a = r.stats;
                                    if (t && a && (!t.paused && 0 !== t.playbackRate || !t.readyState) && i.autoLevel && i.level) {
                                        var d = u.now() - a.trequest,
                                            h = Math.abs(t.playbackRate);
                                        if (d > 500 * i.duration / h) {
                                            var c = e.levels,
                                                f = Math.max(1, a.bw ? a.bw / 8 : 1e3 * a.loaded / d),
                                                p = c[i.level],
                                                v = p.realBitrate ? Math.max(p.realBitrate, p.bitrate) : p.bitrate,
                                                g = a.total ? a.total : Math.max(a.loaded, Math.round(i.duration * v / 8)),
                                                m = t.currentTime,
                                                y = (g - a.loaded) / f,
                                                _ = (n.BufferHelper.bufferInfo(t, m, e.config.maxBufferHole).end - m) / h;
                                            if (_ < 2 * i.duration / h && y > _) {
                                                var b = void 0,
                                                    E = void 0;
                                                for (E = i.level - 1; E > o; E--) {
                                                    var S = c[E].realBitrate ? Math.max(c[E].realBitrate, c[E].bitrate) : c[E].bitrate;
                                                    if ((b = i.duration * S / (6.4 * f)) < _) break
                                                }
                                                b < y && (l.logger.warn("loading too slow, abort fragment loading and switch to level " + E + ":fragLoadedDelay[" + E + "]<fragLoadedDelay[" + (i.level - 1) + "];bufferStarvationDelay:" + b.toFixed(1) + "<" + y.toFixed(1) + ":" + _.toFixed(1)), e.nextLoadLevel = E, this._bwEstimator.sample(d, a.loaded), r.abort(), this.clearTimer(), e.trigger(s["default"].FRAG_LOAD_EMERGENCY_ABORTED, {
                                                    frag: i,
                                                    stats: a
                                                }))
                                            }
                                        }
                                    }
                                }
                            }, i.prototype.onFragLoaded = function(t) {
                                var i = t.frag;
                                if ("main" === i.type && e.isFinite(i.sn)) {
                                    if (this.clearTimer(), this.lastLoadedFragLevel = i.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                                        var r = this.hls.levels[i.level],
                                            s = (r.loaded ? r.loaded.bytes : 0) + t.stats.loaded,
                                            o = (r.loaded ? r.loaded.duration : 0) + t.frag.duration;
                                        r.loaded = {
                                            bytes: s,
                                            duration: o
                                        }, r.realBitrate = Math.round(8 * s / o)
                                    }
                                    if (t.frag.bitrateTest) {
                                        var n = t.stats;
                                        n.tparsed = n.tbuffered = n.tload, this.onFragBuffered(t)
                                    }
                                }
                            }, i.prototype.onFragBuffered = function(t) {
                                var i = t.stats,
                                    r = t.frag;
                                if (!0 !== i.aborted && "main" === r.type && e.isFinite(r.sn) && (!r.bitrateTest || i.tload === i.tbuffered)) {
                                    var s = i.tparsed - i.trequest;
                                    l.logger.log("latency/loading/parsing/append/kbps:" + Math.round(i.tfirst - i.trequest) + "/" + Math.round(i.tload - i.tfirst) + "/" + Math.round(i.tparsed - i.tload) + "/" + Math.round(i.tbuffered - i.tparsed) + "/" + Math.round(8 * i.loaded / (i.tbuffered - i.trequest))), this._bwEstimator.sample(s, i.loaded), i.bwEstimate = this._bwEstimator.getEstimate(), r.bitrateTest ? this.bitrateTestDelay = s / 1e3 : this.bitrateTestDelay = 0
                                }
                            }, i.prototype.onError = function(e) {
                                switch (e.details) {
                                    case a.ErrorDetails.FRAG_LOAD_ERROR:
                                    case a.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                        this.clearTimer()
                                }
                            }, i.prototype.clearTimer = function() {
                                clearInterval(this.timer), this.timer = null
                            }, Object.defineProperty(i.prototype, "nextAutoLevel", {
                                get: function() {
                                    var e = this._nextAutoLevel,
                                        t = this._bwEstimator;
                                    if (!(-1 === e || t && t.canEstimate())) return e;
                                    var i = this._nextABRAutoLevel;
                                    return -1 !== e && (i = Math.min(e, i)), i
                                },
                                set: function(e) {
                                    this._nextAutoLevel = e
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(i.prototype, "_nextABRAutoLevel", {
                                get: function() {
                                    var e = this.hls,
                                        t = e.maxAutoLevel,
                                        i = e.levels,
                                        r = e.config,
                                        s = e.minAutoLevel,
                                        o = e.media,
                                        a = this.lastLoadedFragLevel,
                                        d = this.fragCurrent ? this.fragCurrent.duration : 0,
                                        u = o ? o.currentTime : 0,
                                        h = o && 0 !== o.playbackRate ? Math.abs(o.playbackRate) : 1,
                                        c = this._bwEstimator ? this._bwEstimator.getEstimate() : r.abrEwmaDefaultEstimate,
                                        f = (n.BufferHelper.bufferInfo(o, u, r.maxBufferHole).end - u) / h,
                                        p = this._findBestLevel(a, d, c, s, t, f, r.abrBandWidthFactor, r.abrBandWidthUpFactor, i);
                                    if (p >= 0) return p;
                                    l.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
                                    var v = d ? Math.min(d, r.maxStarvationDelay) : r.maxStarvationDelay,
                                        g = r.abrBandWidthFactor,
                                        m = r.abrBandWidthUpFactor;
                                    if (0 === f) {
                                        var y = this.bitrateTestDelay;
                                        if (y) {
                                            v = (d ? Math.min(d, r.maxLoadingDelay) : r.maxLoadingDelay) - y, l.logger.trace("bitrate test took " + Math.round(1e3 * y) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * v) + " ms"), g = m = 1
                                        }
                                    }
                                    return p = this._findBestLevel(a, d, c, s, t, f + v, g, m, i), Math.max(p, 0)
                                },
                                enumerable: !0,
                                configurable: !0
                            }), i.prototype._findBestLevel = function(e, t, i, r, s, o, n, a, d) {
                                for (var u = s; u >= r; u--) {
                                    var h = d[u];
                                    if (h) {
                                        var c = h.details,
                                            f = c ? c.totalduration / c.fragments.length : t,
                                            p = !!c && c.live,
                                            v = void 0;
                                        v = u <= e ? n * i : a * i;
                                        var g = d[u].realBitrate ? Math.max(d[u].realBitrate, d[u].bitrate) : d[u].bitrate,
                                            m = g * f / v;
                                        if (l.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + u + "/" + Math.round(v) + "/" + g + "/" + f + "/" + o + "/" + m), v > g && (!m || p && !this.bitrateTestDelay || m < o)) return u
                                    }
                                }
                                return -1
                            }, i
                        }(o["default"]);
                    t["default"] = h
                }).call(this, i("./src/polyfills/number.js").Number)
            },
            "./src/controller/audio-stream-controller.js": function(e, t, i) {
                "use strict";
                (function(e) {
                    var r = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                        };
                        return function(t, i) {
                            function r() {
                                this.constructor = t
                            }
                            e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var s = i("./src/utils/binary-search.js"),
                        o = i("./src/utils/buffer-helper.js"),
                        n = i("./src/demux/demuxer.js"),
                        a = i("./src/events.js"),
                        l = i("./src/controller/level-helper.js"),
                        d = i("./src/utils/time-ranges.js"),
                        u = i("./src/errors.js"),
                        h = i("./src/utils/logger.js"),
                        c = i("./src/utils/discontinuities.js"),
                        f = i("./src/task-loop.js"),
                        p = i("./src/controller/fragment-tracker.js"),
                        v = i("./src/loader/fragment.js"),
                        g = window.performance,
                        m = {
                            STOPPED: "STOPPED",
                            STARTING: "STARTING",
                            IDLE: "IDLE",
                            PAUSED: "PAUSED",
                            KEY_LOADING: "KEY_LOADING",
                            FRAG_LOADING: "FRAG_LOADING",
                            FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                            WAITING_TRACK: "WAITING_TRACK",
                            PARSING: "PARSING",
                            PARSED: "PARSED",
                            BUFFER_FLUSHING: "BUFFER_FLUSHING",
                            ENDED: "ENDED",
                            ERROR: "ERROR",
                            WAITING_INIT_PTS: "WAITING_INIT_PTS"
                        },
                        y = function(t) {
                            function i(e, i) {
                                var r = t.call(this, e, a["default"].MEDIA_ATTACHED, a["default"].MEDIA_DETACHING, a["default"].AUDIO_TRACKS_UPDATED, a["default"].AUDIO_TRACK_SWITCHING, a["default"].AUDIO_TRACK_LOADED, a["default"].KEY_LOADED, a["default"].FRAG_LOADED, a["default"].FRAG_PARSING_INIT_SEGMENT, a["default"].FRAG_PARSING_DATA, a["default"].FRAG_PARSED, a["default"].ERROR, a["default"].BUFFER_RESET, a["default"].BUFFER_CREATED, a["default"].BUFFER_APPENDED, a["default"].BUFFER_FLUSHED, a["default"].INIT_PTS_FOUND) || this;
                                return r.fragmentTracker = i, r.config = e.config, r.audioCodecSwap = !1, r._state = m.STOPPED, r.initPTS = [], r.waitingFragment = null, r.videoTrackCC = null, r
                            }
                            return r(i, t), i.prototype.onHandlerDestroying = function() {
                                this.stopLoad(), t.prototype.onHandlerDestroying.call(this)
                            }, i.prototype.onHandlerDestroyed = function() {
                                this.state = m.STOPPED, this.fragmentTracker = null, t.prototype.onHandlerDestroyed.call(this)
                            }, i.prototype.onInitPtsFound = function(e) {
                                var t = e.id,
                                    i = e.frag.cc,
                                    r = e.initPTS;
                                "main" === t && (this.initPTS[i] = r, this.videoTrackCC = i, h.logger.log("InitPTS for cc: " + i + " found from video track: " + r), this.state === m.WAITING_INIT_PTS && this.tick())
                            }, i.prototype.startLoad = function(e) {
                                if (this.tracks) {
                                    var t = this.lastCurrentTime;
                                    this.stopLoad(), this.setInterval(100), this.fragLoadError = 0, t > 0 && -1 === e ? (h.logger.log("audio:override startPosition with lastCurrentTime @" + t.toFixed(3)), this.state = m.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition : e, this.state = m.STARTING), this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick()
                                } else this.startPosition = e, this.state = m.STOPPED
                            }, i.prototype.stopLoad = function() {
                                var e = this.fragCurrent;
                                e && (e.loader && e.loader.abort(), this.fragmentTracker.removeFragment(e), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = m.STOPPED
                            }, Object.defineProperty(i.prototype, "state", {
                                get: function() {
                                    return this._state
                                },
                                set: function(e) {
                                    if (this.state !== e) {
                                        var t = this.state;
                                        this._state = e, h.logger.log("audio stream:" + t + "->" + e)
                                    }
                                },
                                enumerable: !0,
                                configurable: !0
                            }), i.prototype.doTick = function() {
                                var t, i, r, n = this.hls,
                                    l = n.config;
                                switch (this.state) {
                                    case m.ERROR:
                                    case m.PAUSED:
                                    case m.BUFFER_FLUSHING:
                                        break;
                                    case m.STARTING:
                                        this.state = m.WAITING_TRACK, this.loadedmetadata = !1;
                                        break;
                                    case m.IDLE:
                                        var d = this.tracks;
                                        if (!d) break;
                                        if (!this.media && (this.startFragRequested || !l.startFragPrefetch)) break;
                                        if (this.loadedmetadata) t = this.media.currentTime;
                                        else if ((t = this.nextLoadPosition) === undefined) break;
                                        var u = this.mediaBuffer ? this.mediaBuffer : this.media,
                                            f = this.videoBuffer ? this.videoBuffer : this.media,
                                            v = o.BufferHelper.bufferInfo(u, t, l.maxBufferHole),
                                            y = o.BufferHelper.bufferInfo(f, t, l.maxBufferHole),
                                            _ = v.len,
                                            b = v.end,
                                            E = this.fragPrevious,
                                            S = Math.min(l.maxBufferLength, l.maxMaxBufferLength),
                                            w = Math.max(S, y.len),
                                            k = this.audioSwitch,
                                            T = this.trackId;
                                        if ((_ < w || k) && T < d.length) {
                                            if (void 0 === (r = d[T].details)) {
                                                this.state = m.WAITING_TRACK;
                                                break
                                            }
                                            if (!k && !r.live && E && E.sn === r.endSN && !v.nextStart && (!this.media.seeking || this.media.duration - b < E.duration / 2)) {
                                                this.hls.trigger(a["default"].BUFFER_EOS, {
                                                    type: "audio"
                                                }), this.state = m.ENDED;
                                                break
                                            }
                                            var L = r.fragments,
                                                P = L.length,
                                                A = L[0].start,
                                                C = L[P - 1].start + L[P - 1].duration,
                                                x = void 0;
                                            if (k)
                                                if (r.live && !r.PTSKnown) h.logger.log("switching audiotrack, live stream, unknown PTS,load first fragment"), b = 0;
                                                else if (b = t, r.PTSKnown && t < A) {
                                                if (!(v.end > A || v.nextStart)) return;
                                                h.logger.log("alt audio track ahead of main track, seek to start of alt audio track"), this.media.currentTime = A + .05
                                            }
                                            if (r.initSegment && !r.initSegment.data) x = r.initSegment;
                                            else if (b <= A) {
                                                if (x = L[0], null !== this.videoTrackCC && x.cc !== this.videoTrackCC && (x = c.findFragWithCC(L, this.videoTrackCC)), r.live && x.loadIdx && x.loadIdx === this.fragLoadIdx) {
                                                    var R = v.nextStart ? v.nextStart : A;
                                                    return h.logger.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (R + .05)), void(this.media.currentTime = R + .05)
                                                }
                                            } else {
                                                var D = void 0,
                                                    I = l.maxFragLookUpTolerance,
                                                    O = E ? L[E.sn - L[0].sn + 1] : undefined,
                                                    M = function(e) {
                                                        var t = Math.min(I, e.duration);
                                                        return e.start + e.duration - t <= b ? 1 : e.start - t > b && e.start ? -1 : 0
                                                    };
                                                b < C ? (b > C - I && (I = 0), D = O && !M(O) ? O : s["default"].search(L, M)) : D = L[P - 1], D && (x = D, A = D.start, E && x.level === E.level && x.sn === E.sn && (x.sn < r.endSN ? (x = L[x.sn + 1 - r.startSN], h.logger.log("SN just loaded, load next one: " + x.sn)) : x = null))
                                            }
                                            x && (x.encrypted ? (h.logger.log("Loading key for " + x.sn + " of [" + r.startSN + " ," + r.endSN + "],track " + T), this.state = m.KEY_LOADING, n.trigger(a["default"].KEY_LOADING, {
                                                frag: x
                                            })) : (h.logger.log("Loading " + x.sn + ", cc: " + x.cc + " of [" + r.startSN + " ," + r.endSN + "],track " + T + ", currentTime:" + t + ",bufferEnd:" + b.toFixed(3)), (k || this.fragmentTracker.getState(x) === p.FragmentState.NOT_LOADED) && (this.fragCurrent = x, this.startFragRequested = !0, e.isFinite(x.sn) && (this.nextLoadPosition = x.start + x.duration), n.trigger(a["default"].FRAG_LOADING, {
                                                frag: x
                                            }), this.state = m.FRAG_LOADING)))
                                        }
                                        break;
                                    case m.WAITING_TRACK:
                                        i = this.tracks[this.trackId], i && i.details && (this.state = m.IDLE);
                                        break;
                                    case m.FRAG_LOADING_WAITING_RETRY:
                                        var F = g.now(),
                                            N = this.retryDate;
                                        u = this.media;
                                        var B = u && u.seeking;
                                        (!N || F >= N || B) && (h.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = m.IDLE);
                                        break;
                                    case m.WAITING_INIT_PTS:
                                        var U = this.videoTrackCC;
                                        if (this.initPTS[U] === undefined) break;
                                        var j = this.waitingFragment;
                                        if (j) {
                                            var V = j.frag.cc;
                                            U !== V ? (i = this.tracks[this.trackId], i.details && i.details.live && (h.logger.warn("Waiting fragment CC (" + V + ") does not match video track CC (" + U + ")"), this.waitingFragment = null, this.state = m.IDLE)) : (this.state = m.FRAG_LOADING, this.onFragLoaded(this.waitingFragment), this.waitingFragment = null)
                                        } else this.state = m.IDLE;
                                        break;
                                    case m.STOPPED:
                                    case m.FRAG_LOADING:
                                    case m.PARSING:
                                    case m.PARSED:
                                    case m.ENDED:
                                }
                            }, i.prototype.onMediaAttached = function(e) {
                                var t = this.media = this.mediaBuffer = e.media;
                                this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("ended", this.onvended);
                                var i = this.config;
                                this.tracks && i.autoStartLoad && this.startLoad(i.startPosition)
                            }, i.prototype.onMediaDetaching = function() {
                                var e = this.media;
                                e && e.ended && (h.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1, this.stopLoad()
                            }, i.prototype.onMediaSeeking = function() {
                                this.state === m.ENDED && (this.state = m.IDLE), this.media && (this.lastCurrentTime = this.media.currentTime), this.tick()
                            }, i.prototype.onMediaEnded = function() {
                                this.startPosition = this.lastCurrentTime = 0
                            }, i.prototype.onAudioTracksUpdated = function(e) {
                                h.logger.log("audio tracks updated"), this.tracks = e.audioTracks
                            }, i.prototype.onAudioTrackSwitching = function(e) {
                                var t = !!e.url;
                                this.trackId = e.id, this.fragCurrent = null, this.state = m.PAUSED, this.waitingFragment = null, t ? this.setInterval(100) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null), t && (this.audioSwitch = !0, this.state = m.IDLE), this.tick()
                            }, i.prototype.onAudioTrackLoaded = function(t) {
                                var i = t.details,
                                    r = t.id,
                                    s = this.tracks[r],
                                    o = i.totalduration,
                                    n = 0;
                                if (h.logger.log("track " + r + " loaded [" + i.startSN + "," + i.endSN + "],duration:" + o), i.live) {
                                    var a = s.details;
                                    a && i.fragments.length > 0 ? (l.mergeDetails(a, i), n = i.fragments[0].start, i.PTSKnown ? h.logger.log("live audio playlist sliding:" + n.toFixed(3)) : h.logger.log("live audio playlist - outdated PTS, unknown sliding")) : (i.PTSKnown = !1, h.logger.log("live audio playlist - first load, unknown sliding"))
                                } else i.PTSKnown = !1;
                                if (s.details = i, !this.startFragRequested) {
                                    if (-1 === this.startPosition) {
                                        var d = i.startTimeOffset;
                                        e.isFinite(d) ? (h.logger.log("start time offset found in playlist, adjust startPosition to " + d), this.startPosition = d) : this.startPosition = 0
                                    }
                                    this.nextLoadPosition = this.startPosition
                                }
                                this.state === m.WAITING_TRACK && (this.state = m.IDLE), this.tick()
                            }, i.prototype.onKeyLoaded = function() {
                                this.state === m.KEY_LOADING && (this.state = m.IDLE, this.tick())
                            }, i.prototype.onFragLoaded = function(e) {
                                var t = this.fragCurrent,
                                    i = e.frag;
                                if (this.state === m.FRAG_LOADING && t && "audio" === i.type && i.level === t.level && i.sn === t.sn) {
                                    var r = this.tracks[this.trackId],
                                        s = r.details,
                                        o = s.totalduration,
                                        l = t.level,
                                        d = t.sn,
                                        u = t.cc,
                                        c = this.config.defaultAudioCodec || r.audioCodec || "mp4a.40.2",
                                        f = this.stats = e.stats;
                                    if ("initSegment" === d) this.state = m.IDLE, f.tparsed = f.tbuffered = g.now(), s.initSegment.data = e.payload, this.hls.trigger(a["default"].FRAG_BUFFERED, {
                                        stats: f,
                                        frag: t,
                                        id: "audio"
                                    }), this.tick();
                                    else {
                                        this.state = m.PARSING, this.appended = !1, this.demuxer || (this.demuxer = new n["default"](this.hls, "audio"));
                                        var p = this.initPTS[u],
                                            v = s.initSegment ? s.initSegment.data : [];
                                        if (s.initSegment || p !== undefined) {
                                            this.pendingBuffering = !0, h.logger.log("Demuxing " + d + " of [" + s.startSN + " ," + s.endSN + "],track " + l);
                                            this.demuxer.push(e.payload, v, c, null, t, o, !1, p)
                                        } else h.logger.log("unknown video PTS for continuity counter " + u + ", waiting for video PTS before demuxing audio frag " + d + " of [" + s.startSN + " ," + s.endSN + "],track " + l), this.waitingFragment = e, this.state = m.WAITING_INIT_PTS
                                    }
                                }
                                this.fragLoadError = 0
                            }, i.prototype.onFragParsingInitSegment = function(e) {
                                var t = this.fragCurrent,
                                    i = e.frag;
                                if (t && "audio" === e.id && i.sn === t.sn && i.level === t.level && this.state === m.PARSING) {
                                    var r = e.tracks,
                                        s = void 0;
                                    if (r.video && delete r.video, s = r.audio) {
                                        s.levelCodec = s.codec, s.id = e.id, this.hls.trigger(a["default"].BUFFER_CODECS, r), h.logger.log("audio track:audio,container:" + s.container + ",codecs[level/parsed]=[" + s.levelCodec + "/" + s.codec + "]");
                                        var o = s.initSegment;
                                        if (o) {
                                            var n = {
                                                type: "audio",
                                                data: o,
                                                parent: "audio",
                                                content: "initSegment"
                                            };
                                            this.audioSwitch ? this.pendingData = [n] : (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(a["default"].BUFFER_APPENDING, n))
                                        }
                                        this.tick()
                                    }
                                }
                            }, i.prototype.onFragParsingData = function(t) {
                                var i = this,
                                    r = this.fragCurrent,
                                    s = t.frag;
                                if (r && "audio" === t.id && "audio" === t.type && s.sn === r.sn && s.level === r.level && this.state === m.PARSING) {
                                    var o = this.trackId,
                                        n = this.tracks[o],
                                        d = this.hls;
                                    e.isFinite(t.endPTS) || (t.endPTS = t.startPTS + r.duration, t.endDTS = t.startDTS + r.duration), r.addElementaryStream(v["default"].ElementaryStreamTypes.AUDIO), h.logger.log("parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb), l.updateFragPTSDTS(n.details, r, t.startPTS, t.endPTS);
                                    var c = this.audioSwitch,
                                        f = this.media,
                                        p = !1;
                                    if (c && f)
                                        if (f.readyState) {
                                            var g = f.currentTime;
                                            h.logger.log("switching audio track : currentTime:" + g), g >= t.startPTS && (h.logger.log("switching audio track : flushing all audio"), this.state = m.BUFFER_FLUSHING, d.trigger(a["default"].BUFFER_FLUSHING, {
                                                startOffset: 0,
                                                endOffset: e.POSITIVE_INFINITY,
                                                type: "audio"
                                            }), p = !0, this.audioSwitch = !1, d.trigger(a["default"].AUDIO_TRACK_SWITCHED, {
                                                id: o
                                            }))
                                        } else this.audioSwitch = !1, d.trigger(a["default"].AUDIO_TRACK_SWITCHED, {
                                            id: o
                                        });
                                    var y = this.pendingData;
                                    if (!y) return h.logger.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"), void d.trigger(a["default"].ERROR, {
                                        type: u.ErrorTypes.MEDIA_ERROR,
                                        details: null,
                                        fatal: !0
                                    });
                                    this.audioSwitch || ([t.data1, t.data2].forEach(function(e) {
                                        e && e.length && y.push({
                                            type: t.type,
                                            data: e,
                                            parent: "audio",
                                            content: "data"
                                        })
                                    }), !p && y.length && (y.forEach(function(e) {
                                        i.state === m.PARSING && (i.pendingBuffering = !0, i.hls.trigger(a["default"].BUFFER_APPENDING, e))
                                    }), this.pendingData = [], this.appended = !0)), this.tick()
                                }
                            }, i.prototype.onFragParsed = function(e) {
                                var t = this.fragCurrent,
                                    i = e.frag;
                                t && "audio" === e.id && i.sn === t.sn && i.level === t.level && this.state === m.PARSING && (this.stats.tparsed = g.now(), this.state = m.PARSED, this._checkAppendedParsed())
                            }, i.prototype.onBufferReset = function() {
                                this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
                            }, i.prototype.onBufferCreated = function(e) {
                                var t = e.tracks.audio;
                                t && (this.mediaBuffer = t.buffer, this.loadedmetadata = !0), e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
                            }, i.prototype.onBufferAppended = function(e) {
                                if ("audio" === e.parent) {
                                    var t = this.state;
                                    t !== m.PARSING && t !== m.PARSED || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed())
                                }
                            }, i.prototype._checkAppendedParsed = function() {
                                if (!(this.state !== m.PARSED || this.appended && this.pendingBuffering)) {
                                    var e = this.fragCurrent,
                                        t = this.stats,
                                        i = this.hls;
                                    if (e) {
                                        this.fragPrevious = e, t.tbuffered = g.now(), i.trigger(a["default"].FRAG_BUFFERED, {
                                            stats: t,
                                            frag: e,
                                            id: "audio"
                                        });
                                        var r = this.mediaBuffer ? this.mediaBuffer : this.media;
                                        h.logger.log("audio buffered : " + d["default"].toString(r.buffered)), this.audioSwitch && this.appended && (this.audioSwitch = !1, i.trigger(a["default"].AUDIO_TRACK_SWITCHED, {
                                            id: this.trackId
                                        })), this.state = m.IDLE
                                    }
                                    this.tick()
                                }
                            }, i.prototype.onError = function(t) {
                                var i = t.frag;
                                if (!i || "audio" === i.type) switch (t.details) {
                                    case u.ErrorDetails.FRAG_LOAD_ERROR:
                                    case u.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                        var r = t.frag;
                                        if (r && "audio" !== r.type) break;
                                        if (!t.fatal) {
                                            var s = this.fragLoadError;
                                            s ? s++ : s = 1;
                                            var n = this.config;
                                            if (s <= n.fragLoadingMaxRetry) {
                                                this.fragLoadError = s;
                                                var l = Math.min(Math.pow(2, s - 1) * n.fragLoadingRetryDelay, n.fragLoadingMaxRetryTimeout);
                                                h.logger.warn("AudioStreamController: frag loading failed, retry in " + l + " ms"), this.retryDate = g.now() + l, this.state = m.FRAG_LOADING_WAITING_RETRY
                                            } else h.logger.error("AudioStreamController: " + t.details + " reaches max retry, redispatch as fatal ..."), t.fatal = !0, this.state = m.ERROR
                                        }
                                        break;
                                    case u.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                                    case u.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                                    case u.ErrorDetails.KEY_LOAD_ERROR:
                                    case u.ErrorDetails.KEY_LOAD_TIMEOUT:
                                        this.state !== m.ERROR && (this.state = t.fatal ? m.ERROR : m.IDLE, h.logger.warn("AudioStreamController: " + t.details + " while loading frag, now switching to " + this.state + " state ..."));
                                        break;
                                    case u.ErrorDetails.BUFFER_FULL_ERROR:
                                        if ("audio" === t.parent && (this.state === m.PARSING || this.state === m.PARSED)) {
                                            var d = this.mediaBuffer,
                                                c = this.media.currentTime;
                                            if (d && o.BufferHelper.isBuffered(d, c) && o.BufferHelper.isBuffered(d, c + .5)) {
                                                var n = this.config;
                                                n.maxMaxBufferLength >= n.maxBufferLength && (n.maxMaxBufferLength /= 2, h.logger.warn("AudioStreamController: reduce max buffer length to " + n.maxMaxBufferLength + "s")), this.state = m.IDLE
                                            } else h.logger.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, this.state = m.BUFFER_FLUSHING, this.hls.trigger(a["default"].BUFFER_FLUSHING, {
                                                startOffset: 0,
                                                endOffset: e.POSITIVE_INFINITY,
                                                type: "audio"
                                            })
                                        }
                                }
                            }, i.prototype.onBufferFlushed = function() {
                                var e = this,
                                    t = this.pendingData;
                                t && t.length ? (h.logger.log("AudioStreamController: appending pending audio data after buffer flushed"), t.forEach(function(t) {
                                    e.hls.trigger(a["default"].BUFFER_APPENDING, t)
                                }), this.appended = !0, this.pendingData = [], this.state = m.PARSED) : (this.state = m.IDLE, this.fragPrevious = null, this.tick())
                            }, i
                        }(f["default"]);
                    t["default"] = y
                }).call(this, i("./src/polyfills/number.js").Number)
            },
            "./src/controller/audio-track-controller.js": function(e, t, i) {
                "use strict";
                var r = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                    };
                    return function(t, i) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./src/events.js"),
                    o = i("./src/task-loop.js"),
                    n = i("./src/utils/logger.js"),
                    a = i("./src/errors.js"),
                    l = function(e) {
                        function t(t) {
                            var i = e.call(this, t, s["default"].MANIFEST_LOADING, s["default"].MANIFEST_PARSED, s["default"].AUDIO_TRACK_LOADED, s["default"].AUDIO_TRACK_SWITCHED, s["default"].LEVEL_LOADED, s["default"].ERROR) || this;
                            return i._trackId = -1, i._selectDefaultTrack = !0, i.tracks = [], i.trackIdBlacklist = Object.create(null), i.audioGroupId = null, i
                        }
                        return r(t, e), t.prototype.onManifestLoading = function() {
                            this.tracks = [], this._trackId = -1, this._selectDefaultTrack = !0
                        }, t.prototype.onManifestParsed = function(e) {
                            var t = this.tracks = e.audioTracks || [];
                            this.hls.trigger(s["default"].AUDIO_TRACKS_UPDATED, {
                                audioTracks: t
                            })
                        }, t.prototype.onAudioTrackLoaded = function(e) {
                            if (e.id >= this.tracks.length) return void n.logger.warn("Invalid audio track id:", e.id);
                            if (n.logger.log("audioTrack " + e.id + " loaded"), this.tracks[e.id].details = e.details, e.details.live && !this.hasInterval()) {
                                var t = 1e3 * e.details.targetduration;
                                this.setInterval(t)
                            }!e.details.live && this.hasInterval() && this.clearInterval()
                        }, t.prototype.onAudioTrackSwitched = function(e) {
                            var t = this.tracks[e.id].groupId;
                            t && this.audioGroupId !== t && (this.audioGroupId = t)
                        }, t.prototype.onLevelLoaded = function(e) {
                            var t = this.hls.levels[e.level];
                            if (t.audioGroupIds) {
                                var i = t.audioGroupIds[t.urlId];
                                this.audioGroupId !== i && (this.audioGroupId = i, this._selectInitialAudioTrack())
                            }
                        }, t.prototype.onError = function(e) {
                            e.type === a.ErrorTypes.NETWORK_ERROR && (e.fatal && this.clearInterval(), e.details === a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR && (n.logger.warn("Network failure on audio-track id:", e.context.id), this._handleLoadError()))
                        }, Object.defineProperty(t.prototype, "audioTracks", {
                            get: function() {
                                return this.tracks
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "audioTrack", {
                            get: function() {
                                return this._trackId
                            },
                            set: function(e) {
                                this._setAudioTrack(e), this._selectDefaultTrack = !1
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.prototype._setAudioTrack = function(e) {
                            if (this._trackId === e && this.tracks[this._trackId].details) return void n.logger.debug("Same id as current audio-track passed, and track details available -> no-op");
                            if (e < 0 || e >= this.tracks.length) return void n.logger.warn("Invalid id passed to audio-track controller");
                            var t = this.tracks[e];
                            n.logger.log("Now switching to audio-track index " + e), this.clearInterval(), this._trackId = e;
                            var i = t.url,
                                r = t.type,
                                o = t.id;
                            this.hls.trigger(s["default"].AUDIO_TRACK_SWITCHING, {
                                id: o,
                                type: r,
                                url: i
                            }), this._loadTrackDetailsIfNeeded(t)
                        }, t.prototype.doTick = function() {
                            this._updateTrack(this._trackId)
                        }, t.prototype._selectInitialAudioTrack = function() {
                            var e = this,
                                t = this.tracks;
                            if (t.length) {
                                var i = this.tracks[this._trackId],
                                    r = null;
                                if (i && (r = i.name), this._selectDefaultTrack) {
                                    var o = t.filter(function(e) {
                                        return e["default"]
                                    });
                                    o.length ? t = o : n.logger.warn("No default audio tracks defined")
                                }
                                var l = !1,
                                    d = function() {
                                        t.forEach(function(t) {
                                            l || e.audioGroupId && t.groupId !== e.audioGroupId || r && r !== t.name || (e._setAudioTrack(t.id), l = !0)
                                        })
                                    };
                                d(), l || (r = null, d()), l || (n.logger.error("No track found for running audio group-ID: " + this.audioGroupId), this.hls.trigger(s["default"].ERROR, {
                                    type: a.ErrorTypes.MEDIA_ERROR,
                                    details: a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                                    fatal: !0
                                }))
                            }
                        }, t.prototype._needsTrackLoading = function(e) {
                            var t = e.details;
                            return !t || (!!t.live || void 0)
                        }, t.prototype._loadTrackDetailsIfNeeded = function(e) {
                            if (this._needsTrackLoading(e)) {
                                var t = e.url,
                                    i = e.id;
                                n.logger.log("loading audio-track playlist for id: " + i), this.hls.trigger(s["default"].AUDIO_TRACK_LOADING, {
                                    url: t,
                                    id: i
                                })
                            }
                        }, t.prototype._updateTrack = function(e) {
                            if (!(e < 0 || e >= this.tracks.length)) {
                                this.clearInterval(), this._trackId = e, n.logger.log("trying to update audio-track " + e);
                                var t = this.tracks[e];
                                this._loadTrackDetailsIfNeeded(t)
                            }
                        }, t.prototype._handleLoadError = function() {
                            this.trackIdBlacklist[this._trackId] = !0;
                            var e = this._trackId,
                                t = this.tracks[e],
                                i = t.name,
                                r = t.language,
                                s = t.groupId;
                            n.logger.warn("Loading failed on audio track id: " + e + ", group-id: " + s + ', name/language: "' + i + '" / "' + r + '"');
                            for (var o = e, a = 0; a < this.tracks.length; a++)
                                if (!this.trackIdBlacklist[a]) {
                                    var l = this.tracks[a];
                                    if (l.name === i) {
                                        o = a;
                                        break
                                    }
                                } if (o === e) return void n.logger.warn('No fallback audio-track found for name/language: "' + i + '" / "' + r + '"');
                            n.logger.log("Attempting audio-track fallback id:", o, "group-id:", this.tracks[o].groupId), this._setAudioTrack(o)
                        }, t
                    }(o["default"]);
                t["default"] = l
            },
            "./src/controller/buffer-controller.js": function(e, t, i) {
                "use strict";
                (function(e) {
                    var r = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                        };
                        return function(t, i) {
                            function r() {
                                this.constructor = t
                            }
                            e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var s = i("./src/events.js"),
                        o = i("./src/event-handler.js"),
                        n = i("./src/utils/logger.js"),
                        a = i("./src/errors.js"),
                        l = i("./src/utils/mediasource-helper.js"),
                        d = l.getMediaSource(),
                        u = function(t) {
                            function i(e) {
                                var i = t.call(this, e, s["default"].MEDIA_ATTACHING, s["default"].MEDIA_DETACHING, s["default"].MANIFEST_PARSED, s["default"].BUFFER_RESET, s["default"].BUFFER_APPENDING, s["default"].BUFFER_CODECS, s["default"].BUFFER_EOS, s["default"].BUFFER_FLUSHING, s["default"].LEVEL_PTS_UPDATED, s["default"].LEVEL_UPDATED) || this;
                                return i._msDuration = null, i._levelDuration = null, i._live = null, i._objectUrl = null, i.onsbue = i.onSBUpdateEnd.bind(i), i.onsbe = i.onSBUpdateError.bind(i), i.pendingTracks = {}, i.tracks = {}, i
                            }
                            return r(i, t), i.prototype.destroy = function() {
                                o["default"].prototype.destroy.call(this)
                            }, i.prototype.onLevelPtsUpdated = function(e) {
                                var t = e.type,
                                    i = this.tracks.audio;
                                if ("audio" === t && i && "audio/mpeg" === i.container) {
                                    var r = this.sourceBuffer.audio;
                                    if (Math.abs(r.timestampOffset - e.start) > .1) {
                                        var s = r.updating;
                                        try {
                                            r.abort()
                                        } catch (o) {
                                            s = !0, n.logger.warn("can not abort audio buffer: " + o)
                                        }
                                        s ? this.audioTimestampOffset = e.start : (n.logger.warn("change mpeg audio timestamp offset from " + r.timestampOffset + " to " + e.start), r.timestampOffset = e.start)
                                    }
                                }
                            }, i.prototype.onManifestParsed = function(e) {
                                var t = e.audio,
                                    i = e.video || e.levels.length && e.altAudio,
                                    r = 0;
                                e.altAudio && (t || i) && (r = (t ? 1 : 0) + (i ? 1 : 0), n.logger.log(r + " sourceBuffer(s) expected")), this.sourceBufferNb = r
                            }, i.prototype.onMediaAttaching = function(e) {
                                var t = this.media = e.media;
                                if (t) {
                                    var i = this.mediaSource = new d;
                                    this.onmso = this.onMediaSourceOpen.bind(this), this.onmse = this.onMediaSourceEnded.bind(this), this.onmsc = this.onMediaSourceClose.bind(this), i.addEventListener("sourceopen", this.onmso), i.addEventListener("sourceended", this.onmse), i.addEventListener("sourceclose", this.onmsc), t.src = window.URL.createObjectURL(i), this._objectUrl = t.src
                                }
                            }, i.prototype.onMediaDetaching = function() {
                                n.logger.log("media source detaching");
                                var e = this.mediaSource;
                                if (e) {
                                    if ("open" === e.readyState) try {
                                        e.endOfStream()
                                    } catch (t) {
                                        n.logger.warn("onMediaDetaching:" + t.message + " while calling endOfStream")
                                    }
                                    e.removeEventListener("sourceopen", this.onmso), e.removeEventListener("sourceended", this.onmse), e.removeEventListener("sourceclose", this.onmsc), this.media && (window.URL.revokeObjectURL(this._objectUrl), this.media.src === this._objectUrl ? (this.media.removeAttribute("src"), this.media.load()) : n.logger.warn("media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.pendingTracks = {}, this.tracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                                }
                                this.onmso = this.onmse = this.onmsc = null, this.hls.trigger(s["default"].MEDIA_DETACHED)
                            }, i.prototype.onMediaSourceOpen = function() {
                                n.logger.log("media source opened"), this.hls.trigger(s["default"].MEDIA_ATTACHED, {
                                    media: this.media
                                });
                                var e = this.mediaSource;
                                e && e.removeEventListener("sourceopen", this.onmso), this.checkPendingTracks()
                            }, i.prototype.checkPendingTracks = function() {
                                var e = this.pendingTracks,
                                    t = Object.keys(e).length;
                                t && (this.sourceBufferNb <= t || 0 === this.sourceBufferNb) && (this.createSourceBuffers(e), this.pendingTracks = {}, this.doAppending())
                            }, i.prototype.onMediaSourceClose = function() {
                                n.logger.log("media source closed")
                            }, i.prototype.onMediaSourceEnded = function() {
                                n.logger.log("media source ended")
                            }, i.prototype.onSBUpdateEnd = function() {
                                if (this.audioTimestampOffset) {
                                    var e = this.sourceBuffer.audio;
                                    n.logger.warn("change mpeg audio timestamp offset from " + e.timestampOffset + " to " + this.audioTimestampOffset), e.timestampOffset = this.audioTimestampOffset, delete this.audioTimestampOffset
                                }
                                this._needsFlush && this.doFlush(), this._needsEos && this.checkEos(), this.appending = !1;
                                var t = this.parent,
                                    i = this.segments.reduce(function(e, i) {
                                        return i.parent === t ? e + 1 : e
                                    }, 0),
                                    r = {},
                                    o = this.sourceBuffer;
                                for (var a in o) r[a] = o[a].buffered;
                                this.hls.trigger(s["default"].BUFFER_APPENDED, {
                                    parent: t,
                                    pending: i,
                                    timeRanges: r
                                }), this._needsFlush || this.doAppending(), this.updateMediaElementDuration()
                            }, i.prototype.onSBUpdateError = function(e) {
                                n.logger.error("sourceBuffer error:", e), this.hls.trigger(s["default"].ERROR, {
                                    type: a.ErrorTypes.MEDIA_ERROR,
                                    details: a.ErrorDetails.BUFFER_APPENDING_ERROR,
                                    fatal: !1
                                })
                            }, i.prototype.onBufferReset = function() {
                                var e = this.sourceBuffer;
                                for (var t in e) {
                                    var i = e[t];
                                    try {
                                        this.mediaSource.removeSourceBuffer(i), i.removeEventListener("updateend", this.onsbue), i.removeEventListener("error", this.onsbe)
                                    } catch (r) {}
                                }
                                this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                            }, i.prototype.onBufferCodecs = function(e) {
                                if (0 === Object.keys(this.sourceBuffer).length) {
                                    for (var t in e) this.pendingTracks[t] = e[t];
                                    var i = this.mediaSource;
                                    i && "open" === i.readyState && this.checkPendingTracks()
                                }
                            }, i.prototype.createSourceBuffers = function(e) {
                                var t = this.sourceBuffer,
                                    i = this.mediaSource;
                                for (var r in e)
                                    if (!t[r]) {
                                        var o = e[r],
                                            l = o.levelCodec || o.codec,
                                            d = o.container + ";codecs=" + l;
                                        n.logger.log("creating sourceBuffer(" + d + ")");
                                        try {
                                            var u = t[r] = i.addSourceBuffer(d);
                                            u.addEventListener("updateend", this.onsbue), u.addEventListener("error", this.onsbe), this.tracks[r] = {
                                                codec: l,
                                                container: o.container
                                            }, o.buffer = u
                                        } catch (h) {
                                            n.logger.error("error while trying to add sourceBuffer:" + h.message), this.hls.trigger(s["default"].ERROR, {
                                                type: a.ErrorTypes.MEDIA_ERROR,
                                                details: a.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                                                fatal: !1,
                                                err: h,
                                                mimeType: d
                                            })
                                        }
                                    } this.hls.trigger(s["default"].BUFFER_CREATED, {
                                    tracks: e
                                })
                            }, i.prototype.onBufferAppending = function(e) {
                                this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e], this.doAppending())
                            }, i.prototype.onBufferAppendFail = function(e) {
                                n.logger.error("sourceBuffer error:", e.event), this.hls.trigger(s["default"].ERROR, {
                                    type: a.ErrorTypes.MEDIA_ERROR,
                                    details: a.ErrorDetails.BUFFER_APPENDING_ERROR,
                                    fatal: !1
                                })
                            }, i.prototype.onBufferEos = function(e) {
                                var t = this.sourceBuffer,
                                    i = e.type;
                                for (var r in t) i && r !== i || t[r].ended || (t[r].ended = !0, n.logger.log(r + " sourceBuffer now EOS"));
                                this.checkEos()
                            }, i.prototype.checkEos = function() {
                                var e = this.sourceBuffer,
                                    t = this.mediaSource;
                                if (!t || "open" !== t.readyState) return void(this._needsEos = !1);
                                for (var i in e) {
                                    var r = e[i];
                                    if (!r.ended) return;
                                    if (r.updating) return void(this._needsEos = !0)
                                }
                                n.logger.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");
                                try {
                                    t.endOfStream()
                                } catch (s) {
                                    n.logger.warn("exception while calling mediaSource.endOfStream()")
                                }
                                this._needsEos = !1
                            }, i.prototype.onBufferFlushing = function(e) {
                                this.flushRange.push({
                                    start: e.startOffset,
                                    end: e.endOffset,
                                    type: e.type
                                }), this.flushBufferCounter = 0, this.doFlush()
                            }, i.prototype.onLevelUpdated = function(e) {
                                var t = e.details;
                                t.fragments.length > 0 && (this._levelDuration = t.totalduration + t.fragments[0].start, this._live = t.live, this.updateMediaElementDuration())
                            }, i.prototype.updateMediaElementDuration = function() {
                                var t, i = this.hls.config;
                                if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
                                    for (var r in this.sourceBuffer)
                                        if (!0 === this.sourceBuffer[r].updating) return;
                                    t = this.media.duration, null === this._msDuration && (this._msDuration = this.mediaSource.duration), !0 === this._live && !0 === i.liveDurationInfinity ? (n.logger.log("Media Source duration is set to Infinity"), this._msDuration = this.mediaSource.duration = Infinity) : (this._levelDuration > this._msDuration && this._levelDuration > t || !e.isFinite(t)) && (n.logger.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)), this._msDuration = this.mediaSource.duration = this._levelDuration)
                                }
                            }, i.prototype.doFlush = function() {
                                for (; this.flushRange.length;) {
                                    var e = this.flushRange[0];
                                    if (!this.flushBuffer(e.start, e.end, e.type)) return void(this._needsFlush = !0);
                                    this.flushRange.shift(), this.flushBufferCounter = 0
                                }
                                if (0 === this.flushRange.length) {
                                    this._needsFlush = !1;
                                    var t = 0,
                                        i = this.sourceBuffer;
                                    try {
                                        for (var r in i) t += i[r].buffered.length
                                    } catch (o) {
                                        n.logger.error("error while accessing sourceBuffer.buffered")
                                    }
                                    this.appended = t, this.hls.trigger(s["default"].BUFFER_FLUSHED)
                                }
                            }, i.prototype.doAppending = function() {
                                var e = this.hls,
                                    t = this.sourceBuffer,
                                    i = this.segments;
                                if (Object.keys(t).length) {
                                    if (this.media.error) return this.segments = [], void n.logger.error("trying to append although a media error occured, flush segment and abort");
                                    if (this.appending) return;
                                    if (i && i.length) {
                                        var r = i.shift();
                                        try {
                                            var o = r.type,
                                                l = t[o];
                                            l ? l.updating ? i.unshift(r) : (l.ended = !1, this.parent = r.parent, l.appendBuffer(r.data), this.appendError = 0, this.appended++, this.appending = !0) : this.onSBUpdateEnd()
                                        } catch (u) {
                                            n.logger.error("error while trying to append buffer:" + u.message), i.unshift(r);
                                            var d = {
                                                type: a.ErrorTypes.MEDIA_ERROR,
                                                parent: r.parent
                                            };
                                            22 !== u.code ? (this.appendError ? this.appendError++ : this.appendError = 1, d.details = a.ErrorDetails.BUFFER_APPEND_ERROR, this.appendError > e.config.appendErrorMaxRetry ? (n.logger.log("fail " + e.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), i = [], d.fatal = !0, e.trigger(s["default"].ERROR, d)) : (d.fatal = !1, e.trigger(s["default"].ERROR, d))) : (this.segments = [], d.details = a.ErrorDetails.BUFFER_FULL_ERROR, d.fatal = !1, e.trigger(s["default"].ERROR, d))
                                        }
                                    }
                                }
                            }, i.prototype.flushBuffer = function(t, i, r) {
                                var s, o, a, l, d, u, h = this.sourceBuffer;
                                if (Object.keys(h).length) {
                                    if (n.logger.log("flushBuffer,pos/start/end: " + this.media.currentTime.toFixed(3) + "/" + t + "/" + i), this.flushBufferCounter < this.appended) {
                                        for (var c in h)
                                            if (!r || c === r) {
                                                if (s = h[c], s.ended = !1, s.updating) return n.logger.warn("cannot flush, sb updating in progress"), !1;
                                                try {
                                                    for (o = 0; o < s.buffered.length; o++)
                                                        if (a = s.buffered.start(o), l = s.buffered.end(o), -1 !== navigator.userAgent.toLowerCase().indexOf("firefox") && i === e.POSITIVE_INFINITY ? (d = t, u = i) : (d = Math.max(a, t), u = Math.min(l, i)), Math.min(u, l) - d > .5) return this.flushBufferCounter++, n.logger.log("flush " + c + " [" + d + "," + u + "], of [" + a + "," + l + "], pos:" + this.media.currentTime), s.remove(d, u), !1
                                                } catch (f) {
                                                    n.logger.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource")
                                                }
                                            }
                                    } else n.logger.warn("abort flushing too many retries");
                                    n.logger.log("buffer flushed")
                                }
                                return !0
                            }, i
                        }(o["default"]);
                    t["default"] = u
                }).call(this, i("./src/polyfills/number.js").Number)
            },
            "./src/controller/cap-level-controller.js": function(e, t, i) {
                "use strict";
                (function(e) {
                    var r = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                        };
                        return function(t, i) {
                            function r() {
                                this.constructor = t
                            }
                            e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var s = i("./src/events.js"),
                        o = i("./src/event-handler.js"),
                        n = function(t) {
                            function i(i) {
                                var r = t.call(this, i, s["default"].FPS_DROP_LEVEL_CAPPING, s["default"].MEDIA_ATTACHING, s["default"].MANIFEST_PARSED, s["default"].BUFFER_CODECS, s["default"].MEDIA_DETACHING) || this;
                                return r.autoLevelCapping = e.POSITIVE_INFINITY, r.firstLevel = null, r.levels = [], r.media = null, r.restrictedLevels = [], r.timer = null, r
                            }
                            return r(i, t), i.prototype.destroy = function() {
                                this.hls.config.capLevelToPlayerSize && (this.media = null, this._stopCapping())
                            }, i.prototype.onFpsDropLevelCapping = function(e) {
                                i.isLevelAllowed(e.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(e.droppedLevel)
                            }, i.prototype.onMediaAttaching = function(e) {
                                this.media = e.media instanceof window.HTMLVideoElement ? e.media : null
                            }, i.prototype.onManifestParsed = function(e) {
                                var t = this.hls;
                                this.restrictedLevels = [], this.levels = e.levels, this.firstLevel = e.firstLevel, t.config.capLevelToPlayerSize && (e.video || e.levels.length && e.altAudio) && this._startCapping()
                            }, i.prototype.onBufferCodecs = function(e) {
                                this.hls.config.capLevelToPlayerSize && e.video && this._startCapping()
                            }, i.prototype.onLevelsUpdated = function(e) {
                                this.levels = e.levels
                            }, i.prototype.onMediaDetaching = function() {
                                this._stopCapping()
                            }, i.prototype.detectPlayerSize = function() {
                                if (this.media) {
                                    var e = this.levels ? this.levels.length : 0;
                                    if (e) {
                                        var t = this.hls;
                                        t.autoLevelCapping = this.getMaxLevel(e - 1), t.autoLevelCapping > this.autoLevelCapping && t.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping
                                    }
                                }
                            }, i.prototype.getMaxLevel = function(e) {
                                var t = this;
                                if (!this.levels) return -1;
                                var r = this.levels.filter(function(r, s) {
                                    return i.isLevelAllowed(s, t.restrictedLevels) && s <= e
                                });
                                return i.getMaxLevelByMediaSize(r, this.mediaWidth, this.mediaHeight)
                            }, i.prototype._startCapping = function() {
                                this.timer || (this.autoLevelCapping = e.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
                            }, i.prototype._stopCapping = function() {
                                this.restrictedLevels = [], this.firstLevel = null, this.autoLevelCapping = e.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer), this.timer = null)
                            }, Object.defineProperty(i.prototype, "mediaWidth", {
                                get: function() {
                                    var e, t = this.media;
                                    return t && (e = t.width || t.clientWidth || t.offsetWidth, e *= i.contentScaleFactor), e
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(i.prototype, "mediaHeight", {
                                get: function() {
                                    var e, t = this.media;
                                    return t && (e = t.height || t.clientHeight || t.offsetHeight, e *= i.contentScaleFactor), e
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(i, "contentScaleFactor", {
                                get: function() {
                                    var e = 1;
                                    try {
                                        e = window.devicePixelRatio
                                    } catch (t) {}
                                    return e
                                },
                                enumerable: !0,
                                configurable: !0
                            }), i.isLevelAllowed = function(e, t) {
                                return void 0 === t && (t = []), -1 === t.indexOf(e)
                            }, i.getMaxLevelByMediaSize = function(e, t, i) {
                                if (!e || e && !e.length) return -1;
                                for (var r = e.length - 1, s = 0; s < e.length; s += 1) {
                                    var o = e[s];
                                    if ((o.width >= t || o.height >= i) && function(e, t) {
                                            return !t || (e.width !== t.width || e.height !== t.height)
                                        }(o, e[s + 1])) {
                                        r = s;
                                        break
                                    }
                                }
                                return r
                            }, i
                        }(o["default"]);
                    t["default"] = n
                }).call(this, i("./src/polyfills/number.js").Number)
            },
            "./src/controller/eme-controller.js": function(e, t, i) {
                "use strict";
                var r = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                    };
                    return function(t, i) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./src/event-handler.js"),
                    o = i("./src/events.js"),
                    n = i("./src/errors.js"),
                    a = i("./src/utils/logger.js"),
                    l = window.XMLHttpRequest,
                    d = {
                        WIDEVINE: "com.widevine.alpha",
                        PLAYREADY: "com.microsoft.playready"
                    },
                    u = function(e, t, i) {
                        var r = {
                            videoCapabilities: []
                        };
                        return t.forEach(function(e) {
                            r.videoCapabilities.push({
                                contentType: 'video/mp4; codecs="' + e + '"'
                            })
                        }), [r]
                    },
                    h = function(e, t, i) {
                        switch (e) {
                            case d.WIDEVINE:
                                return u(0, i);
                            default:
                                throw Error("Unknown key-system: " + e)
                        }
                    },
                    c = function(e) {
                        function t(t) {
                            var i = e.call(this, t, o["default"].MEDIA_ATTACHED, o["default"].MANIFEST_PARSED) || this;
                            return i._widevineLicenseUrl = t.config.widevineLicenseUrl, i._licenseXhrSetup = t.config.licenseXhrSetup, i._emeEnabled = t.config.emeEnabled, i._requestMediaKeySystemAccess = t.config.requestMediaKeySystemAccessFunc, i._mediaKeysList = [], i._media = null, i._hasSetMediaKeys = !1, i._isMediaEncrypted = !1, i._requestLicenseFailureCount = 0, i
                        }
                        return r(t, e), t.prototype.getLicenseServerUrl = function(e) {
                            var t;
                            switch (e) {
                                case d.WIDEVINE:
                                    t = this._widevineLicenseUrl;
                                    break;
                                default:
                                    t = null
                            }
                            return t || (a.logger.error('No license server URL configured for key-system "' + e + '"'), this.hls.trigger(o["default"].ERROR, {
                                type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                details: n.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                fatal: !0
                            })), t
                        }, t.prototype._attemptKeySystemAccess = function(e, t, i) {
                            var r = this,
                                s = h(e, 0, i);
                            if (!s) return void a.logger.warn("Can not create config for key-system (maybe because platform is not supported):", e);
                            a.logger.log("Requesting encrypted media key-system access"), this.requestMediaKeySystemAccess(e, s).then(function(t) {
                                r._onMediaKeySystemAccessObtained(e, t)
                            })["catch"](function(t) {
                                a.logger.error('Failed to obtain key-system "' + e + '" access:', t)
                            })
                        }, Object.defineProperty(t.prototype, "requestMediaKeySystemAccess", {
                            get: function() {
                                if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured");
                                return this._requestMediaKeySystemAccess
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.prototype._onMediaKeySystemAccessObtained = function(e, t) {
                            var i = this;
                            a.logger.log('Access for key-system "' + e + '" obtained');
                            var r = {
                                mediaKeys: null,
                                mediaKeysSession: null,
                                mediaKeysSessionInitialized: !1,
                                mediaKeySystemAccess: t,
                                mediaKeySystemDomain: e
                            };
                            this._mediaKeysList.push(r), t.createMediaKeys().then(function(t) {
                                r.mediaKeys = t, a.logger.log('Media-keys created for key-system "' + e + '"'), i._onMediaKeysCreated()
                            })["catch"](function(e) {
                                a.logger.error("Failed to create media-keys:", e)
                            })
                        }, t.prototype._onMediaKeysCreated = function() {
                            var e = this;
                            this._mediaKeysList.forEach(function(t) {
                                t.mediaKeysSession || (t.mediaKeysSession = t.mediaKeys.createSession(), e._onNewMediaKeySession(t.mediaKeysSession))
                            })
                        }, t.prototype._onNewMediaKeySession = function(e) {
                            var t = this;
                            a.logger.log("New key-system session " + e.sessionId), e.addEventListener("message", function(i) {
                                t._onKeySessionMessage(e, i.message)
                            }, !1)
                        }, t.prototype._onKeySessionMessage = function(e, t) {
                            a.logger.log("Got EME message event, creating license request"), this._requestLicense(t, function(t) {
                                a.logger.log("Received license data, updating key-session"), e.update(t)
                            })
                        }, t.prototype._onMediaEncrypted = function(e, t) {
                            a.logger.log('Media is encrypted using "' + e + '" init data type'), this._isMediaEncrypted = !0, this._mediaEncryptionInitDataType = e, this._mediaEncryptionInitData = t, this._attemptSetMediaKeys(), this._generateRequestWithPreferredKeySession()
                        }, t.prototype._attemptSetMediaKeys = function() {
                            if (!this._hasSetMediaKeys) {
                                var e = this._mediaKeysList[0];
                                if (!e || !e.mediaKeys) return a.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), void this.hls.trigger(o["default"].ERROR, {
                                    type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                    details: n.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                                    fatal: !0
                                });
                                a.logger.log("Setting keys for encrypted media"), this._media.setMediaKeys(e.mediaKeys), this._hasSetMediaKeys = !0
                            }
                        }, t.prototype._generateRequestWithPreferredKeySession = function() {
                            var e = this,
                                t = this._mediaKeysList[0];
                            if (!t) return a.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), void this.hls.trigger(o["default"].ERROR, {
                                type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                details: n.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                                fatal: !0
                            });
                            if (t.mediaKeysSessionInitialized) return void a.logger.warn("Key-Session already initialized but requested again");
                            var i = t.mediaKeysSession;
                            i || (a.logger.error("Fatal: Media is encrypted but no key-session existing"), this.hls.trigger(o["default"].ERROR, {
                                type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                details: n.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                                fatal: !0
                            }));
                            var r = this._mediaEncryptionInitDataType,
                                s = this._mediaEncryptionInitData;
                            a.logger.log('Generating key-session request for "' + r + '" init data type'), t.mediaKeysSessionInitialized = !0, i.generateRequest(r, s).then(function() {
                                a.logger.debug("Key-session generation succeeded")
                            })["catch"](function(t) {
                                a.logger.error("Error generating key-session request:", t), e.hls.trigger(o["default"].ERROR, {
                                    type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                    details: n.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                                    fatal: !1
                                })
                            })
                        }, t.prototype._createLicenseXhr = function(e, t, i) {
                            var r = new l,
                                s = this._licenseXhrSetup;
                            try {
                                if (s) try {
                                    s(r, e)
                                } catch (d) {
                                    r.open("POST", e, !0), s(r, e)
                                }
                                r.readyState || r.open("POST", e, !0)
                            } catch (d) {
                                return a.logger.error("Error setting up key-system license XHR", d), void this.hls.trigger(o["default"].ERROR, {
                                    type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                    details: n.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                    fatal: !0
                                })
                            }
                            return r.responseType = "arraybuffer", r.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, r, e, t, i), r
                        }, t.prototype._onLicenseRequestReadyStageChange = function(e, t, i, r) {
                            switch (e.readyState) {
                                case 4:
                                    if (200 === e.status) this._requestLicenseFailureCount = 0, a.logger.log("License request succeeded"), r(e.response);
                                    else {
                                        if (a.logger.error("License Request XHR failed (" + t + "). Status: " + e.status + " (" + e.statusText + ")"), ++this._requestLicenseFailureCount <= 3) {
                                            var s = 3 - this._requestLicenseFailureCount + 1;
                                            return a.logger.warn("Retrying license request, " + s + " attempts left"), void this._requestLicense(i, r)
                                        }
                                        this.hls.trigger(o["default"].ERROR, {
                                            type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                            details: n.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                            fatal: !0
                                        })
                                    }
                            }
                        }, t.prototype._generateLicenseRequestChallenge = function(e, t) {
                            var i;
                            return e.mediaKeySystemDomain === d.PLAYREADY ? a.logger.error("PlayReady is not supported (yet)") : e.mediaKeySystemDomain === d.WIDEVINE ? i = t : a.logger.error("Unsupported key-system:", e.mediaKeySystemDomain), i
                        }, t.prototype._requestLicense = function(e, t) {
                            a.logger.log("Requesting content license for key-system");
                            var i = this._mediaKeysList[0];
                            if (!i) return a.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), void this.hls.trigger(o["default"].ERROR, {
                                type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                details: n.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                                fatal: !0
                            });
                            var r = this.getLicenseServerUrl(i.mediaKeySystemDomain),
                                s = this._createLicenseXhr(r, e, t);
                            a.logger.log("Sending license request to URL: " + r), s.send(this._generateLicenseRequestChallenge(i, e))
                        }, t.prototype.onMediaAttached = function(e) {
                            var t = this;
                            if (this._emeEnabled) {
                                var i = e.media;
                                this._media = i, i.addEventListener("encrypted", function(e) {
                                    t._onMediaEncrypted(e.initDataType, e.initData)
                                })
                            }
                        }, t.prototype.onManifestParsed = function(e) {
                            if (this._emeEnabled) {
                                var t = e.levels.map(function(e) {
                                        return e.audioCodec
                                    }),
                                    i = e.levels.map(function(e) {
                                        return e.videoCodec
                                    });
                                this._attemptKeySystemAccess(d.WIDEVINE, t, i)
                            }
                        }, t
                    }(s["default"]);
                t["default"] = c
            },
            "./src/controller/fps-controller.js": function(e, t, i) {
                "use strict";
                var r = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                    };
                    return function(t, i) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./src/events.js"),
                    o = i("./src/event-handler.js"),
                    n = i("./src/utils/logger.js"),
                    a = window.performance,
                    l = function(e) {
                        function t(t) {
                            return e.call(this, t, s["default"].MEDIA_ATTACHING) || this
                        }
                        return r(t, e), t.prototype.destroy = function() {
                            this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1
                        }, t.prototype.onMediaAttaching = function(e) {
                            var t = this.hls.config;
                            if (t.capLevelOnFPSDrop) {
                                "function" == typeof(this.video = e.media instanceof window.HTMLVideoElement ? e.media : null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), t.fpsDroppedMonitoringPeriod)
                            }
                        }, t.prototype.checkFPS = function(e, t, i) {
                            var r = a.now();
                            if (t) {
                                if (this.lastTime) {
                                    var o = r - this.lastTime,
                                        l = i - this.lastDroppedFrames,
                                        d = t - this.lastDecodedFrames,
                                        u = 1e3 * l / o,
                                        h = this.hls;
                                    if (h.trigger(s["default"].FPS_DROP, {
                                            currentDropped: l,
                                            currentDecoded: d,
                                            totalDroppedFrames: i
                                        }), u > 0 && l > h.config.fpsDroppedMonitoringThreshold * d) {
                                        var c = h.currentLevel;
                                        n.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + c), c > 0 && (-1 === h.autoLevelCapping || h.autoLevelCapping >= c) && (c -= 1, h.trigger(s["default"].FPS_DROP_LEVEL_CAPPING, {
                                            level: c,
                                            droppedLevel: h.currentLevel
                                        }), h.autoLevelCapping = c, h.streamController.nextLevelSwitch())
                                    }
                                }
                                this.lastTime = r, this.lastDroppedFrames = i, this.lastDecodedFrames = t
                            }
                        }, t.prototype.checkFPSInterval = function() {
                            var e = this.video;
                            if (e)
                                if (this.isVideoPlaybackQualityAvailable) {
                                    var t = e.getVideoPlaybackQuality();
                                    this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames)
                                } else this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount)
                        }, t
                    }(o["default"]);
                t["default"] = l
            },
            "./src/controller/fragment-finders.js": function(e, t, i) {
                "use strict";
                (function(e) {
                    function r(t, i, r) {
                        if (!Array.isArray(t) || !t.length || !e.isFinite(i)) return null;
                        if (i < t[0].programDateTime) return null;
                        if (i >= t[t.length - 1].endProgramDateTime) return null;
                        r = r || 0;
                        for (var s = 0; s < t.length; ++s) {
                            var o = t[s];
                            if (n(i, r, o)) return o
                        }
                        return null
                    }

                    function s(e, t, i, r) {
                        void 0 === i && (i = 0), void 0 === r && (r = 0);
                        var s = e ? t[e.sn - t[0].sn + 1] : null;
                        return s && !o(i, r, s) ? s : a["default"].search(t, o.bind(null, i, r))
                    }

                    function o(e, t, i) {
                        void 0 === e && (e = 0), void 0 === t && (t = 0);
                        var r = Math.min(t, i.duration + (i.deltaPTS ? i.deltaPTS : 0));
                        return i.start + i.duration - r <= e ? 1 : i.start - r > e && i.start ? -1 : 0
                    }

                    function n(e, t, i) {
                        var r = 1e3 * Math.min(t, i.duration + (i.deltaPTS ? i.deltaPTS : 0));
                        return i.endProgramDateTime - r > e
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var a = i("./src/utils/binary-search.js");
                    t.findFragmentByPDT = r, t.findFragmentByPTS = s, t.fragmentWithinToleranceTest = o, t.pdtWithinToleranceTest = n
                }).call(this, i("./src/polyfills/number.js").Number)
            },
            "./src/controller/fragment-tracker.js": function(e, t, i) {
                "use strict";
                (function(e) {
                    var r = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                        };
                        return function(t, i) {
                            function r() {
                                this.constructor = t
                            }
                            e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var s = i("./src/event-handler.js"),
                        o = i("./src/events.js");
                    t.FragmentState = {
                        NOT_LOADED: "NOT_LOADED",
                        APPENDING: "APPENDING",
                        PARTIAL: "PARTIAL",
                        OK: "OK"
                    };
                    var n = function(i) {
                        function n(e) {
                            var t = i.call(this, e, o["default"].BUFFER_APPENDED, o["default"].FRAG_BUFFERED, o["default"].FRAG_LOADED) || this;
                            return t.bufferPadding = .2, t.fragments = Object.create(null), t.timeRanges = Object.create(null), t.config = e.config, t
                        }
                        return r(n, i), n.prototype.destroy = function() {
                            this.fragments = null, this.timeRanges = null, this.config = null, s["default"].prototype.destroy.call(this), i.prototype.destroy.call(this)
                        }, n.prototype.getBufferedFrag = function(e, t) {
                            var i = this.fragments,
                                r = Object.keys(i).filter(function(r) {
                                    var s = i[r];
                                    if (s.body.type !== t) return !1;
                                    if (!s.buffered) return !1;
                                    var o = s.body;
                                    return o.startPTS <= e && e <= o.endPTS
                                });
                            if (0 === r.length) return null;
                            var s = r.pop();
                            return i[s].body
                        }, n.prototype.detectEvictedFragments = function(e, t) {
                            var i, r, s = this;
                            Object.keys(this.fragments).forEach(function(o) {
                                var n = s.fragments[o];
                                if (!0 === n.buffered) {
                                    var a = n.range[e];
                                    if (a) {
                                        i = a.time;
                                        for (var l = 0; l < i.length; l++)
                                            if (r = i[l], !1 === s.isTimeBuffered(r.startPTS, r.endPTS, t)) {
                                                s.removeFragment(n.body);
                                                break
                                            }
                                    }
                                }
                            })
                        }, n.prototype.detectPartialFragments = function(e) {
                            var t = this,
                                i = this.getFragmentKey(e),
                                r = this.fragments[i];
                            r && (r.buffered = !0, Object.keys(this.timeRanges).forEach(function(i) {
                                if (e.hasElementaryStream(i)) {
                                    var s = t.timeRanges[i];
                                    r.range[i] = t.getBufferedTimes(e.startPTS, e.endPTS, s)
                                }
                            }))
                        }, n.prototype.getBufferedTimes = function(e, t, i) {
                            for (var r, s, o = [], n = !1, a = 0; a < i.length; a++) {
                                if (r = i.start(a) - this.bufferPadding, s = i.end(a) + this.bufferPadding, e >= r && t <= s) {
                                    o.push({
                                        startPTS: Math.max(e, i.start(a)),
                                        endPTS: Math.min(t, i.end(a))
                                    });
                                    break
                                }
                                if (e < s && t > r) o.push({
                                    startPTS: Math.max(e, i.start(a)),
                                    endPTS: Math.min(t, i.end(a))
                                }), n = !0;
                                else if (t <= r) break
                            }
                            return {
                                time: o,
                                partial: n
                            }
                        }, n.prototype.getFragmentKey = function(e) {
                            return e.type + "_" + e.level + "_" + e.urlId + "_" + e.sn
                        }, n.prototype.getPartialFragment = function(e) {
                            var t, i, r, s = this,
                                o = null,
                                n = 0;
                            return Object.keys(this.fragments).forEach(function(a) {
                                var l = s.fragments[a];
                                s.isPartial(l) && (i = l.body.startPTS - s.bufferPadding, r = l.body.endPTS + s.bufferPadding, e >= i && e <= r && (t = Math.min(e - i, r - e), n <= t && (o = l.body, n = t)))
                            }), o
                        }, n.prototype.getState = function(e) {
                            var i = this.getFragmentKey(e),
                                r = this.fragments[i],
                                s = t.FragmentState.NOT_LOADED;
                            return r !== undefined && (s = r.buffered ? !0 === this.isPartial(r) ? t.FragmentState.PARTIAL : t.FragmentState.OK : t.FragmentState.APPENDING), s
                        }, n.prototype.isPartial = function(e) {
                            return !0 === e.buffered && (e.range.video !== undefined && !0 === e.range.video.partial || e.range.audio !== undefined && !0 === e.range.audio.partial)
                        }, n.prototype.isTimeBuffered = function(e, t, i) {
                            for (var r, s, o = 0; o < i.length; o++) {
                                if (r = i.start(o) - this.bufferPadding, s = i.end(o) + this.bufferPadding, e >= r && t <= s) return !0;
                                if (t <= r) return !1
                            }
                            return !1
                        }, n.prototype.onFragLoaded = function(t) {
                            var i = t.frag;
                            e.isFinite(i.sn) && !i.bitrateTest && (this.fragments[this.getFragmentKey(i)] = {
                                body: i,
                                range: Object.create(null),
                                buffered: !1
                            })
                        }, n.prototype.onBufferAppended = function(e) {
                            var t = this;
                            this.timeRanges = e.timeRanges, Object.keys(this.timeRanges).forEach(function(e) {
                                var i = t.timeRanges[e];
                                t.detectEvictedFragments(e, i)
                            })
                        }, n.prototype.onFragBuffered = function(e) {
                            this.detectPartialFragments(e.frag)
                        }, n.prototype.hasFragment = function(e) {
                            var t = this.getFragmentKey(e);
                            return this.fragments[t] !== undefined
                        }, n.prototype.removeFragment = function(e) {
                            var t = this.getFragmentKey(e);
                            delete this.fragments[t]
                        }, n.prototype.removeAllFragments = function() {
                            this.fragments = Object.create(null)
                        }, n
                    }(s["default"]);
                    t.FragmentTracker = n
                }).call(this, i("./src/polyfills/number.js").Number)
            },
            "./src/controller/gap-controller.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/utils/buffer-helper.js"),
                    s = i("./src/errors.js"),
                    o = i("./src/events.js"),
                    n = i("./src/utils/logger.js"),
                    a = function() {
                        function e(e, t, i, r) {
                            this.config = e, this.media = t, this.fragmentTracker = i, this.hls = r, this.stallReported = !1
                        }
                        return e.prototype.poll = function(e, t) {
                            var i = this,
                                s = i.config,
                                o = i.media,
                                a = o.currentTime,
                                l = window.performance.now();
                            if (a !== e) return this.stallReported && (n.logger.warn("playback not stuck anymore @" + a + ", after " + Math.round(l - this._stalledTime) + "ms"), this.stallReported = !1), this._stalledTime = null, void(this.nudgeRetry = 0);
                            if (!(o.ended || !o.buffered.length || o.readyState > 2 || o.seeking && r.BufferHelper.isBuffered(o, a))) {
                                var d = l - this._stalledTime,
                                    u = r.BufferHelper.bufferInfo(o, a, s.maxBufferHole);
                                if (!this._stalledTime) return void(this._stalledTime = l);
                                d >= 1e3 && this._reportStall(u.len), this._tryFixBufferStall(u, d)
                            }
                        }, e.prototype._tryFixBufferStall = function(e, t) {
                            var i = this,
                                r = i.config,
                                s = i.fragmentTracker,
                                o = i.media,
                                n = o.currentTime,
                                a = s.getPartialFragment(n);
                            a && this._trySkipBufferHole(a), e.len > .5 && t > 1e3 * r.highBufferWatchdogPeriod && (this._stalledTime = null, this._tryNudgeBuffer())
                        }, e.prototype._reportStall = function(e) {
                            var t = this,
                                i = t.hls,
                                r = t.media;
                            t.stallReported || (this.stallReported = !0, n.logger.warn("Playback stalling at @" + r.currentTime + " due to low buffer"), i.trigger(o["default"].ERROR, {
                                type: s.ErrorTypes.MEDIA_ERROR,
                                details: s.ErrorDetails.BUFFER_STALLED_ERROR,
                                fatal: !1,
                                buffer: e
                            }))
                        }, e.prototype._trySkipBufferHole = function(e) {
                            for (var t = this, i = t.hls, r = t.media, a = r.currentTime, l = 0, d = 0; d < r.buffered.length; d++) {
                                var u = r.buffered.start(d);
                                if (a >= l && a < u) return r.currentTime = Math.max(u, r.currentTime + .1), n.logger.warn("skipping hole, adjusting currentTime from " + a + " to " + r.currentTime), this._stalledTime = null, void i.trigger(o["default"].ERROR, {
                                    type: s.ErrorTypes.MEDIA_ERROR,
                                    details: s.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                                    fatal: !1,
                                    reason: "fragment loaded with buffer holes, seeking from " + a + " to " + r.currentTime,
                                    frag: e
                                });
                                l = r.buffered.end(d)
                            }
                        }, e.prototype._tryNudgeBuffer = function() {
                            var e = this,
                                t = e.config,
                                i = e.hls,
                                r = e.media,
                                a = r.currentTime,
                                l = (this.nudgeRetry || 0) + 1;
                            if (this.nudgeRetry = l, l < t.nudgeMaxRetry) {
                                var d = a + l * t.nudgeOffset;
                                n.logger.log("adjust currentTime from " + a + " to " + d), r.currentTime = d, i.trigger(o["default"].ERROR, {
                                    type: s.ErrorTypes.MEDIA_ERROR,
                                    details: s.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                                    fatal: !1
                                })
                            } else n.logger.error("still stuck in high buffer @" + a + " after " + t.nudgeMaxRetry + ", raise fatal error"), i.trigger(o["default"].ERROR, {
                                type: s.ErrorTypes.MEDIA_ERROR,
                                details: s.ErrorDetails.BUFFER_STALLED_ERROR,
                                fatal: !0
                            })
                        }, e
                    }();
                t["default"] = a
            },
            "./src/controller/id3-track-controller.js": function(e, t, i) {
                "use strict";
                var r = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                    };
                    return function(t, i) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./src/events.js"),
                    o = i("./src/event-handler.js"),
                    n = i("./src/demux/id3.js"),
                    a = i("./src/utils/texttrack-utils.js"),
                    l = function(e) {
                        function t(t) {
                            var i = e.call(this, t, s["default"].MEDIA_ATTACHED, s["default"].MEDIA_DETACHING, s["default"].FRAG_PARSING_METADATA) || this;
                            return i.id3Track = undefined, i.media = undefined, i
                        }
                        return r(t, e), t.prototype.destroy = function() {
                            o["default"].prototype.destroy.call(this)
                        }, t.prototype.onMediaAttached = function(e) {
                            this.media = e.media, this.media
                        }, t.prototype.onMediaDetaching = function() {
                            a.clearCurrentCues(this.id3Track), this.id3Track = undefined, this.media = undefined
                        }, t.prototype.getID3Track = function(e) {
                            for (var t = 0; t < e.length; t++) {
                                var i = e[t];
                                if ("metadata" === i.kind && "id3" === i.label) return a.sendAddTrackEvent(i, this.media), i
                            }
                            return this.media.addTextTrack("metadata", "id3")
                        }, t.prototype.onFragParsingMetadata = function(e) {
                            var t = e.frag,
                                i = e.samples;
                            this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
                            for (var r = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, s = 0; s < i.length; s++) {
                                var o = n["default"].getID3Frames(i[s].data);
                                if (o) {
                                    var a = i[s].pts,
                                        l = s < i.length - 1 ? i[s + 1].pts : t.endPTS;
                                    a === l && (l += 1e-4);
                                    for (var d = 0; d < o.length; d++) {
                                        var u = o[d];
                                        if (!n["default"].isTimeStampFrame(u)) {
                                            var h = new r(a, l, "");
                                            h.value = u, this.id3Track.addCue(h)
                                        }
                                    }
                                }
                            }
                        }, t
                    }(o["default"]);
                t["default"] = l
            },
            "./src/controller/level-controller.js": function(e, t, i) {
                "use strict";
                var r = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                    };
                    return function(t, i) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./src/events.js"),
                    o = i("./src/event-handler.js"),
                    n = i("./src/utils/logger.js"),
                    a = i("./src/errors.js"),
                    l = i("./src/utils/codecs.js"),
                    d = i("./src/controller/level-helper.js"),
                    u = window.performance,
                    h = function(e) {
                        function t(t) {
                            var i = e.call(this, t, s["default"].MANIFEST_LOADED, s["default"].LEVEL_LOADED, s["default"].AUDIO_TRACK_SWITCHED, s["default"].FRAG_LOADED, s["default"].ERROR) || this;
                            return i.canload = !1, i.currentLevelIndex = null, i.manualLevelIndex = -1, i.timer = null, i
                        }
                        return r(t, e), t.prototype.onHandlerDestroying = function() {
                            this.clearTimer(), this.manualLevelIndex = -1
                        }, t.prototype.clearTimer = function() {
                            null !== this.timer && (clearTimeout(this.timer), this.timer = null)
                        }, t.prototype.startLoad = function() {
                            var e = this._levels;
                            this.canload = !0, this.levelRetryCount = 0, e && e.forEach(function(e) {
                                e.loadError = 0;
                                var t = e.details;
                                t && t.live && (e.details = undefined)
                            }), null !== this.timer && this.loadLevel()
                        }, t.prototype.stopLoad = function() {
                            this.canload = !1
                        }, t.prototype.onManifestLoaded = function(e) {
                            var t, i = [],
                                r = {},
                                o = null,
                                u = !1,
                                h = !1,
                                c = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
                                f = [];
                            if (e.levels.forEach(function(e) {
                                    e.loadError = 0, e.fragmentError = !1, u = u || !!e.videoCodec, h = h || !!e.audioCodec || !(!e.attrs || !e.attrs.AUDIO), c && e.audioCodec && -1 !== e.audioCodec.indexOf("mp4a.40.34") && (e.audioCodec = undefined), o = r[e.bitrate], o ? o.url.push(e.url) : (e.url = [e.url], e.urlId = 0, r[e.bitrate] = e, i.push(e)), e.attrs && e.attrs.AUDIO && d.addGroupId(o || e, "audio", e.attrs.AUDIO), e.attrs && e.attrs.SUBTITLES && d.addGroupId(o || e, "text", e.attrs.SUBTITLES)
                                }), u && h && (i = i.filter(function(e) {
                                    return !!e.videoCodec
                                })), i = i.filter(function(e) {
                                    var t = e.audioCodec,
                                        i = e.videoCodec;
                                    return (!t || l.isCodecSupportedInMp4(t)) && (!i || l.isCodecSupportedInMp4(i))
                                }), e.audioTracks && (f = e.audioTracks.filter(function(e) {
                                    return !e.audioCodec || l.isCodecSupportedInMp4(e.audioCodec, "audio")
                                }), f.forEach(function(e, t) {
                                    e.id = t
                                })), i.length > 0) {
                                t = i[0].bitrate, i.sort(function(e, t) {
                                    return e.bitrate - t.bitrate
                                }), this._levels = i;
                                for (var p = 0; p < i.length; p++)
                                    if (i[p].bitrate === t) {
                                        this._firstLevel = p, n.logger.log("manifest loaded," + i.length + " level(s) found, first bitrate:" + t);
                                        break
                                    } this.hls.trigger(s["default"].MANIFEST_PARSED, {
                                    levels: i,
                                    audioTracks: f,
                                    firstLevel: this._firstLevel,
                                    stats: e.stats,
                                    audio: h,
                                    video: u,
                                    altAudio: f.length > 0 && u
                                })
                            } else this.hls.trigger(s["default"].ERROR, {
                                type: a.ErrorTypes.MEDIA_ERROR,
                                details: a.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                                fatal: !0,
                                url: this.hls.url,
                                reason: "no level with compatible codecs found in manifest"
                            })
                        }, Object.defineProperty(t.prototype, "levels", {
                            get: function() {
                                return this._levels
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "level", {
                            get: function() {
                                return this.currentLevelIndex
                            },
                            set: function(e) {
                                var t = this._levels;
                                t && (e = Math.min(e, t.length - 1), this.currentLevelIndex === e && t[e].details || this.setLevelInternal(e))
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.prototype.setLevelInternal = function(e) {
                            var t = this._levels,
                                i = this.hls;
                            if (e >= 0 && e < t.length) {
                                if (this.clearTimer(), this.currentLevelIndex !== e) {
                                    n.logger.log("switching to level " + e), this.currentLevelIndex = e;
                                    var r = t[e];
                                    r.level = e, i.trigger(s["default"].LEVEL_SWITCHING, r)
                                }
                                var o = t[e],
                                    l = o.details;
                                if (!l || l.live) {
                                    var d = o.urlId;
                                    i.trigger(s["default"].LEVEL_LOADING, {
                                        url: o.url[d],
                                        level: e,
                                        id: d
                                    })
                                }
                            } else i.trigger(s["default"].ERROR, {
                                type: a.ErrorTypes.OTHER_ERROR,
                                details: a.ErrorDetails.LEVEL_SWITCH_ERROR,
                                level: e,
                                fatal: !1,
                                reason: "invalid level idx"
                            })
                        }, Object.defineProperty(t.prototype, "manualLevel", {
                            get: function() {
                                return this.manualLevelIndex
                            },
                            set: function(e) {
                                this.manualLevelIndex = e, this._startLevel === undefined && (this._startLevel = e), -1 !== e && (this.level = e)
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "firstLevel", {
                            get: function() {
                                return this._firstLevel
                            },
                            set: function(e) {
                                this._firstLevel = e
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "startLevel", {
                            get: function() {
                                if (this._startLevel === undefined) {
                                    var e = this.hls.config.startLevel;
                                    return e !== undefined ? e : this._firstLevel
                                }
                                return this._startLevel
                            },
                            set: function(e) {
                                this._startLevel = e
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.prototype.onError = function(e) {
                            if (e.fatal) return void(e.type === a.ErrorTypes.NETWORK_ERROR && this.clearTimer());
                            var t, i = !1,
                                r = !1;
                            switch (e.details) {
                                case a.ErrorDetails.FRAG_LOAD_ERROR:
                                case a.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                case a.ErrorDetails.KEY_LOAD_ERROR:
                                case a.ErrorDetails.KEY_LOAD_TIMEOUT:
                                    t = e.frag.level, r = !0;
                                    break;
                                case a.ErrorDetails.LEVEL_LOAD_ERROR:
                                case a.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                    t = e.context.level, i = !0;
                                    break;
                                case a.ErrorDetails.REMUX_ALLOC_ERROR:
                                    t = e.level, i = !0
                            }
                            t !== undefined && this.recoverLevel(e, t, i, r)
                        }, t.prototype.recoverLevel = function(e, t, i, r) {
                            var s, o, a, l = this,
                                d = this.hls.config,
                                u = e.details,
                                h = this._levels[t];
                            if (h.loadError++, h.fragmentError = r, i) {
                                if (!(this.levelRetryCount + 1 <= d.levelLoadingMaxRetry)) return n.logger.error("level controller, cannot recover from " + u + " error"), this.currentLevelIndex = null, this.clearTimer(), void(e.fatal = !0);
                                o = Math.min(Math.pow(2, this.levelRetryCount) * d.levelLoadingRetryDelay, d.levelLoadingMaxRetryTimeout), this.timer = setTimeout(function() {
                                    return l.loadLevel()
                                }, o), e.levelRetry = !0, this.levelRetryCount++, n.logger.warn("level controller, " + u + ", retry in " + o + " ms, current retry count is " + this.levelRetryCount)
                            }(i || r) && (s = h.url.length, s > 1 && h.loadError < s ? (h.urlId = (h.urlId + 1) % s, h.details = undefined, n.logger.warn("level controller, " + u + " for level " + t + ": switching to redundant URL-id " + h.urlId)) : -1 === this.manualLevelIndex ? (a = 0 === t ? this._levels.length - 1 : t - 1, n.logger.warn("level controller, " + u + ": switch to " + a), this.hls.nextAutoLevel = this.currentLevelIndex = a) : r && (n.logger.warn("level controller, " + u + ": reload a fragment"), this.currentLevelIndex = null))
                        }, t.prototype.onFragLoaded = function(e) {
                            var t = e.frag;
                            if (t !== undefined && "main" === t.type) {
                                var i = this._levels[t.level];
                                i !== undefined && (i.fragmentError = !1, i.loadError = 0, this.levelRetryCount = 0)
                            }
                        }, t.prototype.onLevelLoaded = function(e) {
                            var t = this,
                                i = e.level;
                            if (i === this.currentLevelIndex) {
                                var r = this._levels[i];
                                r.fragmentError || (r.loadError = 0, this.levelRetryCount = 0);
                                var s = e.details;
                                if (s.live) {
                                    var o = 1e3 * (s.averagetargetduration ? s.averagetargetduration : s.targetduration),
                                        a = o,
                                        l = r.details;
                                    l && s.endSN === l.endSN && (a /= 2, n.logger.log("same live playlist, reload twice faster")), a -= u.now() - e.stats.trequest, a = Math.max(o / 2, Math.round(a)), n.logger.log("live playlist, reload in " + Math.round(a) + " ms"), this.timer = setTimeout(function() {
                                        return t.loadLevel()
                                    }, a)
                                } else this.clearTimer()
                            }
                        }, t.prototype.onAudioTrackSwitched = function(e) {
                            var t = this.hls.audioTracks[e.id].groupId,
                                i = this.hls.levels[this.currentLevelIndex];
                            if (i && i.audioGroupIds) {
                                var r = i.audioGroupIds.findIndex(function(e) {
                                    return e === t
                                });
                                r !== i.urlId && (i.urlId = r, this.startLoad())
                            }
                        }, t.prototype.loadLevel = function() {
                            if (n.logger.debug("call to loadLevel"), null !== this.currentLevelIndex && this.canload) {
                                var e = this._levels[this.currentLevelIndex];
                                if ("object" == typeof e && e.url.length > 0) {
                                    var t = this.currentLevelIndex,
                                        i = e.urlId,
                                        r = e.url[i];
                                    n.logger.log("Attempt loading level index " + t + " with URL-id " + i), this.hls.trigger(s["default"].LEVEL_LOADING, {
                                        url: r,
                                        level: t,
                                        id: i
                                    })
                                }
                            }
                        }, Object.defineProperty(t.prototype, "nextLoadLevel", {
                            get: function() {
                                return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
                            },
                            set: function(e) {
                                this.level = e, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e)
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t
                    }(o["default"]);
                t["default"] = h
            },
            "./src/controller/level-helper.js": function(e, t, i) {
                "use strict";
                (function(e) {
                    function r(e, t, i) {
                        switch (t) {
                            case "audio":
                                e.audioGroupIds || (e.audioGroupIds = []), e.audioGroupIds.push(i);
                                break;
                            case "text":
                                e.textGroupIds || (e.textGroupIds = []), e.textGroupIds.push(i)
                        }
                    }

                    function s(t, i, r) {
                        var s = t[i],
                            o = t[r],
                            n = o.startPTS;
                        e.isFinite(n) ? r > i ? (s.duration = n - s.start, s.duration < 0 && a.logger.warn("negative duration computed for frag " + s.sn + ",level " + s.level + ", there should be some duration drift between playlist and fragment!")) : (o.duration = s.start - n, o.duration < 0 && a.logger.warn("negative duration computed for frag " + o.sn + ",level " + o.level + ", there should be some duration drift between playlist and fragment!")) : o.start = r > i ? s.start + s.duration : Math.max(s.start - o.duration, 0)
                    }

                    function o(t, i, r, o, n, a) {
                        var l = r;
                        if (e.isFinite(i.startPTS)) {
                            var d = Math.abs(i.startPTS - r);
                            e.isFinite(i.deltaPTS) ? i.deltaPTS = Math.max(d, i.deltaPTS) : i.deltaPTS = d, l = Math.max(r, i.startPTS), r = Math.min(r, i.startPTS), o = Math.max(o, i.endPTS), n = Math.min(n, i.startDTS), a = Math.max(a, i.endDTS)
                        }
                        var u = r - i.start;
                        i.start = i.startPTS = r, i.maxStartPTS = l, i.endPTS = o, i.startDTS = n, i.endDTS = a, i.duration = o - r;
                        var h = i.sn;
                        if (!t || h < t.startSN || h > t.endSN) return 0;
                        var c, f, p;
                        for (c = h - t.startSN, f = t.fragments, f[c] = i, p = c; p > 0; p--) s(f, p, p - 1);
                        for (p = c; p < f.length - 1; p++) s(f, p, p + 1);
                        return t.PTSKnown = !0, u
                    }

                    function n(t, i) {
                        var r, s = Math.max(t.startSN, i.startSN) - i.startSN,
                            n = Math.min(t.endSN, i.endSN) - i.startSN,
                            l = i.startSN - t.startSN,
                            d = t.fragments,
                            u = i.fragments,
                            h = 0;
                        if (i.initSegment && t.initSegment && (i.initSegment = t.initSegment), n < s) return void(i.PTSKnown = !1);
                        for (var c = s; c <= n; c++) {
                            var f = d[l + c],
                                p = u[c];
                            p && f && (h = f.cc - p.cc, e.isFinite(f.startPTS) && (p.start = p.startPTS = f.startPTS, p.endPTS = f.endPTS, p.duration = f.duration, p.backtracked = f.backtracked, p.dropped = f.dropped, r = p))
                        }
                        if (h)
                            for (a.logger.log("discontinuity sliding from playlist, take drift into account"), c = 0; c < u.length; c++) u[c].cc += h;
                        if (r) o(i, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS);
                        else if (l >= 0 && l < d.length) {
                            var v = d[l].start;
                            for (c = 0; c < u.length; c++) u[c].start += v
                        }
                        i.PTSKnown = t.PTSKnown
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var a = i("./src/utils/logger.js");
                    t.addGroupId = r, t.updatePTS = s, t.updateFragPTSDTS = o, t.mergeDetails = n
                }).call(this, i("./src/polyfills/number.js").Number)
            },
            "./src/controller/stream-controller.js": function(e, t, i) {
                "use strict";
                (function(e) {
                    var r = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                        };
                        return function(t, i) {
                            function r() {
                                this.constructor = t
                            }
                            e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var s = i("./src/utils/binary-search.js"),
                        o = i("./src/utils/buffer-helper.js"),
                        n = i("./src/demux/demuxer.js"),
                        a = i("./src/events.js"),
                        l = i("./src/controller/fragment-tracker.js"),
                        d = i("./src/loader/fragment.js"),
                        u = i("./src/loader/playlist-loader.js"),
                        h = i("./src/controller/level-helper.js"),
                        c = i("./src/utils/time-ranges.js"),
                        f = i("./src/errors.js"),
                        p = i("./src/utils/logger.js"),
                        v = i("./src/utils/discontinuities.js"),
                        g = i("./src/task-loop.js"),
                        m = i("./src/controller/fragment-finders.js"),
                        y = i("./src/controller/gap-controller.js");
                    t.State = {
                        STOPPED: "STOPPED",
                        IDLE: "IDLE",
                        KEY_LOADING: "KEY_LOADING",
                        FRAG_LOADING: "FRAG_LOADING",
                        FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                        WAITING_LEVEL: "WAITING_LEVEL",
                        PARSING: "PARSING",
                        PARSED: "PARSED",
                        BUFFER_FLUSHING: "BUFFER_FLUSHING",
                        ENDED: "ENDED",
                        ERROR: "ERROR"
                    };
                    var _ = function(i) {
                        function g(e, r) {
                            var s = i.call(this, e, a["default"].MEDIA_ATTACHED, a["default"].MEDIA_DETACHING, a["default"].MANIFEST_LOADING, a["default"].MANIFEST_PARSED, a["default"].LEVEL_LOADED, a["default"].KEY_LOADED, a["default"].FRAG_LOADED, a["default"].FRAG_LOAD_EMERGENCY_ABORTED, a["default"].FRAG_PARSING_INIT_SEGMENT, a["default"].FRAG_PARSING_DATA, a["default"].FRAG_PARSED, a["default"].ERROR, a["default"].AUDIO_TRACK_SWITCHING, a["default"].AUDIO_TRACK_SWITCHED, a["default"].BUFFER_CREATED, a["default"].BUFFER_APPENDED, a["default"].BUFFER_FLUSHED) || this;
                            return s.fragmentTracker = r, s.config = e.config, s.audioCodecSwap = !1, s._state = t.State.STOPPED, s.stallReported = !1, s.gapController = null, s
                        }
                        return r(g, i), g.prototype.onHandlerDestroying = function() {
                            this.stopLoad(), i.prototype.onHandlerDestroying.call(this)
                        }, g.prototype.onHandlerDestroyed = function() {
                            this.state = t.State.STOPPED, this.fragmentTracker = null, i.prototype.onHandlerDestroyed.call(this)
                        }, g.prototype.startLoad = function(e) {
                            if (this.levels) {
                                var i = this.lastCurrentTime,
                                    r = this.hls;
                                if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
                                    var s = r.startLevel; - 1 === s && (s = 0, this.bitrateTest = !0), this.level = r.nextLoadLevel = s, this.loadedmetadata = !1
                                }
                                i > 0 && -1 === e && (p.logger.log("override startPosition with lastCurrentTime @" + i.toFixed(3)), e = i), this.state = t.State.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick()
                            } else this.forceStartLoad = !0, this.state = t.State.STOPPED
                        }, g.prototype.stopLoad = function() {
                            var e = this.fragCurrent;
                            e && (e.loader && e.loader.abort(), this.fragmentTracker.removeFragment(e), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.clearInterval(), this.state = t.State.STOPPED, this.forceStartLoad = !1
                        }, g.prototype.doTick = function() {
                            switch (this.state) {
                                case t.State.BUFFER_FLUSHING:
                                    this.fragLoadError = 0;
                                    break;
                                case t.State.IDLE:
                                    this._doTickIdle();
                                    break;
                                case t.State.WAITING_LEVEL:
                                    var e = this.levels[this.level];
                                    e && e.details && (this.state = t.State.IDLE);
                                    break;
                                case t.State.FRAG_LOADING_WAITING_RETRY:
                                    var i = window.performance.now(),
                                        r = this.retryDate;
                                    (!r || i >= r || this.media && this.media.seeking) && (p.logger.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = t.State.IDLE);
                                    break;
                                case t.State.ERROR:
                                case t.State.STOPPED:
                                case t.State.FRAG_LOADING:
                                case t.State.PARSING:
                                case t.State.PARSED:
                                case t.State.ENDED:
                            }
                            this._checkBuffer(), this._checkFragmentChanged()
                        }, g.prototype._doTickIdle = function() {
                            var e = this.hls,
                                i = e.config,
                                r = this.media;
                            if (this.levelLastLoaded !== undefined && (r || !this.startFragRequested && i.startFragPrefetch)) {
                                var s;
                                s = this.loadedmetadata ? r.currentTime : this.nextLoadPosition;
                                var n = e.nextLoadLevel,
                                    l = this.levels[n];
                                if (l) {
                                    var d, u = l.bitrate;
                                    d = u ? Math.max(8 * i.maxBufferSize / u, i.maxBufferLength) : i.maxBufferLength, d = Math.min(d, i.maxMaxBufferLength);
                                    var h = o.BufferHelper.bufferInfo(this.mediaBuffer ? this.mediaBuffer : r, s, i.maxBufferHole),
                                        c = h.len;
                                    if (!(c >= d)) {
                                        p.logger.trace("buffer length of " + c.toFixed(3) + " is below max of " + d.toFixed(3) + ". checking for more payload ..."), this.level = e.nextLoadLevel = n;
                                        var f = l.details;
                                        if (!f || f.live && this.levelLastLoaded !== n) return void(this.state = t.State.WAITING_LEVEL);
                                        var v = this.fragPrevious;
                                        if (!f.live && v && !v.backtracked && v.sn === f.endSN && !h.nextStart) {
                                            if (Math.min(r.duration, v.start + v.duration) - Math.max(h.end, v.start) <= Math.max(.2, v.duration)) {
                                                var g = {};
                                                return this.altAudio && (g.type = "video"), this.hls.trigger(a["default"].BUFFER_EOS, g), void(this.state = t.State.ENDED)
                                            }
                                        }
                                        this._fetchPayloadOrEos(s, h, f)
                                    }
                                }
                            }
                        }, g.prototype._fetchPayloadOrEos = function(e, t, i) {
                            var r = this.fragPrevious,
                                s = this.level,
                                o = i.fragments,
                                n = o.length;
                            if (0 !== n) {
                                var a, l = o[0].start,
                                    d = o[n - 1].start + o[n - 1].duration,
                                    u = t.end;
                                if (i.initSegment && !i.initSegment.data) a = i.initSegment;
                                else if (i.live) {
                                    var h = this.config.initialLiveManifestSize;
                                    if (n < h) return void p.logger.warn("Can not start playback of a level, reason: not enough fragments " + n + " < " + h);
                                    if (null === (a = this._ensureFragmentAtLivePoint(i, u, l, d, r, o, n))) return
                                } else u < l && (a = o[0]);
                                if (!a) {
                                    var c = void 0;
                                    c = u, p.logger.debug("stream-controller: _findFragment at " + c + ",\n          buffer-end " + u + ", position " + e, r), a = this._findFragment(r, o, c, d, i)
                                }
                                a && (p.logger.log("Found fragment:", a), a.encrypted ? (p.logger.log("Loading key for " + a.sn + " of [" + i.startSN + " ," + i.endSN + "],level " + s), this._loadKey(a)) : (p.logger.log("Loading " + a.sn + " of [" + i.startSN + " ," + i.endSN + "],level " + s + ", currentTime:" + e.toFixed(3) + ", bufferEnd:" + u.toFixed(3)), this._loadFragment(a)))
                            }
                        }, g.prototype._ensureFragmentAtLivePoint = function(e, t, i, r, o, n, a) {
                            var l, d = this.hls.config,
                                u = this.media,
                                h = d.liveMaxLatencyDuration !== undefined ? d.liveMaxLatencyDuration : d.liveMaxLatencyDurationCount * e.targetduration;
                            if (t < Math.max(i - d.maxFragLookUpTolerance, r - h)) {
                                var c = this.liveSyncPosition = this.computeLivePosition(i, e);
                                p.logger.log("buffer end: " + t.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + c.toFixed(3)), t = c, u && u.readyState && u.duration > c && (u.currentTime = c), this.nextLoadPosition = c
                            }
                            if (e.PTSKnown && t > r && u && u.readyState) return null;
                            if (this.startFragRequested && !e.PTSKnown) {
                                if (o)
                                    if (e.hasProgramDateTime) p.logger.log("live playlist, switching playlist, load frag with same PDT: " + o.programDateTime), l = m.findFragmentByPDT(n, o.endProgramDateTime, d.maxFragLookUpTolerance);
                                    else {
                                        var f = o.sn + 1;
                                        if (f >= e.startSN && f <= e.endSN) {
                                            var v = n[f - e.startSN];
                                            o.cc === v.cc && (l = v, p.logger.log("live playlist, switching playlist, load frag with next SN: " + l.sn))
                                        }
                                        l || (l = s["default"].search(n, function(e) {
                                            return o.cc - e.cc
                                        })) && p.logger.log("live playlist, switching playlist, load frag with same CC: " + l.sn)
                                    } l || (l = n[Math.min(a - 1, Math.round(a / 2))], p.logger.log("live playlist, switching playlist, unknown, load middle frag : " + l.sn))
                            }
                            return l
                        }, g.prototype._findFragment = function(e, t, i, r, s) {
                            var o, n = this.hls.config;
                            if (i < r) {
                                var a = i > r - n.maxFragLookUpTolerance ? 0 : n.maxFragLookUpTolerance;
                                p.logger.log("Looking for fragment, target is at " + i), o = m.findFragmentByPTS(e, t, i, a);
                                var l = o.compareTimeInterval(i);
                                if (0 !== l) {
                                    p.logger.warn("Fragment-lookup has PTS-shift:", l);
                                    var d = 2 * l;
                                    p.logger.log("Applying PTS shift-correction to lookup target:", d), o = m.findFragmentByPTS(e, t, i + d, a)
                                }
                                p.logger.log("Fragment found is at [" + o.start + ", " + o.end + "], lookup target was at " + i)
                            } else o = t[t.length - 1];
                            if (o) {
                                var u = o.sn - s.startSN,
                                    h = e && o.level === e.level,
                                    c = t[u - 1],
                                    f = t[u + 1];
                                if (e && o.sn === e.sn)
                                    if (h && !o.backtracked)
                                        if (o.sn < s.endSN) {
                                            var v = e.deltaPTS;
                                            v && v > n.maxBufferHole && e.dropped && u ? (o = c, p.logger.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this")) : (o = f, p.logger.log("SN just loaded, load next one: " + o.sn, o))
                                        } else o = null;
                                else o.backtracked && (f && f.backtracked ? (p.logger.warn("Already backtracked from fragment " + f.sn + ", will not backtrack to fragment " + o.sn + ". Loading fragment " + f.sn), o = f) : (p.logger.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), o.dropped = 0, c ? (o = c, o.backtracked = !0) : u && (o = null)))
                            }
                            return o
                        }, g.prototype._loadKey = function(e) {
                            this.state = t.State.KEY_LOADING, this.hls.trigger(a["default"].KEY_LOADING, {
                                frag: e
                            })
                        }, g.prototype._loadFragment = function(i) {
                            var r = this.fragmentTracker.getState(i);
                            this.fragCurrent = i, this.startFragRequested = !0, e.isFinite(i.sn) && !i.bitrateTest && (this.nextLoadPosition = i.start + i.duration), i.backtracked || r === l.FragmentState.NOT_LOADED || r === l.FragmentState.PARTIAL ? (i.autoLevel = this.hls.autoLevelEnabled, i.bitrateTest = this.bitrateTest, this.hls.trigger(a["default"].FRAG_LOADING, {
                                frag: i
                            }), this.demuxer || (this.demuxer = new n["default"](this.hls, "main")), this.state = t.State.FRAG_LOADING) : r === l.FragmentState.APPENDING && this._reduceMaxBufferLength(i.duration) && this.fragmentTracker.removeFragment(i)
                        }, Object.defineProperty(g.prototype, "state", {
                            get: function() {
                                return this._state
                            },
                            set: function(e) {
                                if (this.state !== e) {
                                    var t = this.state;
                                    this._state = e, p.logger.log("main stream:" + t + "->" + e), this.hls.trigger(a["default"].STREAM_STATE_TRANSITION, {
                                        previousState: t,
                                        nextState: e
                                    })
                                }
                            },
                            enumerable: !0,
                            configurable: !0
                        }), g.prototype.getBufferedFrag = function(e) {
                            return this.fragmentTracker.getBufferedFrag(e, u["default"].LevelType.MAIN)
                        }, Object.defineProperty(g.prototype, "currentLevel", {
                            get: function() {
                                var e = this.media;
                                if (e) {
                                    var t = this.getBufferedFrag(e.currentTime);
                                    if (t) return t.level
                                }
                                return -1
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(g.prototype, "nextBufferedFrag", {
                            get: function() {
                                var e = this.media;
                                return e ? this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)) : null
                            },
                            enumerable: !0,
                            configurable: !0
                        }), g.prototype.followingBufferedFrag = function(e) {
                            return e ? this.getBufferedFrag(e.endPTS + .5) : null
                        }, Object.defineProperty(g.prototype, "nextLevel", {
                            get: function() {
                                var e = this.nextBufferedFrag;
                                return e ? e.level : -1
                            },
                            enumerable: !0,
                            configurable: !0
                        }), g.prototype._checkFragmentChanged = function() {
                            var e, t, i = this.media;
                            if (i && i.readyState && !1 === i.seeking && (t = i.currentTime, t > this.lastCurrentTime && (this.lastCurrentTime = t), o.BufferHelper.isBuffered(i, t) ? e = this.getBufferedFrag(t) : o.BufferHelper.isBuffered(i, t + .1) && (e = this.getBufferedFrag(t + .1)), e)) {
                                var r = e;
                                if (r !== this.fragPlaying) {
                                    this.hls.trigger(a["default"].FRAG_CHANGED, {
                                        frag: r
                                    });
                                    var s = r.level;
                                    this.fragPlaying && this.fragPlaying.level === s || this.hls.trigger(a["default"].LEVEL_SWITCHED, {
                                        level: s
                                    }), this.fragPlaying = r
                                }
                            }
                        }, g.prototype.immediateLevelSwitch = function() {
                            if (p.logger.log("immediateLevelSwitch"), !this.immediateSwitch) {
                                this.immediateSwitch = !0;
                                var t = this.media,
                                    i = void 0;
                                t ? (i = t.paused, t.pause()) : i = !0, this.previouslyPaused = i
                            }
                            var r = this.fragCurrent;
                            r && r.loader && r.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(0, e.POSITIVE_INFINITY)
                        }, g.prototype.immediateLevelSwitchEnd = function() {
                            var e = this.media;
                            e && e.buffered.length && (this.immediateSwitch = !1, o.BufferHelper.isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4), this.previouslyPaused || e.play())
                        }, g.prototype.nextLevelSwitch = function() {
                            var t = this.media;
                            if (t && t.readyState) {
                                var i = void 0,
                                    r = void 0,
                                    s = void 0;
                                if (r = this.getBufferedFrag(t.currentTime), r && r.startPTS > 1 && this.flushMainBuffer(0, r.startPTS - 1), t.paused) i = 0;
                                else {
                                    var o = this.hls.nextLoadLevel,
                                        n = this.levels[o],
                                        a = this.fragLastKbps;
                                    i = a && this.fragCurrent ? this.fragCurrent.duration * n.bitrate / (1e3 * a) + 1 : 0
                                }
                                if ((s = this.getBufferedFrag(t.currentTime + i)) && (s = this.followingBufferedFrag(s))) {
                                    var l = this.fragCurrent;
                                    l && l.loader && l.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(s.maxStartPTS, e.POSITIVE_INFINITY)
                                }
                            }
                        }, g.prototype.flushMainBuffer = function(e, i) {
                            this.state = t.State.BUFFER_FLUSHING;
                            var r = {
                                startOffset: e,
                                endOffset: i
                            };
                            this.altAudio && (r.type = "video"), this.hls.trigger(a["default"].BUFFER_FLUSHING, r)
                        }, g.prototype.onMediaAttached = function(e) {
                            var t = this.media = this.mediaBuffer = e.media;
                            this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("seeked", this.onvseeked), t.addEventListener("ended", this.onvended);
                            var i = this.config;
                            this.levels && i.autoStartLoad && this.hls.startLoad(i.startPosition), this.gapController = new y["default"](i, t, this.fragmentTracker, this.hls)
                        }, g.prototype.onMediaDetaching = function() {
                            var e = this.media;
                            e && e.ended && (p.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
                            var t = this.levels;
                            t && t.forEach(function(e) {
                                e.details && e.details.fragments.forEach(function(e) {
                                    e.backtracked = undefined
                                })
                            }), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("seeked", this.onvseeked), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad()
                        }, g.prototype.onMediaSeeking = function() {
                            var i = this.media,
                                r = i ? i.currentTime : undefined,
                                s = this.config;
                            e.isFinite(r) && p.logger.log("media seeking to " + r.toFixed(3));
                            var n = this.mediaBuffer ? this.mediaBuffer : i,
                                a = o.BufferHelper.bufferInfo(n, r, this.config.maxBufferHole);
                            if (this.state === t.State.FRAG_LOADING) {
                                var l = this.fragCurrent;
                                if (0 === a.len && l) {
                                    var d = s.maxFragLookUpTolerance,
                                        u = l.start - d,
                                        h = l.start + l.duration + d;
                                    r < u || r > h ? (l.loader && (p.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), l.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = t.State.IDLE) : p.logger.log("seeking outside of buffer but within currently loaded fragment range")
                                }
                            } else this.state === t.State.ENDED && (0 === a.len && (this.fragPrevious = 0), this.state = t.State.IDLE);
                            i && (this.lastCurrentTime = r), this.loadedmetadata || (this.nextLoadPosition = this.startPosition = r), this.tick()
                        }, g.prototype.onMediaSeeked = function() {
                            var t = this.media,
                                i = t ? t.currentTime : undefined;
                            e.isFinite(i) && p.logger.log("media seeked to " + i.toFixed(3)), this.tick()
                        }, g.prototype.onMediaEnded = function() {
                            p.logger.log("media ended"), this.startPosition = this.lastCurrentTime = 0
                        }, g.prototype.onManifestLoading = function() {
                            p.logger.log("trigger BUFFER_RESET"), this.hls.trigger(a["default"].BUFFER_RESET), this.fragmentTracker.removeAllFragments(), this.stalled = !1, this.startPosition = this.lastCurrentTime = 0
                        }, g.prototype.onManifestParsed = function(e) {
                            var t, i = !1,
                                r = !1;
                            e.levels.forEach(function(e) {
                                (t = e.audioCodec) && (-1 !== t.indexOf("mp4a.40.2") && (i = !0), -1 !== t.indexOf("mp4a.40.5") && (r = !0))
                            }), this.audioCodecSwitch = i && r, this.audioCodecSwitch && p.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = e.levels, this.startFragRequested = !1;
                            var s = this.config;
                            (s.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(s.startPosition)
                        }, g.prototype.onLevelLoaded = function(i) {
                            var r = i.details,
                                s = i.level,
                                o = this.levels[this.levelLastLoaded],
                                n = this.levels[s],
                                l = r.totalduration,
                                d = 0;
                            if (p.logger.log("level " + s + " loaded [" + r.startSN + "," + r.endSN + "],duration:" + l), r.live) {
                                var u = n.details;
                                u && r.fragments.length > 0 ? (h.mergeDetails(u, r), d = r.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(d, u), r.PTSKnown && e.isFinite(d) ? p.logger.log("live playlist sliding:" + d.toFixed(3)) : (p.logger.log("live playlist - outdated PTS, unknown sliding"), v.alignStream(this.fragPrevious, o, r))) : (p.logger.log("live playlist - first load, unknown sliding"), r.PTSKnown = !1, v.alignStream(this.fragPrevious, o, r))
                            } else r.PTSKnown = !1;
                            if (n.details = r, this.levelLastLoaded = s, this.hls.trigger(a["default"].LEVEL_UPDATED, {
                                    details: r,
                                    level: s
                                }), !1 === this.startFragRequested) {
                                if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
                                    var c = r.startTimeOffset;
                                    e.isFinite(c) ? (c < 0 && (p.logger.log("negative start time offset " + c + ", count from end of last fragment"), c = d + l + c), p.logger.log("start time offset found in playlist, adjust startPosition to " + c), this.startPosition = c) : r.live ? (this.startPosition = this.computeLivePosition(d, r), p.logger.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0, this.lastCurrentTime = this.startPosition
                                }
                                this.nextLoadPosition = this.startPosition
                            }
                            this.state === t.State.WAITING_LEVEL && (this.state = t.State.IDLE), this.tick()
                        }, g.prototype.onKeyLoaded = function() {
                            this.state === t.State.KEY_LOADING && (this.state = t.State.IDLE, this.tick())
                        }, g.prototype.onFragLoaded = function(e) {
                            var i = this,
                                r = i.fragCurrent,
                                s = i.hls,
                                o = i.levels,
                                l = i.media,
                                d = e.frag;
                            if (this.state === t.State.FRAG_LOADING && r && "main" === d.type && d.level === r.level && d.sn === r.sn) {
                                var u = e.stats,
                                    h = o[r.level],
                                    c = h.details;
                                if (this.bitrateTest = !1, this.stats = u, p.logger.log("Loaded " + r.sn + " of [" + c.startSN + " ," + c.endSN + "],level " + r.level), d.bitrateTest && s.nextLoadLevel) this.state = t.State.IDLE, this.startFragRequested = !1, u.tparsed = u.tbuffered = window.performance.now(), s.trigger(a["default"].FRAG_BUFFERED, {
                                    stats: u,
                                    frag: r,
                                    id: "main"
                                }), this.tick();
                                else if ("initSegment" === d.sn) this.state = t.State.IDLE, u.tparsed = u.tbuffered = window.performance.now(), c.initSegment.data = e.payload, s.trigger(a["default"].FRAG_BUFFERED, {
                                    stats: u,
                                    frag: r,
                                    id: "main"
                                }), this.tick();
                                else {
                                    p.logger.log("Parsing " + r.sn + " of [" + c.startSN + " ," + c.endSN + "],level " + r.level + ", cc " + r.cc), this.state = t.State.PARSING, this.pendingBuffering = !0, this.appended = !1, d.bitrateTest && (d.bitrateTest = !1, this.fragmentTracker.onFragLoaded({
                                        frag: d
                                    }));
                                    var f = !(l && l.seeking) && (c.PTSKnown || !c.live),
                                        v = c.initSegment ? c.initSegment.data : [],
                                        g = this._getAudioCodec(h),
                                        m = this.demuxer = this.demuxer || new n["default"](this.hls, "main");
                                    m.push(e.payload, v, g, h.videoCodec, r, c.totalduration, f)
                                }
                            }
                            this.fragLoadError = 0
                        }, g.prototype.onFragParsingInitSegment = function(e) {
                            var i = this.fragCurrent,
                                r = e.frag;
                            if (i && "main" === e.id && r.sn === i.sn && r.level === i.level && this.state === t.State.PARSING) {
                                var s = e.tracks,
                                    o = void 0,
                                    n = void 0;
                                if (s.audio && this.altAudio && delete s.audio, n = s.audio) {
                                    var l = this.levels[this.level].audioCodec,
                                        d = navigator.userAgent.toLowerCase();
                                    l && this.audioCodecSwap && (p.logger.log("swapping playlist audio codec"), l = -1 !== l.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), this.audioCodecSwitch && 1 !== n.metadata.channelCount && -1 === d.indexOf("firefox") && (l = "mp4a.40.5"), -1 !== d.indexOf("android") && "audio/mpeg" !== n.container && (l = "mp4a.40.2", p.logger.log("Android: force audio codec to " + l)), n.levelCodec = l, n.id = e.id
                                }
                                n = s.video, n && (n.levelCodec = this.levels[this.level].videoCodec, n.id = e.id), this.hls.trigger(a["default"].BUFFER_CODECS, s);
                                for (o in s) {
                                    n = s[o], p.logger.log("main track:" + o + ",container:" + n.container + ",codecs[level/parsed]=[" + n.levelCodec + "/" + n.codec + "]");
                                    var u = n.initSegment;
                                    u && (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(a["default"].BUFFER_APPENDING, {
                                        type: o,
                                        data: u,
                                        parent: "main",
                                        content: "initSegment"
                                    }))
                                }
                                this.tick()
                            }
                        }, g.prototype.onFragParsingData = function(i) {
                            var r = this,
                                s = this.fragCurrent,
                                o = i.frag;
                            if (s && "main" === i.id && o.sn === s.sn && o.level === s.level && ("audio" !== i.type || !this.altAudio) && this.state === t.State.PARSING) {
                                var n = this.levels[this.level],
                                    l = s;
                                if (e.isFinite(i.endPTS) || (i.endPTS = i.startPTS + s.duration, i.endDTS = i.startDTS + s.duration), !0 === i.hasAudio && l.addElementaryStream(d["default"].ElementaryStreamTypes.AUDIO), !0 === i.hasVideo && l.addElementaryStream(d["default"].ElementaryStreamTypes.VIDEO), p.logger.log("Parsed " + i.type + ",PTS:[" + i.startPTS.toFixed(3) + "," + i.endPTS.toFixed(3) + "],DTS:[" + i.startDTS.toFixed(3) + "/" + i.endDTS.toFixed(3) + "],nb:" + i.nb + ",dropped:" + (i.dropped || 0)), "video" === i.type)
                                    if (l.dropped = i.dropped, l.dropped)
                                        if (l.backtracked) p.logger.warn("Already backtracked on this fragment, appending with the gap", l.sn);
                                        else {
                                            var u = n.details;
                                            if (!u || l.sn !== u.startSN) return p.logger.warn("missing video frame(s), backtracking fragment", l.sn), this.fragmentTracker.removeFragment(l), l.backtracked = !0, this.nextLoadPosition = i.startPTS, this.state = t.State.IDLE, this.fragPrevious = l, void this.tick();
                                            p.logger.warn("missing video frame(s) on first frag, appending with gap", l.sn)
                                        }
                                else l.backtracked = !1;
                                var c = h.updateFragPTSDTS(n.details, l, i.startPTS, i.endPTS, i.startDTS, i.endDTS),
                                    f = this.hls;
                                f.trigger(a["default"].LEVEL_PTS_UPDATED, {
                                    details: n.details,
                                    level: this.level,
                                    drift: c,
                                    type: i.type,
                                    start: i.startPTS,
                                    end: i.endPTS
                                }), [i.data1, i.data2].forEach(function(e) {
                                    e && e.length && r.state === t.State.PARSING && (r.appended = !0, r.pendingBuffering = !0, f.trigger(a["default"].BUFFER_APPENDING, {
                                        type: i.type,
                                        data: e,
                                        parent: "main",
                                        content: "data"
                                    }))
                                }), this.tick()
                            }
                        }, g.prototype.onFragParsed = function(e) {
                            var i = this.fragCurrent,
                                r = e.frag;
                            i && "main" === e.id && r.sn === i.sn && r.level === i.level && this.state === t.State.PARSING && (this.stats.tparsed = window.performance.now(), this.state = t.State.PARSED, this._checkAppendedParsed())
                        }, g.prototype.onAudioTrackSwitching = function(i) {
                            var r = !!i.url,
                                s = i.id;
                            if (!r) {
                                if (this.mediaBuffer !== this.media) {
                                    p.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                                    var o = this.fragCurrent;
                                    o.loader && (p.logger.log("switching to main audio track, cancel main fragment load"), o.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = t.State.IDLE
                                }
                                var n = this.hls;
                                n.trigger(a["default"].BUFFER_FLUSHING, {
                                    startOffset: 0,
                                    endOffset: e.POSITIVE_INFINITY,
                                    type: "audio"
                                }), n.trigger(a["default"].AUDIO_TRACK_SWITCHED, {
                                    id: s
                                }), this.altAudio = !1
                            }
                        }, g.prototype.onAudioTrackSwitched = function(e) {
                            var t = e.id,
                                i = !!this.hls.audioTracks[t].url;
                            if (i) {
                                var r = this.videoBuffer;
                                r && this.mediaBuffer !== r && (p.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = r)
                            }
                            this.altAudio = i, this.tick()
                        }, g.prototype.onBufferCreated = function(e) {
                            var t, i, r = e.tracks,
                                s = !1;
                            for (var o in r) {
                                var n = r[o];
                                "main" === n.id ? (i = o, t = n, "video" === o && (this.videoBuffer = r[o].buffer)) : s = !0
                            }
                            s && t ? (p.logger.log("alternate track found, use " + i + ".buffered to schedule main fragment loading"), this.mediaBuffer = t.buffer) : this.mediaBuffer = this.media
                        }, g.prototype.onBufferAppended = function(e) {
                            if ("main" === e.parent) {
                                var i = this.state;
                                i !== t.State.PARSING && i !== t.State.PARSED || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed())
                            }
                        }, g.prototype._checkAppendedParsed = function() {
                            if (!(this.state !== t.State.PARSED || this.appended && this.pendingBuffering)) {
                                var e = this.fragCurrent;
                                if (e) {
                                    var i = this.mediaBuffer ? this.mediaBuffer : this.media;
                                    p.logger.log("main buffered : " + c["default"].toString(i.buffered)), this.fragPrevious = e;
                                    var r = this.stats;
                                    r.tbuffered = window.performance.now(), this.fragLastKbps = Math.round(8 * r.total / (r.tbuffered - r.tfirst)), this.hls.trigger(a["default"].FRAG_BUFFERED, {
                                        stats: r,
                                        frag: e,
                                        id: "main"
                                    }), this.state = t.State.IDLE
                                }
                                this.tick()
                            }
                        }, g.prototype.onError = function(i) {
                            var r = i.frag || this.fragCurrent;
                            if (!r || "main" === r.type) {
                                var s = !!this.media && o.BufferHelper.isBuffered(this.media, this.media.currentTime) && o.BufferHelper.isBuffered(this.media, this.media.currentTime + .5);
                                switch (i.details) {
                                    case f.ErrorDetails.FRAG_LOAD_ERROR:
                                    case f.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                    case f.ErrorDetails.KEY_LOAD_ERROR:
                                    case f.ErrorDetails.KEY_LOAD_TIMEOUT:
                                        if (!i.fatal)
                                            if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
                                                var n = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
                                                p.logger.warn("mediaController: frag loading failed, retry in " + n + " ms"), this.retryDate = window.performance.now() + n, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.fragLoadError++, this.state = t.State.FRAG_LOADING_WAITING_RETRY
                                            } else p.logger.error("mediaController: " + i.details + " reaches max retry, redispatch as fatal ..."), i.fatal = !0, this.state = t.State.ERROR;
                                        break;
                                    case f.ErrorDetails.LEVEL_LOAD_ERROR:
                                    case f.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                        this.state !== t.State.ERROR && (i.fatal ? (this.state = t.State.ERROR, p.logger.warn("streamController: " + i.details + ",switch to " + this.state + " state ...")) : i.levelRetry || this.state !== t.State.WAITING_LEVEL || (this.state = t.State.IDLE));
                                        break;
                                    case f.ErrorDetails.BUFFER_FULL_ERROR:
                                        "main" !== i.parent || this.state !== t.State.PARSING && this.state !== t.State.PARSED || (s ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = t.State.IDLE) : (p.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.flushMainBuffer(0, e.POSITIVE_INFINITY)));
                                        break;
                                    case f.ErrorDetails.BUFFER_STALLED_ERROR:
                                }
                            }
                        }, g.prototype._reduceMaxBufferLength = function(e) {
                            var t = this.config;
                            return t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2, p.logger.warn("main:reduce max buffer length to " + t.maxMaxBufferLength + "s"), !0)
                        }, g.prototype._checkBuffer = function() {
                            var e = this.media;
                            if (e && 0 !== e.readyState) {
                                var t = this.mediaBuffer ? this.mediaBuffer : e,
                                    i = t.buffered;
                                !this.loadedmetadata && i.length ? (this.loadedmetadata = !0, this._seekToStartPos()) : this.immediateSwitch ? this.immediateLevelSwitchEnd() : this.gapController.poll(this.lastCurrentTime, i)
                            }
                        }, g.prototype.onFragLoadEmergencyAborted = function() {
                            this.state = t.State.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tick()
                        }, g.prototype.onBufferFlushed = function() {
                            var e = this.mediaBuffer ? this.mediaBuffer : this.media;
                            e && this.fragmentTracker.detectEvictedFragments(d["default"].ElementaryStreamTypes.VIDEO, e.buffered), this.state = t.State.IDLE, this.fragPrevious = null
                        }, g.prototype.swapAudioCodec = function() {
                            this.audioCodecSwap = !this.audioCodecSwap
                        }, g.prototype.computeLivePosition = function(e, t) {
                            var i = this.config.liveSyncDuration !== undefined ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * t.targetduration;
                            return e + Math.max(0, t.totalduration - i)
                        }, g.prototype._seekToStartPos = function() {
                            var e = this.media,
                                t = e.currentTime,
                                i = e.seeking ? t : this.startPosition;
                            t !== i && (p.logger.log("target start position not buffered, seek to buffered.start(0) " + i + " from current time " + t + " "), e.currentTime = i)
                        }, g.prototype._getAudioCodec = function(e) {
                            var t = this.config.defaultAudioCodec || e.audioCodec;
                            return this.audioCodecSwap && (p.logger.log("swapping playlist audio codec"), t && (t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")), t
                        }, Object.defineProperty(g.prototype, "liveSyncPosition", {
                            get: function() {
                                return this._liveSyncPosition
                            },
                            set: function(e) {
                                this._liveSyncPosition = e
                            },
                            enumerable: !0,
                            configurable: !0
                        }), g
                    }(g["default"]);
                    t["default"] = _
                }).call(this, i("./src/polyfills/number.js").Number)
            },
            "./src/controller/subtitle-stream-controller.js": function(e, t, i) {
                "use strict";
                var r = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                    };
                    return function(t, i) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./src/events.js"),
                    o = i("./src/utils/logger.js"),
                    n = i("./src/crypt/decrypter.js"),
                    a = i("./src/task-loop.js"),
                    l = window.performance,
                    d = {
                        STOPPED: "STOPPED",
                        IDLE: "IDLE",
                        KEY_LOADING: "KEY_LOADING",
                        FRAG_LOADING: "FRAG_LOADING"
                    },
                    u = function(e) {
                        function t(t) {
                            var i = e.call(this, t, s["default"].MEDIA_ATTACHED, s["default"].ERROR, s["default"].KEY_LOADED, s["default"].FRAG_LOADED, s["default"].SUBTITLE_TRACKS_UPDATED, s["default"].SUBTITLE_TRACK_SWITCH, s["default"].SUBTITLE_TRACK_LOADED, s["default"].SUBTITLE_FRAG_PROCESSED) || this;
                            return i.config = t.config, i.vttFragSNsProcessed = {}, i.vttFragQueues = undefined, i.currentlyProcessing = null, i.state = d.STOPPED, i.currentTrackId = -1, i.decrypter = new n["default"](t, t.config), i
                        }
                        return r(t, e), t.prototype.onHandlerDestroyed = function() {
                            this.state = d.STOPPED
                        }, t.prototype.clearVttFragQueues = function() {
                            var e = this;
                            this.vttFragQueues = {}, this.tracks.forEach(function(t) {
                                e.vttFragQueues[t.id] = []
                            })
                        }, t.prototype.nextFrag = function() {
                            if (null === this.currentlyProcessing && this.currentTrackId > -1 && this.vttFragQueues[this.currentTrackId].length) {
                                var e = this.currentlyProcessing = this.vttFragQueues[this.currentTrackId].shift();
                                this.fragCurrent = e, this.hls.trigger(s["default"].FRAG_LOADING, {
                                    frag: e
                                }), this.state = d.FRAG_LOADING
                            }
                        }, t.prototype.onSubtitleFragProcessed = function(e) {
                            e.success && this.vttFragSNsProcessed[e.frag.trackId].push(e.frag.sn), this.currentlyProcessing = null, this.state = d.IDLE, this.nextFrag()
                        }, t.prototype.onMediaAttached = function() {
                            this.state = d.IDLE
                        }, t.prototype.onError = function(e) {
                            var t = e.frag;
                            t && "subtitle" !== t.type || this.currentlyProcessing && (this.currentlyProcessing = null, this.nextFrag())
                        }, t.prototype.doTick = function() {
                            var e = this;
                            switch (this.state) {
                                case d.IDLE:
                                    var t = this.tracks,
                                        i = this.currentTrackId,
                                        r = this.vttFragSNsProcessed[i],
                                        n = this.vttFragQueues[i],
                                        a = this.currentlyProcessing ? this.currentlyProcessing.sn : -1,
                                        l = function(e) {
                                            return r.indexOf(e.sn) > -1
                                        },
                                        u = function(e) {
                                            return n.some(function(t) {
                                                return t.sn === e.sn
                                            })
                                        };
                                    if (!t) break;
                                    var h;
                                    if (i < t.length && (h = t[i].details), void 0 === h) break;
                                    h.fragments.forEach(function(t) {
                                        l(t) || t.sn === a || u(t) || (t.encrypted ? (o.logger.log("Loading key for " + t.sn), e.state = d.KEY_LOADING, e.hls.trigger(s["default"].KEY_LOADING, {
                                            frag: t
                                        })) : (t.trackId = i, n.push(t), e.nextFrag()))
                                    })
                            }
                        }, t.prototype.onSubtitleTracksUpdated = function(e) {
                            var t = this;
                            o.logger.log("subtitle tracks updated"), this.tracks = e.subtitleTracks, this.clearVttFragQueues(), this.vttFragSNsProcessed = {}, this.tracks.forEach(function(e) {
                                t.vttFragSNsProcessed[e.id] = []
                            })
                        }, t.prototype.onSubtitleTrackSwitch = function(e) {
                            if (this.currentTrackId = e.id, this.tracks && -1 !== this.currentTrackId) {
                                var t = this.tracks[this.currentTrackId];
                                t && t.details && this.tick()
                            }
                        }, t.prototype.onSubtitleTrackLoaded = function() {
                            this.tick()
                        }, t.prototype.onKeyLoaded = function() {
                            this.state === d.KEY_LOADING && (this.state = d.IDLE, this.tick())
                        }, t.prototype.onFragLoaded = function(e) {
                            var t = this.fragCurrent,
                                i = e.frag.decryptdata,
                                r = e.frag,
                                o = this.hls;
                            if (this.state === d.FRAG_LOADING && t && "subtitle" === e.frag.type && t.sn === e.frag.sn && e.payload.byteLength > 0 && null != i && null != i.key && "AES-128" === i.method) {
                                var n;
                                try {
                                    n = l.now()
                                } catch (a) {
                                    n = Date.now()
                                }
                                this.decrypter.decrypt(e.payload, i.key.buffer, i.iv.buffer, function(e) {
                                    var t;
                                    try {
                                        t = l.now()
                                    } catch (a) {
                                        t = Date.now()
                                    }
                                    o.trigger(s["default"].FRAG_DECRYPTED, {
                                        frag: r,
                                        payload: e,
                                        stats: {
                                            tstart: n,
                                            tdecrypt: t
                                        }
                                    })
                                })
                            }
                        }, t
                    }(a["default"]);
                t["default"] = u
            },
            "./src/controller/subtitle-track-controller.js": function(e, t, i) {
                "use strict";

                function r(e) {
                    for (var t = [], i = 0; i < e.length; i++) "subtitles" === e[i].kind && t.push(e[i]);
                    return t
                }
                var s = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                    };
                    return function(t, i) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = i("./src/events.js"),
                    n = i("./src/event-handler.js"),
                    a = i("./src/utils/logger.js"),
                    l = function(e) {
                        function t(t) {
                            var i = e.call(this, t, o["default"].MEDIA_ATTACHED, o["default"].MEDIA_DETACHING, o["default"].MANIFEST_LOADING, o["default"].MANIFEST_LOADED, o["default"].SUBTITLE_TRACK_LOADED) || this;
                            return i.tracks = [], i.trackId = -1, i.media = null, i.subtitleDisplay = !0, i
                        }
                        return s(t, e), t.prototype._onTextTracksChanged = function() {
                            if (this.media) {
                                for (var e = -1, t = r(this.media.textTracks), i = 0; i < t.length; i++)
                                    if ("hidden" === t[i].mode) e = i;
                                    else if ("showing" === t[i].mode) {
                                    e = i;
                                    break
                                }
                                this.subtitleTrack = e
                            }
                        }, t.prototype.destroy = function() {
                            n["default"].prototype.destroy.call(this)
                        }, t.prototype.onMediaAttached = function(e) {
                            var t = this;
                            this.media = e.media, this.media && (this.queuedDefaultTrack && (this.subtitleTrack = this.queuedDefaultTrack, delete this.queuedDefaultTrack), this.trackChangeListener = this._onTextTracksChanged.bind(this), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval(function() {
                                t.trackChangeListener()
                            }, 500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
                        }, t.prototype.onMediaDetaching = function() {
                            this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener), this.media = null)
                        }, t.prototype.onManifestLoading = function() {
                            this.tracks = [], this.trackId = -1
                        }, t.prototype.onManifestLoaded = function(e) {
                            var t = this,
                                i = e.subtitles || [];
                            this.tracks = i, this.trackId = -1, this.hls.trigger(o["default"].SUBTITLE_TRACKS_UPDATED, {
                                subtitleTracks: i
                            }), i.forEach(function(e) {
                                e["default"] && (t.media ? t.subtitleTrack = e.id : t.queuedDefaultTrack = e.id)
                            })
                        }, t.prototype.onTick = function() {
                            var e = this.trackId,
                                t = this.tracks[e];
                            if (t) {
                                var i = t.details;
                                i && !i.live || (a.logger.log("(re)loading playlist for subtitle track " + e), this.hls.trigger(o["default"].SUBTITLE_TRACK_LOADING, {
                                    url: t.url,
                                    id: e
                                }))
                            }
                        }, t.prototype.onSubtitleTrackLoaded = function(e) {
                            var t = this;
                            e.id < this.tracks.length && (a.logger.log("subtitle track " + e.id + " loaded"), this.tracks[e.id].details = e.details, e.details.live && !this.timer && (this.timer = setInterval(function() {
                                t.onTick()
                            }, 1e3 * e.details.targetduration, this)), !e.details.live && this.timer && this._stopTimer())
                        }, Object.defineProperty(t.prototype, "subtitleTracks", {
                            get: function() {
                                return this.tracks
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "subtitleTrack", {
                            get: function() {
                                return this.trackId
                            },
                            set: function(e) {
                                this.trackId !== e && (this._toggleTrackModes(e), this.setSubtitleTrackInternal(e))
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.prototype.setSubtitleTrackInternal = function(e) {
                            var t = this,
                                i = t.hls,
                                r = t.tracks;
                            if (!("number" != typeof e || e < -1 || e >= r.length) && (this._stopTimer(), this.trackId = e, a.logger.log("switching to subtitle track " + e), i.trigger(o["default"].SUBTITLE_TRACK_SWITCH, {
                                    id: e
                                }), -1 !== e)) {
                                var s = r[e],
                                    n = s.details;
                                n && !n.live || (a.logger.log("(re)loading playlist for subtitle track " + e), i.trigger(o["default"].SUBTITLE_TRACK_LOADING, {
                                    url: s.url,
                                    id: e
                                }))
                            }
                        }, t.prototype._stopTimer = function() {
                            this.timer && (clearInterval(this.timer), this.timer = null)
                        }, t.prototype._toggleTrackModes = function(e) {
                            var t = this,
                                i = t.media,
                                s = t.subtitleDisplay,
                                o = t.trackId;
                            if (i) {
                                var n = r(i.textTracks);
                                if (-1 === e)[].slice.call(n).forEach(function(e) {
                                    e.mode = "disabled"
                                });
                                else {
                                    var a = n[o];
                                    a && (a.mode = "disabled")
                                }
                                var l = n[e];
                                l && (l.mode = s ? "showing" : "hidden")
                            }
                        }, t
                    }(n["default"]);
                t["default"] = l
            },
            "./src/controller/timeline-controller.js": function(e, t, i) {
                "use strict";

                function r(e, t) {
                    return e && e.label === t.name && !(e.textTrack1 || e.textTrack2)
                }

                function s(e, t, i, r) {
                    return Math.min(t, r) - Math.max(e, i)
                }
                var o = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                    };
                    return function(t, i) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = i("./src/events.js"),
                    a = i("./src/event-handler.js"),
                    l = i("./src/utils/cea-608-parser.js"),
                    d = i("./src/utils/output-filter.js"),
                    u = i("./src/utils/webvtt-parser.js"),
                    h = i("./src/utils/logger.js"),
                    c = i("./src/utils/texttrack-utils.js"),
                    f = function(e) {
                        function t(t) {
                            var i = e.call(this, t, n["default"].MEDIA_ATTACHING, n["default"].MEDIA_DETACHING, n["default"].FRAG_PARSING_USERDATA, n["default"].FRAG_DECRYPTED, n["default"].MANIFEST_LOADING, n["default"].MANIFEST_LOADED, n["default"].FRAG_LOADED, n["default"].LEVEL_SWITCHING, n["default"].INIT_PTS_FOUND) || this;
                            if (i.hls = t, i.config = t.config, i.enabled = !0, i.Cues = t.config.cueHandler, i.textTracks = [], i.tracks = [], i.unparsedVttFrags = [], i.initPTS = undefined, i.cueRanges = [], i.captionsTracks = {}, i.captionsProperties = {
                                    textTrack1: {
                                        label: i.config.captionsTextTrack1Label,
                                        languageCode: i.config.captionsTextTrack1LanguageCode
                                    },
                                    textTrack2: {
                                        label: i.config.captionsTextTrack2Label,
                                        languageCode: i.config.captionsTextTrack2LanguageCode
                                    }
                                }, i.config.enableCEA708Captions) {
                                var r = new d["default"](i, "textTrack1"),
                                    s = new d["default"](i, "textTrack2");
                                i.cea608Parser = new l["default"](0, r, s)
                            }
                            return i
                        }
                        return o(t, e), t.prototype.addCues = function(e, t, i, r) {
                            for (var o = this.cueRanges, n = !1, a = o.length; a--;) {
                                var l = o[a],
                                    d = s(l[0], l[1], t, i);
                                if (d >= 0 && (l[0] = Math.min(l[0], t), l[1] = Math.max(l[1], i), n = !0, d / (i - t) > .5)) return
                            }
                            n || o.push([t, i]), this.Cues.newCue(this.captionsTracks[e], t, i, r)
                        }, t.prototype.onInitPtsFound = function(e) {
                            var t = this;
                            "undefined" == typeof this.initPTS && (this.initPTS = e.initPTS), this.unparsedVttFrags.length && (this.unparsedVttFrags.forEach(function(e) {
                                t.onFragLoaded(e)
                            }), this.unparsedVttFrags = [])
                        }, t.prototype.getExistingTrack = function(e) {
                            var t = this.media;
                            if (t)
                                for (var i = 0; i < t.textTracks.length; i++) {
                                    var r = t.textTracks[i];
                                    if (r[e]) return r
                                }
                            return null
                        }, t.prototype.createCaptionsTrack = function(e) {
                            var t = this.captionsProperties[e],
                                i = t.label,
                                r = t.languageCode,
                                s = this.captionsTracks;
                            if (!s[e]) {
                                var o = this.getExistingTrack(e);
                                if (o) s[e] = o, c.clearCurrentCues(s[e]), c.sendAddTrackEvent(s[e], this.media);
                                else {
                                    var n = this.createTextTrack("captions", i, r);
                                    n && (n[e] = !0, s[e] = n)
                                }
                            }
                        }, t.prototype.createTextTrack = function(e, t, i) {
                            var r = this.media;
                            if (r) return r.addTextTrack(e, t, i)
                        }, t.prototype.destroy = function() {
                            a["default"].prototype.destroy.call(this)
                        }, t.prototype.onMediaAttaching = function(e) {
                            this.media = e.media, this._cleanTracks()
                        }, t.prototype.onMediaDetaching = function() {
                            var e = this.captionsTracks;
                            Object.keys(e).forEach(function(t) {
                                c.clearCurrentCues(e[t]), delete e[t]
                            })
                        }, t.prototype.onManifestLoading = function() {
                            this.lastSn = -1, this.prevCC = -1, this.vttCCs = {
                                ccOffset: 0,
                                presentationOffset: 0
                            }, this._cleanTracks()
                        }, t.prototype._cleanTracks = function() {
                            var e = this.media;
                            if (e) {
                                var t = e.textTracks;
                                if (t)
                                    for (var i = 0; i < t.length; i++) c.clearCurrentCues(t[i])
                            }
                        }, t.prototype.onManifestLoaded = function(e) {
                            var t = this;
                            if (this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = undefined, this.cueRanges = [], this.config.enableWebVTT) {
                                this.tracks = e.subtitles || [];
                                var i = this.media ? this.media.textTracks : [];
                                this.tracks.forEach(function(e, s) {
                                    var o;
                                    if (s < i.length) {
                                        var n = Object.values(i).find(function(t) {
                                            return r(t, e)
                                        });
                                        n && (o = n)
                                    }
                                    o || (o = t.createTextTrack("subtitles", e.name, e.lang)), e["default"] ? o.mode = t.hls.subtitleDisplay ? "showing" : "hidden" : o.mode = "disabled", t.textTracks.push(o)
                                })
                            }
                        }, t.prototype.onLevelSwitching = function() {
                            this.enabled = "NONE" !== this.hls.currentLevel.closedCaptions
                        }, t.prototype.onFragLoaded = function(e) {
                            var t = e.frag,
                                i = e.payload;
                            if ("main" === t.type) {
                                var r = t.sn;
                                if (r !== this.lastSn + 1) {
                                    var s = this.cea608Parser;
                                    s && s.reset()
                                }
                                this.lastSn = r
                            } else if ("subtitle" === t.type)
                                if (i.byteLength) {
                                    if ("undefined" == typeof this.initPTS) return void this.unparsedVttFrags.push(e);
                                    var o = t.decryptdata;
                                    null != o && null != o.key && "AES-128" === o.method || this._parseVTTs(t, i)
                                } else this.hls.trigger(n["default"].SUBTITLE_FRAG_PROCESSED, {
                                    success: !1,
                                    frag: t
                                })
                        }, t.prototype._parseVTTs = function(e, t) {
                            var i = this.vttCCs;
                            i[e.cc] || (i[e.cc] = {
                                start: e.start,
                                prevCC: this.prevCC,
                                "new": !0
                            }, this.prevCC = e.cc);
                            var r = this.textTracks,
                                s = this.hls;
                            u["default"].parse(t, this.initPTS, i, e.cc, function(t) {
                                var i = r[e.trackId];
                                if ("disabled" === i.mode) return void s.trigger(n["default"].SUBTITLE_FRAG_PROCESSED, {
                                    success: !1,
                                    frag: e
                                });
                                t.forEach(function(e) {
                                    if (!i.cues.getCueById(e.id)) try {
                                        i.addCue(e)
                                    } catch (r) {
                                        var t = new window.TextTrackCue(e.startTime, e.endTime, e.text);
                                        t.id = e.id, i.addCue(t)
                                    }
                                }), s.trigger(n["default"].SUBTITLE_FRAG_PROCESSED, {
                                    success: !0,
                                    frag: e
                                })
                            }, function(t) {
                                h.logger.log("Failed to parse VTT cue: " + t), s.trigger(n["default"].SUBTITLE_FRAG_PROCESSED, {
                                    success: !1,
                                    frag: e
                                })
                            })
                        }, t.prototype.onFragDecrypted = function(e) {
                            var t = e.payload,
                                i = e.frag;
                            if ("subtitle" === i.type) {
                                if ("undefined" == typeof this.initPTS) return void this.unparsedVttFrags.push(e);
                                this._parseVTTs(i, t)
                            }
                        }, t.prototype.onFragParsingUserdata = function(e) {
                            if (this.enabled && this.config.enableCEA708Captions)
                                for (var t = 0; t < e.samples.length; t++) {
                                    var i = this.extractCea608Data(e.samples[t].bytes);
                                    this.cea608Parser.addData(e.samples[t].pts, i)
                                }
                        }, t.prototype.extractCea608Data = function(e) {
                            for (var t, i, r, s, o, n = 31 & e[0], a = 2, l = [], d = 0; d < n; d++) t = e[a++], i = 127 & e[a++], r = 127 & e[a++], s = 0 != (4 & t), o = 3 & t, 0 === i && 0 === r || s && 0 === o && (l.push(i), l.push(r));
                            return l
                        }, t
                    }(a["default"]);
                t["default"] = f
            },
            "./src/crypt/aes-crypto.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                    function e(e, t) {
                        this.subtle = e, this.aesIV = t
                    }
                    return e.prototype.decrypt = function(e, t) {
                        return this.subtle.decrypt({
                            name: "AES-CBC",
                            iv: this.aesIV
                        }, t, e)
                    }, e
                }();
                t["default"] = r
            },
            "./src/crypt/aes-decryptor.js": function(e, t, i) {
                "use strict";

                function r(e) {
                    var t = e.byteLength,
                        i = t && new DataView(e).getUint8(t - 1);
                    return i ? e.slice(0, t - i) : e
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.removePadding = r;
                var s = function() {
                    function e() {
                        this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable()
                    }
                    return e.prototype.uint8ArrayToUint32Array_ = function(e) {
                        for (var t = new DataView(e), i = new Uint32Array(4), r = 0; r < 4; r++) i[r] = t.getUint32(4 * r);
                        return i
                    }, e.prototype.initTable = function() {
                        var e = this.sBox,
                            t = this.invSBox,
                            i = this.subMix,
                            r = i[0],
                            s = i[1],
                            o = i[2],
                            n = i[3],
                            a = this.invSubMix,
                            l = a[0],
                            d = a[1],
                            u = a[2],
                            h = a[3],
                            c = new Uint32Array(256),
                            f = 0,
                            p = 0,
                            v = 0;
                        for (v = 0; v < 256; v++) c[v] = v < 128 ? v << 1 : v << 1 ^ 283;
                        for (v = 0; v < 256; v++) {
                            var g = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
                            g = g >>> 8 ^ 255 & g ^ 99, e[f] = g, t[g] = f;
                            var m = c[f],
                                y = c[m],
                                _ = c[y],
                                b = 257 * c[g] ^ 16843008 * g;
                            r[f] = b << 24 | b >>> 8, s[f] = b << 16 | b >>> 16, o[f] = b << 8 | b >>> 24, n[f] = b, b = 16843009 * _ ^ 65537 * y ^ 257 * m ^ 16843008 * f, l[g] = b << 24 | b >>> 8, d[g] = b << 16 | b >>> 16, u[g] = b << 8 | b >>> 24, h[g] = b, f ? (f = m ^ c[c[c[_ ^ m]]], p ^= c[c[p]]) : f = p = 1
                        }
                    }, e.prototype.expandKey = function(e) {
                        for (var t = this.uint8ArrayToUint32Array_(e), i = !0, r = 0; r < t.length && i;) i = t[r] === this.key[r], r++;
                        if (!i) {
                            this.key = t;
                            var s = this.keySize = t.length;
                            if (4 !== s && 6 !== s && 8 !== s) throw new Error("Invalid aes key size=" + s);
                            var o, n, a, l, d = this.ksRows = 4 * (s + 6 + 1),
                                u = this.keySchedule = new Uint32Array(d),
                                h = this.invKeySchedule = new Uint32Array(d),
                                c = this.sBox,
                                f = this.rcon,
                                p = this.invSubMix,
                                v = p[0],
                                g = p[1],
                                m = p[2],
                                y = p[3];
                            for (o = 0; o < d; o++) o < s ? a = u[o] = t[o] : (l = a, o % s == 0 ? (l = l << 8 | l >>> 24, l = c[l >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l], l ^= f[o / s | 0] << 24) : s > 6 && o % s == 4 && (l = c[l >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l]), u[o] = a = (u[o - s] ^ l) >>> 0);
                            for (n = 0; n < d; n++) o = d - n, l = 3 & n ? u[o] : u[o - 4], h[n] = n < 4 || o <= 4 ? l : v[c[l >>> 24]] ^ g[c[l >>> 16 & 255]] ^ m[c[l >>> 8 & 255]] ^ y[c[255 & l]], h[n] = h[n] >>> 0
                        }
                    }, e.prototype.networkToHostOrderSwap = function(e) {
                        return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
                    }, e.prototype.decrypt = function(e, t, i, s) {
                        for (var o, n, a, l, d, u, h, c, f, p, v, g, m, y, _ = this.keySize + 6, b = this.invKeySchedule, E = this.invSBox, S = this.invSubMix, w = S[0], k = S[1], T = S[2], L = S[3], P = this.uint8ArrayToUint32Array_(i), A = P[0], C = P[1], x = P[2], R = P[3], D = new Int32Array(e), I = new Int32Array(D.length), O = this.networkToHostOrderSwap; t < D.length;) {
                            for (f = O(D[t]), p = O(D[t + 1]), v = O(D[t + 2]), g = O(D[t + 3]), d = f ^ b[0], u = g ^ b[1], h = v ^ b[2], c = p ^ b[3], m = 4, y = 1; y < _; y++) o = w[d >>> 24] ^ k[u >> 16 & 255] ^ T[h >> 8 & 255] ^ L[255 & c] ^ b[m], n = w[u >>> 24] ^ k[h >> 16 & 255] ^ T[c >> 8 & 255] ^ L[255 & d] ^ b[m + 1], a = w[h >>> 24] ^ k[c >> 16 & 255] ^ T[d >> 8 & 255] ^ L[255 & u] ^ b[m + 2], l = w[c >>> 24] ^ k[d >> 16 & 255] ^ T[u >> 8 & 255] ^ L[255 & h] ^ b[m + 3], d = o, u = n, h = a, c = l, m += 4;
                            o = E[d >>> 24] << 24 ^ E[u >> 16 & 255] << 16 ^ E[h >> 8 & 255] << 8 ^ E[255 & c] ^ b[m], n = E[u >>> 24] << 24 ^ E[h >> 16 & 255] << 16 ^ E[c >> 8 & 255] << 8 ^ E[255 & d] ^ b[m + 1], a = E[h >>> 24] << 24 ^ E[c >> 16 & 255] << 16 ^ E[d >> 8 & 255] << 8 ^ E[255 & u] ^ b[m + 2], l = E[c >>> 24] << 24 ^ E[d >> 16 & 255] << 16 ^ E[u >> 8 & 255] << 8 ^ E[255 & h] ^ b[m + 3], m += 3, I[t] = O(o ^ A), I[t + 1] = O(l ^ C), I[t + 2] = O(a ^ x), I[t + 3] = O(n ^ R), A = f, C = p, x = v, R = g, t += 4
                        }
                        return s ? r(I.buffer) : I.buffer
                    }, e.prototype.destroy = function() {
                        this.key = undefined, this.keySize = undefined, this.ksRows = undefined, this.sBox = undefined, this.invSBox = undefined, this.subMix = undefined, this.invSubMix = undefined, this.keySchedule = undefined, this.invKeySchedule = undefined, this.rcon = undefined
                    }, e
                }();
                t["default"] = s
            },
            "./src/crypt/decrypter.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/crypt/aes-crypto.js"),
                    s = i("./src/crypt/fast-aes-key.js"),
                    o = i("./src/crypt/aes-decryptor.js"),
                    n = i("./src/errors.js"),
                    a = i("./src/utils/logger.js"),
                    l = i("./src/events.js"),
                    d = i("./src/utils/get-self-scope.js"),
                    u = d.getSelfScope(),
                    h = function() {
                        function e(e, t, i) {
                            var r = (void 0 === i ? {} : i).removePKCS7Padding,
                                s = void 0 === r || r;
                            if (this.logEnabled = !0, this.observer = e, this.config = t, this.removePKCS7Padding = s, s) try {
                                var o = u.crypto;
                                o && (this.subtle = o.subtle || o.webkitSubtle)
                            } catch (n) {}
                            this.disableWebCrypto = !this.subtle
                        }
                        return e.prototype.isSync = function() {
                            return this.disableWebCrypto && this.config.enableSoftwareAES
                        }, e.prototype.decrypt = function(e, t, i, n) {
                            var l = this;
                            if (this.disableWebCrypto && this.config.enableSoftwareAES) {
                                this.logEnabled && (a.logger.log("JS AES decrypt"), this.logEnabled = !1);
                                var d = this.decryptor;
                                d || (this.decryptor = d = new o["default"]), d.expandKey(t), n(d.decrypt(e, 0, i, this.removePKCS7Padding))
                            } else {
                                this.logEnabled && (a.logger.log("WebCrypto AES decrypt"), this.logEnabled = !1);
                                var u = this.subtle;
                                this.key !== t && (this.key = t, this.fastAesKey = new s["default"](u, t)), this.fastAesKey.expandKey().then(function(s) {
                                    new r["default"](u, i).decrypt(e, s)["catch"](function(r) {
                                        l.onWebCryptoError(r, e, t, i, n)
                                    }).then(function(e) {
                                        n(e)
                                    })
                                })["catch"](function(r) {
                                    l.onWebCryptoError(r, e, t, i, n)
                                })
                            }
                        }, e.prototype.onWebCryptoError = function(e, t, i, r, s) {
                            this.config.enableSoftwareAES ? (a.logger.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(t, i, r, s)) : (a.logger.error("decrypting error : " + e.message), this.observer.trigger(l["default"].ERROR, {
                                type: n.ErrorTypes.MEDIA_ERROR,
                                details: n.ErrorDetails.FRAG_DECRYPT_ERROR,
                                fatal: !0,
                                reason: e.message
                            }))
                        }, e.prototype.destroy = function() {
                            var e = this.decryptor;
                            e && (e.destroy(), this.decryptor = undefined)
                        }, e
                    }();
                t["default"] = h
            },
            "./src/crypt/fast-aes-key.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                    function e(e, t) {
                        this.subtle = e, this.key = t
                    }
                    return e.prototype.expandKey = function() {
                        return this.subtle.importKey("raw", this.key, {
                            name: "AES-CBC"
                        }, !1, ["encrypt", "decrypt"])
                    }, e
                }();
                t["default"] = r
            },
            "./src/demux/aacdemuxer.js": function(e, t, i) {
                "use strict";
                (function(e) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = i("./src/demux/adts.js"),
                        s = i("./src/utils/logger.js"),
                        o = i("./src/demux/id3.js"),
                        n = function() {
                            function t(e, t, i) {
                                this.observer = e, this.config = i, this.remuxer = t
                            }
                            return t.prototype.resetInitSegment = function(e, t, i, r) {
                                this._audioTrack = {
                                    container: "audio/adts",
                                    type: "audio",
                                    id: 0,
                                    sequenceNumber: 0,
                                    isAAC: !0,
                                    samples: [],
                                    len: 0,
                                    manifestCodec: t,
                                    duration: r,
                                    inputTimeScale: 9e4
                                }
                            }, t.prototype.resetTimeStamp = function() {}, t.probe = function(e) {
                                if (!e) return !1;
                                for (var t = o["default"].getID3Data(e, 0) || [], i = t.length, n = e.length; i < n; i++)
                                    if (r.probe(e, i)) return s.logger.log("ADTS sync word found !"), !0;
                                return !1
                            }, t.prototype.append = function(t, i, n, a) {
                                for (var l = this._audioTrack, d = o["default"].getID3Data(t, 0) || [], u = o["default"].getTimeStamp(d), h = e.isFinite(u) ? 90 * u : 9e4 * i, c = 0, f = h, p = t.length, v = d.length, g = [{
                                        pts: f,
                                        dts: f,
                                        data: d
                                    }]; v < p - 1;)
                                    if (r.isHeader(t, v) && v + 5 < p) {
                                        r.initTrackConfig(l, this.observer, t, v, l.manifestCodec);
                                        var m = r.appendFrame(l, t, v, h, c);
                                        if (!m) {
                                            s.logger.log("Unable to parse AAC frame");
                                            break
                                        }
                                        v += m.length, f = m.sample.pts, c++
                                    } else o["default"].isHeader(t, v) ? (d = o["default"].getID3Data(t, v), g.push({
                                        pts: f,
                                        dts: f,
                                        data: d
                                    }), v += d.length) : v++;
                                this.remuxer.remux(l, {
                                    samples: []
                                }, {
                                    samples: g,
                                    inputTimeScale: 9e4
                                }, {
                                    samples: []
                                }, i, n, a)
                            }, t.prototype.destroy = function() {}, t
                        }();
                    t["default"] = n
                }).call(this, i("./src/polyfills/number.js").Number)
            },
            "./src/demux/adts.js": function(e, t, i) {
                "use strict";

                function r(e, t, i, r) {
                    var s, o, n, a, l, d = navigator.userAgent.toLowerCase(),
                        u = r,
                        h = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                    return s = 1 + ((192 & t[i + 2]) >>> 6), (o = (60 & t[i + 2]) >>> 2) > h.length - 1 ? void e.trigger(v["default"].ERROR, {
                        type: p.ErrorTypes.MEDIA_ERROR,
                        details: p.ErrorDetails.FRAG_PARSING_ERROR,
                        fatal: !0,
                        reason: "invalid ADTS sampling index:" + o
                    }) : (a = (1 & t[i + 2]) << 2, a |= (192 & t[i + 3]) >>> 6, f.logger.log("manifest codec:" + r + ",ADTS data:type:" + s + ",sampleingIndex:" + o + "[" + h[o] + "Hz],channelConfig:" + a), /firefox/i.test(d) ? o >= 6 ? (s = 5, l = new Array(4), n = o - 3) : (s = 2, l = new Array(2), n = o) : -1 !== d.indexOf("android") ? (s = 2, l = new Array(2), n = o) : (s = 5, l = new Array(4), r && (-1 !== r.indexOf("mp4a.40.29") || -1 !== r.indexOf("mp4a.40.5")) || !r && o >= 6 ? n = o - 3 : ((r && -1 !== r.indexOf("mp4a.40.2") && (o >= 6 && 1 === a || /vivaldi/i.test(d)) || !r && 1 === a) && (s = 2, l = new Array(2)), n = o)), l[0] = s << 3, l[0] |= (14 & o) >> 1, l[1] |= (1 & o) << 7, l[1] |= a << 3, 5 === s && (l[1] |= (14 & n) >> 1, l[2] = (1 & n) << 7, l[2] |= 8, l[3] = 0), {
                        config: l,
                        samplerate: h[o],
                        channelCount: a,
                        codec: "mp4a.40." + s,
                        manifestCodec: u
                    })
                }

                function s(e, t) {
                    return 255 === e[t] && 240 == (246 & e[t + 1])
                }

                function o(e, t) {
                    return 1 & e[t + 1] ? 7 : 9
                }

                function n(e, t) {
                    return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5
                }

                function a(e, t) {
                    return !!(t + 1 < e.length && s(e, t))
                }

                function l(e, t) {
                    if (t + 1 < e.length && s(e, t)) {
                        var i = o(e, t),
                            r = i;
                        t + 5 < e.length && (r = n(e, t));
                        var a = t + r;
                        if (a === e.length || a + 1 < e.length && s(e, a)) return !0
                    }
                    return !1
                }

                function d(e, t, i, s, o) {
                    if (!e.samplerate) {
                        var n = r(t, i, s, o);
                        e.config = n.config, e.samplerate = n.samplerate, e.channelCount = n.channelCount, e.codec = n.codec, e.manifestCodec = n.manifestCodec, f.logger.log("parsed codec:" + e.codec + ",rate:" + n.samplerate + ",nb channel:" + n.channelCount)
                    }
                }

                function u(e) {
                    return 9216e4 / e
                }

                function h(e, t, i, r, s) {
                    var a, l, d, u = e.length;
                    return a = o(e, t), l = n(e, t), l -= a, l > 0 && t + a + l <= u ? (d = i + r * s, {
                        headerLength: a,
                        frameLength: l,
                        stamp: d
                    }) : undefined
                }

                function c(e, t, i, r, s) {
                    var o = u(e.samplerate),
                        n = h(t, i, r, s, o);
                    if (n) {
                        var a = n.stamp,
                            l = n.headerLength,
                            d = n.frameLength,
                            c = {
                                unit: t.subarray(i + l, i + l + d),
                                pts: a,
                                dts: a
                            };
                        return e.samples.push(c), e.len += d, {
                            sample: c,
                            length: d + l
                        }
                    }
                    return undefined
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var f = i("./src/utils/logger.js"),
                    p = i("./src/errors.js"),
                    v = i("./src/events.js");
                t.getAudioConfig = r, t.isHeaderPattern = s, t.getHeaderLength = o, t.getFullFrameLength = n, t.isHeader = a, t.probe = l, t.initTrackConfig = d, t.getFrameDuration = u, t.parseFrameHeader = h, t.appendFrame = c
            },
            "./src/demux/demuxer-inline.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r, s = i("./src/events.js"),
                    o = i("./src/errors.js"),
                    n = i("./src/crypt/decrypter.js"),
                    a = i("./src/demux/aacdemuxer.js"),
                    l = i("./src/demux/mp4demuxer.js"),
                    d = i("./src/demux/tsdemuxer.js"),
                    u = i("./src/demux/mp3demuxer.js"),
                    h = i("./src/remux/mp4-remuxer.js"),
                    c = i("./src/remux/passthrough-remuxer.js"),
                    f = i("./src/utils/get-self-scope.js"),
                    p = i("./src/utils/logger.js"),
                    v = f.getSelfScope();
                try {
                    r = v.performance.now.bind(v.performance)
                } catch (m) {
                    p.logger.debug("Unable to use Performance API on this environment"), r = v.Date.now
                }
                var g = function() {
                    function e(e, t, i, r) {
                        this.observer = e, this.typeSupported = t, this.config = i, this.vendor = r
                    }
                    return e.prototype.destroy = function() {
                        var e = this.demuxer;
                        e && e.destroy()
                    }, e.prototype.push = function(e, t, i, o, a, l, d, u, h, c, f, p) {
                        var v = this;
                        if (e.byteLength > 0 && null != t && null != t.key && "AES-128" === t.method) {
                            var g = this.decrypter;
                            null == g && (g = this.decrypter = new n["default"](this.observer, this.config));
                            var m = r();
                            g.decrypt(e, t.key.buffer, t.iv.buffer, function(e) {
                                var n = r();
                                v.observer.trigger(s["default"].FRAG_DECRYPTED, {
                                    stats: {
                                        tstart: m,
                                        tdecrypt: n
                                    }
                                }), v.pushDecrypted(new Uint8Array(e), t, new Uint8Array(i), o, a, l, d, u, h, c, f, p)
                            })
                        } else this.pushDecrypted(new Uint8Array(e), t, new Uint8Array(i), o, a, l, d, u, h, c, f, p)
                    }, e.prototype.pushDecrypted = function(e, t, i, r, n, f, p, v, g, m, y, _) {
                        var b = this.demuxer;
                        if (!b || (p || v) && !this.probe(e)) {
                            for (var E = this.observer, S = this.typeSupported, w = this.config, k = [{
                                    demux: d["default"],
                                    remux: h["default"]
                                }, {
                                    demux: l["default"],
                                    remux: c["default"]
                                }, {
                                    demux: a["default"],
                                    remux: h["default"]
                                }, {
                                    demux: u["default"],
                                    remux: h["default"]
                                }], T = 0, L = k.length; T < L; T++) {
                                var P = k[T],
                                    A = P.demux.probe;
                                if (A(e)) {
                                    var C = this.remuxer = new P.remux(E, w, S, this.vendor);
                                    b = new P.demux(E, C, w, S), this.probe = A;
                                    break
                                }
                            }
                            if (!b) return void E.trigger(s["default"].ERROR, {
                                type: o.ErrorTypes.MEDIA_ERROR,
                                details: o.ErrorDetails.FRAG_PARSING_ERROR,
                                fatal: !0,
                                reason: "no demux matching with content found"
                            });
                            this.demuxer = b
                        }
                        var x = this.remuxer;
                        (p || v) && (b.resetInitSegment(i, r, n, m), x.resetInitSegment()), p && (b.resetTimeStamp(_), x.resetTimeStamp(_)), "function" == typeof b.setDecryptData && b.setDecryptData(t), b.append(e, f, g, y)
                    }, e
                }();
                t["default"] = g
            },
            "./src/demux/demuxer-worker.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/demux/demuxer-inline.js"),
                    s = i("./src/events.js"),
                    o = i("./src/utils/logger.js"),
                    n = i("./node_modules/node-libs-browser/node_modules/events/events.js"),
                    a = function(e) {
                        var t = new n.EventEmitter;
                        t.trigger = function(e) {
                            for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
                            t.emit.apply(t, [e, e].concat(i))
                        }, t.off = function(e) {
                            for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
                            t.removeListener.apply(t, [e].concat(i))
                        };
                        var i = function(t, i) {
                            e.postMessage({
                                event: t,
                                data: i
                            })
                        };
                        e.addEventListener("message", function(s) {
                            var n = s.data;
                            switch (n.cmd) {
                                case "init":
                                    var a = JSON.parse(n.config);
                                    e.demuxer = new r["default"](t, n.typeSupported, a, n.vendor), o.enableLogs(a.debug), i("init", null);
                                    break;
                                case "demux":
                                    e.demuxer.push(n.data, n.decryptdata, n.initSegment, n.audioCodec, n.videoCodec, n.timeOffset, n.discontinuity, n.trackSwitch, n.contiguous, n.duration, n.accurateTimeOffset, n.defaultInitPTS)
                            }
                        }), t.on(s["default"].FRAG_DECRYPTED, i), t.on(s["default"].FRAG_PARSING_INIT_SEGMENT, i), t.on(s["default"].FRAG_PARSED, i), t.on(s["default"].ERROR, i), t.on(s["default"].FRAG_PARSING_METADATA, i), t.on(s["default"].FRAG_PARSING_USERDATA, i), t.on(s["default"].INIT_PTS_FOUND, i), t.on(s["default"].FRAG_PARSING_DATA, function(t, i) {
                            var r = [],
                                s = {
                                    event: t,
                                    data: i
                                };
                            i.data1 && (s.data1 = i.data1.buffer, r.push(i.data1.buffer), delete i.data1), i.data2 && (s.data2 = i.data2.buffer, r.push(i.data2.buffer), delete i.data2), e.postMessage(s, r)
                        })
                    };
                t["default"] = a
            },
            "./src/demux/demuxer.js": function(e, t, i) {
                "use strict";
                (function(e) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = i("./node_modules/webworkify-webpack/index.js"),
                        s = i("./src/events.js"),
                        o = i("./src/demux/demuxer-inline.js"),
                        n = i("./src/utils/logger.js"),
                        a = i("./src/errors.js"),
                        l = i("./src/utils/mediasource-helper.js"),
                        d = i("./src/utils/get-self-scope.js"),
                        u = i("./src/observer.js"),
                        h = d.getSelfScope(),
                        c = l.getMediaSource(),
                        f = function() {
                            function t(e, t) {
                                var i = this;
                                this.hls = e, this.id = t;
                                var l = this.observer = new u.Observer,
                                    d = e.config,
                                    f = function(t, r) {
                                        r = r || {}, r.frag = i.frag, r.id = i.id, e.trigger(t, r)
                                    };
                                l.on(s["default"].FRAG_DECRYPTED, f), l.on(s["default"].FRAG_PARSING_INIT_SEGMENT, f), l.on(s["default"].FRAG_PARSING_DATA, f), l.on(s["default"].FRAG_PARSED, f), l.on(s["default"].ERROR, f), l.on(s["default"].FRAG_PARSING_METADATA, f), l.on(s["default"].FRAG_PARSING_USERDATA, f), l.on(s["default"].INIT_PTS_FOUND, f);
                                var p = {
                                        mp4: c.isTypeSupported("video/mp4"),
                                        mpeg: c.isTypeSupported("audio/mpeg"),
                                        mp3: c.isTypeSupported('audio/mp4; codecs="mp3"')
                                    },
                                    v = navigator.vendor;
                                if (d.enableWorker && "undefined" != typeof Worker) {
                                    n.logger.log("demuxing in webworker");
                                    var g = void 0;
                                    try {
                                        g = this.w = r("./src/demux/demuxer-worker.js"), this.onwmsg = this.onWorkerMessage.bind(this), g.addEventListener("message", this.onwmsg), g.onerror = function(t) {
                                            e.trigger(s["default"].ERROR, {
                                                type: a.ErrorTypes.OTHER_ERROR,
                                                details: a.ErrorDetails.INTERNAL_EXCEPTION,
                                                fatal: !0,
                                                event: "demuxerWorker",
                                                err: {
                                                    message: t.message + " (" + t.filename + ":" + t.lineno + ")"
                                                }
                                            })
                                        }, g.postMessage({
                                            cmd: "init",
                                            typeSupported: p,
                                            vendor: v,
                                            id: t,
                                            config: JSON.stringify(d)
                                        })
                                    } catch (m) {
                                        n.logger.warn("Error in worker:", m), n.logger.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"), g && h.URL.revokeObjectURL(g.objectURL), this.demuxer = new o["default"](l, p, d, v), this.w = undefined
                                    }
                                } else this.demuxer = new o["default"](l, p, d, v)
                            }
                            return t.prototype.destroy = function() {
                                var e = this.w;
                                if (e) e.removeEventListener("message", this.onwmsg), e.terminate(), this.w = null;
                                else {
                                    var t = this.demuxer;
                                    t && (t.destroy(), this.demuxer = null)
                                }
                                var i = this.observer;
                                i && (i.removeAllListeners(), this.observer = null)
                            }, t.prototype.push = function(t, i, r, s, o, a, l, d) {
                                var u = this.w,
                                    h = e.isFinite(o.startDTS) ? o.startDTS : o.start,
                                    c = o.decryptdata,
                                    f = this.frag,
                                    p = !(f && o.cc === f.cc),
                                    v = !(f && o.level === f.level),
                                    g = f && o.sn === f.sn + 1,
                                    m = !v && g;
                                if (p && n.logger.log(this.id + ":discontinuity detected"), v && n.logger.log(this.id + ":switch detected"), this.frag = o, u) u.postMessage({
                                    cmd: "demux",
                                    data: t,
                                    decryptdata: c,
                                    initSegment: i,
                                    audioCodec: r,
                                    videoCodec: s,
                                    timeOffset: h,
                                    discontinuity: p,
                                    trackSwitch: v,
                                    contiguous: m,
                                    duration: a,
                                    accurateTimeOffset: l,
                                    defaultInitPTS: d
                                }, t instanceof ArrayBuffer ? [t] : []);
                                else {
                                    var y = this.demuxer;
                                    y && y.push(t, c, i, r, s, h, p, v, m, a, l, d)
                                }
                            }, t.prototype.onWorkerMessage = function(e) {
                                var t = e.data,
                                    i = this.hls;
                                switch (t.event) {
                                    case "init":
                                        h.URL.revokeObjectURL(this.w.objectURL);
                                        break;
                                    case s["default"].FRAG_PARSING_DATA:
                                        t.data.data1 = new Uint8Array(t.data1), t.data2 && (t.data.data2 = new Uint8Array(t.data2));
                                    default:
                                        t.data = t.data || {}, t.data.frag = this.frag, t.data.id = this.id, i.trigger(t.event, t.data)
                                }
                            }, t
                        }();
                    t["default"] = f
                }).call(this, i("./src/polyfills/number.js").Number)
            },
            "./src/demux/exp-golomb.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/utils/logger.js"),
                    s = function() {
                        function e(e) {
                            this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0
                        }
                        return e.prototype.loadWord = function() {
                            var e = this.data,
                                t = this.bytesAvailable,
                                i = e.byteLength - t,
                                r = new Uint8Array(4),
                                s = Math.min(4, t);
                            if (0 === s) throw new Error("no bytes available");
                            r.set(e.subarray(i, i + s)), this.word = new DataView(r.buffer).getUint32(0), this.bitsAvailable = 8 * s, this.bytesAvailable -= s
                        }, e.prototype.skipBits = function(e) {
                            var t;
                            this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, t = e >> 3, e -= t >> 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e)
                        }, e.prototype.readBits = function(e) {
                            var t = Math.min(this.bitsAvailable, e),
                                i = this.word >>> 32 - t;
                            return e > 32 && r.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0 ? this.word <<= t : this.bytesAvailable > 0 && this.loadWord(), t = e - t, t > 0 && this.bitsAvailable ? i << t | this.readBits(t) : i
                        }, e.prototype.skipLZ = function() {
                            var e;
                            for (e = 0; e < this.bitsAvailable; ++e)
                                if (0 != (this.word & 2147483648 >>> e)) return this.word <<= e, this.bitsAvailable -= e, e;
                            return this.loadWord(), e + this.skipLZ()
                        }, e.prototype.skipUEG = function() {
                            this.skipBits(1 + this.skipLZ())
                        }, e.prototype.skipEG = function() {
                            this.skipBits(1 + this.skipLZ())
                        }, e.prototype.readUEG = function() {
                            var e = this.skipLZ();
                            return this.readBits(e + 1) - 1
                        }, e.prototype.readEG = function() {
                            var e = this.readUEG();
                            return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
                        }, e.prototype.readBoolean = function() {
                            return 1 === this.readBits(1)
                        }, e.prototype.readUByte = function() {
                            return this.readBits(8)
                        }, e.prototype.readUShort = function() {
                            return this.readBits(16)
                        }, e.prototype.readUInt = function() {
                            return this.readBits(32)
                        }, e.prototype.skipScalingList = function(e) {
                            var t, i, r = 8,
                                s = 8;
                            for (t = 0; t < e; t++) 0 !== s && (i = this.readEG(), s = (r + i + 256) % 256), r = 0 === s ? r : s
                        }, e.prototype.readSPS = function() {
                            var e, t, i, r, s, o, n, a = 0,
                                l = 0,
                                d = 0,
                                u = 0,
                                h = this.readUByte.bind(this),
                                c = this.readBits.bind(this),
                                f = this.readUEG.bind(this),
                                p = this.readBoolean.bind(this),
                                v = this.skipBits.bind(this),
                                g = this.skipEG.bind(this),
                                m = this.skipUEG.bind(this),
                                y = this.skipScalingList.bind(this);
                            if (h(), e = h(), c(5), v(3), h(), m(), 100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e) {
                                var _ = f();
                                if (3 === _ && v(1), m(), m(), v(1), p())
                                    for (o = 3 !== _ ? 8 : 12, n = 0; n < o; n++) p() && y(n < 6 ? 16 : 64)
                            }
                            m();
                            var b = f();
                            if (0 === b) f();
                            else if (1 === b)
                                for (v(1), g(), g(), t = f(), n = 0; n < t; n++) g();
                            m(), v(1), i = f(), r = f(), s = c(1), 0 === s && v(1), v(1), p() && (a = f(), l = f(), d = f(), u = f());
                            var E = [1, 1];
                            if (p() && p()) {
                                switch (h()) {
                                    case 1:
                                        E = [1, 1];
                                        break;
                                    case 2:
                                        E = [12, 11];
                                        break;
                                    case 3:
                                        E = [10, 11];
                                        break;
                                    case 4:
                                        E = [16, 11];
                                        break;
                                    case 5:
                                        E = [40, 33];
                                        break;
                                    case 6:
                                        E = [24, 11];
                                        break;
                                    case 7:
                                        E = [20, 11];
                                        break;
                                    case 8:
                                        E = [32, 11];
                                        break;
                                    case 9:
                                        E = [80, 33];
                                        break;
                                    case 10:
                                        E = [18, 11];
                                        break;
                                    case 11:
                                        E = [15, 11];
                                        break;
                                    case 12:
                                        E = [64, 33];
                                        break;
                                    case 13:
                                        E = [160, 99];
                                        break;
                                    case 14:
                                        E = [4, 3];
                                        break;
                                    case 15:
                                        E = [3, 2];
                                        break;
                                    case 16:
                                        E = [2, 1];
                                        break;
                                    case 255:
                                        E = [h() << 8 | h(), h() << 8 | h()]
                                }
                            }
                            return {
                                width: Math.ceil(16 * (i + 1) - 2 * a - 2 * l),
                                height: (2 - s) * (r + 1) * 16 - (s ? 2 : 4) * (d + u),
                                pixelRatio: E
                            }
                        }, e.prototype.readSliceType = function() {
                            return this.readUByte(), this.readUEG(), this.readUEG()
                        }, e
                    }();
                t["default"] = s
            },
            "./src/demux/id3.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                        function e() {}
                        return e.isHeader = function(e, t) {
                            return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
                        }, e.isFooter = function(e, t) {
                            return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
                        }, e.getID3Data = function(t, i) {
                            for (var r = i, s = 0; e.isHeader(t, i);) {
                                s += 10;
                                s += e._readSize(t, i + 6), e.isFooter(t, i + 10) && (s += 10), i += s
                            }
                            return s > 0 ? t.subarray(r, r + s) : undefined
                        }, e._readSize = function(e, t) {
                            var i = 0;
                            return i = (127 & e[t]) << 21, i |= (127 & e[t + 1]) << 14, i |= (127 & e[t + 2]) << 7, i |= 127 & e[t + 3]
                        }, e.getTimeStamp = function(t) {
                            for (var i = e.getID3Frames(t), r = 0; r < i.length; r++) {
                                var s = i[r];
                                if (e.isTimeStampFrame(s)) return e._readTimeStamp(s)
                            }
                            return undefined
                        }, e.isTimeStampFrame = function(e) {
                            return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info
                        }, e._getFrameData = function(t) {
                            var i = String.fromCharCode(t[0], t[1], t[2], t[3]),
                                r = e._readSize(t, 4);
                            return {
                                type: i,
                                size: r,
                                data: t.subarray(10, 10 + r)
                            }
                        }, e.getID3Frames = function(t) {
                            for (var i = 0, r = []; e.isHeader(t, i);) {
                                var s = e._readSize(t, i + 6);
                                i += 10;
                                for (var o = i + s; i + 8 < o;) {
                                    var n = e._getFrameData(t.subarray(i)),
                                        a = e._decodeFrame(n);
                                    a && r.push(a), i += n.size + 10
                                }
                                e.isFooter(t, i) && (i += 10)
                            }
                            return r
                        }, e._decodeFrame = function(t) {
                            return "PRIV" === t.type ? e._decodePrivFrame(t) : "T" === t.type[0] ? e._decodeTextFrame(t) : "W" === t.type[0] ? e._decodeURLFrame(t) : undefined
                        }, e._readTimeStamp = function(e) {
                            if (8 === e.data.byteLength) {
                                var t = new Uint8Array(e.data),
                                    i = 1 & t[3],
                                    r = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
                                return r /= 45, i && (r += 47721858.84), Math.round(r)
                            }
                            return undefined
                        }, e._decodePrivFrame = function(t) {
                            if (t.size < 2) return undefined;
                            var i = e._utf8ArrayToStr(t.data, !0),
                                r = new Uint8Array(t.data.subarray(i.length + 1));
                            return {
                                key: t.type,
                                info: i,
                                data: r.buffer
                            }
                        }, e._decodeTextFrame = function(t) {
                            if (t.size < 2) return undefined;
                            if ("TXXX" === t.type) {
                                var i = 1,
                                    r = e._utf8ArrayToStr(t.data.subarray(i));
                                i += r.length + 1;
                                var s = e._utf8ArrayToStr(t.data.subarray(i));
                                return {
                                    key: t.type,
                                    info: r,
                                    data: s
                                }
                            }
                            var o = e._utf8ArrayToStr(t.data.subarray(1));
                            return {
                                key: t.type,
                                data: o
                            }
                        }, e._decodeURLFrame = function(t) {
                            if ("WXXX" === t.type) {
                                if (t.size < 2) return undefined;
                                var i = 1,
                                    r = e._utf8ArrayToStr(t.data.subarray(i));
                                i += r.length + 1;
                                var s = e._utf8ArrayToStr(t.data.subarray(i));
                                return {
                                    key: t.type,
                                    info: r,
                                    data: s
                                }
                            }
                            var o = e._utf8ArrayToStr(t.data);
                            return {
                                key: t.type,
                                data: o
                            }
                        }, e._utf8ArrayToStr = function(e, t) {
                            void 0 === t && (t = !1);
                            for (var i, r, s, o = e.length, n = "", a = 0; a < o;) {
                                if (0 === (i = e[a++]) && t) return n;
                                if (0 !== i && 3 !== i) switch (i >> 4) {
                                    case 0:
                                    case 1:
                                    case 2:
                                    case 3:
                                    case 4:
                                    case 5:
                                    case 6:
                                    case 7:
                                        n += String.fromCharCode(i);
                                        break;
                                    case 12:
                                    case 13:
                                        r = e[a++], n += String.fromCharCode((31 & i) << 6 | 63 & r);
                                        break;
                                    case 14:
                                        r = e[a++], s = e[a++], n += String.fromCharCode((15 & i) << 12 | (63 & r) << 6 | (63 & s) << 0)
                                }
                            }
                            return n
                        }, e
                    }(),
                    s = r._utf8ArrayToStr;
                t.utf8ArrayToStr = s, t["default"] = r
            },
            "./src/demux/mp3demuxer.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/demux/id3.js"),
                    s = i("./src/utils/logger.js"),
                    o = i("./src/demux/mpegaudio.js"),
                    n = function() {
                        function e(e, t, i) {
                            this.observer = e, this.config = i, this.remuxer = t
                        }
                        return e.prototype.resetInitSegment = function(e, t, i, r) {
                            this._audioTrack = {
                                container: "audio/mpeg",
                                type: "audio",
                                id: -1,
                                sequenceNumber: 0,
                                isAAC: !1,
                                samples: [],
                                len: 0,
                                manifestCodec: t,
                                duration: r,
                                inputTimeScale: 9e4
                            }
                        }, e.prototype.resetTimeStamp = function() {}, e.probe = function(e) {
                            var t, i, n = r["default"].getID3Data(e, 0);
                            if (n && r["default"].getTimeStamp(n) !== undefined)
                                for (t = n.length, i = Math.min(e.length - 1, t + 100); t < i; t++)
                                    if (o["default"].probe(e, t)) return s.logger.log("MPEG Audio sync word found !"), !0;
                            return !1
                        }, e.prototype.append = function(e, t, i, s) {
                            for (var n = r["default"].getID3Data(e, 0), a = r["default"].getTimeStamp(n), l = a ? 90 * a : 9e4 * t, d = n.length, u = e.length, h = 0, c = 0, f = this._audioTrack, p = [{
                                    pts: l,
                                    dts: l,
                                    data: n
                                }]; d < u;)
                                if (o["default"].isHeader(e, d)) {
                                    var v = o["default"].appendFrame(f, e, d, l, h);
                                    if (!v) break;
                                    d += v.length, c = v.sample.pts, h++
                                } else r["default"].isHeader(e, d) ? (n = r["default"].getID3Data(e, d), p.push({
                                    pts: c,
                                    dts: c,
                                    data: n
                                }), d += n.length) : d++;
                            this.remuxer.remux(f, {
                                samples: []
                            }, {
                                samples: p,
                                inputTimeScale: 9e4
                            }, {
                                samples: []
                            }, t, i, s)
                        }, e.prototype.destroy = function() {}, e
                    }();
                t["default"] = n
            },
            "./src/demux/mp4demuxer.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/utils/logger.js"),
                    s = i("./src/events.js"),
                    o = Math.pow(2, 32) - 1,
                    n = function() {
                        function e(e, t) {
                            this.observer = e, this.remuxer = t
                        }
                        return e.prototype.resetTimeStamp = function(e) {
                            this.initPTS = e
                        }, e.prototype.resetInitSegment = function(t, i, r, o) {
                            if (t && t.byteLength) {
                                var n = this.initData = e.parseInitSegment(t);
                                null == i && (i = "mp4a.40.5"), null == r && (r = "avc1.42e01e");
                                var a = {};
                                n.audio && n.video ? a.audiovideo = {
                                    container: "video/mp4",
                                    codec: i + "," + r,
                                    initSegment: o ? t : null
                                } : (n.audio && (a.audio = {
                                    container: "audio/mp4",
                                    codec: i,
                                    initSegment: o ? t : null
                                }), n.video && (a.video = {
                                    container: "video/mp4",
                                    codec: r,
                                    initSegment: o ? t : null
                                })), this.observer.trigger(s["default"].FRAG_PARSING_INIT_SEGMENT, {
                                    tracks: a
                                })
                            } else i && (this.audioCodec = i), r && (this.videoCodec = r)
                        }, e.probe = function(t) {
                            return e.findBox({
                                data: t,
                                start: 0,
                                end: Math.min(t.length, 16384)
                            }, ["moof"]).length > 0
                        }, e.bin2str = function(e) {
                            return String.fromCharCode.apply(null, e)
                        }, e.readUint16 = function(e, t) {
                            e.data && (t += e.start, e = e.data);
                            var i = e[t] << 8 | e[t + 1];
                            return i < 0 ? 65536 + i : i
                        }, e.readUint32 = function(e, t) {
                            e.data && (t += e.start, e = e.data);
                            var i = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
                            return i < 0 ? 4294967296 + i : i
                        }, e.writeUint32 = function(e, t, i) {
                            e.data && (t += e.start, e = e.data), e[t] = i >> 24, e[t + 1] = i >> 16 & 255, e[t + 2] = i >> 8 & 255, e[t + 3] = 255 & i
                        }, e.findBox = function(t, i) {
                            var r, s, o, n, a, l, d, u = [];
                            if (t.data ? (l = t.start, n = t.end, t = t.data) : (l = 0, n = t.byteLength), !i.length) return null;
                            for (r = l; r < n;) s = e.readUint32(t, r), o = e.bin2str(t.subarray(r + 4, r + 8)), d = s > 1 ? r + s : n, o === i[0] && (1 === i.length ? u.push({
                                data: t,
                                start: r + 8,
                                end: d
                            }) : (a = e.findBox({
                                data: t,
                                start: r + 8,
                                end: d
                            }, i.slice(1)), a.length && (u = u.concat(a)))), r = d;
                            return u
                        }, e.parseSegmentIndex = function(t) {
                            var i, r = e.findBox(t, ["moov"])[0],
                                s = r ? r.end : null,
                                o = 0,
                                n = e.findBox(t, ["sidx"]);
                            if (!n || !n[0]) return null;
                            i = [], n = n[0];
                            var a = n.data[0];
                            o = 0 === a ? 8 : 16;
                            var l = e.readUint32(n, o);
                            o += 4;
                            o += 0 === a ? 8 : 16, o += 2;
                            var d = n.end + 0,
                                u = e.readUint16(n, o);
                            o += 2;
                            for (var h = 0; h < u; h++) {
                                var c = o,
                                    f = e.readUint32(n, c);
                                c += 4;
                                var p = 2147483647 & f;
                                if (1 === (2147483648 & f) >>> 31) return void console.warn("SIDX has hierarchical references (not supported)");
                                var v = e.readUint32(n, c);
                                c += 4, i.push({
                                    referenceSize: p,
                                    subsegmentDuration: v,
                                    info: {
                                        duration: v / l,
                                        start: d,
                                        end: d + p - 1
                                    }
                                }), d += p, c += 4, o = c
                            }
                            return {
                                earliestPresentationTime: 0,
                                timescale: l,
                                version: a,
                                referencesCount: u,
                                references: i,
                                moovEndOffset: s
                            }
                        }, e.parseInitSegment = function(t) {
                            var i = [];
                            return e.findBox(t, ["moov", "trak"]).forEach(function(t) {
                                var s = e.findBox(t, ["tkhd"])[0];
                                if (s) {
                                    var o = s.data[s.start],
                                        n = 0 === o ? 12 : 20,
                                        a = e.readUint32(s, n),
                                        l = e.findBox(t, ["mdia", "mdhd"])[0];
                                    if (l) {
                                        o = l.data[l.start], n = 0 === o ? 12 : 20;
                                        var d = e.readUint32(l, n),
                                            u = e.findBox(t, ["mdia", "hdlr"])[0];
                                        if (u) {
                                            var h = e.bin2str(u.data.subarray(u.start + 8, u.start + 12)),
                                                c = {
                                                    soun: "audio",
                                                    vide: "video"
                                                } [h];
                                            if (c) {
                                                var f = e.findBox(t, ["mdia", "minf", "stbl", "stsd"]);
                                                if (f.length) {
                                                    f = f[0];
                                                    var p = e.bin2str(f.data.subarray(f.start + 12, f.start + 16));
                                                    r.logger.log("MP4Demuxer:" + c + ":" + p + " found")
                                                }
                                                i[a] = {
                                                    timescale: d,
                                                    type: c
                                                }, i[c] = {
                                                    timescale: d,
                                                    id: a
                                                }
                                            }
                                        }
                                    }
                                }
                            }), i
                        }, e.getStartDTS = function(t, i) {
                            var r, s, o;
                            return r = e.findBox(i, ["moof", "traf"]), s = [].concat.apply([], r.map(function(i) {
                                return e.findBox(i, ["tfhd"]).map(function(r) {
                                    var s, o;
                                    return s = e.readUint32(r, 4), o = t[s].timescale || 9e4, e.findBox(i, ["tfdt"]).map(function(t) {
                                        var i, r;
                                        return i = t.data[t.start], r = e.readUint32(t, 4), 1 === i && (r *= Math.pow(2, 32), r += e.readUint32(t, 8)), r
                                    })[0] / o
                                })
                            })), o = Math.min.apply(null, s), isFinite(o) ? o : 0
                        }, e.offsetStartDTS = function(t, i, r) {
                            e.findBox(i, ["moof", "traf"]).map(function(i) {
                                return e.findBox(i, ["tfhd"]).map(function(s) {
                                    var n = e.readUint32(s, 4),
                                        a = t[n].timescale || 9e4;
                                    e.findBox(i, ["tfdt"]).map(function(t) {
                                        var i = t.data[t.start],
                                            s = e.readUint32(t, 4);
                                        if (0 === i) e.writeUint32(t, 4, s - r * a);
                                        else {
                                            s *= Math.pow(2, 32), s += e.readUint32(t, 8), s -= r * a, s = Math.max(s, 0);
                                            var n = Math.floor(s / (o + 1)),
                                                l = Math.floor(s % (o + 1));
                                            e.writeUint32(t, 4, n), e.writeUint32(t, 8, l)
                                        }
                                    })
                                })
                            })
                        }, e.prototype.append = function(t, i, r, o) {
                            var n = this.initData;
                            n || (this.resetInitSegment(t, this.audioCodec, this.videoCodec, !1), n = this.initData);
                            var a, l = this.initPTS;
                            if (l === undefined) {
                                var d = e.getStartDTS(n, t);
                                this.initPTS = l = d - i, this.observer.trigger(s["default"].INIT_PTS_FOUND, {
                                    initPTS: l
                                })
                            }
                            e.offsetStartDTS(n, t, l), a = e.getStartDTS(n, t), this.remuxer.remux(n.audio, n.video, null, null, a, r, o, t)
                        }, e.prototype.destroy = function() {}, e
                    }();
                t["default"] = n
            },
            "./src/demux/mpegaudio.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = {
                    BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
                    SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
                    SamplesCoefficients: [
                        [0, 72, 144, 12],
                        [0, 0, 0, 0],
                        [0, 72, 144, 12],
                        [0, 144, 144, 12]
                    ],
                    BytesInSlot: [0, 1, 1, 4],
                    appendFrame: function(e, t, i, r, s) {
                        if (i + 24 > t.length) return undefined;
                        var o = this.parseHeader(t, i);
                        if (o && i + o.frameLength <= t.length) {
                            var n = 9e4 * o.samplesPerFrame / o.sampleRate,
                                a = r + s * n,
                                l = {
                                    unit: t.subarray(i, i + o.frameLength),
                                    pts: a,
                                    dts: a
                                };
                            return e.config = [], e.channelCount = o.channelCount, e.samplerate = o.sampleRate, e.samples.push(l), e.len += o.frameLength, {
                                sample: l,
                                length: o.frameLength
                            }
                        }
                        return undefined
                    },
                    parseHeader: function(e, t) {
                        var i = e[t + 1] >> 3 & 3,
                            s = e[t + 1] >> 1 & 3,
                            o = e[t + 2] >> 4 & 15,
                            n = e[t + 2] >> 2 & 3,
                            a = e[t + 2] >> 1 & 1;
                        if (1 !== i && 0 !== o && 15 !== o && 3 !== n) {
                            var l = 3 === i ? 3 - s : 3 === s ? 3 : 4,
                                d = 1e3 * r.BitratesMap[14 * l + o - 1],
                                u = 3 === i ? 0 : 2 === i ? 1 : 2,
                                h = r.SamplingRateMap[3 * u + n],
                                c = e[t + 3] >> 6 == 3 ? 1 : 2,
                                f = r.SamplesCoefficients[i][s],
                                p = r.BytesInSlot[s],
                                v = 8 * f * p;
                            return {
                                sampleRate: h,
                                channelCount: c,
                                frameLength: parseInt(f * d / h + a, 10) * p,
                                samplesPerFrame: v
                            }
                        }
                        return undefined
                    },
                    isHeaderPattern: function(e, t) {
                        return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1])
                    },
                    isHeader: function(e, t) {
                        return !!(t + 1 < e.length && this.isHeaderPattern(e, t))
                    },
                    probe: function(e, t) {
                        if (t + 1 < e.length && this.isHeaderPattern(e, t)) {
                            var i = this.parseHeader(e, t),
                                r = 4;
                            i && i.frameLength && (r = i.frameLength);
                            var s = t + r;
                            if (s === e.length || s + 1 < e.length && this.isHeaderPattern(e, s)) return !0
                        }
                        return !1
                    }
                };
                t["default"] = r
            },
            "./src/demux/sample-aes.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/crypt/decrypter.js"),
                    s = function() {
                        function e(e, t, i, s) {
                            this.decryptdata = i, this.discardEPB = s, this.decrypter = new r["default"](e, t, {
                                removePKCS7Padding: !1
                            })
                        }
                        return e.prototype.decryptBuffer = function(e, t) {
                            this.decrypter.decrypt(e, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, t)
                        }, e.prototype.decryptAacSample = function(e, t, i, r) {
                            var s = e[t].unit,
                                o = s.subarray(16, s.length - s.length % 16),
                                n = o.buffer.slice(o.byteOffset, o.byteOffset + o.length),
                                a = this;
                            this.decryptBuffer(n, function(o) {
                                o = new Uint8Array(o), s.set(o, 16), r || a.decryptAacSamples(e, t + 1, i)
                            })
                        }, e.prototype.decryptAacSamples = function(e, t, i) {
                            for (;; t++) {
                                if (t >= e.length) return void i();
                                if (!(e[t].unit.length < 32)) {
                                    var r = this.decrypter.isSync();
                                    if (this.decryptAacSample(e, t, i, r), !r) return
                                }
                            }
                        }, e.prototype.getAvcEncryptedData = function(e) {
                            for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, i = new Int8Array(t), r = 0, s = 32; s <= e.length - 16; s += 160, r += 16) i.set(e.subarray(s, s + 16), r);
                            return i
                        }, e.prototype.getAvcDecryptedUnit = function(e, t) {
                            t = new Uint8Array(t);
                            for (var i = 0, r = 32; r <= e.length - 16; r += 160, i += 16) e.set(t.subarray(i, i + 16), r);
                            return e
                        }, e.prototype.decryptAvcSample = function(e, t, i, r, s, o) {
                            var n = this.discardEPB(s.data),
                                a = this.getAvcEncryptedData(n),
                                l = this;
                            this.decryptBuffer(a.buffer, function(a) {
                                s.data = l.getAvcDecryptedUnit(n, a), o || l.decryptAvcSamples(e, t, i + 1, r)
                            })
                        }, e.prototype.decryptAvcSamples = function(e, t, i, r) {
                            for (;; t++, i = 0) {
                                if (t >= e.length) return void r();
                                for (var s = e[t].units; !(i >= s.length); i++) {
                                    var o = s[i];
                                    if (!(o.length <= 48 || 1 !== o.type && 5 !== o.type)) {
                                        var n = this.decrypter.isSync();
                                        if (this.decryptAvcSample(e, t, i, r, o, n), !n) return
                                    }
                                }
                            }
                        }, e
                    }();
                t["default"] = s
            },
            "./src/demux/tsdemuxer.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/demux/adts.js"),
                    s = i("./src/demux/mpegaudio.js"),
                    o = i("./src/events.js"),
                    n = i("./src/demux/exp-golomb.js"),
                    a = i("./src/demux/sample-aes.js"),
                    l = i("./src/utils/logger.js"),
                    d = i("./src/errors.js"),
                    u = {
                        video: 1,
                        audio: 2,
                        id3: 3,
                        text: 4
                    },
                    h = function() {
                        function e(e, t, i, r) {
                            this.observer = e, this.config = i, this.typeSupported = r, this.remuxer = t, this.sampleAes = null
                        }
                        return e.prototype.setDecryptData = function(e) {
                            null != e && null != e.key && "SAMPLE-AES" === e.method ? this.sampleAes = new a["default"](this.observer, this.config, e, this.discardEPB) : this.sampleAes = null
                        }, e.probe = function(t) {
                            var i = e._syncOffset(t);
                            return !(i < 0) && (i && l.logger.warn("MPEG2-TS detected but first sync word found @ offset " + i + ", junk ahead ?"), !0)
                        }, e._syncOffset = function(e) {
                            for (var t = Math.min(1e3, e.length - 564), i = 0; i < t;) {
                                if (71 === e[i] && 71 === e[i + 188] && 71 === e[i + 376]) return i;
                                i++
                            }
                            return -1
                        }, e.createTrack = function(e, t) {
                            return {
                                container: "video" === e || "audio" === e ? "video/mp2t" : undefined,
                                type: e,
                                id: u[e],
                                pid: -1,
                                inputTimeScale: 9e4,
                                sequenceNumber: 0,
                                samples: [],
                                len: 0,
                                dropped: "video" === e ? 0 : undefined,
                                isAAC: "audio" === e || undefined,
                                duration: "audio" === e ? t : undefined
                            }
                        }, e.prototype.resetInitSegment = function(t, i, r, s) {
                            this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = e.createTrack("video", s), this._audioTrack = e.createTrack("audio", s), this._id3Track = e.createTrack("id3", s), this._txtTrack = e.createTrack("text", s), this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = i, this.videoCodec = r, this._duration = s
                        }, e.prototype.resetTimeStamp = function() {}, e.prototype.append = function(t, i, r, s) {
                            var n, a, u, h, c, f = t.length,
                                p = !1;
                            this.contiguous = r;
                            var v = this.pmtParsed,
                                g = this._avcTrack,
                                m = this._audioTrack,
                                y = this._id3Track,
                                _ = g.pid,
                                b = m.pid,
                                E = y.pid,
                                S = this._pmtId,
                                w = g.pesData,
                                k = m.pesData,
                                T = y.pesData,
                                L = this._parsePAT,
                                P = this._parsePMT,
                                A = this._parsePES,
                                C = this._parseAVCPES.bind(this),
                                x = this._parseAACPES.bind(this),
                                R = this._parseMPEGPES.bind(this),
                                D = this._parseID3PES.bind(this),
                                I = e._syncOffset(t);
                            for (f -= (f + I) % 188, n = I; n < f; n += 188)
                                if (71 === t[n]) {
                                    if (a = !!(64 & t[n + 1]), u = ((31 & t[n + 1]) << 8) + t[n + 2], (48 & t[n + 3]) >> 4 > 1) {
                                        if ((h = n + 5 + t[n + 4]) === n + 188) continue
                                    } else h = n + 4;
                                    switch (u) {
                                        case _:
                                            a && (w && (c = A(w)) && c.pts !== undefined && C(c, !1), w = {
                                                data: [],
                                                size: 0
                                            }), w && (w.data.push(t.subarray(h, n + 188)), w.size += n + 188 - h);
                                            break;
                                        case b:
                                            a && (k && (c = A(k)) && c.pts !== undefined && (m.isAAC ? x(c) : R(c)), k = {
                                                data: [],
                                                size: 0
                                            }), k && (k.data.push(t.subarray(h, n + 188)), k.size += n + 188 - h);
                                            break;
                                        case E:
                                            a && (T && (c = A(T)) && c.pts !== undefined && D(c), T = {
                                                data: [],
                                                size: 0
                                            }), T && (T.data.push(t.subarray(h, n + 188)),
                                                T.size += n + 188 - h);
                                            break;
                                        case 0:
                                            a && (h += t[h] + 1), S = this._pmtId = L(t, h);
                                            break;
                                        case S:
                                            a && (h += t[h] + 1);
                                            var O = P(t, h, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
                                            _ = O.avc, _ > 0 && (g.pid = _), b = O.audio, b > 0 && (m.pid = b, m.isAAC = O.isAAC), E = O.id3, E > 0 && (y.pid = E), p && !v && (l.logger.log("reparse from beginning"), p = !1, n = I - 188), v = this.pmtParsed = !0;
                                            break;
                                        case 17:
                                        case 8191:
                                            break;
                                        default:
                                            p = !0
                                    }
                                } else this.observer.trigger(o["default"].ERROR, {
                                    type: d.ErrorTypes.MEDIA_ERROR,
                                    details: d.ErrorDetails.FRAG_PARSING_ERROR,
                                    fatal: !1,
                                    reason: "TS packet did not start with 0x47"
                                });
                            w && (c = A(w)) && c.pts !== undefined ? (C(c, !0), g.pesData = null) : g.pesData = w, k && (c = A(k)) && c.pts !== undefined ? (m.isAAC ? x(c) : R(c), m.pesData = null) : (k && k.size && l.logger.log("last AAC PES packet truncated,might overlap between fragments"), m.pesData = k), T && (c = A(T)) && c.pts !== undefined ? (D(c), y.pesData = null) : y.pesData = T, null == this.sampleAes ? this.remuxer.remux(m, g, y, this._txtTrack, i, r, s) : this.decryptAndRemux(m, g, y, this._txtTrack, i, r, s)
                        }, e.prototype.decryptAndRemux = function(e, t, i, r, s, o, n) {
                            if (e.samples && e.isAAC) {
                                var a = this;
                                this.sampleAes.decryptAacSamples(e.samples, 0, function() {
                                    a.decryptAndRemuxAvc(e, t, i, r, s, o, n)
                                })
                            } else this.decryptAndRemuxAvc(e, t, i, r, s, o, n)
                        }, e.prototype.decryptAndRemuxAvc = function(e, t, i, r, s, o, n) {
                            if (t.samples) {
                                var a = this;
                                this.sampleAes.decryptAvcSamples(t.samples, 0, 0, function() {
                                    a.remuxer.remux(e, t, i, r, s, o, n)
                                })
                            } else this.remuxer.remux(e, t, i, r, s, o, n)
                        }, e.prototype.destroy = function() {
                            this._initPTS = this._initDTS = undefined, this._duration = 0
                        }, e.prototype._parsePAT = function(e, t) {
                            return (31 & e[t + 10]) << 8 | e[t + 11]
                        }, e.prototype._parsePMT = function(e, t, i, r) {
                            var s, o, n, a, d = {
                                audio: -1,
                                avc: -1,
                                id3: -1,
                                isAAC: !0
                            };
                            for (s = (15 & e[t + 1]) << 8 | e[t + 2], o = t + 3 + s - 4, n = (15 & e[t + 10]) << 8 | e[t + 11], t += 12 + n; t < o;) {
                                switch (a = (31 & e[t + 1]) << 8 | e[t + 2], e[t]) {
                                    case 207:
                                        if (!r) {
                                            l.logger.log("unkown stream type:" + e[t]);
                                            break
                                        }
                                    case 15:
                                        -1 === d.audio && (d.audio = a);
                                        break;
                                    case 21:
                                        -1 === d.id3 && (d.id3 = a);
                                        break;
                                    case 219:
                                        if (!r) {
                                            l.logger.log("unkown stream type:" + e[t]);
                                            break
                                        }
                                    case 27:
                                        -1 === d.avc && (d.avc = a);
                                        break;
                                    case 3:
                                    case 4:
                                        i ? -1 === d.audio && (d.audio = a, d.isAAC = !1) : l.logger.log("MPEG audio found, not supported in this browser for now");
                                        break;
                                    case 36:
                                        l.logger.warn("HEVC stream type found, not supported for now");
                                        break;
                                    default:
                                        l.logger.log("unkown stream type:" + e[t])
                                }
                                t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4])
                            }
                            return d
                        }, e.prototype._parsePES = function(e) {
                            var t, i, r, s, o, n, a, d, u = 0,
                                h = e.data;
                            if (!e || 0 === e.size) return null;
                            for (; h[0].length < 19 && h.length > 1;) {
                                var c = new Uint8Array(h[0].length + h[1].length);
                                c.set(h[0]), c.set(h[1], h[0].length), h[0] = c, h.splice(1, 1)
                            }
                            if (t = h[0], 1 === (t[0] << 16) + (t[1] << 8) + t[2]) {
                                if ((r = (t[4] << 8) + t[5]) && r > e.size - 6) return null;
                                i = t[7], 192 & i && (n = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2, n > 4294967295 && (n -= 8589934592), 64 & i ? (a = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2, a > 4294967295 && (a -= 8589934592), n - a > 54e5 && (l.logger.warn(Math.round((n - a) / 9e4) + "s delta between PTS and DTS, align them"), n = a)) : a = n), s = t[8], d = s + 9, e.size -= d, o = new Uint8Array(e.size);
                                for (var f = 0, p = h.length; f < p; f++) {
                                    t = h[f];
                                    var v = t.byteLength;
                                    if (d) {
                                        if (d > v) {
                                            d -= v;
                                            continue
                                        }
                                        t = t.subarray(d), v -= d, d = 0
                                    }
                                    o.set(t, u), u += v
                                }
                                return r && (r -= s + 3), {
                                    data: o,
                                    pts: n,
                                    dts: a,
                                    len: r
                                }
                            }
                            return null
                        }, e.prototype.pushAccesUnit = function(e, t) {
                            if (e.units.length && e.frame) {
                                var i = t.samples,
                                    r = i.length;
                                !this.config.forceKeyFrameOnDiscontinuity || !0 === e.key || t.sps && (r || this.contiguous) ? (e.id = r, i.push(e)) : t.dropped++
                            }
                            e.debug.length && l.logger.log(e.pts + "/" + e.dts + ":" + e.debug)
                        }, e.prototype._parseAVCPES = function(e, t) {
                            var i, r, s, o = this,
                                a = this._avcTrack,
                                l = this._parseAVCNALu(e.data),
                                d = this.avcSample,
                                u = !1,
                                h = this.pushAccesUnit.bind(this),
                                c = function(e, t, i, r) {
                                    return {
                                        key: e,
                                        pts: t,
                                        dts: i,
                                        units: [],
                                        debug: r
                                    }
                                };
                            e.data = null, d && l.length && !a.audFound && (h(d, a), d = this.avcSample = c(!1, e.pts, e.dts, "")), l.forEach(function(t) {
                                switch (t.type) {
                                    case 1:
                                        r = !0, d || (d = o.avcSample = c(!0, e.pts, e.dts, "")), d.frame = !0;
                                        var l = t.data;
                                        if (u && l.length > 4) {
                                            var f = new n["default"](l).readSliceType();
                                            2 !== f && 4 !== f && 7 !== f && 9 !== f || (d.key = !0)
                                        }
                                        break;
                                    case 5:
                                        r = !0, d || (d = o.avcSample = c(!0, e.pts, e.dts, "")), d.key = !0, d.frame = !0;
                                        break;
                                    case 6:
                                        r = !0, i = new n["default"](o.discardEPB(t.data)), i.readUByte();
                                        for (var p = 0, v = 0, g = !1, m = 0; !g && i.bytesAvailable > 1;) {
                                            p = 0;
                                            do {
                                                m = i.readUByte(), p += m
                                            } while (255 === m);
                                            v = 0;
                                            do {
                                                m = i.readUByte(), v += m
                                            } while (255 === m);
                                            if (4 === p && 0 !== i.bytesAvailable) {
                                                g = !0;
                                                if (181 === i.readUByte()) {
                                                    if (49 === i.readUShort()) {
                                                        if (1195456820 === i.readUInt()) {
                                                            if (3 === i.readUByte()) {
                                                                var y = i.readUByte(),
                                                                    _ = i.readUByte(),
                                                                    b = 31 & y,
                                                                    E = [y, _];
                                                                for (s = 0; s < b; s++) E.push(i.readUByte()), E.push(i.readUByte()), E.push(i.readUByte());
                                                                o._insertSampleInOrder(o._txtTrack.samples, {
                                                                    type: 3,
                                                                    pts: e.pts,
                                                                    bytes: E
                                                                })
                                                            }
                                                        }
                                                    }
                                                }
                                            } else if (v < i.bytesAvailable)
                                                for (s = 0; s < v; s++) i.readUByte()
                                        }
                                        break;
                                    case 7:
                                        if (r = !0, u = !0, !a.sps) {
                                            i = new n["default"](t.data);
                                            var S = i.readSPS();
                                            a.width = S.width, a.height = S.height, a.pixelRatio = S.pixelRatio, a.sps = [t.data], a.duration = o._duration;
                                            var w = t.data.subarray(1, 4),
                                                k = "avc1.";
                                            for (s = 0; s < 3; s++) {
                                                var T = w[s].toString(16);
                                                T.length < 2 && (T = "0" + T), k += T
                                            }
                                            a.codec = k
                                        }
                                        break;
                                    case 8:
                                        r = !0, a.pps || (a.pps = [t.data]);
                                        break;
                                    case 9:
                                        r = !1, a.audFound = !0, d && h(d, a), d = o.avcSample = c(!1, e.pts, e.dts, "");
                                        break;
                                    case 12:
                                        r = !1;
                                        break;
                                    default:
                                        r = !1, d && (d.debug += "unknown NAL " + t.type + " ")
                                }
                                if (d && r) {
                                    d.units.push(t)
                                }
                            }), t && d && (h(d, a), this.avcSample = null)
                        }, e.prototype._insertSampleInOrder = function(e, t) {
                            var i = e.length;
                            if (i > 0) {
                                if (t.pts >= e[i - 1].pts) e.push(t);
                                else
                                    for (var r = i - 1; r >= 0; r--)
                                        if (t.pts < e[r].pts) {
                                            e.splice(r, 0, t);
                                            break
                                        }
                            } else e.push(t)
                        }, e.prototype._getLastNalUnit = function() {
                            var e, t = this.avcSample;
                            if (!t || 0 === t.units.length) {
                                var i = this._avcTrack,
                                    r = i.samples;
                                t = r[r.length - 1]
                            }
                            if (t) {
                                var s = t.units;
                                e = s[s.length - 1]
                            }
                            return e
                        }, e.prototype._parseAVCNALu = function(e) {
                            var t, i, r, s, o, n = 0,
                                a = e.byteLength,
                                l = this._avcTrack,
                                d = l.naluState || 0,
                                u = d,
                                h = [],
                                c = -1;
                            for (-1 === d && (c = 0, o = 31 & e[0], d = 0, n = 1); n < a;)
                                if (t = e[n++], d)
                                    if (1 !== d)
                                        if (t)
                                            if (1 === t) {
                                                if (c >= 0) r = {
                                                    data: e.subarray(c, n - d - 1),
                                                    type: o
                                                }, h.push(r);
                                                else {
                                                    var f = this._getLastNalUnit();
                                                    if (f && (u && n <= 4 - u && f.state && (f.data = f.data.subarray(0, f.data.byteLength - u)), (i = n - d - 1) > 0)) {
                                                        var p = new Uint8Array(f.data.byteLength + i);
                                                        p.set(f.data, 0), p.set(e.subarray(0, i), f.data.byteLength), f.data = p
                                                    }
                                                }
                                                n < a ? (s = 31 & e[n], c = n, o = s, d = 0) : d = -1
                                            } else d = 0;
                            else d = 3;
                            else d = t ? 0 : 2;
                            else d = t ? 0 : 1;
                            if (c >= 0 && d >= 0 && (r = {
                                    data: e.subarray(c, a),
                                    type: o,
                                    state: d
                                }, h.push(r)), 0 === h.length) {
                                var f = this._getLastNalUnit();
                                if (f) {
                                    var p = new Uint8Array(f.data.byteLength + e.byteLength);
                                    p.set(f.data, 0), p.set(e, f.data.byteLength), f.data = p
                                }
                            }
                            return l.naluState = d, h
                        }, e.prototype.discardEPB = function(e) {
                            for (var t, i, r = e.byteLength, s = [], o = 1; o < r - 2;) 0 === e[o] && 0 === e[o + 1] && 3 === e[o + 2] ? (s.push(o + 2), o += 2) : o++;
                            if (0 === s.length) return e;
                            t = r - s.length, i = new Uint8Array(t);
                            var n = 0;
                            for (o = 0; o < t; n++, o++) n === s[0] && (n++, s.shift()), i[o] = e[n];
                            return i
                        }, e.prototype._parseAACPES = function(e) {
                            var t, i, s, n, a, u = this._audioTrack,
                                h = e.data,
                                c = e.pts,
                                f = this.aacOverFlow,
                                p = this.aacLastPTS;
                            if (f) {
                                var v = new Uint8Array(f.byteLength + h.byteLength);
                                v.set(f, 0), v.set(h, f.byteLength), h = v
                            }
                            for (s = 0, a = h.length; s < a - 1 && !r.isHeader(h, s); s++);
                            if (s) {
                                var g = void 0,
                                    m = void 0;
                                if (s < a - 1 ? (g = "AAC PES did not start with ADTS header,offset:" + s, m = !1) : (g = "no ADTS header found in AAC PES", m = !0), l.logger.warn("parsing error:" + g), this.observer.trigger(o["default"].ERROR, {
                                        type: d.ErrorTypes.MEDIA_ERROR,
                                        details: d.ErrorDetails.FRAG_PARSING_ERROR,
                                        fatal: m,
                                        reason: g
                                    }), m) return
                            }
                            if (r.initTrackConfig(u, this.observer, h, s, this.audioCodec), i = 0, t = r.getFrameDuration(u.samplerate), f && p) {
                                var y = p + t;
                                Math.abs(y - c) > 1 && (l.logger.log("AAC: align PTS for overlapping frames by " + Math.round((y - c) / 90)), c = y)
                            }
                            for (; s < a;)
                                if (r.isHeader(h, s) && s + 5 < a) {
                                    var _ = r.appendFrame(u, h, s, c, i);
                                    if (!_) break;
                                    s += _.length, n = _.sample.pts, i++
                                } else s++;
                            f = s < a ? h.subarray(s, a) : null, this.aacOverFlow = f, this.aacLastPTS = n
                        }, e.prototype._parseMPEGPES = function(e) {
                            for (var t = e.data, i = t.length, r = 0, o = 0, n = e.pts; o < i;)
                                if (s["default"].isHeader(t, o)) {
                                    var a = s["default"].appendFrame(this._audioTrack, t, o, n, r);
                                    if (!a) break;
                                    o += a.length, r++
                                } else o++
                        }, e.prototype._parseID3PES = function(e) {
                            this._id3Track.samples.push(e)
                        }, e
                    }();
                t["default"] = h
            },
            "./src/errors.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ErrorTypes = {
                    NETWORK_ERROR: "networkError",
                    MEDIA_ERROR: "mediaError",
                    KEY_SYSTEM_ERROR: "keySystemError",
                    MUX_ERROR: "muxError",
                    OTHER_ERROR: "otherError"
                }, t.ErrorDetails = {
                    KEY_SYSTEM_NO_KEYS: "keySystemNoKeys",
                    KEY_SYSTEM_NO_ACCESS: "keySystemNoAccess",
                    KEY_SYSTEM_NO_SESSION: "keySystemNoSession",
                    KEY_SYSTEM_LICENSE_REQUEST_FAILED: "keySystemLicenseRequestFailed",
                    MANIFEST_LOAD_ERROR: "manifestLoadError",
                    MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut",
                    MANIFEST_PARSING_ERROR: "manifestParsingError",
                    MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError",
                    LEVEL_LOAD_ERROR: "levelLoadError",
                    LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut",
                    LEVEL_SWITCH_ERROR: "levelSwitchError",
                    AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError",
                    AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut",
                    FRAG_LOAD_ERROR: "fragLoadError",
                    FRAG_LOAD_TIMEOUT: "fragLoadTimeOut",
                    FRAG_DECRYPT_ERROR: "fragDecryptError",
                    FRAG_PARSING_ERROR: "fragParsingError",
                    REMUX_ALLOC_ERROR: "remuxAllocError",
                    KEY_LOAD_ERROR: "keyLoadError",
                    KEY_LOAD_TIMEOUT: "keyLoadTimeOut",
                    BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError",
                    BUFFER_APPEND_ERROR: "bufferAppendError",
                    BUFFER_APPENDING_ERROR: "bufferAppendingError",
                    BUFFER_STALLED_ERROR: "bufferStalledError",
                    BUFFER_FULL_ERROR: "bufferFullError",
                    BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole",
                    BUFFER_NUDGE_ON_STALL: "bufferNudgeOnStall",
                    INTERNAL_EXCEPTION: "internalException"
                }
            },
            "./src/event-handler.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/utils/logger.js"),
                    s = i("./src/errors.js"),
                    o = i("./src/events.js"),
                    n = new Set(["hlsEventGeneric", "hlsHandlerDestroying", "hlsHandlerDestroyed"]),
                    a = function() {
                        function e(e) {
                            for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                            this.hls = e, this.onEvent = this.onEvent.bind(this), this.handledEvents = t, this.useGenericHandler = !0, this.registerListeners()
                        }
                        return e.prototype.destroy = function() {
                            this.onHandlerDestroying(), this.unregisterListeners(), this.onHandlerDestroyed()
                        }, e.prototype.onHandlerDestroying = function() {}, e.prototype.onHandlerDestroyed = function() {}, e.prototype.isEventHandler = function() {
                            return "object" == typeof this.handledEvents && this.handledEvents.length && "function" == typeof this.onEvent
                        }, e.prototype.registerListeners = function() {
                            this.isEventHandler() && this.handledEvents.forEach(function(e) {
                                if (n.has(e)) throw new Error("Forbidden event-name: " + e);
                                this.hls.on(e, this.onEvent)
                            }, this)
                        }, e.prototype.unregisterListeners = function() {
                            this.isEventHandler() && this.handledEvents.forEach(function(e) {
                                this.hls.off(e, this.onEvent)
                            }, this)
                        }, e.prototype.onEvent = function(e, t) {
                            this.onEventGeneric(e, t)
                        }, e.prototype.onEventGeneric = function(e, t) {
                            var i = function(e, t) {
                                var i = "on" + e.replace("hls", "");
                                if ("function" != typeof this[i]) throw new Error("Event " + e + " has no generic handler in this " + this.constructor.name + " class (tried " + i + ")");
                                return this[i].bind(this, t)
                            };
                            try {
                                i.call(this, e, t).call()
                            } catch (n) {
                                r.logger.error("An internal error happened while handling event " + e + '. Error message: "' + n.message + '". Here is a stacktrace:', n), this.hls.trigger(o["default"].ERROR, {
                                    type: s.ErrorTypes.OTHER_ERROR,
                                    details: s.ErrorDetails.INTERNAL_EXCEPTION,
                                    fatal: !1,
                                    event: e,
                                    err: n
                                })
                            }
                        }, e
                    }();
                t["default"] = a
            },
            "./src/events.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = {
                    MEDIA_ATTACHING: "hlsMediaAttaching",
                    MEDIA_ATTACHED: "hlsMediaAttached",
                    MEDIA_DETACHING: "hlsMediaDetaching",
                    MEDIA_DETACHED: "hlsMediaDetached",
                    BUFFER_RESET: "hlsBufferReset",
                    BUFFER_CODECS: "hlsBufferCodecs",
                    BUFFER_CREATED: "hlsBufferCreated",
                    BUFFER_APPENDING: "hlsBufferAppending",
                    BUFFER_APPENDED: "hlsBufferAppended",
                    BUFFER_EOS: "hlsBufferEos",
                    BUFFER_FLUSHING: "hlsBufferFlushing",
                    BUFFER_FLUSHED: "hlsBufferFlushed",
                    MANIFEST_LOADING: "hlsManifestLoading",
                    MANIFEST_LOADED: "hlsManifestLoaded",
                    MANIFEST_PARSED: "hlsManifestParsed",
                    LEVEL_SWITCHING: "hlsLevelSwitching",
                    LEVEL_SWITCHED: "hlsLevelSwitched",
                    LEVEL_LOADING: "hlsLevelLoading",
                    LEVEL_LOADED: "hlsLevelLoaded",
                    LEVEL_UPDATED: "hlsLevelUpdated",
                    LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
                    AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
                    AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
                    AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
                    AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
                    AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
                    SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
                    SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
                    SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
                    SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
                    SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
                    INIT_PTS_FOUND: "hlsInitPtsFound",
                    FRAG_LOADING: "hlsFragLoading",
                    FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
                    FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
                    FRAG_LOADED: "hlsFragLoaded",
                    FRAG_DECRYPTED: "hlsFragDecrypted",
                    FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
                    FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
                    FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
                    FRAG_PARSING_DATA: "hlsFragParsingData",
                    FRAG_PARSED: "hlsFragParsed",
                    FRAG_BUFFERED: "hlsFragBuffered",
                    FRAG_CHANGED: "hlsFragChanged",
                    FPS_DROP: "hlsFpsDrop",
                    FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
                    ERROR: "hlsError",
                    DESTROYING: "hlsDestroying",
                    KEY_LOADING: "hlsKeyLoading",
                    KEY_LOADED: "hlsKeyLoaded",
                    STREAM_STATE_TRANSITION: "hlsStreamStateTransition"
                };
                t["default"] = r
            },
            "./src/hls.js": function(e, t, i) {
                "use strict";
                var r = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                    };
                    return function(t, i) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./node_modules/url-toolkit/src/url-toolkit.js"),
                    o = i("./src/errors.js"),
                    n = i("./src/loader/playlist-loader.js"),
                    a = i("./src/loader/fragment-loader.js"),
                    l = i("./src/loader/key-loader.js"),
                    d = i("./src/controller/fragment-tracker.js"),
                    u = i("./src/controller/stream-controller.js"),
                    h = i("./src/controller/level-controller.js"),
                    c = i("./src/controller/id3-track-controller.js"),
                    f = i("./src/is-supported.js"),
                    p = i("./src/utils/logger.js"),
                    v = i("./src/config.js"),
                    g = i("./src/events.js"),
                    m = i("./src/observer.js"),
                    y = function(e) {
                        function t(i) {
                            void 0 === i && (i = {});
                            var r = e.call(this) || this,
                                s = t.DefaultConfig;
                            if ((i.liveSyncDurationCount || i.liveMaxLatencyDurationCount) && (i.liveSyncDuration || i.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                            for (var o in s) o in i || (i[o] = s[o]);
                            if (i.liveMaxLatencyDurationCount !== undefined && i.liveMaxLatencyDurationCount <= i.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
                            if (i.liveMaxLatencyDuration !== undefined && (i.liveMaxLatencyDuration <= i.liveSyncDuration || i.liveSyncDuration === undefined)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
                            p.enableLogs(i.debug), r.config = i, r._autoLevelCapping = -1;
                            var f = r.abrController = new i.abrController(r),
                                v = new i.bufferController(r),
                                g = new i.capLevelController(r),
                                m = new i.fpsController(r),
                                y = new n["default"](r),
                                _ = new a["default"](r),
                                b = new l["default"](r),
                                E = new c["default"](r),
                                S = r.levelController = new h["default"](r),
                                w = new d.FragmentTracker(r),
                                k = r.streamController = new u["default"](r, w),
                                T = [S, k],
                                L = i.audioStreamController;
                            L && T.push(new L(r, w)), r.networkControllers = T;
                            var P = [y, _, b, f, v, g, m, E, w];
                            if (L = i.audioTrackController) {
                                var A = new L(r);
                                r.audioTrackController = A, P.push(A)
                            }
                            if (L = i.subtitleTrackController) {
                                var C = new L(r);
                                r.subtitleTrackController = C, P.push(C)
                            }
                            if (L = i.emeController) {
                                var x = new L(r);
                                r.emeController = x, P.push(x)
                            }
                            return [i.subtitleStreamController, i.timelineController].forEach(function(e) {
                                e && P.push(new e(r))
                            }), r.coreComponents = P, r
                        }
                        return r(t, e), Object.defineProperty(t, "version", {
                            get: function() {
                                return "0.11.1-feature-accurate-seek-stall-handling-SNAPSHOT-189552e"
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.isSupported = function() {
                            return f.isSupported()
                        }, Object.defineProperty(t, "Events", {
                            get: function() {
                                return g["default"]
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t, "ErrorTypes", {
                            get: function() {
                                return o.ErrorTypes
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t, "ErrorDetails", {
                            get: function() {
                                return o.ErrorDetails
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t, "DefaultConfig", {
                            get: function() {
                                return t.defaultConfig ? t.defaultConfig : v.hlsDefaultConfig
                            },
                            set: function(e) {
                                t.defaultConfig = e
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.prototype.destroy = function() {
                            p.logger.log("destroy"), this.trigger(g["default"].DESTROYING), this.detachMedia(), this.coreComponents.concat(this.networkControllers).forEach(function(e) {
                                e.destroy()
                            }), this.url = null, this.removeAllListeners(), this._autoLevelCapping = -1
                        }, t.prototype.attachMedia = function(e) {
                            p.logger.log("attachMedia"), this.media = e, this.trigger(g["default"].MEDIA_ATTACHING, {
                                media: e
                            })
                        }, t.prototype.detachMedia = function() {
                            p.logger.log("detachMedia"), this.trigger(g["default"].MEDIA_DETACHING), this.media = null
                        }, t.prototype.loadSource = function(e) {
                            e = s.buildAbsoluteURL(window.location.href, e, {
                                alwaysNormalize: !0
                            }), p.logger.log("loadSource:" + e), this.url = e, this.trigger(g["default"].MANIFEST_LOADING, {
                                url: e
                            })
                        }, t.prototype.startLoad = function(e) {
                            void 0 === e && (e = -1), p.logger.log("startLoad(" + e + ")"), this.networkControllers.forEach(function(t) {
                                t.startLoad(e)
                            })
                        }, t.prototype.stopLoad = function() {
                            p.logger.log("stopLoad"), this.networkControllers.forEach(function(e) {
                                e.stopLoad()
                            })
                        }, t.prototype.swapAudioCodec = function() {
                            p.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec()
                        }, t.prototype.recoverMediaError = function() {
                            p.logger.log("recoverMediaError");
                            var e = this.media;
                            this.detachMedia(), this.attachMedia(e)
                        }, Object.defineProperty(t.prototype, "levels", {
                            get: function() {
                                return this.levelController.levels
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "currentLevel", {
                            get: function() {
                                return this.streamController.currentLevel
                            },
                            set: function(e) {
                                p.logger.log("set currentLevel:" + e), this.loadLevel = e, this.streamController.immediateLevelSwitch()
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "nextLevel", {
                            get: function() {
                                return this.streamController.nextLevel
                            },
                            set: function(e) {
                                p.logger.log("set nextLevel:" + e), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch()
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "loadLevel", {
                            get: function() {
                                return this.levelController.level
                            },
                            set: function(e) {
                                p.logger.log("set loadLevel:" + e), this.levelController.manualLevel = e
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "nextLoadLevel", {
                            get: function() {
                                return this.levelController.nextLoadLevel
                            },
                            set: function(e) {
                                this.levelController.nextLoadLevel = e
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "firstLevel", {
                            get: function() {
                                return Math.max(this.levelController.firstLevel, this.minAutoLevel)
                            },
                            set: function(e) {
                                p.logger.log("set firstLevel:" + e), this.levelController.firstLevel = e
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "startLevel", {
                            get: function() {
                                return this.levelController.startLevel
                            },
                            set: function(e) {
                                p.logger.log("set startLevel:" + e);
                                var t = this; - 1 !== e && (e = Math.max(e, t.minAutoLevel)), t.levelController.startLevel = e
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "autoLevelCapping", {
                            get: function() {
                                return this._autoLevelCapping
                            },
                            set: function(e) {
                                p.logger.log("set autoLevelCapping:" + e), this._autoLevelCapping = e
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "autoLevelEnabled", {
                            get: function() {
                                return -1 === this.levelController.manualLevel
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "manualLevel", {
                            get: function() {
                                return this.levelController.manualLevel
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "minAutoLevel", {
                            get: function() {
                                for (var e = this, t = e.levels, i = e.config.minAutoBitrate, r = t ? t.length : 0, s = 0; s < r; s++) {
                                    if ((t[s].realBitrate ? Math.max(t[s].realBitrate, t[s].bitrate) : t[s].bitrate) > i) return s
                                }
                                return 0
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "maxAutoLevel", {
                            get: function() {
                                var e = this,
                                    t = e.levels,
                                    i = e.autoLevelCapping;
                                return -1 === i && t && t.length ? t.length - 1 : i
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "nextAutoLevel", {
                            get: function() {
                                var e = this;
                                return Math.min(Math.max(e.abrController.nextAutoLevel, e.minAutoLevel), e.maxAutoLevel)
                            },
                            set: function(e) {
                                var t = this;
                                t.abrController.nextAutoLevel = Math.max(t.minAutoLevel, e)
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "audioTracks", {
                            get: function() {
                                var e = this.audioTrackController;
                                return e ? e.audioTracks : []
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "audioTrack", {
                            get: function() {
                                var e = this.audioTrackController;
                                return e ? e.audioTrack : -1
                            },
                            set: function(e) {
                                var t = this.audioTrackController;
                                t && (t.audioTrack = e)
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "liveSyncPosition", {
                            get: function() {
                                return this.streamController.liveSyncPosition
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "subtitleTracks", {
                            get: function() {
                                var e = this.subtitleTrackController;
                                return e ? e.subtitleTracks : []
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "subtitleTrack", {
                            get: function() {
                                var e = this.subtitleTrackController;
                                return e ? e.subtitleTrack : -1
                            },
                            set: function(e) {
                                var t = this.subtitleTrackController;
                                t && (t.subtitleTrack = e)
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "subtitleDisplay", {
                            get: function() {
                                var e = this.subtitleTrackController;
                                return !!e && e.subtitleDisplay
                            },
                            set: function(e) {
                                var t = this.subtitleTrackController;
                                t && (t.subtitleDisplay = e)
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t
                    }(m.Observer);
                t["default"] = y
            },
            "./src/is-supported.js": function(e, t, i) {
                "use strict";

                function r() {
                    var e = s.getMediaSource(),
                        t = window.SourceBuffer || window.WebKitSourceBuffer,
                        i = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                        r = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
                    return !!i && !!r
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./src/utils/mediasource-helper.js");
                t.isSupported = r
            },
            "./src/loader/fragment-loader.js": function(e, t, i) {
                "use strict";
                (function(e) {
                    var r = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                        };
                        return function(t, i) {
                            function r() {
                                this.constructor = t
                            }
                            e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var s = i("./src/events.js"),
                        o = i("./src/event-handler.js"),
                        n = i("./src/errors.js"),
                        a = i("./src/utils/logger.js"),
                        l = function(t) {
                            function i(e) {
                                var i = t.call(this, e, s["default"].FRAG_LOADING) || this;
                                return i.loaders = {}, i
                            }
                            return r(i, t), i.prototype.destroy = function() {
                                var e = this.loaders;
                                for (var i in e) {
                                    var r = e[i];
                                    r && r.destroy()
                                }
                                this.loaders = {}, t.prototype.destroy.call(this)
                            }, i.prototype.onFragLoading = function(t) {
                                var i = t.frag,
                                    r = i.type,
                                    s = this.loaders,
                                    o = this.hls.config,
                                    n = o.fLoader,
                                    l = o.loader;
                                i.loaded = 0;
                                var d = s[r];
                                d && (a.logger.warn("abort previous fragment loader for type: " + r), d.abort()), d = s[r] = i.loader = o.fLoader ? new n(o) : new l(o);
                                var u, h, c;
                                u = {
                                    url: i.url,
                                    frag: i,
                                    responseType: "arraybuffer",
                                    progressData: !1
                                };
                                var f = i.byteRangeStartOffset,
                                    p = i.byteRangeEndOffset;
                                e.isFinite(f) && e.isFinite(p) && (u.rangeStart = f, u.rangeEnd = p), h = {
                                    timeout: o.fragLoadingTimeOut,
                                    maxRetry: 0,
                                    retryDelay: 0,
                                    maxRetryDelay: o.fragLoadingMaxRetryTimeout
                                }, c = {
                                    onSuccess: this.loadsuccess.bind(this),
                                    onError: this.loaderror.bind(this),
                                    onTimeout: this.loadtimeout.bind(this),
                                    onProgress: this.loadprogress.bind(this)
                                }, d.load(u, h, c)
                            }, i.prototype.loadsuccess = function(e, t, i, r) {
                                void 0 === r && (r = null);
                                var o = e.data,
                                    n = i.frag;
                                n.loader = undefined, this.loaders[n.type] = undefined, this.hls.trigger(s["default"].FRAG_LOADED, {
                                    payload: o,
                                    frag: n,
                                    stats: t,
                                    networkDetails: r
                                })
                            }, i.prototype.loaderror = function(e, t, i) {
                                void 0 === i && (i = null);
                                var r = t.frag,
                                    o = r.loader;
                                o && o.abort(), this.loaders[r.type] = undefined, this.hls.trigger(s["default"].ERROR, {
                                    type: n.ErrorTypes.NETWORK_ERROR,
                                    details: n.ErrorDetails.FRAG_LOAD_ERROR,
                                    fatal: !1,
                                    frag: t.frag,
                                    response: e,
                                    networkDetails: i
                                })
                            }, i.prototype.loadtimeout = function(e, t, i) {
                                void 0 === i && (i = null);
                                var r = t.frag,
                                    o = r.loader;
                                o && o.abort(), this.loaders[r.type] = undefined, this.hls.trigger(s["default"].ERROR, {
                                    type: n.ErrorTypes.NETWORK_ERROR,
                                    details: n.ErrorDetails.FRAG_LOAD_TIMEOUT,
                                    fatal: !1,
                                    frag: t.frag,
                                    networkDetails: i
                                })
                            }, i.prototype.loadprogress = function(e, t, i, r) {
                                void 0 === r && (r = null);
                                var o = t.frag;
                                o.loaded = e.loaded, this.hls.trigger(s["default"].FRAG_LOAD_PROGRESS, {
                                    frag: o,
                                    stats: e,
                                    networkDetails: r
                                })
                            }, i
                        }(o["default"]);
                    t["default"] = l
                }).call(this, i("./src/polyfills/number.js").Number)
            },
            "./src/loader/fragment.js": function(e, t, i) {
                "use strict";
                (function(e) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = i("./node_modules/url-toolkit/src/url-toolkit.js"),
                        s = i("./src/loader/level-key.js"),
                        o = function() {
                            function t() {
                                var e;
                                this._url = null, this._byteRange = null, this._decryptdata = null, this.tagList = [], this.programDateTime = null, this.rawProgramDateTime = null, this._elementaryStreams = (e = {}, e[t.ElementaryStreamTypes.AUDIO] = !1, e[t.ElementaryStreamTypes.VIDEO] = !1, e)
                            }
                            return Object.defineProperty(t, "ElementaryStreamTypes", {
                                get: function() {
                                    return {
                                        AUDIO: "audio",
                                        VIDEO: "video"
                                    }
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "url", {
                                get: function() {
                                    return !this._url && this.relurl && (this._url = r.buildAbsoluteURL(this.baseurl, this.relurl, {
                                        alwaysNormalize: !0
                                    })), this._url
                                },
                                set: function(e) {
                                    this._url = e
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "byteRange", {
                                get: function() {
                                    if (!this._byteRange && !this.rawByteRange) return [];
                                    if (this._byteRange) return this._byteRange;
                                    var e = [];
                                    if (this.rawByteRange) {
                                        var t = this.rawByteRange.split("@", 2);
                                        if (1 === t.length) {
                                            var i = this.lastByteRangeEndOffset;
                                            e[0] = i || 0
                                        } else e[0] = parseInt(t[1]);
                                        e[1] = parseInt(t[0]) + e[0], this._byteRange = e
                                    }
                                    return e
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "byteRangeStartOffset", {
                                get: function() {
                                    return this.byteRange[0]
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "byteRangeEndOffset", {
                                get: function() {
                                    return this.byteRange[1]
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "decryptdata", {
                                get: function() {
                                    return this._decryptdata || (this._decryptdata = this.fragmentDecryptdataFromLevelkey(this.levelkey, this.sn)), this._decryptdata
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "endProgramDateTime", {
                                get: function() {
                                    if (!e.isFinite(this.programDateTime)) return null;
                                    var t = e.isFinite(this.duration) ? this.duration : 0;
                                    return this.programDateTime + 1e3 * t
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "encrypted", {
                                get: function() {
                                    return !(!this.decryptdata || null === this.decryptdata.uri || null !== this.decryptdata.key)
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "end", {
                                get: function() {
                                    return this.start + this.duration
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.compareTimeInterval = function(e) {
                                return e < this.start ? e - this.start : e > this.end ? this.end + e : 0
                            }, t.prototype.addElementaryStream = function(e) {
                                this._elementaryStreams[e] = !0
                            }, t.prototype.hasElementaryStream = function(e) {
                                return !0 === this._elementaryStreams[e]
                            }, t.prototype.createInitializationVector = function(e) {
                                for (var t = new Uint8Array(16), i = 12; i < 16; i++) t[i] = e >> 8 * (15 - i) & 255;
                                return t
                            }, t.prototype.fragmentDecryptdataFromLevelkey = function(e, t) {
                                var i = e;
                                return e && e.method && e.uri && !e.iv && (i = new s["default"], i.method = e.method, i.baseuri = e.baseuri, i.reluri = e.reluri, i.iv = this.createInitializationVector(t)), i
                            }, t
                        }();
                    t["default"] = o
                }).call(this, i("./src/polyfills/number.js").Number)
            },
            "./src/loader/key-loader.js": function(e, t, i) {
                "use strict";
                var r = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                    };
                    return function(t, i) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./src/events.js"),
                    o = i("./src/event-handler.js"),
                    n = i("./src/errors.js"),
                    a = i("./src/utils/logger.js"),
                    l = function(e) {
                        function t(t) {
                            var i = e.call(this, t, s["default"].KEY_LOADING) || this;
                            return i.loaders = {}, i.decryptkey = null, i.decrypturl = null, i
                        }
                        return r(t, e), t.prototype.destroy = function() {
                            for (var e in this.loaders) {
                                var t = this.loaders[e];
                                t && t.destroy()
                            }
                            this.loaders = {}, o["default"].prototype.destroy.call(this)
                        }, t.prototype.onKeyLoading = function(e) {
                            var t = e.frag,
                                i = t.type,
                                r = this.loaders[i],
                                o = t.decryptdata,
                                n = o.uri;
                            if (n !== this.decrypturl || null === this.decryptkey) {
                                var l = this.hls.config;
                                r && (a.logger.warn("abort previous key loader for type:" + i), r.abort()), t.loader = this.loaders[i] = new l.loader(l), this.decrypturl = n, this.decryptkey = null;
                                var d = void 0,
                                    u = void 0,
                                    h = void 0;
                                d = {
                                    url: n,
                                    frag: t,
                                    responseType: "arraybuffer"
                                }, u = {
                                    timeout: l.fragLoadingTimeOut,
                                    maxRetry: 0,
                                    retryDelay: l.fragLoadingRetryDelay,
                                    maxRetryDelay: l.fragLoadingMaxRetryTimeout
                                }, h = {
                                    onSuccess: this.loadsuccess.bind(this),
                                    onError: this.loaderror.bind(this),
                                    onTimeout: this.loadtimeout.bind(this)
                                }, t.loader.load(d, u, h)
                            } else this.decryptkey && (o.key = this.decryptkey, this.hls.trigger(s["default"].KEY_LOADED, {
                                frag: t
                            }))
                        }, t.prototype.loadsuccess = function(e, t, i) {
                            var r = i.frag;
                            this.decryptkey = r.decryptdata.key = new Uint8Array(e.data), r.loader = undefined, this.loaders[r.type] = undefined, this.hls.trigger(s["default"].KEY_LOADED, {
                                frag: r
                            })
                        }, t.prototype.loaderror = function(e, t) {
                            var i = t.frag,
                                r = i.loader;
                            r && r.abort(), this.loaders[t.type] = undefined, this.hls.trigger(s["default"].ERROR, {
                                type: n.ErrorTypes.NETWORK_ERROR,
                                details: n.ErrorDetails.KEY_LOAD_ERROR,
                                fatal: !1,
                                frag: i,
                                response: e
                            })
                        }, t.prototype.loadtimeout = function(e, t) {
                            var i = t.frag,
                                r = i.loader;
                            r && r.abort(), this.loaders[t.type] = undefined, this.hls.trigger(s["default"].ERROR, {
                                type: n.ErrorTypes.NETWORK_ERROR,
                                details: n.ErrorDetails.KEY_LOAD_TIMEOUT,
                                fatal: !1,
                                frag: i
                            })
                        }, t
                    }(o["default"]);
                t["default"] = l
            },
            "./src/loader/level-key.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./node_modules/url-toolkit/src/url-toolkit.js"),
                    s = function() {
                        function e() {
                            this.method = null, this.key = null, this.iv = null, this._uri = null
                        }
                        return Object.defineProperty(e.prototype, "uri", {
                            get: function() {
                                return !this._uri && this.reluri && (this._uri = r.buildAbsoluteURL(this.baseuri, this.reluri, {
                                    alwaysNormalize: !0
                                })), this._uri
                            },
                            enumerable: !0,
                            configurable: !0
                        }), e
                    }();
                t["default"] = s
            },
            "./src/loader/level.js": function(e, t, i) {
                "use strict";
                (function(e) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = function() {
                        function t(e) {
                            this.endCC = 0, this.endSN = 0, this.fragments = [], this.initSegment = null, this.live = !0, this.needSidxRanges = !1, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = e, this.version = null
                        }
                        return Object.defineProperty(t.prototype, "hasProgramDateTime", {
                            get: function() {
                                return !(!this.fragments[0] || !e.isFinite(this.fragments[0].programDateTime))
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t
                    }();
                    t["default"] = i
                }).call(this, i("./src/polyfills/number.js").Number)
            },
            "./src/loader/m3u8-parser.js": function(e, t, i) {
                "use strict";
                (function(e) {
                    function r(e, t) {
                        for (var i = e[t], r = t - 1; r >= 0; r--) {
                            var s = e[r];
                            s.programDateTime = i.programDateTime - 1e3 * s.duration, i = s
                        }
                    }

                    function s(t, i) {
                        t.rawProgramDateTime ? t.programDateTime = Date.parse(t.rawProgramDateTime) : i && i.programDateTime && (t.programDateTime = i.endProgramDateTime), e.isFinite(t.programDateTime) || (t.programDateTime = null, t.rawProgramDateTime = null)
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = i("./node_modules/url-toolkit/src/url-toolkit.js"),
                        n = i("./src/loader/fragment.js"),
                        a = i("./src/loader/level.js"),
                        l = i("./src/loader/level-key.js"),
                        d = i("./src/utils/attr-list.js"),
                        u = i("./src/utils/logger.js"),
                        h = i("./src/utils/codecs.js"),
                        c = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,
                        f = /#EXT-X-MEDIA:(.*)/g,
                        p = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)(\S+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
                        v = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
                        g = /\.(mp4|m4s|m4v|m4a)$/i,
                        m = function() {
                            function t() {}
                            return t.findGroup = function(e, t) {
                                if (!e) return null;
                                for (var i = null, r = 0; r < e.length; r++) {
                                    var s = e[r];
                                    s.id === t && (i = s)
                                }
                                return i
                            }, t.convertAVC1ToAVCOTI = function(e) {
                                var t, i = e.split(".");
                                return i.length > 2 ? (t = i.shift() + ".", t += parseInt(i.shift()).toString(16), t += ("000" + parseInt(i.shift()).toString(16)).substr(-4)) : t = e, t
                            }, t.resolve = function(e, t) {
                                return o.buildAbsoluteURL(t, e, {
                                    alwaysNormalize: !0
                                })
                            }, t.parseMasterPlaylist = function(e, i) {
                                var r, s = [];
                                for (c.lastIndex = 0; null != (r = c.exec(e));) {
                                    var o = {},
                                        n = o.attrs = new d["default"](r[1]);
                                    o.url = t.resolve(r[2], i);
                                    var a = n.decimalResolution("RESOLUTION");
                                    a && (o.width = a.width, o.height = a.height), o.bitrate = n.decimalInteger("AVERAGE-BANDWIDTH") || n.decimalInteger("BANDWIDTH"), o.name = n.NAME,
                                        function(e, t) {
                                            ["video", "audio"].forEach(function(i) {
                                                var r = e.filter(function(e) {
                                                    return h.isCodecType(e, i)
                                                });
                                                if (r.length) {
                                                    var s = r.filter(function(e) {
                                                        return 0 === e.lastIndexOf("avc1", 0) || 0 === e.lastIndexOf("mp4a", 0)
                                                    });
                                                    t[i + "Codec"] = s.length > 0 ? s[0] : r[0], e = e.filter(function(e) {
                                                        return -1 === r.indexOf(e)
                                                    })
                                                }
                                            }), t.unknownCodecs = e
                                        }([].concat((n.CODECS || "").split(/[ ,]+/)), o), o.videoCodec && -1 !== o.videoCodec.indexOf("avc1") && (o.videoCodec = t.convertAVC1ToAVCOTI(o.videoCodec)), s.push(o)
                                }
                                return s
                            }, t.parseMasterPlaylistMedia = function(e, i, r, s) {
                                void 0 === s && (s = []);
                                var o, n = [],
                                    a = 0;
                                for (f.lastIndex = 0; null !== (o = f.exec(e));) {
                                    var l = {},
                                        u = new d["default"](o[1]);
                                    if (u.TYPE === r) {
                                        if (l.groupId = u["GROUP-ID"], l.name = u.NAME, l.type = r, l["default"] = "YES" === u.DEFAULT, l.autoselect = "YES" === u.AUTOSELECT, l.forced = "YES" === u.FORCED, u.URI && (l.url = t.resolve(u.URI, i)), l.lang = u.LANGUAGE, l.name || (l.name = l.lang), s.length) {
                                            var h = t.findGroup(s, l.groupId);
                                            l.audioCodec = h ? h.codec : s[0].codec
                                        }
                                        l.id = a++, n.push(l)
                                    }
                                }
                                return n
                            }, t.parseLevelPlaylist = function(t, i, o, h, c) {
                                var f, m, y = 0,
                                    _ = 0,
                                    b = new a["default"](i),
                                    E = new l["default"],
                                    S = 0,
                                    w = null,
                                    k = new n["default"],
                                    T = null;
                                for (p.lastIndex = 0; null !== (f = p.exec(t));) {
                                    var L = f[1];
                                    if (L) {
                                        k.duration = parseFloat(L);
                                        var P = (" " + f[2]).slice(1);
                                        k.title = P || null, k.tagList.push(P ? ["INF", L, P] : ["INF", L])
                                    } else if (f[3]) {
                                        if (e.isFinite(k.duration)) {
                                            var A = y++;
                                            k.type = h, k.start = _, k.levelkey = E, k.sn = A, k.level = o, k.cc = S, k.urlId = c, k.baseurl = i, k.relurl = (" " + f[3]).slice(1), s(k, w), b.fragments.push(k), w = k, _ += k.duration, k = new n["default"]
                                        }
                                    } else if (f[4]) {
                                        if (k.rawByteRange = (" " + f[4]).slice(1), w) {
                                            var C = w.byteRangeEndOffset;
                                            C && (k.lastByteRangeEndOffset = C)
                                        }
                                    } else if (f[5]) k.rawProgramDateTime = (" " + f[5]).slice(1), k.tagList.push(["PROGRAM-DATE-TIME", k.rawProgramDateTime]), null === T && (T = b.fragments.length);
                                    else {
                                        for (f = f[0].match(v), m = 1; m < f.length && f[m] === undefined; m++);
                                        var x = (" " + f[m + 1]).slice(1),
                                            R = (" " + f[m + 2]).slice(1);
                                        switch (f[m]) {
                                            case "#":
                                                k.tagList.push(R ? [x, R] : [x]);
                                                break;
                                            case "PLAYLIST-TYPE":
                                                b.type = x.toUpperCase();
                                                break;
                                            case "MEDIA-SEQUENCE":
                                                y = b.startSN = parseInt(x);
                                                break;
                                            case "TARGETDURATION":
                                                b.targetduration = parseFloat(x);
                                                break;
                                            case "VERSION":
                                                b.version = parseInt(x);
                                                break;
                                            case "EXTM3U":
                                                break;
                                            case "ENDLIST":
                                                b.live = !1;
                                                break;
                                            case "DIS":
                                                S++, k.tagList.push(["DIS"]);
                                                break;
                                            case "DISCONTINUITY-SEQ":
                                                S = parseInt(x);
                                                break;
                                            case "KEY":
                                                var D = x,
                                                    I = new d["default"](D),
                                                    O = I.enumeratedString("METHOD"),
                                                    M = I.URI,
                                                    F = I.hexadecimalInteger("IV");
                                                O && (E = new l["default"], M && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(O) >= 0 && (E.method = O, E.baseuri = i, E.reluri = M, E.key = null, E.iv = F));
                                                break;
                                            case "START":
                                                var N = x,
                                                    B = new d["default"](N),
                                                    U = B.decimalFloatingPoint("TIME-OFFSET");
                                                e.isFinite(U) && (b.startTimeOffset = U);
                                                break;
                                            case "MAP":
                                                var j = new d["default"](x);
                                                k.relurl = j.URI, k.rawByteRange = j.BYTERANGE, k.baseurl = i, k.level = o, k.type = h, k.sn = "initSegment", b.initSegment = k, k = new n["default"], k.rawProgramDateTime = b.initSegment.rawProgramDateTime;
                                                break;
                                            default:
                                                u.logger.warn("line parsed but not handled: " + f)
                                        }
                                    }
                                }
                                return k = w, k && !k.relurl && (b.fragments.pop(), _ -= k.duration), b.totalduration = _, b.averagetargetduration = _ / b.fragments.length, b.endSN = y - 1, b.startCC = b.fragments[0] ? b.fragments[0].cc : 0, b.endCC = S, !b.initSegment && b.fragments.length && b.fragments.every(function(e) {
                                    return g.test(e.relurl)
                                }) && (u.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), k = new n["default"], k.relurl = b.fragments[0].relurl, k.baseurl = i, k.level = o, k.type = h, k.sn = "initSegment", b.initSegment = k, b.needSidxRanges = !0), T && r(b.fragments, T), b
                            }, t
                        }();
                    t["default"] = m
                }).call(this, i("./src/polyfills/number.js").Number)
            },
            "./src/loader/playlist-loader.js": function(e, t, i) {
                "use strict";
                (function(e) {
                    var r = this && this.__extends || function() {
                        var e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                        };
                        return function(t, i) {
                            function r() {
                                this.constructor = t
                            }
                            e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                        }
                    }();
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var s = i("./src/events.js"),
                        o = i("./src/event-handler.js"),
                        n = i("./src/errors.js"),
                        a = i("./src/utils/logger.js"),
                        l = i("./src/demux/mp4demuxer.js"),
                        d = i("./src/loader/m3u8-parser.js"),
                        u = window.performance,
                        h = {
                            MANIFEST: "manifest",
                            LEVEL: "level",
                            AUDIO_TRACK: "audioTrack",
                            SUBTITLE_TRACK: "subtitleTrack"
                        },
                        c = {
                            MAIN: "main",
                            AUDIO: "audio",
                            SUBTITLE: "subtitle"
                        },
                        f = function(t) {
                            function i(e) {
                                var i = t.call(this, e, s["default"].MANIFEST_LOADING, s["default"].LEVEL_LOADING, s["default"].AUDIO_TRACK_LOADING, s["default"].SUBTITLE_TRACK_LOADING) || this;
                                return i.loaders = {}, i
                            }
                            return r(i, t), Object.defineProperty(i, "ContextType", {
                                get: function() {
                                    return h
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(i, "LevelType", {
                                get: function() {
                                    return c
                                },
                                enumerable: !0,
                                configurable: !0
                            }), i.canHaveQualityLevels = function(e) {
                                return e !== h.AUDIO_TRACK && e !== h.SUBTITLE_TRACK
                            }, i.mapContextToLevelType = function(e) {
                                switch (e.type) {
                                    case h.AUDIO_TRACK:
                                        return c.AUDIO;
                                    case h.SUBTITLE_TRACK:
                                        return c.SUBTITLE;
                                    default:
                                        return c.MAIN
                                }
                            }, i.getResponseUrl = function(e, t) {
                                var i = e.url;
                                return i !== undefined && 0 !== i.indexOf("data:") || (i = t.url), i
                            }, i.prototype.createInternalLoader = function(e) {
                                var t = this.hls.config,
                                    i = t.pLoader,
                                    r = t.loader,
                                    s = i || r,
                                    o = new s(t);
                                return e.loader = o, this.loaders[e.type] = o, o
                            }, i.prototype.getInternalLoader = function(e) {
                                return this.loaders[e.type]
                            }, i.prototype.resetInternalLoader = function(e) {
                                this.loaders[e] && delete this.loaders[e]
                            }, i.prototype.destroyInternalLoaders = function() {
                                for (var e in this.loaders) {
                                    var t = this.loaders[e];
                                    t && t.destroy(), this.resetInternalLoader(e)
                                }
                            }, i.prototype.destroy = function() {
                                this.destroyInternalLoaders(), t.prototype.destroy.call(this)
                            }, i.prototype.onManifestLoading = function(e) {
                                this.load(e.url, {
                                    type: h.MANIFEST,
                                    level: 0,
                                    id: null
                                })
                            }, i.prototype.onLevelLoading = function(e) {
                                this.load(e.url, {
                                    type: h.LEVEL,
                                    level: e.level,
                                    id: e.id
                                })
                            }, i.prototype.onAudioTrackLoading = function(e) {
                                this.load(e.url, {
                                    type: h.AUDIO_TRACK,
                                    level: null,
                                    id: e.id
                                })
                            }, i.prototype.onSubtitleTrackLoading = function(e) {
                                this.load(e.url, {
                                    type: h.SUBTITLE_TRACK,
                                    level: null,
                                    id: e.id
                                })
                            }, i.prototype.load = function(e, t) {
                                var i = this.hls.config;
                                a.logger.debug("Loading playlist of type " + t.type + ", level: " + t.level + ", id: " + t.id);
                                var r = this.getInternalLoader(t);
                                if (r) {
                                    var s = r.context;
                                    if (s && s.url === e) return a.logger.trace("playlist request ongoing"), !1;
                                    a.logger.warn("aborting previous loader for type: " + t.type), r.abort()
                                }
                                var o, n, l, d;
                                switch (t.type) {
                                    case h.MANIFEST:
                                        o = i.manifestLoadingMaxRetry, n = i.manifestLoadingTimeOut, l = i.manifestLoadingRetryDelay, d = i.manifestLoadingMaxRetryTimeout;
                                        break;
                                    case h.LEVEL:
                                        o = 0, n = i.levelLoadingTimeOut;
                                        break;
                                    default:
                                        o = i.levelLoadingMaxRetry, n = i.levelLoadingTimeOut, l = i.levelLoadingRetryDelay, d = i.levelLoadingMaxRetryTimeout
                                }
                                r = this.createInternalLoader(t), t.url = e, t.responseType = t.responseType || "";
                                var u = {
                                        timeout: n,
                                        maxRetry: o,
                                        retryDelay: l,
                                        maxRetryDelay: d
                                    },
                                    c = {
                                        onSuccess: this.loadsuccess.bind(this),
                                        onError: this.loaderror.bind(this),
                                        onTimeout: this.loadtimeout.bind(this)
                                    };
                                return a.logger.debug("Calling internal loader delegate for URL: " + e), r.load(t, u, c), !0
                            }, i.prototype.loadsuccess = function(e, t, i, r) {
                                if (void 0 === r && (r = null), i.isSidxRequest) return this._handleSidxRequest(e, i), void this._handlePlaylistLoaded(e, t, i, r);
                                this.resetInternalLoader(i.type);
                                var s = e.data;
                                if (t.tload = u.now(), 0 !== s.indexOf("#EXTM3U")) return void this._handleManifestParsingError(e, i, "no EXTM3U delimiter", r);
                                s.indexOf("#EXTINF:") > 0 || s.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this._handleTrackOrLevelPlaylist(e, t, i, r) : this._handleMasterPlaylist(e, t, i, r)
                            }, i.prototype.loaderror = function(e, t, i) {
                                void 0 === i && (i = null), this._handleNetworkError(t, i)
                            }, i.prototype.loadtimeout = function(e, t, i) {
                                void 0 === i && (i = null), this._handleNetworkError(t, i, !0)
                            }, i.prototype._handleMasterPlaylist = function(e, t, r, o) {
                                var n = this.hls,
                                    l = e.data,
                                    u = i.getResponseUrl(e, r),
                                    h = d["default"].parseMasterPlaylist(l, u);
                                if (!h.length) return void this._handleManifestParsingError(e, r, "no level found in manifest", o);
                                var c = h.map(function(e) {
                                        return {
                                            id: e.attrs.AUDIO,
                                            codec: e.audioCodec
                                        }
                                    }),
                                    f = d["default"].parseMasterPlaylistMedia(l, u, "AUDIO", c),
                                    p = d["default"].parseMasterPlaylistMedia(l, u, "SUBTITLES");
                                if (f.length) {
                                    var v = !1;
                                    f.forEach(function(e) {
                                        e.url || (v = !0)
                                    }), !1 === v && h[0].audioCodec && !h[0].attrs.AUDIO && (a.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), f.unshift({
                                        type: "main",
                                        name: "main"
                                    }))
                                }
                                n.trigger(s["default"].MANIFEST_LOADED, {
                                    levels: h,
                                    audioTracks: f,
                                    subtitles: p,
                                    url: u,
                                    stats: t,
                                    networkDetails: o
                                })
                            }, i.prototype._handleTrackOrLevelPlaylist = function(t, r, o, n) {
                                var a = this.hls,
                                    l = o.id,
                                    c = o.level,
                                    f = o.type,
                                    p = i.getResponseUrl(t, o),
                                    v = e.isFinite(l) ? l : 0,
                                    g = e.isFinite(c) ? c : v,
                                    m = i.mapContextToLevelType(o),
                                    y = d["default"].parseLevelPlaylist(t.data, p, g, m, v);
                                if (y.tload = r.tload, f === h.MANIFEST) {
                                    var _ = {
                                        url: p,
                                        details: y
                                    };
                                    a.trigger(s["default"].MANIFEST_LOADED, {
                                        levels: [_],
                                        audioTracks: [],
                                        url: p,
                                        stats: r,
                                        networkDetails: n
                                    })
                                }
                                if (r.tparsed = u.now(), y.needSidxRanges) {
                                    var b = y.initSegment.url;
                                    return void this.load(b, {
                                        isSidxRequest: !0,
                                        type: f,
                                        level: c,
                                        levelDetails: y,
                                        id: l,
                                        rangeStart: 0,
                                        rangeEnd: 2048,
                                        responseType: "arraybuffer"
                                    })
                                }
                                o.levelDetails = y, this._handlePlaylistLoaded(t, r, o, n)
                            }, i.prototype._handleSidxRequest = function(e, t) {
                                var i = l["default"].parseSegmentIndex(new Uint8Array(e.data));
                                i.references.forEach(function(e, i) {
                                    var r = e.info,
                                        s = t.levelDetails.fragments[i];
                                    0 === s.byteRange.length && (s.rawByteRange = String(1 + r.end - r.start) + "@" + String(r.start))
                                }), t.levelDetails.initSegment.rawByteRange = String(i.moovEndOffset) + "@0"
                            }, i.prototype._handleManifestParsingError = function(e, t, i, r) {
                                this.hls.trigger(s["default"].ERROR, {
                                    type: n.ErrorTypes.NETWORK_ERROR,
                                    details: n.ErrorDetails.MANIFEST_PARSING_ERROR,
                                    fatal: !0,
                                    url: e.url,
                                    reason: i,
                                    networkDetails: r
                                })
                            }, i.prototype._handleNetworkError = function(e, t, i) {
                                void 0 === i && (i = !1), a.logger.info("A network error occured while loading a " + e.type + "-type playlist");
                                var r, o, l = this.getInternalLoader(e);
                                switch (e.type) {
                                    case h.MANIFEST:
                                        r = i ? n.ErrorDetails.MANIFEST_LOAD_TIMEOUT : n.ErrorDetails.MANIFEST_LOAD_ERROR, o = !0;
                                        break;
                                    case h.LEVEL:
                                        r = i ? n.ErrorDetails.LEVEL_LOAD_TIMEOUT : n.ErrorDetails.LEVEL_LOAD_ERROR, o = !1;
                                        break;
                                    case h.AUDIO_TRACK:
                                        r = i ? n.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : n.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, o = !1;
                                        break;
                                    default:
                                        o = !1
                                }
                                l && (l.abort(), this.resetInternalLoader(e.type)), this.hls.trigger(s["default"].ERROR, {
                                    type: n.ErrorTypes.NETWORK_ERROR,
                                    details: r,
                                    fatal: o,
                                    url: l.url,
                                    loader: l,
                                    context: e,
                                    networkDetails: t
                                })
                            }, i.prototype._handlePlaylistLoaded = function(e, t, r, o) {
                                var n = r.type,
                                    a = r.level,
                                    l = r.id,
                                    d = r.levelDetails;
                                if (!d.targetduration) return void this._handleManifestParsingError(e, r, "invalid target duration", o);
                                if (i.canHaveQualityLevels(r.type)) this.hls.trigger(s["default"].LEVEL_LOADED, {
                                    details: d,
                                    level: a || 0,
                                    id: l || 0,
                                    stats: t,
                                    networkDetails: o
                                });
                                else switch (n) {
                                    case h.AUDIO_TRACK:
                                        this.hls.trigger(s["default"].AUDIO_TRACK_LOADED, {
                                            details: d,
                                            id: l,
                                            stats: t,
                                            networkDetails: o
                                        });
                                        break;
                                    case h.SUBTITLE_TRACK:
                                        this.hls.trigger(s["default"].SUBTITLE_TRACK_LOADED, {
                                            details: d,
                                            id: l,
                                            stats: t,
                                            networkDetails: o
                                        })
                                }
                            }, i
                        }(o["default"]);
                    t["default"] = f
                }).call(this, i("./src/polyfills/number.js").Number)
            },
            "./src/observer.js": function(e, t, i) {
                "use strict";
                var r = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                    };
                    return function(t, i) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./node_modules/eventemitter3/index.js"),
                    o = function(e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return r(t, e), t.prototype.trigger = function(e) {
                            for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                            this.emit.apply(this, [e, e].concat(t))
                        }, t
                    }(s.EventEmitter);
                t.Observer = o
            },
            "./src/polyfills/number.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/utils/get-self-scope.js"),
                    s = r.getSelfScope(),
                    o = s.Number;
                t.Number = o, o.isFinite = o.isFinite || function(e) {
                    return "number" == typeof e && isFinite(e)
                }
            },
            "./src/remux/aac-helper.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                    function e() {}
                    return e.getSilentFrame = function(e, t) {
                        switch (e) {
                            case "mp4a.40.2":
                                if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                                if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                                if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                                if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                                if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                                if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                                break;
                            default:
                                if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                                if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                                if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                        }
                        return null
                    }, e
                }();
                t["default"] = r
            },
            "./src/remux/mp4-generator.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = Math.pow(2, 32) - 1,
                    s = function() {
                        function e() {}
                        return e.init = function() {
                            e.types = {
                                avc1: [],
                                avcC: [],
                                btrt: [],
                                dinf: [],
                                dref: [],
                                esds: [],
                                ftyp: [],
                                hdlr: [],
                                mdat: [],
                                mdhd: [],
                                mdia: [],
                                mfhd: [],
                                minf: [],
                                moof: [],
                                moov: [],
                                mp4a: [],
                                ".mp3": [],
                                mvex: [],
                                mvhd: [],
                                pasp: [],
                                sdtp: [],
                                stbl: [],
                                stco: [],
                                stsc: [],
                                stsd: [],
                                stsz: [],
                                stts: [],
                                tfdt: [],
                                tfhd: [],
                                traf: [],
                                trak: [],
                                trun: [],
                                trex: [],
                                tkhd: [],
                                vmhd: [],
                                smhd: []
                            };
                            var t;
                            for (t in e.types) e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
                            var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                                r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                            e.HDLR_TYPES = {
                                video: i,
                                audio: r
                            };
                            var s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                                o = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                            e.STTS = e.STSC = e.STCO = o, e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                            var n = new Uint8Array([105, 115, 111, 109]),
                                a = new Uint8Array([97, 118, 99, 49]),
                                l = new Uint8Array([0, 0, 0, 1]);
                            e.FTYP = e.box(e.types.ftyp, n, l, n, a), e.DINF = e.box(e.types.dinf, e.box(e.types.dref, s))
                        }, e.box = function(e) {
                            for (var t, i = Array.prototype.slice.call(arguments, 1), r = 8, s = i.length, o = s; s--;) r += i[s].byteLength;
                            for (t = new Uint8Array(r), t[0] = r >> 24 & 255, t[1] = r >> 16 & 255, t[2] = r >> 8 & 255, t[3] = 255 & r, t.set(e, 4), s = 0, r = 8; s < o; s++) t.set(i[s], r), r += i[s].byteLength;
                            return t
                        }, e.hdlr = function(t) {
                            return e.box(e.types.hdlr, e.HDLR_TYPES[t])
                        }, e.mdat = function(t) {
                            return e.box(e.types.mdat, t)
                        }, e.mdhd = function(t, i) {
                            i *= t;
                            var s = Math.floor(i / (r + 1)),
                                o = Math.floor(i % (r + 1));
                            return e.box(e.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 85, 196, 0, 0]))
                        }, e.mdia = function(t) {
                            return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t))
                        }, e.mfhd = function(t) {
                            return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
                        }, e.minf = function(t) {
                            return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t))
                        }, e.moof = function(t, i, r) {
                            return e.box(e.types.moof, e.mfhd(t), e.traf(r, i))
                        }, e.moov = function(t) {
                            for (var i = t.length, r = []; i--;) r[i] = e.trak(t[i]);
                            return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(r).concat(e.mvex(t)))
                        }, e.mvex = function(t) {
                            for (var i = t.length, r = []; i--;) r[i] = e.trex(t[i]);
                            return e.box.apply(null, [e.types.mvex].concat(r))
                        }, e.mvhd = function(t, i) {
                            i *= t;
                            var s = Math.floor(i / (r + 1)),
                                o = Math.floor(i % (r + 1)),
                                n = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                            return e.box(e.types.mvhd, n)
                        }, e.sdtp = function(t) {
                            var i, r, s = t.samples || [],
                                o = new Uint8Array(4 + s.length);
                            for (r = 0; r < s.length; r++) i = s[r].flags, o[r + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
                            return e.box(e.types.sdtp, o)
                        }, e.stbl = function(t) {
                            return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO))
                        }, e.avc1 = function(t) {
                            var i, r, s, o = [],
                                n = [];
                            for (i = 0; i < t.sps.length; i++) r = t.sps[i], s = r.byteLength, o.push(s >>> 8 & 255), o.push(255 & s), o = o.concat(Array.prototype.slice.call(r));
                            for (i = 0; i < t.pps.length; i++) r = t.pps[i], s = r.byteLength, n.push(s >>> 8 & 255), n.push(255 & s), n = n.concat(Array.prototype.slice.call(r));
                            var a = e.box(e.types.avcC, new Uint8Array([1, o[3], o[4], o[5], 255, 224 | t.sps.length].concat(o).concat([t.pps.length]).concat(n))),
                                l = t.width,
                                d = t.height,
                                u = t.pixelRatio[0],
                                h = t.pixelRatio[1];
                            return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, d >> 8 & 255, 255 & d, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), a, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), e.box(e.types.pasp, new Uint8Array([u >> 24, u >> 16 & 255, u >> 8 & 255, 255 & u, h >> 24, h >> 16 & 255, h >> 8 & 255, 255 & h])))
                        }, e.esds = function(e) {
                            var t = e.config.length;
                            return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2]))
                        }, e.mp4a = function(t) {
                            var i = t.samplerate;
                            return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0]), e.box(e.types.esds, e.esds(t)))
                        }, e.mp3 = function(t) {
                            var i = t.samplerate;
                            return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0]))
                        }, e.stsd = function(t) {
                            return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t))
                        }, e.tkhd = function(t) {
                            var i = t.id,
                                s = t.duration * t.timescale,
                                o = t.width,
                                n = t.height,
                                a = Math.floor(s / (r + 1)),
                                l = Math.floor(s % (r + 1));
                            return e.box(e.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, l >> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, o >> 8 & 255, 255 & o, 0, 0, n >> 8 & 255, 255 & n, 0, 0]))
                        }, e.traf = function(t, i) {
                            var s = e.sdtp(t),
                                o = t.id,
                                n = Math.floor(i / (r + 1)),
                                a = Math.floor(i % (r + 1));
                            return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o])), e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), e.trun(t, s.length + 16 + 20 + 8 + 16 + 8 + 8), s)
                        }, e.trak = function(t) {
                            return t.duration = t.duration || 4294967295, e.box(e.types.trak, e.tkhd(t), e.mdia(t))
                        }, e.trex = function(t) {
                            var i = t.id;
                            return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                        }, e.trun = function(t, i) {
                            var r, s, o, n, a, l, d = t.samples || [],
                                u = d.length,
                                h = 12 + 16 * u,
                                c = new Uint8Array(h);
                            for (i += 8 + h, c.set([0, 0, 15, 1, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i], 0), r = 0; r < u; r++) s = d[r], o = s.duration, n = s.size, a = s.flags, l = s.cts, c.set([o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, a.isLeading << 2 | a.dependsOn, a.isDependedOn << 6 | a.hasRedundancy << 4 | a.paddingValue << 1 | a.isNonSync, 61440 & a.degradPrio, 15 & a.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * r);
                            return e.box(e.types.trun, c)
                        }, e.initSegment = function(t) {
                            e.types || e.init();
                            var i, r = e.moov(t);
                            return i = new Uint8Array(e.FTYP.byteLength + r.byteLength), i.set(e.FTYP), i.set(r, e.FTYP.byteLength), i
                        }, e
                    }();
                t["default"] = s
            },
            "./src/remux/mp4-remuxer.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/remux/aac-helper.js"),
                    s = i("./src/remux/mp4-generator.js"),
                    o = i("./src/events.js"),
                    n = i("./src/errors.js"),
                    a = i("./src/utils/logger.js"),
                    l = function() {
                        function e(e, t, i, r) {
                            this.observer = e, this.config = t, this.typeSupported = i;
                            var s = navigator.userAgent;
                            this.isSafari = r && r.indexOf("Apple") > -1 && s && !s.match("CriOS"), this.ISGenerated = !1
                        }
                        return e.prototype.destroy = function() {}, e.prototype.resetTimeStamp = function(e) {
                            this._initPTS = this._initDTS = e
                        }, e.prototype.resetInitSegment = function() {
                            this.ISGenerated = !1
                        }, e.prototype.remux = function(e, t, i, r, s, n, l) {
                            if (this.ISGenerated || this.generateIS(e, t, s), this.ISGenerated) {
                                var d = e.samples.length,
                                    u = t.samples.length,
                                    h = s,
                                    c = s;
                                if (d && u) {
                                    var f = (e.samples[0].dts - t.samples[0].dts) / t.inputTimeScale;
                                    h += Math.max(0, f), c += Math.max(0, -f)
                                }
                                if (d) {
                                    e.timescale || (a.logger.warn("regenerate InitSegment as audio detected"), this.generateIS(e, t, s));
                                    var p = this.remuxAudio(e, h, n, l);
                                    if (u) {
                                        var v = void 0;
                                        p && (v = p.endPTS - p.startPTS), t.timescale || (a.logger.warn("regenerate InitSegment as video detected"), this.generateIS(e, t, s)), this.remuxVideo(t, c, n, v, l)
                                    }
                                } else if (u) {
                                    var g = this.remuxVideo(t, c, n, 0, l);
                                    g && e.codec && this.remuxEmptyAudio(e, h, n, g)
                                }
                            }
                            i.samples.length && this.remuxID3(i, s), r.samples.length && this.remuxText(r, s), this.observer.trigger(o["default"].FRAG_PARSED)
                        }, e.prototype.generateIS = function(e, t, i) {
                            var r, l, d = this.observer,
                                u = e.samples,
                                h = t.samples,
                                c = this.typeSupported,
                                f = "audio/mp4",
                                p = {},
                                v = {
                                    tracks: p
                                },
                                g = this._initPTS === undefined;
                            if (g && (r = l = Infinity), e.config && u.length && (e.timescale = e.samplerate, a.logger.log("audio sampling rate : " + e.samplerate), e.isAAC || (c.mpeg ? (f = "audio/mpeg", e.codec = "") : c.mp3 && (e.codec = "mp3")), p.audio = {
                                    container: f,
                                    codec: e.codec,
                                    initSegment: !e.isAAC && c.mpeg ? new Uint8Array : s["default"].initSegment([e]),
                                    metadata: {
                                        channelCount: e.channelCount
                                    }
                                }, g && (r = l = u[0].pts - e.inputTimeScale * i)), t.sps && t.pps && h.length) {
                                var m = t.inputTimeScale;
                                t.timescale = m, p.video = {
                                    container: "video/mp4",
                                    codec: t.codec,
                                    initSegment: s["default"].initSegment([t]),
                                    metadata: {
                                        width: t.width,
                                        height: t.height
                                    }
                                }, g && (r = Math.min(r, h[0].pts - m * i), l = Math.min(l, h[0].dts - m * i), this.observer.trigger(o["default"].INIT_PTS_FOUND, {
                                    initPTS: r
                                }))
                            }
                            Object.keys(p).length ? (d.trigger(o["default"].FRAG_PARSING_INIT_SEGMENT, v), this.ISGenerated = !0, g && (this._initPTS = r, this._initDTS = l)) : d.trigger(o["default"].ERROR, {
                                type: n.ErrorTypes.MEDIA_ERROR,
                                details: n.ErrorDetails.FRAG_PARSING_ERROR,
                                fatal: !1,
                                reason: "no audio/video samples found"
                            })
                        }, e.prototype.remuxVideo = function(e, t, i, r, l) {
                            var d, u, h, c, f, p, v, g = 8,
                                m = e.timescale,
                                y = e.samples,
                                _ = [],
                                b = y.length,
                                E = this._PTSNormalize,
                                S = this._initDTS,
                                w = this.nextAvcDts,
                                k = this.isSafari;
                            if (0 !== b) {
                                k && (i |= y.length && w && (l && Math.abs(t - w / m) < .1 || Math.abs(y[0].pts - w - S) < m / 5)), i || (w = t * m), y.forEach(function(e) {
                                    e.pts = E(e.pts - S, w), e.dts = E(e.dts - S, w)
                                }), y.sort(function(e, t) {
                                    var i = e.dts - t.dts,
                                        r = e.pts - t.pts;
                                    return i || r || e.id - t.id
                                });
                                var T = y.reduce(function(e, t) {
                                    return Math.max(Math.min(e, t.pts - t.dts), -18e3)
                                }, 0);
                                if (T < 0) {
                                    a.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(T / 90) + " ms to overcome this issue");
                                    for (var L = 0; L < y.length; L++) y[L].dts += T
                                }
                                var P = y[0];
                                f = Math.max(P.dts, 0), c = Math.max(P.pts, 0);
                                var A = Math.round((f - w) / 90);
                                i && A && (A > 1 ? a.logger.log("AVC:" + A + " ms hole between fragments detected,filling it") : A < -1 && a.logger.log("AVC:" + -A + " ms overlapping between fragments detected"), f = w, y[0].dts = f, c = Math.max(c - A, w), y[0].pts = c, a.logger.log("Video/PTS/DTS adjusted: " + Math.round(c / 90) + "/" + Math.round(f / 90) + ",delta:" + A + " ms")), f, P = y[y.length - 1], v = Math.max(P.dts, 0), p = Math.max(P.pts, 0, v), k && (d = Math.round((v - f) / (y.length - 1)));
                                for (var C = 0, x = 0, L = 0; L < b; L++) {
                                    for (var R = y[L], D = R.units, I = D.length, O = 0, M = 0; M < I; M++) O += D[M].data.length;
                                    x += O, C += I, R.length = O, R.dts = k ? f + L * d : Math.max(R.dts, f), R.pts = Math.max(R.pts, R.dts)
                                }
                                var F = x + 4 * C + 8;
                                try {
                                    u = new Uint8Array(F)
                                } catch (Z) {
                                    return void this.observer.trigger(o["default"].ERROR, {
                                        type: n.ErrorTypes.MUX_ERROR,
                                        details: n.ErrorDetails.REMUX_ALLOC_ERROR,
                                        fatal: !1,
                                        bytes: F,
                                        reason: "fail allocating video mdat " + F
                                    })
                                }
                                var N = new DataView(u.buffer);
                                N.setUint32(0, F), u.set(s["default"].types.mdat, 4);
                                for (var L = 0; L < b; L++) {
                                    for (var B = y[L], U = B.units, j = 0, V = void 0, M = 0, I = U.length; M < I; M++) {
                                        var H = U[M],
                                            G = H.data,
                                            q = H.data.byteLength;
                                        N.setUint32(g, q), g += 4, u.set(G, g), g += q, j += 4 + q
                                    }
                                    if (k) V = Math.max(0, d * Math.round((B.pts - B.dts) / d));
                                    else {
                                        if (L < b - 1) d = y[L + 1].dts - B.dts;
                                        else {
                                            var W = this.config,
                                                K = B.dts - y[L > 0 ? L - 1 : L].dts;
                                            if (W.stretchShortVideoTrack) {
                                                var Y = W.maxBufferHole,
                                                    $ = Math.floor(Y * m),
                                                    z = (r ? c + r * m : this.nextAudioPts) - B.pts;
                                                z > $ ? (d = z - K, d < 0 && (d = K), a.logger.log("It is approximately " + z / 90 + " ms to the next segment; using duration " + d / 90 + " ms for the last video frame.")) : d = K
                                            } else d = K
                                        }
                                        V = Math.round(B.pts - B.dts)
                                    }
                                    _.push({
                                        size: j,
                                        duration: d,
                                        cts: V,
                                        flags: {
                                            isLeading: 0,
                                            isDependedOn: 0,
                                            hasRedundancy: 0,
                                            degradPrio: 0,
                                            dependsOn: B.key ? 2 : 1,
                                            isNonSync: B.key ? 0 : 1
                                        }
                                    })
                                }
                                this.nextAvcDts = v + d;
                                var X = e.dropped;
                                if (e.len = 0, e.nbNalu = 0, e.dropped = 0, _.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                                    var Q = _[0].flags;
                                    Q.dependsOn = 2, Q.isNonSync = 0
                                }
                                e.samples = _, h = s["default"].moof(e.sequenceNumber++, f, e), e.samples = [];
                                var J = {
                                    data1: h,
                                    data2: u,
                                    startPTS: c / m,
                                    endPTS: (p + d) / m,
                                    startDTS: f / m,
                                    endDTS: this.nextAvcDts / m,
                                    type: "video",
                                    hasAudio: !1,
                                    hasVideo: !0,
                                    nb: _.length,
                                    dropped: X
                                };
                                return this.observer.trigger(o["default"].FRAG_PARSING_DATA, J), J
                            }
                        }, e.prototype.remuxAudio = function(e, t, i, l) {
                            var d, u, h, c, f, p, v, g = e.inputTimeScale,
                                m = e.timescale,
                                y = g / m,
                                _ = e.isAAC ? 1024 : 1152,
                                b = _ * y,
                                E = this._PTSNormalize,
                                S = this._initDTS,
                                w = !e.isAAC && this.typeSupported.mpeg,
                                k = e.samples,
                                T = [],
                                L = this.nextAudioPts;
                            if (i |= k.length && L && (l && Math.abs(t - L / g) < .1 || Math.abs(k[0].pts - L - S) < 20 * b), k.forEach(function(e) {
                                    e.pts = e.dts = E(e.pts - S, t * g)
                                }), k = k.filter(function(e) {
                                    return e.pts >= 0
                                }), 0 !== k.length) {
                                if (i || (L = l ? t * g : k[0].pts), e.isAAC)
                                    for (var P = this.config.maxAudioFramesDrift, A = 0, C = L; A < k.length;) {
                                        var x, R = k[A],
                                            D = R.pts;
                                        x = D - C;
                                        var I = Math.abs(1e3 * x / g);
                                        if (x <= -P * b) a.logger.warn("Dropping 1 audio frame @ " + (C / g).toFixed(3) + "s due to " + Math.round(I) + " ms overlap."), k.splice(A, 1), e.len -= R.unit.length;
                                        else if (x >= P * b && I < 1e4 && C) {
                                            var O = Math.round(x / b);
                                            a.logger.warn("Injecting " + O + " audio frame @ " + (C / g).toFixed(3) + "s due to " + Math.round(1e3 * x / g) + " ms gap.");
                                            for (var M = 0; M < O; M++) {
                                                var F = Math.max(C, 0);
                                                h = r["default"].getSilentFrame(e.manifestCodec || e.codec, e.channelCount), h || (a.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), h = R.unit.subarray()), k.splice(A, 0, {
                                                    unit: h,
                                                    pts: F,
                                                    dts: F
                                                }), e.len += h.length, C += b, A++
                                            }
                                            R.pts = R.dts = C, C += b, A++
                                        } else Math.abs(x), R.pts = R.dts = C, C += b, A++
                                    }
                                for (var M = 0, N = k.length; M < N; M++) {
                                    var B = k[M],
                                        U = B.unit,
                                        D = B.pts;
                                    if (v !== undefined) u.duration = Math.round((D - v) / y);
                                    else {
                                        var j = Math.round(1e3 * (D - L) / g),
                                            V = 0;
                                        if (i && e.isAAC && j) {
                                            if (j > 0 && j < 1e4) V = Math.round((D - L) / b), a.logger.log(j + " ms hole between AAC samples detected,filling it"), V > 0 && (h = r["default"].getSilentFrame(e.manifestCodec || e.codec, e.channelCount), h || (h = U.subarray()), e.len += V * h.length);
                                            else if (j < -12) {
                                                a.logger.log("drop overlapping AAC sample, expected/parsed/delta:" + (L / g).toFixed(3) + "s/" + (D / g).toFixed(3) + "s/" + -j + "ms"), e.len -= U.byteLength;
                                                continue
                                            }
                                            D = L
                                        }
                                        if (p = D, !(e.len > 0)) return;
                                        var H = w ? e.len : e.len + 8;
                                        d = w ? 0 : 8;
                                        try {
                                            c = new Uint8Array(H)
                                        } catch (z) {
                                            return void this.observer.trigger(o["default"].ERROR, {
                                                type: n.ErrorTypes.MUX_ERROR,
                                                details: n.ErrorDetails.REMUX_ALLOC_ERROR,
                                                fatal: !1,
                                                bytes: H,
                                                reason: "fail allocating audio mdat " + H
                                            })
                                        }
                                        if (!w) {
                                            new DataView(c.buffer).setUint32(0, H), c.set(s["default"].types.mdat, 4)
                                        }
                                        for (var A = 0; A < V; A++) h = r["default"].getSilentFrame(e.manifestCodec || e.codec, e.channelCount), h || (a.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), h = U.subarray()), c.set(h, d), d += h.byteLength, u = {
                                            size: h.byteLength,
                                            cts: 0,
                                            duration: 1024,
                                            flags: {
                                                isLeading: 0,
                                                isDependedOn: 0,
                                                hasRedundancy: 0,
                                                degradPrio: 0,
                                                dependsOn: 1
                                            }
                                        }, T.push(u)
                                    }
                                    c.set(U, d);
                                    var G = U.byteLength;
                                    d += G, u = {
                                        size: G,
                                        cts: 0,
                                        duration: 0,
                                        flags: {
                                            isLeading: 0,
                                            isDependedOn: 0,
                                            hasRedundancy: 0,
                                            degradPrio: 0,
                                            dependsOn: 1
                                        }
                                    }, T.push(u), v = D
                                }
                                var q = 0,
                                    W = T.length;
                                if (W >= 2 && (q = T[W - 2].duration, u.duration = q), W) {
                                    this.nextAudioPts = L = v + y * q, e.len = 0, e.samples = T, f = w ? new Uint8Array : s["default"].moof(e.sequenceNumber++, p / y, e), e.samples = [];
                                    var K = p / g,
                                        Y = L / g,
                                        $ = {
                                            data1: f,
                                            data2: c,
                                            startPTS: K,
                                            endPTS: Y,
                                            startDTS: K,
                                            endDTS: Y,
                                            type: "audio",
                                            hasAudio: !0,
                                            hasVideo: !1,
                                            nb: W
                                        };
                                    return this.observer.trigger(o["default"].FRAG_PARSING_DATA, $), $
                                }
                                return null
                            }
                        }, e.prototype.remuxEmptyAudio = function(e, t, i, s) {
                            var o = e.inputTimeScale,
                                n = e.samplerate ? e.samplerate : o,
                                l = o / n,
                                d = this.nextAudioPts,
                                u = (d !== undefined ? d : s.startDTS * o) + this._initDTS,
                                h = s.endDTS * o + this._initDTS,
                                c = 1024 * l,
                                f = Math.ceil((h - u) / c),
                                p = r["default"].getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
                            if (a.logger.warn("remux empty Audio"), !p) return void a.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!");
                            for (var v = [], g = 0; g < f; g++) {
                                var m = u + g * c;
                                v.push({
                                    unit: p,
                                    pts: m,
                                    dts: m
                                }), e.len += p.length
                            }
                            e.samples = v, this.remuxAudio(e, t, i)
                        }, e.prototype.remuxID3 = function(e, t) {
                            var i, r = e.samples.length,
                                s = e.inputTimeScale,
                                n = this._initPTS,
                                a = this._initDTS;
                            if (r) {
                                for (var l = 0; l < r; l++) i = e.samples[l], i.pts = (i.pts - n) / s, i.dts = (i.dts - a) / s;
                                this.observer.trigger(o["default"].FRAG_PARSING_METADATA, {
                                    samples: e.samples
                                })
                            }
                            e.samples = [], t = t
                        }, e.prototype.remuxText = function(e, t) {
                            e.samples.sort(function(e, t) {
                                return e.pts - t.pts
                            });
                            var i, r = e.samples.length,
                                s = e.inputTimeScale,
                                n = this._initPTS;
                            if (r) {
                                for (var a = 0; a < r; a++) i = e.samples[a], i.pts = (i.pts - n) / s;
                                this.observer.trigger(o["default"].FRAG_PARSING_USERDATA, {
                                    samples: e.samples
                                })
                            }
                            e.samples = [], t = t
                        }, e.prototype._PTSNormalize = function(e, t) {
                            var i;
                            if (t === undefined) return e;
                            for (i = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;) e += i;
                            return e
                        }, e
                    }();
                t["default"] = l
            },
            "./src/remux/passthrough-remuxer.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/events.js"),
                    s = function() {
                        function e(e) {
                            this.observer = e
                        }
                        return e.prototype.destroy = function() {}, e.prototype.resetTimeStamp = function() {}, e.prototype.resetInitSegment = function() {},
                            e.prototype.remux = function(e, t, i, s, o, n, a, l) {
                                var d = this.observer,
                                    u = "";
                                e && (u += "audio"), t && (u += "video"), d.trigger(r["default"].FRAG_PARSING_DATA, {
                                    data1: l,
                                    startPTS: o,
                                    startDTS: o,
                                    type: u,
                                    hasAudio: !!e,
                                    hasVideo: !!t,
                                    nb: 1,
                                    dropped: 0
                                }), d.trigger(r["default"].FRAG_PARSED)
                            }, e
                    }();
                t["default"] = s
            },
            "./src/task-loop.js": function(e, t, i) {
                "use strict";
                var r = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                    };
                    return function(t, i) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./src/event-handler.js"),
                    o = function(e) {
                        function t(t) {
                            for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
                            var s = e.apply(this, [t].concat(i)) || this;
                            return s._tickInterval = null, s._tickTimer = null, s._tickCallCount = 0, s._boundTick = s.tick.bind(s), s
                        }
                        return r(t, e), t.prototype.onHandlerDestroying = function() {
                            this.clearNextTick(), this.clearInterval()
                        }, t.prototype.hasInterval = function() {
                            return !!this._tickInterval
                        }, t.prototype.hasNextTick = function() {
                            return !!this._tickTimer
                        }, t.prototype.setInterval = function(e) {
                            return !this._tickInterval && (this._tickInterval = setInterval(this._boundTick, e), !0)
                        }, t.prototype.clearInterval = function() {
                            return !!this._tickInterval && (clearInterval(this._tickInterval), this._tickInterval = null, !0)
                        }, t.prototype.clearNextTick = function() {
                            return !!this._tickTimer && (clearTimeout(this._tickTimer), this._tickTimer = null, !0)
                        }, t.prototype.tick = function() {
                            1 === ++this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && (this.clearNextTick(), this._tickTimer = setTimeout(this._boundTick, 0)), this._tickCallCount = 0)
                        }, t.prototype.doTick = function() {}, t
                    }(s["default"]);
                t["default"] = o
            },
            "./src/utils/attr-list.js": function(e, t, i) {
                "use strict";
                (function(e) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = /^(\d+)x(\d+)$/,
                        r = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
                        s = function() {
                            function t(e) {
                                "string" == typeof e && (e = t.parseAttrList(e));
                                for (var i in e) e.hasOwnProperty(i) && (this[i] = e[i])
                            }
                            return t.prototype.decimalInteger = function(t) {
                                var i = parseInt(this[t], 10);
                                return i > e.MAX_SAFE_INTEGER ? Infinity : i
                            }, t.prototype.hexadecimalInteger = function(e) {
                                if (this[e]) {
                                    var t = (this[e] || "0x").slice(2);
                                    t = (1 & t.length ? "0" : "") + t;
                                    for (var i = new Uint8Array(t.length / 2), r = 0; r < t.length / 2; r++) i[r] = parseInt(t.slice(2 * r, 2 * r + 2), 16);
                                    return i
                                }
                                return null
                            }, t.prototype.hexadecimalIntegerAsNumber = function(t) {
                                var i = parseInt(this[t], 16);
                                return i > e.MAX_SAFE_INTEGER ? Infinity : i
                            }, t.prototype.decimalFloatingPoint = function(e) {
                                return parseFloat(this[e])
                            }, t.prototype.enumeratedString = function(e) {
                                return this[e]
                            }, t.prototype.decimalResolution = function(e) {
                                var t = i.exec(this[e]);
                                return null === t ? undefined : {
                                    width: parseInt(t[1], 10),
                                    height: parseInt(t[2], 10)
                                }
                            }, t.parseAttrList = function(e) {
                                var t, i = {};
                                for (r.lastIndex = 0; null !== (t = r.exec(e));) {
                                    var s = t[2];
                                    0 === s.indexOf('"') && s.lastIndexOf('"') === s.length - 1 && (s = s.slice(1, -1)), i[t[1]] = s
                                }
                                return i
                            }, t
                        }();
                    t["default"] = s
                }).call(this, i("./src/polyfills/number.js").Number)
            },
            "./src/utils/binary-search.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = {
                    search: function(e, t) {
                        for (var i = 0, r = e.length - 1, s = null, o = null; i <= r;) {
                            s = (i + r) / 2 | 0, o = e[s];
                            var n = t(o);
                            if (n > 0) i = s + 1;
                            else {
                                if (!(n < 0)) return o;
                                r = s - 1
                            }
                        }
                        return null
                    }
                };
                t["default"] = r
            },
            "./src/utils/buffer-helper.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                    function e() {}
                    return e.isBuffered = function(e, t) {
                        try {
                            if (e)
                                for (var i = e.buffered, r = 0; r < i.length; r++)
                                    if (t >= i.start(r) && t <= i.end(r)) return !0
                        } catch (s) {}
                        return !1
                    }, e.bufferInfo = function(t, i, r) {
                        try {
                            if (t) {
                                var s = t.buffered,
                                    o = [],
                                    n = void 0;
                                for (n = 0; n < s.length; n++) o.push({
                                    start: s.start(n),
                                    end: s.end(n)
                                });
                                return e.bufferedInfo(o, i, r)
                            }
                        } catch (a) {}
                        return {
                            len: 0,
                            start: i,
                            end: i,
                            nextStart: undefined
                        }
                    }, e.bufferedInfo = function(e, t, i) {
                        var r, s, o, n, a, l = [];
                        for (e.sort(function(e, t) {
                                var i = e.start - t.start;
                                return i || t.end - e.end
                            }), a = 0; a < e.length; a++) {
                            var d = l.length;
                            if (d) {
                                var u = l[d - 1].end;
                                e[a].start - u < i ? e[a].end > u && (l[d - 1].end = e[a].end) : l.push(e[a])
                            } else l.push(e[a])
                        }
                        for (a = 0, r = 0, s = o = t; a < l.length; a++) {
                            var h = l[a].start,
                                c = l[a].end;
                            if (t + i >= h && t < c) s = h, o = c, r = o - t;
                            else if (t + i < h) {
                                n = h;
                                break
                            }
                        }
                        return {
                            len: r,
                            start: s,
                            end: o,
                            nextStart: n
                        }
                    }, e
                }();
                t.BufferHelper = r
            },
            "./src/utils/cea-608-parser.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = {
                        42: 225,
                        92: 233,
                        94: 237,
                        95: 243,
                        96: 250,
                        123: 231,
                        124: 247,
                        125: 209,
                        126: 241,
                        127: 9608,
                        128: 174,
                        129: 176,
                        130: 189,
                        131: 191,
                        132: 8482,
                        133: 162,
                        134: 163,
                        135: 9834,
                        136: 224,
                        137: 32,
                        138: 232,
                        139: 226,
                        140: 234,
                        141: 238,
                        142: 244,
                        143: 251,
                        144: 193,
                        145: 201,
                        146: 211,
                        147: 218,
                        148: 220,
                        149: 252,
                        150: 8216,
                        151: 161,
                        152: 42,
                        153: 8217,
                        154: 9473,
                        155: 169,
                        156: 8480,
                        157: 8226,
                        158: 8220,
                        159: 8221,
                        160: 192,
                        161: 194,
                        162: 199,
                        163: 200,
                        164: 202,
                        165: 203,
                        166: 235,
                        167: 206,
                        168: 207,
                        169: 239,
                        170: 212,
                        171: 217,
                        172: 249,
                        173: 219,
                        174: 171,
                        175: 187,
                        176: 195,
                        177: 227,
                        178: 205,
                        179: 204,
                        180: 236,
                        181: 210,
                        182: 242,
                        183: 213,
                        184: 245,
                        185: 123,
                        186: 125,
                        187: 92,
                        188: 94,
                        189: 95,
                        190: 124,
                        191: 8764,
                        192: 196,
                        193: 228,
                        194: 214,
                        195: 246,
                        196: 223,
                        197: 165,
                        198: 164,
                        199: 9475,
                        200: 197,
                        201: 229,
                        202: 216,
                        203: 248,
                        204: 9487,
                        205: 9491,
                        206: 9495,
                        207: 9499
                    },
                    s = function(e) {
                        var t = e;
                        return r.hasOwnProperty(e) && (t = r[e]), String.fromCharCode(t)
                    },
                    o = 15,
                    n = 100,
                    a = {
                        17: 1,
                        18: 3,
                        21: 5,
                        22: 7,
                        23: 9,
                        16: 11,
                        19: 12,
                        20: 14
                    },
                    l = {
                        17: 2,
                        18: 4,
                        21: 6,
                        22: 8,
                        23: 10,
                        19: 13,
                        20: 15
                    },
                    d = {
                        25: 1,
                        26: 3,
                        29: 5,
                        30: 7,
                        31: 9,
                        24: 11,
                        27: 12,
                        28: 14
                    },
                    u = {
                        25: 2,
                        26: 4,
                        29: 6,
                        30: 8,
                        31: 10,
                        27: 13,
                        28: 15
                    },
                    h = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"],
                    c = {
                        verboseFilter: {
                            DATA: 3,
                            DEBUG: 3,
                            INFO: 2,
                            WARNING: 2,
                            TEXT: 1,
                            ERROR: 0
                        },
                        time: null,
                        verboseLevel: 0,
                        setTime: function(e) {
                            this.time = e
                        },
                        log: function(e, t) {
                            this.verboseFilter[e];
                            this.verboseLevel
                        }
                    },
                    f = function(e) {
                        for (var t = [], i = 0; i < e.length; i++) t.push(e[i].toString(16));
                        return t
                    },
                    p = function() {
                        function e(e, t, i, r, s) {
                            this.foreground = e || "white", this.underline = t || !1, this.italics = i || !1, this.background = r || "black", this.flash = s || !1
                        }
                        return e.prototype.reset = function() {
                            this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
                        }, e.prototype.setStyles = function(e) {
                            for (var t = ["foreground", "underline", "italics", "background", "flash"], i = 0; i < t.length; i++) {
                                var r = t[i];
                                e.hasOwnProperty(r) && (this[r] = e[r])
                            }
                        }, e.prototype.isDefault = function() {
                            return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                        }, e.prototype.equals = function(e) {
                            return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
                        }, e.prototype.copy = function(e) {
                            this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash
                        }, e.prototype.toString = function() {
                            return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                        }, e
                    }(),
                    v = function() {
                        function e(e, t, i, r, s, o) {
                            this.uchar = e || " ", this.penState = new p(t, i, r, s, o)
                        }
                        return e.prototype.reset = function() {
                            this.uchar = " ", this.penState.reset()
                        }, e.prototype.setChar = function(e, t) {
                            this.uchar = e, this.penState.copy(t)
                        }, e.prototype.setPenState = function(e) {
                            this.penState.copy(e)
                        }, e.prototype.equals = function(e) {
                            return this.uchar === e.uchar && this.penState.equals(e.penState)
                        }, e.prototype.copy = function(e) {
                            this.uchar = e.uchar, this.penState.copy(e.penState)
                        }, e.prototype.isEmpty = function() {
                            return " " === this.uchar && this.penState.isDefault()
                        }, e
                    }(),
                    g = function() {
                        function e() {
                            this.chars = [];
                            for (var e = 0; e < n; e++) this.chars.push(new v);
                            this.pos = 0, this.currPenState = new p
                        }
                        return e.prototype.equals = function(e) {
                            for (var t = !0, i = 0; i < n; i++)
                                if (!this.chars[i].equals(e.chars[i])) {
                                    t = !1;
                                    break
                                } return t
                        }, e.prototype.copy = function(e) {
                            for (var t = 0; t < n; t++) this.chars[t].copy(e.chars[t])
                        }, e.prototype.isEmpty = function() {
                            for (var e = !0, t = 0; t < n; t++)
                                if (!this.chars[t].isEmpty()) {
                                    e = !1;
                                    break
                                } return e
                        }, e.prototype.setCursor = function(e) {
                            this.pos !== e && (this.pos = e), this.pos < 0 ? (c.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > n && (c.log("ERROR", "Too large cursor position " + this.pos), this.pos = n)
                        }, e.prototype.moveCursor = function(e) {
                            var t = this.pos + e;
                            if (e > 1)
                                for (var i = this.pos + 1; i < t + 1; i++) this.chars[i].setPenState(this.currPenState);
                            this.setCursor(t)
                        }, e.prototype.backSpace = function() {
                            this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
                        }, e.prototype.insertChar = function(e) {
                            e >= 144 && this.backSpace();
                            var t = s(e);
                            if (this.pos >= n) return void c.log("ERROR", "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!");
                            this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1)
                        }, e.prototype.clearFromPos = function(e) {
                            var t;
                            for (t = e; t < n; t++) this.chars[t].reset()
                        }, e.prototype.clear = function() {
                            this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
                        }, e.prototype.clearToEndOfRow = function() {
                            this.clearFromPos(this.pos)
                        }, e.prototype.getTextString = function() {
                            for (var e = [], t = !0, i = 0; i < n; i++) {
                                var r = this.chars[i].uchar;
                                " " !== r && (t = !1), e.push(r)
                            }
                            return t ? "" : e.join("")
                        }, e.prototype.setPenStyles = function(e) {
                            this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState)
                        }, e
                    }(),
                    m = function() {
                        function e() {
                            this.rows = [];
                            for (var e = 0; e < o; e++) this.rows.push(new g);
                            this.currRow = o - 1, this.nrRollUpRows = null, this.reset()
                        }
                        return e.prototype.reset = function() {
                            for (var e = 0; e < o; e++) this.rows[e].clear();
                            this.currRow = o - 1
                        }, e.prototype.equals = function(e) {
                            for (var t = !0, i = 0; i < o; i++)
                                if (!this.rows[i].equals(e.rows[i])) {
                                    t = !1;
                                    break
                                } return t
                        }, e.prototype.copy = function(e) {
                            for (var t = 0; t < o; t++) this.rows[t].copy(e.rows[t])
                        }, e.prototype.isEmpty = function() {
                            for (var e = !0, t = 0; t < o; t++)
                                if (!this.rows[t].isEmpty()) {
                                    e = !1;
                                    break
                                } return e
                        }, e.prototype.backSpace = function() {
                            this.rows[this.currRow].backSpace()
                        }, e.prototype.clearToEndOfRow = function() {
                            this.rows[this.currRow].clearToEndOfRow()
                        }, e.prototype.insertChar = function(e) {
                            this.rows[this.currRow].insertChar(e)
                        }, e.prototype.setPen = function(e) {
                            this.rows[this.currRow].setPenStyles(e)
                        }, e.prototype.moveCursor = function(e) {
                            this.rows[this.currRow].moveCursor(e)
                        }, e.prototype.setCursor = function(e) {
                            c.log("INFO", "setCursor: " + e), this.rows[this.currRow].setCursor(e)
                        }, e.prototype.setPAC = function(e) {
                            c.log("INFO", "pacData = " + JSON.stringify(e));
                            var t = e.row - 1;
                            if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
                                for (var i = 0; i < o; i++) this.rows[i].clear();
                                var r = this.currRow + 1 - this.nrRollUpRows,
                                    s = this.lastOutputScreen;
                                if (s) {
                                    var n = s.rows[r].cueStartTime;
                                    if (n && n < c.time)
                                        for (var i = 0; i < this.nrRollUpRows; i++) this.rows[t - this.nrRollUpRows + i + 1].copy(s.rows[r + i])
                                }
                            }
                            this.currRow = t;
                            var a = this.rows[this.currRow];
                            if (null !== e.indent) {
                                var l = e.indent,
                                    d = Math.max(l - 1, 0);
                                a.setCursor(e.indent), e.color = a.chars[d].penState.foreground
                            }
                            var u = {
                                foreground: e.color,
                                underline: e.underline,
                                italics: e.italics,
                                background: "black",
                                flash: !1
                            };
                            this.setPen(u)
                        }, e.prototype.setBkgData = function(e) {
                            c.log("INFO", "bkgData = " + JSON.stringify(e)), this.backSpace(), this.setPen(e), this.insertChar(32)
                        }, e.prototype.setRollUpRows = function(e) {
                            this.nrRollUpRows = e
                        }, e.prototype.rollUp = function() {
                            if (null === this.nrRollUpRows) return void c.log("DEBUG", "roll_up but nrRollUpRows not set yet");
                            c.log("TEXT", this.getDisplayText());
                            var e = this.currRow + 1 - this.nrRollUpRows,
                                t = this.rows.splice(e, 1)[0];
                            t.clear(), this.rows.splice(this.currRow, 0, t), c.log("INFO", "Rolling up")
                        }, e.prototype.getDisplayText = function(e) {
                            e = e || !1;
                            for (var t = [], i = "", r = -1, s = 0; s < o; s++) {
                                var n = this.rows[s].getTextString();
                                n && (r = s + 1, e ? t.push("Row " + r + ": '" + n + "'") : t.push(n.trim()))
                            }
                            return t.length > 0 && (i = e ? "[" + t.join(" | ") + "]" : t.join("\n")), i
                        }, e.prototype.getTextAndFormat = function() {
                            return this.rows
                        }, e
                    }(),
                    y = function() {
                        function e(e, t) {
                            this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new m, this.nonDisplayedMemory = new m, this.lastOutputScreen = new m, this.currRollUpRow = this.displayedMemory.rows[o - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
                        }
                        return e.prototype.reset = function() {
                            this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[o - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.lastCueEndTime = null
                        }, e.prototype.getHandler = function() {
                            return this.outputFilter
                        }, e.prototype.setHandler = function(e) {
                            this.outputFilter = e
                        }, e.prototype.setPAC = function(e) {
                            this.writeScreen.setPAC(e)
                        }, e.prototype.setBkgData = function(e) {
                            this.writeScreen.setBkgData(e)
                        }, e.prototype.setMode = function(e) {
                            e !== this.mode && (this.mode = e, c.log("INFO", "MODE=" + e), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e)
                        }, e.prototype.insertChars = function(e) {
                            for (var t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]);
                            var i = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                            c.log("INFO", i + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (c.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
                        }, e.prototype.ccRCL = function() {
                            c.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
                        }, e.prototype.ccBS = function() {
                            c.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                        }, e.prototype.ccAOF = function() {}, e.prototype.ccAON = function() {}, e.prototype.ccDER = function() {
                            c.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
                        }, e.prototype.ccRU = function(e) {
                            c.log("INFO", "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e)
                        }, e.prototype.ccFON = function() {
                            c.log("INFO", "FON - Flash On"), this.writeScreen.setPen({
                                flash: !0
                            })
                        }, e.prototype.ccRDC = function() {
                            c.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
                        }, e.prototype.ccTR = function() {
                            c.log("INFO", "TR"), this.setMode("MODE_TEXT")
                        }, e.prototype.ccRTD = function() {
                            c.log("INFO", "RTD"), this.setMode("MODE_TEXT")
                        }, e.prototype.ccEDM = function() {
                            c.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
                        }, e.prototype.ccCR = function() {
                            c.log("CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
                        }, e.prototype.ccENM = function() {
                            c.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
                        }, e.prototype.ccEOC = function() {
                            if (c.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                                var e = this.displayedMemory;
                                this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, c.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
                            }
                            this.outputDataUpdate(!0)
                        }, e.prototype.ccTO = function(e) {
                            c.log("INFO", "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e)
                        }, e.prototype.ccMIDROW = function(e) {
                            var t = {
                                flash: !1
                            };
                            if (t.underline = e % 2 == 1, t.italics = e >= 46, t.italics) t.foreground = "white";
                            else {
                                var i = Math.floor(e / 2) - 16,
                                    r = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
                                t.foreground = r[i]
                            }
                            c.log("INFO", "MIDROW: " + JSON.stringify(t)), this.writeScreen.setPen(t)
                        }, e.prototype.outputDataUpdate = function(e) {
                            void 0 === e && (e = !1);
                            var t = c.time;
                            null !== t && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), !0 === e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue()), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t) : this.cueStartTime = t, this.lastOutputScreen.copy(this.displayedMemory))
                        }, e.prototype.cueSplitAtTime = function(e) {
                            this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e))
                        }, e
                    }(),
                    _ = function() {
                        function e(e, t, i) {
                            this.field = e || 1, this.outputs = [t, i], this.channels = [new y(1, t), new y(2, i)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = {
                                padding: 0,
                                "char": 0,
                                cmd: 0,
                                other: 0
                            }
                        }
                        return e.prototype.getHandler = function(e) {
                            return this.channels[e].getHandler()
                        }, e.prototype.setHandler = function(e, t) {
                            this.channels[e].setHandler(t)
                        }, e.prototype.addData = function(e, t) {
                            var i, r, s, o = !1;
                            this.lastTime = e, c.setTime(e);
                            for (var n = 0; n < t.length; n += 2)
                                if (r = 127 & t[n], s = 127 & t[n + 1], 0 !== r || 0 !== s) {
                                    if (c.log("DATA", "[" + f([t[n], t[n + 1]]) + "] -> (" + f([r, s]) + ")"), i = this.parseCmd(r, s), i || (i = this.parseMidrow(r, s)), i || (i = this.parsePAC(r, s)), i || (i = this.parseBackgroundAttributes(r, s)), !i && (o = this.parseChars(r, s)))
                                        if (this.currChNr && this.currChNr >= 0) {
                                            var a = this.channels[this.currChNr - 1];
                                            a.insertChars(o)
                                        } else c.log("WARNING", "No channel found yet. TEXT-MODE?");
                                    i ? this.dataCounters.cmd += 2 : o ? this.dataCounters["char"] += 2 : (this.dataCounters.other += 2, c.log("WARNING", "Couldn't parse cleaned data " + f([r, s]) + " orig: " + f([t[n], t[n + 1]])))
                                } else this.dataCounters.padding += 2
                        }, e.prototype.parseCmd = function(e, t) {
                            var i = null,
                                r = (20 === e || 28 === e) && t >= 32 && t <= 47,
                                s = (23 === e || 31 === e) && t >= 33 && t <= 35;
                            if (!r && !s) return !1;
                            if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, c.log("DEBUG", "Repeated command (" + f([e, t]) + ") is dropped"), !0;
                            i = 20 === e || 23 === e ? 1 : 2;
                            var o = this.channels[i - 1];
                            return 20 === e || 28 === e ? 32 === t ? o.ccRCL() : 33 === t ? o.ccBS() : 34 === t ? o.ccAOF() : 35 === t ? o.ccAON() : 36 === t ? o.ccDER() : 37 === t ? o.ccRU(2) : 38 === t ? o.ccRU(3) : 39 === t ? o.ccRU(4) : 40 === t ? o.ccFON() : 41 === t ? o.ccRDC() : 42 === t ? o.ccTR() : 43 === t ? o.ccRTD() : 44 === t ? o.ccEDM() : 45 === t ? o.ccCR() : 46 === t ? o.ccENM() : 47 === t && o.ccEOC() : o.ccTO(t - 32), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = i, !0
                        }, e.prototype.parseMidrow = function(e, t) {
                            var i = null;
                            if ((17 === e || 25 === e) && t >= 32 && t <= 47) {
                                if ((i = 17 === e ? 1 : 2) !== this.currChNr) return c.log("ERROR", "Mismatch channel in midrow parsing"), !1;
                                return this.channels[i - 1].ccMIDROW(t), c.log("DEBUG", "MIDROW (" + f([e, t]) + ")"), !0
                            }
                            return !1
                        }, e.prototype.parsePAC = function(e, t) {
                            var i = null,
                                r = null,
                                s = (e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127,
                                o = (16 === e || 24 === e) && t >= 64 && t <= 95;
                            if (!s && !o) return !1;
                            if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, !0;
                            i = e <= 23 ? 1 : 2, r = t >= 64 && t <= 95 ? 1 === i ? a[e] : d[e] : 1 === i ? l[e] : u[e];
                            var n = this.interpretPAC(r, t);
                            return this.channels[i - 1].setPAC(n), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = i, !0
                        }, e.prototype.interpretPAC = function(e, t) {
                            var i = t,
                                r = {
                                    color: null,
                                    italics: !1,
                                    indent: null,
                                    underline: !1,
                                    row: e
                                };
                            return i = t > 95 ? t - 96 : t - 64, r.underline = 1 == (1 & i), i <= 13 ? r.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(i / 2)] : i <= 15 ? (r.italics = !0, r.color = "white") : r.indent = 4 * Math.floor((i - 16) / 2), r
                        }, e.prototype.parseChars = function(e, t) {
                            var i = null,
                                r = null,
                                o = null;
                            if (e >= 25 ? (i = 2, o = e - 8) : (i = 1, o = e), o >= 17 && o <= 19) {
                                var n = t;
                                n = 17 === o ? t + 80 : 18 === o ? t + 112 : t + 144, c.log("INFO", "Special char '" + s(n) + "' in channel " + i), r = [n]
                            } else e >= 32 && e <= 127 && (r = 0 === t ? [e] : [e, t]);
                            if (r) {
                                var a = f(r);
                                c.log("DEBUG", "Char codes =  " + a.join(",")), this.lastCmdA = null, this.lastCmdB = null
                            }
                            return r
                        }, e.prototype.parseBackgroundAttributes = function(e, t) {
                            var i, r, s, o, n = (16 === e || 24 === e) && t >= 32 && t <= 47,
                                a = (23 === e || 31 === e) && t >= 45 && t <= 47;
                            return !(!n && !a) && (i = {}, 16 === e || 24 === e ? (r = Math.floor((t - 32) / 2), i.background = h[r], t % 2 == 1 && (i.background = i.background + "_semi")) : 45 === t ? i.background = "transparent" : (i.foreground = "black", 47 === t && (i.underline = !0)), s = e < 24 ? 1 : 2, o = this.channels[s - 1], o.setBkgData(i), this.lastCmdA = null, this.lastCmdB = null, !0)
                        }, e.prototype.reset = function() {
                            for (var e = 0; e < this.channels.length; e++) this.channels[e] && this.channels[e].reset();
                            this.lastCmdA = null, this.lastCmdB = null
                        }, e.prototype.cueSplitAtTime = function(e) {
                            for (var t = 0; t < this.channels.length; t++) this.channels[t] && this.channels[t].cueSplitAtTime(e)
                        }, e
                    }();
                t["default"] = _
            },
            "./src/utils/codecs.js": function(e, t, i) {
                "use strict";

                function r(e, t) {
                    var i = o[t];
                    return !!i && !0 === i[e.slice(0, 4)]
                }

                function s(e, t) {
                    return window.MediaSource.isTypeSupported((t || "video") + '/mp4;codecs="' + e + '"')
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = {
                    audio: {
                        a3ds: !0,
                        "ac-3": !0,
                        "ac-4": !0,
                        alac: !0,
                        alaw: !0,
                        dra1: !0,
                        "dts+": !0,
                        "dts-": !0,
                        dtsc: !0,
                        dtse: !0,
                        dtsh: !0,
                        "ec-3": !0,
                        enca: !0,
                        g719: !0,
                        g726: !0,
                        m4ae: !0,
                        mha1: !0,
                        mha2: !0,
                        mhm1: !0,
                        mhm2: !0,
                        mlpa: !0,
                        mp4a: !0,
                        "raw ": !0,
                        Opus: !0,
                        samr: !0,
                        sawb: !0,
                        sawp: !0,
                        sevc: !0,
                        sqcp: !0,
                        ssmv: !0,
                        twos: !0,
                        ulaw: !0
                    },
                    video: {
                        avc1: !0,
                        avc2: !0,
                        avc3: !0,
                        avc4: !0,
                        avcp: !0,
                        drac: !0,
                        dvav: !0,
                        dvhe: !0,
                        encv: !0,
                        hev1: !0,
                        hvc1: !0,
                        mjp2: !0,
                        mp4v: !0,
                        mvc1: !0,
                        mvc2: !0,
                        mvc3: !0,
                        mvc4: !0,
                        resv: !0,
                        rv60: !0,
                        s263: !0,
                        svc1: !0,
                        svc2: !0,
                        "vc-1": !0,
                        vp08: !0,
                        vp09: !0
                    }
                };
                t.isCodecType = r, t.isCodecSupportedInMp4 = s
            },
            "./src/utils/cues.js": function(e, t, i) {
                "use strict";

                function r(e, t, i, r) {
                    for (var o, n, a, l, d, u = window.VTTCue || window.TextTrackCue, h = 0; h < r.rows.length; h++)
                        if (o = r.rows[h], a = !0, l = 0, d = "", !o.isEmpty()) {
                            for (var c = 0; c < o.chars.length; c++) o.chars[c].uchar.match(/\s/) && a ? l++ : (d += o.chars[c].uchar, a = !1);
                            o.cueStartTime = t, t === i && (i += 1e-4), n = new u(t, i, s.fixLineBreaks(d.trim())), l >= 16 ? l-- : l++, navigator.userAgent.match(/Firefox\//) ? n.line = h + 1 : n.line = h > 7 ? h - 2 : h + 1, n.align = "left", n.position = Math.max(0, Math.min(100, l / 32 * 100 + (navigator.userAgent.match(/Firefox\//) ? 50 : 0))), e.addCue(n)
                        }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./src/utils/vttparser.js");
                t.newCue = r
            },
            "./src/utils/discontinuities.js": function(e, t, i) {
                "use strict";
                (function(e) {
                    function r(e, t) {
                        for (var i = null, r = 0; r < e.length; r += 1) {
                            var s = e[r];
                            if (s && s.cc === t) {
                                i = s;
                                break
                            }
                        }
                        return i
                    }

                    function s(e, t) {
                        return h["default"].search(e, function(e) {
                            return e.cc < t ? 1 : e.cc > t ? -1 : 0
                        })
                    }

                    function o(e, t, i) {
                        var r = !1;
                        return t && t.details && i && (i.endCC > i.startCC || e && e.cc < i.startCC) && (r = !0), r
                    }

                    function n(e, t) {
                        var i = e.fragments,
                            s = t.fragments;
                        if (!s.length || !i.length) return void c.logger.log("No fragments to align");
                        var o = r(i, s[0].cc);
                        return !o || o && !o.startPTS ? void c.logger.log("No frag in previous level to align on") : o
                    }

                    function a(e, t) {
                        t.fragments.forEach(function(t) {
                            if (t) {
                                var i = t.start + e;
                                t.start = t.startPTS = i, t.endPTS = i + t.duration
                            }
                        }), t.PTSKnown = !0
                    }

                    function l(e, t, i) {
                        d(e, i, t), !i.PTSKnown && t && u(i, t.details)
                    }

                    function d(e, t, i) {
                        if (o(e, i, t)) {
                            var r = n(i.details, t);
                            r && (c.logger.log("Adjusting PTS using last level due to CC increase within current level"), a(r.start, t))
                        }
                    }

                    function u(t, i) {
                        if (i && i.fragments.length) {
                            if (!t.hasProgramDateTime || !i.hasProgramDateTime) return;
                            var r = i.fragments[0].programDateTime,
                                s = t.fragments[0].programDateTime,
                                o = (s - r) / 1e3 + i.fragments[0].start;
                            e.isFinite(o) && (c.logger.log("adjusting PTS using programDateTime delta, sliding:" + o.toFixed(3)), a(o, t))
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var h = i("./src/utils/binary-search.js"),
                        c = i("./src/utils/logger.js");
                    t.findFirstFragWithCC = r, t.findFragWithCC = s, t.shouldAlignOnDiscontinuities = o, t.findDiscontinuousReferenceFrag = n, t.adjustPts = a, t.alignStream = l, t.alignDiscontinuities = d, t.alignPDT = u
                }).call(this, i("./src/polyfills/number.js").Number)
            },
            "./src/utils/ewma-bandwidth-estimator.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/utils/ewma.js"),
                    s = function() {
                        function e(e, t, i, s) {
                            this.hls = e, this.defaultEstimate_ = s, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new r["default"](t), this.fast_ = new r["default"](i)
                        }
                        return e.prototype.sample = function(e, t) {
                            e = Math.max(e, this.minDelayMs_);
                            var i = 8e3 * t / e,
                                r = e / 1e3;
                            this.fast_.sample(r, i), this.slow_.sample(r, i)
                        }, e.prototype.canEstimate = function() {
                            var e = this.fast_;
                            return e && e.getTotalWeight() >= this.minWeight_
                        }, e.prototype.getEstimate = function() {
                            return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
                        }, e.prototype.destroy = function() {}, e
                    }();
                t["default"] = s
            },
            "./src/utils/ewma.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                    function e(e) {
                        this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0, this.estimate_ = 0, this.totalWeight_ = 0
                    }
                    return e.prototype.sample = function(e, t) {
                        var i = Math.pow(this.alpha_, e);
                        this.estimate_ = t * (1 - i) + i * this.estimate_, this.totalWeight_ += e
                    }, e.prototype.getTotalWeight = function() {
                        return this.totalWeight_
                    }, e.prototype.getEstimate = function() {
                        if (this.alpha_) {
                            var e = 1 - Math.pow(this.alpha_, this.totalWeight_);
                            return this.estimate_ / e
                        }
                        return this.estimate_
                    }, e
                }();
                t["default"] = r
            },
            "./src/utils/get-self-scope.js": function(e, t, i) {
                "use strict";

                function r() {
                    return "undefined" == typeof window ? self : window
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getSelfScope = r
            },
            "./src/utils/logger.js": function(e, t, i) {
                "use strict";

                function r() {}

                function s(e, t) {
                    return t = "[" + e + "] > " + t
                }

                function o(e) {
                    var t = u.console[e];
                    return t ? function() {
                        for (var i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r];
                        i[0] && (i[0] = s(e, i[0])), t.apply(u.console, i)
                    } : r
                }

                function n(e) {
                    for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                    t.forEach(function(t) {
                        d[t] = e[t] ? e[t].bind(e) : o(t)
                    })
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = i("./src/utils/get-self-scope.js"),
                    l = {
                        trace: r,
                        debug: r,
                        log: r,
                        warn: r,
                        info: r,
                        error: r
                    },
                    d = l,
                    u = a.getSelfScope();
                t.enableLogs = function(e) {
                    if (!0 === e || "object" == typeof e) {
                        n(e, "debug", "log", "info", "warn", "error");
                        try {
                            d.log()
                        } catch (t) {
                            d = l
                        }
                    } else d = l
                }, t.logger = d
            },
            "./src/utils/mediakeys-helper.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                    return "undefined" != typeof window && window.navigator && window.navigator.requestMediaKeySystemAccess ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator) : null
                }();
                t.requestMediaKeySystemAccess = r
            },
            "./src/utils/mediasource-helper.js": function(e, t, i) {
                "use strict";

                function r() {
                    if ("undefined" != typeof window) return window.MediaSource || window.WebKitMediaSource
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getMediaSource = r
            },
            "./src/utils/output-filter.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                    function e(e, t) {
                        this.timelineController = e, this.trackName = t, this.startTime = null, this.endTime = null, this.screen = null
                    }
                    return e.prototype.dispatchCue = function() {
                        null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen), this.startTime = null)
                    }, e.prototype.newCue = function(e, t, i) {
                        (null === this.startTime || this.startTime > e) && (this.startTime = e), this.endTime = t, this.screen = i, this.timelineController.createCaptionsTrack(this.trackName)
                    }, e
                }();
                t["default"] = r
            },
            "./src/utils/texttrack-utils.js": function(e, t, i) {
                "use strict";

                function r(e, t) {
                    var i = null;
                    try {
                        i = new window.Event("addtrack")
                    } catch (r) {
                        i = document.createEvent("Event"), i.initEvent("addtrack", !1, !1)
                    }
                    i.track = e, t.dispatchEvent(i)
                }

                function s(e) {
                    if (e && e.cues)
                        for (; e.cues.length > 0;) e.removeCue(e.cues[0])
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.sendAddTrackEvent = r, t.clearCurrentCues = s
            },
            "./src/utils/time-ranges.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = {
                    toString: function(e) {
                        for (var t = "", i = e.length, r = 0; r < i; r++) t += "[" + e.start(r).toFixed(3) + "," + e.end(r).toFixed(3) + "]";
                        return t
                    }
                };
                t["default"] = r
            },
            "./src/utils/vttcue.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = function() {
                    function e(e) {
                        return "string" == typeof e && (!!o[e.toLowerCase()] && e.toLowerCase())
                    }

                    function t(e) {
                        return "string" == typeof e && (!!n[e.toLowerCase()] && e.toLowerCase())
                    }

                    function i(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var i = arguments[t];
                            for (var r in i) e[r] = i[r]
                        }
                        return e
                    }

                    function r(r, o, n) {
                        var a = this,
                            l = function() {
                                if ("undefined" != typeof navigator) return /MSIE\s8\.0/.test(navigator.userAgent)
                            }(),
                            d = {};
                        l ? a = document.createElement("custom") : d.enumerable = !0, a.hasBeenReset = !1;
                        var u = "",
                            h = !1,
                            c = r,
                            f = o,
                            p = n,
                            v = null,
                            g = "",
                            m = !0,
                            y = "auto",
                            _ = "start",
                            b = 50,
                            E = "middle",
                            S = 50,
                            w = "middle";
                        if (Object.defineProperty(a, "id", i({}, d, {
                                get: function() {
                                    return u
                                },
                                set: function(e) {
                                    u = "" + e
                                }
                            })), Object.defineProperty(a, "pauseOnExit", i({}, d, {
                                get: function() {
                                    return h
                                },
                                set: function(e) {
                                    h = !!e
                                }
                            })), Object.defineProperty(a, "startTime", i({}, d, {
                                get: function() {
                                    return c
                                },
                                set: function(e) {
                                    if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
                                    c = e, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(a, "endTime", i({}, d, {
                                get: function() {
                                    return f
                                },
                                set: function(e) {
                                    if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
                                    f = e, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(a, "text", i({}, d, {
                                get: function() {
                                    return p
                                },
                                set: function(e) {
                                    p = "" + e, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(a, "region", i({}, d, {
                                get: function() {
                                    return v
                                },
                                set: function(e) {
                                    v = e, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(a, "vertical", i({}, d, {
                                get: function() {
                                    return g
                                },
                                set: function(t) {
                                    var i = e(t);
                                    if (!1 === i) throw new SyntaxError("An invalid or illegal string was specified.");
                                    g = i, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(a, "snapToLines", i({}, d, {
                                get: function() {
                                    return m
                                },
                                set: function(e) {
                                    m = !!e, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(a, "line", i({}, d, {
                                get: function() {
                                    return y
                                },
                                set: function(e) {
                                    if ("number" != typeof e && e !== s) throw new SyntaxError("An invalid number or illegal string was specified.");
                                    y = e, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(a, "lineAlign", i({}, d, {
                                get: function() {
                                    return _
                                },
                                set: function(e) {
                                    var i = t(e);
                                    if (!i) throw new SyntaxError("An invalid or illegal string was specified.");
                                    _ = i, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(a, "position", i({}, d, {
                                get: function() {
                                    return b
                                },
                                set: function(e) {
                                    if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
                                    b = e, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(a, "positionAlign", i({}, d, {
                                get: function() {
                                    return E
                                },
                                set: function(e) {
                                    var i = t(e);
                                    if (!i) throw new SyntaxError("An invalid or illegal string was specified.");
                                    E = i, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(a, "size", i({}, d, {
                                get: function() {
                                    return S
                                },
                                set: function(e) {
                                    if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
                                    S = e, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(a, "align", i({}, d, {
                                get: function() {
                                    return w
                                },
                                set: function(e) {
                                    var i = t(e);
                                    if (!i) throw new SyntaxError("An invalid or illegal string was specified.");
                                    w = i, this.hasBeenReset = !0
                                }
                            })), a.displayState = undefined, l) return a
                    }
                    if ("undefined" != typeof window && window.VTTCue) return window.VTTCue;
                    var s = "auto",
                        o = {
                            "": !0,
                            lr: !0,
                            rl: !0
                        },
                        n = {
                            start: !0,
                            middle: !0,
                            end: !0,
                            left: !0,
                            right: !0
                        };
                    return r.prototype.getCueAsHTML = function() {
                        return window.WebVTT.convertCueToDOMTree(window, this.text)
                    }, r
                }()
            },
            "./src/utils/vttparser.js": function(e, t, i) {
                "use strict";

                function r() {
                    this.window = window, this.state = "INITIAL", this.buffer = "", this.decoder = new u, this.regionList = []
                }

                function s(e) {
                    function t(e, t, i, r) {
                        return 3600 * (0 | e) + 60 * (0 | t) + (0 | i) + (0 | r) / 1e3
                    }
                    var i = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
                    return i ? i[3] ? t(i[1], i[2], i[3].replace(":", ""), i[4]) : i[1] > 59 ? t(i[1], i[2], 0, i[4]) : t(0, i[1], i[2], i[4]) : null
                }

                function o() {
                    this.values = Object.create(null)
                }

                function n(e, t, i, r) {
                    var s = r ? e.split(r) : [e];
                    for (var o in s)
                        if ("string" == typeof s[o]) {
                            var n = s[o].split(i);
                            if (2 === n.length) {
                                var a = n[0],
                                    l = n[1];
                                t(a, l)
                            }
                        }
                }

                function a(e, t, i) {
                    function r() {
                        var t = s(e);
                        if (null === t) throw new Error("Malformed timestamp: " + l);
                        return e = e.replace(/^[^\sa-zA-Z-]+/, ""), t
                    }

                    function a() {
                        e = e.replace(/^\s+/, "")
                    }
                    var l = e;
                    if (a(), t.startTime = r(), a(), "--\x3e" !== e.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + l);
                    e = e.substr(3), a(), t.endTime = r(), a(),
                        function(e, t) {
                            var r = new o;
                            n(e, function(e, t) {
                                switch (e) {
                                    case "region":
                                        for (var s = i.length - 1; s >= 0; s--)
                                            if (i[s].id === t) {
                                                r.set(e, i[s].region);
                                                break
                                            } break;
                                    case "vertical":
                                        r.alt(e, t, ["rl", "lr"]);
                                        break;
                                    case "line":
                                        var o = t.split(","),
                                            n = o[0];
                                        r.integer(e, n), r.percent(e, n) && r.set("snapToLines", !1), r.alt(e, n, ["auto"]), 2 === o.length && r.alt("lineAlign", o[1], ["start", c, "end"]);
                                        break;
                                    case "position":
                                        o = t.split(","), r.percent(e, o[0]), 2 === o.length && r.alt("positionAlign", o[1], ["start", c, "end", "line-left", "line-right", "auto"]);
                                        break;
                                    case "size":
                                        r.percent(e, t);
                                        break;
                                    case "align":
                                        r.alt(e, t, ["start", c, "end", "left", "right"])
                                }
                            }, /:/, /\s/), t.region = r.get("region", null), t.vertical = r.get("vertical", "");
                            var s = r.get("line", "auto");
                            "auto" === s && -1 === h.line && (s = -1), t.line = s, t.lineAlign = r.get("lineAlign", "start"), t.snapToLines = r.get("snapToLines", !0),
                                t.size = r.get("size", 100), t.align = r.get("align", c);
                            var a = r.get("position", "auto");
                            "auto" === a && 50 === h.position && (a = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50), t.position = a
                        }(e, t)
                }

                function l(e) {
                    return e.replace(/<br(?: \/)?>/gi, "\n")
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var d = i("./src/utils/vttcue.js"),
                    u = function() {
                        return {
                            decode: function(e) {
                                if (!e) return "";
                                if ("string" != typeof e) throw new Error("Error - expected string data.");
                                return decodeURIComponent(encodeURIComponent(e))
                            }
                        }
                    };
                o.prototype = {
                    set: function(e, t) {
                        this.get(e) || "" === t || (this.values[e] = t)
                    },
                    get: function(e, t, i) {
                        return i ? this.has(e) ? this.values[e] : t[i] : this.has(e) ? this.values[e] : t
                    },
                    has: function(e) {
                        return e in this.values
                    },
                    alt: function(e, t, i) {
                        for (var r = 0; r < i.length; ++r)
                            if (t === i[r]) {
                                this.set(e, t);
                                break
                            }
                    },
                    integer: function(e, t) {
                        /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
                    },
                    percent: function(e, t) {
                        return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t), !0)
                    }
                };
                var h = new d["default"](0, 0, 0),
                    c = "middle" === h.align ? "middle" : "center";
                t.fixLineBreaks = l, r.prototype = {
                    parse: function(e) {
                        function t() {
                            var e = i.buffer,
                                t = 0;
                            for (e = l(e); t < e.length && "\r" !== e[t] && "\n" !== e[t];) ++t;
                            var r = e.substr(0, t);
                            return "\r" === e[t] && ++t, "\n" === e[t] && ++t, i.buffer = e.substr(t), r
                        }
                        var i = this;
                        e && (i.buffer += i.decoder.decode(e, {
                            stream: !0
                        }));
                        try {
                            var r = void 0;
                            if ("INITIAL" === i.state) {
                                if (!/\r\n|\n/.test(i.buffer)) return this;
                                r = t();
                                var s = r.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                                if (!s || !s[0]) throw new Error("Malformed WebVTT signature.");
                                i.state = "HEADER"
                            }
                            for (var o = !1; i.buffer;) {
                                if (!/\r\n|\n/.test(i.buffer)) return this;
                                switch (o ? o = !1 : r = t(), i.state) {
                                    case "HEADER":
                                        /:/.test(r) ? function(e) {
                                            n(e, function(e, t) {}, /:/)
                                        }(r) : r || (i.state = "ID");
                                        continue;
                                    case "NOTE":
                                        r || (i.state = "ID");
                                        continue;
                                    case "ID":
                                        if (/^NOTE($|[ \t])/.test(r)) {
                                            i.state = "NOTE";
                                            break
                                        }
                                        if (!r) continue;
                                        if (i.cue = new d["default"](0, 0, ""), i.state = "CUE", -1 === r.indexOf("--\x3e")) {
                                            i.cue.id = r;
                                            continue
                                        }
                                    case "CUE":
                                        try {
                                            a(r, i.cue, i.regionList)
                                        } catch (h) {
                                            i.cue = null, i.state = "BADCUE";
                                            continue
                                        }
                                        i.state = "CUETEXT";
                                        continue;
                                    case "CUETEXT":
                                        var u = -1 !== r.indexOf("--\x3e");
                                        if (!r || u && (o = !0)) {
                                            i.oncue && i.oncue(i.cue), i.cue = null, i.state = "ID";
                                            continue
                                        }
                                        i.cue.text && (i.cue.text += "\n"), i.cue.text += r;
                                        continue;
                                    case "BADCUE":
                                        r || (i.state = "ID");
                                        continue
                                }
                            }
                        } catch (h) {
                            "CUETEXT" === i.state && i.cue && i.oncue && i.oncue(i.cue), i.cue = null, i.state = "INITIAL" === i.state ? "BADWEBVTT" : "BADCUE"
                        }
                        return this
                    },
                    flush: function() {
                        var e = this;
                        try {
                            if (e.buffer += e.decoder.decode(), (e.cue || "HEADER" === e.state) && (e.buffer += "\n\n", e.parse()), "INITIAL" === e.state) throw new Error("Malformed WebVTT signature.")
                        } catch (t) {
                            throw t
                        }
                        return e.onflush && e.onflush(), this
                    }
                }, t["default"] = r
            },
            "./src/utils/webvtt-parser.js": function(e, t, i) {
                "use strict";
                (function(e) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = i("./src/utils/vttparser.js"),
                        s = i("./src/demux/id3.js"),
                        o = function(e, t, i) {
                            return e.substr(i || 0, t.length) === t
                        },
                        n = function(t) {
                            var i = parseInt(t.substr(-3)),
                                r = parseInt(t.substr(-6, 2)),
                                s = parseInt(t.substr(-9, 2)),
                                o = t.length > 9 ? parseInt(t.substr(0, t.indexOf(":"))) : 0;
                            return e.isFinite(i) && e.isFinite(r) && e.isFinite(s) && e.isFinite(o) ? (i += 1e3 * r, i += 6e4 * s, i += 36e5 * o) : -1
                        },
                        a = function(e) {
                            for (var t = 5381, i = e.length; i;) t = 33 * t ^ e.charCodeAt(--i);
                            return (t >>> 0).toString()
                        },
                        l = function(e, t, i) {
                            var r = e[t],
                                s = e[r.prevCC];
                            if (!s || !s["new"] && r["new"]) return e.ccOffset = e.presentationOffset = r.start, void(r["new"] = !1);
                            for (; s && s["new"];) e.ccOffset += r.start - s.start, r["new"] = !1, r = s, s = e[r.prevCC];
                            e.presentationOffset = i
                        },
                        d = {
                            parse: function(e, t, i, d, u, h) {
                                var c, f = /\r\n|\n\r|\n|\r/g,
                                    p = s.utf8ArrayToStr(new Uint8Array(e)).trim().replace(f, "\n").split("\n"),
                                    v = "00:00.000",
                                    g = 0,
                                    m = 0,
                                    y = 0,
                                    _ = [],
                                    b = !0,
                                    E = new r["default"];
                                E.oncue = function(e) {
                                    var t = i[d],
                                        r = i.ccOffset;
                                    t && t["new"] && (m !== undefined ? r = i.ccOffset = t.start : l(i, d, y)), y && (r = y + i.ccOffset - i.presentationOffset), e.startTime += r - m, e.endTime += r - m, e.id = a(e.startTime.toString()) + a(e.endTime.toString()) + a(e.text), e.text = decodeURIComponent(encodeURIComponent(e.text)), e.endTime > 0 && _.push(e)
                                }, E.onparsingerror = function(e) {
                                    c = e
                                }, E.onflush = function() {
                                    if (c && h) return void h(c);
                                    u(_)
                                }, p.forEach(function(e) {
                                    if (b) {
                                        if (o(e, "X-TIMESTAMP-MAP=")) {
                                            b = !1, e.substr(16).split(",").forEach(function(e) {
                                                o(e, "LOCAL:") ? v = e.substr(6) : o(e, "MPEGTS:") && (g = parseInt(e.substr(7)))
                                            });
                                            try {
                                                t = t < 0 ? t + 8589934592 : t, g -= t, m = n(v) / 1e3, y = g / 9e4, -1 === m && (c = new Error("Malformed X-TIMESTAMP-MAP: " + e))
                                            } catch (i) {
                                                c = new Error("Malformed X-TIMESTAMP-MAP: " + e)
                                            }
                                            return
                                        }
                                        "" === e && (b = !1)
                                    }
                                    E.parse(e + "\n")
                                }), E.flush()
                            }
                        };
                    t["default"] = d
                }).call(this, i("./src/polyfills/number.js").Number)
            },
            "./src/utils/xhr-loader.js": function(e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/utils/logger.js"),
                    s = window.performance,
                    o = window.XMLHttpRequest,
                    n = function() {
                        function e(e) {
                            e && e.xhrSetup && (this.xhrSetup = e.xhrSetup)
                        }
                        return e.prototype.destroy = function() {
                            this.abort(), this.loader = null
                        }, e.prototype.abort = function() {
                            var e = this.loader;
                            e && 4 !== e.readyState && (this.stats.aborted = !0, e.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null
                        }, e.prototype.load = function(e, t, i) {
                            this.context = e, this.config = t, this.callbacks = i, this.stats = {
                                trequest: s.now(),
                                retry: 0
                            }, this.retryDelay = t.retryDelay, this.loadInternal()
                        }, e.prototype.loadInternal = function() {
                            var e, t = this.context;
                            e = this.loader = new o;
                            var i = this.stats;
                            i.tfirst = 0, i.loaded = 0;
                            var r = this.xhrSetup;
                            try {
                                if (r) try {
                                    r(e, t.url)
                                } catch (s) {
                                    e.open("GET", t.url, !0), r(e, t.url)
                                }
                                e.readyState || e.open("GET", t.url, !0)
                            } catch (s) {
                                return void this.callbacks.onError({
                                    code: e.status,
                                    text: s.message
                                }, t, e)
                            }
                            t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), e.send()
                        }, e.prototype.readystatechange = function(e) {
                            var t = e.currentTarget,
                                i = t.readyState,
                                o = this.stats,
                                n = this.context,
                                a = this.config;
                            if (!o.aborted && i >= 2)
                                if (window.clearTimeout(this.requestTimeout), 0 === o.tfirst && (o.tfirst = Math.max(s.now(), o.trequest)), 4 === i) {
                                    var l = t.status;
                                    if (l >= 200 && l < 300) {
                                        o.tload = Math.max(o.tfirst, s.now());
                                        var d = void 0,
                                            u = void 0;
                                        "arraybuffer" === n.responseType ? (d = t.response, u = d.byteLength) : (d = t.responseText, u = d.length), o.loaded = o.total = u;
                                        var h = {
                                            url: t.responseURL,
                                            data: d
                                        };
                                        this.callbacks.onSuccess(h, o, n, t)
                                    } else o.retry >= a.maxRetry || l >= 400 && l < 499 ? (r.logger.error(l + " while loading " + n.url), this.callbacks.onError({
                                        code: l,
                                        text: t.statusText
                                    }, n, t)) : (r.logger.warn(l + " while loading " + n.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, a.maxRetryDelay), o.retry++)
                                } else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), a.timeout)
                        }, e.prototype.loadtimeout = function() {
                            r.logger.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context, null)
                        }, e.prototype.loadprogress = function(e) {
                            var t = e.currentTarget,
                                i = this.stats;
                            i.loaded = e.loaded, e.lengthComputable && (i.total = e.total);
                            var r = this.callbacks.onProgress;
                            r && r(i, this.context, null, t)
                        }, e
                    }();
                t["default"] = n
            }
        })["default"]
    }),
    function() {
        var e = function() {
            this.http_protocol = !1, this.static_path = !1, this.i18n = !1, this.presetvisibility = {}, this.curvisibility = {}
        };
        e.prototype = {
            setHttpProtocol: function(e) {
                this.http_protocol = e
            },
            setStaticPath: function(e) {
                this.static_path = e
            },
            setI18n: function(e) {
                this.i18n = e
            },
            createElt: function(e, t, i, r) {
                var s = document.createElement(e);
                return t && (s.className = t), i && (s.id = i), r && (s.innerHTML = r), s
            },
            createInput: function(e, t, i, r, s) {
                var o = this.createElt("input", r, s);
                return o.name = t, o.type = e, i && (o.placeholder = i), o
            },
            hideElt: function(e) {
                e.style.display = "none"
            },
            showElt: function(e, t) {
                e.style.display = t || ""
            },
            presetHide: function(e) {
                if ("object" != typeof e) this.presetvisibility[e] = !1;
                else
                    for (var t in e) this.presetvisibility[e[t]] = !1
            },
            presetShow: function(e) {
                if ("object" != typeof e) this.presetvisibility[e] = !0;
                else
                    for (var t in e) this.presetvisibility[e[t]] = !0
            },
            applyVisibility: function() {
                for (var e in this.presetvisibility) this.presetvisibility.hasOwnProperty(e) && "undefined" == typeof this[e] || "undefined" != typeof this.curvisibility[e] && this.curvisibility[e] === this.presetvisibility[e] || (this.curvisibility[e] = this.presetvisibility[e], this.curvisibility[e] ? (this.showElt(this[e]), "pausebt" === e && this.addClass(this.video_div, "paused")) : (this.hideElt(this[e]), "pausebt" === e && this.removeClass(this.video_div, "paused")));
                this.presetvisibility = {}
            },
            createImgBtn: function(e, t, i) {
                var r = document.createElement("img");
                return r.src = this.static_path + "img/player/" + e, t && (r.title = this.unescape(this.i18n.__(t, i))), r
            },
            createIconSpan: function(e, t, i) {
                var r = document.createElement("span");
                return r.className = "player-icon-f pif-" + e, t && (r.title = this.unescape(this.i18n.__(t, i))), r
            },
            getHTML: function(e) {
                if (!e || !e.tagName) return "";
                var t = document.createElement("div");
                return t.appendChild(e.cloneNode(!1)), t.innerHTML
            },
            unescape: function(e) {
                var t = document.createElement("div");
                return t.innerHTML = e, 0 === t.childNodes.length ? "" : t.childNodes[0].nodeValue
            },
            addClass: function(e, t) {
                return e && e.classList && "function" == typeof e.classList.add ? (e.classList.add(t), e) : (console.error("can't add '" + t + "' to the given element ", e), e)
            },
            hasClass: function(e, t) {
                return e && e.classList && "function" == typeof e.classList.contains ? void 0 !== t && 0 !== t.length && e.classList.contains(t) : (console.error("can't check '" + t + "' presence in the given element ", e), !1)
            },
            removeClass: function(e, t) {
                if (!e || !e.classList || "function" != typeof e.classList.remove) return console.error("can't remove '" + t + "' in the given element ", e), e;
                if (void 0 === t || 0 === t.length) return console.log("no class to remove from the given element ", e), e;
                for (var i = t.split(" "), r = 0; r < i.length; r++) t = i[r], 0 !== t.length && e.classList.remove(t);
                return e
            }
        }, window.player = {}, window.player.uibase = e
    }(),
    function() {
        var e = function(e, t, i, r, s, o, n) {
            player.uibase.apply(this), this.skip_time = 5, console.log("new VideoAds", e, t, i, r, s, o, n), this.view_callback = e, this.stats_callback = t, this.mute_callback = null, this.video_url = i, this.click_url = r, this.title = s, this.domain = o, this.instant_skip = n, this.dsa_behalf = null, this.dsa_paid = null, this.dsa_click_through = null, this.full_video_click = !1, this.is_ios = !1, this.is_ios_desktop_mode = !1, this.use_ios_fake_play = !1, this.playing = !1, this.interval_update = !1, this.start_muted = !0, this.start_volume = 1, this.can_skip = !1, this.desktop_view = !1, this.use_autoplay = !1, this.vast_view_callback = [], this.vast_error_callback = [], this.vast_click_url = !1, this.vast_start_stats_callback = [], this.vast_firstQuartile_stats_callback = [], this.vast_midpoint_stats_callback = [], this.vast_thirdQuartile_stats_callback = [], this.vast_complete_stats_callback = [], this.vast_pause_stats_callback = [], this.vast_mute_stats_callback = [], this.vast_fullscreen_stats_callback = [], this.vast_skip_stats_callback = [], this.vast_progress_stats_callback = [], this.vast_click_tracking = [], /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream ? (this.is_ios = !0, /OS [1-9]_/.test(navigator.userAgent) && (this.use_ios_fake_play = !0)) : /Mac OS X/.test(navigator.userAgent) && navigator.maxTouchPoints > 2 && !window.MSStream && (this.is_ios = !0, this.is_ios_desktop_mode = !0)
        };
        e.prototype = new player.uibase, e.prototype.onClose = null, e.prototype.showPreferencesWarningTooltip = null, e.prototype.areCookiesFeatureDisabled = null, e.prototype.checkShowPreferencesWarningTooltip = function(e, t) {
            "function" == typeof this.areCookiesFeatureDisabled && this.areCookiesFeatureDisabled() && "function" == typeof this.showPreferencesWarningTooltip && this.showPreferencesWarningTooltip(e, t)
        }, e.prototype.onFullscreen = null, e.prototype.setMuteCallback = function(e) {
            this.mute_callback = e
        }, e.prototype.startWithSound = function() {
            this.start_muted = !1
        }, e.prototype.setStartVolume = function(e) {
            this.start_volume = e
        }, e.prototype.setDesktopView = function(e) {
            this.desktop_view = e
        }, e.prototype.setAutoplay = function(e) {
            e = "boolean" != typeof e || e, this.use_autoplay = e
        }, e.prototype.setFullVideoClick = function(e) {
            this.full_video_click = e
        }, e.prototype.getTitle = function() {
            return this.title ? this.title : this.domain
        }, e.prototype.getClickUrl = function() {
            var e = this.click_url;
            return e ? this.vast_click_url && this.vast_click_url.length > 10 && (e = e + "/" + btoa(this.vast_click_url).replace(/\//g, "_").replace(/\+/g, "-")) : e = this.vast_click_url, e
        }, e.prototype.setVideoUrl = function(e) {
            console.log("Set video url", e), this.video_url = e
        }, e.prototype.getVideoUrl = function() {
            return this.video_url
        }, e.prototype.setDSABehaulf = function(e) {
            this.dsa_behalf = e
        }, e.prototype.setDSAPaid = function(e) {
            this.dsa_paid = e
        }, e.prototype.setDSAClickThrough = function(e) {
            this.dsa_click_through = e
        }, e.prototype.addVastViewCallback = function(e) {
            this.vast_view_callback.push(e)
        }, e.prototype.addVastErrorCallback = function(e) {
            this.vast_error_callback.push(e)
        }, e.prototype.setVastClickUrl = function(e) {
            this.vast_click_url = e
        }, e.prototype.setTitle = function(e) {
            this.title = e
        }, e.prototype.addVastClickTrackingCallback = function(e) {
            this.vast_click_tracking.push(e)
        }, e.prototype.addVastStartStatsCallback = function(e) {
            this.vast_start_stats_callback.push(e)
        }, e.prototype.addVastFirstQuartileStatsCallback = function(e) {
            this.vast_firstQuartile_stats_callback.push(e)
        }, e.prototype.addVastMidpointStatsCallback = function(e) {
            this.vast_midpoint_stats_callback.push(e)
        }, e.prototype.addVastThirdQuartileStatsCallback = function(e) {
            this.vast_thirdQuartile_stats_callback.push(e)
        }, e.prototype.addVastCompleteStatsCallback = function(e) {
            this.vast_complete_stats_callback.push(e)
        }, e.prototype.addVastPauseStatsCallback = function(e) {
            this.vast_pause_stats_callback.push(e)
        }, e.prototype.addVastMuteStatsCallback = function(e) {
            this.vast_mute_stats_callback.push(e)
        }, e.prototype.addVastFullScreenStatsCallback = function(e) {
            this.vast_fullscreen_stats_callback.push(e)
        }, e.prototype.addVastSkipStatsCallback = function(e) {
            this.vast_skip_stats_callback.push(e)
        }, e.prototype.addVastProgressCallback = function(e, t) {
            var i = t.match(/^([0-9]+):([0-9]+):([0-9]+).([0-9]+)$/);
            if (5 == i.length) {
                var r = 3600 * parseInt(i[1]) + 60 * parseInt(i[2]) + parseInt(i[3]) + parseFloat("0." + i[4]);
                console.log("OffsetSec", r);
                var s = {};
                s.url = e, s.offset = r, this.vast_progress_stats_callback.push(s)
            }
        }, e.prototype.getAdDiv = function() {
            if (console.log("Video url", this.video_url), !this.video_url) return console.log("VideoAds : No video url to display. Skipping video ads"), !1;
            var e = this;
            this.video_ad_div = this.createElt("div", "videoad-base"), this.video_ad_div.addEventListener("dblclick", function(e) {
                e.stopPropagation(), console.log("DblClick catched")
            }), this.video_ad_div.addEventListener("click", function(e) {
                e.stopPropagation(), console.log("Click catched")
            }), this.video = this.createElt("video", "videoad-video"), this.is_ios ? this.use_ios_fake_play ? this.addClass(this.video, "videoad-nocontrol-ios") : this.video.setAttribute("playsinline", "") : this.video.controls = !1, this.use_autoplay && this.video.setAttribute("autoplay", ""), this.start_muted ? (console.log("VideoAds: Start the video muted"), this.video.muted = "muted") : (console.log("VideoAds: Start the video with sound (" + Math.round(100 * this.start_volume) + "%)"), this.video.volume = this.start_volume), this.video.autoplay = "autoplay", this.video.src = this.video_url, this.video_ad_div.appendChild(this.video), this.video.addEventListener("click", function() {
                console.log("Click video ads")
            }), this.video.addEventListener("playing", function() {
                xv.console.log("VideoAdEvent: Playing at " + e.video.currentTime + " / " + e.video.duration, "Player"), e.playing || (e.playing = !0, e.makeViewCallback()), e.redraw()
            }), this.video.addEventListener("error", function() {
                var t = "No details";
                this.error && (t = "error.code = '" + this.error.code + "', error.message = '" + this.error.message + "'"), xv.console.log("VideoAdEvent: error at " + e.video.currentTime + " / " + e.video.duration + " , " + t, "Player"), e.makeErrorCallBack(401, e.video.src, "HTML5Video error, Event at " + e.video.currentTime + " secs of " + e.video.duration + " sec total duration (" + t + ")"), e.closeAd()
            }), this.video.addEventListener("ended", function() {
                xv.console.log("VideoAdEvent: Ended at " + e.video.currentTime + " / " + e.video.duration, "Player"), e.makeStatsCallback("full"), e.makeVastCallback("vast_complete_stats_callback", 0), e.closeAd()
            }), this.video.addEventListener("timeupdate", function() {
                if (e.video) {
                    var t = Math.round(e.video.duration - e.video.currentTime);
                    if (t < 0 && (t = 0), t === NaN && (t = 0), e.video_status.innerHTML = t + " sec", e.redraw(), e.video.duration && !(e.video.duration < 1)) {
                        for (var i = 0; i < e.vast_progress_stats_callback.length; i++) {
                            var r = e.vast_progress_stats_callback[i];
                            if (!(e.video.currentTime < r.offset)) {
                                var s = createRequestObject();
                                s.open("GET", r.url, !0);
                                try {
                                    s.send()
                                } catch (n) {}
                                e.vast_progress_stats_callback.splice(i, 1)
                            }
                        }
                        var o = e.video.currentTime / e.video.duration * 100;
                        o > 25 && e.vast_firstQuartile_stats_callback && e.makeVastCallback("vast_firstQuartile_stats_callback", 0), o > 50 && e.vast_midpoint_stats_callback && e.makeVastCallback("vast_midpoint_stats_callback", 0), o > 50 && e.vast_thirdQuartile_stats_callback && e.makeVastCallback("vast_thirdQuartile_stats_callback", 0)
                    }
                }
            }), this.video_click_div = this.createElt("div", "videoad-click"), this.video_click_div.addEventListener("click", function(t) {
                t.stopPropagation(), e.video.paused ? e.video.play() : (e.video.pause(), e.makeVastCallback("vast_pause_stats_callback", 0), e.full_video_click && e.openAdClick())
            }), this.video_ad_div.appendChild(this.video_click_div), this.use_ios_fake_play || (this.progressbarbg = this.createElt("div", "progress-bar-bg"), this.video_ad_div.appendChild(this.progressbarbg), this.progressbar = this.createElt("div", "progress-bar"), this.progressbar.style.width = "100%", this.video_ad_div.appendChild(this.progressbar), this.progressbarcursor = this.createElt("div", "progress-bar-cursor"), this.progressbar.appendChild(this.progressbarcursor), this.leftbuttonsbar = this.createElt("div", "buttons-bar left"), this.leftbuttonsbar.addEventListener("touchstart", function(e) {
                e.stopPropagation()
            }), this.video_ad_div.appendChild(this.leftbuttonsbar), this.topleftbuttonsbar = this.createElt("div", "buttons-bar topleft"), this.topleftbuttonsbar.addEventListener("touchstart", function(e) {
                e.stopPropagation()
            }), this.video_ad_div.appendChild(this.topleftbuttonsbar), this.dsa_click_through && (this.adinformationbt = this.createElt("div", "info-button"), this.adinformationbt.innerHTML = "i", this.adinformationbt.addEventListener("click", function(t) {
                t.stopPropagation(), window.open(e.dsa_click_through, "_blank")
            }), this.topleftbuttonsbar.appendChild(this.adinformationbt)), document.querySelector("html").classList.contains("is-desktop") && (this.fakeplaybtn = this.createElt("span"), this.fakeplaybtn.appendChild(this.createIconSpan("play", "player.play")), this.fakeplaybtn.style.visibility = "hidden", this.leftbuttonsbar.appendChild(this.fakeplaybtn)), this.soundonbarbt = this.createElt("span"), this.soundonbarbt.appendChild(this.createIconSpan("sound-2 pif-sound-colored", "player.mute")), this.soundonbarbt.addEventListener("click", function(t) {
                t.stopPropagation(), e.video.muted = "muted", e.makeVastCallback("vast_mute_stats_callback", 0), e.redraw(), e.checkShowPreferencesWarningTooltip(e.leftbuttonsbar, {
                    iPosition: 1,
                    iSideMarginMobile: 10,
                    iSideMargin: 33,
                    sSideMarginUnit: "%",
                    iMaxScreenWidth: 25
                }), "function" == typeof e.mute_callback && e.mute_callback(!0)
            }), this.leftbuttonsbar.appendChild(this.soundonbarbt), this.soundoffbarbt = this.createElt("span"), this.soundoffbarbt.appendChild(this.createIconSpan("sound-mute-colored", "player.unmute")), this.soundoffbarbt.addEventListener("click", function(t) {
                t.stopPropagation(), e.video.muted = !1, e.redraw(), e.checkShowPreferencesWarningTooltip(e.leftbuttonsbar, {
                    iPosition: 1,
                    iSideMarginMobile: 10,
                    iSideMargin: 33,
                    sSideMarginUnit: "%",
                    iMaxScreenWidth: 25
                }), "function" == typeof e.mute_callback && e.mute_callback(!1)
            }), this.leftbuttonsbar.appendChild(this.soundoffbarbt), this.video_status = this.createElt("div", "videoad-status"), this.leftbuttonsbar.appendChild(this.video_status), this.rightbuttonsbar = this.createElt("div", "buttons-bar right"), this.video_ad_div.appendChild(this.rightbuttonsbar)), this.title_div = this.createElt("div", "videoad-title videoad-title-beforevideo noselect"), this.title_div.addEventListener("click", function(t) {
                t.stopPropagation(), e.openAdClick()
            }), this.title_txt = this.createElt("div", "videoad-title-txt"), this.title ? this.title_txt.innerHTML = this.title : this.title_txt.innerHTML = this.domain, this.title_div.appendChild(this.title_txt), this.title_icon = this.createElt("span"), this.title_icon.appendChild(this.createIconSpan("link", this.label)), this.title_icon.className = "videoad-title-icon", this.title_div.appendChild(this.title_icon), this.video_ad_div.appendChild(this.title_div), this.centerlink_superdiv = this.createElt("div", "videoad-centerlink-superdiv noselect"), this.centerlink_div = this.createElt("div", "videoad-centerlink noselect"), this.centerlink_div.addEventListener("click", function(t) {
                t.stopPropagation(), e.openAdClick()
            }), this.centerlink_txt = this.createElt("div", "videoad-centerlink-txt"), this.centerlink_txt.innerHTML = this.i18n.__("player.visit_site", null, "Visit site"), this.centerlink_div.appendChild(this.centerlink_txt), this.centerlink_icon = this.createElt("span"), this.centerlink_icon.appendChild(this.createIconSpan("link", this.label)), this.centerlink_icon.className = "videoad-centerlink-icon", this.centerlink_div.appendChild(this.centerlink_icon), this.centerlink_superdiv.appendChild(this.centerlink_div), this.video_ad_div.appendChild(this.centerlink_superdiv), this.skip_button = this.createElt("div", "videoad-skip"), this.video_ad_div.appendChild(this.skip_button), this.skip_button.setAttribute("id", "anc-tst-skip_ad-btn"), this.skip_button_txt = this.createElt("div", "videoad-skip-txt noselect"), this.skip_button.appendChild(this.skip_button_txt), this.interval_update = setInterval(function() {
                return e.playing ? !e.instant_skip && e.video.currentTime < e.skip_time ? void(e.skip_button_txt.innerHTML = e.i18n.__("player.can_skip_in_sec", {
                    "%nb_secs%": Math.floor(e.skip_time - e.video.currentTime + 1).toString()
                }, "Can skip in %nb_secs% sec")) : (clearInterval(e.interval_update), e.skip_button_txt.innerHTML = e.i18n.__("player.skip_ad", null, "Skip ad") + " " + e.getHTML(e.createIconSpan("step-forward")), e.skip_button.addEventListener("click", function(t) {
                    t.stopPropagation(), e.makeStatsCallback("skip"), e.makeVastCallback("vast_skip_stats_callback", 0), e.closeAd()
                }), e.addClass(e.skip_button, "skippable"), void(e.can_skip = !0)) : void(e.skip_button_txt.innerHTML = e.i18n.__("player.loading", null, "Loading..."))
            }, 200), this.use_ios_fake_play ? this.ios_interval = setInterval(function() {
                if (e.video.duration) {
                    if (e.video.currentTime - .1 >= e.video.duration) return e.makeStatsCallback("full"), void e.closeAd();
                    e.playing = !0, e.video.currentTime = e.video.currentTime + .033
                }
            }, 33) : this.video.play()["catch"](function(e) {}), this.skip_timeout = setTimeout(function() {
                console.log("Skip timeout"), e.playing || (e.makeStatsCallback("error"), e.closeAd()), e.can_skip || (console.log("Wahou .. skip can't skip after 15 sec"), e.makeStatsCallback("error"), e.closeAd())
            }, 15e3), this.redraw(), this.redraw_internal = setInterval(function() {
                e.redraw()
            }, 300);
            for (var t = 0; t < this.vast_view_callback.length; t++) {
                var i = createRequestObject(),
                    r = this.vast_view_callback[t];
                i.open("GET", r, !0);
                try {
                    i.send()
                } catch (s) {}
            }
            return xv.console.log("VideoAds : div loaded", "Player"), this.video_ad_div
        }, e.prototype.openAdClick = function() {
            this.makeVastCallback("vast_click_tracking", 0), this.video.pause();
            var e = this.getClickUrl();
            window.open(e, "_blank")
        }, e.prototype.redraw = function() {
            var e = (this.video_ad_div.offsetWidth, this.video_ad_div.offsetHeight, this.getDrawResizeCoef()),
                t = 1.4;
            this.desktop_view && (t = 1), this.is_new_iphone && (t = 1.5);
            var i = function(t, i, r) {
                    t.style.width = Math.floor(i * e) + "px", r && (t.style.height = Math.floor(r * e) + "px")
                },
                r = function(t) {
                    for (var i = [], r = 1; r < arguments.length; r++) i.push(Math.floor(arguments[r] * e) + "px");
                    t.style.padding = i.join(" ")
                },
                s = function(e, t, s) {
                    i(e, t, s);
                    for (var o = [e], n = 3; n < arguments.length; n++) o.push(arguments[n]);
                    r.apply(this, o)
                };
            resizeAndPadIconBtn = function(t, i) {
                for (var r = [t, i, i], o = 2; o < arguments.length; o++) r.push(arguments[o]);
                s.apply(this, r), t.style.fontSize = Math.floor(i * e) + "px", t.style.lineHeight = Math.floor(i * e) + "px"
            };
            var o = this.desktop_view ? 10 : 5,
                n = this.desktop_view ? 14 : 7,
                a = function(e) {
                    resizeAndPadIconBtn(e, 30 * t, o * t, n * t)
                },
                l = 2.5;
            this.desktop_view && (l = 3.5), this.progressbarbg.style.height = Math.max(this.leftbuttonsbar.offsetHeight, this.rightbuttonsbar.offsetHeight) * l + "px", this.playbarbt && (a(this.playbarbt), this.video.paused ? this.playbarbt.style.display = "inline-block" : this.playbarbt.style.display = "none"), this.pausebarbt && (a(this.pausebarbt), this.video.paused ? this.pausebarbt.style.display = "none" : this.pausebarbt.style.display = "inline-block"), this.fakeplaybtn && s(this.fakeplaybtn, 26 * t, 26 * t, 5 * t, 7 * t), this.soundonbarbt && (a(this.soundonbarbt), this.video.muted ? this.soundonbarbt.style.display = "none" : this.soundonbarbt.style.display = "inline-block"), this.soundoffbarbt && (a(this.soundoffbarbt), this.video.muted ? this.soundoffbarbt.style.display = "inline-block" : this.soundoffbarbt.style.display = "none"), this.progressbar && (this.progressbar.style.bottom = this.leftbuttonsbar.offsetHeight + "px", this.progressbar.style.height = "0px"), this.leftbuttonsbar && (this.skip_button.style.bottom = .1 * (this.leftbuttonsbar.offsetHeight + this.progressbar.offsetHeight) + "px", this.video_status.style.fontSize = Math.max(12, Math.floor(30 / 2.8 * t * e)) + "px", this.video_status.style.height = (30 + 2 * o) * t * e + "px", this.video_status.style.lineHeight = (30 + 2 * o) * t * e + "px", this.centerlink_superdiv.style.bottom = this.progressbar.offsetHeight + this.skip_button.offsetHeight + "px")
        }, e.prototype.closeAd = function() {
            clearInterval(this.interval_update), this.ios_interval && clearInterval(this.ios_interval), this.redraw_internal && clearInterval(this.redraw_internal), this.video.pause(), delete this.video, this.onClose()
        }, e.prototype.makeViewCallback = function() {
            if (this.view_callback) {
                var e = createRequestObject();
                e.open("GET", this.view_callback, !0), e.withCredentials = !0, e.onreadystatechange = function() {
                    4 === e.readyState && 200 === e.status && console.log("View callback done")
                };
                try {
                    e.send()
                } catch (t) {
                    return
                }
                this.makeVastCallback("vast_start_stats_callback", 0)
            }
        }, e.prototype.makeErrorCallBack = function(e, t, i) {
            i || (i = "");
            var r = !1;
            if (e) {
                var s = {};
                s.code = e, s.url = t, s.error_txt = i, r = JSON.stringify(s)
            }
            this.makeStatsCallback("error", r), this.makeVastCallback("vast_error_callback", e, "Url " + t + " , " + i)
        }, e.prototype.makeVastCallback = function(e, t, i) {
            if ("undefined" == typeof this[e]) return void console.log("VideoAds : Vast " + e + " doesn't exist");
            if (this[e]) {
                for (var r = 0; r < this[e].length; r++) {
                    var s = this[e][r];
                    t && (s = s.replace(/\[ERRORCODE\]/, t + "&errortxt=" + encodeURI(i)));
                    var o = createRequestObject();
                    o.open("GET", s, !0), o.withCredentials = !0;
                    try {
                        o.send()
                    } catch (n) {
                        return
                    }
                }
                this[e] = !1
            }
        }, e.prototype.makeStatsCallback = function(e, t) {
            if (this.stats_callback) {
                var i = 0,
                    r = 0;
                this.video && (i = this.video.currentTime, r = this.video.duration);
                var s = this.stats_callback + e + "-" + i + "-" + r;
                t && (s = s + "/" + encodeURIComponent(t));
                var o = createRequestObject();
                o.open("GET", s, !0), o.onreadystatechange = function() {
                    4 === o.readyState && 200 === o.status && console.log("Stats callback done")
                };
                try {
                    o.send()
                } catch (n) {
                    return
                }
            }
        }, e.prototype.formatDuration = function(e) {
            var t = Math.floor(e / 60),
                i = Math.floor(e - 60 * t);
            return i < 10 && (i = "0" + i), t < 10 && (t = "0" + t), t + ":" + i
        }, e.prototype.getDrawMinSize = function() {
            var e;
            return this.desktop_view ? (e = this.video_ad_div.offsetHeight, this.video_ad_div.offsetWidth < e && (e = this.video_ad_div.offsetWidth)) : (e = window.innerHeight, window.innerWidth < e && (e = window.innerWidth)), e
        }, e.prototype.getDrawButtonMargin = function() {
            var e = this.getDrawMinSize();
            return this.isFullScreen ? Math.floor(.04 * e) : Math.floor(.06 * e)
        }, e.prototype.getDrawResizeCoef = function() {
            if (this.desktop_view) return .8;
            var e;
            return e = this.is_new_iphone && this.is_ipad ? this.getDrawMinSize() / 900 : this.getDrawMinSize() / 550, e > 1.2 && (e = 1.2), e
        }, window.player.videoads = e
    }();
var oEvents = {},
    PinchManager = function(e) {
        var t = "object" == typeof e;
        this.aEvents = [], this.iPrevDiff = -1, this.iStartDiff = -1, this.bIsUse = !1, this.$target = t && "undefined" != typeof e.$target ? e.$target : document.body, this.fnBeforePinch = t && "function" == typeof e.fnBeforePinch ? e.fnBeforePinch : null, this.fnPinchUp = t && "function" == typeof e.fnPinchUp ? e.fnPinchUp : null, this.fnPinchDown = t && "function" == typeof e.fnPinchDown ? e.fnPinchDown : null, this.fnAfterPinch = t && "function" == typeof e.fnAfterPinch ? e.fnAfterPinch : null
    };
PinchManager.prototype = {
    setIsUse: function(e) {
        this.bIsUse = e
    },
    getIsUse: function() {
        return this.bIsUse
    },
    addPinchEvents: function() {
        var e = this;
        "undefined" == typeof oEvents.pinchManager && (oEvents.pinchManager = {
            pointerdown: function(t) {
                "touch" === t.pointerType && (e.$target.style.touchAction = "none", e.aEvents.push(t), 2 === e.aEvents.length && (e.setIsUse(!0), null !== e.fnBeforePinch && e.fnBeforePinch()))
            },
            pointermove: function(t) {
                for (var i = 0; i < e.aEvents.length; i++)
                    if (t.pointerId === e.aEvents[i].pointerId) {
                        e.aEvents[i] = t;
                        break
                    } if (2 === e.aEvents.length) {
                    var r = Math.floor(Math.abs(e.aEvents[0].clientX - e.aEvents[1].clientX)); - 1 === e.iStartDiff && (e.iStartDiff = r), e.iPrevDiff > 0 && (r > e.iPrevDiff && e.pinchUp(e.iStartDiff, r), r < e.iPrevDiff && e.pinchDown(e.iStartDiff, r)), e.iPrevDiff = r
                }
            },
            pointerup: function(t) {
                e.removeEvent(t), e.aEvents.length < 2 && (e.iPrevDiff = -1, e.iStartDiff = -1), e.aEvents = [], e.$target.style.touchAction = "auto", e.getIsUse() && "function" == typeof e.fnAfterPinch && (null !== e.fnAfterPinch && e.fnAfterPinch(), e.setIsUse(!1))
            }
        }), this.$target.addEventListener("pointerdown", oEvents.pinchManager.pointerdown), this.$target.addEventListener("pointermove", oEvents.pinchManager.pointermove), this.$target.addEventListener("pointerup", oEvents.pinchManager.pointerup), this.$target.addEventListener("pointercancel", oEvents.pinchManager.pointerup), this.$target.addEventListener("pointerout", oEvents.pinchManager.pointerup), this.$target.addEventListener("pointerleave", oEvents.pinchManager.pointerup)
    },
    removePinchEvents: function() {
        this.$target.removeEventListener("pointerdown", oEvents.pinchManager.pointerdown), this.$target.removeEventListener("pointermove", oEvents.pinchManager.pointermove), this.$target.removeEventListener("pointerup", oEvents.pinchManager.pointerup), this.$target.removeEventListener("pointercancel", oEvents.pinchManager.pointerup), this.$target.removeEventListener("pointerout", oEvents.pinchManager.pointerup), this.$target.removeEventListener("pointerleave", oEvents.pinchManager.pointerup)
    },
    removeEvent: function(e) {
        for (var t = 0; t < this.aEvents.length; t++)
            if (this.aEvents[t].pointerId === e.pointerId) {
                this.aEvents.splice(t, 1);
                break
            }
    },
    pinchUp: function(e, t) {
        null !== this.fnPinchUp ? this.fnPinchUp(e, t) : console.log("default pinchup")
    },
    pinchDown: function(e, t) {
        null !== this.fnPinchDown ? this.fnPinchDown(e, t) : console.log("default pinchdown")
    }
};
var S_F_COOKIES_PLAYER_PREFERENCES = "pp",
    PLAYER_OPTION = {
        FORCEQUALITY: "FORCEQUALITY",
        SQ: "SQ",
        MUTE: "MUTE",
        VOLUME: "VOLUME",
        FORCENOPICTURE: "FORCENOPICTURE",
        FORCENATIVEHLS: "FORCENATIVEHLS",
        AUTOPLAY: "AUTOPLAY",
        PLAUTOPLAY: "PLAUTOPLAY",
        CHROMECAST: "CHROMECAST",
        EXPANDED: "EXPANDED",
        FORCENOLOOP: "FORCENOLOOP"
    },
    aPlayerOptions = Object.keys(PLAYER_OPTION),
    HTML5Player = function(e, t) {
        if (this.global_div = document.getElementById(e), !this.global_div) return void alert("Internal Error: Unable to find Video HTML Tag");
        this.global_div.style.direction = "ltr";
        this.debug = !1, this.consolelog = "", this.player_init_time = this.getTime(), "undefined" == typeof window.console && (window.console = {}, window.console.log = function() {}), this.i18n = xv.i18n.getCatalog("xvplayer"), this.id_video = t, this.encoded_id_video = !1, this.video_title = !1, this.videoEndedDesktopMoreDiv = !1, this.bVideoEndedDesktopMoreDrawn = !1, this.videoEndedDesktopMoreContent = !1, this.url_low = "", this.url_high = "", this.url_hls = "", this.url_thumb = !1, this.url_thumb169 = !1, this.thumb_slide = !1, this.thumb_slide_big = !1, this.thumb_slide_min = !1, this.thumb_slide_type = HTML5Player.TYPE_SMALL, this.view_data = !1, this.touchseek_last_positions = [], this.touchseek_block_click = !1, this.id_cdn = !1, this.id_cdn_hls = !1, this.fake_player = !1, this.desktop_view = !1, this.related_array = [], this.sponsors = !1, this.bIsSheerSponsor = !1, this.uploader_name = !1, this.is_smarttv = !1, this.force_lq = !1, this.forceExpanded = !1, this.pending_seek = 0, this.seek_was_playing = !1, this.preloaded = !1,
            this.bRelatedLoaded = !1, this.bFullVidLinkDrawn = !1, this.plnextloaded = !1, this.plnexttimer = !1, this.plnexttime = 5, this.plnextclosed = !1, this.enableplautoplay = !0, this.bEnablePlAutoLoop = !1, this.bEnableShortAutoLoop = !0, this.is_embed = !1, this.bIsXnxxLogo = !1, this.bHasCommercialCom = !1, this.bCommercialComOver = !1, this.iCommercialComDuration = 10, this.video_url = "", this.forcenativehls = !1, this.forcenopreviewimg = !1, this.chromecastdetected = !1, this.ads_active_fithteenpercentborder = !1, this.http_protocol = "http", this.https_protocol = "http", this.static_path = "https://static-ss.xvideos-cdn.com/v3", "object" == typeof window.xv && "object" == typeof window.xv.conf && "object" == typeof window.xv.conf.domains && "string" == typeof window.xv.conf.domains["static"] && (this.static_path = window.xv.conf.domains["static"] + "/v3"), this.page_referer = !1, this.is_premium_site = !1, this.is_premium_video = !1, this.flashcode_available = !1, this.force_no_loop = !1, this.use_autoplay = !1, this.use_autoplay_setting = undefined, this.has_paused = !1, this.has_canplaythrough = !1, this.hide_play_timeout = 1e3, this.wakelock_available = navigator && "object" == typeof navigator.wakeLock && "function" == typeof navigator.wakeLock.request, this.wakelock_active = !1, this.wakelock = null, this.adsquare_picture_loaded = !1, this.isFullScreen = !1, this.isFakeFullScreen = !1, this.isPlaying = !1, this.isBuffering = !1, this.isExpanded = !1, this.firstTimeBuffered = !1, this.lastBufferTimestamp = 0, this.bufferingTimeoutTimer, this.isPlayError = !1, this.canPlay = !1, this.videoRatio = -1, this.bufferBlocked_timestamp = 0, this.bufferBlocked_lastvalue = !1, this.bufferBlocked_nbtime = 0, this.lastErrorRecovery = 0, this.pendingUrlRPCUpdate = !1, this.hlsjsLevelParsed = !1, this.global_div_OriginalParentNode = this.global_div.parentNode, this.lastKnownCurrentTime = 0, this.lastCurrentTimeCheck = 0, this.lastTouchSeekPosition = -1, this.playClicked = !1, this.showsponsor = !0, this.showmessage = !1, this.allow_showInfos = !1, this.allow_showInfosTimer = !1, this.showpausebt = !1, this.showsoundcontrol = !1, this.showbigthumb = !0, this.showparametersmenu = !1, this.showqualitiesmenu = !1, this.qualitiesmenubuttonlabel = "", this.showadvancedmenu = !1, this.showspeedmenu = !1, this.speed = 1, this.loopbtn, this.cursoroverprogressbar = !1, this.cursoroverplayer = !1, this.buffered_div_list = [], this.fragStats = [], this.fragStatsSended = !1, this.hlsNbError = 0, this.hlsLevelAutoForced = !1, this.PS4FirstSeekDone = !1, this.seek_bar_color = "#F00", this.showsubscribebt = !1, this.ad_loading_error = !1, this.total_video_played = 0, this.total_video_transfer = 0, this.report_video_played_sent = !1, this.debug_events = {}, this.thumb_slide_min_preload = {}, this.use_browser_controls = !1, this.is_ios = !1, this.is_ipad = !1, this.is_ios_desktop_mode = !1, this.is_new_ios_desktop_mode = !1, this.is_old_ios = !1, this.is_new_iphone = !1, this.is_safari = !1, this.is_ps4 = !1, this.is_android_app = !1, this.force_play_fullscreen = !1, this.support_native_hls = !1, this.support_hlsjs = !1, this.need_doubleclick_ad = !1, this.allow_touchseek = !1, this.is_touch_screen = "ontouchstart" in window || navigator.msMaxTouchPoints, this.use_hls = !1, this.use_native_hls = !1, this.use_parameter_menu = !0, this.is_fakeplayer_displayed = !1, this.is_flashplayer_displayed = !1, this.adblock_checked = !1, this.has_adblocker = !1, this.videoads_checked = !1, this.videoads = !1, this.videoads_loading = !1, this.block_popup = !1, this.extra_debug = !1, this.bEnableVolumeControl = !1, this.$fullVidEndLink = null, this.$fullVidTopLink = null, this.playlist = !1, this.player_init = !1, this.presetvisibility = {}, this.curvisibility = {}, this.sLocalStorageAutoNext = null, this.bPlautonext = !0, this.bIsPlNextAllowed = !0, this.iBigUiCoef = 1, this.bEventsIsRemoved = !1, this.oPlayerRatio = {
                $btn: null,
                aRatios: [.5625, -1, 1.3333, 1.7777],
                iCurrent: null
            }, this.iClickTimeLimit = 200, this.bSlowSeekIsInit = !1, this.bSlowSeekCanInstantInit = !1, this.bSlowSeekIsWaiting = !1, this.bSlowSeekWasPlaying = !1, this.sSlowSeekMode = "mouse"
    };
HTML5Player.prototype = {
    createElt: function(e, t, i, r) {
        var s = document.createElement(e);
        return t && (s.className = t), i && (s.id = i), r && (s.innerHTML = r), s
    },
    hideElt: function(e) {
        e && ("function" == typeof e.hide ? e.hide() : e.style.display = "none")
    },
    showElt: function(e, t) {
        e && ("function" == typeof e.show ? e.show() : e.style.display = t || "")
    },
    presetHide: function(e) {
        if ("object" != typeof e) this.presetvisibility[e] = !1;
        else
            for (var t in e) this.presetvisibility[e[t]] = !1
    },
    presetShow: function(e) {
        if ("object" != typeof e) this.presetvisibility[e] = !0;
        else
            for (var t in e) this.presetvisibility[e[t]] = !0
    },
    applyVisibility: function() {
        for (var e in this.presetvisibility) this.presetvisibility.hasOwnProperty(e) && "undefined" != typeof this[e] && ("undefined" != typeof this.curvisibility[e] && this.curvisibility[e] === this.presetvisibility[e] || (this.curvisibility[e] = this.presetvisibility[e], this.curvisibility[e] ? (this.showElt(this[e]), "pausebt" === e && this.addClass(this.video_div, "paused")) : (console.log("applyVisibility, hide", e), this.hideElt(this[e]), "pausebt" === e && this.removeClass(this.video_div, "paused"))));
        this.presetvisibility = {}
    },
    createImgBtn: function(e, t, i) {
        var r = document.createElement("img");
        return r.src = this.static_path + "img/player/" + e, t && (r.title = this.unescape(this.i18n.__(t, i))), r
    },
    createIconSpan: function(e, t, i) {
        var r = document.createElement("span");
        return r.className = "player-icon-f pif-" + e, t && (r.title = this.unescape(this.i18n.__(t, i))), r
    },
    getHTML: function(e) {
        if (!e || !e.tagName) return "";
        var t = document.createElement("div");
        return t.appendChild(e.cloneNode(!1)), t.innerHTML
    },
    unescape: function(e) {
        var t = document.createElement("div");
        return t.innerHTML = e, 0 === t.childNodes.length ? "" : t.childNodes[0].nodeValue
    },
    addClass: function(e, t) {
        return e && e.classList && "function" == typeof e.classList.add ? (e.classList.add(t), e) : (console.error("can't add '" + t + "' to the given element ", e), e)
    },
    hasClass: function(e, t) {
        return e && e.classList && "function" == typeof e.classList.contains ? void 0 !== t && 0 !== t.length && e.classList.contains(t) : (console.error("can't check '" + t + "' presence in the given element ", e), !1)
    },
    removeClass: function(e, t) {
        if (!e || !e.classList || "function" != typeof e.classList.remove) return console.error("can't remove '" + t + "' in the given element ", e), e;
        if (void 0 === t || 0 === t.length) return console.log("no class to remove from the given element ", e), e;
        for (var i = t.split(" "), r = 0; r < i.length; r++) t = i[r], 0 !== t.length && e.classList.remove(t);
        return e
    },
    appendToVideoDiv: function(e, t) {
        this.video_div.appendChild(e);
        var i = this;
        e.addEventListener("touchstart", function(e) {
            !0 === t && i.initSlowSeekStartWait(e, "touch"), e.stopPropagation()
        })
    },
    setVideoTitle: function(e) {
        this.video_title = e
    },
    setEncodedIdVideo: function(e) {
        this.encoded_id_video = e
    },
    setVideoEndedDesktopMore: function(e, t) {
        this.videoEndedDesktopMoreContent = e, this.videoEndedDesktopMoreInitFunc = t
    },
    setSponsors: function(e) {
        this.sponsors = e
    },
    setVideoUrlLow: function(e) {
        this.url_low = e
    },
    setVideoUrlHigh: function(e) {
        this.url_high = e
    },
    setVideoHLS: function(e) {
        this.url_hls = e
    },
    setThumbUrl: function(e) {
        this.url_thumb = e
    },
    setRelated: function(e) {
        this.related_array = e
    },
    setThumbSlide: function(e) {
        this.thumb_slide = e
    },
    setThumbSlideBig: function(e) {
        this.thumb_slide_big = e
    },
    setThumbSlideMinute: function(e) {
        this.thumb_slide_min = e
    },
    setThumbUrl169: function(e) {
        this.url_thumb169 = e
    },
    setIdCDN: function(e) {
        this.id_cdn = e
    },
    setIdCdnHLS: function(e) {
        this.id_cdn_hls = e
    },
    setFakePlayer: function(e) {
        this.fake_player = e
    },
    setDesktopiew: function(e) {
        this.desktop_view = e
    },
    setIsSmartTv: function(e) {
        this.is_smarttv = e
    },
    forceNativeHls: function(e) {
        this.forcenativehls = e
    },
    setUploaderName: function(e) {
        this.uploader_name = e
    },
    forceDoubleClickAd: function(e) {
        this.need_doubleclick_ad = e
    },
    setIsEmbed: function() {
        this.is_embed = !0
    },
    setIsXnxxLogo: function() {
        this.bIsXnxxLogo = !0
    },
    setHasCommercialCom: function() {
        this.bHasCommercialCom = !0
    },
    setVideoURL: function(e) {
        this.video_url = e
    },
    setActivateFithteenPercentBorder: function() {
        this.ads_active_fithteenpercentborder = !0
    },
    setHttps: function() {
        this.http_protocol = "https"
    },
    setCanUseHttps: function() {
        this.https_protocol = "https"
    },
    setStaticPath: function(e) {
        e && (this.static_path = e)
    },
    setSeekBarColor: function(e) {
        console.log("setSeekBarColor : " + e), this.seek_bar_color = e
    },
    setPageReferer: function(e) {
        this.page_referer = e
    },
    setIsPremiumSite: function() {
        this.is_premium_site = !0
    },
    setIsPremiumVideo: function() {
        this.is_premium_video = !0
    },
    setViewData: function(e) {
        this.view_data = e
    },
    setFlashCodeAvailable: function() {
        this.flashcode_available = !0
    },
    activateExtraDebug: function() {
        this.extra_debug = !0
    },
    setUseAutoplay: function(e) {
        console.log("setUseAutoplay", e), e = "boolean" != typeof e || e, this.use_autoplay = e
    },
    setPlaylist: function(e, t, i, r, s) {
        if (this.plprevbt && !(i.length <= 1)) {
            console.log("setPlaylist", e, t, i, r, s), this.playlist = {
                current: !1,
                prev: !1,
                next: !1,
                idx: 0,
                length: r || i.length
            };
            var o;
            for (o in i)
                if (i[o].id == this.id_video) {
                    "string" == typeof o && (o = parseInt(o)), this.playlist.current = i[o], o > 0 && (this.playlist.prev = i[o - 1]), o < i.length - 1 && (this.playlist.next = i[o + 1]);
                    break
                } if (!this.playlist.current) return void(this.playlist = !1);
            this.plprevbt && this.playlist.prev && (this.plprevbt.style.visibility = "visible", this.$plPrevBtIcon.title = this.unescape(this.i18n.__("player.previous_pl_video", {
                "%name%": '"' + this.playlist.prev.title_full + '"'
            }))), this.plnextbt && this.playlist.next && (this.plnextbt.style.visibility = "visible", this.$plNextBtIcon.title = this.unescape(this.i18n.__("player.next_pl_video", {
                "%name%": '"' + this.playlist.next.title_full + '"'
            }))), this.videotitlediv.innerHTML += '<br><span class="playlist"><span class="label">' + this.i18n.__("player.playlist") + ":</span> " + e + " (" + this.i18n.__("player.video_pos_in_nb", {
                "%current_video_index%": ((s || o) + 1).toString(),
                "%nb_videos%": this.playlist.length.toString()
            }) + ")</span>", this.isShortVideo() && (this.bEnablePlAutoLoop || (this.video.loop = !1, this.loopbtn && this.loopbtn.setChecked(!1))), this.updateBtVisibity(), this.redraw()
        }
    },
    getFullVideoUrl: function() {
        return "object" == typeof xv.conf.dyn && "object" == typeof xv.conf.dyn.full_video && "string" == typeof xv.conf.dyn.full_video.player_url ? xv.conf.dyn.full_video.player_url : null
    },
    getFullVideoEndCtaUrl: function() {
        return "object" == typeof xv.conf.dyn && "object" == typeof xv.conf.dyn.full_video && "string" == typeof xv.conf.dyn.full_video.player_end_cta_url ? xv.conf.dyn.full_video.player_end_cta_url : null
    },
    getFullVideoDuration: function() {
        return "object" == typeof xv.conf.dyn && "object" == typeof xv.conf.dyn.full_video && "string" == typeof xv.conf.dyn.full_video.duration ? xv.conf.dyn.full_video.duration : ""
    },
    getFullVideoThumb: function() {
        return "object" == typeof xv.conf.dyn && "object" == typeof xv.conf.dyn.full_video && "string" == typeof xv.conf.dyn.full_video.thumb ? xv.conf.dyn.full_video.thumb : null
    },
    getFullVideoBigThumb: function() {
        return "object" == typeof xv.conf.dyn && "object" == typeof xv.conf.dyn.full_video && "string" == typeof xv.conf.dyn.full_video.thumb_big ? xv.conf.dyn.full_video.thumb_big : null
    },
    getSponsorSheerUrl: function(e) {
        for (var t in this.sponsors) {
            var i = this.sponsors[t];
            if (this.bIsSheerSponsor = !1, i.isSheer) return this.bIsSheerSponsor = !0, this.sVidEndedFullVidText = this.getSheerSponsorLinkText(i, e), i.link
        }
        return null
    },
    initPlayer: function() {
        if (!this.player_init) {
            this.player_init = !0;
            var e = this;
            console.log("Useragent:" + navigator.userAgent.toLowerCase()), /Mac OS X/.test(navigator.userAgent) && navigator.maxTouchPoints > 2 && !window.MSStream && (this.is_ios_desktop_mode = !0, xv.console.log("iPad in Desktop mode detected", "Player"), (/Version\/1[8-9]/.test(navigator.userAgent) || /Version\/2[0-9]/.test(navigator.userAgent)) && (this.is_new_ios_desktop_mode = !0)), /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream ? (/iPad/.test(navigator.userAgent) && !window.MSStream ? (this.is_ipad = !0, console.log("is iPad")) : (this.is_ios = !0, console.log("is iOS")), /OS [1-9]_/.test(navigator.userAgent) ? (this.is_old_ios = !0, this.use_browser_controls = !0) : (this.use_browser_controls = !0, this.is_ipad || /OS 10_/.test(navigator.userAgent) || (console.log("iPhone iOS >= 11"), this.allow_touchseek = !0, this.use_browser_controls = !1), this.is_new_iphone = !0)) : !/android 4.[2-9]/.test(navigator.userAgent.toLowerCase()) || /chrome\/[4-9]/.test(navigator.userAgent.toLowerCase()) || /firefox/.test(navigator.userAgent.toLowerCase()) || /ubuntu /.test(navigator.userAgent.toLowerCase()) ? this.fullscreenSupported() || (xv.console.log("Fullscreen not supported, use browser controls", "Player"), this.use_browser_controls = !0) : (xv.console.log("Old browser detected", "Player"), this.use_browser_controls = !0), (/android 4.4/.test(navigator.userAgent.toLowerCase()) || /android [5-9]/.test(navigator.userAgent.toLowerCase()) || /android [1-2][0-9]/.test(navigator.userAgent.toLowerCase())) && (/chrome\/[4-9][0-9]/.test(navigator.userAgent.toLowerCase()) || /chrome\/[1-2][0-9][0-9]/.test(navigator.userAgent.toLowerCase()) || /firefox/.test(navigator.userAgent.toLowerCase())) ? (this.allow_touchseek = !0, console.log("allow TouchSeek")) : this.desktop_view && (console.log("Is a desktop"), this.allow_touchseek = !0), this.use_browser_controls && (this.allow_touchseek = !1), this.support_hlsjs = this.supportHLSjs(), (this.is_ios || this.is_ipad) && (this.support_hlsjs = !1, this.use_parameter_menu = !1);
            var t = document.createElement("video");
            if ("undefined" != typeof t.canPlayType && "" !== t.canPlayType("application/vnd.apple.mpegURL") && (xv.console.log("Support Native HLS", "Player"), this.support_native_hls = !0), this.desktop_view && -1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome") && (this.support_native_hls && (this.is_safari = !0, this.support_hlsjs = !1, xv.console.log("Safari do not support HLS.js", "Player")), !this.is_new_ios_desktop_mode && !this.fullscreenSupported())) return xv.console.log("Old safari browser, switch to Fake Player", "Player"), void this.drawFakePlayer();
            if (this.fake_player || "undefined" == typeof window.addEventListener) return xv.console.log("Seems to be a very old browser", "Player"), void this.drawFakePlayer();
            if ("undefined" != typeof t.canPlayType && "" === t.canPlayType('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')) return xv.console.log("This browser do not support MP4", "Player"), void this.drawFakePlayer();
            if (this.loadPreference(), /XXXAndroidApp/.test(navigator.userAgent) && (console.log("Android App"), this.is_android_app = !0), (/playstation 4 /.test(navigator.userAgent.toLowerCase()) || /playstation 4\//.test(navigator.userAgent.toLowerCase())) && (xv.console.log("Playstation 4 detected", "Player"), this.is_ps4 = !0), "" !== this.url_hls && (this.support_native_hls && (this.is_ios || this.is_ipad || this.is_safari || this.is_ps4 || this.forcenativehls) ? this.use_native_hls = !0 : this.support_hlsjs && (this.support_native_hls && this.forcenativehls ? this.use_native_hls = !0 : this.use_hls = !0)), this.desktop_view)
                if (this.is_smarttv) {
                    if (!this.supportDefaultHlsjs()) {
                        if (this.hasFlash()) return this.is_flashplayer_displayed = !0, void console.log("SmartTV with flash. Displaying Flash");
                        if (!this.support_native_hls && !/tizen /.test(navigator.userAgent.toLowerCase())) return xv.console.log("Tizen SmartTV", "Player"), void this.drawFakePlayer();
                        this.support_native_hls && "" !== this.url_hls && (this.use_native_hls = !0)
                    }
                } else if (!this.use_hls && !this.use_native_hls && this.hasFlash()) return xv.console.log("Old Desktop without HLS or native HLS. Displaying Flash", "Player"), void(this.is_flashplayer_displayed = !0);
            this.hasFullVideoUrlOrSheerSponsor() && (console.log("Short video auto replay disabled"), this.bEnableShortAutoLoop = !1), this.bEnableVolumeControl = this.desktop_view && !this.is_ios_desktop_mode, this.draw(), this.loadPreference(), this.loadVideoSrc(), this.setBuffering(!0), this.video.addEventListener("loadstart", function() {
                console.log("VideoEvent: loadstart"), e.canPlay = !1, e.detectPlaying(), e.updateBtVisibity()
            }), this.video.addEventListener("timeupdate", function() {
                1 !== e.video.networkState && 2 !== e.video.networkState || (e.detectPlaying(), e.updateDuration())
            }), this.video.addEventListener("progress", function() {
                1 !== e.video.networkState && 2 !== e.video.networkState || (e.detectPlaying(), e.updateDuration())
            }), this.video.addEventListener("play", function() {
                var t = "VideoEvent: play at " + e.video.currentTime + " / " + e.video.duration;
                console.log(t), e.detectPlaying(), e.updateBtVisibity(), e.is_ps4 && !e.PS4FirstSeekDone && (e.PS4FirstSeekDone = !0, e.seek(.5))
            }), this.video.addEventListener("seeking", function() {
                var t = "VideoEvent: seeking at " + e.video.currentTime + " / " + e.video.duration;
                console.log(t), e.canPlay = !1, e.detectPlaying(), e.updateBtVisibity()
            }), this.video.addEventListener("waiting", function() {
                xv.console.log("VideoEvent: Waiting", "Player"), e.detectPlaying(), e.updateBtVisibity()
            }), this.video.addEventListener("suspend", function() {
                var t = "VideoEvent: Suspend at " + e.video.currentTime + " / " + e.video.duration;
                console.log(t), e.canPlay = !0, e.detectPlaying(), e.updateBtVisibity()
            }), this.video.addEventListener("canplaythrough", function() {
                var t = "VideoEvent: Can Play Throught at " + e.video.currentTime + " / " + e.video.duration;
                console.log(t), e.canPlay = !0, e.checkNeedSeek(), e.detectPlaying(), e.updateBtVisibity(), e.has_canplaythrough = !0, e.useAutoplay() && e.startPlayInAutoPlay()
            }), this.video.addEventListener("canplay", function() {
                var t = "VideoEvent: Can Play at " + e.video.currentTime + " / " + e.video.duration;
                console.log(t), e.canPlay = !0, e.checkNeedSeek(), e.detectPlaying(), e.updateBtVisibity()
            }), this.video.addEventListener("playing", function() {
                var t = "VideoEvent: Playing at " + e.video.currentTime + " / " + e.video.duration;
                xv.console.log(t, "Player"), console.log(t), e.enableWakeLock(), e.showbigthumb = !1, e.preloaded = !0, e.errortimer && (clearTimeout(e.errortimer), delete e.errortimer), e.detectPlaying(), e.updateBtVisibity(), e.send_debug_event("playing")
            }), this.video.addEventListener("pause", function() {
                var t = "VideoEvent: Pause at " + e.video.currentTime + " / " + e.video.duration;
                xv.console.log(t, "Player"), console.log(t), e.disableWakeLock(), e.has_paused = !0, e.detectPlaying(), e.updateBtVisibity(), e.redraw()
            }), this.video.addEventListener("error", function() {
                var t = "VideoEvent: error at " + e.video.currentTime + " / " + e.video.duration;
                xv.console.log(t, "Player"), console.log(t), e.disableWakeLock(), 3 === e.video.networkState && e.recoverError(), e.detectPlaying(), e.updateBtVisibity()
            }), this.video.addEventListener("ended", function() {
                console.log("VideoEvent: Ended at " + e.video.currentTime + " / " + e.video.duration), e.disableWakeLock(), !e.video.loop && e.isFullScreen && e.fullscreen(), e.detectPlaying(), e.updateBtVisibity()
            }), this.video.addEventListener("abort", function() {
                var t = "VideoEvent: abort at " + e.video.currentTime + " / " + e.video.duration;
                xv.console.log(t, "Player"), console.log(t), e.disableWakeLock(), e.detectPlaying(), e.updateBtVisibity()
            }), this.video.addEventListener("durationchange", function() {
                var t = "VideoEvent: Duration Change at " + e.video.currentTime + " / " + e.video.duration;
                xv.console.log(t, "Player"), console.log(t), e.detectPlaying(), e.updateBtVisibity()
            }), this.video.addEventListener("loadeddata", function() {
                xv.console.log("VideoEvent: Loaded Data", "Player"), console.log("VideoEvent: Loaded Data"), e.canPlay = !0, e.checkNeedSeek(), e.detectPlaying(), e.updateBtVisibity()
            }), this.video.addEventListener("loadedmetadata", function() {
                var t = "VideoEvent: Loadedmetadata";
                xv.console.log(t, "Player"), console.log(t), e.canPlay = !0, e.detectPlaying(), e.updateBtVisibity(), e.videoRatio = e.video.videoWidth / e.video.videoHeight, console.log("Video ratio", e.videoRatio), e.isShortVideo() && (console.log("Playlist and short video"), e.bEnableShortAutoLoop && !e.force_no_loop && (e.video.loop = !0, e.loopbtn && e.loopbtn.setChecked(!0))), console.log("self.thumb_slide_type ", e.thumb_slide_type), e.thumb_slide_type === HTML5Player.TYPE_MINUTE && e.preloadMozaiqueMinThumbOnStart()
            }), this.video.addEventListener("seeked", function() {
                var t = "VideoEvent: Seeked at " + e.video.currentTime + " / " + e.video.duration;
                xv.console.log(t, "Player"), console.log(t);
                var i = !e.canPlay;
                e.canPlay = !0, e.detectPlaying(), e.updateBtVisibity(), i && e.redraw()
            }), document.addEventListener("webkitfullscreenchange", function() {
                console.log("webkitfullscreenchange"), e.toggleFullscreen()
            }), document.addEventListener("mozfullscreenchange", function() {
                console.log("mozfullscreenchange"), e.toggleFullscreen()
            }), document.addEventListener("fullscreenchange", function() {
                console.log("fullscreenchange"), e.toggleFullscreen()
            }), document.addEventListener("MSFullscreenChange", function() {
                console.log("MSFullscreenChange"), e.toggleFullscreen()
            }), this.initPinchEvent()
        }
    },
    showPlayer: function() {
        this.global_div && (console.log("HTML5: Show player"), this.showElt(this.global_div))
    },
    drawFakePlayer: function() {
        if (this.desktop_view && this.hasFlash()) return this.is_flashplayer_displayed = !0, console.log("Desktop with flash. Displaying Flash"), void xv.console.log("Use flash player for desktop", "Player");
        this.is_fakeplayer_displayed = !0, this.global_div.innerHTML = "", this.video_div = this.createElt("div", "", "fakeplayer"), this.video_div.style.position = "relative", this.video_div.style.width = "100%", this.video_div.style.height = "100%", this.video_div.style.textAlign = "center", this.video_div.style.backgroundColor = "#000", this.global_div.appendChild(this.video_div);
        var e = this;
        if ("undefined" != typeof setInterval) {
            var t = 0,
                i = 0;
            this.interval_updated = setInterval(function() {
                e.video_div.offsetWidth === t && e.video_div.offsetHeight === i || (t = e.video_div.offsetWidth, i = e.video_div.offsetHeight, e.redrawFakePlayer())
            }, 100)
        }
        this.globallink = this.createElt("a", "global-link"), this.globallink.style.display = "block", this.globallink.style.width = "100%", this.video_div.appendChild(this.globallink), this.videopicture = this.createElt("img", "video-bg-pic"), this.videopicture.style.width = "320px", this.videopicture.style.height = "450px", this.videopicture.src = this.url_thumb169, this.videopicture.border = "0", this.globallink.appendChild(this.videopicture), this.playbt = this.createElt("img", "play-btn"), this.playbt.src = this.static_path + "img/player/fakeplayer-icon-play.png", this.playbt.style.position = "absolute", this.playbt.style.width = "128px", this.playbt.style.height = "128px", this.playbt.border = "0", this.canShowPlay() || (this.playbt.style.display = "none"), this.globallink.appendChild(this.playbt), this.playlinks = this.createElt("div", "play-links"), this.playlinks.style.width = "100%", this.playlinks.style.visibility = "hidden", this.video_div.appendChild(this.playlinks), this.lowquallink = this.createElt("div", "play-link"), this.playlinks.appendChild(this.lowquallink);
        var r = document.createElement("a");
        if (r.style.display = "block", r.style.textAlign = "center", r.style.border = "2px solid #333", r.style.margin = "2px", r.style.background = "#aaa", r.style.fontWeight = "bold", r.style.lineHeight = "1.5", this.lowquallink.appendChild(r), this.is_embed ? (r.href = this.http_protocol + "://www.xvideos.com" + this.video_url, r.target = "_blank", r.innerHTML = this.i18n.__("player.more_on_site", {
                "%site%": "XVideos.com"
            })) : (r.href = this.url_low, r.innerHTML = this.i18n.__("player.view_low_qual")), this.url_high.length > 0) {
            this.lowquallink.style.width = "50%", this.lowquallink.style["float"] = "left", this.highquallink = this.createElt("div", "play-link"), this.playlinks.appendChild(this.highquallink), this.highquallink.style.width = "50%", this.highquallink.style["float"] = "right";
            var s = document.createElement("a");
            s.style.display = "block", s.style.textAlign = "center", s.style.border = "2px solid #333", s.style.margin = "2px", s.style.background = "#aaa", s.style.fontWeight = "bold", s.style.lineHeight = "1.5", this.highquallink.appendChild(s), s.href = this.url_high, s.innerHTML = this.i18n.__("player.view_high_qual");
            var o = document.createElement("div");
            o.style.clear = "both", this.playlinks.appendChild(o)
        }
        var n = this.url_low;
        this.url_high.length > 0 && (n = this.url_high), this.globallink.href = n, this.playlinks.style.visibility = "visible", (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || /Symbian.3. Series60.5.[3-5]/.test(navigator.userAgent) || /UCBrowser/.test(navigator.userAgent) || this.is_smarttv) && (this.videoplayer = document.createElement("video"), this.videoplayer.controls = "controls", this.videoplayer.style.width = "100%", this.videoplayer.style.backgroundColor = "#000", this.videoplayer.src = this.globallink.href, this.videoplayer.poster = this.url_thumb, this.is_smarttv && (this.videoplayer.autoplay = !0), this.video_div.replaceChild(this.videoplayer, this.globallink), this.hideElt(this.globallink)), this.redrawFakePlayer(), this.send_debug_event("fakeplayerloaded"), xv.console.log("Fake player drawed", "Player")
    },
    redrawFakePlayer: function() {
        this.global_div.style.height = Math.round(this.video_div.offsetWidth / 1.7777 + 40) + "px";
        var e = this.video_div.offsetHeight;
        this.video_div.offsetWidth < e && (e = this.video_div.offsetWidth), e || (e = 300);
        var t = e / 400;
        this.lowquallink.style.fontSize = Math.floor(30 * t) + "px", "undefined" != typeof this.highquallink && (this.highquallink.style.fontSize = Math.floor(30 * t) + "px"), this.videopicture.style.width = Math.floor(this.video_div.offsetWidth) + "px", this.videopicture.style.height = Math.floor(this.video_div.offsetWidth / 1.7777) + "px", "undefined" != typeof this.videoplayer && (this.videoplayer.style.width = Math.floor(this.video_div.offsetWidth) + "px", this.videoplayer.style.height = Math.round(this.video_div.offsetWidth / 1.7777) + "px", this.videoplayer.style.marginBottom = "10px"), this.playbt.style.width = Math.floor(150 * t) + "px", this.playbt.style.height = Math.floor(150 * t) + "px", this.playbt.style.top = Math.floor(this.videopicture.offsetHeight / 2 - 75 * t) + "px", this.playbt.style.left = Math.floor(this.video_div.offsetWidth / 2 - 75 * t) + "px"
    },
    draw: function() {
        var e = this;
        this.send_debug_event("loaded"), this.load_start = (new Date).getTime(), this.global_div.innerHTML = "", this.global_div.className = "embed-responsive", this.desktop_view && (this.global_div.className += " desktop"), this.video_div = this.createElt("div", "embed-responsive-item", "hlsplayer"), this.global_div.appendChild(this.video_div);
        try {
            this.video_div.style.setProperty("--plyr-seekbar-color", this.seek_bar_color)
        } catch (i) {}
        if (this.bEventsIsRemoved || this.setupEvents(), this.drawVideoDiv(), this.use_browser_controls ? (this.drawBrowserControlsButtons(), this.drawSubscribeButton(), this.uploader_name && (this.appendToVideoDiv(this.subscribebarbt), this.subscribebarbt.style.position = "absolute", this.subscribebarbt.style.left = "0", this.subscribebarbt.style.bottom = "0")) : (this.drawFastForward(), this.drawSlowSeek(), this.drawProgressBarBg(), this.drawButtonsBars(), this.drawProgressBar()), this.drawBigButtons(), this.use_parameter_menu || this.drawQualityButtons(), this.is_embed && this.drawEmbedElements(), this.displaySponsorlink(), this.use_browser_controls && !this.is_new_iphone && this.showVideoControls(), this.showInfos(!0), this.updateBtVisibity(), this.redraw(), console.log("Video initial draw done"), this.use_hls ? xv.console.log("HTML5 Player drawed with Hls.js : " + this.url_hls, "Player") : this.use_native_hls ? xv.console.log("HTML5 Player drawed with native Hls : " + this.url_hls, "Player") : xv.console.log("HTML5 Player drawed with MP4 support : " + this.url_high, "Player"), this.useAutoplay() && xv.console.log("Using Autoplay", "Player"), !this.desktop_view) {
            var t = document.getElementById("video-sponsor-links");
            t && this.hideElt(t), "object" == typeof xv && "object" == typeof xv.conf && (xv.conf.data.hide_sponsors = !0)
        }
        return this.storageAvailable() ? (console.log("Storage available"), xv.console.log("Storage available", "Player"), window.addEventListener("beforeunload", function(t) {
            e.saveForDurationReport()
        }), setInterval(function() {
            e.saveForDurationReport()
        }, 2e3), setInterval(this.sendPendingDuration, 1e4), setTimeout(this.sendPendingDuration, 1e3 * (Math.floor(2 * Math.random()) + 2))) : (console.log("Storage not available"), xv.console.log("Storage not available", "Player")), this.video
    },
    saveForDurationReport: function() {
        if (this.video.duration) {
            var e = "videoreport_" + this.id_video,
                t = localStorage.getItem(e);
            try {
                if (JSON.parse(t).sended) return
            } catch (a) {}
            var r = new Object;
            if (r.video_id = this.id_video, r.cdn_id = this.id_cdn, (this.use_hls || this.use_native_hls) && (r.cdn_id = this.id_cdn_hls), r.duration = this.total_video_played, r.referer = this.page_referer, r.transfer = this.total_video_transfer, this.use_native_hls ? r.type = "nativehls" : this.use_hls ? r.type = "hls" : r.type = "html5", this.use_hls && (r.quality = this.hlsobj.currentLevel + 1), r.buffer_sec = 0, this.video) {
                for (i = 0; i < this.video.buffered.length; i++) {
                    var s = this.video.buffered.start(i),
                        o = this.video.buffered.end(i);
                    r.buffer_sec += o - s
                }
                r.buffer_sec > this.video.duration && (r.buffer_sec = this.video.duration), r.duration > this.video.duration && (r.duration = this.video.duration)
            }
            r.lasthit = (new Date).getTime();
            var n = this.getPlayCase();
            n > 0 && (r.ap_sound = n), localStorage.setItem(e, JSON.stringify(r))
        }
    },
    setupEvents: function() {
        var e = this;
        this.iLastTouchStart = 0, this.iLastMousedownStart = 0, this.iLastMouseup = 0, "undefined" == typeof oEvents.player && (oEvents.player = {}), "undefined" == typeof oEvents.player.video_div && (oEvents.player.video_div = {
            resize: function(t) {
                e.removeClass(e.video_div, "is-mouse-down"), e.redraw(), e.resizeVideo()
            },
            touchstart: function(t) {
                if (t.target === e.video_click_handler) e.initSlowSeekStartWait(t, "touch");
                else {
                    if (e.oTouchStart && (clearTimeout(e.oTouchStart), e.oTouchStart = null), e.is_ios || e.is_ios_desktop_mode) return;
                    if (e.videoads && e.videoads.playing) return;
                    e.iLastTouchStart = (new Date).getTime(), e.oTouchStart = setTimeout(function() {
                        e.iLastTouchStart && e.video_event(t, !0)
                    }, e.iClickTimeLimit)
                }
            },
            click: function(t) {
                var i = (new Date).getTime(),
                    r = i - e.iLastMousedownStart,
                    s = i - e.iLastMouseup;
                if (s < 50 && r > s + e.iClickTimeLimit) return void console.log("%c oEvents.player.video_div --- CLICK", "color:deeppink", "PREVENT CLICK", {
                    eventTarget: t.target,
                    iLastMouseup: s,
                    iLastMousedown: r,
                    timeLimitBetweenDownAndUp: e.iClickTimeLimit
                });
                e.video_event_click(t), e.allClickEvents(t)
            },
            mouseover: function(t) {
                e.cursoroverplayer = !0
            },
            mousedown: function(t) {
                if (t.target === e.video_click_handler) e.initSlowSeekStartWait(t, "mouse");
                else {
                    if (e.oMouseDownStart && (clearTimeout(e.oMouseDownStart), e.oMouseDownStart = null), !e.desktop_view) return;
                    if (e.is_ios || e.is_ios_desktop_mode) return;
                    if (e.videoads && e.videoads.playing) return;
                    e.iLastMousedownStart = (new Date).getTime(), e.oMouseDownStart = setTimeout(function() {
                        e.iLastMousedownStart && e.video_event(t, !0)
                    }, e.iClickTimeLimit)
                }
            },
            mouseleave: function(t) {
                e.removeClass(e.video_div, "is-mouse-down"), e.cursoroverplayer = !1
            },
            mouseup: function(t) {
                e.iLastMouseup = (new Date).getTime(), e.removeClass(e.video_div, "is-mouse-down"), e.cursoroverplayer = !1
            },
            dragend: function(t) {
                e.removeClass(e.video_div, "is-mouse-down"), e.cursoroverplayer = !1
            },
            mousemove: function(t) {
                e.video_div.style.cursor = "auto", e.showInfos()
            },
            dblclick: function(t) {
                e.removeClass(e.video_div, "is-mouse-down");
                var i = t.offsetY;
                e.video_div.offsetHeight > 0 && i / e.video_div.offsetHeight > .85 || e.fullscreen()
            }
        }), window.addEventListener("resize", oEvents.player.video_div.resize);
        var t = 0,
            i = 0;
        this.interval_updated = setInterval(function() {
            if (e.detectPlaying(), e.use_hls && e.hlsobj)
                if (e.isBuffering && "100%" === e.loaderpictxt.innerHTML)
                    if (e.bufferBlocked_lastvalue) {
                        if ((new Date).getTime() - e.bufferBlocked_timestamp > 2500) {
                            var r = "Video obj: ";
                            e.canPlay ? r += "canPlay " : r += "not canPlay ", r += ", currentTime " + e.video.currentTime, e.video.seeking ? r += ", seeking " : r += ", not seeking ", e.video.paused ? r += ", paused " : r += ", not paused ", r += ", networkState = " + e.video.networkState, r += ", readyState = " + e.video.readyState, e.bufferBlocked_nbtime++, e.bufferBlocked_lastvalue = !1, console.log(r), console.log("Buffer blocked detected " + ((new Date).getTime() - e.bufferBlocked_timestamp) + " old (" + e.bufferBlocked_nbtime + " times)"), xv.console.log("Buffer blocked detected", "Player"), 2 === e.bufferBlocked_nbtime && e.send_debug_event("buffer_blocked")
                        }
                    } else e.bufferBlocked_lastvalue = e.loaderpictxt.innerHTML, e.bufferBlocked_timestamp = (new Date).getTime(), console.log("Buffering " + e.loaderpictxt.innerHTML + " detected");
            else e.bufferBlocked_lastvalue = !1;
            e.video_div.offsetWidth === t && e.video_div.offsetHeight === i || (t = e.video_div.offsetWidth, i = e.video_div.offsetHeight, e.redraw())
        }, 100), this.video_event = function(t, i) {
            if (e.desktop_view) {
                if (e.playClicked && !e.video.ended)
                    if (e.video.paused) e.play();
                    else if (e.pause(), e.is_embed && e.playClicked) return void window.open(e.https_protocol + "://www.xvideos.com" + e.video_url, "_blank");
                e.showInfos()
            } else if (e.allow_showInfos) {
                if (t.target === e.progressbarbg) return;
                if (e.hideInfos(), e.is_embed && e.playClicked) return e.pause(), void window.open(e.https_protocol + "://www.xvideos.com" + e.video_url, "_blank")
            } else i && e.showPause(), e.showInfos(!1)
        }, this.video_event_click = function(t) {
            var i = -1;
            if ("boolean" == typeof t.target.paused) {
                i = 0;
                var r = t.offsetY;
                e.video_div.offsetHeight > 0 && (i = r / e.video_div.offsetHeight)
            }
            var s = !1;
            if (e.desktop_view) {
                if (i > .85) return
            } else i < .75 && (s = !0),
                e.showparametersmenu && (e.showparametersmenu = !1, e.showadvancedmenu = !1, e.showspeedmenu = !1, e.showqualitiesmenu = !1);
            e.video_event(t, s)
        }, this.video_div.addEventListener("touchstart", oEvents.player.video_div.touchstart), this.video_div.addEventListener("click", oEvents.player.video_div.click), this.desktop_view && !this.is_ios_desktop_mode && (this.video_div.addEventListener("mousedown", oEvents.player.video_div.mousedown), this.video_div.addEventListener("mouseover", oEvents.player.video_div.mouseover), this.video_div.addEventListener("mouseleave", oEvents.player.video_div.mouseleave), this.video_div.addEventListener("mouseup", oEvents.player.video_div.mouseup), this.video_div.addEventListener("dragend", oEvents.player.video_div.dragend), this.video_div.addEventListener("mousemove", oEvents.player.video_div.mousemove), this.video_div.addEventListener("dblclick", oEvents.player.video_div.dblclick), window.addEventListener("keydown", function(t) {
            if (!e.is_smarttv && e.cursoroverplayer && t.target == document.body) {
                if (t.altKey || t.ctrlKey || t.shiftKey) return;
                if (32 != t.keyCode && 75 != t.keyCode || (t.preventDefault(), e.playClicked && (e.video.paused ? e.play() : e.pause())), 38 == t.keyCode) {
                    if (t.preventDefault(), 1 == e.video.volume) return !1;
                    var i = e.video.volume + .1;
                    i > 1 && (i = 1), e.setVolume(i), e.showsoundcontrol = !0, e.cursorOverProgressBar(), e.cursorLeaveProgressBar(), e.showInfos()
                }
                if (40 == t.keyCode) {
                    if (t.preventDefault(), 0 == e.video.volume) return !1;
                    var i = e.video.volume - .1;
                    i < 0 && (i = 0), e.setVolume(i), e.showsoundcontrol = !0, e.cursorOverProgressBar(), e.cursorLeaveProgressBar(), e.showInfos()
                }
                if (37 == t.keyCode || 81 == t.keyCode || 65 == t.keyCode) {
                    if (t.preventDefault(), !e.canPlay) return !1;
                    e.seek(e.video.currentTime - 10), e.showInfos()
                }
                if (39 == t.keyCode || 68 == t.keyCode) {
                    if (t.preventDefault(), !e.canPlay) return !1;
                    e.seek(e.video.currentTime + 10), e.showInfos()
                }
                return 70 == t.keyCode && (t.preventDefault(), e.fullscreen()), !1
            }
        })), this.bEventsIsRemoved = !1
    },
    removeEvents: function() {
        this.bEventsIsRemoved || (this.interval_updated = clearInterval(this.interval_updated), this.video_div.removeEventListener("touchstart", oEvents.player.video_div.touchstart), this.video_div.removeEventListener("click", oEvents.player.video_div.click), this.video_div.removeEventListener("mouseover", oEvents.player.video_div.mouseover), this.video_div.removeEventListener("mousedown", oEvents.player.video_div.mousedown), this.video_div.removeEventListener("mouseleave", oEvents.player.video_div.mouseleave), this.video_div.removeEventListener("mousemove", oEvents.player.video_div.mousemove), this.video_div.removeEventListener("dblclick", oEvents.player.video_div.dblclick), this.bEventsIsRemoved = !0)
    },
    allClickEvents: function(e) {
        this.iLastTouchStart = 0, this.iLastMousedownStart = 0, this.removeClass(this.video_div, "is-mouse-down"), this.oMouseDownStart && (clearTimeout(this.oMouseDownStart), this.oMouseDownStart = null), this.oTouchStart && (clearTimeout(this.oTouchStart), this.oTouchStart = null)
    },
    drawVideoDiv: function() {
        var e = this;
        this.video = document.createElement("video"), this.video.preload = "auto", /firefox/.test(navigator.userAgent.toLowerCase()) && (this.video.preload = "metadata"), this.use_browser_controls ? this.is_ios ? (this.hideVideoControls(), this.video.setAttribute("playsinline", "")) : this.video.controls = "controls" : this.is_ios && !this.is_old_ios && (this.hideVideoControls(), this.video.setAttribute("playsinline", ""));
        var t = this.createElt("div", "video-bg-pic");
        if (t.appendChild(this.video), !this.use_browser_controls) {
            this.video_click_handler = this.createElt("div", "video-click-handler"), t.appendChild(this.video_click_handler), window.__onGCastApiAvailable = function(t, i) {
                if (t) {
                    if (chrome.cast.isAvailable) {
                        var r = function() {
                                console.log("ChromeCast: sessionListener")
                            },
                            s = function(t) {
                                console.log("ChromeCast: receiverListener", t), e.loadPreference(), t === chrome.cast.ReceiverAvailability.AVAILABLE ? (e.chromecastdetected = !0, e.use_hls || e.hideElt(e.video_click_handler)) : (e.chromecastdetected = !1, e.showElt(e.video_click_handler)), e.savePreference(!0), e.updateBtVisibity(), e.redraw()
                            },
                            o = function() {
                                console.log("ChromeCast: onInitSuccess")
                            },
                            n = function() {
                                console.log("ChromeCast: onError")
                            },
                            a = new chrome.cast.SessionRequest(chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID),
                            l = new chrome.cast.ApiConfig(a, r, s);
                        chrome.cast.initialize(l, o, n)
                    }
                } else console.log("Google Chrome Cast loading error")
            };
            var i = document.createElement("script");
            i.src = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js", i.async = !0, this.global_div.appendChild(i)
        }
        this.picture_div = this.createElt("div", "video-pic");
        var r = document.createElement("img");
        this.url_thumb169 ? r.src = this.url_thumb169 : r.src = this.url_thumb, this.picture_div.appendChild(r), t.appendChild(this.picture_div), this.video_div.appendChild(t), this.topleftdiv = this.createElt("div", "top-left"), this.video_div.appendChild(this.topleftdiv);
        var s = "",
            o = null;
        if ("undefined" != typeof xv && "undefined" != typeof xv.conf) {
            this.getFullVideoUrl();
            null != this.getFullVideoUrl() && (o = this.createElt("a", "full-video-link", null, this.i18n.__("player.full_here")), o.setAttribute("href", this.getFullVideoUrl())), this.is_premium_video && ("default" === xv.conf.sitename ? s += '<span class="icon-f icf-ticket-red icf-white-fill prefix"></span> ' : "xnxx" === xv.conf.sitename && (s += '<span class="gold-plate prefix">GOLD</span> '))
        }
        if (this.videotitlediv = this.createElt("p", "video-title", null, s + this.video_title), this.topleftdiv.appendChild(this.videotitlediv), null !== o && (this.$fullVidTopLink = o, "function" == typeof this.videotitlediv.prepend ? this.desktop_view ? this.videotitlediv.prepend(o) : this.topleftdiv.prepend(o) : this.desktop_view ? this.videotitlediv.appendChild(o) : this.topleftdiv.prepend(o)), this.bHasCommercialCom) {
            var n = this.createIconSpan("info-circle"),
                a = this.createElt("div", "commercial-com-text", null, this.i18n.__("player.includes_paid_promotion"));
            this.commercialcomdiv = this.createElt("div", "commercial-com", null, ""), this.commercialcomdiv.appendChild(n), this.commercialcomdiv.appendChild(a), this.topleftdiv.appendChild(this.commercialcomdiv)
        }
        this.videoEndedDesktopMoreDiv = this.createElt("div", "video-ended-desktop", null, this.videoEndedDesktopMoreContent), "function" == typeof this.videoEndedDesktopMoreInitFunc && this.videoEndedDesktopMoreInitFunc(this.videoEndedDesktopMoreDiv), this.topleftdiv.appendChild(this.videoEndedDesktopMoreDiv)
    },
    drawProgressBarBg: function() {
        var e = this;
        this.progressbarbg = this.createElt("div", "progress-bar-bg"), this.video_div.appendChild(this.progressbarbg), this.progressbarbg.addEventListener("click", function(t) {
            console.log("Progress Bar Click"), t.stopPropagation(), e.allClickEvents(t)
        }), this.desktop_view && (this.progressbarbg.addEventListener("mouseenter", function() {
            e.cursorOverProgressBar()
        }), this.progressbarbg.addEventListener("mouseleave", function() {
            e.cursorLeaveProgressBar()
        })), this.progressbarbg.addEventListener("dblclick", function(t) {
            console.log("Progress bar dblclick"), t.stopPropagation(), e.allClickEvents(t)
        })
    },
    drawProgressBar: function() {
        var e = this;
        if (this.progressbarcontainer = this.createElt("div", "progress-bar-container noselect"), this.appendToVideoDiv(this.progressbarcontainer), this.progressbar = this.createElt("div", "progress-bar"), this.progressbar.addEventListener("dblclick", function(t) {
                t.stopPropagation(), e.allClickEvents(t)
            }), this.progressbarcontainer.appendChild(this.progressbar), this.progressbarcontainer.addEventListener("click", function(t) {
                if (console.log("progressbar seeking click"), t.stopPropagation(), e.allClickEvents(t), e.touchseek_block_click) return void console.log("Seek click blocked");
                e.slowSeekRemoveInstantStart();
                var i = e.compute_seekpercent(t),
                    r = e.video.duration * i,
                    s = e.getChromecastMedia();
                s && s.media && s.media.duration && (r = s.media.duration * i), i < .01 && r < 4 && (r = 0), e.seek(r)
            }, !1), this.desktop_view && (this.progressbarcontainer.addEventListener("mouseenter", function() {
                e.cursorOverProgressBar()
            }), this.progressbarcontainer.addEventListener("mouseleave", function() {
                e.cursorLeaveProgressBar()
            })), this.progressbarcontainer.addEventListener("dblclick", function(t) {
                console.log("Progress bar dblclick"), t.stopPropagation(), e.allClickEvents(t)
            }), this.progressbarbufferdiv = this.createElt("div", "bufferdiv"), this.desktop_view && this.progressbarbufferdiv.addEventListener("dblclick", function(t) {
                console.log("progressbarbufferdiv dblclick"), t.stopPropagation(), e.allClickEvents(t)
            }), this.progressbar.appendChild(this.progressbarbufferdiv), this.desktop_view ? this.progressbarcursor = this.createElt("div", "cursor") : (this.progressbarcursor = this.createElt("div", "roundcursor"), this.progressbarcursor.style.backgroundColor = this.seek_bar_color, this.progressbarcursor.style.borderColor = this.seek_bar_color), this.progressbar.appendChild(this.progressbarcursor), this.desktop_view || (this.progressbartext = this.createElt("div", "progress-text-mobile noselect"), this.progressbarcontainer.appendChild(this.progressbartext)), this.allow_touchseek) {
            if (this.computeThumbSlideType(), console.log("Thumb Slide : " + this.thumb_slide_type), this.progressbarseekcursor = this.createElt("div", "seek-cursor"), this.hideElt(this.progressbarseekcursor), this.progressbar.appendChild(this.progressbarseekcursor), this.progressbarseekthumb = this.createElt("div", "seek-thumb"), this.progressbarseekcursor.appendChild(this.progressbarseekthumb), this.thumb_slide_type == HTML5Player.TYPE_FULL) {
                this.progressbarseekthumb.style.backgroundImage = "url('" + this.thumb_slide_big + "')";
                var t = new Image;
                t.onerror = function() {
                    console.log("Thumb slide full don't seems to be available"), e.thumb_slide_type = HTML5Player.TYPE_SMALL, e.progressbarseekthumb.style.background = "url('" + e.thumb_slide + "')"
                }, t.src = this.thumb_slide_big
            } else this.thumb_slide_type == HTML5Player.TYPE_MINUTE ? this.progressbarseekthumb.style.backgroundImage = "url('" + this.thumb_slide_min + "0.jpg')" : this.progressbarseekthumb.style.backgroundImage = "url('" + this.thumb_slide + "')";
            if (this.desktop_view && this.progressbarseekthumb.addEventListener("mousemove", function(t) {
                    if (t && t.target && "function" == typeof t.target.getBoundingClientRect && "seek-thumb" === t.target.className) {
                        var i = t.target.getBoundingClientRect();
                        if (!i) return void console.log("Unable to get rect");
                        if (!i.left || !i.top) return void console.log("Unable to get rect (2)");
                        return Math.round(100 / t.target.offsetHeight * (e.touch_getPositionY(t) - i.top)) < 20 ? (e.touchSeekHide(), void t.stopPropagation()) : void 0
                    }
                }), this.progressbarseekcursortext = this.createElt("div", "seek-text", null, "00:00"), this.progressbarseekthumb.appendChild(this.progressbarseekcursortext), this.desktop_view) {
                this.progressbarseekfakecursordesktop = this.createElt("div", "fake-cursor-desktop-container");
                var i = this.createElt("div", "fake-cursor-desktop");
                this.progressbarseekfakecursordesktop.appendChild(i), this.hideElt(this.progressbarseekfakecursordesktop), this.progressbar.appendChild(this.progressbarseekfakecursordesktop)
            } else {
                var r = this.createElt("div", "hide-cursor");
                this.progressbarseekcursor.appendChild(r)
            }("ontouchstart" in window || navigator.msMaxTouchPoints) && (console.log("is a touch screen"), this.progressbarcontainer.addEventListener("touchstart", function(t) {
                e.touchseek_last_positions = [], e.forcenopreviewimg || (e.showElt(e.progressbarseekcursor), e.slowSeekRemoveInstantStart(), e.desktop_view && e.showElt(e.progressbarseekfakecursordesktop), e.touchSeekShow(t))
            }, !1), this.progressbarcontainer.addEventListener("touchend", function(t) {
                console.log("touchend");
                var i = -1;
                if (-1 !== e.lastTouchSeekPosition && (i = e.lastTouchSeekPosition, console.log("self.lastTouchSeekPosition", e.lastTouchSeekPosition)), e.touchseek_last_positions.length > 1 && (i = e.touchseek_last_positions[e.touchseek_last_positions.length - 2], console.log("self.touchseek_last_positions", i)), -1 !== i) {
                    var r = e.video.duration * i,
                        s = e.getChromecastMedia();
                    s && s.media && s.media.duration && (r = s.media.duration * i), i < .01 && r < 4 && (r = 0), console.log("Seek End " + r), e.touchseek_block_click = !0, setTimeout(function() {
                        e.touchseek_block_click = !1
                    }, 500), e.seek(r)
                }
                e.touchSeekHide()
            }, !1), this.progressbarcontainer.addEventListener("touchcancel", function(t) {
                console.log("touchcancel"), e.touchSeekHide()
            }, !1), this.progressbarcontainer.addEventListener("touchmove", function(t) {
                e.touchSeekShow(t)
            }, !0)), this.desktop_view && (this.progressbarcontainer.addEventListener("mouseenter", function() {
                e.cursorOverProgressBar()
            }), this.progressbarcontainer.addEventListener("mouseleave", function() {
                e.cursorLeaveProgressBar()
            }), this.progressbarcontainer.addEventListener("mouseover", function(t) {
                e.forcenopreviewimg || (e.showElt(e.progressbarseekcursor), e.desktop_view && e.showElt(e.progressbarseekfakecursordesktop), e.touchSeekShow(t))
            }, !0), this.progressbarcontainer.addEventListener("mousemove", function(t) {
                e.forcenopreviewimg || (e.showElt(e.progressbarseekcursor), e.desktop_view && e.showElt(e.progressbarseekfakecursordesktop), e.touchSeekShow(t))
            }, !1), this.progressbarcontainer.addEventListener("mouseleave", function(t) {
                e.touchSeekHide()
            }, !0)), this.desktop_view && (this.progressbardetectcursor = this.createElt("div", "pgbar-cursor-detect"), this.progressbar.appendChild(this.progressbardetectcursor))
        }
    },
    drawFastForward: function() {
        if (this.desktop_view) return void console.log("FastForward : Do not display because is desktop view");
        console.log("FastForward : DRAWING");
        var e = this;
        this.fastforward_left = this.createElt("div", "fastforward-left noselect"), this.fastforward_left.appendChild(this.createIconSpan("angle-double-left")), this.fastforward_left_txt = this.createElt("div", "fastforward-txt"), this.fastforward_left.appendChild(this.fastforward_left_txt), this.appendToVideoDiv(this.fastforward_left, !0);
        var t = function(t) {
            e.removeClass(e.fastforward_left, "fastforward-visible"), e.slowSeekRemoveInstantStart(), window.clearTimeout(t.timer), window.clearTimeout(t.timer2), t.timer = window.setTimeout(function() {
                console.log("Fastbackward timeout done"), t.activate_fastforward = !1, t.current_fastforward = 0, e.removeClass(e.fastforward_left, "fastforward-visible")
            }, 1e3), e.video.currentTime < 10 || (t.current_fastforward += 10, e.fastforward_left_txt.innerHTML = t.current_fastforward + " sec", e.seek(e.video.currentTime - 10), t.timer2 = window.setTimeout(function() {
                e.addClass(e.fastforward_left, "fastforward-visible")
            }, 50))
        };
        this.fastforward_left.addEventListener("dblclick", function(i) {
            if (!e.video.duration) return void console.log("Fastforward : no video duration");
            e.activate_fastforward || (e.activate_fastforward = !0, e.current_fastforward = 0), i.stopPropagation(), e.allClickEvents(i), t(e)
        }), this.fastforward_left.addEventListener("click", function(i) {
            e.activate_fastforward && (i.stopPropagation(), e.allClickEvents(i), t(e))
        }), this.fastforward_right = this.createElt("div", "fastforward-right noselect"), this.fastforward_right.appendChild(this.createIconSpan("angle-double-right")), this.fastforward_right_txt = this.createElt("div", "fastforward-txt"), this.fastforward_right.appendChild(this.fastforward_right_txt), this.appendToVideoDiv(this.fastforward_right, !0);
        var i = function(t) {
            e.removeClass(e.fastforward_right, "fastforward-visible"), e.slowSeekRemoveInstantStart(), window.clearTimeout(t.timer), window.clearTimeout(t.timer2), t.timer = window.setTimeout(function() {
                console.log("Fastfoward timeout done"), t.activate_fastforward = !1, t.current_fastforward = 0, e.removeClass(e.fastforward_right, "fastforward-visible")
            }, 1e3), e.video.currentTime + 10 > e.video.duration || (t.current_fastforward += 10, e.fastforward_right_txt.innerHTML = t.current_fastforward + " sec", e.seek(e.video.currentTime + 10), t.timer2 = window.setTimeout(function() {
                e.addClass(e.fastforward_right, "fastforward-visible")
            }, 50))
        };
        this.fastforward_right.addEventListener("dblclick", function(t) {
            if (console.log("this.fastforward_right dblclick"), !e.video.duration) return void console.log("Fastforward : no video duration");
            this.activate_fastforward || (this.activate_fastforward = !0, this.current_fastforward = 0), t.stopPropagation(), e.allClickEvents(t), i(this)
        }), this.fastforward_right.addEventListener("click", function(t) {
            console.log("this.fastforward_right click"), this.activate_fastforward && (t.stopPropagation(), e.allClickEvents(t), i(this))
        })
    },
    drawSlowSeek: function() {
        console.log("drawSlowSeek : DRAWING"), this.slowseek_info = this.createElt("div", "slowseek-info noselect"), this.slowseek_info.appendChild(this.createElt("div", "label", null, this.i18n.__("player.slide_left_right_seek"))), this.appendToVideoDiv(this.slowseek_info, !0)
    },
    drawBigButtons: function() {
        var e = this;
        this.bigbuttons = this.createElt("div", "big-buttons"), this.appendToVideoDiv(this.bigbuttons), this.bigbuttons_sub = this.createElt("div", "big-buttons-sub"), this.plprevbt = this.createElt("div", "big-button pl-btn"), this.plprevbt.style.visibility = "hidden", this.bigbuttons.appendChild(this.plprevbt), this.plprevbt.addEventListener("click", function(t) {
            console.log("Playlist Backward Butt click"), t.stopPropagation(), e.allClickEvents(t), e.playlist && e.playlist.prev && (e.write_cookie("html5_plfullscreen", e.isFullScreen ? "1" : "0"), window.location.href = e.playlist.prev.uri)
        }, !1), this.$plPrevBtIcon = this.createIconSpan("step-backward", "player.previous_pl_video", {
            "%name%": ""
        }), this.plprevbt.appendChild(this.$plPrevBtIcon), this.playbt = this.createElt("div", "big-button play has-clickable-effect"), this.bigbuttons.appendChild(this.playbt), this.playbt.setAttribute("id", "anc-tst-play-btn"), this.playbt.addEventListener("click", function(t) {
            xv.console.log("Big play button clicked", "Player"), t.stopPropagation(), e.allClickEvents(t), e.playbtClick()
        }), this.canShowPlay() || (this.playbt.style.display = "none"), this.$playBtIcon = this.createIconSpan("play", "player.play"), this.playbt.appendChild(this.$playBtIcon), this.playbt.appendChild(this.createElt("br")), this.playbttxt = this.createElt("span"), this.playbttxt.innerHTML = this.i18n.__("player.play"), this.hideElt(this.playbttxt), this.pausebt = this.createElt("div", "big-button pause has-clickable-effect"), this.bigbuttons.appendChild(this.pausebt), this.pausebt.addEventListener("click", function(t) {
            console.log("Pause click addEventListener"), t.stopPropagation(), e.allClickEvents(t), e.pause()
        }), this.$pauseBtIcon = this.createIconSpan("pause", "player.pause"), this.pausebt.appendChild(this.$pauseBtIcon), this.desktop_view || this.use_browser_controls && (this.replaybt = this.createElt("div", "big-button replay"), this.bigbuttons.appendChild(this.replaybt), this.replaybt.addEventListener("click", function(t) {
            console.log("Replay click addEventListener"), t.stopPropagation(), e.allClickEvents(t), e.replay()
        }), this.$replayBtIcon = this.createIconSpan("repeat", "player.replay"), this.replaybt.appendChild(this.$replayBtIcon)), this.is_ios || this.is_ipad || this.use_browser_controls || (this.chromecastbt = this.createElt("div", "big-button"), this.topleftdiv.insertBefore(this.chromecastbt, this.videotitlediv), this.chromecastbt.addEventListener("click", function(t) {
            console.log("Chromecast click addEventListener"), t.stopPropagation(), e.allClickEvents(t), e.chromecastVideo()
        }), this.$chromecastBtIcon = this.createIconSpan("chromecast", "player.chromecast"), this.chromecastbt.appendChild(this.$chromecastBtIcon), this.chromecastbttxt = this.createElt("span"), this.chromecastbttxt.innerHTML = this.i18n.__("player.chromecast"), this.chromecastbt.appendChild(this.chromecastbttxt)), this.plnextbt = this.createElt("div", "big-button pl-btn"), this.plnextbt.style.visibility = "hidden", this.bigbuttons.appendChild(this.plnextbt), this.plnextbt.addEventListener("click", function(t) {
            console.log("Playlist Forward Butt click"), t.stopPropagation(), e.allClickEvents(t), e.playlist && e.playlist.next && (e.write_cookie("html5_plfullscreen", e.isFullScreen ? "1" : "0"), window.location.href = e.playlist.next.uri)
        }, !1), this.plnextbt.addEventListener("touchstart", function(e) {
            e.stopPropagation()
        }), this.$plNextBtIcon = this.createIconSpan("step-forward", "player.next_pl_video", {
            "%name%": ""
        }), this.plnextbt.appendChild(this.$plNextBtIcon), this.bigbuttons.appendChild(this.bigbuttons_sub), this.loaderpic = this.createElt("div", "video-loader"), this.video_div.appendChild(this.loaderpic), this.loaderpicbuffer = this.createElt("div", "buffer"), this.loaderpic.appendChild(this.loaderpicbuffer), this.loaderpictxt = this.createElt("div", "label", null, this.i18n.__("player.buffering")), this.loaderpic.appendChild(this.loaderpictxt)
    },
    drawVideoEndedDesktopMore: function() {
        this.videoEndedDesktopMoreDiv && !this.bVideoEndedDesktopMoreDrawn && (this.bVideoEndedDesktopMoreDrawn = !0, this.videoEndedDesktopMoreContent && (this.videoEndedDesktopMoreDiv.innerHTML = this.videoEndedDesktopMoreContent), "function" == typeof this.videoEndedDesktopMoreInitFunc && this.videoEndedDesktopMoreInitFunc(this.videoEndedDesktopMoreDiv))
    },
    setupButtonBarEvents: function(e, t, i) {
        if (this.desktop_view) {
            var r = this;
            t && (e.addEventListener("mouseenter", function() {
                r.cursorOverProgressBar()
            }), e.addEventListener("mouseleave", function() {
                r.cursorLeaveProgressBar()
            })), i && e.addEventListener("dblclick", function(e) {
                e.stopPropagation(), r.allClickEvents(e)
            })
        }
    },
    drawButtonsBars: function() {
        var e = this;
        this.leftbuttonsbar = this.createElt("div", "buttons-bar left noselect"), this.leftbuttonsbar.addEventListener("touchstart", function(e) {
            e.stopPropagation()
        }), this.leftbuttonsbar.addEventListener("click", function(t) {
            t.stopPropagation(), e.allClickEvents(t)
        }), this.appendToVideoDiv(this.leftbuttonsbar), this.replaybarbt = this.createElt("span"), this.replaybarbt.appendChild(this.createIconSpan("repeat", "player.replay")), this.replaybarbt.addEventListener("click", function(t) {
            console.log("Replay click addEventListener"), t.stopPropagation(), e.allClickEvents(t), e.replay(), e.bIsPlNextAllowed = !0
        }), this.leftbuttonsbar.appendChild(this.replaybarbt), this.playbarbt = this.createElt("span", "has-clickable-effect"), this.playbarbt.appendChild(this.createIconSpan("play", "player.play")), this.playbarbt.addEventListener("click", function(t) {
            xv.console.log("Small Play Butt click", "Player"), t.stopPropagation(), e.allClickEvents(t), e.playbtClick()
        }, !1), this.setupButtonBarEvents(this.playbarbt, !0), this.leftbuttonsbar.appendChild(this.playbarbt), this.pausebarbt = this.createElt("span", "has-clickable-effect"), this.pausebarbt.appendChild(this.createIconSpan("pause", "player.pause")), this.pausebarbt.addEventListener("click", function(t) {
            console.log("Small Pause Btt click"), t.stopPropagation(), e.allClickEvents(t), e.pause()
        }, !1), this.setupButtonBarEvents(this.pausebarbt, !0), this.leftbuttonsbar.appendChild(this.pausebarbt), this.$soundOnBarBt = this.createElt("span", "has-clickable-effect"), this.$soundOnBarBtIcon = this.createIconSpan("sound-2 pif-sound-colored", "player.mute"), this.$soundOnBarBt.appendChild(this.$soundOnBarBtIcon), this.$soundOnBarBt.addEventListener("click", function(t) {
            console.log("Sound on click addEventListener"), t.stopPropagation(), e.allClickEvents(t), e.mute(), e.showInfos(!1), e.updateBtVisibity()
        }), this.setupButtonBarEvents(this.$soundOnBarBt, !1, !0), this.leftbuttonsbar.appendChild(this.$soundOnBarBt), this.$soundOffBarBt = this.createElt("span", "has-clickable-effect"), this.$soundOffBarBt.appendChild(this.createIconSpan("sound-mute-colored", "player.unmute")), this.$soundOffBarBt.addEventListener("click", function(t) {
            console.log("Sound off click addEventListener"), t.stopPropagation(), e.allClickEvents(t), e.unmute(), e.showInfos(!1), e.updateBtVisibity()
        }), this.setupButtonBarEvents(this.$soundOffBarBt, !1, !0), this.leftbuttonsbar.appendChild(this.$soundOffBarBt), this.bEnableVolumeControl && (this.$soundVolume = this.createElt("div", "volume-bar"), this.$soundVolumeLvl = this.createElt("div", "volume-bar-fill"), this.initVolumeEvents(), this.setupButtonBarEvents(this.$soundVolume, !1, !0), this.$soundVolume.appendChild(this.$soundVolumeLvl), this.leftbuttonsbar.appendChild(this.$soundVolume)), this.desktop_view && (this.progressbartext = this.createElt("div", "progress-text noselect"), this.progressbartext.addEventListener("click", function(t) {
            console.log("Progress bar text click"), t.stopPropagation(), e.allClickEvents(t)
        }), this.setupButtonBarEvents(this.progressbartext, !1, !0), this.leftbuttonsbar.appendChild(this.progressbartext)), this.desktop_view && (this.plprevbarbt = this.createElt("span"), this.plprevbarbt.appendChild(this.createIconSpan("step-backward", "player.previous_pl_video", {
            "%name%": ""
        })), this.plprevbarbt.addEventListener("click", function(t) {
            console.log("Small Playlist Backward Butt click"), t.stopPropagation(), e.allClickEvents(t), e.playlist && e.playlist.prev && (e.write_cookie("html5_plfullscreen", e.isFullScreen ? "1" : "0"), window.location.href = e.playlist.prev.uri)
        }, !1), this.setupButtonBarEvents(this.plprevbarbt, !0), this.leftbuttonsbar.appendChild(this.plprevbarbt), this.plnextbarbt = this.createElt("span"), this.plnextbarbt.appendChild(this.createIconSpan("step-forward", "player.next_pl_video", {
            "%name%": ""
        })), this.plnextbarbt.addEventListener("click", function(t) {
            console.log("Small Playlist Forward Butt click"), t.stopPropagation(), e.allClickEvents(t), e.playlist && e.playlist.next && (e.write_cookie("html5_plfullscreen", e.isFullScreen ? "1" : "0"), window.location.href = e.playlist.next.uri)
        }, !1), this.setupButtonBarEvents(this.plnextbarbt, !0), this.leftbuttonsbar.appendChild(this.plnextbarbt)), this.drawSubscribeButton(), this.uploader_name && this.leftbuttonsbar.appendChild(this.subscribebarbt), this.rightbuttonsbar = this.createElt("div", "buttons-bar right noselect"), this.appendToVideoDiv(this.rightbuttonsbar), this.createAutoplayToggleBtn(), this.use_parameter_menu && (this.paramsbarbt = this.createElt("div", "settings-btn"), this.rightbuttonsbar.appendChild(this.paramsbarbt), this.paramsbarbt.setAttribute("id", "anc-tst-params-btn"), this.paramsbarbt.appendChild(this.createIconSpan("settings", "player.settings")), this.parameterbthd = this.createElt("span", "video-hd-mark", null, "HD"), this.paramsbarbt.appendChild(this.parameterbthd), this.paramsbarbt.addEventListener("click", function(t) {
            console.log("parametersbt click"), t.stopPropagation(), e.allClickEvents(t), e.showparametersmenu = !e.showparametersmenu, e.showparametersmenu || (e.showqualitiesmenu = !1, e.showadvancedmenu = !1, e.showspeedmenu = !1), e.showInfos(!0)
        }, !1), this.setupButtonBarEvents(this.paramsbarbt, !0, !0), this.drawParameters()), this.downloadbarbt = this.createElt("span", "has-clickable-effect"), this.downloadbarbt.appendChild(this.createIconSpan("download", "download.title")), this.downloadbarbt.addEventListener("click", function(t) {
            console.log("Download bar btt click"), t.stopPropagation(), e.allClickEvents(t), e.pause(), e.is_embed ? window.open(e.http_protocol + "://www.xvideos.com" + e.video_url, "_blank") : window.xv && window.xvideos.player && window.xvideos.player.openDownload && window.xvideos.player.openDownload()
        }, !1), this.setupButtonBarEvents(this.downloadbarbt, !0), this.rightbuttonsbar.appendChild(this.downloadbarbt), this.desktop_view && (this.is_premium_site && (this.loadPreference(), this.forceExpanded && this.toggleExpand()), this.expandbarbt = this.createElt("span", "has-clickable-effect"), this.expandbarbt.appendChild(this.createIconSpan("full-width", "player.double_player_size")), this.expandbarbt.addEventListener("click", function(t) {
            t.stopPropagation(), e.allClickEvents(t), console.log("Expand click addEventListener"), e.toggleExpand()
        }, !1), this.setupButtonBarEvents(this.expandbarbt, !0), this.rightbuttonsbar.appendChild(this.expandbarbt)), this.fullscreenbarbt = this.createElt("span");
        var t = this.createIconSpan("full-screen-animated", "player.fullscreen");
        t.appendChild(this.createElt("span")), t.appendChild(this.createElt("span")), t.appendChild(this.createElt("span")), t.appendChild(this.createElt("span")), this.fullscreenbarbt.appendChild(t), this.fullscreenbarbt.addEventListener("click", function(t) {
            console.log("Fullscreen click addEventListener"), t.stopPropagation(), e.allClickEvents(t), e.fullscreen()
        }), this.setupButtonBarEvents(this.fullscreenbarbt, !0), this.rightbuttonsbar.appendChild(this.fullscreenbarbt)
    },
    drawSubscribeButton: function() {
        if (this.uploader_name) {
            var e = this;
            this.subscribebarbt = this.createElt("div", "subscribe");
            var t = document.createElement("a");
            t.className = "video-subscribe", t.style.paddingRight = "2px";
            var i = document.createElement("span");
            i.className = "sub-btn", i.style.padding = "0px";
            var r = document.createElement("img");
            r.src = this.static_path + "img/skins/default/feed.png", r.style.height = "9px", r.style.margin = "2px", i.appendChild(r);
            var s = document.createElement("span");
            s.className = "label", s.innerHTML = this.i18n.__("player.subscribe"), s.style.verticalAlign = "middle", t.appendChild(i), t.appendChild(s), this.subscribebarbt.appendChild(t), this.subscribebarbt.updateLabel = function() {
                if (!e.is_embed && e.uploader_name) {
                    var t = createRequestObject();
                    t.open("POST", "/profiles/" + e.uploader_name + "/followers/check", !0), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), t.onreadystatechange = function() {
                        if (4 === t.readyState && 200 === t.status) {
                            try {
                                var i = JSON.parse(t.responseText)
                            } catch (n) {
                                return void console.error(n)
                            }
                            if (i.result && i.is_logged && !i.is_owner && !i.is_follower) {
                                var r = i.csrf || "",
                                    o = !1;
                                e.subscribebarbt.addEventListener("click", function(t) {
                                    if (t.stopPropagation(), e.allClickEvents(t), !o) {
                                        o = !0, console.log("subscribebarbt click"), s.innerHTML = e.unescape(e.i18n.__("player.in_progress"));
                                        var i = createRequestObject();
                                        i.open("POST", "/profiles/" + e.uploader_name + "/followers/subscribe", !0), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), i.onreadystatechange = function() {
                                            if (4 === i.readyState && 200 === i.status) {
                                                try {
                                                    var t = JSON.parse(i.responseText)
                                                } catch (n) {
                                                    return console.error(n), s.innerHTML = e.unescape(e.i18n.__("player.error_please_retry")), void(o = !1)
                                                }
                                                if (t.result) return void(s.innerHTML = e.unescape(e.i18n.__("player.subscribed")) + ' <a href="/my-feed">' + e.unescape(e.i18n.__("player.view_activities")) + "</a>");
                                                s.innerHTML = e.unescape(e.i18n.__("player.error_please_retry")), o = !1, t.message && window.alert(t.message)
                                            }
                                        }, i.send("csrf=" + r)
                                    }
                                }), e.showsubscribebt = !0, e.updateBtVisibity()
                            }
                        }
                    }, t.send()
                }
            }, this.subscribebarbt.addEventListener("dblclick", function(t) {
                t.stopPropagation(), e.allClickEvents(t)
            })
        }
    },
    toggleParametersSecondaryMenu: function(e, t) {
        this.showadvancedmenu = "advanced" === e && ("boolean" == typeof t ? t : !this.showadvancedmenu), this.showspeedmenu = "speed" === e && ("boolean" == typeof t ? t : !this.showspeedmenu), this.showqualitiesmenu = "quality" === e && ("boolean" == typeof t ? t : !this.showqualitiesmenu), this.updateBtVisibity(), this.redraw()
    },
    hideParam: function(e) {
        this.addClass(e, "is-hidden-param"), this.removeClass(e, "is-visible-param")
    },
    showParam: function(e) {
        this.addClass(e, "is-visible-param"), this.removeClass(e, "is-hidden-param")
    },
    drawParameters: function() {
        var e = this;
        "undefined" == typeof oEvents.player && (oEvents.player = {}), "undefined" == typeof oEvents.player.settings && (oEvents.player.settings = {
                over: function() {
                    null !== e.oTimerSettings && (clearTimeout(e.oTimerSettings), e.oTimerSettings = null)
                },
                leave: function(t) {
                    e.oTimerSettings = setTimeout(function() {
                        if (null !== e.oTimerSettings) {
                            if (t.target === e.parametersmenu) {
                                if (e.showqualitiesmenu || e.showspeedmenu || e.showadvancedmenu) return;
                                e.showparametersmenu = !1
                            }
                            var i = "" === t.target.style.top ? null : Math.round(document.getElementById("html5video").getBoundingClientRect().top + window.scrollY) + parseInt(t.target.style.top) - window.scrollY,
                                r = "" === t.target.style.right ? null : Math.round((window.innerWidth - document.getElementById("content").offsetWidth) / 2) + (e.video_div.offsetWidth - parseInt(t.target.style.right) - parseInt(t.target.style.minWidth));
                            null !== r && "number" == typeof r && r > 0 && null !== i && "number" == typeof i && i > 0 && (t.target === e.qualitymenu || t.target === e.speedmenu || t.target === e.advancedmenu) && (t.clientX < r || t.clientY < i) && (e.showparametersmenu = !1, e.showadvancedmenu = !1, e.showspeedmenu = !1, e.showqualitiesmenu = !1), e.updateBtVisibity(), e.redraw()
                        }
                    }, 500)
                }
            }), this.parametersmenu = this.createElt("ul", "settings-menu noselect"), this.parametersmenu.addEventListener("mouseover", oEvents.player.settings.over), this.parametersmenu.addEventListener("mouseleave", oEvents.player.settings.leave), this.parametersmenu.hide = function() {
                e.hideParam(this)
            }, this.parametersmenu.show = function() {
                e.showParam(this)
            }, this.hideElt(this.parametersmenu), this.appendToVideoDiv(this.parametersmenu), this.parametersmenu.addEventListener("click", function(t) {
                console.log("parametersmenu click"), t.stopPropagation(), e.allClickEvents(t), e.showInfos(!0)
            }), this.parametersmenu.addEventListener("dblclick", function(t) {
                t.stopPropagation(), e.allClickEvents(t)
            }), this.setupButtonBarEvents(this.parametersmenu, !0), this.paramscheckboxes = [],
            this.addParameterElement(this.parametersmenu, -1, "loop", "loop", this.i18n.__("player.loop"), !0, function(e) {}, function(t) {
                console.log("Loop click click"), t.isChecked ? (t.setChecked(!1), e.video.loop = !1, e.isShortVideo() && e.setForceNoLoop(!0)) : (t.setChecked(!0), e.video.loop = !0, e.setForceNoLoop(!1)), e.savePreference()
            }, function(t) {
                e.loopbtn = t, e.enable_short_auto_loop && e.isShortVideo() && (t.setChecked(!0), e.video.loop = !0)
            }), e.desktop_view && this.addParameterElement(this.parametersmenu, -1, "chromecast", "chromecast", this.i18n.__("player.chromecast"), !1, function(t) {
                e.chromecastdetected && chrome.cast ? t.show() : t.hide()
            }, function(t) {
                e.chromecastVideo()
            }, function(e) {}), this.advancedmenu = this.createElt("ul", "settings-menu secondary-menu noselect"), this.advancedmenu.addEventListener("mouseover", oEvents.player.settings.over), this.advancedmenu.addEventListener("mouseleave", oEvents.player.settings.leave), this.advancedmenu.hide = function() {
                e.hideParam(this)
            }, this.advancedmenu.show = function() {
                e.showParam(this)
            }, this.hideElt(this.advancedmenu), this.appendToVideoDiv(this.advancedmenu), this.advancedmenu.addEventListener("click", function(t) {
                t.stopPropagation(), e.allClickEvents(t), e.showInfos(!0)
            }), this.advancedmenu.addEventListener("dblclick", function(t) {
                t.stopPropagation(), e.allClickEvents(t)
            }), this.setupButtonBarEvents(this.advancedmenu, !0), this.addParameterElement(this.parametersmenu, -1, "advanced", "settings-advanced", this.i18n.__("player.advanced"), !1, function(t) {
                e.showadvancedmenu ? t.styleSetForced() : t.styleSetNeutral()
            }, function(t) {
                console.log("Click on speed button"), e.toggleParametersSecondaryMenu("advanced")
            }, function(e) {
                e.styleSetNeutral()
            }, "has-sub-menu"), this.addParameterElement(this.advancedmenu, -1, "advanced-back", !1, this.i18n.__("player.advanced"), !1, null, function(t) {
                console.log("Click on 'back' in speed menu"), e.toggleParametersSecondaryMenu("advanced", !1)
            }, null, "title back-link"), this.speedmenu = this.createElt("ul", "settings-menu secondary-menu noselect"), this.speedmenu.hide = function() {
                e.hideParam(this)
            }, this.speedmenu.show = function() {
                e.showParam(this)
            }, this.speedmenu.addEventListener("mouseover", oEvents.player.settings.over), this.speedmenu.addEventListener("mouseleave", oEvents.player.settings.leave), this.hideElt(this.speedmenu), this.appendToVideoDiv(this.speedmenu), this.speedmenu.addEventListener("click", function(t) {
                t.stopPropagation(), e.allClickEvents(t), e.showInfos(!0)
            }), this.speedmenu.addEventListener("dblclick", function(t) {
                t.stopPropagation(), e.allClickEvents(t)
            }), this.setupButtonBarEvents(this.speedmenu, !0), this.addParameterElement(this.parametersmenu, 0, "speed", "speed", this.i18n.__("player.speed") + ' : <span class="val">' + this.speed.toString() + " X</span>", !1, function(t) {
                t.setTitle(e.i18n.__("player.speed") + ' : <span class="val">' + e.speed.toString() + " X</span>"), e.showspeedmenu ? t.styleSetForced() : t.styleSetNeutral()
            }, function(t) {
                console.log("Click on speed button"), e.toggleParametersSecondaryMenu("speed")
            }, function(e) {
                e.styleSetNeutral()
            }, "has-sub-menu"), this.addParameterElement(this.speedmenu, -1, "speed-back", !1, this.i18n.__("player.speed"), !1, null, function(t) {
                console.log("Click on 'back' in speed menu"), e.toggleParametersSecondaryMenu("speed", !1)
            }, null, "title back-link");
        for (var t = [.5, .8, 1, 1.5, 2], i = 0; i < t.length; i++) this.addParameterElement(this.speedmenu, -1, "speed" + i, !1, 1 === t[i] ? this.i18n.__("player.speed_normal_short") : t[i].toString(), !1, function(t) {
            e.speed === t.speed ? t.styleSetForced() : t.styleSetNeutral()
        }, function(t) {
            console.log("Click on speed " + t.speed), e.speed = t.speed, e.video.playbackRate = t.speed, e.toggleParametersSecondaryMenu("speed", !1), e.redrawParamers()
        }, function(r) {
            r.speed = t[i], e.speed === r.speed ? r.styleSetForced() : r.styleSetNeutral()
        });
        !this.use_hls && !this.use_native_hls && this.url_high && this.url_low && (this.addParameterElement(this.parametersmenu, -1, "quality_hq", !1, "360p", !1, function(t) {
            e.force_lq ? t.styleSetNeutral() : t.styleSetForced()
        }, function(t) {
            console.log("360p quality click"), e.setHQ(), e.redraw()
        }, function(t) {
            e.force_lq ? t.styleSetNeutral() : t.styleSetForced()
        }), this.addParameterElement(this.parametersmenu, -1, "quality_lq", !1, "250p", !1, function(t) {
            e.force_lq ? t.styleSetForced() : t.styleSetNeutral()
        }, function(t) {
            console.log("250p quality redraw click"), e.setLQ(), e.redraw()
        }, function(t) {
            e.force_lq ? t.styleSetForced() : t.styleSetNeutral()
        })), this.desktop_view || this.addParameterElement(this.parametersmenu, -1, "externalplayer", "external", this.i18n.__("player.external_player"), !1, function(e) {}, function(t) {
            console.log("External player click"), e.is_embed ? window.open(e.http_protocol + "://www.xvideos.com" + e.video_url, "_blank") : e.streamVideo()
        }, function(e) {}), this.support_native_hls && this.support_hlsjs && (this.use_hls || this.use_native_hls) && this.addParameterElement(this.advancedmenu, -1, "buildinplayer", !1, this.i18n.__("player.builtin_player"), !0, function(e) {}, function(t) {
            console.log("Buildin player click"), e.loadPreference(), t.isChecked ? (t.setChecked(!1), e.forcenativehls = !1) : (t.setChecked(!0), e.forcenativehls = !0), e.savePreference(), alert("You need to reload the page to see the change")
        }, function(t) {
            e.forcenativehls && (console.log("Init force native HLS"), t.setChecked(!0))
        }), this.addParameterElement(this.advancedmenu, -1, "ratio", !1, this.i18n.__("player.ratio_auto"), !1, function() {
            e.resizeVideo()
        }, function() {
            e.setParamRatioBtn(!0)
        }, function(t) {
            null === e.oPlayerRatio.$btn && "object" == typeof t && (e.oPlayerRatio.$btn = t), null === e.oPlayerRatio.iCurrent && (e.oPlayerRatio.iCurrent = e.oPlayerRatio.aRatios[1])
        }), this.allow_touchseek && this.addParameterElement(this.advancedmenu, -1, "previewimg", !1, this.i18n.__("player.preview_img"), !0, function(e) {}, function(t) {
            console.log("Buildin preview img"), e.loadPreference(), t.isChecked ? (t.setChecked(!1), e.forcenopreviewimg = !0) : (t.setChecked(!0), e.forcenopreviewimg = !1), e.savePreference()
        }, function(t) {
            e.forcenopreviewimg ? console.log("Init no preview img") : t.setChecked(!0)
        })
    },
    addParameterElement: function(e, t, i, r, s, o, n, a, l, d) {
        var u = this,
            h = "setting" + ("string" == typeof d ? " " + d : ""),
            c = this.createElt("li", h, i),
            f = this.createElt("span", "label");
        c.appendChild(f), "string" == typeof r && r.length && f.append(this.createIconSpan(r));
        var p = this.createElt("span", "label-text", null, s);
        if (f.append(p), c.styleSetActive = function() {
                this.className = h + " active"
            }, c.styleSetNeutral = function() {
                this.className = h
            }, c.styleSetForced = function() {
                this.className = h + " forced"
            }, c.setTitle = function(e) {
                if (p.innerHTML !== e) {
                    var t = u.createElt("div", null, null, e);
                    p.innerHTML !== t.innerHTML && (p.innerHTML = e)
                }
            }, "function" == typeof a && c.addEventListener("click", function() {
                a(this)
            }), c.onRedraw = function() {
                "function" == typeof n && n(this)
            }, c.hide = function() {
                this.style.display = "none"
            }, c.show = function() {
                this.style.display = ""
            }, o && (c.checkbox = this.createElt("span", "setting-checkbox"), c.appendChild(c.checkbox), c.isChecked = !1, c.setChecked = function(e) {
                this.isChecked = e, e ? u.addClass(this.checkbox, "is-checked") : u.removeClass(this.checkbox, "is-checked")
            }, this.paramscheckboxes.push(c.checkbox)), "function" == typeof l && l(c), -1 === t) return void e.appendChild(c);
        var v = e.children;
        if (0 === v.length || t >= v.length) return void e.appendChild(c);
        e.insertBefore(c, v[t])
    },
    redrawParamers: function() {
        var e;
        if (this.qualitymenu) {
            e = this.qualitymenu.children;
            for (var t = 0; t < e.length; t++) e[t].onRedraw()
        }
        if (this.advancedmenu && this.showadvancedmenu) {
            e = this.advancedmenu.children;
            for (var t = 0; t < e.length; t++) e[t].onRedraw()
        }
        if (this.speedmenu && this.showspeedmenu) {
            e = this.speedmenu.children;
            for (var t = 0; t < e.length; t++) e[t].onRedraw()
        }
        if (this.use_parameter_menu && !this.use_browser_controls) {
            e = this.parametersmenu.children;
            for (var t = 0; t < e.length; t++) e[t].onRedraw()
        }
    },
    drawBrowserControlsButtons: function() {
        var e = this;
        this.$browserCtrlsDlBt = this.createIconSpan("download", "player.download_video"), this.addClass(this.$browserCtrlsDlBt, "browser-controls-dl-btn"), this.video_div.appendChild(this.$browserCtrlsDlBt), this.$browserCtrlsDlBt.addEventListener("click", function(t) {
            console.log("Download click addEventListener"), t.stopPropagation(), e.allClickEvents(t), window.xv && window.xvideos.player && window.xvideos.player.openDownload && (e.pause(), window.xvideos.player.openDownload())
        })
    },
    drawEmbedElements: function() {
        this.logoxvideos = this.createElt("div", "xv-logo"), this.desktop_view ? this.logoxvideos.style.width = "120px" : this.logoxvideos.style.width = "25%", this.appendToVideoDiv(this.logoxvideos);
        //var e = document.createElement("a");
        //e.href = this.http_protocol + "://" + window.location.host + this.video_url, e.target = "_blank", this.logoxvideos.appendChild(e);
        //var t = document.createElement("img");
        //this.bIsXnxxLogo ? t.src = this.static_path + "img/player/logo_xnxx.png" : t.src = this.static_path + "img/player/logo_xvideos.png", t.style.width = "100%", e.appendChild(t)
    },
    drawQualityButtons: function() {
        var e = this;
        this.lowqualitybt = this.createElt("div", "quality-btn quality-default", null, "250p"), this.video_div.appendChild(this.lowqualitybt), this.lowqualitybt.addEventListener("click", function(t) {
            console.log("LQ click addEventListener"), t.stopPropagation(), e.allClickEvents(t), e.setLQ()
        }), this.highqualitybt = this.createElt("div", "quality-btn quality-default", null, "360p"), this.appendToVideoDiv(this.highqualitybt), this.highqualitybt.addEventListener("click", function(t) {
            console.log("HQ click addEventListener"), t.stopPropagation(), e.allClickEvents(t), e.setHQ()
        })
    },
    displaySponsorlink: function() {
        if (this.sponsors && 0 !== this.sponsors.length && !this.$sponsorLink) {
            var e = this,
                t = this.sponsors.length,
                i = this.sponsors[0];
            if (!i.isSheer && t > 1) {
                if (!xv.utils || !xv.utils.randomFromArray) return;
                i = xv.utils.randomFromArray(this.sponsors)
            } else i.isSheer && xv.conf && xv.conf.dyn && xv.conf.dyn.isPixAllowed && !this.is_premium_site && (i = {
                link: xv.conf.dyn.pixPremiumUrl,
                name: xv.conf.dyn.premiumSiteName
            });
            this.$sponsorLink = this.createElt("a", "videoad-title videoad-title-invideo noselect"), this.$sponsorLink.href = i.link, this.$sponsorLink.setAttribute("target", "_blank"), this.$sponsorLink.setAttribute("rel", "noopener noreferrer"), this.setupButtonBarEvents(this.$sponsorLink, !0), this.appendToVideoDiv(this.$sponsorLink);
            var r = "<strong>" + i.name + "</strong>";
            i.isSheer && (xv.utils && xv.utils.unescape && "function" == typeof xv.utils.unescape && (r = this.getSheerSponsorLinkText(i)), this.$sponsorLink.className += " sheer-sponsor", r = r.toUpperCase());
            var s = this.createElt("p", "", null, r);
            s.className = "videoad-title-txt", this.$sponsorLink.appendChild(s), this.$sponsorLinkIcon = this.createIconSpan("link", "Link"), this.$sponsorLinkIcon.className = "videoad-title-icon", this.$sponsorLink.appendChild(this.$sponsorLinkIcon), this.$sponsorLink.addEventListener("click", function(t) {
                console.log("Sponsor popup click : '" + i.link + "'"), e.pause(), t.stopPropagation(), e.allClickEvents(t)
            }, !1)
        }
    },
    isTrailer: function(e) {
        return e.isTrailer === undefined ? e.pid !== undefined : e.isTrailer && e.pid
    },
    getSheerSponsorLinkText: function(e, t) {
        if (!xv.conf) return "";
        if (!xv.utils) return "";
        if (!e.pseudo) return this.getLegacySponsorLink(e);
        "default" === xv.conf.sitename || xv.conf.sitename;
        var i = {
                fullV: "video.get_full_on"
            },
            r = {
                joinV: "video.get_exclusive_content_on"
            },
            s = xv.utils.randomFromArray(Object.entries(this.isTrailer(e) ? i : r)),
            o = s[1];
        e.link = "https://www.sheer.com/" + e.pseudo + (e.pid ? "/post/" + e.pid : "") + "#join-us-fan";
        var n = this.i18n.__(o, {
            "%strong%": "<strong>",
            "%strong_end%": "</strong>",
            "%site%": "string" == typeof t && t.length ? t : ""
        });
        if ("string" == typeof t && t.length) return n;
        var a = n.match(/.*<strong>(.*)<\/strong>.*/);
        return a ? "<strong>" + xv.utils.unescape(a[1]) + "</strong>" : ""
    },
    getLegacySponsorLink: function(e) {
        return "<strong>" + xv.utils.unescape(e.name) + "</strong>"
    },
    displayLoadError: function() {
        if (this.errordlg) return this.presetShow("errordlg"), void this.video_div.appendChild(this.errordlg);
        var e = this;
        this.errordlg = this.createElt("div", "error-dialog"), this.appendToVideoDiv(this.errordlg);
        var t = this.createElt("div", "error-content");
        this.errordlg.appendChild(t);
        var i = this.createElt("p", "", null, "<b>" + this.i18n.__("player.loading_error") + "</b>");
        t.appendChild(i);
        var r = this.createElt("button", "", null, this.i18n.__("player.retry"));
        r.type = "button", t.appendChild(r), r.addEventListener("click", function(t) {
            console.log("Error button retry click addEventListener"), t.stopPropagation(), e.allClickEvents(t), e.recoverError(!0)
        })
    },
    chromecastVideo: function() {
        if (!chrome.cast) return alert("Error: Chrome cast don't seems to be supported"), this.chromecastdetected = !1, this.updateBtVisibity(), void this.redraw();
        if (!this.url_hls) return void alert("Sorry. Chromecast is not available for this video");
        var e = this;
        chrome.cast.requestSession(function(t) {
            function i(t, i) {
                i.addUpdateListener(function() {
                    console.log("Chrome Cast Update", e.chromecastsession, e.getChromecastMedia()), e.updateBtVisibity(), e.redraw()
                });
                var r = 0;
                e.chromecasttimer = setInterval(function() {
                    e.getChromecastMedia() && e.getChromecastMedia().getStatus(null, function() {
                        r = 0, e.updateBtVisibity(), e.redraw()
                    }, function(t) {
                        if (++r > 20) return clearInterval(e.chromecasttimer), delete e.chromecasttimer, e.chromecastsession = !1, e.updateBtVisibity(), void e.redraw();
                        console.log("chromecastmedia.getStatus - error", t)
                    })
                }, 100), e.updateBtVisibity(), e.redraw()
            }
            e.chromecastsession = t;
            var r = new chrome.cast.media.MediaInfo(e.url_hls),
                s = new chrome.cast.media.LoadRequest(r);
            e.chromecastsession.loadMedia(s, i.bind(this, "loadMedia"), function() {
                alert("Unable to start ChromeCast")
            })
        }, function(t) {
            console.log("Chrome Cast issue", t), e.chromecastsession = !1, clearInterval(e.chromecasttimer), e.updateBtVisibity(), e.redraw()
        })
    },
    getChromecastMedia: function() {
        if (this.chromecastsession && this.chromecastsession.media && this.chromecastsession.media[0]) return this.chromecastsession.media[0]
    },
    openMessageBox: function() {
        var e = this;
        if (this.messagediv) return void this.presetShow("messagediv");
        this.messagediv = this.createElt("div", "message-dialog"), this.appendToVideoDiv(this.messagediv), this.messagediv.addEventListener("click", function(t) {
            console.log("Message Div Click"), t.stopPropagation(), e.allClickEvents(t)
        }), this.messagetxtdiv = this.createElt("div", "message-content"), this.messagediv.appendChild(this.messagetxtdiv), this.messagedivclose = this.createIconSpan("close", "player.close"), this.messagedivclose.className = "dlg-close-btn", this.messagedivclose.addEventListener("click", function(t) {
            console.log("Close message"), e.showInfos(!1), e.showmessage = !1, e.updateBtVisibity(), e.redraw()
        }, !1), this.messagediv.appendChild(this.messagedivclose)
    },
    touchSeekShow: function(e) {
        if ("object" == typeof e && "function" == typeof e.stopPropagation) e.stopPropagation(), this.lastTouchSeekPosition = this.compute_seekpercent(e);
        else {
            if ("number" != typeof e) return;
            this.lastTouchSeekPosition = e
        }
        this.touchseek_last_positions.length > 3 && (this.touchseek_last_positions = this.touchseek_last_positions.slice(1)), this.touchseek_last_positions.push(this.lastTouchSeekPosition);
        var t, i = this.lastTouchSeekPosition;
        if (i < 0 && (i = 0), i > 1 && (i = 1), this.desktop_view) t = this.progressbardetectcursor.offsetWidth * i - this.progressbarseekthumb.offsetWidth / 2, t < 0 && (t = 0), t > this.progressbardetectcursor.offsetWidth - this.progressbarseekthumb.offsetWidth && (t = this.progressbardetectcursor.offsetWidth - this.progressbarseekthumb.offsetWidth), this.progressbarseekcursor.style.left = t + "px", this.progressbarseekfakecursordesktop.style.left = this.progressbardetectcursor.offsetWidth * i - this.progressbarseekfakecursordesktop.offsetWidth / 2 + "px";
        else {
            var r = this.progressbarcontainer && this.progressbarcontainer.style && parseInt(this.progressbarcontainer.style.left) > 0 ? parseInt(this.progressbarcontainer.style.left) : 999;
            t = this.progressbar.offsetWidth * i - this.progressbarseekthumb.offsetWidth / 2, !isNaN(r) && t < -r && (t = -r), this.progressbarseekcursor.style.left = t + "px", this.progressbarcursor.style.left = this.progressbar.offsetWidth * i - this.progressbarcursor.offsetWidth / 2 + "px", this.progressbarcursor.touchseek = !0
        }
        this.progressbarseekcursortext.innerHTML = this.formatSeconds(this.video.duration * i);
        var s = Math.floor(30 * this.lastTouchSeekPosition + 1);
        s < 1 ? s = 1 : s > 30 && (s = 30);
        var o = Math.floor((s - 1) / 6),
            n = s - 1 - 6 * o,
            a = Math.floor(this.video.duration * this.lastTouchSeekPosition);
        if (this.is_premium_video && (a -= 4), a < 0 && (a = 0), this.thumb_slide_type === HTML5Player.TYPE_FULL) {
            var i = a / this.video.duration * 100;
            s = Math.floor(i + 1), s < 1 && (s = 1), s > 100 && (s = 100), o = Math.floor((s - 1) / 10), n = s - 1 - 10 * o
        } else if (this.thumb_slide_type === HTML5Player.TYPE_MINUTE) {
            var l = Math.floor(a / 60);
            this.progressbarseekthumb.style.backgroundImage = "url('" + this.thumb_slide_min + l + ".jpg')", l > 1 && this.preloadMozaiqueMinThumb(l - 1), a < this.video.duration - 60 && this.preloadMozaiqueMinThumb(l + 1);
            var s = Math.floor(a - 60 * l);
            o = Math.floor(s / 10), n = s - 10 * o
        }
        this.progressbarseekthumb.style.backgroundPosition = "-" + n * this.progressbarseekthumb.clientWidth + "px -" + o * this.progressbarseekthumb.clientHeight + "px", this.showInfos(!0)
    },
    touchSeekHide: function() {
        this.allow_touchseek && (this.hideElt(this.progressbarseekcursor), this.desktop_view && this.hideElt(this.progressbarseekfakecursordesktop), this.progressbarcursor.touchseek = !1, this.lastTouchSeekPosition = -1)
    },
    loadingAdError: function() {
        this.ad_loading_error = !0
    },
    setNoSquareAd: function() {
        window.xvideos.player.toggleSize(!0)
    },
    isPromiseSupported: function() {
        return !(!window.Promise || !Promise || "function" != typeof Promise)
    },
    isAutoplayAvailable: function() {
        var e = this;
        return this.isPromiseSupported() ? new Promise(function(t, i) {
            var r = e.video.currentTime,
                s = function() {
                    e.video.currentTime = r
                };
            e.video.play().then(function() {
                console.log("isAutoplayAvailable --- AutoPlay available"), e.video.pause(), s(), t(!0)
            })["catch"](function(e) {
                console.log("isAutoplayAvailable --- AutoPlay not available", e), s(), t(!1)
            })
        }) : (console.log("isAutoplayAvailable --- Promise not available"), undefined)
    },
    playbtClick: function() {
        if (!this.playClicked && this.use_hls && this.hlsobj.startLoad(), !this.playClicked && this.desktop_view && (this.cursorOverProgressBar(), this.cursorLeaveProgressBar(), this.redraw()), this.playClicked && this.showPause(), this.playClicked = !0, this.addClass(this.video_div, "play-clicked"), this.displayVideosAds()) return void xv.console.log("playbtClick - Starting to display Video Ads");
        this.use_browser_controls && this.showVideoControls(), this.play(), this.force_play_fullscreen && this.fullscreen(), this.updateBtVisibity(), this.redraw(), this.desktop_view && "function" == typeof window.openpop && window.openpop()
    },
    startPlayInAutoPlay: function() {
        if (this.bAutoPlayStarted) return void console.log("startPlayInAutoPlay Autoplay already tried, aborting");
        console.log("startPlayInAutoPlay Trying to Autoplay video"), xv.console.log("startPlayInAutoPlay --- Trying to Autoplay video", "Player"), this.bAutoPlayStarted = !0;
        var e = this,
            t = 0,
            i = function() {
                if (t++, console.log("startPlayInAutoPlay --- Starting to play video", t), t > 10) return void console.log("startPlayInAutoPlay --- Max tries reached. Unable to start video in AutoPlay, aborting");
                if (xv.disclaimer && xv.disclaimer.bDisclaimerTriggered) return void console.log("startPlayInAutoPlay --- Disclaimer has been displayed, no autoplay");
                if (xv.disclaimer && xv.disclaimer.bCookieBannerTriggered) return void console.log("startPlayInAutoPlay --- Cookie banner has been displayed, no autoplay");
                if (e.playClicked) return void console.log("startPlayInAutoPlay --- Play already clicked, aborting");
                if (!e.video.paused) return void console.log("startPlayInAutoPlay --- Video already started, aborting");
                if (e.videoads_loading) return console.log("startPlayInAutoPlay --- Video ads is loading, waiting"), void setTimeout(i, 200);
                var r = e.isAutoplayAvailable();
                if (void 0 === r) return console.log("startPlayInAutoPlay --- Promise not available, aborting"), void xv.console.log("startPlayInAutoPlay --- Promise not available, aborting", "Player");
                r.then(function(t) {
                    if (!t) return console.log("startPlayInAutoPlay --- AutoPlay not available, aborting"), void xv.console.log("startPlayInAutoPlay --- AutoPlay not available, aborting", "Player");
                    xv.console.log("startPlayInAutoPlay - Starting playing video auto play", "Player"), e.playbtClick(), e.showPause()
                })["catch"](function(e) {
                    console.log("startPlayInAutoPlay --- Error", e), xv.console.log("startPlayInAutoPlay --- Error", "Player")
                })
            };
        i()
    },
    nbView_getNbView: function() {
        if (!this.storageAvailable()) {
            var e = xv.cookies.get("player_nb_views");
            return e ? parseInt(e) : 0
        }
        var t = localStorage.getItem("player_nb_views");
        try {
            var i = JSON.parse(t);
            if (!i) return 0;
            if (!i.nb) return 0;
            if (i.expire < (new Date).getTime() / 1e3) return console.log("Nb Player view expired"), localStorage.removeItem(key), 0
        } catch (r) {
            return console.log("Duration send: Unable to unjson player_nb_views", t), 0
        }
        return parseInt(i.nb)
    },
    nbView_increment: function() {
        var e = this.nbView_getNbView();
        if (-1 !== e && !(e >= 8)) {
            if (e++, !this.storageAvailable()) return void xv.cookies.setLocal("xv_nbview", e, 576e5, "/");
            var t = {
                nb: e,
                expire: (new Date).getTime() / 1e3 + 57600
            };
            localStorage.setItem("player_nb_views", JSON.stringify(t))
        }
    },
    nbView_setviewed: function() {
        if (!this.storageAvailable()) return void xv.cookies.setLocal("xv_nbview", "-1", 576e5, "/");
        var e = {
            nb: -1,
            expire: (new Date).getTime() / 1e3 + 57600
        };
        localStorage.setItem("player_nb_views", JSON.stringify(e))
    },
    displayVideosAds: function() {
        var e = this;
        if (this.videoads_checked) return !1;
        this.videoads_checked = !0, console.log("displayVideosAds: Checking video ads"), xv.console.log("displayVideosAds: Checking video ads", "Player"), this.nbView_increment();
        var t = this.nbView_getNbView();
        return -1 === t ? (console.log("displayVideosAds: All video ads already displayed"), xv.console.log("displayVideosAds: All video ads already displayed", "Player"), this.videoads = null, !1) : 1 !== t && 4 !== t && 7 !== t ? (xv.console.log("displayVideosAds: Only first and 5th , 7 play (or more). Bypass videosads display", "Player"), this.videoads = null, !1) : this.videoads ? (this.videoads.onFullscreen = function() {
            e.fullscreen()
        }, this.videoads.onClose = function() {
            e.video_div.removeChild(e.videoads_div), e.videoads = null, e.use_browser_controls && e.showVideoControls(), e.play()
        }, this.video.muted || (console.log("VideoAds: Video not muted. Starting with sound"), this.videoads.startWithSound(), this.videoads.setStartVolume(this.video.volume)), this.videoads.setMuteCallback(function(t) {
            e.loadPreference(), t ? e.mute(!1) : e.unmute(!1), e.savePreference(!0)
        }), this.videoads_div = this.videoads.getAdDiv(), !!this.videoads_div && (this.video_div.appendChild(this.videoads_div), this.videoads.redraw(), console.log("displayVideosAds: Starting the video ad"), xv.console.log("displayVideosAds: Starting the video ad", "Player"), t >= 7 && this.nbView_setviewed(), this.adblocker_detected ? this.adStatsCall("preroll_exo", "display_adblock") : this.adStatsCall("preroll_exo", "display"), !0)) : (console.log("displayVideosAds: No videoads to display"), xv.console.log("displayVideosAds: No videoads to display", "Player"), !1)
    },
    adStatsCall: function(e, t) {
        var i = "/zoneload/" + e + "/" + t,
            r = createRequestObject();
        r.open("GET", i, !0), r.onreadystatechange = function() {
            4 === r.readyState && r.status
        }, r.send()
    },
    checkAdBlock: function() {
        if (this.adblock_checked) return this.has_adblocker;
        this.adblock_checked = !0;
        var e = document.createElement("div");
        return e.className = "remove-ads", e.innerHTML = "_", document.body.appendChild(e), 0 == e.clientHeight && (this.has_adblocker = !0), document.body.removeChild(e), this.has_adblocker
    },
    checkVideoAds: function() {
        var e = this;
        return this.use_browser_controls && !this.is_new_iphone ? void console.log("VideoAds not compatible with browser control") : this.is_fakeplayer_displayed || this.is_flashplayer_displayed ? void console.log("VideoAds not compatible with fake player") : -1 === this.nbView_getNbView() ? (console.log("checkVideoAds() Video ads already viewed"), void(this.block_popup = !0)) : (this.videoads_loading = !0, void document.addEventListener("DOMContentLoaded", function() {
            if ("object" == typeof xv && "object" == typeof xv.conf && "object" == typeof xv.conf.dyn && "object" == typeof xv.conf.dyn.ads) {
                var t = "undefined" != typeof xv.conf.dyn.ads.tracker ? xv.conf.dyn.ads.tracker : "",
                    i = "undefined" != typeof xv.conf.dyn.ads.exo_tracker ? xv.conf.dyn.ads.exo_tracker : 0,
                    r = "undefined" != typeof xv.conf.dyn.ads.exo_tracker_sub2 ? xv.conf.dyn.ads.exo_tracker_sub2 : 0,
                    s = "undefined" != typeof xv.conf.dyn.ads.exo_tracker_sub3 ? xv.conf.dyn.ads.exo_tracker_sub3 : 0;
                e.callForVideoAds(t, i, r, s)
            }
        }))
    },
    callForVideoAds: function(e, t, i, r) {
        var s = this;
        this.adblocker_detected = !1, this.checkAdBlock() && (this.adblocker_detected = !0, this.adStatsCall("preroll_exo", "adblock"), console.log("callForVideoAds() Adblock detected")), console.log("callForVideoAds() Trying to load exoclick videos ads");
        var o = "";
        "default" === xv.conf.sitename ? o = "exoxvideostargetting," : "xnxx" === xv.conf.sitename && (o = "exoxnxxtargetting,"), s.videoads = new player.videoads("", "", "", "", "Learn more", "Learn more", !1), s.videoads.setHttpProtocol(s.http_protocol), s.videoads.setStaticPath(s.static_path), s.videoads.setI18n(s.i18n), s.videoads.setDesktopView(s.desktop_view), s.videoads.setAutoplay(s.useAutoplay()), this.videoads.showPreferencesWarningTooltip = function(e, t) {
            return s.showPreferencesWarningTooltip(e, t)
        }, this.videoads.areCookiesFeatureDisabled = function() {
            return s.areCookiesFeatureDisabled()
        };
        var n = "https://s.orbsrv.com/splash.php?idzone=3761585&sub=" + encodeURIComponent(t) + "&sub2=" + encodeURIComponent(i) + "&sub3=" + encodeURIComponent(r) + "&user_agent=" + encodeURIComponent(navigator.userAgent) + "&tags=" + o + encodeURIComponent(this.getPageTags()) + "&lan=" + encodeURIComponent(navigator.language);
        this.adblocker_detected && (n += "&block=1"), "object" == typeof xv && "object" == typeof xv.conf && "object" == typeof xv.conf.dyn && Array.isArray(xv.conf.dyn.enafeats) && xv.conf.dyn.gdpra && -1 === xv.conf.dyn.enafeats.indexOf("ca") && (n += "&cookieconsent=false"), s.makeVastCall(n)
    },
    makeVastCall: function(e) {
        var t = this;
        this.adblocker_detected ? this.adStatsCall("preroll_exo", "load_adblock") : this.adStatsCall("preroll_exo", "load");
        var i = createRequestObject();
        i.open("GET", e, !0), i.withCredentials = !0, i.onreadystatechange = function() {
            if (4 === i.readyState) {
                if (200 !== i.status) return console.log("checkVideoAds() VAST Call failed (" + i.statusText + ") for url " + e), t.adblocker_detected ? t.adStatsCall("preroll_exo", "error_adblock") : 404 == i.status ? t.adStatsCall("preroll_exo", "error_404") : t.adStatsCall("preroll_exo", "error_failed"), t.videoads.makeErrorCallBack(100, e, "Bad response status '" + i.statusText + "', response '" + i.response.substring(0, 40) + "'"), t.videoads = !1, void(t.videoads_loading = !1);
                console.log("VAST Call done");
                try {
                    var r = !0,
                        s = i.responseXML,
                        o = s.getElementsByTagName("InLine");
                    if (void 0 === o || 1 !== o.length) {
                        if (void 0 === (o = s.getElementsByTagName("Wrapper")) || 1 !== o.length) return console.log("Vast: Node InLine or Wrapper not found - No ads to display"), t.adblocker_detected ? t.adStatsCall("preroll_exo", "miss_adblock") : t.adStatsCall("preroll_exo", "miss"), t.videoads.makeErrorCallBack(101, e, "Vast XML Node InLine or Wrapper not found"), t.videoads = !1, void(t.videoads_loading = !1);
                        r = !1
                    }
                    for (var n = o[0].children, a = 0; a < n.length; a++) {
                        var l = n[a];
                        if ("VASTAdTagURI" === l.nodeName && (console.log("VASTAdTagURI", l.textContent), t.makeVastCall(l.textContent)), "Impression" === l.nodeName && (console.log("Impression", l.textContent), t.videoads.addVastViewCallback(l.textContent)), "Error" === l.nodeName && (console.log("Error", l.textContent), t.videoads.addVastErrorCallback(l.textContent)), "Creatives" === l.nodeName) {
                            if (r) {
                                var d = l.getElementsByTagName("MediaFile");
                                if (0 === d.length) return console.log("VAST No media file to display"), t.adblocker_detected ? t.adStatsCall("preroll_exo", "miss_adblock") : t.adStatsCall("preroll_exo", "miss"), t.videoads.makeErrorCallBack(101, e, "VAST No media file to display"), t.videoads = !1, void(t.videoads_loading = !1);
                                var u = Math.floor(Math.random() * d.length),
                                    h = d[u].textContent;
                                console.log("Vast Video", u, "url", h), h = t.videoads.setVideoUrl(h), t.videoads_loading = !1
                            }
                            for (var c = l.getElementsByTagName("Tracking"), f = 0; f < c.length; f++) {
                                var p = c[f],
                                    v = p.getAttribute("event");
                                if ("start" === v && (console.log("Vast event start", p.textContent), t.videoads.addVastStartStatsCallback(p.textContent)), "firstQuartile" === v && (console.log("Vast event firstQuartile", p.textContent), t.videoads.addVastFirstQuartileStatsCallback(p.textContent)), "midpoint" === v && (console.log("Vast event midpoint", p.textContent), t.videoads.addVastMidpointStatsCallback(p.textContent)), "thirdQuartile" === v && (console.log("Vast event thirdQuartile", p.textContent), t.videoads.addVastThirdQuartileStatsCallback(p.textContent)), "complete" === v && (console.log("Vast event complete", p.textContent), t.videoads.addVastCompleteStatsCallback(p.textContent)), "pause" === v && (console.log("Vast event pause", p.textContent), t.videoads.addVastPauseStatsCallback(p.textContent)), "fullscreen" === v && (console.log("Vast event fullscreen", p.textContent), t.videoads.addVastFullScreenStatsCallback(p.textContent)), "mute" === v && (console.log("Vast event mute", p.textContent), t.videoads.addVastMuteStatsCallback(p.textContent)), "skip" === v && (console.log("Vast event skip", p.textContent), t.videoads.addVastSkipStatsCallback(p.textContent)), "progress" === v) {
                                    var g = p.getAttribute("offset");
                                    console.log("Vast event progress", g, "-", p.textContent), t.videoads.addVastProgressCallback(p.textContent, g)
                                }
                            }
                            if (r) {
                                var m = l.getElementsByTagName("ClickThrough");
                                if (0 === m.length) return console.log("VAST No click url"), t.adblocker_detected ? t.adStatsCall("preroll_exo", "miss_adblock") : t.adStatsCall("preroll_exo", "miss"), t.videoads.makeErrorCallBack(101, e, "VAST No click url"), t.videoads = !1, void(t.videoads_loading = !1);
                                var u = Math.floor(Math.random() * m.length);
                                console.log("Vast click", u, "url", m[u].textContent), t.videoads.setVastClickUrl(m[u].textContent)
                            }
                            for (var y = l.getElementsByTagName("ClickTracking"), f = 0; f < y.length; f++) {
                                var _ = y[f];
                                console.log("Vast event click", _.textContent), t.videoads.addVastClickTrackingCallback(_.textContent)
                            }
                        }
                        if ("Extensions" === l.nodeName) {
                            var b = l.getElementsByTagName("TitleCTA");
                            if (b.length) {
                                var E = b[0].getElementsByTagName("Link");
                                E.length && t.videoads.setTitle(E[0].textContent);
                                var S = b[0].getElementsByTagName("MobileText");
                                !t.desktop_view && S.length && t.videoads.setTitle(S[0].textContent);
                                var w = b[0].getElementsByTagName("PCText");
                                t.desktop_view && w.length && t.videoads.setTitle(w[0].textContent)
                            }
                            var k = l.getElementsByTagName("DSA");
                            if (k.length) {
                                var T = k[0].getElementsByTagName("Behalf");
                                T.length && t.videoads.setDSABehaulf(T[0].textContent);
                                var L = k[0].getElementsByTagName("Paid");
                                L.length && t.videoads.setDSAPaid(L[0].textContent);
                                var P = k[0].getElementsByTagName("ClickThrough");
                                P.length && t.videoads.setDSAClickThrough(P[0].textContent)
                            }
                            var A = l.getElementsByTagName("DisplayUrl");
                            A.length && ("fulllivejasmin.com" !== A[0].textContent && "fullflirt4free.com" !== A[0].textContent && "fullclickenabled.com" !== A[0].textContent || t.videoads.setFullVideoClick(!0))
                        }
                    }
                    return
                } catch (C) {
                    return console.log("VAST Parsing failed : " + C.message), t.videoads.makeErrorCallBack(100, e, "VAST Parsing failed : " + C.message), t.videoads = !1, t.videoads_loading = !1, console.log("VAST ERROR", C), void(t.adblocker_detected ? t.adStatsCall("preroll_exo", "error_adblock") : t.adStatsCall("preroll_exo", "error_corrupted"))
                }
            }
        };
        try {
            i.send()
        } catch (r) {
            return console.log("checkVideoAds() VAST Call failed (2)"), t.videoads.makeErrorCallBack(100, e, "VAST Call failed exception : " + r.message), void(t.adblocker_detected ? t.adStatsCall("preroll_exo", "error_adblock") : t.adStatsCall("preroll_exo", "error_failed"))
        }
    },
    xmlGetNodes: function(e, t) {
        var r = [],
            s = e.childNodes;
        for (i = 0; i < s.length; i++) s[i].nodeName == t && r.push(s[i]);
        return 0 != r.length && r
    },
    initHls: function() {
        if ("" === this.url_hls) return this.use_hls = !1, !1;
        var e = this;
        console.log("Init HLS"), this.use_hls = !0;
        var t = 25e6;
        this.desktop_view && (t = 5e7);
        var i = {
            debug: !1,
            autoStartLoad: !0,
            capLevelToPlayerSize: !1,
            maxBufferLength: 30,
            maxMaxBufferLength: 30,
            maxBufferSize: t,
            maxBufferHole: .3,
            maxSeekHole: 3,
            liveSyncDurationCount: 3,
            liveMaxLatencyDurationCount: 10,
            enableWorker: !0,
            enableSoftwareAES: !0,
            manifestLoadingTimeOut: 1e4,
            manifestLoadingMaxRetry: 3,
            manifestLoadingRetryDelay: 500,
            levelLoadingTimeOut: 1e4,
            levelLoadingMaxRetry: 3,
            levelLoadingRetryDelay: 500,
            fragLoadingTimeOut: 3e4,
            fragLoadingMaxRetry: 3,
            fragLoadingRetryDelay: 500,
            fpsDroppedMonitoringPeriod: 5e3,
            fpsDroppedMonitoringThreshold: .2,
            appendErrorMaxRetry: 3,
            abrBandWidthFactor: .6,
            abrBandWidthUpFactor: .5
        };
        return this.hlsobj && this.hlsobj.destroy(), this.hlsobj = new Hls(i), this.hlsobj.attachMedia(this.video), this.hlsobj.on(Hls.Events.MEDIA_ATTACHED, function() {
                console.log("Hls.Events.MEDIA_ATTACHED")
            }),
            this.hlsobj.on(Hls.Events.MEDIA_DETACHED, function() {
                console.log("Hls.Events.MEDIA_DETACHED")
            }), this.hlsobj.on(Hls.Events.FRAG_PARSING_INIT_SEGMENT, function(t, i) {
                console.log("Hls.Events.FRAG_PARSING_INIT_SEGMENT " + t + " id = " + i.id + " level = " + i.level), e.redrawParamers()
            }), this.hlsobj.on(Hls.Events.FRAG_PARSING_METADATA, function(e, t) {
                console.log("Hls.Events.FRAG_PARSING_METADATA", e, t)
            }), this.hlsobj.on(Hls.Events.LEVEL_SWITCH, function(t, i) {
                console.log("Hls.Events.LEVEL_SWITCH", t, i.level), e.redrawParamers()
            }), this.hlsobj.on(Hls.Events.MANIFEST_LOADING, function(e, t) {
                console.log("Hls.Events.MANIFEST_LOADING", e, t.url)
            }), this.hlsobj.on(Hls.Events.MANIFEST_LOADED, function(t, i) {
                if (console.log("Hls.Events.MANIFEST_LOADED " + t + " nb levels " + e.hlsobj.levels.length), !this.hlsLevelAutoForced) {
                    this.hlsLevelAutoForced = !0, e.loadPreference();
                    var r = e.forcequality;
                    if (void 0 !== r && !1 !== r) return r >= e.hlsobj.levels.length && (r = e.hlsobj.levels.length - 1), e.hlsobj.startLevel = r, e.hlsobj.nextLevel = r, e.hlsobj.recoverMediaError(), void e.redrawParamers();
                    if (!e.desktop_view) {
                        var s = 2;
                        e.hlsobj.levels.length < 3 && (s = e.hlsobj.levels.length - 1), e.hlsobj.autoLevelCapping = s
                    }
                    var o = 0,
                        n = e.get_networkspeed();
                    if (n) {
                        for (var a = 0; a < e.hlsobj.levels.length; a++) 1.8 * e.hlsobj.levels[a].bitrate / 1e3 < n && (o = a);
                        console.log("Best level", o, "for speed", n, "Kb/s"), xv.console.log("Hls.Events.LEVEL_LOADED Best level " + o + " for speed " + n + " Kb/s", "Player")
                    } else o = 1, console.log("No network speed history, using", o);
                    e.hlsobj.startLevel = o, e.hlsobj.nextLoadLevel = o, e.hlsobj.currentLevel = o, e.hlsobj.currentLevel = -1, e.hlsobj.recoverMediaError()
                }
                e.redrawParamers()
            }), this.hlsobj.on(Hls.Events.MANIFEST_PARSED, function(t, i) {
                if (console.log("Hls.Events.MANIFEST_PARSED", t, i), "undefined" == typeof i.levels) return console.log("Hls levels do not exist"), void xv.console.log("Hls levels do not exist", "Player");
                if (!e.hlsjsLevelParsed) {
                    e.hlsjsLevelParsed = !0, xv.console.log("Hls.Events.MANIFEST_PARSED with " + i.levels.length + " qualities", "Player"), e.qualitymenu = e.createElt("ul", "settings-menu secondary-menu noselect"), e.qualitymenu.addEventListener("mouseover", oEvents.player.settings.over), e.qualitymenu.addEventListener("mouseleave", oEvents.player.settings.leave), e.qualitymenu.hide = function() {
                        e.hideParam(this)
                    }, e.qualitymenu.show = function() {
                        e.showParam(this)
                    }, e.hideElt(e.qualitymenu), e.appendToVideoDiv(e.qualitymenu), e.qualitymenu.addEventListener("click", function(t) {
                        t.stopPropagation(), e.allClickEvents(t), e.showInfos(!0)
                    }), e.qualitymenu.addEventListener("dblclick", function(t) {
                        t.stopPropagation(), e.allClickEvents(t)
                    }), e.setupButtonBarEvents(e.qualitymenu, !0), e.addParameterElement(e.parametersmenu, 0, "quality", "quality", e.i18n.__("player.quality") + " : ", !1, function(t) {
                        t.setTitle(e.i18n.__("player.quality") + ' : <span class="val">' + e.qualitiesmenubuttonlabel + "</span>"), e.showqualitiesmenu ? t.styleSetForced() : t.styleSetNeutral()
                    }, function(t) {
                        console.log("Click on quality button"), e.toggleParametersSecondaryMenu("quality")
                    }, function(e) {
                        e.styleSetNeutral()
                    }, "has-sub-menu"), e.addParameterElement(e.qualitymenu, 0, "quality-back", null, e.i18n.__("player.quality"), !1, null, function(t) {
                        console.log("Click on 'back' in speed menu"), e.toggleParametersSecondaryMenu("quality", !1)
                    }, null, "title back-link"), e.addParameterElement(e.qualitymenu, 1, "levelauto", !1, e.i18n.__("player.auto"), !1, function(t) {
                        e.hlsobj.autoLevelEnabled ? (t.styleSetForced(), e.qualitiesmenubuttonlabel = e.i18n.__("player.auto")) : t.styleSetNeutral()
                    }, function(t) {
                        console.log("Click on level auto"), xv.console.log("Click on level auto", "Player"), e.removeLocalStorage(PLAYER_OPTION.FORCEQUALITY), e.forcequality = undefined, e.hlsobj.nextLevel = -1, e.hlsobj.autoLevelCapping = -1, e.toggleParametersSecondaryMenu("quality", !1), e.redrawParamers()
                    }, function(e) {
                        e.styleSetForced()
                    });
                    for (var r = 0; r < i.levels.length; r++) e.addParameterElement(e.qualitymenu, 2, "level" + r, !1, i.levels[r].name, !1, function(t) {
                        var i = e.hlsobj.nextLevel; - 1 === i && (i = e.hlsobj.loadLevel), -1 === i && (i = e.hlsobj.currentLevel), e.hlsobj.autoLevelEnabled ? i === t.hlslevel ? (t.styleSetActive(), e.qualitiesmenubuttonlabel = e.i18n.__("player.auto") + " (" + t.hlslevelname + ")", 6 == t.hlslevel ? e.parameterbthd.innerHTML = "4K" : e.parameterbthd.innerHTML = "HD") : t.styleSetNeutral() : i === t.hlslevel ? (t.styleSetForced(), e.qualitiesmenubuttonlabel = t.hlslevelname, 6 == t.hlslevel ? e.parameterbthd.innerHTML = "4K" : e.parameterbthd.innerHTML = "HD") : t.styleSetNeutral()
                    }, function(t) {
                        console.log("Click on level " + t.hlslevel), xv.console.log("Click on level " + t.hlslevel, "Player"), e.loadPreference(), e.forcequality = t.hlslevel, e.savePreference(), e.hlsobj.nextLevel = t.hlslevel, e.hlsobj.autoLevelCapping = -1, e.toggleParametersSecondaryMenu("quality", !1), e.redrawParamers()
                    }, function(e) {
                        e.hlslevel = r, e.hlslevelname = i.levels[r].name, e.styleSetNeutral()
                    });
                    e.redraw()
                }
            }), this.hlsobj.on(Hls.Events.LEVEL_LOADED, function(e, t) {
                console.log("Hls.Events.LEVEL_LOADED", e, t.level)
            }), this.hlsobj.on(Hls.Events.FRAG_BUFFERED, function(t, i) {
                console.log("Hls.Events.FRAG_BUFFERED " + t + " url = " + i.frag.url), e.redrawParamers()
            }), this.hlsobj.on(Hls.Events.FRAG_CHANGED, function(t, i) {
                console.log("Hls.Events.FRAG_CHANGED", t, "Level", i.frag.level, "Url", i.frag.url), e.redrawParamers(), e.updateBtVisibity()
            }), this.hlsobj.on(Hls.Events.FRAG_LOADING, function(t, i) {
                console.log("Hls.Events.FRAG_LOADING", t), e.updateBuffering(0)
            }), this.hlsobj.on(Hls.Events.ERROR, function(t, i) {
                switch (console.log("Hls.Events.ERROR", t, i.type, i.details, i.fatal), xv.console.log("Hls.Events.ERROR " + i.type + " " + i.url, "Player"), e.hlsNbError++, e.hlsNbError > 20 && e.send_debug_event("many_errors"), i.type) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                        i.fatal && e.recoverError();
                        break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                        i.details === Hls.ErrorDetails.BUFFER_NUDGE_ON_STALL ? (xv.console.log("Error BUFFER_NUDGE_ON_STALL (" + (i.fatal ? "fatal" : "not fatal") + ")", "Player"), i.fatal && (console.log("recoverMediaError at " + new Date), e.hlsobj.recoverMediaError())) : i.fatal && e.recoverError();
                        break;
                    default:
                        i.fatal && e.recoverError()
                }
            }), this.hlsobj.on(Hls.Events.FPS_DROP, function(e, t) {
                console.log("Hls.Events.FPS_DROP", e, t)
            }), this.hlsobj.on(Hls.Events.FRAG_LOAD_PROGRESS, function(t, i) {
                if ("object" != typeof i.stats || "undefined" == typeof i.stats.loaded) return void console.log("Not an XMLProgress event");
                if (!e.fragStatsSended) {
                    var r = i.frag.level + "-" + i.frag.sn;
                    if ("undefined" == typeof e.fragStats[r]) {
                        var s = [];
                        s[0] = (new Date).getTime(), s[1] = i.stats.loaded, s[2] = -1, e.fragStats[r] = s
                    } else if (i.stats.total === i.stats.loaded && -1 === e.fragStats[r][2]) {
                        var o = ((new Date).getTime() - e.fragStats[r][0]) / 1e3,
                            n = (i.stats.total - e.fragStats[r][1]) / o / 1024 * 8;
                        e.fragStats[r][2] = n, e.check_speed_stats()
                    }
                }
                var a = 100 / i.stats.total * i.stats.loaded;
                (a < 5 || a > 95) && console.log("Progress " + i.frag.url + " " + i.stats.loaded + " / " + i.stats.total + " : " + a + " % (Paused : " + e.video.paused + ", Seeking : " + e.video.seeking + ", ReadyState : " + e.video.readyState + ", CurrentTime " + Math.round(100 * e.video.currentTime) / 100 + "/" + Math.round(100 * e.video.duration) / 100 + ")"), i.stats.total === i.stats.loaded && (e.total_video_transfer += i.stats.total), e.updateBuffering(a)
            }), this.hlsobj.loadSource(this.url_hls), this.hlsobj.startLevel = 0, !0
    },
    streamVideo: function() {
        this.pause(), this.drawnDownloadLinks(this.i18n.__("download.use_external_app"), this.url_high, this.url_low)
    },
    drawnDownloadLinks: function(e, t, i) {
        var r = this.createElt("div", "pl-dl-box pl-msg-box");
        r.appendChild(this.createElt("h2", "", null, e));
        var s = !0;
        i || (i = t, t = "", s = !1);
        var o = this.createElt("div", "pl-dl-btns " + (s ? "two-btns" : "single-btn"));
        r.appendChild(o);
        var n = this.createElt("a", "low-qual", null, this.i18n.__("download.low_qual"));
        n.href = i, o.appendChild(n), s && (n = this.createElt("a", "high-qual", null, this.i18n.__("download.high_qual")), n.href = t, o.appendChild(n)), this.openMessageBox(), this.messagetxtdiv.innerHTML = "", this.messagetxtdiv.appendChild(r), this.showmessage = !0, this.updateBtVisibity(), this.redraw()
    },
    drawVideoEnded: function() {
        this.hasFullVideoUrlOrSheerSponsor() ? this.drawVideoEndedFullVideoUrl() : this.drawRelated()
    },
    hasFullVideoUrlOrSheerSponsor: function() {
        if ("boolean" === this.bHasVidEndedFullVidUrl) return this.bHasVidEndedFullVidUrl;
        this.bHasVidEndedFullVidUrl = !1, this.sVidEndedFullVidUrl = this.getFullVideoEndCtaUrl(), this.sVidEndedFullVidText = "";
        var e = '<span class="logo"><img src="' + this.static_path + 'img/skins/common/premium/purchase-form/premium-logo.png" alt="Premium" /></span>',
            t = e;
        if ("default" === xv.conf.sitename ? (e = '<span class="logo"><img src="' + this.static_path + 'img/skins/default/ticket-red.svg" alt="RED" class="logo" /></span>', t = '<img src="' + this.static_path + 'img/skins/default/logo/xvideosred.white.svg" alt="XVideos RED" class="logo more-at" />') : "xnxx" === xv.conf.sitename && (e = '<span class="logo"><img src="' + this.static_path + 'img/skins/xnxx/gold/xnxx.gold.footer-logo.png" alt="XNXX" /> <span class="gold-plate">GOLD</span></span>', t = e), null !== this.sVidEndedFullVidUrl) {
            this.bHasVidEndedFullVidUrl = !0;
            var i = {
                "%strong%": "<strong>",
                "%strong_end%": "</strong>",
                "%site%": e,
                "%duration%": this.getFullVideoDuration()
            };
            if ("default" === xv.conf.sitename) this.sVidEndedFullVidText = '<span class="ticket"><span class="content">' + this.i18n.__("video.get_full_length_on", i) + "</span></span>";
            else {
                var r = this.getFullVideoThumb();
                r && r.length && (this.sVidEndedFullVidText = '<img class="thumb" src="' + r + '" alt="" />'), this.sVidEndedFullVidText += this.i18n.__("video.get_full_length_on", i)
            }
        } else xv.conf && xv.conf.dyn && xv.conf.dyn.isPixAllowed && !this.is_premium_site ? (this.sVidEndedFullVidUrl = xv.conf.dyn.pixPremiumUrl, this.sVidEndedFullVidText = this.i18n.__("video.sponsors.more_at") + t, this.bHasVidEndedFullVidUrl = !0, this.bEndedVidUrlMoreAt = !0) : (this.sVidEndedFullVidUrl = this.getSponsorSheerUrl('<img src="' + this.static_path + 'img/skins/common/sheer/logo.svg" alt="Sheer" class="sheer"/>'), null !== this.sVidEndedFullVidUrl && (this.bHasVidEndedFullVidUrl = !0));
        return this.bHasVidEndedFullVidUrl
    },
    getVideoEndedFullVideoUrl: function() {
        return this.hasFullVideoUrlOrSheerSponsor() ? this.sVidEndedFullVidUrl : ""
    },
    getVideoEndedFullVideoText: function() {
        return this.hasFullVideoUrlOrSheerSponsor() ? this.sVidEndedFullVidText : ""
    },
    drawVideoEndedFullVideoUrl: function() {
        if (null !== this.$fullVidEndLink) return void this.redraw();
        if (this.hasFullVideoUrlOrSheerSponsor()) {
            if (this.$fullVidEndLink = this.createElt("div", null, "centered-full-video-link"), "default" === xv.conf.sitename || "xnxx" === xv.conf.sitename) {
                var e = this.getFullVideoBigThumb();
                e && e.length && (this.$fullVidEndLink.style.backgroundImage = "url(" + e + ")")
            }
            this.appendToVideoDiv(this.$fullVidEndLink);
            var t = [];
            this.bEndedVidUrlMoreAt && t.push("more-at"), this.bIsSheerSponsor ? t.push("is-sh") : "default" === xv.conf.sitename ? t.push("is-xv") : "xnxx" === xv.conf.sitename && t.push("is-xn");
            var i = this.getVideoEndedFullVideoText(),
                r = this.createElt("a", t.join(" "), null, i);
            r.href = this.getVideoEndedFullVideoUrl(), r.target = "_blank", this.$fullVidEndLink.appendChild(r)
        }
    },
    drawRelated: function() {
        if (this.bRelatedLoaded) return void this.redraw();
        var e = this;
        this.$relatedDivContainer = this.createElt("div", "related-vids"), this.appendToVideoDiv(this.$relatedDivContainer), this.relateddiv = this.createElt("div", "related", "embed-related-vids"), this.$relatedDivContainer.appendChild(this.relateddiv), this.bRelatedLoaded = !0, this.uploader_name && this.subscribebarbt.updateLabel();
        var t = -1,
            i = function(i) {
                var r = e.touch_getPosition(i);
                console.log("start moving at " + r), t = r
            },
            r = function(i) {
                var r = e.touch_getPosition(i);
                if (-1 === t) return void(t = r);
                var s = t - r;
                t = r, console.log("self.relateddiv.offsetLeft " + e.relateddiv.offsetLeft + " self.relateddiv.offsetWidth " + e.relateddiv.offsetWidth);
                var o = e.relateddiv.offsetLeft - s;
                console.log("newposition " + o), o > 0 && (o = 0), o < e.video_div.offsetWidth - e.relateddiv.offsetWidth && (o = e.video_div.offsetWidth - e.relateddiv.offsetWidth), e.relateddiv.style.left = o + "px", console.log("moving at " + r + " diff = " + s + " new position " + o)
            },
            s = function(e) {
                t = -1
            };
        this.$relatedDivContainer.addEventListener("touchstart", i), this.$relatedDivContainer.addEventListener("touchmove", r), this.$relatedDivContainer.addEventListener("touchend", s), this.$relatedDivContainer.addEventListener("touchcancel", s);
        var o = 0,
            n = createRequestObject();
        n.open("GET", "/video-suggest/" + this.id_video, !0), n.withCredentials = !0, n.onreadystatechange = function() {
            if (4 === n.readyState) {
                if (200 !== n.status) return void console.log("SUGGEST LOADING ERROR ready stats " + n.status);
                try {
                    var t = JSON.parse(n.responseText)
                } catch (f) {
                    return void console.log("SUGGEST LOADING ERROR JSON", f)
                }
                for (var i in t.v) {
                    o++;
                    var r = t.v[i],
                        s = e.createElt("div", "related-video thumb-block", "video_" + r.id + "_playerrelated");
                    s.style["float"] = "left";
                    var a = e.createElt("span", "thumb");
                    s.appendChild(a);
                    var l = document.createElement("a");
                    e.is_embed ? l.href = "/embedframe/" + r.id : l.href = r.uri, l.className = "thumb-player-related-exo", a.appendChild(l);
                    var d = e.createElt("span", "duration", null, r.duration),
                        u = document.createElement("img");
                    u.src = r.thumburl, l.appendChild(u), l.appendChild(d);
                    var h = e.createElt("span", "title", null, r.title_full);
                    if (l.appendChild(h), e.relateddiv.appendChild(s), e.desktop_view && o >= 27) break
                }
                var c = document.createElement("div");
                c.style.clear = "both", e.relateddiv.appendChild(c), xv && "object" == typeof xv.sda && "object" == typeof xv.sda.pp && "function" == typeof xv.sda.pp.add && xv.sda.pp.add("thumb-player-related-exo"), e.is_embed && "function" == typeof window.display_embed_related_native && window.display_embed_related_native("embed-related-vids"), xv.thumb_block_initiator ? xv.thumb_block_initiator.init_listing(e.relateddiv) : require && require(["lib/helpers/thumbs_rotator"], function(t) {
                    t(e.relateddiv)
                }), e.redraw()
            }
        };
        try {
            n.send()
        } catch (a) {
            console.log("urlRPC Call error")
        }
    },
    drawNextPlaylist: function() {
        if (this.plnextloaded) return this.plnexttimer || this.plnextclosed || this.hasPlaylistAutoNext() && this.startPlaylistCountdown(), void this.redraw();
        var e = this;
        this.plnextcontainer = this.createElt("div", "pl-next"), this.plnextcontainer.addEventListener("click", function(t) {
            t.stopPropagation(), e.allClickEvents(t), e.stopPlaylistCountdown(), e.loadNextVideoPlaylist()
        }), this.video_div.appendChild(this.plnextcontainer), this.plnextthumb = this.createElt("img"), this.plnextthumb.className = "thumb";
        var t, i = this.playlist.next.thumburl.replace("THUMBNUM", 15),
            r = this.video_div.offsetWidth;
        if (t = r > 480 ? .5 * r : .8 * r, "number" == typeof window.devicePixelRatio && (t = window.devicePixelRatio * t), t > 352 ? i = i.replace("thumbs/", "thumbslll/").replace("thumbs169/", "thumbs169lll/").replace("thumbs169xnxx/", "thumbs169xnxxlll/") : t > 272 ? i = i.replace("thumbs/", "thumbsll/").replace("thumbs169/", "thumbs169ll/").replace("thumbs169xnxx/", "thumbs169xnxxll/") : t > 208 && (i = i.replace("thumbs/", "thumbsl/").replace("thumbs169/", "thumbs169l/").replace("thumbs169xnxx/", "thumbs169xnxxl/")), this.plnextthumb.src = i, this.plnextcontainer.appendChild(this.plnextthumb), this.plnexttitle = this.createElt("p"), this.plnextcontainer.appendChild(this.plnexttitle), this.plnextclosebut = this.createIconSpan("close", "player.close_ad"), this.plnextclosebut.className = "dlg-close-btn", this.plnextclosebut.addEventListener("click", function(t) {
                e.bIsPlNextAllowed = !1, t.stopPropagation(), e.allClickEvents(t), e.plnextclosed = !0, e.stopPlaylistCountdown(), e.drawVideoEnded(), e.updateBtVisibity(), e.redraw()
            }, !1), this.plnextcontainer.appendChild(this.plnextclosebut), !this.hasPlaylistAutoNext()) return this.plnextloaded = !0, this.plnexttitle.innerHTML = this.unescape(this.i18n.__("player.next_pl_video", {
            "%name%": '"' + this.playlist.next.title_full + '"'
        })), void this.redraw();
        this.plnextloader = this.createIconSpan("loader"), this.plnextloader.className = "loader", this.plnextcontainer.appendChild(this.plnextloader), this.plnextloadertime = this.createElt("div", "pl-timer", null, "5"), this.plnextcontainer.appendChild(this.plnextloadertime), this.startPlaylistCountdown(), this.plnextloaded = !0, this.redraw()
    },
    startPlaylistCountdown: function() {
        this.stopPlaylistCountdown(), this.plnexttime = 6, this.updatePlaylistCountdown();
        var e = this;
        this.plnexttimer = setInterval(function() {
            e.updatePlaylistCountdown()
        }, 1e3)
    },
    updatePlaylistCountdown: function() {
        if (this.plnextloadertime) {
            this.plnexttime = Math.max(0, this.plnexttime - 1), this.plnextloadertime.innerHTML = this.plnexttime;
            var e = {
                    "%nbsecs%": this.plnexttime.toString(),
                    "%name%": '"' + this.playlist.next.title_full + '"'
                },
                t = "player.loading_next_secs";
            if (0 === this.plnexttime) return void this.loadNextVideoPlaylist();
            1 === this.plnexttime && (t = "player.loading_next_sec"), this.plnexttitle.innerHTML = this.unescape(this.i18n.__(t, e))
        }
    },
    loadNextVideoPlaylist: function() {
        this.plnexttitle.innerHTML = this.unescape(this.i18n.__("player.loading_next")), this.write_cookie("html5_plfullscreen", this.isFullScreen ? "1" : "0"), window.location.href = this.playlist.next.uri
    },
    stopPlaylistCountdown: function() {
        this.plnexttime && (clearInterval(this.plnexttimer), this.plnexttimer = !1, this.plnextloaded = !1, this.bIsPlNextAllowed = !1, this.redraw())
    },
    updateDuration: function() {
        var e = this.getChromecastMedia();
        if (e) {
            if (e.currentTime && e.media && e.media.duration) {
                this.progressbartext.innerHTML = this.formatSeconds(e.currentTime) + " / " + this.formatSeconds(e.media.duration);
                var t = 100 / e.media.duration * e.currentTime;
                this.progressbarcursor && (this.progressbarcursor.style.left = t + "%")
            }
            for (i = 0; i < this.buffered_div_list.length; i++) this.hideElt(this.buffered_div_list[i]);
            var r = this.createElt("div", "buffer-elt");
            return r.style.backgroundColor = this.seek_bar_color, this.progressbarbufferdiv && this.progressbarbufferdiv.appendChild(r), this.showElt(r), r.style.left = "0%", void(r.style.width = Math.min(100, t + 2) + "%")
        }
        if ("undefined" == typeof this.video.duration) return void(this.progressbartext && (this.progressbartext.innerHTML = ""));
        var t = 100 / this.video.duration * this.video.currentTime,
            s = this.video.currentTime,
            o = 0;
        for (this.progressbarcursor && (this.desktop_view ? this.progressbarcursor.style.left = t + "%" : this.progressbarcursor.touchseek || this.progressbar && (this.progressbarcursor.style.left = Math.floor(this.progressbar.offsetWidth * t / 100 - this.progressbarcursor.offsetWidth / 2) + "px")), i = this.video.buffered.length; i < this.buffered_div_list.length; i++) this.hideElt(this.buffered_div_list[i]);
        for (i = 0; i < this.video.buffered.length; i++) {
            var n = 100 / this.video.duration * this.video.buffered.start(i),
                a = this.video.buffered.end(i);
            a <= s && a > o ? o = a : this.video.buffered.start(i) <= s && a >= s && (o = a);
            var l = 100 / this.video.duration * a - n;
            if ("undefined" == typeof this.buffered_div_list[i]) {
                var r = this.createElt("div", "buffer-elt");
                r.style.backgroundColor = this.seek_bar_color, this.buffered_div_list[i] = r, this.progressbarbufferdiv && this.progressbarbufferdiv.appendChild(r)
            } else r = this.buffered_div_list[i];
            this.showElt(r), r.style.left = n + "%", r.style.width = l + "%"
        }
        if (this.progressbartext && (this.progressbartext.innerHTML = this.formatSeconds(this.video.currentTime) + " / " + this.formatSeconds(this.video.duration)), !this.use_hls) {
            var t = 0;
            o > s + 3 ? t = 100 : s + 3 - o < 6 && (t = 100 / 6 * (6 - (s + 3 - o))), this.updateBuffering(t)
        }
    },
    updateBuffering: function(e) {
        e || (e = 0), this.loaderpicbuffer.style.height = Math.floor(e) + "%", this.loaderpictxt.innerHTML = Math.floor(e) + "%"
    },
    formatSeconds: function(e) {
        if (e == Infinity) return "00:00";
        if (!e) return "00:00";
        if (e < 0) return "00:00";
        var t = Math.floor(e / 60);
        t < 10 && (t = "0" + t);
        var i = Math.floor(e % 60);
        return i < 10 && (i = "0" + i), t + ":" + i
    },
    setBuffering: function(e) {
        if (this.isBuffering !== e) {
            if (this.isBuffering = e, e) {
                console.log("setBuffering: is Buffering");
                var t = this;
                this.lastBufferTimestamp = (new Date).getTime(), setTimeout(function() {
                    t.updateBtVisibity(), t.redraw()
                }, 600), this.bufferingTimeoutTimer && clearTimeout(this.bufferingTimeoutTimer), this.bufferingTimeoutTimer = setTimeout(function() {
                    t.isBuffering && (console.log("Buffer timeout"), t.send_debug_event("buffer_timeout"))
                }, 1e4)
            } else {
                clearTimeout(this.bufferingTimeoutTimer), this.bufferingTimeoutTimer = !1;
                var i = (new Date).getTime() - this.lastBufferTimestamp;
                this.video.duration && (this.firstTimeBuffered = !0, console.log("setBuffering: is not Buffering in " + i + " ms"), this.send_debug_event("buffer_duration", i))
            }
            this.updateBtVisibity(), this.positionBigButtons()
        }
    },
    detectPlaying: function() {
        if (this.video.seeking) return this.isPlaying = !1, void this.setBuffering(!0);
        if (3 === this.video.networkState) return this.isPlaying = !1, void this.setBuffering(!1);
        if (this.video.ended) return this.playlist && this.playlist.next && this.bIsPlNextAllowed ? this.drawNextPlaylist() : this.drawVideoEnded(), this.drawVideoEndedDesktopMore(), this.isPlaying = !1, void this.setBuffering(!1);
        if (this.lastKnownCurrentTime !== this.video.currentTime) this.isPlaying = !0, this.setBuffering(!1);
        else if (this.canPlay)
            if (this.video.paused) this.isPlaying = !1, this.setBuffering(!1);
            else {
                if ((new Date).getTime() - this.lastCurrentTimeCheck < 500) return;
                this.isPlaying = !1, this.setBuffering(!0)
            }
        else this.isPlaying = !1, this.setBuffering(!0);
        var e = this.lastKnownCurrentTime;
        this.lastCurrentTimeCheck = (new Date).getTime(), this.lastKnownCurrentTime = this.video.currentTime;
        var t = this.lastKnownCurrentTime - e;
        t > 0 && t < 1 && (this.total_video_played += t, (this.total_video_played > 10 && this.total_video_played < 10.5 || this.total_video_played > 70 && this.total_video_played < 70.5) && this.updateBtVisibity(), this.report_video_played_sent || this.total_video_played > 10 && "function" == typeof require && (this.report_video_played_sent = !0, require(["skins/common/video/tracking"], function(e) {
            e.declareLink()
        })))
    },
    getDrawMinSize: function() {
        var e;
        return this.desktop_view ? (e = this.video_div.offsetHeight, this.video_div.offsetWidth < e && (e = this.video_div.offsetWidth)) : (e = window.innerHeight, window.innerWidth < e && (e = window.innerWidth)), e
    },
    getDrawButtonMargin: function() {
        var e = this.getDrawMinSize();
        return this.isFullScreen ? Math.floor(.04 * e) : Math.floor(.06 * e)
    },
    getDrawResizeCoef: function() {
        if ("object" == typeof xv && "object" == typeof xv.conf && "object" == typeof xv.conf.dyn && "object" == typeof xv.conf.dyn.disfeats && "function" == typeof xv.conf.dyn.disfeats.indexOf) {
            var e = -1 !== xv.conf.dyn.disfeats.indexOf("ui");
            this.iBigUiCoef = e ? 1.2 : 1
        }
        if (this.desktop_view) return .8 * this.iBigUiCoef;
        var t;
        return t = this.is_new_iphone && this.is_ipad ? this.getDrawMinSize() / 900 * this.iBigUiCoef : this.getDrawMinSize() / 550 * this.iBigUiCoef, t > 1.2 * this.iBigUiCoef && (t = 1.2 * this.iBigUiCoef), t
    },
    redraw: function() {
        var e = this.video_div.offsetWidth,
            t = this.video_div.offsetHeight,
            i = this.getDrawResizeCoef(),
            r = 1.4;
        this.desktop_view && (r = 1), this.is_new_iphone && (r = 1.5);
        var s = this.getDrawButtonMargin(),
            o = function(e, t, r) {
                e.style.width = Math.floor(t * i) + "px", r && (e.style.height = Math.floor(r * i) + "px")
            },
            n = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t.push(Math.floor(arguments[r] * i) + "px");
                e.style.padding = t.join(" ")
            },
            a = function(e, t, i) {
                o(e, t, i);
                for (var r = [e], s = 3; s < arguments.length; s++) r.push(arguments[s]);
                n.apply(this, r)
            },
            l = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t.push(Math.floor(arguments[r] * i) + "px");
                e.style.margin = t.join(" ")
            },
            d = 20,
            u = 1,
            h = function(e, t) {
                for (var r = [e, t, t], s = 2; s < arguments.length; s++) r.push(arguments[s]);
                a.apply(this, r), e.style.fontSize = Math.floor(t * i) + "px"
            },
            c = this.desktop_view ? 10 : 5,
            f = this.desktop_view ? 14 : 7,
            p = function(e) {
                h(e, 30 * r, c * r, f * r)
            };
        if (this.desktop_view ? (u = .75, d = 17) : this.use_browser_controls && !this.is_new_iphone ? u = .5 : this.playClicked ? d = 15 : this.playlist && (u = .75, d = 17), !this.use_browser_controls && this.chromecastdetected && !this.is_ios && !this.is_ipad) {
            n(this.chromecastbt, 0, 10, 0, 0), h(this.$chromecastBtIcon, 45 * u, 7.5 * u), this.chromecastbttxt.style.fontSize = Math.floor(15 * i) + "px"
        }
        if (this.playlist) {
            var v = 5 + 20 * u;
            n(this.plprevbt, v, 10), h(this.$plPrevBtIcon, 60 * u, 10 * u), n(this.plnextbt, v, 10), h(this.$plNextBtIcon, 60 * u, 10 * u)
        }
        if (n(this.playbt, 5, 10), h(this.$playBtIcon, 90 * u, 15 * u), this.playbttxt.style.fontSize = Math.floor(d * i) + "px", n(this.pausebt, 5, 10), h(this.$pauseBtIcon, 60 * u, 15 * u), this.desktop_view || this.use_browser_controls && (n(this.replaybt, 5, 10), h(this.$replayBtIcon, 40, 5)), this.positionBigButtons(), this.use_browser_controls && (o(this.$browserCtrlsDlBt, 25, 25), n(this.$browserCtrlsDlBt, 5), this.$browserCtrlsDlBt.style.right = s + "px", this.$browserCtrlsDlBt.style.top = Math.floor(s / 2) + "px", this.uploader_name && l(this.subscribebarbt, 5, 7)), !this.use_browser_controls) {
            p(this.playbarbt), p(this.pausebarbt), p(this.$soundOnBarBt), p(this.$soundOffBarBt), this.bEnableVolumeControl && (o(this.$soundVolume, 75 * r, 30 * r), l(this.$soundVolume, c * r, f * r / 2), this.$soundVolume.style.fontSize = Math.floor(30 * r * i) + "px"), this.desktop_view && (p(this.plnextbarbt), p(this.plprevbarbt)), p(this.replaybarbt), this.uploader_name && l(this.subscribebarbt, c * r, f * r), this.desktop_view && (n(this.progressbartext, c * r, f * r), this.progressbartext.style.lineHeight = Math.floor(30 * r * i) + "px"), this.showAutoplay() && (o(this.$autoplayBarBt, 45 * r, 30 * r), l(this.$autoplayBarBt, 0, 16, 0, this.desktop_view ? 4 : 8), this.$autoplayBarBt.style.fontSize = Math.floor(30 * r * i) + "px"), this.use_parameter_menu && (p(this.paramsbarbt), this.parameterbthd.style.fontSize = Math.floor(12 * i * r) + "px"), p(this.downloadbarbt), this.desktop_view && p(this.expandbarbt), p(this.fullscreenbarbt);
            var g = 2.5;
            this.desktop_view && (g = 3.5), this.progressbarbg.style.height = Math.max(this.leftbuttonsbar.offsetHeight, this.rightbuttonsbar.offsetHeight) * g + "px", this.desktop_view ? (this.showBigProgressBar() ? this.progressbarbg.style.height = Math.ceil((30 + 2 * c) * r * i * g) + "px" : this.progressbarbg.style.height = Math.floor(2 * i) + "px", this.cursoroverprogressbar ? this.progressbarcontainer.style.height = Math.floor(10 * i) + "px" : this.progressbarcontainer.style.height = Math.floor(5 * i) + "px", this.progressbar.style.height = "100%", this.progressbardetectcursor && (this.progressbardetectcursor.style.height = Math.floor((30 + 2 * c) * r * 2 * i) + "px")) : (this.progressbarcontainer.style.height = Math.floor((30 + 2 * c) * r * i) + "px", this.progressbar.style.height = "2px", this.progressbar.style.top = "50%");
            var m = 0;
            if (this.desktop_view ? this.progressbarcursor.style.height = "100%" : (m = 22, o(this.progressbarcursor, m, m), this.progressbarcursor.style.top = "-" + m / 2 * i + "px"), this.allow_touchseek) {
                this.progressbarseekcursortext.style.fontHeight = Math.floor(20 * i) + "px";
                var y = 208 * i,
                    _ = 117 * i;
                this.desktop_view && (y /= 1.2, _ /= 1.2), this.progressbarseekthumb.style.width = Math.floor(y) + "px", this.progressbarseekthumb.style.height = Math.floor(_) + "px", this.thumb_slide_type === HTML5Player.TYPE_FULL ? this.progressbarseekthumb.style.backgroundSize = 10 * Math.floor(y) + "px " + 10 * Math.floor(_) + "px" : this.thumb_slide_type === HTML5Player.TYPE_MINUTE ? this.progressbarseekthumb.style.backgroundSize = 10 * Math.floor(y) + "px " + 6 * Math.floor(_) + "px" : this.progressbarseekthumb.style.backgroundSize = 6 * Math.floor(y) + "px " + 5 * Math.floor(_) + "px"
            }
            if (!this.use_browser_controls)
                if (this.desktop_view) this.progressbarcontainer.style.left = "2px", this.progressbarcontainer.style.right = "2px", this.showBigProgressBar() ? this.progressbarcontainer.style.bottom = this.progressbarbg.offsetHeight / g + "px" : this.progressbarcontainer.style.bottom = "0px";
                else {
                    this.progressbarcontainer.style.bottom = "0px", this.progressbarcontainer.style.left = this.leftbuttonsbar.offsetWidth + 10 * i + m * i / 2 + "px", this.progressbarcontainer.style.right = this.rightbuttonsbar.offsetWidth + 10 * i + m * i / 2 + "px";
                    var b = Math.min(this.progressbarcontainer.offsetHeight, 44);
                    this.progressbartext.style.lineHeight = b / 2 + "px", this.progressbartext.style.fontSize = Math.floor(b / 2) + "px", e < 300 && (this.progressbartext.style.fontSize = "12px"), this.progressbartext.style.top = "-" + this.progressbarcontainer.offsetHeight / 1.4 + "px", this.progressbartext.style.left = "0px", this.allow_touchseek && (this.progressbarseekthumb.style.bottom = this.progressbarcontainer.offsetHeight / 4 + "px")
                }
        }
        if (this.messagediv && (o(this.messagedivclose, 55), n(this.messagedivclose, 5), this.messagedivclose.style.top = "-" + Math.floor(this.messagedivclose.offsetHeight / 2) + "px", this.messagedivclose.style.right = "-" + this.messagedivclose.offsetWidth / 2 + "px", this.messagediv.style.top = s + "px", this.messagediv.style.fontSize = Math.floor(20 * i) + "px", this.messagetxtdiv.style.maxHeight = Math.floor(t - 2 * s) + "px"), o(this.loaderpic, 90, 90), this.loaderpic.offsetWidth > 0 && (this.loaderpic.style.left = Math.floor(e / 2 - this.loaderpic.offsetWidth / 2) + "px", this.loaderpic.style.bottom = Math.floor(t / 2 - this.loaderpic.offsetHeight / 1.8) + "px"), this.loaderpictxt.style.lineHeight = Math.floor(90 * i) + "px", this.loaderpictxt.style.fontSize = Math.floor(15 * i) + "px", this.topleftdiv.style.left = s / 2 + "px", this.topleftdiv.style.top = s / 3 + "px", (this.is_ipad || this.is_new_ios_desktop_mode) && (this.topleftdiv.style.top = s / 2 + 20 + "px"), this.videotitlediv.style.maxWidth = Math.round(e - 3 * s) + "px", this.videotitlediv.style.fontSize = Math.round(15 * i) + "px", this.videotitlediv.style.lineHeight = Math.round(20 * i) + "px", this.videotitlediv.style.padding = Math.round(6 * i) + "px", this.$sponsorLink && (this.$sponsorLink.style.fontSize = Math.floor(15 * i) + "px", this.$sponsorLink.style.top = s / 3 + "px", this.use_browser_controls && (this.$sponsorLink.style.top = s / 2 + 20 + "px")), this.video.ended) {
            if (this.relateddiv) {
                var E = Math.floor(t - this.topleftdiv.offsetHeight - s / 2 - (this.progressbarbg ? this.progressbarbg.offsetHeight / g : this.bigbuttons.offsetHeight) - 10),
                    S = Math.min(Math.floor(e / 250), 4),
                    w = Math.floor(e / S),
                    k = Math.floor(9 * w / 16),
                    T = this.relateddiv.getElementsByClassName("related-video"),
                    L = Math.min(Math.floor(E / k), Math.ceil(T.length / S));
                if (1 === L && (k = Math.floor(11 * w / 16)), this.desktop_view) this.addClass(this.$relatedDivContainer, "desktop-view");
                else {
                    w = 1, L = Math.min(Math.max(Math.floor(E / 130), 1), E < e ? 3 : 5) + 1;
                    do {
                        L--, k = Math.min(Math.floor(E / L), .8 * E), w = Math.floor(16 * k / (1 === L ? 11 : 9)), S = Math.floor(T.length / L)
                    } while (L > 1 && S * w < e)
                }
                this.$relatedDivContainer.style.top = Math.floor(s / 2 + this.topleftdiv.offsetHeight) + "px", this.$relatedDivContainer.style.height = E + "px", this.relateddiv.style.height = E + "px";
                for (var P = (L - 1) * S, A = 0; A < T.length; A++) this.desktop_view ? (T[A].style.width = Math.floor(1e4 / S) / 100 + "%", T[A].style.height = Math.floor(1e4 / L) / 100 + "%") : (T[A].style.width = w + "px", T[A].style.height = k + "px"), L < 2 ? (this.addClass(T[A], "one-line"), this.removeClass(T[A], "bottom-line"), this.removeClass(T[A], "top-line")) : (this.removeClass(T[A], "one-line"), A < P ? this.removeClass(T[A], "bottom-line") : this.addClass(T[A], "bottom-line"), A < S ? this.addClass(T[A], "top-line") : this.removeClass(T[A], "top-line"));
                var C = Math.ceil(k * L);
                this.relateddiv.style.height = C + "px", this.relateddiv.style.marginTop = Math.floor((E - C) / 2) + "px", this.desktop_view ? (this.relateddiv.style.width = e + "px", this.$relatedDivContainer.style.top = Math.floor(s / 2 + this.topleftdiv.offsetHeight) + "px") : this.relateddiv.style.width = Math.ceil(S * w) + "px"
            }
            if (this.plnextcontainer) {
                var x = this.plnextcontainer.offsetWidth,
                    R = this.plnextcontainer.offsetHeight;
                o(this.plnextclosebut, 60), n(this.plnextclosebut, 7.5), this.plnextclosebut.style.top = "-" + Math.floor(37.5 * i) + "px", this.plnextclosebut.style.right = "-" + Math.floor(37.5 * i) + "px", this.hasPlaylistAutoNext() && (o(this.plnextloader, 200), this.plnextloader.style.top = Math.floor(R / 2 - 100 * i) + "px", this.plnextloader.style.left = Math.floor(x / 2 - 100 * i) + "px", this.plnextloadertime.style.fontSize = Math.round(60 * i) + "px", this.plnextloadertime.style.top = Math.floor(R / 2 - this.plnextloadertime.offsetHeight / 2) + "px", this.plnextloadertime.style.left = Math.floor(x / 2 - this.plnextloadertime.offsetWidth / 2) + "px"), this.plnexttitle.style.left = Math.floor(s / 3) + "px", this.plnexttitle.style.top = Math.floor(s / 3) + "px", this.plnexttitle.style.maxWidth = Math.round(x - s) + "px", this.plnexttitle.style.fontSize = Math.round(15 * i) + "px", this.plnexttitle.style.lineHeight = Math.round(20 * i) + "px", this.plnexttitle.style.padding = Math.round(6 * i) + "px"
            }
            this.$fullVidEndLink && (this.$fullVidEndLink.style.width = e + "px", this.$fullVidEndLink.style.height = t + "px", this.$fullVidEndLink.style.top = 0, this.$fullVidEndLink.style.left = 0)
        }
        if (this.use_parameter_menu) {
            var D = [];
            if (this.qualitymenu && this.showqualitiesmenu && D.push(this.qualitymenu), this.advancedmenu && this.showadvancedmenu && D.push(this.advancedmenu), this.speedmenu && this.showspeedmenu && D.push(this.speedmenu), !this.use_browser_controls)
                if (this.desktop_view) {
                    var I = this.progressbarbg.offsetHeight / g,
                        O = this.fullscreenbarbt.offsetWidth,
                        M = Math.floor(200 * i),
                        F = Math.floor(15 * i);
                    this.parametersmenu.style.bottom = I + "px", this.parametersmenu.style.right = O + "px", this.parametersmenu.style.minWidth = M + "px", this.parametersmenu.style.fontSize = F + "px";
                    for (var N in D) D[N].style.right = O + Math.floor(5 * i) + "px", D[N].style.minWidth = M + "px", D[N].style.fontSize = F + "px", D[N].style.bottom = I + "px"
                } else {
                    var B = this.parametersmenu.children.length,
                        U = this.progressbarbg.offsetHeight / g,
                        j = 5 * r,
                        V = Math.floor(24 * i);
                    this.parametersmenu.style.bottom = U + "px",
                        this.parametersmenu.style.right = j + "px";
                    try {
                        this.parametersmenu.style.setProperty("--plyr-stng-maxh", this.video_div.offsetHeight - U - j + "px"), this.parametersmenu.style.setProperty("--plyr-stng-anim", "0.2s")
                    } catch (G) {}
                    this.parametersmenu.style.fontSize = V + "px", this.parametersmenu.style.lineHeight = V + "px";
                    for (var N in D) {
                        B = Math.max(B, D[N].children.length), D[N].style.bottom = U + "px", D[N].style.right = j + "px";
                        try {
                            D[N].style.setProperty("--plyr-stng-maxh", this.video_div.offsetHeight - U - j + "px"), D[N].style.setProperty("--plyr-stng-anim", "0.2s")
                        } catch (G) {}
                        D[N].style.fontSize = V + "px", D[N].style.lineHeight = V + "px"
                    }
                } this.redrawParamers()
        } else {
            var H = [this.lowqualitybt, this.highqualitybt];
            for (var A in H) a(H[A], 100, null, 7), H[A].style.fontSize = Math.floor(17 * i) + "px", H[A].style.right = s + "px";
            this.lowqualitybt.style.bottom = Math.max(25 * i, this.highqualitybt.offsetHeight) + 5.3 * s + 7 + "px", this.highqualitybt.style.bottom = 5 * s + 7 + "px"
        }
        this.is_embed && (this.desktop_view ? (this.logoxvideos.style.top = Math.floor(s / 3) + "px", this.logoxvideos.style.left = Math.floor(s / 3) + "px") : (this.logoxvideos.style.bottom = "22%", this.logoxvideos.style.left = "5%")), this.updateDuration(), e <= 340 || t <= 260 ? (this.addClass(this.video_div, "pl-mobile"), this.addClass(this.video_div, "pl-mobile-small")) : e <= 480 ? (this.addClass(this.video_div, "pl-mobile"), this.removeClass(this.video_div, "pl-mobile-small")) : (this.removeClass(this.video_div, "pl-mobile"), this.removeClass(this.video_div, "pl-mobile-small"))
    },
    positionBigButtons: function() {
        (this.bigbuttons.offsetWidth || this.bigbuttons.offsetHeight) && (this.use_browser_controls && !this.is_new_iphone ? (this.bigbuttons.style.left = Math.floor(this.video_div.offsetWidth / 2 - this.bigbuttons.offsetWidth / 2) + "px", this.bigbuttons.style.bottom = Math.floor(this.video_div.offsetHeight / 2 - 1.5 * this.bigbuttons.offsetHeight) + "px") : this.addClass(this.bigbuttons, "big-buttons-center"))
    },
    updateBtVisibity: function() {
        if (this.updateDuration(), this.presetHide(["logoxvideos", "videotitlediv", "commercialcomdiv", "loaderpic", "picture_div", "playbt", "pausebt", "chromecastbt", "plprevbt", "plnextbt", "replaybt", "downloadbt", "streambt", "$browserCtrlsDlBt", "highqualitybt", "lowqualitybt", "playbarbt", "pausebarbt", "replaybarbt", "$soundOnBarBt", "$soundOffBarBt", "$soundVolume", "downloadbarbt", "expandbarbt", "fullscreenbarbt", "$autoplayBarBt", "paramsbarbt", "subscribebarbt", "plnextbarbt", "plprevbarbt", "parametersmenu", "qualitymenu", "advancedmenu", "speedmenu", "parameterbthd", "progressbarcontainer", "progressbarbg", "progressbartext", "$sponsorLink", "messagediv", "errordlg", "$relatedDivContainer", "plnextcontainer", "videoads_title_div", "videoEndedDesktopMoreDiv", "slowseek_info"]), null !== this.$fullVidTopLink && this.presetHide(["$fullVidTopLink"]), null !== this.$fullVidEndLink && this.presetHide(["$fullVidEndLink"]), this.isPlayError) return this.displayLoadError(), void this.applyVisibility();
        (this.bSlowSeekIsInit || this.bSlowSeekCanInstantInit) && this.presetShow(["slowseek_info"]);
        var e = this.getChromecastMedia();
        if (this.chromecastdetected && e) return this.presetShow(["chromecastbt", "picture_div"]), this.presetShow(["progressbarbg"]), this.bIsCustomMuted || this.presetShow("$soundVolume"), this.presetShow(["progressbarcontainer", "progressbartext"]), "PLAYING" !== e.playerState ? (this.presetShow("playbarbt"), this.presetShow("playbt")) : (this.presetShow("pausebarbt"), this.presetShow("pausebt")), e.volume.muted || 0 === e.volume.level ? this.presetShow("$soundOffBarBt") : this.presetShow("$soundOnBarBt"), void this.applyVisibility();
        if ((this.showbigthumb || this.video.ended) && (this.presetShow("picture_div"), this.video.ended && (this.picture_div.className = "video-pic picture-related")), this.showmessage) return this.presetShow("messagediv"), void this.applyVisibility();
        if (this.is_embed && (this.presetShow("logoxvideos"), this.presetHide("videotitlediv"), null !== this.$fullVidTopLink && this.presetHide(["$fullVidTopLink"])), this.use_browser_controls && this.is_new_iphone && !this.playClicked && this.canShowPlay()) return this.presetShow("playbt"), void this.applyVisibility();
        if (this.showBigProgressBar() ? (this.presetShow("progressbarbg"), this.video.muted || 0 === this.video.volume ? this.presetShow("$soundOffBarBt") : this.presetShow("$soundOnBarBt"), this.bEnableVolumeControl && (this.bIsCustomMuted || this.presetShow("$soundVolume")), this.is_embed && !this.fullscreenAllowed() || (this.is_new_iphone ? this.is_new_iphone && this.playClicked && this.presetShow("fullscreenbarbt") : this.presetShow("fullscreenbarbt")), this.is_embed || this.isFullScreen || this.presetShow("expandbarbt"), this.desktop_view && (this.video.paused ? this.presetShow("playbarbt") : this.presetShow("pausebarbt")), this.desktop_view && this.presetShow("downloadbarbt"), this.showAutoplay() && this.presetShow("$autoplayBarBt"), this.use_parameter_menu && (this.presetShow("paramsbarbt"), this.use_hls && this.hlsobj && this.hlsobj.currentLevel > 2 && this.presetShow("parameterbthd"), this.showparametersmenu ? (this.showqualitiesmenu ? this.presetShow("qualitymenu") : this.showspeedmenu ? this.presetShow("speedmenu") : this.showadvancedmenu ? this.presetShow("advancedmenu") : this.presetShow("parametersmenu"), this.addClass(this.paramsbarbt, "is-open")) : this.removeClass(this.paramsbarbt, "is-open")), this.video.duration && (this.is_new_iphone ? this.playClicked && this.presetShow(["progressbarcontainer", "progressbartext"]) : this.presetShow(["progressbarcontainer", "progressbartext"])), this.showpausebt && this.presetShow(["pausebt", "plprevbt", "plnextbt"]), this.playlist && (this.playlist.prev && this.presetShow("plprevbarbt"), this.playlist.next && this.presetShow("plnextbarbt"))) : this.desktop_view && !this.completHideSeekBar && this.presetShow(["progressbarbg", "progressbarcontainer"]), (this.allow_showInfos || this.video.paused || !this.canPlay || this.isBuffering) && (!this.desktop_view || this.is_embed || this.bSlowSeekIsInit || this.bSlowSeekCanInstantInit || this.presetShow(["videotitlediv"]), null !== this.$fullVidTopLink && this.presetShow(["$fullVidTopLink"]), this.playClicked && (this.videoads_title_div ? this.presetShow(["videoads_title_div"]) : this.bSlowSeekIsInit || this.bSlowSeekCanInstantInit || this.presetShow(["$sponsorLink"])), this.use_browser_controls && (this.is_ios || this.is_ipad || this.presetShow(["$browserCtrlsDlBt", "plprevbt", "plnextbt"]), (this.is_ios || this.is_old_ios) && !this.use_native_hls && this.url_high && (this.presetShow(["highqualitybt", "lowqualitybt"]), this.force_lq ? (this.lowqualitybt.className = "quality-btn quality-forced", this.highqualitybt.className = "quality-btn quality-default") : (this.lowqualitybt.className = "quality-btn quality-default", this.highqualitybt.className = "quality-btn quality-forced")))), "object" == typeof this.video && "undefined" != typeof this.video.currentTime) {
            var t = !this.video.paused && this.video.currentTime < this.iCommercialComDuration,
                i = this.video.paused && this.video.currentTime > 0 && this.video.currentTime < this.iCommercialComDuration;
            !this.bCommercialComOver && this.video.currentTime >= this.iCommercialComDuration && (this.bCommercialComOver = !0);
            !this.bCommercialComOver && (t || i) ? this.presetShow(["commercialcomdiv"]) : this.presetHide(["commercialcomdiv"])
        }
        return !this.canPlay || this.isBuffering ? (this.presetHide(["highqualitybt", "lowqualitybt", "pausebt"]), this.use_browser_controls || (this.isBuffering ? this.presetHide(["plprevbt", "plnextbt"]) : this.presetShow(["plprevbt", "plnextbt"])), this.is_ios || this.is_ipad || (this.use_hls || this.playClicked || "none" != this.video.preload || !this.canShowPlay() ? (new Date).getTime() - this.lastBufferTimestamp > 500 ? this.presetShow("loaderpic") : this.firstTimeBuffered && !this.playClicked && this.canShowPlay() && this.presetShow(["playbt"]) : this.presetShow(["playbt"])), void this.applyVisibility()) : this.video.ended ? (this.plnextloaded ? this.presetShow("plnextcontainer") : null !== this.$fullVidEndLink ? this.presetShow("$fullVidEndLink") : this.presetShow("$relatedDivContainer"), this.presetShow(["replaybt", "replaybarbt", "progressbarbg"]), this.desktop_view && !this.is_embed && this.presetShow(["videotitlediv", "videoEndedDesktopMoreDiv"]), null !== this.$fullVidTopLink && this.presetShow(["$fullVidTopLink"]), this.use_browser_controls || this.presetShow("progressbarcontainer", "progressbartext"), this.presetHide(["logoxvideos", "playbarbt", "pausebarbt", "downloadbarbt", "$soundOnBarBt", "$soundOffBarBt", "$soundVolume", "$autoplayBarBt", "paramsbarbt", "highqualitybt", "lowqualitybt", "playbt", "pausebt", "plprevbt", "plnextbt", "$browserCtrlsDlBt"]), this.is_embed && !this.fullscreenAllowed() || this.presetShow("fullscreenbarbt"), this.is_embed || this.isFullScreen || this.presetShow("expandbarbt"), this.playlist && (this.playlist.prev && this.presetShow("plprevbarbt"), this.playlist.next && this.presetShow("plnextbarbt")), void this.applyVisibility()) : this.video.paused ? (this.presetHide(["pausebt"]), this.presetShow(["plprevbt", "plnextbt"]), this.playClicked || this.use_browser_controls ? (this.is_ios || this.is_ipad || this.presetShow("$browserCtrlsDlBt"), !this.desktop_view || this.is_embed || this.bSlowSeekIsInit || this.bSlowSeekCanInstantInit || this.presetShow(["videotitlediv"]), null !== this.$fullVidTopLink && this.presetShow(["$fullVidTopLink"]), this.hideElt(this.playbttxt)) : this.desktop_view || this.chromecastdetected && this.presetShow(["chromecastbt"]), this.use_browser_controls || (this.playClicked && !this.allow_showInfos ? (this.presetHide(["logoxvideos", "progressbarbg", "fullscreenbarbt", "expandbarbt", "videotitlediv", "progressbarcontainer", "playbarbt", "pausebarbt", "downloadbarbt", "$soundOnBarBt", "$soundOffBarBt", "$soundVolume", "$autoplayBarBt", "paramsbarbt", "highqualitybt", "lowqualitybt", "progressbartext", "playbt", "pausebt", "plprevbt", "plnextbt", "$browserCtrlsDlBt", "videoads_title_div", "$sponsorLink"]), null !== this.$fullVidTopLink && this.presetHide(["$fullVidTopLink"])) : !this.bSlowSeekIsInit && this.canShowPlay() && this.presetShow(["playbt"])), void this.applyVisibility()) : void this.applyVisibility()
    },
    showPause: function() {
        if (!this.desktop_view) {
            console.info("show pause"), this.showpausebt = !0, this.showpausebt_timer && clearTimeout(this.showpausebt_timer);
            var e = this;
            this.showpausebt_timer = setTimeout(function() {
                console.log("Show pausebt end"), e.hidePause()
            }, 3e3), this.updateBtVisibity(), this.positionBigButtons()
        }
    },
    hidePause: function() {
        this.showpausebt = !1, this.updateBtVisibity()
    },
    showInfos: function(e) {
        this.allow_showInfos = !0, this.allow_showInfosTimer && clearTimeout(this.allow_showInfosTimer);
        var t = this;
        this.allow_completHideSeekBar && (clearTimeout(this.allow_completHideSeekBar), delete this.allow_completHideSeekBar), this.completHideSeekBar = !1, this.allow_showInfosTimer = setTimeout(function() {
            console.log("Show Info end"), t.allow_showInfos = !1, t.allow_showInfosTimer = !1, t.showpausebt = !1, t.showsoundcontrol = !1, t.video.paused || t.desktop_view || (t.showparametersmenu = !1, t.showqualitiesmenu = !1, t.showspeedmenu = !1, t.showadvancedmenu = !1), t.touchSeekHide(), t.updateBtVisibity(), t.redraw(), t.desktop_view && (t.video_div.style.cursor = "none", t.allow_completHideSeekBar = setTimeout(function() {
                t.completHideSeekBar = !0, t.updateBtVisibity()
            }, 5e3))
        }, 3e3), this.updateBtVisibity(), e ? this.positionBigButtons() : this.redraw()
    },
    hideInfos: function() {
        this.allow_showInfos = !1, this.allow_showInfosTimer && clearTimeout(this.allow_showInfosTimer), this.allow_showInfosTimer = !1, this.showpausebt = !1, this.showsoundcontrol = !1, this.touchSeekHide(), this.updateBtVisibity()
    },
    seek: function(e) {
        var t = this.getChromecastMedia();
        if (t && t.seek) {
            console.log("html5player.seek(" + e.toFixed(2) + ") Chromecast");
            var i = new chrome.cast.media.SeekRequest;
            return i.currentTime = e, void t.seek(i, function() {
                console.log("Chromecast Seek ok")
            })
        }
        if (this.video.duration) {
            if (e == NaN || e == Infinity) return void console.log("html5player.seek : Invalid value", e);
            if (e < 0 || e > 1e5) return void console.log("html5player.seek : Invalid value", e);
            this.use_hls, xv.console.log("html5player.seek(" + e.toFixed(2) + ")", "Player"), this.video.currentTime = e.toFixed(2), this.showbigthumb = !1
        }
    },
    play: function() {
        console.log("html5player.play()"), xv.console.log("html5player.play()", "Player"), this.video.poster = "";
        var e = this.getChromecastMedia();
        if (e) e.play();
        else {
            this.video.play()["catch"](function(e) {
                console.error("html5player.play() error", e)
            })
        }
    },
    replay: function() {
        this.plnextclosed = !1, this.stopPlaylistCountdown(), this.endReached = !1, this.video.currentTime = 0, this.play()
    },
    pause: function() {
        console.log("html5player.pause()"), xv.console.log("html5player.pause()", "Player"), this.videoads && this.videoads.video && !1 === this.videoads.video.paused && this.videoads.video.pause();
        var e = this.getChromecastMedia();
        e ? e.pause() : this.video.pause()
    },
    mute: function(e) {
        xv.console.log("html5player.mute()", "Player"), e = void 0 === e || e, e && this.loadPreference(), this.video.muted = !0, this.bIsCustomMuted = !0;
        var t = this.getChromecastMedia();
        t && t.setVolume && t.setVolume(new chrome.cast.media.VolumeRequest(new chrome.cast.Volume(null, !0)), function() {
            console.log("Chromecast setVolume mute")
        }, function(e) {
            console.error("Chromecast setVolume error", e)
        }), e && this.savePreference()
    },
    unmute: function(e) {
        xv.console.log("html5player.unmute()", "Player"), e = void 0 === e || e, e && this.loadPreference(), this.video.muted = !1, this.bIsCustomMuted = !1, this.bEnableVolumeControl && (this.$soundVolumeLvl.style.width = Math.round(100 * this.video.volume) + "%");
        var t = this.getChromecastMedia();
        t && t.setVolume && t.setVolume(new chrome.cast.media.VolumeRequest(new chrome.cast.Volume(null, !1)), function() {
            console.log("Chromecast setVolume unmut")
        }, function(e) {
            console.error("Chromecast setVolume error", e)
        }), e && this.savePreference()
    },
    setVolume: function(e, t) {
        if (xv.console.log("html5player.setVolume(" + e + ", bSave:" + t + ")", "Player"), t = void 0 === t || t, t && this.loadPreference(), !this.bIsCustomMuted) {
            this.video.muted = !1, this.video.volume = e, this.removeClass(this.$soundOnBarBtIcon, "pif-sound-0 pif-sound-1 pif-sound-2"), this.addClass(this.$soundOnBarBtIcon, "pif-sound-" + (e > .59 ? "2" : e > .2 ? "1" : "0")), this.bEnableVolumeControl && (this.$soundVolumeLvl.style.width = Math.round(100 * e) + "%");
            var i = this.getChromecastMedia();
            i && i.setVolume && i.setVolume(new chrome.cast.media.VolumeRequest(new chrome.cast.Volume(e, !1)), function() {
                console.log("Chromecast setVolume ok to", e)
            }, function(e) {
                console.error("Chromecast setVolume error", e)
            }), t && this.savePreference()
        }
    },
    initVolumeEvents: function() {
        var e = this;
        this.$soundVolume.hide = function() {
            e.bIsCustomMuted ? (e.addClass(e.$soundVolume, "is-muted"), e.removeClass(e.$soundVolume, "is-hidden-param")) : (e.removeClass(e.$soundVolume, "is-muted"), e.addClass(e.$soundVolume, "is-hidden-param"))
        }, this.$soundVolume.show = function() {
            e.removeClass(e.$soundVolume, "is-hidden-param"), e.removeClass(e.$soundVolume, "is-muted")
        }, this.setVolumeEvents = this.setVolumeEvents.bind(this), this.unsetVolumeEvents = this.unsetVolumeEvents.bind(this), this.updateVolumeOnEvent = this.updateVolumeOnEvent.bind(this), this.$soundVolume.addEventListener("click", function(t) {
            console.log("Sound vol global click"), t.stopPropagation(), e.allClickEvents(t), e.unsetVolumeEvents(t), e.updateVolumeOnEvent(t)
        }, !1), this.$soundVolume.addEventListener("mousedown", this.setVolumeEvents, !1)
    },
    setVolumeEvents: function(e) {
        e.preventDefault(), e.stopPropagation(), console.log("setVolumeEvents", this, e.type), this.updateVolumeOnEvent(e), this.$soundVolume.addEventListener("mousemove", this.updateVolumeOnEvent, !1), this.$soundVolume.addEventListener("mouseenter", this.unsetVolumeEvents, !1), this.$soundVolume.addEventListener("mouseleave", this.unsetVolumeEvents, !1), this.$soundVolume.addEventListener("mouseup", this.unsetVolumeEvents, !1), this.$soundVolume.addEventListener("dragend", this.unsetVolumeEvents, !1)
    },
    unsetVolumeEvents: function(e) {
        console.log("fnRemoveMouseMoveVolumeEvents", e.type), this.$soundVolume.removeEventListener("mousemove", this.updateVolumeOnEvent), this.$soundVolume.removeEventListener("mouseenter", this.unsetVolumeEvents), this.$soundVolume.removeEventListener("mouseleave", this.unsetVolumeEvents), this.$soundVolume.removeEventListener("mouseup", this.unsetVolumeEvents), this.$soundVolume.removeEventListener("dragend", this.unsetVolumeEvents)
    },
    updateVolumeOnEvent: function(e) {
        e.preventDefault(), e.stopPropagation();
        var t = this.touch_getPosition(e),
            i = this.$soundVolume.getBoundingClientRect();
        t -= i ? i.left : this.$soundVolume.offsetLeft;
        var r = t / this.$soundVolume.offsetWidth * 100;
        r > 90 ? r = 100 : r < 10 && (r = 0), this.setVolume(r / 100, "mousemove" !== e.type && "mousedown" !== e.type)
    },
    setLQ: function() {
        this.force_lq || (this.loadPreference(), this.force_lq = !0, this.savePreference(), this.loadVideoSrc())
    },
    setHQ: function() {
        this.force_lq && (this.loadPreference(), this.force_lq = !1, this.savePreference(), this.loadVideoSrc())
    },
    setForceNoLoop: function(e) {
        this.loadPreference(), this.force_no_loop = e, this.savePreference()
    },
    isShortVideo: function() {
        return this.video.duration && this.video.duration <= 90
    },
    enableWakeLock: function() {
        if (this.wakelock_available) {
            var e = this;
            this.wakelock_active = !0, navigator.wakeLock.request("screen").then(function(t) {
                e.wakelock = t
            }), this.added_listener || (this.added_listener = !0, document.addEventListener("visibilitychange", function() {
                "visible" === document.visibilityState && e.wakelock_active && e.enableWakeLock()
            }))
        }
    },
    disableWakeLock: function() {
        if (this.wakelock_available && this.wakelock) {
            var e = this;
            this.wakelock.release().then(function() {
                e.wakelock_active = !1, e.wakelock = null
            })
        }
    },
    fullscreen: function() {
        if (console.log("this.isFullScreen: " + this.isFullScreen), this.fullscreenSupported()) document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : this.video_div.requestFullscreen ? this.video_div.requestFullscreen() : this.video_div.mozRequestFullScreen ? this.video_div.mozRequestFullScreen() : this.video_div.webkitRequestFullscreen ? this.video_div.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : this.video_div.msRequestFullscreen ? this.video_div.msRequestFullscreen() : alert("Not supported"), this.toggleFullscreen();
        else {
            if (this.is_android_app) return this.isFakeFullScreen ? (this.removeClass(this.global_div, "fakefullscreen"), this.isFakeFullScreen = !1, this.global_div_OriginalParentNode.appendChild(this.global_div)) : (this.addClass(this.global_div, "fakefullscreen"), this.isFakeFullScreen = !0, document.body.appendChild(this.global_div)), this.isPlaying && this.play(), void this.toggleFullscreen();
            if (this.fullscreeniOSSupported()) return void this.video.webkitEnterFullscreen()
        }
    },
    hasFullscreenElement: function() {
        return !!this.isFakeFullScreen || !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)
    },
    toggleFullscreen: function() {
        var e = this.hasFullscreenElement();
        if (e !== this.isFullScreen) {
            if (e && !this.isFullScreen)
                if (this.fullscreen_asked = (new Date).getTime(), this.video_div.style.height = "100%", this.use_hls && !this.desktop_view && this.video.videoHeight && window.screen.orientation) {
                    var t = this.video.videoWidth / this.video.videoHeight;
                    console.log("Video ratio", t), t > 1.3 && (window.screen.orientation.lock("landscape"), this.is_android_app && (console.log("AndroidInterface.message('HORIZ')"), "undefined" != typeof AndroidInterface && AndroidInterface.message("HORIZ"))), t < .9 && (window.screen.orientation.lock("portrait"), this.is_android_app && (console.log("AndroidInterface.message('VERT')"), "undefined" != typeof AndroidInterface && AndroidInterface.message("VERT")))
                } else this.is_android_app && (console.log("AndroidInterface.message('UNKOWN')"), "undefined" != typeof AndroidInterface && AndroidInterface.message("UNKOWN"));
            else this.video_div.style.height = "", this.is_android_app && (console.log("AndroidInterface.message('OFF')"), "undefined" != typeof AndroidInterface && AndroidInterface.message("OFF"));
            this.isFullScreen = e, this.updateBtVisibity(), this.redraw(), this.send_debug_event("fullscreen"), this.redrawtimer && clearTimeout(this.redrawtimer);
            var i = this;
            this.redrawtimer = setTimeout(function() {
                i.redrawtimer = !1, i.redraw()
            }, 100)
        }
    },
    fullscreeniOSSupported: function() {
        return !!document.createElement("video").webkitEnterFullscreen
    },
    fullscreenSupported: function() {
        if (this.is_android_app) return !1;
        var e = document.createElement("div");
        return !!e.requestFullscreen || (!!e.mozRequestFullScreen || (!!e.webkitRequestFullscreen || !!e.msRequestFullscreen))
    },
    fullscreenAllowed: function() {
        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
    },
    toggleAutoplaySetting: function() {
        if (this.areCookiesFeatureDisabled()) return void console.log("toggleAutoplaySetting => RETURN !areCookiesFeatureDisabled");
        this.loadPreference(), "undefined" == typeof this.use_autoplay_setting ? this.use_autoplay_setting = this.use_autoplay : this.use_autoplay_setting = !this.use_autoplay_setting, this.setAutoplayToggleBtn(this.useAutoplay()), this.savePreference()
    },
    enablePlayerPreferencesFeature: function() {
        console.log("enable player preferences feature"), xv.disclaimer.setPendingFeatureToggle(S_F_COOKIES_PLAYER_PREFERENCES, !0), xv.disclaimer.callNextPendingFeatureToggle()
    },
    createAutoplayToggleBtn: function() {
        var e = this;
        this.$autoplayBarBt = this.createElt("div", "autoplay-btn"), this.$autoplayBarBt.setAttribute("id", "anc-tst-autoplay-btn"), this.$autoplayBarBtPic = document.createElement("div"), this.$autoplayBarBtPic.className = "autoplay-bar-bt";
        var t = document.createElement("div");
        t.className = "toggle-background-bar";
        var i = document.createElement("div");
        i.className = "toggle-circle", this.$autoplayToggleIcon = document.createElement("span"), this.$autoplayToggleIcon.className = "player-icon-f pif-play", this.setAutoplayToggleBtn(this.useAutoplay()), this.setAutoplayToggleBtnDisabled(this.areCookiesFeatureDisabled()), i.appendChild(this.$autoplayToggleIcon), this.$autoplayBarBtPic.appendChild(t), this.$autoplayBarBtPic.appendChild(i), this.$autoplayBarBt.appendChild(this.$autoplayBarBtPic), this.rightbuttonsbar.appendChild(this.$autoplayBarBt), this.$autoplayBarBt.addEventListener("click", function(t) {
            if (console.log("autoplaybt click"), t.stopPropagation(), e.allClickEvents(t), e.setAutoplayToggleBtnDisabled(e.areCookiesFeatureDisabled()), e.autoplaybtndisabled) return console.log("autoplaybtndisabled => showPreferencesWarningTooltip"), void e.showPreferencesWarningTooltip(e.$autoplayBarBt);
            e.toggleAutoplaySetting(), e.showInfos(!0)
        }, !1), this.setupButtonBarEvents(this.$autoplayBarBt, !0, !0), "object" == typeof xv.disclaimer && document.addEventListener(xv.disclaimer.EVENT.CLOSE_POP, function() {
            e.setAutoplayToggleBtnDisabled(e.areCookiesFeatureDisabled())
        })
    },
    closeMenuAndShowTooltip: function() {
        var e = this.paramsbarbt,
            t = {
                iPosition: 2
            };
        e || (e = this.leftbuttonsbar, t.iPosition = 1, t.iSideMargin = 20), this.showPreferencesWarningTooltip(e, t), this.showparametersmenu = !1, this.showqualitiesmenu = !1, this.showadvancedmenu = !1, this.showspeedmenu = !1, this.showInfos(!0)
    },
    showPreferencesWarningTooltip: function(e, t) {
        t = "object" == typeof t ? t : {}, t.$relativeTo = e, t.sText = '<span class="pl-tooltip-link">' + this.i18n.__("player.click_here_to_update_cookies", {
            "%icon%": this.getHTML(this.createIconSpan("save"))
        }) + "</span>", t.iPosition = "number" == typeof t.iPosition ? t.iPosition : 2;
        var i = this;
        t.onClick = function() {
            i.enablePlayerPreferencesFeature(), i.setAutoplayToggleBtnDisabled(!1), setTimeout(function() {
                i.savePreference()
            }, 1e3)
        }, this.showTooltip(t)
    },
    showTooltip: function(e) {
        var t = this;
        if (!e.$relativeTo) return void console.error("showTooltip : $relativeTo is missing");
        if (!e.sText) return void console.error("showTooltip : sText is missing");
        if (e.iPosition || (e.iPosition = 1), e.iPosition < 1 || e.iPosition > 4) return void console.error("showTooltip : iPosition is invalid");
        e.iDuration || (e.iDuration = 2900), e.iSideMargin || (e.iSideMargin = 0), e.iSideMarginMobile || (e.iSideMarginMobile = 0), e.sSideMarginUnit || (e.sSideMarginUnit = "px"), e.iFadeDuration || (e.iFadeDuration = 150), e.onClick || (e.onClick = function() {}), e.bCloseOnClick || (e.bCloseOnClick = !0), e.iMaxScreenWidth || (e.iMaxScreenWidth = 100);
        var i = {
                1: "top-left",
                2: "top-right",
                3: "bottom-left",
                4: "bottom-right"
            } [e.iPosition],
            r = document.createElement("div");
        r.className = "pl-tooltip", r.classList.add("pl-tooltip-" + i), r.style.transition = "opacity " + e.iFadeDuration + "ms", e.iSideMargin && (1 !== e.iPosition && 3 !== e.iPosition || (r.style.marginLeft = e.iSideMargin + e.sSideMarginUnit), 2 !== e.iPosition && 4 !== e.iPosition || (r.style.marginRight = e.iSideMargin + e.sSideMarginUnit)), e.iSideMarginMobile && window.innerWidth < 600 && (1 !== e.iPosition && 3 !== e.iPosition || (r.style.marginLeft = e.iSideMarginMobile + e.sSideMarginUnit), 2 !== e.iPosition && 4 !== e.iPosition || (r.style.marginRight = e.iSideMarginMobile + e.sSideMarginUnit));
        var s = document.createElement("div");
        s.className = "pl-tooltip-text", s.innerHTML = e.sText;
        var o = document.createElement("div");
        if (o.className = "pl-tooltip-arrow", e.iMaxScreenWidth) {
            var n = window.innerWidth * e.iMaxScreenWidth / 100;
            r.style.width = window.innerWidth + "px", s.style.maxWidth = n + "px"
        }
        r.appendChild(s), r.appendChild(o);
        var a = window.getComputedStyle(e.$relativeTo);
        "absolute" !== a.position && "relative" !== a.position && (e.$relativeTo.style.position = "relative");
        var l = !1,
            d = function() {
                l || (l = !0, r.classList.add("pl-tooltip-fadeout"), setTimeout(function() {
                    r.remove()
                }, e.iFadeDuration))
            };
        r.addEventListener("click", function(i) {
            i.stopPropagation(), t.allClickEvents(i), e.bCloseOnClick && d(), e.onClick()
        }), r.classList.add("pl-tooltip-fadeout"), setTimeout(function() {
            r.classList.remove("pl-tooltip-fadeout"), setTimeout(function() {
                d()
            }, e.iDuration), document.addEventListener("click", function(e) {
                d()
            })
        }, 10), e.$relativeTo.appendChild(r)
    },
    setAutoplayToggleBtn: function(e) {
        e ? (this.addClass(this.$autoplayBarBtPic, "autoplay-on"), this.addClass(this.$autoplayToggleIcon, "pif-play"), this.removeClass(this.$autoplayToggleIcon, "pif-pause")) : (this.removeClass(this.$autoplayBarBtPic, "autoplay-on"), this.addClass(this.$autoplayToggleIcon, "pif-pause"), this.removeClass(this.$autoplayToggleIcon, "pif-play"))
    },
    setAutoplayToggleBtnDisabled: function(e) {
        if (this.$autoplayBarBt) {
            if (e ? (this.$autoplayBarBt.setAttribute("disabled", ""), this.autoplaybtndisabled = !0) : (this.$autoplayBarBt.removeAttribute("disabled"), this.autoplaybtndisabled = !1), e) var t = this.i18n.__("player.cookie_feature_disabled");
            else var t = this.i18n.__("player.autoplay_setting");
            this.$autoplayBarBt.title = this.getDecodedTitle(t)
        }
    },
    getDecodedTitle: function(e) {
        var t = document.createElement("textarea");
        return t.innerHTML = e, t.value
    },
    hideSponsor: function(e) {
        if (this.showsponsor) return e ? (this.showsponsor = !1, void this.updateBtVisibity()) : void(this.video.duration && (this.video.currentTime < .1 * this.video.duration || (this.showsponsor = !1, this.updateBtVisibity())))
    },
    showVideoControls: function() {
        console.log("showVideoContols() : Showing controls"), this.video.className = "", this.video.controls = "controls", this.showbigthumb = !1
    },
    hideVideoControls: function() {
        console.log("hideVideoControls() : Hide controls"), this.video.className = "ios_player", this.video.controls = !1
    },
    loadVideoSrc: function() {
        if (this.saveNeedSeek(), this.use_hls) return void this.initHls();
        if (this.use_native_hls) return console.log("Use native HLS", this.url_hls), this.video.src = this.url_hls, console.log("loadVideoSrc() : is_ios", this.is_ios), void(this.is_ios && this.video.load());
        var e = this.url_high;
        e || (e = this.url_low), this.force_lq && (e = this.url_low), console.log("Use HTML5 MP4", e), this.video.src = e, console.log("loadVideoSrc() : is_ios", this.is_ios), this.is_ios && this.video.load()
    },
    saveNeedSeek: function() {
        this.video.currentTime && (this.pending_seek = this.video.currentTime, this.isPlaying || this.isBuffering && !this.video.paused ? this.seek_was_playing = !0 : this.seek_was_playing = !1, console.log("saveNeedSeek at " + this.pending_seek + " (was playing " + this.seek_was_playing + ")"))
    },
    checkNeedSeek: function() {
        this.pending_seek && (this.seek_was_playing ? (console.log("seekNeed detected to ", this.pending_seek, " and play needed"), this.video.play()) : (console.log("seekNeed detected to ", this.pending_seek), this.video.pause()), this.video.currentTime = this.pending_seek.toFixed(2), this.pending_seek = 0)
    },
    cursorOverProgressBar: function() {
        this.cursoroverprogressbartimer && (clearTimeout(this.cursoroverprogressbartimer), this.cursoroverprogressbartimer = !1), this.cursoroverprogressbar = !0, this.redraw()
    },
    cursorLeaveProgressBar: function() {
        var e = this;
        this.cursoroverprogressbartimer || (this.cursoroverprogressbartimer = setTimeout(function() {
            e.showparametersmenu = !1, e.showqualitiesmenu = !1, e.showspeedmenu = !1, e.showadvancedmenu = !1, e.cursoroverprogressbar = !1, e.updateBtVisibity(), e.redraw()
        }, 2e3))
    },
    showBigProgressBar: function() {
        if (this.use_browser_controls) return !1;
        if (this.cursoroverprogressbar) return !0;
        if (this.video.ended) return !0;
        if (this.desktop_view) {
            if (this.allow_showInfos || this.video.paused || !this.canPlay || this.isBuffering) return !0;
            if (!this.playClicked) return !0
        } else if (this.allow_showInfos || this.video.paused || !this.canPlay || this.isBuffering) return !0;
        return !1
    },
    computeThumbSlideType: function() {
        if (!this.thumb_slide_big) return void(this.thumb_slide_type = HTML5Player.TYPE_SMALL);
        if (this.use_native_hls) return this.thumb_slide_min && this.desktop_view ? void(this.thumb_slide_type = HTML5Player.TYPE_MINUTE) : void(this.thumb_slide_type = HTML5Player.TYPE_FULL);
        if (!this.use_hls) return void(this.thumb_slide ? this.thumb_slide_type = HTML5Player.TYPE_SMALL : this.thumb_slide_type = HTML5Player.TYPE_FULL);
        if (!this.desktop_view) return void(this.thumb_slide_type = HTML5Player.TYPE_FULL);
        if (!this.thumb_slide_min) return void(this.thumb_slide_type = HTML5Player.TYPE_FULL);
        var e = this.get_networkspeed();
        return e ? e < 6e3 ? void(this.thumb_slide_type = HTML5Player.TYPE_FULL) : void(this.thumb_slide_type = HTML5Player.TYPE_MINUTE) : void(this.thumb_slide ? this.thumb_slide_type = HTML5Player.TYPE_SMALL : this.thumb_slide_type = HTML5Player.TYPE_FULL)
    },
    recoverError: function(e) {
        if (console.log("Error recovery", (new Date).getTime(), this.lastErrorRecovery), !this.pendingUrlRPCUpdate) {
            if (this.send_debug_event("playerror"), this.use_hls && 7 == this.id_cdn_hls && this.sendDebugLogs(), !e && (new Date).getTime() - this.lastErrorRecovery < 18e5) return console.log("Error recovery. Too fast."), this.isPlayError = !0, void this.updateBtVisibity();
            this.lastErrorRecovery = (new Date).getTime(), this.updateUrlRPC()
        }
    },
    updateUrlRPC: function() {
        var e = this;
        this.pendingUrlRPCUpdate = !0;
        var t = this.id_cdn;
        (this.use_hls || this.use_native_hls) && (t = this.id_cdn_hls), xv.console.log("updateUrlRPC try to update URL after a fatal error", "Player");
        var i = createRequestObject();
        i.open("GET", "/html5player/getvideo/" + this.encoded_id_video + "/" + t, !0), i.onreadystatechange = function() {
            if (4 === i.readyState) {
                if (e.pendingUrlRPCUpdate = !1, e.isPlayError = !1, e.updateBtVisibity(), 200 !== i.status) return e.isPlayError = !0, e.updateBtVisibity(), void console.log("updateUrlRPC error status", i.status);
                try {
                    var t = JSON.parse(i.responseText)
                } catch (r) {
                    return e.isPlayError = !0, e.updateBtVisibity(), void console.log("Url RPC Call bad json")
                }
                e.url_hls && t.hls && (e.url_hls = t.hls, e.id_cdn_hls = t.hls_idcdn, xv.console.log("updateUrlRPC update hls " + t.hls, "Player")), e.url_low && t.mp4_low && (e.url_low = t.mp4_low, e.id_cdn = t.mp4_idcdn, xv.console.log("updateUrlRPC mp4 low " + t.mp4_low, "Player")), e.url_high && t.mp4_high && (e.url_high = t.mp4_high, e.id_cdn = t.mp4_idcdn, xv.console.log("updateUrlRPC mp4 high " + t.mp4_high, "Player")), e.loadVideoSrc()
            }
        };
        try {
            i.send()
        } catch (r) {
            console.log("urlRPC Call error")
        }
    },
    toggleExpand: function() {
        this.isExpanded ? this.isExpanded = !1 : this.isExpanded = !0, this.is_premium_site && (this.loadPreference(), this.forceExpanded = this.isExpanded, this.savePreference()), window.xvideos.player.toggleSize()
    },
    transferPreferencesFromCookie: function() {
        if (!this.areCookiesFeatureDisabled()) {
            if (!this.bTransferedForceQuality && this.storageAvailable()) {
                var e = localStorage.getItem("forcequality");
                if (e) {
                    console.log("transferPreferencesFromCookie", "transfering forcequality to new key");
                    var t = JSON.parse(e);
                    "undefined" != typeof t.value && (this.setLocalStorage(PLAYER_OPTION.FORCEQUALITY, t.value), localStorage.removeItem("forcequality"))
                }
                this.bTransferedForceQuality = !0
            }
            var i = this.get_cookie("html5_pref");
            if (i) {
                var r = JSON.parse(i);
                r && (console.log("transferPreferencesFromCookie", r), !0 === r.SQ && (this.force_lq = !0), r.VOLUME && (this.iCustomVideoVolume = r.VOLUME), !0 === r.MUTE && (this.bIsCustomMuted = !0), !0 === r.FORCENOPICTURE && (this.forcenopreviewimg = !0), !0 === r.FORCENATIVEHLS && (this.forcenativehls = !0),
                    !0 !== r.AUTOPLAY && !1 !== r.AUTOPLAY || (this.use_autoplay_setting = r.AUTOPLAY), !1 === r.PLAUTOPLAY && (this.enableplautoplay = !1), !0 === r.EXPANDED && (this.forceExpanded = !0), !0 === r.FORCENOLOOP && (this.force_no_loop = !0), this.savePreference(!0), this.erase_cookie("html5_pref"))
            }
        }
    },
    loadPreference: function() {
        if (!this.areCookiesFeatureDisabled()) {
            var e = {};
            this.transferPreferencesFromCookie();
            for (var t = 0; t < aPlayerOptions.length; t++) e[aPlayerOptions[t]] = this.getLocalStorage(aPlayerOptions[t]);
            console.log("loadPreference", e), e[PLAYER_OPTION.FORCEQUALITY] && (this.forcequality = e[PLAYER_OPTION.FORCEQUALITY]), !0 === e[PLAYER_OPTION.SQ] && (this.force_lq = !0), !0 === e[PLAYER_OPTION.MUTE] && (this.bIsCustomMuted = !0, this.video && this.mute(!1)), this.desktop_view && !this.is_ios_desktop_mode && "undefined" != typeof e[PLAYER_OPTION.VOLUME] && this.video && (this.setVolume(e[PLAYER_OPTION.VOLUME], !1), this.iCustomVideoVolume = e[PLAYER_OPTION.VOLUME], this.$soundVolumeLvl && (this.$soundVolumeLvl.style.width = Math.round(100 * e[PLAYER_OPTION.VOLUME]) + "%")), !0 === e[PLAYER_OPTION.FORCENOPICTURE] && (this.forcenopreviewimg = !0), !0 === e[PLAYER_OPTION.FORCENATIVEHLS] && (this.forcenativehls = !0), !0 === e[PLAYER_OPTION.CHROMECAST] && (this.chromecastdetected = !0), !0 === e[PLAYER_OPTION.AUTOPLAY] && (this.use_autoplay_setting = !0), !1 === e[PLAYER_OPTION.AUTOPLAY] && (this.use_autoplay_setting = !1), "boolean" != typeof e[PLAYER_OPTION.PLAUTOPLAY] || e[PLAYER_OPTION.PLAUTOPLAY] || (this.enableplautoplay = !1), !0 === e[PLAYER_OPTION.EXPANDED] && (this.forceExpanded = !0), !0 === e[PLAYER_OPTION.FORCENOLOOP] && (this.force_no_loop = !0)
        }
    },
    areCookiesFeatureDisabled: function() {
        return !(xv && xv.conf && xv.conf.dyn && xv.conf.dyn.disfeats && "function" == typeof xv.conf.dyn.disfeats.indexOf) || -1 !== xv.conf.dyn.disfeats.indexOf(S_F_COOKIES_PLAYER_PREFERENCES)
    },
    savePreference: function(e) {
        console.log("savePreference", e), e || this.areCookiesFeatureDisabled() && this.closeMenuAndShowTooltip();
        var t = this,
            i = function() {
                console.log("savePreference - fnInit"), t.is_embed || xv.disclaimer.bIsOpen || t.areCookiesFeatureDisabled() || (t.video && (t.iCustomVideoVolume = t.video.volume, t.bIsCustomMuted = t.video.muted), t.setLocalStorage(PLAYER_OPTION.FORCEQUALITY, t.forcequality), t.setLocalStorage(PLAYER_OPTION.SQ, t.force_lq), t.setLocalStorage(PLAYER_OPTION.MUTE, t.bIsCustomMuted), t.setLocalStorage(PLAYER_OPTION.VOLUME, t.iCustomVideoVolume), t.setLocalStorage(PLAYER_OPTION.FORCENOPICTURE, t.forcenopreviewimg), t.setLocalStorage(PLAYER_OPTION.FORCENATIVEHLS, t.forcenativehls), t.setLocalStorage(PLAYER_OPTION.AUTOPLAY, t.use_autoplay_setting), t.setLocalStorage(PLAYER_OPTION.PLAUTOPLAY, t.enableplautoplay), t.setLocalStorage(PLAYER_OPTION.CHROMECAST, t.chromecastdetected), t.setLocalStorage(PLAYER_OPTION.EXPANDED, t.forceExpanded), t.setLocalStorage(PLAYER_OPTION.FORCENOLOOP, t.force_no_loop))
            };
        i(), "object" == typeof xv.disclaimer && document.addEventListener(xv.disclaimer.EVENT.CLOSE_POP, i)
    },
    hasCustomVolume: function() {
        return "undefined" != typeof this.iCustomVideoVolume
    },
    save_networkspeed: function(e) {
        this.write_cookie("html5_networkspeed", e)
    },
    get_networkspeed: function() {
        var e = this.get_cookie("html5_networkspeed");
        return e || !1
    },
    write_cookie: function(e, t, i) {
        if (!i) {
            var r = new Date;
            r.setTime(r.getTime()), i = new Date(r.getTime() + 2592e6)
        }
        document.cookie = e + "=" + escape(t) + ";expires=" + i.toGMTString() + ";path=/"
    },
    erase_cookie: function(e) {
        this.write_cookie(e, "", new Date(0))
    },
    get_cookie: function(e) {
        var t, i, r, s = document.cookie.split(";");
        for (t = 0; t < s.length; t++)
            if (i = s[t].substring(0, s[t].indexOf("=")), r = s[t].substring(s[t].indexOf("=") + 1), (i = i.replace(/^\s+|\s+$/g, "")) == e) return unescape(r);
        return null
    },
    isCookieSet: function(e) {
        for (var t = document.cookie.split(";"), i = 0; i < t.length; i++) {
            if (t[i].split("=")[0].trim() === e) return !0
        }
        return !1
    },
    check_speed_stats: function() {
        if (!this.fragStatsSended) {
            var e = 0,
                t = 0;
            for (var i in this.fragStats) - 1 !== this.fragStats[i][2] && (e++, t += this.fragStats[i][2]);
            if (e < 5) return void console.log("Not enought stats");
            var r = Math.floor(t / e);
            xv.console.log("check_speed_stats Network speed " + r + " Kb/s", "Player"), this.save_networkspeed(r), this.send_debug_event("network_speed", r), this.fragStatsSended = !0
        }
    },
    preloadMozaiqueMinThumbOnStart: function() {
        if (console.log("preloadMozaiqueMinThumbOnStart"), !this.video.duration) return void console.log("preloadMozaiqueMinThumbOnStart No duration");
        console.log("preloadMozaiqueMinThumbOnStart start preloading");
        var e = Math.floor(this.video.duration / 60) - 1;
        e < 1 && (e = 1), e > 10 && (e = 10);
        for (var t = 0; t < e; t++) this.preloadMozaiqueMinThumb(t)
    },
    preloadMozaiqueMinThumb: function(e) {
        if ("undefined" == typeof this.thumb_slide_min_preload[e]) {
            this.thumb_slide_min_preload[e] = 1, console.log("start preloading thumb min " + e);
            var t = createRequestObject();
            t.open("GET", this.thumb_slide_min + e + ".jpg", !0), t.onreadystatechange = function() {
                4 === t.readyState && t.status
            }, t.send()
        }
    },
    send_debug_event: function(e, t) {
        if (!this.is_embed) {
            if ("loaded" === e) {
                if (this.debug_events.loaded) return;
                this.debug_events.loaded = !0
            } else if ("playing" === e) {
                if (this.debug_events.playing) return;
                this.debug_events.playing = !0
            } else if ("fullscreen" === e) {
                if (this.debug_events.fullscreen) return;
                this.debug_events.fullscreen = !0
            } else if ("playerror" === e) {
                if (this.debug_events.playerror) return;
                this.debug_events.playerror = !0
            } else if ("devicespeed" === e) {
                if (this.debug_events.devicespeed) return;
                if (this.debug_events.devicespeed = !0, Math.random() < .8) return
            } else if ("network_speed" === e) {
                if (this.debug_events.network_speed) return;
                this.debug_events.network_speed = !0
            } else if ("many_errors" === e) {
                if (this.debug_events.many_errors) return;
                this.debug_events.many_errors = !0
            } else if ("fakeplayerloaded" === e) {
                if (this.debug_events.fakeplayerloaded) return;
                this.debug_events.fakeplayerloaded = !0
            } else if ("buffer_blocked" === e) {
                if (this.debug_events.buffer_blocked) return;
                this.debug_events.buffer_blocked = !0, this.sendJsDebug()
            } else if ("buffer_timeout" === e) {
                if (this.debug_events.buffer_timeout) return;
                this.debug_events.buffer_timeout = !0
            } else if ("buffer_duration" === e) {
                if (this.debug_events.buffer_duration) return;
                this.debug_events.buffer_duration = !0
            }
            "loaded" !== e && "fakeplayerloaded" !== e || !this.is_premium_video || (t = "p");
            var i = this.id_cdn;
            if (this.use_hls && (e = "hls_" + e, i = this.id_cdn_hls), this.use_native_hls && (e = "hlsnative_" + e, i = this.id_cdn_hls), "hls_devicespeed" === e && (e = "devicespeed"), "hls_fullscreen" !== e) {
                console.log("Send debug event '" + e + "'");
                var r = createRequestObject();
                r.open("GET", "/html5player/" + e + "/" + this.encoded_id_video + "/" + i + "/" + (t || ""), !0), "object" == typeof xv.gnct && r.setRequestHeader("Private-Mode", xv.gnct.getStatusString()), this.view_data && r.setRequestHeader("X-View-Data", this.view_data), r.onreadystatechange = function() {
                    4 === r.readyState && r.status
                }, r.send()
            }
        }
    },
    sendJsDebug: function() {
        var e = createRequestObject();
        e.open("POST", "/html5player/jsdebug/" + this.encoded_id_video + "/0", !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.onreadystatechange = function() {
            4 === e.readyState && e.status
        }, e.send("logs=" + encodeURIComponent(this.consolelog))
    },
    storageAvailable: function() {
        try {
            var e = window.localStorage,
                t = "__storage_test__";
            return e.setItem(t, t), e.removeItem(t), !0
        } catch (i) {
            return !1
        }
    },
    removeLocalStorage: function(e) {
        return !!this.storageAvailable() && (e && PLAYER_OPTION[e] ? (e = "player_" + e.toLowerCase(), console.log("removeLocalStorage", e), localStorage.removeItem(e), !0) : (console.error("removeLocalStorage: Unknown player option key", e), !1))
    },
    setLocalStorage: function(e, t, i) {
        if (!this.storageAvailable()) return !1;
        if (!e || !PLAYER_OPTION[e]) return console.error("setLocalStorage: Unknown player option key", e), !1;
        i || (i = -1), e = "player_" + e.toLowerCase();
        var r = {
            value: t,
            expire: -1 === i ? -1 : (new Date).getTime() / 1e3 + i
        };
        console.log("setLocalStorage", e, r), localStorage.setItem(e, JSON.stringify(r))
    },
    getLocalStorage: function(e) {
        if (!this.storageAvailable()) return undefined;
        if (!e || !PLAYER_OPTION[e]) return console.error("setLocalStorage: Unknown player option key", e), undefined;
        e = "player_" + e.toLowerCase();
        var t = localStorage.getItem(e);
        if (!t) return undefined;
        var i = JSON.parse(t);
        return i ? -1 !== i.expire && i.expire < (new Date).getTime() / 1e3 ? (console.log("Key", e, "expire"), localStorage.removeItem(e), undefined) : i.value : undefined
    },
    sendPendingDuration: function() {
        var e = (new Date).getTime(),
            t = localStorage.getItem("durationsend_lock");
        if (t && e - t < 1e4) return void console.log("Duration send locked", t, e);
        localStorage.setItem("durationsend_lock", e);
        for (var i = 0; i < localStorage.length; i++) {
            var r = localStorage.key(i);
            if ("videoduration_" != r.substring(0, 14)) {
                if ("videoreport_" == r.substring(0, 12)) {
                    var s = {};
                    s.video_id = r.substring(14);
                    var o = localStorage.getItem(r);
                    s.cdn_id = 0, s.duration = 0, s.referer = "", s.type = "unknown", s.quality = -1, s.transfer = -1, s.buffer_sec = 0;
                    try {
                        var n = JSON.parse(o);
                        if (n.sended) {
                            (new Date).getTime() - n.timestamp > 36e5 && (localStorage.removeItem(r), i--);
                            continue
                        }
                        if (!n.cdn_id || n.duration == undefined) {
                            console.log("Duration send: Bad JSON for " + r + " '" + o + "'"), localStorage.setItem(r, JSON.stringify({
                                sended: !0,
                                timestamp: (new Date).getTime()
                            }));
                            continue
                        }
                        if ((new Date).getTime() - n.lasthit < 5e3) continue;
                        if (!n.video_id) {
                            console.log("Duration send: Bad JSON for " + r + " '" + o + "'"), localStorage.setItem(r, JSON.stringify({
                                sended: !0,
                                timestamp: (new Date).getTime()
                            }));
                            continue
                        }
                        s.video_id = n.video_id, s.cdn_id = n.cdn_id, s.duration = Math.round(n.duration), n.referer && (s.referer = n.referer), n.type && (s.type = n.type), n.quality && (s.quality = Math.round(n.quality)), n.transfer && (s.transfer = Math.round(n.transfer)), n.buffer_sec && (s.buffer_sec = Math.round(n.buffer_sec)), n.ap_sound && (s.ap_sound = n.ap_sound)
                    } catch (d) {
                        console.log("Duration send: Unable to unjson " + r + " '" + o + "'"), localStorage.setItem(r, JSON.stringify({
                            sended: !0,
                            timestamp: (new Date).getTime()
                        }));
                        continue
                    }
                    localStorage.setItem(r, JSON.stringify({
                        sended: !0,
                        timestamp: (new Date).getTime()
                    })), console.log("Sending duration " + s.duration + " for video " + s.video_id);
                    var a = btoa(JSON.stringify(s)),
                        l = createRequestObject();
                    l.open("GET", "/html5player/play_duration/" + a, !0), l.onreadystatechange = function() {
                        4 === l.readyState && l.status
                    }, l.send()
                }
            } else localStorage.removeItem(r), i--
        }
        localStorage.removeItem("durationsend_lock")
    },
    compute_seekpercent: function(e) {
        var t = this.touch_getPosition(e),
            i = this.progressbar.getBoundingClientRect();
        return t -= i ? i.left : this.progressbar.offsetLeft, 1 / this.progressbar.offsetWidth * t
    },
    touch_getPosition: function(e) {
        return "undefined" != typeof e.touches && "undefined" != typeof e.touches[0] && e.touches[0].clientX ? e.touches[0].clientX : "undefined" != typeof e.targetTouches && "undefined" != typeof e.targetTouches[0] && e.targetTouches[0].clientX ? e.targetTouches[0].clientX : e.clientX ? e.clientX : e.pageX ? e.pageX : e.x
    },
    touch_getPositionY: function(e) {
        return "undefined" != typeof e.touches && "undefined" != typeof e.touches[0] && e.touches[0].clientY ? e.touches[0].clientY : "undefined" != typeof e.targetTouches && "undefined" != typeof e.targetTouches[0] && e.targetTouches[0].clientY ? e.targetTouches[0].clientY : e.clientY ? e.clientY : e.pageY ? e.pageY : e.y
    },
    getViewportHeight: function() {
        return "undefined" != typeof window.innerWidth ? window.innerHeight : "undefined" != typeof document.documentElement && "undefined" != typeof document.documentElement.clientWidth && 0 != document.documentElement.clientWidth ? document.documentElement.clientHeight : document.getElementsByTagName("body")[0].clientHeight
    },
    hasFlash: function() {
        if (!this.flashcode_available) return !1;
        try {
            if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return !0
        } catch (e) {
            if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] != undefined && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) return !0
        }
        return !1
    },
    supportHLSjs: function() {
        if (!this.supportDefaultHlsjs()) return console.log("supportDefaultHlsjs : false"), !1;
        if (/android 4.4./.test(navigator.userAgent.toLowerCase())) return console.log("supportHLSjs : false : Android 4.4 detected"), !1;
        var e = /chrome\/([0-9]+)\./.exec(navigator.userAgent.toLowerCase());
        return e && parseInt(e[1]) < 46 ? (console.log("supportHLSjs : false : Chrome < 46"), !1) : /windows phone 8.0/.test(navigator.userAgent.toLowerCase()) ? (console.log("supportHLSjs : false : Windows Phone 8.0"), !1) : (console.log("supportHLSjs : true"), !0)
    },
    supportDefaultHlsjs: function() {
        return "undefined" == typeof window.MediaSource || "undefined" == typeof window.MediaSource.isTypeSupported ? (console.log("supportDefaultHlsjs : false | window.MediaSource : ", window.MediaSource, "undefined" != typeof window.MediaSource ? window.MediaSource.isTypeSupported : "no func isTypeSupported"), !1) : "undefined" == typeof Hls ? (console.log("supportDefaultHlsjs : false | Hls === 'undefined'"), !1) : !!Hls.isSupported() || (console.log("supportDefaultHlsjs : false | !Hls.isSupported()"), !1)
    },
    sendDebugLogs: function() {
        this.consolelog
    },
    getPageCategories: function() {
        return "string" == typeof window.wpn_categories ? window.wpn_categories : "object" == typeof xv && "object" == typeof xv.conf && "object" == typeof xv.conf.ads && "string" == typeof xv.conf.ads.categories ? xv.conf.ads.categories : ""
    },
    getPageTags: function() {
        return "string" == typeof window.wpn_keywords ? window.wpn_keywords : "object" == typeof xv && "object" == typeof xv.conf && "object" == typeof xv.conf.ads && "string" == typeof xv.conf.ads.keywords ? xv.conf.ads.keywords : ""
    },
    initAutoPlaylistNextState: function() {
        localStorage.getItem("sLocalStorageAutoNext") ? this.sLocalStorageAutoNext = localStorage.getItem("sLocalStorageAutoNext") : (localStorage.setItem("sLocalStorageAutoNext", this.hasPlaylistAutoNext()), this.sLocalStorageAutoNext = localStorage.getItem("sLocalStorageAutoNext")), this.bPlautonext = "true" === this.sLocalStorageAutoNext
    },
    enablePlaylistAutoNext: function() {
        this.bPlautonext = !0, localStorage.setItem("sLocalStorageAutoNext", this.hasPlaylistAutoNext())
    },
    disablePlaylistAutoNext: function() {
        this.bPlautonext = !1, localStorage.setItem("sLocalStorageAutoNext", this.hasPlaylistAutoNext())
    },
    hasPlaylistAutoNext: function() {
        return this.bPlautonext
    },
    togglePlaylistAutoNext: function() {
        this.hasPlaylistAutoNext() ? this.disablePlaylistAutoNext() : this.enablePlaylistAutoNext()
    },
    resizeVideo: function() {
        if (!(this.is_ios || this.is_old_ios || this.is_ios_desktop_mode))
            if (this.videoRatio = this.video.videoWidth / this.video.videoHeight, -1 === this.videoRatio || -1 === this.oPlayerRatio.iCurrent) this.video.style.transform = "scaleX(1)";
            else {
                var e = this.oPlayerRatio.iCurrent / this.videoRatio,
                    t = 1;
                this.video_div.offsetWidth / this.video_div.offsetHeight < 1 && (t = 1 / e), this.video.style.transform = "scale(" + e * t + "," + 1 * t + ")"
            }
    },
    setParamRatioBtn: function(e) {
        this.videoRatio !== this.oPlayerRatio.aRatios[1] && this.videoRatio !== NaN && (e ? (this.oPlayerRatio.iCurrent === this.oPlayerRatio.aRatios[1] ? (this.oPlayerRatio.iCurrent = this.oPlayerRatio.aRatios[2], this.oPlayerRatio.$btn.setTitle("4/3")) : this.oPlayerRatio.iCurrent === this.oPlayerRatio.aRatios[2] ? (this.oPlayerRatio.iCurrent = this.oPlayerRatio.aRatios[3], this.oPlayerRatio.$btn.setTitle("16/9")) : this.oPlayerRatio.iCurrent === this.oPlayerRatio.aRatios[3] ? (this.oPlayerRatio.iCurrent = this.oPlayerRatio.aRatios[0], this.oPlayerRatio.$btn.setTitle(this.i18n.__("player.vertical"))) : (this.oPlayerRatio.$btn.setTitle(this.i18n.__("player.ratio_auto")), this.oPlayerRatio.iCurrent = this.oPlayerRatio.aRatios[1]), this.redrawParamers()) : this.oPlayerRatio.iCurrent === this.oPlayerRatio.aRatios[0] ? this.oPlayerRatio.$btn.setTitle(this.i18n.__("player.vertical")) : this.oPlayerRatio.iCurrent === this.oPlayerRatio.aRatios[2] ? this.oPlayerRatio.$btn.setTitle("4/3") : this.oPlayerRatio.iCurrent === this.oPlayerRatio.aRatios[3] && this.oPlayerRatio.$btn.setTitle("16/9"))
    },
    initPinchEvent: function() {
        if (!(this.is_ios || this.is_old_ios || this.is_ios_desktop_mode)) {
            var e = this,
                t = !1;
            getIndexRatio = function(t) {
                var i = e.oPlayerRatio.aRatios.map(function(e) {
                    return Number(e.toFixed(1))
                });
                return -1 !== i.indexOf(-1) && i.splice(i.indexOf(-1), 1), i.indexOf(Number(t.toFixed(1)))
            }, fnPinch = function(i, r, s) {
                if (!("up" === i && s < 2 * r || "down" === i && s > r / 2 || t)) {
                    var o = -1 !== e.oPlayerRatio.iCurrent ? e.oPlayerRatio.iCurrent : e.videoRatio,
                        n = getIndexRatio(o),
                        a = e.oPlayerRatio.aRatios.map(function(e) {
                            return e
                        });
                    a.splice(a.indexOf(-1), 1), "up" === i && n === a.length - 1 || "down" === i && 0 === n || ("up" === i && n + 1 < a.length ? (e.oPlayerRatio.iCurrent = a[n + 1], e.resizeVideo(), e.setParamRatioBtn(!1), t = !0) : "down" === i && n > 0 && (e.oPlayerRatio.iCurrent = a[n - 1], e.resizeVideo(), e.setParamRatioBtn(!1), t = !0))
                }
            }, this.oPinchRatioVideo = new PinchManager({
                $target: e.video_div,
                fnBeforePinch: function() {
                    e.removeEvents(), e.video_div.querySelector("video").style.transition = "transform 0.1s"
                },
                fnPinchUp: function(e, t) {
                    fnPinch("up", e, t)
                },
                fnPinchDown: function(e, t) {
                    fnPinch("down", e, t)
                },
                fnAfterPinch: function() {
                    e.video_div.querySelector("video").style.transition = "none", t = !1, e.setupEvents()
                }
            }), this.oPinchRatioVideo.addPinchEvents()
        }
    },
    initSlowSeekStartWait: function(e, t) {
        if (!(this.is_ios || this.is_ios_desktop_mode || this.videoads && this.videoads.playing)) {
            this.oMouseDownStart && (clearTimeout(this.oMouseDownStart), this.oMouseDownStart = null);
            var i = this;
            if ("touch" === t) this.oTouchStart && (clearTimeout(this.oTouchStart), this.oTouchStart = null), this.iLastTouchStart = (new Date).getTime(), this.oTouchStart = setTimeout(function() {
                i.iLastTouchStart && (i.sSlowSeekMode = "touch", i.slowSeekStartWait(e), i.oTouchStart = null)
            }, this.iClickTimeLimit);
            else if ("mouse" === t) {
                if (!this.desktop_view) return;
                if (this.oTouchStart) return;
                this.iLastMousedownStart = (new Date).getTime(), this.oMouseDownStart = setTimeout(function() {
                    i.iLastMousedownStart && (i.addClass(i.video_div, "is-mouse-down"), i.sSlowSeekMode = "mouse", i.slowSeekStartWait(e), i.oMouseDownStart = null)
                }, this.iClickTimeLimit)
            }
        }
    },
    slowSeekStartWait: function(e) {
        if (!this.bSlowSeekIsWaiting && this.canPlay && !this.video.ended && this.video.duration) {
            this.bSlowSeekIsWaiting = !0, this.iSlowSeekClientX = this.touch_getPosition(e), this.iSlowSeekWaitClientX = this.iSlowSeekClientX, this.iSlowSeekClientY = this.touch_getPositionY(e), this.iSlowSeekWaitClientY = this.iSlowSeekClientY;
            var t, i = this,
                r = function(e) {
                    i.iSlowSeekWaitClientX = i.touch_getPosition(e), i.iSlowSeekWaitClientY = i.touch_getPositionY(e), i.bSlowSeekIsWaiting && "mouse" === i.sSlowSeekMode && Math.abs(i.iSlowSeekClientX - i.iSlowSeekWaitClientX) > 300 && (s(), i.slowSeekStart())
                },
                s = function(e) {
                    i.bSlowSeekIsWaiting && (t && clearTimeout(t), i.bSlowSeekIsWaiting = !1, window.removeEventListener("touchend", s), window.removeEventListener("touchcancel", s), window.removeEventListener("touchmove", r), i.video_div.removeEventListener("mouseleave", s), i.video_div.removeEventListener("mouseenter", s), window.removeEventListener("mouseup", s), window.removeEventListener("dragend", s), window.removeEventListener("mousemove", r))
                };
            if (this.bSlowSeekCanInstantInit) return s(), void this.slowSeekStart();
            t = setTimeout(function() {
                s(), Math.abs(i.iSlowSeekClientX - i.iSlowSeekWaitClientX) < 10 && Math.abs(i.iSlowSeekClientY - i.iSlowSeekWaitClientY) < 10 && i.slowSeekStart()
            }, 500), "touch" === this.sSlowSeekMode ? (window.addEventListener("touchend", s), window.addEventListener("touchcancel", s), window.addEventListener("touchmove", r)) : (this.video_div.addEventListener("mouseleave", s), this.video_div.addEventListener("mouseenter", s), window.addEventListener("mouseup", s), window.addEventListener("dragend", s), window.addEventListener("mousemove", r))
        }
    },
    slowSeekStart: function() {
        if (!this.bSlowSeekIsInit && this.canPlay && this.videoads_checked && !this.getChromecastMedia() && this.video.duration) {
            this.bSlowSeekCanInstantInit = !0, this.bSlowSeekIsInit = !0, this.iSlowSeekClientX = null, this.iSlowSeekClientY = null, this.sSlowSeekDirection = null, this.addClass(this.video_div, "is-slow-seeking"), this.oSlowSeekTimeOut && clearTimeout(this.oSlowSeekTimeOut), this.detectPlaying(), this.bSlowSeekWasPlaying = this.isPlaying, console.log("slowSeekStart --- (is playing : ", this.isPlaying, ")"), this.bSlowSeekWasPlaying && this.pause();
            var e = this,
                t = function(t) {
                    var i = e.touch_getPosition(t),
                        r = e.touch_getPositionY(t);
                    if (null === e.iSlowSeekClientX) return e.iSlowSeekClientX = i, void(e.iSlowSeekClientY = r);
                    var s = e.iSlowSeekClientX - i,
                        o = Math.abs(s),
                        n = e.iSlowSeekClientY - r,
                        a = Math.abs(n);
                    if (!(o < 5 && a < 5)) {
                        if (e.iSlowSeekClientX = i, e.iSlowSeekClientY = r, e.sSlowSeekDirection = o > a ? s < 0 ? "R" : "L" : n < 0 ? "D" : "U", "L" === e.sSlowSeekDirection) {
                            if (console.log("SlowSeek -1 sec"), e.video.currentTime < 1) return;
                            e.seek(e.video.currentTime - 1)
                        } else if ("R" === e.sSlowSeekDirection) {
                            if (console.log("SlowSeek +1 sec"), e.video.currentTime + 1 > e.video.duration) return;
                            e.seek(e.video.currentTime + 1)
                        }
                        e.forcenopreviewimg || (e.showElt(e.progressbarseekcursor), e.touchSeekShow(e.video.currentTime / e.video.duration))
                    }
                },
                i = function(e) {
                    e.preventDefault()
                },
                r = function(e) {
                    e.preventDefault()
                },
                s = function(o) {
                    e.bSlowSeekIsInit && (window.removeEventListener("touchmove", t), window.removeEventListener("touchcancel", s), window.removeEventListener("touchend", s), window.removeEventListener("mousemove", t), e.video_div.removeEventListener("mouseleave", s), e.video_div.removeEventListener("mouseenter", s), window.removeEventListener("mouseup", s), window.removeEventListener("contextmenu", r), window.removeEventListener("dragend", s), e.bSlowSeekIsInit = !1, e.removeClass(e.video_div, "is-slow-seeking"), e.oSlowSeekTimeOut = setTimeout(function() {
                        window.removeEventListener("dragstart", i), e.slowSeekRemoveInstantStart(), e.updateBtVisibity()
                    }, 1500), e.bSlowSeekWasPlaying ? e.play() : e.showPause(), e.updateBtVisibity(), console.log("%c fnSlowSeekEnd", "color:limegreen", o.type, o.target))
                };
            "touch" === this.sSlowSeekMode ? (window.addEventListener("touchmove", t), window.addEventListener("touchcancel", s), window.addEventListener("touchend", s)) : (window.addEventListener("mousemove", t), this.video_div.addEventListener("mouseleave", s), this.video_div.addEventListener("mouseenter", s), window.addEventListener("mouseup", s)), window.addEventListener("contextmenu", r), window.addEventListener("dragend", s), window.removeEventListener("dragstart", i), window.addEventListener("dragstart", i), this.updateBtVisibity()
        }
    },
    slowSeekRemoveInstantStart: function() {
        this.bSlowSeekCanInstantInit && this.slowseek_info && (console.log("slowSeekRemoveInstantStart"), this.bSlowSeekCanInstantInit = !1, this.updateBtVisibity())
    },
    showAutoplay: function() {
        return !(this.is_ios && !this.video.muted) && (!0 === this.use_autoplay || (!1 === this.use_autoplay_setting || !0 === this.use_autoplay_setting))
    },
    useAutoplay: function() {
        return !0 === this.use_autoplay_setting
    },
    canShowPlay: function() {
        var e = this.getTime();
        return !e || !this.player_init_time || e - this.player_init_time > this.hide_play_timeout || (!this.useAutoplay() || !!this.has_canplaythrough && (!!this.video.paused || this.has_paused))
    },
    getPlayCase: function() {
        var e = {
                REGULAR_WITHSOUND: 1,
                REGULAR_WITHOUTSOUND: 2,
                AUTOPLAY_DEFAULTSOUND: 3,
                AUTOPLAY_CUSTOMSOUND: 4,
                AUTOPLAY_MUTED: 5
            },
            t = this.video.muted || this.video.volume <= .01;
        return this.useAutoplay() ? t ? e.AUTOPLAY_MUTED : this.hasCustomVolume() ? e.AUTOPLAY_CUSTOMSOUND : e.AUTOPLAY_DEFAULTSOUND : t ? e.REGULAR_WITHOUTSOUND : e.REGULAR_WITHSOUND
    },
    getTime: function() {
        return "function" == typeof Date.now ? Date.now() : "function" == typeof Date.getTime ? Date.getTime() : "object" == typeof performance && "function" == typeof performance.now ? performance.now() : 0
    }
}, HTML5Player.TYPE_SMALL = "SMALL", HTML5Player.TYPE_FULL = "FULL", HTML5Player.TYPE_MINUTE = "MIN";
