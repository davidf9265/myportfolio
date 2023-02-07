import { CertCard } from "../../components/CertificateCard"

import { Grid } from "@mui/joy"
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export const Certs = ({certificates}) => {
    return (
      <>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ flexGrow: 1 }}
        >
          {certificates.map((certificate, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <CertCard
                img={certificate.img}
                name={certificate.name}
                emitter={certificate.emitter}
                desc="Mikrotik Certified Network Associate"
                date={certificate.end_date}
              />
            </Grid>
          ))}
        </Grid>
      </>
    );
}
