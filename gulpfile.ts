const gulp = require("gulp"),
  del = require("del"),
  runSequence = require("run-sequence"),
  sourceMaps = require("gulp-sourcemaps"),
  tsc = require("gulp-typescript");

/**
 * Remove dist directory.
 */
gulp.task("clean", (done) => {
  return del(["dist"], done);
});

/**
 * Copy start script.
 */
gulp.task("copy", () => {
  return gulp.src("server/bin/*")
  .pipe(gulp.dest("dist/bin"));
});

/**
 * Build the server.
 */
gulp.task("build:express", () => {
  const project = tsc.createProject("server/tsconfig.json");
  const result = gulp.src("server/src/**/*.ts")
  .pipe(sourceMaps.init())
  .pipe(project());
  return result.js
  .pipe(sourceMaps.write())
  .pipe(gulp.dest("dist/server"));
});

/**
 * Build the project.
 */
gulp.task("default", (done) => {
  runSequence("clean", "copy", "build:express");
});