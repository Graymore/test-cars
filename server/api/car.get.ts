import carsData from '../assets/cars.json'
import { readFileSync } from 'fs'
import { join } from 'path'
import { defineEventHandler, createError } from 'h3'

export default defineEventHandler(event => {
    const { id } = getQuery(event)
    if (!id) throw createError({ statusCode: 400, statusMessage: 'ID is required' })

    const jsonPath = join(process.cwd(), 'server/assets', 'cars.json')
    const rawData = readFileSync(jsonPath, 'utf-8')
    const cars = JSON.parse(rawData)

    const car = cars.find((car: any) => car['id'] === Number(id))

    if (!car) throw createError({ statusCode: 404, statusMessage: 'Car not found' })

    return car
})