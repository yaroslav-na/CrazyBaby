function e(e,t){return s=>{let n=[];for(let r in e){let i=e[r],a=t[r];i&&a&&n.push(s(i,a))}return n}}class t{#e;#t;#s;constructor(t,s,n){this.#e=t,this.#t=e(t,s),this.#s=n,this.#e.slideCount.innerText=this.#n(this.#s)}update(e){this.#e.currentSlide.innerText=this.#n(e),this.#t((t,s)=>{e===this.#s?t.classList.add(s):t.classList.remove(s)})}#n(e){return(e+1).toString().padStart(2,0)}}class s{#r;#i;constructor(e,t){this.#r=e,this.#i=t}update(e){let t=Math.min(e,this.#i.length-1),s=this.#i[t].offsetLeft-this.#i[0].offsetLeft,n=this.#r.scrollWidth-this.#r.clientWidth;this.#r.style.transform=`translateX(-${s<=n+.01*n?s:0}px)`}}class n{#a;#l;#o;#d;constructor(e,t,s){this.#a=s,this.#l=e,this.#o=e,this.#d=t}set value(e){this.#l=e<=this.#d&&e>=this.#o?e:this.#l,this.#u()}get value(){return this.#l}#u(){this.#a.forEach(e=>e.update(this.#l))}}class r{#c;#s;constructor(e,t){this.#c=e,this.#s=t}update(e){e===this.#s?this.#c.nextBtn.setAttribute("disabled",!0):this.#c.nextBtn.removeAttribute("disabled"),0===e?this.#c.prevBtn.setAttribute("disabled",!0):this.#c.prevBtn.removeAttribute("disabled")}}class i{#t;constructor(e){this.#t=e}toggle(){this.#h(e=>!e)}close(){this.#h(()=>!1)}#h(e){let t=this.#t((e,t)=>e.classList.contains(t)).every(e=>e);this.#t((s,n)=>{e(t)?s.classList.add(n):s.classList.remove(n)})}}(()=>{let e={slides:document.querySelectorAll('[data-slider="slide"]'),container:document.querySelector('[data-slider="container"]'),nextBtn:document.querySelector('[data-slider="next-button"]'),prevBtn:document.querySelector('[data-slider="prev-button"]'),currentSlide:document.querySelector('[data-slider="current-slide"]'),slideCount:document.querySelector('[data-slider="slide-count"]')},i=e.slides.length-1,a=new s(e.container,e.slides),l=new n(0,i,[a,new r(e,i),new t(e,{currentSlide:"features__currentSlide--max",slideCount:"features__lastSlide--current"},i)]);l.value=0,e.nextBtn.addEventListener("click",()=>{l.value++}),e.prevBtn.addEventListener("click",()=>{l.value--}),window.addEventListener("resize",()=>{a.update(l.value)})})(),(()=>{let t={button:document.querySelector('[data-menu="button"]'),menu:document.querySelector('[data-menu="menu"]'),page:document.querySelector('[data-menu="page"]'),topBar:document.querySelector('[data-menu="top-bar"]')},s=new i(e(t,{button:"top-bar__menu-button--active",menu:"main-nav--active",page:"page--menu-open",topBar:"top-bar--active"}));t.button.addEventListener("click",()=>s.toggle()),window.addEventListener("resize",()=>s.close()),t.menu.addEventListener("click",e=>{e.target?.localName==="a"&&s.close()})})(),({form:document.querySelector('[data-form="form"]')}).form.addEventListener("submit",e=>{e.preventDefault();let t=Array.from(e.target.elements);t.splice(t.length-1,1),t.forEach(e=>e.value="")});
//# sourceMappingURL=index.ac3b8843.js.map