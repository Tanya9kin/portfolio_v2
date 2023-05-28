export default function Project(props) {
  const { name, category, year, img, githubURL, websiteURL, description } =
    props.data;

  return (
    <div className="project">
      <h2>{name}</h2>
      <h3>{`${category} Project - ${year}`}</h3>
      {/* {img && <img src={img}></img>} */}
      <h4>Description</h4>
      <span>{description}</span>
      {websiteURL && (
        <button>
          <a href={websiteURL}>Open Website</a>
        </button>
      )}
      {githubURL && (
        <button>
          <a href={githubURL}>Open Code On GitHub</a>
        </button>
      )}
    </div>
  );
}
