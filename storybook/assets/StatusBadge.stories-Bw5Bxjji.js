import{j as e}from"./iframe-DVpgd6GW.js";import{B as p}from"./badge-COw2o8m4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-2_lsYUO1.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";const r=({status:y})=>{const a=()=>{switch(y){case"published":return{type:"success",label:"게시됨"};case"draft":return{type:"warning",label:"임시저장"};case"archived":return{type:"secondary",label:"보관됨"};case"pending":return{type:"info",label:"대기중"};default:return{type:"danger",label:"거부됨"}}},{type:x,label:m}=a();return e.jsx(p,{variant:x,children:m})};r.__docgenInfo={description:"",methods:[],displayName:"StatusBadge",props:{status:{required:!0,tsType:{name:"PostStatus"},description:""}}};const f={title:"Shared/StatusBadge",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["published","draft","archived","pending","rejected"],description:"Post status type"}}},s={args:{status:"published"}},t={args:{status:"draft"}},d={args:{status:"archived"}},n={args:{status:"pending"}},g={args:{status:"rejected"}},i={render:()=>{const y=["published","draft","archived","pending","rejected"];return e.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:y.map(a=>e.jsx(r,{status:a},a))})}},c={render:()=>e.jsx("div",{className:"max-w-3xl",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-100 dark:bg-gray-800",children:[e.jsx("th",{className:"border border-gray-300 dark:border-gray-600 p-2 text-left",children:"Post Title"}),e.jsx("th",{className:"border border-gray-300 dark:border-gray-600 p-2 text-left",children:"Author"}),e.jsx("th",{className:"border border-gray-300 dark:border-gray-600 p-2 text-left",children:"Status"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"Introduction to React"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"John Doe"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:e.jsx(r,{status:"published"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"Advanced TypeScript"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"Jane Smith"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:e.jsx(r,{status:"draft"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"Old Tutorial Series"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"Bob Johnson"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:e.jsx(r,{status:"archived"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"New Feature Announcement"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"Alice Williams"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:e.jsx(r,{status:"pending"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"Controversial Topic"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"Charlie Brown"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:e.jsx(r,{status:"rejected"})})]})]})]})})},o={render:()=>e.jsxs("div",{className:"space-y-3 max-w-md",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsx("span",{className:"text-gray-900 dark:text-gray-100",children:"Getting Started Guide"}),e.jsx(r,{status:"published"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsx("span",{className:"text-gray-900 dark:text-gray-100",children:"Work in Progress"}),e.jsx(r,{status:"draft"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsx("span",{className:"text-gray-900 dark:text-gray-100",children:"Awaiting Review"}),e.jsx(r,{status:"pending"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsx("span",{className:"text-gray-900 dark:text-gray-100",children:"Old Documentation"}),e.jsx(r,{status:"archived"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsx("span",{className:"text-gray-900 dark:text-gray-100",children:"Content Violation"}),e.jsx(r,{status:"rejected"})]})]})},l={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h3",{className:"font-bold text-gray-900 dark:text-gray-100",children:"Live Article"}),e.jsx(r,{status:"published"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"This article is currently published and visible to all users."}),e.jsx("div",{className:"mt-3 text-xs text-gray-500",children:"Published 2 days ago"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h3",{className:"font-bold text-gray-900 dark:text-gray-100",children:"Editing Draft"}),e.jsx(r,{status:"draft"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"This article is still being edited and not yet published."}),e.jsx("div",{className:"mt-3 text-xs text-gray-500",children:"Last edited 1 hour ago"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h3",{className:"font-bold text-gray-900 dark:text-gray-100",children:"Under Review"}),e.jsx(r,{status:"pending"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"This article is awaiting approval from moderators."}),e.jsx("div",{className:"mt-3 text-xs text-gray-500",children:"Submitted 3 hours ago"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h3",{className:"font-bold text-gray-900 dark:text-gray-100",children:"Old Content"}),e.jsx(r,{status:"archived"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"This article has been archived and is no longer active."}),e.jsx("div",{className:"mt-3 text-xs text-gray-500",children:"Archived 30 days ago"})]})]})},b={render:()=>e.jsx("div",{className:"max-w-2xl space-y-4",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold mb-3 text-gray-900 dark:text-gray-100",children:"Filter by Status"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("button",{className:"flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600",children:[e.jsx(r,{status:"published"}),e.jsx("span",{className:"text-sm text-gray-900 dark:text-gray-100",children:"Published (12)"})]}),e.jsxs("button",{className:"flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600",children:[e.jsx(r,{status:"draft"}),e.jsx("span",{className:"text-sm text-gray-900 dark:text-gray-100",children:"Drafts (5)"})]}),e.jsxs("button",{className:"flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600",children:[e.jsx(r,{status:"pending"}),e.jsx("span",{className:"text-sm text-gray-900 dark:text-gray-100",children:"Pending (3)"})]}),e.jsxs("button",{className:"flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600",children:[e.jsx(r,{status:"archived"}),e.jsx("span",{className:"text-sm text-gray-900 dark:text-gray-100",children:"Archived (8)"})]}),e.jsxs("button",{className:"flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600",children:[e.jsx(r,{status:"rejected"}),e.jsx("span",{className:"text-sm text-gray-900 dark:text-gray-100",children:"Rejected (2)"})]})]})]})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'published'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'draft'
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'archived'
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'pending'
  }
}`,...n.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'rejected'
  }
}`,...g.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const statuses: PostStatus[] = ['published', 'draft', 'archived', 'pending', 'rejected'];
    return <div className="flex gap-3 items-center flex-wrap">
                {statuses.map(status => <StatusBadge key={status} status={status} />)}
            </div>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-3xl">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Post Title</th>
                        <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Author</th>
                        <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">
                            Introduction to React
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">John Doe</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">
                            <StatusBadge status="published" />
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">
                            Advanced TypeScript
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">Jane Smith</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">
                            <StatusBadge status="draft" />
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">
                            Old Tutorial Series
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">Bob Johnson</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">
                            <StatusBadge status="archived" />
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">
                            New Feature Announcement
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">Alice Williams</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">
                            <StatusBadge status="pending" />
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">
                            Controversial Topic
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">Charlie Brown</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">
                            <StatusBadge status="rejected" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-3 max-w-md">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="text-gray-900 dark:text-gray-100">Getting Started Guide</span>
                <StatusBadge status="published" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="text-gray-900 dark:text-gray-100">Work in Progress</span>
                <StatusBadge status="draft" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="text-gray-900 dark:text-gray-100">Awaiting Review</span>
                <StatusBadge status="pending" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="text-gray-900 dark:text-gray-100">Old Documentation</span>
                <StatusBadge status="archived" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="text-gray-900 dark:text-gray-100">Content Violation</span>
                <StatusBadge status="rejected" />
            </div>
        </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900 dark:text-gray-100">Live Article</h3>
                    <StatusBadge status="published" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    This article is currently published and visible to all users.
                </p>
                <div className="mt-3 text-xs text-gray-500">Published 2 days ago</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900 dark:text-gray-100">Editing Draft</h3>
                    <StatusBadge status="draft" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    This article is still being edited and not yet published.
                </p>
                <div className="mt-3 text-xs text-gray-500">Last edited 1 hour ago</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900 dark:text-gray-100">Under Review</h3>
                    <StatusBadge status="pending" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    This article is awaiting approval from moderators.
                </p>
                <div className="mt-3 text-xs text-gray-500">Submitted 3 hours ago</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900 dark:text-gray-100">Old Content</h3>
                    <StatusBadge status="archived" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    This article has been archived and is no longer active.
                </p>
                <div className="mt-3 text-xs text-gray-500">Archived 30 days ago</div>
            </div>
        </div>
}`,...l.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl space-y-4">
            <div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-gray-100">Filter by Status</h3>
                <div className="flex flex-wrap gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                        <StatusBadge status="published" />
                        <span className="text-sm text-gray-900 dark:text-gray-100">Published (12)</span>
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                        <StatusBadge status="draft" />
                        <span className="text-sm text-gray-900 dark:text-gray-100">Drafts (5)</span>
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                        <StatusBadge status="pending" />
                        <span className="text-sm text-gray-900 dark:text-gray-100">Pending (3)</span>
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                        <StatusBadge status="archived" />
                        <span className="text-sm text-gray-900 dark:text-gray-100">Archived (8)</span>
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                        <StatusBadge status="rejected" />
                        <span className="text-sm text-gray-900 dark:text-gray-100">Rejected (2)</span>
                    </button>
                </div>
            </div>
        </div>
}`,...b.parameters?.docs?.source}}};const w=["Published","Draft","Archived","Pending","Rejected","AllStatuses","InTable","InList","InCard","StatusFilter"];export{i as AllStatuses,d as Archived,t as Draft,l as InCard,o as InList,c as InTable,n as Pending,s as Published,g as Rejected,b as StatusFilter,w as __namedExportsOrder,f as default};
