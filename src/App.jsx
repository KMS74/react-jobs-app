import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import NotFoundPage from "./pages/NotFoundPage";

import { jobLoader } from "./loaders/job-loader";

const App = () => {
  // Add a new job
  const addJob = async (newJob) => {
    try {
      await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      });
    } catch (error) {
      console.error("Error adding job", error);
    }
  };

  // Delete a job
  const deleteJob = async (jobId) => {
    try {
      await fetch(`/api/jobs/${jobId}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error deleting job", error);
    }
  };

  // Update a job
  const updateJob = async (jobId, updatedJob) => {
    try {
      await fetch(`/api/jobs/${jobId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedJob),
      });
    } catch (error) {
      console.error("Error updating job", error);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route
            loader={jobLoader}
            path="/jobs/:jobId"
            element={<JobDetailsPage deleteJob={deleteJob} />}
          />
          <Route
            path="/add-job"
            element={<AddJobPage addJobSubmit={addJob} />}
          />
          <Route
            path="jobs/:jobId/edit"
            element={<EditJobPage updateJobSubmit={updateJob} />}
            loader={jobLoader}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
