export class Quote {
    showDescription:boolean;
    constructor(public quote:string,public quoteAuthor:string,public upVote:number,public downVote:number,public createdDate:Date){
        this.showDescription=false;
    }
}
