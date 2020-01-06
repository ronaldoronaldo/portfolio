const perf = (global.performance = {
  now: () => Date.now()
})

export default perf
