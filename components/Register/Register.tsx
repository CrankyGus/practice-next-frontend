import Link from "next/link";

const RegisterComponent = () => {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-full flex justify-center items-center p-4">
      <form>
        <div className="bg-white p-12 rounded-lg w-96">
          <h1 className="text-2xl font-[MinimalBold] flex justify-center items-center">
            Register
          </h1>
          <label className="text-gray-700 font-[Minimal] text-xl ">Email</label>
          <input
            type="email"
            className="w-full py-2 bg-gray-100 text-gray-500 px-1 rounded-md outline-none mb-2"
          />
          <label className="text-gray-700 font-[Minimal] text-xl ">
            Password
          </label>
          <input
            type="password"
            className="w-full py-2 bg-gray-100 text-gray-500 px-1 rounded-md outline-none mb-2"
          />
          <label className="text-gray-700 font-[Minimal] text-xl ">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full py-2 bg-gray-100 text-gray-500 px-1 rounded-md outline-none mb-2"
          />
          <label className="text-gray-700 font-[Minimal] text-xl ">
            First Name
          </label>
          <input
            type="text"
            className="w-full py-2 bg-gray-100 text-gray-500 px-1 rounded-md outline-none mb-2"
          />
          <label className="text-gray-700 font-[Minimal] text-xl ">
            Last Name
          </label>
          <input
            type="text"
            className="w-full py-2 bg-gray-100 text-gray-500 px-1 rounded-md outline-none mb-2"
          />

          <input type="checkbox" className="py-2" />
          <label className="font-[Minimal] text-md px-2  ">
            Terms of service{" "}
          </label>
          <button
            type="submit"
            className="px-6 py-3 rounded-lg hover:bg-gradient-to-r from-red-500 to-yellow-400  transition-all font-[Minimal] text-xl duration-500 bg-gray-300 mx-24 mt-2"
          >
            {" "}
            Register{" "}
          </button>
          <div className="font-[Minimal] text-md pt-2 mx-[4.75rem]  ">
            {" "}
            Have an Account?{" "}
            <span className="ml-1 font-[MinimalBold]">
              <Link href="/login">
                <a>Login</a>
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterComponent;
