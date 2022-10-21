import InputRHF from '@/components/RHF/InputRHF';
import {format} from 'date-fns';
import {BaseSyntheticEvent} from 'react';
import type {Control} from 'react-hook-form';
import {keyNameMirror} from 'shared/utils/keyNameMirror';

const labels = {
  email: 'Email',
  name: 'Nome',
  username: 'Nick',
  image: 'Link para avatar',
  phone: 'Telefone'
};
const fieldNames = keyNameMirror(labels);

function EditUserInfoView({
  props: {control, handleSubmit, data, isLoading}
}: {
  props: {
    control: Control<any>;
    handleSubmit: (e?: BaseSyntheticEvent) => any;
    data: any | undefined;
    isLoading: boolean;
  };
}) {
  return (
    <div className="mb-4 prose max-w-none">
      <h2>Editar informações cadastrais</h2>
      <div className="flex flex-col items-center justify-center w-full">
        {isLoading ? (
          <>
            <p>Carregando seus dados, aguarde...</p>
            <progress className="w-56 progress"></progress>
          </>
        ) : (
          <>
            <form
              noValidate
              onSubmit={handleSubmit}
              className="grid w-full grid-cols-3"
            >
              <InputRHF
                control={control}
                name={fieldNames.name}
                label={labels.name}
                required
              />
              <InputRHF
                control={control}
                name={fieldNames.email}
                label={labels.email}
                required
              />
              <InputRHF
                control={control}
                name={fieldNames.phone}
                label={labels.phone}
              />
              <InputRHF
                control={control}
                name={fieldNames.username}
                label={labels.username}
              />
              <InputRHF
                control={control}
                name={fieldNames.image}
                label={labels.image}
                className="col-span-2"
              />
              <div className="flex items-center justify-end col-span-3 px-2 mt-4">
                <p>
                  {data?.updatedAt &&
                    `última atualização em ${format(
                      new Date(data.updatedAt),
                      'dd/MM/yyyy - HH:mm'
                    )}.`}
                </p>
                <button className="ml-8 btn" type="submit">
                  Salvar
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default EditUserInfoView;
