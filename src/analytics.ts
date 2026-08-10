import posthog from 'posthog-js'

posthog.init('phc_aBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890', {
  api_host: 'https://us.i.posthog.com',
  person_profiles: 'identified_only'
})

export default posthog
