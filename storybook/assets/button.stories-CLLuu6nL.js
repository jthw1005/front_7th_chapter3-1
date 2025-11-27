import{j as r}from"./iframe-DVpgd6GW.js";import{B as a}from"./button-CTVYAtqs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-2_lsYUO1.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";const h={title:"UI/Button",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","danger","success"],description:"Button variant style"},size:{control:"select",options:["sm","md","lg"],description:"Button size"},disabled:{control:"boolean",description:"Disabled state"},fullWidth:{control:"boolean",description:"Full width button"}}},e={args:{children:"Primary Button",variant:"primary",size:"md"}},n={args:{children:"Secondary Button",variant:"secondary",size:"md"}},s={args:{children:"Danger Button",variant:"danger",size:"md"}},t={args:{children:"Success Button",variant:"success",size:"md"}},i={args:{children:"Small Button",variant:"primary",size:"sm"}},o={args:{children:"Medium Button",variant:"primary",size:"md"}},d={args:{children:"Large Button",variant:"primary",size:"lg"}},c={args:{children:"Disabled Button",variant:"primary",size:"md",disabled:!0}},l={args:{children:"Full Width Button",variant:"primary",size:"md",fullWidth:!0},parameters:{layout:"padded"}},m={render:()=>r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsxs("div",{className:"flex gap-2",children:[r.jsx(a,{variant:"primary",children:"Primary"}),r.jsx(a,{variant:"secondary",children:"Secondary"}),r.jsx(a,{variant:"danger",children:"Danger"}),r.jsx(a,{variant:"success",children:"Success"})]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx(a,{variant:"primary",size:"sm",children:"Small"}),r.jsx(a,{variant:"primary",size:"md",children:"Medium"}),r.jsx(a,{variant:"primary",size:"lg",children:"Large"})]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx(a,{variant:"primary",disabled:!0,children:"Disabled"}),r.jsx(a,{variant:"secondary",disabled:!0,children:"Disabled"})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'md'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Danger Button',
    variant: 'danger',
    size: 'md'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Success Button',
    variant: 'success',
    size: 'md'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'sm'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Medium Button',
    variant: 'primary',
    size: 'md'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'lg'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'md',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Button',
    variant: 'primary',
    size: 'md',
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <div className="flex gap-2">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="success">Success</Button>
            </div>
            <div className="flex gap-2">
                <Button variant="primary" size="sm">
                    Small
                </Button>
                <Button variant="primary" size="md">
                    Medium
                </Button>
                <Button variant="primary" size="lg">
                    Large
                </Button>
            </div>
            <div className="flex gap-2">
                <Button variant="primary" disabled>
                    Disabled
                </Button>
                <Button variant="secondary" disabled>
                    Disabled
                </Button>
            </div>
        </div>
}`,...m.parameters?.docs?.source}}};const S=["Primary","Secondary","Danger","Success","Small","Medium","Large","Disabled","FullWidth","AllVariants"];export{m as AllVariants,s as Danger,c as Disabled,l as FullWidth,d as Large,o as Medium,e as Primary,n as Secondary,i as Small,t as Success,S as __namedExportsOrder,h as default};
