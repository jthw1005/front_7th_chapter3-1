import{j as e}from"./iframe-P4yGa8fB.js";import{B as p}from"./badge-CjkXErjT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BD3NXCZR.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";const r=({category:g})=>{const a=()=>{switch(g){case"development":return{type:"primary",label:"development"};case"design":return{type:"info",label:"design"};default:return{type:"danger",label:"accessibility"}}},{type:y,label:m}=a();return e.jsx(p,{variant:y,pill:!0,children:m})};r.__docgenInfo={description:"",methods:[],displayName:"CategoryBadge",props:{category:{required:!0,tsType:{name:"Category"},description:""}}};const N={title:"Post/CategoryBadge",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{category:{control:"select",options:["development","design","accessibility"],description:"Post category type"}}},s={args:{category:"development"}},t={args:{category:"design"}},d={args:{category:"accessibility"}},n={render:()=>{const g=["development","design","accessibility"];return e.jsx("div",{className:"flex gap-3 items-center",children:g.map(a=>e.jsx(r,{category:a},a))})}},o={render:()=>e.jsx("div",{className:"max-w-2xl",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-100 dark:bg-gray-800",children:[e.jsx("th",{className:"border border-gray-300 dark:border-gray-600 p-2 text-left",children:"Title"}),e.jsx("th",{className:"border border-gray-300 dark:border-gray-600 p-2 text-left",children:"Category"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"Building a React Component Library"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:e.jsx(r,{category:"development"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"Design System Principles"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:e.jsx(r,{category:"design"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"Creating Accessible Web Apps"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:e.jsx(r,{category:"accessibility"})})]})]})]})})},c={render:()=>e.jsxs("div",{className:"space-y-3 max-w-md",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsx("span",{className:"text-gray-900 dark:text-gray-100",children:"Frontend Best Practices"}),e.jsx(r,{category:"development"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsx("span",{className:"text-gray-900 dark:text-gray-100",children:"UI/UX Guidelines"}),e.jsx(r,{category:"design"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsx("span",{className:"text-gray-900 dark:text-gray-100",children:"ARIA Patterns"}),e.jsx(r,{category:"accessibility"})]})]})},i={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h3",{className:"font-bold text-gray-900 dark:text-gray-100",children:"React Hooks Guide"}),e.jsx(r,{category:"development"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Learn about React hooks and how to use them effectively in your applications."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h3",{className:"font-bold text-gray-900 dark:text-gray-100",children:"Color Theory"}),e.jsx(r,{category:"design"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Understanding color theory and how to apply it to your design projects."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h3",{className:"font-bold text-gray-900 dark:text-gray-100",children:"WCAG Guidelines"}),e.jsx(r,{category:"accessibility"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Web Content Accessibility Guidelines for creating inclusive web experiences."})]})]})},l={render:()=>e.jsxs("div",{className:"space-y-6 max-w-2xl",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold mb-3 text-gray-900 dark:text-gray-100",children:"Regular vs Pill Shape"}),e.jsx("div",{className:"flex gap-4 items-center",children:e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-2",children:"Default (Pill)"}),e.jsx(r,{category:"development"})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold mb-3 text-gray-900 dark:text-gray-100",children:"All Categories"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{category:"development"}),e.jsx(r,{category:"design"}),e.jsx(r,{category:"accessibility"})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    category: 'development'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    category: 'design'
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    category: 'accessibility'
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const categories: Category[] = ['development', 'design', 'accessibility'];
    return <div className="flex gap-3 items-center">
                {categories.map(category => <CategoryBadge key={category} category={category} />)}
            </div>;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Title</th>
                        <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">
                            Building a React Component Library
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">
                            <CategoryBadge category="development" />
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">
                            Design System Principles
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">
                            <CategoryBadge category="design" />
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">
                            Creating Accessible Web Apps
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">
                            <CategoryBadge category="accessibility" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-3 max-w-md">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="text-gray-900 dark:text-gray-100">Frontend Best Practices</span>
                <CategoryBadge category="development" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="text-gray-900 dark:text-gray-100">UI/UX Guidelines</span>
                <CategoryBadge category="design" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="text-gray-900 dark:text-gray-100">ARIA Patterns</span>
                <CategoryBadge category="accessibility" />
            </div>
        </div>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900 dark:text-gray-100">React Hooks Guide</h3>
                    <CategoryBadge category="development" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Learn about React hooks and how to use them effectively in your applications.
                </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900 dark:text-gray-100">Color Theory</h3>
                    <CategoryBadge category="design" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Understanding color theory and how to apply it to your design projects.
                </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900 dark:text-gray-100">WCAG Guidelines</h3>
                    <CategoryBadge category="accessibility" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Web Content Accessibility Guidelines for creating inclusive web experiences.
                </p>
            </div>
        </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 max-w-2xl">
            <div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-gray-100">
                    Regular vs Pill Shape
                </h3>
                <div className="flex gap-4 items-center">
                    <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Default (Pill)</p>
                        <CategoryBadge category="development" />
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-gray-100">All Categories</h3>
                <div className="flex flex-wrap gap-2">
                    <CategoryBadge category="development" />
                    <CategoryBadge category="design" />
                    <CategoryBadge category="accessibility" />
                </div>
            </div>
        </div>
}`,...l.parameters?.docs?.source}}};const f=["Development","Design","Accessibility","AllCategories","InTable","InList","InCard","Comparison"];export{d as Accessibility,n as AllCategories,l as Comparison,t as Design,s as Development,i as InCard,c as InList,o as InTable,f as __namedExportsOrder,N as default};
