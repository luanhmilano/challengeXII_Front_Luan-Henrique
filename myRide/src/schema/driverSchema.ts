import {z} from 'zod'

export const driverSchema = z.object({
    firstName: z.string().min(1, "Invalid name"),
    lastName: z.string().min(1, "Invalid last name"),
    email: z.string().min(1, "Invalid email").email("Invalid email"),
    city: z.string().min(1, "Invalid city"),
    referralCode: z.string().min(1, "Invalid code"),
})

export type DriverSchema = z.infer<typeof driverSchema>