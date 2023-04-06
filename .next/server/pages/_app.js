(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./components/UI/FormControl/FormControl.js


const FormControl = ({ title , type ="text" , className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `form-control my-10 border-b-[1px] border-white relative ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: type,
                className: "w-full h-100 bg-transparent outline-none text-white placeholder-transparent peer py-2",
                placeholder: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: "text-white    text-sm    absolute left-0 -top-[15px] transition-all    ease    peer-placeholder-shown:text-base    peer-placeholder-shown:top-2    peer-placeholder-shown:text-md peer-focus:-top-[15px] peer-focus:text-sm peer-focus:text-primary-100",
                children: title
            })
        ]
    });
};
/* harmony default export */ const FormControl_FormControl = (FormControl);

;// CONCATENATED MODULE: ./components/UI/FormControl/index.js


;// CONCATENATED MODULE: ./components/Login/Login.js




const Login = ({ showLogin , loginClickHandler  })=>{
    const closeClickHandler = ()=>{
        loginClickHandler(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `h-screen absolute flex top-0 z-[1000] w-[30%] transition-all ${showLogin ? "right-0" : "-right-[50%]"} duration-700 ease`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex h-full w-full backdrop-blur-[15px] flex-col justify-center items-center relative",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "btn w-[40px] h-[40px] rounded-full absolute top-2 left-2 group flex items-center justify-center",
                    onClick: closeClickHandler,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaTimes, {
                        className: "font-normal text-3xl text-white group-hover:text-primary-100 transition duration-500 ease"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "form-header mb-8 text-xl font-bold text-primary-100",
                    children: "Login"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    className: "min-w-[70%]",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(FormControl_FormControl, {
                            title: "Email",
                            type: "text",
                            className: "first:mt-0"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(FormControl_FormControl, {
                            title: "Password",
                            type: "password",
                            className: "mb-0"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-between mt-3",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "checkbox",
                                            id: "remember-me"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            className: "ml-1 text-sm text-white cursor-pointer font-thin",
                                            for: "remember-me",
                                            children: "Remember me"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "text-sm text-white cursor-pointer",
                                        children: "Forgot Password"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mt-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "w-full bg-primary-100 p-2 text-white rounded-[3px] shadow-lg cursor-pointer",
                                children: "Login"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "registration mt-3 text-sm text-white w-full flex justify-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Don't have an account?"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "ml-1 font-semibold",
                                    children: "Sign up"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Login_Login = (Login);

;// CONCATENATED MODULE: ./components/Login/index.js


;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
;// CONCATENATED MODULE: ./public/assets/images/logo-no-background.svg
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLogoNoBackground = function SvgLogoNoBackground(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 717.333,
    height: 457.333,
    viewBox: "0 0 538 343"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    fill: "current",
    stroke: "current",
    strokeWidth: 0.1,
    d: "M5.6 2.2c.5.8 10.8 17.6 22.9 37.2l22 35.8 83 61.4c74.6 55.3 83.2 61.9 84.8 65.6.9 2.2 1.6 4.2 1.5 4.4-.2.1-35.6-22-78.7-49.2-43-27.3-78.4-49.4-78.6-49.2-.2.2 9 14.3 20.3 31.4l20.6 31.2 38.6 18.3c85.7 40.9 86.3 41.2 87.3 44.2.5 1.6.7 3 .5 3.3-.3.2-27.4-10.4-60.3-23.6-32.9-13.2-60-23.8-60.2-23.6-.4.4 24 38.2 25.8 40.1.5.5 23.3 5.9 50.7 12 46.9 10.4 49.7 11.1 50.9 13.5 1 2.1 1 2.6-.1 2.8-.8.2-21.4-2.4-45.8-5.7-24.4-3.4-45.2-6.1-46.2-6.1-1.1 0 3.9 5.9 13.9 16.3l15.6 16.3 33.9-4c18.7-2.2 34.2-3.8 34.4-3.5.3.3.7 1.6.8 2.9.3 2.4 0 2.5-27.2 7.6-15.1 2.9-28.4 5.4-29.5 5.6-1.1.2 7.2 3.5 18.5 7.5l20.4 7.1 10.9-7.5c8.5-5.9 11.1-7.3 11.8-6.2.5.8.9 2 .9 2.7 0 1.1-8.1 11.1-27.6 34.2-1.2 1.4.3 1.4 13.9.3 8.4-.6 15.7-1.2 16.3-1.2.6-.1 1.8-2.6 2.8-5.7 1-3.1 2.1-5.2 2.6-4.8.5.5 3.4 7.1 6.5 14.6 3.2 7.6 6.1 13.8 6.4 13.8.4 0 3.3-6.3 6.5-14s6.2-14.3 6.7-14.5c.4-.3 1.5 1.9 2.3 4.9l1.6 5.3 4.7.6c2.7.4 10 .9 16.3 1.3 11.2.7 11.5.6 9.9-1.2-.9-1-7.4-8.9-14.6-17.4-11.2-13.3-12.9-15.8-12.2-17.8.5-1.2 1.1-2.2 1.5-2.2.3 0 5.3 3.3 11.1 7.4l10.6 7.4 20-6.9c11-3.8 20.2-7.1 20.4-7.2.1-.2-12.7-2.7-28.5-5.6-15.8-3-29-5.6-29.4-6-.4-.3-.5-1.6-.2-2.9.8-2.9.5-2.9 35.5 1.3 16.1 2 30.5 3.5 31.9 3.3 3.2-.4 34.3-31.8 31.5-31.8-1 0-21.4 2.7-45.5 6s-44.7 6-45.8 6c-1.9 0-2-.3-1.1-2.8.9-2.7 1.3-2.8 51.1-13.7l50.2-11.1 13.3-20.4c7.3-11.2 13.1-20.5 13-20.7-.2-.1-27.3 10.5-60.2 23.7-33 13.2-60.1 24-60.2 24-.2 0-.3-.6-.3-1.3.1-4.5 3-6 64-35.1l61.5-29.2 21.4-31.9c11.7-17.5 20.7-31.6 20-31.3-.8.3-36.3 22.6-78.9 49.6-42.6 26.9-77.6 48.9-77.7 48.8-.1-.1.3-1.9.9-4 1.1-3.4 7.8-8.6 84.7-65.7L489.5 75l15.8-25.7c8.6-14.2 18.9-30.9 22.7-37.1L535.1.8l-4.3 3.1c-2.4 1.7-58.3 42.8-124.3 91.4l-120 88.3.4 8.3.3 8.2-4.6 7c-2.5 3.8-4.9 6.9-5.3 6.9-.4 0-2-1.2-3.6-2.8l-3-2.7 2.7 4.7 2.7 4.7-2.6 12.3c-1.5 6.8-2.9 13-3.2 13.8-.5 1.4-6.1-21.3-6.2-25.3-.1-.9 1.1-3.6 2.5-6l2.7-4.2-3 2.7c-1.6 1.6-3.2 2.8-3.6 2.8-.4 0-2.7-3.1-5.2-6.8-4.1-6.1-4.5-7.4-4.5-12.7 0-3.3.1-7.1.2-8.4.3-2-14.8-13.4-121.2-91.8C-10.9-11 4.5.3 5.6 2.2z"
  })));
};
/* harmony default export */ const logo_no_background = (SvgLogoNoBackground);
;// CONCATENATED MODULE: ./components/UI/SocialIcons/SocialIcons.js



const icons = [
    {
        id: "facebook",
        icon: fa_namespaceObject.FaFacebook,
        url: ""
    },
    {
        id: "instagram",
        icon: fa_namespaceObject.FaInstagram,
        url: ""
    },
    {
        id: "youtube",
        icon: fa_namespaceObject.FaYoutube,
        url: ""
    },
    {
        id: "whatsapp",
        icon: fa_namespaceObject.FaWhatsapp,
        url: ""
    }
];
const SocialIcon = ({ SocialIcon  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: "flex items-center mr-8",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: SocialIcon.url,
            target: "_blank",
            children: /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon.icon, {
                className: "text-white font-bold h-[24px] w-[24px]"
            })
        })
    });
};
const SocialIcons = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-none z-[100] h-[40px] p-2.5 justify-center lg:justify-start h-full items-end",
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: "flex",
            children: icons.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(SocialIcon, {
                    SocialIcon: item
                }, item.id))
        })
    });
};
/* harmony default export */ const SocialIcons_SocialIcons = (SocialIcons);

;// CONCATENATED MODULE: ./components/UI/SocialIcons/index.js


;// CONCATENATED MODULE: ./components/Navbar/Navbar.js








const Navbar = ()=>{
    const [componentMounted, setComponentMounted] = (0,external_react_.useState)(false);
    const [showLogin, setShowLogin] = (0,external_react_.useState)(false);
    const loginClickHandler = (value)=>{
        setShowLogin(value);
    };
    const onloginClick = (e)=>{
        loginClickHandler(true);
    };
    (0,external_react_.useEffect)(()=>{
         false && 0;
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full h-[120px] z-[100] flex relative justify-between",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons_SocialIcons, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-end px-2.5 absolute h-full left-[50%] -translate-x-[50%] pb-2.5",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    className: "fill-primary-100",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(logo_no_background, {
                        className: "w-[120px] h-[80px]"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden md:block h-full px-2.5",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "h-full w-full p-2.5 flex items-end justify-end",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mr-8",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                className: "text-white font-bold uppercase",
                                children: "About"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mr-8 ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                className: "text-white font-bold uppercase",
                                children: "Blogs"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mr-8 ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/notes",
                                className: "text-white font-bold uppercase",
                                children: "Notes"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "last:mr-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-white font-bold uppercase",
                                onClick: onloginClick,
                                children: "Login"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "md:hidden flex items-center hover:cursor-pointer p-2.5",
                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaBars, {
                    size: "lg",
                    className: "text-white w-[40px] h-[40px]"
                })
            }),
            componentMounted && /*#__PURE__*/ (0,external_react_dom_namespaceObject.createPortal)(/*#__PURE__*/ jsx_runtime_.jsx(Login_Login, {
                showLogin: showLogin,
                loginClickHandler: loginClickHandler
            }), window.document.getElementById("__next"))
        ]
    });
};
/* harmony default export */ const Navbar_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Navbar/index.js


// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "container mx-auto flex-auto realtive lg:max-w-[90%] flex flex-col my-5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(464)));
module.exports = __webpack_exports__;

})();