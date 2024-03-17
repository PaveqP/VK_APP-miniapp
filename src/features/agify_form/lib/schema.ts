import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup.string()
    .required('Поле "имя" не должно быть пустым')
    .matches(/^[a-zA-Za]*$/, 'В имени могут использоваться только буквы латинского алфавита'),
});