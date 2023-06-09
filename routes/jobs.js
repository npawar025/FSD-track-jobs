import express from "express";
import testUser from "../middleware/testUser.js";
import {
  getAllJob,
  createJob,
  updateJob,
  deleteJob,
  getSingleJob,
  showStats,
} from "../controllers/jobs.js";

const router = express.Router();

router.route("/").post(testUser, createJob).get(getAllJob);
router.route("/stats").get(showStats);
router
  .route("/:id")
  .get(getSingleJob)
  .delete(testUser, deleteJob)
  .patch(testUser, updateJob);

export default router;
