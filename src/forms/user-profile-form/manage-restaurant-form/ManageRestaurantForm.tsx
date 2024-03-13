import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";

const formSchema = z.object({
  restaurantName: z.string({
    required_error: "restaurant name is required",
  }),
  city: z.string({
    required_error: "City name is required",
  }),
  Country: z.string({
    required_error: "Country name is required",
  }),
  deliveryPrice: z.coerce.number({
    required_error: "delivery price is required",
    invalid_type_error: "must be a valid number",
  }),
  estimatedDeliveryTime: z.coerce.number({
    required_error: "Estimated Delivery Time is required",
    invalid_type_error: "must be a valid number",
  }),
  cuisines: z.array(z.string()).nonempty({
    message: "please select atleast 1 item",
  }),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, "name is required"),
      price: z.coerce.number().min(1, "price is required"),
    })
  ),
  imageFile: z.instanceof(File, { message: "image is required" }),
});

//creating a type based on the properties that we added into
//our formSchema & based on the type of those properties

type restaurantFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (resturantFormData: FormData) => void;
  isLoading: boolean;
};

const ManageRestaurantForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<restaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  const onSubmit = (formDataJson: restaurantFormData) => {
    //TODO - convert formDataJson to a new Formdata object
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p019 rounded-md"
      >
        <DetailsSection />
      </form>
    </Form>
  );
};

export default ManageRestaurantForm;

//we'll have our form in its own component & then at
//the page level(where we do our API requests) we will
//pass in functions that calls the createMyRestaurant API
//from the page level as an onSave prop.

//this makes our form re-useable & it splits out the data fetching
//from the actual form logic

//...form: spreading all the form functions & methods & objects,
//etc that we get from these form hook onto the shadcn form
//so that we can link the 2 together

//we'll render this form on the ManageRestaurant page & add it to the
//routes and see what it looks like in the browser.
