import"./assets/common-0c6b0b6d.js";import{t as m}from"./assets/vendor-55e4299e.js";const t=document.querySelector(".feedback-form"),o="feedback-form-state",e={email:"",message:""};t.addEventListener("input",m(s,500));t.addEventListener("submit",i);r();function s(a){e[a.target.name]=a.target.value,l()}function l(){localStorage.setItem(o,JSON.stringify(e))}function r(){const a=JSON.parse(localStorage.getItem(o))||{};e.email=a.email||"",e.message=a.message||"",n()}function n(){t.elements.email.value=e.email,t.elements.message.value=e.message}function i(a){if(a.preventDefault(),!e.email||!e.message){alert("Please fill in all fields");return}console.log(e),localStorage.removeItem(o),e.email,e.message,t.reset()}
//# sourceMappingURL=commonHelpers2.js.map