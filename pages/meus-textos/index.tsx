import Container from '@/components/container';
import Header from '@/components/header';
import Layout from '@/components/layout';
import PostCard from '@/components/PostCard';
import {PostType} from 'interfaces/post';
import {userService} from 'modules/user/infra/userService';
import {NextPageWithLayout} from 'pages/_app';
import type {ReactElement} from 'react';
import {useQuery} from 'react-query';

type Props = {
  myPosts: PostType[];
};

const MyTexts: NextPageWithLayout<Props> = () => {
  const {
    data: posts,
    isLoading,
    error
  } = useQuery({
    queryKey: ['my-posts'],
    queryFn: async () => {
      const posts = await userService.myPosts();
      if (posts.isRight()) return posts.value.data;
      throw posts.value;
    },
    refetchOnWindowFocus: false
  });

  if (error)
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <p>Erro ao carregar seus textos.</p>
        <p>Atualize a página.</p>
      </div>
    );
  return (
    <div className="mb-4 prose max-w-none">
      {isLoading ? (
        <div className="flex flex-col items-center">
          <p>Carregando seus textos, aguarde... </p>
          <progress className="w-56 progress" />
        </div>
      ) : (
        <>
          meus Textos
          <section>
            <h2 className="mb-8 text-2xl font-bold leading-tight tracking-tighter">
              Textos publicados
            </h2>
            <div className="grid grid-cols-1 mb-32 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
              {posts?.map(post => (
                <PostCard
                  pid={post.id}
                  key={post.slug}
                  title={post.title ?? ''}
                  coverImage={post.image ?? ''}
                  date={post.createdAt}
                  slug={post.slug}
                  excerpt={post.description ?? ''}
                  editing
                />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

MyTexts.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout pageTitle="Meus textos">
      <Container>
        <Header />
        {page}
      </Container>
    </Layout>
  );
};

export {MyTexts as default};
