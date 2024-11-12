import PropTypes from "prop-types";

export default function TittleH1({
  children = "Add Tittle",

  disableSticky = false,
}) {
  return (
    <div
      className={`${disableSticky ? "" : `sticky top-0`} z-10 flex bg-slate-950 text-center`}
    >
      <h1 className="flex h-16 w-full items-center justify-center text-center text-2xl font-bold tracking-wider">
        {children}
      </h1>
    </div>
  );
}

TittleH1.propTypes = {
  children: PropTypes.any,
  title: PropTypes.any,
  disableSticky: PropTypes.any,
};
