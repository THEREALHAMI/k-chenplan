interface IAjaxAdapter{
    get(url:string, successCallback: (data: any) => void): void;
    post(data: any, successCallback: (any) => void): void;
    put(data:any, successCallback : (any)=> void): void;
    delete(id: number, successCallBack : (any)=> void): void;
}

interface IEmployee{
    firstname:string;
    lastname :string;
    compleity :number;
    floor:number;
    id:number;
}


