import Link from "next/link";

import Layout from "../../components/Layout";

export default function Route({ title }) {
  if (!title) return <></>;

  return (
    <Layout pageTitle={`Biketastic | ${title}`}>
      <Link href="/">
        <a>Back to route list</a>
      </Link>

      <article>
        <h1>{title}</h1>
      </article>
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { routename } = ctx.params;

  const content = await import(`../../routes/${routename}.json`);

  return {
    props: { ...content },
  };
}

export async function getStaticPaths() {
  const routeSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, _index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -5);

      return slug;
    });
    return data;
  })(require.context("../../routes", true, /\.json$/));

  const paths = routeSlugs.map((slug) => `/route/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
