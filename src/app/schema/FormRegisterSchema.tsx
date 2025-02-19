import * as Yup from 'yup';

export const FormRegisterSchema = Yup.object().shape({
  Username: Yup.string().required("Ad daxil edin!"),

  Age: Yup.number()
    .required("Yaş daxil edin!")
    .positive("Yaş müsbət ədəd olmalıdır!")
    .integer("Yaş tam ədəd olmalıdır!"),

  Email: Yup.string()
    .email("Email düzgün yazılmayıb!")
    .required("Email daxil edin!"),

  Password: Yup.string()
    .required("Şifrə daxil edin!")
    .min(6, "Şifrə ən azı 6 simvol olmalıdır!")
    .max(12,"Şifrə ən Coxu 12 simvol olmalıdır!")
    .matches(/[^A-Za-z0-9]/, "Şifrə ən azı bir xüsusi simvol olmalıdır!"),

  confirmpassword: Yup.string()
    .oneOf([Yup.ref("Password")], "Şifrələr uyğun gəlmir!")
    .required("Şifrəni təsdiq edin!"),
});
