export default function Footer() {
  return (
    <div className="toast toast-end dropdown dropdown-top dropdown-end">
      <label tabIndex={0} className="btn btn-circle">
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
      </label>
      <div
        tabIndex={0}
        className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64"
      ></div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
}
