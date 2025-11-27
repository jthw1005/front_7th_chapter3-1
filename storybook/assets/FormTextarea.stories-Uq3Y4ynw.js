import{r as w,j as e}from"./iframe-pCu_qHIV.js";import{c as T}from"./utils-CDN07tui.js";import"./preload-helper-PPVm8Dsz.js";const r=w.forwardRef(({name:a,label:t,placeholder:l,required:o=!1,disabled:y=!1,error:s,helpText:f,rows:v=4,className:q,...k},S)=>{const E=T("w-full min-h-24 py-[16.5px] px-[14px] text-base font-normal","text-black/[0.87] dark:text-white/[0.87]","border border-black/[0.23] dark:border-white/[0.23] rounded","bg-white dark:bg-gray-700 box-border","transition-[border-color] duration-200 ease-[cubic-bezier(0,0,0.2,1)]","outline-none resize-y","focus:border-[#1976d2] focus:border-2 focus:py-[15.5px] focus:px-[13px]","disabled:bg-black/[0.12] dark:disabled:bg-white/[0.12]",s&&"border-[#d32f2f] dark:border-[#f44336]",q),N=T("text-gray-600 dark:text-gray-400 text-sm font-sans mt-1",s&&"text-danger-500");return e.jsxs("div",{className:"mb-4",children:[t&&e.jsxs("label",{htmlFor:a,className:"block mb-2 text-gray-800 dark:text-gray-200 text-sm font-bold font-sans",children:[t,o&&e.jsx("span",{className:"text-[#d32f2f] dark:text-[#f44336] ml-1",children:"*"})]}),e.jsx("textarea",{id:a,name:a,ref:S,placeholder:l,required:o,disabled:y,rows:v,className:E,"aria-invalid":!!s,"aria-describedby":s?`${a}-error`:f?`${a}-description`:void 0,...k}),s&&e.jsx("span",{id:`${a}-error`,className:N,children:s}),f&&!s&&e.jsx("span",{id:`${a}-description`,className:"text-gray-600 dark:text-gray-400 text-sm font-sans mt-1",children:f})]})});r.displayName="FormTextarea";r.__docgenInfo={description:"",methods:[],displayName:"FormTextarea",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helpText:{required:!1,tsType:{name:"string"},description:""},required:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},rows:{defaultValue:{value:"4",computed:!1},required:!1}}};const D={title:"Shared/FormTextarea",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"Disabled state"},required:{control:"boolean",description:"Required field"},rows:{control:"number",description:"Number of visible text rows"}}},n={args:{name:"default",placeholder:"Enter your text here..."}},d={args:{name:"with-label",label:"Description",placeholder:"Enter a description..."}},i={args:{name:"required",label:"Message",placeholder:"Enter your message",required:!0}},c={args:{name:"with-error",label:"Comments",placeholder:"Enter your comments",error:"This field must contain at least 10 characters"}},m={args:{name:"with-help",label:"Bio",placeholder:"Tell us about yourself",helpText:"Please provide a brief description (max 500 characters)"}},u={args:{name:"disabled",label:"Disabled Textarea",placeholder:"Cannot edit",disabled:!0,value:"This content cannot be edited"}},p={args:{name:"custom-rows",label:"Large Text Area",placeholder:"Enter a lot of text...",rows:8}},x={args:{name:"small-rows",label:"Small Text Area",placeholder:"Brief comment",rows:2}},b={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-lg",children:[e.jsx(r,{name:"normal",label:"Normal Textarea",placeholder:"Enter text...",helpText:"This is a normal textarea"}),e.jsx(r,{name:"required",label:"Required Textarea",placeholder:"Required field",required:!0}),e.jsx(r,{name:"error",label:"Textarea with Error",placeholder:"Error state",error:"This field is required and must be filled"}),e.jsx(r,{name:"disabled",label:"Disabled Textarea",placeholder:"Disabled",disabled:!0,value:"Cannot edit this content"})]})},h={render:()=>e.jsxs("div",{className:"max-w-2xl",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Feedback Form"}),e.jsxs("form",{className:"space-y-4",children:[e.jsx(r,{name:"feedback",label:"Your Feedback",placeholder:"Tell us what you think...",required:!0,rows:6,helpText:"Please provide detailed feedback to help us improve"}),e.jsx(r,{name:"suggestions",label:"Suggestions (Optional)",placeholder:"Any suggestions for improvement?",rows:4}),e.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"Submit Feedback"})]})]})},g={render:()=>{const[a,t]=w.useState(""),l=200;return e.jsx("div",{className:"max-w-lg",children:e.jsx(r,{name:"limited",label:"Limited Text Area",placeholder:"Type your message (max 200 characters)",value:a,onChange:o=>t(o.target.value),maxLength:l,helpText:`${a.length} / ${l} characters`,rows:5})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'default',
    placeholder: 'Enter your text here...'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'with-label',
    label: 'Description',
    placeholder: 'Enter a description...'
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'required',
    label: 'Message',
    placeholder: 'Enter your message',
    required: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'with-error',
    label: 'Comments',
    placeholder: 'Enter your comments',
    error: 'This field must contain at least 10 characters'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'with-help',
    label: 'Bio',
    placeholder: 'Tell us about yourself',
    helpText: 'Please provide a brief description (max 500 characters)'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabled',
    label: 'Disabled Textarea',
    placeholder: 'Cannot edit',
    disabled: true,
    value: 'This content cannot be edited'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'custom-rows',
    label: 'Large Text Area',
    placeholder: 'Enter a lot of text...',
    rows: 8
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'small-rows',
    label: 'Small Text Area',
    placeholder: 'Brief comment',
    rows: 2
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-lg">
            <FormTextarea name="normal" label="Normal Textarea" placeholder="Enter text..." helpText="This is a normal textarea" />
            <FormTextarea name="required" label="Required Textarea" placeholder="Required field" required />
            <FormTextarea name="error" label="Textarea with Error" placeholder="Error state" error="This field is required and must be filled" />
            <FormTextarea name="disabled" label="Disabled Textarea" placeholder="Disabled" disabled value="Cannot edit this content" />
        </div>
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-6">Feedback Form</h2>
            <form className="space-y-4">
                <FormTextarea name="feedback" label="Your Feedback" placeholder="Tell us what you think..." required rows={6} helpText="Please provide detailed feedback to help us improve" />
                <FormTextarea name="suggestions" label="Suggestions (Optional)" placeholder="Any suggestions for improvement?" rows={4} />
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Submit Feedback
                </button>
            </form>
        </div>
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const maxLength = 200;
    return <div className="max-w-lg">
                <FormTextarea name="limited" label="Limited Text Area" placeholder="Type your message (max 200 characters)" value={value} onChange={e => setValue(e.target.value)} maxLength={maxLength} helpText={\`\${value.length} / \${maxLength} characters\`} rows={5} />
            </div>;
  }
}`,...g.parameters?.docs?.source}}};const R=["Default","WithLabel","Required","WithError","WithHelpText","Disabled","CustomRows","SmallRows","AllStates","FormExample","CharacterCount"];export{b as AllStates,g as CharacterCount,p as CustomRows,n as Default,u as Disabled,h as FormExample,i as Required,x as SmallRows,c as WithError,m as WithHelpText,d as WithLabel,R as __namedExportsOrder,D as default};
