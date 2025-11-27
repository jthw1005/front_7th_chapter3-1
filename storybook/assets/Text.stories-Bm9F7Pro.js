import{j as e}from"./iframe-P4yGa8fB.js";import{c as S}from"./index-B_jtOnfb.js";import{c as v}from"./utils-CDN07tui.js";import"./preload-helper-PPVm8Dsz.js";const j={heading1:"h1",heading2:"h2",heading3:"h3",heading4:"h4",heading5:"h5",heading6:"h6",subHeading1:"h3",subHeading2:"h5",subHeading3:"h6",title1:"span",title2:"span",body1:"span",body2:"span",caption1:"span",caption2:"span",button1:"span",button2:"span"},B=S("box-border",{variants:{type:{heading1:"text-2xl font-bold -tracking-[0.8px]",heading2:"text-xl font-bold -tracking-[0.72px]",heading3:"text-lg font-bold -tracking-[0.56px]",heading4:"text-base font-bold -tracking-[0.48px]",heading5:"text-base font-bold -tracking-[0.4px]",heading6:"text-base font-bold -tracking-[0.36px]",subHeading1:"text-3xl font-medium -tracking-[0.56px]",subHeading2:"text-xl font-medium -tracking-[0.4px]",subHeading3:"text-lg font-medium -tracking-[0.36px]",title1:"text-base font-bold -tracking-[0.32px]",title2:"text-sm font-bold -tracking-[0.28px]",body1:"text-base font-normal -tracking-[0.32px]",body2:"text-sm font-normal -tracking-[0.28px]",caption1:"text-xs font-normal -tracking-[0.24px]",caption2:"text-[0.625rem] font-normal -tracking-[0.2px]",button1:"text-base font-medium -tracking-[0.32px]",button2:"text-sm font-medium -tracking-[0.28px]"}},defaultVariants:{type:"body2"}}),t=({textType:u="body2",className:h,children:b})=>{const H=j[u];return e.jsx(H,{className:v(B({type:u}),h),children:b})};t.__docgenInfo={description:"",methods:[],displayName:"Text",props:{textType:{required:!1,tsType:{name:"union",raw:`| 'heading1'
| 'heading2'
| 'heading3'
| 'heading4'
| 'heading5'
| 'heading6'
| 'subHeading1'
| 'subHeading2'
| 'subHeading3'
| 'title1'
| 'title2'
| 'body1'
| 'body2'
| 'caption1'
| 'caption2'
| 'button1'
| 'button2'`,elements:[{name:"literal",value:"'heading1'"},{name:"literal",value:"'heading2'"},{name:"literal",value:"'heading3'"},{name:"literal",value:"'heading4'"},{name:"literal",value:"'heading5'"},{name:"literal",value:"'heading6'"},{name:"literal",value:"'subHeading1'"},{name:"literal",value:"'subHeading2'"},{name:"literal",value:"'subHeading3'"},{name:"literal",value:"'title1'"},{name:"literal",value:"'title2'"},{name:"literal",value:"'body1'"},{name:"literal",value:"'body2'"},{name:"literal",value:"'caption1'"},{name:"literal",value:"'caption2'"},{name:"literal",value:"'button1'"},{name:"literal",value:"'button2'"}]},description:"",defaultValue:{value:"'body2'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const A={title:"Shared/Text",component:t,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{textType:{control:"select",options:["heading1","heading2","heading3","heading4","heading5","heading6","subHeading1","subHeading2","subHeading3","title1","title2","body1","body2","caption1","caption2","button1","button2"],description:"Text typography type"}}},a={args:{textType:"heading1",children:"Heading 1 - Large Title"}},n={args:{textType:"heading2",children:"Heading 2 - Section Title"}},i={args:{textType:"heading3",children:"Heading 3 - Subsection Title"}},s={args:{textType:"subHeading1",children:"SubHeading 1 - Large Subtitle"}},r={args:{textType:"title1",children:"Title 1 - Component Title"}},d={args:{textType:"body1",children:"Body 1 - Regular paragraph text for main content"}},o={args:{textType:"body2",children:"Body 2 - Smaller paragraph text for secondary content"}},l={args:{textType:"caption1",children:"Caption 1 - Small helper text"}},p={args:{textType:"caption2",children:"Caption 2 - Smallest helper text"}},x={args:{textType:"button1",children:"Button 1 - Large Button Text"}},c={args:{textType:"button2",children:"Button 2 - Small Button Text"}},g={args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{textType:"heading1",children:"Heading 1 - 24px Bold"}),e.jsx(t,{textType:"heading2",children:"Heading 2 - 20px Bold"}),e.jsx(t,{textType:"heading3",children:"Heading 3 - 18px Bold"}),e.jsx(t,{textType:"heading4",children:"Heading 4 - 16px Bold"}),e.jsx(t,{textType:"heading5",children:"Heading 5 - 16px Bold"}),e.jsx(t,{textType:"heading6",children:"Heading 6 - 16px Bold"})]})},T={args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{textType:"subHeading1",children:"SubHeading 1 - 28px Medium"}),e.jsx(t,{textType:"subHeading2",children:"SubHeading 2 - 20px Medium"}),e.jsx(t,{textType:"subHeading3",children:"SubHeading 3 - 18px Medium"})]})},m={args:{},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{textType:"title1",children:"Title 1 - 16px Bold"}),e.jsx(t,{textType:"title2",children:"Title 2 - 14px Bold"}),e.jsx(t,{textType:"body1",children:"Body 1 - 16px Regular - Lorem ipsum dolor sit amet"}),e.jsx(t,{textType:"body2",children:"Body 2 - 14px Regular - Lorem ipsum dolor sit amet"}),e.jsx(t,{textType:"caption1",children:"Caption 1 - 12px Regular - Small helper text"}),e.jsx(t,{textType:"caption2",children:"Caption 2 - 10px Regular - Smallest helper text"})]})},y={args:{},render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"border-b pb-4",children:[e.jsx(t,{textType:"heading1",className:"mb-2",children:"Typography Scale"}),e.jsx(t,{textType:"body2",className:"text-gray-600",children:"All available text types in the design system"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(t,{textType:"caption1",className:"text-gray-500 mb-1",children:"HEADINGS"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{textType:"heading1",children:"Heading 1"}),e.jsx(t,{textType:"heading2",children:"Heading 2"}),e.jsx(t,{textType:"heading3",children:"Heading 3"}),e.jsx(t,{textType:"heading4",children:"Heading 4"})]})]}),e.jsxs("div",{children:[e.jsx(t,{textType:"caption1",className:"text-gray-500 mb-1",children:"SUBHEADINGS"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{textType:"subHeading1",children:"SubHeading 1"}),e.jsx(t,{textType:"subHeading2",children:"SubHeading 2"}),e.jsx(t,{textType:"subHeading3",children:"SubHeading 3"})]})]}),e.jsxs("div",{children:[e.jsx(t,{textType:"caption1",className:"text-gray-500 mb-1",children:"TITLES"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{textType:"title1",children:"Title 1"}),e.jsx(t,{textType:"title2",children:"Title 2"})]})]}),e.jsxs("div",{children:[e.jsx(t,{textType:"caption1",className:"text-gray-500 mb-1",children:"BODY & CAPTIONS"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{textType:"body1",children:"Body 1 - Regular paragraph text"}),e.jsx(t,{textType:"body2",children:"Body 2 - Secondary text"}),e.jsx(t,{textType:"caption1",children:"Caption 1 - Helper text"}),e.jsx(t,{textType:"caption2",children:"Caption 2 - Smallest text"})]})]}),e.jsxs("div",{children:[e.jsx(t,{textType:"caption1",className:"text-gray-500 mb-1",children:"BUTTON TEXT"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{textType:"button1",children:"Button 1 - Large"}),e.jsx(t,{textType:"button2",children:"Button 2 - Small"})]})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    textType: 'heading1',
    children: 'Heading 1 - Large Title'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    textType: 'heading2',
    children: 'Heading 2 - Section Title'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    textType: 'heading3',
    children: 'Heading 3 - Subsection Title'
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    textType: 'subHeading1',
    children: 'SubHeading 1 - Large Subtitle'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    textType: 'title1',
    children: 'Title 1 - Component Title'
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    textType: 'body1',
    children: 'Body 1 - Regular paragraph text for main content'
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    textType: 'body2',
    children: 'Body 2 - Smaller paragraph text for secondary content'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    textType: 'caption1',
    children: 'Caption 1 - Small helper text'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    textType: 'caption2',
    children: 'Caption 2 - Smallest helper text'
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    textType: 'button1',
    children: 'Button 1 - Large Button Text'
  }
}`,...x.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    textType: 'button2',
    children: 'Button 2 - Small Button Text'
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="space-y-4">
            <Text textType="heading1">Heading 1 - 24px Bold</Text>
            <Text textType="heading2">Heading 2 - 20px Bold</Text>
            <Text textType="heading3">Heading 3 - 18px Bold</Text>
            <Text textType="heading4">Heading 4 - 16px Bold</Text>
            <Text textType="heading5">Heading 5 - 16px Bold</Text>
            <Text textType="heading6">Heading 6 - 16px Bold</Text>
        </div>
}`,...g.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="space-y-4">
            <Text textType="subHeading1">SubHeading 1 - 28px Medium</Text>
            <Text textType="subHeading2">SubHeading 2 - 20px Medium</Text>
            <Text textType="subHeading3">SubHeading 3 - 18px Medium</Text>
        </div>
}`,...T.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="space-y-4">
            <Text textType="title1">Title 1 - 16px Bold</Text>
            <Text textType="title2">Title 2 - 14px Bold</Text>
            <Text textType="body1">Body 1 - 16px Regular - Lorem ipsum dolor sit amet</Text>
            <Text textType="body2">Body 2 - 14px Regular - Lorem ipsum dolor sit amet</Text>
            <Text textType="caption1">Caption 1 - 12px Regular - Small helper text</Text>
            <Text textType="caption2">Caption 2 - 10px Regular - Smallest helper text</Text>
        </div>
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="space-y-6">
            <div className="border-b pb-4">
                <Text textType="heading1" className="mb-2">
                    Typography Scale
                </Text>
                <Text textType="body2" className="text-gray-600">
                    All available text types in the design system
                </Text>
            </div>

            <div className="space-y-4">
                <div>
                    <Text textType="caption1" className="text-gray-500 mb-1">
                        HEADINGS
                    </Text>
                    <div className="space-y-2">
                        <Text textType="heading1">Heading 1</Text>
                        <Text textType="heading2">Heading 2</Text>
                        <Text textType="heading3">Heading 3</Text>
                        <Text textType="heading4">Heading 4</Text>
                    </div>
                </div>

                <div>
                    <Text textType="caption1" className="text-gray-500 mb-1">
                        SUBHEADINGS
                    </Text>
                    <div className="space-y-2">
                        <Text textType="subHeading1">SubHeading 1</Text>
                        <Text textType="subHeading2">SubHeading 2</Text>
                        <Text textType="subHeading3">SubHeading 3</Text>
                    </div>
                </div>

                <div>
                    <Text textType="caption1" className="text-gray-500 mb-1">
                        TITLES
                    </Text>
                    <div className="space-y-2">
                        <Text textType="title1">Title 1</Text>
                        <Text textType="title2">Title 2</Text>
                    </div>
                </div>

                <div>
                    <Text textType="caption1" className="text-gray-500 mb-1">
                        BODY & CAPTIONS
                    </Text>
                    <div className="space-y-2">
                        <Text textType="body1">Body 1 - Regular paragraph text</Text>
                        <Text textType="body2">Body 2 - Secondary text</Text>
                        <Text textType="caption1">Caption 1 - Helper text</Text>
                        <Text textType="caption2">Caption 2 - Smallest text</Text>
                    </div>
                </div>

                <div>
                    <Text textType="caption1" className="text-gray-500 mb-1">
                        BUTTON TEXT
                    </Text>
                    <div className="space-y-2">
                        <Text textType="button1">Button 1 - Large</Text>
                        <Text textType="button2">Button 2 - Small</Text>
                    </div>
                </div>
            </div>
        </div>
}`,...y.parameters?.docs?.source}}};const L=["Heading1","Heading2","Heading3","SubHeading1","Title1","Body1","Body2","Caption1","Caption2","Button1","Button2","AllHeadings","AllSubHeadings","AllBodyText","TypographyScale"];export{m as AllBodyText,g as AllHeadings,T as AllSubHeadings,d as Body1,o as Body2,x as Button1,c as Button2,l as Caption1,p as Caption2,a as Heading1,n as Heading2,i as Heading3,s as SubHeading1,r as Title1,y as TypographyScale,L as __namedExportsOrder,A as default};
