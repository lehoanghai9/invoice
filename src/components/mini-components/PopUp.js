import {motion, AnimatePresence} from "framer-motion"

export const PopUp = ({completed, text, color}) => {
  return (
    <AnimatePresence>
      {completed && (
        <motion.div
        initial={{y:100, translateX: "-50%"}}
        animate={{y:0, translateX: "-50%"}}
        exit={{y:100, translateX: "-50%"}}
        transition={{delay: 0.3}}
         className={`shadowww bg-purple text-white fixed bottom-28 sm:bottom-10 left-[50%] translate-x-[-50%] w-[240px] rounded-[20px] h-[50px] flex justify-center items-center`} >
          <p className="font-bold">{text}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}