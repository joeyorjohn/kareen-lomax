"use client";
import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import {
  ActiveCampaignInputs,
  handleActiveCampaignSubmit,
} from "active-campaign-react";

export default function ActiveCampaign() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [state, setState] = useState({
    isSubmitted: false,
    isError: false,
  });

  const onSubmit = (data) => {
    const formData = new FormData();

    // Hidden field key/values.
    formData.append("u", "5");
    formData.append("f", "5");
    formData.append("s", "s");
    formData.append("c", "0");
    formData.append("m", "0");
    formData.append("act", "sub");
    formData.append("v", "2");
    formData.append("or", "e25bad20e405f72d4ac84894101e28dc");

    // Form field key/values.
    formData.append("email", data.email);

    // Pass FormData values into a POST request to ActiveCampaign.
    // Mark form submission successful, otherwise return error state.
    fetch("https://seekermusic.activehosted.com/proc.php", {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then((response) => {
        setState({
          isSubmitted: true,
        });
      })
      .catch((err) => {
        setState({
          isError: true,
        });
      });
  };

  return (
    <div className="flex">
      <div className=" mx-auto my-20 max-w-md">
        {!state.isSubmitted ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <legend className="font-biro text-3xl text-center mb-3">
                KAREEN&apos;S JOURNAL
              </legend>
              <p className="font-inter text-md text-center leading-5">
                Join Kareen&apos;s mailing list to be the first to hear about
                new music, tour dates, merch, and more.
              </p>
              <div className="flex gap-2 my-8 content-end">
                <div className="w-full">
                  <div>
                    {/* <label htmlFor="email">Email</label> */}
                    <input
                      id="email"
                      name="email"
                      placeholder="Enter your Email"
                      c
                      className="w-full h-10 px-2 bg-transparent border-b placeholder-slate-800 placeholder-lg border-black outline-slate-400  focus:border-white"
                      {...register("email", {
                        required: true,
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      })}
                    />
                    {errors.email && (
                      <div className="validation--error">
                        <p>Please enter a valid email</p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="submit"
                    value="Submit"
                    className="bg-black text-white py-2 px-3 rounded-md  hover:bg-slate-700  cursor-pointer"
                  />
                </div>
              </div>
            </fieldset>
            {state.isError ? (
              <p>
                Unfortunately, your submission could not be sent. Please try
                again later.
              </p>
            ) : null}
          </form>
        ) : (
          <p className="text-center">
            Thank you. You are now subscribed to Kareen Lomax&apos;s mailing
            list.
          </p>
        )}
      </div>
    </div>
  );
}
