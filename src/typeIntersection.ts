type Draggable = {
    drag: ()=> void;
}
type Resizable = {
    resize: ()=> void;
}
type UIWidget = Draggable & Resizable;

let text: UIWidget = {
    drag: ()=>{},
    resize: ()=>{}
}