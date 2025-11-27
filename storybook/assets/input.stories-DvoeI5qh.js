import{r as S,j as e}from"./iframe-P4yGa8fB.js";import{c as q}from"./index-B_jtOnfb.js";import{c as f}from"./utils-CDN07tui.js";import"./preload-helper-PPVm8Dsz.js";const v=q("w-full px-3 py-2 text-base font-sans text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-[3px] bg-white dark:bg-gray-700 box-border transition-colors focus:outline-none focus:border-primary-500",{variants:{error:{true:"border-danger-500 focus:border-danger-500",false:""},width:{small:"w-[200px]",medium:"w-[300px]",large:"w-[400px]",full:"w-full"}},defaultVariants:{error:!1,width:"full"}}),r=S.forwardRef(({className:w,error:a,width:y,label:g,helpText:b,required:x,name:l,...I},W)=>{const E=f("text-gray-600 dark:text-gray-400 text-sm font-sans mt-1",a&&"text-danger-500");return e.jsxs("div",{className:"mb-4",children:[g&&e.jsxs("label",{htmlFor:l,className:"block mb-2 text-gray-800 dark:text-gray-200 text-sm font-bold font-sans",children:[g,x&&e.jsx("span",{className:"text-destructive ml-1",children:"*"})]}),e.jsx("input",{id:l,name:l,ref:W,className:f(v({error:!!a,width:y}),w),required:x,"aria-invalid":!!a,"aria-describedby":a?`${l}-error`:b?`${l}-description`:void 0,...I}),a&&e.jsx("span",{id:`${l}-error`,className:E,children:a}),b&&!a&&e.jsx("span",{id:`${l}-description`,className:"text-gray-600 dark:text-gray-400 text-sm font-sans mt-1",children:b})]})});r.displayName="Input";r.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helpText:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const F={title:"UI/Input",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{width:{control:"select",options:["small","medium","large","full"],description:"Input width"},disabled:{control:"boolean",description:"Disabled state"},required:{control:"boolean",description:"Required field"}}},s={args:{name:"default",placeholder:"Enter text..."}},t={args:{name:"with-label",label:"Username",placeholder:"Enter your username"}},n={args:{name:"required",label:"Email",placeholder:"Enter your email",required:!0}},o={args:{name:"with-error",label:"Password",placeholder:"Enter your password",error:"Password must be at least 8 characters"}},d={args:{name:"with-help",label:"Full Name",placeholder:"John Doe",helpText:"Please enter your full legal name"}},i={args:{name:"disabled",label:"Disabled Input",placeholder:"Cannot edit",disabled:!0,value:"Disabled value"}},c={args:{name:"small",label:"Small Width",placeholder:"Small",width:"small"}},p={args:{name:"medium",label:"Medium Width",placeholder:"Medium",width:"medium"}},m={args:{name:"large",label:"Large Width",placeholder:"Large",width:"large"}},u={args:{name:"full",label:"Full Width",placeholder:"Full width input",width:"full"}},h={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-lg",children:[e.jsx(r,{name:"normal",label:"Normal Input",placeholder:"Enter text..."}),e.jsx(r,{name:"required",label:"Required Input",placeholder:"Required",required:!0}),e.jsx(r,{name:"error",label:"Input with Error",placeholder:"Error state",error:"This field has an error"}),e.jsx(r,{name:"help",label:"Input with Help Text",placeholder:"With help",helpText:"This is a helpful message"}),e.jsx(r,{name:"disabled",label:"Disabled Input",placeholder:"Disabled",disabled:!0,value:"Cannot edit"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'default',
    placeholder: 'Enter text...'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'with-label',
    label: 'Username',
    placeholder: 'Enter your username'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'required',
    label: 'Email',
    placeholder: 'Enter your email',
    required: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'with-error',
    label: 'Password',
    placeholder: 'Enter your password',
    error: 'Password must be at least 8 characters'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'with-help',
    label: 'Full Name',
    placeholder: 'John Doe',
    helpText: 'Please enter your full legal name'
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabled',
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    disabled: true,
    value: 'Disabled value'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'small',
    label: 'Small Width',
    placeholder: 'Small',
    width: 'small'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'medium',
    label: 'Medium Width',
    placeholder: 'Medium',
    width: 'medium'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'large',
    label: 'Large Width',
    placeholder: 'Large',
    width: 'large'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'full',
    label: 'Full Width',
    placeholder: 'Full width input',
    width: 'full'
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-lg">
            <Input name="normal" label="Normal Input" placeholder="Enter text..." />
            <Input name="required" label="Required Input" placeholder="Required" required />
            <Input name="error" label="Input with Error" placeholder="Error state" error="This field has an error" />
            <Input name="help" label="Input with Help Text" placeholder="With help" helpText="This is a helpful message" />
            <Input name="disabled" label="Disabled Input" placeholder="Disabled" disabled value="Cannot edit" />
        </div>
}`,...h.parameters?.docs?.source}}};const R=["Default","WithLabel","Required","WithError","WithHelpText","Disabled","SmallWidth","MediumWidth","LargeWidth","FullWidth","AllStates"];export{h as AllStates,s as Default,i as Disabled,u as FullWidth,m as LargeWidth,p as MediumWidth,n as Required,c as SmallWidth,o as WithError,d as WithHelpText,t as WithLabel,R as __namedExportsOrder,F as default};
