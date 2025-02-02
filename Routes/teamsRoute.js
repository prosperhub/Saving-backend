import express from "express";
import bodyParser from "body-parser";
import createTeams from "../Controllers/teamsController.js";

const router = express.Router();
router.use(bodyParser.json());
router.post("/new/teams", createTeams)

export default router;