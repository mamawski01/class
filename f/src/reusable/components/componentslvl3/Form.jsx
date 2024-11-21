import PropTypes from "prop-types";

import ContentBox1 from "../componentsLvl2/ContentBox1";

export default function Form({ children = "Form", onSubmit = () => {} }) {
  return (
    <ContentBox1>
      <form
        onSubmit={onSubmit}
        encType="multipart/form-data"
        className="flex w-full flex-1 flex-col"
      >
        {children}
      </form>
    </ContentBox1>
  );
}

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};
