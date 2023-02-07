import React from 'react';
import "./style.css";
import { AspectRatio, Card, CardOverflow, Typography, Divider } from '@mui/joy';
import { Document, Page } from 'react-pdf';
import {useState, useEffect} from 'react';


export const CertCard = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
      <Card variant="outlined" sx={{ minHeight:"100%" }}>
        <CardOverflow>
          <AspectRatio ratio={16 / 9}>
            <img
              src={props.img}
              width="100%"
              alt="certificate"
            />
          </AspectRatio>
        </CardOverflow>

        <Typography level="h2" fontSize="md" sx={{ mt: 2, fontWeight:"bold" }}>
          {props.name}
        </Typography>
        <Typography level="body2" sx={{ mt: 0.5, ml: 1 }}>
          Issued by: {props.emitter}
        </Typography>
        <Divider/>
        <CardOverflow
          variant="soft"
          sx={{
            display: "flex",
            gap: 1.5,
            py: 1.5,
            px: "var(--Card-padding)",
            bgcolor: "--outline",
            mt:"auto"
          }}
        >
          {/* <Typography
            level="body3"
            sx={{ fontWeight: "md", color: "text.secondary" }}
          >
            6.3k views
          </Typography> */}
          {/* <Divider orientation="vertical" sx={{ backgroundColor:"white"}}/> */}
          <Typography level="body3" sx={{ fontWeight: "md", color: "text.secondary" }}>
            {props.date.toDateString()}
          </Typography>
        </CardOverflow>
      </Card>
      // <a href={props.img}>
      // <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
      //     <img src={props.img} className="w-full h-56 mx-auto object-cover" alt={props.name}></img>
      //     <div className="mt-2">
      //         <h1 className="font-bold md:text-xl">{props.name}</h1>
      //         <p className="font-light md:text-lg">Issued by {props.issued}</p>
      //         <p className="font-light text-gray-400">{props.desc}</p>

      //         <p className="font-light text-gray-400">{props.date}</p>
      //     </div>
      // </div>
      // </a>
    );
}


// import React from "react";
// import "./style.css";
// import {
//   FaGithub,
//   FaTwitter,
//   FaFacebookF,
//   FaLinkedin,
//   FaYoutube,
//   FaTwitch,
// } from "react-icons/fa";
// import { socialprofils } from "../../content_option";

// export const Socialicons = (params) => {
//   return (
//     <div className="stick_follow_icon">
//       <ul>
//         {socialprofils.twitter && (
//           <li>
//             <a href={socialprofils.twitter}>
//               <FaTwitter />
//             </a>
//           </li>
//         )}
//         {socialprofils.github && (
//           <li>
//             <a href={socialprofils.github}>
//               <FaGithub />
//             </a>
//           </li>
//         )}
//         {socialprofils.facebook && (
//           <li>
//             <a href={socialprofils.facebook}>
//               <FaFacebookF />
//             </a>
//           </li>
//         )}
//         {socialprofils.linkedin && (
//           <li>
//             <a href={socialprofils.linkedin}>
//               <FaLinkedin />
//             </a>
//           </li>
//         )}
//         {socialprofils.youtube && (
//           <li>
//             <a href={socialprofils.youtube}>
//               <FaYoutube />
//             </a>
//           </li>
//         )}
//         {socialprofils.twitch && (
//           <li>
//             <a href={socialprofils.twitch}>
//               <FaTwitch />
//             </a>
//           </li>
//         )}
//       </ul>
//       <p>Follow Me</p>
//     </div>
//   );
// };
