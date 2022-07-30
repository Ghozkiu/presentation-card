const formatClassName = (color, colorRange) => {
  return `bg-${color}-${colorRange} hover:bg-${color}-400 text-white font-bold py-2 px-4 border-b-4 border-${color}-700 hover:border-${color}-500 rounded inline-block`;
};

export default function Button({ text, link, color, colorRange, image }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className={formatClassName(color, colorRange)}>
        <img
          className="float-left mt-1 mr-2"
          src={image}
          alt={text + " logo"}
        ></img>
        {text}
      </button>
    </a>
  );
}
