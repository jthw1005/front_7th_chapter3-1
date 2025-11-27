import{r as F,j as e}from"./iframe-pCu_qHIV.js";import{c as _}from"./index-B_jtOnfb.js";import{c as y}from"./utils-CDN07tui.js";import{c as R}from"./createLucideIcon-D4P-C284.js";import"./preload-helper-PPVm8Dsz.js";const k=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],D=R("chevron-down",k),G=_("border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 w-full min-w-0 appearance-none rounded-md border bg-transparent px-3 pr-9 text-sm shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{size:{sm:"h-8 py-1 text-xs",md:"h-9 py-2 text-sm",lg:"h-10 py-2 text-base"}},defaultVariants:{size:"md"}});function O({className:a,size:r,...n}){return e.jsxs("div",{className:"group/native-select relative w-full has-[select:disabled]:opacity-50","data-slot":"native-select-wrapper",children:[e.jsx("select",{"data-slot":"native-select",className:y(G({size:r}),a),...n}),e.jsx(D,{className:"text-muted-foreground pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 opacity-50 select-none","aria-hidden":"true","data-slot":"native-select-icon"})]})}function l({...a}){return e.jsx("option",{"data-slot":"native-select-option",...a})}function g({className:a,...r}){return e.jsx("optgroup",{"data-slot":"native-select-optgroup",className:y(a),...r})}const s=F.forwardRef(({name:a,options:r,label:n,placeholder:q="Select an option...",required:j=!1,disabled:w=!1,error:o,helpText:f,size:T="md",className:z,...C},E)=>e.jsxs("div",{className:"space-y-2",children:[n&&e.jsxs("label",{htmlFor:a,className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:[n,j&&e.jsx("span",{className:"text-destructive ml-1",children:"*"})]}),e.jsxs(O,{ref:E,id:a,name:a,required:j,disabled:w,"aria-invalid":!!o,"aria-describedby":o?`${a}-error`:f?`${a}-description`:void 0,size:T,className:z,...C,children:[e.jsx(l,{value:"",disabled:!0,children:q}),r.map(N=>e.jsx(l,{value:N.value,children:N.label},N.value))]}),o&&e.jsx("p",{id:`${a}-error`,className:"text-sm text-destructive",children:o}),f&&!o&&e.jsx("p",{id:`${a}-description`,className:"text-sm text-muted-foreground",children:f})]}));s.displayName="FormSelect";O.__docgenInfo={description:"",methods:[],displayName:"NativeSelect",composes:["Omit","VariantProps"]};g.__docgenInfo={description:"",methods:[],displayName:"NativeSelectOptGroup"};l.__docgenInfo={description:"",methods:[],displayName:"NativeSelectOption"};s.__docgenInfo={description:"",methods:[],displayName:"FormSelect",props:{name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an option...'",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},helpText:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},size:{defaultValue:{value:"'md'",computed:!1},required:!1}},composes:["VariantProps"]};const I={title:"UI/NativeSelect",component:s,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Select size"},disabled:{control:"boolean",description:"Disabled state"},required:{control:"boolean",description:"Required field"}}},t=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],i={args:{name:"default-select",options:t,placeholder:"Select an option..."}},c={args:{name:"labeled-select",label:"Choose Option",options:t,placeholder:"Select an option..."}},d={args:{name:"required-select",label:"Required Select",options:t,placeholder:"Please select...",required:!0}},p={args:{name:"error-select",label:"Select with Error",options:t,placeholder:"Select an option...",error:"This field is required"}},m={args:{name:"help-select",label:"Select with Help",options:t,placeholder:"Select an option...",helpText:"Choose the option that best fits your needs"}},u={args:{name:"disabled-select",label:"Disabled Select",options:t,placeholder:"Cannot select",disabled:!0}},h={args:{name:"small-select",label:"Small Select",options:t,size:"sm"}},S={args:{name:"medium-select",label:"Medium Select",options:t,size:"md"}},v={args:{name:"large-select",label:"Large Select",options:t,size:"lg"}},b={render:()=>e.jsxs("div",{className:"w-[300px]",children:[e.jsx("label",{htmlFor:"custom-select",className:"block mb-2 text-sm font-medium",children:"Custom Native Select"}),e.jsxs(O,{id:"custom-select",defaultValue:"",children:[e.jsx(l,{value:"",disabled:!0,children:"Select a country"}),e.jsxs(g,{label:"North America",children:[e.jsx(l,{value:"us",children:"United States"}),e.jsx(l,{value:"ca",children:"Canada"}),e.jsx(l,{value:"mx",children:"Mexico"})]}),e.jsxs(g,{label:"Europe",children:[e.jsx(l,{value:"uk",children:"United Kingdom"}),e.jsx(l,{value:"fr",children:"France"}),e.jsx(l,{value:"de",children:"Germany"})]}),e.jsxs(g,{label:"Asia",children:[e.jsx(l,{value:"jp",children:"Japan"}),e.jsx(l,{value:"kr",children:"South Korea"}),e.jsx(l,{value:"cn",children:"China"})]})]})]})},x={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-lg",children:[e.jsx(s,{name:"normal",label:"Normal Select",options:t,placeholder:"Select..."}),e.jsx(s,{name:"required",label:"Required Select",options:t,placeholder:"Required",required:!0}),e.jsx(s,{name:"error",label:"Select with Error",options:t,placeholder:"Error state",error:"This field is required"}),e.jsx(s,{name:"help",label:"Select with Help Text",options:t,placeholder:"With help",helpText:"This is a helpful message"}),e.jsx(s,{name:"disabled",label:"Disabled Select",options:t,placeholder:"Cannot select",disabled:!0})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'default-select',
    options: sampleOptions,
    placeholder: 'Select an option...'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'labeled-select',
    label: 'Choose Option',
    options: sampleOptions,
    placeholder: 'Select an option...'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'required-select',
    label: 'Required Select',
    options: sampleOptions,
    placeholder: 'Please select...',
    required: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'error-select',
    label: 'Select with Error',
    options: sampleOptions,
    placeholder: 'Select an option...',
    error: 'This field is required'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'help-select',
    label: 'Select with Help',
    options: sampleOptions,
    placeholder: 'Select an option...',
    helpText: 'Choose the option that best fits your needs'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabled-select',
    label: 'Disabled Select',
    options: sampleOptions,
    placeholder: 'Cannot select',
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'small-select',
    label: 'Small Select',
    options: sampleOptions,
    size: 'sm'
  }
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'medium-select',
    label: 'Medium Select',
    options: sampleOptions,
    size: 'md'
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'large-select',
    label: 'Large Select',
    options: sampleOptions,
    size: 'lg'
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-lg">
            <FormSelect name="normal" label="Normal Select" options={sampleOptions} placeholder="Select..." />
            <FormSelect name="required" label="Required Select" options={sampleOptions} placeholder="Required" required />
            <FormSelect name="error" label="Select with Error" options={sampleOptions} placeholder="Error state" error="This field is required" />
            <FormSelect name="help" label="Select with Help Text" options={sampleOptions} placeholder="With help" helpText="This is a helpful message" />
            <FormSelect name="disabled" label="Disabled Select" options={sampleOptions} placeholder="Cannot select" disabled />
        </div>
}`,...x.parameters?.docs?.source}}};const M=["Default","WithLabel","Required","WithError","WithHelpText","Disabled","SmallSize","MediumSize","LargeSize","CustomNativeSelect","AllStates"];export{x as AllStates,b as CustomNativeSelect,i as Default,u as Disabled,v as LargeSize,S as MediumSize,d as Required,h as SmallSize,p as WithError,m as WithHelpText,c as WithLabel,M as __namedExportsOrder,I as default};
