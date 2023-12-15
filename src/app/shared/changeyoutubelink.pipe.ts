import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "changeLink"
})
export class ChangeLinkYoutubePipe implements PipeTransform {
    transform(link : string) : string {
        console.log(link)
        if (link == "https://www.youtube.com/watch?v=H9_CC3CCGyo") {
            return "https://www.youtube.com/embed/H9_CC3CCGyo"
        }
        return link.replace("https://youtu.be/", "https://www.youtube.com/embed/")
    }
    
}