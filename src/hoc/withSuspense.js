import { Suspense } from "react";
import Loader from "../components/Loader/Loader";

export function SuspenIt(props) {
  return <Suspense fallback={<Loader />}>{props.comp}</Suspense>;
}
