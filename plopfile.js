module.exports = function generateComponent(plop) {
  plop.setGenerator("Spec", {
    description: "Creates a spec file and fixture",

    prompts: [
      {
        message: "Name of folder, example:  001-Registration, 002-Login>> ",

        name: "folder",
      },

      {
        message:
          "Project Key, example:  Project Name: Test Automation Board (TAB-000)>> ",

        name: "epic",

        type: "input",

        validate(value) {
          if (/.+/.test(value)) {
            return true;
          }

          return "No EPIC? No spec! EPIC is Required";
        },
      },

      {
        message: "Name of the file, example: amali-001 >> ",

        name: "number",

        type: "input",

        validate(value) {
          if (/.+/.test(value)) {
            return true;
          }

          return "No number? No spec! Number is Required";
        },
      },
    ],
    actions: [
      {
        path:
          "cypress/integration/tests/{{folder}}/amali-{{dotCase number}}.spec.js",
        skipIfExists: true,
        templateFile: "plop-templates/spec/spec.plop",
        type: "add",
      },
      {
        path: "cypress/fixtures/amali-{{dotCase number}}.data.js",
        skipIfExists: true,
        templateFile: "plop-templates/spec/data.plop",
        type: "add",
      },
    ],
  });
};
