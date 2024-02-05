import * as shell from "shelljs";
import fs from "fs";

shell.mkdir("dist");
shell.mkdir("dist/public");
shell.mkdir("dist/public/js");
shell.mkdir("dist/public/css");

shell.cp("-R", "src/public/js/libraries", "dist/public/js/");