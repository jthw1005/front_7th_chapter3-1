import{R,j as e}from"./iframe-DVpgd6GW.js";import{N as E,a as q}from"./native-select-viLbWElv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./createLucideIcon-CTHr3SdM.js";const l=R.forwardRef(({name:r,options:z,label:f,placeholder:j="Select an option...",required:v=!1,disabled:N=!1,error:s,helpText:x,size:T="md",className:F,...w},D)=>e.jsxs("div",{children:[f&&e.jsxs("label",{htmlFor:r,className:"block mb-2 text-gray-800 dark:text-gray-200 text-sm font-bold font-sans",children:[f,v&&e.jsx("span",{className:"text-destructive ml-1",children:"*"})]}),e.jsxs(E,{ref:D,id:r,name:r,required:v,disabled:N,"aria-invalid":!!s,"aria-describedby":s?`${r}-error`:x?`${r}-description`:void 0,size:T,className:F,...w,children:[e.jsx(q,{value:"",disabled:!0,children:j}),z.map(y=>e.jsx(q,{value:y.value,children:y.label},y.value))]}),s&&e.jsx("p",{id:`${r}-error`,className:"text-sm text-destructive",children:s}),x&&!s&&e.jsx("p",{id:`${r}-description`,className:"text-sm text-muted-foreground",children:x})]}));l.displayName="FormSelect";l.__docgenInfo={description:"",methods:[],displayName:"FormSelect",props:{name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an option...'",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},helpText:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},size:{defaultValue:{value:"'md'",computed:!1},required:!1}},composes:["VariantProps"]};const k={title:"Shared/FormSelect",component:l,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Select size"},disabled:{control:"boolean",description:"Disabled state"},required:{control:"boolean",description:"Required field"}}},a=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],O=[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"uk",label:"United Kingdom"},{value:"fr",label:"France"},{value:"de",label:"Germany"},{value:"jp",label:"Japan"},{value:"kr",label:"South Korea"}],o={args:{name:"default-select",options:a,placeholder:"Select an option..."}},t={args:{name:"labeled-select",label:"Choose Option",options:a,placeholder:"Select an option..."}},n={args:{name:"required-select",label:"Required Select",options:a,placeholder:"Please select...",required:!0}},i={args:{name:"error-select",label:"Select with Error",options:a,placeholder:"Select an option...",error:"This field is required"}},c={args:{name:"help-select",label:"Select with Help",options:a,placeholder:"Select an option...",helpText:"Choose the option that best fits your needs"}},d={args:{name:"disabled-select",label:"Disabled Select",options:a,placeholder:"Cannot select",disabled:!0}},p={args:{name:"small-select",label:"Small Select",options:a,size:"sm"}},m={args:{name:"medium-select",label:"Medium Select",options:a,size:"md"}},u={args:{name:"large-select",label:"Large Select",options:a,size:"lg"}},b={args:{name:"country-select",label:"Select Country",options:O,placeholder:"Choose a country..."}},h={args:{},render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-lg",children:[e.jsx(l,{name:"normal",label:"Normal Select",options:a,placeholder:"Select...",helpText:"This is a normal select field"}),e.jsx(l,{name:"required",label:"Required Select",options:a,placeholder:"Required field",required:!0}),e.jsx(l,{name:"error",label:"Select with Error",options:a,placeholder:"Error state",error:"This field is required and must be selected"}),e.jsx(l,{name:"disabled",label:"Disabled Select",options:a,placeholder:"Disabled",disabled:!0})]})},S={args:{},render:()=>e.jsxs("div",{className:"max-w-2xl",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"User Registration Form"}),e.jsxs("form",{className:"space-y-4",children:[e.jsx(l,{name:"country",label:"Country",options:O,placeholder:"Select your country...",required:!0,helpText:"Select the country where you currently reside"}),e.jsx(l,{name:"role",label:"Role",options:[{value:"developer",label:"Developer"},{value:"designer",label:"Designer"},{value:"manager",label:"Manager"},{value:"other",label:"Other"}],placeholder:"Select your role...",required:!0}),e.jsx(l,{name:"experience",label:"Years of Experience",options:[{value:"0-1",label:"0-1 years"},{value:"1-3",label:"1-3 years"},{value:"3-5",label:"3-5 years"},{value:"5+",label:"5+ years"}],placeholder:"Select..."}),e.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"Submit"})]})]})},g={args:{},render:()=>e.jsxs("div",{className:"space-y-4 max-w-lg",children:[e.jsx(l,{name:"small",label:"Small Size",options:a,size:"sm",placeholder:"Small select..."}),e.jsx(l,{name:"medium",label:"Medium Size (Default)",options:a,size:"md",placeholder:"Medium select..."}),e.jsx(l,{name:"large",label:"Large Size",options:a,size:"lg",placeholder:"Large select..."})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'default-select',
    options: sampleOptions,
    placeholder: 'Select an option...'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'labeled-select',
    label: 'Choose Option',
    options: sampleOptions,
    placeholder: 'Select an option...'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'required-select',
    label: 'Required Select',
    options: sampleOptions,
    placeholder: 'Please select...',
    required: true
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'error-select',
    label: 'Select with Error',
    options: sampleOptions,
    placeholder: 'Select an option...',
    error: 'This field is required'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'help-select',
    label: 'Select with Help',
    options: sampleOptions,
    placeholder: 'Select an option...',
    helpText: 'Choose the option that best fits your needs'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabled-select',
    label: 'Disabled Select',
    options: sampleOptions,
    placeholder: 'Cannot select',
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'small-select',
    label: 'Small Select',
    options: sampleOptions,
    size: 'sm'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'medium-select',
    label: 'Medium Select',
    options: sampleOptions,
    size: 'md'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'large-select',
    label: 'Large Select',
    options: sampleOptions,
    size: 'lg'
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'country-select',
    label: 'Select Country',
    options: countryOptions,
    placeholder: 'Choose a country...'
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="flex flex-col gap-4 max-w-lg">
            <FormSelect name="normal" label="Normal Select" options={sampleOptions} placeholder="Select..." helpText="This is a normal select field" />
            <FormSelect name="required" label="Required Select" options={sampleOptions} placeholder="Required field" required />
            <FormSelect name="error" label="Select with Error" options={sampleOptions} placeholder="Error state" error="This field is required and must be selected" />
            <FormSelect name="disabled" label="Disabled Select" options={sampleOptions} placeholder="Disabled" disabled />
        </div>
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-6">User Registration Form</h2>
            <form className="space-y-4">
                <FormSelect name="country" label="Country" options={countryOptions} placeholder="Select your country..." required helpText="Select the country where you currently reside" />
                <FormSelect name="role" label="Role" options={[{
        value: 'developer',
        label: 'Developer'
      }, {
        value: 'designer',
        label: 'Designer'
      }, {
        value: 'manager',
        label: 'Manager'
      }, {
        value: 'other',
        label: 'Other'
      }]} placeholder="Select your role..." required />
                <FormSelect name="experience" label="Years of Experience" options={[{
        value: '0-1',
        label: '0-1 years'
      }, {
        value: '1-3',
        label: '1-3 years'
      }, {
        value: '3-5',
        label: '3-5 years'
      }, {
        value: '5+',
        label: '5+ years'
      }]} placeholder="Select..." />
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Submit
                </button>
            </form>
        </div>
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="space-y-4 max-w-lg">
            <FormSelect name="small" label="Small Size" options={sampleOptions} size="sm" placeholder="Small select..." />
            <FormSelect name="medium" label="Medium Size (Default)" options={sampleOptions} size="md" placeholder="Medium select..." />
            <FormSelect name="large" label="Large Size" options={sampleOptions} size="lg" placeholder="Large select..." />
        </div>
}`,...g.parameters?.docs?.source}}};const H=["Default","WithLabel","Required","WithError","WithHelpText","Disabled","SmallSize","MediumSize","LargeSize","ManyOptions","AllStates","FormExample","AllSizes"];export{g as AllSizes,h as AllStates,o as Default,d as Disabled,S as FormExample,u as LargeSize,b as ManyOptions,m as MediumSize,n as Required,p as SmallSize,i as WithError,c as WithHelpText,t as WithLabel,H as __namedExportsOrder,k as default};
