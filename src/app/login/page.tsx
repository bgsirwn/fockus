import { AtSymbolIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-2/4 py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="border-2 border-amber-500 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="py-10">
              <h2 className="text-3xl font-bold mb-2">Sign In to Account</h2>
              <div className="border-2 w-10 inline-block mb-2"></div>
              <p className="text-gray-400 my-3">or use your email account</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <AtSymbolIcon className="h-5 w-5 text-gray-400 mr-2"/>
                  <input type="text" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"/>
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <LockClosedIcon className="h-5 w-5 text-gray-400 mr-2"/>
                  <input type="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1"/>
                </div>
                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs"><input type="checkbox" className="mr-1"/>Remember Me</label>
                  <a href="#" className="text-xs hover:underline">Forgot Password?</a>
                </div>
                <button className="border-2 border-amber-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-amber-500 hover:text-white">Sign In</button>
              </div>
            </div>
          </div>
          <div className="w-2/5 bg-amber-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">Enter your personal details and start your journey with us</p>
            <button className="border-2 border-white text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-amber-500">Sign Up</button>
          </div>
        </div>
      </main>
    </div>
  );
}
