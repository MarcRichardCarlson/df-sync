import classNames from "classnames";
import QuestionsWrapper from "../components/QuestionsWrapper";
import { useQuestionActions, useSummaryState } from "../store/selectors";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useCurrentLocale } from "@/hooks/locale";
import { useTranslation } from "@/i18n/client";
import Image from 'next/image';
import downloadIcon from "../public/assets/HeroiconsArrowDownTray.svg"
import shareIcon from "../public/assets/HeroiconsArrowRightOnRectangle.svg"
import trashIcon from "../public/assets/HeroiconsTrash.svg"
import contactIcon from "../public/assets/HeroiconsChatBubbleBottomCenterText.svg"
import Carousel from "@/components/Carousel";

function Summary() {
  const { summary } = useSummaryState();
  const locale = useCurrentLocale();
  const { t } = useTranslation(locale, "translation");

  return (
    <QuestionsWrapper className="h-screen w-full flex flex-col py-36 gap-8 backdrop-blur-md px-8 md:px-24" duration={1}>
      <div className="flex flex-col items-center justify-end h-full gap-8 md:flex md:flex-row">

        <div className="relative bg-indigo-500 bg-opacity-15 h-full w-full border border-indigo-500 rounded-md flex flex-col overflow-y-auto scrollbar-thin scrollbar-track-transparent">
          {/* Questions Summary */}
          <h2 className="p-12 text-CustomWhite text-3xl font-bold">{t("summary-main-title")}</h2>
          {summary?.assignment_detail &&
            Object.keys(SUMMARY_ASSIGNMENTS).map((key, i) => {
              const initialValue = summary.assignment_detail[key];
              
              if (initialValue) {
                const value = getSummaryValue(
                  key,
                  summary.assignment_detail[key]
                );

                return (
                  <div
                  key={i}
                  className="bg-white shrink-0 overflow-hidden"
                  >
                    <div className="flex items-center justify-between bg-gradient-border p-3">
                      <div className="flex max-w-[475px] flex-col space-y-2">
                        <span className="text-pre-title-link-small uppercase text-magenta">
                          {SUMMARY_ASSIGNMENTS[key]}
                        </span>
                        {value}
                      </div>
                    </div>
                  </div>
                );
              }

              return null;
            })}
            <div className="text-CustomWhite absolute bottom-0 left-0  bg-indigo-500 w-full h-16 flex justify-between items-center px-3">
              <button
                className="flex items-center gap-2 border border-CustomWhite rounded-md px-6 py-2 font-bold uppercase tracking-[2.8px] hover:bg-indigo-900 hover:bg-opacity-50"
              > <Image width={18} height={18} src={trashIcon} alt="Trash Icon"/>
                {t("summary-discard-button")}
              </button>
              <button
                className="flex items-center gap-2 border border-CustomWhite rounded-md px-6 py-2 font-bold uppercase tracking-[2.8px] hover:bg-indigo-900 hover:bg-opacity-50"
              > <Image width={18} height={18} src={contactIcon} alt="Contact Icon"/>
                {t("summary-contact-button")}
              </button>
            </div>
        </div>

        <div className="relative w-full md:max-w-[450px] min-w-[300px] bg-indigo-500 bg-opacity-15 h-full border border-indigo-500 rounded-md overflow-y-auto scrollbar-thin scrollbar-track-transparent">
          <ConfirmationForm />
        </div>

      </div>
      <Carousel />

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

  const confirmHandler = useCallback(async () => {
    const isSuccess = await confirm(satisfaction);
    if (isSuccess) {
      router.push("/contact");
    }
  }, [confirm, router, satisfaction]);

  return (
    <div className="text-CustomWhite w-full">
      <div className="p-12 space-y-6">
        <h3 className="font-bold text-2xl">
          {t("summary-title")}
        </h3>
        <p className="text-xl">{t("summary-text")}</p>

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

      <div className="bg-indigo-500 w-full h-16 absolute bottom-0 left-0 flex justify-between items-center px-3">
        <button
          className="flex items-center gap-2 border border-CustomWhite rounded-md px-6 py-2 font-bold uppercase tracking-[2.8px] hover:bg-indigo-900 hover:bg-opacity-50"
          onClick={confirmHandler}
        > <Image width={18} height={18} src={downloadIcon} alt="Download Icon"/>
          {t("summary-download-button")}
        </button>
        <button
          className="flex items-center gap-2 border border-CustomWhite rounded-md px-6 py-2 font-bold uppercase tracking-[2.8px] hover:bg-indigo-900 hover:bg-opacity-50"
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
  accounts: "Accounts",
  timeline: "Timeline",
  budget: "budget",
  maintenance: "maintenance",
  current: "Current",
  domain: "Domain",
  hosting: "Hosting",
  content: "Content",
  updating: "Updating",
  cms: "Cms",
  usage: "Usage",
  selectedCms: "Selected Cms",
  thirdParty: "Third-party",


  /* business: "Business",
  seniority: "Seniority",
  location: "Location",
  core_experience: "Core Experience",
  niche_experience: "Niches Experience",
  preferred_background: "Background Experience",
  in_house_experience_preference: "In-house experience",
  sector_experience: "Sectors",
  languages: "Language Requirement",
  urgency: "Urgency",
  budget: "Budget",
  visa_sponsorship: "Overseas visa", */
};