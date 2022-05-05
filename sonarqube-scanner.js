const scanner = require("sonarqube-scanner");
scanner(
  {
    options: {
      "sonar.sources": "./src",
      "sonar.projectKey": "sonar-test",
      "sonar.host.url": "http://localhost:9000",
      "sonar.login": "b7b1f38f85ac82d0729e534a45be84ad58c27274",
      "sonar.exclusions": "**/*.test.tsx",
      "sonar.tests": "./src",
      "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "test-report.xml",
      "sonar.eslint.reportPaths": "eslint-report.json",
    },
  },
  () => process.exit()
);
