import useRequireAuth from '@/lib/useRequireAuth';
import useNewPost from 'modules/post/useCases/useNewPost';
import NewPost from 'modules/post/view/newPost';

const Novo = () => {
  const a = useRequireAuth();
  const props = useNewPost();
  if (a?.status === 'authenticated') return <NewPost props={props} />;
};

export default Novo;
