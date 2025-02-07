import Image from "next/image";
import { Input } from "postcss";
import InputWithLabel from "./components/inputWithLabel/inputWithLabel/inputWithLabel";
import Button from "./components/button/button";

export default function Home() {
  return (
    <div className=" flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Entre na sua conta
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
       <form className="space-y-6">
        <InputWithLabel label='Email' id="email" name="email" type="text" required autocomplete="email"/>
        <InputWithLabel label='password' id="password" name="password" type="password" required autocomplete="password"/>
        

        <Button placeholder="Entrar"/>
       </form>
      </div>
    </div>
  );
}
