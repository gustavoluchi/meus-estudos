import {msg} from '@/shared/useCases/messages';
import yup from '@/shared/utils/yup/translatedYup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {toast} from 'react-toastify';
import {postService} from '../infra/postService';

const schema = yup.object({
  title: yup.string().required(),
  subtitle: yup.string().required(),
  description: yup.string(),
  content: yup.string().required(),
  image: yup.string(),
  published: yup.boolean(),
  site: yup.string()
});

export default function useNewPost() {
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
  const handleSubmit = submit(async args => {
    const result = postService.create(args);
    const toastId = toast.loading('Salvando seu texto...');
    if ((await result).isRight()) {
      return toast.update(toastId, {
        render: msg.post.success,
        type: 'success',
        isLoading: false,
        autoClose: 5000,
        closeButton: null
      });
    }
    return toast.update(toastId, {
      render: msg.post.error,
      type: 'error',
      isLoading: false,
      autoClose: 5000,
      closeButton: null
    });
  });
  return {control, handleSubmit};
}
