exports.addTask = ({id, description}) => new Promise(async (resolve, reject) => {
  try {
    resolve({
      id,
      description
    })
  }
  catch (err) {
    reject(err)
  }
});