export async function getCalibrationData(assignmentId: string) {
  console.log("API:Get Calibration Data ");
  console.log({ assignment_id: assignmentId });
  // Simulating fetch call
  // await sleep(750)
  return Promise.resolve({
    assignment_id: "pkhj8-08jkl-bdcfg",
    assignment_status: "Draft",
    calibration_step: "1",
    total_calibration_steps: "3",
    options: [
      {
        _id: "zc34fg-86gvh3-21bcdfg",
        option: "A",
        categories: [
          {
            title: "Seniority",
            header: "7-8 PQE",
            body: "",
          },
          {
            title: "Private Practice Experience",
            header: "Top tier international firms",
            body: "Corporate, Corporate Commercial",
          },
          {
            title: "In-house Experience",
            header: "Short-term secondment(s) only",
            body: "Generalist role at energy MNC",
          },
        ],
      },
      {
        _id: "1234fg-86gvh3-zx34df",
        option: "B",
        categories: [
          {
            title: "Seniority",
            header: "10-12 PQE",
            body: "",
          },
          {
            title: "Private Practice Experience",
            header: "Tier 1 Singapore firms",
            body: "Corporate, Corporate Commercial",
          },
          {
            title: "In-house Experience",
            header: "3 Years",
            body: "Generalist role at tech MNC",
          },
        ],
      },
    ],
  });
}

export async function saveCalibration(params: any) {
  console.log("API:Save Calibration Parameters : ");
  console.log({ params });
  // Simulating fetch call
  const step = +params.calibration_step;

  // await sleep(750)
  // TODO: The else part is the expected data for the summary page
  return Promise.resolve(
    step < 3
      ? {
          assignment_id: "pkhj8-08jkl-bdcfg",
          assignment_status: "Draft",
          calibration_step: step + 1,
          total_calibration_steps: "3",
          options: [
            {
              _id: "zc34fg-86gvh3-21bcdfg",
              option: "A",
              categories: [
                {
                  title: "Seniority",
                  header: "7-8 PQE",
                  body: "",
                },
                {
                  title: "Private Practice Experience",
                  header: "Top tier international firms",
                  body: "Corporate, Corporate Commercial",
                },
                {
                  title: "In-house Experience",
                  header: "Short-term secondment(s) only",
                  body: "Generalist role at energy MNC",
                },
              ],
            },
            {
              _id: "1234fg-86gvh3-zx34df",
              option: "B",
              categories: [
                {
                  title: "Seniority",
                  header: "10-12 PQE",
                  body: "",
                },
                {
                  title: "Private Practice Experience",
                  header: "Tier 1 Singapore firms",
                  body: "Corporate, Corporate Commercial",
                },
                {
                  title: "In-house Experience",
                  header: "3 Years",
                  body: "Generalist role at tech MNC",
                },
              ],
            },
          ],
        }
      : {
          assignment_id: "pkhj8-08jkl-bdcfg",
          assignment_detail: {
            business: "Assistant General Counsel",
            seniority: { min: "8", max: "12" },
            location: "Japan",
            core_experience: ["Corporate Commercial", "TMT"],
            niche_experience: [
              { description: "Cybersecurity", rating: "Nice to have" },
              { description: "Data Privacy", rating: "Essential" },
            ],
            preferred_background: [
              "International Firm",
              "Local Tier 1 Firm (or better)",
            ],
            in_house_experience_preference: "Essential",
            sector_experience: [
              { description: "Financial Services", rating: "Nice to have" },
              { description: "Technology", rating: "Nice to have" },
            ],
            languages: {
              required: "yes",
              details: {
                language_name: "Mandarin",
                language_proficiency: "Converse/Exchange Emails",
              },
            },
            urgency: "Hold out for a better match",
            budget: {
              min: "20,000",
              max: "22,000",
              budget_flexibility: "yes",
            },
            visa_sponsorship: "yes",
          },
          calibration_detail: [
            {
              description: "Quality of private practice experience",
              rating: 1,
            },
            { description: "Prior in-house experience", rating: 2 },
            { description: "Niche telecoms experience", rating: 3 },
          ],
        }
  );
}
