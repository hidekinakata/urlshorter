import React from "react";
import Navbar from "@/components/Navbar";
import ShortenerContainer from "@/components/ShortenerContainer";
import Link from "next/link";

type PageType = {};

const Page: React.FC<PageType> = (props) => {
  return (
    <>
      <h1 className={"text-3xl mb-8"}>This shortened url is invalid</h1>
      <p>
        Please check if the link is correct, pay attention to the upper or lower
        case of the url, it is important
      </p>
      <p>...Or try to shorten your link again :)</p>

      <Link
        href={"/#"}
        className={"mt-12 underline underline-offset-2 text-accent"}
      >
        Go home
      </Link>
    </>
  );
};

export default Page;
