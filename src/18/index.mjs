export default function fixFiles(files) {
  const newFiles = []
  files.forEach(f => {
    if (newFiles.indexOf(f) === -1) newFiles.push(f)
    else {
      const repeated = files.filter(f_ => f_ === f)
      for (let i = 1; i < repeated.length; i++) {
        if (newFiles.indexOf(`${f}(${i})`) === -1) {
          newFiles.push(`${f}(${i})`)
          i = repeated.length
        }
      }
    }
  })
  return newFiles
}
