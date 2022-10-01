import CheckboxRHF from '@/components/RHF/CheckboxRHF';
import InputRHF from '@/components/RHF/InputRHF';
import TextAreaRHF from '@/components/RHF/TextAreaRHF';
import {keyNameMirror} from 'shared/utils/keyNameMirror';

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

export default function NewPost({props: {control, handleSubmit}}: any) {
  return (
    <form
      noValidate
      onSubmit={handleSubmit}
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

      {/* <input type="checkbox" checked="checked" className="checkbox" /> */}
      <InputRHF control={control} name={fieldNames.site} label={labels.site} />
      <TextAreaRHF
        control={control}
        name={fieldNames.content}
        label={labels.content}
      />
      <div className="flex mt-4">
        <CheckboxRHF
          control={control}
          name={fieldNames.published}
          label={labels.published}
          className="mr-2"
        />
        <button className="btn" type="submit">
          Salvar
        </button>
      </div>
    </form>
  );
}
