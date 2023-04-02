export const msg = {
  post: {
    success: 'Post cadastrado com sucesso.',
    error: 'Erro ao cadastrar post.',
    loadingError: 'Erro ao carregar post.'
  }
};

export const genericCrudMessage = (baseWord: string, feminine = false) => {
  return {
    createSuccess: `${baseWord} cadastrad${feminine ? 'a' : 'o'} com sucesso.`,
    updateSuccess: `${baseWord} atualizad${feminine ? 'a' : 'o'} com sucesso.`,
    error: `Erro ao cadastrar ${baseWord}.`
  };
};
