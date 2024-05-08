import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import React, { useContext, useEffect, useRef, useState } from "react";
import Resume from "./Resume";
import { ResumeData } from "../contexts/ResumeData";

export default function Reflect() {
  const [width, setWidth] = useState(window.innerWidth);
  const [resume] = useContext(ResumeData);

  //   if (width > 768) {
  const downloadRef = React.createRef();
  useEffect(() => {
    downloadRef.current?.click();
  }, []);
  return (
    <PDFDownloadLink
      document={React.createElement(Resume, { resume })}
      fileName="resume2.pdf"
      ref={downloadRef}
    >
      Download Now
    </PDFDownloadLink>

    // <PDFViewer>
    //   <Resume />
    // </PDFViewer>
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
