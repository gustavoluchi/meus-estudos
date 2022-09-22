import InputRHF from '@/components/RHF/InputRHF';
import TextAreaRHF from '@/components/RHF/TextAreaRHF';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {keyNameMirror} from 'shared/utils/keyNameMirror';
import yup from 'shared/utils/yup/translatedYup';

const schema = yup.object({
  title: yup.string().required(),
  subtitle: yup.string().required(),
  description: yup.string(),
  content: yup.string().required(),
  image: yup.string(),
  published: yup.string(),
  site: yup.string()
});

const labels = {
  title: 'Título',
  subtitle: 'Subtítulo',
  description: 'Descrição',
  content: 'Conteúdo',
  image: 'Imagem',
  published: 'Publicar?',
  site: 'Link'
};
const fieldNames = keyNameMirror(labels);

export default function NewPost() {
  const {control, handleSubmit} = useForm({
    reValidateMode: 'onBlur',
    defaultValues: {
      title: '',
      subtitle: '',
      description: '',
      content: '',
      image: '',
      published: '',
      site: ''
    },
    resolver: yupResolver(schema)
  });
  return (
    <form
      noValidate
      onSubmit={handleSubmit(
        data => console.log(data),
        data => console.log(data)
      )}
      className="min-h-screen flex justify-center content-center flex-col items-center"
    >
      <InputRHF
        control={control}
        name={fieldNames.title}
        label={labels.title}
      />
      <InputRHF
        control={control}
        name={fieldNames.subtitle}
        label={labels.subtitle}
      />
      <InputRHF
        control={control}
        name={fieldNames.description}
        label={labels.description}
      />
      <InputRHF
        control={control}
        name={fieldNames.image}
        label={labels.image}
      />
      <InputRHF
        control={control}
        name={fieldNames.published}
        label={labels.published}
      />
      <InputRHF control={control} name={fieldNames.site} label={labels.site} />
      <TextAreaRHF
        control={control}
        name={fieldNames.content}
        label={labels.content}
      />
      <button className="btn" type="submit">
        salvar
      </button>
    </form>
  );
}
