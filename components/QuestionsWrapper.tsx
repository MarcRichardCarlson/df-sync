import { motion } from "framer-motion";
import classNames from "classnames";

interface QuestionsWrapperProps {
  children?: React.ReactNode;
  className?: string;
  duration?: number;
}

function QuestionsWrapper({
  children,
  className,
  duration = 0.75,
}: QuestionsWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "150%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-150%" }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration,
      }}
      className={classNames("absolute z-20 w-full", className)}
    >
      {children}
    </motion.div>
  );
}

export default QuestionsWrapper;
