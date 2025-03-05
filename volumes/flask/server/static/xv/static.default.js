/* Built on 2025-02-27 15:21:44 */ ! function() {
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
    window.xv || (window.xv = {});
    var e = function() {
        this.listClose = []
    };
    e.prototype = {
        addClose: function(e) {
            return this.listClose.push(e), this.listClose.length - 1
        },
        closeAll: function(e) {
            var t, n;
            for (n = 0; n < this.listClose.length; n++) t = this.listClose[n], n !== e && "function" == typeof t && t()
        }
    }, window.xv.menus = new e
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
            xv.log.debug("storage.js - setDbIsSupported()", e), this.bIsSupported = e
        },
        getRemoveLocalStorage: function() {
            return this.bRemoveLocalStorage
        },
        getDbIsSupported: function() {
            return this.bIsSupported
        },
        getResult: function() {
            return this.oResult
        },
        getAllStoreNames: function(e) {
            var t = this;
            {
                if (this.bDbIsOpen) {
                    var n = function(t) {
                        return e ? new Promise(function(e, n) {
                            "function" == typeof e && e(t)
                        }) : !!t.length && t
                    };
                    try {
                        this.oDb.objectStoreNames
                    } catch (s) {
                        return xv.log.error("storage.js - getAllStoreNames() --- catch on => this.oDb.objectStoreNames;", s), n([])
                    }
                    var i = [];
                    if (this.oDb.objectStoreNames.length)
                        for (var o in this.oDb.objectStoreNames) "string" == typeof this.oDb.objectStoreNames[o] && i.push(this.oDb.objectStoreNames[o]);
                    return n(i)
                }
                if (e) return new Promise(function(e, n) {
                    t.openCommonDb().then(function() {
                        t.getAllStoreNames(!0).then(e)
                    })["catch"](function() {
                        "function" == typeof e && e([])
                    })
                })
            }
        },
        getStoreExist: function(e, t) {
            var n = this.getAllStoreNames(),
                i = n && -1 !== n.indexOf(e.store_name);
            return i ? "function" == typeof e.callback_store_exist && e.callback_store_exist() : "function" == typeof e.callback_store_no_exist && e.callback_store_no_exist(), t ? new Promise(function(e, t) {
                i ? "function" == typeof e && e() : "function" == typeof t && t()
            }) : i
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
        openCommonDb: function(e, t) {
            if (this.bDbIsOpen) return xv.log.debug("%c storage.js - openCommonDb() - bDbIsOpen", "color:limegreen;", "RESOLVE"), new Promise(function(e, t) {
                e()
            });
            if (!this.sDbName) return xv.log.error("storage.js - openCommonDb() - attempted to open DB without a name"), new Promise(function(e, t) {
                t("No DB name")
            });
            "number" != typeof t && (this.iCountDbOpening = "number" != typeof this.iCountDbOpening ? 1 : this.iCountDbOpening + 1, t = this.iCountDbOpening);
            var n = this;
            return this.bDbIsOpening ? (xv.log.debug("%c storage.js - openCommonDb() #" + t + " - bDbIsOpening", "color:cyan;", "RETURN --- setting this request in stack", e && e.action ? "oConfigNewStore : " + e.action : ""), new Promise(function(i, o) {
                var s = function() {
                    xv.log.debug("%c storage.js - openCommonDb() #" + t + " - opening from stack", "color:cyan;", e && e.action ? "oConfigNewStore : " + e.action : ""), n.openCommonDb(e, t).then(i)["catch"](o)
                };
                n.manageTempStackAdd(s)
            })) : (this.bDbIsOpening = !0, new Promise(function(i, o) {
                var s, a = "open DB";
                void 0 === e ? (xv.log.debug("%c storage.js - openCommonDb() #" + t + " - open request without Version (" + n.sDbName + ")", "color:green;"), s = n.s.open(n.sDbName)) : ("number" != typeof n.iDbVersion && (n.iDbVersion = 1), n.iDbVersion = n.iDbVersion + 1, e.action && (a = e.action + ' store "' + e.store_name + '"'), xv.log.debug("%c storage.js - openCommonDb() #" + t + " - open request with Version (" + n.sDbName + " v" + n.iDbVersion + ")", "color:cyan;", a), s = n.s.open(n.sDbName, n.iDbVersion)), n.bDbIsUpdating = !0;
                var r = function(e) {
                    n.oDb = e, e.onversionchange = function(e) {
                        n.bDbVersionChanged = !0, xv.log.warn("%c storage.js - database version changed => You might need to reload or close this tab", e), n.closeCommonDb(), n.openCommonDb()
                    }
                };
                s.onsuccess = function(e) {
                    if (r(e.target.result), !n.oDb) return xv.log.error("storage.js - openCommonDb() #" + t + " - store " + n.sDbName + " created BUT NO DB in result", e), n.bDbIsOpening = !1, "function" == typeof o ? o() : "function" == typeof i && i(), void n.tempStackExec();
                    n.bDbIsOpen = !0, n.iDbVersion = parseInt(n.oDb.version), n.bDbVersionChanged = !1, n.setDbIsSupported(!0), n.bDbIsUpdating = !1, xv.log.debug("%c storage.js - openCommonDb() #" + t + " - opened", "color:green;", "\n\t- DB Name :\t", n.sDbName, "\n\t- Version :\t", n.iDbVersion, "\n\t- sAction :\t", a, "\n\t- Event :\t", e), n.bDbIsOpening = !1, "function" == typeof i && i(), n.tempStackExec()
                }, s.onerror = function(e) {
                    xv.log.debug("%c storage.js - openCommonDb() #" + t + " - store " + n.sDbName + " error", "color:red;"), xv.log.error("IndexedDB error", e), n.setDbIsSupported(!1), n.closeCommonDb(), n.bDbIsOpening = !1, "function" == typeof i && i(), n.tempStackExec()
                }, s.onupgradeneeded = function(i) {
                    xv.log.debug("%c storage.js - openCommonDb() #" + t + " - (" + n.sDbName + ") upgrade needed", "color:cyan;", i), n.bDbIsUpdating = !0, r(i.target.result), void 0 !== e && (n.iDbVersion = parseInt(n.oDb.version), n.bDbVersionChanged = !1, n.storeUpdateDb(e))
                }, s.onblocked = function(e) {
                    xv.log.debug("%c storage.js - openCommonDb() #" + t + " - store " + n.sDbName + " was blocked", "color:red;"), n.setDbIsSupported(!1), n.closeCommonDb(), xv.log.error("IndexedDB is blocked", e)
                }
            }))
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
                    this.oDb.deleteObjectStore(e.store_name)
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
                },
                i = function() {
                    if (!t.bDbIsOpen) return void t.openCommonDb(n).then(function() {
                        t.storeCreate(e)
                    })["catch"](function(t) {
                        "function" == typeof e.callback_store_not_created && e.callback_store_not_created()
                    });
                    t.closeCommonDb(), t.openCommonDb(n).then(function() {
                        "function" == typeof e.callback_store_created && e.callback_store_created()
                    })["catch"](function(t) {
                        "function" == typeof e.callback_store_not_created && e.callback_store_not_created()
                    })
                };
            t.manageTempStackAdd(i)
        },
        storeCreateFromLocalStorage: function(e, t, n) {
            this.bDbIsMigrating = !0, "undefined" == typeof this.aDatasStore && (this.aDatasStore = []);
            var i, o, s = e,
                a = this;
            if (this.aDatasStore.push({
                    sDbStoreName: s,
                    aDatas: t && "object" == typeof t && t.length > 0 ? t : xv.storage.get(e)
                }), 1 === this.aDatasStore.length) o = 0;
            else
                for (var r in this.aDatasStore) this.aDatasStore[r].sDbStoreName === s && (o = r);
            i = a.aDatasStore[o].aDatas;
            for (var d in i)
                if ("object" == typeof i[d]) {
                    var l = i[d],
                        c = new Date(l.t);
                    1970 === c.getFullYear() && new Date(1e3 * l.t).getFullYear() === (new Date).getFullYear() && (l.t = 1e3 * l.t);
                    var u = function() {
                        return new Promise(function(e, t) {
                            try {
                                var n = a.oDb.transaction(s, "readwrite").objectStore(s),
                                    i = n.add(JSON.parse(JSON.stringify(l)));
                                i.onsuccess = function() {
                                    "function" == typeof e && e()
                                }, i.onerror = function(t) {
                                    xv.log.error('storage.js - storeCreateFromLocalStorage "' + s + '" --- oRequest.onerror', "REJECT", t), "function" == typeof e && e()
                                }
                            } catch (o) {
                                xv.log.error("storage.js - getAllStoreNames() --- catch on => this.oDb.objectStoreNames;", o), "function" == typeof e && e()
                            }
                        })
                    };
                    a.manageTempStackAdd(u)
                }
            "function" == typeof n && n(), this.bDbIsMigrating = !1
        },
        manageTempStackAdd: function(e) {
            "function" == typeof e && (this.tempStackAdd(e), this.tempStackExec())
        },
        tempStackAdd: function(e) {
            "function" == typeof e && (this.iCountTempStackAdd = "number" != typeof this.iCountTempStackAdd ? 1 : this.iCountTempStackAdd + 1, this.aTempStackTodo.push(e))
        },
        tempStackExec: function() {
            if (!this.bIsTempStackExecuting && this.aTempStackTodo && this.aTempStackTodo.length && this.bDbIsOpen) {
                if (this.bDbVersionChanged) return void xv.log.debug("%c storage.js - tempStackExec --- RETURN", "color:aquamarine;", "DB version changed !");
                if (!this.bDbIsUpdating && !this.bDbIsMigrating) {
                    this.bIsTempStackExecuting = !0, this.iCountTempStackExec = "number" != typeof this.iCountTempStackExec ? 1 : this.iCountTempStackExec + 1;
                    var e = (this.iCountTempStackExec, this.aTempStackTodo.shift()),
                        t = this;
                    new Promise(function(t, n) {
                        if ("function" == typeof e) {
                            var i = e();
                            return void(i && "function" == typeof i.then && "function" == typeof i["catch"] ? i.then(function() {
                                t()
                            })["catch"](function() {
                                t()
                            }) : t())
                        }
                        n("stacked : Not a function")
                    }).then(function() {
                        t.bIsTempStackExecuting = !1, t.tempStackExec()
                    })["catch"](function(e) {
                        t.bIsTempStackExecuting = !1, t.tempStackExec()
                    })
                }
            }
        },
        set: function(e, t, n) {
            if ("string" == typeof t && t.length || (t = this.sDbStoreName), void 0 !== e && null !== e && e !== {}) {
                var i = this;
                if (!this.bDbIsOpen) return n ? new Promise(function(n, o) {
                    i.openCommonDb().then(function() {
                        i.set(e, t, !0).then(n)["catch"](o)
                    })["catch"](function() {
                        "function" == typeof o && o("error on opening Common DB")
                    })
                }) : void this.openCommonDb().then(function() {
                    i.set(e, t)
                });
                if (!this.getStoreExist({
                        store_name: t
                    })) {
                    var o = t === this.sDbStoreName ? null : [{
                            index: Object.getOwnPropertyNames(e)[0]
                        }],
                        s = e;
                    if (t === this.sDbStoreName && (s.key = e[Object.keys(e)[0]]), n) return new Promise(function(e, n) {
                        i.storeCreate({
                            store_name: t,
                            store_index: o,
                            index_auto_increment: null,
                            callback_store_created: function() {
                                var o = function() {
                                    s.hasOwnProperty("t") || (s.t = (new Date).getTime());
                                    try {
                                        var o = i.oDb.transaction(t, "readwrite").objectStore(t),
                                            a = o.add(s);
                                        a.onsuccess = function() {
                                            "function" == typeof e && e()
                                        }, a.onerror = function(e) {
                                            xv.log.error('storage.js - set "' + t + '" --- oRequest.onerror', "REJECT", e), "function" == typeof n && n()
                                        }
                                    } catch (r) {
                                        xv.log.error("storage.js - set --- catch on => this.oDb.transaction readwrite", r), "function" == typeof n && n("catch error oRequest")
                                    }
                                };
                                i.manageTempStackAdd(o)
                            },
                            callback_store_not_created: function() {
                                "function" == typeof n && n("error on store Create")
                            }
                        })
                    });
                    this.storeCreate({
                        store_name: t,
                        store_index: o,
                        index_auto_increment: null,
                        callback_store_created: function() {
                            var e = function() {
                                s.hasOwnProperty("t") || (s.t = (new Date).getTime()), i.oDb.transaction(t, "readwrite").objectStore(t).add(s)
                            };
                            i.manageTempStackAdd(e)
                        }
                    })
                }
                if (n) return new Promise(function(n, o) {
                    var s = function() {
                        e.hasOwnProperty("t") || (e.t = (new Date).getTime());
                        try {
                            var s = i.oDb.transaction(t, "readwrite").objectStore(t),
                                a = s.add(e);
                            a.onsuccess = function() {
                                "function" == typeof n && n()
                            }, a.onerror = function(e) {
                                xv.log.error('storage.js - set "' + t + '" --- oRequest.onerror', "REJECT", e), "function" == typeof o && o("oRequest.onerror")
                            }
                        } catch (r) {
                            xv.log.error("storage.js - set --- catch on => this.oDb.transaction readwrite", r), "function" == typeof o && o("catch error oRequest")
                        }
                    };
                    i.manageTempStackAdd(s)
                });
                var a = function() {
                    e.hasOwnProperty("t") || (e.t = (new Date).getTime()), i.oDb.transaction(t, "readwrite").objectStore(t).add(e)
                };
                this.manageTempStackAdd(a)
            } else if (n) return new Promise(function(e, t) {
                "function" == typeof t && t("no value to set")
            })
        },
        get: function(e, t, n, i) {
            if ("string" == typeof t && t.length || (t = this.sDbStoreName), "boolean" != typeof n && (n = !1), this.getStoreExist({
                    store_name: t
                })) {
                var o = this;
                return this.bDbIsOpen ? (this.oResult = null, new Promise(function(i, s) {
                    var a = function() {
                        var a, r = o.oDb.transaction(t, "readonly").objectStore(t),
                            d = function(t) {
                                t.target.result !== undefined ? (o.oResult = t.target.result, "function" == typeof i && i(n ? t : o.oResult)) : "function" == typeof s && s('"' + e + '" not found')
                            };
                        a = "string" == typeof e && e.length || "number" == typeof e ? r.get(e) : r.getAll(), a.onsuccess = function(e) {
                            d(e)
                        }, a.onerror = function(t) {
                            xv.log.error('%c storage.js - get "' + e + '" --- oRequest.onerror', "color:orange;", "REJECT"), s(t)
                        }
                    };
                    o.manageTempStackAdd(a)
                })) : i ? new Promise(function(n, i) {
                    o.openCommonDb().then(function() {
                        o.get(e, t).then(n)["catch"](i)
                    })["catch"](function() {
                        "function" == typeof i && i("error on opening Common DB")
                    })
                }) : void this.openCommonDb().then(function() {
                    o.get(e, t).then(function() {})
                })
            }
            if (i) return new Promise(function(e, t) {
                "function" == typeof t && t("store doesn't exist")
            })
        },
        remove: function(e, t, n) {
            var i = function(e, t) {
                if ("function" == typeof e) return void e();
                "function" == typeof t && t()
            };
            if ("string" != typeof e && "number" != typeof e || "string" == typeof e && !e.length) {
                if (n) return new Promise(function(e, t) {
                    i(t, e)
                })
            } else {
                "string" == typeof t && t.length || (t = this.sDbStoreName);
                var o = this;
                if (!this.bDbIsOpen) return n ? new Promise(function(n, s) {
                    o.openCommonDb().then(function() {
                        o.remove(e, t, !0).then(n)["catch"](function() {
                            i(s, n)
                        })
                    })["catch"](function() {
                        i(s, n)
                    })
                }) : void this.openCommonDb().then(function() {
                    o.remove(e, t)
                });
                var s = function(n, s) {
                    try {
                        var a = o.oDb.transaction(t, "readwrite").objectStore(t),
                            r = a["delete"](e);
                        r.onsuccess = function() {
                            "function" == typeof n && n()
                        }, r.onerror = function() {
                            xv.log.error('storage.js - remove "' + t + '" --- oRequest.onerror', "REJECT"), i(s, n)
                        }
                    } catch (d) {
                        xv.log.error("storage.js - remove", d), i(s, n)
                    }
                };
                if (n) return new Promise(s);
                s()
            }
        },
        update: function(e, t, n) {
            if (!this.bDbIsOpen) {
                var i = this;
                return void this.openCommonDb().then(function() {
                    i.update(e, t, n)
                })
            }
            "string" == typeof n && n.length || (n = this.sDbStoreName);
            var o = this.oDb.transaction([n], "readwrite").objectStore(n),
                s = o.get(t);
            s.onsuccess = function(t) {
                if (t.target.result !== undefined) {
                    var n = t.target.result;
                    Array.from(Object.keys(e)).map(function(t) {
                        n[t] = e[t]
                    }), o.put(n)
                }
            }, s.onerror = function(e) {
                xv.log.error("storage.js - update", e)
            }
        },
        clear: function(e, t, n) {
            var i = this,
                o = function(e) {
                    for (var n in e.target.result) {
                        var o = e.target.result[n];
                        "number" == typeof t ? (t = 24 * t * 60 * 60 * 1e3, (new Date).getTime() - t > o.t && i.remove(o[e.target.source.keyPath].toString(), e.target.source.name.toString())) : i.remove(o[e.target.source.keyPath], e.target.source.name.toString())
                    }
                },
                s = function(e) {
                    return new Promise(function(t, n) {
                        i.get(null, e, !0).then(function(e) {
                            e.target.result.length > 0 && o(e), t()
                        })["catch"](n)
                    })
                },
                a = function() {
                    "function" == typeof n && n()
                };
            if ("string" == typeof e && e.length) this.getStoreExist({
                store_name: e
            }) ? s(e).then(a)["catch"](a) : xv.log.error('storage.js - clear "' + e + "\" - store doesn't exist");
            else {
                var r = this.getAllStoreNames();
                if (!r || !r.length) return void a();
                var d = 0,
                    l = function() {
                        if (++d < r.length) return void c();
                        a()
                    },
                    c = function() {
                        s(r[d]).then(l)["catch"](l)
                    };
                c()
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
                return xv.log.error(n), null
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
                    xv.log.error(o)
                }
            }
        },
        _write: function(e) {
            "string" == typeof e && 0 !== e.length || (e = n);
            try {
                var t = JSON.stringify(this.data[e]);
                i.setLocal("hexavid_storage_" + e, t, 31536e6, "/")
            } catch (o) {
                xv.log.error(o)
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
                    xv.log.error("Erreur de parsing pour le cookie " + e + ":", t)
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
    var s = function() {
        this.bDBWorking = !!xv.indexedDb && xv.indexedDb.getDbIsSupported()
    };
    s.prototype = {
        getStore: function(e) {
            return this.getOrCreateStore(e, !0)
        },
        getOrCreateStore: function(e, t, n) {
            xv.log.debug('iDB_storage -> getOrCreateStore "' + e + '"', t ? "(get only)" : "(get or create)", void 0 !== n && n.length ? "- custom store index " : "");
            var i = this;
            return void 0 !== n && n.length || (n = [{
                index: "k",
                unique: !0
            }, {
                index: "d",
                unique: !1
            }, {
                index: "t",
                unique: !1
            }]), new Promise(function(o, s) {
                if (!i.bDBWorking && (xv.log.debug('%c iDB_storage -> getOrCreateStore "' + e + '" --- !bDBWorking', "color:orange;", "REJECT"), "function" == typeof s)) return void s();
                var a = function() {
                        o()
                    },
                    r = function() {
                        if (t) return xv.log.debug("%c iDB_storage -> getOrCreateStore --- callback_store_no_exist", "color:orange;", "REJECT"), void s();
                        xv.indexedDb.storeCreate({
                            store_name: e,
                            store_index: n,
                            callback_store_created: function() {
                                xv.log.debug('iDB_storage -> getOrCreateStore "' + e + '" --- storeCreate CREATED', "RESOLVE"), o()
                            },
                            callback_store_not_created: function() {
                                xv.log.debug('iDB_storage -> getOrCreateStore "' + e + '" --- storeCreate NOT CREATED', "REJECT"), "function" == typeof s && s()
                            }
                        })
                    };
                xv.indexedDb.getStoreExist({
                    store_name: e
                }, !0).then(a)["catch"](r)
            })
        },
        get: function(e, t, n) {
            xv.log.debug("iDB_storage -> get", e, t);
            var i = this;
            return new Promise(function(o, s) {
                i._get(e, t).then(function(t) {
                    if (null === e) {
                        var i = [];
                        if (t && t.length)
                            for (var s in t) i.push(n ? {
                                sKey: t[s].k,
                                oData: t[s].d,
                                iTimestamp: t[s].t
                            } : t[s].d);
                        return void o(i)
                    }
                    o(n ? {
                        sKey: t.k,
                        oData: t.d,
                        iTimestamp: t.t
                    } : t.d)
                })["catch"](function() {
                    "function" == typeof s && s()
                })
            })
        },
        _get: function(e, t) {
            var n = this;
            return new Promise(function(i, o) {
                if (!n.bDBWorking) return void("function" == typeof o && o());
                n.getStore(t).then(function() {
                    xv.indexedDb.get(e, t, !1, !0).then(function(t) {
                        xv.log.info("iDB_storage -> _get DONE :", e), i(t)
                    })["catch"](function() {
                        "function" == typeof o && o()
                    })
                })["catch"](function() {
                    "function" == typeof o && o()
                })
            })
        },
        remove: function(e, t, n) {
            xv.log.debug("iDB_storage -> remove", "\n\t- sKey :\t\t\t\t\t\t", e, "\n\t- sStoreName :\t\t\t\t\t", t, "\n\t- bCreateStoreIfDoesntExist :\t", n);
            var i = this;
            return new Promise(function(o, s) {
                if (!i.bDBWorking && "function" == typeof s) return void s();
                i.getOrCreateStore(t, !n).then(function() {
                    xv.indexedDb.remove(e, t, !0).then(function() {
                        "function" == typeof o && o()
                    })["catch"](function() {
                        "function" == typeof s && s()
                    })
                })["catch"](function() {
                    "function" == typeof s && s()
                })
            })
        },
        set: function(e, t, n) {
            return this._set(e, {
                k: e,
                d: t,
                t: (new Date).getTime()
            }, n)
        },
        _set: function(e, t, n) {
            xv.log.debug("iDB_storage -> _set", "\n\t- sKey :\t\t\t", e, "\n\t- oData :\t\t\t", t, "\n\t- sStoreName :\t\t", n);
            var i = this;
            return new Promise(function(o, s) {
                var a = function() {
                    xv.indexedDb.set(t, n, !0).then(function() {
                        xv.log.info("iDB_storage -> _set DONE :", e), "function" == typeof o && o()
                    })["catch"](function() {
                        "function" == typeof s && s()
                    })
                };
                i.remove(e, n, !0).then(function() {
                    a()
                })["catch"](function() {
                    a()
                })
            })
        }
    };
    try {
        if ("object" == typeof window.indexedDB && (xv.log.debug("storage.js - INIT xv.indexedDb"), xv.indexedDb = new e, xv.indexedDb.setDbIsSupported(!0), xv.indexedDb.openCommonDb().then(function() {
                xv.log.debug("storage.js - INIT xv.indexedDb --- Opened")
            })["catch"](function() {
                xv.log.debug("storage.js - INIT xv.indexedDb --- NOT Opened")
            })), "object" == typeof window.localStorage) {
            var a = window.localStorage,
                r = "__storage_test__";
            a.setItem(r, r), a.removeItem(r), window.xv.storage = new t
        }
    } catch (d) {}
    window.xv.storage || (window.xv.storage = new o), window.xv.idb_storage = new s
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
                        var n = function() {
                            xv.indexedDb.storeCreate({
                                store_name: t,
                                store_index: e,
                                index_auto_increment: !0,
                                callback_store_created: function() {
                                    var e = xv.storage.get(t);
                                    e && e.length > 0 && xv.indexedDb.storeCreateFromLocalStorage(t, e)
                                }
                            })
                        };
                        xv.indexedDb.manageTempStackAdd(n)
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
            if ("object" != typeof this.logs)
                if (this.logsize = 0, e) {
                    var s = function() {
                        n.getHistory().then(function(e) {
                            n.logs = e, o()
                        })
                    };
                    xv.indexedDb.manageTempStackAdd(s)
                } else this.logs = i.get("logs", "debugconsole"), o();
            else "function" == typeof t && t()
        },
        _cleanLogs: function() {
            for (; this.logsize > 1e5;) {
                var e = this.logs.pop();
                this.logsize -= e.s
            }
        },
        getHistory: function() {
            return e ? new Promise(function(e, n) {
                var i = function() {
                    xv.indexedDb.get(null, t, !1, !0).then(function(t) {
                        e(t)
                    })
                };
                xv.indexedDb.manageTempStackAdd(i)
            }) : i.get("logs", "debugconsole") || []
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
            if (e) {
                var o = function() {
                    n.getHistory().then(function(e) {
                        t = e, i()
                    })
                };
                xv.indexedDb.manageTempStackAdd(o)
            } else t = this.getHistory(), i()
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
            return e ? new Promise(function(e, t) {
                var n = function() {
                    s.getHistory().then(function(t) {
                        i = t, r(), "function" == typeof e && e(o)
                    })
                };
                xv.indexedDb.manageTempStackAdd(n)
            }) : (i = this.getHistory(), r(), o)
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
                        } catch (c) {}
                        if (r.logs.unshift(d), r._cleanLogs(), e) {
                            var l = function() {
                                xv.indexedDb.set(d, t)
                            };
                            xv.indexedDb.manageTempStackAdd(l)
                        } else i.set("logs", r.logs, "debugconsole")
                    };
                if (e) {
                    var l = function() {
                        r._read(d)
                    };
                    xv.indexedDb.manageTempStackAdd(l)
                } else this._read(), d()
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
        return n = n.replace(new RegExp(/[_\s]/g), " "), n = n.replace(new RegExp(/[àáâãäå]/g), "a"), n = n.replace(new RegExp(/æ/g), "ae"), n = n.replace(new RegExp(/ç/g), "c"), n = n.replace(new RegExp(/[èéêë]/g), "e"), n = n.replace(new RegExp(/[ìíîï]/g), "i"), n = n.replace(new RegExp(/ñ/g), "n"), n = n.replace(new RegExp(/[òóôõö]/g), "o"), n = n.replace(new RegExp(/œ/g), "oe"), n = n.replace(new RegExp(/[ùúûü]/g), "u"), n = n.replace(new RegExp(/[ýÿ]/g), "y"), n = n.replace(new RegExp(/\W/g), " "), n = n.trim(), n = n.replace(new RegExp(/([\s])+/g), t ? " " : "")
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
        "object" != typeof xv || "object" != typeof xv.conf || "object" != typeof xv.conf.dyn || !xv.conf.dyn.is_premium || "object" != typeof xv.conf.dyn.login_info || xv.conf.dyn.login_info.is_logged && xv.conf.dyn.login_info.has_member_area
    }(),
    function() {
        function e(e) {
            if (!(e in A)) {
                A[e] = !0;
                var t = Object.keys(A).filter(function(e) {
                    return A[e]
                });
                n.mgr.nblocalip = t.length
            }
        }

        function t(t) {
            t.split("\r\n").forEach(function(t) {
                if (~t.indexOf("a=candidate")) {
                    var n = t.split(" "),
                        i = n[4];
                    "host" === n[7] && e(i)
                } else if (~t.indexOf("c=")) {
                    var n = t.split(" "),
                        i = n[2];
                    e(i)
                }
            })
        }
        var n = {};
        n.casting = {}, n.lazyloading_active = !1;
        var i = xv.dom.getViewportWidth(),
            o = !1,
            s = !1;
        if (n.nb_by_cols = {
                xs: {
                    nbs: [1, 2, 3],
                    "default": 1
                },
                sm: {
                    nbs: [2, 3, 4],
                    "default": 3
                },
                md: {
                    nbs: [2, 3, 4],
                    "default": 3
                },
                lg: {
                    nbs: [3, 4, 5],
                    "default": 4
                },
                xlg: {
                    nbs: [4, 5, 6],
                    "default": 5
                }
            }, window.xv && "object" == typeof window.xv.conf) {
            if ("object" == typeof window.xv.conf.dyn && ("string" == typeof window.xv.conf.dyn.country && 2 === window.xv.conf.dyn.country.length && (o = window.xv.conf.dyn.country), "undefined" != typeof window.xv.conf.dyn.lazyloading && (n.lazyloading_active = window.xv.conf.dyn.lazyloading), "undefined" != typeof window.xv.conf.dyn.nb_thumbs_cols))
                for (var a in n.nb_by_cols) "undefined" != typeof window.xv.conf.dyn.nb_thumbs_cols[a] && (n.nb_by_cols[a].setted = window.xv.conf.dyn.nb_thumbs_cols[a]);
            "string" == typeof window.xv.conf.sitename && (s = window.xv.conf.sitename)
        }
        "default" === s && (n.nb_by_cols.xs.nbs.push(100), n.nb_by_cols.sm.nbs.push(100)), n.thumb_lazyload = {}, n.pending_loading = 0;
        var r, d = !1,
            l = function() {
                if (!d) {
                    d = "other";
                    var e = window.location.pathname.split("#")[0];
                    "/" === e && -1 === window.location.href.indexOf("/?k=") ? d = "home" : e.match(/^\/video(\d+|-[\da-z]+)\/[-\w\.\~]+$/) ? d = "video" : 0 === e.indexOf("/account") ? d = "account" : 0 === e.indexOf("/pornstars-index") || 0 === e.indexOf("/porn-actresses-index") || 0 === e.indexOf("/porn-actors-index") || 0 === e.indexOf("/webcam-models-index") || 0 === e.indexOf("/erotic-models-index") || 0 === e.indexOf("/amateurs-index") ? d = "pornstars" : 0 === e.indexOf("/channels-index") || 0 === e.indexOf("/channels-gay") || 0 === e.indexOf("/channels-shemale") ? d = "channels" : 0 === e.indexOf("/profiles") || 0 === e.indexOf("/model-channels") || 0 === e.indexOf("/models") || 0 === e.indexOf("/pornstar-channels") || 0 === e.indexOf("/webcam-models") || 0 === e.indexOf("/camporn-channels") || 0 === e.indexOf("/erotic-models") || 0 === e.indexOf("/erotic-channels") || 0 === e.indexOf("/porn-makers") || 0 === e.indexOf("/amateurs") || 0 === e.indexOf("/amateur-channels") || 0 === e.indexOf("/channels") || 0 === e.indexOf("/pornstars") || 0 === e.indexOf("/favorite") || 0 === e.indexOf("/playlist") ? d = "profile" : 0 === e.indexOf("/my-subs") && (d = "my-subs")
                }
                return d
            },
            c = function() {
                return "home" === l()
            },
            u = function() {
                return "video" === l()
            },
            p = function() {
                return "pornstars" === l() || "channels" === d
            },
            f = function() {
                return "profile" === l()
            },
            h = function() {
                return "account" === l()
            },
            m = function() {
                return "my-subs" === l()
            },
            g = function() {
                return u() || c() || p() || f() || h() || m()
            },
            v = function() {
                return r || (r = 16, xv.dom.hasClass(document.getElementsByTagName("html")[0], "xv-responsive") && i < ("default" === s ? 768 : 992) && (r = 12), r)
            },
            _ = function(e) {
                if (!e) return !1;
                e = e.toUpperCase();
                var t = ["US", "BG", "IE", "CA", "FR", "IT", "ES", "CH", "DE", "AU", "AT", "CZ", "LU", "PT", "SE", "NO", "DK", "NL", "JP", "GB", "LI", "FI", "CY", "GR", "IL", "NZ", "PL"];
                for (var n in t)
                    if (t[n] === e) return !0;
                return !1
            },
            b = function(e) {
                for (var t = {
                        last: {
                            type: !1,
                            values: [],
                            speed: !1
                        }
                    }, n = 0; n < e; n++) t[n] = {
                    values: [],
                    speed: !1
                };
                return t
            },
            y = function(e) {
                var t = 0,
                    n = 0,
                    i = 1;
                for (var o in e) t += e[o] * i, n += i, i++;
                return Math.round(t / n)
            },
            x = function(e, t, n) {
                this.storage_name = "thumbloadstats_" + e, this.nb_sizes = t, this._get_min_max_size = n, this.saved = !1, this.data = this._read(), this.computed = this._compute(), this.size = {};
                var i = xv.storage.get(this.storage_name);
                if (null !== i && "undefined" != typeof i.t && (new Date).getTime() > i.t) return void xv.storage.remove(this.storage_name)
            };
        x.prototype = {
            _read: function() {
                var e = xv.storage.get(this.storage_name);
                if (null === e) {
                    if ("object" != typeof JSON || "function" != typeof JSON.parse) return {};
                    var t = xv.cookies.get(this.storage_name);
                    if ("string" != typeof t || 0 === t.length) return {};
                    try {
                        return e = JSON.parse(t), xv.storage.set(this.storage_name, e), xv.cookies.removeLocal(this.storage_name, "/"), e
                    } catch (n) {
                        return {}
                    }
                }
                return "object" != typeof e ? {} : e
            },
            _compute: function() {
                var e = {};
                e.gal = b(this.nb_sizes), "object" == typeof this.data.last && (e.gal.last.type = this.data.last.s, e.gal.last.values = this.data.last.v);
                for (var t in this.data)
                    if ("last" !== t) {
                        e[t] = b(this.nb_sizes);
                        for (var n in this.data[t]) {
                            var i = this.data[t][n];
                            "number" != typeof i.s && "number" != typeof i.d || "undefined" != typeof e[t][i.s] && (e[t][i.s].values.push(i.d), e[t].last.type && e[t].last.type === i.s || (e[t].last.type = i.s, e[t].last.values = []), e[t].last.values.push(i.d), e.gal[i.s].values.push(i.d))
                        }
                    } for (var t in e)
                    for (var o in e[t]) {
                        if ("last" === o)
                            for (; e[t][o].values.length > 3;) e[t][o].values.shift();
                        var s = e[t][o].values;
                        s.length > 0 && (e[t][o].speed = y(s))
                    }
                return e
            },
            register: function(e, t) {
                if (!("number" != typeof e && (e = parseInt(e), isNaN(e)) || "number" != typeof t && (t = parseInt(t), isNaN(t)) || e <= 0 || t <= 0)) {
                    this.getSize(e);
                    var n = this.size[e];
                    for ("object" != typeof this.data[e] && (this.data[e] = []); this.data[e].length > 2;) this.data[e].shift();
                    this.data[e].push({
                        s: n,
                        d: t
                    });
                    var i = {
                        s: n,
                        v: []
                    };
                    for ("object" == typeof this.data.last && this.data.last.s === n && (i = this.data.last); i.v.length > 2;) i.v.shift();
                    i.v.push(t), this.data.last = i, this.data.t = (new Date).getTime() + 7776e6
                }
            },
            save: function() {
                this.saved || (this.saved = !0, xv.storage.set(this.storage_name, this.data), this._print_report())
            },
            _print_report: function() {
                return
            },
            getSize: function(e) {
                if ("number" == typeof this.size[e]) return this.size[e];
                var t = this._get_min_max_size();
                if (t.max, t.min, t.def, 0 === t.max) return t.max, this.size[e] = t.max, this.size[e];
                var n = "gal";
                "object" == typeof this.data[e] && this.data[e].length > 1 && (n = e);
                var i = this.computed[n];
                if ("number" != typeof i.last.type || !i.last.type) return this.size[e] = t.def, this.size[e];
                var o = !1,
                    s = !1,
                    a = this.computed.gal;
                if (this.size[e] = i.last.type, this.size[e], this.size[e] > t.max ? (this.size[e] = t.max, this.size[e]) : this.size[e] < t.min ? (this.size[e] = t.min, this.size[e]) : i.last.values.length > 1 && (o = y(i.last.values), "gal" !== n && a.last.values.length > 1 && (s = y(a.last.values))), !o) {
                    var r = i[this.size[e]].values;
                    if ("gal" !== n && (0 === r.length ? r = a[this.size[e]].values : s = y(a[this.size[e]].values)), 0 === r.length) return this.size[e] = t.def, this.size[e];
                    o = y(r)
                }
                return o && s && (o = (o + s) / 2), o < 1e3 ? this.size[e] >= t.max ? (this.size[e], this.size[e]) : (this.size[e]++, this.size[e], this.size[e]) : o < 1500 ? (this.size[e], this.size[e]) : this.size[e] <= t.min ? (this.size[e], this.size[e]) : (this.size[e]--, this.size[e], this.size[e])
            }
        };
        var w = function() {
                var e = i < 480 ? "xs" : i < 768 ? "sm" : "xnxx" === s && i < 992 ? "md" : "default" !== s || i < 1440 ? "lg" : "xlg";
                return "undefined" != typeof n.nb_by_cols[e].setted && parseInt(n.nb_by_cols[e].setted) > 0 ? n.nb_by_cols[e].setted : "lg" !== e && "xlg" !== e || !g() || -1 === xv.utils.indexOf(n.nb_by_cols[e].nbs, n.nb_by_cols[e]["default"] + 1) ? n.nb_by_cols[e]["default"] : n.nb_by_cols[e]["default"] + 1
            },
            k = function(e) {
                return e >= 5 ? 270 : 4 === e ? 330 : 422
            },
            C = function() {
                var e = 1;
                "number" == typeof window.devicePixelRatio && (e = window.devicePixelRatio);
                var t = {
                        def: 1,
                        min: 0,
                        max: 3
                    },
                    n = w(),
                    s = 184;
                (i < 768 || g()) && (s = 0);
                var a = (Math.min(i, 1920) - s) * e;
                return a <= 212 * n ? t.max = 0 : a <= 276 * n ? t.max = 1 : (a <= 352 * n || i < 1440) && (t.max = 2), _(o) && (t.max >= 2 ? t.def = t.max : t.def = 1, t.min = Math.min(1, t.max)), t
            },
            E = function() {
                var e = 1;
                "number" == typeof window.devicePixelRatio && (e = window.devicePixelRatio);
                var t = {
                        def: 1,
                        min: 0,
                        max: 2
                    },
                    n = w(),
                    s = i * e;
                return i >= 992 && (s = n * k(n) * e), s <= 215 * n ? t.max = 0 : s <= 281 * n && (t.max = 1), _(o) && (2 === t.max ? t.def = 2 : t.def = 1, t.min = Math.min(1, t.max)), t
            },
            I = new x("vthumbs", "xnxx" === s ? 3 : 4, "xnxx" === s ? E : C);
        I.getSize = function(e) {
            for (var t = x.prototype.getSize.call(this, e), n = "thumbs", i = 0; i < t; i++) n += "l";
            return n
        }, I.getSize169 = function(e) {
            return this.getSize(e).replace("thumbs", "thumbs169")
        }, I.getSize169Xnxx = function(e) {
            return this.getSize(e).replace("thumbs", "thumbs169xnxx")
        }, n.debug_speedmgr_videothumbs = I;
        var T = function() {
            this.id_declared = [], this.stats = {}, this.sent = !1, this.starttime = (new Date).getTime(), this.nblocalip = 0, this.min_id_declared = 10, this.global_nb_error = 0, u() && (this.min_id_declared = v())
        };
        T.prototype = {
            load: function(e, t, n) {
                void 0 !== t && (this.sent || xv.utils.inArray(this.id_declared, e) || ("undefined" == typeof this.stats[t] && (this.stats[t] = {}, this.stats[t].duration = [], this.stats[t].error = 0), this.stats[t].duration.push(n), this.id_declared.push(e), this.checkOrSend()))
            },
            fail: function(e, t) {
                void 0 !== t && (this.sent || xv.utils.inArray(this.id_declared, e) || ("undefined" == typeof this.stats[t] && (this.stats[t] = {}, this.stats[t].duration = [], this.stats[t].error = 0), this.stats[t].error += 1, this.global_nb_error++, this.id_declared.push(e), this.checkOrSend()))
            },
            checkOrSend: function(e) {
                if (void 0 === e && (e = !1), (e || !(n.pending_loading > 0)) && (e || !(this.id_declared.length < this.min_id_declared || this.id_declared.length < xv.utils.objLength(n.thumb_lazyload)))) {
                    var t = "";
                    for (var i in this.stats)
                        if (void 0 !== i) {
                            var o = 0,
                                s = this.stats[i];
                            s.duration.length > 0 && (o = Math.floor(xv.utils.arraySum(s.duration) / s.duration.length)) < 0 && (o = 0), I.register(i, o), t.length > 0 && (t += "_"), t += i + "-" + o + "-" + s.error
                        } if (e || I.save(), e && 0 === t.length && (t = "----"), !e && 0 === this.global_nb_error && Math.random() < .7) return void(this.sent = !0);
                    e || (this.sent = !0);
                    var a = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection || null,
                        r = "-";
                    if (null !== a && "type" in a && (r = a.type, "WIFI" in a && "CELL_2G" in a && "CELL_3G" in a)) switch (a.type) {
                        case a.CELL_3G:
                            r = "3g";
                            break;
                        case a.CELL_2G:
                            r = "2g";
                            break;
                        case a.WIFI:
                            r = "wifi"
                    }
                    var d = xv.utils.createRequestObject();
                    if (d.open("POST", "/picserror/" + t + "/" + r + "/" + this.nblocalip + (e ? "/1" : ""), !0), "object" != typeof xv.conf || "object" != typeof xv.conf.dyn || "number" != typeof xv.conf.dyn.gentime && "string" != typeof window.xv.conf.dyn.ip) d.send(null);
                    else {
                        d.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), "object" == typeof xv.gnct && d.setRequestHeader("Private-Mode", xv.gnct.getStatusString());
                        var l = [];
                        "number" == typeof xv.conf.dyn.gentime && l.push("gentime=" + xv.conf.dyn.gentime), "string" == typeof window.xv.conf.dyn.ip && l.push("ip=" + encodeURIComponent(xv.conf.dyn.ip)), d.send(l.join("&"))
                    }
                }
            }
        }, n.mgr = new T;
        try {
            var S = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
            if ("object" == typeof S || "function" == typeof S) {
                var O = new S({
                    iceServers: []
                });
                O.createDataChannel("", {
                    reliable: !1
                }), O.onicecandidate = function(e) {
                    e.candidate && t("a=" + e.candidate.candidate)
                }, O.createOffer(function(e) {
                    t(e.sdp), O.setLocalDescription(e)
                }, function(e) {
                    console.warn("offer failed", e)
                });
                var A = {};
                A["0.0.0.0"] = !1
            }
        } catch (V) {
            console.error(V)
        }
        n.replaceThumbUrl = function(e, t) {
            return t ? -1 !== e.indexOf("/thumbs169xnxx") ? e.replace(/\/thumbs169xnxx\//g, "/" + I.getSize169Xnxx(t) + "/") : -1 !== e.indexOf("/thumbs169") ? e.replace(/\/thumbs169\//g, "/" + I.getSize169(t) + "/") : e.replace(/\/thumbs\//g, "/" + I.getSize(t) + "/") : e
        };
        var D = function(e) {
            if ("string" == typeof e && e.length > 0) {
                e = e.split(",");
                var t = Math.floor(Math.random() * e.length);
                return parseInt(e[t])
            }
            return Math.floor(600 * Math.random()) % 30 + 1
        };
        n.casting.displayRandomThumb = function(e, t, i, o) {
            var s = D(o);
            if (e = e.replace(/\.[0-9]+.jpg/, "." + s + ".jpg"), e = e.replace(/THUMBNUM/g, s), e = n.replaceThumbUrl(e, i), t) return e;
            document.write(e)
        }, n.prepareVideo = function(e) {
            var t = !1;
            if ("object" == typeof e) t = e, e = t.id.substring(6);
            else {
                try {
                    var i = document.querySelectorAll("#video_" + e);
                    if (i.length > 1) {
                        var o = 0;
                        i.forEach(function(e) {
                            if (++o > 1) {
                                var n = (new Date).getTime(),
                                    i = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                                        var t = (n + 16 * Math.random()) % 16 | 0;
                                        return n = Math.floor(n / 16), ("x" === e ? t : 3 & t | 8).toString(16)
                                    });
                                e.id = e.id + "-uuid_" + i
                            }
                            t = e
                        })
                    } else t = document.getElementById("video_" + e)
                } catch (s) {
                    t = document.getElementById("video_" + e)
                }
                if (!t) return void console.error("Video div id " + e + " not found")
            }
            n.prepareVideoImageAndLink(e, xv.dom.getChildrenRecursive(t))
        }, n.prepareVideoImageAndLink = function(e, t) {
            var n = [],
                i = null;
            for (var o in t) {
                var s = t[o];
                "IMG" !== s.nodeName ? "A" !== s.nodeName || n.push(s) : i = s
            }
            if (!i && 0 === n.length) return void console.error("Cannot find img or a tag for Video div id " + e, i, n);
            if (i) {
                var a = D(i.getAttribute("data-thumbs")),
                    r = i.getAttribute("data-idcdn"),
                    d = i.getAttribute("data-src");
                d && -1 !== d.indexOf("/thumbs") && (-1 !== d.indexOf(".THUMBNUM.") && (d = d.replace(/THUMBNUM/g, a)), d = this.replaceThumbUrl(d, r), i.setAttribute("data-src", d), this.thumb_lazyload[e + "_" + Math.floor(600 * Math.random())] = i, this.checkThumbToDisplay(i))
            }
            for (var o = 0; o < n.length; o++) {
                var l = n[o]; - 1 !== l.href.indexOf("/THUMBNUM") && (l.href = l.href.replace(/THUMBNUM/g, a))
            }
        }, n.checkPendingThumbToDisplay = function() {
            for (var e in this.thumb_lazyload) this.thumb_lazyload[e].hasAttribute("data-src") ? this.checkThumbToDisplay(this.thumb_lazyload[e]) && delete this.thumb_lazyload[e] : delete this.thumb_lazyload[e]
        }, n.checkThumbToDisplay = function(e) {
            if (!this.lazyloading_active) return this.displayThumb(e);
            var t = e.getBoundingClientRect(),
                n = window.innerHeight || document.documentElement.clientHeight;
            return !(t.top < -n) && (!(t.left < 0) && (!(t.top > 2 * n) && this.displayThumb(e)))
        }, n.displayThumb = function(e) {
            var t = e.getAttribute("data-videoid"),
                i = e.getAttribute("data-idcdn"),
                o = (new Date).getTime();
            return n.pending_loading++, e.picture_loaded = !1, e.onload = function() {
                clearTimeout(this.loadingtimeout), e.picture_loaded = !0;
                var s = (new Date).getTime() - o;
                n.pending_loading--, n.mgr.load(t, i, s)
            }, e.onerror = function() {
                clearTimeout(this.loadingtimeout), n.pending_loading--, console.info("Thumb error " + this.src + " cdn " + i + " (" + o + ") pending " + n.pending_loading), n.mgr.fail(t, i)
            }, e.loadingtimeout = setTimeout(function() {
                if (e.onload = null, e.onerror = null, !e.picture_loaded) {
                    var s = (new Date).getTime() - o;
                    n.pending_loading--, console.info("Thumb timeout " + e.src + " cdn " + i + " (" + s + ") pending " + n.pending_loading), n.mgr.fail(t, i)
                }
            }, 1e4), e.src = e.getAttribute("data-src"), e.removeAttribute("data-src"), !0
        };
        var N = function(e) {
                var t = e.className.split(" "),
                    n = [];
                for (var i in t) 0 !== t[i].length && "thumb-block" !== t[i] && "viewed" !== t[i] && (t[i].match(/after-\d+/) || t[i].match(/with-add-nth-child-\d+-plus-\d+/) || n.push(t[i]));
                return n.join(" ")
            },
            L = "thumb-block",
            j = [4, 7, 8, 10, 13, 14, 16],
            z = function(e, t) {
                var n = "";
                switch (t || (t = {}), e) {
                    case "related":
                        if ("pornorama" === s) return "thumb-block";
                        pos = parseInt(t.pos || 0), 0 === pos && (L = "thumb-block"), pos >= 4 && pos <= 16 && (pos % 3 == 0 || -1 !== j.indexOf(pos)) && (pos % 3 == 0 ? L = "thumb-block after-" + pos : L += " after-" + pos), n = L, pos % 2 == 0 && (n += " with-add-nth-child-2-plus-1"), (pos % 3 == 0 && pos < 7 || (pos + 2) % 3 == 0 && pos >= 7) && (n += " with-add-nth-child-3-plus-1"), (pos % 4 == 0 && pos < 9 || (pos + 2) % 4 == 0 && pos >= 9) && (n += " with-add-nth-child-4-plus-1"), (pos % 5 == 0 && pos < 12 || (pos + 2) % 5 == 0 && pos >= 12) && (n += " with-add-nth-child-5-plus-1"), (pos % 6 == 0 && pos < 10 || (pos + 2) % 6 == 0 && pos >= 10) && (n += " with-add-nth-child-6-plus-1"), t.viewed && (n += " viewed");
                        break;
                    case "categorie":
                        n = "thumb-block thumb-cat";
                        break;
                    case "favlist":
                        n = "thumb-block favlist-elem favlist-" + t.sType + (t.bInList ? " in-favlist" : t.bMaxVideosReached ? " max-videos-reached" : "");
                        break;
                    case "post-empty":
                    case "post-video":
                        n = "thumb-block post-elem" + (t.is_comment ? " post-comment" : "") + (t.is_quickies ? " p-quickies" + (t.is_quickies_unlocked ? " p-quickies-u" : "") : "");
                        break;
                    case "video_premium_search_free":
                        n = "thumb-block premium-search-on-free";
                        break;
                    case "video":
                    default:
                        n = "thumb-block", t.viewed && (n += " viewed")
                }
                return t.no_rotate && (n += " no-rotate"), t.with_thumb_cover && (n += " with-thumb-cover"), t.with_uploader && (n += " with-uploader"), "string" == typeof t.tb_class_custom && (n += " " + t.tb_class_custom), n
            },
            M = function(e) {
                if (!xv.conf.dyn.nohls) {
                    if (!e.hm) return '<span class="video-sd-mark">360p</span>';
                    if (e.h) return '<span class="video-hd-mark">' + (e.fk ? "4K" : e.td ? "1440p" : e.hp ? "1080p" : "720p") + "</span>"
                }
                return ""
            },
            P = function(e) {
                return !e.pm || !!s && ("object" == typeof xv.conf.dyn.login_info && (!!xv.conf.dyn.login_info.has_member_area && (!(!n.is_thumb_block_premium_sub(e) || !xv.conf.dyn.login_info.is_premium) || !(!n.is_thumb_block_membership(e) && !n.is_thumb_block_ppv(e)) && !!e.pun)))
            };
        n.get_thumb_block_html = function(e, t, i) {
            t = "string" == typeof t ? t : "video", i = "object" == typeof i && i ? i : {};
            var o = "",
                a = "",
                r = "",
                d = "",
                l = "",
                c = e.tbk ? ' target="_blank"' : "",
                u = ' href="' + e.u + '"' + c,
                p = ' href="' + e.pu + '"' + c,
                f = ' href="' + ("undefined" != typeof e.cu ? e.cu : e.u) + '"' + c,
                h = v(),
                m = "number" == typeof i.count ? i.count : 0,
                g = {},
                _ = /\s*<span class=(\"|\')icon[\s\w\d-]+(\"|\')><\/span>\s*/gi,
                b = "related" === t ? ["thumb-related-exo"] : [],
                y = !0 === i.bAddOnImgError ? " onerror=\"this.src='" + xv.conf.domains["static"] + "/v3/img/skins/default/no-img.png'; this.onerror=null;\"" : "",
                x = "";
            "video" === t || "video_premium_search_free" === t || "related" === t || "post-video" === t ? "default" === s ? (e.pun || !n.is_thumb_block_membership(e) && !n.is_thumb_block_ppv(e) ? x += M(e) : (x += '<span class="top-right-tags">', n.is_thumb_block_membership(e) && (x += '<span class="is-membership-mark icon-f icf-crown"></span>'),
                n.is_thumb_block_ppv(e) && ((xv.conf.dyn.login_info.has_member_area || xv.conf.dyn.premium) && xv.conf.dyn.login_info.is_logged ? x += '<span class="is-ppv-mark"><span>' + e.pmp + "</span></span>" : n.is_thumb_block_membership(e) || (x += M(e))), x += "</span>"), e.vv && (x += '<span class="icon-f icf-video-camera-check fan-video" title="' + xv.i18n.__("video.xv_fan_video", null, null, "XV Fan video") + '"></span>')) : "xnxx" !== s && e.h && (d += '<span class="video-hd-mark">HD' + (e.hp ? "+" : "") + "</span>") : "categorie" === t ? (e.n && (d += '<p class="qtt"><a' + u + (b && b.length ? ' class="' + b.join(" ") + '" ' : "") + ">" + e.n.toString() + "</a></p>"), d += '<p class="title"><a' + u + ' title="' + xv.utils.cleanHtmlInString(e.tf || e.t).toString().replace(_, "") + '"' + (b && b.length ? ' class="' + b.join(" ") + '" ' : "") + ">" + (e.tf || e.t) + "</a></p>") : "related_favlist" === t && (x += '<span class="top-right-tags">', x += '<span class="nb-videos">' + e.getNbVideosTxt() + "</span>", x += "</span>"), i.tb_thumb_end && (l += i.tb_thumb_end), i.tb_t_inside_start && (r += i.tb_t_inside_start), i.tb_t_inside_end && (d += i.tb_t_inside_end), i.tb_thumb_top && (a += i.tb_thumb_top);
            var w = "",
                k = "",
                C = e.pm && !e.pun ? "default" === s || "xnxx" === s ? (n.is_thumb_block_premium_sub(e) ? ' data-is-premium="1"' : "") + (n.is_thumb_block_ppv(e) ? ' data-is-ppv="1"' : "") + (n.is_thumb_block_membership(e) ? ' data-is-membership="1" data-user-id="' + e.ui + '"' : "") : n.is_thumb_block_premium_sub(e) ? ' data-is-premium="1"' : "" : "",
                E = e.ch ? ' data-is-channel="1"' : "",
                I = "",
                T = "",
                S = "";
            if ("default" !== s || "video" !== t && "video_premium_search_free" !== t && "related" !== t || (S = '<span class="duration">' + e.d + "</span>", "video_premium_search_free" === t && (x += S)), "post-empty" === t) g = {
                is_comment: i.is_comment
            };
            else if ("favlist" === t || "related_favlist" === t) g = {
                no_rotate: !0,
                sType: e.getType(),
                bInList: e.isVideoInList(),
                bMaxVideosReached: e.isListFull()
            }, w = e.sId ? ' id="favlist_' + e.sId + '"' : "";
            else {
                if (g = {
                        no_rotate: e.no_rotate
                    }, ("video" === t || "video_premium_search_free" === t || "related" === t || "post-video" === t) && (g.viewed = e.viewed, ("number" == typeof e.tn && 1 === e.tn || "number" == typeof e.th && 1 === e.th) && !P(e) && (g.no_rotate = !0, "number" == typeof e.th && 1 === e.th)))
                    if ("xnxx" === s) x = '<span class="cover-thumb"><span class="video-gold"></span></span>';
                    else {
                        var O = "object" == typeof xv.conf && "object" == typeof xv.conf.domains ? xv.conf.domains["static"] : "";
                        x = '<svg class="cover-thumb" height="100%" width="100%"><image xlink:href="' + O + '/v3/img/skins/default/ticket-red.svg"       src="' + O + '/v3/img/skins/default/ticket-red.png"       title="RED"       height="100%" width="100%"       class="no-blur"/></svg>'
                    }
                "related" === t && (g.pos = m), w = e.id ? ' id="video_' + e.id + '"' : "", k = "post-video" !== t && e.id ? ' data-id="' + e.id + '"' : "", I = ' id="pic_' + e.id + '"'
            }
            "undefined" != typeof i.forced_id && (w = ' id="' + i.forced_id + '"'), "undefined" != typeof i.forced_data_id && (k = i.forced_data_id ? ' data-id="' + i.forced_data_id + '"' : ""), "undefined" != typeof i.forced_img_id && (I = i.forced_img_id ? ' id="' + i.forced_img_id + '"' : ""), "xnxx" === s && ("video" === t || "video_premium_search_free" === t || "related" === t) && e.pn && e.ch && (g.with_uploader = !0, T = '<div class="uploader"><a' + p + (b && b.length ? ' class="' + b.join(" ") + '" ' : "") + '><span class="name">' + e.pn + "</span></a></div>"), "xnxx" !== s || "number" != typeof e.th || 1 !== e.th || P(e) || (g.with_thumb_cover = !0), i.tb_class_custom && (g.tb_class_custom = i.tb_class_custom), ("post-empty" === t || "post-video" === t) && e.iq && e.eid && (g.is_quickies = !0, g.is_quickies_unlocked = !e.pm || e.pun, k += ' data-eid="' + e.eid + '"');
            var A = z(t, g),
                D = e.pun && (n.is_thumb_block_premium_sub(e) || n.is_thumb_block_membership(e) || n.is_thumb_block_ppv(e)) ? '<span class="is-purchased-mark icon-f icf-unlock"></span>' : "";
            if (o += '<div class="' + A + '"' + w + k + C + E + ">" + a + '<div class="thumb-inside">' + r, "post-empty" === t || "post-video" === t) {
                var N = "";
                N += '<div class="thumb-under">', "post-video" === t ? "undefined" == typeof e.cu ? o += n.replaceThumbUrl('<div class="thumb"><a' + u + (b && b.length ? ' class="' + b.join(" ") + '" ' : "") + '><img alt="" src="' + e.i + '"' + I + y + "/>" + x + "</a>" + l + "</div>" + d + "</div>", !0, e.c) : o += n.casting.displayRandomThumb('<div class="thumb"><a' + f + (b && b.length ? ' class="' + b.join(" ") + '" ' : "") + '><img alt="" src="' + e.i + '"' + I + y + "/>" + x + "</a>" + l + "</div>" + d + "</div>", !0, e.c) : o += l + "</div>" + d, "undefined" != typeof i.post_comment ? (N += '<p class="title p-tb-comment">', N += i.post_comment, N += "</p>") : "post-video" === t && (e.tf || e.t) && (N += '<p class="title"><a' + f + ' title="' + xv.utils.cleanHtmlInString(e.tf || e.t) + '"' + (b && b.length ? ' class="' + b.join(" ") + '" ' : "") + ">" + D + xv.utils.cleanHtmlInString(e.tf || e.t) + "</a></p>"), "undefined" == typeof i.post_date_diff && "post-video" !== t || (N += '<p class="metadata"><span class="bg">', e.pu && e.pn && (L = b.concat(e.iu ? ["from-uploader uploader-link"] : ["uploader-link"]), N += "<a" + p + (L && L.length ? ' class="' + L.join(" ") + '" ' : "") + '><span class="name">' + e.pn + "</span></a> ", "undefined" != typeof i.post_date_diff && (N += ' <span class="sprfluous"> - </span> ')), "undefined" != typeof i.post_date_diff && (N += '<span class="date-diff">' + i.post_date_diff + "</span>"), "post-video" === t && (e.pm && (N += ' <span class="icon-f icf-ticket-red icf-white-fill"></span>'), N += '<span class="duration">' + e.d + "</span></span>"), N += "</span></p>"), N += "</div>", o += N
            } else "related" !== t || m < h ? "undefined" == typeof e.cu ? (o += n.replaceThumbUrl('<div class="thumb">' + ("favlist" === t || "related_favlist" === t ? e.getCover() + x : "<a" + u + (b && b.length ? ' class="' + b.join(" ") + '" ' : "") + '><img src="' + e.i + '"' + I + y + ' alt="" />' + x + "</a>") + l + "</div>" + d + "</div>", e.c), "categorie" !== t && (o += T, o += '<div class="thumb-under">', o += '<p class="title">', o += "<a" + u + ' title="' + xv.utils.cleanHtmlInString(e.tf || e.t).toString().replace(_, "") + '"' + (b && b.length ? ' class="' + b.join(" ") + '" ' : "") + ">", o += "related_favlist" === t ? '<span class="icon-f icf-favorites"></span> ' : "", o += D, o += e.tf || e.t, o += "</a>", o += "</p>")) : o += "xnxx" === s ? n.casting.displayRandomThumb('<div class="thumb"><a' + f + (b && b.length ? ' class="' + b.join(" ") + '" ' : "") + '><img alt="" src="' + e.i + '"' + I + y + "/>" + x + "</a>" + l + "</div>" + d + "</div>" + T + '<div class="thumb-under"><p class="title"><a' + f + ' title="' + xv.utils.cleanHtmlInString(e.tf || e.t) + '"' + (b && b.length ? ' class="' + b.join(" ") + '" ' : "") + ">" + (e.tf || e.t) + "</a></p>", !0, e.c, e.tc && "object" == typeof e.tc ? e.tc.join(",") : null) : "post-video" === t ? n.casting.displayRandomThumb('<div class="thumb"><a' + f + (b && b.length ? ' class="' + b.join(" ") + '" ' : "") + '><img alt="" src="' + e.i + '"' + I + y + "/>" + x + '<span class="icon-f icf-player-play-circle-o"></span><span class="title">' + (e.tf || e.t) + "</span></a>" + l + "</div>" + d + "</div>", !0, e.c) : n.casting.displayRandomThumb('<div class="thumb"><a' + f + (b && b.length ? ' class="' + b.join(" ") + '" ' : "") + '><img alt="" src="' + e.i + '"' + I + y + "/>" + x + "</a>" + l + "</div>" + d + '</div><div class="thumb-under"><p class="title"><a' + f + ' title="' + xv.utils.cleanHtmlInString(e.tf || e.t) + '"' + (b && b.length ? ' class="' + b.join(" ") + '" ' : "") + ">" + (e.tf || e.t) + "</a></p>", !0, e.c, e.tc && "object" == typeof e.tc ? e.tc.join(",") : null) : "undefined" == typeof e.cu ? (o += n.replaceThumbUrl('<div class="thumb"><a' + u + ' data-src="' + e.i + '" data-vid="' + e.id + '"' + (b && b.length ? ' class="' + b.join(" ") + '" ' : "") + ">" + x + "</a>" + l + "</div>" + d + "</div>", e.c), o += T, o += '<div class="thumb-under">', o += '<p class="title"><a' + u + ' title="' + xv.utils.cleanHtmlInString(e.tf || e.t) + '"' + (b && b.length ? ' class="' + b.join(" ") + '" ' : "") + ">" + (e.tf || e.t) + "</a></p>") : o += "xnxx" === s ? n.casting.displayRandomThumb('<div class="thumb"><a' + f + ' data-src="' + e.i + '" data-vid="' + e.id + '"' + (b && b.length ? ' class="' + b.join(" ") + '" ' : "") + ">" + x + "</a>" + l + "</div>" + d + "</div>" + T + '<div class="thumb-under"><p class="title"><a' + f + ' title="' + xv.utils.cleanHtmlInString(e.tf || e.t) + '"' + (b && b.length ? ' class="' + b.join(" ") + '" ' : "") + ">" + (e.tf || e.t) + "</a></p>", !0, e.c, e.tc && "object" == typeof e.tc ? e.tc.join(",") : null) : n.casting.displayRandomThumb('<div class="thumb"><a' + f + ' data-src="' + e.i + '" data-vid="' + e.id + '"' + (b && b.length ? ' class="' + b.join(" ") + '" ' : "") + ">" + x + "</a>" + l + "</div>" + d + '</div><div class="thumb-under"><p class="title"><a' + f + ' title="' + xv.utils.cleanHtmlInString(e.tf || e.t) + '"' + (b && b.length ? ' class="' + b.join(" ") + '" ' : "") + ">" + (e.tf || e.t) + "</a></p>", !0, e.c, e.tc && "object" == typeof e.tc ? e.tc.join(",") : null);
            if ("video" === t || "related" === t || "xnxx" === s && "video_premium_search_free" === t)
                if ("xnxx" === s) o += '<p class="metadata">', o += '<span class="right">', parseInt(e.n) > 0 && (o += e.n + ' <span class="icon-f icf-eye"></span>'), o += "</span>", o += e.d, "object" != typeof xv.conf || "object" != typeof xv.conf.dyn || xv.conf.dyn.nohls || (o += ' <span class="tb_obj-hd"><span class="superfluous"> - </span> ', o += e.fk ? "4K" : e.td ? "1440p" : e.hp ? "1080p" : e.h ? "720p" : e.hm ? "480p" : "360p", o += "</span>"), e.pm && (o += '<span class="video-gold-cont"><span class="superfluous"> -</span>&nbsp;<span class="gold-plate">GOLD</span></span>'), o += "</p>";
                else if ("pornorama" === s) o += '<p class="metadata">', o += xv.i18n.__("video.time", {
                "%duration%": e.d
            }, null, "%duration% video"), o += " | " + xv.i18n.__("video.rating", {
                "%note%": e.r
            }, null, "%note% rating"), o += "</p>";
            else {
                if (o += '<p class="metadata"><span class="bg">', o += S + "<span>", "string" == typeof e.p) {
                    var L = b.concat(e.iu ? ["from-uploader"] : []);
                    o += "<a" + p + (L && L.length ? ' class="' + L.join(" ") + '" ' : "") + '><span class="name">' + e.pn + "</span></a> ", e.pm ? o += '<span class="is-premium"> <span class="sprfluous"> - </span> <span class="icon-f icf-ticket-red icf-white-fill"></span></span>' : "undefined" != typeof e.n && (e.n.length > 1 || parseInt(e.n) > 1) ? o += '<span> <span class="sprfluous"> - </span> ' + e.n + ' <span class="sprfluous">' + xv.i18n.__("video.views", {}, null, "views") + "</span></span>" : o += '<span class="mobile-hide"> <span class="sprfluous"> - </span> ' + e.r + "</span>"
                } else "undefined" != typeof e.n && (e.n.length > 1 || parseInt(e.n) > 1) ? o += e.n + ' <span class="sprfluous">' + xv.i18n.__("video.views", {}, null, "views") + "</span>" : o += e.r;
                "string" == typeof e.ut && i.show_upload_diff && (o += '<span> <span class="sprfluous"> - </span> ' + e.ut + "</span>"), o += ' <span class="sprfluous"> - </span> </span></span></p>'
            } else "favlist" === t && (o += '<p class="metadata">', o += '<span class="nb-videos">' + e.getVisibilityPicto() + " " + e.getNbVideosTxt() + "</span>", e.isListFull() && (o += ' <span class="max-videos-reached" title="' + xv.i18n.__("video.favs.max_vids_reached") + '">' + xv.i18n.__("video.favs.full") + "</span>"), o += e.getTagsHTMLList(), o += "</p>");
            return "categorie" !== t && "post-video" !== t && "post-empty" !== t && (o += "</div>"), o += "</div>", {
                html: o,
                "class": A
            }
        }, n.write_related = function(e) {
            var t = e.length;
            if (0 !== t) {
                var i = !1,
                    o = [],
                    a = "";
                if ("#show-related" === window.location.hash && (o.push("expanded"), "function" == typeof window.display_related_native && window.display_related_native()), xv.conf.data.sponsors && xv.conf.data.sponsors.length > 0 && !xv.conf.data.hide_sponsors && o.push("is-loading-sponsor"), "object" == typeof xv.conf.dyn.vmdata && "number" == typeof xv.conf.dyn.vmdata.nb_playlists && xv.conf.dyn.vmdata.nb_playlists > 5 && o.push("is-loading-related-content"), o.length > 0) {
                    a = 'class="';
                    for (var r in o) a += (r > 0 ? " " : "") + o[r];
                    a += '"'
                }
                var d = '<div id="related-videos" ' + a + ">";
                d += '<div class="mozaique">';
                for (var l = 0; l < t; l++) {
                    try {
                        var c = e[l],
                            u = {
                                count: l
                            },
                            p = n.get_thumb_block_html(c, "related", u)
                    } catch (v) {
                        return
                    }
                    d += p.html
                }
                try {
                    d += "</div>", i && (d += '<a href="' + i + '" class="btn btn-default plist"><span class="icon-f icf-favorites" title="' + xv.i18n.__("playlist.playlist") + '"></span> <span class="mobile-hide"> ' + xv.i18n.__("video.playlist_all_related", null, null, "Show more related videos") + "</span></a>"), d += '<a href="#" class="btn btn-default show-more ignore-popunder">' + xv.i18n.__("video.show_more_related", null, null, "Show more related videos") + "</a>", d += "</div>", document.write(d)
                } catch (v) {
                    return
                }
                if ("default" === s) {
                    var f = document.getElementById("listing-settings"),
                        h = document.getElementById("related-videos");
                    if (h && f) {
                        var m = h.getElementsByTagName("DIV");
                        for (var g in m)
                            if (xv.dom.hasClass(m[g], "mozaique")) {
                                m[g].parentNode.insertBefore(f, m[g].nextSibling);
                                break
                            }
                    }
                }
            }
        }, n.update_related_class = function() {
            var e = document.getElementById("related-videos");
            if (!e) return !1;
            var t = xv.dom.getChildren(e);
            if (0 === t.length) return !1;
            e = t[0];
            for (var n = xv.dom.getChildren(e), i = 0, o = 0; o < n.length; o++)
                if (xv.dom.hasClass(n[o], "thumb-nat-ad") || !(xv.dom.hasClass(n[o], "video-right") || xv.dom.hasClass(n[o], "thumb-ad") || xv.dom.hasClass(n[o], "video-ad"))) {
                    var s = N(n[o]);
                    n[o].className = s + " " + z("related", {
                        pos: i,
                        viewed: xv.dom.hasClass(n[o], "viewed"),
                        no_rotate: xv.dom.hasClass(n[o], "no-rotate"),
                        with_uploader: xv.dom.hasClass(n[o], "with-uploader")
                    }), i++
                } return !0
        };
        var R, B = function() {
            if ("string" == typeof R) return R;
            R = "_thumbl";
            var e = 1;
            "number" == typeof window.devicePixelRatio && (e = window.devicePixelRatio);
            var t = 4;
            i <= 480 ? t = 2 : i <= 768 ? t = 3 : i >= 1024 && (t = 5);
            var n = Math.min(i, 1280) * e;
            return n <= 180 * t && (R = "_thumb"), R
        };
        n.replaceActGalThumbUrl = function(e) {
            var t = B();
            return -1 !== e.indexOf("/videos/takedown_docs/") ? e.replace(/_t\.jpg/g, t.replace("humb", "") + ".jpg") : e.replace(/_thumb\.jpg/g, t + ".jpg")
        }, n.replaceActGalVerifThumbUrl = function(e) {
            return e.replace(/_thumb/g, "_t", n.replaceActGalThumbUrl(e))
        }, n.is_thumb_block_ppv = function(e) {
            return !!e.pmp
        }, n.is_thumb_block_membership = function(e) {
            return !!e.pmf
        }, n.is_thumb_block_premium_sub = function(e) {
            return !!e.pms
        }, n.getVideoId = function(e) {
            if (!(e = xv.dom.element(e))) return !1;
            var t = this.getDataId(e);
            if (!1 !== t) return t;
            var n = e.getAttribute("id");
            if ("string" != typeof n) return !1;
            var i = n.match(new RegExp(/^video_(\d+).*/));
            return !("object" != typeof i || !i || !i[1]) && (e.setAttribute("data-id", i[1]), parseInt(i[1]))
        }, n.getDataId = function(e) {
            return !!(e = xv.dom.element(e)) && (parseInt(e.getAttribute("data-id")) || !1)
        }, n.getIsThumbBlockVideo = function(e) {
            if (!(e = xv.dom.element(e))) return !1;
            var t = e.getAttribute("id");
            return "string" == typeof t && 0 === t.indexOf("video_")
        }, window.xv || (window.xv = {}), window.xv.thumbs = n, document.addEventListener && document.addEventListener("DOMContentLoaded", function(e) {
            n.checkPendingThumbToDisplay(), window.addEventListener("scroll", function(e) {
                n.checkPendingThumbToDisplay()
            })
        })
    }(),
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
                f = r.validator;
            if ("function" == typeof f && !f(o)) return "";
            if ("function" == typeof p) return p(o);
            var h = "function" == typeof u ? u(o) : u,
                m = o[d],
                g = null === m || m === undefined ? "" : m;
            switch (c) {
                case "int":
                    return a(g, h);
                case "bool":
                    return t(g);
                case "date":
                    return n(g, h);
                case "bits":
                    return s(g, h - g.length).substring(0, h);
                case "list":
                    return g.reduce(function(e, t) {
                        return e + l({
                            input: t,
                            fields: r.fields
                        })
                    }, "");
                case "language":
                    return i(g, h);
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
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : C,
                n = c(e, t);
            if (n) {
                for (var i = s(n, 7 - (n.length + 7) % 8), o = "", a = 0; a < i.length; a += 8) o += String.fromCharCode(parseInt(i.substr(a, 8), 2));
                return base64.encode(o).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
            }
            return null
        }

        function f(e) {
            for (var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set, n = 0, i = 0; i < e.length; i += 1) n = Math.max(n, e[i].id);
            for (var o = 0; o < t.length; o += 1) n = Math.max(n, t[o]);
            for (var s = "", a = 1; a <= n; a += 1) s += -1 !== t.indexOf(a) ? "1" : "0";
            return s
        }

        function h(e) {
            for (var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [], n = "", i = 1; i <= e; i += 1) n += -1 !== t.indexOf(i) ? "1" : "0";
            return s(n, Math.max(0, e - n.length))
        }

        function m(e) {
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
            t || (t = m(r));
            var c = p(k({}, e, {
                    maxVendorId: t,
                    purposeIdBitString: f(l, o),
                    isRange: !1,
                    vendorIdBitString: h(t, s)
                })),
                g = u(r, s),
                v = p(k({}, e, {
                    maxVendorId: t,
                    purposeIdBitString: f(l, o),
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
        var _ = {
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
            b = document,
            y = "",
            x = !1;
        window.xv || (window.xv = {}), xv.conf || (xv.conf = {}), xv.conf.dyn || (xv.conf.dyn = {}), xv.conf.dyn.disfeats || (xv.conf.dyn.disfeats = []), xv.conf.dyn.enafeats || (xv.conf.dyn.enafeats = []), xv.conf.dyn.gdpra && (_.bAdvertisingCallbackDisabled = !1);
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
        var C = {
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
            E = function(e, t, n, i) {
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
            O = function(e, t, n, i) {
                "" !== T && E("/metrics/" + e.sMetricBase + "/" + e.sEvent + "?_=" + T, null, n, i)
            },
            A = "color:#000",
            D = function(e, t, n, i) {
                return t || (t = e), n && (e = window.location.protocol + "//" + e), i && (t = window.location.protocol + "//" + t), '<a href="' + e + '" target="_blank" style="' + A + '" onClick="event.stopPropagation ? event.stopPropagation() : (even.cancelBubble = true);">' + t + "</a>"
            },
            N = {
                MINS_5: {
                    sDefault: "5 mins",
                    sClass: "cookie-duration-5min",
                    sTradKey: "misc.nb_mins_long",
                    oTradArgs: {
                        "%nb%": "5"
                    },
                    iMs: 3e5
                },
                MINS_10: {
                    sDefault: "10 mins",
                    sClass: "cookie-duration-10min",
                    sTradKey: "misc.nb_mins_long",
                    oTradArgs: {
                        "%nb%": "10"
                    },
                    iMs: 6e5
                },
                HOURS_2: {
                    sDefault: "2 hours",
                    sClass: "cookie-duration-2h",
                    sTradKey: "misc.nb_hours_long",
                    oTradArgs: {
                        "%nb%": "2"
                    },
                    iMs: 72e5
                },
                HOURS_3: {
                    sDefault: "3 hours",
                    sClass: "cookie-duration-3h",
                    sTradKey: "misc.nb_hours_long",
                    oTradArgs: {
                        "%nb%": "3"
                    },
                    iMs: 108e5
                },
                HOURS_6: {
                    sDefault: "6 hours",
                    sClass: "cookie-duration-6h",
                    sTradKey: "misc.nb_hours_long",
                    oTradArgs: {
                        "%nb%": "6"
                    },
                    iMs: 216e5
                },
                HOURS_16: {
                    sDefault: "16 hours",
                    sClass: "cookie-duration-16h",
                    sTradKey: "misc.nb_hours_long",
                    oTradArgs: {
                        "%nb%": "16"
                    },
                    iMs: 576e5
                },
                HOURS_24: {
                    sDefault: "24 hours",
                    sClass: "cookie-duration-24h",
                    sTradKey: "misc.nb_hours_long",
                    oTradArgs: {
                        "%nb%": "24"
                    },
                    iMs: 864e5
                },
                DAYS_7: {
                    sDefault: "7 days",
                    sClass: "cookie-duration-7d",
                    sTradKey: "misc.nb_days_long",
                    oTradArgs: {
                        "%nb%": "7"
                    },
                    iMs: 6048e5
                },
                DAYS_15: {
                    sDefault: "15 days",
                    sClass: "cookie-duration-15d",
                    sTradKey: "misc.nb_days_long",
                    oTradArgs: {
                        "%nb%": "15"
                    },
                    iMs: 1296e6
                },
                DAYS_30: {
                    sDefault: "30 days",
                    sClass: "cookie-duration-30d",
                    sTradKey: "misc.nb_days_long",
                    oTradArgs: {
                        "%nb%": "30"
                    },
                    iMs: 2592e6
                },
                DAYS_60: {
                    sDefault: "60 days",
                    sClass: "cookie-duration-60d",
                    sTradKey: "misc.nb_days_long",
                    oTradArgs: {
                        "%nb%": "60"
                    },
                    iMs: 5184e6
                },
                DAYS_90: {
                    sDefault: "90 days",
                    sClass: "cookie-duration-90d",
                    sTradKey: "misc.nb_days_long",
                    oTradArgs: {
                        "%nb%": "90"
                    },
                    iMs: 7776e6
                },
                DAYS_168: {
                    sDefault: "168 days",
                    sClass: "cookie-duration-168d",
                    sTradKey: "misc.nb_days_long",
                    oTradArgs: {
                        "%nb%": "168"
                    },
                    iMs: 145152e5
                },
                DAYS_179: {
                    sDefault: "179 days",
                    sClass: "cookie-duration-179d",
                    sTradKey: "misc.nb_days_long",
                    oTradArgs: {
                        "%nb%": "179"
                    },
                    iMs: 154656e5
                },
                MONTHS_3: {
                    sDefault: "3 months",
                    sClass: "cookie-duration-3m",
                    sTradKey: "misc.nb_months_long",
                    oTradArgs: {
                        "%nb%": "3"
                    },
                    iMs: 7884e6
                },
                YEAR_1: {
                    sDefault: "1 year",
                    sClass: "cookie-duration-1y",
                    sTradKey: "misc.one_year_long",
                    oTradArgs: {},
                    iMs: 31536e6
                },
                YEARS_2: {
                    sDefault: "2 years",
                    sClass: "cookie-duration-2y",
                    sTradKey: "misc.nb_years_long",
                    oTradArgs: {
                        "%nb%": "2"
                    },
                    iMs: 63072e6
                },
                SESSION: {
                    sDefault: "session",
                    sClass: "cookie-duration-session",
                    sTradKey: "misc.user_session_short",
                    oTradArgs: {},
                    iMs: 864e5
                }
            },
            L = {
                DISCLAIMER_CLOSED: {
                    sName: "dscld",
                    oDuration: N.DAYS_90
                },
                COOKIES_POP_CLOSED: {
                    sName: "cksd",
                    oDuration: N.DAYS_90
                }
            },
            j = {
                essential: {
                    title: "Essential Cookies",
                    titleTradKey: "legal.disclaimer.cookies_essential",
                    id: "essential",
                    name: "es",
                    desc: "These are cookies that we are required to use in order to operate our website. They include, for example, cookies that help with the website loading and display or enable you to log into secure areas of our website. We are allowed to use these cookies without your prior consent so they are always active.",
                    descTrad: {
                        fr: "Ce sont des cookies que nous sommes tenus d'utiliser pour faire fonctionner notre site Web. Ils comprennent, par exemple, des cookies qui facilitent le chargement et l'affichage du site Web ou vous permettent de vous connecter à des zones sécurisées de notre site Web. Nous sommes autorisés à utiliser ces cookies sans votre consentement préalable afin qu'ils soient toujours actifs.",
                        cs: "Tyto soubory cookie a podobné technologie jsou vyžadovány k zajištění funkčnosti našich Internetových stránek. Patří sem např. cookies, které přispívají k nahrávání a zobrazovaní Internetových stránek, umožňují vám přihlásit se do zabezpečených částí našich Internetových stránek nebo zvyšují bezpečnost Internetových stránek. Tyto soubory cookie jsme oprávněni používat bez vašeho předchozího souhlasu. Pokud tyto cookies ve svém prohlížeči zablokujete, nebudou vám Internetové stránky fungovat správně."
                    },
                    datas: [{
                        title: "nb_thumbs_cols_XXX",
                        desc: "Legitimate interest / Proper display of the Website. / It keeps the number of column of thumbs.",
                        descTrad: {
                            fr: "Intérêt légitime / Affichage correct du site Web. / Il conserve le nombre de colonnes de la grille.",
                            cs: "Oprávněný zájem / Správné zobrazení Internetových stránek. / Zachovává počet sloupců náhledů."
                        },
                        duration: N.DAYS_90
                    }, {
                        title: "thumbloadstats_vthumbs (HTML5 Local Storage)",
                        titleTrad: {
                            fr: "thumbloadstats_vthumbs (Stockage Local HTML5)",
                            cs: "thumbloadstats_vthumbs (Místní úložiště HTML5)"
                        },
                        desc: "Legitimate interest / High availability and performance of the Website. / It measures the thumb loading speed.",
                        descTrad: {
                            fr: "Intérêt légitime / Haute disponibilité et performance du Site Web. / Il mesure la vitesse de chargement d'une miniature.",
                            cs: "Oprávněný zájem / Vysoká dostupnost a výkonnost Internetových stránek. / Měří rychlost nahrávání náhledů. /"
                        },
                        duration: N.DAYS_90
                    }, {
                        title: "static_cdn",
                        desc: "Legitimate interest / High availability and performance of the Website. / It allows us to know which content delivery network is used.",
                        descTrad: {
                            fr: "Intérêt légitime / Haute disponibilité et performance du Site Web. / Cela nous permet de savoir quel réseau de diffusion de contenu est utilisé.",
                            cs: "Oprávněný zájem / Vysoká dostupnost a výkonnost Internetových stránek. / Umožňuje nám zjistit, jakou síť pro doručování obsahu používáte."
                        },
                        duration: N.DAYS_168
                    }, {
                        title: "html5_networkspeed",
                        desc: "Legitimate interest / High availability and performance of the Website. / It allows us to keep track of the user's internet speed.",
                        descTrad: {
                            fr: "Intérêt légitime / Haute disponibilité et performance du Site Web. / Cela nous permet de suivre la vitesse Internet de l'utilisateur.",
                            cs: "Oprávněný zájem / Vysoká dostupnost a výkonnost Internetových stránek. / Umožňuje nám sledovat rychlost internetového připojení uživatele."
                        },
                        duration: N.DAYS_30
                    }, {
                        title: "session_blih",
                        desc: "Legitimate interest / Increasing account security. / It keeps local login history for account security (trusted browser).",
                        descTrad: {
                            fr: "Intérêt légitime / Augmenter la sécurité du compte. / Il conserve l'historique de connexion local pour la sécurité du compte (navigateur de confiance).",
                            cs: "Oprávněný zájem / Zvyšování bezpečnosti účtu. / Ukládá historii přihlašování za účelem zajištění bezpečnosti účtu (důvěryhodný prohlížeč)."
                        },
                        duration: N.DAYS_60
                    }, {
                        title: "session_rem_XXX",
                        desc: "Legitimate interest / Increasing account security. / It is used to remember the users' browsers for double authentication (2FA).",
                        descTrad: {
                            fr: "Intérêt légitime / Augmenter la sécurité du compte. / Il est utilisé pour mémoriser les navigateurs des utilisateurs pour la double authentification (2FA).",
                            cs: "Oprávněný zájem / Zvyšování bezpečnosti účtu. / Používá se k zapamatování prohlížečů uživatelů za účelem dvojitého ověření totožnosti (2FA)."
                        },
                        duration: N.DAYS_30
                    }, {
                        title: "session_token",
                        desc: "Legitimate interest / Enabling login to user account. / It stores user logged information, such as the user login detail and some information about the account.",
                        descTrad: {
                            fr: "Intérêt légitime / Activation de la connexion au compte utilisateur. / Il stocke les informations enregistrées par l'utilisateur, telles que les détails de connexion de l'utilisateur et certaines informations sur le compte.",
                            cs: "Oprávněný zájem / Umožnění přihlášení k účtu. / Ukládá údaje zapsané uživatelem, např. přihlašovací údaje uživatele a určité informace o účtu."
                        },
                        duration: N.DAYS_30
                    }, {
                        title: "hide_xmsg",
                        desc: "Legitimate interest / Proper display of the Website. / It allows us to know whether the age confirmation window has already been displayed.",
                        descTrad: {
                            fr: "Intérêt légitime / Bon affichage du site Web.",
                            cs: "Oprávněný zájem / Správné zobrazení Internetových stránek. / Umožňuje nám zjistit, zda již bylo zobrazeno okno pro potvrzení věku."
                        },
                        duration: N.DAYS_15
                    }, {
                        title: "last_subs_check",
                        desc: "Legitimate interest / High availability and performance of the Website. / It avoids making too much queries to the server.",
                        descTrad: {
                            fr: "Intérêt légitime / Haute disponibilité et performance du site Web.",
                            cs: "Oprávněný zájem / Vysoká dostupnost a výkonnost Internetových stránek. / Zabraňuje přílišnému počtu dotazů na server."
                        },
                        duration: N.MINS_5
                    }, {
                        title: "chat_deco",
                        desc: "Legitimate interest / Proper display of the Website. / It allows us to know whether the user is logout from chat to avoid making request in chat.",
                        descTrad: {
                            fr: "Intérêt légitime / Bon affichage du site Web.",
                            cs: "Oprávněný zájem / Správné zobrazení Internetových stránek. / Umožňuje nám zjistit, zda se uživatel odhlásil z chatu, aby se zabránilo zadávání požadavků v chatu."
                        },
                        duration: N.MINS_10
                    }, {
                        title: "disclaimer_vpn_display",
                        desc: "Legitimate interest / Proper display of the Website. / Tell if you already close the disclaimer / It allows us to know whether the user has closed the disclaimer.",
                        descTrad: {
                            fr: "Intérêt légitime / Bon affichage du site Web. / Indique si vous avez déjà fermé l'avertissement de contenu adulte.",
                            cs: "Oprávněný zájem / Správné zobrazení Internetových stránek. / Zaznamenává, zda jste zavřeli okno upozornění. / Umožňuje nám zjistit, zda uživatel zavřel disclaimer."
                        },
                        duration: N.DAYS_90
                    }, {
                        title: "chat_data_c",
                        desc: "Legitimate interest / Proper display of the Website. / Store your chat private key for encryption",
                        descTrad: {
                            fr: "Intérêt légitime / Bon affichage du site Web. / Stocke la clé privée de votre chat pour le cryptage.",
                            cs: "Oprávněný zájem / Správné zobrazení Internetových stránek. / Ukládá soukromý klíč chatu pro šifrování."
                        },
                        duration: N.DAYS_168
                    }, {
                        title: "xv_nbview",
                        desc: "Legitimate interest / Offering more relevant content. / It allows us to know how many videos has been played for the last 8 hours.",
                        descTrad: {
                            fr: "Intérêt légitime / Bon affichage du site Web.",
                            cs: "Oprávněný zájem / Správné zobrazení Internetových stránek. / Umožňuje nám zjistit, kolik videí bylo přehráno za posledních 8 hodin."
                        },
                        duration: N.HOURS_16
                    }, {
                        title: "wgvid_user_msg",
                        desc: "Legitimate interest / Proper display of the Website. / It allows us to know whether the user has already read a notification.",
                        descTrad: {
                            fr: "Intérêt légitime / Bon affichage du site Web.",
                            cs: "Oprávněný zájem / Správné zobrazení Internetových stránek. / Umožňuje nám zjistit, zda uživatel četl oznámení."
                        },
                        duration: N.DAYS_90
                    }, {
                        title: "zone-cap-{idzone}",
                        desc: "Legitimate interest / Proper display of the Website / Limiting the maximum number of times a visitor can see an ad zone within a certain time period.",
                        descTrad: {
                            fr: "Intérêt légitime / Bon affichage du site Web. / Limite le nombre maximum de fois qu'un visiteur peut voir une zone publicitaire au cours d'une certaine période de temps.",
                            cs: "Oprávněný zájem / Správné zobrazení Internetových stránek. / Omezení maximálního počtu zobrazení reklamní zóny návštěvníkem během určitého časového období."
                        },
                        duration: N.HOURS_24
                    }, {
                        title: L.DISCLAIMER_CLOSED.sName,
                        desc: "Legitimate interest / Proper display of the Website. / Tell if you already close the disclaimer / It allows us to know whether the user has closed the disclaimer.",
                        descTrad: {
                            fr: "Intérêt légitime / Bon affichage du site Web. / Indique si vous avez déjà fermé l'avertissement de contenu adulte.",
                            cs: "Oprávněný zájem / Správné zobrazení Internetových stránek. / Zaznamenává, zda jste zavřeli okno upozornění. / Umožňuje nám zjistit, zda uživatel zavřel disclaimer."
                        },
                        duration: L.DISCLAIMER_CLOSED.oDuration
                    }, {
                        title: L.COOKIES_POP_CLOSED.sName,
                        desc: "Legitimate interest / Proper display of the Website. / Remember user consent / It allows us to know what choices have been made regarding cookie consent.",
                        descTrad: {
                            fr: "Intérêt légitime / Bon affichage du site Web. / Indique le choix que vous avez fait au sujet des cookies.",
                            cs: "Oprávněný zájem / Správné zobrazení Internetových stránek. / Umožňuje nám zjistit, zda uživatel souhlasil s používáním cookies"
                        },
                        duration: L.COOKIES_POP_CLOSED.oDuration
                    }, {
                        title: "XVUPLOADSESSION",
                        desc: "Legitimate interest / Proper display of the Website. / It allows logged users to be able to upload videos.",
                        descTrad: {
                            fr: "Intérêt légitime / Affichage correct du Site Internet. / Il permet aux utilisateurs connectés de pouvoir uploader des vidéos."
                        },
                        duration: N.SESSION
                    }, {
                        title: "io",
                        desc: "Legitimate interest / Proper display of the Website. / For logged users, it allows us to maintain the connection to chat servers.",
                        descTrad: {
                            fr: "Intérêt légitime / Affichage correct du Site Internet. / Pour les utilisateurs connectés, cela nous permet de maintenir la connexion aux serveurs de chat."
                        },
                        duration: N.SESSION
                    }, {
                        title: "_GRECAPTCHA",
                        desc: "Legitimate interest / Security / Google Recaptcha service sets this cookie to identify bots to protect the website against malicious spam attacks.",
                        descTrad: {
                            fr: "Intérêt légitime / Sécurité / Le service Google Recaptcha définit ce cookie pour identifier les robots afin de protéger le site Web contre les attaques de spam malveillantes."
                        },
                        duration: N.DAYS_179
                    }, {
                        title: "Rc::a",
                        desc: "Legitimate interest / Security / Google Recaptcha service sets this cookie to identify bots to protect the website against malicious spam attacks.",
                        descTrad: {
                            fr: "Intérêt légitime / Sécurité / Le service Google Recaptcha définit ce cookie pour identifier les robots afin de protéger le site Web contre les attaques de spam malveillantes."
                        },
                        duration: N.SESSION
                    }, {
                        title: "Rc::b",
                        desc: "Legitimate interest / Security / Google Recaptcha service sets this cookie to identify bots to protect the website against malicious spam attacks.",
                        descTrad: {
                            fr: "Intérêt légitime / Sécurité / Le service Google Recaptcha définit ce cookie pour identifier les robots afin de protéger le site Web contre les attaques de spam malveillantes."
                        },
                        duration: N.SESSION
                    }, {
                        title: "Rc::c",
                        desc: "Legitimate interest / Security / Google Recaptcha service sets this cookie to identify bots to protect the website against malicious spam attacks.",
                        descTrad: {
                            fr: "Intérêt légitime / Sécurité / Le service Google Recaptcha définit ce cookie pour identifier les robots afin de protéger le site Web contre les attaques de spam malveillantes."
                        },
                        duration: N.SESSION
                    }, {
                        title: "Rc::f",
                        desc: "Legitimate interest / Security / Google Recaptcha service sets this cookie to identify bots to protect the website against malicious spam attacks.",
                        descTrad: {
                            fr: "Intérêt légitime / Sécurité / Le service Google Recaptcha définit ce cookie pour identifier les robots afin de protéger le site Web contre les attaques de spam malveillantes."
                        },
                        duration: N.SESSION
                    }]
                }
            };
        j[w.S_F_COOKIES_FUNCTIONALITY] = {
            title: "Functionality Cookies",
            titleTradKey: "legal.disclaimer.cookies_functionality",
            id: "functionality",
            name: w.S_F_COOKIES_FUNCTIONALITY,
            desc: "These cookies help us to personalise and improve your experience when browsing our Website. For example, they help us to remember your preferences (video player preferences, language and region selection etc.). We will use this information to make our Website more relevant to your interests and more user friendly. ",
            descTrad: {
                fr: "Ces cookies nous aident à personnaliser et à améliorer votre expérience lorsque vous naviguez sur notre site Web. Par exemple, ils nous aident à mémoriser vos préférences afin que vous n'ayez pas à ressaisir les informations que vous avez déjà fournies (informations de connexion, préférences du lecteur vidéo, sélection de la langue et de la région, etc.). Nous utiliserons ces informations pour rendre notre site Web plus adapté à vos intérêts, plus convivial et plus sûr.",
                cs: "Tyto soubory cookie slouží k tomu, abychom mohli přizpůsobit a zkvalitnit vaši uživatelskou zkušenost při prohlížení našich Internetových stránek. S jejich přispěním jsme např. schopni si zapamatovat vaše preference (nastavení video přehrávače, výběr jazyka a regionu apod.). Tyto údaje používáme k tomu, abychom naše Internetové stránky více přizpůsobili vašim zájmům a aby byly uživatelsky přívětivější. "
            },
            datas: [{
                id: "last_views",
                title: "last_views",
                desc: "Consent / Offering more relevant content. / It allows us to suggest similar videos to those previously watched by a user.",
                descTrad: {
                    fr: "Consentement / Offrir un contenu plus pertinent. / Il permet de proposer des vidéos similaires à celles visionnées précédemment par un internaute.",
                    cs: "Souhlas / Nabídka relevantnějšího obsahu. / Umožňuje nám, abychom uživateli nabízeli videa podobná těm, které sledoval dříve."
                },
                duration: N.MONTHS_3
            }, {
                id: "session_ath",
                title: "session_ath",
                desc: "Consent / Optimizing the Website display. / It remembers whether the user prefers to browse the website in light or dark mode.",
                descTrad: {
                    fr: "Consentement / Optimisation de l'affichage du site Web. / Il se souvient si l'utilisateur préfère naviguer sur le site Web en mode clair ou sombre.",
                    cs: "Souhlas / Optimalizace zobrazení Internetových stránek. / Zapamatuje si, jestli uživatel dává přednost prohlížení internetových stránek ve světlém či tmavém režimu."
                },
                duration: N.DAYS_90
            }, {
                id: "user_theme_fav",
                title: "user_theme_fav (Stockage Local HTML5)",
                bIsLocalStorage: !0,
                titleTrad: {
                    fr: "user_theme_fav (Stockage Local HTML5)",
                    cs: "user_theme_fav (Místní úložiště HTML5)"
                },
                desc: "Consent / Optimizing the Website display. / It remembers whether the user prefers to browse the website in light or dark mode.",
                descTrad: {
                    fr: "Consentement / Optimisation de l'affichage du site Web. / Il se souvient si l'utilisateur préfère naviguer sur le site Web en mode clair ou sombre.",
                    cs: "Souhlas / Optimalizace zobrazení Internetových stránek. / Zapamatuje si, jestli uživatel dává přednost prohlížení internetových stránek ve světlém či tmavém režimu."
                },
                duration: N.DAYS_90
            }, {
                id: "pending_thumb",
                title: "pending_thumb",
                desc: "Consent / Offering more relevant content. /",
                descTrad: {
                    fr: "Consentement / Offrir un contenu plus pertinent.",
                    cs: "Souhlas / Nabídka relevantnějšího obsahu."
                },
                duration: N.HOURS_3
            }]
        }, j[w.S_F_COOKIES_PLAYER_PREFERENCES] = {
            title: "Player Preferences Cookies",
            titleTradKey: "legal.disclaimer.cookies_player",
            id: "player_preferences",
            name: w.S_F_COOKIES_PLAYER_PREFERENCES,
            desc: "These cookies allow us to remember your preferences when using the video player. For example, they help us to remember your settings (autoplay, quality, volume etc.).",
            descTrad: {
                fr: "Ces cookies nous permettent de sauvegarder vos préférences lors de l'utilisation du lecteur vidéo. Par exemple, ils nous aident à mémoriser vos réglages (lecture automatique, qualité, volume etc.).",
                cs: "Tyto cookies nám umožňují pamatovat si vaše preference při používání video přehrávače. Například nám pomáhají zapamatovat si vaše nastavení (automatické přehrávání, kvalitu, hlasitost atd.)."
            },
            datas: [{
                id: "html5_pref",
                title: "html5_pref",
                desc: "Consent / Better video playback. / It allows us to apply the users' preferences in using video player.",
                descTrad: {
                    fr: "Consentement / Meilleure lecture vidéo. / Cela nous permet d'appliquer les préférences des utilisateurs lors de l'utilisation du lecteur vidéo.",
                    cs: "Souhlas / Lepší přehrávání videí. / Umožňuje nám použít preference uživatele v oblasti video přehrávačů."
                },
                duration: N.DAYS_30
            }]
        }, j[w.S_F_COOKIES_ADVERTISING] = {
            title: "Advertising Cookies",
            titleTradKey: "legal.disclaimer.cookies_advertising",
            id: "advertising",
            name: w.S_F_COOKIES_ADVERTISING,
            desc: "These third-party cookies help us display ads that are more related to your interests and the content you're viewing. They assist us in delivering more relevant promotions. For example, they keep track of the ads you've previously seen and prevent displaying already clicked campaigns.",
            datas: [{
                title: "__uvt",
                desc: "Consent / To prevent fraud by quantifying unique users based on impressions and clicks, and to ensure interactions are genuine.",
                duration: N.YEARS_2
            }, {
                title: "c-{idcampaign}-{idvariation}",
                desc: "Consent / Tracking Clicks and avoiding displaying already clicked campaigns.",
                duration: N.HOURS_24
            }, {
                title: "goals",
                desc: "Consent / Perform retargeting.",
                duration: N.YEAR_1
            }, {
                title: "c-tag",
                desc: "Consent / Performing conversion tracking.",
                duration: N.DAYS_90
            }, {
                title: "impressions",
                desc: "Consent / Frequency capping: Limiting the maximum number of times a user can see an ad within a certain time period.",
                duration: N.HOURS_24
            }]
        };
        var z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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
            P = m,
            h = h,
            f = f,
            R = R,
            C = C,
            B = /^[a-z]{2}$/,
            V = void 0,
            F = function() {
                function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    v(this, e), this.maxVendorId = 0, this.created = new Date, this.lastUpdated = new Date, this.version = 1, this.vendorList = null, this.vendorListVersion = null, this.cmpId = null, this.cmpVersion = null, this.consentScreen = null, this.consentLanguage = null, this.allowedPurposeIds = [], this.allowedVendorIds = [], t && (V = t, Object.assign(this, R(t)))
                }
                return M(e, [{
                    key: "getConsentString",
                    value: function() {
                        var e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0],
                            t = void 0;
                        if (V && !e) t = V;
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
                            }), V = t
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
                        V = "", this.lastUpdated = e ? new Date(e) : new Date
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
                        V = "", this.created = e ? new Date(e) : new Date
                    }
                }, {
                    key: "getMaxVendorId",
                    value: function() {
                        return this.maxVendorId || this.vendorList && (this.maxVendorId = P(this.vendorList.vendors)), this.maxVendorId
                    }
                }, {
                    key: "getParsedVendorConsents",
                    value: function() {
                        return h(P(this.vendorList.vendors), this.allowedVendorIds)
                    }
                }, {
                    key: "getParsedPurposeConsents",
                    value: function() {
                        return f(this.vendorList.purposes, this.allowedPurposeIds)
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
                        if ("object" !== (void 0 === e ? "undefined" : z(e))) throw new Error("ConsentString - You must provide an object when setting the global vendor list");
                        if (!e.vendorListVersion || !Array.isArray(e.purposes) || !Array.isArray(e.vendors)) throw new Error("ConsentString - The provided vendor list does not respect the schema from the IAB EU’s GDPR Consent and Transparency Framework");
                        this.vendorList && this.vendorListVersion === e.vendorListVersion || (V = "", this.vendorList = {
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
                        e !== this.cmpId && (V = "", this.cmpId = e)
                    }
                }, {
                    key: "getCmpId",
                    value: function() {
                        return this.cmpId
                    }
                }, {
                    key: "setCmpVersion",
                    value: function(e) {
                        e !== this.cmpVersion && (V = "", this.cmpVersion = e)
                    }
                }, {
                    key: "getCmpVersion",
                    value: function() {
                        return this.cmpVersion
                    }
                }, {
                    key: "setConsentScreen",
                    value: function(e) {
                        e !== this.consentScreen && (V = "", this.consentScreen = e)
                    }
                }, {
                    key: "getConsentScreen",
                    value: function() {
                        return this.consentScreen
                    }
                }, {
                    key: "setConsentLanguage",
                    value: function(e) {
                        if (!1 === B.test(e)) throw new Error("ConsentString - The consent language must be a two-letter ISO639-1 code (en, fr, de, etc.)");
                        e !== this.consentLanguage && (V = "", this.consentLanguage = e)
                    }
                }, {
                    key: "getConsentLanguage",
                    value: function() {
                        return this.consentLanguage
                    }
                }, {
                    key: "setPurposesAllowed",
                    value: function(e) {
                        V = "", this.allowedPurposeIds = e
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
                        V = "", !0 === t ? -1 === n && this.allowedPurposeIds.push(e) : !1 === t && -1 !== n && this.allowedPurposeIds.splice(n, 1)
                    }
                }, {
                    key: "isPurposeAllowed",
                    value: function(e) {
                        return -1 !== this.allowedPurposeIds.indexOf(e)
                    }
                }, {
                    key: "setVendorsAllowed",
                    value: function(e) {
                        V = "", this.allowedVendorIds = e
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
                        V = "", !0 === t ? -1 === n && this.allowedVendorIds.push(e) : !1 === t && -1 !== n && this.allowedVendorIds.splice(n, 1)
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
                        return C[t.version].metadataFields.forEach(function(e) {
                            n[e] = t[e]
                        }), n
                    }
                }]), e
            }(),
            q = function() {
                if ("undefined" == typeof navigator || "string" != typeof navigator.userAgent) return !1;
                var e = navigator.userAgent;
                return e.indexOf("Edge/") >= 0 ? "edge" : (e = e.toLowerCase(), e.indexOf("trident/7.0;") >= 0 && e.indexOf("rv:11.0") >= 0 ? "ie10_11" : e.indexOf("msie 10.0;") >= 0 ? "ie10_11" : !!e.match(/msie \d\.0;/) && "old_ie")
            },
            H = function() {
                var e = q();
                return "ie10_11" === e || "edge" === e ? '<style rel="stylesheet">\n.img-blured img, .img-blured video{\nvisibility:hidden;\n}\n.img-blured .thumb-block .microthumb .microthumb-thumb,.img-blured .quickies__list-elem{\nbackground:#000;\n}\n.img-blured img.no-blur{\nvisibility:inherit;\n}\n</style>\n' : "old_ie" === e ? "<style rel=\"stylesheet\">\n.img-blured img, .img-blured video{\nfilter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='30');\n}\n.img-blured .thumb-block .microthumb .microthumb-thumb,.img-blured .quickies__list-elem{\nbackground:#000;\n}\n.img-blured img.no-blur{\nfilter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='0');\n}\n</style>\n" : '<svg height="0" xmlns="http://www.w3.org/2000/svg" style="position:absolute"><filter id="svgBlur" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur in="SourceGraphic" stdDeviation="10"/></filter></svg>\n<style rel="stylesheet">.img-blured img,.img-blured video,.img-blured .exo-native-widget-item-image,.img-blured .thumb-block .microthumb .microthumb-thumb,.img-blured .quickies__list-elem{\n-webkit-filter:blur(10px);\n-moz-filter:blur(10px);\n-ms-filter:blur(10px);\n-o-filter:blur(10px);\nfilter:url(\'#svgBlur\');\nfilter:blur(10px);\n}\n.img-blured img.no-blur{\n-webkit-filter:blur(0);\n-moz-filter:blur(0);\n-ms-filter:blur(0);\n-o-filter:blur(0);\nfilter:none;\nfilter:blur(0);\n}\n</style>\n'
            },
            U = function(e, t) {
                var n = "color:#000;background:#fff;box-shadow:0 0 20px black;",
                    i = "500px",
                    o = "";
                return t ? n = "color:#333;background:#98ceee;box-shadow:0 0 20px black;" : e.toLowerCase().indexOf("xnxx") > -1 ? (n = "color:#fff;background:#000090;box-shadow:0 0 20px black;", i = "600px", o = "#disclaimer-over18,#disclaimer-cookies{color:#8aa4d9}") : e.toLowerCase().indexOf("pornorama") > -1 ? n = "border:3px solid #000;color:#000;background:#FFCA2B" : (e.toLowerCase().indexOf("xvideos") > -1 || e.toLowerCase().indexOf("xv") > -1) && (o = "#disclaimer-over18,#disclaimer-cookies{color:#777}"), ".disclaimer-opened, .disclaimer-opened body {overflow: hidden;position: relative;height: 100%;}#disclaimer_background{position:absolute;display:block;z-index:80000;left:0;top:0;bottom:0;right:0;width:100%;height:100%;min-height:100%;overflow:auto;background:transparent;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center}#disclaimer_message{width:" + i + ";max-width:96%;font-size:15px;line-height:22px;text-align:center;margin:auto;" + n + ";}" + o
            },
            W = function() {
                if (xv.dom.scrollToTop(), x) return !1;
                x = setInterval(function() {
                    xv.dom.scrollToTop()
                }, 2e3)
            },
            G = function() {
                if (!x) return !1;
                clearInterval(x), x = !1
            },
            Y = function(e, t) {
                var n = xv.conf.dyn.disfeats.indexOf(e),
                    i = xv.conf.dyn.enafeats.indexOf(e);
                t ? (-1 !== n && xv.conf.dyn.disfeats.splice(n, 1), -1 === i && xv.conf.dyn.enafeats.push(e)) : (-1 === n && xv.conf.dyn.disfeats.push(e), -1 !== i && xv.conf.dyn.enafeats.splice(i, 1))
            },
            K = function(e) {
                var t = j[e];
                if (void 0 !== t)
                    for (var n in t.datas) {
                        var i = t.datas[n];
                        "undefined" != typeof i.id && (!0 === i.bIsLocalStorage ? window.xv.storage && window.xv.storage.remove(i.id) : window.xv.cookies.removeLocal(i.id))
                    }
            },
            X = function(e, t) {
                Y(e, t), t || K(e)
            },
            $ = function(e, t, n) {
                if (_.bAdvertisingCookieUpdated || e !== w.S_F_COOKIES_ADVERTISING || _.callAdvertisingCallback(t, n), _.bFeatureIsToggling) return void _.setPendingFeatureToggle(e, t, n);
                _.bFeatureIsToggling = !0;
                var i = function() {
                    _.bFeatureIsToggling = !1, _.callNextPendingFeatureToggle()
                };
                if (w.IS_ENABLED(e) === t) return void i();
                E("/account/feature-" + (t ? "enabled" : "disabled"), {
                    featureid: e
                }, function(n) {
                    n && n.result && X(e, t), i()
                }, function() {
                    _.bFeatureIsToggling = !1
                })
            };
        _.getLang = function() {
            var e = "en";
            return "object" == typeof xv && xv.conf && xv.conf.dyn && xv.conf.dyn.locale && (e = xv.conf.dyn.locale), e
        }, _.display = function(e, t, n, i, o) {
            S(), this.sSiteName = e, this.sCookieManageType = "string" == typeof t ? t : !0 === t ? _.COOKIE_MANAGE_TYPE.INTEGRATED : _.COOKIE_MANAGE_TYPE.NONE, this.bIsOpen = !0, this.sCookieManageType !== _.COOKIE_MANAGE_TYPE.UPDATE_ONLY && (window.xv.cookies.get(L.DISCLAIMER_CLOSED.sName) && window.xv.cookies.get(L.COOKIES_POP_CLOSED.sName) || window.addEventListener("focus", _.onWindowFocusEvent)), this.bDisclaimerTriggered = t !== _.COOKIE_MANAGE_TYPE.NEW_ONLY, this.bCookieBannerTriggered = !!t && t !== _.COOKIE_MANAGE_TYPE.NONE, this.bIsAgeWarning = this.sCookieManageType === _.COOKIE_MANAGE_TYPE.SEPARATED || this.sCookieManageType === _.COOKIE_MANAGE_TYPE.INTEGRATED || this.sCookieManageType === _.COOKIE_MANAGE_TYPE.NONE, this.bIsCookieManageOnly = this.sCookieManageType === _.COOKIE_MANAGE_TYPE.NEW_ONLY || this.sCookieManageType === _.COOKIE_MANAGE_TYPE.UPDATE_ONLY, this.bIsCookieManageNew = this.sCookieManageType !== _.COOKIE_MANAGE_TYPE.UPDATE_ONLY, this.bHasCookieManage = this.bIsCookieManageOnly || this.sCookieManageType === _.COOKIE_MANAGE_TYPE.INTEGRATED, this.bHasCookieManageInProcess = this.bIsCookieManageOnly || this.sCookieManageType === _.COOKIE_MANAGE_TYPE.INTEGRATED || this.sCookieManageType === _.COOKIE_MANAGE_TYPE.SEPARATED;
            var s = "color: blue;text-decoration: underline;text-transform: uppercase;",
                a = (window.xv.conf.domains.info, window.xv.conf.domains.info + "/legal/cookiepolicy/"),
                r = '<p style="font-size:26px;font-weight:bold;color:#fff">' + e.replace("www.", "").toUpperCase() + "</p>",
                d = "",
                l = "#de2600",
                c = "height:60px;line-height:60px;background:#161617;position:relative;",
                u = "height:40px;line-height:40px;background:none;border:0;position:absolute;top:0;right:0;width:40px;text-align:center;",
                p = l,
                f = "background:" + p + ";border-color:#C52200;color:#FFFFFF",
                h = "background:#C52200;!important;",
                m = "",
                g = "#333333",
                v = 13,
                x = "#AAAAAA",
                k = "#EEEEEE",
                C = "#CCCCCC",
                E = "#333333",
                T = "silver",
                z = "#FFFFFF",
                M = e.toLowerCase().indexOf("xv") > -1,
                P = !M && e.toLowerCase().indexOf("xnxx") > -1,
                R = !M && !P && e.toLowerCase().indexOf("pornorama") > -1,
                B = !M && !P && !R && e.toLowerCase().indexOf("elitmovie") > -1,
                V = M && (e.toLowerCase().indexOf("red") > -1 || e.toLowerCase().indexOf("premium") > -1),
                F = P && (e.toLowerCase().indexOf("gold") > -1 || e.toLowerCase().indexOf("premium") > -1),
                q = V || F || B;
            this.bHasCookieManage && (d = this.bIsCookieManageNew ? "<button id='disclaimer-top-close-btn' onclick='window.xv.disclaimer.setFeatures(\"close\");'><span class='icon-f icf-close-thin'></span></button>" : "<button id='disclaimer-top-close-btn' onclick='window.xv.disclaimer.close_pop();'><span class='icon-f icf-close-thin'></span></button>"), M && (r = '<img class="no-blur" src="' + window.xv.conf.domains["static"] + '/v3/img/skins/default/logo/xvideos.white.png" alt="' + e + '" />', m = "background-color:#e6e6e6;;border-color:#ccc;color:#000;", u += "color:#fff;"), V && (r = '<img class="no-blur" src="' + window.xv.conf.domains["static"] + '/v3/img/skins/default/logo/xvideosred.white.png" alt="' + e + '" />'), B && (r = '<img class="no-blur" src="' + window.xv.conf.domains["static"] + '/v3/img/skins/elitmovie/premium/elitmovie.logo.png" alt="' + e + '" style="height:60px;" />', u += "color:#fff;"), P && (r = '<img class="no-blur" src="' + window.xv.conf.domains["static"] + '/v3/img/skins/xnxx/logo/xnxx.png" style="height:30px" alt="' + e + '" />', A = "color:#fff", s = "color: yellow;text-decoration: underline;text-transform: uppercase;", l = "#ff0", C = "#6792cd", E = "#000024", T = "#5c99fe", z = "#000090", c = "padding-top:15px;background:none;position:relative;", u += "color:#fff;", p = "#004be8", f = "background-color:" + p + "!important;border-color:#286fff!important;color:#fff!important;border-width:2px;border-radius:4px;", h = "background-color:#0138d3!important;", m = "background-color:#000090;border-color:#004be8;color:#FFFFFF;", g = "#FFFFFF", x = "#000048", k = "#000066"), F && (r = '<img class="no-blur" src="' + window.xv.conf.domains["static"] + '/v3/img/skins/xnxx/gold/xnxx.gold.logo.png" alt="' + e + '" />'), R && (window.xv.conf.domains.info + "/privacy_policy", A = "color:#000;text-decoration:underline;", l = "#0f4bff", c = "height:60px;line-height:60px;position:relative;", u += "color:#000;", r = '<p style="font-size:26px;font-weight:bold">' + e.replace("www.", "").toUpperCase() + "</p>", p = "#0F4BFF", f = "background-color:" + p + ";border-color:#0F4BFF;color:#fff", h = "background-color:#0138d3;", v = 10, x = "#FFA92B", k = "#FFBE00", C = "#FFA92B");
            var G = '<a href="' + a + '" target="_blank" style="' + A + '" onclick="window.xv.disclaimer.leave_site(event)">',
                Y = e.replace(".com", "").replace("www.", "") + " uses cookies and similar technologies to enable the basic functioning of the website as well as personalisation and analysis. For more information about cookies, please read our " + G + "Cookie Policy</a>. If you click “accept all cookies”, you give us your express consent to use cookies for all the purposes mentioned. You can also choose your own settings and click “save preferences”.",
                K = P ? 'ATTENTION! This site contains <span style="color:' + l + '">adult content</span>!' : 'WARNING This site is for <span style="color:' + l + '">adults only</span>!',
                X = "By entering this website, I acknowledge that I am 18 years old or older and agree to the Terms of Service, which are available " + D(window.xv.conf.domains.info + "/legal/tos", "here") + ".",
                $ = "I am 18 years old or older",
                J = P ? "If you have children, use parental controls. Read here." : "Parents read this to protect your kids.",
                Z = "always active",
                Q = "",
                ee = "",
                te = "",
                ne = "",
                ie = "",
                oe = "",
                se = "",
                ae = "",
                re = "",
                de = JSON.parse(JSON.stringify(j));
            if (de[w.S_F_COOKIES_FUNCTIONALITY].checked = this.sCookieManageType === _.COOKIE_MANAGE_TYPE.UPDATE_ONLY && w.IS_ENABLED(w.S_F_COOKIES_FUNCTIONALITY), de[w.S_F_COOKIES_PLAYER_PREFERENCES].checked = this.sCookieManageType === _.COOKIE_MANAGE_TYPE.UPDATE_ONLY && w.IS_ENABLED(w.S_F_COOKIES_PLAYER_PREFERENCES), de[w.S_F_COOKIES_ADVERTISING].checked = this.sCookieManageType === _.COOKIE_MANAGE_TYPE.UPDATE_ONLY && w.IS_ENABLED(w.S_F_COOKIES_ADVERTISING), "fr" === (ve = this.getLang()) || "cs" === ve) {
                var le = function(e) {
                    return "object" == typeof e.descTrad && "string" == typeof e.descTrad[ve] && (e.desc = e.descTrad[ve]), "object" == typeof e.titleTrad && "string" == typeof e.titleTrad[ve] && (e.title = e.titleTrad[ve]), e
                };
                for (var ce in de) {
                    var ue = de[ce];
                    le(ue);
                    for (var pe in ue.datas) le(ue.datas[pe])
                }
            }
            var fe = function() {
                    var e = window.innerHeight,
                        t = Math.round(e - b.getElementById("disclaimer_message").offsetHeight);
                    if (e < 800 && t < 100 && (t += 100, b.getElementById("disclaimer-top").setAttribute("style", "display:none;"), window.xv.disclaimer.bIsAgeWarning && b.getElementById("disclaimer-warning-p").setAttribute("style", "font-size:21px; line-height:1;")), t < window.xv.disclaimer.iMinTextHeight) {
                        t = window.xv.disclaimer.iMinTextHeight, b.getElementById("disclaimer-top").setAttribute("style", "display:none;"), window.xv.disclaimer.bIsAgeWarning && (b.getElementById("disclaimer-warning-p").setAttribute("style", "font-size:21px; line-height:1;"), b.getElementById("disclaimer-parents-p").setAttribute("style", "margin: 10px 0 !important;"));
                        for (var n = b.querySelectorAll(".disclaimer-enter"), i = 0; i < n.length; i++) n[i].setAttribute("style", "font-size:30px;line-height:36px;")
                    }
                    window.xv.disclaimer.bIsAgeWarning && (t > window.xv.disclaimer.iMaxTextHeight ? t = window.xv.disclaimer.iMaxTextHeight : t < window.xv.disclaimer.iMinTextHeight && (t = window.xv.disclaimer.iMinTextHeight), b.getElementById("disclaimer-over18").setAttribute("style", "display:block;max-height:" + t + "px;" + (t === window.xv.disclaimer.iMinTextHeight ? "margin:0 0 10px 0;" : "")))
                },
                he = function() {
                    if (window.xv.disclaimer.bHasCookieManage && (b.getElementById("disclaimer-accept_cookies").innerHTML = xv.i18n.__("legal.disclaimer.accept_cookies", {}, "front", "Accept all cookies"), b.getElementById("disclaimer-reject_cookies").innerHTML = xv.i18n.__("legal.disclaimer.reject_cookies", {}, "front", "Reject all cookies"), b.getElementById("disclaimer-save-preferences").innerHTML = xv.i18n.__("legal.disclaimer.save_preferences" + (window.xv.disclaimer.bIsCookieManageOnly ? "_only" : ""), {}, "front", "save preferences"), b.getElementById("disclaimer-cookies_essential").innerHTML = xv.i18n.__(de.essential.titleTradKey, {}, "front", de.essential.title), b.getElementById("disclaimer-cookies_functionality").innerHTML = xv.i18n.__(de[w.S_F_COOKIES_FUNCTIONALITY].titleTradKey, {}, "front", de[w.S_F_COOKIES_FUNCTIONALITY].title), b.getElementById("disclaimer-cookies_advertising").innerHTML = xv.i18n.__(de[w.S_F_COOKIES_ADVERTISING].titleTradKey, {}, "front", de[w.S_F_COOKIES_ADVERTISING].title), b.getElementById("disclaimer-cookies_player_preferences").innerHTML = xv.i18n.__(de[w.S_F_COOKIES_PLAYER_PREFERENCES].titleTradKey, {}, "front", de[w.S_F_COOKIES_PLAYER_PREFERENCES].title), b.getElementById("disclaimer-always_active").innerHTML = xv.i18n.__("legal.disclaimer.always_active", {}, "front", Z), b.getElementById("disclaimer-cookies").innerHTML = xv.i18n.__("legal.disclaimer.cookies_and_similar", {
                            "%sitename%": e.replace(".com", "").replace("www.", ""),
                            "%link%": G,
                            "%end_link%": "</a>"
                        }, "front", Y)), window.xv.disclaimer.bIsAgeWarning) {
                        b.getElementById("disclaimer-warning").innerHTML = xv.i18n.__(P ? "legal.disclaimer.warning_v2" : "legal.disclaimer.warning", {
                            "%red%": '<span style="color:' + l + '">',
                            "%end_red%": "</span>"
                        }, "front", K);
                        var t = b.getElementById("disclaimer-over18");
                        t && (t.innerHTML = xv.i18n.__("legal.disclaimer.over_18_recognize", {
                            "%link_start%": '<a href="' + window.xv.conf.domains.info + '/legal/tos" target="_blank">',
                            "%link_end%": "</a>"
                        }, "front", X)), b.getElementById("disclaimer-over18btn").innerHTML = xv.i18n.__("legal.disclaimer.i_over_18", {}, "front", $), b.getElementById("disclaimer-parents").innerHTML = xv.i18n.__(P ? "legal.disclaimer.parents_advice_v2" : "legal.disclaimer.parents_advice", {}, "front", J)
                    }
                    var n, i = b.querySelectorAll(".disclaimer-enter");
                    for (n = 0; n < i.length; n++) i[n].innerHTML = xv.i18n.__("misc.enter", {}, "front");
                    var o = b.querySelectorAll(".disclaimer-manage_cookies");
                    for (n = 0; n < o.length; n++) o[n].innerHTML = xv.i18n.__("legal.disclaimer.manage_cookies", {}, "front", "Manage Cookies");
                    var s = b.querySelectorAll(".feature__btn");
                    for (n = 0; n < s.length; n++) s[n].innerHTML = xv.i18n.__("legal.disclaimer.list_cookies", {}, "front", "List of cookies");
                    var a = b.querySelectorAll(".cookie-name");
                    for (n = 0; n < a.length; n++) a[n].innerHTML = xv.i18n.__("legal.disclaimer.cookie_name", {}, "front", "Cookie name");
                    var r = b.querySelectorAll(".cookie-function");
                    for (n = 0; n < r.length; n++) r[n].innerHTML = xv.i18n.__("legal.disclaimer.cookie_function", {}, "front", "Legal Basis / Purpose / Function");
                    var d = b.querySelectorAll(".cookie-duration");
                    for (n = 0; n < d.length; n++) d[n].innerHTML = xv.i18n.__("legal.disclaimer.cookie_duration", {}, "front", "Duration");
                    for (var c in N) {
                        var u = N[c],
                            p = b.querySelectorAll("." + u.sClass);
                        for (n = 0; n < p.length; n++) p[n].innerHTML = xv.i18n.__(u.sTradKey, u.oTradArgs, "front", u.sDefault)
                    }
                    if (M || P) {
                        var f = b.querySelectorAll(".disclaimer-enter-straight"),
                            h = b.querySelectorAll(".disclaimer-enter-gay"),
                            m = b.querySelectorAll(".disclaimer-enter-shemale");
                        for (n = 0; n < f.length; n++) f[n].innerHTML = xv.i18n.__("straight", {}, "front", "Straight");
                        for (n = 0; n < h.length; n++) h[n].innerHTML = xv.i18n.__("gay", {}, "front", "Gay");
                        for (n = 0; n < m.length; n++) m[n].innerHTML = xv.i18n.__("trans", {}, "front", "Trans")
                    }
                    "function" == typeof fe && fe()
                };
            if (M || P) {
                var me = V ? "XV RED" : F ? "XNXX GOLD" : e.toLowerCase().replace(".com", "").replace(".", " ").toUpperCase(),
                    ge = "www." + e.toLowerCase(),
                    ve = this.getLang();
                "fr" === ve ? (X = me + " est un site labellisé RTA (<strong>Restricted to Adults</strong> ou Réservé aux Adultes). <strong>Si vous êtes parents</strong>, vous pouvez facilement bloquer l'accès à ce site. Veuillez-vous référer à la page suivante " + D("https://www.rtalabel.org/index.php?content=parents/") + " pour plus d'informations.<br><br>", X += q ? e + " est un <strong>service d'hébergement premium de vidéos pornographiques</strong>. " : e + " est un <strong>service d'hébergement gratuit de vidéos pornographiques</strong>. ", X += "Nous convertissons vos fichiers dans différents formats. Vous pouvez utiliser notre code d'intégration (« <em>embed code</em> ») afin d'afficher n'importe quelle vidéo sur un autre site Internet. Chaque vidéo téléchargée vers notre plateforme est affichée sur nos catalogues environ trois jours après le téléchargement. Environ 1.200 à 2.000 vidéos pour adultes sont téléchargées chaque jour (notez que les vidéos labellisées <em>gay</em> et <em>shemale</em> sont filtrées sur cette page, mais disponibles dans leurs catégories respectives). Nos pages (c'est-à-dire tout ce que vous voyez hébergé sur " + D(ge, ge, !0) + ") ne contiennent aucun spyware/adware/trojan/etc. Pour accéder à notre site, qui est strictement réservé aux personnes âgées de 18 ans ou plus, vous devez prendre connaissance à nos Conditions d'utilisation (" + D(window.xv.conf.domains.info + "/legal/tos") + "). L'acceptation de ces Conditions d'utilisation est requise pour l'utilisation de nos services.<br><br>",
                    X += q ? "En plus de la création d'un compte pour accéder au site et de l'acceptation de nos Conditions d'utilisation, vous devez également consulter notre Politique Vie Privée et Données Personnelles disponible à l'adresse " + D(window.xv.conf.domains.info + "/legal/privacy") + " et l'accepter." : "Vous êtes également tenu de consulter et d'accepter notre Avis sur la Vie Privée et les Données Personnelles (disponible à l'adresse " + D(window.xv.conf.domains.info + "/legal/privacynotice") + ") lorsque vous vous rendez sur notre Site Internet pour soumettre un formulaire de signalement d'abus, une demande de retrait pour violation du droit d'auteur ou une contre-notification à ce sujet, conformément à nos Conditions d'utilisation. Si vous êtes un utilisateur ayant créé un compte, vous devez également prendre connaissance de notre Politique Vie Privée et Données Personnelles (disponible à l'adresse " + D(window.xv.conf.domains.info + "/legal/privacy") + ") et l'accepter.", X += "<br><br>La consultation intentionnelle et/ou la possession d'images sexuellement explicites de toute personne de moins de 18 ans est illégale. Le téléchargement de contenu illégal vers ce site, et notamment des contenus représentant des abus sexuels commis sur des mineurs ou des actes sexuels non consentis, est strictement interdit et sera signalé aux autorités de police compétentes afin d'être poursuivi. Pour plus d'informations, consultez notre page à l'adresse " + D(window.xv.conf.domains.info + "/legal/control") + ".<br><br>En accédant à " + e + ", vous reconnaissez avoir lu et accepté nos " + D(window.xv.conf.domains.info + "/legal/tos", "Conditions d'utilisation") + ".<br><br>" + e + " utilise des cookies et des technologies similaires pour permettre le fonctionnement de base du site ainsi que la personnalisation, l'analyse et le marketing. Pour plus d'informations sur les différents cookies, veuillez consulter notre " + D(window.xv.conf.domains.info + "/legal/privacy", "politique relative aux cookies") + '. Si vous cliquez sur « accepter tous les cookies », vous nous donnez votre consentement à les utiliser à toutes les fins mentionnées. Vous pouvez également choisir vos propres paramètres en cliquant sur « <span class="disclaimer-manage_cookies">Manage Cookies</span> ».', Z = "toujours actifs") : "it" === ve ? (X = me + " è un sito classificato per soli adulti (“RTA”). <strong>Genitori</strong>, potete facilmente bloccare l'accesso a questo sito. Leggete " + D("https://www.rtalabel.org/index.php?content=parents/") + " per ulteriori informazioni.<br><br>", X += q ? e + " è un <strong>servizio di hosting premium per video porno.</strong>. " : e + " è un <strong>servizio di hosting gratuito per video porno.</strong>. ", X += 'Noi convertiamo i tuoi file in vari formati. Puoi riportare il nostro "<em>embed code</em>" per visualizzare qualsiasi video su un altro sito web. Ogni video caricato è mostrato nei nostri indici circa tre giorni dopo l\'upload. Ogni giorno vengono caricati dai 1200 ai 2000 video per adulti (i video <em>gay</em> e <em>shemale</em> sono filtrati da questa pagina, ma appaiono nelle rispettive categorie). Le nostre pagine (tutti i contenuti che vedi su ' + D(ge, ge, !0) + ") non contengono spyware/adware/trojan/ecc. Per accedere al nostro sito, strettamente riservato a persone di età pari o superiore a 18 anni, è necessario comprendere i nostri Termini di servizio e aprire un account. L'accettazione di questi Termini di servizio è necessaria per l'utilizzo dei nostri servizi.<br><br>", X += q ? "Oltre a creare un account per accedere a questo sito Web e accettare i Termini di servizio, è anche necessario consultare la nostra Informativa sulla privacy, disponibile su " + D(window.xv.conf.domains.info + "/legal/privacy") + " , e accettarla." : "È inoltre necessario prendere visione e accettare la nostra Informativa sulla privacy e sui dati personali (“Privacy Notice”), disponibile all'indirizzo " + D(window.xv.conf.domains.info + "/legal/privacynotice") + " ogni volta che visiti il nostro sito Web per inviare un modulo di segnalazione di abuso, una richiesta di rimozione o una contro-segnalazione in conformità con i Termini di servizio. Se sei un utente che ha creato un account, sei tenuto a leggere e consultare la nostra Informativa Privacy, disponibile all'indirizzo " + D(window.xv.conf.domains.info + "/legal/privacy") + " e accettarla.", X += "<br><br>La visione intenzionale e / o il possesso di immagini sessualmente esplicite di chiunque abbia meno di 18 anni è illegale. Il caricamento di contenuti illegali su questo sito, incluso materiale pedopornografico o atti sessuali non consensuali, è severamente vietato e verrà denunciato alle forze dell'ordine per essere perseguito. Per ulteriori informazioni, leggi la nostra pagina su  " + D(window.xv.conf.domains.info + "/legal/control") + ".") : (X = me + " is rated with RTA label.  Parents, you can easily block access to this site. Please read " + D("https://www.rtalabel.org/index.php?content=parents/") + " for more information.", X += "<br><br>" + e + ' is a free hosting service for porn videos.  We convert your files to various formats.  You can grab our "embed code" to display any video on another website. Every video uploaded is shown on our indexes more or less three days after uploading. About 1200 to 2000 adult videos are uploaded each day (note that gay and shemale videos are filtered from this page, but shown in their respective categories). Our pages (everything that you see hosted on ' + ge + ") contain no spyware/adware/trojan/etc. There is no charge for viewing videos on our site. To access our site, which is strictly reserved to individuals of 18 years old or older, you must review, agree to, and comply with our Terms of Service in their entirety.", q || (X += "Please review our " + D(window.xv.conf.domains.info + "/legal/privacynotice", "Privacy Notice") + " (for users who do not create an account) and our " + D(window.xv.conf.domains.info + "/legal/privacy", "Privacy Policy") + " (for users who create an account) to understand how we will process personal data you provide to us.", X += "<br><br>"), X += 'The intentional viewing and/or possession of sexually explicit imagery of anyone under 18 is illegal. As such, uploading and/or viewing videos containing child pornography is strictly forbidden. To the extent you believe the life of a child might be at immediate risk, please contact the local authorities of your country and specify the URL associated with the video/s at issue. In this regard please read our page at <a href="' + window.xv.conf.domains.info + '/legal/control" target="_blank" style="' + A + '" onclick="event.stopPropagation ? event.stopPropagation() : (even.cancelBubble = true);">' + window.xv.conf.domains.info + "/legal/control</a> for more information on how " + me + ' is fighting child pornography and cooperating with local authorities. If you encounter child sexual abuse images or material online, report it to us by completing the form available at <a href="' + window.xv.conf.domains.info + '/takedown-amateur" target="_blank" style="' + A + '" onclick="event.stopPropagation ? event.stopPropagation() : (even.cancelBubble = true);">' + window.xv.conf.domains.info + "/takedown-amateur</a> and identifying the URL of the video at issue. " + e + " will report to authorities any videos, photographs or any content containing child sexual abuse images.<br><br>" + e + " uses cookies and similar technologies to enable the basic functioning of the site as well as personalisation, analysis and marketing. For more information on individual cookies, please see our " + D(window.xv.conf.domains.info + "/legal/privacy", "Cookie Policy") + ". If you click « accept all cookies », you give us your consent to use them for all the purposes mentioned. You can also choose your own settings by clicking « manage cookies »."), Q = window.xv.conf.dyn.user_main_cat_forced ? window.xv.conf.dyn.user_main_cat : window.xv.conf.dyn.pagefilter, ee = "straight" !== window.xv.conf.dyn.pagefilter ? "straight" : "gay", te = "shemale" !== window.xv.conf.dyn.pagefilter ? "shemale" : "gay", ne = "straight" === Q ? "Straight" : "gay" === Q ? "Gay" : "Trans", ie = "gay" === ee ? "Gay" : "Straight", oe = "shemale" === te ? "Trans" : "Gay";
                var _e = P ? '<span class="icon-f icf-sexe-woman mcui-picto"></span>' : '<span class="icon-f icf-sexe-woman-v2 mcui-picto"></span>',
                    be = '<span class="icon-flag-gay mcui-picto"><span class="r"></span><span class="o"></span><span class="y"></span><span class="g"></span><span class="b"></span><span class="v"></span></span>',
                    ye = P ? '<span class="icon-f icf-sexe-trans mcui-picto"></span>' : '<span class="icon-f icf-sexe-trans-v2 mcui-picto"></span>';
                se = "straight" === Q ? _e : "gay" === Q ? be : ye, ae = "gay" === ee ? be : _e, re = "shemale" === te ? ye : be
            }
            var xe = H() + '<style rel="stylesheet" type="text/css">' + U(e) + "#disclaimer-top{" + c + "}#disclaimer-top-close-btn{" + u + "}#disclaimer-content{padding:10px 20px;}#disclaimer-warning-p{font-size:25px;line-height:1.1;font-weight:bold;padding:0;margin:0 0 10px 0 !important;}#disclaimer-over18{text-align:justify;font-size:14px;padding:0;margin:0 0 20px;overflow:auto;display:none;}#disclaimer-over18 a{font-size:14px;padding:0;margin:0 0 20px;max-height: 254px;overflow: auto;" + s + "}#disclaimer_message .btn-primary{display:inline-block;white-space: normal;margin:0 auto;font-size:24px;line-height:1;" + f + "}#disclaimer_message .btn-primary:hover{" + h + "}" + (M ? '#disclaimer_message .disclaimer-enter-label{font-size: 16px;margin:0 5px 5px;}#disclaimer_message .btn-primary .disclaimer-enter{text-transform:uppercase;}#disclaimer_message .disclaimer-enter-btns .btn{margin:0 5px 7px;position: relative}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-line{display: flex;justify-content: center;}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-line .btn-default{flex: 100px 0 1;font-size:16px;padding:3px 8px 2px;}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-line .btn-default .disclaimer-enter-mc-picto .mcui-picto{display:inline-block;vertical-align:baseline;line-height:24px;}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-line .btn-default .disclaimer-enter-mc-txt{display:block}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-line .btn-default .disclaimer-enter-mc-picto {display:block;height:24px;line-height:24px;font-size:20px;}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-line .current-main-cat::after{content: "";position:absolute;top:calc(100% + 3px);left:calc(50% - 5px);width: 0;height: 0;border-left: 5px solid transparent;border-right: 5px solid transparent;border-bottom: 5px solid ' + p + ";}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-line .current-main-cat,#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-line .btn-default:hover{box-shadow: 0 0 0 2px " + l + ";}#disclaimer_message .disclaimer-enter-btn.pulse{animation: disclaimerEnterPulse .2s ease;}@keyframes disclaimerEnterPulse {0% {transform:scale(1);} 50% {transform:scale(1.1);} 100% {transform:scale(1);}}" : P ? "#disclaimer_message .disclaimer-enter-label{font-size: 14px;margin:4px 0 10px;}#disclaimer_message #disclaimer-over18btn{font-size: 20px;}#disclaimer_message .btn .disclaimer-enter{text-transform:uppercase;}#disclaimer_message .disclaimer-enter-btns {display:flex; width: 100%;}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-col{display:flex;flex-direction: column;flex-grow: 1;align-items: center;margin:0 auto;max-width:450px;}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-col .btn{width:100%;margin:0 0 7px;position: relative;flex: 50px 0 1;font-size:24px;font-weight:bold;padding:3px 8px;display:flex;align-items:center;word-break:break-all;border-width:2px;}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-col .btn-default{width:96%;font-size:16px;}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-col .btn .left,#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-col .btn .right{display:flex;width:50%;align-items: center;}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-col .btn .left{justify-content: flex-end;}#disclaimer_message .disclaimer-enter-btns .disclaimer-enter-btns-col .btn .disclaimer-enter-mc-picto {height:24px;line-height:24px;font-size:24px;margin-left:5px;display:inline-block;width:28px;}" : "#disclaimer_message .btn-primary .text-top{display:block;font-size:16px;line-height:1;}#disclaimer_message .btn-primary .text-bottom{font-size:16px;line-height:1;}#disclaimer_message .btn-primary .text-bottom span{font-size:14px;line-height:1;}#disclaimer_message .btn-primary .disclaimer-enter{font-weight:bold;text-transform:uppercase;}") + "#disclaimer_message .btn-default{margin: 10px 0 0 0;white-space: normal;font-weight:bold;" + m + "}#disclaimer_message .disclaimer-manage_cookies,#disclaimer-save-preferences{font-size:16px;line-height:24px;}#disclaimer_message a.button{padding:10px 20px;margin-top:10px;font-size:26px;line-height:32px;font-weight:bold;display:inline-block;text-decoration:none;width:100%;" + f + "}#disclaimer-parents-p{line-height:16px;font-size:12px;margin:5px 0 15px 0!important;}#disclaimer-cookies-p{font-size:12px;line-height:16px;padding:0;margin:10px 10px 15px}#disclaimer-cookies-p:first-child{margin-top:5px}#disclaimer-features {text-align:center;}#disclaimer-features .features__title{margin-top:10px;text-transform:uppercase;text-align:center;font-weight:bold;}#disclaimer-features .features__list{border-top: 1px solid " + C + ";border-bottom: 1px solid " + C + ";overflow:auto;}#disclaimer-features .feature__item{padding:5px 0 0 0;text-align:left;font-size:0;line-height:1;}#disclaimer-features .feature__item + .feature__item {border-top: 1px solid " + C + ';}#disclaimer-features .feature__desc{display:inline-block;width:calc(100% - 50px);padding-right:30px;font-size:12px;line-height:1;}#disclaimer-features .feature__item.item--essential .feature__desc{width:calc(100% - 100px);}#disclaimer-features .feature__title{height:20px;line-height:20px;margin:0 0 5px 0;font-weight:bold;cursor:pointer;}#disclaimer-features .feature__title:before{content:"+";display:inline-block;margin-right:5px;font-weight:normal;}#disclaimer-features .feature__item.item--open .feature__title:before{content:"-";}.notouch #disclaimer-features .feature__title:hover{text-decoration:underline;}#disclaimer-features .feature__text{font-size:11px;line-height:1.5;text-align:justify;margin:2px 0 7px;}#disclaimer-features .feature__btn{display: block;margin:5px 0;text-decoration:none;font-size:12px;color:#333333;}.notouch #disclaimer-features .feature__btn:hover{text-decoration:underline;}#disclaimer-features .feature__toggle{display:inline-block;vertical-align:top;text-align:right;line-height:1;}#disclaimer-features .feature__toggle p{height:20px;margin:0 5px 5px 0;line-height:20px;}#disclaimer-features .feature__item.item--essential .feature__toggle{width:100px;font-size:' + v + "px;color:" + g + ';}#disclaimer-features .feature__input{position:absolute;top:0;left:0;width:0;height:0;margin:0;opacity:0;}#disclaimer-features .feature__label{position:relative;height:20px;padding:0 0 0 45px;margin:0 0 5px 0;cursor:pointer;}#disclaimer-features .feature__label:before{content:"";position:absolute;top:0;left:0;display:block;width:36px;height:20px;background:' + E + ";border:1px solid " + E + ';border-radius: 10px;}#disclaimer-features .feature__label:after{content:"";position:absolute;top:2px;left:2px;display:block;width:16px;height:16px;border-radius:50%;background:' + T + ";transition: left 0.2s;}#disclaimer-features .feature__input:checked + .feature__label:before{background:" + l + ";border-color:" + l + ";}#disclaimer-features .feature__input:checked + .feature__label:after{left:18px; background:" + z + ";}#disclaimer-features .feature__cookies{font-size:11px; line-height:1.5;}#disclaimer-features .feature__cookies th{padding: 2px 5px;font-weight:bold;background:" + x + ";}#disclaimer-features .feature__cookies td{padding: 2px 5px;}#disclaimer-features .feature__cookies tr:nth-child(even) td{background:" + k + ";}#disclaimer-reject_cookies-btn{border: 0;background:0;" + A + ';font-weight:bold;text-decoration:underline;margin-top: 15px;}</style><div id="disclaimer_background" class="disclaimer_background"><div id="disclaimer_message" class="disclaimer_message"><div id="disclaimer-top">' + r + d + '</div><div id="disclaimer-content">' + (this.bIsCookieManageOnly ? "" : '<p id="disclaimer-warning-p"><span id="disclaimer-warning">' + K + "</span></p>") + (this.bIsCookieManageOnly ? "" : '<p id="disclaimer-over18">' + X + "</p>") + (this.bIsCookieManageOnly ? '<div><button id="disclaimer-accept_cookies-btn" class="btn btn-primary" onclick="window.xv.disclaimer.setFeatures(\'accept-all\');"><span class="text-top" id="disclaimer-accept_cookies">Accept all cookies</span></button></div>' : M ? '<p class="disclaimer-enter-label">' + (window.xv.disclaimer.bHasCookieManage ? '<span class="text-bottom">(<span id="disclaimer-accept_cookies">Accept all cookies</span>)</span>' : "") + '</p><div class="disclaimer-enter-btns"><div class="disclaimer-enter-btns-line"><button class="btn btn-default current-main-cat" onclick="window.xv.disclaimer.updateEnterMainCat(event, this, \'' + Q + '\')"><span class="disclaimer-enter-mc-picto">' + se + '</span><span class="disclaimer-enter-mc-txt disclaimer-enter-' + Q + '">' + ne + '</span></button><button class="btn btn-default" onclick="window.xv.disclaimer.updateEnterMainCat(event, this, \'' + ee + '\')"><span class="disclaimer-enter-mc-picto">' + ae + '</span><span class="disclaimer-enter-mc-txt disclaimer-enter-' + ee + '">' + ie + '</span></button><button class="btn btn-default" onclick="window.xv.disclaimer.updateEnterMainCat(event, this, \'' + te + '\')"><span class="disclaimer-enter-mc-picto">' + re + '</span><span class="disclaimer-enter-mc-txt disclaimer-enter-' + te + '">' + oe + '</span></button></div><div class="disclaimer-enter-btns-line"><button class="btn btn-primary disclaimer-enter-btn" onclick="' + (window.xv.disclaimer.sCookieManageType === _.COOKIE_MANAGE_TYPE.INTEGRATED ? "window.xv.disclaimer.setFeatures('accept-all', '" + Q + "')" : "window.xv.disclaimer.close_pop(event, null, '" + Q + "')") + '"><span class="disclaimer-enter">ENTER</span>' + (M ? " - " : "") + '<span class="text-top" id="disclaimer-over18btn">' + $ + "</span> </button></div></div>" : P ? '<p class="disclaimer-enter-label"><span class="text-top" id="disclaimer-over18btn">' + $ + "</span> " + (window.xv.disclaimer.bHasCookieManage ? ' <span class="text-bottom">(<span id="disclaimer-accept_cookies">Accept all cookies</span>)</span>' : "") + '</p><div class="disclaimer-enter-btns"><div class="disclaimer-enter-btns-col"><button class="btn btn-primary current-main-cat" onclick="' + (window.xv.disclaimer.sCookieManageType === _.COOKIE_MANAGE_TYPE.INTEGRATED ? "window.xv.disclaimer.setFeatures('accept-all', '" + Q + "')" : "window.xv.disclaimer.close_pop(event, null, '" + Q + "')") + '"><span class="left"><span class="disclaimer-enter-mc-txt disclaimer-enter-' + Q + '">' + ne + '</span><span class="disclaimer-enter-mc-picto">' + se + '</span></span><span class="right"><span>&nbsp;:&nbsp;</span><span class="disclaimer-enter">ENTER</span></span></button><button class="btn btn-default" onclick="' + (window.xv.disclaimer.sCookieManageType === _.COOKIE_MANAGE_TYPE.INTEGRATED ? "window.xv.disclaimer.setFeatures('accept-all', '" + ee + "')" : "window.xv.disclaimer.close_pop(event, null, '" + ee + "')") + '"><span class="left"><span class="disclaimer-enter-mc-txt disclaimer-enter-' + ee + '">' + ie + '</span><span class="disclaimer-enter-mc-picto">' + ae + '</span></span><span class="right"><span>&nbsp;:&nbsp;</span><span class="disclaimer-enter">ENTER</span></span></button><button class="btn btn-default" onclick="' + (window.xv.disclaimer.sCookieManageType === _.COOKIE_MANAGE_TYPE.INTEGRATED ? "window.xv.disclaimer.setFeatures('accept-all', '" + te + "')" : "window.xv.disclaimer.close_pop(event, null, '" + te + "')") + '"><span class="left"><span class="disclaimer-enter-mc-txt disclaimer-enter-' + te + '">' + oe + '</span><span class="disclaimer-enter-mc-picto">' + re + '</span></span><span class="right"><span>&nbsp;:&nbsp;</span><span class="disclaimer-enter">ENTER</span></span></button></div></div>' : '<div><button class="btn btn-primary disclaimer-enter-btn" onclick="' + (window.xv.disclaimer.sCookieManageType === _.COOKIE_MANAGE_TYPE.INTEGRATED ? "window.xv.disclaimer.setFeatures('accept-all')" : "window.xv.disclaimer.close_pop(event, null, '')") + '"><span class="text-top" id="disclaimer-over18btn">' + $ + '</span> <span class="disclaimer-enter">ENTER</span> ' + (window.xv.disclaimer.bHasCookieManage ? '<span class="text-bottom">(<span id="disclaimer-accept_cookies">Accept all cookies</span>)</span>' : "") + "</button></div>") + function() {
                if (!window.xv.disclaimer.bHasCookieManage) return "";
                var e = (window.xv.disclaimer.sCookieManageType === _.COOKIE_MANAGE_TYPE.UPDATE_ONLY ? "" : '<div><button class="btn btn-default disclaimer-manage_cookies" onclick="window.xv.disclaimer.showCookiesList(this)">Manage Cookies</button></div>') + '<div id="disclaimer-features"' + (window.xv.disclaimer.sCookieManageType === _.COOKIE_MANAGE_TYPE.UPDATE_ONLY ? "" : ' class="hidden"') + '><p class="features__title disclaimer-manage_cookies">Manage Cookies</p><div class="features__list">';
                for (var t in de) {
                    var n = de[t];
                    e += '<div class="feature__item item--' + n.id + '"><div class="feature__desc"><p class="feature__title" id="disclaimer-cookies_' + n.id + '" onclick="window.xv.disclaimer.toggleFeatureDesc(this)">' + n.title + '</p></div><div class="feature__toggle">', e += "essential" === n.id ? '<p><strong><span id="disclaimer-always_active">' + Z + "</span></strong></p>" : '<input class="feature__input" type="checkbox" id="' + n.id + '" name="' + n.name + '"' + (n.checked ? ' checked="checked"' : "") + '><label class="feature__label" for="' + n.id + '"></label>', e += '</div><div class="feature__text hidden"><p>' + n.desc + '</p></div><table class="feature__cookies hidden"><thead><tr><th class="cookie-name">Cookie name</th><th class="cookie-function">Legal Basis / Purpose / Function</th><th class="cookie-duration">Duration</th></tr></thead><tbody>';
                    for (var i in n.datas) e += "<tr><td>" + n.datas[i].title + "</td><td>" + n.datas[i].desc + "</td>", "_ga , _gid" === n.datas[i].title ? e += "<td>" + n.datas[i].duration.sDefault + "</td>" : e += '<td class="' + n.datas[i].duration.sClass + '">' + n.datas[i].duration.sDefault + "</td>", e += "</tr>";
                    e += "</tbody></table></div>"
                }
                return e += '</div><button class="btn btn-default" onclick="window.xv.disclaimer.setFeatures(\'enter\');">' + (window.xv.disclaimer.bIsCookieManageOnly ? "" : '<span class="disclaimer-enter">ENTER</span> ') + '<span id="disclaimer-save-preferences">save preferences</span></button></div>'
            }() + (this.bHasCookieManage ? '<button id="disclaimer-reject_cookies-btn" onclick="window.xv.disclaimer.setFeatures(\'reject-all\');"><span id="disclaimer-reject_cookies">Reject all cookies</span></button>' : "") + (this.bHasCookieManage && this.sCookieManageType === _.COOKIE_MANAGE_TYPE.NEW_ONLY ? '<p id="disclaimer-cookies-p"><span id="disclaimer-cookies">' + Y + "</span></p>" : "") + "</div>";
            "string" == typeof n && (xe += '<a class="button" href="' + n + '" target="_blank">VERIFIER MON AGE ET ENTRER</a>'), this.bIsAgeWarning && (xe += '<p id="disclaimer-parents-p"><a href="' + window.xv.conf.domains.info + '/parents/" target="_blank" style="' + A + '" onclick="window.xv.disclaimer.leave_site(event)"><strong><span id="disclaimer-parents">' + J + "</span></strong></a></p>"), this.bHasCookieManage && this.sCookieManageType !== _.COOKIE_MANAGE_TYPE.NEW_ONLY && (xe += '<p id="disclaimer-cookies-p"><span id="disclaimer-cookies">' + Y + "</span></p>"), xe += "</div></div></div>", xv.dom.scrollToTop(), W(), "object" == typeof o && "function" == typeof o.insertAdjacentHTML ? o.insertAdjacentHTML("beforeend", xe) : b.write(xe), xv.i18n.getCatalog("front", he);
            var we = (window.xv.disclaimer.bIsAgeWarning ? "img-blured " : "") + "disclaimer-opened";
            b.documentElement ? (y = b.documentElement.style.overflow, xv.dom.addClass(b.documentElement, we)) : b.body && (y = b.body.style.overflow, xv.dom.addClass(b.body, we)), this.bIsAgeWarning && O(I.ACTIONS.DISCLAIMER_SHOW), this.bHasCookieManage && O(I.ACTIONS.CONSENT_SHOW)
        }, _.updateEnterMainCat = function(e, t, n) {
            for (var i = b.querySelectorAll(".disclaimer-enter-btn"), o = b.querySelectorAll(".current-main-cat"), s = 0; s < o.length; s++) xv.dom.removeClass(o[s], "current-main-cat");
            xv.dom.addClass(t, "current-main-cat");
            for (var s = 0; s < i.length; s++) ! function() {
                var e = i[s];
                e.setAttribute("onclick", window.xv.disclaimer.sCookieManageType === _.COOKIE_MANAGE_TYPE.INTEGRATED ? "window.xv.disclaimer.setFeatures('accept-all', '" + n + "')" : "window.xv.disclaimer.close_pop(event, null, '" + n + "')"), xv.dom.addClass(e, "pulse"), setTimeout(function() {
                    xv.dom.removeClass(e, "pulse")
                }, 300)
            }()
        }, _.displayCookiePopup = function(e, t, n) {
            this.display(e, "string" == typeof t ? t : _.COOKIE_MANAGE_TYPE.NEW_ONLY, !1, !0, n)
        }, _.close_pop = function(e, t, n) {
            this.bDisclaimerTriggered = !1, b.documentElement ? xv.dom.removeClass(b.documentElement, "img-blured disclaimer-opened") : b.body && xv.dom.removeClass(b.body, "img-blured disclaimer-opened"), G(), "function" == typeof window.toggle_wpn_ads && window.toggle_wpn_ads(!0);
            var i = b.getElementById("disclaimer_background"),
                o = i && i.parentNode ? i.parentNode : null;
            if ("string" == typeof n) {
                this.sMainCatChoice = n, this.bIsSendingMetric = !0;
                var s = function() {
                    if ("string" == typeof window.xv.disclaimer.sRedirectUrlBlockedByMetric) return void(window.location.href = window.xv.disclaimer.sRedirectUrlBlockedByMetric);
                    window.xv.disclaimer.bIsSendingMetric = !1
                };
                "straight" === n ? O(I.ACTIONS.DISCLAIMER_STRAIGHT, 0, s, s) : "gay" === n ? O(I.ACTIONS.DISCLAIMER_GAY, 0, s, s) : O(I.ACTIONS.DISCLAIMER_TRANS, 0, s, s)
            }
            var a = window.xv.disclaimer.sCookieManageType === _.COOKIE_MANAGE_TYPE.INTEGRATED,
                r = function() {
                    if (a) {
                        if (window.xv.disclaimer.sCookieManageType === _.COOKIE_MANAGE_TYPE.SEPARATED) window.xv.disclaimer.displayCookiePopup(window.xv.disclaimer.sSiteName, _.COOKIE_MANAGE_TYPE.NEW_ONLY, o || document.getElementsByTagName("BODY")[0]);
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
            if (this.sCookieManageType !== _.COOKIE_MANAGE_TYPE.UPDATE_ONLY) {
                var d = [];
                this.bIsAgeWarning && d.push("disclr"), this.bHasCookieManage && d.push("cookie"), t && d.push("sv"), this.bIsAgeWarning && !window.xv.cookies.get(L.DISCLAIMER_CLOSED.sName) && window.xv.cookies.setLocal(L.DISCLAIMER_CLOSED.sName, !0, L.DISCLAIMER_CLOSED.oDuration.iMs, "/"), this.bHasCookieManage && !window.xv.cookies.get(L.COOKIES_POP_CLOSED.sName) && window.xv.cookies.setLocal(L.COOKIES_POP_CLOSED.sName, !0, L.COOKIES_POP_CLOSED.oDuration.iMs, "/"),
                    function(e) {
                        var t = xv.utils.createRequestObject();
                        t.open("POST", "/account/message-closed", !0), t.withCredentials = !0, t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), "object" == typeof xv.gnct && t.setRequestHeader("Private-Mode", xv.gnct.getStatusString()), t.send("msgid%5B%5D=" + e.join("&msgid%5B%5D=")), t.onreadystatechange = function() {
                            4 === t.readyState && 200 === t.status && r()
                        }
                    }(d)
            }
            b.documentElement ? b.documentElement.style.overflow = y : b.body && (b.body.style.overflow = y);
            var l = e || window.event;
            l && (l.cancelBubble = !0, l.stopPropagation && l.stopPropagation()), this.bIsOpen = !1;
            var c = new Event(_.EVENT.CLOSE_POP);
            document.dispatchEvent(c), o && i.parentNode.removeChild(i), r()
        }, _.leave_site = function(e) {
            var t = e || window.event;
            t.cancelBubble = !0, t.stopPropagation && t.stopPropagation()
        }, _.survey_display = function(e) {
            var t = '<img class="no-blur" src="' + window.xv.conf.domains["static"] + '/v3/img/skins/default/logo/xvideos.white.png" alt="' + e + '" />',
                n = "height:60px;line-height:60px;background:#161617";
            e.toLowerCase().indexOf("red") > -1 && (t = '<img class="no-blur" src="' + window.xv.conf.domains["static"] + '/v3/img/skins/default/logo/xvideosred.white.png" alt="' + e + '" />'), e.toLowerCase().indexOf("xnxx") > -1 && (t = '<img class="no-blur" src="' + window.xv.conf.domains["static"] + '/v3/img/skins/xnxx/logo/xnxx.png" style="height:30px;margin-top:15px;" alt="' + e + '" />', n = "height:60px;line-height:60px;background:#000090"), e.toLowerCase().indexOf("gold") > -1 && (t = '<img class="no-blur" src="' + window.xv.conf.domains["static"] + '/v3/img/skins/xnxx/gold/xnxx.gold.logo.png" style="margin-top:5px;" alt="' + e + '" />'), e.toLowerCase().indexOf("pornorama") > -1 && (t = '<p style="font-size:26px;font-weight:bold">PORNORAMA.COM</p>', n = "height:80px;line-height:80px;");
            var i = "I am 18 years old or older",
                o = 'onclick="window.xv.disclaimer.close_pop(event, true)"',
                s = H() + '<style rel="stylesheet" type="text/css">' + U(e, !0) + "#disclaimer-top{" + n + '}#disclaimer-content{padding:10px 20px;}#disclaimer-warning-p{font-size:25px;line-height:1.1;font-weight:bold;padding:0;margin:10px 0 !important;}#disclaimer_message a.btn-survey{padding:5px 15px;font-size:24px;line-height:30px;font-weight:bold;border:none;text-decoration:none;display:inline-block;background:#4f89e2;color:#fff;border-radius:4px;}#disclaimer-answer-survey{display:block;margin: 5px 0}#disclaimer-enter-link{padding:0;margin:15px 0 0;text-decoration:underline;font-weight:bold;cursor:pointer}#disclaimer-survey-csa-p{position: relative;}#disclaimer-survey-csa-show{text-decoration:underline;font-weight:bold;cursor:help;}#disclaimer-survey-csa-info{display:none;position:absolute;bottom:100%;left:0;background:#4f89e2;color:#fff;border:1px solid #fff;padding:8px 14px;box-shadow:0 -2px 6px 1px rgba(0,0,0,0.3);text-align:left;}</style><div id="disclaimer_background" class="disclaimer_background"><div id="disclaimer_message" class="disclaimer_message"><div id="disclaimer-top">' + t + '</div><div id="disclaimer-content"><p id="disclaimer-warning-p">Chers visiteurs, il se peut que vous n\'ayez plus accès à notre site dans moins d\'un mois.</p><p>Saviez-vous qu\'une nouvelle loi nous empêche de vous laisser entrer sans vérifier votre âge?</p><p><a id="disclaimer-answer-survey-yes" href="https://pornbiz.com/sondage-pornographie-france?question=saviez-vous-nouvelle-loi&answer=oui" class="btn-survey" style="margin-right:20px" target="_blank"' + o + '>OUI</a><a id="disclaimer-answer-survey-no" href="https://pornbiz.com/sondage-pornographie-france?question=saviez-vous-nouvelle-loi&answer=non" class="btn-survey" target="_blank"' + o + '>NON</a></p><p id="disclaimer-survey-csa-p">Le <span id="disclaimer-survey-csa-show">CSA</span> a enclenché la procédure contre nous. Nous avons jusqu\'au 16 mars pour leur faire part de nos observations.<span id="disclaimer-survey-csa-info">Le CSA est l\'autorité publique française de régulation de l\'audiovisuel. Cette régulation s\'opère au service de la liberté d\'expression dans l\'intérêt du public et des professionnels. Elle repose sur le respect et la protection des droits et libertés individuels, la régulation économique et technologique du marché, et la responsabilité sociale.</span></p><p>Nous aimerions vous donner la parole au travers de notre sondage, vous qui, comme nous, n\'avez jamais été entendu :</p><a id="disclaimer-answer-survey" href="https://pornbiz.com/sondage-pornographie-france" class="btn-survey" target="_blank"' + o + '>Répondez aux questions ici.</a><p id="disclaimer-enter-link"' + o + '><span id="disclaimer-over18btn">' + i + '</span> : <span class="disclaimer-enter">ENTER</span></p></div></div></div>';
            if (xv.dom.scrollToTop(), W(), b.write(s), Math.round(window.innerHeight - b.getElementById("disclaimer_message").offsetHeight - 40) < this.iMinTextHeight) {
                b.getElementById("disclaimer-top").setAttribute("style", "display:none;");
                var a = b.getElementById("disclaimer-warning-p");
                a && a.setAttribute("style", "font-size:22px; line-height:1;")
            }
            b.documentElement ? (y = b.documentElement.style.overflow, xv.dom.addClass(b.documentElement, "img-blured disclaimer-opened")) : b.body && (y = b.body.style.overflow, xv.dom.addClass(b.body, "img-blured disclaimer-opened")), b.getElementById("disclaimer-survey-csa-show").addEventListener("mouseenter", function(e) {
                    b.getElementById("disclaimer-survey-csa-info").setAttribute("style", "display:block;")
                }),
                b.getElementById("disclaimer-survey-csa-show").addEventListener("mouseout", function(e) {
                    b.getElementById("disclaimer-survey-csa-info").setAttribute("style", "")
                });
            var r = function() {
                var e = b.getElementById("disclaimer-over18btn");
                e && (e.innerHTML = xv.i18n.__("legal.disclaimer.i_over_18", {}, "front", i));
                for (var t = b.querySelectorAll(".disclaimer-enter"), n = 0; n < t.length; n++) t[n].innerHTML = xv.i18n.___("misc.enter", "front", "ENTER")
            };
            xv.i18n.getCatalog("front", r)
        }, _.vpn_display = function(e, t) {
            if ("string" == typeof window.xv.cookies.get("disclaimer_vpn_display")) return !1;
            var n = "color:#000;",
                i = "#de2600",
                o = "background:#000;color:#fff";
            e.toLowerCase().indexOf("xnxx") > -1 ? (n = "color:#fff;", i = "#ff0", o = "background:#004be8;color:#fff") : e.toLowerCase().indexOf("pornorama") > -1 && (n = "color:#000;", i = "#0f4bff", o = "background:#0F4BFF;color:#fff");
            var s = "Welcome to " + e.toUpperCase(),
                a = "Please select your preferred version",
                r = H() + '<style rel="stylesheet" type="text/css">' + U(e) + "#disclaimer_vpn_welcome{font-size:26px;line-height:40px;font-weight:bold;padding:10px 0 0 0;margin:0 0 10px;}#disclaimer_vpn_select{font-size:22px;line-height:30px;padding:0;margin:0 0 10px;color:" + i + "}#disclaimer_vpn_btns a{user-select:none;-webkit-touch-callout:none;display:inline-block;vertical-align:top;padding:2px 6px;margin:4px;font-size:18px;font-weight:bold;text-decoration:none;line-height:28px;" + o + "}#disclaimer_vpn_btns a span{float:left;}#disclaimer_vpn_btns a .flag-small{margin:8px 4px 8px 0;}#disclaimer_vpn_another{user-select:none;-webkit-touch-callout:none;opacity:0.5;line-height:22px;font-size:16px;margin:20px 0 0;padding:0 0 20px 0;text-decoration:underline;" + n + '}#disclaimer_vpn_another.init-ok{opacity:1;cursor:pointer;}</style><div id="disclaimer_background" class="disclaimer_background"><div id="disclaimer_message"><p id="disclaimer_vpn_welcome">' + s + '</p><p id="disclaimer_vpn_select">' + a + ' :</p><p id="disclaimer_vpn_btns">';
            for (var d in t) r += '<a href="#" onclick="window.xv.disclaimer.vpn_display_closed(\'/change-country/' + t[d].flag + '?suggested=1\')"><span class="flag-small flag-' + t[d].flag + '"></span><span>' + t[d].name + "</span></a>";
            r += '</p><p id="disclaimer_vpn_another">Or select another country</p></div></div>', W(), b.write(r), b.documentElement ? (y = b.documentElement.style.overflow, xv.dom.addClass(b.documentElement, "img-blured disclaimer-opened")) : b.body && (y = b.body.style.overflow, xv.dom.addClass(b.body, "img-blured disclaimer-opened")), window.xv.dom && "undefined" != typeof xv.header && "undefined" != typeof xv.header.categories && "function" == typeof xv.header.categories.ctrypopup && window.xv.dom.addEventListener(b.getElementById("disclaimer_vpn_another"), "click", xv.header.categories.ctrypopup);
            var l = function() {
                b.getElementById("disclaimer_vpn_welcome").innerHTML = xv.i18n.__("legal.disclaimer.vpn_detect.welcome", {
                    "%site_name%": e.toUpperCase()
                }, "front", s), b.getElementById("disclaimer_vpn_select").innerHTML = xv.i18n.__("legal.disclaimer.vpn_detect.select", {}, "front", a) + " :", b.getElementById("disclaimer_vpn_another").innerHTML = xv.i18n.__("legal.disclaimer.vpn_detect.or_select_another", {}, "front", "Or select another country")
            };
            xv.i18n.getCatalog("front", l)
        }, _.vpn_display_closed = function(e) {
            window.xv.cookies.setLocal("disclaimer_vpn_display", "CLICKED", 864e5, "/"), b.getElementById("disclaimer_message").innerHTML = "<img src='" + xv.conf.domains["static"] + "/v3/img/skins/default/xv-inline-loader.gif' alt='loading' class='no-blur'/>", setTimeout(function() {
                window.xv.cookies.setLocal("disclaimer_vpn_display", "TIMEOUT", 864e5, "/"), window.location.href = e
            }, 5e3);
            var t = xv.utils.createRequestObject();
            t.open("POST", "/account/message-closed", !0), t.withCredentials = !0, t.responseType = "json", t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), t.onreadystatechange = function() {
                4 === t.readyState && 200 === t.status && t.response && t.response.result && (window.xv.cookies.setLocal("disclaimer_vpn_display", "OK", 864e5, "/"), window.location.href = e)
            }, t.send("msgid%5B%5D=disclr")
        }, _.showCookiesList = function(e) {
            if (e.classList.add("hidden"), this.bIsAgeWarning) {
                var t = Math.min(this.iMaxTextHeight, Math.max(this.iMinTextHeight, Math.round(parseInt(b.getElementById("disclaimer-over18").style.maxHeight) - 130)));
                b.getElementById("disclaimer-over18").style.maxHeight = t + "px"
            }
            b.getElementById("disclaimer-features").classList.remove("hidden")
        }, _.toggleFeatureDesc = function(e) {
            var t = e.closest(".feature__item"),
                n = b.getElementById("disclaimer-over18"),
                i = b.querySelector(".features__list"),
                o = b.querySelectorAll(".feature__item"),
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
        }, _.resetToggleFeature = function(e, t) {
            for (var n = 0; n < t.length; n++)
                if (e !== t[n]) {
                    var i = t[n].closest(".feature__item");
                    i.classList.contains("item--open") && (i.classList.remove("item--open"), i.querySelector(".feature__text").classList.add("hidden")), i.querySelector(".feature__cookies").classList.contains("hidden") || i.querySelector(".feature__cookies").classList.add("hidden")
                }
        }, _.setFeatures = function(e, t) {
            var n = b.querySelectorAll(".feature__input");
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
                "close" === e && (O(I.ACTIONS.CONSENT_CLOSE), d = !0);
                var l = {
                    featureids: {}
                };
                for (var c in i) {
                    var u = i[c];
                    d || u.sName !== w.S_F_COOKIES_ADVERTISING || (O(u.bChecked ? I.ACTIONS.CONSENT_ACCEPT : I.ACTIONS.CONSENT_REJECT), d = !0, _.bAdvertisingCookieUpdated || _.callAdvertisingCallback(u.bChecked, !1)), l.featureids[u.sName] = u.bChecked ? 1 : 0
                }
                window.xv.cookies.setLocal(L.COOKIES_POP_CLOSED.sName, JSON.stringify({
                    choice: e,
                    features: i.reduce(function(e, t) {
                        return e[t.sName] = t.bChecked, e
                    }, {})
                }), L.COOKIES_POP_CLOSED.oDuration.iMs, "/");
                var p = this;
                E("/account/feature-toggle", l, function(e) {
                    if (e && e.result)
                        for (var n in l.featureids) X(n, !!l.featureids[n]);
                    "string" == typeof t ? p.close_pop(null, null, t) : p.close_pop(), p.bFeatureIsToggling = !1
                }, function() {
                    p.bFeatureIsToggling = !1
                })
            }
        };
        var J = {
                TC_LOADED: "tcloaded",
                CMP_UI_SHOWN: "cmpuishown",
                USER_ACTION_COMPLETE: "useractioncomplete"
            },
            Z = {
                STUB: "stub",
                LOADED: "loaded",
                ERROR: "error",
                VISIBLE: "visible",
                HIDDEN: "hidden",
                DISABLED: "disabled"
            },
            Q = [1, 2],
            ee = {
                gvlSpecificationVersion: 2,
                vendorListVersion: 224,
                tcfPolicyVersion: 2,
                lastUpdated: "2023-11-16T16:05:29Z",
                purposes: Q.reduce(function(e, t) {
                    return e.push({
                        id: t
                    }), e
                }, []),
                vendors: [{
                    id: 997
                }]
            };
        _.getConsentString = function(e) {
            e = "boolean" == typeof e && e;
            var t = new F;
            return t.setGlobalVendorList(ee), t.setCmpId(1), t.setCmpVersion(1), t.setConsentScreen(1), t.setConsentLanguage(this.getLang()), t.setPurposesAllowed(e ? Q : []), t.setVendorsAllowed([997]), t.getConsentString()
        };
        var te = 0;
        _.createTCData = function() {
            return te++, {
                tcString: "",
                listenerId: te,
                eventStatus: J.TC_LOADED,
                cmpStatus: Z.HIDDEN,
                gdprApplies: "boolean" != typeof xv.conf.dyn.gdpra || xv.conf.dyn.gdpra
            }
        }, _.addTCFListener = function(e, t) {
            var n = this.createTCData();
            this.oAdvertisingCallbacks[n.listenerId] = {
                iVersion: e,
                fnCallback: t,
                TCData: n
            }, this.bAdvertisingCallbackSet = !0, this.bIsOpen && this.bHasCookieManageInProcess || this.callAdvertisingCallback(w.IS_ENABLED(w.S_F_COOKIES_ADVERTISING), !0)
        }, _.removeTCFListener = function(e, t) {
            this.oAdvertisingCallbacks[e] ? delete this.oAdvertisingCallbacks[e] : t(!1)
        }, _.initAdvertisingCallback = function() {
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
        }, _.setPendingFeatureToggle = function(e, t, n) {
            for (var i in this.aFeaturesToToggle)
                if (this.aFeaturesToToggle[i].sId === e) return this.aFeaturesToToggle[i].bE = t, void(this.aFeaturesToToggle[i].bL = !!n);
            this.aFeaturesToToggle.push({
                sId: e,
                bE: t,
                bL: n
            })
        }, _.callNextPendingFeatureToggle = function() {
            if (this.aFeaturesToToggle.length > 0) {
                var e = this.aFeaturesToToggle.splice(0, 1)[0];
                $(e.sId, e.bE, e.bL)
            }
        }, _.callAdvertisingCallback = function(e, t) {
            if (!this.bAdvertisingCallbackDisabled && !this.bAdvertisingCookieUpdating && this.bAdvertisingCallbackSet) {
                this.bAdvertisingCookieUpdating = !0;
                var n = this;
                for (var i in this.oAdvertisingCallbacks) {
                    var o = this.oAdvertisingCallbacks[i];
                    t || (o.TCData.eventStatus = J.USER_ACTION_COMPLETE), o.TCData.tcString = this.getConsentString(e), o.fnCallback(o.TCData, !0),
                        function() {
                            n.bAdvertisingCookieUpdating = !1, n.bAdvertisingCookieUpdated = !0
                        }()
                }
            }
        }, _.onWindowFocusEvent = function() {
            _.bIsAgeWarning && !window.xv.cookies.get(L.DISCLAIMER_CLOSED.sName) || _.bHasCookieManage && !window.xv.cookies.get(L.COOKIES_POP_CLOSED.sName) || (_.close_pop(), window.removeEventListener("focus", _.onWindowFocusEvent))
        }, _.initAdvertisingCallback(), _.EVENT = {
            CLOSE_POP: "disclaimerClosed"
        }, _.COOKIE_MANAGE_TYPE = {
            NEW_ONLY: "newOnly",
            UPDATE_ONLY: "updateOnly",
            SEPARATED: "separated",
            INTEGRATED: "integrated",
            NONE: "none"
        }, window.xv.disclaimer = _
    }(),
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.detectIncognito = t() : e.detectIncognito = t()
    }(this, function() {
        return function() {
            "use strict";
            var e = {};
            return {
                598: function(e, t) {
                    function n() {
                        return i(this, void 0, Promise, function() {
                            return o(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, new Promise(function(e, t) {
                                            function n(t) {
                                                e({
                                                    isPrivate: t,
                                                    browserName: r
                                                })
                                            }

                                            function i(e) {
                                                return e === eval.toString().length
                                            }

                                            function o() {
                                                navigator.webkitTemporaryStorage.queryUsageAndQuota(function(e, t) {
                                                    var i;
                                                    n(Math.round(t / 1048576) < 2 * Math.round((void 0 !== (i = window).performance && void 0 !== i.performance.memory && void 0 !== i.performance.memory.jsHeapSizeLimit ? performance.memory.jsHeapSizeLimit : 1073741824) / 1048576))
                                                }, function(e) {
                                                    t(new Error("detectIncognito somehow failed to query storage quota: " + e.message))
                                                })
                                            }
                                            var s, a, r = "Unknown";
                                            void 0 !== (a = navigator.vendor) && 0 === a.indexOf("Apple") && i(37) ? (r = "Safari", function() {
                                                void 0 !== navigator.maxTouchPoints ? function() {
                                                    var e = String(Math.random());
                                                    try {
                                                        window.indexedDB.open(e, 1).onupgradeneeded = function(t) {
                                                            var i, o, s = null === (i = t.target) || void 0 === i ? void 0 : i.result;
                                                            try {
                                                                s.createObjectStore("test", {
                                                                    autoIncrement: !0
                                                                }).put(new Blob), n(!1)
                                                            } catch (e) {
                                                                var a = e;
                                                                return e instanceof Error && (a = null !== (o = e.message) && void 0 !== o ? o : e), "string" != typeof a ? void n(!1) : void n(a.includes("BlobURLs are not yet supported"))
                                                            } finally {
                                                                s.close(), window.indexedDB.deleteDatabase(e)
                                                            }
                                                        }
                                                    } catch (e) {
                                                        n(!1)
                                                    }
                                                }() : function() {
                                                    var e = window.openDatabase,
                                                        t = window.localStorage;
                                                    try {
                                                        e(null, null, null, null)
                                                    } catch (e) {
                                                        return void n(!0)
                                                    }
                                                    try {
                                                        t.setItem("test", "1"), t.removeItem("test")
                                                    } catch (e) {
                                                        return void n(!0)
                                                    }
                                                    n(!1)
                                                }()
                                            }()) : function() {
                                                var e = navigator.vendor;
                                                return void 0 !== e && 0 === e.indexOf("Google") && i(33)
                                            }() ? (s = navigator.userAgent, r = s.match(/Chrome/) ? void 0 !== navigator.brave ? "Brave" : s.match(/Edg/) ? "Edge" : s.match(/OPR/) ? "Opera" : "Chrome" : "Chromium", function() {
                                                void 0 !== self.Promise && void 0 !== self.Promise.allSettled ? o() : (0, window.webkitRequestFileSystem)(0, 1, function() {
                                                    n(!1)
                                                }, function() {
                                                    n(!0)
                                                })
                                            }()) : void 0 !== document.documentElement && void 0 !== document.documentElement.style.MozAppearance && i(37) ? (r = "Firefox", n(void 0 === navigator.serviceWorker)) : void 0 !== navigator.msSaveBlob && i(39) ? (r = "Internet Explorer", n(void 0 === window.indexedDB)) : t(new Error("detectIncognito cannot determine the browser"))
                                        })];
                                    case 1:
                                        return [2, e.sent()]
                                }
                            })
                        })
                    }
                    var i = this && this.__awaiter || function(e, t, n, i) {
                            return new(n || (n = Promise))(function(o, s) {
                                function a(e) {
                                    try {
                                        d(i.next(e))
                                    } catch (e) {
                                        s(e)
                                    }
                                }

                                function r(e) {
                                    try {
                                        d(i["throw"](e))
                                    } catch (e) {
                                        s(e)
                                    }
                                }

                                function d(e) {
                                    var t;
                                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                                        e(t)
                                    })).then(a, r)
                                }
                                d((i = i.apply(e, t || [])).next())
                            })
                        },
                        o = this && this.__generator || function(e, t) {
                            function n(n) {
                                return function(d) {
                                    return function(n) {
                                        if (i) throw new TypeError("Generator is already executing.");
                                        for (; a && (a = 0, n[0] && (r = 0)), r;) try {
                                            if (i = 1, o && (s = 2 & n[0] ? o["return"] : n[0] ? o["throw"] || ((s = o["return"]) && s.call(o), 0) : o.next) && !(s = s.call(o, n[1])).done) return s;
                                            switch (o = 0, s && (n = [2 & n[0], s.value]), n[0]) {
                                                case 0:
                                                case 1:
                                                    s = n;
                                                    break;
                                                case 4:
                                                    return r.label++, {
                                                        value: n[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    r.label++, o = n[1], n = [0];
                                                    continue;
                                                case 7:
                                                    n = r.ops.pop(), r.trys.pop();
                                                    continue;
                                                default:
                                                    if (s = r.trys, !((s = s.length > 0 && s[s.length - 1]) || 6 !== n[0] && 2 !== n[0])) {
                                                        r = 0;
                                                        continue
                                                    }
                                                    if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                                                        r.label = n[1];
                                                        break
                                                    }
                                                    if (6 === n[0] && r.label < s[1]) {
                                                        r.label = s[1], s = n;
                                                        break
                                                    }
                                                    if (s && r.label < s[2]) {
                                                        r.label = s[2], r.ops.push(n);
                                                        break
                                                    }
                                                    s[2] && r.ops.pop(), r.trys.pop();
                                                    continue
                                            }
                                            n = t.call(e, r)
                                        } catch (e) {
                                            n = [6, e], o = 0
                                        } finally {
                                            i = s = 0
                                        }
                                        if (5 & n[0]) throw n[1];
                                        return {
                                            value: n[0] ? n[1] : void 0,
                                            done: !0
                                        }
                                    }([n, d])
                                }
                            }
                            var i, o, s, a, r = {
                                label: 0,
                                sent: function() {
                                    if (1 & s[0]) throw s[1];
                                    return s[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return a = {
                                next: n(0),
                                "throw": n(1),
                                "return": n(2)
                            }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                                return this
                            }), a
                        };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.detectIncognito = void 0, t.detectIncognito = n, "undefined" != typeof window && (window.detectIncognito = n), t["default"] = n
                }
            } [598](0, e), e = e["default"]
        }()
    }),
    function() {
        window.xv.gnct = {
            bIsPrivate: null,
            bDetected: !1,
            fnPrivateDetected: function(e) {
                if (!window.xv.gnct.bDetected) return void window.xv.gnct.aCallbacks.push(e);
                e()
            },
            aCallbacks: [],
            getStatusString: function() {
                if (!xv.gnct.bDetected) return "not_loaded";
                switch (xv.gnct.bIsPrivate) {
                    case !0:
                        return "enabled";
                    case !1:
                        return "disabled";
                    default:
                        return "unknown"
                }
            }
        };
        var e = function() {
            window.xv.gnct.bDetected = !0, window.xv.gnct.aCallbacks.map(function(e) {
                e()
            }), window.xv.gnct.aCallbacks = []
        };
        try {
            detectIncognito().then(function(t) {
                window.xv.gnct.bIsPrivate = t.isPrivate, e()
            })
        } catch (t) {
            e()
        }
    }(),
    function() {
        var e, t, n, i, o = "string" == typeof window.xv.conf.sitename && window.xv.conf.sitename,
            s = function() {
                this.enlarged = !1, this.callbacks = []
            };
        s.prototype = {
            isEnlarged: function() {
                return this.enlarged
            },
            toggleSize: function(s) {
                if (!1 !== e) {
                    if (!e && !(e = document.getElementById("content"))) return void(e = !1);
                    if ("boolean" != typeof s || s !== this.enlarged) {
                        this.enlarged ? xv.dom.removeClass(e, "player-enlarged") : xv.dom.addClass(e, "player-enlarged"), this.enlarged = !this.enlarged;
                        for (var a in this.callbacks) this.callbacks[a](this.enlarged);
                        if (!1 !== t && !1 !== n) {
                            if (!t) {
                                if (!(t = document.getElementById("related-videos"))) return void(t = !1);
                                var r = "video-right";
                                try {
                                    if (window.xv && "object" == typeof window.xv.conf && "object" == typeof window.xv.conf.ads) {
                                        var d = window.xv.conf.ads.banners;
                                        for (var l in d)
                                            if ("square" === d[l].type) {
                                                r = d[l].div_id;
                                                break
                                            }
                                    }
                                } catch (c) {}
                                if (!(n = document.getElementById(r))) return void(n = !1);
                                i = n.parentNode
                            }
                            "default" !== o && "xnxx" !== o ? this.enlarged ? (t.parentNode.insertBefore(n, t), xv.dom.addClass(t, "enlarged-player")) : (i.insertBefore(n, i.firstChild), xv.dom.removeClass(t, "enlarged-player")) : this.enlarged ? (n.style.display = "none", xv.dom.addClass(t, "enlarged-player")) : (n.style.display = "block", xv.dom.removeClass(t, "enlarged-player"))
                        }
                    }
                }
            },
            addOnSizeChangeEventHandler: function(e) {
                this.callbacks.push(e)
            }
        }, window.xvideos = window.xvideos || {}, window.xvideos.player = new s
    }(),
    function() {
        window.xv || (window.xv = {});
        var e = function(e, t, n) {
            if (void 0 !== e) {
                this.storage = !1;
                try {
                    if ("object" == typeof window.localStorage) {
                        var i = window.localStorage,
                            o = "__storage_test__";
                        i.setItem(o, o), i.removeItem(o), this.storage = window.localStorage
                    }
                } catch (s) {}
                this.namespace = e, this.max_elements = void 0 !== t && "number" == typeof t && t > 0 ? t : null, this.bIDB = !0 === n
            }
        };
        e.prototype = {
            canTrack: function() {
                return !1 !== this.storage
            },
            isTracking: function() {
                return this.canTrack() && "disabled" !== this.storage.getItem(this.namespace + ".tracking")
            },
            stopTracking: function(e) {
                if (!this.canTrack()) return !1;
                if (this.storage.setItem(this.namespace + ".tracking", "disabled"), !1 !== e)
                    if (this.bIDB) {
                        var t = this.getStoreName(),
                            n = function() {
                                xv.indexedDb.clear(t)
                            };
                        xv.indexedDb.manageTempStackAdd(n)
                    } else this.storage.removeItem(this.getStoreName())
            },
            startTracking: function() {
                if (!this.canTrack()) return !1;
                this.storage.removeItem(this.namespace + ".tracking")
            },
            getNamespace: function() {
                return this.namespace
            },
            getIdsList: function(e) {
                var t = [],
                    n = this,
                    i = function(e) {
                        for (var n in e) {
                            var i = e[n].i; - 1 === t.indexOf(i) && t.push(i)
                        }
                        return t
                    };
                return this.bIDB ? e ? i(this.getIds(e)) : new Promise(function(e, t) {
                    var o = function() {
                        n.getIds().then(function(t) {
                            e(i(t))
                        })
                    };
                    xv.indexedDb.manageTempStackAdd(o)
                }) : i(this.getIds())
            },
            getIdsTimestampsList: function(e) {
                var t = {},
                    n = function(e) {
                        for (var n in e) t[e[n].i] = e[n].t;
                        return t
                    };
                if (this.bIDB) {
                    if (e) return n(this.getIds(e));
                    var i = this;
                    return new Promise(function(e, n) {
                        i.getIds().then(function(n) {
                            if (n && n.length)
                                for (var i in n) t[n[i].i] = n[i].t;
                            e(t)
                        })
                    })
                }
                return n(this.getIds())
            },
            getIds: function(e) {
                if (!this.canTrack()) return [];
                var t, n = this.getStoreName();
                if (!this.bIDB || e) {
                    if ("string" != typeof(t = this.storage.getItem(this.getStoreName()))) return [];
                    try {
                        t = JSON.parse(t)
                    } catch (i) {
                        return []
                    }
                    return t
                }
                return xv.indexedDb.getStoreExist({
                    store_name: n
                }) ? new Promise(function(e, t) {
                    var i = function() {
                        xv.indexedDb.get(null, n, !1, !0).then(function(t) {
                            try {
                                "string" == typeof t && (t = JSON.parse(t))
                            } catch (i) {
                                return void e([])
                            }
                            if (!t || !t.length) return void e([]);
                            e(t)
                        })["catch"](function() {
                            e([])
                        })
                    };
                    xv.indexedDb.manageTempStackAdd(i)
                }) : new Promise(function(e, t) {
                    e([])
                })
            },
            addId: function(e, t) {
                if (this.isTracking()) {
                    var n = this,
                        i = function(i) {
                            var o = !1;
                            for (var s in i)
                                if (i[s].i === e) {
                                    i[s].t = (new Date).getTime(), o = !0;
                                    break
                                } o ? i.sort(function(e, t) {
                                return e.t === t.t ? 0 : e.t > t.t ? -1 : 1
                            }) : (i.unshift({
                                i: e,
                                t: (new Date).getTime()
                            }), null !== n.max_elements && i.length > n.max_elements && (i = i.slice(0, n.max_elements - 1))), n._write(i), "function" == typeof t && t()
                        };
                    this.bIDB ? this.getIds().then(function(e) {
                        i(e)
                    }) : i(this.getIds())
                }
            },
            addIds: function(e) {
                if (this.isTracking()) {
                    var t = this,
                        n = function(n) {
                            var i = !1;
                            for (var o in n) {
                                var s = e.indexOf(n[o].i);
                                if (-1 !== s) {
                                    delete e[s], n[o].t = (new Date).getTime(), i = !0;
                                    break
                                }
                            }
                            if (i && n.sort(function(e, t) {
                                    return e.t === t.t ? 0 : e.t > t.t ? -1 : 1
                                }), e.length > 0) {
                                for (var a in e) n.unshift({
                                    i: e[a],
                                    t: (new Date).getTime()
                                });
                                null !== t.max_elements && n.length > t.max_elements && (n = n.slice(0, t.max_elements - 1))
                            }
                            t._write(n)
                        };
                    this.bIDB ? this.getIds().then(function(e) {
                        n(e)
                    }) : n(this.getIds())
                }
            },
            removeId: function(e, t, n) {
                if (this.isTracking())
                    if (this.bIDB) {
                        if ("string" != typeof t || !t.length) return;
                        var i = function() {
                            xv.indexedDb.remove(e, t, !0).then(function() {
                                "function" == typeof n && n()
                            })["catch"](function() {
                                "function" == typeof n && n()
                            })
                        };
                        xv.indexedDb.manageTempStackAdd(i)
                    } else {
                        var o = this.getIds();
                        for (var s in o)
                            if (o[s].i === e) return o.splice(s, 1), void this._write(o)
                    }
            },
            hasId: function(e) {
                if (!this.isTracking()) return !1;
                var t = function(t) {
                    for (var n in t)
                        if (t[n].i === e) return !0;
                    return !1
                };
                if (this.bIDB) {
                    var n = this;
                    return new Promise(function(e, i) {
                        n.getIds().then(function(n) {
                            e(t(n))
                        })
                    })
                }
                return t(this.getIds())
            },
            getTime: function(e) {
                if (!this.isTracking()) return !1;
                var t = function(t) {
                    for (var n in t)
                        if (t[n].i === e) return t[n].t;
                    return !1
                };
                if (this.bIDB) {
                    var n = this;
                    return new Promise(function(e, i) {
                        n.getIds().then(function(n) {
                            e(t(n))
                        })
                    })
                }
                return t(this.getIds())
            },
            clear: function(e) {
                if (!this.canTrack()) return !1;
                if (this.bIDB) {
                    var t = this.getStoreName(),
                        n = function() {
                            xv.indexedDb.clear(t, null, "function" == typeof e ? e : null)
                        };
                    xv.indexedDb.manageTempStackAdd(n)
                } else this.storage.removeItem(this.getStoreName())
            },
            _write: function(e) {
                if (this.bIDB) {
                    var t = this.getStoreName();
                    for (var n in e) ! function(n) {
                        var i = function() {
                            xv.indexedDb.set(e[n], t, !0)
                        };
                        xv.indexedDb.get(e[n].i, t, !1, !0).then(function(e) {
                            "object" != typeof e && xv.indexedDb.manageTempStackAdd(i)
                        })["catch"](function(e) {
                            xv.log.debug("tracker --- _write", "idLoop --- REJECT", e), xv.indexedDb.manageTempStackAdd(i)
                        })
                    }(n)
                } else this.storage.setItem(this.getStoreName(), JSON.stringify(e))
            },
            getStoreName: function() {
                return this.namespace + ".ids"
            }
        }, window.xv.tracker = e
    }(),
    function() {
        var e = "function" == typeof "a".localeCompare,
            t = !1,
            n = "en";
        ! function() {
            if (e) {
                try {
                    "a".localeCompare("b", "i")
                } catch (o) {
                    t = "RangeError" === o.name
                }
                if (t) {
                    var i = document.documentElement.lang;
                    if ("string" == typeof i) {
                        i = i.toLowerCase();
                        try {
                            "a".localeCompare("b", i)
                        } catch (o) {
                            if (2 !== i.length) return;
                            i = i.substring(0, 2);
                            try {
                                "a".localeCompare("b", i)
                            } catch (o) {
                                return
                            }
                        }
                        n = i
                    }
                }
            }
        }();
        var i = /\s*<span class=(\"|\')icon[\s\w\d-]+(\"|\')><\/span>\s*/gi,
            o = /<strong>/gi,
            s = /<\/strong>/gi,
            a = function(e, t) {
                return e.cleanLabel.localeCompare(t.cleanLabel)
            },
            r = function(e, t) {
                return e.cleanLabel.localeCompare(t.cleanLabel, n, {
                    sensitivity: "base"
                })
            },
            d = function(e, t) {
                return t.cleanLabel.localeCompare(e.cleanLabel)
            },
            l = function(e, t) {
                return t.cleanLabel.localeCompare(e.cleanLabel, n, {
                    sensitivity: "base"
                })
            },
            c = function(n, i) {
                var o = parseInt(n.timestamp) || 0,
                    s = parseInt(i.timestamp) || 0;
                if (o === s) {
                    var d = parseInt(n.weight) || 0,
                        l = parseInt(i.weight) || 0;
                    return d === l && e ? t ? r(n, i) : a(n, i) : d < l ? 1 : -1
                }
                return o < s ? 1 : -1
            },
            u = function(e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            };
        xv.cats = {
            write: function(n, i, o) {
                e && n.sort(t ? r : a), o = "string" == typeof o ? '" class="' + o : "";
                var s = "";
                for (var d in n) s += i ? '<option value="' + n[d].url + o + '">' + n[d].label + "</option>" : ' <li><a href="' + n[d].url + o + '">' + n[d].label + "</a></li>";
                document.write(s)
            },
            aInitiatedNavs: [],
            aAvailableCatOrders: ["order-az-asc", "order-az-desc", "order-top-asc"],
            oVideosILikeTracker: null,
            oVideosCommentedTracker: null,
            iVideosILikeLength: null,
            iVideosCommentedLength: null,
            bIDB: xv.indexedDb && xv.indexedDb.getDbIsSupported(),
            tmp_separate_history_by_cat: function() {
                if (this.can_use_save()) {
                    var e = this.get_save("history", "XNXX_cats_order_5");
                    if (!e || !e.length) return;
                    for (var t in e) {
                        var n = !1;
                        if (this.is_search_page(e[t].url)) {
                            var i = this.get_search_params(e[t].url);
                            for (var o in this.main_cats) n || (-1 !== i.query.toString().toLowerCase().indexOf(this.main_cats[o]) ? (this.add_to_history(e[t].label, e[t].url, this.main_cats[o]), n = !0) : -1 !== i.search_filters.indexOf(this.main_cats[o]) && (this.add_to_history(e[t].label, e[t].url, this.main_cats[o]), n = !0))
                        } else
                            for (var o in this.main_cats) n || -1 !== e[t].url.toLowerCase().indexOf("/" + this.main_cats[o] + "/") && (this.add_to_history(e[t].label, e[t].url, this.main_cats[o]), n = !0);
                        n || this.add_to_history(e[t].label, e[t].url, "straight")
                    }
                    this.del_save("history", "XNXX_cats_order_5")
                }
            },
            init_write_stored_order: function(e, t, n, i) {
                this.tmp_separate_history_by_cat();
                var o = {
                    cat_list_container: document.getElementById(e),
                    order_list_container: document.getElementById(t),
                    history_infos_id: n || !1,
                    history_infos: !!n && document.getElementById(n),
                    options: i || {}
                };
                if (this.can_use_save() && o.history_infos) {
                    if (this.get_history().length > 0 || this.is_history_disabled()) {
                        var s = o.history_infos.getElementsByTagName("SPAN");
                        if (s[0]) {
                            var a = o.history_infos.getElementsByTagName("DIV");
                            o.history_infos_btn = s[0], o.history_infos_box = a[0], xv.dom.addEventListener(o.history_infos_btn, "click", function(e) {
                                if (e.preventDefault ? e.preventDefault() : e.returnValue = !1, xv.dom.hasClass(o.history_infos_box, "hidden")) {
                                    if (xv.dom.removeClass(o.history_infos_box, "hidden"), window.jQuery) {
                                        var t;
                                        t = function(e) {
                                            $(e.target).closest("#" + o.history_infos_id).length > 0 || (xv.dom.addClass(o.history_infos_box, "hidden"), $("body").off("click", t))
                                        }, $("body").on("click", t)
                                    }
                                } else xv.dom.addClass(o.history_infos_box, "hidden")
                            })
                        }
                        xv.dom.removeClass(o.history_infos, "hidden")
                    }
                }
                if (o.cat_list_container) {
                    var r = [],
                        d = function() {
                            r = xv.cats.order_list(xv.cats.get_all(o, !0));
                            var e = xv.cats.get_stored_order();
                            xv.cats.write_list(r, "cat_list_container", o), xv.cats.update_order_switch(e, o), xv.cats.update_disable_switch(o)
                        },
                        l = function() {
                            null === xv.cats.oVideosILikeTracker && (xv.cats.oVideosILikeTracker = new xv.tracker("aVideosILike", null, xv.cats.bIDB)), null === xv.cats.oVideosCommentedTracker && (xv.cats.oVideosCommentedTracker = new xv.tracker("aMyCommentedVideos", null, xv.cats.bIDB)), xv.cats.bIDB ? (xv.indexedDb.getStoreExist("aVideosILike.ids", !0).then(function() {
                                xv.indexedDb.manageTempStackAdd(function() {
                                    xv.cats.get_nb_videos_liked().then(function(e) {
                                        xv.cats.iVideosILikeLength = e, d()
                                    })
                                })
                            })["catch"](function() {
                                xv.cats.iVideosILikeLength = xv.cats.get_nb_videos_liked(!0), d()
                            }), xv.indexedDb.getStoreExist("aMyCommentedVideos.ids", !0).then(function() {
                                xv.indexedDb.manageTempStackAdd(function() {
                                    xv.cats.get_nb_videos_commented().then(function(e) {
                                        xv.cats.iVideosCommentedLength = e, d()
                                    })
                                })
                            })["catch"](function() {
                                xv.cats.iVideosCommentedLength = xv.cats.get_nb_videos_commented(!0), d()
                            })) : (xv.cats.iVideosILikeLength = xv.cats.get_nb_videos_liked(), xv.cats.iVideosCommentedLength = xv.cats.get_nb_videos_commented(), d())
                        };
                    if (l(), xv.dom.addEventListener(window, "load", l), o.options.id_remove_if_empty && 0 === r.length) {
                        var c = document.getElementById(o.options.id_remove_if_empty);
                        c.parentNode.removeChild(c)
                    }
                }
                var u = o.order_list_container.getElementsByTagName("A");
                for (var p in u) ! function() {
                    var e = u[p];
                    "object" == typeof e && xv.dom.addEventListener(e, "click", function(t) {
                        if (t.preventDefault ? t.preventDefault() : t.returnValue = !1, "A" === e.tagName) {
                            var n = e.getAttribute("data-order");
                            xv.cats.update_lists(n)
                        }
                    })
                }();
                this.aInitiatedNavs.push(o)
            },
            get_nb_videos_liked: function(e) {
                return xv.cats.bIDB ? e ? xv.cats.oVideosILikeTracker.getIdsList(e).length : new Promise(function(e, t) {
                    xv.indexedDb.manageTempStackAdd(function() {
                        xv.cats.oVideosILikeTracker.getIdsList().then(function(t) {
                            e(t.length)
                        })
                    })
                }) : xv.cats.oVideosILikeTracker.getIdsList().length
            },
            get_nb_videos_commented: function(e) {
                return xv.cats.bIDB ? e ? xv.cats.oVideosCommentedTracker.getIdsList(e).length : new Promise(function(e, t) {
                    xv.indexedDb.manageTempStackAdd(function() {
                        xv.cats.oVideosCommentedTracker.getIdsList().then(function(t) {
                            e(t.length)
                        })
                    })
                }) : xv.cats.oVideosCommentedTracker.getIdsList().length
            },
            get_all: function(e, t) {
                if (!xv.conf.dyn.categories) return [];
                var n = [],
                    a = [],
                    r = [];
                if (!e) {
                    if (!this.aInitiatedNavs[0]) return [];
                    e = this.aInitiatedNavs[0]
                }
                a.push({
                    label: "<span class='icon-f icf-history'></span> " + xv.i18n.__("history.history", null, null, "History"),
                    url: "/history/",
                    weight: 999
                });
                for (var d in xv.conf.dyn.categories) {
                    var l = "/" === xv.conf.dyn.categories[d].url || "/gay" === xv.conf.dyn.categories[d].url || "/shemale" === xv.conf.dyn.categories[d].url ? '<span class="icon-f icf-home"></span> ' : "";
                    a.push({
                        label: l + xv.conf.dyn.categories[d].label,
                        url: xv.conf.dyn.categories[d].url,
                        weight: xv.conf.dyn.categories[d].weight,
                        bTargetBlank: !!xv.conf.dyn.categories[d].target_blank
                    }), r.push(xv.conf.dyn.categories[d].weight)
                }
                r.sort(function(e, t) {
                    return e - t
                });
                var u = r[Math.ceil(r.length / 3 * 2)] - 1;
                for (var d in xv.conf.dyn.more_links) a.push({
                    label: xv.conf.dyn.more_links[d].label,
                    url: xv.conf.dyn.more_links[d].url,
                    weight: xv.conf.dyn.more_links[d].weight ? xv.conf.dyn.more_links[d].weight : u,
                    bTargetBlank: !!xv.conf.dyn.more_links[d].target_blank,
                    other_link: !0,
                    sAClass: xv.conf.dyn.more_links[d].a_class ? xv.conf.dyn.more_links[d].a_class : null
                });
                if (xv.cats.iVideosILikeLength >= 1) {
                    var p = {
                        label: "<span class='icon-f icf-heart'></span> " + xv.i18n.__("listing.videos_i_like", null, null, "Videos I like"),
                        url: "/videos-i-like",
                        weight: 1010,
                        sAClass: "videos-i-like"
                    };
                    a.push(p)
                }
                if (xv.cats.iVideosCommentedLength >= 1) {
                    var f = {
                        label: "<span class='icon-f icf-comment-o'></span> " + xv.i18n.__("listing.my_commented_videos", null, null, "My commented videos"),
                        url: "/my-commented-videos",
                        weight: 1e3,
                        sAClass: "my-commented-videos"
                    };
                    a.push(f)
                }
                var h = this.get_history(this.get_get_main_cat()),
                    m = [],
                    g = this.clean_url_for_comparison(window.location.pathname, !0, !0);
                if (h.length > 0)
                    for (var d in h) {
                        var v = !1,
                            _ = this.clean_url_for_comparison(h[d].url, !0, !0);
                        for (var b in a) _ === this.clean_url_for_comparison(a[b].url, !0, !0) && (v = !0, this.clean_url_for_comparison(a[b].url, !1, !1) !== this.clean_url_for_comparison(h[d].url, !1, !1) && (this.clean_url_for_comparison(a[b].url, !1, !0) !== this.clean_url_for_comparison(h[d].url, !1, !0) && (a[b].custom = !0), a[b].url = h[d].url), a[b].count = h[d].count, a[b].timestamp = h[d].timestamp, !e.options.history_only || e.options.no_current_page && g === _ || m.push(a[b]));
                        v || "/gay" === h[d].url || "/shemale" === h[d].url || "/" === h[d].url || (h[d].label = xv.utils.escape(xv.utils.unescape(h[d].label), !0), h[d].custom = !0, e.options.no_current_page && g === _ || m.push(h[d]))
                    }
                if (t) {
                    if (m.length > 10) {
                        var y = function(e) {
                                for (var t in h)
                                    if (xv.cats.get_stored_pathname(h[t].url) === xv.cats.get_stored_pathname(e)) return h.splice(t, 1), !0
                            },
                            x = new Date,
                            w = x.getTime();
                        m.sort(c).reverse();
                        for (var k = !1; m.length > 10 && !1 === k;) w - m[0].timestamp > 7884e6 ? (y(m[0].url), m.splice(0, 1)) : k = !0;
                        if (m.length > 20) {
                            for (k = !1; m.length > 20 && !1 === k;) w - m[0].timestamp > 5256e6 ? (y(m[0].url), m.splice(0, 1)) : k = !0;
                            if (m.length > 40) {
                                for (k = !1; m.length > 40 && !1 === k;) w - m[0].timestamp > 2628e6 ? (y(m[0].url), m.splice(0, 1)) : k = !0;
                                for (; m.length > 50;) y(m[0].url), m.splice(0, 1)
                            }
                        }
                    }
                    m = this.clean_history(m), h = this.clean_history(h);
                    var C = this.get_history("full_save");
                    C[this.get_get_main_cat()] = h, this.save("history", C, "XNXX_cats_history_1")
                }
                e.options.history_only || (n = n.concat(a)), n = n.concat(m);
                for (var d in n) n[d].cleanLabel = n[d].label.replace(i, "").replace(o, "").replace(s, "");
                return n
            },
            write_list: function(e, t, n) {
                if (n[t]) {
                    this.write_html_list(e, n[t]);
                    var i = this.get_stored_order();
                    for (var o in this.aAvailableCatOrders) this.aAvailableCatOrders[o] === i ? xv.dom.addClass(n[t], i) : xv.dom.removeClass(n[t], this.aAvailableCatOrders[o]);
                    if ("cat_list_container" === t) {
                        var s = n[t].getElementsByTagName("A");
                        for (var o in s) ! function() {
                            var e = s[o];
                            "object" == typeof e && xv.dom.addEventListener(e, "click", function(t) {
                                if (t.preventDefault ? t.preventDefault() : t.returnValue = !1, "A" === e.tagName) {
                                    var n = e.getAttribute("href"),
                                        i = xv.dom.hasClass(e, "nutaku-games"),
                                        o = "_blank" === e.getAttribute("target");
                                    xv.cats.add_to_history(e.text, n), xv.conf.dyn.is_premium || -1 === n.indexOf(xv.conf.domains.premium) || "function" != typeof require ? i && "function" == typeof require ? require(["skins/common/games/nutaku_migration_pop"], function(e) {
                                        (new e).openPopup()
                                    }) : o ? window.open(n, "_blank") : document.location.href = n : require(["skins/common/mozaique/premium_redirect_alert"], function(e) {
                                        var t = function() {
                                            o ? window.open(n, "_blank") : document.location.href = n
                                        };
                                        e.displayPopup("exit", null, t)
                                    })
                                }
                            })
                        }()
                    }
                }
            },
            update_lists: function(e) {
                var t = this.get_stored_order();
                "string" != typeof e ? e = t : "order-az-asc" === e && "order-az-asc" === t && (e = "order-az-desc");
                for (var n in this.aInitiatedNavs) {
                    var i = this.aInitiatedNavs[n],
                        o = this.order_list(this.get_all(i), e);
                    this.update_list(i, o, e)
                }
            },
            update_list: function(e, t, n) {
                this.write_list(t, "cat_list_container", e), this.update_order_switch(n, e), this.update_disable_switch(e)
            },
            update_order_switch: function(e, t) {
                var n = t.order_list_container.getElementsByTagName("A");
                for (var i in n) {
                    var o = n[i];
                    if ("object" == typeof o) {
                        var s = o.getAttribute("data-order");
                        s === e || "order-az-desc" === e && "order-az-asc" === s ? (xv.dom.hasClass(o, "current_order") || xv.dom.addClass(o, "current_order"), "order-az-asc" !== e && "order-az-desc" !== e || (o.getElementsByTagName("SPAN")[0].innerHTML = "order-az-asc" === e ? "↓" : "↑")) : xv.dom.hasClass(o, "current_order") && ("order-az-asc" === s && (o.getElementsByTagName("SPAN")[0].innerHTML = ""), xv.dom.removeClass(o, "current_order"))
                    }
                }
            },
            update_disable_switch: function(e) {
                if (!e.history_infos) return !1;
                var t = this.is_history_disabled() ? "categories.clear_and_enable_history" : "categories.clear_and_disable_history",
                    n = {
                        "%clear_link%": '&lt;a href="#" data-follow="nofollow" data-action="clear-history"&gt;',
                        "%disable_link%": '&lt;a href="#" data-follow="nofollow" data-action="disable-history"&gt;',
                        "%end_link%": "&lt;/a&gt;"
                    };
                e.history_infos.getElementsByTagName("P")[0].innerHTML = xv.utils.unescape(xv.i18n.__(t, n));
                var i = e.history_infos.getElementsByTagName("A");
                for (var o in i) {
                    var s = i[o];
                    "object" == typeof s && ("clear-history" === s.getAttribute("data-action") ? (e.clear_history = s, xv.dom.addEventListener(e.clear_history, "click", function(t) {
                            t.preventDefault ? t.preventDefault() : t.returnValue = !1, xv.cats.clear_history(), e.history_infos_box && xv.dom.addClass(e.history_infos_box, "hidden")
                        }),
                        xv.dom.removeClass(e.clear_history, "hidden")) : "disable-history" === s.getAttribute("data-action") && (e.disable_history = s, xv.dom.addEventListener(e.disable_history, "click", function(t) {
                        t.preventDefault ? t.preventDefault() : t.returnValue = !1, xv.cats.disable_history_toggle(), e.history_infos_box && xv.dom.addClass(e.history_infos_box, "hidden")
                    }), xv.dom.removeClass(e.disable_history, "hidden")))
                }
            },
            is_history_disabled: function() {
                return !!this.get_save("history_disabled", "XNXX_cats_history_1")
            },
            disable_history_toggle: function(e) {
                var t = "boolean" == typeof e ? e : !this.is_history_disabled();
                if (t) {
                    if (!this.clear_history()) return !1
                } else this.get_stored_order("order-top-asc");
                return this.save("history_disabled", t, "XNXX_cats_history_1"), this.update_lists(), !0
            },
            clear_history: function() {
                if (confirm(xv.utils.unescape(xv.i18n.__("categories.confirm_clear_history", null, null, "Are you sure you want to clear your navigation history ?")))) return this.del_save("history", "XNXX_cats_history_1"), this.update_lists(), !0;
                var e = this.get_history("full_save");
                for (var t in e)
                    if (e[t].length > 0) return !1;
                return !0
            },
            clean_history: function(e) {
                for (var t = []; e.length > 0;) {
                    var n = e.splice(0, 1)[0],
                        i = !0;
                    for (var o in t) {
                        var s = t[o];
                        this.is_same_page(n.url, s.url) && (i = !1)
                    }
                    if (i)
                        for (var a in e) {
                            var r = e[a];
                            this.is_same_page(n.url, r.url) && n.timestamp < r.timestamp && (i = !1)
                        }
                    i && (n.url = this.clean_url_pagin(n.url), t.push(n))
                }
                return t
            },
            url_filter_params: ["hits", "year", "month", "0-10min", "10-20min", "20min+", "gay", "shemale", "straight", "hd-only", "day", "yesterday", "2daysago", "week", "month", "all"],
            main_cats: ["gay", "shemale", "straight"],
            url_filter_params_escaped: !1,
            get_url_filter_params_escaped: function() {
                if (!1 === this.url_filter_params_escaped) {
                    this.url_filter_params_escaped = [];
                    for (var e in this.url_filter_params) this.url_filter_params_escaped.push(u(this.url_filter_params[e]))
                }
                return this.url_filter_params_escaped
            },
            is_search_page: function(e) {
                return "/search/" === e.substring(0, 8)
            },
            search_params_by_url: {},
            pagin_by_url: {},
            pagin_pos_by_url: {},
            is_same_page_cache: {},
            cleaned_comp_urls: {},
            get_search_params: function(e) {
                if ("undefined" != typeof this.search_params_by_url[e]) return this.search_params_by_url[e];
                var t = new RegExp("/([^/]+)(/(\\d+))?/?$"),
                    n = e.substring(7).match(t);
                if (!n) return this.search_params_by_url[e] = {
                    query: "",
                    query_pos: !1,
                    pagin: 0,
                    search_filters: [],
                    all_filters: []
                }, this.search_params_by_url[e];
                query = !(!n || !n[1]) && n[1], query_pos = !(!n || !n[1]) && n.index + 7, pagin = n[3] && parseInt(n[3]) > 0 ? parseInt(n[3]) : 0, has_pagin_in_url = n[3] && !isNaN(parseInt(n[3])), pagin > 0 && -1 !== this.url_filter_params.indexOf(query) && (query = String(pagin), query_pos = this.get_pagin_pos(e), pagin = 0, has_pagin_in_url = !1);
                var i = new RegExp("/" + u(query) + (has_pagin_in_url ? "(/(\\d+))" : "") + "/?$"),
                    o = i.exec(e),
                    s = !!(o && o.length > 0) && o.index,
                    a = s ? e.substring(7, s - 7).split("/") : [],
                    r = [];
                for (var d in a) - 1 !== this.url_filter_params.indexOf(a[d]) && r.push(a[d]);
                return this.search_params_by_url[e] = {
                    query: query,
                    query_pos: query_pos,
                    pagin: pagin,
                    search_filters: r,
                    all_filters: a
                }, this.search_params_by_url[e]
            },
            get_page: function(e) {
                if ("undefined" != typeof this.pagin_by_url[e]) return this.pagin_by_url[e];
                var t = 0;
                if (this.is_search_page(e)) t = this.get_search_params(e).pagin;
                else {
                    var n = e.match(new RegExp("/(\\d+)/?$"));
                    t = n && n[1] && parseInt(n[1]) > 0 ? parseInt(n[1]) : 0
                }
                return this.pagin_by_url[e] = t, t
            },
            get_pagin_pos: function(e) {
                if ("undefined" != typeof this.pagin_pos_by_url[e]) return this.pagin_pos_by_url[e];
                var t = new RegExp("/(\\d+)/?$"),
                    n = t.exec(e);
                return this.pagin_pos_by_url[e] = !!(n && n.length > 0) && n.index, this.pagin_pos_by_url[e]
            },
            clean_url_pagin: function(e) {
                return pagin_pos = this.get_pagin_pos(e), pagin_pos && (e = e.substring(0, pagin_pos)), e
            },
            get_stored_pathname: function(e, t) {
                var n = document.createElement("a");
                n.href = e;
                var i = n.search;
                i && "?" === (i = i.replace(/&?id=\d+/, "")) && (i = "");
                var o = n.origin;
                if (/MSIE|Trident/i.test(window.navigator.userAgent)) {
                    var s = n.href.split("/");
                    s = s.filter(function(e) {
                        return "" != e
                    }), o = s[0] + "//" + s[1]
                }
                if (o === window.location.origin) {
                    return ("/" !== n.pathname && "/" === n.pathname.substring(-1) ? n.pathname.toLowerCase().substring(0, n.pathname.length - 1) : n.pathname.toLowerCase()) + (!i.length || t ? "" : i)
                }
                return o.toLowerCase() + ("/" === n.pathname && "/" !== e.substring(-1) ? "" : n.pathname.toLowerCase())
            },
            clean_url_for_comparison: function(e, t, n) {
                t = !!t, n = !!n;
                var i = (t ? "y" : "n") + (n ? "y" : "n") + "-" + e;
                if ("string" == typeof this.cleaned_comp_urls[i]) return this.cleaned_comp_urls[i];
                if (e = this.clean_url_pagin(this.get_stored_pathname(e, !0)), "/" === e.substring(-1) && (e = e.substring(0, e.length - 1)), "" === e) return this.cleaned_comp_urls[i] = "/", "/";
                if (!t && !n || "/gay" === e || "/shemale" === e) return this.cleaned_comp_urls[i] = e, e;
                var o = this.get_url_filter_params_escaped();
                for (var s in o)
                    if (!(!n && -1 !== this.main_cats.indexOf(o[s]) || !t && n && -1 === this.main_cats.indexOf(o[s]))) {
                        var a = new RegExp("(((/" + o[s] + ")/.+)|(/" + o[s] + "/?))$"),
                            r = a.exec(e);
                        if (r && r.length > 0)
                            if ("string" == typeof r[3]) {
                                var d = e.indexOf(r[3]);
                                e = e.substring(0, d) + e.substring(d + r[3].length)
                            } else "string" == typeof r[4] && (e = e.substring(0, e.indexOf(r[4])))
                    } return this.cleaned_comp_urls[i] = e, e
            },
            is_same_page: function(e, t, n, i) {
                return e === t || (this.is_search_page(e) && (e = e.replace("%20", "+")), this.is_search_page(t) && (t = t.replace("%20", "+")), n = !!n, i = !!i, search_filter_key = "cp" + (n ? "y" : "n") + "csf" + (i ? "y" : "n"), "undefined" != typeof this.is_same_page_cache[e] && "undefined" != typeof this.is_same_page_cache[e][t] && "undefined" != typeof this.is_same_page_cache[e][t][search_filter_key] ? this.is_same_page_cache[e][t][search_filter_key] : "undefined" != typeof this.is_same_page_cache[t] && "undefined" != typeof this.is_same_page_cache[t][e] && "undefined" != typeof this.is_same_page_cache[t][e][search_filter_key] ? this.is_same_page_cache[t][e][search_filter_key] : ("undefined" == typeof this.is_same_page_cache[e] && (this.is_same_page_cache[e] = {}), "undefined" == typeof this.is_same_page_cache[e][t] && (this.is_same_page_cache[e][t] = {}), this.is_search_page(e) ? this.is_search_page(t) ? (p_url = this.get_search_params(e), p_url2 = this.get_search_params(t), this.is_same_page_cache[e][t][search_filter_key] = p_url === p_url2 || p_url.query === p_url2.query && (!i || p_url.search_filters === p_url2.search_filters && (!n || p_url.pagin === p_url2.pagin))) : this.is_same_page_cache[e][t][search_filter_key] = !1 : this.clean_url_for_comparison(e, !i, !i) !== this.clean_url_for_comparison(t, !i, !i) || n && this.get_page(e) !== this.get_page(t) ? this.is_same_page_cache[e][t][search_filter_key] = !1 : this.is_same_page_cache[e][t][search_filter_key] = !0, this.is_same_page_cache[e][t][search_filter_key]))
            },
            get_get_main_cat: function() {
                return "main" === xv.conf.data.action ? xv.conf.dyn.pagefilter : xv.conf.dyn.user_main_cat
            },
            get_set_main_cat: function() {
                return xv.conf.dyn.pagefilter
            },
            get_history: function(e) {
                "string" != typeof e && (e = this.get_get_main_cat());
                var t = this.get_save("history", "XNXX_cats_history_1") || {};
                if ("full_save" === e) return t;
                if ("undefined" == typeof t[e]) return [];
                for (var n in t[e]) t[e][n].url = this.get_stored_pathname(t[e][n].url);
                return t[e]
            },
            add_to_history: function(e, t, n, i) {
                if (this.is_history_disabled()) return !1;
                t = this.get_stored_pathname(t), "string" != typeof n && (n = this.get_set_main_cat());
                var o = this.get_history(n);
                0 === o.length && this.get_stored_order("order-top-asc");
                var s = !1,
                    a = new Date,
                    r = a.getTime();
                e = xv.utils.escape(xv.utils.unescape(e)), e = e.slice(0, 1).toUpperCase() + e.slice(1);
                for (var d in o) o[d].url === t && (r - o[d].timestamp > 1e4 && o[d].count++, o[d].timestamp = r, s = !0);
                if (!s) {
                    var l = {
                        count: 1,
                        timestamp: r,
                        label: e,
                        url: t
                    };
                    "string" != typeof i || "model" !== i && "channel" !== i || (l.page_type = i), o.push(l)
                }
                var c = this.get_history("full_save");
                c[n] = o, this.save("history", c, "XNXX_cats_history_1")
            },
            write_html_list: function(e, t) {
                var n = "";
                for (var i in e)
                    if (!("/videos-i-like" === e[i].url && 0 === xv.cats.iVideosILikeLength || "/my-commented-videos" === e[i].url && 0 === xv.cats.iVideosCommentedLength)) {
                        var o = null;
                        "string" == typeof e[i].page_type && ("model" === e[i].page_type ? o = "star-full" : "channel" === e[i].page_type && (o = "video-camera")), null === o && e[i].custom && (o = "search"), n += "<li" + (e[i].count ? ' class="in-history"' : "") + '><a href="' + e[i].url + '"' + (e[i].sAClass ? " class='" + e[i].sAClass + "'" : "") + (e[i].bTargetBlank ? " target='_blank'" : "") + ' title="' + e[i].cleanLabel + '">' + (null !== o ? '<span class="icon-f icf-' + o + '"></span> ' : "") + e[i].label + "</a></li>"
                    } t.innerHTML = n
            },
            get_stored_order: function(e, t) {
                stored_order = this.get_save("order", "XNXX_cats_history_1"), t = "boolean" != typeof t || t;
                var n = e || stored_order || "order-top-asc";
                return e && t && this.save("order", n, "XNXX_cats_history_1"), n
            },
            order_list: function(n, i, o) {
                switch (order = this.get_stored_order(i, o), order) {
                    case "order-az-asc":
                        e ? n.sort(t ? r : a) : n.sort();
                        break;
                    case "order-az-desc":
                        e ? n.sort(t ? l : d) : n.sort();
                        break;
                    case "order-top-asc":
                    default:
                        n.sort(c)
                }
                return n
            },
            can_use_save: function() {
                return "object" == typeof JSON
            },
            save: function(e, t, n) {
                if (!this.can_use_save()) return !1;
                window.xv.storage.set(e, t, n)
            },
            get_save: function(e, t) {
                return !!this.can_use_save() && window.xv.storage.get(e, t)
            },
            del_save: function(e, t) {
                if (!this.can_use_save()) return !1;
                window.xv.storage.remove(e, t)
            },
            olazyThumbBlockToLoad: {},
            olazyThumbBlockImageLoad: {},
            olazyThumbBlockToRotate: {},
            iLazyLoadScrollMargin: !1,
            setThumbBlockImage: function(e) {
                var t = new Image,
                    n = this;
                t.onload = function() {
                    document.getElementById("pic_" + e.sId).src = this.src, setTimeout(function() {
                        n.lazyLoadThumbBlockEnd(e)
                    }, 100)
                }, t.src = xv.thumbs.replaceThumbUrl(e.sSrc, e.sCdn)
            },
            lazyLoadThumbBlockEnd: function(e) {
                if ("undefined" == typeof xv.thumbs_rotator || "function" != typeof xv.thumbs_rotator.init) return void(this.olazyThumbBlockToRotate[e.sId] = e);
                xv.thumbs_rotator.init(e.$thumbObj)
            },
            loadThumbBlockToRotate: function() {
                if (0 !== this.olazyThumbBlockToRotate.length)
                    for (var e in this.olazyThumbBlockToRotate) this.lazyLoadThumbBlockEnd(this.olazyThumbBlockToRotate[e]), delete this.olazyThumbBlockToRotate[e]
            },
            lazyLoadList: function() {
                for (var e in this.olazyThumbBlockToLoad) {
                    var t = this.olazyThumbBlockImageLoad[e];
                    if ("undefined" == typeof t.$thumbObj) {
                        if (t.$thumbObj = document.getElementById(e), !t.$thumbObj) {
                            delete this.olazyThumbBlockToLoad[e];
                            continue
                        }
                        this.olazyThumbBlockImageLoad[e].$thumbObj = t.$thumbObj
                    }!1 === this.iLazyLoadScrollMargin && (this.iLazyLoadScrollMargin = "undefined" != typeof t.$thumbObj.offsetHeight ? t.$thumbObj.offsetHeight : 600), xv.dom.isElementInView(t.$thumbObj, !1, {
                        scroll_marge: this.iLazyLoadScrollMargin
                    }) && ("searchCover" === t.sType || "model" === t.sType || "channel" === t.sType ? this.loadThumbBlockImage(t) : this.setThumbBlockImage(t), delete this.olazyThumbBlockToLoad[e])
                }
            },
            loadThumbBlockImage: function(e) {
                if ("undefined" != typeof e.sSrc) return void this.setThumbBlockImage(e);
                var t = this.get_save("imgs_src", "XNXX_cats_custom_thumbs_1") || {},
                    n = new Date,
                    i = n.getTime();
                if ("undefined" != typeof t[e.sUrl] && i - t[e.sUrl].timestamp < 3456e5) {
                    if (!1 === t[e.sUrl].src) document.getElementById(e.sId).remove();
                    else if ("undefined" != typeof t[e.sUrl].cdn) return e.sSrc = t[e.sUrl].src, e.sCdn = t[e.sUrl].cdn, void this.setThumbBlockImage(e);
                    if (i - t[e.sUrl].timestamp < 864e5) return
                }
                var o = this,
                    s = xv.utils.createRequestObject();
                s.open("POST", e.sUrl, !0), s.withCredentials = !0, s.responseType = "json", s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.onreadystatechange = function() {
                    if (4 == s.readyState && 200 == s.status && s.response) {
                        var t = o.get_save("imgs_src", "XNXX_cats_custom_thumbs_1") || {},
                            n = new Date,
                            i = n.getTime();
                        s.response.thumb ? (t[e.sUrl] = {
                            src: s.response.thumb,
                            cdn: s.response.cdn,
                            timestamp: i
                        }, o.save("imgs_src", t, "XNXX_cats_custom_thumbs_1"), e.sSrc = t[e.sUrl].src, e.sCdn = t[e.sUrl].cdn, o.setThumbBlockImage(e)) : !1 === s.response.thumb && (t[e.sUrl] = {
                            src: !1,
                            timestamp: i
                        }, o.save("imgs_src", t, "XNXX_cats_custom_thumbs_1"), document.getElementById(e.sId).remove())
                    }
                }, s.send()
            },
            write_thumb_block_list: function(e, t) {
                var n, i, o = "",
                    s = this.get_all(),
                    a = this.order_list(s, "order-top-asc", !1),
                    r = {},
                    d = !1,
                    l = 0,
                    c = 0;
                if (xv.conf.dyn.nhad) {
                    var u = !0,
                        p = Math.round(s.length / 3),
                        f = "",
                        h = xv.i18n.__("thumb_ad.premium_slogan", {
                            "%nb_videos%": xv.conf.dyn.nhad.nb_premium_vids,
                            "%def%": xv.conf.dyn.nhad.high_deh
                        }, null, "%nb_videos% videos / %def% / No Ads");
                    switch (xv.conf.dyn.nhad.with_price && (h = xv.i18n.__("thumb_ad.premium_slogan_price", {
                            "%nb_videos%": xv.conf.dyn.nhad.nb_premium_vids,
                            "%def%": xv.conf.dyn.nhad.high_deh,
                            "%price%": xv.conf.dyn.nhad.price
                        }, null, " %nb_videos% videos / %def% / No Ads for just %price%")), xv.conf.dyn.nhad.mode) {
                        case 1:
                            f = "v1";
                            break;
                        case 2:
                            f = "v2"
                    }
                    var m = '<div class="thumb-block thumb-ad-gold ' + f + '"><div class="thumb-inside"><div class="thumb"><a href="' + xv.conf.dyn.nhad.url + '"><div class="thumb-ad-content"><p class="thumb-ad-logo">' + xv.conf.dyn.nhad.sitename + '</p><p class="slogan">' + h + '</p><p class="nb-uploads">' + xv.i18n.__("thumb_ad.premium_txt", {
                        "%nb_min%": xv.conf.dyn.nhad.nb_premium_by_day_min,
                        "%nb_max%": xv.conf.dyn.nhad.nb_premium_by_day_max
                    }, null, "+ " + xv.conf.dyn.nhad.nb_premium_by_day_min + "-" + xv.conf.dyn.nhad.nb_premium_by_day_max + " new videos / day") + "</p></div></a></div></div></div>"
                }
                for (i = 0; i < e.length; i++) e[i].comp_url = this.clean_url_for_comparison(e[i].u);
                for (n = 0; n < a.length; n++) {
                    l++;
                    var g = "tb_cat_" + l,
                        v = a[n];
                    for (v.comp_url = this.clean_url_for_comparison(v.url), i = 0; i < e.length; i++) {
                        var _ = e[i];
                        if (v.comp_url === _.comp_url) {
                            c++, _.tf = v.label, this.olazyThumbBlockImageLoad[g] = {
                                sId: g,
                                sType: "default",
                                sSrc: _.i,
                                sCdn: _.c
                            }, this.olazyThumbBlockToLoad[g] = 1, _.i = xv.conf.domains["static"] + "/v3/img/skins/xnxx/home-cat/blank169ll.png", u && p === c && (o += m), o += xv.thumbs.get_thumb_block_html(e[i], "categorie", {
                                forced_id: g,
                                forced_img_id: "pic_" + g,
                                no_rotate: !0
                            }).html, r[v.url] = v.label;
                            break
                        }
                    }
                    if ("string" != typeof v.page_type || "model" !== v.page_type && "channel" !== v.page_type) !0 === v.custom && this.is_search_page(v.url) && (d = this.get_search_params(v.url), o += xv.thumbs.get_thumb_block_html({
                        id: g,
                        u: v.url,
                        tf: '<span class="icon-f icf-search"></span> ' + v.label,
                        i: xv.conf.domains["static"] + "/v3/img/skins/xnxx/home-cat/search169ll.png",
                        no_rotate: !0
                    }, "categorie", {
                        forced_id: g,
                        forced_img_id: "pic_" + g,
                        forced_data_id: !1,
                        no_rotate: !0
                    }).html, !1 !== d.query_pos && (this.olazyThumbBlockImageLoad[g] = {
                        sId: g,
                        sType: "searchCover",
                        sUrl: v.url.substring(0, d.query_pos) + "/cover" + v.url.substring(d.query_pos)
                    }, this.olazyThumbBlockToLoad[g] = 1), r[v.url] = v.label);
                    else {
                        var b = "model" === v.page_type ? "star-full" : "video-camera";
                        this.olazyThumbBlockImageLoad[g] = {
                            sId: g,
                            sType: v.page_type,
                            sUrl: "/profiles-picture/" + v.url.substring(("model" === v.page_type ? "pornstar" : "porn-maker").length + 2) + ".json"
                        }, this.olazyThumbBlockToLoad[g] = 1, o += xv.thumbs.get_thumb_block_html({
                            id: g,
                            u: v.url,
                            tf: '<span class="icon-f icf-' + b + '"></span> ' + v.label,
                            i: xv.conf.domains["static"] + "/v3/img/skins/xnxx/home-cat/search169ll.png",
                            no_rotate: !0
                        }, "categorie", {
                            forced_id: g,
                            forced_img_id: "pic_" + g,
                            forced_data_id: !1,
                            no_rotate: !0
                        }).html, r[v.url] = v.label
                    }
                }
                var y = document.getElementById(t);
                y.innerHTML = o;
                var x = y.getElementsByTagName("A");
                for (var n in x) ! function() {
                    var e = x[n];
                    "object" == typeof e && xv.dom.addEventListener(e, "click", function(t) {
                        if (t.preventDefault ? t.preventDefault() : t.returnValue = !1, "A" === e.tagName) {
                            var n = e.getAttribute("href");
                            r[n] && xv.cats.add_to_history(r[n], n), xv.conf.dyn.is_premium || -1 === n.indexOf(xv.conf.domains.premium) || "function" != typeof require ? window.location.href = n : require(["skins/common/mozaique/premium_redirect_alert"], function(e) {
                                var t = function() {
                                    document.location.href = n
                                };
                                e.displayPopup("exit", null, t)
                            })
                        }
                    })
                }();
                this.lazyLoadList();
                var w = this;
                xv.dom.addEventListener(window, "load", function() {
                    w.lazyLoadList(), w.loadThumbBlockToRotate()
                }), xv.dom.addEventListener(window, "scroll", function() {
                    w.lazyLoadList()
                })
            }
        }
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
                        var f = !1,
                            h = !0;
                        "footer" === this.type ? f = !0 : "square" !== this.type && "playersiderectangle" !== this.type && ("mobilerectangle" !== this.type || this.area_tag && -1 !== this.area_tag.indexOf("footer") && "hometopfooter" !== this.area_tag) || (h = !1);
                        for (var m = 0; m < this.containers.length; m++) {
                            var g = this.containers[m].parentNode;
                            if (g) {
                                if (h && ("footer" !== this.type || this.containers[m] !== this.mobile_container)) {
                                    var v = xv.dom.getNextSibling(this.containers[m]);
                                    v && g.removeChild(v)
                                }
                                if (f) {
                                    for (var _ = xv.dom.getChildren(this.containers[m], !1), b = 0; b < _.length; b++) this.containers[m].removeChild(_[b]);
                                    this.containers[m].style.border = "none", this.containers[m].style.margin = "0", this.containers[m].style.padding = "0", this.containers[m].style.heigth = "auto"
                                } else g.removeChild(this.containers[m])
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
                for (var f = "playersiderectangle" === this.type ? this.ads_nodes.length : this.ads_nodes.length - 1, i = 0; i <= f; i++) {
                    this.related_ad++;
                    var a = document.createElement("div");
                    a.className = "thumb-block video-ad video-ad-support-" + xv.sda.manager.device_type;
                    var h = d[e * this.related_ad - 1 - this.related_ad];
                    if (!h) return void(e > 0 && function() {
                        t.resizeRelatedAd()
                    }());
                    var m = h.parentNode;
                    h === m.lastChild ? m.appendChild(a) : m.insertBefore(a, h.nextSibling);
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
                        var n = new xv.sda.cappingManager,
                            i = "x" + (Math.random() + 1).toString(36).substring(5) + e.zoneId,
                            o = function(e) {
                                e ? (window[i] = function() {
                                    return xv.log.debug("Interstitial --- custom capping verification : should it be triggered", !0), !0
                                }, xv.log.debug("Interstitial --- SetShouldFire", !0, "SHOULD FIRE")) : (window[i] = function() {
                                    return xv.log.debug("Interstitial --- custom capping verification : should it be triggered", !1), !1
                                }, xv.log.debug("Interstitial --- SetShouldFire", !1, "SHOULDN'T FIRE anymore"))
                            };
                        n.callCappingCheck(xv.sda.cappingManager.ZONE.INTERSTITIAL, function() {
                            n.setWindowFocusVerif(xv.sda.cappingManager.ZONE.INTERSTITIAL, e, function() {
                                o(!1)
                            }, function() {});
                            var t = {
                                3954650: "eas6a97888e33",
                                3959997: "eas6a97888e35"
                            };
                            e.execExoClickIns();
                            var s = e.getExoClickIns();
                            s.className = t[e.zoneId], s.setAttribute("data-should-fire", i), addEventListener("load", function() {
                                e.container = document.body, e.appendExoClickIns(s)
                            }), document.addEventListener("creativeDisplayed-" + e.zoneId, function(e) {
                                xv.log.debug_("%c Interstitial --- creativeDisplayed event", "color:yellow;", e.detail), html5player && html5player.pause(), o(!1), n.callCappingRegister(xv.sda.cappingManager.ZONE.INTERSTITIAL)
                            }), o(!0), e.bInterstitialEventsSet = !0
                        }, function() {
                            o(!1)
                        })
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
        var c = function() {};
        c.ZONE = {
            POP: "p",
            INTERSTITIAL: "i"
        }, c.prototype = {
            callCappingUrl: function(e, t) {
                var n = xv.utils.createRequestObject();
                n.open("GET", e, !0), n.onreadystatechange = function() {
                    if (4 === this.readyState && 200 === this.status) try {
                        var n = JSON.parse(this.responseText);
                        if (!n.result) return void xv.log.error(e, " !result");
                        if (!n.data) return void xv.log.error(e, " !data");
                        t(n.data)
                    } catch (i) {
                        console.error(i)
                    }
                }, n.send()
            },
            callCappingCheck: function(e, t, n) {
                if (e !== c.ZONE.POP && e !== c.ZONE.INTERSTITIAL) return void xv.log.debug_("cappingManager -- capping check --- wrong ZONE :", e);
                var i = "/capping-manager/" + e + "/c";
                this.callCappingUrl(i, function(o) {
                    if (xv.log.debug_("cappingManager -- capping check --- AJAX", {
                            sZone: e,
                            sUrl: i,
                            allow_display: o.allow_display
                        }), !o.allow_display) return void("function" == typeof n && n());
                    "function" == typeof t && t()
                })
            },
            callCappingRegister: function(e, t) {
                if (e !== c.ZONE.POP && e !== c.ZONE.INTERSTITIAL) return void xv.log.debug_("cappingManager -- capping register --- wrong ZONE :", e);
                var n = "/capping-manager/" + e + "/r";
                xv.log.debug_("cappingManager -- capping register", e, n), this.callCappingUrl(n, function(e) {
                    xv.log.debug_("cappingManager -- capping register --- AJAX", {
                        sUrl: n,
                        ok: e.ok
                    }), "function" == typeof t && t()
                })
            },
            setWindowFocusVerif: function(e, t, n, i) {
                if (e !== c.ZONE.POP && e !== c.ZONE.INTERSTITIAL) return void xv.log.debug_("cappingManager -- set window focus event --- wrong ZONE :", e);
                var o = this;
                t.fnWindowFocusVerif = function() {
                    o.callCappingCheck(c.ZONE.INTERSTITIAL, function() {
                        "function" == typeof i && i()
                    }, function() {
                        n(), window.removeEventListener("focus", t.fnWindowFocusVerif)
                    })
                }, xv.log.debug_("cappingManager -- set window focus event :", e), window.addEventListener("focus", t.fnWindowFocusVerif)
            }
        };
        var u = function() {
                !0 !== xv.sda.bFooterAdsDisabled && (xv.log.debug("Disabling footer ads"), xv.sda.bFooterAdsDisabled = !0)
            },
            p = function() {
                !1 !== xv.sda.bFooterAdsDisabled && (xv.log.debug("Enabling footer ads"), xv.sda.bFooterAdsDisabled = !1, xv.sda.onEnableFooterAds.forEach(function(e) {
                    e()
                }), xv.sda.onEnableFooterAds = [])
            };
        "object" != typeof xv.sda && (xv.sda = {}), xv.sda.cappingManager = c, xv.sda.banner = o, xv.sda["native"] = d, xv.sda.footer = a, xv.sda.mobilerectangle = r, xv.sda.interstitial = l, xv.sda.onEnableFooterAds = [], xv.sda.disableFooterAds = u, xv.sda.enableFooterAds = p
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
                        if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) return !/OS [1-9]_/.test(navigator.userAgent) && (this.mp4_support = !0);
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
    }(),
    function() {
        if (!(xv && xv.conf && xv.conf.dyn.is_premium) || xv.conf.dyn.login_info.has_member_area || "/red" === window.location.pathname.substring(0, 4) || "profile" === xv.conf.data.action || "video" === xv.conf.data.action || "category" === xv.conf.data.action || "manage_login_create" === xv.conf.data.action) {
            var e, t, n, i, o = 0,
                s = !1,
                a = !1,
                r = !1,
                d = !1,
                l = !1,
                c = !1,
                u = !1,
                p = !1,
                f = !1,
                h = !1,
                m = !1,
                g = !1,
                v = !1,
                _ = function(a, _) {
                    s = !1, o = (new Date).getTime();
                    var b = xv.dom.getViewportWidth();
                    if (i !== b || !0 === _) {
                        if (i = b, e = i < 768, t = e || g, "default" === xv.conf.sitename) {
                            if (!1 === d || !1 === p || !1 === u) {
                                if (v = document.getElementById("dsktp-title-comment"), !(d = document.getElementById("site-logo"))) return;
                                u = parseInt(d.getAttribute("width")), p = parseInt(d.getAttribute("height")), c = document.getElementById("site-logo-red"), l = document.getElementById("site-logo-link"), r = document.getElementById("header-mobile-right")
                            }
                            var y = !1,
                                x = !1,
                                w = !1,
                                k = !1;
                            if (r) {
                                var C = parseInt(r.offsetWidth),
                                    E = 80 + C + 0,
                                    I = E + u + (c ? 48 : 0);
                                e && (l.style.maxWidth = "calc( 100% - " + E + "px )"), w = i < I
                            } else w = i < u / .28;
                            if (w) {
                                if (m = !0, r) {
                                    x = i - E;
                                    var T = u;
                                    c ? (T += 48, k = Math.floor(x * (48 / T)), x = Math.floor(x * (u / T))) : x = Math.floor(x * (u / T))
                                } else x = Math.ceil(.28 * i);
                                y = Math.ceil(p * x / u * 100) / 100
                            } else f === u && h === p || (x = u, y = p, c && (k = 48));
                            !0 === m && !1 !== x && !1 !== y && (f = x > 0 ? x : 0, h = y > 0 ? y : 0, d.setAttribute("width", f), d.setAttribute("height", h), c && !1 !== k && (c.style.fontSize = k + "px"))
                        }!1 === a || "boolean" == typeof n && n === t || (n = t, "function" == typeof xv.header.update_menu_classs && xv.header.update_menu_classs())
                    }
                };
            "undefined" == typeof xv && (xv = {}), "undefined" == typeof xv.header && (xv.header = {}), "undefined" == typeof xv.header.$nav && (xv.header.$nav = !1, xv.header.oNavVars = {
                bMenuToggle: !1,
                $mainCatBtn: !1
            }), xv.header.is_mobile = function(t) {
                return !1 !== t && _(!1), e
            }, xv.header.is_mobile_menu = function(e) {
                return !1 !== e && _(!1), t
            }, xv.header.set_force_mobile_menu = function(e) {
                "boolean" == typeof e && g !== e && (g = e, _(!0, !0))
            }, xv.header.window_resize = function() {
                if (!a && !s) {
                    a = !0;
                    (new Date).getTime() - o > 250 && _(), s = setTimeout(function() {
                        _(!0, !0), a = !1
                    }, 1e3)
                }
            }, window.window_resize_callback = _
        }
    }(),
    function() {
        xv.conf && xv.conf.dyn.premium && (xv.premium = {
            to_fade_in_up: [],
            hide_to_fadeInUp_in: function(e) {
                var t = document.getElementById(e),
                    n = xv.dom.getChildrenRecursive(t);
                for (var i in n) n[i].getAttribute && "fadeInUp" === n[i].getAttribute("data-animation") && (xv.dom.addClass(n[i], "to-fadeInUp"), this.to_fade_in_up.push({
                    elem: n[i],
                    position_top: !1,
                    height: !1,
                    visible: !1
                }))
            }
        })
    }(),
    function() {
        var e = function(e) {
            this.type = e, this.list = this.get_saved_list(), this.order_list()
        };
        e.prototype = {
            type: !1,
            container: !1,
            list: [],
            add_to_list: function(e) {
                return "object" != typeof e && (e = xv.history.get_elem_obj(this.type)), "object" == typeof e && (!(e_in_list = this.elem_in_list(e, !0)) && void this.list.push(e))
            },
            elem_in_list: function(e, t) {
                var n = xv.history.type[this.type].elem_comparison_criteria;
                for (var i in this.list) {
                    var o = !0;
                    for (var s in n) this.list[i][n[s]] !== e[n[s]] && (o = !1);
                    if (!0 === o) return t && (this.list[i].timestamp = xv.history.get_timestamp(), this.list[i].count++), !0
                }
                return !1
            },
            save_list: function() {
                return this.save("history", this.list)
            },
            get_saved_list: function() {
                return this.get_save("history") || []
            },
            order_list: function(e) {
                switch (order = this.get_stored_order(e), order) {
                    case "order-date-desc":
                    default:
                        this.list.sort(function(e, t) {
                            var n = parseInt(e.timestamp) || 0,
                                i = parseInt(t.timestamp) || 0;
                            return n === i ? 0 : n < i ? 1 : -1
                        })
                }
            },
            get_stored_order: function(e) {
                stored_order = this.get_save("order");
                var t = e || stored_order || "order-date-desc";
                return e && this.save("order", t), t
            },
            save: function(e, t) {
                if (!xv.history.can_use_save()) return !1;
                xv.storage.set(this.type + "-" + e, t, xv.history.storage_namespace)
            },
            get_save: function(e) {
                return !!xv.history.can_use_save() && xv.storage.get(this.type + "-" + e, xv.history.storage_namespace)
            },
            del_save: function(e) {
                if (!xv.history.can_use_save()) return !1;
                xv.storage.remove(this.type + "-" + e, xv.history.storage_namespace)
            },
            clear_history: function() {
                return confirm(xv.utils.unescape(xv.i18n.__("categories.confirm_clear_history", null, null, "Are you sure you want to clear your navigation history ?"))) ? (this.del_save("history"), !0) : 0 === xv.history.get_history().length
            }
        }, xv.history = {
            one_history: e,
            storage_namespace: (xv.conf.sitename || "xv") + "_history_181113",
            initiated_histories: {},
            type: {
                "video-xv": {
                    id: "videos-xv-h",
                    get_elem_obj: function() {
                        return {
                            id_video: xv.conf.data.id_video,
                            count: 1,
                            name: xv.conf.dyn.video_title,
                            url: xv.history.get_cleared_pathname(),
                            timestamp: xv.history.get_timestamp()
                        }
                    },
                    elem_comparison_criteria: ["id_video"]
                }
            },
            get_timestamp: function() {
                return (new Date).getTime()
            },
            get_cleared_pathname: function(e) {
                var t = document.createElement("a");
                return t.href = "string" == typeof e ? e : window.location.href, t.pathname.toLowerCase()
            },
            init: function(e) {
                if ("undefined" == typeof this.type[e]) return !1;
                "undefined" == typeof this.initiated_histories[e] && (this.initiated_histories[e] = []);
                for (var t in this.initiated_histories[e]) return this.initiated_histories[e][t];
                var n = new this.one_history(e);
                return this.initiated_histories[e].push(n), n
            },
            add_page_to_list_and_save: function(e) {
                var t = this.init(e);
                t.add_to_list(), t.save_list()
            },
            get_elem_obj: function(e) {
                return "undefined" != typeof this.type[e] && this.type[e].get_elem_obj()
            },
            can_use_save: function() {
                return "object" == typeof JSON
            }
        }
    }();
