import classNames from "classnames";
import QuestionsWrapper from "../components/QuestionsWrapper";
import { useQuestionActions, useSummaryState } from "../store/selectors";
import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useCurrentLocale } from "@/hooks/locale";
import { useTranslation } from "@/i18n/client";
import Image from 'next/image';
import downloadIcon from "../public/assets/HeroiconsArrowDownTray.svg"
import shareIcon from "../public/assets/HeroiconsArrowRightOnRectangle.svg"
import trashIcon from "../public/assets/HeroiconsTrash.svg"
import contactIcon from "../public/assets/HeroiconsChatBubbleBottomCenterText.svg"
// components/MyComponent.tsx
import React, { useEffect } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const postSummaryToFirestore = async (summary: any) => {
  try {
    // Directly use the summary data assuming it's already in a suitable format for Firestore
    const docRef = await addDoc(collection(db, 'summaries'), { summary });
    console.log('Document written with ID:', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document to Firestore:', e);
    return null;
  }
};

function Summary() {
  const { summary } = useSummaryState();
  const locale = useCurrentLocale();
  const { t } = useTranslation(locale, "translation");
  const hasPostedRef = useRef(false);
  //console.log(summary);

  /*GET*/
  useEffect(() => {
    const fetchData = async () => {
      const colRef = collection(db, 'summaries');
      const snapshot = await getDocs(colRef);
      snapshot.docs.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
      });
    };

    fetchData().catch(console.error);
  }, []);

  /*POST*/
  useEffect(() => {
    // Only post if we haven't posted yet
    if (summary && !hasPostedRef.current) {
      hasPostedRef.current = true; // Mark as posted
      postSummaryToFirestore(summary).then(docId => {
        if (docId) {
          console.log('Summary posted successfully!', docId);
        } else {
          console.error('Failed to post summary.');
        }
      });
    }
  }, [summary]);

  const renderSummaryDetails = (summary: any) => {
    const renderValue = (value: any) => {
      if (value === undefined) {
        return <span>Not available</span>;
      } else if (value === null) {
        return <span>Null</span>;
      } else if (Array.isArray(value)) {
        return value.map((item, index) => (
          <span key={index}>
            {renderValue(item)}
            {index < value.length - 1 ? ', ' : ''}
          </span>
        ));
      } else if (typeof value === 'object') {
        return (
          <div className="ml-4 border-l-2 border-gray-200 pl-2">
            {Object.entries(value).map(([key, subvalue], index) => (
              <div key={index}>
                <strong>{key}:</strong> {renderValue(subvalue)}
              </div>
            ))}
          </div>
        );
      } else {
        return <span>{value.toString()}</span>;
      }
    };
  
    return (
      <div className="gap-4 px-6 md:px-12 py-2 text-CustomWhite flex flex-col w-full">
        {Object.entries(summary).map(([key, value], index) => (
          <div key={index} className="flex w-full bg-slate-700 p-3 rounded-md">
            <strong>{key}:</strong> {renderValue(value)}
          </div>
        ))}
      </div>
    );
  };
  

  return (
    <QuestionsWrapper className="h-screen w-full flex flex-col pb-16 pt-36 lg:py-36 gap-8 backdrop-blur-md px-8 md:px-24" duration={1}>
      <div className="flex flex-col items-center justify-end h-full gap-8 md:flex md:flex-row">

        <div className="relative bg-indigo-500 bg-opacity-15 h-full w-full border border-indigo-500 rounded-md flex flex-col overflow-y-auto scrollbar-thin scrollbar-track-transparent">
          {/* Questions Summary */}
          <h2 className="p-3 sm:p-6 md:p-12 text-CustomWhite text-xl md:text-3xl font-bold">{t("summary-main-title")}</h2>
          {summary && Object.keys(SUMMARY_ASSIGNMENTS).length > 0 &&
            Object.keys(SUMMARY_ASSIGNMENTS).map((key, i) => {
              // Directly access the value from summary using the key
              const value = summary[key];
              // Ensure the value exists before trying to display it
              if (value !== undefined && value !== null) {
                const formattedValue = getSummaryValue(key, value);

                return (
                  <div key={i} className="bg-CustomWhite shrink-0 overflow-hidden">
                    <div className="flex items-center justify-between bg-gradient-border p-3">
                      <div className="flex max-w-[475px] flex-col space-y-2">
                        <span className="text-pre-title-link-small uppercase text-magenta">
                          {SUMMARY_ASSIGNMENTS[key]} {/* Display the label for the key */}
                        </span>
                        {formattedValue} {/* Display the formatted value */}
                      </div>
                    </div>
                  </div>
                );
              }
              return null; // Return null if the value is undefined or null
            })
          }

          {summary && renderSummaryDetails(summary)}


            <div className="text-CustomWhite sticky bottom-0 left-0 bg-indigo-500 w-full min-h-14 sm:min-h-16 flex justify-between items-center px-3">
              <button
                onClick={() => window.location.reload()}
                className="flex items-center gap-2 border border-CustomWhite rounded-md px-2 sm:px-6 py-2 font-semibold sm:font-bold uppercase tracking-[2px] sm:tracking-[2.8px] hover:bg-indigo-900 hover:bg-opacity-50"
              > <Image width={18} height={18} src={trashIcon} alt="Trash Icon"/>
                {t("summary-discard-button")}
              </button>
              <button
                className="flex items-center gap-2 border border-CustomWhite rounded-md px-2 sm:px-6 py-2 font-semibold sm:font-bold uppercase tracking-[2px] sm:tracking-[2.8px] hover:bg-indigo-900 hover:bg-opacity-50"
              > <Image width={18} height={18} src={contactIcon} alt="Contact Icon"/>
                {t("summary-contact-button")}
              </button>
            </div>
        </div>

        <ConfirmationForm />

      </div>
      {/* <Carousel /> */}

      </QuestionsWrapper>
  );
}

/*Confirm Form*/
function ConfirmationForm() {
  const locale = useCurrentLocale();
  const { t } = useTranslation(locale, "translation");
  const [satisfaction, setSatisfaction] = useState("yes");
  const { confirm } = useQuestionActions();
  const router = useRouter();

  const handleDownload = async () => {
    const res = await fetch('/api/summary');
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'DfSyncSummary.pdf'; // Or the filename you sent from the server
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const confirmHandler = useCallback(async () => {
    const isSuccess = await confirm(satisfaction);
    if (isSuccess) {
      router.push("/contact");
    }
  }, [confirm, router, satisfaction]);

  return (
    <div className="relative w-full md:max-w-[450px] min-w-[300px] bg-indigo-500 bg-opacity-15 h-full border border-indigo-500 rounded-md overflow-y-auto scrollbar-thin scrollbar-track-transparent text-CustomWhite">
      <div className="p-3 sm:p-6 md:p-12 space-y-6">
        <h3 className="font-bold text-xl sm:text-2xl">
          {t("summary-title")}
        </h3>
        <p className="text-base sm:text-xl">{t("summary-text")}</p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Qui cupiditate accusamus dicta. Nulla voluptas autem cumque fugiat,
          cupiditate assumenda in, eius iste nostrum quia eaque unde animi id debitis. 
          Rem ratione facere cupiditate facilis voluptatibus corrupti error minima, 
          expedita possimus maiores doloremque reiciendis enim similique molestiae
          culpa provident saepe porro?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Qui cupiditate accusamus dicta. Nulla voluptas autem cumque fugiat,
          cupiditate assumenda in, eius iste nostrum quia eaque unde animi id debitis. 
          Rem ratione facere cupiditate facilis voluptatibus corrupti error minima, 

          expedita possimus maiores doloremque reiciendis enim similique molestiae
          culpa provident saepe porro?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Qui cupiditate accusamus dicta. Nulla voluptas autem cumque fugiat,
          cupiditate assumenda in, eius iste nostrum quia eaque unde animi id debitis. 
          Rem ratione facere cupiditate facilis voluptatibus corrupti error minima, 
          expedita possimus maiores doloremque reiciendis enim similique molestiae
          culpa provident saepe porro?
        </p>
      </div>

      <div className="bg-indigo-500 w-full h-14 sm:h-16 sticky bottom-0 left-0 flex justify-between items-center px-3">
        <button
          className="flex items-center gap-2 border border-CustomWhite rounded-md px-2 sm:px-6 py-2 font-semibold sm:font-bold uppercase tracking-[2px] sm:tracking-[2.8px] hover:bg-indigo-900 hover:bg-opacity-50"
          onClick={handleDownload}
        > <Image width={18} height={18} src={downloadIcon} alt="Download Icon"/>
          {t("summary-download-button")}
        </button>
        <button
          className="flex items-center gap-2 border border-CustomWhite rounded-md px-2 sm:px-6 py-2 font-semibold sm:font-bold uppercase tracking-[2px] sm:tracking-[2.8px] hover:bg-indigo-900 hover:bg-opacity-50"
          onClick={confirmHandler}
        > <Image width={18} height={18} src={shareIcon} alt="Share Icon"/>
          {t("summary-share-button")}
        </button>
      </div>
    </div>
  );
}
export default Summary;


/*Get Summary Values*/

function getSummaryValue(key: any, initialValue:any) {
  let value = initialValue;

  switch (key) {
    case "budget":
      value = (
        <div className="flex items-center space-x-3">
          <span className="text-header-4">{`${value.min}-${value.max}PQE`}</span>
        </div>
      );
      break;

    case "core_experience":
      value = (
        <>
          {value.map((v: any, i:any) => (
            <div key={i} className="flex items-center space-x-3">
              <span className="text-header-4">{v}</span>
            </div>
          ))}
        </>
      );
      break;

    case "niche_experience":
    case "sector_experience":
      value = (
        <>
          {value.map((v: any, i: any) => (
            <div key={i} className="flex items-center space-x-3">
              <span className="text-header-4">{v.description}</span>
              <span
                className={classNames("badge", {
                  purple: v.rating === "Nice to have",
                  green: v.rating === "Essential",
                })}
              >
                {v.rating}
              </span>
            </div>
          ))}
        </>
      );
      break;

    case "languages":
      value =
        value.required === "no" ? (
          <div className="flex items-center space-x-3">
            <span className="text-header-4 capitalize">{value.required}</span>
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <span className="text-header-4 capitalize">{`${value.required}, ${value.details.language_name}`}</span>
            <span className="badge purple">
              {value.details.language_proficiency}
            </span>
          </div>
        );
      break;

    case "budget":
      value = (
        <div className="flex items-center space-x-3">
          <span className="text-header-4">{`$${value.min}-$${value.max}${
            value.budget_flexibility === "yes"
              ? " with ability to stretch for a particularly strong candidate "
              : ""
          }`}</span>
        </div>
      );
      break;

    default:
      value = (
        <div className="flex items-center space-x-3">
          <span className="text-header-4 capitalize">{value}</span>
        </div>
      );
      break;
  }

  return value;
}

const SUMMARY_ASSIGNMENTS: { [key: string]: string } = {
  name: "Name",
  company_name: "Company Name",
  industry: "Industry",
  type: "Type",
  type_of_work: "Type Of Work",
  audience: "Audience",
  timeline: "Timeline",
  specific_date: "Specific Date",
  specific_date_input: "Specific Date Input",
  budget: "Budget",
  brief: "brief",
  current_project: "Current Project",
  domain: "Domain",
  hosting: "Hosting",
  content: "Content",
  updating: "Updating",
  cms: "Cms",
  usage: "Usage",
  selected_cms: "Selected Cms",
  third_party: "Third-party",
  ecom: "E-commerce",
  desired_ecom: "Desired E-commerce",
  payment_services: "Payment Services",
  template: "Template",
  components_modules: "Components Modules",
  accounts: "Accounts",
  hosting_package: "Hosting Package",
  seo: "SEO",
  seo_marketing: "SEO Marketing",
  maintenance: "maintenance",
  internal_resources: "Internal Resources",
  other: "Other",
  refrences: "Refrences",
  estimation: "Estimation",
};