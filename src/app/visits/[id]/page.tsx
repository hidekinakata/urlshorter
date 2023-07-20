import React from "react";
import Link from "next/link";

type PageType = {
  params: {
    id: string;
  };
};

const Page: React.FC<PageType> = async (props) => {
  const result = await fetch(
    "http://localhost:3000/api/getLinkInfo/" + props.params.id,
    {
      cache: "no-cache",
    }
  );
  const { id, shorter_id, full_url, clicks } = await result.json();
  return (
    <>
      {result.status === 200 ? (
        <div className={"bg-secondary p-10 max-w-screen-md"}>
          <h1 className={"text-2xl mb-10"}>
            Link id{" "}
            <span className={"font-bold text-3xl text-accent"}>
              {shorter_id}
            </span>{" "}
            info card
          </h1>
          <div
            className={
              "relative grid w-96  grid-cols-[max-content_1fr] gap-x-2 items-center gap-y-4"
            }
          >
            <span>Original url: </span>
            <Link
              href={full_url}
              target={"_blank"}
              className={"overflow-hidden break-words"}
            >
              {full_url}
            </Link>
            <span>Shortened url: </span>
            <Link
              href={process.env.NEXT_PUBLIC_SITE_URL + "/" + shorter_id}
              target={"_blank"}
            >
              {process.env.NEXT_PUBLIC_SITE_URL + "/" + shorter_id}
            </Link>{" "}
            <span>Total Clicks:</span> <span>{clicks}</span>
          </div>
        </div>
      ) : (
        <>Error</>
      )}
    </>
  );
};

export default Page;
