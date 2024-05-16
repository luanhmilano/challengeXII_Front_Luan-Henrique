import {z} from 'zod'

export const driverSchema = z.object({
    firstName: z.string().min(1, "Invalid name"),
    lastName: z.string().min(1, "Invalid last name"),
    email: z.string().min(1, "Invalid email").email("Invalid email"),
    country: z.string().refine((field) => field !== "", {
        message: "Invalid country"
    }),
    city: z.string().min(1, "Invalid city"),
    referralCode: z.string().min(1, "Invalid code"),
    carType: z.string({ invalid_type_error: "Select a vehicle type." })
})

export type DriverSchema = z.infer<typeof driverSchema>