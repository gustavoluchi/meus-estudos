import {msg} from '@/shared/useCases/messages';
import yup from '@/shared/utils/yup/translatedYup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {useQuery} from 'react-query';
import {toast} from 'react-toastify';
import {userService} from '../infra/userService';

const schema = yup.object({
  title: yup.string().required(),
  subtitle: yup.string().required(),
  description: yup.string(),
  content: yup.string().required(),
  image: yup.string(),
  published: yup.boolean(),
  site: yup.string()
});

export default function useEditUserInfo() {
  const {control, handleSubmit: submit} = useForm({
    reValidateMode: 'onBlur',
    defaultValues: {
      title: '',
      subtitle: '',
      description: '',
      content: '',
      image: '',
      published: false,
      site: ''
    },
    resolver: yupResolver(schema)
  });
  const {data, isLoading} = useQuery({
    queryKey: ['my-info'],
    queryFn: () => userService.myInfo()
  });

  const handleSubmit = submit(async args => {
    const result = await userService.create(args);
    if (result.isRight()) {
      return toast(msg.post.success, {type: 'success'});
    }
    return toast(msg.post.error, {type: 'error'});
  });
  return {control, handleSubmit, data, isLoading};
}
