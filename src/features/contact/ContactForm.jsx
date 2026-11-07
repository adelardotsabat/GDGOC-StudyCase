import { useState } from "react";
import ArrowIcon from "../../components/ui/ArrowIcon";
import { submitInquiry } from "./submitInquiry";
import Asset from "../../components/ui/Asset";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  organization: "",
  subject: "",
  message: "",
  consent: false,
};

const fieldId = (name) => `contact-${name}`;

const inputClass =
  "w-full rounded-btn border border-line bg-white px-4 text-[15px] text-title placeholder:text-body focus:border-brand focus:ring-2 focus:ring-brand/30 focus:outline-none aria-[invalid=true]:border-g-red";

const a11y = (name, errors) => ({
  id: fieldId(name),
  "aria-invalid": errors[name] ? "true" : undefined,
  "aria-describedby": errors[name] ? `${fieldId(name)}-error` : undefined,
});

function validate(values, category, categories) {
  const errors = {};
  if (!values.firstName.trim())
    errors.firstName = "Please enter your first name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!categories.some((c) => c.id === category))
    errors.category = "Please choose a category.";
  if (!values.subject.trim()) errors.subject = "Please add a short subject.";
  if (!values.message.trim()) {
    errors.message = "Please tell us a little about your question or idea.";
  }
  return errors;
}

function Field({ name, label, required = false, error, children }) {
  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor={fieldId(name)} className="text-sm font-medium">
        {label}
        {required && " *"}
      </label>
      {children}
      {error && (
        <p id={`${fieldId(name)}-error`} className="text-[13px] text-g-red">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm({
  categories,
  category,
  onCategoryChange,
}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleCategoryChange = (e) => {
    onCategoryChange(e.target.value);
    setErrors((prev) => ({ ...prev, category: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values, category, categories);
    setErrors(found);

    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }

    setStatus("submitting");
    try {
      await submitInquiry({ ...values, category });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-card bg-surface p-6 md:p-9"
      >
        <h2 className="text-[30px] leading-[1.12] font-bold">
          Thanks for saying hello.
        </h2>
        <p className="leading-[1.55] text-body">
          Your message has been sent. We’ll reply to{" "}
          <strong className="font-medium text-title">{values.email}</strong> as
          soon as we can.
        </p>
        <button
          type="button"
          onClick={reset}
          className="font-medium text-brand-text hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-card bg-surface p-6 md:p-9"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
        <h2 className="text-[30px] leading-[1.12] font-bold">Send us a message</h2>
        <Asset
            name="category-joining-learning"
            alt=""
            className="shrink-0"
            fallback={
            <span className="text-[28px] leading-none text-brand-text" aria-hidden="true">
                TEST-ASET-GAGAL
            </span>
            }
        />
        </div>
        <p className="text-[13px] text-body">Fields marked * are required.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 sm:gap-5">
        <Field
          name="firstName"
          label="First name"
          required
          error={errors.firstName}
        >
          <input
            {...a11y("firstName", errors)}
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            autoComplete="given-name"
            placeholder="Your first name"
            className={`${inputClass} h-[54px]`}
          />
        </Field>
        <Field name="lastName" label="Last name">
          <input
            {...a11y("lastName", errors)}
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            autoComplete="family-name"
            placeholder="Your last name"
            className={`${inputClass} h-[54px]`}
          />
        </Field>
      </div>

      <Field name="email" label="Email address" required error={errors.email}>
        <input
          {...a11y("email", errors)}
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          autoComplete="email"
          placeholder="Where we can reply to you"
          className={`${inputClass} h-[54px]`}
        />
      </Field>

      <Field name="organization" label="University / organization">
        <input
          {...a11y("organization", errors)}
          name="organization"
          value={values.organization}
          onChange={handleChange}
          autoComplete="organization"
          placeholder="Where you study or work (optional)"
          className={`${inputClass} h-[54px]`}
        />
      </Field>

      <Field
        name="category"
        label="Inquiry category"
        required
        error={errors.category}
      >
        <div className="relative">
          <select
            {...a11y("category", errors)}
            name="category"
            value={category}
            onChange={handleCategoryChange}
            disabled={categories.length === 0}
            className={`${inputClass} h-[54px] appearance-none pr-11 disabled:opacity-60`}
          >
            {categories.length === 0 && (
              <option value="">Loading categories…</option>
            )}
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-brand-text"
          >
            <path
              d="m5 8 5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Field>

      <Field name="subject" label="Subject" required error={errors.subject}>
        <input
          {...a11y("subject", errors)}
          name="subject"
          value={values.subject}
          onChange={handleChange}
          placeholder="A short introduction to your question"
          className={`${inputClass} h-[54px]`}
        />
      </Field>

      <Field
        name="message"
        label="Your message"
        required
        error={errors.message}
      >
        <textarea
          {...a11y("message", errors)}
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us a little about your question or idea..."
          className={`${inputClass} min-h-[146px] resize-y py-4`}
        />
      </Field>

      <label className="flex items-start gap-3 text-[13px] leading-[1.55] text-body">
        <input
          type="checkbox"
          name="consent"
          checked={values.consent}
          onChange={handleChange}
          className="mt-0.5 size-5 shrink-0 accent-brand"
        />
        I agree that the information I share can be used to respond to this
        inquiry.
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-13 w-full items-center justify-center gap-4 rounded-btn bg-brand px-6 font-medium text-white transition hover:opacity-90 disabled:opacity-60 sm:w-[194px]"
        >
          {status === "submitting" ? (
            "Sending…"
          ) : (
            <>
              Send message
              <ArrowIcon />
            </>
          )}
        </button>
        <p className="max-w-[230px] text-xs leading-[1.5] text-body">
          Please don’t include passwords or sensitive personal information.
        </p>
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-g-red">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
