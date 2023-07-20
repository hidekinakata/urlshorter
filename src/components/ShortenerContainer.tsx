"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

type ShortenerContainerType = {};

function getShortened(url: string, resolve: (url: string) => void) {
  fetch("http://localhost:3000/api/shorten", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ url: url }),
  }).then(async (res) => {
    const data = await res.json();
    if (data && data.shortened_url) {
      resolve(data.shortened_url);
    }
  });
}

const ShortenerContainer: React.FC<ShortenerContainerType> = (props) => {
  const UrlRef = useRef<HTMLInputElement>(null);
  const [url, setURL] = useState("");
  const [shortenet, setShorned] = useState<string | null>(null);

  const GenerateLink = () => {
    getShortened(url, (url) => {
      setShorned(url);
    });
  };

  return (
    <div className={"w-full flex flex-col items-center gap-10"}>
      <h1 className={"text-3xl font-bold"}>Paste the URL to be shortened</h1>

      <span className={"flex relative h-16 rounded w-full px-24"}>
        <input
          ref={UrlRef}
          type={"text"}
          className={
            "text-ellipsis overflow-hidden whitespace-nowrap bg-background border-b border-b-accent px-6 py-3 w-full font-mono text-2xl  outline-none"
          }
          placeholder={"Your url here"}
          value={url}
          onChange={(e) => setURL(e.currentTarget.value)}
        />

        <button
          className={
            "block w-fit h-full bg-primary px-4 font-bold text-neutral-200"
          }
          onClick={GenerateLink}
        >
          Shortify Link
        </button>
      </span>

      <div>
        {shortenet ? (
          <div className={"flex-col flex items-center"}>
            <div>
              Your shortened link:{" "}
              <Link href={shortenet} className={"underline text-accent"}>
                {shortenet}
              </Link>
            </div>
            <div>
              See total visits of your shorten link:{" "}
              <Link
                href={
                  process.env.NEXT_PUBLIC_SITE_URL +
                  "/visits/" +
                  shortenet.split("/").pop()
                }
                className={"underline text-accent"}
              >
                {process.env.NEXT_PUBLIC_SITE_URL +
                  "/visits/" +
                  shortenet.split("/").pop()}
              </Link>
            </div>
          </div>
        ) : (
          <span>Paste your link to shorten</span>
        )}
      </div>
    </div>
  );
};

export default ShortenerContainer;
