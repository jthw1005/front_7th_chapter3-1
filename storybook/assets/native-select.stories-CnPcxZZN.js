import{j as e}from"./iframe-P4yGa8fB.js";import{c as N}from"./index-B_jtOnfb.js";import{c as h}from"./utils-CDN07tui.js";import{c as x}from"./createLucideIcon-C_9NLM7a.js";import"./preload-helper-PPVm8Dsz.js";const O=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],f=x("chevron-down",O),j=N("border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 w-full min-w-0 appearance-none rounded-[3px] border bg-transparent px-3 pr-9 text-sm shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-gray-300",{variants:{size:{sm:"h-[36px] py-1 text-xs",md:"h-[42px] py-2 text-sm",lg:"h-[48px] py-2 text-base"}},defaultVariants:{size:"md"}});function b({className:s,size:v,...g}){return e.jsxs("div",{className:"group/native-select relative w-full has-[select:disabled]:opacity-50","data-slot":"native-select-wrapper",children:[e.jsx("select",{"data-slot":"native-select",className:h(j({size:v}),s),...g}),e.jsx(f,{className:"text-muted-foreground pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 opacity-50 select-none","aria-hidden":"true","data-slot":"native-select-icon"})]})}function t({...s}){return e.jsx("option",{"data-slot":"native-select-option",...s})}function S({className:s,...v}){return e.jsx("optgroup",{"data-slot":"native-select-optgroup",className:h(s),...v})}b.__docgenInfo={description:"",methods:[],displayName:"NativeSelect",composes:["Omit","VariantProps"]};S.__docgenInfo={description:"",methods:[],displayName:"NativeSelectOptGroup"};t.__docgenInfo={description:"",methods:[],displayName:"NativeSelectOption"};const k={title:"UI/NativeSelect",component:FormSelect,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Select size"},disabled:{control:"boolean",description:"Disabled state"},required:{control:"boolean",description:"Required field"}}},a=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],o={args:{name:"default-select",options:a,placeholder:"Select an option..."}},r={args:{name:"labeled-select",label:"Choose Option",options:a,placeholder:"Select an option..."}},n={args:{name:"required-select",label:"Required Select",options:a,placeholder:"Please select...",required:!0}},l={args:{name:"error-select",label:"Select with Error",options:a,placeholder:"Select an option...",error:"This field is required"}},i={args:{name:"help-select",label:"Select with Help",options:a,placeholder:"Select an option...",helpText:"Choose the option that best fits your needs"}},c={args:{name:"disabled-select",label:"Disabled Select",options:a,placeholder:"Cannot select",disabled:!0}},p={args:{name:"small-select",label:"Small Select",options:a,size:"sm"}},d={args:{name:"medium-select",label:"Medium Select",options:a,size:"md"}},m={args:{name:"large-select",label:"Large Select",options:a,size:"lg"}},u={render:()=>e.jsxs("div",{className:"w-[300px]",children:[e.jsx("label",{htmlFor:"custom-select",className:"block mb-2 text-sm font-medium",children:"Custom Native Select"}),e.jsxs(b,{id:"custom-select",defaultValue:"",children:[e.jsx(t,{value:"",disabled:!0,children:"Select a country"}),e.jsxs(S,{label:"North America",children:[e.jsx(t,{value:"us",children:"United States"}),e.jsx(t,{value:"ca",children:"Canada"}),e.jsx(t,{value:"mx",children:"Mexico"})]}),e.jsxs(S,{label:"Europe",children:[e.jsx(t,{value:"uk",children:"United Kingdom"}),e.jsx(t,{value:"fr",children:"France"}),e.jsx(t,{value:"de",children:"Germany"})]}),e.jsxs(S,{label:"Asia",children:[e.jsx(t,{value:"jp",children:"Japan"}),e.jsx(t,{value:"kr",children:"South Korea"}),e.jsx(t,{value:"cn",children:"China"})]})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'default-select',
    options: sampleOptions,
    placeholder: 'Select an option...'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'labeled-select',
    label: 'Choose Option',
    options: sampleOptions,
    placeholder: 'Select an option...'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'required-select',
    label: 'Required Select',
    options: sampleOptions,
    placeholder: 'Please select...',
    required: true
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'error-select',
    label: 'Select with Error',
    options: sampleOptions,
    placeholder: 'Select an option...',
    error: 'This field is required'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'help-select',
    label: 'Select with Help',
    options: sampleOptions,
    placeholder: 'Select an option...',
    helpText: 'Choose the option that best fits your needs'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabled-select',
    label: 'Disabled Select',
    options: sampleOptions,
    placeholder: 'Cannot select',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'small-select',
    label: 'Small Select',
    options: sampleOptions,
    size: 'sm'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'medium-select',
    label: 'Medium Select',
    options: sampleOptions,
    size: 'md'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'large-select',
    label: 'Large Select',
    options: sampleOptions,
    size: 'lg'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[300px]">
            <label htmlFor="custom-select" className="block mb-2 text-sm font-medium">
                Custom Native Select
            </label>
            <NativeSelect id="custom-select" defaultValue="">
                <NativeSelectOption value="" disabled>
                    Select a country
                </NativeSelectOption>
                <NativeSelectOptGroup label="North America">
                    <NativeSelectOption value="us">United States</NativeSelectOption>
                    <NativeSelectOption value="ca">Canada</NativeSelectOption>
                    <NativeSelectOption value="mx">Mexico</NativeSelectOption>
                </NativeSelectOptGroup>
                <NativeSelectOptGroup label="Europe">
                    <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
                    <NativeSelectOption value="fr">France</NativeSelectOption>
                    <NativeSelectOption value="de">Germany</NativeSelectOption>
                </NativeSelectOptGroup>
                <NativeSelectOptGroup label="Asia">
                    <NativeSelectOption value="jp">Japan</NativeSelectOption>
                    <NativeSelectOption value="kr">South Korea</NativeSelectOption>
                    <NativeSelectOption value="cn">China</NativeSelectOption>
                </NativeSelectOptGroup>
            </NativeSelect>
        </div>
}`,...u.parameters?.docs?.source}}};const G=["Default","WithLabel","Required","WithError","WithHelpText","Disabled","SmallSize","MediumSize","LargeSize","CustomNativeSelect"];export{u as CustomNativeSelect,o as Default,c as Disabled,m as LargeSize,d as MediumSize,n as Required,p as SmallSize,l as WithError,i as WithHelpText,r as WithLabel,G as __namedExportsOrder,k as default};
