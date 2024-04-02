import { Category } from "../model/Category";

export default function buildLinkFromCategory(category: string){
    return '/category/'+Category.buildId(category)
}