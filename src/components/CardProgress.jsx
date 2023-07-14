import ProgressBar from "./ProgressBar";
export default function CardProgress(props) {
  return (
    <>
      <div className="hidden lg:flex card w-auto bg-card shadow-xl mt-20 text-white opacity-85">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">Samuel Rech Cassanego</h2>
            <h2 className="card-title p-2">Nível 22</h2>
          </div>
          <ProgressBar label={props.label[0]} progress={props.progress[0]} />
          <ProgressBar label={props.label[1]} progress={props.progress[1]} />
          <ProgressBar label={props.label[2]} progress={props.progress[2]} />
          <ProgressBar label={props.label[3]} progress={props.progress[3]} />
        </div>
      </div>
      <div className="flex mr-2 ml-2  card bg-card shadow-xl mt-20 text-white lg:hidden">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">Samuel Rech Cassanego</h2>
            <h2 className="card-title p-2">Nível 22</h2>
          </div>
          <ProgressBar label={props.label[0]} progress={props.progress[0]} />
          <ProgressBar label={props.label[1]} progress={props.progress[1]} />
          <ProgressBar label={props.label[2]} progress={props.progress[2]} />
          <ProgressBar label={props.label[3]} progress={props.progress[3]} />
        </div>
      </div>
    </>
  );
}
