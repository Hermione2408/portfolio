import "./techstack.css";
import tagImage from "../../assets/imgs/tag.svg";
export default function TechStack({ data }) {
  const textList = () => {
    const textRender = data.map((d, index) => {
      return (
        <div className="stackUsed" key={index}>
          {d}
        </div>
      );
    });
    return textRender;
  };
  return (
    <div className="techstackcontainer">
      <div className="image">
        <img src={tagImage} alt={"tag"} />
      </div>
      <div className="stacks">{textList()}</div>
    </div>
  );
}
