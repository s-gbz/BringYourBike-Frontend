import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "issueNumToStr"
})
export class IssueNumToStrPipe implements PipeTransform {
  transform(value: number): string {
    let issueName = "";

    if (value === 0) { issueName = "Vorderlichtdefekt"; }
    else if (value === 1) { issueName = "Hinterlichtdefekt"; }
    else if (value === 2) { issueName = "Kettendefekt"; }
    else if (value === 3) { issueName = "Vorderraddefekt"; }
    else if (value === 4) { issueName = "Hinterraddefekt"; }
    else if (value === 5) { issueName = "Bremsendefekt"; }
    else if (value === 6) { issueName = "STVO ungeeignet"; }

    return issueName;
  }

}
