import{j as e}from"./iframe-DVpgd6GW.js";import{e as r,T as t,a as n,b as a,c as b,d as l,f as m,g as x}from"./table-NcXktGcE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";const R={title:"UI/Table",component:r,parameters:{layout:"padded"},tags:["autodocs"]},i={render:()=>e.jsx(r,{children:e.jsxs("table",{className:"w-full caption-bottom text-sm",children:[e.jsx(t,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Role"})]})}),e.jsxs(b,{children:[e.jsxs(n,{children:[e.jsx(l,{children:"John Doe"}),e.jsx(l,{children:"john@example.com"}),e.jsx(l,{children:"Admin"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"Jane Smith"}),e.jsx(l,{children:"jane@example.com"}),e.jsx(l,{children:"User"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"Bob Johnson"}),e.jsx(l,{children:"bob@example.com"}),e.jsx(l,{children:"Moderator"})]})]})]})})},o={render:()=>e.jsx(r,{children:e.jsxs("table",{className:"w-full caption-bottom text-sm",children:[e.jsx(m,{children:"A list of recent users"}),e.jsx(t,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Status"})]})}),e.jsxs(b,{children:[e.jsxs(n,{children:[e.jsx(l,{children:"Alice Williams"}),e.jsx(l,{children:"alice@example.com"}),e.jsx(l,{children:"Active"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"Charlie Brown"}),e.jsx(l,{children:"charlie@example.com"}),e.jsx(l,{children:"Inactive"})]})]})]})})},c={render:()=>e.jsx(r,{children:e.jsxs("table",{className:"w-full caption-bottom text-sm",children:[e.jsx(t,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Product"}),e.jsx(a,{className:"text-right",children:"Price"}),e.jsx(a,{className:"text-right",children:"Quantity"}),e.jsx(a,{className:"text-right",children:"Total"})]})}),e.jsxs(b,{children:[e.jsxs(n,{children:[e.jsx(l,{children:"Item 1"}),e.jsx(l,{className:"text-right",children:"$10.00"}),e.jsx(l,{className:"text-right",children:"2"}),e.jsx(l,{className:"text-right",children:"$20.00"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"Item 2"}),e.jsx(l,{className:"text-right",children:"$15.00"}),e.jsx(l,{className:"text-right",children:"1"}),e.jsx(l,{className:"text-right",children:"$15.00"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"Item 3"}),e.jsx(l,{className:"text-right",children:"$8.00"}),e.jsx(l,{className:"text-right",children:"3"}),e.jsx(l,{className:"text-right",children:"$24.00"})]})]}),e.jsx(x,{children:e.jsxs(n,{children:[e.jsx(l,{colSpan:3,children:"Total"}),e.jsx(l,{className:"text-right",children:"$59.00"})]})})]})})},d={render:()=>e.jsx(r,{children:e.jsxs("table",{className:"w-full caption-bottom text-sm",children:[e.jsx(m,{children:"User Management Table"}),e.jsx(t,{children:e.jsxs(n,{children:[e.jsx(a,{children:"ID"}),e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Role"}),e.jsx(a,{children:"Status"}),e.jsx(a,{children:"Joined"})]})}),e.jsx(b,{children:[...Array(10)].map((h,s)=>e.jsxs(n,{children:[e.jsx(l,{children:s+1}),e.jsxs(l,{children:["User ",s+1]}),e.jsxs(l,{children:["user",s+1,"@example.com"]}),e.jsx(l,{children:s%3===0?"Admin":s%2===0?"Moderator":"User"}),e.jsx(l,{children:s%2===0?"Active":"Inactive"}),e.jsxs(l,{children:["2024-01-",String(s+1).padStart(2,"0")]})]},s))})]})})},T={render:()=>e.jsx(r,{children:e.jsxs("table",{className:"w-full caption-bottom text-sm",children:[e.jsx(t,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Department"}),e.jsx(a,{children:"Position"})]})}),e.jsxs(b,{children:[e.jsxs(n,{className:"even:bg-muted/50",children:[e.jsx(l,{children:"John Doe"}),e.jsx(l,{children:"Engineering"}),e.jsx(l,{children:"Senior Developer"})]}),e.jsxs(n,{className:"even:bg-muted/50",children:[e.jsx(l,{children:"Jane Smith"}),e.jsx(l,{children:"Design"}),e.jsx(l,{children:"UI Designer"})]}),e.jsxs(n,{className:"even:bg-muted/50",children:[e.jsx(l,{children:"Bob Johnson"}),e.jsx(l,{children:"Marketing"}),e.jsx(l,{children:"Marketing Manager"})]}),e.jsxs(n,{className:"even:bg-muted/50",children:[e.jsx(l,{children:"Alice Williams"}),e.jsx(l,{children:"Sales"}),e.jsx(l,{children:"Sales Representative"})]})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <TableRoot>
            <table className="w-full caption-bottom text-sm">
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>John Doe</TableCell>
                        <TableCell>john@example.com</TableCell>
                        <TableCell>Admin</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Jane Smith</TableCell>
                        <TableCell>jane@example.com</TableCell>
                        <TableCell>User</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Bob Johnson</TableCell>
                        <TableCell>bob@example.com</TableCell>
                        <TableCell>Moderator</TableCell>
                    </TableRow>
                </TableBody>
            </table>
        </TableRoot>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <TableRoot>
            <table className="w-full caption-bottom text-sm">
                <TableCaption>A list of recent users</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Alice Williams</TableCell>
                        <TableCell>alice@example.com</TableCell>
                        <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Charlie Brown</TableCell>
                        <TableCell>charlie@example.com</TableCell>
                        <TableCell>Inactive</TableCell>
                    </TableRow>
                </TableBody>
            </table>
        </TableRoot>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <TableRoot>
            <table className="w-full caption-bottom text-sm">
                <TableHeader>
                    <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                        <TableHead className="text-right">Quantity</TableHead>
                        <TableHead className="text-right">Total</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Item 1</TableCell>
                        <TableCell className="text-right">$10.00</TableCell>
                        <TableCell className="text-right">2</TableCell>
                        <TableCell className="text-right">$20.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Item 2</TableCell>
                        <TableCell className="text-right">$15.00</TableCell>
                        <TableCell className="text-right">1</TableCell>
                        <TableCell className="text-right">$15.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Item 3</TableCell>
                        <TableCell className="text-right">$8.00</TableCell>
                        <TableCell className="text-right">3</TableCell>
                        <TableCell className="text-right">$24.00</TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$59.00</TableCell>
                    </TableRow>
                </TableFooter>
            </table>
        </TableRoot>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <TableRoot>
            <table className="w-full caption-bottom text-sm">
                <TableCaption>User Management Table</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Joined</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[...Array(10)].map((_, i) => <TableRow key={i}>
                            <TableCell>{i + 1}</TableCell>
                            <TableCell>User {i + 1}</TableCell>
                            <TableCell>user{i + 1}@example.com</TableCell>
                            <TableCell>{i % 3 === 0 ? 'Admin' : i % 2 === 0 ? 'Moderator' : 'User'}</TableCell>
                            <TableCell>{i % 2 === 0 ? 'Active' : 'Inactive'}</TableCell>
                            <TableCell>2024-01-{String(i + 1).padStart(2, '0')}</TableCell>
                        </TableRow>)}
                </TableBody>
            </table>
        </TableRoot>
}`,...d.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <TableRoot>
            <table className="w-full caption-bottom text-sm">
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Position</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className="even:bg-muted/50">
                        <TableCell>John Doe</TableCell>
                        <TableCell>Engineering</TableCell>
                        <TableCell>Senior Developer</TableCell>
                    </TableRow>
                    <TableRow className="even:bg-muted/50">
                        <TableCell>Jane Smith</TableCell>
                        <TableCell>Design</TableCell>
                        <TableCell>UI Designer</TableCell>
                    </TableRow>
                    <TableRow className="even:bg-muted/50">
                        <TableCell>Bob Johnson</TableCell>
                        <TableCell>Marketing</TableCell>
                        <TableCell>Marketing Manager</TableCell>
                    </TableRow>
                    <TableRow className="even:bg-muted/50">
                        <TableCell>Alice Williams</TableCell>
                        <TableCell>Sales</TableCell>
                        <TableCell>Sales Representative</TableCell>
                    </TableRow>
                </TableBody>
            </table>
        </TableRoot>
}`,...T.parameters?.docs?.source}}};const N=["Default","WithCaption","WithFooter","LargeDataset","Striped"];export{i as Default,d as LargeDataset,T as Striped,o as WithCaption,c as WithFooter,N as __namedExportsOrder,R as default};
