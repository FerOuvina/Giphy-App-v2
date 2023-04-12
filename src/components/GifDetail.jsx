import React from "react";
import { Redirect } from "wouter";
import useGifById from "../hooks/useGifById";
import Gif from "./Gif";
import Spinner from '../components/LoadingSpinner'

export default function ({ params }) {
  const { gif, Loading, Error } = useGifById({ id: params.id });

  if (Loading) return <Spinner />;
  if (Error) return <Redirect to={'404'} />;
  if (!gif) return null;

  return <Gif {...gif} />;
}
