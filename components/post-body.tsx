import markdownStyles from './markdown-styles.module.css';

type Props = {
  content: string;
};

const PostBody = ({content}: Props) => {
  return (
    <article className="max-w-2xl mx-auto prose">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{__html: content}}
      />
    </article>
  );
};

export default PostBody;
