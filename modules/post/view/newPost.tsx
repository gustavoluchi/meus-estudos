import CheckboxRHF from '@/components/RHF/CheckboxRHF';
import InputRHF from '@/components/RHF/InputRHF';
import TextAreaRHF from '@/components/RHF/TextAreaRHF';
import {keyNameMirror} from 'shared/utils/keyNameMirror';

const labels = {
  title: 'Título',
  subtitle: 'Subtítulo',
  description: 'Descrição',
  content: 'Conteúdo ²',
  image: 'Link da imagem ¹',
  published: 'Publicar?',
  site: 'Link'
};
const fieldNames = keyNameMirror(labels);

function NewPost({props: {control, handleSubmit}}: any) {
  return (
    <div className="mb-4 prose max-w-none">
      <h2>Novo texto</h2>
      <form noValidate onSubmit={handleSubmit} className="grid grid-cols-3">
        <InputRHF control={control} name={fieldNames.title} label={labels.title} required />
        <InputRHF control={control} name={fieldNames.subtitle} label={labels.subtitle} required />

        <InputRHF control={control} name={fieldNames.image} label={labels.image} />

        <InputRHF control={control} name={fieldNames.site} label={labels.site} />
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
          required
        />
        <div className="flex justify-between col-span-3 px-2 mt-4">
          <p>
            1. Por enquanto, só imagens do <a href="https://unsplash.com">unsplash.com</a> são
            aceitas.
          </p>
          <p>* Novas postagens têm um atraso de 10 segundos para aparecerem na tela inicial.</p>
          <div className="flex items-center">
            <CheckboxRHF
              control={control}
              name={fieldNames.published}
              label={labels.published}
              className="mr-4"
            />
            <button className="btn" type="submit">
              Salvar
            </button>
          </div>
        </div>
        <p className="flex justify-between col-span-3 px-2 mt-4">2. Sintaxe markdown disponível.</p>
      </form>
    </div>
  );
}

export default NewPost;
