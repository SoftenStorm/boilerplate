// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

import {Request, Response} from "express";
import {ActionHelper} from "./helpers/ActionHelper";
import {WorkerHelper} from "./helpers/WorkerHelper";
import {SchedulerHelper} from "./helpers/SchedulerHelper";
import {SitemapHelper} from "./helpers/SitemapHelper";
import {Project} from "./helpers/ProjectConfigurationHelper";
import {loc} from "./helpers/LocalizationHelper";

import Componentindex from "./components/index";

export const index = (req: Request, res: Response) => {
  new Componentindex(req, res, "home/index");
}

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.