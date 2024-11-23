import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function Toast({ children = "ToastSuccess" }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="rounded border border-gray-300/20 bg-black/60 p-5"
    >
      {children}
    </motion.div>
  );
}

Toast.propTypes = {
  children: PropTypes.node,
};