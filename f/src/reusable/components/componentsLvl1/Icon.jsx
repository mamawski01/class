import { BoltIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

export default function Icon({
  children = <BoltIcon></BoltIcon>,
  iconWith = "w-5",
}) {
  const title = children[1]?.props?.children
    ? children[1]?.props?.children
    : "Icon";
  return (
    <div className="flex items-center gap-2">
      <div className={iconWith} title={title}>
        {Array.isArray(children) ? children[0] : children}
      </div>
      <div className="p-1">
        {children.length > 1 &&
          children.slice(1).map((node, i) => (
            <div
              className="hidden sm:inline-block"
              key={i}
              title={node.props.children}
            >
              {node}
            </div>
          ))}
      </div>
    </div>
  );
}

Icon.propTypes = {
  children: PropTypes.node,
  iconWith: PropTypes.string,
};
