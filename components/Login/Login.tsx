const LoginComponent = () => {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen flex justify-center items-center p-4">
      <form>
        <div className="bg-white p-12 rounded-lg w-96">
          <h1 className="text-2xl font-[MinimalBold] flex justify-center items-center">
            Login
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
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
