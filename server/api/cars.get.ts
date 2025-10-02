import carsData from '../assets/cars.json'
import { defineEventHandler } from 'h3'

export default defineEventHandler(() => carsData)