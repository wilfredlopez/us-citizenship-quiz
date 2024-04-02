import buildLinkFromCategory from "../utils/buildLinkFromCategory";
import toProperCase from "../utils/toProperCase";

export class Category{
    value:string;
    link:string;
    constructor(value:string){
        this.value = value;
        this.link = buildLinkFromCategory(value)
    }
    static buildId(value:string){
        return value.toLowerCase().split(' ').join('-')
    }
    static idToCategory(id:string){
            return id.split('-').join(' ')
    }
    static idToProperCase(id:string){
        return toProperCase(Category.idToCategory(id))
    }
}

