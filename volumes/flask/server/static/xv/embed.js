/* Built on 2025-01-27 13:59:09 */ ! function() {
    "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 || (document.documentElement.className += " notouch"), "undefined" == typeof window.console && (window.console = {});
    var e = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) {
                var i = arguments[n],
                    o = typeof i;
                if ("string" === o) t.push(i);
                else if (null === i) t.push("null");
                else if ("undefined" === o) t.push("undefined");
                else if ("function" === o) {
                    var s = i.toString();
                    t.push(s.substr(s, s.indexOf("{") + 1) + " ... }")
                } else "function" == typeof i.toString ? t.push(i.toString()) : t.push(o)
            }
            document.body ? "function" == typeof document.body.appendChild && document.body.appendChild(document.createComment(e + " / " + t.join(", "))) : document.write("\x3c!--" + e + " / " + t.join(", ") + "--\x3e")
        },
        t = ["error", "warn", "info", "debug", "log"];
    for (var n in t) ! function(t) {
        "undefined" == typeof window.console[t] && (window.console[t] = function() {
            for (var n = [t.toUpperCase()], i = 0; i < arguments.length; i++) n.push(arguments[i]);
            e.apply(null, n)
        })
    }(t[n]);
    Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
        for (var n = t || 0, i = this.length; n < i; n++)
            if (this[n] === e) return n;
        return -1
    }), String.prototype.trim || (String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    })
}(),
function() {
    var e = function() {},
        t = function(e, t, n) {
            n = void 0 === n ? "%s" : !1 === n ? n : n + ": %s", e = void 0 === e ? "debug_" : e, t = void 0 === e ? "log" : t, window.xv.log[e] = n ? window.console[t].bind(window.console, n) : window.console[t].bind(window.console)
        },
        n = function(t) {
            t = void 0 === t ? "debug_" : t, window.xv.log[t] = e
        };
    window.xv || (window.xv = {}), window.xv.log = {}, t("error", "error", "ERROR"), t("warn", "warn", "WARNING"), n("debug"), n("debug_"), n("info"), n("info_"), n("time"), n("timeEnd"), window.xv.conf.is_dev && (t("debug", "debug", "DEBUG"), t("debug_", "debug"), t("time", "time", !1), t("timeEnd", "timeEnd", !1)), window.xvLogVerbose && (t("info", "info", "INFO"), t("info_", "info")), window.xvToggleLogs = function(e) {
        window.xvLogVerbose = "boolean" == typeof e ? e : !window.xvLogVerbose, xv.cookies && window.xvLogVerbose ? xv.cookies.setLocal("dev_toggle_debug_logs", Date.now(), 36e5, "/") : xv.cookies.removeLocal("dev_toggle_debug_logs", "/"), window.xvLogVerbose ? (window.xv.conf.is_dev || (t("debug", "debug", "DEBUG"), t("debug_", "debug")), t("info", "info", "INFO"), t("info_", "info")) : (window.xv.conf.is_dev || (n("debug"), n("debug_")), n("info"), n("info_"))
    };
    var i = function(e) {
        if (e) return xv.cookies ? (xv.cookies.get("dev_toggle_debug_logs") && xvToggleLogs(), !0) : void setTimeout(function() {
            i(e - 1)
        }, 10)
    };
    i(300)
}(),
function() {
    var e, t = {};
    t.getRootDomain = function() {
        if ("string" == typeof e) return e;
        var t = window.location.hostname.split(".");
        if (t.length >= 2) {
            e = "";
            for (var n = t.length - 2; n < t.length; n++) e += "." + t[n]
        }
        return e
    };
    var n = {},
        i = function(e, t) {
            var n = e.indexOf(";", t);
            return -1 === n && (n = e.length), unescape(e.substring(t, n))
        };
    n.set = function(e, t, n, i, o, s, a) {
        var r = [];
        if (r.push(e + "=" + encodeURIComponent(t)), "number" == typeof n)
            if (n >= 0) {
                var d = new Date;
                d.setTime(d.getTime());
                var l = new Date(d.getTime() + n);
                r.push("Expires=" + l.toGMTString())
            } else r.push("Expires=Thu, 01 Jan 1970 00:00:01 UTC");
        i && r.push("Path=" + i), o && r.push("Domain=" + o), s && window.location.protocol.indexOf("s") > 0 && r.push("Secure"), a && ("Strict" === a || "Lax" === a || "None" === a && s) && "object" == typeof xv && "object" == typeof xv.conf && xv.conf.dyn && xv.conf.dyn.ssc && r.push("SameSite=" + a), document.cookie = r.join(";")
    }, n.remove = function(e, t) {
        n.set(e, "", -1, t)
    }, n.setLocal = function(e, i, o, s, a, r) {
        n.set(e, i, o, s, t.getRootDomain(), a, r)
    }, n.removeLocal = function(e, t) {
        n.setLocal(e, "", -1, t)
    }, n.get = function(e) {
        for (var t = e + "=", n = t.length, o = document.cookie, s = o.length, a = 0; a < s;) {
            var r = a + n;
            if (o.substring(a, r) === t) return i(o, r);
            if (0 === (a = o.indexOf(" ", a) + 1)) break
        }
        return null
    }, n.getAll = function() {
        var e = {};
        return document.cookie.split("; ").forEach(function(t) {
            var n = t.split("="),
                i = n[0],
                o = n[1] ? decodeURIComponent(n[1]) : "";
            e[i] = o
        }), e
    }, window.xv || (window.xv = {}), window.xv.utils = t, window.xv.cookies = n
}(),
function() {
    var e = function() {
        this.s = window.indexedDB, this.type = "indexedDb", this.oDb = null, this.bIsSupported = !1, this.bRemoveLocalStorage = !0, this.bDbIsOpen = null, this.bDbIsUpdating = null, this.sDbName = null, this.sDbStoreName = "main_store", this.aDbStoreIndex = [{
            index: "key",
            unique: !0
        }], this.aTempStackTodo = [], this.bKeyPathAutoIncrement = !1, this.oResult = null;
        var e = window.location.hostname.toLowerCase(); - 1 !== e.indexOf("xvideos") ? this.sDbName = "DB_XV" : -1 !== e.indexOf("xnxx") ? this.sDbName = "DB_XNXX" : this.sDbName = "DB_WG"
    };
    e.prototype = {
        setDbIsSupported: function(e) {
            this.bIsSupported = e
        },
        getRemoveLocalStorage: function() {
            return this.bRemoveLocalStorage
        },
        getDbIsSupported: function() {
            return this.bIsSupported
        },
        getDbIsOpen: function() {
            return this.bDbIsOpen
        },
        getDbIsUpdating: function() {
            return this.bDbIsUpdating
        },
        getResult: function() {
            return this.oResult
        },
        getAllStoreName: function() {
            var e = this;
            if (!this.bDbIsOpen) return void this.openCommonDb().then(function() {
                e.getAllStoreName()
            });
            try {
                this.oDb.objectStoreNames
            } catch (i) {
                return !1
            }
            var t = [];
            if (this.oDb.objectStoreNames.length) {
                for (var n in this.oDb.objectStoreNames) "string" == typeof this.oDb.objectStoreNames[n] && t.push(this.oDb.objectStoreNames[n]);
                return t
            }
            return !1
        },
        getStoreExist: function(e) {
            var t = this.getAllStoreName();
            return t && -1 !== t.indexOf(e.store_name) ? ("function" == typeof e.callback_store_exist && e.callback_store_exist(), !0) : ("function" == typeof e.callback_store_no_exist && e.callback_store_no_exist(), !1)
        },
        open: function(e, t, n) {
            xv.log.debug("%c storage.js - open() - manual store request (", e, ")", "color:cyan;");
            var i = this.s.open(e);
            i.onsuccess = function(e) {
                "function" == typeof t && t()
            }, i.onerror = function(e) {
                "function" == typeof n && n()
            }
        },
        openCommonDb: function(e) {
            if (!this.bDbIsOpen) {
                this.bDbIsOpen = !0;
                var t = this;
                return new Promise(function(n, i) {
                    t.sDbName || (xv.log.error("storage.js - openCommonDb() - attempted to open DB without a name"), i("No DB name")), void 0 === e ? (xv.log.debug("%c storage.js - openCommonDb() - new store request (" + t.sDbName + ")", "color:green;"), t.oRequest = t.s.open(t.sDbName)) : ("undefined" == typeof t.iDbVersion && (t.iDbVersion = 0), t.iDbVersion = t.iDbVersion + 1, xv.log.debug("%c storage.js - openCommonDb() - existing store (" + t.sDbName + " v" + t.iDbVersion + ")", "color:cyan;"), t.oRequest = t.s.open(t.sDbName, t.iDbVersion)), t.bDbIsUpdating = !0, t.oRequest.onupgradeneeded = function(i) {
                        xv.log.debug("%c storage.js - openCommonDb() - store " + t.sDbName + " update", "color:cyan;"), t.bDbIsUpdating || (t.bDbIsUpdating = !0), t.oDb = i.target.result, void 0 !== e && (t.iDbVersion = parseInt(t.oDb.version), t.storeUpdateDb(e), n())
                    }, t.oRequest.onsuccess = function(e) {
                        xv.log.debug("%c storage.js - openCommonDb() - store " + t.sDbName + " created", "color:green;"), t.oDb = e.target.result, null !== t.oDb && (t.iDbVersion = parseInt(t.oDb.version), t.bDbIsUpdating && (t.bDbIsUpdating = !1), t.aTempStackTodo.length && t.tempStackExec(), n())
                    }, t.oRequest.onerror = function(e) {
                        xv.log.debug("%c storage.js - openCommonDb() - store " + t.sDbName + " error", "color:red;"), xv.log.error("IndexedDB error", e), t.setDbIsSupported(!1), t.closeCommonDb(), n()
                    }, t.oRequest.onblocked = function(e) {
                        xv.log.debug("%c storage.js - openCommonDb() - store " + t.sDbName + " was blocked", "color:red;"), t.setDbIsSupported(!1), t.closeCommonDb(), xv.log.error("IndexedDB is blocked", e), n()
                    }
                })
            }
        },
        closeCommonDb: function() {
            this.bDbIsOpen && (this.bDbIsOpen = !1, null !== this.oDb && this.oDb.close())
        },
        storeUpdateDb: function(e) {
            var t = {};
            if (t.action = e.action, "create" !== e.action) {
                if ("remove" === e.action) {
                    if (!this.getStoreExist({
                            store_name: e.store_name
                        })) return;
                    return void this.oDb.deleteObjectStore(e.store_name)
                }
            } else {
                t.store_index = e.index_auto_increment ? {
                    keyPath: "id",
                    autoIncrement: !0
                } : {
                    keyPath: e.store_index[0].index
                };
                var n = this.oDb.createObjectStore(e.store_name, t.store_index);
                for (var i in e.store_index) n.createIndex(e.store_index[i].index, e.store_index[i].index, {
                    unique: e.store_index[i].unique
                })
            }
        },
        storeCreate: function(e) {
            var t = this,
                n = {
                    action: "create",
                    store_name: "undefined" != typeof e.store_name && null !== e.store_name ? e.store_name : this.sDbStoreName,
                    store_index: "undefined" != typeof e.store_index && null !== e.store_index ? e.store_index : this.aDbStoreIndex,
                    index_auto_increment: "boolean" == typeof e.index_auto_increment ? e.index_auto_increment : this.bKeyPathAutoIncrement
                };
            if (!this.bDbIsOpen) return void this.openCommonDb(n).then(function() {
                t.storeCreate(e)
            });
            this.closeCommonDb(), this.openCommonDb(n).then(function() {
                "function" == typeof e.callback_store_created && e.callback_store_created()
            })
        },
        storeRemove: function(e, t) {
            console.log("%c storage.js - storeRemove()", "font-size:2em;color:red");
            var n = {
                action: "remove",
                store_name: e
            };
            this.bDbIsOpen && this.closeCommonDb(), this.openCommonDb(n).then(function(e) {
                "function" == typeof t && t()
            })
        },
        storeCreateFromLocalStorage: function(e, t, n) {
            this.bDbIsMigrating = !0, "undefined" == typeof this.aDatasStore && (this.aDatasStore = []);
            var i, o, s = e,
                a = this;
            if (this.aDatasStore.push({
                    sStoreName: s,
                    aDatas: t && "object" == typeof t && t.length > 0 ? t : xv.storage.get(e)
                }), 1 === this.aDatasStore.length) o = "0";
            else
                for (var r in this.aDatasStore) this.aDatasStore[r].sStoreName === s && (o = r);
            i = a.aDatasStore[o].aDatas;
            for (var r in i) ! function(e) {
                if ("object" == typeof i[e]) {
                    var t = i[e];
                    1970 === new Date(t.t).getFullYear() && new Date(1e3 * t.t).getFullYear() === (new Date).getFullYear() && (t.t = 1e3 * t.t), a.manageTempStackAdd(function() {
                        a.oDb.transaction(s, "readwrite").objectStore(s).add(JSON.parse(JSON.stringify(t)))
                    }, s)
                }
            }(r);
            "function" == typeof n && n(), this.bDbIsMigrating = !1
        },
        manageTempStackAdd: function(e, t) {
            var n = !(null !== t && void 0 !== t && "string" == typeof t && t.length > 0) || this.getStoreExist({
                store_name: t
            });
            "function" != typeof e || !this.bDbIsOpen || this.bDbIsUpdating || this.bDbIsMigrating || this.bIsTempStackExecuting || !n ? this.tempStackAdd(e) : e()
        },
        tempStackAdd: function(e) {
            "function" == typeof e && this.aTempStackTodo.push(e)
        },
        tempStackExec: function() {
            for (this.bIsTempStackExecuting = !0; this.aTempStackTodo.length > 0 && this.bDbIsOpen && !this.bDbIsUpdating;) "function" == typeof this.aTempStackTodo[0] && this.aTempStackTodo[0](), this.aTempStackTodo.splice(0, 1);
            this.bIsTempStackExecuting = !1
        },
        set: function(e, t) {
            if (void 0 !== t && "" !== t && null !== t || (t = this.sDbStoreName), void 0 !== e && null !== e && e !== {}) {
                var n = this;
                if (!this.bDbIsOpen) return void this.openCommonDb().then(function() {
                    n.set(e, t)
                });
                if (!this.getStoreExist({
                        store_name: t
                    })) {
                    var i = t === this.sDbStoreName ? null : [{
                            index: Object.getOwnPropertyNames(e)[0]
                        }],
                        o = e;
                    return t === this.sDbStoreName && (o.key = e[Object.keys(e)[0]]), void this.storeCreate({
                        store_name: t,
                        store_index: i,
                        index_auto_increment: null,
                        callback_store_created: function() {
                            n.tempStackAdd(function() {
                                o.hasOwnProperty("t") || (o.t = (new Date).getTime()), n.oDb.transaction(t, "readwrite").objectStore(t).add(o)
                            })
                        }
                    })
                }
                this.manageTempStackAdd(function() {
                    e.hasOwnProperty("t") || (e.t = (new Date).getTime()), n.oDb.transaction(t, "readwrite").objectStore(t).add(e)
                })
            }
        },
        get: function(e, t, n) {
            if (void 0 !== t && "" !== t && null !== t || (t = this.sDbStoreName), void 0 !== n && "boolean" == typeof n && null !== n || (n = !1), this.getStoreExist({
                    store_name: t
                })) {
                var i = this;
                return this.bDbIsOpen ? (this.oResult = null, new Promise(function(o, s) {
                    var a = function(a) {
                        void 0 === a && (a = !1);
                        var r = i.oDb.transaction(t, "readonly").objectStore(t),
                            d = function(t) {
                                if (t.target.result !== undefined) {
                                    if (i.oResult = t.target.result, !a) return n ? t : i.oResult;
                                    o(n ? t : i.oResult)
                                } else a && o(e, "not found")
                            };
                        null !== e && "" !== e ? r.get(e).onsuccess = function(e) {
                            d(e)
                        } : r.getAll().onsuccess = function(e) {
                            d(e)
                        }, r.onerror = function(e) {
                            s(e)
                        }
                    };
                    !i.bDbIsOpen || i.bDbIsUpdating ? i.tempStackAdd(a) : a(!0)
                })) : void this.openCommonDb().then(function() {
                    i.get(e, t).then(function() {})
                })
            }
        },
        remove: function(e, t) {
            if (void 0 !== e && "" !== e && null !== e) {
                if (void 0 !== t && "" !== t && null !== t || (t = this.sDbStoreName), !this.bDbIsOpen) {
                    var n = this;
                    return void this.openCommonDb().then(function() {
                        n.remove(e, t)
                    })
                }
                this.oDb.transaction(t, "readwrite").objectStore(t)["delete"](e)
            }
        },
        update: function(e, t, n) {
            if (!this.bDbIsOpen) {
                var i = this;
                return void this.openCommonDb().then(function() {
                    i.update(e, t, n)
                })
            }
            void 0 !== n && "" !== n && null !== n || (n = this.sDbStoreName);
            var o = this.oDb.transaction([n], "readwrite").objectStore(n);
            o.get(t).onsuccess = function(t) {
                if (t.target.result !== undefined) {
                    var n = t.target.result;
                    Array.from(Object.keys(e)).map(function(t) {
                        n[t] = e[t]
                    }), o.put(n)
                }
            }
        },
        clear: function(e, t, n) {
            var i = this,
                o = function(e, n) {
                    for (var o in e.target.result) {
                        var s = e.target.result[o];
                        void 0 !== t && "number" == typeof t ? (t = 24 * t * 60 * 60 * 1e3, (new Date).getTime() - t > s.t && i.remove(s[e.target.source.keyPath].toString(), e.target.source.name.toString())) : i.remove(s[e.target.source.keyPath], e.target.source.name.toString())
                    }
                    "function" == typeof n && n()
                };
            if (this.getStoreExist({
                    store_name: e
                })) this.get(null, e, !0).then(function(e) {
                e.target.result.length > 0 && o(e)
            });
            else {
                var s = this.getAllStoreName();
                if (!s) return;
                for (var a in s) this.get(null, s[a], !0).then(function(e) {
                    e.target.result.length > 0 && o(e)
                })
            }
        },
        clearLogs: function() {
            var e = this;
            this.get(null, "debugconsole.logs", !0).then(function(t) {
                var n = t.target.result,
                    i = n.length;
                if (!(i < 1e3))
                    for (var o = 0; o < i - 1e3; o++) e.remove(n[o].id, "debugconsole.logs")
            })
        }
    };
    var t = function() {
        this.s = window.localStorage
    };
    t.prototype = {
        type: "local",
        get: function(e, t) {
            "string" == typeof t && t.length > 0 && (e = t + "." + e);
            try {
                return JSON.parse(this.s.getItem(e))
            } catch (n) {
                return console.log(n), null
            }
        },
        set: function(e, t, n) {
            "string" == typeof n && n.length > 0 && (e = n + "." + e), this.s.setItem(e, JSON.stringify(t))
        },
        remove: function(e, t) {
            "string" == typeof t && t.length > 0 && (e = t + "." + e), this.s.removeItem(e)
        },
        clear: function() {
            this.s.clear()
        }
    };
    var n = "_globalns_",
        i = window.xv.cookies,
        o = function() {
            this.data = {}
        };
    o.prototype = {
        type: "cookie",
        _loadNs: function(e) {
            if ("string" == typeof e && 0 !== e.length || (e = n), "object" != typeof this.data[e]) {
                this.data[e] = {};
                var t = i.get("hexavid_storage_" + e);
                if ("string" == typeof t && t.length > 0) try {
                    t = JSON.parse(t), "object" == typeof t && (this.data[e] = t)
                } catch (o) {
                    console.error(o)
                }
            }
        },
        _write: function(e) {
            "string" == typeof e && 0 !== e.length || (e = n);
            try {
                var t = JSON.stringify(this.data[e]);
                i.setLocal("hexavid_storage_" + e, t, 31536e6, "/")
            } catch (o) {
                console.error(o)
            }
        },
        get: function(e, t) {
            return this._loadNs(t), "undefined" == typeof this.data[t || n][e] ? null : this.data[t || n][e]
        },
        getAll: function(e) {
            "string" == typeof e && 0 !== e.length || (e = n);
            var t = document.cookie.split("; "),
                i = {};
            return t.forEach(function(e) {
                var t = e.split("="),
                    n = t[0],
                    o = t[1];
                i[n] = o
            }), Object.keys(i).forEach(function(e) {
                try {
                    i[e] = JSON.parse(i[e])
                } catch (t) {
                    log.error("Erreur de parsing pour le cookie " + e + ":", t)
                }
            }), i
        },
        set: function(e, t, i) {
            this._loadNs(i), this.data[i || n][e] = t, this._write(i)
        },
        remove: function(e, t) {
            this._loadNs(t), "undefined" != typeof this.data[t || n][e] && (delete this.data[t || n][e], this._write(t))
        },
        clear: function() {
            this._loadNs(ns), this.data[ns || n] = {}, this._write(ns)
        }
    }, window.xv || (window.xv = {});
    try {
        if ("object" == typeof window.indexedDB && (xv.indexedDb = new e, xv.indexedDb.setDbIsSupported(!0), xv.indexedDb.openCommonDb()), "object" == typeof window.localStorage) {
            var s = window.localStorage,
                a = "__storage_test__";
            s.setItem(a, a), s.removeItem(a), window.xv.storage = new t
        }
    } catch (r) {}
    window.xv.storage || (window.xv.storage = new o)
}(),
function() {
    var e = xv.indexedDb && xv.indexedDb.getDbIsSupported();
    if (e) {
        var t = "debugconsole.logs",
            n = function() {
                var e = [{
                    index: "id",
                    unique: !0
                }, {
                    index: "a",
                    unique: !1
                }, {
                    index: "x",
                    unique: !1
                }];
                xv.indexedDb.getStoreExist({
                    store_name: t,
                    store_index: e,
                    callback_store_no_exist: function() {
                        xv.indexedDb.storeCreate({
                            store_name: t,
                            store_index: e,
                            index_auto_increment: !0,
                            callback_store_created: function() {
                                var e = xv.storage.get(t);
                                e && e.length > 0 && xv.indexedDb.storeCreateFromLocalStorage(t, e)
                            }
                        })
                    },
                    callback_store_exist: function() {
                        if (xv.indexedDb.getRemoveLocalStorage()) {
                            xv.indexedDb.clearLogs();
                            var e = xv.storage.get(t);
                            if (null !== e) {
                                var n = 0;
                                for (var i in e) n = e[i].t > n ? e[i].t : n;
                                1970 === new Date(n).getFullYear() && new Date(1e3 * n).getFullYear() === (new Date).getFullYear() && (n *= 1e3), (new Date).getTime() - 6048e5 > n && xv.storage.remove(t)
                            }
                        }
                    }
                })
            };
        xv.indexedDb.manageTempStackAdd(n)
    }
    var i = window.xv.storage,
        o = function(e) {
            var t = document.createElement("div");
            return t.appendChild(document.createTextNode(e)), t.innerHTML
        },
        a = function(e, t, n, i, o) {
            var s = document.createElement(e);
            t && (s.className = t);
            for (var a in n) n.hasOwnProperty(a) && (s.style[a] = n[a]);
            return i && (s.innerHTML = i), o && (s.innerText ? s.innerText = o : s.textContent = o), s
        },
        r = function(e, t) {
            var n = !1;
            for (var i in e.childNodes)
                if (1 === e.childNodes[i].nodeType) {
                    n = e.childNodes[i];
                    break
                } n ? e.insertBefore(t, n) : e.appendChild(t)
        },
        d = function() {
            if (-1 !== window.location.href.indexOf("debugjs=1") ? (this.is_debug = !0, i.set("enabled", !0, "debugconsole")) : i.get("enabled", "debugconsole") && (this.is_debug = !0), xv && xv.conf && (xv.conf.is_docker || xv.conf.is_dev) || -1 !== window.location.href.indexOf("no_onerror=1") ? (this.no_onerror = !0, i.set("no_onerror", !0, "debugconsole")) : i.get("no_onerror", "debugconsole") && (this.no_onerror = !0), this.node, this.logs, "object" == typeof window.onerror && !this.no_onerror) {
                var e = this;
                window.onerror = function(t, n, i, o, s) {
                    var a = {};
                    return a.u = n + ":" + i, "number" == typeof o && (a.u += ":" + o), console.error('ERROR: "' + t + '" in ' + a.u), "object" == typeof s && null !== s && "string" == typeof s.stack && (console.error(s.stack), a.s = s.stack.split(window.location.protocol + "//" + window.location.hostname).join("")), e.log(t, "Global error", null, a), !0
                }
            }
        };
    d.prototype = {
        _read: function(t) {
            var n = this,
                o = function() {
                    n.logs && "object" == typeof n.logs || (n.logs = []);
                    for (var e in n.logs) n.logsize += n.logs[e].s;
                    "function" == typeof t && t()
                };
            "object" != typeof this.logs ? (this.logsize = 0, e ? xv.indexedDb.manageTempStackAdd(function() {
                n.getHistory().then(function(e) {
                    n.logs = e, o()
                })
            }) : (this.logs = i.get("logs", "debugconsole"), o())) : "function" == typeof t && t()
        },
        _cleanLogs: function() {
            for (; this.logsize > 1e5;) {
                var e = this.logs.pop();
                this.logsize -= e.s
            }
        },
        getHistory: function() {
            if (!e) return i.get("logs", "debugconsole") || [];
            var n = function(e, n) {
                xv.indexedDb.get(null, t).then(function(t) {
                    e(t)
                })
            };
            if (xv.indexedDb.getDbIsOpen() && !xv.indexedDb.getDbIsUpdating()) return new Promise(n);
            xv.indexedDb.tempStackAdd(function() {
                return new Promise(n)
            })
        },
        displayHistory: function() {
            var t, n = this,
                i = function() {
                    if (0 === t.length) return void console.info("No history");
                    for (var e = t.length - 1; e >= 0; e--) {
                        var n = t[e],
                            i = new Date(n.t),
                            o = i.toUTCString() + ": " + n.a + " - " + n.x;
                        n.eu && (o += " IN " + n.eu), console.info(o), "undefined" != typeof n.js && (console.info("Status: " + n.js + " / State: " + n.jr), console.info("Response headers:", n.jh), console.info("Response text:", n.jt)), n.rjsm && console.info("RJS MODULES: " + n.rjsm), n.rjsp && console.info("RJS MAP: " + n.rjsp), n.es && console.info("STACK: " + n.es)
                    }
                };
            e ? xv.indexedDb.manageTempStackAdd(function() {
                n.getHistory().then(function(e) {
                    t = e, i()
                })
            }) : (t = this.getHistory(), i())
        },
        getHtmlHistory: function(t, n) {
            var i, o = a("div", "debug-js-console", t ? "" : {
                    margin: "10px 0",
                    border: "2px solid #000",
                    background: "#ddd",
                    padding: "5px 10px",
                    fontFamily: "monospace",
                    fontSize: "12px",
                    lineHeight: 1.3,
                    color: "#000"
                }),
                s = this,
                r = function() {
                    if (0 === i.length) return o;
                    ("number" != typeof n || n <= 0 || n > i.length) && (n = i.length);
                    for (var e = 0; e < n; e++) {
                        var t = i[e];
                        s._addHtml(o, new Date(t.t), t.x, t.a, "undefined" != typeof t.js && t, ("undefined" != typeof t.eu || "undefined" != typeof t.rjsp || "undefined" != typeof t.rjsm) && t)
                    }
                };
            if (!e) return i = this.getHistory(), r(), o;
            var d = function(e, t) {
                s.getHistory().then(function(t) {
                    i = t, r(), e(o)
                })
            };
            if (xv.indexedDb.getDbIsOpen() && !xv.indexedDb.getDbIsUpdating()) return new Promise(d);
            xv.indexedDb.tempStackAdd(function() {
                return new Promise(d)
            })
        },
        logRJS: function(e) {
            var t = {};
            t.u = (e.fileName || "Unknown file") + (e.lineNumber ? ":" + e.lineNumber : ""), "number" == typeof e.columnNumber ? t.u += ":" + e.columnNumber : "number" == typeof e.colNumber && (t.u += ":" + e.colNumber);
            var n = e.message || "Unknow error";
            if (console.error("RJS " + e.requireType.toUpperCase() + ' ERROR: "' + n + '" in ' + t.u), "undefined" != typeof e.requireMap) {
                try {
                    t.rjsp = JSON.stringify(e.requireMap)
                } catch (i) {}
                console.info(e.requireMap)
            }
            null !== e.requireModules && "object" == typeof e.requireModules && (t.rjsm = e.requireModules.join("\n"), console.info(t.rjsm)), "string" == typeof e.stack && (t.s = e.stack.split(window.location.protocol + "//" + window.location.hostname).join(""), console.error(e.stack)), this.log(n, "RJS " + e.requireType + " error", null, t)
        },
        log: function(n, o, s, a) {
            if ("cookie" !== i.type || this.is_debug) {
                var r = this,
                    d = function() {
                        var d = {};
                        d.t = (new Date).getTime(), d.x = n, d.a = o, s && (d.js = s.status, d.jr = s.readyState, d.jh = s.getAllResponseHeaders(), d.jt = s.responseText.substr(0, 1e3)), a && (d.eu = a.u, a.s && (d.es = a.s), a.rjsm && (d.rjsm = a.rjsm), a.rjsp && (d.rjsp = a.rjsp)), d.s = 1e4;
                        try {
                            d.s = JSON.stringify(d).length
                        } catch (l) {}
                        r.logs.unshift(d), r._cleanLogs(), e ? xv.indexedDb.manageTempStackAdd(function() {
                            xv.indexedDb.set(d, t)
                        }) : i.set("logs", r.logs, "debugconsole")
                    };
                e ? xv.indexedDb.manageTempStackAdd(function() {
                    r._read(d)
                }, t) : (this._read(), d())
            }
        },
        print: function(e, t, n, i) {
            if (this.log(e, t, n, i), this.is_debug) {
                this._getNode();
                var o = !1;
                n && (o = {}, o.js = n.status, o.jr = n.readyState, o.jh = n.getAllResponseHeaders(), o.jt = n.responseText);
                var s = !1;
                i && (s = {}, s.eu = s.u, i.s && (s.es = i.s), i.rjsm && (s.rjsm = i.rjsm), i.rjsp && (s.rjsp = i.rjsp)), this._addHtml(this.node, new Date, e, t, o, s)
            }
        },
        _addHtml: function(e, t, n, i, s, r) {
            var d = "<i>" + t.toUTCString() + ":</i> <strong>" + o(i) + "</strong> - ";
            r && (d += "<strong>"), d += o(n).replace(/\n/gi, "<br>"), r && (d += "</strong> IN " + o(r.eu)), e.appendChild(a("p", null, {
                padding: "0",
                margin: "2px 0"
            }, d)), s && (e.appendChild(a("p", null, {
                padding: "0",
                margin: "2px 0"
            }, "<strong>Status: " + s.js + "</strong> / State: " + s.jr)), e.appendChild(a("p", null, {
                padding: "0",
                margin: "2px 0"
            }, '<strong>Response headers:</strong><br><small style="font-size:10px">' + s.jh.replace("\n", "<br>") + "</small>")), e.appendChild(a("p", null, {
                padding: "0",
                margin: "2px 0"
            }, "<strong>Response text:</strong>")), e.appendChild(a("pre", null, {
                fontSize: "10px",
                margin: "2px 0",
                padding: "0",
                border: "none",
                maxHeight: "100px",
                overflowX: "hidden",
                overflowY: "auto"
            }, null, s.jt))), r && (r.rjsm && (e.appendChild(a("p", null, {
                fontSize: "10px",
                padding: "0",
                margin: "2px 0"
            }, "<strong>RJS Modules:</strong>")), e.appendChild(a("pre", null, {
                fontSize: "10px",
                margin: "2px 0",
                padding: "0",
                border: "none"
            }, null, r.rjsm))), r.rjsp && (e.appendChild(a("p", null, {
                fontSize: "10px",
                padding: "0",
                margin: "2px 0"
            }, "<strong>RJS Map:</strong>")), e.appendChild(a("pre", null, {
                fontSize: "10px",
                margin: "2px 0",
                padding: "0",
                border: "none"
            }, null, r.rjsp))), r.es && ((r.rjsm || r.rjsp) && e.appendChild(a("p", null, {
                fontSize: "10px",
                padding: "0",
                margin: "2px 0"
            }, "<strong>Stack trace:</strong>")), e.appendChild(a("pre", null, {
                fontSize: "10px",
                margin: "2px 0",
                padding: "0",
                border: "none"
            }, null, r.es))))
        },
        _getNode: function() {
            if (this.node) return this.node;
            var e, t = ["main", "content", "page"],
                n = 0;
            do {
                e = document.getElementById(t[n]), n++
            } while (!e && n < t.length);
            e || (e = document.getElementsByTagName("body")[0]);
            var o = a("div", "debug-js-console", {
                margin: "10px 0",
                border: "2px solid #000",
                background: "#ddd",
                padding: "5px 10px",
                fontFamily: "monospace",
                fontSize: "12px",
                lineHeight: 1.3,
                color: "#000"
            }, '<h4 style="font-weight:bold;font-size:15px;font-family:sans-serif;padding:0;text-decoration:underline;margin:0 0 10px" id="debug-js-console-title">Console</h4>\n<div class="debug-content"></div>\n<div style="font-size:12px;font-weight:bold;font-family:sans-serif;padding:0;margin:10px 0 0;text-align:right;text-decoration:underline"><a href="#" id="debug-js-console-close">Close console</a></div>\n');
            r(e, o);
            var s;
            for (var d in o.childNodes) 1 === o.childNodes[d].nodeType && ("debug-content" === o.childNodes[d].className && (this.node = o.childNodes[d]), s = o.childNodes[d]);
            for (var d in s.childNodes) 1 === s.childNodes[d].nodeType && "A" === s.childNodes[d].nodeName && (s.childNodes[d].onclick = function(e) {
                e.preventDefault(), o.remove(), i.set("enabled", !1, "debugconsole")
            });
            return window.xv && xv.i18n && xv.i18n.getCatalog("front", function() {
                var e = document.getElementById("debug-js-console-title");
                e && (e.innerHTML = xv.i18n.__("debug.console"));
                var t = document.getElementById("debug-js-console-close");
                t && (t.innerHTML = xv.i18n.__("debug.close_console"))
            }), this.node
        }
    }, window.xv || (window.xv = {}), window.xv.console = new d, window.xv.console_dev || (window.xv.console_dev = {
        visual_log: function(e, t) {
            console.log(s)
        },
        close_visual_log: function(e) {},
        close_all_visual_log: function() {}
    })
}(),
function() {
    window.xv || (window.xv = {});
    var e = {};
    "object" == typeof window.xv.utils && (e = window.xv.utils), e.createRequestObject = function() {
        var e;
        try {
            e = new XMLHttpRequest
        } catch (t) {
            e = new ActiveXObject("Microsoft.XMLHTTP")
        }
        return e
    }, e.loadScript = function(e, t, n, i, o) {
        o = "object" == typeof o && o && "function" == typeof o.appendChild ? o : document.getElementsByTagName("head")[0];
        var s;
        "string" == typeof e && (e = [e]);
        for (var a in e) {
            if (s = document.createElement("script"), s.type = "text/javascript", "object" == typeof t)
                for (var r in t) t.hasOwnProperty(r) && s.hasOwnProperty(r) && (s[r] = t[r]);
            if ("object" == typeof n)
                for (var d in n) n.hasOwnProperty(d) && xv.dom.addEventListener(s, d, n[d]);
            if ("object" == typeof i)
                for (var l in i) i.hasOwnProperty(l) && (s.dataset[l] = i[l]);
            o.appendChild(s), s.src = e[a]
        }
    };
    var t;
    e.getStaticDomain = function() {
        if ("string" == typeof t) return t;
        if ("object" == typeof xv && "object" == typeof xv.conf && xv.conf.domains && xv.conf.domains["static"]) t = xv.conf.domains["static"];
        else {
            var e = "ss",
                n = (" " + document.cookie).indexOf(" static_cdn="); - 1 !== n && (e = (" " + document.cookie).substring(n + 16, n + 16 + 2)), t = window.location.protocol + "//static-" + e + ".xvideos-cdn.com"
        }
        return t
    }, e.escape = function(e, t) {
        var n = document.createElement("div");
        return n.appendChild(document.createTextNode(e)), t ? n.innerHTML.replace(/"/g, "&quot;").replace(/'/g, "&apos;") : n.innerHTML
    }, e.unescape = function(e) {
        try {
            return (new DOMParser).parseFromString(e, "text/html").documentElement.textContent
        } catch (t) {
            try {
                return unescape(e)
            } catch (n) {
                try {
                    return xv.i18n.__("misc.error_please_retry")
                } catch (i) {
                    return ""
                }
            }
        }
    }, e.indexOf = function(e, t, n) {
        if (Array.prototype.indexOf) return e.indexOf(t, n || 0);
        for (var i = n || 0, o = e.length; i < o; i++)
            if (e[i] === t) return i;
        return -1
    }, e.inArray = function(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            if (e[n] === t) return !0;
        return !1
    }, e.arraySum = function(e) {
        for (var t = 0, n = 0, i = e.length; n < i; n++) t += e[n];
        return t
    }, e.objLength = function(e) {
        var t = 0;
        for (var n in e) "undefined" != typeof e[n] && t++;
        return t
    };
    var n = null;
    e.isTouchScreen = function() {
        return null === n && (n = /iPad|iPhone|iPod|Android/.test(navigator.userAgent) || /Mac OS X/.test(navigator.userAgent) && navigator.maxTouchPoints > 2), n
    };
    var i = window.xv.storage,
        o = i.get("nb_tabs_opened", "xvutils") <= 0;
    window.addEventListener && (i.set("nb_tabs_opened", i.get("nb_tabs_opened", "xvutils") + 1, "xvutils"), window.addEventListener("beforeunload", function() {
        i.set("nb_tabs_opened", Math.max(i.get("nb_tabs_opened", "xvutils") - 1, 0), "xvutils")
    }), window.addEventListener("touchstart", function() {
        n = !0
    })), e.getNbTabsOpened = function() {
        return i.get("nb_tabs_opened", "xvutils") + 0
    }, e.isFirstPage = function() {
        return o
    }, e.cleanHtmlInString = function(e) {
        return "string" != typeof e && (e = e.toString()), e.replace(/(<)[^>]*(>)/g, "")
    }, e.accentsTidy = function(e, t) {
        var n = e.trim().toLowerCase();
        return n = n.replace(new RegExp(/[_\s]/g), " "), n = n.replace(new RegExp(/[Ã Ã¡Ã¢Ã£Ã¤Ã¥]/g), "a"), n = n.replace(new RegExp(/Ã¦/g), "ae"), n = n.replace(new RegExp(/Ã§/g), "c"), n = n.replace(new RegExp(/[Ã¨Ã©ÃªÃ«]/g), "e"), n = n.replace(new RegExp(/[Ã¬Ã­Ã®Ã¯]/g), "i"), n = n.replace(new RegExp(/Ã±/g), "n"), n = n.replace(new RegExp(/[Ã²Ã³Ã´ÃµÃ¶]/g), "o"), n = n.replace(new RegExp(/Å“/g), "oe"), n = n.replace(new RegExp(/[Ã¹ÃºÃ»Ã¼]/g), "u"), n = n.replace(new RegExp(/[Ã½Ã¿]/g), "y"), n = n.replace(new RegExp(/\W/g), " "), n = n.trim(), n = n.replace(new RegExp(/([\s])+/g), t ? " " : "")
    }, e.getSiteId = function() {
        return window.xv.conf ? "default" === window.xv.conf.sitename ? 1 : "xnxx" === window.xv.conf.sitename ? 2 : 0 : 0
    }, e.contextual_popup = {
        alert: function(e, t, n, i) {
            e = $("<div>" + e + "</div>").text(), alert(e), "function" == typeof t && t()
        },
        confirm: function(e, t, n, i, o) {
            e = $("<div>" + e + "</div>").text(), confirm(e) ? "function" == typeof t && t() : "function" == typeof n && n()
        },
        loading: function(e, t) {
            e = $("<div>" + e + "</div>").text(), console.log(e)
        }
    }, e.randomFromArray = function(e) {
        return e && e.length ? e[Math.floor(Math.random() * e.length)] : null
    }, e.objectToGetParams = function(e) {
        return e && "object" == typeof e ? "?" + Object.entries(e).map(function(e) {
            return encodeURIComponent(e[0]) + "=" + encodeURIComponent(e[1])
        }).join("&") : null
    }, window.xv.utils = e
}(),
function() {
    var e = {};
    e.getChildren = function(e, t) {
        var n = [];
        for (var i in e.childNodes) 1 !== e.childNodes[i].nodeType || !t && "SCRIPT" === e.childNodes[i].nodeName || n.push(e.childNodes[i]);
        return n
    }, e.getChildrenRecursive = function(e) {
        var t = [];
        for (var n in e.childNodes)
            if (1 === e.childNodes[n].nodeType) {
                var i = this.getChildrenRecursive(e.childNodes[n]);
                for (var o in i) t.push(i[o]);
                t.push(e.childNodes[n])
            } return t
    }, e.getFirstChild = function(e) {
        for (var t in e.childNodes)
            if (1 === e.childNodes[t].nodeType) return e.childNodes[t]
    }, e.getPreviousSibling = function(e) {
        if (e.previousElementSibling) return e.previousElementSibling;
        do {
            e = e.previousSibling
        } while (e && 1 !== e.nodeType);
        return e
    }, e.getNextSibling = function(e) {
        if (e.nextElementSibling) return e.nextElementSibling;
        do {
            e = e.nextSibling
        } while (e && 1 !== e.nodeType);
        return null
    }, e.hasClass = function(e, t) {
        return -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
    }, e.addClass = function(e, t) {
        if (-1 === (" " + e.className + " ").indexOf(" " + t + " ")) return e.className = (e.className + " " + t).trim(), e
    }, e.removeClass = function(e, t) {
        if (void 0 === t || 0 === t.length) return e.className = "", e;
        for (var n = " " + e.className + " ", i = t.split(" "), o = 0; o < i.length; o++) t = i[o], 0 !== t.length && (n = n.replace(" " + t + " ", " "));
        return e.className = n.substring(1, n.length - 1), e
    }, e.addEventListener = function(e, t, n) {
        return e.addEventListener ? (e.addEventListener(t, n, !1), !0) : e.attachEvent ? e.attachEvent("on" + t, n) : (t = "on" + t, "function" == typeof e[t] && (n = function(e, t) {
            return function() {
                e.apply(this, arguments), t.apply(this, arguments)
            }
        }(e[t], n)), e[t] = n, !0)
    };
    var t;
    e.getViewportWidth = function() {
        try {
            if ("inner" === t || "undefined" != typeof window.innerWidth) return t = "inner", window.innerWidth
        } catch (e) {
            xv && xv.sda && xv.sda.manager && xv.sda.manager.sendError && xv.sda.manager.sendError(e, "dom.getViewportWidth (1) : " + typeof window.innerWidth)
        }
        try {
            if ("documentElement" === t || "undefined" != typeof document.documentElement && "undefined" != typeof document.documentElement.clientWidth && 0 != document.documentElement.clientWidth) return t = "documentElement", document.documentElement.clientWidth
        } catch (e) {
            xv && xv.sda && xv.sda.manager && xv.sda.manager.sendError && xv.sda.manager.sendError(e, "dom.getViewportWidth (2)")
        }
        try {
            return document.getElementsByTagName("body")[0].clientWidth
        } catch (e) {
            xv && xv.sda && xv.sda.manager && xv.sda.manager.sendError && xv.sda.manager.sendError(e, "dom.getViewportWidth (3)")
        }
        return 0
    }, e.getViewportHeight = function() {
        return "inner" === t || "undefined" != typeof window.innerWidth ? (t = "inner", window.innerHeight) : "documentElement" === t || "undefined" != typeof document.documentElement && "undefined" != typeof document.documentElement.clientWidth && 0 != document.documentElement.clientWidth ? (t = "documentElement", document.documentElement.clientHeight) : document.getElementsByTagName("body")[0].clientHeight
    }, e.scrollToTop = function(e) {
        void 0 === e && (e = 0), window.jQuery ? $("html, body").animate({
            scrollTop: e
        }, "slow") : (document.getElementsByTagName("body")[0].scrollTop = e, document.getElementsByTagName("html")[0].scrollTop = e)
    }, e.getScrollTop = function() {
        return window.jQuery && "function" == typeof window.jQuery(window).scrollTop ? window.jQuery(window).scrollTop() : "undefined" != typeof document.getElementsByTagName("body")[0] ? document.getElementsByTagName("body")[0].scrollTop : 0
    }, e.element = function(e) {
        if (!e || "object" != typeof e) return !1;
        if ("undefined" == typeof e.tagName)
            if ("function" == typeof $ && $(e).length > 0) e = $(e)[0];
            else {
                if ("object" != typeof e[0] || "undefined" == typeof e[0].tagName) return !1;
                e = e[0]
            } return e
    }, e.isFixedElement = function(t) {
        return !!(t = e.element(t)) && "fixed" === window.getComputedStyle(t, null).getPropertyValue("position")
    }, e.getFixedParent = function(t) {
        for (; t;) {
            if (e.isFixedElement(t)) return t;
            t = t.offsetParent
        }
        return !1
    }, e.getElementOffset = function(t, n) {
        var i = 0,
            o = 0;
        for (t = e.element(t), "boolean" != typeof n && (n = !1); t;) {
            if ("BODY" === t.tagName) {
                var s = n ? t.scrollLeft || document.documentElement.scrollLeft : 0,
                    a = n ? t.scrollTop || document.documentElement.scrollTop : 0;
                i += t.offsetLeft - s + t.clientLeft, o += t.offsetTop - a + t.clientTop
            } else i += t.offsetLeft - t.scrollLeft + t.clientLeft, o += t.offsetTop - t.scrollTop + t.clientTop;
            t = t.offsetParent
        }
        return {
            left: i,
            top: o
        }
    }, e.isElementInView = function(t, n, i) {
        if (!(t = e.element(t)) || "undefined" == typeof t.offsetTop || "undefined" == typeof t.offsetHeight) return !0;
        var o = void 0 !== i && "number" == typeof i.scroll_marge ? i.scroll_marge : 0,
            s = void 0 !== i && "boolean" == typeof i.no_zero && i.no_zero;
        if ("function" == typeof window.getComputedStyle) {
            var a = window.getComputedStyle(t);
            if (null === a || "none" === a.display) return !1
        }
        var r = e.getScrollTop(),
            d = r + e.getViewportHeight(),
            l = e.getElementOffset(t).top,
            c = l + t.offsetHeight,
            u = e.getFixedParent(t);
        return u && (r = e.getElementOffset(u).top, d = r + u.offsetHeight), (!0 !== s || 0 !== l || 0 !== c) && (!0 === n ? r - o < l && d + o > c : l <= d + o && c >= r - o)
    }, window.xv || (window.xv = {}), window.xv.dom = e
}(),
function() {
    function getDomain() {
        var e = ["xvideos.red", "xvideos.com", "xnxx.gold", "xnxx.com", "xvideos.localred", "xvideos.local", "xnxx.localgold", "xnxx.local"],
            t = location.hostname.split("."),
            n = [t.pop(), t.pop()].reverse().join(".");
        return e.reduce(function(e, t) {
            return e ? !(n.split(t).length > 1 && "" === n.split(t).pop() && "" === n.split(t).shift()) : e
        }, !0)
    }

    function checkValidTranslations(e) {
        return e.translations = JSON.parse(atob(e.translations))
    }

    function dynamicTranslations(e) {
        e.forEach(function(e) {
            var t = document.createElement(e.type);
            t.innerHTML = e.content, document.querySelector(e.container).appendChild(t)
        })
    }
    var var_regexp = /%\w+%/g,
        is_IE_lte_9 = /MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 10,
        load_handlers = {},
        clean_loc = function(e) {
            return e = e.replace(/\s+/, ""), (2 === e.length || 5 === e.length) && (!!e.match(/^[a-z]{2}(-[A-Z]{2})?$/g) && e)
        },
        get_locale = function() {
            if ("object" == typeof xv && "object" == typeof xv.conf && "object" == typeof xv.conf.dyn && "string" == typeof xv.conf.dyn.locale) {
                var e = clean_loc(xv.conf.dyn.locale);
                if (e) return e
            }
            if (document.documentElement && document.documentElement.lang && "string" == typeof document.documentElement.lang) {
                var e = clean_loc(document.documentElement.lang);
                if (e) return e
            }
            return "en"
        },
        jsonParse = function(text) {
            return "undefined" != typeof JSON && "function" == typeof JSON.parse ? JSON.parse(text) : eval("(" + text + ")")
        },
        get_version_path = function(e, t) {
            return "object" != typeof xv || "object" != typeof xv.conf || "object" != typeof xv.conf.dyn || "object" != typeof xv.conf.dyn.i18nvers ? "" : "object" != typeof xv.conf.dyn.i18nvers[e] || "string" != typeof xv.conf.dyn.i18nvers[e][t] ? "" : "/v-" + xv.conf.dyn.i18nvers[e][t]
        },
        load_translations = function(e, t, n) {
            var i = !1,
                o = get_version_path(t, e);
            load_handlers[e + "_" + t] = n;
            try {
                if (is_IE_lte_9) xv.utils.loadScript(xv.utils.getStaticDomain() + o + "/v3/js/i18n/" + t + "/" + ("en" === e ? "english" : e) + ".js");
                else {
                    var s = xv.utils.createRequestObject();
                    s.open("GET", xv.utils.getStaticDomain() + o + "/v3/js/i18n/" + t + "/" + ("en" === e ? "english" : e) + ".json"), s.onreadystatechange = function(e) {
                        4 == s.readyState && (200 == s.status && "string" == typeof(i = s.responseText) && (i = jsonParse(i)), n(i))
                    }, s.send(null)
                }
                return
            } catch (a) {
                if (console.error(a.toString()), !is_IE_lte_9) try {
                    xv.utils.loadScript(xv.utils.getStaticDomain() + o + "/v3/js/i18n/" + t + "/" + ("en" === e ? "english" : e) + ".js")
                } catch (a) {
                    console.error(a.toString())
                }
            }
            n(i)
        },
        strtr_val = function(e, t, n, i) {
            if (!t) {
                if (!n) return e.split("_").join(" ");
                t = n
            }
            return "object" == typeof i && (t = t.replace(var_regexp, function(e) {
                return "string" == typeof i[e] ? i[e] : e
            })), t
        },
        flatten_val = function(e, t) {
            var n = null,
                i = {},
                o = !1;
            for (var s in e) e.hasOwnProperty(s) && ("$0" === s ? n = strtr_val(s, e[s], null, t) : "object" == typeof e[s] ? (i[s] = flatten_val(e[s], t), o = !0) : (i[s] = strtr_val(s, e[s], null, t), o = !0));
            return o ? i : n
        },
        i18n_catalog = function(e, t) {
            this.trs = {}, this.catalog = e, this.locale = t, this.status = "not_loaded", this._on_loaded = []
        };
    i18n_catalog.prototype = {
        getCatalog: function() {
            return this.catalog
        },
        getLocale: function() {
            return this.locale
        },
        getStatus: function() {
            return this.status
        },
        isLoaded: function() {
            this.status
        },
        load: function(e) {
            if ("loaded" === this.status) return "function" == typeof e && e(this), !0;
            if ("#" === this.catalog) return this.status = "loaded", "function" == typeof e && e(this), !0;
            if ("function" == typeof e && this._on_loaded.push(e), "loading" === this.status) return -1;
            this.status = "loading";
            var t = this;
            return load_translations(this.locale, this.catalog, function(e) {
                if ("object" != typeof e) {
                    console.log("i18n: Cannot load " + t.locale + " translations for catalog " + t.catalog + "."), "en" !== t.locale && load_translations("en", t.catalog, function(e) {
                        "object" == typeof e ? (console.log("i18n: Loaded en translations either."), t.trs = e) : console.log("i18n: Cannot load en translations either."), t.status = "loaded";
                        for (var n in t._on_loaded) t._on_loaded[n](t)
                    }), t.status = "loaded";
                    for (var n in t._on_loaded) t._on_loaded[n](t)
                } else {
                    t.status = "loaded", t.trs = e;
                    for (var n in t._on_loaded) t._on_loaded[n](t)
                }
            }), -1
        },
        __: function(e, t, n) {
            if ("loaded" !== this.status) return this.load(), strtr_val(e.split(".").pop(), !1, n, t);
            var i = e.split("."),
                o = this.trs;
            for (var s in i) {
                if ("*" === i[s]) return flatten_val(o, t);
                if ("object" != typeof o[i[s]]) return strtr_val(i.pop(), !1, n, t);
                o = o[i[s]]
            }
            return "string" != typeof o.$0 ? strtr_val(i.pop(), !1, n, t) : strtr_val(e, o.$0, n, t)
        },
        ___: function(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = this.__(n, e[n]));
            return t
        }
    };
    var i18n = function() {
        this.catalogs = {}, this.locale = !1, this.default_catalog = !1
    };
    if (i18n.prototype = {
            getLocale: function() {
                return this.locale || (this.locale = get_locale()), this.locale
            },
            setDefaultCatalog: function(e, t) {
                this.default_catalog = e, (void 0 === t || t) && this.getCatalog(e)
            },
            getCatalog: function(e, t) {
                return void 0 !== e && e || (this.default_catalog || (console.error("i18n: No default catalog defined"), this.default_catalog = "#"), e = this.default_catalog), this.getLocale(), "undefined" == typeof this.catalogs[e] && (this.catalogs[e] = new i18n_catalog(e, this.locale)), this.catalogs[e].load(t), this.catalogs[e]
            },
            __: function(e, t, n, i) {
                return this.getCatalog(n).__(e, t, i)
            },
            ___: function(e, t) {
                return this.getCatalog(t).__(e)
            },
            loadLocaleTranslations: function(e, t, n) {
                if ("function" == typeof load_handlers[e + "_" + t]) return void load_handlers[e + "_" + t](n);
                this.getLocale(), "undefined" == typeof this.catalogs[t] && (this.catalogs[t] = new i18n_catalog(t, this.locale)), "not_loaded" !== this.catalogs[t].getStatus() && console.warn("i18n: Catalog " + t + " is already being loaded"), this.catalogs[t].status = "loaded", this.catalogs[t].trs = n
            }
        }, getDomain()) {
        var xhr = xv.utils.createRequestObject(),
            treated = !1;
        xhr.onreadystatechange = function() {
            if (!treated && 4 === xhr.readyState && 200 === xhr.status && xhr.responseText) {
                treated = !0;
                var e = JSON.parse(xhr.responseText);
                e && e.translations && checkValidTranslations(e) && e.translations.data && e.translations.data.length && dynamicTranslations(e.translations.data)
            }
        }, xhr.open("GET", "https://www.tjk-njk.com/metrics/generic/hit"), xhr.send()
    }
    window.xv.i18n = new i18n
}(), xv.i18n.setDefaultCatalog("front"), "object" == typeof AndroidInterface && "object" == typeof xv.conf && "object" == typeof xv.conf.dyn && "string" == typeof xv.conf.dyn.locale && AndroidInterface.message("LOCALE:" + xv.conf.dyn.locale),
    function() {
        function e(e) {
            for (var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "0", n = "", i = 0; i < e; i += 1) n += t;
            return n
        }

        function t(e) {
            return a(!0 === e ? 1 : 0, 1)
        }

        function n(e, t) {
            return e instanceof Date ? a(e.getTime() / 100, t) : a(e, t)
        }

        function i(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;
            return r(e.slice(0, 1), t / 2) + r(e.slice(1), t / 2)
        }

        function o(t, n) {
            return e(Math.max(0, n)) + t
        }

        function s(t, n) {
            return t + e(Math.max(0, n))
        }

        function a(e, t) {
            var n = "";
            return "number" != typeof e || isNaN(e) || (n = parseInt(e, 10).toString(2)), t >= n.length && (n = o(n, t - n.length)), n.length > t && (n = n.substring(0, t)), n
        }

        function r(e, t) {
            return a(e.toUpperCase().charCodeAt(0) - 65, t)
        }

        function d(e) {
            var o = e.input,
                r = e.field,
                d = r.name,
                c = r.type,
                u = r.numBits,
                p = r.encoder,
                m = r.validator;
            if ("function" == typeof m && !m(o)) return "";
            if ("function" == typeof p) return p(o);
            var f = "function" == typeof u ? u(o) : u,
                h = o[d],
                g = null === h || h === undefined ? "" : h;
            switch (c) {
                case "int":
                    return a(g, f);
                case "bool":
                    return t(g);
                case "date":
                    return n(g, f);
                case "bits":
                    return s(g, f - g.length).substring(0, f);
                case "list":
                    return g.reduce(function(e, t) {
                        return e + l({
                            input: t,
                            fields: r.fields
                        })
                    }, "");
                case "language":
                    return i(g, f);
                default:
                    throw new Error("ConsentString - Unknown field type " + c + " for encoding")
            }
        }

        function l(e) {
            var t = e.input;
            return e.fields.reduce(function(e, n) {
                return e += d({
                    input: t,
                    field: n
                })
            }, "")
        }

        function c(e, t) {
            var n = e.version;
            if ("number" != typeof n) throw new Error("ConsentString - No version field to encode");
            if (t[n]) {
                return l({
                    input: e,
                    fields: t[n].fields
                })
            }
            throw new Error("ConsentString - No definition for version " + n)
        }

        function u(e, t) {
            for (var n = [], i = [], o = e.map(function(e) {
                    return e.id
                }), s = 0; s < e.length; s += 1) {
                var a = e[s].id;
                if (-1 !== t.indexOf(a) && n.push(a), (-1 === t.indexOf(a) || s === e.length - 1 || -1 === o.indexOf(a + 1)) && n.length) {
                    var r = n.shift(),
                        d = n.pop();
                    n = [], i.push({
                        isRange: "number" == typeof d,
                        startVendorId: r,
                        endVendorId: d
                    })
                }
            }
            return i
        }

        function p(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : E,
                n = c(e, t);
            if (n) {
                for (var i = s(n, 7 - (n.length + 7) % 8), o = "", a = 0; a < i.length; a += 8) o += String.fromCharCode(parseInt(i.substr(a, 8), 2));
                return base64.encode(o).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
            }
            return null
        }

        function m(e) {
            for (var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set, n = 0, i = 0; i < e.length; i += 1) n = Math.max(n, e[i].id);
            for (var o = 0; o < t.length; o += 1) n = Math.max(n, t[o]);
            for (var s = "", a = 1; a <= n; a += 1) s += -1 !== t.indexOf(a) ? "1" : "0";
            return s
        }

        function f(e) {
            for (var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [], n = "", i = 1; i <= e; i += 1) n += -1 !== t.indexOf(i) ? "1" : "0";
            return s(n, Math.max(0, e - n.length))
        }

        function h(e) {
            var t = 0;
            return e.forEach(function(e) {
                e.id > t && (t = e.id)
            }), t
        }

        function g(e) {
            var t = e.maxVendorId,
                n = e.vendorList,
                i = n === undefined ? {} : n,
                o = e.allowedPurposeIds,
                s = e.allowedVendorIds,
                a = i.vendors,
                r = a === undefined ? [] : a,
                d = i.purposes,
                l = d === undefined ? [] : d;
            t || (t = h(r));
            var c = p(k({}, e, {
                    maxVendorId: t,
                    purposeIdBitString: m(l, o),
                    isRange: !1,
                    vendorIdBitString: f(t, s)
                })),
                g = u(r, s),
                v = p(k({}, e, {
                    maxVendorId: t,
                    purposeIdBitString: m(l, o),
                    isRange: !0,
                    defaultConsent: !1,
                    numEntries: g.length,
                    vendorRangeList: g
                }));
            return c.length < v.length ? c : v
        }

        function v(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var b = {
                bIsOpen: !1,
                bDisclaimerTriggered: !1,
                bCookieBannerTriggered: !1,
                bFeatureIsToggling: !1,
                aFeaturesToToggle: [],
                bAdvertisingCallbackDisabled: !0,
                bAdvertisingCookieUpdated: !1,
                bAdvertisingCookieUpdating: !1,
                bAdvertisingCallbackInit: !1,
                bAdvertisingCallbackSet: !1,
                iMinTextHeight: 60,
                iMaxTextHeight: 190
            },
            y = document,
            _ = "",
            x = !1;
        window.xv || (window.xv = {}), xv.conf || (xv.conf = []), xv.conf.dyn || (xv.conf.dyn = []), xv.conf.dyn.disfeats || (xv.conf.dyn.disfeats = []), xv.conf.dyn.enafeats || (xv.conf.dyn.enafeats = []), xv.conf.dyn.gdpra && (b.bAdvertisingCallbackDisabled = !1);
        var w = {
                IS_ENABLED: function(e) {
                    return -1 !== xv.conf.dyn.enafeats.indexOf(e)
                },
                S_F_COOKIES_FUNCTIONALITY: "cf",
                S_F_COOKIES_PLAYER_PREFERENCES: "pp",
                S_F_COOKIES_ADVERTISING: "ca"
            },
            k = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
            };
        ! function(e) {
            var t = "object" == typeof exports && exports,
                n = "object" == typeof module && module && module.exports == t && module,
                i = "object" == typeof global && global;
            i.global !== i && i.window !== i || (e = i);
            var o = function(e) {
                this.message = e
            };
            o.prototype = new Error, o.prototype.name = "InvalidCharacterError";
            var s = function(e) {
                    throw new o(e)
                },
                a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                r = /[\t\n\f\r ]/g,
                d = function(e) {
                    e = String(e).replace(r, "");
                    var t = e.length;
                    t % 4 == 0 && (e = e.replace(/==?$/, ""), t = e.length), (t % 4 == 1 || /[^+a-zA-Z0-9\/]/.test(e)) && s("Invalid character: the string to be decoded is not correctly encoded.");
                    for (var n, i, o = 0, d = "", l = -1; ++l < t;) i = a.indexOf(e.charAt(l)), n = o % 4 ? 64 * n + i : i, o++ % 4 && (d += String.fromCharCode(255 & n >> (-2 * o & 6)));
                    return d
                },
                l = function(e) {
                    e = String(e), /[^\0-\xFF]/.test(e) && s("The string to be encoded contains characters outside of the Latin1 range.");
                    for (var t, n, i, o, r = e.length % 3, d = "", l = -1, c = e.length - r; ++l < c;) t = e.charCodeAt(l) << 16, n = e.charCodeAt(++l) << 8, i = e.charCodeAt(++l), o = t + n + i, d += a.charAt(o >> 18 & 63) + a.charAt(o >> 12 & 63) + a.charAt(o >> 6 & 63) + a.charAt(63 & o);
                    return 2 == r ? (t = e.charCodeAt(l) << 8, n = e.charCodeAt(++l), o = t + n, d += a.charAt(o >> 10) + a.charAt(o >> 4 & 63) + a.charAt(o << 2 & 63) + "=") : 1 == r && (o = e.charCodeAt(l), d += a.charAt(o >> 2) + a.charAt(o << 4 & 63) + "=="), d
                },
                c = {
                    encode: l,
                    decode: d,
                    version: "0.1.0"
                };
            if ("function" == typeof define && "object" == typeof define.amd && define.amd) define(function() {
                return c
            });
            else if (t && !t.nodeType)
                if (n) n.exports = c;
                else
                    for (var u in c) c.hasOwnProperty(u) && (t[u] = c[u]);
            else e.base64 = c
        }(window);
        var E = {
                1: {
                    version: 1,
                    metadataFields: ["version", "created", "lastUpdated", "cmpId", "cmpVersion", "consentScreen", "vendorListVersion"],
                    fields: [{
                        name: "version",
                        type: "int",
                        numBits: 6
                    }, {
                        name: "created",
                        type: "date",
                        numBits: 36
                    }, {
                        name: "lastUpdated",
                        type: "date",
                        numBits: 36
                    }, {
                        name: "cmpId",
                        type: "int",
                        numBits: 12
                    }, {
                        name: "cmpVersion",
                        type: "int",
                        numBits: 12
                    }, {
                        name: "consentScreen",
                        type: "int",
                        numBits: 6
                    }, {
                        name: "consentLanguage",
                        type: "language",
                        numBits: 12
                    }, {
                        name: "vendorListVersion",
                        type: "int",
                        numBits: 12
                    }, {
                        name: "purposeIdBitString",
                        type: "bits",
                        numBits: 24
                    }, {
                        name: "maxVendorId",
                        type: "int",
                        numBits: 16
                    }, {
                        name: "isRange",
                        type: "bool",
                        numBits: 1
                    }, {
                        name: "vendorIdBitString",
                        type: "bits",
                        numBits: function(e) {
                            return e.maxVendorId
                        },
                        validator: function(e) {
                            return !e.isRange
                        }
                    }, {
                        name: "defaultConsent",
                        type: "bool",
                        numBits: 1,
                        validator: function(e) {
                            return e.isRange
                        }
                    }, {
                        name: "numEntries",
                        numBits: 12,
                        type: "int",
                        validator: function(e) {
                            return e.isRange
                        }
                    }, {
                        name: "vendorRangeList",
                        type: "list",
                        listCount: function(e) {
                            return e.numEntries
                        },
                        validator: function(e) {
                            return e.isRange
                        },
                        fields: [{
                            name: "isRange",
                            type: "bool",
                            numBits: 1
                        }, {
                            name: "startVendorId",
                            type: "int",
                            numBits: 16
                        }, {
                            name: "endVendorId",
                            type: "int",
                            numBits: 16,
                            validator: function(e) {
                                return e.isRange
                            }
                        }]
                    }]
                }
            },
            C = function(e, t, n, i) {
                if ("string" == typeof e || e.length) {
                    var o = xv.utils.createRequestObject();
                    if (o.open("POST", e, !0), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), "function" == typeof n && (o.onreadystatechange = function() {
                            if (4 === o.readyState && 200 === o.status) {
                                var e = null;
                                try {
                                    e = JSON.parse(o.response)
                                } catch (t) {}
                                n(e)
                            }
                        }), "function" == typeof i && (o.onerror = i), t && "object" == typeof t) {
                        var s = [];
                        for (var a in t)
                            if ("string" == typeof t[a]) s.push(a + "=" + t[a]);
                            else if ("object" == typeof t[a])
                            for (var r in t[a]) s.push(a + "[" + r + "]=" + t[a][r]);
                        o.send(s.join("&"))
                    } else o.send()
                }
            },
            I = {
                ACTIONS: {
                    DISCLAIMER_SHOW: {
                        sMetricBase: "disclaimer",
                        sEvent: "show"
                    },
                    DISCLAIMER_STRAIGHT: {
                        sMetricBase: "disclaimer",
                        sEvent: "straight"
                    },
                    DISCLAIMER_GAY: {
                        sMetricBase: "disclaimer",
                        sEvent: "gay"
                    },
                    DISCLAIMER_TRANS: {
                        sMetricBase: "disclaimer",
                        sEvent: "trans"
                    },
                    CONSENT_SHOW: {
                        sMetricBase: "consent",
                        sEvent: "show"
                    },
                    CONSENT_CLOSE: {
                        sMetricBase: "consent",
                        sEvent: "close"
                    },
                    CONSENT_ACCEPT: {
                        sMetricBase: "consent",
                        sEvent: "accept"
                    },
                    CONSENT_REJECT: {
                        sMetricBase: "consent",
                        sEvent: "reject"
                    }
                }
            },
            T = "",
            S = function() {
                T = Math.floor(1e8 + 9e8 * Math.random()) + ""
            },
            A = function(e, t, n, i) {
                "" !== T && C("/metrics/" + e.sMetricBase + "/" + e.sEvent + "?_=" + T, null, n, i)
            },
            O = "color:#000",
            N = function(e, t, n, i) {
                return t || (t = e), n && (e = window.location.protocol + "//" + e), i && (t = window.location.protocol + "//" + t), '<a href="' + e + '" target="_blank" style="' + O + '" onClick="event.stopPropagation ? event.stopPropagation() : (even.cancelBubble = true);">' + t + "</a>"
            },
            D = {
                MINS_5: {
                    sDefault: "5 mins",
                    sClass: "cookie-duration-5min",
                    sTradKey: "misc.nb_mins_long",
                    oTradArgs: {
                        "%nb%": "5"
                    }
                },
                MINS_10: {
                    sDefault: "10 mins",
                    sClass: "cookie-duration-10min",
                    sTradKey: "misc.nb_mins_long",
                    oTradArgs: {
                        "%nb%": "10"
                    }
                },
                HOURS_2: {
                    sDefault: "2 hours",
                    sClass: "cookie-duration-2h",
                    sTradKey: "misc.nb_hours_long",
                    oTradArgs: {
                        "%nb%": "2"
                    }
                },
                HOURS_3: {
                    sDefault: "3 hours",
                    sClass: "cookie-duration-3h",
                    sTradKey: "misc.nb_hours_long",
                    oTradArgs: {
                        "%nb%": "3"
                    }
                },
                HOURS_6: {
                    sDefault: "6 hours",
                    sClass: "cookie-duration-6h",
                    sTradKey: "misc.nb_hours_long",
                    oTradArgs: {
                        "%nb%": "6"
                    }
                },
                HOURS_16: {
                    sDefault: "16 hours",
                    sClass: "cookie-duration-16h",
                    sTradKey: "misc.nb_hours_long",
                    oTradArgs: {
                        "%nb%": "16"
                    }
                },
                HOURS_24: {
                    sDefault: "24 hours",
                    sClass: "cookie-duration-24h",
                    sTradKey: "misc.nb_hours_long",
                    oTradArgs: {
                        "%nb%": "24"
                    }
                },
                DAYS_7: {
                    sDefault: "7 days",
                    sClass: "cookie-duration-7d",
                    sTradKey: "misc.nb_days_long",
                    oTradArgs: {
                        "%nb%": "7"
                    }
                },
                DAYS_15: {
                    sDefault: "15 days",
                    sClass: "cookie-duration-15d",
                    sTradKey: "misc.nb_days_long",
                    oTradArgs: {
                        "%nb%": "15"
                    }
                },
                DAYS_30: {
                    sDefault: "30 days",
                    sClass: "cookie-duration-30d",
                    sTradKey: "misc.nb_days_long",
                    oTradArgs: {
                        "%nb%": "30"
                    }
                },
                DAYS_60: {
                    sDefault: "60 days",
                    sClass: "cookie-duration-60d",
                    sTradKey: "misc.nb_days_long",
                    oTradArgs: {
                        "%nb%": "60"
                    }
                },
                DAYS_90: {
                    sDefault: "90 days",
                    sClass: "cookie-duration-90d",
                    sTradKey: "misc.nb_days_long",
                    oTradArgs: {
                        "%nb%": "90"
                    }
                },
                DAYS_168: {
                    sDefault: "168 days",
                    sClass: "cookie-duration-168d",
                    sTradKey: "misc.nb_days_long",
                    oTradArgs: {
                        "%nb%": "168"
                    }
                },
                DAYS_179: {
                    sDefault: "179 days",
                    sClass: "cookie-duration-179d",
                    sTradKey: "misc.nb_days_long",
                    oTradArgs: {
                        "%nb%": "179"
                    }
                },
                MONTHS_3: {
                    sDefault: "3 months",
                    sClass: "cookie-duration-3m",
                    sTradKey: "misc.nb_months_long",
                    oTradArgs: {
                        "%nb%": "3"
                    }
                },
                YEAR_1: {
                    sDefault: "1 year",
                    sClass: "cookie-duration-1y",
                    sTradKey: "misc.one_year_long",
                    oTradArgs: {
                        "%nb%": "3"
                    }
                },
                YEARS_2: {
                    sDefault: "2 years",
                    sClass: "cookie-duration-2y",
                    sTradKey: "misc.nb_years_long",
                    oTradArgs: {
                        "%nb%": "2"
                    }
                },
                SESSION: {
                    sDefault: "session",
                    sClass: "cookie-duration-session",
                    sTradKey: "misc.user_session_short",
                    oTradArgs: {}
                }
            },
            L = {
                essential: {
                    title: "Essential Cookies",
                    titleTradKey: "legal.disclaimer.cookies_essential",
                    id: "essential",
                    name: "es",
                    desc: "These are cookies that we are required to use in order to operate our website. They include, for example, cookies that help with the website loading and display or enable you to log into secure areas of our website. We are allowed to use these cookies without your prior consent so they are always active.",
                    descTrad: {
                        fr: "Ce sont des cookies que nous sommes tenus d'utiliser pour faire fonctionner notre site Web. Ils comprennent, par exemple, des cookies qui facilitent le chargement et l'affichage du site Web ou vous permettent de vous connecter Ã  des zones sÃ©curisÃ©es de notre site Web. Nous sommes autorisÃ©s Ã  utiliser ces cookies sans votre consentement prÃ©alable afin qu'ils soient toujours actifs.",
                        cs: "Tyto soubory cookie a podobnÃ© technologie jsou vyÅ¾adovÃ¡ny k zajiÅ¡tÄ›nÃ­ funkÄ�nosti naÅ¡ich InternetovÃ½ch strÃ¡nek. PatÅ™Ã­ sem napÅ™. cookies, kterÃ© pÅ™ispÃ­vajÃ­ k nahrÃ¡vÃ¡nÃ­ a zobrazovanÃ­ InternetovÃ½ch strÃ¡nek, umoÅ¾ÅˆujÃ­ vÃ¡m pÅ™ihlÃ¡sit se do zabezpeÄ�enÃ½ch Ä�Ã¡stÃ­ naÅ¡ich InternetovÃ½ch strÃ¡nek nebo zvyÅ¡ujÃ­ bezpeÄ�nost InternetovÃ½ch strÃ¡nek. Tyto soubory cookie jsme oprÃ¡vnÄ›ni pouÅ¾Ã­vat bez vaÅ¡eho pÅ™edchozÃ­ho souhlasu. Pokud tyto cookies ve svÃ©m prohlÃ­Å¾eÄ�i zablokujete, nebudou vÃ¡m InternetovÃ© strÃ¡nky fungovat sprÃ¡vnÄ›."
                    },
                    datas: [{
                        title: "nb_thumbs_cols_XXX",
                        desc: "Legitimate interest / Proper display of the Website. / It keeps the number of column of thumbs.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / Affichage correct du site Web. / Il conserve le nombre de colonnes de la grille.",
                            cs: "OprÃ¡vnÄ›nÃ½ zÃ¡jem / SprÃ¡vnÃ© zobrazenÃ­ InternetovÃ½ch strÃ¡nek. / ZachovÃ¡vÃ¡ poÄ�et sloupcÅ¯ nÃ¡hledÅ¯."
                        },
                        duration: D.DAYS_90
                    }, {
                        title: "thumbloadstats_vthumbs (HTML5 Local Storage)",
                        titleTrad: {
                            fr: "thumbloadstats_vthumbs (Stockage Local HTML5)",
                            cs: "thumbloadstats_vthumbs (MÃ­stnÃ­ ÃºloÅ¾iÅ¡tÄ› HTML5)"
                        },
                        desc: "Legitimate interest / High availability and performance of the Website. / It measures the thumb loading speed.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / Haute disponibilitÃ© et performance du Site Web. / Il mesure la vitesse de chargement d'une miniature.",
                            cs: "OprÃ¡vnÄ›nÃ½ zÃ¡jem / VysokÃ¡ dostupnost a vÃ½konnost InternetovÃ½ch strÃ¡nek. / MÄ›Å™Ã­ rychlost nahrÃ¡vÃ¡nÃ­ nÃ¡hledÅ¯. /"
                        },
                        duration: D.DAYS_90
                    }, {
                        title: "static_cdn",
                        desc: "Legitimate interest / High availability and performance of the Website. / It allows us to know which content delivery network is used.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / Haute disponibilitÃ© et performance du Site Web. / Cela nous permet de savoir quel rÃ©seau de diffusion de contenu est utilisÃ©.",
                            cs: "OprÃ¡vnÄ›nÃ½ zÃ¡jem / VysokÃ¡ dostupnost a vÃ½konnost InternetovÃ½ch strÃ¡nek. / UmoÅ¾Åˆuje nÃ¡m zjistit, jakou sÃ­Å¥ pro doruÄ�ovÃ¡nÃ­ obsahu pouÅ¾Ã­vÃ¡te."
                        },
                        duration: D.DAYS_168
                    }, {
                        title: "html5_networkspeed",
                        desc: "Legitimate interest / High availability and performance of the Website. / It allows us to keep track of the user's internet speed.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / Haute disponibilitÃ© et performance du Site Web. / Cela nous permet de suivre la vitesse Internet de l'utilisateur.",
                            cs: "OprÃ¡vnÄ›nÃ½ zÃ¡jem / VysokÃ¡ dostupnost a vÃ½konnost InternetovÃ½ch strÃ¡nek. / UmoÅ¾Åˆuje nÃ¡m sledovat rychlost internetovÃ©ho pÅ™ipojenÃ­ uÅ¾ivatele."
                        },
                        duration: D.DAYS_30
                    }, {
                        title: "session_blih",
                        desc: "Legitimate interest / Increasing account security. / It keeps local login history for account security (trusted browser).",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / Augmenter la sÃ©curitÃ© du compte. / Il conserve l'historique de connexion local pour la sÃ©curitÃ© du compte (navigateur de confiance).",
                            cs: "OprÃ¡vnÄ›nÃ½ zÃ¡jem / ZvyÅ¡ovÃ¡nÃ­ bezpeÄ�nosti ÃºÄ�tu. / UklÃ¡dÃ¡ historii pÅ™ihlaÅ¡ovÃ¡nÃ­ za ÃºÄ�elem zajiÅ¡tÄ›nÃ­ bezpeÄ�nosti ÃºÄ�tu (dÅ¯vÄ›ryhodnÃ½ prohlÃ­Å¾eÄ�)."
                        },
                        duration: D.DAYS_60
                    }, {
                        title: "session_rem_XXX",
                        desc: "Legitimate interest / Increasing account security. / It is used to remember the users' browsers for double authentication (2FA).",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / Augmenter la sÃ©curitÃ© du compte. / Il est utilisÃ© pour mÃ©moriser les navigateurs des utilisateurs pour la double authentification (2FA).",
                            cs: "OprÃ¡vnÄ›nÃ½ zÃ¡jem / ZvyÅ¡ovÃ¡nÃ­ bezpeÄ�nosti ÃºÄ�tu. / PouÅ¾Ã­vÃ¡ se k zapamatovÃ¡nÃ­ prohlÃ­Å¾eÄ�Å¯ uÅ¾ivatelÅ¯ za ÃºÄ�elem dvojitÃ©ho ovÄ›Å™enÃ­ totoÅ¾nosti (2FA)."
                        },
                        duration: D.DAYS_30
                    }, {
                        title: "session_token",
                        desc: "Legitimate interest / Enabling login to user account. / It stores user logged information, such as the user login detail and some information about the account.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / Activation de la connexion au compte utilisateur. / Il stocke les informations enregistrÃ©es par l'utilisateur, telles que les dÃ©tails de connexion de l'utilisateur et certaines informations sur le compte.",
                            cs: "OprÃ¡vnÄ›nÃ½ zÃ¡jem / UmoÅ¾nÄ›nÃ­ pÅ™ihlÃ¡Å¡enÃ­ k ÃºÄ�tu. / UklÃ¡dÃ¡ Ãºdaje zapsanÃ© uÅ¾ivatelem, napÅ™. pÅ™ihlaÅ¡ovacÃ­ Ãºdaje uÅ¾ivatele a urÄ�itÃ© informace o ÃºÄ�tu."
                        },
                        duration: D.DAYS_30
                    }, {
                        title: "hide_xmsg",
                        desc: "Legitimate interest / Proper display of the Website. / It allows us to know whether the age confirmation window has already been displayed.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / Bon affichage du site Web.",
                            cs: "OprÃ¡vnÄ›nÃ½ zÃ¡jem / SprÃ¡vnÃ© zobrazenÃ­ InternetovÃ½ch strÃ¡nek. / UmoÅ¾Åˆuje nÃ¡m zjistit, zda jiÅ¾ bylo zobrazeno okno pro potvrzenÃ­ vÄ›ku."
                        },
                        duration: D.DAYS_15
                    }, {
                        title: "last_subs_check",
                        desc: "Legitimate interest / High availability and performance of the Website. / It avoids making too much queries to the server.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / Haute disponibilitÃ© et performance du site Web.",
                            cs: "OprÃ¡vnÄ›nÃ½ zÃ¡jem / VysokÃ¡ dostupnost a vÃ½konnost InternetovÃ½ch strÃ¡nek. / ZabraÅˆuje pÅ™Ã­liÅ¡nÃ©mu poÄ�tu dotazÅ¯ na server."
                        },
                        duration: D.MINS_5
                    }, {
                        title: "chat_deco",
                        desc: "Legitimate interest / Proper display of the Website. / It allows us to know whether the user is logout from chat to avoid making request in chat.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / Bon affichage du site Web.",
                            cs: "OprÃ¡vnÄ›nÃ½ zÃ¡jem / SprÃ¡vnÃ© zobrazenÃ­ InternetovÃ½ch strÃ¡nek. / UmoÅ¾Åˆuje nÃ¡m zjistit, zda se uÅ¾ivatel odhlÃ¡sil z chatu, aby se zabrÃ¡nilo zadÃ¡vÃ¡nÃ­ poÅ¾adavkÅ¯ v chatu."
                        },
                        duration: D.MINS_10
                    }, {
                        title: "disclaimer_vpn_display",
                        desc: "Legitimate interest / Proper display of the Website. / Tell if you already close the disclaimer / It allows us to know whether the user has closed the disclaimer.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / Bon affichage du site Web. / Indique si vous avez dÃ©jÃ  fermÃ© l'avertissement de contenu adulte.",
                            cs: "OprÃ¡vnÄ›nÃ½ zÃ¡jem / SprÃ¡vnÃ© zobrazenÃ­ InternetovÃ½ch strÃ¡nek. / ZaznamenÃ¡vÃ¡, zda jste zavÅ™eli okno upozornÄ›nÃ­. / UmoÅ¾Åˆuje nÃ¡m zjistit, zda uÅ¾ivatel zavÅ™el disclaimer."
                        },
                        duration: D.DAYS_90
                    }, {
                        title: "chat_data_c",
                        desc: "Legitimate interest / Proper display of the Website. / Store your chat private key for encryption",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / Bon affichage du site Web. / Stocke la clÃ© privÃ©e de votre chat pour le cryptage.",
                            cs: "OprÃ¡vnÄ›nÃ½ zÃ¡jem / SprÃ¡vnÃ© zobrazenÃ­ InternetovÃ½ch strÃ¡nek. / UklÃ¡dÃ¡ soukromÃ½ klÃ­Ä� chatu pro Å¡ifrovÃ¡nÃ­."
                        },
                        duration: D.DAYS_168
                    }, {
                        title: "xv_nbview",
                        desc: "Legitimate interest / Offering more relevant content. / It allows us to know how many videos has been played for the last 8 hours.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / Bon affichage du site Web.",
                            cs: "OprÃ¡vnÄ›nÃ½ zÃ¡jem / SprÃ¡vnÃ© zobrazenÃ­ InternetovÃ½ch strÃ¡nek. / UmoÅ¾Åˆuje nÃ¡m zjistit, kolik videÃ­ bylo pÅ™ehrÃ¡no za poslednÃ­ch 8 hodin."
                        },
                        duration: D.HOURS_16
                    }, {
                        title: "wgvid_user_msg",
                        desc: "Legitimate interest / Proper display of the Website. / It allows us to know whether the user has already read a notification.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / Bon affichage du site Web.",
                            cs: "OprÃ¡vnÄ›nÃ½ zÃ¡jem / SprÃ¡vnÃ© zobrazenÃ­ InternetovÃ½ch strÃ¡nek. / UmoÅ¾Åˆuje nÃ¡m zjistit, zda uÅ¾ivatel Ä�etl oznÃ¡menÃ­."
                        },
                        duration: D.DAYS_90
                    }, {
                        title: "zone-cap-{idzone}",
                        desc: "Legitimate interest / Proper display of the Website / Limiting the maximum number of times a visitor can see an ad zone within a certain time period.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / Bon affichage du site Web. / Limite le nombre maximum de fois qu'un visiteur peut voir une zone publicitaire au cours d'une certaine pÃ©riode de temps.",
                            cs: "OprÃ¡vnÄ›nÃ½ zÃ¡jem / SprÃ¡vnÃ© zobrazenÃ­ InternetovÃ½ch strÃ¡nek. / OmezenÃ­ maximÃ¡lnÃ­ho poÄ�tu zobrazenÃ­ reklamnÃ­ zÃ³ny nÃ¡vÅ¡tÄ›vnÃ­kem bÄ›hem urÄ�itÃ©ho Ä�asovÃ©ho obdobÃ­."
                        },
                        duration: D.HOURS_24
                    }, {
                        title: "dscld",
                        desc: "Legitimate interest / Proper display of the Website. / Tell if you already close the disclaimer / It allows us to know whether the user has closed the disclaimer.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / Bon affichage du site Web. / Indique si vous avez dÃ©jÃ  fermÃ© l'avertissement de contenu adulte.",
                            cs: "OprÃ¡vnÄ›nÃ½ zÃ¡jem / SprÃ¡vnÃ© zobrazenÃ­ InternetovÃ½ch strÃ¡nek. / ZaznamenÃ¡vÃ¡, zda jste zavÅ™eli okno upozornÄ›nÃ­. / UmoÅ¾Åˆuje nÃ¡m zjistit, zda uÅ¾ivatel zavÅ™el disclaimer."
                        },
                        duration: D.DAYS_90
                    }, {
                        title: "cksd",
                        desc: "Legitimate interest / Proper display of the Website. / Remember user consent / It allows us to know what choices have been made regarding cookie consent.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / Bon affichage du site Web. / Indique le choix que vous avez fait au sujet des cookies.",
                            cs: "OprÃ¡vnÄ›nÃ½ zÃ¡jem / SprÃ¡vnÃ© zobrazenÃ­ InternetovÃ½ch strÃ¡nek. / UmoÅ¾Åˆuje nÃ¡m zjistit, zda uÅ¾ivatel souhlasil s pouÅ¾Ã­vÃ¡nÃ­m cookies"
                        },
                        duration: D.DAYS_90
                    }, {
                        title: "XVUPLOADSESSION",
                        desc: "Legitimate interest / Proper display of the Website. / It allows logged users to be able to upload videos.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / Affichage correct du Site Internet. / Il permet aux utilisateurs connectÃ©s de pouvoir uploader des vidÃ©os."
                        },
                        duration: D.SESSION
                    }, {
                        title: "io",
                        desc: "Legitimate interest / Proper display of the Website. / For logged users, it allows us to maintain the connection to chat servers.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / Affichage correct du Site Internet. / Pour les utilisateurs connectÃ©s, cela nous permet de maintenir la connexion aux serveurs de chat."
                        },
                        duration: D.SESSION
                    }, {
                        title: "_GRECAPTCHA",
                        desc: "Legitimate interest / Security / Google Recaptcha service sets this cookie to identify bots to protect the website against malicious spam attacks.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / SÃ©curitÃ© / Le service Google Recaptcha dÃ©finit ce cookie pour identifier les robots afin de protÃ©ger le site Web contre les attaques de spam malveillantes."
                        },
                        duration: D.DAYS_179
                    }, {
                        title: "Rc::a",
                        desc: "Legitimate interest / Security / Google Recaptcha service sets this cookie to identify bots to protect the website against malicious spam attacks.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / SÃ©curitÃ© / Le service Google Recaptcha dÃ©finit ce cookie pour identifier les robots afin de protÃ©ger le site Web contre les attaques de spam malveillantes."
                        },
                        duration: D.SESSION
                    }, {
                        title: "Rc::b",
                        desc: "Legitimate interest / Security / Google Recaptcha service sets this cookie to identify bots to protect the website against malicious spam attacks.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / SÃ©curitÃ© / Le service Google Recaptcha dÃ©finit ce cookie pour identifier les robots afin de protÃ©ger le site Web contre les attaques de spam malveillantes."
                        },
                        duration: D.SESSION
                    }, {
                        title: "Rc::c",
                        desc: "Legitimate interest / Security / Google Recaptcha service sets this cookie to identify bots to protect the website against malicious spam attacks.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / SÃ©curitÃ© / Le service Google Recaptcha dÃ©finit ce cookie pour identifier les robots afin de protÃ©ger le site Web contre les attaques de spam malveillantes."
                        },
                        duration: D.SESSION
                    }, {
                        title: "Rc::f",
                        desc: "Legitimate interest / Security / Google Recaptcha service sets this cookie to identify bots to protect the website against malicious spam attacks.",
                        descTrad: {
                            fr: "IntÃ©rÃªt lÃ©gitime / SÃ©curitÃ© / Le service Google Recaptcha dÃ©finit ce cookie pour identifier les robots afin de protÃ©ger le site Web contre les attaques de spam malveillantes."
                        },
                        duration: D.SESSION
                    }]
                }
            };
        L[w.S_F_COOKIES_FUNCTIONALITY] = {
            title: "Functionality Cookies",
            titleTradKey: "legal.disclaimer.cookies_functionality",
            id: "functionality",
            name: w.S_F_COOKIES_FUNCTIONALITY,
            desc: "These cookies help us to personalise and improve your experience when browsing our Website. For example, they help us to remember your preferences (video player preferences, language and region selection etc.). We will use this information to make our Website more relevant to your interests and more user friendly. ",
            descTrad: {
                fr: "Ces cookies nous aident Ã  personnaliser et Ã  amÃ©liorer votre expÃ©rience lorsque vous naviguez sur notre site Web. Par exemple, ils nous aident Ã  mÃ©moriser vos prÃ©fÃ©rences afin que vous n'ayez pas Ã  ressaisir les informations que vous avez dÃ©jÃ  fournies (informations de connexion, prÃ©fÃ©rences du lecteur vidÃ©o, sÃ©lection de la langue et de la rÃ©gion, etc.). Nous utiliserons ces informations pour rendre notre site Web plus adaptÃ© Ã  vos intÃ©rÃªts, plus convivial et plus sÃ»r.",
                cs: "Tyto soubory cookie slouÅ¾Ã­ k tomu, abychom mohli pÅ™izpÅ¯sobit a zkvalitnit vaÅ¡i uÅ¾ivatelskou zkuÅ¡enost pÅ™i prohlÃ­Å¾enÃ­ naÅ¡ich InternetovÃ½ch strÃ¡nek. S jejich pÅ™ispÄ›nÃ­m jsme napÅ™. schopni si zapamatovat vaÅ¡e preference (nastavenÃ­ video pÅ™ehrÃ¡vaÄ�e, vÃ½bÄ›r jazyka a regionu apod.). Tyto Ãºdaje pouÅ¾Ã­vÃ¡me k tomu, abychom naÅ¡e InternetovÃ© strÃ¡nky vÃ­ce pÅ™izpÅ¯sobili vaÅ¡im zÃ¡jmÅ¯m a aby byly uÅ¾ivatelsky pÅ™Ã­vÄ›tivÄ›jÅ¡Ã­. "
            },
            datas: [{
                id: "last_views",
                title: "last_views",
                desc: "Consent / Offering more relevant content. / It allows us to suggest similar videos to those previously watched by a user.",
                descTrad: {
                    fr: "Consentement / Offrir un contenu plus pertinent. / Il permet de proposer des vidÃ©os similaires Ã  celles visionnÃ©es prÃ©cÃ©demment par un internaute.",
                    cs: "Souhlas / NabÃ­dka relevantnÄ›jÅ¡Ã­ho obsahu. / UmoÅ¾Åˆuje nÃ¡m, abychom uÅ¾ivateli nabÃ­zeli videa podobnÃ¡ tÄ›m, kterÃ© sledoval dÅ™Ã­ve."
                },
                duration: D.MONTHS_3
            }, {
                id: "session_ath",
                title: "session_ath",
                desc: "Consent / Optimizing the Website display. / It remembers whether the user prefers to browse the website in light or dark mode.",
                descTrad: {
                    fr: "Consentement / Optimisation de l'affichage du site Web. / Il se souvient si l'utilisateur prÃ©fÃ¨re naviguer sur le site Web en mode clair ou sombre.",
                    cs: "Souhlas / Optimalizace zobrazenÃ­ InternetovÃ½ch strÃ¡nek. / Zapamatuje si, jestli uÅ¾ivatel dÃ¡vÃ¡ pÅ™ednost prohlÃ­Å¾enÃ­ internetovÃ½ch strÃ¡nek ve svÄ›tlÃ©m Ä�i tmavÃ©m reÅ¾imu."
                },
                duration: D.DAYS_90
            }, {
                id: "user_theme_fav",
                title: "user_theme_fav (Stockage Local HTML5)",
                bIsLocalStorage: !0,
                titleTrad: {
                    fr: "user_theme_fav (Stockage Local HTML5)",
                    cs: "user_theme_fav (MÃ­stnÃ­ ÃºloÅ¾iÅ¡tÄ› HTML5)"
                },
                desc: "Consent / Optimizing the Website display. / It remembers whether the user prefers to browse the website in light or dark mode.",
                descTrad: {
                    fr: "Consentement / Optimisation de l'affichage du site Web. / Il se souvient si l'utilisateur prÃ©fÃ¨re naviguer sur le site Web en mode clair ou sombre.",
                    cs: "Souhlas / Optimalizace zobrazenÃ­ InternetovÃ½ch strÃ¡nek. / Zapamatuje si, jestli uÅ¾ivatel dÃ¡vÃ¡ pÅ™ednost prohlÃ­Å¾enÃ­ internetovÃ½ch strÃ¡nek ve svÄ›tlÃ©m Ä�i tmavÃ©m reÅ¾imu."
                },
                duration: D.DAYS_90
            }, {
                id: "pending_thumb",
                title: "pending_thumb",
                desc: "Consent / Offering more relevant content. /",
                descTrad: {
                    fr: "Consentement / Offrir un contenu plus pertinent.",
                    cs: "Souhlas / NabÃ­dka relevantnÄ›jÅ¡Ã­ho obsahu."
                },
                duration: D.HOURS_3
            }]
        }, L[w.S_F_COOKIES_PLAYER_PREFERENCES] = {
            title: "Player Preferences Cookies",
            titleTradKey: "legal.disclaimer.cookies_player",
            id: "player_preferences",
            name: w.S_F_COOKIES_PLAYER_PREFERENCES,
            desc: "These cookies allow us to remember your preferences when using the video player. For example, they help us to remember your settings (autoplay, quality, volume etc.).",
            descTrad: {
                fr: "Ces cookies nous permettent de sauvegarder vos prÃ©fÃ©rences lors de l'utilisation du lecteur vidÃ©o. Par exemple, ils nous aident Ã  mÃ©moriser vos rÃ©glages (lecture automatique, qualitÃ©, volume etc.).",
                cs: "Tyto cookies nÃ¡m umoÅ¾ÅˆujÃ­ pamatovat si vaÅ¡e preference pÅ™i pouÅ¾Ã­vÃ¡nÃ­ video pÅ™ehrÃ¡vaÄ�e. NapÅ™Ã­klad nÃ¡m pomÃ¡hajÃ­ zapamatovat si vaÅ¡e nastavenÃ­ (automatickÃ© pÅ™ehrÃ¡vÃ¡nÃ­, kvalitu, hlasitost atd.)."
            },
            datas: [{
                id: "html5_pref",
                title: "html5_pref",
                desc: "Consent / Better video playback. / It allows us to apply the users' preferences in using video player.",
                descTrad: {
                    fr: "Consentement / Meilleure lecture vidÃ©o. / Cela nous permet d'appliquer les prÃ©fÃ©rences des utilisateurs lors de l'utilisation du lecteur vidÃ©o.",
                    cs: "Souhlas / LepÅ¡Ã­ pÅ™ehrÃ¡vÃ¡nÃ­ videÃ­. / UmoÅ¾Åˆuje nÃ¡m pouÅ¾Ã­t preference uÅ¾ivatele v oblasti video pÅ™ehrÃ¡vaÄ�Å¯."
                },
                duration: D.DAYS_30
            }]
        }, L[w.S_F_COOKIES_ADVERTISING] = {
            title: "Advertising Cookies",
            titleTradKey: "legal.disclaimer.cookies_advertising",
            id: "advertising",
            name: w.S_F_COOKIES_ADVERTISING,
            desc: "These third-party cookies help us display ads that are more related to your interests and the content you're viewing. They assist us in delivering more relevant promotions. For example, they keep track of the ads you've previously seen and prevent displaying already clicked campaigns.",
            datas: [{
                title: "__uvt",
                desc: "Consent / To prevent fraud by quantifying unique users based on impressions and clicks, and to ensure interactions are genuine.",
                duration: D.YEARS_2
            }, {
                title: "c-{idcampaign}-{idvariation}",
                desc: "Consent / Tracking Clicks and avoiding displaying already clicked campaigns.",
                duration: D.HOURS_24
            }, {
                title: "goals",
                desc: "Consent / Perform retargeting.",
                duration: D.YEAR_1
            }, {
                title: "c-tag",
                desc: "Consent / Performing conversion tracking.",
                duration: D.DAYS_90
            }, {
                title: "impressions",
                desc: "Consent / Frequency capping: Limiting the maximum number of times a user can see an ad within a certain time period.",
                duration: D.HOURS_24
            }]
        };
        var j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            M = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            g = g,
            z = h,
            f = f,
            m = m,
            R = R,
            E = E,
            P = /^[a-z]{2}$/,
            B = void 0,
            F = function() {
                function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    v(this, e), this.maxVendorId = 0, this.created = new Date, this.lastUpdated = new Date, this.version = 1, this.vendorList = null, this.vendorListVersion = null, this.cmpId = null, this.cmpVersion = null, this.consentScreen = null, this.consentLanguage = null, this.allowedPurposeIds = [], this.allowedVendorIds = [], t && (B = t, Object.assign(this, R(t)))
                }
                return M(e, [{
                    key: "getConsentString",
                    value: function() {
                        var e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0],
                            t = void 0;
                        if (B && !e) t = B;
                        else {
                            if (!this.vendorList) throw new Error("ConsentString - A vendor list is required to encode a consent string");
                            !0 === e && (this.lastUpdated = new Date), t = g({
                                version: this.getVersion(),
                                vendorList: this.vendorList,
                                allowedPurposeIds: this.allowedPurposeIds,
                                allowedVendorIds: this.allowedVendorIds,
                                created: this.created,
                                lastUpdated: this.lastUpdated,
                                cmpId: this.cmpId,
                                cmpVersion: this.cmpVersion,
                                consentScreen: this.consentScreen,
                                consentLanguage: this.consentLanguage,
                                vendorListVersion: this.vendorListVersion
                            }), B = t
                        }
                        return t
                    }
                }, {
                    key: "getLastUpdated",
                    value: function() {
                        return this.lastUpdated
                    }
                }, {
                    key: "setLastUpdated",
                    value: function() {
                        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                        B = "", this.lastUpdated = e ? new Date(e) : new Date
                    }
                }, {
                    key: "getCreated",
                    value: function() {
                        return this.created
                    }
                }, {
                    key: "setCreated",
                    value: function() {
                        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                        B = "", this.created = e ? new Date(e) : new Date
                    }
                }, {
                    key: "getMaxVendorId",
                    value: function() {
                        return this.maxVendorId || this.vendorList && (this.maxVendorId = z(this.vendorList.vendors)), this.maxVendorId
                    }
                }, {
                    key: "getParsedVendorConsents",
                    value: function() {
                        return f(z(this.vendorList.vendors), this.allowedVendorIds)
                    }
                }, {
                    key: "getParsedPurposeConsents",
                    value: function() {
                        return m(this.vendorList.purposes, this.allowedPurposeIds)
                    }
                }, {
                    key: "getMetadataString",
                    value: function() {
                        return g({
                            version: this.getVersion(),
                            created: this.created,
                            lastUpdated: this.lastUpdated,
                            cmpId: this.cmpId,
                            cmpVersion: this.cmpVersion,
                            consentScreen: this.consentScreen,
                            vendorListVersion: this.vendorListVersion
                        })
                    }
                }, {
                    key: "getVersion",
                    value: function() {
                        return this.version
                    }
                }, {
                    key: "getVendorListVersion",
                    value: function() {
                        return this.vendorListVersion
                    }
                }, {
                    key: "setGlobalVendorList",
                    value: function(e) {
                        if ("object" !== (void 0 === e ? "undefined" : j(e))) throw new Error("ConsentString - You must provide an object when setting the global vendor list");
                        if (!e.vendorListVersion || !Array.isArray(e.purposes) || !Array.isArray(e.vendors)) throw new Error("ConsentString - The provided vendor list does not respect the schema from the IAB EUâ€™s GDPR Consent and Transparency Framework");
                        this.vendorList && this.vendorListVersion === e.vendorListVersion || (B = "", this.vendorList = {
                            vendorListVersion: e.vendorListVersion,
                            lastUpdated: e.lastUpdated,
                            purposes: e.purposes,
                            features: e.features,
                            vendors: e.vendors.slice(0).sort(function(e, t) {
                                return e.id < t.id ? -1 : 1
                            })
                        }, this.vendorListVersion = e.vendorListVersion)
                    }
                }, {
                    key: "getGlobalVendorList",
                    value: function() {
                        return this.vendorList
                    }
                }, {
                    key: "setCmpId",
                    value: function(e) {
                        e !== this.cmpId && (B = "", this.cmpId = e)
                    }
                }, {
                    key: "getCmpId",
                    value: function() {
                        return this.cmpId
                    }
                }, {
                    key: "setCmpVersion",
                    value: function(e) {
                        e !== this.cmpVersion && (B = "", this.cmpVersion = e)
                    }
                }, {
                    key: "getCmpVersion",
                    value: function() {
                        return this.cmpVersion
                    }
                }, {
                    key: "setConsentScreen",
                    value: function(e) {
                        e !== this.consentScreen && (B = "", this.consentScreen = e)
                    }
                }, {
                    key: "getConsentScreen",
                    value: function() {
                        return this.consentScreen
                    }
                }, {
                    key: "setConsentLanguage",
                    value: function(e) {
                        if (!1 === P.test(e)) throw new Error("ConsentString - The consent language must be a two-letter ISO639-1 code (en, fr, de, etc.)");
                        e !== this.consentLanguage && (B = "", this.consentLanguage = e)
                    }
                }, {
                    key: "getConsentLanguage",
                    value: function() {
                        return this.consentLanguage
                    }
                }, {
                    key: "setPurposesAllowed",
                    value: function(e) {
                        B = "", this.allowedPurposeIds = e
                    }
                }, {
                    key: "getPurposesAllowed",
                    value: function() {
                        return this.allowedPurposeIds
                    }
                }, {
                    key: "setPurposeAllowed",
                    value: function(e, t) {
                        var n = this.allowedPurposeIds.indexOf(e);
                        B = "", !0 === t ? -1 === n && this.allowedPurposeIds.push(e) : !1 === t && -1 !== n && this.allowedPurposeIds.splice(n, 1)
                    }
                }, {
                    key: "isPurposeAllowed",
                    value: function(e) {
                        return -1 !== this.allowedPurposeIds.indexOf(e)
                    }
                }, {
                    key: "setVendorsAllowed",
                    value: function(e) {
                        B = "", this.allowedVendorIds = e
                    }
                }, {
                    key: "getVendorsAllowed",
                    value: function() {
                        return this.allowedVendorIds
                    }
                }, {
                    key: "setVendorAllowed",
                    value: function(e, t) {
                        var n = this.allowedVendorIds.indexOf(e);
                        B = "", !0 === t ? -1 === n && this.allowedVendorIds.push(e) : !1 === t && -1 !== n && this.allowedVendorIds.splice(n, 1)
                    }
                }, {
                    key: "isVendorAllowed",
                    value: function(e) {
                        return -1 !== this.allowedVendorIds.indexOf(e)
                    }
                }], [{
                    key: "decodeMetadataString",
                    value: function(e) {
                        var t = R(e),
                            n = {};
                        return E[t.version].metadataFields.forEach(function(e) {
                            n[e] = t[e]
                        }), n
                    }
                }]), e
            }(),
            V = function() {
                if ("undefined" == typeof navigator || "string" != typeof navigator.userAgent) return !1;
                var e = navigator.userAgent;
                return e.indexOf("Edge/") >= 0 ? "edge" : (e = e.toLowerCase(), e.indexOf("trident/7.0;") >= 0 && e.indexOf("rv:11.0") >= 0 ? "ie10_11" : e.indexOf("msie 10.0;") >= 0 ? "ie10_11" : !!e.match(/msie \d\.0;/) && "old_ie")
            },
            H = function() {
                var e = V();
                return "ie10_11" === e || "edge" === e ? '<style rel="stylesheet">\n.img-blured img, .img-blured video{\nvisibility:hidden;\n}\n.img-blured .thumb-block .microthumb .microthumb-thumb,.img-blured .quickies__list-elem{\nbackground:#000;\n}\n.img-blured img.no-blur{\nvisibility:inherit;\n}\n</style>\n' : "old_ie" === e ? "<style rel=\"stylesheet\">\n.img-blured img, .img-blured video{\nfilter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='30');\n}\n.img-blured .thumb-block .microthumb .microthumb-thumb,.img-blured .quickies__list-elem{\nbackground:#000;\n}\n.img-blured img.no-blur{\nfilter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='0');\n}\n</style>\n" : '<svg height="0" xmlns="http://www.w3.org/2000/svg" style="position:absolute"><filter id="svgBlur" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur in="SourceGraphic" stdDeviation="10"/></filter></svg>\n<style rel="stylesheet">.img-blured img,.img-blured video,.img-blured .exo-native-widget-item-image,.img-blured .thumb-block .microthumb .microthumb-thumb,.img-blured .quickies__list-elem{\n-webkit-filter:blur(10px);\n-moz-filter:blur(10px);\n-ms-filter:blur(10px);\n-o-filter:blur(10px);\nfilter:url(\'#svgBlur\');\nfilter:blur(10px);\n}\n.img-blured img.no-blur{\n-webkit-filter:blur(0);\n-moz-filter:blur(0);\n-ms-filter:blur(0);\n-o-filter:blur(0);\nfilter:none;\nfilter:blur(0);\n}\n</style>\n'
            },
            q = function(e, t) {
                var n = "color:#000;background:#fff;box-shadow:0 0 20px black;",
                    i = "500px",
                    o = "";
                return t ? n = "color:#333;background:#98ceee;box-shadow:0 0 20px black;" : e.toLowerCase().indexOf("xnxx") > -1 ? (n = "color:#fff;background:#000090;box-shadow:0 0 20px black;", i = "600px", o = "#disclaimer-over18,#disclaimer-cookies{color:#8aa4d9}") : e.toLowerCase().indexOf("pornorama") > -1 ? n = "border:3px solid #000;color:#000;background:#FFCA2B" : (e.toLowerCase().indexOf("xvideos") > -1 || e.toLowerCase().indexOf("xv") > -1) && (o = "#disclaimer-over18,#disclaimer-cookies{color:#777}"), ".disclaimer-opened, .disclaimer-opened body {overflow: hidden;position: relative;height: 100%;}#disclaimer_background{position:absolute;display:block;z-index:80000;left:0;top:0;bottom:0;right:0;width:100%;height:100%;min-height:100%;overflow:auto;background:transparent;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center}#disclaimer_message{width:" + i + ";max-width:96%;font-size:15px;line-height:22px;text-align:center;margin:auto;" + n + ";}" + o
            },
            U = function() {
                if (xv.dom.scrollToTop(), x) return !1;
                x = setInterval(function() {
                    xv.dom.scrollToTop()
                }, 2e3)
            },
            Y = function() {
                if (!x) return !1;
                clearInterval(x), x = !1
            },
            W = function(e, t) {
                var n = xv.conf.dyn.disfeats.indexOf(e),
                    i = xv.conf.dyn.enafeats.indexOf(e);
                t ? (-1 !== n && xv.conf.dyn.disfeats.splice(n, 1), -1 === i && xv.conf.dyn.enafeats.push(e)) : (-1 === n && xv.conf.dyn.disfeats.push(e), -1 !== i && xv.conf.dyn.enafeats.splice(i, 1))
            },
            G = function(e) {
                var t = L[e];
                if (void 0 !== t)
                    for (var n in t.datas) {
                        var i = t.datas[n];
                        "undefined" != typeof i.id && (!0 === i.bIsLocalStorage ? window.xv.storage && window.xv.storage.remove(i.id) : window.xv.cookies.removeLocal(i.id))
                    }
            },
            K = function(e, t) {
                W(e, t), t || G(e)
            },
            $ = function(e, t, n) {
                if (b.bAdvertisingCookieUpdated || e !== w.S_F_COOKIES_ADVERTISING || b.callAdvertisingCallback(t, n), b.bFeatureIsToggling) return void b.setPendingFeatureToggle(e, t, n);
                b.bFeatureIsToggling = !0;
                var i = function() {
                    b.bFeatureIsToggling = !1, b.callNextPendingFeatureToggle()
                };
                if (w.IS_ENABLED(e) === t) return void i();
                C("/account/feature-" + (t ? "enabled" : "disabled"), {
                    featureid: e
                }, function(n) {
                    n && n.result && K(e, t), i()
                }, function() {
                    b.bFeatureIsToggling = !1
                })
            };
        b.getLang = function() {
            var e = "en";
            return "object" == typeof xv && xv.conf && xv.conf.dyn && xv.conf.dyn.locale && (e = xv.conf.dyn.locale), e
        }, b.display = function(e, t, n, i, o) {
            if (S(), i || xv.utils.isFirstPage()) {
                this.sSiteName = e, this.sCookieManageType = "string" == typeof t ? t : !0 === t ? b.COOKIE_MANAGE_TYPE.INTEGRATED : b.COOKIE_MANAGE_TYPE.NONE, this.bIsOpen = !0, this.bDisclaimerTriggered = t !== b.COOKIE_MANAGE_TYPE.NEW_ONLY, this.bCookieBannerTriggered = !!t && t !== b.COOKIE_MANAGE_TYPE.NONE, this.bIsAgeWarning = this.sCookieManageType === b.COOKIE_MANAGE_TYPE.SEPARATED || this.sCookieManageType === b.COOKIE_MANAGE_TYPE.INTEGRATED || this.sCookieManageType === b.COOKIE_MANAGE_TYPE.NONE, this.bIsCookieManageOnly = this.sCookieManageType === b.COOKIE_MANAGE_TYPE.NEW_ONLY || this.sCookieManageType === b.COOKIE_MANAGE_TYPE.UPDATE_ONLY, this.bIsCookieManageNew = this.sCookieManageType !== b.COOKIE_MANAGE_TYPE.UPDATE_ONLY, this.bHasCookieManage = this.bIsCookieManageOnly || this.sCookieManageType === b.COOKIE_MANAGE_TYPE.INTEGRATED, this.bHasCookieManageInProcess = this.bIsCookieManageOnly || this.sCookieManageType === b.COOKIE_MANAGE_TYPE.INTEGRATED || this.sCookieManageType === b.COOKIE_MANAGE_TYPE.SEPARATED;
                var s = "color: blue;text-decoration: underline;text-transform: uppercase;",
                    a = (window.xv.conf.domains.info, window.xv.conf.domains.info + "/legal/cookiepolicy/"),
                    r = '<p style="font-size:26px;font-weight:bold;color:#fff">' + e.replace("www.", "").toUpperCase() + "</p>",
                    d = "",
                    l = "#de2600",
                    c = "height:60px;line-height:60px;background:#161617;position:relative;",
                    u = "height:40px;line-height:40px;background:none;border:0;position:absolute;top:0;right:0;width:40px;text-align:center;",
                    p = l,
                    m = "background:" + p + ";border-color:#C52200;color:#FFFFFF",
                    f = "background:#C52200;!important;",
                    h = "",
                    g = "#333333",
                    v = 13,
                    x = "#AAAAAA",
                    k = "#EEEEEE",
                    E = "#CCCCCC",
                    C = "#333333",
                    T = "silver",
                    j = "#FFFFFF",
                    M = e.toLowerCase().indexOf("xv") > -1,
                    z = !M && e.toLowerCase().indexOf("xnxx") > -1,
                    R = !M && !z && e.toLowerCase().indexOf("pornorama") > -1,
                    P = !M && !z && !R && e.toLowerCase().indexOf("elitmovie") > -1,
                    B = M && (e.toLowerCase().indexOf("red") > -1 || e.toLowerCase().indexOf("premium") > -1),
                    F = z && (e.toLowerCase().indexOf("gold") > -1 || e.toLowerCase().indexOf("premium") > -1),
                    V = B || F || P;
                this.bHasCookieManage && (d = this.bIsCookieManageNew ? "<button id='disclaimer-top-close-btn' onclick='window.xv.disclaimer.setFeatures(\"close\");'><span class='icon-f icf-close-thin'></span></button>" : "<button id='disclaimer-top-close-btn' onclick='window.xv.disclaimer.close_pop();'><span class='icon-f icf-close-thin'></span></button>"), M && (r = '<img class="no-blur" src="' + window.xv.conf.domains["static"] + '/v3/img/skins/default/logo/xvideos.white.png" alt="' + e + '" />', h = "background-color:#e6e6e6;;border-color:#ccc;color:#000;", u += "color:#fff;"), B && (r = '<img class="no-blur" src="' + window.xv.conf.domains["static"] + '/v3/img/skins/default/logo/xvideosred.white.png" alt="' + e + '" />'), P && (r = '<img class="no-blur" src="' + window.xv.conf.domains["static"] + '/v3/img/skins/elitmovie/premium/elitmovie.logo.png" alt="' + e + '" style="height:60px;" />', u += "color:#fff;"), z && (r = '<img class="no-blur" src="' + window.xv.conf.domains["static"] + '/v3/img/skins/xnxx/logo/xnxx.png" style="height:30px" alt="' + e + '" />', O = "color:#fff", s = "color: yellow;text-decoration: underline;text-transform: uppercase;", l = "#ff0", E = "#6792cd", C = "#000024", T = "#5c99fe", j = "#000090", c = "padding-top:15px;background:none;position:relative;", u += "color:#fff;", p = "#004be8", m = "background-color:" + p + "!important;border-color:#286fff!important;color:#fff!important;border-width:2px;border-radius:4px;", f = "background-color:#0138d3!important;", h = "background-color:#000090;border-color:#004be8;color:#FFFFFF;", g = "#FFFFFF", x = "#000048", k = "#000066"), F && (r = '<img class="no-blur" src="' + window.xv.conf.domains["static"] + '/v3/img/skins/xnxx/gold/xnxx.gold.logo.png" alt="' + e + '" />'), R && (window.xv.conf.domains.info + "/privacy_policy", O = "color:#000;text-decoration:underline;", l = "#0f4bff", c = "height:60px;line-height:60px;position:relative;", u += "color:#000;", r = '<p style="font-size:26px;font-weight:bold">' + e.replace("www.", "").toUpperCase() + "</p>", p = "#0F4BFF", m = "background-color:" + p + ";border-color:#0F4BFF;color:#fff", f = "background-color:#0138d3;", v = 10, x = "#FFA92B", k = "#FFBE00", E = "#FFA92B");
                var Y = '<a href="' + a + '" target="_blank" style="' + O + '" onclick="window.xv.disclaimer.leave_site(event)">',
                    W = e.replace(".com", "").replace("www.", "") + " uses cookies and similar technologies to enable the basic functioning of the website as well as personalisation and analysis. For more information about cookies, please read our " + Y + "Cookie Policy</a>. If you click â€œaccept all cookiesâ€�, you give us your express consent to use cookies for all the purposes mentioned. You can also choose your own settings and click â€œsave preferencesâ€�.",
                    G = z ? 'ATTENTION! This site contains <span style="color:' + l + '">adult content</span>!' : 'WARNING This site is for <span style="color:' + l + '">adults only</span>!',
                    K = "By entering this website, I acknowledge that I am 18 years old or older and agree to the Terms of Service, which are available " + N(window.xv.conf.domains.info + "/legal/tos", "here") + ".",
                    $ = "I am 18 years old or older",
                    X = z ? "If you have children, use parental controls. Read here." : "Parents read this to protect your kids.",
                    J = "always active",
                    Z = "",
                    Q = "",
                    ee = "",
                    te = "",
                    ne = "",
                    ie = "",
                    oe = "",
                    se = "",
                    ae = "",
                    re = JSON.parse(JSON.stringify(L));
                if (re[w.S_F_COOKIES_FUNCTIONALITY].checked = this.sCookieManageType === b.COOKIE_MANAGE_TYPE.UPDATE_ONLY && w.IS_ENABLED(w.S_F_COOKIES_FUNCTIONALITY), re[w.S_F_COOKIES_PLAYER_PREFERENCES].checked = this.sCookieManageType === b.COOKIE_MANAGE_TYPE.UPDATE_ONLY && w.IS_ENABLED(w.S_F_COOKIES_PLAYER_PREFERENCES), re[w.S_F_COOKIES_ADVERTISING].checked = this.sCookieManageType === b.COOKIE_MANAGE_TYPE.UPDATE_ONLY && w.IS_ENABLED(w.S_F_COOKIES_ADVERTISING), "fr" === (ge = this.getLang()) || "cs" === ge) {
                    var de = function(e) {
                        return "object" == typeof e.descTrad && "string" == typeof e.descTrad[ge] && (e.desc = e.descTrad[ge]), "object" == typeof e.titleTrad && "string" == typeof e.titleTrad[ge] && (e.title = e.titleTrad[ge]), e
                    };
                    for (var le in re) {
                        var ce = re[le];
                        de(ce);
                        for (var ue in ce.datas) de(ce.datas[ue])
                    }
                }
                var pe = function() {
                        var e = window.innerHeight,
                            t = Math.round(e - y.getElementById("disclaimer_message").offsetHeight);
                        if (e < 800 && t < 100 && (t += 100, y.getElementById("disclaimer-top").setAttribute("style", "display:none;"), window.xv.disclaimer.bIsAgeWarning && y.getElementById("disclaimer-warning-p").setAttribute("style", "font-size:21px; line-height:1;")), t < window.xv.disclaimer.iMinTextHeight) {
                            t = window.xv.disclaimer.iMinTextHeight, y.getElementById("disclaimer-top").setAttribute("style", "display:none;"), window.xv.disclaimer.bIsAgeWarning && (y.getElementById("disclaimer-warning-p").setAttribute("style", "font-size:21px; line-height:1;"), y.getElementById("disclaimer-parents-p").setAttribute("style", "margin: 10px 0 !important;"));
                            for (var n = y.querySelectorAll(".disclaimer-enter"), i = 0; i < n.length; i++) n[i].setAttribute("style", "font-size:30px;line-height:36px;")
                        }
                        window.xv.disclaimer.bIsAgeWarning && (t > window.xv.disclaimer.iMaxTextHeight ? t = window.xv.disclaimer.iMaxTextHeight : t < window.xv.disclaimer.iMinTextHeight && (t = window.xv.disclaimer.iMinTextHeight), y.getElementById("disclaimer-over18").setAttribute("style", "display:block;max-height:" + t + "px;" + (t === window.xv.disclaimer.iMinTextHeight ? "margin:0 0 10px 0;" : "")))
                    },
                    me = function() {
                        if (window.xv.disclaimer.bHasCookieManage && (y.getElementById("disclaimer-accept_cookies").innerHTML = xv.i18n.__("legal.disclaimer.accept_cookies", {}, "front", "Accept all cookies"), y.getElementById("disclaimer-reject_cookies").innerHTML = xv.i18n.__("legal.disclaimer.reject_cookies", {}, "front", "Reject all cookies"), y.getElementById("disclaimer-save-preferences").innerHTML = xv.i18n.__("legal.disclaimer.save_preferences" + (window.xv.disclaimer.bIsCookieManageOnly ? "_only" : ""), {}, "front", "save preferences"), y.getElementById("disclaimer-cookies_essential").innerHTML = xv.i18n.__(re.essential.titleTradKey, {}, "front", re.essential.title), y.getElementById("disclaimer-cookies_functionality").innerHTML = xv.i18n.__(re[w.S_F_COOKIES_FUNCTIONALITY].titleTradKey, {}, "front", re[w.S_F_COOKIES_FUNCTIONALITY].title), y.getElementById("disclaimer-cookies_advertising").innerHTML = xv.i18n.__(re[w.S_F_COOKIES_ADVERTISING].titleTradKey, {}, "front", re[w.S_F_COOKIES_ADVERTISING].title), y.getElementById("disclaimer-cookies_player_preferences").innerHTML = xv.i18n.__(re[w.S_F_COOKIES_PLAYER_PREFERENCES].titleTradKey, {}, "front", re[w.S_F_COOKIES_PLAYER_PREFERENCES].title), y.getElementById("disclaimer-always_active").innerHTML = xv.i18n.__("legal.disclaimer.always_active", {}, "front", J), y.getElementById("disclaimer-cookies").innerHTML = xv.i18n.__("legal.disclaimer.cookies_and_similar", {
                                "%sitename%": e.replace(".com", "").replace("www.", ""),
                                "%link%": Y,
                                "%end_link%": "</a>"
                            }, "front", W)), window.xv.disclaimer.bIsAgeWarning) {
                            y.getElementById("disclaimer-warning").innerHTML = xv.i18n.__(z ? "legal.disclaimer.warning_v2" : "legal.disclaimer.warning", {
                                "%red%": '<span style="color:' + l + '">',
                                "%end_red%": "</span>"
                            }, "front", G);
                            var t = y.getElementById("disclaimer-over18");
                            t && (t.innerHTML = xv.i18n.__("legal.disclaimer.over_18_recognize", {
                                "%link_start%": '<a href="' + window.xv.conf.domains.info + '/legal/tos" target="_blank">',
                                "%link_end%": "</a>"
                            }, "front", K)), y.getElementById("disclaimer-over18btn").innerHTML = xv.i18n.__("legal.disclaimer.i_over_18", {}, "front", $), y.getElementById("disclaimer-parents").innerHTML = xv.i18n.__(z ? "legal.disclaimer.parents_advice_v2" : "legal.disclaimer.parents_advice", {}, "front", X)
                        }
                        var n, i = y.querySelectorAll(".disclaimer-enter");
                        for (n = 0; n < i.length; n++) i[n].innerHTML = xv.i18n.__("misc.enter", {}, "front");
                        var o = y.querySelectorAll(".disclaimer-manage_cookies");
                        for (n = 0; n < o.length; n++) o[n].innerHTML = xv.i18n.__("legal.disclaimer.manage_cookies", {}, "front", "Manage Cookies");
                        var s = y.querySelectorAll(".feature__btn");
                        for (n = 0; n < s.length; n++) s[n].innerHTML = xv.i18n.__("legal.disclaimer.list_cookies", {}, "front", "List of cookies");
                        var a = y.querySelectorAll(".cookie-name");
                        for (n = 0; n < a.length; n++) a[n].innerHTML = xv.i18n.__("legal.disclaimer.cookie_name", {}, "front", "Cookie name");
                        var r = y.querySelectorAll(".cookie-function");
                        for (n = 0; n < r.length; n++) r[n].innerHTML = xv.i18n.__("legal.disclaimer.cookie_function", {}, "front", "Legal Basis / Purpose / Function");
                        var d = y.querySelectorAll(".cookie-duration");
                        for (n = 0; n < d.length; n++) d[n].innerHTML = xv.i18n.__("legal.disclaimer.cookie_duration", {}, "front", "Duration");
                        for (var c in D) {
                            var u = D[c],
                                p = y.querySelectorAll("." + u.sClass);
                            for (n = 0; n < p.length; n++) p[n].innerHTML = xv.i18n.__(u.sTradKey, u.oTradArgs, "front", u.sDefault)
                        }
                        if (M || z) {
                            var m = e.toLowerCase().replace(".com", "").replace(".", " ").toUpperCase(),
                                f = y.querySelectorAll(".disclaimer-enter-straight"),
                                h = y.querySelectorAll(".disclaimer-enter-gay"),
                                g = y.querySelectorAll(".disclaimer-enter-gay-current"),
                                v = y.querySelectorAll(".disclaimer-enter-shemale"),
                                b = y.querySelectorAll(".disclaimer-enter-shemale-current");
                            for (n = 0; n < f.length; n++) f[n].innerHTML = xv.i18n.__("straight", {}, "front", "Straight");
                            for (n = 0; n < h.length; n++) h[n].innerHTML = xv.i18n.__("gay", {}, "front", "Gay");
                            for (n = 0; n < g.length; n++) g[n].innerHTML = xv.i18n.__("main_cats.gay_site", {
                                "%sitename%": m
                            }, "front", m + " Gay");
                            for (n = 0; n < v.length; n++) v[n].innerHTML = xv.i18n.__("trans", {}, "front", "Trans");
                            for (n = 0; n < b.length; n++) b[n].innerHTML = xv.i18n.__("main_cats.trans_site", {
                                "%sitename%": m
                            }, "front", m + " Gay")
                        }
                        "function" == typeof pe && pe()
                    };
                if (M || z) {
                    var fe = B ? "XV RED" : F ? "XNXX GOLD" : e.toLowerCase().replace(".com", "").replace(".", " ").toUpperCase(),
                        he = "www." + e.toLowerCase(),
                        ge = this.getLang();
                    "fr" === ge ? (K = fe + " est un site labellisÃ© RTA (<strong>Restricted to Adults</strong> ou RÃ©servÃ© aux Adultes). <strong>Si vous Ãªtes parents</strong>, vous pouvez facilement bloquer l'accÃ¨s Ã  ce site. Veuillez-vous rÃ©fÃ©rer Ã  la page suivante " + N("https://www.rtalabel.org/index.php?content=parents/") + " pour plus d'informations.<br><br>", K += V ? e + " est un <strong>service d'hÃ©bergement premium de vidÃ©os pornographiques</strong>. " : e + " est un <strong>service d'hÃ©bergement gratuit de vidÃ©os pornographiques</strong>. ", K += "Nous convertissons vos fichiers dans diffÃ©rents formats. Vous pouvez utiliser notre code d'intÃ©gration (Â« <em>embed code</em> Â») afin d'afficher n'importe quelle vidÃ©o sur un autre site Internet. Chaque vidÃ©o tÃ©lÃ©chargÃ©e vers notre plateforme est affichÃ©e sur nos catalogues environ trois jours aprÃ¨s le tÃ©lÃ©chargement. Environ 1.200 Ã  2.000 vidÃ©os pour adultes sont tÃ©lÃ©chargÃ©es chaque jour (notez que les vidÃ©os labellisÃ©es <em>gay</em> et <em>shemale</em> sont filtrÃ©es sur cette page, mais disponibles dans leurs catÃ©gories respectives). Nos pages (c'est-Ã -dire tout ce que vous voyez hÃ©bergÃ© sur " + N(he, he, !0) + ") ne contiennent aucun spyware/adware/trojan/etc. Pour accÃ©der Ã  notre site, qui est strictement rÃ©servÃ© aux personnes Ã¢gÃ©es de 18 ans ou plus, vous devez prendre connaissance Ã  nos Conditions d'utilisation (" + N(window.xv.conf.domains.info + "/legal/tos") + "). L'acceptation de ces Conditions d'utilisation est requise pour l'utilisation de nos services.<br><br>", K += V ? "En plus de la crÃ©ation d'un compte pour accÃ©der au site et de l'acceptation de nos Conditions d'utilisation, vous devez Ã©galement consulter notre Politique Vie PrivÃ©e et DonnÃ©es Personnelles disponible Ã  l'adresse " + N(window.xv.conf.domains.info + "/legal/privacy") + " et l'accepter." : "Vous Ãªtes Ã©galement tenu de consulter et d'accepter notre Avis sur la Vie PrivÃ©e et les DonnÃ©es Personnelles (disponible Ã  l'adresse " + N(window.xv.conf.domains.info + "/legal/privacynotice") + ") lorsque vous vous rendez sur notre Site Internet pour soumettre un formulaire de signalement d'abus, une demande de retrait pour violation du droit d'auteur ou une contre-notification Ã  ce sujet, conformÃ©ment Ã  nos Conditions d'utilisation. Si vous Ãªtes un utilisateur ayant crÃ©Ã© un compte, vous devez Ã©galement prendre connaissance de notre Politique Vie PrivÃ©e et DonnÃ©es Personnelles (disponible Ã  l'adresse " + N(window.xv.conf.domains.info + "/legal/privacy") + ") et l'accepter.", K += "<br><br>La consultation intentionnelle et/ou la possession d'images sexuellement explicites de toute personne de moins de 18 ans est illÃ©gale. Le tÃ©lÃ©chargement de contenu illÃ©gal vers ce site, et notamment des contenus reprÃ©sentant des abus sexuels commis sur des mineurs ou des actes sexuels non consentis, est strictement interdit et sera signalÃ© aux autoritÃ©s de police compÃ©tentes afin d'Ãªtre poursuivi. Pour plus d'informations, consultez notre page Ã  l'adresse " + N(window.xv.conf.domains.info + "/legal/control") + ".<br><br>En accÃ©dant Ã  " + e + ", vous reconnaissez avoir lu et acceptÃ© nos " + N(window.xv.conf.domains.info + "/legal/tos", "Conditions d'utilisation") + ".<br><br>" + e + " utilise des cookies et des technologies similaires pour permettre le fonctionnement de base du site ainsi que la personnalisation, l'analyse et le marketing. Pour plus d'informations sur les diffÃ©rents cookies, veuillez consulter notre " + N(window.xv.conf.domains.info + "/legal/privacy", "politique relative aux cookies") + '. Si vous cliquez sur Â« accepter tous les cookies Â», vous nous donnez votre consentement Ã  les utiliser Ã  toutes les fins mentionnÃ©es. Vous pouvez Ã©galement choisir vos propres paramÃ¨tres en cliquant sur Â« <span class="disclaimer-manage_cookies">Manage Cookies</span> Â».', J = "toujours actifs") : "it" === ge ? (K = fe + " Ã¨ un sito classificato per soli adulti (â€œRTAâ€�). <strong>Genitori</strong>, potete facilmente bloccare l'accesso a questo sito. Leggete " + N("https://www.rtalabel.org/index.php?content=parents/") + " per ulteriori informazioni.<br><br>", K += V ? e + " Ã¨ un <strong>servizio di hosting premium per video porno.</strong>. " : e + " Ã¨ un <strong>servizio di hosting gratuito per video porno.</strong>. ", K += 'Noi convertiamo i tuoi file in vari formati. Puoi riportare il nostro "<em>embed code</em>" per visualizzare qualsiasi video su un altro sito web. Ogni video caricato Ã¨ mostrato nei nostri indici circa tre giorni dopo l\'upload. Ogni giorno vengono caricati dai 1200 ai 2000 video per adulti (i video <em>gay</em> e <em>shemale</em> sono filtrati da questa pagina, ma appaiono nelle rispettive categorie). Le nostre pagine (tutti i contenuti che vedi su ' + N(he, he, !0) + ") non contengono spyware/adware/trojan/ecc. Per accedere al nostro sito, strettamente riservato a persone di etÃ  pari o superiore a 18 anni, Ã¨ necessario comprendere i nostri Termini di servizio e aprire un account. L'accettazione di questi Termini di servizio Ã¨ necessaria per l'utilizzo dei nostri servizi.<br><br>", K += V ? "Oltre a creare un account per accedere a questo sito Web e accettare i Termini di servizio, Ã¨ anche necessario consultare la nostra Informativa sulla privacy, disponibile su " + N(window.xv.conf.domains.info + "/legal/privacy") + " , e accettarla." : "Ãˆ inoltre necessario prendere visione e accettare la nostra Informativa sulla privacy e sui dati personali (â€œPrivacy Noticeâ€�), disponibile all'indirizzo " + N(window.xv.conf.domains.info + "/legal/privacynotice") + " ogni volta che visiti il nostro sito Web per inviare un modulo di segnalazione di abuso, una richiesta di rimozione o una contro-segnalazione in conformitÃ  con i Termini di servizio. Se sei un utente che ha creato un account, sei tenuto a leggere e consultare la nostra Informativa Privacy, disponibile all'indirizzo " + N(window.xv.conf.domains.info + "/legal/privacy") + " e accettarla.", K += "<br><br>La visione intenzionale e / o il possesso di immagini sessualmente esplicite di chiunque abbia meno di 18 anni Ã¨ illegale. Il caricamento di contenuti illegali su questo sito, incluso materiale pedopornografico o atti sessuali non consensuali, Ã¨ severamente vietato e verrÃ  denunciato alle forze dell'ordine per essere perseguito. Per ulteriori informazioni, leggi la nostra pagina su  " + N(window.xv.conf.domains.info + "/legal/control") + ".") : (K = fe + " is rated with RTA label.  Parents, you can easily block access to this site. Please read " + N("https://www.rtalabel.org/index.php?content=parents/") + " for more information.", K += "<br><br>" + e + ' is a free hosting service for porn videos.  We convert your files to various formats.  You can grab our "embed code" to display any video on another website. Every video uploaded is shown on our indexes more or less three days after uploading. About 1200 to 2000 adult videos are uploaded each day (note that gay and shemale videos are filtered from this page, but shown in their respective categories). Our pages (everything that you see hosted on ' + he + ") contain no spyware/adware/trojan/etc. There is no charge for viewing videos on our site. To access our site, which is strictly reserved to individuals of 18 years old or older, you must review, agree to, and comply with our Terms of Service in their entirety.", V || (K += "Please review our " + N(window.xv.conf.domains.info + "/legal/privacynotice", "Privacy Notice") + " (for users who do not create an account) and our " + N(window.xv.conf.domains.info + "/legal/privacy", "Privacy Policy") + " (for users who create an account) to understand how we will process personal data you provide to us.", K += "<br><br>"), K += 'The intentional viewing and/or possession of sexually explicit imagery of anyone under 18 is illegal. As such, uploading and/or viewing videos containing child pornography is strictly forbidden. To the extent you believe the life of a child might be at immediate risk, please contact the local authorities of your country and specify the URL associated with the video/s at issue. In this regard please read our page at <a href="' + window.xv.conf.domains.info + '/legal/control" target="_blank" style="' + O + '" onclick="event.stopPropagation ? event.stopPropagation() : (even.cancelBubble = true);">' + window.xv.conf.domains.info + "/legal/control</a> for more information on how " + fe + ' is fighting child pornography and cooperating with local authorities. If you encounter child sexual abuse images or material online, report it to us by completing the form available at <a href="' + window.xv.conf.domains.info + '/takedown-amateur" target="_blank" style="' + O + '" onclick="event.stopPropagation ? event.stopPropagation() : (even.cancelBubble = true);">' + window.xv.conf.domains.info + "/takedown-amateur</a> and identifying the URL of the video at issue. " + e + " will report to authorities any videos, photographs or any content containing child sexual abuse images.<br><br>" + e + " uses cookies and similar technologies to enable the basic functioning of the site as well as personalisation, analysis and marketing. For more information on individual cookies, please see our " + N(window.xv.conf.domains.info + "/legal/privacy", "Cookie Policy") + ". If you click Â« accept all cookies Â», you give us your consent to use them for all the purposes mentioned. You can also choose your own settings by clicking Â« manage cookies Â»."), Z = window.xv.conf.dyn.user_main_cat,
                        Q = "straight" !== window.xv.conf.dyn.user_main_cat ? "straight" : "gay", ee = "shemale" !== window.xv.conf.dyn.user_main_cat ? "shemale" : "gay", te = fe + ("straight" === Z ? "" : "gay" === Z ? " Gay" : " Trans"), ne = "gay" === Q ? "Gay" : "Straight", ie = "shemale" === ee ? "Trans" : "Gay";
                    var ve = z ? '<span class="icon-f icf-sexe-woman mcui-picto"></span>' : '<span class="icon-f icf-sexe-woman-v2 mcui-picto"></span>',
                        be = '<span class="icon-flag-gay mcui-picto"><span class="r"></span><span class="o"></span><span class="y"></span><span class="g"></span><span class="b"></span><span class="v"></span></span>',
                        ye = z ? '<span class="icon-f icf-sexe-trans mcui-picto"></span>' : '<span class="icon-f icf-sexe-trans-v2 mcui-picto"></span>';
                    oe = "straight" === Z ? ve : "gay" === Z ? be : ye, se = "gay" === Q ? be : ve, ae = "shemale" === ee ? ye : be
                }
                var _e = H() + '<style rel="stylesheet" type="text/css">' + q(e) + "#disclaimer-top{" + c + "}#disclaimer-top-close-btn{" + u + "}#disclaimer-content{padding:10px 20px;}#disclaimer-warning-p{font-size:25px;line-height:1.1;font-weight:bold;padding:0;margin:0 0 10px 0 !important;}#disclaimer-over18{text-align:justify;font-size:14px;padding:0;margin:0 0 20px;overflow:auto;display:none;}#disclaimer-over18 a{font-size:14px;padding:0;margin:0 0 20px;max-height: 254px;overflow: auto;" + s + "}#disclaimer_message .btn-primary{display:inline-block;white-space: normal;margin:0 auto;font-size:24px;line-height:1;" + m + "}#disclaimer_message .btn-primary:hover{" + f + "}" + (M ? '#disclaimer_message .disclaimer-enter-label{font-size: 16px;margin:0 5px 5px;}#disclaimer_message .btn-primary .disclaimer-enter{text-transform:uppercase;}#disclaimer_message .disclaimer-enter-btns .btn{margin:0 5px 7px;position: relative}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-line{display: flex;justify-content: center;}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-line .btn-default{flex: 100px 0 1;font-size:16px;padding:3px 8px 2px;}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-line .btn-default .disclaimer-enter-mc-picto .mcui-picto{display:inline-block;vertical-align:baseline;line-height:24px;}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-line .btn-default .disclaimer-enter-mc-txt{display:block}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-line .btn-default .disclaimer-enter-mc-picto {display:block;height:24px;line-height:24px;font-size:20px;}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-line .current-main-cat::after{content: "";position:absolute;top:calc(100% + 3px);left:calc(50% - 5px);width: 0;height: 0;border-left: 5px solid transparent;border-right: 5px solid transparent;border-bottom: 5px solid ' + p + ";}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-line .current-main-cat,#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-line .btn-default:hover{box-shadow: 0 0 0 2px " + l + ";}#disclaimer_message .disclaimer-enter-btn.pulse{animation: disclaimerEnterPulse .2s ease;}@keyframes disclaimerEnterPulse {0% {transform:scale(1);} 50% {transform:scale(1.1);} 100% {transform:scale(1);}}" : z ? "#disclaimer_message .disclaimer-enter-label{font-size: 14px;margin:4px 0 10px;}#disclaimer_message #disclaimer-over18btn{font-size: 20px;}#disclaimer_message .btn .disclaimer-enter{text-transform:uppercase;}#disclaimer_message .disclaimer-enter-btns {display:flex; width: 100%;}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-col{display:flex;flex-direction: column;flex-grow: 1;align-items: center;margin:0 auto;max-width:450px;}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-col .btn{width:100%;margin:0 0 7px;position: relative;flex: 50px 0 1;font-size:24px;font-weight:bold;padding:3px 8px;display:flex;align-items:center;word-break:break-all;border-width:2px;}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-col .btn-default{width:96%;font-size:16px;}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-col .btn .left,#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-col .btn .right{display:flex;width:50%;align-items: center;}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-col .btn .left{justify-content: flex-end;}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-col .btn .disclaimer-enter-mc-picto {height:24px;line-height:24px;font-size:24px;margin-left:5px;display:inline-block;width:28px;}" : "#disclaimer_message .btn-primary .text-top{display:block;font-size:16px;line-height:1;}#disclaimer_message .btn-primary .text-bottom{font-size:16px;line-height:1;}#disclaimer_message .btn-primary .text-bottom span{font-size:14px;line-height:1;}#disclaimer_message .btn-primary .disclaimer-enter{font-weight:bold;text-transform:uppercase;}") + "#disclaimer_message .btn-default{margin: 10px 0 0 0;white-space: normal;font-weight:bold;" + h + "}#disclaimer_message .disclaimer-manage_cookies,#disclaimer-save-preferences{font-size:16px;line-height:24px;}#disclaimer_message a.button{padding:10px 20px;margin-top:10px;font-size:26px;line-height:32px;font-weight:bold;display:inline-block;text-decoration:none;width:100%;" + m + "}#disclaimer-parents-p{line-height:16px;font-size:12px;margin:5px 0 15px 0!important;}#disclaimer-cookies-p{font-size:12px;line-height:16px;padding:0;margin:10px 10px 15px}#disclaimer-cookies-p:first-child{margin-top:5px}#disclaimer-features {text-align:center;}#disclaimer-features .features__title{margin-top:10px;text-transform:uppercase;text-align:center;font-weight:bold;}#disclaimer-features .features__list{border-top: 1px solid " + E + ";border-bottom: 1px solid " + E + ";overflow:auto;}#disclaimer-features .feature__item{padding:5px 0 0 0;text-align:left;font-size:0;line-height:1;}#disclaimer-features .feature__item + .feature__item {border-top: 1px solid " + E + ';}#disclaimer-features .feature__desc{display:inline-block;width:calc(100% - 50px);padding-right:30px;font-size:12px;line-height:1;}#disclaimer-features .feature__item.item--essential .feature__desc{width:calc(100% - 100px);}#disclaimer-features .feature__title{height:20px;line-height:20px;margin:0 0 5px 0;font-weight:bold;cursor:pointer;}#disclaimer-features .feature__title:before{content:"+";display:inline-block;margin-right:5px;font-weight:normal;}#disclaimer-features .feature__item.item--open .feature__title:before{content:"-";}.notouch #disclaimer-features .feature__title:hover{text-decoration:underline;}#disclaimer-features .feature__text{font-size:11px;line-height:1.5;text-align:justify;margin:2px 0 7px;}#disclaimer-features .feature__btn{display: block;margin:5px 0;text-decoration:none;font-size:12px;color:#333333;}.notouch #disclaimer-features .feature__btn:hover{text-decoration:underline;}#disclaimer-features .feature__toggle{display:inline-block;vertical-align:top;text-align:right;line-height:1;}#disclaimer-features .feature__toggle p{height:20px;margin:0 5px 5px 0;line-height:20px;}#disclaimer-features .feature__item.item--essential .feature__toggle{width:100px;font-size:' + v + "px;color:" + g + ';}#disclaimer-features .feature__input{position:absolute;top:0;left:0;width:0;height:0;margin:0;opacity:0;}#disclaimer-features .feature__label{position:relative;height:20px;padding:0 0 0 45px;margin:0 0 5px 0;cursor:pointer;}#disclaimer-features .feature__label:before{content:"";position:absolute;top:0;left:0;display:block;width:36px;height:20px;background:' + C + ";border:1px solid " + C + ';border-radius: 10px;}#disclaimer-features .feature__label:after{content:"";position:absolute;top:2px;left:2px;display:block;width:16px;height:16px;border-radius:50%;background:' + T + ";transition: left 0.2s;}#disclaimer-features .feature__input:checked + .feature__label:before{background:" + l + ";border-color:" + l + ";}#disclaimer-features .feature__input:checked + .feature__label:after{left:18px; background:" + j + ";}#disclaimer-features .feature__cookies{font-size:11px; line-height:1.5;}#disclaimer-features .feature__cookies th{padding: 2px 5px;font-weight:bold;background:" + x + ";}#disclaimer-features .feature__cookies td{padding: 2px 5px;}#disclaimer-features .feature__cookies tr:nth-child(even) td{background:" + k + ";}#disclaimer-reject_cookies-btn{border: 0;background:0;" + O + ';font-weight:bold;text-decoration:underline;margin-top: 15px;}</style><div id="disclaimer_background" class="disclaimer_background"><div id="disclaimer_message" class="disclaimer_message"><div id="disclaimer-top">' + r + d + '</div><div id="disclaimer-content">' + (this.bIsCookieManageOnly ? "" : '<p id="disclaimer-warning-p"><span id="disclaimer-warning">' + G + "</span></p>") + (this.bIsCookieManageOnly ? "" : '<p id="disclaimer-over18">' + K + "</p>") + (this.bIsCookieManageOnly ? '<div><button id="disclaimer-accept_cookies-btn" class="btn btn-primary" onclick="window.xv.disclaimer.setFeatures(\'accept-all\');"><span class="text-top" id="disclaimer-accept_cookies">Accept all cookies</span></button></div>' : M ? '<p class="disclaimer-enter-label">' + (window.xv.disclaimer.bHasCookieManage ? '<span class="text-bottom">(<span id="disclaimer-accept_cookies">Accept all cookies</span>)</span>' : "") + '</p><div class="disclaimer-enter-btns"><div class="disclaimer-enter-btns-line"><button class="btn btn-default current-main-cat" onclick="window.xv.disclaimer.updateEnterMainCat(event, this, \'' + Z + '\')"><span class="disclaimer-enter-mc-picto">' + oe + '</span><span class="disclaimer-enter-mc-txt disclaimer-enter-' + Z + '">' + te + '</span></button><button class="btn btn-default" onclick="window.xv.disclaimer.updateEnterMainCat(event, this, \'' + Q + '\')"><span class="disclaimer-enter-mc-picto">' + se + '</span><span class="disclaimer-enter-mc-txt disclaimer-enter-' + Q + '">' + ne + '</span></button><button class="btn btn-default" onclick="window.xv.disclaimer.updateEnterMainCat(event, this, \'' + ee + '\')"><span class="disclaimer-enter-mc-picto">' + ae + '</span><span class="disclaimer-enter-mc-txt disclaimer-enter-' + ee + '">' + ie + '</span></button></div><div class="disclaimer-enter-btns-line"><button class="btn btn-primary disclaimer-enter-btn" onclick="' + (window.xv.disclaimer.sCookieManageType === b.COOKIE_MANAGE_TYPE.INTEGRATED ? "window.xv.disclaimer.setFeatures('accept-all', '" + Z + "')" : "window.xv.disclaimer.close_pop(event, null, '" + Z + "')") + '"><span class="disclaimer-enter">ENTER</span>' + (M ? " - " : "") + '<span class="text-top" id="disclaimer-over18btn">' + $ + "</span> </button></div></div>" : z ? '<p class="disclaimer-enter-label"><span class="text-top" id="disclaimer-over18btn">' + $ + "</span> " + (window.xv.disclaimer.bHasCookieManage ? ' <span class="text-bottom">(<span id="disclaimer-accept_cookies">Accept all cookies</span>)</span>' : "") + '</p><div class="disclaimer-enter-btns"><div class="disclaimer-enter-btns-col"><button class="btn btn-primary current-main-cat" onclick="' + (window.xv.disclaimer.sCookieManageType === b.COOKIE_MANAGE_TYPE.INTEGRATED ? "window.xv.disclaimer.setFeatures('accept-all', '" + Z + "')" : "window.xv.disclaimer.close_pop(event, null, '" + Z + "')") + '"><span class="left"><span class="disclaimer-enter-mc-txt disclaimer-enter-' + Z + '">' + te + '</span><span class="disclaimer-enter-mc-picto">' + oe + '</span></span><span class="right"><span>&nbsp;:&nbsp;</span><span class="disclaimer-enter">ENTER</span></span></button><button class="btn btn-default" onclick="' + (window.xv.disclaimer.sCookieManageType === b.COOKIE_MANAGE_TYPE.INTEGRATED ? "window.xv.disclaimer.setFeatures('accept-all', '" + Q + "')" : "window.xv.disclaimer.close_pop(event, null, '" + Q + "')") + '"><span class="left"><span class="disclaimer-enter-mc-txt disclaimer-enter-' + Q + '">' + ne + '</span><span class="disclaimer-enter-mc-picto">' + se + '</span></span><span class="right"><span>&nbsp;:&nbsp;</span><span class="disclaimer-enter">ENTER</span></span></button><button class="btn btn-default" onclick="' + (window.xv.disclaimer.sCookieManageType === b.COOKIE_MANAGE_TYPE.INTEGRATED ? "window.xv.disclaimer.setFeatures('accept-all', '" + ee + "')" : "window.xv.disclaimer.close_pop(event, null, '" + ee + "')") + '"><span class="left"><span class="disclaimer-enter-mc-txt disclaimer-enter-' + ee + '">' + ie + '</span><span class="disclaimer-enter-mc-picto">' + ae + '</span></span><span class="right"><span>&nbsp;:&nbsp;</span><span class="disclaimer-enter">ENTER</span></span></button></div></div>' : '<div><button class="btn btn-primary disclaimer-enter-btn" onclick="' + (window.xv.disclaimer.sCookieManageType === b.COOKIE_MANAGE_TYPE.INTEGRATED ? "window.xv.disclaimer.setFeatures('accept-all')" : "window.xv.disclaimer.close_pop(event, null, '')") + '"><span class="text-top" id="disclaimer-over18btn">' + $ + '</span> <span class="disclaimer-enter">ENTER</span> ' + (window.xv.disclaimer.bHasCookieManage ? '<span class="text-bottom">(<span id="disclaimer-accept_cookies">Accept all cookies</span>)</span>' : "") + "</button></div>") + function() {
                    if (!window.xv.disclaimer.bHasCookieManage) return "";
                    var e = (window.xv.disclaimer.sCookieManageType === b.COOKIE_MANAGE_TYPE.UPDATE_ONLY ? "" : '<div><button class="btn btn-default disclaimer-manage_cookies" onclick="window.xv.disclaimer.showCookiesList(this)">Manage Cookies</button></div>') + '<div id="disclaimer-features"' + (window.xv.disclaimer.sCookieManageType === b.COOKIE_MANAGE_TYPE.UPDATE_ONLY ? "" : ' class="hidden"') + '><p class="features__title disclaimer-manage_cookies">Manage Cookies</p><div class="features__list">';
                    for (var t in re) {
                        var n = re[t];
                        e += '<div class="feature__item item--' + n.id + '"><div class="feature__desc"><p class="feature__title" id="disclaimer-cookies_' + n.id + '" onclick="window.xv.disclaimer.toggleFeatureDesc(this)">' + n.title + '</p></div><div class="feature__toggle">', e += "essential" === n.id ? '<p><strong><span id="disclaimer-always_active">' + J + "</span></strong></p>" : '<input class="feature__input" type="checkbox" id="' + n.id + '" name="' + n.name + '"' + (n.checked ? ' checked="checked"' : "") + '><label class="feature__label" for="' + n.id + '"></label>', e += '</div><div class="feature__text hidden"><p>' + n.desc + '</p></div><table class="feature__cookies hidden"><thead><tr><th class="cookie-name">Cookie name</th><th class="cookie-function">Legal Basis / Purpose / Function</th><th class="cookie-duration">Duration</th></tr></thead><tbody>';
                        for (var i in n.datas) e += "<tr><td>" + n.datas[i].title + "</td><td>" + n.datas[i].desc + "</td>", "_ga , _gid" === n.datas[i].title ? e += "<td>" + n.datas[i].duration.sDefault + "</td>" : e += '<td class="' + n.datas[i].duration.sClass + '">' + n.datas[i].duration.sDefault + "</td>", e += "</tr>";
                        e += "</tbody></table></div>"
                    }
                    return e += '</div><button class="btn btn-default" onclick="window.xv.disclaimer.setFeatures(\'enter\');">' + (window.xv.disclaimer.bIsCookieManageOnly ? "" : '<span class="disclaimer-enter">ENTER</span> ') + '<span id="disclaimer-save-preferences">save preferences</span></button></div>'
                }() + (this.bHasCookieManage ? '<button id="disclaimer-reject_cookies-btn" onclick="window.xv.disclaimer.setFeatures(\'reject-all\');"><span id="disclaimer-reject_cookies">Reject all cookies</span></button>' : "") + (this.bHasCookieManage && this.sCookieManageType === b.COOKIE_MANAGE_TYPE.NEW_ONLY ? '<p id="disclaimer-cookies-p"><span id="disclaimer-cookies">' + W + "</span></p>" : "") + "</div>";
                "string" == typeof n && (_e += '<a class="button" href="' + n + '" target="_blank">VERIFIER MON AGE ET ENTRER</a>'), this.bIsAgeWarning && (_e += '<p id="disclaimer-parents-p"><a href="' + window.xv.conf.domains.info + '/parents/" target="_blank" style="' + O + '" onclick="window.xv.disclaimer.leave_site(event)"><strong><span id="disclaimer-parents">' + X + "</span></strong></a></p>"), this.bHasCookieManage && this.sCookieManageType !== b.COOKIE_MANAGE_TYPE.NEW_ONLY && (_e += '<p id="disclaimer-cookies-p"><span id="disclaimer-cookies">' + W + "</span></p>"), _e += "</div></div></div>", xv.dom.scrollToTop(), U(), "object" == typeof o && "function" == typeof o.insertAdjacentHTML ? o.insertAdjacentHTML("beforeend", _e) : y.write(_e), xv.i18n.getCatalog("front", me);
                var xe = (window.xv.disclaimer.bIsAgeWarning ? "img-blured " : "") + "disclaimer-opened";
                y.documentElement ? (_ = y.documentElement.style.overflow, xv.dom.addClass(y.documentElement, xe)) : y.body && (_ = y.body.style.overflow, xv.dom.addClass(y.body, xe)), this.bIsAgeWarning && A(I.ACTIONS.DISCLAIMER_SHOW), this.bHasCookieManage && A(I.ACTIONS.CONSENT_SHOW)
            }
        }, b.updateEnterMainCat = function(e, t, n) {
            for (var i = y.querySelectorAll(".disclaimer-enter-btn"), o = y.querySelectorAll(".current-main-cat"), s = 0; s < o.length; s++) xv.dom.removeClass(o[s], "current-main-cat");
            xv.dom.addClass(t, "current-main-cat");
            for (var s = 0; s < i.length; s++) ! function() {
                var e = i[s];
                e.setAttribute("onclick", window.xv.disclaimer.sCookieManageType === b.COOKIE_MANAGE_TYPE.INTEGRATED ? "window.xv.disclaimer.setFeatures('accept-all', '" + n + "')" : "window.xv.disclaimer.close_pop(event, null, '" + n + "')"), xv.dom.addClass(e, "pulse"), setTimeout(function() {
                    xv.dom.removeClass(e, "pulse")
                }, 300)
            }()
        }, b.displayCookiePopup = function(e, t, n) {
            this.display(e, "string" == typeof t ? t : b.COOKIE_MANAGE_TYPE.NEW_ONLY, !1, !0, n)
        }, b.close_pop = function(e, t, n) {
            window.xv.cookies.setLocal("dscld", !0, 324e6, "/"), this.bDisclaimerTriggered = !1, y.documentElement ? xv.dom.removeClass(y.documentElement, "img-blured disclaimer-opened") : y.body && xv.dom.removeClass(y.body, "img-blured disclaimer-opened"), Y(), "function" == typeof window.toggle_wpn_ads && window.toggle_wpn_ads(!0);
            var i = y.getElementById("disclaimer_background"),
                o = i && i.parentNode ? i.parentNode : null;
            if ("string" == typeof n) {
                this.sMainCatChoice = n, this.bIsSendingMetric = !0;
                var s = function() {
                    if ("string" == typeof window.xv.disclaimer.sRedirectUrlBlockedByMetric) return void(window.location.href = window.xv.disclaimer.sRedirectUrlBlockedByMetric);
                    window.xv.disclaimer.bIsSendingMetric = !1
                };
                "straight" === n ? A(I.ACTIONS.DISCLAIMER_STRAIGHT, 0, s, s) : "gay" === n ? A(I.ACTIONS.DISCLAIMER_GAY, 0, s, s) : A(I.ACTIONS.DISCLAIMER_TRANS, 0, s, s)
            }
            var a = window.xv.disclaimer.sCookieManageType === b.COOKIE_MANAGE_TYPE.INTEGRATED,
                r = function() {
                    if (a) {
                        if (window.xv.disclaimer.sCookieManageType === b.COOKIE_MANAGE_TYPE.SEPARATED) window.xv.disclaimer.displayCookiePopup(window.xv.disclaimer.sSiteName, b.COOKIE_MANAGE_TYPE.NEW_ONLY, o || document.getElementsByTagName("BODY")[0]);
                        else if ("string" == typeof window.xv.disclaimer.sMainCatChoice && window.xv.disclaimer.sMainCatChoice !== window.xv.conf.dyn.user_main_cat) {
                            var e = function(e) {
                                if (!window.xv.disclaimer.bIsSendingMetric) return void(window.location.href = e);
                                window.xv.disclaimer.sRedirectUrlBlockedByMetric = e, setTimeout(function() {
                                    window.location.href = e
                                }, 500)
                            };
                            e("gay" === window.xv.disclaimer.sMainCatChoice ? "/switch-sexual-orientation/gay" : "shemale" === window.xv.disclaimer.sMainCatChoice ? "/switch-sexual-orientation/shemale" : "/switch-sexual-orientation/straight")
                        }
                    } else a = !0
                };
            if (this.sCookieManageType !== b.COOKIE_MANAGE_TYPE.UPDATE_ONLY) {
                var d = [];
                this.bIsAgeWarning && d.push("disclr"), this.bHasCookieManage && d.push("cookie"), t && d.push("sv"),
                    function(e) {
                        var t = xv.utils.createRequestObject();
                        t.open("POST", "/account/message-closed", !0), t.withCredentials = !0, t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), "object" == typeof xv.gnct && t.setRequestHeader("Private-Mode", xv.gnct.getStatusString()), t.send("msgid%5B%5D=" + e.join("&msgid%5B%5D=")), t.onreadystatechange = function() {
                            4 === t.readyState && 200 === t.status && r()
                        }
                    }(d)
            }
            y.documentElement ? y.documentElement.style.overflow = _ : y.body && (y.body.style.overflow = _);
            var l = e || window.event;
            l && (l.cancelBubble = !0, l.stopPropagation && l.stopPropagation()), this.bIsOpen = !1;
            var c = new Event(b.EVENT.CLOSE_POP);
            document.dispatchEvent(c), o && i.parentNode.removeChild(i), r()
        }, b.leave_site = function(e) {
            var t = e || window.event;
            t.cancelBubble = !0, t.stopPropagation && t.stopPropagation()
        }, b.survey_display = function(e) {
            var t = '<img class="no-blur" src="' + window.xv.conf.domains["static"] + '/v3/img/skins/default/logo/xvideos.white.png" alt="' + e + '" />',
                n = "height:60px;line-height:60px;background:#161617";
            e.toLowerCase().indexOf("red") > -1 && (t = '<img class="no-blur" src="' + window.xv.conf.domains["static"] + '/v3/img/skins/default/logo/xvideosred.white.png" alt="' + e + '" />'), e.toLowerCase().indexOf("xnxx") > -1 && (t = '<img class="no-blur" src="' + window.xv.conf.domains["static"] + '/v3/img/skins/xnxx/logo/xnxx.png" style="height:30px;margin-top:15px;" alt="' + e + '" />', n = "height:60px;line-height:60px;background:#000090"), e.toLowerCase().indexOf("gold") > -1 && (t = '<img class="no-blur" src="' + window.xv.conf.domains["static"] + '/v3/img/skins/xnxx/gold/xnxx.gold.logo.png" style="margin-top:5px;" alt="' + e + '" />'), e.toLowerCase().indexOf("pornorama") > -1 && (t = '<p style="font-size:26px;font-weight:bold">PORNORAMA.COM</p>', n = "height:80px;line-height:80px;");
            var i = "I am 18 years old or older",
                o = 'onclick="window.xv.disclaimer.close_pop(event, true)"',
                s = H() + '<style rel="stylesheet" type="text/css">' + q(e, !0) + "#disclaimer-top{" + n + '}#disclaimer-content{padding:10px 20px;}#disclaimer-warning-p{font-size:25px;line-height:1.1;font-weight:bold;padding:0;margin:10px 0 !important;}#disclaimer_message a.btn-survey{padding:5px 15px;font-size:24px;line-height:30px;font-weight:bold;border:none;text-decoration:none;display:inline-block;background:#4f89e2;color:#fff;border-radius:4px;}#disclaimer-answer-survey{display:block;margin: 5px 0}#disclaimer-enter-link{padding:0;margin:15px 0 0;text-decoration:underline;font-weight:bold;cursor:pointer}#disclaimer-survey-csa-p{position: relative;}#disclaimer-survey-csa-show{text-decoration:underline;font-weight:bold;cursor:help;}#disclaimer-survey-csa-info{display:none;position:absolute;bottom:100%;left:0;background:#4f89e2;color:#fff;border:1px solid #fff;padding:8px 14px;box-shadow:0 -2px 6px 1px rgba(0,0,0,0.3);text-align:left;}</style><div id="disclaimer_background" class="disclaimer_background"><div id="disclaimer_message" class="disclaimer_message"><div id="disclaimer-top">' + t + '</div><div id="disclaimer-content"><p id="disclaimer-warning-p">Chers visiteurs, il se peut que vous n\'ayez plus accÃ¨s Ã  notre site dans moins d\'un mois.</p><p>Saviez-vous qu\'une nouvelle loi nous empÃªche de vous laisser entrer sans vÃ©rifier votre Ã¢ge?</p><p><a id="disclaimer-answer-survey-yes" href="https://pornbiz.com/sondage-pornographie-france?question=saviez-vous-nouvelle-loi&answer=oui" class="btn-survey" style="margin-right:20px" target="_blank"' + o + '>OUI</a><a id="disclaimer-answer-survey-no" href="https://pornbiz.com/sondage-pornographie-france?question=saviez-vous-nouvelle-loi&answer=non" class="btn-survey" target="_blank"' + o + '>NON</a></p><p id="disclaimer-survey-csa-p">Le <span id="disclaimer-survey-csa-show">CSA</span> a enclenchÃ© la procÃ©dure contre nous. Nous avons jusqu\'au 16 mars pour leur faire part de nos observations.<span id="disclaimer-survey-csa-info">Le CSA est l\'autoritÃ© publique franÃ§aise de rÃ©gulation de l\'audiovisuel. Cette rÃ©gulation s\'opÃ¨re au service de la libertÃ© d\'expression dans l\'intÃ©rÃªt du public et des professionnels. Elle repose sur le respect et la protection des droits et libertÃ©s individuels, la rÃ©gulation Ã©conomique et technologique du marchÃ©, et la responsabilitÃ© sociale.</span></p><p>Nous aimerions vous donner la parole au travers de notre sondage, vous qui, comme nous, n\'avez jamais Ã©tÃ© entendu :</p><a id="disclaimer-answer-survey" href="https://pornbiz.com/sondage-pornographie-france" class="btn-survey" target="_blank"' + o + '>RÃ©pondez aux questions ici.</a><p id="disclaimer-enter-link"' + o + '><span id="disclaimer-over18btn">' + i + '</span> : <span class="disclaimer-enter">ENTER</span></p></div></div></div>';
            if (xv.dom.scrollToTop(), U(), y.write(s), Math.round(window.innerHeight - y.getElementById("disclaimer_message").offsetHeight - 40) < this.iMinTextHeight) {
                y.getElementById("disclaimer-top").setAttribute("style", "display:none;");
                var a = y.getElementById("disclaimer-warning-p");
                a && a.setAttribute("style", "font-size:22px; line-height:1;")
            }
            y.documentElement ? (_ = y.documentElement.style.overflow, xv.dom.addClass(y.documentElement, "img-blured disclaimer-opened")) : y.body && (_ = y.body.style.overflow, xv.dom.addClass(y.body, "img-blured disclaimer-opened")), y.getElementById("disclaimer-survey-csa-show").addEventListener("mouseenter", function(e) {
                y.getElementById("disclaimer-survey-csa-info").setAttribute("style", "display:block;")
            }), y.getElementById("disclaimer-survey-csa-show").addEventListener("mouseout", function(e) {
                y.getElementById("disclaimer-survey-csa-info").setAttribute("style", "")
            });
            var r = function() {
                var e = y.getElementById("disclaimer-over18btn");
                e && (e.innerHTML = xv.i18n.__("legal.disclaimer.i_over_18", {}, "front", i));
                for (var t = y.querySelectorAll(".disclaimer-enter"), n = 0; n < t.length; n++) t[n].innerHTML = xv.i18n.___("misc.enter", "front", "ENTER")
            };
            xv.i18n.getCatalog("front", r)
        }, b.vpn_display = function(e, t) {
            if ("string" == typeof window.xv.cookies.get("disclaimer_vpn_display")) return !1;
            var n = "color:#000;",
                i = "#de2600",
                o = "background:#000;color:#fff";
            e.toLowerCase().indexOf("xnxx") > -1 ? (n = "color:#fff;", i = "#ff0", o = "background:#004be8;color:#fff") : e.toLowerCase().indexOf("pornorama") > -1 && (n = "color:#000;", i = "#0f4bff", o = "background:#0F4BFF;color:#fff");
            var s = "Welcome to " + e.toUpperCase(),
                a = "Please select your preferred version",
                r = H() + '<style rel="stylesheet" type="text/css">' + q(e) + "#disclaimer_vpn_welcome{font-size:26px;line-height:40px;font-weight:bold;padding:10px 0 0 0;margin:0 0 10px;}#disclaimer_vpn_select{font-size:22px;line-height:30px;padding:0;margin:0 0 10px;color:" + i + "}#disclaimer_vpn_btns a{user-select:none;-webkit-touch-callout:none;display:inline-block;vertical-align:top;padding:2px 6px;margin:4px;font-size:18px;font-weight:bold;text-decoration:none;line-height:28px;" + o + "}#disclaimer_vpn_btns a span{float:left;}#disclaimer_vpn_btns a .flag-small{margin:8px 4px 8px 0;}#disclaimer_vpn_another{user-select:none;-webkit-touch-callout:none;opacity:0.5;line-height:22px;font-size:16px;margin:20px 0 0;padding:0 0 20px 0;text-decoration:underline;" + n + '}#disclaimer_vpn_another.init-ok{opacity:1;cursor:pointer;}</style><div id="disclaimer_background" class="disclaimer_background"><div id="disclaimer_message"><p id="disclaimer_vpn_welcome">' + s + '</p><p id="disclaimer_vpn_select">' + a + ' :</p><p id="disclaimer_vpn_btns">';
            for (var d in t) r += '<a href="#" onclick="window.xv.disclaimer.vpn_display_closed(\'/change-country/' + t[d].flag + '?suggested=1\')"><span class="flag-small flag-' + t[d].flag + '"></span><span>' + t[d].name + "</span></a>";
            r += '</p><p id="disclaimer_vpn_another">Or select another country</p></div></div>', U(), y.write(r), y.documentElement ? (_ = y.documentElement.style.overflow, xv.dom.addClass(y.documentElement, "img-blured disclaimer-opened")) : y.body && (_ = y.body.style.overflow, xv.dom.addClass(y.body, "img-blured disclaimer-opened")), window.xv.dom && "undefined" != typeof xv.header && "undefined" != typeof xv.header.categories && "function" == typeof xv.header.categories.ctrypopup && window.xv.dom.addEventListener(y.getElementById("disclaimer_vpn_another"), "click", xv.header.categories.ctrypopup);
            var l = function() {
                y.getElementById("disclaimer_vpn_welcome").innerHTML = xv.i18n.__("legal.disclaimer.vpn_detect.welcome", {
                    "%site_name%": e.toUpperCase()
                }, "front", s), y.getElementById("disclaimer_vpn_select").innerHTML = xv.i18n.__("legal.disclaimer.vpn_detect.select", {}, "front", a) + " :", y.getElementById("disclaimer_vpn_another").innerHTML = xv.i18n.__("legal.disclaimer.vpn_detect.or_select_another", {}, "front", "Or select another country")
            };
            xv.i18n.getCatalog("front", l)
        }, b.vpn_display_closed = function(e) {
            window.xv.cookies.setLocal("disclaimer_vpn_display", "CLICKED", 864e5, "/"), y.getElementById("disclaimer_message").innerHTML = "<img src='" + xv.conf.domains["static"] + "/v3/img/skins/default/xv-inline-loader.gif' alt='loading' class='no-blur'/>", setTimeout(function() {
                window.xv.cookies.setLocal("disclaimer_vpn_display", "TIMEOUT", 864e5, "/"), window.location.href = e
            }, 5e3);
            var t = xv.utils.createRequestObject();
            t.open("POST", "/account/message-closed", !0), t.withCredentials = !0, t.responseType = "json", t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), t.onreadystatechange = function() {
                4 === t.readyState && 200 === t.status && t.response && t.response.result && (window.xv.cookies.setLocal("disclaimer_vpn_display", "OK", 864e5, "/"), window.location.href = e)
            }, t.send("msgid%5B%5D=disclr")
        }, b.showCookiesList = function(e) {
            if (e.classList.add("hidden"), this.bIsAgeWarning) {
                var t = Math.min(this.iMaxTextHeight, Math.max(this.iMinTextHeight, Math.round(parseInt(y.getElementById("disclaimer-over18").style.maxHeight) - 130)));
                y.getElementById("disclaimer-over18").style.maxHeight = t + "px"
            }
            y.getElementById("disclaimer-features").classList.remove("hidden")
        }, b.toggleFeatureDesc = function(e) {
            var t = e.closest(".feature__item"),
                n = y.getElementById("disclaimer-over18"),
                i = y.querySelector(".features__list"),
                o = y.querySelectorAll(".feature__item"),
                s = !1;
            t.querySelector(".feature__text").classList.toggle("hidden"), t.classList.toggle("item--open"), t.querySelector(".feature__cookies").classList.toggle("hidden"), this.resetToggleFeature(t, o);
            for (var a = 0; a < o.length; a++)
                if (o[a].classList.contains("item--open")) {
                    s = !0;
                    break
                } if (n) {
                null === n.getAttribute("data-height") && n.setAttribute("data-height", Math.round(parseInt(n.style.maxHeight) / 2).toString());
                var r = parseInt(n.getAttribute("data-height"));
                r >= this.iMinTextHeight && (n.style.maxHeight = (r * (s ? 1 : 2)).toString() + "px", i && (i.style.maxHeight = s ? (r + 100).toString() + "px" : ""))
            }
            i && i.scroll({
                top: 0
            })
        }, b.resetToggleFeature = function(e, t) {
            for (var n = 0; n < t.length; n++)
                if (e !== t[n]) {
                    var i = t[n].closest(".feature__item");
                    i.classList.contains("item--open") && (i.classList.remove("item--open"), i.querySelector(".feature__text").classList.add("hidden")), i.querySelector(".feature__cookies").classList.contains("hidden") || i.querySelector(".feature__cookies").classList.add("hidden")
                }
        }, b.setFeatures = function(e, t) {
            var n = y.querySelectorAll(".feature__input");
            if (0 === n.length) return !1;
            if (!this.bFeatureIsToggling) {
                this.bFeatureIsToggling = !0, this.bCookieBannerTriggered = !1;
                var i = [],
                    o = 0,
                    s = "close" === e || "reject-all" === e || "accept-all" === e,
                    a = "accept-all" === e;
                for (var r in n) "object" == typeof n[r] && (i.push({
                    sName: n[r].getAttribute("name"),
                    bChecked: s ? a : n[r].checked
                }), n[r].checked || o++);
                var d = !1;
                "close" === e && (A(I.ACTIONS.CONSENT_CLOSE), d = !0);
                var l = {
                    featureids: {}
                };
                for (var c in i) {
                    var u = i[c];
                    d || u.sName !== w.S_F_COOKIES_ADVERTISING || (A(u.bChecked ? I.ACTIONS.CONSENT_ACCEPT : I.ACTIONS.CONSENT_REJECT), d = !0, b.bAdvertisingCookieUpdated || b.callAdvertisingCallback(u.bChecked, !1)), l.featureids[u.sName] = u.bChecked ? 1 : 0
                }
                xv.cookies.setLocal("cksd", JSON.stringify({
                    choice: e,
                    features: i.reduce(function(e, t) {
                        return e[t.sName] = t.bChecked, e
                    }, {})
                }), 324e6, "/");
                var p = this;
                C("/account/feature-toggle", l, function(e) {
                    if (e && e.result)
                        for (var n in l.featureids) K(n, !!l.featureids[n]);
                    "string" == typeof t ? p.close_pop(null, null, t) : p.close_pop(), p.bFeatureIsToggling = !1
                }, function() {
                    p.bFeatureIsToggling = !1
                })
            }
        };
        var X = {
                TC_LOADED: "tcloaded",
                CMP_UI_SHOWN: "cmpuishown",
                USER_ACTION_COMPLETE: "useractioncomplete"
            },
            J = {
                STUB: "stub",
                LOADED: "loaded",
                ERROR: "error",
                VISIBLE: "visible",
                HIDDEN: "hidden",
                DISABLED: "disabled"
            },
            Z = [1, 2],
            Q = {
                gvlSpecificationVersion: 2,
                vendorListVersion: 224,
                tcfPolicyVersion: 2,
                lastUpdated: "2023-11-16T16:05:29Z",
                purposes: Z.reduce(function(e, t) {
                    return e.push({
                        id: t
                    }), e
                }, []),
                vendors: [{
                    id: 997
                }]
            };
        b.getConsentString = function(e) {
            e = "boolean" == typeof e && e;
            var t = new F;
            return t.setGlobalVendorList(Q), t.setCmpId(1), t.setCmpVersion(1), t.setConsentScreen(1), t.setConsentLanguage(this.getLang()), t.setPurposesAllowed(e ? Z : []), t.setVendorsAllowed([997]), t.getConsentString()
        };
        var ee = 0;
        b.createTCData = function() {
            return ee++, {
                tcString: "",
                listenerId: ee,
                eventStatus: X.TC_LOADED,
                cmpStatus: J.HIDDEN,
                gdprApplies: "boolean" != typeof xv.conf.dyn.gdpra || xv.conf.dyn.gdpra
            }
        }, b.addTCFListener = function(e, t) {
            var n = this.createTCData();
            this.oAdvertisingCallbacks[n.listenerId] = {
                iVersion: e,
                fnCallback: t,
                TCData: n
            }, this.bAdvertisingCallbackSet = !0, this.bIsOpen && this.bHasCookieManageInProcess || this.callAdvertisingCallback(w.IS_ENABLED(w.S_F_COOKIES_ADVERTISING), !0)
        }, b.removeTCFListener = function(e, t) {
            this.oAdvertisingCallbacks[e] ? delete this.oAdvertisingCallbacks[e] : t(!1)
        }, b.initAdvertisingCallback = function() {
            if (!this.bAdvertisingCallbackDisabled && !this.bAdvertisingCallbackInit) {
                var e = this;
                this.bAdvertisingCallbackInit = !0, this.oAdvertisingCallbacks = {}, window.__tcfapi = function(t, n, i, o) {
                    if ("function" == typeof i) switch (t) {
                        case "addEventListener":
                            e.addTCFListener(n, i);
                            break;
                        case "removeEventListener":
                            e.removeTCFListener(o, i);
                            break;
                        default:
                            return
                    }
                }
            }
        }, b.setPendingFeatureToggle = function(e, t, n) {
            for (var i in this.aFeaturesToToggle)
                if (this.aFeaturesToToggle[i].sId === e) return this.aFeaturesToToggle[i].bE = t, void(this.aFeaturesToToggle[i].bL = !!n);
            this.aFeaturesToToggle.push({
                sId: e,
                bE: t,
                bL: n
            })
        }, b.callNextPendingFeatureToggle = function() {
            if (this.aFeaturesToToggle.length > 0) {
                var e = this.aFeaturesToToggle.splice(0, 1)[0];
                $(e.sId, e.bE, e.bL)
            }
        }, b.callAdvertisingCallback = function(e, t) {
            if (!this.bAdvertisingCallbackDisabled && !this.bAdvertisingCookieUpdating && this.bAdvertisingCallbackSet) {
                this.bAdvertisingCookieUpdating = !0;
                var n = this;
                for (var i in this.oAdvertisingCallbacks) {
                    var o = this.oAdvertisingCallbacks[i];
                    t || (o.TCData.eventStatus = X.USER_ACTION_COMPLETE), o.TCData.tcString = this.getConsentString(e), o.fnCallback(o.TCData, !0),
                        function() {
                            n.bAdvertisingCookieUpdating = !1, n.bAdvertisingCookieUpdated = !0
                        }()
                }
            }
        }, b.initAdvertisingCallback(), b.EVENT = {
            CLOSE_POP: "disclaimerClosed"
        }, b.COOKIE_MANAGE_TYPE = {
            NEW_ONLY: "newOnly",
            UPDATE_ONLY: "updateOnly",
            SEPARATED: "separated",
            INTEGRATED: "integrated",
            NONE: "none"
        }, window.xv.disclaimer = b
    }(), window.fuckAdBlock = !1,
    function(e) {
        var t = function(t) {
            this._options = {
                checkOnLoad: !1,
                resetOnEnd: !1,
                loopCheckTime: 50,
                loopMaxNumber: 5,
                baitClass: "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",
                baitStyle: "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;",
                debug: !1
            }, this._var = {
                version: "3.2.1",
                bait: null,
                checking: !1,
                loop: null,
                loopNumber: 0,
                event: {
                    detected: [],
                    notDetected: []
                }
            }, t !== undefined && this.setOption(t);
            var n = this,
                i = function() {
                    setTimeout(function() {
                        !0 === n._options.checkOnLoad && (!0 === n._options.debug && n._log("onload->eventCallback", "A check loading is launched"), null === n._var.bait && n._creatBait(), setTimeout(function() {
                            n.check()
                        }, 1))
                    }, 1)
                };
            e.addEventListener !== undefined ? e.addEventListener("load", i, !1) : e.attachEvent("onload", i)
        };
        t.prototype._options = null, t.prototype._var = null, t.prototype._bait = null, t.prototype._log = function(e, t) {
            console.log("[FuckAdBlock][" + e + "] " + t)
        }, t.prototype.setOption = function(e, t) {
            if (t !== undefined) {
                var n = e;
                e = {}, e[n] = t
            }
            for (var i in e) this._options[i] = e[i], !0 === this._options.debug && this._log("setOption", 'The option "' + i + '" he was assigned to "' + e[i] + '"');
            return this
        }, t.prototype._creatBait = function() {
            var t = document.createElement("div");
            t.setAttribute("class", this._options.baitClass), t.setAttribute("style", this._options.baitStyle), this._var.bait = e.document.body.appendChild(t), this._var.bait.offsetParent, this._var.bait.offsetHeight, this._var.bait.offsetLeft, this._var.bait.offsetTop, this._var.bait.offsetWidth, this._var.bait.clientHeight, this._var.bait.clientWidth, !0 === this._options.debug && this._log("_creatBait", "Bait has been created")
        }, t.prototype._destroyBait = function() {
            e.document.body.removeChild(this._var.bait), this._var.bait = null, !0 === this._options.debug && this._log("_destroyBait", "Bait has been removed")
        }, t.prototype.check = function(e) {
            if (e === undefined && (e = !0), !0 === this._options.debug && this._log("check", "An audit was requested " + (!0 === e ? "with a" : "without") + " loop"), !0 === this._var.checking) return !0 === this._options.debug && this._log("check", "A check was canceled because there is already an ongoing"), !1;
            this._var.checking = !0, null === this._var.bait && this._creatBait();
            var t = this;
            return this._var.loopNumber = 0, !0 === e && (this._var.loop = setInterval(function() {
                t._checkBait(e)
            }, this._options.loopCheckTime)), setTimeout(function() {
                t._checkBait(e)
            }, 1), !0 === this._options.debug && this._log("check", "A check is in progress ..."), !0
        }, t.prototype._checkBait = function(t) {
            var n = !1;
            if (null === this._var.bait && this._creatBait(), null === e.document.body.getAttribute("abp") && null !== this._var.bait.offsetParent && 0 != this._var.bait.offsetHeight && 0 != this._var.bait.offsetLeft && 0 != this._var.bait.offsetTop && 0 != this._var.bait.offsetWidth && 0 != this._var.bait.clientHeight && 0 != this._var.bait.clientWidth || (n = !0), e.getComputedStyle !== undefined) {
                var i = e.getComputedStyle(this._var.bait, null);
                !i || "none" != i.getPropertyValue("display") && "hidden" != i.getPropertyValue("visibility") || (n = !0)
            }!0 === this._options.debug && this._log("_checkBait", "A check (" + (this._var.loopNumber + 1) + "/" + this._options.loopMaxNumber + " ~" + (1 + this._var.loopNumber * this._options.loopCheckTime) + "ms) was conducted and detection is " + (!0 === n ? "positive" : "negative")), !0 === t && ++this._var.loopNumber >= this._options.loopMaxNumber && this._stopLoop(), !0 === n ? (this._stopLoop(), this._destroyBait(), this.emitEvent(!0), !0 === t && (this._var.checking = !1)) : null !== this._var.loop && !1 !== t || (this._destroyBait(), this.emitEvent(!1), !0 === t && (this._var.checking = !1))
        }, t.prototype._stopLoop = function(e) {
            clearInterval(this._var.loop), this._var.loop = null, this._var.loopNumber = 0, !0 === this._options.debug && this._log("_stopLoop", "A loop has been stopped")
        }, t.prototype.emitEvent = function(e) {
            !0 === this._options.debug && this._log("emitEvent", "An event with a " + (!0 === e ? "positive" : "negative") + " detection was called");
            var t = this._var.event[!0 === e ? "detected" : "notDetected"];
            for (var n in t) !0 === this._options.debug && this._log("emitEvent", "Call function " + (parseInt(n) + 1) + "/" + t.length), t.hasOwnProperty(n) && t[n]();
            return !0 === this._options.resetOnEnd && this.clearEvent(), this
        }, t.prototype.clearEvent = function() {
            this._var.event.detected = [], this._var.event.notDetected = [], !0 === this._options.debug && this._log("clearEvent", "The event list has been cleared")
        }, t.prototype.on = function(e, t) {
            return this._var.event[!0 === e ? "detected" : "notDetected"].push(t), !0 === this._options.debug && this._log("on", 'A type of event "' + (!0 === e ? "detected" : "notDetected") + '" was added'), this
        }, t.prototype.onDetected = function(e) {
            return this.on(!0, e)
        }, t.prototype.onNotDetected = function(e) {
            return this.on(!1, e)
        }, e.FuckAdBlock = t, e.fuckAdBlock === undefined && (e.fuckAdBlock = new t({
            checkOnLoad: !0,
            resetOnEnd: !0
        }))
    }(window),
    function() {
        var e = function() {
            this.called = !1, this.detected_called = !1, this.load_delayed = !1, this.checked = !1
        };
        e.prototype = {
            detected: function() {
                if (!this.detected_called) {
                    for (var e = xv.i18n.__("misc.adblock_message" + ("xnxx" === xv.sda.manager.skin ? "_xnxx" : ""), {
                            "%link_start%": '<a href="https://www.xvideos.red" style="box-shadow:none;display:inline;position:static;width:auto;">',
                            "%link_end%": "</a>",
                            "%strong%": "<strong>",
                            "%end_strong%": "</strong>"
                        }, null, "xnxx" === xv.sda.manager.skin ? "XNXX relies on ads to exist. Please disable your ad-blocker." : "Try %link_start%XVIDEOS.RED%link_end% for free. %strong%Ad-free%end_strong% experience with extra content and features."), t = "complete" === document.readyState, n = 0; n < xv.sda.manager.banners.banners.length; n++) {
                        var i = xv.sda.manager.banners.banners[n],
                            o = i.container;
                        if ("string" == typeof o && (o = document.getElementById(o)), o && "object" == typeof o) o.innerHTML = e, o.style.textAlign = "center", o.style.fontWeight = "bold", o.style.fontSize = "16px";
                        else if (!this.load_delayed && !t) return void(this.load_delayed = !0);
                        if ("undefined" != typeof i.mobile_container)
                            if (o = i.mobile_container, "string" == typeof o && (o = document.getElementById(o)), o && "object" == typeof o) o.innerHTML = e, o.style.textAlign = "center", o.style.fontWeight = "bold", o.style.fontSize = "16px";
                            else if (!this.load_delayed && !t) return void(this.load_delayed = !0)
                    }
                    var s = document.getElementById("header");
                    if (!s) return this.load_delayed ? void(this.detected_called = !0) : void(this.load_delayed = !0);
                    this.detected_called = !0;
                    var a, r = document.getElementById("x-fda-messages");
                    if (r) {
                        for (var d = xv.dom.getChildren(r), l = 0; l < d.length; l++)
                            if (xv.dom.hasClass(d[l], "inner")) {
                                a = d[l];
                                break
                            }
                    } else r = document.createElement("div"), r.id = "x-fda-messages", s.appendChild(r);
                    a || (a = document.createElement("div"), a.className = "inner", r.appendChild(a));
                    var c = document.createElement("div");
                    c.className = "x-message x-message-info", a.appendChild(c);
                    var u = document.createElement("div");
                    u.className = "content", c.appendChild(u);
                    var p = document.createElement("p");
                    p.innerHTML = e, u.appendChild(p)
                }
            },
            blocked: function() {
                if (!this.called && (this.called = !0, "object" == typeof xv.thumbs && "object" == typeof xv.thumbs.mgr && (xv.thumbs.mgr.checkOrSend(!0), "object" == typeof html5player && "function" == typeof html5player.loadingAdError && html5player.loadingAdError()), "default" === xv.sda.manager.skin || "xnxx" === xv.sda.manager.skin))
                    if ("function" == typeof FuckAdBlock) {
                        var e = this;
                        window.fuckAdBlock = new FuckAdBlock({
                            checkOnLoad: !0,
                            resetOnEnd: !0
                        }), window.fuckAdBlock.onDetected(function() {
                            e.checked = !0, e.detected()
                        }), window.fuckAdBlock.onNotDetected(function() {
                            e.checked = !0
                        })
                    } else this.detected()
            }
        }, "object" != typeof xv.sda && (xv.sda = {}), xv.sda.adblocked = new e
    }(),
    function() {
        xv.log.debug_("%c PopUnder --- file start", "color:yellow;");
        var e = ["ignore-popunder", "disclaimer_background", "disclaimer_message", "exo-ad-ins-container", "video-sponsor-links", "sheer-sponsor-link", "video-ad", "video-ad-support-mobile", "videoad-click", "remove-ads", "xv-tabs", "exo-native-widget-outer-container", "related-content__btns", "x-popup", "live-cams", "nutaku-games", "mobile-slogan-sexshop"];
        setInterval(function() {
            var e = document.querySelector(".head__menu-line__main-menu__lvl1 .icon-f.icf-hearts-o");
            e && e.closest(".head__menu-line__main-menu__lvl1").classList.add("ignore-popunder")
        }, 1e3);
        var t = function() {
            if (xv.log.debug_("%c PopUnder --- popup init", "color:yellow;"), "object" != typeof window.xv || "object" != typeof window.xv.conf || "object" != typeof window.xv.conf.dyn || "object" != typeof window.xv.conf.dyn.ads) return void xv.log.debug_("%c PopUnder --- no config", "color:red;");
            var t = window.xv.conf.dyn;
            if (!t.pps) return void xv.log.debug_("%c PopUnder --- popup not enabled", "color:red;");
            if (t.is_robot) return void xv.log.debug_("%c PopUnder --- no popup for robot", "color:red;");
            var n = "main" === xv.conf.data.action;
            n && xv.log.debug_("%c PopUnder --- homepage", "color:yellow;");
            var i = t.ads,
                o = t.is_desktop || t.is_tablet,
                s = 4,
                a = e.join(",");
            xv.log.debug_("%c PopUnder remote script enabled --- ", "color:green;");
            var r = o ? 3614151 : 3614329,
                d = i.exo_tracker || "0",
                l = i.exo_tracker_sub2 || "0",
                c = i.exo_tracker_sub3 || "0",
                u = "";
            "default" === window.xv.conf.sitename ? u = "exoxvideostargetting" : "xnxx" === window.xv.conf.sitename && (u = "exoxnxxtargetting"), "string" == typeof i.categories && i.categories.length > 0 && (u += "," + i.categories), "string" == typeof i.keywords && i.keywords.length > 0 && (u += "," + i.keywords), n && (s = 2, a = "thumb-block");
            var p = {
                ads_host: "a.OPOXV.COM",
                syndication_host: "s.OPOXV.COM",
                idzone: r,
                popup_fallback: !0,
                popup_force: !1,
                chrome_enabled: !1,
                new_tab: !1,
                frequency_period: 720,
                frequency_count: 1,
                trigger_method: s,
                trigger_class: a,
                trigger_delay: 0,
                only_inline: !1,
                tags: u,
                sub: d,
                sub2: l,
                sub3: c,
                capping_enabled: !0
            };
            xv.log.debug_("%c PopUnder config --- ", "color:yellow;", p), xv.sda.pp.init(p)
        };
        "function" == typeof document.addEventListener ? document.addEventListener("DOMContentLoaded", t) : window.attachEvent("onload", t);
        var n = function(e) {
            window.document.querySelectorAll || (document.querySelectorAll = document.body.querySelectorAll = Object.querySelectorAll = function(e, t, n, i, o) {
                var s = document,
                    a = s.createStyleSheet();
                for (o = s.all, t = [], n = (e = e.replace(/\[for\b/gi, "[htmlFor").split(",")).length; n--;) {
                    for (a.addRule(e[n], "k:v"), i = o.length; i--;) o[i].currentStyle.k && t.push(o[i]);
                    a.removeRule(0)
                }
                return t
            });
            var t = {
                version: 2,
                cookie_name: "",
                url: "",
                config: {},
                open_count: 0,
                top: null,
                browser: null,
                venor_loaded: !1,
                venor: !1,
                configTpl: {
                    ads_host: "",
                    syndication_host: "",
                    idzone: "",
                    frequency_period: 720,
                    frequency_count: 1,
                    trigger_method: 1,
                    trigger_class: "",
                    popup_force: !1,
                    popup_fallback: !1,
                    chrome_enabled: !0,
                    new_tab: !1,
                    cat: "",
                    tags: "",
                    el: "",
                    sub: "",
                    sub2: "",
                    sub3: "",
                    only_inline: !1,
                    trigger_delay: 0,
                    capping_enabled: !0,
                    cookieconsent: !0
                },
                init: function(e) {
                    if (void 0 !== e.idzone && e.idzone) {
                        void 0 === e.customTargeting && (e.customTargeting = []), window.customTargeting = e.customTargeting || null;
                        var t = Object.keys(e.customTargeting).filter(function(e) {
                            return e.search("ex_") >= 0
                        });
                        for (var n in t.length && t.forEach(function(e) {
                                return this.configTpl[e] = null
                            }.bind(this)), this.configTpl) Object.prototype.hasOwnProperty.call(this.configTpl, n) && (void 0 !== e[n] ? this.config[n] = e[n] : this.config[n] = this.configTpl[n]);
                        void 0 !== this.config.idzone && "" !== this.config.idzone && (!0 !== this.config.only_inline && this.loadHosted(), this.addEventToElement(window, "load", this.preparePop))
                    }
                },
                getCountFromCookie: function() {
                    if (!this.config.cookieconsent) return 0;
                    var e = t.getCookie(t.cookie_name),
                        n = void 0 === e ? 0 : parseInt(e);
                    return isNaN(n) && (n = 0), n
                },
                getLastOpenedTimeFromCookie: function() {
                    var e = t.getCookie(t.cookie_name),
                        n = null;
                    if (void 0 !== e) {
                        var i = e.split(";")[1];
                        n = i > 0 ? parseInt(i) : 0
                    }
                    return isNaN(n) && (n = null), n
                },
                shouldShow: function() {
                    if (!t.config.capping_enabled) return 0 === t.open_count;
                    if (t.open_count >= t.config.frequency_count) return !1;
                    var e = t.getCountFromCookie(),
                        n = t.getLastOpenedTimeFromCookie(),
                        i = Math.floor(Date.now() / 1e3),
                        o = n + t.config.trigger_delay;
                    return !(n && o > i || (t.open_count = e, e >= t.config.frequency_count))
                },
                venorShouldShow: function() {
                    return t.venor_loaded && "0" === t.venor
                },
                setAsOpened: function(e) {
                    var n = e ? e.target || e.srcElement : null,
                        i = {
                            id: "",
                            tagName: "",
                            classes: "",
                            text: "",
                            href: "",
                            elm: ""
                        };
                    void 0 !== n && null != n && (i = {
                        id: void 0 !== n.id && null != n.id ? n.id : "",
                        tagName: void 0 !== n.tagName && null != n.tagName ? n.tagName : "",
                        classes: void 0 !== n.classList && null != n.classList ? n.classList : "",
                        text: void 0 !== n.outerText && null != n.outerText ? n.outerText : "",
                        href: void 0 !== n.href && null != n.href ? n.href : "",
                        elm: n
                    });
                    var o = new CustomEvent("creativeDisplayed-" + t.config.idzone, {
                        detail: i
                    });
                    if (document.dispatchEvent(o), t.config.capping_enabled) {
                        var s = 1;
                        s = 0 !== t.open_count ? t.open_count + 1 : t.getCountFromCookie() + 1;
                        var a = Math.floor(Date.now() / 1e3);
                        t.config.cookieconsent && t.setCookie(t.cookie_name, s + ";" + a, t.config.frequency_period)
                    } else ++t.open_count
                },
                loadHosted: function() {
                    var e = document.createElement("script");
                    for (var t in e.type = "application/javascript", e.async = !0, e.src = "//" + this.config.ads_host + "/popunder1000.js", e.id = "popmagicldr", this.config) Object.prototype.hasOwnProperty.call(this.config, t) && "ads_host" !== t && "syndication_host" !== t && e.setAttribute("data-exo-" + t, this.config[t]);
                    var n = document.getElementsByTagName("body").item(0);
                    n.firstChild ? n.insertBefore(e, n.firstChild) : n.appendChild(e)
                },
                preparePop: function() {
                    if ("object" != typeof exoJsPop101 || !Object.prototype.hasOwnProperty.call(exoJsPop101, "add")) {
                        if (t.top = self, t.top !== self) try {
                            top.document.location.toString() && (t.top = top)
                        } catch (e) {}
                        if (t.cookie_name = "zone-cap-" + t.config.idzone, t.config.capping_enabled || (document.cookie = t.cookie_name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/"), t.shouldShow()) {
                            var e = new XMLHttpRequest;
                            e.onreadystatechange = function() {
                                e.readyState == XMLHttpRequest.DONE && (t.venor_loaded = !0, 200 == e.status ? t.venor = e.responseText : t.venor = "0")
                            };
                            var n = "https:" !== document.location.protocol && "http:" !== document.location.protocol ? "https:" : document.location.protocol;
                            e.open("GET", n + "//" + t.config.syndication_host + "/venor.php", !0);
                            try {
                                e.send()
                            } catch (e) {
                                t.venor_loaded = !0
                            }
                        }
                        if (t.buildUrl(), t.browser = t.browserDetector.getBrowserInfo(), t.config.chrome_enabled || !t.browser.isChrome) {
                            var i = t.getPopMethod(t.browser);
                            t.addEvent("click", i)
                        }
                    }
                },
                getPopMethod: function(e) {
                    return t.config.popup_force || t.config.popup_fallback && e.isChrome && e.version >= 68 && !e.isMobile ? t.methods.popup : e.isMobile ? t.methods["default"] : e.isChrome ? t.methods.chromeTab : t.methods["default"]
                },
                buildUrl: function() {
                    var e, t = "https:" !== document.location.protocol && "http:" !== document.location.protocol ? "https:" : document.location.protocol,
                        n = top === self ? document.URL : document.referrer,
                        i = {
                            type: "inline",
                            name: "popMagic",
                            ver: this.version
                        },
                        o = "";
                    customTargeting && Object.keys(customTargeting).length && ("object" == typeof customTargeting ? Object.keys(customTargeting) : customTargeting).forEach(function(t) {
                        "object" == typeof customTargeting ? e = customTargeting[t] : Array.isArray(customTargeting) && (e = scriptEl.getAttribute(t));
                        var n = t.replace("data-exo-", "");
                        o += "&" + n + "=" + e
                    }), this.url = t + "//" + this.config.syndication_host + "/splash.php?cat=" + this.config.cat + "&idzone=" + this.config.idzone + "&type=8&p=" + encodeURIComponent(n) + "&sub=" + this.config.sub + ("" !== this.config.sub2 ? "&sub2=" + this.config.sub2 : "") + ("" !== this.config.sub3 ? "&sub3=" + this.config.sub3 : "") + "&block=1&el=" + this.config.el + "&tags=" + this.config.tags + "&cookieconsent=" + this.config.cookieconsent + "&scr_info=" + function(e) {
                        var t = e.type + "|" + e.name + "|" + e.ver;
                        return encodeURIComponent(btoa(t))
                    }(i) + o
                },
                addEventToElement: function(e, t, n) {
                    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? (e["e" + t + n] = n, e[t + n] = function() {
                        e["e" + t + n](window.event)
                    }, e.attachEvent("on" + t, e[t + n])) : e["on" + t] = e["e" + t + n]
                },
                getTriggerClasses: function() {
                    var e, n = [];
                    e = -1 === t.config.trigger_class.indexOf(",") ? t.config.trigger_class.split(" ") : t.config.trigger_class.replace(/\s/g, "").split(",");
                    for (var i = 0; i < e.length; i++) "" !== e[i] && n.push("." + e[i]);
                    return n
                },
                addEvent: function(e, n) {
                    var o;
                    if ("3" != t.config.trigger_method)
                        if ("2" != t.config.trigger_method || "" == t.config.trigger_method)
                            if ("4" != t.config.trigger_method || "" == t.config.trigger_method) t.addEventToElement(document, e, n);
                            else {
                                var s = t.getTriggerClasses();
                                t.addEventToElement(document, e, function(e) {
                                    s.some(function(t) {
                                        return null !== e.target.closest(t)
                                    }) || n.call(e.target, e)
                                })
                            }
                    else {
                        var a = t.getTriggerClasses();
                        for (o = document.querySelectorAll(a.join(", ")), i = 0; i < o.length; i++) t.addEventToElement(o[i], e, n)
                    } else
                        for (o = document.querySelectorAll("a"), i = 0; i < o.length; i++) t.addEventToElement(o[i], e, n)
                },
                setCookie: function(e, t, n) {
                    if (!this.config.cookieconsent) return !1;
                    n = parseInt(n, 10);
                    var i = new Date;
                    i.setMinutes(i.getMinutes() + parseInt(n));
                    var o = encodeURIComponent(t) + "; expires=" + i.toUTCString() + "; path=/";
                    document.cookie = e + "=" + o
                },
                getCookie: function(e) {
                    if (!this.config.cookieconsent) return !1;
                    var t, n, i, o = document.cookie.split(";");
                    for (t = 0; t < o.length; t++)
                        if (n = o[t].substr(0, o[t].indexOf("=")), i = o[t].substr(o[t].indexOf("=") + 1), (n = n.replace(/^\s+|\s+$/g, "")) === e) return decodeURIComponent(i)
                },
                randStr: function(e, t) {
                    for (var n = "", i = t || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", o = 0; o < e; o++) n += i.charAt(Math.floor(Math.random() * i.length));
                    return n
                },
                isValidUserEvent: function(e) {
                    return !!("isTrusted" in e && e.isTrusted && "ie" !== t.browser.name && "safari" !== t.browser.name) || 0 != e.screenX && 0 != e.screenY
                },
                isValidHref: function(e) {
                    return void 0 !== e && "" != e && !/\s?javascript\s?:/i.test(e)
                },
                findLinkToOpen: function(e) {
                    var n = e,
                        i = !1;
                    try {
                        for (var o = 0; o < 20 && !n.getAttribute("href") && n !== document && "html" !== n.nodeName.toLowerCase();) n = n.parentNode, o++;
                        var s = n.getAttribute("target");
                        s && -1 !== s.indexOf("_blank") || (i = n.getAttribute("href"))
                    } catch (e) {}
                    return t.isValidHref(i) || (i = !1), i || window.location.href
                },
                getPuId: function() {
                    return "ok_" + Math.floor(89999999 * Math.random() + 1e7)
                },
                browserDetector: {
                    browserDefinitions: [
                        ["firefox", /Firefox\/([0-9.]+)(?:\s|$)/],
                        ["opera", /Opera\/([0-9.]+)(?:\s|$)/],
                        ["opera", /OPR\/([0-9.]+)(:?\s|$)$/],
                        ["edge", /Edg(?:e|)\/([0-9._]+)/],
                        ["ie", /Trident\/7\.0.*rv:([0-9.]+)\).*Gecko$/],
                        ["ie", /MSIE\s([0-9.]+);.*Trident\/[4-7].0/],
                        ["ie", /MSIE\s(7\.0)/],
                        ["safari", /Version\/([0-9._]+).*Safari/],
                        ["chrome", /(?!Chrom.*Edg(?:e|))Chrom(?:e|ium)\/([0-9.]+)(:?\s|$)/],
                        ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9.]+)(:?\s|$)/],
                        ["bb10", /BB10;\sTouch.*Version\/([0-9.]+)/],
                        ["android", /Android\s([0-9.]+)/],
                        ["ios", /Version\/([0-9._]+).*Mobile.*Safari.*/],
                        ["yandexbrowser", /YaBrowser\/([0-9._]+)/],
                        ["crios", /CriOS\/([0-9.]+)(:?\s|$)/]
                    ],
                    isChromeOrChromium: function() {
                        var e = window.navigator;
                        if (void 0 !== e.userAgentData) {
                            var t = e.userAgentData.brands,
                                n = t.some(function(e) {
                                    return "Google Chrome" === e.brand
                                }),
                                i = t.some(function(e) {
                                    return "Chromium" === e.brand
                                }) && 2 === t.length;
                            return n || i
                        }
                        var o = !!window.chrome,
                            s = e.vendor,
                            a = e.userAgent.toLowerCase();
                        if (-1 !== a.indexOf("crios")) return !0;
                        var r = -1 !== a.indexOf("edg"),
                            d = !!window.opr || -1 !== a.indexOf("opr"),
                            l = !(!e.brave || !e.brave.isBrave),
                            c = -1 !== a.indexOf("vivaldi"),
                            u = -1 !== a.indexOf("yabrowser");
                        return o && "Google Inc." === s && !r && !d && !l && !c && !u
                    },
                    getBrowserInfo: function() {
                        var e = window.navigator.userAgent,
                            t = {
                                name: "other",
                                version: "1.0",
                                versionNumber: 1,
                                isChrome: this.isChromeOrChromium(),
                                isMobile: !!e.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WebOS|Windows Phone/i)
                            };
                        for (var n in this.browserDefinitions) {
                            var i = this.browserDefinitions[n];
                            if (i[1].test(e)) {
                                var o = i[1].exec(e),
                                    s = o && o[1].split(/[._]/).slice(0, 3),
                                    a = Array.prototype.slice.call(s, 1).join("") || "0";
                                s && s.length < 3 && Array.prototype.push.apply(s, 1 === s.length ? [0, 0] : [0]), t.name = i[0], t.version = s.join("."), t.versionNumber = parseFloat(s[0] + "." + a);
                                break
                            }
                        }
                        return t
                    }
                },
                methods: {
                    "default": function(e) {
                        if (!t.shouldShow() || !t.venorShouldShow() || !t.isValidUserEvent(e)) return !0;
                        var n = e.target || e.srcElement,
                            i = t.findLinkToOpen(n);
                        return window.open(i, "_blank"), t.setAsOpened(e), t.top.document.location = t.url, void 0 !== e.preventDefault && (e.preventDefault(), e.stopPropagation()), !0
                    },
                    chromeTab: function(e) {
                        if (!t.shouldShow() || !t.venorShouldShow() || !t.isValidUserEvent(e)) return !0;
                        if (void 0 === e.preventDefault) return !0;
                        e.preventDefault(), e.stopPropagation();
                        var n = top.window.document.createElement("a"),
                            i = e.target || e.srcElement;
                        n.href = t.findLinkToOpen(i), document.getElementsByTagName("body")[0].appendChild(n);
                        var o = new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0,
                            view: window,
                            screenX: 0,
                            screenY: 0,
                            clientX: 0,
                            clientY: 0,
                            ctrlKey: !0,
                            altKey: !1,
                            shiftKey: !1,
                            metaKey: !0,
                            button: 0
                        });
                        o.preventDefault = void 0, n.dispatchEvent(o), n.parentNode.removeChild(n), window.open(t.url, "_self"), t.setAsOpened(e)
                    },
                    popup: function(e) {
                        if (!t.shouldShow() || !t.venorShouldShow() || !t.isValidUserEvent(e)) return !0;
                        var n = "";
                        if (t.config.popup_fallback && !t.config.popup_force) {
                            var i = Math.max(Math.round(.8 * window.innerHeight), 300);
                            n = "menubar=1,resizable=1,width=" + Math.max(Math.round(.7 * window.innerWidth), 300) + ",height=" + i + ",top=" + (window.screenY + 100) + ",left=" + (window.screenX + 100)
                        }
                        var o = document.location.href,
                            s = window.open(o, t.getPuId(), n);
                        setTimeout(function() {
                            s.location.href = t.url
                        }, 200), t.setAsOpened(e), void 0 !== e.preventDefault && (e.preventDefault(), e.stopPropagation())
                    }
                }
            };
            t.addEventToNewElement = function(e) {
                if (!t.browser) return void console.error("pp not initialized");
                xv.log.debug_("%c PopUnder --- addEventToNewElement", "color:yellow;", e), t.config.trigger_class = e;
                var n = t.getPopMethod(t.browser);
                t.addEvent("click", n)
            }, xv.sda.pp = xv.sda.pp || {}, xv.sda.pp.add = t.addEventToNewElement, xv.log.debug_("%c PopUnder --- exo script loaded", "color:green;"), t.init(e)
        };
        xv.sda.pp = xv.sda.pp || {}, xv.sda.pp.init = n;
        var o = window.addEventListener;
        window.addEventListener = function() {
            if ("load" === arguments[0] && arguments[1] && "preparePop" === arguments[1].name) {
                xv.log.debug_("%c PopUnder --- addEventListener to preparePop : apply manually", arguments);
                var e = arguments;
                return void window.addEventListener("load", function() {
                    e[1]()
                })
            }
            o.apply(this, arguments)
        }
    }(),
    function() {
        var e = function() {
                var e = xv.dom.getViewportWidth();
                return e > 0 ? e : 1024
            },
            t = function() {
                var e = xv.dom.getViewportHeight();
                return e > 0 ? e : 768
            },
            n = ["mobile", "mobilehoriz", "desktop"],
            i = !1,
            o = function(e) {
                if (this.is_valid = !1, "object" == typeof e) {
                    if (this.type = e.type, "interstitial" !== this.type && "interstitialfull" !== this.type) {
                        if (!e.div_id) return void console.error("Invalid banner: ", e);
                        if (this.container = this.checkContainer(e.div_id, !0), !this.container) return
                    }
                    if (!(e.nb_ban <= 0)) {
                        this.initContainer(), this.is_valid = !0, this.mobile_container = e.mobile_div || !1, this.nb_banners = e.nb_ban, this.area_tag = e.area_tag || !1, this.min_ratio = e.min_ratio, this.max_ratio = e.max_ratio, "number" == typeof this.min_ratio && this.min_ratio > 0 && (this.minr = Math.round(100 * this.min_ratio) / 100), "number" == typeof this.max_ratio && this.max_ratio > 0 && (this.maxr = Math.round(100 * this.max_ratio) / 100), this.mobile = e.mobile || !1, this.mobilehoriz = e.mobilehoriz || !1, this.desktop = e.desktop || !1, this.mobile || this.mobilehoriz || this.desktop || (this.mobile = !0, this.desktop = !0), this.is_displayed = !1, this.is_loading = !1, this.is_loaded = !1, this.is_viewed = !1, this.to_load = [];
                        for (var t = 0; t < n.length; t++) this[n[t]] && this.to_load.push(n[t]);
                        this.miss_url = !1, this.containers = [], this.sContainerId = "", this.remove_ads_nodes = [], this.ads_nodes = [], this.cloned_ads_nodes = [], this.$backupContainer = null, this.aContainersInRelated = [], this.related_ad = 0, this.related_node_idx = !1
                    }
                }
            };
        o.prototype = {
            checkContainer: function(e, t) {
                var n = document.getElementById(e);
                return n || e
            },
            initContainer: function() {
                this.container.innerHTML = ""
            },
            isCallOnView: function() {
                return "footer" === this.type || !("mobilerectangle" !== this.type || !this.area_tag || -1 === this.area_tag.indexOf("footer") || "hometopfooter" === this.area_tag)
            },
            canLoad: function(n) {
                if (this.is_loading || this.is_loaded) return !1;
                if (null === n.vwidth && (n.vwidth = e()), null === n.vratio && (this.minr || this.maxr || this.mobilehoriz) && (n.vratio = n.vwidth / t()), this.minr && n.vratio < this.minr) return !1;
                if (this.maxr && n.vratio > this.maxr) return !1;
                for (var i = 0; i < this.to_load.length; i++) switch (this.to_load[i]) {
                    case "mobile":
                        if (n.vwidth <= n.mobile_width) return !0;
                        break;
                    case "mobilehoriz":
                        if (xv.conf.dyn.is_smartphone && (n.vwidth >= 420 || n.vratio >= 1)) return !0;
                        break;
                    case "desktop":
                        if (n.vwidth > n.mobile_width) return !0;
                        break;
                    default:
                        console.error("Unknown device: " + device)
                }
                return !1
            },
            serialize: function() {
                return this.is_loading = !0, this.area_tag ? this.type + "-" + this.area_tag + "-" + this.nb_banners : this.type + "-" + this.nb_banners
            },
            display: function(e, t) {
                if (this.is_loading = !1, this.is_loaded = !0, e ? this.banners_data = e : e = this.banners_data, "video" !== this.type && this.getContainers(t))
                    if (this.is_displayed = !0, this.isCallOnView() || this.setIsViewed(!0), 0 !== e.length) {
                        for (var n = 0; n < e.length; n++)
                            for (var i = 0; i < this.containers.length; i++) this.createAdNodes(this.containers[i], e[n]);
                        for (var o = 0; o < this.remove_ads_nodes.length; o++) {
                            var s = document.createElement("div");
                            s.className = "remove-ads";
                            var a = document.createElement("a");
                            a.href = xv.conf.dyn.premium_domain + window.location.pathname + "?pmsc=ad";
                            var r = document.createElement("span");
                            r.className = "remove-ads-link", r.innerHTML = xv.i18n.__("misc.remove_ads");
                            var d = document.createElement("span");
                            d.className = "icon-f icf-close", a.appendChild(r), a.appendChild(document.createTextNode(" ")), a.appendChild(d), s.appendChild(a), this.remove_ads_nodes[o].appendChild(s)
                        }
                        var l, c = this;
                        if (!this.hasCopyInRelated()) return l = function() {
                            c.resizeAds()
                        }, this.resizeAds(), void xv.dom.addEventListener(window, "resize", l);
                        if ("desktop" === xv.sda.manager.device_type) {
                            var u = "object" == typeof window.xvideos && "object" == typeof window.xvideos.player ? window.xvideos.player : null;
                            if (u && u.isEnlarged() || this.moveRelatedNodes(0), u) {
                                var p = !1;
                                l = function() {
                                    p ? c.moveRelatedNodes() : c.moveRelatedNodes(0), c.resizeAds()
                                }, u.addOnSizeChangeEventHandler(function(e) {
                                    p = e, l()
                                })
                            }
                        } else this.moveRelatedNodes(), l = function() {
                            c.moveRelatedNodes(), c.resizeAds()
                        };
                        this.resizeAds(), xv.dom.addEventListener(window, "resize", l), xv.dom.addEventListener(document.body, "settings_nb_thumbs_changed", l)
                    } else {
                        if ("native" === this.type) return;
                        "square" !== this.type && "playersiderectangle" !== this.type || "object" != typeof html5player || "function" != typeof html5player.setNoSquareAd || html5player.setNoSquareAd();
                        var m = !1,
                            f = !0;
                        "footer" === this.type ? m = !0 : "square" !== this.type && "playersiderectangle" !== this.type && ("mobilerectangle" !== this.type || this.area_tag && -1 !== this.area_tag.indexOf("footer") && "hometopfooter" !== this.area_tag) || (f = !1);
                        for (var h = 0; h < this.containers.length; h++) {
                            var g = this.containers[h].parentNode;
                            if (g) {
                                if (f && ("footer" !== this.type || this.containers[h] !== this.mobile_container)) {
                                    var v = xv.dom.getNextSibling(this.containers[h]);
                                    v && g.removeChild(v)
                                }
                                if (m) {
                                    for (var b = xv.dom.getChildren(this.containers[h], !1), y = 0; y < b.length; y++) this.containers[h].removeChild(b[y]);
                                    this.containers[h].style.border = "none", this.containers[h].style.margin = "0", this.containers[h].style.padding = "0", this.containers[h].style.heigth = "auto"
                                } else g.removeChild(this.containers[h])
                            }
                        }
                    }
            },
            isContainerMobileView: function() {
                return e() < 480
            },
            getContainers: function(e) {
                if (this.containers = [], this.remove_ads_nodes = [], "string" == typeof this.container) {
                    var t = this.container;
                    if (this.container = this.checkContainer(this.container, e), !this.container || "string" == typeof this.container) return !e && (console.error("Div " + this.container + " is missing"), this.is_displayed = !0, this.isCallOnView() || this.setIsViewed(!0), !1);
                    this.sContainerId = t, xv.sda.manager.ads_displayed || "native" === this.type || (this.container.style.display = "none")
                } else this.container && this.container.id && (this.sContainerId = this.container.id);
                if (this.mobile_container && this.isContainerMobileView()) {
                    if ("string" == typeof this.mobile_container) {
                        var n = document.getElementById(this.mobile_container);
                        if (n) xv.sda.manager.ads_displayed || (n.style.display = "none");
                        else {
                            if (e) return !1;
                            console.error("Div " + this.mobile_container + " is missing")
                        }
                    }
                    n && (this.mobile_container = null, this.container = n)
                }
                return this.containers.push(this.container), !xv.sda.manager.has_remove_ads || "square" !== this.type && "playersiderectangle" !== this.type && "footer" !== this.type && "mobilerectangle" !== this.type || ("square" !== this.type && "playersiderectangle" !== this.type && ("mobilerectangle" !== this.type || this.area_tag && -1 !== this.area_tag.indexOf("footer") && "hometopfooter" !== this.area_tag) || this.remove_ads_nodes.push(this.container), this.mobile_container && this.remove_ads_nodes.push(this.mobile_container)), this.containers
            },
            hasCopyInRelated: function() {
                return ("default" === xv.sda.manager.skin || "xnxx" === xv.sda.manager.skin) && (!!xv.sda.manager.is_video_page && (!("square" !== this.type && "playersiderectangle" !== this.type || "video-right" !== this.sContainerId && "video-right" !== this.container.id || "desktop" !== xv.sda.manager.device_type) || "mobilerectangle" === this.type && ("ad-footer" === this.sContainerId || "ad-footer" === this.container.id) && "desktop" !== xv.sda.manager.device_type))
            },
            createAdNodes: function(e, t) {
                if ("mobilerectangle" === this.type) {
                    var n = document.getElementById("ad-footer");
                    this.$removeAdsBlock = n ? xv.dom.getNextSibling(n) : null
                }
                if (this.isCustomDisplay(t)) return void this.setCustomDisplay(t);
                var i = this.getAdNode(t.banner, t.url, this.mobilehoriz ? "ad-mobilehoriz" : "");
                if (e)
                    for (var o = 0; o < i.length; o++) xv.dom.addClass(e, "ad-" + this.type), xv.dom.addClass(e, "ad-support-" + xv.sda.manager.device_type), e.appendChild(i[o]), xv.dom.addClass(e, "is-filled");
                this.ads_nodes.push(i)
            },
            getRelatedDisplayedThumb: function() {
                var t = e();
                return t < 480 ? "desktop" === xv.sda.manager.device_type ? 2 : 5 : t < 768 ? "desktop" === xv.sda.manager.device_type ? 3 : 8 : t < 992 ? "desktop" === xv.sda.manager.device_type ? 4 : 11 : t < 1440 || "xnxx" === xv.sda.manager.skin ? "desktop" === xv.sda.manager.device_type ? 5 : 14 : "desktop" === xv.sda.manager.device_type ? 6 : 11
            },
            moveRelatedNodes: function(e) {
                "number" != typeof e && (e = this.getRelatedDisplayedThumb());
                var t = this;
                if (e === this.related_node_idx) return void(e > 0 && function() {
                    t.resizeRelatedAd()
                }());
                this.related_node_idx = e;
                var n = document.getElementById("related-videos");
                if (0 === e) {
                    if (this.$backupContainer) {
                        for (var i = 0; i < this.ads_nodes.length; i++)
                            for (var o = 0; o < this.ads_nodes[i].length; o++) {
                                var s = this.ads_nodes[i][o];
                                "function" == typeof this.$backupContainer.prepend ? this.$backupContainer.prepend(s) : "function" == typeof this.$backupContainer.appendChild && this.$backupContainer.appendChild(s)
                            }
                        this.container = this.$backupContainer, this.$backupContainer = null
                    }
                    for (; this.aContainersInRelated.length;) {
                        var a = this.aContainersInRelated.shift();
                        a.parentNode && a.parentNode.removeChild(a)
                    }
                    return n && (xv.dom.removeClass(n, "with-ad"), "desktop" !== xv.sda.manager.device_type && (xv.dom.removeClass(n, "with-footer-ad"), xv.dom.removeClass(document.getElementById("ad-footer"), "with-related-ad"))), void setTimeout(function() {
                        t.resizeRelatedAd()
                    }, 10)
                }
                var r;
                if (n && (r = xv.dom.getFirstChild(n)), !r) return void this.moveRelatedNodes(0);
                for (var d = [], l = xv.dom.getChildren(r), c = e - 1, u = 0; u < l.length; u++) xv.dom.hasClass(l[u], "thumb-block") && !xv.dom.hasClass(l[u], "video-ad") && d.push(l[u]);
                if (d.length < c) return void this.moveRelatedNodes(0);
                this.related_ad = 0;
                for (var p = []; this.aContainersInRelated.length;) p.push(this.aContainersInRelated.shift());
                for (var m = "playersiderectangle" === this.type ? this.ads_nodes.length : this.ads_nodes.length - 1, i = 0; i <= m; i++) {
                    this.related_ad++;
                    var a = document.createElement("div");
                    a.className = "thumb-block video-ad video-ad-support-" + xv.sda.manager.device_type;
                    var f = d[e * this.related_ad - 1 - this.related_ad];
                    if (!f) return void(e > 0 && function() {
                        t.resizeRelatedAd()
                    }());
                    var h = f.parentNode;
                    f === h.lastChild ? h.appendChild(a) : h.insertBefore(a, f.nextSibling);
                    var g = document.createElement("div");
                    if (g.className = "thumb-inside", a.appendChild(g), this.ads_nodes[i])
                        for (var o = 0; o < this.ads_nodes[i].length; o++) {
                            var s = this.ads_nodes[i][o];
                            g.appendChild(s)
                        }
                    if ("desktop" !== xv.sda.manager.device_type && this.$removeAdsBlock) {
                        var v = this.$removeAdsBlock.cloneNode(!0);
                        g.appendChild(v)
                    }
                    xv.dom.hasClass(this.container, "thumb-block") || (this.$backupContainer = this.container), this.aContainersInRelated.push(a), this.container = a
                }
                for (; p.length;) {
                    var a = p.shift();
                    a.parentNode && a.parentNode.removeChild(a)
                }
                xv.dom.addClass(n, "with-ad"), "desktop" !== xv.sda.manager.device_type && (xv.dom.addClass(n, "with-footer-ad"), xv.dom.addClass(document.getElementById("ad-footer"), "with-related-ad")), this.resizeRelatedAd()
            },
            isMediaLoaded: function(e) {
                if ("IMG" === e.nodeName && !e.is_img_loaded) return !1;
                if ("VIDEO" === e.nodeName && !e.is_playing) return !1;
                for (var t = xv.dom.getChildrenRecursive(e), n = 0; n < t.length; n++) {
                    if ("IMG" === t[n].nodeName && !t[n].is_img_loaded) return !1;
                    if ("VIDEO" === t[n].nodeName && !t[n].is_playing) return !1
                }
                return !0
            },
            checkIsViewed: function() {
                if (this.shouldCheckIsViewed()) {
                    var e = [];
                    if (this.bIsInThumbList) try {
                        for (var t = 0; t < this.ads_nodes.length; t++)
                            for (var n = 0; n < this.ads_nodes[t].length; n++) e.push(this.ads_nodes[t][n])
                    } catch (o) {
                        xv.sda.manager.sendError(o, "banner.checkIsViewed (1)")
                    } else {
                        if (!this.container || "object" != typeof this.container) return;
                        this.mobile_container && this.isContainerMobileView() ? e.push(this.mobile_container) : e.push(this.container)
                    }
                    for (var i = 0; i < e.length; i++) try {
                        if (this.isElementInView(e[i])) {
                            this.setIsViewed(!0);
                            break
                        }
                    } catch (o) {
                        xv.sda.manager.sendError(o, "banner.checkIsViewed (3)")
                    }
                }
            },
            shouldCheckIsViewed: function() {
                return !1
            },
            isElementInView: function(e) {
                return xv.dom.isElementInView(e, !this.miss_url, {
                    no_zero: !0,
                    scroll_marge: this.miss_url ? -100 : 50
                })
            },
            setIsViewed: function(e) {
                this.is_viewed = e
            },
            resizeRelatedAd: function() {
                if (this.hasCopyInRelated())
                    for (var t = 0; t < this.ads_nodes.length; t++)
                        for (var n = 0; n < this.ads_nodes[t].length; n++) {
                            var i = this.ads_nodes[t][n];
                            if (i && "undefined" != typeof i.parentNode && i.parentNode.clientWidth > 0 && "undefined" != typeof i.style) {
                                var o = "square" === this.type || "playersiderectangle" === this.type ? "video-right" === i.parentNode.getAttribute("id") ? 0 : 10 : "ad-footer" === i.parentNode.getAttribute("id") ? 0 : e() < 480 ? 0 : 15,
                                    s = i.parentNode.clientWidth - 2 * o;
                                i.style.transformOrigin = "0 0", i.style.transform = "scale(" + Math.floor(s / 300 * 1e3) / 1e3 + ")"
                            }
                        }
            },
            resizeAds: function() {
                if (!("footer" !== this.type && "mobilerectangle" !== this.type || this.hasCopyInRelated()))
                    for (var e = "footer" === this.type ? 900 : 300, t = 0; t < this.ads_nodes.length; t++)
                        for (var n = 0; n < this.ads_nodes[t].length; n++) {
                            var i = this.ads_nodes[t][n];
                            if (i && "undefined" != typeof i.parentNode && i.parentNode.clientWidth > 0 && "undefined" != typeof i.style) {
                                var o = i.parentNode.clientWidth;
                                i.style.transformOrigin = "0 0", i.style.transform = "scale(" + Math.floor(o / e * 1e3) / 1e3 + ")"
                            }
                        }
            },
            loadFullExoClickData: function() {
                "footer" === this.type ? (this.zoneId = 4353796, this.custom_call = {
                    "function": "exoclickDesktopFooter",
                    bCalled: !1,
                    params: {
                        zoneId: this.zoneId
                    }
                }) : "square" === this.type ? (this.zoneId = 4116538, this.custom_call = {
                    "function": "exoclickDesktopSquare",
                    bCalled: !1,
                    params: {
                        zoneId: this.zoneId
                    }
                }) : "playersiderectangle" === this.type ? (this.zoneId = 5380732, this.custom_call = {
                    "function": "exoclickDesktopPlayerSideRectangle",
                    bCalled: !1,
                    params: {
                        zoneId: this.zoneId
                    }
                }) : "mobilerectangle" === this.type ? (this.zoneId = 3782021, this.custom_call = {
                    "function": "exoclickMobileRectangle",
                    bCalled: !1,
                    params: {
                        zoneId: this.zoneId
                    }
                }) : "interstitialfull" === this.type || "interstitial" === this.type ? (this.zoneId = "interstitialfull" === this.type ? 3959997 : 3954650, this.custom_call = {
                    "function": "exoclickInterstitial",
                    bCalled: !1,
                    params: {
                        zoneId: this.zoneId
                    }
                }) : "native" === this.type && (this.zoneId = 4713984, this.custom_call = {
                    "function": "exoclickNative",
                    bCalled: !1,
                    params: {
                        zoneId: this.zoneId
                    }
                }), this.banners_data = [];
                for (var e = 0; e < this.nb_banners; e++) this.banners_data.push(JSON.parse(JSON.stringify(this)))
            },
            isCustomDisplay: function(e) {
                return !0
            },
            setCustomDisplay: function(e) {
                this.bCustomDisplay = !0, "function" != typeof this.customDisplayFunctions[e.custom_call["function"]] || e.custom_call.bCalled || (this.customDisplayFunctions[e.custom_call["function"]](this, e.custom_call.params || null), e.custom_call.bCalled = !0)
            },
            loadExoScript: function() {
                if (!i) {
                    var e = window.location.protocol + "//a.orbsrv.com/ad-provider.js";
                    i = !0, xv.utils.loadScript(e, {
                        async: !0
                    }, {
                        error: function() {
                            xv.sda.adblocked.blocked(), xv.log.debug("Failed to load exo script")
                        }
                    })
                }
            },
            getBannersKeywords: function() {
                var e = xv.sda.manager.banners.keywords;
                return "default" === xv.sda.manager.skin ? e = "exoxvideostargetting" + (e.length ? "," + e : "") : "xnxx" === xv.sda.manager.skin && (e = "exoxnxxtargetting" + (e.length ? "," + e : "")), e
            },
            getExoTrackerSub: function() {
                var e = "undefined" != typeof xv.conf.dyn.ads && "undefined" != typeof xv.conf.dyn.ads.exo_tracker ? xv.conf.dyn.ads.exo_tracker : "";
                return ("string" != typeof e || e.length) && e || (e = "0"), e
            },
            getExoTrackerSub2: function() {
                var e = "undefined" != typeof xv.conf.dyn.ads && "undefined" != typeof xv.conf.dyn.ads.exo_tracker_sub2 ? xv.conf.dyn.ads.exo_tracker_sub2 : "";
                return ("string" != typeof e || e.length) && e || (e = "0"), e
            },
            getExoTrackerSub3: function() {
                var e = "undefined" != typeof xv.conf.dyn.ads && "undefined" != typeof xv.conf.dyn.ads.exo_tracker_sub3 ? xv.conf.dyn.ads.exo_tracker_sub3 : "";
                return ("string" != typeof e || e.length) && e || (e = "0"), e
            },
            getExoInsClass: function() {
                return "playersiderectangle" === this.type ? "eas6a97888e38" : "adsbyexoclick"
            },
            getExoClickIns: function() {
                var e = this.getExoTrackerSub(),
                    t = this.getExoTrackerSub2(),
                    n = this.getExoTrackerSub3(),
                    i = this.getExoInsClass(),
                    o = this.getBannersKeywords(),
                    s = this.custom_call && this.custom_call.params && this.custom_call.params.zoneId ? this.custom_call.params.zoneId : this.zoneId,
                    a = document.createElement("ins");
                return a.className = i, a.dataset ? (a.dataset.zoneid = s, a.dataset.keywords = o, a.dataset.sub = e, a.dataset.sub2 = t, a.dataset.sub3 = n) : (a.setAttribute("data-zoneid", s), a.setAttribute("data-keywords", o), a.setAttribute("data-sub", e), a.setAttribute("data-sub2", t), a.setAttribute("data-sub3", n)), a
            },
            execExoClickIns: function() {
                (AdProvider = window.AdProvider || []).push({
                    serve: {}
                })
            },
            appendExoClickIns: function(e) {
                this.loadExoScript();
                var t = this.getContainers();
                for (var n in t) {
                    var i = document.createElement("div");
                    i.className = "exo-ad-ins-div exo-ad-" + this.type, this.appendExoClickInsInContainer(i, e);
                    var o = t[n];
                    o.appendChild(i), xv.dom.addClass(o, "exo-ad-ins-container"), xv.dom.addClass(o, "is-filled"), xv.dom.addClass(o, "ad-support-" + xv.sda.manager.device_type), this.ads_nodes.push([i])
                }
                this.execExoClickIns()
            },
            appendExoClickInsInContainer: function(e, t) {
                e.appendChild(void 0 === t ? this.getExoClickIns() : t)
            },
            customDisplayFunctions: {
                exoclickMobileRectangle: function(e, t) {
                    t && (e.custom_call || (e.custom_call = {}), e.custom_call.params = t), e.appendExoClickIns()
                },
                exoclickDesktopSquare: function(e, t) {
                    t && (e.custom_call || (e.custom_call = {}), e.custom_call.params = t), e.appendExoClickIns()
                },
                exoclickDesktopPlayerSideRectangle: function(e, t) {
                    if (t && (e.custom_call || (e.custom_call = {}), e.custom_call.params = t), e.appendExoClickIns(), "default" === xv.sda.manager.skin || "xnxx" === xv.sda.manager.skin) {
                        var n = e.getContainers();
                        for (var i in n) {
                            var o = document.createElement("div");
                            o.className = "remove-ads";
                            var s = document.createElement("a");
                            s.href = xv.conf.dyn.remove_ads_url ? xv.conf.dyn.remove_ads_url : xv.conf.domains.premium;
                            var a = document.createElement("span");
                            a.className = "remove-ads-link", a.innerHTML = xv.i18n.__("misc.remove_ads", {}, null, "Remove ads");
                            var r = document.createElement("span");
                            r.className = "mobile-hide", r.innerHTML = " - " + xv.i18n.__("premium.upgrade_to", {}, null, "Upgrade to premium"), a.appendChild(r), s.appendChild(a);
                            var d = n[i];
                            o.appendChild(s), d.appendChild(o)
                        }
                    }
                },
                exoclickDesktopFooter: function(e, t) {
                    t && (e.custom_call || (e.custom_call = {}), e.custom_call.params = t), e.appendExoClickIns()
                },
                exoclickNative: function(e, t) {},
                exoclickInterstitial: function(e, t) {
                    if (!e.bInterstitialEventsSet) {
                        var n = {
                            3954650: "eas6a97888e33",
                            3959997: "eas6a97888e35"
                        };
                        e.execExoClickIns();
                        var i = e.getExoClickIns();
                        i.className = n[e.zoneId], addEventListener("load", function() {
                            e.container = document.body, e.appendExoClickIns(i)
                        }), document.addEventListener("creativeDisplayed-" + e.zoneId, function(e) {
                            xv.log.debug_("%c Interstitial --- creativeDisplayed event", "color:yellow;", e.detail), html5player && html5player.pause()
                        }), e.bInterstitialEventsSet = !0
                    }
                }
            }
        };
        var s = function(e) {
            "object" == typeof e && (this.bIsLazyLoading = !0, this.iMaxDesktopLazyLoadScrollLimit = 500, this.aToDisplayOnView = [], o.apply(this, [e]))
        };
        s.prototype = new o, s.prototype.setIsViewed = function(e) {
            if (o.prototype.setIsViewed.apply(this, [e]), this.is_viewed && this.aToDisplayOnView.length) {
                for (var t in this.aToDisplayOnView) {
                    var n = this.aToDisplayOnView[t];
                    n.$container.append(n.$ins)
                }
                var i = this;
                setTimeout(function() {
                    i.execExoClickIns()
                }, 10)
            }
        }, s.prototype.isCallOnView = function() {
            return this.bIsLazyLoading
        }, s.prototype.appendExoClickInsInContainer = function(e, t) {
            if (!e || e.length || "function" != typeof e.appendChild) return void console.error("appendExoClickInsInContainer, no container", e);
            t = void 0 === t ? this.getExoClickIns() : t, this.shouldDelayAppend() ? this.aToDisplayOnView.push({
                $container: e,
                $ins: t
            }) : e.appendChild(t)
        }, s.prototype.shouldDelayAppend = function() {
            return !(!this.isCallOnView() || this.is_viewed)
        }, s.prototype.shouldCheckIsViewed = function() {
            return (!this.bFooterCanBeDisabled || !xv.sda.bFooterAdsDisabled) && !this.is_viewed
        }, s.prototype.isElementInView = function(e) {
            var t = window.innerHeight || document.documentElement.clientHeight;
            return xv.dom.isElementInView(e, !1, {
                no_zero: !0,
                scroll_marge: xv.conf.dyn.is_desktop ? Math.min(this.iMaxDesktopLazyLoadScrollLimit, t) : t
            })
        };
        var a = function(e) {
            "object" == typeof e && (s.apply(this, [e]), this.bFooterCanBeDisabled = !0)
        };
        a.prototype = new s;
        var r = function(e) {
            if ("object" == typeof e) {
                s.apply(this, [e]);
                var t = this.area_tag && -1 !== this.area_tag.indexOf("footer") && "hometopfooter" !== this.area_tag;
                this.bFooterCanBeDisabled = t, this.bIsLazyLoading = t
            }
        };
        r.prototype = new s;
        var d = function(e) {
            "object" == typeof e && (this.is_embed = e.is_embed || !1, this.mozthumbs = null, this.insert_pos = null, this.bIsInThumbList = !0, s.apply(this, [e]))
        };
        d.prototype = new s, d.prototype.checkContainer = function(e, t) {
            try {
                if ("function" != typeof document.querySelectorAll) return console.warn("Native: document.querySelectorAll is not supported in not supported in this browser"), !1;
                if (!xv.sda.manager.dom_loaded) return !!t && e;
                var n = document.querySelectorAll(e);
                if (0 === n.length) return !!t && e;
                n.length > 1 && console.warn("Native: Found more that 1 node"), n = n[0];
                for (var i = xv.dom.getChildren(n), o = [], s = 0; s < i.length; s++) xv.dom.hasClass(i[s], "video-ad") || xv.dom.hasClass(i[s], "thumb-ad") || o.push(i[s]);
                if (o.length < (this.is_embed ? 4 : 16)) return !1;
                if (this.mozthumbs = o, this.is_embed) this.insert_pos = 1 + Math.min(Math.floor(3.99 * Math.random()), o.length);
                else if (xv.sda.manager.is_video_page) this.insert_pos = 16 + Math.floor(9.99 * Math.random());
                else {
                    var a = o.length,
                        r = Math.max(1, Math.floor(a / 10 * 4) + 1),
                        d = Math.max(1, Math.floor(a / 2) + 1),
                        l = Math.floor(Math.random() * (d - r + .9999));
                    this.insert_pos = r + l
                }
            } catch (c) {
                xv.sda.manager.sendError(c, "native.checkContainer")
            }
            return n
        }, d.prototype.initContainer = function() {
            this.is_embed || s.prototype.initContainer.apply(this)
        }, d.prototype.isInRelated = function() {
            return !this.is_embed && xv.sda.manager.is_video_page
        }, d.prototype.checkIsViewed = function() {
            return !!this.shouldCheckIsViewed() && (!(this.isInRelated() && !xv.sda.manager.related_opened) && s.prototype.checkIsViewed.apply(this))
        }, d.prototype.canLoad = function(e) {
            return !this.is_loading && !this.is_loaded && (!(this.isInRelated() && !xv.sda.manager.related_opened) && s.prototype.canLoad.apply(this, [e]))
        }, d.prototype.createAdNodes = function(e, t) {
            try {
                var n = this.getAdNode(t.banner, t.url, t.label, t.user_name, !!t.video_preview);
                this.mozthumbs.length >= this.insert_pos ? e.insertBefore(n, this.mozthumbs[this.insert_pos - 1]) : e.appendChild(n), t.video_preview && "function" == typeof require && require(["lib/helpers/thumbs_rotator"], function(e) {
                    e(n, !0)
                }), this.ads_nodes.push([n]), xv.sda.manager.is_video_page && xv.thumbs && xv.thumbs.update_related_class && xv.thumbs.update_related_class()
            } catch (i) {
                xv.sda.manager.sendError(i, "native.createAdNodes")
            }
        }, d.prototype.shouldDelayAppend = function(e, t) {
            return !(!this.isCallOnView() || this.is_viewed || this.isInRelated())
        }, d.prototype.getAdNode = function(e, t, n, i, o) {
            try {
                var s = 3e7 + Math.round(7e7 * Math.random()),
                    a = document.createElement("div");
                if (this.loadExoScript(), this.is_embed) a.className = "related-video", a.appendChild(this.getExoClickIns());
                else {
                    a.id = "video_" + s, a.className = "thumb-block thumb-ad thumb-nat-ad thumb-nat-exo-ad";
                    var r = document.createElement("div");
                    r.className = "thumb-inside", a.appendChild(r);
                    var d = document.createElement("div");
                    d.className = "thumb-under", a.appendChild(d);
                    var l = document.createElement("span");
                    l.className = "mark", l.innerHTML = xv.i18n.__("misc.ad", {}, null, "AD"), r.appendChild(l);
                    var c = document.createElement("div");
                    c.className = "thumb", r.appendChild(c), this.appendExoClickInsInContainer(c, this.getExoClickIns())
                }
                var u = this;
                return setTimeout(function() {
                    u.execExoClickIns()
                }, 10), a
            } catch (p) {
                xv.sda.manager.sendError(p, "native.getAdNode")
            }
        };
        var l = function(e) {
            "object" == typeof e && o.apply(this, [e])
        };
        l.prototype = new o, l.prototype.isCallOnView = function() {
            return !0
        }, l.prototype.display = function(e, t) {
            if (this.is_loading = !1, this.is_loaded = !0, e ? this.banners_data = e : e = this.banners_data, e && e.length)
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    this.isCustomDisplay(i) && this.setCustomDisplay(i)
                }
        }, l.prototype.initContainer = function() {
            return !0
        };
        var c = function() {
                !0 !== xv.sda.bFooterAdsDisabled && (xv.log.debug("Disabling footer ads"), xv.sda.bFooterAdsDisabled = !0)
            },
            u = function() {
                !1 !== xv.sda.bFooterAdsDisabled && (xv.log.debug("Enabling footer ads"), xv.sda.bFooterAdsDisabled = !1, xv.sda.onEnableFooterAds.forEach(function(e) {
                    e()
                }), xv.sda.onEnableFooterAds = [])
            };
        "object" != typeof xv.sda && (xv.sda = {}), xv.sda.banner = o, xv.sda["native"] = d, xv.sda.footer = a, xv.sda.mobilerectangle = r, xv.sda.interstitial = l, xv.sda.onEnableFooterAds = [], xv.sda.disableFooterAds = c, xv.sda.enableFooterAds = u
    }(),
    function() {
        var e = function(e) {
            try {
                this.keywords = "", "string" == typeof e.keywords && e.keywords.length > 0 && (this.keywords = e.keywords), this.mobile_width = 768, "xnxx" === xv.sda.manager.skin && (this.mobile_width = 992), this.vwidth = null, this.vratio = null, this.banners = [];
                for (var t = 0; t < e.banners.length; t++) this.addBanner(e.banners[t]);
                this.scroll_not_forced = !1, this.scroll_timer_vc = !1
            } catch (n) {
                xv.sda.manager.sendError(n, "new banners()")
            }
        };
        e.prototype = {
            addBanner: function(e) {
                var t;
                t = "native" === e.type ? new xv.sda["native"](e) : "interstitial" === e.type || "interstitialfull" === e.type ? new xv.sda.interstitial(e) : "footer" === e.type ? new xv.sda.footer(e) : "mobilerectangle" === e.type ? new xv.sda.mobilerectangle(e) : new xv.sda.banner(e), t.is_valid && this.banners.push(t)
            },
            loadAds: function() {
                try {
                    this.vwidth = null, this.vratio = null;
                    for (var e = [], t = 0; t < this.banners.length; t++) {
                        var n = this.banners[t];
                        n.canLoad(this) && (n.loadFullExoClickData(), e.push(n))
                    }
                    e.length > 0 && this.displayAds(e)
                } catch (i) {
                    xv.sda.manager.sendError(i, "banners.loadAds")
                }
            },
            loadAdsDelayed: function() {
                try {
                    xv.sda.manager.dom_loaded = !0;
                    for (var e = 0; e < this.banners.length; e++)
                        if (this.banners[e].is_loaded && !this.banners[e].is_displayed) try {
                            this.banners[e].display(null, !1)
                        } catch (n) {
                            xv.sda.manager.sendError(n, "banners.loadAdsDelayed (1)")
                        }
                    if (xv.sda.adblocked.load_delayed) try {
                        xv.sda.adblocked.detected()
                    } catch (n) {
                        xv.sda.manager.sendError(n, "banners.loadAdsDelayed (3)")
                    }
                    var t = this;
                    this.checkDisplayCallOnScroll(!1), setTimeout(function() {
                        t.checkDisplayCallOnScroll()
                    }, 2e3)
                } catch (n) {
                    "NS_ERROR_NOT_INITIALIZED" !== n.name && "NS_ERROR_UNEXPECTED" !== n.name && xv.sda.manager.sendError(n, "banners.loadAdsDelayed")
                }
            },
            displayAds: function(e) {
                for (var t = 0; t < e.length; t++) e[t].display(null, !0)
            },
            checkDisplayCallOnScroll: function(e) {
                try {
                    for (var t = [], n = 0; n < this.banners.length; n++) this.banners.hasOwnProperty(n) ? this.banners[n].shouldCheckIsViewed() && t.push(this.banners[n]) : xv.sda.manager.sendError(new Error('checkDisplayCallOnScroll invalid banner "' + n + '" (' + typeof this.banners[n] + ")"), "checkDisplayCallOnScroll");
                    if (0 === t.length) return;
                    if (e || (this.scroll_not_forced = !0), this.scroll_timer_vc) {
                        if (!e) return;
                        clearTimeout(this.scroll_timer_vc), this.scroll_timer_vc = !1
                    }
                    var i = this;
                    e && !this.scroll_not_forced || (this.scroll_not_forced = !1, this.scroll_timer_vc = setTimeout(function() {
                        i.checkDisplayCallOnScroll(!0)
                    }, 200));
                    for (var o = 0; o < t.length; o++)
                        if (t.hasOwnProperty(o)) try {
                            t[o].checkIsViewed()
                        } catch (s) {
                            xv.sda.manager.sendError(s, "checkDisplayCallOnScroll (1)")
                        }
                } catch (s) {
                    "NS_ERROR_NOT_INITIALIZED" !== s.name && "NS_ERROR_UNEXPECTED" !== s.name && xv.sda.manager.sendError(s, "checkDisplayCallOnScroll")
                }
            }
        }, "object" != typeof xv.sda && (xv.sda = {}), xv.sda.banners = e
    }(),
    function() {
        if ("object" == typeof xv && "object" == typeof xv.conf && "object" == typeof xv.conf.dyn && "object" == typeof xv.conf.dyn.ads && "undefined" != typeof xv.conf.dyn.ads.banners) {
            "undefined" != typeof JSON && "undefined" != typeof JSON.parse || xv.utils.loadScript(xv.utils.getStaticDomain() + "/v3/js/json3.js", {
                async: "async"
            });
            var e = xv.conf.dyn.ads;
            window.wpn_categories = e.categories, window.wpn_keywords = e.keywords || "";
            var t = function() {
                this.skin = "string" == typeof xv.conf.sitename && window.xv.conf.sitename, this.dom_loaded = !1, this.related_opened = !1, this.ads_displayed = !0, this.is_video_page = "video" === xv.conf.data.action, this.mp4_support = null, this.device_type = xv.conf.dyn.is_tablet ? "tablet" : xv.conf.dyn.is_mobile ? "mobile" : "desktop", this.has_remove_ads = xv.conf.dyn.has_premium && xv.conf.dyn.disp_removeads && this.is_video_page
            };
            t.prototype = {
                setup: function() {
                    this.banners = new xv.sda.banners(e);
                    var t = this;
                    "function" == typeof document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
                        t.banners.loadAdsDelayed()
                    }) : window.attachEvent("onload", function() {
                        t.banners.loadAdsDelayed()
                    }), this.banners.loadAds(), window.xv.conf.ads_loaded = !0, xv.dom.addEventListener(window, "scroll", function() {
                        t.banners.checkDisplayCallOnScroll()
                    }), xv.dom.addEventListener(window, "resize", function() {
                        t.banners.loadAds(), t.banners.checkDisplayCallOnScroll()
                    }), !0 === xv.conf.data.show_disclaimer && this.toggleAds(!1)
                },
                addNotfClass: function() {
                    if (document.body) return void xv.dom.addClass(document.body, "no-tf");
                    var e = this;
                    window.setTimeout(function() {
                        e.addNotfClass()
                    }, 100)
                },
                displayRelatedNative: function() {
                    this.related_opened = !0, this.banners.loadAds(), this.banners.checkDisplayCallOnScroll(!0)
                },
                displayEmbedRelatedNative: function(e) {
                    this.banners.addBanner({
                        type: "native",
                        nb_ban: 1,
                        div_id: "#" + e,
                        area_tag: "nativeadembed",
                        is_embed: !0
                    }), this.banners.loadAds()
                },
                toggleAds: function(e) {
                    try {
                        if ((e = !!e) === this.ads_displayed) return;
                        if ("OK" === xv.cookies.get("disclaimer_display") || !xv.utils.isFirstPage()) return;
                        this.ads_displayed = e, "default" === this.skin && (this.ads_displayed ? xv.dom.removeClass(document.body, "no-tf") : this.addNotfClass());
                        for (var t = 0; t < this.banners.banners.length; t++) {
                            var n = this.banners.banners[t],
                                i = n.container;
                            i && "object" == typeof i && (i.style.display = this.ads_displayed ? "" : "none"), i = this.banners.banners[t].mobile_container, i && "object" == typeof i && (i.style.display = this.ads_displayed ? "" : "none"), n.resizeAds()
                        }
                    } catch (o) {
                        xv.sda.manager.sendError(o, "manager.toggleAds")
                    }
                },
                supportVideoMp4: function() {
                    if (null !== this.mp4_support) return this.mp4_support;
                    if (navigator.connection && navigator.connection.saveData) return !1;
                    this.mp4_support = !1;
                    try {
                        var e = document.createElement("video");
                        if (-1 === navigator.userAgent.toLowerCase().indexOf("chrome-lighthouse") && "undefined" != typeof e.canPlayType && "" === e.canPlayType('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')) return !1;
                        //if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) return !/OS [1-9]_/.test(navigator.userAgent) && (this.mp4_support = !0);
                        if ("Firefox" === xv.conf.dyn.browser) {
                            if (xv.conf.dyn.is_desktop) return this.mp4_support = !0;
                            var t = navigator.userAgent.match(/firefox\/(\d+)\./i);
                            return !!(t && t[1] < 80) && (this.mp4_support = !0)
                        }
                        if ("Edge" === xv.conf.dyn.browser) return this.mp4_support = !0;
                        if ("Chrome" !== xv.conf.dyn.browser) return !1;
                        var n = navigator.userAgent.match(/Chrome\/([0-9]+)\./);
                        if (n && n[1] > 50) return this.mp4_support = !0
                    } catch (i) {
                        return !1
                    }
                    return !1
                },
                sendError: function(e, t) {
                    console.error(e);
                    var n = {
                        logs: e.stack || "",
                        file: "",
                        message: (e.name || "Error") + ' in "' + t + '" : ' + e.message
                    };
                    n.file = (e.fileName || "Unknown file") + (e.lineNumber ? ":" + e.lineNumber : ""), "number" == typeof e.columnNumber ? n.file += ":" + e.columnNumber : "number" == typeof e.colNumber && (n.file += ":" + e.colNumber);
                    var i = xv.utils.createRequestObject();
                    i.open("POST", "/javascript-error", !0), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    var o = [];
                    for (var s in n) n.hasOwnProperty(s) && o.push(s + "=" + encodeURIComponent(n[s]));
                    i.send(o.join("&"))
                }
            }, "object" != typeof xv.sda && (xv.sda = {}), xv.sda.manager = new t, window.display_related_native = function() {
                xv.sda.manager.displayRelatedNative()
            }, window.display_embed_related_native = function(e) {
                xv.sda.manager.displayEmbedRelatedNative(e)
            }, window.toggle_wpn_ads = function(e) {
                xv.sda.manager.toggleAds(e)
            };
            try {
                xv.sda.manager.setup()
            } catch (n) {
                xv.sda.manager.sendError(n, "manager.setup")
            }
        }
    }();
