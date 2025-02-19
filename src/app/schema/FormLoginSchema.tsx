import * as Yup from 'yup';

export const FormLoginSchema = Yup.object().shape({
  Email: Yup.string()
    .email("Email düzgün yazılmayıb!")
    .required("Email daxil edin!"),

  Password: Yup.string()
    .required("Şifrə daxil edin!")
    .min(6, "Şifrə ən azı 6 simvol olmalıdır!")
    .max(12,"Şifrə ən Coxu 12 simvol olmalıdır!")
    .matches(/[^A-Za-z0-9]/, "Şifrə ən azı bir xüsusi simvol olmalıdır!"),
});
