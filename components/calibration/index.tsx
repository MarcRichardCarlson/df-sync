// import classNames from "classnames";
// import { useState } from "react";
// import { useCalibrationState } from "../../store/selectors";
// import QuestionsWrapper from "../QuestionsWrapper";

// interface CalibrationProps {
//   totalSteps: string;
//   candidates: {
//     _id: string;
//     option: string;
//     categories: {
//       title: string;
//       header?: string;
//       body?: string;
//     }[];
//   }[];
// }

// function Calibration({ totalSteps, candidates }: CalibrationProps) {
//   const [selected, setSelected] = useState<string | null>(null);
//   const { calibrationIndex, next } = useCalibrationState();

//   const clickHandler = (id: string) => {
//     setSelected(id);
//     next(id);
//   };

//   return (
//     <QuestionsWrapper duration={1}>
//       <div className="flex items-center justify-between space-x-8">
//         <div className="max-w-[352px]">
//           <span className="text-pre-title-link-small uppercase text-magenta">
//             Calibration {`${calibrationIndex}/${totalSteps}`}
//           </span>

//           {/* Actual Question / Message */}
//           <p className="mt-2 text-header-4">Which would be your preferred candidate between these two options?</p>
//         </div>

//         <div className="flex space-x-8">
//           {candidates.map((candidate) => (
//             <Card key={candidate._id} selected={selected} clickHandler={clickHandler} {...candidate} />
//           ))}
//         </div>
//       </div>
//     </QuestionsWrapper>
//   );
// }

// export default Calibration;

// interface CardProps {
//   _id: string;
//   option: string;
//   categories: {
//     title: string;
//     header?: string;
//     body?: string;
//   }[];
//   clickHandler: (id: string) => void;
//   selected: string | null;
// }

// function Card({ _id, option, categories, clickHandler, selected }: CardProps) {
//   const isSelected = selected === _id;

//   return (
//     <div
//       className={classNames("overflow-hidden", {
//         "gradient-border": !isSelected,
//         "rounded-[15px] border border-bright-red": isSelected,
//       })}
//     >
//       <div
//         className={classNames("flex h-full w-full max-w-[374px] flex-col p-10", {
//           "bg-gradient-border": !isSelected,
//           "bg-bright-red/[.15]": isSelected,
//         })}
//       >
//         <div className="flex-1">
//           <h4 className="pb-2 font-space-grotesk text-header-4 font-bold">{`Candidate ${option}`}</h4>

//           {categories.map((category, i) => (
//             <div key={i} className="mt-6 flex flex-col">
//               <span className="font-space-grotesk text-pre-title-link-small uppercase text-magenta">
//                 {category.title}
//               </span>
//               {category.header && <span className="text-[18px] font-bold leading-[26px]">{category.header}</span>}
//               {category.body && <span className="mt-1 text-body-small text-purple-gray">{category.body}</span>}
//             </div>
//           ))}
//         </div>

//         <button
//           className={classNames("mt-8 w-full rounded-[50px]  p-3 text-pre-title-link-small uppercase", {
//             "bg-bright-red": !isSelected,
//             "gradient-bg": isSelected,
//           })}
//           onClick={() => clickHandler(_id)}
//         >
//           {selected ? "Selected" : `Select candidate ${option}`}
//         </button>
//       </div>
//     </div>
//   );
// }
