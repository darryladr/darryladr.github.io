// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"clu1":[function(require,module,exports) {

},{"./../font/Calibre-SemiBold.woff":[["Calibre-SemiBold.21cc3335.woff","Mg7X"],"Mg7X"],"./../font/Calibre-SemiBold.ttf":[["Calibre-SemiBold.2c27f793.ttf","rJ82"],"rJ82"],"./../font/Calibre-Semibold.svg":[["Calibre-Semibold.320db03b.svg","u7ET"],"u7ET"],"./../font/Calibre-Medium.woff":[["Calibre-Medium.bb31c6b1.woff","t3eK"],"t3eK"],"./../font/Calibre-Medium.ttf":[["Calibre-Medium.cb484263.ttf","LVc2"],"LVc2"],"./../font/Calibre-Regular.woff":[["Calibre-Regular.0e30637c.woff","ktK6"],"ktK6"],"./../font/Calibre-Regular.ttf":[["Calibre-Regular.ad23bcd8.ttf","GVeT"],"GVeT"],"./../img/svg/home-bg.svg":[["home-bg.30b2b78e.svg","LI0O"],"LI0O"],"./../img/svg/home-bg-mobile.svg":[["home-bg-mobile.e735f851.svg","VvQ2"],"VvQ2"]}],"Focm":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");

// preloader
var preloaderTL = gsap.timeline();
preloaderTL.to('#logo', {
  yPercent: -20,
  opacity: 0,
  delay: 4
}).to('.preloader', {
  opacity: 0,
  duration: 1
}).to('.preloader', {
  yPercent: -100
}).add(function () {
  $(' html, body').css({
    overflow: 'auto'
  });
}, '>-1.5'); // open all social links in new tab

var socialLinks = document.querySelectorAll('.social-links--box a');
socialLinks.forEach(function (link) {
  link.target = '_blank';
}); // custom cursor
// const cursor = document.querySelector('.cursor');
// window.onmousemove = (e) => {
// 	cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px; z-index: 2;`);
// };
// navigation

var tl = gsap.timeline({
  paused: true,
  reversed: true
});
tl.to('.box', {
  height: '100vh',
  duration: 0.5,
  transformOrigin: 'bottom',
  stagger: 0.3
});
tl.to('.nav-logo', {
  opacity: '1'
});
tl.to('.nav-main__content', {
  opacity: '1',
  visibility: 'visible',
  yPercent: -5,
  duration: 0.5,
  transformOrigin: 'bottom',
  stagger: 0.3
});
var navIcon = document.querySelector('.nav-icon');

navIcon.onclick = function () {
  if (tl.reversed()) {
    this.classList.add('nav-anim');
    tl.play();
    document.body.classList.add('noScroll');
  } else {
    this.classList.remove('nav-anim');
    tl.reverse();
    document.body.classList.remove('noScroll');
  }
};

var allLinks = document.querySelectorAll('.list__item a');
allLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    document.body.classList.remove('noScroll');
    tl.reverse();
    navIcon.classList.remove('nav-anim');
  });
});
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=src.f4c3f691.js.map