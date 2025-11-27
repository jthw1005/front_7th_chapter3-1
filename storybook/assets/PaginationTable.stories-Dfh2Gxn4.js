import{r as l,j as r}from"./iframe-P4yGa8fB.js";import{c as f}from"./utils-CDN07tui.js";import{T as re,a as I,b as ae,c as te,d as se}from"./table-BcFmTUAs.js";import"./preload-helper-PPVm8Dsz.js";const b=({columns:n,data:a=[],striped:t=!1,bordered:c=!1,hover:m=!1,pageSize:$=10,searchable:q=!1,sortable:h=!1,onRowClick:V,renderCell:z,getRowKey:O=(y,k)=>k,className:W})=>{const[y,k]=l.useState(a),[u,_]=l.useState(1),[U,J]=l.useState(""),[B,F]=l.useState(""),[L,G]=l.useState("asc");l.useEffect(()=>{k(a)},[a]);const K=e=>{if(!h)return;const o=B===e&&L==="asc"?"desc":"asc";F(e),G(o);const d=[...y].sort((Z,ee)=>{const p=Z[e],g=ee[e];return typeof p=="number"&&typeof g=="number"?o==="asc"?p-g:g-p:o==="asc"?String(p).localeCompare(String(g)):String(g).localeCompare(String(p))});k(d)},H=q&&U?y.filter(e=>Object.values(e).some(o=>String(o).toLowerCase().includes(U.toLowerCase()))):y,Q=H.slice((u-1)*$,u*$),x=Math.ceil(H.length/$),X=f("w-full border-collapse text-sm bg-white dark:bg-gray-800",c&&"border border-gray-200 dark:border-gray-700",W),Y=(e,o)=>{const d=e[o.key];return l.isValidElement(d)?d:String(d??"")};return r.jsxs("div",{className:"overflow-x-auto",children:[q&&r.jsx("div",{className:"mb-4",children:r.jsx("input",{type:"text",placeholder:"검색...",value:U,onChange:e=>J(e.target.value),className:"px-3 py-2 border border-gray-300 dark:border-gray-600 rounded w-[300px] bg-white dark:bg-gray-700 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"})}),r.jsxs("table",{className:X,children:[r.jsx(re,{className:"bg-gray-50 dark:bg-gray-900",children:r.jsx(I,{children:n.map(e=>r.jsx(ae,{style:e.width?{width:e.width}:void 0,onClick:()=>h&&e.sortable!==!1&&K(e.key),className:f("p-4 text-left font-medium text-xs text-black/60 dark:text-gray-600 uppercase tracking-wide border-b-2 border-black/12 dark:border-white/12",h&&e.sortable!==!1?"cursor-pointer":"",c&&"border border-black/12 dark:border-white/12"),children:r.jsxs("div",{className:"flex items-center gap-1",children:[e.header,h&&B===e.key&&r.jsx("span",{children:L==="asc"?"↑":"↓"})]})},String(e.key)))})}),r.jsx(te,{children:Q.map((e,o)=>r.jsx(I,{onClick:()=>V?.(e),className:f(V?"cursor-pointer":"",t&&o%2===1&&"bg-gray-50 dark:bg-gray-900",m&&"hover:bg-black/4 dark:hover:bg-blue-800"),children:n.map(d=>r.jsx(se,{className:f("p-4 text-black/87 dark:text-gray-600 border-b border-black/8 dark:border-white/8",c&&"border border-black/12 dark:border-white/12"),children:z?z(e,d):Y(e,d)},String(d.key)))},O(e,o)))})]}),x>1&&r.jsxs("div",{className:"mt-4 flex gap-2 justify-center",children:[r.jsx("button",{onClick:()=>_(e=>Math.max(1,e-1)),disabled:u===1,className:"px-3 py-1.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded disabled:cursor-not-allowed disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-gray-600",children:"이전"}),r.jsxs("span",{className:"px-3 py-1.5 text-black dark:text-white",children:[u," / ",x]}),r.jsx("button",{onClick:()=>_(e=>Math.min(x,e+1)),disabled:u===x,className:"px-3 py-1.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded disabled:cursor-not-allowed disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-gray-600",children:"다음"})]})]})};b.__docgenInfo={description:"",methods:[],displayName:"PaginationTable",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn",elements:[{name:"T"}],raw:"TableColumn<T>"}],raw:"TableColumn<T>[]"},description:""},data:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"",defaultValue:{value:"[]",computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pageSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sortable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T) => void",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"void"}}},description:""},renderCell:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, column: TableColumn<T>) => React.ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"TableColumn",elements:[{name:"T"}],raw:"TableColumn<T>"},name:"column"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},getRowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, index: number) => string | number",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"",defaultValue:{value:"(_, index) => index",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const ie={title:"Shared/PaginationTable",component:b,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{striped:{control:"boolean",description:"Striped rows"},bordered:{control:"boolean",description:"Bordered table"},hover:{control:"boolean",description:"Hover effect on rows"},searchable:{control:"boolean",description:"Enable search"},sortable:{control:"boolean",description:"Enable sorting"},pageSize:{control:"number",description:"Rows per page"}}},i=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Moderator"},{id:4,name:"Alice Williams",email:"alice@example.com",role:"User"},{id:5,name:"Charlie Brown",email:"charlie@example.com",role:"Admin"}],s=[{key:"id",header:"ID",width:"80px"},{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"role",header:"Role",width:"150px"}],w={args:{columns:s,data:i}},S={args:{columns:s,data:i,striped:!0}},v={args:{columns:s,data:i,bordered:!0}},T={args:{columns:s,data:i,hover:!0}},C={args:{columns:s,data:i,searchable:!0}},A={args:{columns:s,data:i,sortable:!0}},N={args:{columns:s,data:Array.from({length:25},(n,a)=>({id:a+1,name:`User ${a+1}`,email:`user${a+1}@example.com`,role:a%3===0?"Admin":a%2===0?"Moderator":"User"})),pageSize:10}},j={args:{columns:s,data:Array.from({length:50},(n,a)=>({id:a+1,name:`User ${a+1}`,email:`user${a+1}@example.com`,role:a%3===0?"Admin":a%2===0?"Moderator":"User"})),striped:!0,bordered:!0,hover:!0,searchable:!0,sortable:!0,pageSize:10}},D={args:{columns:s,data:i,pageSize:2,striped:!0}},R={args:{columns:s,data:[]}},E={render:()=>{const n=[{key:"id",header:"ID",width:"80px"},{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"role",header:"Role"},{key:"actions",header:"Actions",width:"150px"}];return r.jsx(b,{columns:n,data:i,renderCell:(a,t)=>{if(t.key==="actions")return r.jsxs("div",{className:"flex gap-2",children:[r.jsx("button",{className:"text-blue-600 hover:text-blue-800",children:"Edit"}),r.jsx("button",{className:"text-red-600 hover:text-red-800",children:"Delete"})]});if(t.key==="role"){const c={Admin:"bg-red-500",Moderator:"bg-orange-500",User:"bg-blue-500"},m=a[t.key];return r.jsx("span",{className:`px-2 py-1 rounded text-white text-xs ${c[m]}`,children:m})}return String(a[t.key]??"")},striped:!0,hover:!0})}},P={render:()=>{const n=a=>{alert(`Clicked on ${a.name}`)};return r.jsx(b,{columns:s,data:i,onRowClick:n,hover:!0,striped:!0})}},M={render:()=>{const n=[{id:1,name:"Laptop",category:"Electronics",price:999,stock:15,status:"Active"},{id:2,name:"Mouse",category:"Accessories",price:29,stock:50,status:"Active"},{id:3,name:"Keyboard",category:"Accessories",price:79,stock:30,status:"Active"},{id:4,name:"Monitor",category:"Electronics",price:299,stock:8,status:"Low Stock"},{id:5,name:"Headphones",category:"Accessories",price:149,stock:0,status:"Out of Stock"},{id:6,name:"Webcam",category:"Electronics",price:89,stock:25,status:"Active"},{id:7,name:"USB Cable",category:"Accessories",price:9,stock:100,status:"Active"},{id:8,name:"External SSD",category:"Storage",price:199,stock:12,status:"Active"}],a=[{key:"id",header:"ID",width:"60px"},{key:"name",header:"Product Name"},{key:"category",header:"Category",width:"150px"},{key:"price",header:"Price",width:"100px"},{key:"stock",header:"Stock",width:"100px"},{key:"status",header:"Status",width:"120px"}];return r.jsxs("div",{className:"space-y-4",children:[r.jsx("h2",{className:"text-2xl font-bold",children:"Product Inventory"}),r.jsx(b,{columns:a,data:n,renderCell:(t,c)=>{if(c.key==="price")return`$${t.price}`;if(c.key==="status"){const m={Active:"bg-green-500","Low Stock":"bg-orange-500","Out of Stock":"bg-red-500"};return r.jsx("span",{className:`px-2 py-1 rounded text-white text-xs ${m[t.status]}`,children:t.status})}return String(t[c.key]??"")},striped:!0,bordered:!0,hover:!0,searchable:!0,sortable:!0,pageSize:5})]})}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData,
    striped: true
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData,
    bordered: true
  }
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData,
    hover: true
  }
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData,
    searchable: true
  }
}`,...C.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData,
    sortable: true
  }
}`,...A.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: Array.from({
      length: 25
    }, (_, i) => ({
      id: i + 1,
      name: \`User \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      role: i % 3 === 0 ? 'Admin' : i % 2 === 0 ? 'Moderator' : 'User'
    })),
    pageSize: 10
  }
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: Array.from({
      length: 50
    }, (_, i) => ({
      id: i + 1,
      name: \`User \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      role: i % 3 === 0 ? 'Admin' : i % 2 === 0 ? 'Moderator' : 'User'
    })),
    striped: true,
    bordered: true,
    hover: true,
    searchable: true,
    sortable: true,
    pageSize: 10
  }
}`,...j.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData,
    pageSize: 2,
    striped: true
  }
}`,...D.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: []
  }
}`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const customColumns: TableColumn<User>[] = [{
      key: 'id',
      header: 'ID',
      width: '80px'
    }, {
      key: 'name',
      header: 'Name'
    }, {
      key: 'email',
      header: 'Email'
    }, {
      key: 'role',
      header: 'Role'
    }, {
      key: 'actions',
      header: 'Actions',
      width: '150px'
    }];
    return <PaginationTable columns={customColumns} data={sampleData} renderCell={(row, column) => {
      if (column.key === 'actions') {
        return <div className="flex gap-2">
                                <button className="text-blue-600 hover:text-blue-800">Edit</button>
                                <button className="text-red-600 hover:text-red-800">Delete</button>
                            </div>;
      }
      if (column.key === 'role') {
        const colorMap: Record<string, string> = {
          Admin: 'bg-red-500',
          Moderator: 'bg-orange-500',
          User: 'bg-blue-500'
        };
        const role = row[column.key] as string;
        return <span className={\`px-2 py-1 rounded text-white text-xs \${colorMap[role]}\`}>{role}</span>;
      }
      return String(row[column.key as keyof User] ?? '');
    }} striped hover />;
  }
}`,...E.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleRowClick = (row: User) => {
      alert(\`Clicked on \${row.name}\`);
    };
    return <PaginationTable columns={columns} data={sampleData} onRowClick={handleRowClick} hover striped />;
  }
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    interface Product {
      id: number;
      name: string;
      category: string;
      price: number;
      stock: number;
      status: string;
    }
    const products: Product[] = [{
      id: 1,
      name: 'Laptop',
      category: 'Electronics',
      price: 999,
      stock: 15,
      status: 'Active'
    }, {
      id: 2,
      name: 'Mouse',
      category: 'Accessories',
      price: 29,
      stock: 50,
      status: 'Active'
    }, {
      id: 3,
      name: 'Keyboard',
      category: 'Accessories',
      price: 79,
      stock: 30,
      status: 'Active'
    }, {
      id: 4,
      name: 'Monitor',
      category: 'Electronics',
      price: 299,
      stock: 8,
      status: 'Low Stock'
    }, {
      id: 5,
      name: 'Headphones',
      category: 'Accessories',
      price: 149,
      stock: 0,
      status: 'Out of Stock'
    }, {
      id: 6,
      name: 'Webcam',
      category: 'Electronics',
      price: 89,
      stock: 25,
      status: 'Active'
    }, {
      id: 7,
      name: 'USB Cable',
      category: 'Accessories',
      price: 9,
      stock: 100,
      status: 'Active'
    }, {
      id: 8,
      name: 'External SSD',
      category: 'Storage',
      price: 199,
      stock: 12,
      status: 'Active'
    }];
    const productColumns: TableColumn<Product>[] = [{
      key: 'id',
      header: 'ID',
      width: '60px'
    }, {
      key: 'name',
      header: 'Product Name'
    }, {
      key: 'category',
      header: 'Category',
      width: '150px'
    }, {
      key: 'price',
      header: 'Price',
      width: '100px'
    }, {
      key: 'stock',
      header: 'Stock',
      width: '100px'
    }, {
      key: 'status',
      header: 'Status',
      width: '120px'
    }];
    return <div className="space-y-4">
                <h2 className="text-2xl font-bold">Product Inventory</h2>
                <PaginationTable columns={productColumns} data={products} renderCell={(row, column) => {
        if (column.key === 'price') {
          return \`$\${row.price}\`;
        }
        if (column.key === 'status') {
          const colorMap: Record<string, string> = {
            Active: 'bg-green-500',
            'Low Stock': 'bg-orange-500',
            'Out of Stock': 'bg-red-500'
          };
          return <span className={\`px-2 py-1 rounded text-white text-xs \${colorMap[row.status]}\`}>
                                    {row.status}
                                </span>;
        }
        return String(row[column.key as keyof Product] ?? '');
      }} striped bordered hover searchable sortable pageSize={5} />
            </div>;
  }
}`,...M.parameters?.docs?.source}}};const le=["Default","Striped","Bordered","Hover","Searchable","Sortable","WithPagination","AllFeatures","SmallPageSize","EmptyTable","CustomRendering","ClickableRows","CompleteExample"];export{j as AllFeatures,v as Bordered,P as ClickableRows,M as CompleteExample,E as CustomRendering,w as Default,R as EmptyTable,T as Hover,C as Searchable,D as SmallPageSize,A as Sortable,S as Striped,N as WithPagination,le as __namedExportsOrder,ie as default};
