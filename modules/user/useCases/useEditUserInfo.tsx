import {genericCrudMessage} from '@/shared/useCases/messages';
import yup from '@/shared/utils/yup/translatedYup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {useQuery} from 'react-query';
import {toast} from 'react-toastify';
import {userService} from '../infra/userService';

const schema = yup.object({
  name: yup.string(),
  email: yup.string().required(),
  phone: yup.string(),
  username: yup.string(),
  image: yup.string()
});

export default function useEditUserInfo() {
  const {
    control,
    handleSubmit: submit,
    reset
  } = useForm({
    reValidateMode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      username: '',
      image: ''
    },
    resolver: yupResolver(schema)
  });
  const {data, isLoading, error, refetch} = useQuery({
    queryKey: ['my-info'],
    queryFn: async () => {
      const userInfo = await userService.myInfo();
      if (userInfo.isRight()) {
        console.log(userInfo.value.data);
        const {email, name, image, phone, username}: any = userInfo.value.data;
        reset({
          email: email ?? '',
          name: name ?? '',
          image: image ?? '',
          phone: phone ?? '',
          username: username ?? ''
        });
        return userInfo.value.data;
      }
      throw userInfo.value;
    },
    refetchOnWindowFocus: false
  });

  const handleSubmit = submit(async args => {
    const result = await userService.update(args);
    const messages = genericCrudMessage('usuário');
    if (result.isRight()) {
      refetch();
      return toast(messages.updateSuccess, {type: 'success'});
    }
    return toast(messages.error, {type: 'error'});
  });
  return {control, handleSubmit, data, isLoading, error};
}
