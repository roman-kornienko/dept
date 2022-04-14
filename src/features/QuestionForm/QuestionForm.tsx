import {
  StyledForm,
  StyledQuestionForm,
  StyledQuestionFormInner,
  StyledQuestionFormTitle,
  StyledRow,
} from "./QuestionForm.styled";
import * as yup from "yup";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import { StyledButton } from "../../components/Button/Button.styled";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  name: yup.string().required("Name is required"),
  message: yup.string().required("Message is required"),
});

const QuestionForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <StyledQuestionForm>
      <StyledQuestionFormInner>
        <StyledQuestionFormTitle>
          Question? <br />
          We are here
        </StyledQuestionFormTitle>
        <StyledForm>
          <form onSubmit={formik.handleSubmit}>
            <StyledRow>
              <TextField
                fullWidth
                variant="standard"
                id="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                fullWidth
                variant="standard"
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </StyledRow>
            <TextField
              fullWidth
              multiline
              variant="standard"
              id="message"
              name="message"
              label="Message"
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />

            <StyledButton buttonType="primary" blueButton type="submit">
              Sen
            </StyledButton>
          </form>
        </StyledForm>
      </StyledQuestionFormInner>
    </StyledQuestionForm>
  );
};

export default QuestionForm;
