const router = require("express").Router();

const { triggerJob, formData } = require("../controller/jobsController");

router.post("/trigger-job", triggerJob);
router.post("/form-data", formData);

module.exports = router;
