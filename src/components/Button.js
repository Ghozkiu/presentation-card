const formatClassName = (color, hoverColor) => {
  return `${color} ${hoverColor} text-white font-bold py-2 px-4 rounded inline-block`;
};

export default function Button({ text, link, color, hoverColor, image }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className={formatClassName(color, hoverColor)}>
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
