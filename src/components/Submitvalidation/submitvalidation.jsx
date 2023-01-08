const submitvalidation = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Title is required";
  } else if (values.title.length < 5) {
    errors.title = "Title must be at least 5 characters long";
  }

  if (!values.body) {
    errors.body = "Blog body is required";
  } else if (values.body.length < 2 || values.body.length > 20) {
    errors.body = "Text has to be between 2 and 20 characters long";
  }

  if (!values.author) {
    errors.author = "The author's name is required";
  }

  if (!values.number) {
    errors.number = "A number is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export default submitvalidation;
