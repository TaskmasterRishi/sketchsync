import { useMutation } from "convex/react";
import { useState } from "react"

export const useApiMutation = (mutationFuncation : any) => {
    const [pending, setPending] = useState(false);
    const apiMutation = useMutation(mutationFuncation);

    const mutate = (payload: any) => {
        setPending(true);
        return apiMutation(payload)
        .finally(() => setPending(false))
        .then((result) => {
            return result;
        })
        .catch((error) => {
            throw error;
        })
    };

    return {
        mutate,
        pending,
        
    }
}