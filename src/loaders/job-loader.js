// define a loader function to fetch the job details
export const jobLoader = async ({ params }) => {
  const response = await fetch(`/api/jobs/${params.jobId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const job = await response.json();
  return job;
};
