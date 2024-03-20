import { motion } from "framer-motion";

interface CircleProps {
  className?: string;
}

function PageLoading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="relative flex h-[70px] w-[70px] items-center justify-center"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          ease: "easeInOut",
          duration: 1.5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute h-full w-full border-indigo-500"
      >
        <CircleSM className="absolute-center -translate-x-[90%]" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          ease: "easeInOut",
          duration: 1.5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute h-full w-full border-indigo-500"
      >
        <CircleMD className="absolute-center -translate-x-[90%]" />
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          ease: "easeInOut",
          duration: 1.5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute h-full w-full border-indigo-500"
      >
        <CircleLG className="absolute-center -translate-x-[90%]" />
      </motion.div>
    </motion.div>
  );
}

function CircleSM({ className }: CircleProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
    >
      <g id="Group 1000003701">
        <circle
          id="Ellipse 715"
          cx="26.9998"
          cy="26.5693"
          r="20"
          transform="rotate(90 26.9998 26.5693)"
          stroke="#E5E7EB"
          strokeWidth="4"
        />
        <path
          id="Ellipse 716"
          d="M35.4391 44.7038C37.8203 43.5955 39.9599 42.0291 41.7357 40.094C43.5115 38.1589 44.8887 35.893 45.7888 33.4256C46.6889 30.9582 47.0942 28.3377 46.9816 25.7137C46.8689 23.0896 46.2406 20.5135 45.1323 18.1323C44.0241 15.7512 42.4577 13.6116 40.5226 11.8358C38.5875 10.06 36.3215 8.68269 33.8541 7.7826C31.3867 6.8825 28.7662 6.4772 26.1422 6.58985C23.5182 6.7025 20.942 7.33088 18.5609 8.43912"
          stroke="url(#paint0_linear_13416_7433)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_13416_7433"
          x1="0.428554"
          y1="16.8782"
          x2="17.3068"
          y2="53.1429"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4F46E5" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CircleMD({ className }: CircleProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
    >
      <g id="Group 1000003699">
        <circle
          id="Ellipse 715"
          cx="31.9989"
          cy="31.8809"
          r="24"
          stroke="#E5E7EB"
          strokeWidth="6"
        />
        <path
          id="Ellipse 716"
          d="M42.111 53.6434C44.9694 52.3156 47.5383 50.4378 49.6709 48.1172C51.8036 45.7967 53.4583 43.0787 54.5406 40.1187C55.6229 37.1586 56.1115 34.0143 55.9787 30.8654C55.8458 27.7165 55.094 24.6246 53.7662 21.7662C52.4384 18.9078 50.5606 16.339 48.24 14.2063C45.9194 12.0736 43.2015 10.4189 40.2414 9.33662C37.2814 8.25434 34.1371 7.76569 30.9882 7.89856C27.8393 8.03143 24.7473 8.78323 21.889 10.111"
          stroke="url(#paint0_linear_13416_7438)"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_13416_7438"
          x1="0.122767"
          y1="20.2221"
          x2="20.3448"
          y2="63.7544"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4F46E5" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CircleLG({ className }: CircleProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="76"
      height="75"
      viewBox="0 0 76 75"
      fill="none"
    >
      <g id="Group 1000003700">
        <circle
          id="Ellipse 715"
          cx="38.0004"
          cy="37.1953"
          r="28"
          stroke="#E5E7EB"
          strokeWidth="8"
        />
        <path
          id="Ellipse 716"
          d="M49.8079 62.5848C53.142 61.0342 56.138 58.842 58.6248 56.1335C61.1117 53.425 63.0407 50.2532 64.3018 46.7992C65.5629 43.3452 66.1313 39.6767 65.9745 36.003C65.8178 32.3293 64.939 28.7225 63.3884 25.3884C61.8378 22.0544 59.6456 19.0584 56.9371 16.5715C54.2286 14.0847 51.0568 12.1556 47.6028 10.8946C44.1488 9.63351 40.4802 9.06511 36.8066 9.22183C33.1329 9.37855 29.5261 10.2573 26.192 11.808"
          stroke="url(#paint0_linear_13416_7443)"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_13416_7443"
          x1="0.803595"
          y1="23.6159"
          x2="24.4195"
          y2="74.3928"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4F46E5" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default PageLoading;
