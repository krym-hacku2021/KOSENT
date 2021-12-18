import { ImageNotSupported } from "@mui/icons-material";
import { Chip, ImageList, ImageListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getImageURL, getImageURLs } from "../lib/db_post";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";

function dateToStr24H(date, format) {
  if (!format) {
    format = "Y/M/D h:m:s";
  }
  format = format.replace(/Y/g, date.getFullYear());
  format = format.replace(/M/g, date.getMonth() + 1);
  format = format.replace(/D/g, date.getDate());
  format = format.replace(/h/g, date.getHours());
  format = format.replace(/m/g, date.getMinutes());
  format = format.replace(/s/g, date.getSeconds());
  return format;
}

export default function Search_Results({ item, noImage }) {
  const router = useRouter();
  const [images, setImages] = useState([]);

  useEffect(async () => {
    if (!noImage && item.post_images != null) {
      const urls = await getImageURLs(item.post_images);
      console.log(JSON.stringify(urls));
      setImages(urls);
    }
  }, []);

  var d = Date.parse(item.date);
  var dd = new Date(d);
  var datestr = dateToStr24H(dd, "Y年M月D日 h:m:s");

  var imageListHeight = Math.min((item.post_images.length / 2) * 200, 450);

  return (
    <div
      className="flame02"
      onClick={() => router.push(`/posts/${item.thread_id}`)}
    >
      <div>
        <Typography variant="subtitle1" gutterBottom component="div">
          {item.user_nickname}
        </Typography>
      </div>
      <div>
        <Typography variant="caption" gutterBottom component="div">
          {datestr}
        </Typography>
      </div>
      <div>
        <Typography variant="body1" gutterBottom component="div">
          {item.post_text}
        </Typography>
      </div>
      <div>
        {noImage ? null : (
          <Box>
            <ImageList
              sx={{ width: 500, height: { imageListHeight } }}
              cols={2}
              rowHeight={164}
            >
              {images.map((item) =>
                // item == "" ? (
                //   <ImageNotSupportedIcon />
                // ) : (
                  <ImageListItem key={item}>
                    <div>{item}</div>
                    <img src={item} alt={item} loading="lazy" />
                  </ImageListItem>
                // )
              )}
            </ImageList>
          </Box>
        )}
      </div>
      <br />
      {/* <Chip label={tag} /> */}
    </div>
    // </>
  );
}
