import Avatar from "./Avatar";

export default function LineAvatars(props) {
  return (
    <div className="flex justify-between mt-6 p-8 ">
      <div>
        <Avatar
          image={props.img1}
          onHover={() => props.onHover(props.descriptions[0])}
        />
      </div>
      <div className="">
        <Avatar
          image={props.img2}
          onHover={() => props.onHover(props.descriptions[1])}
        />
      </div>
      <div className="">
        <Avatar
          image={props.img3}
          onHover={() => props.onHover(props.descriptions[2])}
        />
      </div>
    </div>
  );
}
