import { useQuery } from "@tanstack/react-query";
import { fetchInstituteDetails } from "../services/instituteDetails.js";

export const useInstitute = () =>
    useQuery({
        queryKey: ["institute"],
        queryFn: fetchInstituteDetails,
        staleTime: 10 * 60 * 1000,
        cacheTime: 30 * 60 * 1000,
        retry: 1,
        refetchOnWindowFocus: false,
    });
