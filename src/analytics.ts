import posthog from 'posthog-js'

posthog.init('phc_nFLkGuntmKWaBu3p2LLTN956kUFgXvnJoJ2cLBdrsA5r', {
  api_host: 'https://us.i.posthog.com',
  person_profiles: 'identified_only'
})

export default posthog
