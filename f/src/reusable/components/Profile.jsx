import PropTypes from "prop-types";
export default function Profile({
  imgSrc = "/Asset2.png",
  title = "john title de-asis",
  mainDescription = "funny",
  description = "tall, dark and handsome",
  hideImage = false,
}) {
  return (
    <div className="mx-auto overflow-y-auto rounded-lg bg-slate-200/10 p-1 text-center backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center rounded-lg p-1">
        <img
          src={imgSrc}
          alt={imgSrc}
          className={`h-32 w-32 rounded-full object-cover ${hideImage && `hidden`}`}
          title={imgSrc}
        />
        <div className="flex flex-col items-center">
          <h1 className="flex flex-wrap justify-center gap-x-1 text-lg font-semibold tracking-wide md:text-3xl">
            {title}
          </h1>
          <p className="font-bold capitalize tracking-wider">
            {mainDescription}
          </p>
          <p className="flex flex-wrap justify-center gap-x-1">{description}</p>
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  imgSrc: PropTypes.any,
  title: PropTypes.any,
  mainDescription: PropTypes.any,
  description: PropTypes.any,
  hideImage: PropTypes.any,
};
