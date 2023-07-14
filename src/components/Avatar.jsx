export default function Avatar({ image, onHover }) {
  return (
    <div>
      <div className="w-20 sm:w-16" onMouseEnter={onHover}>
        <img src={image} className=" hover:scale-110 transition-all" />
      </div>
    </div>
  );
}
