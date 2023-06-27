import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase";
import { useEffect, useState } from "react";

export default function Image({ imagename }) {
  const [url, setUrl] = useState("");
  async function getImageURL() {
    const response = await getDownloadURL(
      ref(storage, `offerings/${imagename}`)
    );
    setUrl(response);
    return response;
  }

  useEffect(() => {
    getImageURL();
  });
  return (
    <img src={url} className="object-contain" />
  );
}
