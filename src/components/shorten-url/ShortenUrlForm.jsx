import React, { useState } from "react";
import ShortenUrlResults from "./ShortenUrlResults";
import { useFormik } from "formik";
import * as yup from "yup";

function ShortenUrlForm() {
  const [apiErrorMessage, setApiErrorMessage] = useState(null);
  const [links, setLinks] = useState([
    {
      id: Math.floor(Math.random() * 1000),
      link: "https://www.frontendmentor.io/profile/artimys",
      shortLink: "https://shrtco.de/Xabypm",
    },
  ]);

  const onSubmit = async (values, actions) => {
    try {
      const response = await fetch(
        "https://api.shrtco.de/v2/shorten?url=" + values.link
      );

      const data = await response.json();

      // For this API, checking for errors on `data` as it contains
      // better errors instead of `response` object
      if (!data.ok) {
        console.table(data);
        throw new Error(data.error);
      }

      const newLink = {
        id: Math.floor(Math.random() * 1000),
        link: data.result.original_link,
        shortLink: data.result.full_short_link,
      };

      setLinks((prevLinks) => [...prevLinks, newLink]);

      actions.resetForm();
    } catch (error) {
      console.log("onSubmit:", error);
      setApiErrorMessage("Something's not working, please try again later.");
      // setApiErrorMessage(String(error));
    }
  };

  const prependProtocol = (event) => {
    handleBlur(event);

    if (values.link.trim().length === 0) {
      return;
    }

    const hasHTTPProtocolRegex = /^https?:\/\/.*$/i;

    if (!hasHTTPProtocolRegex.test(values.link)) {
      const linkWithProtocol = "http://" + values.link;
      setFieldValue("link", linkWithProtocol);
    }
  };

  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      link: "",
      // link: "https://frontendmentor.io",
    },
    // validateOnChange: false,
    // validateOnBlur: false,
    validationSchema: yup.object().shape({
      link: yup
        .string()
        .url(
          "Please enter a valid link (should begin with http:// or https://)"
        )
        .required("Please add a link"),
    }),
    onSubmit,
  });

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
                value={values.link}
                onChange={handleChange}
                onBlur={prependProtocol}
                id="link"
                name="link"
                type="text"
                autoComplete="off"
                placeholder="Shorten a link here..."
                className={`w-full py-4 pl-6 text-xl rounded-md ${
                  errors.link && touched.link
                    ? " outline outline-secondary-red placeholder:text-secondary-red/50"
                    : ""
                } `}
              />

              {errors.link && touched.link && (
                <span className="block text-xs italic md:text-base text-secondary-red lg:absolute">
                  {errors.link}
                </span>
              )}

              {apiErrorMessage && (
                <span className="block text-xs italic md:text-base text-secondary-red lg:absolute">
                  {apiErrorMessage}
                </span>
              )}
            </div>

            <button
              className="rounded-md disabled:bg-cyan-700 btn-primary-xl bg-primary-cyan"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Shortening..." : "Shorten It!"}
            </button>
          </form>
        </div>
      </div>

      <ShortenUrlResults links={links} />
    </>
  );
}

export default ShortenUrlForm;
