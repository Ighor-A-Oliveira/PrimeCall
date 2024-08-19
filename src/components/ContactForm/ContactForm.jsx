import { getFormFields } from "../../API";

export default function ContactForm() {
    const formFields = getFormFields();
  return (
    <div>
      <div>
        <form action="#" method="" className="space-y-4">
          <div className="flex flex-col justify-center items-center w-full">

            {formFields.map((field, index) => 
                field.single ? 
                (
                    <div className="flex justify-center items-center my-2 w-full" key={index}>
                        <input
                            type="text"
                            id={field.id}
                            name={field.name}
                            placeholder={field.placeholder}
                            className={field.className}
                            required
                        />
                    </div>
                ) 
                : 
                (
                    <div className="flex justify-center flex-col md:flex-row items-center my-2 w-full" key={index}>
                        <input
                        type="text"
                        id={field.id}
                        name={field.name}
                        placeholder={field.placeholder}
                        className={field.className}
                        required
                        />
                        <input
                        type="text"
                        id={field.id2}
                        name={field.name2}
                        placeholder={field.placeholder2}
                        className={field.className2}
                        required
                        />
                    </div>
                )
            )}

            <textarea className="w-full border h-[90px] border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 my-2" name="helpYou" id="helpYou" placeholder="Como podemos te ajudar"></textarea>
          
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[250px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 justify-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
