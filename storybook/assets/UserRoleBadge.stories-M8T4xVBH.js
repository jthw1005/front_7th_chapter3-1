import{j as e}from"./iframe-pCu_qHIV.js";import{B as b}from"./badge-D8kPmq0u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DUjkeKZY.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";const r=({userRole:g})=>{const a=()=>{switch(g){case"admin":return{type:"danger",label:"관리자"};case"moderator":return{type:"warning",label:"운영자"};case"user":return{type:"primary",label:"사용자"};default:return{type:"secondary",label:"게스트"}}},{type:x,label:y}=a();return e.jsx(b,{variant:x,children:y})};r.__docgenInfo={description:"",methods:[],displayName:"UserRoleBadge",props:{userRole:{required:!0,tsType:{name:"UserRole"},description:""}}};const k={title:"User/UserRoleBadge",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{userRole:{control:"select",options:["admin","moderator","user","guest"],description:"User role type"}}},s={args:{userRole:"admin"}},d={args:{userRole:"moderator"}},t={args:{userRole:"user"}},n={args:{userRole:"guest"}},l={render:()=>{const g=["admin","moderator","user","guest"];return e.jsx("div",{className:"flex gap-3 items-center flex-wrap",children:g.map(a=>e.jsx(r,{userRole:a},a))})}},o={render:()=>e.jsx("div",{className:"max-w-3xl",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-100 dark:bg-gray-800",children:[e.jsx("th",{className:"border border-gray-300 dark:border-gray-600 p-2 text-left",children:"Name"}),e.jsx("th",{className:"border border-gray-300 dark:border-gray-600 p-2 text-left",children:"Email"}),e.jsx("th",{className:"border border-gray-300 dark:border-gray-600 p-2 text-left",children:"Role"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"John Doe"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"john@example.com"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:e.jsx(r,{userRole:"admin"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"Jane Smith"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"jane@example.com"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:e.jsx(r,{userRole:"moderator"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"Bob Johnson"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"bob@example.com"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:e.jsx(r,{userRole:"user"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"Anonymous"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:"-"}),e.jsx("td",{className:"border border-gray-300 dark:border-gray-600 p-2",children:e.jsx(r,{userRole:"guest"})})]})]})]})})},i={render:()=>e.jsxs("div",{className:"space-y-3 max-w-md",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-gray-900 dark:text-gray-100",children:"John Doe"}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"john@example.com"})]}),e.jsx(r,{userRole:"admin"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-gray-900 dark:text-gray-100",children:"Jane Smith"}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"jane@example.com"})]}),e.jsx(r,{userRole:"moderator"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-gray-900 dark:text-gray-100",children:"Bob Johnson"}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"bob@example.com"})]}),e.jsx(r,{userRole:"user"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-gray-900 dark:text-gray-100",children:"Anonymous User"}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Not logged in"})]}),e.jsx(r,{userRole:"guest"})]})]})},m={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-red-600 dark:text-red-300 font-bold",children:"AD"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-bold text-gray-900 dark:text-gray-100",children:"John Doe"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"john@example.com"})]}),e.jsx(r,{userRole:"admin"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Full access to all system features and settings."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center text-orange-600 dark:text-orange-300 font-bold",children:"MO"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-bold text-gray-900 dark:text-gray-100",children:"Jane Smith"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"jane@example.com"})]}),e.jsx(r,{userRole:"moderator"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Can manage content and moderate user activities."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold",children:"US"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-bold text-gray-900 dark:text-gray-100",children:"Bob Johnson"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"bob@example.com"})]}),e.jsx(r,{userRole:"user"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Regular user with standard permissions."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-bold",children:"GU"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-bold text-gray-900 dark:text-gray-100",children:"Anonymous"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Visitor"})]}),e.jsx(r,{userRole:"guest"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Limited access, view-only permissions."})]})]})},c={render:()=>e.jsxs("div",{className:"max-w-md space-y-4",children:[e.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-gray-100",children:"Role Hierarchy"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded border-l-4 border-red-500",children:[e.jsx(r,{userRole:"admin"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium text-gray-900 dark:text-gray-100",children:"Administrator"}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Highest level access"})]})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded border-l-4 border-orange-500",children:[e.jsx(r,{userRole:"moderator"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium text-gray-900 dark:text-gray-100",children:"Moderator"}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Content management"})]})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-500",children:[e.jsx(r,{userRole:"user"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium text-gray-900 dark:text-gray-100",children:"User"}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Standard access"})]})]}),e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded border-l-4 border-gray-500",children:[e.jsx(r,{userRole:"guest"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium text-gray-900 dark:text-gray-100",children:"Guest"}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Limited access"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    userRole: 'admin'
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    userRole: 'moderator'
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    userRole: 'user'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    userRole: 'guest'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const roles: UserRole[] = ['admin', 'moderator', 'user', 'guest'];
    return <div className="flex gap-3 items-center flex-wrap">
                {roles.map(role => <UserRoleBadge key={role} userRole={role} />)}
            </div>;
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-3xl">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Name</th>
                        <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Email</th>
                        <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">John Doe</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">john@example.com</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">
                            <UserRoleBadge userRole="admin" />
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">Jane Smith</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">jane@example.com</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">
                            <UserRoleBadge userRole="moderator" />
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">Bob Johnson</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">bob@example.com</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">
                            <UserRoleBadge userRole="user" />
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">Anonymous</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">-</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">
                            <UserRoleBadge userRole="guest" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-3 max-w-md">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">John Doe</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">john@example.com</div>
                </div>
                <UserRoleBadge userRole="admin" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">Jane Smith</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">jane@example.com</div>
                </div>
                <UserRoleBadge userRole="moderator" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">Bob Johnson</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">bob@example.com</div>
                </div>
                <UserRoleBadge userRole="user" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">Anonymous User</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Not logged in</div>
                </div>
                <UserRoleBadge userRole="guest" />
            </div>
        </div>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-red-600 dark:text-red-300 font-bold">
                        AD
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-gray-100">John Doe</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">john@example.com</p>
                    </div>
                    <UserRoleBadge userRole="admin" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Full access to all system features and settings.
                </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center text-orange-600 dark:text-orange-300 font-bold">
                        MO
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-gray-100">Jane Smith</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">jane@example.com</p>
                    </div>
                    <UserRoleBadge userRole="moderator" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Can manage content and moderate user activities.
                </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold">
                        US
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-gray-100">Bob Johnson</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">bob@example.com</p>
                    </div>
                    <UserRoleBadge userRole="user" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Regular user with standard permissions.
                </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-bold">
                        GU
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-gray-100">Anonymous</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Visitor</p>
                    </div>
                    <UserRoleBadge userRole="guest" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Limited access, view-only permissions.
                </p>
            </div>
        </div>
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Role Hierarchy</h3>
            <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded border-l-4 border-red-500">
                    <UserRoleBadge userRole="admin" />
                    <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-gray-100">Administrator</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Highest level access</div>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded border-l-4 border-orange-500">
                    <UserRoleBadge userRole="moderator" />
                    <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-gray-100">Moderator</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Content management</div>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-500">
                    <UserRoleBadge userRole="user" />
                    <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-gray-100">User</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Standard access</div>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded border-l-4 border-gray-500">
                    <UserRoleBadge userRole="guest" />
                    <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-gray-100">Guest</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Limited access</div>
                    </div>
                </div>
            </div>
        </div>
}`,...c.parameters?.docs?.source}}};const f=["Admin","Moderator","User","Guest","AllRoles","InTable","InList","InCard","RoleHierarchy"];export{s as Admin,l as AllRoles,n as Guest,m as InCard,i as InList,o as InTable,d as Moderator,c as RoleHierarchy,t as User,f as __namedExportsOrder,k as default};
