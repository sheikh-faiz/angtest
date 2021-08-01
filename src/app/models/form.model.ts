export interface FormJson{
    type: string;
    placeholder: string;
    id: string;
    class: string;
    name: string;
    text: string;
    value: string;
    fieldValue?: string;
    uniqueId?: string;
}
export interface FormList{
    id:string;
    name:string;
    data:string;
}