//On commence par aller chercher le contenu du CMS via l'URL
const getArticles = async () => {
  const res = await fetch(
    `https://cdn.builder.io/api/v3/content/articles?apiKey=${process.env.BUILDERIO_KEY}`
  );
  return res.json();
};

//je viens définir mes fonctions ainsi que mes constantes qui me permettront de chercher le contenu dont j'ai besoin
export default async function Articles() {
  try {
    const posts = await getArticles();
    const article = posts.results[0].data.articles;

    //Première tentative de fetch, je met un console log afin de voir si j'arrive à récupérer le contenu sous forme d'array, mettant une erreur si cela ne fonctionnait pas.
    //if (!Array.isArray(posts)) {
    //console.error("Invalid response format. Expected an array.");
    //return <div>Error loading articles</div>;
    // console.log("toto", posts);
    //}

    //
    return (
      <div>
        <h1>Articles</h1>
        {article.map((post) => {
          return (
            <div key={post.article.id}>
              <h2>{post.article.title}</h2>
              <img src={post.article.image} />
              <p>{post.article.description}</p>
            </div>
          );
        })}
      </div>
    );
  } catch (error) {
    console.error("Error fetching articles:", error.message);

    return <div>Error loading articles</div>;
  }
}
