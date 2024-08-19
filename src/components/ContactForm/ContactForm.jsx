export default function ContactForm() {
  return (
    <div>
      <div>
        <form action="#" method="POST" className="space-y-4 flex flex-col justify-center">
          <div className="flex flex-col">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-[250px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
