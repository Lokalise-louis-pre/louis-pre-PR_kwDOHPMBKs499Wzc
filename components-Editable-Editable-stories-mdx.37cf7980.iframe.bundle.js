"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[2239],{"./src/components/Popover/Popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Popover});var react=__webpack_require__("./node_modules/react/index.js"),usePopper=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),index_esm=__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js"),useOnClickOutside=__webpack_require__("./src/utils/hooks/useOnClickOutside.ts"),reach_portal_esm=__webpack_require__("./node_modules/@reach/portal/dist/reach-portal.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PopoverWrapper=_ref=>{let{inPortal=!1,children}=_ref;return inPortal?(0,jsx_runtime.jsx)(reach_portal_esm.Z,{children}):children};PopoverWrapper.displayName="PopoverWrapper";try{PopoverWrapper.displayName="PopoverWrapper",PopoverWrapper.__docgenInfo={description:"",displayName:"PopoverWrapper",props:{inPortal:{defaultValue:{value:"false"},description:"",name:"inPortal",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/PopoverWrapper.tsx#PopoverWrapper"]={docgenInfo:PopoverWrapper.__docgenInfo,name:"PopoverWrapper",path:"src/components/Popover/PopoverWrapper.tsx#PopoverWrapper"})}catch(__react_docgen_typescript_loader_error){}const setRef=(value,ref)=>{"function"==typeof ref?ref(value):ref&&(ref.current=value)};var styles=__webpack_require__("./src/components/Popover/styles.ts");const isEventTriggeredInContainer=(e,container)=>!container||container.contains(e.currentTarget),getHandlers=(referenceElement,visible,setVisible,triggerEvent,delay)=>{if("hover"===triggerEvent){let timer;const delayVisibility=isVisible=>{isVisible&&(timer=setTimeout((()=>setVisible(!0)),250))},checktimer=()=>{timer&&clearTimeout(timer)},checkDelay=()=>{delay?delayVisibility(!0):setVisible(!0)};return{onPointerEnter:e=>{isEventTriggeredInContainer(e,referenceElement)&&checkDelay()},onPointerLeave:e=>{isEventTriggeredInContainer(e,referenceElement)&&setVisible(!1),checktimer()},onFocus:e=>isEventTriggeredInContainer(e,referenceElement)&&setVisible(!0),onBlur:()=>setVisible(!1)}}return{onClick:e=>{document.body.click(),e.stopPropagation(),e.preventDefault(),setVisible(!visible)},onTouchStart:e=>{e.stopPropagation(),e.preventDefault(),setVisible(!visible)},onKeyDown:(isVisible=visible,onSetIsVisible=setVisible,e=>{"Tab"===e.key&&(e.stopPropagation(),onSetIsVisible(!1)),"Escape"===e.key&&(e.stopPropagation(),onSetIsVisible(!1)),"Enter"!==e.key&&" "!==e.key||(e.stopPropagation(),e.preventDefault(),onSetIsVisible(!isVisible))})};var isVisible,onSetIsVisible},Popover=_ref=>{let{placement="bottom",popoverContent,triggerEvent="click",delay=!1,children,components:{Arrow=styles.E,Content=styles.V}={},modifiers=[],offset,withArrow=!1,visibleCallback,showPopover=!0,forceVisible=!1,inPortal=!1,...rest}=_ref;const[visible,setVisible]=(0,react.useState)(forceVisible),[referenceElement,setReferenceElement]=(0,react.useState)(null),[popperElement,setPopperElement]=(0,react.useState)(null),[arrowElement,setArrowElement]=(0,react.useState)(null),popper=(0,usePopper.D)(referenceElement,popperElement,{placement,modifiers:[{name:"arrow",options:{element:arrowElement,padding:5}},{name:"offset",options:{offset:[0,withArrow?10:4*(offset??0)]}},...modifiers]});(0,react.useEffect)((()=>{forceVisible&&setVisible(!0)}),[forceVisible,setVisible]);const onClickOutside=(0,react.useCallback)((()=>{"hover"!==triggerEvent&&setVisible(!1)}),[triggerEvent]);(0,useOnClickOutside.t)(popperElement,onClickOutside),(0,react.useEffect)((()=>{visibleCallback&&visibleCallback(visible)}),[visible]);const updatePopper=(0,react.useCallback)((()=>{popper.update&&popper.update()}),[popper]),popperElementRefObject=(0,react.useRef)(popperElement);popperElementRefObject.current=popperElement,(0,index_esm.NB)({targetRef:popperElementRefObject,onResize:updatePopper});const getChildrenProps=(props,ref)=>{return{...props,ref:(newRef=setReferenceElement,parentRef=ref,el=>{setRef(el,newRef),parentRef&&setRef(el,parentRef)}),...getHandlers(referenceElement,visible,setVisible,triggerEvent,delay)};var newRef,parentRef};let clone=null;const resolvedChildren="function"==typeof children?children(visible):children;if("string"==typeof resolvedChildren||"number"==typeof children)clone=(0,jsx_runtime.jsx)("span",{...getChildrenProps(),children:resolvedChildren});else{if(!(0,react.isValidElement)(resolvedChildren))throw new Error("Should pass only single element as the child");clone=(0,react.cloneElement)(resolvedChildren,getChildrenProps(resolvedChildren.props,resolvedChildren.ref))}const contentElement="function"==typeof popoverContent?popoverContent(setVisible):popoverContent,popperPlacement=popper.attributes?.popper?.["data-popper-placement"]??"bottom";return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[clone,visible&&showPopover&&contentElement&&(0,jsx_runtime.jsx)(PopoverWrapper,{inPortal,children:(0,jsx_runtime.jsxs)(Content,{ref:setPopperElement,...popper.attributes.popper,style:popper.styles.popper,...rest,onKeyDown:e=>{"Escape"===e.key&&(e.stopPropagation(),setVisible(!1))},children:[contentElement,withArrow&&(0,jsx_runtime.jsx)(Arrow,{ref:setArrowElement,style:popper.styles.arrow,placement:popperPlacement})]})})]})};Popover.displayName="Popover";try{Popover.displayName="Popover",Popover.__docgenInfo={description:"",displayName:"Popover",props:{placement:{defaultValue:{value:"bottom"},description:"Determines where the popover should appear relative to the child element.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"top"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},popoverContent:{defaultValue:null,description:"Renders text content and / or any HTML node in the popover.",name:"popoverContent",required:!1,type:{name:"ReactNode | ((setVisible: (opened: boolean) => void) => ReactNode)"}},triggerEvent:{defaultValue:{value:"click"},description:"Determines whether the popover should appear on hover or click.",name:"triggerEvent",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'}]}},modifiers:{defaultValue:{value:"[]"},description:"Sets custom popperjs modifier objects: https://popper.js.org/docs/v2/modifiers/.",name:"modifiers",required:!1,type:{name:"Record<string, unknown>[]"}},offset:{defaultValue:null,description:"Sets popover offset using theme spacing when rendering without an arrow.",name:"offset",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},children:{defaultValue:null,description:"Renders text content or any HTML node to attach the popover to.",name:"children",required:!0,type:{name:"ReactChild | ((visible: boolean) => ReactChild)"}},components:{defaultValue:null,description:"Overrides the default Arrow and Content components to render the popover.",name:"components",required:!1,type:{name:"Partial<Components>"}},withArrow:{defaultValue:{value:"false"},description:"Toggles an arrow pointing to the attached element.",name:"withArrow",required:!1,type:{name:"boolean"}},showPopover:{defaultValue:{value:"true"},description:"Toggles the visibility of the popover.",name:"showPopover",required:!1,type:{name:"boolean"}},forceVisible:{defaultValue:{value:"false"},description:"Toggles whether the popover is visible without user interaction.",name:"forceVisible",required:!1,type:{name:"boolean"}},inPortal:{defaultValue:{value:"false"},description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the popover.",name:"inPortal",required:!1,type:{name:"boolean"}},visibleCallback:{defaultValue:null,description:"Function executed when the visibility of the popover changes.",name:"visibleCallback",required:!1,type:{name:"((visible: boolean) => void)"}},delay:{defaultValue:{value:"false"},description:"Toggles delayed appearance of the popover when `triggerEvent` is 'hover'.",name:"delay",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"src/components/Popover/Popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Popover/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Arrow,V:()=>Content});var _utils_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/zIndex.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/theme/color.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/theme/variants.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/theme/radius.ts");const bottom=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    top: -5px;

    &::before {
        border-left-width: 1px;
        border-left-style: solid;
        border-top-width: 1px;
        border-top-style: solid;
    }
`,top=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    bottom: -5px;

    &::before {
        border-right-width: 1px;
        border-right-style: solid;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }
`,left=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    right: -5px;

    &::before {
        border-right-width: 1px;
        border-right-style: solid;
        border-top-width: 1px;
        border-top-style: solid;
    }
`,right=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    left: -5px;

    &::before {
        border-left-width: 1px;
        border-left-style: solid;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }
`,Arrow=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
    position: absolute;
    width: 8px;
    height: 8px;
    z-index: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.W)("hide")};

    &::before {
        position: absolute;
        width: 8px;
        height: 8px;
        z-index: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.W)("hide")};
        content: '';
        display: block;
        transform: rotate(45deg);
        background-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("background.primary")};
        border-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("border.primary")};
    }

    ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_3__.o)("placement",{top,bottom,left,right,"right-end":right,"right-start":right,"left-start":left,"auto-end":_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,"auto-start":_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,auto:_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,"bottom-end":bottom,"bottom-start":bottom,"left-end":left,"top-end":top,"top-start":top},"auto")}
`,Content=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
    padding: 0;
    border-radius: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.q)("md")};
    background-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("background.primary")};
    border: 1px solid ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("border.primary")};
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    z-index: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.W)("popover")};
    color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("content.primary")};
    font-weight: 400;
`},"./src/foundations/icons/Done.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Done});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Done=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.y$,{d:"M8.30471 12.667 4.48362 8.84592 3.32404 10.0165l4.99171 4.9918L16.234 7.0679l-1.1706-1.17062L8.30471 12.667Z"})})};Done.displayName="Done";try{Done.displayName="Done",Done.__docgenInfo={description:"",displayName:"Done",props:{color:{defaultValue:null,description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.300"'},{value:'"primary.200"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.300"'},{value:'"red.200"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.300"'},{value:'"green.200"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.300"'},{value:'"yellow.200"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"background.input"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.disabled"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'},{value:'"inherit"'}]}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Done.tsx#Done"]={docgenInfo:Done.__docgenInfo,name:"Done",path:"src/foundations/icons/Done.tsx#Done"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/hooks/useOnClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useOnClickOutside});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useOnClickOutside=function(element,callback){let isActive=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const listener=event=>{element&&!element.contains(event.target)&&callback?.(event)},container=element?.closest("reach-portal");return isActive&&(container?.addEventListener("click",listener),container?.addEventListener("touchstart",listener),document.addEventListener("click",listener),document.addEventListener("touchstart",listener)),()=>{container?.removeEventListener("click",listener),container?.removeEventListener("touchstart",listener),document.removeEventListener("click",listener),document.removeEventListener("touchstart",listener)}}),[element,callback,isActive])}},"./src/utils/theme/zIndex.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>zIndex});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const zIndex=index=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(index,theme.zIndices)))},"./src/components/Editable/Editable.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Editable_stories,defaultStory:()=>defaultStory,disabled:()=>disabled,emptyText:()=>emptyText});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),hooks=__webpack_require__("./node_modules/@storybook/addons/dist/esm/hooks.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),typography=__webpack_require__("./src/utils/theme/typography.ts"),Close=__webpack_require__("./src/foundations/icons/Close.tsx"),Done=__webpack_require__("./src/foundations/icons/Done.tsx"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),Input=__webpack_require__("./src/components/Input/Input.tsx"),Popover=__webpack_require__("./src/components/Popover/Popover.tsx"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),color=__webpack_require__("./src/utils/theme/color.ts");const Container=styled_components_browser_esm.ZP.div`
    padding: ${(0,spacing.W)(4)};
    width: 230px;
    display: grid;
    gap: ${(0,spacing.W)(2)};
`,Trigger=styled_components_browser_esm.ZP.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: inherit;
    font-weight: inherit;
    font-style: inherit;
    color: inherit;
`,Empty=styled_components_browser_esm.ZP.span`
    color: ${(0,color.$)("red.600")};
    font-style: italic;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Editable=_ref=>{let{value,placeholder,label,emptyText="Empty",onChange,disabled=!1}=_ref;const[internalValue,setInternalValue]=(0,react.useState)(value),[emptyError,setEmptyError]=(0,react.useState)(!1);(0,react.useEffect)((()=>{setInternalValue(value)}),[value]);return(0,jsx_runtime.jsx)(Popover.J,{placement:"top",withArrow:!0,popoverContent:setVisible=>(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Input.I,{"aria-label":label,placeholder,value:internalValue,error:emptyError,onValueChange:newValue=>{setInternalValue(newValue)}}),(0,jsx_runtime.jsxs)(Flex.k,{gap:2,justify:"flex-end",children:[(0,jsx_runtime.jsx)(IconButton.h,{ariaLabel:"Cancel",appearance:"primary",onClick:()=>setVisible(!1),children:(0,jsx_runtime.jsx)(Close.x,{})}),(0,jsx_runtime.jsx)(IconButton.h,{ariaLabel:"Save",appearance:"primary",onClick:()=>(setVisible=>{setEmptyError(!internalValue),internalValue&&(onChange(internalValue),setVisible(!1))})(setVisible),disabled,children:(0,jsx_runtime.jsx)(Done.y,{})})]})]}),children:(0,jsx_runtime.jsx)(Trigger,{type:"button",children:value||!!emptyText&&(0,jsx_runtime.jsx)(Empty,{children:emptyText})})})};Editable.displayName="Editable";try{Editable.displayName="Editable",Editable.__docgenInfo={description:"",displayName:"Editable",props:{value:{defaultValue:null,description:"Renders text content that can be edited.",name:"value",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"Sets a placeholder value in the input field when `value` is an empty string.",name:"placeholder",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Adds accessibility label on the input field.",name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Toggles disabled state of the save button.",name:"disabled",required:!1,type:{name:"boolean"}},emptyText:{defaultValue:{value:"Empty"},description:"Renders text content that can be edited when `value` is an empty string.",name:"emptyText",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Function executed when input is saved.",name:"onChange",required:!0,type:{name:"(value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Editable/Editable.tsx#Editable"]={docgenInfo:Editable.__docgenInfo,name:"Editable",path:"src/components/Editable/Editable.tsx#Editable"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Template=args=>{const{onChange,...rest}=args,[_,updateArgs]=(0,hooks.D8)();return(0,esm.kt)(Editable,_extends({onChange:newValue=>{updateArgs({value:newValue})}},rest,{mdxType:"Editable"}))};Template.displayName="Template";name="StoryContent";var name;const layoutProps={Template};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Components/Editable",component:Editable,parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>{const StoryContent=styled_components_browser_esm.ZP.div`
                font-family: ${(0,fontFamily.I)("default")};
                ${(0,typography.c)("body")};
                padding: 115px 0 0 80px;
            `;return(0,esm.kt)(StoryContent,{mdxType:"StoryContent"},(0,esm.kt)(Story,{mdxType:"Story"}))}],mdxType:"Meta"}),(0,esm.kt)("h1",null,"Editable"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#figma-design-file"},"Figma Design File")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#props"},"Props")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"Editable is used for editing inline text by clicking on the text."),(0,esm.kt)("h3",null,"Installation"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,esm.kt)("h3",null,"Usage"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react';\nimport { Editable } from '@lokalise/louis';\n\nexport default () => {\n    const [value, setValue] = useState();\n    return <Editable value={value} onChange={setValue} />;\n};\n")),(0,esm.kt)("h2",{id:"figma-design-file"},"Figma Design File"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},"Figma Source File | Editable (not yet available in Figma, will be updated)")),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.$4,{of:Editable,sort:"requiredFirst",mdxType:"ArgsTable"}),(0,esm.kt)("h2",{id:"examples"},"Examples"),(0,esm.kt)("h3",null,"Default"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Default",args:{value:"Editable text"},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h3",null,"Empty Text"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Empty Text",args:{value:"",emptyText:"This Editable has an empty string as the value",placeholder:"Enter text"},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h3",null,"Disabled"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Disabled",args:{value:"Disabled editable text",disabled:!0},mdxType:"Story"},Template.bind({}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={value:"Editable text"},defaultStory.parameters={storySource:{source:"args => {\n  const {\n    onChange,\n    ...rest\n  } = args;\n  const [_, updateArgs] = useArgs();\n\n  const handleChange = newValue => {\n    updateArgs({\n      value: newValue\n    });\n  };\n\n  return <Editable onChange={handleChange} {...rest} />;\n}"}};const emptyText=Template.bind({});emptyText.storyName="Empty Text",emptyText.args={value:"",emptyText:"This Editable has an empty string as the value",placeholder:"Enter text"},emptyText.parameters={storySource:{source:"args => {\n  const {\n    onChange,\n    ...rest\n  } = args;\n  const [_, updateArgs] = useArgs();\n\n  const handleChange = newValue => {\n    updateArgs({\n      value: newValue\n    });\n  };\n\n  return <Editable onChange={handleChange} {...rest} />;\n}"}};const disabled=Template.bind({});disabled.storyName="Disabled",disabled.args={value:"Disabled editable text",disabled:!0},disabled.parameters={storySource:{source:"args => {\n  const {\n    onChange,\n    ...rest\n  } = args;\n  const [_, updateArgs] = useArgs();\n\n  const handleChange = newValue => {\n    updateArgs({\n      value: newValue\n    });\n  };\n\n  return <Editable onChange={handleChange} {...rest} />;\n}"}};const componentMeta={title:"Components/Editable",parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>{const StoryContent=styled_components_browser_esm.ZP.div`
                font-family: ${(0,fontFamily.I)("default")};
                ${(0,typography.c)("body")};
                padding: 115px 0 0 80px;
            `;return(0,esm.kt)(StoryContent,null,(0,esm.kt)(Story,null))}],component:Editable,includeStories:["defaultStory","emptyText","disabled"]},mdxStoryNameToKey={Default:"defaultStory","Empty Text":"emptyText",Disabled:"disabled"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};const Editable_stories=componentMeta,__namedExportsOrder=["Template","defaultStory","emptyText","disabled"]},"./node_modules/react-uid/dist/es2015/hooks.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>useUID,H:()=>useUIDSeed});var react=__webpack_require__("./node_modules/react/index.js"),generateUID=function(){var counter=1,map=new WeakMap,uid=function(item,index){return"number"==typeof item||"string"==typeof item?index?"idx-"+index:"val-"+item:map.has(item)?"uid"+map.get(item):(map.set(item,counter++),uid(item))};return uid},createSource=(generateUID(),function(prefix){return void 0===prefix&&(prefix=""),{value:1,prefix,uid:generateUID()}}),counter=createSource(),source=react.createContext(createSource()),useUIDState=function(){return react.useState(function(context){var quartz=context||counter,prefix=function(source){return source?source.prefix:""}(quartz),id=function(source){return source.value++}(quartz),uid=prefix+id;return{uid,gen:function(item){return uid+quartz.uid(item)}}}(react.useContext(source)))},useUID=function(){return useUIDState()[0].uid},useUIDSeed=function(){return useUIDState()[0].gen}}}]);
//# sourceMappingURL=components-Editable-Editable-stories-mdx.37cf7980.iframe.bundle.js.map