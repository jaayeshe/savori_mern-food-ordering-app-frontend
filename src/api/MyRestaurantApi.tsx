import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  //create the functiion that creates the actual fetch request

  const createMyRestaurantRequest = async (restaurantFormData: FormData) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    });

    if (!response.ok) {
      throw new Error("Failed to create restaurant ");
    }
    return response.json();
  };

  const {
    mutate: createRestaurant,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createMyRestaurantRequest);

  if (isSuccess) {
    toast.success("Restaurant created!");
  }
  if (error) {
    toast.error("Unable to update restaurant");
  }

  return { createRestaurant, isLoading };

  //next we'll give this request to the use mutation hook in react...
  //query, so that it can manage state and those kind of stuff.
};

//we are going to group all the frontend API requests that's...
//used to communicate with the MyRestaurantAPI.
//in MyRestaurantAPI we'll add a different hook...
//in each endpoints just to keep things consistent & organized.
