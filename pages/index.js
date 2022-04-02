import Head from "next/head";
import Editor from "../components/Editor";
import { Heading } from "../components/Heading";
import { Examples } from "../components/Examples";
import { HEADING, PARAGRAPHS, BOLD } from "../utils/data";
export default function Home() {
  return (
    <>
      <Head>
        <title> Markdown editor </title>
      </Head>
      <main>
        <Heading>Markdown editor</Heading>

        <Editor />
        <div style={{ marginTop: "100px" }}>
          <h1 className="text-5xl font-bold mt-0 mb-6">Heading</h1>
        </div>

        <Examples DATA={HEADING} />
        <div style={{ marginTop: "100px" }}>
          <h1 className="text-5xl font-bold mt-0 mb-6">Paragraph</h1>
        </div>
        <Examples DATA={PARAGRAPHS} />

        <div style={{ marginTop: "100px" }}>
          <h1 className="text-5xl font-bold mt-0 mb-6">Paragraph</h1>
        </div>
        <Examples DATA={PARAGRAPHS} />

        <div style={{ marginTop: "100px" }}>
          <h1 className="text-5xl font-bold mt-0 mb-6">Bold</h1>
        </div>
        <Examples DATA={BOLD} />
      </main>
    </>
  );
}

// # Heading level 1 	<h1>Heading level 1</h1>
// Heading level 1
// ## Heading level 2 	<h2>Heading level 2</h2>
// Heading level 2
// ### Heading level 3 	<h3>Heading level 3</h3>
// Heading level 3
// #### Heading level 4 	<h4>Heading level 4</h4>
// Heading level 4
// ##### Heading level 5 	<h5>Heading level 5</h5>
// Heading level 5
// ###### Heading level 6 	<h6>Heading level 6</h6>
// Heading level 6
