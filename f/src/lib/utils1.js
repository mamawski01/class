import { StrPhrase } from "./utils0";

export function documentTitle() {
  const docTitle = StrPhrase.capEach1stLetter(
    location.pathname.split("/").slice(-1),
  )[0];
  //go to index.html, edit the <title></title>
  const documentTitleStr = `${docTitle} | Tiberio Optical`;

  return (document.title = documentTitleStr);
}
