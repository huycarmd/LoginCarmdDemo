import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "changeLink"
})
export class ChangeLinkYoutubePipe implements PipeTransform {
    transform(link : string) : string {
        console.log(link)
        console.log(this.getIDfromURL(link))
        // if (link == "https://www.youtube.com/watch?v=H9_CC3CCGyo") {
        //     return "https://www.youtube.com/embed/H9_CC3CCGyo"
        // }
        // return link.replace("https://youtu.be/", "https://www.youtube.com/embed/")
        return "https://www.youtube.com/embed/" + this.getIDfromURL(link)
    }

    getIDfromURL(url : string) {
        const regExp =
          /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        if (match && match[2].length === 11) {
          return match[2];
        }
        console.log('The supplied URL is not a valid youtube URL');
        return '';
      }
    
}