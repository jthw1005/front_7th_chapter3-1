import{r,j as e}from"./iframe-DVpgd6GW.js";import{B as t}from"./button-CTVYAtqs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-2_lsYUO1.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";const o=({isOpen:s,onClose:n,title:x,children:h,size:b="medium",showFooter:g=!1,footerContent:f})=>{if(r.useEffect(()=>(s?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[s]),!s)return null;const O={small:"w-full max-w-[400px]",medium:"w-full max-w-[600px]",large:"w-full max-w-[900px]"};return e.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] p-4",onClick:n,children:e.jsxs("div",{className:`bg-white dark:bg-gray-800 rounded flex flex-col max-h-[90vh] font-sans shadow-[0px_11px_15px_-7px_rgba(0,0,0,0.2),0px_24px_38px_3px_rgba(0,0,0,0.14),0px_9px_46px_8px_rgba(0,0,0,0.12)] ${O[b]}`,onClick:v=>v.stopPropagation(),children:[x&&e.jsxs("div",{className:"px-6 py-4 border-b border-black/12 dark:border-white/12 flex justify-between items-center",children:[e.jsx("h3",{className:"m-0 text-xl font-medium text-black/87 dark:text-white/87",children:x}),e.jsx("button",{className:"bg-transparent border-none text-2xl leading-none text-black/54 dark:text-white/54 cursor-pointer p-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-black/4 dark:hover:bg-white/4",onClick:n,children:"×"})]}),e.jsx("div",{className:"p-6 overflow-y-auto flex-1",children:h}),g&&f&&e.jsx("div",{className:"px-6 py-4 border-t border-black/12 dark:border-white/12 flex gap-2 justify-end",children:f})]})})};o.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},showFooter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},footerContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const I={title:"Shared/Modal",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"Modal size"},isOpen:{control:"boolean",description:"Modal open state"},showFooter:{control:"boolean",description:"Show footer"}}},a={args:{},render:()=>{const[s,n]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{isOpen:s,onClose:()=>n(!1),title:"Modal Title",children:e.jsx("p",{children:"This is the modal content. Click outside or press the X button to close."})})]})}},i={args:{},render:()=>{const[s,n]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Small Modal"}),e.jsx(o,{isOpen:s,onClose:()=>n(!1),title:"Small Modal",size:"small",children:e.jsx("p",{children:"This is a small modal. Perfect for quick confirmations or brief messages."})})]})}},l={args:{},render:()=>{const[s,n]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Medium Modal"}),e.jsx(o,{isOpen:s,onClose:()=>n(!1),title:"Medium Modal",size:"medium",children:e.jsx("p",{children:"This is a medium-sized modal. It provides more space for content while remaining manageable."})})]})}},d={args:{},render:()=>{const[s,n]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Large Modal"}),e.jsx(o,{isOpen:s,onClose:()=>n(!1),title:"Large Modal",size:"large",children:e.jsx("p",{children:"This is a large modal. Great for forms, detailed content, or complex layouts."})})]})}},c={args:{},render:()=>{const[s,n]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Modal with Footer"}),e.jsx(o,{isOpen:s,onClose:()=>n(!1),title:"Confirm Action",showFooter:!0,footerContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"secondary",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{variant:"primary",onClick:()=>n(!1),children:"Confirm"})]}),children:e.jsx("p",{children:"Are you sure you want to perform this action?"})})]})}},m={args:{},render:()=>{const[s,n]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Modal without Title"}),e.jsx(o,{isOpen:s,onClose:()=>n(!1),children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Custom Header"}),e.jsx("p",{children:"This modal doesn't use the standard title prop."})]})})]})}},p={args:{},render:()=>{const[s,n]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Modal with Long Content"}),e.jsx(o,{isOpen:s,onClose:()=>n(!1),title:"Terms and Conditions",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsx("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),e.jsx("p",{children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsx("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})})]})}},u={args:{},render:()=>{const[s,n]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Form Modal"}),e.jsx(o,{isOpen:s,onClose:()=>n(!1),title:"Create New User",size:"medium",showFooter:!0,footerContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"secondary",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{variant:"primary",onClick:()=>n(!1),children:"Create User"})]}),children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium mb-1",children:"Name"}),e.jsx("input",{type:"text",id:"name",className:"w-full px-3 py-2 border border-gray-300 rounded",placeholder:"Enter name"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium mb-1",children:"Email"}),e.jsx("input",{type:"email",id:"email",className:"w-full px-3 py-2 border border-gray-300 rounded",placeholder:"Enter email"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"role",className:"block text-sm font-medium mb-1",children:"Role"}),e.jsxs("select",{id:"role",className:"w-full px-3 py-2 border border-gray-300 rounded",children:[e.jsx("option",{children:"User"}),e.jsx("option",{children:"Admin"}),e.jsx("option",{children:"Moderator"})]})]})]})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
                <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Title">
                    <p>This is the modal content. Click outside or press the X button to close.</p>
                </Modal>
            </div>;
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
                <Button onClick={() => setIsOpen(true)}>Open Small Modal</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Small Modal" size="small">
                    <p>This is a small modal. Perfect for quick confirmations or brief messages.</p>
                </Modal>
            </div>;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
                <Button onClick={() => setIsOpen(true)}>Open Medium Modal</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Medium Modal" size="medium">
                    <p>
                        This is a medium-sized modal. It provides more space for content while remaining
                        manageable.
                    </p>
                </Modal>
            </div>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
                <Button onClick={() => setIsOpen(true)}>Open Large Modal</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Large Modal" size="large">
                    <p>This is a large modal. Great for forms, detailed content, or complex layouts.</p>
                </Modal>
            </div>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
                <Button onClick={() => setIsOpen(true)}>Open Modal with Footer</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirm Action" showFooter footerContent={<>
                            <Button variant="secondary" onClick={() => setIsOpen(false)}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={() => setIsOpen(false)}>
                                Confirm
                            </Button>
                        </>}>
                    <p>Are you sure you want to perform this action?</p>
                </Modal>
            </div>;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
                <Button onClick={() => setIsOpen(true)}>Open Modal without Title</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <div className="text-center">
                        <h2 className="text-xl font-bold mb-4">Custom Header</h2>
                        <p>This modal doesn't use the standard title prop.</p>
                    </div>
                </Modal>
            </div>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
                <Button onClick={() => setIsOpen(true)}>Open Modal with Long Content</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Terms and Conditions">
                    <div className="space-y-4">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur.
                        </p>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat.
                        </p>
                    </div>
                </Modal>
            </div>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
                <Button onClick={() => setIsOpen(true)}>Open Form Modal</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Create New User" size="medium" showFooter footerContent={<>
                            <Button variant="secondary" onClick={() => setIsOpen(false)}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={() => setIsOpen(false)}>
                                Create User
                            </Button>
                        </>}>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">
                                Name
                            </label>
                            <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Enter name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                                Email
                            </label>
                            <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Enter email" />
                        </div>
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium mb-1">
                                Role
                            </label>
                            <select id="role" className="w-full px-3 py-2 border border-gray-300 rounded">
                                <option>User</option>
                                <option>Admin</option>
                                <option>Moderator</option>
                            </select>
                        </div>
                    </form>
                </Modal>
            </div>;
  }
}`,...u.parameters?.docs?.source}}};const N=["Default","Small","Medium","Large","WithFooter","WithoutTitle","LongContent","FormModal"];export{a as Default,u as FormModal,d as Large,p as LongContent,l as Medium,i as Small,c as WithFooter,m as WithoutTitle,N as __namedExportsOrder,I as default};
