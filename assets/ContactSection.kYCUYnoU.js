import{c as w,j as e,a as u,b as h,S as F,P as k,u as S,C as E}from"./index.DJRH6Guf.js";import{r}from"./vendor.CuVfoR2-.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=w("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]),P=h("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),p=r.forwardRef(({className:s,variant:t,size:a,asChild:n=!1,...o},x)=>{const c=n?F:"button";return e.jsx(c,{className:u(P({variant:t,size:a,className:s})),ref:x,...o})});p.displayName="Button";const m=r.forwardRef(({className:s,type:t,...a},n)=>e.jsx("input",{type:t,className:u("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),ref:n,...a}));m.displayName="Input";const j=r.forwardRef(({className:s,...t},a)=>e.jsx("textarea",{className:u("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s),ref:a,...t}));j.displayName="Textarea";var R="Label",v=r.forwardRef((s,t)=>e.jsx(k.label,{...s,ref:t,onMouseDown:a=>{var o;a.target.closest("button, input, select, textarea")||((o=s.onMouseDown)==null||o.call(s,a),!a.defaultPrevented&&a.detail>1&&a.preventDefault())}}));v.displayName=R;var y=v;const z=h("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),l=r.forwardRef(({className:s,...t},a)=>e.jsx(y,{ref:a,className:u(z(),s),...t}));l.displayName=y.displayName;const M=()=>{const{t:s}=S(),[t,a]=r.useState({name:"",email:"",company:"",message:"",package:"launch"}),[n,o]=r.useState(!1),[x,c]=r.useState(!1),[b,g]=r.useState(""),i=f=>{const{name:d,value:C}=f.target;a(D=>({...D,[d]:C}))},N=async f=>{f.preventDefault(),o(!0),g("");try{if(!(await fetch("https://formspree.io/f/mjkyebnn",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t.name,email:t.email,company:t.company,package:t.package,message:t.message})})).ok)throw new Error("Failed to submit form");c(!0),setTimeout(()=>{a({name:"",email:"",company:"",message:"",package:"launch"}),c(!1)},5e3)}catch(d){console.error("Failed to send form:",d),g("Failed to send your message. Please try again later.")}finally{o(!1)}};return e.jsx("section",{id:"contact",className:"section-padding bg-[#F5F5E9]",children:e.jsx("div",{className:"container mx-auto",children:e.jsx("div",{className:"max-w-5xl mx-auto",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#0D503C] mb-4 font-serif",children:s("contact.title")}),e.jsx("p",{className:"text-xl text-[#0D503C]/80 mb-8",children:s("contact.subtitle")}),e.jsx("div",{className:"w-24 h-1 bg-[#0D503C] mb-8"}),e.jsxs("div",{className:"bg-[#0D503C]/5 p-6 rounded-xl mb-8 border-2 border-dashed border-[#0D503C]/30",children:[e.jsx("h3",{className:"text-xl font-semibold text-[#0D503C] mb-4 font-serif",children:s("contact.nextSteps")}),e.jsxs("ul",{className:"space-y-4",children:[e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 text-[#0D503C] flex items-center justify-center mr-3 border border-[#0D503C]/20",children:e.jsx("span",{className:"text-sm font-medium",children:"1"})}),e.jsx("p",{className:"text-[#0D503C]/80",children:s("contact.step1")})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 text-[#0D503C] flex items-center justify-center mr-3 border border-[#0D503C]/20",children:e.jsx("span",{className:"text-sm font-medium",children:"2"})}),e.jsx("p",{className:"text-[#0D503C]/80",children:s("contact.step2")})]}),e.jsxs("li",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0 h-6 w-6 rounded-full bg-[#F9A7A7]/50 text-[#0D503C] flex items-center justify-center mr-3 border border-[#0D503C]/20",children:e.jsx("span",{className:"text-sm font-medium",children:"3"})}),e.jsx("p",{className:"text-[#0D503C]/80",children:s("contact.step3")})]})]})]}),e.jsxs("div",{className:"text-[#0D503C]/80",children:[e.jsx("p",{className:"font-medium text-[#0D503C]",children:s("contact.questions")}),e.jsx("p",{className:"mt-2 text-[#0D503C]",children:e.jsx("a",{href:"mailto:david@branca.be",className:"text-[#0D503C] font-medium hover:underline",children:"david@branca.be"})})]})]}),e.jsx("div",{className:"bg-[#F5F5E9] rounded-xl shadow-lg p-8 border-2 border-[#0D503C]",children:x?e.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center p-6",children:[e.jsx("div",{className:"h-12 w-12 bg-[#F9A7A7]/30 rounded-full flex items-center justify-center mb-4 border border-[#F9A7A7]",children:e.jsx(E,{className:"h-6 w-6 text-[#0D503C]"})}),e.jsx("h3",{className:"text-2xl font-bold text-[#0D503C] mb-2 font-serif",children:s("contact.success.title")}),e.jsx("p",{className:"text-[#0D503C]/80",children:s("contact.success.message")})]}):e.jsxs("form",{onSubmit:N,className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"name",className:"text-sm font-medium text-[#0D503C] mb-1",children:s("contact.form.name")}),e.jsx(m,{type:"text",id:"name",name:"name",value:t.name,onChange:i,required:!0,className:"w-full px-4 py-3 border-2 border-[#0D503C]/30 rounded-lg focus:ring-2 focus:ring-[#0D503C] focus:border-[#0D503C] bg-[#F5F5E9]",placeholder:"John Doe"})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"email",className:"text-sm font-medium text-[#0D503C] mb-1",children:s("contact.form.email")}),e.jsx(m,{type:"email",id:"email",name:"email",value:t.email,onChange:i,required:!0,className:"w-full px-4 py-3 border-2 border-[#0D503C]/30 rounded-lg focus:ring-2 focus:ring-[#0D503C] focus:border-[#0D503C] bg-[#F5F5E9]",placeholder:"john@example.com"})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"company",className:"text-sm font-medium text-[#0D503C] mb-1",children:s("contact.form.company")}),e.jsx(m,{type:"text",id:"company",name:"company",value:t.company,onChange:i,className:"w-full px-4 py-3 border-2 border-[#0D503C]/30 rounded-lg focus:ring-2 focus:ring-[#0D503C] focus:border-[#0D503C] bg-[#F5F5E9]",placeholder:"Your Company"})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"package",className:"text-sm font-medium text-[#0D503C] mb-1",children:s("contact.form.package")}),e.jsxs("select",{id:"package",name:"package",value:t.package,onChange:i,className:"w-full px-4 py-3 border-2 border-[#0D503C]/30 rounded-lg focus:ring-2 focus:ring-[#0D503C] focus:border-[#0D503C] bg-[#F5F5E9]",children:[e.jsx("option",{value:"launch",children:"Launch Package (€1,500)"}),e.jsx("option",{value:"premium",children:"Premium Package (€2,500)"}),e.jsx("option",{value:"premium-plan",children:"Premium Package - Payment Plan (€833/month)"}),e.jsx("option",{value:"not-sure",children:"Not sure yet"})]})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"message",className:"text-sm font-medium text-[#0D503C] mb-1",children:s("contact.form.message")}),e.jsx(j,{id:"message",name:"message",value:t.message,onChange:i,rows:4,className:"w-full px-4 py-3 border-2 border-[#0D503C]/30 rounded-lg focus:ring-2 focus:ring-[#0D503C] focus:border-[#0D503C] bg-[#F5F5E9]",placeholder:"Share a bit about your project and what you're looking for..."})]}),b&&e.jsx("div",{className:"p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm",children:b}),e.jsx(p,{type:"submit",disabled:n,className:`w-full py-3 px-4 flex items-center justify-center rounded-lg text-[#F5F5E9] font-medium transition-colors ${n?"bg-[#0D503C]/50 cursor-not-allowed":"bg-[#0D503C] hover:bg-[#0A4231]"}`,children:n?e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-[#F5F5E9]",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),s("contact.form.submitting")]}):e.jsxs("span",{className:"flex items-center",children:[s("contact.form.submit"),e.jsx(A,{className:"ml-2 h-4 w-4"})]})}),e.jsx("p",{className:"text-xs text-[#0D503C]/70 text-center mt-4",children:s("contact.form.privacy")})]})})]})})})})};export{M as default};
//# sourceMappingURL=ContactSection.kYCUYnoU.js.map
