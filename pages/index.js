import Head from "next/head";
import Editor from "../components/Editor";
import { Heading } from "../components/Heading";
import { Examples } from "../components/Examples";

export default function Home() {
  return (
    <>
      <Head>
        <title> Markdown editor </title>
      </Head>
      <main>
        <Heading>Markdown editor</Heading>

        <Editor />
        <div>
          <Examples
            heading="Heading"
            text="Para agregar un titulo principal agregar # "
          />
        </div>
      </main>
    </>
  );
}
