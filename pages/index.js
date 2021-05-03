import Layout from "../components/Layout";
import Routes from "../components/Routes";

const Index = ({ routes }) => {
  return (
    <Layout pageTitle="Biketastic">
      <main>
        <Routes routes={routes} />
      </main>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const routes = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -5);
      const value = values[index];

      return {
        ...value,
        slug,
      };
    });
    return data;
  })(require.context("../routes", true, /\.json$/));

  return {
    props: {
      routes,
    },
  };
}
