import posthog from 'posthog-js'

posthog.init('phc_q82ZsbjiXHf7zKnvg8y8sf7ojpCtQHNQuE2cFDuZwHoR', {
  api_host: 'https://us.i.posthog.com',
  person_profiles: 'identified_only'
})

export default posthog
