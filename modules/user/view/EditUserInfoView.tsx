import CheckboxRHF from '@/components/RHF/CheckboxRHF';
import InputRHF from '@/components/RHF/InputRHF';
import TextAreaRHF from '@/components/RHF/TextAreaRHF';
import {BaseSyntheticEvent} from 'react';
import type {Control} from 'react-hook-form';
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

function EditUserInfoView({
  props: {control, handleSubmit}
}: {
  props: {
    control: Control<any>;
    handleSubmit: (e?: BaseSyntheticEvent) => any;
  };
}) {
  return (
    <div className="mb-4 prose max-w-none">
      <h2>Novo texto</h2>
      <form noValidate onSubmit={handleSubmit} className="grid grid-cols-3">
        <InputRHF
          control={control}
          name={fieldNames.title}
          label={labels.title}
          required
        />
        <InputRHF
          control={control}
          name={fieldNames.subtitle}
          label={labels.subtitle}
          required
        />

        <InputRHF
          control={control}
          name={fieldNames.image}
          label={labels.image}
        />

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
          required
        />
        <div className="flex justify-end col-span-3 mt-4">
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
      </form>
    </div>
  );
}

export default EditUserInfoView;
