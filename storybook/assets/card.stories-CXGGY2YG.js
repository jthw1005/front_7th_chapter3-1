import{j as r}from"./iframe-pCu_qHIV.js";import{C as e,a as n,b as a,c as t,d,e as p,f as x}from"./card-ksa8PUyx.js";import{B as s}from"./button-CMutOxu2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./index-DUjkeKZY.js";import"./index-B_jtOnfb.js";const g={title:"UI/Card",component:e,parameters:{layout:"padded"},tags:["autodocs"]},i={render:()=>r.jsx(e,{className:"w-[400px]",children:r.jsx(n,{children:r.jsx("p",{children:"This is a basic card with just content."})})})},o={render:()=>r.jsxs(e,{className:"w-[400px]",children:[r.jsxs(a,{children:[r.jsx(t,{children:"Card Title"}),r.jsx(d,{children:"This is a card description"})]}),r.jsx(n,{children:r.jsx("p",{children:"Card content goes here. This is the main body of the card."})})]})},c={render:()=>r.jsxs(e,{className:"w-[400px]",children:[r.jsxs(a,{children:[r.jsx(t,{children:"Card with Footer"}),r.jsx(d,{children:"This card has a footer with actions"})]}),r.jsx(n,{children:r.jsx("p",{children:"Card content goes here."})}),r.jsxs(p,{className:"gap-2",children:[r.jsx(s,{variant:"secondary",children:"Cancel"}),r.jsx(s,{variant:"primary",children:"Save"})]})]})},C={render:()=>r.jsxs(e,{className:"w-[400px]",children:[r.jsxs(a,{children:[r.jsx(t,{children:"Card with Action"}),r.jsx(d,{children:"This card has an action button in the header"}),r.jsx(x,{children:r.jsx(s,{size:"sm",variant:"secondary",children:"Edit"})})]}),r.jsx(n,{children:r.jsx("p",{children:"The action button appears in the top-right corner of the card header."})})]})},l={render:()=>r.jsxs(e,{className:"w-[400px]",children:[r.jsxs(a,{children:[r.jsx(t,{children:"Complete Card"}),r.jsx(d,{children:"All card components together"}),r.jsx(x,{children:r.jsx(s,{size:"sm",variant:"secondary",children:"Options"})})]}),r.jsx(n,{children:r.jsxs("div",{className:"space-y-2",children:[r.jsx("p",{children:"This card demonstrates all available components:"}),r.jsxs("ul",{className:"list-disc list-inside space-y-1 text-sm",children:[r.jsx("li",{children:"Card Header with Title and Description"}),r.jsx("li",{children:"Card Action in the header"}),r.jsx("li",{children:"Card Content with rich content"}),r.jsx("li",{children:"Card Footer with action buttons"})]})]})}),r.jsxs(p,{className:"gap-2",children:[r.jsx(s,{variant:"secondary",children:"Cancel"}),r.jsx(s,{variant:"primary",children:"Confirm"})]})]})},h={render:()=>r.jsxs("div",{className:"grid grid-cols-2 gap-4 max-w-[900px]",children:[r.jsxs(e,{children:[r.jsxs(a,{children:[r.jsx(t,{children:"First Card"}),r.jsx(d,{children:"Description for first card"})]}),r.jsx(n,{children:r.jsx("p",{children:"Content for the first card"})})]}),r.jsxs(e,{children:[r.jsxs(a,{children:[r.jsx(t,{children:"Second Card"}),r.jsx(d,{children:"Description for second card"})]}),r.jsx(n,{children:r.jsx("p",{children:"Content for the second card"})})]}),r.jsxs(e,{children:[r.jsxs(a,{children:[r.jsx(t,{children:"Third Card"}),r.jsx(d,{children:"Description for third card"})]}),r.jsx(n,{children:r.jsx("p",{children:"Content for the third card"})})]}),r.jsxs(e,{children:[r.jsxs(a,{children:[r.jsx(t,{children:"Fourth Card"}),r.jsx(d,{children:"Description for fourth card"})]}),r.jsx(n,{children:r.jsx("p",{children:"Content for the fourth card"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[400px]">
            <CardContent>
                <p>This is a basic card with just content.</p>
            </CardContent>
        </Card>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[400px]">
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>This is a card description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card content goes here. This is the main body of the card.</p>
            </CardContent>
        </Card>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[400px]">
            <CardHeader>
                <CardTitle>Card with Footer</CardTitle>
                <CardDescription>This card has a footer with actions</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card content goes here.</p>
            </CardContent>
            <CardFooter className="gap-2">
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary">Save</Button>
            </CardFooter>
        </Card>
}`,...c.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[400px]">
            <CardHeader>
                <CardTitle>Card with Action</CardTitle>
                <CardDescription>This card has an action button in the header</CardDescription>
                <CardAction>
                    <Button size="sm" variant="secondary">
                        Edit
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <p>The action button appears in the top-right corner of the card header.</p>
            </CardContent>
        </Card>
}`,...C.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[400px]">
            <CardHeader>
                <CardTitle>Complete Card</CardTitle>
                <CardDescription>All card components together</CardDescription>
                <CardAction>
                    <Button size="sm" variant="secondary">
                        Options
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <p>This card demonstrates all available components:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Card Header with Title and Description</li>
                        <li>Card Action in the header</li>
                        <li>Card Content with rich content</li>
                        <li>Card Footer with action buttons</li>
                    </ul>
                </div>
            </CardContent>
            <CardFooter className="gap-2">
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary">Confirm</Button>
            </CardFooter>
        </Card>
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4 max-w-[900px]">
            <Card>
                <CardHeader>
                    <CardTitle>First Card</CardTitle>
                    <CardDescription>Description for first card</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Content for the first card</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Second Card</CardTitle>
                    <CardDescription>Description for second card</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Content for the second card</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Third Card</CardTitle>
                    <CardDescription>Description for third card</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Content for the third card</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Fourth Card</CardTitle>
                    <CardDescription>Description for fourth card</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Content for the fourth card</p>
                </CardContent>
            </Card>
        </div>
}`,...h.parameters?.docs?.source}}};const v=["Default","WithHeader","WithFooter","WithAction","Complete","MultipleCards"];export{l as Complete,i as Default,h as MultipleCards,C as WithAction,c as WithFooter,o as WithHeader,v as __namedExportsOrder,g as default};
