import{_ as l,r as c,a,j as s,n as p}from"./app-742df12c.js";import{G as u}from"./GuestLayout-73e91a2b.js";import{T as f,I as w}from"./TextInput-a7588c58.js";import{I as h}from"./InputLabel-fc571f0b.js";import{P as b}from"./PrimaryButton-6ac330cf.js";import"./ApplicationLogo-76b900c4.js";function I(){const{data:e,setData:t,post:o,processing:m,errors:n,reset:i}=l({password:""});c.useEffect(()=>()=>{i("password")},[]);const d=r=>{t(r.target.name,r.target.value)};return a(u,{children:[s(p,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(h,{htmlFor:"password",value:"Password"}),s(f,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:d}),s(w,{message:n.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(b,{className:"ml-4",disabled:m,children:"Confirm"})})]})]})}export{I as default};
