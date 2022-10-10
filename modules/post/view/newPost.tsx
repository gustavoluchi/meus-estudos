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

function NewPost({props: {control, handleSubmit}}: any) {
  return (
    <div className="mb-4 prose max-w-none">
      <h2>Novo texto</h2>
      <form noValidate onSubmit={handleSubmit} className="grid grid-cols-3">
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
          name={fieldNames.image}
          label={labels.image}
        />

        {/* <input type="checkbox" checked="checked" className="checkbox" /> */}
        <InputRHF
          control={control}
          name={fieldNames.site}
          label={labels.site}
        />
        <InputRHF
          control={control}
          name={fieldNames.description}
          label={labels.description}
          className="col-span-2"
        />
        <TextAreaRHF
          control={control}
          name={fieldNames.content}
          label={labels.content}
          className="col-span-3"
        />
        <div className="flex justify-end col-span-3 mt-4">
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
    </div>
  );
}

export default NewPost;
