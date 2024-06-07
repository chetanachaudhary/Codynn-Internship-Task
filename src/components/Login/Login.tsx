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

const login: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = () => {};
  return (
    <>
      <div className="flex justify-center  bg-[#000000] font-sans">
        <div className=" w-[720px] h-[850px] bg-[#9B9B9B] bg-opacity-25 border-r-[0.5px] border-gray-500">
          <div className="absolute"></div>
          <div className="flex justify-center">
            <img src={Logo} className=" mt-[131px] w-9 h-9" alt="" />
          </div>

          <div className="w-[452px] h-72  ml-32 mt-36 font-sans">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#ACACAC] font-medium text-lg">
                        Username*
                      </FormLabel>

                      <FormControl>
                        <Input
                          className="bg-[#9B9B9B] bg-opacity-25 border-gray-500 border-[0.5px] rounded-lg"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem className="mt-[15px]">
                      <FormLabel className="text-[#ACACAC] font-medium text-lg ">
                        Password*
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-[#9B9B9B] bg-opacity-25 border-gray-500 border-[0.5px] rounded-lg"
                          {...field}
                        />
                      </FormControl>

                      <FormDescription className="text-sm font-normal flex justify-end text-[#7C71CF] items-center  gap-2">
                        <span className=" ">Forget Password?</span>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-[452px] bg-gradient-to-r from-[#609BF4] to-[#6E52A9] mt-12 text-lg"
                >
                  Login
                </Button>
                <Button
                  type="submit"
                  className="w-[452px] bg-gradient-to-r from-[#D3D3D3] to-[#A6A6A6] mt-[20px] text-[#000000] font-semibold text-lg "
                >
                  Admin Signup
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;