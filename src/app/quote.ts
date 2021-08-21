export class Quote {
    showDescription:boolean;
    constructor(public quote:string,public quoteAuthor:string,public upVote:number,public downVote:number){
        this.showDescription=false;
    }
    // quote:string;
    // quoteAuthor:string;
}
