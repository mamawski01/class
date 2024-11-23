import PropTypes from "prop-types";

import ContentBox1 from "../componentsLvl2/ContentBox1";

import GoBack from "../componentsLvl2/GoBackBtn";
import ClearBtn from "../componentsLvl2/ClearBtn";
import SaveBtn from "../componentsLvl2/SaveBtn";

export default function Form({ children = "Form", onSubmit = () => {} }) {
  return (
    <ContentBox1>
      <div className="flex w-full justify-end">
        <div>
          <GoBack></GoBack>
        </div>
      </div>
      <form
        onSubmit={onSubmit}
        encType="multipart/form-data"
        className="flex w-full flex-1 flex-col"
      >
        {children}
        <div className="flex w-full justify-evenly">
          <div>
            <SaveBtn></SaveBtn>
          </div>
          <div>
            <ClearBtn></ClearBtn>
          </div>
          <div>
            <GoBack></GoBack>
          </div>
        </div>
      </form>
    </ContentBox1>
  );
}

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};
