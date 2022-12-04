import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
  content: string;
};

const PostBody = ({content}: Props) => {
  return (
    <article className="max-w-4xl mx-auto prose">
       {/* eslint-disable-next-line react/no-children-prop */}
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={content} />
    </article>
  );
};

export default PostBody;
