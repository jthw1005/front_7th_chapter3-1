import{j as e}from"./iframe-DVpgd6GW.js";import{c as w}from"./index-B_jtOnfb.js";import{c as y}from"./utils-CDN07tui.js";import"./preload-helper-PPVm8Dsz.js";const j=w("py-2 px-3 mb-4 rounded-[3px] border font-sans flex gap-2 items-start",{variants:{variant:{info:"bg-[#e3f2fd] dark:bg-[#1e3a5f] border-[#90caf9] dark:border-[#4a90e2] text-[#0d47a1] dark:text-[#90caf9]",success:"bg-[#e8f5e9] dark:bg-[#1e4620] border-[#81c784] dark:border-[#4caf50] text-[#1b5e20] dark:text-[#81c784]",warning:"bg-[#fff3e0] dark:bg-[#4a3c1e] border-[#ffb74d] dark:border-[#ff9800] text-[#e65100] dark:text-[#ffb74d]",error:"bg-[#ffebee] dark:bg-[#4a1e1e] border-[#e57373] dark:border-[#f44336] text-[#b71c1c] dark:text-[#e57373]",default:"bg-[#f5f5f5] dark:bg-gray-800 border-[#bdbdbd] dark:border-gray-600 text-[#424242] dark:text-gray-300"}},defaultVariants:{variant:"default"}}),r=({children:a,variant:f="default",title:v,onClose:x,showIcon:b=!0})=>{const A=()=>{switch(f){case"info":return"ℹ️";case"success":return"✓";case"warning":return"⚠️";case"error":return"✕";default:return"•"}};return e.jsxs("div",{className:y(j({variant:f})),children:[b&&e.jsx("div",{className:"text-xl shrink-0",children:A()}),e.jsxs("div",{className:"flex-1",children:[v&&e.jsx("div",{className:"font-bold mb-1 text-[15px]",children:v}),e.jsx("div",{className:"text-sm leading-relaxed",children:a})]}),x&&e.jsx("button",{onClick:x,className:"bg-transparent border-0 cursor-pointer text-xl px-1 py-0 ml-auto shrink-0 hover:opacity-70",children:"×"})]})};r.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},variant:{defaultValue:{value:"'default'",computed:!1},required:!1}},composes:["VariantProps"]};const k={title:"Shared/Alert",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","info","success","warning","error"],description:"Alert variant type"},showIcon:{control:"boolean",description:"Show icon"}}},s={args:{children:"This is a default alert message.",variant:"default"}},t={args:{children:"This is an informational message.",variant:"info"}},n={args:{children:"Operation completed successfully!",variant:"success"}},i={args:{children:"Please review this warning before proceeding.",variant:"warning"}},o={args:{children:"An error occurred. Please try again.",variant:"error"}},l={args:{title:"Important Notice",children:"This alert has a title for better organization.",variant:"info"}},c={args:{children:"This alert does not show an icon.",variant:"info",showIcon:!1}},d={args:{children:"This alert can be dismissed.",variant:"info",onClose:()=>alert("Alert closed!")}},m={args:{title:"Terms and Conditions",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",variant:"default"}},u={args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"default",children:"This is a default alert message."}),e.jsx(r,{variant:"info",children:"This is an informational message."}),e.jsx(r,{variant:"success",children:"Operation completed successfully!"}),e.jsx(r,{variant:"warning",children:"Please review this warning before proceeding."}),e.jsx(r,{variant:"error",children:"An error occurred. Please try again."})]})},p={args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"default",title:"Default",children:"This is a default alert with a title."}),e.jsx(r,{variant:"info",title:"Information",children:"This is an informational message with a title."}),e.jsx(r,{variant:"success",title:"Success",children:"Operation completed successfully with a title."}),e.jsx(r,{variant:"warning",title:"Warning",children:"Please review this warning with a title."}),e.jsx(r,{variant:"error",title:"Error",children:"An error occurred with a title."})]})},h={args:{},render:()=>{const a=()=>console.log("Alert dismissed");return e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"info",title:"Dismissible Info",onClose:a,children:"Click the X to dismiss this alert."}),e.jsx(r,{variant:"success",title:"Dismissible Success",onClose:a,children:"This success alert can be dismissed."}),e.jsx(r,{variant:"warning",title:"Dismissible Warning",onClose:a,children:"This warning can be closed."}),e.jsx(r,{variant:"error",title:"Dismissible Error",onClose:a,children:"This error message can be dismissed."})]})}},g={args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"info",title:"System Update Available",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"A new version of the system is available."}),e.jsxs("ul",{className:"list-disc list-inside ml-2",children:[e.jsx("li",{children:"Improved performance"}),e.jsx("li",{children:"Bug fixes"}),e.jsx("li",{children:"New features"})]}),e.jsx("p",{className:"text-sm mt-2",children:"Update now to get the latest improvements."})]})}),e.jsx(r,{variant:"warning",title:"Scheduled Maintenance",onClose:()=>{},children:e.jsxs("div",{children:[e.jsx("p",{children:"System maintenance is scheduled for:"}),e.jsx("p",{className:"font-bold mt-1",children:"Saturday, January 15, 2024 at 2:00 AM UTC"}),e.jsx("p",{className:"text-sm mt-2",children:"Expected downtime: 2-3 hours"})]})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is a default alert message.',
    variant: 'default'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is an informational message.',
    variant: 'info'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Operation completed successfully!',
    variant: 'success'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Please review this warning before proceeding.',
    variant: 'warning'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'An error occurred. Please try again.',
    variant: 'error'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Important Notice',
    children: 'This alert has a title for better organization.',
    variant: 'info'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This alert does not show an icon.',
    variant: 'info',
    showIcon: false
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This alert can be dismissed.',
    variant: 'info',
    onClose: () => alert('Alert closed!')
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Terms and Conditions',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    variant: 'default'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="space-y-4">
            <Alert variant="default">This is a default alert message.</Alert>
            <Alert variant="info">This is an informational message.</Alert>
            <Alert variant="success">Operation completed successfully!</Alert>
            <Alert variant="warning">Please review this warning before proceeding.</Alert>
            <Alert variant="error">An error occurred. Please try again.</Alert>
        </div>
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="space-y-4">
            <Alert variant="default" title="Default">
                This is a default alert with a title.
            </Alert>
            <Alert variant="info" title="Information">
                This is an informational message with a title.
            </Alert>
            <Alert variant="success" title="Success">
                Operation completed successfully with a title.
            </Alert>
            <Alert variant="warning" title="Warning">
                Please review this warning with a title.
            </Alert>
            <Alert variant="error" title="Error">
                An error occurred with a title.
            </Alert>
        </div>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const handleClose = () => console.log('Alert dismissed');
    return <div className="space-y-4">
                <Alert variant="info" title="Dismissible Info" onClose={handleClose}>
                    Click the X to dismiss this alert.
                </Alert>
                <Alert variant="success" title="Dismissible Success" onClose={handleClose}>
                    This success alert can be dismissed.
                </Alert>
                <Alert variant="warning" title="Dismissible Warning" onClose={handleClose}>
                    This warning can be closed.
                </Alert>
                <Alert variant="error" title="Dismissible Error" onClose={handleClose}>
                    This error message can be dismissed.
                </Alert>
            </div>;
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="space-y-4">
            <Alert variant="info" title="System Update Available">
                <div className="space-y-2">
                    <p>A new version of the system is available.</p>
                    <ul className="list-disc list-inside ml-2">
                        <li>Improved performance</li>
                        <li>Bug fixes</li>
                        <li>New features</li>
                    </ul>
                    <p className="text-sm mt-2">Update now to get the latest improvements.</p>
                </div>
            </Alert>
            <Alert variant="warning" title="Scheduled Maintenance" onClose={() => {}}>
                <div>
                    <p>System maintenance is scheduled for:</p>
                    <p className="font-bold mt-1">Saturday, January 15, 2024 at 2:00 AM UTC</p>
                    <p className="text-sm mt-2">Expected downtime: 2-3 hours</p>
                </div>
            </Alert>
        </div>
}`,...g.parameters?.docs?.source}}};const I=["Default","Info","Success","Warning","Error","WithTitle","WithoutIcon","WithCloseButton","LongContent","AllVariants","AllWithTitles","Dismissible","ComplexContent"];export{u as AllVariants,p as AllWithTitles,g as ComplexContent,s as Default,h as Dismissible,o as Error,t as Info,m as LongContent,n as Success,i as Warning,d as WithCloseButton,l as WithTitle,c as WithoutIcon,I as __namedExportsOrder,k as default};
