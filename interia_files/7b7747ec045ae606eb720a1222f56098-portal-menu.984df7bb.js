(window.webpackJsonp=window.webpackJsonp||[]).push([["portal-menu"],{"8Foj":function(e,n,t){t("R5XZ"),function(e,n){var t={portalMenuTrigger:n.querySelector(".hamburger"),menuContainer:null},o="is-opened",a="is-initialized",i=!1,r=!1;function s(){""!==e.location.hash&&"#"!==e.location.hash||(t.menuContainer.classList.remove(o),i=!1,e.removeEventListener("hashchange",s))}function u(){"#menu"===e.location.hash&&history.back()}var c={toggleShow:function(n){n&&(n.preventDefault(),n.stopPropagation()),i?(history.back(),t.menuContainer.classList.remove(o)):(e.history.pushState({},"default-main","#"),e.history.replaceState({},"menu","#menu"),e.addEventListener("hashchange",s),r?(t.menuContainer.querySelector(".portal-menu-ul").scrollTop=0,t.menuContainer.classList.add(o)):(t.menuContainer.classList.add(a),r=!0,setTimeout((function(){t.menuContainer.classList.add(o)}),0))),i=!i},init:function(){t.menuContainer=n.querySelector("#header_side_menu");var o=n.querySelector(".portal-menu-close");o&&o.addEventListener("click",c.toggleShow),t.portalMenuTrigger&&t.portalMenuTrigger.addEventListener("click",c.toggleShow),e.addEventListener("popstate",u)}};c.init()}(window,document)}},[["8Foj","runtime","vendors"]]]);