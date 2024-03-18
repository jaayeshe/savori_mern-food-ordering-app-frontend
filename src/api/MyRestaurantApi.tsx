import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyRestaurantRequest = async (
    restaurantFormData: FormData
  ): Promise<Restaurant> => {
    try {
      const accessToken = await getAccessTokenSilently();

      const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: restaurantFormData,
      });

      if (!response.ok) {
        throw new Error("Failed to create restaurant");
      }

      return response.json();
    } catch (error) {
      console.error("Error creating restaurant:", error);
      throw new Error("Failed to create restaurant");
    }
  };

  const {
    mutate: createRestaurant,
    isLoading,
    isSuccess,
    isError,
  } = useMutation(createMyRestaurantRequest);

  if (isSuccess) {
    toast.success("Restaurant created!");
  }

  if (isError) {
    toast.error("Unable to create restaurant");
  }

  return { createRestaurant, isLoading };
};
