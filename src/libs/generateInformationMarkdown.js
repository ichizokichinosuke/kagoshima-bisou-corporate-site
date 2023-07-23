const fs = require('fs')

let date = new Date()
let timestamp = date.toISOString()

let data = `
    # Timestamp\n\nThis file was generated at ${timestamp}.
`

fs.writeFileSync(`./generated-${timestamp}.md`, data)
