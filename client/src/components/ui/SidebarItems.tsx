import  { ReactElement } from "react";


export function SidebarItems({icon,text,onClick}:{
    icon:ReactElement,
    text:String,
    onClick?: ()=>void
}){
    return  <>
    {/* <Button onClick={onClick} className="w-full"> */}
    <div className="flex space-x-3 hover:bg-slate-200 cursor-pointer rounded-md pl-5 "
    onClick={onClick}>
        <div>{icon}</div>
        <div className="text-lg font-medium text-gray-900 hover:text-purple-300 cursor-pointer">{text}</div>
    </div>
    {/* </Button> */}
    </>
}