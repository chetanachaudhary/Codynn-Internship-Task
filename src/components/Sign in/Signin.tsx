"use client";
import React from "react";

import Logo from "/src/assets/Logo.png";
import { Input } from "../ui/input";

import { NavLink } from "react-router-dom";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  code: z.string().min(5, {
    message: "Code must be at least 5 characters.",
  }),
});

const Signin: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = () => {};
  return (
    <>
      <div className="flex justify-center  bg-[#000000] ">
        <div className=" w-[646px] h-auto bg-[#9B9B9B] bg-opacity-25 border-r-[0.5px] border-gray-500">
          <div className=" h-[100px] w-[100px] absolute z-1 top-52  right-[680px] rounded-full blur-[100px] bg-red-400"></div>
          <div className=" h-[100px] w-[100px] absolute z-1 top-4   rounded-full blur-[100px] bg-blue-500"></div>
          <div className=" h-[100px] w-[100px] absolute z-1 bottom-1   rounded-full blur-[100px] bg-yellow-400"></div>
          <div className="flex justify-center">
            <img src={Logo} className=" mt-[96px] w-9 h-9" alt="" />
          </div>

          <div className="w-[452px] h-72  ml-16 mt-36 font-sans">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#ACACAC] font-medium text-lg">
                        Code*
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-[#9B9B9B]  text-[#ffffff] text-md bg-opacity-25 border-gray-500 border-[0.5px] rounded-lg"
                          {...field}
                        />
                      </FormControl>

                      <FormDescription className="text-sm font-normal text-[#ACACAC] gap-2">
                        Please Enter the code provided by the Void Nepal team to
                        continue{" "}
                        <span className="flex justify-center items-center ">
                          Signing up.
                        </span>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <NavLink to="/Login">
                  <Button
                    type="submit"
                    className="w-[452px] bg-gradient-to-r from-[#609BF4] to-[#6E52A9] mt-12 "
                  >
                    Continue
                  </Button>
                </NavLink>
              </form>
            </Form>
          </div>
          {/* <div className="absolute  mt-[298px] flex justify-end">
            <img src={gradientyellow} className="  w-96 h-96" alt="" />
          </div>
          <div className="absolute  ">
            <img src={gradientred} className="  w-96 h-96" alt="" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Signin;
