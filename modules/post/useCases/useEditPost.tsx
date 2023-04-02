import {msg} from '@/shared/useCases/messages';
import yup from '@/shared/utils/yup/translatedYup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Session} from 'next-auth';
import {useRouter} from 'next/router';
import {useForm} from 'react-hook-form';
import {useQuery} from 'react-query';
import {toast} from 'react-toastify';
import invariant from 'tiny-invariant';
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

export default function useEditPost(session: Session | null) {
  const router = useRouter();
  const {pid} = router.query;
  const {
    isLoading //TODO: show loading
  } = useQuery({
    queryKey: ['my-post', pid],
    queryFn: async ({signal}) => {
      const post = await postService.findById(pid as string, signal);
      if (post.isRight()) {
        reset({
          title: post.value.data.title || undefined,
          subtitle: post.value.data.subtitle || undefined,
          description: post.value.data.description || undefined,
          content: post.value.data.content || undefined,
          image: post.value.data.image || undefined,
          published: post.value.data.published || undefined,
          site: post.value.data.siteId || undefined
        });
      }
      throw post.value;
    },
    refetchOnWindowFocus: false,
    enabled: typeof pid === 'string'
    // onError: err => toast.error(msg.post.loadingError)
  });

  const {
    control,
    handleSubmit: submit,
    reset
  } = useForm({
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
    invariant(typeof pid === 'string', 'Id do texto inválido.');
    const result = postService.update(args, pid);
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
  return {control, handleSubmit, isLoading};
}
