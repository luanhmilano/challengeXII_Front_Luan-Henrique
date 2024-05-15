import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DriverSchema, driverSchema } from "../schema/driverSchema";

export const useForms = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<DriverSchema>({
        resolver: zodResolver(driverSchema)
    })

    return { register, handleSubmit, errors }
}