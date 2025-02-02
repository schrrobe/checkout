import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// Konfiguration, um das Hinzufügen von CSS zu verhindern (CSS wird durch Nuxt hinzugefügt)
config.autoAddCss = false

// Füge die gewünschten Icons hinzu (hier die vollständige Sammlung von "fas")
library.add(fas)

export default defineNuxtPlugin((nuxtApp) => {
    // Registriere das FontAwesomeIcon als globale Komponente
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
