import React from "react";
import { Redirect } from "wouter";
import useGifById from "../hooks/useGifById";
import Gif from "./Gif";
import Spinner from "../components/LoadingSpinner";
import { Helmet } from "react-helmet";

export default function ({ params }) {
  const { gif, Loading, Error } = useGifById({ id: params.id });

  const title = gif ? gif.title : "";

  if (Loading)
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <Spinner />
      </>
    );
  if (Error) return <Redirect to={"/Giphy-App-v2/404"} />;
  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`Description of ${title}`} />
      </Helmet>
      <Gif {...gif} />;
    </>
  );
}
