import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import Resume from "./Resume";

export default function Reflect() {
  const [width, setWidth] = useState(window.innerWidth);

  //   if (width > 768) {
  return (
    <PDFViewer>
      <Resume />
    </PDFViewer>
  );
  //   }
  //   } else {
  //     return (
  //       <>
  //         <BlobProvider document={<Resume />} fileName="Resume.pdf">
  //           {({ blob, url, loading, error }) =>
  //             loading ? "loading ..." : <Resume />
  //           }
  //         </BlobProvider>
  //       </>
  //     );
  //   }
}
