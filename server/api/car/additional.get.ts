import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const api_url = `https://www.carqueryapi.com/api/0.3`

    try {
        return await $fetch(api_url, { query })
    } catch (error) {
        console.error('CarQuery API error:', error)
        throw createError({ statusCode: 500, message: 'Failed to fetch car data' })
    }
})