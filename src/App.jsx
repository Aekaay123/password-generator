/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [ischarAllowed, setCharAllowed] = useState(false);
  const [isNumberAllowed, setNumberAllowed] = useState(true);
  const [password, setPassword] = useState("");

  // const generatePassword = useCallback(() => {
  //   let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   const nums = "0123456789";
  //   const special = "!@#$%^&*()_+";

  //   if (isNumberAllowed) charset += nums;
  //   if (ischarAllowed) charset += special;
  //   let pass = "";
  //   for (let i = 0; i < length; i++) {
  //     pass += charset.charAt(Math.floor(Math.random() * charset.length));
  //   }

  //   setPassword(pass);
  // }, [ischarAllowed, isNumberAllowed, length]);

  const generatePassword=()=>{
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const special = "!@#$%^&*()_+";

    if (isNumberAllowed) charset += nums;
    if (ischarAllowed) charset += special;
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(pass);
  }

  useEffect(() => {
    generatePassword();
  }, [length, isNumberAllowed, ischarAllowed]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    alert("Password Copied");
  }
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center ">
        <div className="flex flex-col gap-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 shadow-lg shadow-gray-600 rounded-md justify-center items-center">
          <h1 className="animate-never">
            <span className="text-3xl bg-gradient-to-r from-red-500 v to-cyan-900 text-transparent bg-clip-text">
              Password Generator
            </span>
          </h1>
          <div className="flex gap-2 mt-10">
            <input
              type="text"
              value={password}
              className="text-md text-black outline-none rounded-md px-3 py-1"
            />
            <button onClick={copyPassword}className="bg-black text-xl px-5 hover:text-black hover:bg-green-500 text-white font-bold text-center rounded-md">
              Copy
            </button>
          </div>
          <div className="flex gap-2 mt-4 ">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="text-md text-red-900 outline-none rounded-md px-3 py-1"
            />
            <label htmlFor="length">Length:{length}</label>
          </div>
          <div>
            <div className="space-x-2">
              <input
                type="checkbox"
                name="checkbox"
                className="size-4 rounded-full"
                checked={isNumberAllowed}
                onClick={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="checkbox">Numbers</label>
            </div>
            <div className="space-x-2">
              <input
                type="checkbox"
                name="checkboxChar"
                className="size-4"
                checked={ischarAllowed}
                onClick={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="checkboxChar">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
