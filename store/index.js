export const state = () => ({
    locales: ['en', 'es'],
    locale: 'es',
    lightThemeActive: false
})

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.includes(locale)) {
            state.locale = locale
        }
    },
    SET_LIGHT_THEME(state, payload) {
        state.lightThemeActive = payload
    }
}
