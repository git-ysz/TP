// 原网址 http://caibaojian.com/simple-flexible.html
			// 可以外置flexible.min.js
			// 1rem=100px
			// 底部}(750, 750);
			// 第一个参数是设计稿的宽度，一般设计稿有640，或者是750，你可以根据实际调整
			// 第二个参数则是设置制作稿的最大宽度，超过750，则以750为最大限制。
			// 字体大小还是用px
			! function(e, t) {
				function n() {
					var n = l.getBoundingClientRect().width;
					t = t || 540, n > t && (n = t);
					var i = 100 * n / e;
					r.innerHTML = "html{font-size:" + i + "px;}"
				}
				var i, d = document,
					o = window,
					l = d.documentElement,
					r = document.createElement("style");
				if(l.firstElementChild) l.firstElementChild.appendChild(r);
				else {
					var a = d.createElement("div");
					a.appendChild(r), d.write(a.innerHTML), a = null
				}
				n(), o.addEventListener("resize", function() {
					clearTimeout(i), i = setTimeout(n, 100)
				}, !1), o.addEventListener("pageshow", function(e) {
					e.persisted && (clearTimeout(i), i = setTimeout(n, 100))
				}, !1), "complete" === d.readyState ? d.body.style.fontSize = "16px" : d.addEventListener("DOMContentLoaded", function(e) {
					d.body.style.fontSize = "16px"
				}, !1)
			}(750, 750);