const fs = require('fs')
const ls = require('ls')
const path = require('path')
const rm = require('rimraf')
const cypress = require('cypress')
const { merge } = require('mochawesome-merge')

const cypressConfig = require('./cypress.json')
const { markdownReporter } = require('./lib/report-markdown-custom')
const { today } = require('./lib/date')

// List all of existing report files
const reportDir = cypressConfig.reporterOptions.mochawesomeReporterOptions.reportDir
const reportFiles = `${reportDir}/*.xml`

ls(reportFiles, { recurse: true }, (file) => console.log(`removing ${file.full}`))

// Delete all existing report files
rm(reportFiles, (error) => {
  if (error) {
    console.error(`Error while removing existing report files: ${error}`)
    process.exit(1)
  }
  console.log('Removing all existing report files successfully!')
})

const reportDirMd = path.join(__dirname, 'cypress', 'reports', `report_${today()}.md`)

cypress
  .run(cypressConfig)
  .then((results) => {
    const reportDir = results.config.reporterOptions.mochawesomeReporterOptions.reportDir
    const mergeOptions = {
      files: [`${reportDir}/*.json`],
      reportDir: reportDir,
    }
    merge(mergeOptions)
      .then((report) => {
        // custom markdown reporter
        const content = markdownReporter(report)
        console.log(content)
        fs.writeFile(reportDirMd, content, (err) => {
          if (err) throw err
          console.log('Md report saved')
        })
      })
      .catch((error) => {
        console.error('errors merge: ', error)
        process.exit(1)
      })
  })
  .catch((error) => {
    console.error('errors run: ', error)
    process.exit(1)
  })
