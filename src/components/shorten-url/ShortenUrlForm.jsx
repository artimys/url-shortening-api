import React, { useState } from "react";
import ShortenUrlResults from "./ShortenUrlResults";
import { useFormik } from "formik";
import * as yup from "yup";

function ShortenUrlForm() {
  const [links, setLinks] = useState([
    {
      id: Math.floor(Math.random() * 1000),
      link: "https://www.frontendmentor.io",
      shortLink: "https://rel.ink/k4Kyk",
    },
    {
      id: Math.floor(Math.random() * 1000),
      link: "https://www.frontendmentor.io/profile/artimys",
      shortLink: "https://rel.ink/k4Kyk",
    },
    {
      id: Math.floor(Math.random() * 1000),
      link: "https://www.linkedin.com/company/frontend-mentor",
      shortLink: "https://rel.ink/k4Kyk",
    },
  ]);

  const onSubmit = async (values, actions) => {
    // console.log(values);
    // console.log(actions);
    // await new Promise((r) => setTimeout(r, 1000));

    try {
      const response = await fetch(
        "https://api.shrtco.de/v2/shorten?url=" + values.website
      );
      const data = await response.json();

      // console.log(data);

      const newLink = {
        id: Math.floor(Math.random() * 1000),
        link: data.result.original_link,
        shortLink: data.result.full_short_link,
      };

      setLinks((prevLinks) => [...prevLinks, newLink]);

      // TODO - check if status not OKAY
      // TODO - add http to textbox is missing

      // actions.resetForm();
    } catch (error) {
      console.log(error);
      // TODO - throw error
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      website: "https://frontendmentor.io",
    },

    validationSchema: yup.object().shape({
      website: yup
        .string()
        .url("Please add a link")
        .required("Please add a link"),
    }),
    onSubmit,
  });

  // console.log(errors);

  return (
    <>
      <div className="bg-split-white-gray">
        <div className="container">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-8 bg-right bg-no-repeat bg-cover rounded-md bg-primary-dark-violet bg-shorten-mobile sm:bg-shorten-desktop lg:flex-row lg:items-start md:px-12 md:py-12"
          >
            <div className="flex-1 space-y-2">
              <input
                value={values.website}
                onChange={handleChange}
                onBlur={handleBlur}
                id="website"
                name="website"
                type="text"
                autoComplete="off"
                placeholder="Shorten a link here..."
                className={`w-full py-5 pl-6 text-xl rounded-md outline ${
                  errors.website && touched.website
                    ? " outline-secondary-red"
                    : ""
                } `}
              />

              {errors.website && touched.website && (
                <span className="block text-xs italic md:text-sm text-secondary-red lg:absolute">
                  {errors.website}
                </span>
              )}
            </div>

            <button
              className="rounded-md disabled:bg-cyan-700 btn-primary-xl bg-primary-cyan"
              disabled={isSubmitting}
              type="submit"
            >
              Shorten It!
            </button>
          </form>
        </div>
      </div>

      <ShortenUrlResults links={links} />
    </>
  );
}

export default ShortenUrlForm;
